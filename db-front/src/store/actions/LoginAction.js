import axios from 'axios';
import docker from './config'

export function login(user, password) {

  return {
    type: 'LOGIN',
    payload: axios.post('http://127.0.0.1:8000/login', {
      user,
      password
    })
  };

}

export function updateToken(token) {

  return {
    type: 'UPDATE_TOKEN',
    payload: axios.post('http://172.22.0.2:3000/updatetoken', {
      request: {
        data: {
          token: token
        }
      }
    })
  };
  
}