import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { List } from './../../../components/List'
import * as requestActions from './../../../store/actions/request'
import { Drawer } from './../../Drawer'
import { Footer } from './../../Footer'
import {AppBar} from './../../AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class PedidosCompras extends React.Component<{
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

  action(item: {
    pedido: {
      _id: string
    }
  }) {
    this.props.history.push("/compras/pedido/" + item.pedido._id);
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
      !this.props.requestReducer.fetching
    ) {

      this.props.dispatch(requestActions.getPurchase(this.props.cookies.get('empresaId')))

		}

    return(
      <div >
				
        <List
					history= { this.props.history }
					location= { this.props.location }
					match= { this.props.match }
					staticContext= { this.props.staticContext }
          title={'Mis compras - Pedidos'}
          columns={[
            { title: 'Vendedor', field: 'pedido.empresa_perteneciente.nombre', type: 'string' },
            { title: 'Importe', field: 'pedido.importe', type: 'numeric' },
            { title: 'Fecha Creación', field: 'pedido.created_at', type: 'date' },
            { title: 'Fecha Actualización', field: 'pedido.updated_at', type: 'date' },

            {
              title: 'Estado',
              field: 'pedido.estado',
              lookup: { 'En espera': 'En espera', 'Cancelado': 'Cancelado','Enviado':'Enviado', 'Finalizado':'Finalizado' },
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

export default connect(mapStateToProps)(PedidosCompras)