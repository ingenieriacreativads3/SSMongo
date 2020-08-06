import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { InitLayout as HomeComponent } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    login: store.login
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
    this.state = {};
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


  render(){

    let items: [
      {
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
      }
    ] = [
      {
        "_id": "5f0f155d3eff762f0335072b",
        "foto": [
            "images/5f0f155d64a4d.jpeg",
            "images/5f0f155d64a4d.jpeg",
            "images/5f0f155d64a4d.jpeg",
            "images/5f0f155d64a4d.jpeg"
        ],
        "nombre": "chan",
        "precio": "123",
        "descrpcion": "Este item no tiene descripciónasdasdasdasd",
        "mostrarPrecio": false,
        "unidad_de_medida_id": "5ecdb255db386b4e1b75e37c",
        "updated_at": "2020-08-04 23:39:29",
        "created_at": "2020-07-15 14:40:29",
        "catalogo_id": "5f0515a46e82d7332c28ceb4",
        "unidad_de_medida": {
            "_id": "5ecdb255db386b4e1b75e37c",
            "nombre": "Galeones2",
            "abreviatura": "GAL2",
            "updated_at": "2020-05-27 00:20:37",
            "created_at": "2020-05-27 00:20:37"
        }
      }
    ]
    // ] = [
    //   {
    //     "_id": '',
    //     "foto": [],
    //     "nombre": '',
    //     "precio": '',
    //     "descrpcion": '',
    //     "mostrarPrecio": false,
    //     "unidad_de_medida_id": '',
    //     "updated_at": '',
    //     "created_at": '',
    //     "catalogo_id": '',
    //     "unidad_de_medida": {
    //       "_id": '',
    //       "nombre": '',
    //       "abreviatura": '',
    //       "updated_at": '',
    //       "created_at": '',
    //     }
    //   }
    // ]

    // console.log(localStorage.getItem('empresaId'))

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
          appBar={this.appBar()}
          items={items}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home)