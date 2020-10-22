import React from 'react';
import clsx from 'clsx'
import SaveIcon from '@material-ui/icons/Save';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Container, Grid, Card, Divider, Box, Typography, CssBaseline, CardHeader,  IconButton, Button, CardContent, Input, FormControl, InputLabel, CardActions, InputAdornment} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';



//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'




function mapStateToProps(store: {
  
}) {
  return {
  
  };
}

class CambiarContraseña extends React.Component <{
  classes: any,
  history: any,
  location: any,
  match: any,
  staticContext?: any,
}, {
  empresa: {
    "clave": string,
  },
  showOldPassword: boolean,
  showNewPassword: boolean,
  showNewPasswordCopy: boolean,
  oldPassword: string,
  newPassword: string,
  newPasswordCopy: string,
  diferentPass: boolean
}>  {

	props: any
	static propTypes: any
	static defaultProps: any
 
  constructor(props: any) {
    super(props);
    this.handleClickShowOldPassword = this.handleClickShowOldPassword.bind(this);
    this.handleClickShowNewPassword = this.handleClickShowNewPassword.bind(this);
    this.handleClickShowNewPasswordCopy = this.handleClickShowNewPasswordCopy.bind(this);
    this.handleChangeOldPassword = this.handleChangeOldPassword.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleChangeNewPasswordCopy = this.handleChangeNewPasswordCopy.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.state = {
      empresa: {
        "clave": '',
      },
      showOldPassword: false,
      showNewPassword: false,
      showNewPasswordCopy: false,
      oldPassword: '',
      newPassword: '',
      newPasswordCopy: '',
      diferentPass: false
    };
  }

  // changeClave(e: any) {
  //   this.setState({ empresa: { ...this.state.empresa, clave: e.target.value } })
  // }

  handleClickShowOldPassword(e: any) {
    this.setState({ showOldPassword: !this.state.showOldPassword })
  }

  handleClickShowNewPassword(e: any) {
    this.setState({ showNewPassword: !this.state.showNewPassword })
  }

  handleClickShowNewPasswordCopy(e: any) {
    this.setState({ showNewPasswordCopy: !this.state.showNewPasswordCopy })
  }

  handleChangeOldPassword(e: any) {
    this.setState({ oldPassword: e.target.value })
  }

  handleChangeNewPassword(e: any) {
    this.setState({ newPassword: e.target.value })
  }

  handleChangeNewPasswordCopy(e: any) {

    if(e.target.value !== this.state.newPassword) {
      this.setState({ diferentPass: true })
    } else {
      this.setState({ diferentPass: false })
    }

    this.setState({ newPasswordCopy: e.target.value })
  }

  handleMouseDownPassword(e: any) {
    e.preventDefault();
  };

  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
    
    return(

      <div className={classes.root} >
        <CssBaseline />
        {this.props.appBar}
         {this.props.drawer}
        <main className={classes.content}  >
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>

                <Grid item lg={9}>
                  
                <Card className={fixedHeightCard}>
                    <CardHeader 
                    
                        // avatar={
                        //   <Avatar aria-label="recipe" className={classes.avatar} >
                        //     C
                        //   </Avatar>
                        // }
                        // title="Cambiar contraseña"
                        
                      />
                       <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {"Modificar contraseña"}</Box>
              </Typography>
<Divider className={classes.divider} />
                    <CardContent>
                      <form className={classes.root} >
                         <Grid container spacing={3}>
                        
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}> 
                              
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel className={classes.inputLabel} htmlFor="standard-adornment-password">Contraseña Actual</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={this.state.showOldPassword ? 'text' : 'password'}
                            value={this.state.oldPassword}
                            className={classes.textField}
                            onChange={this.handleChangeOldPassword}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={this.handleClickShowOldPassword}
                                  onMouseDown={this.handleMouseDownPassword}
                                >
                                  {this.state.showOldPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}> 
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel className={classes.inputLabel}  htmlFor="standard-adornment-password">Nueva Contraseña</InputLabel>
                          <Input
                          className={classes.textField}
                            id="standard-adornment-password"
                            type={this.state.showNewPassword ? 'text' : 'password'}
                            value={this.state.newPassword}
                            onChange={this.handleChangeNewPassword}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={this.handleClickShowNewPassword}
                                  onMouseDown={this.handleMouseDownPassword}
                                >
                                  {this.state.showNewPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}> 
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel className={classes.inputLabel}   htmlFor="standard-adornment-password">Repetir Contraseña</InputLabel>
                          <Input
                            className={classes.textField}
                            id="standard-adornment-password"
                            type={this.state.showNewPasswordCopy ? 'text' : 'password'}
                            value={this.state.newPasswordCopy}
                            onChange={this.handleChangeNewPasswordCopy}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={this.handleClickShowNewPasswordCopy}
                                  onMouseDown={this.handleMouseDownPassword}
                                >
                                  {this.state.showNewPasswordCopy ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          { this.state.diferentPass ? <FormHelperText id="component-error-text" children='Error' /> : <div></div> }
                        </FormControl>
                            
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
                              color='primary'
                              size="small"
                              className={classes.button}
                              startIcon={<SaveIcon />}
                              disabled={ this.state.diferentPass ? true : false }
                              onClick={() => this.props.update(
                                this.state.oldPassword,
                                this.state.newPasswordCopy
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