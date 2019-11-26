import axios from "axios";

export function resolverSolicitudDeValidacion(idSolicitud) {

    let url = 'http://172.22.0.2:3000';

    let payload = axios.put( url + '/solicituddevalidacion/' + idSolicitud, {
        "request": {
            "status": 200,
            "data": {
                "SolicitudDeValidacion": {
                    estado: "Resuelta"
                }
            }
        }
    });

    return {
        type: 'RESOLVER_SOLICITUD_DE_VALIDACION',
        payload: payload
    }

}