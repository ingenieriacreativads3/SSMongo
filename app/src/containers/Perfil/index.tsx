import React from 'react';
import Cookies from 'universal-cookie';

import Perfil from './DatosPerfil'
import PerfilEmpresa from './PerfilEmpresa'

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


export function EmpresaPerfil(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <PerfilEmpresa
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

