import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,Button } from '@material-ui/core'
import { connect } from 'react-redux'

function mapStateToProps(store: {
  dialogReducer: {
    openDialogOneButton: boolean
  }
}) {
  return {
    openDialog: store.dialogReducer.openDialogOneButton
  };
}

class DialogOneButton extends React.Component<{
	title: string,
  text: string,
  labelButtonRight: string,
  functionRight: any,
  classes: any
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
    super(props);
    this.functionRight = this.functionRight.bind(this);
		this.state = {
    };
  }

  functionRight() {
    this.props.functionRight()
  }

  render(){
    const classes = this.props.classes
    const open: boolean = this.props.openDialog
    return(
      <Dialog
        open={ open }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{ this.props.title }</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { this.props.text }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus className={ classes.buttonDialog } onClick={ this.functionRight } >
            { this.props.labelButtonRight }
          </Button> 
        </DialogActions>
      </Dialog>
    )
  }
}

export default connect(mapStateToProps)(DialogOneButton)