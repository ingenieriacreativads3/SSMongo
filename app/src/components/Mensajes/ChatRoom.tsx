import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Container, Grid,ListItem, ListSubheader, ListItemIcon, ListItemText, Paper, List, Divider, TextField, CssBaseline, Avatar} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { FixedSizeList } from 'react-window';
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

function mapStateToProps(store: {}) {
	return {};
}

class ChatRoom extends React.Component <{}, {}>	{

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	getMessages = (idOtraEmpresa: string) => {
		this.props.getMessages(idOtraEmpresa)
	}

	renderRow(props: any, empresas: any[]) {

		const { index } = props

		let empresa: {
			_id: string
			nombre: string,
			logo: string,
			email: string
		} = {
			_id: '',
			nombre: '',
			logo: '',
			email: ''
		}

		let apiUrl: string = 'http://localhost:8000/'
		let foto: string = ''
		let nombre: string = ''
		let logo: string = ''
		let _id: string = ''
		let email: string = ''

		if(
			empresas !== undefined &&
			Array.isArray(empresas) &&
			empresas.length > 0
		) {
			empresa = empresas[index]
		}

		if(empresa !== undefined) {
			if(empresa.nombre !== undefined) nombre = empresa.nombre
			if(empresa._id !== undefined) _id = empresa._id
			if(empresa.email !== undefined) email = empresa.email
			if(empresa.logo !== undefined) {
				logo = empresa.logo
				foto = apiUrl + logo
			}
		}

		return (
			<div onClick={ () => this.getMessages(_id) }>
				<ListItem button key={ _id }>
					<ListItemIcon>
							<Avatar alt={ nombre } src={ foto } />
					</ListItemIcon>
					<ListItemText primary={ nombre } secondary={ email } />
				</ListItem>
			</div>
		);
	}

	render(){

		const classes = this.props.classes
		let mensajes: any = []
		let empresas: any[] = []
		let empresasLargo: number = 0

		if(
			this.props.mensajes !== undefined &&
			Array.isArray(this.props.mensajes) &&
			this.props.mensajes.length > 0
		) {
			mensajes = this.props.mensajes
		}

		if(
			this.props !== undefined &&
			this.props.empresas !== undefined &&
			Array.isArray(this.props.empresas) &&
			this.props.empresas.length > 0
		) {
			empresas = this.props.empresas
			empresasLargo = empresas.length
		}

		return(

			<div className={classes.root}>
				<CssBaseline />
				{this.props.appBar}
				{this.props.drawer}
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container component={Paper} className={classes.chatSection}>
							<Grid item xs={3} className={classes.borderRight500}>
								<Grid item xs={12} style={{padding: '10px'}}>
									<ListSubheader	style={{fontSize:'25px', color:'#ff6c00'}}>
										Mis chats
									</ListSubheader> 
								</Grid>
								<Divider />
								<FixedSizeList height={525} width={310} itemSize={50} itemCount={ empresasLargo }>
									{ (props: any) => this.renderRow(props, empresas) }
								</FixedSizeList>
							</Grid>
							<Grid item xs={9}>
								<List className={classes.messageArea}>
									{
										mensajes.map((mensaje: {
											_id: string,
											leido: boolean,
											comentario: string,
											presupuesto_id: string,
											empresa: {
												nombre: string
											}
										}) => {
											if(mensaje.presupuesto_id === undefined) {
												return <div>
													<ListItem key={ mensaje._id }>
														<Grid container>
															<Grid item xs={12}>
																<ListItemText	primary={ mensaje.comentario }></ListItemText>
															</Grid>
															<Grid item xs={12}>
																<ListItemText	secondary={ mensaje.empresa.nombre }></ListItemText>
															</Grid>
														</Grid>
													</ListItem>		
													<Divider />
												</div>
											} else {
												return null
											}
										})
									} 
								</List>
								<Grid container style={{padding: '20px', width:'960px'}}>
									<Grid item xs={11}>
										<CssTextField id="outlined-basic-email" label="Escriba su mensaje" fullWidth value={this.props.nuevoMensaje} onChange={this.props.getMessage} />
									</Grid>
									<Grid xs={1} >
										<Fab className={classes.buttonEnviar} color="primary" aria-label="add"><SendIcon onClick={this.props.sendMessage}	/></Fab>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
					{this.props.footer}
				</main>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ChatRoom)