import React from 'react';
import Cookies from 'universal-cookie';

import NuevoItem from './Nuevo'
import DetalleItem from './Detalle'
import EditarItem from './Editar'
import Catalog from './Catalogo'

export function ItemNuevo(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <NuevoItem
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

export function ItemDetalle(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <DetalleItem
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

export function ItemEditar(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <EditarItem
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

export function Catalogo(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
  cookies: Cookies
}) {
	return <Catalog
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}