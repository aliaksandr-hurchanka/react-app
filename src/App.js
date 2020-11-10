import React from 'react';
// import BlackApp from './interest/black-app';
// import UseEffectTest from './interest/use-effects';
import AdminApp from './interest/admin-app';
import './styles.scss';

class App extends React.Component {
    componentDidMount() {
        // console.log();
    }
    render() {
        return (
            <AdminApp />
        );
    }
};

export default App;
