/**
 * Header.js
 */

import React from 'react';
import checkImg from '../img/check.svg';

const Header = () => (
    <header>
        <h1>Lean Canvas Online</h1>
        <div id="btn_save">
            <a href="#">
                <img src={checkImg} alt="save"/>
            </a>
        </div>
    </header>
);

export default Header;
