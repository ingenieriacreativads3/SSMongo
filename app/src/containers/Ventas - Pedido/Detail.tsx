import React from 'react';
import { connect } from 'react-redux'

import { Detail as DetailExport } from './../../components/Detail'
import * as requestActions from './../../store/actions/request'

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

 

  render(){

		if(
      !this.props.requestReducer.fetched &&
      !this.props.requestReducer.fetching
    ) {

      this.props.dispatch(requestActions.getRequest(this.props.match.params.id))
  

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
          title={'Mis ventas - Detalle de pedido'}
          subtitle1={'Datos del pedido'}
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