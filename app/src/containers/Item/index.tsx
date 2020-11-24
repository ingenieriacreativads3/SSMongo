import React from 'react';
import Cookies from 'universal-cookie';

import NuevoItem from './Nuevo'
import DetalleItem from './Detalle'
import EditarItem from './Editar'
import CatalogoExport from './Catalogo'

export function ItemNuevo(props: any) {
	return <NuevoItem { ...props } />;
}

export function ItemDetalle(props: any) {
	return <DetalleItem { ...props } />;
}

export function ItemEditar(props: any) {
	return <EditarItem { ...props } />;
}

export function Catalogo(props: any) {
	return <CatalogoExport { ...props } />;
}