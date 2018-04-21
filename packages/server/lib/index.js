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
      s = a.DB_USERNAME,
      u = a.DB_PASSWORD,
      i = a.DB_NAME,
      o = a.DB_HOST,
      c = a.DB_PORT,
      d = {
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
        retry: d,
      },
      test: {
        username: s,
        password: u,
        database: i,
        host: o,
        port: c,
        dialect: "postgres",
        retry: d,
      },
      production: {
        username: s,
        password: u,
        database: i,
        host: o,
        port: c,
        dialect: "postgres",
        retry: d,
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
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.authenticate = function(e, r) {
        return c.apply(this, arguments)
      }),
      (r.verify = function(e) {
        return d.apply(this, arguments)
      })
    var s = a(t("@babel/runtime/regenerator")),
      u = a(t("@babel/runtime/helpers/asyncToGenerator")),
      i = (t("./src/data/index.js"), n(t("./src/auth/util.js"))),
      o = t("./src/auth/jwt.js")
    function c() {
      return (c = (0, u.default)(
        s.default.mark(function e(r, t) {
          var n
          return s.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), i.authenticate(r, t)
                  case 2:
                    return (
                      (n = e.sent),
                      e.abrupt("return", (0, o.generateToken)(n))
                    )
                  case 4:
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
    function d() {
      return (d = (0, u.default)(
        s.default.mark(function e(r) {
          return s.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", (0, o.verifyToken)(r))
                  case 1:
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
  },
  "./src/auth/jwt.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.verifyToken = function(e) {
        return a.default.verify(e, u)
      }),
      (r.generateToken = function(e) {
        return a.default.sign(e, u, { expiresIn: "24h" })
      })
    var a = n(t("jsonwebtoken")),
      s = process.env,
      u = s.JWT_SECRET
    s.JWT_EXPIRE_SECONDS
  },
  "./src/auth/middleware.js": function(e, r, t) {
    "use strict"
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.login = r.auth = void 0)
    var n = t("passport"),
      a = n.authenticate("jwt", { session: !1 })
    r.auth = a
    var s = n.authenticate("local", { session: !1 })
    r.login = s
  },
  "./src/auth/strategy.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.jwt = r.local = void 0)
    var a = n(t("@babel/runtime/regenerator")),
      s = n(t("@babel/runtime/helpers/asyncToGenerator")),
      u = t("passport-jwt"),
      i = n(t("passport-local")),
      o = t("./src/auth/util.js"),
      c = t("./src/data/index.js"),
      d = process.env.JWT_SECRET,
      l = {
        jwtFromRequest: u.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: d,
      },
      p = new i.default(
        (function() {
          var e = (0, s.default)(
            a.default.mark(function e(r, t, n) {
              var s
              return a.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          (0, o.authenticate)(r, t)
                        )
                      case 3:
                        ;(s = e.sent), (e.next = 9)
                        break
                      case 6:
                        return (
                          (e.prev = 6),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", n(e.t0))
                        )
                      case 9:
                        return e.abrupt("return", n(null, s))
                      case 10:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                this,
                [[0, 6]],
              )
            }),
          )
          return function(r, t, n) {
            return e.apply(this, arguments)
          }
        })(),
      )
    r.local = p
    var f = new u.Strategy(
      l,
      (function() {
        var e = (0, s.default)(
          a.default.mark(function e(r, t) {
            var n
            return a.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        c.User.findById(r.id)
                      )
                    case 3:
                      ;(n = e.sent), (e.next = 9)
                      break
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", t(e.t0))
                      )
                    case 9:
                      t(null, !!n && n.toJSON())
                    case 10:
                    case "end":
                      return e.stop()
                  }
              },
              e,
              this,
              [[0, 6]],
            )
          }),
        )
        return function(r, t) {
          return e.apply(this, arguments)
        }
      })(),
    )
    r.jwt = f
  },
  "./src/auth/util.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.comparePassword = o),
      (r.authenticate = function(e, r) {
        return c.apply(this, arguments)
      })
    var a = n(t("@babel/runtime/regenerator")),
      s = n(t("@babel/runtime/helpers/asyncToGenerator")),
      u = n(t("bcrypt")),
      i = t("./src/data/index.js")
    function o(e, r) {
      return u.default.compare(e, r.password)
    }
    function c() {
      return (c = (0, s.default)(
        a.default.mark(function e(r, t) {
          var n, s
          return a.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      i.User.findOne({ where: { username: r } })
                    )
                  case 2:
                    if ((n = e.sent)) {
                      e.next = 5
                      break
                    }
                    throw new Error("Invalid username or password")
                  case 5:
                    return (s = n.toJSON()), (e.next = 8), o(t, s)
                  case 8:
                    if (e.sent) {
                      e.next = 10
                      break
                    }
                    throw new Error("Invalid username or password")
                  case 10:
                    return e.abrupt("return", s)
                  case 11:
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
        var l =
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
                .padStart(l, "0")
                .split("")
              return 0 === t ? n : i(e, n)
            }, []),
            t = (function e(r) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : []
              var n = r.length
              var a = 0
              var s
              for (; a < n; a++)
                (s = r[a]), Array.isArray(s) ? e(s, t) : t.push(s)
              return t
            })(r).join("")
          return o(t)
            .toString(16)
            .padStart(l * n / 4, "0")
        }
        function h(e, r) {
          p(e)
          var t = f(e),
            n = e.reduce(function(e, r) {
              return "".concat(e, ":").concat(r)
            }, t)
          return "".concat(n, ":").concat(r)
        }
        function b() {
          return (b = (0, u.default)(
            a.default.mark(function n(s) {
              var u
              return a.default.wrap(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), e.hgetAsync(t, s)
                      case 2:
                        if ((u = n.sent)) {
                          n.next = 5
                          break
                        }
                        throw new Error(
                          "Element ".concat(s, " not found."),
                        )
                      case 5:
                        return n.abrupt(
                          "return",
                          c(e, function(e) {
                            e.zrem(r, u), e.hdel(t, s)
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
        function v() {
          return (v = (0, u.default)(
            a.default.mark(function n(s, u) {
              var i, o
              return a.default.wrap(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (i = h(s, u)),
                          (n.next = 3),
                          e.hgetAsync(t, u)
                        )
                      case 3:
                        if ((o = n.sent)) {
                          n.next = 6
                          break
                        }
                        throw new Error(
                          "Element ".concat(u, " not found."),
                        )
                      case 6:
                        return n.abrupt(
                          "return",
                          c(e, function(e) {
                            e.zrem(r, o),
                              e.hdel(t, u),
                              e.zadd(r, 0, i),
                              e.hset(t, u, i)
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
        function y() {
          return (y = (0, u.default)(
            a.default.mark(function t(s, u) {
              var i,
                c,
                l,
                p,
                h,
                b,
                v,
                y,
                m,
                x,
                g,
                j,
                S,
                _,
                w,
                I,
                T,
                E,
                O,
                k,
                R,
                P,
                U,
                q
              return a.default.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        for (
                          i = [], c = [], l = Math.pow(2, u), p = 0;
                          p < s.length;
                          p++
                        )
                          (h = s[p]),
                            i.push(o(h[0] / l)),
                            c.push(o(h[1] / l))
                        ;(b = []), (v = i.slice()), (y = !0)
                      case 7:
                        if (!y) {
                          t.next = 25
                          break
                        }
                        for (m = [], x = [], g = 0; g < n; g++)
                          m.push(o(v[g] * l)),
                            x.push(o(m[g] | (l - 1)))
                        b.push([
                          "[".concat(f(m), ":"),
                          "[".concat(f(x), ":ÿ"),
                        ]),
                          (j = 0)
                      case 13:
                        if (!(j < n)) {
                          t.next = 23
                          break
                        }
                        if (v[j] === c[j]) {
                          t.next = 19
                          break
                        }
                        return (v[j] += 1), t.abrupt("break", 23)
                      case 19:
                        j === n - 1 ? (y = !1) : (v[j] = i[j])
                      case 20:
                        j++, (t.next = 13)
                        break
                      case 23:
                        t.next = 7
                        break
                      case 25:
                        return (
                          (t.next = 27),
                          d(e, function(e) {
                            for (var t = 0; t < b.length; t++) {
                              var n = b[t]
                              e.zrangebylex(r, n[0], n[1])
                            }
                          })
                        )
                      case 27:
                        ;(S = t.sent), (_ = []), (w = 0)
                      case 30:
                        if (!(w < S.length)) {
                          t.next = 52
                          break
                        }
                        ;(I = S[w]), (T = 0)
                      case 33:
                        if (!(T < I.length)) {
                          t.next = 49
                          break
                        }
                        ;(E = I[T]),
                          (O = E.split(":")),
                          (k = !1),
                          (R = 0)
                      case 38:
                        if (!(R < n)) {
                          t.next = 45
                          break
                        }
                        if (
                          !(
                            o(O[R + 1]) < s[R][0] ||
                            o(O[R + 1]) > s[R][1]
                          )
                        ) {
                          t.next = 42
                          break
                        }
                        return (k = !0), t.abrupt("break", 45)
                      case 42:
                        R++, (t.next = 38)
                        break
                      case 45:
                        if (!k) {
                          for (
                            P = [], U = O[O.length - 1], q = 1;
                            q < O.length - 1;
                            q++
                          )
                            P.push(o(O[q]))
                          _.push([P, U])
                        }
                      case 46:
                        T++, (t.next = 33)
                        break
                      case 49:
                        w++, (t.next = 30)
                        break
                      case 52:
                        return t.abrupt("return", _)
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
            var s = h(n, a)
            return c(e, function(e) {
              e.zadd(r, 0, s), e.hset(t, a, s)
            })
          },
          remove: function(t, n) {
            var a = h(t, n)
            return e.zremAsync(r, a)
          },
          removeById: function(e) {
            return b.apply(this, arguments)
          },
          update: function(e, r) {
            return v.apply(this, arguments)
          },
          query: function(e) {
            p(e)
            var r = e.map(function(e) {
                return e[0] < e[1] ? e : [e[1], e[0]]
              }),
              t = r.map(function(e) {
                return e[1] - e[0] + 1
              }),
              n = Math.min.apply(Math, (0, s.default)(t)),
              a = 1
            for (; n > 2; ) (n /= 2), (a += 1)
            var u = function() {
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
              var i = u()
              if ("break" === i) break
            }
            return (function(e, r) {
              return y.apply(this, arguments)
            })(r, a)
          },
        }
      })
    var a = n(t("@babel/runtime/regenerator")),
      s = n(t("@babel/runtime/helpers/toConsumableArray")),
      u = n(t("@babel/runtime/helpers/asyncToGenerator")),
      i = function(e, r) {
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
    function d(e, r) {
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
      s = n(t("util-promisifyall")),
      u = (t("@subspace/core"), t("./src/cache/redimension.js"))
    ;(0, s.default)(a.default.RedisClient.prototype),
      (0, s.default)(a.default.Multi.prototype)
    r.create = function(e) {
      var r = a.default.createClient(e.redis),
        t = e.key,
        n = e.dimensions,
        s = e.precision,
        i = void 0 === s ? 64 : s
      return (0, u.create)(r, t, "".concat(t, "-map"), n, i)
    }
  },
  "./src/data/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.Hangar = r.Station = r.Item = r.ItemType = r.Inventory = r.Ship = r.ShipType = r.Body = r.User = r.sequelize = void 0)
    var a = n(t("@babel/runtime/regenerator")),
      s = n(t("@babel/runtime/helpers/asyncToGenerator")),
      u = n(t("bcrypt")),
      i = n(t("sequelize-cockroachdb"))
    function o(e) {
      return c.apply(this, arguments)
    }
    function c() {
      return (c = (0, s.default)(
        a.default.mark(function e(r) {
          var t, n
          return a.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), u.default.genSalt(10)
                  case 2:
                    return (
                      (t = e.sent),
                      (e.next = 5),
                      u.default.hash(r, t, null)
                    )
                  case 5:
                    return (n = e.sent), e.abrupt("return", n)
                  case 7:
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
    var d = n(t("./cfg/db.config.js")).default.production,
      l = new i.default(d)
    r.sequelize = l
    var p = l.define("User", {
      username: i.default.STRING,
      password: i.default.STRING,
    })
    ;(r.User = p),
      p.beforeCreate(
        (function() {
          var e = (0, s.default)(
            a.default.mark(function e(r) {
              return a.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), o(r.password)
                      case 2:
                        r.password = e.sent
                      case 3:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                this,
              )
            }),
          )
          return function(r) {
            return e.apply(this, arguments)
          }
        })(),
      )
    var f = l.define("Body", {
      angle: i.default.FLOAT,
      angularVelocity: i.default.FLOAT,
      positionX: i.default.FLOAT,
      positionY: i.default.FLOAT,
      velocityX: i.default.FLOAT,
      velocityY: i.default.FLOAT,
      width: i.default.FLOAT,
      height: i.default.FLOAT,
    })
    r.Body = f
    var h = l.define("ShipType", { name: i.default.STRING })
    r.ShipType = h
    var b = l.define("Ship", {})
    r.Ship = b
    var v = l.define("Inventory", {})
    r.Inventory = v
    var y = l.define("ItemType", { name: i.default.STRING })
    r.ItemType = y
    var m = l.define("Item", {})
    r.Item = m
    var x = l.define("Station", {})
    r.Station = x
    var g = l.define("Hangar", {})
    ;(r.Hangar = g),
      p.hasOne(b, { as: "activeShip" }),
      p.hasMany(g, { as: "hangars" }),
      b.belongsTo(f, { as: "body" }),
      b.belongsTo(v, { as: "inventory" }),
      b.belongsTo(h, { as: "shipType" }),
      b.belongsTo(g, { as: "hangar" }),
      m.belongsTo(v, { as: "inventory" }),
      v.hasMany(m, { as: "items" }),
      m.belongsTo(y, { as: "itemType" }),
      x.hasMany(g, { as: "hangars" }),
      g.belongsTo(x, { as: "station" }),
      g.belongsTo(p, { as: "user" }),
      g.hasMany(b, { as: "ships" })
  },
  "./src/index.js": function(e, r, t) {
    "use strict"
    t("path")
    var n = t("remotedev-server")
    t("dotenv").config(),
      t("source-map-support/register"),
      n({ hostname: "localhost", port: 9001 }),
      t("./src/server.js")
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
              : h,
          r = arguments.length > 1 ? arguments[1] : void 0
        switch (r.type) {
          case p:
            return (0, o.default)({}, e, {
              byUserId: (0, o.default)(
                {},
                e.byUserId,
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
    var s = a(t("@babel/runtime/regenerator")),
      u = a(t("@babel/runtime/helpers/slicedToArray")),
      i = a(t("@babel/runtime/helpers/asyncToGenerator")),
      o = a(t("@babel/runtime/helpers/objectSpread")),
      c = t("@subspace/core"),
      d = n(t("./src/util/async.js")),
      l = 500,
      p = "adjacent-bodies/update"
    function f(e) {
      return { type: p, payload: { adjacentBodies: e } }
    }
    r.ADJACENT_BODIES_UPDATE = p
    var h = { byUserId: {} }
    function b() {
      return (b = (0, i.default)(
        s.default.mark(function e(r, t) {
          var n, a, i
          return s.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = c.Users.getUsers(r.users)),
                      (a = Object.keys(n)),
                      (i = a.reduce(function(e, n) {
                        var a = (0, c.getUserBody)(r, Number(n))
                        if (null === a) return e
                        var s = (0, u.default)(a.position, 2),
                          i = s[0],
                          o = s[1],
                          d = [[i - l, i + l], [o - l, o + l]]
                        return (
                          (e[n] = t.query(d).then(function(e) {
                            return e.map(function(e) {
                              return (0, u.default)(e, 2)[1]
                            })
                          })),
                          e
                        )
                      }, {})),
                      (e.next = 5),
                      d.object(i)
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
      return e.byUserId
    }
  },
  "./src/modules/clients/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.addClient = b),
      (r.sendClient = function(e, r) {
        return { type: f, payload: { clientId: e, message: r } }
      }),
      (r.removeClient = v),
      (r.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : y,
          r = arguments.length > 1 ? arguments[1] : void 0
        switch (r.type) {
          case p:
            var t = r.payload.client,
              n = (0, c.default)(
                {},
                e.byId,
                (0, o.default)({}, t.id, t),
              ),
              a = e.byUserId
            return (
              t.userId &&
                (a = (0, c.default)(
                  {},
                  a,
                  (0, o.default)({}, t.userId, t),
                )),
              (0, c.default)({}, e, { byId: n, byUserId: a })
            )
          case h:
            var s = r.payload.clientId,
              u = m(e, s),
              i = (0, c.default)({}, e)
            return (
              delete i.byId[s],
              u.userId && delete i.byUserId[u.userId],
              i
            )
          default:
            return e
        }
      }),
      (r.createMiddleware = function(e, r) {
        var t = {},
          n = function(e, r, t) {
            var n
            e.closed.subscribe(function() {
              t(v(r))
            }),
              e.messages.subscribe(
                ((n = (0, i.default)(
                  s.default.mark(function e(r) {
                    var t, n, a
                    return s.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              ;(t = JSON.parse(r)),
                                (n = (0, u.default)(t, 1)),
                                (a = n[0]),
                                (e.t0 = a),
                                (e.next = 5)
                              break
                            case 5:
                              return e.abrupt(
                                "return",
                                console.error(
                                  "Unrecognized message: ".concat(r),
                                ),
                              )
                            case 6:
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
                  return n.apply(this, arguments)
                }),
              )
          }
        return function(a) {
          var u
          return (
            e.connections.subscribe(
              ((u = (0, i.default)(
                s.default.mark(function e(u) {
                  var i, o, c
                  return s.default.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              r.verify(u.metadata.token)
                            )
                          case 3:
                            ;(i = e.sent), (e.next = 12)
                            break
                          case 6:
                            return (
                              (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              console.error(
                                "Invalid credentials for connection ".concat(
                                  u.id,
                                ),
                              ),
                              u.send(
                                JSON.stringify(
                                  l.Protocol.authTokenInvalidMessage(),
                                ),
                              ),
                              u.close(),
                              e.abrupt("return")
                            )
                          case 12:
                            ;(o = a.dispatch),
                              (c = (0, d.default)()),
                              o(
                                b({
                                  id: c,
                                  userId: i.id,
                                  connectionId: u.id,
                                }),
                              ),
                              (t[u.id] = u),
                              n(u, c, o)
                          case 17:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    this,
                    [[0, 6]],
                  )
                }),
              )),
              function(e) {
                return u.apply(this, arguments)
              }),
            ),
            function(e) {
              return function(r) {
                switch (r.type) {
                  case f:
                    var n = a.getState(),
                      s = n.clients,
                      u = r.payload,
                      i = u.clientId,
                      o = u.message,
                      c = m(s, i),
                      d = c.connectionId
                    t[d].send(JSON.stringify(o))
                    break
                  case h:
                    var l = r.payload.clientId,
                      p = a.getState(),
                      b = p.clients,
                      v = m(b, l),
                      y = v.connectionId
                    t[y].close(), delete t[y]
                }
                return e(r)
              }
            }
          )
        }
      }),
      (r.getClientByUserId = r.getClient = r.CLIENT_REMOVE = r.CLIENT_SEND = r.CLIENT_ADD = void 0)
    var s = a(t("@babel/runtime/regenerator")),
      u = a(t("@babel/runtime/helpers/slicedToArray")),
      i = a(t("@babel/runtime/helpers/asyncToGenerator")),
      o = a(t("@babel/runtime/helpers/defineProperty")),
      c = a(t("@babel/runtime/helpers/objectSpread")),
      d = a(t("shortid")),
      l = t("@subspace/core"),
      p = (n(t("./src/modules/users/index.js")), "client/add")
    r.CLIENT_ADD = p
    var f = "client/send!"
    r.CLIENT_SEND = f
    var h = "client/remove!"
    function b(e) {
      return { type: p, payload: { client: e } }
    }
    function v(e) {
      return { type: h, payload: { clientId: e } }
    }
    r.CLIENT_REMOVE = h
    var y = { byId: {}, byUserId: {} }
    var m = function(e, r) {
      return e.byId[r]
    }
    r.getClient = m
    r.getClientByUserId = function(e, r) {
      return e.byUserId[r]
    }
  },
  "./src/modules/ships/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.loadShip = function(e) {
        return { type: u, payload: { shipId: e } }
      }),
      (r.loadShipFailure = c),
      (r.loadShipSuccess = d),
      (r.default = function(e, r) {
        return a.Ships.default(e, r)
      }),
      (r.createMiddleware = function(e) {
        return function(r) {
          return function(t) {
            return function(n) {
              switch (n.type) {
                case u:
                  var i = n.payload.shipId
                  e.Ship.findById(i)
                    .then(function(e) {
                      if (!e)
                        throw new Error(
                          "Ship ".concat(i, " not found."),
                        )
                      var r = e.toJSON()
                      t(d(r)),
                        t(a.Ships.addShip(r)),
                        r.body && t(a.Physics.addBody(r.body))
                    })
                    .catch(function(e) {
                      return t(c(i, e))
                    })
                  break
                case a.Ships.SHIP_ADD:
                case a.Ships.SHIP_UPDATE:
                  var o = r.getState(),
                    l = o.clients,
                    p = o.users,
                    f = n.payload.ship,
                    h = a.Users.getUserByActiveShipId(p, f.id)
                  if (!h) break
                  var b = s.getClientByUserId(l, h.id),
                    v = a.Protocol.shipUpdateMessage(f)
                  r.dispatch(s.sendClient(b.id, v))
              }
              return t(n)
            }
          }
        }
      }),
      (r.SHIP_LOAD_SUCCESS = r.SHIP_LOAD_FAILURE = r.SHIP_LOAD = void 0)
    var a = t("@subspace/core"),
      s = n(t("./src/modules/clients/index.js")),
      u = (n(t("./src/modules/users/index.js")), "ships/load!")
    r.SHIP_LOAD = u
    var i = "ships/load_failure"
    r.SHIP_LOAD_FAILURE = i
    var o = "ships/load_success"
    function c(e, r) {
      return { type: i, payload: { shipId: e, err: r } }
    }
    function d(e) {
      return { type: o, payload: { ship: e } }
    }
    r.SHIP_LOAD_SUCCESS = o
  },
  "./src/modules/users/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.registerUser = function(e, r) {
        return {
          type: o,
          payload: { clientId: clientId, username: e, password: r },
        }
      }),
      (r.loadUser = function(e) {
        return { type: c, payload: { userId: e } }
      }),
      (r.loadUserFailure = p),
      (r.loadUserSuccess = f),
      (r.default = function(e, r) {
        return a.Users.default(e, r)
      }),
      (r.createMiddleware = function(e, r) {
        return function(t) {
          var n = i.throttle(function() {
            var e = t.getState(),
              r = e.adjacentBodies,
              n = e.clients,
              i = e.users,
              o = e.physics,
              c = e.loop,
              d = u.getAdjacentBodies(r)
            for (var l in a.Users.getUsers(i)) {
              var p = Number(l),
                f = s.getClientByUserId(n, p),
                h = d[p].map(function(e) {
                  return a.Physics.getBody(o, e)
                }),
                b = a.Protocol.snapshotMessage(c.frame, h)
              t.dispatch(s.sendClient(f.id, b))
            }
          }, r)
          return function(r) {
            return function(u) {
              switch (u.type) {
                case a.Loop.LOOP_TICK:
                  n()
                  break
                case o:
                  var i = u.payload,
                    d = i.clientId,
                    l = i.username,
                    h = i.password
                  e.User.create({ username: l, password: h })
                    .then(function(e) {
                      e.toJSON()
                      var t = a.Protocol.userRegisterSuccessMessage()
                      r(s.sendClient(d, t))
                    })
                    .catch(function(e) {
                      var t = a.Protocol.userRegisterFailureMessage()
                      r(s.sendClient(d, t))
                    })
                case c:
                  var b = u.payload.userId
                  e.User.findById(b)
                    .then(function(e) {
                      if (!e)
                        throw new Error(
                          "User ".concat(b, " not found"),
                        )
                      var t = e.toJSON()
                      r(f(b)),
                        r(a.Users.addUser(t)),
                        t.activeShip &&
                          r(a.Ships.addShip(t.activeShip))
                    })
                    .catch(function(e) {
                      return r(p(b, e))
                    })
                  break
                case a.Users.USER_ADD:
                case a.Users.USER_UPDATE:
                  var v = t.getState(),
                    y = v.clients,
                    m = u.payload.user,
                    x = s.getClientByUserId(y, m.id),
                    g = a.Protocol.userUpdateMessage(m)
                  r(s.sendClient(x.id, g))
              }
              return r(u)
            }
          }
        }
      }),
      (r.USER_LOAD_SUCCESS = r.USER_LOAD_FAILURE = r.USER_LOAD = r.USER_REGISTER = void 0)
    var a = t("@subspace/core"),
      s = (n(t("./src/modules/ships/index.js")),
      n(t("./src/modules/clients/index.js"))),
      u = n(t("./src/modules/adjacent-bodies/index.js")),
      i = n(t("./src/util/hrtime.js")),
      o = "users/register!"
    r.USER_REGISTER = o
    var c = "users/load!"
    r.USER_LOAD = c
    var d = "users/load_failure"
    r.USER_LOAD_FAILURE = d
    var l = "users/load_success"
    function p(e, r) {
      return { type: d, payload: { userId: e, err: r } }
    }
    function f(e) {
      return { type: l, payload: { userId: e } }
    }
    r.USER_LOAD_SUCCESS = l
  },
  "./src/reducers.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = void 0)
    var a = t("@subspace/core"),
      s = n(t("./src/modules/adjacent-bodies/index.js")),
      u = n(t("./src/modules/clients/index.js")),
      i = n(t("./src/modules/users/index.js")),
      o = n(t("./src/modules/ships/index.js")),
      c = a.reducers.loop,
      d = a.reducers.physics,
      l = {
        adjacentBodies: s.default,
        clients: u.default,
        users: i.default,
        ships: o.default,
        loop: c,
        physics: d,
      }
    r.default = l
  },
  "./src/routers/auth.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = void 0)
    var a = n(t("@babel/runtime/regenerator")),
      s = n(t("@babel/runtime/helpers/asyncToGenerator")),
      u = n(t("express")),
      i = t("./src/data/index.js"),
      o = t("./src/auth/jwt.js"),
      c = t("./src/auth/middleware.js"),
      d = u.default.Router()
    d.route("/register").post(
      (function() {
        var e = (0, s.default)(
          a.default.mark(function e(r, t) {
            var n, s, u, c, d
            return a.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = r.body),
                        (s = n.username),
                        (u = n.password),
                        (e.next = 3),
                        i.User.findOne({ where: { username: s } })
                      )
                    case 3:
                      if (!e.sent) {
                        e.next = 6
                        break
                      }
                      return (
                        t
                          .status(409)
                          .json({ error: "Username already taken" }),
                        e.abrupt("return")
                      )
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.next = 9),
                        i.User.create({ username: s, password: u })
                      )
                    case 9:
                      ;(c = e.sent), (e.next = 16)
                      break
                    case 12:
                      return (
                        (e.prev = 12),
                        (e.t0 = e.catch(6)),
                        t.status(400).json({ error: e.t0 }),
                        e.abrupt("return")
                      )
                    case 16:
                      ;(d = c.toJSON()),
                        t
                          .status(201)
                          .json({
                            token: (0, o.generateToken)(d),
                            user: d,
                          })
                    case 18:
                    case "end":
                      return e.stop()
                  }
              },
              e,
              this,
              [[6, 12]],
            )
          }),
        )
        return function(r, t) {
          return e.apply(this, arguments)
        }
      })(),
    ),
      d.route("/login").post(c.login, function(e, r) {
        var t = e.user,
          n = { id: t.id, username: t.username }
        r
          .status(200)
          .json({ token: (0, o.generateToken)(n), user: n })
      }),
      d.route("/verify").post(c.auth, function(e, r) {
        var t = e.user,
          n = { id: t.id, username: t.username }
        r
          .status(200)
          .json({ token: (0, o.generateToken)(n), user: n })
      })
    var l = d
    r.default = l
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
              (function e(s) {
                return function() {
                  var u = process.hrtime(n),
                    i = a.sub(u, t),
                    o = a.sum(i)
                  o < 0
                    ? setImmediate(e(s))
                    : (s((o + r) / a.NS_PER_SEC),
                      (n = a.add(process.hrtime(), i)))
                }
              })(e),
            )
          })
        }
      })
    var a = n(t("./src/util/hrtime.js"))
  },
  "./src/server.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault"),
      s = a(t("@babel/runtime/regenerator")),
      u = a(t("@babel/runtime/helpers/asyncToGenerator")),
      i = t("http"),
      o = n(t("@web-udp/server")),
      c = t("@subspace/core"),
      d = a(t("express")),
      l = a(t("passport")),
      p = a(t("body-parser")),
      f = a(t("./cfg/server.config.json")),
      h = a(t("./src/data/index.js")),
      b = t("./src/store/index.js"),
      v = t("./src/auth/index.js"),
      y = t("./src/auth/strategy.js"),
      m = a(t("./src/routers/auth.js")),
      x = process.env,
      g = x.TICK_RATE,
      j = x.SEND_RATE,
      S = x.PORT,
      _ = 1 / (Number(g) || f.default.tick_rate),
      w = 1 / (Number(j) || f.default.send_rate),
      I = (0, d.default)(),
      T = new i.createServer(I),
      E = new o.Server({ server: T })
    function O() {
      return (O = (0, u.default)(
        s.default.mark(function e() {
          return s.default.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (0, b.configureStore)({
                        auth: {
                          authenticate: v.authenticate,
                          verify: v.verify,
                        },
                        db: h.default,
                        tickRate: _,
                        sendRate: w,
                        udp: E,
                      }).dispatch(c.Loop.startLoop()),
                      console.log("syncing database"),
                      (e.next = 5),
                      h.default.sequelize.sync()
                    )
                  case 5:
                    console.log(
                      "server listening at //localhost:".concat(
                        String(S),
                      ),
                    ),
                      T.listen(Number(S))
                  case 7:
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
    l.default.use(y.jwt),
      l.default.use(y.local),
      I.use((0, p.default)()),
      I.use("/auth", m.default),
      (function() {
        O.apply(this, arguments)
      })()
  },
  "./src/store/index.js": function(e, r, t) {
    "use strict"
    var n = t("@babel/runtime/helpers/interopRequireWildcard"),
      a = t("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.configureStore = function(e) {
        var r = e.db,
          t = e.auth,
          n = e.tickRate,
          a = e.sendRate,
          i = e.udp,
          o = c.create(n),
          d = [
            (0, u.applyMiddleware)(
              s.Loop.createMiddleware(o),
              p.createMiddleware(r),
              s.Ships.createMiddleware(),
              h.createMiddleware(v),
              f.createMiddleware(r, a),
              l.createMiddleware(i, t),
            ),
          ],
          m = (0, u.combineReducers)(b.default)
        return (0, u.createStore)(m, y.apply(void 0, d))
      })
    var s = t("@subspace/core"),
      u = t("redux"),
      i = t("remote-redux-devtools"),
      o = a(t("./cfg/redis.config.js")),
      c = n(t("./src/scheduler.js")),
      d = t("./src/cache/index.js"),
      l = n(t("./src/modules/clients/index.js")),
      p = n(t("./src/modules/ships/index.js")),
      f = n(t("./src/modules/users/index.js")),
      h = n(t("./src/modules/adjacent-bodies/index.js")),
      b = a(t("./src/reducers.js")),
      v = (s.Physics.P2Driver.create({ gravity: [0, 0] }),
      d.SpatialIndex.create({
        redis: o.default,
        key: "ss-body",
        dimensions: 2,
      })),
      y = (0, i.composeWithDevTools)({
        port: 9001,
        actionsBlacklist: [
          s.Loop.LOOP_TICK,
          s.Physics.PHYSICS_UPDATE_BODY,
          h.ADJACENT_BODIES_UPDATE,
        ],
      })
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
          return s(r, e)
        })
      })
    var a = n(t("@babel/runtime/helpers/typeof")),
      s = function() {
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
      (r.sub = s),
      (r.sum = u),
      (r.throttle = function(e, r) {
        var t,
          i = [0, r * n],
          o = process.hrtime()
        return function() {
          var r = process.hrtime(o),
            n = s(r, i),
            c = u(n)
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
    function s(e, r) {
      return [e[0] - r[0], e[1] - r[1]]
    }
    function u(e) {
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
  bcrypt: function(e, r) {
    e.exports = require("bcrypt")
  },
  "body-parser": function(e, r) {
    e.exports = require("body-parser")
  },
  dotenv: function(e, r) {
    e.exports = require("dotenv")
  },
  express: function(e, r) {
    e.exports = require("express")
  },
  http: function(e, r) {
    e.exports = require("http")
  },
  jsonwebtoken: function(e, r) {
    e.exports = require("jsonwebtoken")
  },
  passport: function(e, r) {
    e.exports = require("passport")
  },
  "passport-jwt": function(e, r) {
    e.exports = require("passport-jwt")
  },
  "passport-local": function(e, r) {
    e.exports = require("passport-local")
  },
  path: function(e, r) {
    e.exports = require("path")
  },
  redis: function(e, r) {
    e.exports = require("redis")
  },
  redux: function(e, r) {
    e.exports = require("redux")
  },
  "remote-redux-devtools": function(e, r) {
    e.exports = require("remote-redux-devtools")
  },
  "remotedev-server": function(e, r) {
    e.exports = require("remotedev-server")
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
