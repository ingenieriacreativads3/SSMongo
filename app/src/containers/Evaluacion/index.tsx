import React from 'react';
import EmpresaEvaluacion from './Empresa'
import PlataformaEvaluacion from './SuppliersStore'

export function EvaluacionEmpresa(props: any) {
      return <EmpresaEvaluacion { ...props } />;
  }

  export function EvaluacionPlataforma(props: any) {
      return <PlataformaEvaluacion { ...props } />;
  }