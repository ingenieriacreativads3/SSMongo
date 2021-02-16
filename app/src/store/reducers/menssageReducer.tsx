export default function mensajeReducer ( state = {

	status: 0,
  message: '',
  data: {},
  fetching: false,
	fetched: false,
	error: null,
	mensajesSinLeer: [],
	empresas: [],
	mensajes: [],
	fetchedMensajesSinLeer: false
	
}, action: {
	type: string,
	payload: any
}) {

	switch (action.type) {

		case 'GET_MENSAJES_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_MENSAJES_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_MENSAJES_FULFILLED': {
			return {
        ...state,
        fetching: false,
				fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        mensajes: action.payload.data.data
      };
		}

		case 'GET_MENSAJES_SIN_LEER_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_MENSAJES_SIN_LEER_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_MENSAJES_SIN_LEER_FULFILLED': {
			return {
        ...state,
        fetching: false,
				fetchedMensajesSinLeer: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        mensajesSinLeer: action.payload.data.data
      };
		}

		case 'GET_MENSAJES_BY_EMPRESA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_MENSAJES_BY_EMPRESA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_MENSAJES_BY_EMPRESA_FULFILLED': {
			return {
        ...state,
        fetching: false,
				fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        empresas: action.payload.data.data.listado
      };
		}

		case 'SET_MENSAJE_PRESUPUESTO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_MENSAJE_PRESUPUESTO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_MENSAJE_PRESUPUESTO_FULFILLED': {
			return {
        ...state,
        fetching: false,
				fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_MENSAJES_BY_PRESUPUESTO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_MENSAJES_BY_PRESUPUESTO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_MENSAJES_BY_PRESUPUESTO_FULFILLED': {
			return {
        ...state,
        fetching: false,
				fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'SET_MENSAJE_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_MENSAJE_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_MENSAJE_FULFILLED': {
			return {
        ...state,
        fetching: false,
				fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'REINTENTAR_MENSAJE':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: {}
      };
		}

		case 'SETEAR_MENSAJE':{
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
			throw new Error('Este error se manejo asi! mensajeReducer.js');
		}
		default: {break;}
	}
	return state;
}