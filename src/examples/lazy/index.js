import React from 'react';

const Lazy = () => {
    console.log('Lazy component was loaded right now...');
    return (
       <b>#Lazy Component is Loaded.</b>
    );
};

export default Lazy;
