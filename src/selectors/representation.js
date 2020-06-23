import React from "react";

const getRepr = state => state.representationReducer.representation.value && Object.keys(JSON.parse(state.representationReducer.representation.value));

const repr = (state, name) =>
    name ? state.representationReducer.representation.value && JSON.parse(state.representationReducer.representation.value)[name] : null;

export default {
    getRepr,
    repr
}