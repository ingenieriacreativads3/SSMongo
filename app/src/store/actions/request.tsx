import axios from 'axios';

export function get(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/pedidos')

	return {
		type: 'GET_PURCHASE_REQUESTS',
		payload: payload
	}

}