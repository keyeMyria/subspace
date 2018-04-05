!(function(e) {
  var r = {}
  function t(n) {
    if (r[n]) return r[n].exports
    var a = (r[n] = { i: n, l: !1, exports: {} })
    return (
      e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports
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
  "./cfg/redis.config.json": function(e) {
    e.exports = {
      port: 6379,
      host: "localhost",
      family: 4,
      db: 0,
      enableReadyCheck: !0,
    }
  },
  "./cfg/server.config.json": function(e) {
    e.exports = { tick_rate: 60, send_rate: 20 }
  },
  "./src/cache/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.SpatialIndex = void 0)
    var a = n(t("./src/cache/spatial-index.js"))
    r.SpatialIndex = a
  },
  "./src/cache/redimension.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.create = void 0)
    var a = n(t("@babel/runtime/helpers/toConsumableArray")),
      i = n(t("@babel/runtime/regenerator")),
      u = n(t("@babel/runtime/helpers/asyncToGenerator")),
      o = function(e) {
        return parseInt(e, 10)
      }
    var s = function(e, r) {
        var t = e.multi()
        return r(t), t.execAsync()
      },
      c = function(e, r) {
        var t = e.batch()
        return r(t), t.execAsync()
      }
    r.create = function(e, r, t, n) {
      var l =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : 64,
        d = function(e) {
          if (e.length !== n)
            throw new Error(
              "Please always use ".concat(
                n,
                " dimensions with this index.",
              ),
            )
        },
        p = function(e) {
          var r = (function e(r) {
            for (
              var t,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                a = r.length,
                i = 0;
              i < a;
              i++
            )
              (t = r[i]), Array.isArray(t) ? e(t, n) : n.push(t)
            return n
          })(
            e.reduce(function(e, r, t) {
              var n = r
                .toString(2)
                .padStart(l, "0")
                .split("")
              return 0 === t
                ? n
                : (function(e, r) {
                    return e.map(function(e, t) {
                      return [e, r[t]]
                    })
                  })(e, n)
            }, []),
          ).join("")
          return o(r)
            .toString(16)
            .padStart(l * n / 4, "0")
        },
        f = function(e, r) {
          d(e)
          var t = p(e),
            n = e.reduce(function(e, r) {
              return "".concat(e, ":").concat(r)
            }, t)
          return "".concat(n, ":").concat(r)
        },
        h = ((S = (0, u.default)(
          i.default.mark(function n(a, u) {
            var o
            return i.default.wrap(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = f(a, u)),
                        n.abrupt(
                          "return",
                          s(e, function(e) {
                            e.zadd(r, 0, o), e.hset(t, u, o)
                          }),
                        )
                      )
                    case 2:
                    case "end":
                      return n.stop()
                  }
              },
              n,
              this,
            )
          }),
        )),
        function(e, r) {
          return S.apply(this, arguments)
        }),
        b = ((g = (0, u.default)(
          i.default.mark(function t(n, a) {
            var u
            return i.default.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (u = f(n, a)),
                        t.abrupt("return", e.zremAsync(r, u))
                      )
                    case 2:
                    case "end":
                      return t.stop()
                  }
              },
              t,
              this,
            )
          }),
        )),
        function(e, r) {
          return g.apply(this, arguments)
        }),
        v = ((_ = (0, u.default)(
          i.default.mark(function n(a) {
            var u
            return i.default.wrap(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), e.hgetAsync(t, a)
                    case 2:
                      if ((u = n.sent)) {
                        n.next = 5
                        break
                      }
                      throw new Error(
                        "Element ".concat(a, " not found."),
                      )
                    case 5:
                      return n.abrupt(
                        "return",
                        s(e, function(e) {
                          e.zrem(r, u), e.hdel(t, a)
                        }),
                      )
                    case 6:
                    case "end":
                      return n.stop()
                  }
              },
              n,
              this,
            )
          }),
        )),
        function(e) {
          return _.apply(this, arguments)
        }),
        m = ((w = (0, u.default)(
          i.default.mark(function n(a, u) {
            var o, c
            return i.default.wrap(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = f(a, u)), (n.next = 3), e.hgetAsync(t, u)
                      )
                    case 3:
                      if ((c = n.sent)) {
                        n.next = 6
                        break
                      }
                      throw new Error(
                        "Element ".concat(u, " not found."),
                      )
                    case 6:
                      return n.abrupt(
                        "return",
                        s(e, function(e) {
                          e.zrem(r, c),
                            e.hdel(t, u),
                            e.zadd(r, 0, o),
                            e.hset(t, u, o)
                        }),
                      )
                    case 7:
                    case "end":
                      return n.stop()
                  }
              },
              n,
              this,
            )
          }),
        )),
        function(e, r) {
          return w.apply(this, arguments)
        }),
        y = ((x = (0, u.default)(
          i.default.mark(function t(a, u) {
            var s,
              l,
              d,
              f,
              h,
              b,
              v,
              m,
              y,
              x,
              w,
              _,
              g,
              S,
              P,
              j,
              k,
              E,
              q,
              R,
              O,
              M,
              T
            return i.default.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      for (
                        s = [], l = [], d = Math.pow(2, u), f = 0;
                        f < a.length;
                        f++
                      )
                        (h = a[f]),
                          s.push(o(h[0] / d)),
                          l.push(o(h[1] / d))
                      ;(b = []), (v = s.slice()), (m = !0)
                    case 7:
                      if (!m) {
                        t.next = 25
                        break
                      }
                      for (y = [], x = [], w = 0; w < n; w++)
                        y.push(o(v[w] * d)), x.push(o(y[w] | (d - 1)))
                      b.push([
                        "[".concat(p(y), ":"),
                        "[".concat(p(x), ":ÿ"),
                      ]),
                        (_ = 0)
                    case 13:
                      if (!(_ < n)) {
                        t.next = 23
                        break
                      }
                      if (v[_] === l[_]) {
                        t.next = 19
                        break
                      }
                      return (v[_] += 1), t.abrupt("break", 23)
                    case 19:
                      _ === n - 1 ? (m = !1) : (v[_] = s[_])
                    case 20:
                      _++, (t.next = 13)
                      break
                    case 23:
                      t.next = 7
                      break
                    case 25:
                      return (
                        (t.next = 27),
                        c(e, function(e) {
                          for (var t = 0; t < b.length; t++) {
                            var n = b[t]
                            e.zrangebylex(r, n[0], n[1])
                          }
                        })
                      )
                    case 27:
                      ;(g = t.sent), (S = []), (P = 0)
                    case 30:
                      if (!(P < g.length)) {
                        t.next = 52
                        break
                      }
                      ;(j = g[P]), (k = 0)
                    case 33:
                      if (!(k < j.length)) {
                        t.next = 49
                        break
                      }
                      ;(E = j[k]),
                        (q = E.split(":")),
                        (R = !1),
                        (O = 0)
                    case 38:
                      if (!(O < n)) {
                        t.next = 45
                        break
                      }
                      if (
                        !(
                          o(q[O + 1]) < a[O][0] ||
                          o(q[O + 1]) > a[O][1]
                        )
                      ) {
                        t.next = 42
                        break
                      }
                      return (R = !0), t.abrupt("break", 45)
                    case 42:
                      O++, (t.next = 38)
                      break
                    case 45:
                      if (!R) {
                        for (M = [], T = 1; T < q.length - 1; T++)
                          M.push(o(q[T]))
                        M.push(q[q.length - 1]), S.push(M)
                      }
                    case 46:
                      k++, (t.next = 33)
                      break
                    case 49:
                      P++, (t.next = 30)
                      break
                    case 52:
                      return t.abrupt("return", S)
                    case 53:
                    case "end":
                      return t.stop()
                  }
              },
              t,
              this,
            )
          }),
        )),
        function(e, r) {
          return x.apply(this, arguments)
        })
      var x
      var w
      var _
      var g
      var S
      return {
        insert: h,
        remove: b,
        removeById: v,
        update: m,
        query: function(e) {
          d(e)
          for (
            var r = e.map(function(e) {
                return e[0] < e[1] ? e : [e[1], e[0]]
              }),
              t = r.map(function(e) {
                return e[1] - e[0] + 1
              }),
              n = Math.min.apply(Math, (0, a.default)(t)),
              i = 1;
            n > 2;

          )
            (n /= 2), (i += 1)
          for (
            var u = function() {
              var e = Math.pow(2, i)
              if (
                r
                  .map(function(r) {
                    return o(r[1] / e) - o(r[0] / e) + 1
                  })
                  .reduce(function(e, r) {
                    return e * r
                  }) < 20
              )
                return "break"
              i += 1
            };
            "break" !== u();

          );
          return y(r, i)
        },
      }
    }
  },
  "./src/cache/spatial-index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.createMiddleware = r.create = void 0)
    var a = n(t("redis")),
      i = n(t("util-promisifyall")),
      u = t("@subspace/core"),
      o = t("./src/cache/redimension.js")
    ;(0, i.default)(a.default.RedisClient.prototype),
      (0, i.default)(a.default.Multi.prototype)
    r.create = function(e) {
      var r = a.default.createClient(e.redis),
        t = e.key,
        n = e.dimensions,
        i = e.precision,
        u = void 0 === i ? 64 : i
      return (0, o.create)(r, t, "".concat(t, "-map"), n, u)
    }
    r.createMiddleware = function(e) {
      return function() {
        return function(r) {
          return function(t) {
            switch (t.type) {
              case u.modules.Physics.PHYSICS_ADD_BODY:
                e.insert(t.payload.body.position, t.payload.body.id)
                break
              case u.modules.Physics.PHYSICS_UPDATE_BODY:
                e.update(t.payload.body.position, t.payload.body.id)
            }
            return r(t)
          }
        }
      }
    }
  },
  "./src/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault"),
      a = t("@babel/runtime/helpers/interopRequireWildcard"),
      i = a(t("http")),
      u = n(t("shortid")),
      o = a(t("@web-udp/server")),
      s = t("@subspace/core"),
      c = t("./src/cache/index.js"),
      l = n(t("./cfg/server.config.json")),
      d = n(t("./cfg/redis.config.json")),
      p = a(t("./src/scheduler.js")),
      f = t("./src/store/index.js"),
      h = 1 / (process.env.TICK_RATE || l.default.tick_rate),
      b = 1 / (process.env.SEND_RATE || l.default.send_rate),
      v = new i.Server(),
      m = new o.Server({ server: v }),
      y = {},
      x = c.SpatialIndex.create({
        redis: d.default,
        key: "ss-body",
        dimensions: 2,
      }),
      w = p.create(h),
      _ = (0, f.configureStore)({
        spatialIndex: x,
        scheduler: w,
        getPlayers: function() {
          return y
        },
        sendRate: b,
      }),
      g = s.modules.Physics.P2Driver.create({ gravity: [0, 0] })
    _.dispatch(s.modules.Loop.startLoop())
    m.connections.subscribe(function(e) {
      var r = (0, u.default)(),
        t = { id: r }
      !(function(e, r) {
        ;(y[e] = r),
          r.messages.subscribe(function(r) {
            var t = JSON.parse(r),
              n = s.Protocol.getData(t)
            switch (s.Protocol.getType(t)) {
              case s.Protocol.INPUT_MESSAGE_TYPE.turn:
                var a = (0, s.getPlayerShip)(_.getState(), e)
                if (!a)
                  throw new Error(
                    "Can't turn ship: ship is not piloted by player ".concat(
                      e,
                    ),
                  )
                _.dispatch(s.modules.Ship.turnShip(g, a.id, n))
                break
              default:
                throw new Error("Unrecognized message: ".concat(r))
            }
          })
      })(r, e),
        _.dispatch(s.modules.Player.addPlayer(t))
    }),
      v.listen(Number(process.env.PORT), function() {
        console.log(
          "Server listening at //localhost:".concat(
            String(process.env.PORT),
          ),
        )
      })
  },
  "./src/middleware/state-updates.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.createMiddleware = void 0)
    var i = a(t("@babel/runtime/helpers/slicedToArray")),
      u = t("@subspace/core"),
      o = n(t("./src/util/hrtime.js")),
      s = function(e, r, t) {
        var n = t()
        console.log("SEND")
        for (var a = Object.entries(n), o = 0; o < a.length; o++) {
          var s = a[o],
            c = (0, i.default)(s, 2),
            l = c[0],
            d = c[1],
            p = r.query(l),
            f = [],
            h = !0,
            b = !1,
            v = void 0
          try {
            for (
              var m, y = p[Symbol.iterator]();
              !(h = (m = y.next()).done);
              h = !0
            ) {
              var x = m.value,
                w = (0, i.default)(x, 2)[1]
              f.push(u.modules.Physics.getBody(e.physics, w))
            }
          } catch (e) {
            ;(b = !0), (v = e)
          } finally {
            try {
              h || null == y.return || y.return()
            } finally {
              if (b) throw v
            }
          }
          d.send(JSON.stringify(f))
        }
      }
    r.createMiddleware = function(e, r, t) {
      var n = o.throttle(s, t)
      return function(t) {
        return function(a) {
          return function(i) {
            switch (i.type) {
              case u.modules.Loop.LOOP_TICK:
                n(t.getState(), e, r)
            }
            return a(i)
          }
        }
      }
    }
  },
  "./src/scheduler.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.create = void 0)
    var a = n(t("./src/util/hrtime.js"))
    r.create = function(e) {
      var r = e * a.NS_PER_SEC,
        t = [0, r],
        n = process.hrtime()
      return function() {
        return new Promise(function(e) {
          setTimeout(
            (function e(i) {
              return function() {
                var u = process.hrtime(n),
                  o = a.sub(u, t),
                  s = a.sum(o)
                s < 0
                  ? setImmediate(e(i))
                  : (i((s + r) / a.NS_PER_SEC),
                    (n = a.add(process.hrtime(), o)))
              }
            })(e),
          )
        })
      }
    }
  },
  "./src/store/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.configureStore = void 0)
    var i = a(t("redux-thunk")),
      u = n(t("@subspace/core")),
      o = t("redux"),
      s = t("./src/cache/index.js"),
      c = n(t("./src/middleware/state-updates.js"))
    r.configureStore = function(e) {
      var r = [
        (0, o.applyMiddleware)(
          i.default,
          s.SpatialIndex.createMiddleware(e.spatialIndex),
          c.createMiddleware(
            e.spatialIndex,
            e.getPlayers,
            e.sendRate,
          ),
          u.modules.Loop.createMiddleware(e.scheduler),
        ),
      ]
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        r.push(window.__REDUX_DEVTOOLS_EXTENSION__())
      var t = (0, o.combineReducers)(u.reducers)
      return (0, o.createStore)(t, o.compose.apply(void 0, r))
    }
  },
  "./src/util/hrtime.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.throttle = r.sum = r.sub = r.add = r.NS_PER_SEC = void 0)
    r.NS_PER_SEC = 1e9
    var n = function(e, r) {
      return [e[0] + r[0], e[1] + r[1]]
    }
    r.add = n
    var a = function(e, r) {
      return [e[0] - r[0], e[1] - r[1]]
    }
    r.sub = a
    var i = function(e) {
      return 1e9 * e[0] + e[1]
    }
    r.sum = i
    r.throttle = function(e, r) {
      var t = [0, 1e9 * r],
        u = process.hrtime()
      return function() {
        var r = process.hrtime(u),
          o = a(r, t)
        i(o) >= 0 &&
          ((u = n(process.hrtime(), o)), e.apply(void 0, arguments))
      }
    }
  },
  "@babel/runtime/helpers/asyncToGenerator": function(e, r) {
    e.exports = require("@babel/runtime/helpers/asyncToGenerator")
  },
  "@babel/runtime/helpers/interopRequireDefault": function(e, r) {
    e.exports = require("@babel/runtime/helpers/interopRequireDefault")
  },
  "@babel/runtime/helpers/interopRequireWildcard": function(e, r) {
    e.exports = require("@babel/runtime/helpers/interopRequireWildcard")
  },
  "@babel/runtime/helpers/slicedToArray": function(e, r) {
    e.exports = require("@babel/runtime/helpers/slicedToArray")
  },
  "@babel/runtime/helpers/toConsumableArray": function(e, r) {
    e.exports = require("@babel/runtime/helpers/toConsumableArray")
  },
  "@babel/runtime/regenerator": function(e, r) {
    e.exports = require("@babel/runtime/regenerator")
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
  redis: function(e, r) {
    e.exports = require("redis")
  },
  redux: function(e, r) {
    e.exports = require("redux")
  },
  "redux-thunk": function(e, r) {
    e.exports = require("redux-thunk")
  },
  shortid: function(e, r) {
    e.exports = require("shortid")
  },
  "util-promisifyall": function(e, r) {
    e.exports = require("util-promisifyall")
  },
})
