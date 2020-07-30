import React from 'react';
import NoAutenticadoExport from './Unauthorized'


export function NoAutenticado(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  
}) {
	return <NoAutenticadoExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
   
  />;
}