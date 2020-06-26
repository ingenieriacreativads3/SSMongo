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


export function getEmpresa(id:string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/' + id)

	return {
		type: 'GET_EMPRESA',
		payload: payload
	}

}

export function updateEmpresa(
	user: string,
	email: string,
	logo:string,
	//pass: string,
	//domicilio:string,
	//telefono:string,
	//provincia:string,
	//ciudad:string,
	//mostrarPerfil:boolean

) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.put(url + '/empresa/id/editar ', {
		empresa: {
			usuario: user,
			email: email,
			logo: logo,

			
		}
	})

	return {
		type: 'UPDATE_EMPRESA',
		payload: payload
	}

}