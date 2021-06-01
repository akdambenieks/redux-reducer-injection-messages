import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import reducer, {
  mfeScope,
  selectors,
  actions
} from './reducer';
import StyledTitle from './styled.jsx';
import GREETING from './constants.js';
import Counter from 'host/Counter';

const { getCount, getGlobalCount, getGlobalLanguage } = selectors;
const { updateCount, updateGlobalCount } = actions;

const MFE1 = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => getGlobalLanguage(state));
  const count = useSelector((state) => getCount(state));
  const globalCount = useSelector(getGlobalCount);

  const onIncrement = () => dispatch(updateCount(1));
  const onDecrement = () =>  dispatch(updateCount(-1));
  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(-1));

  return (
    <div style={{ marginTop: '10px' }}>
      <StyledTitle>{GREETING[language]}</StyledTitle>
      <Counter title="MFE1 Counter" count={count} onIncrement={onIncrement} onDecrement={onDecrement} themeColor="green"/>
      <Counter title="Host Counter from MFE1" count={globalCount} onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue"/>

    </div>
  );
};

const MFE1Wrapper = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(mfeScope, reducer);
    return () => {
      console.log('Unmounting MFE1');
      store.ejectReducer(mfeScope);
    }
  }, []);

  return (
    <Provider store={store || {}}>
      <MFE1 />
    </Provider>
  );
};

export default MFE1Wrapper;
