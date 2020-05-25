import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, TextField,Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';


//import * as ItemAction from "../../store/actions/ItemAction";
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

function mapStateToProps(store: {}) {
  return {
    Item: store
  };
}

class Editar extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
/*     this.onSubmit = this.onSubmit.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getUnidadDeMedida = this.getUnidadDeMedida.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this); */
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
/* 
  onSubmit() {
    this.props.dispatch(ItemAction.nuevo(this.props.idEmpresa, this.state.Item));
  }

  getNombre(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        nombre: e.target.value
      }
    });

  }

  getPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        precio: e.target.value
      }
    });

  }

  getFoto(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        foto: e.target.value
      }
    });

  }

  getDescripcion(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        descripcion: e.target.value
      }
    });

  }

  getCaracteristicas(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        caracteristicas: e.target.value
      }
    });

  }

  getUnidadDeMedida(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        unidadDeMedida: e.target.value
      }
    });

  }

  getMostrarPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        mostrarPrecio: e.target.value
      }
    });

  } */

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
                          <Avatar aria-label="recipe" className={classes.avatar}>
                            E
                          </Avatar>
                        }
                        title="Editar Item"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <CssTextField className={classes.margin} id="custom-css-standard-input" label="Nombre" defaultValue="Samsung A20" />
                            
                            </Grid>
                            <Grid item lg={4}>
                            <CssTextField className={classes.margin} id="custom-css-standard-input" label="Precio" type="number" defaultValue="16000" />

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
                              <InputLabel id="demo-simple-select-label">Unidad</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  defaultValue={1}
                                  // value={unidadDeMedida}
                                  // onChange={this.getUnidadDeMedida}
                                  
                                >
                                  <MenuItem value={1}>Unidad</MenuItem>
                                  <MenuItem value={2}>Kilogramos</MenuItem>
                                  <MenuItem value={3}>Metros</MenuItem>
                                  <MenuItem value={4}>Litros</MenuItem>
                                  <MenuItem value={5}>Horas</MenuItem>
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
                            <TextareaAutosize aria-label="minimum height" rowsMin={10}  className={classes.textTarea} value="Android (9.0). Pantalla 16.4' Nano SIM"   />
                            </Grid>
                            <Grid item lg={4}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={10}  className={classes.textTarea} value="Bateria no extraible. Micro SD hasta 512gb. 3GBRAM"  />
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
                            startIcon={<SaveIcon />}
                          >
                            Actualizar
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

          {/* <div class="content-wrapper">

      
            
      
          <div class="col-md-5">
          <div class="box box-warning">
              
              <div class="blog_right_sidebar">
                  
                  <aside class="single_sidebar_widget author_widget">
                      
                      <div class="box-header with-border">
                      <img class="author_img rounded-circle" src="img/blog/author.png" alt=""></img>

                    <h3 class="box-title">Imagen</h3>
                    <p>Selecciona la foto del item</p>

                  </div>
                      
                      
                      <div class="br"></div>
                      <input type="file" id="exampleInputFile"></input>
                  </aside>
                  <aside class="single_sidebar_widget popular_post_widget">
                    
                  <div class="box-footer"> 
                  <div class="col-md-12 text-right">
                  <a class="primary-btn submit_btn" href="#">Añadir</a>
                      </div>
                  </div>
                  </aside>
                  
              </div>
              </div>
          </div>



          <div class="col-md-7">
          <div class="box box-warning">
          <div class="box-header with-border">



                    <h3 class="box-title">Nuevo Item</h3>


                  </div>
                      
                  <form>
                      <div class="form-group form-inline">
                          <div class="form-group col-lg-6 col-md-6 name">
                          <Input className={classname.color} placeholder="Nombre item" inputProps={{ 'aria-label': 'description' }} color='primary' onChange={ this.getNombre }/>
                         
                              
                          </div>
                          <div class="form-group col-lg-6 col-md-6 name">
                          <Input type="number" placeholder="Precio" inputProps={{ 'aria-label': 'description' }} color='primary' onChange={ this.getPrecio }/>
                          </div>
                          
                      </div>

                      <div class="form-group form-inline">

                        
                          <div class="col-md-6 form-group p_star">
                          <FormControl>
                            <InputLabel id="demo-simple-select-label">Unidad</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // value={unidadDeMedida}
                              onChange={this.getUnidadDeMedida}
                            >
                              <MenuItem value={1}>Kilogramos</MenuItem>
                              <MenuItem value={2}>Metros</MenuItem>
                              <MenuItem value={3}>Litros</MenuItem>
                              <MenuItem value={4}>Horas</MenuItem>
                            </Select>
                          </FormControl>
                          
                          </div>

                          <div class="col-md-6 form-group">

                     
                          <FormControlLabel
                          control={
                            <Checkbox
                              checked = "false"
                              onChange={this.getMostrarPrecio}
                              color="primary"
                            />
                          }
                          label="Mostrar Precio"
                        />
                          
                              
                        </div>
                          
                          </div>

                      

                      <div class="form-group">
                      <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Caracteristicas" onChange={ this.getCaracteristicas} />
                       
                      </div>
                      <div class="form-group">
                      <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Descripcion" onChange={ this.getDescripcion} />
                         
                      </div>

                      <div class="box-footer">
                      <div class="col-md-6 text-left">
                            <Link to="/unidadMedida/nuevo"><button type="submit" value="submit" class="btn btn-warning btn-lg btn-block">Nueva Unidad</button></Link>
                          </div>
                      <div class="col-md-6 text-right">
                      <a href="#" class="primary-btn submit_btn">Guardar</a>
                      </div>
                      </div>
                  </form>
              </div>
          </div>

      </div>
     */}  
		 
		 </div>

    );
  }
}

Editar.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Editar)
