import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import testReducer from './testReducer';
import Login from './LoginReducer';
import updateToken from './UpdateTokenReducer';
import Register from './RegisterReducer';
import SolicitudDeValidacion from './SolicitudDeValidacion'

export default combineReducers({
    apiWork,
    testReducer,
    Login,
    updateToken,
    Register,
    SolicitudDeValidacion
})