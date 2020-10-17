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

export function setEvaluacionEmpresa(
	empresaCriticaId: string,	
	empresaCriticadaId: string,
	numeroValoracion:number | null,
	conceptoValoracion:string,
	opinion:string,
	rebuy: boolean,
) {
	
	let payload: any = axios.post(config.url + '/empresa/valorar',{
    
    empresaCriticaId: empresaCriticaId,
    empresaCriticadaId: empresaCriticadaId,
    numeroValoracion: numeroValoracion,
    conceptoValoracion: conceptoValoracion,
    opinion: opinion,
	rebuy: rebuy
	})

	console.log(payload)
	
  return {
		type: 'SET_EVALUACION_EMPRESA',
		payload: payload
	}

}

export function setEvaluacionPlataforma(
	empresaCriticaId: string,	
	numeroValoracion:number,
	conceptoValoracion:string,
	opinion:string,
	
) {
	
	let payload: any = axios.post(config.url + '/falta el endpoint',{
    
    empresaCriticaId: empresaCriticaId,
    numeroValoracion: numeroValoracion,
    conceptoValoracion: conceptoValoracion,
    opinion: opinion,
	})

	console.log(payload)
	
  return {
		type: 'SET_EVALUACION_PLATAFORMA',
		payload: payload
	}

}