export default function SolicitudDeValidacionReducer ( state = {

    status: 0,
    message: '',
    data: {
      solicitudDeValidacion: {},
      empresa: {}
    }
    
  }, action) {
  
    switch (action.type) {
  
      case 'SOLICITUD_DE_VALIDACION_PENDING': {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'SOLICITUD_DE_VALIDACION_REJECTED': {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'SOLICITUD_DE_VALIDACION_FULFILLED': {
        
        return { 
          ...state, 
          fetching: false, 
          fetched: true,
          status: action.payload.data.status,
          message: action.payload.data.message,
          data: {
            solicitudDeValidacion: action.payload.data.data.solicitudDeValidacionEncontrada,
            empresa: action.payload.data.data.empresa
          }
        };
  
      }
    
      case 'E': {
        throw new Error('Este error se manejo asi!' + ' SolicitudDeValidacion' + 'Reducer.js');
      }
      default: {break;}
    }
    return state;
  }