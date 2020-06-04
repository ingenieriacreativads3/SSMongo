import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Container, Grid, Card, Box, Avatar,List, ListItemAvatar,ListItemText,Divider, TextField, CardActions, Button, CardHeader, ListItem, ListItemIcon, Typography, CssBaseline,  CardContent, IconButton, CardMedia} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import MenuLateral from './../Drawer';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Radio from '@material-ui/core/Radio';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import * as Login from './../../store/actions/login'
import * as drawerActions from './../../store/actions/drawer'
import AppBar from './../AppBar'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
 
];

//import * as ItemAction from "../../store/actions/ItemAction";

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

class EstadisticasActividad extends React.Component <{}, {

}> {

	props: any
	static propTypes: any
	static defaultProps: any


  
  componentWillMount() {
    this.props.dispatch(drawerActions.invisibleDrawer())
  }

  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

   
    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        <MenuLateral></MenuLateral>
        <main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            R
                          </Avatar>
                        }
                        title="Mi Resumen"
                        
                      />

                    <CardContent>
                      
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Card className={classes.root}>
                              <div className={classes.details}>
                                <CardContent className={classes.content1}>
                                  <Typography component="h5" variant="h5">
                                    Pedidos
                                  </Typography>
                                  <Typography  color="textSecondary" variant="h5" component="h2">
                                    75
                                  </Typography>
                                </CardContent>
                                
                              </div>
                              <CardMedia
                                className={classes.cover}
                                
                              />

                            <ListItemIcon className={classes.itemIcon}>
                              <ShoppingCart style={{ fontSize: 60 }} className={classes.icon} />
                            </ListItemIcon>
                            </Card>
                            
                              
                            </Grid>
                            <Grid item lg={4}>
                            
                            <Card className={classes.root}>
                              <div className={classes.details}>
                                <CardContent className={classes.content1}>
                                  <Typography component="h5" variant="h5">
                                    Presupuestos
                                  </Typography>
                                  <Typography  color="textSecondary" variant="h5" component="h2">
                                    50
                                  </Typography>
                                </CardContent>
                                
                              </div>
                              <CardMedia
                                className={classes.cover}
                                
                              />

                            <ListItemIcon className={classes.itemIcon}>
                            <AttachMoney style={{ fontSize: 60 }} className={classes.icon}/>
                            </ListItemIcon>
                            </Card>
                            
                            </Grid>
                            <Grid item lg={4}>
                            
                            
                            <Card className={classes.root}>
                              <div className={classes.details}>
                                <CardContent className={classes.content1}>
                                  <Typography component="h5" variant="h5">
                                   Visitas 
                                  </Typography>
                                  <Typography  color="textSecondary" variant="h5" component="h2">
                                    110
                                  </Typography>
                                </CardContent>
                                
                              </div>
                              <CardMedia
                                className={classes.cover}
                                
                              />

                            <ListItemIcon className={classes.itemIcon}>
                            <VisibilityIcon style={{ fontSize: 60 }} className={classes.icon}/>
                            </ListItemIcon>
                            </Card>
                            
                            </Grid>

                            
                            
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item lg={6}>
                            
                            <List className={classes.list}>
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          component="span"
                                          variant="body2"
                                          className={classes.inline}
                                          color="textPrimary"
                                        >
                                          Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          component="span"
                                          variant="body2"
                                          className={classes.inline}
                                          color="textPrimary"
                                        >
                                          to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary="Oui Oui"
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          component="span"
                                          variant="body2"
                                          className={classes.inline}
                                          color="textPrimary"
                                        >
                                          Sandra Adams
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                              </List>
                            
                            
                            
                            </Grid>

                            <Grid item lg={6} className={classes.grafico}>
                             
                                <Chart
                                  data={data}
                                  
                                >
                                  <PieSeries
                                    valueField="area"
                                    argumentField="country"
                                  />
                                  <Title
                                    text="Mis pedidos"
                                  />
                                  <Animation />
                                </Chart>
                            
                            </Grid>

                            
                           </Grid>
                        
                        </Grid>
                      
                    </CardContent>
                    <CardActions>

                       
                      

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


export default connect(mapStateToProps)(EstadisticasActividad)