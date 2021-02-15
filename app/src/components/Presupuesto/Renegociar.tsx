import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import {TextField,  ListItem, Paper, FormControl, ListItemAvatar, Box, Divider, ListItemText, Grid, Typography, CssBaseline, Avatar,  Button, TextareaAutosize} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';



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



class Renegociar extends React.Component <{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.renderRow = this.renderRow.bind(this)
    this.state = {};
  }

  renderRow(props: any, mensajes: any[]) {
    const { index, style } = props;

    return (
			<ListItem button style={style} key={index}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar 
							alt={ mensajes?.[index].empresa?.nombre || '' }
							src={ 'http://localhost:8000/' + mensajes?.[index].empresa?.logo || '' }
						/>
					</ListItemAvatar>
					<ListItemText
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									color="textPrimary"
								>
									{ mensajes?.[index].empresa?.nombre || '' }
								</Typography>
								{" — " + mensajes?.[index].comentario || ''}
							</React.Fragment>
						}
					/>
				</ListItem>
			</ListItem>
		);
  }

  render(){

		const classes = this.props.classes
    let msj: string = ''
    let foto: string = ''

    let itemPresupuesto: {
			cantidad: number,
			item: {
				nombre: string,
				precio: string,
				foto: string[]
			},
			unidadDeMedida: {
				nombre: string
			}
		} = {
			cantidad: 0,
			item: {
				nombre: '',
				precio: '0',
				foto: []
			},
			unidadDeMedida: {
				nombre: ''
			}
		}

    let empresa_perteneciente: {
			_id: string,
			email: string,
			nombre: string
		} = {
			_id: '',
			email: '',
			nombre: ''
		}

    let mensajes: {
			comentario: string,
			leido: boolean,
			empresa: {
				nombre: string,
				logo: string
			}
		}[] = []

    if(
      this.props.presupuesto !== undefined &&
      this.props.presupuesto.mensajes !== undefined &&
      this.props.presupuesto.mensajes.length
    ) {
      this.props.presupuesto.mensajes.map((mensaje: {
        comentario: string
      }) => {
        msj = msj + mensaje.comentario
      })  
    }

    if(
			this.props.presupuesto !== undefined &&
			this.props.presupuesto.empresa_perteneciente !== undefined
		) {
			empresa_perteneciente = this.props.presupuesto.empresa_perteneciente
		}

    if(
			this.props.presupuesto !== undefined &&
			this.props.presupuesto.items !== undefined &&
			Array.isArray(this.props.presupuesto.items) &&
			this.props.presupuesto.items.length > 0
		) {
			itemPresupuesto = this.props.presupuesto.items[0]
		}

    if(
			this.props?.messageList !== undefined &&
			Array.isArray(this.props.messageList) &&
			this.props.messageList.length > 0
		) {
			mensajes = this.props.messageList
		}

    if(
			itemPresupuesto !== undefined &&
			itemPresupuesto.item !== undefined &&
			itemPresupuesto.item.foto !== undefined &&
			Array.isArray(itemPresupuesto.item.foto) &&
			itemPresupuesto.item.foto.length > 0
		) {
			foto = 'http://localhost:8000/' + itemPresupuesto.item.foto[0]
		}

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
                {"Nuevo Item"}
                </Box>
              </Typography>
            <Divider className={classes.divider} />
          <FormControl>
          <form id="renegociarForm" ref={this.props.renegociarRef}>
            <Grid container spacing={3}>
              <Grid container xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                  Datos del vendedor
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Empresa" label="Empresa demandada" value={ empresa_perteneciente?.nombre } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Email" label="Email" value={ empresa_perteneciente.email } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Telefono" label="Telefono" value={ 'poner el telefono aqui' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Provincia" label="Provincia" value={ 'poner la provincia aqui' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="Ciudad" label="Ciudad" value={ 'poner la ciudad aqui' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="CP" label="CP" value={ 'poner el cp aqui' } className={classes.input}  />
                </Grid>
              </Grid>

              <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                  Presupuesto
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="ProductoSolicitado" label="Producto" value={ itemPresupuesto?.item?.nombre || '' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="CantidadSolicitada" label="Cantidad" value={ itemPresupuesto?.cantidad || '' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="UnidadSolicitada" label="Unidad" value={ itemPresupuesto?.unidadDeMedida?.nombre || '' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField disabled id="PrecioSolicitado" label="Precio" value={ itemPresupuesto?.item?.precio || '' } className={classes.input}  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <FixedSizeList height={200} width={370} itemSize={100} itemCount={ mensajes.length } >
                { (props) => this.renderRow(props, mensajes) }
                </FixedSizeList>
                {/* <TextareaAutosize style={{borderRadius:7}} disabled aria-label="minimum height" rowsMin={8} className={classes.textTarea} value={msj}  /> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img className={classes.fotoItem} alt={ foto }	src={ foto } /> 
                </Grid>
                
              </Grid>


              <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
                Renegociación
                </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={4}>
              <CssTextField 
                className={classes.margin} 
                id="Cantidad" 
                label="Cantidad" 
                type="number" 
                onChange={this.props.getCantidadItem}
                required={true}
                error={this.props.errors.Cantidad != null ? true : false}
                helperText={this.props.errors.Cantidad != null ? this.props.errors.Cantidad : ""}
                inputProps={{min:1}}   />
              </Grid>

              <Grid item xs={12} sm={4}>
              <CssTextField 
                className={classes.margin} 
                id="Importe" 
                label="Importe sugerido" 
                type="number" 
                onChange={this.props.getPrecioSugerido}
                required={true}
                error={this.props.errors.Importe != null ? true : false}
                helperText={this.props.errors.Importe != null ? this.props.errors.Importe : ""}
                inputProps={{min:1}}     />
              </Grid>

              <Grid item xs={12} sm={4}>
              <TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={8} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}  />
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
                startIcon={<SendIcon />}
                onClick={ () => this.props.save(this.props?.presupuesto?.items?.[0]?.item._id || '') }
                disabled={ !this.props.formValid}
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



export default Renegociar
