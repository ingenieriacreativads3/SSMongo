export default function LoginReducer (state = {

  status: 0,
  message: '',
  data: {
    exist: false,
    empresa: {}
  }

}, action) {

  switch (action.type) {

    case 'LOGIN_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'LOGIN_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'LOGIN_FULFILLED':{
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: {
          existe: 'existe',
          empresa: action.payload.data.data.empresa
        }
      };

    }
  
    case 'E': {
      throw new Error('Este error se manejo asi!' + ' login' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}