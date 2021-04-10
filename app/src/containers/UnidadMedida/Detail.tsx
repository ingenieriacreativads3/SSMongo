import React from 'react';
import { connect } from 'react-redux'

import { ValidarSolicitud as Validacion } from './../../components/UnidadMedida'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  unidadDeMedidaReducer: any,
}) {
  return {
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies:Cookies
}, {
  rubros: string[]
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      rubros: []
    };
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

  aceptar () {
    this.props.history.push('/solicitud/unidadMedida')
  }

  render(){

  

    if(
      !this.props.unidadDeMedidaReducer.fetched &&
      !this.props.unidadDeMedidaReducer.fetching
    ) {

      
      //this.props.dispatch(unidadDeMedidaActions.getById(this.props.match.params.id))
      this.props.dispatch(unidadDeMedidaActions.getById('6071d73a145c000070000bf3'))
    }

    let title: string = 'Solicitud Unidad de Medida'
    let _id: string = ''
    let usuario: string = ''
    let fecha: string = ''
    let unidad: string = ''
    let simbolo: string = ''
  
    if(
      this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida !== undefined
    ) {
      _id = this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida._id
      fecha = this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida.created_at
      unidad = this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida.magnitud
      simbolo = this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida.abreviatura
      if(
        this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida.empresa !== undefined
      ) {
        usuario = this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida.empresa.nombre
        
      }
    }
   
    


    return(
      <div>
        <Validacion
          title={title}
          _id={_id}
          usuario={usuario}
          fecha={fecha}
          unidad={unidad}
          simbolo={simbolo}
          aceptar={this.aceptar()}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)