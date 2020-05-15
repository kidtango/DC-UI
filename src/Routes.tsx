import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout';
import { Main } from 'layout';
import Risk from 'view/Risk';
import WellsSystemSuite from 'view/WellsSystemSuite';
import RigAllocation from 'view/RigAllocation';
import { Standards } from 'view/Standards';
import { RTMWellExecution } from 'view/RTMWellExecution';

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
        component={Standards}
        exact
        layout={Main}
        path='/Standards'
      />
      <RouteWithLayout
        component={RigAllocation}
        exact
        layout={Main}
        path='/RigAllocation'
      />

      <RouteWithLayout component={Risk} exact layout={Main} path='/RiskView' />

      <RouteWithLayout
        component={RTMWellExecution}
        exact
        layout={Main}
        path='/RTMWellExecution'
      />
    </Switch>
  );
};
