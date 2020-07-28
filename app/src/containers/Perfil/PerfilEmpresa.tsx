import React from 'react';
import { connect } from 'react-redux'
import * as registerActions from '../../store/actions/register'
import { PerfilEmpresa as EmpresaPerfil} from './../../components/Perfil'
import Link from '@material-ui/core/Link';
import { Footer } from './../Footer'
import { InicioDrawer } from './../DrawerInicio'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  
  login: any
}) {
  return {
   
    
    login: store.login
  };
}

class Empresa extends React.Component<{
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

footer() {
  return <Footer 
    history={this.props.history}
    location={this.props.location}
    match={this.props.match}
    staticContext={this.props.staticContext}
  />
}

drawer() {
  return <InicioDrawer 
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

   {
    
    this.props.dispatch(registerActions.getEmpresa(this.props.match.params.id))
    }

  

    return(
      <div>
        <EmpresaPerfil 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
         
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Empresa)