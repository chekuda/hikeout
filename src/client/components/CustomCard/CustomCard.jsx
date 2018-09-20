import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    position: 'relative',
    margin: '10px 5px',
    height: '150px',
    borderRadius: '5px',
    boxShadow: `0 5px 5px ${theme.palette.colors.darkGrey}`
  },
  topSection: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    right: 0,
    margin: '10px',
    borderRadius: '50%',
    border: 'solid 1px #ffffff'
  },
  dificult: {
    background: theme.palette.colors.red
  },
  medium: {
    background: theme.palette.colors.yellow
  },
  easy: {
    background: theme.palette.colors.green
  },
  cardBottom: {
    position: 'absolute',
    bottom: 0,
    margin: '10px'
  },
  textWhite: {
    color: theme.palette.colors.white
  },
  rates: {
    marginRight: '10px',
    fontWeight: 'bold'
  }
})

const CustomCard = ({ bkImage, title, rate, difficulty, time, classes }) => {
  return (
    <div
      className={classes.root}
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${bkImage}) no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      <section className={`${classes.topSection} ${classes[difficulty]}`}>
      </section>
      <section className={classes.cardBottom}>
      <Typography className={classes.textWhite} gutterBottom variant="title" component="h2">
        {title}
      </Typography>
      <Typography className={classes.textWhite} component="div">
        <span className={classes.rates}>{rate}</span> <span className={classes.rates}>{time}</span>
      </Typography>
      </section>
    </div>
  )
}

export default withStyles(styles)(CustomCard)