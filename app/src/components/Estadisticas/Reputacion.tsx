import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Container, Grid, Card, Avatar,List, ListSubheader, ListItemAvatar,ListItemText,Divider, CardActions, CardHeader, ListItem, Typography, CssBaseline,  CardContent} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { FixedSizeList } from 'react-window';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import PieChart, {
    Legend,
    Series,
    Export,
    Label,
    SmallValuesGrouping,
    Connector
  } from 'devextreme-react/pie-chart';

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


const dataSource = [{
        rating: 'Excelente',
        percent: 55.5
    }, {
        rating: 'Muy Bueno',
        percent: 20.8
    }, {
        rating: 'Malo',
        percent: 2.6
    }, {
        rating: 'Bueno',
        percent: 19.1
    },{
        rating: 'Muy Malo',
        percent: 2.0
    },
]


const dataSource2 = [{
    rating: 'SI',
    percent: 70,
}, {
    rating: 'NO',
    percent: 30
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

class Reputacion extends React.Component <{}, {

}> {

	props: any
	static propTypes: any
	static defaultProps: any


  
    customizeLabel(point:any) {
        return `${point.argumentText }: ${ point.valueText }%`;
      }

      renderRow(props:any) {
        const { index, style } = props;
      
        return (
          <ListItem button style={style} key={index}>
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
                      //className={classes.inline}
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItem>
        );
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
                                    title="Mi Reputacion"
                                    
                                />

                                <CardContent>
                      
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            
                            <Grid item lg={6}>
                            <PieChart
                                id="pie"
                                type="doughnut"
                                title="Tiempo de respuesta a los mensajes/consultas"
                                palette="Soft Pastel"
                                dataSource={dataSource}
                            >
                                <Series argumentField="rating" valueField="percent">
                                <SmallValuesGrouping mode="topN" topCount={3} />
                                <Label
                                    visible={true}
                                    format="fixedPoint"
                                    customizeText={this.customizeLabel}
                                >
                                    <Connector visible={true} width={1} />
                                </Label>
                                </Series>
                                <Export enabled={true} />
                                <Legend horizontalAlignment="center" verticalAlignment="bottom" />
                            </PieChart>
                            
    
                              
                            </Grid>
                            
                            <Grid item lg={6} >
                            <PieChart
                                id="pie"
                                type="doughnut"
                                title="Relacion precio - calidad"
                                palette="Soft Pastel"
                                dataSource={dataSource}
                            >
                                <Series argumentField="rating" valueField="percent">
                                <SmallValuesGrouping mode="topN" topCount={3} />
                                <Label
                                    visible={true}
                                    format="fixedPoint"
                                    customizeText={this.customizeLabel}
                                >
                                    <Connector visible={true} width={1} />
                                </Label>
                                </Series>
                                <Export enabled={true} />
                                <Legend horizontalAlignment="center" verticalAlignment="bottom" />
                            </PieChart>
                                
                            </Grid>
                       

                            
                            
                          </Grid>
                            <Grid container spacing={3}>
                                <Grid item lg={6} >
                            
                                <PieChart
                                id="pie"
                                type="doughnut"
                                title="Disponibilidad de productos y/o servicios"
                                palette="Soft Pastel"
                                dataSource={dataSource}
                            >
                                <Series argumentField="rating" valueField="percent">
                                <SmallValuesGrouping mode="topN" topCount={3} />
                                <Label
                                    visible={true}
                                    format="fixedPoint"
                                    customizeText={this.customizeLabel}
                                >
                                    <Connector visible={true} width={1} />
                                </Label>
                                </Series>
                                <Export enabled={true} />
                                <Legend horizontalAlignment="center" verticalAlignment="bottom" />
                            </PieChart>
                                                                    
                                </Grid>
                                <Grid item lg={6} >
                            
                                <PieChart
                                id="pie"
                                type="doughnut"
                                title="Volveria a operar con esta empresa?"
                                palette="Soft Pastel"
                                dataSource={dataSource2}
                            >
                                <Series argumentField="rating" valueField="percent">
                                <SmallValuesGrouping mode="topN" topCount={3} />
                                <Label
                                    visible={true}
                                    format="fixedPoint"
                                    customizeText={this.customizeLabel}
                                >
                                    <Connector visible={true} width={1} />
                                </Label>
                                </Series>
                                <Export enabled={true} />
                                <Legend horizontalAlignment="center" verticalAlignment="bottom" />
                            </PieChart>
                                
                                    
                                </Grid>
                            </Grid>

                                <Grid container spacing={3}>
                                <ListSubheader  className={classes.subtitle}  >
                                    
                                    Comentarios
                                </ListSubheader> 
                                <Grid item lg={12} >
                                <FixedSizeList style={{marginLeft:'60px'}} height={260} width={420} itemSize={100} itemCount={8}>
                                {this.renderRow}
                            </FixedSizeList>
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