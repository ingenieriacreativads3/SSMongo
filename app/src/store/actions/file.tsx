import axios from 'axios';

export function upload(file: File) {

	let url: string = 'http://127.0.0.1:8000';

	var formData = new FormData();

	formData.append('foto', file)
	let payload = axios.post(url + '/file', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

  return {
		type: 'UPLOAD',
		payload: payload
	}

}