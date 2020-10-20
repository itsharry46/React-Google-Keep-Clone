import React from 'react';
import logo from './logo.png';

const Header = () => {
    return(
        <>
        <div className="header">
            <img src={logo} alt="logo" width='50' height='50' />
            <h1>Keep Clone</h1>
        </div>
        </>
    );
};

export default Header;