import React from 'react'
import List from './List'
import Detail from './Detail'
import NuevaSolicitud from './Nuevo'
import Cookies from 'universal-cookie';

export function SolicitudesUnidadMedida(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies,
}) {
	return <List 
		history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	cookies={props.cookies}
	/>;
}

export function SolicitudDeUnidadDeMedida(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies,
}) {
	return <Detail 
		history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	cookies={props.cookies}
	/>;
}

export function NuevaUnidadMedida(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies
}) {
	return <NuevaSolicitud 
		history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	cookies={props.cookies}
	/>;
}

