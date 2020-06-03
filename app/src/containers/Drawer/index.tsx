import React from 'react';
import DrawerExport from './Drawer'

export function Drawer(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <DrawerExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}