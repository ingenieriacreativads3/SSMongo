export default function ItemReducer (state = {

    status: 0,
    message: '',
    data: {
      empresa: {},
      catalogo: {},
      items: []
    }
  
  }, action) {
  
    switch (action.type) {
  
      case 'AGREGAR_PENDING': {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'AGREGAR_REJECTED': {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'AGREGAR_FULFILLED':{
        
        return {
          ...state,
          fetching: false,
          fetched: true,
          status: action.payload.data.status,
          message: action.payload.data.message,
          data: {
            empresa: action.payload.data.data.empresa,
            catalogo: action.payload.data.data.catalogo,
            items: action.payload.data.data.items
          }
        };
  
      }
    
      case 'E': {
        throw new Error('Este error se manejo asi!' + ' AGREGAR' + 'Reducer.js');
      }
  
      default: { break; }
    }
  
    return state;
  }