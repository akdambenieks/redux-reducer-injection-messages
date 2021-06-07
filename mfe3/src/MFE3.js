import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from './mfe3slice';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';
import Counter from './components/Counter/index.jsx';

const { getGlobalLanguage } = selectors;
const { updateGlobalCount } = actions;

const MFE3 = () => {
  const dispatch = useDispatch();
  const globalLanguage = useSelector(getGlobalLanguage);
  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(-1));
  
  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[globalLanguage]}</StyledTitle>
      <Counter title="Dispatch Global Counter Actions" onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue" />
      <ul>
        <li>Exposes two endpoints (via webpack 5 module federation): <code>reducer</code> and <code>MFE3</code>.  These are imported by the host app.</li>
        <li>The <code>reducer</code> endpoint provides access to the MFE reducer (via default export) as well a the scope name to be used in the store (via the <code>scope</code> constant)</li>
        <li>The <code>MFE3</code> endpoint provides access to the MFE react component itself.  <b>NOTE:</b> the exported react component <b>MUST NOT</b> be wrapped in a redux <code>Provider</code> as this would result in a nested store when it is imported into the host which can lead to errors in reading or updating the store</li>
        <li>Stores <code>globalLanguage</code> in it's local store (scoped to <code>mfe3</code>) for updating display of the greeting</li>
        <li>MFE3 reducer is subscribed to actions of type <code>GLOBAL/SELECT_LANGUAGE</code> to update the mfe3 scoped store</li>
        <li>MFE3 dispatches actions of type <code>GLOBAL/UPDATE_COUNT</code> when the '+' and '-' buttons are clicked with <code>1</code> and <code>-1</code> as payloads respectively</li>
        <li><b>Note:</b> this component does not subscribe to the action (<code>GLOBAL/UPDATE_COUNT</code>) that it dispatches</li>
        <li><b>Note:</b> to properly display this MFE as a stand alone app it must be provided with its own store.  In this case the root url for the app (<a href="http://localhost:3004" target="_blank">http://localhost:3004</a>) loads MFE1 wrapped in a redux <code>Provider</code> (found in <code>src/bootstrap.js</code>)</li>
      </ul>
    </div>
  );
};

export default MFE3;
