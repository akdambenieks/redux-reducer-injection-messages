import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from '../../store'
import { StyledButton, SelectorContainer } from './styled';
import { LANGUAGE_OPTIONS } from './constants';

const { getLanguage } = selectors;
const { selectLanguage } = actions;

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => getLanguage(state));

  return (
    <SelectorContainer>
      {LANGUAGE_OPTIONS.map((option) => (
        <StyledButton
          onClick={e => dispatch(selectLanguage(e.currentTarget.id))}
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