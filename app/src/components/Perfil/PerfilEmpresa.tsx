import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, Grid, CardActionArea, CardMedia,Link, Card, Box, Typography, TextField, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import * as registerActions  from './../../store/actions/register'
import  foto  from './../Login/img/logo.png'
import * as ubicacionActions from './../../store/actions/ubicacion'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import VisibilityIcon from '@material-ui/icons/Visibility';
//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


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
  ubicacionReducer: any,
  registerReducer:{}
}) {
  return {
    empresa: store.registerReducer,
    ubicacionReducer: store.ubicacionReducer
  };
}

class PerfilEmpresa extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
 


}, {
  provincia: string,
  municipio: string,
  empresa: {
  _id: string,
  nombre: string,
  cuit: string,
  usuario: string,
  clave: string,
  email:string,
  
}}>  {

	props: any
	static propTypes: any
	static defaultProps: any

 
  constructor(props: any) {
    super(props);
    this.state = {
      provincia: '',
      municipio: '',
      empresa: {
        _id: '',
        nombre: '',
        cuit: '',
        usuario: '',
        clave: '',
        email:''
    
        
      }
    };
  }

 

/*   componentWillMount() {

    this.props.dispatch(registerActions.getEmpresa(this.props.match.params.id))


  } */


  render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
        const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);

    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
         <MenuLateral></MenuLateral>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
            
                    <Card className={fixedHeightCard}>
            
                    <CardContent>
                    <Grid container spacing={3} >
                          <Grid item sm={6} xs={12} container
                          direction="column"
                          justify="space-around"
                          alignItems="center">
                          <Typography variant="h2" component="h3" gutterBottom>
                               Company Name
                            </Typography>
                                 <img src={foto} className = {classes.img}></img> 
                                 <Typography variant="h5" align='left'  gutterBottom>
                                    <BuildOutlinedIcon fontSize="large" style={{ color: '#d93211' }} />
                                    Construccion
                                </Typography>
                                <Typography variant="h5" align='left'  gutterBottom>
                                    <LocationOnIcon fontSize="large" style={{ color: '#d93211' }} />
                                    San Francisco - Cordoba
                                </Typography>
                                <Typography variant="h5" align='left'  gutterBottom>
                                    <PhoneIcon fontSize="large" style={{ color: '#d93211' }} />
                                   35644225394
                                </Typography>
                          </Grid>


                          <Grid item sm={6} xs={12} spacing={3} 
                          container
                          direction="column"
                          //justify="space-around"
                          alignItems="center">
                             <Typography variant="h5" align='left'  gutterBottom>
                                    
                                    Contactanos
                                </Typography>
                          </Grid>
                    </Grid>
                    </CardContent>
                    <CardActions>

                    <Typography variant="h5" align='left'  gutterBottom>
                                    
                                    Nuestros Productos
                                </Typography>
                      
                                <Card className={fixedHeightCardCatalog}>
                  
                  </Card>
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


export default connect(mapStateToProps)(PerfilEmpresa)