import React from 'react';
import HomeExport from './Home'
import Cookies from 'universal-cookie';

export function Inicio(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <HomeExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}