import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  topImage: {
    position: 'relative',
    margin: 0,
    height: '200px',
    boxShadow: `0 5px 5px ${theme.palette.colors.darkGrey}`
  },
  description: {
    color: theme.palette.colors.black,
    margin: '20px',
    letterSpacing: '0.5px',
    fontSize: '17px'
  }
})

class HikeSights extends Component {
  render(){
    const { classes, hike } = this.props
    return(
      <div className={classes.root}>
        <section
          className={classes.topImage}
          style={{
            background: `url(${hike.imageList[0]}) no-repeat`,
            backgroundSize: 'cover'
          }}
        >
        </section>
        <Typography className={classes.description} variant="body1">
          {hike.description}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(HikeSights)
