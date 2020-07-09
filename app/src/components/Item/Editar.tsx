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
    nombre: string,
    precio: string,
    foto: string,
    mostrarPrecio: boolean,
    descripcion: string,
    unidadDeMedidaId: string,
  }
}, {
  item: {
    nombre: string
  }
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      item: {
        nombre: props.item.nombre || 'asd'
      }
    };
  }

  componentWillReceiveProps() {
    if(this.state.item.nombre !== this.props.item.nombre) {
      this.setState({
        item: {
          nombre: this.props.item.nombre
        }
      })
    }
  }

  handleChange(e: any) {

    this.setState({
      item: {
        nombre: e.target.value
      }
    })
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
                              value={this.state.item.nombre}
                              onChange={this.handleChange}
                            />
                          
                          </Grid>
                          <Grid item lg={4}>
                            <CssTextField
                              className={classes.margin}
                              id="custom-css-standard-input"
                              label="Precio"
                              type="text"
                              value={ this.props.item.precio }
                            />

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
                            <InputLabel id="demo-simple-select-label"  className={classes.inputLabel}>Unidad</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={this.props.unidad}
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
                            <TextareaAutosize
                              style={{borderRadius:7}}
                              aria-label="minimum height"
                              rowsMin={10}
                              className={classes.textTarea}
                              placeholder="Descripcion"
                              onChange={ this.props.getDescripcion }
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
                            <Avatar alt={this.props.pathImage} src={this.props.pathImage} className={classes.large} />
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
                          //onClick={() => this.save()}
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
