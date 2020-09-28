import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { Drawer } from './../Drawer'
import Link from '@material-ui/core/Link';

import { NuevoItem as ItemNuevo} from './../../components/Item'
import { OneButton } from './../../components/Dialogs'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as itemActions from './../../store/actions/item'
import * as fileActions from './../../store/actions/file'
import * as dialogActions from './../../store/actions/dialog'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import * as errorActions from './../../store/actions/error'
import store from './../../store/index'


function mapStateToProps(store: {
  itemReducer: any,
  unidadDeMedidaReducer: any,
  fileReducer: any,
  errorReducer:any,

}) {
  return {
    itemReducer: store.itemReducer,
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
    fileReducer: store.fileReducer,
    errorReducer: store.errorReducer
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
  displayPrice: boolean,
  photo: File[],
  formValid:boolean,
  unidadSeleccionada: boolean,
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
      displayPrice: false,
      photo: [],
      formValid:true,
      unidadSeleccionada:true,
    };
  }

  componentWillMount() {

    this.props.dispatch(itemActions.reintentar())
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
    let state = store.getState();
    this.setState({ nombre: e.target.value }) 
     this.props.dispatch(errorActions.editErrors(e.target.id))
      if(state.errorReducer.errors.length == 0 && this.state.unidadSeleccionada)
      {
        this.setState({formValid:true});
      }
     
  }

  getPrecio(e: any) {
    let state = store.getState();
    this.setState({ precio: e.target.value })
    this.props.dispatch(errorActions.editErrors(e.target.id))
    if(state.errorReducer.errors.length == 0 && this.state.unidadSeleccionada)
    {
      this.setState({formValid:true});
    }
   
  }

  getMagnitud(e: any) {
    let state = store.getState();
    this.setState({ idMagnitud: e.target.value })
    this.setState({unidadSeleccionada:true});
    if(state.errorReducer.errors.length == 0 && this.state.unidadSeleccionada)
    {
      this.setState({formValid:true});
    }
    
  }

  getCaracteristicas(e: any) {
    this.setState({ caracteristicas: e.target.value })
  }

  getDescripcion(e: any) {
    this.setState({ descripcion: e.target.value })
  }

  getMostrarPrecio(display: any) {
    this.setState({ displayPrice: display })
  }

  getFoto(e: any) {

    let files: File[] = []

    for (var i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files[i])
    }

    files.map((file: File) => {
      this.props.dispatch(fileActions.upload(file))
    })

    this.setState({ photo: files })
  }

  validacion=() => {
    let formIsValid = true;
    let errores=[];
    let elements:any = document.getElementById("formItem");

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

  save() {
    if(this.validacion()){
       this.props.dispatch(itemActions.setItem(
      this.props.cookies.get('empresaId'),
      this.state.nombre,
      this.state.precio,
      this.state.idMagnitud,
      this.state.descripcion,
      this.state.displayPrice,
      this.props.fileReducer.data.foto
    ))
  }
   

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
    console.log(this.props.errorReducer.errors);

    let errores: any[] = []

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
     
   
      errores = this.props.errorReducer.errors;
    

    let pathImage: string = ''

    if(
      this.props.fileReducer.fetched &&
      this.props.fileReducer.data !== undefined
    ) {
      pathImage = 'http://localhost:8000/' + this.props.fileReducer.data.foto[0]
    }

    return(
      console.log(errores),
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
          unidadesDeMedida={ unidadesDeMedida }
          drawer={ this.drawer() }
          footer={ this.footer() }
          pathImage={ pathImage }
          appBar={this.appBar()}
          errors={errores}
          formValido = {this.state.formValid}
          unidadSeleccionada = {this.state.unidadSeleccionada}
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