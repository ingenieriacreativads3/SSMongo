import React from 'react';
import HomeExport from './Home'
import BusquedaPage from './Busqueda'

export function Inicio(props: any) {
	return <HomeExport { ...props } />;
}

export function Busqueda(props: any) {
	return <BusquedaPage { ...props } />;
}