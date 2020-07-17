import React from 'react';
import AppBarExport from './AppBar'

export function AppBar(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <AppBarExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}