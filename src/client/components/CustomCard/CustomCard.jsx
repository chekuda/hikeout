import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import StartIcon from '@material-ui/icons/Star'

const styles = (theme) => ({
  root: {
    position: 'relative',
    margin: '10px 5px',
    height: '150px',
    borderRadius: '5px',
    boxShadow: `0 5px 5px ${theme.palette.colors.darkGrey}`,
    cursor: 'pointer'
  },
  topSection: {
    position: 'absolute',
    height: '20px',
    right: 0,
    margin: '10px',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  hard: {
    background: theme.palette.colors.red
  },
  moderate: {
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
  textStyle: {
    color: theme.palette.colors.white,
    fontWeight: 'bold',
    margin: '5px;'
  },
  rates: {
   display: 'flex',
   alignItems: 'center'
  },
  startIcon: {
    color: theme.palette.colors.yellow
  }
})

const CustomCard = ({ bkImage, title, rate = 1, difficulty, time, classes }) => {
  console.log(difficulty)
  return (
    <div
      className={classes.root}
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${bkImage}) no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      <section className={classes.topSection}>
        {difficulty}
      </section>
      <section className={classes.cardBottom}>
      <Typography className={classes.textStyle} gutterBottom variant="title" component="h2">
        {title}
      </Typography>
      <Typography className={classes.rates} component="div">
        <span className={classes.textStyle}>
          {
            new Array(rate).fill(1).map((_, index) =>
              <StartIcon key={index} className={classes.startIcon}/>
              )
          }
        </span>
        <span className={classes.textStyle}>{time}</span>
      </Typography>
      </section>
    </div>
  )
}

export default withStyles(styles)(CustomCard)