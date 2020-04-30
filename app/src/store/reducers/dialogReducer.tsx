export default function dialogReducer (state = {

	openDialogEliminarItem: false,
	openDialog: false,
	fetching: false,
	fetched: false,
	error: null,

}, action: {
	type: string,
	payload: any
}) {

	switch (action.type) {
	
		case 'ELIMINAR_ITEM_OPEN' : {

			return { 
				...state, 
				fetching: false, 
				fetched: true, 
				openDialogEliminarItem: true
			};

		}

		case 'ELIMINAR_ITEM_CLOSE' : {

			return { 
				...state, 
				fetching: false, 
				fetched: true, 
				openDialogEliminarItem: false
			};

		}

		case 'OPEN' : {

			return { 
				...state, 
				fetching: false, 
				fetched: true, 
				openDialog: true
			};

		}

		case 'CLOSE' : {

			return { 
				...state, 
				fetching: false, 
				fetched: true, 
				openDialog: false
			};

		}

		case 'E' : {
			throw new Error('Este error se manejo asi!' + ' auth' + 'Reducer.js');
		}
			
		default : { break; }
			
	}

	return state;

}