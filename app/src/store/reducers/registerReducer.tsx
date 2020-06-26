export default function RegiterReducer (state = {

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

    case 'REGISTER_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'REGISTER_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'REGISTER_FULFILLED':{
      
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
  
    case 'UPDATE_EMPRESA_FULFILLED':{
      
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
  
    case 'GET_EMPRESA_FULFILLED':{
      
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
  
    case 'E': {
      throw new Error('Este error se manejo asi!' + ' login' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}