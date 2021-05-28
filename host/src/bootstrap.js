import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LanguageToggle from './components/LanguageToggle';
import Counter from './components/Counter';
import Messages from './components/Messages';
import { Routes } from './pages';

import { store } from './store';

const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  return container.get(module).then((factory) => {
    const Module = factory();
    return Module;
  });
};

const MFE1 = React.lazy(() => dynamicFederation('mfe1', './MFE1'));
const MFE2 = React.lazy(() => dynamicFederation('mfe2', './MFE2'));

const history = createBrowserHistory();

const App = () => {
  const [displayApp2, toggleDisplayApp2] = useState(false);
  const [displayApp3, toggleDisplayApp3] = useState(false);
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes store={store}/>
        {/* <div>
          Welcome to Host App
          <LanguageToggle />
          <Counter />
          <Messages />
          <div>
            <Suspense fallback="Loading...">
              <div>
                <button onClick={() => toggleDisplayApp2(!displayApp2)}>Show/Hide App2</button>
              </div>
              {displayApp2 &&
                <MFE1 store={store} />
              }
              <div>
                <button onClick={() => toggleDisplayApp3(!displayApp3)}>Show/Hide App3</button>
              </div>
              {displayApp3 &&
                <MFE2 store={store} />
              }
            </Suspense>
          </div>
        </div> */}
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
