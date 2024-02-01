import React from 'react';
import './registration.css';
import Input from './Input/Input';

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input type="text" placeholder="Enter email"/>
            <Input type="password" placeholder="Enter password"/>
            <Input type="password" placeholder="Confirm password"/>

            <button className="registration__btn">Войти</button>
        </div>
    );
};

export default Registration;