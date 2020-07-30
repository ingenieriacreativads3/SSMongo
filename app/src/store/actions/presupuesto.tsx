import axios from 'axios';

export function confirmarPresupuesto(
	_id: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/presupuesto/confirmar', {
		_id
	})

  return {
		type: 'CONFIRMAR_PRESUPUESTO',
		payload: payload
	}

}

export function cancelarPresupuesto(
	idPresupuesto: string,
	idEmpresa: string,	
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/presupuesto/cancelar', {
		presupuesto: {
			_id: idPresupuesto,
		},
		empresa: {
			_id: idEmpresa
		}
	})

  return {
		type: 'CANCELAR_PRESUPUESTO',
		payload: payload
	}

}

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
	idEmpresaPerteneciente: string,
	idEmpresaDemandante: string,
	idItem: string,	
	cantidad: string,
	comentario: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/solicitarpresupuesto', {
		empresaPerteneciente: {
			_id: idEmpresaPerteneciente,
		},
		empresaDemandante: {
			_id: idEmpresaDemandante,
		},
    items: [{
			_id: idItem,
			cantidad,
			
		}],
		comentario,
	})

  return {
		type: 'SET_NEW_PRESUPUESTO',
		payload: payload
	}

}

export function presupuestar(
	idPresupuesto: string,
	idItem: string,	
	cantidad: string,
	importe: string,
	comentario: string
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/presupuesto/presupuestar', {
		presupuesto: {
			_id: idPresupuesto,
			items: [
				{
					_id: idItem,
					cantidad: cantidad,
				}
			]
		},
		importe,
		comentario,
	})

  return {
		type: 'PRESUPUESTAR',
		payload: payload
	}

}

export function renegociar(
	idPresupuesto: string,
	idItem:string,	
	cantidad: string,
	idEmpresaOferente:string,
	precioSugerido:string,
	comentario:string
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/renegociar',{
	
		presupuesto: {
			_id: idPresupuesto,
			items: [
				{
					_id: idItem,
					cantidad: cantidad,
				}
			],
		},
		empresaReoferente: {
			_id: idEmpresaOferente,
		},
		precioSugerido: precioSugerido,
		comentario: comentario,
	})
	
  return {
		type: 'RENEGOCIAR',
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

export function limpiar() {

	return {
		type: 'LIMPIAR',
		payload: {}
	}

}