import {React, useState} from 'react';
import './registration.css';
import Input from './Input/Input';
import { registration } from '../actions/user';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter password"/>
            <Input type="password" placeholder="Confirm password"/>

            <button onClick={() => registration(email, password)} className="registration__btn">Войти</button>
        </div>
    );
};

export default Registration;