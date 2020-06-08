import React from 'react';
import { connect } from 'react-redux'
import * as itemActions from './../../store/actions/item'
import Link from '@material-ui/core/Link';
import { NuevoItem as ItemNuevo} from './../../components/Item'

function mapStateToProps(store: {

  login: any
}) {
  return {
    
    login: store.login
  };
}

class Nuevo extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  id: string,
	nombre: string,
  precio: string,
  idMagnitud : string,
	path: string,
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getMagnitud = this.getMagnitud.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.redirect = this.redirect.bind(this);
    this.guardar = this.guardar.bind(this);
    this.state = {
    nombre: '',
    precio: '',
    idMagnitud: '',
    path: '',
  };
}

getNombre(e: any) {

  this.setState({
    nombre: e.target.value
  })

}

getPrecio(e: any) {

  this.setState({
    precio: e.target.value
  })

}

getMagnitud(e: any) {

  this.setState({
    idMagnitud: e.target.value
  })

}

getFoto(e: any) {

  this.setState({
    path: e.target.value
  })

}

guardar() {

  this.props.dispatch(itemActions.setItem(
        this.state.nombre,
        this.state.precio,
        this.state.idMagnitud,
        this.state.path
    
  ))

}

redirect() {
  return <Link href="/home/catalogo" variant="body2" />
}




  render(){

    return(
      <div>
        <ItemNuevo 
         getNombre={ this.getNombre }
         getPrecio={ this.getPrecio }
         getMagnitud={ this.getMagnitud }
         getFoto={ this.getFoto }
         save={ this.guardar }/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Nuevo)