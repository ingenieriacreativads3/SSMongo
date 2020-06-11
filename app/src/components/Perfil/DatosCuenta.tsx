import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, Grid, Card, Box, Typography, TextField, CardMedia, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import * as registerActions  from './../../store/actions/register'
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import * as Login from './../../store/actions/login'


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
  registerReducer:{}
}) {
  return {
    empresa: store.registerReducer
  };
}

class DatosCuenta extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any


}, {
  
  empresa: {
  _id: string,
  nombre: string,
  cuit: string,
  usuario: string,
  clave: string,
  email:string,
  
}}>  {

	props: any
	static propTypes: any
	static defaultProps: any

 
  constructor(props: any) {
    super(props);
    this.state = {
      empresa: {
        _id: '',
        nombre: '',
        cuit: '',
        usuario: '',
        clave: '',
        email:'',
        
      }
    };
  }

  componentWillMount() {
    this.props.dispatch(registerActions.getEmpresa(this.props.match.params.id))
  }

  render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
         <MenuLateral></MenuLateral> 
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
                              defaultValue= "CorpuSA"
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
                              defaultValue= "corpu@sa.com.ar"
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
                            <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                            variant="outlined"
                              defaultValue= "micontraseña"
                              label="Contraseña"
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
                              defaultValue= "30236547815"
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
                              defaultValue= "CorpuSoft"
                              label="Nombre"
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
                              defaultValue= "CorpuSoft SA"
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
                              defaultValue= "Bv. Roca 1200"
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
                                // value={age}
                                // onChange={handleChange}
                                label="Provincia"
                                defaultValue={10}
                                
                              >
                                
                                <MenuItem value={10}>Cordoba</MenuItem>
                                <MenuItem value={20}>Buenos Aires</MenuItem>
                                <MenuItem value={30}>Santa Fe</MenuItem>
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
                                // value={age}
                                // onChange={handleChange}
                                label="Ciudad"
                                defaultValue={10}
                              >
                                
                                <MenuItem value={10}>Arroyito</MenuItem>
                                <MenuItem value={20}>San Francisco</MenuItem>
                                <MenuItem value={30}>Devoto</MenuItem>
                              </Select>
                            </FormControl>
                           
                            </Grid>
                            
                            
                          </Grid>

                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <TextField
                              className={classes.textField}
                            variant="outlined"
                              defaultValue= "03564421589"
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
                            <Button
                              variant="contained"
                              component="label"
                              className={classes.botonIcono}
                            >
                              <InputLabel htmlFor="icon-button-file">
                                <IconButton color="primary"  aria-label="upload picture" component="span" className={classes.iconButton}>
                                  <PhotoCamera />
                                </IconButton>
                              </InputLabel>
                              <Input
                                type="file"
                                style={{ display: "none" }}
                              />
                            </Button>
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
                              
                            >
                              Guardar
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

DatosCuenta.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(DatosCuenta)