/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './route-config';

const Routes = ({ store }) => {
  const elements = config.map(({render, ...route}) => <Route key={route.path} {...route} render={(props) => render({...props, store})} />);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{elements}</Switch>
    </Suspense>
  );
};

export default Routes;
