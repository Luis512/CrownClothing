import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo}  from '../header/assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='Logo' />
        </Link>
        <div className='options' >
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>
        </div>
    </div>
)

export default Header;