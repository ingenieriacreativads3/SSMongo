import React from 'react';
import { connect } from 'react-redux'

import { VerDetalleItem as ItemDetalle} from './../../components/Item'


function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
   
    login: store.login
  };
}

class Detalle extends React.Component<{
  history: any,
  location: any,
  match: any,
	staticContext?: any,
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
	}

  render(){

    return(
      <div>
        <ItemDetalle />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detalle)