import React from 'react';
import Head from 'next/head';
import App, { Container, createUrl } from 'next/app';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = () => {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#0097a7'
      },
      secondary: {
        main: '#ffca28'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.75)'
      },
      warning: {
        main: '#ffa000'
      },
      success: {
        main: '#43a047'
      },
      info: {
        main: '#1976d2'
      }
    }
  });
};

export default class MyApp extends App {
  state = {
    sheetsManager: this.props.sheetsManager || new Map()
  };

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, router } = this.props;
    const { sheetsManager } = this.state;

    return (
      <Container>
        <MuiThemeProvider theme={theme()} sheetsManager={sheetsManager}>
          <Head>
            <title>HIKEOUT</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          </Head>
          <CssBaseline />
          <Component />
        </MuiThemeProvider>
      </Container>
    );
  }
}
