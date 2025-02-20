import React from 'react';
import clsx from 'clsx'

import { Container, Grid, Card,  Typography, CssBaseline, CardActionArea, CardMedia, IconButton, CardContent, CardActions} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link} from "react-router-dom";
import MenuLateral from '../Drawer'

import { AntSwitch } from './index'

import { connect } from 'react-redux'

function mapStateToProps(store: {
  dialogReducer: {
    openDialog: boolean
  }
}) {
  return {
    openDialog: store.dialogReducer.openDialog
  };
}

class Catalogo extends React.Component <{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.eliminarItem = this.eliminarItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
    };
  }

  eliminarItem(id: string) {
    this.props.delete(id)
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.getChecked(event.target.checked)
  };

 

  render(){

		const classes = this.props.classes
    const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
 
    // console.log(this.props.items)

    return(

      <div className={classes.root}>
        <CssBaseline />
        { this.props.appBar }
        <MenuLateral></MenuLateral>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <div className={classes.search}>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Tarjetas</Grid>
                <Grid item>
                  <AntSwitch checked={ this.props.checked } onChange={this.handleChange} name="checked" className={classes.switch}  />
                </Grid>
                <Grid item>Tabla</Grid>
              </Grid>
            </Typography>
          </div>

          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
            
              {this.props.items.map((itemAux: {
                item: {
                  _id: string,
                  nombre: string,
                  precio: string,
                  descrpcion: string,
                  mostrarPrecio: boolean,
                  unidad_de_medida_id: string,
                  foto: string,
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
                return <Grid item lg={3} md={4} sm={6}>
                  <Card className={classes.cardProducto}>
                      <CardMedia
                        component="img"
                        alt={itemAux.item.nombre}
                        height="150"
                        image={'http://localhost:8000/' + itemAux.item.foto[0]}
                        title={itemAux.item.nombre}
                        className={classes.cardMedia}
                      />
                      <CardContent  className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2"  className={classes.cardName}>
                          {itemAux.item.nombre.length > 42 ? itemAux.item.nombre.slice(0, 39) + "..." : itemAux.item.nombre}
                        </Typography>
                        <Typography style={{color:"#d93211"}} gutterBottom variant="h5" component="h2">
                          {itemAux.item.mostrarPrecio? "$" + itemAux.item.precio: "Consultar precio"} {<Typography variant="subtitle1" color="textSecondary"> x {itemAux.item.unidad_de_medida.nombre}</Typography> }
                        </Typography>
                       {/*  <Typography variant="body2" color="textSecondary" component="p">
                          {itemAux.item.descrpcion}
                        </Typography> */}
                      </CardContent>
                    
                    <CardActions disableSpacing>
                      <Link to={'/item/editar/' + itemAux.item._id}>
                        <IconButton aria-label="editar"className={classes.iconButton}>
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton aria-label="eliminar"className={classes.iconButton} onClick={() => this.eliminarItem(itemAux.item._id)}>
                        <DeleteIcon />
                      </IconButton>
                      
                    </CardActions>
                    </Card>
                </Grid>
              })}
              
                
            </Grid>
            {/* <Box pt={4}>
              <Copyright />
            </Box> */}
          </Container>
          {this.props.footer}
        </main>

         
		  </div>

    );
  }
}

export default connect(mapStateToProps)(Catalogo)
