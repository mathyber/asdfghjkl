import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

import imgLogin from "../../images/login.png";
import imgPass from "../../images/password.png";
import actions from '../../actions/index.jsx';

//import { useTranslation } from 'react-i18next';

const LoginForm = ({login}) => {
 //   const { t, i18n } = useTranslation("ru");
    let history = useHistory();

    const [formValues, setFromValues] = useState({
        login: "",
        password: "",
        language: "ru",
    });

    const onChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFromValues({
            ...formValues,
            [name]: value
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        login(formValues, history);
    };

    return (

        <div className="login">
            <div className="text-company">
                <h2 className="text-company__name">
                    TMS Beiersdorf
                </h2>
                <div className="text-company__about">
                    TMS для компании Beiersdorf
                </div>
            </div>

            <select className="language-select" name="language" onChange={onChangeInput} defaultValue="ru">
                <option className="language-select__option" value="en">English</option>
                <option className="language-select__option" value="ru">Русский</option>
            </select>

            <form className="login-form" onSubmit={onSubmit}>
                <div className="login-form__img-inp">
                    <img className="login-form__img" src={imgLogin}/>
                    <input className="login-form__input" type="text" name="login"
                           //placeholder={t('login')}
                           placeholder='login'
                           onChange={onChangeInput} required/>
                </div>
                <div className="login-form__img-inp">
                    <img className="login-form__img" src={imgPass}/>
                    <input className="login-form__input" type="password" name="password"
                           //placeholder={t('password')}
                           placeholder='password'
                           onChange={onChangeInput} required/>
                </div>
                <button className="login-form__button" type="submit">Войти</button>
            </form>
        </div>


    )
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators({login: (data, history) => actions.userLoginRequest(data, history)}, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);