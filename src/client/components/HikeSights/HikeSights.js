import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import CustomCard from '../CustomCard'

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
    const { classes, sights } = this.props
    console.log(sights)
    return(
      <div className={classes.root}>
        <section className="hike-lists">
              {
                sights.map((sight, index) => {
                return (
                  <CustomCard
                    key={index}
                    bkImage={sight.imageList[0]}
                    title={sight.name}
                  />
                );
              })}
            </section>
      </div>
    )
  }
}

export default withStyles(styles)(HikeSights)
