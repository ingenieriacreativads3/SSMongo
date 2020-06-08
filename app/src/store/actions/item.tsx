import axios from 'axios';

export function setItem(	
    //id: string,
	nombre: string,
    precio: string,
    idMagnitud : string,
	path: string,
   
    
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/agregaritem',{
       // idEmpresa : id,
        item: {
			nombre: nombre,
			precio: precio,
			idMagnitud: idMagnitud,
			foto: path
			
		}
    } )
    
    return {
		type: 'SET_NEW_ITEM',
		payload: payload
	}

	

}

export function getItem(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/item/' + id)
        
	return {
		type: 'GET_ITEM',
		payload: payload
	}

}

export function getCatalogo(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/catalogo/items')
        
	return {
		type: 'GET_CATALOGO',
		payload: payload
	}

}


