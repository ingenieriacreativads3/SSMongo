import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Container, Grid, Card, Box, Avatar, CardActions,  CardHeader, ListItemIcon, Typography, CssBaseline,  CardContent, CardMedia} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import PieChart, {
  Series,
  Label,
  Connector,
  SmallValuesGrouping,
  Legend,
  Export
} from 'devextreme-react/pie-chart';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
 
];

const dataSource = [{
    estado: 'En espera',
    percent: 55.5
  }, {
    estado: 'Cancelado',
    percent: 20.8
  }, {
    estado: 'Confirmado',
    percent: 4.6
  }, {
    estado: 'Presupuestado',
    percent: 19.1
  },
]

const dataSource2 = [{
  estado: 'En Espera',
  percent: 55.5
}, {
  estado: 'Cancelado',
  percent: 20.8
}, {
  estado: 'Finalizado',
  percent: 4.6
}, {
  estado: 'Enviado',
  percent: 19.1
},
]
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

  formatLabel(arg:any) {
    return `${arg.argumentText}: ${arg.valueText}%`;
  }
  
 

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
                            
                            <PieChart
                              id="pie"
                              dataSource={dataSource}
                              palette="Bright"
                              title="Mis presupuestos"
                            >
                              <Series
                                argumentField="estado"
                                valueField="percent"
                              >
                                <Label visible={true} customizeText={this.formatLabel} format="fixedPoint">
                                  <Connector visible={true} width={0.5} />
                                </Label>
                                <SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
                              </Series>
                              <Legend horizontalAlignment="center" verticalAlignment="bottom" />
                              <Export enabled={true} />
                            </PieChart>

                            {/* <Chart
                                  data={data}
                                  
                                >
                                  <PieSeries
                                    valueField="area"
                                    argumentField="country"
                                  />
                                  <Title
                                    text="Mis presupuestos"
                                  />
                                  <Animation />
                                </Chart>
                             */}
                            
                            
                            
                            </Grid>

                            <Grid item lg={6} >
                            <PieChart
                              id="pie"
                              dataSource={dataSource2}
                              palette="Bright"
                              title="Mis pedidos"
                            >
                              <Series
                                argumentField="estado"
                                valueField="percent"
                              >
                                <Label visible={true} customizeText={this.formatLabel} format="fixedPoint">
                                  <Connector visible={true} width={0.5} />
                                </Label>
                                <SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
                              </Series>
                              <Legend horizontalAlignment="center" verticalAlignment="bottom" />
                              <Export enabled={true} />
                            </PieChart>

                               
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


export default connect(mapStateToProps)(EstadisticasActividad)