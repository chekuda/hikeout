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
    background:
      'linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)),url("https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)'
  },
  content: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    color: ''
  },
  title: {
    padding: '60px 0 10px'
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
          <Typography
            className={classes.title}
            gutterBottom={true}
            align="center"
            variant="display1"
          >
            MEET YOUR GUIDE
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Index);
