/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './route-config';
// Note: no lazy loading of reducers since they need to be present from the outset
import mfe1reducer, {scope as mfe1Scope } from 'mfe1/reducer';
import mfe2reducer, {scope as mfe2Scope } from 'mfe2/reducer';
import mfe3reducer, {scope as mfe3Scope } from 'mfe3/reducer';

const Routes = ({ store }) => {
  const mfeReducerArray = [
    { scope: mfe1Scope, reducer: mfe1reducer },
    { scope: mfe2Scope, reducer: mfe2reducer },
    { scope: mfe3Scope, reducer: mfe3reducer },
  ];
  store.injectReducers(mfeReducerArray);
  const elements = config.map((route) => <Route key={route.path} {...route} />);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{elements}</Switch>
    </Suspense>
  );
};

export default Routes;
