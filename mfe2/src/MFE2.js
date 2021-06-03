import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from './reducer';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';

const { getActionLog, getGlobalLanguage } = selectors;

const printActionLog = (actionLog) => {
  return actionLog.map((action, index) => {
    return (<div key={`${index}-action`}><b>{index+1}: {action}</b></div>)
    }) 
 }

const MFE2 = () => {
  const globalLanguage = useSelector(getGlobalLanguage);
  const actionLog = useSelector(getActionLog);
  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[globalLanguage]}</StyledTitle>
      <h1>Counter Action Log:</h1>
      {
        printActionLog(actionLog)
      }
      <h3>MFE1 architecture:</h3>
      <ul>
        <li>Exposes two endpoints (via webpack 5 module federation): <code>reducer</code> and <code>MFE2</code>.  These are imported by the host app.</li>
        <li>The <code>reducer</code> endpoint provides access to the MFE reducer (via default export) as well a the scope name to be used in the store (via the <code>scope</code> constant)</li>
        <li>The <code>MFE2</code> endpoint provides access to the MFE react component itself.  <b>NOTE:</b> the exported react component <b>MUST NOT</b> be wrapped in a redux <code>Provider</code> as this would result in a nested store when it is imported into the host which can lead to errors in reading or updating the store</li>
        <li>Stores <code>globalLanguage</code> and <code>actionLogForCount</code> (as an array of strings) in it's local store (scoped to <code>mfe2</code>) for updating display of the greeting and counter action log respectively</li>
        <li>MFE2 reducer is subscribed to actions of type <code>GLOBAL/SELECT_LANGUAGE</code> and <code>GLOBAL/UPDATE_COUNT</code> to update the mfe2 scoped store</li>
        <li><b>Note:</b> this component does not dispatch any actions whatsoever, updates to its store are entirely dependent on global actions</li>
        <li><b>Note:</b> to properly display this MFE as a stand alone app it must be provided with its own store.  In this case the root url for the app (<a href="http://localhost:3003" target="_blank">http://localhost:3003</a>) loads MFE1 wrapped in a redux <code>Provider</code> (found in <code>src/bootstrap.js</code>)</li>
      </ul>
    </div>
  );
};

export default MFE2;
