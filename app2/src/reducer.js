const initialState = {
  appName: 'remoteApp',
};

const CHANGE_APP_NAME = 'CHANGE_APP_NAME';

const changeAppNameAction = (appName) => {
  return { type: CHANGE_APP_NAME, payload: appName };
};

const changeHostLanguageAction = (language) => {
  return { type: 'HOST/CHANGE_LANGUAGE', payload: language}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
  }
  return state;
};

export { changeAppNameAction, changeHostLanguageAction };
export default reducer;
