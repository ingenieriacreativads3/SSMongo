import React from 'react';
import HomeExport from './Home'

export function Inicio(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <HomeExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}