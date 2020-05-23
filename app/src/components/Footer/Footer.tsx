import React from 'react'
import clsx from 'clsx'
import logo from './../Login/img/logo.png';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EqualizerIcon from '@material-ui/icons/Equalizer';


import { Container, Grid, Box, Typography, CssBaseline, Avatar} from '@material-ui/core';
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

      <footer className={classes.footer}>
      <Container maxWidth="lg">
        
      <Box display="flex" p={1} >
      <Box p={1} >
      <Typography variant="h5" align='left' gutterBottom>
      Sobre Nosotros
       </Typography>
        <Typography variant="h6" align='left' gutterBottom>
        En esta plataforma podras encontrar de manera rápida y sencilla a tus proveedores. 
       Registrate, Ingresá y comenzá a hacer tus pedidos. 
       </Typography>
      
       <Avatar  src={logo} className={classes.avatar} ></Avatar>
       
       </Box>
       <Box  p={1} flexShrink={1} >
       <Typography variant="h5" align='left' gutterBottom>
             ¿Por qué elegirnos?
       </Typography>
        <Typography variant="h6" align='left'  gutterBottom>
       <VerifiedUserIcon fontSize="large" style={{ color: '#d93211' }} />
       Todas las empresas de esta plataforma, son legalmente verificadas
       </Typography>
       <Typography variant="h6" align='left' gutterBottom>
       <ShoppingCartIcon fontSize="large" style={{ color: '#d93211' }} />
       Amplia oferta de productos y servicios
       </Typography>
      <Typography variant="h6" align='left' gutterBottom>
       <EqualizerIcon fontSize="large" style={{ color: '#d93211' }} />
       Perfil personalizado, con estadísticas acerca de tus negocios en la plataforma
       </Typography>
       </Box>
      </Box>
       
      </Container>
    </footer>
     

    );
  }
}



export default connect(mapStateToProps)(Footer)