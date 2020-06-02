import React from 'react';
import { connect } from 'react-redux'

import { Detail as DetailExport } from './../../components/Detail'
import * as presupuestosActions from './../../store/actions/presupuesto'

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
    presupuesto: {
      _id: string
    }
  }) {

    this.props.history.push("/presupuesto/" + item.presupuesto._id);
  } 

  render(){

		if(
      !this.props.presupuestoReducer.fetched &&
      !this.props.presupuestoReducer.fetching &&
      (this.props.login !== undefined) &&
      (this.props.login.data !== undefined) &&
      (this.props.login.data.empresa !== undefined)
    ) {

      this.props.dispatch(presupuestosActions.getSale(this.props.login.data.empresa._id))
      console.log(this.props.presupuestoReducer)

		}

    return(
      <div>
        <DetailExport
          title={'Mis ventas - Detalle de presupuesto'}
          subtitle1={'Datos del presupuesto'}
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