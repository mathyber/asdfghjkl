import React from "react";
import {Link, NavLink} from "react-router-dom";
import {DropdownButton, Dropdown} from "react-bootstrap";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.clickDropdownUser = this.clickDropdownUser.bind(this);
        this.clickDropdownDict = this.clickDropdownDict.bind(this);
        this.onBlurUser = this.onBlurUser.bind(this);
        this.onBlurDict = this.onBlurDict.bind(this);

    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    onClick() {
        this.props.logout(this.props.history);
    }

    clickDropdownUser(e) {
        document.getElementById("dropdown-user").classList.toggle("show");
    }

    clickDropdownDict(e) {
        document.getElementById("dropdown-dict").classList.toggle("show");
    }

    onBlurUser(e) {
        e.preventDefault();
        let myDropdown = document.getElementById("dropdown-user");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }

    onBlurDict(e) {
        e.preventDefault();
        let myDropdown = document.getElementById("dropdown-dict");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }

    render(){
        const { t } = this.props;
        return(
            <header className="header">
                {console.log(this.props.appConfig)}
                    <nav className="nav">
                        { this.props.appConfig.grids.map(grid => <Link className="nav__link" key={grid.name} to={grid.name}>{t(`${grid.name}`)}</Link>) }
                        { this.props.appConfig.dictionaries.map(dictElem => {
                            return dictElem.showOnHeader &&
                                <Link className="nav__link" key={dictElem.name} to={dictElem.name}>{t(`${dictElem.name}`)}</Link>
                        })
                        }
                        <div className="dropdown__button" onClick={this.clickDropdownDict} onBlur={this.onBlurDict}>
                            <div className="dropdown__username">
                                {t("dictionaries")}
                            </div>
                            <div className="dropdown__content" id="dropdown-dict">
                                { this.props.appConfig.dictionaries.map(dictElem => {
                                    return !dictElem.showOnHeader &&
                                        <Link className="dropdown__content-link" to={dictElem.name} key={dictElem.name}>{t(`${dictElem.name}`)}</Link>
                                    })
                                }
                            </div>
                        </div>
                    </nav>
                    <div className="dropdown__button" onClick={this.clickDropdownUser} onBlur={this.onBlurUser}>
                        <div className="dropdown__username">
                            {`${this.props.userInfo.userName} (${this.props.userInfo.userRole})`}
                        </div>
                        <div className="dropdown__content" id="dropdown-user">
                            <Link className="dropdown__content-link" to="/profile">{t("profile_settings")}</Link>
                            <div className="dropdown__content-link" onClick={this.onClick}>{t("exit")}</div>
                        </div>
                    </div>
                <DropdownButton className="DropdownButton" title={`${this.props.userInfo.userName} (${this.props.userInfo.userRole})`}>
                    <Dropdown.Item>
                        <Link to="/profile">{t("profile_settings")}</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div onClick={this.onClick}>{t("exit")}</div>
                    </Dropdown.Item>
                </DropdownButton>
            </header>
        )
    }
}

export default Header;