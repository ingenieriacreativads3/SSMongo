import React from 'react';
import { Link} from "react-router-dom";
import { Grid, Paper, TextareaAutosize,Divider, ListSubheader, CardMedia, Card, Box, Typography, TextField, CssBaseline, Button, CardContent,  FormControl} from '@material-ui/core';
import  foto  from './../Login/img/logo.png'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { connect } from 'react-redux'
import SendIcon from '@material-ui/icons/Send';

import * as empresaActions from './../../store/actions/empresa'
import * as itemActions from './../../store/actions/item'

function mapStateToProps(store: {
  ubicacionReducer: any,
  registerReducer: any,
  empresaReducer: any,
  itemReducer: any,
}) {
  return {
    register: store.registerReducer,
    ubicacionReducer: store.ubicacionReducer,
    itemReducer: store.itemReducer,
    empresaReducer: store.empresaReducer,
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

  componentWillMount = () => {
    this.props.dispatch(empresaActions.getEmpresa(this.props.match.params.id))
    this.props.dispatch(itemActions.getCatalogo(this.props.match.params.id))
  }

  render(){

    const classes = this.props.classes
    
    let empresa: any = {}
    let items: any[] = []

    if(this.props.empresaReducer.perfil) {
      empresa = this.props.empresaReducer.data.empresa
    }

    if(this.props.itemReducer.fetched) {
      items = this.props.itemReducer?.data?.items || []
    }

    return(

      <div className={classes.root}>
        <CssBaseline />
       {this.props.appBar}
         {this.props.drawer}
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"

        >
        <Paper style={{ padding: 20, margin:50}}>
          <FormControl>
          <form id="formItem">
        <Grid container spacing={3} >
          <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start" xs={12} sm={6}>
          <Typography className = {classes.nombreEmpresa} variant="h2" component="h3" gutterBottom>
              { empresa.nombre }
          </Typography>
           <Box>      
            <img src={'http://localhost:8000/' + empresa.logo} className={classes.img}></img> 
          
              <Typography variant="h5" className={classes.item} gutterBottom>
                  <BuildOutlinedIcon fontSize="large" style={{ color: '#d93211' }} />
                  Construccion
              </Typography>
              
             
              <Typography variant="h5"  className={classes.item} gutterBottom>
                  <LocationOnIcon fontSize="large" style={{ color: '#d93211' }} />
                  { empresa.localidad } - { empresa.provincia }
              </Typography>
              
              
              <Typography variant="h5"className={classes.item}   gutterBottom>
                  <PhoneIcon fontSize="large" style={{ color: '#d93211' }} />
                  { empresa.telefono }
              </Typography>
           
        </Box>
          </Grid>
          <Grid container direction="row"
          justify="center"
          alignItems="flex-start" xs={12} sm={6}>
          <Box   className={classes.formularioContacto}  border={2} borderRadius={16} borderColor="#7f7f7f">
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
        </Grid>
        
          <Grid item xs={12} sm={12} container
                direction="column"
                justify="space-around"
                alignItems="center">
          
            <ListSubheader  className={classes.titleProductos}>
              <Divider></Divider>       
              Nuestros Productos
            </ListSubheader> 
          </Grid>
          

          <Grid item xs={12} sm={3}>
            {
              items.map((item: {
                item: {
                  _id: string,
                  foto: string[],
                  nombre: string,
                  precio: string,
                  unidad_de_medida: {
                    nombre: string
                  }
                }
              }) => {
                return <Link to={ '/item/detalle/' + item.item._id } style={{textDecoration:'none'}}>
                  <Card className={classes.cardProducto} >
                      <CardMedia
                        component="img"
                        alt={ item.item.nombre }
                        height="140"
                        image={ 'http://localhost:8000/' + item.item.foto[0] }
                        title={ item.item.nombre }
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" >
                          { item.item.nombre }
                        </Typography>
                      
                        <Typography gutterBottom variant="h5" component="h2">
                          ${ item.item.nombre }  {<Typography style={{display:'inline-block'}} variant="subtitle1" color="textSecondary"> x { item.item.unidad_de_medida.nombre }</Typography>}
                        </Typography>
                        
                      </CardContent>
                  </Card>
                  </Link>
              })
            }
          </Grid>
            

            

        </form>
          </FormControl>
        
        </Paper>  
        </Grid>
            {this.props.footer}
					</main>
		 </div>
    );
  }
}


export default connect(mapStateToProps)(PerfilEmpresa)