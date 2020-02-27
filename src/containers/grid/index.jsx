import React from "react";
import {Card, Col, Dropdown, Form, Nav, Row, Table} from "react-bootstrap";
import {compose} from "redux";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import selector from "../../selectors/userInfo";
import selectorGrid from "../../selectors/grid";
import {withRouter} from "react-router";
import actions from "../../actions";

class Grid extends React.Component {
    constructor(props) {
        super(props);
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

                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    {}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>{t("default_representation")}</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>console.log("+")}>{t("create_btn")}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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