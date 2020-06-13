import React from 'react';
import { connect } from 'react-redux'

import { Detail as DetailExport } from './../../components/Detail'
import * as presupuestoActions from './../../store/actions/presupuesto'

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

 
  render(){

		if(
      !this.props.presupuestoReducer.fetched &&
      !this.props.presupuestoReducer.fetching
    ) {

      this.props.dispatch(presupuestoActions.getPresupuesto(this.props.match.params.id))

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
    
    if(this.props.presupuestoReducer !== undefined) {
			if(this.props.presupuestoReducer.data !== undefined) {
				if(this.props.presupuestoReducer.data.pedido !== undefined) {
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
          title={'Mis compras - Detalle de presupuesto'}
          subtitle1={'Datos del presupuesto'}
          subtitle2={'Item solicitado'}
          empresa={empresa}
          importe={importe}
          estado={estado}
          cantidad={cantidad}
          item={item}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)