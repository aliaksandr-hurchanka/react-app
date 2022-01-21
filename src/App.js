import React, { Suspense } from 'react';
// import BlackApp from './interest/black-app';
// import UseEffectTest from './interest/use-effects';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import AdminApp from './interest/admin-app';

import { Home } from './pages/home';
import { Lazy } from './pages/lazy';
// import './styles.scss';


const Menu = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/lazy">Lazy</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/lazy">
                        <Lazy />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
class App extends React.Component {
    componentDidMount() {
        // console.log();
    }
    render() {
        return (
            <>
                <Menu />
            </>
        );
    }
};

export default App;
