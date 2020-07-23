import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { OneButton } from './../../components/Dialogs'
import Link from '@material-ui/core/Link';

import { Renegociar as RenegociarExport} from './../../components/Presupuesto'
import * as dialogActions from './../../store/actions/dialog'

import * as presupuestoActions from './../../store/actions/presupuesto'
import { Drawer } from './../Drawer'
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

class Renegociacion extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
    idPresupuesto: string,
    idEmpresaReoferente:string,
    idItem: string,
    cantidad:string,
    precioSugerido:string,
	comentario : string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getPrecioSugerido = this.getPrecioSugerido.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      idPresupuesto: '',
      idItem: '',
      cantidad:'',
      comentario : '',
      precioSugerido: '',
      idEmpresaReoferente:'',
    };
  }

  componentWillMount() {

    this.props.dispatch(presupuestoActions.getPresupuesto(this.props.match.params.id))
    this.setState({
      idPresupuesto: this.props.match.params.id
    })

  }

  getCantidadItem(e: any) {
    this.setState({ cantidad: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

  getPrecioSugerido(e: any) {
    this.setState({ precioSugerido: e.target.value })
  }

  save() {

    this.props.dispatch(presupuestoActions.renegociar(
      this.props.match.params.id,
      '5f0f155d3eff762f0335072b',
      this.state.cantidad,
      this.props.cookies.get('empresaId'),
      this.state.precioSugerido,
      this.state.comentario,
    ))
    this.props.dispatch(dialogActions.openOneButton())

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
    return <Drawer 
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

    let presupuesto: {
      _id: string,
      estado: string,
      updated_at: string,
      created_at: string,
      importe: string,
      importe_anterior: string
      empresa_demandante: {
        _id: string,
        nombre: string,
        cuit: string,
        usuario: string,
        email: string,
        estado: string,
        updated_at: string,
        created_at: string,
      },
      empresa_perteneciente: {
        _id: string,
        nombre: string,
        cuit: string,
        usuario: string,
        email: string,
        estado: string,
        updated_at: string,
        created_at: string
      },
      mensajes: [],
      items: [
        {
          _id: string,
          foto: [],
          nombre: string,
          precio: string,
          descrpcion: string,
          mostrarPrecio: boolean,
          unidad_de_medida_id: string,
          updated_at: string,
          created_at: string,
          catalogo_id: string,
        }
      ]
    } = {
      _id: '',
      estado: '',
      updated_at: '',
      created_at: '',
      importe: 'Sin cotizar',
      importe_anterior: 'Sin cotizar',
      empresa_demandante: {
        _id: '',
        nombre: '',
        cuit: '',
        usuario: '',
        email: '',
        estado: '',
        updated_at: '',
        created_at: '',
      },
      empresa_perteneciente: {
        _id: '',
        nombre: '',
        cuit: '',
        usuario: '',
        email: '',
        estado: '',
        updated_at: '',
        created_at: ''
      },
      mensajes: [],
      items: [
        {
          _id: '',
          foto: [],
          nombre: '',
          precio: '',
          descrpcion: '',
          mostrarPrecio: false,
          unidad_de_medida_id: '',
          updated_at: '',
          created_at: '',
          catalogo_id: '',
        }
      ]
    }

    let company: {
      _id: string,
      nombre: string,
      cuit: string,
      usuario: string,
      email: string,
      estado: string,
      updated_at: string,
      created_at: string,
    } = {
      _id: '',
      nombre: '',
      cuit: '',
      usuario: '',
      email: '',
      estado: '',
      updated_at: '',
      created_at: '',
    }

    if(this.props.presupuestoReducer !== undefined) {
			if(this.props.presupuestoReducer.data !== undefined) {
				if(this.props.presupuestoReducer.data.presupuesto !== undefined) {
					presupuesto = { ...this.props.presupuestoReducer.data.presupuesto }
          company = this.props.presupuestoReducer.data.presupuesto.empresa_demandante
				}
			}
    }

    return(
      <div>
        <RenegociarExport 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
          getPrecioSugerido={ this.getPrecioSugerido }
          save={ this.save }
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={ this.appBar() }
          presupuesto={ presupuesto }
          company={ company }
        />
        <OneButton 
          title={ 'Renegociacion' }
          text={ this.props.presupuestoReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Renegociacion)