import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid,TextField, Card, Box, Typography, CssBaseline, CardHeader, Avatar, TextareaAutosize,  Button, CardContent,  CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { FixedSizeList } from 'react-window';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PropTypes from "prop-types";

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
  requestReducer: {}
}) {
  return {
    requestReducer: store.requestReducer
  };
}



class Detail extends React.Component <{
  title: string,
  subtitle1:string,
  subtitle2:string,
  presupuesto: {
    _id: string,
    estado: string,
    updated_at: string,
    created_at: string,
    importe: string,
    empresa_demandante: {
      _id: string,
      nombre: string,
      cuit: string,
      usuario: string,
      email: string,
      estado: string,
      updated_at: string,
      created_at: string,
    },
    empresa_perteneciente: {
      _id: string,
      nombre: string,
      cuit: string,
      usuario: string,
      email: string,
      estado: string,
      updated_at: string,
      created_at: string
    },
    mensajes: [],
    items: [
      {
        "item": {
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
            }
        },
        "unidadDeMedida": {
          "_id": string,
          "nombre": string,
          "abreviatura": string,
          "updated_at": string,
          "created_at": string,
        },
        "cantidad": number
      }
    ]
  }|null,
  pedido: {
    "_id": string,
    "empresa_perteneciente_id": string,
    "empresa_demandante_id": string,
    "importe": string,
    "estado": string,
    "presupuesto_id": string,
    "updated_at": string,
    "created_at": string,
    "mensajes": [],
    "items": [
      {
        "item": {
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
          }
        },
        "unidadDeMedida": {
          "_id": string,
          "nombre": string,
          "abreviatura": string,
          "updated_at": string,
          "created_at": string,
        },
        "cantidad": number
      }
    ],
    "empresa_demandante": {
      "_id": string,
      "nombre": string,
      "cuit": string,
      "usuario": string,
      "clave": string,
      "email": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
    },
    "empresa_perteneciente": {
      "_id": string,
      "nombre": string,
      "cuit": string,
      "usuario": string,
      "clave": string,
      "email": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
    },
    "presupuesto": {
      "_id": string,
      "idEmpresaPerteneciente": string,
      "idEmpresaDemandante": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
      "importe": string,
      "items": [
        {
          "item": {
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
            }
          },
          "unidadDeMedida": {
            "_id": string,
            "nombre": string,
            "abreviatura": string,
            "updated_at": string,
            "created_at": string,
          },
          "cantidad": number
        }
      ],
      "mensajes": []
    }
  }|null,
  labelCompany: string,
  company: {
    _id: string,
    nombre: string,
    cuit: string,
    usuario: string,
    email: string,
    estado: string,
    updated_at: string,
    created_at: string
  },
  actions: any
}, {}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  constructor(props: any) {
    super(props);
		this.renderRow = this.renderRow.bind(this)
    this.state = {};
  }

  renderRow(props:any) {
    const { index, style } = props;

    let msj: any[] = []
    let empresa_demandante: any = {}
    let empresa_perteneciente: any = {}

    if(this.props.presupuesto !== null) {
      if(
        this.props.presupuesto !== undefined &&
        this.props.presupuesto.mensajes !== undefined &&
        this.props.presupuesto.mensajes.length
      ) {
        this.props.presupuesto.mensajes.map((mensaje: any) => {
          msj.push(mensaje)
        })
        empresa_perteneciente = this.props.presupuesto.empresa_perteneciente
        empresa_demandante = this.props.presupuesto.empresa_demandante
      }
    }

    if(this.props.pedido !== null) {
      if(
        this.props.pedido.presupuesto !== undefined &&
        this.props.pedido.presupuesto.mensajes !== undefined &&
        this.props.pedido.presupuesto.mensajes.length
      ) {
        this.props.pedido.mensajes.map((mensaje: any) => {
          msj.push(mensaje)
        })
        empresa_perteneciente = this.props.pedido.empresa_perteneciente
        empresa_demandante = this.props.pedido.empresa_demandante
      }
    }
  
    let empresa: any = {}

    if(
      empresa_perteneciente !== undefined &&
      empresa_perteneciente._id !== undefined &&
      empresa_perteneciente._id == msj[index].empresa_id
    ) {
      empresa = empresa_perteneciente
    }

    if(
      empresa_demandante !== undefined &&
      empresa_demandante._id !== undefined &&
      empresa_demandante._id == msj[index].empresa_id
    ) {
      empresa = empresa_demandante
    }

    let src: string = 'http://localhost:8000/'
    let nombre: string = ''

    if(
      empresa !== undefined
    ) {
      if(empresa.logo !== undefined) src = src + empresa.logo
      if(empresa.nombre !== undefined) nombre = empresa.nombre
    }

    msj.reverse()

  
    return (
      <ListItem button style={style} key={index}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={nombre} src={src} />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  //className={classes.inline}
                  color="textPrimary"
                >
                  {nombre}
                </Typography>
                {" — " + msj[index].comentario}
              </React.Fragment>
            }
          />
        </ListItem>
      </ListItem>
    );
  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    let msj: any[] = []

    if(this.props.presupuesto !== null) {
      if(
        this.props.presupuesto !== undefined &&
        this.props.presupuesto.mensajes !== undefined &&
        this.props.presupuesto.mensajes.length
      ) {
        this.props.presupuesto.mensajes.map((mensaje: any) => {
          msj.push(mensaje)
        })  
      }
    }

    if(this.props.pedido !== null) {
      if(
        this.props.pedido.presupuesto !== undefined &&
        this.props.pedido.presupuesto.mensajes !== undefined &&
        this.props.pedido.presupuesto.mensajes.length
      ) {
        this.props.pedido.mensajes.map((mensaje: any) => {
          msj.push(mensaje)
        })
      }
    }

    let estado: string = ''
    let importe: string = ''
    let itemNombre: string = ''
    let itemPrecio: string = ''
    let unidad: string = ''
    let cantidad: string = ''
    let imagen: string = ''
    
    if(this.props.pedido !== null) {
      estado = this.props.pedido.estado
      importe = this.props.pedido.importe
      itemNombre = this.props.pedido.items[0].item.nombre
      itemPrecio = this.props.pedido.items[0].item.precio
      unidad = this.props.pedido.items[0].unidadDeMedida.nombre
      cantidad = this.props.pedido.items[0].cantidad
      imagen = 'http://localhost:8000/' + this.props.pedido.items[0].item.foto[0]
    }

    if(this.props.presupuesto !== null) {
      estado = this.props.presupuesto.estado
      importe = this.props.presupuesto.importe
      itemNombre = this.props.presupuesto.items[0].item.nombre
      itemPrecio = this.props.presupuesto.items[0].item.precio
      unidad = this.props.presupuesto.items[0].unidadDeMedida.nombre
      cantidad = this.props.presupuesto.items[0].cantidad
      imagen = 'http://localhost:8000/' + this.props.presupuesto.items[0].item.foto[0]
    }
    
    return(

      <div className={classes.root}>
        <CssBaseline />
       {this.props.appBar}
        {this.props.drawer}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

              <Grid item lg={12}>
                <Card className={fixedHeightCard}>
                  <CardHeader 
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        D
                      </Avatar>
                    }
                    title={this.props.title}
                    
                  />

                  <CardContent>
              
                      <Grid container >
                      <CardContent>
                        <Typography variant="h5" component="h2">
                           {this.props.subtitle1}
                           <span style={{paddingLeft:20}}> <Button variant="outlined" style={{color:'#ffba00', borderColor:'#ffba00'}}>{ estado }</Button></span>
                        </Typography>
                    </CardContent>
                        <Grid container>
                          <Grid item lg={4} xs={12}>
                            <TextField disabled id="standard-required" label={ this.props.labelCompany } value={ this.props.company.nombre }  className={classes.input}  />
                          </Grid>
                          <Grid item lg={4} xs={12}>
                            <TextField disabled id="standard-required" label="Importe" value={ importe }  className={classes.input}  InputLabelProps={{ shrink: true }}/>
                          </Grid>
                          <Grid item lg={4}  xs={12}>
                          <FixedSizeList height={200} width={370} itemSize={100} itemCount={msj.length} >
                            {this.renderRow}
                          </FixedSizeList>
                            {/* <TextareaAutosize disabled style={{borderRadius:7}} value={msj} aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Mensaje"  /> */}
                          </Grid>
                        </Grid>
                        <CardContent>
                        <Typography variant="h5" component="h2">
                           {this.props.subtitle2}
                        </Typography>
                    </CardContent>
                        <Grid container >
                          <Grid item xs={12} sm={4} >
                          <Grid item lg={ 6 }  xs={6}>
                            <TextField disabled id="standard-required" label="Nombre" value={ itemNombre }  className={ classes.input }  />
                          </Grid>
                          <Grid item lg={ 6 }  xs={6}>
                            <TextField disabled id="standard-required" label="Precio" value={ itemPrecio }  className={ classes.input }  />
                          </Grid>
                         
                          

                         
                          
                        </Grid>

                        <Grid item xs={12} sm={4}  >
                        <Grid item lg={6}  xs={6}>
                            <TextField disabled id="standard-required" label="Unidad de Medida" value={ unidad }  className={classes.input}  />
                          </Grid> 
                          
                          <Grid item lg={6}  xs={6}>
                            <TextField disabled id="standard-required" label="Cantidad" value={ cantidad }  className={ classes.input }  />
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                      
                        <Grid item lg={3} xs={12}>
                          <Avatar className={classes.fotoItem} alt={imagen}  src={imagen} />
                          </Grid> 
                          
                          
                        </Grid>

                        </Grid>
                      </Grid>
                  
                  </CardContent>
                  <CardActions>
                    <Grid container  direction = 'column' alignItems = 'flex-end'  >
                      <Grid item lg={12} >
                        {this.props.actions(classes)}
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

export default connect(mapStateToProps)(Detail)