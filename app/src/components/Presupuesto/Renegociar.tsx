import React from 'react';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import {TextField, Container, Grid, Card, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent,CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';





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

class Renegociar extends React.Component <{
  classes: any,
  getCantidadItem: any,
  getComentario: any,
  getPrecioSugerido:any,
  save: any,
  presupuesto: {
    _id: string,
    estado: string,
    updated_at: string,
    created_at: string,
    importe: string,
    importe_anterior: string,
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
  company: {
    _id: string,
    nombre: string,
    cuit: string,
    usuario: string,
    email: string,
    estado: string,
    updated_at: string,
    created_at: string,
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
							<Grid container spacing={5}>

                <Grid item lg={12} xs={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            R
                          </Avatar>
                        }
                        title="Renegociacion"
                        
                      />

                    <CardContent>
                     
                        <Grid container>
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            Datos del presupuesto
                          </Typography>
                          <Grid container spacing={1}>
                            <Grid item lg={4} xs={12}>
                              <TextField disabled id="standard-required" label="Empresa demandada" value={this.props.presupuesto.empresa_perteneciente.nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                              <TextField disabled id="standard-required" label="Email" value={this.props.presupuesto.empresa_perteneciente.email} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12} >
                              <TextField disabled id="standard-required" label="Telefono" value="35764236987" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                              <TextField disabled id="standard-required" label="Provincia" value="Cordoba" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                              <TextField disabled id="standard-required" label="Ciudad" value="San Francisco" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                              <TextField disabled id="standard-required" label="CP" value="2400" className={classes.input}  />
                            </Grid>
                          </Grid>
                        </CardContent>
                          
                          <CardContent>
                        <Typography variant="h5" component="h2">
                          Presupuesto
                          <span style={{paddingLeft:20}}>
                            <Button variant="outlined" style={{color:'#ffba00', borderColor:'#ffba00'}}>estado</Button>
                          </span>
                        </Typography>
                    </CardContent>
                          <Grid container  >
                           
                            <Grid item lg={4} xs={6}>
                            <TextField disabled id="standard-required" label="Producto" value={this.props.presupuesto.items[0].nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                            <TextField disabled id="standard-required" label="Cantidad" value="cantidad" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                            <TextField disabled id="standard-required" label="Unidad" value="unidadDeMedida" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                            <TextField disabled id="standard-required" label="Precio" value={this.props.presupuesto.items[0].precio} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                            <TextareaAutosize style={{borderRadius:7}} disabled aria-label="minimum height" rowsMin={8} className={classes.textTarea} value={msj}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                            <Avatar className={classes.fotoItem} alt={this.props.pathImage}  src={this.props.pathImage} />
                            </Grid>
                          </Grid>
                          <CardContent>
                        <Typography variant="h5" component="h2">
                          Renegociacion
                        </Typography>
                    </CardContent>
                          <Grid container >
                            <Grid item lg={4} xs={6}>
                            <CssTextField className={classes.margin} id="custom-css-standard-input" label="Cantidad" type="number" onChange={this.props.getCantidadItem} />
                            
                            </Grid>
                            <Grid item lg={4} xs={6}>
                            <CssTextField className={classes.margin} id="custom-css-standard-input" label="Importe sugerido" type="number" onChange={this.props.getPrecioSugerido}   />
                      
                            </Grid>
                            <Grid item lg={4} xs={12}>
                            <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={8} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}  />
                            </Grid>
                          </Grid>
                         
                            
                        </Grid>
                    
                    </CardContent>
                    <CardActions>

                        <Grid container  direction = 'column' alignItems = 'flex-end'  >

                          <Grid item lg={12} >

                            <Button
                              variant="contained"
                              color='primary'
                              size="small"
                              className={classes.button}
                              startIcon={<SendIcon />}
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



export default Renegociar
