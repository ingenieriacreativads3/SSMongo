import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { Drawer } from './../Drawer'
import { NuevaUnidadMedida as NuevaSolicitudUnidad} from './../../components/UnidadMedida'
import { OneButton } from './../../components/Dialogs'

import * as dialogActions from './../../store/actions/dialog'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as errorActions from './../../store/actions/error'
import store from './../../store/index'


function mapStateToProps(store: {
 
  unidadDeMedidaReducer: any,
  errorReducer:any,
 
}) {
  return {
    
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
    errorReducer: store.errorReducer

  };
}

class NuevaSolicitud extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
	unidad: string,
  simbolo : string,
  formValid:boolean,
}> {

	props: any
	static propTypes: any
	static defaultProps: any
  public unidadMedidaNuevoRef: React.RefObject<HTMLFormElement>;
  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.unidadMedidaNuevoRef = React.createRef();
    this.getUnidad = this.getUnidad.bind(this);
    this.getSimbolo = this.getSimbolo.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      unidad: '',
      simbolo: '',
      formValid:true,
    };
  }

  componentDidUpdate() {

    if(this.props.unidadDeMedidaReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

  }

  getSimbolo(e: any) {
    let state = store.getState();
    this.setState({ simbolo: e.target.value })
    this.props.dispatch(errorActions.editErrors(e.target.id))
      if(state.errorReducer.errors.length === 0)
      {
        this.setState({formValid:true});
      }
  }

  getUnidad(e: any) {
    let state = store.getState();
    this.setState({ unidad: e.target.value })
    this.props.dispatch(errorActions.editErrors(e.target.id))
    if(state.errorReducer.errors.length === 0)
    {
      this.setState({formValid:true});
    }

  }

  validacion=() => {
    let formIsValid = true;
    let errores=[];
    //let elements:any = document.getElementById("formUnidadMedidaNuevo");
    
    let ref: any = this.unidadMedidaNuevoRef.current
    
    if(ref!== null){
      for (let i = 0, element; element = ref[i]; i++) {

       if(!element.checkValidity())
      {

        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
        this.setState({formValid:formIsValid})
      
        
      }
      
    }
    }
    

   
     this.props.dispatch(errorActions.setError(errores)); 
     return formIsValid;
  }

  save() {

    if(this.validacion()){
      this.props.dispatch(unidadDeMedidaActions.setSolicitud(
      this.props.cookies.get('empresaId'),
      this.state.unidad,
      this.state.simbolo
    ))
  }
    

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.unidadDeMedidaReducer.status !== 200) {
      this.props.dispatch(unidadDeMedidaActions.reintentar())
    } else {
      this.props.dispatch(unidadDeMedidaActions.setear())
      this.props.history.push('/item/nuevo')
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
    let errores: any[] = []
    errores = this.props.errorReducer.errors;

    return(
      <div>
        <NuevaSolicitudUnidad 
          getUnidad={ this.getUnidad }
          getSimbolo={ this.getSimbolo }
          save={ this.save }
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={this.appBar()}
          errors={errores}
          formValid={this.state.formValid}
          refNuevoUnidad={this.unidadMedidaNuevoRef}
        />
        <OneButton 
          title={ 'Solicitud Unidad de Medida' }
          text={ this.props.unidadDeMedidaReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NuevaSolicitud)