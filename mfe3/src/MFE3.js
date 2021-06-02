import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from './reducer';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';
import Counter from './components/Counter/index.jsx';

const { getGlobalLanguage, getGlobalCount } = selectors;
const { updateGlobalCount } = actions;

const MFE3 = () => {
  const dispatch = useDispatch();
  const globalLanguage = useSelector(getGlobalLanguage);
  const globalCount = useSelector(getGlobalCount);
  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(-1));
  
  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[globalLanguage]}</StyledTitle>
      <Counter title="Dispatch Global Counter Actions and Display Global Counter" count={globalCount} onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue" />
    </div>
  );
};

export default MFE3;
