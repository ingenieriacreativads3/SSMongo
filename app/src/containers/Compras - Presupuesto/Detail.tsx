import React from 'react';
import { connect } from 'react-redux'

import { Button  } from '@material-ui/core';

import { OneButton } from './../../components/Dialogs'
import { Detail as DetailExport } from './../../components/Detail'
import * as presupuestoActions from './../../store/actions/presupuesto'
import * as dialogActions from './../../store/actions/dialog'
import { Drawer } from './../Drawer'
import {AppBar} from './../AppBar'
import {Footer} from './../Footer'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  presupuestoReducer: any,
  login: any
}) {
  return {
    presupuestoReducer: store.presupuestoReducer,
    login: store.login
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.aceptar = this.aceptar.bind(this);
    this.cancelar = this.cancelar.bind(this);
    this.confirmar = this.confirmar.bind(this);
    this.renegociar = this.renegociar.bind(this);
    this.state = {};
  }

  componentWillMount() {

    this.props.dispatch(presupuestoActions.getPresupuesto(this.props.match.params.id))

  }

  drawer() {
    return <Drawer 
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

  footer() {
    return <Footer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  aceptar() {

    this.props.dispatch(presupuestoActions.getPresupuesto(this.props.match.params.id))
    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.presupuestoReducer.status !== 200) {
      this.props.dispatch(presupuestoActions.reintentar())
    } else {
      this.props.dispatch(presupuestoActions.setear())
      this.props.history.push('/compras/presupuestos/lista')
    }

  }

  cancelar() {

    this.props.dispatch(presupuestoActions.cancelarPresupuesto(
      this.props.match.params.id,
      this.props.cookies.get('empresaId'),
    ))
    this.props.dispatch(dialogActions.openOneButton())

  }

  confirmar() {
    
    this.props.dispatch(presupuestoActions.confirmarPresupuesto(
      this.props.match.params.id,
    ))
    this.props.dispatch(dialogActions.openOneButton())

  }

  renegociar() {
    
    this.props.history.push('/renegociacion/' + this.props.match.params.id)

  }

  cancelarPresupuestoButton = (classes: any) => {
    return <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      onClick={this.cancelar}
    >
      Cancelar Presupuesto
    </Button> 
  }

  renegociarPresupuestoButton = (classes: any) => {
    return <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      onClick={this.renegociar}
    >
      Renegociar presupuesto
    </Button>
  }

  confirmarPresupuestoButton = (classes: any) => {
    return <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      onClick={this.confirmar}
    >
      Confirmar presupuesto
    </Button>
  }

  actions(classes: any, presupuesto: any) {

    let esPresupuestado: boolean = false

    if(presupuesto.estado === 'Presupuestado') esPresupuestado = true

    return <div>
      {
        esPresupuestado ? <div>
          { this.cancelarPresupuestoButton(classes) }
          { this.renegociarPresupuestoButton(classes) }
          { this.confirmarPresupuestoButton(classes) }
        </div> : null
      }
    </div>
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
          "item": {
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
              }
          },
          "unidadDeMedida": {
            "_id": string,
            "nombre": string,
            "abreviatura": string,
            "updated_at": string,
            "created_at": string,
          },
          "cantidad": number
        }
      ]
    } = {
      _id: '',
      estado: '',
      updated_at: '',
      created_at: '',
      importe: 'Sin cotizar',
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
          "item": {
            "_id": '',
            "foto": [''],
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
              }
          },
          "unidadDeMedida": {
            "_id": '',
            "nombre": '',
            "abreviatura": '',
            "updated_at": '',
            "created_at": '',
          },
          "cantidad": 0
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
          company = this.props.presupuestoReducer.data.presupuesto.empresa_perteneciente
				}
			}
		}
    
    return(
      <div>
        <DetailExport
          title={ 'Mis compras - Detalle de presupuesto' }
          subtitle1={ 'Datos del presupuesto' }
          subtitle2={ 'Item solicitado' }
          drawer={ this.drawer() }
          appBar={this.appBar()}
          footer={this.footer()}
          presupuesto={ presupuesto }
          pedido={ null }
          labelCompany={ 'Empresa demandada' }
          company={ company }
          actions={ (classes: any) => this.actions(classes, presupuesto) }
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

export default connect(mapStateToProps)(Detail)