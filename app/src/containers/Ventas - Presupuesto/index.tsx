import React from 'react';
import List from './List'
import Detail from './Detail'
import Presupuestar from './Presupuestar'
import Renegociar from './Renegociar'

export function SalePresupuestos(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
  }) {
	return <List history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
	
	/>;
}

export function DetailSalePresupuesto(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
  }) {
	return <Detail   history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	
	/>;
}

export function Presupuestacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
  }) {
	return <Presupuestar   
	history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	
	/>;
}

export function Renegociacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
  }) {
	return <Renegociar   history={props.history}
    location={props.location}
    match={props.match}
	staticContext={props.staticContext}
	
	/>;
}