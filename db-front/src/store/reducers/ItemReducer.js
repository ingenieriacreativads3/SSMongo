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
  
      case 'NUEVO_ITEM_PENDING': {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'NUEVO_ITEM_REJECTED': {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'NUEVO_ITEM_FULFILLED':{
        
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
        throw new Error('Este error se manejo asi!' + ' Item' + 'Reducer.js');
      }
  
      default: { break; }
    }
  
    return state;
  }