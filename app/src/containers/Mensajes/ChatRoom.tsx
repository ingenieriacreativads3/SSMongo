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
import { ChatRoom as Chat} from './../../components/Mensajes'

function mapStateToProps(store: {
  empresaReducer: any,
  login: any
}) {
  return {
    empresaReducer: store.empresaReducer,
    login: store.login
  };
}

 
class Mensajes extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  mensajes: any [],
  nuevoMensaje:string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getMessage = this.getMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.state={
      mensajes:["mensaje1", "mensaje2"],
      nuevoMensaje: '',
    };
  }


  getMessage(e: any) {
    debugger;

    this.setState({ nuevoMensaje: e.target.value})
  }

  sendMessage() {

    let mensaje = this.state.mensajes;

    mensaje.push(this.state.nuevoMensaje);

     this.setState({
         mensajes:mensaje,
         nuevoMensaje:''
        })


  
  
        
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

    return(
      <div>
        <Chat 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
          mensajes = {this.state.mensajes}
          getMessage={ this.getMessage }
          sendMessage={this.sendMessage}
          nuevoMensaje={this.state.nuevoMensaje}
         />
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Mensajes)