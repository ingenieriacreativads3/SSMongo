export default function LoginReducer (state = {

  request: {
    exist: false,
    passValid: false,
    empresaValida: false
  }

}, action) {

  switch (action.type) {

    case 'LOGIN_PENDING' : {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'LOGIN_REJECTED' : {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'LOGIN_FULFILLED' : {
      
      return { 
        ...state, 
        fetching: false, 
        fetched: true, 
        request: {
          exist: action.payload.data.request.exist,
          passValid: action.payload.data.request.passValid,
          empresaValida: action.payload.data.request.empresaValida
        }
      };

    }
  
    case 'E' : {

      throw new Error('Este error se manejo asi!' + ' login' + 'Reducer.js');

    }
        
    default : {

      break;

    }
    
  }
  
  return state;

}