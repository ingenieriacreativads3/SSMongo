import React from 'react';
import AppBarExport from './AppBar'
import Cookies from 'universal-cookie';

export function AppBar(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
   cookies: Cookies
}) {
	return <AppBarExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}