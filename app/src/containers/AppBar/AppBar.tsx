import React from 'react';
import { connect } from 'react-redux'

// import { Detail as DetailExport } from './../../../components/Detail'
// import * as requestActions from './../../../store/actions/request'
import PermanetDrawerLeft from './../../components/AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class AppBar extends React.Component<{
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
		this.linkCerrarSesion = this.linkCerrarSesion.bind(this)
    this.state = {};
	}
	
	linkCerrarSesion() {
		this.props.history.push('/')
	}

  render(){

    return(
      <div>
        <PermanetDrawerLeft
          //linkCerrarSesion={this.linkCerrarSesion}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AppBar)
