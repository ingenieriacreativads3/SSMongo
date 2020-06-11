import axios from 'axios';

export function getUnidadesDeMedida(){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/unidadesdemedida')
        
	return {
		type: 'GET_UNIDADES_DE_MEDIDA',
		payload: payload
	}

}