import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,Button} from '@material-ui/core'

import { connect } from 'react-redux'

function mapStateToProps(store: {
  dialogReducer: {
    openDialogEliminarItem: boolean
  }
}) {
  return {
    dialogReducer: {
      openDialogEliminarItem: store.dialogReducer.openDialogEliminarItem
    }
  };
}

class DialogEliminarItem extends React.Component{

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
      openDialogEliminarItem: false
    };
	}

    render(){
        return(
        <Dialog
            open={this.props.dialogReducer.openDialogEliminarItem}
            /* onClose={handleClose} */
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Alerta"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ¿Desea eliminar este item de su catálogo?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Eliminar
              </Button> */}
            </DialogActions>
          </Dialog>
          )
    }
}

export default connect(mapStateToProps)(DialogEliminarItem)