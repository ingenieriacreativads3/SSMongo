import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { Drawer } from './../Drawer'
import Link from '@material-ui/core/Link';

import { NuevaUnidadMedida as NuevaSolicitudUnidad} from './../../components/UnidadMedida'
import { OneButton } from './../../components/Dialogs'

import * as dialogActions from './../../store/actions/dialog'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'


function mapStateToProps(store: {
 
  unidadDeMedidaReducer: any,
 
}) {
  return {
    
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,

  };
}

class NuevaSolicitud extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
	unidad: string,
  simbolo : string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getUnidad = this.getUnidad.bind(this);
    this.getSimbolo = this.getSimbolo.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      unidad: '',
      simbolo: '',
    };
  }

  componentDidUpdate() {

    if(this.props.unidadDeMedidaReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

  }

  getSimbolo(e: any) {
    this.setState({ simbolo: e.target.value })
  }

  getUnidad(e: any) {
    this.setState({ unidad: e.target.value })
  }

  save() {

    this.props.dispatch(unidadDeMedidaActions.setSolicitud(
      this.props.cookies.get('empresaId'),
      this.state.unidad,
      this.state.simbolo
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.unidadDeMedidaReducer.status !== 200) {
      this.props.dispatch(unidadDeMedidaActions.reintentar())
    } else {
      this.props.dispatch(unidadDeMedidaActions.setear())
      this.props.history.push('/item/nuevo')
    }

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


    return(
      <div>
        <NuevaSolicitudUnidad 
          getUnidad={ this.getUnidad }
          getSimbolo={ this.getSimbolo }
          save={ this.save }
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={this.appBar()}
        />
        <OneButton 
          title={ 'Solicitud Unidad de Medida' }
          text={ this.props.unidadDeMedidaReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NuevaSolicitud)