import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import solicitudDeValidacion from './solicitudDeValidacion'
import login from './login'

export default combineReducers({
    apiWork,
    solicitudDeValidacion,
    login
})