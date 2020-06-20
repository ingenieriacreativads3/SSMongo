import React from 'react';
import SideBarExport from './SideBar'

export function SideBarInicio(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {
	return <SideBarExport
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;
}