import React from 'react';
import { connect } from 'react-redux'

import { List } from './../../components/List'
import * as requestActions from './../../store/actions/request'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class PedidosVentas extends React.Component<{}, {}> {

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
     _id: string
   }) {
    this.props.history.push("/pedido/" + item._id);
  } 

  render(){

    console.log(this.props.login)

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
          title={'Mis ventas - Pedidos'}
          columns={[
            { title: 'N°', field: '_id', type: 'string' },
            { title: 'Comprador', field: 'empresa_perteneciente_id', type: 'string' },
            { title: 'Importe', field: 'importe', type: 'numeric' },

            {
              title: 'Estado',
              field: 'estado',
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

export default connect(mapStateToProps)(PedidosVentas)