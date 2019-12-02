import axios from "axios";

export function register(empresa) {

    console.log('empresa: ', empresa);

  let data = JSON.stringify()

  return {
    type: 'REGISTRO',
    payload: axios.post('http://localhost:8000/registro', {
      empresa:	{
        nombre: "david",
        cuit: "30716221659",
        usuario: "david",
        clave: "admin",
        email: "david"
      }
    })
  };

}