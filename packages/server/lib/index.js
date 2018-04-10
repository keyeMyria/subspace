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
  "./cfg/db.config.js": function(e, r, t) {
    "use strict"
    var n = t("sequelize"),
      a = process.env,
      i = a.DB_USERNAME,
      s = a.DB_PASSWORD,
      u = a.DB_NAME,
      o = a.DB_HOST,
      c = a.DB_PORT,
      l = {
        match: [
          n.ConnectionError,
          n.ConnectionRefusedError,
          n.ConnectionTimedOutError,
          n.OptimisticLockError,
        ],
      }
    e.exports = {
      development: {
        username: "cockroach",
        password: null,
        database: "ss_dev",
        host: "127.0.0.1",
        port: 26257,
        dialect: "postgres",
        retry: l,
      },
      test: {
        username: i,
        password: s,
        database: u,
        host: o,
        port: c,
        dialect: "postgres",
        retry: l,
      },
      production: {
        username: i,
        password: s,
        database: u,
        host: o,
        port: c,
        dialect: "postgres",
        retry: l,
      },
    }
  },
  "./cfg/redis.config.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = void 0)
    var n = {
      port: 6379,
      host: "localhost",
      family: 4,
      db: 0,
      enableReadyCheck: !0,
      retry_strategy: function(e) {
        return e.error && "ECONNREFUSED" === e.error.code
          ? new Error("The server refused the connection")
          : e.total_retry_time > 36e5
            ? new Error("Retry time exhausted")
            : e.attempt > 10 ? void 0 : Math.min(100 * e.attempt, 3e3)
      },
    }
    r.default = n
  },
  "./cfg/server.config.json": function(e) {
    e.exports = { tick_rate: 60, send_rate: 20 }
  },
  "./src/auth/index.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.create = function() {
        return {
          check: function() {
            return Promise.resolve(!1)
          },
          login: function() {
            return Promise.reject()
          },
        }
      })
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
      (r.create = function(e, r, t, n) {
        var d =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : 64
        function p(e) {
          if (e.length !== n)
            throw new Error(
              "Please always use ".concat(
                n,
                " dimensions with this index.",
              ),
            )
        }
        function f(e) {
          var r = e.reduce(function(e, r, t) {
              var n = r
                .toString(2)
                .padStart(d, "0")
                .split("")
              return 0 === t ? n : u(e, n)
            }, []),
            t = (function e(r) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : []
              var n = r.length
              var a = 0
              var i
              for (; a < n; a++)
                (i = r[a]), Array.isArray(i) ? e(i, t) : t.push(i)
              return t
            })(r).join("")
          return o(t)
            .toString(16)
            .padStart(d * n / 4, "0")
        }
        function y(e, r) {
          p(e)
          var t = f(e),
            n = e.reduce(function(e, r) {
              return "".concat(e, ":").concat(r)
            }, t)
          return "".concat(n, ":").concat(r)
        }
        function b() {
          return (b = (0, s.default)(
            a.default.mark(function n(i) {
              var s
              return a.default.wrap(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), e.hgetAsync(t, i)
                      case 2:
                        if ((s = n.sent)) {
                          n.next = 5
                          break
                        }
                        throw new Error(
                          "Element ".concat(i, " not found."),
                        )
                      case 5:
                        return n.abrupt(
                          "return",
                          c(e, function(e) {
                            e.zrem(r, s), e.hdel(t, i)
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
          )).apply(this, arguments)
        }
        function h() {
          return (h = (0, s.default)(
            a.default.mark(function n(i, s) {
              var u, o
              return a.default.wrap(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (u = y(i, s)),
                          (n.next = 3),
                          e.hgetAsync(t, s)
                        )
                      case 3:
                        if ((o = n.sent)) {
                          n.next = 6
                          break
                        }
                        throw new Error(
                          "Element ".concat(s, " not found."),
                        )
                      case 6:
                        return n.abrupt(
                          "return",
                          c(e, function(e) {
                            e.zrem(r, o),
                              e.hdel(t, s),
                              e.zadd(r, 0, u),
                              e.hset(t, s, u)
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
          )).apply(this, arguments)
        }
        function v() {
          return (v = (0, s.default)(
            a.default.mark(function t(i, s) {
              var u,
                c,
                d,
                p,
                y,
                b,
                h,
                v,
                m,
                _,
                P,
                I,
                S,
                g,
                x,
                E,
                j,
                A,
                O,
                C,
                R,
                L,
                w,
                D
              return a.default.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        for (
                          u = [], c = [], d = Math.pow(2, s), p = 0;
                          p < i.length;
                          p++
                        )
                          (y = i[p]),
                            u.push(o(y[0] / d)),
                            c.push(o(y[1] / d))
                        ;(b = []), (h = u.slice()), (v = !0)
                      case 7:
                        if (!v) {
                          t.next = 25
                          break
                        }
                        for (m = [], _ = [], P = 0; P < n; P++)
                          m.push(o(h[P] * d)),
                            _.push(o(m[P] | (d - 1)))
                        b.push([
                          "[".concat(f(m), ":"),
                          "[".concat(f(_), ":ÿ"),
                        ]),
                          (I = 0)
                      case 13:
                        if (!(I < n)) {
                          t.next = 23
                          break
                        }
                        if (h[I] === c[I]) {
                          t.next = 19
                          break
                        }
                        return (h[I] += 1), t.abrupt("break", 23)
                      case 19:
                        I === n - 1 ? (v = !1) : (h[I] = u[I])
                      case 20:
                        I++, (t.next = 13)
                        break
                      case 23:
                        t.next = 7
                        break
                      case 25:
                        return (
                          (t.next = 27),
                          l(e, function(e) {
                            for (var t = 0; t < b.length; t++) {
                              var n = b[t]
                              e.zrangebylex(r, n[0], n[1])
                            }
                          })
                        )
                      case 27:
                        ;(S = t.sent), (g = []), (x = 0)
                      case 30:
                        if (!(x < S.length)) {
                          t.next = 52
                          break
                        }
                        ;(E = S[x]), (j = 0)
                      case 33:
                        if (!(j < E.length)) {
                          t.next = 49
                          break
                        }
                        ;(A = E[j]),
                          (O = A.split(":")),
                          (C = !1),
                          (R = 0)
                      case 38:
                        if (!(R < n)) {
                          t.next = 45
                          break
                        }
                        if (
                          !(
                            o(O[R + 1]) < i[R][0] ||
                            o(O[R + 1]) > i[R][1]
                          )
                        ) {
                          t.next = 42
                          break
                        }
                        return (C = !0), t.abrupt("break", 45)
                      case 42:
                        R++, (t.next = 38)
                        break
                      case 45:
                        if (!C) {
                          for (
                            L = [], w = O[O.length - 1], D = 1;
                            D < O.length - 1;
                            D++
                          )
                            L.push(o(O[D]))
                          g.push([L, w])
                        }
                      case 46:
                        j++, (t.next = 33)
                        break
                      case 49:
                        x++, (t.next = 30)
                        break
                      case 52:
                        return t.abrupt("return", g)
                      case 53:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                this,
              )
            }),
          )).apply(this, arguments)
        }
        return {
          insert: function(n, a) {
            var i = y(n, a)
            return c(e, function(e) {
              e.zadd(r, 0, i), e.hset(t, a, i)
            })
          },
          remove: function(t, n) {
            var a = y(t, n)
            return e.zremAsync(r, a)
          },
          removeById: function(e) {
            return b.apply(this, arguments)
          },
          update: function(e, r) {
            return h.apply(this, arguments)
          },
          query: function(e) {
            p(e)
            var r = e.map(function(e) {
                return e[0] < e[1] ? e : [e[1], e[0]]
              }),
              t = r.map(function(e) {
                return e[1] - e[0] + 1
              }),
              n = Math.min.apply(Math, (0, i.default)(t)),
              a = 1
            for (; n > 2; ) (n /= 2), (a += 1)
            var s = function() {
              var e = Math.pow(2, a),
                t = r.map(function(r) {
                  return o(r[1] / e) - o(r[0] / e) + 1
                }),
                n = t.reduce(function(e, r) {
                  return e * r
                })
              if (n < 20) return "break"
              a += 1
            }
            for (;;) {
              var u = s()
              if ("break" === u) break
            }
            return (function(e, r) {
              return v.apply(this, arguments)
            })(r, a)
          },
        }
      })
    var a = n(t("@babel/runtime/regenerator")),
      i = n(t("@babel/runtime/helpers/toConsumableArray")),
      s = n(t("@babel/runtime/helpers/asyncToGenerator")),
      u = function(e, r) {
        return e.map(function(e, t) {
          return [e, r[t]]
        })
      },
      o = function(e) {
        return parseInt(e, 10)
      }
    function c(e, r) {
      var t = e.multi()
      return r(t), t.execAsync()
    }
    function l(e, r) {
      var t = e.batch()
      return r(t), t.execAsync()
    }
  },
  "./src/cache/spatial-index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.create = void 0)
    var a = n(t("redis")),
      i = n(t("util-promisifyall")),
      s = (t("@subspace/core"), t("./src/cache/redimension.js"))
    ;(0, i.default)(a.default.RedisClient.prototype),
      (0, i.default)(a.default.Multi.prototype)
    r.create = function(e) {
      var r = a.default.createClient(e.redis),
        t = e.key,
        n = e.dimensions,
        i = e.precision,
        u = void 0 === i ? 64 : i
      return (0, s.create)(r, t, "".concat(t, "-map"), n, u)
    }
  },
  "./src/data/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.Player = r.sequelize = void 0)
    var a = n(t("sequelize-cockroachdb")),
      i = n(t("./cfg/db.config.js")).default.production,
      s = new a.default(i.database, i.username, i.password, i)
    r.sequelize = s
    var u = s.define("Player", {
      username: a.default.STRING,
      password: a.default.STRING,
      activeShipId: a.default.NUMBER,
    })
    r.Player = u
  },
  "./src/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault"),
      a = t("@babel/runtime/helpers/interopRequireWildcard")
    t("source-map-support/register")
    var i = a(t("http")),
      s = a(t("@web-udp/server")),
      u = t("@subspace/core"),
      o = n(t("./src/data/index.js")),
      c = n(t("./cfg/server.config.json")),
      l = t("./src/store/index.js"),
      d = a(t("./src/auth/index.js")),
      p = process.env,
      f = p.TICK_RATE,
      y = p.SEND_RATE,
      b = p.PORT,
      h = 1 / (Number(f) || c.default.tick_rate),
      v = 1 / (Number(y) || c.default.send_rate),
      m = new i.Server(),
      _ = new s.Server({ server: m }),
      P = d.create()
    ;(0, l.configureStore)({
      auth: P,
      tickRate: h,
      sendRate: v,
      udp: _,
    }).dispatch(u.Loop.startLoop()),
      o.default.sequelize.sync().then(function() {
        m.listen(Number(b), function() {
          console.log(
            "Server listening at //localhost:".concat(String(b)),
          )
        })
      })
  },
  "./src/modules/adjacent-bodies/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.updateAdjacentBodies = f),
      (r.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : y,
          r = arguments.length > 1 ? arguments[1] : void 0
        switch (r.type) {
          case p:
            return (0, o.default)({}, e, {
              byPlayerId: (0, o.default)(
                {},
                e.byPlayerId,
                r.payload.adjacentBodies,
              ),
            })
          default:
            return e
        }
      }),
      (r.createMiddleware = function(e) {
        return function(r) {
          return function(t) {
            return function(n) {
              switch (n.type) {
                case c.Loop.LOOP_TICK:
                  ;(function(e, r) {
                    return b.apply(this, arguments)
                  })(r.getState(), e).then(function(e) {
                    t(f(e))
                  })
                  break
                case c.Physics.PHYSICS_ADD_BODY:
                  e.insert(n.payload.body.position, n.payload.body.id)
                  break
                case c.Physics.PHYSICS_UPDATE_BODY:
                  e.update(n.payload.body.position, n.payload.body.id)
              }
              return t(n)
            }
          }
        }
      }),
      (r.getAdjacentBodies = r.ADJACENT_BODIES_UPDATE = void 0)
    var i = a(t("@babel/runtime/regenerator")),
      s = a(t("@babel/runtime/helpers/slicedToArray")),
      u = a(t("@babel/runtime/helpers/asyncToGenerator")),
      o = a(t("@babel/runtime/helpers/objectSpread")),
      c = t("@subspace/core"),
      l = n(t("./src/util/async.js")),
      d = 500,
      p = "adjacent-bodies/update"
    function f(e) {
      return { type: p, payload: { adjacentBodies: e } }
    }
    r.ADJACENT_BODIES_UPDATE = p
    var y = { byPlayerId: {} }
    function b() {
      return (b = (0, u.default)(
        i.default.mark(function e(r, t) {
          var n, a, u
          return i.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = c.Players.getPlayers(r.players)),
                      (a = Object.keys(n)),
                      (u = a.reduce(function(e, n) {
                        var a = (0, c.getPlayerBody)(r, Number(n))
                        if (null === a) return e
                        var i = (0, s.default)(a.position, 2),
                          u = i[0],
                          o = i[1],
                          l = [[u - d, u + d], [o - d, o + d]]
                        return (
                          (e[n] = t.query(l).then(function(e) {
                            return e.map(function(e) {
                              return (0, s.default)(e, 2)[1]
                            })
                          })),
                          e
                        )
                      }, {})),
                      (e.next = 5),
                      l.object(u)
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
        }),
      )).apply(this, arguments)
    }
    r.getAdjacentBodies = function(e) {
      return e.byPlayerId
    }
  },
  "./src/modules/clients/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.addClient = P),
      (r.loginClient = I),
      (r.loginClientFailure = S),
      (r.loginClientSuccess = g),
      (r.setClientPlayer = x),
      (r.sendClient = E),
      (r.removeClient = j),
      (r.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : A,
          r = arguments.length > 1 ? arguments[1] : void 0
        switch (r.type) {
          case f:
            var t = r.payload.client,
              n = (0, c.default)(
                {},
                e.byId,
                (0, o.default)({}, t.id, t),
              ),
              a = e.byPlayerId
            return (
              t.playerId &&
                (a = (0, c.default)(
                  {},
                  a,
                  (0, o.default)({}, t.playerId, t),
                )),
              (0, c.default)({}, e, { byId: n, byPlayerId: a })
            )
          case v:
            var i = r.payload,
              s = i.clientId,
              u = i.playerId,
              l = (0, c.default)({}, O(e, s), { playerId: u })
            return (0, c.default)({}, e, {
              byId: (0, c.default)(
                {},
                e.byId,
                (0, o.default)({}, s, l),
              ),
              byPlayerId: (0, c.default)(
                {},
                e.byPlayerId,
                (0, o.default)({}, u, l),
              ),
            })
          case _:
            var d = r.payload.clientId,
              p = O(e, d),
              y = (0, c.default)({}, e)
            return (
              delete y.byId[d],
              p.playerId && delete y.byPlayerId[p.playerId],
              y
            )
          default:
            return e
        }
      }),
      (r.createMiddleware = function(e, r) {
        var t = {}
        return function(n) {
          return (
            e.connections.subscribe(function(e) {
              var a = n.dispatch,
                o = (0, l.default)()
              ;(t[e.id] = e),
                (function(e, t, n) {
                  e.messages.subscribe(
                    ((a = (0, u.default)(
                      i.default.mark(function e(a) {
                        var u, o, c, l, p
                        return i.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((u = JSON.parse(a)),
                                    (o = (0, s.default)(u, 2)),
                                    (c = (0, s.default)(o[1], 2)),
                                    (l = c[0]),
                                    (p = c[1]),
                                    l !==
                                      d.Protocol
                                        .MESSAGE_TYPE_AUTH_LOGIN)
                                  ) {
                                    e.next = 4
                                    break
                                  }
                                  return e.abrupt(
                                    "return",
                                    n(I(t, p)),
                                  )
                                case 4:
                                  return (e.next = 6), r.check(u)
                                case 6:
                                  if (e.sent) {
                                    e.next = 8
                                    break
                                  }
                                  return e.abrupt(
                                    "return",
                                    console.error(
                                      "Client ".concat(
                                        t,
                                        " is not authenticated",
                                      ),
                                    ),
                                  )
                                case 8:
                                  ;(e.t0 = l), (e.next = 11)
                                  break
                                case 11:
                                  return e.abrupt(
                                    "return",
                                    console.error(
                                      "Unrecognized message: ".concat(
                                        a,
                                      ),
                                    ),
                                  )
                                case 12:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          this,
                        )
                      }),
                    )),
                    function(e) {
                      return a.apply(this, arguments)
                    }),
                  )
                  var a
                })(e, o, a),
                a(P({ id: o, connectionId: e.id }))
            }),
            function(e) {
              return function(a) {
                switch (a.type) {
                  case y:
                    var i = a.payload,
                      s = i.clientId,
                      u = i.credentials
                    r
                      .login(u)
                      .then(function(r) {
                        e(g(s, r))
                      })
                      .catch(function(r) {
                        e(S(s))
                      })
                    break
                  case h:
                    var o = a.payload,
                      c = o.clientId,
                      l = o.player,
                      f = n.getState()
                    if (d.Players.getPlayer(f.players, l.id))
                      return void e(j(c))
                    e(x(c, l.id)), e(p.loadPlayer(l.id))
                    break
                  case b:
                    var v = a.payload.clientId
                    e(E(v, d.Protocol.authLoginFailureMessage()))
                    break
                  case m:
                    var P = n.getState(),
                      I = P.clients,
                      A = a.payload,
                      C = A.clientId,
                      R = A.message,
                      L = O(I, C)
                    t[L.connectionId].send(JSON.stringify(R))
                    break
                  case _:
                    var w = a.payload.clientId,
                      D = n.getState(),
                      k = D.clients,
                      q = O(k, w),
                      T = q.connectionId
                    t[T].close(), delete t[T]
                }
                return e(a)
              }
            }
          )
        }
      }),
      (r.getClientByPlayerId = r.getClient = r.CLIENT_REMOVE = r.CLIENT_SEND = r.CLIENT_SET_PLAYER = r.CLIENT_LOGIN_SUCCESS = r.CLIENT_LOGIN_FAILURE = r.CLIENT_LOGIN = r.CLIENT_ADD = void 0)
    var i = a(t("@babel/runtime/regenerator")),
      s = a(t("@babel/runtime/helpers/slicedToArray")),
      u = a(t("@babel/runtime/helpers/asyncToGenerator")),
      o = a(t("@babel/runtime/helpers/defineProperty")),
      c = a(t("@babel/runtime/helpers/objectSpread")),
      l = a(t("shortid")),
      d = t("@subspace/core"),
      p = n(t("./src/modules/players/index.js")),
      f = "client/add"
    r.CLIENT_ADD = f
    var y = "client/login!"
    r.CLIENT_LOGIN = y
    var b = "client/login_failure"
    r.CLIENT_LOGIN_FAILURE = b
    var h = "client/login_success"
    r.CLIENT_LOGIN_SUCCESS = h
    var v = "client/set_player"
    r.CLIENT_SET_PLAYER = v
    var m = "client/send!"
    r.CLIENT_SEND = m
    var _ = "client/remove!"
    function P(e) {
      return { type: f, payload: { client: e } }
    }
    function I(e, r) {
      return { type: y, payload: { clientId: e, credentials: r } }
    }
    function S(e) {
      return { type: b, payload: { clientId: e } }
    }
    function g(e, r) {
      return { type: h, payload: { clientId: e, player: r } }
    }
    function x(e, r) {
      return { type: v, payload: { clientId: e, playerId: r } }
    }
    function E(e, r) {
      return { type: m, payload: { clientId: e, message: r } }
    }
    function j(e) {
      return { type: _, payload: { clientId: e } }
    }
    r.CLIENT_REMOVE = _
    var A = { byId: {}, byPlayerId: {} }
    var O = function(e, r) {
      return e.byId[r]
    }
    r.getClient = O
    r.getClientByPlayerId = function(e, r) {
      return e.byPlayerId[r]
    }
  },
  "./src/modules/players/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.loadPlayer = function(e) {
        return { type: c, payload: { playerId: e } }
      }),
      (r.loadPlayerFailure = p),
      (r.loadPlayerSuccess = f),
      (r.default = function(e, r) {
        return a.Players.default(e, r)
      }),
      (r.createMiddleware = function(e, r) {
        return function(t) {
          var n = o.throttle(function() {
            var e = t.getState(),
              r = e.adjacentBodies,
              n = e.clients,
              i = e.players,
              o = e.physics,
              c = e.loop,
              l = u.getAdjacentBodies(r)
            for (var d in a.Players.getPlayers(i)) {
              var p = Number(d),
                f = s.getClientByPlayerId(n, p),
                y = l[p].map(function(e) {
                  return a.Physics.getBody(o, e)
                }),
                b = a.Protocol.snapshotMessage(c.frame, y)
              t.dispatch(s.sendClient(f.id, b))
            }
          }, r)
          return function(r) {
            return function(u) {
              switch (u.type) {
                case a.Loop.LOOP_TICK:
                  n()
                  break
                case c:
                  var o = u.payload.playerId
                  e
                    .getPlayer(o)
                    .then(function(e) {
                      r(f(o)),
                        r(a.Players.addPlayer(e)),
                        e.activeShipId &&
                          r(i.loadShip(e.activeShipId))
                    })
                    .catch(function(e) {
                      return r(p(o, e))
                    })
                  break
                case a.Players.PLAYER_ADD:
                case a.Players.PLAYER_UPDATE:
                  var l = t.getState(),
                    d = l.clients,
                    y = u.payload.player,
                    b = s.getClientByPlayerId(d, y.id),
                    h = a.Protocol.playerUpdateMessage(y)
                  t.dispatch(s.sendClient(b.id, h))
              }
              return r(u)
            }
          }
        }
      }),
      (r.PLAYER_LOAD_SUCCESS = r.PLAYER_LOAD_FAILURE = r.PLAYER_LOAD = void 0)
    var a = t("@subspace/core"),
      i = n(t("./src/modules/ships/index.js")),
      s = n(t("./src/modules/clients/index.js")),
      u = n(t("./src/modules/adjacent-bodies/index.js")),
      o = n(t("./src/util/hrtime.js")),
      c = "players/load!"
    r.PLAYER_LOAD = c
    var l = "players/load_failure"
    r.PLAYER_LOAD_FAILURE = l
    var d = "players/load_success"
    function p(e, r) {
      return { type: l, payload: { playerId: e, err: r } }
    }
    function f(e) {
      return { type: d, payload: { playerId: e } }
    }
    r.PLAYER_LOAD_SUCCESS = d
  },
  "./src/modules/ships/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.loadShip = function(e) {
        return { type: s, payload: { shipId: e } }
      }),
      (r.loadShipFailure = c),
      (r.loadShipSuccess = l),
      (r.default = function(e, r) {
        return a.Ships.default(e, r)
      }),
      (r.createMiddleware = function(e) {
        return function(r) {
          return function(t) {
            return function(n) {
              switch (n.type) {
                case s:
                  var u = n.payload.shipId
                  e
                    .getShip(u)
                    .then(function(e) {
                      t(l(e)), t(a.Ships.addShip(e))
                    })
                    .catch(function(e) {
                      return t(c(u, e))
                    })
                  break
                case a.Ships.SHIP_ADD:
                case a.Ships.SHIP_UPDATE:
                  var o = r.getState(),
                    d = o.clients,
                    p = o.players,
                    f = n.payload.ship,
                    y = a.Players.getPlayerByActiveShipId(p, f.id)
                  if (!y) break
                  var b = i.getClientByPlayerId(d, y.id),
                    h = a.Protocol.shipUpdateMessage(f)
                  r.dispatch(i.sendClient(b.id, h))
              }
              return t(n)
            }
          }
        }
      }),
      (r.SHIP_LOAD_SUCCESS = r.SHIP_LOAD_FAILURE = r.SHIP_LOAD = void 0)
    var a = t("@subspace/core"),
      i = n(t("./src/modules/clients/index.js")),
      s = (n(t("./src/modules/players/index.js")), "ships/load!")
    r.SHIP_LOAD = s
    var u = "ships/load_failure"
    r.SHIP_LOAD_FAILURE = u
    var o = "ships/load_success"
    function c(e, r) {
      return { type: u, payload: { shipId: e, err: r } }
    }
    function l(e) {
      return { type: o, payload: { ship: e } }
    }
    r.SHIP_LOAD_SUCCESS = o
  },
  "./src/reducers.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = void 0)
    var a = t("@subspace/core"),
      i = n(t("./src/modules/adjacent-bodies/index.js")),
      s = n(t("./src/modules/clients/index.js")),
      u = n(t("./src/modules/players/index.js")),
      o = n(t("./src/modules/ships/index.js")),
      c = a.reducers.loop,
      l = a.reducers.physics,
      d = {
        adjacentBodies: i.default,
        clients: s.default,
        players: u.default,
        ships: o.default,
        loop: c,
        physics: l,
      }
    r.default = d
  },
  "./src/scheduler.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.create = function(e) {
        var r = e * a.NS_PER_SEC,
          t = [0, r],
          n = process.hrtime()
        return function() {
          return new Promise(function(e) {
            setTimeout(
              (function e(i) {
                return function() {
                  var s = process.hrtime(n),
                    u = a.sub(s, t),
                    o = a.sum(u)
                  o < 0
                    ? setImmediate(e(i))
                    : (i((o + r) / a.NS_PER_SEC),
                      (n = a.add(process.hrtime(), u)))
                }
              })(e),
            )
          })
        }
      })
    var a = n(t("./src/util/hrtime.js"))
  },
  "./src/store/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.configureStore = function(e) {
        var r = e.auth,
          t = e.tickRate,
          n = e.sendRate,
          a = e.udp,
          u = o.create(t),
          c = [
            (0, s.applyMiddleware)(
              i.Loop.createMiddleware(u),
              d.createMiddleware(h),
              i.Ships.createMiddleware(),
              f.createMiddleware(b),
              p.createMiddleware(h, n),
              l.createMiddleware(a, r),
            ),
          ]
        "undefined" != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          c.push(window.__REDUX_DEVTOOLS_EXTENSION__())
        var v = (0, s.combineReducers)(y.default)
        return (0, s.createStore)(v, s.compose.apply(void 0, c))
      })
    var i = t("@subspace/core"),
      s = t("redux"),
      u = a(t("./cfg/redis.config.js")),
      o = n(t("./src/scheduler.js")),
      c = t("./src/cache/index.js"),
      l = n(t("./src/modules/clients/index.js")),
      d = n(t("./src/modules/ships/index.js")),
      p = n(t("./src/modules/players/index.js")),
      f = n(t("./src/modules/adjacent-bodies/index.js")),
      y = a(t("./src/reducers.js")),
      b = (i.Physics.P2Driver.create({ gravity: [0, 0] }),
      c.SpatialIndex.create({
        redis: u.default,
        key: "ss-body",
        dimensions: 2,
      })),
      h = {}
  },
  "./src/util/async.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.object = function(e) {
        var r = Object.keys(e)
        return Promise.all(
          r.map(function(r) {
            var t = e[r]
            return "object" !== (0, a.default)(t) || t.then
              ? t
              : promiseAllObject(t)
          }),
        ).then(function(e) {
          return i(r, e)
        })
      })
    var a = n(t("@babel/runtime/helpers/typeof")),
      i = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [],
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : []
        return e.reduce(function(e, t, n) {
          return (e[t] = r[n]), e
        }, {})
      }
  },
  "./src/util/hrtime.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.add = a),
      (r.sub = i),
      (r.sum = s),
      (r.throttle = function(e, r) {
        var t,
          u = [0, r * n],
          o = process.hrtime()
        return function() {
          var r = process.hrtime(o),
            n = i(r, u),
            c = s(n)
          return (
            c >= 0 &&
              ((o = a(process.hrtime(), n)),
              (t = e.apply(void 0, arguments))),
            t
          )
        }
      }),
      (r.NS_PER_SEC = void 0)
    var n = 1e9
    function a(e, r) {
      return [e[0] + r[0], e[1] + r[1]]
    }
    function i(e, r) {
      return [e[0] - r[0], e[1] - r[1]]
    }
    function s(e) {
      return e[0] * n + e[1]
    }
    r.NS_PER_SEC = n
  },
  "@babel/runtime/helpers/asyncToGenerator": function(e, r) {
    e.exports = require("@babel/runtime/helpers/asyncToGenerator")
  },
  "@babel/runtime/helpers/defineProperty": function(e, r) {
    e.exports = require("@babel/runtime/helpers/defineProperty")
  },
  "@babel/runtime/helpers/interopRequireDefault": function(e, r) {
    e.exports = require("@babel/runtime/helpers/interopRequireDefault")
  },
  "@babel/runtime/helpers/interopRequireWildcard": function(e, r) {
    e.exports = require("@babel/runtime/helpers/interopRequireWildcard")
  },
  "@babel/runtime/helpers/objectSpread": function(e, r) {
    e.exports = require("@babel/runtime/helpers/objectSpread")
  },
  "@babel/runtime/helpers/slicedToArray": function(e, r) {
    e.exports = require("@babel/runtime/helpers/slicedToArray")
  },
  "@babel/runtime/helpers/toConsumableArray": function(e, r) {
    e.exports = require("@babel/runtime/helpers/toConsumableArray")
  },
  "@babel/runtime/helpers/typeof": function(e, r) {
    e.exports = require("@babel/runtime/helpers/typeof")
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
  sequelize: function(e, r) {
    e.exports = require("sequelize")
  },
  "sequelize-cockroachdb": function(e, r) {
    e.exports = require("sequelize-cockroachdb")
  },
  shortid: function(e, r) {
    e.exports = require("shortid")
  },
  "source-map-support/register": function(e, r) {
    e.exports = require("source-map-support/register")
  },
  "util-promisifyall": function(e, r) {
    e.exports = require("util-promisifyall")
  },
})
//# sourceMappingURL=index.js.map
