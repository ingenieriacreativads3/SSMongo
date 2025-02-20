import React from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import slug from 'slug'

import { Container, Button, Grid, Card, ListSubheader, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent} from '@material-ui/core';
import { Link} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';



import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  slide1  from './img/slide1.jpeg';
import  slide2  from './img/slide2.jpeg';
import  slide3  from './img/slide3.jpeg';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as drawerActions from './../../store/actions/drawer'
import * as empresaActions from './../../store/actions/empresa'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HotelIcon from '@material-ui/icons/Hotel';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import OpacityIcon from '@material-ui/icons/Opacity';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HomeIcon from '@material-ui/icons/Home';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BrushIcon from '@material-ui/icons/Brush';
import LaptopIcon from '@material-ui/icons/Laptop';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import RoomIcon from '@material-ui/icons/Room';
import LocationCityIcon from '@material-ui/icons/LocationCity';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Icon(letter: string, props: any) {
  switch (letter) {
    case "A":
      return <LocalFloristIcon {...props}/>
      break;
    case "B":
      return <FilterHdrIcon {...props}/>
      break;
    case "C":
      return <LocationCityIcon {...props}/>
      break;
    case "D":
      return <EmojiObjectsIcon {...props}/>
      break;
    case "E":
      return <OpacityIcon {...props}/>
      break;
    case "F":
      return <BuildIcon {...props}/>
      break;
    case "G":
      return <StorefrontIcon {...props}/>
      break;
    case "H":
      return <EmojiTransportationIcon {...props}/>
      break;
    case "I":
      return <HotelIcon {...props}/>
      break;
    case "J":
      return <LocalPhoneIcon {...props}/>
      break;
    case "K":
      return <MonetizationOnIcon {...props}/>
      break;
    case "L":
      return <HomeIcon {...props}/>
      break;
    case "M":
      return <BusinessCenterIcon {...props}/>
      break;
    case "N":
      return <AttachFileIcon {...props}/>
      break;
    case "O":
      return <AccountBalanceIcon {...props}/>
      break;
    case "P":
      return <MenuBookIcon {...props}/>
      break;
    case "Q":
      return <LocalHospitalIcon {...props}/>
      break;
    case "R":
      return <BrushIcon {...props}/>
      break;
    case "S":
      return <LaptopIcon {...props}/>
      break;
    case "T":
      return <HomeWorkIcon {...props}/>
      break;
    case "U":
      return <RoomIcon {...props}/>
      break;
    default:
      break;
  }
}


function mapStateToProps() {
  return {
  };
}




