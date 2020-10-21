import React from 'react';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

import { Grid,Divider, Paper, FormControl, Box, Typography, CssBaseline, TextField, Button, TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';


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
    console.log(this.props.errors.CantidadPedido);

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
                {'Nuevo Pedido'}
                </Box>
              </Typography>
              <Divider className={classes.divider} />
            <FormControl>
            <form id="formNuevoPedido">
            <Grid container spacing={3}>
              <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                    Mis datos
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Empresa" label="Empresa" value={this.props.empresa.nombre} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Email" label="Email" value={this.props.empresa.email} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Domicilio" label="Domicilio" value={this.props.empresa.domicilioLegal} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Provincia" label="Provincia" value={this.props.empresa.provincia} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Ciudad" label="Ciudad" value={this.props.empresa.localidad} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Telefono" label="Telefono" value={this.props.empresa.telefono}/>
                </Grid>
              </Grid>

              <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                  <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                  Datos de pedido
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Nombre" label="Nombre" value={this.props.item.nombre} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Precio" label="Precio" value={this.props.item.precio} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField disabled id="Unidad" label="Unidad" value={this.props.item.unidad_de_medida.nombre} className={classes.input}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField className={classes.margin} id="CantidadPedido" label="Cantidad" type="number" onChange={this.props.getCantidadItem} 
                  required={true}
                  error={this.props.errors.CantidadPedido != null ? true : false}
                  helperText={this.props.errors.CantidadPedido != null ? this.props.errors.CantidadPedido : ""}
                  inputProps={{min:1}}/>
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextareaAutosize style={{borderRadius:7}}  aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}  />
                </Grid>
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
                startIcon={<SendIcon />}
                onClick={() => this.props.save(this.props.item._id, this.props.item.catalogo.empresa._id)}
                disabled={ !this.props.formValido   }
              >
                Enviar
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

Nuevo.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Nuevo)
