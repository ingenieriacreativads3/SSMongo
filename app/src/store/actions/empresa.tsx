import axios from 'axios';

export function getEmpresa(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id)
        
	return {
		type: 'GET_EMPRESA',
		payload: payload
	}

}