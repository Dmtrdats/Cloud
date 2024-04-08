import {React, useState} from 'react';
import './registration.css';
import Input from './Input/Input';
import { registration } from '../actions/user';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorisation'>
            <div className="authorisation__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter password"/>
            <button onClick={() => registration(email, password)} className="authorisation__btn">Регистрация</button>
        </div>
    );
};

export default Registration;