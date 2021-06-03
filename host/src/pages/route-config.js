import { lazy } from 'react';

const Host = lazy(() => import('./Host'));
const MFE1 = lazy(() => import('mfe1/MFE1'));
const MFE2 = lazy(() => import('mfe2/MFE2'));
const MFE3 = lazy(() => import('mfe3/MFE3'));

export default [
  {
    path: '/mfe1',
    component: MFE1,
    exact: false,
  },
  {
    path: '/mfe2',
    component: MFE2,
    exact: false,
  },
  {
    path: '/mfe3',
    component: MFE3,
    exact: false,
  },
  {
    path: '/',
    component: Host,
    exact: true,
  },
];
