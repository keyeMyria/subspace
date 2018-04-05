!(function(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.SubspaceCore = e())
        : (t.SubspaceCore = e())
})(global, function() {
  return (function(t) {
    var e = {}
    function o(r) {
      if (e[r]) return e[r].exports
      var s = (e[r] = { i: r, l: !1, exports: {} })
      return (
        t[r].call(s.exports, s, s.exports, o), (s.l = !0), s.exports
      )
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function(t, e, r) {
        o.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r,
          })
      }),
      (o.r = function(t) {
        Object.defineProperty(t, "__esModule", { value: !0 })
      }),
      (o.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return o.d(e, "a", e), e
      }),
      (o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (o.p = ""),
      (o.w = {}),
      o((o.s = "./src/index.js"))
    )
  })({
    "../../node_modules/@babel/runtime/core-js/object/define-property.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/core-js/library/fn/object/define-property.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/keys.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/core-js/library/fn/object/keys.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/promise.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/core-js/library/fn/promise.js",
      )
    },
    "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/@babel/runtime/core-js/promise.js",
      )
      t.exports = function(t) {
        return function() {
          var e = this,
            o = arguments
          return new r(function(s, i) {
            var n = t.apply(e, o)
            function a(t, e) {
              try {
                var o = n[t](e),
                  a = o.value
              } catch (t) {
                return void i(t)
              }
              o.done ? s(a) : r.resolve(a).then(c, l)
            }
            function c(t) {
              a("next", t)
            }
            function l(t) {
              a("throw", t)
            }
            c()
          })
        }
      }
    },
    "../../node_modules/@babel/runtime/helpers/defineProperty.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/@babel/runtime/core-js/object/define-property.js",
      )
      t.exports = function(t, e, o) {
        return (
          e in t
            ? r(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = o),
          t
        )
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(
      t,
      e,
    ) {
      t.exports = function(t) {
        return t && t.__esModule ? t : { default: t }
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/core-js/object/define-property.js",
        )
      t.exports = function(t) {
        if (t && t.__esModule) return t
        var e = {}
        if (null != t)
          for (var o in t)
            if (Object.prototype.hasOwnProperty.call(t, o)) {
              var i = s && r ? r(t, o) : {}
              i.get || i.set ? s(e, o, i) : (e[o] = t[o])
            }
        return (e.default = t), e
      }
    },
    "../../node_modules/@babel/runtime/helpers/objectSpread.js": function(
      t,
      e,
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
      t.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {},
            a = i(o)
          "function" == typeof s &&
            (a = a.concat(
              s(o).filter(function(t) {
                return r(o, t).enumerable
              }),
            )),
            a.forEach(function(e) {
              n(t, e, o[e])
            })
        }
        return t
      }
    },
    "../../node_modules/@babel/runtime/regenerator/index.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/regenerator-runtime/runtime-module.js",
      )
    },
    "../../node_modules/core-js/library/fn/object/define-property.js": function(
      t,
      e,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.define-property.js",
      )
      var r = o("../../node_modules/core-js/library/modules/_core.js")
        .Object
      t.exports = function(t, e, o) {
        return r.defineProperty(t, e, o)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js": function(
      t,
      e,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
      )
      var r = o("../../node_modules/core-js/library/modules/_core.js")
        .Object
      t.exports = function(t, e) {
        return r.getOwnPropertyDescriptor(t, e)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js": function(
      t,
      e,
      o,
    ) {
      o("../../node_modules/core-js/library/modules/es6.symbol.js"),
        (t.exports = o(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.getOwnPropertySymbols)
    },
    "../../node_modules/core-js/library/fn/object/keys.js": function(
      t,
      e,
      o,
    ) {
      o(
        "../../node_modules/core-js/library/modules/es6.object.keys.js",
      ),
        (t.exports = o(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.keys)
    },
    "../../node_modules/core-js/library/fn/promise.js": function(
      t,
      e,
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
        (t.exports = o(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Promise)
    },
    "../../node_modules/core-js/library/modules/_a-function.js": function(
      t,
      e,
    ) {
      t.exports = function(t) {
        if ("function" != typeof t)
          throw TypeError(t + " is not a function!")
        return t
      }
    },
    "../../node_modules/core-js/library/modules/_add-to-unscopables.js": function(
      t,
      e,
    ) {
      t.exports = function() {}
    },
    "../../node_modules/core-js/library/modules/_an-instance.js": function(
      t,
      e,
    ) {
      t.exports = function(t, e, o, r) {
        if (!(t instanceof e) || (void 0 !== r && r in t))
          throw TypeError(o + ": incorrect invocation!")
        return t
      }
    },
    "../../node_modules/core-js/library/modules/_an-object.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!")
        return t
      }
    },
    "../../node_modules/core-js/library/modules/_array-includes.js": function(
      t,
      e,
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
      t.exports = function(t) {
        return function(e, o, n) {
          var a,
            c = r(e),
            l = s(c.length),
            u = i(n, l)
          if (t && o != o) {
            for (; l > u; ) if ((a = c[u++]) != a) return !0
          } else
            for (; l > u; u++)
              if ((t || u in c) && c[u] === o) return t || u || 0
          return !t && -1
        }
      }
    },
    "../../node_modules/core-js/library/modules/_classof.js": function(
      t,
      e,
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
      t.exports = function(t) {
        var e, o, n
        return void 0 === t
          ? "Undefined"
          : null === t
            ? "Null"
            : "string" ==
              typeof (o = (function(t, e) {
                try {
                  return t[e]
                } catch (t) {}
              })((e = Object(t)), s))
              ? o
              : i
                ? r(e)
                : "Object" == (n = r(e)) &&
                  "function" == typeof e.callee
                  ? "Arguments"
                  : n
      }
    },
    "../../node_modules/core-js/library/modules/_cof.js": function(
      t,
      e,
    ) {
      var o = {}.toString
      t.exports = function(t) {
        return o.call(t).slice(8, -1)
      }
    },
    "../../node_modules/core-js/library/modules/_core.js": function(
      t,
      e,
    ) {
      var o = (t.exports = { version: "2.5.3" })
      "number" == typeof __e && (__e = o)
    },
    "../../node_modules/core-js/library/modules/_ctx.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_a-function.js",
      )
      t.exports = function(t, e, o) {
        if ((r(t), void 0 === e)) return t
        switch (o) {
          case 1:
            return function(o) {
              return t.call(e, o)
            }
          case 2:
            return function(o, r) {
              return t.call(e, o, r)
            }
          case 3:
            return function(o, r, s) {
              return t.call(e, o, r, s)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_defined.js": function(
      t,
      e,
    ) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t)
        return t
      }
    },
    "../../node_modules/core-js/library/modules/_descriptors.js": function(
      t,
      e,
      o,
    ) {
      t.exports = !o(
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
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_global.js")
          .document,
        i = r(s) && r(s.createElement)
      t.exports = function(t) {
        return i ? s.createElement(t) : {}
      }
    },
    "../../node_modules/core-js/library/modules/_enum-bug-keys.js": function(
      t,
      e,
    ) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ",",
      )
    },
    "../../node_modules/core-js/library/modules/_enum-keys.js": function(
      t,
      e,
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
      t.exports = function(t) {
        var e = r(t),
          o = s.f
        if (o)
          for (var n, a = o(t), c = i.f, l = 0; a.length > l; )
            c.call(t, (n = a[l++])) && e.push(n)
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_export.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o("../../node_modules/core-js/library/modules/_ctx.js"),
        n = o("../../node_modules/core-js/library/modules/_hide.js"),
        a = function(t, e, o) {
          var c,
            l,
            u,
            d = t & a.F,
            p = t & a.G,
            h = t & a.S,
            f = t & a.P,
            m = t & a.B,
            y = t & a.W,
            v = p ? s : s[e] || (s[e] = {}),
            b = v.prototype,
            j = p ? r : h ? r[e] : (r[e] || {}).prototype
          for (c in (p && (o = e), o))
            ((l = !d && j && void 0 !== j[c]) && c in v) ||
              ((u = l ? j[c] : o[c]),
              (v[c] =
                p && "function" != typeof j[c]
                  ? o[c]
                  : m && l
                    ? i(u, r)
                    : y && j[c] == u
                      ? (function(t) {
                          var e = function(e, o, r) {
                            if (this instanceof t) {
                              switch (arguments.length) {
                                case 0:
                                  return new t()
                                case 1:
                                  return new t(e)
                                case 2:
                                  return new t(e, o)
                              }
                              return new t(e, o, r)
                            }
                            return t.apply(this, arguments)
                          }
                          return (e.prototype = t.prototype), e
                        })(u)
                      : f && "function" == typeof u
                        ? i(Function.call, u)
                        : u),
              f &&
                (((v.virtual || (v.virtual = {}))[c] = u),
                t & a.R && b && !b[c] && n(b, c, u)))
        }
      ;(a.F = 1),
        (a.G = 2),
        (a.S = 4),
        (a.P = 8),
        (a.B = 16),
        (a.W = 32),
        (a.U = 64),
        (a.R = 128),
        (t.exports = a)
    },
    "../../node_modules/core-js/library/modules/_fails.js": function(
      t,
      e,
    ) {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    "../../node_modules/core-js/library/modules/_for-of.js": function(
      t,
      e,
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
      ;((e = t.exports = function(t, e, o, d, p) {
        var h,
          f,
          m,
          y,
          v = p
            ? function() {
                return t
              }
            : c(t),
          b = r(o, d, e ? 2 : 1),
          j = 0
        if ("function" != typeof v)
          throw TypeError(t + " is not iterable!")
        if (i(v)) {
          for (h = a(t.length); h > j; j++)
            if (
              (y = e ? b(n((f = t[j]))[0], f[1]) : b(t[j])) === l ||
              y === u
            )
              return y
        } else
          for (m = v.call(t); !(f = m.next()).done; )
            if ((y = s(m, b, f.value, e)) === l || y === u) return y
      }).BREAK = l),
        (e.RETURN = u)
    },
    "../../node_modules/core-js/library/modules/_global.js": function(
      t,
      e,
    ) {
      var o = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")())
      "number" == typeof __g && (__g = o)
    },
    "../../node_modules/core-js/library/modules/_has.js": function(
      t,
      e,
    ) {
      var o = {}.hasOwnProperty
      t.exports = function(t, e) {
        return o.call(t, e)
      }
    },
    "../../node_modules/core-js/library/modules/_hide.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        )
      t.exports = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? function(t, e, o) {
            return r.f(t, e, s(1, o))
          }
        : function(t, e, o) {
            return (t[e] = o), t
          }
    },
    "../../node_modules/core-js/library/modules/_html.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_global.js",
      ).document
      t.exports = r && r.documentElement
    },
    "../../node_modules/core-js/library/modules/_ie8-dom-define.js": function(
      t,
      e,
      o,
    ) {
      t.exports =
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
      t,
      e,
    ) {
      t.exports = function(t, e, o) {
        var r = void 0 === o
        switch (e.length) {
          case 0:
            return r ? t() : t.call(o)
          case 1:
            return r ? t(e[0]) : t.call(o, e[0])
          case 2:
            return r ? t(e[0], e[1]) : t.call(o, e[0], e[1])
          case 3:
            return r
              ? t(e[0], e[1], e[2])
              : t.call(o, e[0], e[1], e[2])
          case 4:
            return r
              ? t(e[0], e[1], e[2], e[3])
              : t.call(o, e[0], e[1], e[2], e[3])
        }
        return t.apply(o, e)
      }
    },
    "../../node_modules/core-js/library/modules/_iobject.js": function(
      t,
      e,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_cof.js")
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
          }
    },
    "../../node_modules/core-js/library/modules/_is-array-iter.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_iterators.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_wks.js")(
          "iterator",
        ),
        i = Array.prototype
      t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[s] === t)
      }
    },
    "../../node_modules/core-js/library/modules/_is-array.js": function(
      t,
      e,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_cof.js")
      t.exports =
        Array.isArray ||
        function(t) {
          return "Array" == r(t)
        }
    },
    "../../node_modules/core-js/library/modules/_is-object.js": function(
      t,
      e,
    ) {
      t.exports = function(t) {
        return "object" == typeof t
          ? null !== t
          : "function" == typeof t
      }
    },
    "../../node_modules/core-js/library/modules/_iter-call.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_an-object.js",
      )
      t.exports = function(t, e, o, s) {
        try {
          return s ? e(r(o)[0], o[1]) : e(o)
        } catch (e) {
          var i = t.return
          throw (void 0 !== i && r(i.call(t)), e)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_iter-create.js": function(
      t,
      e,
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
        (t.exports = function(t, e, o) {
          ;(t.prototype = r(n, { next: s(1, o) })),
            i(t, e + " Iterator")
        })
    },
    "../../node_modules/core-js/library/modules/_iter-define.js": function(
      t,
      e,
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
      t.exports = function(t, e, o, m, y, v, b) {
        l(o, e, m)
        var j,
          _,
          g,
          A = function(t) {
            if (!h && t in B) return B[t]
            switch (t) {
              case "keys":
              case "values":
                return function() {
                  return new o(this, t)
                }
            }
            return function() {
              return new o(this, t)
            }
          },
          E = e + " Iterator",
          w = "values" == y,
          P = !1,
          B = t.prototype,
          x = B[p] || B["@@iterator"] || (y && B[y]),
          S = (!h && x) || A(y),
          L = y ? (w ? A("entries") : S) : void 0,
          q = ("Array" == e && B.entries) || x
        if (
          (q &&
            (g = d(q.call(new t()))) !== Object.prototype &&
            g.next &&
            (u(g, E, !0), r || a(g, p) || n(g, p, f)),
          w &&
            x &&
            "values" !== x.name &&
            ((P = !0),
            (S = function() {
              return x.call(this)
            })),
          (r && !b) || (!h && !P && B[p]) || n(B, p, S),
          (c[e] = S),
          (c[E] = f),
          y)
        )
          if (
            ((j = {
              values: w ? S : A("values"),
              keys: v ? S : A("keys"),
              entries: L,
            }),
            b)
          )
            for (_ in j) _ in B || i(B, _, j[_])
          else s(s.P + s.F * (h || P), e, j)
        return j
      }
    },
    "../../node_modules/core-js/library/modules/_iter-detect.js": function(
      t,
      e,
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
      } catch (t) {}
      t.exports = function(t, e) {
        if (!e && !s) return !1
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
            t(i)
        } catch (t) {}
        return o
      }
    },
    "../../node_modules/core-js/library/modules/_iter-step.js": function(
      t,
      e,
    ) {
      t.exports = function(t, e) {
        return { value: e, done: !!t }
      }
    },
    "../../node_modules/core-js/library/modules/_iterators.js": function(
      t,
      e,
    ) {
      t.exports = {}
    },
    "../../node_modules/core-js/library/modules/_library.js": function(
      t,
      e,
    ) {
      t.exports = !0
    },
    "../../node_modules/core-js/library/modules/_meta.js": function(
      t,
      e,
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
        u = function(t) {
          n(t, r, { value: { i: "O" + ++a, w: {} } })
        },
        d = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(t, e) {
            if (!s(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t
            if (!i(t, r)) {
              if (!c(t)) return "F"
              if (!e) return "E"
              u(t)
            }
            return t[r].i
          },
          getWeak: function(t, e) {
            if (!i(t, r)) {
              if (!c(t)) return !0
              if (!e) return !1
              u(t)
            }
            return t[r].w
          },
          onFreeze: function(t) {
            return l && d.NEED && c(t) && !i(t, r) && u(t), t
          },
        })
    },
    "../../node_modules/core-js/library/modules/_microtask.js": function(
      t,
      e,
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
      t.exports = function() {
        var t,
          e,
          o,
          l = function() {
            var r, s
            for (c && (r = n.domain) && r.exit(); t; ) {
              ;(s = t.fn), (t = t.next)
              try {
                s()
              } catch (r) {
                throw (t ? o() : (e = void 0), r)
              }
            }
            ;(e = void 0), r && r.enter()
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
          e && (e.next = s), t || ((t = s), o()), (e = s)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_new-promise-capability.js": function(
      t,
      e,
      o,
    ) {
      "use strict"
      var r = o(
        "../../node_modules/core-js/library/modules/_a-function.js",
      )
      t.exports.f = function(t) {
        return new function(t) {
          var e, o
          ;(this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== o)
              throw TypeError("Bad Promise constructor")
            ;(e = t), (o = r)
          })),
            (this.resolve = r(e)),
            (this.reject = r(o))
        }(t)
      }
    },
    "../../node_modules/core-js/library/modules/_object-create.js": function(
      t,
      e,
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
          var t,
            e = o(
              "../../node_modules/core-js/library/modules/_dom-create.js",
            )("iframe"),
            r = i.length
          for (
            e.style.display = "none",
              o(
                "../../node_modules/core-js/library/modules/_html.js",
              ).appendChild(e),
              e.src = "javascript:",
              (t = e.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              c = t.F;
            r--;

          )
            delete c.prototype[i[r]]
          return c()
        }
      t.exports =
        Object.create ||
        function(t, e) {
          var o
          return (
            null !== t
              ? ((a.prototype = r(t)),
                (o = new a()),
                (a.prototype = null),
                (o[n] = t))
              : (o = c()),
            void 0 === e ? o : s(o, e)
          )
        }
    },
    "../../node_modules/core-js/library/modules/_object-dp.js": function(
      t,
      e,
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
      e.f = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperty
        : function(t, e, o) {
            if ((r(t), (e = i(e, !0)), r(o), s))
              try {
                return n(t, e, o)
              } catch (t) {}
            if ("get" in o || "set" in o)
              throw TypeError("Accessors not supported!")
            return "value" in o && (t[e] = o.value), t
          }
    },
    "../../node_modules/core-js/library/modules/_object-dps.js": function(
      t,
      e,
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
      t.exports = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperties
        : function(t, e) {
            s(t)
            for (var o, n = i(e), a = n.length, c = 0; a > c; )
              r.f(t, (o = n[c++]), e[o])
            return t
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopd.js": function(
      t,
      e,
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
      e.f = o(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? l
        : function(t, e) {
            if (((t = i(t)), (e = n(e, !0)), c))
              try {
                return l(t, e)
              } catch (t) {}
            if (a(t, e)) return s(!r.f.call(t, e), t[e])
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopn-ext.js": function(
      t,
      e,
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
      t.exports.f = function(t) {
        return n && "[object Window]" == i.call(t)
          ? (function(t) {
              try {
                return s(t)
              } catch (t) {
                return n.slice()
              }
            })(t)
          : s(r(t))
      }
    },
    "../../node_modules/core-js/library/modules/_object-gopn.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ).concat("length", "prototype")
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, s)
        }
    },
    "../../node_modules/core-js/library/modules/_object-gops.js": function(
      t,
      e,
    ) {
      e.f = Object.getOwnPropertySymbols
    },
    "../../node_modules/core-js/library/modules/_object-gpo.js": function(
      t,
      e,
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
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = s(t)),
            r(t, i)
              ? t[i]
              : "function" == typeof t.constructor &&
                t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object ? n : null
          )
        }
    },
    "../../node_modules/core-js/library/modules/_object-keys-internal.js": function(
      t,
      e,
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
      t.exports = function(t, e) {
        var o,
          a = s(t),
          c = 0,
          l = []
        for (o in a) o != n && r(a, o) && l.push(o)
        for (; e.length > c; )
          r(a, (o = e[c++])) && (~i(l, o) || l.push(o))
        return l
      }
    },
    "../../node_modules/core-js/library/modules/_object-keys.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        )
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, s)
        }
    },
    "../../node_modules/core-js/library/modules/_object-pie.js": function(
      t,
      e,
    ) {
      e.f = {}.propertyIsEnumerable
    },
    "../../node_modules/core-js/library/modules/_object-sap.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        s = o("../../node_modules/core-js/library/modules/_core.js"),
        i = o("../../node_modules/core-js/library/modules/_fails.js")
      t.exports = function(t, e) {
        var o = (s.Object || {})[t] || Object[t],
          n = {}
        ;(n[t] = e(o)),
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
      t,
      e,
    ) {
      t.exports = function(t) {
        try {
          return { e: !1, v: t() }
        } catch (t) {
          return { e: !0, v: t }
        }
      }
    },
    "../../node_modules/core-js/library/modules/_promise-resolve.js": function(
      t,
      e,
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
      t.exports = function(t, e) {
        if ((r(t), s(e) && e.constructor === t)) return e
        var o = i.f(t)
        return (0, o.resolve)(e), o.promise
      }
    },
    "../../node_modules/core-js/library/modules/_property-desc.js": function(
      t,
      e,
    ) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        }
      }
    },
    "../../node_modules/core-js/library/modules/_redefine-all.js": function(
      t,
      e,
      o,
    ) {
      var r = o("../../node_modules/core-js/library/modules/_hide.js")
      t.exports = function(t, e, o) {
        for (var s in e) o && t[s] ? (t[s] = e[s]) : r(t, s, e[s])
        return t
      }
    },
    "../../node_modules/core-js/library/modules/_redefine.js": function(
      t,
      e,
      o,
    ) {
      t.exports = o(
        "../../node_modules/core-js/library/modules/_hide.js",
      )
    },
    "../../node_modules/core-js/library/modules/_set-species.js": function(
      t,
      e,
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
      t.exports = function(t) {
        var e = "function" == typeof s[t] ? s[t] : r[t]
        n &&
          e &&
          !e[a] &&
          i.f(e, a, {
            configurable: !0,
            get: function() {
              return this
            },
          })
      }
    },
    "../../node_modules/core-js/library/modules/_set-to-string-tag.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        s = o("../../node_modules/core-js/library/modules/_has.js"),
        i = o("../../node_modules/core-js/library/modules/_wks.js")(
          "toStringTag",
        )
      t.exports = function(t, e, o) {
        t &&
          !s((t = o ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: e })
      }
    },
    "../../node_modules/core-js/library/modules/_shared-key.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("keys"),
        s = o("../../node_modules/core-js/library/modules/_uid.js")
      t.exports = function(t) {
        return r[t] || (r[t] = s(t))
      }
    },
    "../../node_modules/core-js/library/modules/_shared.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {})
      t.exports = function(t) {
        return s[t] || (s[t] = {})
      }
    },
    "../../node_modules/core-js/library/modules/_species-constructor.js": function(
      t,
      e,
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
      t.exports = function(t, e) {
        var o,
          n = r(t).constructor
        return void 0 === n || void 0 == (o = r(n)[i]) ? e : s(o)
      }
    },
    "../../node_modules/core-js/library/modules/_string-at.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_defined.js",
        )
      t.exports = function(t) {
        return function(e, o) {
          var i,
            n,
            a = String(s(e)),
            c = r(o),
            l = a.length
          return c < 0 || c >= l
            ? t ? "" : void 0
            : (i = a.charCodeAt(c)) < 55296 ||
              i > 56319 ||
              c + 1 === l ||
              (n = a.charCodeAt(c + 1)) < 56320 ||
              n > 57343
              ? t ? a.charAt(c) : i
              : t
                ? a.slice(c, c + 2)
                : n - 56320 + ((i - 55296) << 10) + 65536
        }
      }
    },
    "../../node_modules/core-js/library/modules/_task.js": function(
      t,
      e,
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
          var t = +this
          if (v.hasOwnProperty(t)) {
            var e = v[t]
            delete v[t], e()
          }
        },
        j = function(t) {
          b.call(t.data)
        }
      ;(p && h) ||
        ((p = function(t) {
          for (var e = [], o = 1; arguments.length > o; )
            e.push(arguments[o++])
          return (
            (v[++y] = function() {
              a("function" == typeof t ? t : Function(t), e)
            }),
            r(y),
            y
          )
        }),
        (h = function(t) {
          delete v[t]
        }),
        "process" ==
        o("../../node_modules/core-js/library/modules/_cof.js")(d)
          ? (r = function(t) {
              d.nextTick(n(b, t, 1))
            })
          : m && m.now
            ? (r = function(t) {
                m.now(n(b, t, 1))
              })
            : f
              ? ((i = (s = new f()).port2),
                (s.port1.onmessage = j),
                (r = n(i.postMessage, i, 1)))
              : u.addEventListener &&
                "function" == typeof postMessage &&
                !u.importScripts
                ? ((r = function(t) {
                    u.postMessage(t + "", "*")
                  }),
                  u.addEventListener("message", j, !1))
                : (r =
                    "onreadystatechange" in l("script")
                      ? function(t) {
                          c.appendChild(
                            l("script"),
                          ).onreadystatechange = function() {
                            c.removeChild(this), b.call(t)
                          }
                        }
                      : function(t) {
                          setTimeout(n(b, t, 1), 0)
                        })),
        (t.exports = { set: p, clear: h })
    },
    "../../node_modules/core-js/library/modules/_to-absolute-index.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        s = Math.max,
        i = Math.min
      t.exports = function(t, e) {
        return (t = r(t)) < 0 ? s(t + e, 0) : i(t, e)
      }
    },
    "../../node_modules/core-js/library/modules/_to-integer.js": function(
      t,
      e,
    ) {
      var o = Math.ceil,
        r = Math.floor
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : o)(t)
      }
    },
    "../../node_modules/core-js/library/modules/_to-iobject.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_iobject.js",
        ),
        s = o(
          "../../node_modules/core-js/library/modules/_defined.js",
        )
      t.exports = function(t) {
        return r(s(t))
      }
    },
    "../../node_modules/core-js/library/modules/_to-length.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        s = Math.min
      t.exports = function(t) {
        return t > 0 ? s(r(t), 9007199254740991) : 0
      }
    },
    "../../node_modules/core-js/library/modules/_to-object.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_defined.js",
      )
      t.exports = function(t) {
        return Object(r(t))
      }
    },
    "../../node_modules/core-js/library/modules/_to-primitive.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      t.exports = function(t, e) {
        if (!r(t)) return t
        var o, s
        if (
          e &&
          "function" == typeof (o = t.toString) &&
          !r((s = o.call(t)))
        )
          return s
        if (
          "function" == typeof (o = t.valueOf) &&
          !r((s = o.call(t)))
        )
          return s
        if (
          !e &&
          "function" == typeof (o = t.toString) &&
          !r((s = o.call(t)))
        )
          return s
        throw TypeError("Can't convert object to primitive value")
      }
    },
    "../../node_modules/core-js/library/modules/_uid.js": function(
      t,
      e,
    ) {
      var o = 0,
        r = Math.random()
      t.exports = function(t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++o + r).toString(36),
        )
      }
    },
    "../../node_modules/core-js/library/modules/_wks-define.js": function(
      t,
      e,
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
      t.exports = function(t) {
        var e = s.Symbol || (s.Symbol = i ? {} : r.Symbol || {})
        "_" == t.charAt(0) || t in e || a(e, t, { value: n.f(t) })
      }
    },
    "../../node_modules/core-js/library/modules/_wks-ext.js": function(
      t,
      e,
      o,
    ) {
      e.f = o("../../node_modules/core-js/library/modules/_wks.js")
    },
    "../../node_modules/core-js/library/modules/_wks.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("wks"),
        s = o("../../node_modules/core-js/library/modules/_uid.js"),
        i = o("../../node_modules/core-js/library/modules/_global.js")
          .Symbol,
        n = "function" == typeof i
      ;(t.exports = function(t) {
        return (
          r[t] || (r[t] = (n && i[t]) || (n ? i : s)("Symbol." + t))
        )
      }).store = r
    },
    "../../node_modules/core-js/library/modules/core.get-iterator-method.js": function(
      t,
      e,
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
      t.exports = o(
        "../../node_modules/core-js/library/modules/_core.js",
      ).getIteratorMethod = function(t) {
        if (void 0 != t) return t[s] || t["@@iterator"] || i[r(t)]
      }
    },
    "../../node_modules/core-js/library/modules/es6.array.iterator.js": function(
      t,
      e,
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
      ;(t.exports = o(
        "../../node_modules/core-js/library/modules/_iter-define.js",
      )(
        Array,
        "Array",
        function(t, e) {
          ;(this._t = n(t)), (this._i = 0), (this._k = e)
        },
        function() {
          var t = this._t,
            e = this._k,
            o = this._i++
          return !t || o >= t.length
            ? ((this._t = void 0), s(1))
            : s(0, "keys" == e ? o : "values" == e ? t[o] : [o, t[o]])
        },
        "values",
      )),
        (i.Arguments = i.Array),
        r("keys"),
        r("values"),
        r("entries")
    },
    "../../node_modules/core-js/library/modules/es6.object.define-property.js": function(
      t,
      e,
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
      t,
      e,
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
          return function(t, e) {
            return s(r(t), e)
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.keys.js": function(
      t,
      e,
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
          return function(t) {
            return s(r(t))
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.to-string.js": function(
      t,
      e,
    ) {},
    "../../node_modules/core-js/library/modules/es6.promise.js": function(
      t,
      e,
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
        w = c.Promise,
        P = "process" == u(E),
        B = function() {},
        x = (s = j.f),
        S = !!(function() {
          try {
            var t = w.resolve(1),
              e = ((t.constructor = {})[
                o(
                  "../../node_modules/core-js/library/modules/_wks.js",
                )("species")
              ] = function(t) {
                t(B, B)
              })
            return (
              (P || "function" == typeof PromiseRejectionEvent) &&
              t.then(B) instanceof e
            )
          } catch (t) {}
        })(),
        L = function(t) {
          var e
          return !(!p(t) || "function" != typeof (e = t.then)) && e
        },
        q = function(t, e) {
          if (!t._n) {
            t._n = !0
            var o = t._c
            b(function() {
              for (
                var r = t._v,
                  s = 1 == t._s,
                  i = 0,
                  n = function(e) {
                    var o,
                      i,
                      n = s ? e.ok : e.fail,
                      a = e.resolve,
                      c = e.reject,
                      l = e.domain
                    try {
                      n
                        ? (s || (2 == t._h && F(t), (t._h = 1)),
                          !0 === n
                            ? (o = r)
                            : (l && l.enter(),
                              (o = n(r)),
                              l && l.exit()),
                          o === e.promise
                            ? c(A("Promise-chain cycle"))
                            : (i = L(o)) ? i.call(o, a, c) : a(o))
                        : c(r)
                    } catch (t) {
                      c(t)
                    }
                  };
                o.length > i;

              )
                n(o[i++])
              ;(t._c = []), (t._n = !1), e && !t._h && C(t)
            })
          }
        },
        C = function(t) {
          v.call(c, function() {
            var e,
              o,
              r,
              s = t._v,
              i = M(t)
            if (
              (i &&
                ((e = _(function() {
                  P
                    ? E.emit("unhandledRejection", s, t)
                    : (o = c.onunhandledrejection)
                      ? o({ promise: t, reason: s })
                      : (r = c.console) &&
                        r.error &&
                        r.error("Unhandled promise rejection", s)
                })),
                (t._h = P || M(t) ? 2 : 1)),
              (t._a = void 0),
              i && e.e)
            )
              throw e.v
          })
        },
        M = function(t) {
          return 1 !== t._h && 0 === (t._a || t._c).length
        },
        F = function(t) {
          v.call(c, function() {
            var e
            P
              ? E.emit("rejectionHandled", t)
              : (e = c.onrejectionhandled) &&
                e({ promise: t, reason: t._v })
          })
        },
        I = function(t) {
          var e = this
          e._d ||
            ((e._d = !0),
            ((e = e._w || e)._v = t),
            (e._s = 2),
            e._a || (e._a = e._c.slice()),
            q(e, !0))
        },
        O = function(t) {
          var e,
            o = this
          if (!o._d) {
            ;(o._d = !0), (o = o._w || o)
            try {
              if (o === t) throw A("Promise can't be resolved itself")
              ;(e = L(t))
                ? b(function() {
                    var r = { _w: o, _d: !1 }
                    try {
                      e.call(t, l(O, r, 1), l(I, r, 1))
                    } catch (t) {
                      I.call(r, t)
                    }
                  })
                : ((o._v = t), (o._s = 1), q(o, !1))
            } catch (t) {
              I.call({ _w: o, _d: !1 }, t)
            }
          }
        }
      S ||
        ((w = function(t) {
          f(this, w, "Promise", "_h"), h(t), r.call(this)
          try {
            t(l(O, this, 1), l(I, this, 1))
          } catch (t) {
            I.call(this, t)
          }
        }),
        ((r = function(t) {
          ;(this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1)
        }).prototype = o(
          "../../node_modules/core-js/library/modules/_redefine-all.js",
        )(w.prototype, {
          then: function(t, e) {
            var o = x(y(this, w))
            return (
              (o.ok = "function" != typeof t || t),
              (o.fail = "function" == typeof e && e),
              (o.domain = P ? E.domain : void 0),
              this._c.push(o),
              this._a && this._a.push(o),
              this._s && q(this, !1),
              o.promise
            )
          },
          catch: function(t) {
            return this.then(void 0, t)
          },
        })),
        (i = function() {
          var t = new r()
          ;(this.promise = t),
            (this.resolve = l(O, t, 1)),
            (this.reject = l(I, t, 1))
        }),
        (j.f = x = function(t) {
          return t === w || t === n ? new i(t) : s(t)
        })),
        d(d.G + d.W + d.F * !S, { Promise: w }),
        o(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        )(w, "Promise"),
        o(
          "../../node_modules/core-js/library/modules/_set-species.js",
        )("Promise"),
        (n = o("../../node_modules/core-js/library/modules/_core.js")
          .Promise),
        d(d.S + d.F * !S, "Promise", {
          reject: function(t) {
            var e = x(this)
            return (0, e.reject)(t), e.promise
          },
        }),
        d(d.S + d.F * (a || !S), "Promise", {
          resolve: function(t) {
            return g(a && this === n ? w : this, t)
          },
        }),
        d(
          d.S +
            d.F *
              !(
                S &&
                o(
                  "../../node_modules/core-js/library/modules/_iter-detect.js",
                )(function(t) {
                  w.all(t).catch(B)
                })
              ),
          "Promise",
          {
            all: function(t) {
              var e = this,
                o = x(e),
                r = o.resolve,
                s = o.reject,
                i = _(function() {
                  var o = [],
                    i = 0,
                    n = 1
                  m(t, !1, function(t) {
                    var a = i++,
                      c = !1
                    o.push(void 0),
                      n++,
                      e.resolve(t).then(function(t) {
                        c || ((c = !0), (o[a] = t), --n || r(o))
                      }, s)
                  }),
                    --n || r(o)
                })
              return i.e && s(i.v), o.promise
            },
            race: function(t) {
              var e = this,
                o = x(e),
                r = o.reject,
                s = _(function() {
                  m(t, !1, function(t) {
                    e.resolve(t).then(o.resolve, r)
                  })
                })
              return s.e && r(s.v), o.promise
            },
          },
        )
    },
    "../../node_modules/core-js/library/modules/es6.string.iterator.js": function(
      t,
      e,
      o,
    ) {
      "use strict"
      var r = o(
        "../../node_modules/core-js/library/modules/_string-at.js",
      )(!0)
      o("../../node_modules/core-js/library/modules/_iter-define.js")(
        String,
        "String",
        function(t) {
          ;(this._t = String(t)), (this._i = 0)
        },
        function() {
          var t,
            e = this._t,
            o = this._i
          return o >= e.length
            ? { value: void 0, done: !0 }
            : ((t = r(e, o)),
              (this._i += t.length),
              { value: t, done: !1 })
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.symbol.js": function(
      t,
      e,
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
        w = o(
          "../../node_modules/core-js/library/modules/_object-gopn-ext.js",
        ),
        P = o(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ),
        B = o(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        x = o(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        S = P.f,
        L = B.f,
        q = w.f,
        C = r.Symbol,
        M = r.JSON,
        F = M && M.stringify,
        I = h("_hidden"),
        O = h("toPrimitive"),
        R = {}.propertyIsEnumerable,
        T = u("symbol-registry"),
        k = u("symbols"),
        V = u("op-symbols"),
        N = Object.prototype,
        G = "function" == typeof C,
        D = r.QObject,
        U = !D || !D.prototype || !D.prototype.findChild,
        W =
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
            ? function(t, e, o) {
                var r = S(N, e)
                r && delete N[e],
                  L(t, e, o),
                  r && t !== N && L(N, e, r)
              }
            : L,
        Y = function(t) {
          var e = (k[t] = E(C.prototype))
          return (e._k = t), e
        },
        z =
          G && "symbol" == typeof C.iterator
            ? function(t) {
                return "symbol" == typeof t
              }
            : function(t) {
                return t instanceof C
              },
        X = function(t, e, o) {
          return (
            t === N && X(V, e, o),
            b(t),
            (e = g(e, !0)),
            b(o),
            s(k, e)
              ? (o.enumerable
                  ? (s(t, I) && t[I][e] && (t[I][e] = !1),
                    (o = E(o, { enumerable: A(0, !1) })))
                  : (s(t, I) || L(t, I, A(1, {})), (t[I][e] = !0)),
                W(t, e, o))
              : L(t, e, o)
          )
        },
        H = function(t, e) {
          b(t)
          for (var o, r = y((e = _(e))), s = 0, i = r.length; i > s; )
            X(t, (o = r[s++]), e[o])
          return t
        },
        K = function(t) {
          var e = R.call(this, (t = g(t, !0)))
          return (
            !(this === N && s(k, t) && !s(V, t)) &&
            (!(
              e ||
              !s(this, t) ||
              !s(k, t) ||
              (s(this, I) && this[I][t])
            ) ||
              e)
          )
        },
        Z = function(t, e) {
          if (
            ((t = _(t)),
            (e = g(e, !0)),
            t !== N || !s(k, e) || s(V, e))
          ) {
            var o = S(t, e)
            return (
              !o ||
                !s(k, e) ||
                (s(t, I) && t[I][e]) ||
                (o.enumerable = !0),
              o
            )
          }
        },
        J = function(t) {
          for (var e, o = q(_(t)), r = [], i = 0; o.length > i; )
            s(k, (e = o[i++])) || e == I || e == c || r.push(e)
          return r
        },
        Q = function(t) {
          for (
            var e, o = t === N, r = q(o ? V : _(t)), i = [], n = 0;
            r.length > n;

          )
            !s(k, (e = r[n++])) || (o && !s(N, e)) || i.push(k[e])
          return i
        }
      G ||
        (a(
          (C = function() {
            if (this instanceof C)
              throw TypeError("Symbol is not a constructor!")
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
              e = function(o) {
                this === N && e.call(V, o),
                  s(this, I) && s(this[I], t) && (this[I][t] = !1),
                  W(this, t, A(1, o))
              }
            return (
              i && U && W(N, t, { configurable: !0, set: e }), Y(t)
            )
          }).prototype,
          "toString",
          function() {
            return this._k
          },
        ),
        (P.f = Z),
        (B.f = X),
        (o(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f = w.f = J),
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
          a(N, "propertyIsEnumerable", K, !0),
        (f.f = function(t) {
          return Y(h(t))
        })),
        n(n.G + n.W + n.F * !G, { Symbol: C })
      for (
        var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ",",
          ),
          tt = 0;
        $.length > tt;

      )
        h($[tt++])
      for (var et = x(h.store), ot = 0; et.length > ot; ) m(et[ot++])
      n(n.S + n.F * !G, "Symbol", {
        for: function(t) {
          return s(T, (t += "")) ? T[t] : (T[t] = C(t))
        },
        keyFor: function(t) {
          if (!z(t)) throw TypeError(t + " is not a symbol!")
          for (var e in T) if (T[e] === t) return e
        },
        useSetter: function() {
          U = !0
        },
        useSimple: function() {
          U = !1
        },
      }),
        n(n.S + n.F * !G, "Object", {
          create: function(t, e) {
            return void 0 === e ? E(t) : H(E(t), e)
          },
          defineProperty: X,
          defineProperties: H,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: J,
          getOwnPropertySymbols: Q,
        }),
        M &&
          n(
            n.S +
              n.F *
                (!G ||
                  l(function() {
                    var t = C()
                    return (
                      "[null]" != F([t]) ||
                      "{}" != F({ a: t }) ||
                      "{}" != F(Object(t))
                    )
                  })),
            "JSON",
            {
              stringify: function(t) {
                for (var e, o, r = [t], s = 1; arguments.length > s; )
                  r.push(arguments[s++])
                if (((o = e = r[1]), (j(e) || void 0 !== t) && !z(t)))
                  return (
                    v(e) ||
                      (e = function(t, e) {
                        if (
                          ("function" == typeof o &&
                            (e = o.call(this, t, e)),
                          !z(e))
                        )
                          return e
                      }),
                    (r[1] = e),
                    F.apply(M, r)
                  )
              },
            },
          ),
        C.prototype[O] ||
          o("../../node_modules/core-js/library/modules/_hide.js")(
            C.prototype,
            O,
            C.prototype.valueOf,
          ),
        d(C, "Symbol"),
        d(Math, "Math", !0),
        d(r.JSON, "JSON", !0)
    },
    "../../node_modules/core-js/library/modules/es7.promise.finally.js": function(
      t,
      e,
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
        finally: function(t) {
          var e = n(this, s.Promise || i.Promise),
            o = "function" == typeof t
          return this.then(
            o
              ? function(o) {
                  return a(e, t()).then(function() {
                    return o
                  })
                }
              : t,
            o
              ? function(o) {
                  return a(e, t()).then(function() {
                    throw o
                  })
                }
              : t,
          )
        },
      })
    },
    "../../node_modules/core-js/library/modules/es7.promise.try.js": function(
      t,
      e,
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
        try: function(t) {
          var e = s.f(this),
            o = i(t)
          return (o.e ? e.reject : e.resolve)(o.v), e.promise
        },
      })
    },
    "../../node_modules/core-js/library/modules/web.dom.iterable.js": function(
      t,
      e,
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
      t,
      e,
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
        (t.exports = o(
          "../../node_modules/regenerator-runtime/runtime.js",
        )),
        s)
      )
        r.regeneratorRuntime = i
      else
        try {
          delete r.regeneratorRuntime
        } catch (t) {
          r.regeneratorRuntime = void 0
        }
    },
    "../../node_modules/regenerator-runtime/runtime.js": function(
      t,
      e,
    ) {
      !(function(e) {
        "use strict"
        var o,
          r = Object.prototype,
          s = r.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          n = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag",
          l = "object" == typeof t,
          u = e.regeneratorRuntime
        if (u) l && (t.exports = u)
        else {
          ;(u = e.regeneratorRuntime = l ? t.exports : {}).wrap = _
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
            b = v && v(v(C([])))
          b && b !== r && s.call(b, n) && (y = b)
          var j = (w.prototype = A.prototype = Object.create(y))
          ;(E.prototype = j.constructor = w),
            (w.constructor = E),
            (w[c] = E.displayName = "GeneratorFunction"),
            (u.isGeneratorFunction = function(t) {
              var e = "function" == typeof t && t.constructor
              return (
                !!e &&
                (e === E ||
                  "GeneratorFunction" === (e.displayName || e.name))
              )
            }),
            (u.mark = function(t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, w)
                  : ((t.__proto__ = w),
                    c in t || (t[c] = "GeneratorFunction")),
                (t.prototype = Object.create(j)),
                t
              )
            }),
            (u.awrap = function(t) {
              return { __await: t }
            }),
            P(B.prototype),
            (B.prototype[a] = function() {
              return this
            }),
            (u.AsyncIterator = B),
            (u.async = function(t, e, o, r) {
              var s = new B(_(t, e, o, r))
              return u.isGeneratorFunction(e)
                ? s
                : s.next().then(function(t) {
                    return t.done ? t.value : s.next()
                  })
            }),
            P(j),
            (j[c] = "Generator"),
            (j[n] = function() {
              return this
            }),
            (j.toString = function() {
              return "[object Generator]"
            }),
            (u.keys = function(t) {
              var e = []
              for (var o in t) e.push(o)
              return (
                e.reverse(),
                function o() {
                  for (; e.length; ) {
                    var r = e.pop()
                    if (r in t) return (o.value = r), (o.done = !1), o
                  }
                  return (o.done = !0), o
                }
              )
            }),
            (u.values = C),
            (q.prototype = {
              constructor: q,
              reset: function(t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = o),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = o),
                  this.tryEntries.forEach(L),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      s.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = o)
              },
              stop: function() {
                this.done = !0
                var t = this.tryEntries[0].completion
                if ("throw" === t.type) throw t.arg
                return this.rval
              },
              dispatchException: function(t) {
                if (this.done) throw t
                var e = this
                function r(r, s) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = r),
                    s && ((e.method = "next"), (e.arg = o)),
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
              abrupt: function(t, e) {
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
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null)
                var n = i ? i.completion : {}
                return (
                  (n.type = t),
                  (n.arg = e),
                  i
                    ? ((this.method = "next"),
                      (this.next = i.finallyLoc),
                      m)
                    : this.complete(n)
                )
              },
              complete: function(t, e) {
                if ("throw" === t.type) throw t.arg
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  m
                )
              },
              finish: function(t) {
                for (
                  var e = this.tryEntries.length - 1;
                  e >= 0;
                  --e
                ) {
                  var o = this.tryEntries[e]
                  if (o.finallyLoc === t)
                    return (
                      this.complete(o.completion, o.afterLoc), L(o), m
                    )
                }
              },
              catch: function(t) {
                for (
                  var e = this.tryEntries.length - 1;
                  e >= 0;
                  --e
                ) {
                  var o = this.tryEntries[e]
                  if (o.tryLoc === t) {
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
              delegateYield: function(t, e, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = o),
                  m
                )
              },
            })
        }
        function _(t, e, o, r) {
          var s = e && e.prototype instanceof A ? e : A,
            i = Object.create(s.prototype),
            n = new q(r || [])
          return (
            (i._invoke = (function(t, e, o) {
              var r = d
              return function(s, i) {
                if (r === h)
                  throw new Error("Generator is already running")
                if (r === f) {
                  if ("throw" === s) throw i
                  return M()
                }
                for (o.method = s, o.arg = i; ; ) {
                  var n = o.delegate
                  if (n) {
                    var a = x(n, o)
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
                  var c = g(t, e, o)
                  if ("normal" === c.type) {
                    if (((r = o.done ? f : p), c.arg === m)) continue
                    return { value: c.arg, done: o.done }
                  }
                  "throw" === c.type &&
                    ((r = f), (o.method = "throw"), (o.arg = c.arg))
                }
              }
            })(t, o, n)),
            i
          )
        }
        function g(t, e, o) {
          try {
            return { type: "normal", arg: t.call(e, o) }
          } catch (t) {
            return { type: "throw", arg: t }
          }
        }
        function A() {}
        function E() {}
        function w() {}
        function P(t) {
          ;["next", "throw", "return"].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t)
            }
          })
        }
        function B(t) {
          var e
          this._invoke = function(o, r) {
            function i() {
              return new Promise(function(e, i) {
                !(function e(o, r, i, n) {
                  var a = g(t[o], t, r)
                  if ("throw" !== a.type) {
                    var c = a.arg,
                      l = c.value
                    return l &&
                      "object" == typeof l &&
                      s.call(l, "__await")
                      ? Promise.resolve(l.__await).then(
                          function(t) {
                            e("next", t, i, n)
                          },
                          function(t) {
                            e("throw", t, i, n)
                          },
                        )
                      : Promise.resolve(l).then(function(t) {
                          ;(c.value = t), i(c)
                        }, n)
                  }
                  n(a.arg)
                })(o, r, e, i)
              })
            }
            return (e = e ? e.then(i, i) : i())
          }
        }
        function x(t, e) {
          var r = t.iterator[e.method]
          if (r === o) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = o),
                x(t, e),
                "throw" === e.method)
              )
                return m
              ;(e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ))
            }
            return m
          }
          var s = g(r, t.iterator, e.arg)
          if ("throw" === s.type)
            return (
              (e.method = "throw"),
              (e.arg = s.arg),
              (e.delegate = null),
              m
            )
          var i = s.arg
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = o)),
                (e.delegate = null),
                m)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError(
                "iterator result is not an object",
              )),
              (e.delegate = null),
              m)
        }
        function S(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function L(t) {
          var e = t.completion || {}
          ;(e.type = "normal"), delete e.arg, (t.completion = e)
        }
        function q(t) {
          ;(this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(S, this),
            this.reset(!0)
        }
        function C(t) {
          if (t) {
            var e = t[n]
            if (e) return e.call(t)
            if ("function" == typeof t.next) return t
            if (!isNaN(t.length)) {
              var r = -1,
                i = function e() {
                  for (; ++r < t.length; )
                    if (s.call(t, r))
                      return (e.value = t[r]), (e.done = !1), e
                  return (e.value = o), (e.done = !0), e
                }
              return (i.next = i)
            }
          }
          return { next: M }
        }
        function M() {
          return { value: o, done: !0 }
        }
      })(
        (function() {
          return this
        })() || Function("return this")(),
      )
    },
    "./node_modules/p2/package.json": function(t) {
      t.exports = {
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
    "./node_modules/p2/src/collision/AABB.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function s(t) {
        ;(this.lowerBound = r.create()),
          t && t.lowerBound && r.copy(this.lowerBound, t.lowerBound),
          (this.upperBound = r.create()),
          t && t.upperBound && r.copy(this.upperBound, t.upperBound)
      }
      t.exports = s
      var i = r.create()
      ;(s.prototype.setFromPoints = function(t, e, o, s) {
        var n = this.lowerBound,
          a = this.upperBound
        "number" != typeof o && (o = 0),
          0 !== o ? r.rotate(n, t[0], o) : r.copy(n, t[0]),
          r.copy(a, n)
        for (
          var c = Math.cos(o), l = Math.sin(o), u = 1;
          u < t.length;
          u++
        ) {
          var d = t[u]
          if (0 !== o) {
            var p = d[0],
              h = d[1]
            ;(i[0] = c * p - l * h), (i[1] = l * p + c * h), (d = i)
          }
          for (var f = 0; f < 2; f++)
            d[f] > a[f] && (a[f] = d[f]), d[f] < n[f] && (n[f] = d[f])
        }
        e &&
          (r.add(this.lowerBound, this.lowerBound, e),
          r.add(this.upperBound, this.upperBound, e)),
          s &&
            ((this.lowerBound[0] -= s),
            (this.lowerBound[1] -= s),
            (this.upperBound[0] += s),
            (this.upperBound[1] += s))
      }),
        (s.prototype.copy = function(t) {
          r.copy(this.lowerBound, t.lowerBound),
            r.copy(this.upperBound, t.upperBound)
        }),
        (s.prototype.extend = function(t) {
          for (var e = 2; e--; ) {
            var o = t.lowerBound[e]
            this.lowerBound[e] > o && (this.lowerBound[e] = o)
            var r = t.upperBound[e]
            this.upperBound[e] < r && (this.upperBound[e] = r)
          }
        }),
        (s.prototype.overlaps = function(t) {
          var e = this.lowerBound,
            o = this.upperBound,
            r = t.lowerBound,
            s = t.upperBound
          return (
            ((r[0] <= o[0] && o[0] <= s[0]) ||
              (e[0] <= s[0] && s[0] <= o[0])) &&
            ((r[1] <= o[1] && o[1] <= s[1]) ||
              (e[1] <= s[1] && s[1] <= o[1]))
          )
        }),
        (s.prototype.containsPoint = function(t) {
          var e = this.lowerBound,
            o = this.upperBound
          return (
            e[0] <= t[0] &&
            t[0] <= o[0] &&
            e[1] <= t[1] &&
            t[1] <= o[1]
          )
        }),
        (s.prototype.overlapsRay = function(t) {
          var e = 1 / t.direction[0],
            o = 1 / t.direction[1],
            r = (this.lowerBound[0] - t.from[0]) * e,
            s = (this.upperBound[0] - t.from[0]) * e,
            i = (this.lowerBound[1] - t.from[1]) * o,
            n = (this.upperBound[1] - t.from[1]) * o,
            a = Math.max(Math.max(Math.min(r, s), Math.min(i, n))),
            c = Math.min(Math.min(Math.max(r, s), Math.max(i, n)))
          return c < 0 ? -1 : a > c ? -1 : a
        })
    },
    "./node_modules/p2/src/collision/Broadphase.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/objects/Body.js")
      function i(t) {
        ;(this.type = t),
          (this.result = []),
          (this.world = null),
          (this.boundingVolumeType = i.AABB)
      }
      ;(t.exports = i),
        (i.AABB = 1),
        (i.BOUNDING_CIRCLE = 2),
        (i.prototype.setWorld = function(t) {
          this.world = t
        }),
        (i.prototype.getCollisionPairs = function(t) {})
      var n = r.create()
      ;(i.boundingRadiusCheck = function(t, e) {
        r.sub(n, t.position, e.position)
        var o = r.squaredLength(n),
          s = t.boundingRadius + e.boundingRadius
        return o <= s * s
      }),
        (i.aabbCheck = function(t, e) {
          return t.getAABB().overlaps(e.getAABB())
        }),
        (i.prototype.boundingVolumeCheck = function(t, e) {
          var o
          switch (this.boundingVolumeType) {
            case i.BOUNDING_CIRCLE:
              o = i.boundingRadiusCheck(t, e)
              break
            case i.AABB:
              o = i.aabbCheck(t, e)
              break
            default:
              throw new Error(
                "Bounding volume type not recognized: " +
                  this.boundingVolumeType,
              )
          }
          return o
        }),
        (i.canCollide = function(t, e) {
          var o = s.KINEMATIC,
            r = s.STATIC
          return (
            (t.type !== r || e.type !== r) &&
            (!(
              (t.type === o && e.type === r) ||
              (t.type === r && e.type === o)
            ) &&
              ((t.type !== o || e.type !== o) &&
                ((t.sleepState !== s.SLEEPING ||
                  e.sleepState !== s.SLEEPING) &&
                  !(
                    (t.sleepState === s.SLEEPING && e.type === r) ||
                    (e.sleepState === s.SLEEPING && t.type === r)
                  ))))
          )
        }),
        (i.NAIVE = 1),
        (i.SAP = 2)
    },
    "./node_modules/p2/src/collision/NaiveBroadphase.js": function(
      t,
      e,
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
      ;(t.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.getCollisionPairs = function(t) {
          var e = t.bodies,
            o = this.result
          o.length = 0
          for (var s = 0, i = e.length; s !== i; s++)
            for (var n = e[s], a = 0; a < s; a++) {
              var c = e[a]
              r.canCollide(n, c) &&
                this.boundingVolumeCheck(n, c) &&
                o.push(n, c)
            }
          return o
        }),
        (s.prototype.aabbQuery = function(t, e, o) {
          o = o || []
          for (var r = t.bodies, s = 0; s < r.length; s++) {
            var i = r[s]
            i.aabbNeedsUpdate && i.updateAABB(),
              i.aabb.overlaps(e) && o.push(i)
          }
          return o
        })
    },
    "./node_modules/p2/src/collision/Narrowphase.js": function(
      t,
      e,
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
      t.exports = O
      var m = r.fromValues(0, 1),
        y = r.fromValues(0, 0),
        v = r.fromValues(0, 0),
        b = r.fromValues(0, 0),
        j = r.fromValues(0, 0),
        _ = r.fromValues(0, 0),
        g = r.fromValues(0, 0),
        A = r.fromValues(0, 0),
        E = r.fromValues(0, 0),
        w = r.fromValues(0, 0),
        P = r.fromValues(0, 0),
        B = r.fromValues(0, 0),
        x = r.fromValues(0, 0),
        S = r.fromValues(0, 0),
        L = r.fromValues(0, 0),
        q = r.fromValues(0, 0),
        C = r.fromValues(0, 0),
        M = r.fromValues(0, 0),
        F = r.fromValues(0, 0),
        I = []
      function O() {
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
      var R = r.create(),
        T = r.create()
      function k(t, e) {
        r.set(t.vertices[0], 0.5 * -e.length, -e.radius),
          r.set(t.vertices[1], 0.5 * e.length, -e.radius),
          r.set(t.vertices[2], 0.5 * e.length, e.radius),
          r.set(t.vertices[3], 0.5 * -e.length, e.radius)
      }
      ;(O.prototype.bodiesOverlap = function(t, e) {
        for (
          var o = R, r = T, s = 0, i = t.shapes.length;
          s !== i;
          s++
        ) {
          var n = t.shapes[s]
          t.toWorldFrame(o, n.position)
          for (var a = 0, c = e.shapes.length; a !== c; a++) {
            var l = e.shapes[a]
            if (
              (e.toWorldFrame(r, l.position),
              this[n.type | l.type](
                t,
                n,
                o,
                n.angle + t.angle,
                e,
                l,
                r,
                l.angle + e.angle,
                !0,
              ))
            )
              return !0
          }
        }
        return !1
      }),
        (O.prototype.collidedLastStep = function(t, e) {
          var o = 0 | t.id,
            r = 0 | e.id
          return !!this.collidingBodiesLastStep.get(o, r)
        }),
        (O.prototype.reset = function() {
          this.collidingBodiesLastStep.reset()
          for (var t = this.contactEquations, e = t.length; e--; ) {
            var o = t[e],
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
        (O.prototype.createContactEquation = function(t, e, o, r) {
          var s = this.contactEquationPool.get()
          return (
            (s.bodyA = t),
            (s.bodyB = e),
            (s.shapeA = o),
            (s.shapeB = r),
            (s.restitution = this.restitution),
            (s.firstImpact = !this.collidedLastStep(t, e)),
            (s.stiffness = this.stiffness),
            (s.relaxation = this.relaxation),
            (s.needsUpdate = !0),
            (s.enabled = this.enabledEquations),
            (s.offset = this.contactSkinSize),
            s
          )
        }),
        (O.prototype.createFrictionEquation = function(t, e, o, r) {
          var s = this.frictionEquationPool.get()
          return (
            (s.bodyA = t),
            (s.bodyB = e),
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
        (O.prototype.createFrictionFromContact = function(t) {
          var e = this.createFrictionEquation(
            t.bodyA,
            t.bodyB,
            t.shapeA,
            t.shapeB,
          )
          return (
            r.copy(e.contactPointA, t.contactPointA),
            r.copy(e.contactPointB, t.contactPointB),
            r.rotate90cw(e.t, t.normalA),
            e.contactEquations.push(t),
            e
          )
        }),
        (O.prototype.createFrictionFromAverage = function(t) {
          var e = this.contactEquations[
              this.contactEquations.length - 1
            ],
            o = this.createFrictionEquation(
              e.bodyA,
              e.bodyB,
              e.shapeA,
              e.shapeB,
            ),
            s = e.bodyA
          e.bodyB
          r.set(o.contactPointA, 0, 0),
            r.set(o.contactPointB, 0, 0),
            r.set(o.t, 0, 0)
          for (var i = 0; i !== t; i++)
            (e = this.contactEquations[
              this.contactEquations.length - 1 - i
            ]).bodyA === s
              ? (r.add(o.t, o.t, e.normalA),
                r.add(
                  o.contactPointA,
                  o.contactPointA,
                  e.contactPointA,
                ),
                r.add(
                  o.contactPointB,
                  o.contactPointB,
                  e.contactPointB,
                ))
              : (r.sub(o.t, o.t, e.normalA),
                r.add(
                  o.contactPointA,
                  o.contactPointA,
                  e.contactPointB,
                ),
                r.add(
                  o.contactPointB,
                  o.contactPointB,
                  e.contactPointA,
                )),
              o.contactEquations.push(e)
          var n = 1 / t
          return (
            r.scale(o.contactPointA, o.contactPointA, n),
            r.scale(o.contactPointB, o.contactPointB, n),
            r.normalize(o.t, o.t),
            r.rotate90cw(o.t, o.t),
            o
          )
        }),
        (O.prototype[
          h.LINE | h.CONVEX
        ] = O.prototype.convexLine = function(
          t,
          e,
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
        (O.prototype[h.LINE | h.BOX] = O.prototype.lineBox = function(
          t,
          e,
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
      var V = new f({ width: 1, height: 1 }),
        N = r.create()
      ;(O.prototype[h.CAPSULE | h.CONVEX] = O.prototype[
        h.CAPSULE | h.BOX
      ] = O.prototype.convexCapsule = function(
        t,
        e,
        o,
        s,
        i,
        n,
        a,
        c,
        l,
      ) {
        var u = N
        r.set(u, n.length / 2, 0), r.rotate(u, u, c), r.add(u, u, a)
        var d = this.circleConvex(i, n, u, c, t, e, o, s, l, n.radius)
        r.set(u, -n.length / 2, 0), r.rotate(u, u, c), r.add(u, u, a)
        var p = this.circleConvex(i, n, u, c, t, e, o, s, l, n.radius)
        if (l && (d || p)) return !0
        var h = V
        return (
          k(h, n),
          this.convexConvex(t, e, o, s, i, h, a, c, l) + d + p
        )
      }),
        (O.prototype[
          h.CAPSULE | h.LINE
        ] = O.prototype.lineCapsule = function(
          t,
          e,
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
        D = r.create(),
        U = new f({ width: 1, height: 1 })
      ;(O.prototype[
        h.CAPSULE | h.CAPSULE
      ] = O.prototype.capsuleCapsule = function(
        t,
        e,
        o,
        s,
        i,
        n,
        a,
        c,
        l,
      ) {
        for (var u = G, d = D, p = 0, h = 0; h < 2; h++) {
          r.set(u, (0 === h ? -1 : 1) * e.length / 2, 0),
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
              t,
              e,
              u,
              s,
              i,
              n,
              d,
              c,
              l,
              e.radius,
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
        var y = U
        k(y, e)
        var v = this.convexCapsule(t, y, o, s, i, n, a, c, l)
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
        var j = this.convexCapsule(i, y, a, c, t, e, o, s, l)
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
        (O.prototype[
          h.LINE | h.LINE
        ] = O.prototype.lineLine = function(
          t,
          e,
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
        (O.prototype[
          h.PLANE | h.LINE
        ] = O.prototype.planeLine = function(
          t,
          e,
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
            P = b,
            B = j,
            x = _,
            S = g,
            L = A,
            q = E,
            C = w,
            M = I,
            F = 0
          r.set(h, -l.length / 2, 0),
            r.set(f, l.length / 2, 0),
            r.rotate(P, h, d),
            r.rotate(B, f, d),
            i(P, P, u),
            i(B, B, u),
            r.copy(h, P),
            r.copy(f, B),
            s(x, f, h),
            r.normalize(S, x),
            r.rotate90cw(C, S),
            r.rotate(q, m, a),
            (M[0] = h),
            (M[1] = f)
          for (var O = 0; O < M.length; O++) {
            var R = M[O]
            s(L, R, o)
            var T = n(L, q)
            if (T < 0) {
              if (p) return !0
              var k = this.createContactEquation(t, c, e, l)
              F++,
                r.copy(k.normalA, q),
                r.normalize(k.normalA, k.normalA),
                r.scale(L, q, T),
                s(k.contactPointA, R, L),
                s(k.contactPointA, k.contactPointA, t.position),
                s(k.contactPointB, R, u),
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
              (F &&
                this.enableFriction &&
                this.frictionEquations.push(
                  this.createFrictionFromAverage(F),
                )),
            F)
          )
        }),
        (O.prototype[
          h.PARTICLE | h.CAPSULE
        ] = O.prototype.particleCapsule = function(
          t,
          e,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return this.circleLine(
            t,
            e,
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
        (O.prototype[
          h.CIRCLE | h.LINE
        ] = O.prototype.circleLine = function(
          t,
          e,
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
          ;(h = h || 0), (f = void 0 !== f ? f : e.radius)
          var m = y,
            q = v,
            C = b,
            M = j,
            F = _,
            O = g,
            R = A,
            T = E,
            k = w,
            V = P,
            N = B,
            G = x,
            D = S,
            U = L,
            W = I
          r.set(T, -l.length / 2, 0),
            r.set(k, l.length / 2, 0),
            r.rotate(V, T, d),
            r.rotate(N, k, d),
            i(V, V, u),
            i(N, N, u),
            r.copy(T, V),
            r.copy(k, N),
            s(O, k, T),
            r.normalize(R, O),
            r.rotate90cw(F, R),
            s(G, o, T)
          var Y = n(G, F)
          s(M, T, u), s(D, o, u)
          var z = f + h
          if (Math.abs(Y) < z) {
            r.scale(m, F, Y),
              s(C, o, m),
              r.scale(q, F, n(F, D)),
              r.normalize(q, q),
              r.scale(q, q, h),
              i(C, C, q)
            var X = n(R, C),
              H = n(R, T),
              K = n(R, k)
            if (X > H && X < K) {
              if (p) return !0
              var Z = this.createContactEquation(t, c, e, l)
              return (
                r.scale(Z.normalA, m, -1),
                r.normalize(Z.normalA, Z.normalA),
                r.scale(Z.contactPointA, Z.normalA, f),
                i(Z.contactPointA, Z.contactPointA, o),
                s(Z.contactPointA, Z.contactPointA, t.position),
                s(Z.contactPointB, C, u),
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
          ;(W[0] = T), (W[1] = k)
          for (var J = 0; J < W.length; J++) {
            var Q = W[J]
            if ((s(G, Q, o), r.squaredLength(G) < Math.pow(z, 2))) {
              if (p) return !0
              Z = this.createContactEquation(t, c, e, l)
              return (
                r.copy(Z.normalA, G),
                r.normalize(Z.normalA, Z.normalA),
                r.scale(Z.contactPointA, Z.normalA, f),
                i(Z.contactPointA, Z.contactPointA, o),
                s(Z.contactPointA, Z.contactPointA, t.position),
                s(Z.contactPointB, Q, u),
                r.scale(U, Z.normalA, -h),
                i(Z.contactPointB, Z.contactPointB, U),
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
        (O.prototype[
          h.CIRCLE | h.CAPSULE
        ] = O.prototype.circleCapsule = function(
          t,
          e,
          o,
          r,
          s,
          i,
          n,
          a,
          c,
        ) {
          return this.circleLine(t, e, o, r, s, i, n, a, c, i.radius)
        }),
        (O.prototype[h.CIRCLE | h.CONVEX] = O.prototype[
          h.CIRCLE | h.BOX
        ] = O.prototype.circleConvex = function(
          t,
          e,
          o,
          n,
          a,
          c,
          l,
          u,
          d,
          p,
        ) {
          p = "number" == typeof p ? p : e.radius
          for (
            var h = y,
              f = v,
              m = b,
              g = j,
              A = _,
              E = P,
              w = B,
              x = S,
              M = L,
              F = q,
              I = C,
              O = !1,
              R = Number.MAX_VALUE,
              T = c.vertices,
              k = 0;
            k !== T.length + 1;
            k++
          ) {
            var V = T[k % T.length],
              N = T[(k + 1) % T.length]
            if (
              (r.rotate(h, V, u),
              r.rotate(f, N, u),
              i(h, h, l),
              i(f, f, l),
              s(m, f, h),
              r.normalize(g, m),
              r.rotate90cw(A, g),
              r.scale(M, A, -e.radius),
              i(M, M, o),
              H(M, c, l, u))
            ) {
              r.sub(F, h, M)
              var G = Math.abs(r.dot(F, A))
              G < R &&
                (r.copy(I, M),
                (R = G),
                r.scale(x, A, G),
                r.add(x, x, M),
                (O = !0))
            }
          }
          if (O) {
            if (d) return !0
            var D = this.createContactEquation(t, a, e, c)
            return (
              r.sub(D.normalA, I, o),
              r.normalize(D.normalA, D.normalA),
              r.scale(D.contactPointA, D.normalA, p),
              i(D.contactPointA, D.contactPointA, o),
              s(D.contactPointA, D.contactPointA, t.position),
              s(D.contactPointB, x, l),
              i(D.contactPointB, D.contactPointB, l),
              s(D.contactPointB, D.contactPointB, a.position),
              this.contactEquations.push(D),
              this.enableFriction &&
                this.frictionEquations.push(
                  this.createFrictionFromContact(D),
                ),
              1
            )
          }
          if (p > 0)
            for (k = 0; k < T.length; k++) {
              var U = T[k]
              if (
                (r.rotate(w, U, u),
                i(w, w, l),
                s(E, w, o),
                r.squaredLength(E) < Math.pow(p, 2))
              ) {
                if (d) return !0
                D = this.createContactEquation(t, a, e, c)
                return (
                  r.copy(D.normalA, E),
                  r.normalize(D.normalA, D.normalA),
                  r.scale(D.contactPointA, D.normalA, p),
                  i(D.contactPointA, D.contactPointA, o),
                  s(D.contactPointA, D.contactPointA, t.position),
                  s(D.contactPointB, w, l),
                  i(D.contactPointB, D.contactPointB, l),
                  s(D.contactPointB, D.contactPointB, a.position),
                  this.contactEquations.push(D),
                  this.enableFriction &&
                    this.frictionEquations.push(
                      this.createFrictionFromContact(D),
                    ),
                  1
                )
              }
            }
          return 0
        })
      var W = r.create(),
        Y = r.create(),
        z = r.create(),
        X = r.create()
      function H(t, e, o, n) {
        for (
          var a = W,
            c = Y,
            l = z,
            u = X,
            d = t,
            p = e.vertices,
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
      ;(O.prototype[h.PARTICLE | h.CONVEX] = O.prototype[
        h.PARTICLE | h.BOX
      ] = O.prototype.particleConvex = function(
        t,
        e,
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
          w = _,
          B = g,
          x = A,
          L = P,
          q = S,
          C = M,
          I = F,
          O = Number.MAX_VALUE,
          R = !1,
          T = l.vertices
        if (!H(o, l, u, d)) return 0
        if (p) return !0
        for (var k = 0; k !== T.length + 1; k++) {
          var V = T[k % T.length],
            N = T[(k + 1) % T.length]
          r.rotate(h, V, d),
            r.rotate(f, N, d),
            i(h, h, u),
            i(f, f, u),
            s(m, f, h),
            r.normalize(E, m),
            r.rotate90cw(w, E),
            s(L, o, h)
          n(L, w)
          s(B, h, u), s(x, o, u), r.sub(C, h, o)
          var G = Math.abs(r.dot(C, w))
          G < O &&
            ((O = G),
            r.scale(q, w, G),
            r.add(q, q, o),
            r.copy(I, w),
            (R = !0))
        }
        if (R) {
          var D = this.createContactEquation(t, c, e, l)
          return (
            r.scale(D.normalA, I, -1),
            r.normalize(D.normalA, D.normalA),
            r.set(D.contactPointA, 0, 0),
            i(D.contactPointA, D.contactPointA, o),
            s(D.contactPointA, D.contactPointA, t.position),
            s(D.contactPointB, q, u),
            i(D.contactPointB, D.contactPointB, u),
            s(D.contactPointB, D.contactPointB, c.position),
            this.contactEquations.push(D),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(D),
              ),
            1
          )
        }
        return 0
      }),
        (O.prototype[h.CIRCLE] = O.prototype.circleCircle = function(
          t,
          e,
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
          ;(p = p || e.radius), (h = h || c.radius)
          s(f, o, l)
          var m = p + h
          if (r.squaredLength(f) > Math.pow(m, 2)) return 0
          if (d) return !0
          var v = this.createContactEquation(t, a, e, c)
          return (
            s(v.normalA, l, o),
            r.normalize(v.normalA, v.normalA),
            r.scale(v.contactPointA, v.normalA, p),
            r.scale(v.contactPointB, v.normalA, -h),
            i(v.contactPointA, v.contactPointA, o),
            s(v.contactPointA, v.contactPointA, t.position),
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
        (O.prototype[h.PLANE | h.CONVEX] = O.prototype[
          h.PLANE | h.BOX
        ] = O.prototype.planeConvex = function(
          t,
          e,
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
              var E = this.createContactEquation(t, c, e, l)
              s(j, h, o), r.copy(E.normalA, f)
              var w = n(j, E.normalA)
              r.scale(j, E.normalA, w),
                s(E.contactPointB, h, c.position),
                s(E.contactPointA, h, j),
                s(E.contactPointA, E.contactPointA, t.position),
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
        (O.prototype[
          h.PARTICLE | h.PLANE
        ] = O.prototype.particlePlane = function(
          t,
          e,
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
          var b = this.createContactEquation(a, t, c, e)
          return (
            r.copy(b.normalA, h),
            r.scale(p, b.normalA, f),
            s(b.contactPointA, o, p),
            s(b.contactPointA, b.contactPointA, a.position),
            s(b.contactPointB, o, t.position),
            this.contactEquations.push(b),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(b),
              ),
            1
          )
        }),
        (O.prototype[
          h.CIRCLE | h.PARTICLE
        ] = O.prototype.circleParticle = function(
          t,
          e,
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
            (s(p, l, o), r.squaredLength(p) > Math.pow(e.radius, 2))
          )
            return 0
          if (d) return !0
          var h = this.createContactEquation(t, a, e, c)
          return (
            r.copy(h.normalA, p),
            r.normalize(h.normalA, h.normalA),
            r.scale(h.contactPointA, h.normalA, e.radius),
            i(h.contactPointA, h.contactPointA, o),
            s(h.contactPointA, h.contactPointA, t.position),
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
      ;(O.prototype[
        h.PLANE | h.CAPSULE
      ] = O.prototype.planeCapsule = function(
        t,
        e,
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
        var m = this.circlePlane(n, f, p, 0, t, e, o, s, u),
          y = this.circlePlane(n, f, h, 0, t, e, o, s, u)
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
        (O.prototype[
          h.CIRCLE | h.PLANE
        ] = O.prototype.circlePlane = function(
          t,
          e,
          o,
          a,
          c,
          l,
          u,
          d,
          p,
        ) {
          var h = t,
            f = e,
            j = o,
            _ = c,
            g = u,
            A = d
          A = A || 0
          var E = y,
            w = v,
            P = b
          s(E, j, g), r.rotate(w, m, A)
          var B = n(w, E)
          if (B > f.radius) return 0
          if (p) return !0
          var x = this.createContactEquation(_, h, l, e)
          return (
            r.copy(x.normalA, w),
            r.scale(x.contactPointB, x.normalA, -f.radius),
            i(x.contactPointB, x.contactPointB, j),
            s(x.contactPointB, x.contactPointB, h.position),
            r.scale(P, x.normalA, B),
            s(x.contactPointA, E, P),
            i(x.contactPointA, x.contactPointA, g),
            s(x.contactPointA, x.contactPointA, _.position),
            this.contactEquations.push(x),
            this.enableFriction &&
              this.frictionEquations.push(
                this.createFrictionFromContact(x),
              ),
            1
          )
        }),
        (O.prototype[h.CONVEX] = O.prototype[
          h.CONVEX | h.BOX
        ] = O.prototype[h.BOX] = O.prototype.convexConvex = function(
          t,
          e,
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
            P = j,
            B = _,
            x = A,
            S = E,
            L = w,
            q = 0
          h = "number" == typeof h ? h : 0
          if (!O.findSeparatingAxis(e, o, a, l, u, d, f)) return 0
          s(S, u, o), n(f, S) > 0 && r.scale(f, f, -1)
          var C = O.getClosestEdge(e, a, f, !0),
            M = O.getClosestEdge(l, d, f)
          if (-1 === C || -1 === M) return 0
          for (var F = 0; F < 2; F++) {
            var I,
              R = C,
              T = M,
              k = e,
              V = l,
              N = o,
              G = u,
              D = a,
              U = d,
              W = t,
              Y = c
            if (0 === F)
              (I = R),
                (R = T),
                (T = I),
                (I = k),
                (k = V),
                (V = I),
                (I = N),
                (N = G),
                (G = I),
                (I = D),
                (D = U),
                (U = I),
                (I = W),
                (W = Y),
                (Y = I)
            for (var z = T; z < T + 2; z++) {
              var X =
                V.vertices[
                  (z + V.vertices.length) % V.vertices.length
                ]
              r.rotate(m, X, U), i(m, m, G)
              for (var H = 0, K = R - 1; K < R + 2; K++) {
                var Z =
                    k.vertices[
                      (K + k.vertices.length) % k.vertices.length
                    ],
                  J =
                    k.vertices[
                      (K + 1 + k.vertices.length) % k.vertices.length
                    ]
                r.rotate(g, Z, D),
                  r.rotate(P, J, D),
                  i(g, g, N),
                  i(P, P, N),
                  s(B, P, g),
                  r.rotate90cw(L, B),
                  r.normalize(L, L),
                  s(S, m, g)
                var Q = n(L, S)
                ;((K === R && Q <= h) || (K !== R && Q <= 0)) && H++
              }
              if (H >= 3) {
                if (p) return !0
                var $ = this.createContactEquation(W, Y, k, V)
                q++
                ;(Z = k.vertices[R % k.vertices.length]),
                  (J = k.vertices[(R + 1) % k.vertices.length])
                r.rotate(g, Z, D),
                  r.rotate(P, J, D),
                  i(g, g, N),
                  i(P, P, N),
                  s(B, P, g),
                  r.rotate90cw($.normalA, B),
                  r.normalize($.normalA, $.normalA),
                  s(S, m, g)
                Q = n($.normalA, S)
                r.scale(x, $.normalA, Q),
                  s($.contactPointA, m, N),
                  s($.contactPointA, $.contactPointA, x),
                  i($.contactPointA, $.contactPointA, N),
                  s($.contactPointA, $.contactPointA, W.position),
                  s($.contactPointB, m, G),
                  i($.contactPointB, $.contactPointB, G),
                  s($.contactPointB, $.contactPointB, Y.position),
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
      O.projectConvexOntoAxis = function(t, e, o, s, i) {
        var a,
          c,
          l = null,
          u = null,
          d = Q
        r.rotate(d, s, -o)
        for (var p = 0; p < t.vertices.length; p++)
          (a = t.vertices[p]),
            (c = n(a, d)),
            (null === l || c > l) && (l = c),
            (null === u || c < u) && (u = c)
        if (u > l) {
          var h = u
          ;(u = l), (l = h)
        }
        var f = n(e, s)
        r.set(i, u + f, l + f)
      }
      var $ = r.fromValues(0, 0),
        tt = r.fromValues(0, 0),
        et = r.fromValues(0, 0),
        ot = r.fromValues(0, 0),
        rt = r.fromValues(0, 0),
        st = r.fromValues(0, 0)
      O.findSeparatingAxis = function(t, e, o, i, n, a, c) {
        var l = null,
          u = !1,
          d = !1,
          p = $,
          h = tt,
          m = et,
          y = ot,
          v = rt,
          b = st
        if (t instanceof f && i instanceof f)
          for (var j = 0; 2 !== j; j++) {
            var _ = t,
              g = o
            1 === j && ((_ = i), (g = a))
            for (var A = 0; 2 !== A; A++) {
              0 === A ? r.set(y, 0, 1) : 1 === A && r.set(y, 1, 0),
                0 !== g && r.rotate(y, y, g),
                O.projectConvexOntoAxis(t, e, o, y, v),
                O.projectConvexOntoAxis(i, n, a, y, b)
              var E = v,
                w = b
              v[0] > b[0] && ((w = v), (E = b), !0),
                (u = (P = w[0] - E[1]) <= 0),
                (null === l || P > l) &&
                  (r.copy(c, y), (l = P), (d = u))
            }
          }
        else
          for (j = 0; 2 !== j; j++) {
            ;(_ = t), (g = o)
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
                O.projectConvexOntoAxis(t, e, o, y, v),
                O.projectConvexOntoAxis(i, n, a, y, b)
              var P
              ;(E = v), (w = b)
              v[0] > b[0] && ((w = v), (E = b), !0),
                (u = (P = w[0] - E[1]) <= 0),
                (null === l || P > l) &&
                  (r.copy(c, y), (l = P), (d = u))
            }
          }
        return d
      }
      var it = r.fromValues(0, 0),
        nt = r.fromValues(0, 0),
        at = r.fromValues(0, 0)
      O.getClosestEdge = function(t, e, o, i) {
        var a = it,
          c = nt,
          l = at
        r.rotate(a, o, -e), i && r.scale(a, a, -1)
        for (
          var u = -1, d = t.vertices.length, p = -1, h = 0;
          h !== d;
          h++
        ) {
          s(c, t.vertices[(h + 1) % d], t.vertices[h % d]),
            r.rotate90cw(l, c),
            r.normalize(l, l)
          var f = n(l, a)
          ;(-1 === u || f > p) && ((u = h % d), (p = f))
        }
        return u
      }
      var ct = r.create(),
        lt = r.create(),
        ut = r.create(),
        dt = r.create(),
        pt = r.create(),
        ht = r.create(),
        ft = r.create()
      O.prototype[
        h.CIRCLE | h.HEIGHTFIELD
      ] = O.prototype.circleHeightfield = function(
        t,
        e,
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
          f = ((p = p || e.radius), c.elementWidth),
          m = lt,
          y = ct,
          v = pt,
          b = ft,
          j = ht,
          _ = ut,
          g = dt,
          A = Math.floor((o[0] - p - l[0]) / f),
          E = Math.ceil((o[0] + p - l[0]) / f)
        A < 0 && (A = 0), E >= h.length && (E = h.length - 1)
        for (var w = h[A], P = h[E], B = A; B < E; B++)
          h[B] < P && (P = h[B]), h[B] > w && (w = h[B])
        if (o[1] - p > w) return !d && 0
        var x = !1
        for (B = A; B < E; B++) {
          r.set(_, B * f, h[B]),
            r.set(g, (B + 1) * f, h[B + 1]),
            r.add(_, _, l),
            r.add(g, g, l),
            r.sub(j, g, _),
            r.rotate(j, j, Math.PI / 2),
            r.normalize(j, j),
            r.scale(y, j, -p),
            r.add(y, y, o),
            r.sub(m, y, _)
          var S = r.dot(m, j)
          if (y[0] >= _[0] && y[0] < g[0] && S <= 0) {
            if (d) return !0
            ;(x = !0), r.scale(m, j, -S), r.add(v, y, m), r.copy(b, j)
            var L = this.createContactEquation(a, t, c, e)
            r.copy(L.normalA, b),
              r.scale(L.contactPointB, L.normalA, -p),
              i(L.contactPointB, L.contactPointB, o),
              s(L.contactPointB, L.contactPointB, t.position),
              r.copy(L.contactPointA, v),
              r.sub(L.contactPointA, L.contactPointA, a.position),
              this.contactEquations.push(L),
              this.enableFriction &&
                this.frictionEquations.push(
                  this.createFrictionFromContact(L),
                )
          }
        }
        if (((x = !1), p > 0))
          for (B = A; B <= E; B++)
            if (
              (r.set(_, B * f, h[B]),
              r.add(_, _, l),
              r.sub(m, o, _),
              r.squaredLength(m) < Math.pow(p, 2))
            ) {
              if (d) return !0
              x = !0
              L = this.createContactEquation(a, t, c, e)
              r.copy(L.normalA, m),
                r.normalize(L.normalA, L.normalA),
                r.scale(L.contactPointB, L.normalA, -p),
                i(L.contactPointB, L.contactPointB, o),
                s(L.contactPointB, L.contactPointB, t.position),
                s(L.contactPointA, _, l),
                i(L.contactPointA, L.contactPointA, l),
                s(L.contactPointA, L.contactPointA, a.position),
                this.contactEquations.push(L),
                this.enableFriction &&
                  this.frictionEquations.push(
                    this.createFrictionFromContact(L),
                  )
            }
        return x ? 1 : 0
      }
      var mt = r.create(),
        yt = r.create(),
        vt = r.create(),
        bt = new p({
          vertices: [r.create(), r.create(), r.create(), r.create()],
        })
      O.prototype[h.BOX | h.HEIGHTFIELD] = O.prototype[
        h.CONVEX | h.HEIGHTFIELD
      ] = O.prototype.convexHeightfield = function(
        t,
        e,
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
          p = mt,
          h = yt,
          f = vt,
          m = bt,
          y = Math.floor((t.aabb.lowerBound[0] - a[0]) / d),
          v = Math.ceil((t.aabb.upperBound[0] - a[0]) / d)
        y < 0 && (y = 0), v >= u.length && (v = u.length - 1)
        for (var b = u[y], j = u[v], _ = y; _ < v; _++)
          u[_] < j && (j = u[_]), u[_] > b && (b = u[_])
        if (t.aabb.lowerBound[1] > b) return !l && 0
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
            (g += this.convexConvex(t, e, o, s, i, m, f, 0, l))
        }
        return g
      }
    },
    "./node_modules/p2/src/collision/Ray.js": function(t, e, o) {
      t.exports = s
      var r = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/collision/RaycastResult.js"),
        o("./node_modules/p2/src/shapes/Shape.js"),
        o("./node_modules/p2/src/collision/AABB.js")
      function s(t) {
        ;(t = t || {}),
          (this.from = t.from
            ? r.fromValues(t.from[0], t.from[1])
            : r.create()),
          (this.to = t.to
            ? r.fromValues(t.to[0], t.to[1])
            : r.create()),
          (this.checkCollisionResponse =
            void 0 === t.checkCollisionResponse ||
            t.checkCollisionResponse),
          (this.skipBackfaces = !!t.skipBackfaces),
          (this.collisionMask =
            void 0 !== t.collisionMask ? t.collisionMask : -1),
          (this.collisionGroup =
            void 0 !== t.collisionGroup ? t.collisionGroup : -1),
          (this.mode = void 0 !== t.mode ? t.mode : s.ANY),
          (this.callback = t.callback || function(t) {}),
          (this.direction = r.create()),
          (this.length = 1),
          this.update()
      }
      ;(s.prototype.constructor = s),
        (s.CLOSEST = 1),
        (s.ANY = 2),
        (s.ALL = 4),
        (s.prototype.update = function() {
          var t = this.direction
          r.sub(t, this.to, this.from),
            (this.length = r.length(t)),
            r.normalize(t, t)
        }),
        (s.prototype.intersectBodies = function(t, e) {
          for (
            var o = 0, r = e.length;
            !t.shouldStop(this) && o < r;
            o++
          ) {
            var s = e[o],
              i = s.getAABB()
            ;(i.overlapsRay(this) >= 0 ||
              i.containsPoint(this.from)) &&
              this.intersectBody(t, s)
          }
        })
      var i = r.create()
      ;(s.prototype.intersectBody = function(t, e) {
        var o = this.checkCollisionResponse
        if (!o || e.collisionResponse)
          for (var s = i, n = 0, a = e.shapes.length; n < a; n++) {
            var c = e.shapes[n]
            if (
              (!o || c.collisionResponse) &&
              (0 != (this.collisionGroup & c.collisionMask) &&
                0 != (c.collisionGroup & this.collisionMask))
            ) {
              r.rotate(s, c.position, e.angle),
                r.add(s, s, e.position)
              var l = c.angle + e.angle
              if (
                (this.intersectShape(t, c, l, s, e),
                t.shouldStop(this))
              )
                break
            }
          }
      }),
        (s.prototype.intersectShape = function(t, e, o, s, i) {
          ;(function(t, e, o) {
            r.sub(n, o, t)
            var s = r.dot(n, e)
            return (
              r.scale(a, e, s),
              r.add(a, a, t),
              r.squaredDistance(o, a)
            )
          })(this.from, this.direction, s) >
            e.boundingRadius * e.boundingRadius ||
            ((this._currentBody = i),
            (this._currentShape = e),
            e.raycast(t, this, s, o),
            (this._currentBody = this._currentShape = null))
        }),
        (s.prototype.getAABB = function(t) {
          var e = this.to,
            o = this.from
          r.set(
            t.lowerBound,
            Math.min(e[0], o[0]),
            Math.min(e[1], o[1]),
          ),
            r.set(
              t.upperBound,
              Math.max(e[0], o[0]),
              Math.max(e[1], o[1]),
            )
        })
      r.create()
      s.prototype.reportIntersection = function(t, e, o, i) {
        this.from, this.to
        var n = this._currentShape,
          a = this._currentBody
        if (!(this.skipBackfaces && r.dot(o, this.direction) > 0))
          switch (this.mode) {
            case s.ALL:
              t.set(o, n, a, e, i), this.callback(t)
              break
            case s.CLOSEST:
              ;(e < t.fraction || !t.hasHit()) && t.set(o, n, a, e, i)
              break
            case s.ANY:
              t.set(o, n, a, e, i)
          }
      }
      var n = r.create(),
        a = r.create()
    },
    "./node_modules/p2/src/collision/RaycastResult.js": function(
      t,
      e,
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
      ;(t.exports = i),
        (i.prototype.reset = function() {
          r.set(this.normal, 0, 0),
            (this.shape = null),
            (this.body = null),
            (this.faceIndex = -1),
            (this.fraction = -1),
            (this.isStopped = !1)
        }),
        (i.prototype.getHitDistance = function(t) {
          return r.distance(t.from, t.to) * this.fraction
        }),
        (i.prototype.hasHit = function() {
          return -1 !== this.fraction
        }),
        (i.prototype.getHitPoint = function(t, e) {
          r.lerp(t, e.from, e.to, this.fraction)
        }),
        (i.prototype.stop = function() {
          this.isStopped = !0
        }),
        (i.prototype.shouldStop = function(t) {
          return (
            this.isStopped ||
            (-1 !== this.fraction && t.mode === s.ANY)
          )
        }),
        (i.prototype.set = function(t, e, o, s, i) {
          r.copy(this.normal, t),
            (this.shape = e),
            (this.body = o),
            (this.fraction = s),
            (this.faceIndex = i)
        })
    },
    "./node_modules/p2/src/collision/SAPBroadphase.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/Utils.js"),
        s = o("./node_modules/p2/src/collision/Broadphase.js")
      function i() {
        s.call(this, s.SAP),
          (this.axisList = []),
          (this.axisIndex = 0)
        var t = this
        ;(this._addBodyHandler = function(e) {
          t.axisList.push(e.body)
        }),
          (this._removeBodyHandler = function(e) {
            var o = t.axisList.indexOf(e.body)
            ;-1 !== o && t.axisList.splice(o, 1)
          })
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.setWorld = function(t) {
          ;(this.axisList.length = 0),
            r.appendArray(this.axisList, t.bodies),
            t
              .off("addBody", this._addBodyHandler)
              .off("removeBody", this._removeBodyHandler),
            t
              .on("addBody", this._addBodyHandler)
              .on("removeBody", this._removeBodyHandler),
            (this.world = t)
        }),
        (i.sortAxisList = function(t, e) {
          e |= 0
          for (var o = 1, r = t.length; o < r; o++) {
            for (
              var s = t[o], i = o - 1;
              i >= 0 &&
              !(t[i].aabb.lowerBound[e] <= s.aabb.lowerBound[e]);
              i--
            )
              t[i + 1] = t[i]
            t[i + 1] = s
          }
          return t
        }),
        (i.prototype.sortList = function() {
          var t = this.axisList,
            e = this.axisIndex
          i.sortAxisList(t, e)
        }),
        (i.prototype.getCollisionPairs = function(t) {
          var e = this.axisList,
            o = this.result,
            r = this.axisIndex
          o.length = 0
          for (var i = e.length; i--; ) {
            var n = e[i]
            n.aabbNeedsUpdate && n.updateAABB()
          }
          this.sortList()
          for (var a = 0, c = 0 | e.length; a !== c; a++)
            for (var l = e[a], u = a + 1; u < c; u++) {
              var d = e[u]
              if (!(d.aabb.lowerBound[r] <= l.aabb.upperBound[r]))
                break
              s.canCollide(l, d) &&
                this.boundingVolumeCheck(l, d) &&
                o.push(l, d)
            }
          return o
        }),
        (i.prototype.aabbQuery = function(t, e, o) {
          ;(o = o || []), this.sortList()
          var r = this.axisIndex,
            s = "x"
          1 === r && (s = "y"), 2 === r && (s = "z")
          for (
            var i = this.axisList,
              n = (e.lowerBound[s], e.upperBound[s], 0);
            n < i.length;
            n++
          ) {
            var a = i[n]
            a.aabbNeedsUpdate && a.updateAABB(),
              a.aabb.overlaps(e) && o.push(a)
          }
          return o
        })
    },
    "./node_modules/p2/src/constraints/Constraint.js": function(
      t,
      e,
      o,
    ) {
      t.exports = s
      var r = o("./node_modules/p2/src/utils/Utils.js")
      function s(t, e, o, s) {
        ;(this.type = o),
          (s = r.defaults(s, {
            collideConnected: !0,
            wakeUpBodies: !0,
          })),
          (this.equations = []),
          (this.bodyA = t),
          (this.bodyB = e),
          (this.collideConnected = s.collideConnected),
          s.wakeUpBodies && (t && t.wakeUp(), e && e.wakeUp())
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
        (s.prototype.setStiffness = function(t) {
          for (var e = this.equations, o = 0; o !== e.length; o++) {
            var r = e[o]
            ;(r.stiffness = t), (r.needsUpdate = !0)
          }
        }),
        (s.prototype.setRelaxation = function(t) {
          for (var e = this.equations, o = 0; o !== e.length; o++) {
            var r = e[o]
            ;(r.relaxation = t), (r.needsUpdate = !0)
          }
        })
    },
    "./node_modules/p2/src/constraints/DistanceConstraint.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/equations/Equation.js"),
        i = o("./node_modules/p2/src/math/vec2.js"),
        n = o("./node_modules/p2/src/utils/Utils.js")
      function a(t, e, o) {
        ;(o = n.defaults(o, {
          localAnchorA: [0, 0],
          localAnchorB: [0, 0],
        })),
          r.call(this, t, e, r.DISTANCE, o),
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
          i.rotate(u, c, t.angle),
            i.rotate(d, l, e.angle),
            i.add(p, e.position, d),
            i.sub(p, p, u),
            i.sub(p, p, t.position),
            (this.distance = i.length(p))
        }
        a = void 0 === o.maxForce ? Number.MAX_VALUE : o.maxForce
        var h = new s(t, e, -a, a)
        ;(this.equations = [h]), (this.maxForce = a)
        p = i.create()
        var f = i.create(),
          m = i.create(),
          y = this
        ;(h.computeGq = function() {
          var t = this.bodyA,
            e = this.bodyB,
            o = t.position,
            r = e.position
          return (
            i.rotate(f, c, t.angle),
            i.rotate(m, l, e.angle),
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
      ;(t.exports = a),
        (a.prototype = new r()),
        (a.prototype.constructor = a)
      var c = i.create(),
        l = i.create(),
        u = i.create()
      ;(a.prototype.update = function() {
        var t = this.equations[0],
          e = this.bodyA,
          o = this.bodyB,
          r = (this.distance, e.position),
          s = o.position,
          n = this.equations[0],
          a = t.G
        i.rotate(l, this.localAnchorA, e.angle),
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
        (a.prototype.setMaxForce = function(t) {
          var e = this.equations[0]
          ;(e.minForce = -t), (e.maxForce = t)
        }),
        (a.prototype.getMaxForce = function() {
          return this.equations[0].maxForce
        })
    },
    "./node_modules/p2/src/constraints/GearConstraint.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = (o("./node_modules/p2/src/equations/Equation.js"),
        o("./node_modules/p2/src/equations/AngleLockEquation.js"))
      o("./node_modules/p2/src/math/vec2.js")
      function i(t, e, o) {
        ;(o = o || {}),
          r.call(this, t, e, r.GEAR, o),
          (this.ratio = void 0 !== o.ratio ? o.ratio : 1),
          (this.angle =
            void 0 !== o.angle
              ? o.angle
              : e.angle - this.ratio * t.angle),
          (o.angle = this.angle),
          (o.ratio = this.ratio),
          (this.equations = [new s(t, e, o)]),
          void 0 !== o.maxTorque && this.setMaxTorque(o.maxTorque)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.update = function() {
          var t = this.equations[0]
          t.ratio !== this.ratio && t.setRatio(this.ratio),
            (t.angle = this.angle)
        }),
        (i.prototype.setMaxTorque = function(t) {
          this.equations[0].setMaxTorque(t)
        }),
        (i.prototype.getMaxTorque = function(t) {
          return this.equations[0].maxForce
        })
    },
    "./node_modules/p2/src/constraints/LockConstraint.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/math/vec2.js"),
        i = o("./node_modules/p2/src/equations/Equation.js")
      function n(t, e, o) {
        ;(o = o || {}), r.call(this, t, e, r.LOCK, o)
        var n = void 0 === o.maxForce ? Number.MAX_VALUE : o.maxForce,
          a = (o.localAngleB, new i(t, e, -n, n)),
          c = new i(t, e, -n, n),
          l = new i(t, e, -n, n),
          u = s.create(),
          d = s.create(),
          p = this
        ;(a.computeGq = function() {
          return (
            s.rotate(u, p.localOffsetB, t.angle),
            s.sub(d, e.position, t.position),
            s.sub(d, d, u),
            d[0]
          )
        }),
          (c.computeGq = function() {
            return (
              s.rotate(u, p.localOffsetB, t.angle),
              s.sub(d, e.position, t.position),
              s.sub(d, d, u),
              d[1]
            )
          })
        var h = s.create(),
          f = s.create()
        ;(l.computeGq = function() {
          return (
            s.rotate(h, p.localOffsetB, e.angle - p.localAngleB),
            s.scale(h, h, -1),
            s.sub(d, t.position, e.position),
            s.add(d, d, h),
            s.rotate(f, h, -Math.PI / 2),
            s.normalize(f, f),
            s.dot(d, f)
          )
        }),
          (this.localOffsetB = s.create()),
          o.localOffsetB
            ? s.copy(this.localOffsetB, o.localOffsetB)
            : (s.sub(this.localOffsetB, e.position, t.position),
              s.rotate(
                this.localOffsetB,
                this.localOffsetB,
                -t.angle,
              )),
          (this.localAngleB = 0),
          "number" == typeof o.localAngleB
            ? (this.localAngleB = o.localAngleB)
            : (this.localAngleB = e.angle - t.angle),
          this.equations.push(a, c, l),
          this.setMaxForce(n)
      }
      ;(t.exports = n),
        (n.prototype = new r()),
        (n.prototype.constructor = n),
        (n.prototype.setMaxForce = function(t) {
          for (
            var e = this.equations, o = 0;
            o < this.equations.length;
            o++
          )
            (e[o].maxForce = t), (e[o].minForce = -t)
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
        var t = this.equations[0],
          e = this.equations[1],
          o = this.equations[2],
          r = this.bodyA,
          i = this.bodyB
        s.rotate(a, this.localOffsetB, r.angle),
          s.rotate(c, this.localOffsetB, i.angle - this.localAngleB),
          s.scale(c, c, -1),
          s.rotate(l, c, Math.PI / 2),
          s.normalize(l, l),
          (t.G[0] = -1),
          (t.G[1] = 0),
          (t.G[2] = -s.crossLength(a, u)),
          (t.G[3] = 1),
          (e.G[0] = 0),
          (e.G[1] = -1),
          (e.G[2] = -s.crossLength(a, d)),
          (e.G[4] = 1),
          (o.G[0] = -l[0]),
          (o.G[1] = -l[1]),
          (o.G[3] = l[0]),
          (o.G[4] = l[1]),
          (o.G[5] = s.crossLength(c, l))
      }
    },
    "./node_modules/p2/src/constraints/PrismaticConstraint.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/constraints/Constraint.js"),
        s = o("./node_modules/p2/src/equations/ContactEquation.js"),
        i = o("./node_modules/p2/src/equations/Equation.js"),
        n = o("./node_modules/p2/src/math/vec2.js"),
        a = o(
          "./node_modules/p2/src/equations/RotationalLockEquation.js",
        )
      function c(t, e, o) {
        ;(o = o || {}), r.call(this, t, e, r.PRISMATIC, o)
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
          p = new i(t, e, -d, d),
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
              r = t.position,
              s = e.position
            n.rotate(h, c, t.angle),
              n.rotate(f, u, e.angle),
              n.add(m, s, f),
              n.sub(m, m, r),
              n.sub(m, m, h),
              n.rotate(y, l, t.angle + Math.PI / 2),
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
          var v = new a(t, e, -d, d)
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
          (this.upperLimitEquation = new s(t, e)),
          (this.lowerLimitEquation = new s(t, e)),
          (this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0),
          (this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = d),
          (this.motorEquation = new i(t, e)),
          (this.motorEnabled = !1),
          (this.motorSpeed = 0)
        var b = this,
          j = this.motorEquation
        j.computeGW
        ;(j.computeGq = function() {
          return 0
        }),
          (j.computeGW = function() {
            var t = this.G,
              e = this.bodyA,
              o = this.bodyB,
              r = e.velocity,
              s = o.velocity,
              i = e.angularVelocity,
              n = o.angularVelocity
            return this.gmult(t, r, i, s, n) + b.motorSpeed
          })
      }
      ;(t.exports = c),
        (c.prototype = new r()),
        (c.prototype.constructor = c)
      var l = n.create(),
        u = n.create(),
        d = n.create(),
        p = n.create(),
        h = n.create(),
        f = n.create()
      ;(c.prototype.update = function() {
        var t = this.equations,
          e = t[0],
          o = this.upperLimit,
          r = this.lowerLimit,
          s = this.upperLimitEquation,
          i = this.lowerLimitEquation,
          a = this.bodyA,
          c = this.bodyB,
          m = this.localAxisA,
          y = this.localAnchorA,
          v = this.localAnchorB
        e.updateJacobian(),
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
            -1 === t.indexOf(s) && t.push(s))
          : -1 !== (b = t.indexOf(s)) && t.splice(b, 1)
        this.lowerLimitEnabled && j < r
          ? (n.scale(i.normalA, l, 1),
            n.sub(i.contactPointA, u, a.position),
            n.sub(i.contactPointB, d, c.position),
            n.scale(f, l, r),
            n.sub(i.contactPointB, i.contactPointB, f),
            -1 === t.indexOf(i) && t.push(i))
          : -1 !== (b = t.indexOf(i)) && t.splice(b, 1)
      }),
        (c.prototype.enableMotor = function() {
          this.motorEnabled ||
            (this.equations.push(this.motorEquation),
            (this.motorEnabled = !0))
        }),
        (c.prototype.disableMotor = function() {
          if (this.motorEnabled) {
            var t = this.equations.indexOf(this.motorEquation)
            this.equations.splice(t, 1), (this.motorEnabled = !1)
          }
        }),
        (c.prototype.setLimits = function(t, e) {
          "number" == typeof t
            ? ((this.lowerLimit = t), (this.lowerLimitEnabled = !0))
            : ((this.lowerLimit = t), (this.lowerLimitEnabled = !1)),
            "number" == typeof e
              ? ((this.upperLimit = e), (this.upperLimitEnabled = !0))
              : ((this.upperLimit = e), (this.upperLimitEnabled = !1))
        })
    },
    "./node_modules/p2/src/constraints/RevoluteConstraint.js": function(
      t,
      e,
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
      t.exports = h
      var c = a.create(),
        l = a.create(),
        u = a.fromValues(1, 0),
        d = a.fromValues(0, 1),
        p = a.create()
      function h(t, e, o) {
        ;(o = o || {}), r.call(this, t, e, r.REVOLUTE, o)
        var h = (this.maxForce =
          void 0 !== o.maxForce ? o.maxForce : Number.MAX_VALUE)
        ;(this.pivotA = a.create()),
          (this.pivotB = a.create()),
          o.worldPivot
            ? (a.sub(this.pivotA, o.worldPivot, t.position),
              a.sub(this.pivotB, o.worldPivot, e.position),
              a.rotate(this.pivotA, this.pivotA, -t.angle),
              a.rotate(this.pivotB, this.pivotB, -e.angle))
            : (a.copy(this.pivotA, o.localPivotA),
              a.copy(this.pivotB, o.localPivotB))
        var f = (this.equations = [
            new s(t, e, -h, h),
            new s(t, e, -h, h),
          ]),
          m = f[0],
          y = f[1],
          v = this
        ;(m.computeGq = function() {
          return (
            a.rotate(c, v.pivotA, t.angle),
            a.rotate(l, v.pivotB, e.angle),
            a.add(p, e.position, l),
            a.sub(p, p, t.position),
            a.sub(p, p, c),
            a.dot(p, u)
          )
        }),
          (y.computeGq = function() {
            return (
              a.rotate(c, v.pivotA, t.angle),
              a.rotate(l, v.pivotB, e.angle),
              a.add(p, e.position, l),
              a.sub(p, p, t.position),
              a.sub(p, p, c),
              a.dot(p, d)
            )
          }),
          (y.minForce = m.minForce = -h),
          (y.maxForce = m.maxForce = h),
          (this.motorEquation = new i(t, e)),
          (this.motorEnabled = !1),
          (this.angle = 0),
          (this.lowerLimitEnabled = !1),
          (this.upperLimitEnabled = !1),
          (this.lowerLimit = 0),
          (this.upperLimit = 0),
          (this.upperLimitEquation = new n(t, e)),
          (this.lowerLimitEquation = new n(t, e)),
          (this.upperLimitEquation.minForce = 0),
          (this.lowerLimitEquation.maxForce = 0)
      }
      ;(h.prototype = new r()),
        (h.prototype.constructor = h),
        (h.prototype.setLimits = function(t, e) {
          "number" == typeof t
            ? ((this.lowerLimit = t), (this.lowerLimitEnabled = !0))
            : ((this.lowerLimit = t), (this.lowerLimitEnabled = !1)),
            "number" == typeof e
              ? ((this.upperLimit = e), (this.upperLimitEnabled = !0))
              : ((this.upperLimit = e), (this.upperLimitEnabled = !1))
        }),
        (h.prototype.update = function() {
          var t,
            e = this.bodyA,
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
            v = (this.angle = o.angle - e.angle)
          this.upperLimitEnabled && v > h
            ? ((m.angle = h), -1 === i.indexOf(m) && i.push(m))
            : -1 !== (t = i.indexOf(m)) && i.splice(t, 1)
          this.lowerLimitEnabled && v < f
            ? ((y.angle = f), -1 === i.indexOf(y) && i.push(y))
            : -1 !== (t = i.indexOf(y)) && i.splice(t, 1)
          a.rotate(c, r, e.angle),
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
            var t = this.equations.indexOf(this.motorEquation)
            this.equations.splice(t, 1), (this.motorEnabled = !1)
          }
        }),
        (h.prototype.motorIsEnabled = function() {
          return !!this.motorEnabled
        }),
        (h.prototype.setMotorSpeed = function(t) {
          if (this.motorEnabled) {
            var e = this.equations.indexOf(this.motorEquation)
            this.equations[e].relativeVelocity = t
          }
        }),
        (h.prototype.getMotorSpeed = function() {
          return (
            !!this.motorEnabled && this.motorEquation.relativeVelocity
          )
        })
    },
    "./node_modules/p2/src/equations/AngleLockEquation.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js")
      o("./node_modules/p2/src/math/vec2.js")
      function s(t, e, o) {
        ;(o = o || {}),
          r.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE),
          (this.angle = o.angle || 0),
          (this.ratio = "number" == typeof o.ratio ? o.ratio : 1),
          this.setRatio(this.ratio)
      }
      ;(t.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.computeGq = function() {
          return (
            this.ratio * this.bodyA.angle -
            this.bodyB.angle +
            this.angle
          )
        }),
        (s.prototype.setRatio = function(t) {
          var e = this.G
          ;(e[2] = t), (e[5] = -1), (this.ratio = t)
        }),
        (s.prototype.setMaxTorque = function(t) {
          ;(this.maxForce = t), (this.minForce = -t)
        })
    },
    "./node_modules/p2/src/equations/ContactEquation.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(t, e) {
        r.call(this, t, e, 0, Number.MAX_VALUE),
          (this.contactPointA = s.create()),
          (this.penetrationVec = s.create()),
          (this.contactPointB = s.create()),
          (this.normalA = s.create()),
          (this.restitution = 0),
          (this.firstImpact = !1),
          (this.shapeA = null),
          (this.shapeB = null)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeB = function(t, e, o) {
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
                  1 / e * (1 + this.restitution) * this.computeGW()))
              : ((i = s.dot(h, p) + this.offset),
                (r = this.computeGW())),
            -i * t - r * e - o * this.computeGiMf()
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
    "./node_modules/p2/src/equations/Equation.js": function(t, e, o) {
      t.exports = i
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/utils/Utils.js")
      o("./node_modules/p2/src/objects/Body.js")
      function i(t, e, o, r) {
        ;(this.minForce = void 0 === o ? -Number.MAX_VALUE : o),
          (this.maxForce = void 0 === r ? Number.MAX_VALUE : r),
          (this.bodyA = t),
          (this.bodyB = e),
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
          var t = this.stiffness,
            e = this.relaxation,
            o = this.timeStep
          ;(this.a = 4 / (o * (1 + 4 * e))),
            (this.b = 4 * e / (1 + 4 * e)),
            (this.epsilon = 4 / (o * o * t * (1 + 4 * e))),
            (this.needsUpdate = !1)
        }),
        (i.prototype.gmult = function(t, e, o, r, s) {
          return (
            t[0] * e[0] +
            t[1] * e[1] +
            t[2] * o +
            t[3] * r[0] +
            t[4] * r[1] +
            t[5] * s
          )
        }),
        (i.prototype.computeB = function(t, e, o) {
          var r = this.computeGW()
          return (
            -this.computeGq() * t - r * e - this.computeGiMf() * o
          )
        })
      var n = r.create(),
        a = r.create()
      ;(i.prototype.computeGq = function() {
        var t = this.G,
          e = this.bodyA,
          o = this.bodyB,
          r = (e.position, o.position, e.angle),
          s = o.angle
        return this.gmult(t, n, r, a, s) + this.offset
      }),
        (i.prototype.computeGW = function() {
          var t = this.G,
            e = this.bodyA,
            o = this.bodyB,
            r = e.velocity,
            s = o.velocity,
            i = e.angularVelocity,
            n = o.angularVelocity
          return this.gmult(t, r, i, s, n) + this.relativeVelocity
        }),
        (i.prototype.computeGWlambda = function() {
          var t = this.G,
            e = this.bodyA,
            o = this.bodyB,
            r = e.vlambda,
            s = o.vlambda,
            i = e.wlambda,
            n = o.wlambda
          return this.gmult(t, r, i, s, n)
        })
      var c = r.create(),
        l = r.create()
      ;(i.prototype.computeGiMf = function() {
        var t = this.bodyA,
          e = this.bodyB,
          o = t.force,
          s = t.angularForce,
          i = e.force,
          n = e.angularForce,
          a = t.invMassSolve,
          u = e.invMassSolve,
          d = t.invInertiaSolve,
          p = e.invInertiaSolve,
          h = this.G
        return (
          r.scale(c, o, a),
          r.multiply(c, t.massMultiplier, c),
          r.scale(l, i, u),
          r.multiply(l, e.massMultiplier, l),
          this.gmult(h, c, s * d, l, n * p)
        )
      }),
        (i.prototype.computeGiMGt = function() {
          var t = this.bodyA,
            e = this.bodyB,
            o = t.invMassSolve,
            r = e.invMassSolve,
            s = t.invInertiaSolve,
            i = e.invInertiaSolve,
            n = this.G
          return (
            n[0] * n[0] * o * t.massMultiplier[0] +
            n[1] * n[1] * o * t.massMultiplier[1] +
            n[2] * n[2] * s +
            n[3] * n[3] * r * e.massMultiplier[0] +
            n[4] * n[4] * r * e.massMultiplier[1] +
            n[5] * n[5] * i
          )
        })
      var u = r.create(),
        d = r.create(),
        p = r.create()
      r.create(), r.create(), r.create()
      ;(i.prototype.addToWlambda = function(t) {
        var e = this.bodyA,
          o = this.bodyB,
          s = u,
          i = d,
          n = p,
          a = e.invMassSolve,
          c = o.invMassSolve,
          l = e.invInertiaSolve,
          h = o.invInertiaSolve,
          f = this.G
        ;(i[0] = f[0]),
          (i[1] = f[1]),
          (n[0] = f[3]),
          (n[1] = f[4]),
          r.scale(s, i, a * t),
          r.multiply(s, s, e.massMultiplier),
          r.add(e.vlambda, e.vlambda, s),
          (e.wlambda += l * f[2] * t),
          r.scale(s, n, c * t),
          r.multiply(s, s, o.massMultiplier),
          r.add(o.vlambda, o.vlambda, s),
          (o.wlambda += h * f[5] * t)
      }),
        (i.prototype.computeInvC = function(t) {
          return 1 / (this.computeGiMGt() + t)
        })
    },
    "./node_modules/p2/src/equations/FrictionEquation.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/equations/Equation.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(t, e, o) {
        s.call(this, t, e, -o, o),
          (this.contactPointA = r.create()),
          (this.contactPointB = r.create()),
          (this.t = r.create()),
          (this.contactEquations = []),
          (this.shapeA = null),
          (this.shapeB = null),
          (this.frictionCoefficient = 0.3)
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.setSlipForce = function(t) {
          ;(this.maxForce = t), (this.minForce = -t)
        }),
        (i.prototype.getSlipForce = function() {
          return this.maxForce
        }),
        (i.prototype.computeB = function(t, e, o) {
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
            -this.computeGW() * e - o * this.computeGiMf()
          )
        })
    },
    "./node_modules/p2/src/equations/RotationalLockEquation.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(t, e, o) {
        ;(o = o || {}),
          r.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE),
          (this.angle = o.angle || 0)
        var s = this.G
        ;(s[2] = 1), (s[5] = -1)
      }
      ;(t.exports = i),
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
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/Equation.js")
      o("./node_modules/p2/src/math/vec2.js")
      function s(t, e) {
        r.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE),
          (this.relativeVelocity = 1),
          (this.ratio = 1)
      }
      ;(t.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.computeB = function(t, e, o) {
          var r = this.G
          ;(r[2] = -1), (r[5] = this.ratio)
          var s = this.computeGiMf()
          return -this.computeGW() * e - o * s
        })
    },
    "./node_modules/p2/src/events/EventEmitter.js": function(t, e) {
      var o = function() {}
      ;(t.exports = o),
        (o.prototype = {
          constructor: o,
          on: function(t, e, o) {
            ;(e.context = o || this),
              void 0 === this._listeners && (this._listeners = {})
            var r = this._listeners
            return (
              void 0 === r[t] && (r[t] = []),
              -1 === r[t].indexOf(e) && r[t].push(e),
              this
            )
          },
          has: function(t, e) {
            if (void 0 === this._listeners) return !1
            var o = this._listeners
            if (e) {
              if (void 0 !== o[t] && -1 !== o[t].indexOf(e)) return !0
            } else if (void 0 !== o[t]) return !0
            return !1
          },
          off: function(t, e) {
            if (void 0 === this._listeners) return this
            var o = this._listeners,
              r = o[t].indexOf(e)
            return -1 !== r && o[t].splice(r, 1), this
          },
          emit: function(t) {
            if (void 0 === this._listeners) return this
            var e = this._listeners[t.type]
            if (void 0 !== e) {
              t.target = this
              for (var o = 0, r = e.length; o < r; o++) {
                var s = e[o]
                s.call(s.context, t)
              }
            }
            return this
          },
        })
    },
    "./node_modules/p2/src/material/ContactMaterial.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/material/Material.js"),
        s = o("./node_modules/p2/src/equations/Equation.js")
      function i(t, e, o) {
        if (((o = o || {}), !(t instanceof r && e instanceof r)))
          throw new Error(
            "First two arguments must be Material instances.",
          )
        ;(this.id = i.idCounter++),
          (this.materialA = t),
          (this.materialB = e),
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
      ;(t.exports = i), (i.idCounter = 0)
    },
    "./node_modules/p2/src/material/Material.js": function(t, e) {
      function o(t) {
        this.id = t || o.idCounter++
      }
      ;(t.exports = o), (o.idCounter = 0)
    },
    "./node_modules/p2/src/math/polyk.js": function(t, e) {
      var o = {
        GetArea: function(t) {
          if (t.length < 6) return 0
          for (var e = t.length - 2, o = 0, r = 0; r < e; r += 2)
            o += (t[r + 2] - t[r]) * (t[r + 1] + t[r + 3])
          return 0.5 * -(o += (t[0] - t[e]) * (t[e + 1] + t[1]))
        },
        Triangulate: function(t) {
          var e = t.length >> 1
          if (e < 3) return []
          for (var r = [], s = [], i = 0; i < e; i++) s.push(i)
          i = 0
          for (var n = e; n > 3; ) {
            var a = s[(i + 0) % n],
              c = s[(i + 1) % n],
              l = s[(i + 2) % n],
              u = t[2 * a],
              d = t[2 * a + 1],
              p = t[2 * c],
              h = t[2 * c + 1],
              f = t[2 * l],
              m = t[2 * l + 1],
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
                    t[2 * b],
                    t[2 * b + 1],
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
        _PointInTriangle: function(t, e, o, r, s, i, n, a) {
          var c = n - o,
            l = a - r,
            u = s - o,
            d = i - r,
            p = t - o,
            h = e - r,
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
        _convex: function(t, e, o, r, s, i) {
          return (e - r) * (s - o) + (o - t) * (i - r) >= 0
        },
      }
      t.exports = o
    },
    "./node_modules/p2/src/math/vec2.js": function(t, e, o) {
      var r = (t.exports = {}),
        s = o("./node_modules/p2/src/utils/Utils.js")
      ;(r.crossLength = function(t, e) {
        return t[0] * e[1] - t[1] * e[0]
      }),
        (r.crossVZ = function(t, e, o) {
          return r.rotate(t, e, -Math.PI / 2), r.scale(t, t, o), t
        }),
        (r.crossZV = function(t, e, o) {
          return r.rotate(t, o, Math.PI / 2), r.scale(t, t, e), t
        }),
        (r.rotate = function(t, e, o) {
          if (0 !== o) {
            var r = Math.cos(o),
              s = Math.sin(o),
              i = e[0],
              n = e[1]
            ;(t[0] = r * i - s * n), (t[1] = s * i + r * n)
          } else (t[0] = e[0]), (t[1] = e[1])
        }),
        (r.rotate90cw = function(t, e) {
          var o = e[0],
            r = e[1]
          ;(t[0] = r), (t[1] = -o)
        }),
        (r.toLocalFrame = function(t, e, o, s) {
          r.copy(t, e), r.sub(t, t, o), r.rotate(t, t, -s)
        }),
        (r.toGlobalFrame = function(t, e, o, s) {
          r.copy(t, e), r.rotate(t, t, s), r.add(t, t, o)
        }),
        (r.vectorToLocalFrame = function(t, e, o) {
          r.rotate(t, e, -o)
        }),
        (r.vectorToGlobalFrame = function(t, e, o) {
          r.rotate(t, e, o)
        }),
        (r.centroid = function(t, e, o, s) {
          return (
            r.add(t, e, o), r.add(t, t, s), r.scale(t, t, 1 / 3), t
          )
        }),
        (r.create = function() {
          var t = new s.ARRAY_TYPE(2)
          return (t[0] = 0), (t[1] = 0), t
        }),
        (r.clone = function(t) {
          var e = new s.ARRAY_TYPE(2)
          return (e[0] = t[0]), (e[1] = t[1]), e
        }),
        (r.fromValues = function(t, e) {
          var o = new s.ARRAY_TYPE(2)
          return (o[0] = t), (o[1] = e), o
        }),
        (r.copy = function(t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), t
        }),
        (r.set = function(t, e, o) {
          return (t[0] = e), (t[1] = o), t
        }),
        (r.add = function(t, e, o) {
          return (t[0] = e[0] + o[0]), (t[1] = e[1] + o[1]), t
        }),
        (r.subtract = function(t, e, o) {
          return (t[0] = e[0] - o[0]), (t[1] = e[1] - o[1]), t
        }),
        (r.sub = r.subtract),
        (r.multiply = function(t, e, o) {
          return (t[0] = e[0] * o[0]), (t[1] = e[1] * o[1]), t
        }),
        (r.mul = r.multiply),
        (r.divide = function(t, e, o) {
          return (t[0] = e[0] / o[0]), (t[1] = e[1] / o[1]), t
        }),
        (r.div = r.divide),
        (r.scale = function(t, e, o) {
          return (t[0] = e[0] * o), (t[1] = e[1] * o), t
        }),
        (r.distance = function(t, e) {
          var o = e[0] - t[0],
            r = e[1] - t[1]
          return Math.sqrt(o * o + r * r)
        }),
        (r.dist = r.distance),
        (r.squaredDistance = function(t, e) {
          var o = e[0] - t[0],
            r = e[1] - t[1]
          return o * o + r * r
        }),
        (r.sqrDist = r.squaredDistance),
        (r.length = function(t) {
          var e = t[0],
            o = t[1]
          return Math.sqrt(e * e + o * o)
        }),
        (r.len = r.length),
        (r.squaredLength = function(t) {
          var e = t[0],
            o = t[1]
          return e * e + o * o
        }),
        (r.sqrLen = r.squaredLength),
        (r.negate = function(t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), t
        }),
        (r.normalize = function(t, e) {
          var o = e[0],
            r = e[1],
            s = o * o + r * r
          return (
            s > 0 &&
              ((s = 1 / Math.sqrt(s)),
              (t[0] = e[0] * s),
              (t[1] = e[1] * s)),
            t
          )
        }),
        (r.dot = function(t, e) {
          return t[0] * e[0] + t[1] * e[1]
        }),
        (r.str = function(t) {
          return "vec2(" + t[0] + ", " + t[1] + ")"
        }),
        (r.lerp = function(t, e, o, r) {
          var s = e[0],
            i = e[1]
          return (
            (t[0] = s + r * (o[0] - s)),
            (t[1] = i + r * (o[1] - i)),
            t
          )
        }),
        (r.reflect = function(t, e, o) {
          var r = e[0] * o[0] + e[1] * o[1]
          ;(t[0] = e[0] - 2 * o[0] * r), (t[1] = e[1] - 2 * o[1] * r)
        }),
        (r.getLineSegmentsIntersection = function(t, e, o, s, i) {
          var n = r.getLineSegmentsIntersectionFraction(e, o, s, i)
          return (
            !(n < 0) &&
            ((t[0] = e[0] + n * (o[0] - e[0])),
            (t[1] = e[1] + n * (o[1] - e[1])),
            !0)
          )
        }),
        (r.getLineSegmentsIntersectionFraction = function(
          t,
          e,
          o,
          r,
        ) {
          var s,
            i,
            n = e[0] - t[0],
            a = e[1] - t[1],
            c = r[0] - o[0],
            l = r[1] - o[1]
          return (
            (s =
              (-a * (t[0] - o[0]) + n * (t[1] - o[1])) /
              (-c * a + n * l)),
            (i =
              (c * (t[1] - o[1]) - l * (t[0] - o[0])) /
              (-c * a + n * l)),
            s >= 0 && s <= 1 && i >= 0 && i <= 1 ? i : -1
          )
        })
    },
    "./node_modules/p2/src/objects/Body.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/poly-decomp/src/index.js"),
        i = o("./node_modules/p2/src/shapes/Convex.js"),
        n = o("./node_modules/p2/src/collision/RaycastResult.js"),
        a = o("./node_modules/p2/src/collision/Ray.js"),
        c = o("./node_modules/p2/src/collision/AABB.js"),
        l = o("./node_modules/p2/src/events/EventEmitter.js")
      function u(t) {
        ;(t = t || {}),
          l.call(this),
          (this.id = t.id || ++u._idCounter),
          (this.world = null),
          (this.shapes = []),
          (this.mass = t.mass || 0),
          (this.invMass = 0),
          (this.inertia = 0),
          (this.invInertia = 0),
          (this.invMassSolve = 0),
          (this.invInertiaSolve = 0),
          (this.fixedRotation = !!t.fixedRotation),
          (this.fixedX = !!t.fixedX),
          (this.fixedY = !!t.fixedY),
          (this.massMultiplier = r.create()),
          (this.position = r.fromValues(0, 0)),
          t.position && r.copy(this.position, t.position),
          (this.interpolatedPosition = r.fromValues(0, 0)),
          (this.interpolatedAngle = 0),
          (this.previousPosition = r.fromValues(0, 0)),
          (this.previousAngle = 0),
          (this.velocity = r.fromValues(0, 0)),
          t.velocity && r.copy(this.velocity, t.velocity),
          (this.vlambda = r.fromValues(0, 0)),
          (this.wlambda = 0),
          (this.angle = t.angle || 0),
          (this.angularVelocity = t.angularVelocity || 0),
          (this.force = r.create()),
          t.force && r.copy(this.force, t.force),
          (this.angularForce = t.angularForce || 0),
          (this.damping =
            "number" == typeof t.damping ? t.damping : 0.1),
          (this.angularDamping =
            "number" == typeof t.angularDamping
              ? t.angularDamping
              : 0.1),
          (this.type = u.STATIC),
          void 0 !== t.type
            ? (this.type = t.type)
            : t.mass
              ? (this.type = u.DYNAMIC)
              : (this.type = u.STATIC),
          (this.boundingRadius = 0),
          (this.aabb = new c()),
          (this.aabbNeedsUpdate = !0),
          (this.allowSleep = void 0 === t.allowSleep || t.allowSleep),
          (this.wantsToSleep = !1),
          (this.sleepState = u.AWAKE),
          (this.sleepSpeedLimit =
            void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : 0.2),
          (this.sleepTimeLimit =
            void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1),
          (this.gravityScale =
            void 0 !== t.gravityScale ? t.gravityScale : 1),
          (this.collisionResponse =
            void 0 === t.collisionResponse || t.collisionResponse),
          (this.idleTime = 0),
          (this.timeLastSleepy = 0),
          (this.ccdSpeedThreshold =
            void 0 !== t.ccdSpeedThreshold
              ? t.ccdSpeedThreshold
              : -1),
          (this.ccdIterations =
            void 0 !== t.ccdIterations ? t.ccdIterations : 10),
          (this.concavePath = null),
          (this._wakeUpAfterNarrowphase = !1),
          this.updateMassProperties()
      }
      ;(t.exports = u),
        (u.prototype = new l()),
        (u.prototype.constructor = u),
        (u._idCounter = 0),
        (u.prototype.updateSolveMassProperties = function() {
          this.sleepState === u.SLEEPING || this.type === u.KINEMATIC
            ? ((this.invMassSolve = 0), (this.invInertiaSolve = 0))
            : ((this.invMassSolve = this.invMass),
              (this.invInertiaSolve = this.invInertia))
        }),
        (u.prototype.setDensity = function(t) {
          var e = this.getArea()
          ;(this.mass = e * t), this.updateMassProperties()
        }),
        (u.prototype.getArea = function() {
          for (var t = 0, e = 0; e < this.shapes.length; e++)
            t += this.shapes[e].area
          return t
        }),
        (u.prototype.getAABB = function() {
          return this.aabbNeedsUpdate && this.updateAABB(), this.aabb
        })
      var d = new c(),
        p = r.create()
      ;(u.prototype.updateAABB = function() {
        for (
          var t = this.shapes,
            e = t.length,
            o = p,
            s = this.angle,
            i = 0;
          i !== e;
          i++
        ) {
          var n = t[i],
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
            var t = this.shapes, e = t.length, o = 0, s = 0;
            s !== e;
            s++
          ) {
            var i = t[s],
              n = r.length(i.position),
              a = i.boundingRadius
            n + a > o && (o = n + a)
          }
          this.boundingRadius = o
        }),
        (u.prototype.addShape = function(t, e, o) {
          if (t.body)
            throw new Error("A shape can only be added to one body.")
          ;(t.body = this),
            e ? r.copy(t.position, e) : r.set(t.position, 0, 0),
            (t.angle = o || 0),
            this.shapes.push(t),
            this.updateMassProperties(),
            this.updateBoundingRadius(),
            (this.aabbNeedsUpdate = !0)
        }),
        (u.prototype.removeShape = function(t) {
          var e = this.shapes.indexOf(t)
          return (
            -1 !== e &&
            (this.shapes.splice(e, 1),
            (this.aabbNeedsUpdate = !0),
            (t.body = null),
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
            var t = this.shapes,
              e = t.length,
              o = this.mass / e,
              s = 0
            if (this.fixedRotation)
              (this.inertia = Number.MAX_VALUE), (this.invInertia = 0)
            else {
              for (var i = 0; i < e; i++) {
                var n = t[i],
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
      u.prototype.applyForce = function(t, e) {
        if ((r.add(this.force, this.force, t), e)) {
          var o = r.crossLength(e, t)
          this.angularForce += o
        }
      }
      var h = r.create(),
        f = r.create(),
        m = r.create()
      u.prototype.applyForceLocal = function(t, e) {
        e = e || m
        var o = h,
          r = f
        this.vectorToWorldFrame(o, t),
          this.vectorToWorldFrame(r, e),
          this.applyForce(o, r)
      }
      var y = r.create()
      u.prototype.applyImpulse = function(t, e) {
        if (this.type === u.DYNAMIC) {
          var o = y
          if (
            (r.scale(o, t, this.invMass),
            r.multiply(o, this.massMultiplier, o),
            r.add(this.velocity, o, this.velocity),
            e)
          ) {
            var s = r.crossLength(e, t)
            ;(s *= this.invInertia), (this.angularVelocity += s)
          }
        }
      }
      var v = r.create(),
        b = r.create(),
        j = r.create()
      ;(u.prototype.applyImpulseLocal = function(t, e) {
        e = e || j
        var o = v,
          r = b
        this.vectorToWorldFrame(o, t),
          this.vectorToWorldFrame(r, e),
          this.applyImpulse(o, r)
      }),
        (u.prototype.toLocalFrame = function(t, e) {
          r.toLocalFrame(t, e, this.position, this.angle)
        }),
        (u.prototype.toWorldFrame = function(t, e) {
          r.toGlobalFrame(t, e, this.position, this.angle)
        }),
        (u.prototype.vectorToLocalFrame = function(t, e) {
          r.vectorToLocalFrame(t, e, this.angle)
        }),
        (u.prototype.vectorToWorldFrame = function(t, e) {
          r.vectorToGlobalFrame(t, e, this.angle)
        }),
        (u.prototype.fromPolygon = function(t, e) {
          e = e || {}
          for (var o = this.shapes.length; o >= 0; --o)
            this.removeShape(this.shapes[o])
          var n,
            a = new s.Polygon()
          if (
            ((a.vertices = t),
            a.makeCCW(),
            "number" == typeof e.removeCollinearPoints &&
              a.removeCollinearPoints(e.removeCollinearPoints),
            void 0 === e.skipSimpleCheck && !a.isSimple())
          )
            return !1
          this.concavePath = a.vertices.slice(0)
          for (o = 0; o < this.concavePath.length; o++) {
            var c = [0, 0]
            r.copy(c, this.concavePath[o]), (this.concavePath[o] = c)
          }
          n = e.optimalDecomp ? a.decomp() : a.quickDecomp()
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
        var t = _,
          e = g,
          o = A,
          s = 0
        r.set(e, 0, 0)
        for (var i = 0; i !== this.shapes.length; i++) {
          var n = this.shapes[i]
          r.scale(t, n.position, n.area),
            r.add(e, e, t),
            (s += n.area)
        }
        r.scale(o, e, 1 / s)
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
          var t = this.vlambda
          r.set(t, 0, 0), (this.wlambda = 0)
        }),
        (u.prototype.addConstraintVelocity = function() {
          var t = this,
            e = t.velocity
          r.add(e, e, t.vlambda), (t.angularVelocity += t.wlambda)
        }),
        (u.prototype.applyDamping = function(t) {
          if (this.type === u.DYNAMIC) {
            var e = this.velocity
            r.scale(e, e, Math.pow(1 - this.damping, t)),
              (this.angularVelocity *= Math.pow(
                1 - this.angularDamping,
                t,
              ))
          }
        }),
        (u.prototype.wakeUp = function() {
          var t = this.sleepState
          ;(this.sleepState = u.AWAKE),
            (this.idleTime = 0),
            t !== u.AWAKE && this.emit(u.wakeUpEvent)
        }),
        (u.prototype.sleep = function() {
          ;(this.sleepState = u.SLEEPING),
            (this.angularVelocity = 0),
            (this.angularForce = 0),
            r.set(this.velocity, 0, 0),
            r.set(this.force, 0, 0),
            this.emit(u.sleepEvent)
        }),
        (u.prototype.sleepTick = function(t, e, o) {
          if (this.allowSleep && this.type !== u.SLEEPING) {
            this.wantsToSleep = !1
            this.sleepState
            r.squaredLength(this.velocity) +
              Math.pow(this.angularVelocity, 2) >=
            Math.pow(this.sleepSpeedLimit, 2)
              ? ((this.idleTime = 0), (this.sleepState = u.AWAKE))
              : ((this.idleTime += o), (this.sleepState = u.SLEEPY)),
              this.idleTime > this.sleepTimeLimit &&
                (e ? (this.wantsToSleep = !0) : this.sleep())
          }
        }),
        (u.prototype.overlaps = function(t) {
          return this.world.overlapKeeper.bodiesAreOverlapping(
            this,
            t,
          )
        })
      var E = r.create(),
        w = r.create()
      u.prototype.integrate = function(t) {
        var e = this.invMass,
          o = this.force,
          s = this.position,
          i = this.velocity
        r.copy(this.previousPosition, this.position),
          (this.previousAngle = this.angle),
          this.fixedRotation ||
            (this.angularVelocity +=
              this.angularForce * this.invInertia * t),
          r.scale(E, o, t * e),
          r.multiply(E, this.massMultiplier, E),
          r.add(i, E, i),
          this.integrateToTimeOfImpact(t) ||
            (r.scale(w, i, t),
            r.add(s, s, w),
            this.fixedRotation ||
              (this.angle += this.angularVelocity * t)),
          (this.aabbNeedsUpdate = !0)
      }
      var P = new n(),
        B = new a({ mode: a.ALL }),
        x = r.create(),
        S = r.create(),
        L = r.create(),
        q = r.create()
      ;(u.prototype.integrateToTimeOfImpact = function(t) {
        if (
          this.ccdSpeedThreshold < 0 ||
          r.squaredLength(this.velocity) <
            Math.pow(this.ccdSpeedThreshold, 2)
        )
          return !1
        r.normalize(x, this.velocity),
          r.scale(S, this.velocity, t),
          r.add(S, S, this.position),
          r.sub(L, S, this.position)
        var e,
          o = this.angularVelocity * t,
          s = r.length(L),
          i = 1,
          n = this
        if (
          (P.reset(),
          (B.callback = function(t) {
            t.body !== n &&
              ((e = t.body),
              t.getHitPoint(S, B),
              r.sub(L, S, n.position),
              (i = r.length(L) / s),
              t.stop())
          }),
          r.copy(B.from, this.position),
          r.copy(B.to, S),
          B.update(),
          this.world.raycast(P, B),
          !e)
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
            r.scale(w, L, i),
            r.add(this.position, q, w),
            (this.angle = a + o * i),
            this.updateAABB(),
            this.aabb.overlaps(e.aabb) &&
            this.world.narrowphase.bodiesOverlap(this, e)
              ? (l = u)
              : (d = u)
        }
        return (
          (i = u),
          r.copy(this.position, q),
          (this.angle = a),
          r.scale(w, L, i),
          r.add(this.position, this.position, w),
          this.fixedRotation || (this.angle += o * i),
          !0
        )
      }),
        (u.prototype.getVelocityAtPoint = function(t, e) {
          return (
            r.crossVZ(t, e, this.angularVelocity),
            r.subtract(t, this.velocity, t),
            t
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
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/objects/Spring.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(t, e, o) {
        ;(o = o || {}),
          s.call(this, t, e, o),
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
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.setWorldAnchorA = function(t) {
          this.bodyA.toLocalFrame(this.localAnchorA, t)
        }),
        (i.prototype.setWorldAnchorB = function(t) {
          this.bodyB.toLocalFrame(this.localAnchorB, t)
        }),
        (i.prototype.getWorldAnchorA = function(t) {
          this.bodyA.toWorldFrame(t, this.localAnchorA)
        }),
        (i.prototype.getWorldAnchorB = function(t) {
          this.bodyB.toWorldFrame(t, this.localAnchorB)
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
        var t = this.stiffness,
          e = this.damping,
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
        var w = r.len(m)
        r.normalize(y, m),
          r.sub(v, i.velocity, s.velocity),
          r.crossZV(j, i.angularVelocity, E),
          r.add(v, v, j),
          r.crossZV(j, s.angularVelocity, A),
          r.sub(v, v, j),
          r.scale(b, y, -t * (w - o) - e * r.dot(v, y)),
          r.sub(s.force, s.force, b),
          r.add(i.force, i.force, b)
        var P = r.crossLength(A, b),
          B = r.crossLength(E, b)
        ;(s.angularForce -= P), (i.angularForce += B)
      }
    },
    "./node_modules/p2/src/objects/RotationalSpring.js": function(
      t,
      e,
      o,
    ) {
      o("./node_modules/p2/src/math/vec2.js")
      var r = o("./node_modules/p2/src/objects/Spring.js")
      function s(t, e, o) {
        ;(o = o || {}),
          r.call(this, t, e, o),
          (this.restAngle =
            "number" == typeof o.restAngle
              ? o.restAngle
              : e.angle - t.angle)
      }
      ;(t.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.applyForce = function() {
          var t = this.stiffness,
            e = this.damping,
            o = this.restAngle,
            r = this.bodyA,
            s = this.bodyB,
            i =
              -t * (s.angle - r.angle - o) -
              e * (s.angularVelocity - r.angularVelocity) * 0
          ;(r.angularForce -= i), (s.angularForce += i)
        })
    },
    "./node_modules/p2/src/objects/Spring.js": function(t, e, o) {
      o("./node_modules/p2/src/math/vec2.js")
      var r = o("./node_modules/p2/src/utils/Utils.js")
      function s(t, e, o) {
        ;(o = r.defaults(o, { stiffness: 100, damping: 1 })),
          (this.stiffness = o.stiffness),
          (this.damping = o.damping),
          (this.bodyA = t),
          (this.bodyB = e)
      }
      ;(t.exports = s), (s.prototype.applyForce = function() {})
    },
    "./node_modules/p2/src/objects/TopDownVehicle.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = (o("./node_modules/p2/src/utils/Utils.js"),
        o("./node_modules/p2/src/constraints/Constraint.js")),
        i = o("./node_modules/p2/src/equations/FrictionEquation.js"),
        n = o("./node_modules/p2/src/objects/Body.js")
      function a(t, e) {
        ;(e = e || {}),
          (this.chassisBody = t),
          (this.wheels = []),
          (this.groundBody = new n({ mass: 0 })),
          (this.world = null)
        var o = this
        this.preStepCallback = function() {
          o.update()
        }
      }
      function c(t, e) {
        ;(e = e || {}),
          (this.vehicle = t),
          (this.forwardEquation = new i(t.chassisBody, t.groundBody)),
          (this.sideEquation = new i(t.chassisBody, t.groundBody)),
          (this.steerValue = 0),
          (this.engineForce = 0),
          this.setSideFriction(
            void 0 !== e.sideFriction ? e.sideFriction : 5,
          ),
          (this.localForwardVector = r.fromValues(0, 1)),
          e.localForwardVector &&
            r.copy(this.localForwardVector, e.localForwardVector),
          (this.localPosition = r.fromValues(0, 0)),
          e.localPosition &&
            r.copy(this.localPosition, e.localPosition),
          s.apply(this, t.chassisBody, t.groundBody),
          this.equations.push(
            this.forwardEquation,
            this.sideEquation,
          ),
          this.setBrakeForce(0)
      }
      ;(t.exports = a),
        (a.prototype.addToWorld = function(t) {
          ;(this.world = t),
            t.addBody(this.groundBody),
            t.on("preStep", this.preStepCallback)
          for (var e = 0; e < this.wheels.length; e++) {
            var o = this.wheels[e]
            t.addConstraint(o)
          }
        }),
        (a.prototype.removeFromWorld = function() {
          var t = this.world
          t.removeBody(this.groundBody),
            t.off("preStep", this.preStepCallback)
          for (var e = 0; e < this.wheels.length; e++) {
            var o = this.wheels[e]
            t.removeConstraint(o)
          }
          this.world = null
        }),
        (a.prototype.addWheel = function(t) {
          var e = new c(this, t)
          return this.wheels.push(e), e
        }),
        (a.prototype.update = function() {
          for (var t = 0; t < this.wheels.length; t++)
            this.wheels[t].update()
        }),
        (c.prototype = new s()),
        (c.prototype.setBrakeForce = function(t) {
          this.forwardEquation.setSlipForce(t)
        }),
        (c.prototype.setSideFriction = function(t) {
          this.sideEquation.setSlipForce(t)
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
    "./node_modules/p2/src/p2.js": function(t, e, o) {
      var r = (t.exports = {
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
    "./node_modules/p2/src/shapes/Box.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/shapes/Shape.js"),
        i = o("./node_modules/p2/src/shapes/Convex.js")
      function n(t) {
        "number" == typeof arguments[0] &&
          "number" == typeof arguments[1] &&
          ((t = { width: arguments[0], height: arguments[1] }),
          console.warn(
            "The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })",
          )),
          (t = t || {})
        var e = (this.width = t.width || 1),
          o = (this.height = t.height || 1),
          n = [
            r.fromValues(-e / 2, -o / 2),
            r.fromValues(e / 2, -o / 2),
            r.fromValues(e / 2, o / 2),
            r.fromValues(-e / 2, o / 2),
          ],
          a = [r.fromValues(1, 0), r.fromValues(0, 1)]
        ;(t.vertices = n),
          (t.axes = a),
          (t.type = s.BOX),
          i.call(this, t)
      }
      ;(t.exports = n),
        (n.prototype = new i()),
        (n.prototype.constructor = n),
        (n.prototype.computeMomentOfInertia = function(t) {
          var e = this.width,
            o = this.height
          return t * (o * o + e * e) / 12
        }),
        (n.prototype.updateBoundingRadius = function() {
          var t = this.width,
            e = this.height
          this.boundingRadius = Math.sqrt(t * t + e * e) / 2
        })
      r.create(), r.create(), r.create(), r.create()
      ;(n.prototype.computeAABB = function(t, e, o) {
        t.setFromPoints(this.vertices, e, o, 0)
      }),
        (n.prototype.updateArea = function() {
          this.area = this.width * this.height
        })
    },
    "./node_modules/p2/src/shapes/Capsule.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(t) {
        "number" == typeof arguments[0] &&
          "number" == typeof arguments[1] &&
          ((t = { length: arguments[0], radius: arguments[1] }),
          console.warn(
            "The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })",
          )),
          (t = t || {}),
          (this.length = t.length || 1),
          (this.radius = t.radius || 1),
          (t.type = r.CAPSULE),
          r.call(this, t)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(t) {
          var e = this.radius,
            o = this.length + e,
            r = 2 * e
          return t * (r * r + o * o) / 12
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
      i.prototype.computeAABB = function(t, e, o) {
        var r = this.radius
        s.set(n, this.length / 2, 0),
          0 !== o && s.rotate(n, n, o),
          s.set(
            t.upperBound,
            Math.max(n[0] + r, -n[0] + r),
            Math.max(n[1] + r, -n[1] + r),
          ),
          s.set(
            t.lowerBound,
            Math.min(n[0] - r, -n[0] - r),
            Math.min(n[1] - r, -n[1] - r),
          ),
          s.add(t.lowerBound, t.lowerBound, e),
          s.add(t.upperBound, t.upperBound, e)
      }
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.create(),
        d = s.fromValues(0, 1)
      i.prototype.raycast = function(t, e, o, r) {
        for (
          var i = e.from,
            n = e.to,
            p = (e.direction, a),
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
              e.reportIntersection(t, _, h, -1),
              t.shouldStop(e)))
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
                  e.reportIntersection(t, _, h, -1),
                  t.shouldStop(e)))
              )
                return
            } else {
              var w = Math.sqrt(_),
                P = 1 / (2 * g),
                B = (-A - w) * P,
                x = (-A + w) * P
              if (
                B >= 0 &&
                B <= 1 &&
                (s.lerp(p, i, n, B),
                s.squaredDistance(p, o) > j &&
                  (s.sub(h, p, f),
                  s.normalize(h, h),
                  e.reportIntersection(t, B, h, -1),
                  t.shouldStop(e)))
              )
                return
              if (
                x >= 0 &&
                x <= 1 &&
                (s.lerp(p, i, n, x),
                s.squaredDistance(p, o) > j &&
                  (s.sub(h, p, f),
                  s.normalize(h, h),
                  e.reportIntersection(t, x, h, -1),
                  t.shouldStop(e)))
              )
                return
            }
        }
      }
    },
    "./node_modules/p2/src/shapes/Circle.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(t) {
        "number" == typeof arguments[0] &&
          ((t = { radius: arguments[0] }),
          console.warn(
            "The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })",
          )),
          (t = t || {}),
          (this.radius = t.radius || 1),
          (t.type = r.CIRCLE),
          r.call(this, t)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(t) {
          var e = this.radius
          return t * e * e / 2
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = this.radius
        }),
        (i.prototype.updateArea = function() {
          this.area = Math.PI * this.radius * this.radius
        }),
        (i.prototype.computeAABB = function(t, e, o) {
          var r = this.radius
          s.set(t.upperBound, r, r),
            s.set(t.lowerBound, -r, -r),
            e &&
              (s.add(t.lowerBound, t.lowerBound, e),
              s.add(t.upperBound, t.upperBound, e))
        })
      var n = s.create(),
        a = s.create()
      i.prototype.raycast = function(t, e, o, r) {
        var i = e.from,
          c = e.to,
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
              e.reportIntersection(t, h, m, -1)
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
              e.reportIntersection(t, b, m, -1),
              t.shouldStop(e))
            )
              return
            j >= 0 &&
              j <= 1 &&
              (s.lerp(f, i, c, j),
              s.sub(m, f, o),
              s.normalize(m, m),
              e.reportIntersection(t, j, m, -1))
          }
      }
    },
    "./node_modules/p2/src/shapes/Convex.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js"),
        i = o("./node_modules/p2/src/math/polyk.js")
      o("./node_modules/poly-decomp/src/index.js")
      function n(t) {
        Array.isArray(arguments[0]) &&
          ((t = { vertices: arguments[0], axes: arguments[1] }),
          console.warn(
            "The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })",
          )),
          (t = t || {}),
          (this.vertices = [])
        for (
          var e = void 0 !== t.vertices ? t.vertices : [], o = 0;
          o < e.length;
          o++
        ) {
          var i = s.create()
          s.copy(i, e[o]), this.vertices.push(i)
        }
        if (((this.axes = []), t.axes))
          for (o = 0; o < t.axes.length; o++) {
            var n = s.create()
            s.copy(n, t.axes[o]), this.axes.push(n)
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
          (t.type = r.CONVEX),
          r.call(this, t),
          this.updateBoundingRadius(),
          this.updateArea(),
          this.area < 0)
        )
          throw new Error(
            "Convex vertices must be given in conter-clockwise winding.",
          )
      }
      ;(t.exports = n),
        (n.prototype = new r()),
        (n.prototype.constructor = n)
      var a = s.create(),
        c = s.create()
      ;(n.prototype.projectOntoLocalAxis = function(t, e) {
        for (
          var o, r, i = null, n = null, c = ((t = a), 0);
          c < this.vertices.length;
          c++
        )
          (o = this.vertices[c]),
            (r = s.dot(o, t)),
            (null === i || r > i) && (i = r),
            (null === n || r < n) && (n = r)
        if (n > i) {
          var l = n
          ;(n = i), (i = l)
        }
        s.set(e, n, i)
      }),
        (n.prototype.projectOntoWorldAxis = function(t, e, o, r) {
          var i = c
          this.projectOntoLocalAxis(t, r),
            0 !== o ? s.rotate(i, t, o) : (i = t)
          var n = s.dot(e, i)
          s.set(r, r[0] + n, r[1] + n)
        }),
        (n.prototype.updateTriangles = function() {
          this.triangles.length = 0
          for (var t = [], e = 0; e < this.vertices.length; e++) {
            var o = this.vertices[e]
            t.push(o[0], o[1])
          }
          var r = i.Triangulate(t)
          for (e = 0; e < r.length; e += 3) {
            var s = r[e],
              n = r[e + 1],
              a = r[e + 2]
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
        var t = this.triangles,
          e = this.vertices,
          o = this.centerOfMass,
          r = l,
          i = d,
          a = p,
          c = h,
          f = u
        s.set(o, 0, 0)
        for (var m = 0, y = 0; y !== t.length; y++) {
          var v = t[y]
          ;(i = e[v[0]]), (a = e[v[1]]), (c = e[v[2]])
          s.centroid(r, i, a, c)
          var b = n.triangleArea(i, a, c)
          ;(m += b), s.scale(f, r, b), s.add(o, o, f)
        }
        s.scale(o, o, 1 / m)
      }),
        (n.prototype.computeMomentOfInertia = function(t) {
          for (
            var e = 0,
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
            ;(e += l * (s.dot(c, c) + s.dot(c, a) + s.dot(a, a))),
              (o += l)
          }
          return t / 6 * (e / o)
        }),
        (n.prototype.updateBoundingRadius = function() {
          for (
            var t = this.vertices, e = 0, o = 0;
            o !== t.length;
            o++
          ) {
            var r = s.squaredLength(t[o])
            r > e && (e = r)
          }
          this.boundingRadius = Math.sqrt(e)
        }),
        (n.triangleArea = function(t, e, o) {
          return (
            0.5 *
            ((e[0] - t[0]) * (o[1] - t[1]) -
              (o[0] - t[0]) * (e[1] - t[1]))
          )
        }),
        (n.prototype.updateArea = function() {
          this.updateTriangles(), (this.area = 0)
          for (
            var t = this.triangles, e = this.vertices, o = 0;
            o !== t.length;
            o++
          ) {
            var r = t[o],
              s = e[r[0]],
              i = e[r[1]],
              a = e[r[2]],
              c = n.triangleArea(s, i, a)
            this.area += c
          }
        }),
        (n.prototype.computeAABB = function(t, e, o) {
          t.setFromPoints(this.vertices, e, o, 0)
        })
      var f = s.create(),
        m = s.create(),
        y = s.create()
      n.prototype.raycast = function(t, e, o, r) {
        var i = f,
          n = m,
          a = y,
          c = this.vertices
        s.toLocalFrame(i, e.from, o, r), s.toLocalFrame(n, e.to, o, r)
        for (
          var l = c.length, u = 0;
          u < l && !t.shouldStop(e);
          u++
        ) {
          var d = c[u],
            p = c[(u + 1) % l],
            h = s.getLineSegmentsIntersectionFraction(i, n, d, p)
          h >= 0 &&
            (s.sub(a, p, d),
            s.rotate(a, a, -Math.PI / 2 + r),
            s.normalize(a, a),
            e.reportIntersection(t, h, a, u))
        }
      }
    },
    "./node_modules/p2/src/shapes/Heightfield.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(t) {
        if (Array.isArray(arguments[0])) {
          if (
            ((t = { heights: arguments[0] }),
            "object" == typeof arguments[1])
          )
            for (var e in arguments[1]) t[e] = arguments[1][e]
          console.warn(
            "The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })",
          )
        }
        ;(t = t || {}),
          (this.heights = t.heights ? t.heights.slice(0) : []),
          (this.maxValue = t.maxValue || null),
          (this.minValue = t.minValue || null),
          (this.elementWidth = t.elementWidth || 0.1),
          (void 0 !== t.maxValue && void 0 !== t.minValue) ||
            this.updateMaxMinValues(),
          (t.type = r.HEIGHTFIELD),
          r.call(this, t)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.updateMaxMinValues = function() {
          for (
            var t = this.heights, e = t[0], o = t[0], r = 0;
            r !== t.length;
            r++
          ) {
            var s = t[r]
            s > e && (e = s), s < o && (o = s)
          }
          ;(this.maxValue = e), (this.minValue = o)
        }),
        (i.prototype.computeMomentOfInertia = function(t) {
          return Number.MAX_VALUE
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = Number.MAX_VALUE
        }),
        (i.prototype.updateArea = function() {
          for (
            var t = this.heights, e = 0, o = 0;
            o < t.length - 1;
            o++
          )
            e += (t[o] + t[o + 1]) / 2 * this.elementWidth
          this.area = e
        })
      var n = [s.create(), s.create(), s.create(), s.create()]
      ;(i.prototype.computeAABB = function(t, e, o) {
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
          t.setFromPoints(n, e, o)
      }),
        (i.prototype.getLineSegment = function(t, e, o) {
          var r = this.heights,
            i = this.elementWidth
          s.set(t, o * i, r[o]), s.set(e, (o + 1) * i, r[o + 1])
        }),
        (i.prototype.getSegmentIndex = function(t) {
          return Math.floor(t[0] / this.elementWidth)
        }),
        (i.prototype.getClampedSegmentIndex = function(t) {
          var e = this.getSegmentIndex(t)
          return (e = Math.min(this.heights.length, Math.max(e, 0)))
        })
      s.create()
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.create(),
        d = s.create()
      s.fromValues(0, 1)
      i.prototype.raycast = function(t, e, o, r) {
        var i = e.from,
          n = e.to,
          p = (e.direction, a),
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
            e.reportIntersection(t, g, p, -1),
            t.shouldStop(e))
          )
            return
        }
      }
    },
    "./node_modules/p2/src/shapes/Line.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(t) {
        "number" == typeof arguments[0] &&
          ((t = { length: arguments[0] }),
          console.warn(
            "The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })",
          )),
          (t = t || {}),
          (this.length = t.length || 1),
          (t.type = r.LINE),
          r.call(this, t)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(t) {
          return t * Math.pow(this.length, 2) / 12
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = this.length / 2
        })
      var n = [s.create(), s.create()]
      i.prototype.computeAABB = function(t, e, o) {
        var r = this.length / 2
        s.set(n[0], -r, 0),
          s.set(n[1], r, 0),
          t.setFromPoints(n, e, o, 0)
      }
      s.create()
      var a = s.create(),
        c = s.create(),
        l = s.create(),
        u = s.fromValues(0, 1)
      i.prototype.raycast = function(t, e, o, r) {
        var i = e.from,
          n = e.to,
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
          s.rotate(m, u, r), e.reportIntersection(t, f, m, -1)
        }
      }
    },
    "./node_modules/p2/src/shapes/Particle.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      function i(t) {
        ;((t = t || {}).type = r.PARTICLE), r.call(this, t)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(t) {
          return 0
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = 0
        }),
        (i.prototype.computeAABB = function(t, e, o) {
          s.copy(t.lowerBound, e), s.copy(t.upperBound, e)
        })
    },
    "./node_modules/p2/src/shapes/Plane.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/shapes/Shape.js"),
        s = o("./node_modules/p2/src/math/vec2.js")
      o("./node_modules/p2/src/utils/Utils.js")
      function i(t) {
        ;((t = t || {}).type = r.PLANE), r.call(this, t)
      }
      ;(t.exports = i),
        (i.prototype = new r()),
        (i.prototype.constructor = i),
        (i.prototype.computeMomentOfInertia = function(t) {
          return 0
        }),
        (i.prototype.updateBoundingRadius = function() {
          this.boundingRadius = Number.MAX_VALUE
        }),
        (i.prototype.computeAABB = function(t, e, o) {
          var r = o % (2 * Math.PI),
            i = s.set,
            n = t.lowerBound,
            a = t.upperBound
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
      i.prototype.raycast = function(t, e, o, r) {
        var i = e.from,
          l = e.to,
          u = e.direction,
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
          var y = -s.dot(p, d) / m / e.length
          e.reportIntersection(t, y, p, -1)
        }
      }
    },
    "./node_modules/p2/src/shapes/Shape.js": function(t, e, o) {
      t.exports = s
      var r = o("./node_modules/p2/src/math/vec2.js")
      function s(t) {
        ;(t = t || {}),
          (this.body = null),
          (this.position = r.fromValues(0, 0)),
          t.position && r.copy(this.position, t.position),
          (this.angle = t.angle || 0),
          (this.type = t.type || 0),
          (this.id = s.idCounter++),
          (this.boundingRadius = 0),
          (this.collisionGroup =
            void 0 !== t.collisionGroup ? t.collisionGroup : 1),
          (this.collisionResponse =
            void 0 === t.collisionResponse || t.collisionResponse),
          (this.collisionMask =
            void 0 !== t.collisionMask ? t.collisionMask : 1),
          (this.material = t.material || null),
          (this.area = 0),
          (this.sensor = void 0 !== t.sensor && t.sensor),
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
        (s.prototype.computeMomentOfInertia = function(t) {}),
        (s.prototype.updateBoundingRadius = function() {}),
        (s.prototype.updateArea = function() {}),
        (s.prototype.computeAABB = function(t, e, o) {}),
        (s.prototype.raycast = function(t, e, o, r) {})
    },
    "./node_modules/p2/src/solver/GSSolver.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/math/vec2.js"),
        s = o("./node_modules/p2/src/solver/Solver.js"),
        i = o("./node_modules/p2/src/utils/Utils.js"),
        n = o("./node_modules/p2/src/equations/FrictionEquation.js")
      function a(t) {
        s.call(this, t, s.GS),
          (t = t || {}),
          (this.iterations = t.iterations || 10),
          (this.tolerance = t.tolerance || 1e-7),
          (this.arrayStep = 30),
          (this.lambda = new i.ARRAY_TYPE(this.arrayStep)),
          (this.Bs = new i.ARRAY_TYPE(this.arrayStep)),
          (this.invCs = new i.ARRAY_TYPE(this.arrayStep)),
          (this.useZeroRHS = !1),
          (this.frictionIterations =
            void 0 !== t.frictionIterations
              ? 0
              : t.frictionIterations),
          (this.usedIterations = 0)
      }
      ;(t.exports = a),
        (a.prototype = new s()),
        (a.prototype.constructor = a),
        (a.prototype.solve = function(t, e) {
          this.sortEquations()
          var o = 0,
            s = this.iterations,
            c = this.frictionIterations,
            l = this.equations,
            u = l.length,
            d = Math.pow(this.tolerance * u, 2),
            p = e.bodies,
            h = e.bodies.length,
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
            (function(t) {
              for (var e = t.length; e--; ) t[e] = 0
            })(m)
          var v,
            b,
            j = this.invCs,
            _ = this.Bs
          for (m = this.lambda, y = 0; y !== l.length; y++) {
            var g
            ;((g = l[y]).timeStep !== t || g.needsUpdate) &&
              ((g.timeStep = t), g.update()),
              (_[y] = g.computeB(g.a, g.b, t)),
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
                    t,
                    o,
                  )
                  v += Math.abs(A)
                }
                if ((this.usedIterations++, v * v <= d)) break
              }
              for (
                a.updateMultipliers(l, m, 1 / t), b = 0;
                b !== u;
                b++
              ) {
                var E = l[b]
                if (E instanceof n) {
                  for (
                    var w = 0, P = 0;
                    P !== E.contactEquations.length;
                    P++
                  )
                    w += E.contactEquations[P].multiplier
                  ;(w *=
                    E.frictionCoefficient /
                    E.contactEquations.length),
                    (E.maxForce = w),
                    (E.minForce = -w)
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
                  t,
                  o,
                )
                v += Math.abs(A)
              }
              if ((this.usedIterations++, v * v <= d)) break
            }
            for (y = 0; y !== h; y++) p[y].addConstraintVelocity()
            a.updateMultipliers(l, m, 1 / t)
          }
        }),
        (a.updateMultipliers = function(t, e, o) {
          for (var r = t.length; r--; ) t[r].multiplier = e[r] * o
        }),
        (a.iterateEquation = function(t, e, o, r, s, i, n, a, c) {
          var l = r[t],
            u = s[t],
            d = i[t],
            p = e.computeGWlambda(),
            h = e.maxForce,
            f = e.minForce
          n && (l = 0)
          var m = u * (l - p - o * d),
            y = d + m
          return (
            y < f * a
              ? (m = f * a - d)
              : y > h * a && (m = h * a - d),
            (i[t] += m),
            e.addToWlambda(m),
            m
          )
        })
    },
    "./node_modules/p2/src/solver/Solver.js": function(t, e, o) {
      o("./node_modules/p2/src/utils/Utils.js")
      var r = o("./node_modules/p2/src/events/EventEmitter.js")
      function s(t, e) {
        ;(t = t || {}),
          r.call(this),
          (this.type = e),
          (this.equations = []),
          (this.equationSortFunction = t.equationSortFunction || !1)
      }
      ;(t.exports = s),
        (s.prototype = new r()),
        (s.prototype.constructor = s),
        (s.prototype.solve = function(t, e) {
          throw new Error(
            "Solver.solve should be implemented by subclasses!",
          )
        })
      var i = { bodies: [] }
      ;(s.prototype.solveIsland = function(t, e) {
        this.removeAllEquations(),
          e.equations.length &&
            (this.addEquations(e.equations),
            (i.bodies.length = 0),
            e.getBodies(i.bodies),
            i.bodies.length && this.solve(t, i))
      }),
        (s.prototype.sortEquations = function() {
          this.equationSortFunction &&
            this.equations.sort(this.equationSortFunction)
        }),
        (s.prototype.addEquation = function(t) {
          t.enabled && this.equations.push(t)
        }),
        (s.prototype.addEquations = function(t) {
          for (var e = 0, o = t.length; e !== o; e++) {
            var r = t[e]
            r.enabled && this.equations.push(r)
          }
        }),
        (s.prototype.removeEquation = function(t) {
          var e = this.equations.indexOf(t)
          ;-1 !== e && this.equations.splice(e, 1)
        }),
        (s.prototype.removeAllEquations = function() {
          this.equations.length = 0
        }),
        (s.GS = 1),
        (s.ISLAND = 2)
    },
    "./node_modules/p2/src/utils/ContactEquationPool.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/equations/ContactEquation.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(t) {
          return (t.bodyA = t.bodyB = null), this
        })
    },
    "./node_modules/p2/src/utils/FrictionEquationPool.js": function(
      t,
      e,
      o,
    ) {
      var r = o(
          "./node_modules/p2/src/equations/FrictionEquation.js",
        ),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(t) {
          return (t.bodyA = t.bodyB = null), this
        })
    },
    "./node_modules/p2/src/utils/IslandNodePool.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/world/IslandNode.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(t) {
          return t.reset(), this
        })
    },
    "./node_modules/p2/src/utils/IslandPool.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/world/Island.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(t) {
          return t.reset(), this
        })
    },
    "./node_modules/p2/src/utils/OverlapKeeper.js": function(
      t,
      e,
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
      ;(t.exports = i),
        (i.prototype.tick = function() {
          for (
            var t = this.overlappingShapesLastState,
              e = this.overlappingShapesCurrentState,
              o = t.keys.length;
            o--;

          ) {
            var r = t.keys[o],
              s = t.getByKey(r)
            e.getByKey(r)
            s && this.recordPool.release(s)
          }
          t.reset(), t.copy(e), e.reset()
        }),
        (i.prototype.setOverlapping = function(t, e, o, r) {
          this.overlappingShapesLastState
          var s = this.overlappingShapesCurrentState
          if (!s.get(e.id, r.id)) {
            var i = this.recordPool.get()
            i.set(t, e, o, r), s.set(e.id, r.id, i)
          }
        }),
        (i.prototype.getNewOverlaps = function(t) {
          return this.getDiff(
            this.overlappingShapesLastState,
            this.overlappingShapesCurrentState,
            t,
          )
        }),
        (i.prototype.getEndOverlaps = function(t) {
          return this.getDiff(
            this.overlappingShapesCurrentState,
            this.overlappingShapesLastState,
            t,
          )
        }),
        (i.prototype.bodiesAreOverlapping = function(t, e) {
          for (
            var o = this.overlappingShapesCurrentState,
              r = o.keys.length;
            r--;

          ) {
            var s = o.keys[r],
              i = o.data[s]
            if (
              (i.bodyA === t && i.bodyB === e) ||
              (i.bodyA === e && i.bodyB === t)
            )
              return !0
          }
          return !1
        }),
        (i.prototype.getDiff = function(t, e, o) {
          var r = t,
            s = e
          ;(o = o || []).length = 0
          for (var i = s.keys.length; i--; ) {
            var n = s.keys[i],
              a = s.data[n]
            if (!a) throw new Error("Key " + n + " had no data!")
            r.data[n] || o.push(a)
          }
          return o
        }),
        (i.prototype.isNewOverlap = function(t, e) {
          var o = 0 | t.id,
            r = 0 | e.id,
            s = this.overlappingShapesLastState,
            i = this.overlappingShapesCurrentState
          return !s.get(o, r) && !!i.get(o, r)
        }),
        (i.prototype.getNewBodyOverlaps = function(t) {
          this.tmpArray1.length = 0
          var e = this.getNewOverlaps(this.tmpArray1)
          return this.getBodyDiff(e, t)
        }),
        (i.prototype.getEndBodyOverlaps = function(t) {
          this.tmpArray1.length = 0
          var e = this.getEndOverlaps(this.tmpArray1)
          return this.getBodyDiff(e, t)
        }),
        (i.prototype.getBodyDiff = function(t, e) {
          e = e || []
          for (var o = this.tmpDict, r = t.length; r--; ) {
            var s = t[r]
            o.set(0 | s.bodyA.id, 0 | s.bodyB.id, s)
          }
          for (r = o.keys.length; r--; ) {
            ;(s = o.getByKey(o.keys[r])) && e.push(s.bodyA, s.bodyB)
          }
          return o.reset(), e
        })
    },
    "./node_modules/p2/src/utils/OverlapKeeperRecord.js": function(
      t,
      e,
    ) {
      function o(t, e, o, r) {
        ;(this.shapeA = e),
          (this.shapeB = r),
          (this.bodyA = t),
          (this.bodyB = o)
      }
      ;(t.exports = o),
        (o.prototype.set = function(t, e, r, s) {
          o.call(this, t, e, r, s)
        })
    },
    "./node_modules/p2/src/utils/OverlapKeeperRecordPool.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/OverlapKeeperRecord.js"),
        s = o("./node_modules/p2/src/utils/Pool.js")
      function i() {
        s.apply(this, arguments)
      }
      ;(t.exports = i),
        (i.prototype = new s()),
        (i.prototype.constructor = i),
        (i.prototype.create = function() {
          return new r()
        }),
        (i.prototype.destroy = function(t) {
          return (
            (t.bodyA = t.bodyB = t.shapeA = t.shapeB = null), this
          )
        })
    },
    "./node_modules/p2/src/utils/Pool.js": function(t, e) {
      function o(t) {
        ;(t = t || {}),
          (this.objects = []),
          void 0 !== t.size && this.resize(t.size)
      }
      ;(t.exports = o),
        (o.prototype.resize = function(t) {
          for (var e = this.objects; e.length > t; ) e.pop()
          for (; e.length < t; ) e.push(this.create())
          return this
        }),
        (o.prototype.get = function() {
          var t = this.objects
          return t.length ? t.pop() : this.create()
        }),
        (o.prototype.release = function(t) {
          return this.destroy(t), this.objects.push(t), this
        })
    },
    "./node_modules/p2/src/utils/TupleDictionary.js": function(
      t,
      e,
      o,
    ) {
      var r = o("./node_modules/p2/src/utils/Utils.js")
      function s() {
        ;(this.data = {}), (this.keys = [])
      }
      ;(t.exports = s),
        (s.prototype.getKey = function(t, e) {
          return (0 | (t |= 0)) == (0 | (e |= 0))
            ? -1
            : 0 |
                ((0 | t) > (0 | e)
                  ? (t << 16) | (65535 & e)
                  : (e << 16) | (65535 & t))
        }),
        (s.prototype.getByKey = function(t) {
          return (t |= 0), this.data[t]
        }),
        (s.prototype.get = function(t, e) {
          return this.data[this.getKey(t, e)]
        }),
        (s.prototype.set = function(t, e, o) {
          if (!o) throw new Error("No data!")
          var r = this.getKey(t, e)
          return (
            this.data[r] || this.keys.push(r), (this.data[r] = o), r
          )
        }),
        (s.prototype.reset = function() {
          for (var t = this.data, e = this.keys, o = e.length; o--; )
            delete t[e[o]]
          e.length = 0
        }),
        (s.prototype.copy = function(t) {
          this.reset(), r.appendArray(this.keys, t.keys)
          for (var e = t.keys.length; e--; ) {
            var o = t.keys[e]
            this.data[o] = t.data[o]
          }
        })
    },
    "./node_modules/p2/src/utils/Utils.js": function(t, e) {
      function o() {}
      ;(t.exports = o),
        (o.appendArray = function(t, e) {
          if (e.length < 15e4) t.push.apply(t, e)
          else
            for (var o = 0, r = e.length; o !== r; ++o) t.push(e[o])
        }),
        (o.splice = function(t, e, o) {
          o = o || 1
          for (var r = e, s = t.length - o; r < s; r++)
            t[r] = t[r + o]
          t.length = s
        }),
        "undefined" != typeof P2_ARRAY_TYPE
          ? (o.ARRAY_TYPE = P2_ARRAY_TYPE)
          : "undefined" != typeof Float32Array
            ? (o.ARRAY_TYPE = Float32Array)
            : (o.ARRAY_TYPE = Array),
        (o.extend = function(t, e) {
          for (var o in e) t[o] = e[o]
        }),
        (o.defaults = function(t, e) {
          for (var o in ((t = t || {}), e)) o in t || (t[o] = e[o])
          return t
        })
    },
    "./node_modules/p2/src/world/Island.js": function(t, e, o) {
      var r = o("./node_modules/p2/src/objects/Body.js")
      function s() {
        ;(this.equations = []), (this.bodies = [])
      }
      ;(t.exports = s),
        (s.prototype.reset = function() {
          this.equations.length = this.bodies.length = 0
        })
      var i = []
      ;(s.prototype.getBodies = function(t) {
        var e = t || [],
          o = this.equations
        i.length = 0
        for (var r = 0; r !== o.length; r++) {
          var s = o[r]
          ;-1 === i.indexOf(s.bodyA.id) &&
            (e.push(s.bodyA), i.push(s.bodyA.id)),
            -1 === i.indexOf(s.bodyB.id) &&
              (e.push(s.bodyB), i.push(s.bodyB.id))
        }
        return e
      }),
        (s.prototype.wantsToSleep = function() {
          for (var t = 0; t < this.bodies.length; t++) {
            var e = this.bodies[t]
            if (e.type === r.DYNAMIC && !e.wantsToSleep) return !1
          }
          return !0
        }),
        (s.prototype.sleep = function() {
          for (var t = 0; t < this.bodies.length; t++) {
            this.bodies[t].sleep()
          }
          return !0
        })
    },
    "./node_modules/p2/src/world/IslandManager.js": function(
      t,
      e,
      o,
    ) {
      o("./node_modules/p2/src/math/vec2.js"),
        o("./node_modules/p2/src/world/Island.js"),
        o("./node_modules/p2/src/world/IslandNode.js")
      var r = o("./node_modules/p2/src/utils/IslandNodePool.js"),
        s = o("./node_modules/p2/src/utils/IslandPool.js"),
        i = o("./node_modules/p2/src/objects/Body.js")
      function n(t) {
        ;(this.nodePool = new r({ size: 16 })),
          (this.islandPool = new s({ size: 8 })),
          (this.equations = []),
          (this.islands = []),
          (this.nodes = []),
          (this.queue = [])
      }
      ;(t.exports = n),
        (n.getUnvisitedNode = function(t) {
          for (var e = t.length, o = 0; o !== e; o++) {
            var r = t[o]
            if (!r.visited && r.body.type === i.DYNAMIC) return r
          }
          return !1
        }),
        (n.prototype.visit = function(t, e, o) {
          e.push(t.body)
          for (var r = t.equations.length, s = 0; s !== r; s++) {
            var i = t.equations[s]
            ;-1 === o.indexOf(i) && o.push(i)
          }
        }),
        (n.prototype.bfs = function(t, e, o) {
          var r = this.queue
          for (
            r.length = 0,
              r.push(t),
              t.visited = !0,
              this.visit(t, e, o);
            r.length;

          )
            for (
              var s, a = r.pop();
              (s = n.getUnvisitedNode(a.neighbors));

            )
              (s.visited = !0),
                this.visit(s, e, o),
                s.body.type === i.DYNAMIC && r.push(s)
        }),
        (n.prototype.split = function(t) {
          for (
            var e = t.bodies, o = this.nodes, r = this.equations;
            o.length;

          )
            this.nodePool.release(o.pop())
          for (var s = 0; s !== e.length; s++) {
            var i = this.nodePool.get()
            ;(i.body = e[s]), o.push(i)
          }
          for (var a = 0; a !== r.length; a++) {
            var c = r[a],
              l = ((s = e.indexOf(c.bodyA)), e.indexOf(c.bodyB)),
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
    "./node_modules/p2/src/world/IslandNode.js": function(t, e) {
      function o(t) {
        ;(this.body = t),
          (this.neighbors = []),
          (this.equations = []),
          (this.visited = !1)
      }
      ;(t.exports = o),
        (o.prototype.reset = function() {
          ;(this.equations.length = 0),
            (this.neighbors.length = 0),
            (this.visited = !1),
            (this.body = null)
        })
    },
    "./node_modules/p2/src/world/World.js": function(t, e, o) {
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
      function _(t) {
        u.apply(this),
          (t = t || {}),
          (this.springs = []),
          (this.bodies = []),
          (this.disabledBodyCollisionPairs = []),
          (this.solver = t.solver || new r()),
          (this.narrowphase = new y(this)),
          (this.islandManager = new j()),
          (this.gravity = s.fromValues(0, -9.78)),
          t.gravity && s.copy(this.gravity, t.gravity),
          (this.frictionGravity = s.length(this.gravity) || 10),
          (this.useWorldGravityAsFrictionGravity = !0),
          (this.useFrictionGravityOnZeroGravity = !0),
          (this.broadphase = t.broadphase || new m()),
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
            void 0 === t.islandSplit || !!t.islandSplit),
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
      ;(t.exports = _),
        (_.prototype = new Object(u.prototype)),
        (_.prototype.constructor = _),
        (_.NO_SLEEPING = 1),
        (_.BODY_SLEEPING = 2),
        (_.ISLAND_SLEEPING = 4),
        (_.prototype.addConstraint = function(t) {
          this.constraints.push(t)
        }),
        (_.prototype.addContactMaterial = function(t) {
          this.contactMaterials.push(t)
        }),
        (_.prototype.removeContactMaterial = function(t) {
          var e = this.contactMaterials.indexOf(t)
          ;-1 !== e && v.splice(this.contactMaterials, e, 1)
        }),
        (_.prototype.getContactMaterial = function(t, e) {
          for (
            var o = this.contactMaterials, r = 0, s = o.length;
            r !== s;
            r++
          ) {
            var i = o[r]
            if (
              (i.materialA.id === t.id && i.materialB.id === e.id) ||
              (i.materialA.id === e.id && i.materialB.id === t.id)
            )
              return i
          }
          return !1
        }),
        (_.prototype.removeConstraint = function(t) {
          var e = this.constraints.indexOf(t)
          ;-1 !== e && v.splice(this.constraints, e, 1)
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
      _.prototype.step = function(t, e, o) {
        if (((o = o || 10), 0 === (e = e || 0)))
          this.internalStep(t), (this.time += t)
        else {
          this.accumulator += e
          for (var r = 0; this.accumulator >= t && r < o; )
            this.internalStep(t),
              (this.time += t),
              (this.accumulator -= t),
              r++
          for (
            var i = (this.accumulator % t) / t, n = 0;
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
      var w = []
      ;(_.prototype.internalStep = function(t) {
        this.stepping = !0
        var e = this.springs.length,
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
          (this.lastTimeStep = t),
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
          for (y = 0; y !== e; y++) {
            o[y].applyForce()
          }
        if (this.applyDamping)
          for (y = 0; y !== a; y++) {
            var j
            ;(j = r[y]).type === d.DYNAMIC && j.applyDamping(t)
          }
        var A = c.getCollisionPairs(this),
          E = this.disabledBodyCollisionPairs
        for (y = E.length - 2; y >= 0; y -= 2)
          for (var P = A.length - 2; P >= 0; P -= 2)
            ((E[y] === A[P] && E[y + 1] === A[P + 1]) ||
              (E[y + 1] === A[P] && E[y] === A[P + 1])) &&
              A.splice(P, 2)
        var B = u.length
        for (y = 0; y !== B; y++) {
          var x = u[y]
          if (!x.collideConnected)
            for (P = A.length - 2; P >= 0; P -= 2)
              ((x.bodyA === A[P] && x.bodyB === A[P + 1]) ||
                (x.bodyB === A[P] && x.bodyA === A[P + 1])) &&
                A.splice(P, 2)
        }
        ;(this.postBroadphaseEvent.pairs = A),
          this.emit(this.postBroadphaseEvent),
          (this.postBroadphaseEvent.pairs = null),
          l.reset(this)
        y = 0
        for (var S = A.length; y !== S; y += 2)
          for (
            var L = A[y], q = A[y + 1], C = 0, M = L.shapes.length;
            C !== M;
            C++
          )
            for (
              var F = L.shapes[C],
                I = F.position,
                O = F.angle,
                R = 0,
                T = q.shapes.length;
              R !== T;
              R++
            ) {
              var k = q.shapes[R],
                V = k.position,
                N = k.angle,
                G = this.defaultContactMaterial
              if (F.material && k.material) {
                var D = this.getContactMaterial(
                  F.material,
                  k.material,
                )
                D && (G = D)
              }
              this.runNarrowphase(
                l,
                L,
                F,
                I,
                O,
                q,
                k,
                V,
                N,
                G,
                this.frictionGravity,
              )
            }
        for (y = 0; y !== a; y++) {
          ;(z = r[y])._wakeUpAfterNarrowphase &&
            (z.wakeUp(), (z._wakeUpAfterNarrowphase = !1))
        }
        if (this.has("endContact")) {
          this.overlapKeeper.getEndOverlaps(w)
          var U = this.endContactEvent
          for (R = w.length; R--; ) {
            var W = w[R]
            ;(U.shapeA = W.shapeA),
              (U.shapeB = W.shapeB),
              (U.bodyA = W.bodyA),
              (U.bodyB = W.bodyB),
              this.emit(U)
          }
          w.length = 0
        }
        var Y = this.preSolveEvent
        ;(Y.contactEquations = l.contactEquations),
          (Y.frictionEquations = l.frictionEquations),
          this.emit(Y),
          (Y.contactEquations = Y.frictionEquations = null)
        B = u.length
        for (y = 0; y !== B; y++) u[y].update()
        if (
          l.contactEquations.length ||
          l.frictionEquations.length ||
          B
        )
          if (this.islandSplit) {
            for (
              f.equations.length = 0,
                v.appendArray(f.equations, l.contactEquations),
                v.appendArray(f.equations, l.frictionEquations),
                y = 0;
              y !== B;
              y++
            )
              v.appendArray(f.equations, u[y].equations)
            f.split(this)
            for (y = 0; y !== f.islands.length; y++) {
              ;(K = f.islands[y]).equations.length &&
                n.solveIsland(t, K)
            }
          } else {
            for (
              n.addEquations(l.contactEquations),
                n.addEquations(l.frictionEquations),
                y = 0;
              y !== B;
              y++
            )
              n.addEquations(u[y].equations)
            this.solveConstraints && n.solve(t, this),
              n.removeAllEquations()
          }
        for (y = 0; y !== a; y++) {
          var z
          ;(z = r[y]).integrate(t)
        }
        for (y = 0; y !== a; y++) r[y].setZeroForce()
        if (this.emitImpactEvent && this.has("impact")) {
          var X = this.impactEvent
          for (y = 0; y !== l.contactEquations.length; y++) {
            var H = l.contactEquations[y]
            H.firstImpact &&
              ((X.bodyA = H.bodyA),
              (X.bodyB = H.bodyB),
              (X.shapeA = H.shapeA),
              (X.shapeB = H.shapeB),
              (X.contactEquation = H),
              this.emit(X))
          }
        }
        if (this.sleepMode === _.BODY_SLEEPING)
          for (y = 0; y !== a; y++) r[y].sleepTick(this.time, !1, t)
        else if (
          this.sleepMode === _.ISLAND_SLEEPING &&
          this.islandSplit
        ) {
          for (y = 0; y !== a; y++) r[y].sleepTick(this.time, !0, t)
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
          t,
          e,
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
            s.rotate(A, r, e.angle),
              s.rotate(E, c, n.angle),
              s.add(A, A, e.position),
              s.add(E, E, n.position)
            var h,
              f = i + e.angle,
              m = l + n.angle
            ;(t.enableFriction = u.friction > 0),
              (t.frictionCoefficient = u.friction),
              (h =
                e.type === d.STATIC || e.type === d.KINEMATIC
                  ? n.mass
                  : n.type === d.STATIC || n.type === d.KINEMATIC
                    ? e.mass
                    : e.mass * n.mass / (e.mass + n.mass)),
              (t.slipForce = u.friction * p * h),
              (t.restitution = u.restitution),
              (t.surfaceVelocity = u.surfaceVelocity),
              (t.frictionStiffness = u.frictionStiffness),
              (t.frictionRelaxation = u.frictionRelaxation),
              (t.stiffness = u.stiffness),
              (t.relaxation = u.relaxation),
              (t.contactSkinSize = u.contactSkinSize),
              (t.enabledEquations =
                e.collisionResponse &&
                n.collisionResponse &&
                o.collisionResponse &&
                a.collisionResponse)
            var y = t[o.type | a.type],
              v = 0
            if (y) {
              var b = o.sensor || a.sensor,
                j = t.frictionEquations.length
              v =
                o.type < a.type
                  ? y.call(t, e, o, A, f, n, a, E, m, b)
                  : y.call(t, n, a, E, m, e, o, A, f, b)
              var _ = t.frictionEquations.length - j
              if (v) {
                if (
                  e.allowSleep &&
                  e.type === d.DYNAMIC &&
                  e.sleepState === d.SLEEPING &&
                  n.sleepState === d.AWAKE &&
                  n.type !== d.STATIC
                )
                  s.squaredLength(n.velocity) +
                    Math.pow(n.angularVelocity, 2) >=
                    2 * Math.pow(n.sleepSpeedLimit, 2) &&
                    (e._wakeUpAfterNarrowphase = !0)
                if (
                  n.allowSleep &&
                  n.type === d.DYNAMIC &&
                  n.sleepState === d.SLEEPING &&
                  e.sleepState === d.AWAKE &&
                  e.type !== d.STATIC
                )
                  s.squaredLength(e.velocity) +
                    Math.pow(e.angularVelocity, 2) >=
                    2 * Math.pow(e.sleepSpeedLimit, 2) &&
                    (n._wakeUpAfterNarrowphase = !0)
                if (
                  (this.overlapKeeper.setOverlapping(e, o, n, a),
                  this.has("beginContact") &&
                    this.overlapKeeper.isNewOverlap(o, a))
                ) {
                  var g = this.beginContactEvent
                  if (
                    ((g.shapeA = o),
                    (g.shapeB = a),
                    (g.bodyA = e),
                    (g.bodyB = n),
                    (g.contactEquations.length = 0),
                    "number" == typeof v)
                  )
                    for (
                      var w = t.contactEquations.length - v;
                      w < t.contactEquations.length;
                      w++
                    )
                      g.contactEquations.push(t.contactEquations[w])
                  this.emit(g)
                }
                if ("number" == typeof v && _ > 1)
                  for (
                    w = t.frictionEquations.length - _;
                    w < t.frictionEquations.length;
                    w++
                  ) {
                    var P = t.frictionEquations[w]
                    P.setSlipForce(P.getSlipForce() / _)
                  }
              }
            }
          }
        }),
        (_.prototype.addSpring = function(t) {
          this.springs.push(t)
          var e = this.addSpringEvent
          ;(e.spring = t), this.emit(e), (e.spring = null)
        }),
        (_.prototype.removeSpring = function(t) {
          var e = this.springs.indexOf(t)
          ;-1 !== e && v.splice(this.springs, e, 1)
        }),
        (_.prototype.addBody = function(t) {
          if (-1 === this.bodies.indexOf(t)) {
            this.bodies.push(t), (t.world = this)
            var e = this.addBodyEvent
            ;(e.body = t), this.emit(e), (e.body = null)
          }
        }),
        (_.prototype.removeBody = function(t) {
          if (this.stepping) this.bodiesToBeRemoved.push(t)
          else {
            t.world = null
            var e = this.bodies.indexOf(t)
            ;-1 !== e &&
              (v.splice(this.bodies, e, 1),
              (this.removeBodyEvent.body = t),
              t.resetConstraintVelocity(),
              this.emit(this.removeBodyEvent),
              (this.removeBodyEvent.body = null))
          }
        }),
        (_.prototype.getBodyById = function(t) {
          for (var e = this.bodies, o = 0; o < e.length; o++) {
            var r = e[o]
            if (r.id === t) return r
          }
          return !1
        }),
        (_.prototype.disableBodyCollision = function(t, e) {
          this.disabledBodyCollisionPairs.push(t, e)
        }),
        (_.prototype.enableBodyCollision = function(t, e) {
          for (
            var o = this.disabledBodyCollisionPairs, r = 0;
            r < o.length;
            r += 2
          )
            if (
              (o[r] === t && o[r + 1] === e) ||
              (o[r + 1] === t && o[r] === e)
            )
              return void o.splice(r, 2)
        }),
        (_.prototype.clear = function() {
          ;(this.time = 0),
            this.solver &&
              this.solver.equations.length &&
              this.solver.removeAllEquations()
          for (
            var t = this.constraints, e = t.length - 1;
            e >= 0;
            e--
          )
            this.removeConstraint(t[e])
          var o = this.bodies
          for (e = o.length - 1; e >= 0; e--) this.removeBody(o[e])
          var r = this.springs
          for (e = r.length - 1; e >= 0; e--) this.removeSpring(r[e])
          var s = this.contactMaterials
          for (e = s.length - 1; e >= 0; e--)
            this.removeContactMaterial(s[e])
          _.apply(this)
        })
      var P = s.create(),
        B = (s.fromValues(0, 0), s.fromValues(0, 0))
      ;(_.prototype.hitTest = function(t, e, o) {
        o = o || 0
        var r = new d({ position: t }),
          u = new l(),
          p = t,
          h = P,
          f = B
        r.addShape(u)
        for (
          var m = this.narrowphase, y = [], v = 0, b = e.length;
          v !== b;
          v++
        )
          for (
            var j = e[v], _ = 0, g = j.shapes.length;
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
                s.squaredLength(s.sub(f, h, t)) < o * o)) &&
              y.push(j)
          }
        return y
      }),
        (_.prototype.setGlobalStiffness = function(t) {
          for (var e = this.constraints, o = 0; o !== e.length; o++)
            for (var r = e[o], s = 0; s !== r.equations.length; s++) {
              var i = r.equations[s]
              ;(i.stiffness = t), (i.needsUpdate = !0)
            }
          var n = this.contactMaterials
          for (o = 0; o !== n.length; o++) {
            ;(r = n[o]).stiffness = r.frictionStiffness = t
          }
          ;(r = this
            .defaultContactMaterial).stiffness = r.frictionStiffness = t
        }),
        (_.prototype.setGlobalRelaxation = function(t) {
          for (var e = 0; e !== this.constraints.length; e++)
            for (
              var o = this.constraints[e], r = 0;
              r !== o.equations.length;
              r++
            ) {
              var s = o.equations[r]
              ;(s.relaxation = t), (s.needsUpdate = !0)
            }
          for (e = 0; e !== this.contactMaterials.length; e++) {
            ;(o = this.contactMaterials[
              e
            ]).relaxation = o.frictionRelaxation = t
          }
          ;(o = this
            .defaultContactMaterial).relaxation = o.frictionRelaxation = t
        })
      var x = new f(),
        S = []
      _.prototype.raycast = function(t, e) {
        return (
          e.getAABB(x),
          this.broadphase.aabbQuery(this, x, S),
          e.intersectBodies(t, S),
          (S.length = 0),
          t.hasHit()
        )
      }
    },
    "./node_modules/poly-decomp/src/Line.js": function(t, e, o) {
      var r = o("./node_modules/poly-decomp/src/Scalar.js")
      function s() {}
      ;(t.exports = s),
        (s.lineInt = function(t, e, o) {
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
            (s = t[1][1] - t[0][1]),
            (i = t[0][0] - t[1][0]),
            (n = s * t[0][0] + i * t[0][1]),
            (a = e[1][1] - e[0][1]),
            (c = e[0][0] - e[1][0]),
            (l = a * e[0][0] + c * e[0][1]),
            (u = s * c - a * i),
            r.eq(u, 0, o) ||
              ((d[0] = (c * n - i * l) / u),
              (d[1] = (s * l - a * n) / u)),
            d
          )
        }),
        (s.segmentsIntersect = function(t, e, o, r) {
          var s = e[0] - t[0],
            i = e[1] - t[1],
            n = r[0] - o[0],
            a = r[1] - o[1]
          if (n * i - a * s == 0) return !1
          var c =
              (s * (o[1] - t[1]) + i * (t[0] - o[0])) /
              (n * i - a * s),
            l =
              (n * (t[1] - o[1]) + a * (o[0] - t[0])) /
              (a * s - n * i)
          return c >= 0 && c <= 1 && l >= 0 && l <= 1
        })
    },
    "./node_modules/poly-decomp/src/Point.js": function(t, e) {
      function o() {}
      ;(t.exports = o),
        (o.area = function(t, e, o) {
          return (
            (e[0] - t[0]) * (o[1] - t[1]) -
            (o[0] - t[0]) * (e[1] - t[1])
          )
        }),
        (o.left = function(t, e, r) {
          return o.area(t, e, r) > 0
        }),
        (o.leftOn = function(t, e, r) {
          return o.area(t, e, r) >= 0
        }),
        (o.right = function(t, e, r) {
          return o.area(t, e, r) < 0
        }),
        (o.rightOn = function(t, e, r) {
          return o.area(t, e, r) <= 0
        })
      var r = [],
        s = []
      ;(o.collinear = function(t, e, i, n) {
        if (n) {
          var a = r,
            c = s
          ;(a[0] = e[0] - t[0]),
            (a[1] = e[1] - t[1]),
            (c[0] = i[0] - e[0]),
            (c[1] = i[1] - e[1])
          var l = a[0] * c[0] + a[1] * c[1],
            u = Math.sqrt(a[0] * a[0] + a[1] * a[1]),
            d = Math.sqrt(c[0] * c[0] + c[1] * c[1])
          return Math.acos(l / (u * d)) < n
        }
        return 0 == o.area(t, e, i)
      }),
        (o.sqdist = function(t, e) {
          var o = e[0] - t[0],
            r = e[1] - t[1]
          return o * o + r * r
        })
    },
    "./node_modules/poly-decomp/src/Polygon.js": function(t, e, o) {
      var r = o("./node_modules/poly-decomp/src/Line.js"),
        s = o("./node_modules/poly-decomp/src/Point.js"),
        i = o("./node_modules/poly-decomp/src/Scalar.js")
      function n() {
        this.vertices = []
      }
      ;(t.exports = n),
        (n.prototype.at = function(t) {
          var e = this.vertices,
            o = e.length
          return e[t < 0 ? t % o + o : t % o]
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
        (n.prototype.append = function(t, e, o) {
          if (void 0 === e) throw new Error("From is not given!")
          if (void 0 === o) throw new Error("To is not given!")
          if (o - 1 < e) throw new Error("lol1")
          if (o > t.vertices.length) throw new Error("lol2")
          if (e < 0) throw new Error("lol3")
          for (var r = e; r < o; r++)
            this.vertices.push(t.vertices[r])
        }),
        (n.prototype.makeCCW = function() {
          for (
            var t = 0, e = this.vertices, o = 1;
            o < this.vertices.length;
            ++o
          )
            (e[o][1] < e[t][1] ||
              (e[o][1] == e[t][1] && e[o][0] > e[t][0])) &&
              (t = o)
          s.left(this.at(t - 1), this.at(t), this.at(t + 1)) ||
            this.reverse()
        }),
        (n.prototype.reverse = function() {
          for (
            var t = [], e = 0, o = this.vertices.length;
            e !== o;
            e++
          )
            t.push(this.vertices.pop())
          this.vertices = t
        }),
        (n.prototype.isReflex = function(t) {
          return s.right(this.at(t - 1), this.at(t), this.at(t + 1))
        })
      var a = [],
        c = []
      function l(t, e, o, r, s) {
        s = s || 0
        var n = e[1] - t[1],
          a = t[0] - e[0],
          c = n * t[0] + a * t[1],
          l = r[1] - o[1],
          u = o[0] - r[0],
          d = l * o[0] + u * o[1],
          p = n * u - l * a
        return i.eq(p, 0, s)
          ? [0, 0]
          : [(u * c - a * d) / p, (n * d - l * c) / p]
      }
      ;(n.prototype.canSee = function(t, e) {
        var o,
          i,
          n = a,
          l = c
        if (
          s.leftOn(this.at(t + 1), this.at(t), this.at(e)) &&
          s.rightOn(this.at(t - 1), this.at(t), this.at(e))
        )
          return !1
        i = s.sqdist(this.at(t), this.at(e))
        for (var u = 0; u !== this.vertices.length; ++u)
          if (
            (u + 1) % this.vertices.length !== t &&
            u !== t &&
            s.leftOn(this.at(t), this.at(e), this.at(u + 1)) &&
            s.rightOn(this.at(t), this.at(e), this.at(u)) &&
            ((n[0] = this.at(t)),
            (n[1] = this.at(e)),
            (l[0] = this.at(u)),
            (l[1] = this.at(u + 1)),
            (o = r.lineInt(n, l)),
            s.sqdist(this.at(t), o) < i)
          )
            return !1
        return !0
      }),
        (n.prototype.copy = function(t, e, o) {
          var r = o || new n()
          if ((r.clear(), t < e))
            for (var s = t; s <= e; s++)
              r.vertices.push(this.vertices[s])
          else {
            for (s = 0; s <= e; s++) r.vertices.push(this.vertices[s])
            for (s = t; s < this.vertices.length; s++)
              r.vertices.push(this.vertices[s])
          }
          return r
        }),
        (n.prototype.getCutEdges = function() {
          for (
            var t = [],
              e = [],
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
                  ;(e = this.copy(i, a, r).getCutEdges()),
                    (o = this.copy(a, i, r).getCutEdges())
                  for (var c = 0; c < o.length; c++) e.push(o[c])
                  e.length < s &&
                    ((t = e),
                    (s = e.length),
                    t.push([this.at(i), this.at(a)]))
                }
          return t
        }),
        (n.prototype.decomp = function() {
          var t = this.getCutEdges()
          return t.length > 0 ? this.slice(t) : [this]
        }),
        (n.prototype.slice = function(t) {
          if (0 == t.length) return [this]
          if (
            t instanceof Array &&
            t.length &&
            t[0] instanceof Array &&
            2 == t[0].length &&
            t[0][0] instanceof Array
          ) {
            for (var e = [this], o = 0; o < t.length; o++)
              for (var r = t[o], s = 0; s < e.length; s++) {
                var i = e[s].slice(r)
                if (i) {
                  e.splice(s, 1), e.push(i[0], i[1])
                  break
                }
              }
            return e
          }
          ;(r = t),
            (o = this.vertices.indexOf(r[0])),
            (s = this.vertices.indexOf(r[1]))
          return (
            -1 != o && -1 != s && [this.copy(o, s), this.copy(s, o)]
          )
        }),
        (n.prototype.isSimple = function() {
          for (var t = this.vertices, e = 0; e < t.length - 1; e++)
            for (var o = 0; o < e - 1; o++)
              if (r.segmentsIntersect(t[e], t[e + 1], t[o], t[o + 1]))
                return !1
          for (e = 1; e < t.length - 2; e++)
            if (
              r.segmentsIntersect(
                t[0],
                t[t.length - 1],
                t[e],
                t[e + 1],
              )
            )
              return !1
          return !0
        }),
        (n.prototype.quickDecomp = function(t, e, o, r, i, a) {
          ;(i = i || 100),
            (a = a || 0),
            (r = r || 25),
            (t = void 0 !== t ? t : []),
            (e = e || []),
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
          if (g.length < 3) return t
          if (++a > i)
            return (
              console.warn(
                "quickDecomp: max level (" + i + ") reached.",
              ),
              t
            )
          for (var A = 0; A < this.vertices.length; ++A)
            if (this.isReflex(A)) {
              e.push(this.vertices[A]), (p = h = Number.MAX_VALUE)
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
                  return t
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
                  ? (j.quickDecomp(t, e, o, r, i, a),
                    _.quickDecomp(t, e, o, r, i, a))
                  : (_.quickDecomp(t, e, o, r, i, a),
                    j.quickDecomp(t, e, o, r, i, a)),
                t
              )
            }
          return t.push(this), t
        }),
        (n.prototype.removeCollinearPoints = function(t) {
          for (
            var e = 0, o = this.vertices.length - 1;
            this.vertices.length > 3 && o >= 0;
            --o
          )
            s.collinear(
              this.at(o - 1),
              this.at(o),
              this.at(o + 1),
              t,
            ) &&
              (this.vertices.splice(o % this.vertices.length, 1),
              o--,
              e++)
          return e
        })
    },
    "./node_modules/poly-decomp/src/Scalar.js": function(t, e) {
      function o() {}
      ;(t.exports = o),
        (o.eq = function(t, e, o) {
          return (o = o || 0), Math.abs(t - e) < o
        })
    },
    "./node_modules/poly-decomp/src/index.js": function(t, e, o) {
      t.exports = {
        Polygon: o("./node_modules/poly-decomp/src/Polygon.js"),
        Point: o("./node_modules/poly-decomp/src/Point.js"),
      }
    },
    "./src/index.js": function(t, e, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
      )
      Object.defineProperty(e, "__esModule", { value: !0 })
      var s = { modules: !0, reducers: !0, Protocol: !0 }
      e.Protocol = e.reducers = e.modules = void 0
      var i = r(o("./src/modules/loop/index.js")),
        n = r(o("./src/modules/player/index.js")),
        a = r(o("./src/modules/physics/index.js")),
        c = r(o("./src/modules/ship/index.js")),
        l = r(o("./src/protocol/index.js"))
      e.Protocol = l
      var u = o("./src/selectors/index.js")
      Object.keys(u).forEach(function(t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(s, t) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function() {
                return u[t]
              },
            }))
      })
      var d = { Loop: i, Player: n, Physics: a, Ship: c }
      e.modules = d
      var p = {
        loop: i.default,
        physics: a.default,
        player: n.default,
        ship: c.default,
      }
      e.reducers = p
    },
    "./src/model/index.js": function(t, e, o) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o("./src/model/input.js")
      Object.keys(r).forEach(function(t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
              return r[t]
            },
          })
      })
      var s = o("./src/model/player.js")
      Object.keys(s).forEach(function(t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
              return s[t]
            },
          })
      })
      var i = o("./src/model/physics.js")
      Object.keys(i).forEach(function(t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
              return i[t]
            },
          })
      })
      var n = o("./src/model/ship.js")
      Object.keys(n).forEach(function(t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
              return n[t]
            },
          })
      })
    },
    "./src/model/input.js": function(t, e, o) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TURN_DIRECTION = e.THRUST_DIRECTION = void 0)
      var r = Object.freeze({ forwards: 0, backwards: 1 })
      e.THRUST_DIRECTION = r
      var s = Object.freeze({ left: 0, right: 1 })
      e.TURN_DIRECTION = s
    },
    "./src/model/physics.js": function(t, e, o) {
      "use strict"
    },
    "./src/model/player.js": function(t, e, o) {
      "use strict"
    },
    "./src/model/ship.js": function(t, e, o) {
      "use strict"
    },
    "./src/modules/loop/index.js": function(t, e, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l
          switch ((arguments.length > 1 ? arguments[1] : void 0)
            .type) {
            case i:
              return (0, s.default)({}, t, { running: !0 })
            case n:
              return (0, s.default)({}, t, { tick: t.tick + 1 })
            case a:
              return (0, s.default)({}, t, { running: !1 })
            default:
              return t
          }
        }),
        (e.createMiddleware = e.pauseLoop = e.tickLoop = e.startLoop = e.LOOP_PAUSE = e.LOOP_TICK = e.LOOP_START = void 0)
      var s = r(
          o(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        i = "loop/start!"
      e.LOOP_START = i
      var n = "loop/tick"
      e.LOOP_TICK = n
      var a = "loop/pause"
      e.LOOP_PAUSE = a
      e.startLoop = function() {
        return { type: i }
      }
      var c = function(t) {
        return { type: n, payload: { dt: t } }
      }
      e.tickLoop = c
      e.pauseLoop = function() {
        return { type: a }
      }
      var l = { tick: -1, running: !1 }
      e.createMiddleware = function(t) {
        return function(e) {
          return function(o) {
            return function(r) {
              var s = e.getState().loop.running,
                n = o(r)
              switch (r.type) {
                case i:
                  s ||
                    (function o() {
                      var r =
                        arguments.length > 0 &&
                        void 0 !== arguments[0]
                          ? arguments[0]
                          : 0
                      e.getState().loop.running &&
                        (e.dispatch(c(r)), t().then(o))
                    })()
              }
              return n
            }
          }
        }
      }
    },
    "./src/modules/physics/index.js": function(t, e, o) {
      "use strict"
      var r = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : d,
            e = arguments.length > 1 ? arguments[1] : void 0
          switch (e.type) {
            case c:
              return (0, n.default)({}, t, {
                byId: (0, n.default)(
                  {},
                  t.byId,
                  (0, i.default)(
                    {},
                    e.payload.body.id,
                    e.payload.body,
                  ),
                ),
              })
            case l:
              return (0, n.default)({}, t, {
                byId: (0, n.default)(
                  {},
                  t.byId,
                  (0, i.default)(
                    {},
                    e.payload.body.id,
                    (0, n.default)(
                      {},
                      u(t, e.payload.body.id),
                      e.payload.body,
                    ),
                  ),
                ),
              })
            default:
              return t
          }
        }),
        (e.P2Driver = e.getBody = e.updateBody = e.addBody = e.PHYSICS_UPDATE_BODY = e.PHYSICS_ADD_BODY = void 0)
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
      e.P2Driver = a
      var c = "physics/add_body"
      e.PHYSICS_ADD_BODY = c
      var l = "physics/update_body"
      e.PHYSICS_UPDATE_BODY = l
      e.addBody = function(t) {
        return { type: c, payload: { body: t } }
      }
      e.updateBody = function(t, e) {
        return { type: l, payload: { id: t, body: e } }
      }
      var u = function(t, e) {
        return t[e]
      }
      e.getBody = u
      var d = { byId: {} }
    },
    "./src/modules/physics/p2-driver.js": function(t, e, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.create = void 0)
      var s = r(
          o("../../node_modules/@babel/runtime/regenerator/index.js"),
        ),
        i = r(
          o(
            "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js",
          ),
        ),
        n = r(o("./node_modules/p2/src/p2.js")),
        a = function(t, e) {
          return {
            id: t,
            angle: e.angle,
            angularVelocity: e.angularVelocity,
            mass: e.mass,
            position: e.position,
            velocity: e.velocity,
            width: e.width,
            height: e.height,
          }
        }
      e.create = function(t) {
        var e = t.gravity,
          o = {},
          r = new n.default.World({
            gravity: e,
            sleepMode: n.default.World.BODY_SLEEPING,
          })
        return {
          addBody: ((l = (0, i.default)(
            s.default.mark(function t(e, i) {
              var c, l, u, d, p, h, f, m, y
              return s.default.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!o[e]) {
                          t.next = 2
                          break
                        }
                        throw new Error(
                          "Cannot add body with id ".concat(
                            e,
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
                          (o[e] = y),
                          t.abrupt("return", a(e, y))
                        )
                      case 9:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                this,
              )
            }),
          )),
          function(t, e) {
            return l.apply(this, arguments)
          }),
          rotateBody: ((c = (0, i.default)(
            s.default.mark(function t(e, r) {
              var i
              return s.default.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((i = o[e])) {
                          t.next = 3
                          break
                        }
                        throw new Error(
                          "Cannot update body with id ".concat(
                            e,
                            ": body does not exist.",
                          ),
                        )
                      case 3:
                        return (
                          (i.angle = r), t.abrupt("return", a(e, i))
                        )
                      case 5:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                this,
              )
            }),
          )),
          function(t, e) {
            return c.apply(this, arguments)
          }),
        }
        var c
        var l
      }
    },
    "./src/modules/player/index.js": function(t, e, o) {
      "use strict"
      var r = o(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a,
            e = arguments.length > 1 ? arguments[1] : void 0
          switch (e.type) {
            case n:
              return (0, i.default)({}, t, {
                byId: (0, i.default)(
                  {},
                  t.byId,
                  (0, s.default)(
                    {},
                    e.payload.player.id,
                    e.payload.player,
                  ),
                ),
              })
            default:
              return t
          }
        }),
        (e.getPlayer = e.addPlayer = e.PLAYER_ADD = void 0)
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
      e.PLAYER_ADD = n
      e.addPlayer = function(t) {
        return { type: n, payload: { player: t } }
      }
      var a = { byId: {} }
      e.getPlayer = function(t, e) {
        return t.byId[e]
      }
    },
    "./src/modules/ship/index.js": function(t, e, o) {
      "use strict"
      var r = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        s = o(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            e = arguments.length > 1 ? arguments[1] : void 0
          switch (e.type) {
            case p:
              return (0, n.default)({}, t, {
                byId: (0, n.default)(
                  {},
                  t.byId,
                  (0, i.default)(
                    {},
                    e.payload.ship.id,
                    e.payload.ship,
                  ),
                ),
              })
            default:
              return t
          }
        }),
        (e.getShip = e.turnShip = e.addShip = e.SHIP_ADD = void 0)
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
        a = s(
          o("../../node_modules/@babel/runtime/regenerator/index.js"),
        ),
        c = s(
          o(
            "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js",
          ),
        ),
        l = o("./src/model/index.js"),
        u = o("./src/selectors/index.js"),
        d = r(o("./src/modules/physics/index.js")),
        p = "ship/add"
      e.SHIP_ADD = p
      e.addShip = function(t) {
        return { type: p, payload: { ship: t } }
      }
      e.turnShip = function(t, e, o) {
        return (
          (r = (0, c.default)(
            a.default.mark(function r(s, i) {
              var n, c, p
              return a.default.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = (0, u.getShipBody)(i(), e)),
                          (c =
                            n.angle +
                            (o === l.TURN_DIRECTION.left
                              ? 0.05
                              : -0.05)),
                          (r.next = 4),
                          t.rotateBody(n.id, c)
                        )
                      case 4:
                        ;(p = r.sent), s(d.updateBody(n.id, p))
                      case 6:
                      case "end":
                        return r.stop()
                    }
                },
                r,
                this,
              )
            }),
          )),
          function(t, e) {
            return r.apply(this, arguments)
          }
        )
        var r
      }
      var h = { byId: {} }
      e.getShip = function(t, e) {
        return t[e]
      }
    },
    "./src/protocol/index.js": function(t, e, o) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 })
      var r = o("./src/protocol/input.js")
      Object.keys(r).forEach(function(t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
              return r[t]
            },
          })
      })
    },
    "./src/protocol/input.js": function(t, e, o) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getData = e.getType = e.turn = e.thrust = e.INPUT_MESSAGE_TYPE = void 0)
      var r = Object.freeze({ thrust: 0, turn: 1 })
      e.INPUT_MESSAGE_TYPE = r
      e.thrust = function(t) {
        return [r.thrust, t]
      }
      e.turn = function(t) {
        return [r.turn, t]
      }
      e.getType = function(t) {
        return t[0]
      }
      e.getData = function(t) {
        return t[1]
      }
    },
    "./src/selectors/index.js": function(t, e, o) {
      "use strict"
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getPlayerBody = e.getPlayerShip = e.getShipBody = void 0)
      var r = o("./src/modules/player/index.js"),
        s = o("./src/modules/ship/index.js"),
        i = o("./src/modules/physics/index.js"),
        n = function(t, e) {
          var o = (0, s.getShip)(t.ship, e)
          return (0, i.getBody)(t.physics, o.bodyId)
        }
      e.getShipBody = n
      e.getPlayerShip = function(t, e) {
        var o = (0, r.getPlayer)(t.player, e).activeShipId
        return o ? (0, s.getShip)(t.ship, o) : null
      }
      e.getPlayerBody = function(t, e) {
        var o = (0, r.getPlayer)(t.player, e).activeShipId
        return o ? n(t, o) : null
      }
    },
  })
})
