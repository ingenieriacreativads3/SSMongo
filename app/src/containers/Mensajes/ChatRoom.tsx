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
    this.state={
      nuevoMensaje: '',
    };
  }

  componentWillMount = () => {
    this.props.dispatch(messageAction.getMensajesByEmpresa(this.props.match.params.id))
  }

  getMessages = (idOtraEmpresa: string) => {
    this.props.dispatch(messageAction.getMensajes(this.props.match.params.id, idOtraEmpresa))
  }

  getMessage = (e: any) => {
    this.setState({ nuevoMensaje: e.target.value})
  }

  sendMessage = () => {
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
    let empresas: any
    let empresasList: any[] = []

    if(this.props.mensajeReducer.fetched) {
      if(this.props?.mensajeReducer?.mensajes?.chat !== undefined) mensajes = this.props?.mensajeReducer?.mensajes?.chat || []
      if(
        this.props !== undefined &&
        this.props.mensajeReducer !== undefined &&
        this.props.mensajeReducer.empresas !== undefined
      ) {
        if(Array.isArray(this.props.mensajeReducer.empresas)) {
          empresas = this.props.mensajeReducer.empresas
        } else {
          Object.keys(this.props.mensajeReducer.empresas).map((key: string) => {
            empresasList.push(this.props.mensajeReducer.empresas[key])
          })
          empresas = empresasList
        }
      }
    }
    
    return(
      <div>
        <Chat
          { ...this.props }
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
          mensajes = { mensajes }
          empresas = { empresas }
          getMessage={ this.getMessage }
          sendMessage={ this.sendMessage }
          getMessages={ this.getMessages }
          nuevoMensaje={this.state.nuevoMensaje}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Mensajes)