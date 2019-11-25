export default function UpdateTokenReducer (state = {

    request: {
      status: 400,
      data: {
          token: ''
      }
    }
  
  }, action) {
  
    switch (action.type) {
  
      case 'UPDATE_TOKEN_PENDING' : {
  
        return { 
          ...state, 
          fetching: true 
        };
  
      }
    
      case 'UPDATE_TOKEN_REJECTED' : {
  
        return { 
          ...state, 
          fetching: false, 
          error: action.payload 
        };
  
      }
    
      case 'UPDATE_TOKEN_FULFILLED' : {
        
        return { 
          ...state, 
          fetching: false, 
          fetched: true, 
          request: {
            status: action.payload.data.request.status,
            data: {
                token: action.payload.data.request.data.token
            }
          }
        };
  
      }
    
      case 'E' : {
  
        throw new Error('Este error se manejo asi!' + ' UPDATE_TOKEN' + 'Reducer.js');
  
      }
          
      default : {
  
        break;
  
      }
      
    }
    
    return state;
  
  }