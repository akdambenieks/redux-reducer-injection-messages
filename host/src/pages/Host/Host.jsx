import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../store'
import StyledTitle from './styled';
import GREETING from './constants';

const { getLanguage } = selectors;

export default () => {
  const language = useSelector(getLanguage);
  return (
    <>
      <StyledTitle>{GREETING[language]}</StyledTitle>
    </>
  )
};