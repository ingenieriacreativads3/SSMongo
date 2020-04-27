import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,Button} from '@material-ui/core'

const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

class DialogEliminarItem extends React.Component{
    render(){
        return(
        <Dialog
            open={open}
            onClose={handleClose}
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
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Eliminar
              </Button>
            </DialogActions>
          </Dialog>
          )
    }
}

export default (DialogEliminarItem)