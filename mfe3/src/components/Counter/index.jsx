import React from 'react';
import PropTypes from 'prop-types';
import { CounterContainer, CounterButton, CounterCount, CounterTitle, CounterWrapper } from './styled.jsx';

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

Counter.propTypes = {
  title: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  themeColor: PropTypes.string,
}

Counter.defaultProps = {
  title: '',
  onIncrement: () => console.log('Increment Count'),
  onDecrement: () => console.log('Decrement Count'),
  themeColor: 'blue',
}

export default Counter;