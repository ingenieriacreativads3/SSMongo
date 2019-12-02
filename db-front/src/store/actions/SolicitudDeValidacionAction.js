import axios from "axios";

export function getAllSolicitudDeValidacion() {

  return {
    type: 'SOLICITUDES_DE_VALIDACION',
    payload: axios.get('http://localhost:8000/solicitudesDeValidacion')
  };

}