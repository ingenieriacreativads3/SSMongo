export default function apiWorkReducer (state = {

  status: 200

}, action: {
	type: string,
	payload: any
}) {

  switch (action.type) {

    case 'API_WORK_PENDING' : {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'API_WORK_REJECTED' : {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'API_WORK_FULFILLED' : {

      return { 
        ...state, 
        fetching: false, 
        fetched: true, 
        request: action.payload.data.response
      };

    }
  
    case 'E' : {

      throw new Error('Este error se manejo asi!' + ' apiWork' + 'Reducer.js');

    }
        
    default : {

      break;

    }
    
  }
  
  return state;

}