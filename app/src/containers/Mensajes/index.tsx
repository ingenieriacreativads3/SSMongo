import React from 'react';
import ChatExport from './ChatRoom'
import Cookies from 'universal-cookie';

export function Chat(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}) {
	return <ChatExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    cookies={props.cookies}
  />;
}