import React from 'react';
import { connect } from 'react-redux'

import { EditarItem as ItemEditar} from './../../components/Item'
import * as itemActions from './../../store/actions/item'
import Link from '@material-ui/core/Link';

function mapStateToProps(store: {
  itemReducer : any
  login: any
}) {
  return {
   
    item : store.itemReducer,
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
    this.state = {};
}


  render(){

    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
    
    this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    }

  
		let	nombre: string = 'nombre'
		let	precio: string = 'precio'
    let unidad: string = 'unidad'
      
    if(this.props.itemReducer !== undefined) {
			if(this.props.itemReducer.data !== undefined) {
				if(this.props.itemReducer.data.item !== undefined) {
					if(this.props.itemReducer.data.item.nombre !== undefined) {
						if(this.props.itemReducer.data.item.precio!== undefined) {
              if(this.props.itemReducer.data.item.idMagnitud!== undefined) {
							nombre = this.props.itemReducer.data.item.nombre
						}
					}
					if(this.props.itemReducer.data.item.precio) {
						precio = this.props.itemReducer.data.item.precio
					}
					if(this.props.itemReducer.data.item.idMagnitud) {
						unidad = this.props.itemReducer.data.item.idMagnitud
					}

				}
			}
    }
  }
  
    
    

    return(
      <div>
        <ItemEditar  
         title={'Editar Item'}
         nombre={ nombre }
         precio={ precio }
         unidad={ unidad }
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Editar)