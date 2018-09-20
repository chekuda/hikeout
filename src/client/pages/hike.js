import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';

const styles = theme => ({
  topSection: {
    width: '100%',
    padding: '30px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    letterSpacing: '2.5px'
  }
});

class Hike extends Component {
  state = {};

  componentDidMount() {
    const currentHikeId = new URL(window.location).searchParams.get('id');

    fetch(`/api/hikes/${currentHikeId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentHike: data
        });
      });
  }

  render() {
    const { classes } = this.props;
    if (!this.state.currentHike) return null;

    return (
      <Layout title="Route">
        <Typography className={classes.topSection} variant="title" component="h1">
          {this.state.currentHike.title}
        </Typography>
      </Layout>
    );
  }
}

export default withStyles(styles)(Hike);
