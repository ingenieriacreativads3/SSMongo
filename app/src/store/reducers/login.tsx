import config from './../../config'

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

    case 'RESET_PASSWORD_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'RESET_PASSWORD_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'RESET_PASSWORD_FULFILLED':{

      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
    }

    case 'RECOVER_PASSWORD_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'RECOVER_PASSWORD_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'RECOVER_PASSWORD_FULFILLED':{

      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
    }

    case 'INGRESAR_ADMIN_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'INGRESAR_ADMIN_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'INGRESAR_ADMIN_FULFILLED':{

      localStorage.removeItem(config.session_user)

      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
    }

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

			let userId: string = action.payload?.data?.data?.empresa?._id || null

			localStorage.setItem(config.session_user, userId)
      
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

    case 'LOGUEAR_ADMIN':{
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