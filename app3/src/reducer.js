const initialState = {
  appName: 'remoteApp2',
  language: 'en'
};

const remoteAppScope = 'remoteApp2';
const hostAppScope = 'host';

const CHANGE_APP_NAME = 'APP3/CHANGE_APP_NAME';
const CHANGE_LANGUAGE = 'APP3/CHANGE_LANGUAGE';
const ENQUEUE_MESSAGE = 'HOST/ENQUEUE_MESSAGE';

export const actions = {
  changeAppNameAction: (appName) => {
    return { type: CHANGE_APP_NAME, payload: appName };
  },
  enqueueMessageAction: (message) => {
    return { type: ENQUEUE_MESSAGE, payload: message };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
    case CHANGE_LANGUAGE: {
      return {...state}
    }
  }
  return state;
};

export const selectors = {
  getAppName: (state) => state[remoteAppScope] ? state[remoteAppScope].appName : initialState.appName,
  getLanguage: (state) => state[remoteAppScope] ? state[remoteAppScope].language : initialState.language,
  getMessagesFromHost: (state) => state[hostAppScope].messages,
  getLanguageFromMessages: (state) => {
    return state[hostAppScope].messages.reduce((acc, message) => {
      if (message.type === 'CHANGE_LANGUAGE') {
        acc = message.payload
      }
      return acc
    }, initialState.language)
  }
}

export default reducer;
