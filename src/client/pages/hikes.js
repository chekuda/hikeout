import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import CustomCard from '../components/CustomCard';
import Layout from '../components/Layout';

import { myFetch } from '../helpers/fetchData'

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
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    position: 'fixed',
    zIndex: 10,
    top: '50px',
    background: theme.palette.colors.white
  },
  media: {
    height: '150px'
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  hikeList: {
    paddingTop: "130px"
  }
});

class Hikes extends React.Component {
  state = {
    hikeList: [],
    loaderEnable: true
  };

  componentDidMount() {
    myFetch('europe')
      .then(data => {
        this.setState({
          hikeList: data,
          loaderEnable: false
        });
      });
  }

  handleRedirect(id) {
    Router.push(`/hike?id=${id}`);
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout title="Hikes">
        <div className={classes.root}>
          <Typography className={classes.topSection} variant="title" component="h1">
            Recommended Hikes
          </Typography>
          {this.state.loaderEnable ? (
            <div className={classes.center}>
              <CircularProgress className={classes.progress} size={100} color="primary" />
            </div>
          ) : (
            <section className={classes.hikeList}>
              {this.state.hikeList.map(hike => {
                return (
                  <CustomCard
                    key={hike.id}
                    bkImage={hike.imageList[0]}
                    title={hike.title}
                    rate={hike.stars}
                    difficulty={hike.dificulty}
                    time={`${hike.routes[0].hours}h`}
                    handleClick={() => this.handleRedirect(hike.id)}
                  />
                );
              })}
            </section>
          )}
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Hikes);
