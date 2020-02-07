import React from "react";
import {useHistory} from "react-router-dom";

const Header = ({logout}) => {

    let history = useHistory();

    function onClick() {
        logout(history);
    }

    return (
        <header className="header">
            <button className="header__button" onClick={onClick}> Logout</button>
        </header>
    )
}

export default Header;