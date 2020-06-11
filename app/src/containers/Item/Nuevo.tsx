import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import Link from '@material-ui/core/Link';

import { NuevoItem as ItemNuevo} from './../../components/Item'
import { OneButton } from './../../components/Dialogs'

import * as itemActions from './../../store/actions/item'
import * as dialogActions from './../../store/actions/dialog'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'

function mapStateToProps(store: {
  itemReducer: any,
  unidadDeMedidaReducer: any
}) {
  return {
    itemReducer: store.itemReducer,
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
  };
}

class Nuevo extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  id: string,
	nombre: string,
  precio: string,
  idMagnitud : string,
  path: string,
  caracteristicas: string,
  descripcion: string,
  displayPrice: boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getMagnitud = this.getMagnitud.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      id: '',
      nombre: '',
      precio: '',
      idMagnitud: '',
      path: '',
      caracteristicas: '',
      descripcion: '',
      displayPrice: false
    };
  }

  componentWillMount() {

    if(
      !this.props.unidadDeMedidaReducer.fetched &&
      !this.props.unidadDeMedidaReducer.fetching
    ) {
      this.props.dispatch(unidadDeMedidaActions.getUnidadesDeMedida())
    }

  }

  componentDidUpdate() {

    if(this.props.itemReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

  }

  getNombre(e: any) {
    this.setState({ nombre: e.target.value })
  }

  getPrecio(e: any) {
    this.setState({ precio: e.target.value })
  }

  getMagnitud(e: any) {
    this.setState({ idMagnitud: e.target.value })
  }

  getCaracteristicas(e: any) {
    this.setState({ caracteristicas: e.target.value })
  }

  getDescripcion(e: any) {
    this.setState({ descripcion: e.target.value })
  }

  getMostrarPrecio(display: boolean) {
    this.setState({ displayPrice: display })
  }

  getFoto(image: any) {
    console.log(image)
    // this.setState({ path: path })
  }

  save() {

    this.props.dispatch(itemActions.setItem(
      this.props.cookies.get('empresaId'),
      this.state.nombre,
      this.state.precio,
      '5ecdb0bcdb386b4e1b75e378',
      'path/to/imagen/'
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.itemReducer.status !== 200) {
      this.props.dispatch(itemActions.reintentar())
    } else {
      this.props.dispatch(itemActions.setear())
      this.props.history.push('/home/catalogo')
    }

  }

  render(){

    let unidadesDeMedida: any[] = [
      {
        "_id": "5ecdb0bcdb386b4e1b75e378",
        "nombre": "fruta1",
        "abreviatura": "U",
        "updated_at": "2020-05-27 00:13:48",
        "created_at": "2020-05-27 00:13:48"
      }
    ]

    if(
      this.props.unidadDeMedidaReducer.fetched &&
      this.props.unidadDeMedidaReducer.data !== undefined
    ) {
      unidadesDeMedida = this.props.unidadDeMedidaReducer.data
    }

    return(
      <div>
        <ItemNuevo 
          getNombre={ this.getNombre }
          getPrecio={ this.getPrecio }
          getMagnitud={ this.getMagnitud }
          getCaracteristicas={ this.getCaracteristicas }
          getDescripcion={ this.getDescripcion }
          getMostrarPrecio={ this.getMostrarPrecio }
          getFoto={ this.getFoto }
          save={ this.save }
          unidadesDeMedida={unidadesDeMedida}
        />
        <OneButton 
          title={ 'Nuevo Item' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Nuevo)