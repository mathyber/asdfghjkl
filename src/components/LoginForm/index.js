import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const LoginForm = ({login}) => {

    let history = useHistory();

    const [formValues, setFromValues] = useState({
        login: "",
        password: "",
        language: ""
    });

    const onChangeInput = (event) => {
        const name =  event.target.name;
        const value = event.target.value;

        setFromValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        login(formValues, history);
    };

    return (
        <form onSubmit = { onSubmit }>
            <label htmlFor="formLogin">
                <input id="formLogin" type="text" name="login" placeholder="Enter email" onChange={onChangeInput}/>
            </label>
            <label htmlFor="formPassword">
                <input id="formPassword" type="password" name="password" placeholder="Enter password" onChange={onChangeInput}/>
            </label>
            <label htmlFor="formLanguage">
                <input id="formLanguage" type="text" name="language" placeholder="Enter language" onChange={onChangeInput}/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm