import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { PaginaBusqueda as BusquedaPage } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class Busqueda extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }
  
  drawer() {
    return <InicioDrawer { ...this.props } />
  }

  footer() {
    return <Footer { ...this.props } />
  }

  appBar() {
    return <AppBar { ...this.props } />
  }


  render(){

    // console.log(localStorage.getItem('empresaId'))

    return(
      <div>
        <BusquedaPage
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={ this.appBar() }
          { ...this.props }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Busqueda)