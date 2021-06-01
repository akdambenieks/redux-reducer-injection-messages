// import React from 'react';
// import dynamicFederation from '../utils/index'
import Host from './Host';
import MFE1 from 'mfe1/MFE1';
import MFE2 from 'mfe2/MFE2';

// const MFE1 = React.lazy(() => dynamicFederation('mfe1', './MFE1'));
// const MFE2 = React.lazy(() => dynamicFederation('mfe2', './MFE2'));
// const MFE1 = React.lazy(() => import('mfe/MFE1'));
// const MFE2 = React.lazy(() => import('mfe2/MFE2'));

export default [
  {
    path: '/mfe1',
    // render: (props) => <MFE1 {...props} />,
    component: MFE1,
    exact: false,
  },
  {
    path: '/mfe2',
    // render: (props) => <MFE2 {...props} />,
    component: MFE2,
    exact: false,
  },
  {
    path: '/',
    // render: (props) => <Host {...props} />,
    component: Host,
    exact: true,
  },
];
