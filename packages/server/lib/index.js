!(function(e) {
  var t = {}
  function r(s) {
    if (t[s]) return t[s].exports
    var o = (t[s] = { i: s, l: !1, exports: {} })
    return (
      e[s].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
    )
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function(e, t, s) {
      r.o(e, t) ||
        Object.defineProperty(e, t, { enumerable: !0, get: s })
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && "object" == typeof e && e && e.__esModule) return e
      var s = Object.create(null)
      if (
        (r.r(s),
        Object.defineProperty(s, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            s,
            o,
            function(t) {
              return e[t]
            }.bind(null, o),
          )
      return s
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
    r((r.s = "./src/index.js"))
})({
  "./cfg/db.config.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var o = s(r("sequelize")),
      n = r("./cfg/index.js")
    const {
      username: i,
      password: a,
      database: u,
      host: c,
      port: d,
    } = n.DbConfig
    var l = {
      username: i,
      password: a,
      database: u,
      host: c,
      port: d,
      dialect: "postgres",
      retry: {
        match: [
          o.default.ConnectionError,
          o.default.ConnectionRefusedError,
          o.default.ConnectionTimedOutError,
        ],
      },
    }
    t.default = l
  },
  "./cfg/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GameConfig = t.RedisConfig = t.JwtConfig = t.DbConfig = t.AppConfig = t.EnvConfig = void 0)
    var o = s(r("joi"))
    const {
        PORT: n,
        DB_HOST: i,
        DB_PORT: a,
        DB_NAME: u,
        DB_USERNAME: c,
        DB_PASSWORD: d,
        NODE_ENV: l,
        JWT_SECRET: p,
        JWT_EXPIRE: f,
        REDIS_HOST: b,
        REDIS_PORT: y,
        TICK_RATE: j,
        SEND_RATE: m,
      } = process.env,
      v = o.default
        .string()
        .hostname()
        .required(),
      h = o.default
        .string()
        .alphanum()
        .required(),
      g = o.default
        .schema({
          PORT: h,
          DB_HOST: v,
          DB_PORT: h,
          DB_NAME: h,
          DB_USERNAME: h,
          DB_PASSWORD: h,
          NODE_ENV: o.default
            .string()
            .valid("production", "development")
            .required(),
          JWT_SECRET: h,
          JWT_EXPIRE: h,
          REDIS_HOST: v,
          REDIS_PORT: h,
          TICK_RATE: h,
          SEND_RATE: h,
        })
        .unknown(!0),
      x = o.default.validate(process.env, g)
    if (x.error)
      throw new Error(`Invalid environment configuration: ${x.error}`)
    const E = { node: String(l) }
    t.EnvConfig = E
    const D = { port: Number(n) }
    t.AppConfig = D
    const _ = {
      host: String(i),
      port: Number(a),
      database: String(u),
      username: String(c),
      password: String(d),
    }
    t.DbConfig = _
    const O = { secret: String(p), expire: String(f) }
    t.JwtConfig = O
    const R = { host: String(b), port: Number(y) }
    t.RedisConfig = R
    const T = { tickRate: Number(j), sendRate: Number(m) }
    t.GameConfig = T
  },
  "./cfg/redis.config.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var s = r("./cfg/index.js")
    const { port: o, host: n } = s.RedisConfig
    var i = {
      port: o,
      host: n,
      family: "IPv4",
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
    t.default = i
  },
  "./src/auth/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.authenticate = async function(e, t) {
        return c(await o.authenticate(e, t))
      }),
      (t.verify = async function(e) {
        return (0, n.verifyToken)(e, a)
      }),
      (t.token = c)
    var o = s(r("./src/auth/util.js")),
      n = r("./src/auth/jwt.js"),
      i = r("./cfg/index.js")
    const { secret: a, expire: u } = i.JwtConfig
    async function c(e) {
      return (0, n.generateToken)(e, a, u)
    }
  },
  "./src/auth/jwt.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.verifyToken = function(e, t) {
        return o.default.verify(e, t)
      }),
      (t.generateToken = function(e, t, r) {
        return o.default.sign(e, t, { expiresIn: r })
      })
    var o = s(r("jsonwebtoken"))
  },
  "./src/auth/middleware.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.login = t.auth = void 0)
    const s = r("passport"),
      o = s.authenticate("jwt", { session: !1 })
    t.auth = o
    const n = s.authenticate("local", { session: !1 })
    t.login = n
  },
  "./src/auth/strategy.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.jwt = t.local = void 0)
    var o = r("passport-jwt"),
      n = s(r("passport-local")),
      i = r("./src/auth/util.js"),
      a = r("./src/data/index.js")
    const { JWT_SECRET: u } = process.env,
      c = {
        jwtFromRequest: o.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: u,
      },
      d = new n.default(async (e, t, r) => {
        let s
        try {
          s = await (0, i.authenticate)(e, t)
        } catch (e) {
          return r(e)
        }
        return r(null, s)
      })
    t.local = d
    const l = new o.Strategy(c, async (e, t) => {
      let r
      try {
        r = await a.User.findById(e.id)
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
      (t.comparePassword = i),
      (t.authenticate = async function(e, t) {
        let r = await n.User.findOne({ where: { username: e } })
        if (!r) throw new Error("Invalid username or password")
        let s = r.toJSON()
        if (!await i(t, s))
          throw new Error("Invalid username or password")
        return s
      })
    var o = s(r("bcrypt")),
      n = r("./src/data/index.js")
    function i(e, t) {
      return o.default.compare(e, t.password)
    }
  },
  "./src/cache/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SpatialIndex = void 0)
    var o = s(r("./src/cache/spatial-index.js"))
    t.SpatialIndex = o
  },
  "./src/cache/spatial-index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.create = void 0)
    var o = s(r("redis")),
      n = s(r("util-promisifyall")),
      i = (r("@subspace/core"), s(r("@subspace/redimension")))
    ;(0, n.default)(o.default.RedisClient.prototype),
      (0, n.default)(o.default.Multi.prototype)
    t.create = e => {
      const t = o.default.createClient(e.redis),
        { key: r, dimensions: s, precision: n = 64 } = e
      return (0, i.default)(t, r, `${r}-map`, s, n)
    }
  },
  "./src/data/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Hangar = t.Station = t.Item = t.ItemType = t.Inventory = t.Ship = t.ShipType = t.Body = t.User = t.sequelize = void 0)
    var o = s(r("bcrypt")),
      n = s(r("sequelize-cockroachdb")),
      i = r("./cfg/index.js")
    const a = s(r("./cfg/db.config.js")).default[i.EnvConfig.node],
      u = new n.default(a)
    t.sequelize = u
    const c = u.define("User", {
      username: n.default.STRING,
      password: n.default.STRING,
    })
    ;(t.User = c),
      c.beforeCreate(async e => {
        e.password = await (async function(e) {
          const t = await o.default.genSalt(10)
          return await o.default.hash(e, t, null)
        })(e.password)
      })
    const d = u.define("Body", {
      angle: n.default.FLOAT,
      angularVelocity: n.default.FLOAT,
      positionX: n.default.FLOAT,
      positionY: n.default.FLOAT,
      velocityX: n.default.FLOAT,
      velocityY: n.default.FLOAT,
      width: n.default.FLOAT,
      height: n.default.FLOAT,
    })
    t.Body = d
    const l = u.define("ShipType", { name: n.default.STRING })
    t.ShipType = l
    const p = u.define("Ship", {})
    t.Ship = p
    const f = u.define("Inventory", {})
    t.Inventory = f
    const b = u.define("ItemType", { name: n.default.STRING })
    t.ItemType = b
    const y = u.define("Item", {})
    t.Item = y
    const j = u.define("Station", {})
    t.Station = j
    const m = u.define("Hangar", {})
    ;(t.Hangar = m),
      c.hasOne(p, { as: "activeShip" }),
      c.hasMany(m, { as: "hangars" }),
      p.belongsTo(d, { as: "body" }),
      p.belongsTo(f, { as: "inventory" }),
      p.belongsTo(l, { as: "shipType" }),
      p.belongsTo(m, { as: "hangar" }),
      y.belongsTo(f, { as: "inventory" }),
      f.hasMany(y, { as: "items" }),
      y.belongsTo(b, { as: "itemType" }),
      j.hasMany(m, { as: "hangars" }),
      m.belongsTo(j, { as: "station" }),
      m.belongsTo(c, { as: "user" }),
      m.hasMany(p, { as: "ships" })
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
  "./src/reducers.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard"),
      o = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = o(r("@babel/runtime/helpers/objectSpread")),
      i = r("@subspace/core"),
      a = r("@subspace/redux-module"),
      u = s(r("./src/state/modules/index.js"))
    const c = (0, a.extractReducers)({
        Async: i.Async,
        Loop: i.Loop,
        Physics: i.Physics,
        Ships: i.Ships,
        Users: i.Users,
      }),
      d = (0, a.extractReducers)(u)
    var l = (0, n.default)({}, c, d)
    t.default = l
  },
  "./src/routers/async.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e) {
        return (t, r, s) => {
          Promise.resolve(e(t, r, s)).catch(s)
        }
      })
  },
  "./src/routers/auth.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var o = s(r("express")),
      n = r("./src/data/index.js"),
      i = r("./src/auth/index.js"),
      a = r("./src/auth/middleware.js"),
      u = s(r("./src/routers/async.js"))
    const c = o.default.Router(),
      d = (0, u.default)(async (e, t) => {
        let r,
          { username: s, password: o } = e.body
        if (await n.User.findOne({ where: { username: s } }))
          return void t
            .status(409)
            .json({ error: "Username already taken" })
        try {
          r = await n.User.create({ username: s, password: o })
        } catch (e) {
          return void t.status(400).json({ error: e })
        }
        const a = r.toJSON()
        t.status(201).json({ token: (0, i.token)(a), user: a })
      })
    c.route("/register").post(d),
      c.route("/login").post(a.login, function(e, t, r) {
        const { user: { id: s, username: o } } = e,
          n = { id: s, username: o }
        t.status(200).json({ token: (0, i.token)(n), user: n })
      }),
      c.route("/verify").post(a.auth, function(e, t, r) {
        const { user: { id: s, username: o } } = e,
          n = { id: s, username: o }
        t.status(200).json({ token: (0, i.token)(n), user: n })
      })
    var l = c
    t.default = l
  },
  "./src/server.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault"),
      o = r("@babel/runtime/helpers/interopRequireWildcard"),
      n = r("http"),
      i = o(r("@web-udp/server")),
      a = r("@subspace/core"),
      u = s(r("express")),
      c = s(r("passport")),
      d = r("body-parser"),
      l = o(r("./src/data/index.js")),
      p = r("./cfg/index.js"),
      f = r("./src/state/store.js"),
      b = o(r("./src/auth/index.js")),
      y = r("./src/auth/strategy.js"),
      j = s(r("./src/routers/auth.js"))
    const m = (0, u.default)(),
      v = new n.createServer(m),
      h = new i.Server({ server: v })
    c.default.use(y.jwt),
      c.default.use(y.local),
      m.use((0, d.json)()),
      m.use("/auth", j.default),
      (async function() {
        ;(0, f.configureStore)({
          auth: b,
          db: l,
          tickRate: 1 / p.GameConfig.tickRate,
          sendRate: 1 / p.GameConfig.sendRate,
          udp: h,
        }).dispatch(a.Loop.start()),
          await l.sequelize.sync(),
          console.log(
            `server listening at //localhost:${String(
              p.AppConfig.port,
            )}`,
          ),
          v.listen(Number(p.AppConfig.port))
      })()
  },
  "./src/state/epics/adjacent-bodies/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e) {
        return [
          function(t, r) {
            return t
              .ofType(o.Loop.TICK)
              .map(() =>
                (async function(e, t) {
                  const r = o.Users.getUsers(e),
                    s = Object.keys(r).reduce((r, s) => {
                      const n = (0, o.getUserBody)(e, Number(s))
                      if (null === n) return r
                      const { position: [i, u] } = n,
                        c = [[i - a, i + a], [u - a, u + a]]
                      return (
                        (r[s] = t
                          .query(c)
                          .then(e => e.map(([, e]) => e))),
                        r
                      )
                    }, {})
                  return await n.object(s)
                })(r.getState(), e),
              )
              .mapTo(e => i.AdjacentBodies.update(e))
          },
          function(t, r) {
            return t
              .ofType(o.Physics.ADD_BODY)
              .do(({ payload: { body: { position: t, id: r } } }) =>
                e.insert(t, r),
              )
              .ignoreElements()
          },
          function(t, r) {
            return t
              .ofType(o.Physics.UPDATE_BODY)
              .do(({ payload: { body: { position: t, id: r } } }) =>
                e.update(t, r),
              )
              .ignoreElements()
          },
        ]
      })
    var o = r("@subspace/core"),
      n = s(r("./src/util/async.js")),
      i = r("./src/state/modules/index.js")
    const a = 500
  },
  "./src/state/epics/clients/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t) {
        const r = {}
        return [
          function(s, a) {
            e.connections.subscribe(async function(e) {
              let u
              const { id: c } = e
              try {
                u = await t.verify(e.metadata.token)
              } catch (t) {
                return (
                  console.error(
                    `Invalid credentials for connection ${e.id}`,
                  ),
                  e.send(
                    n.Protocol.serialize(
                      n.Protocol.authTokenInvalidMessage(),
                    ),
                  ),
                  void e.close()
                )
              }
              const d = (0, o.default)()
              if (((r[c] = e), !u.id)) return
              a.dispatch(
                i.Clients.add({
                  id: d,
                  userId: u.id,
                  connectionId: c,
                }),
              ),
                (function(e, t) {
                  e.closed.subscribe(() =>
                    a.dispatch(i.Clients.remove(t)),
                  ),
                    e.messages.subscribe(e => {
                      const t = n.Protocol.deserialize(e),
                        [r] = t
                      return console.error(
                        `Unrecognized message type ${r}`,
                      )
                    }),
                    s.ignoreElements()
                })(e, d)
            })
          },
          function(e, t) {
            return e
              .ofType(i.Clients.SEND)
              .do(({ payload: { clientId: e, message: s } }) => {
                const { connectionId: o } = i.Clients.getClient(
                  t.getState(),
                  e,
                )
                r[o].send(n.Protocol.serialize(s))
              })
              .ignoreElements()
          },
          function(e, t) {
            return e
              .ofType(i.Clients.REMOVE)
              .do(({ payload: { clientId: e } }) => {
                const { connectionId: s } = i.Clients.getClient(
                  t.getState(),
                  e,
                )
                r[s].close(), delete r[s]
              })
              .ignoreElements()
          },
        ]
      })
    var o = s(r("shortid")),
      n = r("@subspace/core"),
      i = r("./src/state/modules/index.js")
  },
  "./src/state/epics/ships/index.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e) {
        return [
          function(t, r) {
            return t
              .ofType(o.Ships.LOAD)
              .mapTo(({ payload: { shipId: t } }) =>
                e.Ship.findById(t)
                  .then(e => {
                    if (!e) throw new Error(`Ship ${t} not found.`)
                    return o.Ships.fulfillLoad(e.toJSON())
                  })
                  .catch(e => o.Ships.rejectLoad(t, e)),
              )
          },
          function(e, t) {
            return e
              .ofType(o.Ships.ADD, o.Ships.UPDATE)
              .mapTo(({ payload: { ship: e } }) => {
                const r = t.getState(),
                  n = o.Users.getUserByActiveShipId(r, e.id),
                  i = o.Clients.getClientByUserId(r, n.id),
                  a = s.Protocol.shipUpdateMessage(e)
                return o.Clients.send(i.id, a)
              })
          },
        ]
      })
    var s = r("@subspace/core"),
      o = r("./src/state/modules/index.js")
  },
  "./src/state/epics/users/index.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t) {
        return [
          function(e, r) {
            return e.pipe(
              (0, o.ofType)(s.Loop.TICK),
              (0, u.throttleTime)(t),
              (0, u.switchMap)(() => {
                const e = (function(e) {
                  const {
                      adjacentBodies: t,
                      clients: r,
                      users: o,
                      physics: n,
                      loop: i,
                    } = e,
                    a = c.AdjacentBodies.getAdjacentBodies(e)
                  return Object.keys(c.Users.getUsers(o)).map(t => {
                    const r = Number(t),
                      o = c.Clients.getClientByUserId(e, r),
                      u = a[r].map(e => s.Physics.getBody(n, e)),
                      d = s.Protocol.snapshotMessage(i.frame, u)
                    return c.Clients.send(o.id, d)
                  })
                })(r.getState())
                return (0, n.from)(e)
              }),
            )
          },
          function(t, r) {
            return t.pipe(
              (0, o.ofType)(c.Users.LOAD),
              (0, u.switchMap)(({ payload: { userId: t } }) =>
                (0, a.fromPromise)(e.User.findById(t)).pipe(
                  (0, u.map)(e => {
                    if (!e) throw new Error(`User ${t} not found`)
                    return e.toJSON()
                  }),
                  (0, u.catchError)(e =>
                    (0, i.of)(c.Users.rejectLoad(t, e)),
                  ),
                ),
              ),
              (0, u.switchMap)(e => {
                const t = [c.Users.fulfillLoad(e)]
                return (
                  e.activeShip &&
                    t.push(c.Ships.addShip(e.activeShip)),
                  (0, n.from)(t)
                )
              }),
            )
          },
          function(e, t) {
            return e.pipe(
              (0, o.ofType)(c.Users.ADD, c.Users.UPDATE),
              (0, u.mapTo)(e => {
                const { payload: { user: r } } = e,
                  s = c.Clients.getClientByUserId(t.getState(), r.id)
                return c.Clients.send(s.id, e)
              }),
            )
          },
        ]
      })
    var s = r("@subspace/core"),
      o = r("redux-observable"),
      n = r("rxjs/observable/from"),
      i = r("rxjs/observable/of"),
      a = (r("rxjs/observable/interval"),
      r("rxjs/observable/fromPromise")),
      u = r("rxjs/operators"),
      c = r("./src/state/modules/index.js")
  },
  "./src/state/modules/adjacent-bodies/action-creators.js": function(
    e,
    t,
    r,
  ) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.update = function(e) {
        return { type: s.UPDATE, payload: { adjacentBodies: e } }
      })
    var s = r("./src/state/modules/adjacent-bodies/action-types.js")
  },
  "./src/state/modules/adjacent-bodies/action-types.js": function(
    e,
    t,
    r,
  ) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = t.UPDATE = void 0)
    t.UPDATE = "UPDATE"
    var s = { UPDATE: "UPDATE" }
    t.default = s
  },
  "./src/state/modules/adjacent-bodies/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault"),
      o = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = r("@subspace/redux-module"),
      i = o(
        r("./src/state/modules/adjacent-bodies/action-creators.js"),
      ),
      a = s(r("./src/state/modules/adjacent-bodies/action-types.js")),
      u = o(r("./src/state/modules/adjacent-bodies/selectors.js")),
      c = s(r("./src/state/modules/adjacent-bodies/reducer.js")),
      d = (0, n.createReduxModule)("AdjacentBodies", {
        actionTypes: a.default,
        actionCreators: i,
        reducer: c.default,
        selectors: u,
      })
    t.default = d
  },
  "./src/state/modules/adjacent-bodies/reducer.js": function(
    e,
    t,
    r,
  ) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e = i, t) {
        switch (t.type) {
          case n.UPDATE:
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
      })
    var o = s(r("@babel/runtime/helpers/objectSpread")),
      n = r("./src/state/modules/adjacent-bodies/action-types.js")
    const i = { byUserId: {} }
  },
  "./src/state/modules/adjacent-bodies/selectors.js": function(
    e,
    t,
    r,
  ) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getAdjacentBodies = void 0)
    t.getAdjacentBodies = e => e.byUserId
  },
  "./src/state/modules/clients/action-creators.js": function(
    e,
    t,
    r,
  ) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.add = function(e) {
        return { type: s.ADD, payload: { client: e } }
      }),
      (t.send = function(e, t) {
        return { type: s.SEND, payload: { clientId: e, message: t } }
      }),
      (t.remove = function(e) {
        return { type: s.REMOVE, payload: { clientId: e } }
      })
    var s = r("./src/state/modules/clients/action-types.js")
  },
  "./src/state/modules/clients/action-types.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = t.REMOVE = t.SEND = t.ADD = void 0)
    t.ADD = "ADD"
    t.SEND = "SEND"
    t.REMOVE = "REMOVE"
    var s = { ADD: "ADD", SEND: "SEND", REMOVE: "REMOVE" }
    t.default = s
  },
  "./src/state/modules/clients/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault"),
      o = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = r("@subspace/redux-module"),
      i = o(r("./src/state/modules/clients/action-creators.js")),
      a = s(r("./src/state/modules/clients/action-types.js")),
      u = o(r("./src/state/modules/clients/selectors.js")),
      c = s(r("./src/state/modules/clients/reducer.js")),
      d = (0, n.createReduxModule)("Clients", {
        actionTypes: a.default,
        actionCreators: i,
        reducer: c.default,
        selectors: u,
      })
    t.default = d
  },
  "./src/state/modules/clients/reducer.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e = a, t) {
        switch (t.type) {
          case i.ADD: {
            const { client: r } = t.payload,
              s = (0, o.default)({}, e.byId, { [r.id]: r })
            let n = e.byUserId
            return (
              r.userId &&
                (n = (0, o.default)({}, n, { [r.userId]: r })),
              (0, o.default)({}, e, { byId: s, byUserId: n })
            )
          }
          case i.REMOVE: {
            const { clientId: r } = t.payload,
              s = (0, n.getClient)(e, r),
              i = (0, o.default)({}, e),
              { userId: a } = s
            return delete i.byId[r], a && delete i.byUserId[a], i
          }
          default:
            return e
        }
      })
    var o = s(r("@babel/runtime/helpers/objectSpread")),
      n = r("./src/state/modules/clients/selectors.js"),
      i = r("./src/state/modules/clients/action-types.js")
    const a = { byId: {}, byUserId: {} }
  },
  "./src/state/modules/clients/selectors.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getClientByUserId = t.getClient = void 0)
    t.getClient = (e, t) => e.byId[t]
    t.getClientByUserId = (e, t) => e.byUserId[t]
  },
  "./src/state/modules/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "AdjacentBodies", {
        enumerable: !0,
        get: function() {
          return o.default
        },
      }),
      Object.defineProperty(t, "Clients", {
        enumerable: !0,
        get: function() {
          return n.default
        },
      }),
      Object.defineProperty(t, "Ships", {
        enumerable: !0,
        get: function() {
          return i.default
        },
      }),
      Object.defineProperty(t, "Users", {
        enumerable: !0,
        get: function() {
          return a.default
        },
      })
    var o = s(r("./src/state/modules/adjacent-bodies/index.js")),
      n = s(r("./src/state/modules/clients/index.js")),
      i = s(r("./src/state/modules/ships/index.js")),
      a = s(r("./src/state/modules/users/index.js"))
  },
  "./src/state/modules/ships/action-creators.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.load = function(e) {
        return { type: s.LOAD, payload: { shipId: e } }
      }),
      (t.fulfillLoad = function(e) {
        return { type: s.LOAD_FULFILLED, payload: { ship: e } }
      }),
      (t.rejectLoad = function(e, t) {
        return {
          type: s.LOAD_REJECTED,
          payload: { shipId: e },
          error: t,
        }
      })
    var s = r("./src/state/modules/ships/action-types.js")
  },
  "./src/state/modules/ships/action-types.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = t.LOAD_REJECTED = t.LOAD_FULFILLED = t.LOAD = void 0)
    var s = r("@subspace/core")
    const [o, n, i] = (0, s.toAsync)("LOAD")
    ;(t.LOAD_REJECTED = i), (t.LOAD_FULFILLED = n), (t.LOAD = o)
    var a = { LOAD: o, LOAD_FULFILLED: n, LOAD_REJECTED: i }
    t.default = a
  },
  "./src/state/modules/ships/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault"),
      o = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = r("@subspace/core"),
      i = r("@subspace/redux-module"),
      a = o(r("./src/state/modules/ships/action-creators.js")),
      u = s(r("./src/state/modules/ships/action-types.js")),
      c = o(r("./src/state/modules/ships/selectors.js")),
      d = s(r("./src/state/modules/ships/reducer.js"))
    const l = (0, i.createReduxModule)("Ships", {
      actionTypes: u.default,
      actionCreators: a,
      reducer: d.default,
      selectors: c,
    })
    var p = (0, i.composeReduxModules)(n.Ships, l)
    t.default = p
  },
  "./src/state/modules/ships/reducer.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t) {
        return e
      })
    r("@subspace/core")
  },
  "./src/state/modules/ships/selectors.js": function(e, t, r) {
    "use strict"
  },
  "./src/state/modules/users/action-creators.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.registerUser = function(e, t, r) {
        return {
          type: s.REGISTER,
          payload: { username: e, password: t, clientId: r },
        }
      }),
      (t.loadUser = function(e) {
        return { type: s.LOAD, payload: { userId: e } }
      }),
      (t.fulfillLoad = function(e) {
        return { type: s.LOAD_FULFILLED, payload: { userId: e } }
      }),
      (t.rejectLoad = function(e, t) {
        return {
          type: s.LOAD_REJECTED,
          payload: { userId: e, err: t },
        }
      })
    var s = r("./src/state/modules/users/action-types.js")
  },
  "./src/state/modules/users/action-types.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = t.LOAD_REJECTED = t.LOAD_FULFILLED = t.LOAD = t.REGISTER = void 0)
    var s = r("@subspace/core")
    t.REGISTER = "REGISTER"
    const [o, n, i] = (0, s.toAsync)("LOAD")
    ;(t.LOAD_REJECTED = i), (t.LOAD_FULFILLED = n), (t.LOAD = o)
    var a = {
      REGISTER: "REGISTER",
      LOAD: o,
      LOAD_FULFILLED: n,
      LOAD_REJECTED: i,
    }
    t.default = a
  },
  "./src/state/modules/users/index.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault"),
      o = r("@babel/runtime/helpers/interopRequireWildcard")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0)
    var n = r("@subspace/core"),
      i = r("@subspace/redux-module"),
      a = o(r("./src/state/modules/users/action-creators.js")),
      u = s(r("./src/state/modules/users/action-types.js")),
      c = o(r("./src/state/modules/users/selectors.js")),
      d = s(r("./src/state/modules/users/reducer.js"))
    const l = (0, i.createReduxModule)("Users", {
      actionTypes: u.default,
      actionCreators: a,
      reducer: d.default,
      selectors: c,
    })
    var p = (0, i.composeReduxModules)(n.Users, l)
    t.default = p
  },
  "./src/state/modules/users/reducer.js": function(e, t, r) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t) {
        return e
      })
    r("@subspace/core")
  },
  "./src/state/modules/users/selectors.js": function(e, t, r) {
    "use strict"
  },
  "./src/state/store.js": function(e, t, r) {
    "use strict"
    var s = r("@babel/runtime/helpers/interopRequireDefault")
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.configureStore = function(e) {
        const {
            db: t,
            auth: r,
            tickRate: s,
            sendRate: i,
            udp: u,
          } = e,
          c = (0, a.createEpicMiddleware)(
            (0, a.combineEpics)(
              ...[
                (0, f.default)(j),
                (0, p.default)(u, r),
                (0, b.default)(t),
                (0, y.default)(t, i),
              ],
              ...o.epics,
            ),
          ),
          l = [(0, n.applyMiddleware)(c)],
          v = (0, n.combineReducers)(d.default)
        return (0, n.createStore)(v, m(...l))
      })
    var o = r("@subspace/core"),
      n = r("redux"),
      i = r("remote-redux-devtools"),
      a = r("redux-observable"),
      u = s(r("./cfg/redis.config.js")),
      c = r("./src/cache/index.js"),
      d = s(r("./src/reducers.js")),
      l = s(r("./src/state/modules/adjacent-bodies/index.js")),
      p = s(r("./src/state/epics/clients/index.js")),
      f = s(r("./src/state/epics/adjacent-bodies/index.js")),
      b = s(r("./src/state/epics/ships/index.js")),
      y = s(r("./src/state/epics/users/index.js"))
    const j = c.SpatialIndex.create({
        redis: u.default,
        key: "ss-body",
        dimensions: 2,
      }),
      m = (0, i.composeWithDevTools)({
        port: 9001,
        actionsBlacklist: [
          o.Loop.TICK,
          o.Physics.UPDATE_BODY,
          l.default.UPDATE,
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
  "@subspace/redimension": function(e, t) {
    e.exports = require("@subspace/redimension")
  },
  "@subspace/redux-module": function(e, t) {
    e.exports = require("@subspace/redux-module")
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
  joi: function(e, t) {
    e.exports = require("joi")
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
  "redux-observable": function(e, t) {
    e.exports = require("redux-observable")
  },
  "remote-redux-devtools": function(e, t) {
    e.exports = require("remote-redux-devtools")
  },
  "remotedev-server": function(e, t) {
    e.exports = require("remotedev-server")
  },
  "rxjs/observable/from": function(e, t) {
    e.exports = require("rxjs/observable/from")
  },
  "rxjs/observable/fromPromise": function(e, t) {
    e.exports = require("rxjs/observable/fromPromise")
  },
  "rxjs/observable/interval": function(e, t) {
    e.exports = require("rxjs/observable/interval")
  },
  "rxjs/observable/of": function(e, t) {
    e.exports = require("rxjs/observable/of")
  },
  "rxjs/operators": function(e, t) {
    e.exports = require("rxjs/operators")
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
