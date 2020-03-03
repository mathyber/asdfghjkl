import React from "react";
import {Button, ButtonToolbar, Card, Col, Dropdown, Form, Nav, Row, Table} from "react-bootstrap";
import {compose} from "redux";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import selector from "../../selectors/userInfo";
import selectorGrid from "../../selectors/grid";
import {withRouter} from "react-router";
import actions from "../../actions";
import ModalRepresentation from "./modalRepresentation";
import {IoIosAdd} from "react-icons/io";
import {MdSettings} from "react-icons/md";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };
    }

    componentDidMount() {
        this.props.gridRequest(this.props.match.params.name);
        //  console.log(this.props)
    }

    render() {
        const {t} = this.props;

        return (
            <div>
                <Card.Body>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            {t("representation")}
                        </Form.Label>
                        <Col sm="5">
                            <Row>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    {}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>{t("default_representation")}</Dropdown.Item>
                                    <Dropdown.Item  onClick={() => this.setState({modalShow: true})}>
                                        <ButtonToolbar>
                                        <Button variant="muted">
                                            <IoIosAdd size="30px"/>{t("create_btn")}
                                        </Button>
                                        <ModalRepresentation
                                            show={this.state.modalShow}
                                            onHide={() => this.setState({modalShow: false})}
                                        />
                                    </ButtonToolbar>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                <ButtonToolbar>
                                    <Button variant="dark" onClick={() => this.setState({modalShow: true})}>
                                        <MdSettings/>
                                    </Button>
                                    <ModalRepresentation
                                        show={this.state.modalShow}
                                        onHide={() => this.setState({modalShow: false})}
                                        grids={this.props.appConfig.grids}
                                    />
                                </ButtonToolbar>
                            </Row>
                        </Col>
                    </Form.Group>


                    <Table responsive>
                        <thead>
                        <tr>
                            {
                                this.props.appConfig.grids.map(gridElem => {
                                        if (gridElem.name === this.props.match.params.name) return gridElem.columns.map((el, index) => {
                                            return el.isDefault && <th key={index}> {t(el.name)}</th>
                                        })
                                    }
                                )
                            }
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {
                                console.log(this.props)
                            }
                            {

                            }
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appConfig: selector.getAppConfig(state),
    gridData: selectorGrid.gridData(state)
});

const mapDispatchToProps = dispatch => ({
    gridRequest: (payload) => dispatch(actions.gridRequest(payload))
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Grid);