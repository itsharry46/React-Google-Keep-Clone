import React from 'react';
import './index.css';

const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <>
        <footer>
            <p>Copywright {year} By <a className="footer_link" href="http://itsharry46.me">Hariharan Achary</a> </p>
        </footer>
        </>
    );
};

export default Footer;
