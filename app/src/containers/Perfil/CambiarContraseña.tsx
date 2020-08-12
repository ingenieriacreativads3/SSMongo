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
import CambioContraseña from '../../components/Perfil/CambiarContraseña';

function mapStateToProps(store: {
  empresaReducer: any,
  login: any
}) {
  return {
    empresaReducer: store.empresaReducer,
    login: store.login
  };
}

class CambiarContraseña extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  pass: string,
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
      pass: '',
    };
  }

//   componentWillMount() {

//     this.props.dispatch(empresaActions.getEmpresa(this.props.match.params.id))

//   }

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
    password: string,
    ) {

    // this.props.dispatch(empresaActions.updateContraseña(
    //   password,
    //  ))

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
     "clave": string,
    } = {
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
        <CambiarContraseña 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
        //   empresa={empresa}
        //   update={this.update}
         />
         {/* <OneButton 
          title={ 'Cambiar Contraseña' }
          text={  this.props.empresaReducer.message  }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CambiarContraseña)