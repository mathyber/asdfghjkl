import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.clickDropdown = this.clickDropdown.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    onClick() {
        this.props.logout(this.props.history);
    }

    clickDropdown(e) {
        document.getElementById("dropdown__content").classList.toggle("show");
    }

    onBlur(e) {
        e.preventDefault()
        console.log(e);
            let myDropdown = document.getElementById("dropdown__content");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
    }

    render(){

        return(
            <header className="header">
                    <button className="dropdown__button" onClick={this.clickDropdown} tabIndex={0} onBlur={this.onBlur}>{`${this.props.userData.userName} (${this.props.userData.userRole})`}
                        <div className="dropdown__content" id="dropdown__content">
                            <a className="dropdown__content-link" href="/profile">profile</a>
                            <a className="dropdown__content-link" onClick={this.onClick}>logout</a>
                        </div>
                    </button>

            </header>
        )
    }
}

export default Header;