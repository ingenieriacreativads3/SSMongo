import React from 'react';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import AppBar from '../../components/AppBar'
import {TextField, Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input,  CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

import * as PresupuestoAction from './../../store/actions/login'


//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

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
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight2);

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
                        title="Nuevo Presupuesto"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                        <CardContent>
                        <Typography variant="h5" component="h2">
                          Mis datos
                        </Typography>
                       </CardContent>
                          <Grid container spacing={3}>
                         
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Empresa" defaultValue="CorpuSoft" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Email" defaultValue="corpusoft@cs.com.ar" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Telefono" defaultValue="3512469439" className={classes.input}  />
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Provincia" defaultValue="Cordoba" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Ciudad" defaultValue="San Francisco" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="CP" defaultValue="2400" className={classes.input}  />
                            </Grid>
                          </Grid>
                          <CardContent>
                        <Typography variant="h5" component="h2">
                          Datos de presupuesto
                        </Typography>
                       </CardContent>
                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Nombre" defaultValue="Samsung A20" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Unidad de Medida" defaultValue="Unidad" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Precio" defaultValue="10000" className={classes.input}  />
                            </Grid>

                            
                          </Grid>
                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                          <CssTextField className={classes.margin} id="custom-css-standard-input" label="Cantidad"   type="number" />

                            </Grid>
                         
                            <Grid item lg={6}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={10} placeholder="Mensaje" className={classes.textTarea}  />
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
