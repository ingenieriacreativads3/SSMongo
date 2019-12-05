import axios from 'axios';
import docker from './config'

export function nuevo(idEmpresaDemandada, idEmpresaDemandante, items) {

  return {
    type: 'NUEVO_PRESUPUESTO',
    payload: axios.post('http://127.0.0.1:8000/empresa/solicitarpresupuesto', {
        empresaPerteneciente: {
          _id: idEmpresaDemandada
        },
        empresaDemandante: {
          _id: idEmpresaDemandante
        },
        items
    })
  };

}

export function getAll(idEmpresa) {

  return {
    type: 'PRESUPUESTOS',
    payload: axios.get('http://127.0.0.1:8000/empresa/' + idEmpresa + '/presupuestos')
  };

}