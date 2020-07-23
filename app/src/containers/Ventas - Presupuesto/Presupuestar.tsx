import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { OneButton } from './../../components/Dialogs'
import Link from '@material-ui/core/Link';

import { Presupuestar as PresupuestarExport} from './../../components/Presupuesto'
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
    itemReducer:store.itemReducer,
    presupuestoReducer: store.presupuestoReducer,
  };
}

class Presupuestacion extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  presupuesto: {
    _id: string,
    estado: string,
    updated_at: string,
    created_at: string,
    importe: string,
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
        foto: string[],
        nombre: string,
        precio: string,
        descrpcion: string,
        mostrarPrecio: boolean,
        unidad_de_medida_id: string,
        updated_at: string,
        created_at: string,
        catalogo_id: string,
        unidad_de_medida: {
          _id: string,
          nombre: string,
          abreviatura: string,
          updated_at: string,
          created_at: string,
        }
      }
    ]
  },
  cantidad: string,
  importe: string,
  comentario: string,
  item: {
    _id: string,
    foto: string[],
    nombre: string,
    precio: string,
    descrpcion: string,
    mostrarPrecio: boolean,
    unidad_de_medida_id: string,
    updated_at: string,
    created_at: string,
    catalogo_id: string,
    unidad_de_medida: {
      _id: string,
      nombre: string,
      abreviatura: string,
      updated_at: string,
      created_at: string,
    }
  }
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getImporte = this.getImporte.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.cancelar = this.cancelar.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      presupuesto: {
        _id: '',
        estado: '',
        updated_at: '',
        created_at: '',
        importe: '',
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
            unidad_de_medida: {
              _id: '',
              nombre: '',
              abreviatura: '',
              updated_at: '',
              created_at: '',
            }
          }
        ]
      },
      cantidad:'',
      importe: '',
      comentario : '',
      item: {
        _id: '5f0f155d3eff762f0335072b',
        foto: [],
        nombre: '',
        precio: '',
        descrpcion: '',
        mostrarPrecio: false,
        unidad_de_medida_id: '',
        updated_at: '',
        created_at: '',
        catalogo_id: '',
        unidad_de_medida: {
          _id: '',
          nombre: '',
          abreviatura: '',
          updated_at: '',
          created_at: '',
        }
      }
    };
  }

  componentWillMount() {

    this.props.dispatch(presupuestoActions.getPresupuesto(this.props.match.params.id))

  }

  componentWillUpdate() {

    if(
      this.props.presupuestoReducer.fetched &&
      !this.props.presupuestoReducer.fetching &&
      this.state.presupuesto._id === '' &&
      this.props.presupuestoReducer.status === 200
    ) {
      this.setState({
        presupuesto: this.props.presupuestoReducer.data.presupuesto
      })
    }
    
  }

  getCantidadItem(e: any) {
    this.setState({ cantidad: e.target.value })
  }
  
  getImporte(e: any) {
    this.setState({ importe: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }
  
  save() {

    this.props.dispatch(presupuestoActions.presupuestar(
      this.state.presupuesto._id,
      this.state.item._id,
      this.state.cantidad,
      this.state.importe,
      this.state.comentario,
    ))
    this.props.dispatch(dialogActions.openOneButton())

  }

  cancelar() {

    this.props.history.push('/ventas/presupuesto/' + this.props.match.params.id)

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.presupuestoReducer.status !== 200) {
      this.props.dispatch(presupuestoActions.reintentar())
    } else {
      this.props.dispatch(presupuestoActions.setear())
      this.props.history.push('/ventas/presupuestos/lista')
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
          mostrarPrecio: false,
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
      importe: '',
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

    if(
      this.props.presupuestoReducer.fetched &&
      this.props.presupuestoReducer.data !== undefined
    ) {
      presupuesto = this.props.presupuestoReducer.data.presupuesto
    }

    return(
      <div>
        <PresupuestarExport 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
          getImporte = {this.getImporte}
          save={ this.save }
          cancelar={ this.cancelar }
          drawer={ this.drawer() }
          footer={ this.footer() }
          presupuesto={ presupuesto }
          appBar={this.appBar()}
        />
        <OneButton 
          title={ 'Presupuestacion' }
          text={ this.props.presupuestoReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Presupuestacion)