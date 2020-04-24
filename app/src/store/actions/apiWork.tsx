import axios from 'axios';
import { AxiosStatic } from 'axios'

export async function apiWork() {

    let url: string = 'http://172.22.0.2:3000';

    let payload: AxiosStatic = await axios.get(url);

    console.log('estoy en apiWork, y su payload es:' + payload);

    return {
        type: 'API_WORK',
        payload: payload
    }

}