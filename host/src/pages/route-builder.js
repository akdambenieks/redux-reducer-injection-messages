/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './route-config';
// Note: no lazt loading of reducers since they need to be present from the outset
import mfe1reducer from 'mfe1/reducer';
import mfe2reducer from 'mfe2/reducer';
import mfe3reducer from 'mfe3/reducer';

const Routes = ({ store }) => {
  const mfeReducerArray = [
    {
      key: 'mfe1',
      reducer: mfe1reducer
    },
    {
      key: 'mfe2',
      reducer: mfe2reducer
    },
    {
      key: 'mfe3',
      reducer: mfe3reducer
    }
  ]
  store.injectReducers(mfeReducerArray);
  const elements = config.map((route) => <Route key={route.path} {...route} />);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{elements}</Switch>
    </Suspense>
  );
};

export default Routes;
