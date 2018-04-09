const zipObject = (keys = [], values = []) =>
  keys.reduce((a, key, index) => {
    a[key] = values[index]
    return a
  }, {})

export function object(obj: {}) {
  const keys = Object.keys(obj)
  return Promise.all(
    keys.map(key => {
      const value = obj[key]

      if (typeof value === "object" && !value.then) {
        return promiseAllObject(value)
      }

      return value
    }),
  ).then(result => zipObject(keys, result))
}
