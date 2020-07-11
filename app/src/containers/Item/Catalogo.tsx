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
      checked: true
    };
  }
  
  componentWillMount() {

    if(
      this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching &&
      this.props.itemReducer.data.item !== undefined
    ) {
      this.props.dispatch(itemActions.reintentar())
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
        title={'Catálogo'}
        columns={[
          { title: 'Nombre', field: 'item.nombre', type: 'string' },
          { title: 'Precio', field: 'item.precio', type: 'string' },
          { title: 'Precio Visible', field: 'item.mostrarPrecio', type: 'boolean' },
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

  action(row: {
    item: {
      _id: string
    }
  }) {
    this.props.history.push("/item/editar/" + row.item._id);
  }

  delete(row: {
    item: {
      _id: string
    }
  }) {
    this.props.history.push("/item/editar/" + row.item._id);
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

    let items: any[] = []

    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getCatalogo(this.props.cookies.get('empresaId')))
    }

    if(
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined
    ) {
      items = this.props.itemReducer.data.items
    }

    return(
      <div>
        {this.layout(this.state.checked, items)}
        {/* <TwoButton 
          title={ 'Nuevo Item' }
          text={ this.props.itemReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Catalog)