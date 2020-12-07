export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = feature => {
    debugger;
    return({type: ADD_FEATURE, payload: feature});
}

export const removeFeature = feature => {
    debugger;
    return({type: REMOVE_FEATURE, payload: feature})
}

export default {
    addFeature: addFeature,
    removeFeature: removeFeature
}