export default function usuarioReducer (state = {

    usuario: {},
    fetching: false,
    fetched: false,
    error: null,

}, action) {

    switch (action.type) {

        case 'UPDATE_USUARIO_PENDING' : {
    
            return { 
                ...state, 
                fetching: true 
            };
    
        }
    
        case 'UPDATE_USUARIO_REJECTED' : {
    
            return { 
                ...state, 
                fetching: false, 
                error: action.payload 
            };
    
        }
    
        case 'UPDATE_USUARIO_FULFILLED' : {
    
            return { 
                ...state, 
                fetching: false, 
                fetched: true, 
                usuario: action.payload.data.usuario
            };
    
        }
    
        case 'E' : {
    
            throw new Error('Este error se manejo asi!' + ' usuario' + 'Reducer.js');
    
        }
          
        default : {
    
          break;
    
        }
          
      }
    
      return state;

}