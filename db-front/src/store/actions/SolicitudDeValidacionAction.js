import axios from "axios";

export function getAll() {

  return {
    type: 'SOLICITUDES_DE_VALIDACION',
    payload: axios.get('http://localhost:8000/solicitudesDeValidacion')
  };

}

export function get(id) {

  return {
    type: 'SOLICITUD_DE_VALIDACION',
    payload: axios.get('http://localhost:8000/solicitudDeValidacion/' + id)
  };

}