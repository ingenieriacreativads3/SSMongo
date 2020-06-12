import React from 'react';
import { connect } from 'react-redux'

import { ValidarNuevoUsuario as Validacion } from './../../components/SolicitudValidacion'
import * as solicitudesActions from './../../store/actions/solicitudDeValidacion'

function mapStateToProps(store: {
  solicitudDeValidacionReducer: any,
  login: any
}) {
  return {
    solicitudDeValidacionReducer: store.solicitudDeValidacionReducer,
    login: store.login
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any
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
      !this.props.solicitudDeValidacionReducer.fetched &&
      !this.props.solicitudDeValidacionReducer.fetching
    ) {

      this.props.dispatch(solicitudesActions.getById(this.props.match.params.id))
  

    }
    
    let title:string = ''
    let _id: string = ''
    let empresaNombre: string = ''
    let empresaCuit: string = ''
    
    if(
        this.props.solicitudDeValidacionReducer &&
        this.props.solicitudDeValidacionReducer.data &&
        this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones
      ) {
        if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones._id) _id = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones._id
        if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa) {
          if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.nombre) empresaNombre = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.nombre
          if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.cuit) empresaCuit = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.cuit
        }
      }
  

    return(
      <div>
        <Validacion
          title={'Solicitud de Validación'}
          _id={_id}
          empresaNombre={empresaNombre}
          empresaCuit={empresaCuit}
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
					
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)