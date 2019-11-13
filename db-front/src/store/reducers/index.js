import { combineReducers } from 'redux'

// import direcciones from './direccionesReducer'
// import contenido from './contenidoReducer'
// import auth from './authReducer'
// import registrarUsuario from './registrarUsuarioReducer'
// import usuarios from './usuariosReducer'
// import usuario from './usuarioReducer'
// import productos from './productosReducer'
// import producto from './productoReducer'
// import pedido from './pedidoReducer'
// import pedidos from './pedidosReducer'
import apiWork from './apiWorkReducer'
import testReducer from './testReducer'

export default combineReducers({
    apiWork,
    testReducer
    // direcciones,
    // contenido,
    // auth,
    // registrarUsuario,
    // usuarios,
    // usuario,
    // productos,
    // producto,
    // pedido,
    // pedidos
})