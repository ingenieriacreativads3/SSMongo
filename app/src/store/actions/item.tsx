import axios from 'axios'
import config from './config'

export function search(
	itemName: string,
	provincia: string,
	localidad: string,
	valoracion: string,
	empresaName: string,
	precioMinimo: string, 
	precioMaximo: string,
) {

	let payload: any = axios.get(config.url + '/busqueda/' + itemName + '/' + provincia + '/' + localidad + '/' + valoracion + '/' + empresaName +  '/' + precioMinimo +  '/' + precioMaximo)
	
  return {
		type: 'SEARCH_ITEM_BY_NAME',
		payload: payload
	}

}

export function searchByName(
	name: string
) {

	let payload: any = axios.get(config.url + '/busqueda/' + name + '/none/none/none/none/0/9999')
	
  return {
		type: 'SEARCH_ITEM_BY_NAME',
		payload: payload
	}

}

export function cargaElastic() {

	let payload: any = axios.get(config.url + '/cargaelastic')
	
  return {
		type: 'ELASTIC_LOAD',
		payload: payload
	}

}

export function getTrendingItems(
	idEmpresa: string,
	cantidad: number
) {

	let payload: any = axios.get(config.url + '/busquedapersonalizada/' + idEmpresa + '/cantidad/' + cantidad)
	
  return {
		type: 'GET_TRENDING_ITEMS',
		payload: payload
	}

}

export function agregarBusqueda(
	idEmpresa: string,	
	idItem: string,
) {

	let payload: any = axios.post(config.url + '/agregarbusqueda', {
		empresa: {
			_id: idEmpresa
		},
		item: {
			_id: idItem
		}
	})
	
  return {
		type: 'AGREGAR_BUSQUEDA',
		payload: payload
	}

}

export function deleteItem(
	id:string
) {

	let payload: any = axios.delete(config.url + '/item/' + id)
	
  return {
		type: 'DELETE_ITEM',
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
		type: 'REINTENTAR_ITEM',
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

	let payload: any = axios.post(config.url + '/item', {
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

	let payload: any = axios.put(config.url + '/item', {
		_id,
		nombre,
		precio,
		descripcion,
		idMagnitud,
		mostrarPrecio,
		foto
	})
	
  return {
		type: 'UPDATE_ITEM',
		payload: payload
	}

}

export function getItem(id: string){

	let payload: any = axios.get(config.url + '/item/' + id)
        
	return {
		type: 'GET_ITEM',
		payload: payload
	}

}

export function getCatalogo(id: string){

	let payload: any = axios.get(config.url + '/empresa/' + id + '/catalogo/items')
        
	return {
		type: 'GET_CATALOGO',
		payload: payload
	}

}


