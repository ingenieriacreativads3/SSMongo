import axios from 'axios';


export function setError(err:any) {
    debugger;
    if (err == null) {
        return {
            type: 'SET_ERRORS',
            payload: []
        }
    }else {
        return {
            type: 'SET_ERRORS',
            payload: err,
        }

    }
     
}