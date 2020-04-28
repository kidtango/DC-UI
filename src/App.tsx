import React from 'react';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';

import theme from './theme';
import { Routes } from './Routes';
import './assets/scss/index.css';

const browserHistory = createBrowserHistory();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};
