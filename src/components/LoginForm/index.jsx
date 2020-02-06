/*import React, { useState } from 'react'
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
        <div className="login">
        <form className="login-form" onSubmit = { onSubmit }>
                <input className="login-form__input" type="text" name="login" placeholder="Enter email" onChange={onChangeInput}/>
                <input className="login-form__input" type="password" name="password" placeholder="Enter password" onChange={onChangeInput}/>
                <select className="login-form__input" name="language" onChange={onChangeInput} defaultValue="ru">
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
            <button className="login-form__button" type="submit">Login</button>
        </form>
        </div>
    )
}

export default LoginForm*/