import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { EmpresasPorRubro as EmpresaList } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  login: any,
  empresaReducer: any,
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login,
    empresaReducer: store.empresaReducer,
  };
}

class Empresas extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies,
}, {rubroSeleccionado: string}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {
      rubroSeleccionado:'',
    };
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

  componentWillMount() {
    let rubroSeleccionado: '';
    rubroSeleccionado = { ...this.props.empresaReducer.rubroSeleccionado }
    let rubro = [];
   
    rubro = Object.values(rubroSeleccionado);
   
    this.setState({rubroSeleccionado: rubro.join( '' )});
}

  render(){

    // console.log(localStorage.getItem('empresaId'))

  
    console.log(this.state.rubroSeleccionado);

    return(
      
      <div>
        <EmpresaList
        history={this.props.history}
        location={this.props.location}
        match={this.props.match}
        staticContext={this.props.staticContext}
        cookies={this.props.cookies}
        //drawer={ this.drawer() }
        footer={ this.footer() }
        appBar={this.appBar()}  
        rubro = {this.state.rubroSeleccionado} />
      
      </div>
    );
  }
}

export default connect(mapStateToProps)(Empresas)