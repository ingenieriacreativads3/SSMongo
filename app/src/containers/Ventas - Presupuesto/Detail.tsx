import React from 'react';
import { connect } from 'react-redux'

import { Button  } from '@material-ui/core';

import * as dialogActions from './../../store/actions/dialog'
import * as presupuestoActions from './../../store/actions/presupuesto'

import { OneButton } from './../../components/Dialogs'
import { Detail as DetailExport } from './../../components/Detail'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'
import { Footer } from './../Footer'

function mapStateToProps(store: {
  presupuestoReducer: any,
}) {
  return {
    presupuestoReducer: store.presupuestoReducer,
  };
}

class Detail extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(presupuestoActions.getPresupuesto(this.props.match.params.id))
  }

  drawer() {
    return <Drawer {...this.props} />
  }

  appBar() {
    return <AppBar {...this.props} />
  }

  footer() {
    return <Footer {...this.props} />
  }

  actions(classes: any, presupuesto: any) {

    let esEnEspera: boolean = false

    if(presupuesto.estado === 'En espera') esEnEspera = true
    
    return <div>
      {
        esEnEspera ? <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={this.cancelar}
          >
            Cancelar Presupuesto
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={this.presupuestar}
          >
            Presupuestar
          </Button>
        </div> : null
      }
    </div>
  }

  aceptar = () => {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.presupuestoReducer.status !== 200) {
      this.props.dispatch(presupuestoActions.reintentar())
    } else {
      this.props.dispatch(presupuestoActions.setear())
      this.props.history.push('/ventas/presupuestos/lista')
    }

  }

  cancelar = () => {

    this.props.dispatch(presupuestoActions.cancelarPresupuesto(
      this.props.match.params.id,
      this.props.cookies.get('empresaId'),
    ))
    this.props.dispatch(dialogActions.openOneButton())

  }

  presupuestar = () => {
    this.props.history.push('/presupuestacion/' + this.props.match.params.id)
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
          company = this.props.presupuestoReducer.data.presupuesto.empresa_demandante
				}
			}
    }
    
    let empresa: string = 'nombreEmpresa'
		let importe: string = 'importe'
		let estado: string = 'estado'

    if(this.props.presupuestoReducer !== undefined) {
			if(this.props.presupuestoReducer.data !== undefined) {
				if(this.props.presupuestoReducer.data.pedido !== undefined && this.props.presupuestoReducer.data.pedido !== null) {
					if(this.props.presupuestoReducer.data.pedido.empresa_perteneciente !== undefined) {
						if(this.props.presupuestoReducer.data.pedido.empresa_perteneciente.nombre !== undefined) {
							empresa = this.props.presupuestoReducer.data.pedido.empresa_perteneciente.nombre
						}
					}
					if(this.props.presupuestoReducer.data.pedido.importe) {
						importe = this.props.presupuestoReducer.data.pedido.importe
					}
					if(this.props.presupuestoReducer.data.pedido.estado) {
						estado = this.props.presupuestoReducer.data.pedido.estado
					}
				}
			}
		}

    return(
      <div>
        <DetailExport
          title={'Mis ventas - Detalle de presupuesto'}
          subtitle1={'Datos del presupuesto'}
          subtitle2={'Item solicitado'}
          drawer={ this.drawer() }
          appBar={this.appBar()}
          footer={this.footer()}
          presupuesto={ presupuesto }
          pedido={ null }
          labelCompany={ 'Empresa demandante' }
          company={ company }
          actions={ (classes: any) => this.actions(classes, presupuesto) }
        />
        <OneButton 
          title={ 'Presupuesto' }
          text={ this.props.presupuestoReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)