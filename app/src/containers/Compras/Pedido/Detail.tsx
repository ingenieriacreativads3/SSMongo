import React from 'react';
import { connect } from 'react-redux'

import { Detail as DetailExport } from './../../../components/Detail'
import * as requestActions from './../../../store/actions/request'
import { Drawer } from './../../Drawer'



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
  staticContext?: any
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
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
          _id: string,
          foto: [],
          nombre: string,
          precio: string,
          descrpcion: string,
          mostrarPrecio: boolean,
          unidad_de_medida_id: string,
          updated_at: string,
          created_at: string,
          catalogo_id: string,
        }
      ]
    } = {
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
        }
      ]
    }

    if(this.props.presupuestoReducer !== undefined) {
			if(this.props.presupuestoReducer.data !== undefined) {
				if(this.props.presupuestoReducer.data.presupuesto !== undefined) {
					presupuesto = {
            ...this.props.presupuestoReducer.data.presupuesto
          }
				}
			}
		}

		let empresa: string = 'nombreEmpresa'
		let importe: string = 'importe'
		let estado: string = 'estado'
		let cantidad: string = 'cantidad'
		let item: {
			nombre: string,
			precio: string,
			unidad: string
		} = {
			nombre: 'nombreItem',
			precio: 'precioItem',
			unidad: 'unidadItem'
		}

		if(this.props.requestReducer !== undefined) {
			if(this.props.requestReducer.data !== undefined) {
				if(this.props.requestReducer.data.pedido !== undefined) {
					if(this.props.requestReducer.data.pedido.empresa_perteneciente !== undefined) {
						if(this.props.requestReducer.data.pedido.empresa_perteneciente.nombre !== undefined) {
							empresa = this.props.requestReducer.data.pedido.empresa_perteneciente.nombre
						}
					}
					if(this.props.requestReducer.data.pedido.importe) {
						importe = this.props.requestReducer.data.pedido.importe
					}
					if(this.props.requestReducer.data.pedido.estado) {
						estado = this.props.requestReducer.data.pedido.estado
					}

				}
			}
		}

    return(
      <div>
        <DetailExport
          title={'Mis compras - Detalle de pedido'}
          subtitle1={'Datos del pedido'}
          subtitle2={'Item solicitado'}
					empresa={empresa}
					importe={importe}
					estado={estado}
					cantidad={cantidad}
					item={item}
					drawer={ this.drawer() }
					presupuesto={ presupuesto }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)