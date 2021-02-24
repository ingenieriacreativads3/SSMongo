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

class RecoverPassword extends React.Component<{}, {
  showPassword: boolean,
  formValid: boolean
}> {

	props: any
	static propTypes: any
  static defaultProps: any

  private recoverRef: React.RefObject<HTMLFormElement>;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.recoverRef = React.createRef();
    this.state = {
      showPassword: false,
      formValid: true
     };
  }

  handleKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      this.recover()
    }
  }

  handleClickShowPassword = (e: any) => {
    this.setState({ showPassword: !this.state.showPassword})
  }

  handleMouseDownPassword = (e: any) => {
    e.preventDefault();
  };

  recover = () => {
    if(this.validacion()) {
      this.props.recover()
    }
  }

  getEmail = (e: any) => {

    this.props.getEmail(e)
    
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
  }

 
  validacion = () => {

    let formIsValid: boolean = true
    let errores: any[] =[]
    let ref: any = this.recoverRef.current

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
        <ListItemText  secondary="Ingrese su email para reestablecer su contraseña." />
      </ListItem>
          <form id='formLogin' ref={ this.recoverRef } className={ classes.form } noValidate >
          <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
                type="email"
                autoComplete="email"
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
                onChange={ this.props.getEmail }
                 error={this.props.errors.email != null ? true : false}
                 helperText={this.props.errors.email != null ? this.props.errors.email : ""}
              />
            <Button
              type='button'
              fullWidth
              variant='contained'
              className={ classes.submit }
              onClick={ this.recover }
            >
              Aceptar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='/Login' variant='body2'className={classes.Link}>
                  Iniciar sesion
                </Link>
              </Grid>
              <Grid item>
                <Link href='/registrar' variant='body2' className={classes.Link}>
                  {'No soy miembro. Registrarme'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>    
      </Container>
    );
  }
}

export default connect(mapStateToProps)(RecoverPassword)