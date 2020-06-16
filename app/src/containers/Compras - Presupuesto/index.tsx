import React from 'react';
import List from './List'
import Detail from './Detail'
import NuevoPresupuesto from './NuevoPresupuesto'
import Cookies from 'universal-cookie';

export function PurchasePresupuestos(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
  }) {
	return <List
	history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	
	/>;
}

export function DetailPurchasePresupuesto(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
  }) {
	return <Detail 
	history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}/>;
}

export function PresupuestoNuevo(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies
  }) {
	  return <NuevoPresupuesto
	  history={props.history}
	  location={props.location}
	  match={props.match}
	  staticContext={props.staticContext}
	  cookies={props.cookies}
	/>;
  }