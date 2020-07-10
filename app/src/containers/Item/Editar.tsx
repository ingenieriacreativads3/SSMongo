import React from 'react';
import { connect } from 'react-redux'

import { EditarItem as ItemEditar} from './../../components/Item'
import * as itemActions from './../../store/actions/item'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import Link from '@material-ui/core/Link';
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'

function mapStateToProps(store: {
  itemReducer: any,
  unidadDeMedidaReducer: any,
  fileReducer: any
  login: any
}) {
  return {
    itemReducer: store.itemReducer,
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
    fileReducer: store.fileReducer,
    login: store.login
  };
}

class Editar extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
 
}, {
  _id: string,
	nombre: string,
	precio: string,
	descripcion: string,
	idMagnitud: string,
	mostrarPrecio: boolean,
	foto: string[],
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.update = this.update.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getMagnitud = this.getMagnitud.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.state = {
      _id: '',
      nombre: '',
      precio: '',
      descripcion: '',
      idMagnitud: '',
      mostrarPrecio: false,
      foto: [],
    };
  }

  componentWillMount() {
    if(
      this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching &&
      this.props.itemReducer.data.items !== undefined
    ) {
      this.props.dispatch(itemActions.reintentar())
    }

    this.props.dispatch(itemActions.reintentar())
    if(
      !this.props.unidadDeMedidaReducer.fetched &&
      !this.props.unidadDeMedidaReducer.fetching
    ) {
      this.props.dispatch(unidadDeMedidaActions.getUnidadesDeMedida())
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

  update() {

    this.props.dispatch(itemActions.updateItem(
      this.state._id,
      this.state.nombre,
      this.state.precio,
      this.state.idMagnitud,
      this.state.descripcion,
      this.state.mostrarPrecio,
      this.state.foto
    ))

  }

  getNombre(nombre: string) {
    this.setState({ nombre: nombre })
  }

  getPrecio(precio: string) {
    this.setState({ precio: precio })
  }

  getDescripcion(descripcion: string) {
    this.setState({ descripcion: descripcion })
  }

  getMagnitud(idMagnitud: string) {
    this.setState({ idMagnitud: idMagnitud })
  }

  getMostrarPrecio(mostrarPrecio: boolean) {
    this.setState({ mostrarPrecio: mostrarPrecio })
  }

  getFoto(foto: string[]) {
    this.setState({ foto: foto })
  }

  render(){

    let unidadesDeMedida: any[] = [
      {
        '_id': '',
        'nombre': '',
        'abreviatura': '',
        'updated_at': '',
        'created_at': ''
      }
    ]

    if(
      this.props.unidadDeMedidaReducer.fetched &&
      this.props.unidadDeMedidaReducer.data !== undefined
    ) {
      unidadesDeMedida = this.props.unidadDeMedidaReducer.data.unidadesDeMedida
    }

    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    }

    let item: {
      nombre: string,
      precio: string,
      foto: string,
      mostrarPrecio: boolean,
      descripcion: string,
      unidadDeMedidaId: string,
      unidad_de_medida: any
    } = {
      nombre: '',
      precio: '',
      foto: '',
      mostrarPrecio: false,
      descripcion: '',
      unidadDeMedidaId: '',
      unidad_de_medida: ''
    }
      
    if(this.props.itemReducer !== undefined) {
			if(this.props.itemReducer.data !== undefined) {
				if(this.props.itemReducer.data.item !== undefined) {
          if(this.props.itemReducer.data.item.nombre !== undefined) item.nombre = this.props.itemReducer.data.item.nombre
          if(this.props.itemReducer.data.item.precio !== undefined) item.precio = this.props.itemReducer.data.item.precio
          if(this.props.itemReducer.data.item.foto !== undefined) item.foto = this.props.itemReducer.data.item.foto
          if(this.props.itemReducer.data.item.mostrarPrecio !== undefined) item.mostrarPrecio = this.props.itemReducer.data.item.mostrarPrecio
          if(this.props.itemReducer.data.item.descrpcion !== undefined) item.descripcion = this.props.itemReducer.data.item.descrpcion
          if(this.props.itemReducer.data.item.unidad_de_medida._id !== undefined) item.unidadDeMedidaId = this.props.itemReducer.data.item.unidad_de_medida_id
          if(this.props.itemReducer.data.item.unidad_de_medida) item.unidad_de_medida = this.props.itemReducer.data.item.unidad_de_medida
				}
			}
    }

    return(
      <div>
        <ItemEditar 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          drawer={ this.drawer() }
          footer={ this.footer() }
          title={'Editar Item'}
          item={ item }
          update={ this.update }
          unidadesDeMedida={ unidadesDeMedida }
          getNombre={ this.getNombre }
          getPrecio={ this.getPrecio }
          getDescripcion={ this.getDescripcion }
          getMagnitud={ this.getMagnitud }
          getMostrarPrecio={ this.getMostrarPrecio }
          getFoto={ this.getFoto }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Editar)