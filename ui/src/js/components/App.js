import React from 'react';
import PlayList from './PlayList';
import Filters from './Filters';
import { Col, Row } from 'react-bootstrap';

const App = () => (
    <div className="container">
        <Row>
            <Col md={10}>
                <PlayList />
            </Col>
            <Col md={2}>
                <Filters />
            </Col>
        </Row>
    </div>
);

export default App;
