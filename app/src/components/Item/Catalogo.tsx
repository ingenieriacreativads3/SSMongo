import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, InputBase, Grid, Card, Box, Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link} from "react-router-dom";
import MenuLateral from '../Drawer'
import SearchIcon from '@material-ui/icons/Search';

import foto from './../Login/img/photo2.png'
import foto1 from './../Login/img/logo.png'

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

class Catalogo extends React.Component <{
  items: any[]
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.eliminarItem = this.eliminarItem.bind(this);
    this.state = {
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
        <MenuLateral></MenuLateral>
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
            <div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Buscar"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>
              
                {this.props.items.map((itemAux: {
                  item: {
                    _id: string,
                    nombre: string,
                    precio: string,
                    foto: string,
                    unidad_de_medida_id: string,
                    updated_at: string,
                    created_at: string,
                    catalogo_id: string,
                    unidad_de_medida: {
                      _id: string,
                      nombre: string,
                      abreviatura: string,
                      updated_at: string,
                      created_at: string,
                    }
                  }
                }) => {
                  return <div>
                    <Grid item lg={3} md={4} sm={6}>
                      <Card className={fixedHeightCardCatalog}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={itemAux.item.nombre}
                            height="150"
                            image={foto}
                            title={itemAux.item.nombre}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {itemAux.item.nombre}
                            </Typography>
                            <Typography variant="subtitle1" component="h2">
                              {itemAux.item.precio}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Descripcion (falta traer) 
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
                  </div>
                })}
                
                  
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

export default connect(mapStateToProps)(Catalogo)
