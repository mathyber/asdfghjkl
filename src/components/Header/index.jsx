import React from "react";
import {Link, NavLink} from "react-router-dom";
import {DropdownButton, Dropdown, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {PROFILE_LINK} from "../../routes/link";
import {LinkContainer} from "react-router-bootstrap"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    onClick() {
        this.props.logout(this.props.history);
    }

//{console.log(this.props.appConfig)}

    render() {
        const {t} = this.props;
        return (
            <header className="header">
                <Navbar collapseOnSelect expand="lg" bg="muted" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Nav className="mr-auto">
                        {this.props.appConfig.grids.map((grid, index) =>
                            <Nav.Item key={index}>
                                <LinkContainer to={`/grid/${grid.name}`}>
                                    <Nav.Link key={index}>
                                        {t(grid.name)}
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                        )
                        }

                        {this.props.appConfig.dictionaries.map((dictElem, index) => {
                                return dictElem.showOnHeader && <Nav.Item key={index}>
                                    <LinkContainer to={`/${dictElem.name}`}>
                                        <Nav.Link key={index}>
                                            {t(dictElem.name)}
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav.Item>
                            }
                        )
                        }

                        <NavDropdown title={t("dictionaries")} id="collasible-nav-dropdown">
                            {this.props.appConfig.dictionaries.map(dictElem => {
                                return !dictElem.showOnHeader &&
                                    <NavDropdown.Item key={dictElem.name}
                                                      onClick={() => this.props.history.push(dictElem.name)}>
                                        {t(dictElem.name)}
                                    </NavDropdown.Item>
                            })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar>

                <Navbar>
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown__username" id="dropdown-basic" variant="muted">
                            {`${this.props.userInfo.userName} (${this.props.userInfo.userRole})`}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.props.history.push(PROFILE_LINK)}>
                                {t("profile_settings")}
                            </Dropdown.Item>
                            <Dropdown.Item onClick={this.onClick}>
                                {t("exit")}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>
            </header>
        )
    }
}

export default Header;