import React from 'react';
import { connect } from 'react-redux'

import { ValidarNuevoUsuario as Validacion } from './../../components/SolicitudValidacion'
import * as solicitudesActions from './../../store/actions/solicitudDeValidacion'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import {Drawer} from './../Drawer'
 
function mapStateToProps(store: {
  solicitudDeValidacionReducer: any,
}) {
  return {
    solicitudDeValidacionReducer: store.solicitudDeValidacionReducer,
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any
}, {
  rubros: string[]
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

  getRubros(rubros: string[]) {

    this.setState({
      rubros: rubros
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
    />
  }

  render(){

    console.log(this.props.solicitudDeValidacionReducer)

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



    let listaRubros: string[] = [
      'Metalurgica',
      'Panaderia',
      'Desarrollador de Software',
      'Etc'
    ]

    
  

    return(
      <div>
        <Validacion
          title={title}
          _id={_id}
          nombre={nombre}
          cuit={cuit}
          rubros={this.props.rubros}
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