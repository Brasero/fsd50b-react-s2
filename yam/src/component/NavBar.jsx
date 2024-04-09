import React from 'react';
import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
    return isActive ? {
        color: 'orange'
    } : {}
}

const NavBar = () => {
    return (
        <header>
            <h1>Yam</h1>
            <nav>
                <NavLink style={checkIsActive} to={'/'}>Home</NavLink>
                <NavLink style={checkIsActive} to={'/statistique'}>Statistiques</NavLink>
            </nav>
        </header>
    );
};

export default NavBar;