import React from 'react';

class Hooks extends React.Component {
    constructor() {
        super();
        console.log('test 1');

        this.state = {};
    }

    componentDidMount() {
        console.log('test 4');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('test 2');
        return null;
    }

    render() {
        console.log('test 3');
        return (
            <div>#Hooks</div>
        );
    }
}

export default Hooks;