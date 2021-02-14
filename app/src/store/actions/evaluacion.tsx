import axios from 'axios';
import config from './config'

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

export function getResumen(empresa: string) {

	let payload: any = axios.get(config.url + '/resumen/' + empresa)

	return {
		type: 'GET_RESUMEN',
		payload: payload
	}

}

export function getValoraciones(empresa: string) {

	let payload: any = axios.get(config.url + '/kpi/empresa/' + empresa + '/valoracion')

	return {
		type: 'GET_VALORACION',
		payload: payload
	}

}

export function getValoracionesPlataforma() {

	let payload: any = axios.get(config.url + '/plataforma/valoraciones/')

	return {
		type: 'GET_VALORACION_PLATAFORMA',
		payload: payload
	}

}

export function setEvaluacionEmpresa(
	empresaCriticaId: string,
	empresaCriticadaId: string,
	numeroValoracion: number | boolean,
	conceptoValoracion:string,
	opinion:string,
) {

	console.log(empresaCriticaId);
	console.log(empresaCriticadaId);
	console.log(numeroValoracion);
	console.log(conceptoValoracion);
	console.log(opinion);
	

	let payload: any = axios.post(config.url + '/empresa/valorar',{
		empresaCriticaId,
		empresaCriticadaId,
		numeroValoracion,
		conceptoValoracion,
		opinion,
	})

	return {
		type: 'SET_EVALUACION_EMPRESA',
		payload: payload
	}

}

export function setEvaluacionPlataforma(
	empresaCriticaId: string,
	navegabilidad: number | null,
	actualizacion: number | null,
	recomienda: boolean,
	mensaje: string,
) {

	let payload: any = axios.post(config.url + '/plataforma/valorar',{
		empresaId: empresaCriticaId,
		navegabilidad: navegabilidad,
		actualizacion: actualizacion,
		recomienda: recomienda,
		mensaje: mensaje,
	})

	return {
		type: 'SET_EVALUACION_PLATAFORMA',
		payload: payload
	}

}