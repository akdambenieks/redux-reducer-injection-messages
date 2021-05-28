import { lazy } from 'react';

const mfe1 = React.lazy(() => dynamicFederation('mfe1', './MFE1'));

const mfe2 = React.lazy(() => dynamicFederation('mfe2', './MFE2'));

export default [
  {
    path: '/mfe1',
    component: mfe1,
    exact: false,
  },
  {
    path: '/mfe2',
    component: mfe2,
    exact: false,
  },
  {
    path: '/',
    component: Host,
    exact: true,
  },
];
