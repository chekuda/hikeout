/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B1D7C9',
      main: '#00B7A2',
      dark: '#003A3C'
    },
    secondary: {
      light: '#FFD289',
      main: '#FACC6B',
      dark: '#F49F0A'
    },
    colors: {
      white: '#ffffff',
      red: '#ff0000',
      yellow: '#ffeb3b',
      green: '#8bc34a'
    }
  },
  typography: {
    fontFamily: '"Oswald", serif',
    body1: {
      fontFamily: '"Open Sans", serif'
    },
    body2: {
      fontFamily: '"Open Sans", serif'
    }
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
