import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectors,
  actions
} from './reducer';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';
import Counter from './components/Counter/index.jsx';

const { getGlobalCount, getGlobalLanguage, getScopeCount } = selectors;
const { updateGlobalCount, updateScopeCount } = actions;

const MFE1 = () => {
  const dispatch = useDispatch();
  const globalLanguage = useSelector((state) => getGlobalLanguage(state));
  const globalCount = useSelector(getGlobalCount);
  const scopeCount = useSelector(getScopeCount);
  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(-1));
  const onScopeIncrement = () => dispatch(updateScopeCount(1));
  const onScopeDecrement = () =>  dispatch(updateScopeCount(-1));

  // NOTE: This MFE doesn't have it's own provider/store I think that we still need to pass in the store from the host as an optional prop with the default store being generated locally
  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[globalLanguage]}</StyledTitle>
      <Counter title="Global Counter for MFE1" count={globalCount} onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue"/>
      <Counter title="Counter for MFE1 Scope" count={scopeCount} onIncrement={onScopeIncrement} onDecrement={onScopeDecrement} themeColor="green"/>
    </div>
  );
};

export default MFE1;
