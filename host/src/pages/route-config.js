import Host from './Host';
import MFE1 from 'mfe1/MFE1';
import MFE2 from 'mfe2/MFE2';

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
    path: '/',
    component: Host,
    exact: true,
  },
];
