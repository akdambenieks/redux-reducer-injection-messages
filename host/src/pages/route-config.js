import React from 'react';
import dynamicFederation from '../utils/index'
import Host from './Host';

// const dynamicFederation = async (scope, module) => {
//   const container = window[scope]; // or get the container somewhere else
//   // Initialize the container, it may provide shared modules
//   await container.init(__webpack_share_scopes__.default);
//   return container.get(module).then((factory) => {
//     const Module = factory();
//     return Module;
//   });
// };

const MFE1 = React.lazy(() => dynamicFederation('mfe1', './MFE1'));
const MFE2 = React.lazy(() => dynamicFederation('mfe2', './MFE2'));

export default [
  {
    path: '/mfe1',
    render: (props) => <MFE1 {...props} />,
    exact: false,
  },
  {
    path: '/mfe2',
    render: (props) => <MFE2 {...props} />,
    exact: false,
  },
  {
    path: '/',
    render: (props) => <Host {...props} />,
    exact: true,
  },
];
