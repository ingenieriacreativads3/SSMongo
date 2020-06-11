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

class Nuevo extends React.Component <{
  classes: any,
  getNombre: any,
  getPrecio: any,
  getMagnitud: any,
  getCaracteristicas: any,
  getDescripcion: any,
  getMostrarPrecio: any,
  getFoto: any,
  save: any,
  unidadesDeMedida: any[]
}, {}> {

  props: any
	static propTypes: any
  static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
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
                            <CssTextField 
                              className={classes.margin}
                              id="custom-css-standard-input"
                              label="Nombre"
                              onChange={ this.props.getNombre } 
                            />
                          </Grid>
                          <Grid item lg={4}>
                            <CssTextField
                              className={classes.margin}
                              id="custom-css-standard-input"
                              label="Precio"
                              type="number"
                              onChange={ this.props.getPrecio }
                            />
                          </Grid>
                          <Grid item lg={4}>
                            <FormControlLabel className={classes.Checkbox}
                              control={
                                <Checkbox
                                  // checked = "false"
                                  onChange={ this.props.getMostrarPrecio }
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
                                  onChange={this.props.getMagnitud}
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
                              aria-label="minimum
                              height"
                              rowsMin={10}
                              className={classes.textTarea}
                              placeholder="Caracteristicas"
                              onChange={ this.props.getCaracteristicas }
                            />
                          </Grid>
                          <Grid item lg={4}>
                            <TextareaAutosize
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
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    onClick = {this.props.getFoto}
                                  />
                                </IconButton>
                              </Button>
                            </label> 
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
                          onClick={ this.props.save }
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


export default Nuevo
