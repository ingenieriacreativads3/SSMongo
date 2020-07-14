import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, TextField, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, TextareaAutosize} from '@material-ui/core';
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

class Editar extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any
  drawer:any,
  footer:any,
  title: string,
  item: {
    _id: string,
    nombre: string,
    precio: string,
    foto: string,
    mostrarPrecio: boolean,
    descripcion: string,
    unidad_de_medida: {
      _id: string,
      nombre: string
    },
  },
  unidadesDeMedida: any[],
  getNombre: any,
  getPrecio: any,
  getDescripcion: any,
  getMagnitud: any,
  getMostrarPrecio: any,
  getFoto: any,
  update: any,
}, {
  item: {
    _id: string,
    nombre: string,
    precio: string,
    descripcion: string,
    unidad_de_medida: {
      _id: string,
      nombre: string,
    },
    foto: string[],
    mostrarPrecio: boolean
  }
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.changeNombre = this.changeNombre.bind(this);
    this.changePrecio = this.changePrecio.bind(this);
    this.changeDescripcion = this.changeDescripcion.bind(this);
    this.changeUnidadDeMedida = this.changeUnidadDeMedida.bind(this);
    this.changeMostrarPrecio = this.changeMostrarPrecio.bind(this);
    this.state = {
      item: {
        _id: '',
        nombre: '',
        precio: '',
        descripcion: '',
        unidad_de_medida: {
          _id: '',
          nombre: ''
        },
        foto: [],
        mostrarPrecio: false
      }
    };
  }

  componentWillReceiveProps() {

    this.setState({ item: this.props.item})

  }

  changeNombre(e: any) {
    this.setState({ item: { ...this.state.item, nombre: e.target.value } })
    //this.props.getNombre(e.target.value)
  }

  changePrecio(e: any) {
    this.setState({ item: { ...this.state.item, precio: e.target.value } })
    // this.props.getPrecio(e.target.value)
  }

  changeDescripcion(e: any) {
    this.setState({ item: { ...this.state.item, descripcion: e.target.value } })
    // this.props.getDescripcion(e.target.value)
  }

  changeUnidadDeMedida(e: any) {

    this.props.unidadesDeMedida.map((unidadDeMedida: {
      _id: string,
      nombre: string
    }) => {
      if(e.target.value === unidadDeMedida._id) {
        this.setState({ 
          item: { 
            ...this.state.item, 
            unidad_de_medida: {
              _id: unidadDeMedida._id,
              nombre: unidadDeMedida.nombre
            }
          }
        })
        // this.props.getMagnitud(unidadDeMedida._id)
      }
    })

  }

  changeMostrarPrecio() {

    let mostrarPrecio: boolean = false

    if(!this.state.item.mostrarPrecio) mostrarPrecio = true

    this.setState({ item: { ...this.state.item, mostrarPrecio: mostrarPrecio } })
    // this.props.getMostrarPrecio(mostrarPrecio)

  }

  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        {this.props.drawer}
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
                      title={this.props.title}
                      
                    />

                  <CardContent>
                    <form className={classes.root}>
                      <Grid container spacing={3}>
                        <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <CssTextField
                              className={classes.margin}
                              id="nombre"
                              label="Nombre"
                              type="text"
                              value={ this.state.item.nombre }
                              onChange={ this.changeNombre }
                            />
                          
                          </Grid>
                          <Grid item lg={4}>
                            <CssTextField
                              className={classes.margin}
                              id="custom-css-standard-input"
                              label="Precio"
                              type="text"
                              value={ this.state.item.precio }
                              onChange={ this.changePrecio }
                            />

                          </Grid>
                          <Grid item lg={4}>
                            <FormControlLabel className={classes.Checkbox}
                                control={
                                  <Checkbox
                                    checked={this.state.item.mostrarPrecio}
                                    onChange={this.changeMostrarPrecio}
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
                            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Unidad</InputLabel>
                              <Select
                            
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.item.unidad_de_medida._id}
                                onChange={this.changeUnidadDeMedida}
                              >
                                {this.props.unidadesDeMedida.map((unidadDeMedida: {
                                  _id: string,
                                  nombre: string
                                }) => {
                                  return <MenuItem value={unidadDeMedida._id}>{unidadDeMedida.nombre}</MenuItem>
                                })}
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
                            <TextareaAutosize
                              style={{borderRadius:7}}
                              aria-label="minimum height"
                              rowsMin={10}
                              className={classes.textTarea}
                              placeholder="Descripcion"
                              value={ this.state.item.descripcion }
                              onChange={ this.changeDescripcion }
                            />
                          </Grid>
                          <Grid item lg={4}>
                            <label htmlFor="raised-button-file">
                              <Button variant="contained" component="label" className={classes.botonIcono}>
                                Imagen
                                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                                  <PhotoCamera />
                                  <Input
                                    inputProps={{ multiple: false }} 
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    onChange = {this.props.getFoto}
                                  />
                                </IconButton>
                              </Button>
                            </label> 
                          </Grid>
                          <Grid item lg ={4}>
                            <Avatar alt={this.state.item.foto[0]} src={'http://localhost:8000/' + this.state.item.foto[0]} className={classes.previsualizacion} />
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
                          onClick={() => this.props.update(
                            this.state.item._id,
                            this.state.item.nombre,
                            this.state.item.precio,
                            this.state.item.unidad_de_medida._id,
                            this.state.item.descripcion,
                            this.state.item.mostrarPrecio,
                            this.state.item.foto
                          )}
                        >
                          Actualizar
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

export default connect(mapStateToProps)(Editar)
