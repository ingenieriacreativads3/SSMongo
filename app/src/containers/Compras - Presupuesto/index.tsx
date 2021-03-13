import React from 'react';
import List from './List'
import Detail from './Detail'
import NuevoPresupuesto from './NuevoPresupuesto'

export function PurchasePresupuestos(props: any) {
	return <List { ...props } />;
}

export function DetailPurchasePresupuesto(props: any) {
	return <Detail { ...props } />;
}

export function PresupuestoNuevo(props: any) {
	return <NuevoPresupuesto { ...props } />;
}