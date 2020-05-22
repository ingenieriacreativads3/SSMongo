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
          data={ this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ValidationRequest)