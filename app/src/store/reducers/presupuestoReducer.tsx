export default function presupuestoReducer ( state = {

	status: 0,
  message: '',
  data: {},
  fetching: false,
	fetched: false,
	error: null,
	
}, action: {
	type: string,
	payload: any
}) {

	switch (action.type) {

		case 'GET_PURCHASE_PRESUPUESTOS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_PURCHASE_PRESUPUESTOS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_PURCHASE_PRESUPUESTOS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_SALE_PRESUPUESTOS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_SALE_PRESUPUESTOS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_SALE_PRESUPUESTOS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}
	
		case 'E': {
			throw new Error('Este error se manejo asi!' + ' requestReducer' + 'Reducer.js');
		}
		default: {break;}
	}
	return state;
}