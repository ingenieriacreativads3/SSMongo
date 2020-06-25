import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { MostrarCatalogo as Catalogo} from './../../components/Item'
import { List } from './../../components/List'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import * as itemActions from './../../store/actions/item'

function mapStateToProps(store: {
  itemReducer: any,
  login: any
}) {
  return {
    itemReducer: store.itemReducer,
    login: store.login
  };
}

class Catalog extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  checked: boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getChecked = this.getChecked.bind(this);
    this.layout = this.layout.bind(this);
    this.action = this.action.bind(this);
    this.drawer = this.drawer.bind(this);
    this.state = {
      checked: false
    };
  }
  
  componentWillMount() {

    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getCatalogo(this.props.cookies.get('empresaId')))
    }

  }

  getChecked(checked: boolean) {
    this.setState({
      checked: checked
    })
  }

  footer() {
    return <Footer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  layout(isTable: boolean, items: any[]) {

    let isCatalog: boolean = true

    if(isTable) {
      return <List
        history= { this.props.history }
        location= { this.props.location }
        match= { this.props.match }
        staticContext= { this.props.staticContext }
        title={'Items'}
        columns={[
          { title: 'Nombre', field: 'item.nombre', type: 'string' },
          { title: 'Precio', field: 'item.precio', type: 'string' },
          { title: 'Unidad', field: 'item.unidad_de_medida.nombre', type: 'string' },
          { title: 'Fecha creación', field: 'item.created_at', type: 'string' },
          { title: 'Fecha actualización', field: 'item.updated_at', type: 'string' },
        ]}
        data={ items }
        action={ this.action }
        drawer={ this.drawer() }
        checked={this.state.checked}
        getChecked={this.getChecked}
        isCatalog={isCatalog}
        footer={this.footer()}
      />
    } else {
      return <Catalogo 
        items={items}
        getChecked={this.getChecked}
        checked={this.state.checked}
        footer={this.footer()}
      />  
    }

  }

  action(item: {
    _id: string
  }) {
    this.props.history.push("/solicitud/nuevoUsuario/" + item._id);
    // this.props.dispatch(solicitudDeValidacionActions.resetear())
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

    let items: any[] = [
      {
        "item": {
          "_id": "5ecdb0f7db386b4e1b75e37a",
          "nombre": "itemC",
          "precio": "300",
          "foto": "path/to/foto",
          "unidad_de_medida_id": "5ecdb0bcdb386b4e1b75e378",
          "updated_at": "2020-05-27 00:14:47",
          "created_at": "2020-05-27 00:14:47",
          "catalogo_id": "5ecdb0f7db386b4e1b75e379",
          "unidad_de_medida": {
            "_id": "5ecdb0bcdb386b4e1b75e378",
            "nombre": "Unidad",
            "abreviatura": "U",
            "updated_at": "2020-05-27 00:13:48",
            "created_at": "2020-05-27 00:13:48"
          }
        }
      }
    ]

    if(
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined
    ) {
      items = this.props.itemReducer.data.items
    }

    return(
      <div>
        {this.layout(this.state.checked, items)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Catalog)
