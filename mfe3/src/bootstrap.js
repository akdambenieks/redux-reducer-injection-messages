import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import MFE3 from './MFE3';

const App = () => {
  return (
    <Provider store={store}>
      <MFE3 />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

