export default function LoginReducer (state:{
	status: number,
	message: string,
	data: {
		empresa: {}
	}
} = {
  status: 0,
  message: '',
  data: {
    empresa: {}
  }
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
        status: action.payload.status,
        message: action.payload.message,
        data: {
          empresa: action.payload.data.empresa
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