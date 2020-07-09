import React from 'react';
import { connect } from 'react-redux'

import { EditarItem as ItemEditar} from './../../components/Item'
import * as itemActions from './../../store/actions/item'
import Link from '@material-ui/core/Link';
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'

function mapStateToProps(store: {
  itemReducer : any
  login: any
}) {
  return {
   
    itemReducer : store.itemReducer,
    login: store.login
  };
}

class Editar extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
 
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {};
  }

  componentWillMount() {
    if(
      this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching &&
      this.props.itemReducer.data.items !== undefined
    ) {
      this.props.dispatch(itemActions.reintentar())
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

  update() {

    

  }

  render(){



    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    }

    let item: {
      nombre: string,
      precio: string,
      foto: string,
      mostrarPrecio: boolean,
      descripcion: string,
      unidadDeMedidaId: string
    } = {
      nombre: '',
      precio: '',
      foto: '',
      mostrarPrecio: false,
      descripcion: '',
      unidadDeMedidaId: '',
    }
      
    if(this.props.itemReducer !== undefined) {
			if(this.props.itemReducer.data !== undefined) {
				if(this.props.itemReducer.data.item !== undefined) {
          if(this.props.itemReducer.data.item.nombre !== undefined) item.nombre = this.props.itemReducer.data.item.nombre
          if(this.props.itemReducer.data.item.precio !== undefined) item.precio = this.props.itemReducer.data.item.precio
          if(this.props.itemReducer.data.item.foto !== undefined) item.foto = this.props.itemReducer.data.item.foto
          if(this.props.itemReducer.data.item.mostrarPrecio !== undefined) item.mostrarPrecio = this.props.itemReducer.data.item.mostrarPrecio
          if(this.props.itemReducer.data.item.descrpcion !== undefined) item.descripcion = this.props.itemReducer.data.item.descrpcion
          if(this.props.itemReducer.data.item.unidad_de_medida) {
            if(this.props.itemReducer.data.item.unidad_de_medida._id) {
              item.unidadDeMedidaId = this.props.itemReducer.data.item.unidad_de_medida_id
            }
          }
				}
			}
    }

    return(
      <div>
        <ItemEditar 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          drawer={ this.drawer() }
          footer={ this.footer() }
          title={'Editar Item'}
          item={ item }
          update={ this.update() }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Editar)