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
import * as loginAction from './../../store/actions/login'
import * as dialogAction from './../../store/actions/dialog'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'


import DialogoOneButton from './../Dialogs/OneButton'

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  };
}

class Login extends React.Component<{}, {
  user: string,
  pass: string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.ingresar = this.ingresar.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getPass = this.getPass.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      user: '',
      pass: '',
    };
  }

  componentDidUpdate() {
    if(this.props.login.status !== 200 && this.props.login.fetched) {
      this.props.dispatch(dialogAction.openOneButton())
    } else {
      this.props.dispatch(dialogAction.closeOneButton())
    }
  }

  getUser(e: any) {

    this.setState({
      user: e.target.value
    })

  }

  getPass(e: any) {

    this.setState({
      pass: e.target.value
    })

  }

  ingresar() {
    this.props.dispatch(loginAction.ingresar(this.state.user, this.state.pass))

  }

  aceptar() {
    this.props.dispatch(dialogAction.closeOneButton())
    this.props.dispatch(loginAction.reintentar())
  }

  render(){

    const classes = this.props.classes
		
    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar   src={logo} className={classes.avatar}  >
            
          </Avatar>
        
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
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
              onChange={this.getUser}
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
              onChange={this.getPass}
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
              onClick={this.ingresar}
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
        {/* <Dialogo classes={classes} cancelar={this.cancelar} /> */}
        <DialogoOneButton 
          classes={classes}
          title={'Error de ingreso'}
          text={this.props.login.message}
          functionRight={this.aceptar}
          labelButtonRight={'Aceptar'}
        />
      
      </Container>
     
    );
  }
}



export default connect(mapStateToProps)(Login)
