!(function(e) {
  var r = {}
  function t(n) {
    if (r[n]) return r[n].exports
    var o = (r[n] = { i: n, l: !1, exports: {} })
    return (
      e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
    )
  }
  ;(t.m = e),
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
    (t.w = {}),
    t((t.s = "./src/index.js"))
})({
  "./src/index.js": function(e, r, t) {
    "use strict"
    var n,
      o = t("http"),
      u = (n = t("shortid")) && n.__esModule ? n : { default: n },
      s = p(t("@web-udp/server")),
      c = p(t("@subspace/core")),
      i = p(t("./src/scheduler.js"))
    function p(e) {
      if (e && e.__esModule) return e
      var r = {}
      if (null != e)
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            var n =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, t)
                : {}
            n.get || n.set
              ? Object.defineProperty(r, t, n)
              : (r[t] = e[t])
          }
      return (r.default = e), r
    }
    var f = new o.Server(),
      a = new s.Server({ server: f }),
      d = (c.createGame({ scheduler: i.create(1 / 60) }),
      { players: {} }),
      l = {}
    a.connections.subscribe(function(e) {
      var r = (0, u.default)()
      ;(l[r] = e), (d.players[r] = { x: 0, y: 0 }), console.log(r)
    }),
      f.listen(process.env.PORT || 3e3)
  },
  "./src/scheduler.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.create = void 0)
    var n = (function(e) {
      if (e && e.__esModule) return e
      var r = {}
      if (null != e)
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
            var n =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, t)
                : {}
            n.get || n.set
              ? Object.defineProperty(r, t, n)
              : (r[t] = e[t])
          }
      return (r.default = e), r
    })(t("./src/util/hrtime.js"))
    r.create = function(e) {
      var r = e * n.NS_PER_SEC,
        t = [0, r],
        o = process.hrtime()
      return function(e) {
        setTimeout(
          (function e(u) {
            return function() {
              var s = process.hrtime(o),
                c = n.sub(s, t),
                i = n.sum(c)
              i < 0
                ? setImmediate(e(u))
                : (u((i + r) / n.NS_PER_SEC),
                  (o = n.add(process.hrtime(), c)))
            }
          })(e),
        )
      }
    }
  },
  "./src/util/hrtime.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.sum = r.sub = r.add = r.NS_PER_SEC = void 0)
    r.NS_PER_SEC = 1e9
    r.add = function(e, r) {
      return [e[0] + r[0], e[1] + r[1]]
    }
    r.sub = function(e, r) {
      return [e[0] - r[0], e[1] - r[1]]
    }
    r.sum = function(e) {
      return 1e9 * e[0] + e[1]
    }
  },
  "@subspace/core": function(e, r) {
    e.exports = require("@subspace/core")
  },
  "@web-udp/server": function(e, r) {
    e.exports = require("@web-udp/server")
  },
  http: function(e, r) {
    e.exports = require("http")
  },
  shortid: function(e, r) {
    e.exports = require("shortid")
  },
})
