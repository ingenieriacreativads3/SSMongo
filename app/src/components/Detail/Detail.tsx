import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid,TextField, Card, Box, Typography, CssBaseline, CardHeader, Avatar, TextareaAutosize,  Button, CardContent,  CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

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
  empresa: string,
  importe: string,
  estado: string,
  cantidad: string,
  item: {
    nombre: string,
    precio: string,
    unidad: string
  },
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
        _id: string,
        foto: string[],
        nombre: string,
        precio: string,
        descrpcion: string,
        mostrarPrecio: boolean,
        unidad_de_medida_id: string,
        updated_at: string,
        created_at: string,
        catalogo_id: string,
      }
    ]
  },
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
    this.state = {};
  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    let msj: string = ''

    if(
      this.props.presupuesto !== undefined &&
      this.props.presupuesto.mensajes !== undefined &&
      this.props.presupuesto.mensajes.length
    ) {
      this.props.presupuesto.mensajes.map((mensaje: {
        comentario: string
      }) => {
        msj = msj + mensaje.comentario
      })  
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
                    <div className={classes.root}>
                      <Grid container spacing={3}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                           {this.props.subtitle1}
                           <span style={{paddingLeft:20}}> <Button variant="outlined" style={{color:'#ffba00', borderColor:'#ffba00'}}>{this.props.presupuesto.estado}</Button></span>
                        </Typography>
                    </CardContent>
                        <Grid container>
                          <Grid item lg={4}>
                            <TextField disabled id="standard-required" label={this.props.labelCompany} value={this.props.company.nombre}  className={classes.input}  />
                          </Grid>
                          <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Importe" value={this.props.presupuesto.importe}  className={classes.input}  InputLabelProps={{ shrink: true }}/>
                          </Grid>
                          <Grid item lg={4}>
                          <TextareaAutosize disabled style={{borderRadius:7}} value={msj} aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Mensaje"  />
                          </Grid>
                        </Grid>
                        <CardContent>
                        <Typography variant="h5" component="h2">
                           {this.props.subtitle2}
                        </Typography>
                    </CardContent>
                        <Grid container >
                          <Grid item lg={ 3 }>
                            <TextField disabled id="standard-required" label="Nombre" value={ this.props.presupuesto.items[0].nombre }  className={ classes.input }  />
                          </Grid>
                          <Grid item lg={ 3 }>
                            <TextField disabled id="standard-required" label="Precio" value={ this.props.presupuesto.items[0].precio }  className={ classes.input }  />
                          </Grid>
                          <Grid item lg={3}>
                          <Avatar className={classes.fotoItem} alt={this.props.pathImage}  src={this.props.pathImage} />
                          </Grid>
                          
                        </Grid>

                        <Grid container>
                          <Grid item lg={3}>
                            <TextField disabled id="standard-required" label="Unidad de Medida" value={this.props.item.unidad}  className={classes.input}  />
                          </Grid> 
                          <Grid item lg={3}>
                            <TextField disabled id="standard-required" label="Cantidad" value={ this.props.cantidad }  className={ classes.input }  />
                          </Grid>
                          
                        </Grid>
                        
                      </Grid>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >
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