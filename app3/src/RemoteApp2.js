import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import reducer, { changeAppNameAction, changeHostLanguageAction } from './reducer';

const remoteAppScope = 'remoteApp2';
const hostAppScope = 'host';

const RemoteApp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[remoteAppScope]);
  const hostState = useSelector((state) => state[hostAppScope]);
  const [remoteAppInput, setRemoteAppInput] = useState('');

  return (
    <div style={{ marginTop: '10px' }}>
      <div>RemoteApp2</div>
      <div>
        RemoteApp2's name from the redux store : {state && state.appName}
      </div>

      <div>
        HostApp's language from the redux store : {hostState && hostState.language}
      </div>

      <div>
        <input
          style={{ marginRight: '10px' }}
          type="text"
          onChange={(e) => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <button onClick={() => dispatch(changeAppNameAction(remoteAppInput))}>
          Dispatch RemoteApp new name
        </button>
        <button onClick={() => dispatch(changeHostLanguageAction(remoteAppInput))}>
          Dispatch HostApp change language
        </button>
      </div>
    </div>
  );
};

const RemoteAppWrapper = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
    return () => console.log('Unmounting App3')
  }, []);

  return (
    <Provider store={store || {}}>
      <RemoteApp />
    </Provider>
  );
};

export default RemoteAppWrapper;
