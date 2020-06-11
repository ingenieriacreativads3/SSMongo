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

export function setPresupuesto(
	id: string,	
	cantidad: string,
	idEmpresaPerteneciente:string,
	idEmpresaDemandante:string,
	comentario:string,
	
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/solicitarpresupuesto',{
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
		type: 'SET_NEW_PRESUPUESTO',
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