const getRepr = state => state.representationReducer.representation.value && JSON.parse(state.representationReducer.representation.value);

export default { getRepr }