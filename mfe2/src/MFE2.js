import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import reducer, { actions, selectors } from './reducer';

const { getLanguage, getAppName, getLanguageFromMessages } = selectors;
const { changeAppNameAction, enqueueMessageAction } = actions;

const mfeScope = 'mfe2';

const MFE2 = () => {
  const dispatch = useDispatch();
  const languageFromHost = useSelector(state => getLanguageFromMessages(state));
  const language = useSelector(state => getLanguage(state));
  const appName = useSelector(state => getAppName(state));
  const [remoteAppInput, setRemoteAppInput] = useState('');
  const [remoteAppIncrementDecrementByValue, setRemoteAppIncrementDecrementByValue] = useState(1);
  
  return (
    <div style={{ marginTop: '10px' }}>
      <div>MFE2</div>
      <div>
        MFE2's name from the redux store : {appName}
      </div>

      <div>
        MFE2's language from the redux store : {language}
      </div>

      <div>
        MFE2's language derived from host getMessages : {languageFromHost}
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
          Dispatch MFE2 new name
        </button>
        <div>
          <label htmlFor="increment-decrement-by-value">Increment/Decrement by: </label>
          <input
            id="increment-decrement-by-value"
            style={{ marginRight: '10px' }}
            value={remoteAppIncrementDecrementByValue}
            type="number"
            onChange={(e) => {
              setRemoteAppIncrementDecrementByValue(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={() => dispatch(enqueueMessageAction(
            {
              type: 'UPDATE_COUNT',
              payload: remoteAppIncrementDecrementByValue
            }
          ))}>
            Increment
          </button>
          <button onClick={() => dispatch(enqueueMessageAction(
            {
              type: 'UPDATE_COUNT',
              payload: -remoteAppIncrementDecrementByValue
            }
          ))}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const MFE2Wrapper = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(mfeScope, reducer);
    return () => console.log('Unmounting MFE2')
  }, []);

  return (
    <Provider store={store || {}}>
      <MFE2 />
    </Provider>
  );
};

export default MFE2Wrapper;
