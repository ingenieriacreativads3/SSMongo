import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

import { Container,Divider, Paper, Grid, Card, Box, Typography, CssBaseline, CardHeader, TextField, Avatar, IconButton, Button, FormHelperText, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import * as errorActions from './../../store/actions/error'


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
    debugger;
    this.setState({ item: { ...this.state.item, nombre: e.target.value } })
    this.props.dispatch(errorActions.editErrors(e.target.id))
    //this.props.getNombre(e.target.value)
  }

  changePrecio(e: any) {
    this.setState({ item: { ...this.state.item, precio: e.target.value } })
    this.props.dispatch(errorActions.editErrors(e.target.id))
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

  }

  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

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
                {this.props.title}</Box>
              </Typography>
<Divider className={classes.divider} />
          <FormControl>
          <form id="formEditItem">
        <Grid container spacing={3} alignContent="center">
          <Grid item xs={12} sm={6}>
          <CssTextField 
            className={classes.margin}
            id="Nombre"
            label="Nombre"
            value={ this.state.item.nombre }
            onChange={ this.changeNombre }
            required={true}
            error={this.props.errors.Nombre != null ? true : false}
            helperText={this.props.errors.Nombre != null ? this.props.errors.Nombre : ""}
            fullWidth
          />
          </Grid>

          <Grid item xs={12} sm={6}>
          <CssTextField
          className={classes.margin}
          id="Precio"
          label="Precio"
          type="number"
          value={ this.state.item.precio }
          onChange={ this.changePrecio }
          required={true}
          error={this.props.errors.Precio != null ? true : false}
          helperText={this.props.errors.Precio != null ? this.props.errors.Precio : ""}
          inputProps={{min:1}}
          fullWidth

        />
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth className={classes.formControl} error={!this.props.unidadSeleccionada}>
            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Unidad</InputLabel>
              <Select
            
                labelId="demo-simple-select-label"
                id="Unidad"
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
              {!this.props.unidadSeleccionada && <FormHelperText error={true} >Selecciona una unidad</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
          <Link href="/unidadMedida/nuevo" style={{textDecoration: 'none'}} >
            <Button variant="outlined" className={classes.Boton}>
              Solicitar Nueva Unidad
            </Button>
          </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
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

          <Grid item xs={12} sm={12}>
            <CssTextField 
                className={classes.margin}
                id="Descripcion"
                label="Descripcion"
                onChange={ this.props.getDescripcion }
                multiline
                rows={4}
                fullWidth

              />
              {/* <TextareaAutosize
                style={{borderRadius:7}}
                aria-label="minimum height"
                rowsMin={10}
                className={classes.textTarea}
                placeholder="Descripcion"
                onChange={ this.props.getDescripcion }
                id="Descripcion"
              /> */}
            </Grid>
            <Grid item xs={12} sm={12}>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" multiple   onChange = { this.props.getFoto } />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
              <PhotoCamera />
            </IconButton>
          </label>
            </Grid>
            <Grid item xs={12} sm={12}>
              <img alt={this.state.item.foto[0]} src={'http://localhost:8000/' + this.state.item.foto[0]} className={classes.previsualizacion} ></img>
              {/* <Avatar className={classes.previsualizacion} alt={this.props.pathImage}  src={this.props.pathImage} /> */}
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
                startIcon={<SaveIcon />}
                disabled={ !this.props.formValido }
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

export default connect(mapStateToProps)(Editar)
