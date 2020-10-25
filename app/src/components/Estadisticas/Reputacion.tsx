import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Container, Grid,Box, Card, Tabs, Tab, Avatar, ListItemAvatar,ListItemText,Divider, CardActions, CardHeader, ListItem, Typography, CssBaseline,  CardContent} from '@material-ui/core';
import { FixedSizeList } from 'react-window';


import PieChart, {
    Legend,
    Series,
    Export,
    Label,
    SmallValuesGrouping,
    Connector
  } from 'devextreme-react/pie-chart';






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
  value:number,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  constructor(props: any) {
    super(props);
    this.state = {
      value:0,
    };
  }

  
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
   
    const handleChangeTabs = (event:any, value:number) => {
      this.setState({value: value});
    };
   
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
                                    // avatar={
                                    // <Avatar aria-label="recipe" className={classes.avatar} >
                                    //     R
                                    // </Avatar>
                                    // }
                                    // title="Mi Reputacion"
                                    
                                />
 <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {"Mi Reputacion"}</Box>
              </Typography>
<Divider className={classes.divider} />
                                <CardContent>
                      
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            
                            <Grid item xs={12} sm={6}>
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
                            
                            <Grid item xs={12} sm={6} >
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
                                <Grid item xs={12} sm={6}>
                            
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
                                <Grid xs={12} sm={6} >
                            
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

                            <div >
                          <Box  >
                            <Grid container alignItems="center">
                              <Grid xs={12} sm={12} item style={{ flexGrow: 1, marginTop:'25px' }}>
                                <Tabs
                                  value={this.state.value}
                                  onChange={handleChangeTabs}
                                  style={{color:"#d93211", marginLeft:'20px'}}
                                  
                                >
                                  <Tab label="Comentarios" />
                                </Tabs>
                                {this.state.value === 0 && 
                                <FixedSizeList  height={260} width={500} itemSize={100} itemCount={8}>
                                {this.renderRow}
                            </FixedSizeList>}
                              </Grid>
                            </Grid>
                          </Box>
                      </div>

                                {/* <Grid container spacing={3}>
                                <ListSubheader  className={classes.subtitle}  >
                                    
                                    Comentarios
                                </ListSubheader> 
                                <Grid item lg={12} >
                                <FixedSizeList style={{marginLeft:'60px'}} height={260} width={420} itemSize={100} itemCount={8}>
                                {this.renderRow}
                            </FixedSizeList>
                                </Grid>
                                </Grid> */}
                               
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