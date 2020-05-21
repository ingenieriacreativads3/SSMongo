import axios from 'axios';

export function reintentar() {

	return {
		type: 'REINTENTAR',
		payload: ''
	}

}

export function registrar(
	fantasyName: string,
	CUIT: string,
	user: string,
	email: string,
	pass: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/registro', {
		empresa: {
			nombre: fantasyName,
			cuit: CUIT,
			usuario: user,
			clave: pass,
			email: email
		}
	})

	return {
		type: 'REGISTER',
		payload: payload
	}

}