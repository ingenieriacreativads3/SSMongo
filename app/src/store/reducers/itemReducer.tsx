export default function itemReducer ( state = {

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

		case 'ELASTIC_LOAD_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'ELASTIC_LOAD_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'ELASTIC_LOAD_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: 200,
        message: 'success load',
        data: action.payload.data
      };
		}

		case 'GET_ITEM_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_ITEM_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_ITEM_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'SET_ITEM_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_ITEM_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_ITEM_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'UPDATE_ITEM_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'UPDATE_ITEM_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'UPDATE_ITEM_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'DELETE_ITEM_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'DELETE_ITEM_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'DELETE_ITEM_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_CATALOGO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_CATALOGO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_CATALOGO_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'AGREGAR_BUSQUEDA_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'AGREGAR_BUSQUEDA_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'AGREGAR_BUSQUEDA_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_TRENDING_ITEMS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_TRENDING_ITEMS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_TRENDING_ITEMS_FULFILLED': {
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
			throw new Error('Este error se manejo asi! itemReducer Reducer.js');
		}
		default: {break;}
	}
	return state;
}