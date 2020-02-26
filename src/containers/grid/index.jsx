import React from "react";
import {Card, Col, Form, Nav, Row, Table} from "react-bootstrap";
import {compose} from "redux";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import selector from "../../selectors/userInfo";
import {LinkContainer} from "react-router-bootstrap";

class Grid extends React.Component {
    constructor(props) {
        super(props);
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
                            <Form.Control as="select">
                                <option>{t("default_representation")}</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>


                <Table responsive>
                    <thead>
                    <tr>
                        {
                            console.log(this.props.appConfig)
                        }
                        {
                            this.props.appConfig.grids.map(gridElem => {
                                if (gridElem.name === "orders") return gridElem.columns.map((el, index) => {
                                return el.isDefault && <th key={index}> {t(el.name)}</th>})
                            }
                        )
                        }


                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                    </tbody>
                </Table>
                </Card.Body>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appConfig: selector.getAppConfig(state)
});

const mapDispatchToProps = dispatch => ({});

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Grid);