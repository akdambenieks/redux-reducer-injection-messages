/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './route-config';
import mfe1reducer from 'mfe1/reducer';
import mfe2reducer from 'mfe2/reducer';

const Routes = ({ store }) => {
  store.injectReducer('mfe1', mfe1reducer);
  store.injectReducer('mfe2', mfe2reducer);
  const elements = config.map((/*{render, ...*/route/*}*/) => <Route key={route.path} {...route}/* render={(props) => render({...props, store})}*/ />);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{elements}</Switch>
    </Suspense>
  );
};

export default Routes;
