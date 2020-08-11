import React from 'react';
import { connect } from 'react-redux'



import * as empresaActions from '../../store/actions/empresa'
import * as fileActions from './../../store/actions/file'
import * as dialogActions from './../../store/actions/dialog'
import { PerfilPropio as Perfil} from './../../components/Perfil'
import { OneButton } from './../../components/Dialogs'
import Link from '@material-ui/core/Link';
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  empresaReducer: any,
  fileReducer: any,
  login: any
}) {
  return {
    empresaReducer: store.empresaReducer,
    fileReducer: store.fileReducer,
    login: store.login
  };
}

class DatosPerfil extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  usuario: string,
  email: string,
  pass: string,
  domicilio: string,
  provincia: string,
  localidad: string,
  telefono: string
  photo: File[]
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.update = this.update.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      usuario: '',
      email: '',
      pass: '',
      domicilio: '',
      provincia: '',
      localidad: '',
      telefono: '',
      photo: []
    };
  }

  componentWillMount() {

    this.props.dispatch(empresaActions.getEmpresa(this.props.match.params.id))

  }

  componentDidUpdate() {

    if(this.props.empresaReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

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

  update(
    id: string,
    nombre: string,
    usuario: string,
    email: string,
    logo: string,
    password: string,
    telefono: string,
    provincia: string,
    localidad: string,
    visible: boolean,
    domicilio: string,
  ) {

    this.props.dispatch(empresaActions.updateEmpresa(
      id,
      nombre,
      usuario,
      email,
      logo,
      password,
      telefono,
      provincia,
      localidad,
      visible,
      domicilio
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.empresaReducer.status !== 200) {
      this.props.dispatch(empresaActions.reintentar())
    } else {
      this.props.dispatch(empresaActions.setear())
      this.props.history.push('/home/inicio')
    }

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
          update={this.update}
         />
         <OneButton 
          title={ 'Editar Item' }
          text={ this.props.empresaReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DatosPerfil)