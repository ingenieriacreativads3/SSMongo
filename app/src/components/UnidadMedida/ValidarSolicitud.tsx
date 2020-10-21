import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Container,Divider, Grid, Card, Paper, Box, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import MenuLateral from '../Drawer'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'


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
    Item: store.Item,
    //idEmpresa: store.login.data.empresa._id
  };
}

class ValidarSolicitud extends React.Component {

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
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

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
                {'Solicitud Unidad de Medida'}
                </Box>
              </Typography>
              <Divider className={classes.divider} />
            <FormControl>
            <form >
            <Grid container spacing={3}>
              <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Nro. Solicitud"  defaultValue="20" className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Fecha"  defaultValue="03/04/2020" className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Usuario"  defaultValue="CorpuSoft" className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Usuario"  defaultValue="CorpuSoft" className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField  id="custom-css-standard-input" label="Unidad"  defaultValue="Metro cuadrado" className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Estado</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={1}
                    >
                      <MenuItem value={1}>No resuelta</MenuItem>
                      <MenuItem value={2}>Resuelta</MenuItem>
                      
                    </Select>
                  </FormControl>
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
                // endIcon={<SendIcon></SendIcon>}
                
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



export default connect(mapStateToProps)(ValidarSolicitud)
