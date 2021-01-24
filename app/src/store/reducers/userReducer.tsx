export default function UserReducer (state = {

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

    case 'GET_USER_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'GET_USER_REJECTED': {

      let data: any = action?.payload?.response?.data || {}
      let status: any = action?.payload?.response?.status || 500
      let message: string = action?.payload?.response?.data?.message || ''

      if(status === 500) {
        if(message === '') {
          message = 'Servidor deshabilitado. Reporte el problema a su proveedor de servicio.'
        }
      }

      return { 
        ...state, 
        fetching: false,
        status: status,
        data: data,
        error: action.payload,
        message: message
      };

    }
  
    case 'GET_USER_FULFILLED':{
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload?.data?.data || {}
      };

    }

    case 'REINTENTAR_USER':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: {}
      };
    }

    case 'SETEAR_USER':{
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: state.data
      };
    }
  
    case 'E': {
      throw new Error('Este error se manejo asi!' + ' user' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}