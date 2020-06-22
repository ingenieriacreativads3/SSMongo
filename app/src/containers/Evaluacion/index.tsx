import React from 'react';
import Cookies from 'universal-cookie';
import EmpresaEvaluacion from './Empresa'

export function EvaluacionEmpresa(props: {
    history: any,
    location: any,
    match: any,
    staticContext?: any,
    cookies: Cookies
  }) {
      return <EmpresaEvaluacion
      history={props.history}
      location={props.location}
      match={props.match}
      staticContext={props.staticContext}
      cookies={props.cookies}
    />;
  }