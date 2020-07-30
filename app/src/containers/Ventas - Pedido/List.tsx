import React from 'react';
import { connect } from 'react-redux'

import { List } from './../../components/List'
import * as requestActions from './../../store/actions/request'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class PedidosVentas extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any
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

  componentWillMount() {

    this.props.dispatch(requestActions.getSale(this.props.cookies.get('empresaId')))

  }

  action(aux: {
    pedido: {
      _id: string
    }
  }) {
    this.props.history.push("/ventas/pedido/" + aux.pedido._id);
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
      !this.props.requestReducer.fetched &&
      !this.props.requestReducer.fetching &&
      (this.props.login !== undefined) &&
      (this.props.login.data !== undefined) &&
      (this.props.login.data.empresa !== undefined)
    ) {

			this.props.dispatch(requestActions.getSale(this.props.login.data.empresa._id))

		}

    return(
      <div>
        <List
          history= { this.props.history }
          location= { this.props.location }
          match= { this.props.match }
          staticContext= { this.props.staticContext }
          title={'Mis ventas - Pedidos'}
          columns={[
            { title: 'Comprador', field: 'pedido.empresa_demandante.nombre', type: 'string' },
            { title: 'Importe', field: 'pedido.importe', type: 'numeric' },
            { title: 'Fecha', field: 'pedido.created_at', type: 'date' },
            { title: 'Producto', field: 'pedido.items[0].item.nombre', type: 'string' },
            { title: 'Cantidad', field: 'pedido.items[0].cantidad', type: 'numeric' },
            {
              title: 'Estado',
              field: 'pedido.estado',
              lookup: { 'En espera': 'En espera', 'Cancelado': 'Cancelado', 'Enviado': 'Enviado', 'Finalizado': 'Finalizado' },
            },
            
          ]}
          data={ this.props.requestReducer.data.pedidos }
          action={ this.action }
          drawer={ this.drawer() }
          footer={this.footer()}
          appBar={this.appBar()}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PedidosVentas)