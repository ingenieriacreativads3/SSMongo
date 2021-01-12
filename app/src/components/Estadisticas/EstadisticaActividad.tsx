import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Divider, Paper, FormControl, Box, ListItemIcon, Typography, CssBaseline,  CardContent, CardMedia} from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';

import PieChart, {
  Series,
  Label,
  Connector,
  SmallValuesGrouping,
  Legend,
  Export
} from 'devextreme-react/pie-chart';

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
    
    const dataSource = [
      {
        estado: 'En espera',
        percent: 25
      }, {
        estado: 'Cancelado',
        percent: 25
      }, {
        estado: 'Confirmado',
        percent: 25
      }, {
        estado: 'Presupuestado',
        percent: 25
      },
    ]
    
    const dataSource2 = [
      {
        estado: 'En Espera',
        percent: 25
      }, {
        estado: 'Cancelado',
        percent: 25
      }, {
        estado: 'Finalizado',
        percent: 25
      }, {
        estado: 'Enviado',
        percent: 25
      }
    ]

    if(this.props.resumen.pedidosTotales > 0) {
      dataSource2.map((source: {
        estado: string,
        percent: number
      }) => {

      })
    }

    if(this.props.resumen.presupuestosTotales) {
      dataSource.map((source: {
        estado: string,
        percent: number
      }) => {

      })
    }
 
    return(

      <div className={classes.root}>
        <CssBaseline />
        {this.props.appBar}
       {this.props.drawer}
        <main className={classes.content}>
						<div className={classes.appBarSpacer} />
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
            <Paper style={{ padding: 20, margin:50}}>
              <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {'Mi Resumen'}
                </Box>
              </Typography>
              <Divider style={{marginBottom:'20px'}} />
            <FormControl>
              <Grid container xs={12} sm={12} spacing={3}>

                <Grid item xs={12} sm={4}>
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

                <Grid item xs={12} sm={4}>
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

                <Grid item xs={12} sm={4}>
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
              <Divider style={{marginTop:'20px', marginBottom:'20px'}}></Divider>
              <Grid container xs={12} sm={12} spacing={4}>
              
              <Grid item xs={12} sm={6}>
              <PieChart
                id="pie"
                dataSource={ dataSource }
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
              </Grid>

              <Grid item xs={12} sm={6}>
              <PieChart
                id="pie"
                dataSource={ dataSource2 }
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
             </FormControl>
            </Paper>
            </Grid>
            { this.props.footer }
					</main>
		 </div>

      
    );
  }
}


export default connect(mapStateToProps)(EstadisticasActividad)