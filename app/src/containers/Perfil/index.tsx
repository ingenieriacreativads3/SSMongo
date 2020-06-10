import React from 'react';
import Cookies from 'universal-cookie';

import Perfil from './DatosPerfil'


export function MiPerfil(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <Perfil
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

