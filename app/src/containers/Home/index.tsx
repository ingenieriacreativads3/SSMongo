import React from 'react';
import HomeExport from './Home'
import Cookies from 'universal-cookie';
import BusquedaPage from './Busqueda';
import Empresas from './Empresas';

export function Inicio(props: {
  
  history: any,
	location: any,
	match: any,
  staticContext?: any
  cookies: Cookies,
}) {
	return <HomeExport
  history={props.history}
  location={props.location}
  match={props.match}
staticContext={props.staticContext}
cookies={props.cookies}
  />;
}

export function Busqueda(props: {
  
  history: any,
	location: any,
	match: any,
  staticContext?: any
  cookies: Cookies,
}) {
	return <BusquedaPage
  history={props.history}
  location={props.location}
  match={props.match}
staticContext={props.staticContext}
cookies={props.cookies}
  />;
}

export function EmpresaList(props: {
  
  history: any,
	location: any,
	match: any,
  staticContext?: any
  cookies: Cookies,
}) {
	return <Empresas
  history={props.history}
  location={props.location}
  match={props.match}
  staticContext={props.staticContext}
  cookies={props.cookies}
  />;
}