// @flow

type ReduxAction = { type: $Subtype<string> }
type ActionTypes = { [string]: string }
type ActionCreators<A> = { [string]: (...args: any[]) => A }
type Selectors<S> = { [string]: (S, ...args: any[]) => * }
type Reducer<S, A> = (S, A) => S
type ModuleConfig<S, A, AT, AC, SL: Selectors<S>> = {
  actionTypes: AT,
  actionCreators: AC,
  reducer: Reducer<S, A>,
  selectors: SL,
}
type ExtractSelector = <S, F, A1, A2, A3, A4, A5, A6, A7>(
  (S, A1, A2, A3, A4, A5, A6, A7) => F,
) => (Object, A1, A2, A3, A4, A5, A6, A7) => F
type ReduxModule<R, AT, AC, SL> = { reducer: R } & AT & AC & SL

function fromObj<T>(obj: T, reducer: Function) {
  return Object.entries(obj).reduce(reducer, {})
}

export function createReduxModule<
  S,
  A: ReduxAction,
  AT: ActionTypes,
  AC: ActionCreators<A>,
  SL: Selectors<S>,
>(
  reduxModuleName: string,
  config: ModuleConfig<S, A, AT, AC, SL>,
): ReduxModule<Reducer<S, A>, AT, AC, $ObjMap<SL, ExtractSelector>> {
  function reducer(state: S, action: A) {
    return config.reducer(state, {
      ...action,
      type: action.type.replace(`${reduxModuleName}/`, ""),
    })
  }

  const actionTypes = fromObj(
    config.actionTypes,
    (actionTypes, [actionTypeExportName, actionType]) => ({
      ...actionTypes,
      [actionTypeExportName]: `${reduxModuleName}/${actionType}`,
    }),
  )

  const actionCreators = fromObj(
    config.actionCreators,
    (actionCreators, [actionCreatorExportName, actionCreator]) => {
      const wrappedActionCreator = (...args) => {
        const action = actionCreator(...args)

        return {
          ...action,
          type: `${reduxModuleName}/${action.type}`,
        }
      }

      return {
        ...actionCreators,
        [actionCreatorExportName]: wrappedActionCreator,
      }
    },
  )

  const selectors = fromObj(
    config.selectors,
    (selectors, [selectorExportName, selector]) => {
      const wrappedSelector = (state, ...args) => {
        return selector(state[reduxModuleName], ...args)
      }

      return { ...selectors, [selectorExportName]: wrappedSelector }
    },
  )

  const module: any = {
    reducer,
    ...actionTypes,
    ...actionCreators,
    ...selectors,
  }

  return module
}

export function composeReduxModules<
  S,
  A,
  AT,
  AC,
  SL,
  M: ReduxModule<Reducer<S, A>, AT, AC, SL>,
  S2,
  A2,
  AT2,
  AC2,
  SL2,
  M2: ReduxModule<Reducer<S2, A2>, AT2, AC2, SL2>,
>(
  reduxModuleA: M,
  reduxModuleB: M2,
): ReduxModule<
  Reducer<S & S2, A & A2>,
  AT & AT2,
  AC & AC2,
  $ObjMap<SL, ExtractSelector> & $ObjMap<SL2, ExtractSelector>,
> {
  const module: any = {
    ...reduxModuleA,
    ...reduxModuleB,
    reducer(state: S & S2, action: A & A2) {
      return reduxModuleB.reducer(
        (reduxModuleA.reducer(state, action): any),
        action,
      )
    },
  }

  return module
}

type ExtractReducer = <R, AT, AC, SL>(ReduxModule<R, AT, AC, SL>) => R

export function extractReducers<
  M: { [string]: { reducer: Reducer<any, any> } },
>(modules: M): $ObjMap<M, ExtractReducer> {
  const result = {}

  for (const [reduxModuleName, reduxModule] of Object.entries(
    modules,
  )) {
    if (typeof reduxModule === "object" && reduxModule !== null) {
      result[reduxModuleName] = reduxModule.reducer
    }
  }

  return result
}
