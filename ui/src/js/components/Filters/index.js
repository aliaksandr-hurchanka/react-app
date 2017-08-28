import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from './../../actions/filters';
import { FormGroup, DropdownButton, MenuItem, Label } from 'react-bootstrap';
import { map } from 'lodash';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.onChangeFilter = this.onChangeFilter.bind(this);
    }
    componentDidMount() {
        this.props.pageActions.getAvailableFilters();
    }
    onChangeFilter(type, value) {
        console.log(this.props);
        this.props.pageActions.changeFilter({ type, value });
    }
    render() {

        const { filters } = this.props;

        return (
            <div>
                <FormGroup>
                    {
                        map(filters, (filter, key) => (
                            <div key={key}>
                                <Label>{key}</Label>
                                <DropdownButton
                                    bsSize="small"
                                    title={"Select"}
                                    id={key}
                                >
                                    {
                                        map(filter, (item, i) => (
                                            <MenuItem
                                                eventKey={i}
                                                key={i}
                                                onSelect={() => this.onChangeFilter(key, item)}
                                            >
                                                {item}
                                            </MenuItem>
                                        ))
                                    }
                                </DropdownButton>
                            </div>
                        ))
                    }
                </FormGroup>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        filters: state.filters
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
