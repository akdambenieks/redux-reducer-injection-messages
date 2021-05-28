/* eslint-disable react/jsx-props-no-spreading */

import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './route-config';

const Routes = () => {
  const elements = config.map((route) => <Route key={route.path} {...route} />);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{elements}</Switch>
    </Suspense>
  );
};

export default Routes;
