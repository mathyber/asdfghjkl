import * as React from "react";
import {Button, Modal} from "react-bootstrap";
import {compose} from "redux";
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";

class ModalRepresentation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {t} = this.props;
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                  swdfghjk
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>ModalRepresentation</h4>
                    <p>
                        tydyn
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(ModalRepresentation);