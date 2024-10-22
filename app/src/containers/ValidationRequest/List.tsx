import React from 'react';

import * as solicitudDeValidacionActions from './../../store/actions/solicitudDeValidacion'
import { connect } from 'react-redux'

import { List } from './../../components/List'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
  solicitudDeValidacionReducer: any,
}) {
  return {
    solicitudDeValidacionReducer: store.solicitudDeValidacionReducer,
  };
}

class ValidationRequest extends React.Component<{
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

  componentWillMount = () => {
    this.props.dispatch(solicitudDeValidacionActions.get())
  }

  action(item: {
    _id: string
  }) {
    this.props.dispatch(solicitudDeValidacionActions.resetear())
    this.props.history.push("/solicitud/nuevoUsuario/" + item._id);
  }

  drawer() {
    return <Drawer { ...this.props } />
  }
  
  footer() {
    return <Footer { ...this.props } />
  }

  appBar() {
    return <AppBar { ...this.props } />
  }

  render(){

    return(
      <div>
        <List
          history= { this.props.history }
          location= { this.props.location }
          match= { this.props.match }
          staticContext= { this.props.staticContext }
          title={'Solicitudes de Validación'}
          columns={[
            { title: 'Empresa', field: 'empresa.nombre', type: 'string' },
            { title: 'CUIT', field: 'empresa.cuit', type: 'string' },
            { title: 'Fecha actualización', field: 'updated_at', type: 'string' },
            { title: 'Fecha creación', field: 'created_at', type: 'string' },
            
            {
              title: 'Estado',
              field: 'estado',
              lookup: { 'Resuelta': 'Resuelta', 'No resuelta': 'No Resuelta' },
            },
            
          ]}
          data={ this.props.solicitudDeValidacionReducer?.data?.solicitudesDeValidaciones || [] }
          action={ this.action }
          drawer={ this.drawer() }
          footer={this.footer()}
          appBar={this.appBar()}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ValidationRequest)