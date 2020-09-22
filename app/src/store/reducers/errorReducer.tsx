export default function ErrorReducer (state = {

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

        case 'SET_ERROR_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_ERROR_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_ERROR_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}
  
     
    
    //   case 'EDIT_ERROR': {
  
    //     return { 
    //       Object.keys(state.errors).forEach(function(key:any) {
    //             console.log(state.errors[key]);
    //             if (key.toUpperCase() == action.payload.toUpperCase()) {
    //                 state.errors[key] = null;
    //             }
                
    //         })
    //     };
  
    //   }
    
      default: { break; }
    }
  
    return state;
  }