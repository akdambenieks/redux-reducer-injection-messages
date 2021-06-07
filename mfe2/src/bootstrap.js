import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import MFE2 from './MFE2';
import DispatchControls from './DispatchControls';

const App = () => {
  return (
    <Provider store={store}>
      <DispatchControls />
      <MFE2 />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

