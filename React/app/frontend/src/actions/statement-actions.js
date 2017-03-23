import * as types from './action-types';

export const addStatement = (statement) => {
    return {
        type: types.ADD_STATEMENT,
        statement
    };
}