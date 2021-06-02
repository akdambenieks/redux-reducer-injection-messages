import React from 'react';
import { CounterContainer, CounterButton, CounterTitle, CounterWrapper } from './styled';

const Counter = ({ title, onIncrement, onDecrement, themeColor }) => {
  return (
    <CounterWrapper>
      <CounterTitle themeColor={themeColor}>{title}</CounterTitle>
      <CounterContainer>
        <CounterButton onClick={() => onIncrement()} themeColor={themeColor}>+</CounterButton>
        <CounterButton onClick={() => onDecrement()} themeColor={themeColor}>-</CounterButton>
      </CounterContainer>
    </CounterWrapper>
  )
}

export default Counter;