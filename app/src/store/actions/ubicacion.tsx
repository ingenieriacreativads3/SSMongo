import axios from 'axios';

export function getProvincias() {

	let url: string = 'https://apis.datos.gob.ar/georef/api';
	
	let payload: any = axios.get(url + '/provincias?campos=id,nombre')

	return {
		type: 'GET_PROVINCIAS',
		payload: payload
	}

}

export function getMunicipiosByName(nombre: string) {

	let url: string = 'https://apis.datos.gob.ar/georef/api';
	
	let payload: any = axios.get(url + '/localidades-censales?provincia=' + encodeURI(nombre) + '&orden=nombre&campos=id,nombre&max=1000')

	return {
		type: 'GET_MUNICIPIOS',
		payload: payload
	}

}

export function getMunicipios(id: string) {

	let url: string = 'https://apis.datos.gob.ar/georef/api';
	
	let payload: any = axios.get(url + '/localidades-censales?provincia=' + id + '&orden=nombre&campos=id,nombre&max=1000')

	return {
		type: 'GET_MUNICIPIOS',
		payload: payload
	}

}

export function setear() {

	return {
		type: 'SETEAR',
		payload: {}
	}

}