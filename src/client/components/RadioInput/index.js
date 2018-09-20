import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const BackgroundColor = 'rgba(0,0,0,.5)';

const styles = theme => ({
  radio: {
    width: '100%',
    display: 'block',
    padding: theme.spacing.unit * 1.5,
    background: BackgroundColor,
    marginBottom: theme.spacing.unit,
    textAlign: 'center',
    transition: 'opacity 0.7s ease-out',
    '&:active': { opacity: '0.5' }
  },
  option: {
    color: theme.palette.getContrastText(BackgroundColor)
  }
});

const radioButton = function({ info, value, text, onChange, classes }) {
  return (
    <label className={classes.radio}>
      <input
        type="radio"
        value={value} //"male"
        data-info={info} //"gender"
        checked={info === value}
        onChange={onChange}
        hidden
      />
      <span>
        <Typography variant={'display1'} className={classes.option}>
          {text}
        </Typography>
      </span>
    </label>
  );
};

export default withStyles(styles)(radioButton);
