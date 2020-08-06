import React from 'react'
import clsx from 'clsx'



import { Container, Grid, Card,Typography,CssBaseline,  Button, CardContent} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';




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
  theme: any,
  actions: any,
  item: {
    "_id": string,
    "foto": string[],
    "nombre": string,
    "precio": string,
    "descrpcion": string,
    "mostrarPrecio": boolean,
    "unidad_de_medida_id": string,
    "updated_at": string,
    "created_at": string,
    "catalogo_id": string,
    "unidad_de_medida": {
      "_id": string,
      "nombre": string,
      "abreviatura": string,
      "updated_at": string,
      "created_at": string,
    },
    "catalogo": {
      "_id": string,
      "empresa_id": string,
      "updated_at": string,
      "created_at": string,
      "empresa": {
        "_id": string,
        "nombre": string,
        "cuit": string,
        "usuario": string,
        "clave": string,
        "email": string,
        "estado": string,
        "updated_at": string,
        "created_at": string,
      }
    }
  }
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
    };
  }

  render(){

    const classes = this.props.classes
    const theme = this.props.theme
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
    const tutorialSteps: {
      label: string,
      imgPath: string
    }[] = [];

    this.props.item.foto.map((img: string) => {
      tutorialSteps.push({
        label: '',
        imgPath: 'http://localhost:8000/' + img
      })
    })

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
        {this.props.appBar}
        {this.props.drawer}
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

              <Grid item xs={12}  >
                <Card className={fixedHeightCard}>
                  
                  <CardContent>
                    
                        <Grid container  >
                          <Grid item sm={6} xs={12}  >
                            <Typography gutterBottom variant="h5" component="h2" style={{paddingTop:30}} >
                              {this.props.item.nombre}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" style={{paddingTop:20}}>
                              ${this.props.item.precio} x {this.props.item.unidad_de_medida.nombre}
                            </Typography>
                            <Typography style={{paddingTop:20}}>
                              <Link href={'/home/perfil/' + this.props.item.catalogo.empresa._id} variant="h5" className={classes.Link}>
                                { 'Vendedor: ' + this.props.item.catalogo.empresa.nombre}
                              </Link>
                            </Typography>
                            
                            <Typography gutterBottom variant="h5" component="h2" style={{paddingTop:40}} >
                              Descripción
                            </Typography>
                            <Typography variant="subtitle2" component="h4">
                              {this.props.item.descrpcion}
                            </Typography>
                            
                              
                            
                              
                          </Grid>
                            
                            <Grid item sm={6} 
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
                                  variant="dots"
                                  activeStep={this.state.activeStep}
                                  nextButton={
                                    <Button size="small" onClick={handleNext} disabled={this.state.activeStep === maxSteps - 1} >
                                      
                                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                  }
                                  backButton={
                                    <Button size="small" onClick={handleBack} disabled={this.state.activeStep === 0}>
                                      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                      
                                    </Button>
                                  }
                                />
                              </div>

                              {this.props.actions(classes)}

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