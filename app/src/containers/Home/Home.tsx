import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";

import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton } from '@material-ui/core';


import { InitLayout as HomeComponent } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

import * as itemActions from './../../store/actions/item'

function mapStateToProps(store: {
  requestReducer: any,
  login: any,
  itemReducer: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login,
    itemReducer: store.itemReducer
  };
}

class Home extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.action = this.action.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(itemActions.reintentar())
  }
  
  drawer() {
    return <InicioDrawer 
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

  appBar() {
    return <AppBar 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
      cookies={this.props.cookies}
    />
  }

  action(idItem: string) {
    console.log(this.props.cookies.get('empresaId'))
    console.log(idItem)
    this.props.dispatch(itemActions.reintentar())
    this.props.dispatch(itemActions.agregarBusqueda(
      this.props.cookies.get('empresaId'),
      idItem
    ))
  }

  render(){

    let items: any[] = []

    let itemsTrending: [
      {
        'item': {
          "_id": string,
          "foto": string[],
          "nombre": string,
          "precio": string,
          "descrpcion": string,
          "mostrarPrecio": boolean,
          "unidad_de_medida_id": string,
          "updated_at": string,
          "created_at": string,
          "catalogo_id": string,
          "unidad_de_medida": {
            "_id": string,
            "nombre": string,
            "abreviatura": string,
            "updated_at": string,
            "created_at": string,
          }
        },
        cantidad: number
      }
    ] = [
      {
        item: {
          "_id": '',
          "foto": [],
          "nombre": '',
          "precio": '',
          "descrpcion": '',
          "mostrarPrecio": false,
          "unidad_de_medida_id": '',
          "updated_at": '',
          "created_at": '',
          "catalogo_id": '',
          "unidad_de_medida": {
            "_id": '',
            "nombre": '',
            "abreviatura": '',
            "updated_at": '',
            "created_at": '',
          }
        },
        cantidad: 0
      }
    ]

    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getTrendingItems(this.props.cookies.get('empresaId'), 4))
    }

    if(
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined &&
      this.props.itemReducer.data.items !== undefined
    ) {
      itemsTrending = this.props.itemReducer.data.trendingItems
      items = this.props.itemReducer.data.items[0]
    }

    return(
      <div>
        <HomeComponent
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          cookies={this.props.cookies}
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={ this.appBar() }
          action={ this.action }
          items={ items }
          itemsTrending={ itemsTrending }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home)