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

class Editar extends React.Component<{}, {
  formValid:boolean,
  unidadSeleccionada: boolean,
  item: {
    _id: string,
    idMagnitud: string,
    nombre: string,
    precio: string,
    descripcion: string,
    mostrarPrecio: boolean,
    foto: string[],
  }
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
      formValid: true,
      unidadSeleccionada: true,
      item: {
        _id: '',
        idMagnitud: '',
        nombre: '',
        precio: '',
        descripcion: '',
        mostrarPrecio: false,
        foto: [],
      }
    };
  }

  componentWillMount() {

    this.props.dispatch(unidadDeMedidaActions.getUnidadesDeMedida())
    // this.props.dispatch(itemActions.reintentar())
    // this.props.dispatch(itemActions.getItem(this.props.match.params.id))

  }

  // componentDidUpdate() {
  //   console.log(this.props.itemReducer.data)
  //   if(
  //     this.props.itemReducer.fetched &&
  //     !this.props.itemReducer.fetching &&
  //     this.state.item._id === ''
  //     ) {
  //     console.log('entra')
  //     this.setState({
  //       item: this.props.itemReducer?.data?.item || {}
  //     })
  //   }
  // }

  drawer() {
    return <Drawer { ...this.props } />
  }

  footer() {
    return <Footer { ...this.props } />
  }

  appBar() {
    return <AppBar { ...this.props } />
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
    let state = store.getState();
    this.setState({
      item: {
        ...this.state.item,
        nombre
      }
    })

    if(state.errorReducer.errors.length === 0 && this.state.unidadSeleccionada) {
      this.setState({formValid:true});
    }
    
  }

  getPrecio(precio: string) {
    let state = store.getState();
    this.setState({
      item: {
        ...this.state.item,
        precio
      }
    })
    if(state.errorReducer.errors.length === 0 && this.state.unidadSeleccionada) {
      this.setState({formValid:true});
    }
   
  }

  getDescripcion(descripcion: string) {
    this.setState({
      item: {
        ...this.state.item,
        descripcion
      }
    })
  }

  getMagnitud(idMagnitud: string) {
    let state = store.getState();
    this.setState({
      item: {
        ...this.state.item,
        idMagnitud
      }
    })
    this.setState({unidadSeleccionada:true});
    if(state.errorReducer.errors.length === 0 && this.state.unidadSeleccionada) {
      this.setState({formValid:true});
    }
  }

  getMostrarPrecio(mostrarPrecio: boolean) {
    this.setState({
      item: {
        ...this.state.item,
        mostrarPrecio
      }
    })
  }

  getFoto(foto: string[]) {
    this.setState({
      item: {
        ...this.state.item,
        foto
      }
    })
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

    if(this.state.item.idMagnitud === "")
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
          item={ this.state.item }
          unidadesDeMedida={ unidadesDeMedida }
          getNombre={ this.getNombre }
          getPrecio={ this.getPrecio }
          getDescripcion={ this.getDescripcion }
          getMagnitud={ this.getMagnitud }
          getMostrarPrecio={ this.getMostrarPrecio }
          getFoto={ this.getFoto }
          update={ this.update }
          appBar={this.appBar()}
          
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