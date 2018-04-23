import { createBrowserHistory } from "history"

const { BASENAME = "/" } = process.env

export default createBrowserHistory({
  basename: BASENAME,
})
