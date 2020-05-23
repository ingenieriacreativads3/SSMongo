import React from 'react';

import * as dialogAction from './../../store/actions/dialog'
import * as solicitudDeValidacionActions from './../../store/actions/solicitudDeValidacion'
import { connect } from 'react-redux'

import { SolicitudesValidacion as ValidationRequestComponent } from './../../components/SolicitudValidacion'

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
    this.state = {};
  }

  render(){

		if(!this.props.solicitudDeValidacionReducer.fetched && !this.props.solicitudDeValidacionReducer.fetching) {

			this.props.dispatch(solicitudDeValidacionActions.get())

		}

    return(
      <div>
        <ValidationRequestComponent
          title={'Solicitudes de Validación'}
          columns={[
            { title: '_id', field: '_id', type: 'string' },
            { title: 'empresa_id', field: 'empresa_id', type: 'string' },
            { title: 'updated_at', field: 'updated_at', type: 'string' },
            { title: 'created_at', field: 'created_at', type: 'string' },
            
            {
              title: 'estado',
              field: 'estado',
              lookup: { 'Resuelta': 'Resuelta', 'No resuelta': 'No Resuelta' },
            },
            
          ]}
          data={ this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ValidationRequest)