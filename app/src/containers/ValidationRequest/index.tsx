import React from 'react';
import List from './List'

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