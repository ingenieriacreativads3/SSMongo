export default function drawerReducer (state = {

	open: false,
	fetching: false,
	fetched: false,
	error: null,

}, action: {
	type: string,
	payload: any
}) {

	switch (action.type) {

		case 'OPEN' : {

			return { 
				...state, 
				fetching: false, 
				fetched: true, 
				open: true
			};

		}

		case 'CLOSE' : {

			return { 
				...state, 
				fetching: false, 
				fetched: true, 
				open: false
			};

		}

		case 'E' : {
			throw new Error('Este error se manejo asi!' + ' drawer' + 'Reducer.js');
		}
			
		default : { break; }
			
	}

	return state;

}