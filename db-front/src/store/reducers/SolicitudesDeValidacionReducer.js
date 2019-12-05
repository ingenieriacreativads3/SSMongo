export default function SolicitudesDeValidacionReducer ( state = {

    status: 0,
    message: '',
    data: {
      solicitudesDeValidacion: []
    }
    
  }, action) {
  
    switch (action.type) {
  
      case 'SOLICITUDES_DE_VALIDACION_PENDING': {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'SOLICITUDES_DE_VALIDACION_REJECTED': {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'SOLICITUDES_DE_VALIDACION_FULFILLED': {
        
        return { 
          ...state, 
          fetching: false, 
          fetched: true,
          status: action.payload.data.status,
          message: action.payload.data.message,
          data: {
            solicitudesDeValidacion: action.payload.data.data.solicitudesDeValidaciones
          }
        };
  
      }
    
      case 'E': {
        throw new Error('Este error se manejo asi!' + ' SolicitudesDeValidacion' + 'Reducer.js');
      }
      default: {break;}
    }
    return state;
  }