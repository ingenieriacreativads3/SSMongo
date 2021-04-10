import React from 'react'
import List from './List'
import Detail from './Detail'
import NuevaSolicitud from './Nuevo'
import Cookies from 'universal-cookie';

export function SolicitudesUnidadMedida(props: any) {
	return <List { ...props }/>;
}

export function SolicitudDeUnidadDeMedida(props: any) {
	return <Detail { ...props }/>;
}

export function NuevaUnidadMedida(props: any) {
	return <NuevaSolicitud  {...props}
	/>;
}

