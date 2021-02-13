import React from 'react'
import {Box, Grid, Paper, FormControl,Typography,CssBaseline, Tab, Tabs, ListSubheader,	Button} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux'
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



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

class Detalle extends React.Component <{}, {
	activeStep: number,
	value:number,
}>	{

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.state = {
			activeStep: 0,
			value:0,
		};
	}

	render(){

		const classes = this.props.classes
		const theme = this.props.theme
		const tutorialSteps: {
			label: string,
			imgPath: string
		}[] = [];

		if(this.props.item !== undefined && this.props.item.foto !== undefined) {
			this.props.item.foto.map((img: string) => {
				tutorialSteps.push({
					label: '',
					imgPath: 'http://localhost:8000/' + img 
				})
			})
		}


		const maxSteps = tutorialSteps.length;

		const handleNext = () => {
			this.setState({
				activeStep: this.state.activeStep + 1
			});
		};
	
		const handleBack = () => {
			this.setState({
				activeStep: this.state.activeStep - 1
			});
		};
	
		const handleStepChange = (step: number) => {
			this.setState({
				activeStep: step
			});
		};

		const handleChangeTabs = (event:any, value:number) => {
			this.setState({value: value});
		};

		return(

			<div className={ classes.root } >
				<CssBaseline />
				{ this.props.appBar }
				{ this.props.drawer }
				<main className={ classes.content } >
				<div className={ classes.appBarSpacer } />
					<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"

				>
				<Paper style={{ padding: 20, margin:50}}>
				
					<FormControl>
					<Grid container spacing={3} alignContent="center">
						<Grid container
								direction="row"
								justify="flex-start"
								alignItems="center" xs={12} sm={6} >

									<Grid	container
									direction="row"
									justify="flex-start"
									alignItems="center">
										
										<Grid container
									direction="row"
									justify="flex-start"
									alignItems="center" xs={12} sm={12}>
											<Typography gutterBottom variant="h4"	style={{marginTop:'20px'}}>
												{ this.props?.item?.nombre || '' }
											</Typography>
											</Grid>
											<Grid container
									direction="row"
									justify="flex-start"
									alignItems="center" xs={12} sm={12}>
											<Typography gutterBottom variant="h5"	style={{marginTop:'20px', color: '#d93211'}}>
												{this.props?.item?.mostrarPrecio ? "$" + this.props?.item?.precio : "Consultar precio" } {<Typography style={{display:'inline-block'}} variant="subtitle1" color="textSecondary"> x { this.props?.item?.unidad_de_medida?.nombre }</Typography>} 
											</Typography>
											</Grid>
											<Grid container
									direction="row"
									justify="flex-start"
									alignItems="center" xs={12} sm={12}>
											<Typography style={{marginTop:'20px'}}>
												<Link href={ '/home/perfil/' + this.props?.item?.catalogo?.empresa?._id || ''} variant="h5" className={classes.Link}>
												<ListSubheader style={{fontSize:'25px'}}	>
												{ 'Vendedor: ' +  " " + this.props?.item?.catalogo?.empresa?.nombre || '' }
												</ListSubheader> 
													
												</Link>
											</Typography>
											</Grid>
												 
												<div >
													<Box	>
														<Grid container alignItems="center">
															<Grid item style={{ flexGrow: 1, marginTop:'25px' }}>
																<Tabs
																	value={this.state.value}
																	onChange={handleChangeTabs}
																	style={{color:"#d93211"}}
																>
																	<Tab label="Descripción" />
																</Tabs>
																{this.state.value === 0 && 
																<p>{ this.props?.item?.descrpcion || ''}</p>}
															</Grid>
														</Grid>
													</Box>
											</div>
									</Grid>
    						</Grid>
                <Grid container
									direction="row"
									justify="center"
									alignItems="center" xs={12} sm={6}
                >
                  <Grid>
								    <div className={classes.rootCarousel}>
                      <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                      >
                        {tutorialSteps.map((step, index) => (
                          <div key={step.label}>
                            {Math.abs(this.state.activeStep - index) <= 2 ? (
                              <img className={classes.img} src={ step.imgPath } alt={step.label} />
                            ) : null}
                          </div>
                        ))}
                      </AutoPlaySwipeableViews>
                      <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="dots"
                        activeStep={this.state.activeStep}
                        nextButton={
                          <Button size="small" onClick={handleNext} disabled={this.state.activeStep === maxSteps - 1} >
                            
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                          </Button>
                        }
                        backButton={
                          <Button size="small" onClick={handleBack} disabled={this.state.activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            
                          </Button>
                        }
                      />
                    </div>
					<Grid container
									direction="row"
									justify="center"
									alignItems="center" xs={12} sm={12}
                >
								    <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
			      					{ this.props.actions(classes) }
	    							</Box>
									</Grid>
  								</Grid>
							  </Grid>
					    </Grid>
				    </FormControl>
				  </Paper>
				</Grid>
				{ this.props.footer }
				</main>
		  </div>
		);
	}
}

Detalle.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Detalle)