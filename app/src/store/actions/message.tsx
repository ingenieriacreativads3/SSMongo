import axios from 'axios'
import config from './config'

export function leido(
	idMensaje: string,
) {

	let payload: any = axios.put(config.url + '/mensaje/' + idMensaje + '/mark_as_read')
	
  return {
		type: 'MARCAR_LEIDO',
		payload: payload
	}
}

export function getMensajes(
	idEmpresa: string,
	idOtraEmpresa: string,
) {

	let payload: any = axios.get(config.url + '/empresa/' + idEmpresa + '/mensaje/' + idOtraEmpresa)
	
  return {
		type: 'GET_MENSAJES',
		payload: payload
	}

}

export function getMensajesSinLeer(
	idEmpresa: string,
) {

	let payload: any = axios.get(config.url + '/empresa/' + idEmpresa + '/mensajes_sin_leer')
	
  return {
		type: 'GET_MENSAJES_SIN_LEER',
		payload: payload
	}

}

export function getMensajesByEmpresa(
	idEmpresa: string,
) {

	let payload: any = axios.get(config.url + '/empresa/' + idEmpresa + '/listado-mensajes')
	
  return {
		type: 'GET_MENSAJES_BY_EMPRESA',
		payload: payload
	}

}

export function setMensajePresupuesto(
	idPresupuesto: string,
	idEmpresa: string,
	comentario: string
) {

	let payload: any = axios.post(config.url + '/presupuesto/mensaje', {
		presupuesto : {
			_id : idPresupuesto
		},
		empresa : {
			_id : idEmpresa
		},
		comentario : comentario
	})
	
  return {
		type: 'SET_MENSAJE_PRESUPUESTO',
		payload: payload
	}
}

export function getMensajesByPresupuesto(
	idPresupuesto: string,
) {

	let payload: any = axios.get(config.url + '/presupuesto/' + idPresupuesto + '/mensajes')
	
  return {
		type: 'GET_MENSAJES_BY_PRESUPUESTO',
		payload: payload
	}

}