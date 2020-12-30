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

var tiempoRespuesta: any = [{
    rating: 'Excelente',
    percent: 55.5
  }, {
    rating: 'Muy Bueno',
    percent: 20.8
  }, {
    rating: 'Bueno',
    percent: 2.6
  }, {
    rating: 'Malo',
    percent: 19.1
  }, {
    rating: 'Muy Malo',
    percent: 2.0
  },
]

var disponibilidad: any = [{
  rating: 'Excelente',
  percent: 55.5
}, {
  rating: 'Muy Bueno',
  percent: 20.8
}, {
  rating: 'Bueno',
  percent: 2.6
}, {
  rating: 'Malo',
  percent: 19.1
}, {
  rating: 'Muy Malo',
  percent: 2.0
},
]

var precioCalidad: any = [{
  rating: 'Excelente',
  percent: 55.5
}, {
  rating: 'Muy Bueno',
  percent: 20.8
}, {
  rating: 'Bueno',
  percent: 2.6
}, {
  rating: 'Malo',
  percent: 19.1
}, {
  rating: 'Muy Malo',
  percent: 2.0
},
]

var rebuy: any = [{
    rating: 'SI',
    percent: 70,
  }, {
    rating: 'NO',
    percent: 30
  },
]

function mapStateToProps(store: {}) {
  return {};
}

class Reputacion extends React.Component <{}, {
  value:number,
  tiempoRespuesta: any,
  disponibilidad: any,
  precioCalidad: any,
  rebuy: any,
  update: boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  constructor(props: any) {
    super(props);
    this.state = {
      value:0,
      tiempoRespuesta: [{
          rating: 'Excelente',
          percent: 55.5
        }, {
          rating: 'Muy Bueno',
          percent: 20.8
        }, {
          rating: 'Bueno',
          percent: 2.6
        }, {
          rating: 'Malo',
          percent: 19.1
        }, {
          rating: 'Muy Malo',
          percent: 2.0
        },
      ],
      disponibilidad: [{
          rating: 'Excelente',
          percent: 55.5
        }, {
          rating: 'Muy Bueno',
          percent: 20.8
        }, {
          rating: 'Bueno',
          percent: 2.6
        }, {
          rating: 'Malo',
          percent: 19.1
        }, {
          rating: 'Muy Malo',
          percent: 2.0
        },
      ],
      precioCalidad: [{
          rating: 'Excelente',
          percent: 55.5
        }, {
          rating: 'Muy Bueno',
          percent: 20.8
        }, {
          rating: 'Bueno',
          percent: 2.6
        }, {
          rating: 'Malo',
          percent: 19.1
        }, {
          rating: 'Muy Malo',
          percent: 2.0
        },
      ],
      rebuy: [{
          rating: 'SI',
          percent: 70,
        }, {
          rating: 'NO',
          percent: 30
        },
      ],
      update: false
    };
  }

  componentDidUpdate() {

    let valoraciones: any = {}
    let tiempoRespuesta: any = [{
        rating: 'Excelente',
        percent: 55.5
      }, {
        rating: 'Muy Bueno',
        percent: 20.8
      }, {
        rating: 'Bueno',
        percent: 2.6
      }, {
        rating: 'Malo',
        percent: 19.1
      }, {
        rating: 'Muy Malo',
        percent: 2.0
      },
    ]

    let disponibilidad: any = [{
        rating: 'Excelente',
        percent: 55.5
      }, {
        rating: 'Muy Bueno',
        percent: 20.8
      }, {
        rating: 'Bueno',
        percent: 2.6
      }, {
        rating: 'Malo',
        percent: 19.1
      }, {
        rating: 'Muy Malo',
        percent: 2.0
      },
    ]

    let precioCalidad: any = [{
        rating: 'Excelente',
        percent: 55.5
      }, {
        rating: 'Muy Bueno',
        percent: 20.8
      }, {
        rating: 'Bueno',
        percent: 2.6
      }, {
        rating: 'Malo',
        percent: 19.1
      }, {
        rating: 'Muy Malo',
        percent: 2.0
      },
    ]

    let rebuy: any = [{
        rating: 'SI',
        percent: 70,
      }, {
        rating: 'NO',
        percent: 30
      },
    ]

    if(this.props.valoraciones !== undefined) {
      valoraciones = this.props.valoraciones
    }
    
    tiempoRespuesta.map((valor: {
      rating: string,
      percent: number
    }) => {
      if(valor.rating === 'Excelente') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'tiempoRespuesta') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '5') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Muy Bueno') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'tiempoRespuesta') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '4') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Bueno') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'tiempoRespuesta') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '3') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Malo') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'tiempoRespuesta') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '2') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Muy Malo') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'tiempoRespuesta') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '1') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
    })

    disponibilidad.map((valor: {
      rating: string,
      percent: number
    }) => {
      if(valor.rating === 'Excelente') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'disponibilidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '5') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Muy Bueno') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'disponibilidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '4') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Bueno') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'disponibilidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '3') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Malo') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'disponibilidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '2') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Muy Malo') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'disponibilidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '1') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
    })

    precioCalidad.map((valor: {
      rating: string,
      percent: number
    }) => {
      if(valor.rating === 'Excelente') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'precioCalidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '5') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Muy Bueno') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'precioCalidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '4') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Bueno') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'precioCalidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '3') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Malo') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'precioCalidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '2') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'Muy Malo') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'precioCalidad') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '1') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
    })

    rebuy.map((valor: {
      rating: string,
      percent: number
    }) => {
      if(valor.rating === 'SI') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'rebuy') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '1') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
      if(valor.rating === 'NO') { if(valoraciones !== undefined && valoraciones !== null){ Object.keys(valoraciones).map((key: string) => { if(key === 'rebuy') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss === '2') { valor.percent = (valoraciones[key][keyss] * 100) / valoraciones[key]['total'] } }) } }) } }
    })

    if(!this.state.update && Object.keys(this.props.valoraciones).length > 0) {
      this.setState({
        tiempoRespuesta,
        disponibilidad,
        precioCalidad,
        rebuy,
        update: true
      })
    }

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
                                dataSource={this.state.tiempoRespuesta}
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
                                dataSource={this.state.disponibilidad}
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
                                dataSource={this.state.precioCalidad}
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
                                dataSource={this.state.rebuy}
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
                      </Grid>
                      
                    </CardContent>
                    <CardActions>

                       
                      

                    </CardActions>
                    
									</Card>
								</Grid>


							</Grid>
						</Container>
            {this.props.footer}
					</main>
		 </div>
    );
  }
}


export default connect(mapStateToProps)(Reputacion)