import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,Button } from '@material-ui/core'
import { connect } from 'react-redux'

function mapStateToProps(store: {
  dialogReducer: {
    openDialogEliminarItem: boolean,
    openDialog: boolean
  }
}) {
  return {
    dialogReducer: {
      openDialogEliminarItem: store.dialogReducer.openDialogEliminarItem
    },
    openDialog: store.dialogReducer.openDialog
  };
}

class DialogEliminarItem extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
    super(props);
    this.cancelar = this.cancelar.bind(this);
    this.show = this.show.bind(this);
		this.state = {
    };
  }

  cancelar() {
    this.props.cancelar()
  }

  show(isShow: boolean) {
    if(!isShow){
      return {
        display: 'none'
      }
    }
  }

  render(){
    const classes = this.props.classes
    return(
      <Dialog
        open={this.props.openDialog}
        /* onClose={handleClose} */
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alerta"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            desea eliminar el item
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.buttonDialog} onClick={this.cancelar} >
            Cancelar
          </Button> 
          <Button autoFocus className={classes.buttonDialog} >
            Aceptar
          </Button> 
        </DialogActions>
      </Dialog>
    )
  }
}

export default connect(mapStateToProps)(DialogEliminarItem)