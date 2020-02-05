import React from "react";
import { useHistory } from "react-router-dom";

const Header = ({ logout }) => {

    let history = useHistory();

    function onClick() {
        logout(history);
    }

    return (
        <button onClick={onClick}> Log out </button>
    )
}

export default Header;