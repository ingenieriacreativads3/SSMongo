export default function LoginReducer (state = {

	data: {},
	provincias: [],
	municipios: [],
  fetching: false,
	fetched: false,
  error: null,

}, action: {
	type: string,
	payload: any
}) {

  switch (action.type) {

    case 'GET_PROVINCIAS_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'GET_PROVINCIAS_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'GET_PROVINCIAS_FULFILLED':{
      
      return {
        ...state,
        fetching: false,
        fetched: true,
				data: action.payload.data,
				provincias: action.payload.data.provincias
      };
		}
		
		case 'GET_MUNICIPIOS_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'GET_MUNICIPIOS_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'GET_MUNICIPIOS_FULFILLED':{
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        municipios: action.payload.data.localidades_censales
      };
    }

    case 'REINTENTAR':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        data: {}
      };
    }

    case 'SETEAR':{
      return {
        ...state,
        fetching: false,
        fetched: false,
				data: state.data,
				provinicias: state.provincias,
				municipios: state.municipios
      };
    }
  
    case 'E': {
      throw new Error('Este error se manejo asi!' + ' login' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}