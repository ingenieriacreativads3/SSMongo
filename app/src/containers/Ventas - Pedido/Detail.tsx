import React from 'react';
import { connect } from 'react-redux'

import { Detail as DetailExport } from './../../components/Detail'
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
      !this.props.requestReducer.fetched &&
      !this.props.requestReducer.fetching &&
      (this.props.login !== undefined) &&
      (this.props.login.data !== undefined) &&
      (this.props.login.data.empresa !== undefined)
    ) {

      this.props.dispatch(requestActions.getSale(this.props.login.data.empresa._id))
      console.log(this.props.requestReducer)

		}

    return(
      <div>
        <DetailExport
          title={'Mis ventas - Detalle de pedido'}
          subtitle1={'Datos del pedido'}
          subtitle2={'Item solicitado'}
					empresa={'Empresa'}
					importe={'importe'}
					estado={'estado'}
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