import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './mfe1slice.js';

const { updateGlobalCount, selectGlobalLanguage, test } = actions;

const DispatchControls = () => {
  const dispatch = useDispatch()
  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={() => dispatch(updateGlobalCount(1))}>Increment Global Counter</button>
      <button onClick={() => dispatch(updateGlobalCount(-1))}>Decrement Global Counter</button>
      <button onClick={() => dispatch(selectGlobalLanguage('en'))}>Select 'en' as Global Language</button>
      <button onClick={() => dispatch(selectGlobalLanguage('fr'))}>Select 'fr' as Global Language</button>
      <button onClick={() => dispatch(test())}>Test MFE scoped action</button>
    </div>
  );
};

export default DispatchControls;
