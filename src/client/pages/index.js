import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    backgroundColor: 'grey',
    height: '100vh',
    width: '100%'
  },
  buttonContiner: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  }
})

class Index extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <section className={classes.buttonContiner}>
          <Grid container>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" className={classes.button} fullWidth={true}>
                Start Now
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" className={classes.button} fullWidth={true}>
                Log In
              </Button>
            </Grid>
          </Grid>
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(Index)
