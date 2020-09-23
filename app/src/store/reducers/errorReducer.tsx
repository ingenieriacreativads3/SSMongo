export default function ErrorReducer (state = {

   
  
    errors: [],
    
  }, action: {
      type: string,
      payload: any
  }) {
  
    debugger;
    switch (action.type) {
      
        case 'SET_ERRORS': {
			return { 
        
				...state, 
        errors: action.payload,
			};
		}

    
      case 'EDIT_ERROR': {
        Object.keys(state.errors).forEach(function(key:any) {
                      console.log(state.errors[key]);
                      if (key.toUpperCase() == action.payload.toUpperCase()) {
                          delete state.errors[key]
                      }
                      
                  })
        return { 
          
        };
  
      }
    
      default: { break; }
    }
  
    return state;
  }