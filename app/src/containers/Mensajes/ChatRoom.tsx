import React from 'react';
import { connect } from 'react-redux'
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'
import { ChatRoom as Chat} from './../../components/Mensajes'

import * as messageAction from './../../store/actions/message'

function mapStateToProps(store: {
  mensajeReducer: any,
}) {
  return {
    mensajeReducer: store.mensajeReducer,
  };
}
 
class Mensajes extends React.Component<{}, {
  nuevoMensaje: string,
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
      nuevoMensaje: '',
    };
  }

  componentWillMount = () => {
    this.props.dispatch(messageAction.getMensajesByEmpresa(this.props.match.params.id))
  }

  getMessage(e: any) {
    this.setState({ nuevoMensaje: e.target.value})
  }

  sendMessage() {
    // this.props.dispatch(messageAction.)
  }

  footer() {
    return <Footer { ...this.props } />
  }

  drawer() {
    return <Drawer { ...this.props } />
  }

  appBar() {
    return <AppBar { ...this.props } />
  }

  render(){

    let mensajes: any[] = []

    if(this.props.mensajeReducer.fetched) {
      mensajes = this.props?.mensajeReducer?.data?.mensajes || []
    }

    return(
      <div>
        <Chat
          { ...this.props }
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
          mensajes = { mensajes }
          getMessage={ this.getMessage }
          sendMessage={this.sendMessage}
          nuevoMensaje={this.state.nuevoMensaje}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Mensajes)