import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../components/Dialogs'
import Link from '@material-ui/core/Link';

import { NuevoPresupuesto as PresupuestoNuevo} from './../components/Presupuesto'
import * as dialogActions from './../store/actions/dialog'

import * as presupuestoActions from './../store/actions/presupuesto'
import * as unidadDeMedidaActions from './../store/actions/unidadDeMedida'

function mapStateToProps(store: {
  presupuestoReducer: any,
  unidadDeMedidaReducer: any
}) {
  return {
    presupuestoReducer: store.presupuestoReducer,
    unidadDeMedidaReducer: store.unidadDeMedidaReducer,
  };
}

class NuevoPresupuesto extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
    empresaPerteneciente: {
		_id: string,
	},
	empresaDemandante: {
		_id: string,
	},
    items: {
			_id: string,
			cantidad: string,
			
		},
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
        empresaPerteneciente: {
            _id: '',
        },
        empresaDemandante: {
            _id: '',
        },
        items: {
                _id: '',
                cantidad: '',
                
            },
        comentario : '',
    };
  }

 

  

  getCantidadItem(e: any) {
    //this.setState({ items.cantidad: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

  

  save() {

    this.props.dispatch(presupuestoActions.setPresupuesto(
      this.props.cookies.get('empresaId'),
      this.state.comentario,
      this.state.items.cantidad,
      '5ecdb0bcdb386b4e1b75e378',
      'path/to/imagen/'
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
        //   getCantidadItem={ this.getCantidadItem }
        //   getComentario={ this.getComentario }
        //   save={ this.save }
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