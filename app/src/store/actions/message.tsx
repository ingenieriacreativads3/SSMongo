import axios from 'axios'
import config from './config'

export function setMensajePresupuesto(
	idPresupuesto: string,
	idEmpresa: string,
	comentario: string
) {

	let payload: any = axios.post(config.url + '/mensaje', {
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