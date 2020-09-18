import actividadesEconomicas from './../../actividadesEconomicas.json'

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