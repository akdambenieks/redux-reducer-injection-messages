const initialState = {
  appName: 'mfe1',
  language: 'en',
  messages: []
};

const CHANGE_APP_NAME = 'CHANGE_APP_NAME';
const ENQUEUE_MESSAGE = 'GLOBAL/ENQUEUE_MESSAGE';
const CHANGE_LANGUAGE = 'GLOBAL/CHANGE_LANGUAGE';

const changeAppNameAction = (appName) => {
  return { type: CHANGE_APP_NAME, payload: appName };
};

const enqueMessage = (message) => {
  return {
    type: ENQUEUE_MESSAGE,
    payload: message
  }
}

const changeLanguageAction = (language) => {
  return { type: CHANGE_LANGUAGE, payload: language}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
    case ENQUEUE_MESSAGE:
      console.log('Action in app',action)
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
  return result
};

const remoteAppScope = 'mfe1';
const hostAppScope = 'host';

const getMessages = (state) => {
  if(state[remoteAppScope])
    return state[remoteAppScope].messages;
  else
    return []
}

export { changeAppNameAction, changeLanguageAction, enqueMessage, getMessages, remoteAppScope, hostAppScope };
export default reducer;
