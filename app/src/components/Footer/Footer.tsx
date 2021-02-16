import React from 'react'
import logo from './../Login/img/logo.png';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EqualizerIcon from '@material-ui/icons/Equalizer';


import {Grid, Typography, Avatar, Container, Link,  TextField} from '@material-ui/core';


import { connect } from 'react-redux'


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
 

  render(){

		const classes = this.props.classes
    return(

      <footer className={classes.footer} >
         <Grid
          container
          >
          <Grid container >
            <Grid container
            direction="row"
            justify="center"
            alignItems="center" xs={12} sm={6}>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h5" align='left' gutterBottom>
                    Sobre Nosotros
                    </Typography>

                      <Typography variant="h6" align='left' gutterBottom>
                        En esta plataforma podras encontrar de manera rápida y sencilla a tus proveedores. 
                      Registrate, Ingresá y comenzá a hacer tus pedidos. 
                      </Typography>
            
                        <Avatar  src={logo} className={classes.avatar} ></Avatar>
                  </Grid>
              </Grid>

            <Grid container
            direction="row"
            justify="center"
            alignItems="flex-start" xs={12} sm={6}>

              <Grid item xs={12} sm={6}>
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

              </Grid>
            </Grid>
          </Grid>
          </Grid>
    </footer>

   

    );
  }
}



export default connect(mapStateToProps)(Footer)