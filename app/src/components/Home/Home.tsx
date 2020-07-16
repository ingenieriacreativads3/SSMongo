import React from 'react';
import ApBar from '../AppBar'
import  DrawerInicio  from './../DrawerInicio';
import clsx from 'clsx'
import { connect } from 'react-redux'

import { Container, Divider, Button, Grid, Card, Box,ListSubheader, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { Link} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import  foto  from '../Login/img/photo2.png';
import { Footer } from '../Footer'
import { SideBarInicio } from '../SideBarInicio'

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  slide1  from './img/slide1.jpeg';
import  slide2  from './img/slide2.jpeg';
import  slide3  from './img/slide3.jpeg';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import * as drawerActions from './../../store/actions/drawer'


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



class Home extends React.Component <{
  clasess: any,
  theme: any
}, {

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

  // componentWillMount() {
  //   this.props.dispatch(drawerActions.invisibleDrawer())
  // }

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

    const handleChange = (step: number) => {
      this.setState({
        activeStep: step
      });
    };

    const a11yProps = (index: number) => {
      return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
      };
    }

    return(

      <div className={classes.root}>
        <CssBaseline />
        {this.props.appBar}
        {/* {this.props.drawer} */}
					<main className={classes.content}>
          <div className={classes.rootCarousel}>
          
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            
          >
            {tutorialSteps.map((step, index) => (
              <div>
                {Math.abs(this.state.activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath}  />
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
            {/* <ListSubheader component="div" id="nested-list-subheader">
              <Typography className = {classes.title} variant="h3" component="h3" gutterBottom>
                Categorias
              </Typography>
            </ListSubheader> */}
            <div className={classes.rootCategorias}>
            
                                  
            <AppBar position="static" color="default">
              <Tabs
                 value={""}
                 //onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                aria-label="scrollable force tabs example"
                className={classes.tabs}
               
              >
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}> <Tab label="Item One" icon={<PhoneIcon  className={classes.iconoCategoria}/> }  {...a11yProps(0)} className={classes.tab} /></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Two" icon={<FavoriteIcon className={classes.iconoCategoria} />}  {...a11yProps(1)}  className={classes.tab} /></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Three" icon={<PersonPinIcon className={classes.iconoCategoria} />}  {...a11yProps(2)}className={classes.tab}  /></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Four" icon={<HelpIcon className={classes.iconoCategoria} />}  {...a11yProps(3)} className={classes.tab} /></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Five" icon={<ShoppingBasket className={classes.iconoCategoria} />}  {...a11yProps(4)} className={classes.tab}/></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Six" icon={<ThumbDown className={classes.iconoCategoria} />}  {...a11yProps(5)} className={classes.tab} /></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Seven" icon={<ThumbUp className={classes.iconoCategoria} />}  {...a11yProps(6)} className={classes.tab} /></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Eigth" icon={<ThumbUp className={classes.iconoCategoria}/>}  {...a11yProps(6)}  className={classes.tab}/></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Nine" icon={<ThumbUp className={classes.iconoCategoria} />}  {...a11yProps(6)}  className={classes.tab}/></Link>
                <Link to="/home/busqueda/:id" style={{textDecoration:'none'}}><Tab label="Item Ten" icon={<ThumbUp className={classes.iconoCategoria}/>}  {...a11yProps(6)}  className={classes.tab}/></Link>
                
              </Tabs>
              
              
            </AppBar>
                
          </div>
          </Container>



						<Container maxWidth="lg"  className={classes.container} >
            <ListSubheader component="div" id="nested-list-subheader">
              <Typography  variant="h4" component="h3" gutterBottom>
                Basado en tus busquedas
              </Typography>
            </ListSubheader>
            <Grid container spacing={3}>
           
                {/* <SideBarInicio></SideBarInicio> */}
               
                
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

export default Home
