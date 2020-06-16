export default function presupuestoReducer ( state = {

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

		case 'GET_PURCHASE_PRESUPUESTOS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_PURCHASE_PRESUPUESTOS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_PURCHASE_PRESUPUESTOS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'GET_SALE_PRESUPUESTOS_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_SALE_PRESUPUESTOS_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_SALE_PRESUPUESTOS_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
      };
		}

		case 'SET_NEW_PRESUPUESTO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'SET_NEW_PRESUPUESTO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'SET_NEW_PRESUPUESTO_FULFILLED': {
			return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.data
	  };
	}
	

		case 'PRESUPUESTAR_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}

		case 'PRESUPUESTAR_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}

		case 'PRESUPUESTAR_FULFILLED': {
			return {
		...state,
		fetching: false,
		fetched: true,
		status: action.payload.data.status,
		message: action.payload.data.message,
		data: action.payload.data.data
	};
	}


		case 'RENEGOCIAR_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}

		case 'RENEGOCIAR_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}

		case 'RENEGOCIAR_FULFILLED': {
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
			throw new Error('Este error se manejo asi!' + ' requestReducer' + 'Reducer.js');
		}
		default: {break;}
	}
	return state;
}