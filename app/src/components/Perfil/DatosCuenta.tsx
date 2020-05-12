import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import * as Login from './../../store/actions/login'


//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../Drawer';


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

class DatosCuenta extends React.Component {

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
                            D
                          </Avatar>
                        }
                        title="Mis datos"
                         
                      />
                        <FormControlLabel
                                  control={
                                    <Checkbox
                                      style ={{
                                        color: "#d93211",
                                      }}
                                    />
                                  }
                                  label="Mostrar Perfil"
                                />


                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                        <Grid container spacing={3}>
                            <Typography gutterBottom variant="h5" component="h2" >
                              Datos de cuenta
                            </Typography>
                            <Grid item lg={4}>
                              <Input value="CorpuSA" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            <Grid item lg={4}>
                              <Input  value="corpu@sa.com.ar" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            <Grid item lg={4}>
                            <Input  value="micontraseña" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                          </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                          <Typography gutterBottom variant="h5" component="h2" >
                              Datos de empresa
                            </Typography>
                            <Grid item lg={4}>
                            <Input  value="CorpuSoft" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            <Grid item lg={4}>
                            <Input  value="CorpuSoft SA" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            <Grid item lg={4}>
                            <Input  value="Bv. Roca 1200" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Input  value="San Francisco" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            <Grid item lg={4}>
                            <Input  value="Cordoba" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
                            </Grid>
                            <Grid item lg={4}>
                            <Input  value="03564421589" inputProps={{ 'aria-label': 'description' }} className={classes.input} />
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

DatosCuenta.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(DatosCuenta)