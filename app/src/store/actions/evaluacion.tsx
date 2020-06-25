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

export function setEvaluacionEmpresa(
	empresaCriticaId: string,	
	empresaCriticadaId: string,
	numeroValoracion:number,
	conceptoValoracion:string,
	opinion:string,
	
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/valorar',{
    
    empresaCriticaId: empresaCriticaId,
    empresaCriticadaId: empresaCriticadaId,
    numeroValoracion: numeroValoracion,
    conceptoValoracion: conceptoValoracion,
    opinion: opinion,
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

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/falta el endpoint',{
    
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