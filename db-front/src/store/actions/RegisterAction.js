import axios from "axios";

export function register(empresa) {

    console.log('empresa: ', empresa);

  return {
    type: 'REGISTRO',
    payload: axios.post('http://localhost:8000/registro', {
      empresa: empresa
    })
  };

}