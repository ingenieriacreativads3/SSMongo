import React from 'react';
import { Slide } from 'material-auto-rotating-carousel';

class Index extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){

    const { red } = require('@material-ui/core/colors');
    const { withStyles } = require('@material-ui/core/styles');

    const styles = {
      root: {
        backgroundColor: red[600],
        height: 500,
        width: 400
      },
      media: {
        backgroundColor: red[400]
      }
    }

    const StyledSlide = withStyles(styles)(Slide);

    return <StyledSlide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
  }
}

export default Index