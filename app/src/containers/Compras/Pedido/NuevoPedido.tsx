import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../../../components/Dialogs'


import { NuevoPedido as PedidoNuevo} from './../../../components/Pedido'
import * as dialogActions from './../../../store/actions/dialog'

import * as pedidoActions from './../../../store/actions/request'
import * as unidadDeMedidaActions from './../../../store/actions/unidadDeMedida'
import { InicioDrawer } from './../../DrawerInicio'
import { Footer } from './../../Footer'

function mapStateToProps(store: {
  itemReducer:any,
  requestReducer: any,

}) {
  return {
    itemReducer: store.itemReducer,
    requestReducer: store.requestReducer,
 
  };
}

class NuevoPedido extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
    idEmpresaPerteneciente: string,
    idEmpresaDemandante:string,
    idItem: string,
    cantidad:string,
	  comentario : string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      idEmpresaPerteneciente: '',
      idEmpresaDemandante:'',
      idItem: '',
      cantidad:'',
      comentario : '',

    };
  }

 

  

  getCantidadItem(e: any) {
    this.setState({ cantidad: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

  

  save() {

    this.props.dispatch(pedidoActions.setRequest(
      this.props.cookies.get('empresaId'),
      this.state.comentario,
      this.state.idEmpresaPerteneciente,
      this.state.idItem,
      this.state.cantidad,
      
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.itemReducer.status !== 200) {
      this.props.dispatch(pedidoActions.reintentar())
    } else {
      this.props.dispatch(pedidoActions.setear())
      this.props.history.push('/home/inicio')
    }

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

  render(){

    return(
      <div>
        <PedidoNuevo 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
           save={ this.save }
           drawer={ this.drawer() }
           footer={this.footer()}
           
        />
        <OneButton 
          title={ 'Nuevo Presupuesto' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NuevoPedido)