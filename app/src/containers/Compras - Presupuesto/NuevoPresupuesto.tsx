import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../../components/Dialogs'


import { NuevoPresupuesto as PresupuestoNuevo} from './../../components/Presupuesto'
import * as dialogActions from './../../store/actions/dialog'

import * as presupuestoActions from './../../store/actions/presupuesto'
import * as empresaActions from './../../store/actions/empresa'
import * as itemActions from './../../store/actions/item'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as errorActions from './../../store/actions/error'
import store from './../../store/index'

function mapStateToProps(store: {
  itemReducer:any,
  empresaReducer: any,
  presupuestoReducer: any,
  errorReducer:any,
}) {
  return {
    itemReducer: store.itemReducer,
    empresaReducer: store.empresaReducer,
    presupuestoReducer: store.presupuestoReducer,
    errorReducer: store.errorReducer
  };
}

class NuevoPresupuesto extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
    formValid:boolean,
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
  private presupuestoNuevoRef: React.RefObject<HTMLFormElement>;
  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.presupuestoNuevoRef = React.createRef();
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      formValid:true,
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

  componentWillMount() {

    this.props.dispatch(presupuestoActions.reintentar())
    this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    this.props.dispatch(empresaActions.getEmpresa(this.props.cookies.get('empresaId')))

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
    let state = store.getState();
    this.setState({ cantidad: e.target.value })
    this.props.dispatch(errorActions.editErrors(e.target.id))
      if(state.errorReducer.errors.length === 0)
      {
        this.setState({formValid:true});
      }
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

  validacion=() => {
    let formIsValid = true;
    let errores=[];
    //let elements:any = document.getElementById("formNuevoPresupuesto");
    let ref: any = this.presupuestoNuevoRef.current
    for (let i = 0, element; element = ref[i]; i++) {

       if(!element.checkValidity())
      {

        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
        this.setState({formValid:formIsValid})
      
        
      }
      
    }

   
     this.props.dispatch(errorActions.setError(errores)); 
     return formIsValid;
  }

  save(idEmpresaPerteneciente: string, idItem: string) {
    if(this.validacion()){
       this.props.dispatch(presupuestoActions.setPresupuesto(
      idEmpresaPerteneciente,
      this.props.cookies.get('empresaId'),
      idItem,
      this.state.cantidad,
      this.state.comentario,
    ))

    }
   
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
      cookies={this.props.cookies}
    />
  }

  // 602adc0fb9481716c719eb23
  // 602adc0fb9481716c719eb23
  
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
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined
    ) {
      item = this.props.itemReducer.data.item
    }

    if(this.props.empresaReducer.perfil) {
      empresa = this.props.empresaReducer.data.empresa
    }

    let errores: any[] = []
    errores = this.props.errorReducer.errors;

    return(
      <div>
        <PresupuestoNuevo 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
          save={ this.save }
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={ this.appBar() }
          item={item}
          empresa={empresa}
          errors={errores}
          formValido = {this.state.formValid}
          presupuestoNuevoRef={this.presupuestoNuevoRef}
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