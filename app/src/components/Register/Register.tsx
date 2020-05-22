import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo from './../Login/img/logo.png'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'

class Register extends React.Component<{
  classes: any,
  getFantasyName: any,
  getCUIT: any,
  getUser: any,
  getEmail: any,
  getPass: any,
  register: any
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(){

		const classes = this.props.classes

    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar  src={logo} className={classes.avatar} />
      
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}sm={12} >
              <TextField
                autoComplete="empresa"
                name="Empresa"
                variant="outlined"
                required
                fullWidth
                id="empresa"
                label="Empresa"
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
                onChange={ this.props.getFantasyName }
              />
            </Grid>
            
           
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cuit"
                label="CUIT"
                name="cuit"
                autoComplete="cuit"
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
                onChange={ this.props.getCUIT }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="usuario"
                label="Usuario"
                id="usuario"
                autoComplete="usuario"
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                id="contraseña"
                type="password"
                
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
                onChange={ this.props.getPass }
              />
            </Grid>
            
          </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={ this.props.register }
            >
              REGISTRARME
            </Button>
            <Grid container >
              <Grid item xs>
                <Link href="/ingresar" variant="body2"className={classes.Link}>
                  Ya soy miembro. Iniciar sesion
                </Link>
              </Grid>
              <Grid item>
              <Button 
              style={{ background: "none",outline:"none" }}
                variant="contained"
                component="label"
              
              >
                <InputLabel htmlFor="icon-button-file">
                  <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                    <PhotoCamera />
                  </IconButton>
                </InputLabel>
                <Input
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
            
              </Grid>
              
            </Grid>
          </form>
        </div>
     
      </Container>
    );
  }
}

export default Register