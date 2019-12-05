import axios from 'axios';
import docker from './config'

export function nuevo(idEmpresa, item) {

  return {
    type: 'NUEVO_ITEM',
    payload: axios.post('http://127.0.0.1:8000/empresa/agregaritem', {
      _id: idEmpresa,
      item
    })
  };

}