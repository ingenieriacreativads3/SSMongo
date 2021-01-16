import React from 'react';
import Cookies from 'universal-cookie';

import Perfil from './DatosPerfil'
import PerfilEmpresa from './PerfilEmpresa'
import CambioContraseña from './CambiarContraseña'

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


export function EmpresaPerfil(props: any) {
	return <PerfilEmpresa { ...props } />;
}

export function CambiarContraseña(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <CambioContraseña
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

