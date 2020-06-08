import React from 'react';
import { connect } from 'react-redux'

import { MostrarCatalogo as Catalogo} from './../../components/Item'


function mapStateToProps(store: {
  
  login: any
}) {
  return {
   
    login: store.login
  };
}

class Catalog extends React.Component<{
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
        <Catalogo />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Catalog)