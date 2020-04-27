import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'


import { Container, Grid, Card, Box, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link} from "react-router-dom";

import * as dialogAction from './../../store/actions/dialog'

//import * as ItemAction from "../../store/actions/ItemAction";
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
    openDialogEliminarItem: boolean
  }
}) {
  return {
    dialogReducer: {
      openDialogEliminarItem: store.dialogReducer.openDialogEliminarItem
    }
  };
}

class Catalogo extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.eliminarItem = this.eliminarItem.bind(this);
/*     this.onSubmit = this.onSubmit.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getUnidadDeMedida = this.getUnidadDeMedida.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this); */
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
/* 
  onSubmit() {
    this.props.dispatch(ItemAction.nuevo(this.props.idEmpresa, this.state.Item));
  }

  getNombre(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        nombre: e.target.value
      }
    });

  }

  getPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        precio: e.target.value
      }
    });

  }

  getFoto(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        foto: e.target.value
      }
    });

  }

  getDescripcion(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        descripcion: e.target.value
      }
    });

  }

  getCaracteristicas(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        caracteristicas: e.target.value
      }
    });

  }

  getUnidadDeMedida(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        unidadDeMedida: e.target.value
      }
    });

  }

  getMostrarPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        mostrarPrecio: e.target.value
      }
    });

  } */

  eliminarItem() {
    console.log('this.eliminarItem()')
    this.props.dispatch(dialogAction.eliminarItemOpen())
  }

  render(){

		const classes = this.props.classes
		const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
   /*  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }; */

 
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
                        <Typography variant="body2" color="textSecondary" component="p">
                          Android (9.0) 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                    <Link to="/item/editar">
                      <IconButton aria-label="editar"className={classes.iconButton}>
                        <EditIcon />
                      </IconButton>
                      </Link>
                      <IconButton aria-label="eliminar"className={classes.iconButton} onClick={this.eliminarItem}>
                        <DeleteIcon />
                      </IconButton>
                      
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
                        <Typography variant="body2" color="textSecondary" component="p">
                          Android (9.0) 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                      <Link to="/item/editar">
                      <IconButton aria-label="editar"className={classes.iconButton}>
                        <EditIcon />
                      </IconButton>
                      </Link>
                      <IconButton aria-label="eliminar"className={classes.iconButton}>
                        <DeleteIcon />
                      </IconButton>
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
                        <Typography variant="body2" color="textSecondary" component="p">
                          Android (9.0) 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                    <Link to="/item/editar">
                      <IconButton aria-label="editar" className={classes.iconButton}> 
                        <EditIcon />
                      </IconButton>
                      </Link>
                      <IconButton aria-label="eliminar" className={classes.iconButton}>
                        <DeleteIcon />
                      </IconButton>
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

Catalogo.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Catalogo)
