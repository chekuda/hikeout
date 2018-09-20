import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  topImage: {
    position: 'relative',
    margin: '10px 5px',
    height: '150px',
    borderRadius: '5px',
    boxShadow: `0 5px 5px ${theme.palette.colors.darkGrey}`,
    cursor: 'pointer'
  },
  description: {
    color: theme.palette.colors.black
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
            background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${hike.imageList[0]}) no-repeat`,
            backgroundSize: 'cover'
          }}
          >
          </section>
          <section>
            <Typography className={classes.description} variant="title" component="div">
              {hike.description}
            </Typography>
          </section>
      </Fragment>
    )
  }
}

export default withStyles(styles)(HikeInfo)
