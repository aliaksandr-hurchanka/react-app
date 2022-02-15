import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import { sidebar, nav, navItem, navItemActive } from './sidebar.module.scss';

function Sidebar() {

    const getActiveClass = ({ isActive }) => (isActive ? navItemActive : navItem);

    return (
        <div className={sidebar}>
            <nav>
                <ul className={nav}>
                    <li>
                        <NavLink className={getActiveClass} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={getActiveClass} to="/lazy">Lazy</NavLink>
                    </li>
                    <li>
                        <NavLink className={getActiveClass} to="/typescript">Typescript</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export { Sidebar };
