import React from 'react';
import { connect } from 'react-redux'

import { Button  } from '@material-ui/core';

import { OneButton } from './../../../components/Dialogs'
import { Detail as DetailExport } from './../../../components/Detail'
import * as requestActions from './../../../store/actions/request'
import * as dialogActions from './../../../store/actions/dialog'
import { Drawer } from './../../Drawer'
import {AppBar} from './../../AppBar'
import {Footer} from './../../Footer'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies:Cookies
  
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.aceptar = this.aceptar.bind(this);
    this.finalizar = this.finalizar.bind(this);
    this.state = {};
	}
	
	componentWillMount() {

		this.props.dispatch(requestActions.getRequest(this.props.match.params.id))

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
	
  actions(classes: any) {
    return <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={this.finalizar}
      >
        Finalizar Pedido
      </Button>
    </div>
  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.requestReducer.status !== 200) {
      this.props.dispatch(requestActions.reintentar())
    } else {
      this.props.dispatch(requestActions.setear())
      this.props.history.push('/compras/pedidos/lista')
    }

  }

  finalizar() {

    this.props.dispatch(requestActions.finalizarPedido(
      this.props.match.params.id,
      this.props.cookies.get('empresaId'),
    ))
    this.props.dispatch(dialogActions.openOneButton())

  }

  render(){

		let pedido: {
      "_id": string,
      "empresa_perteneciente_id": string,
      "empresa_demandante_id": string,
      "importe": string,
      "estado": string,
      "presupuesto_id": string,
      "updated_at": string,
      "created_at": string,
      "mensajes": [],
      "items": [
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
      ],
      "empresa_demandante": {
        "_id": string,
        "nombre": string,
        "cuit": string,
        "usuario": string,
        "clave": string,
        "email": string,
        "estado": string,
        "updated_at": string,
        "created_at": string,
      },
      "empresa_perteneciente": {
        "_id": string,
        "nombre": string,
        "cuit": string,
        "usuario": string,
        "clave": string,
        "email": string,
        "estado": string,
        "updated_at": string,
        "created_at": string,
      },
      "presupuesto": {
        "_id": string,
        "idEmpresaPerteneciente": string,
        "idEmpresaDemandante": string,
        "estado": string,
        "updated_at": string,
        "created_at": string,
        "importe": string,
        "items": [
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
        ],
        "mensajes": []
      }
    } = {
      "_id": '',
      "empresa_perteneciente_id": '',
      "empresa_demandante_id": '',
      "importe": '',
      "estado": '',
      "presupuesto_id": '',
      "updated_at": '',
      "created_at": '',
      "mensajes": [],
      "items": [
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
      ],
      "empresa_demandante": {
        "_id": '',
        "nombre": '',
        "cuit": '',
        "usuario": '',
        "clave": '',
        "email": '',
        "estado": '',
        "updated_at": '',
        "created_at": '',
      },
      "empresa_perteneciente": {
        "_id": '',
        "nombre": '',
        "cuit": '',
        "usuario": '',
        "clave": '',
        "email": '',
        "estado": '',
        "updated_at": '',
        "created_at": '',
      },
      "presupuesto": {
        "_id": '',
        "idEmpresaPerteneciente": '',
        "idEmpresaDemandante": '',
        "estado": '',
        "updated_at": '',
        "created_at": '',
        "importe": '',
        "items": [
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
        ],
        "mensajes": []
      }
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

    if(this.props.requestReducer !== undefined) {
			if(this.props.requestReducer.data !== undefined) {
				if(this.props.requestReducer.data.pedido !== undefined) {
					pedido = { ...this.props.requestReducer.data.pedido }
          company = this.props.requestReducer.data.pedido.empresa_perteneciente
				}
			}
		}

    return(
      <div>
        <DetailExport
          title={'Mis compras - Detalle de pedido'}
          subtitle1={'Datos del pedido'}
          subtitle2={'Item solicitado'}
					drawer={ this.drawer() }
					appBar={this.appBar()}
					footer={this.footer()}
          presupuesto={ null }
          pedido={ pedido }
					labelCompany={ 'Empresa demandada' }
					company={ company }
					actions={ (classes: any) => this.actions(classes) }
        />
        <OneButton 
          title={ 'Pedido' }
          text={ this.props.requestReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)