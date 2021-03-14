import React from 'react';
import { connect } from 'react-redux'

import DrawerInicio from './../../components/DrawerInicio'

function mapStateToProps(store: {}) {
  return {};
}

class InicioDrawer extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
	}
	
	link = () => {
		this.props.history.push('/home/catalogo')
	}

  render(){

    return(
      <div>
        <DrawerInicio { ...this.props } />
      </div>
    );
  }
}

export default connect(mapStateToProps)(InicioDrawer)