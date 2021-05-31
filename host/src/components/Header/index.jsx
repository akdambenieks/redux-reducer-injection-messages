import React from 'react';
import Navigation from '../Navigation';
import LanguageSelector from '../LanguageSelector';
import HeaderContainer from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <LanguageSelector />
    </HeaderContainer>
  )
}

export default Header;