import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

import { Container, Grid, Card, Box, Typography, TextField, CssBaseline, CardHeader, Avatar, Button, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import MenuLateral from '../DrawerInicio'

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
    // Item: store.Item,
    // idEmpresa: store.login.data.empresa._id
  };
}

class Nuevo extends React.Component {

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
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight2);

    return(

      <div className={classes.root}>
        <CssBaseline />
        {this.props.appBar}
        {this.props.drawer}
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={9}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            N
                          </Avatar>
                        }
                        title="Nueva Unidad de Medida"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container >
                          <Grid container >
                            {/* <Grid item lg={6} xs={12}>
                            <CssTextField className={classes.inputNuevo} disabled id="custom-css-standard-input" label="Usuario"  defaultValue="CorpuSoft"  />
                          
                            </Grid> */}
                            <Grid item lg={6}  xs={12}>
                              <CssTextField
                                className={classes.inputNuevo}
                                id="custom-css-standard-input"
                                label="Unidad"
                                onChange={ this.props.getUnidad }
                              />

                           
                            </Grid>
                            <Grid item lg={6}  xs={12}>
                              <CssTextField
                                className={classes.inputNuevo}
                                id="custom-css-standard-input"
                                label="Simbolo"
                                onChange={ this.props.getSimbolo }
                              />

                          
                            </Grid>
                          </Grid>
                         
                          
                        </Grid>
                      </form>
                    </CardContent>
                    <CardActions>

                        <Grid container  direction = 'column' alignItems = 'flex-end'  >

                          <Grid item lg={12} xs={12}>

                            <Button
                              variant="contained"
                              color='primary'
                              size="small"
                              className={classes.buttonNuevo}
                              endIcon={<SendIcon />}
                              onClick={ this.props.save }
                            >
                             Enviar
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

Nuevo.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Nuevo)
