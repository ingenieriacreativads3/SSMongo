import React from 'react';
import AppBar from '../AppBar'
import clsx from 'clsx'


import { Container, Grid, Card, Box, Typography,Chip, CssBaseline, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, TextareaAutosize, List} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import menuLateral from '../Drawer'

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

function mapStateToProps(store: {}) {
  return {
    Item: store
  };
}

class Validacion extends React.Component <{}, {

    personName: []
}> {

    props: any
	static propTypes: any
    static defaultProps: any
  
  constructor(props: any) {
    super(props);
    this.state = {
      personName: [],
      };
    }
  


  render(){

		const classes = this.props.classes
        const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
          ];

          const ITEM_HEIGHT = 48;
          const ITEM_PADDING_TOP = 8;

          const MenuProps = {
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
              },
            },
          };

    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        <MenuLateral></MenuLateral>
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                            S
                          </Avatar>
                        }
                        title="Solicitud de Validación"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          <Grid container spacing={3}>
                            <Grid item lg={4}>
                            <Input defaultValue="101" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="Symsa" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Link href="https://www.argentina.gob.ar/justicia/registro-nacional-sociedades" target="_blank" className={classes.button}>
                                      <Button
                                      type="button"
                                      
                                      variant="contained"
                                      className={classes.button}
                                      // onClick={this.ingresar}
                                      >
                                      Validar CUIT
                                      </Button>
                                    </Link>
                                    </Grid>
                            
                          </Grid>
                          
                          <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <Input defaultValue="Symsa SA" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            <Input defaultValue="30-12345678-4" disabled inputProps={{ 'aria-label': 'description' }} className={classes.input}  />
                            </Grid>
                            <Grid item lg={4}>
                            
                            <Link href="https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaActivEconomicaAction.do" target="_blank" className={classes.button}>
                                      <Button
                                      type="button"
                                      
                                      variant="contained"
                                      className={classes.button}
                                      // onClick={this.ingresar}
                                      >
                                      Verificar rubro
                                      </Button>
                                    </Link>
                            
                            
                              
                          </Grid>
                            
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item lg={6}>
                              <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  defaultValue={1}
                                  // value={unidadDeMedida}
                                  // onChange={this.getUnidadDeMedida}
                                  
                                >
                                  <MenuItem value={1}>No Validada</MenuItem>
                                  <MenuItem value={2}>Validada</MenuItem>
                                  <MenuItem value={3}>Autenticada</MenuItem>
                                  <MenuItem value={4}>No Autenticada</MenuItem>
                                 
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item lg={6}>
                              {/* <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-mutiple-chip-label">Rubro</InputLabel>
                                    <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={this.state.personName}
                                    onChange={(event, newPersonName ) => {
                                        this.setState({
                                            personName: newPersonName
                                        })
                                      }}

                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                    >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl> */}
                            </Grid>
                           
                        </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >
                        <Grid item lg={12} >
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            // startIcon={<SaveIcon />}
                          >
                            Aceptar
                          </Button>
                          </Grid>  
                        </Grid>
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

Validacion.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Validacion)