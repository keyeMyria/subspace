!(function(e) {
  var t = window.webpackHotUpdate
  window.webpackHotUpdate = function(e, n) {
    !(function(e, t) {
      if (!w[e] || !_[e]) return
      for (var n in ((_[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (h[n] = t[n])
      0 == --v && 0 === y && O()
    })(e, n),
      t && t(e, n)
  }
  var n,
    r = !0,
    o = "673deeca2d89deb5c4a3",
    i = 1e4,
    s = {},
    a = [],
    c = []
  function u(e) {
    var t = C[e]
    if (!t) return E
    var r = function(r) {
        return (
          t.hot.active
            ? (C[r]
                ? C[r].parents.includes(e) || C[r].parents.push(e)
                : ((a = [e]), (n = r)),
              t.children.includes(r) || t.children.push(r))
            : (console.warn(
                "[HMR] unexpected require(" +
                  r +
                  ") from disposed module " +
                  e,
              ),
              (a = [])),
          E(r)
        )
      },
      o = function(e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return E[e]
          },
          set: function(t) {
            E[e] = t
          },
        }
      }
    for (var i in E)
      Object.prototype.hasOwnProperty.call(E, i) &&
        "e" !== i &&
        Object.defineProperty(r, i, o(i))
    return (
      (r.e = function(e) {
        return (
          "ready" === d && f("prepare"),
          y++,
          E.e(e).then(t, function(e) {
            throw (t(), e)
          })
        )
        function t() {
          y--,
            "prepare" === d &&
              (m[e] || x(e), 0 === y && 0 === v && O())
        }
      }),
      r
    )
  }
  var l = [],
    d = "idle"
  function f(e) {
    d = e
    for (var t = 0; t < l.length; t++) l[t].call(null, e)
  }
  var p,
    h,
    b,
    v = 0,
    y = 0,
    m = {},
    _ = {},
    w = {}
  function g(e) {
    return +e + "" === e ? +e : e
  }
  function j(e) {
    if ("idle" !== d)
      throw new Error("check() is only allowed in idle status")
    return (
      (r = e),
      f("check"),
      ((t = i),
      (t = t || 1e4),
      new Promise(function(e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"))
        try {
          var r = new XMLHttpRequest(),
            i = E.p + "" + o + ".hot-update.json"
          r.open("GET", i, !0), (r.timeout = t), r.send(null)
        } catch (e) {
          return n(e)
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error("Manifest request to " + i + " timed out."))
            else if (404 === r.status) e()
            else if (200 !== r.status && 304 !== r.status)
              n(new Error("Manifest request to " + i + " failed."))
            else {
              try {
                var t = JSON.parse(r.responseText)
              } catch (e) {
                return void n(e)
              }
              e(t)
            }
        }
      })).then(function(e) {
        if (!e) return f("idle"), null
        ;(_ = {}), (m = {}), (w = e.c), (b = e.h), f("prepare")
        var t = new Promise(function(e, t) {
          p = { resolve: e, reject: t }
        })
        h = {}
        return x(0), "prepare" === d && 0 === y && 0 === v && O(), t
      })
    )
    var t
  }
  function x(e) {
    w[e]
      ? ((_[e] = !0),
        v++,
        (function(e) {
          var t = document.getElementsByTagName("head")[0],
            n = document.createElement("script")
          ;(n.charset = "utf-8"),
            (n.src = E.p + "" + e + "." + o + ".hot-update.js"),
            t.appendChild(n)
        })(e))
      : (m[e] = !0)
  }
  function O() {
    f("ready")
    var e = p
    if (((p = null), e))
      if (r)
        Promise.resolve()
          .then(function() {
            return P(r)
          })
          .then(
            function(t) {
              e.resolve(t)
            },
            function(t) {
              e.reject(t)
            },
          )
      else {
        var t = []
        for (var n in h)
          Object.prototype.hasOwnProperty.call(h, n) && t.push(g(n))
        e.resolve(t)
      }
  }
  function P(t) {
    if ("ready" !== d)
      throw new Error("apply() is only allowed in ready status")
    var n, r, i, c, u
    function l(e) {
      for (
        var t = [e],
          n = {},
          r = t.slice().map(function(e) {
            return { chain: [e], id: e }
          });
        r.length > 0;

      ) {
        var o = r.pop(),
          i = o.id,
          s = o.chain
        if ((c = C[i]) && !c.hot._selfAccepted) {
          if (c.hot._selfDeclined)
            return { type: "self-declined", chain: s, moduleId: i }
          if (c.hot._main)
            return { type: "unaccepted", chain: s, moduleId: i }
          for (var a = 0; a < c.parents.length; a++) {
            var u = c.parents[a],
              l = C[u]
            if (l) {
              if (l.hot._declinedDependencies[i])
                return {
                  type: "declined",
                  chain: s.concat([u]),
                  moduleId: i,
                  parentId: u,
                }
              t.includes(u) ||
                (l.hot._acceptedDependencies[i]
                  ? (n[u] || (n[u] = []), p(n[u], [i]))
                  : (delete n[u],
                    t.push(u),
                    r.push({ chain: s.concat([u]), id: u })))
            }
          }
        }
      }
      return {
        type: "accepted",
        moduleId: e,
        outdatedModules: t,
        outdatedDependencies: n,
      }
    }
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        e.includes(r) || e.push(r)
      }
    }
    t = t || {}
    var v = {},
      y = [],
      m = {},
      _ = function() {
        console.warn(
          "[HMR] unexpected require(" +
            x.moduleId +
            ") to disposed module",
        )
      }
    for (var j in h)
      if (Object.prototype.hasOwnProperty.call(h, j)) {
        var x
        u = g(j)
        var O = !1,
          P = !1,
          k = !1,
          T = ""
        switch (((x = h[j] ? l(u) : { type: "disposed", moduleId: j })
          .chain &&
          (T = "\nUpdate propagation: " + x.chain.join(" -> ")),
        x.type)) {
          case "self-declined":
            t.onDeclined && t.onDeclined(x),
              t.ignoreDeclined ||
                (O = new Error(
                  "Aborted because of self decline: " +
                    x.moduleId +
                    T,
                ))
            break
          case "declined":
            t.onDeclined && t.onDeclined(x),
              t.ignoreDeclined ||
                (O = new Error(
                  "Aborted because of declined dependency: " +
                    x.moduleId +
                    " in " +
                    x.parentId +
                    T,
                ))
            break
          case "unaccepted":
            t.onUnaccepted && t.onUnaccepted(x),
              t.ignoreUnaccepted ||
                (O = new Error(
                  "Aborted because " + u + " is not accepted" + T,
                ))
            break
          case "accepted":
            t.onAccepted && t.onAccepted(x), (P = !0)
            break
          case "disposed":
            t.onDisposed && t.onDisposed(x), (k = !0)
            break
          default:
            throw new Error("Unexception type " + x.type)
        }
        if (O) return f("abort"), Promise.reject(O)
        if (P)
          for (u in ((m[u] = h[u]),
          p(y, x.outdatedModules),
          x.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(
              x.outdatedDependencies,
              u,
            ) &&
              (v[u] || (v[u] = []),
              p(v[u], x.outdatedDependencies[u]))
        k && (p(y, [x.moduleId]), (m[u] = _))
      }
    var S,
      L = []
    for (r = 0; r < y.length; r++)
      (u = y[r]),
        C[u] &&
          C[u].hot._selfAccepted &&
          L.push({ module: u, errorHandler: C[u].hot._selfAccepted })
    f("dispose"),
      Object.keys(w).forEach(function(e) {
        !1 === w[e] &&
          (function(e) {
            delete installedChunks[e]
          })(e)
      })
    for (var M, R, I = y.slice(); I.length > 0; )
      if (((u = I.pop()), (c = C[u]))) {
        var D = {},
          A = c.hot._disposeHandlers
        for (i = 0; i < A.length; i++) (n = A[i])(D)
        for (
          s[u] = D,
            c.hot.active = !1,
            delete C[u],
            delete v[u],
            i = 0;
          i < c.children.length;
          i++
        ) {
          var N = C[c.children[i]]
          N &&
            ((S = N.parents.indexOf(u)) >= 0 &&
              N.parents.splice(S, 1))
        }
      }
    for (u in v)
      if (Object.prototype.hasOwnProperty.call(v, u) && (c = C[u]))
        for (R = v[u], i = 0; i < R.length; i++)
          (M = R[i]),
            (S = c.children.indexOf(M)) >= 0 &&
              c.children.splice(S, 1)
    for (u in (f("apply"), (o = b), m))
      Object.prototype.hasOwnProperty.call(m, u) && (e[u] = m[u])
    var H = null
    for (u in v)
      if (Object.prototype.hasOwnProperty.call(v, u) && (c = C[u])) {
        R = v[u]
        var F = []
        for (r = 0; r < R.length; r++)
          if (((M = R[r]), (n = c.hot._acceptedDependencies[M]))) {
            if (F.includes(n)) continue
            F.push(n)
          }
        for (r = 0; r < F.length; r++) {
          n = F[r]
          try {
            n(R)
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: "accept-errored",
                moduleId: u,
                dependencyId: R[r],
                error: e,
              }),
              t.ignoreErrored || H || (H = e)
          }
        }
      }
    for (r = 0; r < L.length; r++) {
      var q = L[r]
      ;(u = q.module), (a = [u])
      try {
        E(u)
      } catch (e) {
        if ("function" == typeof q.errorHandler)
          try {
            q.errorHandler(e)
          } catch (n) {
            t.onErrored &&
              t.onErrored({
                type: "self-accept-error-handler-errored",
                moduleId: u,
                error: n,
                originalError: e,
              }),
              t.ignoreErrored || H || (H = n),
              H || (H = e)
          }
        else
          t.onErrored &&
            t.onErrored({
              type: "self-accept-errored",
              moduleId: u,
              error: e,
            }),
            t.ignoreErrored || H || (H = e)
      }
    }
    return H
      ? (f("fail"), Promise.reject(H))
      : (f("idle"),
        new Promise(function(e) {
          e(y)
        }))
  }
  var C = {}
  function E(t) {
    if (C[t]) return C[t].exports
    var r = (C[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: (function(e) {
        var t = {
          _acceptedDependencies: {},
          _declinedDependencies: {},
          _selfAccepted: !1,
          _selfDeclined: !1,
          _disposeHandlers: [],
          _main: n !== e,
          active: !0,
          accept: function(e, n) {
            if (void 0 === e) t._selfAccepted = !0
            else if ("function" == typeof e) t._selfAccepted = e
            else if ("object" == typeof e)
              for (var r = 0; r < e.length; r++)
                t._acceptedDependencies[e[r]] = n || function() {}
            else t._acceptedDependencies[e] = n || function() {}
          },
          decline: function(e) {
            if (void 0 === e) t._selfDeclined = !0
            else if ("object" == typeof e)
              for (var n = 0; n < e.length; n++)
                t._declinedDependencies[e[n]] = !0
            else t._declinedDependencies[e] = !0
          },
          dispose: function(e) {
            t._disposeHandlers.push(e)
          },
          addDisposeHandler: function(e) {
            t._disposeHandlers.push(e)
          },
          removeDisposeHandler: function(e) {
            var n = t._disposeHandlers.indexOf(e)
            n >= 0 && t._disposeHandlers.splice(n, 1)
          },
          check: j,
          apply: P,
          status: function(e) {
            if (!e) return d
            l.push(e)
          },
          addStatusHandler: function(e) {
            l.push(e)
          },
          removeStatusHandler: function(e) {
            var t = l.indexOf(e)
            t >= 0 && l.splice(t, 1)
          },
          data: s[e],
        }
        return (n = void 0), t
      })(t),
      parents: ((c = a), (a = []), c),
      children: [],
    })
    return (
      e[t].call(r.exports, r, r.exports, u(t)), (r.l = !0), r.exports
    )
  }
  ;(E.m = e),
    (E.c = C),
    (E.d = function(e, t, n) {
      E.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        })
    }),
    (E.r = function(e) {
      Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (E.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return E.d(t, "a", t), t
    }),
    (E.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (E.p = ""),
    (E.h = function() {
      return o
    }),
    u("./src/index.js")((E.s = "./src/index.js"))
})({
  "../../node_modules/webpack/buildin/global.js": function(e, t, n) {
    e.exports = n("dll-reference react")(
      "../../node_modules/webpack/buildin/global.js",
    )
  },
  "../../node_modules/webpack/buildin/module.js": function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      )
    }
  },
  "../core/lib/index.js": function(e, t, n) {
    "use strict"
    ;(function(e, n) {
      var r, o, i, s
      function a(e) {
        return (a =
          "function" == typeof Symbol &&
          "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      ;(s = function() {
        return (function(e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var o = (t[r] = { i: r, l: !1, exports: {} })
            return (
              e[r].call(o.exports, o, o.exports, n),
              (o.l = !0),
              o.exports
            )
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                })
            }),
            (n.r = function(e) {
              Object.defineProperty(e, "__esModule", { value: !0 })
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default
                    }
                  : function() {
                      return e
                    }
              return n.d(t, "a", t), t
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (n.p = ""),
            (n.w = {}),
            n((n.s = "./src/index.js"))
          )
        })({
          "./src/create-game.js": function(e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createGame = void 0)
            var r = n("./src/store/index.js")
            t.createGame = function(e) {
              return (0, r.createStore)()
            }
          },
          "./src/index.js": function(e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 })
            var r = n("./src/create-game.js")
            Object.keys(r).forEach(function(e) {
              "default" !== e &&
                "__esModule" !== e &&
                Object.defineProperty(t, e, {
                  enumerable: !0,
                  get: function() {
                    return r[e]
                  },
                })
            })
          },
          "./src/store/index.js": function(e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createStore = void 0),
              (t.createStore = function() {})
          },
        })
      }),
        "object" == a(t) && "object" == a(n)
          ? (n.exports = s())
          : ((o = []),
            void 0 ===
              (i =
                "function" == typeof (r = s) ? r.apply(t, o) : r) ||
              (n.exports = i))
    }.call(
      this,
      n("../../node_modules/webpack/buildin/global.js"),
      n("../../node_modules/webpack/buildin/module.js")(e),
    ))
  },
  "./node_modules/@web-udp/client/dist/index.browser.js": function(
    e,
    t,
    n,
  ) {
    window,
      (e.exports = (function(e) {
        var t = {}
        function n(r) {
          if (t[r]) return t[r].exports
          var o = (t[r] = { i: r, l: !1, exports: {} })
          return (
            e[r].call(o.exports, o, o.exports, n),
            (o.l = !0),
            o.exports
          )
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function(e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r,
              })
          }),
          (n.r = function(e) {
            Object.defineProperty(e, "__esModule", { value: !0 })
          }),
          (n.n = function(e) {
            var t =
              e && e.__esModule
                ? function() {
                    return e.default
                  }
                : function() {
                    return e
                  }
            return n.d(t, "a", t), t
          }),
          (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }),
          (n.p = ""),
          n((n.s = "./src/index.js"))
        )
      })({
        "../../node_modules/node-libs-browser/mock/empty.js": function(
          e,
          t,
        ) {},
        "../../node_modules/process/browser.js": function(e, t) {
          var n,
            r,
            o = (e.exports = {})
          function i() {
            throw new Error("setTimeout has not been defined")
          }
          function s() {
            throw new Error("clearTimeout has not been defined")
          }
          function a(e) {
            if (n === setTimeout) return setTimeout(e, 0)
            if ((n === i || !n) && setTimeout)
              return (n = setTimeout), setTimeout(e, 0)
            try {
              return n(e, 0)
            } catch (t) {
              try {
                return n.call(null, e, 0)
              } catch (t) {
                return n.call(this, e, 0)
              }
            }
          }
          !(function() {
            try {
              n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
              n = i
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
              r = s
            }
          })()
          var c,
            u = [],
            l = !1,
            d = -1
          function f() {
            l &&
              c &&
              ((l = !1),
              c.length ? (u = c.concat(u)) : (d = -1),
              u.length && p())
          }
          function p() {
            if (!l) {
              var e = a(f)
              l = !0
              for (var t = u.length; t; ) {
                for (c = u, u = []; ++d < t; ) c && c[d].run()
                ;(d = -1), (t = u.length)
              }
              ;(c = null),
                (l = !1),
                (function(e) {
                  if (r === clearTimeout) return clearTimeout(e)
                  if ((r === s || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(e)
                  try {
                    r(e)
                  } catch (t) {
                    try {
                      return r.call(null, e)
                    } catch (t) {
                      return r.call(this, e)
                    }
                  }
                })(e)
            }
          }
          function h(e, t) {
            ;(this.fun = e), (this.array = t)
          }
          function b() {}
          ;(o.nextTick = function(e) {
            var t = new Array(arguments.length - 1)
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n]
            u.push(new h(e, t)), 1 !== u.length || l || a(p)
          }),
            (h.prototype.run = function() {
              this.fun.apply(null, this.array)
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = b),
            (o.addListener = b),
            (o.once = b),
            (o.off = b),
            (o.removeListener = b),
            (o.removeAllListeners = b),
            (o.emit = b),
            (o.prependListener = b),
            (o.prependOnceListener = b),
            (o.listeners = function(e) {
              return []
            }),
            (o.binding = function(e) {
              throw new Error("process.binding is not supported")
            }),
            (o.cwd = function() {
              return "/"
            }),
            (o.chdir = function(e) {
              throw new Error("process.chdir is not supported")
            }),
            (o.umask = function() {
              return 0
            })
        },
        "../../node_modules/webpack/buildin/global.js": function(
          e,
          t,
        ) {
          var n
          n = (function() {
            return this
          })()
          try {
            n = n || Function("return this")() || (0, eval)("this")
          } catch (e) {
            "object" == typeof window && (n = window)
          }
          e.exports = n
        },
        "../../node_modules/webpack/buildin/module.js": function(
          e,
          t,
        ) {
          e.exports = function(e) {
            return (
              e.webpackPolyfill ||
                ((e.deprecate = function() {}),
                (e.paths = []),
                e.children || (e.children = []),
                Object.defineProperty(e, "loaded", {
                  enumerable: !0,
                  get: function() {
                    return e.l
                  },
                }),
                Object.defineProperty(e, "id", {
                  enumerable: !0,
                  get: function() {
                    return e.i
                  },
                }),
                (e.webpackPolyfill = 1)),
              e
            )
          }
        },
        "../protocol/dist/index.js": function(e, t, n) {
          "use strict"
          ;(function(e, r, o) {
            var i, s, a, c
            function u(e) {
              return (u =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function(e) {
                      return typeof e
                    }
                  : function(e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e
                    })(e)
            }
            ;(c = function() {
              return (function(e) {
                var t = {}
                function n(r) {
                  if (t[r]) return t[r].exports
                  var o = (t[r] = { i: r, l: !1, exports: {} })
                  return (
                    e[r].call(o.exports, o, o.exports, n),
                    (o.l = !0),
                    o.exports
                  )
                }
                return (
                  (n.m = e),
                  (n.c = t),
                  (n.d = function(e, t, r) {
                    n.o(e, t) ||
                      Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: r,
                      })
                  }),
                  (n.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                      value: !0,
                    })
                  }),
                  (n.n = function(e) {
                    var t =
                      e && e.__esModule
                        ? function() {
                            return e.default
                          }
                        : function() {
                            return e
                          }
                    return n.d(t, "a", t), t
                  }),
                  (n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                  }),
                  (n.p = ""),
                  (n.w = {}),
                  n((n.s = "./src/index.js"))
                )
              })({
                "./node_modules/shortid/index.js": function(e, t, n) {
                  e.exports = n("./node_modules/shortid/lib/index.js")
                },
                "./node_modules/shortid/lib/alphabet.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r,
                    o,
                    i,
                    s = n(
                      "./node_modules/shortid/lib/random/random-from-seed.js",
                    ),
                    a =
                      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
                  function c() {
                    i = !1
                  }
                  function u(e) {
                    if (e) {
                      if (e !== r) {
                        if (e.length !== a.length)
                          throw new Error(
                            "Custom alphabet for shortid must be " +
                              a.length +
                              " unique characters. You submitted " +
                              e.length +
                              " characters: " +
                              e,
                          )
                        var t = e.split("").filter(function(e, t, n) {
                          return t !== n.lastIndexOf(e)
                        })
                        if (t.length)
                          throw new Error(
                            "Custom alphabet for shortid must be " +
                              a.length +
                              " unique characters. These characters were not unique: " +
                              t.join(", "),
                          )
                        ;(r = e), c()
                      }
                    } else r !== a && ((r = a), c())
                  }
                  function l() {
                    return (
                      i ||
                      (i = (function() {
                        r || u(a)
                        for (
                          var e,
                            t = r.split(""),
                            n = [],
                            o = s.nextValue();
                          t.length > 0;

                        )
                          (o = s.nextValue()),
                            (e = Math.floor(o * t.length)),
                            n.push(t.splice(e, 1)[0])
                        return n.join("")
                      })())
                    )
                  }
                  e.exports = {
                    characters: function(e) {
                      return u(e), r
                    },
                    seed: function(e) {
                      s.seed(e), o !== e && (c(), (o = e))
                    },
                    lookup: function(e) {
                      return l()[e]
                    },
                    shuffled: l,
                  }
                },
                "./node_modules/shortid/lib/build.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r,
                    o,
                    i = n("./node_modules/shortid/lib/encode.js"),
                    s = n("./node_modules/shortid/lib/alphabet.js")
                  e.exports = function(e) {
                    var t = "",
                      n = Math.floor(
                        0.001 * (Date.now() - 1459707606518),
                      )
                    return (
                      n === o ? r++ : ((r = 0), (o = n)),
                      (t += i(s.lookup, 6)),
                      (t += i(s.lookup, e)),
                      r > 0 && (t += i(s.lookup, r)),
                      t + i(s.lookup, n)
                    )
                  }
                },
                "./node_modules/shortid/lib/decode.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r = n("./node_modules/shortid/lib/alphabet.js")
                  e.exports = function(e) {
                    var t = r.shuffled()
                    return {
                      version: 15 & t.indexOf(e.substr(0, 1)),
                      worker: 15 & t.indexOf(e.substr(1, 1)),
                    }
                  }
                },
                "./node_modules/shortid/lib/encode.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r = n(
                    "./node_modules/shortid/lib/random/random-byte.js",
                  )
                  e.exports = function(e, t) {
                    for (var n, o = 0, i = ""; !n; )
                      (i += e(((t >> (4 * o)) & 15) | r())),
                        (n = t < Math.pow(16, o + 1)),
                        o++
                    return i
                  }
                },
                "./node_modules/shortid/lib/index.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r = n("./node_modules/shortid/lib/alphabet.js"),
                    o = (n("./node_modules/shortid/lib/encode.js"),
                    n("./node_modules/shortid/lib/decode.js")),
                    i = n("./node_modules/shortid/lib/build.js"),
                    s = n("./node_modules/shortid/lib/is-valid.js"),
                    a =
                      n(
                        "./node_modules/shortid/lib/util/cluster-worker-id.js",
                      ) || 0
                  function c() {
                    return i(a)
                  }
                  ;(e.exports = c),
                    (e.exports.generate = c),
                    (e.exports.seed = function(t) {
                      return r.seed(t), e.exports
                    }),
                    (e.exports.worker = function(t) {
                      return (a = t), e.exports
                    }),
                    (e.exports.characters = function(e) {
                      return (
                        void 0 !== e && r.characters(e), r.shuffled()
                      )
                    }),
                    (e.exports.decode = o),
                    (e.exports.isValid = s)
                },
                "./node_modules/shortid/lib/is-valid.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r = n("./node_modules/shortid/lib/alphabet.js")
                  e.exports = function(e) {
                    if (!e || "string" != typeof e || e.length < 6)
                      return !1
                    for (
                      var t = r.characters(), n = e.length, o = 0;
                      o < n;
                      o++
                    )
                      if (-1 === t.indexOf(e[o])) return !1
                    return !0
                  }
                },
                "./node_modules/shortid/lib/random/random-byte.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r = n("crypto").randomBytes
                  e.exports = function() {
                    return 48 & r(1)[0]
                  }
                },
                "./node_modules/shortid/lib/random/random-from-seed.js": function(
                  e,
                  t,
                  n,
                ) {
                  var r = 1
                  e.exports = {
                    nextValue: function() {
                      return (
                        (r = (9301 * r + 49297) % 233280) / 233280
                      )
                    },
                    seed: function(e) {
                      r = e
                    },
                  }
                },
                "./node_modules/shortid/lib/util/cluster-worker-id.js": function(
                  e,
                  t,
                  n,
                ) {
                  e.exports = parseInt(r.env.NODE_UNIQUE_ID || 0, 10)
                },
                "./src/broker/index.js": function(e, t, n) {
                  Object.defineProperty(t, "__esModule", {
                    value: !0,
                  }),
                    (t.default = void 0)
                  var r,
                    o =
                      (r = n("./node_modules/shortid/index.js")) &&
                      r.__esModule
                        ? r
                        : { default: r },
                    i = (function() {
                      function e() {
                        var t = this
                        !(function(e, t) {
                          if (!(e instanceof t))
                            throw new TypeError(
                              "Cannot call a class as a function",
                            )
                        })(this, e),
                          Object.defineProperty(this, "_transports", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: {},
                          }),
                          Object.defineProperty(this, "_onMessage", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function(e, n) {
                              switch (e.type) {
                                case "OFFER_CLIENT":
                                  var r = e.payload,
                                    o = e.pid
                                  if (!t._transports[o])
                                    throw new Error(
                                      "Client ".concat(
                                        o,
                                        " not found.",
                                      ),
                                    )
                                  t._transports[o].send({
                                    type: "OFFER",
                                    src: n,
                                    payload: { sdp: r.sdp },
                                  })
                                  break
                                case "ANSWER_CLIENT":
                                  var i = e.payload,
                                    s = e.pid
                                  if (!t._transports[s])
                                    throw new Error(
                                      "Client ".concat(
                                        s,
                                        " not found.",
                                      ),
                                    )
                                  t._transports[s].send({
                                    type: "ANSWER",
                                    src: n,
                                    payload: { sdp: i.sdp },
                                  })
                                  break
                                case "ICE_CLIENT":
                                  var a = e.payload,
                                    c = e.pid
                                  if (!t._transports[c])
                                    throw new Error(
                                      "Client ".concat(
                                        c,
                                        " not found",
                                      ),
                                    )
                                  t._transports[c].send({
                                    type: "ICE",
                                    src: n,
                                    payload: { ice: a.ice },
                                  })
                                  break
                                case "TRANSPORT_CLOSE":
                                  delete t._transports[n]
                                  break
                                default:
                                  throw new Error(
                                    "Invalid message type ".concat(
                                      e.type,
                                    ),
                                  )
                              }
                            },
                          })
                      }
                      var t
                      return (
                        (t = [
                          {
                            key: "register",
                            value: function(e) {
                              var t = this,
                                n =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : (0, o.default)()
                              return (
                                (this._transports[n] = e),
                                e.subscribe(function(e) {
                                  try {
                                    t._onMessage(e, n)
                                  } catch (e) {
                                    console.error(e)
                                  }
                                }),
                                e.send({ type: "ROUTE", route: n }),
                                n
                              )
                            },
                          },
                        ]) &&
                          (function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                              var r = t[n]
                              ;(r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                          })(e.prototype, t),
                        e
                      )
                    })()
                  t.default = i
                },
                "./src/const.js": function(e, t, n) {
                  Object.defineProperty(t, "__esModule", {
                    value: !0,
                  }),
                    (t.CLIENT_MASTER = void 0),
                    (t.CLIENT_MASTER = "__MASTER__")
                },
                "./src/index.js": function(e, t, n) {
                  Object.defineProperty(t, "__esModule", {
                    value: !0,
                  })
                  var r = {
                    LocalTransport: !0,
                    WebSocketTransport: !0,
                    Broker: !0,
                  }
                  Object.defineProperty(t, "LocalTransport", {
                    enumerable: !0,
                    get: function() {
                      return o.default
                    },
                  }),
                    Object.defineProperty(t, "WebSocketTransport", {
                      enumerable: !0,
                      get: function() {
                        return i.default
                      },
                    }),
                    Object.defineProperty(t, "Broker", {
                      enumerable: !0,
                      get: function() {
                        return s.default
                      },
                    })
                  var o = u(n("./src/transport/local.js")),
                    i = u(n("./src/transport/socket.js")),
                    s = u(n("./src/broker/index.js")),
                    a = n("./src/signal.js")
                  Object.keys(a).forEach(function(e) {
                    "default" !== e &&
                      "__esModule" !== e &&
                      (Object.prototype.hasOwnProperty.call(r, e) ||
                        Object.defineProperty(t, e, {
                          enumerable: !0,
                          get: function() {
                            return a[e]
                          },
                        }))
                  })
                  var c = n("./src/const.js")
                  function u(e) {
                    return e && e.__esModule ? e : { default: e }
                  }
                  Object.keys(c).forEach(function(e) {
                    "default" !== e &&
                      "__esModule" !== e &&
                      (Object.prototype.hasOwnProperty.call(r, e) ||
                        Object.defineProperty(t, e, {
                          enumerable: !0,
                          get: function() {
                            return c[e]
                          },
                        }))
                  })
                },
                "./src/signal.js": function(e, t, n) {
                  Object.defineProperty(t, "__esModule", {
                    value: !0,
                  }),
                    (t.Signal = void 0)
                  var r = (function() {
                    function e() {
                      var t = this
                      !(function(e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function",
                          )
                      })(this, e),
                        Object.defineProperty(this, "_subscribers", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: [],
                        }),
                        Object.defineProperty(this, "subscribe", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            t._subscribers.indexOf(e) > -1 ||
                              t._subscribers.push(e)
                          },
                        }),
                        Object.defineProperty(this, "unsubscribe", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            var n = t._subscribers.indexOf(e)
                            n < 0 || t._subscribers.splice(n, 1)
                          },
                        })
                    }
                    var t
                    return (
                      (t = [
                        {
                          key: "dispatch",
                          value: function(e) {
                            var t = !0,
                              n = !1,
                              r = void 0
                            try {
                              for (
                                var o,
                                  i = this._subscribers[
                                    Symbol.iterator
                                  ]();
                                !(t = (o = i.next()).done);
                                t = !0
                              )
                                (0, o.value)(e)
                            } catch (e) {
                              ;(n = !0), (r = e)
                            } finally {
                              try {
                                t || null == i.return || i.return()
                              } finally {
                                if (n) throw r
                              }
                            }
                          },
                        },
                      ]) &&
                        (function(e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = t[n]
                            ;(r.enumerable = r.enumerable || !1),
                              (r.configurable = !0),
                              "value" in r && (r.writable = !0),
                              Object.defineProperty(e, r.key, r)
                          }
                        })(e.prototype, t),
                      e
                    )
                  })()
                  t.Signal = r
                },
                "./src/transport/local.js": function(e, t, n) {
                  function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n]
                      ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                  }
                  Object.defineProperty(t, "__esModule", {
                    value: !0,
                  }),
                    (t.default = void 0)
                  var o = (function() {
                    function e() {
                      var t = this
                      !(function(e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function",
                          )
                      })(this, e),
                        Object.defineProperty(this, "_closed", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: !1,
                        }),
                        Object.defineProperty(this, "_subscribers", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: [],
                        }),
                        Object.defineProperty(this, "subscribe", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            t._closed ||
                              t._subscribers.indexOf(e) > -1 ||
                              t._subscribers.push(e)
                          },
                        }),
                        Object.defineProperty(this, "unsubscribe", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            var n = t._subscribers.indexOf(e)
                            ;-1 !== n && t._subscribers.splice(n, 1)
                          },
                        }),
                        Object.defineProperty(this, "send", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            if (!t._closed)
                              for (
                                var n = 0;
                                n < t._subscribers.length;
                                n++
                              )
                                t._subscribers[n](e)
                          },
                        })
                    }
                    var t, n, o
                    return (
                      (t = e),
                      (o = [
                        {
                          key: "create",
                          value: function() {
                            var t = new e(),
                              n = new e(),
                              r = t.send
                            return (
                              (t.send = n.send.bind(n)),
                              (n.send = r.bind(t)),
                              { left: t, right: n }
                            )
                          },
                        },
                      ]),
                      (n = [
                        {
                          key: "close",
                          value: function() {
                            ;(this._closed = !0),
                              (this._subscribers = [])
                          },
                        },
                      ]) && r(t.prototype, n),
                      o && r(t, o),
                      e
                    )
                  })()
                  t.default = o
                },
                "./src/transport/socket.js": function(e, t, n) {
                  Object.defineProperty(t, "__esModule", {
                    value: !0,
                  }),
                    (t.default = void 0)
                  var r = JSON.stringify,
                    o = JSON.parse,
                    i = (function() {
                      function e(t) {
                        var n = this
                        !(function(e, t) {
                          if (!(e instanceof t))
                            throw new TypeError(
                              "Cannot call a class as a function",
                            )
                        })(this, e),
                          Object.defineProperty(this, "_buffer", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: [],
                          }),
                          Object.defineProperty(this, "_open", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: !1,
                          }),
                          Object.defineProperty(
                            this,
                            "_subscribers",
                            {
                              configurable: !0,
                              enumerable: !0,
                              writable: !0,
                              value: [],
                            },
                          ),
                          Object.defineProperty(this, "_onOpen", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function() {
                              n._open = !0
                            },
                          }),
                          Object.defineProperty(this, "_onMessage", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function(e) {
                              if (e.data)
                                for (
                                  var t = o(e.data), r = 0;
                                  r < n._subscribers.length;
                                  r++
                                )
                                  n._subscribers[r](t)
                            },
                          }),
                          Object.defineProperty(this, "_onClose", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function() {
                              for (
                                var e = { type: "TRANSPORT_CLOSE" },
                                  t = 0;
                                t < n._subscribers.length;
                                t++
                              )
                                n._subscribers[t](e)
                            },
                          }),
                          (this._socket = t),
                          1 === t.readyState
                            ? this._onOpen()
                            : this._socket.addEventListener(
                                "open",
                                this._onOpen,
                              ),
                          this._socket.addEventListener(
                            "message",
                            this._onMessage,
                          ),
                          this._socket.addEventListener(
                            "close",
                            this._onClose,
                          ),
                          this._socket.addEventListener(
                            "error",
                            function(e) {
                              if (
                                e &&
                                "string" == typeof e.code &&
                                "ECONNRESET" !== e.code
                              )
                                throw e
                            },
                          )
                      }
                      var t
                      return (
                        (t = [
                          {
                            key: "_flush",
                            value: function() {
                              for (
                                var e;
                                (e = this._buffer.shift());

                              )
                                this._socket.send(r(e))
                            },
                          },
                          {
                            key: "subscribe",
                            value: function(e) {
                              this._subscribers.indexOf(e) > -1 ||
                                this._subscribers.push(e)
                            },
                          },
                          {
                            key: "unsubscribe",
                            value: function(e) {
                              var t = this._subscribers.indexOf(e)
                              ;-1 !== t &&
                                this._subscribers.splice(t, 1)
                            },
                          },
                          {
                            key: "send",
                            value: function(e) {
                              this._buffer.push(e),
                                this._open && this._flush()
                            },
                          },
                          {
                            key: "close",
                            value: function() {
                              this._socket.close()
                            },
                          },
                        ]) &&
                          (function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                              var r = t[n]
                              ;(r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                          })(e.prototype, t),
                        e
                      )
                    })()
                  t.default = i
                },
                crypto: function(e, t) {
                  e.exports = n(
                    "../../node_modules/node-libs-browser/mock/empty.js",
                  )
                },
              })
            }),
              "object" == u(t) && "object" == u(o)
                ? (o.exports = c())
                : ((s = []),
                  void 0 ===
                    (a =
                      "function" == typeof (i = c)
                        ? i.apply(t, s)
                        : i) || (o.exports = a))
          }.call(
            this,
            n("../../node_modules/webpack/buildin/global.js"),
            n("../../node_modules/process/browser.js"),
            n("../../node_modules/webpack/buildin/module.js")(e),
          ))
        },
        "./node_modules/@babel/runtime/regenerator/index.js": function(
          e,
          t,
          n,
        ) {
          e.exports = n(
            "./node_modules/regenerator-runtime/runtime-module.js",
          )
        },
        "./node_modules/regenerator-runtime/runtime-module.js": function(
          e,
          t,
          n,
        ) {
          var r =
              (function() {
                return this
              })() || Function("return this")(),
            o =
              r.regeneratorRuntime &&
              Object.getOwnPropertyNames(r).indexOf(
                "regeneratorRuntime",
              ) >= 0,
            i = o && r.regeneratorRuntime
          if (
            ((r.regeneratorRuntime = void 0),
            (e.exports = n(
              "./node_modules/regenerator-runtime/runtime.js",
            )),
            o)
          )
            r.regeneratorRuntime = i
          else
            try {
              delete r.regeneratorRuntime
            } catch (e) {
              r.regeneratorRuntime = void 0
            }
        },
        "./node_modules/regenerator-runtime/runtime.js": function(
          e,
          t,
        ) {
          !(function(t) {
            "use strict"
            var n,
              r = Object.prototype,
              o = r.hasOwnProperty,
              i = "function" == typeof Symbol ? Symbol : {},
              s = i.iterator || "@@iterator",
              a = i.asyncIterator || "@@asyncIterator",
              c = i.toStringTag || "@@toStringTag",
              u = "object" == typeof e,
              l = t.regeneratorRuntime
            if (l) u && (e.exports = l)
            else {
              ;(l = t.regeneratorRuntime = u
                ? e.exports
                : {}).wrap = w
              var d = "suspendedStart",
                f = "suspendedYield",
                p = "executing",
                h = "completed",
                b = {},
                v = {}
              v[s] = function() {
                return this
              }
              var y = Object.getPrototypeOf,
                m = y && y(y(L([])))
              m && m !== r && o.call(m, s) && (v = m)
              var _ = (O.prototype = j.prototype = Object.create(v))
              ;(x.prototype = _.constructor = O),
                (O.constructor = x),
                (O[c] = x.displayName = "GeneratorFunction"),
                (l.isGeneratorFunction = function(e) {
                  var t = "function" == typeof e && e.constructor
                  return (
                    !!t &&
                    (t === x ||
                      "GeneratorFunction" ===
                        (t.displayName || t.name))
                  )
                }),
                (l.mark = function(e) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, O)
                      : ((e.__proto__ = O),
                        c in e || (e[c] = "GeneratorFunction")),
                    (e.prototype = Object.create(_)),
                    e
                  )
                }),
                (l.awrap = function(e) {
                  return { __await: e }
                }),
                P(C.prototype),
                (C.prototype[a] = function() {
                  return this
                }),
                (l.AsyncIterator = C),
                (l.async = function(e, t, n, r) {
                  var o = new C(w(e, t, n, r))
                  return l.isGeneratorFunction(t)
                    ? o
                    : o.next().then(function(e) {
                        return e.done ? e.value : o.next()
                      })
                }),
                P(_),
                (_[c] = "Generator"),
                (_[s] = function() {
                  return this
                }),
                (_.toString = function() {
                  return "[object Generator]"
                }),
                (l.keys = function(e) {
                  var t = []
                  for (var n in e) t.push(n)
                  return (
                    t.reverse(),
                    function n() {
                      for (; t.length; ) {
                        var r = t.pop()
                        if (r in e)
                          return (n.value = r), (n.done = !1), n
                      }
                      return (n.done = !0), n
                    }
                  )
                }),
                (l.values = L),
                (S.prototype = {
                  constructor: S,
                  reset: function(e) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = n),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = n),
                      this.tryEntries.forEach(T),
                      !e)
                    )
                      for (var t in this)
                        "t" === t.charAt(0) &&
                          o.call(this, t) &&
                          !isNaN(+t.slice(1)) &&
                          (this[t] = n)
                  },
                  stop: function() {
                    this.done = !0
                    var e = this.tryEntries[0].completion
                    if ("throw" === e.type) throw e.arg
                    return this.rval
                  },
                  dispatchException: function(e) {
                    if (this.done) throw e
                    var t = this
                    function r(r, o) {
                      return (
                        (a.type = "throw"),
                        (a.arg = e),
                        (t.next = r),
                        o && ((t.method = "next"), (t.arg = n)),
                        !!o
                      )
                    }
                    for (
                      var i = this.tryEntries.length - 1;
                      i >= 0;
                      --i
                    ) {
                      var s = this.tryEntries[i],
                        a = s.completion
                      if ("root" === s.tryLoc) return r("end")
                      if (s.tryLoc <= this.prev) {
                        var c = o.call(s, "catchLoc"),
                          u = o.call(s, "finallyLoc")
                        if (c && u) {
                          if (this.prev < s.catchLoc)
                            return r(s.catchLoc, !0)
                          if (this.prev < s.finallyLoc)
                            return r(s.finallyLoc)
                        } else if (c) {
                          if (this.prev < s.catchLoc)
                            return r(s.catchLoc, !0)
                        } else {
                          if (!u)
                            throw new Error(
                              "try statement without catch or finally",
                            )
                          if (this.prev < s.finallyLoc)
                            return r(s.finallyLoc)
                        }
                      }
                    }
                  },
                  abrupt: function(e, t) {
                    for (
                      var n = this.tryEntries.length - 1;
                      n >= 0;
                      --n
                    ) {
                      var r = this.tryEntries[n]
                      if (
                        r.tryLoc <= this.prev &&
                        o.call(r, "finallyLoc") &&
                        this.prev < r.finallyLoc
                      ) {
                        var i = r
                        break
                      }
                    }
                    i &&
                      ("break" === e || "continue" === e) &&
                      i.tryLoc <= t &&
                      t <= i.finallyLoc &&
                      (i = null)
                    var s = i ? i.completion : {}
                    return (
                      (s.type = e),
                      (s.arg = t),
                      i
                        ? ((this.method = "next"),
                          (this.next = i.finallyLoc),
                          b)
                        : this.complete(s)
                    )
                  },
                  complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg
                    return (
                      "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type &&
                            t &&
                            (this.next = t),
                      b
                    )
                  },
                  finish: function(e) {
                    for (
                      var t = this.tryEntries.length - 1;
                      t >= 0;
                      --t
                    ) {
                      var n = this.tryEntries[t]
                      if (n.finallyLoc === e)
                        return (
                          this.complete(n.completion, n.afterLoc),
                          T(n),
                          b
                        )
                    }
                  },
                  catch: function(e) {
                    for (
                      var t = this.tryEntries.length - 1;
                      t >= 0;
                      --t
                    ) {
                      var n = this.tryEntries[t]
                      if (n.tryLoc === e) {
                        var r = n.completion
                        if ("throw" === r.type) {
                          var o = r.arg
                          T(n)
                        }
                        return o
                      }
                    }
                    throw new Error("illegal catch attempt")
                  },
                  delegateYield: function(e, t, r) {
                    return (
                      (this.delegate = {
                        iterator: L(e),
                        resultName: t,
                        nextLoc: r,
                      }),
                      "next" === this.method && (this.arg = n),
                      b
                    )
                  },
                })
            }
            function w(e, t, n, r) {
              var o = t && t.prototype instanceof j ? t : j,
                i = Object.create(o.prototype),
                s = new S(r || [])
              return (
                (i._invoke = (function(e, t, n) {
                  var r = d
                  return function(o, i) {
                    if (r === p)
                      throw new Error("Generator is already running")
                    if (r === h) {
                      if ("throw" === o) throw i
                      return M()
                    }
                    for (n.method = o, n.arg = i; ; ) {
                      var s = n.delegate
                      if (s) {
                        var a = E(s, n)
                        if (a) {
                          if (a === b) continue
                          return a
                        }
                      }
                      if ("next" === n.method)
                        n.sent = n._sent = n.arg
                      else if ("throw" === n.method) {
                        if (r === d) throw ((r = h), n.arg)
                        n.dispatchException(n.arg)
                      } else
                        "return" === n.method &&
                          n.abrupt("return", n.arg)
                      r = p
                      var c = g(e, t, n)
                      if ("normal" === c.type) {
                        if (((r = n.done ? h : f), c.arg === b))
                          continue
                        return { value: c.arg, done: n.done }
                      }
                      "throw" === c.type &&
                        ((r = h),
                        (n.method = "throw"),
                        (n.arg = c.arg))
                    }
                  }
                })(e, n, s)),
                i
              )
            }
            function g(e, t, n) {
              try {
                return { type: "normal", arg: e.call(t, n) }
              } catch (e) {
                return { type: "throw", arg: e }
              }
            }
            function j() {}
            function x() {}
            function O() {}
            function P(e) {
              ;["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                  return this._invoke(t, e)
                }
              })
            }
            function C(e) {
              var t
              this._invoke = function(n, r) {
                function i() {
                  return new Promise(function(t, i) {
                    !(function t(n, r, i, s) {
                      var a = g(e[n], e, r)
                      if ("throw" !== a.type) {
                        var c = a.arg,
                          u = c.value
                        return u &&
                          "object" == typeof u &&
                          o.call(u, "__await")
                          ? Promise.resolve(u.__await).then(
                              function(e) {
                                t("next", e, i, s)
                              },
                              function(e) {
                                t("throw", e, i, s)
                              },
                            )
                          : Promise.resolve(u).then(function(e) {
                              ;(c.value = e), i(c)
                            }, s)
                      }
                      s(a.arg)
                    })(n, r, t, i)
                  })
                }
                return (t = t ? t.then(i, i) : i())
              }
            }
            function E(e, t) {
              var r = e.iterator[t.method]
              if (r === n) {
                if (((t.delegate = null), "throw" === t.method)) {
                  if (
                    e.iterator.return &&
                    ((t.method = "return"),
                    (t.arg = n),
                    E(e, t),
                    "throw" === t.method)
                  )
                    return b
                  ;(t.method = "throw"),
                    (t.arg = new TypeError(
                      "The iterator does not provide a 'throw' method",
                    ))
                }
                return b
              }
              var o = g(r, e.iterator, t.arg)
              if ("throw" === o.type)
                return (
                  (t.method = "throw"),
                  (t.arg = o.arg),
                  (t.delegate = null),
                  b
                )
              var i = o.arg
              return i
                ? i.done
                  ? ((t[e.resultName] = i.value),
                    (t.next = e.nextLoc),
                    "return" !== t.method &&
                      ((t.method = "next"), (t.arg = n)),
                    (t.delegate = null),
                    b)
                  : i
                : ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "iterator result is not an object",
                  )),
                  (t.delegate = null),
                  b)
            }
            function k(e) {
              var t = { tryLoc: e[0] }
              1 in e && (t.catchLoc = e[1]),
                2 in e &&
                  ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t)
            }
            function T(e) {
              var t = e.completion || {}
              ;(t.type = "normal"), delete t.arg, (e.completion = t)
            }
            function S(e) {
              ;(this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(k, this),
                this.reset(!0)
            }
            function L(e) {
              if (e) {
                var t = e[s]
                if (t) return t.call(e)
                if ("function" == typeof e.next) return e
                if (!isNaN(e.length)) {
                  var r = -1,
                    i = function t() {
                      for (; ++r < e.length; )
                        if (o.call(e, r))
                          return (t.value = e[r]), (t.done = !1), t
                      return (t.value = n), (t.done = !0), t
                    }
                  return (i.next = i)
                }
              }
              return { next: M }
            }
            function M() {
              return { value: n, done: !0 }
            }
          })(
            (function() {
              return this
            })() || Function("return this")(),
          )
        },
        "./node_modules/shortid/index.js": function(e, t, n) {
          "use strict"
          e.exports = n("./node_modules/shortid/lib/index.js")
        },
        "./node_modules/shortid/lib/alphabet.js": function(e, t, n) {
          "use strict"
          var r,
            o,
            i,
            s = n(
              "./node_modules/shortid/lib/random/random-from-seed.js",
            ),
            a =
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
          function c() {
            i = !1
          }
          function u(e) {
            if (e) {
              if (e !== r) {
                if (e.length !== a.length)
                  throw new Error(
                    "Custom alphabet for shortid must be " +
                      a.length +
                      " unique characters. You submitted " +
                      e.length +
                      " characters: " +
                      e,
                  )
                var t = e.split("").filter(function(e, t, n) {
                  return t !== n.lastIndexOf(e)
                })
                if (t.length)
                  throw new Error(
                    "Custom alphabet for shortid must be " +
                      a.length +
                      " unique characters. These characters were not unique: " +
                      t.join(", "),
                  )
                ;(r = e), c()
              }
            } else r !== a && ((r = a), c())
          }
          function l() {
            return (
              i ||
              (i = (function() {
                r || u(a)
                for (
                  var e, t = r.split(""), n = [], o = s.nextValue();
                  t.length > 0;

                )
                  (o = s.nextValue()),
                    (e = Math.floor(o * t.length)),
                    n.push(t.splice(e, 1)[0])
                return n.join("")
              })())
            )
          }
          e.exports = {
            characters: function(e) {
              return u(e), r
            },
            seed: function(e) {
              s.seed(e), o !== e && (c(), (o = e))
            },
            lookup: function(e) {
              return l()[e]
            },
            shuffled: l,
          }
        },
        "./node_modules/shortid/lib/build.js": function(e, t, n) {
          "use strict"
          var r,
            o,
            i = n("./node_modules/shortid/lib/encode.js"),
            s = n("./node_modules/shortid/lib/alphabet.js")
          e.exports = function(e) {
            var t = "",
              n = Math.floor(0.001 * (Date.now() - 1459707606518))
            return (
              n === o ? r++ : ((r = 0), (o = n)),
              (t += i(s.lookup, 6)),
              (t += i(s.lookup, e)),
              r > 0 && (t += i(s.lookup, r)),
              (t += i(s.lookup, n))
            )
          }
        },
        "./node_modules/shortid/lib/decode.js": function(e, t, n) {
          "use strict"
          var r = n("./node_modules/shortid/lib/alphabet.js")
          e.exports = function(e) {
            var t = r.shuffled()
            return {
              version: 15 & t.indexOf(e.substr(0, 1)),
              worker: 15 & t.indexOf(e.substr(1, 1)),
            }
          }
        },
        "./node_modules/shortid/lib/encode.js": function(e, t, n) {
          "use strict"
          var r = n(
            "./node_modules/shortid/lib/random/random-byte-browser.js",
          )
          e.exports = function(e, t) {
            for (var n, o = 0, i = ""; !n; )
              (i += e(((t >> (4 * o)) & 15) | r())),
                (n = t < Math.pow(16, o + 1)),
                o++
            return i
          }
        },
        "./node_modules/shortid/lib/index.js": function(e, t, n) {
          "use strict"
          var r = n("./node_modules/shortid/lib/alphabet.js"),
            o = (n("./node_modules/shortid/lib/encode.js"),
            n("./node_modules/shortid/lib/decode.js")),
            i = n("./node_modules/shortid/lib/build.js"),
            s = n("./node_modules/shortid/lib/is-valid.js"),
            a =
              n(
                "./node_modules/shortid/lib/util/cluster-worker-id-browser.js",
              ) || 0
          function c() {
            return i(a)
          }
          ;(e.exports = c),
            (e.exports.generate = c),
            (e.exports.seed = function(t) {
              return r.seed(t), e.exports
            }),
            (e.exports.worker = function(t) {
              return (a = t), e.exports
            }),
            (e.exports.characters = function(e) {
              return void 0 !== e && r.characters(e), r.shuffled()
            }),
            (e.exports.decode = o),
            (e.exports.isValid = s)
        },
        "./node_modules/shortid/lib/is-valid.js": function(e, t, n) {
          "use strict"
          var r = n("./node_modules/shortid/lib/alphabet.js")
          e.exports = function(e) {
            if (!e || "string" != typeof e || e.length < 6) return !1
            for (
              var t = r.characters(), n = e.length, o = 0;
              o < n;
              o++
            )
              if (-1 === t.indexOf(e[o])) return !1
            return !0
          }
        },
        "./node_modules/shortid/lib/random/random-byte-browser.js": function(
          e,
          t,
          n,
        ) {
          "use strict"
          var r =
            "object" == typeof window &&
            (window.crypto || window.msCrypto)
          e.exports = function() {
            if (!r || !r.getRandomValues)
              return 48 & Math.floor(256 * Math.random())
            var e = new Uint8Array(1)
            return r.getRandomValues(e), 48 & e[0]
          }
        },
        "./node_modules/shortid/lib/random/random-from-seed.js": function(
          e,
          t,
          n,
        ) {
          "use strict"
          var r = 1
          e.exports = {
            nextValue: function() {
              return (r = (9301 * r + 49297) % 233280) / 233280
            },
            seed: function(e) {
              r = e
            },
          }
        },
        "./node_modules/shortid/lib/util/cluster-worker-id-browser.js": function(
          e,
          t,
          n,
        ) {
          "use strict"
          e.exports = 0
        },
        "./node_modules/wrtc/lib/browser.js": function(e, t, n) {
          "use strict"
          ;(t.RTCIceCandidate =
            window.mozRTCIceCandidate ||
            window.webkitRTCIceCandidate ||
            window.RTCIceCandidate),
            (t.RTCPeerConnection =
              window.mozRTCPeerConnection ||
              window.webkitRTCPeerConnection ||
              window.RTCPeerConnection),
            (t.RTCSessionDescription =
              window.mozRTCSessionDescription ||
              window.webkitRTCSessionDescription ||
              window.RTCSessionDescription)
        },
        "./src/client.js": function(e, t, n) {
          "use strict"
          Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "RTCConnectionProvider", {
              enumerable: !0,
              get: function() {
                return s.RTCConnectionProvider
              },
            }),
            (t.Client = void 0)
          var r,
            o =
              (r = n(
                "./node_modules/@babel/runtime/regenerator/index.js",
              )) && r.__esModule
                ? r
                : { default: r },
            i = n("../protocol/dist/index.js"),
            s = n("./src/provider/web-rtc/index.js")
          function a(e) {
            return (
              (function(e) {
                if (Array.isArray(e)) {
                  for (
                    var t = 0, n = new Array(e.length);
                    t < e.length;
                    t++
                  )
                    n[t] = e[t]
                  return n
                }
              })(e) ||
              (function(e) {
                if (
                  Symbol.iterator in Object(e) ||
                  "[object Arguments]" ===
                    Object.prototype.toString.call(e)
                )
                  return Array.from(e)
              })(e) ||
              (function() {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance",
                )
              })()
            )
          }
          function c(e) {
            return (c =
              "function" == typeof Symbol &&
              "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e
                  })(e)
          }
          function u(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          var l = (function() {
            function e(t) {
              var n,
                r,
                o = this
              if (
                ((function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError(
                      "Cannot call a class as a function",
                    )
                })(this, e),
                Object.defineProperty(this, "connections", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: new i.Signal(),
                }),
                t.provider)
              )
                (n = t.provider), (r = t.transport)
              else {
                var a = t.url,
                  c =
                    void 0 === a
                      ? "ws://"
                          .concat(location.hostname, ":")
                          .concat(location.port)
                      : a
                ;(c = c.replace(/^http/, "ws")).indexOf("ws") < 0 &&
                  (c = "ws://".concat(c)),
                  (r = new i.WebSocketTransport(new WebSocket(c))),
                  (n = new s.RTCConnectionProvider({
                    transport: r,
                    onConnection: function(e) {
                      return o.connections.dispatch(e)
                    },
                  }))
              }
              ;(this._provider = n),
                (this._route = new Promise(function(e) {
                  r.subscribe(function t(n) {
                    "ROUTE" === n.type &&
                      (e(n.route), r.unsubscribe(t))
                  })
                })),
                "undefined" != typeof window &&
                  window.addEventListener("beforeunload", function() {
                    r.close()
                  })
            }
            var t, n, r, l
            return (
              (t = e),
              (n = [
                {
                  key: "route",
                  value: function() {
                    return this._route
                  },
                },
                {
                  key: "connect",
                  value: ((r = o.default.mark(function e() {
                    var t,
                      n,
                      r,
                      s,
                      u = arguments
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  u.length > 0 && void 0 !== u[0]
                                    ? u[0]
                                    : i.CLIENT_MASTER),
                                (r = u.length > 1 ? u[1] : void 0),
                                (s =
                                  "object" === c(n) && null !== n
                                    ? [i.CLIENT_MASTER, n]
                                    : "object" === c(r) && null !== r
                                      ? [n, r]
                                      : [n]),
                                (e.next = 5),
                                (t = this._provider).create.apply(
                                  t,
                                  a(s),
                                )
                              )
                            case 5:
                              return e.abrupt("return", e.sent)
                            case 6:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      this,
                    )
                  })),
                  (l = function() {
                    var e = this,
                      t = arguments
                    return new Promise(function(n, o) {
                      var i = r.apply(e, t)
                      function s(e, t) {
                        try {
                          var r = i[e](t),
                            s = r.value
                        } catch (e) {
                          return void o(e)
                        }
                        r.done ? n(s) : Promise.resolve(s).then(a, c)
                      }
                      function a(e) {
                        s("next", e)
                      }
                      function c(e) {
                        s("throw", e)
                      }
                      a()
                    })
                  }),
                  function() {
                    return l.apply(this, arguments)
                  }),
                },
                {
                  key: "close",
                  value: function(e) {
                    this._provider.close(e)
                  },
                },
              ]) && u(t.prototype, n),
              e
            )
          })()
          t.Client = l
        },
        "./src/index.js": function(e, t, n) {
          "use strict"
          Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "Client", {
              enumerable: !0,
              get: function() {
                return o.Client
              },
            }),
            Object.defineProperty(t, "RTCConnectionProvider", {
              enumerable: !0,
              get: function() {
                return i.default
              },
            })
          var r,
            o = n("./src/client.js"),
            i =
              (r = n(
                "./src/provider/web-rtc/rtc-connection-provider.js",
              )) && r.__esModule
                ? r
                : { default: r }
        },
        "./src/provider/web-rtc/index.js": function(e, t, n) {
          "use strict"
          Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "RTCConnectionProvider", {
              enumerable: !0,
              get: function() {
                return o.default
              },
            })
          var r,
            o =
              (r = n(
                "./src/provider/web-rtc/rtc-connection-provider.js",
              )) && r.__esModule
                ? r
                : { default: r }
        },
        "./src/provider/web-rtc/rtc-channel.js": function(e, t, n) {
          "use strict"
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0)
          var r = n("../protocol/dist/index.js")
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          var i = (function() {
            function e(t) {
              var n = this
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError(
                    "Cannot call a class as a function",
                  )
              })(this, e),
                Object.defineProperty(this, "_open", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: !0,
                }),
                Object.defineProperty(this, "closed", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: new r.Signal(),
                }),
                Object.defineProperty(this, "errors", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: new r.Signal(),
                }),
                Object.defineProperty(this, "messages", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: new r.Signal(),
                }),
                Object.defineProperty(this, "_onMessage", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function(e) {
                    return n.messages.dispatch(e.data)
                  },
                }),
                Object.defineProperty(this, "_onError", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function(e) {
                    return n.errors.dispatch({ error: e.message })
                  },
                }),
                Object.defineProperty(this, "send", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function(e) {
                    "closing" !== n._dataChannel.readyState &&
                      "closed" !== n._dataChannel.readyState &&
                      n._dataChannel.send(e)
                  },
                })
              var o = t.dataChannel
              ;(this._dataChannel = o),
                this._dataChannel.addEventListener(
                  "message",
                  this._onMessage,
                ),
                this._dataChannel.addEventListener(
                  "close",
                  function() {
                    return n.close()
                  },
                ),
                this._dataChannel.addEventListener(
                  "error",
                  this._onError,
                ),
                (this.id = o.label)
            }
            var t, n
            return (
              (t = e),
              (n = [
                {
                  key: "close",
                  value: function() {
                    ;(this._open = !1),
                      this._dataChannel.removeEventListener(
                        "message",
                        this._onMessage,
                      ),
                      ("closing" === this._dataChannel.readyState &&
                        "closed" === this._dataChannel.readyState) ||
                        this._dataChannel.close(),
                      this.closed.dispatch()
                  },
                },
              ]) && o(t.prototype, n),
              e
            )
          })()
          t.default = i
        },
        "./src/provider/web-rtc/rtc-connection-provider.js": function(
          e,
          t,
          n,
        ) {
          "use strict"
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0)
          var r = a(
              n("./node_modules/@babel/runtime/regenerator/index.js"),
            ),
            o = a(n("./node_modules/shortid/index.js")),
            i = n("./node_modules/wrtc/lib/browser.js"),
            s = a(n("./src/provider/web-rtc/rtc-peer.js"))
          function a(e) {
            return e && e.__esModule ? e : { default: e }
          }
          function c(e) {
            return function() {
              var t = this,
                n = arguments
              return new Promise(function(r, o) {
                var i = e.apply(t, n)
                function s(e, t) {
                  try {
                    var n = i[e](t),
                      s = n.value
                  } catch (e) {
                    return void o(e)
                  }
                  n.done ? r(s) : Promise.resolve(s).then(a, c)
                }
                function a(e) {
                  s("next", e)
                }
                function c(e) {
                  s("throw", e)
                }
                a()
              })
            }
          }
          function u(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          var l = {
              iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                {
                  urls: "turn:turn.bistri.com:80",
                  username: "homeo",
                  credential: "homeo",
                },
              ],
            },
            d = (function() {
              function e(t) {
                var n,
                  o = this
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError(
                      "Cannot call a class as a function",
                    )
                })(this, e),
                  Object.defineProperty(this, "_peers", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: {},
                  }),
                  Object.defineProperty(this, "_onMessage", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: ((n = c(
                      r.default.mark(function e(t) {
                        var n, s, a, c, u, l, d, f
                        return r.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  ;(e.t0 = t.type),
                                    (e.next =
                                      "ICE" === e.t0
                                        ? 3
                                        : "OFFER" === e.t0
                                          ? 11
                                          : "ANSWER" === e.t0
                                            ? 11
                                            : 27)
                                  break
                                case 3:
                                  if (
                                    ((n = t.src),
                                    (s = t.payload.ice),
                                    "string" == typeof n)
                                  ) {
                                    e.next = 6
                                    break
                                  }
                                  return e.abrupt("return")
                                case 6:
                                  if ((a = o._peers[n])) {
                                    e.next = 9
                                    break
                                  }
                                  throw new Error(
                                    "Received ICE candidate for unestablished peer",
                                  )
                                case 9:
                                  return (
                                    a.addIceCandidate(s),
                                    e.abrupt("break", 28)
                                  )
                                case 11:
                                  ;(c = t.src),
                                    (u = t.payload.sdp),
                                    (l =
                                      o._peers[c] || o._addPeer(c)),
                                    (e.prev = 13),
                                    (d = new i.RTCSessionDescription(
                                      u,
                                    )),
                                    (e.next = 20)
                                  break
                                case 17:
                                  throw ((e.prev = 17),
                                  (e.t1 = e.catch(13)),
                                  new Error("Invalid SDP"))
                                case 20:
                                  if (
                                    (l.setRemoteDescription(d),
                                    "OFFER" !== t.type)
                                  ) {
                                    e.next = 26
                                    break
                                  }
                                  return (e.next = 24), l.answer()
                                case 24:
                                  ;(f = e.sent), o._onPeerSDP(f, c)
                                case 26:
                                case 27:
                                  return e.abrupt("break", 28)
                                case 28:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          this,
                          [[13, 17]],
                        )
                      }),
                    )),
                    function(e) {
                      return n.apply(this, arguments)
                    }),
                  }),
                  Object.defineProperty(this, "_onPeerSDP", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e, t) {
                      var n,
                        r = { sdp: e }
                      ;(n =
                        "offer" === e.type
                          ? {
                              type: "OFFER_CLIENT",
                              pid: t,
                              payload: r,
                            }
                          : {
                              type: "ANSWER_CLIENT",
                              pid: t,
                              payload: r,
                            }),
                        o._transport.send(n)
                    },
                  }),
                  Object.defineProperty(this, "_onPeerICE", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e, t) {
                      o._transport.send({
                        type: "ICE_CLIENT",
                        pid: t,
                        payload: { ice: e },
                      })
                    },
                  }),
                  Object.defineProperty(this, "_onPeerClose", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e) {
                      delete o._peers[e]
                    },
                  })
                var s = t.transport,
                  a = t.onConnection,
                  u = void 0 === a ? function() {} : a
                ;(this._transport = s),
                  (this._onPeerChannel = u),
                  this._transport.subscribe(this._onMessage)
              }
              var t, n, a
              return (
                (t = e),
                (n = [
                  {
                    key: "create",
                    value: ((a = c(
                      r.default.mark(function e(t, n) {
                        var i, s, a, c
                        return r.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = (0, o.default)()),
                                    (s =
                                      this._peers[t] ||
                                      this._addPeer(t)),
                                    (a = s.channel(i, n)),
                                    (e.next = 5),
                                    s.offer()
                                  )
                                case 5:
                                  return (
                                    (c = e.sent),
                                    this._onPeerSDP(c, t),
                                    (e.next = 9),
                                    a
                                  )
                                case 9:
                                  return e.abrupt("return", e.sent)
                                case 10:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          this,
                        )
                      }),
                    )),
                    function(e, t) {
                      return a.apply(this, arguments)
                    }),
                  },
                  {
                    key: "_addPeer",
                    value: function(e) {
                      var t = this
                      if (
                        (!(
                          arguments.length > 1 &&
                          void 0 !== arguments[1]
                        ) || arguments[1],
                        this._peers[e])
                      )
                        throw new Error(
                          "RTCPeer with id ".concat(
                            e,
                            " already exists.",
                          ),
                        )
                      var n = new s.default({
                        onChannel: this._onPeerChannel,
                        onClose: function() {
                          return t._onPeerClose(e)
                        },
                        onICE: function(n) {
                          return t._onPeerICE(n, e)
                        },
                        peerConnection: new i.RTCPeerConnection(l),
                      })
                      return (this._peers[e] = n), n
                    },
                  },
                  {
                    key: "close",
                    value: function(e) {
                      var t = this._peers[e]
                      t && t.close()
                    },
                  },
                ]) && u(t.prototype, n),
                e
              )
            })()
          t.default = d
        },
        "./src/provider/web-rtc/rtc-peer.js": function(e, t, n) {
          "use strict"
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0),
            n("../protocol/dist/index.js")
          var r,
            o =
              (r = n("./src/provider/web-rtc/rtc-channel.js")) &&
              r.__esModule
                ? r
                : { default: r }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          var s = { ordered: !1, reliable: !1 },
            a = (function() {
              function e(t) {
                var n = this
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError(
                      "Cannot call a class as a function",
                    )
                })(this, e),
                  Object.defineProperty(this, "_channels", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: {},
                  }),
                  Object.defineProperty(
                    this,
                    "_setLocalDescription",
                    {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      value: function(e) {
                        n._peerConnection.setLocalDescription(e)
                      },
                    },
                  ),
                  Object.defineProperty(this, "_onIceCandidate", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e) {
                      n._onICE(e.candidate)
                    },
                  }),
                  Object.defineProperty(this, "_onDataChannel", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e) {
                      var t = e.channel,
                        r = n._channels[t.label]
                      r ||
                        ((r = n._channels[t.label] = new o.default({
                          dataChannel: t,
                        })),
                        n._onChannel(r))
                    },
                  }),
                  Object.defineProperty(
                    this,
                    "_onSignalingStateChange",
                    {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      value: function() {
                        switch (n._peerConnection.connectionState) {
                          case "disconnected":
                          case "failed":
                          case "closed":
                            n._onClose()
                        }
                      },
                    },
                  )
                var r = t.onChannel,
                  i = t.onClose,
                  s = t.onICE,
                  a = t.peerConnection
                ;(this._onICE = s),
                  (this._onChannel = r),
                  (this._onClose = i),
                  (this._peerConnection = a),
                  this._peerConnection.addEventListener(
                    "close",
                    function() {
                      return n.close()
                    },
                  ),
                  this._peerConnection.addEventListener(
                    "datachannel",
                    this._onDataChannel,
                  ),
                  this._peerConnection.addEventListener(
                    "icecandidate",
                    this._onIceCandidate,
                  ),
                  this._peerConnection.addEventListener(
                    "signalingstatechange",
                    this._onSignalingStateChange,
                  )
              }
              var t, n
              return (
                (t = e),
                (n = [
                  {
                    key: "channel",
                    value: function(e) {
                      var t = this,
                        n =
                          arguments.length > 1 &&
                          void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = this._peerConnection.createDataChannel(
                          e,
                          s,
                        )
                      return (
                        (r.binaryType =
                          n.binaryType || "arraybuffer"),
                        new Promise(function(e) {
                          r.addEventListener("open", function() {
                            var n = (t._channels[
                              r.label
                            ] = new o.default({ dataChannel: r }))
                            e(n), t._onChannel(n)
                          })
                        })
                      )
                    },
                  },
                  {
                    key: "offer",
                    value: function() {
                      var e = this
                      return this._peerConnection
                        .createOffer()
                        .then(function(t) {
                          return e._setLocalDescription(t), t
                        })
                        .catch(console.error)
                    },
                  },
                  {
                    key: "answer",
                    value: function() {
                      var e = this
                      return this._peerConnection
                        .createAnswer()
                        .then(function(t) {
                          return e._setLocalDescription(t), t
                        })
                        .catch(console.error)
                    },
                  },
                  {
                    key: "setRemoteDescription",
                    value: function(e) {
                      this._peerConnection.setRemoteDescription(e)
                    },
                  },
                  {
                    key: "addIceCandidate",
                    value: function(e) {
                      null !== e &&
                        this._peerConnection.addIceCandidate(e)
                    },
                  },
                  {
                    key: "close",
                    value: function() {
                      for (var e in ("closed" !==
                        this._peerConnection.connectionState &&
                        this._peerConnection.close(),
                      this._channels))
                        this._channels[e].close()
                      this._onClose()
                    },
                  },
                ]) && i(t.prototype, n),
                e
              )
            })()
          t.default = a
        },
      }))
  },
  "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js": function(
    e,
    t,
    n,
  ) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 })
    var r,
      o =
        (r = n("./node_modules/react/index.js")) &&
        "object" == typeof r &&
        "default" in r
          ? r.default
          : r,
      i = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      },
      s = function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return !t || ("object" != typeof t && "function" != typeof t)
          ? e
          : t
      },
      a = (function(e) {
        function t() {
          return i(this, t), s(this, e.apply(this, arguments))
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, e),
          (t.prototype.render = function() {
            return o.Children.only(this.props.children)
          }),
          t
        )
      })(o.Component)
    ;(t.AppContainer = a),
      (t.hot = function() {
        return function(e) {
          return e
        }
      }),
      (t.areComponentsEqual = function(e, t) {
        return e === t
      }),
      (t.setConfig = function() {})
  },
  "./node_modules/react-hot-loader/index.js": function(e, t, n) {
    "use strict"
    e.exports = n(
      "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js",
    )
  },
  "./node_modules/react/index.js": function(e, t, n) {
    e.exports = n("dll-reference react")(
      "./node_modules/react/index.js",
    )
  },
  "./src/index.js": function(e, t, n) {
    "use strict"
    ;(function(e) {
      var t,
        r = (function(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r =
                  Object.defineProperty &&
                  Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, n)
                    : {}
                r.get || r.set
                  ? Object.defineProperty(t, n, r)
                  : (t[n] = e[n])
              }
          return (t.default = e), t
        })(n("./node_modules/@web-udp/client/dist/index.browser.js"))
      n("../core/lib/index.js")
      ;(t = n("./node_modules/react-hot-loader/index.js")
        .enterModule) && t(e)
      var o,
        i,
        s = new r.Client({ url: "localhost:3000" })
      s.connect().then(function(e) {}),
        (o = n("./node_modules/react-hot-loader/index.js").default),
        (i = n("./node_modules/react-hot-loader/index.js")
          .leaveModule),
        o &&
          (o.register(
            s,
            "client",
            "/Users/ericmcdaniel/Projects/subspace/packages/client/src/index.js",
          ),
          i(e))
    }.call(
      this,
      n("../../node_modules/webpack/buildin/module.js")(e),
    ))
  },
  "dll-reference react": function(e, t) {
    e.exports = react
  },
})
//# sourceMappingURL=index.js.map
