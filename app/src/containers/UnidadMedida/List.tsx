import React from 'react';

import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import { connect } from 'react-redux'

import { List } from './../../components/List'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  unidadDeMedidaReducer: any,
}) {
  return {
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
  };
}

class ListaSolicitudes extends React.Component<{
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
    this.action = this.action.bind(this);
    this.state = {};
  }

  action(item: {_id: string }) {
    this.props.history.push("/solicitud/unidadMedida/" + item._id);
    this.props.dispatch(unidadDeMedidaActions.resetear())
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

		   this.props.dispatch(unidadDeMedidaActions.getSolicitudes())

		 }

    return(
      <div>
        <List
          history= { this.props.history }
          location= { this.props.location }
          match= { this.props.match }
          staticContext= { this.props.staticContext }
          title={'Solicitudes Unidad de Medida'}
          columns={[
            { title: 'Empresa', field: '', type: 'string' },
            { title: 'Magnitud', field: 'magnitud', type: 'string' },
            { title: 'Abreviatura', field: 'abreviatura', type: 'string' },
            {
              title: 'Estado',
              field: 'estado',
              lookup: { 'Resuelta': 'Resuelta', 'No resuelta': 'No Resuelta' },
            },
            { title: 'Fecha creación', field: 'created_at', type: 'string' },
            { title: 'Fecha actualización', field: 'updated_at', type: 'string' },
          ]}
          data={ this.props.unidadDeMedidaReducer.data.SolicitudesDeUnidadDeMedida }
          action={ this.action }
          drawer={ this.drawer() }
          footer={this.footer()}
          appBar={this.appBar()}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListaSolicitudes)