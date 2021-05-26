import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LanguageToggle from './components/LanguageToggle';
import Counter from './components/Counter';

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

const RemoteApp = React.lazy(() => dynamicFederation('app2', './RemoteApp'));

const RemoteApp2 = React.lazy(() => dynamicFederation('app3', './RemoteApp2'));

const App = () => {
  const [displayApp2, toggleDisplayApp2] = useState(false);
  const [displayApp3, toggleDisplayApp3] = useState(false);
  return (
    <Provider store={store}>
      <div>
        Welcome to Host App
        <LanguageToggle />
        <Counter />
        <div>
          <Suspense fallback="Loading...">
            <div>
              <button onClick={() => toggleDisplayApp2(!displayApp2)}>Show/Hide App2</button>
            </div>
            {displayApp2 &&
              <RemoteApp store={store} />
            }
            <div>
              <button onClick={() => toggleDisplayApp3(!displayApp3)}>Show/Hide App3</button>
            </div>
            {displayApp3 &&
              <RemoteApp2 store={store} />
            }
          </Suspense>
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
