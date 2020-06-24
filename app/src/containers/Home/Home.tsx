import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { InitLayout as HomeComponent } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'

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
  cookies: Cookies
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }
  
  drawer() {
    return <InicioDrawer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  footer() {
    return <Footer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }


  render(){

    // console.log(localStorage.getItem('empresaId'))

    return(
      <div>
        <HomeComponent
        history={this.props.history}
        location={this.props.location}
        match={this.props.match}
        staticContext={this.props.staticContext}
        cookies={this.props.cookies}
        drawer={ this.drawer() }
        footer={ this.footer() } />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home)