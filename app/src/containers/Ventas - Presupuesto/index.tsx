import React from 'react';
import List from './List'
import Detail from './Detail'
import Presupuestar from './Presupuestar'
import Renegociar from './Renegociar'
import Cookies from 'universal-cookie';

export function SalePresupuestos(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
	cookies: Cookies
}) {
	return <List
		history={props.history}
    location={props.location}
    match={props.match}
		staticContext={props.staticContext}
		cookies={ props.cookies }
	/>;
}

export function DetailSalePresupuesto(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies,
}) {
	return <Detail 
		history={ props.history }
    location={ props.location }
    match={ props.match }
		staticContext={ props.staticContext }
		cookies={ props.cookies }
	/>;
}

export function Presupuestacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies,
}) {
	return <Presupuestar   
		history={ props.history }
    location={ props.location }
    match={ props.match }
		staticContext={ props.staticContext }
		cookies={ props.cookies }
	/>;
}

export function Renegociacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	cookies: Cookies,
}) {
	return <Renegociar
		history={props.history}
    location={props.location}
    match={props.match}
		staticContext={props.staticContext}
		cookies={ props.cookies }
	/>;
}