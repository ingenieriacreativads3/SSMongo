import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import login from './login'
import dialogReducer from './dialogReducer'
import drawerReducer from './drawerReducer'
import registerReducer from './registerReducer'
import solicitudDeValidacionReducer from './solicitudDeValidacionReducer'

export default combineReducers({
    apiWork,
    login,
    dialogReducer,
    drawerReducer,
    registerReducer,
    solicitudDeValidacionReducer
})