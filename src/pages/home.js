import React, { useState, useEffect } from 'react';
import useInput from "../hooks/useInput/useInput";

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

export const Home = () => {
    // const { value, onChange, onBlur, error } = useInput('Hello world', true);

    const pr1 = useInput('Hello world 1', true);
    const pr2 = useInput('Hello world 2', true);

    // return (
    //     <form>
    //         <input {...pr1} />
    //         <input {...pr2} />
    //         {pr1.error && <span style={{ color: 'red' }}>{pr1.error}</span>}
    //     </form>
    // );

    return null;
};

// ========================================
