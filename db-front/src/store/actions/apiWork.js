import axios from "axios";

export function apiWork() {

    let url = 'http://172.22.0.2:3000';

    let payload = axios.get(url);

    console.log('estoy en apiWork, y su payload es:' + payload);

    return {
        type: 'API_WORK',
        payload: payload
    }

}