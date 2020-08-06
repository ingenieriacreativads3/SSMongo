export default function requestReducer ( state = {

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

		case 'LIMPIAR':{
			return {
			  ...state,
			  status: 0,
			  message: '',
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

		case 'GET_PURCHASE_REQUESTS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_PURCHASE_REQUESTS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_PURCHASE_REQUESTS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_SALE_REQUESTS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_SALE_REQUESTS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_SALE_REQUESTS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_REQUEST_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_REQUEST_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_REQUEST_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'SET_NEW_PEDIDO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_NEW_PEDIDO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_NEW_PEDIDO_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
	  	};
		}

		case 'CANCELAR_PEDIDO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'CANCELAR_PEDIDO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'CANCELAR_PEDIDO_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: state.data
			};
		}

		case 'ENVIAR_PEDIDO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'ENVIAR_PEDIDO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'ENVIAR_PEDIDO_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: state.data
			};
		}

		case 'FINALIZAR_PEDIDO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'FINALIZAR_PEDIDO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'FINALIZAR_PEDIDO_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: state.data
			};
		}
	
		case 'E': {
			throw new Error('Este error se manejo asi!' + ' requestReducer' + 'Reducer.js');
		}
		default: {break;}
	}
	return state;
}