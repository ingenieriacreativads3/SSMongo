import axios from 'axios';
import Cookies from 'universal-cookie';

export function reintentar() {

	return {
		type: 'REINTENTAR',
		payload: {}
	}

}

export function loguear( cookies: Cookies, empresaId: string, name: string ) {

	cookies.set('empresaId', empresaId, { path: '/' });
	cookies.set('empresaName', name, { path: '/' });

	return {
		type: 'LOGUEAR',
		payload: {}
	}

}

export function ingresar(user: string, pass: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/login', {
		user: user,
		password: pass
	})

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export function recoverPass(email: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/recover/password', {
		address: email,
		
	})

	return {
		type: 'RECOVER_PASSWORD',
		payload: payload
	}

}

export function resetPass(pass: string, token: string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/recover/reset', {
		token: token,
		password:pass
		
	})

	return {
		type: 'RESET_PASSWORD',
		payload: payload
	}

}

export async function register(empresa: {
	empresa: {
		nombre: string,
		cuit: string,
		usuario: string,
		clave: string,
		email: string,
		rubros: [
				null
		]
	}
}) {

	let url: string = 'http://127.0.0.1:8000';
	let payload: any

	await axios.post(url + '/registro', empresa)
	.then((response) => {
		console.log(response);
		payload = response
	})
	.catch((err) => {
		console.log(err);
		payload = err
	});

	console.log('estoy en apiWork, y su payload es:' + payload);

	return {
			type: 'API_WORK',
			payload: 'payload'
	}

}