import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../../components/Dialogs'
import Link from '@material-ui/core/Link';

import { NuevoPresupuesto as PresupuestoNuevo} from './../../components/Presupuesto'
import * as dialogActions from './../../store/actions/dialog'

import * as presupuestoActions from './../../store/actions/presupuesto'
import * as unidadDeMedidaActions from './../../store/actions/unidadDeMedida'

function mapStateToProps(store: {
  presupuestoReducer: any,

}) {
  return {
    presupuestoReducer: store.presupuestoReducer,
   
  };
}

class NuevoPresupuesto extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
    idEmpresaPerteneciente: string,
    idEmpresaDemandante:string,
    idItem: string,
    cantidad:string,
	  comentario : string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      idEmpresaPerteneciente: '',
      idEmpresaDemandante:'',
      idItem: '',
      cantidad:'',
      comentario : '',

    };
  }

 

  

  getCantidadItem(e: any) {
    this.setState({ cantidad: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

  

  save() {

    this.props.dispatch(presupuestoActions.setPresupuesto(
      this.props.cookies.get('empresaId'),
      this.state.comentario,
      this.state.idEmpresaPerteneciente,
      this.state.idItem,
      this.state.cantidad,
      
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.itemReducer.status !== 200) {
      this.props.dispatch(presupuestoActions.reintentar())
    } else {
      this.props.dispatch(presupuestoActions.setear())
      this.props.history.push('/home/inicio')
    }

  }

  render(){

    return(
      <div>
        <PresupuestoNuevo 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
           save={ this.save }
        />
        <OneButton 
          title={ 'Nuevo Presupuesto' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NuevoPresupuesto)