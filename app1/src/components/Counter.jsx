import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../store'

const { getCount } = selectors;
const { enqueueMessage } = actions;

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => getCount(state));
  const dispatchIncrementCountMessage = () => dispatch(enqueueMessage({ type: 'UPDATE_COUNT', payload: 1 }));
  const dispatchDecrementCountMessage = () => dispatch(enqueueMessage({ type: 'UPDATE_COUNT', payload: -1 }));
  return (
    <>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={dispatchIncrementCountMessage}>Increment</button>
        <button onClick={dispatchDecrementCountMessage}>Decrement</button>
      </div>
    </>
  )
}

export default Counter;