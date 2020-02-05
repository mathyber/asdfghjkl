import React from "react";

const Header = ({ logout, history }) => {
    return (
        <button onClick={() => logout(history)}> Log out </button>
    )
}

export default Header;