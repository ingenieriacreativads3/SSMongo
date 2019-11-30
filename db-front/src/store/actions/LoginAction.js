import axios from "axios";

export function login(user, pass) {

  return {
    type: 'LOGIN',
    payload: axios.post('http://localhost:8000/login', {
      user,
      pass
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