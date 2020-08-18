import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

// import { Detail as DetailExport } from './../../../components/Detail'
// import * as requestActions from './../../../store/actions/request'
import PermanetDrawerLeft from './../../components/AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class AppBar extends React.Component<{
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
		this.cerrarSesion = this.cerrarSesion.bind(this)
		this.miPerfil = this.miPerfil.bind(this)
		this.cambiarPassword = this.cambiarPassword.bind(this)
    this.state = {};
	}
	
	cerrarSesion() {
    this.props.cookies.remove('empresaId')
		this.props.history.push('/')
  }
  
  miPerfil() {
		this.props.history.push('/home/miperfil/' + this.props.cookies.get('empresaId'))
  }
  
  cambiarPassword() {
		this.props.history.push('/home/cambiar-password/' + this.props.cookies.get('empresaId'))
	}

  render(){

    return(
      <div>
        <PermanetDrawerLeft
          cerrarSesion={ this.cerrarSesion }
          miPerfil={ this.miPerfil }
          cambiarPassword={ this.cambiarPassword }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AppBar)
