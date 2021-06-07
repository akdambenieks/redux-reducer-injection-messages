import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './mfe2slice.js';

const { updateGlobalCount, selectGlobalLanguage } = actions;

const DispatchControls = () => {
  const dispatch = useDispatch()
  return (
    <div style={{ marginTop: '10px', border: 'solid 1px gainsboro', padding: '10px' }}>
      <p><b>Global Actions Dispatchers</b></p>
      <button style={{ margin: '5px'}} onClick={() => dispatch(updateGlobalCount(1))}>Increment Global Counter</button>
      <button style={{ margin: '5px'}} onClick={() => dispatch(updateGlobalCount(-1))}>Decrement Global Counter</button>
      <button style={{ margin: '5px'}} onClick={() => dispatch(selectGlobalLanguage('en'))}>Select 'en' as Global Language</button>
      <button style={{ margin: '5px'}} onClick={() => dispatch(selectGlobalLanguage('fr'))}>Select 'fr' as Global Language</button>
    </div>
  );
};

export default DispatchControls;
