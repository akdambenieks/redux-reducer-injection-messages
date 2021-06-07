import styled from 'styled-components';

export const CounterButton = styled.button`
  font-size: 32px;
  padding: 4px 16px;
  background-color: white;
  text-decoration: none;
  font-weight: 500;
  color: ${({ themeColor }) => themeColor};
  border: solid 2px gainsboro;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: gainsboro;
  }
  &:first-of-type {
    margin-right: 32px;
  }
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 16px 0px;
`

export const CounterCount = styled.div`
  margin: 0px 16px;
  font-size: 48px;
  min-width: 80px;
  text-align: center;
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