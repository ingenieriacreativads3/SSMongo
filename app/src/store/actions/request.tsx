import axios from 'axios';

export function getPurchase(id?: string) {

	let url: string = 'http://127.0.0.1:8000';

	let idAux = ''

	if(id) idAux = id
	
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

export function setRequest(
	id: string,	
	cantidad: string,
	idEmpresaPerteneciente:string,
	idEmpresaDemandante:string,
	comentario:string,
	
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/pedido',{
    empresaPerteneciente: {
		_id: idEmpresaPerteneciente,
	},
	empresaDemandante: {
		_id: idEmpresaDemandante,
	},
    items: {
			_id: id,
			cantidad: cantidad,
			
		},
	comentario : comentario,
	})

	console.log(payload)
	
  return {
		type: 'SET_NEW_PEDIDO',
		payload: payload
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
		type: 'REINTENTAR',
		payload: {}
	}

}