import React from 'react';
import flush from 'styled-jsx/server';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { SheetsRegistry } from 'jss';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static getInitialProps = async ctx => {
    const sheetsManager = new Map();
    const sheetsRegistry = new SheetsRegistry();

    const page = ctx.renderPage(Component => props => (
      <JssProvider registry={sheetsRegistry} generateClassName={createGenerateClassName()}>
        <Component {...props} sheetsManager={sheetsManager} />
      </JssProvider>
    ));

    return {
      ...page,
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: sheetsRegistry.toString() }}
          />
          {flush() || null}
        </React.Fragment>
      )
    };
  };

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
