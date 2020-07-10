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
	idMagnitud: string,
	descripcion: string,
	mostrarPrecio: boolean,
	imagen: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/item', {
		idEmpresa,
		nombre,
		precio,
		idMagnitud,
		descripcion,
		mostrarPrecio,
		imagen
	})
	
  return {
		type: 'SET_ITEM',
		payload: payload
	}

}

export function updateItem(
	_id: string,	
	nombre: string,
	precio: string,
	descripcion: string,
	idMagnitud: string,
	mostrarPrecio: boolean,
	foto: string[],
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/item', {
		_id,
		nombre,
		precio,
		descripcion,
		idMagnitud,
		mostrarPrecio,
		foto
	})
	
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
	
	let payload: any = axios.get(url + '/empresa/' + id + '/catalogo/items')
        
	return {
		type: 'GET_CATALOGO',
		payload: payload
	}

}


