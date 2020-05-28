import React from 'react';
import { connect } from 'react-redux'

import { List } from './../../components/List'
import * as presupuestoActions from './../../store/actions/presupuesto'

function mapStateToProps(store: {
  presupuestoReducer: any,
  login: any
}) {
  return {
    presupuestoReducer: store.presupuestoReducer,
    login: store.login
  };
}

class PresupuestosCompras extends React.Component<{}, {}> {

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
    this.props.history.push("/presupuesto/" + item._id);
  } 

  render(){

    console.log(this.props.login)

		if(
      !this.props.presupuestoReducer.fetched &&
      !this.props.presupuestoReducer.fetching &&
      (this.props.login !== undefined) &&
      (this.props.login.data !== undefined) &&
      (this.props.login.data.empresa !== undefined)
    ) {

			this.props.dispatch(presupuestoActions.get(this.props.login.data.empresa._id))

		}

    return(
      <div>
        <List
          title={'Mis compras - Presupuestos'}
          columns={[
            { title: 'N°', field: '_id', type: 'string' },
            { title: 'Vendedor', field: 'empresa_perteneciente_id', type: 'string' },
            { title: 'Importe', field: 'importe', type: 'numeric' },

            {
              title: 'Estado',
              field: 'estado',
              lookup: { 'En espera': 'En espera', 'Cancelado': 'Cancelado','Presupuestado':'Presupuestado', 'Confirmado':'Confirmado' },
            },
            
          ]}
          data={ this.props.presupuestoReducer.data.presupuestos }
          action={ this.action }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PresupuestosCompras)