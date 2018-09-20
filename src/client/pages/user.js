import React, { Fragment } from 'react';
import Router from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    position: 'relative',
    height: '100vh',
    width: '100vw'
  },
  backgroundImage: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    backgroundImage:
      'url("https://cdn.runrepeat.com/storage/uploads/research/Award%20-%20Most%20Livable%20Hiking%20Towns/Hiking%20Town%201.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)'
  },
  content: {
    position: 'absolute',
    height: '100vh',
    width: '100vw'
  }
});

class Index extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Fragment className={classes.root}>
        <div className={classes.backgroundImage} />
        <div className={classes.content}>
          <Typography gutterBottom={true} align="center" variant="display1">
            MEET YOUR GUIDE
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Index);
