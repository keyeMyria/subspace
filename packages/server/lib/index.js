!(function(e) {
  var t = {}
  function r(s) {
    if (t[s]) return t[s].exports
    var n = (t[s] = { i: s, l: !1, exports: {} })
    return (
      e[s].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
    )
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function(e, t, s) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: s,
        })
    }),
    (r.r = function(e) {
      Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, "a", t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ""),
    (r.w = {}),
    r((r.s = "./src/index.js"))
})({
  "./cfg/db.config.js": function(e, t, r) {
    "use strict"
    const s = r("sequelize"),
      {
        DB_USERNAME: n,
        DB_PASSWORD: o,
        DB_NAME: a,
        DB_HOST: i,
        DB_PORT: c,
      } = process.env,
      u = {
        match: [
          s.ConnectionError,
          s.ConnectionRefusedError,
          s.ConnectionTimedOutError,
          s.OptimisticLockError,
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
        retry: u,
      },
      test: {
        username: n,
        password: o,
        database: a,
        host: i,
        port: c,
        dialect: "postgres",
        retry: u,
      },
      production: {
        username: n,
        password: o,
        database: a,
        host: i,
        port: c,
        dialect: "postgres",
        retry: u,
      },
    }
  },
  "./cfg/redis.config.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var s = {
      port: 6379,
      host: "localhost",
      family: 4,
      db: 0,
      enableReadyCheck: !0,
      retry_strategy: e =>
        e.error && "ECONNREFUSED" === e.error.code
          ? new Error("The server refused the connection")
          : e.total_retry_time > 36e5
            ? new Error("Retry time exhausted")
            : e.attempt > 10
              ? void 0
              : Math.min(100 * e.attempt, 3e3),
    }
    t.default = s
  },
  "./cfg/server.config.json": function(e) {
    e.exports = { tick_rate: 60, send_rate: 20 }
  },
  "./src/auth/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.authenticate = async function(e, t) {
        const r = await n.authenticate(e, t)
        return (0, o.generateToken)(r)
      }),
      (t.verify = async function(e) {
        return (0, o.verifyToken)(e)
      })
    r("./src/data/index.js")
    var n = s(r("./src/auth/util.js")),
      o = r("./src/auth/jwt.js")
  },
  "./src/auth/jwt.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.verifyToken = function(e) {
        return n.default.verify(e, o)
      }),
      (t.generateToken = function(e) {
        return n.default.sign(e, o, { expiresIn: "24h" })
      })
    var n = s(r("jsonwebtoken"))
    const { JWT_SECRET: o, JWT_EXPIRE_SECONDS: a } = process.env
  },
  "./src/auth/middleware.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.login = t.auth = void 0)
    const s = r("passport"),
      n = s.authenticate("jwt", { session: !1 })
    t.auth = n
    const o = s.authenticate("local", { session: !1 })
    t.login = o
  },
  "./src/auth/strategy.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.jwt = t.local = void 0)
    var n = r("passport-jwt"),
      o = s(r("passport-local")),
      a = r("./src/auth/util.js"),
      i = r("./src/data/index.js")
    const { JWT_SECRET: c } = process.env,
      u = {
        jwtFromRequest: n.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: c,
      },
      d = new o.default(async (e, t, r) => {
        let s
        try {
          s = await (0, a.authenticate)(e, t)
        } catch (e) {
          return r(e)
        }
        return r(null, s)
      })
    t.local = d
    const l = new n.Strategy(u, async (e, t) => {
      let r
      try {
        r = await i.User.findById(e.id)
      } catch (e) {
        return t(e)
      }
      t(null, !!r && r.toJSON())
    })
    t.jwt = l
  },
  "./src/auth/util.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.comparePassword = a),
      (t.authenticate = async function(e, t) {
        let r = await o.User.findOne({ where: { username: e } })
        if (!r) throw new Error("Invalid username or password")
        let s = r.toJSON()
        if (!await a(t, s))
          throw new Error("Invalid username or password")
        return s
      })
    var n = s(r("bcrypt")),
      o = r("./src/data/index.js")
    function a(e, t) {
      return n.default.compare(e, t.password)
    }
  },
  "./src/cache/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SpatialIndex = void 0)
    var n = s(r("./src/cache/spatial-index.js"))
    t.SpatialIndex = n
  },
  "./src/cache/redimension.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.create = function(e, t, r, a, i = 64) {
        function c(e) {
          if (e.length !== a)
            throw new Error(
              `Please always use ${a} dimensions with this index.`,
            )
        }
        function u(e) {
          const t = e.reduce((e, t, r) => {
              const n = t
                .toString(2)
                .padStart(i, "0")
                .split("")
              return 0 === r ? n : s(e, n)
            }, []),
            r = (function e(t, r = []) {
              const s = t.length
              let n = 0
              let o
              for (; n < s; n++)
                (o = t[n]), Array.isArray(o) ? e(o, r) : r.push(o)
              return r
            })(t).join("")
          return n(r)
            .toString(16)
            .padStart(i * a / 4, "0")
        }
        function d(e, t) {
          c(e)
          const r = u(e),
            s = e.reduce((e, t) => `${e}:${t}`, r)
          return `${s}:${t}`
        }
        return {
          insert: function(s, n) {
            const a = d(s, n)
            return o(e, e => {
              e.zadd(t, 0, a), e.hset(r, n, a)
            })
          },
          remove: function(r, s) {
            const n = d(r, s)
            return e.zremAsync(t, n)
          },
          removeById: async function(s) {
            const n = await e.hgetAsync(r, s)
            if (!n) throw new Error(`Element ${s} not found.`)
            return o(e, e => {
              e.zrem(t, n), e.hdel(r, s)
            })
          },
          update: async function(s, n) {
            const a = d(s, n),
              i = await e.hgetAsync(r, n)
            if (!i) throw new Error(`Element ${n} not found.`)
            return o(e, e => {
              e.zrem(t, i),
                e.hdel(r, n),
                e.zadd(t, 0, a),
                e.hset(r, n, a)
            })
          },
          query: function(r) {
            c(r)
            const s = r.map(e => (e[0] < e[1] ? e : [e[1], e[0]])),
              o = s.map(e => e[1] - e[0] + 1)
            let i = Math.min(...o),
              d = 1
            for (; i > 2; ) (i /= 2), (d += 1)
            for (;;) {
              const e = 2 ** d,
                t = s.map(t => n(t[1] / e) - n(t[0] / e) + 1),
                r = t.reduce((e, t) => e * t)
              if (r < 20) break
              d += 1
            }
            return (async function(r, s) {
              const o = [],
                i = [],
                c = 2 ** s
              for (let e = 0; e < r.length; e++) {
                const t = r[e]
                o.push(n(t[0] / c)), i.push(n(t[1] / c))
              }
              const d = [],
                l = o.slice()
              let p = !0
              for (; p; ) {
                const e = [],
                  t = []
                for (let r = 0; r < a; r++)
                  e.push(n(l[r] * c)), t.push(n(e[r] | (c - 1)))
                d.push([`[${u(e)}:`, `[${u(t)}:ÿ`])
                for (let e = 0; e < a; e++) {
                  if (l[e] !== i[e]) {
                    l[e] += 1
                    break
                  }
                  e === a - 1 ? (p = !1) : (l[e] = o[e])
                }
              }
              const f = await (function(e, t) {
                  const r = e.batch()
                  return t(r), r.execAsync()
                })(e, e => {
                  for (let r = 0; r < d.length; r++) {
                    const s = d[r]
                    e.zrangebylex(t, s[0], s[1])
                  }
                }),
                h = []
              for (let e = 0; e < f.length; e++) {
                const t = f[e]
                for (let e = 0; e < t.length; e++) {
                  const s = t[e],
                    o = s.split(":")
                  let i = !1
                  for (let e = 0; e < a; e++)
                    if (
                      n(o[e + 1]) < r[e][0] ||
                      n(o[e + 1]) > r[e][1]
                    ) {
                      i = !0
                      break
                    }
                  if (!i) {
                    const e = [],
                      t = o[o.length - 1]
                    for (let t = 1; t < o.length - 1; t++)
                      e.push(n(o[t]))
                    h.push([e, t])
                  }
                }
              }
              return h
            })(s, d)
          },
        }
      })
    const s = (e, t) => e.map((e, r) => [e, t[r]]),
      n = e => parseInt(e, 10)
    function o(e, t) {
      const r = e.multi()
      return t(r), r.execAsync()
    }
  },
  "./src/cache/spatial-index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.create = void 0)
    var n = s(r("redis")),
      o = s(r("util-promisifyall")),
      a = (r("@subspace/core"), r("./src/cache/redimension.js"))
    ;(0, o.default)(n.default.RedisClient.prototype),
      (0, o.default)(n.default.Multi.prototype)
    t.create = e => {
      const t = n.default.createClient(e.redis),
        { key: r, dimensions: s, precision: o = 64 } = e
      return (0, a.create)(t, r, `${r}-map`, s, o)
    }
  },
  "./src/data/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Hangar = t.Station = t.Item = t.ItemType = t.Inventory = t.Ship = t.ShipType = t.Body = t.User = t.sequelize = void 0)
    var n = s(r("bcrypt")),
      o = s(r("sequelize-cockroachdb")),
      a = s(r("./cfg/db.config.js"))
    const { NODE_ENV: i } = process.env
    const c = a.default[i],
      u = new o.default(c)
    t.sequelize = u
    const d = u.define("User", {
      username: o.default.STRING,
      password: o.default.STRING,
    })
    ;(t.User = d),
      d.beforeCreate(async e => {
        e.password = await (async function(e) {
          const t = await n.default.genSalt(10)
          return await n.default.hash(e, t, null)
        })(e.password)
      })
    const l = u.define("Body", {
      angle: o.default.FLOAT,
      angularVelocity: o.default.FLOAT,
      positionX: o.default.FLOAT,
      positionY: o.default.FLOAT,
      velocityX: o.default.FLOAT,
      velocityY: o.default.FLOAT,
      width: o.default.FLOAT,
      height: o.default.FLOAT,
    })
    t.Body = l
    const p = u.define("ShipType", { name: o.default.STRING })
    t.ShipType = p
    const f = u.define("Ship", {})
    t.Ship = f
    const h = u.define("Inventory", {})
    t.Inventory = h
    const y = u.define("ItemType", { name: o.default.STRING })
    t.ItemType = y
    const b = u.define("Item", {})
    t.Item = b
    const m = u.define("Station", {})
    t.Station = m
    const v = u.define("Hangar", {})
    ;(t.Hangar = v),
      d.hasOne(f, { as: "activeShip" }),
      d.hasMany(v, { as: "hangars" }),
      f.belongsTo(l, { as: "body" }),
      f.belongsTo(h, { as: "inventory" }),
      f.belongsTo(p, { as: "shipType" }),
      f.belongsTo(v, { as: "hangar" }),
      b.belongsTo(h, { as: "inventory" }),
      h.hasMany(b, { as: "items" }),
      b.belongsTo(y, { as: "itemType" }),
      m.hasMany(v, { as: "hangars" }),
      v.belongsTo(m, { as: "station" }),
      v.belongsTo(d, { as: "user" }),
      v.hasMany(f, { as: "ships" })
  },
  "./src/index.js": function(e, t, r) {
    "use strict"
    r("path")
    const s = r("remotedev-server")
    r("dotenv").config(),
      r("source-map-support/register"),
      s({ hostname: "0.0.0.0", port: 9001 }),
      r("./src/server.js"),
      process.on("SIGUSR2", () => process.exit(0))
  },
  "./src/modules/adjacent-bodies/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard"),
      n = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.updateAdjacentBodies = d),
      (t.default = function(e = l, t) {
        switch (t.type) {
          case u:
            return (0, o.default)({}, e, {
              byUserId: (0, o.default)(
                {},
                e.byUserId,
                t.payload.adjacentBodies,
              ),
            })
          default:
            return e
        }
      }),
      (t.createMiddleware = function(e) {
        return t => r => s => {
          switch (s.type) {
            case a.Loop.LOOP_TICK:
              ;(async function(e, t) {
                const r = a.Users.getUsers(e.users),
                  s = Object.keys(r).reduce((r, s) => {
                    const n = (0, a.getUserBody)(e, Number(s))
                    if (null === n) return r
                    const { position: [o, i] } = n,
                      u = [[o - c, o + c], [i - c, i + c]]
                    return (
                      (r[s] = t
                        .query(u)
                        .then(e => e.map(([, e]) => e))),
                      r
                    )
                  }, {})
                return await i.object(s)
              })(t.getState(), e).then(e => {
                r(d(e))
              })
              break
            case a.Physics.PHYSICS_ADD_BODY:
              e.insert(s.payload.body.position, s.payload.body.id)
              break
            case a.Physics.PHYSICS_UPDATE_BODY:
              e.update(s.payload.body.position, s.payload.body.id)
          }
          return r(s)
        }
      }),
      (t.getAdjacentBodies = t.ADJACENT_BODIES_UPDATE = void 0)
    var o = n(r("@babel/runtime/helpers/objectSpread")),
      a = r("@subspace/core"),
      i = s(r("./src/util/async.js"))
    const c = 500,
      u = "adjacent-bodies/update"
    function d(e) {
      return { type: u, payload: { adjacentBodies: e } }
    }
    t.ADJACENT_BODIES_UPDATE = u
    const l = { byUserId: {} }
    t.getAdjacentBodies = e => e.byUserId
  },
  "./src/modules/clients/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard"),
      n = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.addClient = l),
      (t.sendClient = function(e, t) {
        return { type: u, payload: { clientId: e, message: t } }
      }),
      (t.removeClient = p),
      (t.default = function(e = f, t) {
        switch (t.type) {
          case c: {
            const { client: r } = t.payload,
              s = (0, o.default)({}, e.byId, { [r.id]: r })
            let n = e.byUserId
            return (
              r.userId &&
                (n = (0, o.default)({}, n, { [r.userId]: r })),
              (0, o.default)({}, e, { byId: s, byUserId: n })
            )
          }
          case d: {
            const { clientId: r } = t.payload,
              s = h(e, r),
              n = (0, o.default)({}, e)
            return (
              delete n.byId[r],
              s.userId && delete n.byUserId[s.userId],
              n
            )
          }
          default:
            return e
        }
      }),
      (t.createMiddleware = function(e, t) {
        const r = {}
        return s => (
          e.connections.subscribe(async e => {
            let n
            try {
              n = await t.verify(e.metadata.token)
            } catch (t) {
              return (
                console.error(
                  `Invalid credentials for connection ${e.id}`,
                ),
                e.send(
                  JSON.stringify(
                    i.Protocol.authTokenInvalidMessage(),
                  ),
                ),
                void e.close()
              )
            }
            const { dispatch: o } = s,
              c = (0, a.default)()
            o(l({ id: c, userId: n.id, connectionId: e.id })),
              (r[e.id] = e),
              (c = c),
              (o = o),
              (e = e).closed.subscribe(() => {
                o(p(c))
              }),
              e.messages.subscribe(async e => {
                const t = JSON.parse(e),
                  [r] = t
                return console.error(`Unrecognized message: ${e}`)
              })
          }),
          e => t => {
            switch (t.type) {
              case u: {
                const { clients: e } = s.getState(),
                  { clientId: n, message: o } = t.payload,
                  { connectionId: a } = h(e, n)
                r[a].send(JSON.stringify(o))
                break
              }
              case d: {
                const { clientId: e } = t.payload,
                  { clients: n } = s.getState(),
                  { connectionId: o } = h(n, e)
                r[o].close(), delete r[o]
                break
              }
            }
            return e(t)
          }
        )
        var s, n, o
      }),
      (t.getClientByUserId = t.getClient = t.CLIENT_REMOVE = t.CLIENT_SEND = t.CLIENT_ADD = void 0)
    var o = n(r("@babel/runtime/helpers/objectSpread")),
      a = n(r("shortid")),
      i = r("@subspace/core")
    s(r("./src/modules/users/index.js"))
    const c = "client/add"
    t.CLIENT_ADD = c
    const u = "client/send!"
    t.CLIENT_SEND = u
    const d = "client/remove!"
    function l(e) {
      return { type: c, payload: { client: e } }
    }
    function p(e) {
      return { type: d, payload: { clientId: e } }
    }
    t.CLIENT_REMOVE = d
    const f = { byId: {}, byUserId: {} }
    const h = (e, t) => e.byId[t]
    t.getClient = h
    t.getClientByUserId = (e, t) => e.byUserId[t]
  },
  "./src/modules/ships/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loadShip = function(e) {
        return { type: a, payload: { shipId: e } }
      }),
      (t.loadShipFailure = u),
      (t.loadShipSuccess = d),
      (t.default = function(e, t) {
        return n.Ships.default(e, t)
      }),
      (t.createMiddleware = function(e) {
        return t => r => s => {
          switch (s.type) {
            case a: {
              const { shipId: t } = s.payload
              e.Ship.findById(t)
                .then(e => {
                  if (!e) throw new Error(`Ship ${t} not found.`)
                  const s = e.toJSON()
                  r(d(s)),
                    r(n.Ships.addShip(s)),
                    s.body && r(n.Physics.addBody(s.body))
                })
                .catch(e => r(u(t, e)))
              break
            }
            case n.Ships.SHIP_ADD:
            case n.Ships.SHIP_UPDATE: {
              const { clients: e, users: r } = t.getState(),
                { ship: a } = s.payload,
                i = n.Users.getUserByActiveShipId(r, a.id)
              if (!i) break
              const c = o.getClientByUserId(e, i.id),
                u = n.Protocol.shipUpdateMessage(a)
              t.dispatch(o.sendClient(c.id, u))
              break
            }
          }
          return r(s)
        }
      }),
      (t.SHIP_LOAD_SUCCESS = t.SHIP_LOAD_FAILURE = t.SHIP_LOAD = void 0)
    var n = r("@subspace/core"),
      o = s(r("./src/modules/clients/index.js"))
    s(r("./src/modules/users/index.js"))
    const a = "ships/load!"
    t.SHIP_LOAD = a
    const i = "ships/load_failure"
    t.SHIP_LOAD_FAILURE = i
    const c = "ships/load_success"
    function u(e, t) {
      return { type: i, payload: { shipId: e, err: t } }
    }
    function d(e) {
      return { type: c, payload: { ship: e } }
    }
    t.SHIP_LOAD_SUCCESS = c
  },
  "./src/modules/users/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.registerUser = function(e, t) {
        return {
          type: c,
          payload: { clientId: clientId, username: e, password: t },
        }
      }),
      (t.loadUser = function(e) {
        return { type: u, payload: { userId: e } }
      }),
      (t.loadUserFailure = p),
      (t.loadUserSuccess = f),
      (t.default = function(e, t) {
        return n.Users.default(e, t)
      }),
      (t.createMiddleware = function(e, t) {
        return r => {
          const s = i.throttle(() => {
            const {
                adjacentBodies: e,
                clients: t,
                users: s,
                physics: i,
                loop: c,
              } = r.getState(),
              u = a.getAdjacentBodies(e)
            for (const e in n.Users.getUsers(s)) {
              const s = Number(e),
                a = o.getClientByUserId(t, s),
                d = u[s].map(e => n.Physics.getBody(i, e)),
                l = n.Protocol.snapshotMessage(c.frame, d)
              r.dispatch(o.sendClient(a.id, l))
            }
          }, t)
          return t => a => {
            switch (a.type) {
              case n.Loop.LOOP_TICK:
                s()
                break
              case c: {
                const {
                  clientId: r,
                  username: s,
                  password: i,
                } = a.payload
                e.User.create({ username: s, password: i })
                  .then(e => {
                    e.toJSON()
                    const s = n.Protocol.userRegisterSuccessMessage()
                    t(o.sendClient(r, s))
                  })
                  .catch(e => {
                    const s = n.Protocol.userRegisterFailureMessage()
                    t(o.sendClient(r, s))
                  })
              }
              case u: {
                const { userId: r } = a.payload
                e.User.findById(r)
                  .then(e => {
                    if (!e) throw new Error(`User ${r} not found`)
                    const s = e.toJSON()
                    t(f(r)),
                      t(n.Users.addUser(s)),
                      s.activeShip && t(n.Ships.addShip(s.activeShip))
                  })
                  .catch(e => t(p(r, e)))
                break
              }
              case n.Users.USER_ADD:
              case n.Users.USER_UPDATE: {
                const { clients: e } = r.getState(),
                  { user: s } = a.payload,
                  i = o.getClientByUserId(e, s.id),
                  c = n.Protocol.userUpdateMessage(s)
                t(o.sendClient(i.id, c))
                break
              }
            }
            return t(a)
          }
        }
      }),
      (t.USER_LOAD_SUCCESS = t.USER_LOAD_FAILURE = t.USER_LOAD = t.USER_REGISTER = void 0)
    var n = r("@subspace/core"),
      o = (s(r("./src/modules/ships/index.js")),
      s(r("./src/modules/clients/index.js"))),
      a = s(r("./src/modules/adjacent-bodies/index.js")),
      i = s(r("./src/util/hrtime.js"))
    const c = "users/register!"
    t.USER_REGISTER = c
    const u = "users/load!"
    t.USER_LOAD = u
    const d = "users/load_failure"
    t.USER_LOAD_FAILURE = d
    const l = "users/load_success"
    function p(e, t) {
      return { type: d, payload: { userId: e, err: t } }
    }
    function f(e) {
      return { type: l, payload: { userId: e } }
    }
    t.USER_LOAD_SUCCESS = l
  },
  "./src/reducers.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = r("@subspace/core"),
      o = s(r("./src/modules/adjacent-bodies/index.js")),
      a = s(r("./src/modules/clients/index.js")),
      i = s(r("./src/modules/users/index.js")),
      c = s(r("./src/modules/ships/index.js"))
    const { loop: u, physics: d } = n.reducers
    var l = {
      adjacentBodies: o.default,
      clients: a.default,
      users: i.default,
      ships: c.default,
      loop: u,
      physics: d,
    }
    t.default = l
  },
  "./src/routers/auth.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = s(r("express")),
      o = r("./src/data/index.js"),
      a = r("./src/auth/jwt.js"),
      i = r("./src/auth/middleware.js")
    const c = n.default.Router()
    c.route("/register").post(async (e, t) => {
      let r,
        { username: s, password: n } = e.body
      if (await o.User.findOne({ where: { username: s } }))
        return void t
          .status(409)
          .json({ error: "Username already taken" })
      try {
        r = await o.User.create({ username: s, password: n })
      } catch (e) {
        return void t.status(400).json({ error: e })
      }
      const i = r.toJSON()
      t.status(201).json({ token: (0, a.generateToken)(i), user: i })
    }),
      c.route("/login").post(i.login, (e, t) => {
        const { user: { id: r, username: s } } = e,
          n = { id: r, username: s }
        t
          .status(200)
          .json({ token: (0, a.generateToken)(n), user: n })
      }),
      c.route("/verify").post(i.auth, (e, t) => {
        const { user: { id: r, username: s } } = e,
          n = { id: r, username: s }
        t
          .status(200)
          .json({ token: (0, a.generateToken)(n), user: n })
      })
    var u = c
    t.default = u
  },
  "./src/scheduler.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.create = function(e) {
        const t = e * n.NS_PER_SEC,
          r = [0, t]
        let s = process.hrtime()
        return () =>
          new Promise(e => {
            setTimeout(
              (function e(o) {
                return () => {
                  const a = process.hrtime(s),
                    i = n.sub(a, r),
                    c = n.sum(i)
                  c < 0
                    ? setImmediate(e(o))
                    : (o((c + t) / n.NS_PER_SEC),
                      (s = n.add(process.hrtime(), i)))
                }
              })(e),
            )
          })
      })
    var n = s(r("./src/util/hrtime.js"))
  },
  "./src/server.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault"),
      n = r("@babel/runtime/helpers/interopRequireWildcard"),
      o = r("http"),
      a = n(r("@web-udp/server")),
      i = r("@subspace/core"),
      c = s(r("express")),
      u = s(r("passport")),
      d = s(r("body-parser")),
      l = s(r("./cfg/server.config.json")),
      p = n(r("./src/data/index.js")),
      f = r("./src/store/index.js"),
      h = r("./src/auth/index.js"),
      y = r("./src/auth/strategy.js"),
      b = s(r("./src/routers/auth.js"))
    const { TICK_RATE: m, SEND_RATE: v, PORT: j } = process.env,
      S = 1 / (Number(m) || l.default.tick_rate),
      _ = 1 / (Number(v) || l.default.send_rate),
      g = (0, c.default)(),
      I = new o.createServer(g),
      w = new a.Server({ server: I })
    u.default.use(y.jwt),
      u.default.use(y.local),
      g.use((0, d.default)()),
      g.use("/auth", b.default),
      (async function() {
        ;(0, f.configureStore)({
          auth: { authenticate: h.authenticate, verify: h.verify },
          db: p,
          tickRate: S,
          sendRate: _,
          udp: w,
        }).dispatch(i.Loop.startLoop()),
          console.log("syncing database"),
          await p.sequelize.sync(),
          console.log(`server listening at //localhost:${String(j)}`),
          I.listen(Number(j))
      })()
  },
  "./src/store/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard"),
      n = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.configureStore = function(e) {
        const {
            db: t,
            auth: r,
            tickRate: s,
            sendRate: n,
            udp: i,
          } = e,
          c = u.create(s),
          d = [
            (0, a.applyMiddleware)(
              o.Loop.createMiddleware(c),
              p.createMiddleware(t),
              o.Ships.createMiddleware(),
              h.createMiddleware(b),
              f.createMiddleware(t, n),
              l.createMiddleware(i, r),
            ),
          ],
          v = (0, a.combineReducers)(y.default)
        return (0, a.createStore)(v, m(...d))
      })
    var o = r("@subspace/core"),
      a = r("redux"),
      i = r("remote-redux-devtools"),
      c = n(r("./cfg/redis.config.js")),
      u = s(r("./src/scheduler.js")),
      d = r("./src/cache/index.js"),
      l = s(r("./src/modules/clients/index.js")),
      p = s(r("./src/modules/ships/index.js")),
      f = s(r("./src/modules/users/index.js")),
      h = s(r("./src/modules/adjacent-bodies/index.js")),
      y = n(r("./src/reducers.js"))
    o.Physics.P2Driver.create({ gravity: [0, 0] })
    const b = d.SpatialIndex.create({
        redis: c.default,
        key: "ss-body",
        dimensions: 2,
      }),
      m = (0, i.composeWithDevTools)({
        port: 9001,
        actionsBlacklist: [
          o.Loop.LOOP_TICK,
          o.Physics.PHYSICS_UPDATE_BODY,
          h.ADJACENT_BODIES_UPDATE,
        ],
      })
  },
  "./src/util/async.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.object = function(e) {
        const t = Object.keys(e)
        return Promise.all(
          t.map(t => {
            const r = e[t]
            return "object" != typeof r || r.then
              ? r
              : promiseAllObject(r)
          }),
        ).then(e => s(t, e))
      })
    const s = (e = [], t = []) =>
      e.reduce((e, r, s) => ((e[r] = t[s]), e), {})
  },
  "./src/util/hrtime.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.add = n),
      (t.sub = o),
      (t.sum = a),
      (t.throttle = function(e, t) {
        const r = [0, t * s]
        let i,
          c = process.hrtime()
        return (...t) => {
          const s = process.hrtime(c),
            u = o(s, r),
            d = a(u)
          return (
            d >= 0 && ((c = n(process.hrtime(), u)), (i = e(...t))), i
          )
        }
      }),
      (t.NS_PER_SEC = void 0)
    const s = 1e9
    function n(e, t) {
      return [e[0] + t[0], e[1] + t[1]]
    }
    function o(e, t) {
      return [e[0] - t[0], e[1] - t[1]]
    }
    function a(e) {
      return e[0] * s + e[1]
    }
    t.NS_PER_SEC = s
  },
  "@babel/runtime/helpers/interopRequireDefault": function(e, t) {
    e.exports = require("@babel/runtime/helpers/interopRequireDefault")
  },
  "@babel/runtime/helpers/interopRequireWildcard": function(e, t) {
    e.exports = require("@babel/runtime/helpers/interopRequireWildcard")
  },
  "@babel/runtime/helpers/objectSpread": function(e, t) {
    e.exports = require("@babel/runtime/helpers/objectSpread")
  },
  "@subspace/core": function(e, t) {
    e.exports = require("@subspace/core")
  },
  "@web-udp/server": function(e, t) {
    e.exports = require("@web-udp/server")
  },
  bcrypt: function(e, t) {
    e.exports = require("bcrypt")
  },
  "body-parser": function(e, t) {
    e.exports = require("body-parser")
  },
  dotenv: function(e, t) {
    e.exports = require("dotenv")
  },
  express: function(e, t) {
    e.exports = require("express")
  },
  http: function(e, t) {
    e.exports = require("http")
  },
  jsonwebtoken: function(e, t) {
    e.exports = require("jsonwebtoken")
  },
  passport: function(e, t) {
    e.exports = require("passport")
  },
  "passport-jwt": function(e, t) {
    e.exports = require("passport-jwt")
  },
  "passport-local": function(e, t) {
    e.exports = require("passport-local")
  },
  path: function(e, t) {
    e.exports = require("path")
  },
  redis: function(e, t) {
    e.exports = require("redis")
  },
  redux: function(e, t) {
    e.exports = require("redux")
  },
  "remote-redux-devtools": function(e, t) {
    e.exports = require("remote-redux-devtools")
  },
  "remotedev-server": function(e, t) {
    e.exports = require("remotedev-server")
  },
  sequelize: function(e, t) {
    e.exports = require("sequelize")
  },
  "sequelize-cockroachdb": function(e, t) {
    e.exports = require("sequelize-cockroachdb")
  },
  shortid: function(e, t) {
    e.exports = require("shortid")
  },
  "source-map-support/register": function(e, t) {
    e.exports = require("source-map-support/register")
  },
  "util-promisifyall": function(e, t) {
    e.exports = require("util-promisifyall")
  },
})
//# sourceMappingURL=index.js.map
