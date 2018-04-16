// @flow

import React from "react"
import type { ComponentType } from "react"
import hoistNonReactStatics from "hoist-non-react-statics"

import type { Config } from "../../cfg"
import { configShape } from "../../cfg"

type Context = {
  config: Config,
}

type ConfigSelector = {
  (config: Config): any,
}

const getDisplayName = (WrappedComponent: ComponentType<any>) =>
  WrappedComponent.displayName || WrappedComponent.name || "Component"

/**
 * Higher-order component to inject configuration-related props
 * @param {string?} propName - name of prop you want injected
 * @param {Function?} selector - function to grab desired slice of configuration object
 */
const withConfig = (
  propName?: string = "config",
  selector?: ConfigSelector = x => x,
) => (WrappedComponent: ComponentType<any>) => {
  const ConfigComponent = (props: any, context: Context) => {
    const configProps = {
      [propName]: selector(context.config),
    }

    return <WrappedComponent {...props} {...configProps} />
  }

  ConfigComponent.contextTypes = {
    config: configShape,
  }

  ConfigComponent.displayName = `WithConfig(${getDisplayName(
    WrappedComponent,
  )})`

  hoistNonReactStatics(ConfigComponent, WrappedComponent)

  return ConfigComponent
}

export default withConfig
