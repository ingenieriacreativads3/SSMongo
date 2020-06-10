import React from 'react';
import List from './List'
import Detail from './Detail'
import Cookies from 'universal-cookie';

export function PurchaseRequests(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
  return <List 
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}

export function DetailPurchaseRequest(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <Detail
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}