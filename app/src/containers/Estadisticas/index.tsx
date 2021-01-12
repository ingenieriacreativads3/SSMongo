import React from 'react';
import EstadisticaActividad from './EstadisticaActividad'
import OpinionUsuarios from './Reputacion'

export function ResumenActividad(props: any) {
	return <EstadisticaActividad { ...props } />;
}

export function Reputacion(props: any) {
  return <OpinionUsuarios { ...props } />;
}