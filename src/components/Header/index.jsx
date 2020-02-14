import React from "react";
//import { useHistory } from "react-router-dom";

/*
const Header = ({ logout }) => {

    let history = useHistory();

   console.log(this.props.userName);

    function onClick() {
        logout(history);
    }

    return (
        <header className="header">
            <button className="header__button" onClick={onClick}>Logout</button>
        </header>
    )
}*/

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

  //  history = useHistory();
    onClick() {
        this.props.logout(this.props.history);
    }

    render(){

       // console.log(this.props.userName);

        return(
            <header className="header">
                <div className="header__text">{`${this.props.userData.userName} (${this.props.userData.userRole})`}</div>
                <button className="header__button" onClick={this.onClick}>Выйти</button>
            </header>
        )
    }

}

export default Header;