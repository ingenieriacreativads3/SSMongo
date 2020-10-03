import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid, Divider, TextField, Card, Box, Typography,Chip, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, Checkbox, CardActions, ListItemText} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux'
import MenuLateral from '../Drawer';

import * as SolicitudDeValidacionActions from './../../store/actions/solicitudDeValidacion'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function mapStateToProps(store: {
  solicitudDeValidacionReducer: {}
}) {
  return {
    solicitudDeValidacion: store.solicitudDeValidacionReducer
  };
}

class Validacion extends React.Component <{
  classes: any,
  title:string,
  _id: string,
  nombre: string,
  cuit: string,
  rubros: {
    _id: string,
    nombreRubro: string,
    updated_at: string,
    created_at: string,
  }[],
  listaRubros: any[],
  listaGrupos: any[],
  listaActividades: any[],
  getRubros: any,
  removeRubro: any,
  removeGrupo: any,
  removeActividad: any,
},  {
  rubros: any[]
}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      // personName: [],
      // solicitudDeValidacion: {
      //   _id: '',
      //   empresa: {
      //     nombre: '',
      //     cuit: ''
      //   }
      // }
      rubros: []
    };
  }

  // componentWillMount() {
  //   this.props.dispatch(SolicitudDeValidacionActions.getById(this.props.match.params.id))
  // }

  handleChange(e: any) {

    let rubroSeleccionado: string = ''

    e.target.value.map((value: any) => {
      if(value.nombre === undefined) {
        rubroSeleccionado = value
      }
    })

    let rubroAux: {
      letra: string,
      nombre: string,
    } = {
      letra: '',
      nombre: '',
    }

    this.props.listaRubros.map((rubro: {
      letra: string,
      nombre: string,
    }) => {
      if(rubroSeleccionado === rubro.nombre) {
        rubroAux = rubro
      }
    })

    let listAux = this.state.rubros
    listAux.push(rubroAux)

    this.setState({
      rubros: listAux
    })

    this.props.getRubros(rubroAux)
  };

  onClickRubro = (rubro: string) => {

    this.props.removeRubro(rubro)

  }

  onClickGrupo = (grupo: string) => {

    this.props.removeGrupo(grupo)

  }

  onClickActividad = (actividad: string) => {

    this.props.removeActividad(actividad)

  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    let listaRubros: string[] = []

    let rubros: any[] = []
    let grupos: any[] = []
    let actividades: any = []

    if(this.props.rubros) rubros = this.props.rubros
    if(this.props.grupos) grupos = this.props.grupos
    if(this.props.actividades) actividades = this.props.actividades

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    // let solicitudDeValidacion = {
    //   _id: '',
    //   empresa: {
    //     nombre: '',
    //     cuit: ''
    //   }
    // }

    // let _id: string = ''
    // let empresaNombre: string = ''
    // let empresaCuit: string = ''

    // if(
    //   this.props.solicitudDeValidacionReducer &&
    //   this.props.solicitudDeValidacionReducer.data &&
    //   this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones
    // ) {
    //   if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones._id) _id = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones._id
    //   if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa) {
    //     if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.nombre) empresaNombre = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.nombre
    //     if(this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.cuit) empresaCuit = this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones.empresa.cuit
    //   }
    // }

    return(

      <div className={classes.root}>
        <CssBaseline />
       {this.props.appBar}
        {this.props.drawer}
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container >

                <Grid item lg={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 

                      // avatar={
                      //   <Avatar aria-label="recipe" className={classes.avatar}>
                      //     S
                      //   </Avatar>
                      // }
                      // title={this.props.title}
                      
                    />
                     <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontWeight="fontWeightBold" fontSize={22}>
                {this.props.title}</Box>
              </Typography>
<Divider className={classes.divider} />
                    <CardContent>
                      <form className={classes.root}>
                        <Grid container >
                          <Grid container >
                            <Grid item lg={4} xs={12}>
                              <TextField disabled id="standard-required" label="Empresa" value={this.props.nombre}  className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                            <TextField disabled id="standard-required" label="CUIT" value={this.props.cuit}  className={classes.input}  />
                            </Grid>

                            <Grid item lg={4} xs={6}>
                              <Link href="https://www.argentina.gob.ar/justicia/registro-nacional-sociedades" style={{textDecoration: 'none'}} target="_blank" >
                                <Button
                                type="button"
                                
                                variant="contained"
                                className={classes.Boton}
                                // onClick={this.ingresar}
                                >
                                Validar CUIT
                                </Button>
                              </Link>
                            </Grid>

                            
                            <Grid item lg={4} xs={6}>
                            
                            <Link href="https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaActivEconomicaAction.do" style={{textDecoration: 'none'}} target="_blank" >
                              <Button
                              type="button"
                              
                              variant="contained"
                              className={classes.Boton}
                              // onClick={this.ingresar}
                              >
                              Verificar rubro
                              </Button>
                            </Link>
                            
                            
                              
                          </Grid>
                            
                          </Grid>
                          
                         
                          <Grid container>
                            <Grid item lg={6} xs={12}>
                              <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Estado</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  defaultValue={1}
                                  // value={unidadDeMedida}
                                  // onChange={this.getUnidadDeMedida}
                                  
                                >
                                  <MenuItem value={1}>No Validada</MenuItem>
                                  <MenuItem value={2}>Validada</MenuItem>
                                  <MenuItem value={3}>Autenticada</MenuItem>
                                  <MenuItem value={4}>No Autenticada</MenuItem>
                                 
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item lg={6} xs={12}>
                              <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.inputLabel}>Sección</InputLabel>
                                <Select
                                  labelId="demo-mutiple-chip-label"
                                  id="demo-mutiple-chip"
                                  multiple
                                  value={rubros}
                                  // onChange={this.handleChange}
                                  input={<Input id="select-multiple-chip" />}
                                  renderValue={(selected: any) => (
                                    <div className={classes.chips}>
                                      {
                                        selected.map((rubro: {
                                          letra: string,
                                          nombre: string,
                                        }) => {
                                          return <Chip key={rubro.letra} label={rubro.nombre} className={classes.chip} />
                                        })
                                      }
                                    </div>
                                  )}
                                  MenuProps={MenuProps}
                                >
                                  {
                                    this.props.listaRubros.map((rubro: {
                                      letra: string,
                                      nombre: string,
                                    }) => {
                                      let exist= false
                                      rubros.map((item: {
                                        nombre: string
                                      }) => {
                                        if(item.nombre == rubro.nombre) exist = true
                                      })

                                      return <MenuItem onClick={ () => this.onClickRubro(rubro.letra) } key={rubro.letra} value={rubro.nombre}>
                                        <Checkbox checked={exist} />
                                        <ListItemText  primary={rubro.nombre} />
                                      </MenuItem>
                                    })
                                  }
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item lg={6} xs={12}>
                              <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.inputLabel}>Grupo</InputLabel>
                                <Select
                                  labelId="demo-mutiple-chip-label"
                                  id="demo-mutiple-chip"
                                  multiple
                                  value={grupos}
                                  // onChange={this.handleChange}
                                  input={<Input id="select-multiple-chip" />}
                                  renderValue={(selected: any) => (
                                    <div className={classes.chips}>
                                      {
                                        selected.map((grupo: {
                                          number: string,
                                          nombre: string,
                                        }) => {
                                          return <Chip key={grupo.number} label={grupo.nombre} className={classes.chip} />
                                        })
                                      }
                                    </div>
                                  )}
                                  MenuProps={MenuProps}
                                >
                                  {
                                    this.props.listaGrupos.map((grupo: {
                                      number: string,
                                      nombre: string,
                                    }) => {
                                      let exist= false
                                      grupos.map((item: {
                                        nombre: string
                                      }) => {
                                        if(item.nombre == grupo.nombre) exist = true
                                      })

                                      return <MenuItem onClick={ () => this.onClickGrupo(grupo.number) } key={grupo.number} value={grupo.nombre}>
                                        <Checkbox checked={exist} />
                                        <ListItemText  primary={grupo.nombre} />
                                      </MenuItem>
                                    })
                                  }
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item lg={6} xs={12}>
                              <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.inputLabel}>Actividad</InputLabel>
                                <Select
                                  labelId="demo-mutiple-chip-label"
                                  id="demo-mutiple-chip"
                                  multiple
                                  value={actividades}
                                  // onChange={this.handleChange}
                                  input={<Input id="select-multiple-chip" />}
                                  renderValue={(selected: any) => (
                                    <div className={classes.chips}>
                                      {
                                        selected.map((actividad: {
                                          number: string,
                                          name: string,
                                        }) => {
                                          return <Chip key={actividad.number} label={actividad.name} className={classes.chip} />
                                        })
                                      }
                                    </div>
                                  )}
                                  MenuProps={MenuProps}
                                >
                                  {
                                    this.props.listaActividades.map((actividad: {
                                      number: string,
                                      name: string,
                                    }) => {
                                      let exist= false
                                      actividades.map((item: {
                                        name: string
                                      }) => {
                                        if(item.name == actividad.name) exist = true
                                      })

                                      return <MenuItem onClick={ () => this.onClickActividad(actividad.number) } key={actividad.number} value={actividad.name}>
                                        <Checkbox checked={exist} />
                                        <ListItemText primary={actividad.name} />
                                      </MenuItem>
                                    })
                                  }
                                </Select>
                              </FormControl>
                            </Grid>
                           
                        </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                    <CardActions>
                      <Grid container  direction = 'column' alignItems = 'flex-end'  >
                        <Grid item lg={12} >
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            // startIcon={<SaveIcon />}
                          >
                            Aceptar
                          </Button>
                          </Grid>  
                        </Grid>
                    </CardActions>
                    
									</Card>
								</Grid>


							</Grid>
							{/* <Box pt={4}>
								<Copyright />
							</Box> */}
						</Container>
            {this.props.footer}
					</main>

          
		 
		 </div>

    );
  }
}

export default connect(mapStateToProps)(Validacion)