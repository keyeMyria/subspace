!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.SubspaceCore = t())
        : (e.SubspaceCore = t())
})(global, function() {
  return (function(e) {
    var t = {}
    function r(o) {
      if (t[o]) return t[o].exports
      var n = (t[o] = { i: o, l: !1, exports: {} })
      return (
        e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
      )
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, o) {
        r.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o,
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
    )
  })({
    "./src/create-game.js": function(e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createGame = void 0)
      var o = r("./src/store/index.js")
      t.createGame = function(e) {
        return (0, o.createStore)()
      }
    },
    "./src/index.js": function(e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var o = r("./src/create-game.js")
      Object.keys(o).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return o[e]
            },
          })
      })
    },
    "./src/store/index.js": function(e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createStore = void 0)
      t.createStore = function() {}
    },
  })
})
