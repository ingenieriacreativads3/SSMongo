import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid, Card, Box, Paper,Drawer, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import  foto  from '../Login/img/photo2.png';

import * as dialogAction from './../../store/actions/dialog'

import { connect } from 'react-redux'

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

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

class Inicio extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.eliminarItem = this.eliminarItem.bind(this);
    this.state = {
      Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      }
    };
  }

  eliminarItem() {
    // this.props.dispatch(dialogAction.eliminarItemOpen())
  }

  render(){

		const classes = this.props.classes
		const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
 
    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        <Drawer >
              <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button >
            {/* onClick={handleClick} */}
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItem>
            {/* <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
          </Collapse> */}
        </List>
        </Drawer>
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
            <Grid container spacing={3} >

              <Grid item lg={4}>
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
                <Grid item lg={4}>
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
                <Grid item lg={4}>
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
							<Grid container spacing={3}>

                <Grid item lg={4}>
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
                  <Grid item lg={4}>
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
                  <Grid item lg={4}>
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
					</main>

         
		 </div>

    );
  }
}

export default connect(mapStateToProps)(Inicio)
