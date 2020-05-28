import axios from 'axios';

export function get(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/presupuestos')

	return {
		type: 'GET_PURCHASE_PRESUPUESTOS',
		payload: payload
	}

}


export function getSale(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/presupuestos')

	return {
		type: 'GET_SALE_PRESUPUESTOS',
		payload: payload
	}

}