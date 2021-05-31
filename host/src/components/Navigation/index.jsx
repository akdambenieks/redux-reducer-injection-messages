import React from 'react';
import { NavigationContainer, StyledLink } from './styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StyledLink to="/" exact>Host</StyledLink>
      <StyledLink to="/mfe1" exact>MFE1</StyledLink>
      <StyledLink to="/mfe2" exact>MFE2</StyledLink>
    </NavigationContainer>
  )
}

export default Navigation;