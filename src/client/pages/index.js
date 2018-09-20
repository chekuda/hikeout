import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundImage:
      'url("https://cdn.runrepeat.com/storage/uploads/research/Award%20-%20Most%20Livable%20Hiking%20Towns/Hiking%20Town%201.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  buttonContiner: {
    width: '100vw',
    position: 'fixed',
    bottom: 0
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
                className={classes.button}
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
                className={classes.button}
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
