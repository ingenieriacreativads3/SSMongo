import React from 'react';
import {TextField, ListItem, Box,Paper, FormControl, Divider,ListItemAvatar, ListItemText, Grid,Typography, CssBaseline,  Avatar,  Button,TextareaAutosize} from '@material-ui/core';
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
              <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
          <Paper style={{ padding: 20, margin:50}}>
              <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {"Presupuestación"}
                </Box>
              </Typography>
              <Divider className={classes.divider} />
            <FormControl>
            <form id="presupuestarForm">
            <Grid container spacing={3}>
              <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                  Datos del solicitante
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Empresa" label="Empresa" value={this.props.presupuesto.empresa_demandante.nombre} className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Email" label="Email" value={this.props.presupuesto.empresa_demandante.email} className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Telefono" label="Telefono" value="" className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Provincia" label="Provincia" value="" className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Ciudad" label="Ciudad" value="" className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="CP" label="CP" value="" className={classes.input}  />
                </Grid>
              </Grid>

              <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                Presupuesto solicitado
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="ProductoSolicitado" label="Producto" value={this.props.presupuesto.items[0].nombre} className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="CantidadSolicitada" label="Cantidad" value={'10'} className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="UnidadSolicitada" label="Unidad" value={'unidad'} className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="PrecioSolicitado" label="Precio" value={this.props.presupuesto.items[0].precio} className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                
                <FixedSizeList height={200} width={370} itemSize={100} itemCount={msj.length} >
                  {this.renderRow}
                </FixedSizeList>
                  {/* <TextareaAutosize style={{borderRadius:7}} disabled aria-label="minimum height" rowsMin={8} className={classes.textTarea} value={msj}  /> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                <img className={classes.fotoItem} alt={this.props.pathImage}  src={this.props.pathImage} /> 
                </Grid>
              </Grid>
            </Grid>

            <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
              <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                  Mi presupuesto
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
              <CssTextField 
                className={classes.margin} 
                id="Cantidad" 
                label="Cantidad" 
                type="number" 
                onChange={this.props.getCantidadItem}
                required={true}
                error={this.props.errors.Cantidad != null ? true : false}
                helperText={this.props.errors.Cantidad != null ? this.props.errors.Cantidad : ""}
                inputProps={{min:1}}   
                    />
              </Grid>
              <Grid item xs={12} sm={4}>
              <CssTextField 
                className={classes.margin} 
                id="Importe" 
                label="Importe" 
                type="number" 
                onChange={this.props.getImporte} 
                required={true}
                error={this.props.errors.Importe != null ? true : false}
                helperText={this.props.errors.Importe != null ? this.props.errors.Importe : ""}
                inputProps={{min:1}}  />
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={8} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}  /> 
              </Grid>
            </Grid>

            </form>
            <div style={{ width: "100%",  marginTop:"1rem" }}>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
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
                disabled={ !this.props.formValid}
              >
                Aceptar
              </Button>
              </Box>
            </div>
            </FormControl>
            </Paper>
            </Grid>
            {this.props.footer}
					</main>
		 </div>

    );
  }
}



export default Presupuestar
