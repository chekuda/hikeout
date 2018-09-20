import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    background: 'url(https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&h=350) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  },
  buttonContiner: {
    width: '100vw',
    position: 'fixed',
    bottom: 0
  },
  buttonItem: {
    borderRadius: 0
  }
});

class Index extends React.Component {
  handleRedirect() {
    Router.replace('/guest-user');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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
