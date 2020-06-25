import React from 'react';
import Cookies from 'universal-cookie';
import EmpresaEvaluacion from './Empresa'
import PlataformaEvaluacion from './SuppliersStore'

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

  export function EvaluacionPlataforma(props: {
    history: any,
    location: any,
    match: any,
    staticContext?: any,
    cookies: Cookies
  }) {
      return <PlataformaEvaluacion
      history={props.history}
      location={props.location}
      match={props.match}
      staticContext={props.staticContext}
      cookies={props.cookies}
    />;
  }