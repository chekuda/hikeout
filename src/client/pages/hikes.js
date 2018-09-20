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
  state = {
    hikeList: []
  }

  handleRedirect() {
    Router.replace('/guest-user')
  }

  componentDidMount(){
    fetch('https://granite-camilla.codio.io/hikeData.json#')
      .then(res => res.json())
      .then(data => {
        this.setState({
          hikeList: data.europe
        })
      })
  }

  render() {
    const { classes } = this.props
    console.log(this.state.hikeList)
    return (
      <div className={classes.root}>
        <Typography className={classes.topSection} variant="title" component="h1">
          Recomended Hikes
        </Typography>
        <section className='hike-lists'>
        {
          this.state.hikeList.map(hike => {
            console.log(hike)
            return (
              <CustomCard
                key={hike.id}
                bkImage={hike.imageList[0]}
                title={hike.title}
                rate={hike.stars}
                difficulty={hike.dificulty}
                time={`${hike.routes[0].hours}h`}
              />
            )
          })
        }
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(Hikes)
