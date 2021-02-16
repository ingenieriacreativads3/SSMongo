import React from 'react';
import HomeExport from './Home'
import BusquedaPage from './Busqueda';
import Empresas from './Empresas';

export function Inicio(props: any) {
	return <HomeExport { ...props } />;
}

export function Busqueda(props: any) {
	return <BusquedaPage { ...props } />;
}

export function EmpresaList(props: any) {
	return <Empresas { ...props } />;
}