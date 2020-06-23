import React from 'react';
import { connect } from 'react-redux'


import { Footer as FooterComponent } from './../../components/Footer'


function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class Foot extends React.Component<{
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

    // console.log(localStorage.getItem('empresaId'))

    return(
      <div>
        <FooterComponent
        history={this.props.history}
        location={this.props.location}
        match={this.props.match}
        staticContext={this.props.staticContext}
       
      />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Foot)