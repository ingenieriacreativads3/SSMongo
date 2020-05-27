import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid,TextField, Card, Box, Typography,Chip, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, TextareaAutosize, List} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import menuLateral from '../Drawer'

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
  history: any,
  location: any,
  match: any,
  staticContext?: any
}, {
  personName: [],
  solicitudDeValidacion: {
    _id: string,
    empresa: {
      nombre: string,
      cuit: string
    }
  }
}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  constructor(props: any) {
    super(props);
    this.state = {
      personName: [],
      solicitudDeValidacion: {
        _id: '',
        empresa: {
          nombre: '',
          cuit: ''
        }
      }
    };
  }

  componentWillMount() {
    this.props.dispatch(SolicitudDeValidacionActions.getById(this.props.match.params.id))
  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
    const names = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];

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


    let solicitudDeValidacion = {
      _id: '',
      empresa: {
        nombre: '',
        cuit: ''
      }
    }

    // if(
    //   this.props.solicitudDeValidacionReducer.status === 200
    // ) {
    //   this.setState({
    //     solicitudDeValidacion: this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones
    //   })
    // }

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

    console.log(_id)
    console.log(empresaNombre)
    console.log(empresaCuit)


    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar />
        <MenuLateral />
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          S
                        </Avatar>
                      }
                      title="Solicitud de Validación"
                      
                    />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="ID Solicitud" value={_id} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Empresa" value={empresaNombre}  className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <Link href="https://www.argentina.gob.ar/justicia/registro-nacional-sociedades" target="_blank" >
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
                            
                          </Grid>
                          
                          <Grid container spacing={3}>
                         
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="CUIT" value={empresaCuit}  className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            
                            <Link href="https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaActivEconomicaAction.do" target="_blank" >
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
                          <Grid container spacing={3}>
                            <Grid item lg={6}>
                              <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
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
                            <Grid item lg={6}>
                              {/* <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-mutiple-chip-label">Rubro</InputLabel>
                                    <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={this.state.personName}
                                    onChange={(event, newPersonName ) => {
                                        this.setState({
                                            personName: newPersonName
                                        })
                                      }}

                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                    >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl> */}
                            </Grid>
                           
                        </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >
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
							<Box pt={4}>
								<Copyright />
							</Box>
						</Container>
					</main>

          
		 
		 </div>

    );
  }
}

export default connect(mapStateToProps)(Validacion)