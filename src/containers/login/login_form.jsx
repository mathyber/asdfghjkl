import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useState } from 'react'
import {useHistory, withRouter} from "react-router-dom";

import imgLogin from "../../images/login.png";
import imgPass from "../../images/password.png";
import ru from "../../images/ru.png";
import en from "../../images/uk.png";
import actions from '../../actions';
import { withTranslation } from 'react-i18next';
import i18next from "i18next";
import {Dropdown} from "react-bootstrap";

const LoginForm = ({ login, t, i18n }) => {

    let history = useHistory();

    const [formValues, setFromValues] = useState({
        login: "",
        password: "",
        language: i18next.language,
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
        i18n.changeLanguage(event.target.lang);
        const value = event.target.lang;
        setFromValues({
            ...formValues,
            language: value
        })
    }

    return (

        <div className="login">

            <Dropdown className="dropdown__button">
                <Dropdown.Toggle className="dropdown__username" variant="dark" id="dropdown-basic">
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
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="dropdown__item" lang="ru" onClick={onClickLang}>
                        <img src={ru} alt="rus"/>
                        Русский
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown__item" lang="en" onClick={onClickLang}>
                        <img src={en} alt="eng"/>
                        English
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className="text-company">
                <h2 className="text-company__name">
                    {t("login_welcome")}
                </h2>
                <div className="text-company__about">
                    {t("login_support")}
                </div>
            </div>

            <form className="login-form" onSubmit={onSubmit}>
                <div className="login-form__img-inp">
                    <img className="login-form__img" src={imgLogin}/>
                    <input className="login-form__input" type="text" name="login"
                           placeholder={t("login")}
                           onChange={onChangeInput} required/>
                </div>
                <div className="login-form__img-inp">
                    <img className="login-form__img" src={imgPass}/>
                    <input className="login-form__input" type="password" name="password"
                           placeholder={t("password")}
                           onChange={onChangeInput} required/>
                </div>
                <button className="login-form__button" type="submit">{t("login_btn")}</button>
            </form>
        </div>


    )
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators({login: (data, history) => actions.userLoginRequest(data, history)}, dispatch);

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);

/*
<select className="language-select" name="language" onChange={onChangeInput} defaultValue="ru">
    <option className="language-select__option" value="translation.json">English</option>
    <option className="language-select__option" value="ru">Русский</option>
</select>

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

*/