import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import HikeInfo from '../components/HikeInfo'
import HikeSights from '../components/HikeSights/HikeSights'
import Layout from '../components/Layout';

import { myFetchId } from '../helpers/fetchData'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.colors.white
  },
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
  state = {
    tabEnable: 0
  };

  componentDidMount() {
    const currentHikeId = new URL(window.location).searchParams.get('id');

    myFetchId('europe', currentHikeId)
      .then(data => {
        this.setState({
          currentHike: data
        });
      })
  }

  handleChange = (_, value) => {
    this.setState({ tabEnable: value });
  };

  render() {
    const { classes } = this.props;
    const { tabEnable, currentHike } = this.state;

    if (!currentHike) return null;

    return (
      <Layout title="Route">
        <Typography className={classes.topSection} variant="title" component="h1">
          {currentHike.title}
        </Typography>
          <AppBar position="static" className={classes.root}>
            <Tabs
              value={tabEnable}
              onChange={this.handleChange}
              indicatorColor="primary"
              fullWidth
            >
              <Tab label="Overview" />
              <Tab label="Sights" />
            </Tabs>
          </AppBar>
          { tabEnable === 0 && <HikeInfo hike={currentHike}/>}
          { tabEnable === 1 && <HikeSights sights={currentHike.sights}/>}
      </Layout>
    )
  }
}

export default withStyles(styles)(Hike);
