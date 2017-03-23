import rootReducer from '../reducers';
import {createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';


export default (initialState) => {
    return createStore(rootReducer, initialState,
        //redux debugging tools extension
        devToolsEnhancer(
            // Specify here name, actionsBlacklist, actionsCreators and other options if needed
        )
    );
};