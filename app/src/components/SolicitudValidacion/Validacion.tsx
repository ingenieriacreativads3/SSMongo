import React from 'react';

import { Grid, Divider, Paper, TextField, Box, Typography,Chip, CssBaseline,  Button,  Input, FormControl, InputLabel, Select, MenuItem, Checkbox,  ListItemText} from '@material-ui/core';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux'

import { NO_VALIDADA, VALIDADA, NO_AUTENTICADA, AUTENTICADA } from './../SolicitudValidacion'

function mapStateToProps(store: {
  solicitudDeValidacionReducer: {}
}) {
  return {
    solicitudDeValidacion: store.solicitudDeValidacionReducer
  };
}

class Validacion extends React.Component <{}, {
  rubros: any[],
  estado: string
}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      rubros: [],
      estado: NO_VALIDADA,
    };
  }

  handleChange(e: any) {

    let rubroSeleccionado: string = ''

    e.target.value.map((value: any) => {
      if(value.nombre === undefined) {
        rubroSeleccionado = value;
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

  update = () => {

    let lista: string[] = []

    this.props.actividades.map((actividad: {
      name: string
    }) => {
      lista.push(actividad.name)
    })

    this.props.update(
      this.props.empresa?._id || '',
      lista,
      this.state.estado
    )
  }

  estadoGet = (e: any) => {
    this.setState({
      estado: e.target.value
    })
  }
  
  render(){

		const classes = this.props.classes

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
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
            <Paper style={{ padding: 20, margin:50}}>
              <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {this.props.title}
                </Box>
              </Typography>
              <Divider className={classes.divider} />
            <FormControl>
            <form >
            <Grid container spacing={3}>
              <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={3}>
                <TextField disabled id="standard-required" label="Empresa" value={this.props.nombre}  className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={3}>
                <TextField disabled id="standard-required" label="CUIT" value={this.props.cuit}  className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={3}>
                <Link href="https://www.argentina.gob.ar/justicia/registro-nacional-sociedades" style={{textDecoration: 'none'}} target="_blank" >
                  <Button
                  type="button"
                  
                  variant="outlined"
                  className={classes.Boton}
                  // onClick={this.ingresar}
                  >
                  Validar CUIT
                  </Button>
                </Link>
                </Grid>

                <Grid item xs={12} sm={3}>
                <Link href="https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaActivEconomicaAction.do" style={{textDecoration: 'none'}} target="_blank" >
                  <Button
                  type="button"
                  
                  variant="outlined"
                  className={classes.Boton}
                  // onClick={this.ingresar}
                  >
                  Verificar rubro
                  </Button>
                </Link>
                </Grid>

              </Grid>

              <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-label" className={classes.inputLabel}>Estado</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={ NO_VALIDADA }
                      onChange={ this.estadoGet }
                    >
                      <MenuItem value={ NO_VALIDADA }>{ NO_VALIDADA }</MenuItem>
                      <MenuItem value={ VALIDADA }>{ VALIDADA }</MenuItem>
                      <MenuItem value={ NO_AUTENTICADA }>{ NO_AUTENTICADA }</MenuItem>
                      <MenuItem value={ AUTENTICADA }>{ AUTENTICADA }</MenuItem>
                      
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink={ this.props.rubros?.length > 0 ? true : false } id="demo-mutiple-chip-label"  className={ classes.inputLabel }>Sección</InputLabel>
                    <Select
                      labelId="demo-mutiple-chip-label"
                      id="demo-mutiple-chip"
                      multiple
                      value={rubros}
                      fullWidth = {true}
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
                            if(item.nombre === rubro.nombre) exist = true
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

                <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink={ this.props.grupos?.length > 0 ? true : false } id="demo-mutiple-chip-label" className={classes.inputLabel}>Grupo</InputLabel>
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
                            if(item.nombre === grupo.nombre) exist = true
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

                <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink={ this.props.actividades?.length > 0 ? true : false } id="demo-mutiple-chip-label" className={classes.inputLabel}>Actividad</InputLabel>
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
                          if(item.name === actividad.name) exist = true
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

            <div style={{ width: "100%",  marginTop:"1rem" }}>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={ this.update }
              >
                Aceptar
              </Button>
              </Box>
            </div>
            </FormControl>
            </Paper>
            </Grid>
            {this.props.footer}
					</main>

          
		 
		 </div>

    );
  }
}

export default connect(mapStateToProps)(Validacion)