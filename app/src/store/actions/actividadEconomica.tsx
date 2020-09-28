import actividadesEconomicas from './actividadesEconomicas.json'
import iconos from './iconosRubros.json'

export function getActividadesEconomicas() {

	let payload: any = {
		data: {
			message: 'Consulta exitosa',
			status: 200,
			data: actividadesEconomicas
		}
	}
	
  return {
		type: 'GET_ACTIVIDADES_ECONOMICAS',
		payload: payload
	}

}

export function getIconosRubros() {

	let payload: any = {
		data: {
			message: 'Consulta exitosa',
			status: 200,
			data: iconos
		}
	}
	
  return {
		type: 'GET_ICONOS_RUBROS',
		payload: payload
	}

}