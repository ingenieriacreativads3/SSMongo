import React from 'react';
import clsx from 'clsx'
import SaveIcon from '@material-ui/icons/Save';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Container, Grid, Card, Divider, Box, Typography, CssBaseline, CardHeader,  IconButton, Button, CardContent, Input, FormControl, InputLabel, CardActions, InputAdornment} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import * as empresaActions from '../../store/actions/empresa'
import * as errorActions from '../../store/actions/error'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'




function mapStateToProps(store: {
  errorReducer: any,
}) {
  return {
    errorReducer: store.errorReducer
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
  formValid:boolean
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
  private changePasswordRef: React.RefObject<HTMLFormElement>;
  constructor(props: any) {
    super(props);
    this.changePasswordRef = React.createRef();
    this.handleClickShowOldPassword = this.handleClickShowOldPassword.bind(this);
    this.handleClickShowNewPassword = this.handleClickShowNewPassword.bind(this);
    this.handleClickShowNewPasswordCopy = this.handleClickShowNewPasswordCopy.bind(this);
    this.handleChangeOldPassword = this.handleChangeOldPassword.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleChangeNewPasswordCopy = this.handleChangeNewPasswordCopy.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.state = {
      formValid:true,
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
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
    if(this.state.newPassword !== '' && this.state.newPasswordCopy !== '' && this.state.oldPassword !== ''){
      this.setState({formValid:true});
    }
  }

  handleChangeNewPassword(e: any) {
    this.setState({ newPassword: e.target.value })
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
    if(this.state.newPassword !== '' && this.state.newPasswordCopy !== '' && this.state.oldPassword !== ''){
      this.setState({formValid:true});
    }
  }

  handleChangeNewPasswordCopy(e: any) {

    if(e.target.value !== this.state.newPassword) {
      this.setState({ diferentPass: true })
    } else {
      this.setState({ diferentPass: false })
    }

    this.setState({ newPasswordCopy: e.target.value })
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
    if(this.state.newPassword !== '' && this.state.newPasswordCopy !== '' && this.state.oldPassword !== ''){
      this.setState({formValid:true});
    }
  }

  handleMouseDownPassword(e: any) {
    e.preventDefault();
  };

  validacion=() => {
    debugger;
    let formIsValid = true;
    let errores=[];
    let ref: any = this.changePasswordRef.current
    
    console.log(ref);
    for (let i = 0, element; element = ref[i]; i++) {

       if(!element.checkValidity())
      {

        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
      
        this.setState({formValid:formIsValid})
        
      }
      
    }

    

     this.props.dispatch(errorActions.setError(errores)); 
    
     return formIsValid;
  }

  update(oldPassword: string, newPassword: string) {
    if(this.validacion()){
       this.props.dispatch(empresaActions.changePassword(
      this.props.cookies.get('empresaId'),
      oldPassword,
      newPassword
    ))
    }
   

  }

  render(){
    debugger;
console.log(this.props.errors);
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
                      <form className={classes.root} ref={this.changePasswordRef} >
                         <Grid container spacing={3}>
                        
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}> 
                              
                        <FormControl error={this.props.errorReducer.errors.currentPassword} className={clsx(classes.margin, classes.textField)}>
                          <InputLabel className={classes.inputLabel} htmlFor="standard-adornment-password">Contraseña Actual</InputLabel>
                          <Input
                            id="currentPassword"
                            type={this.state.showOldPassword ? 'text' : 'password'}
                            value={this.state.oldPassword}
                            required={true}
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
                           { this.props.errorReducer.errors.currentPassword !== null ? <FormHelperText error={true}>{this.props.errors.currentPassword}</FormHelperText> : ''}
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}> 
                        <FormControl  error={this.props.errorReducer.errors.newPassword } className={clsx(classes.margin, classes.textField)}>
                          <InputLabel className={classes.inputLabel}  htmlFor="standard-adornment-password">Nueva Contraseña</InputLabel>
                          <Input
                          className={classes.textField}
                            id="newPassword"
                            required={true}
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
                                  {this.props.errorReducer.showNewPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                            {this.props.errorReducer.errors.newPassword !== null ? <FormHelperText error={true}>{this.props.errors.newPassword}</FormHelperText> : ''}
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}> 
                        <FormControl error={this.props.errors.newPasswordCopy  || this.state.diferentPass} className={clsx(classes.margin, classes.textField)}>
                          <InputLabel className={classes.inputLabel}   htmlFor="standard-adornment-password">Repetir Contraseña</InputLabel>
                          <Input
                            className={classes.textField}
                            required={true}
                            id="newPasswordCopy"
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
                          { this.state.diferentPass ? <FormHelperText error={true} children='Las contraseñas no coinciden' /> : <div></div> }
                          { this.props.errorReducer.errors.newPasswordCopy !== null ? <FormHelperText error={true}>{this.props.errors.newPasswordCopy}</FormHelperText> : ''}
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
                              disabled={ this.state.diferentPass ? true : false || !this.state.formValid }
                              onClick={() => this.update(
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