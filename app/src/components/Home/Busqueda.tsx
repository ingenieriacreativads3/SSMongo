import React from 'react';
import clsx from 'clsx'


import { Container,  Button, Grid, Card,  Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import { Link} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import  foto  from '../Login/img/photo2.png';
import { SideBarInicio } from '../SideBarInicio'

import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  slide1  from './img/slide1.jpeg';
import  slide2  from './img/slide2.jpeg';
import  slide3  from './img/slide3.jpeg';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);





class Busqueda extends React.Component <{}, {
  valueFilter: number | null,
  hoverFilter: any,
  activeStep: number
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			valueFilter: 2,
      hoverFilter: -1,
      activeStep: 0
		};
  }

  render(){

    const classes = this.props.classes
    const theme = this.props.theme
		const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
    
    const tutorialSteps = [
      {
        imgPath:slide1,
      },
      {
        imgPath:slide2,
      },
      {
        imgPath:slide3,
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
        { this.props.appBar }
        { this.props.drawer }
					<main className={ classes.content } >
          <div className={ classes.rootCarousel } >
          
          <AutoPlaySwipeableViews
            axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
            index={ this.state.activeStep }
            onChangeIndex={ handleStepChange }
            enableMouseEvents
            
          >
            { tutorialSteps.map((step, index) => (
              <div>
                { Math.abs(this.state.activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath}  />
                ) : null }
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
                {/* Next */}
                {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
                {theme.direction === 'rtl' }
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={this.state.activeStep === 0}>
                {/* {theme.direction === 'rtl' ?  <KeyboardArrowRight /> : <KeyboardArrowLeft /> } */}
                {theme.direction === 'rtl' }
                {/* Back */}
              </Button>
            }
          />
          </div>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" /* className={classes.container} */>
           
            <Grid container spacing={3}>
           
                <SideBarInicio></SideBarInicio>
               
                
              <Grid item lg={3}>
              
                <Card className={fixedHeightCardCatalog}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Samsung A20"
                      height="140"
                      image={foto}
                      title="Samsung A20"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        asdasd
                      </Typography>
                      <Typography variant="subtitle1" component="h2">
                        $16000
                      </Typography>
                    
                    </CardContent>
                  </CardActionArea>
                  <CardActions >
                  <Link to="/item/detalle/:id">
                    <IconButton aria-label="ver" className={classes.iconButton}> 
                      <VisibilityIcon style={{ fontSize: 40 }}  />
                    </IconButton>
                    </Link>
                  
                    
                  </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                <Card className={fixedHeightCardCatalog}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Samsung A20"
                      height="140"
                      image={foto}
                      title="Samsung A20"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        asdasd
                      </Typography>
                      <Typography variant="subtitle1" component="h2">
                        $16000
                      </Typography>
                    
                    </CardContent>
                  </CardActionArea>
                  <CardActions >
                  <Link to="/item/detalle/:id">
                    <IconButton aria-label="ver" className={classes.iconButton}> 
                      <VisibilityIcon style={{ fontSize: 40 }}  />
                    </IconButton>
                    </Link>
                  
                    
                  </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                <Card className={fixedHeightCardCatalog}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Samsung A20"
                      height="140"
                      image={foto}
                      title="Samsung A20"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        asdasd
                      </Typography>
                      <Typography variant="subtitle1" component="h2">
                        $16000
                      </Typography>
                    
                    </CardContent>
                  </CardActionArea>
                  <CardActions >
                  <Link to="/item/detalle/:id">
                    <IconButton aria-label="ver" className={classes.iconButton}> 
                      <VisibilityIcon style={{ fontSize: 40 }}  />
                    </IconButton>
                    </Link>
                  
                    
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

export default Busqueda
