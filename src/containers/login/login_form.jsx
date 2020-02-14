import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

import imgLogin from "../../images/login.png";
import imgPass from "../../images/password.png";
import ru from "../../images/ru.png";
import en from "../../images/uk.png";
import actions from '../../actions';

const LoginForm = ({login}) => {
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

    function clickDropdown(e) {
        document.getElementById("dropdown__content").classList.toggle("show");
    }

    function onBlur(e) {
        e.preventDefault()
        let myDropdown = document.getElementById("dropdown__content");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }

    function onClickLang(event) {
        const value = event.target.lang;
        setFromValues({
            ...formValues,
            language: value
        })
    }

    return (

        <div className="login">

            <button className="dropdown__button" onClick={clickDropdown} onBlur={onBlur}>
                <div className="dropdown__username">
                    {
                        formValues.language === "ru" ?
                            <div className="dropdown__content-link">
                                <img src={ru} alt="rus"/>
                                Русский
                            </div> :
                            <div className="dropdown__content-link">
                                <img src={en} alt="eng"/>
                                English
                            </div>
                    }
                </div>
                <div className="dropdown__content" id="dropdown__content">
                    <div className="dropdown__content-link" lang="ru" onClick={onClickLang}>
                        <img src={ru} alt="rus"/>
                        Русский
                    </div>
                    <div className="dropdown__content-link" lang="en" onClick={onClickLang}>
                        <img src={en} alt="eng"/>
                        English
                    </div>
                </div>
            </button>

            <div className="text-company">
                <h2 className="text-company__name">
                    TMS Beiersdorf
                </h2>
                <div className="text-company__about">
                    TMS для компании Beiersdorf
                </div>
            </div>

            <form className="login-form" onSubmit={onSubmit}>
                <div className="login-form__img-inp">
                    <img className="login-form__img" src={imgLogin}/>
                    <input className="login-form__input" type="text" name="login"
                           placeholder='login'
                           onChange={onChangeInput} required/>
                </div>
                <div className="login-form__img-inp">
                    <img className="login-form__img" src={imgPass}/>
                    <input className="login-form__input" type="password" name="password"
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
/*
<select className="language-select" name="language" onChange={onChangeInput} defaultValue="ru">
    <option className="language-select__option" value="en">English</option>
    <option className="language-select__option" value="ru">Русский</option>
</select>*/