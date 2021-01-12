import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { VerEstadisticaActividad as ResumenActividad } from './../../components/Estadisticas'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

import * as evaluacionActions from './../../store/actions/evaluacion'

function mapStateToProps(store: {
  login: any,
  evaluacionReducer: any
}) {
  return {
    login: store.login,
    evaluacionReducer: store.evaluacionReducer,
  };
}

class EstadisticaActividad extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }

  componentWillMount() {
    let empresaId: string = new Cookies().get('empresaId')
    if(empresaId !== undefined) {
      this.props.dispatch(evaluacionActions.getResumen(empresaId))
    }
  }
  
  drawer() {
    return <Drawer { ...this.props }/>
  }

  footer() {
    return <Footer { ...this.props }/>
  }

  appBar() {
    return <AppBar { ...this.props } />
  }

  render(){

    let resumen: any = {
      'cantidadEstadosPedidos': {
        'Cancelado': 0,
        'En espera': 0,
        'Enviado': 0,
        'Finalizado': 0,
      },
      'cantidadEstadosPresupuestos': {
        'Cancelado': 0,
        'Confirmado': 0,
        'En espera': 0,
        'Presupuestado': 0,
      },
      'pedidosTotales': 0,
      'presupuestosTotales': 0,
    }

    if(this.props.evaluacionReducer.fetched) {
      resumen = this.props.evaluacionReducer.data
    }

    return(
      <div>
        <ResumenActividad
          { ...this.props }
          drawer={ this.drawer() }
          footer={ this.footer() } 
          appBar={ this.appBar() }
          resumen={ resumen }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(EstadisticaActividad)