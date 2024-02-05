import {React, useState} from 'react';
import './registration.css';
import Input from './Input/Input';
import {useDispatch} from "react-redux";
import { login } from '../actions/user';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorisation'>
            <div className="authorisation__header">Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter password"/>

            <button onClick={() => dispatch(login(email, password))} className="authorisation__btn">Войти</button>
        </div>
    );
};

export default Login;