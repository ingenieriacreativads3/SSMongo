export default function unidadDeMedidaReducer ( state = {

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

		case 'GET_UNIDADES_DE_MEDIDA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_UNIDADES_DE_MEDIDA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_UNIDADES_DE_MEDIDA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_SOLICITUDES_DE_UNIDAD_DE_MEDIDA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_SOLICITUDES_DE_UNIDAD_DE_MEDIDA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_SOLICITUDES_DE_UNIDAD_DE_MEDIDA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_SOLICITUD_DE_UNIDAD_DE_MEDIDA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_SOLICITUD_DE_UNIDAD_DE_MEDIDA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_SOLICITUD_DE_UNIDAD_DE_MEDIDA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'SET_SOLICITUD_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_SOLICITUD_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_SOLICITUD_FULFILLED': {
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
			throw new Error('Este error se manejo asi!' + ' unidadDeMedidaReducer' + 'Reducer.js');
		}
		default: {break;}
	}
	return state;
}