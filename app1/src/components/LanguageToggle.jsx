import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions, CHANGE_LANGUAGE } from '../store'
import { LANGUAGE_OPTIONS } from '../constants';

const { getLanguage } = selectors;
const { enqueueMessage } = actions;

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => getLanguage(state));
  const dispatchChangeLanguageMessage = e => dispatch(enqueueMessage({ type: CHANGE_LANGUAGE, payload: e.currentTarget.id }))

  return (
    <>
      <p>Current Language: {language}</p>
      <p>Change Language:</p>
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          onClick={e => dispatchChangeLanguageMessage(e)}
          id={option}
          key={option}
          disabled={language === option}
        >
          {option}
        </button>
      ))}
    </>
  )
}

export default LanguageToggle;