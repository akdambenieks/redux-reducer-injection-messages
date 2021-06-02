import styled from 'styled-components';

export const CounterButton = styled.button`
  font-size: 32px;
  padding: 4px 16px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 16px 0px;
`

export const CounterTitle = styled.div`
  display: inline;
  font-size: 24px;
  color: ${({ themeColor }) => themeColor};
`

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: middle;
  font-family: Arial, Helvetica, sans-serif !important;
  margin-bottom: 48px;
`