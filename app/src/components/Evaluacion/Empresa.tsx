import React from 'react';
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';
import { Container, Grid, Card, Box, Typography, CssBaseline, RadioGroup, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import Radio from '@material-ui/core/Radio';

import * as Login from './../../store/actions/login'
import * as drawerActions from './../../store/actions/drawer'
import AppBar from './../AppBar'

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

class EvaluacionEmpresa extends React.Component <{}, {
  valueTime: number | null,
  hoverTime: any,
  valuePrice: number | null,
  hoverPrice: any,
  valueAvailable: number | null,
	hoverAvailable: any,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			valueTime: 2,
      hoverTime: -1,
      valuePrice: 2,
      hoverPrice: -1,
      valueAvailable: 2,
      hoverAvailable: -1,
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
        <AppBar></AppBar>
        
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Grid container spacing={3}>

                <Grid item lg={9}>
									<Card className={fixedHeightCard}>
                    <CardHeader 
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar} >
                          E
                        </Avatar>
                      }
                      title="¡Gracias por tu compra! Tu opinión es importante para nosotros"
                        
                    />

                    <CardContent>
                      <form className={classes.root}>
                        <Grid container spacing={3}>
                          
                        <Grid item lg={12}>
                        <div className={classes.root}>
                       
                          <div>
                            <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
                              Empresa : Symsa
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              Tiempo de respuesta a los mensajes/consultas
                            </Typography>
                              
                            <Rating
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
                            { this.state.valueTime !== null && <Box ml={2}>{labels[this.state.hoverTime !== -1 ? this.state.hoverTime : this.state.valueTime]}</Box>}
                            
                            <Typography variant="subtitle1" gutterBottom>
                              Relación precio - calidad
                       </Typography>
                            
                            <Rating
                                name="hover-feedback-price"
                                value={this.state.valuePrice}
                                precision={1}
                                onChange={(event, newValuePrice) => {
                                  this.setState({
                                    valuePrice: newValuePrice
                                  })
                                }}
                                onChangeActive={(event, newHoverPrice) => {
                                  this.setState({
                                    hoverPrice: newHoverPrice
                                  })
                                }}
                            />
                            { this.state.valuePrice !== null && <Box ml={2}>{labels[this.state.hoverPrice !== -1 ? this.state.hoverPrice : this.state.valuePrice]}</Box>}
                            <Typography variant="subtitle1" gutterBottom>
                            Disponibilidad de productos y/o servicios
                       </Typography>
                            
                       <Rating
                          name="hover-feedback-available"
                          value={this.state.valueAvailable}
                          precision={1}
                          onChange={(event, newValueAvailable) => {
                            this.setState({
                              valueAvailable: newValueAvailable
                            })
                          }}
                          onChangeActive={(event, newHoverAvailable) => {
                            this.setState({
                              hoverAvailable: newHoverAvailable
                            })
                          }}
                        />
                        { this.state.valueAvailable !== null && <Box ml={2}>{labels[this.state.hoverAvailable !== -1 ? this.state.hoverAvailable : this.state.valueAvailable]}</Box>}
                            
                            <Typography variant="subtitle1" gutterBottom>
                            ¿Volvería a operar con esta empresa?
                       </Typography>
                       <RadioGroup row aria-label="position" name="position" defaultValue="top"  >
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
                          
                            </div>
                            </div>
                            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Mensaje"  />
                            </Grid>
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
							<Box pt={4}>
								<Copyright />
							</Box>
						</Container>
					</main>

         
		 </div>

    );
  }
}

EvaluacionEmpresa.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(EvaluacionEmpresa)