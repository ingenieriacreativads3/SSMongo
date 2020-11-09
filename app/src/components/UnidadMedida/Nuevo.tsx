import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

import {  Grid, Paper, FormControl,  Box,Divider, Typography, TextField, CssBaseline, Button} from '@material-ui/core';


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
    // Item: store.Item,
    // idEmpresa: store.login.data.empresa._id
  };
}

class Nuevo extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any
 
  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
  this.state = {
   
    };
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
                {'Nueva Unidad de Medida'}
                </Box>
              </Typography>
              <Divider className={classes.divider} />
            <FormControl>
            <form id="formUnidadMedidaNuevo" ref={ this.props.refNuevoUnidad }>
            <Grid container spacing={3}>
              
                <Grid item xs={12} sm={6}>
                <CssTextField
                  className={classes.inputNuevo}
                  id="Unidad"
                  label="Unidad"
                  onChange={ this.props.getUnidad }
                  required={true}
                  error={this.props.errors.Unidad != null ? true : false}
                  helperText={this.props.errors.Unidad != null ? this.props.errors.Unidad : ""}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CssTextField
                    className={classes.inputNuevo}
                    id="Simbolo"
                    label="Simbolo"
                    onChange={ this.props.getSimbolo }
                    required={true}
                    error={this.props.errors.Simbolo != null ? true : false}
                    helperText={this.props.errors.Simbolo != null ? this.props.errors.Simbolo : ""}
                  />
                </Grid>
              
            </Grid>
            </form>

            <div style={{ width: "100%",  marginTop:"1rem" }}>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
              <Button
                variant="contained"
                color='primary'
                size="small"
                className={classes.buttonNuevo}
                endIcon={<SendIcon />}
                onClick={ this.props.save }
                disabled={ !this.props.formValid }
              >
                Enviar
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

Nuevo.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(Nuevo)
