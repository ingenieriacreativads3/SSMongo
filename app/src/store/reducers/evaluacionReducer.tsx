export default function evaluacionReducer ( state = {

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
        
        case 'SET_EVALUACION_EMPRESA_PENDING': {
            return { 
                ...state, 
                fetching: true 
            };
        }
        
        case 'SET_EVALUACION_EMPRESA_REJECTED': {
            return { 
                ...state, 
                fetching: false, 
                error: action.payload 
            };
        }
        
        case 'SET_EVALUACION_EMPRESA_FULFILLED': {
            return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
        };

    }

        case 'SET_EVALUACION_PLATAFORMA_PENDING': {
            return { 
                ...state, 
                fetching: true 
            };
        }
        
        case 'SET_EVALUACION_PLATAFORMA_REJECTED': {
            return { 
                ...state, 
                fetching: false, 
                error: action.payload 
            };
        }
        
        case 'SET_EVALUACION_PLATAFORMA_FULFILLED': {
            return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
        };

    }

    case 'REINTENTAR':{
        return {
          ...state,
          fetching: false,
          fetched: false,
          status: 0,
          message: '',
          data: {}
        };
          }
          
          case 'SETEAR':{
        return {
          ...state,
          fetching: false,
          fetched: false,
          status: 200,
          message: '',
          data: state.data
        };
    }

        case 'E': {
            throw new Error('Este error se manejo asi!' + ' itemReducer' + 'Reducer.js');
        }
        default: {break;}
    }
    return state;

}

