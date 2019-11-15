import { combineReducers } from 'redux'

import apiWork from './apiWorkReducer'
import testReducer from './testReducer'

export default combineReducers({
    apiWork,
    testReducer
   
})