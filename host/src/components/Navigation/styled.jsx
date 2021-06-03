import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-right: 16px;
  padding: 8px 16px;
  background-color: white;
  text-decoration: none;
  font-size: 32px;
  font-weight: 500;
  color: blue;
  font-family: Arial, Helvetica, sans-serif !important;
  &.active {
    background-color: blue;
    color: white;
  };
`

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 16px 16px 0px 16px;
`