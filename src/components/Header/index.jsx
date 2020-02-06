import React from "react";
import {useHistory} from "react-router-dom";

const Header = ({logout}) => {

    let history = useHistory();

    function onClick() {
        logout(history);
    }

    return (
        <header className="header">
            <button className="login-form__button" onClick={onClick}> Log out</button>
        </header>
    )
}

export default Header;