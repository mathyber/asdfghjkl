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
            representationSelectedName: "default_representation",
            isCreate: true
        };
    }

    componentDidMount() {
        this.props.getRepresentation(this.props.match.params.name);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            this.props.getRepresentation(this.props.match.params.name);
            this.setState({representationSelectedName: "default_representation"});
        }
    }

    render() {
        const {t} = this.props;
       // console.log(this.props.representations);

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
                                        {t(this.state.representationSelectedName)}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.setState({representationSelectedName: "default_representation"})}>
                                            {t("default_representation")}
                                        </Dropdown.Item>
                                        {
                                            this.props.representations && Object.keys(this.props.representations).map((key) =>
                                                <Dropdown.Item key={key} onClick={() => this.setState({representationSelectedName: key})}>{key}</Dropdown.Item>)
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
                                this.props.appConfig.grids.map(gridElem => {
                                        if (gridElem.name === this.props.match.params.name) return gridElem.columns.map((el, index) => {
                                            return el.isDefault && <th key={index}> {t(el.displayNameKey)}</th>
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
    representations: selectorRepr.getRepr(state)
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