import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo from './img/logo.png';
import {IconButton, InputAdornment, ListSubheader, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import * as errorActions from './../../store/actions/error'
import store from './../../store/index'

function mapStateToProps(store: {
  errorReducer:any,
}) {
  return {
    errorReducer: store.errorReducer
  };
}

class ResetPassword extends React.Component<{}, {
  showPassword: boolean,
  formValid: boolean
}> {

	props: any
	static propTypes: any
  static defaultProps: any

  private resetRef: React.RefObject<HTMLFormElement>;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.resetRef = React.createRef();
    this.state = {
      showPassword: false,
      formValid: true
     };
  }

  handleKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      this.reset()
    }
  }

  handleClickShowPassword = (e: any) => {
    this.setState({ showPassword: !this.state.showPassword})
  }

  handleMouseDownPassword = (e: any) => {
    e.preventDefault();
  };

  reset = () => {
    if(this.validacion()) {
      this.props.reset()
    }
  }

  getPass = (e: any) => {

    this.props.getPass(e)
    
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
  }

  getToken = (e: any) => {

    this.props.getToken(e)
    
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
  }

  validacion = () => {

    let formIsValid: boolean = true
    let errores: any[] =[]
    let ref: any = this.resetRef.current

    for (let i = 0, element; element = ref[i]; i++) {

      if(!element.checkValidity()){

        errores[element.id] = element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
        this.setState({formValid:formIsValid})
        
      }
      
    }

    this.props.dispatch(errorActions.setError(errores)); 
    return formIsValid;
  }


  render(){

    const classes = this.props.classes

    return(
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={ classes.paper }>
          <Avatar src={ logo } className={ classes.avatar }  />
          <ListItem>
        <ListItemText  secondary="Ingrese el token de Seguridad que ha sido enviado a su correo electronico." />
      </ListItem>
          {/* <ListSubheader>
            Ingrese el token de Seguridad que ha sido enviado a su correo electronico
        </ListSubheader>  */}
          <form id='formLogin' ref={ this.resetRef } className={ classes.form } noValidate >
            <TextField
              variant='outlined'
              margin='normal'
              required={ true }
              fullWidth
              id='token'
              label='Token de seguridad'
              name='token'
              autoComplete='token'
              autoFocus
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
              onChange={ this.getToken }
              onKeyPress={ this.handleKeyPress }
              error={ this.props.errorReducer.errors.token != null ? true : false }
              helperText={ this.props.errorReducer.errors.token != null ? this.props.errorReducer.errors.token : '' }
            />
            <TextField
              variant='outlined'
              margin='normal'
              required={true}
              fullWidth
              name='password'
              label='Nueva Contraseña'
              type={ this.state.showPassword ? 'text' : 'password' }
              id='password'
              autoComplete='current-password'
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton 
                    disableRipple={true} 
                    size='small'
                    aria-label='toggle password visibility'
                    onClick={ this.handleClickShowPassword }
                    onMouseDown={ this.handleMouseDownPassword }
                    >
                      { this.state.showPassword ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                  </InputAdornment>
                )
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
             
              onChange={ this.getPass }
              onKeyPress={ this.handleKeyPress }
              error={ this.props.errorReducer.errors.password !== null ? true : false }
              helperText={ this.props.errorReducer.errors.password !== null ? this.props.errorReducer.errors.password : '' }
            /> 
            
            <Button
              type='button'
              fullWidth
              variant='contained'
              className={ classes.submit }
              onClick={ this.reset }
            >
              Cambiar contraseña
            </Button>
           
          </form>
        </div>    
      </Container>
    );
  }
}

export default connect(mapStateToProps)(ResetPassword)