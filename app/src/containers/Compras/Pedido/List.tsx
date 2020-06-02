import React from 'react';
import { connect } from 'react-redux'

import { List } from './../../../components/List'
import * as requestActions from './../../../store/actions/request'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class PedidosCompras extends React.Component<{}, {}> {

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

    this.props.history.push("/pedido/" + item.pedido._id);
  } 

  render(){

		if(
      !this.props.requestReducer.fetched &&
      !this.props.requestReducer.fetching &&
      (this.props.login !== undefined) &&
      (this.props.login.data !== undefined) &&
      (this.props.login.data.empresa !== undefined)
    ) {

      this.props.dispatch(requestActions.getPurchase(this.props.login.data.empresa._id))
      console.log(this.props.requestReducer)

		}

    return(
      <div>
        <List
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
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PedidosCompras)