import React, { Suspense } from 'react';
// import BlackApp from './interest/black-app';
// import UseEffectTest from './interest/use-effects';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
// import AdminApp from './interest/admin-app';

import { Home } from './pages/home';
import { Lazy } from './pages/lazy';
import { TypeScriptPage } from './pages/typescript';
// import './styles.scss';


const Menu = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/lazy">Lazy</Link>
                    </li>
                    <li>
                        <Link to="/typescript">Typescript</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route index path="/typescript" element={<TypeScriptPage />} />
                <Route path="/lazy" element={<Lazy />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
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
