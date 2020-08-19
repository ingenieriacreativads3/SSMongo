import axios from 'axios';

export function getUnidadesDeMedida(){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/unidadesdemedida')
        
	return {
		type: 'GET_UNIDADES_DE_MEDIDA',
		payload: payload
	}

}


export function getSolicitudes() {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/solicitudesdeunidadesdemedida')

	return {
		type: 'GET_SOLICITUDES_DE_UNIDAD_DE_MEDIDA',
		payload: payload
	}

}

export function getById(id: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/unidaddemedida/' + id)

	return {
		type: 'GET_SOLICITUD_DE_UNIDAD_DE_MEDIDA',
		payload: payload
	}

}

export function setSolicitud(
	idEmpresa: string,	
	unidad: string,
	simbolo: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/solicitud_unidad', {
		empresa:{
			_id: idEmpresa,
		},
		solicitudDeUnidadDeMedida:{
			magnitud: unidad,
			abreviatura: simbolo,
		}
	})

	return {
		type: 'SET_SOLICITUD',
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

export function resetear() {

	return {
		type: 'RESETEAR',
		payload: {}
	}

}