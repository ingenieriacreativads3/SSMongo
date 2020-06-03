import axios from 'axios';

export function getPurchase(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/presupuestossolicitados')

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


export function getPresupuesto(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/presupuesto/' + id)

	return {
		type: 'GET_PRESUPUESTO',
		payload: payload
	}

}