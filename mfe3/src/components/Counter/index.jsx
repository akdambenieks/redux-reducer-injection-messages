import React from 'react';
import PropTypes from 'prop-types';
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

Counter.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  themeColor: PropTypes.string,
}

Counter.defaultProps = {
  title: '',
  count: 0,
  onIncrement: () => console.log('Increment Count'),
  onDecrement: () => console.log('Decrement Count'),
  themeColor: 'blue',
}

export default Counter;