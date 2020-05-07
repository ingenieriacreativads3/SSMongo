import axios from 'axios';

export function eliminarItemOpen() {
	return {
		type: 'ELIMINAR_ITEM_OPEN'
	}
}

export function eliminarItemClose() {
	return {
		type: 'ELIMINAR_ITEM_CLOSE'
	}
}

export function open() {
	return {
		type: 'OPEN'
	}
}

export function close() {
	return {
		type: 'CLOSE'
	}
}

export function ingresar(user: string, pass: string) {

	let url: string = 'http://127.0.0.1:8000';

	axios.post(url + '/login', {
		user: user,
		password: pass
	}).then((payload: any) => {
		return {
			type: 'INGRESAR',
			payload: payload
		}
	}).catch((payload: any) => {
		return {
			type: 'INGRESAR',
			payload: payload
		}
	})


}