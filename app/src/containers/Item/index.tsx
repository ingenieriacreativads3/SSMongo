import React from 'react';
import NuevoItem from './Nuevo'
import DetalleItem from './Detalle'
import EditarItem from './Editar'
import Catalog from './Catalogo'

export function ItemNuevo(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <NuevoItem
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}

export function ItemDetalle(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <DetalleItem
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}

export function ItemEditar(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <EditarItem
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}

export function Catalogo(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <Catalog
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}