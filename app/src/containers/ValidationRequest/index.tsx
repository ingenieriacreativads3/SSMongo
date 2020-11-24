import React from 'react'
import ListExport from './List'
import DetailExport from './Detail'

export function SolicitudesValidacion(props: any) {
	return <ListExport { ...props } />;
}

export function SolicitudDeValidacion(props: any) {
	return <DetailExport { ...props } />;
}