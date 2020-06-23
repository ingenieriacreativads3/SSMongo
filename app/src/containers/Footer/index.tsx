import React from 'react';
import FooterComponent from './Footer'
import Cookies from 'universal-cookie';

export function Footer(props: {
  
  history: any,
	location: any,
	match: any,
  staticContext?: any

}) {
	return <FooterComponent
  history={props.history}
  location={props.location}
  match={props.match}
staticContext={props.staticContext}

  />;
}