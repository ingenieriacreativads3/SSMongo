export function getAll() {

  return {
    type: 'EMPRESAS',
    payload: axios.get('http://127.0.0.1:8000/empresas')
  };

}