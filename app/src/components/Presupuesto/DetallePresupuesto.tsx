import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid,TextField, Card, Box, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent, FormControl, InputLabel, Select, MenuItem, CardActions, TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import menuLateral from '../Drawer'

import { connect } from 'react-redux'
import MenuLateral from '../Drawer';

import * as presupuestoActions  from './../../store/actions/presupuesto'

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
  presupuestoReducer: {}
}) {
  return {
    presupuesto: store.presupuestoReducer
  };
}

class DetallePresupuesto extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any
}, {
  
  presupuesto: {
    _id: string,
    empresa_perteneciente_id: string,
    importe: string
    
  }
}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  constructor(props: any) {
    super(props);
    this.state = {
      
      presupuesto: {
        _id: '',
        empresa_perteneciente_id: '',
        importe: '',
        
      }
    };
  }

  componentWillMount() {
    this.props.dispatch(presupuestoActions.getPurchase(this.props.match.params.id))
  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    let presupuesto = {
        _id: '',
        empresa_perteneciente_id: '',
        importe: '',
    }

    // if(
    //   this.props.solicitudDeValidacionReducer.status === 200
    // ) {
    //   this.setState({
    //     solicitudDeValidacion: this.props.solicitudDeValidacionReducer.data.solicitudesDeValidaciones
    //   })
    // }

    let _id: string = ''
    let empresaPerteneciente: string = ''
    let importe: string = ''

    if(
      this.props.presupuestoReducer &&
      this.props.presupuestoReducer.data &&
      this.props.presupuestoReducer.data.presupuestos
    ) {
      if(this.props.presupuestoReducer.data.presupuestos._id) _id = this.props.presupuestoReducer.data.presupuestos._id
      if(this.props.presupuestoReducer.data.presupuestos.empresa) {
        if(this.props.presupuestoReducer.data.presupuestos.empresaPerteneciente) empresaPerteneciente = this.props.presupuestoReducer.data.presupuestos.empresaPerteneciente
        if(this.props.presupuestoReducer.data.presupuestos.importe) importe = this.props.presupuestoReducer.data.presupuestos.importe
      }
    }

    console.log(_id)
    console.log(empresaPerteneciente)
    console.log(importe)


    return(

      <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar /> */}
        <MenuLateral />
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
                      title="Detalle Presupuesto"
                      
                    />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="ID Pedido" value={_id} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Empresa" value={empresaPerteneciente}  className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Importe" value={importe}  className={classes.input}  />

                            </Grid>
                            
                          </Grid>
                          
                         
                          <Grid container spacing={3}>
                            <Grid item lg={6}>
                              <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  defaultValue={1}
                                  // value={unidadDeMedida}
                                  // onChange={this.getUnidadDeMedida}
                                  
                                >
                                  <MenuItem value={1}>En Espera</MenuItem>
                                  <MenuItem value={2}>Cancelado</MenuItem>
                                  <MenuItem value={3}>Presupuestado</MenuItem>
                                  <MenuItem value={4}>Confirmado</MenuItem>
                                 
                                </Select>
                              </FormControl>
                            </Grid>
                           
                           
                        </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >
                        <Grid item lg={12} >
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            // startIcon={<SaveIcon />}
                          >
                            Aceptar
                          </Button>
                          </Grid>  
                        </Grid>
                    </CardActions>
                    
									</Card>
								</Grid>


							</Grid>
							<Box pt={4}>
								<Copyright />
							</Box>
						</Container>
					</main>

          
		 
		 </div>

    );
  }
}

export default connect(mapStateToProps)(DetallePresupuesto)