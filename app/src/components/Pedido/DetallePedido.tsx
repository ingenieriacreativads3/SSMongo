import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid,TextField, Card, Box, Typography, CssBaseline, CardHeader, Avatar,  Button, CardContent,  CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';


import { connect } from 'react-redux'
import MenuLateral from '../Drawer';

import * as requestActions  from './../../store/actions/request'

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

class DetallePedido extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any
}, {
  personName: [],
  pedido: {
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
      personName: [],
      pedido: {
        _id: '',
        empresa_perteneciente_id: '',
        importe: '',
        
      }
    };
  }

  componentWillMount() {
    this.props.dispatch(requestActions.getRequest(this.props.match.params.id))
  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    let pedido = {
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
    let estado: string = ''

    if(
      this.props.requestReducer &&
      this.props.requestReducer.data &&
      this.props.requestReducer.data.pedido
    ) {
      if(this.props.requestReducer.data.pedido.importe) importe = this.props.requestReducer.data.pedido.importe
      if(this.props.requestReducer.data.pedido.estado) estado = this.props.requestReducer.data.pedido.estado
      if(this.props.requestReducer.data.pedido.empresa_perteneciente) {
        if(this.props.requestReducer.data.pedido.empresa_perteneciente) empresaPerteneciente = this.props.requestReducer.data.pedido.empresa_perteneciente.nombre
      }
      
    }

    return(

      <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar /> */}
        <MenuLateral link={{link: {}}}/>
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
                      title="Detalle Pedido"
                      
                    />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Empresa" value={empresaPerteneciente}  className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Importe" value={importe}  className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                              <TextField disabled id="standard-required" label="Estado" value={estado}  className={classes.input}  />
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

export default connect(mapStateToProps)(DetallePedido)