!(function(e) {
  var r = window.webpackHotUpdate
  window.webpackHotUpdate = function(e, t) {
    !(function(e, r) {
      if (!j[e] || !v[e]) return
      for (var t in ((v[e] = !1), r))
        Object.prototype.hasOwnProperty.call(r, t) && (b[t] = r[t])
      0 == --m && 0 === y && O()
    })(e, t),
      r && r(e, t)
  }
  var t,
    n = !0,
    o = "5ae825d318a79951b9e5",
    i = 1e4,
    s = {},
    c = [],
    a = []
  function u(e) {
    var r = C[e]
    if (!r) return E
    var n = function(n) {
        return (
          r.hot.active
            ? (C[n]
                ? -1 === C[n].parents.indexOf(e) &&
                  C[n].parents.push(e)
                : ((c = [e]), (t = n)),
              -1 === r.children.indexOf(n) && r.children.push(n))
            : (console.warn(
                "[HMR] unexpected require(" +
                  n +
                  ") from disposed module " +
                  e,
              ),
              (c = [])),
          E(n)
        )
      },
      o = function(e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return E[e]
          },
          set: function(r) {
            E[e] = r
          },
        }
      }
    for (var i in E)
      Object.prototype.hasOwnProperty.call(E, i) &&
        "e" !== i &&
        Object.defineProperty(n, i, o(i))
    return (
      (n.e = function(e) {
        return (
          "ready" === d && f("prepare"),
          y++,
          E.e(e).then(r, function(e) {
            throw (r(), e)
          })
        )
        function r() {
          y--,
            "prepare" === d &&
              (_[e] || x(e), 0 === y && 0 === m && O())
        }
      }),
      n
    )
  }
  var l = [],
    d = "idle"
  function f(e) {
    d = e
    for (var r = 0; r < l.length; r++) l[r].call(null, e)
  }
  var p,
    b,
    h,
    m = 0,
    y = 0,
    _ = {},
    v = {},
    j = {}
  function w(e) {
    return +e + "" === e ? +e : e
  }
  function g(e) {
    if ("idle" !== d)
      throw new Error("check() is only allowed in idle status")
    return (
      (n = e),
      f("check"),
      ((r = i),
      (r = r || 1e4),
      new Promise(function(e, t) {
        if ("undefined" == typeof XMLHttpRequest)
          return t(new Error("No browser support"))
        try {
          var n = new XMLHttpRequest(),
            i = E.p + "" + o + ".hot-update.json"
          n.open("GET", i, !0), (n.timeout = r), n.send(null)
        } catch (e) {
          return t(e)
        }
        n.onreadystatechange = function() {
          if (4 === n.readyState)
            if (0 === n.status)
              t(new Error("Manifest request to " + i + " timed out."))
            else if (404 === n.status) e()
            else if (200 !== n.status && 304 !== n.status)
              t(new Error("Manifest request to " + i + " failed."))
            else {
              try {
                var r = JSON.parse(n.responseText)
              } catch (e) {
                return void t(e)
              }
              e(r)
            }
        }
      })).then(function(e) {
        if (!e) return f("idle"), null
        ;(v = {}), (_ = {}), (j = e.c), (h = e.h), f("prepare")
        var r = new Promise(function(e, r) {
          p = { resolve: e, reject: r }
        })
        b = {}
        return x(0), "prepare" === d && 0 === y && 0 === m && O(), r
      })
    )
    var r
  }
  function x(e) {
    j[e]
      ? ((v[e] = !0),
        m++,
        (function(e) {
          var r = document.getElementsByTagName("head")[0],
            t = document.createElement("script")
          ;(t.charset = "utf-8"),
            (t.src = E.p + "" + e + "." + o + ".hot-update.js"),
            r.appendChild(t)
        })(e))
      : (_[e] = !0)
  }
  function O() {
    f("ready")
    var e = p
    if (((p = null), e))
      if (n)
        Promise.resolve()
          .then(function() {
            return P(n)
          })
          .then(
            function(r) {
              e.resolve(r)
            },
            function(r) {
              e.reject(r)
            },
          )
      else {
        var r = []
        for (var t in b)
          Object.prototype.hasOwnProperty.call(b, t) && r.push(w(t))
        e.resolve(r)
      }
  }
  function P(r) {
    if ("ready" !== d)
      throw new Error("apply() is only allowed in ready status")
    var t, n, i, a, u
    function l(e) {
      for (
        var r = [e],
          t = {},
          n = r.slice().map(function(e) {
            return { chain: [e], id: e }
          });
        n.length > 0;

      ) {
        var o = n.pop(),
          i = o.id,
          s = o.chain
        if ((a = C[i]) && !a.hot._selfAccepted) {
          if (a.hot._selfDeclined)
            return { type: "self-declined", chain: s, moduleId: i }
          if (a.hot._main)
            return { type: "unaccepted", chain: s, moduleId: i }
          for (var c = 0; c < a.parents.length; c++) {
            var u = a.parents[c],
              l = C[u]
            if (l) {
              if (l.hot._declinedDependencies[i])
                return {
                  type: "declined",
                  chain: s.concat([u]),
                  moduleId: i,
                  parentId: u,
                }
              ;-1 === r.indexOf(u) &&
                (l.hot._acceptedDependencies[i]
                  ? (t[u] || (t[u] = []), p(t[u], [i]))
                  : (delete t[u],
                    r.push(u),
                    n.push({ chain: s.concat([u]), id: u })))
            }
          }
        }
      }
      return {
        type: "accepted",
        moduleId: e,
        outdatedModules: r,
        outdatedDependencies: t,
      }
    }
    function p(e, r) {
      for (var t = 0; t < r.length; t++) {
        var n = r[t]
        ;-1 === e.indexOf(n) && e.push(n)
      }
    }
    r = r || {}
    var m = {},
      y = [],
      _ = {},
      v = function() {
        console.warn(
          "[HMR] unexpected require(" +
            x.moduleId +
            ") to disposed module",
        )
      }
    for (var g in b)
      if (Object.prototype.hasOwnProperty.call(b, g)) {
        var x
        u = w(g)
        var O = !1,
          P = !1,
          k = !1,
          T = ""
        switch (((x = b[g] ? l(u) : { type: "disposed", moduleId: g })
          .chain &&
          (T = "\nUpdate propagation: " + x.chain.join(" -> ")),
        x.type)) {
          case "self-declined":
            r.onDeclined && r.onDeclined(x),
              r.ignoreDeclined ||
                (O = new Error(
                  "Aborted because of self decline: " +
                    x.moduleId +
                    T,
                ))
            break
          case "declined":
            r.onDeclined && r.onDeclined(x),
              r.ignoreDeclined ||
                (O = new Error(
                  "Aborted because of declined dependency: " +
                    x.moduleId +
                    " in " +
                    x.parentId +
                    T,
                ))
            break
          case "unaccepted":
            r.onUnaccepted && r.onUnaccepted(x),
              r.ignoreUnaccepted ||
                (O = new Error(
                  "Aborted because " + u + " is not accepted" + T,
                ))
            break
          case "accepted":
            r.onAccepted && r.onAccepted(x), (P = !0)
            break
          case "disposed":
            r.onDisposed && r.onDisposed(x), (k = !0)
            break
          default:
            throw new Error("Unexception type " + x.type)
        }
        if (O) return f("abort"), Promise.reject(O)
        if (P)
          for (u in ((_[u] = b[u]),
          p(y, x.outdatedModules),
          x.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(
              x.outdatedDependencies,
              u,
            ) &&
              (m[u] || (m[u] = []),
              p(m[u], x.outdatedDependencies[u]))
        k && (p(y, [x.moduleId]), (_[u] = v))
      }
    var S,
      L = []
    for (n = 0; n < y.length; n++)
      (u = y[n]),
        C[u] &&
          C[u].hot._selfAccepted &&
          L.push({ module: u, errorHandler: C[u].hot._selfAccepted })
    f("dispose"),
      Object.keys(j).forEach(function(e) {
        !1 === j[e] &&
          (function(e) {
            delete installedChunks[e]
          })(e)
      })
    for (var M, R, I = y.slice(); I.length > 0; )
      if (((u = I.pop()), (a = C[u]))) {
        var D = {},
          A = a.hot._disposeHandlers
        for (i = 0; i < A.length; i++) (t = A[i])(D)
        for (
          s[u] = D,
            a.hot.active = !1,
            delete C[u],
            delete m[u],
            i = 0;
          i < a.children.length;
          i++
        ) {
          var N = C[a.children[i]]
          N &&
            ((S = N.parents.indexOf(u)) >= 0 &&
              N.parents.splice(S, 1))
        }
      }
    for (u in m)
      if (Object.prototype.hasOwnProperty.call(m, u) && (a = C[u]))
        for (R = m[u], i = 0; i < R.length; i++)
          (M = R[i]),
            (S = a.children.indexOf(M)) >= 0 &&
              a.children.splice(S, 1)
    for (u in (f("apply"), (o = h), _))
      Object.prototype.hasOwnProperty.call(_, u) && (e[u] = _[u])
    var F = null
    for (u in m)
      if (Object.prototype.hasOwnProperty.call(m, u) && (a = C[u])) {
        R = m[u]
        var H = []
        for (n = 0; n < R.length; n++)
          if (((M = R[n]), (t = a.hot._acceptedDependencies[M]))) {
            if (-1 !== H.indexOf(t)) continue
            H.push(t)
          }
        for (n = 0; n < H.length; n++) {
          t = H[n]
          try {
            t(R)
          } catch (e) {
            r.onErrored &&
              r.onErrored({
                type: "accept-errored",
                moduleId: u,
                dependencyId: R[n],
                error: e,
              }),
              r.ignoreErrored || F || (F = e)
          }
        }
      }
    for (n = 0; n < L.length; n++) {
      var q = L[n]
      ;(u = q.module), (c = [u])
      try {
        E(u)
      } catch (e) {
        if ("function" == typeof q.errorHandler)
          try {
            q.errorHandler(e)
          } catch (t) {
            r.onErrored &&
              r.onErrored({
                type: "self-accept-error-handler-errored",
                moduleId: u,
                error: t,
                originalError: e,
              }),
              r.ignoreErrored || F || (F = t),
              F || (F = e)
          }
        else
          r.onErrored &&
            r.onErrored({
              type: "self-accept-errored",
              moduleId: u,
              error: e,
            }),
            r.ignoreErrored || F || (F = e)
      }
    }
    return F
      ? (f("fail"), Promise.reject(F))
      : (f("idle"),
        new Promise(function(e) {
          e(y)
        }))
  }
  var C = {}
  function E(r) {
    if (C[r]) return C[r].exports
    var n = (C[r] = {
      i: r,
      l: !1,
      exports: {},
      hot: (function(e) {
        var r = {
          _acceptedDependencies: {},
          _declinedDependencies: {},
          _selfAccepted: !1,
          _selfDeclined: !1,
          _disposeHandlers: [],
          _main: t !== e,
          active: !0,
          accept: function(e, t) {
            if (void 0 === e) r._selfAccepted = !0
            else if ("function" == typeof e) r._selfAccepted = e
            else if ("object" == typeof e)
              for (var n = 0; n < e.length; n++)
                r._acceptedDependencies[e[n]] = t || function() {}
            else r._acceptedDependencies[e] = t || function() {}
          },
          decline: function(e) {
            if (void 0 === e) r._selfDeclined = !0
            else if ("object" == typeof e)
              for (var t = 0; t < e.length; t++)
                r._declinedDependencies[e[t]] = !0
            else r._declinedDependencies[e] = !0
          },
          dispose: function(e) {
            r._disposeHandlers.push(e)
          },
          addDisposeHandler: function(e) {
            r._disposeHandlers.push(e)
          },
          removeDisposeHandler: function(e) {
            var t = r._disposeHandlers.indexOf(e)
            t >= 0 && r._disposeHandlers.splice(t, 1)
          },
          check: g,
          apply: P,
          status: function(e) {
            if (!e) return d
            l.push(e)
          },
          addStatusHandler: function(e) {
            l.push(e)
          },
          removeStatusHandler: function(e) {
            var r = l.indexOf(e)
            r >= 0 && l.splice(r, 1)
          },
          data: s[e],
        }
        return (t = void 0), r
      })(r),
      parents: ((a = c), (c = []), a),
      children: [],
    })
    return (
      e[r].call(n.exports, n, n.exports, u(r)), (n.l = !0), n.exports
    )
  }
  ;(E.m = e),
    (E.c = C),
    (E.d = function(e, r, t) {
      E.o(e, r) ||
        Object.defineProperty(e, r, {
          configurable: !1,
          enumerable: !0,
          get: t,
        })
    }),
    (E.r = function(e) {
      Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (E.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return E.d(r, "a", r), r
    }),
    (E.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r)
    }),
    (E.p = ""),
    (E.h = function() {
      return o
    }),
    u("./src/index.js")((E.s = "./src/index.js"))
})({
  "./node_modules/@babel/runtime/core-js/object/define-property.js": function(
    e,
    r,
    t,
  ) {
    e.exports = t(
      "./node_modules/core-js/library/fn/object/define-property.js",
    )
  },
  "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js": function(
    e,
    r,
    t,
  ) {
    e.exports = t(
      "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
    )
  },
  "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(
    e,
    r,
    t,
  ) {
    var n = t(
        "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
      ),
      o = t(
        "./node_modules/@babel/runtime/core-js/object/define-property.js",
      )
    e.exports = function(e) {
      if (e && e.__esModule) return e
      var r = {}
      if (null != e)
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            var i = o && n ? n(e, t) : {}
            i.get || i.set ? o(r, t, i) : (r[t] = e[t])
          }
      return (r.default = e), r
    }
  },
  "./node_modules/@web-udp/client/dist/index.browser.js": function(
    e,
    r,
    t,
  ) {
    window,
      (e.exports = (function(e) {
        var r = {}
        function t(n) {
          if (r[n]) return r[n].exports
          var o = (r[n] = { i: n, l: !1, exports: {} })
          return (
            e[n].call(o.exports, o, o.exports, t),
            (o.l = !0),
            o.exports
          )
        }
        return (
          (t.m = e),
          (t.c = r),
          (t.d = function(e, r, n) {
            t.o(e, r) ||
              Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n,
              })
          }),
          (t.r = function(e) {
            Object.defineProperty(e, "__esModule", { value: !0 })
          }),
          (t.n = function(e) {
            var r =
              e && e.__esModule
                ? function() {
                    return e.default
                  }
                : function() {
                    return e
                  }
            return t.d(r, "a", r), r
          }),
          (t.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
          }),
          (t.p = ""),
          t((t.s = "./src/index.js"))
        )
      })({
        "../../node_modules/node-libs-browser/mock/empty.js": function(
          e,
          r,
        ) {},
        "../../node_modules/process/browser.js": function(e, r) {
          var t,
            n,
            o = (e.exports = {})
          function i() {
            throw new Error("setTimeout has not been defined")
          }
          function s() {
            throw new Error("clearTimeout has not been defined")
          }
          function c(e) {
            if (t === setTimeout) return setTimeout(e, 0)
            if ((t === i || !t) && setTimeout)
              return (t = setTimeout), setTimeout(e, 0)
            try {
              return t(e, 0)
            } catch (r) {
              try {
                return t.call(null, e, 0)
              } catch (r) {
                return t.call(this, e, 0)
              }
            }
          }
          !(function() {
            try {
              t = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
              t = i
            }
            try {
              n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
              n = s
            }
          })()
          var a,
            u = [],
            l = !1,
            d = -1
          function f() {
            l &&
              a &&
              ((l = !1),
              a.length ? (u = a.concat(u)) : (d = -1),
              u.length && p())
          }
          function p() {
            if (!l) {
              var e = c(f)
              l = !0
              for (var r = u.length; r; ) {
                for (a = u, u = []; ++d < r; ) a && a[d].run()
                ;(d = -1), (r = u.length)
              }
              ;(a = null),
                (l = !1),
                (function(e) {
                  if (n === clearTimeout) return clearTimeout(e)
                  if ((n === s || !n) && clearTimeout)
                    return (n = clearTimeout), clearTimeout(e)
                  try {
                    n(e)
                  } catch (r) {
                    try {
                      return n.call(null, e)
                    } catch (r) {
                      return n.call(this, e)
                    }
                  }
                })(e)
            }
          }
          function b(e, r) {
            ;(this.fun = e), (this.array = r)
          }
          function h() {}
          ;(o.nextTick = function(e) {
            var r = new Array(arguments.length - 1)
            if (arguments.length > 1)
              for (var t = 1; t < arguments.length; t++)
                r[t - 1] = arguments[t]
            u.push(new b(e, r)), 1 !== u.length || l || c(p)
          }),
            (b.prototype.run = function() {
              this.fun.apply(null, this.array)
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = h),
            (o.addListener = h),
            (o.once = h),
            (o.off = h),
            (o.removeListener = h),
            (o.removeAllListeners = h),
            (o.emit = h),
            (o.prependListener = h),
            (o.prependOnceListener = h),
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
          r,
        ) {
          var t
          t = (function() {
            return this
          })()
          try {
            t = t || Function("return this")() || (0, eval)("this")
          } catch (e) {
            "object" == typeof window && (t = window)
          }
          e.exports = t
        },
        "../../node_modules/webpack/buildin/module.js": function(
          e,
          r,
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
        "../protocol/dist/index.js": function(e, r, t) {
          "use strict"
          ;(function(e, n, o) {
            var i, s, c, a
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
            ;(a = function() {
              return (function(e) {
                var r = {}
                function t(n) {
                  if (r[n]) return r[n].exports
                  var o = (r[n] = { i: n, l: !1, exports: {} })
                  return (
                    e[n].call(o.exports, o, o.exports, t),
                    (o.l = !0),
                    o.exports
                  )
                }
                return (
                  (t.m = e),
                  (t.c = r),
                  (t.d = function(e, r, n) {
                    t.o(e, r) ||
                      Object.defineProperty(e, r, {
                        configurable: !1,
                        enumerable: !0,
                        get: n,
                      })
                  }),
                  (t.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                      value: !0,
                    })
                  }),
                  (t.n = function(e) {
                    var r =
                      e && e.__esModule
                        ? function() {
                            return e.default
                          }
                        : function() {
                            return e
                          }
                    return t.d(r, "a", r), r
                  }),
                  (t.o = function(e, r) {
                    return Object.prototype.hasOwnProperty.call(e, r)
                  }),
                  (t.p = ""),
                  (t.w = {}),
                  t((t.s = "./src/index.js"))
                )
              })({
                "./node_modules/shortid/index.js": function(e, r, t) {
                  e.exports = t("./node_modules/shortid/lib/index.js")
                },
                "./node_modules/shortid/lib/alphabet.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n,
                    o,
                    i,
                    s = t(
                      "./node_modules/shortid/lib/random/random-from-seed.js",
                    ),
                    c =
                      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
                  function a() {
                    i = !1
                  }
                  function u(e) {
                    if (e) {
                      if (e !== n) {
                        if (e.length !== c.length)
                          throw new Error(
                            "Custom alphabet for shortid must be " +
                              c.length +
                              " unique characters. You submitted " +
                              e.length +
                              " characters: " +
                              e,
                          )
                        var r = e.split("").filter(function(e, r, t) {
                          return r !== t.lastIndexOf(e)
                        })
                        if (r.length)
                          throw new Error(
                            "Custom alphabet for shortid must be " +
                              c.length +
                              " unique characters. These characters were not unique: " +
                              r.join(", "),
                          )
                        ;(n = e), a()
                      }
                    } else n !== c && ((n = c), a())
                  }
                  function l() {
                    return (
                      i ||
                      (i = (function() {
                        n || u(c)
                        for (
                          var e,
                            r = n.split(""),
                            t = [],
                            o = s.nextValue();
                          r.length > 0;

                        )
                          (o = s.nextValue()),
                            (e = Math.floor(o * r.length)),
                            t.push(r.splice(e, 1)[0])
                        return t.join("")
                      })())
                    )
                  }
                  e.exports = {
                    characters: function(e) {
                      return u(e), n
                    },
                    seed: function(e) {
                      s.seed(e), o !== e && (a(), (o = e))
                    },
                    lookup: function(e) {
                      return l()[e]
                    },
                    shuffled: l,
                  }
                },
                "./node_modules/shortid/lib/build.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n,
                    o,
                    i = t("./node_modules/shortid/lib/encode.js"),
                    s = t("./node_modules/shortid/lib/alphabet.js")
                  e.exports = function(e) {
                    var r = "",
                      t = Math.floor(
                        0.001 * (Date.now() - 1459707606518),
                      )
                    return (
                      t === o ? n++ : ((n = 0), (o = t)),
                      (r += i(s.lookup, 6)),
                      (r += i(s.lookup, e)),
                      n > 0 && (r += i(s.lookup, n)),
                      r + i(s.lookup, t)
                    )
                  }
                },
                "./node_modules/shortid/lib/decode.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n = t("./node_modules/shortid/lib/alphabet.js")
                  e.exports = function(e) {
                    var r = n.shuffled()
                    return {
                      version: 15 & r.indexOf(e.substr(0, 1)),
                      worker: 15 & r.indexOf(e.substr(1, 1)),
                    }
                  }
                },
                "./node_modules/shortid/lib/encode.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n = t(
                    "./node_modules/shortid/lib/random/random-byte.js",
                  )
                  e.exports = function(e, r) {
                    for (var t, o = 0, i = ""; !t; )
                      (i += e(((r >> (4 * o)) & 15) | n())),
                        (t = r < Math.pow(16, o + 1)),
                        o++
                    return i
                  }
                },
                "./node_modules/shortid/lib/index.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n = t("./node_modules/shortid/lib/alphabet.js"),
                    o = (t("./node_modules/shortid/lib/encode.js"),
                    t("./node_modules/shortid/lib/decode.js")),
                    i = t("./node_modules/shortid/lib/build.js"),
                    s = t("./node_modules/shortid/lib/is-valid.js"),
                    c =
                      t(
                        "./node_modules/shortid/lib/util/cluster-worker-id.js",
                      ) || 0
                  function a() {
                    return i(c)
                  }
                  ;(e.exports = a),
                    (e.exports.generate = a),
                    (e.exports.seed = function(r) {
                      return n.seed(r), e.exports
                    }),
                    (e.exports.worker = function(r) {
                      return (c = r), e.exports
                    }),
                    (e.exports.characters = function(e) {
                      return (
                        void 0 !== e && n.characters(e), n.shuffled()
                      )
                    }),
                    (e.exports.decode = o),
                    (e.exports.isValid = s)
                },
                "./node_modules/shortid/lib/is-valid.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n = t("./node_modules/shortid/lib/alphabet.js")
                  e.exports = function(e) {
                    if (!e || "string" != typeof e || e.length < 6)
                      return !1
                    for (
                      var r = n.characters(), t = e.length, o = 0;
                      o < t;
                      o++
                    )
                      if (-1 === r.indexOf(e[o])) return !1
                    return !0
                  }
                },
                "./node_modules/shortid/lib/random/random-byte.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n = t("crypto").randomBytes
                  e.exports = function() {
                    return 48 & n(1)[0]
                  }
                },
                "./node_modules/shortid/lib/random/random-from-seed.js": function(
                  e,
                  r,
                  t,
                ) {
                  var n = 1
                  e.exports = {
                    nextValue: function() {
                      return (
                        (n = (9301 * n + 49297) % 233280) / 233280
                      )
                    },
                    seed: function(e) {
                      n = e
                    },
                  }
                },
                "./node_modules/shortid/lib/util/cluster-worker-id.js": function(
                  e,
                  r,
                  t,
                ) {
                  e.exports = parseInt(n.env.NODE_UNIQUE_ID || 0, 10)
                },
                "./src/broker/index.js": function(e, r, t) {
                  Object.defineProperty(r, "__esModule", {
                    value: !0,
                  }),
                    (r.default = void 0)
                  var n,
                    o =
                      (n = t("./node_modules/shortid/index.js")) &&
                      n.__esModule
                        ? n
                        : { default: n },
                    i = (function() {
                      function e() {
                        var r = this
                        !(function(e, r) {
                          if (!(e instanceof r))
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
                            value: function(e, t) {
                              switch (e.type) {
                                case "OFFER_CLIENT":
                                  var n = e.payload,
                                    o = e.pid
                                  if (!r._transports[o])
                                    throw new Error(
                                      "Client ".concat(
                                        o,
                                        " not found.",
                                      ),
                                    )
                                  r._transports[o].send({
                                    type: "OFFER",
                                    src: t,
                                    payload: { sdp: n.sdp },
                                  })
                                  break
                                case "ANSWER_CLIENT":
                                  var i = e.payload,
                                    s = e.pid
                                  if (!r._transports[s])
                                    throw new Error(
                                      "Client ".concat(
                                        s,
                                        " not found.",
                                      ),
                                    )
                                  r._transports[s].send({
                                    type: "ANSWER",
                                    src: t,
                                    payload: { sdp: i.sdp },
                                  })
                                  break
                                case "ICE_CLIENT":
                                  var c = e.payload,
                                    a = e.pid
                                  if (!r._transports[a])
                                    throw new Error(
                                      "Client ".concat(
                                        a,
                                        " not found",
                                      ),
                                    )
                                  r._transports[a].send({
                                    type: "ICE",
                                    src: t,
                                    payload: { ice: c.ice },
                                  })
                                  break
                                case "TRANSPORT_CLOSE":
                                  delete r._transports[t]
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
                      var r
                      return (
                        (r = [
                          {
                            key: "register",
                            value: function(e) {
                              var r = this,
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : (0, o.default)()
                              return (
                                (this._transports[t] = e),
                                e.subscribe(function(e) {
                                  try {
                                    r._onMessage(e, t)
                                  } catch (e) {
                                    console.error(e)
                                  }
                                }),
                                e.send({ type: "ROUTE", route: t }),
                                t
                              )
                            },
                          },
                        ]) &&
                          (function(e, r) {
                            for (var t = 0; t < r.length; t++) {
                              var n = r[t]
                              ;(n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                          })(e.prototype, r),
                        e
                      )
                    })()
                  r.default = i
                },
                "./src/const.js": function(e, r, t) {
                  Object.defineProperty(r, "__esModule", {
                    value: !0,
                  }),
                    (r.CLIENT_MASTER = void 0),
                    (r.CLIENT_MASTER = "__MASTER__")
                },
                "./src/index.js": function(e, r, t) {
                  Object.defineProperty(r, "__esModule", {
                    value: !0,
                  })
                  var n = {
                    LocalTransport: !0,
                    WebSocketTransport: !0,
                    Broker: !0,
                  }
                  Object.defineProperty(r, "LocalTransport", {
                    enumerable: !0,
                    get: function() {
                      return o.default
                    },
                  }),
                    Object.defineProperty(r, "WebSocketTransport", {
                      enumerable: !0,
                      get: function() {
                        return i.default
                      },
                    }),
                    Object.defineProperty(r, "Broker", {
                      enumerable: !0,
                      get: function() {
                        return s.default
                      },
                    })
                  var o = u(t("./src/transport/local.js")),
                    i = u(t("./src/transport/socket.js")),
                    s = u(t("./src/broker/index.js")),
                    c = t("./src/signal.js")
                  Object.keys(c).forEach(function(e) {
                    "default" !== e &&
                      "__esModule" !== e &&
                      (Object.prototype.hasOwnProperty.call(n, e) ||
                        Object.defineProperty(r, e, {
                          enumerable: !0,
                          get: function() {
                            return c[e]
                          },
                        }))
                  })
                  var a = t("./src/const.js")
                  function u(e) {
                    return e && e.__esModule ? e : { default: e }
                  }
                  Object.keys(a).forEach(function(e) {
                    "default" !== e &&
                      "__esModule" !== e &&
                      (Object.prototype.hasOwnProperty.call(n, e) ||
                        Object.defineProperty(r, e, {
                          enumerable: !0,
                          get: function() {
                            return a[e]
                          },
                        }))
                  })
                },
                "./src/signal.js": function(e, r, t) {
                  Object.defineProperty(r, "__esModule", {
                    value: !0,
                  }),
                    (r.Signal = void 0)
                  var n = (function() {
                    function e() {
                      var r = this
                      !(function(e, r) {
                        if (!(e instanceof r))
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
                            r._subscribers.indexOf(e) > -1 ||
                              r._subscribers.push(e)
                          },
                        }),
                        Object.defineProperty(this, "unsubscribe", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            var t = r._subscribers.indexOf(e)
                            t < 0 || r._subscribers.splice(t, 1)
                          },
                        })
                    }
                    var r
                    return (
                      (r = [
                        {
                          key: "dispatch",
                          value: function(e) {
                            var r = !0,
                              t = !1,
                              n = void 0
                            try {
                              for (
                                var o,
                                  i = this._subscribers[
                                    Symbol.iterator
                                  ]();
                                !(r = (o = i.next()).done);
                                r = !0
                              )
                                (0, o.value)(e)
                            } catch (e) {
                              ;(t = !0), (n = e)
                            } finally {
                              try {
                                r || null == i.return || i.return()
                              } finally {
                                if (t) throw n
                              }
                            }
                          },
                        },
                      ]) &&
                        (function(e, r) {
                          for (var t = 0; t < r.length; t++) {
                            var n = r[t]
                            ;(n.enumerable = n.enumerable || !1),
                              (n.configurable = !0),
                              "value" in n && (n.writable = !0),
                              Object.defineProperty(e, n.key, n)
                          }
                        })(e.prototype, r),
                      e
                    )
                  })()
                  r.Signal = n
                },
                "./src/transport/local.js": function(e, r, t) {
                  function n(e, r) {
                    for (var t = 0; t < r.length; t++) {
                      var n = r[t]
                      ;(n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                  }
                  Object.defineProperty(r, "__esModule", {
                    value: !0,
                  }),
                    (r.default = void 0)
                  var o = (function() {
                    function e() {
                      var r = this
                      !(function(e, r) {
                        if (!(e instanceof r))
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
                            r._closed ||
                              r._subscribers.indexOf(e) > -1 ||
                              r._subscribers.push(e)
                          },
                        }),
                        Object.defineProperty(this, "unsubscribe", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            var t = r._subscribers.indexOf(e)
                            ;-1 !== t && r._subscribers.splice(t, 1)
                          },
                        }),
                        Object.defineProperty(this, "send", {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          value: function(e) {
                            if (!r._closed)
                              for (
                                var t = 0;
                                t < r._subscribers.length;
                                t++
                              )
                                r._subscribers[t](e)
                          },
                        })
                    }
                    var r, t, o
                    return (
                      (r = e),
                      (o = [
                        {
                          key: "create",
                          value: function() {
                            var r = new e(),
                              t = new e(),
                              n = r.send
                            return (
                              (r.send = t.send.bind(t)),
                              (t.send = n.bind(r)),
                              { left: r, right: t }
                            )
                          },
                        },
                      ]),
                      (t = [
                        {
                          key: "close",
                          value: function() {
                            ;(this._closed = !0),
                              (this._subscribers = [])
                          },
                        },
                      ]) && n(r.prototype, t),
                      o && n(r, o),
                      e
                    )
                  })()
                  r.default = o
                },
                "./src/transport/socket.js": function(e, r, t) {
                  Object.defineProperty(r, "__esModule", {
                    value: !0,
                  }),
                    (r.default = void 0)
                  var n = JSON.stringify,
                    o = JSON.parse,
                    i = (function() {
                      function e(r) {
                        var t = this
                        !(function(e, r) {
                          if (!(e instanceof r))
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
                              t._open = !0
                            },
                          }),
                          Object.defineProperty(this, "_onMessage", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function(e) {
                              if (e.data)
                                for (
                                  var r = o(e.data), n = 0;
                                  n < t._subscribers.length;
                                  n++
                                )
                                  t._subscribers[n](r)
                            },
                          }),
                          Object.defineProperty(this, "_onClose", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function() {
                              for (
                                var e = { type: "TRANSPORT_CLOSE" },
                                  r = 0;
                                r < t._subscribers.length;
                                r++
                              )
                                t._subscribers[r](e)
                            },
                          }),
                          (this._socket = r),
                          1 === r.readyState
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
                      var r
                      return (
                        (r = [
                          {
                            key: "_flush",
                            value: function() {
                              for (
                                var e;
                                (e = this._buffer.shift());

                              )
                                this._socket.send(n(e))
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
                              var r = this._subscribers.indexOf(e)
                              ;-1 !== r &&
                                this._subscribers.splice(r, 1)
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
                          (function(e, r) {
                            for (var t = 0; t < r.length; t++) {
                              var n = r[t]
                              ;(n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                          })(e.prototype, r),
                        e
                      )
                    })()
                  r.default = i
                },
                crypto: function(e, r) {
                  e.exports = t(
                    "../../node_modules/node-libs-browser/mock/empty.js",
                  )
                },
              })
            }),
              "object" == u(r) && "object" == u(o)
                ? (o.exports = a())
                : ((s = []),
                  void 0 ===
                    (c =
                      "function" == typeof (i = a)
                        ? i.apply(r, s)
                        : i) || (o.exports = c))
          }.call(
            this,
            t("../../node_modules/webpack/buildin/global.js"),
            t("../../node_modules/process/browser.js"),
            t("../../node_modules/webpack/buildin/module.js")(e),
          ))
        },
        "./node_modules/@babel/runtime/regenerator/index.js": function(
          e,
          r,
          t,
        ) {
          e.exports = t(
            "./node_modules/regenerator-runtime/runtime-module.js",
          )
        },
        "./node_modules/regenerator-runtime/runtime-module.js": function(
          e,
          r,
          t,
        ) {
          var n =
              (function() {
                return this
              })() || Function("return this")(),
            o =
              n.regeneratorRuntime &&
              Object.getOwnPropertyNames(n).indexOf(
                "regeneratorRuntime",
              ) >= 0,
            i = o && n.regeneratorRuntime
          if (
            ((n.regeneratorRuntime = void 0),
            (e.exports = t(
              "./node_modules/regenerator-runtime/runtime.js",
            )),
            o)
          )
            n.regeneratorRuntime = i
          else
            try {
              delete n.regeneratorRuntime
            } catch (e) {
              n.regeneratorRuntime = void 0
            }
        },
        "./node_modules/regenerator-runtime/runtime.js": function(
          e,
          r,
        ) {
          !(function(r) {
            "use strict"
            var t,
              n = Object.prototype,
              o = n.hasOwnProperty,
              i = "function" == typeof Symbol ? Symbol : {},
              s = i.iterator || "@@iterator",
              c = i.asyncIterator || "@@asyncIterator",
              a = i.toStringTag || "@@toStringTag",
              u = "object" == typeof e,
              l = r.regeneratorRuntime
            if (l) u && (e.exports = l)
            else {
              ;(l = r.regeneratorRuntime = u
                ? e.exports
                : {}).wrap = j
              var d = "suspendedStart",
                f = "suspendedYield",
                p = "executing",
                b = "completed",
                h = {},
                m = {}
              m[s] = function() {
                return this
              }
              var y = Object.getPrototypeOf,
                _ = y && y(y(L([])))
              _ && _ !== n && o.call(_, s) && (m = _)
              var v = (O.prototype = g.prototype = Object.create(m))
              ;(x.prototype = v.constructor = O),
                (O.constructor = x),
                (O[a] = x.displayName = "GeneratorFunction"),
                (l.isGeneratorFunction = function(e) {
                  var r = "function" == typeof e && e.constructor
                  return (
                    !!r &&
                    (r === x ||
                      "GeneratorFunction" ===
                        (r.displayName || r.name))
                  )
                }),
                (l.mark = function(e) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, O)
                      : ((e.__proto__ = O),
                        a in e || (e[a] = "GeneratorFunction")),
                    (e.prototype = Object.create(v)),
                    e
                  )
                }),
                (l.awrap = function(e) {
                  return { __await: e }
                }),
                P(C.prototype),
                (C.prototype[c] = function() {
                  return this
                }),
                (l.AsyncIterator = C),
                (l.async = function(e, r, t, n) {
                  var o = new C(j(e, r, t, n))
                  return l.isGeneratorFunction(r)
                    ? o
                    : o.next().then(function(e) {
                        return e.done ? e.value : o.next()
                      })
                }),
                P(v),
                (v[a] = "Generator"),
                (v[s] = function() {
                  return this
                }),
                (v.toString = function() {
                  return "[object Generator]"
                }),
                (l.keys = function(e) {
                  var r = []
                  for (var t in e) r.push(t)
                  return (
                    r.reverse(),
                    function t() {
                      for (; r.length; ) {
                        var n = r.pop()
                        if (n in e)
                          return (t.value = n), (t.done = !1), t
                      }
                      return (t.done = !0), t
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
                      (this.sent = this._sent = t),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = t),
                      this.tryEntries.forEach(T),
                      !e)
                    )
                      for (var r in this)
                        "t" === r.charAt(0) &&
                          o.call(this, r) &&
                          !isNaN(+r.slice(1)) &&
                          (this[r] = t)
                  },
                  stop: function() {
                    this.done = !0
                    var e = this.tryEntries[0].completion
                    if ("throw" === e.type) throw e.arg
                    return this.rval
                  },
                  dispatchException: function(e) {
                    if (this.done) throw e
                    var r = this
                    function n(n, o) {
                      return (
                        (c.type = "throw"),
                        (c.arg = e),
                        (r.next = n),
                        o && ((r.method = "next"), (r.arg = t)),
                        !!o
                      )
                    }
                    for (
                      var i = this.tryEntries.length - 1;
                      i >= 0;
                      --i
                    ) {
                      var s = this.tryEntries[i],
                        c = s.completion
                      if ("root" === s.tryLoc) return n("end")
                      if (s.tryLoc <= this.prev) {
                        var a = o.call(s, "catchLoc"),
                          u = o.call(s, "finallyLoc")
                        if (a && u) {
                          if (this.prev < s.catchLoc)
                            return n(s.catchLoc, !0)
                          if (this.prev < s.finallyLoc)
                            return n(s.finallyLoc)
                        } else if (a) {
                          if (this.prev < s.catchLoc)
                            return n(s.catchLoc, !0)
                        } else {
                          if (!u)
                            throw new Error(
                              "try statement without catch or finally",
                            )
                          if (this.prev < s.finallyLoc)
                            return n(s.finallyLoc)
                        }
                      }
                    }
                  },
                  abrupt: function(e, r) {
                    for (
                      var t = this.tryEntries.length - 1;
                      t >= 0;
                      --t
                    ) {
                      var n = this.tryEntries[t]
                      if (
                        n.tryLoc <= this.prev &&
                        o.call(n, "finallyLoc") &&
                        this.prev < n.finallyLoc
                      ) {
                        var i = n
                        break
                      }
                    }
                    i &&
                      ("break" === e || "continue" === e) &&
                      i.tryLoc <= r &&
                      r <= i.finallyLoc &&
                      (i = null)
                    var s = i ? i.completion : {}
                    return (
                      (s.type = e),
                      (s.arg = r),
                      i
                        ? ((this.method = "next"),
                          (this.next = i.finallyLoc),
                          h)
                        : this.complete(s)
                    )
                  },
                  complete: function(e, r) {
                    if ("throw" === e.type) throw e.arg
                    return (
                      "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type &&
                            r &&
                            (this.next = r),
                      h
                    )
                  },
                  finish: function(e) {
                    for (
                      var r = this.tryEntries.length - 1;
                      r >= 0;
                      --r
                    ) {
                      var t = this.tryEntries[r]
                      if (t.finallyLoc === e)
                        return (
                          this.complete(t.completion, t.afterLoc),
                          T(t),
                          h
                        )
                    }
                  },
                  catch: function(e) {
                    for (
                      var r = this.tryEntries.length - 1;
                      r >= 0;
                      --r
                    ) {
                      var t = this.tryEntries[r]
                      if (t.tryLoc === e) {
                        var n = t.completion
                        if ("throw" === n.type) {
                          var o = n.arg
                          T(t)
                        }
                        return o
                      }
                    }
                    throw new Error("illegal catch attempt")
                  },
                  delegateYield: function(e, r, n) {
                    return (
                      (this.delegate = {
                        iterator: L(e),
                        resultName: r,
                        nextLoc: n,
                      }),
                      "next" === this.method && (this.arg = t),
                      h
                    )
                  },
                })
            }
            function j(e, r, t, n) {
              var o = r && r.prototype instanceof g ? r : g,
                i = Object.create(o.prototype),
                s = new S(n || [])
              return (
                (i._invoke = (function(e, r, t) {
                  var n = d
                  return function(o, i) {
                    if (n === p)
                      throw new Error("Generator is already running")
                    if (n === b) {
                      if ("throw" === o) throw i
                      return M()
                    }
                    for (t.method = o, t.arg = i; ; ) {
                      var s = t.delegate
                      if (s) {
                        var c = E(s, t)
                        if (c) {
                          if (c === h) continue
                          return c
                        }
                      }
                      if ("next" === t.method)
                        t.sent = t._sent = t.arg
                      else if ("throw" === t.method) {
                        if (n === d) throw ((n = b), t.arg)
                        t.dispatchException(t.arg)
                      } else
                        "return" === t.method &&
                          t.abrupt("return", t.arg)
                      n = p
                      var a = w(e, r, t)
                      if ("normal" === a.type) {
                        if (((n = t.done ? b : f), a.arg === h))
                          continue
                        return { value: a.arg, done: t.done }
                      }
                      "throw" === a.type &&
                        ((n = b),
                        (t.method = "throw"),
                        (t.arg = a.arg))
                    }
                  }
                })(e, t, s)),
                i
              )
            }
            function w(e, r, t) {
              try {
                return { type: "normal", arg: e.call(r, t) }
              } catch (e) {
                return { type: "throw", arg: e }
              }
            }
            function g() {}
            function x() {}
            function O() {}
            function P(e) {
              ;["next", "throw", "return"].forEach(function(r) {
                e[r] = function(e) {
                  return this._invoke(r, e)
                }
              })
            }
            function C(e) {
              var r
              this._invoke = function(t, n) {
                function i() {
                  return new Promise(function(r, i) {
                    !(function r(t, n, i, s) {
                      var c = w(e[t], e, n)
                      if ("throw" !== c.type) {
                        var a = c.arg,
                          u = a.value
                        return u &&
                          "object" == typeof u &&
                          o.call(u, "__await")
                          ? Promise.resolve(u.__await).then(
                              function(e) {
                                r("next", e, i, s)
                              },
                              function(e) {
                                r("throw", e, i, s)
                              },
                            )
                          : Promise.resolve(u).then(function(e) {
                              ;(a.value = e), i(a)
                            }, s)
                      }
                      s(c.arg)
                    })(t, n, r, i)
                  })
                }
                return (r = r ? r.then(i, i) : i())
              }
            }
            function E(e, r) {
              var n = e.iterator[r.method]
              if (n === t) {
                if (((r.delegate = null), "throw" === r.method)) {
                  if (
                    e.iterator.return &&
                    ((r.method = "return"),
                    (r.arg = t),
                    E(e, r),
                    "throw" === r.method)
                  )
                    return h
                  ;(r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a 'throw' method",
                    ))
                }
                return h
              }
              var o = w(n, e.iterator, r.arg)
              if ("throw" === o.type)
                return (
                  (r.method = "throw"),
                  (r.arg = o.arg),
                  (r.delegate = null),
                  h
                )
              var i = o.arg
              return i
                ? i.done
                  ? ((r[e.resultName] = i.value),
                    (r.next = e.nextLoc),
                    "return" !== r.method &&
                      ((r.method = "next"), (r.arg = t)),
                    (r.delegate = null),
                    h)
                  : i
                : ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "iterator result is not an object",
                  )),
                  (r.delegate = null),
                  h)
            }
            function k(e) {
              var r = { tryLoc: e[0] }
              1 in e && (r.catchLoc = e[1]),
                2 in e &&
                  ((r.finallyLoc = e[2]), (r.afterLoc = e[3])),
                this.tryEntries.push(r)
            }
            function T(e) {
              var r = e.completion || {}
              ;(r.type = "normal"), delete r.arg, (e.completion = r)
            }
            function S(e) {
              ;(this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(k, this),
                this.reset(!0)
            }
            function L(e) {
              if (e) {
                var r = e[s]
                if (r) return r.call(e)
                if ("function" == typeof e.next) return e
                if (!isNaN(e.length)) {
                  var n = -1,
                    i = function r() {
                      for (; ++n < e.length; )
                        if (o.call(e, n))
                          return (r.value = e[n]), (r.done = !1), r
                      return (r.value = t), (r.done = !0), r
                    }
                  return (i.next = i)
                }
              }
              return { next: M }
            }
            function M() {
              return { value: t, done: !0 }
            }
          })(
            (function() {
              return this
            })() || Function("return this")(),
          )
        },
        "./node_modules/shortid/index.js": function(e, r, t) {
          "use strict"
          e.exports = t("./node_modules/shortid/lib/index.js")
        },
        "./node_modules/shortid/lib/alphabet.js": function(e, r, t) {
          "use strict"
          var n,
            o,
            i,
            s = t(
              "./node_modules/shortid/lib/random/random-from-seed.js",
            ),
            c =
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
          function a() {
            i = !1
          }
          function u(e) {
            if (e) {
              if (e !== n) {
                if (e.length !== c.length)
                  throw new Error(
                    "Custom alphabet for shortid must be " +
                      c.length +
                      " unique characters. You submitted " +
                      e.length +
                      " characters: " +
                      e,
                  )
                var r = e.split("").filter(function(e, r, t) {
                  return r !== t.lastIndexOf(e)
                })
                if (r.length)
                  throw new Error(
                    "Custom alphabet for shortid must be " +
                      c.length +
                      " unique characters. These characters were not unique: " +
                      r.join(", "),
                  )
                ;(n = e), a()
              }
            } else n !== c && ((n = c), a())
          }
          function l() {
            return (
              i ||
              (i = (function() {
                n || u(c)
                for (
                  var e, r = n.split(""), t = [], o = s.nextValue();
                  r.length > 0;

                )
                  (o = s.nextValue()),
                    (e = Math.floor(o * r.length)),
                    t.push(r.splice(e, 1)[0])
                return t.join("")
              })())
            )
          }
          e.exports = {
            characters: function(e) {
              return u(e), n
            },
            seed: function(e) {
              s.seed(e), o !== e && (a(), (o = e))
            },
            lookup: function(e) {
              return l()[e]
            },
            shuffled: l,
          }
        },
        "./node_modules/shortid/lib/build.js": function(e, r, t) {
          "use strict"
          var n,
            o,
            i = t("./node_modules/shortid/lib/encode.js"),
            s = t("./node_modules/shortid/lib/alphabet.js")
          e.exports = function(e) {
            var r = "",
              t = Math.floor(0.001 * (Date.now() - 1459707606518))
            return (
              t === o ? n++ : ((n = 0), (o = t)),
              (r += i(s.lookup, 6)),
              (r += i(s.lookup, e)),
              n > 0 && (r += i(s.lookup, n)),
              (r += i(s.lookup, t))
            )
          }
        },
        "./node_modules/shortid/lib/decode.js": function(e, r, t) {
          "use strict"
          var n = t("./node_modules/shortid/lib/alphabet.js")
          e.exports = function(e) {
            var r = n.shuffled()
            return {
              version: 15 & r.indexOf(e.substr(0, 1)),
              worker: 15 & r.indexOf(e.substr(1, 1)),
            }
          }
        },
        "./node_modules/shortid/lib/encode.js": function(e, r, t) {
          "use strict"
          var n = t(
            "./node_modules/shortid/lib/random/random-byte-browser.js",
          )
          e.exports = function(e, r) {
            for (var t, o = 0, i = ""; !t; )
              (i += e(((r >> (4 * o)) & 15) | n())),
                (t = r < Math.pow(16, o + 1)),
                o++
            return i
          }
        },
        "./node_modules/shortid/lib/index.js": function(e, r, t) {
          "use strict"
          var n = t("./node_modules/shortid/lib/alphabet.js"),
            o = (t("./node_modules/shortid/lib/encode.js"),
            t("./node_modules/shortid/lib/decode.js")),
            i = t("./node_modules/shortid/lib/build.js"),
            s = t("./node_modules/shortid/lib/is-valid.js"),
            c =
              t(
                "./node_modules/shortid/lib/util/cluster-worker-id-browser.js",
              ) || 0
          function a() {
            return i(c)
          }
          ;(e.exports = a),
            (e.exports.generate = a),
            (e.exports.seed = function(r) {
              return n.seed(r), e.exports
            }),
            (e.exports.worker = function(r) {
              return (c = r), e.exports
            }),
            (e.exports.characters = function(e) {
              return void 0 !== e && n.characters(e), n.shuffled()
            }),
            (e.exports.decode = o),
            (e.exports.isValid = s)
        },
        "./node_modules/shortid/lib/is-valid.js": function(e, r, t) {
          "use strict"
          var n = t("./node_modules/shortid/lib/alphabet.js")
          e.exports = function(e) {
            if (!e || "string" != typeof e || e.length < 6) return !1
            for (
              var r = n.characters(), t = e.length, o = 0;
              o < t;
              o++
            )
              if (-1 === r.indexOf(e[o])) return !1
            return !0
          }
        },
        "./node_modules/shortid/lib/random/random-byte-browser.js": function(
          e,
          r,
          t,
        ) {
          "use strict"
          var n =
            "object" == typeof window &&
            (window.crypto || window.msCrypto)
          e.exports = function() {
            if (!n || !n.getRandomValues)
              return 48 & Math.floor(256 * Math.random())
            var e = new Uint8Array(1)
            return n.getRandomValues(e), 48 & e[0]
          }
        },
        "./node_modules/shortid/lib/random/random-from-seed.js": function(
          e,
          r,
          t,
        ) {
          "use strict"
          var n = 1
          e.exports = {
            nextValue: function() {
              return (n = (9301 * n + 49297) % 233280) / 233280
            },
            seed: function(e) {
              n = e
            },
          }
        },
        "./node_modules/shortid/lib/util/cluster-worker-id-browser.js": function(
          e,
          r,
          t,
        ) {
          "use strict"
          e.exports = 0
        },
        "./node_modules/wrtc/lib/browser.js": function(e, r, t) {
          "use strict"
          ;(r.RTCIceCandidate =
            window.mozRTCIceCandidate ||
            window.webkitRTCIceCandidate ||
            window.RTCIceCandidate),
            (r.RTCPeerConnection =
              window.mozRTCPeerConnection ||
              window.webkitRTCPeerConnection ||
              window.RTCPeerConnection),
            (r.RTCSessionDescription =
              window.mozRTCSessionDescription ||
              window.webkitRTCSessionDescription ||
              window.RTCSessionDescription)
        },
        "./src/client.js": function(e, r, t) {
          "use strict"
          Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "RTCConnectionProvider", {
              enumerable: !0,
              get: function() {
                return s.RTCConnectionProvider
              },
            }),
            (r.Client = void 0)
          var n,
            o =
              (n = t(
                "./node_modules/@babel/runtime/regenerator/index.js",
              )) && n.__esModule
                ? n
                : { default: n },
            i = t("../protocol/dist/index.js"),
            s = t("./src/provider/web-rtc/index.js")
          function c(e) {
            return (
              (function(e) {
                if (Array.isArray(e)) {
                  for (
                    var r = 0, t = new Array(e.length);
                    r < e.length;
                    r++
                  )
                    t[r] = e[r]
                  return t
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
          function u(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          var l = (function() {
            function e(r) {
              var t,
                n,
                o = this
              if (
                ((function(e, r) {
                  if (!(e instanceof r))
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
                r.provider)
              )
                (t = r.provider), (n = r.transport)
              else {
                var c = r.url,
                  a =
                    void 0 === c
                      ? "ws://"
                          .concat(location.hostname, ":")
                          .concat(location.port)
                      : c
                ;(a = a.replace(/^http/, "ws")).indexOf("ws") < 0 &&
                  (a = "ws://".concat(a)),
                  (n = new i.WebSocketTransport(new WebSocket(a))),
                  (t = new s.RTCConnectionProvider({
                    transport: n,
                    onConnection: function(e) {
                      return o.connections.dispatch(e)
                    },
                  }))
              }
              ;(this._provider = t),
                (this._route = new Promise(function(e) {
                  n.subscribe(function r(t) {
                    "ROUTE" === t.type &&
                      (e(t.route), n.unsubscribe(r))
                  })
                })),
                "undefined" != typeof window &&
                  window.addEventListener("beforeunload", function() {
                    n.close()
                  })
            }
            var r, t, n, l
            return (
              (r = e),
              (t = [
                {
                  key: "route",
                  value: function() {
                    return this._route
                  },
                },
                {
                  key: "connect",
                  value: ((n = o.default.mark(function e() {
                    var r,
                      t,
                      n,
                      s,
                      u = arguments
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t =
                                  u.length > 0 && void 0 !== u[0]
                                    ? u[0]
                                    : i.CLIENT_MASTER),
                                (n = u.length > 1 ? u[1] : void 0),
                                (s =
                                  "object" === a(t) && null !== t
                                    ? [i.CLIENT_MASTER, t]
                                    : "object" === a(n) && null !== n
                                      ? [t, n]
                                      : [t]),
                                (e.next = 5),
                                (r = this._provider).create.apply(
                                  r,
                                  c(s),
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
                      r = arguments
                    return new Promise(function(t, o) {
                      var i = n.apply(e, r)
                      function s(e, r) {
                        try {
                          var n = i[e](r),
                            s = n.value
                        } catch (e) {
                          return void o(e)
                        }
                        n.done ? t(s) : Promise.resolve(s).then(c, a)
                      }
                      function c(e) {
                        s("next", e)
                      }
                      function a(e) {
                        s("throw", e)
                      }
                      c()
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
              ]) && u(r.prototype, t),
              e
            )
          })()
          r.Client = l
        },
        "./src/index.js": function(e, r, t) {
          "use strict"
          Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "Client", {
              enumerable: !0,
              get: function() {
                return o.Client
              },
            }),
            Object.defineProperty(r, "RTCConnectionProvider", {
              enumerable: !0,
              get: function() {
                return i.default
              },
            })
          var n,
            o = t("./src/client.js"),
            i =
              (n = t(
                "./src/provider/web-rtc/rtc-connection-provider.js",
              )) && n.__esModule
                ? n
                : { default: n }
        },
        "./src/provider/web-rtc/index.js": function(e, r, t) {
          "use strict"
          Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "RTCConnectionProvider", {
              enumerable: !0,
              get: function() {
                return o.default
              },
            })
          var n,
            o =
              (n = t(
                "./src/provider/web-rtc/rtc-connection-provider.js",
              )) && n.__esModule
                ? n
                : { default: n }
        },
        "./src/provider/web-rtc/rtc-channel.js": function(e, r, t) {
          "use strict"
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = void 0)
          var n = t("../protocol/dist/index.js")
          function o(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          var i = (function() {
            function e(r) {
              var t = this
              !(function(e, r) {
                if (!(e instanceof r))
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
                  value: new n.Signal(),
                }),
                Object.defineProperty(this, "errors", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: new n.Signal(),
                }),
                Object.defineProperty(this, "messages", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: new n.Signal(),
                }),
                Object.defineProperty(this, "_onMessage", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function(e) {
                    return t.messages.dispatch(e.data)
                  },
                }),
                Object.defineProperty(this, "_onError", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function(e) {
                    return t.errors.dispatch({ error: e.message })
                  },
                }),
                Object.defineProperty(this, "send", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function(e) {
                    "closing" !== t._dataChannel.readyState &&
                      "closed" !== t._dataChannel.readyState &&
                      t._dataChannel.send(e)
                  },
                })
              var o = r.dataChannel
              ;(this._dataChannel = o),
                this._dataChannel.addEventListener(
                  "message",
                  this._onMessage,
                ),
                this._dataChannel.addEventListener(
                  "close",
                  function() {
                    return t.close()
                  },
                ),
                this._dataChannel.addEventListener(
                  "error",
                  this._onError,
                ),
                (this.id = o.label)
            }
            var r, t
            return (
              (r = e),
              (t = [
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
              ]) && o(r.prototype, t),
              e
            )
          })()
          r.default = i
        },
        "./src/provider/web-rtc/rtc-connection-provider.js": function(
          e,
          r,
          t,
        ) {
          "use strict"
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = void 0)
          var n = c(
              t("./node_modules/@babel/runtime/regenerator/index.js"),
            ),
            o = c(t("./node_modules/shortid/index.js")),
            i = t("./node_modules/wrtc/lib/browser.js"),
            s = c(t("./src/provider/web-rtc/rtc-peer.js"))
          function c(e) {
            return e && e.__esModule ? e : { default: e }
          }
          function a(e) {
            return function() {
              var r = this,
                t = arguments
              return new Promise(function(n, o) {
                var i = e.apply(r, t)
                function s(e, r) {
                  try {
                    var t = i[e](r),
                      s = t.value
                  } catch (e) {
                    return void o(e)
                  }
                  t.done ? n(s) : Promise.resolve(s).then(c, a)
                }
                function c(e) {
                  s("next", e)
                }
                function a(e) {
                  s("throw", e)
                }
                c()
              })
            }
          }
          function u(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
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
              function e(r) {
                var t,
                  o = this
                !(function(e, r) {
                  if (!(e instanceof r))
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
                    value: ((t = a(
                      n.default.mark(function e(r) {
                        var t, s, c, a, u, l, d, f
                        return n.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  ;(e.t0 = r.type),
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
                                    ((t = r.src),
                                    (s = r.payload.ice),
                                    "string" == typeof t)
                                  ) {
                                    e.next = 6
                                    break
                                  }
                                  return e.abrupt("return")
                                case 6:
                                  if ((c = o._peers[t])) {
                                    e.next = 9
                                    break
                                  }
                                  throw new Error(
                                    "Received ICE candidate for unestablished peer",
                                  )
                                case 9:
                                  return (
                                    c.addIceCandidate(s),
                                    e.abrupt("break", 28)
                                  )
                                case 11:
                                  ;(a = r.src),
                                    (u = r.payload.sdp),
                                    (l =
                                      o._peers[a] || o._addPeer(a)),
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
                                    "OFFER" !== r.type)
                                  ) {
                                    e.next = 26
                                    break
                                  }
                                  return (e.next = 24), l.answer()
                                case 24:
                                  ;(f = e.sent), o._onPeerSDP(f, a)
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
                      return t.apply(this, arguments)
                    }),
                  }),
                  Object.defineProperty(this, "_onPeerSDP", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e, r) {
                      var t,
                        n = { sdp: e }
                      ;(t =
                        "offer" === e.type
                          ? {
                              type: "OFFER_CLIENT",
                              pid: r,
                              payload: n,
                            }
                          : {
                              type: "ANSWER_CLIENT",
                              pid: r,
                              payload: n,
                            }),
                        o._transport.send(t)
                    },
                  }),
                  Object.defineProperty(this, "_onPeerICE", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e, r) {
                      o._transport.send({
                        type: "ICE_CLIENT",
                        pid: r,
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
                var s = r.transport,
                  c = r.onConnection,
                  u = void 0 === c ? function() {} : c
                ;(this._transport = s),
                  (this._onPeerChannel = u),
                  this._transport.subscribe(this._onMessage)
              }
              var r, t, c
              return (
                (r = e),
                (t = [
                  {
                    key: "create",
                    value: ((c = a(
                      n.default.mark(function e(r, t) {
                        var i, s, c, a
                        return n.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = (0, o.default)()),
                                    (s =
                                      this._peers[r] ||
                                      this._addPeer(r)),
                                    (c = s.channel(i, t)),
                                    (e.next = 5),
                                    s.offer()
                                  )
                                case 5:
                                  return (
                                    (a = e.sent),
                                    this._onPeerSDP(a, r),
                                    (e.next = 9),
                                    c
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
                    function(e, r) {
                      return c.apply(this, arguments)
                    }),
                  },
                  {
                    key: "_addPeer",
                    value: function(e) {
                      var r = this
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
                      var t = new s.default({
                        onChannel: this._onPeerChannel,
                        onClose: function() {
                          return r._onPeerClose(e)
                        },
                        onICE: function(t) {
                          return r._onPeerICE(t, e)
                        },
                        peerConnection: new i.RTCPeerConnection(l),
                      })
                      return (this._peers[e] = t), t
                    },
                  },
                  {
                    key: "close",
                    value: function(e) {
                      var r = this._peers[e]
                      r && r.close()
                    },
                  },
                ]) && u(r.prototype, t),
                e
              )
            })()
          r.default = d
        },
        "./src/provider/web-rtc/rtc-peer.js": function(e, r, t) {
          "use strict"
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = void 0),
            t("../protocol/dist/index.js")
          var n,
            o =
              (n = t("./src/provider/web-rtc/rtc-channel.js")) &&
              n.__esModule
                ? n
                : { default: n }
          function i(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          var s = { ordered: !1, reliable: !1 },
            c = (function() {
              function e(r) {
                var t = this
                !(function(e, r) {
                  if (!(e instanceof r))
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
                        t._peerConnection.setLocalDescription(e)
                      },
                    },
                  ),
                  Object.defineProperty(this, "_onIceCandidate", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e) {
                      t._onICE(e.candidate)
                    },
                  }),
                  Object.defineProperty(this, "_onDataChannel", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function(e) {
                      var r = e.channel,
                        n = t._channels[r.label]
                      n ||
                        ((n = t._channels[r.label] = new o.default({
                          dataChannel: r,
                        })),
                        t._onChannel(n))
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
                        switch (t._peerConnection.connectionState) {
                          case "disconnected":
                          case "failed":
                          case "closed":
                            t._onClose()
                        }
                      },
                    },
                  )
                var n = r.onChannel,
                  i = r.onClose,
                  s = r.onICE,
                  c = r.peerConnection
                ;(this._onICE = s),
                  (this._onChannel = n),
                  (this._onClose = i),
                  (this._peerConnection = c),
                  this._peerConnection.addEventListener(
                    "close",
                    function() {
                      return t.close()
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
              var r, t
              return (
                (r = e),
                (t = [
                  {
                    key: "channel",
                    value: function(e) {
                      var r = this,
                        t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = this._peerConnection.createDataChannel(
                          e,
                          s,
                        )
                      return (
                        (n.binaryType =
                          t.binaryType || "arraybuffer"),
                        new Promise(function(e) {
                          n.addEventListener("open", function() {
                            var t = (r._channels[
                              n.label
                            ] = new o.default({ dataChannel: n }))
                            e(t), r._onChannel(t)
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
                        .then(function(r) {
                          return e._setLocalDescription(r), r
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
                        .then(function(r) {
                          return e._setLocalDescription(r), r
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
                ]) && i(r.prototype, t),
                e
              )
            })()
          r.default = c
        },
      }))
  },
  "./node_modules/core-js/library/fn/object/define-property.js": function(
    e,
    r,
    t,
  ) {
    t(
      "./node_modules/core-js/library/modules/es6.object.define-property.js",
    )
    var n = t("./node_modules/core-js/library/modules/_core.js")
      .Object
    e.exports = function(e, r, t) {
      return n.defineProperty(e, r, t)
    }
  },
  "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js": function(
    e,
    r,
    t,
  ) {
    t(
      "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
    )
    var n = t("./node_modules/core-js/library/modules/_core.js")
      .Object
    e.exports = function(e, r) {
      return n.getOwnPropertyDescriptor(e, r)
    }
  },
  "./node_modules/core-js/library/modules/_a-function.js": function(
    e,
    r,
  ) {
    e.exports = function(e) {
      if ("function" != typeof e)
        throw TypeError(e + " is not a function!")
      return e
    }
  },
  "./node_modules/core-js/library/modules/_an-object.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_is-object.js")
    e.exports = function(e) {
      if (!n(e)) throw TypeError(e + " is not an object!")
      return e
    }
  },
  "./node_modules/core-js/library/modules/_cof.js": function(e, r) {
    var t = {}.toString
    e.exports = function(e) {
      return t.call(e).slice(8, -1)
    }
  },
  "./node_modules/core-js/library/modules/_core.js": function(e, r) {
    var t = (e.exports = { version: "2.5.3" })
    "number" == typeof __e && (__e = t)
  },
  "./node_modules/core-js/library/modules/_ctx.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_a-function.js")
    e.exports = function(e, r, t) {
      if ((n(e), void 0 === r)) return e
      switch (t) {
        case 1:
          return function(t) {
            return e.call(r, t)
          }
        case 2:
          return function(t, n) {
            return e.call(r, t, n)
          }
        case 3:
          return function(t, n, o) {
            return e.call(r, t, n, o)
          }
      }
      return function() {
        return e.apply(r, arguments)
      }
    }
  },
  "./node_modules/core-js/library/modules/_defined.js": function(
    e,
    r,
  ) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e)
      return e
    }
  },
  "./node_modules/core-js/library/modules/_descriptors.js": function(
    e,
    r,
    t,
  ) {
    e.exports = !t(
      "./node_modules/core-js/library/modules/_fails.js",
    )(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7
          },
        }).a
      )
    })
  },
  "./node_modules/core-js/library/modules/_dom-create.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_is-object.js"),
      o = t("./node_modules/core-js/library/modules/_global.js")
        .document,
      i = n(o) && n(o.createElement)
    e.exports = function(e) {
      return i ? o.createElement(e) : {}
    }
  },
  "./node_modules/core-js/library/modules/_export.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_global.js"),
      o = t("./node_modules/core-js/library/modules/_core.js"),
      i = t("./node_modules/core-js/library/modules/_ctx.js"),
      s = t("./node_modules/core-js/library/modules/_hide.js"),
      c = function(e, r, t) {
        var a,
          u,
          l,
          d = e & c.F,
          f = e & c.G,
          p = e & c.S,
          b = e & c.P,
          h = e & c.B,
          m = e & c.W,
          y = f ? o : o[r] || (o[r] = {}),
          _ = y.prototype,
          v = f ? n : p ? n[r] : (n[r] || {}).prototype
        for (a in (f && (t = r), t))
          ((u = !d && v && void 0 !== v[a]) && a in y) ||
            ((l = u ? v[a] : t[a]),
            (y[a] =
              f && "function" != typeof v[a]
                ? t[a]
                : h && u
                  ? i(l, n)
                  : m && v[a] == l
                    ? (function(e) {
                        var r = function(r, t, n) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e()
                              case 1:
                                return new e(r)
                              case 2:
                                return new e(r, t)
                            }
                            return new e(r, t, n)
                          }
                          return e.apply(this, arguments)
                        }
                        return (r.prototype = e.prototype), r
                      })(l)
                    : b && "function" == typeof l
                      ? i(Function.call, l)
                      : l),
            b &&
              (((y.virtual || (y.virtual = {}))[a] = l),
              e & c.R && _ && !_[a] && s(_, a, l)))
      }
    ;(c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c)
  },
  "./node_modules/core-js/library/modules/_fails.js": function(e, r) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  "./node_modules/core-js/library/modules/_global.js": function(
    e,
    r,
  ) {
    var t = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")())
    "number" == typeof __g && (__g = t)
  },
  "./node_modules/core-js/library/modules/_has.js": function(e, r) {
    var t = {}.hasOwnProperty
    e.exports = function(e, r) {
      return t.call(e, r)
    }
  },
  "./node_modules/core-js/library/modules/_hide.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_object-dp.js"),
      o = t(
        "./node_modules/core-js/library/modules/_property-desc.js",
      )
    e.exports = t(
      "./node_modules/core-js/library/modules/_descriptors.js",
    )
      ? function(e, r, t) {
          return n.f(e, r, o(1, t))
        }
      : function(e, r, t) {
          return (e[r] = t), e
        }
  },
  "./node_modules/core-js/library/modules/_ie8-dom-define.js": function(
    e,
    r,
    t,
  ) {
    e.exports =
      !t("./node_modules/core-js/library/modules/_descriptors.js") &&
      !t("./node_modules/core-js/library/modules/_fails.js")(
        function() {
          return (
            7 !=
            Object.defineProperty(
              t(
                "./node_modules/core-js/library/modules/_dom-create.js",
              )("div"),
              "a",
              {
                get: function() {
                  return 7
                },
              },
            ).a
          )
        },
      )
  },
  "./node_modules/core-js/library/modules/_iobject.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_cof.js")
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return "String" == n(e) ? e.split("") : Object(e)
        }
  },
  "./node_modules/core-js/library/modules/_is-object.js": function(
    e,
    r,
  ) {
    e.exports = function(e) {
      return "object" == typeof e
        ? null !== e
        : "function" == typeof e
    }
  },
  "./node_modules/core-js/library/modules/_object-dp.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_an-object.js"),
      o = t(
        "./node_modules/core-js/library/modules/_ie8-dom-define.js",
      ),
      i = t(
        "./node_modules/core-js/library/modules/_to-primitive.js",
      ),
      s = Object.defineProperty
    r.f = t("./node_modules/core-js/library/modules/_descriptors.js")
      ? Object.defineProperty
      : function(e, r, t) {
          if ((n(e), (r = i(r, !0)), n(t), o))
            try {
              return s(e, r, t)
            } catch (e) {}
          if ("get" in t || "set" in t)
            throw TypeError("Accessors not supported!")
          return "value" in t && (e[r] = t.value), e
        }
  },
  "./node_modules/core-js/library/modules/_object-gopd.js": function(
    e,
    r,
    t,
  ) {
    var n = t(
        "./node_modules/core-js/library/modules/_object-pie.js",
      ),
      o = t(
        "./node_modules/core-js/library/modules/_property-desc.js",
      ),
      i = t("./node_modules/core-js/library/modules/_to-iobject.js"),
      s = t(
        "./node_modules/core-js/library/modules/_to-primitive.js",
      ),
      c = t("./node_modules/core-js/library/modules/_has.js"),
      a = t(
        "./node_modules/core-js/library/modules/_ie8-dom-define.js",
      ),
      u = Object.getOwnPropertyDescriptor
    r.f = t("./node_modules/core-js/library/modules/_descriptors.js")
      ? u
      : function(e, r) {
          if (((e = i(e)), (r = s(r, !0)), a))
            try {
              return u(e, r)
            } catch (e) {}
          if (c(e, r)) return o(!n.f.call(e, r), e[r])
        }
  },
  "./node_modules/core-js/library/modules/_object-pie.js": function(
    e,
    r,
  ) {
    r.f = {}.propertyIsEnumerable
  },
  "./node_modules/core-js/library/modules/_object-sap.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_export.js"),
      o = t("./node_modules/core-js/library/modules/_core.js"),
      i = t("./node_modules/core-js/library/modules/_fails.js")
    e.exports = function(e, r) {
      var t = (o.Object || {})[e] || Object[e],
        s = {}
      ;(s[e] = r(t)),
        n(
          n.S +
            n.F *
              i(function() {
                t(1)
              }),
          "Object",
          s,
        )
    }
  },
  "./node_modules/core-js/library/modules/_property-desc.js": function(
    e,
    r,
  ) {
    e.exports = function(e, r) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: r,
      }
    }
  },
  "./node_modules/core-js/library/modules/_to-iobject.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_iobject.js"),
      o = t("./node_modules/core-js/library/modules/_defined.js")
    e.exports = function(e) {
      return n(o(e))
    }
  },
  "./node_modules/core-js/library/modules/_to-primitive.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_is-object.js")
    e.exports = function(e, r) {
      if (!n(e)) return e
      var t, o
      if (
        r &&
        "function" == typeof (t = e.toString) &&
        !n((o = t.call(e)))
      )
        return o
      if ("function" == typeof (t = e.valueOf) && !n((o = t.call(e))))
        return o
      if (
        !r &&
        "function" == typeof (t = e.toString) &&
        !n((o = t.call(e)))
      )
        return o
      throw TypeError("Can't convert object to primitive value")
    }
  },
  "./node_modules/core-js/library/modules/es6.object.define-property.js": function(
    e,
    r,
    t,
  ) {
    var n = t("./node_modules/core-js/library/modules/_export.js")
    n(
      n.S +
        n.F *
          !t(
            "./node_modules/core-js/library/modules/_descriptors.js",
          ),
      "Object",
      {
        defineProperty: t(
          "./node_modules/core-js/library/modules/_object-dp.js",
        ).f,
      },
    )
  },
  "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js": function(
    e,
    r,
    t,
  ) {
    var n = t(
        "./node_modules/core-js/library/modules/_to-iobject.js",
      ),
      o = t("./node_modules/core-js/library/modules/_object-gopd.js")
        .f
    t("./node_modules/core-js/library/modules/_object-sap.js")(
      "getOwnPropertyDescriptor",
      function() {
        return function(e, r) {
          return o(n(e), r)
        }
      },
    )
  },
  "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js": function(
    e,
    r,
    t,
  ) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 })
    var n,
      o =
        (n = t("./node_modules/react/index.js")) &&
        "object" == typeof n &&
        "default" in n
          ? n.default
          : n,
      i = function(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function")
      },
      s = function(e, r) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return !r || ("object" != typeof r && "function" != typeof r)
          ? e
          : r
      },
      c = (function(e) {
        function r() {
          return i(this, r), s(this, e.apply(this, arguments))
        }
        return (
          (function(e, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof r,
              )
            ;(e.prototype = Object.create(r && r.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              r &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, r)
                  : (e.__proto__ = r))
          })(r, e),
          (r.prototype.render = function() {
            return o.Children.only(this.props.children)
          }),
          r
        )
      })(o.Component)
    ;(r.AppContainer = c),
      (r.hot = function() {
        return function(e) {
          return e
        }
      }),
      (r.areComponentsEqual = function(e, r) {
        return e === r
      }),
      (r.setConfig = function() {})
  },
  "./node_modules/react-hot-loader/index.js": function(e, r, t) {
    "use strict"
    e.exports = t(
      "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js",
    )
  },
  "./node_modules/react/index.js": function(e, r, t) {
    e.exports = t("dll-reference react")(
      "./node_modules/react/index.js",
    )
  },
  "./node_modules/webpack/buildin/module.js": function(e, r) {
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
  "./src/index.js": function(e, r, t) {
    "use strict"
    ;(function(e) {
      var r,
        n = t(
          "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        )(t("./node_modules/@web-udp/client/dist/index.browser.js"))
      ;(r = t("./node_modules/react-hot-loader/index.js")
        .enterModule) && r(e)
      var o,
        i,
        s = new n.Client({
          url: "".concat(window.location.host, "/server"),
        })
      s.connect().then(function(e) {
        console.log(e)
      }),
        (o = t("./node_modules/react-hot-loader/index.js").default),
        (i = t("./node_modules/react-hot-loader/index.js")
          .leaveModule),
        o &&
          (o.register(
            s,
            "client",
            "/Users/ericmcdaniel/Projects/subspace/packages/client/src/index.js",
          ),
          i(e))
    }.call(this, t("./node_modules/webpack/buildin/module.js")(e)))
  },
  "dll-reference react": function(e, r) {
    e.exports = react
  },
})
//# sourceMappingURL=index.js.map
