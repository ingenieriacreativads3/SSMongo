import React from 'react'
import clsx from 'clsx'



import { Container, Grid, Card, Box, Typography,CssBaseline,  Button, CardContent,  CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';

import AppBar from '../AppBar'
import DrawerInicio from '../DrawerInicio'


//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


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

class Detalle extends React.Component <{
  clasess: any,
  theme: any
}, {


  activeStep: number
  
}>  {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      activeStep: 0
      /* Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      } */
    };
  }

  

  render(){

    const classes = this.props.classes
    const theme = this.props.theme
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
    const tutorialSteps = [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
          'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bird',
        imgPath:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ];

    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
      this.setState({
        activeStep: this.state.activeStep + 1
      });
    };
  
    const handleBack = () => {
      this.setState({
        activeStep: this.state.activeStep - 1
      });
    };
  
    const handleStepChange = (step: number) => {
      this.setState({
        activeStep: step
      });
    };

    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        {this.props.drawer}
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

              <Grid item xs={12}  >
                <Card className={fixedHeightCard}>
                  
                  <CardContent>
                    
                        <Grid container spacing={3} >
                          <Grid item sm={6} xs={12}  >
                            <Typography gutterBottom variant="h5" component="h2">
                                SAMSUNG GALAXY A20 
                            </Typography>
                            <Typography variant="subtitle1" component="h2">
                              $16000
                            </Typography>
                            <Typography>
                              <Link href="#" variant="body2" className={classes.Link}>
                              {"Vendedor: Symsa"}
                              </Link>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2" >
                              Descripción
                            </Typography>
                            <Typography variant="subtitle2" component="h4">
                              El Samsung Galaxy A20 completa la gama Galaxy Ax entre el Galaxy A10 y el Galaxy A30. Con una pantalla Infinity-V HD+ de 6.4 pulgadas, el Galaxy A20 está potenciado por un procesador Exynos 7884 de ocho núcleos, con 3GB de memoria RAM y 32GB de almacenamiento interno. La cámara principal del Galaxy A20 es dual de 13 MP + 5 MP y la cámara para selfies es de 8 megapixels. Completando sus características, el Galaxy A20 tiene una gran batería de 4000 mAh con carga rápida, lector de huellas, y corre Android 9.0 Pie.
                            </Typography>
                            
                              
                            
                              
                          </Grid>
                            
                            <Grid item sm={6} xs={12} spacing={3} container
                                direction="column"
                                justify="space-around"
                                alignItems="center">
                      
                              <div className={classes.rootCarousel}>
          
                                <AutoPlaySwipeableViews
                                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                  index={this.state.activeStep}
                                  onChangeIndex={handleStepChange}
                                  enableMouseEvents
                                >
                                  {tutorialSteps.map((step, index) => (
                                    <div key={step.label}>
                                      {Math.abs(this.state.activeStep - index) <= 2 ? (
                                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                                      ) : null}
                                    </div>
                                  ))}
                                </AutoPlaySwipeableViews>
                                <MobileStepper
                                  steps={maxSteps}
                                  position="static"
                                  variant="text"
                                  activeStep={this.state.activeStep}
                                  nextButton={
                                    <Button size="small" onClick={handleNext} disabled={this.state.activeStep === maxSteps - 1} >
                                      Next
                                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                  }
                                  backButton={
                                    <Button size="small" onClick={handleBack} disabled={this.state.activeStep === 0}>
                                      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                      Back
                                    </Button>
                                  }
                                />
                              </div>

                                   {/*  <img src={foto} className = {classes.img}></img> */}
                            

                                  <div>
                                    <Link href="/pedido/nuevo" style={{textDecoration: 'none'}} >
                                      <Button
                                      type="button"
                                      
                                      variant="contained"
                                      className={classes.Boton}
                                      // onClick={this.ingresar}
                                      >
                                      Solicitar pedido
                                      </Button>
                                    </Link>
                                  <Link href="/presupuesto/nuevo" style={{textDecoration: 'none'}} >
                                    <Button
                                    type="button"
                                    
                                    variant="contained"
                                    className={classes.Boton}
                                    // onClick={this.ingresar}
                                    >
                                    Solicitar presupuesto
                                    </Button>
                                  </Link>
                                  </div>
                                  
                                
                                
                          </Grid>
                          
                        </Grid>
                        
                    
                  </CardContent>

                
                  
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

Detalle.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Detalle)