import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, Grid, Card, Box, Typography, TextField, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import * as ubicacionActions from './../../store/actions/ubicacion'
import * as fileActions from './../../store/actions/file'


//import * as ItemAction from "../../store/actions/ItemAction";
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
  
}) {
  return {
  
  };
}

class CambiarContraseña extends React.Component <{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  update: any,
  empresa: {
    "clave": string,
  }
}, {
  
  empresa: {
    "clave": string,
  }
}>  {

	props: any
	static propTypes: any
	static defaultProps: any
 
  constructor(props: any) {
    super(props);
    //this.changeUsuario = this.changeUsuario.bind(this);
    
    this.state = {
      empresa: {
        "clave": '',
      }
    };
  }


  changeClave(e: any) {
    this.setState({ empresa: { ...this.state.empresa, clave: e.target.value } })
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

                <Grid item lg={9}>
                  
                <Card className={fixedHeightCard}>
                    <CardHeader 
                    
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            D
                          </Avatar>
                        }
                        title="Cambiar contraseña"
                        
                      />
                      
                    <CardContent>
                      <form className={classes.root}>
                        {/* <Grid container spacing={3}>
                        
                        <Grid container spacing={3}>
                        <Grid item lg={4}> */}
                              
                              <TextField
                                className={classes.textField}
                                label="Contraseña actual"
                                variant="outlined"
                                //value={ this.state.empresa.usuario }
                                //onChange={ this.changeUsuario }
                                id="mui-theme-provider-outlined-input"
                                InputLabelProps={{
                                  classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                  },
                                }}
                                InputProps={{
                                  classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                  },
                                }}
                              />

                            <TextField
                                className={classes.textField}
                                label="Nueva Contraseña"
                                variant="outlined"
                                //value={ this.state.empresa.usuario }
                                //onChange={ this.changeUsuario }
                                id="mui-theme-provider-outlined-input"
                                InputLabelProps={{
                                  classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                  },
                                }}
                                InputProps={{
                                  classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                  },
                                }}
                              />

                            <TextField
                                className={classes.textField}
                                label="Repita Nueva Contraseña"
                                variant="outlined"
                                //value={ this.state.empresa.usuario }
                                //onChange={ this.changeUsuario }
                                id="mui-theme-provider-outlined-input"
                                InputLabelProps={{
                                  classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                  },
                                }}
                                InputProps={{
                                  classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                  },
                                }}
                              />
                            
                          {/* </Grid>
                        
                          
                         
                        </Grid>
                        </Grid> */}
                      </form>
                    </CardContent>
                    <CardActions>

                        <Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >

                          <Grid item lg={12} >

                            <Button
                              variant="contained"
                              color='primary'
                              size="small"
                              className={classes.button}
                              startIcon={<SaveIcon />}
                              onClick={() => this.props.update(
                                this.state.empresa.clave,
                              )}
                            >
                              Guardar
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


export default connect(mapStateToProps)(CambiarContraseña)