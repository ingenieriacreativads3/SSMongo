import axios from "axios";

export function register(empresa) {

  return {
    type: 'REGISTRO',
    payload: axios.post('http://localhost:8000/registro', {
      empresa
    })
  };

}