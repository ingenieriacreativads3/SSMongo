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

import * as itemActions from './../../store/actions/item'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EvStationIcon from '@material-ui/icons/EvStation';
import HotelIcon from '@material-ui/icons/Hotel';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
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
import LayersIcon from '@material-ui/icons/Layers';
import AppsIcon from '@material-ui/icons/Apps';


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
    this.props.dispatch(drawerActions.invisibleDrawer())
  }

  render(){

    let act: any[] = []

    if (this.props.actividadesEconomicas !== undefined && this.props.actividadesEconomicas.length > 0) {
      act = this.props.actividadesEconomicas
    }

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
                {
                  act.map((actividad: any, key: number) => {
                    return <Link 
                      to="/home/busqueda/:id" 
                      style={{textDecoration:'none'}}>
                        <Tab label={actividad.nombre} 
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
              <ListSubheader component="div" id="nested-list-subheader">
                <Typography  variant="h4" component="h3" gutterBottom>
                  Basado en tus busquedas
                </Typography>
              </ListSubheader>
              <Grid container spacing={3}>
            
                  {/* <SideBarInicio></SideBarInicio> */}
                
                  {
                    this.props.items.map((asd: any[]) => {

                      // let fotos: string[] = ['']

                      // if(item.foto !== undefined && item.foto.length > 0) {
                      //   fotos = item.foto
                      // }

                      // let unidadDeMedidaNombre: string = ''

                      
                      // if(item.unidad_de_medida !== undefined) {
                      //   unidadDeMedidaNombre = item.unidad_de_medida.nombre
                      // }

                      return <div>
                        <Grid item lg={3}>
                          <Card className={fixedHeightCardCatalog}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                alt={asd[0].nombre}
                                height="140"
                                image={'http://localhost:8000/' + asd[0].foto[0]}
                                title={asd[0].nombre}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {asd[0].nombre}
                                </Typography>
                                <Typography variant="subtitle1" component="h2">
                                  ${asd[0].precio} x unidad de medida (mirar issue)
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions >
                              { this.action(asd[0]._id, classes) }
                            </CardActions>
                          </Card>
                        </Grid>
                      </div>
                    })
                  }
              
              </Grid>

              <ListSubheader component="div" id="nested-list-subheader">
                <Typography  variant="h4" component="h3" gutterBottom>
                  Los más buscados
                </Typography>
              </ListSubheader>
              <Grid container spacing={3}>
            
                  {/* <SideBarInicio></SideBarInicio> */}
                
                  {
                    this.props.itemsTrending.map((asd: {
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
                    }) => {

                      // let fotos: string[] = ['']

                      // if(item.foto !== undefined && item.foto.length > 0) {
                      //   fotos = item.foto
                      // }

                      // let unidadDeMedidaNombre: string = ''

                      
                      // if(item.unidad_de_medida !== undefined) {
                      //   unidadDeMedidaNombre = item.unidad_de_medida.nombre
                      // }

                      return <div>
                        <Grid item lg={3}>
                          <Card className={fixedHeightCardCatalog}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                alt={asd.item.nombre}
                                height="140"
                                image={'http://localhost:8000/' + asd.item.foto[0]}
                                title={asd.item.nombre}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {asd.item.nombre}
                                </Typography>
                                <Typography variant="subtitle1" component="h2">
                                  ${asd.item.precio} x unidad de medida (mirar issue)
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions >
                              { this.action(asd.item._id, classes) }
                            </CardActions>
                          </Card>
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
