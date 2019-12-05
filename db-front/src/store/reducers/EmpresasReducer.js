export default function EmpresasReducer (state = {

  status: 0,
  message: '',
  data: {
    presupuestos: []
  }

}, action) {

  switch (action.type) {

    case 'PRESUPUESTOS_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'PRESUPUESTOS_REJECTED': {

      return { 
        ...state, 
        fetching: false, 
        error: action.payload 
      };

    }
  
    case 'PRESUPUESTOS_FULFILLED':{
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: {
          presupuestos: action.payload.data.data.presupuestos
        }
      };

    }
  
    case 'E': {
      throw new Error('Este error se manejo asi!' + ' Presupuestos' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}