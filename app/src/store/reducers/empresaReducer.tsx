export default function empresaReducer ( state = {

	status: 0,
  message: '',
  data: {},
  fetching: false,
	fetched: false,
	error: null,
	rubroSeleccionado:'',
	
}, action: {
	type: string,
	payload: any
}) {

	switch (action.type) {

		case 'AUTENTICAR_EMPRESA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'AUTENTICAR_EMPRESA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'AUTENTICAR_EMPRESA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'VALIDAR_EMPRESA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'VALIDAR_EMPRESA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'VALIDAR_EMPRESA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'RUBROS_VALIDACION_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'RUBROS_VALIDACION_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'RUBROS_VALIDACION_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'UPDATE_EMPRESA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'UPDATE_EMPRESA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'UPDATE_EMPRESA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

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
				fetched: false,
				perfil: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_EMPRESA_RUBROS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_EMPRESA_RUBROS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_EMPRESA_RUBROS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'CHANGE_PASSWORD_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'CHANGE_PASSWORD_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'CHANGE_PASSWORD_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'REINTENTAR_EMPRESA':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: {}
      };
		}

		case 'GET_EMPRESAS_BY_RUBRO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_EMPRESAS_BY_RUBRO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_EMPRESAS_BY_RUBRO_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.empresas
      };
		}

		case 'EDIT_RUBRO_SELECCIONADO': {
			return { 
				...state, 
				rubroSeleccionado:action.payload,
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
			throw new Error('Este error se manejo asi! empresaReducer Reducer.js');
		}
		default: {break;}
	}
	return state;
}