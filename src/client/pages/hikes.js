import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import Typography from '@material-ui/core/Typography'

import CustomCard from '../components/CustomCard'

const styles = theme => ({
  root: {
    background: theme.palette.colors.white
  },
  topSection: {
    width: '100%',
    padding: '30px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  media: {
    height: '150px'
  }
})

class Hikes extends React.Component {
  handleRedirect() {
    Router.replace('/guest-user')
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography className={classes.topSection} variant="title" component="h1">
          Recomended Hikes
        </Typography>
        <section className='hike-lists'>
          <CustomCard
            bkImage='https://i0.wp.com/clarens.co.za/wp-content/uploads/2018/03/hiking-trails-clarens.jpg'
            title='Sevent Sisters'
            rate={5}
            difficulty='dificult'
            time={'5h30m'}
          />
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(Hikes)
