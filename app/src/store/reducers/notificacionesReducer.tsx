export default function notificacionesReducer (state = {

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
  
      case 'GET_NOTIFICACIONES_BY_EMPRESA_PENDING': {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'GET_NOTIFICACIONES_BY_EMPRESA_REJECTED': {
  
        return { 
          ...state, 
          fetching: false,
          error: action.payload,
         
        };
  
      }
    
      case 'GET_NOTIFICACIONES_BY_EMPRESA_FULFILLED':{
        
        return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
        };
  
      }
  
      
    
      case 'E': {
        throw new Error('Este error se manejo asi!' + ' notifacion' + 'Reducer.js');
      }
  
      default: { break; }
    }
  
    return state;
  }