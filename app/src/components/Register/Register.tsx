import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo from './../Login/img/logo.png'
import Input from '@material-ui/core/Input'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {IconButton, InputAdornment, InputLabel} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Register extends React.Component<{}, {
  showPassword: boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.state = {
      showPassword: false,
    };
  }


  handleClickShowPassword(e: any) {
    this.setState({ showPassword: !this.state.showPassword})
  }

  handleMouseDownPassword = (e: any) => {
    e.preventDefault();
  };

  render(){

		const classes = this.props.classes

    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar  src={logo} className={classes.avatar} />
      
        <form id="formRegistro" className={classes.form} ref={this.props.registerRef} noValidate>
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
                error={this.props.errors.empresa != null ? true : false}
                helperText={this.props.errors.empresa != null ? this.props.errors.empresa : ""}
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
                // inputProps={{minLength:11, maxLength:11, pattern:"[0-9]"}}
                 error={this.props.errors.cuit != null ? true : false}
                 helperText={this.props.errors.cuit != null ? this.props.errors.cuit : "" }
              
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
                 error={this.props.errors.usuario != null ? true : false}
                 helperText={this.props.errors.usuario != null ? this.props.errors.usuario : ""}
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                id="contraseña"
                type={this.state.showPassword ? 'text' : 'password'}
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
                
                onChange={ this.props.getPass }
                 error={this.props.errors.contraseña != null ? true : false}
                 helperText={this.props.errors.contraseña != null ? this.props.errors.contraseña : ""}
              />
            </Grid>
            
          </Grid>
          <div className={classes.root}>
            
          <Button
              variant="contained"
              component="label"
              className={classes.submit}
              startIcon={<CloudUploadIcon />}
            >
              <InputLabel htmlFor="icon-button-file">
            
              </InputLabel>
              <Input
                type="file"
                style={{ display: "none" }}
                onChange={ this.props.getFile }
              />
              CONTRATO SOCIAL
            </Button>
            
            
            <Button
              type="button"
             
              variant="contained"
              className={classes.submit}
              onClick={ this.props.register }
            >
              REGISTRARME
            </Button>
            
            
            </div>
            <Grid container >
              <Grid item xs>
                <Link href="/ingresar" variant="body2" className={classes.Link}>
                  Ya soy miembro. Iniciar sesion
                </Link>
              </Grid>
             
              
            </Grid>
          </form>
        </div>
     
      </Container>
    );
  }
}

export default Register