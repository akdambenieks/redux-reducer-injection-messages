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
      <h3>Host architecture:</h3>
      <ul>
        <li>Imports (via webpack module federation) reducers from the MFEs</li>
        <li>Injects these into the host store at load time</li>
        <li>Lazily imports (via webpack module federation) and loads react components from MFEs as they are mounted</li>
        <li>Stores <code>language</code> in it's local store (scoped to <code>global</code>) for updating display of the language selector and greeting</li>
        <li>Dispatches actions of type <code>GLOBAL/SELECT_LANGUAGE</code> with the selected language of type String as the payload</li>
        <li>Host reducer is subscribed to actions of type <code>GLOBAL/SELECT_LANGUAGE</code> to update the global scoped store</li>
      </ul>
    </>
  )
};