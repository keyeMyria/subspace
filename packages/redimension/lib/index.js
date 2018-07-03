!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.Redimension = t())
        : (e.Redimension = t())
})(global, function() {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return (
        e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
      )
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && "object" == typeof e && e && e.__esModule)
          return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t]
              }.bind(null, o),
            )
        return r
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
    "./src/index.js": function(e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var r = n("./src/redimension.js").redimension
      t.default = r
    },
    "./src/redimension.js": function(e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.redimension = function(e, t, n, r, s = 64) {
          function f(e, t) {
            i(e, r)
            const n = c(e, r, s),
              o = e.reduce((e, t) => `${e}:${t}`, n)
            return `${o}:${t}`
          }
          return {
            insert: function(r, o) {
              const i = f(r, o)
              return u(e, e => {
                e.zadd(t, 0, i), e.hset(n, o, i)
              })
            },
            remove: function(n, r) {
              const o = f(n, r)
              return e.zremAsync(t, o)
            },
            removeById: async function(r) {
              const o = await e.hgetAsync(n, r)
              if (!o) throw new Error(`Element ${r} not found.`)
              return u(e, e => {
                e.zrem(t, o), e.hdel(n, r)
              })
            },
            update: async function(r, o) {
              const i = f(r, o),
                c = await e.hgetAsync(n, o)
              if (!c) throw new Error(`Element ${o} not found.`)
              return u(e, e => {
                e.zrem(t, c),
                  e.hdel(n, o),
                  e.zadd(t, 0, i),
                  e.hset(n, o, i)
              })
            },
            query: function(n) {
              i(n, r)
              const u = n.map(e => (e[0] < e[1] ? e : [e[1], e[0]])),
                f = u.map(e => e[1] - e[0] + 1)
              let l = Math.min(...f),
                a = 1
              for (; l > 2; ) (l /= 2), (a += 1)
              for (;;) {
                const e = 2 ** a,
                  t = u.map(t => o(t[1] / e) - o(t[0] / e) + 1),
                  n = t.reduce((e, t) => e * t)
                if (n < 20) break
                a += 1
              }
              return (async function(n, u) {
                const i = [],
                  f = [],
                  l = 2 ** u
                for (let e = 0; e < n.length; e++) {
                  const t = n[e]
                  i.push(o(t[0] / l)), f.push(o(t[1] / l))
                }
                const a = [],
                  d = i.slice()
                let p = !0
                for (; p; ) {
                  const e = [],
                    t = []
                  for (let n = 0; n < r; n++)
                    e.push(o(d[n] * l)), t.push(o(e[n] | (l - 1)))
                  a.push([`[${c(e, r, s)}:`, `[${c(t, r, s)}:ÿ`])
                  for (let e = 0; e < r; e++) {
                    if (d[e] !== f[e]) {
                      d[e] += 1
                      break
                    }
                    e === r - 1 ? (p = !1) : (d[e] = i[e])
                  }
                }
                const y = await (function(e, t) {
                    const n = e.batch()
                    return t(n), n.execAsync()
                  })(e, e => {
                    for (let n = 0; n < a.length; n++) {
                      const r = a[n]
                      e.zrangebylex(t, r[0], r[1])
                    }
                  }),
                  h = []
                for (let e = 0; e < y.length; e++) {
                  const t = y[e]
                  for (let e = 0; e < t.length; e++) {
                    const u = t[e],
                      i = u.split(":")
                    let c = !1
                    for (let e = 0; e < r; e++)
                      if (
                        o(i[e + 1]) < n[e][0] ||
                        o(i[e + 1]) > n[e][1]
                      ) {
                        c = !0
                        break
                      }
                    if (!c) {
                      const e = [],
                        t = i[i.length - 1]
                      for (let t = 1; t < i.length - 1; t++)
                        e.push(o(i[t]))
                      h.push([e, t])
                    }
                  }
                }
                return h
              })(u, a)
            },
          }
        })
      const r = (e, t) => e.map((e, n) => [e, t[n]]),
        o = e => parseInt(e, 10)
      function u(e, t) {
        const n = e.multi()
        return t(n), n.execAsync()
      }
      function i(e, t) {
        if (e.length !== t)
          throw new Error(
            `Please always use ${t} dimensions with this index.`,
          )
      }
      function c(e, t, n) {
        const u = (function e(t, n = []) {
          const r = t.length
          let o,
            u = 0
          for (; u < r; u++)
            (o = t[u]), Array.isArray(o) ? e(o, n) : n.push(o)
          return n
        })(
          e.reduce((e, t, o) => {
            const u = t
              .toString(2)
              .padStart(n, "0")
              .split("")
            return 0 === o ? u : r(e, u)
          }, []),
        ).join("")
        return o(u)
          .toString(16)
          .padStart(n * t / 4, "0")
      }
    },
  })
})
//# sourceMappingURL=index.js.map
