const processGlobalLanguageActions = (actions) => {
  const globalLanguageActions = actions['GLOBAL/SELECT_LANGUAGE'] || [];
  return globalLanguageActions[actions.length - 1] || 'en';
} 

const processGlobalCountActions = (actions) => {
  const globalCountActions = actions['GLOBAL/UPDATE_COUNT'] || [];
  return globalCountActions.reduce((acc, action) => {
    return acc + action
  }, 0)
}

const processScopeCountActions = (actions) => {
  const scopeCountActions = actions['MFE2/UPDATE_COUNT'] || [];
  return scopeCountActions.reduce((acc, action) => {
    return acc + action
  }, 0)
}

export {
  processGlobalLanguageActions,
  processGlobalCountActions,
  processScopeCountActions
}