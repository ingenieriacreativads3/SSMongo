import React from 'react';


//import * as pedidosCompraActions from './../../store/actions/solicitudDeValidacion'
import { connect } from 'react-redux'

import { PedidosCompra as PedidosCompraComponent } from '../../../components/Pedido'

function mapStateToProps(store: {
  pedidosCompraReducer: any,
}) {
  return {
    pedidosCompraReducer: store.pedidosCompraReducer,
  };
}

class PedidosCompras extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    //this.action = this.action.bind(this);
    this.state = {};
  }

   action(item: any) {
    this.props.history.push("/solicitud/nuevoUsuario/" + item._id);
  } 

  render(){

		/* if(!this.props.solicitudDeValidacionReducer.fetched && !this.props.solicitudDeValidacionReducer.fetching) {

			this.props.dispatch(solicitudDeValidacionActions.get())

		} */

    return(
      <div>
        <PedidosCompraComponent
          title={'Mis compras - Pedidos'}
          columns={[
            { title: 'Fecha', field: 'fecha', type: 'date' },
            { title: 'Vendedor', field: 'vendedor' },
            { title: 'Cantidad', field: 'cantidad', type: 'numeric' },
            { title: 'Unidad', field: 'unidad' },
            { title: 'Precio', field: 'precio', type:'numeric' },
            {
              title: 'Estado',
              field: 'estado',
              lookup: { 'En espera': 'En espera', 'Cancelado': 'Cancelado','Enviado':'Enviado', 'Finalizado':'Finalizado' },
            },
            
          ]}
          data={ this.props.pedidosCompraReducer.data.pedidos }
          action={ this.action }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PedidosCompras)