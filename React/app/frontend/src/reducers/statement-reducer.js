import * as types from '../actions/action-types';

    export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_STATEMENT:
            return [...state, Object.assign({}, action.statement)];
        default:
            return state;
    }
};