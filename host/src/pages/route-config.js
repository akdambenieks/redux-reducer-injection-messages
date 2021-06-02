import Host from './Host';
// Note: no more lazy loading of components - but does this have to be the case?
import MFE1 from 'mfe1/MFE1';
import MFE2 from 'mfe2/MFE2';
import MFE3 from 'mfe3/MFE3';

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
