import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const lightBlue = '#009DD9';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.grey[900],
    main: '#8C8F93',
    light: '#F5F5F5',
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[800],
    light: lightBlue,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: '#769231',
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#212121',
    secondary: '#666666',
    light: '#B6B6B6',
    link: colors.blue[600],
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  failure: {
    dark: colors.blueGrey[100],
    main: colors.blueGrey[500],
  },
  divider: colors.grey[200],
  icon: lightBlue,
  iconActive: '#009DD9',
};
