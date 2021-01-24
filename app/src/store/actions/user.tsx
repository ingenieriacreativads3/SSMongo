import axios from 'axios';
import config from './config'
import storage from './../../config'

export function get(
  idUser: string
) {

	let payload: any = axios.get(config.url + '/empresa/' + idUser)
	
  return {
		type: 'GET_USER',
		payload: payload
	}

}