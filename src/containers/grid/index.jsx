import React from "react";
import {Button, ButtonToolbar, Card, Col, Dropdown, Form, Row, Table} from "react-bootstrap";
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
import selectorRepr from "../../selectors/representation";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalShow: false,
            representationSelectedName: null,
            isCreate: true
        };
    }

    componentDidMount() {
        this.props.getRepresentation(this.props.match.params.name);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.representationSelectedName !== this.state.representationSelectedName) {
            this.props.getRepresentation(this.props.match.params.name);
          //  this.setState({representationSelectedName: "default_representation"});
        }
    }

    representationSelectedName(name) {
        name ? localStorage.setItem("representationSelectedName", name) : localStorage.removeItem("representationSelectedName");
        this.setState({representationSelectedName: name})
    }

    render() {
        const {t} = this.props;
        console.log(this.props.representation);

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
                                        {t(localStorage.getItem("representationSelectedName"))}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.representationSelectedName()}>
                                            {t("default_representation")}
                                        </Dropdown.Item>
                                        {
                                            this.props.representations && this.props.representations.map((name) =>
                                                <Dropdown.Item key={name} onClick={() => this.representationSelectedName(name)}>{name}</Dropdown.Item>)
                                        }

                                        <ButtonToolbar>
                                            <Dropdown.Item onClick={() => this.setState({modalShow: true, isCreate: true})}>
                                                <IoIosAdd size="30px"/>{t("create_btn")}
                                            </Dropdown.Item>

                                            <ModalRepresentation
                                                show={this.state.modalShow}
                                                onHide={() => this.setState({modalShow: false})}
                                                isCreate={this.state.isCreate}
                                                representationSelected={this.state.representationSelectedName}
                                            />
                                        </ButtonToolbar>

                                    </Dropdown.Menu>
                                </Dropdown>
                                <ButtonToolbar>
                                    <Button variant="dark" disabled={this.state.representationSelectedName === "default_representation"}
                                            onClick={() => this.setState({modalShow: true,  isCreate: false})}>
                                        <MdSettings/>
                                    </Button>
                                    <ModalRepresentation
                                        show={this.state.modalShow}
                                        onHide={() => this.setState({modalShow: false})}
                                        setRepr={(name="default_representation") => this.setState({representationSelectedName: name})}
                                        isCreate={this.state.isCreate}
                                        representationSelected={this.state.representationSelectedName}
                                    />
                                </ButtonToolbar>
                            </Row>
                        </Col>
                    </Form.Group>


                    <Table responsive>
                        <thead>
                        <tr>

                            {
                                //переделать
                                this.props.representation ? this.props.representation.map(el => <th key={el}> {t(el.displayNameKey)}</th>) :
                                    this.props.appConfig.grids.map(gridElem => {
                                            if (gridElem.name === this.props.match.params.name) return gridElem.columns.map(el => {
                                                return el.isDefault && <th key={el}> {t(el.displayNameKey)}</th>
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
    gridData: selectorGrid.gridData(state),
    representations: selectorRepr.getRepr(state),
    representation: selectorRepr.repr(state, localStorage.getItem("representationSelectedName"))
});

const mapDispatchToProps = dispatch => ({
    gridRequest: (payload) => dispatch(actions.gridRequest(payload)),
    getRepresentation: (payload) => dispatch(actions.getRepresentation(payload))
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Grid);