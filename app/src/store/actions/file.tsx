import axios from 'axios';

export function upload(files: File[]) {

	let url: string = 'http://127.0.0.1:8000';

	var formData = new FormData();

	if(files !== undefined && files.length > 0) {
		files.map((file: File) => {
			formData.append('foto', file)
		})
	}

	let payload: any = axios.post(url + '/file', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

  return {
		type: 'UPLOAD',
		payload: payload
	}

}