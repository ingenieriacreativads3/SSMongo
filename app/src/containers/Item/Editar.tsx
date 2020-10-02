import React from 'react';
import { connect } from 'react-redux'

import { EditarItem as ItemEditar} from './../../components/Item'
import { OneButton } from './../../components/Dialogs'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as itemActions from './../../store/actions/item'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import * as dialogActions from './../../store/actions/dialog'
import Cookies from 'universal-cookie';
import * as errorActions from './../../store/actions/error'
import store from './../../store/index'

function mapStateToProps(store: {
  itemReducer: any,
  unidadDeMedidaReducer: any,
  fileReducer: any
  login: any,
  errorReducer:any,
}) {
  return {
    itemReducer: store.itemReducer,
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
    fileReducer: store.fileReducer,
    login: store.login,
    errorReducer:store.errorReducer,
  };
}

class Editar extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  _id: string,
	nombre: string,
	precio: string,
	descripcion: string,
	idMagnitud: string,
	mostrarPrecio: boolean,
  foto: string[],
  formValid:boolean,
  unidadSeleccionada: boolean,

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
    this.update = this.update.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      _id: '',
      nombre: '',
      precio: '',
      descripcion: '',
      idMagnitud: '',
      mostrarPrecio: false,
      foto: [],
      formValid:true,
      unidadSeleccionada:true,
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

  componentDidUpdate() {

    // if(this.props.itemReducer.fetched) {
    //   this.props.dispatch(dialogActions.openOneButton())
    // } else {
    //   this.props.dispatch(dialogActions.closeOneButton())
    // }

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


  update(
    _id: string,
    nombre: string,
    precio: string,
    idMagnitud: string,
    descripcion: string,
    mostrarPrecio: boolean,
    foto: string[]
  ) {

    if(this.validacion()){

   
    this.props.dispatch(itemActions.updateItem(
      _id,
      nombre,
      precio,
      descripcion,
      idMagnitud,
      mostrarPrecio,
      foto
    ))

    this.props.dispatch(dialogActions.openOneButton())

    }
 }
  getNombre(nombre: any) {
    debugger;
    let state = store.getState();
    this.setState({ nombre:nombre })
    if(state.errorReducer.errors.length == 0 && this.state.unidadSeleccionada)
    {
      this.setState({formValid:true});
    }
    
  }

  getPrecio(precio: string) {
    let state = store.getState();
    this.setState({ precio: precio })
    if(state.errorReducer.errors.length == 0 && this.state.unidadSeleccionada)
    {
      this.setState({formValid:true});
    }
   
  }

  getDescripcion(descripcion: string) {
    this.setState({ descripcion: descripcion })
    
  }

  getMagnitud(idMagnitud: string) {
    let state = store.getState();
    this.setState({ idMagnitud: idMagnitud })
    this.setState({unidadSeleccionada:true});
    if(state.errorReducer.errors.length == 0 && this.state.unidadSeleccionada)
    {
      this.setState({formValid:true});
    }
  }

  getMostrarPrecio(mostrarPrecio: boolean) {
    this.setState({ mostrarPrecio: mostrarPrecio })
  }

  getFoto(foto: string[]) {
    this.setState({ foto: foto })
  }

  validacion=() => {
    let formIsValid = true;
    let errores=[];
    let elements:any = document.getElementById("formEditItem");

    for (let i = 0, element; element = elements[i++];) {

       if(!element.checkValidity())
      {

        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
      
        this.setState({formValid:formIsValid})
        
      }
      
    }

    if(this.state.idMagnitud == "")
    {
      this.setState({unidadSeleccionada:false});
      formIsValid = false;
      
      this.setState({formValid:formIsValid})
    }

     this.props.dispatch(errorActions.setError(errores)); 
     return formIsValid;
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
      _id: string,
      nombre: string,
      precio: string,
      foto: string,
      mostrarPrecio: boolean,
      descripcion: string,
      unidadDeMedidaId: string,
      unidad_de_medida: any
    } = {
      _id: '',
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
				if(this.props.itemReducer.data.item !== undefined && this.props.itemReducer.data.item !== null) {
          if(this.props.itemReducer.data.item._id !== undefined) item._id = this.props.itemReducer.data.item._id
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

    let errores: any[] = []
    errores = this.props.errorReducer.errors;

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
          unidadesDeMedida={ unidadesDeMedida }
          getNombre={ this.getNombre }
          getPrecio={ this.getPrecio }
          getDescripcion={ this.getDescripcion }
          getMagnitud={ this.getMagnitud }
          getMostrarPrecio={ this.getMostrarPrecio }
          getFoto={ this.getFoto }
          update={ this.update }
          appBar={this.appBar()}
          errors={errores}
          formValido = {this.state.formValid}
          unidadSeleccionada = {this.state.unidadSeleccionada}
        />
        <OneButton 
          title={ 'Editar Item' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Editar)