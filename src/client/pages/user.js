import React, { Fragment } from 'react';
import Router from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import RadioButton from '../components/RadioInput';

const styles = theme => ({
  root: {
    position: 'relative',
    height: '100vh',
    width: '100vw'
  },
  backgroundImage: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    background:
      'linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)),url("https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)'
  },
  content: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    padding: `${theme.spacing.unit * 2}px`
  },
  title: {
    padding: '60px 0 10px'
  }
});

const questions = [
  [
    { value: 'male', text: 'Male', info: 'gender' },
    { value: 'female', text: 'Female', info: 'gender' }
  ],
  [
    { value: 'not-fit', text: 'Not fit', info: 'fitness' },
    { value: 'medium-fit', text: 'Kinda Fit', info: 'fitness' },
    { value: 'superfit', text: 'Super Fit', info: 'fitness' }
  ],
  [
    { value: 'wanderer', text: 'Wanderer', info: 'goal' },
    { value: 'mountaineer', text: 'Mountaineer', info: 'goal' }
  ]
];

class Index extends React.Component {
  state = {
    gender: 'male',
    questionIndex: 0
  };

  onOptionSelect = ({ target }) => {
    let { questionIndex } = this.state;
    let questionUpdate = questionIndex + 1;

    this.setState({
      [target.dataset.info]: target.value,
      questionIndex: questionUpdate
    });
  };

  setUserPlan = () => {
    //TO-DO
    //Submit user selection to backend
    console.log('submit form');
    Router.replace('/hikes');
  };

  render() {
    const { classes } = this.props;
    const { questionIndex } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.backgroundImage} />
        <div className={classes.content}>
          <div>
            {questions.length === questionIndex ? this.renderSubmit() : this.renderOptions()}
          </div>
        </div>
      </div>
    );
  }

  renderSubmit = () => {
    const { classes } = this.props;

    return (
      <div className="submitContainer">
        <Typography className={classes.title} gutterBottom={true} align="center" variant="display2">
          JOSE, LETS START HIKING
        </Typography>

        <Typography className={classes.title} align="center" variant="body1" paragraph={true}>
          Discover new place, make friends and enjoy the journey.
        </Typography>

        <Button
          className="hikeCTA"
          onClick={this.setUserPlan}
          variant="raised"
          color="primary"
          fullWidth={true}
        >
          Create a Hike Plan
        </Button>
      </div>
    );
  };

  renderOptions = () => {
    const { classes } = this.props;
    const { questionIndex } = this.state;

    return (
      <Fragment>
        {questions.filter((item, index) => index === questionIndex).map((question, index) => {
          return (
            <Fragment key={`question-${index}`}>
              <Typography
                className={classes.title}
                gutterBottom={true}
                align="center"
                variant="display2"
              >
                MEET YOUR GUIDE
              </Typography>
              <Typography className={classes.title} align="center" variant="body1" paragraph={true}>
                To test you ideal hike plan, your guide need some basic information.{' '}
                {questionIndex ? 'Please' : 'First'} select your {question[0].info}:
              </Typography>
              <div key={`question-${index}`} className="radioSection1">
                {question.map(({ info, value, text }, index) => {
                  return (
                    <RadioButton
                      key={`option-${value}`}
                      info={info}
                      value={value}
                      text={text}
                      onChange={this.onOptionSelect}
                    />
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </Fragment>
    );
  };
}

export default withStyles(styles)(Index);
