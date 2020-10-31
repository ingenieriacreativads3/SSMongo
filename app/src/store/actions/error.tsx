
export function setError(err:any) {
	if (err == null) {
		return {
			type: 'SET_ERRORS',
			payload: []
		}
	} else {
		return {
			type: 'SET_ERRORS',
			payload: err,
		}

	}
     
}

export function editErrors(field: any){
	return{
		type: 'EDIT_ERRORS',
		payload: field,
	}
}