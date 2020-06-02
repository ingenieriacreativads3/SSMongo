import axios from 'axios';

export function getPurchase(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/pedidossolicitados')

	return {
		type: 'GET_PURCHASE_REQUESTS',
		payload: payload
	}

}

export function getSale(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/pedidos')

	return {
		type: 'GET_SALE_REQUESTS',
		payload: payload
	}

}

export function getRequest(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/pedido/' + id)

	return {
		type: 'GET_REQUEST',
		payload: payload
	}

}