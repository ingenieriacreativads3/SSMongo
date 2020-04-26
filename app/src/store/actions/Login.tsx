import axios from 'axios';

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