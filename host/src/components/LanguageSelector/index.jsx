import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../../globalSlice';
import { StyledButton, SelectorContainer } from './styled';
import { LANGUAGE_OPTIONS } from './constants';

const { getGlobalLanguage } = selectors;
const { selectGlobalLanguage } = actions;

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => getGlobalLanguage(state));

  return (
    <SelectorContainer>
      {LANGUAGE_OPTIONS.map((option) => (
        <StyledButton
          onClick={e => dispatch(selectGlobalLanguage(e.currentTarget.id))}
          id={option}
          key={option}
          className={language === option ? 'selected' : ''}
          disabled={language === option}
        >
          {option}
        </StyledButton>
      ))}
    </SelectorContainer>
  )
}

export default LanguageSelector;