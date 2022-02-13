import React from 'react';
import { row } from './row.module.scss';

function Row(props) {
    return (
        <div className={row}>
            {props.children}
        </div>
    );
}

export { Row };
