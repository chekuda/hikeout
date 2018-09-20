import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

import './index.css';

const logoPNG = require('../static/logo.png');

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    background:
      'url("https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  buttonContiner: {
    width: '100vw',
    position: 'fixed',
    bottom: 0
  },
  buttonItem: {
    borderRadius: 0
  },
  imageContainer: {
    textAlign: 'center',
    paddingTop: '60px'
  }
});

class Index extends React.Component {
  handleRedirect() {
    Router.push('/user');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <section className={classes.imageContainer}>
          <img src={logoPNG} alt="Logo PNG" width="150" />
        </section>
        <section className={classes.buttonContiner}>
          <Grid container>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonItem}
                fullWidth={true}
                onClick={this.handleRedirect}
              >
                Start Now
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.buttonItem}
                fullWidth={true}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
