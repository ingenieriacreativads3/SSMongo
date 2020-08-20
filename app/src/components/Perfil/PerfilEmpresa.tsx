import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import { Link} from "react-router-dom";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, TextareaAutosize,Divider, ListSubheader, CardActionArea, CardMedia, Card, Box, Typography, TextField, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import * as registerActions  from './../../store/actions/register'
import  foto  from './../Login/img/logo.png'
import * as ubicacionActions from './../../store/actions/ubicacion'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import VisibilityIcon from '@material-ui/icons/Visibility';
//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../DrawerInicio';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';


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
  ubicacionReducer: any,
  registerReducer:{}
}) {
  return {
    empresa: store.registerReducer,
    ubicacionReducer: store.ubicacionReducer
  };
}

class PerfilEmpresa extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
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
}, {
  provincia: string,
  municipio: string,
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
  
}>  {

	props: any
	static propTypes: any
	static defaultProps: any

 
  constructor(props: any) {
    super(props);
    this.state = {
      provincia: '',
      municipio: '',
      empresa: {
        "_id": '',
        "nombre": '',
        "cuit": '',
        "usuario": '',
        "email": '',
        "estado": '',
        "updated_at": '',
        "created_at": '',
        "domicilioLegal": '',
        "localidad": '',
        "logo": '',
        "mostrar_perfil": false,
        "provincia": '',
        "telefono": '',
        "clave": '',
      }
    };
  }

 

/*   componentWillMount() {

    this.props.dispatch(registerActions.getEmpresa(this.props.match.params.id))


  } */


  render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
        const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);

    return(

      <div className={classes.root}>
        <CssBaseline />
       {this.props.appBar}
         {this.props.drawer}
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                
                  <Grid item xs={12}>
                    <Card className={fixedHeightCard}>
                      <Grid container spacing={3} >
                        <Grid item xs={12} sm={6} container
                                direction="column"
                                justify="space-around"
                                alignItems="center">
                          <Typography className = {classes.nombreEmpresa} variant="h2" component="h3" gutterBottom>
                              Suppliers Store
                          </Typography>
                                  
                            <img src={foto} className = {classes.img}></img> 

                            {/* <Box className={classes.datos} > */}
                            <Grid container>
                            <Grid item lg={12} xs={12}  >
                        <Typography variant="h5" className={classes.item} gutterBottom>
                            <BuildOutlinedIcon fontSize="large" style={{ color: '#d93211' }} />
                            Construccion
                        </Typography>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                        <Typography variant="h5"  className={classes.item} gutterBottom>
                            <LocationOnIcon fontSize="large" style={{ color: '#d93211' }} />
                            San Francisco - Cordoba
                        </Typography>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                        <Typography variant="h5"className={classes.item}   gutterBottom>
                            <PhoneIcon fontSize="large" style={{ color: '#d93211' }} />
                            35644225394
                        </Typography>
                        </Grid>
                        </Grid>
                        {/* </Box> */}

                        </Grid>
                         <Grid  item xs={12} sm={6} container
                                direction="column"
                                justify="space-around"
                                alignItems="center">
                          <Box  className={classes.formularioContacto} flexGrow={3} border={2} borderRadius={16} borderColor="#7f7f7f">
                         <Typography className={classes.titulo}  variant="h4" component="h3" gutterBottom>
                              Contactanos
                          </Typography> 

                          
                          <TextField
                              className={classes.datoContacto}
                            variant="outlined"
                            disabled
                            value={ this.state.empresa.usuario }
                              label="Nombre"
                              type="text"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />       

                          <TextField
                            className={classes.datoContacto}
                            variant="outlined"
                            disabled
                            value={this.state.empresa.email}
                              label="Email"
                              type="email"
                              InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                },
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.cssOutlinedInput,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />

                            <TextareaAutosize  style={{borderRadius:7}} aria-label="minimum height" rowsMin={10} placeholder="Mensaje" className={classes.textTarea}  onChange={this.props.getComentario} />

                            <Button
                              variant="contained"
                              color='primary'
                              size="small"
                              className={classes.buttonEnviar}
                              startIcon={<SendIcon />}
                            //   onClick={() => this.register()}
                            >
                              Enviar
                            </Button>

                            </Box>

                            
                        </Grid> 

                       
                      
                        

                        <Grid item xs={12} container
                                direction="column"
                                justify="space-around"
                                alignItems="center">
                        <ListSubheader  className={classes.titleProductos}  >
                                    
                            Nuestros Productos
                        </ListSubheader> 
                        <hr></hr>
                        </Grid>
                       
                        <Grid item xs={6} sm={3}>
                        <Card className={fixedHeightCardCatalog}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="Samsung A20"
                              height="140"
                              image={foto}
                              title="Samsung A20"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                asdasd
                              </Typography>
                              <Typography variant="subtitle1" component="h2">
                                $16000
                              </Typography>
                            
                            </CardContent>
                          </CardActionArea>
                          <CardActions >
                          <Link to="/item/detalle/:id">
                            <IconButton aria-label="ver" className={classes.iconButton}> 
                              <VisibilityIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            </Link>
                          
                            
                          </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Card className={fixedHeightCardCatalog}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="Samsung A20"
                              height="140"
                              image={foto}
                              title="Samsung A20"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                asdasd
                              </Typography>
                              <Typography variant="subtitle1" component="h2">
                                $16000
                              </Typography>
                            
                            </CardContent>
                          </CardActionArea>
                          <CardActions >
                          <Link to="/item/detalle/:id">
                            <IconButton aria-label="ver" className={classes.iconButton}> 
                              <VisibilityIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            </Link>
                          
                            
                          </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Card className={fixedHeightCardCatalog}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="Samsung A20"
                              height="140"
                              image={foto}
                              title="Samsung A20"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                asdasd
                              </Typography>
                              <Typography variant="subtitle1" component="h2">
                                $16000
                              </Typography>
                            
                            </CardContent>
                          </CardActionArea>
                          <CardActions >
                          <Link to="/item/detalle/:id">
                            <IconButton aria-label="ver" className={classes.iconButton}> 
                              <VisibilityIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            </Link>
                          
                            
                          </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Card className={fixedHeightCardCatalog}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="Samsung A20"
                              height="140"
                              image={foto}
                              title="Samsung A20"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                asdasd
                              </Typography>
                              <Typography variant="subtitle1" component="h2">
                                $16000
                              </Typography>
                            
                            </CardContent>
                          </CardActionArea>
                          <CardActions >
                          <Link to="/item/detalle/:id">
                            <IconButton aria-label="ver" className={classes.iconButton}> 
                              <VisibilityIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            </Link>
                          
                            
                          </CardActions>
                        </Card>
                        </Grid>
            
                    
                   
									
								
                </Grid>
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


export default connect(mapStateToProps)(PerfilEmpresa)