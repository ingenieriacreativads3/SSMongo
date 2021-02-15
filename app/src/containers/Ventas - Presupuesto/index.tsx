import React from 'react';
import List from './List'
import Detail from './Detail'
import Presupuestar from './Presupuestar'
import Renegociar from './Renegociar'

export function SalePresupuestos(props: any) {
	return <List { ...props } />;
}

export function DetailSalePresupuesto(props: any) {
	return <Detail { ...props } />;
}

export function Presupuestacion(props: any) {
	return <Presupuestar { ...props } />;
}

export function Renegociacion(props: any) {
	return <Renegociar { ...props } />;
}