import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';

import { Container, Grid, Card, Box, Typography, CssBaseline, RadioGroup, CardHeader, Avatar,  Button, CardContent, FormControlLabel, CardActions,TextareaAutosize, Divider} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import * as Login from './../../store/actions/login'
import Radio from '@material-ui/core/Radio';

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../DrawerInicio';
import * as drawerActions from './../../store/actions/drawer'

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
	Item: {},
	login: {
		data: {
			empresa: {
				_id: string
			}
		}
	}
}) {
  return {
    Item: store.Item,
    // idEmpresa: store.login.data.empresa._id
  };
}

class EvaluacionSuppliersStore extends React.Component <{}, {
  valueTime: number | null,
  hoverTime: any,
  valueNavigability: number | null,
  hoverNavigability: any,
  valueUpdate: number | null,
	hoverUpdate: any,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			valueTime: 2,
      hoverTime: -1,
      valueNavigability: 2,
      hoverNavigability: -1,
      valueUpdate: 2,
      hoverUpdate: -1,
		};
	}

  componentWillMount() {
    this.props.dispatch(drawerActions.invisibleDrawer())
  }


  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

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
        {this.props.appBar}
        <MenuLateral></MenuLateral>
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={12}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                        avatar={
                          <Avatar aria-label="recipe" className={classes.avatar} >
                            E
                          </Avatar>
                        }
                        title="Tu opinión es importante para mejorar nuestra plataforma web"
                        
                      />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container >
                          <Grid container >
                          
                              <Grid item lg={6}>
                       
                          
                        <Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta}>
                        Navegabilidad del sitio web
                       </Typography>
                            
                            <Rating
                             className={classes.respuestaEncuesta}
                              name="hover-feedback-navigability"
                              value={this.state.valueNavigability}
                              precision={1}
                              onChange={(event, newValueNavigability) => {
                                this.setState({
                                  valueNavigability: newValueNavigability
                                })
                              }}
                              onChangeActive={(event, newHoverNavigability) => {
                                this.setState({
                                  hoverNavigability: newHoverNavigability
                                })
                              }}
                            />
                            { this.state.valueNavigability !== null && <Box  className={classes.respuestaEncuesta} ml={2}>{labels[this.state.hoverNavigability !== -1 ? this.state.hoverNavigability : this.state.valueNavigability]}</Box>}
                            
                          </Grid>

                              <Grid item lg={6}>

                            <Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta}>
                            Actualización de la plataforma
                       </Typography>
                            
                            <Rating
                             className={classes.respuestaEncuesta}
                                name="hover-feedback-update"
                                value={this.state.valueUpdate}
                                precision={1}
                                onChange={(event, newValueUpdate) => {
                                  this.setState({
                                    valueUpdate: newValueUpdate
                                  })
                                }}
                                onChangeActive={(event, newHoverUpdate) => {
                                  this.setState({
                                    hoverUpdate: newHoverUpdate
                                  })
                                }}
                            />
                            { this.state.valueUpdate !== null && <Box  className={classes.respuestaEncuesta} ml={2}>{labels[this.state.hoverUpdate !== -1 ? this.state.hoverUpdate : this.state.valueUpdate]}</Box>}
                            
                            </Grid>
                            
                            </Grid>

                            <Grid container >
                                <Grid item lg={6}>
                                  <Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta}>
                                  Tiempo de respuesta a los mensajes/consultas
                                  </Typography>
                                  
                                  <Rating
                                   className={classes.respuestaEncuesta}
                                      name="hover-feedback-time"
                                      value={this.state.valueTime}
                                      precision={1}
                                      onChange={(event, newValueTime) => {
                                        this.setState({
                                          valueTime: newValueTime
                                        })
                                      }}
                                      onChangeActive={(event, newHoverTime) => {
                                        this.setState({
                                          hoverTime: newHoverTime
                                        })
                                      }}
                                    />
                              { this.state.valueTime !== null && <Box  className={classes.respuestaEncuesta} ml={2}>{labels[this.state.hoverTime!== -1 ? this.state.hoverTime : this.state.valueTime]}</Box>}
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="subtitle1" gutterBottom  className={classes.preguntaEncuesta}>
                                ¿Recomendaria Suppliers Store?
                                </Typography>

                                <RadioGroup row aria-label="position" name="position" defaultValue="top"  className={classes.respuestaEncuesta} >
                                  <FormControlLabel
                                    value="SI"
                                    control={<Radio className={classes.radioButton} />}
                                    label="SI"
                                    labelPlacement="start"
                                  
                                  />
                                  <FormControlLabel
                                    value="NO"
                                    control={<Radio className={classes.radioButton} />}
                                    label="NO"
                                    labelPlacement="start"
                                  
                                  />
                                </RadioGroup>

                              </Grid>
                              </Grid>
                            
                            <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={10} placeholder="Mensaje" className={classes.textTarea} />
                            
                        </Grid>
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
                              startIcon={<SendIcon />}
                            //   onClick={() => this.register()}
                            >
                              Enviar
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

EvaluacionSuppliersStore.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(EvaluacionSuppliersStore)