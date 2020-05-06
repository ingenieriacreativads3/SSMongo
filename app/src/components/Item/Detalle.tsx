import React from 'react'
import clsx from 'clsx'
import foto from './../Login/img/photo2.png';


import { Container, Grid, Card, Box, Typography,Divider, CssBaseline,  Button, CardContent,  CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import * as Login from './../../store/actions/login'


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
    // idEmpresa: store.login.data.empresa._id
  };
}

class Detalle extends React.Component {

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
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

              <Grid item xs={12}  >
                <Card className={fixedHeightCard}>
                  
                  <CardContent>
                    
                        <Grid container spacing={3} >
                          <Grid item xs={6}  >
                            <Typography gutterBottom variant="h5" component="h2">
                                SAMSUNG GALAXY A20 
                            </Typography>
                            <Typography variant="subtitle1" component="h2">
                              $16000
                            </Typography>
                            <Typography>
                              <Link href="#" variant="body2" className={classes.Link}>
                              {"Vendedor: Symsa"}
                              </Link>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2" >
                              Descripción
                            </Typography>
                            <Typography variant="subtitle2" component="h4">
                              El Samsung Galaxy A20 completa la gama Galaxy Ax entre el Galaxy A10 y el Galaxy A30. Con una pantalla Infinity-V HD+ de 6.4 pulgadas, el Galaxy A20 está potenciado por un procesador Exynos 7884 de ocho núcleos, con 3GB de memoria RAM y 32GB de almacenamiento interno. La cámara principal del Galaxy A20 es dual de 13 MP + 5 MP y la cámara para selfies es de 8 megapixels. Completando sus características, el Galaxy A20 tiene una gran batería de 4000 mAh con carga rápida, lector de huellas, y corre Android 9.0 Pie.
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2" >
                              Características
                            </Typography>
                            <Typography variant="subtitle2" component="h4">
                              El Samsung Galaxy A20 completa la gama Galaxy Ax entre el Galaxy A10 y el Galaxy A30. Con una pantalla Infinity-V HD+ de 6.4 pulgadas, el Galaxy A20 está potenciado por un procesador Exynos 7884 de ocho núcleos, con 3GB de memoria RAM y 32GB de almacenamiento interno. La cámara principal del Galaxy A20 es dual de 13 MP + 5 MP y la cámara para selfies es de 8 megapixels. Completando sus características, el Galaxy A20 tiene una gran batería de 4000 mAh con carga rápida, lector de huellas, y corre Android 9.0 Pie.
                            </Typography>
                              
                            
                              
                          </Grid>
                          <Grid item  xs={6} spacing={3} container
                              direction="column"
                              justify="space-around"
                              alignItems="center">
                      
                                
                                  <img src={foto} className = {classes.img}></img>
                                <div>
                                  <Link href="/pedido/nuevo" className={classes.button}>
                                  <Button
                                  type="button"
                                  
                                  variant="contained"
                                  className={classes.button}
                                  // onClick={this.ingresar}
                                  >
                                  Solicitar pedido
                                  </Button>
                                </Link>
                                <Link href="/presupuesto/nuevo" className={classes.button}>
                                  <Button
                                  type="button"
                                  
                                  variant="contained"
                                  className={classes.button}
                                  // onClick={this.ingresar}
                                  >
                                  Solicitar presupuesto
                                  </Button>
                                </Link>
                                </div>
                              
                              
                          </Grid>
                          
                        </Grid>
                        
                    
                  </CardContent>

                
                  
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

Detalle.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Detalle)