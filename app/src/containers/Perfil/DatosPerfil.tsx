import React from 'react';
import { connect } from 'react-redux'



import * as empresaActions from '../../store/actions/empresa'
import { PerfilPropio as Perfil} from './../../components/Perfil'
import Link from '@material-ui/core/Link';
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  empresaReducer: any,
  login: any
}) {
  return {
    empresaReducer: store.empresaReducer,
    login: store.login
  };
}

class DatosPerfil extends React.Component<{
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

  componentWillMount() {

    this.props.dispatch(empresaActions.getEmpresa(this.props.match.params.id))

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
    return <Drawer 
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

    let empresa: {
      "_id": string,
      "nombre": string,
      "cuit": string,
      "usuario": string,
      "email": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
      "domicilioLegal": string,
      "localidad": string,
      "logo": string,
      "mostrar_perfil": boolean,
      "provincia": string,
      "telefono": string,
      "clave": string,
    } = {
      "_id": '',
      "nombre": '',
      "cuit": '',
      "usuario": '',
      "email": '',
      "estado": '',
      "updated_at": '',
      "created_at": '',
      "domicilioLegal": '',
      "localidad": '',
      "logo": '',
      "mostrar_perfil": false,
      "provincia": '',
      "telefono": '',
      "clave": ''
    }

    if(this.props.empresaReducer !== undefined) {
			if(this.props.empresaReducer.data !== undefined) {
				if(this.props.empresaReducer.data.empresa !== undefined) {
          empresa = { ...this.props.empresaReducer.data.empresa }
				}
			}
		}
  

    return(
      <div>
        <Perfil 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
          empresa={empresa}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DatosPerfil)