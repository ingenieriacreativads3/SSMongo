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
	files: File[],
) {

	let url: string = 'http://127.0.0.1:8000';

	var formData = new FormData();

	if(files !== undefined && files.length > 0) {
		files.map((file: File) => {
			formData.append('foto', file)
		})
	}

	formData.append('_id', '5ecdb0f7db386b4e1b75e37a')
	formData.append('nombre', nombre)
	formData.append('precio', precio)
	formData.append('idMagnitud', idMagnitud)
	formData.append('mostrarPrecio', 'true')
	formData.append('descripcion', 'asd')
	
	let payload: any = axios.post(url + '/item', formData,{
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

	console.log(payload)
	
  return {
		type: 'SET_ITEM',
		payload: payload
	}

}

export function updateItem(
	idEmpresa: string,	
	nombre: string,
	precio: string,
	idMagnitud : string,
	files: File[],
) {

	let url: string = 'http://127.0.0.1:8000';

	var formData = new FormData();

	if(files !== undefined && files.length > 0) {
		files.map((file: File) => {
			formData.append('foto', file)
		})
	}

	formData.append('_id', '5ecdb0f7db386b4e1b75e37a')
	formData.append('nombre', nombre)
	formData.append('precio', precio)
	formData.append('idMagnitud', idMagnitud)
	formData.append('mostrarPrecio', 'true')
	formData.append('descripcion', 'asd')
	
	let payload: any = axios.put(url + '/item', formData,{
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

	console.log(payload)
	
  return {
		type: 'UPDATE_ITEM',
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


