import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 24px;
  margin-left: 16px;
  padding: 4px 8px;
  background-color: white;
  text-decoration: none;
  font-weight: 500;
  color: blue;
  border: none;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif !important;
  &.selected {
    background-color: blue;
    color: white;
    border: solid 2px blue;
  };
`

export const SelectorContainer = styled.div`
  display: flex;
`