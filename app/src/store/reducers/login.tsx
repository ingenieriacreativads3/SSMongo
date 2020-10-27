export default function LoginReducer (state = {

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

    case 'INGRESAR_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'INGRESAR_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'INGRESAR_FULFILLED':{
      
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

    case 'LOGUEAR':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: state.data
      };
    }
  
    case 'E': {
      throw new Error('Este error se manejo asi! login Reducer.js');
    }

    default: { break; }
  }

  return state;
}