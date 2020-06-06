import React from 'react';
import { connect } from 'react-redux'

import { InitLayout as HomeComponent } from './../../components/Home'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class Home extends React.Component<{
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
        <HomeComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home)