import React from 'react';
import { CounterContainer, CounterButton, CounterCount, CounterTitle, CounterWrapper } from './styled.jsx';

const Counter = ({ title, count, onIncrement, onDecrement, themeColor }) => {
  return (
    <CounterWrapper>
      <CounterTitle themeColor={themeColor}>{title}</CounterTitle>
      <CounterContainer>
        <CounterButton onClick={() => onIncrement()} themeColor={themeColor}>+</CounterButton>
        <CounterCount>{count}</CounterCount>
        <CounterButton onClick={() => onDecrement()} themeColor={themeColor}>-</CounterButton>
      </CounterContainer>
    </CounterWrapper>
  )
}

export default Counter;