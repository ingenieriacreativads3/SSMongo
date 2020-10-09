import React from 'react';
import { connect } from 'react-redux'

import { Button  } from '@material-ui/core';

import { VerDetalleItem as ItemDetalle} from './../../components/Item'
import * as itemActions from './../../store/actions/item'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  itemReducer: any,
  login: any
}) {
  return {
    itemReducer : store.itemReducer,
    login: store.login
  };
}

class Detalle extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies,
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.solicitarPresupuesto = this.solicitarPresupuesto.bind(this);
    this.solicitarPedido = this.solicitarPedido.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(itemActions.reintentar())
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

  actions(classes: any) {
    return <div>
      <Button
        variant="outlined"
        //color="primary"
        size="small"
        className={classes.Boton}
        onClick={this.solicitarPedido}
      >
        Solicitar pedido
      </Button>
      <Button
        variant="outlined"
        //color="primary"
        size="small"
        className={classes.Boton}
        onClick={this.solicitarPresupuesto}
      >
        Solicitar presupuesto
      </Button>
    </div>
  }

  solicitarPedido() {
    this.props.history.push('/pedido/nuevo/' + this.props.match.params.id)
  }

  solicitarPresupuesto() {
    this.props.history.push('/presupuesto/nuevo/' + this.props.match.params.id)
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
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    }

    if(
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined
    ) {
      item = this.props.itemReducer.data.item
    }

    return(
      <div>
        <ItemDetalle
            drawer={ this.drawer() }
            footer={this.footer()}
            appBar={this.appBar()}
            item={item}
            actions={ (classes: any) => this.actions(classes) }
          // history={this.props.history}
          // location={this.props.location}
          // match={this.props.match}
          // staticContext={this.props.staticContext}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detalle)