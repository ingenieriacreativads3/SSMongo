import React from 'react';
import LoginExport from './Login'
import Cookies from 'universal-cookie';

export function Login(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <LoginExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}