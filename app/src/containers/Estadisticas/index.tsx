import React from 'react';
import EstadisticaActividad from './EstadisticaActividad'
import OpinionUsuarios from './Reputacion'
import OpinionUsuariosPlataforma from './ReputacionSupplierStore'

export function ResumenActividad(props: any) {
	return <EstadisticaActividad { ...props } />;
}

export function Reputacion(props: any) {
  return <OpinionUsuarios { ...props } />;
}

export function ReputacionPlataforma(props: any) {
  return <OpinionUsuariosPlataforma { ...props } />;
}