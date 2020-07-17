import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../../components/Dialogs'


import { NuevoPresupuesto as PresupuestoNuevo} from './../../components/Presupuesto'
import * as dialogActions from './../../store/actions/dialog'

import * as presupuestoActions from './../../store/actions/presupuesto'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

function mapStateToProps(store: {
  itemReducer:any,
  presupuestoReducer: any,
}) {
  return {
    itemReducer: store.itemReducer,
    presupuestoReducer: store.presupuestoReducer,
  };
}

class NuevoPresupuesto extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
    idEmpresaPerteneciente: string,
    empresa: {
      _id: string,
      nombre: string,
      email: string
    }
    item: {
      _id: string,
      nombre: string,
      precio: string,
      descripcion: string,
      idMagnitud: string,
      mostrarPrecio: boolean,
      foto: string[],
    },
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
      idEmpresaPerteneciente: '5f050fe76e82d7332c28ceb2',
      empresa: {
        _id: '',
        nombre: 'chan',
        email: 'chan'
      },
      item: {
        _id: '5f0f155d3eff762f0335072b',
        nombre: '',
        precio: '',
        descripcion: '',
        idMagnitud: '',
        mostrarPrecio: false,
        foto: [],
      },
      cantidad:'',
      comentario : '',

    };
  }

  componentWillReceiveProps() {
    this.setState({
      empresa: {
        ...this.state.empresa,
        _id: this.props.cookies.get('empresaId'),
      },
    })
  }

  componentDidUpdate() {

    if(this.props.presupuestoReducer.fetched) {
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

  save() {

    this.props.dispatch(presupuestoActions.setPresupuesto(
      this.state.idEmpresaPerteneciente,
      this.props.cookies.get('empresaId'),
      this.state.item._id,
      this.state.cantidad,
      this.state.comentario,
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.presupuestoReducer.status !== 200) {
      this.props.dispatch(presupuestoActions.reintentar())
    } else {
      this.props.dispatch(presupuestoActions.setear())
      this.props.history.push('/compras/presupuestos/lista')
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
    />
  }
  
  render(){

    return(
      <div>
        <PresupuestoNuevo 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
          save={ this.save }
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={this.appBar()}
        />
        <OneButton 
          title={ 'Nuevo Presupuesto' }
          text={ this.props.presupuestoReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NuevoPresupuesto)