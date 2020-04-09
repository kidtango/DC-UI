import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout';
import { Dashboard } from './view/Dashboard/Dashboard';
import { Main } from 'layout';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/dashboard' />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path='/dashboard'
      />
    </Switch>
  );
};
