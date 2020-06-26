import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { OneButton } from './../../components/Dialogs'
import Link from '@material-ui/core/Link';

import { Renegociar as RenegociarExport} from './../../components/Presupuesto'
import * as dialogActions from './../../store/actions/dialog'

import * as presupuestoActions from './../../store/actions/presupuesto'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'


function mapStateToProps(store: {
  itemReducer:any,
  presupuestoReducer: any,

}) {
  return {
    itemReducer: store.itemReducer,
    presupuestoReducer: store.presupuestoReducer,
   
  };
}

class Renegociacion extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  
}, {
    idPresupuesto: string,
    idEmpresaReoferente:string,
    idItem: string,
    cantidad:string,
    precioSugerido:string,
	comentario : string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getCantidadItem = this.getCantidadItem.bind(this);
    this.getPrecioSugerido = this.getPrecioSugerido.bind(this);
    this.getComentario = this.getComentario.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      idPresupuesto: '',
      idItem: '',
      cantidad:'',
      comentario : '',
      precioSugerido: '',
      idEmpresaReoferente:'',
    };
  }

 

  

  getCantidadItem(e: any) {
    this.setState({ cantidad: e.target.value })
  }

  getComentario(e: any) {
    this.setState({ comentario: e.target.value })
  }

    getPrecioSugerido(e: any) {
        this.setState({ precioSugerido: e.target.value })
    }

  

  save() {

    this.props.dispatch(presupuestoActions.Renegociar(
      //this.props.cookies.get('empresaId'),
      this.state.comentario,
      this.state.idPresupuesto,
      this.state.idItem,
      this.state.cantidad,
      this.state.precioSugerido,
      this.state.idEmpresaReoferente,
      
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

  drawer() {
    return <Drawer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
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

  render(){

    return(
      <div>
        <RenegociarExport 
          getCantidadItem={ this.getCantidadItem }
          getComentario={ this.getComentario }
          getPrecioSugerido = {this.getPrecioSugerido}
           save={ this.save }
           drawer={this.drawer()}
           footer={this.footer()}
        />
        <OneButton 
          title={ 'Renegociacion' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Renegociacion)