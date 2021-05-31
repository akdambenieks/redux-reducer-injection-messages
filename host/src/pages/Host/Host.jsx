import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../../store'
import Counter from '../../components/Counter';
import StyledTitle from './styled';
import GREETING from './constants';

const { getLanguage, getCount } = selectors;
const { updateCount } = actions;

export default () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const count = useSelector(getCount)
  const onIncrement = () => dispatch(updateCount(1));
  const onDecrement = () => dispatch(updateCount(-1));
  return (
    <>
      <StyledTitle>{GREETING[language]}</StyledTitle>
      <Counter title="Host Counter" count={count} onIncrement={onIncrement} onDecrement={onDecrement} themeColor="blue" />
    </>
  )
};