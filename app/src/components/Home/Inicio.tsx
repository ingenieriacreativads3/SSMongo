import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, FormControl, Button, InputLabel,Select, MenuItem, Grid, Card, Box, Paper,Drawer, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import  foto  from '../Login/img/photo2.png';
import { Footer } from '../Footer'
import { SideBarInicio } from '../SideBarInicio'

import * as dialogAction from './../../store/actions/dialog'

import { connect } from 'react-redux'

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RoomIcon from '@material-ui/icons/Room';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

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
  dialogReducer: {
    openDialog: boolean
  }
}) {
  return {
    openDialog: store.dialogReducer.openDialog
  };
}

class Inicio extends React.Component <{}, {

  valueFilter: number | null,
  hoverFilter: any,
  
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			valueFilter: 2,
      hoverFilter: -1,
      
		};
  }

 

  render(){

		const classes = this.props.classes
		const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
    
    const labels: { [index: string]: string } = {
      1: 'Muy Malo',
      2: 'Malo',
      3: 'Bueno',
      4: 'Muy Bueno',
      5: 'Excelente',
    };



    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
					<main className={classes.content}>
            <Paper className={classes.mainFeaturedPost} /* style={{ backgroundImage: `url(${post.image})` }} */>
              {/* Increase the priority of the hero background image */}
              {<img style={{ display: 'none' }}/*  src={post.image} alt={post.imageText} */ />}
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {/*  {post.title} */}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                    {/*  {post.description} */}
                    </Typography>
                {/*    <Link variant="subtitle1" href="#">
                      {post.linkText} 
                    </Link> */}
                  </div>
                </Grid>
              </Grid>
            </Paper>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
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
							
							<Box pt={4}>
								<Copyright />
							</Box>
						</Container>
            <Footer></Footer>
					</main>

          
         
		 </div>

    );
  }
}

export default connect(mapStateToProps)(Inicio)
