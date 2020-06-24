export default function FileReducer (state = {

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

    case 'UPLOAD_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'UPLOAD_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'UPLOAD_FULFILLED':{
      
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
      throw new Error('Este error se manejo asi!' + ' file' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}