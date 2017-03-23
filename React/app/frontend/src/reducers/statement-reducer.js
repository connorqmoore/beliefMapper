import * as types from '../actions/action-types';

    export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_PRO_STATEMENT:
            return [...state, Object.assign({}, action.statement)];
        case types.ADD_CON_STATEMENT:
            return [...state, Object.assign({}, action.statement)];
        default:
            return state;
    }
};