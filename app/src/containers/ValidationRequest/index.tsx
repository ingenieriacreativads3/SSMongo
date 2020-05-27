import React from 'react';

import * as solicitudDeValidacionActions from './../../store/actions/solicitudDeValidacion'
import { connect } from 'react-redux'

import { List } from './../../components/List'

function mapStateToProps(store: {
  solicitudDeValidacionReducer: any,
}) {
  return {
    solicitudDeValidacionReducer: store.solicitudDeValidacionReducer,
  };
}

class ValidationRequest extends React.Component<{}, {}> {

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
    this.props.history.push("/solicitud/nuevoUsuario/" + item._id);
  }

  render(){

		if(!this.props.solicitudDeValidacionReducer.fetched && !this.props.solicitudDeValidacionReducer.fetching) {

			this.props.dispatch(solicitudDeValidacionActions.get())

		}

    return(
      <div>
        <List
          title={'Solicitudes de Validación'}
          columns={[
            { title: 'Empresa', field: 'empresa.nombre', type: 'string' },
            { title: 'CUIT', field: 'empresa.cuit', type: 'string' },
            { title: 'Fecha actualización', field: 'updated_at', type: 'string' },
            { title: 'Fecha creación', field: 'created_at', type: 'string' },
            
            {
              title: 'Estado',
              field: 'estado',
              lookup: { 'Resuelta': 'Resuelta', 'No resuelta': 'No Resuelta' },
            },
            
          ]}
          data={ this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones }
          action={ this.action }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ValidationRequest)