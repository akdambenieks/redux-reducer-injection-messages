import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from './reducer';
import { StyledTitle, CountUpdateValueContainer, StyledInput, StyledLabel } from './styled.jsx';
import GREETING from './constants.js';
import Counter from './components/Counter/index.jsx';

const { getGlobalLanguage, getScopeCount, getGlobalCount } = selectors;
const { updateScopeCount, updateGlobalCount } = actions;

const MFE2 = () => {
  const dispatch = useDispatch();
  const globalLanguage = useSelector(getGlobalLanguage);
  const scopeCount = useSelector(getScopeCount);
  const globalCount = useSelector(getGlobalCount);
  const [countUpdateValue, setCountUpdateValue] = useState(1);

  const onScopeIncrement = () => dispatch(updateScopeCount(parseInt(countUpdateValue)));
  const onScopeDecrement = () =>  dispatch(updateScopeCount(parseInt(-countUpdateValue)));
  const onGlobalIncrement = () => dispatch(updateGlobalCount(parseInt(countUpdateValue)));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(parseInt(-countUpdateValue)));
  const changeCountUpdateValue = value => setCountUpdateValue(value);
  
  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[globalLanguage]}</StyledTitle>
      <CountUpdateValueContainer>
        <StyledLabel htmlFor="count-update-value">Update Count By:</StyledLabel>
        <StyledInput type="number" id="count-update-value" onChange={e => changeCountUpdateValue(e.currentTarget.value)} value={countUpdateValue} />
      </CountUpdateValueContainer>
      <Counter title="Global Counter for MFE2" count={globalCount} onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue" />
      <Counter title="Counter for MFE2 Scope" count={scopeCount} onIncrement={onScopeIncrement} onDecrement={onScopeDecrement} themeColor="red" />
    </div>
  );
};

export default MFE2;
