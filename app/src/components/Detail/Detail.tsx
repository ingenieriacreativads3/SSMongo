import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'

import { Container, Grid,TextField, Card, Box, Typography, CssBaseline, CardHeader, Avatar, TextareaAutosize,  Button, CardContent,  CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import { connect } from 'react-redux'
import MenuLateral from '../Drawer';

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
  requestReducer: {}
}) {
  return {
    requestReducer: store.requestReducer
  };
}

class Detail extends React.Component <{
  title: string,
  subtitle1:string,
  subtitle2:string,
  empresa: string,
  importe: string,
  estado: string,
  cantidad: string,
  item: {
    nombre: string,
    precio: string,
    unidad: string
  }
}, {}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

    return(

      <div className={classes.root}>
        <CssBaseline />
       {this.props.appBar}
        {this.props.drawer}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

              <Grid item lg={12}>
                <Card className={fixedHeightCard}>
                  <CardHeader 
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        D
                      </Avatar>
                    }
                    title={this.props.title}
                    
                  />

                  <CardContent>
                    <div className={classes.root}>
                      <Grid container spacing={3}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                           {this.props.subtitle1}
                           <span style={{paddingLeft:20}}> <Button variant="outlined" style={{color:'#ffba00', borderColor:'#ffba00'}}>{this.props.estado}</Button></span>
                        </Typography>
                    </CardContent>
                        <Grid container>
                          <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Empresa" value={this.props.empresa}  className={classes.input}  />
                          </Grid>
                          <Grid item lg={4}>
                            <TextField disabled id="standard-required" label="Importe" value={this.props.importe}  className={classes.input}  />
                          </Grid>
                          <Grid item lg={4}>
                          <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={10} className={classes.textTarea} placeholder="Mensaje"  />
                          </Grid>
                        </Grid>
                        <CardContent>
                        <Typography variant="h5" component="h2">
                           {this.props.subtitle2}
                        </Typography>
                    </CardContent>
                        <Grid container >
                          <Grid item lg={3}>
                            <TextField disabled id="standard-required" label="Nombre" value={this.props.item.nombre}  className={classes.input}  />
                          </Grid>
                          <Grid item lg={3}>
                            <TextField disabled id="standard-required" label="Precio" value={this.props.item.precio}  className={classes.input}  />
                          </Grid>
                          <Grid item lg={3}>
                            <TextField disabled id="standard-required" label="Cantidad" value={this.props.cantidad}  className={classes.input}  />
                          </Grid>
                          
                        </Grid>

                        <Grid container>
                          <Grid item lg={3}>
                            <TextField disabled id="standard-required" label="Unidad de Medida" value={this.props.item.unidad}  className={classes.input}  />
                          </Grid>
                        </Grid>
                        
                      </Grid>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >
                      <Grid item lg={12} >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classes.button}
                        >
                          Aceptar
                        </Button>
                        </Grid>  
                      </Grid>
                  </CardActions>
                  
                </Card>
              </Grid>

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

export default connect(mapStateToProps)(Detail)