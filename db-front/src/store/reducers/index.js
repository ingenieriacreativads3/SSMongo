import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import testReducer from './testReducer';
import Login from './LoginReducer';
import updateToken from './UpdateTokenReducer';
import Register from './RegisterReducer';
import SolicitudesDeValidacion from './SolicitudesDeValidacionReducer'
import SolicitudDeValidacion from './SolicitudDeValidacionReducer'
import Item from './ItemReducer';
import NuevoPresupuesto from './NuevoPresupuestoReducer'
import Presupuestos from './PresupuestosReducer'

export default combineReducers({
    apiWork,
    testReducer,
    Login,
    updateToken,
    Register,
    SolicitudesDeValidacion,
    Item,
    NuevoPresupuesto,
    Presupuestos,
    SolicitudDeValidacion
})