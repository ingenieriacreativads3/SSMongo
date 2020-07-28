import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { VerEstadisticaActividad as ResumenActividad } from './../../components/Estadisticas'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  };
}

class EstadisticaActividad extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }
  
  drawer() {
    return <Drawer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  footer() {
    return <Footer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  appBar() {
    return <AppBar 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
      cookies={this.props.cookies}
    />
  }

  render(){

    // console.log(localStorage.getItem('empresaId'))

    return(
      <div>
        <ResumenActividad
        history={this.props.history}
        location={this.props.location}
        match={this.props.match}
        staticContext={this.props.staticContext}
        drawer={ this.drawer() }
        footer={ this.footer() } 
        appBar={ this.appBar() }/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EstadisticaActividad)