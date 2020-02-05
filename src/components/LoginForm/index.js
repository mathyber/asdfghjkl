import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

const LoginForm = ({ login }) => {

    let history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        const auth = {
            login: e.target.elements.login.value,
            password: e.target.elements.password.value,
            language: e.target.elements.language.value
        }
        login(auth, history);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="formLogin">
                <input id="formLogin" type="text" name="login" placeholder="Enter email" />
            </label>
            <label htmlFor="formPassword">
                <input id="formPassword" type="password" name="password" placeholder="Enter password" />
            </label>
            <label htmlFor="formLanguage">
                <input id="formLanguage" type="text" name="language" placeholder="Enter language" />
            </label>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm