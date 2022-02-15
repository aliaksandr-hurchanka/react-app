import React from 'react';
import { content } from './content.module.scss';

function Content(props) {
    return (
        <div className={content}>
            {props.children}
        </div>
    );
}

export { Content };
