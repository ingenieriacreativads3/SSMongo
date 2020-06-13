export default function SolicitudesDeValidacionReducer ( state = {

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

		case 'GET_SOLICITUDES_DE_VALIDACION_PENDING': {

			return { 
				...state, 
				fetching: true 
			};

		}
	
		case 'GET_SOLICITUDES_DE_VALIDACION_REJECTED': {

			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};

		}
	
		case 'GET_SOLICITUDES_DE_VALIDACION_FULFILLED': {
			
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
			
		}

		case 'GET_SOLICITUD_DE_VALIDACION_PENDING': {

			return { 
				...state, 
				fetching: true 
			};

		}
	
		case 'GET_SOLICITUD_DE_VALIDACION_REJECTED': {

			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};

		}
	
		case 'GET_SOLICITUD_DE_VALIDACION_FULFILLED': {
			
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
			
		}

		case 'RESETEAR': {
			
			return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: {},
        data: state.data
      };
			
		}
	
		case 'E': {
			throw new Error('Este error se manejo asi!' + ' SolicitudesDeValidacion' + 'Reducer.js');
		}
		default: {break;}
	}
	return state;
}