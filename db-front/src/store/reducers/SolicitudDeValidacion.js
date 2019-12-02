export default function SolicitudDeValidacionReducer ( state = {

    status: 0,
    message: '',
    data: {
      solicitudesDeValidacion: []
    }
    
  }, action) {
  
    switch (action.type) {
  
      case 'SOLICITUDES_DE_VALIDACION_PENDING' : {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'SOLICITUDES_DE_VALIDACION_REJECTED' : {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'SOLICITUDES_DE_VALIDACION_FULFILLED' : {
        
        return { 
          ...state, 
          fetching: false, 
          fetched: true,
          status: 'status',
          message: 'message',
          data: {
            solicitudesDeValidacion: action.payload.data
          }
        };
  
      }
    
      case 'E' : {
        throw new Error('Este error se manejo asi!' + ' SolicitudDeValidacion' + 'Reducer.js');
      }
      default : {break;}
    }
    return state;
  }