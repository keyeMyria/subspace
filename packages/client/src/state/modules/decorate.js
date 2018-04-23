export default function decorateReduxModule(
  reduxModuleName,
  reduxModule,
) {
  const decoratedActionTypes = {}
  const decoratedActionCreators = {}
  const decoratedSelectors = {}

  const {
    actionTypes,
    actionCreators,
    selectors,
    reducer,
  } = reduxModule
  const reduxModuleNameRegex = new RegExp(`^${reduxModuleName}\/`)

  const decoratedReducer = (state, action) =>
    reducer(state, {
      ...action,
      type: action.type.replace(reduxModuleNameRegex, ""),
    })

  for (const [actionTypeExportName, actionType] of Object.entries(
    actionTypes,
  )) {
    decoratedActionTypes[
      actionTypeExportName
    ] = `${reduxModuleName}/${actionType}`
  }

  for (const [
    actionCreatoreExportName,
    actionCreator,
  ] of Object.entries(actionCreators)) {
    decoratedActionCreators[actionCreatoreExportName] = (...args) => {
      const action = actionCreator(...args)

      return {
        ...action,
        type: `${reduxModuleName}/${action.type}`,
      }
    }
  }

  for (const [selectorExportName, selector] of Object.entries(
    selectors,
  )) {
    decoratedSelectors[selectorExportName] = (state, ...args) => {
      return selector(state[reduxModuleName], ...args)
    }
  }

  return {
    actionTypes: decoratedActionTypes,
    actionCreators: decoratedActionCreators,
    selectors: decoratedSelectors,
    reducer: decoratedReducer,
    ...decoratedActionCreators,
    ...decoratedActionTypes,
    ...decoratedSelectors,
  }
}
