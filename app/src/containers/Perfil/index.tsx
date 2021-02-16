import React from 'react';
import Perfil from './DatosPerfil'
import PerfilEmpresa from './PerfilEmpresa'
import CambioContraseña from './CambiarContraseña'

export function MiPerfil(props: any) {
	return <Perfil { ...props } />;
}

export function EmpresaPerfil(props: any) {
	return <PerfilEmpresa { ...props } />;
}

export function CambiarContraseña(props: any) {
	return <CambioContraseña { ...props } />;
}

