import React from 'react';
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, Divider,Grid, Card, Box, Typography, TextField, CssBaseline,  IconButton, Button, CardContent, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions} from '@material-ui/core';

import * as ubicacionActions from './../../store/actions/ubicacion'
import * as fileActions from './../../store/actions/file'
import { connect } from 'react-redux'


function mapStateToProps(store: {
  ubicacionReducer: any,
  fileReducer: any,
  errorReducer:any,
}) {
  return {
    ubicacionReducer: store.ubicacionReducer,
    fileReducer: store.fileReducer,
    errorReducer: store.errorReducer
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
  formValid:boolean,
  localidadSeleccionada:boolean,
  provinciaSeleccionada:boolean,
  provincia: string,
  municipio: string,
  photo: File[],
  errors:any[],
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
      localidadSeleccionada:true,
      provinciaSeleccionada:true,
      formValid:true,
      errors:[],
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
    debugger;
    this.setState({ empresa: { ...this.state.empresa, provincia: e.target.value } })
    this.props.dispatch(ubicacionActions.getMunicipiosByName(e.target.value))
    // if(this.props.errors.length == 0 && this.props.localidadSeleccionada && this.props.provinciaSeleccionada)
    // {
    //   this.setState({formValid:true});
    // }
  }

  handleChangeMunicipio(e: any) {
    this.setState({ empresa: { ...this.state.empresa, localidad: e.target.value } })
    // if(this.props.errors.length == 0 && this.props.localidadSeleccionada && this.props.provinciaSeleccionada)
    // {
    //   this.setState({formValid:true});
    // }
  }

  changeUsuario(e: any) {
    debugger;
    this.setState({ empresa: { ...this.state.empresa, usuario: e.target.value } })
     //this.props.dispatch(errorActions.editErrors(e.target.id))
    // if(this.props.errors.length == 0 && this.props.localidadSeleccionada && this.props.provinciaSeleccionada)
    // {
    //   this.setState({formValid:true});
    // }
  }

  changeEmail(e: any) {
    this.setState({ empresa: { ...this.state.empresa, email: e.target.value } })
    
  }

  changeClave(e: any) {
    //let state = store.getState();
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
                      <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {"Mi perfil"}</Box>
              </Typography>
                <Divider className={classes.divider} />
                      

                    <CardContent>
                      <form id="miPerfilForm" className={classes.root}>
                        <Grid container spacing={3}>
                        
                        <Grid container spacing={3}>
                        <div style={{ width: "100%",  marginTop:"1rem" }}>
                          <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
                          <FormControlLabel className={classes.Checkbox}
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
                          </Box>
                          
                        
                        </div>
                            <Grid item xs={12} sm={4}>
                            <TextField
                              className={classes.textField}
                              label="Usuario"
                              variant="outlined"
                              value={ this.state.empresa.usuario }
                              onChange={ this.changeUsuario }
                              id="Usuario"
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
                              // required={true}
                              // error={this.props.errors.Usuario != null ? true : false}
                              // helperText={this.props.errors.Usuario != null ? this.props.errors.Usuario : ""}
                            />
                            
                              
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <TextField
                              className={classes.textField}
                              variant="outlined"
                              value={this.state.empresa.email}
                              onChange={ this.changeEmail }
                              label="Email"
                              type="email"
                              id="Email"
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
                              // required={true}
                              // error={this.props.errors.Email != null ? true : false}
                              // helperText={this.props.errors.Email != null ? this.props.errors.Email : ""}
                            />
                              
                            </Grid>
                          
                          <Grid item xs={12} sm={4}>
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
                            
                            <Grid item xs={12} sm={4}>
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
                          
                          <Grid item xs={12} sm={4}>
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
                            <Grid item xs={12} sm={4}>
                            <FormControl 
                            variant="outlined" 
                            className={classes.formControl}
                            /* error={!this.props.provinciaSeleccionada} */>
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
                             {/*  {!this.props.provinciaSeleccionada && <FormHelperText error={true} >Selecciona una Provincia</FormHelperText>} */}
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <FormControl 
                            variant="outlined"  
                            className={classes.formControl}
                            /* error={!this.props.localidadSeleccionada} */>
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
                              {/* {!this.props.localidadSeleccionada && <FormHelperText error={true} >Selecciona una Localidad</FormHelperText>} */}
                            </FormControl>
                           
                            </Grid>
                            
                          <Grid item xs={12} sm={4}>
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
                            <Grid item xs={12} sm={6}>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange = { this.getFoto } />
                            <label htmlFor="icon-button-file">
                              <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                                <PhotoCamera />
                              </IconButton>
                            </label>
                              {/* <label htmlFor="raised-button-file">
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
                              </label>  */}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <img className={classes.fotoLogo}   src={'http://localhost:8000/' + this.state.empresa.logo} ></img>
                              {/* <Avatar className={classes.fotoLogo} alt={'http://localhost:8000/' + this.state.empresa.logo}  src={'http://localhost:8000/' + this.state.empresa.logo} /> */}
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
                              // disabled={ !this.state.formValid}
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