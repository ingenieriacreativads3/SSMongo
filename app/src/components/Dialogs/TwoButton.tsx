import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,Button } from '@material-ui/core'
import { connect } from 'react-redux'

function mapStateToProps(store: {
  dialogReducer: {
    openDialogTwoButton: boolean
  }
}) {
  return {
    openDialog: store.dialogReducer.openDialogTwoButton
  };
}

class DialogTwoButton extends React.Component<{
	title: string,
  text: string,
  labelButtonLeft: string,
  labelButtonRight: string,
  functionLeft: any,
  functionRight: any,
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
    super(props);
    this.functionRight = this.functionRight.bind(this);
    this.functionLeft = this.functionLeft.bind(this);
		this.state = {
    };
  }

  functionLeft() {
    this.props.functionLeft()
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
        <Button autoFocus className={ classes.buttonDialog } onClick={ this.functionLeft } >
          { this.props.labelButtonLeft }
        </Button>
        <Button autoFocus className={ classes.buttonDialog } onClick={ this.functionRight } >
          { this.props.labelButtonRight }
        </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default connect(mapStateToProps)(DialogTwoButton)