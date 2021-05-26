import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import reducer, { actions, selectors } from './reducer';

const { getLanguage, getAppName, getLanguageFromMessages } = selectors;
const { changeAppNameAction } = actions;

const remoteAppScope = 'remoteApp2';

const RemoteApp = () => {
  const dispatch = useDispatch();
  const languageFromHost = useSelector(state => getLanguageFromMessages(state));
  const language = useSelector(state => getLanguage(state));
  const appName = useSelector(state => getAppName(state));
  const [remoteAppInput, setRemoteAppInput] = useState('');
  
  return (
    <div style={{ marginTop: '10px' }}>
      <div>RemoteApp2</div>
      <div>
        RemoteApp2's name from the redux store : {appName}
      </div>

      <div>
        RemoteApp2's language from the redux store : {language}
      </div>

      <div>
        RemoteApp2's language derived from host getMessages : {languageFromHost}
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
