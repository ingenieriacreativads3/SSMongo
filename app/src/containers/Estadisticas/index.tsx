import React from 'react';
import EstadisticaActividad from './EstadisticaActividad'
import OpinionUsuarios from './Reputacion'
import Cookies from 'universal-cookie';

export function ResumenActividad(props: {
  
  history: any,
	location: any,
	match: any,
  staticContext?: any
  cookies: Cookies,
}) {
	return <EstadisticaActividad
  history={props.history}
  location={props.location}
  match={props.match}
  staticContext={props.staticContext}
  cookies={props.cookies}
  />;
}

export function Reputacion(props: {
  
    history: any,
      location: any,
      match: any,
    staticContext?: any
    cookies: Cookies,
  }) {
      return <OpinionUsuarios
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
    />;
  }