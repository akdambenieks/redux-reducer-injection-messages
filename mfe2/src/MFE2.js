import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from './reducer';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';

const { getActionLog, getGlobalLanguage } = selectors;

const printActionLog = (actionLog) => {
  return actionLog.map((action, index) => {
    return (<div key={`${index}-action`}><h3>{index+1}: {action}</h3></div>)
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
    </div>
  );
};

export default MFE2;
