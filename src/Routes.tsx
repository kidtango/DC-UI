import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout';
import { Main } from 'layout';
import Risk from 'view/Risk';
import WellsSystemSuite from 'view/WellsSystemSuite';
import RTMWellExecution from 'view/RTMWellExecution';
import RTMContextProvider from 'view/RTMWellExecution/contexts';

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
      <RouteWithLayout component={Risk} exact layout={Main} path='/RiskView' />
      <RTMContextProvider>
        <RouteWithLayout
          component={RTMWellExecution}
          exact
          layout={Main}
          path='/RTMWellExecution'
        />
      </RTMContextProvider>
    </Switch>
  );
};
