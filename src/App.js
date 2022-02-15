import React, { Suspense } from 'react';
// import BlackApp from './interest/black-app';
// import UseEffectTest from './interest/use-effects';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
// import AdminApp from './interest/admin-app';

import { Home } from './pages/home';
import { Lazy } from './pages/lazy';
import { TypeScriptPage } from './pages/typescript';
import { Row } from './common/grid/row';
import { Sidebar } from './common/sidebar';
import { Main } from './common/main';
import { Content } from './common/content';
import './styles.scss';


const Menu = () => {
    return (
        <BrowserRouter>
            <Main>
                <Sidebar />
                <Content>
                    <Routes>
                        <Route index path="/typescript" element={<TypeScriptPage />} />
                        <Route path="/lazy" element={<Lazy />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Content>
            </Main>
        </BrowserRouter>
    )
}
class App extends React.Component {
    componentDidMount() {
        // console.log();
    }
    render() {
        return (
            <Row>
                <Menu />
            </Row>
        );
    }
};

export default App;
