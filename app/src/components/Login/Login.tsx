import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo from "./img/logo.png";
import {IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx'


class Login extends React.Component<{
  classes: any,
  getPass: any,
  getUser: any,
  login: any,
  handleKeyPress: any,
  showPassword: boolean,
  Password: string,
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.state = {
      showPassword: false,
     };
  }

  handleKeyPress(e: any) {
    this.props.handleKeyPress(e.key)
  }

  handleClickShowPassword(e: any) {
    //this.setState({ showPassword: !this.state.showPassword})
  }

  handleMouseDownPassword(e: any) {
    e.preventDefault();
  };


  render(){

    const classes = this.props.classes

    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar   src={logo} className={classes.avatar}  />
          <form className={classes.form} noValidate >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
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
              onChange={ this.props.getUser }
              onKeyPress={ this.handleKeyPress }
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                    disableRipple={true} 
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    >
                      {"hola" ? <Visibility /> : <VisibilityOff />}
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
             
              onChange={ this.props.getPass }
              onKeyPress={this.handleKeyPress}
            /> 
            <FormControlLabel
              control={<Checkbox value="remember" style ={{
                  color: "#d93211",
                }} />}
              label="Recordarme"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={this.props.login}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"className={classes.Link}>
                  Olvidé mi contraseña
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registrar" variant="body2" className={classes.Link}>
                  {"No soy miembro. Registrarme"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>    
      </Container>
    );
  }
}

export default Login