import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout';
import { Main } from 'layout';
import Risk from 'view/Risk';
import DrillingAndCompletion from 'view/WellsSystemSuite';

export const Routes: React.FC = () => {
  return (
    <Switch>
      {/* <Redirect exact from='/' to='/drillAndCompletion' /> */}
      <RouteWithLayout
        component={DrillingAndCompletion}
        exact
        layout={Main}
        path='/drillingandcompletion'
      />
    </Switch>
  );
};
