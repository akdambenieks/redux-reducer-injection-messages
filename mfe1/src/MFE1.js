import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from './reducer';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';

const { getGlobalCount, getGlobalLanguage } = selectors;

const MFE1 = () => {
  const globalLanguage = useSelector((state) => getGlobalLanguage(state));
  const globalCount = useSelector(getGlobalCount);

  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[globalLanguage]}</StyledTitle>
      <h1>The count is: {globalCount} </h1>
    </div>
  );
};

export default MFE1;
