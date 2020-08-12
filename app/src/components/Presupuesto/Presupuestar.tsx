import React from 'react';
import clsx from 'clsx'
import {TextField, ListItem, ListItemAvatar, ListItemText, Container, Grid, Card,  Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent, CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';

//import * as ItemAction from "../../store/actions/ItemAction";

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

class Presupuestar extends React.Component <{
  classes: any,
  getCantidadItem: any,
  getComentario: any,
  getImporte:any,
  save: any,
  cancelar: any,
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
        mostrarPrecio: false,
        unidad_de_medida_id: string,
        updated_at: string,
        created_at: string,
        catalogo_id: string,
      }
    ]
  }
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
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

  componentWillReceiveProps() {

    if(this.props.presupuesto !== undefined) {
      this.setState({
        presupuesto: this.props.presupuesto
      })
    }

  }

  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    let msj: string = ''

    if(
      this.props.presupuesto !== null &&
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
							<Grid container >

                <Grid item lg={12} xs={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            P
                          </Avatar>
                        }
                        title="Presupuestacion"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container>
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            Solicitante
                          </Typography>
                        </CardContent>
                          <Grid container >
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Empresa" value={this.props.presupuesto.empresa_demandante.nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Email" value={this.props.presupuesto.empresa_demandante.email} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Telefono" value="" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Provincia" value="" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Ciudad" value="" className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="CP" value="" className={classes.input}  />
                            </Grid>
                            
                          </Grid>
                          <CardContent>
                        <Typography variant="h5" component="h2">
                          Presupuesto solicitado
                          <span style={{paddingLeft:20}}>
                            <Button variant="outlined" style={{color:'#ffba00', borderColor:'#ffba00'}}>{this.props.presupuesto.estado}</Button>
                          </span>
                        </Typography>
                    </CardContent>
                          <Grid container >
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Producto" value={this.props.presupuesto.items[0].nombre} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Cantidad" value={'10'} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Unidad" value={'unidad'} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <TextField disabled id="standard-required" label="Precio" value={this.props.presupuesto.items[0].precio} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                            <FixedSizeList height={200} width={370} itemSize={100} itemCount={msj.length} >
                            {this.renderRow}
                          </FixedSizeList>
                              {/* <TextareaAutosize style={{borderRadius:7}} disabled aria-label="minimum height" rowsMin={8} className={classes.textTarea} value={msj}  /> */}
                            </Grid>
                            <Grid item lg={4} xs={12}> 
                            <Avatar className={classes.fotoItem} alt={this.props.pathImage}  src={this.props.pathImage} /> 
                            </Grid>
                          </Grid>
                          <CardContent>
                            <Typography variant="h5" component="h2">
                              Mi presupuesto
                            </Typography>
                          </CardContent>
                          <Grid container >
                            <Grid item lg={4} xs={6}>
                              <CssTextField className={classes.margin} id="custom-css-standard-input" label="Cantidad" type="number" onChange={this.props.getCantidadItem}   />
                            </Grid>
                            <Grid item lg={4} xs={6}>
                              <CssTextField className={classes.margin} id="custom-css-standard-input" label="Importe" type="number" onChange={this.props.getImporte}  />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                            
                             <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={8} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}  /> 
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
                              className={classes.button}
                              //startIcon={<SendIcon />}
                              onClick={this.props.cancelar}
                            >
                              Cancelar
                            </Button>

                            <Button
                              variant="contained"
                              color='primary'
                              size="small"
                              className={classes.button}
                              //startIcon={<SendIcon />}
                              onClick={this.props.save}
                            >
                              Aceptar
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



export default Presupuestar
