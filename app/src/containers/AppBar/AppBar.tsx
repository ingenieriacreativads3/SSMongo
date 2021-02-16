import React from 'react';
import { connect } from 'react-redux'

import * as messageActions from './../../store/actions/message'

import PermanetDrawerLeft from './../../components/AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  mensajeReducer: any,
}) {
  return {
    mensajeReducer: store.mensajeReducer,
    requestReducer: store.requestReducer,
  };
}

class AppBar extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
	}

  componentWillMount = () => {
    this.props.dispatch(messageActions.getMensajesSinLeer(this.props.cookies.get('empresaId')))
  }
	
	cerrarSesion = () => {
    this.props.cookies.remove('empresaId')
		this.props.history.push('/')
  }
  
  miPerfil = () => {
		this.props.history.push('/home/miperfil/' + this.props.cookies.get('empresaId'))
  }
  
  cambiarPassword = () => {
		this.props.history.push('/home/cambiar-password/' + this.props.cookies.get('empresaId'))
	}

  mensajes = () => {
		this.props.history.push('/mensajes/' + this.props.cookies.get('empresaId'))
	}

  render(){

    let mensajesLista: any[] = []
    let total: number = 0

    if(this.props.mensajeReducer.fetchedMensajesSinLeer) {
      mensajesLista = this.props.mensajeReducer.mensajesSinLeer.mensajes
      total = mensajesLista.length
    }

    return(
      <div>
        <PermanetDrawerLeft
          cerrarSesion={ this.cerrarSesion }
          miPerfil={ this.miPerfil }
          cambiarPassword={ this.cambiarPassword }
          mensajes={ this.mensajes }
          mensajesLista={ mensajesLista }
          total={ total }
          nombre={ this.props.cookies.get('empresaName') }
          { ...this.props }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AppBar)
