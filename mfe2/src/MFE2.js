import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import /*reducer, */{ actions, selectors/*, mfeScope */} from './reducer';
import { StyledTitle, CountUpdateValueContainer, StyledInput, StyledLabel } from './styled.jsx';
import GREETING from './constants.js';
import Counter from 'host/Counter';

const { getGlobalLanguage, getCount, getGlobalCount } = selectors;
const { updateCount, updateGlobalCount } = actions;

const MFE2 = () => {
  const dispatch = useDispatch();
  const language = useSelector(getGlobalLanguage);
  const count = useSelector(getCount);
  const globalCount = useSelector(getGlobalCount);
  const [countUpdateValue, setCountUpdateValue] = useState(1);

  const onIncrement = () => dispatch(updateCount(parseInt(countUpdateValue)));
  const onDecrement = () =>  dispatch(updateCount(parseInt(-countUpdateValue)));
  const onGlobalIncrement = () => dispatch(updateGlobalCount(parseInt(countUpdateValue)));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(parseInt(-countUpdateValue)));
  const changeCountUpdateValue = value => setCountUpdateValue(value);
  
  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[language]}</StyledTitle>
      <CountUpdateValueContainer>
        <StyledLabel htmlFor="count-update-value">Update Count By:</StyledLabel>
        <StyledInput type="number" id="count-update-value" onChange={e => changeCountUpdateValue(e.currentTarget.value)} value={countUpdateValue} />
      </CountUpdateValueContainer>
      <Counter title="MFE2 Counter" count={count} onIncrement={onIncrement} onDecrement={onDecrement} themeColor="red" />
      <Counter title="Host Counter from MFE2" count={globalCount} onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue" />
    </div>
  );
};

const MFE2Wrapper = (/*props*/) => {
  // const { store } = props;
  useEffect(() => {
    console.log('Mounting MFE2');
    // store.injectReducer(mfeScope, reducer);
    return () => {
      console.log('Unmounting MFE2');
      // store.ejectReducer(mfeScope);
    }
  }, []);

  return (
    // <Provider store={store || {}}>
      <MFE2 />
    // </Provider>
  );
};

export default MFE2Wrapper;
