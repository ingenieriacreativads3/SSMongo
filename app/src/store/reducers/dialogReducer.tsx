export default function dialogReducer (state = {

	openDialogOneButton: false,
	openDialogTwoButton: false,
	fetching: false,
	fetched: false,
	error: null,

}, action: {
	type: string,
	payload: any
}) {

	switch (action.type) {

		case 'OPEN_ONE_BUTTON' : {

			return { 
				...state, 
				fetching: false, 
				fetched: false, 
				openDialogOneButton: true
			};

		}

		case 'CLOSE_ONE_BUTTON' : {

			return { 
				...state, 
				fetching: false, 
				fetched: false, 
				openDialogOneButton: false
			};

		}

		case 'OPEN_TWO_BUTTON' : {

			return { 
				...state, 
				fetching: false, 
				fetched: false, 
				openDialogTwoButton: true
			};

		}

		case 'CLOSE_TWO_BUTTON' : {

			return { 
				...state, 
				fetching: false, 
				fetched: false, 
				openDialogTwoButton: false
			};

		}

		case 'E' : {
			throw new Error('Este error se manejo asi!' + ' auth' + 'Reducer.js');
		}
			
		default : { break; }
			
	}

	return state;

}