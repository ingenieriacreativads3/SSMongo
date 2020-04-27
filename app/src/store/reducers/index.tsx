import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import solicitudDeValidacion from './solicitudDeValidacion'
import login from './login'
import dialogReducer from './dialogReducer'

export default combineReducers({
    apiWork,
    solicitudDeValidacion,
    login,
    dialogReducer
})