class Home extends React.Component <{
  clasess: any,
  theme: any,
  action: any,
  actividadesEconomicas: any[],
  iconos: any[],
  itemsTrending: [
    {
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
        }
      },
      cantidad: number
    }
  ],
  items: any[]
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

  action(_id: string, classes: any) {
    return <Link to={'/item/detalle/' + _id}>
      <IconButton 
        aria-label="ver" 
        className={classes.iconButton} 
        onClick={ () => this.props.action(_id) }
      > 
        <VisibilityIcon style={{ fontSize: 40 }}  />
      </IconButton>
    </Link>
  }

  componentWillMount() {
    // this.props.dispatch(drawerActions.invisibleDrawer())
  }

  render(){

    let act: any[] = []

    if (this.props.actividadesEconomicas !== undefined && this.props.actividadesEconomicas.length > 0) {
      act = this.props.actividadesEconomicas
    }

    // console.log(act);

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

    const a11yProps = (index: number) => {
      return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
      };
    }

    let trendingItems: any[] = []
    let items: any[] = []
    
    if(this.props.itemsTrending !== undefined && this.props.itemsTrending !== null) {
      trendingItems = this.props.itemsTrending
    }

    if(
      this.props.items !== undefined &&
      this.props.items !== null &&
      Array.isArray(this.props.items) &&
      this.props.items.length > 0
    ) {
      items = this.props.items
    }

    return(

      <div className={classes.root}>
        <CssBaseline />
        { this.props.appBar }
         {this.props.drawer}
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
                value={1}
                 //onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                aria-label="scrollable force tabs example"
                className={classes.tabs}
              >
                {
                  act.map((actividad: any, key: number) => {

                    // 6029384fae08ed54b849e5f2
                    // 602be1cfb9481716c719eb58
                    // actividad.nombre.toLowerCase().replace(/ /g,'-').replace(/,/g,'')

                    return <Link 
                      to={'/home/empresas/' + slug(actividad.nombre)}
                      style={{textDecoration:'none'}}>
                        <Tab label={ actividad.nombre } 
                          icon={ Icon(actividad.letra, classes.iconoCategoria) }
                          { ...a11yProps(key) } 
                          className={classes.tab}
                        />
                      </Link>
                  })
                }
              </Tabs>
            </AppBar>
          </div>
          </Container>

						<Container maxWidth="lg"  className={classes.container} >
              <ListSubheader component="div" id="nested-list-subheader" style={{display: items.length>0 ? "block": "none"}}>
                <Typography  variant="h4" component="h3" gutterBottom>
                  Basado en tus busquedas
                </Typography>
              </ListSubheader>
              <Grid container spacing={3}>
            
                {/* <SideBarInicio></SideBarInicio> */}
              
                {
                  items.map((asd: any) => {

                    return <div>
                      <Grid item lg={3}>
                        <Link to={`/item/detalle/`+ asd._id} style={{textDecoration:'none'}}>
                          <Card style={{height:'90%'}} onClick={ () => this.props.action(asd._id)} className={classes.card}>
                          
                              <CardMedia
                                component="img"
                                alt={asd.nombre}
                                height="250"
                                image={'http://localhost:8000/' + asd?.foto?.[0] || ''}
                                // className={classes.cardMedia}
                                // image={'http://localhost:8000/' + asd.foto[0]}
                                //title={asd.nombre}
                              />
                              <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h6" component="h2" className={classes.cardName} >
                                {asd.nombre.length > 49 ? asd.nombre.slice(0, 45) + "..." : asd.nombre}
                                </Typography>
                                <Typography  style={{color:"#d93211"}}  gutterBottom variant="h5">
                                  { asd.mostrarPrecio ? "$" + asd.precio + ' ' : "Consultar precio " }
                                  {
                                    <Typography style={{display:'inline-block'}} variant="subtitle1" color="textSecondary">
                                      { ' ' + asd?.unidad_de_medida?.nombre || '' }
                                    </Typography>
                                  } 
                                </Typography>
                              </CardContent>
                            
                          </Card>
                        </Link>
                      </Grid>
                    </div>
                  })
                }
              
              </Grid>

              <ListSubheader component="div" id="nested-list-subheader">
                <Typography style={{paddingTop:'30px'}} variant="h4" component="h3" gutterBottom>
                  Lo más buscado
                </Typography>
              </ListSubheader>
              <Grid container spacing={3}>
            
                {
                  trendingItems.map((asd: any) => {

                    return <div>
                      <Grid item lg={3}>
                        <Link to={`/item/detalle/`+ asd.item._id} style={{textDecoration:'none'}}>
                          <Card style={{height:'90%'}} onClick={ () => this.props.action(asd.item._id)} className={fixedHeightCardCatalog}>
                          
                              <CardMedia
                                component="img"
                                alt={asd.item.nombre}
                                height="250"
                                image={'http://localhost:8000/' + asd.item.foto[0]}
                                //title={asd.item.nombre}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h6" component="h2" >
                                  {asd.item.nombre}
                                </Typography>
                                <Typography  style={{color:"#d93211"}}  gutterBottom variant="h5">
                                  { asd.item.mostrarPrecio ? "$" + asd.item.precio + ' ' : "Consultar precio" }
                                  { 
                                    <Typography style={{display:'inline-block'}} variant="subtitle1" color="textSecondary">
                                      { ' ' + asd?.item?.unidad_de_medida?.nombre || '' }
                                    </Typography>
                                  }
                                </Typography>
                              </CardContent>
                            
                          </Card>
                        </Link>
                      </Grid>
                    </div>
                  })
                }
              
              </Grid>
							
							
						</Container>
            {this.props.footer}
					</main>
		  </div>
    );
  }
}

export default  connect(mapStateToProps) (Home)
