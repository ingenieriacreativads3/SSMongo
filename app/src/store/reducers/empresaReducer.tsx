export default function empresaReducer ( state = {

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

		case 'GET_EMPRESA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_EMPRESA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_EMPRESA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'REINTENTAR':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: {}
      };
		}
		
		case 'SETEAR':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 200,
        message: '',
        data: state.data
      };
    }
	
		case 'E': {
			throw new Error('Este error se manejo asi!' + ' empresaReducer' + 'Reducer.js');
		}
		default: {break;}
	}
	return state;
}