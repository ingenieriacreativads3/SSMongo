import axios from 'axios';
import config from './config'

export function getByGrupo(
	grupoName: string,
) {

	let payload: any = axios.get(config.url + '/empresa/grupo/' + grupoName)
	
  return {
		type: 'GET_BY_GRUPO',
		payload: payload
	}
}

export function setMensaje(
	empresa: string,
	empresaDestinada: string,
	comentario: string
) {

	let payload: any = axios.post(config.url + '/mensaje', {
		empresa,
		empresaDestinada,
		comentario
	})
	
  return {
		type: 'SET_MENSAJE',
		payload: payload
	}
}

export function rubrosValidacion(
	idEmpresa: string,
	rubros: {}[]
) {

	let payload: any = axios.post(config.url + '/rubro/validacion', {
		_id: idEmpresa,
		rubros: rubros
	})
	
  return {
		type: 'RUBROS_VALIDACION',
		payload: payload
	}

}

export function changePassword(
	idEmpresa: string,	
	oldPassword: string,
	newPassword: string
) {

	let payload: any = axios.put(config.url + '/empresa/password', {
		idEmpresa,
		'old-password': oldPassword,
		'new-password': newPassword
	})
	
  return {
		type: 'CHANGE_PASSWORD',
		payload: payload
	}

}

export function getEmpresaRubros(){

	let payload: any = axios.get(config.url + '/rubros')
        
	return {
		type: 'GET_EMPRESA_RUBROS',
		payload: payload
	}

}

export function getEmpresa(id: string){
	
	let payload: any = axios.get(config.url + '/empresa/' + id)
        
	return {
		type: 'GET_EMPRESA',
		payload: payload
	}

}

export function validar(
	_id: string,	
) {

	let payload: any = axios.put(config.url + '/empresa/' + _id + '/editar', {
		estado: 'VALIDADA'
	})
	
  return {
		type: 'VALIDAR_EMPRESA',
		payload: payload
	}

}

export function autenticar(
	_id: string,	
	autenticar: boolean,
) {

	let payload: any = axios.post(config.url + '/empresa/autenticar', {
		_id,
		autenticar
	})
	
  return {
		type: 'AUTENTICAR_EMPRESA',
		payload: payload
	}

}

export function updateEmpresa(
	_id: string,	
	nombre: string,
	usuario: string,
	email: string,
	logo: string,
	password: string,
	telefono: string,
	provincia: string,
	localidad: string,
	visible : boolean,
	domicilio: string,
) {

	let empresa: any = {}

	if(nombre !== undefined) empresa.nombre = nombre
	if(usuario !== undefined) empresa.usuario = usuario
	if(email !== undefined) empresa.email = email
	if(logo !== undefined) empresa.logo = logo
	if(password !== undefined) empresa.password = password
	if(telefono !== undefined) empresa.telefono = telefono
	if(provincia !== undefined) empresa.provincia = provincia
	if(localidad !== undefined) empresa.localidad = localidad
	if(visible !== undefined) empresa.visible = visible
	if(domicilio !== undefined) empresa.domicilio = domicilio
	
	let payload: any = axios.put(config.url + '/empresa/' + _id + '/editar', empresa)
	
  return {
		type: 'UPDATE_EMPRESA',
		payload: payload
	}

}

export function getEmpresasPorRubro(id: string){
	
	let payload: any = axios.get(config.url + '/empresas/rubro' + id)
        
	return {
		type: 'GET_EMPRESAS_BY_RUBRO',
		payload: payload
	}

}

export function editRubroSeleccionado(rubro: string){

	return {
		type: 'EDIT_RUBRO_SELECCIONADO',
		payload: rubro
	}

}

export function setear() {

	return {
		type: 'SETEAR',
		payload: {}
	}

}

export function reintentar() {

	return {
		type: 'REINTENTAR_EMPRESA',
		payload: {}
	}

}

export function reintentarMensaje() {

	return {
		type: 'REINTENTAR_MENSAJE',
		payload: {}
	}

}