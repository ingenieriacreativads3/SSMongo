import axios from 'axios';

export function get() {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/solicitudesdevalidacion')

	return {
		type: 'GET_SOLICITUDES_DE_VALIDACION',
		payload: payload
	}

}