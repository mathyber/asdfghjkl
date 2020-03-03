import * as React from "react";
import {Button, Card, Col, FormControl, InputGroup, ListGroup, Modal, Row} from "react-bootstrap";
import {compose} from "redux";
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import selector from "../../selectors/userInfo";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

class ModalRepresentation extends React.Component {
    constructor(props) {
        super(props);
    }



    state = {
        items: getItems(10),
        selected: getItems(5, 10)
    };

    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    render() {
        const {t} = this.props;
console.log(this.props.grids);
        return (

            <Modal
                onHide={this.props.onHide}
                show={this.props.show}
                grids={this.props.grids}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {t("Create representation")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <label htmlFor="basic-url">{t("name")}</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
                        <InputGroup className="mb-1">
                            <FormControl placeholder={t("search_field")}/>
                        </InputGroup>
                    </Col>
                    <Card.Body>

                        <DragDropContext onDragEnd={this.onDragEnd}>

                            <Col>
                                <Row>
                                    <Col sm={6}>

                            <label htmlFor="basic-url">{t("Available")}</label>

                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <Card
                                        variant="flush"
                                        className="list-group"
                                        ref={provided.innerRef}
                                        >
                                        {this.state.items.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <Card
                                                        className="list-group__item"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                   >
                                                        {item.content}
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Card>
                                )}
                            </Droppable>

                                    </Col>
                                    <Col sm={6}>
                            <label htmlFor="basic-url">{t("Selected")}</label>
                            <Droppable droppableId="droppable2">
                                {(provided, snapshot) => (
                                    <Card
                                        variant="flush"
                                        className="list-group"
                                        ref={provided.innerRef}
                                        >
                                        {this.state.selected.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                   <Card
                                                    className="list-group__item"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        >
                                                        {item.content}
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Card>
                                )}
                            </Droppable>
                                    </Col>
                                </Row>
                            </Col>
                        </DragDropContext>
                    </Card.Body>
                </Modal.Body>
                <Modal.Footer>
                    <div className="mr-auto">
                        <Button variant="danger">{t("delete")}</Button>
                    </div>
                    <Button variant="secondary" onClick={this.props.onHide}>{t("CancelButton")}</Button>
                    <Button variant="primary">{t("SaveButton")}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(ModalRepresentation);