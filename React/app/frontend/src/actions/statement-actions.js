import * as types from './action-types';

export const addProStatement = (statement) => {
    return {
        type: types.ADD_PRO_STATEMENT,
        statement
    };
};
export const addConStatement = (statement) => {
    return {
        type: types.ADD_CON_STATEMENT,
        statement
    };
};
