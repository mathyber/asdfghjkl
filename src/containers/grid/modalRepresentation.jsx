import * as React from "react";
import {Button, Card, Col, FormControl, InputGroup, ListGroup, Modal, Row} from "react-bootstrap";
import {compose} from "redux";
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import selectorUserInfo from "../../selectors/userInfo";
import selectorRepr from "../../selectors/representation";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import actions from "../../actions";

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
        this.nameRef = React.createRef();
    }

    state = {
        items: [],
        selected: []
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            // console.log(this.props.columns);
            let a = this.props.representations && this.props.representations[this.props.representationSelected];

            this.setState({
                items: this.props.isCreate || this.props.representationSelected === "default_representation" || !a ?
                    this.props.columns : this.props.columns.filter(v => !a.some(v2 => v.name === v2.name)),
                selected: this.props.isCreate || this.props.representationSelected === "default_representation" || !a ?
                    [] : this.props.representations && this.props.representations[this.props.representationSelected]
            });

          //  console.log("ddd      " + this.props.representationSelected);
          //  console.log(this.props.representations);
        }
    }

    componentDidMount() {
        //  console.log(this.props.columns);
        this.setState({
            selected: this.props.isCreate ? [] : this.props.representations && this.props.representations[this.props.representationSelected]
        })

        //  console.log(this.state.items);
    }

    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const {source, destination} = result;

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

            let state = {items};

            if (source.droppableId === 'droppable2') {
                state = {selected: items};
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

    deleteOnClick = () => {
      //  console.log(this.props.representations);
        delete this.props.representations[this.props.representationSelected];
      //  console.log(this.props.representations);
        this.props.deleteRepresentation({
            name: this.props.match.params.name,
            representations: this.props.representations
        });
        this.props.setRepr();
        this.props.onHide();
       // console.log(this.props.representations);

    };

    saveOnClick = () => {
        if (this.nameRef.current.value && this.state.selected.length !== 0) {
            if (!this.props.isCreate) {
                    delete this.props.representations[this.props.representationSelected];
                    this.props.setRepr(this.nameRef.current.value);
                }
            this.props.saveRepresentation({
                name: this.props.match.params.name,
                reprName: this.nameRef.current.value,
                reprColumns: this.state.selected,
                representations: this.props.representations
            });
            this.props.onHide();
        }
        else console.log("ERROR: NE VSYO VVEL!!!!"); //vremenno
        //  this.state.selected = [];

    };

    render() {
        const {t} = this.props;
        //   console.log(this.props.columns);
        // console.log(this.props.representations);
        //  console.log(this.state.items);

        return (

            <Modal
                onHide={this.props.onHide}
                show={this.props.show}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.isCreate ? t("Create representation") : `${t("Edit representation")} ${this.props.representationSelected}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <label htmlFor="basic-url">{t("name")}</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                defaultValue={this.props.isCreate ? undefined : this.props.representationSelected}
                                ref={this.nameRef}
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
                                                            key={item.displayNameKey}
                                                            draggableId={item.name}
                                                            index={index}>
                                                            {(provided, snapshot) => (
                                                                <Card
                                                                    className="list-group__item"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    {t(item.displayNameKey)}
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
                                                            key={item.displayNameKey}
                                                            draggableId={item.name}
                                                            index={index}>
                                                            {(provided, snapshot) => (
                                                                <Card
                                                                    className="list-group__item"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    {t(item.displayNameKey)}
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
                    {
                        !this.props.isCreate ?
                            <div className="mr-auto">
                                <Button variant="danger" onClick={this.deleteOnClick}>{t("delete")}</Button>
                            </div> : undefined
                    }

                    <Button variant="secondary" onClick={this.props.onHide}>{t("CancelButton")}</Button>
                    <Button variant="primary"
                            onClick={this.saveOnClick}>{t("SaveButton")}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state, props) => ({
    columns: selectorUserInfo.getColumns(state, props.match.params.name),
    representations: selectorRepr.getRepr(state)
});

const mapDispatchToProps = dispatch => ({
    saveRepresentation: (payload) => dispatch(actions.saveRepresentation(payload)),
    getRepresentation: (payload) => dispatch(actions.getRepresentation(payload)),
    deleteRepresentation: (payload) => dispatch(actions.deleteRepresentation(payload))
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(ModalRepresentation);