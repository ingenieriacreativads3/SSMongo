import React from 'react';
import clsx from 'clsx'


import { Container, Avatar,  Button, Grid, Card, ListSubheader, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import { Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import  foto  from '../Login/img/photo2.png';
import { SideBarInicio } from '../SideBarInicio'

import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  slide1  from './img/slide1.jpeg';
import  slide2  from './img/slide2.jpeg';
import  slide3  from './img/slide3.jpeg';
import logo from "./../Login/img/logo.png";

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

    let items: any[] = []

    if(Array.isArray(this.props.items) && this.props.items.length > 0) {
      items = this.props.items
    }

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

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{display: items.length === 0 ? 'block' : 'none'}}
              >
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography  variant="h4" component="h3" gutterBottom>
                    No hay publicaciones disponibles para esta búsqueda
                  </Typography>
                </ListSubheader>
                <Avatar src={logo} className={classes.avatar}  />
              </Grid>

              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"  spacing={6}
                style={{display: items.length > 0 ? 'block' : 'none'}}
              >
                {
                  items.map((item: {
                    "_id": string,
                    "foto": string[],
                    "nombre": string,
                    "precio": string,
                  }) => {

                    return <div>
                      <Grid item lg={3}>
                        <Link to={`/item/detalle/`+ item._id} style={{textDecoration:'none'}}>
                          <Card
                            style={{height:'90%'}}
                            onClick={ () => this.props.action(item._id)}
                            className={fixedHeightCardCatalog}
                          >
                          
                            <CardMedia
                              component="img"
                              alt={item.nombre}
                              height="250"
                              image={'http://localhost:8000/' + item.foto[0]}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h6" component="h2" >
                                {item.nombre}
                              </Typography>
                              <Typography  style={{color:"#d93211"}}  gutterBottom variant="h5">
                                ${item.precio}  {<Typography style={{display:'inline-block'}} variant="subtitle1" color="textSecondary"> x Unidad</Typography>} 
                              </Typography>
                            </CardContent>
                            
                          </Card>
                        </Link>
                      </Grid>
                    </div>
                  })
                }
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
