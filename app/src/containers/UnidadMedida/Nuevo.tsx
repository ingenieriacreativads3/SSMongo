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
  idEmpresa: string,
	unidad: string,
  magnitud: string,
  simbolo : string,
 
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getUnidad = this.getUnidad.bind(this);
    this.getMagnitud = this.getMagnitud.bind(this);
    this.getSimbolo = this.getSimbolo.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      idEmpresa: '',
      unidad: '',
      magnitud: '',
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

  getMagnitud(e: any) {
    this.setState({ magnitud: e.target.value })
  }

  getUnidad(e: any) {
    this.setState({ unidad: e.target.value })
  }

  

  save() {

    this.props.dispatch(unidadDeMedidaActions.setSolicitud(
      this.props.cookies.get('empresaId'),
      this.state.unidad,
      this.state.magnitud,
      this.state.simbolo,
     
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.itemReducer.status !== 200) {
      this.props.dispatch(unidadDeMedidaActions.reintentar())
    } else {
      this.props.dispatch(unidadDeMedidaActions.setear())
      this.props.history.push('/home/item/nuevo')
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

  render(){


    return(
      <div>
        <NuevaSolicitudUnidad 
          getUnidad={ this.getUnidad }
          getSimbolo={ this.getSimbolo }
          getMagnitud={ this.getMagnitud }
          drawer={ this.drawer() }
          footer={ this.footer() }
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