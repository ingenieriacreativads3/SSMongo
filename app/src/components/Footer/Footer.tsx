import React from 'react'
import clsx from 'clsx'
import foto from './../Login/img/photo2.png';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EqualizerIcon from '@material-ui/icons/Equalizer';


import { Container, Grid,  Typography,CssBaseline, } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';


import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';



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
    // idEmpresa: store.login.data.empresa._id
  };
}

class Footer extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);

  }


  

  render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    return(

      <div className={classes.root}>
      <CssBaseline />
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
            <Typography variant="h3" gutterBottom>
       Sobre Nosotros
      </Typography>
      <Typography variant="h6" gutterBottom>
      En esta plataforma podras encontrar de manera rápida y sencilla a tus proveedores. 
      Registrate, Ingresá y comenzá a hacer tus pedidos. 
      </Typography>
            </Grid>
            <Grid item lg={6}>
            <Typography variant="h3" gutterBottom>
            ¿Por qué elegirnos?
      </Typography>
      <Typography variant="h6" gutterBottom>
      <VerifiedUserIcon fontSize="large" style={{ color: orange[500] }} />
      Todas las empresas de esta plataforma, estan legalmente verificadas
      </Typography>
            </Grid>
          </Grid>>
        </Grid>
        </Container>
      </footer>
    </div>

    );
  }
}



export default connect(mapStateToProps)(Footer)