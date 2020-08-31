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
import { CambiarContraseña as ChangePassword} from './../../components/Perfil'

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

  update(oldPassword: string, newPassword: string) {

    this.props.dispatch(empresaActions.changePassword(
      this.props.cookies.get('empresaId'),
      oldPassword,
      newPassword
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

    return(
      <div>
        <ChangePassword 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
          update={this.update}
         />
         <OneButton 
          title={ 'Cambiar Contraseña' }
          text={  this.props.empresaReducer.message  }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CambiarContraseña)