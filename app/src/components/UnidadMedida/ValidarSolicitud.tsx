import React from 'react';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import {TextField, Divider, Grid,  Paper, Box, Typography, CssBaseline, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import * as unidadDeMedidaAction from './../../store/actions/unidadDeMedida'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'



const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#d93211',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#d93211',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#d93211',
      },
      '&:hover fieldset': {
        borderColor: '#d93211',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d93211',
      },
    },
  },
})(TextField);


function mapStateToProps(store: {
  unidadDeMedidaReducer : any
}) {
  return {
    unidadDeMedidaReducer : store.unidadDeMedidaReducer
  };
}

class ValidarSolicitud extends React.Component <{}, {

  
    magnitud: string,
    abreviatura: string,
  
}> {

	props: any
	static propTypes: any
	static defaultProps: any

 
  constructor(props: any) {
    super(props);
    this.state = {
      
        magnitud: '',
        abreviatura: '',
       
    };
  }



  getUnidad = (e:any) => {
    this.setState({magnitud : e.target.value});
  }

  getSimbolo = (e:any) => {
    this.setState({abreviatura : e.target.value});
  }

  sendValidation = () => {
    this.props.dispatch(unidadDeMedidaAction.setSolicitud(
        this.props.match.params.id,
        this.state.magnitud,
        this.state.abreviatura,
        
    ))

   
  }

  render(){

		const classes = this.props.classes

    return(

      <div className={classes.root}>
        <CssBaseline />
       {this.props.appBar}
        {this.props.drawer}
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
            <Paper style={{ padding: 20, margin:50}}>
              <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {'Solicitud Unidad de Medida'}
                </Box>
              </Typography>
              <Divider className={classes.divider} />
            <FormControl>
            <form >
            <Grid container spacing={3}>
              <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Nro. Solicitud" value={this.props._id} className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Fecha"  value={this.props.fecha} className={classes.input} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField disabled id="custom-css-standard-input" label="Usuario"  value={this.props.usuario} className={classes.input} />
                </Grid>


                <Grid item xs={12} sm={4}>
                <CssTextField  id="unidad" label="Unidad"  value={this.props.unidad} className={classes.input} onChange={this.getUnidad} />
                </Grid>

                <Grid item xs={12} sm={4}>
                <CssTextField  id="simbolo" label="Simbolo"  value={this.props.simbolo} className={classes.input} onChange={this.getSimbolo}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Estado</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={1}
                    >
                      <MenuItem value={1}>No resuelta</MenuItem>
                      <MenuItem value={2}>Resuelta</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            </form>

            <div style={{ width: "100%",  marginTop:"1rem" }}>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
              <Button
                variant="contained"
                color='primary'
                size="small"
                className={classes.button}
                // endIcon={<SendIcon></SendIcon>}
                onClick={() => this.sendValidation()}
              >
                Aceptar
              </Button>
              </Box>
            </div>
            </FormControl>
            </Paper>
            </Grid>
            {this.props.footer}
					</main>


		 </div>

    );
  }
}



export default connect(mapStateToProps)(ValidarSolicitud)
