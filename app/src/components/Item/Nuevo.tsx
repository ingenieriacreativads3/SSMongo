import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, Avatar, TextField, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';

import * as Login from './../../store/actions/login'

import { connect } from 'react-redux'
import MenuLateral from '../Drawer';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#d93211',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#d93211',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#d93211',
      },
      '&:hover fieldset': {
        borderColor: '#d93211',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d93211',
      },
    },
  },
})(TextField);

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
	Item: {},
	login: {
		data: {
			empresa: {
				_id: string
			}
		}
	}
}) {
  return {
    Item: store.Item,
    // idEmpresa: store.login.data.empresa._id
  };
}

class Nuevo extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      }
    };
  }

  async register(): Promise<void> {
    return new Promise<void>( async (resolve, reject) => {
      await this.props.dispatch(Login.register({
        empresa :	{
          nombre: "macoser",
          cuit: "30716221659",
          usuario: "macoser",
          clave: "admin",
          email: "macoser@test.com",
          rubros: [
              null
          ]
        }
      })).then((res: any)=> {
        console.log(res)
        resolve(res)
      }).catch((err: any)=> {
        console.log(err)
        reject(err)
      })
		})
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
                            N
                          </Avatar>
                        }
                        title="Nuevo Item"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <CssTextField className={classes.margin} id="custom-css-standard-input" label="Nombre"  />
                            
                              
                            </Grid>
                            <Grid item lg={4}>
                            <CssTextField className={classes.margin} id="custom-css-standard-input" label="Precio"   type="number" />
                            
                            </Grid>
                            <Grid item lg={4}>
                              <FormControlLabel className={classes.Checkbox}
                                  control={
                                    <Checkbox
                                      // checked = "false"
                                      // onChange={this.getMostrarPrecio}
                                      style ={{
                                        color: "#d93211",
                                      }}
                                    />
                                  }
                                  label="Mostrar Precio"
                                />
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item lg={6}>
                              <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label" >Unidad</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  // value={unidadDeMedida}
                                  // onChange={this.getUnidadDeMedida}
                                >
                                  <MenuItem value={1}>Kilogramos</MenuItem>
                                  <MenuItem value={2}>Metros</MenuItem>
                                  <MenuItem value={3}>Litros</MenuItem>
                                  <MenuItem value={4}>Horas</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item lg={6}>
                            <Link href="/unidadMedida/nuevo"  >
                              <Button variant="contained" className={classes.Boton}>
                                Nueva Unidad
                              </Button>
                            </Link>
                            </Grid>
                            
                          </Grid>
                           <Grid container spacing={3}> 
                            <Grid item lg={4}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Caracteristicas"  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Descripcion"  />
                            </Grid>
                            <Grid item lg={4}>
                            <Button
                              variant="contained"
                              component="label"
                              className={classes.botonIcono}
                            >
                              <InputLabel htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
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
                          {/* <Grid container spacing={3}>
                          <Grid item lg={12}>
                            
                          </Grid>
                        </Grid> */}
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
                              onClick={() => this.register()}
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

Nuevo.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Nuevo)
