import React from 'react';
import { connect } from 'react-redux'

import { List } from './../../components/List'
import * as presupuestoActions from './../../store/actions/presupuesto'
import { Drawer } from './../Drawer'

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

  drawer() {
    return <Drawer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
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

		}

    return(
      <div>
        <List
          history= { this.props.history }
          location= { this.props.location }
          match= { this.props.match }
          staticContext= { this.props.staticContext }
          title={'Mis compras - Presupuestos'}
          columns={[
            { title: 'Vendedor', field: 'presupuesto.empresa_perteneciente.nombre', type: 'string' },
            { title: 'Importe', field: 'presupuesto.importe', type: 'numeric' },
            { title: 'Fecha Creación', field: 'presupuesto.created_at', type: 'date' },
            { title: 'Fecha Actualización', field: 'presupuesto.updated_at', type: 'date' },

            {
              title: 'Estado',
              field: 'presupuesto.estado',
              lookup: { 'En espera': 'En espera', 'Cancelado': 'Cancelado', 'Presupuestado':'Presupuestado', 'Confirmado':'Confirmado' },
            },
            
          ]}
          data={ this.props.presupuestoReducer.data.presupuestos }
          action={ this.action }
          drawer={ this.drawer() }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PresupuestosCompras)