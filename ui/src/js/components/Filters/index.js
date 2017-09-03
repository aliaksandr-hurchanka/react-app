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
        this.props.pageActions.changeFilter({ type, value });
    }
    render() {

        const { availableFilters, activeFilters } = this.props;

        return (
            <div className="filters">
                <FormGroup>
                    {
                        map(availableFilters, (filter, key) => (
                            <div key={key}>
                                <Label>{key}</Label>
                                <DropdownButton
                                    bsSize="small"
                                    title={activeFilters[key] || "Select"}
                                    id={key}
                                >
                                    {
                                        map(filter, (item, i) => (
                                            <MenuItem
                                                eventKey={i}
                                                key={i}
                                                onSelect={() => this.onChangeFilter(key, item)}
                                            >
                                                {item || "Select"}
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
        availableFilters: state.availableFilters,
        activeFilters: state.activeFilters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
