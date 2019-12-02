import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import testReducer from './testReducer';
import login from './LoginReducer';
import updateToken from './UpdateTokenReducer';
import Register from './RegisterReducer';
import SolicitudDeValidacion from './SolicitudDeValidacion'

export default combineReducers({
    apiWork,
    testReducer,
    login,
    updateToken,
    Register,
    SolicitudDeValidacion
})