import React from 'react';
import { connect } from 'react-redux'

import DrawerComponent from './../../components/Drawer'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

// 602ad181b9481716c719eb19
// 6029384fae08ed54b849e5f2

// 602ad181b9481716c719eb19
// 6029384fae08ed54b849e5f2

class Drawer extends React.Component<{
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
		this.link = this.link.bind(this)
    this.state = {};
	}
	
	link() {
		this.props.history.push('/home/catalogo')
	}

  render(){

    return(
      <div>
        <DrawerComponent
          link={this.link}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Drawer)