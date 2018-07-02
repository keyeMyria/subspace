// @flow

export type Range = [number, number]
export type Values = $ReadOnlyArray<number>
export type QueryResult = [number[], string]

export type Redimension = {
  insert: (values: Values, id: string) => Promise<any>,
  remove: (values: Values, id: string) => Promise<any>,
  removeById: (id: string) => Promise<any>,
  update: (values: Values, id: string) => Promise<any>,
  query: (ranges: Range[]) => Promise<QueryResult[]>,
}
