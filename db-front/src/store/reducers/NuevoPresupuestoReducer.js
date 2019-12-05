export default function NuevoPresupuestoReducer (state = {

    status: 0,
    message: '',
    data: {
      empresaDemandada: {},
      empresaDemandante: {},
      presupuesto: {},
      items: []
    }
  
  }, action) {
  
    switch (action.type) {
  
      case 'NUEVO_PRESUPUESTO_PENDING': {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'NUEVO_PRESUPUESTO_REJECTED': {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'NUEVO_PRESUPUESTO_FULFILLED':{
        
        return {
          ...state,
          fetching: false,
          fetched: true,
          status: action.payload.data.status,
          message: action.payload.data.message,
          data: {
            empresaDemandada: action.payload.data.data.empresaPerteneciente,
            empresaDemandante: action.payload.data.data.empresaDemandante,
            presupuesto: action.payload.data.data.presupuesto,
            items: action.payload.data.data.items,
          }
        };
  
      }
    
      case 'E': {
        throw new Error('Este error se manejo asi!' + ' NuevoPresupuesto' + 'Reducer.js');
      }
  
      default: { break; }
    }
  
    return state;
  }