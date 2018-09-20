import React, { Component, Fragment } from 'react'
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

class HikeInfo extends Component {
  render(){
    const { classes, hike } = this.props
    console.log(hike)
    return(
      <Fragment>
          <section className={classes.topImage}
          style={{
            background: `url(${hike.imageList[0]}) no-repeat`,
            backgroundSize: 'cover'
          }}
          >
          </section>
          <section>
            <Typography className={classes.description} variant="bodi1">
              {hike.description}
            </Typography>
          </section>
      </Fragment>
    )
  }
}

export default withStyles(styles)(HikeInfo)
