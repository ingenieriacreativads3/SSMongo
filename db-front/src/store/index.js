import { applyMiddleware, createStore, compose} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise(), logger, thunk);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
    reducer, 
    compose (
        middleware,
        reduxDevTools
    )
);
    

