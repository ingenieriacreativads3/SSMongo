import axios from 'axios';

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

export function setItem(
	idEmpresa: string,	
	nombre: string,
	precio: string,
	idMagnitud : string,
	path: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/agregaritem',{
    idEmpresa : idEmpresa,
    item: {
			nombre: nombre,
			precio: precio,
			idMagnitud: idMagnitud,
			foto: path
		}
	})

	console.log(payload)
	
  return {
		type: 'SET_ITEM',
		payload: payload
	}

}

export function getItem(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/item/' + id)
        
	return {
		type: 'GET_ITEM',
		payload: payload
	}

}

export function getCatalogo(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/items')
        
	return {
		type: 'GET_CATALOGO',
		payload: payload
	}

}


