import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid, Card, Box, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';

import * as dialogAction from './../../store/actions/dialog'

import { connect } from 'react-redux'

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
       
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={4}>
                  <Card className={fixedHeightCardCatalog}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Samsung A20"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
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
                    <CardActions disableSpacing>
                    <Link to="/item/detalle/:id">
                      <IconButton aria-label="ver" className={classes.iconButton}> 
                        <VisibilityIcon />
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
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Samsung A20"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Samsung A20
                        </Typography>
                        <Typography variant="subtitle1" component="h2">
                          $16000
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                    <Link to="/item/detalle/:id">
                      <IconButton aria-label="ver" className={classes.iconButton}> 
                        <VisibilityIcon />
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
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Samsung A20"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Samsung A20
                        </Typography>
                        <Typography variant="subtitle1" component="h2">
                          $16000
                        </Typography>
                       
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                    <Link to="/item/detalle/:id">
                      <IconButton aria-label="ver" className={classes.iconButton}> 
                        <VisibilityIcon />
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
