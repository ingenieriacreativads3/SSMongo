import React from 'react';
import { connect } from 'react-redux'

import { VerDetalleItem as ItemDetalle} from './../../components/Item'
import * as itemActions from './../../store/actions/item'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

function mapStateToProps(store: {
  itemReducer: any,
  login: any
}) {
  return {
    item : store.itemReducer,
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

  appBar() {
    return <AppBar 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
      cookies={this.props.cookies}
    />
  }

  

  render(){


    // if(
    //   !this.props.itemReducer.fetched &&
    //   !this.props.itemReducer.fetching
    // ) {
    
    // this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    // }

    return(
      <div>
        <ItemDetalle
           drawer={ this.drawer() }
           footer={this.footer()}
           appBar={this.appBar()}
          // history={this.props.history}
          // location={this.props.location}
          // match={this.props.match}
          // staticContext={this.props.staticContext}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detalle)