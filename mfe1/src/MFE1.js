import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import reducer, {
  changeAppNameAction,
  changeLanguageAction,
  enqueMessage,
  getMessages,
  remoteAppScope,
  hostAppScope
} from './reducer';

const RemoteApp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[remoteAppScope]);
  const hostState = useSelector((state) => state[hostAppScope]);
  const [remoteAppInput, setRemoteAppInput] = useState('');
  const messages = useSelector(getMessages)

  console.log('Messages', messages);

  return (
    <div style={{ marginTop: '10px' }}>
      <div>RemoteApp</div>
      <div>
        RemoteApp's name from the redux store : {state && state.appName}
      </div>
      <br />
      <div>
        HostApp's language from the redux store : {hostState && hostState.language}
      </div>
      <div>
        You have {messages.length} message(s)
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
        <button onClick={() => dispatch(enqueMessage(changeLanguageAction(remoteAppInput)))}>
          Dispatch HostApp change language
        </button>
      </div>
    </div>
  );
};

const RemoteAppWrapper = (props) => {
  console.log(Object.keys(props));
  const { store } = props;
  console.log(store);
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
    return () => console.log('Unmounting App2')
  }, []);

  return (
    <Provider store={store || {}}>
      <RemoteApp />
    </Provider>
  );
};

export default RemoteAppWrapper;
