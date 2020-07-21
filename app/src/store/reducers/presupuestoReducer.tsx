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

		case 'LIMPIAR':{
			return {
			  ...state,
			  status: 0,
			  message: '',
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

		case 'GET_PRESUPUESTO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}
	
		case 'GET_PRESUPUESTO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}
	
		case 'GET_PRESUPUESTO_FULFILLED': {
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

			let data: any = state.data

			if(action.payload.data.status === 200) {
				data = action.payload.data.data
			}

			return {
				...state,
				fetching: false,
				fetched: true,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: data
			};
		}

		case 'CANCELAR_PRESUPUESTO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}

		case 'CANCELAR_PRESUPUESTO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}

		case 'CANCELAR_PRESUPUESTO_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: state.data
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

		case 'CONFIRMAR_PRESUPUESTO_PENDING': {
			return { 
				...state, 
				fetching: true 
			};
		}

		case 'CONFIRMAR_PRESUPUESTO_REJECTED': {
			return { 
				...state, 
				fetching: false, 
				error: action.payload 
			};
		}

		case 'CONFIRMAR_PRESUPUESTO_FULFILLED': {

			if(action.payload.data.status === 200) {
				action.payload.data.data.presupuesto.empresa_demandante = action.payload.data.data.pedido.empresa_demandante
				action.payload.data.data.presupuesto.empresa_perteneciente = action.payload.data.data.pedido.empresa_perteneciente
			}

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