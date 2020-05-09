import React from 'react';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import AppBar from '../../components/AppBar'

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input,  CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';

import * as PedidoAction from './../../store/actions/login'


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
   /*  Item: store.Item,
    idEmpresa: store.login.data.empresa._id */
  };
}

class Nuevo extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
/*  this.onSubmit = this.onSubmit.bind(this);
    this.getTelefono = this.getTelefono.bind(this);
    this.getProvincia = this.getProvincia.bind(this);
    this.getLocalidad = this.getLocalidad.bind(this);
    this.getCodigo = this.getCodigo.bind(this);
    this.getMensaje = this.getMensaje.bind(this);
    this.getCantidad = this.getCantidad.bind(this);
    this.getUnidad = this.getUnidad.bind(this);  */
    this.state = {
        Presupuesto: {
            items: [
              {
                _id: '5de5976473e8542058470864'
              }
            ],
            idEmpresaDemandante: '5de181d5c062d16c024321e4',
            telefonoDemandante: '',
            provinciaDemandante: '',
            localidadDemandante: '',
            codigoPostalDemandante: '',
            mensaje: '',
            cantidad: 0,
            unidadDeMedida: '',
            idEmpresaDemandada: '5de181d5c062d16c024321e4'
          }
    };
  }
/* onSubmit() {
    this.props.dispatch(PresupuestoAction.nuevo(

      this.state.Presupuesto.idEmpresaDemandada,
      this.state.Presupuesto.idEmpresaDemandante,
      this.state.Presupuesto.items

    ));
  }

 getTelefono(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        telefonoDemandante: e.target.value
      }
    });

  }

  getProvincia(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        provinciaDemandante: e.target.value
      }
    });

  }

  getLocalidad(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        localidadDemandante: e.target.value
      }
    });

  }

  getCodigo(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        codigoPostalDemandante: e.target.value
      }
    });

  }

  getMensaje(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        mensaje: e.target.value
      }
    });

  }

  getCantidad(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        cantidad: e.target.value
      }
    });

  }

  getUnidad(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        unidadDeMedida: e.target.value
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

                <Grid item lg={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            N
                          </Avatar>
                        }
                        title="Nuevo Pedido"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Input defaultValue="Samsung Galaxy A20" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="CorpuSoft" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="corpusoft@cs.com.ar" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Input defaultValue="3512469439" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="Cordoba" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="San Francisco" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Input defaultValue="2400" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="Bv.Roca 1500" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            
                          </Grid>
                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <Input type="number" placeholder="Cantidad" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>

                            <Grid item lg={4}>
                            <Input defaultValue="Unidad" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Mensaje"  />
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
                              startIcon={<SendIcon />}
                            //   onClick={() => this.register()}
                            >
                              Enviar
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
