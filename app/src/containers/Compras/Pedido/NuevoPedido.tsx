import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../../../components/Dialogs'


import { NuevoPedido as PedidoNuevo} from './../../../components/Pedido'
import * as dialogActions from './../../../store/actions/dialog'

import * as pedidoActions from './../../../store/actions/request'
import * as empresaActions from './../../../store/actions/empresa'
import * as itemActions from './../../../store/actions/item'
import * as unidadDeMedidaActions from './../../../store/actions/unidadDeMedida'
import { InicioDrawer } from './../../DrawerInicio'
import { Footer } from './../../Footer'
import {AppBar} from './../../AppBar'

function mapStateToProps(store: {
  itemReducer:any,
  requestReducer: any,
  empresaReducer: any
}) {
  return {
    itemReducer: store.itemReducer,
    requestReducer: store.requestReducer,
    empresaReducer: store.empresaReducer
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

  componentWillMount() {

    this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    this.props.dispatch(empresaActions.getEmpresa(this.props.cookies.get('empresaId')))

  }

  componentDidUpdate() {

    if(this.props.requestReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

  }

  getCantidadItem(e: any) {
    this.setState({ cantidad: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

  save(idItem: string, idEmpresaPerteneciente: string) {

    this.props.dispatch(pedidoActions.setRequest(
      idItem,
      this.state.cantidad,
      idEmpresaPerteneciente,
      this.props.cookies.get('empresaId'),
      this.state.comentario
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.requestReducer.status !== 200) {
      this.props.dispatch(pedidoActions.reintentar())
    } else {
      this.props.dispatch(pedidoActions.setear())
      this.props.history.push('/compras/pedidos/lista')
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

    let item: {
      "_id": string,
      "foto": string[],
      "nombre": string,
      "precio": string,
      "descrpcion": string,
      "mostrarPrecio": boolean,
      "unidad_de_medida_id": string,
      "updated_at": string,
      "created_at": string,
      "catalogo_id": string,
      "unidad_de_medida": {
        "_id": string,
        "nombre": string,
        "abreviatura": string,
        "updated_at": string,
        "created_at": string,
      },
      "catalogo": {
        "_id": string,
        "empresa_id": string,
        "updated_at": string,
        "created_at": string,
        "empresa": {
          "_id": string,
          "nombre": string,
          "cuit": string,
          "usuario": string,
          "clave": string,
          "email": string,
          "estado": string,
          "updated_at": string,
          "created_at": string,
        }
      }
    } = {
      "_id": '',
      "foto": [],
      "nombre": '',
      "precio": '',
      "descrpcion": '',
      "mostrarPrecio": false,
      "unidad_de_medida_id": '',
      "updated_at": '',
      "created_at": '',
      "catalogo_id": '',
      "unidad_de_medida": {
        "_id": '',
        "nombre": '',
        "abreviatura": '',
        "updated_at": '',
        "created_at": '',
      },
      "catalogo": {
        "_id": '',
        "empresa_id": '',
        "updated_at": '',
        "created_at": '',
        "empresa": {
          "_id": '',
          "nombre": '',
          "cuit": '',
          "usuario": '',
          "clave": '',
          "email": '',
          "estado": '',
          "updated_at": '',
          "created_at": '',
        }
      }
    }

    if(
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined
    ) {
      item = this.props.itemReducer.data.item
    }

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

    if(
      this.props.empresaReducer.fetched &&
      this.props.empresaReducer.data !== undefined
    ) {
      empresa = this.props.empresaReducer.data.empresa
    }

    return(
      <div>
        <PedidoNuevo 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
          save={ this.save }
          drawer={ this.drawer() }
          footer={this.footer()}
          appBar={this.appBar()}
          item={item}
          empresa={empresa}
        />
        <OneButton 
          title={ 'Nuevo Pedido' }
          text={ this.props.requestReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NuevoPedido)