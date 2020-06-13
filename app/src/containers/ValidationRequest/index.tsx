import React from 'react'
import List from './List'
import Detail from './Detail'

export function SolicitudesValidacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
}) {
	return <List 
		history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
	/>;
}

export function SolicitudDeValidacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
}) {
	return <Detail 
		history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
	/>;
}