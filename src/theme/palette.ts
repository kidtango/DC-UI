import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#065694',
    main: '#0066B2',
    light: '#F5F5F5',
  },
  secondary: {
    contrastText: white,
    dark: '#818386',
    main: '#8C8F93',
    light: '#e9e9e9',
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
    dark: '#fdd1d8c2',
    main: '#E21836',
    light: '#FDD1D8',
  },
  text: {
    primary: '#212121',
    secondary: '#666666',
    disabled: '#DEDEDE',
    link: colors.blue[600],
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: colors.grey[200],
  icon: {
    standards: '#003653',
    risk: '#BA3093',
    RTM: '#769231',
    rigAllocation: '#E5601F',
    wells: '#009DD9',
    sideBarIcon: '#8C8F93',
    active: '#6B6D6F',
    inActive: '#DEDEDE',
    error: '#E21836',
  },
};
