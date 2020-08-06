import React from 'react';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import AppBar from '../../components/AppBar'
import { withStyles } from '@material-ui/core/styles';

import { Container, Grid, Card, Box, Typography, CssBaseline, CardHeader, Avatar, TextField, Button, CardContent,CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import MenuLateral from './../DrawerInicio'

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

class Nuevo extends React.Component <{
  classes: any,
  getCantidadItem: any,
  getComentario: any,
  save: any,
  item: {
    "_id": string,
    "foto": string[],
    "nombre": string,
    "precio": string,
    "descrpcion": string,
    "mostrarPrecio": boolean,
    "unidad_de_medida_id": string,
    "updated_at": string,
    "created_at": string,
    "catalogo_id": string,
    "unidad_de_medida": {
      "_id": string,
      "nombre": string,
      "abreviatura": string,
      "updated_at": string,
      "created_at": string,
    },
    "catalogo": {
      "_id": string,
      "empresa_id": string,
      "updated_at": string,
      "created_at": string,
      "empresa": {
        "_id": string,
        "nombre": string,
        "cuit": string,
        "usuario": string,
        "clave": string,
        "email": string,
        "estado": string,
        "updated_at": string,
        "created_at": string,
      }
    }
  },
  empresa: {
    "_id": string,
    "nombre": string,
    "cuit": string,
    "usuario": string,
    "email": string,
    "estado": string,
    "updated_at": string,
    "created_at": string,
    "domicilioLegal": string,
    "localidad": string,
    "logo": string,
    "mostrar_perfil": boolean,
    "provincia": string,
    "telefono": string,
    "clave": string,
  }
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
       {this.props.appBar}
        {this.props.drawer}
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container >

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
                      
                        <Grid container >
                        <CardContent>
                        <Typography variant="h5" component="h2">
                          Mis datos
                        </Typography>
                    </CardContent>
                          <Grid container >
                            
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Empresa" value={this.props.empresa.nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Email" value={this.props.empresa.email} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Domicilio" value={this.props.empresa.domicilioLegal} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Provincia" value={this.props.empresa.provincia} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Ciudad" value={this.props.empresa.localidad} className={classes.input}  />
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Telefono" value={this.props.empresa.telefono} className={classes.input}  />
                            </Grid>
                          </Grid>
                          
                          <CardContent>
                            <Typography variant="h5" component="h2">
                              Datos de pedido
                            </Typography>
                          </CardContent>
                          <Grid container >
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Nombre" value={this.props.item.nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Precio" value={this.props.item.precio} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Unidad" value={this.props.item.unidad_de_medida.nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <CssTextField className={classes.margin} id="custom-css-standard-input" label="Cantidad" type="number" onChange={this.props.getCantidadItem}/>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                              <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}  />
                            </Grid>
                          </Grid>
                            
                        </Grid>
                      </form>
                    </CardContent>
                    <CardActions>

                        <Grid container  direction='column' alignItems='flex-end'>

                          <Grid item lg={12} >

                            <Button
                              variant="contained"
                              color='primary'
                              size="small"
                              className={classes.button}
                              startIcon={<SendIcon />}
                              onClick={() => this.props.save(this.props.item._id, this.props.item.catalogo.empresa._id)}
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
