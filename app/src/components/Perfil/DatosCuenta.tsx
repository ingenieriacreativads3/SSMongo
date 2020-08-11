import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, Grid, Card, Box, Typography, TextField, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import * as ubicacionActions from './../../store/actions/ubicacion'
import * as fileActions from './../../store/actions/file'


//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../Drawer';


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
  ubicacionReducer: any,
  fileReducer: any
}) {
  return {
    ubicacionReducer: store.ubicacionReducer,
    fileReducer: store.fileReducer
  };
}

class DatosCuenta extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  update: any,
  empresa: {
    "_id": string,
    "nombre": string,
    "cuit": string,
    "usuario": string,
    "email": string,
    "estado": string,
    "updated_at": string,
    "created_at": string,
    "domicilioLegal": string,
    "localidad": string,
    "logo": string,
    "mostrar_perfil": boolean,
    "provincia": string,
    "telefono": string,
    "clave": string,
  }
}, {
  provincia: string,
  municipio: string,
  photo: File[],
  empresa: {
    "_id": string,
    "nombre": string,
    "cuit": string,
    "usuario": string,
    "email": string,
    "estado": string,
    "updated_at": string,
    "created_at": string,
    "domicilioLegal": string,
    "localidad": string,
    "logo": string,
    "mostrar_perfil": boolean,
    "provincia": string,
    "telefono": string,
    "clave": string,
  }
}>  {

	props: any
	static propTypes: any
	static defaultProps: any
 
  constructor(props: any) {
    super(props);
    this.handleChangeProvincia = this.handleChangeProvincia.bind(this);
    this.handleChangeMunicipio = this.handleChangeMunicipio.bind(this);
    this.changeUsuario = this.changeUsuario.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeClave = this.changeClave.bind(this);
    this.changeCUIT = this.changeCUIT.bind(this);
    this.changeDomicilio = this.changeDomicilio.bind(this);
    this.changeTelefono = this.changeTelefono.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.changeMostrarPerfil = this.changeMostrarPerfil.bind(this);
    this.state = {
      provincia: '',
      municipio: '',
      photo: [],
      empresa: {
        "_id": '',
        "nombre": '',
        "cuit": '',
        "usuario": '',
        "email": '',
        "estado": '',
        "updated_at": '',
        "created_at": '',
        "domicilioLegal": '',
        "localidad": '',
        "logo": '',
        "mostrar_perfil": false,
        "provincia": '',
        "telefono": '',
        "clave": '',
      }
    };
  }

  componentWillReceiveProps() {

    this.setState({ empresa: this.props.empresa})
    if(
      this.props.ubicacionReducer.municipios.length === 0 &&
      !this.props.ubicacionReducer.fetching
    ) {
      this.props.dispatch(ubicacionActions.getMunicipiosByName(this.props.empresa.provincia))
    }

  }

  componentWillMount() {

    if(
      !this.props.ubicacionReducer.fetched &&
      !this.props.ubicacionReducer.fetching
    ) {
      this.props.dispatch(ubicacionActions.getProvincias())
    }

  }

  handleChangeProvincia(e: any) {
    this.setState({ empresa: { ...this.state.empresa, provincia: e.target.value } })
    this.props.dispatch(ubicacionActions.getMunicipiosByName(e.target.value))
  }

  handleChangeMunicipio(e: any) {
    this.setState({ empresa: { ...this.state.empresa, localidad: e.target.value } })
  }

  changeUsuario(e: any) {
    this.setState({ empresa: { ...this.state.empresa, usuario: e.target.value } })
  }

  changeEmail(e: any) {
    this.setState({ empresa: { ...this.state.empresa, email: e.target.value } })
  }

  changeClave(e: any) {
    this.setState({ empresa: { ...this.state.empresa, clave: e.target.value } })
  }

  changeCUIT(e: any) {
    this.setState({ empresa: { ...this.state.empresa, cuit: e.target.value } })
  }

  changeDomicilio(e: any) {
    this.setState({ empresa: { ...this.state.empresa, domicilioLegal: e.target.value } })
  }

  changeTelefono(e: any) {
    this.setState({ empresa: { ...this.state.empresa, telefono: e.target.value } })
  }

  getFoto(e: any) {

    let files: File[] = []

    for (var i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files[i])
    }

    files.map((file: File) => {
      this.props.dispatch(fileActions.upload(file))
    })

    this.setState({ photo: files })
  }

  changeMostrarPerfil() {

    let mostrar_perfil: boolean = false

    if(!this.state.empresa.mostrar_perfil) mostrar_perfil = true

    this.setState({ empresa: { ...this.state.empresa, mostrar_perfil: mostrar_perfil } })

  }

  render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);


    let provincias: any[] = [
      {
        nombre: 'Seleccionar',
        id: '1'
      }
    ]

    let municipios: any[] = [
      {
        nombre: 'Seleccionar',
        id: '1'
      }
    ]

    if(
      this.props.ubicacionReducer.fetched &&
      this.props.ubicacionReducer.provincias !== undefined
    ) {
      provincias = this.props.ubicacionReducer.provincias
    }

    if(
      this.props.ubicacionReducer.fetched &&
      this.props.ubicacionReducer.municipios !== undefined
    ) {
      municipios = this.props.ubicacionReducer.municipios
    }

    return(

      <div className={classes.root}>
        <CssBaseline />
        {this.props.appBar}
         {this.props.drawer}
        <main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={12}>
                  
									<Card className={fixedHeightCard}>
                    <CardHeader 
                    
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            D
                          </Avatar>
                        }

                        action={
                          <FormControlLabel
                                
                          control={
                            <Checkbox
                              checked={this.state.empresa.mostrar_perfil}
                              onChange={this.changeMostrarPerfil}
                              style ={{
                                color: "#d93211",
                              }}
                            />
                          }
                          label="Mostrar Perfil"
                        /> 
                        }
                        
                        title="Mis datos"
                        
                      
                         
                      />
                      

                      

                    <CardContent>
                        <Typography variant="h5" component="h2">
                          Datos de cuenta
                          
                        </Typography>
                    </CardContent>

                       


                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                        
                        <Grid container spacing={3}>
                            
                            <Grid item lg={4}>
                              
                            <TextField
                              className={classes.textField}
                              label="Usuario"
                              variant="outlined"
                              value={ this.state.empresa.usuario }
                              onChange={ this.changeUsuario }
                              id="mui-theme-provider-outlined-input"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            
                              
                            </Grid>
                            <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                              variant="outlined"
                              value={this.state.empresa.email}
                              onChange={ this.changeEmail }
                              label="Email"
                              type="email"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                              
                            </Grid>
                            {/* <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                              variant="outlined"
                              value={ this.state.empresa.clave }
                              onChange={ this.changeClave }
                              label="Contraseña"
                              type="password"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                           
                          </Grid> */}
                          </Grid>
                        
                          <CardContent>
                        <Typography variant="h5" component="h2">
                          Datos de empresa
                        </Typography>
                    </CardContent>
                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                              variant="outlined"
                              disabled
                              value={ this.state.empresa.cuit }
                              onChange={ this.changeCUIT }
                              label="CUIT"
                              type="text"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            </Grid>
                            
                            <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                              variant="outlined"
                              disabled
                              value={ this.state.empresa.nombre }
                              label="Razón social"
                              type="text"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            </Grid>
                            
                            
                          </Grid>
                          
                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <TextField
                            
                              variant="outlined"
                              value={ this.state.empresa.domicilioLegal }
                              onChange={ this.changeDomicilio }
                              label="Domicilio"
                              type="text"
                              className={classes.textField}
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            </Grid>
                            <Grid item lg={4}>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Provincia</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                className={classes.select}
                                label="Provincia"
                                value={this.state.empresa.provincia} 
                                onChange={this.handleChangeProvincia}
                              >
                                {provincias.map((provincia: {
                                  nombre: string,
                                  id: string
                                }) => {
                                  return <MenuItem value={provincia.nombre}>{provincia.nombre}</MenuItem>
                                })}
                              </Select>
                            </FormControl>
                            </Grid>
                            <Grid item lg={4}>
                            <FormControl variant="outlined"  className={classes.formControl}>
                          
                              <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Ciudad</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                className={classes.select}
                                label="Ciudad"
                                value={this.state.empresa.localidad} 
                                onChange={this.handleChangeMunicipio}
                              >
                                {municipios.map((municipio: {
                                  nombre: string,
                                  id: string
                                }) => {
                                  return <MenuItem value={municipio.nombre}>{municipio.nombre}</MenuItem>
                                })}
                              </Select>
                            </FormControl>
                           
                            </Grid>
                            
                            
                          </Grid>

                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                              variant="outlined"
                              value={ this.state.empresa.telefono }
                              onChange={ this.changeTelefono }
                              label="Teléfono"
                              type="number"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            </Grid>
                            <Grid item lg={4}>
                              <label htmlFor="raised-button-file">
                                <Button variant="contained" component="label" className={classes.botonIcono}>
                                  Logo
                                  <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                                    <PhotoCamera />
                                    <Input
                                      inputProps={{ multiple: true }} 
                                      className={classes.input}
                                      style={{ display: 'none' }}
                                      id="raised-button-file"
                                      type="file"
                                      onChange = { this.getFoto }
                                    />
                                  </IconButton>
                                </Button>
                              </label> 
                            </Grid>
                            <Grid item lg={4}>
                              <Avatar className={classes.fotoLogo} alt={'http://localhost:8000/' + this.state.empresa.logo}  src={'http://localhost:8000/' + this.state.empresa.logo} />
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
                              color='primary'
                              size="small"
                              className={classes.button}
                              startIcon={<SaveIcon />}
                              onClick={() => this.props.update(
                                this.state.empresa._id,
                                this.state.empresa.nombre,
                                this.state.empresa.usuario,
                                this.state.empresa.email,
                                this.props.fileReducer.data.foto[0],
                                this.state.empresa.clave,
                                this.state.empresa.telefono,
                                this.state.empresa.provincia,
                                this.state.empresa.localidad,
                                this.state.empresa.mostrar_perfil,
                                this.state.empresa.domicilioLegal,
                              )}
                            >
                              Guardar
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

DatosCuenta.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(DatosCuenta)