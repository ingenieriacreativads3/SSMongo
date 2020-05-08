import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';

import { Container, Grid, Card, Box, Typography, CssBaseline, RadioGroup, CardHeader, Avatar,  Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions,TextareaAutosize} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import * as Login from './../../store/actions/login'
import Radio from '@material-ui/core/Radio';

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../Drawer';
const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB

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

    value: 2,
	hover: -1
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			value: 2,
			hover: -1
		};
	}



  render(){

		const classes = this.props.classes
        const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
        
        /* const Value = (event) => {
			this.setState({
				value: event.currentTarget
			})
        };

        const Hover = (event) => {
			this.setState({
				hover: event.currentTarget
			})
		}; */


        const labels = {
            
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
                                name="hover-feedback"
                                value={this.state.value}
                                precision={1}
                                // onChange={(event, newValue) => {
                                // setValue(newValue);
                                // }}
                                // onChangeActive={(event, newHover) => {
                                // setHover(newHover);
                                // }}
                            />
                            {/* {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
                            
                            <Typography variant="subtitle1" gutterBottom>
                            Relación precio - calidad
                       </Typography>
                            
                            <Rating
                                name="hover-feedback"
                                value={this.state.value}
                                precision={1}
                                // onChange={(event, newValue) => {
                                // setValue(newValue);
                                // }}
                                // onChangeActive={(event, newHover) => {
                                // setHover(newHover);
                                // }}
                            />
                            {/* {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
                            <Typography variant="subtitle1" gutterBottom>
                            Disponibilidad de productos y/o servicios
                       </Typography>
                            
                            <Rating
                                name="hover-feedback"
                                value={this.state.value}
                                precision={1}
                                // onChange={(event, newValue) => {
                                // setValue(newValue);
                                // }}
                                // onChangeActive={(event, newHover) => {
                                // setHover(newHover);
                                // }}
                            />
                            {/* {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
                            
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