export default function FileReducer (state = {

  status: 0,
  message: '',
  data: {
    foto: []
  },
  fetching: false,
	fetched: false,
  error: null,

}, action: {
	type: string,
	payload: any
}) {

  switch (action.type) {

    case 'UPLOAD_CONTRATO_SOCIAL_PENDING': {

      return { 
        ...state, 
        fetching: true
      };

    }
  
    case 'UPLOAD_CONTRATO_SOCIAL_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'UPLOAD_CONTRATO_SOCIAL_FULFILLED': {

      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data.foto
      };
    }

    case 'UPLOAD_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'UPLOAD_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'UPLOAD_FULFILLED': {

      let fotosAux: string[] = state.data.foto

      if(fotosAux !== undefined) {
        fotosAux.push(action.payload.data.data.foto)
      } else {
        fotosAux = []
        fotosAux.push(action.payload.data.data.foto)
      }
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: {
          foto: fotosAux
        }
      };
    }

    case 'SETEAR_FILE': {
      
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: state.status,
        message: state.message,
        data: state.data
      };
    }
  
    case 'E': {
      throw new Error('Este error se manejo asi!  file Reducer.js');
    }

    default: { break; }
  }

  return state;
}