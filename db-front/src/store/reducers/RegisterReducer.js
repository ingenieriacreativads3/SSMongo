export default function RegisterReducer ( state = {

  status: 0,
  message: '',
  data: {
    empresa: {},
    solicitudDeValidacion: {}
  }
  
}, action) {

  switch (action.type) {

    case 'REGISTRO_PENDING' : {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'REGISTRO_REJECTED' : {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'REGISTRO_FULFILLED' : {
      
      return { 
        ...state, 
        fetching: false, 
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: {
          empresa: action.payload.data,
          solicitudDeValidacion: action.payload.data
        }
      };

    }
  
    case 'E' : {
      throw new Error('Este error se manejo asi!' + ' Register' + 'Reducer.js');
    }
    default : {break;}
  }
  return state;
}