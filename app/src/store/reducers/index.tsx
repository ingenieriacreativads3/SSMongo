import { combineReducers } from 'redux';

import apiWork from './apiWorkReducer';
import login from './login'
import dialogReducer from './dialogReducer'
import drawerReducer from './drawerReducer'
import registerReducer from './registerReducer'
import solicitudDeValidacionReducer from './solicitudDeValidacionReducer'
import requestReducer from './requestReducer'
import presupuestoReducer from './presupuestoReducer'
import itemReducer from './itemReducer'
import unidadDeMedidaReducer from './unidadDeMedidaReducer'
import ubicacionReducer from './ubicacionReducer'
import fileReducer from './fileReducer'
import empresaReducer from './empresaReducer'
import actividadEconomicaReducer from './actividadEconomicaReducer'
import errorReducer from './errorReducer'
import evaluacionReducer from "./evaluacionReducer";
import userReducer from "./userReducer";
import mensajeReducer from "./menssageReducer";
import notificacionesReducer from "./notificacionesReducer"

export default combineReducers({
	mensajeReducer,
	userReducer,
	apiWork,
	login,
	dialogReducer,
	drawerReducer,
	registerReducer,
	solicitudDeValidacionReducer,
	requestReducer,
	presupuestoReducer,
	itemReducer,
	unidadDeMedidaReducer,
	ubicacionReducer,
	fileReducer,
	empresaReducer,
	actividadEconomicaReducer,
	errorReducer,
	evaluacionReducer,
	notificacionesReducer,
})