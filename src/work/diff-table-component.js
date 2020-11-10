import React from 'react';
import currJSON from '../data/current';
import prevJSON from '../data/prev';
import { composeJSON } from '../utils/json-tools';

function DiffTable() {
    return (
        <table border='1'>
            {
                composeJSON(currJSON.answers, prevJSON.answers).map(item => (
                    <tr><td>{item.question}</td><td>{item.previous}</td><td>{item.current}</td><td>{item.order}_____</td><td>{item.section}_____</td><td>{item.action}</td></tr>
                ))
            }
        </table>
    );
}

export default DiffTable;
