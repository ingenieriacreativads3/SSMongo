import axios from 'axios';

export async function upload(files: File[]) {

	let url: string = 'http://127.0.0.1:8000';

	var formData = new FormData();

	let payload: any[]

	if(files !== undefined && files.length > 0) {
		files.map(async (file: File) => {
			formData.append('foto', file)
			payload = await axios.post(url + '/file', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
		})
	}

  return {
		type: 'UPLOAD',
		payload: {}
	}

}