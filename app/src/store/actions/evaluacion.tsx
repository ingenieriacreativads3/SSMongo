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

export function setEvaluacionEmpresa(
	empresaCriticaId: string,
	empresaCriticadaId: string,
	numeroValoracion:number | null,
	conceptoValoracion:string,
	opinion:string,
) {

	let payload: any = axios.post(config.url + '/empresa/valorar',{
		empresaCriticaId: empresaCriticaId,
		empresaCriticadaId: empresaCriticadaId,
		numeroValoracion: numeroValoracion,
		conceptoValoracion: conceptoValoracion,
		opinion: opinion,
	})

	return {
		type: 'SET_EVALUACION_EMPRESA',
		payload: payload
	}

}

export function setEvaluacionPlataforma(
	navegabilidad: number | null,
	tiempoRespuesta: number | null,
	actualizacion: number | null,
	recomienda: boolean,
	mensaje: string,
) {

	

	let payload: any = axios.post(config.url + '/plataforma/valorar',{
		navegabilidad: navegabilidad,
		tiempo_respuesta: tiempoRespuesta,
		actualizacion: actualizacion,
		recomienda: recomienda,
		mensaje: mensaje,
	})

	return {
		type: 'SET_EVALUACION_PLATAFORMA',
		payload: payload
	}

}