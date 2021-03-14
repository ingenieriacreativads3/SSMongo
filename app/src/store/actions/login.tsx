import axios from 'axios';
import Cookies from 'universal-cookie';
import config from './config'

export function reintentar() {

	return {
		type: 'REINTENTAR',
		payload: {}
	}

}

export function loguearAdmin(
	cookies: Cookies,
	name: string
) {

	cookies.set('empresaName', name, { path: '/' });

	return {
		type: 'LOGUEAR_ADMIN',
		payload: {}
	}

}

export function loguear(
	cookies: Cookies,
	empresaId: string,
	name: string
) {

	cookies.set('empresaId', empresaId, { path: '/' });
	cookies.set('empresaName', name, { path: '/' });

	return {
		type: 'LOGUEAR',
		payload: {}
	}

}

export function ingresarAdmin(
	user: string,
	pass: string
) {

	let payload: any = axios.post(config.url + '/admin/login', {
		userName: user,
		password: pass
	})

	return {
		type: 'INGRESAR_ADMIN',
		payload: payload
	}

}

export function ingresar(
	user: string,
	pass: string
) {

	let payload: any = axios.post(config.url + '/login', {
		user: user,
		password: pass
	})

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export function recoverPass(
	email: string
) {

	let payload: any = axios.post(config.url + '/recover/account', {
		address: email
	})

	return {
		type: 'RECOVER_PASSWORD',
		payload: payload
	}

}

export function resetPass(
	pass: string,
	token: string
) {

	let payload: any = axios.post(config.url + '/recover/reset', {
		token: token,
		password: pass
	})

	return {
		type: 'RESET_PASSWORD',
		payload: payload
	}

}