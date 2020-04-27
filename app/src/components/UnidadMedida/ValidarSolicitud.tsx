import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';



//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'


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
    idEmpresa: store.login.data.empresa._id
  };
}

class ValidarSolicitud extends React.Component {

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
      /* Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      } */
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

					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={9}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            S
                          </Avatar>
                        }
                        title="Solicitud Unidad de Medida"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Input defaultValue="20" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="'03/04/2020'" disabled inputProps={{ 'aria-label': 'description' }} color='primary' />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="'Empresa'" disabled inputProps={{ 'aria-label': 'description' }} color='primary' />
                            </Grid>
                            
                          </Grid>
                          <Grid container spacing={3}>
                            
                            <Grid item lg={4}>
                            <Input value="Metro cuadrado" inputProps={{ 'aria-label': 'description' }} color='primary' />
                            </Grid>
                            <Grid item lg={4}>
                            <Input value="M2" inputProps={{ 'aria-label': 'description' }} color='primary' />
                            </Grid>
                            <Grid item lg={4}>
                            <Input value="Superficie" inputProps={{ 'aria-label': 'description' }} color='primary' />
                            </Grid>
                            
                          </Grid>
                          <Grid container spacing={3}>
                            
                            <Grid item lg={12}>
                            <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  defaultValue={1}
                                >
                                  <MenuItem value={1}>No resuelta</MenuItem>
                                  <MenuItem value={2}>Resuelta</MenuItem>
                                  
                                </Select>
                              </FormControl>
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
                              endIcon={<SendIcon></SendIcon>}
                              
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

ValidarSolicitud.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(ValidarSolicitud)
