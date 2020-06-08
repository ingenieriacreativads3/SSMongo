import React from 'react';
import { connect } from 'react-redux'

import { EditarItem as ItemEditar} from './../../components/Item'


function mapStateToProps(store: {
  
  login: any
}) {
  return {
   
    login: store.login
  };
}

class Editar extends React.Component<{
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
        <ItemEditar />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Editar)