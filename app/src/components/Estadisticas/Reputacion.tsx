import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Container, Grid, Card, Box, Avatar,List, ListItemAvatar,ListItemText,Divider, CardActions, Button, CardHeader, ListItem, Typography, CssBaseline,  CardContent} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import MenuLateral from './../Drawer';
import * as drawerActions from './../../store/actions/drawer'
import AppBar from './../AppBar'
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { region: 'Asia', val: 4119626293 },
    { region: 'Africa', val: 1012956064 },
    { region: 'Northern America', val: 344124520 },
    { region: 'Latin America and the Caribbean', val: 590946440 },
    { region: 'Europe', val: 727082222 },
  
 
];

const data1 = [
    { region: 'Asia', val: 4119626293 },
    { region: 'Africa', val: 1012956064 },
  
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

class Reputacion extends React.Component <{}, {

}> {

	props: any
	static propTypes: any
	static defaultProps: any


  


  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

   
    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        {this.props.drawer}
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
                                    title="Mi Reputacion"
                                    
                                />

                                <CardContent>
                      
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            
                            <Grid item lg={6}>
                           
                            
                                <Chart
                                data={data}
                                >
                                <PieSeries
                                    valueField="val"
                                    argumentField="region"
                                    innerRadius={0.6}
                                />
                                <Title
                                    text="Tiempo de respuesta a los mensajes/consultas"
                                />
                                <Animation />
                                </Chart>
                           
                              
                            </Grid>
                            
                            <Grid item lg={6} >
                           
                        
                                <Chart
                                data={data}
                                
                                >
                                <PieSeries
                                    valueField="val"
                                    argumentField="region"
                                    innerRadius={0.6}
                                />
                                <Title
                                    text="Relación precio - calidad"
                                />
                                <Animation />
                                </Chart>
                          
                                
                            </Grid>
                       

                            
                            
                          </Grid>
                            <Grid container spacing={3}>
                                <Grid item lg={6} >
                            
                                    <Chart
                                    data={data}
                                    
                                    >
                                    <PieSeries
                                        valueField="val"
                                        argumentField="region"
                                        innerRadius={0.6}
                                    />
                                    <Title
                                        text=" Disponibilidad de productos y/o servicios"
                                    />
                                    <Animation />
                                    </Chart>
                                
                                    
                                </Grid>
                                <Grid item lg={6} >
                            
                                    <Chart
                                    data={data1}
                                    
                                    >
                                    <PieSeries
                                        valueField="val"
                                        argumentField="region"
                                        innerRadius={0.6}
                                    />
                                    <Title
                                        text="¿Volvería a operar con esta empresa?"
                                    />
                                    <Animation />
                                    </Chart>
                                
                                    
                                </Grid>
                            </Grid>

                                <Grid container spacing={3}>
                                <Grid item lg={12} >
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
                                </Grid>
                               
                            </Grid>
                      
                    </CardContent>
                    <CardActions>

                       
                      

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


export default connect(mapStateToProps)(Reputacion)