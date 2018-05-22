// @flow

import {
  createReduxModule,
  composeReduxModules,
} from "./redux-module"

type Action = { type: $Subtype<string> }
type State = { a: number }
type GlobalState = { Test: State }

describe("redux-module", () => {
  let state: GlobalState
  let reduxModuleConfig

  beforeEach(() => {
    state = { Test: { a: 0 } }
    reduxModuleConfig = {
      actionTypes: {
        A: "A",
      },
      actionCreators: {
        a: () => ({
          type: "A",
        }),
      },
      reducer: (state: State, action: Action): State => {
        switch (action.type) {
          case "A":
            return { ...state, a: state.a + 1 }
          default:
            return state
        }
      },
      selectors: {
        getA: state => state.a,
      },
    }
  })

  describe("createReduxModule()", () => {
    it("namespaces actions produced by action creators", () => {
      const m = createReduxModule("Test", reduxModuleConfig)

      expect(m.a()).toEqual({ type: "Test/A" })
    })

    it("strips prefixes from actions before reaching reducers", () => {
      const m = createReduxModule("Test", reduxModuleConfig)
      const next = m.reducer(state.Test, m.a())

      expect(next.a).toEqual(1)
    })

    it("namespaces selectors", () => {
      const m = createReduxModule("Test", reduxModuleConfig)
      const next = m.reducer(state.Test, m.a())
      const a = m.getA({ Test: next })

      expect(a).toEqual(1)
    })
  })

  describe("composeReduxModules()", () => {
    it("composes two redux modules", () => {
      const reduxModuleA = createReduxModule(
        "Test",
        reduxModuleConfig,
      )
      const reduxModuleB = createReduxModule(
        "Test",
        reduxModuleConfig,
      )
      const composedReduxModule = composeReduxModules(
        reduxModuleA,
        reduxModuleB,
      )

      const next = composedReduxModule.reducer(
        state.Test,
        composedReduxModule.a(),
      )
      const a = composedReduxModule.getA({ Test: next })

      expect(a).toEqual(2)
    })
  })
})
