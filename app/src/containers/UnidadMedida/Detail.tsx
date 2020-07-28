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

  render(){

  

    if(
      !this.props.unidadDeMedidaReducer.fetched &&
      !this.props.unidadDeMedidaReducer.fetching
    ) {

      this.props.dispatch(unidadDeMedidaActions.getById(this.props.match.params.id))

    }

    let title: string = 'Solicitud Unidad de Medida'
    let _id: string = ''
    let usuario: string = ''
    let fecha: string = ''
    let unidad: string = ''
    let simbolo: string = ''
    let magnitud: string = ''
    
   



    return(
      <div>
        <Validacion
          title={title}
          _id={_id}
          usuario={usuario}
          fecha={fecha}
          unidad={unidad}
          simbolo={simbolo}
          magnitud={magnitud}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)