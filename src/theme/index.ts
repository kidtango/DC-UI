import { createMuiTheme, Theme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

console.log('palette', palette.black);

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
