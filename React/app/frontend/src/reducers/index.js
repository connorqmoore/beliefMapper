import statements from './statement-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    statements
});

export default rootReducer;