import React from 'react';
import { connect } from 'react-redux'

import { ValidarNuevoUsuario as Validacion } from './../../components/SolicitudValidacion'
import * as solicitudesActions from './../../store/actions/solicitudDeValidacion'
import * as empresaActions from './../../store/actions/empresa'
import * as actividadEconomicaActions from './../../store/actions/actividadEconomica'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'
import { Drawer } from './../Drawer'
import Cookies from 'universal-cookie';
import Empresa from '../../components/Evaluacion/Empresa';
import { NO_VALIDADA, VALIDADA, NO_AUTENTICADA, AUTENTICADA } from './../../components/SolicitudValidacion'
import * as dialogActions from './../../store/actions/dialog'
import { OneButton } from './../../components/Dialogs'

 
function mapStateToProps(store: {
  solicitudDeValidacionReducer: any,
  empresaReducer: any,
  actividadEconomicaReducer: any
}) {
  return {
    solicitudDeValidacionReducer: store.solicitudDeValidacionReducer,
    empresaReducer: store.empresaReducer,
    actividadEconomicaReducer: store.actividadEconomicaReducer
  };
}

class Detail extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies,
}, {
  rubros: any[],
  grupos: any[],
  actividades: any[],
  listaGrupos: any[],
  listaActividades: any[],
}> {

  props: any
  static propTypes: any
  static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getRubros = this.getRubros.bind(this);
    this.state = {
      rubros: [],
      grupos: [],
      actividades: [],
      listaGrupos: [],
      listaActividades: []
    };
  }

  componentWillMount() {
    this.props.dispatch(empresaActions.getEmpresaRubros())
    this.props.dispatch(actividadEconomicaActions.getActividadesEconomicas())
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

  removeRubro = (rubro: string) => {

    let listaRubros: any[] = []

    if(
      this.props.actividadEconomicaReducer.fetched &&
      this.props.actividadEconomicaReducer.data !== undefined
    ) {
      listaRubros = this.props.actividadEconomicaReducer.data.actividad
    }

    let listAux: any[] = []
    let exist: boolean = false

    
    this.state.rubros.map((item: any) => {
      if(item.letra === rubro) {
        exist = true;
      }
      return exist;
    })

    if(exist) {
      this.state.rubros.map((item: any) => {
        if(item.letra !== rubro) {
          listAux.push(item);
        }
        return listAux;
      })
    } else {
      listAux = this.state.rubros
      listaRubros.map((item: {
        letra: string
      }) => {
        if(item.letra === rubro) {
          listAux.push(item)
        }
        return listAux;
      })
    }

    let gruposAux: any[] = []

    listAux.map((item: any) => {
      listaRubros.map((itemAux: any) => {
        if(item.nombre === itemAux.nombre) {
          gruposAux = gruposAux.concat(itemAux.items)
        }
        return gruposAux;
      })
      return gruposAux;
    })

    this.setState({
      rubros: listAux,
      listaGrupos: gruposAux
    })

  }

  removeGrupo = (grupo: string) => {

    

    let listaRubros: any[] = []

    if(
      this.props.actividadEconomicaReducer.fetched &&
      this.props.actividadEconomicaReducer.data !== undefined
    ) {
      listaRubros = this.props.actividadEconomicaReducer.data.actividad
    }

    let listGroupsAux: any[] = []

    listaRubros.map((aux: any) => {
      this.state.rubros.map((item: any) => {
        if(item.letra === aux.letra) {
          listGroupsAux = listGroupsAux.concat(aux.items)
        }
        return listGroupsAux;
      }) 
      return listGroupsAux;
    })

    let listAux: any[] = []
    let exist: boolean = false

    this.state.grupos.map((item: any) => {
      if(item.number === grupo) {
        exist = true
      }
      return exist;
    })

    if(exist) {
      this.state.grupos.map((item: any) => {
        if(item.number !== grupo) {
          listAux.push(item)
        }
        return listAux;
      })
    } else {
      listAux = this.state.grupos
      listGroupsAux.map((item: any) => {
        if(item.number === grupo) {
          listAux.push(item)
        }
        return listAux;
      })
    }

    let actividadesAux: any[] = []

    listAux.map((item: any) => {
      listGroupsAux.map((itemAux: any) => {
        if(item.number === itemAux.number) {
          actividadesAux = actividadesAux.concat(itemAux.items)
        }
        return actividadesAux;
      })
      return actividadesAux;
    })

    this.setState({
      grupos: listAux,
      listaActividades: actividadesAux
    })

  }

  removeActividad = (actividad: string) => {

    let listaRubros: any[] = []

    if(
      this.props.actividadEconomicaReducer.fetched &&
      this.props.actividadEconomicaReducer.data !== undefined
    ) {
      listaRubros = this.props.actividadEconomicaReducer.data.actividad
    }

    let listGroupsAux: any[] = []

    listaRubros.map((item: any) => {
      this.state.rubros.map((itemAux: any) => {
        if(item.letra === itemAux.letra) {
          listGroupsAux = listGroupsAux.concat(item.items)
        }
        return listGroupsAux;
      })
       return listGroupsAux;
    })

    let listActividadesAux: any[] = []

    listGroupsAux.map((item: any) => {
      this.state.grupos.map((itemAux: any) => {
        if(item.number === itemAux.number) {
          listActividadesAux = listActividadesAux.concat(item.items)
        }
        return listActividadesAux;
      })
      return listActividadesAux;
    })

    let listAux: any[] = []
    let exist: boolean = false

    this.state.actividades.map((item:any) => {
      if(item.number === actividad) {
        exist = true
      }
      return exist;
    })

    if(exist) {
      this.state.actividades.map((item: any) => {
        if(item.number !== actividad) {
          listAux.push(item)
        }
        return listAux;
      })
    } else {
      listAux = this.state.actividades
      listActividadesAux.map((item: any) => {
        if(item.number === actividad) {
          listAux.push(item)
        }
        return listAux;
      })
    }


    this.setState({
      actividades: listAux
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

  update = (idEmpresa: string, rubros: {}[], estado: string) => {

    if(estado ===  'Validada' ) this.props.dispatch(empresaActions.validar(idEmpresa))
    if(estado === NO_AUTENTICADA ) this.props.dispatch(empresaActions.autenticar(idEmpresa, false))
    if(estado === AUTENTICADA ) this.props.dispatch(empresaActions.autenticar(idEmpresa, true))

    this.props.dispatch(empresaActions.rubrosValidacion(
      idEmpresa,
      rubros
    ))

    this.props.dispatch(solicitudesActions.update(
      this.props.match.params.id,
      'Resuelta'
    ))

    this.props.dispatch(dialogActions.openOneButton())
  }

  aceptar = ( ) => {

    this.props.dispatch(solicitudesActions.resetear())
    this.props.dispatch(dialogActions.closeOneButton())
    this.props.history.push('/solicitud/validacion')

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
      this.props.actividadEconomicaReducer.fetched &&
      this.props.actividadEconomicaReducer.data !== undefined
    ) {
      listaRubros = this.props.actividadEconomicaReducer.data.actividad
    }

    let empresa = this.props?.solicitudDeValidacionReducer?.data?.solicitudesDeValidaciones?.empresa || ''

    return(
      <div>
        <Validacion
          update={ this.update }
          empresa={ empresa }
          title={ title }
          _id={ _id }
          nombre={ nombre }
          cuit={ cuit }
          rubros={ this.state.rubros }
          grupos={ this.state.grupos }
          actividades={ this.state.actividades }
          listaRubros={ listaRubros }
          listaGrupos={ this.state.listaGrupos }
          listaActividades={ this.state.listaActividades }
          getRubros={ this.getRubros }
          removeRubro={ this.removeRubro }
          removeGrupo={ this.removeGrupo }
          removeActividad={ this.removeActividad }
          footer={ this.footer() }
          appBar={ this.appBar() }
          drawer={ this.drawer() }
        />

        <OneButton 
          title={ 'Solicitud de Validacion' }
          text={ this.props.solicitudDeValidacionReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail)