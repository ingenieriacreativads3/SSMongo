import React from 'react';
import { connect } from 'react-redux'

import { OneButton } from './../../components/Dialogs'
import { Presupuestar as PresupuestarExport} from './../../components/Presupuesto'
import * as dialogActions from './../../store/actions/dialog'

import * as presupuestoActions from './../../store/actions/presupuesto'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as errorActions from './../../store/actions/error'
import store from './../../store/index'

function mapStateToProps(store: {
  itemReducer:any,
  presupuestoReducer: any,
  errorReducer:any,
}) {
  return {
    itemReducer:store.itemReducer,
    presupuestoReducer: store.presupuestoReducer,
    errorReducer: store.errorReducer,
  };
}

class Presupuestacion extends React.Component<{}, {
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
  formValid:boolean,
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
    },
  }
}> {

	props: any
	static propTypes: any
	static defaultProps: any
  private presupuestarRef: React.RefObject<HTMLFormElement>;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.presupuestarRef = React.createRef();
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getImporte = this.getImporte.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.cancelar = this.cancelar.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      formValid:true,
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
      },
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
    let state = store.getState();
    this.setState({ cantidad: e.target.value })
    this.props.dispatch(errorActions.editErrors(e.target.id))
    if(state.errorReducer.errors.length === 0)
    {
      this.setState({formValid:true});
    }
  }
  
  getImporte(e: any) {
    let state = store.getState();
    this.setState({ importe: e.target.value })
    this.props.dispatch(errorActions.editErrors(e.target.id))
    if(state.errorReducer.errors.length === 0)
    {
      this.setState({formValid:true});
    }
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }
  
  save() {
    if(this.validacion()){
      this.props.dispatch(presupuestoActions.presupuestar(
        this.state.presupuesto._id,
        this.state.item._id,
        this.state.cantidad,
        this.state.importe,
        this.state.comentario,
      ))
      this.props.dispatch(dialogActions.openOneButton())
    }
  }

  cancelar() {
    this.props.history.push('/ventas/presupuesto/' + this.props.match.params.id)
  }

  validacion=() => {
    debugger;
    let formIsValid = true;
    let errores=[];
    let ref: any = this.presupuestarRef.current

    for (let i = 0, element; element = ref[i]; i++) {

      if(!element.checkValidity()) {
        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
        this.setState({formValid:formIsValid})
      }
    }

    this.props.dispatch(errorActions.setError(errores)); 
    return formIsValid;
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
    return <Drawer { ...this.props } />
  }

  footer() {
    return <Footer { ...this.props } />
  }

  appBar() {
    return <AppBar { ...this.props } />
  }

  render(){

    let presupuesto: any = undefined

    if(
      this.props.presupuestoReducer.fetched &&
      this.props.presupuestoReducer.data !== undefined
    ) {
      presupuesto = this.props.presupuestoReducer.data.presupuesto
    }

    let errores: any[] = []
    errores = this.props.errorReducer.errors;

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
          errors={errores}
          formValid={ this.state.formValid }
          presupuestarRef={ this.presupuestarRef }
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