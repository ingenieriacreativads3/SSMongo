import React from 'react';
import { connect } from 'react-redux'

import { ValidarNuevoUsuario as Validacion } from './../../components/SolicitudValidacion'
import * as solicitudesActions from './../../store/actions/solicitudDeValidacion'
import * as empresaActions from './../../store/actions/empresa'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import {Drawer} from './../Drawer'
import Cookies from 'universal-cookie';
 
function mapStateToProps(store: {
  solicitudDeValidacionReducer: any,
  empresaReducer: any
}) {
  return {
    solicitudDeValidacionReducer: store.solicitudDeValidacionReducer,
    empresaReducer: store.empresaReducer
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies,
}, {
  rubros: {
    _id: string,
    nombreRubro: string,
    updated_at: string,
    created_at: string,
  }[]
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getRubros = this.getRubros.bind(this);
    this.state = {
      rubros: []
    };
  }

  componentWillMount() {
    this.props.dispatch(empresaActions.getEmpresaRubros())
  }

  getRubros(rubro: {
    _id: string,
    nombreRubro: string,
    updated_at: string,
    created_at: string,
  }) {

    let rubrosAux: {
      _id: string,
      nombreRubro: string,
      updated_at: string,
      created_at: string,
    }[] = this.state.rubros

    rubrosAux.push(rubro)

    this.setState({
      rubros: rubrosAux
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

  drawer() {
    return <Drawer 
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

    if(
      !this.props.solicitudDeValidacionReducer.fetched &&
      !this.props.solicitudDeValidacionReducer.fetching
    ) {

      this.props.dispatch(solicitudesActions.getById(this.props.match.params.id))

    }

    let title: string = 'Solicitud de Validación'
    let _id: string = ''
    let nombre: string = ''
    let cuit: string = ''
    
    if(
      this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones !== undefined
    ) {
      _id = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones._id
      if(
        this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa !== undefined
      ) {
        nombre = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.nombre
        cuit = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.cuit
      }
    }



    let listaRubros: {
      _id: string,
      nombreRubro: string,
      updated_at: string,
      created_at: string,
    }[] = [
      {
        _id: '',
        nombreRubro: '',
        updated_at: '',
        created_at: '',
      }
    ]

    if(
      this.props.empresaReducer.fetched &&
      this.props.empresaReducer.data !== undefined
    ) {
      listaRubros = this.props.empresaReducer.data.rubros
    }

    console.log(this.state.rubros)

    return(
      <div>
        <Validacion
          title={title}
          _id={_id}
          nombre={nombre}
          cuit={cuit}
          rubros={this.state.rubros}
          listaRubros={listaRubros}
          getRubros={this.getRubros}
          footer={this.footer()}
          appBar={this.appBar()}
          drawer={this.drawer()}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)