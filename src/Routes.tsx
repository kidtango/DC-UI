import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout';
import { Main } from 'layout';
import Risk from 'view/Risk';
import WellsSystemSuite from 'view/WellsSystemSuite';
import RTMWellExecution from 'view/RTMWellExecution';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/WellsSystemSuiteIcon' />
      <RouteWithLayout
        component={WellsSystemSuite}
        exact
        layout={Main}
        path='/WellsSystemSuiteIcon'
      />
      <RouteWithLayout
        component={RTMWellExecution}
        exact
        layout={Main}
        path='/RTMWellExecution'
      />
    </Switch>
  );
};
