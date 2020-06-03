import React from 'react';
import { connect } from 'react-redux'

import { Detail as DetailExport } from './../../components/Detail'
import * as presupuestoActions from './../../store/actions/request'

function mapStateToProps(store: {
  presupuestoReducer: any,
  login: any
}) {
  return {
    presupuestoReducer: store.presupuestoReducer,
    login: store.login
  };
}

class Detail extends React.Component<{}, {}> {

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
      !this.props.presupuestoReducer.fetched &&
      !this.props.presupuestoReducer.fetching &&
      (this.props.login !== undefined) &&
      (this.props.login.data !== undefined) &&
      (this.props.login.data.empresa !== undefined)
    ) {

      this.props.dispatch(presupuestoActions.getPurchase(this.props.login.data.empresa._id))
      console.log(this.props.presupuestoReducer)

		}

    return(
      <div>
        <DetailExport
          title={'Mis compras - Detalle de presupuesto'}
          subtitle1={'Datos del presupuesto'}
          subtitle2={'Item solicitado'}
					empresa={'Empresa'}
					importe={'importe'}
          estado={'estado'}
          cantidad={'cantidad'}
					item={{
						nombre: 'nombre',
						precio: 'precio',
						unidad: 'unidad'
					}}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)