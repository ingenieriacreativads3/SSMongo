import axios from 'axios'
import config from './config'


export function getNotificacionesByEmpresa(
	idEmpresa: string,
) {

	let payload: any = axios.get(config.url + '/notificaciones/' + idEmpresa)
	
  return {
		type: 'GET_NOTIFICACIONES_BY_EMPRESA',
		payload: payload
	}

}



