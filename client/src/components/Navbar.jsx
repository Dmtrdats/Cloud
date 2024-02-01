import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom'
import Logo from '../assets/img/navbar__logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className='navbar__logo'/>
                <div className="navbar__header">CLOUD</div>
                <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>   
                <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>     
            </div>
                   
        </div>
    );
};

export default Navbar;