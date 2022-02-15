import React from 'react';
import { main } from './main.module.scss';

function Main(props) {
    return (
        <main className={main}>
            {props.children}
        </main>
    )
}

export { Main };
