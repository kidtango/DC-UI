import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  component?: any;
  layout: any;
  path: string;
  exact: boolean;
}

export const RouteWithLayout = (props: Props): JSX.Element => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
