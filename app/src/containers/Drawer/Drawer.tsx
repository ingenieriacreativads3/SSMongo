import React from 'react';
import { connect } from 'react-redux'

import DrawerComponent from './../../components/Drawer'

function mapStateToProps(store: {}) {
  return {};
}

class Drawer extends React.Component<{}, {}> {

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
        <DrawerComponent link={ this.link } />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Drawer)