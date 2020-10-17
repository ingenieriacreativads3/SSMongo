export default function ErrorReducer (state = {

   
  
    errors: [],
    
  }, action: {
      type: string,
      payload: any
  }) {
   
    switch (action.type) {
      
        case 'SET_ERRORS': {
			return { 
        
				...state, 
        errors: action.payload,
			};
		}

    
      case 'EDIT_ERRORS': {
        // debugger;
        Object.keys(state.errors).forEach(function(key:any) {
                      console.log(state.errors[key]);
                      if (key.toUpperCase() == action.payload.toUpperCase()) {
                          delete state.errors[key]
                          state.errors.length -=1;
                      }
                      
                  })
        return { 
          errors: state.errors,
          
        };
  
      }
    
      default: { break; }
    }
  
    return state;
  }