import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import MFE1 from './MFE1';

const App = () => {
  return (
    <Provider store={store}>
      <MFE1 />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

