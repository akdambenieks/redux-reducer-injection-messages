import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../store';
const { getMessages } = selectors;

const { getCount } = selectors;
const Messages = () => {
  const messages = useSelector(getMessages)
  return (
    <div>
      You have {messages.length} message(s)
    </div>
  )
}

export default Messages;