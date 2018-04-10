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
    function o(r) {
      if (t[r]) return t[r].exports
      var s = (t[r] = { i: r, l: !1, exports: {} })
      return (
        e[r].call(s.exports, s, s.exports, o), (s.l = !0), s.exports
      )
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function(e, t, r) {
        o.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r,
          })
      }),
      (o.r = function(e) {
        Object.defineProperty(e, "__esModule", { value: !0 })
      }),
      (o.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return o.d(t, "a", t), t
      }),
      (o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (o.p = ""),
      (o.w = {}),
      o((o.s = "./src/index.js"))
    )
  })({
    "../../node_modules/@babel/runtime/core-js/object/define-property.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/core-js/library/fn/object/define-property.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/keys.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/core-js/library/fn/object/keys.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/promise.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/core-js/library/fn/promise.js",
      )
    },
    "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/@babel/runtime/core-js/promise.js",
      )
      e.exports = function(e) {
        return function() {
          var t = this,
            o = arguments
          return new r(function(s, i) {
            var n = e.apply(t, o)
            function a(e, t) {
              try {
                var o = n[e](t),
                  a = o.value
              } catch (e) {
                return void i(e)
              }
              o.done ? s(a) : r.resolve(a).then(c, l)
            }
            function c(e) {
              a("next", e)
            }
            function l(e) {
              a("throw", e)
            }
            c()
          })
        }
      }
    },
    "../../node_modules/@babel/runtime/helpers/defineProperty.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/@babel/runtime/core-js/object/define-property.js",
      )
      e.exports = function(e, t, o) {
        return (
          t in e
            ? r(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        )
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(
      e,
      t,
    ) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/core-js/object/define-property.js",
        )
      e.exports = function(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = s && r ? r(e, o) : {}
              i.get || i.set ? s(t, o, i) : (t[o] = e[o])
            }
        return (t.default = e), t
      }
    },
    "../../node_modules/@babel/runtime/helpers/objectSpread.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js",
        ),
        i = o(
          "../../node_modules/@babel/runtime/core-js/object/keys.js",
        ),
        n = o(
          "../../node_modules/@babel/runtime/helpers/defineProperty.js",
        )
      e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            a = i(o)
          "function" == typeof s &&
            (a = a.concat(
              s(o).filter(function(e) {
                return r(o, e).enumerable
              }),
            )),
            a.forEach(function(t) {
              n(e, t, o[t])
            })
        }
        return e
      }
    },
    "../../node_modules/@babel/runtime/regenerator/index.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/regenerator-runtime/runtime-module.js",
      )
    },
    "../../node_modules/core-js/library/fn/object/define-property.js": function(
      e,
      t,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.define-property.js",
      )
      var r = o("../../node_modules/core-js/library/modules/_core.js")
        .Object
      e.exports = function(e, t, o) {
        return r.defineProperty(e, t, o)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js": function(
      e,
      t,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
      )
      var r = o("../../node_modules/core-js/library/modules/_core.js")
        .Object
      e.exports = function(e, t) {
        return r.getOwnPropertyDescriptor(e, t)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js": function(
      e,
      t,
      o,
    ) {
      o("../../node_modules/core-js/library/modules/es6.symbol.js"),
        (e.exports = o(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.getOwnPropertySymbols)
    },
    "../../node_modules/core-js/library/fn/object/keys.js": function(
      e,
      t,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.keys.js",
      ),
        (e.exports = o(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.keys)
    },
    "../../node_modules/core-js/library/fn/promise.js": function(
      e,
      t,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.to-string.js",
      ),
        o(
          "../../node_modules/core-js/library/modules/es6.string.iterator.js",
        ),
        o(
          "../../node_modules/core-js/library/modules/web.dom.iterable.js",
        ),
        o(
          "../../node_modules/core-js/library/modules/es6.promise.js",
        ),
        o(
          "../../node_modules/core-js/library/modules/es7.promise.finally.js",
        ),
        o(
          "../../node_modules/core-js/library/modules/es7.promise.try.js",
        ),
        (e.exports = o(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Promise)
    },
    "../../node_modules/core-js/library/modules/_a-function.js": function(
      e,
      t,
    ) {
      e.exports = function(e) {
        if ("function" != typeof e)
          throw TypeError(e + " is not a function!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_add-to-unscopables.js": function(
      e,
      t,
    ) {
      e.exports = function() {}
    },
    "../../node_modules/core-js/library/modules/_an-instance.js": function(
      e,
      t,
    ) {
      e.exports = function(e, t, o, r) {
        if (!(e instanceof t) || (void 0 !== r && r in e))
          throw TypeError(o + ": incorrect invocation!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_an-object.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_array-includes.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_to-length.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_to-absolute-index.js",
        )
      e.exports = function(e) {
        return function(t, o, n) {
          var a,
            c = r(t),
            l = s(c.length),
            u = i(n, l)
          if (e && o != o) {
            for (; l > u; ) if ((a = c[u++]) != a) return !0
          } else
            for (; l > u; u++)
              if ((e || u in c) && c[u] === o) return e || u || 0
          return !e && -1
        }
      }
    },
    "../../node_modules/core-js/library/modules/_classof.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_cof.js"),
        s = o("../../node_modules/core-js/library/modules/_wks.js")(
          "toStringTag",
        ),
        i =
          "Arguments" ==
          r(
            (function() {
              return arguments
            })(),
          )
      e.exports = function(e) {
        var t, o, n
        return void 0 === e
          ? "Undefined"
          : null === e
            ? "Null"
            : "string" ==
              typeof (o = (function(e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), s))
              ? o
              : i
                ? r(t)
                : "Object" == (n = r(t)) &&
                  "function" == typeof t.callee
                  ? "Arguments"
                  : n
      }
    },
    "../../node_modules/core-js/library/modules/_cof.js": function(
      e,
      t,
    ) {
      var o = {}.toString
      e.exports = function(e) {
        return o.call(e).slice(8, -1)
      }
    },
    "../../node_modules/core-js/library/modules/_core.js": function(
      e,
      t,
    ) {
      var o = (e.exports = { version: "2.5.3" })
      "number" == typeof __e && (__e = o)
    },
    "../../node_modules/core-js/library/modules/_ctx.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_a-function.js",
      )
      e.exports = function(e, t, o) {
        if ((r(e), void 0 === t)) return e
        switch (o) {
          case 1:
            return function(o) {
              return e.call(t, o)
            }
          case 2:
            return function(o, r) {
              return e.call(t, o, r)
            }
          case 3:
            return function(o, r, s) {
              return e.call(t, o, r, s)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_defined.js": function(
      e,
      t,
    ) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_descriptors.js": function(
      e,
      t,
      o,
    ) {
      e.exports = !o(
        "../../node_modules/core-js/library/modules/_fails.js",
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
    "../../node_modules/core-js/library/modules/_dom-create.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_global.js")
          .document,
        i = r(s) && r(s.createElement)
      e.exports = function(e) {
        return i ? s.createElement(e) : {}
      }
    },
    "../../node_modules/core-js/library/modules/_enum-bug-keys.js": function(
      e,
      t,
    ) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ",",
      )
    },
    "../../node_modules/core-js/library/modules/_enum-keys.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_object-gops.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        )
      e.exports = function(e) {
        var t = r(e),
          o = s.f
        if (o)
          for (var n, a = o(e), c = i.f, l = 0; a.length > l; )
            c.call(e, (n = a[l++])) && t.push(n)
        return t
      }
    },
    "../../node_modules/core-js/library/modules/_export.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o("../../node_modules/core-js/library/modules/_ctx.js"),
        n = o("../../node_modules/core-js/library/modules/_hide.js"),
        a = function(e, t, o) {
          var c,
            l,
            u,
            d = e & a.F,
            p = e & a.G,
            h = e & a.S,
            f = e & a.P,
            m = e & a.B,
            y = e & a.W,
            v = p ? s : s[t] || (s[t] = {}),
            b = v.prototype,
            j = p ? r : h ? r[t] : (r[t] || {}).prototype
          for (c in (p && (o = t), o))
            ((l = !d && j && void 0 !== j[c]) && c in v) ||
              ((u = l ? j[c] : o[c]),
              (v[c] =
                p && "function" != typeof j[c]
                  ? o[c]
                  : m && l
                    ? i(u, r)
                    : y && j[c] == u
                      ? (function(e) {
                          var t = function(t, o, r) {
                            if (this instanceof e) {
                              switch (arguments.length) {
                                case 0:
                                  return new e()
                                case 1:
                                  return new e(t)
                                case 2:
                                  return new e(t, o)
                              }
                              return new e(t, o, r)
                            }
                            return e.apply(this, arguments)
                          }
                          return (t.prototype = e.prototype), t
                        })(u)
                      : f && "function" == typeof u
                        ? i(Function.call, u)
                        : u),
              f &&
                (((v.virtual || (v.virtual = {}))[c] = u),
                e & a.R && b && !b[c] && n(b, c, u)))
        }
      ;(a.F = 1),
        (a.G = 2),
        (a.S = 4),
        (a.P = 8),
        (a.B = 16),
        (a.W = 32),
        (a.U = 64),
        (a.R = 128),
        (e.exports = a)
    },
    "../../node_modules/core-js/library/modules/_fails.js": function(
      e,
      t,
    ) {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    "../../node_modules/core-js/library/modules/_for-of.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_ctx.js"),
        s = o(
          "../../node_modules/core-js/library/modules/_iter-call.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_is-array-iter.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        a = o(
          "../../node_modules/core-js/library/modules/_to-length.js",
        ),
        c = o(
          "../../node_modules/core-js/library/modules/core.get-iterator-method.js",
        ),
        l = {},
        u = {}
      ;((t = e.exports = function(e, t, o, d, p) {
        var h,
          f,
          m,
          y,
          v = p
            ? function() {
                return e
              }
            : c(e),
          b = r(o, d, t ? 2 : 1),
          j = 0
        if ("function" != typeof v)
          throw TypeError(e + " is not iterable!")
        if (i(v)) {
          for (h = a(e.length); h > j; j++)
            if (
              (y = t ? b(n((f = e[j]))[0], f[1]) : b(e[j])) === l ||
              y === u
            )
              return y
        } else
          for (m = v.call(e); !(f = m.next()).done; )
            if ((y = s(m, b, f.value, t)) === l || y === u) return y
      }).BREAK = l),
        (t.RETURN = u)
    },
    "../../node_modules/core-js/library/modules/_global.js": function(
      e,
      t,
    ) {
      var o = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")())
      "number" == typeof __g && (__g = o)
    },
    "../../node_modules/core-js/library/modules/_has.js": function(
      e,
      t,
    ) {
      var o = {}.hasOwnProperty
      e.exports = function(e, t) {
        return o.call(e, t)
      }
    },
    "../../node_modules/core-js/library/modules/_hide.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        )
      e.exports = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? function(e, t, o) {
            return r.f(e, t, s(1, o))
          }
        : function(e, t, o) {
            return (e[t] = o), e
          }
    },
    "../../node_modules/core-js/library/modules/_html.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_global.js",
      ).document
      e.exports = r && r.documentElement
    },
    "../../node_modules/core-js/library/modules/_ie8-dom-define.js": function(
      e,
      t,
      o,
    ) {
      e.exports =
        !o(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ) &&
        !o("../../node_modules/core-js/library/modules/_fails.js")(
          function() {
            return (
              7 !=
              Object.defineProperty(
                o(
                  "../../node_modules/core-js/library/modules/_dom-create.js",
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
    "../../node_modules/core-js/library/modules/_invoke.js": function(
      e,
      t,
    ) {
      e.exports = function(e, t, o) {
        var r = void 0 === o
        switch (t.length) {
          case 0:
            return r ? e() : e.call(o)
          case 1:
            return r ? e(t[0]) : e.call(o, t[0])
          case 2:
            return r ? e(t[0], t[1]) : e.call(o, t[0], t[1])
          case 3:
            return r
              ? e(t[0], t[1], t[2])
              : e.call(o, t[0], t[1], t[2])
          case 4:
            return r
              ? e(t[0], t[1], t[2], t[3])
              : e.call(o, t[0], t[1], t[2], t[3])
        }
        return e.apply(o, t)
      }
    },
    "../../node_modules/core-js/library/modules/_iobject.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_cof.js")
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
          }
    },
    "../../node_modules/core-js/library/modules/_is-array-iter.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_iterators.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_wks.js")(
          "iterator",
        ),
        i = Array.prototype
      e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[s] === e)
      }
    },
    "../../node_modules/core-js/library/modules/_is-array.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_cof.js")
      e.exports =
        Array.isArray ||
        function(e) {
          return "Array" == r(e)
        }
    },
    "../../node_modules/core-js/library/modules/_is-object.js": function(
      e,
      t,
    ) {
      e.exports = function(e) {
        return "object" == typeof e
          ? null !== e
          : "function" == typeof e
      }
    },
    "../../node_modules/core-js/library/modules/_iter-call.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_an-object.js",
      )
      e.exports = function(e, t, o, s) {
        try {
          return s ? t(r(o)[0], o[1]) : t(o)
        } catch (t) {
          var i = e.return
          throw (void 0 !== i && r(i.call(e)), t)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_iter-create.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_object-create.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        ),
        n = {}
      o("../../node_modules/core-js/library/modules/_hide.js")(
        n,
        o("../../node_modules/core-js/library/modules/_wks.js")(
          "iterator",
        ),
        function() {
          return this
        },
      ),
        (e.exports = function(e, t, o) {
          ;(e.prototype = r(n, { next: s(1, o) })),
            i(e, t + " Iterator")
        })
    },
    "../../node_modules/core-js/library/modules/_iter-define.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_library.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_redefine.js",
        ),
        n = o("../../node_modules/core-js/library/modules/_hide.js"),
        a = o("../../node_modules/core-js/library/modules/_has.js"),
        c = o(
          "../../node_modules/core-js/library/modules/_iterators.js",
        ),
        l = o(
          "../../node_modules/core-js/library/modules/_iter-create.js",
        ),
        u = o(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        ),
        d = o(
          "../../node_modules/core-js/library/modules/_object-gpo.js",
        ),
        p = o("../../node_modules/core-js/library/modules/_wks.js")(
          "iterator",
        ),
        h = !([].keys && "next" in [].keys()),
        f = function() {
          return this
        }
      e.exports = function(e, t, o, m, y, v, b) {
        l(o, t, m)
        var j,
          _,
          g,
          A = function(e) {
            if (!h && e in S) return S[e]
            switch (e) {
              case "keys":
              case "values":
                return function() {
                  return new o(this, e)
                }
            }
            return function() {
              return new o(this, e)
            }
          },
          E = t + " Iterator",
          P = "values" == y,
          w = !1,
          S = e.prototype,
          B = S[p] || S["@@iterator"] || (y && S[y]),
          x = (!h && B) || A(y),
          L = y ? (P ? A("entries") : x) : void 0,
          q = ("Array" == t && S.entries) || B
        if (
          (q &&
            (g = d(q.call(new e()))) !== Object.prototype &&
            g.next &&
            (u(g, E, !0), r || a(g, p) || n(g, p, f)),
          P &&
            B &&
            "values" !== B.name &&
            ((w = !0),
            (x = function() {
              return B.call(this)
            })),
          (r && !b) || (!h && !w && S[p]) || n(S, p, x),
          (c[t] = x),
          (c[E] = f),
          y)
        )
          if (
            ((j = {
              values: P ? x : A("values"),
              keys: v ? x : A("keys"),
              entries: L,
            }),
            b)
          )
            for (_ in j) _ in S || i(S, _, j[_])
          else s(s.P + s.F * (h || w), t, j)
        return j
      }
    },
    "../../node_modules/core-js/library/modules/_iter-detect.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_wks.js")(
          "iterator",
        ),
        s = !1
      try {
        var i = [7][r]()
        ;(i.return = function() {
          s = !0
        }),
          Array.from(i, function() {
            throw 2
          })
      } catch (e) {}
      e.exports = function(e, t) {
        if (!t && !s) return !1
        var o = !1
        try {
          var i = [7],
            n = i[r]()
          ;(n.next = function() {
            return { done: (o = !0) }
          }),
            (i[r] = function() {
              return n
            }),
            e(i)
        } catch (e) {}
        return o
      }
    },
    "../../node_modules/core-js/library/modules/_iter-step.js": function(
      e,
      t,
    ) {
      e.exports = function(e, t) {
        return { value: t, done: !!e }
      }
    },
    "../../node_modules/core-js/library/modules/_iterators.js": function(
      e,
      t,
    ) {
      e.exports = {}
    },
    "../../node_modules/core-js/library/modules/_library.js": function(
      e,
      t,
    ) {
      e.exports = !0
    },
    "../../node_modules/core-js/library/modules/_meta.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_uid.js")(
          "meta",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        i = o("../../node_modules/core-js/library/modules/_has.js"),
        n = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        a = 0,
        c =
          Object.isExtensible ||
          function() {
            return !0
          },
        l = !o(
          "../../node_modules/core-js/library/modules/_fails.js",
        )(function() {
          return c(Object.preventExtensions({}))
        }),
        u = function(e) {
          n(e, r, { value: { i: "O" + ++a, w: {} } })
        },
        d = (e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(e, t) {
            if (!s(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e
            if (!i(e, r)) {
              if (!c(e)) return "F"
              if (!t) return "E"
              u(e)
            }
            return e[r].i
          },
          getWeak: function(e, t) {
            if (!i(e, r)) {
              if (!c(e)) return !0
              if (!t) return !1
              u(e)
            }
            return e[r].w
          },
          onFreeze: function(e) {
            return l && d.NEED && c(e) && !i(e, r) && u(e), e
          },
        })
    },
    "../../node_modules/core-js/library/modules/_microtask.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_task.js")
          .set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        n = r.process,
        a = r.Promise,
        c =
          "process" ==
          o("../../node_modules/core-js/library/modules/_cof.js")(n)
      e.exports = function() {
        var e,
          t,
          o,
          l = function() {
            var r, s
            for (c && (r = n.domain) && r.exit(); e; ) {
              ;(s = e.fn), (e = e.next)
              try {
                s()
              } catch (r) {
                throw (e ? o() : (t = void 0), r)
              }
            }
            ;(t = void 0), r && r.enter()
          }
        if (c)
          o = function() {
            n.nextTick(l)
          }
        else if (!i || (r.navigator && r.navigator.standalone))
          if (a && a.resolve) {
            var u = a.resolve()
            o = function() {
              u.then(l)
            }
          } else
            o = function() {
              s.call(r, l)
            }
        else {
          var d = !0,
            p = document.createTextNode("")
          new i(l).observe(p, { characterData: !0 }),
            (o = function() {
              p.data = d = !d
            })
        }
        return function(r) {
          var s = { fn: r, next: void 0 }
          t && (t.next = s), e || ((e = s), o()), (t = s)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_new-promise-capability.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
        "../../node_modules/core-js/library/modules/_a-function.js",
      )
      e.exports.f = function(e) {
        return new function(e) {
          var t, o
          ;(this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== o)
              throw TypeError("Bad Promise constructor")
            ;(t = e), (o = r)
          })),
            (this.resolve = r(t)),
            (this.reject = r(o))
        }(e)
      }
    },
    "../../node_modules/core-js/library/modules/_object-create.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_object-dps.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO"),
        a = function() {},
        c = function() {
          var e,
            t = o(
              "../../node_modules/core-js/library/modules/_dom-create.js",
            )("iframe"),
            r = i.length
          for (
            t.style.display = "none",
              o(
                "../../node_modules/core-js/library/modules/_html.js",
              ).appendChild(t),
              t.src = "javascript:",
              (e = t.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              c = e.F;
            r--;

          )
            delete c.prototype[i[r]]
          return c()
        }
      e.exports =
        Object.create ||
        function(e, t) {
          var o
          return (
            null !== e
              ? ((a.prototype = r(e)),
                (o = new a()),
                (a.prototype = null),
                (o[n] = e))
              : (o = c()),
            void 0 === t ? o : s(o, t)
          )
        }
    },
    "../../node_modules/core-js/library/modules/_object-dp.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        n = Object.defineProperty
      t.f = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperty
        : function(e, t, o) {
            if ((r(e), (t = i(t, !0)), r(o), s))
              try {
                return n(e, t, o)
              } catch (e) {}
            if ("get" in o || "set" in o)
              throw TypeError("Accessors not supported!")
            return "value" in o && (e[t] = o.value), e
          }
    },
    "../../node_modules/core-js/library/modules/_object-dps.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        )
      e.exports = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperties
        : function(e, t) {
            s(e)
            for (var o, n = i(t), a = n.length, c = 0; a > c; )
              r.f(e, (o = n[c++]), t[o])
            return e
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopd.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        a = o("../../node_modules/core-js/library/modules/_has.js"),
        c = o(
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
        ),
        l = Object.getOwnPropertyDescriptor
      t.f = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? l
        : function(e, t) {
            if (((e = i(e)), (t = n(t, !0)), c))
              try {
                return l(e, t)
              } catch (e) {}
            if (a(e, t)) return s(!r.f.call(e, t), e[t])
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopn-ext.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f,
        i = {}.toString,
        n =
          "object" == typeof window &&
          window &&
          Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
      e.exports.f = function(e) {
        return n && "[object Window]" == i.call(e)
          ? (function(e) {
              try {
                return s(e)
              } catch (e) {
                return n.slice()
              }
            })(e)
          : s(r(e))
      }
    },
    "../../node_modules/core-js/library/modules/_object-gopn.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ).concat("length", "prototype")
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return r(e, s)
        }
    },
    "../../node_modules/core-js/library/modules/_object-gops.js": function(
      e,
      t,
    ) {
      t.f = Object.getOwnPropertySymbols
    },
    "../../node_modules/core-js/library/modules/_object-gpo.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_has.js"),
        s = o(
          "../../node_modules/core-js/library/modules/_to-object.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO"),
        n = Object.prototype
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = s(e)),
            r(e, i)
              ? e[i]
              : "function" == typeof e.constructor &&
                e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object ? n : null
          )
        }
    },
    "../../node_modules/core-js/library/modules/_object-keys-internal.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_has.js"),
        s = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_array-includes.js",
        )(!1),
        n = o(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO")
      e.exports = function(e, t) {
        var o,
          a = s(e),
          c = 0,
          l = []
        for (o in a) o != n && r(a, o) && l.push(o)
        for (; t.length > c; )
          r(a, (o = t[c++])) && (~i(l, o) || l.push(o))
        return l
      }
    },
    "../../node_modules/core-js/library/modules/_object-keys.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        )
      e.exports =
        Object.keys ||
        function(e) {
          return r(e, s)
        }
    },
    "../../node_modules/core-js/library/modules/_object-pie.js": function(
      e,
      t,
    ) {
      t.f = {}.propertyIsEnumerable
    },
    "../../node_modules/core-js/library/modules/_object-sap.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o("../../node_modules/core-js/library/modules/_fails.js")
      e.exports = function(e, t) {
        var o = (s.Object || {})[e] || Object[e],
          n = {}
        ;(n[e] = t(o)),
          r(
            r.S +
              r.F *
                i(function() {
                  o(1)
                }),
            "Object",
            n,
          )
      }
    },
    "../../node_modules/core-js/library/modules/_perform.js": function(
      e,
      t,
    ) {
      e.exports = function(e) {
        try {
          return { e: !1, v: e() }
        } catch (e) {
          return { e: !0, v: e }
        }
      }
    },
    "../../node_modules/core-js/library/modules/_promise-resolve.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_new-promise-capability.js",
        )
      e.exports = function(e, t) {
        if ((r(e), s(t) && t.constructor === e)) return t
        var o = i.f(e)
        return (0, o.resolve)(t), o.promise
      }
    },
    "../../node_modules/core-js/library/modules/_property-desc.js": function(
      e,
      t,
    ) {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        }
      }
    },
    "../../node_modules/core-js/library/modules/_redefine-all.js": function(
      e,
      t,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_hide.js")
      e.exports = function(e, t, o) {
        for (var s in t) o && e[s] ? (e[s] = t[s]) : r(e, s, t[s])
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_redefine.js": function(
      e,
      t,
      o,
    ) {
      e.exports = o(
        "../../node_modules/core-js/library/modules/_hide.js",
      )
    },
    "../../node_modules/core-js/library/modules/_set-species.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ),
        a = o("../../node_modules/core-js/library/modules/_wks.js")(
          "species",
        )
      e.exports = function(e) {
        var t = "function" == typeof s[e] ? s[e] : r[e]
        n &&
          t &&
          !t[a] &&
          i.f(t, a, {
            configurable: !0,
            get: function() {
              return this
            },
          })
      }
    },
    "../../node_modules/core-js/library/modules/_set-to-string-tag.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        s = o("../../node_modules/core-js/library/modules/_has.js"),
        i = o("../../node_modules/core-js/library/modules/_wks.js")(
          "toStringTag",
        )
      e.exports = function(e, t, o) {
        e &&
          !s((e = o ? e : e.prototype), i) &&
          r(e, i, { configurable: !0, value: t })
      }
    },
    "../../node_modules/core-js/library/modules/_shared-key.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("keys"),
        s = o("../../node_modules/core-js/library/modules/_uid.js")
      e.exports = function(e) {
        return r[e] || (r[e] = s(e))
      }
    },
    "../../node_modules/core-js/library/modules/_shared.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {})
      e.exports = function(e) {
        return s[e] || (s[e] = {})
      }
    },
    "../../node_modules/core-js/library/modules/_species-constructor.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_a-function.js",
        ),
        i = o("../../node_modules/core-js/library/modules/_wks.js")(
          "species",
        )
      e.exports = function(e, t) {
        var o,
          n = r(e).constructor
        return void 0 === n || void 0 == (o = r(n)[i]) ? t : s(o)
      }
    },
    "../../node_modules/core-js/library/modules/_string-at.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_defined.js",
        )
      e.exports = function(e) {
        return function(t, o) {
          var i,
            n,
            a = String(s(t)),
            c = r(o),
            l = a.length
          return c < 0 || c >= l
            ? e ? "" : void 0
            : (i = a.charCodeAt(c)) < 55296 ||
              i > 56319 ||
              c + 1 === l ||
              (n = a.charCodeAt(c + 1)) < 56320 ||
              n > 57343
              ? e ? a.charAt(c) : i
              : e
                ? a.slice(c, c + 2)
                : n - 56320 + ((i - 55296) << 10) + 65536
        }
      }
    },
    "../../node_modules/core-js/library/modules/_task.js": function(
      e,
      t,
      o,
    ) {
      var r,
        s,
        i,
        n = o("../../node_modules/core-js/library/modules/_ctx.js"),
        a = o(
          "../../node_modules/core-js/library/modules/_invoke.js",
        ),
        c = o("../../node_modules/core-js/library/modules/_html.js"),
        l = o(
          "../../node_modules/core-js/library/modules/_dom-create.js",
        ),
        u = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        d = u.process,
        p = u.setImmediate,
        h = u.clearImmediate,
        f = u.MessageChannel,
        m = u.Dispatch,
        y = 0,
        v = {},
        b = function() {
          var e = +this
          if (v.hasOwnProperty(e)) {
            var t = v[e]
            delete v[e], t()
          }
        },
        j = function(e) {
          b.call(e.data)
        }
      ;(p && h) ||
        ((p = function(e) {
          for (var t = [], o = 1; arguments.length > o; )
            t.push(arguments[o++])
          return (
            (v[++y] = function() {
              a("function" == typeof e ? e : Function(e), t)
            }),
            r(y),
            y
          )
        }),
        (h = function(e) {
          delete v[e]
        }),
        "process" ==
        o("../../node_modules/core-js/library/modules/_cof.js")(d)
          ? (r = function(e) {
              d.nextTick(n(b, e, 1))
            })
          : m && m.now
            ? (r = function(e) {
                m.now(n(b, e, 1))
              })
            : f
              ? ((i = (s = new f()).port2),
                (s.port1.onmessage = j),
                (r = n(i.postMessage, i, 1)))
              : u.addEventListener &&
                "function" == typeof postMessage &&
                !u.importScripts
                ? ((r = function(e) {
                    u.postMessage(e + "", "*")
                  }),
                  u.addEventListener("message", j, !1))
                : (r =
                    "onreadystatechange" in l("script")
                      ? function(e) {
                          c.appendChild(
                            l("script"),
                          ).onreadystatechange = function() {
                            c.removeChild(this), b.call(e)
                          }
                        }
                      : function(e) {
                          setTimeout(n(b, e, 1), 0)
                        })),
        (e.exports = { set: p, clear: h })
    },
    "../../node_modules/core-js/library/modules/_to-absolute-index.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        s = Math.max,
        i = Math.min
      e.exports = function(e, t) {
        return (e = r(e)) < 0 ? s(e + t, 0) : i(e, t)
      }
    },
    "../../node_modules/core-js/library/modules/_to-integer.js": function(
      e,
      t,
    ) {
      var o = Math.ceil,
        r = Math.floor
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : o)(e)
      }
    },
    "../../node_modules/core-js/library/modules/_to-iobject.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_iobject.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_defined.js",
        )
      e.exports = function(e) {
        return r(s(e))
      }
    },
    "../../node_modules/core-js/library/modules/_to-length.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        s = Math.min
      e.exports = function(e) {
        return e > 0 ? s(r(e), 9007199254740991) : 0
      }
    },
    "../../node_modules/core-js/library/modules/_to-object.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_defined.js",
      )
      e.exports = function(e) {
        return Object(r(e))
      }
    },
    "../../node_modules/core-js/library/modules/_to-primitive.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      e.exports = function(e, t) {
        if (!r(e)) return e
        var o, s
        if (
          t &&
          "function" == typeof (o = e.toString) &&
          !r((s = o.call(e)))
        )
          return s
        if (
          "function" == typeof (o = e.valueOf) &&
          !r((s = o.call(e)))
        )
          return s
        if (
          !t &&
          "function" == typeof (o = e.toString) &&
          !r((s = o.call(e)))
        )
          return s
        throw TypeError("Can't convert object to primitive value")
      }
    },
    "../../node_modules/core-js/library/modules/_uid.js": function(
      e,
      t,
    ) {
      var o = 0,
        r = Math.random()
      e.exports = function(e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++o + r).toString(36),
        )
      }
    },
    "../../node_modules/core-js/library/modules/_wks-define.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o(
          "../../node_modules/core-js/library/modules/_library.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_wks-ext.js",
        ),
        a = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f
      e.exports = function(e) {
        var t = s.Symbol || (s.Symbol = i ? {} : r.Symbol || {})
        "_" == e.charAt(0) || e in t || a(t, e, { value: n.f(e) })
      }
    },
    "../../node_modules/core-js/library/modules/_wks-ext.js": function(
      e,
      t,
      o,
    ) {
      t.f = o("../../node_modules/core-js/library/modules/_wks.js")
    },
    "../../node_modules/core-js/library/modules/_wks.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("wks"),
        s = o("../../node_modules/core-js/library/modules/_uid.js"),
        i = o("../../node_modules/core-js/library/modules/_global.js")
          .Symbol,
        n = "function" == typeof i
      ;(e.exports = function(e) {
        return (
          r[e] || (r[e] = (n && i[e]) || (n ? i : s)("Symbol." + e))
        )
      }).store = r
    },
    "../../node_modules/core-js/library/modules/core.get-iterator-method.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_classof.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_wks.js")(
          "iterator",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_iterators.js",
        )
      e.exports = o(
        "../../node_modules/core-js/library/modules/_core.js",
      ).getIteratorMethod = function(e) {
        if (void 0 != e) return e[s] || e["@@iterator"] || i[r(e)]
      }
    },
    "../../node_modules/core-js/library/modules/es6.array.iterator.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_add-to-unscopables.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_iter-step.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_iterators.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        )
      ;(e.exports = o(
        "../../node_modules/core-js/library/modules/_iter-define.js",
      )(
        Array,
        "Array",
        function(e, t) {
          ;(this._t = n(e)), (this._i = 0), (this._k = t)
        },
        function() {
          var e = this._t,
            t = this._k,
            o = this._i++
          return !e || o >= e.length
            ? ((this._t = void 0), s(1))
            : s(0, "keys" == t ? o : "values" == t ? e[o] : [o, e[o]])
        },
        "values",
      )),
        (i.Arguments = i.Array),
        r("keys"),
        r("values"),
        r("entries")
    },
    "../../node_modules/core-js/library/modules/es6.object.define-property.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_export.js",
      )
      r(
        r.S +
          r.F *
            !o(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            ),
        "Object",
        {
          defineProperty: o(
            "../../node_modules/core-js/library/modules/_object-dp.js",
          ).f,
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ).f
      o("../../node_modules/core-js/library/modules/_object-sap.js")(
        "getOwnPropertyDescriptor",
        function() {
          return function(e, t) {
            return s(r(e), t)
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.keys.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-object.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        )
      o("../../node_modules/core-js/library/modules/_object-sap.js")(
        "keys",
        function() {
          return function(e) {
            return s(r(e))
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.to-string.js": function(
      e,
      t,
    ) {},
    "../../node_modules/core-js/library/modules/es6.promise.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r,
        s,
        i,
        n,
        a = o(
          "../../node_modules/core-js/library/modules/_library.js",
        ),
        c = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        l = o("../../node_modules/core-js/library/modules/_ctx.js"),
        u = o(
          "../../node_modules/core-js/library/modules/_classof.js",
        ),
        d = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        p = o(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        h = o(
          "../../node_modules/core-js/library/modules/_a-function.js",
        ),
        f = o(
          "../../node_modules/core-js/library/modules/_an-instance.js",
        ),
        m = o(
          "../../node_modules/core-js/library/modules/_for-of.js",
        ),
        y = o(
          "../../node_modules/core-js/library/modules/_species-constructor.js",
        ),
        v = o("../../node_modules/core-js/library/modules/_task.js")
          .set,
        b = o(
          "../../node_modules/core-js/library/modules/_microtask.js",
        )(),
        j = o(
          "../../node_modules/core-js/library/modules/_new-promise-capability.js",
        ),
        _ = o(
          "../../node_modules/core-js/library/modules/_perform.js",
        ),
        g = o(
          "../../node_modules/core-js/library/modules/_promise-resolve.js",
        ),
        A = c.TypeError,
        E = c.process,
        P = c.Promise,
        w = "process" == u(E),
        S = function() {},
        B = (s = j.f),
        x = !!(function() {
          try {
            var e = P.resolve(1),
              t = ((e.constructor = {})[
                o(
                  "../../node_modules/core-js/library/modules/_wks.js",
                )("species")
              ] = function(e) {
                e(S, S)
              })
            return (
              (w || "function" == typeof PromiseRejectionEvent) &&
              e.then(S) instanceof t
            )
          } catch (e) {}
        })(),
        L = function(e) {
          var t
          return !(!p(e) || "function" != typeof (t = e.then)) && t
        },
        q = function(e, t) {
          if (!e._n) {
            e._n = !0
            var o = e._c
            b(function() {
              for (
                var r = e._v,
                  s = 1 == e._s,
                  i = 0,
                  n = function(t) {
                    var o,
                      i,
                      n = s ? t.ok : t.fail,
                      a = t.resolve,
                      c = t.reject,
                      l = t.domain
                    try {
                      n
                        ? (s || (2 == e._h && I(e), (e._h = 1)),
                          !0 === n
                            ? (o = r)
                            : (l && l.enter(),
                              (o = n(r)),
                              l && l.exit()),
                          o === t.promise
                            ? c(A("Promise-chain cycle"))
                            : (i = L(o)) ? i.call(o, a, c) : a(o))
                        : c(r)
                    } catch (e) {
                      c(e)
                    }
                  };
                o.length > i;

              )
                n(o[i++])
              ;(e._c = []), (e._n = !1), t && !e._h && M(e)
            })
          }
        },
        M = function(e) {
          v.call(c, function() {
            var t,
              o,
              r,
              s = e._v,
              i = C(e)
            if (
              (i &&
                ((t = _(function() {
                  w
                    ? E.emit("unhandledRejection", s, e)
                    : (o = c.onunhandledrejection)
                      ? o({ promise: e, reason: s })
                      : (r = c.console) &&
                        r.error &&
                        r.error("Unhandled promise rejection", s)
                })),
                (e._h = w || C(e) ? 2 : 1)),
              (e._a = void 0),
              i && t.e)
            )
              throw t.v
          })
        },
        C = function(e) {
          return 1 !== e._h && 0 === (e._a || e._c).length
        },
        I = function(e) {
          v.call(c, function() {
            var t
            w
              ? E.emit("rejectionHandled", e)
              : (t = c.onrejectionhandled) &&
                t({ promise: e, reason: e._v })
          })
        },
        O = function(e) {
          var t = this
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            q(t, !0))
        },
        F = function(e) {
          var t,
            o = this
          if (!o._d) {
            ;(o._d = !0), (o = o._w || o)
            try {
              if (o === e) throw A("Promise can't be resolved itself")
              ;(t = L(e))
                ? b(function() {
                    var r = { _w: o, _d: !1 }
                    try {
                      t.call(e, l(F, r, 1), l(O, r, 1))
                    } catch (e) {
                      O.call(r, e)
                    }
                  })
                : ((o._v = e), (o._s = 1), q(o, !1))
            } catch (e) {
              O.call({ _w: o, _d: !1 }, e)
            }
          }
        }
      x ||
        ((P = function(e) {
          f(this, P, "Promise", "_h"), h(e), r.call(this)
          try {
            e(l(F, this, 1), l(O, this, 1))
          } catch (e) {
            O.call(this, e)
          }
        }),
        ((r = function(e) {
          ;(this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1)
        }).prototype = o(
          "../../node_modules/core-js/library/modules/_redefine-all.js",
        )(P.prototype, {
          then: function(e, t) {
            var o = B(y(this, P))
            return (
              (o.ok = "function" != typeof e || e),
              (o.fail = "function" == typeof t && t),
              (o.domain = w ? E.domain : void 0),
              this._c.push(o),
              this._a && this._a.push(o),
              this._s && q(this, !1),
              o.promise
            )
          },
          catch: function(e) {
            return this.then(void 0, e)
          },
        })),
        (i = function() {
          var e = new r()
          ;(this.promise = e),
            (this.resolve = l(F, e, 1)),
            (this.reject = l(O, e, 1))
        }),
        (j.f = B = function(e) {
          return e === P || e === n ? new i(e) : s(e)
        })),
        d(d.G + d.W + d.F * !x, { Promise: P }),
        o(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        )(P, "Promise"),
        o(
          "../../node_modules/core-js/library/modules/_set-species.js",
        )("Promise"),
        (n = o("../../node_modules/core-js/library/modules/_core.js")
          .Promise),
        d(d.S + d.F * !x, "Promise", {
          reject: function(e) {
            var t = B(this)
            return (0, t.reject)(e), t.promise
          },
        }),
        d(d.S + d.F * (a || !x), "Promise", {
          resolve: function(e) {
            return g(a && this === n ? P : this, e)
          },
        }),
        d(
          d.S +
            d.F *
              !(
                x &&
                o(
                  "../../node_modules/core-js/library/modules/_iter-detect.js",
                )(function(e) {
                  P.all(e).catch(S)
                })
              ),
          "Promise",
          {
            all: function(e) {
              var t = this,
                o = B(t),
                r = o.resolve,
                s = o.reject,
                i = _(function() {
                  var o = [],
                    i = 0,
                    n = 1
                  m(e, !1, function(e) {
                    var a = i++,
                      c = !1
                    o.push(void 0),
                      n++,
                      t.resolve(e).then(function(e) {
                        c || ((c = !0), (o[a] = e), --n || r(o))
                      }, s)
                  }),
                    --n || r(o)
                })
              return i.e && s(i.v), o.promise
            },
            race: function(e) {
              var t = this,
                o = B(t),
                r = o.reject,
                s = _(function() {
                  m(e, !1, function(e) {
                    t.resolve(e).then(o.resolve, r)
                  })
                })
              return s.e && r(s.v), o.promise
            },
          },
        )
    },
    "../../node_modules/core-js/library/modules/es6.string.iterator.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
        "../../node_modules/core-js/library/modules/_string-at.js",
      )(!0)
      o("../../node_modules/core-js/library/modules/_iter-define.js")(
        String,
        "String",
        function(e) {
          ;(this._t = String(e)), (this._i = 0)
        },
        function() {
          var e,
            t = this._t,
            o = this._i
          return o >= t.length
            ? { value: void 0, done: !0 }
            : ((e = r(t, o)),
              (this._i += e.length),
              { value: e, done: !1 })
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.symbol.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_has.js"),
        i = o(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        a = o(
          "../../node_modules/core-js/library/modules/_redefine.js",
        ),
        c = o("../../node_modules/core-js/library/modules/_meta.js")
          .KEY,
        l = o("../../node_modules/core-js/library/modules/_fails.js"),
        u = o(
          "../../node_modules/core-js/library/modules/_shared.js",
        ),
        d = o(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        ),
        p = o("../../node_modules/core-js/library/modules/_uid.js"),
        h = o("../../node_modules/core-js/library/modules/_wks.js"),
        f = o(
          "../../node_modules/core-js/library/modules/_wks-ext.js",
        ),
        m = o(
          "../../node_modules/core-js/library/modules/_wks-define.js",
        ),
        y = o(
          "../../node_modules/core-js/library/modules/_enum-keys.js",
        ),
        v = o(
          "../../node_modules/core-js/library/modules/_is-array.js",
        ),
        b = o(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        j = o(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        _ = o(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        g = o(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        A = o(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        E = o(
          "../../node_modules/core-js/library/modules/_object-create.js",
        ),
        P = o(
          "../../node_modules/core-js/library/modules/_object-gopn-ext.js",
        ),
        w = o(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ),
        S = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        B = o(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        x = w.f,
        L = S.f,
        q = P.f,
        M = r.Symbol,
        C = r.JSON,
        I = C && C.stringify,
        O = h("_hidden"),
        F = h("toPrimitive"),
        T = {}.propertyIsEnumerable,
        R = u("symbol-registry"),
        k = u("symbols"),
        N = u("op-symbols"),
        V = Object.prototype,
        G = "function" == typeof M,
        U = r.QObject,
        D = !U || !U.prototype || !U.prototype.findChild,
        Y =
          i &&
          l(function() {
            return (
              7 !=
              E(
                L({}, "a", {
                  get: function() {
                    return L(this, "a", { value: 7 }).a
                  },
                }),
              ).a
            )
          })
            ? function(e, t, o) {
                var r = x(V, t)
                r && delete V[t],
                  L(e, t, o),
                  r && e !== V && L(V, t, r)
              }
            : L,
        W = function(e) {
          var t = (k[e] = E(M.prototype))
          return (t._k = e), t
        },
        H =
          G && "symbol" == typeof M.iterator
            ? function(e) {
                return "symbol" == typeof e
              }
            : function(e) {
                return e instanceof M
              },
        z = function(e, t, o) {
          return (
            e === V && z(N, t, o),
            b(e),
            (t = g(t, !0)),
            b(o),
            s(k, t)
              ? (o.enumerable
                  ? (s(e, O) && e[O][t] && (e[O][t] = !1),
                    (o = E(o, { enumerable: A(0, !1) })))
                  : (s(e, O) || L(e, O, A(1, {})), (e[O][t] = !0)),
                Y(e, t, o))
              : L(e, t, o)
          )
        },
        X = function(e, t) {
          b(e)
          for (var o, r = y((t = _(t))), s = 0, i = r.length; i > s; )
            z(e, (o = r[s++]), t[o])
          return e
        },
        K = function(e) {
          var t = T.call(this, (e = g(e, !0)))
          return (
            !(this === V && s(k, e) && !s(N, e)) &&
            (!(
              t ||
              !s(this, e) ||
              !s(k, e) ||
              (s(this, O) && this[O][e])
            ) ||
              t)
          )
        },
        Z = function(e, t) {
          if (
            ((e = _(e)),
            (t = g(t, !0)),
            e !== V || !s(k, t) || s(N, t))
          ) {
            var o = x(e, t)
            return (
              !o ||
                !s(k, t) ||
                (s(e, O) && e[O][t]) ||
                (o.enumerable = !0),
              o
            )
          }
        },
        J = function(e) {
          for (var t, o = q(_(e)), r = [], i = 0; o.length > i; )
            s(k, (t = o[i++])) || t == O || t == c || r.push(t)
          return r
        },
        Q = function(e) {
          for (
            var t, o = e === V, r = q(o ? N : _(e)), i = [], n = 0;
            r.length > n;

          )
            !s(k, (t = r[n++])) || (o && !s(V, t)) || i.push(k[t])
          return i
        }
      G ||
        (a(
          (M = function() {
            if (this instanceof M)
              throw TypeError("Symbol is not a constructor!")
            var e = p(arguments.length > 0 ? arguments[0] : void 0),
              t = function(o) {
                this === V && t.call(N, o),
                  s(this, O) && s(this[O], e) && (this[O][e] = !1),
                  Y(this, e, A(1, o))
              }
            return (
              i && D && Y(V, e, { configurable: !0, set: t }), W(e)
            )
          }).prototype,
          "toString",
          function() {
            return this._k
          },
        ),
        (w.f = Z),
        (S.f = z),
        (o(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f = P.f = J),
        (o(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        ).f = K),
        (o(
          "../../node_modules/core-js/library/modules/_object-gops.js",
        ).f = Q),
        i &&
          !o(
            "../../node_modules/core-js/library/modules/_library.js",
          ) &&
          a(V, "propertyIsEnumerable", K, !0),
        (f.f = function(e) {
          return W(h(e))
        })),
        n(n.G + n.W + n.F * !G, { Symbol: M })
      for (
        var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ",",
          ),
          ee = 0;
        $.length > ee;

      )
        h($[ee++])
      for (var te = B(h.store), oe = 0; te.length > oe; ) m(te[oe++])
      n(n.S + n.F * !G, "Symbol", {
        for: function(e) {
          return s(R, (e += "")) ? R[e] : (R[e] = M(e))
        },
        keyFor: function(e) {
          if (!H(e)) throw TypeError(e + " is not a symbol!")
          for (var t in R) if (R[t] === e) return t
        },
        useSetter: function() {
          D = !0
        },
        useSimple: function() {
          D = !1
        },
      }),
        n(n.S + n.F * !G, "Object", {
          create: function(e, t) {
            return void 0 === t ? E(e) : X(E(e), t)
          },
          defineProperty: z,
          defineProperties: X,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: J,
          getOwnPropertySymbols: Q,
        }),
        C &&
          n(
            n.S +
              n.F *
                (!G ||
                  l(function() {
                    var e = M()
                    return (
                      "[null]" != I([e]) ||
                      "{}" != I({ a: e }) ||
                      "{}" != I(Object(e))
                    )
                  })),
            "JSON",
            {
              stringify: function(e) {
                for (var t, o, r = [e], s = 1; arguments.length > s; )
                  r.push(arguments[s++])
                if (((o = t = r[1]), (j(t) || void 0 !== e) && !H(e)))
                  return (
                    v(t) ||
                      (t = function(e, t) {
                        if (
                          ("function" == typeof o &&
                            (t = o.call(this, e, t)),
                          !H(t))
                        )
                          return t
                      }),
                    (r[1] = t),
                    I.apply(C, r)
                  )
              },
            },
          ),
        M.prototype[F] ||
          o("../../node_modules/core-js/library/modules/_hide.js")(
            M.prototype,
            F,
            M.prototype.valueOf,
          ),
        d(M, "Symbol"),
        d(Math, "Math", !0),
        d(r.JSON, "JSON", !0)
    },
    "../../node_modules/core-js/library/modules/es7.promise.finally.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = o(
          "../../node_modules/core-js/library/modules/_species-constructor.js",
        ),
        a = o(
          "../../node_modules/core-js/library/modules/_promise-resolve.js",
        )
      r(r.P + r.R, "Promise", {
        finally: function(e) {
          var t = n(this, s.Promise || i.Promise),
            o = "function" == typeof e
          return this.then(
            o
              ? function(o) {
                  return a(t, e()).then(function() {
                    return o
                  })
                }
              : e,
            o
              ? function(o) {
                  return a(t, e()).then(function() {
                    throw o
                  })
                }
              : e,
          )
        },
      })
    },
    "../../node_modules/core-js/library/modules/es7.promise.try.js": function(
      e,
      t,
      o,
    ) {
      "use strict"
      var r = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_new-promise-capability.js",
        ),
        i = o(
          "../../node_modules/core-js/library/modules/_perform.js",
        )
      r(r.S, "Promise", {
        try: function(e) {
          var t = s.f(this),
            o = i(e)
          return (o.e ? t.reject : t.resolve)(o.v), t.promise
        },
      })
    },
    "../../node_modules/core-js/library/modules/web.dom.iterable.js": function(
      e,
      t,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.array.iterator.js",
      )
      for (
        var r = o(
            "../../node_modules/core-js/library/modules/_global.js",
          ),
          s = o(
            "../../node_modules/core-js/library/modules/_hide.js",
          ),
          i = o(
            "../../node_modules/core-js/library/modules/_iterators.js",
          ),
          n = o("../../node_modules/core-js/library/modules/_wks.js")(
            "toStringTag",
          ),
          a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
            ",",
          ),
          c = 0;
        c < a.length;
        c++
      ) {
        var l = a[c],
          u = r[l],
          d = u && u.prototype
        d && !d[n] && s(d, n, l), (i[l] = i.Array)
      }
    },
    "../../node_modules/regenerator-runtime/runtime-module.js": function(
      e,
      t,
      o,
    ) {
      var r =
          (function() {
            return this
          })() || Function("return this")(),
        s =
          r.regeneratorRuntime &&
          Object.getOwnPropertyNames(r).indexOf(
            "regeneratorRuntime",
          ) >= 0,
        i = s && r.regeneratorRuntime
      if (
        ((r.regeneratorRuntime = void 0),
        (e.exports = o(
          "../../node_modules/regenerator-runtime/runtime.js",
        )),
        s)
      )
        r.regeneratorRuntime = i
      else
        try {
          delete r.regeneratorRuntime
        } catch (e) {
          r.regeneratorRuntime = void 0
        }
    },
    "../../node_modules/regenerator-runtime/runtime.js": function(
      e,
      t,
    ) {
      !(function(t) {
        "use strict"
        var o,
          r = Object.prototype,
          s = r.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          n = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag",
          l = "object" == typeof e,
          u = t.regeneratorRuntime
        if (u) l && (e.exports = u)
        else {
          ;(u = t.regeneratorRuntime = l ? e.exports : {}).wrap = _
          var d = "suspendedStart",
            p = "suspendedYield",
            h = "executing",
            f = "completed",
            m = {},
            y = {}
          y[n] = function() {
            return this
          }
          var v = Object.getPrototypeOf,
            b = v && v(v(M([])))
          b && b !== r && s.call(b, n) && (y = b)
          var j = (P.prototype = A.prototype = Object.create(y))
          ;(E.prototype = j.constructor = P),
            (P.constructor = E),
            (P[c] = E.displayName = "GeneratorFunction"),
            (u.isGeneratorFunction = function(e) {
              var t = "function" == typeof e && e.constructor
              return (
                !!t &&
                (t === E ||
                  "GeneratorFunction" === (t.displayName || t.name))
              )
            }),
            (u.mark = function(e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, P)
                  : ((e.__proto__ = P),
                    c in e || (e[c] = "GeneratorFunction")),
                (e.prototype = Object.create(j)),
                e
              )
            }),
            (u.awrap = function(e) {
              return { __await: e }
            }),
            w(S.prototype),
            (S.prototype[a] = function() {
              return this
            }),
            (u.AsyncIterator = S),
            (u.async = function(e, t, o, r) {
              var s = new S(_(e, t, o, r))
              return u.isGeneratorFunction(t)
                ? s
                : s.next().then(function(e) {
                    return e.done ? e.value : s.next()
                  })
            }),
            w(j),
            (j[c] = "Generator"),
            (j[n] = function() {
              return this
            }),
            (j.toString = function() {
              return "[object Generator]"
            }),
            (u.keys = function(e) {
              var t = []
              for (var o in e) t.push(o)
              return (
                t.reverse(),
                function o() {
                  for (; t.length; ) {
                    var r = t.pop()
                    if (r in e) return (o.value = r), (o.done = !1), o
                  }
                  return (o.done = !0), o
                }
              )
            }),
            (u.values = M),
            (q.prototype = {
              constructor: q,
              reset: function(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = o),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = o),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      s.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = o)
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
                function r(r, s) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (t.next = r),
                    s && ((t.method = "next"), (t.arg = o)),
                    !!s
                  )
                }
                for (
                  var i = this.tryEntries.length - 1;
                  i >= 0;
                  --i
                ) {
                  var n = this.tryEntries[i],
                    a = n.completion
                  if ("root" === n.tryLoc) return r("end")
                  if (n.tryLoc <= this.prev) {
                    var c = s.call(n, "catchLoc"),
                      l = s.call(n, "finallyLoc")
                    if (c && l) {
                      if (this.prev < n.catchLoc)
                        return r(n.catchLoc, !0)
                      if (this.prev < n.finallyLoc)
                        return r(n.finallyLoc)
                    } else if (c) {
                      if (this.prev < n.catchLoc)
                        return r(n.catchLoc, !0)
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally",
                        )
                      if (this.prev < n.finallyLoc)
                        return r(n.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (
                  var o = this.tryEntries.length - 1;
                  o >= 0;
                  --o
                ) {
                  var r = this.tryEntries[o]
                  if (
                    r.tryLoc <= this.prev &&
                    s.call(r, "finallyLoc") &&
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
                var n = i ? i.completion : {}
                return (
                  (n.type = e),
                  (n.arg = t),
                  i
                    ? ((this.method = "next"),
                      (this.next = i.finallyLoc),
                      m)
                    : this.complete(n)
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
                      : "normal" === e.type && t && (this.next = t),
                  m
                )
              },
              finish: function(e) {
                for (
                  var t = this.tryEntries.length - 1;
                  t >= 0;
                  --t
                ) {
                  var o = this.tryEntries[t]
                  if (o.finallyLoc === e)
                    return (
                      this.complete(o.completion, o.afterLoc), L(o), m
                    )
                }
              },
              catch: function(e) {
                for (
                  var t = this.tryEntries.length - 1;
                  t >= 0;
                  --t
                ) {
                  var o = this.tryEntries[t]
                  if (o.tryLoc === e) {
                    var r = o.completion
                    if ("throw" === r.type) {
                      var s = r.arg
                      L(o)
                    }
                    return s
                  }
                }
                throw new Error("illegal catch attempt")
              },
              delegateYield: function(e, t, r) {
                return (
                  (this.delegate = {
                    iterator: M(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = o),
                  m
                )
              },
            })
        }
        function _(e, t, o, r) {
          var s = t && t.prototype instanceof A ? t : A,
            i = Object.create(s.prototype),
            n = new q(r || [])
          return (
            (i._invoke = (function(e, t, o) {
              var r = d
              return function(s, i) {
                if (r === h)
                  throw new Error("Generator is already running")
                if (r === f) {
                  if ("throw" === s) throw i
                  return C()
                }
                for (o.method = s, o.arg = i; ; ) {
                  var n = o.delegate
                  if (n) {
                    var a = B(n, o)
                    if (a) {
                      if (a === m) continue
                      return a
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg
                  else if ("throw" === o.method) {
                    if (r === d) throw ((r = f), o.arg)
                    o.dispatchException(o.arg)
                  } else
                    "return" === o.method && o.abrupt("return", o.arg)
                  r = h
                  var c = g(e, t, o)
                  if ("normal" === c.type) {
                    if (((r = o.done ? f : p), c.arg === m)) continue
                    return { value: c.arg, done: o.done }
                  }
                  "throw" === c.type &&
                    ((r = f), (o.method = "throw"), (o.arg = c.arg))
                }
              }
            })(e, o, n)),
            i
          )
        }
        function g(e, t, o) {
          try {
            return { type: "normal", arg: e.call(t, o) }
          } catch (e) {
            return { type: "throw", arg: e }
          }
        }
        function A() {}
        function E() {}
        function P() {}
        function w(e) {
          ;["next", "throw", "return"].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e)
            }
          })
        }
        function S(e) {
          var t
          this._invoke = function(o, r) {
            function i() {
              return new Promise(function(t, i) {
                !(function t(o, r, i, n) {
                  var a = g(e[o], e, r)
                  if ("throw" !== a.type) {
                    var c = a.arg,
                      l = c.value
                    return l &&
                      "object" == typeof l &&
                      s.call(l, "__await")
                      ? Promise.resolve(l.__await).then(
                          function(e) {
                            t("next", e, i, n)
                          },
                          function(e) {
                            t("throw", e, i, n)
                          },
                        )
                      : Promise.resolve(l).then(function(e) {
                          ;(c.value = e), i(c)
                        }, n)
                  }
                  n(a.arg)
                })(o, r, t, i)
              })
            }
            return (t = t ? t.then(i, i) : i())
          }
        }
        function B(e, t) {
          var r = e.iterator[t.method]
          if (r === o) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = o),
                B(e, t),
                "throw" === t.method)
              )
                return m
              ;(t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ))
            }
            return m
          }
          var s = g(r, e.iterator, t.arg)
          if ("throw" === s.type)
            return (
              (t.method = "throw"),
              (t.arg = s.arg),
              (t.delegate = null),
              m
            )
          var i = s.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = o)),
                (t.delegate = null),
                m)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError(
                "iterator result is not an object",
              )),
              (t.delegate = null),
              m)
        }
        function x(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function L(e) {
          var t = e.completion || {}
          ;(t.type = "normal"), delete t.arg, (e.completion = t)
        }
        function q(e) {
          ;(this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0)
        }
        function M(e) {
          if (e) {
            var t = e[n]
            if (t) return t.call(e)
            if ("function" == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length; )
                    if (s.call(e, r))
                      return (t.value = e[r]), (t.done = !1), t
                  return (t.value = o), (t.done = !0), t
                }
              return (i.next = i)
            }
          }
          return { next: C }
        }
        function C() {
          return { value: o, done: !0 }
        }
      })(
        (function() {
          return this
        })() || Function("return this")(),
      )
    },
    "./node_modules/p2/package.json": function(e) {
      e.exports = {
        _from: "p2@^0.7.1",
        _id: "p2@0.7.1",
        _inBundle: !1,
        _integrity: "sha1-JfJHTZvDptMUCh2iamfJ4RislUM=",
        _location: "/p2",
        _phantomChildren: {},
        _requested: {
          type: "range",
          registry: !0,
          raw: "p2@^0.7.1",
          name: "p2",
          escapedName: "p2",
          rawSpec: "^0.7.1",
          saveSpec: null,
          fetchSpec: "^0.7.1",
        },
        _requiredBy: ["/"],
        _resolved: "https://registry.npmjs.org/p2/-/p2-0.7.1.tgz",
        _shasum: "25f2474d9bc3a6d3140a1da26a67c9e118ac9543",
        _spec: "p2@^0.7.1",
        _where: "/Users/ericmcdaniel/Projects/subspace/packages/core",
        author: {
          name: "Stefan Hedman",
          email: "schteppe@gmail.com",
          url: "http://steffe.se",
        },
        bugs: { url: "https://github.com/schteppe/p2.js/issues" },
        bundleDependencies: !1,
        dependencies: { "poly-decomp": "0.1.1" },
        deprecated: !1,
        description: "A JavaScript 2D physics engine.",
        devDependencies: {
          grunt: "^0.4.5",
          "grunt-browserify": "~2.0.1",
          "grunt-contrib-concat": "^0.4.0",
          "grunt-contrib-jshint": "^0.11.2",
          "grunt-contrib-nodeunit": "^0.4.1",
          "grunt-contrib-uglify": "~0.4.0",
          "grunt-contrib-watch": "~0.5.0",
        },
        engines: { node: "*" },
        homepage: "https://github.com/schteppe/p2.js#readme",
        keywords: ["p2.js", "p2", "physics", "engine", "2d"],
        licenses: [{ type: "MIT" }],
        main: "./src/p2.js",
        name: "p2",
        repository: {
          type: "git",
          url: "git+https://github.com/schteppe/p2.js.git",
        },
        version: "0.7.1",
      }
    },
    "./node_modules/p2/src/collision/AABB.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function s(e) {
        ;(this.lowerBound = r.create()),
          e && e.lowerBound && r.copy(this.lowerBound, e.lowerBound),
          (this.upperBound = r.create()),
          e && e.upperBound && r.copy(this.upperBound, e.upperBound)
      }
      e.exports = s
      var i = r.create()
      ;(s.prototype.setFromPoints = function(e, t, o, s) {
        var n = this.lowerBound,
          a = this.upperBound
        "number" != typeof o && (o = 0),
          0 !== o ? r.rotate(n, e[0], o) : r.copy(n, e[0]),
          r.copy(a, n)
        for (
          var c = Math.cos(o), l = Math.sin(o), u = 1;
          u < e.length;
          u++
        ) {
          var d = e[u]
          if (0 !== o) {
            var p = d[0],
              h = d[1]
            ;(i[0] = c * p - l * h), (i[1] = l * p + c * h), (d = i)
          }
          for (var f = 0; f < 2; f++)
            d[f] > a[f] && (a[f] = d[f]), d[f] < n[f] && (n[f] = d[f])
        }
        t &&
          (r.add(this.lowerBound, this.lowerBound, t),
          r.add(this.upperBound, this.upperBound, t)),
          s &&
            ((this.lowerBound[0] -= s),
            (this.lowerBound[1] -= s),
            (this.upperBound[0] += s),
            (this.upperBound[1] += s))
      }),
        (s.prototype.copy = function(e) {
          r.copy(this.lowerBound, e.lowerBound),
            r.copy(this.upperBound, e.upperBound)
        }),
        (s.prototype.extend = function(e) {
          for (var t = 2; t--; ) {
            var o = e.lowerBound[t]
            this.lowerBound[t] > o && (this.lowerBound[t] = o)
            var r = e.upperBound[t]
            this.upperBound[t] < r && (this.upperBound[t] = r)
          }
        }),
        (s.prototype.overlaps = function(e) {
          var t = this.lowerBound,
            o = this.upperBound,
            r = e.lowerBound,
            s = e.upperBound
          return (
            ((r[0] <= o[0] && o[0] <= s[0]) ||
              (t[0] <= s[0] && s[0] <= o[0])) &&
            ((r[1] <= o[1] && o[1] <= s[1]) ||
              (t[1] <= s[1] && s[1] <= o[1]))
          )
        }),
        (s.prototype.containsPoint = function(e) {
          var t = this.lowerBound,
            o = this.upperBound
          return (
            t[0] <= e[0] &&
            e[0] <= o[0] &&
            t[1] <= e[1] &&
            e[1] <= o[1]
          )
        }),
        (s.prototype.overlapsRay = function(e) {
          var t = 1 / e.direction[0],
            o = 1 / e.direction[1],
            r = (this.lowerBound[0] - e.from[0]) * t,
            s = (this.upperBound[0] - e.from[0]) * t,
            i = (this.lowerBound[1] - e.from[1]) * o,
            n = (this.upperBound[1] - e.from[1]) * o,
            a = Math.max(Math.max(Math.min(r, s), Math.min(i, n))),
            c = Math.min(Math.min(Math.max(r, s), Math.max(i, n)))
          return c < 0 ? -1 : a > c ? -1 : a
        })
    },
    "./node_modules/p2/src/collision/Broadphase.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/objects/Body.js")
      function i(e) {
        ;(this.type = e),
          (this.result = []),
          (this.world = null),
          (this.boundingVolumeType = i.AABB)
      }
      ;(e.exports = i),
        (i.AABB = 1),
        (i.BOUNDING_CIRCLE = 2),
        (i.prototype.setWorld = function(e) {
          this.world = e
        }),
        (i.prototype.getCollisionPairs = function(e) {})
      var n = r.create()
      ;(i.boundingRadiusCheck = function(e, t) {
        r.sub(n, e.position, t.position)
        var o = r.squaredLength(n),
          s = e.boundingRadius + t.boundingRadius
        return o <= s * s
      }),
        (i.aabbCheck = function(e, t) {
          return e.getAABB().overlaps(t.getAABB())
        }),
        (i.prototype.boundingVolumeCheck = function(e, t) {
          var o
          switch (this.boundingVolumeType) {
            case i.BOUNDING_CIRCLE:
              o = i.boundingRadiusCheck(e, t)
              break
            case i.AABB:
              o = i.aabbCheck(e, t)
              break
            default:
              throw new Error(
                "Bounding volume type not recognized: " +
                  this.boundingVolumeType,
              )
          }
          return o
        }),
        (i.canCollide = function(e, t) {
          var o = s.KINEMATIC,
            r = s.STATIC
          return (
            (e.type !== r || t.type !== r) &&
            (!(
              (e.type === o && t.type === r) ||
              (e.type === r && t.type === o)
            ) &&
              ((e.type !== o || t.type !== o) &&
                ((e.sleepState !== s.SLEEPING ||
                  t.sleepState !== s.SLEEPING) &&
                  !(
                    (e.sleepState === s.SLEEPING && t.type === r) ||
                    (t.sleepState === s.SLEEPING && e.type === r)
                  ))))
          )
        }),
        (i.NAIVE = 1),
        (i.SAP = 2)
    },
    "./node_modules/p2/src/collision/NaiveBroadphase.js": function(
      e,
      t,
      o,
    ) {
      o("./node_modules/p2/src/shapes/Circle.js"),
        o("./node_modules/p2/src/shapes/Plane.js"),
        o("./node_modules/p2/src/shapes/Shape.js"),
        o("./node_modules/p2/src/shapes/Particle.js")
      var r = o("./node_modules/p2/src/collision/Broadphase.js")
      o("./node_modules/p2/src/math/vec2.js")
      function s() {
        r.call(this, r.NAIVE)
      }
      ;(e.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.getCollisionPairs = function(e) {
          var t = e.bodies,
            o = this.result
          o.length = 0
          for (var s = 0, i = t.length; s !== i; s++)
            for (var n = t[s], a = 0; a < s; a++) {
              var c = t[a]
              r.canCollide(n, c) &&
                this.boundingVolumeCheck(n, c) &&
                o.push(n, c)
            }
          return o
        }),
        (s.prototype.aabbQuery = function(e, t, o) {
          o = o || []
          for (var r = e.bodies, s = 0; s < r.length; s++) {
            var i = r[s]
            i.aabbNeedsUpdate && i.updateAABB(),
              i.aabb.overlaps(t) && o.push(i)
          }
          return o
        })
    },
    "./node_modules/p2/src/collision/Narrowphase.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = r.sub,
        i = r.add,
        n = r.dot,
        a = (o("./node_modules/p2/src/utils/Utils.js"),
        o("./node_modules/p2/src/utils/ContactEquationPool.js")),
        c = o("./node_modules/p2/src/utils/FrictionEquationPool.js"),
        l = o("./node_modules/p2/src/utils/TupleDictionary.js"),
        u = o("./node_modules/p2/src/equations/Equation.js"),
        d = (o("./node_modules/p2/src/equations/ContactEquation.js"),
        o("./node_modules/p2/src/equations/FrictionEquation.js"),
        o("./node_modules/p2/src/shapes/Circle.js")),
        p = o("./node_modules/p2/src/shapes/Convex.js"),
        h = o("./node_modules/p2/src/shapes/Shape.js"),
        f = (o("./node_modules/p2/src/objects/Body.js"),
        o("./node_modules/p2/src/shapes/Box.js"))
      e.exports = F
      var m = r.fromValues(0, 1),
        y = r.fromValues(0, 0),
        v = r.fromValues(0, 0),
        b = r.fromValues(0, 0),
        j = r.fromValues(0, 0),
        _ = r.fromValues(0, 0),
        g = r.fromValues(0, 0),
        A = r.fromValues(0, 0),
        E = r.fromValues(0, 0),
        P = r.fromValues(0, 0),
        w = r.fromValues(0, 0),
        S = r.fromValues(0, 0),
        B = r.fromValues(0, 0),
        x = r.fromValues(0, 0),
        L = r.fromValues(0, 0),
        q = r.fromValues(0, 0),
        M = r.fromValues(0, 0),
        C = r.fromValues(0, 0),
        I = r.fromValues(0, 0),
        O = []
      function F() {
        ;(this.contactEquations = []),
          (this.frictionEquations = []),
          (this.enableFriction = !0),
          (this.enabledEquations = !0),
          (this.slipForce = 10),
          (this.frictionCoefficient = 0.3),
          (this.surfaceVelocity = 0),
          (this.contactEquationPool = new a({ size: 32 })),
          (this.frictionEquationPool = new c({ size: 64 })),
          (this.restitution = 0),
          (this.stiffness = u.DEFAULT_STIFFNESS),
          (this.relaxation = u.DEFAULT_RELAXATION),
          (this.frictionStiffness = u.DEFAULT_STIFFNESS),
          (this.frictionRelaxation = u.DEFAULT_RELAXATION),
          (this.enableFrictionReduction = !0),
          (this.collidingBodiesLastStep = new l()),
          (this.contactSkinSize = 0.01)
      }
      var T = r.create(),
        R = r.create()
      function k(e, t) {
        r.set(e.vertices[0], 0.5 * -t.length, -t.radius),
          r.set(e.vertices[1], 0.5 * t.length, -t.radius),
          r.set(e.vertices[2], 0.5 * t.length, t.radius),
          r.set(e.vertices[3], 0.5 * -t.length, t.radius)
      }
      ;(F.prototype.bodiesOverlap = function(e, t) {
        for (
          var o = T, r = R, s = 0, i = e.shapes.length;
          s !== i;
          s++
        ) {
          var n = e.shapes[s]
          e.toWorldFrame(o, n.position)
          for (var a = 0, c = t.shapes.length; a !== c; a++) {
            var l = t.shapes[a]
            if (
              (t.toWorldFrame(r, l.position),
              this[n.type | l.type](
                e,
                n,
                o,
                n.angle + e.angle,
                t,
                l,
                r,
                l.angle + t.angle,
                !0,
              ))
            )
              return !0
          }
        }
        return !1
      }),
        (F.prototype.collidedLastStep = function(e, t) {
          var o = 0 | e.id,
            r = 0 | t.id
          return !!this.collidingBodiesLastStep.get(o, r)
        }),
        (F.prototype.reset = function() {
          this.collidingBodiesLastStep.reset()
          for (var e = this.contactEquations, t = e.length; t--; ) {
            var o = e[t],
              r = o.bodyA.id,
              s = o.bodyB.id
            this.collidingBodiesLastStep.set(r, s, !0)
          }
          for (
            var i = this.contactEquations,
              n = this.frictionEquations,
              a = 0;
            a < i.length;
            a++
          )
            this.contactEquationPool.release(i[a])
          for (a = 0; a < n.length; a++)
            this.frictionEquationPool.release(n[a])
          this.contactEquations.length = this.frictionEquations.length = 0
        }),
        (F.prototype.createContactEquation = function(e, t, o, r) {
          var s = this.contactEquationPool.get()
          return (
            (s.bodyA = e),
            (s.bodyB = t),
            (s.shapeA = o),
            (s.shapeB = r),
            (s.restitution = this.restitution),
            (s.firstImpact = !this.collidedLastStep(e, t)),
            (s.stiffness = this.stiffness),
            (s.relaxation = this.relaxation),
            (s.needsUpdate = !0),
            (s.enabled = this.enabledEquations),
            (s.offset = this.contactSkinSize),
            s
          )
        }),
        (F.prototype.createFrictionEquation = function(e, t, o, r) {
          var s = this.frictionEquationPool.get()
          return (
            (s.bodyA = e),
            (s.bodyB = t),
            (s.shapeA = o),
            (s.shapeB = r),
            s.setSlipForce(this.slipForce),
            (s.frictionCoefficient = this.frictionCoefficient),
            (s.relativeVelocity = this.surfaceVelocity),
            (s.enabled = this.enabledEquations),
            (s.needsUpdate = !0),
            (s.stiffness = this.frictionStiffness),
            (s.relaxation = this.frictionRelaxation),
            (s.contactEquations.length = 0),
            s
          )
        }),
        (F.prototype.createFrictionFromContact = function(e) {
          var t = this.createFrictionEquation(
            e.bodyA,
            e.bodyB,
            e.shapeA,
            e.shapeB,
          )
          return (
            r.copy(t.contactPointA, e.contactPointA),
            r.copy(t.contactPointB, e.contactPointB),
            r.rotate90cw(t.t, e.normalA),
            t.contactEquations.push(e),
            t
          )
        }),
        (F.prototype.createFrictionFromAverage = function(e) {
          var t = this.contactEquations[
              this.contactEquations.length - 1
            ],
            o = this.createFrictionEquation(
              t.bodyA,
              t.bodyB,
              t.shapeA,
              t.shapeB,
            ),
            s = t.bodyA
          t.bodyB
          r.set(o.contactPointA, 0, 0),
            r.set(o.contactPointB, 0, 0),
            r.set(o.t, 0, 0)
          for (var i = 0; i !== e; i++)
            (t = this.contactEquations[
              this.contactEquations.length - 1 - i
            ]).bodyA === s
              ? (r.add(o.t, o.t, t.normalA),
                r.add(
                  o.contactPointA,
                  o.contactPointA,
                  t.contactPointA,
                ),
                r.add(
                  o.contactPointB,
                  o.contactPointB,
                  t.contactPointB,
                ))
              : (r.sub(o.t, o.t, t.normalA),
                r.add(
                  o.contactPointA,
                  o.contactPointA,
                  t.contactPointB,
                ),
                r.add(
                  o.contactPointB,
                  o.contactPointB,
                  t.contactPointA,
                )),
              o.contactEquations.push(t)
          var n = 1 / e
          return (
            r.scale(o.contactPointA, o.contactPointA, n),
            r.scale(o.contactPointB, o.contactPointB, n),
            r.normalize(o.t, o.t),
            r.rotate90cw(o.t, o.t),
            o
          )
        }),
        (F.prototype[
          h.LINE | h.CONVEX
        ] = F.prototype.convexLine = function(
          e,
          t,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return !c && 0
        }),
        (F.prototype[h.LINE | h.BOX] = F.prototype.lineBox = function(
          e,
          t,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return !c && 0
        })
      var N = new f({ width: 1, height: 1 }),
        V = r.create()
      ;(F.prototype[h.CAPSULE | h.CONVEX] = F.prototype[
        h.CAPSULE | h.BOX
      ] = F.prototype.convexCapsule = function(
        e,
        t,
        o,
        s,
        i,
        n,
        a,
        c,
        l,
      ) {
        var u = V
        r.set(u, n.length / 2, 0), r.rotate(u, u, c), r.add(u, u, a)
        var d = this.circleConvex(i, n, u, c, e, t, o, s, l, n.radius)
        r.set(u, -n.length / 2, 0), r.rotate(u, u, c), r.add(u, u, a)
        var p = this.circleConvex(i, n, u, c, e, t, o, s, l, n.radius)
        if (l && (d || p)) return !0
        var h = N
        return (
          k(h, n),
          this.convexConvex(e, t, o, s, i, h, a, c, l) + d + p
        )
      }),
        (F.prototype[
          h.CAPSULE | h.LINE
        ] = F.prototype.lineCapsule = function(
          e,
          t,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return !c && 0
        })
      var G = r.create(),
        U = r.create(),
        D = new f({ width: 1, height: 1 })
      ;(F.prototype[
        h.CAPSULE | h.CAPSULE
      ] = F.prototype.capsuleCapsule = function(
        e,
        t,
        o,
        s,
        i,
        n,
        a,
        c,
        l,
      ) {
        for (var u = G, d = U, p = 0, h = 0; h < 2; h++) {
          r.set(u, (0 === h ? -1 : 1) * t.length / 2, 0),
            r.rotate(u, u, s),
            r.add(u, u, o)
          for (var f = 0; f < 2; f++) {
            r.set(d, (0 === f ? -1 : 1) * n.length / 2, 0),
              r.rotate(d, d, c),
              r.add(d, d, a),
              this.enableFrictionReduction &&
                ((b = this.enableFriction),
                (this.enableFriction = !1))
            var m = this.circleCircle(
              e,
              t,
              u,
              s,
              i,
              n,
              d,
              c,
              l,
              t.radius,
              n.radius,
            )
            if (
              (this.enableFrictionReduction &&
                (this.enableFriction = b),
              l && m)
            )
              return !0
            p += m
          }
        }
        this.enableFrictionReduction &&
          ((b = this.enableFriction), (this.enableFriction = !1))
        var y = D
        k(y, t)
        var v = this.convexCapsule(e, y, o, s, i, n, a, c, l)
        if (
          (this.enableFrictionReduction && (this.enableFriction = b),
          l && v)
        )
          return !0
        if (((p += v), this.enableFrictionReduction)) {
          var b = this.enableFriction
          this.enableFriction = !1
        }
        k(y, n)
        var j = this.convexCapsule(i, y, a, c, e, t, o, s, l)
        return (
          this.enableFrictionReduction && (this.enableFriction = b),
          !(!l || !j) ||
            ((p += j),
            this.enableFrictionReduction &&
              p &&
              this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromAverage(p),
              ),
            p)
        )
      }),
        (F.prototype[
          h.LINE | h.LINE
        ] = F.prototype.lineLine = function(
          e,
          t,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return !c && 0
        }),
        (F.prototype[
          h.PLANE | h.LINE
        ] = F.prototype.planeLine = function(
          e,
          t,
          o,
          a,
          c,
          l,
          u,
          d,
          p,
        ) {
          var h = y,
            f = v,
            w = b,
            S = j,
            B = _,
            x = g,
            L = A,
            q = E,
            M = P,
            C = O,
            I = 0
          r.set(h, -l.length / 2, 0),
            r.set(f, l.length / 2, 0),
            r.rotate(w, h, d),
            r.rotate(S, f, d),
            i(w, w, u),
            i(S, S, u),
            r.copy(h, w),
            r.copy(f, S),
            s(B, f, h),
            r.normalize(x, B),
            r.rotate90cw(M, x),
            r.rotate(q, m, a),
            (C[0] = h),
            (C[1] = f)
          for (var F = 0; F < C.length; F++) {
            var T = C[F]
            s(L, T, o)
            var R = n(L, q)
            if (R < 0) {
              if (p) return !0
              var k = this.createContactEquation(e, c, t, l)
              I++,
                r.copy(k.normalA, q),
                r.normalize(k.normalA, k.normalA),
                r.scale(L, q, R),
                s(k.contactPointA, T, L),
                s(k.contactPointA, k.contactPointA, e.position),
                s(k.contactPointB, T, u),
                i(k.contactPointB, k.contactPointB, u),
                s(k.contactPointB, k.contactPointB, c.position),
                this.contactEquations.push(k),
                this.enableFrictionReduction ||
                  (this.enableFriction &&
                    this.frictionEquations.push(
                      this.createFrictionFromContact(k),
                    ))
            }
          }
          return (
            !p &&
            (this.enableFrictionReduction ||
              (I &&
                this.enableFriction &&
                this.frictionEquations.push(
                  this.createFrictionFromAverage(I),
                )),
            I)
          )
        }),
        (F.prototype[
          h.PARTICLE | h.CAPSULE
        ] = F.prototype.particleCapsule = function(
          e,
          t,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return this.circleLine(
            e,
            t,
            o,
            r,
            s,
            i,
            n,
            a,
            c,
            i.radius,
            0,
          )
        }),
        (F.prototype[
          h.CIRCLE | h.LINE
        ] = F.prototype.circleLine = function(
          e,
          t,
          o,
          a,
          c,
          l,
          u,
          d,
          p,
          h,
          f,
        ) {
          ;(h = h || 0), (f = void 0 !== f ? f : t.radius)
          var m = y,
            q = v,
            M = b,
            C = j,
            I = _,
            F = g,
            T = A,
            R = E,
            k = P,
            N = w,
            V = S,
            G = B,
            U = x,
            D = L,
            Y = O
          r.set(R, -l.length / 2, 0),
            r.set(k, l.length / 2, 0),
            r.rotate(N, R, d),
            r.rotate(V, k, d),
            i(N, N, u),
            i(V, V, u),
            r.copy(R, N),
            r.copy(k, V),
            s(F, k, R),
            r.normalize(T, F),
            r.rotate90cw(I, T),
            s(G, o, R)
          var W = n(G, I)
          s(C, R, u), s(U, o, u)
          var H = f + h
          if (Math.abs(W) < H) {
            r.scale(m, I, W),
              s(M, o, m),
              r.scale(q, I, n(I, U)),
              r.normalize(q, q),
              r.scale(q, q, h),
              i(M, M, q)
            var z = n(T, M),
              X = n(T, R),
              K = n(T, k)
            if (z > X && z < K) {
              if (p) return !0
              var Z = this.createContactEquation(e, c, t, l)
              return (
                r.scale(Z.normalA, m, -1),
                r.normalize(Z.normalA, Z.normalA),
                r.scale(Z.contactPointA, Z.normalA, f),
                i(Z.contactPointA, Z.contactPointA, o),
                s(Z.contactPointA, Z.contactPointA, e.position),
                s(Z.contactPointB, M, u),
                i(Z.contactPointB, Z.contactPointB, u),
                s(Z.contactPointB, Z.contactPointB, c.position),
                this.contactEquations.push(Z),
                this.enableFriction &&
                  this.frictionEquations.push(
                    this.createFrictionFromContact(Z),
                  ),
                1
              )
            }
          }
          ;(Y[0] = R), (Y[1] = k)
          for (var J = 0; J < Y.length; J++) {
            var Q = Y[J]
            if ((s(G, Q, o), r.squaredLength(G) < Math.pow(H, 2))) {
              if (p) return !0
              Z = this.createContactEquation(e, c, t, l)
              return (
                r.copy(Z.normalA, G),
                r.normalize(Z.normalA, Z.normalA),
                r.scale(Z.contactPointA, Z.normalA, f),
                i(Z.contactPointA, Z.contactPointA, o),
                s(Z.contactPointA, Z.contactPointA, e.position),
                s(Z.contactPointB, Q, u),
                r.scale(D, Z.normalA, -h),
                i(Z.contactPointB, Z.contactPointB, D),
                i(Z.contactPointB, Z.contactPointB, u),
                s(Z.contactPointB, Z.contactPointB, c.position),
                this.contactEquations.push(Z),
                this.enableFriction &&
                  this.frictionEquations.push(
                    this.createFrictionFromContact(Z),
                  ),
                1
              )
            }
          }
          return 0
        }),
        (F.prototype[
          h.CIRCLE | h.CAPSULE
        ] = F.prototype.circleCapsule = function(
          e,
          t,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return this.circleLine(e, t, o, r, s, i, n, a, c, i.radius)
        }),
        (F.prototype[h.CIRCLE | h.CONVEX] = F.prototype[
          h.CIRCLE | h.BOX
        ] = F.prototype.circleConvex = function(
          e,
          t,
          o,
          n,
          a,
          c,
          l,
          u,
          d,
          p,
        ) {
          p = "number" == typeof p ? p : t.radius
          for (
            var h = y,
              f = v,
              m = b,
              g = j,
              A = _,
              E = w,
              P = S,
              B = x,
              C = L,
              I = q,
              O = M,
              F = !1,
              T = Number.MAX_VALUE,
              R = c.vertices,
              k = 0;
            k !== R.length + 1;
            k++
          ) {
            var N = R[k % R.length],
              V = R[(k + 1) % R.length]
            if (
              (r.rotate(h, N, u),
              r.rotate(f, V, u),
              i(h, h, l),
              i(f, f, l),
              s(m, f, h),
              r.normalize(g, m),
              r.rotate90cw(A, g),
              r.scale(C, A, -t.radius),
              i(C, C, o),
              X(C, c, l, u))
            ) {
              r.sub(I, h, C)
              var G = Math.abs(r.dot(I, A))
              G < T &&
                (r.copy(O, C),
                (T = G),
                r.scale(B, A, G),
                r.add(B, B, C),
                (F = !0))
            }
          }
          if (F) {
            if (d) return !0
            var U = this.createContactEquation(e, a, t, c)
            return (
              r.sub(U.normalA, O, o),
              r.normalize(U.normalA, U.normalA),
              r.scale(U.contactPointA, U.normalA, p),
              i(U.contactPointA, U.contactPointA, o),
              s(U.contactPointA, U.contactPointA, e.position),
              s(U.contactPointB, B, l),
              i(U.contactPointB, U.contactPointB, l),
              s(U.contactPointB, U.contactPointB, a.position),
              this.contactEquations.push(U),
              this.enableFriction &&
                this.frictionEquations.push(
                  this.createFrictionFromContact(U),
                ),
              1
            )
          }
          if (p > 0)
            for (k = 0; k < R.length; k++) {
              var D = R[k]
              if (
                (r.rotate(P, D, u),
                i(P, P, l),
                s(E, P, o),
                r.squaredLength(E) < Math.pow(p, 2))
              ) {
                if (d) return !0
                U = this.createContactEquation(e, a, t, c)
                return (
                  r.copy(U.normalA, E),
                  r.normalize(U.normalA, U.normalA),
                  r.scale(U.contactPointA, U.normalA, p),
                  i(U.contactPointA, U.contactPointA, o),
                  s(U.contactPointA, U.contactPointA, e.position),
                  s(U.contactPointB, P, l),
                  i(U.contactPointB, U.contactPointB, l),
                  s(U.contactPointB, U.contactPointB, a.position),
                  this.contactEquations.push(U),
                  this.enableFriction &&
                    this.frictionEquations.push(
                      this.createFrictionFromContact(U),
                    ),
                  1
                )
              }
            }
          return 0
        })
      var Y = r.create(),
        W = r.create(),
        H = r.create(),
        z = r.create()
      function X(e, t, o, n) {
        for (
          var a = Y,
            c = W,
            l = H,
            u = z,
            d = e,
            p = t.vertices,
            h = null,
            f = 0;
          f !== p.length + 1;
          f++
        ) {
          var m = p[f % p.length],
            y = p[(f + 1) % p.length]
          r.rotate(a, m, n),
            r.rotate(c, y, n),
            i(a, a, o),
            i(c, c, o),
            s(l, a, d),
            s(u, c, d)
          var v = r.crossLength(l, u)
          if ((null === h && (h = v), v * h <= 0)) return !1
          h = v
        }
        return !0
      }
      ;(F.prototype[h.PARTICLE | h.CONVEX] = F.prototype[
        h.PARTICLE | h.BOX
      ] = F.prototype.particleConvex = function(
        e,
        t,
        o,
        a,
        c,
        l,
        u,
        d,
        p,
      ) {
        var h = y,
          f = v,
          m = b,
          E = j,
          P = _,
          S = g,
          B = A,
          L = w,
          q = x,
          M = C,
          O = I,
          F = Number.MAX_VALUE,
          T = !1,
          R = l.vertices
        if (!X(o, l, u, d)) return 0
        if (p) return !0
        for (var k = 0; k !== R.length + 1; k++) {
          var N = R[k % R.length],
            V = R[(k + 1) % R.length]
          r.rotate(h, N, d),
            r.rotate(f, V, d),
            i(h, h, u),
            i(f, f, u),
            s(m, f, h),
            r.normalize(E, m),
            r.rotate90cw(P, E),
            s(L, o, h)
          n(L, P)
          s(S, h, u), s(B, o, u), r.sub(M, h, o)
          var G = Math.abs(r.dot(M, P))
          G < F &&
            ((F = G),
            r.scale(q, P, G),
            r.add(q, q, o),
            r.copy(O, P),
            (T = !0))
        }
        if (T) {
          var U = this.createContactEquation(e, c, t, l)
          return (
            r.scale(U.normalA, O, -1),
            r.normalize(U.normalA, U.normalA),
            r.set(U.contactPointA, 0, 0),
            i(U.contactPointA, U.contactPointA, o),
            s(U.contactPointA, U.contactPointA, e.position),
            s(U.contactPointB, q, u),
            i(U.contactPointB, U.contactPointB, u),
            s(U.contactPointB, U.contactPointB, c.position),
            this.contactEquations.push(U),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(U),
              ),
            1
          )
        }
        return 0
      }),
        (F.prototype[h.CIRCLE] = F.prototype.circleCircle = function(
          e,
          t,
          o,
          n,
          a,
          c,
          l,
          u,
          d,
          p,
          h,
        ) {
          var f = y
          ;(p = p || t.radius), (h = h || c.radius)
          s(f, o, l)
          var m = p + h
          if (r.squaredLength(f) > Math.pow(m, 2)) return 0
          if (d) return !0
          var v = this.createContactEquation(e, a, t, c)
          return (
            s(v.normalA, l, o),
            r.normalize(v.normalA, v.normalA),
            r.scale(v.contactPointA, v.normalA, p),
            r.scale(v.contactPointB, v.normalA, -h),
            i(v.contactPointA, v.contactPointA, o),
            s(v.contactPointA, v.contactPointA, e.position),
            i(v.contactPointB, v.contactPointB, l),
            s(v.contactPointB, v.contactPointB, a.position),
            this.contactEquations.push(v),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(v),
              ),
            1
          )
        }),
        (F.prototype[h.PLANE | h.CONVEX] = F.prototype[
          h.PLANE | h.BOX
        ] = F.prototype.planeConvex = function(
          e,
          t,
          o,
          a,
          c,
          l,
          u,
          d,
          p,
        ) {
          var h = y,
            f = v,
            j = b,
            _ = 0
          r.rotate(f, m, a)
          for (var g = 0; g !== l.vertices.length; g++) {
            var A = l.vertices[g]
            if (
              (r.rotate(h, A, d),
              i(h, h, u),
              s(j, h, o),
              n(j, f) <= 0)
            ) {
              if (p) return !0
              _++
              var E = this.createContactEquation(e, c, t, l)
              s(j, h, o), r.copy(E.normalA, f)
              var P = n(j, E.normalA)
              r.scale(j, E.normalA, P),
                s(E.contactPointB, h, c.position),
                s(E.contactPointA, h, j),
                s(E.contactPointA, E.contactPointA, e.position),
                this.contactEquations.push(E),
                this.enableFrictionReduction ||
                  (this.enableFriction &&
                    this.frictionEquations.push(
                      this.createFrictionFromContact(E),
                    ))
            }
          }
          return (
            this.enableFrictionReduction &&
              this.enableFriction &&
              _ &&
              this.frictionEquations.push(
                this.createFrictionFromAverage(_),
              ),
            _
          )
        }),
        (F.prototype[
          h.PARTICLE | h.PLANE
        ] = F.prototype.particlePlane = function(
          e,
          t,
          o,
          i,
          a,
          c,
          l,
          u,
          d,
        ) {
          var p = y,
            h = v
          ;(u = u || 0), s(p, o, l), r.rotate(h, m, u)
          var f = n(p, h)
          if (f > 0) return 0
          if (d) return !0
          var b = this.createContactEquation(a, e, c, t)
          return (
            r.copy(b.normalA, h),
            r.scale(p, b.normalA, f),
            s(b.contactPointA, o, p),
            s(b.contactPointA, b.contactPointA, a.position),
            s(b.contactPointB, o, e.position),
            this.contactEquations.push(b),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(b),
              ),
            1
          )
        }),
        (F.prototype[
          h.CIRCLE | h.PARTICLE
        ] = F.prototype.circleParticle = function(
          e,
          t,
          o,
          n,
          a,
          c,
          l,
          u,
          d,
        ) {
          var p = y
          if (
            (s(p, l, o), r.squaredLength(p) > Math.pow(t.radius, 2))
          )
            return 0
          if (d) return !0
          var h = this.createContactEquation(e, a, t, c)
          return (
            r.copy(h.normalA, p),
            r.normalize(h.normalA, h.normalA),
            r.scale(h.contactPointA, h.normalA, t.radius),
            i(h.contactPointA, h.contactPointA, o),
            s(h.contactPointA, h.contactPointA, e.position),
            s(h.contactPointB, l, a.position),
            this.contactEquations.push(h),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(h),
              ),
            1
          )
        })
      var K = new d({ radius: 1 }),
        Z = r.create(),
        J = r.create()
      r.create()
      ;(F.prototype[
        h.PLANE | h.CAPSULE
      ] = F.prototype.planeCapsule = function(
        e,
        t,
        o,
        s,
        n,
        a,
        c,
        l,
        u,
      ) {
        var d,
          p = Z,
          h = J,
          f = K
        r.set(p, -a.length / 2, 0),
          r.rotate(p, p, l),
          i(p, p, c),
          r.set(h, a.length / 2, 0),
          r.rotate(h, h, l),
          i(h, h, c),
          (f.radius = a.radius),
          this.enableFrictionReduction &&
            ((d = this.enableFriction), (this.enableFriction = !1))
        var m = this.circlePlane(n, f, p, 0, e, t, o, s, u),
          y = this.circlePlane(n, f, h, 0, e, t, o, s, u)
        if (
          (this.enableFrictionReduction && (this.enableFriction = d),
          u)
        )
          return m || y
        var v = m + y
        return (
          this.enableFrictionReduction &&
            v &&
            this.frictionEquations.push(
              this.createFrictionFromAverage(v),
            ),
          v
        )
      }),
        (F.prototype[
          h.CIRCLE | h.PLANE
        ] = F.prototype.circlePlane = function(
          e,
          t,
          o,
          a,
          c,
          l,
          u,
          d,
          p,
        ) {
          var h = e,
            f = t,
            j = o,
            _ = c,
            g = u,
            A = d
          A = A || 0
          var E = y,
            P = v,
            w = b
          s(E, j, g), r.rotate(P, m, A)
          var S = n(P, E)
          if (S > f.radius) return 0
          if (p) return !0
          var B = this.createContactEquation(_, h, l, t)
          return (
            r.copy(B.normalA, P),
            r.scale(B.contactPointB, B.normalA, -f.radius),
            i(B.contactPointB, B.contactPointB, j),
            s(B.contactPointB, B.contactPointB, h.position),
            r.scale(w, B.normalA, S),
            s(B.contactPointA, E, w),
            i(B.contactPointA, B.contactPointA, g),
            s(B.contactPointA, B.contactPointA, _.position),
            this.contactEquations.push(B),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(B),
              ),
            1
          )
        }),
        (F.prototype[h.CONVEX] = F.prototype[
          h.CONVEX | h.BOX
        ] = F.prototype[h.BOX] = F.prototype.convexConvex = function(
          e,
          t,
          o,
          a,
          c,
          l,
          u,
          d,
          p,
          h,
        ) {
          var f = y,
            m = v,
            g = b,
            w = j,
            S = _,
            B = A,
            x = E,
            L = P,
            q = 0
          h = "number" == typeof h ? h : 0
          if (!F.findSeparatingAxis(t, o, a, l, u, d, f)) return 0
          s(x, u, o), n(f, x) > 0 && r.scale(f, f, -1)
          var M = F.getClosestEdge(t, a, f, !0),
            C = F.getClosestEdge(l, d, f)
          if (-1 === M || -1 === C) return 0
          for (var I = 0; I < 2; I++) {
            var O,
              T = M,
              R = C,
              k = t,
              N = l,
              V = o,
              G = u,
              U = a,
              D = d,
              Y = e,
              W = c
            if (0 === I)
              (O = T),
                (T = R),
                (R = O),
                (O = k),
                (k = N),
                (N = O),
                (O = V),
                (V = G),
                (G = O),
                (O = U),
                (U = D),
                (D = O),
                (O = Y),
                (Y = W),
                (W = O)
            for (var H = R; H < R + 2; H++) {
              var z =
                N.vertices[
                  (H + N.vertices.length) % N.vertices.length
                ]
              r.rotate(m, z, D), i(m, m, G)
              for (var X = 0, K = T - 1; K < T + 2; K++) {
                var Z =
                    k.vertices[
                      (K + k.vertices.length) % k.vertices.length
                    ],
                  J =
                    k.vertices[
                      (K + 1 + k.vertices.length) % k.vertices.length
                    ]
                r.rotate(g, Z, U),
                  r.rotate(w, J, U),
                  i(g, g, V),
                  i(w, w, V),
                  s(S, w, g),
                  r.rotate90cw(L, S),
                  r.normalize(L, L),
                  s(x, m, g)
                var Q = n(L, x)
                ;((K === T && Q <= h) || (K !== T && Q <= 0)) && X++
              }
              if (X >= 3) {
                if (p) return !0
                var $ = this.createContactEquation(Y, W, k, N)
                q++
                ;(Z = k.vertices[T % k.vertices.length]),
                  (J = k.vertices[(T + 1) % k.vertices.length])
                r.rotate(g, Z, U),
                  r.rotate(w, J, U),
                  i(g, g, V),
                  i(w, w, V),
                  s(S, w, g),
                  r.rotate90cw($.normalA, S),
                  r.normalize($.normalA, $.normalA),
                  s(x, m, g)
                Q = n($.normalA, x)
                r.scale(B, $.normalA, Q),
                  s($.contactPointA, m, V),
                  s($.contactPointA, $.contactPointA, B),
                  i($.contactPointA, $.contactPointA, V),
                  s($.contactPointA, $.contactPointA, Y.position),
                  s($.contactPointB, m, G),
                  i($.contactPointB, $.contactPointB, G),
                  s($.contactPointB, $.contactPointB, W.position),
                  this.contactEquations.push($),
                  this.enableFrictionReduction ||
                    (this.enableFriction &&
                      this.frictionEquations.push(
                        this.createFrictionFromContact($),
                      ))
              }
            }
          }
          return (
            this.enableFrictionReduction &&
              this.enableFriction &&
              q &&
              this.frictionEquations.push(
                this.createFrictionFromAverage(q),
              ),
            q
          )
        })
      var Q = r.fromValues(0, 0)
      F.projectConvexOntoAxis = function(e, t, o, s, i) {
        var a,
          c,
          l = null,
          u = null,
          d = Q
        r.rotate(d, s, -o)
        for (var p = 0; p < e.vertices.length; p++)
          (a = e.vertices[p]),
            (c = n(a, d)),
            (null === l || c > l) && (l = c),
            (null === u || c < u) && (u = c)
        if (u > l) {
          var h = u
          ;(u = l), (l = h)
        }
        var f = n(t, s)
        r.set(i, u + f, l + f)
      }
      var $ = r.fromValues(0, 0),
        ee = r.fromValues(0, 0),
        te = r.fromValues(0, 0),
        oe = r.fromValues(0, 0),
        re = r.fromValues(0, 0),
        se = r.fromValues(0, 0)
      F.findSeparatingAxis = function(e, t, o, i, n, a, c) {
        var l = null,
          u = !1,
          d = !1,
          p = $,
          h = ee,
          m = te,
          y = oe,
          v = re,
          b = se
        if (e instanceof f && i instanceof f)
          for (var j = 0; 2 !== j; j++) {
            var _ = e,
              g = o
            1 === j && ((_ = i), (g = a))
            for (var A = 0; 2 !== A; A++) {
              0 === A ? r.set(y, 0, 1) : 1 === A && r.set(y, 1, 0),
                0 !== g && r.rotate(y, y, g),
                F.projectConvexOntoAxis(e, t, o, y, v),
                F.projectConvexOntoAxis(i, n, a, y, b)
              var E = v,
                P = b
              v[0] > b[0] && ((P = v), (E = b), !0),
                (u = (w = P[0] - E[1]) <= 0),
                (null === l || w > l) &&
                  (r.copy(c, y), (l = w), (d = u))
            }
          }
        else
          for (j = 0; 2 !== j; j++) {
            ;(_ = e), (g = o)
            1 === j && ((_ = i), (g = a))
            for (A = 0; A !== _.vertices.length; A++) {
              r.rotate(h, _.vertices[A], g),
                r.rotate(
                  m,
                  _.vertices[(A + 1) % _.vertices.length],
                  g,
                ),
                s(p, m, h),
                r.rotate90cw(y, p),
                r.normalize(y, y),
                F.projectConvexOntoAxis(e, t, o, y, v),
                F.projectConvexOntoAxis(i, n, a, y, b)
              var w
              ;(E = v), (P = b)
              v[0] > b[0] && ((P = v), (E = b), !0),
                (u = (w = P[0] - E[1]) <= 0),
                (null === l || w > l) &&
                  (r.copy(c, y), (l = w), (d = u))
            }
          }
        return d
      }
      var ie = r.fromValues(0, 0),
        ne = r.fromValues(0, 0),
        ae = r.fromValues(0, 0)
      F.getClosestEdge = function(e, t, o, i) {
        var a = ie,
          c = ne,
          l = ae
        r.rotate(a, o, -t), i && r.scale(a, a, -1)
        for (
          var u = -1, d = e.vertices.length, p = -1, h = 0;
          h !== d;
          h++
        ) {
          s(c, e.vertices[(h + 1) % d], e.vertices[h % d]),
            r.rotate90cw(l, c),
            r.normalize(l, l)
          var f = n(l, a)
          ;(-1 === u || f > p) && ((u = h % d), (p = f))
        }
        return u
      }
      var ce = r.create(),
        le = r.create(),
        ue = r.create(),
        de = r.create(),
        pe = r.create(),
        he = r.create(),
        fe = r.create()
      F.prototype[
        h.CIRCLE | h.HEIGHTFIELD
      ] = F.prototype.circleHeightfield = function(
        e,
        t,
        o,
        n,
        a,
        c,
        l,
        u,
        d,
        p,
      ) {
        var h = c.heights,
          f = ((p = p || t.radius), c.elementWidth),
          m = le,
          y = ce,
          v = pe,
          b = fe,
          j = he,
          _ = ue,
          g = de,
          A = Math.floor((o[0] - p - l[0]) / f),
          E = Math.ceil((o[0] + p - l[0]) / f)
        A < 0 && (A = 0), E >= h.length && (E = h.length - 1)
        for (var P = h[A], w = h[E], S = A; S < E; S++)
          h[S] < w && (w = h[S]), h[S] > P && (P = h[S])
        if (o[1] - p > P) return !d && 0
        var B = !1
        for (S = A; S < E; S++) {
          r.set(_, S * f, h[S]),
            r.set(g, (S + 1) * f, h[S + 1]),
            r.add(_, _, l),
            r.add(g, g, l),
            r.sub(j, g, _),
            r.rotate(j, j, Math.PI / 2),
            r.normalize(j, j),
            r.scale(y, j, -p),
            r.add(y, y, o),
            r.sub(m, y, _)
          var x = r.dot(m, j)
          if (y[0] >= _[0] && y[0] < g[0] && x <= 0) {
            if (d) return !0
            ;(B = !0), r.scale(m, j, -x), r.add(v, y, m), r.copy(b, j)
            var L = this.createContactEquation(a, e, c, t)
            r.copy(L.normalA, b),
              r.scale(L.contactPointB, L.normalA, -p),
              i(L.contactPointB, L.contactPointB, o),
              s(L.contactPointB, L.contactPointB, e.position),
              r.copy(L.contactPointA, v),
              r.sub(L.contactPointA, L.contactPointA, a.position),
              this.contactEquations.push(L),
              this.enableFriction &&
                this.frictionEquations.push(
                  this.createFrictionFromContact(L),
                )
          }
        }
        if (((B = !1), p > 0))
          for (S = A; S <= E; S++)
            if (
              (r.set(_, S * f, h[S]),
              r.add(_, _, l),
              r.sub(m, o, _),
              r.squaredLength(m) < Math.pow(p, 2))
            ) {
              if (d) return !0
              B = !0
              L = this.createContactEquation(a, e, c, t)
              r.copy(L.normalA, m),
                r.normalize(L.normalA, L.normalA),
                r.scale(L.contactPointB, L.normalA, -p),
                i(L.contactPointB, L.contactPointB, o),
                s(L.contactPointB, L.contactPointB, e.position),
                s(L.contactPointA, _, l),
                i(L.contactPointA, L.contactPointA, l),
                s(L.contactPointA, L.contactPointA, a.position),
                this.contactEquations.push(L),
                this.enableFriction &&
                  this.frictionEquations.push(
                    this.createFrictionFromContact(L),
                  )
            }
        return B ? 1 : 0
      }
      var me = r.create(),
        ye = r.create(),
        ve = r.create(),
        be = new p({
          vertices: [r.create(), r.create(), r.create(), r.create()],
        })
      F.prototype[h.BOX | h.HEIGHTFIELD] = F.prototype[
        h.CONVEX | h.HEIGHTFIELD
      ] = F.prototype.convexHeightfield = function(
        e,
        t,
        o,
        s,
        i,
        n,
        a,
        c,
        l,
      ) {
        var u = n.heights,
          d = n.elementWidth,
          p = me,
          h = ye,
          f = ve,
          m = be,
          y = Math.floor((e.aabb.lowerBound[0] - a[0]) / d),
          v = Math.ceil((e.aabb.upperBound[0] - a[0]) / d)
        y < 0 && (y = 0), v >= u.length && (v = u.length - 1)
        for (var b = u[y], j = u[v], _ = y; _ < v; _++)
          u[_] < j && (j = u[_]), u[_] > b && (b = u[_])
        if (e.aabb.lowerBound[1] > b) return !l && 0
        var g = 0
        for (_ = y; _ < v; _++) {
          r.set(p, _ * d, u[_]),
            r.set(h, (_ + 1) * d, u[_ + 1]),
            r.add(p, p, a),
            r.add(h, h, a)
          r.set(f, 0.5 * (h[0] + p[0]), 0.5 * (h[1] + p[1] - 100)),
            r.sub(m.vertices[0], h, f),
            r.sub(m.vertices[1], p, f),
            r.copy(m.vertices[2], m.vertices[1]),
            r.copy(m.vertices[3], m.vertices[0]),
            (m.vertices[2][1] -= 100),
            (m.vertices[3][1] -= 100),
            (g += this.convexConvex(e, t, o, s, i, m, f, 0, l))
        }
        return g
      }
    },
    "./node_modules/p2/src/collision/Ray.js": function(e, t, o) {
      e.exports = s
      var r = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/collision/RaycastResult.js"),
        o("./node_modules/p2/src/shapes/Shape.js"),
        o("./node_modules/p2/src/collision/AABB.js")
      function s(e) {
        ;(e = e || {}),
          (this.from = e.from
            ? r.fromValues(e.from[0], e.from[1])
            : r.create()),
          (this.to = e.to
            ? r.fromValues(e.to[0], e.to[1])
            : r.create()),
          (this.checkCollisionResponse =
            void 0 === e.checkCollisionResponse ||
            e.checkCollisionResponse),
          (this.skipBackfaces = !!e.skipBackfaces),
          (this.collisionMask =
            void 0 !== e.collisionMask ? e.collisionMask : -1),
          (this.collisionGroup =
            void 0 !== e.collisionGroup ? e.collisionGroup : -1),
          (this.mode = void 0 !== e.mode ? e.mode : s.ANY),
          (this.callback = e.callback || function(e) {}),
          (this.direction = r.create()),
          (this.length = 1),
          this.update()
      }
      ;(s.prototype.constructor = s),
        (s.CLOSEST = 1),
        (s.ANY = 2),
        (s.ALL = 4),
        (s.prototype.update = function() {
          var e = this.direction
          r.sub(e, this.to, this.from),
            (this.length = r.length(e)),
            r.normalize(e, e)
        }),
        (s.prototype.intersectBodies = function(e, t) {
          for (
            var o = 0, r = t.length;
            !e.shouldStop(this) && o < r;
            o++
          ) {
            var s = t[o],
              i = s.getAABB()
            ;(i.overlapsRay(this) >= 0 ||
              i.containsPoint(this.from)) &&
              this.intersectBody(e, s)
          }
        })
      var i = r.create()
      ;(s.prototype.intersectBody = function(e, t) {
        var o = this.checkCollisionResponse
        if (!o || t.collisionResponse)
          for (var s = i, n = 0, a = t.shapes.length; n < a; n++) {
            var c = t.shapes[n]
            if (
              (!o || c.collisionResponse) &&
              (0 != (this.collisionGroup & c.collisionMask) &&
                0 != (c.collisionGroup & this.collisionMask))
            ) {
              r.rotate(s, c.position, t.angle),
                r.add(s, s, t.position)
              var l = c.angle + t.angle
              if (
                (this.intersectShape(e, c, l, s, t),
                e.shouldStop(this))
              )
                break
            }
          }
      }),
        (s.prototype.intersectShape = function(e, t, o, s, i) {
          ;(function(e, t, o) {
            r.sub(n, o, e)
            var s = r.dot(n, t)
            return (
              r.scale(a, t, s),
              r.add(a, a, e),
              r.squaredDistance(o, a)
            )
          })(this.from, this.direction, s) >
            t.boundingRadius * t.boundingRadius ||
            ((this._currentBody = i),
            (this._currentShape = t),
            t.raycast(e, this, s, o),
            (this._currentBody = this._currentShape = null))
        }),
        (s.prototype.getAABB = function(e) {
          var t = this.to,
            o = this.from
          r.set(
            e.lowerBound,
            Math.min(t[0], o[0]),
            Math.min(t[1], o[1]),
          ),
            r.set(
              e.upperBound,
              Math.max(t[0], o[0]),
              Math.max(t[1], o[1]),
            )
        })
      r.create()
      s.prototype.reportIntersection = function(e, t, o, i) {
        this.from, this.to
        var n = this._currentShape,
          a = this._currentBody
        if (!(this.skipBackfaces && r.dot(o, this.direction) > 0))
          switch (this.mode) {
            case s.ALL:
              e.set(o, n, a, t, i), this.callback(e)
              break
            case s.CLOSEST:
              ;(t < e.fraction || !e.hasHit()) && e.set(o, n, a, t, i)
              break
            case s.ANY:
              e.set(o, n, a, t, i)
          }
      }
      var n = r.create(),
        a = r.create()
    },
    "./node_modules/p2/src/collision/RaycastResult.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/collision/Ray.js")
      function i() {
        ;(this.normal = r.create()),
          (this.shape = null),
          (this.body = null),
          (this.faceIndex = -1),
          (this.fraction = -1),
          (this.isStopped = !1)
      }
      ;(e.exports = i),
        (i.prototype.reset = function() {
          r.set(this.normal, 0, 0),
            (this.shape = null),
            (this.body = null),
            (this.faceIndex = -1),
            (this.fraction = -1),
            (this.isStopped = !1)
        }),
        (i.prototype.getHitDistance = function(e) {
          return r.distance(e.from, e.to) * this.fraction
        }),
        (i.prototype.hasHit = function() {
          return -1 !== this.fraction
        }),
        (i.prototype.getHitPoint = function(e, t) {
          r.lerp(e, t.from, t.to, this.fraction)
        }),
        (i.prototype.stop = function() {
          this.isStopped = !0
        }),
        (i.prototype.shouldStop = function(e) {
          return (
            this.isStopped ||
            (-1 !== this.fraction && e.mode === s.ANY)
          )
        }),
        (i.prototype.set = function(e, t, o, s, i) {
          r.copy(this.normal, e),
            (this.shape = t),
            (this.body = o),
            (this.fraction = s),
            (this.faceIndex = i)
        })
    },
    "./node_modules/p2/src/collision/SAPBroadphase.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/Utils.js"),
        s = o("./node_modules/p2/src/collision/Broadphase.js")
      function i() {
        s.call(this, s.SAP),
          (this.axisList = []),
          (this.axisIndex = 0)
        var e = this
        ;(this._addBodyHandler = function(t) {
          e.axisList.push(t.body)
        }),
          (this._removeBodyHandler = function(t) {
            var o = e.axisList.indexOf(t.body)
            ;-1 !== o && e.axisList.splice(o, 1)
          })
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.setWorld = function(e) {
          ;(this.axisList.length = 0),
            r.appendArray(this.axisList, e.bodies),
            e
              .off("addBody", this._addBodyHandler)
              .off("removeBody", this._removeBodyHandler),
            e
              .on("addBody", this._addBodyHandler)
              .on("removeBody", this._removeBodyHandler),
            (this.world = e)
        }),
        (i.sortAxisList = function(e, t) {
          t |= 0
          for (var o = 1, r = e.length; o < r; o++) {
            for (
              var s = e[o], i = o - 1;
              i >= 0 &&
              !(e[i].aabb.lowerBound[t] <= s.aabb.lowerBound[t]);
              i--
            )
              e[i + 1] = e[i]
            e[i + 1] = s
          }
          return e
        }),
        (i.prototype.sortList = function() {
          var e = this.axisList,
            t = this.axisIndex
          i.sortAxisList(e, t)
        }),
        (i.prototype.getCollisionPairs = function(e) {
          var t = this.axisList,
            o = this.result,
            r = this.axisIndex
          o.length = 0
          for (var i = t.length; i--; ) {
            var n = t[i]
            n.aabbNeedsUpdate && n.updateAABB()
          }
          this.sortList()
          for (var a = 0, c = 0 | t.length; a !== c; a++)
            for (var l = t[a], u = a + 1; u < c; u++) {
              var d = t[u]
              if (!(d.aabb.lowerBound[r] <= l.aabb.upperBound[r]))
                break
              s.canCollide(l, d) &&
                this.boundingVolumeCheck(l, d) &&
                o.push(l, d)
            }
          return o
        }),
        (i.prototype.aabbQuery = function(e, t, o) {
          ;(o = o || []), this.sortList()
          var r = this.axisIndex,
            s = "x"
          1 === r && (s = "y"), 2 === r && (s = "z")
          for (
            var i = this.axisList,
              n = (t.lowerBound[s], t.upperBound[s], 0);
            n < i.length;
            n++
          ) {
            var a = i[n]
            a.aabbNeedsUpdate && a.updateAABB(),
              a.aabb.overlaps(t) && o.push(a)
          }
          return o
        })
    },
    "./node_modules/p2/src/constraints/Constraint.js": function(
      e,
      t,
      o,
    ) {
      e.exports = s
      var r = o("./node_modules/p2/src/utils/Utils.js")
      function s(e, t, o, s) {
        ;(this.type = o),
          (s = r.defaults(s, {
            collideConnected: !0,
            wakeUpBodies: !0,
          })),
          (this.equations = []),
          (this.bodyA = e),
          (this.bodyB = t),
          (this.collideConnected = s.collideConnected),
          s.wakeUpBodies && (e && e.wakeUp(), t && t.wakeUp())
      }
      ;(s.prototype.update = function() {
        throw new Error(
          "method update() not implmemented in this Constraint subclass!",
        )
      }),
        (s.DISTANCE = 1),
        (s.GEAR = 2),
        (s.LOCK = 3),
        (s.PRISMATIC = 4),
        (s.REVOLUTE = 5),
        (s.prototype.setStiffness = function(e) {
          for (var t = this.equations, o = 0; o !== t.length; o++) {
            var r = t[o]
            ;(r.stiffness = e), (r.needsUpdate = !0)
          }
        }),
        (s.prototype.setRelaxation = function(e) {
          for (var t = this.equations, o = 0; o !== t.length; o++) {
            var r = t[o]
            ;(r.relaxation = e), (r.needsUpdate = !0)
          }
        })
    },
    "./node_modules/p2/src/constraints/DistanceConstraint.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/equations/Equation.js"),
        i = o("./node_modules/p2/src/math/vec2.js"),
        n = o("./node_modules/p2/src/utils/Utils.js")
      function a(e, t, o) {
        ;(o = n.defaults(o, {
          localAnchorA: [0, 0],
          localAnchorB: [0, 0],
        })),
          r.call(this, e, t, r.DISTANCE, o),
          (this.localAnchorA = i.fromValues(
            o.localAnchorA[0],
            o.localAnchorA[1],
          )),
          (this.localAnchorB = i.fromValues(
            o.localAnchorB[0],
            o.localAnchorB[1],
          ))
        var a,
          c = this.localAnchorA,
          l = this.localAnchorB
        if (((this.distance = 0), "number" == typeof o.distance))
          this.distance = o.distance
        else {
          var u = i.create(),
            d = i.create(),
            p = i.create()
          i.rotate(u, c, e.angle),
            i.rotate(d, l, t.angle),
            i.add(p, t.position, d),
            i.sub(p, p, u),
            i.sub(p, p, e.position),
            (this.distance = i.length(p))
        }
        a = void 0 === o.maxForce ? Number.MAX_VALUE : o.maxForce
        var h = new s(e, t, -a, a)
        ;(this.equations = [h]), (this.maxForce = a)
        p = i.create()
        var f = i.create(),
          m = i.create(),
          y = this
        ;(h.computeGq = function() {
          var e = this.bodyA,
            t = this.bodyB,
            o = e.position,
            r = t.position
          return (
            i.rotate(f, c, e.angle),
            i.rotate(m, l, t.angle),
            i.add(p, r, m),
            i.sub(p, p, f),
            i.sub(p, p, o),
            i.length(p) - y.distance
          )
        }),
          this.setMaxForce(a),
          (this.upperLimitEnabled = !1),
          (this.upperLimit = 1),
          (this.lowerLimitEnabled = !1),
          (this.lowerLimit = 0),
          (this.position = 0)
      }
      ;(e.exports = a),
        (a.prototype = new r()),
        (a.prototype.constructor = a)
      var c = i.create(),
        l = i.create(),
        u = i.create()
      ;(a.prototype.update = function() {
        var e = this.equations[0],
          t = this.bodyA,
          o = this.bodyB,
          r = (this.distance, t.position),
          s = o.position,
          n = this.equations[0],
          a = e.G
        i.rotate(l, this.localAnchorA, t.angle),
          i.rotate(u, this.localAnchorB, o.angle),
          i.add(c, s, u),
          i.sub(c, c, l),
          i.sub(c, c, r),
          (this.position = i.length(c))
        var d = !1
        if (
          (this.upperLimitEnabled &&
            this.position > this.upperLimit &&
            ((n.maxForce = 0),
            (n.minForce = -this.maxForce),
            (this.distance = this.upperLimit),
            (d = !0)),
          this.lowerLimitEnabled &&
            this.position < this.lowerLimit &&
            ((n.maxForce = this.maxForce),
            (n.minForce = 0),
            (this.distance = this.lowerLimit),
            (d = !0)),
          (!this.lowerLimitEnabled && !this.upperLimitEnabled) || d)
        ) {
          ;(n.enabled = !0), i.normalize(c, c)
          var p = i.crossLength(l, c),
            h = i.crossLength(u, c)
          ;(a[0] = -c[0]),
            (a[1] = -c[1]),
            (a[2] = -p),
            (a[3] = c[0]),
            (a[4] = c[1]),
            (a[5] = h)
        } else n.enabled = !1
      }),
        (a.prototype.setMaxForce = function(e) {
          var t = this.equations[0]
          ;(t.minForce = -e), (t.maxForce = e)
        }),
        (a.prototype.getMaxForce = function() {
          return this.equations[0].maxForce
        })
    },
    "./node_modules/p2/src/constraints/GearConstraint.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = (o("./node_modules/p2/src/equations/Equation.js"),
        o("./node_modules/p2/src/equations/AngleLockEquation.js"))
      o("./node_modules/p2/src/math/vec2.js")
      function i(e, t, o) {
        ;(o = o || {}),
          r.call(this, e, t, r.GEAR, o),
          (this.ratio = void 0 !== o.ratio ? o.ratio : 1),
          (this.angle =
            void 0 !== o.angle
              ? o.angle
              : t.angle - this.ratio * e.angle),
          (o.angle = this.angle),
          (o.ratio = this.ratio),
          (this.equations = [new s(e, t, o)]),
          void 0 !== o.maxTorque && this.setMaxTorque(o.maxTorque)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.update = function() {
          var e = this.equations[0]
          e.ratio !== this.ratio && e.setRatio(this.ratio),
            (e.angle = this.angle)
        }),
        (i.prototype.setMaxTorque = function(e) {
          this.equations[0].setMaxTorque(e)
        }),
        (i.prototype.getMaxTorque = function(e) {
          return this.equations[0].maxForce
        })
    },
    "./node_modules/p2/src/constraints/LockConstraint.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/math/vec2.js"),
        i = o("./node_modules/p2/src/equations/Equation.js")
      function n(e, t, o) {
        ;(o = o || {}), r.call(this, e, t, r.LOCK, o)
        var n = void 0 === o.maxForce ? Number.MAX_VALUE : o.maxForce,
          a = (o.localAngleB, new i(e, t, -n, n)),
          c = new i(e, t, -n, n),
          l = new i(e, t, -n, n),
          u = s.create(),
          d = s.create(),
          p = this
        ;(a.computeGq = function() {
          return (
            s.rotate(u, p.localOffsetB, e.angle),
            s.sub(d, t.position, e.position),
            s.sub(d, d, u),
            d[0]
          )
        }),
          (c.computeGq = function() {
            return (
              s.rotate(u, p.localOffsetB, e.angle),
              s.sub(d, t.position, e.position),
              s.sub(d, d, u),
              d[1]
            )
          })
        var h = s.create(),
          f = s.create()
        ;(l.computeGq = function() {
          return (
            s.rotate(h, p.localOffsetB, t.angle - p.localAngleB),
            s.scale(h, h, -1),
            s.sub(d, e.position, t.position),
            s.add(d, d, h),
            s.rotate(f, h, -Math.PI / 2),
            s.normalize(f, f),
            s.dot(d, f)
          )
        }),
          (this.localOffsetB = s.create()),
          o.localOffsetB
            ? s.copy(this.localOffsetB, o.localOffsetB)
            : (s.sub(this.localOffsetB, t.position, e.position),
              s.rotate(
                this.localOffsetB,
                this.localOffsetB,
                -e.angle,
              )),
          (this.localAngleB = 0),
          "number" == typeof o.localAngleB
            ? (this.localAngleB = o.localAngleB)
            : (this.localAngleB = t.angle - e.angle),
          this.equations.push(a, c, l),
          this.setMaxForce(n)
      }
      ;(e.exports = n),
        (n.prototype = new r()),
        (n.prototype.constructor = n),
        (n.prototype.setMaxForce = function(e) {
          for (
            var t = this.equations, o = 0;
            o < this.equations.length;
            o++
          )
            (t[o].maxForce = e), (t[o].minForce = -e)
        }),
        (n.prototype.getMaxForce = function() {
          return this.equations[0].maxForce
        })
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.fromValues(1, 0),
        d = s.fromValues(0, 1)
      n.prototype.update = function() {
        var e = this.equations[0],
          t = this.equations[1],
          o = this.equations[2],
          r = this.bodyA,
          i = this.bodyB
        s.rotate(a, this.localOffsetB, r.angle),
          s.rotate(c, this.localOffsetB, i.angle - this.localAngleB),
          s.scale(c, c, -1),
          s.rotate(l, c, Math.PI / 2),
          s.normalize(l, l),
          (e.G[0] = -1),
          (e.G[1] = 0),
          (e.G[2] = -s.crossLength(a, u)),
          (e.G[3] = 1),
          (t.G[0] = 0),
          (t.G[1] = -1),
          (t.G[2] = -s.crossLength(a, d)),
          (t.G[4] = 1),
          (o.G[0] = -l[0]),
          (o.G[1] = -l[1]),
          (o.G[3] = l[0]),
          (o.G[4] = l[1]),
          (o.G[5] = s.crossLength(c, l))
      }
    },
    "./node_modules/p2/src/constraints/PrismaticConstraint.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/equations/ContactEquation.js"),
        i = o("./node_modules/p2/src/equations/Equation.js"),
        n = o("./node_modules/p2/src/math/vec2.js"),
        a = o(
          "./node_modules/p2/src/equations/RotationalLockEquation.js",
        )
      function c(e, t, o) {
        ;(o = o || {}), r.call(this, e, t, r.PRISMATIC, o)
        var c = n.fromValues(0, 0),
          l = n.fromValues(1, 0),
          u = n.fromValues(0, 0)
        o.localAnchorA && n.copy(c, o.localAnchorA),
          o.localAxisA && n.copy(l, o.localAxisA),
          o.localAnchorB && n.copy(u, o.localAnchorB),
          (this.localAnchorA = c),
          (this.localAnchorB = u),
          (this.localAxisA = l)
        var d = (this.maxForce =
            void 0 !== o.maxForce ? o.maxForce : Number.MAX_VALUE),
          p = new i(e, t, -d, d),
          h = new n.create(),
          f = new n.create(),
          m = new n.create(),
          y = new n.create()
        if (
          ((p.computeGq = function() {
            return n.dot(m, y)
          }),
          (p.updateJacobian = function() {
            var o = this.G,
              r = e.position,
              s = t.position
            n.rotate(h, c, e.angle),
              n.rotate(f, u, t.angle),
              n.add(m, s, f),
              n.sub(m, m, r),
              n.sub(m, m, h),
              n.rotate(y, l, e.angle + Math.PI / 2),
              (o[0] = -y[0]),
              (o[1] = -y[1]),
              (o[2] = -n.crossLength(h, y) + n.crossLength(y, m)),
              (o[3] = y[0]),
              (o[4] = y[1]),
              (o[5] = n.crossLength(f, y))
          }),
          this.equations.push(p),
          !o.disableRotationalLock)
        ) {
          var v = new a(e, t, -d, d)
          this.equations.push(v)
        }
        ;(this.position = 0),
          (this.velocity = 0),
          (this.lowerLimitEnabled = void 0 !== o.lowerLimit),
          (this.upperLimitEnabled = void 0 !== o.upperLimit),
          (this.lowerLimit =
            void 0 !== o.lowerLimit ? o.lowerLimit : 0),
          (this.upperLimit =
            void 0 !== o.upperLimit ? o.upperLimit : 1),
          (this.upperLimitEquation = new s(e, t)),
          (this.lowerLimitEquation = new s(e, t)),
          (this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0),
          (this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = d),
          (this.motorEquation = new i(e, t)),
          (this.motorEnabled = !1),
          (this.motorSpeed = 0)
        var b = this,
          j = this.motorEquation
        j.computeGW
        ;(j.computeGq = function() {
          return 0
        }),
          (j.computeGW = function() {
            var e = this.G,
              t = this.bodyA,
              o = this.bodyB,
              r = t.velocity,
              s = o.velocity,
              i = t.angularVelocity,
              n = o.angularVelocity
            return this.gmult(e, r, i, s, n) + b.motorSpeed
          })
      }
      ;(e.exports = c),
        (c.prototype = new r()),
        (c.prototype.constructor = c)
      var l = n.create(),
        u = n.create(),
        d = n.create(),
        p = n.create(),
        h = n.create(),
        f = n.create()
      ;(c.prototype.update = function() {
        var e = this.equations,
          t = e[0],
          o = this.upperLimit,
          r = this.lowerLimit,
          s = this.upperLimitEquation,
          i = this.lowerLimitEquation,
          a = this.bodyA,
          c = this.bodyB,
          m = this.localAxisA,
          y = this.localAnchorA,
          v = this.localAnchorB
        t.updateJacobian(),
          n.rotate(l, m, a.angle),
          n.rotate(p, y, a.angle),
          n.add(u, p, a.position),
          n.rotate(h, v, c.angle),
          n.add(d, h, c.position)
        var b,
          j = (this.position = n.dot(d, l) - n.dot(u, l))
        if (this.motorEnabled) {
          var _ = this.motorEquation.G
          ;(_[0] = l[0]),
            (_[1] = l[1]),
            (_[2] = n.crossLength(l, h)),
            (_[3] = -l[0]),
            (_[4] = -l[1]),
            (_[5] = -n.crossLength(l, p))
        }
        this.upperLimitEnabled && j > o
          ? (n.scale(s.normalA, l, -1),
            n.sub(s.contactPointA, u, a.position),
            n.sub(s.contactPointB, d, c.position),
            n.scale(f, l, o),
            n.add(s.contactPointA, s.contactPointA, f),
            -1 === e.indexOf(s) && e.push(s))
          : -1 !== (b = e.indexOf(s)) && e.splice(b, 1)
        this.lowerLimitEnabled && j < r
          ? (n.scale(i.normalA, l, 1),
            n.sub(i.contactPointA, u, a.position),
            n.sub(i.contactPointB, d, c.position),
            n.scale(f, l, r),
            n.sub(i.contactPointB, i.contactPointB, f),
            -1 === e.indexOf(i) && e.push(i))
          : -1 !== (b = e.indexOf(i)) && e.splice(b, 1)
      }),
        (c.prototype.enableMotor = function() {
          this.motorEnabled ||
            (this.equations.push(this.motorEquation),
            (this.motorEnabled = !0))
        }),
        (c.prototype.disableMotor = function() {
          if (this.motorEnabled) {
            var e = this.equations.indexOf(this.motorEquation)
            this.equations.splice(e, 1), (this.motorEnabled = !1)
          }
        }),
        (c.prototype.setLimits = function(e, t) {
          "number" == typeof e
            ? ((this.lowerLimit = e), (this.lowerLimitEnabled = !0))
            : ((this.lowerLimit = e), (this.lowerLimitEnabled = !1)),
            "number" == typeof t
              ? ((this.upperLimit = t), (this.upperLimitEnabled = !0))
              : ((this.upperLimit = t), (this.upperLimitEnabled = !1))
        })
    },
    "./node_modules/p2/src/constraints/RevoluteConstraint.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/equations/Equation.js"),
        i = o(
          "./node_modules/p2/src/equations/RotationalVelocityEquation.js",
        ),
        n = o(
          "./node_modules/p2/src/equations/RotationalLockEquation.js",
        ),
        a = o("./node_modules/p2/src/math/vec2.js")
      e.exports = h
      var c = a.create(),
        l = a.create(),
        u = a.fromValues(1, 0),
        d = a.fromValues(0, 1),
        p = a.create()
      function h(e, t, o) {
        ;(o = o || {}), r.call(this, e, t, r.REVOLUTE, o)
        var h = (this.maxForce =
          void 0 !== o.maxForce ? o.maxForce : Number.MAX_VALUE)
        ;(this.pivotA = a.create()),
          (this.pivotB = a.create()),
          o.worldPivot
            ? (a.sub(this.pivotA, o.worldPivot, e.position),
              a.sub(this.pivotB, o.worldPivot, t.position),
              a.rotate(this.pivotA, this.pivotA, -e.angle),
              a.rotate(this.pivotB, this.pivotB, -t.angle))
            : (a.copy(this.pivotA, o.localPivotA),
              a.copy(this.pivotB, o.localPivotB))
        var f = (this.equations = [
            new s(e, t, -h, h),
            new s(e, t, -h, h),
          ]),
          m = f[0],
          y = f[1],
          v = this
        ;(m.computeGq = function() {
          return (
            a.rotate(c, v.pivotA, e.angle),
            a.rotate(l, v.pivotB, t.angle),
            a.add(p, t.position, l),
            a.sub(p, p, e.position),
            a.sub(p, p, c),
            a.dot(p, u)
          )
        }),
          (y.computeGq = function() {
            return (
              a.rotate(c, v.pivotA, e.angle),
              a.rotate(l, v.pivotB, t.angle),
              a.add(p, t.position, l),
              a.sub(p, p, e.position),
              a.sub(p, p, c),
              a.dot(p, d)
            )
          }),
          (y.minForce = m.minForce = -h),
          (y.maxForce = m.maxForce = h),
          (this.motorEquation = new i(e, t)),
          (this.motorEnabled = !1),
          (this.angle = 0),
          (this.lowerLimitEnabled = !1),
          (this.upperLimitEnabled = !1),
          (this.lowerLimit = 0),
          (this.upperLimit = 0),
          (this.upperLimitEquation = new n(e, t)),
          (this.lowerLimitEquation = new n(e, t)),
          (this.upperLimitEquation.minForce = 0),
          (this.lowerLimitEquation.maxForce = 0)
      }
      ;(h.prototype = new r()),
        (h.prototype.constructor = h),
        (h.prototype.setLimits = function(e, t) {
          "number" == typeof e
            ? ((this.lowerLimit = e), (this.lowerLimitEnabled = !0))
            : ((this.lowerLimit = e), (this.lowerLimitEnabled = !1)),
            "number" == typeof t
              ? ((this.upperLimit = t), (this.upperLimitEnabled = !0))
              : ((this.upperLimit = t), (this.upperLimitEnabled = !1))
        }),
        (h.prototype.update = function() {
          var e,
            t = this.bodyA,
            o = this.bodyB,
            r = this.pivotA,
            s = this.pivotB,
            i = this.equations,
            n = (i[0], i[1], i[0]),
            p = i[1],
            h = this.upperLimit,
            f = this.lowerLimit,
            m = this.upperLimitEquation,
            y = this.lowerLimitEquation,
            v = (this.angle = o.angle - t.angle)
          this.upperLimitEnabled && v > h
            ? ((m.angle = h), -1 === i.indexOf(m) && i.push(m))
            : -1 !== (e = i.indexOf(m)) && i.splice(e, 1)
          this.lowerLimitEnabled && v < f
            ? ((y.angle = f), -1 === i.indexOf(y) && i.push(y))
            : -1 !== (e = i.indexOf(y)) && i.splice(e, 1)
          a.rotate(c, r, t.angle),
            a.rotate(l, s, o.angle),
            (n.G[0] = -1),
            (n.G[1] = 0),
            (n.G[2] = -a.crossLength(c, u)),
            (n.G[3] = 1),
            (n.G[4] = 0),
            (n.G[5] = a.crossLength(l, u)),
            (p.G[0] = 0),
            (p.G[1] = -1),
            (p.G[2] = -a.crossLength(c, d)),
            (p.G[3] = 0),
            (p.G[4] = 1),
            (p.G[5] = a.crossLength(l, d))
        }),
        (h.prototype.enableMotor = function() {
          this.motorEnabled ||
            (this.equations.push(this.motorEquation),
            (this.motorEnabled = !0))
        }),
        (h.prototype.disableMotor = function() {
          if (this.motorEnabled) {
            var e = this.equations.indexOf(this.motorEquation)
            this.equations.splice(e, 1), (this.motorEnabled = !1)
          }
        }),
        (h.prototype.motorIsEnabled = function() {
          return !!this.motorEnabled
        }),
        (h.prototype.setMotorSpeed = function(e) {
          if (this.motorEnabled) {
            var t = this.equations.indexOf(this.motorEquation)
            this.equations[t].relativeVelocity = e
          }
        }),
        (h.prototype.getMotorSpeed = function() {
          return (
            !!this.motorEnabled && this.motorEquation.relativeVelocity
          )
        })
    },
    "./node_modules/p2/src/equations/AngleLockEquation.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js")
      o("./node_modules/p2/src/math/vec2.js")
      function s(e, t, o) {
        ;(o = o || {}),
          r.call(this, e, t, -Number.MAX_VALUE, Number.MAX_VALUE),
          (this.angle = o.angle || 0),
          (this.ratio = "number" == typeof o.ratio ? o.ratio : 1),
          this.setRatio(this.ratio)
      }
      ;(e.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.computeGq = function() {
          return (
            this.ratio * this.bodyA.angle -
            this.bodyB.angle +
            this.angle
          )
        }),
        (s.prototype.setRatio = function(e) {
          var t = this.G
          ;(t[2] = e), (t[5] = -1), (this.ratio = e)
        }),
        (s.prototype.setMaxTorque = function(e) {
          ;(this.maxForce = e), (this.minForce = -e)
        })
    },
    "./node_modules/p2/src/equations/ContactEquation.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(e, t) {
        r.call(this, e, t, 0, Number.MAX_VALUE),
          (this.contactPointA = s.create()),
          (this.penetrationVec = s.create()),
          (this.contactPointB = s.create()),
          (this.normalA = s.create()),
          (this.restitution = 0),
          (this.firstImpact = !1),
          (this.shapeA = null),
          (this.shapeB = null)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeB = function(e, t, o) {
          var r,
            i,
            n = this.bodyA,
            a = this.bodyB,
            c = this.contactPointA,
            l = this.contactPointB,
            u = n.position,
            d = a.position,
            p = this.penetrationVec,
            h = this.normalA,
            f = this.G,
            m = s.crossLength(c, h),
            y = s.crossLength(l, h)
          return (
            (f[0] = -h[0]),
            (f[1] = -h[1]),
            (f[2] = -m),
            (f[3] = h[0]),
            (f[4] = h[1]),
            (f[5] = y),
            s.add(p, d, l),
            s.sub(p, p, u),
            s.sub(p, p, c),
            this.firstImpact && 0 !== this.restitution
              ? ((i = 0),
                (r =
                  1 / t * (1 + this.restitution) * this.computeGW()))
              : ((i = s.dot(h, p) + this.offset),
                (r = this.computeGW())),
            -i * e - r * t - o * this.computeGiMf()
          )
        })
      var n = s.create(),
        a = s.create(),
        c = s.create()
      i.prototype.getVelocityAlongNormal = function() {
        return (
          this.bodyA.getVelocityAtPoint(n, this.contactPointA),
          this.bodyB.getVelocityAtPoint(a, this.contactPointB),
          s.subtract(c, n, a),
          s.dot(this.normalA, c)
        )
      }
    },
    "./node_modules/p2/src/equations/Equation.js": function(e, t, o) {
      e.exports = i
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/utils/Utils.js")
      o("./node_modules/p2/src/objects/Body.js")
      function i(e, t, o, r) {
        ;(this.minForce = void 0 === o ? -Number.MAX_VALUE : o),
          (this.maxForce = void 0 === r ? Number.MAX_VALUE : r),
          (this.bodyA = e),
          (this.bodyB = t),
          (this.stiffness = i.DEFAULT_STIFFNESS),
          (this.relaxation = i.DEFAULT_RELAXATION),
          (this.G = new s.ARRAY_TYPE(6))
        for (var n = 0; n < 6; n++) this.G[n] = 0
        ;(this.offset = 0),
          (this.a = 0),
          (this.b = 0),
          (this.epsilon = 0),
          (this.timeStep = 1 / 60),
          (this.needsUpdate = !0),
          (this.multiplier = 0),
          (this.relativeVelocity = 0),
          (this.enabled = !0)
      }
      ;(i.prototype.constructor = i),
        (i.DEFAULT_STIFFNESS = 1e6),
        (i.DEFAULT_RELAXATION = 4),
        (i.prototype.update = function() {
          var e = this.stiffness,
            t = this.relaxation,
            o = this.timeStep
          ;(this.a = 4 / (o * (1 + 4 * t))),
            (this.b = 4 * t / (1 + 4 * t)),
            (this.epsilon = 4 / (o * o * e * (1 + 4 * t))),
            (this.needsUpdate = !1)
        }),
        (i.prototype.gmult = function(e, t, o, r, s) {
          return (
            e[0] * t[0] +
            e[1] * t[1] +
            e[2] * o +
            e[3] * r[0] +
            e[4] * r[1] +
            e[5] * s
          )
        }),
        (i.prototype.computeB = function(e, t, o) {
          var r = this.computeGW()
          return (
            -this.computeGq() * e - r * t - this.computeGiMf() * o
          )
        })
      var n = r.create(),
        a = r.create()
      ;(i.prototype.computeGq = function() {
        var e = this.G,
          t = this.bodyA,
          o = this.bodyB,
          r = (t.position, o.position, t.angle),
          s = o.angle
        return this.gmult(e, n, r, a, s) + this.offset
      }),
        (i.prototype.computeGW = function() {
          var e = this.G,
            t = this.bodyA,
            o = this.bodyB,
            r = t.velocity,
            s = o.velocity,
            i = t.angularVelocity,
            n = o.angularVelocity
          return this.gmult(e, r, i, s, n) + this.relativeVelocity
        }),
        (i.prototype.computeGWlambda = function() {
          var e = this.G,
            t = this.bodyA,
            o = this.bodyB,
            r = t.vlambda,
            s = o.vlambda,
            i = t.wlambda,
            n = o.wlambda
          return this.gmult(e, r, i, s, n)
        })
      var c = r.create(),
        l = r.create()
      ;(i.prototype.computeGiMf = function() {
        var e = this.bodyA,
          t = this.bodyB,
          o = e.force,
          s = e.angularForce,
          i = t.force,
          n = t.angularForce,
          a = e.invMassSolve,
          u = t.invMassSolve,
          d = e.invInertiaSolve,
          p = t.invInertiaSolve,
          h = this.G
        return (
          r.scale(c, o, a),
          r.multiply(c, e.massMultiplier, c),
          r.scale(l, i, u),
          r.multiply(l, t.massMultiplier, l),
          this.gmult(h, c, s * d, l, n * p)
        )
      }),
        (i.prototype.computeGiMGt = function() {
          var e = this.bodyA,
            t = this.bodyB,
            o = e.invMassSolve,
            r = t.invMassSolve,
            s = e.invInertiaSolve,
            i = t.invInertiaSolve,
            n = this.G
          return (
            n[0] * n[0] * o * e.massMultiplier[0] +
            n[1] * n[1] * o * e.massMultiplier[1] +
            n[2] * n[2] * s +
            n[3] * n[3] * r * t.massMultiplier[0] +
            n[4] * n[4] * r * t.massMultiplier[1] +
            n[5] * n[5] * i
          )
        })
      var u = r.create(),
        d = r.create(),
        p = r.create()
      r.create(), r.create(), r.create()
      ;(i.prototype.addToWlambda = function(e) {
        var t = this.bodyA,
          o = this.bodyB,
          s = u,
          i = d,
          n = p,
          a = t.invMassSolve,
          c = o.invMassSolve,
          l = t.invInertiaSolve,
          h = o.invInertiaSolve,
          f = this.G
        ;(i[0] = f[0]),
          (i[1] = f[1]),
          (n[0] = f[3]),
          (n[1] = f[4]),
          r.scale(s, i, a * e),
          r.multiply(s, s, t.massMultiplier),
          r.add(t.vlambda, t.vlambda, s),
          (t.wlambda += l * f[2] * e),
          r.scale(s, n, c * e),
          r.multiply(s, s, o.massMultiplier),
          r.add(o.vlambda, o.vlambda, s),
          (o.wlambda += h * f[5] * e)
      }),
        (i.prototype.computeInvC = function(e) {
          return 1 / (this.computeGiMGt() + e)
        })
    },
    "./node_modules/p2/src/equations/FrictionEquation.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/equations/Equation.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(e, t, o) {
        s.call(this, e, t, -o, o),
          (this.contactPointA = r.create()),
          (this.contactPointB = r.create()),
          (this.t = r.create()),
          (this.contactEquations = []),
          (this.shapeA = null),
          (this.shapeB = null),
          (this.frictionCoefficient = 0.3)
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.setSlipForce = function(e) {
          ;(this.maxForce = e), (this.minForce = -e)
        }),
        (i.prototype.getSlipForce = function() {
          return this.maxForce
        }),
        (i.prototype.computeB = function(e, t, o) {
          this.bodyA, this.bodyB
          var s = this.contactPointA,
            i = this.contactPointB,
            n = this.t,
            a = this.G
          return (
            (a[0] = -n[0]),
            (a[1] = -n[1]),
            (a[2] = -r.crossLength(s, n)),
            (a[3] = n[0]),
            (a[4] = n[1]),
            (a[5] = r.crossLength(i, n)),
            -this.computeGW() * t - o * this.computeGiMf()
          )
        })
    },
    "./node_modules/p2/src/equations/RotationalLockEquation.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(e, t, o) {
        ;(o = o || {}),
          r.call(this, e, t, -Number.MAX_VALUE, Number.MAX_VALUE),
          (this.angle = o.angle || 0)
        var s = this.G
        ;(s[2] = 1), (s[5] = -1)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i)
      var n = s.create(),
        a = s.create(),
        c = s.fromValues(1, 0),
        l = s.fromValues(0, 1)
      i.prototype.computeGq = function() {
        return (
          s.rotate(n, c, this.bodyA.angle + this.angle),
          s.rotate(a, l, this.bodyB.angle),
          s.dot(n, a)
        )
      }
    },
    "./node_modules/p2/src/equations/RotationalVelocityEquation.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js")
      o("./node_modules/p2/src/math/vec2.js")
      function s(e, t) {
        r.call(this, e, t, -Number.MAX_VALUE, Number.MAX_VALUE),
          (this.relativeVelocity = 1),
          (this.ratio = 1)
      }
      ;(e.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.computeB = function(e, t, o) {
          var r = this.G
          ;(r[2] = -1), (r[5] = this.ratio)
          var s = this.computeGiMf()
          return -this.computeGW() * t - o * s
        })
    },
    "./node_modules/p2/src/events/EventEmitter.js": function(e, t) {
      var o = function() {}
      ;(e.exports = o),
        (o.prototype = {
          constructor: o,
          on: function(e, t, o) {
            ;(t.context = o || this),
              void 0 === this._listeners && (this._listeners = {})
            var r = this._listeners
            return (
              void 0 === r[e] && (r[e] = []),
              -1 === r[e].indexOf(t) && r[e].push(t),
              this
            )
          },
          has: function(e, t) {
            if (void 0 === this._listeners) return !1
            var o = this._listeners
            if (t) {
              if (void 0 !== o[e] && -1 !== o[e].indexOf(t)) return !0
            } else if (void 0 !== o[e]) return !0
            return !1
          },
          off: function(e, t) {
            if (void 0 === this._listeners) return this
            var o = this._listeners,
              r = o[e].indexOf(t)
            return -1 !== r && o[e].splice(r, 1), this
          },
          emit: function(e) {
            if (void 0 === this._listeners) return this
            var t = this._listeners[e.type]
            if (void 0 !== t) {
              e.target = this
              for (var o = 0, r = t.length; o < r; o++) {
                var s = t[o]
                s.call(s.context, e)
              }
            }
            return this
          },
        })
    },
    "./node_modules/p2/src/material/ContactMaterial.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/material/Material.js"),
        s = o("./node_modules/p2/src/equations/Equation.js")
      function i(e, t, o) {
        if (((o = o || {}), !(e instanceof r && t instanceof r)))
          throw new Error(
            "First two arguments must be Material instances.",
          )
        ;(this.id = i.idCounter++),
          (this.materialA = e),
          (this.materialB = t),
          (this.friction =
            void 0 !== o.friction ? Number(o.friction) : 0.3),
          (this.restitution =
            void 0 !== o.restitution ? Number(o.restitution) : 0),
          (this.stiffness =
            void 0 !== o.stiffness
              ? Number(o.stiffness)
              : s.DEFAULT_STIFFNESS),
          (this.relaxation =
            void 0 !== o.relaxation
              ? Number(o.relaxation)
              : s.DEFAULT_RELAXATION),
          (this.frictionStiffness =
            void 0 !== o.frictionStiffness
              ? Number(o.frictionStiffness)
              : s.DEFAULT_STIFFNESS),
          (this.frictionRelaxation =
            void 0 !== o.frictionRelaxation
              ? Number(o.frictionRelaxation)
              : s.DEFAULT_RELAXATION),
          (this.surfaceVelocity =
            void 0 !== o.surfaceVelocity
              ? Number(o.surfaceVelocity)
              : 0),
          (this.contactSkinSize = 0.005)
      }
      ;(e.exports = i), (i.idCounter = 0)
    },
    "./node_modules/p2/src/material/Material.js": function(e, t) {
      function o(e) {
        this.id = e || o.idCounter++
      }
      ;(e.exports = o), (o.idCounter = 0)
    },
    "./node_modules/p2/src/math/polyk.js": function(e, t) {
      var o = {
        GetArea: function(e) {
          if (e.length < 6) return 0
          for (var t = e.length - 2, o = 0, r = 0; r < t; r += 2)
            o += (e[r + 2] - e[r]) * (e[r + 1] + e[r + 3])
          return 0.5 * -(o += (e[0] - e[t]) * (e[t + 1] + e[1]))
        },
        Triangulate: function(e) {
          var t = e.length >> 1
          if (t < 3) return []
          for (var r = [], s = [], i = 0; i < t; i++) s.push(i)
          i = 0
          for (var n = t; n > 3; ) {
            var a = s[(i + 0) % n],
              c = s[(i + 1) % n],
              l = s[(i + 2) % n],
              u = e[2 * a],
              d = e[2 * a + 1],
              p = e[2 * c],
              h = e[2 * c + 1],
              f = e[2 * l],
              m = e[2 * l + 1],
              y = !1
            if (o._convex(u, d, p, h, f, m)) {
              y = !0
              for (var v = 0; v < n; v++) {
                var b = s[v]
                if (
                  b != a &&
                  b != c &&
                  b != l &&
                  o._PointInTriangle(
                    e[2 * b],
                    e[2 * b + 1],
                    u,
                    d,
                    p,
                    h,
                    f,
                    m,
                  )
                ) {
                  y = !1
                  break
                }
              }
            }
            if (y)
              r.push(a, c, l), s.splice((i + 1) % n, 1), n--, (i = 0)
            else if (i++ > 3 * n) break
          }
          return r.push(s[0], s[1], s[2]), r
        },
        _PointInTriangle: function(e, t, o, r, s, i, n, a) {
          var c = n - o,
            l = a - r,
            u = s - o,
            d = i - r,
            p = e - o,
            h = t - r,
            f = c * c + l * l,
            m = c * u + l * d,
            y = c * p + l * h,
            v = u * u + d * d,
            b = u * p + d * h,
            j = 1 / (f * v - m * m),
            _ = (v * y - m * b) * j,
            g = (f * b - m * y) * j
          return _ >= 0 && g >= 0 && _ + g < 1
        },
        _convex: function(e, t, o, r, s, i) {
          return (t - r) * (s - o) + (o - e) * (i - r) >= 0
        },
      }
      e.exports = o
    },
    "./node_modules/p2/src/math/vec2.js": function(e, t, o) {
      var r = (e.exports = {}),
        s = o("./node_modules/p2/src/utils/Utils.js")
      ;(r.crossLength = function(e, t) {
        return e[0] * t[1] - e[1] * t[0]
      }),
        (r.crossVZ = function(e, t, o) {
          return r.rotate(e, t, -Math.PI / 2), r.scale(e, e, o), e
        }),
        (r.crossZV = function(e, t, o) {
          return r.rotate(e, o, Math.PI / 2), r.scale(e, e, t), e
        }),
        (r.rotate = function(e, t, o) {
          if (0 !== o) {
            var r = Math.cos(o),
              s = Math.sin(o),
              i = t[0],
              n = t[1]
            ;(e[0] = r * i - s * n), (e[1] = s * i + r * n)
          } else (e[0] = t[0]), (e[1] = t[1])
        }),
        (r.rotate90cw = function(e, t) {
          var o = t[0],
            r = t[1]
          ;(e[0] = r), (e[1] = -o)
        }),
        (r.toLocalFrame = function(e, t, o, s) {
          r.copy(e, t), r.sub(e, e, o), r.rotate(e, e, -s)
        }),
        (r.toGlobalFrame = function(e, t, o, s) {
          r.copy(e, t), r.rotate(e, e, s), r.add(e, e, o)
        }),
        (r.vectorToLocalFrame = function(e, t, o) {
          r.rotate(e, t, -o)
        }),
        (r.vectorToGlobalFrame = function(e, t, o) {
          r.rotate(e, t, o)
        }),
        (r.centroid = function(e, t, o, s) {
          return (
            r.add(e, t, o), r.add(e, e, s), r.scale(e, e, 1 / 3), e
          )
        }),
        (r.create = function() {
          var e = new s.ARRAY_TYPE(2)
          return (e[0] = 0), (e[1] = 0), e
        }),
        (r.clone = function(e) {
          var t = new s.ARRAY_TYPE(2)
          return (t[0] = e[0]), (t[1] = e[1]), t
        }),
        (r.fromValues = function(e, t) {
          var o = new s.ARRAY_TYPE(2)
          return (o[0] = e), (o[1] = t), o
        }),
        (r.copy = function(e, t) {
          return (e[0] = t[0]), (e[1] = t[1]), e
        }),
        (r.set = function(e, t, o) {
          return (e[0] = t), (e[1] = o), e
        }),
        (r.add = function(e, t, o) {
          return (e[0] = t[0] + o[0]), (e[1] = t[1] + o[1]), e
        }),
        (r.subtract = function(e, t, o) {
          return (e[0] = t[0] - o[0]), (e[1] = t[1] - o[1]), e
        }),
        (r.sub = r.subtract),
        (r.multiply = function(e, t, o) {
          return (e[0] = t[0] * o[0]), (e[1] = t[1] * o[1]), e
        }),
        (r.mul = r.multiply),
        (r.divide = function(e, t, o) {
          return (e[0] = t[0] / o[0]), (e[1] = t[1] / o[1]), e
        }),
        (r.div = r.divide),
        (r.scale = function(e, t, o) {
          return (e[0] = t[0] * o), (e[1] = t[1] * o), e
        }),
        (r.distance = function(e, t) {
          var o = t[0] - e[0],
            r = t[1] - e[1]
          return Math.sqrt(o * o + r * r)
        }),
        (r.dist = r.distance),
        (r.squaredDistance = function(e, t) {
          var o = t[0] - e[0],
            r = t[1] - e[1]
          return o * o + r * r
        }),
        (r.sqrDist = r.squaredDistance),
        (r.length = function(e) {
          var t = e[0],
            o = e[1]
          return Math.sqrt(t * t + o * o)
        }),
        (r.len = r.length),
        (r.squaredLength = function(e) {
          var t = e[0],
            o = e[1]
          return t * t + o * o
        }),
        (r.sqrLen = r.squaredLength),
        (r.negate = function(e, t) {
          return (e[0] = -t[0]), (e[1] = -t[1]), e
        }),
        (r.normalize = function(e, t) {
          var o = t[0],
            r = t[1],
            s = o * o + r * r
          return (
            s > 0 &&
              ((s = 1 / Math.sqrt(s)),
              (e[0] = t[0] * s),
              (e[1] = t[1] * s)),
            e
          )
        }),
        (r.dot = function(e, t) {
          return e[0] * t[0] + e[1] * t[1]
        }),
        (r.str = function(e) {
          return "vec2(" + e[0] + ", " + e[1] + ")"
        }),
        (r.lerp = function(e, t, o, r) {
          var s = t[0],
            i = t[1]
          return (
            (e[0] = s + r * (o[0] - s)),
            (e[1] = i + r * (o[1] - i)),
            e
          )
        }),
        (r.reflect = function(e, t, o) {
          var r = t[0] * o[0] + t[1] * o[1]
          ;(e[0] = t[0] - 2 * o[0] * r), (e[1] = t[1] - 2 * o[1] * r)
        }),
        (r.getLineSegmentsIntersection = function(e, t, o, s, i) {
          var n = r.getLineSegmentsIntersectionFraction(t, o, s, i)
          return (
            !(n < 0) &&
            ((e[0] = t[0] + n * (o[0] - t[0])),
            (e[1] = t[1] + n * (o[1] - t[1])),
            !0)
          )
        }),
        (r.getLineSegmentsIntersectionFraction = function(
          e,
          t,
          o,
          r,
        ) {
          var s,
            i,
            n = t[0] - e[0],
            a = t[1] - e[1],
            c = r[0] - o[0],
            l = r[1] - o[1]
          return (
            (s =
              (-a * (e[0] - o[0]) + n * (e[1] - o[1])) /
              (-c * a + n * l)),
            (i =
              (c * (e[1] - o[1]) - l * (e[0] - o[0])) /
              (-c * a + n * l)),
            s >= 0 && s <= 1 && i >= 0 && i <= 1 ? i : -1
          )
        })
    },
    "./node_modules/p2/src/objects/Body.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/poly-decomp/src/index.js"),
        i = o("./node_modules/p2/src/shapes/Convex.js"),
        n = o("./node_modules/p2/src/collision/RaycastResult.js"),
        a = o("./node_modules/p2/src/collision/Ray.js"),
        c = o("./node_modules/p2/src/collision/AABB.js"),
        l = o("./node_modules/p2/src/events/EventEmitter.js")
      function u(e) {
        ;(e = e || {}),
          l.call(this),
          (this.id = e.id || ++u._idCounter),
          (this.world = null),
          (this.shapes = []),
          (this.mass = e.mass || 0),
          (this.invMass = 0),
          (this.inertia = 0),
          (this.invInertia = 0),
          (this.invMassSolve = 0),
          (this.invInertiaSolve = 0),
          (this.fixedRotation = !!e.fixedRotation),
          (this.fixedX = !!e.fixedX),
          (this.fixedY = !!e.fixedY),
          (this.massMultiplier = r.create()),
          (this.position = r.fromValues(0, 0)),
          e.position && r.copy(this.position, e.position),
          (this.interpolatedPosition = r.fromValues(0, 0)),
          (this.interpolatedAngle = 0),
          (this.previousPosition = r.fromValues(0, 0)),
          (this.previousAngle = 0),
          (this.velocity = r.fromValues(0, 0)),
          e.velocity && r.copy(this.velocity, e.velocity),
          (this.vlambda = r.fromValues(0, 0)),
          (this.wlambda = 0),
          (this.angle = e.angle || 0),
          (this.angularVelocity = e.angularVelocity || 0),
          (this.force = r.create()),
          e.force && r.copy(this.force, e.force),
          (this.angularForce = e.angularForce || 0),
          (this.damping =
            "number" == typeof e.damping ? e.damping : 0.1),
          (this.angularDamping =
            "number" == typeof e.angularDamping
              ? e.angularDamping
              : 0.1),
          (this.type = u.STATIC),
          void 0 !== e.type
            ? (this.type = e.type)
            : e.mass
              ? (this.type = u.DYNAMIC)
              : (this.type = u.STATIC),
          (this.boundingRadius = 0),
          (this.aabb = new c()),
          (this.aabbNeedsUpdate = !0),
          (this.allowSleep = void 0 === e.allowSleep || e.allowSleep),
          (this.wantsToSleep = !1),
          (this.sleepState = u.AWAKE),
          (this.sleepSpeedLimit =
            void 0 !== e.sleepSpeedLimit ? e.sleepSpeedLimit : 0.2),
          (this.sleepTimeLimit =
            void 0 !== e.sleepTimeLimit ? e.sleepTimeLimit : 1),
          (this.gravityScale =
            void 0 !== e.gravityScale ? e.gravityScale : 1),
          (this.collisionResponse =
            void 0 === e.collisionResponse || e.collisionResponse),
          (this.idleTime = 0),
          (this.timeLastSleepy = 0),
          (this.ccdSpeedThreshold =
            void 0 !== e.ccdSpeedThreshold
              ? e.ccdSpeedThreshold
              : -1),
          (this.ccdIterations =
            void 0 !== e.ccdIterations ? e.ccdIterations : 10),
          (this.concavePath = null),
          (this._wakeUpAfterNarrowphase = !1),
          this.updateMassProperties()
      }
      ;(e.exports = u),
        (u.prototype = new l()),
        (u.prototype.constructor = u),
        (u._idCounter = 0),
        (u.prototype.updateSolveMassProperties = function() {
          this.sleepState === u.SLEEPING || this.type === u.KINEMATIC
            ? ((this.invMassSolve = 0), (this.invInertiaSolve = 0))
            : ((this.invMassSolve = this.invMass),
              (this.invInertiaSolve = this.invInertia))
        }),
        (u.prototype.setDensity = function(e) {
          var t = this.getArea()
          ;(this.mass = t * e), this.updateMassProperties()
        }),
        (u.prototype.getArea = function() {
          for (var e = 0, t = 0; t < this.shapes.length; t++)
            e += this.shapes[t].area
          return e
        }),
        (u.prototype.getAABB = function() {
          return this.aabbNeedsUpdate && this.updateAABB(), this.aabb
        })
      var d = new c(),
        p = r.create()
      ;(u.prototype.updateAABB = function() {
        for (
          var e = this.shapes,
            t = e.length,
            o = p,
            s = this.angle,
            i = 0;
          i !== t;
          i++
        ) {
          var n = e[i],
            a = n.angle + s
          r.rotate(o, n.position, s),
            r.add(o, o, this.position),
            n.computeAABB(d, o, a),
            0 === i ? this.aabb.copy(d) : this.aabb.extend(d)
        }
        this.aabbNeedsUpdate = !1
      }),
        (u.prototype.updateBoundingRadius = function() {
          for (
            var e = this.shapes, t = e.length, o = 0, s = 0;
            s !== t;
            s++
          ) {
            var i = e[s],
              n = r.length(i.position),
              a = i.boundingRadius
            n + a > o && (o = n + a)
          }
          this.boundingRadius = o
        }),
        (u.prototype.addShape = function(e, t, o) {
          if (e.body)
            throw new Error("A shape can only be added to one body.")
          ;(e.body = this),
            t ? r.copy(e.position, t) : r.set(e.position, 0, 0),
            (e.angle = o || 0),
            this.shapes.push(e),
            this.updateMassProperties(),
            this.updateBoundingRadius(),
            (this.aabbNeedsUpdate = !0)
        }),
        (u.prototype.removeShape = function(e) {
          var t = this.shapes.indexOf(e)
          return (
            -1 !== t &&
            (this.shapes.splice(t, 1),
            (this.aabbNeedsUpdate = !0),
            (e.body = null),
            !0)
          )
        }),
        (u.prototype.updateMassProperties = function() {
          if (this.type === u.STATIC || this.type === u.KINEMATIC)
            (this.mass = Number.MAX_VALUE),
              (this.invMass = 0),
              (this.inertia = Number.MAX_VALUE),
              (this.invInertia = 0)
          else {
            var e = this.shapes,
              t = e.length,
              o = this.mass / t,
              s = 0
            if (this.fixedRotation)
              (this.inertia = Number.MAX_VALUE), (this.invInertia = 0)
            else {
              for (var i = 0; i < t; i++) {
                var n = e[i],
                  a = r.squaredLength(n.position)
                s += n.computeMomentOfInertia(o) + o * a
              }
              ;(this.inertia = s),
                (this.invInertia = s > 0 ? 1 / s : 0)
            }
            ;(this.invMass = 1 / this.mass),
              r.set(
                this.massMultiplier,
                this.fixedX ? 0 : 1,
                this.fixedY ? 0 : 1,
              )
          }
        })
      r.create()
      u.prototype.applyForce = function(e, t) {
        if ((r.add(this.force, this.force, e), t)) {
          var o = r.crossLength(t, e)
          this.angularForce += o
        }
      }
      var h = r.create(),
        f = r.create(),
        m = r.create()
      u.prototype.applyForceLocal = function(e, t) {
        t = t || m
        var o = h,
          r = f
        this.vectorToWorldFrame(o, e),
          this.vectorToWorldFrame(r, t),
          this.applyForce(o, r)
      }
      var y = r.create()
      u.prototype.applyImpulse = function(e, t) {
        if (this.type === u.DYNAMIC) {
          var o = y
          if (
            (r.scale(o, e, this.invMass),
            r.multiply(o, this.massMultiplier, o),
            r.add(this.velocity, o, this.velocity),
            t)
          ) {
            var s = r.crossLength(t, e)
            ;(s *= this.invInertia), (this.angularVelocity += s)
          }
        }
      }
      var v = r.create(),
        b = r.create(),
        j = r.create()
      ;(u.prototype.applyImpulseLocal = function(e, t) {
        t = t || j
        var o = v,
          r = b
        this.vectorToWorldFrame(o, e),
          this.vectorToWorldFrame(r, t),
          this.applyImpulse(o, r)
      }),
        (u.prototype.toLocalFrame = function(e, t) {
          r.toLocalFrame(e, t, this.position, this.angle)
        }),
        (u.prototype.toWorldFrame = function(e, t) {
          r.toGlobalFrame(e, t, this.position, this.angle)
        }),
        (u.prototype.vectorToLocalFrame = function(e, t) {
          r.vectorToLocalFrame(e, t, this.angle)
        }),
        (u.prototype.vectorToWorldFrame = function(e, t) {
          r.vectorToGlobalFrame(e, t, this.angle)
        }),
        (u.prototype.fromPolygon = function(e, t) {
          t = t || {}
          for (var o = this.shapes.length; o >= 0; --o)
            this.removeShape(this.shapes[o])
          var n,
            a = new s.Polygon()
          if (
            ((a.vertices = e),
            a.makeCCW(),
            "number" == typeof t.removeCollinearPoints &&
              a.removeCollinearPoints(t.removeCollinearPoints),
            void 0 === t.skipSimpleCheck && !a.isSimple())
          )
            return !1
          this.concavePath = a.vertices.slice(0)
          for (o = 0; o < this.concavePath.length; o++) {
            var c = [0, 0]
            r.copy(c, this.concavePath[o]), (this.concavePath[o] = c)
          }
          n = t.optimalDecomp ? a.decomp() : a.quickDecomp()
          var l = r.create()
          for (o = 0; o !== n.length; o++) {
            for (
              var u = new i({ vertices: n[o].vertices }), d = 0;
              d !== u.vertices.length;
              d++
            ) {
              c = u.vertices[d]
              r.sub(c, c, u.centerOfMass)
            }
            r.scale(l, u.centerOfMass, 1),
              u.updateTriangles(),
              u.updateCenterOfMass(),
              u.updateBoundingRadius(),
              this.addShape(u, l)
          }
          return (
            this.adjustCenterOfMass(), (this.aabbNeedsUpdate = !0), !0
          )
        })
      r.fromValues(0, 0)
      var _ = r.fromValues(0, 0),
        g = r.fromValues(0, 0),
        A = r.fromValues(0, 0)
      ;(u.prototype.adjustCenterOfMass = function() {
        var e = _,
          t = g,
          o = A,
          s = 0
        r.set(t, 0, 0)
        for (var i = 0; i !== this.shapes.length; i++) {
          var n = this.shapes[i]
          r.scale(e, n.position, n.area),
            r.add(t, t, e),
            (s += n.area)
        }
        r.scale(o, t, 1 / s)
        for (i = 0; i !== this.shapes.length; i++) {
          n = this.shapes[i]
          r.sub(n.position, n.position, o)
        }
        r.add(this.position, this.position, o)
        for (
          i = 0;
          this.concavePath && i < this.concavePath.length;
          i++
        )
          r.sub(this.concavePath[i], this.concavePath[i], o)
        this.updateMassProperties(), this.updateBoundingRadius()
      }),
        (u.prototype.setZeroForce = function() {
          r.set(this.force, 0, 0), (this.angularForce = 0)
        }),
        (u.prototype.resetConstraintVelocity = function() {
          var e = this.vlambda
          r.set(e, 0, 0), (this.wlambda = 0)
        }),
        (u.prototype.addConstraintVelocity = function() {
          var e = this,
            t = e.velocity
          r.add(t, t, e.vlambda), (e.angularVelocity += e.wlambda)
        }),
        (u.prototype.applyDamping = function(e) {
          if (this.type === u.DYNAMIC) {
            var t = this.velocity
            r.scale(t, t, Math.pow(1 - this.damping, e)),
              (this.angularVelocity *= Math.pow(
                1 - this.angularDamping,
                e,
              ))
          }
        }),
        (u.prototype.wakeUp = function() {
          var e = this.sleepState
          ;(this.sleepState = u.AWAKE),
            (this.idleTime = 0),
            e !== u.AWAKE && this.emit(u.wakeUpEvent)
        }),
        (u.prototype.sleep = function() {
          ;(this.sleepState = u.SLEEPING),
            (this.angularVelocity = 0),
            (this.angularForce = 0),
            r.set(this.velocity, 0, 0),
            r.set(this.force, 0, 0),
            this.emit(u.sleepEvent)
        }),
        (u.prototype.sleepTick = function(e, t, o) {
          if (this.allowSleep && this.type !== u.SLEEPING) {
            this.wantsToSleep = !1
            this.sleepState
            r.squaredLength(this.velocity) +
              Math.pow(this.angularVelocity, 2) >=
            Math.pow(this.sleepSpeedLimit, 2)
              ? ((this.idleTime = 0), (this.sleepState = u.AWAKE))
              : ((this.idleTime += o), (this.sleepState = u.SLEEPY)),
              this.idleTime > this.sleepTimeLimit &&
                (t ? (this.wantsToSleep = !0) : this.sleep())
          }
        }),
        (u.prototype.overlaps = function(e) {
          return this.world.overlapKeeper.bodiesAreOverlapping(
            this,
            e,
          )
        })
      var E = r.create(),
        P = r.create()
      u.prototype.integrate = function(e) {
        var t = this.invMass,
          o = this.force,
          s = this.position,
          i = this.velocity
        r.copy(this.previousPosition, this.position),
          (this.previousAngle = this.angle),
          this.fixedRotation ||
            (this.angularVelocity +=
              this.angularForce * this.invInertia * e),
          r.scale(E, o, e * t),
          r.multiply(E, this.massMultiplier, E),
          r.add(i, E, i),
          this.integrateToTimeOfImpact(e) ||
            (r.scale(P, i, e),
            r.add(s, s, P),
            this.fixedRotation ||
              (this.angle += this.angularVelocity * e)),
          (this.aabbNeedsUpdate = !0)
      }
      var w = new n(),
        S = new a({ mode: a.ALL }),
        B = r.create(),
        x = r.create(),
        L = r.create(),
        q = r.create()
      ;(u.prototype.integrateToTimeOfImpact = function(e) {
        if (
          this.ccdSpeedThreshold < 0 ||
          r.squaredLength(this.velocity) <
            Math.pow(this.ccdSpeedThreshold, 2)
        )
          return !1
        r.normalize(B, this.velocity),
          r.scale(x, this.velocity, e),
          r.add(x, x, this.position),
          r.sub(L, x, this.position)
        var t,
          o = this.angularVelocity * e,
          s = r.length(L),
          i = 1,
          n = this
        if (
          (w.reset(),
          (S.callback = function(e) {
            e.body !== n &&
              ((t = e.body),
              e.getHitPoint(x, S),
              r.sub(L, x, n.position),
              (i = r.length(L) / s),
              e.stop())
          }),
          r.copy(S.from, this.position),
          r.copy(S.to, x),
          S.update(),
          this.world.raycast(w, S),
          !t)
        )
          return !1
        var a = this.angle
        r.copy(q, this.position)
        for (
          var c = 0, l = 0, u = 0, d = i;
          d >= l && c < this.ccdIterations;

        ) {
          c++,
            (u = (d - l) / 2),
            r.scale(P, L, i),
            r.add(this.position, q, P),
            (this.angle = a + o * i),
            this.updateAABB(),
            this.aabb.overlaps(t.aabb) &&
            this.world.narrowphase.bodiesOverlap(this, t)
              ? (l = u)
              : (d = u)
        }
        return (
          (i = u),
          r.copy(this.position, q),
          (this.angle = a),
          r.scale(P, L, i),
          r.add(this.position, this.position, P),
          this.fixedRotation || (this.angle += o * i),
          !0
        )
      }),
        (u.prototype.getVelocityAtPoint = function(e, t) {
          return (
            r.crossVZ(e, t, this.angularVelocity),
            r.subtract(e, this.velocity, e),
            e
          )
        }),
        (u.sleepyEvent = { type: "sleepy" }),
        (u.sleepEvent = { type: "sleep" }),
        (u.wakeUpEvent = { type: "wakeup" }),
        (u.DYNAMIC = 1),
        (u.STATIC = 2),
        (u.KINEMATIC = 4),
        (u.AWAKE = 0),
        (u.SLEEPY = 1),
        (u.SLEEPING = 2)
    },
    "./node_modules/p2/src/objects/LinearSpring.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/objects/Spring.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(e, t, o) {
        ;(o = o || {}),
          s.call(this, e, t, o),
          (this.localAnchorA = r.fromValues(0, 0)),
          (this.localAnchorB = r.fromValues(0, 0)),
          o.localAnchorA && r.copy(this.localAnchorA, o.localAnchorA),
          o.localAnchorB && r.copy(this.localAnchorB, o.localAnchorB),
          o.worldAnchorA && this.setWorldAnchorA(o.worldAnchorA),
          o.worldAnchorB && this.setWorldAnchorB(o.worldAnchorB)
        var i = r.create(),
          n = r.create()
        this.getWorldAnchorA(i), this.getWorldAnchorB(n)
        var a = r.distance(i, n)
        this.restLength =
          "number" == typeof o.restLength ? o.restLength : a
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.setWorldAnchorA = function(e) {
          this.bodyA.toLocalFrame(this.localAnchorA, e)
        }),
        (i.prototype.setWorldAnchorB = function(e) {
          this.bodyB.toLocalFrame(this.localAnchorB, e)
        }),
        (i.prototype.getWorldAnchorA = function(e) {
          this.bodyA.toWorldFrame(e, this.localAnchorA)
        }),
        (i.prototype.getWorldAnchorB = function(e) {
          this.bodyB.toWorldFrame(e, this.localAnchorB)
        })
      var n = r.create(),
        a = r.create(),
        c = r.create(),
        l = r.create(),
        u = r.create(),
        d = r.create(),
        p = r.create(),
        h = r.create(),
        f = r.create()
      i.prototype.applyForce = function() {
        var e = this.stiffness,
          t = this.damping,
          o = this.restLength,
          s = this.bodyA,
          i = this.bodyB,
          m = n,
          y = a,
          v = c,
          b = l,
          j = f,
          _ = u,
          g = d,
          A = p,
          E = h
        this.getWorldAnchorA(_),
          this.getWorldAnchorB(g),
          r.sub(A, _, s.position),
          r.sub(E, g, i.position),
          r.sub(m, g, _)
        var P = r.len(m)
        r.normalize(y, m),
          r.sub(v, i.velocity, s.velocity),
          r.crossZV(j, i.angularVelocity, E),
          r.add(v, v, j),
          r.crossZV(j, s.angularVelocity, A),
          r.sub(v, v, j),
          r.scale(b, y, -e * (P - o) - t * r.dot(v, y)),
          r.sub(s.force, s.force, b),
          r.add(i.force, i.force, b)
        var w = r.crossLength(A, b),
          S = r.crossLength(E, b)
        ;(s.angularForce -= w), (i.angularForce += S)
      }
    },
    "./node_modules/p2/src/objects/RotationalSpring.js": function(
      e,
      t,
      o,
    ) {
      o("./node_modules/p2/src/math/vec2.js")
      var r = o("./node_modules/p2/src/objects/Spring.js")
      function s(e, t, o) {
        ;(o = o || {}),
          r.call(this, e, t, o),
          (this.restAngle =
            "number" == typeof o.restAngle
              ? o.restAngle
              : t.angle - e.angle)
      }
      ;(e.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.applyForce = function() {
          var e = this.stiffness,
            t = this.damping,
            o = this.restAngle,
            r = this.bodyA,
            s = this.bodyB,
            i =
              -e * (s.angle - r.angle - o) -
              t * (s.angularVelocity - r.angularVelocity) * 0
          ;(r.angularForce -= i), (s.angularForce += i)
        })
    },
    "./node_modules/p2/src/objects/Spring.js": function(e, t, o) {
      o("./node_modules/p2/src/math/vec2.js")
      var r = o("./node_modules/p2/src/utils/Utils.js")
      function s(e, t, o) {
        ;(o = r.defaults(o, { stiffness: 100, damping: 1 })),
          (this.stiffness = o.stiffness),
          (this.damping = o.damping),
          (this.bodyA = e),
          (this.bodyB = t)
      }
      ;(e.exports = s), (s.prototype.applyForce = function() {})
    },
    "./node_modules/p2/src/objects/TopDownVehicle.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = (o("./node_modules/p2/src/utils/Utils.js"),
        o("./node_modules/p2/src/constraints/Constraint.js")),
        i = o("./node_modules/p2/src/equations/FrictionEquation.js"),
        n = o("./node_modules/p2/src/objects/Body.js")
      function a(e, t) {
        ;(t = t || {}),
          (this.chassisBody = e),
          (this.wheels = []),
          (this.groundBody = new n({ mass: 0 })),
          (this.world = null)
        var o = this
        this.preStepCallback = function() {
          o.update()
        }
      }
      function c(e, t) {
        ;(t = t || {}),
          (this.vehicle = e),
          (this.forwardEquation = new i(e.chassisBody, e.groundBody)),
          (this.sideEquation = new i(e.chassisBody, e.groundBody)),
          (this.steerValue = 0),
          (this.engineForce = 0),
          this.setSideFriction(
            void 0 !== t.sideFriction ? t.sideFriction : 5,
          ),
          (this.localForwardVector = r.fromValues(0, 1)),
          t.localForwardVector &&
            r.copy(this.localForwardVector, t.localForwardVector),
          (this.localPosition = r.fromValues(0, 0)),
          t.localPosition &&
            r.copy(this.localPosition, t.localPosition),
          s.apply(this, e.chassisBody, e.groundBody),
          this.equations.push(
            this.forwardEquation,
            this.sideEquation,
          ),
          this.setBrakeForce(0)
      }
      ;(e.exports = a),
        (a.prototype.addToWorld = function(e) {
          ;(this.world = e),
            e.addBody(this.groundBody),
            e.on("preStep", this.preStepCallback)
          for (var t = 0; t < this.wheels.length; t++) {
            var o = this.wheels[t]
            e.addConstraint(o)
          }
        }),
        (a.prototype.removeFromWorld = function() {
          var e = this.world
          e.removeBody(this.groundBody),
            e.off("preStep", this.preStepCallback)
          for (var t = 0; t < this.wheels.length; t++) {
            var o = this.wheels[t]
            e.removeConstraint(o)
          }
          this.world = null
        }),
        (a.prototype.addWheel = function(e) {
          var t = new c(this, e)
          return this.wheels.push(t), t
        }),
        (a.prototype.update = function() {
          for (var e = 0; e < this.wheels.length; e++)
            this.wheels[e].update()
        }),
        (c.prototype = new s()),
        (c.prototype.setBrakeForce = function(e) {
          this.forwardEquation.setSlipForce(e)
        }),
        (c.prototype.setSideFriction = function(e) {
          this.sideEquation.setSlipForce(e)
        })
      var l = r.create(),
        u = r.create()
      c.prototype.getSpeed = function() {
        return (
          this.vehicle.chassisBody.vectorToWorldFrame(
            u,
            this.localForwardVector,
          ),
          this.vehicle.chassisBody.getVelocityAtPoint(l, u),
          r.dot(l, u)
        )
      }
      var d = r.create()
      c.prototype.update = function() {
        this.vehicle.chassisBody.vectorToWorldFrame(
          this.forwardEquation.t,
          this.localForwardVector,
        ),
          r.rotate(
            this.sideEquation.t,
            this.localForwardVector,
            Math.PI / 2,
          ),
          this.vehicle.chassisBody.vectorToWorldFrame(
            this.sideEquation.t,
            this.sideEquation.t,
          ),
          r.rotate(
            this.forwardEquation.t,
            this.forwardEquation.t,
            this.steerValue,
          ),
          r.rotate(
            this.sideEquation.t,
            this.sideEquation.t,
            this.steerValue,
          ),
          this.vehicle.chassisBody.toWorldFrame(
            this.forwardEquation.contactPointB,
            this.localPosition,
          ),
          r.copy(
            this.sideEquation.contactPointB,
            this.forwardEquation.contactPointB,
          ),
          this.vehicle.chassisBody.vectorToWorldFrame(
            this.forwardEquation.contactPointA,
            this.localPosition,
          ),
          r.copy(
            this.sideEquation.contactPointA,
            this.forwardEquation.contactPointA,
          ),
          r.normalize(d, this.forwardEquation.t),
          r.scale(d, d, this.engineForce),
          this.vehicle.chassisBody.applyForce(
            d,
            this.forwardEquation.contactPointA,
          )
      }
    },
    "./node_modules/p2/src/p2.js": function(e, t, o) {
      var r = (e.exports = {
        AABB: o("./node_modules/p2/src/collision/AABB.js"),
        AngleLockEquation: o(
          "./node_modules/p2/src/equations/AngleLockEquation.js",
        ),
        Body: o("./node_modules/p2/src/objects/Body.js"),
        Broadphase: o(
          "./node_modules/p2/src/collision/Broadphase.js",
        ),
        Capsule: o("./node_modules/p2/src/shapes/Capsule.js"),
        Circle: o("./node_modules/p2/src/shapes/Circle.js"),
        Constraint: o(
          "./node_modules/p2/src/constraints/Constraint.js",
        ),
        ContactEquation: o(
          "./node_modules/p2/src/equations/ContactEquation.js",
        ),
        ContactEquationPool: o(
          "./node_modules/p2/src/utils/ContactEquationPool.js",
        ),
        ContactMaterial: o(
          "./node_modules/p2/src/material/ContactMaterial.js",
        ),
        Convex: o("./node_modules/p2/src/shapes/Convex.js"),
        DistanceConstraint: o(
          "./node_modules/p2/src/constraints/DistanceConstraint.js",
        ),
        Equation: o("./node_modules/p2/src/equations/Equation.js"),
        EventEmitter: o(
          "./node_modules/p2/src/events/EventEmitter.js",
        ),
        FrictionEquation: o(
          "./node_modules/p2/src/equations/FrictionEquation.js",
        ),
        FrictionEquationPool: o(
          "./node_modules/p2/src/utils/FrictionEquationPool.js",
        ),
        GearConstraint: o(
          "./node_modules/p2/src/constraints/GearConstraint.js",
        ),
        GSSolver: o("./node_modules/p2/src/solver/GSSolver.js"),
        Heightfield: o("./node_modules/p2/src/shapes/Heightfield.js"),
        Line: o("./node_modules/p2/src/shapes/Line.js"),
        LockConstraint: o(
          "./node_modules/p2/src/constraints/LockConstraint.js",
        ),
        Material: o("./node_modules/p2/src/material/Material.js"),
        Narrowphase: o(
          "./node_modules/p2/src/collision/Narrowphase.js",
        ),
        NaiveBroadphase: o(
          "./node_modules/p2/src/collision/NaiveBroadphase.js",
        ),
        Particle: o("./node_modules/p2/src/shapes/Particle.js"),
        Plane: o("./node_modules/p2/src/shapes/Plane.js"),
        Pool: o("./node_modules/p2/src/utils/Pool.js"),
        RevoluteConstraint: o(
          "./node_modules/p2/src/constraints/RevoluteConstraint.js",
        ),
        PrismaticConstraint: o(
          "./node_modules/p2/src/constraints/PrismaticConstraint.js",
        ),
        Ray: o("./node_modules/p2/src/collision/Ray.js"),
        RaycastResult: o(
          "./node_modules/p2/src/collision/RaycastResult.js",
        ),
        Box: o("./node_modules/p2/src/shapes/Box.js"),
        RotationalVelocityEquation: o(
          "./node_modules/p2/src/equations/RotationalVelocityEquation.js",
        ),
        SAPBroadphase: o(
          "./node_modules/p2/src/collision/SAPBroadphase.js",
        ),
        Shape: o("./node_modules/p2/src/shapes/Shape.js"),
        Solver: o("./node_modules/p2/src/solver/Solver.js"),
        Spring: o("./node_modules/p2/src/objects/Spring.js"),
        TopDownVehicle: o(
          "./node_modules/p2/src/objects/TopDownVehicle.js",
        ),
        LinearSpring: o(
          "./node_modules/p2/src/objects/LinearSpring.js",
        ),
        RotationalSpring: o(
          "./node_modules/p2/src/objects/RotationalSpring.js",
        ),
        Utils: o("./node_modules/p2/src/utils/Utils.js"),
        World: o("./node_modules/p2/src/world/World.js"),
        vec2: o("./node_modules/p2/src/math/vec2.js"),
        version: o("./node_modules/p2/package.json").version,
      })
      Object.defineProperty(r, "Rectangle", {
        get: function() {
          return (
            console.warn(
              "The Rectangle class has been renamed to Box.",
            ),
            this.Box
          )
        },
      })
    },
    "./node_modules/p2/src/shapes/Box.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/shapes/Shape.js"),
        i = o("./node_modules/p2/src/shapes/Convex.js")
      function n(e) {
        "number" == typeof arguments[0] &&
          "number" == typeof arguments[1] &&
          ((e = { width: arguments[0], height: arguments[1] }),
          console.warn(
            "The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })",
          )),
          (e = e || {})
        var t = (this.width = e.width || 1),
          o = (this.height = e.height || 1),
          n = [
            r.fromValues(-t / 2, -o / 2),
            r.fromValues(t / 2, -o / 2),
            r.fromValues(t / 2, o / 2),
            r.fromValues(-t / 2, o / 2),
          ],
          a = [r.fromValues(1, 0), r.fromValues(0, 1)]
        ;(e.vertices = n),
          (e.axes = a),
          (e.type = s.BOX),
          i.call(this, e)
      }
      ;(e.exports = n),
        (n.prototype = new i()),
        (n.prototype.constructor = n),
        (n.prototype.computeMomentOfInertia = function(e) {
          var t = this.width,
            o = this.height
          return e * (o * o + t * t) / 12
        }),
        (n.prototype.updateBoundingRadius = function() {
          var e = this.width,
            t = this.height
          this.boundingRadius = Math.sqrt(e * e + t * t) / 2
        })
      r.create(), r.create(), r.create(), r.create()
      ;(n.prototype.computeAABB = function(e, t, o) {
        e.setFromPoints(this.vertices, t, o, 0)
      }),
        (n.prototype.updateArea = function() {
          this.area = this.width * this.height
        })
    },
    "./node_modules/p2/src/shapes/Capsule.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(e) {
        "number" == typeof arguments[0] &&
          "number" == typeof arguments[1] &&
          ((e = { length: arguments[0], radius: arguments[1] }),
          console.warn(
            "The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })",
          )),
          (e = e || {}),
          (this.length = e.length || 1),
          (this.radius = e.radius || 1),
          (e.type = r.CAPSULE),
          r.call(this, e)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(e) {
          var t = this.radius,
            o = this.length + t,
            r = 2 * t
          return e * (r * r + o * o) / 12
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = this.radius + this.length / 2
        }),
        (i.prototype.updateArea = function() {
          this.area =
            Math.PI * this.radius * this.radius +
            2 * this.radius * this.length
        })
      var n = s.create()
      i.prototype.computeAABB = function(e, t, o) {
        var r = this.radius
        s.set(n, this.length / 2, 0),
          0 !== o && s.rotate(n, n, o),
          s.set(
            e.upperBound,
            Math.max(n[0] + r, -n[0] + r),
            Math.max(n[1] + r, -n[1] + r),
          ),
          s.set(
            e.lowerBound,
            Math.min(n[0] - r, -n[0] - r),
            Math.min(n[1] - r, -n[1] - r),
          ),
          s.add(e.lowerBound, e.lowerBound, t),
          s.add(e.upperBound, e.upperBound, t)
      }
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.create(),
        d = s.fromValues(0, 1)
      i.prototype.raycast = function(e, t, o, r) {
        for (
          var i = t.from,
            n = t.to,
            p = (t.direction, a),
            h = c,
            f = l,
            m = u,
            y = this.length / 2,
            v = 0;
          v < 2;
          v++
        ) {
          var b = this.radius * (2 * v - 1)
          if (
            (s.set(f, -y, b),
            s.set(m, y, b),
            s.toGlobalFrame(f, f, o, r),
            s.toGlobalFrame(m, m, o, r),
            (_ = s.getLineSegmentsIntersectionFraction(i, n, f, m)) >=
              0 &&
              (s.rotate(h, d, r),
              s.scale(h, h, 2 * v - 1),
              t.reportIntersection(e, _, h, -1),
              e.shouldStop(t)))
          )
            return
        }
        var j = Math.pow(this.radius, 2) + Math.pow(y, 2)
        for (v = 0; v < 2; v++) {
          s.set(f, y * (2 * v - 1), 0), s.toGlobalFrame(f, f, o, r)
          var _,
            g = Math.pow(n[0] - i[0], 2) + Math.pow(n[1] - i[1], 2),
            A =
              2 *
              ((n[0] - i[0]) * (i[0] - f[0]) +
                (n[1] - i[1]) * (i[1] - f[1])),
            E =
              Math.pow(i[0] - f[0], 2) +
              Math.pow(i[1] - f[1], 2) -
              Math.pow(this.radius, 2)
          if (!((_ = Math.pow(A, 2) - 4 * g * E) < 0))
            if (0 === _) {
              if (
                (s.lerp(p, i, n, _),
                s.squaredDistance(p, o) > j &&
                  (s.sub(h, p, f),
                  s.normalize(h, h),
                  t.reportIntersection(e, _, h, -1),
                  e.shouldStop(t)))
              )
                return
            } else {
              var P = Math.sqrt(_),
                w = 1 / (2 * g),
                S = (-A - P) * w,
                B = (-A + P) * w
              if (
                S >= 0 &&
                S <= 1 &&
                (s.lerp(p, i, n, S),
                s.squaredDistance(p, o) > j &&
                  (s.sub(h, p, f),
                  s.normalize(h, h),
                  t.reportIntersection(e, S, h, -1),
                  e.shouldStop(t)))
              )
                return
              if (
                B >= 0 &&
                B <= 1 &&
                (s.lerp(p, i, n, B),
                s.squaredDistance(p, o) > j &&
                  (s.sub(h, p, f),
                  s.normalize(h, h),
                  t.reportIntersection(e, B, h, -1),
                  e.shouldStop(t)))
              )
                return
            }
        }
      }
    },
    "./node_modules/p2/src/shapes/Circle.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(e) {
        "number" == typeof arguments[0] &&
          ((e = { radius: arguments[0] }),
          console.warn(
            "The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })",
          )),
          (e = e || {}),
          (this.radius = e.radius || 1),
          (e.type = r.CIRCLE),
          r.call(this, e)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(e) {
          var t = this.radius
          return e * t * t / 2
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = this.radius
        }),
        (i.prototype.updateArea = function() {
          this.area = Math.PI * this.radius * this.radius
        }),
        (i.prototype.computeAABB = function(e, t, o) {
          var r = this.radius
          s.set(e.upperBound, r, r),
            s.set(e.lowerBound, -r, -r),
            t &&
              (s.add(e.lowerBound, e.lowerBound, t),
              s.add(e.upperBound, e.upperBound, t))
        })
      var n = s.create(),
        a = s.create()
      i.prototype.raycast = function(e, t, o, r) {
        var i = t.from,
          c = t.to,
          l = this.radius,
          u = Math.pow(c[0] - i[0], 2) + Math.pow(c[1] - i[1], 2),
          d =
            2 *
            ((c[0] - i[0]) * (i[0] - o[0]) +
              (c[1] - i[1]) * (i[1] - o[1])),
          p =
            Math.pow(i[0] - o[0], 2) +
            Math.pow(i[1] - o[1], 2) -
            Math.pow(l, 2),
          h = Math.pow(d, 2) - 4 * u * p,
          f = n,
          m = a
        if (!(h < 0))
          if (0 === h)
            s.lerp(f, i, c, h),
              s.sub(m, f, o),
              s.normalize(m, m),
              t.reportIntersection(e, h, m, -1)
          else {
            var y = Math.sqrt(h),
              v = 1 / (2 * u),
              b = (-d - y) * v,
              j = (-d + y) * v
            if (
              b >= 0 &&
              b <= 1 &&
              (s.lerp(f, i, c, b),
              s.sub(m, f, o),
              s.normalize(m, m),
              t.reportIntersection(e, b, m, -1),
              e.shouldStop(t))
            )
              return
            j >= 0 &&
              j <= 1 &&
              (s.lerp(f, i, c, j),
              s.sub(m, f, o),
              s.normalize(m, m),
              t.reportIntersection(e, j, m, -1))
          }
      }
    },
    "./node_modules/p2/src/shapes/Convex.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js"),
        i = o("./node_modules/p2/src/math/polyk.js")
      o("./node_modules/poly-decomp/src/index.js")
      function n(e) {
        Array.isArray(arguments[0]) &&
          ((e = { vertices: arguments[0], axes: arguments[1] }),
          console.warn(
            "The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })",
          )),
          (e = e || {}),
          (this.vertices = [])
        for (
          var t = void 0 !== e.vertices ? e.vertices : [], o = 0;
          o < t.length;
          o++
        ) {
          var i = s.create()
          s.copy(i, t[o]), this.vertices.push(i)
        }
        if (((this.axes = []), e.axes))
          for (o = 0; o < e.axes.length; o++) {
            var n = s.create()
            s.copy(n, e.axes[o]), this.axes.push(n)
          }
        else
          for (o = 0; o < this.vertices.length; o++) {
            var a = this.vertices[o],
              c = this.vertices[(o + 1) % this.vertices.length],
              l = s.create()
            s.sub(l, c, a),
              s.rotate90cw(l, l),
              s.normalize(l, l),
              this.axes.push(l)
          }
        if (
          ((this.centerOfMass = s.fromValues(0, 0)),
          (this.triangles = []),
          this.vertices.length &&
            (this.updateTriangles(), this.updateCenterOfMass()),
          (this.boundingRadius = 0),
          (e.type = r.CONVEX),
          r.call(this, e),
          this.updateBoundingRadius(),
          this.updateArea(),
          this.area < 0)
        )
          throw new Error(
            "Convex vertices must be given in conter-clockwise winding.",
          )
      }
      ;(e.exports = n),
        (n.prototype = new r()),
        (n.prototype.constructor = n)
      var a = s.create(),
        c = s.create()
      ;(n.prototype.projectOntoLocalAxis = function(e, t) {
        for (
          var o, r, i = null, n = null, c = ((e = a), 0);
          c < this.vertices.length;
          c++
        )
          (o = this.vertices[c]),
            (r = s.dot(o, e)),
            (null === i || r > i) && (i = r),
            (null === n || r < n) && (n = r)
        if (n > i) {
          var l = n
          ;(n = i), (i = l)
        }
        s.set(t, n, i)
      }),
        (n.prototype.projectOntoWorldAxis = function(e, t, o, r) {
          var i = c
          this.projectOntoLocalAxis(e, r),
            0 !== o ? s.rotate(i, e, o) : (i = e)
          var n = s.dot(t, i)
          s.set(r, r[0] + n, r[1] + n)
        }),
        (n.prototype.updateTriangles = function() {
          this.triangles.length = 0
          for (var e = [], t = 0; t < this.vertices.length; t++) {
            var o = this.vertices[t]
            e.push(o[0], o[1])
          }
          var r = i.Triangulate(e)
          for (t = 0; t < r.length; t += 3) {
            var s = r[t],
              n = r[t + 1],
              a = r[t + 2]
            this.triangles.push([s, n, a])
          }
        })
      var l = s.create(),
        u = s.create(),
        d = s.create(),
        p = s.create(),
        h = s.create()
      s.create(), s.create(), s.create(), s.create()
      ;(n.prototype.updateCenterOfMass = function() {
        var e = this.triangles,
          t = this.vertices,
          o = this.centerOfMass,
          r = l,
          i = d,
          a = p,
          c = h,
          f = u
        s.set(o, 0, 0)
        for (var m = 0, y = 0; y !== e.length; y++) {
          var v = e[y]
          ;(i = t[v[0]]), (a = t[v[1]]), (c = t[v[2]])
          s.centroid(r, i, a, c)
          var b = n.triangleArea(i, a, c)
          ;(m += b), s.scale(f, r, b), s.add(o, o, f)
        }
        s.scale(o, o, 1 / m)
      }),
        (n.prototype.computeMomentOfInertia = function(e) {
          for (
            var t = 0,
              o = 0,
              r = this.vertices.length,
              i = r - 1,
              n = 0;
            n < r;
            i = n, n++
          ) {
            var a = this.vertices[i],
              c = this.vertices[n],
              l = Math.abs(s.crossLength(a, c))
            ;(t += l * (s.dot(c, c) + s.dot(c, a) + s.dot(a, a))),
              (o += l)
          }
          return e / 6 * (t / o)
        }),
        (n.prototype.updateBoundingRadius = function() {
          for (
            var e = this.vertices, t = 0, o = 0;
            o !== e.length;
            o++
          ) {
            var r = s.squaredLength(e[o])
            r > t && (t = r)
          }
          this.boundingRadius = Math.sqrt(t)
        }),
        (n.triangleArea = function(e, t, o) {
          return (
            0.5 *
            ((t[0] - e[0]) * (o[1] - e[1]) -
              (o[0] - e[0]) * (t[1] - e[1]))
          )
        }),
        (n.prototype.updateArea = function() {
          this.updateTriangles(), (this.area = 0)
          for (
            var e = this.triangles, t = this.vertices, o = 0;
            o !== e.length;
            o++
          ) {
            var r = e[o],
              s = t[r[0]],
              i = t[r[1]],
              a = t[r[2]],
              c = n.triangleArea(s, i, a)
            this.area += c
          }
        }),
        (n.prototype.computeAABB = function(e, t, o) {
          e.setFromPoints(this.vertices, t, o, 0)
        })
      var f = s.create(),
        m = s.create(),
        y = s.create()
      n.prototype.raycast = function(e, t, o, r) {
        var i = f,
          n = m,
          a = y,
          c = this.vertices
        s.toLocalFrame(i, t.from, o, r), s.toLocalFrame(n, t.to, o, r)
        for (
          var l = c.length, u = 0;
          u < l && !e.shouldStop(t);
          u++
        ) {
          var d = c[u],
            p = c[(u + 1) % l],
            h = s.getLineSegmentsIntersectionFraction(i, n, d, p)
          h >= 0 &&
            (s.sub(a, p, d),
            s.rotate(a, a, -Math.PI / 2 + r),
            s.normalize(a, a),
            t.reportIntersection(e, h, a, u))
        }
      }
    },
    "./node_modules/p2/src/shapes/Heightfield.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(e) {
        if (Array.isArray(arguments[0])) {
          if (
            ((e = { heights: arguments[0] }),
            "object" == typeof arguments[1])
          )
            for (var t in arguments[1]) e[t] = arguments[1][t]
          console.warn(
            "The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })",
          )
        }
        ;(e = e || {}),
          (this.heights = e.heights ? e.heights.slice(0) : []),
          (this.maxValue = e.maxValue || null),
          (this.minValue = e.minValue || null),
          (this.elementWidth = e.elementWidth || 0.1),
          (void 0 !== e.maxValue && void 0 !== e.minValue) ||
            this.updateMaxMinValues(),
          (e.type = r.HEIGHTFIELD),
          r.call(this, e)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.updateMaxMinValues = function() {
          for (
            var e = this.heights, t = e[0], o = e[0], r = 0;
            r !== e.length;
            r++
          ) {
            var s = e[r]
            s > t && (t = s), s < o && (o = s)
          }
          ;(this.maxValue = t), (this.minValue = o)
        }),
        (i.prototype.computeMomentOfInertia = function(e) {
          return Number.MAX_VALUE
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = Number.MAX_VALUE
        }),
        (i.prototype.updateArea = function() {
          for (
            var e = this.heights, t = 0, o = 0;
            o < e.length - 1;
            o++
          )
            t += (e[o] + e[o + 1]) / 2 * this.elementWidth
          this.area = t
        })
      var n = [s.create(), s.create(), s.create(), s.create()]
      ;(i.prototype.computeAABB = function(e, t, o) {
        s.set(n[0], 0, this.maxValue),
          s.set(
            n[1],
            this.elementWidth * this.heights.length,
            this.maxValue,
          ),
          s.set(
            n[2],
            this.elementWidth * this.heights.length,
            this.minValue,
          ),
          s.set(n[3], 0, this.minValue),
          e.setFromPoints(n, t, o)
      }),
        (i.prototype.getLineSegment = function(e, t, o) {
          var r = this.heights,
            i = this.elementWidth
          s.set(e, o * i, r[o]), s.set(t, (o + 1) * i, r[o + 1])
        }),
        (i.prototype.getSegmentIndex = function(e) {
          return Math.floor(e[0] / this.elementWidth)
        }),
        (i.prototype.getClampedSegmentIndex = function(e) {
          var t = this.getSegmentIndex(e)
          return (t = Math.min(this.heights.length, Math.max(t, 0)))
        })
      s.create()
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.create(),
        d = s.create()
      s.fromValues(0, 1)
      i.prototype.raycast = function(e, t, o, r) {
        var i = t.from,
          n = t.to,
          p = (t.direction, a),
          h = c,
          f = l,
          m = u,
          y = d
        s.toLocalFrame(m, i, o, r), s.toLocalFrame(y, n, o, r)
        var v = this.getClampedSegmentIndex(m),
          b = this.getClampedSegmentIndex(y)
        if (v > b) {
          var j = v
          ;(v = b), (b = j)
        }
        for (var _ = 0; _ < this.heights.length - 1; _++) {
          this.getLineSegment(h, f, _)
          var g = s.getLineSegmentsIntersectionFraction(m, y, h, f)
          if (
            g >= 0 &&
            (s.sub(p, f, h),
            s.rotate(p, p, r + Math.PI / 2),
            s.normalize(p, p),
            t.reportIntersection(e, g, p, -1),
            e.shouldStop(t))
          )
            return
        }
      }
    },
    "./node_modules/p2/src/shapes/Line.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(e) {
        "number" == typeof arguments[0] &&
          ((e = { length: arguments[0] }),
          console.warn(
            "The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })",
          )),
          (e = e || {}),
          (this.length = e.length || 1),
          (e.type = r.LINE),
          r.call(this, e)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(e) {
          return e * Math.pow(this.length, 2) / 12
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = this.length / 2
        })
      var n = [s.create(), s.create()]
      i.prototype.computeAABB = function(e, t, o) {
        var r = this.length / 2
        s.set(n[0], -r, 0),
          s.set(n[1], r, 0),
          e.setFromPoints(n, t, o, 0)
      }
      s.create()
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.fromValues(0, 1)
      i.prototype.raycast = function(e, t, o, r) {
        var i = t.from,
          n = t.to,
          d = c,
          p = l,
          h = this.length / 2
        s.set(d, -h, 0),
          s.set(p, h, 0),
          s.toGlobalFrame(d, d, o, r),
          s.toGlobalFrame(p, p, o, r)
        var f = s.getLineSegmentsIntersectionFraction(d, p, i, n)
        if (f >= 0) {
          var m = a
          s.rotate(m, u, r), t.reportIntersection(e, f, m, -1)
        }
      }
    },
    "./node_modules/p2/src/shapes/Particle.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(e) {
        ;((e = e || {}).type = r.PARTICLE), r.call(this, e)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(e) {
          return 0
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = 0
        }),
        (i.prototype.computeAABB = function(e, t, o) {
          s.copy(e.lowerBound, t), s.copy(e.upperBound, t)
        })
    },
    "./node_modules/p2/src/shapes/Plane.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(e) {
        ;((e = e || {}).type = r.PLANE), r.call(this, e)
      }
      ;(e.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(e) {
          return 0
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = Number.MAX_VALUE
        }),
        (i.prototype.computeAABB = function(e, t, o) {
          var r = o % (2 * Math.PI),
            i = s.set,
            n = e.lowerBound,
            a = e.upperBound
          i(n, -1e7, -1e7),
            i(a, 1e7, 1e7),
            0 === r
              ? (a[1] = 0)
              : r === Math.PI / 2
                ? (n[0] = 0)
                : r === Math.PI
                  ? (n[1] = 0)
                  : r === 3 * Math.PI / 2 && (a[0] = 0)
        }),
        (i.prototype.updateArea = function() {
          this.area = Number.MAX_VALUE
        })
      var n = s.create(),
        a = (s.create(), s.create(), s.create()),
        c = s.create()
      i.prototype.raycast = function(e, t, o, r) {
        var i = t.from,
          l = t.to,
          u = t.direction,
          d = n,
          p = a,
          h = c
        s.set(p, 0, 1), s.rotate(p, p, r), s.sub(h, i, o)
        var f = s.dot(h, p)
        if (
          (s.sub(h, l, o),
          !(f * s.dot(h, p) > 0 || s.squaredDistance(i, l) < f * f))
        ) {
          var m = s.dot(p, u)
          s.sub(d, i, o)
          var y = -s.dot(p, d) / m / t.length
          t.reportIntersection(e, y, p, -1)
        }
      }
    },
    "./node_modules/p2/src/shapes/Shape.js": function(e, t, o) {
      e.exports = s
      var r = o("./node_modules/p2/src/math/vec2.js")
      function s(e) {
        ;(e = e || {}),
          (this.body = null),
          (this.position = r.fromValues(0, 0)),
          e.position && r.copy(this.position, e.position),
          (this.angle = e.angle || 0),
          (this.type = e.type || 0),
          (this.id = s.idCounter++),
          (this.boundingRadius = 0),
          (this.collisionGroup =
            void 0 !== e.collisionGroup ? e.collisionGroup : 1),
          (this.collisionResponse =
            void 0 === e.collisionResponse || e.collisionResponse),
          (this.collisionMask =
            void 0 !== e.collisionMask ? e.collisionMask : 1),
          (this.material = e.material || null),
          (this.area = 0),
          (this.sensor = void 0 !== e.sensor && e.sensor),
          this.type && this.updateBoundingRadius(),
          this.updateArea()
      }
      ;(s.idCounter = 0),
        (s.CIRCLE = 1),
        (s.PARTICLE = 2),
        (s.PLANE = 4),
        (s.CONVEX = 8),
        (s.LINE = 16),
        (s.BOX = 32),
        Object.defineProperty(s, "RECTANGLE", {
          get: function() {
            return (
              console.warn(
                "Shape.RECTANGLE is deprecated, use Shape.BOX instead.",
              ),
              s.BOX
            )
          },
        }),
        (s.CAPSULE = 64),
        (s.HEIGHTFIELD = 128),
        (s.prototype.computeMomentOfInertia = function(e) {}),
        (s.prototype.updateBoundingRadius = function() {}),
        (s.prototype.updateArea = function() {}),
        (s.prototype.computeAABB = function(e, t, o) {}),
        (s.prototype.raycast = function(e, t, o, r) {})
    },
    "./node_modules/p2/src/solver/GSSolver.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/solver/Solver.js"),
        i = o("./node_modules/p2/src/utils/Utils.js"),
        n = o("./node_modules/p2/src/equations/FrictionEquation.js")
      function a(e) {
        s.call(this, e, s.GS),
          (e = e || {}),
          (this.iterations = e.iterations || 10),
          (this.tolerance = e.tolerance || 1e-7),
          (this.arrayStep = 30),
          (this.lambda = new i.ARRAY_TYPE(this.arrayStep)),
          (this.Bs = new i.ARRAY_TYPE(this.arrayStep)),
          (this.invCs = new i.ARRAY_TYPE(this.arrayStep)),
          (this.useZeroRHS = !1),
          (this.frictionIterations =
            void 0 !== e.frictionIterations
              ? 0
              : e.frictionIterations),
          (this.usedIterations = 0)
      }
      ;(e.exports = a),
        (a.prototype = new s()),
        (a.prototype.constructor = a),
        (a.prototype.solve = function(e, t) {
          this.sortEquations()
          var o = 0,
            s = this.iterations,
            c = this.frictionIterations,
            l = this.equations,
            u = l.length,
            d = Math.pow(this.tolerance * u, 2),
            p = t.bodies,
            h = t.bodies.length,
            f = (r.add, r.set, this.useZeroRHS),
            m = this.lambda
          if (((this.usedIterations = 0), u))
            for (var y = 0; y !== h; y++) {
              p[y].updateSolveMassProperties()
            }
          m.length < u &&
            ((m = this.lambda = new i.ARRAY_TYPE(u + this.arrayStep)),
            (this.Bs = new i.ARRAY_TYPE(u + this.arrayStep)),
            (this.invCs = new i.ARRAY_TYPE(u + this.arrayStep))),
            (function(e) {
              for (var t = e.length; t--; ) e[t] = 0
            })(m)
          var v,
            b,
            j = this.invCs,
            _ = this.Bs
          for (m = this.lambda, y = 0; y !== l.length; y++) {
            var g
            ;((g = l[y]).timeStep !== e || g.needsUpdate) &&
              ((g.timeStep = e), g.update()),
              (_[y] = g.computeB(g.a, g.b, e)),
              (j[y] = g.computeInvC(g.epsilon))
          }
          if (0 !== u) {
            for (y = 0; y !== h; y++) {
              p[y].resetConstraintVelocity()
            }
            if (c) {
              for (o = 0; o !== c; o++) {
                for (v = 0, b = 0; b !== u; b++) {
                  g = l[b]
                  var A = a.iterateEquation(
                    b,
                    g,
                    g.epsilon,
                    _,
                    j,
                    m,
                    f,
                    e,
                    o,
                  )
                  v += Math.abs(A)
                }
                if ((this.usedIterations++, v * v <= d)) break
              }
              for (
                a.updateMultipliers(l, m, 1 / e), b = 0;
                b !== u;
                b++
              ) {
                var E = l[b]
                if (E instanceof n) {
                  for (
                    var P = 0, w = 0;
                    w !== E.contactEquations.length;
                    w++
                  )
                    P += E.contactEquations[w].multiplier
                  ;(P *=
                    E.frictionCoefficient /
                    E.contactEquations.length),
                    (E.maxForce = P),
                    (E.minForce = -P)
                }
              }
            }
            for (o = 0; o !== s; o++) {
              for (v = 0, b = 0; b !== u; b++) {
                g = l[b]
                A = a.iterateEquation(
                  b,
                  g,
                  g.epsilon,
                  _,
                  j,
                  m,
                  f,
                  e,
                  o,
                )
                v += Math.abs(A)
              }
              if ((this.usedIterations++, v * v <= d)) break
            }
            for (y = 0; y !== h; y++) p[y].addConstraintVelocity()
            a.updateMultipliers(l, m, 1 / e)
          }
        }),
        (a.updateMultipliers = function(e, t, o) {
          for (var r = e.length; r--; ) e[r].multiplier = t[r] * o
        }),
        (a.iterateEquation = function(e, t, o, r, s, i, n, a, c) {
          var l = r[e],
            u = s[e],
            d = i[e],
            p = t.computeGWlambda(),
            h = t.maxForce,
            f = t.minForce
          n && (l = 0)
          var m = u * (l - p - o * d),
            y = d + m
          return (
            y < f * a
              ? (m = f * a - d)
              : y > h * a && (m = h * a - d),
            (i[e] += m),
            t.addToWlambda(m),
            m
          )
        })
    },
    "./node_modules/p2/src/solver/Solver.js": function(e, t, o) {
      o("./node_modules/p2/src/utils/Utils.js")
      var r = o("./node_modules/p2/src/events/EventEmitter.js")
      function s(e, t) {
        ;(e = e || {}),
          r.call(this),
          (this.type = t),
          (this.equations = []),
          (this.equationSortFunction = e.equationSortFunction || !1)
      }
      ;(e.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.solve = function(e, t) {
          throw new Error(
            "Solver.solve should be implemented by subclasses!",
          )
        })
      var i = { bodies: [] }
      ;(s.prototype.solveIsland = function(e, t) {
        this.removeAllEquations(),
          t.equations.length &&
            (this.addEquations(t.equations),
            (i.bodies.length = 0),
            t.getBodies(i.bodies),
            i.bodies.length && this.solve(e, i))
      }),
        (s.prototype.sortEquations = function() {
          this.equationSortFunction &&
            this.equations.sort(this.equationSortFunction)
        }),
        (s.prototype.addEquation = function(e) {
          e.enabled && this.equations.push(e)
        }),
        (s.prototype.addEquations = function(e) {
          for (var t = 0, o = e.length; t !== o; t++) {
            var r = e[t]
            r.enabled && this.equations.push(r)
          }
        }),
        (s.prototype.removeEquation = function(e) {
          var t = this.equations.indexOf(e)
          ;-1 !== t && this.equations.splice(t, 1)
        }),
        (s.prototype.removeAllEquations = function() {
          this.equations.length = 0
        }),
        (s.GS = 1),
        (s.ISLAND = 2)
    },
    "./node_modules/p2/src/utils/ContactEquationPool.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/ContactEquation.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(e) {
          return (e.bodyA = e.bodyB = null), this
        })
    },
    "./node_modules/p2/src/utils/FrictionEquationPool.js": function(
      e,
      t,
      o,
    ) {
      var r = o(
          "./node_modules/p2/src/equations/FrictionEquation.js",
        ),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(e) {
          return (e.bodyA = e.bodyB = null), this
        })
    },
    "./node_modules/p2/src/utils/IslandNodePool.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/world/IslandNode.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(e) {
          return e.reset(), this
        })
    },
    "./node_modules/p2/src/utils/IslandPool.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/world/Island.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(e) {
          return e.reset(), this
        })
    },
    "./node_modules/p2/src/utils/OverlapKeeper.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/TupleDictionary.js"),
        s = (o("./node_modules/p2/src/utils/OverlapKeeperRecord.js"),
        o("./node_modules/p2/src/utils/OverlapKeeperRecordPool.js"))
      o("./node_modules/p2/src/utils/Utils.js")
      function i() {
        ;(this.overlappingShapesLastState = new r()),
          (this.overlappingShapesCurrentState = new r()),
          (this.recordPool = new s({ size: 16 })),
          (this.tmpDict = new r()),
          (this.tmpArray1 = [])
      }
      ;(e.exports = i),
        (i.prototype.tick = function() {
          for (
            var e = this.overlappingShapesLastState,
              t = this.overlappingShapesCurrentState,
              o = e.keys.length;
            o--;

          ) {
            var r = e.keys[o],
              s = e.getByKey(r)
            t.getByKey(r)
            s && this.recordPool.release(s)
          }
          e.reset(), e.copy(t), t.reset()
        }),
        (i.prototype.setOverlapping = function(e, t, o, r) {
          this.overlappingShapesLastState
          var s = this.overlappingShapesCurrentState
          if (!s.get(t.id, r.id)) {
            var i = this.recordPool.get()
            i.set(e, t, o, r), s.set(t.id, r.id, i)
          }
        }),
        (i.prototype.getNewOverlaps = function(e) {
          return this.getDiff(
            this.overlappingShapesLastState,
            this.overlappingShapesCurrentState,
            e,
          )
        }),
        (i.prototype.getEndOverlaps = function(e) {
          return this.getDiff(
            this.overlappingShapesCurrentState,
            this.overlappingShapesLastState,
            e,
          )
        }),
        (i.prototype.bodiesAreOverlapping = function(e, t) {
          for (
            var o = this.overlappingShapesCurrentState,
              r = o.keys.length;
            r--;

          ) {
            var s = o.keys[r],
              i = o.data[s]
            if (
              (i.bodyA === e && i.bodyB === t) ||
              (i.bodyA === t && i.bodyB === e)
            )
              return !0
          }
          return !1
        }),
        (i.prototype.getDiff = function(e, t, o) {
          var r = e,
            s = t
          ;(o = o || []).length = 0
          for (var i = s.keys.length; i--; ) {
            var n = s.keys[i],
              a = s.data[n]
            if (!a) throw new Error("Key " + n + " had no data!")
            r.data[n] || o.push(a)
          }
          return o
        }),
        (i.prototype.isNewOverlap = function(e, t) {
          var o = 0 | e.id,
            r = 0 | t.id,
            s = this.overlappingShapesLastState,
            i = this.overlappingShapesCurrentState
          return !s.get(o, r) && !!i.get(o, r)
        }),
        (i.prototype.getNewBodyOverlaps = function(e) {
          this.tmpArray1.length = 0
          var t = this.getNewOverlaps(this.tmpArray1)
          return this.getBodyDiff(t, e)
        }),
        (i.prototype.getEndBodyOverlaps = function(e) {
          this.tmpArray1.length = 0
          var t = this.getEndOverlaps(this.tmpArray1)
          return this.getBodyDiff(t, e)
        }),
        (i.prototype.getBodyDiff = function(e, t) {
          t = t || []
          for (var o = this.tmpDict, r = e.length; r--; ) {
            var s = e[r]
            o.set(0 | s.bodyA.id, 0 | s.bodyB.id, s)
          }
          for (r = o.keys.length; r--; ) {
            ;(s = o.getByKey(o.keys[r])) && t.push(s.bodyA, s.bodyB)
          }
          return o.reset(), t
        })
    },
    "./node_modules/p2/src/utils/OverlapKeeperRecord.js": function(
      e,
      t,
    ) {
      function o(e, t, o, r) {
        ;(this.shapeA = t),
          (this.shapeB = r),
          (this.bodyA = e),
          (this.bodyB = o)
      }
      ;(e.exports = o),
        (o.prototype.set = function(e, t, r, s) {
          o.call(this, e, t, r, s)
        })
    },
    "./node_modules/p2/src/utils/OverlapKeeperRecordPool.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/OverlapKeeperRecord.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(e.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(e) {
          return (
            (e.bodyA = e.bodyB = e.shapeA = e.shapeB = null), this
          )
        })
    },
    "./node_modules/p2/src/utils/Pool.js": function(e, t) {
      function o(e) {
        ;(e = e || {}),
          (this.objects = []),
          void 0 !== e.size && this.resize(e.size)
      }
      ;(e.exports = o),
        (o.prototype.resize = function(e) {
          for (var t = this.objects; t.length > e; ) t.pop()
          for (; t.length < e; ) t.push(this.create())
          return this
        }),
        (o.prototype.get = function() {
          var e = this.objects
          return e.length ? e.pop() : this.create()
        }),
        (o.prototype.release = function(e) {
          return this.destroy(e), this.objects.push(e), this
        })
    },
    "./node_modules/p2/src/utils/TupleDictionary.js": function(
      e,
      t,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/Utils.js")
      function s() {
        ;(this.data = {}), (this.keys = [])
      }
      ;(e.exports = s),
        (s.prototype.getKey = function(e, t) {
          return (0 | (e |= 0)) == (0 | (t |= 0))
            ? -1
            : 0 |
                ((0 | e) > (0 | t)
                  ? (e << 16) | (65535 & t)
                  : (t << 16) | (65535 & e))
        }),
        (s.prototype.getByKey = function(e) {
          return (e |= 0), this.data[e]
        }),
        (s.prototype.get = function(e, t) {
          return this.data[this.getKey(e, t)]
        }),
        (s.prototype.set = function(e, t, o) {
          if (!o) throw new Error("No data!")
          var r = this.getKey(e, t)
          return (
            this.data[r] || this.keys.push(r), (this.data[r] = o), r
          )
        }),
        (s.prototype.reset = function() {
          for (var e = this.data, t = this.keys, o = t.length; o--; )
            delete e[t[o]]
          t.length = 0
        }),
        (s.prototype.copy = function(e) {
          this.reset(), r.appendArray(this.keys, e.keys)
          for (var t = e.keys.length; t--; ) {
            var o = e.keys[t]
            this.data[o] = e.data[o]
          }
        })
    },
    "./node_modules/p2/src/utils/Utils.js": function(e, t) {
      function o() {}
      ;(e.exports = o),
        (o.appendArray = function(e, t) {
          if (t.length < 15e4) e.push.apply(e, t)
          else
            for (var o = 0, r = t.length; o !== r; ++o) e.push(t[o])
        }),
        (o.splice = function(e, t, o) {
          o = o || 1
          for (var r = t, s = e.length - o; r < s; r++)
            e[r] = e[r + o]
          e.length = s
        }),
        "undefined" != typeof P2_ARRAY_TYPE
          ? (o.ARRAY_TYPE = P2_ARRAY_TYPE)
          : "undefined" != typeof Float32Array
            ? (o.ARRAY_TYPE = Float32Array)
            : (o.ARRAY_TYPE = Array),
        (o.extend = function(e, t) {
          for (var o in t) e[o] = t[o]
        }),
        (o.defaults = function(e, t) {
          for (var o in ((e = e || {}), t)) o in e || (e[o] = t[o])
          return e
        })
    },
    "./node_modules/p2/src/world/Island.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/objects/Body.js")
      function s() {
        ;(this.equations = []), (this.bodies = [])
      }
      ;(e.exports = s),
        (s.prototype.reset = function() {
          this.equations.length = this.bodies.length = 0
        })
      var i = []
      ;(s.prototype.getBodies = function(e) {
        var t = e || [],
          o = this.equations
        i.length = 0
        for (var r = 0; r !== o.length; r++) {
          var s = o[r]
          ;-1 === i.indexOf(s.bodyA.id) &&
            (t.push(s.bodyA), i.push(s.bodyA.id)),
            -1 === i.indexOf(s.bodyB.id) &&
              (t.push(s.bodyB), i.push(s.bodyB.id))
        }
        return t
      }),
        (s.prototype.wantsToSleep = function() {
          for (var e = 0; e < this.bodies.length; e++) {
            var t = this.bodies[e]
            if (t.type === r.DYNAMIC && !t.wantsToSleep) return !1
          }
          return !0
        }),
        (s.prototype.sleep = function() {
          for (var e = 0; e < this.bodies.length; e++) {
            this.bodies[e].sleep()
          }
          return !0
        })
    },
    "./node_modules/p2/src/world/IslandManager.js": function(
      e,
      t,
      o,
    ) {
      o("./node_modules/p2/src/math/vec2.js"),
        o("./node_modules/p2/src/world/Island.js"),
        o("./node_modules/p2/src/world/IslandNode.js")
      var r = o("./node_modules/p2/src/utils/IslandNodePool.js"),
        s = o("./node_modules/p2/src/utils/IslandPool.js"),
        i = o("./node_modules/p2/src/objects/Body.js")
      function n(e) {
        ;(this.nodePool = new r({ size: 16 })),
          (this.islandPool = new s({ size: 8 })),
          (this.equations = []),
          (this.islands = []),
          (this.nodes = []),
          (this.queue = [])
      }
      ;(e.exports = n),
        (n.getUnvisitedNode = function(e) {
          for (var t = e.length, o = 0; o !== t; o++) {
            var r = e[o]
            if (!r.visited && r.body.type === i.DYNAMIC) return r
          }
          return !1
        }),
        (n.prototype.visit = function(e, t, o) {
          t.push(e.body)
          for (var r = e.equations.length, s = 0; s !== r; s++) {
            var i = e.equations[s]
            ;-1 === o.indexOf(i) && o.push(i)
          }
        }),
        (n.prototype.bfs = function(e, t, o) {
          var r = this.queue
          for (
            r.length = 0,
              r.push(e),
              e.visited = !0,
              this.visit(e, t, o);
            r.length;

          )
            for (
              var s, a = r.pop();
              (s = n.getUnvisitedNode(a.neighbors));

            )
              (s.visited = !0),
                this.visit(s, t, o),
                s.body.type === i.DYNAMIC && r.push(s)
        }),
        (n.prototype.split = function(e) {
          for (
            var t = e.bodies, o = this.nodes, r = this.equations;
            o.length;

          )
            this.nodePool.release(o.pop())
          for (var s = 0; s !== t.length; s++) {
            var i = this.nodePool.get()
            ;(i.body = t[s]), o.push(i)
          }
          for (var a = 0; a !== r.length; a++) {
            var c = r[a],
              l = ((s = t.indexOf(c.bodyA)), t.indexOf(c.bodyB)),
              u = o[s],
              d = o[l]
            u.neighbors.push(d),
              d.neighbors.push(u),
              u.equations.push(c),
              d.equations.push(c)
          }
          var p,
            h = this.islands
          for (s = 0; s < h.length; s++) this.islandPool.release(h[s])
          for (h.length = 0; (p = n.getUnvisitedNode(o)); ) {
            var f = this.islandPool.get()
            this.bfs(p, f.bodies, f.equations), h.push(f)
          }
          return h
        })
    },
    "./node_modules/p2/src/world/IslandNode.js": function(e, t) {
      function o(e) {
        ;(this.body = e),
          (this.neighbors = []),
          (this.equations = []),
          (this.visited = !1)
      }
      ;(e.exports = o),
        (o.prototype.reset = function() {
          ;(this.equations.length = 0),
            (this.neighbors.length = 0),
            (this.visited = !1),
            (this.body = null)
        })
    },
    "./node_modules/p2/src/world/World.js": function(e, t, o) {
      var r = o("./node_modules/p2/src/solver/GSSolver.js"),
        s = (o("./node_modules/p2/src/solver/Solver.js"),
        o("./node_modules/p2/src/collision/Ray.js"),
        o("./node_modules/p2/src/math/vec2.js")),
        i = o("./node_modules/p2/src/shapes/Circle.js"),
        n = o("./node_modules/p2/src/shapes/Convex.js"),
        a = (o("./node_modules/p2/src/shapes/Line.js"),
        o("./node_modules/p2/src/shapes/Plane.js")),
        c = o("./node_modules/p2/src/shapes/Capsule.js"),
        l = o("./node_modules/p2/src/shapes/Particle.js"),
        u = o("./node_modules/p2/src/events/EventEmitter.js"),
        d = o("./node_modules/p2/src/objects/Body.js"),
        p = (o("./node_modules/p2/src/shapes/Shape.js"),
        o("./node_modules/p2/src/objects/LinearSpring.js"),
        o("./node_modules/p2/src/material/Material.js")),
        h = o("./node_modules/p2/src/material/ContactMaterial.js"),
        f = (o(
          "./node_modules/p2/src/constraints/DistanceConstraint.js",
        ),
        o("./node_modules/p2/src/constraints/Constraint.js"),
        o("./node_modules/p2/src/constraints/LockConstraint.js"),
        o("./node_modules/p2/src/constraints/RevoluteConstraint.js"),
        o("./node_modules/p2/src/constraints/PrismaticConstraint.js"),
        o("./node_modules/p2/src/constraints/GearConstraint.js"),
        o("./node_modules/p2/package.json"),
        o("./node_modules/p2/src/collision/Broadphase.js"),
        o("./node_modules/p2/src/collision/AABB.js")),
        m = o("./node_modules/p2/src/collision/SAPBroadphase.js"),
        y = o("./node_modules/p2/src/collision/Narrowphase.js"),
        v = o("./node_modules/p2/src/utils/Utils.js"),
        b = o("./node_modules/p2/src/utils/OverlapKeeper.js"),
        j = o("./node_modules/p2/src/world/IslandManager.js")
      o("./node_modules/p2/src/objects/RotationalSpring.js")
      function _(e) {
        u.apply(this),
          (e = e || {}),
          (this.springs = []),
          (this.bodies = []),
          (this.disabledBodyCollisionPairs = []),
          (this.solver = e.solver || new r()),
          (this.narrowphase = new y(this)),
          (this.islandManager = new j()),
          (this.gravity = s.fromValues(0, -9.78)),
          e.gravity && s.copy(this.gravity, e.gravity),
          (this.frictionGravity = s.length(this.gravity) || 10),
          (this.useWorldGravityAsFrictionGravity = !0),
          (this.useFrictionGravityOnZeroGravity = !0),
          (this.broadphase = e.broadphase || new m()),
          this.broadphase.setWorld(this),
          (this.constraints = []),
          (this.defaultMaterial = new p()),
          (this.defaultContactMaterial = new h(
            this.defaultMaterial,
            this.defaultMaterial,
          )),
          (this.lastTimeStep = 1 / 60),
          (this.applySpringForces = !0),
          (this.applyDamping = !0),
          (this.applyGravity = !0),
          (this.solveConstraints = !0),
          (this.contactMaterials = []),
          (this.time = 0),
          (this.accumulator = 0),
          (this.stepping = !1),
          (this.bodiesToBeRemoved = []),
          (this.islandSplit =
            void 0 === e.islandSplit || !!e.islandSplit),
          (this.emitImpactEvent = !0),
          (this._constraintIdCounter = 0),
          (this._bodyIdCounter = 0),
          (this.postStepEvent = { type: "postStep" }),
          (this.addBodyEvent = { type: "addBody", body: null }),
          (this.removeBodyEvent = { type: "removeBody", body: null }),
          (this.addSpringEvent = { type: "addSpring", spring: null }),
          (this.impactEvent = {
            type: "impact",
            bodyA: null,
            bodyB: null,
            shapeA: null,
            shapeB: null,
            contactEquation: null,
          }),
          (this.postBroadphaseEvent = {
            type: "postBroadphase",
            pairs: null,
          }),
          (this.sleepMode = _.NO_SLEEPING),
          (this.beginContactEvent = {
            type: "beginContact",
            shapeA: null,
            shapeB: null,
            bodyA: null,
            bodyB: null,
            contactEquations: [],
          }),
          (this.endContactEvent = {
            type: "endContact",
            shapeA: null,
            shapeB: null,
            bodyA: null,
            bodyB: null,
          }),
          (this.preSolveEvent = {
            type: "preSolve",
            contactEquations: null,
            frictionEquations: null,
          }),
          (this.overlappingShapesLastState = { keys: [] }),
          (this.overlappingShapesCurrentState = { keys: [] }),
          (this.overlapKeeper = new b())
      }
      ;(e.exports = _),
        (_.prototype = new Object(u.prototype)),
        (_.prototype.constructor = _),
        (_.NO_SLEEPING = 1),
        (_.BODY_SLEEPING = 2),
        (_.ISLAND_SLEEPING = 4),
        (_.prototype.addConstraint = function(e) {
          this.constraints.push(e)
        }),
        (_.prototype.addContactMaterial = function(e) {
          this.contactMaterials.push(e)
        }),
        (_.prototype.removeContactMaterial = function(e) {
          var t = this.contactMaterials.indexOf(e)
          ;-1 !== t && v.splice(this.contactMaterials, t, 1)
        }),
        (_.prototype.getContactMaterial = function(e, t) {
          for (
            var o = this.contactMaterials, r = 0, s = o.length;
            r !== s;
            r++
          ) {
            var i = o[r]
            if (
              (i.materialA.id === e.id && i.materialB.id === t.id) ||
              (i.materialA.id === t.id && i.materialB.id === e.id)
            )
              return i
          }
          return !1
        }),
        (_.prototype.removeConstraint = function(e) {
          var t = this.constraints.indexOf(e)
          ;-1 !== t && v.splice(this.constraints, t, 1)
        })
      s.create(),
        s.create(),
        s.create(),
        s.create(),
        s.create(),
        s.create()
      var g = s.create(),
        A = s.fromValues(0, 0),
        E = s.fromValues(0, 0)
      s.fromValues(0, 0), s.fromValues(0, 0)
      _.prototype.step = function(e, t, o) {
        if (((o = o || 10), 0 === (t = t || 0)))
          this.internalStep(e), (this.time += e)
        else {
          this.accumulator += t
          for (var r = 0; this.accumulator >= e && r < o; )
            this.internalStep(e),
              (this.time += e),
              (this.accumulator -= e),
              r++
          for (
            var i = (this.accumulator % e) / e, n = 0;
            n !== this.bodies.length;
            n++
          ) {
            var a = this.bodies[n]
            s.lerp(
              a.interpolatedPosition,
              a.previousPosition,
              a.position,
              i,
            ),
              (a.interpolatedAngle =
                a.previousAngle + i * (a.angle - a.previousAngle))
          }
        }
      }
      var P = []
      ;(_.prototype.internalStep = function(e) {
        this.stepping = !0
        var t = this.springs.length,
          o = this.springs,
          r = this.bodies,
          i = this.gravity,
          n = this.solver,
          a = this.bodies.length,
          c = this.broadphase,
          l = this.narrowphase,
          u = this.constraints,
          p = g,
          h = (s.scale, s.add),
          f = (s.rotate, this.islandManager)
        if (
          (this.overlapKeeper.tick(),
          (this.lastTimeStep = e),
          this.useWorldGravityAsFrictionGravity)
        ) {
          var m = s.length(this.gravity)
          ;(0 === m && this.useFrictionGravityOnZeroGravity) ||
            (this.frictionGravity = m)
        }
        if (this.applyGravity)
          for (var y = 0; y !== a; y++) {
            var b = (j = r[y]).force
            j.type === d.DYNAMIC &&
              j.sleepState !== d.SLEEPING &&
              (s.scale(p, i, j.mass * j.gravityScale), h(b, b, p))
          }
        if (this.applySpringForces)
          for (y = 0; y !== t; y++) {
            o[y].applyForce()
          }
        if (this.applyDamping)
          for (y = 0; y !== a; y++) {
            var j
            ;(j = r[y]).type === d.DYNAMIC && j.applyDamping(e)
          }
        var A = c.getCollisionPairs(this),
          E = this.disabledBodyCollisionPairs
        for (y = E.length - 2; y >= 0; y -= 2)
          for (var w = A.length - 2; w >= 0; w -= 2)
            ((E[y] === A[w] && E[y + 1] === A[w + 1]) ||
              (E[y + 1] === A[w] && E[y] === A[w + 1])) &&
              A.splice(w, 2)
        var S = u.length
        for (y = 0; y !== S; y++) {
          var B = u[y]
          if (!B.collideConnected)
            for (w = A.length - 2; w >= 0; w -= 2)
              ((B.bodyA === A[w] && B.bodyB === A[w + 1]) ||
                (B.bodyB === A[w] && B.bodyA === A[w + 1])) &&
                A.splice(w, 2)
        }
        ;(this.postBroadphaseEvent.pairs = A),
          this.emit(this.postBroadphaseEvent),
          (this.postBroadphaseEvent.pairs = null),
          l.reset(this)
        y = 0
        for (var x = A.length; y !== x; y += 2)
          for (
            var L = A[y], q = A[y + 1], M = 0, C = L.shapes.length;
            M !== C;
            M++
          )
            for (
              var I = L.shapes[M],
                O = I.position,
                F = I.angle,
                T = 0,
                R = q.shapes.length;
              T !== R;
              T++
            ) {
              var k = q.shapes[T],
                N = k.position,
                V = k.angle,
                G = this.defaultContactMaterial
              if (I.material && k.material) {
                var U = this.getContactMaterial(
                  I.material,
                  k.material,
                )
                U && (G = U)
              }
              this.runNarrowphase(
                l,
                L,
                I,
                O,
                F,
                q,
                k,
                N,
                V,
                G,
                this.frictionGravity,
              )
            }
        for (y = 0; y !== a; y++) {
          ;(H = r[y])._wakeUpAfterNarrowphase &&
            (H.wakeUp(), (H._wakeUpAfterNarrowphase = !1))
        }
        if (this.has("endContact")) {
          this.overlapKeeper.getEndOverlaps(P)
          var D = this.endContactEvent
          for (T = P.length; T--; ) {
            var Y = P[T]
            ;(D.shapeA = Y.shapeA),
              (D.shapeB = Y.shapeB),
              (D.bodyA = Y.bodyA),
              (D.bodyB = Y.bodyB),
              this.emit(D)
          }
          P.length = 0
        }
        var W = this.preSolveEvent
        ;(W.contactEquations = l.contactEquations),
          (W.frictionEquations = l.frictionEquations),
          this.emit(W),
          (W.contactEquations = W.frictionEquations = null)
        S = u.length
        for (y = 0; y !== S; y++) u[y].update()
        if (
          l.contactEquations.length ||
          l.frictionEquations.length ||
          S
        )
          if (this.islandSplit) {
            for (
              f.equations.length = 0,
                v.appendArray(f.equations, l.contactEquations),
                v.appendArray(f.equations, l.frictionEquations),
                y = 0;
              y !== S;
              y++
            )
              v.appendArray(f.equations, u[y].equations)
            f.split(this)
            for (y = 0; y !== f.islands.length; y++) {
              ;(K = f.islands[y]).equations.length &&
                n.solveIsland(e, K)
            }
          } else {
            for (
              n.addEquations(l.contactEquations),
                n.addEquations(l.frictionEquations),
                y = 0;
              y !== S;
              y++
            )
              n.addEquations(u[y].equations)
            this.solveConstraints && n.solve(e, this),
              n.removeAllEquations()
          }
        for (y = 0; y !== a; y++) {
          var H
          ;(H = r[y]).integrate(e)
        }
        for (y = 0; y !== a; y++) r[y].setZeroForce()
        if (this.emitImpactEvent && this.has("impact")) {
          var z = this.impactEvent
          for (y = 0; y !== l.contactEquations.length; y++) {
            var X = l.contactEquations[y]
            X.firstImpact &&
              ((z.bodyA = X.bodyA),
              (z.bodyB = X.bodyB),
              (z.shapeA = X.shapeA),
              (z.shapeB = X.shapeB),
              (z.contactEquation = X),
              this.emit(z))
          }
        }
        if (this.sleepMode === _.BODY_SLEEPING)
          for (y = 0; y !== a; y++) r[y].sleepTick(this.time, !1, e)
        else if (
          this.sleepMode === _.ISLAND_SLEEPING &&
          this.islandSplit
        ) {
          for (y = 0; y !== a; y++) r[y].sleepTick(this.time, !0, e)
          for (y = 0; y < this.islandManager.islands.length; y++) {
            var K
            ;(K = this.islandManager.islands[y]).wantsToSleep() &&
              K.sleep()
          }
        }
        this.stepping = !1
        var Z = this.bodiesToBeRemoved
        for (y = 0; y !== Z.length; y++) this.removeBody(Z[y])
        ;(Z.length = 0), this.emit(this.postStepEvent)
      }),
        (_.prototype.runNarrowphase = function(
          e,
          t,
          o,
          r,
          i,
          n,
          a,
          c,
          l,
          u,
          p,
        ) {
          if (
            0 != (o.collisionGroup & a.collisionMask) &&
            0 != (a.collisionGroup & o.collisionMask)
          ) {
            s.rotate(A, r, t.angle),
              s.rotate(E, c, n.angle),
              s.add(A, A, t.position),
              s.add(E, E, n.position)
            var h,
              f = i + t.angle,
              m = l + n.angle
            ;(e.enableFriction = u.friction > 0),
              (e.frictionCoefficient = u.friction),
              (h =
                t.type === d.STATIC || t.type === d.KINEMATIC
                  ? n.mass
                  : n.type === d.STATIC || n.type === d.KINEMATIC
                    ? t.mass
                    : t.mass * n.mass / (t.mass + n.mass)),
              (e.slipForce = u.friction * p * h),
              (e.restitution = u.restitution),
              (e.surfaceVelocity = u.surfaceVelocity),
              (e.frictionStiffness = u.frictionStiffness),
              (e.frictionRelaxation = u.frictionRelaxation),
              (e.stiffness = u.stiffness),
              (e.relaxation = u.relaxation),
              (e.contactSkinSize = u.contactSkinSize),
              (e.enabledEquations =
                t.collisionResponse &&
                n.collisionResponse &&
                o.collisionResponse &&
                a.collisionResponse)
            var y = e[o.type | a.type],
              v = 0
            if (y) {
              var b = o.sensor || a.sensor,
                j = e.frictionEquations.length
              v =
                o.type < a.type
                  ? y.call(e, t, o, A, f, n, a, E, m, b)
                  : y.call(e, n, a, E, m, t, o, A, f, b)
              var _ = e.frictionEquations.length - j
              if (v) {
                if (
                  t.allowSleep &&
                  t.type === d.DYNAMIC &&
                  t.sleepState === d.SLEEPING &&
                  n.sleepState === d.AWAKE &&
                  n.type !== d.STATIC
                )
                  s.squaredLength(n.velocity) +
                    Math.pow(n.angularVelocity, 2) >=
                    2 * Math.pow(n.sleepSpeedLimit, 2) &&
                    (t._wakeUpAfterNarrowphase = !0)
                if (
                  n.allowSleep &&
                  n.type === d.DYNAMIC &&
                  n.sleepState === d.SLEEPING &&
                  t.sleepState === d.AWAKE &&
                  t.type !== d.STATIC
                )
                  s.squaredLength(t.velocity) +
                    Math.pow(t.angularVelocity, 2) >=
                    2 * Math.pow(t.sleepSpeedLimit, 2) &&
                    (n._wakeUpAfterNarrowphase = !0)
                if (
                  (this.overlapKeeper.setOverlapping(t, o, n, a),
                  this.has("beginContact") &&
                    this.overlapKeeper.isNewOverlap(o, a))
                ) {
                  var g = this.beginContactEvent
                  if (
                    ((g.shapeA = o),
                    (g.shapeB = a),
                    (g.bodyA = t),
                    (g.bodyB = n),
                    (g.contactEquations.length = 0),
                    "number" == typeof v)
                  )
                    for (
                      var P = e.contactEquations.length - v;
                      P < e.contactEquations.length;
                      P++
                    )
                      g.contactEquations.push(e.contactEquations[P])
                  this.emit(g)
                }
                if ("number" == typeof v && _ > 1)
                  for (
                    P = e.frictionEquations.length - _;
                    P < e.frictionEquations.length;
                    P++
                  ) {
                    var w = e.frictionEquations[P]
                    w.setSlipForce(w.getSlipForce() / _)
                  }
              }
            }
          }
        }),
        (_.prototype.addSpring = function(e) {
          this.springs.push(e)
          var t = this.addSpringEvent
          ;(t.spring = e), this.emit(t), (t.spring = null)
        }),
        (_.prototype.removeSpring = function(e) {
          var t = this.springs.indexOf(e)
          ;-1 !== t && v.splice(this.springs, t, 1)
        }),
        (_.prototype.addBody = function(e) {
          if (-1 === this.bodies.indexOf(e)) {
            this.bodies.push(e), (e.world = this)
            var t = this.addBodyEvent
            ;(t.body = e), this.emit(t), (t.body = null)
          }
        }),
        (_.prototype.removeBody = function(e) {
          if (this.stepping) this.bodiesToBeRemoved.push(e)
          else {
            e.world = null
            var t = this.bodies.indexOf(e)
            ;-1 !== t &&
              (v.splice(this.bodies, t, 1),
              (this.removeBodyEvent.body = e),
              e.resetConstraintVelocity(),
              this.emit(this.removeBodyEvent),
              (this.removeBodyEvent.body = null))
          }
        }),
        (_.prototype.getBodyById = function(e) {
          for (var t = this.bodies, o = 0; o < t.length; o++) {
            var r = t[o]
            if (r.id === e) return r
          }
          return !1
        }),
        (_.prototype.disableBodyCollision = function(e, t) {
          this.disabledBodyCollisionPairs.push(e, t)
        }),
        (_.prototype.enableBodyCollision = function(e, t) {
          for (
            var o = this.disabledBodyCollisionPairs, r = 0;
            r < o.length;
            r += 2
          )
            if (
              (o[r] === e && o[r + 1] === t) ||
              (o[r + 1] === e && o[r] === t)
            )
              return void o.splice(r, 2)
        }),
        (_.prototype.clear = function() {
          ;(this.time = 0),
            this.solver &&
              this.solver.equations.length &&
              this.solver.removeAllEquations()
          for (
            var e = this.constraints, t = e.length - 1;
            t >= 0;
            t--
          )
            this.removeConstraint(e[t])
          var o = this.bodies
          for (t = o.length - 1; t >= 0; t--) this.removeBody(o[t])
          var r = this.springs
          for (t = r.length - 1; t >= 0; t--) this.removeSpring(r[t])
          var s = this.contactMaterials
          for (t = s.length - 1; t >= 0; t--)
            this.removeContactMaterial(s[t])
          _.apply(this)
        })
      var w = s.create(),
        S = (s.fromValues(0, 0), s.fromValues(0, 0))
      ;(_.prototype.hitTest = function(e, t, o) {
        o = o || 0
        var r = new d({ position: e }),
          u = new l(),
          p = e,
          h = w,
          f = S
        r.addShape(u)
        for (
          var m = this.narrowphase, y = [], v = 0, b = t.length;
          v !== b;
          v++
        )
          for (
            var j = t[v], _ = 0, g = j.shapes.length;
            _ !== g;
            _++
          ) {
            var A = j.shapes[_]
            s.rotate(h, A.position, j.angle), s.add(h, h, j.position)
            var E = A.angle + j.angle
            ;((A instanceof i &&
              m.circleParticle(j, A, h, E, r, u, p, 0, !0)) ||
              (A instanceof n &&
                m.particleConvex(r, u, p, 0, j, A, h, E, !0)) ||
              (A instanceof a &&
                m.particlePlane(r, u, p, 0, j, A, h, E, !0)) ||
              (A instanceof c &&
                m.particleCapsule(r, u, p, 0, j, A, h, E, !0)) ||
              (A instanceof l &&
                s.squaredLength(s.sub(f, h, e)) < o * o)) &&
              y.push(j)
          }
        return y
      }),
        (_.prototype.setGlobalStiffness = function(e) {
          for (var t = this.constraints, o = 0; o !== t.length; o++)
            for (var r = t[o], s = 0; s !== r.equations.length; s++) {
              var i = r.equations[s]
              ;(i.stiffness = e), (i.needsUpdate = !0)
            }
          var n = this.contactMaterials
          for (o = 0; o !== n.length; o++) {
            ;(r = n[o]).stiffness = r.frictionStiffness = e
          }
          ;(r = this
            .defaultContactMaterial).stiffness = r.frictionStiffness = e
        }),
        (_.prototype.setGlobalRelaxation = function(e) {
          for (var t = 0; t !== this.constraints.length; t++)
            for (
              var o = this.constraints[t], r = 0;
              r !== o.equations.length;
              r++
            ) {
              var s = o.equations[r]
              ;(s.relaxation = e), (s.needsUpdate = !0)
            }
          for (t = 0; t !== this.contactMaterials.length; t++) {
            ;(o = this.contactMaterials[
              t
            ]).relaxation = o.frictionRelaxation = e
          }
          ;(o = this
            .defaultContactMaterial).relaxation = o.frictionRelaxation = e
        })
      var B = new f(),
        x = []
      _.prototype.raycast = function(e, t) {
        return (
          t.getAABB(B),
          this.broadphase.aabbQuery(this, B, x),
          t.intersectBodies(e, x),
          (x.length = 0),
          e.hasHit()
        )
      }
    },
    "./node_modules/poly-decomp/src/Line.js": function(e, t, o) {
      var r = o("./node_modules/poly-decomp/src/Scalar.js")
      function s() {}
      ;(e.exports = s),
        (s.lineInt = function(e, t, o) {
          o = o || 0
          var s,
            i,
            n,
            a,
            c,
            l,
            u,
            d = [0, 0]
          return (
            (s = e[1][1] - e[0][1]),
            (i = e[0][0] - e[1][0]),
            (n = s * e[0][0] + i * e[0][1]),
            (a = t[1][1] - t[0][1]),
            (c = t[0][0] - t[1][0]),
            (l = a * t[0][0] + c * t[0][1]),
            (u = s * c - a * i),
            r.eq(u, 0, o) ||
              ((d[0] = (c * n - i * l) / u),
              (d[1] = (s * l - a * n) / u)),
            d
          )
        }),
        (s.segmentsIntersect = function(e, t, o, r) {
          var s = t[0] - e[0],
            i = t[1] - e[1],
            n = r[0] - o[0],
            a = r[1] - o[1]
          if (n * i - a * s == 0) return !1
          var c =
              (s * (o[1] - e[1]) + i * (e[0] - o[0])) /
              (n * i - a * s),
            l =
              (n * (e[1] - o[1]) + a * (o[0] - e[0])) /
              (a * s - n * i)
          return c >= 0 && c <= 1 && l >= 0 && l <= 1
        })
    },
    "./node_modules/poly-decomp/src/Point.js": function(e, t) {
      function o() {}
      ;(e.exports = o),
        (o.area = function(e, t, o) {
          return (
            (t[0] - e[0]) * (o[1] - e[1]) -
            (o[0] - e[0]) * (t[1] - e[1])
          )
        }),
        (o.left = function(e, t, r) {
          return o.area(e, t, r) > 0
        }),
        (o.leftOn = function(e, t, r) {
          return o.area(e, t, r) >= 0
        }),
        (o.right = function(e, t, r) {
          return o.area(e, t, r) < 0
        }),
        (o.rightOn = function(e, t, r) {
          return o.area(e, t, r) <= 0
        })
      var r = [],
        s = []
      ;(o.collinear = function(e, t, i, n) {
        if (n) {
          var a = r,
            c = s
          ;(a[0] = t[0] - e[0]),
            (a[1] = t[1] - e[1]),
            (c[0] = i[0] - t[0]),
            (c[1] = i[1] - t[1])
          var l = a[0] * c[0] + a[1] * c[1],
            u = Math.sqrt(a[0] * a[0] + a[1] * a[1]),
            d = Math.sqrt(c[0] * c[0] + c[1] * c[1])
          return Math.acos(l / (u * d)) < n
        }
        return 0 == o.area(e, t, i)
      }),
        (o.sqdist = function(e, t) {
          var o = t[0] - e[0],
            r = t[1] - e[1]
          return o * o + r * r
        })
    },
    "./node_modules/poly-decomp/src/Polygon.js": function(e, t, o) {
      var r = o("./node_modules/poly-decomp/src/Line.js"),
        s = o("./node_modules/poly-decomp/src/Point.js"),
        i = o("./node_modules/poly-decomp/src/Scalar.js")
      function n() {
        this.vertices = []
      }
      ;(e.exports = n),
        (n.prototype.at = function(e) {
          var t = this.vertices,
            o = t.length
          return t[e < 0 ? e % o + o : e % o]
        }),
        (n.prototype.first = function() {
          return this.vertices[0]
        }),
        (n.prototype.last = function() {
          return this.vertices[this.vertices.length - 1]
        }),
        (n.prototype.clear = function() {
          this.vertices.length = 0
        }),
        (n.prototype.append = function(e, t, o) {
          if (void 0 === t) throw new Error("From is not given!")
          if (void 0 === o) throw new Error("To is not given!")
          if (o - 1 < t) throw new Error("lol1")
          if (o > e.vertices.length) throw new Error("lol2")
          if (t < 0) throw new Error("lol3")
          for (var r = t; r < o; r++)
            this.vertices.push(e.vertices[r])
        }),
        (n.prototype.makeCCW = function() {
          for (
            var e = 0, t = this.vertices, o = 1;
            o < this.vertices.length;
            ++o
          )
            (t[o][1] < t[e][1] ||
              (t[o][1] == t[e][1] && t[o][0] > t[e][0])) &&
              (e = o)
          s.left(this.at(e - 1), this.at(e), this.at(e + 1)) ||
            this.reverse()
        }),
        (n.prototype.reverse = function() {
          for (
            var e = [], t = 0, o = this.vertices.length;
            t !== o;
            t++
          )
            e.push(this.vertices.pop())
          this.vertices = e
        }),
        (n.prototype.isReflex = function(e) {
          return s.right(this.at(e - 1), this.at(e), this.at(e + 1))
        })
      var a = [],
        c = []
      function l(e, t, o, r, s) {
        s = s || 0
        var n = t[1] - e[1],
          a = e[0] - t[0],
          c = n * e[0] + a * e[1],
          l = r[1] - o[1],
          u = o[0] - r[0],
          d = l * o[0] + u * o[1],
          p = n * u - l * a
        return i.eq(p, 0, s)
          ? [0, 0]
          : [(u * c - a * d) / p, (n * d - l * c) / p]
      }
      ;(n.prototype.canSee = function(e, t) {
        var o,
          i,
          n = a,
          l = c
        if (
          s.leftOn(this.at(e + 1), this.at(e), this.at(t)) &&
          s.rightOn(this.at(e - 1), this.at(e), this.at(t))
        )
          return !1
        i = s.sqdist(this.at(e), this.at(t))
        for (var u = 0; u !== this.vertices.length; ++u)
          if (
            (u + 1) % this.vertices.length !== e &&
            u !== e &&
            s.leftOn(this.at(e), this.at(t), this.at(u + 1)) &&
            s.rightOn(this.at(e), this.at(t), this.at(u)) &&
            ((n[0] = this.at(e)),
            (n[1] = this.at(t)),
            (l[0] = this.at(u)),
            (l[1] = this.at(u + 1)),
            (o = r.lineInt(n, l)),
            s.sqdist(this.at(e), o) < i)
          )
            return !1
        return !0
      }),
        (n.prototype.copy = function(e, t, o) {
          var r = o || new n()
          if ((r.clear(), e < t))
            for (var s = e; s <= t; s++)
              r.vertices.push(this.vertices[s])
          else {
            for (s = 0; s <= t; s++) r.vertices.push(this.vertices[s])
            for (s = e; s < this.vertices.length; s++)
              r.vertices.push(this.vertices[s])
          }
          return r
        }),
        (n.prototype.getCutEdges = function() {
          for (
            var e = [],
              t = [],
              o = [],
              r = new n(),
              s = Number.MAX_VALUE,
              i = 0;
            i < this.vertices.length;
            ++i
          )
            if (this.isReflex(i))
              for (var a = 0; a < this.vertices.length; ++a)
                if (this.canSee(i, a)) {
                  ;(t = this.copy(i, a, r).getCutEdges()),
                    (o = this.copy(a, i, r).getCutEdges())
                  for (var c = 0; c < o.length; c++) t.push(o[c])
                  t.length < s &&
                    ((e = t),
                    (s = t.length),
                    e.push([this.at(i), this.at(a)]))
                }
          return e
        }),
        (n.prototype.decomp = function() {
          var e = this.getCutEdges()
          return e.length > 0 ? this.slice(e) : [this]
        }),
        (n.prototype.slice = function(e) {
          if (0 == e.length) return [this]
          if (
            e instanceof Array &&
            e.length &&
            e[0] instanceof Array &&
            2 == e[0].length &&
            e[0][0] instanceof Array
          ) {
            for (var t = [this], o = 0; o < e.length; o++)
              for (var r = e[o], s = 0; s < t.length; s++) {
                var i = t[s].slice(r)
                if (i) {
                  t.splice(s, 1), t.push(i[0], i[1])
                  break
                }
              }
            return t
          }
          ;(r = e),
            (o = this.vertices.indexOf(r[0])),
            (s = this.vertices.indexOf(r[1]))
          return (
            -1 != o && -1 != s && [this.copy(o, s), this.copy(s, o)]
          )
        }),
        (n.prototype.isSimple = function() {
          for (var e = this.vertices, t = 0; t < e.length - 1; t++)
            for (var o = 0; o < t - 1; o++)
              if (r.segmentsIntersect(e[t], e[t + 1], e[o], e[o + 1]))
                return !1
          for (t = 1; t < e.length - 2; t++)
            if (
              r.segmentsIntersect(
                e[0],
                e[e.length - 1],
                e[t],
                e[t + 1],
              )
            )
              return !1
          return !0
        }),
        (n.prototype.quickDecomp = function(e, t, o, r, i, a) {
          ;(i = i || 100),
            (a = a || 0),
            (r = r || 25),
            (e = void 0 !== e ? e : []),
            (t = t || []),
            (o = o || [])
          var c = [0, 0],
            u = [0, 0],
            d = [0, 0],
            p = 0,
            h = 0,
            f = 0,
            m = 0,
            y = 0,
            v = 0,
            b = 0,
            j = new n(),
            _ = new n(),
            g = this.vertices
          if (g.length < 3) return e
          if (++a > i)
            return (
              console.warn(
                "quickDecomp: max level (" + i + ") reached.",
              ),
              e
            )
          for (var A = 0; A < this.vertices.length; ++A)
            if (this.isReflex(A)) {
              t.push(this.vertices[A]), (p = h = Number.MAX_VALUE)
              for (var E = 0; E < this.vertices.length; ++E)
                s.left(this.at(A - 1), this.at(A), this.at(E)) &&
                  s.rightOn(
                    this.at(A - 1),
                    this.at(A),
                    this.at(E - 1),
                  ) &&
                  ((d = l(
                    this.at(A - 1),
                    this.at(A),
                    this.at(E),
                    this.at(E - 1),
                  )),
                  s.right(this.at(A + 1), this.at(A), d) &&
                    (f = s.sqdist(this.vertices[A], d)) < h &&
                    ((h = f), (u = d), (v = E))),
                  s.left(
                    this.at(A + 1),
                    this.at(A),
                    this.at(E + 1),
                  ) &&
                    s.rightOn(
                      this.at(A + 1),
                      this.at(A),
                      this.at(E),
                    ) &&
                    ((d = l(
                      this.at(A + 1),
                      this.at(A),
                      this.at(E),
                      this.at(E + 1),
                    )),
                    s.left(this.at(A - 1), this.at(A), d) &&
                      (f = s.sqdist(this.vertices[A], d)) < p &&
                      ((p = f), (c = d), (y = E)))
              if (v == (y + 1) % this.vertices.length)
                (d[0] = (u[0] + c[0]) / 2),
                  (d[1] = (u[1] + c[1]) / 2),
                  o.push(d),
                  A < y
                    ? (j.append(this, A, y + 1),
                      j.vertices.push(d),
                      _.vertices.push(d),
                      0 != v &&
                        _.append(this, v, this.vertices.length),
                      _.append(this, 0, A + 1))
                    : (0 != A &&
                        j.append(this, A, this.vertices.length),
                      j.append(this, 0, y + 1),
                      j.vertices.push(d),
                      _.vertices.push(d),
                      _.append(this, v, A + 1))
              else {
                if (
                  (v > y && (y += this.vertices.length),
                  (m = Number.MAX_VALUE),
                  y < v)
                )
                  return e
                for (E = v; E <= y; ++E)
                  s.leftOn(this.at(A - 1), this.at(A), this.at(E)) &&
                    s.rightOn(
                      this.at(A + 1),
                      this.at(A),
                      this.at(E),
                    ) &&
                    (f = s.sqdist(this.at(A), this.at(E))) < m &&
                    ((m = f), (b = E % this.vertices.length))
                A < b
                  ? (j.append(this, A, b + 1),
                    0 != b && _.append(this, b, g.length),
                    _.append(this, 0, A + 1))
                  : (0 != A && j.append(this, A, g.length),
                    j.append(this, 0, b + 1),
                    _.append(this, b, A + 1))
              }
              return (
                j.vertices.length < _.vertices.length
                  ? (j.quickDecomp(e, t, o, r, i, a),
                    _.quickDecomp(e, t, o, r, i, a))
                  : (_.quickDecomp(e, t, o, r, i, a),
                    j.quickDecomp(e, t, o, r, i, a)),
                e
              )
            }
          return e.push(this), e
        }),
        (n.prototype.removeCollinearPoints = function(e) {
          for (
            var t = 0, o = this.vertices.length - 1;
            this.vertices.length > 3 && o >= 0;
            --o
          )
            s.collinear(
              this.at(o - 1),
              this.at(o),
              this.at(o + 1),
              e,
            ) &&
              (this.vertices.splice(o % this.vertices.length, 1),
              o--,
              t++)
          return t
        })
    },
    "./node_modules/poly-decomp/src/Scalar.js": function(e, t) {
      function o() {}
      ;(e.exports = o),
        (o.eq = function(e, t, o) {
          return (o = o || 0), Math.abs(e - t) < o
        })
    },
    "./node_modules/poly-decomp/src/index.js": function(e, t, o) {
      e.exports = {
        Polygon: o("./node_modules/poly-decomp/src/Polygon.js"),
        Point: o("./node_modules/poly-decomp/src/Point.js"),
      }
    },
    "./src/index.js": function(e, t, o) {
      "use strict"
      var r = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        )
      Object.defineProperty(t, "__esModule", { value: !0 })
      var i = {
        Protocol: !0,
        Loop: !0,
        Players: !0,
        Physics: !0,
        Ships: !0,
        reducers: !0,
      }
      Object.defineProperty(t, "reducers", {
        enumerable: !0,
        get: function() {
          return p.default
        },
      }),
        (t.Ships = t.Physics = t.Players = t.Loop = t.Protocol = void 0)
      var n = s(o("./src/protocol/index.js"))
      t.Protocol = n
      var a = s(o("./src/modules/loop/index.js"))
      t.Loop = a
      var c = s(o("./src/modules/players/index.js"))
      t.Players = c
      var l = s(o("./src/modules/physics/index.js"))
      t.Physics = l
      var u = s(o("./src/modules/ships/index.js"))
      t.Ships = u
      var d = o("./src/selectors/index.js")
      Object.keys(d).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(i, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function() {
                return d[e]
              },
            }))
      })
      var p = r(o("./src/reducers.js"))
    },
    "./src/model/auth.js": function(e, t, o) {
      "use strict"
    },
    "./src/model/index.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = o("./src/model/auth.js")
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
      var s = o("./src/model/input.js")
      Object.keys(s).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return s[e]
            },
          })
      })
      var i = o("./src/model/player.js")
      Object.keys(i).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return i[e]
            },
          })
      })
      var n = o("./src/model/physics.js")
      Object.keys(n).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return n[e]
            },
          })
      })
      var a = o("./src/model/ship.js")
      Object.keys(a).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return a[e]
            },
          })
      })
    },
    "./src/model/input.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TURN_DIRECTION = t.THRUST_DIRECTION = void 0)
      var r = Object.freeze({ forwards: 0, backwards: 1 })
      t.THRUST_DIRECTION = r
      var s = Object.freeze({ left: 0, right: 1 })
      t.TURN_DIRECTION = s
    },
    "./src/model/physics.js": function(e, t, o) {
      "use strict"
    },
    "./src/model/player.js": function(e, t, o) {
      "use strict"
    },
    "./src/model/ship.js": function(e, t, o) {
      "use strict"
    },
    "./src/modules/loop/index.js": function(e, t, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.startLoop = function() {
          return { type: a }
        }),
        (t.tickLoop = u),
        (t.pauseLoop = function() {
          return { type: l }
        }),
        (t.default = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : d
          switch ((arguments.length > 1 ? arguments[1] : void 0)
            .type) {
            case a:
              return (0, n.default)({}, e, { running: !0 })
            case c:
              return (0, n.default)({}, e, { frame: e.frame + 1 })
            case l:
              return (0, n.default)({}, e, { running: !1 })
            default:
              return e
          }
        }),
        (t.createMiddleware = function(e) {
          return function(t) {
            var o,
              r = ((o = (0, i.default)(
                s.default.mark(function o() {
                  var i,
                    n,
                    a = arguments
                  return s.default.wrap(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              ((i =
                                a.length > 0 && void 0 !== a[0]
                                  ? a[0]
                                  : 0),
                              (n = t.getState()),
                              !n.loop.running)
                            ) {
                              o.next = 7
                              break
                            }
                            return t.dispatch(u(i)), (o.next = 6), e()
                          case 6:
                            r()
                          case 7:
                          case "end":
                            return o.stop()
                        }
                    },
                    o,
                    this,
                  )
                }),
              )),
              function() {
                return o.apply(this, arguments)
              })
            return function(e) {
              return function(o) {
                var s = t.getState(),
                  i = s.loop.running,
                  n = e(o)
                switch (o.type) {
                  case a:
                    i || r()
                }
                return n
              }
            }
          }
        }),
        (t.LOOP_PAUSE = t.LOOP_TICK = t.LOOP_START = void 0)
      var s = r(
          o("../../node_modules/@babel/runtime/regenerator/index.js"),
        ),
        i = r(
          o(
            "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js",
          ),
        ),
        n = r(
          o(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        a = "loop/start!"
      t.LOOP_START = a
      var c = "loop/tick"
      t.LOOP_TICK = c
      var l = "loop/pause"
      function u(e) {
        return { type: c, payload: { dt: e } }
      }
      t.LOOP_PAUSE = l
      var d = { frame: -1, running: !1 }
    },
    "./src/modules/physics/index.js": function(e, t, o) {
      "use strict"
      var r = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addBody = function(e) {
          return { type: c, payload: { body: e } }
        }),
        (t.rotateBody = function(e, t) {
          return { type: u, payload: { bodyId: e, angle: t } }
        }),
        (t.updateBody = d),
        (t.default = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case c:
              return (0, n.default)({}, e, {
                byId: (0, n.default)(
                  {},
                  e.byId,
                  (0, i.default)(
                    {},
                    t.payload.body.id,
                    t.payload.body,
                  ),
                ),
              })
            case l:
              return (0, n.default)({}, e, {
                byId: (0, n.default)(
                  {},
                  e.byId,
                  (0, i.default)(
                    {},
                    t.payload.body.id,
                    (0, n.default)(
                      {},
                      p(e, t.payload.body.id),
                      t.payload.body,
                    ),
                  ),
                ),
              })
            default:
              return e
          }
        }),
        (t.createMiddleware = function(e) {
          return function(t) {
            return function(t) {
              return function(o) {
                switch (o.type) {
                  case u:
                    var r = o.payload,
                      s = r.bodyId,
                      i = r.angle
                    e.rotateBody(s, i).then(function(e) {
                      t(d(e))
                    })
                }
                return t(o)
              }
            }
          }
        }),
        (t.P2Driver = t.getBody = t.PHYSICS_ROTATE_BODY = t.PHYSICS_UPDATE_BODY = t.PHYSICS_ADD_BODY = void 0)
      var i = s(
          o(
            "../../node_modules/@babel/runtime/helpers/defineProperty.js",
          ),
        ),
        n = s(
          o(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        a = r(o("./src/modules/physics/p2-driver.js"))
      t.P2Driver = a
      var c = "physics/add_body"
      t.PHYSICS_ADD_BODY = c
      var l = "physics/update_body"
      t.PHYSICS_UPDATE_BODY = l
      var u = "physics/rotate_body!"
      function d(e) {
        return { type: l, payload: { body: e } }
      }
      t.PHYSICS_ROTATE_BODY = u
      var p = function(e, t) {
        return e[t]
      }
      t.getBody = p
      var h = { byId: {} }
    },
    "./src/modules/physics/p2-driver.js": function(e, t, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.create = void 0)
      var s = r(
          o("../../node_modules/@babel/runtime/regenerator/index.js"),
        ),
        i = r(
          o(
            "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js",
          ),
        ),
        n = r(o("./node_modules/p2/src/p2.js")),
        a = function(e, t) {
          return {
            id: e,
            angle: t.angle,
            angularVelocity: t.angularVelocity,
            mass: t.mass,
            position: t.position,
            velocity: t.velocity,
            width: t.width,
            height: t.height,
          }
        }
      t.create = function(e) {
        var t = e.gravity,
          o = {},
          r = new n.default.World({
            gravity: t,
            sleepMode: n.default.World.BODY_SLEEPING,
          })
        return {
          addBody: ((l = (0, i.default)(
            s.default.mark(function e(t, i) {
              var c, l, u, d, p, h, f, m, y
              return s.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!o[t]) {
                          e.next = 2
                          break
                        }
                        throw new Error(
                          "Cannot add body with id ".concat(
                            t,
                            ": id already exists.",
                          ),
                        )
                      case 2:
                        return (
                          (c = i.angle),
                          (l = i.angularVelocity),
                          (u = i.mass),
                          (d = i.position),
                          (p = i.velocity),
                          (h = i.width),
                          (f = i.height),
                          (m = new n.default.Box({
                            width: h,
                            height: f,
                          })),
                          (y = new n.default.Body({
                            angle: c,
                            angularVelocity: l,
                            mass: u,
                            position: d,
                            velocity: p,
                          })).addShape(m),
                          r.addBody(y),
                          (o[t] = y),
                          e.abrupt("return", a(t, y))
                        )
                      case 9:
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
            return l.apply(this, arguments)
          }),
          rotateBody: ((c = (0, i.default)(
            s.default.mark(function e(t, r) {
              var i
              return s.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((i = o[t])) {
                          e.next = 3
                          break
                        }
                        throw new Error(
                          "Cannot update body with id ".concat(
                            t,
                            ": body does not exist.",
                          ),
                        )
                      case 3:
                        return (
                          (i.angle = r), e.abrupt("return", a(t, i))
                        )
                      case 5:
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
            return c.apply(this, arguments)
          }),
        }
        var c
        var l
      }
    },
    "./src/modules/players/index.js": function(e, t, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addPlayer = function(e) {
          return { type: n, payload: { player: e } }
        }),
        (t.updatePlayer = function(e) {
          return { type: a, payload: { player: e } }
        }),
        (t.default = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : c,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case n:
              var o = t.payload.player,
                r = (0, i.default)(
                  {},
                  e.byId,
                  (0, s.default)({}, o.id, o),
                ),
                u = e.byActiveShipId
              return (
                o.activeShipId &&
                  (u = (0, i.default)(
                    {},
                    e.byActiveShipId,
                    (0, s.default)({}, o.activeShipId, o),
                  )),
                { byId: r, byActiveShipId: u }
              )
            case a:
              var d = t.payload.player.id,
                p = (0, i.default)({}, l(e, d), t.payload.player),
                h = (0, i.default)(
                  {},
                  e.byId,
                  (0, s.default)({}, p.id, p),
                ),
                f = e.byActiveShipId
              return (
                p.activeShipId &&
                  (f = (0, i.default)(
                    {},
                    e.byActiveShipId,
                    (0, s.default)({}, p.activeShipId, p),
                  )),
                { byId: h, byActiveShipId: f }
              )
            default:
              return e
          }
        }),
        (t.getPlayerByActiveShipId = t.getPlayer = t.getPlayers = t.PLAYER_UPDATE = t.PLAYER_ADD = void 0)
      var s = r(
          o(
            "../../node_modules/@babel/runtime/helpers/defineProperty.js",
          ),
        ),
        i = r(
          o(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        n = "player/add"
      t.PLAYER_ADD = n
      var a = "player/update"
      t.PLAYER_UPDATE = a
      var c = { byId: {}, byActiveShipId: {} }
      t.getPlayers = function(e) {
        return e.byId
      }
      var l = function(e, t) {
        return e.byId[t]
      }
      t.getPlayer = l
      t.getPlayerByActiveShipId = function(e, t) {
        return e.byActiveShipId[t]
      }
    },
    "./src/modules/ships/index.js": function(e, t, o) {
      "use strict"
      var r = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addShip = function(e) {
          return { type: u, payload: { ship: e } }
        }),
        (t.turnShip = function(e, t) {
          return { type: p, payload: { shipId: e, direction: t } }
        }),
        (t.default = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case u:
              var o = t.payload.ship
              return (0, n.default)({}, e, {
                byId: (0, n.default)(
                  {},
                  e.byId,
                  (0, i.default)({}, o.id, o),
                ),
              })
            case d:
              var r = t.payload.ship
              return (0, n.default)({}, e, {
                byId: (0, n.default)(
                  {},
                  e.byId,
                  (0, i.default)(
                    {},
                    r.id,
                    (0, n.default)({}, f(e, r.id), r),
                  ),
                ),
              })
            default:
              return e
          }
        }),
        (t.createMiddleware = function() {
          return function(e) {
            return function(t) {
              return function(o) {
                var r = t(o)
                switch (o.type) {
                  case p:
                    var s = o.payload,
                      i = s.shipId,
                      n = s.direction,
                      u = (0, c.getShipBody)(e.getState(), i)
                    u &&
                      e.dispatch(
                        l.rotateBody(
                          u.id,
                          n === a.TURN_DIRECTION.left ? 0.05 : -0.05,
                        ),
                      )
                }
                return r
              }
            }
          }
        }),
        (t.getShip = t.SHIP_TURN = t.SHIP_UPDATE = t.SHIP_ADD = void 0)
      var i = s(
          o(
            "../../node_modules/@babel/runtime/helpers/defineProperty.js",
          ),
        ),
        n = s(
          o(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        a = o("./src/model/index.js"),
        c = o("./src/selectors/index.js"),
        l = r(o("./src/modules/physics/index.js")),
        u = "ship/add"
      t.SHIP_ADD = u
      var d = "ship/update"
      t.SHIP_UPDATE = d
      var p = "ship/turn!"
      t.SHIP_TURN = p
      var h = { byId: {} }
      var f = function(e, t) {
        return e.byId[t]
      }
      t.getShip = f
    },
    "./src/protocol/client/auth.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.authLogin = void 0)
      var r = o("./src/protocol/client/message-types.js")
      t.authLogin = function(e) {
        return [r.MESSAGE_TYPE_AUTH_LOGIN, e]
      }
    },
    "./src/protocol/client/index.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = o("./src/protocol/client/message-types.js")
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
      var s = o("./src/protocol/client/auth.js")
      Object.keys(s).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return s[e]
            },
          })
      })
      var i = o("./src/protocol/client/input.js")
      Object.keys(i).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return i[e]
            },
          })
      })
    },
    "./src/protocol/client/input.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.inputTurnMessage = void 0)
      var r = o("./src/protocol/client/message-types.js")
      t.inputTurnMessage = function(e) {
        return [r.MESSAGE_TYPE_INPUT_TURN, e]
      }
    },
    "./src/protocol/client/message-types.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MESSAGE_TYPE_INPUT_TURN = t.MESSAGE_TYPE_AUTH_LOGIN = void 0)
      t.MESSAGE_TYPE_AUTH_LOGIN = 0
      t.MESSAGE_TYPE_INPUT_TURN = 1
    },
    "./src/protocol/index.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = o("./src/protocol/client/index.js")
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
      var s = o("./src/protocol/server/index.js")
      Object.keys(s).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return s[e]
            },
          })
      })
    },
    "./src/protocol/server/auth.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.authLoginFailureMessage = void 0)
      var r = o("./src/protocol/server/message-types.js")
      t.authLoginFailureMessage = function() {
        return [r.MESSAGE_TYPE_AUTH_LOGIN_FAILURE]
      }
    },
    "./src/protocol/server/index.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = o("./src/protocol/server/message-types.js")
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
      var s = o("./src/protocol/server/auth.js")
      Object.keys(s).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return s[e]
            },
          })
      })
      var i = o("./src/protocol/server/player.js")
      Object.keys(i).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return i[e]
            },
          })
      })
      var n = o("./src/protocol/server/ship.js")
      Object.keys(n).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return n[e]
            },
          })
      })
      var a = o("./src/protocol/server/snapshot.js")
      Object.keys(a).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return a[e]
            },
          })
      })
    },
    "./src/protocol/server/message-types.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MESSAGE_TYPE_SHIP_UPDATE = t.MESSAGE_TYPE_PLAYER_UPDATE = t.MESSAGE_TYPE_SNAPSHOT = t.MESSAGE_TYPE_AUTH_LOGIN_FAILURE = void 0)
      t.MESSAGE_TYPE_AUTH_LOGIN_FAILURE = 0
      t.MESSAGE_TYPE_SNAPSHOT = 1
      t.MESSAGE_TYPE_PLAYER_UPDATE = 2
      t.MESSAGE_TYPE_SHIP_UPDATE = 3
    },
    "./src/protocol/server/player.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.playerUpdateMessage = void 0)
      var r = o("./src/protocol/server/message-types.js")
      t.playerUpdateMessage = function(e) {
        return [r.MESSAGE_TYPE_PLAYER_UPDATE, e]
      }
    },
    "./src/protocol/server/ship.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shipUpdateMessage = void 0)
      var r = o("./src/protocol/server/message-types.js")
      t.shipUpdateMessage = function(e) {
        return [r.MESSAGE_TYPE_SHIP_UPDATE, e]
      }
    },
    "./src/protocol/server/snapshot.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.snapshotMessage = void 0)
      var r = o("./src/protocol/server/message-types.js")
      t.snapshotMessage = function(e, t) {
        return [r.MESSAGE_TYPE_SNAPSHOT, e, t]
      }
    },
    "./src/reducers.js": function(e, t, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var s = r(o("./src/modules/loop/index.js")),
        i = r(o("./src/modules/physics/index.js")),
        n = r(o("./src/modules/players/index.js")),
        a = r(o("./src/modules/ships/index.js")),
        c = {
          loop: s.default,
          physics: i.default,
          players: n.default,
          ships: a.default,
        }
      t.default = c
    },
    "./src/selectors/index.js": function(e, t, o) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPlayerBody = t.getPlayerShip = t.getShipBody = void 0)
      var r = o("./src/modules/players/index.js"),
        s = o("./src/modules/ships/index.js"),
        i = o("./src/modules/physics/index.js"),
        n = function(e, t) {
          var o = (0, s.getShip)(e.ships, t)
          return o.bodyId ? (0, i.getBody)(e.physics, o.bodyId) : null
        }
      t.getShipBody = n
      t.getPlayerShip = function(e, t) {
        var o = (0, r.getPlayer)(e.players, t).activeShipId
        return o ? (0, s.getShip)(e.ships, o) : null
      }
      t.getPlayerBody = function(e, t) {
        var o = (0, r.getPlayer)(e.players, t).activeShipId
        return o ? n(e, o) : null
      }
    },
  })
})
//# sourceMappingURL=index.js.map
