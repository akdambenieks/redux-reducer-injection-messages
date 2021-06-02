import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../../store'
import StyledTitle from './styled';
import GREETING from './constants';
import Counter from '../../components/Counter'

const { getLanguage } = selectors;
const { updateGlobalCount } = actions;

export default () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));
  const onGlobalDecrement = () =>  dispatch(updateGlobalCount(-1));
  return (
    <>
      <StyledTitle>{GREETING[language]}</StyledTitle>
      <Counter title="Dispatch Global Counter Actions" onIncrement={onGlobalIncrement} onDecrement={onGlobalDecrement} themeColor="blue"/>
    </>
  )
};