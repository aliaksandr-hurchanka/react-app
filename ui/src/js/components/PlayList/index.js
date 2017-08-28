import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from './../../actions/playlist';
import { Table, Pagination } from 'react-bootstrap';

import { map } from 'lodash';


class PlayList extends Component {
    constructor(props) {
        super(props);

        this.onChangePage = this.onChangePage.bind(this);
    }
    componentDidMount() {
        this.props.pageActions.fetchItems();
    }
    onChangePage(page) {
        this.props.pageActions.changeActivePage(page);
    }
    render() {

        const { items, activePage, size, totalItems } = this.props;

        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Song</th>
                            <th>Genre</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            map(items, (item) => (
                                <tr key={item.id}>
                                    <td>{item.author}</td>
                                    <td>{item.song}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.year}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={Math.ceil(totalItems / size)}
                    maxButtons={5}
                    activePage={activePage}
                    onSelect={this.onChangePage}
                />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        items: state.items,
        size: state.size,
        totalItems: state.totalItems,
        activePage: state.activePage
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
