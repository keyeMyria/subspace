!(function(e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
      ? define([], r)
      : "object" == typeof exports
        ? (exports.SubspaceCore = r())
        : (e.SubspaceCore = r())
})(global, function() {
  return (function(e) {
    var r = {}
    function t(o) {
      if (r[o]) return r[o].exports
      var n = (r[o] = { i: o, l: !1, exports: {} })
      return (
        e[o].call(n.exports, n, n.exports, t), (n.l = !0), n.exports
      )
    }
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function(e, r, o) {
        t.o(e, r) ||
          Object.defineProperty(e, r, { enumerable: !0, get: o })
      }),
      (t.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", { value: !0 })
      }),
      (t.t = function(e, r) {
        if ((1 & r && (e = t(e)), 8 & r)) return e
        if (4 & r && "object" == typeof e && e && e.__esModule)
          return e
        var o = Object.create(null)
        if (
          (t.r(o),
          Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & r && "string" != typeof e)
        )
          for (var n in e)
            t.d(
              o,
              n,
              function(r) {
                return e[r]
              }.bind(null, n),
            )
        return o
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
      t((t.s = "./src/index.js"))
    )
  })({
    "../../node_modules/@babel/runtime/core-js/object/define-property.js": function(
      e,
      r,
      t,
    ) {
      e.exports = t(
        "../../node_modules/core-js/library/fn/object/define-property.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js": function(
      e,
      r,
      t,
    ) {
      e.exports = t(
        "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js": function(
      e,
      r,
      t,
    ) {
      e.exports = t(
        "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/keys.js": function(
      e,
      r,
      t,
    ) {
      e.exports = t(
        "../../node_modules/core-js/library/fn/object/keys.js",
      )
    },
    "../../node_modules/@babel/runtime/helpers/defineProperty.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/@babel/runtime/core-js/object/define-property.js",
      )
      e.exports = function(e, r, t) {
        return (
          r in e
            ? o(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        )
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(
      e,
      r,
    ) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/core-js/object/define-property.js",
        )
      e.exports = function(e) {
        if (e && e.__esModule) return e
        var r = {}
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var s = n && o ? o(e, t) : {}
              s.get || s.set ? n(r, t, s) : (r[t] = e[t])
            }
        return (r.default = e), r
      }
    },
    "../../node_modules/@babel/runtime/helpers/objectSpread.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js",
        ),
        s = t(
          "../../node_modules/@babel/runtime/core-js/object/keys.js",
        ),
        u = t(
          "../../node_modules/@babel/runtime/helpers/defineProperty.js",
        )
      e.exports = function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            i = s(t)
          "function" == typeof n &&
            (i = i.concat(
              n(t).filter(function(e) {
                return o(t, e).enumerable
              }),
            )),
            i.forEach(function(r) {
              u(e, r, t[r])
            })
        }
        return e
      }
    },
    "../../node_modules/core-js/library/fn/object/define-property.js": function(
      e,
      r,
      t,
    ) {
      t(
        "../../node_modules/core-js/library/modules/es6.object.define-property.js",
      )
      var o = t("../../node_modules/core-js/library/modules/_core.js")
        .Object
      e.exports = function(e, r, t) {
        return o.defineProperty(e, r, t)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js": function(
      e,
      r,
      t,
    ) {
      t(
        "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
      )
      var o = t("../../node_modules/core-js/library/modules/_core.js")
        .Object
      e.exports = function(e, r) {
        return o.getOwnPropertyDescriptor(e, r)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js": function(
      e,
      r,
      t,
    ) {
      t("../../node_modules/core-js/library/modules/es6.symbol.js"),
        (e.exports = t(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.getOwnPropertySymbols)
    },
    "../../node_modules/core-js/library/fn/object/keys.js": function(
      e,
      r,
      t,
    ) {
      t(
        "../../node_modules/core-js/library/modules/es6.object.keys.js",
      ),
        (e.exports = t(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.keys)
    },
    "../../node_modules/core-js/library/modules/_a-function.js": function(
      e,
      r,
    ) {
      e.exports = function(e) {
        if ("function" != typeof e)
          throw TypeError(e + " is not a function!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_an-object.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_array-includes.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_to-length.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_to-absolute-index.js",
        )
      e.exports = function(e) {
        return function(r, t, u) {
          var i,
            c = o(r),
            l = n(c.length),
            d = s(u, l)
          if (e && t != t) {
            for (; l > d; ) if ((i = c[d++]) != i) return !0
          } else
            for (; l > d; d++)
              if ((e || d in c) && c[d] === t) return e || d || 0
          return !e && -1
        }
      }
    },
    "../../node_modules/core-js/library/modules/_cof.js": function(
      e,
      r,
    ) {
      var t = {}.toString
      e.exports = function(e) {
        return t.call(e).slice(8, -1)
      }
    },
    "../../node_modules/core-js/library/modules/_core.js": function(
      e,
      r,
    ) {
      var t = (e.exports = { version: "2.5.5" })
      "number" == typeof __e && (__e = t)
    },
    "../../node_modules/core-js/library/modules/_ctx.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/core-js/library/modules/_a-function.js",
      )
      e.exports = function(e, r, t) {
        if ((o(e), void 0 === r)) return e
        switch (t) {
          case 1:
            return function(t) {
              return e.call(r, t)
            }
          case 2:
            return function(t, o) {
              return e.call(r, t, o)
            }
          case 3:
            return function(t, o, n) {
              return e.call(r, t, o, n)
            }
        }
        return function() {
          return e.apply(r, arguments)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_defined.js": function(
      e,
      r,
    ) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_descriptors.js": function(
      e,
      r,
      t,
    ) {
      e.exports = !t(
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
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        n = t("../../node_modules/core-js/library/modules/_global.js")
          .document,
        s = o(n) && o(n.createElement)
      e.exports = function(e) {
        return s ? n.createElement(e) : {}
      }
    },
    "../../node_modules/core-js/library/modules/_enum-bug-keys.js": function(
      e,
      r,
    ) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ",",
      )
    },
    "../../node_modules/core-js/library/modules/_enum-keys.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_object-gops.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        )
      e.exports = function(e) {
        var r = o(e),
          t = n.f
        if (t)
          for (var u, i = t(e), c = s.f, l = 0; i.length > l; )
            c.call(e, (u = i[l++])) && r.push(u)
        return r
      }
    },
    "../../node_modules/core-js/library/modules/_export.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = t("../../node_modules/core-js/library/modules/_core.js"),
        s = t("../../node_modules/core-js/library/modules/_ctx.js"),
        u = t("../../node_modules/core-js/library/modules/_hide.js"),
        i = t("../../node_modules/core-js/library/modules/_has.js"),
        c = function(e, r, t) {
          var l,
            d,
            a,
            f = e & c.F,
            p = e & c.G,
            b = e & c.S,
            y = e & c.P,
            m = e & c.B,
            j = e & c.W,
            h = p ? n : n[r] || (n[r] = {}),
            _ = h.prototype,
            v = p ? o : b ? o[r] : (o[r] || {}).prototype
          for (l in (p && (t = r), t))
            ((d = !f && v && void 0 !== v[l]) && i(h, l)) ||
              ((a = d ? v[l] : t[l]),
              (h[l] =
                p && "function" != typeof v[l]
                  ? t[l]
                  : m && d
                    ? s(a, o)
                    : j && v[l] == a
                      ? (function(e) {
                          var r = function(r, t, o) {
                            if (this instanceof e) {
                              switch (arguments.length) {
                                case 0:
                                  return new e()
                                case 1:
                                  return new e(r)
                                case 2:
                                  return new e(r, t)
                              }
                              return new e(r, t, o)
                            }
                            return e.apply(this, arguments)
                          }
                          return (r.prototype = e.prototype), r
                        })(a)
                      : y && "function" == typeof a
                        ? s(Function.call, a)
                        : a),
              y &&
                (((h.virtual || (h.virtual = {}))[l] = a),
                e & c.R && _ && !_[l] && u(_, l, a)))
        }
      ;(c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (e.exports = c)
    },
    "../../node_modules/core-js/library/modules/_fails.js": function(
      e,
      r,
    ) {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    "../../node_modules/core-js/library/modules/_global.js": function(
      e,
      r,
    ) {
      var t = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")())
      "number" == typeof __g && (__g = t)
    },
    "../../node_modules/core-js/library/modules/_has.js": function(
      e,
      r,
    ) {
      var t = {}.hasOwnProperty
      e.exports = function(e, r) {
        return t.call(e, r)
      }
    },
    "../../node_modules/core-js/library/modules/_hide.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        )
      e.exports = t(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? function(e, r, t) {
            return o.f(e, r, n(1, t))
          }
        : function(e, r, t) {
            return (e[r] = t), e
          }
    },
    "../../node_modules/core-js/library/modules/_html.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/core-js/library/modules/_global.js",
      ).document
      e.exports = o && o.documentElement
    },
    "../../node_modules/core-js/library/modules/_ie8-dom-define.js": function(
      e,
      r,
      t,
    ) {
      e.exports =
        !t(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ) &&
        !t("../../node_modules/core-js/library/modules/_fails.js")(
          function() {
            return (
              7 !=
              Object.defineProperty(
                t(
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
    "../../node_modules/core-js/library/modules/_iobject.js": function(
      e,
      r,
      t,
    ) {
      var o = t("../../node_modules/core-js/library/modules/_cof.js")
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return "String" == o(e) ? e.split("") : Object(e)
          }
    },
    "../../node_modules/core-js/library/modules/_is-array.js": function(
      e,
      r,
      t,
    ) {
      var o = t("../../node_modules/core-js/library/modules/_cof.js")
      e.exports =
        Array.isArray ||
        function(e) {
          return "Array" == o(e)
        }
    },
    "../../node_modules/core-js/library/modules/_is-object.js": function(
      e,
      r,
    ) {
      e.exports = function(e) {
        return "object" == typeof e
          ? null !== e
          : "function" == typeof e
      }
    },
    "../../node_modules/core-js/library/modules/_library.js": function(
      e,
      r,
    ) {
      e.exports = !0
    },
    "../../node_modules/core-js/library/modules/_meta.js": function(
      e,
      r,
      t,
    ) {
      var o = t("../../node_modules/core-js/library/modules/_uid.js")(
          "meta",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        s = t("../../node_modules/core-js/library/modules/_has.js"),
        u = t(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        i = 0,
        c =
          Object.isExtensible ||
          function() {
            return !0
          },
        l = !t(
          "../../node_modules/core-js/library/modules/_fails.js",
        )(function() {
          return c(Object.preventExtensions({}))
        }),
        d = function(e) {
          u(e, o, { value: { i: "O" + ++i, w: {} } })
        },
        a = (e.exports = {
          KEY: o,
          NEED: !1,
          fastKey: function(e, r) {
            if (!n(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e
            if (!s(e, o)) {
              if (!c(e)) return "F"
              if (!r) return "E"
              d(e)
            }
            return e[o].i
          },
          getWeak: function(e, r) {
            if (!s(e, o)) {
              if (!c(e)) return !0
              if (!r) return !1
              d(e)
            }
            return e[o].w
          },
          onFreeze: function(e) {
            return l && a.NEED && c(e) && !s(e, o) && d(e), e
          },
        })
    },
    "../../node_modules/core-js/library/modules/_object-create.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_object-dps.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ),
        u = t(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO"),
        i = function() {},
        c = function() {
          var e,
            r = t(
              "../../node_modules/core-js/library/modules/_dom-create.js",
            )("iframe"),
            o = s.length
          for (
            r.style.display = "none",
              t(
                "../../node_modules/core-js/library/modules/_html.js",
              ).appendChild(r),
              r.src = "javascript:",
              (e = r.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              c = e.F;
            o--;

          )
            delete c.prototype[s[o]]
          return c()
        }
      e.exports =
        Object.create ||
        function(e, r) {
          var t
          return (
            null !== e
              ? ((i.prototype = o(e)),
                (t = new i()),
                (i.prototype = null),
                (t[u] = e))
              : (t = c()),
            void 0 === r ? t : n(t, r)
          )
        }
    },
    "../../node_modules/core-js/library/modules/_object-dp.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        u = Object.defineProperty
      r.f = t(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperty
        : function(e, r, t) {
            if ((o(e), (r = s(r, !0)), o(t), n))
              try {
                return u(e, r, t)
              } catch (e) {}
            if ("get" in t || "set" in t)
              throw TypeError("Accessors not supported!")
            return "value" in t && (e[r] = t.value), e
          }
    },
    "../../node_modules/core-js/library/modules/_object-dps.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        )
      e.exports = t(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperties
        : function(e, r) {
            n(e)
            for (var t, u = s(r), i = u.length, c = 0; i > c; )
              o.f(e, (t = u[c++]), r[t])
            return e
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopd.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        u = t(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        i = t("../../node_modules/core-js/library/modules/_has.js"),
        c = t(
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
        ),
        l = Object.getOwnPropertyDescriptor
      r.f = t(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? l
        : function(e, r) {
            if (((e = s(e)), (r = u(r, !0)), c))
              try {
                return l(e, r)
              } catch (e) {}
            if (i(e, r)) return n(!o.f.call(e, r), e[r])
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopn-ext.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f,
        s = {}.toString,
        u =
          "object" == typeof window &&
          window &&
          Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
      e.exports.f = function(e) {
        return u && "[object Window]" == s.call(e)
          ? (function(e) {
              try {
                return n(e)
              } catch (e) {
                return u.slice()
              }
            })(e)
          : n(o(e))
      }
    },
    "../../node_modules/core-js/library/modules/_object-gopn.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ).concat("length", "prototype")
      r.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return o(e, n)
        }
    },
    "../../node_modules/core-js/library/modules/_object-gops.js": function(
      e,
      r,
    ) {
      r.f = Object.getOwnPropertySymbols
    },
    "../../node_modules/core-js/library/modules/_object-keys-internal.js": function(
      e,
      r,
      t,
    ) {
      var o = t("../../node_modules/core-js/library/modules/_has.js"),
        n = t(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        s = t(
          "../../node_modules/core-js/library/modules/_array-includes.js",
        )(!1),
        u = t(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO")
      e.exports = function(e, r) {
        var t,
          i = n(e),
          c = 0,
          l = []
        for (t in i) t != u && o(i, t) && l.push(t)
        for (; r.length > c; )
          o(i, (t = r[c++])) && (~s(l, t) || l.push(t))
        return l
      }
    },
    "../../node_modules/core-js/library/modules/_object-keys.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        )
      e.exports =
        Object.keys ||
        function(e) {
          return o(e, n)
        }
    },
    "../../node_modules/core-js/library/modules/_object-pie.js": function(
      e,
      r,
    ) {
      r.f = {}.propertyIsEnumerable
    },
    "../../node_modules/core-js/library/modules/_object-sap.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        n = t("../../node_modules/core-js/library/modules/_core.js"),
        s = t("../../node_modules/core-js/library/modules/_fails.js")
      e.exports = function(e, r) {
        var t = (n.Object || {})[e] || Object[e],
          u = {}
        ;(u[e] = r(t)),
          o(
            o.S +
              o.F *
                s(function() {
                  t(1)
                }),
            "Object",
            u,
          )
      }
    },
    "../../node_modules/core-js/library/modules/_property-desc.js": function(
      e,
      r,
    ) {
      e.exports = function(e, r) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: r,
        }
      }
    },
    "../../node_modules/core-js/library/modules/_redefine.js": function(
      e,
      r,
      t,
    ) {
      e.exports = t(
        "../../node_modules/core-js/library/modules/_hide.js",
      )
    },
    "../../node_modules/core-js/library/modules/_set-to-string-tag.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        n = t("../../node_modules/core-js/library/modules/_has.js"),
        s = t("../../node_modules/core-js/library/modules/_wks.js")(
          "toStringTag",
        )
      e.exports = function(e, r, t) {
        e &&
          !n((e = t ? e : e.prototype), s) &&
          o(e, s, { configurable: !0, value: r })
      }
    },
    "../../node_modules/core-js/library/modules/_shared-key.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("keys"),
        n = t("../../node_modules/core-js/library/modules/_uid.js")
      e.exports = function(e) {
        return o[e] || (o[e] = n(e))
      }
    },
    "../../node_modules/core-js/library/modules/_shared.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = o["__core-js_shared__"] || (o["__core-js_shared__"] = {})
      e.exports = function(e) {
        return n[e] || (n[e] = {})
      }
    },
    "../../node_modules/core-js/library/modules/_to-absolute-index.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        n = Math.max,
        s = Math.min
      e.exports = function(e, r) {
        return (e = o(e)) < 0 ? n(e + r, 0) : s(e, r)
      }
    },
    "../../node_modules/core-js/library/modules/_to-integer.js": function(
      e,
      r,
    ) {
      var t = Math.ceil,
        o = Math.floor
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? o : t)(e)
      }
    },
    "../../node_modules/core-js/library/modules/_to-iobject.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_iobject.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_defined.js",
        )
      e.exports = function(e) {
        return o(n(e))
      }
    },
    "../../node_modules/core-js/library/modules/_to-length.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        n = Math.min
      e.exports = function(e) {
        return e > 0 ? n(o(e), 9007199254740991) : 0
      }
    },
    "../../node_modules/core-js/library/modules/_to-object.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/core-js/library/modules/_defined.js",
      )
      e.exports = function(e) {
        return Object(o(e))
      }
    },
    "../../node_modules/core-js/library/modules/_to-primitive.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      e.exports = function(e, r) {
        if (!o(e)) return e
        var t, n
        if (
          r &&
          "function" == typeof (t = e.toString) &&
          !o((n = t.call(e)))
        )
          return n
        if (
          "function" == typeof (t = e.valueOf) &&
          !o((n = t.call(e)))
        )
          return n
        if (
          !r &&
          "function" == typeof (t = e.toString) &&
          !o((n = t.call(e)))
        )
          return n
        throw TypeError("Can't convert object to primitive value")
      }
    },
    "../../node_modules/core-js/library/modules/_uid.js": function(
      e,
      r,
    ) {
      var t = 0,
        o = Math.random()
      e.exports = function(e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++t + o).toString(36),
        )
      }
    },
    "../../node_modules/core-js/library/modules/_wks-define.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = t("../../node_modules/core-js/library/modules/_core.js"),
        s = t(
          "../../node_modules/core-js/library/modules/_library.js",
        ),
        u = t(
          "../../node_modules/core-js/library/modules/_wks-ext.js",
        ),
        i = t(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f
      e.exports = function(e) {
        var r = n.Symbol || (n.Symbol = s ? {} : o.Symbol || {})
        "_" == e.charAt(0) || e in r || i(r, e, { value: u.f(e) })
      }
    },
    "../../node_modules/core-js/library/modules/_wks-ext.js": function(
      e,
      r,
      t,
    ) {
      r.f = t("../../node_modules/core-js/library/modules/_wks.js")
    },
    "../../node_modules/core-js/library/modules/_wks.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("wks"),
        n = t("../../node_modules/core-js/library/modules/_uid.js"),
        s = t("../../node_modules/core-js/library/modules/_global.js")
          .Symbol,
        u = "function" == typeof s
      ;(e.exports = function(e) {
        return (
          o[e] || (o[e] = (u && s[e]) || (u ? s : n)("Symbol." + e))
        )
      }).store = o
    },
    "../../node_modules/core-js/library/modules/es6.object.define-property.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
        "../../node_modules/core-js/library/modules/_export.js",
      )
      o(
        o.S +
          o.F *
            !t(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            ),
        "Object",
        {
          defineProperty: t(
            "../../node_modules/core-js/library/modules/_object-dp.js",
          ).f,
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ).f
      t("../../node_modules/core-js/library/modules/_object-sap.js")(
        "getOwnPropertyDescriptor",
        function() {
          return function(e, r) {
            return n(o(e), r)
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.keys.js": function(
      e,
      r,
      t,
    ) {
      var o = t(
          "../../node_modules/core-js/library/modules/_to-object.js",
        ),
        n = t(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        )
      t("../../node_modules/core-js/library/modules/_object-sap.js")(
        "keys",
        function() {
          return function(e) {
            return n(o(e))
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.symbol.js": function(
      e,
      r,
      t,
    ) {
      "use strict"
      var o = t(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = t("../../node_modules/core-js/library/modules/_has.js"),
        s = t(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ),
        u = t(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        i = t(
          "../../node_modules/core-js/library/modules/_redefine.js",
        ),
        c = t("../../node_modules/core-js/library/modules/_meta.js")
          .KEY,
        l = t("../../node_modules/core-js/library/modules/_fails.js"),
        d = t(
          "../../node_modules/core-js/library/modules/_shared.js",
        ),
        a = t(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        ),
        f = t("../../node_modules/core-js/library/modules/_uid.js"),
        p = t("../../node_modules/core-js/library/modules/_wks.js"),
        b = t(
          "../../node_modules/core-js/library/modules/_wks-ext.js",
        ),
        y = t(
          "../../node_modules/core-js/library/modules/_wks-define.js",
        ),
        m = t(
          "../../node_modules/core-js/library/modules/_enum-keys.js",
        ),
        j = t(
          "../../node_modules/core-js/library/modules/_is-array.js",
        ),
        h = t(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        _ = t(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        v = t(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        g = t(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        x = t(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        w = t(
          "../../node_modules/core-js/library/modules/_object-create.js",
        ),
        S = t(
          "../../node_modules/core-js/library/modules/_object-gopn-ext.js",
        ),
        E = t(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ),
        O = t(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        P = t(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        T = E.f,
        A = O.f,
        I = S.f,
        D = o.Symbol,
        k = o.JSON,
        M = k && k.stringify,
        N = p("_hidden"),
        U = p("toPrimitive"),
        R = {}.propertyIsEnumerable,
        C = d("symbol-registry"),
        F = d("symbols"),
        Y = d("op-symbols"),
        B = Object.prototype,
        V = "function" == typeof D,
        q = o.QObject,
        L = !q || !q.prototype || !q.prototype.findChild,
        G =
          s &&
          l(function() {
            return (
              7 !=
              w(
                A({}, "a", {
                  get: function() {
                    return A(this, "a", { value: 7 }).a
                  },
                }),
              ).a
            )
          })
            ? function(e, r, t) {
                var o = T(B, r)
                o && delete B[r],
                  A(e, r, t),
                  o && e !== B && A(B, r, o)
              }
            : A,
        W = function(e) {
          var r = (F[e] = w(D.prototype))
          return (r._k = e), r
        },
        H =
          V && "symbol" == typeof D.iterator
            ? function(e) {
                return "symbol" == typeof e
              }
            : function(e) {
                return e instanceof D
              },
        J = function(e, r, t) {
          return (
            e === B && J(Y, r, t),
            h(e),
            (r = g(r, !0)),
            h(t),
            n(F, r)
              ? (t.enumerable
                  ? (n(e, N) && e[N][r] && (e[N][r] = !1),
                    (t = w(t, { enumerable: x(0, !1) })))
                  : (n(e, N) || A(e, N, x(1, {})), (e[N][r] = !0)),
                G(e, r, t))
              : A(e, r, t)
          )
        },
        K = function(e, r) {
          h(e)
          for (var t, o = m((r = v(r))), n = 0, s = o.length; s > n; )
            J(e, (t = o[n++]), r[t])
          return e
        },
        z = function(e) {
          var r = R.call(this, (e = g(e, !0)))
          return (
            !(this === B && n(F, e) && !n(Y, e)) &&
            (!(
              r ||
              !n(this, e) ||
              !n(F, e) ||
              (n(this, N) && this[N][e])
            ) ||
              r)
          )
        },
        $ = function(e, r) {
          if (
            ((e = v(e)),
            (r = g(r, !0)),
            e !== B || !n(F, r) || n(Y, r))
          ) {
            var t = T(e, r)
            return (
              !t ||
                !n(F, r) ||
                (n(e, N) && e[N][r]) ||
                (t.enumerable = !0),
              t
            )
          }
        },
        Q = function(e) {
          for (var r, t = I(v(e)), o = [], s = 0; t.length > s; )
            n(F, (r = t[s++])) || r == N || r == c || o.push(r)
          return o
        },
        X = function(e) {
          for (
            var r, t = e === B, o = I(t ? Y : v(e)), s = [], u = 0;
            o.length > u;

          )
            !n(F, (r = o[u++])) || (t && !n(B, r)) || s.push(F[r])
          return s
        }
      V ||
        (i(
          (D = function() {
            if (this instanceof D)
              throw TypeError("Symbol is not a constructor!")
            var e = f(arguments.length > 0 ? arguments[0] : void 0),
              r = function(t) {
                this === B && r.call(Y, t),
                  n(this, N) && n(this[N], e) && (this[N][e] = !1),
                  G(this, e, x(1, t))
              }
            return (
              s && L && G(B, e, { configurable: !0, set: r }), W(e)
            )
          }).prototype,
          "toString",
          function() {
            return this._k
          },
        ),
        (E.f = $),
        (O.f = J),
        (t(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f = S.f = Q),
        (t(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        ).f = z),
        (t(
          "../../node_modules/core-js/library/modules/_object-gops.js",
        ).f = X),
        s &&
          !t(
            "../../node_modules/core-js/library/modules/_library.js",
          ) &&
          i(B, "propertyIsEnumerable", z, !0),
        (b.f = function(e) {
          return W(p(e))
        })),
        u(u.G + u.W + u.F * !V, { Symbol: D })
      for (
        var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ",",
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++])
      for (var re = P(p.store), te = 0; re.length > te; ) y(re[te++])
      u(u.S + u.F * !V, "Symbol", {
        for: function(e) {
          return n(C, (e += "")) ? C[e] : (C[e] = D(e))
        },
        keyFor: function(e) {
          if (!H(e)) throw TypeError(e + " is not a symbol!")
          for (var r in C) if (C[r] === e) return r
        },
        useSetter: function() {
          L = !0
        },
        useSimple: function() {
          L = !1
        },
      }),
        u(u.S + u.F * !V, "Object", {
          create: function(e, r) {
            return void 0 === r ? w(e) : K(w(e), r)
          },
          defineProperty: J,
          defineProperties: K,
          getOwnPropertyDescriptor: $,
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: X,
        }),
        k &&
          u(
            u.S +
              u.F *
                (!V ||
                  l(function() {
                    var e = D()
                    return (
                      "[null]" != M([e]) ||
                      "{}" != M({ a: e }) ||
                      "{}" != M(Object(e))
                    )
                  })),
            "JSON",
            {
              stringify: function(e) {
                for (var r, t, o = [e], n = 1; arguments.length > n; )
                  o.push(arguments[n++])
                if (((t = r = o[1]), (_(r) || void 0 !== e) && !H(e)))
                  return (
                    j(r) ||
                      (r = function(e, r) {
                        if (
                          ("function" == typeof t &&
                            (r = t.call(this, e, r)),
                          !H(r))
                        )
                          return r
                      }),
                    (o[1] = r),
                    M.apply(k, o)
                  )
              },
            },
          ),
        D.prototype[U] ||
          t("../../node_modules/core-js/library/modules/_hide.js")(
            D.prototype,
            U,
            D.prototype.valueOf,
          ),
        a(D, "Symbol"),
        a(Math, "Math", !0),
        a(o.JSON, "JSON", !0)
    },
    "./node_modules/@subspace/redux-module/lib/index.js": function(
      e,
      r,
      t,
    ) {
      global,
        (e.exports = (function(e) {
          var r = {}
          function t(o) {
            if (r[o]) return r[o].exports
            var n = (r[o] = { i: o, l: !1, exports: {} })
            return (
              e[o].call(n.exports, n, n.exports, t),
              (n.l = !0),
              n.exports
            )
          }
          return (
            (t.m = e),
            (t.c = r),
            (t.d = function(e, r, o) {
              t.o(e, r) ||
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: o,
                })
            }),
            (t.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 })
            }),
            (t.t = function(e, r) {
              if ((1 & r && (e = t(e)), 8 & r)) return e
              if (4 & r && "object" == typeof e && e && e.__esModule)
                return e
              var o = Object.create(null)
              if (
                (t.r(o),
                Object.defineProperty(o, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & r && "string" != typeof e)
              )
                for (var n in e)
                  t.d(
                    o,
                    n,
                    function(r) {
                      return e[r]
                    }.bind(null, n),
                  )
              return o
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
            t((t.s = "./src/index.js"))
          )
        })({
          "../../node_modules/@babel/runtime/core-js/object/define-property.js": function(
            e,
            r,
            t,
          ) {
            e.exports = t(
              "../../node_modules/core-js/library/fn/object/define-property.js",
            )
          },
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js": function(
            e,
            r,
            t,
          ) {
            e.exports = t(
              "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
            )
          },
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js": function(
            e,
            r,
            t,
          ) {
            e.exports = t(
              "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js",
            )
          },
          "../../node_modules/@babel/runtime/core-js/object/keys.js": function(
            e,
            r,
            t,
          ) {
            e.exports = t(
              "../../node_modules/core-js/library/fn/object/keys.js",
            )
          },
          "../../node_modules/@babel/runtime/helpers/defineProperty.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/@babel/runtime/core-js/object/define-property.js",
            )
            e.exports = function(e, r, t) {
              return (
                r in e
                  ? o(e, r, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[r] = t),
                e
              )
            }
          },
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(
            e,
            r,
          ) {
            e.exports = function(e) {
              return e && e.__esModule ? e : { default: e }
            }
          },
          "../../node_modules/@babel/runtime/helpers/objectSpread.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
              ),
              n = t(
                "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js",
              ),
              s = t(
                "../../node_modules/@babel/runtime/core-js/object/keys.js",
              ),
              u = t(
                "../../node_modules/@babel/runtime/helpers/defineProperty.js",
              )
            e.exports = function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                  i = s(t)
                "function" == typeof n &&
                  (i = i.concat(
                    n(t).filter(function(e) {
                      return o(t, e).enumerable
                    }),
                  )),
                  i.forEach(function(r) {
                    u(e, r, t[r])
                  })
              }
              return e
            }
          },
          "../../node_modules/core-js/library/fn/object/define-property.js": function(
            e,
            r,
            t,
          ) {
            t(
              "../../node_modules/core-js/library/modules/es6.object.define-property.js",
            )
            var o = t(
              "../../node_modules/core-js/library/modules/_core.js",
            ).Object
            e.exports = function(e, r, t) {
              return o.defineProperty(e, r, t)
            }
          },
          "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js": function(
            e,
            r,
            t,
          ) {
            t(
              "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
            )
            var o = t(
              "../../node_modules/core-js/library/modules/_core.js",
            ).Object
            e.exports = function(e, r) {
              return o.getOwnPropertyDescriptor(e, r)
            }
          },
          "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js": function(
            e,
            r,
            t,
          ) {
            t(
              "../../node_modules/core-js/library/modules/es6.symbol.js",
            ),
              (e.exports = t(
                "../../node_modules/core-js/library/modules/_core.js",
              ).Object.getOwnPropertySymbols)
          },
          "../../node_modules/core-js/library/fn/object/keys.js": function(
            e,
            r,
            t,
          ) {
            t(
              "../../node_modules/core-js/library/modules/es6.object.keys.js",
            ),
              (e.exports = t(
                "../../node_modules/core-js/library/modules/_core.js",
              ).Object.keys)
          },
          "../../node_modules/core-js/library/modules/_a-function.js": function(
            e,
            r,
          ) {
            e.exports = function(e) {
              if ("function" != typeof e)
                throw TypeError(e + " is not a function!")
              return e
            }
          },
          "../../node_modules/core-js/library/modules/_an-object.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_is-object.js",
            )
            e.exports = function(e) {
              if (!o(e)) throw TypeError(e + " is not an object!")
              return e
            }
          },
          "../../node_modules/core-js/library/modules/_array-includes.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_to-iobject.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_to-length.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_to-absolute-index.js",
              )
            e.exports = function(e) {
              return function(r, t, u) {
                var i,
                  c = o(r),
                  l = n(c.length),
                  d = s(u, l)
                if (e && t != t) {
                  for (; l > d; ) if ((i = c[d++]) != i) return !0
                } else
                  for (; l > d; d++)
                    if ((e || d in c) && c[d] === t)
                      return e || d || 0
                return !e && -1
              }
            }
          },
          "../../node_modules/core-js/library/modules/_cof.js": function(
            e,
            r,
          ) {
            var t = {}.toString
            e.exports = function(e) {
              return t.call(e).slice(8, -1)
            }
          },
          "../../node_modules/core-js/library/modules/_core.js": function(
            e,
            r,
          ) {
            var t = (e.exports = { version: "2.5.5" })
            "number" == typeof __e && (__e = t)
          },
          "../../node_modules/core-js/library/modules/_ctx.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_a-function.js",
            )
            e.exports = function(e, r, t) {
              if ((o(e), void 0 === r)) return e
              switch (t) {
                case 1:
                  return function(t) {
                    return e.call(r, t)
                  }
                case 2:
                  return function(t, o) {
                    return e.call(r, t, o)
                  }
                case 3:
                  return function(t, o, n) {
                    return e.call(r, t, o, n)
                  }
              }
              return function() {
                return e.apply(r, arguments)
              }
            }
          },
          "../../node_modules/core-js/library/modules/_defined.js": function(
            e,
            r,
          ) {
            e.exports = function(e) {
              if (void 0 == e)
                throw TypeError("Can't call method on  " + e)
              return e
            }
          },
          "../../node_modules/core-js/library/modules/_descriptors.js": function(
            e,
            r,
            t,
          ) {
            e.exports = !t(
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
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_is-object.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_global.js",
              ).document,
              s = o(n) && o(n.createElement)
            e.exports = function(e) {
              return s ? n.createElement(e) : {}
            }
          },
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js": function(
            e,
            r,
          ) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
              ",",
            )
          },
          "../../node_modules/core-js/library/modules/_enum-keys.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-keys.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_object-gops.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_object-pie.js",
              )
            e.exports = function(e) {
              var r = o(e),
                t = n.f
              if (t)
                for (var u, i = t(e), c = s.f, l = 0; i.length > l; )
                  c.call(e, (u = i[l++])) && r.push(u)
              return r
            }
          },
          "../../node_modules/core-js/library/modules/_export.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_global.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_core.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_ctx.js",
              ),
              u = t(
                "../../node_modules/core-js/library/modules/_hide.js",
              ),
              i = t(
                "../../node_modules/core-js/library/modules/_has.js",
              ),
              c = function(e, r, t) {
                var l,
                  d,
                  a,
                  f = e & c.F,
                  p = e & c.G,
                  b = e & c.S,
                  y = e & c.P,
                  m = e & c.B,
                  j = e & c.W,
                  h = p ? n : n[r] || (n[r] = {}),
                  _ = h.prototype,
                  v = p ? o : b ? o[r] : (o[r] || {}).prototype
                for (l in (p && (t = r), t))
                  ((d = !f && v && void 0 !== v[l]) && i(h, l)) ||
                    ((a = d ? v[l] : t[l]),
                    (h[l] =
                      p && "function" != typeof v[l]
                        ? t[l]
                        : m && d
                          ? s(a, o)
                          : j && v[l] == a
                            ? (function(e) {
                                var r = function(r, t, o) {
                                  if (this instanceof e) {
                                    switch (arguments.length) {
                                      case 0:
                                        return new e()
                                      case 1:
                                        return new e(r)
                                      case 2:
                                        return new e(r, t)
                                    }
                                    return new e(r, t, o)
                                  }
                                  return e.apply(this, arguments)
                                }
                                return (r.prototype = e.prototype), r
                              })(a)
                            : y && "function" == typeof a
                              ? s(Function.call, a)
                              : a),
                    y &&
                      (((h.virtual || (h.virtual = {}))[l] = a),
                      e & c.R && _ && !_[l] && u(_, l, a)))
              }
            ;(c.F = 1),
              (c.G = 2),
              (c.S = 4),
              (c.P = 8),
              (c.B = 16),
              (c.W = 32),
              (c.U = 64),
              (c.R = 128),
              (e.exports = c)
          },
          "../../node_modules/core-js/library/modules/_fails.js": function(
            e,
            r,
          ) {
            e.exports = function(e) {
              try {
                return !!e()
              } catch (e) {
                return !0
              }
            }
          },
          "../../node_modules/core-js/library/modules/_global.js": function(
            e,
            r,
          ) {
            var t = (e.exports =
              "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                  ? self
                  : Function("return this")())
            "number" == typeof __g && (__g = t)
          },
          "../../node_modules/core-js/library/modules/_has.js": function(
            e,
            r,
          ) {
            var t = {}.hasOwnProperty
            e.exports = function(e, r) {
              return t.call(e, r)
            }
          },
          "../../node_modules/core-js/library/modules/_hide.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-dp.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_property-desc.js",
              )
            e.exports = t(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            )
              ? function(e, r, t) {
                  return o.f(e, r, n(1, t))
                }
              : function(e, r, t) {
                  return (e[r] = t), e
                }
          },
          "../../node_modules/core-js/library/modules/_html.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_global.js",
            ).document
            e.exports = o && o.documentElement
          },
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js": function(
            e,
            r,
            t,
          ) {
            e.exports =
              !t(
                "../../node_modules/core-js/library/modules/_descriptors.js",
              ) &&
              !t(
                "../../node_modules/core-js/library/modules/_fails.js",
              )(function() {
                return (
                  7 !=
                  Object.defineProperty(
                    t(
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
              })
          },
          "../../node_modules/core-js/library/modules/_iobject.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_cof.js",
            )
            e.exports = Object("z").propertyIsEnumerable(0)
              ? Object
              : function(e) {
                  return "String" == o(e) ? e.split("") : Object(e)
                }
          },
          "../../node_modules/core-js/library/modules/_is-array.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_cof.js",
            )
            e.exports =
              Array.isArray ||
              function(e) {
                return "Array" == o(e)
              }
          },
          "../../node_modules/core-js/library/modules/_is-object.js": function(
            e,
            r,
          ) {
            e.exports = function(e) {
              return "object" == typeof e
                ? null !== e
                : "function" == typeof e
            }
          },
          "../../node_modules/core-js/library/modules/_library.js": function(
            e,
            r,
          ) {
            e.exports = !0
          },
          "../../node_modules/core-js/library/modules/_meta.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_uid.js",
              )("meta"),
              n = t(
                "../../node_modules/core-js/library/modules/_is-object.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_has.js",
              ),
              u = t(
                "../../node_modules/core-js/library/modules/_object-dp.js",
              ).f,
              i = 0,
              c =
                Object.isExtensible ||
                function() {
                  return !0
                },
              l = !t(
                "../../node_modules/core-js/library/modules/_fails.js",
              )(function() {
                return c(Object.preventExtensions({}))
              }),
              d = function(e) {
                u(e, o, { value: { i: "O" + ++i, w: {} } })
              },
              a = (e.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(e, r) {
                  if (!n(e))
                    return "symbol" == typeof e
                      ? e
                      : ("string" == typeof e ? "S" : "P") + e
                  if (!s(e, o)) {
                    if (!c(e)) return "F"
                    if (!r) return "E"
                    d(e)
                  }
                  return e[o].i
                },
                getWeak: function(e, r) {
                  if (!s(e, o)) {
                    if (!c(e)) return !0
                    if (!r) return !1
                    d(e)
                  }
                  return e[o].w
                },
                onFreeze: function(e) {
                  return l && a.NEED && c(e) && !s(e, o) && d(e), e
                },
              })
          },
          "../../node_modules/core-js/library/modules/_object-create.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_an-object.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_object-dps.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
              ),
              u = t(
                "../../node_modules/core-js/library/modules/_shared-key.js",
              )("IE_PROTO"),
              i = function() {},
              c = function() {
                var e,
                  r = t(
                    "../../node_modules/core-js/library/modules/_dom-create.js",
                  )("iframe"),
                  o = s.length
                for (
                  r.style.display = "none",
                    t(
                      "../../node_modules/core-js/library/modules/_html.js",
                    ).appendChild(r),
                    r.src = "javascript:",
                    (e = r.contentWindow.document).open(),
                    e.write("<script>document.F=Object</script>"),
                    e.close(),
                    c = e.F;
                  o--;

                )
                  delete c.prototype[s[o]]
                return c()
              }
            e.exports =
              Object.create ||
              function(e, r) {
                var t
                return (
                  null !== e
                    ? ((i.prototype = o(e)),
                      (t = new i()),
                      (i.prototype = null),
                      (t[u] = e))
                    : (t = c()),
                  void 0 === r ? t : n(t, r)
                )
              }
          },
          "../../node_modules/core-js/library/modules/_object-dp.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_an-object.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_to-primitive.js",
              ),
              u = Object.defineProperty
            r.f = t(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            )
              ? Object.defineProperty
              : function(e, r, t) {
                  if ((o(e), (r = s(r, !0)), o(t), n))
                    try {
                      return u(e, r, t)
                    } catch (e) {}
                  if ("get" in t || "set" in t)
                    throw TypeError("Accessors not supported!")
                  return "value" in t && (e[r] = t.value), e
                }
          },
          "../../node_modules/core-js/library/modules/_object-dps.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-dp.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_an-object.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_object-keys.js",
              )
            e.exports = t(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            )
              ? Object.defineProperties
              : function(e, r) {
                  n(e)
                  for (var t, u = s(r), i = u.length, c = 0; i > c; )
                    o.f(e, (t = u[c++]), r[t])
                  return e
                }
          },
          "../../node_modules/core-js/library/modules/_object-gopd.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-pie.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_property-desc.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_to-iobject.js",
              ),
              u = t(
                "../../node_modules/core-js/library/modules/_to-primitive.js",
              ),
              i = t(
                "../../node_modules/core-js/library/modules/_has.js",
              ),
              c = t(
                "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
              ),
              l = Object.getOwnPropertyDescriptor
            r.f = t(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            )
              ? l
              : function(e, r) {
                  if (((e = s(e)), (r = u(r, !0)), c))
                    try {
                      return l(e, r)
                    } catch (e) {}
                  if (i(e, r)) return n(!o.f.call(e, r), e[r])
                }
          },
          "../../node_modules/core-js/library/modules/_object-gopn-ext.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_to-iobject.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_object-gopn.js",
              ).f,
              s = {}.toString,
              u =
                "object" == typeof window &&
                window &&
                Object.getOwnPropertyNames
                  ? Object.getOwnPropertyNames(window)
                  : []
            e.exports.f = function(e) {
              return u && "[object Window]" == s.call(e)
                ? (function(e) {
                    try {
                      return n(e)
                    } catch (e) {
                      return u.slice()
                    }
                  })(e)
                : n(o(e))
            }
          },
          "../../node_modules/core-js/library/modules/_object-gopn.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-keys-internal.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
              ).concat("length", "prototype")
            r.f =
              Object.getOwnPropertyNames ||
              function(e) {
                return o(e, n)
              }
          },
          "../../node_modules/core-js/library/modules/_object-gops.js": function(
            e,
            r,
          ) {
            r.f = Object.getOwnPropertySymbols
          },
          "../../node_modules/core-js/library/modules/_object-keys-internal.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_has.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_to-iobject.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_array-includes.js",
              )(!1),
              u = t(
                "../../node_modules/core-js/library/modules/_shared-key.js",
              )("IE_PROTO")
            e.exports = function(e, r) {
              var t,
                i = n(e),
                c = 0,
                l = []
              for (t in i) t != u && o(i, t) && l.push(t)
              for (; r.length > c; )
                o(i, (t = r[c++])) && (~s(l, t) || l.push(t))
              return l
            }
          },
          "../../node_modules/core-js/library/modules/_object-keys.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-keys-internal.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
              )
            e.exports =
              Object.keys ||
              function(e) {
                return o(e, n)
              }
          },
          "../../node_modules/core-js/library/modules/_object-pie.js": function(
            e,
            r,
          ) {
            r.f = {}.propertyIsEnumerable
          },
          "../../node_modules/core-js/library/modules/_object-sap.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_export.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_core.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_fails.js",
              )
            e.exports = function(e, r) {
              var t = (n.Object || {})[e] || Object[e],
                u = {}
              ;(u[e] = r(t)),
                o(
                  o.S +
                    o.F *
                      s(function() {
                        t(1)
                      }),
                  "Object",
                  u,
                )
            }
          },
          "../../node_modules/core-js/library/modules/_property-desc.js": function(
            e,
            r,
          ) {
            e.exports = function(e, r) {
              return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: r,
              }
            }
          },
          "../../node_modules/core-js/library/modules/_redefine.js": function(
            e,
            r,
            t,
          ) {
            e.exports = t(
              "../../node_modules/core-js/library/modules/_hide.js",
            )
          },
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_object-dp.js",
              ).f,
              n = t(
                "../../node_modules/core-js/library/modules/_has.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_wks.js",
              )("toStringTag")
            e.exports = function(e, r, t) {
              e &&
                !n((e = t ? e : e.prototype), s) &&
                o(e, s, { configurable: !0, value: r })
            }
          },
          "../../node_modules/core-js/library/modules/_shared-key.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_shared.js",
              )("keys"),
              n = t(
                "../../node_modules/core-js/library/modules/_uid.js",
              )
            e.exports = function(e) {
              return o[e] || (o[e] = n(e))
            }
          },
          "../../node_modules/core-js/library/modules/_shared.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_global.js",
              ),
              n =
                o["__core-js_shared__"] ||
                (o["__core-js_shared__"] = {})
            e.exports = function(e) {
              return n[e] || (n[e] = {})
            }
          },
          "../../node_modules/core-js/library/modules/_to-absolute-index.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_to-integer.js",
              ),
              n = Math.max,
              s = Math.min
            e.exports = function(e, r) {
              return (e = o(e)) < 0 ? n(e + r, 0) : s(e, r)
            }
          },
          "../../node_modules/core-js/library/modules/_to-integer.js": function(
            e,
            r,
          ) {
            var t = Math.ceil,
              o = Math.floor
            e.exports = function(e) {
              return isNaN((e = +e)) ? 0 : (e > 0 ? o : t)(e)
            }
          },
          "../../node_modules/core-js/library/modules/_to-iobject.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_iobject.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_defined.js",
              )
            e.exports = function(e) {
              return o(n(e))
            }
          },
          "../../node_modules/core-js/library/modules/_to-length.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_to-integer.js",
              ),
              n = Math.min
            e.exports = function(e) {
              return e > 0 ? n(o(e), 9007199254740991) : 0
            }
          },
          "../../node_modules/core-js/library/modules/_to-object.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_defined.js",
            )
            e.exports = function(e) {
              return Object(o(e))
            }
          },
          "../../node_modules/core-js/library/modules/_to-primitive.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_is-object.js",
            )
            e.exports = function(e, r) {
              if (!o(e)) return e
              var t, n
              if (
                r &&
                "function" == typeof (t = e.toString) &&
                !o((n = t.call(e)))
              )
                return n
              if (
                "function" == typeof (t = e.valueOf) &&
                !o((n = t.call(e)))
              )
                return n
              if (
                !r &&
                "function" == typeof (t = e.toString) &&
                !o((n = t.call(e)))
              )
                return n
              throw TypeError(
                "Can't convert object to primitive value",
              )
            }
          },
          "../../node_modules/core-js/library/modules/_uid.js": function(
            e,
            r,
          ) {
            var t = 0,
              o = Math.random()
            e.exports = function(e) {
              return "Symbol(".concat(
                void 0 === e ? "" : e,
                ")_",
                (++t + o).toString(36),
              )
            }
          },
          "../../node_modules/core-js/library/modules/_wks-define.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_global.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_core.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_library.js",
              ),
              u = t(
                "../../node_modules/core-js/library/modules/_wks-ext.js",
              ),
              i = t(
                "../../node_modules/core-js/library/modules/_object-dp.js",
              ).f
            e.exports = function(e) {
              var r = n.Symbol || (n.Symbol = s ? {} : o.Symbol || {})
              "_" == e.charAt(0) ||
                e in r ||
                i(r, e, { value: u.f(e) })
            }
          },
          "../../node_modules/core-js/library/modules/_wks-ext.js": function(
            e,
            r,
            t,
          ) {
            r.f = t(
              "../../node_modules/core-js/library/modules/_wks.js",
            )
          },
          "../../node_modules/core-js/library/modules/_wks.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_shared.js",
              )("wks"),
              n = t(
                "../../node_modules/core-js/library/modules/_uid.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_global.js",
              ).Symbol,
              u = "function" == typeof s
            ;(e.exports = function(e) {
              return (
                o[e] ||
                (o[e] = (u && s[e]) || (u ? s : n)("Symbol." + e))
              )
            }).store = o
          },
          "../../node_modules/core-js/library/modules/es6.object.define-property.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
              "../../node_modules/core-js/library/modules/_export.js",
            )
            o(
              o.S +
                o.F *
                  !t(
                    "../../node_modules/core-js/library/modules/_descriptors.js",
                  ),
              "Object",
              {
                defineProperty: t(
                  "../../node_modules/core-js/library/modules/_object-dp.js",
                ).f,
              },
            )
          },
          "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_to-iobject.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_object-gopd.js",
              ).f
            t(
              "../../node_modules/core-js/library/modules/_object-sap.js",
            )("getOwnPropertyDescriptor", function() {
              return function(e, r) {
                return n(o(e), r)
              }
            })
          },
          "../../node_modules/core-js/library/modules/es6.object.keys.js": function(
            e,
            r,
            t,
          ) {
            var o = t(
                "../../node_modules/core-js/library/modules/_to-object.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_object-keys.js",
              )
            t(
              "../../node_modules/core-js/library/modules/_object-sap.js",
            )("keys", function() {
              return function(e) {
                return n(o(e))
              }
            })
          },
          "../../node_modules/core-js/library/modules/es6.symbol.js": function(
            e,
            r,
            t,
          ) {
            "use strict"
            var o = t(
                "../../node_modules/core-js/library/modules/_global.js",
              ),
              n = t(
                "../../node_modules/core-js/library/modules/_has.js",
              ),
              s = t(
                "../../node_modules/core-js/library/modules/_descriptors.js",
              ),
              u = t(
                "../../node_modules/core-js/library/modules/_export.js",
              ),
              i = t(
                "../../node_modules/core-js/library/modules/_redefine.js",
              ),
              c = t(
                "../../node_modules/core-js/library/modules/_meta.js",
              ).KEY,
              l = t(
                "../../node_modules/core-js/library/modules/_fails.js",
              ),
              d = t(
                "../../node_modules/core-js/library/modules/_shared.js",
              ),
              a = t(
                "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
              ),
              f = t(
                "../../node_modules/core-js/library/modules/_uid.js",
              ),
              p = t(
                "../../node_modules/core-js/library/modules/_wks.js",
              ),
              b = t(
                "../../node_modules/core-js/library/modules/_wks-ext.js",
              ),
              y = t(
                "../../node_modules/core-js/library/modules/_wks-define.js",
              ),
              m = t(
                "../../node_modules/core-js/library/modules/_enum-keys.js",
              ),
              j = t(
                "../../node_modules/core-js/library/modules/_is-array.js",
              ),
              h = t(
                "../../node_modules/core-js/library/modules/_an-object.js",
              ),
              _ = t(
                "../../node_modules/core-js/library/modules/_is-object.js",
              ),
              v = t(
                "../../node_modules/core-js/library/modules/_to-iobject.js",
              ),
              g = t(
                "../../node_modules/core-js/library/modules/_to-primitive.js",
              ),
              x = t(
                "../../node_modules/core-js/library/modules/_property-desc.js",
              ),
              w = t(
                "../../node_modules/core-js/library/modules/_object-create.js",
              ),
              S = t(
                "../../node_modules/core-js/library/modules/_object-gopn-ext.js",
              ),
              E = t(
                "../../node_modules/core-js/library/modules/_object-gopd.js",
              ),
              O = t(
                "../../node_modules/core-js/library/modules/_object-dp.js",
              ),
              P = t(
                "../../node_modules/core-js/library/modules/_object-keys.js",
              ),
              T = E.f,
              A = O.f,
              I = S.f,
              D = o.Symbol,
              k = o.JSON,
              M = k && k.stringify,
              N = p("_hidden"),
              U = p("toPrimitive"),
              R = {}.propertyIsEnumerable,
              C = d("symbol-registry"),
              F = d("symbols"),
              Y = d("op-symbols"),
              B = Object.prototype,
              V = "function" == typeof D,
              q = o.QObject,
              L = !q || !q.prototype || !q.prototype.findChild,
              G =
                s &&
                l(function() {
                  return (
                    7 !=
                    w(
                      A({}, "a", {
                        get: function() {
                          return A(this, "a", { value: 7 }).a
                        },
                      }),
                    ).a
                  )
                })
                  ? function(e, r, t) {
                      var o = T(B, r)
                      o && delete B[r],
                        A(e, r, t),
                        o && e !== B && A(B, r, o)
                    }
                  : A,
              W = function(e) {
                var r = (F[e] = w(D.prototype))
                return (r._k = e), r
              },
              H =
                V && "symbol" == typeof D.iterator
                  ? function(e) {
                      return "symbol" == typeof e
                    }
                  : function(e) {
                      return e instanceof D
                    },
              J = function(e, r, t) {
                return (
                  e === B && J(Y, r, t),
                  h(e),
                  (r = g(r, !0)),
                  h(t),
                  n(F, r)
                    ? (t.enumerable
                        ? (n(e, N) && e[N][r] && (e[N][r] = !1),
                          (t = w(t, { enumerable: x(0, !1) })))
                        : (n(e, N) || A(e, N, x(1, {})),
                          (e[N][r] = !0)),
                      G(e, r, t))
                    : A(e, r, t)
                )
              },
              K = function(e, r) {
                h(e)
                for (
                  var t, o = m((r = v(r))), n = 0, s = o.length;
                  s > n;

                )
                  J(e, (t = o[n++]), r[t])
                return e
              },
              z = function(e) {
                var r = R.call(this, (e = g(e, !0)))
                return (
                  !(this === B && n(F, e) && !n(Y, e)) &&
                  (!(
                    r ||
                    !n(this, e) ||
                    !n(F, e) ||
                    (n(this, N) && this[N][e])
                  ) ||
                    r)
                )
              },
              $ = function(e, r) {
                if (
                  ((e = v(e)),
                  (r = g(r, !0)),
                  e !== B || !n(F, r) || n(Y, r))
                ) {
                  var t = T(e, r)
                  return (
                    !t ||
                      !n(F, r) ||
                      (n(e, N) && e[N][r]) ||
                      (t.enumerable = !0),
                    t
                  )
                }
              },
              Q = function(e) {
                for (
                  var r, t = I(v(e)), o = [], s = 0;
                  t.length > s;

                )
                  n(F, (r = t[s++])) || r == N || r == c || o.push(r)
                return o
              },
              X = function(e) {
                for (
                  var r,
                    t = e === B,
                    o = I(t ? Y : v(e)),
                    s = [],
                    u = 0;
                  o.length > u;

                )
                  !n(F, (r = o[u++])) ||
                    (t && !n(B, r)) ||
                    s.push(F[r])
                return s
              }
            V ||
              (i(
                (D = function() {
                  if (this instanceof D)
                    throw TypeError("Symbol is not a constructor!")
                  var e = f(
                      arguments.length > 0 ? arguments[0] : void 0,
                    ),
                    r = function(t) {
                      this === B && r.call(Y, t),
                        n(this, N) &&
                          n(this[N], e) &&
                          (this[N][e] = !1),
                        G(this, e, x(1, t))
                    }
                  return (
                    s && L && G(B, e, { configurable: !0, set: r }),
                    W(e)
                  )
                }).prototype,
                "toString",
                function() {
                  return this._k
                },
              ),
              (E.f = $),
              (O.f = J),
              (t(
                "../../node_modules/core-js/library/modules/_object-gopn.js",
              ).f = S.f = Q),
              (t(
                "../../node_modules/core-js/library/modules/_object-pie.js",
              ).f = z),
              (t(
                "../../node_modules/core-js/library/modules/_object-gops.js",
              ).f = X),
              s &&
                !t(
                  "../../node_modules/core-js/library/modules/_library.js",
                ) &&
                i(B, "propertyIsEnumerable", z, !0),
              (b.f = function(e) {
                return W(p(e))
              })),
              u(u.G + u.W + u.F * !V, { Symbol: D })
            for (
              var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                  ",",
                ),
                ee = 0;
              Z.length > ee;

            )
              p(Z[ee++])
            for (var re = P(p.store), te = 0; re.length > te; )
              y(re[te++])
            u(u.S + u.F * !V, "Symbol", {
              for: function(e) {
                return n(C, (e += "")) ? C[e] : (C[e] = D(e))
              },
              keyFor: function(e) {
                if (!H(e)) throw TypeError(e + " is not a symbol!")
                for (var r in C) if (C[r] === e) return r
              },
              useSetter: function() {
                L = !0
              },
              useSimple: function() {
                L = !1
              },
            }),
              u(u.S + u.F * !V, "Object", {
                create: function(e, r) {
                  return void 0 === r ? w(e) : K(w(e), r)
                },
                defineProperty: J,
                defineProperties: K,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: X,
              }),
              k &&
                u(
                  u.S +
                    u.F *
                      (!V ||
                        l(function() {
                          var e = D()
                          return (
                            "[null]" != M([e]) ||
                            "{}" != M({ a: e }) ||
                            "{}" != M(Object(e))
                          )
                        })),
                  "JSON",
                  {
                    stringify: function(e) {
                      for (
                        var r, t, o = [e], n = 1;
                        arguments.length > n;

                      )
                        o.push(arguments[n++])
                      if (
                        ((t = r = o[1]),
                        (_(r) || void 0 !== e) && !H(e))
                      )
                        return (
                          j(r) ||
                            (r = function(e, r) {
                              if (
                                ("function" == typeof t &&
                                  (r = t.call(this, e, r)),
                                !H(r))
                              )
                                return r
                            }),
                          (o[1] = r),
                          M.apply(k, o)
                        )
                    },
                  },
                ),
              D.prototype[U] ||
                t(
                  "../../node_modules/core-js/library/modules/_hide.js",
                )(D.prototype, U, D.prototype.valueOf),
              a(D, "Symbol"),
              a(Math, "Math", !0),
              a(o.JSON, "JSON", !0)
          },
          "./src/index.js": function(e, r, t) {
            "use strict"
            var o = t(
              "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            )
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.createReduxModule = function(e, r) {
                const t = s(r.actionTypes, (r, [t, o]) =>
                    (0, n.default)({}, r, { [t]: `${e}/${o}` }),
                  ),
                  o = s(r.actionCreators, (r, [t, o]) =>
                    (0, n.default)({}, r, {
                      [t]: (...r) => {
                        const t = o(...r)
                        return (0, n.default)({}, t, {
                          type: `${e}/${t.type}`,
                        })
                      },
                    }),
                  ),
                  u = s(r.selectors, (r, [t, o]) =>
                    (0, n.default)({}, r, {
                      [t]: (r, ...t) => o(r[e], ...t),
                    }),
                  )
                return (0, n.default)(
                  {
                    reducer: function(t, o) {
                      return r.reducer(
                        t,
                        (0, n.default)({}, o, {
                          type: o.type.replace(`${e}/`, ""),
                        }),
                      )
                    },
                  },
                  t,
                  o,
                  u,
                )
              }),
              (r.composeReduxModules = function(e, r) {
                return (0, n.default)({}, e, r, {
                  reducer: (t, o) => r.reducer(e.reducer(t, o), o),
                })
              }),
              (r.extractReducers = function(e) {
                const r = {}
                for (const [t, o] of Object.entries(e))
                  "object" == typeof o &&
                    null !== o &&
                    (r[t] = o.reducer)
                return r
              })
            var n = o(
              t(
                "../../node_modules/@babel/runtime/helpers/objectSpread.js",
              ),
            )
            function s(e, r) {
              return Object.entries(e).reduce(r, {})
            }
          },
        }))
    },
    "./node_modules/rxjs/_esm5/index.js": function(e, r, t) {
      "use strict"
      t.r(r)
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var o = function(e, r) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, r) {
              e.__proto__ = r
            }) ||
          function(e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t])
          })(e, r)
      }
      function n(e, r) {
        function t() {
          this.constructor = e
        }
        o(e, r),
          (e.prototype =
            null === r
              ? Object.create(r)
              : ((t.prototype = r.prototype), new t()))
      }
      function s(e) {
        return "function" == typeof e
      }
      var u = !1,
        i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            e && new Error().stack
            u = e
          },
          get useDeprecatedSynchronousErrorHandling() {
            return u
          },
        }
      function c(e) {
        setTimeout(function() {
          throw e
        })
      }
      var l = {
          closed: !0,
          next: function(e) {},
          error: function(e) {
            if (i.useDeprecatedSynchronousErrorHandling) throw e
            c(e)
          },
          complete: function() {},
        },
        d =
          Array.isArray ||
          function(e) {
            return e && "number" == typeof e.length
          }
      function a(e) {
        return null != e && "object" == typeof e
      }
      var f,
        p = { e: {} }
      function b() {
        try {
          return f.apply(this, arguments)
        } catch (e) {
          return (p.e = e), p
        }
      }
      function y(e) {
        return (f = e), b
      }
      var m = (function(e) {
          function r(t) {
            var o =
              e.call(
                this,
                t
                  ? t.length +
                    " errors occurred during unsubscription:\n  " +
                    t
                      .map(function(e, r) {
                        return r + 1 + ") " + e.toString()
                      })
                      .join("\n  ")
                  : "",
              ) || this
            return (
              (o.errors = t),
              (o.name = "UnsubscriptionError"),
              Object.setPrototypeOf(o, r.prototype),
              o
            )
          }
          return n(r, e), r
        })(Error),
        j = (function() {
          function e(e) {
            ;(this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e)
          }
          return (
            (e.prototype.unsubscribe = function() {
              var e,
                r = !1
              if (!this.closed) {
                var t = this._parent,
                  o = this._parents,
                  n = this._unsubscribe,
                  u = this._subscriptions
                ;(this.closed = !0),
                  (this._parent = null),
                  (this._parents = null),
                  (this._subscriptions = null)
                for (var i = -1, c = o ? o.length : 0; t; )
                  t.remove(this), (t = (++i < c && o[i]) || null)
                if (s(n))
                  y(n).call(this) === p &&
                    ((r = !0),
                    (e =
                      e ||
                      (p.e instanceof m ? h(p.e.errors) : [p.e])))
                if (d(u))
                  for (i = -1, c = u.length; ++i < c; ) {
                    var l = u[i]
                    if (a(l))
                      if (y(l.unsubscribe).call(l) === p) {
                        ;(r = !0), (e = e || [])
                        var f = p.e
                        f instanceof m
                          ? (e = e.concat(h(f.errors)))
                          : e.push(f)
                      }
                  }
                if (r) throw new m(e)
              }
            }),
            (e.prototype.add = function(r) {
              if (!r || r === e.EMPTY) return e.EMPTY
              if (r === this) return this
              var t = r
              switch (typeof r) {
                case "function":
                  t = new e(r)
                case "object":
                  if (t.closed || "function" != typeof t.unsubscribe)
                    return t
                  if (this.closed) return t.unsubscribe(), t
                  if ("function" != typeof t._addParent) {
                    var o = t
                    ;(t = new e())._subscriptions = [o]
                  }
                  break
                default:
                  throw new Error(
                    "unrecognized teardown " +
                      r +
                      " added to Subscription.",
                  )
              }
              return (
                (
                  this._subscriptions || (this._subscriptions = [])
                ).push(t),
                t._addParent(this),
                t
              )
            }),
            (e.prototype.remove = function(e) {
              var r = this._subscriptions
              if (r) {
                var t = r.indexOf(e)
                ;-1 !== t && r.splice(t, 1)
              }
            }),
            (e.prototype._addParent = function(e) {
              var r = this._parent,
                t = this._parents
              r && r !== e
                ? t
                  ? -1 === t.indexOf(e) && t.push(e)
                  : (this._parents = [e])
                : (this._parent = e)
            }),
            (e.EMPTY = (function(e) {
              return (e.closed = !0), e
            })(new e())),
            e
          )
        })()
      function h(e) {
        return e.reduce(function(e, r) {
          return e.concat(r instanceof m ? r.errors : r)
        }, [])
      }
      var _ =
          "function" == typeof Symbol &&
          "function" == typeof Symbol.for
            ? Symbol.for("rxSubscriber")
            : "@@rxSubscriber",
        v = (function(e) {
          function r(r, t, o) {
            var n = e.call(this) || this
            switch (((n.syncErrorValue = null),
            (n.syncErrorThrown = !1),
            (n.syncErrorThrowable = !1),
            (n.isStopped = !1),
            arguments.length)) {
              case 0:
                n.destination = l
                break
              case 1:
                if (!r) {
                  n.destination = l
                  break
                }
                if ("object" == typeof r) {
                  if (
                    (function(e) {
                      return (
                        e instanceof v ||
                        ("syncErrorThrowable" in e && e[_])
                      )
                    })(r)
                  ) {
                    var s = r[_]()
                    ;(n.syncErrorThrowable = s.syncErrorThrowable),
                      (n.destination = s),
                      s.add(n)
                  } else
                    (n.syncErrorThrowable = !0),
                      (n.destination = new g(n, r))
                  break
                }
              default:
                ;(n.syncErrorThrowable = !0),
                  (n.destination = new g(n, r, t, o))
            }
            return n
          }
          return (
            n(r, e),
            (r.prototype[_] = function() {
              return this
            }),
            (r.create = function(e, t, o) {
              var n = new r(e, t, o)
              return (n.syncErrorThrowable = !1), n
            }),
            (r.prototype.next = function(e) {
              this.isStopped || this._next(e)
            }),
            (r.prototype.error = function(e) {
              this.isStopped ||
                ((this.isStopped = !0), this._error(e))
            }),
            (r.prototype.complete = function() {
              this.isStopped ||
                ((this.isStopped = !0), this._complete())
            }),
            (r.prototype.unsubscribe = function() {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this))
            }),
            (r.prototype._next = function(e) {
              this.destination.next(e)
            }),
            (r.prototype._error = function(e) {
              this.destination.error(e), this.unsubscribe()
            }),
            (r.prototype._complete = function() {
              this.destination.complete(), this.unsubscribe()
            }),
            (r.prototype._unsubscribeAndRecycle = function() {
              var e = this._parent,
                r = this._parents
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = e),
                (this._parents = r),
                this
              )
            }),
            r
          )
        })(j),
        g = (function(e) {
          function r(r, t, o, n) {
            var u,
              i = e.call(this) || this
            i._parentSubscriber = r
            var c = i
            return (
              s(t)
                ? (u = t)
                : t &&
                  ((u = t.next),
                  (o = t.error),
                  (n = t.complete),
                  t !== l &&
                    (s((c = Object.create(t)).unsubscribe) &&
                      i.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = i.unsubscribe.bind(i)))),
              (i._context = c),
              (i._next = u),
              (i._error = o),
              (i._complete = n),
              i
            )
          }
          return (
            n(r, e),
            (r.prototype.next = function(e) {
              if (!this.isStopped && this._next) {
                var r = this._parentSubscriber
                i.useDeprecatedSynchronousErrorHandling &&
                r.syncErrorThrowable
                  ? this.__tryOrSetError(r, this._next, e) &&
                    this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e)
              }
            }),
            (r.prototype.error = function(e) {
              if (!this.isStopped) {
                var r = this._parentSubscriber,
                  t = i.useDeprecatedSynchronousErrorHandling
                if (this._error)
                  t && r.syncErrorThrowable
                    ? (this.__tryOrSetError(r, this._error, e),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e),
                      this.unsubscribe())
                else if (r.syncErrorThrowable)
                  t
                    ? ((r.syncErrorValue = e),
                      (r.syncErrorThrown = !0))
                    : c(e),
                    this.unsubscribe()
                else {
                  if ((this.unsubscribe(), t)) throw e
                  c(e)
                }
              }
            }),
            (r.prototype.complete = function() {
              var e = this
              if (!this.isStopped) {
                var r = this._parentSubscriber
                if (this._complete) {
                  var t = function() {
                    return e._complete.call(e._context)
                  }
                  i.useDeprecatedSynchronousErrorHandling &&
                  r.syncErrorThrowable
                    ? (this.__tryOrSetError(r, t), this.unsubscribe())
                    : (this.__tryOrUnsub(t), this.unsubscribe())
                } else this.unsubscribe()
              }
            }),
            (r.prototype.__tryOrUnsub = function(e, r) {
              try {
                e.call(this._context, r)
              } catch (e) {
                if (
                  (this.unsubscribe(),
                  i.useDeprecatedSynchronousErrorHandling)
                )
                  throw e
                c(e)
              }
            }),
            (r.prototype.__tryOrSetError = function(e, r, t) {
              if (!i.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call")
              try {
                r.call(this._context, t)
              } catch (r) {
                return i.useDeprecatedSynchronousErrorHandling
                  ? ((e.syncErrorValue = r),
                    (e.syncErrorThrown = !0),
                    !0)
                  : (c(r), !0)
              }
              return !1
            }),
            (r.prototype._unsubscribe = function() {
              var e = this._parentSubscriber
              ;(this._context = null),
                (this._parentSubscriber = null),
                e.unsubscribe()
            }),
            r
          )
        })(v)
      var x =
        ("function" == typeof Symbol && Symbol.observable) ||
        "@@observable"
      function w() {}
      function S() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        return E(e)
      }
      function E(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function(r) {
                return e.reduce(function(e, r) {
                  return r(e)
                }, r)
              }
          : w
      }
      var O = (function() {
        function e(e) {
          ;(this._isScalar = !1), e && (this._subscribe = e)
        }
        return (
          (e.prototype.lift = function(r) {
            var t = new e()
            return (t.source = this), (t.operator = r), t
          }),
          (e.prototype.subscribe = function(e, r, t) {
            var o = this.operator,
              n = (function(e, r, t) {
                if (e) {
                  if (e instanceof v) return e
                  if (e[_]) return e[_]()
                }
                return e || r || t ? new v(e, r, t) : new v(l)
              })(e, r, t)
            if (
              (o
                ? o.call(n, this.source)
                : n.add(
                    this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !n.syncErrorThrowable)
                      ? this._subscribe(n)
                      : this._trySubscribe(n),
                  ),
              i.useDeprecatedSynchronousErrorHandling &&
                n.syncErrorThrowable &&
                ((n.syncErrorThrowable = !1), n.syncErrorThrown))
            )
              throw n.syncErrorValue
            return n
          }),
          (e.prototype._trySubscribe = function(e) {
            try {
              return this._subscribe(e)
            } catch (r) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = r)),
                e.error(r)
            }
          }),
          (e.prototype.forEach = function(e, r) {
            var t = this
            return new (r = P(r))(function(r, o) {
              var n
              n = t.subscribe(
                function(r) {
                  try {
                    e(r)
                  } catch (e) {
                    o(e), n && n.unsubscribe()
                  }
                },
                o,
                r,
              )
            })
          }),
          (e.prototype._subscribe = function(e) {
            var r = this.source
            return r && r.subscribe(e)
          }),
          (e.prototype[x] = function() {
            return this
          }),
          (e.prototype.pipe = function() {
            for (var e = [], r = 0; r < arguments.length; r++)
              e[r] = arguments[r]
            return 0 === e.length ? this : E(e)(this)
          }),
          (e.prototype.toPromise = function(e) {
            var r = this
            return new (e = P(e))(function(e, t) {
              var o
              r.subscribe(
                function(e) {
                  return (o = e)
                },
                function(e) {
                  return t(e)
                },
                function() {
                  return e(o)
                },
              )
            })
          }),
          (e.create = function(r) {
            return new e(r)
          }),
          e
        )
      })()
      function P(e) {
        if ((e || (e = i.Promise || Promise), !e))
          throw new Error("no Promise impl found")
        return e
      }
      var T = (function(e) {
          function r() {
            var t = e.call(this, "object unsubscribed") || this
            return (
              (t.name = "ObjectUnsubscribedError"),
              Object.setPrototypeOf(t, r.prototype),
              t
            )
          }
          return n(r, e), r
        })(Error),
        A = (function(e) {
          function r(r, t) {
            var o = e.call(this) || this
            return (
              (o.subject = r), (o.subscriber = t), (o.closed = !1), o
            )
          }
          return (
            n(r, e),
            (r.prototype.unsubscribe = function() {
              if (!this.closed) {
                this.closed = !0
                var e = this.subject,
                  r = e.observers
                if (
                  ((this.subject = null),
                  r && 0 !== r.length && !e.isStopped && !e.closed)
                ) {
                  var t = r.indexOf(this.subscriber)
                  ;-1 !== t && r.splice(t, 1)
                }
              }
            }),
            r
          )
        })(j),
        I = (function(e) {
          function r(r) {
            var t = e.call(this, r) || this
            return (t.destination = r), t
          }
          return n(r, e), r
        })(v),
        D = (function(e) {
          function r() {
            var r = e.call(this) || this
            return (
              (r.observers = []),
              (r.closed = !1),
              (r.isStopped = !1),
              (r.hasError = !1),
              (r.thrownError = null),
              r
            )
          }
          return (
            n(r, e),
            (r.prototype[_] = function() {
              return new I(this)
            }),
            (r.prototype.lift = function(e) {
              var r = new k(this, this)
              return (r.operator = e), r
            }),
            (r.prototype.next = function(e) {
              if (this.closed) throw new T()
              if (!this.isStopped)
                for (
                  var r = this.observers,
                    t = r.length,
                    o = r.slice(),
                    n = 0;
                  n < t;
                  n++
                )
                  o[n].next(e)
            }),
            (r.prototype.error = function(e) {
              if (this.closed) throw new T()
              ;(this.hasError = !0),
                (this.thrownError = e),
                (this.isStopped = !0)
              for (
                var r = this.observers,
                  t = r.length,
                  o = r.slice(),
                  n = 0;
                n < t;
                n++
              )
                o[n].error(e)
              this.observers.length = 0
            }),
            (r.prototype.complete = function() {
              if (this.closed) throw new T()
              this.isStopped = !0
              for (
                var e = this.observers,
                  r = e.length,
                  t = e.slice(),
                  o = 0;
                o < r;
                o++
              )
                t[o].complete()
              this.observers.length = 0
            }),
            (r.prototype.unsubscribe = function() {
              ;(this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null)
            }),
            (r.prototype._trySubscribe = function(r) {
              if (this.closed) throw new T()
              return e.prototype._trySubscribe.call(this, r)
            }),
            (r.prototype._subscribe = function(e) {
              if (this.closed) throw new T()
              return this.hasError
                ? (e.error(this.thrownError), j.EMPTY)
                : this.isStopped
                  ? (e.complete(), j.EMPTY)
                  : (this.observers.push(e), new A(this, e))
            }),
            (r.prototype.asObservable = function() {
              var e = new O()
              return (e.source = this), e
            }),
            (r.create = function(e, r) {
              return new k(e, r)
            }),
            r
          )
        })(O),
        k = (function(e) {
          function r(r, t) {
            var o = e.call(this) || this
            return (o.destination = r), (o.source = t), o
          }
          return (
            n(r, e),
            (r.prototype.next = function(e) {
              var r = this.destination
              r && r.next && r.next(e)
            }),
            (r.prototype.error = function(e) {
              var r = this.destination
              r && r.error && this.destination.error(e)
            }),
            (r.prototype.complete = function() {
              var e = this.destination
              e && e.complete && this.destination.complete()
            }),
            (r.prototype._subscribe = function(e) {
              return this.source ? this.source.subscribe(e) : j.EMPTY
            }),
            r
          )
        })(D)
      var M = (function() {
          function e(e) {
            this.connectable = e
          }
          return (
            (e.prototype.call = function(e, r) {
              var t = this.connectable
              t._refCount++
              var o = new N(e, t),
                n = r.subscribe(o)
              return o.closed || (o.connection = t.connect()), n
            }),
            e
          )
        })(),
        N = (function(e) {
          function r(r, t) {
            var o = e.call(this, r) || this
            return (o.connectable = t), o
          }
          return (
            n(r, e),
            (r.prototype._unsubscribe = function() {
              var e = this.connectable
              if (e) {
                this.connectable = null
                var r = e._refCount
                if (r <= 0) this.connection = null
                else if (((e._refCount = r - 1), r > 1))
                  this.connection = null
                else {
                  var t = this.connection,
                    o = e._connection
                  ;(this.connection = null),
                    !o || (t && o !== t) || o.unsubscribe()
                }
              } else this.connection = null
            }),
            r
          )
        })(v),
        U = (function(e) {
          function r(r, t) {
            var o = e.call(this) || this
            return (
              (o.source = r),
              (o.subjectFactory = t),
              (o._refCount = 0),
              (o._isComplete = !1),
              o
            )
          }
          return (
            n(r, e),
            (r.prototype._subscribe = function(e) {
              return this.getSubject().subscribe(e)
            }),
            (r.prototype.getSubject = function() {
              var e = this._subject
              return (
                (e && !e.isStopped) ||
                  (this._subject = this.subjectFactory()),
                this._subject
              )
            }),
            (r.prototype.connect = function() {
              var e = this._connection
              return (
                e ||
                  ((this._isComplete = !1),
                  (e = this._connection = new j()).add(
                    this.source.subscribe(
                      new C(this.getSubject(), this),
                    ),
                  ),
                  e.closed
                    ? ((this._connection = null), (e = j.EMPTY))
                    : (this._connection = e)),
                e
              )
            }),
            (r.prototype.refCount = function() {
              return (function(e) {
                return e.lift(new M(e))
              })(this)
            }),
            r
          )
        })(O),
        R = U.prototype,
        C = (R._subscribe,
        R._isComplete,
        R.getSubject,
        R.connect,
        R.refCount,
        (function(e) {
          function r(r, t) {
            var o = e.call(this, r) || this
            return (o.connectable = t), o
          }
          return (
            n(r, e),
            (r.prototype._error = function(r) {
              this._unsubscribe(), e.prototype._error.call(this, r)
            }),
            (r.prototype._complete = function() {
              ;(this.connectable._isComplete = !0),
                this._unsubscribe(),
                e.prototype._complete.call(this)
            }),
            (r.prototype._unsubscribe = function() {
              var e = this.connectable
              if (e) {
                this.connectable = null
                var r = e._connection
                ;(e._refCount = 0),
                  (e._subject = null),
                  (e._connection = null),
                  r && r.unsubscribe()
              }
            }),
            r
          )
        })(I))
      var F = (function(e) {
          function r(r, t, o) {
            var n = e.call(this) || this
            return (
              (n.key = r),
              (n.groupSubject = t),
              (n.refCountSubscription = o),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype._subscribe = function(e) {
              var r = new j(),
                t = this.refCountSubscription,
                o = this.groupSubject
              return (
                t && !t.closed && r.add(new Y(t)),
                r.add(o.subscribe(e)),
                r
              )
            }),
            r
          )
        })(O),
        Y = (function(e) {
          function r(r) {
            var t = e.call(this) || this
            return (t.parent = r), r.count++, t
          }
          return (
            n(r, e),
            (r.prototype.unsubscribe = function() {
              var r = this.parent
              r.closed ||
                this.closed ||
                (e.prototype.unsubscribe.call(this),
                (r.count -= 1),
                0 === r.count &&
                  r.attemptedToUnsubscribe &&
                  r.unsubscribe())
            }),
            r
          )
        })(j),
        B = (function(e) {
          function r(r) {
            var t = e.call(this) || this
            return (t._value = r), t
          }
          return (
            n(r, e),
            Object.defineProperty(r.prototype, "value", {
              get: function() {
                return this.getValue()
              },
              enumerable: !0,
              configurable: !0,
            }),
            (r.prototype._subscribe = function(r) {
              var t = e.prototype._subscribe.call(this, r)
              return t && !t.closed && r.next(this._value), t
            }),
            (r.prototype.getValue = function() {
              if (this.hasError) throw this.thrownError
              if (this.closed) throw new T()
              return this._value
            }),
            (r.prototype.next = function(r) {
              e.prototype.next.call(this, (this._value = r))
            }),
            r
          )
        })(D),
        V = (function(e) {
          function r(r, t) {
            var o = e.call(this, r, t) || this
            return (
              (o.scheduler = r), (o.work = t), (o.pending = !1), o
            )
          }
          return (
            n(r, e),
            (r.prototype.schedule = function(e, r) {
              if ((void 0 === r && (r = 0), this.closed)) return this
              this.state = e
              var t = this.id,
                o = this.scheduler
              return (
                null != t && (this.id = this.recycleAsyncId(o, t, r)),
                (this.pending = !0),
                (this.delay = r),
                (this.id =
                  this.id || this.requestAsyncId(o, this.id, r)),
                this
              )
            }),
            (r.prototype.requestAsyncId = function(e, r, t) {
              return (
                void 0 === t && (t = 0),
                setInterval(e.flush.bind(e, this), t)
              )
            }),
            (r.prototype.recycleAsyncId = function(e, r, t) {
              if (
                (void 0 === t && (t = 0),
                null !== t && this.delay === t && !1 === this.pending)
              )
                return r
              clearInterval(r)
            }),
            (r.prototype.execute = function(e, r) {
              if (this.closed)
                return new Error("executing a cancelled action")
              this.pending = !1
              var t = this._execute(e, r)
              if (t) return t
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(
                  this.scheduler,
                  this.id,
                  null,
                ))
            }),
            (r.prototype._execute = function(e, r) {
              var t = !1,
                o = void 0
              try {
                this.work(e)
              } catch (e) {
                ;(t = !0), (o = (!!e && e) || new Error(e))
              }
              if (t) return this.unsubscribe(), o
            }),
            (r.prototype._unsubscribe = function() {
              var e = this.id,
                r = this.scheduler,
                t = r.actions,
                o = t.indexOf(this)
              ;(this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== o && t.splice(o, 1),
                null != e &&
                  (this.id = this.recycleAsyncId(r, e, null)),
                (this.delay = null)
            }),
            r
          )
        })(
          (function(e) {
            function r(r, t) {
              return e.call(this) || this
            }
            return (
              n(r, e),
              (r.prototype.schedule = function(e, r) {
                return void 0 === r && (r = 0), this
              }),
              r
            )
          })(j),
        ),
        q = (function(e) {
          function r(r, t) {
            var o = e.call(this, r, t) || this
            return (o.scheduler = r), (o.work = t), o
          }
          return (
            n(r, e),
            (r.prototype.schedule = function(r, t) {
              return (
                void 0 === t && (t = 0),
                t > 0
                  ? e.prototype.schedule.call(this, r, t)
                  : ((this.delay = t),
                    (this.state = r),
                    this.scheduler.flush(this),
                    this)
              )
            }),
            (r.prototype.execute = function(r, t) {
              return t > 0 || this.closed
                ? e.prototype.execute.call(this, r, t)
                : this._execute(r, t)
            }),
            (r.prototype.requestAsyncId = function(r, t, o) {
              return (
                void 0 === o && (o = 0),
                (null !== o && o > 0) ||
                (null === o && this.delay > 0)
                  ? e.prototype.requestAsyncId.call(this, r, t, o)
                  : r.flush(this)
              )
            }),
            r
          )
        })(V),
        L = (function() {
          function e(r, t) {
            void 0 === t && (t = e.now),
              (this.SchedulerAction = r),
              (this.now = t)
          }
          return (
            (e.prototype.schedule = function(e, r, t) {
              return (
                void 0 === r && (r = 0),
                new this.SchedulerAction(this, e).schedule(t, r)
              )
            }),
            (e.now = Date.now
              ? Date.now
              : function() {
                  return +new Date()
                }),
            e
          )
        })(),
        G = (function(e) {
          function r(t, o) {
            void 0 === o && (o = L.now)
            var n =
              e.call(this, t, function() {
                return r.delegate && r.delegate !== n
                  ? r.delegate.now()
                  : o()
              }) || this
            return (
              (n.actions = []),
              (n.active = !1),
              (n.scheduled = void 0),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype.schedule = function(t, o, n) {
              return (
                void 0 === o && (o = 0),
                r.delegate && r.delegate !== this
                  ? r.delegate.schedule(t, o, n)
                  : e.prototype.schedule.call(this, t, o, n)
              )
            }),
            (r.prototype.flush = function(e) {
              var r = this.actions
              if (this.active) r.push(e)
              else {
                var t
                this.active = !0
                do {
                  if ((t = e.execute(e.state, e.delay))) break
                } while ((e = r.shift()))
                if (((this.active = !1), t)) {
                  for (; (e = r.shift()); ) e.unsubscribe()
                  throw t
                }
              }
            }),
            r
          )
        })(L),
        W = new ((function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return n(r, e), r
        })(G))(q),
        H = new O(function(e) {
          return e.complete()
        })
      function J(e) {
        return e
          ? (function(e) {
              return new O(function(r) {
                return e.schedule(function() {
                  return r.complete()
                })
              })
            })(e)
          : H
      }
      function K(e) {
        return e && "function" == typeof e.schedule
      }
      var z = function(e) {
        return function(r) {
          for (var t = 0, o = e.length; t < o && !r.closed; t++)
            r.next(e[t])
          r.closed || r.complete()
        }
      }
      function $(e, r) {
        return new O(
          r
            ? function(t) {
                var o = new j(),
                  n = 0
                return (
                  o.add(
                    r.schedule(function() {
                      n !== e.length
                        ? (t.next(e[n++]),
                          t.closed || o.add(this.schedule()))
                        : t.complete()
                    }),
                  ),
                  o
                )
              }
            : z(e),
        )
      }
      function Q() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        var t = e[e.length - 1]
        switch ((K(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return J(t)
          case 1:
            return t
              ? $(e, t)
              : (function(e) {
                  var r = new O(function(r) {
                    r.next(e), r.complete()
                  })
                  return (r._isScalar = !0), (r.value = e), r
                })(e[0])
          default:
            return $(e, t)
        }
      }
      function X(e, r) {
        return new O(
          r
            ? function(t) {
                return r.schedule(Z, 0, { error: e, subscriber: t })
              }
            : function(r) {
                return r.error(e)
              },
        )
      }
      function Z(e) {
        var r = e.error
        e.subscriber.error(r)
      }
      var ee = (function() {
        function e(e, r, t) {
          ;(this.kind = e),
            (this.value = r),
            (this.error = t),
            (this.hasValue = "N" === e)
        }
        return (
          (e.prototype.observe = function(e) {
            switch (this.kind) {
              case "N":
                return e.next && e.next(this.value)
              case "E":
                return e.error && e.error(this.error)
              case "C":
                return e.complete && e.complete()
            }
          }),
          (e.prototype.do = function(e, r, t) {
            switch (this.kind) {
              case "N":
                return e && e(this.value)
              case "E":
                return r && r(this.error)
              case "C":
                return t && t()
            }
          }),
          (e.prototype.accept = function(e, r, t) {
            return e && "function" == typeof e.next
              ? this.observe(e)
              : this.do(e, r, t)
          }),
          (e.prototype.toObservable = function() {
            switch (this.kind) {
              case "N":
                return Q(this.value)
              case "E":
                return X(this.error)
              case "C":
                return J()
            }
            throw new Error("unexpected notification kind value")
          }),
          (e.createNext = function(r) {
            return void 0 !== r
              ? new e("N", r)
              : e.undefinedValueNotification
          }),
          (e.createError = function(r) {
            return new e("E", void 0, r)
          }),
          (e.createComplete = function() {
            return e.completeNotification
          }),
          (e.completeNotification = new e("C")),
          (e.undefinedValueNotification = new e("N", void 0)),
          e
        )
      })()
      var re = (function(e) {
          function r(r, t, o) {
            void 0 === o && (o = 0)
            var n = e.call(this, r) || this
            return (n.scheduler = t), (n.delay = o), n
          }
          return (
            n(r, e),
            (r.dispatch = function(e) {
              var r = e.notification,
                t = e.destination
              r.observe(t), this.unsubscribe()
            }),
            (r.prototype.scheduleMessage = function(e) {
              this.add(
                this.scheduler.schedule(
                  r.dispatch,
                  this.delay,
                  new te(e, this.destination),
                ),
              )
            }),
            (r.prototype._next = function(e) {
              this.scheduleMessage(ee.createNext(e))
            }),
            (r.prototype._error = function(e) {
              this.scheduleMessage(ee.createError(e))
            }),
            (r.prototype._complete = function() {
              this.scheduleMessage(ee.createComplete())
            }),
            r
          )
        })(v),
        te = (function() {
          return function(e, r) {
            ;(this.notification = e), (this.destination = r)
          }
        })(),
        oe = (function(e) {
          function r(r, t, o) {
            void 0 === r && (r = Number.POSITIVE_INFINITY),
              void 0 === t && (t = Number.POSITIVE_INFINITY)
            var n = e.call(this) || this
            return (
              (n.scheduler = o),
              (n._events = []),
              (n._infiniteTimeWindow = !1),
              (n._bufferSize = r < 1 ? 1 : r),
              (n._windowTime = t < 1 ? 1 : t),
              t === Number.POSITIVE_INFINITY
                ? ((n._infiniteTimeWindow = !0),
                  (n.next = n.nextInfiniteTimeWindow))
                : (n.next = n.nextTimeWindow),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype.nextInfiniteTimeWindow = function(r) {
              var t = this._events
              t.push(r),
                t.length > this._bufferSize && t.shift(),
                e.prototype.next.call(this, r)
            }),
            (r.prototype.nextTimeWindow = function(r) {
              this._events.push(new ne(this._getNow(), r)),
                this._trimBufferThenGetEvents(),
                e.prototype.next.call(this, r)
            }),
            (r.prototype._subscribe = function(e) {
              var r,
                t = this._infiniteTimeWindow,
                o = t
                  ? this._events
                  : this._trimBufferThenGetEvents(),
                n = this.scheduler,
                s = o.length
              if (this.closed) throw new T()
              if (
                (this.isStopped || this.hasError
                  ? (r = j.EMPTY)
                  : (this.observers.push(e), (r = new A(this, e))),
                n && e.add((e = new re(e, n))),
                t)
              )
                for (var u = 0; u < s && !e.closed; u++) e.next(o[u])
              else
                for (u = 0; u < s && !e.closed; u++)
                  e.next(o[u].value)
              return (
                this.hasError
                  ? e.error(this.thrownError)
                  : this.isStopped && e.complete(),
                r
              )
            }),
            (r.prototype._getNow = function() {
              return (this.scheduler || W).now()
            }),
            (r.prototype._trimBufferThenGetEvents = function() {
              for (
                var e = this._getNow(),
                  r = this._bufferSize,
                  t = this._windowTime,
                  o = this._events,
                  n = o.length,
                  s = 0;
                s < n && !(e - o[s].time < t);

              )
                s++
              return (
                n > r && (s = Math.max(s, n - r)),
                s > 0 && o.splice(0, s),
                o
              )
            }),
            r
          )
        })(D),
        ne = (function() {
          return function(e, r) {
            ;(this.time = e), (this.value = r)
          }
        })(),
        se = (function(e) {
          function r() {
            var r = (null !== e && e.apply(this, arguments)) || this
            return (
              (r.value = null),
              (r.hasNext = !1),
              (r.hasCompleted = !1),
              r
            )
          }
          return (
            n(r, e),
            (r.prototype._subscribe = function(r) {
              return this.hasError
                ? (r.error(this.thrownError), j.EMPTY)
                : this.hasCompleted && this.hasNext
                  ? (r.next(this.value), r.complete(), j.EMPTY)
                  : e.prototype._subscribe.call(this, r)
            }),
            (r.prototype.next = function(e) {
              this.hasCompleted ||
                ((this.value = e), (this.hasNext = !0))
            }),
            (r.prototype.error = function(r) {
              this.hasCompleted || e.prototype.error.call(this, r)
            }),
            (r.prototype.complete = function() {
              ;(this.hasCompleted = !0),
                this.hasNext &&
                  e.prototype.next.call(this, this.value),
                e.prototype.complete.call(this)
            }),
            r
          )
        })(D),
        ue = 1,
        ie = {}
      var ce = function(e) {
          var r = ue++
          return (
            (ie[r] = e),
            Promise.resolve().then(function() {
              return (function(e) {
                var r = ie[e]
                r && r()
              })(r)
            }),
            r
          )
        },
        le = function(e) {
          delete ie[e]
        },
        de = (function(e) {
          function r(r, t) {
            var o = e.call(this, r, t) || this
            return (o.scheduler = r), (o.work = t), o
          }
          return (
            n(r, e),
            (r.prototype.requestAsyncId = function(r, t, o) {
              return (
                void 0 === o && (o = 0),
                null !== o && o > 0
                  ? e.prototype.requestAsyncId.call(this, r, t, o)
                  : (r.actions.push(this),
                    r.scheduled ||
                      (r.scheduled = ce(r.flush.bind(r, null))))
              )
            }),
            (r.prototype.recycleAsyncId = function(r, t, o) {
              if (
                (void 0 === o && (o = 0),
                (null !== o && o > 0) ||
                  (null === o && this.delay > 0))
              )
                return e.prototype.recycleAsyncId.call(this, r, t, o)
              0 === r.actions.length &&
                (le(t), (r.scheduled = void 0))
            }),
            r
          )
        })(V),
        ae = new ((function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            n(r, e),
            (r.prototype.flush = function(e) {
              ;(this.active = !0), (this.scheduled = void 0)
              var r,
                t = this.actions,
                o = -1,
                n = t.length
              e = e || t.shift()
              do {
                if ((r = e.execute(e.state, e.delay))) break
              } while (++o < n && (e = t.shift()))
              if (((this.active = !1), r)) {
                for (; ++o < n && (e = t.shift()); ) e.unsubscribe()
                throw r
              }
            }),
            r
          )
        })(G))(de),
        fe = new G(V),
        pe = (function(e) {
          function r(r, t) {
            var o = e.call(this, r, t) || this
            return (o.scheduler = r), (o.work = t), o
          }
          return (
            n(r, e),
            (r.prototype.requestAsyncId = function(r, t, o) {
              return (
                void 0 === o && (o = 0),
                null !== o && o > 0
                  ? e.prototype.requestAsyncId.call(this, r, t, o)
                  : (r.actions.push(this),
                    r.scheduled ||
                      (r.scheduled = requestAnimationFrame(
                        function() {
                          return r.flush(null)
                        },
                      )))
              )
            }),
            (r.prototype.recycleAsyncId = function(r, t, o) {
              if (
                (void 0 === o && (o = 0),
                (null !== o && o > 0) ||
                  (null === o && this.delay > 0))
              )
                return e.prototype.recycleAsyncId.call(this, r, t, o)
              0 === r.actions.length &&
                (cancelAnimationFrame(t), (r.scheduled = void 0))
            }),
            r
          )
        })(V),
        be = new ((function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            n(r, e),
            (r.prototype.flush = function(e) {
              ;(this.active = !0), (this.scheduled = void 0)
              var r,
                t = this.actions,
                o = -1,
                n = t.length
              e = e || t.shift()
              do {
                if ((r = e.execute(e.state, e.delay))) break
              } while (++o < n && (e = t.shift()))
              if (((this.active = !1), r)) {
                for (; ++o < n && (e = t.shift()); ) e.unsubscribe()
                throw r
              }
            }),
            r
          )
        })(G))(pe),
        ye = (function(e) {
          function r(r, t) {
            void 0 === r && (r = me),
              void 0 === t && (t = Number.POSITIVE_INFINITY)
            var o =
              e.call(this, r, function() {
                return o.frame
              }) || this
            return (o.maxFrames = t), (o.frame = 0), (o.index = -1), o
          }
          return (
            n(r, e),
            (r.prototype.flush = function() {
              for (
                var e, r, t = this.actions, o = this.maxFrames;
                (r = t.shift()) &&
                (this.frame = r.delay) <= o &&
                !(e = r.execute(r.state, r.delay));

              );
              if (e) {
                for (; (r = t.shift()); ) r.unsubscribe()
                throw e
              }
            }),
            (r.frameTimeFactor = 10),
            r
          )
        })(G),
        me = (function(e) {
          function r(r, t, o) {
            void 0 === o && (o = r.index += 1)
            var n = e.call(this, r, t) || this
            return (
              (n.scheduler = r),
              (n.work = t),
              (n.index = o),
              (n.active = !0),
              (n.index = r.index = o),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype.schedule = function(t, o) {
              if ((void 0 === o && (o = 0), !this.id))
                return e.prototype.schedule.call(this, t, o)
              this.active = !1
              var n = new r(this.scheduler, this.work)
              return this.add(n), n.schedule(t, o)
            }),
            (r.prototype.requestAsyncId = function(e, t, o) {
              void 0 === o && (o = 0), (this.delay = e.frame + o)
              var n = e.actions
              return n.push(this), n.sort(r.sortActions), !0
            }),
            (r.prototype.recycleAsyncId = function(e, r, t) {
              void 0 === t && (t = 0)
            }),
            (r.prototype._execute = function(r, t) {
              if (!0 === this.active)
                return e.prototype._execute.call(this, r, t)
            }),
            (r.sortActions = function(e, r) {
              return e.delay === r.delay
                ? e.index === r.index ? 0 : e.index > r.index ? 1 : -1
                : e.delay > r.delay ? 1 : -1
            }),
            r
          )
        })(V)
      function je(e) {
        return e
      }
      function he(e) {
        return (
          !!e &&
          (e instanceof O ||
            ("function" == typeof e.lift &&
              "function" == typeof e.subscribe))
        )
      }
      var _e = (function(e) {
          function r() {
            var t = e.call(this, "argument out of range") || this
            return (
              (t.name = "ArgumentOutOfRangeError"),
              Object.setPrototypeOf(t, r.prototype),
              t
            )
          }
          return n(r, e), r
        })(Error),
        ve = (function(e) {
          function r() {
            var t = e.call(this, "no elements in sequence") || this
            return (
              (t.name = "EmptyError"),
              Object.setPrototypeOf(t, r.prototype),
              t
            )
          }
          return n(r, e), r
        })(Error),
        ge = (function(e) {
          function r() {
            var t = e.call(this, "Timeout has occurred") || this
            return (
              (t.name = "TimeoutError"),
              Object.setPrototypeOf(t, r.prototype),
              t
            )
          }
          return n(r, e), r
        })(Error)
      function xe(e, r) {
        return function(t) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?",
            )
          return t.lift(new we(e, r))
        }
      }
      var we = (function() {
          function e(e, r) {
            ;(this.project = e), (this.thisArg = r)
          }
          return (
            (e.prototype.call = function(e, r) {
              return r.subscribe(
                new Se(e, this.project, this.thisArg),
              )
            }),
            e
          )
        })(),
        Se = (function(e) {
          function r(r, t, o) {
            var n = e.call(this, r) || this
            return (
              (n.project = t), (n.count = 0), (n.thisArg = o || n), n
            )
          }
          return (
            n(r, e),
            (r.prototype._next = function(e) {
              var r
              try {
                r = this.project.call(this.thisArg, e, this.count++)
              } catch (e) {
                return void this.destination.error(e)
              }
              this.destination.next(r)
            }),
            r
          )
        })(v)
      function Ee(e, r, t) {
        if (r) {
          if (!K(r))
            return function() {
              for (var o = [], n = 0; n < arguments.length; n++)
                o[n] = arguments[n]
              return Ee(e, t)
                .apply(void 0, o)
                .pipe(
                  xe(function(e) {
                    return d(e) ? r.apply(void 0, e) : r(e)
                  }),
                )
            }
          t = r
        }
        return function() {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o]
          var n,
            s = this,
            u = {
              context: s,
              subject: n,
              callbackFunc: e,
              scheduler: t,
            }
          return new O(function(o) {
            if (t) {
              var i = { args: r, subscriber: o, params: u }
              return t.schedule(Oe, 0, i)
            }
            if (!n) {
              n = new se()
              try {
                e.apply(
                  s,
                  r.concat([
                    function() {
                      for (
                        var e = [], r = 0;
                        r < arguments.length;
                        r++
                      )
                        e[r] = arguments[r]
                      n.next(e.length <= 1 ? e[0] : e), n.complete()
                    },
                  ]),
                )
              } catch (e) {
                n.error(e)
              }
            }
            return n.subscribe(o)
          })
        }
      }
      function Oe(e) {
        var r = this,
          t = e.args,
          o = e.subscriber,
          n = e.params,
          s = n.callbackFunc,
          u = n.context,
          i = n.scheduler,
          c = n.subject
        if (!c) {
          c = n.subject = new se()
          try {
            s.apply(
              u,
              t.concat([
                function() {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                  var o = e.length <= 1 ? e[0] : e
                  r.add(i.schedule(Pe, 0, { value: o, subject: c }))
                },
              ]),
            )
          } catch (e) {
            c.error(e)
          }
        }
        this.add(c.subscribe(o))
      }
      function Pe(e) {
        var r = e.value,
          t = e.subject
        t.next(r), t.complete()
      }
      function Te(e, r, t) {
        if (r) {
          if (!K(r))
            return function() {
              for (var o = [], n = 0; n < arguments.length; n++)
                o[n] = arguments[n]
              return Te(e, t)
                .apply(void 0, o)
                .pipe(
                  xe(function(e) {
                    return d(e) ? r.apply(void 0, e) : r(e)
                  }),
                )
            }
          t = r
        }
        return function() {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o]
          var n = {
            subject: void 0,
            args: r,
            callbackFunc: e,
            scheduler: t,
            context: this,
          }
          return new O(function(o) {
            var s = n.context,
              u = n.subject
            if (t)
              return t.schedule(Ae, 0, {
                params: n,
                subscriber: o,
                context: s,
              })
            if (!u) {
              u = n.subject = new se()
              try {
                e.apply(
                  s,
                  r.concat([
                    function() {
                      for (
                        var e = [], r = 0;
                        r < arguments.length;
                        r++
                      )
                        e[r] = arguments[r]
                      var t = e.shift()
                      t
                        ? u.error(t)
                        : (u.next(e.length <= 1 ? e[0] : e),
                          u.complete())
                    },
                  ]),
                )
              } catch (e) {
                u.error(e)
              }
            }
            return u.subscribe(o)
          })
        }
      }
      function Ae(e) {
        var r = this,
          t = e.params,
          o = e.subscriber,
          n = e.context,
          s = t.callbackFunc,
          u = t.args,
          i = t.scheduler,
          c = t.subject
        if (!c) {
          c = t.subject = new se()
          try {
            s.apply(
              n,
              u.concat([
                function() {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
                  var o = e.shift()
                  if (o)
                    r.add(i.schedule(De, 0, { err: o, subject: c }))
                  else {
                    var n = e.length <= 1 ? e[0] : e
                    r.add(i.schedule(Ie, 0, { value: n, subject: c }))
                  }
                },
              ]),
            )
          } catch (e) {
            this.add(i.schedule(De, 0, { err: e, subject: c }))
          }
        }
        this.add(c.subscribe(o))
      }
      function Ie(e) {
        var r = e.value,
          t = e.subject
        t.next(r), t.complete()
      }
      function De(e) {
        var r = e.err
        e.subject.error(r)
      }
      var ke = (function(e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            n(r, e),
            (r.prototype.notifyNext = function(e, r, t, o, n) {
              this.destination.next(r)
            }),
            (r.prototype.notifyError = function(e, r) {
              this.destination.error(e)
            }),
            (r.prototype.notifyComplete = function(e) {
              this.destination.complete()
            }),
            r
          )
        })(v),
        Me = (function(e) {
          function r(r, t, o) {
            var n = e.call(this) || this
            return (
              (n.parent = r),
              (n.outerValue = t),
              (n.outerIndex = o),
              (n.index = 0),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype._next = function(e) {
              this.parent.notifyNext(
                this.outerValue,
                e,
                this.outerIndex,
                this.index++,
                this,
              )
            }),
            (r.prototype._error = function(e) {
              this.parent.notifyError(e, this), this.unsubscribe()
            }),
            (r.prototype._complete = function() {
              this.parent.notifyComplete(this), this.unsubscribe()
            }),
            r
          )
        })(v),
        Ne = function(e) {
          return function(r) {
            return (
              e
                .then(
                  function(e) {
                    r.closed || (r.next(e), r.complete())
                  },
                  function(e) {
                    return r.error(e)
                  },
                )
                .then(null, c),
              r
            )
          }
        }
      var Ue = (function() {
          return "function" == typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : "@@iterator"
        })(),
        Re = function(e) {
          return function(r) {
            for (var t = e[Ue](); ; ) {
              var o = t.next()
              if (o.done) {
                r.complete()
                break
              }
              if ((r.next(o.value), r.closed)) break
            }
            return (
              "function" == typeof t.return &&
                r.add(function() {
                  t.return && t.return()
                }),
              r
            )
          }
        },
        Ce = function(e) {
          return function(r) {
            var t = e[x]()
            if ("function" != typeof t.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable",
              )
            return t.subscribe(r)
          }
        },
        Fe = function(e) {
          return (
            e && "number" == typeof e.length && "function" != typeof e
          )
        }
      function Ye(e) {
        return (
          e &&
          "function" != typeof e.subscribe &&
          "function" == typeof e.then
        )
      }
      var Be = function(e) {
        if (e instanceof O)
          return function(r) {
            return e._isScalar
              ? (r.next(e.value), void r.complete())
              : e.subscribe(r)
          }
        if (e && "function" == typeof e[x]) return Ce(e)
        if (Fe(e)) return z(e)
        if (Ye(e)) return Ne(e)
        if (e && "function" == typeof e[Ue]) return Re(e)
        var r = a(e) ? "an invalid object" : "'" + e + "'"
        throw new TypeError(
          "You provided " +
            r +
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.",
        )
      }
      function Ve(e, r, t, o) {
        var n = new Me(e, t, o)
        return Be(r)(n)
      }
      var qe = {}
      function Le() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        var t = null,
          o = null
        return (
          K(e[e.length - 1]) && (o = e.pop()),
          "function" == typeof e[e.length - 1] && (t = e.pop()),
          1 === e.length && d(e[0]) && (e = e[0]),
          $(e, o).lift(new Ge(t))
        )
      }
      var Ge = (function() {
          function e(e) {
            this.resultSelector = e
          }
          return (
            (e.prototype.call = function(e, r) {
              return r.subscribe(new We(e, this.resultSelector))
            }),
            e
          )
        })(),
        We = (function(e) {
          function r(r, t) {
            var o = e.call(this, r) || this
            return (
              (o.resultSelector = t),
              (o.active = 0),
              (o.values = []),
              (o.observables = []),
              o
            )
          }
          return (
            n(r, e),
            (r.prototype._next = function(e) {
              this.values.push(qe), this.observables.push(e)
            }),
            (r.prototype._complete = function() {
              var e = this.observables,
                r = e.length
              if (0 === r) this.destination.complete()
              else {
                ;(this.active = r), (this.toRespond = r)
                for (var t = 0; t < r; t++) {
                  var o = e[t]
                  this.add(Ve(this, o, o, t))
                }
              }
            }),
            (r.prototype.notifyComplete = function(e) {
              0 == (this.active -= 1) && this.destination.complete()
            }),
            (r.prototype.notifyNext = function(e, r, t, o, n) {
              var s = this.values,
                u = s[t],
                i = this.toRespond
                  ? u === qe ? --this.toRespond : this.toRespond
                  : 0
              ;(s[t] = r),
                0 === i &&
                  (this.resultSelector
                    ? this._tryResultSelector(s)
                    : this.destination.next(s.slice()))
            }),
            (r.prototype._tryResultSelector = function(e) {
              var r
              try {
                r = this.resultSelector.apply(this, e)
              } catch (e) {
                return void this.destination.error(e)
              }
              this.destination.next(r)
            }),
            r
          )
        })(ke)
      function He(e, r) {
        if (!r) return e instanceof O ? e : new O(Be(e))
        if (null != e) {
          if (
            (function(e) {
              return e && "function" == typeof e[x]
            })(e)
          )
            return (function(e, r) {
              return new O(
                r
                  ? function(t) {
                      var o = new j()
                      return (
                        o.add(
                          r.schedule(function() {
                            var n = e[x]()
                            o.add(
                              n.subscribe({
                                next: function(e) {
                                  o.add(
                                    r.schedule(function() {
                                      return t.next(e)
                                    }),
                                  )
                                },
                                error: function(e) {
                                  o.add(
                                    r.schedule(function() {
                                      return t.error(e)
                                    }),
                                  )
                                },
                                complete: function() {
                                  o.add(
                                    r.schedule(function() {
                                      return t.complete()
                                    }),
                                  )
                                },
                              }),
                            )
                          }),
                        ),
                        o
                      )
                    }
                  : Ce(e),
              )
            })(e, r)
          if (Ye(e))
            return (function(e, r) {
              return new O(
                r
                  ? function(t) {
                      var o = new j()
                      return (
                        o.add(
                          r.schedule(function() {
                            return e.then(
                              function(e) {
                                o.add(
                                  r.schedule(function() {
                                    t.next(e),
                                      o.add(
                                        r.schedule(function() {
                                          return t.complete()
                                        }),
                                      )
                                  }),
                                )
                              },
                              function(e) {
                                o.add(
                                  r.schedule(function() {
                                    return t.error(e)
                                  }),
                                )
                              },
                            )
                          }),
                        ),
                        o
                      )
                    }
                  : Ne(e),
              )
            })(e, r)
          if (Fe(e)) return $(e, r)
          if (
            (function(e) {
              return e && "function" == typeof e[Ue]
            })(e) ||
            "string" == typeof e
          )
            return (function(e, r) {
              if (!e) throw new Error("Iterable cannot be null")
              return new O(
                r
                  ? function(t) {
                      var o,
                        n = new j()
                      return (
                        n.add(function() {
                          o &&
                            "function" == typeof o.return &&
                            o.return()
                        }),
                        n.add(
                          r.schedule(function() {
                            ;(o = e[Ue]()),
                              n.add(
                                r.schedule(function() {
                                  if (!t.closed) {
                                    var e, r
                                    try {
                                      var n = o.next()
                                      ;(e = n.value), (r = n.done)
                                    } catch (e) {
                                      return void t.error(e)
                                    }
                                    r
                                      ? t.complete()
                                      : (t.next(e), this.schedule())
                                  }
                                }),
                              )
                          }),
                        ),
                        n
                      )
                    }
                  : Re(e),
              )
            })(e, r)
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + " is not observable",
        )
      }
      var Je = (function() {
          function e(e, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY),
              (this.project = e),
              (this.concurrent = r)
          }
          return (
            (e.prototype.call = function(e, r) {
              return r.subscribe(
                new Ke(e, this.project, this.concurrent),
              )
            }),
            e
          )
        })(),
        Ke = (function(e) {
          function r(r, t, o) {
            void 0 === o && (o = Number.POSITIVE_INFINITY)
            var n = e.call(this, r) || this
            return (
              (n.project = t),
              (n.concurrent = o),
              (n.hasCompleted = !1),
              (n.buffer = []),
              (n.active = 0),
              (n.index = 0),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype._next = function(e) {
              this.active < this.concurrent
                ? this._tryNext(e)
                : this.buffer.push(e)
            }),
            (r.prototype._tryNext = function(e) {
              var r,
                t = this.index++
              try {
                r = this.project(e, t)
              } catch (e) {
                return void this.destination.error(e)
              }
              this.active++, this._innerSub(r, e, t)
            }),
            (r.prototype._innerSub = function(e, r, t) {
              this.add(Ve(this, e, r, t))
            }),
            (r.prototype._complete = function() {
              ;(this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete()
            }),
            (r.prototype.notifyNext = function(e, r, t, o, n) {
              this.destination.next(r)
            }),
            (r.prototype.notifyComplete = function(e) {
              var r = this.buffer
              this.remove(e),
                this.active--,
                r.length > 0
                  ? this._next(r.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete()
            }),
            r
          )
        })(ke)
      function ze(e) {
        return (
          void 0 === e && (e = Number.POSITIVE_INFINITY),
          (function e(r, t, o) {
            return (
              void 0 === o && (o = Number.POSITIVE_INFINITY),
              "function" == typeof t
                ? function(n) {
                    return n.pipe(
                      e(function(e, o) {
                        return He(r(e, o)).pipe(
                          xe(function(r, n) {
                            return t(e, r, o, n)
                          }),
                        )
                      }, o),
                    )
                  }
                : ("number" == typeof t && (o = t),
                  function(e) {
                    return e.lift(new Je(r, o))
                  })
            )
          })(je, e)
        )
      }
      function $e() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        return 1 === e.length || (2 === e.length && K(e[1]))
          ? He(e[0])
          : ze(1)(Q.apply(void 0, e))
      }
      function Qe(e) {
        return new O(function(r) {
          var t
          try {
            t = e()
          } catch (e) {
            return void r.error(e)
          }
          return (t ? He(t) : J()).subscribe(r)
        })
      }
      function Xe() {
        for (var e, r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t]
        return (
          "function" == typeof r[r.length - 1] && (e = r.pop()),
          1 === r.length && d(r[0]) && (r = r[0]),
          0 === r.length
            ? H
            : e
              ? Xe(r).pipe(
                  xe(function(r) {
                    return e.apply(void 0, r)
                  }),
                )
              : new O(function(e) {
                  return new Ze(e, r)
                })
        )
      }
      var Ze = (function(e) {
        function r(r, t) {
          var o = e.call(this, r) || this
          ;(o.sources = t), (o.completed = 0), (o.haveValues = 0)
          var n = t.length
          o.values = new Array(n)
          for (var s = 0; s < n; s++) {
            var u = Ve(o, t[s], null, s)
            u && o.add(u)
          }
          return o
        }
        return (
          n(r, e),
          (r.prototype.notifyNext = function(e, r, t, o, n) {
            ;(this.values[t] = r),
              n._hasValue || ((n._hasValue = !0), this.haveValues++)
          }),
          (r.prototype.notifyComplete = function(e) {
            var r = this.destination,
              t = this.haveValues,
              o = this.values,
              n = o.length
            e._hasValue
              ? (this.completed++,
                this.completed === n &&
                  (t === n && r.next(o), r.complete()))
              : r.complete()
          }),
          r
        )
      })(ke)
      Object.prototype.toString
      function er(e, r, t, o) {
        return (
          s(t) && ((o = t), (t = void 0)),
          o
            ? er(e, r, t).pipe(
                xe(function(e) {
                  return d(e) ? o.apply(void 0, e) : o(e)
                }),
              )
            : new O(function(o) {
                !(function e(r, t, o, n, s) {
                  var u
                  if (
                    (function(e) {
                      return (
                        e &&
                        "function" == typeof e.addEventListener &&
                        "function" == typeof e.removeEventListener
                      )
                    })(r)
                  ) {
                    var i = r
                    r.addEventListener(t, o, s),
                      (u = function() {
                        return i.removeEventListener(t, o, s)
                      })
                  } else if (
                    (function(e) {
                      return (
                        e &&
                        "function" == typeof e.on &&
                        "function" == typeof e.off
                      )
                    })(r)
                  ) {
                    var c = r
                    r.on(t, o),
                      (u = function() {
                        return c.off(t, o)
                      })
                  } else if (
                    (function(e) {
                      return (
                        e &&
                        "function" == typeof e.addListener &&
                        "function" == typeof e.removeListener
                      )
                    })(r)
                  ) {
                    var l = r
                    r.addListener(t, o),
                      (u = function() {
                        return l.removeListener(t, o)
                      })
                  } else {
                    if (!r || !r.length)
                      throw new TypeError("Invalid event target")
                    for (var d = 0, a = r.length; d < a; d++)
                      e(r[d], t, o, n, s)
                  }
                  n.add(u)
                })(
                  e,
                  r,
                  function(e) {
                    arguments.length > 1
                      ? o.next(Array.prototype.slice.call(arguments))
                      : o.next(e)
                  },
                  o,
                  t,
                )
              })
        )
      }
      function rr(e, r, t) {
        return t
          ? rr(e, r).pipe(
              xe(function(e) {
                return d(e) ? t.apply(void 0, e) : t(e)
              }),
            )
          : new O(function(t) {
              var o,
                n = function() {
                  for (var e = [], r = 0; r < arguments.length; r++)
                    e[r] = arguments[r]
                  return t.next(1 === e.length ? e[0] : e)
                }
              try {
                o = e(n)
              } catch (e) {
                return void t.error(e)
              }
              if (s(r))
                return function() {
                  return r(n, o)
                }
            })
      }
      function tr(e, r, t, o, n) {
        var s, u
        if (1 == arguments.length) {
          var i = e
          ;(u = i.initialState),
            (r = i.condition),
            (t = i.iterate),
            (s = i.resultSelector || je),
            (n = i.scheduler)
        } else
          void 0 === o || K(o)
            ? ((u = e), (s = je), (n = o))
            : ((u = e), (s = o))
        return new O(function(e) {
          var o = u
          if (n)
            return n.schedule(or, 0, {
              subscriber: e,
              iterate: t,
              condition: r,
              resultSelector: s,
              state: o,
            })
          for (;;) {
            if (r) {
              var i = void 0
              try {
                i = r(o)
              } catch (r) {
                return void e.error(r)
              }
              if (!i) {
                e.complete()
                break
              }
            }
            var c = void 0
            try {
              c = s(o)
            } catch (r) {
              return void e.error(r)
            }
            if ((e.next(c), e.closed)) break
            try {
              o = t(o)
            } catch (r) {
              return void e.error(r)
            }
          }
        })
      }
      function or(e) {
        var r = e.subscriber,
          t = e.condition
        if (!r.closed) {
          if (e.needIterate)
            try {
              e.state = e.iterate(e.state)
            } catch (e) {
              return void r.error(e)
            }
          else e.needIterate = !0
          if (t) {
            var o = void 0
            try {
              o = t(e.state)
            } catch (e) {
              return void r.error(e)
            }
            if (!o) return void r.complete()
            if (r.closed) return
          }
          var n
          try {
            n = e.resultSelector(e.state)
          } catch (e) {
            return void r.error(e)
          }
          if (!r.closed && (r.next(n), !r.closed))
            return this.schedule(e)
        }
      }
      function nr(e, r, t) {
        return (
          void 0 === r && (r = H),
          void 0 === t && (t = H),
          Qe(function() {
            return e() ? r : t
          })
        )
      }
      function sr(e) {
        return !d(e) && e - parseFloat(e) + 1 >= 0
      }
      function ur(e, r) {
        return (
          void 0 === e && (e = 0),
          void 0 === r && (r = fe),
          (!sr(e) || e < 0) && (e = 0),
          (r && "function" == typeof r.schedule) || (r = fe),
          new O(function(t) {
            return (
              t.add(
                r.schedule(ir, e, {
                  subscriber: t,
                  counter: 0,
                  period: e,
                }),
              ),
              t
            )
          })
        )
      }
      function ir(e) {
        var r = e.subscriber,
          t = e.counter,
          o = e.period
        r.next(t),
          this.schedule(
            { subscriber: r, counter: t + 1, period: o },
            o,
          )
      }
      function cr() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        var t = Number.POSITIVE_INFINITY,
          o = null,
          n = e[e.length - 1]
        return (
          K(n)
            ? ((o = e.pop()),
              e.length > 1 &&
                "number" == typeof e[e.length - 1] &&
                (t = e.pop()))
            : "number" == typeof n && (t = e.pop()),
          null === o && 1 === e.length && e[0] instanceof O
            ? e[0]
            : ze(t)($(e, o))
        )
      }
      var lr = new O(w)
      function dr() {
        return lr
      }
      function ar() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        if (0 === e.length) return H
        var t = e[0],
          o = e.slice(1)
        return 1 === e.length && d(t)
          ? ar.apply(void 0, t)
          : new O(function(e) {
              var r = function() {
                return e.add(ar.apply(void 0, o).subscribe(e))
              }
              return He(t).subscribe({
                next: function(r) {
                  e.next(r)
                },
                error: r,
                complete: r,
              })
            })
      }
      function fr(e, r) {
        return new O(
          r
            ? function(t) {
                var o = Object.keys(e),
                  n = new j()
                return (
                  n.add(
                    r.schedule(pr, 0, {
                      keys: o,
                      index: 0,
                      subscriber: t,
                      subscription: n,
                      obj: e,
                    }),
                  ),
                  n
                )
              }
            : function(r) {
                for (
                  var t = Object.keys(e), o = 0;
                  o < t.length && !r.closed;
                  o++
                ) {
                  var n = t[o]
                  e.hasOwnProperty(n) && r.next([n, e[n]])
                }
                r.complete()
              },
        )
      }
      function pr(e) {
        var r = e.keys,
          t = e.index,
          o = e.subscriber,
          n = e.subscription,
          s = e.obj
        if (!o.closed)
          if (t < r.length) {
            var u = r[t]
            o.next([u, s[u]]),
              n.add(
                this.schedule({
                  keys: r,
                  index: t + 1,
                  subscriber: o,
                  subscription: n,
                  obj: s,
                }),
              )
          } else o.complete()
      }
      function br() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        if (1 === e.length) {
          if (!d(e[0])) return e[0]
          e = e[0]
        }
        return $(e, void 0).lift(new yr())
      }
      var yr = (function() {
          function e() {}
          return (
            (e.prototype.call = function(e, r) {
              return r.subscribe(new mr(e))
            }),
            e
          )
        })(),
        mr = (function(e) {
          function r(r) {
            var t = e.call(this, r) || this
            return (
              (t.hasFirst = !1),
              (t.observables = []),
              (t.subscriptions = []),
              t
            )
          }
          return (
            n(r, e),
            (r.prototype._next = function(e) {
              this.observables.push(e)
            }),
            (r.prototype._complete = function() {
              var e = this.observables,
                r = e.length
              if (0 === r) this.destination.complete()
              else {
                for (var t = 0; t < r && !this.hasFirst; t++) {
                  var o = e[t],
                    n = Ve(this, o, o, t)
                  this.subscriptions && this.subscriptions.push(n),
                    this.add(n)
                }
                this.observables = null
              }
            }),
            (r.prototype.notifyNext = function(e, r, t, o, n) {
              if (!this.hasFirst) {
                this.hasFirst = !0
                for (var s = 0; s < this.subscriptions.length; s++)
                  if (s !== t) {
                    var u = this.subscriptions[s]
                    u.unsubscribe(), this.remove(u)
                  }
                this.subscriptions = null
              }
              this.destination.next(r)
            }),
            r
          )
        })(ke)
      function jr(e, r, t) {
        return (
          void 0 === e && (e = 0),
          void 0 === r && (r = 0),
          new O(function(o) {
            var n = 0,
              s = e
            if (t)
              return t.schedule(hr, 0, {
                index: n,
                count: r,
                start: e,
                subscriber: o,
              })
            for (;;) {
              if (n++ >= r) {
                o.complete()
                break
              }
              if ((o.next(s++), o.closed)) break
            }
          })
        )
      }
      function hr(e) {
        var r = e.start,
          t = e.index,
          o = e.count,
          n = e.subscriber
        t >= o
          ? n.complete()
          : (n.next(r),
            n.closed ||
              ((e.index = t + 1),
              (e.start = r + 1),
              this.schedule(e)))
      }
      function _r(e, r, t) {
        void 0 === e && (e = 0)
        var o = -1
        return (
          sr(r)
            ? (o = Number(r) < 1 ? 1 : Number(r))
            : K(r) && (t = r),
          K(t) || (t = fe),
          new O(function(r) {
            var n = sr(e) ? e : +e - t.now()
            return t.schedule(vr, n, {
              index: 0,
              period: o,
              subscriber: r,
            })
          })
        )
      }
      function vr(e) {
        var r = e.index,
          t = e.period,
          o = e.subscriber
        if ((o.next(r), !o.closed)) {
          if (-1 === t) return o.complete()
          ;(e.index = r + 1), this.schedule(e, t)
        }
      }
      function gr(e, r) {
        return new O(function(t) {
          var o, n
          try {
            o = e()
          } catch (e) {
            return void t.error(e)
          }
          try {
            n = r(o)
          } catch (e) {
            return void t.error(e)
          }
          var s = (n ? He(n) : H).subscribe(t)
          return function() {
            s.unsubscribe(), o && o.unsubscribe()
          }
        })
      }
      function xr() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r]
        var t = e[e.length - 1]
        return (
          "function" == typeof t && e.pop(),
          $(e, void 0).lift(new wr(t))
        )
      }
      var wr = (function() {
          function e(e) {
            this.resultSelector = e
          }
          return (
            (e.prototype.call = function(e, r) {
              return r.subscribe(new Sr(e, this.resultSelector))
            }),
            e
          )
        })(),
        Sr = (function(e) {
          function r(r, t, o) {
            void 0 === o && (o = Object.create(null))
            var n = e.call(this, r) || this
            return (
              (n.iterators = []),
              (n.active = 0),
              (n.resultSelector = "function" == typeof t ? t : null),
              (n.values = o),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype._next = function(e) {
              var r = this.iterators
              d(e)
                ? r.push(new Or(e))
                : "function" == typeof e[Ue]
                  ? r.push(new Er(e[Ue]()))
                  : r.push(new Pr(this.destination, this, e))
            }),
            (r.prototype._complete = function() {
              var e = this.iterators,
                r = e.length
              if (0 !== r) {
                this.active = r
                for (var t = 0; t < r; t++) {
                  var o = e[t]
                  o.stillUnsubscribed
                    ? this.add(o.subscribe(o, t))
                    : this.active--
                }
              } else this.destination.complete()
            }),
            (r.prototype.notifyInactive = function() {
              this.active--,
                0 === this.active && this.destination.complete()
            }),
            (r.prototype.checkIterators = function() {
              for (
                var e = this.iterators,
                  r = e.length,
                  t = this.destination,
                  o = 0;
                o < r;
                o++
              ) {
                if (
                  "function" == typeof (u = e[o]).hasValue &&
                  !u.hasValue()
                )
                  return
              }
              var n = !1,
                s = []
              for (o = 0; o < r; o++) {
                var u,
                  i = (u = e[o]).next()
                if ((u.hasCompleted() && (n = !0), i.done))
                  return void t.complete()
                s.push(i.value)
              }
              this.resultSelector
                ? this._tryresultSelector(s)
                : t.next(s),
                n && t.complete()
            }),
            (r.prototype._tryresultSelector = function(e) {
              var r
              try {
                r = this.resultSelector.apply(this, e)
              } catch (e) {
                return void this.destination.error(e)
              }
              this.destination.next(r)
            }),
            r
          )
        })(v),
        Er = (function() {
          function e(e) {
            ;(this.iterator = e), (this.nextResult = e.next())
          }
          return (
            (e.prototype.hasValue = function() {
              return !0
            }),
            (e.prototype.next = function() {
              var e = this.nextResult
              return (this.nextResult = this.iterator.next()), e
            }),
            (e.prototype.hasCompleted = function() {
              var e = this.nextResult
              return e && e.done
            }),
            e
          )
        })(),
        Or = (function() {
          function e(e) {
            ;(this.array = e),
              (this.index = 0),
              (this.length = 0),
              (this.length = e.length)
          }
          return (
            (e.prototype[Ue] = function() {
              return this
            }),
            (e.prototype.next = function(e) {
              var r = this.index++,
                t = this.array
              return r < this.length
                ? { value: t[r], done: !1 }
                : { value: null, done: !0 }
            }),
            (e.prototype.hasValue = function() {
              return this.array.length > this.index
            }),
            (e.prototype.hasCompleted = function() {
              return this.array.length === this.index
            }),
            e
          )
        })(),
        Pr = (function(e) {
          function r(r, t, o) {
            var n = e.call(this, r) || this
            return (
              (n.parent = t),
              (n.observable = o),
              (n.stillUnsubscribed = !0),
              (n.buffer = []),
              (n.isComplete = !1),
              n
            )
          }
          return (
            n(r, e),
            (r.prototype[Ue] = function() {
              return this
            }),
            (r.prototype.next = function() {
              var e = this.buffer
              return 0 === e.length && this.isComplete
                ? { value: null, done: !0 }
                : { value: e.shift(), done: !1 }
            }),
            (r.prototype.hasValue = function() {
              return this.buffer.length > 0
            }),
            (r.prototype.hasCompleted = function() {
              return 0 === this.buffer.length && this.isComplete
            }),
            (r.prototype.notifyComplete = function() {
              this.buffer.length > 0
                ? ((this.isComplete = !0),
                  this.parent.notifyInactive())
                : this.destination.complete()
            }),
            (r.prototype.notifyNext = function(e, r, t, o, n) {
              this.buffer.push(r), this.parent.checkIterators()
            }),
            (r.prototype.subscribe = function(e, r) {
              return Ve(this, this.observable, this, r)
            }),
            r
          )
        })(ke)
      t.d(r, "Observable", function() {
        return O
      }),
        t.d(r, "ConnectableObservable", function() {
          return U
        }),
        t.d(r, "GroupedObservable", function() {
          return F
        }),
        t.d(r, "observable", function() {
          return x
        }),
        t.d(r, "Subject", function() {
          return D
        }),
        t.d(r, "BehaviorSubject", function() {
          return B
        }),
        t.d(r, "ReplaySubject", function() {
          return oe
        }),
        t.d(r, "AsyncSubject", function() {
          return se
        }),
        t.d(r, "asapScheduler", function() {
          return ae
        }),
        t.d(r, "asyncScheduler", function() {
          return fe
        }),
        t.d(r, "queueScheduler", function() {
          return W
        }),
        t.d(r, "animationFrameScheduler", function() {
          return be
        }),
        t.d(r, "VirtualTimeScheduler", function() {
          return ye
        }),
        t.d(r, "VirtualAction", function() {
          return me
        }),
        t.d(r, "Scheduler", function() {
          return L
        }),
        t.d(r, "Subscription", function() {
          return j
        }),
        t.d(r, "Subscriber", function() {
          return v
        }),
        t.d(r, "Notification", function() {
          return ee
        }),
        t.d(r, "pipe", function() {
          return S
        }),
        t.d(r, "noop", function() {
          return w
        }),
        t.d(r, "identity", function() {
          return je
        }),
        t.d(r, "isObservable", function() {
          return he
        }),
        t.d(r, "ArgumentOutOfRangeError", function() {
          return _e
        }),
        t.d(r, "EmptyError", function() {
          return ve
        }),
        t.d(r, "ObjectUnsubscribedError", function() {
          return T
        }),
        t.d(r, "UnsubscriptionError", function() {
          return m
        }),
        t.d(r, "TimeoutError", function() {
          return ge
        }),
        t.d(r, "bindCallback", function() {
          return Ee
        }),
        t.d(r, "bindNodeCallback", function() {
          return Te
        }),
        t.d(r, "combineLatest", function() {
          return Le
        }),
        t.d(r, "concat", function() {
          return $e
        }),
        t.d(r, "defer", function() {
          return Qe
        }),
        t.d(r, "empty", function() {
          return J
        }),
        t.d(r, "forkJoin", function() {
          return Xe
        }),
        t.d(r, "from", function() {
          return He
        }),
        t.d(r, "fromEvent", function() {
          return er
        }),
        t.d(r, "fromEventPattern", function() {
          return rr
        }),
        t.d(r, "generate", function() {
          return tr
        }),
        t.d(r, "iif", function() {
          return nr
        }),
        t.d(r, "interval", function() {
          return ur
        }),
        t.d(r, "merge", function() {
          return cr
        }),
        t.d(r, "never", function() {
          return dr
        }),
        t.d(r, "of", function() {
          return Q
        }),
        t.d(r, "onErrorResumeNext", function() {
          return ar
        }),
        t.d(r, "pairs", function() {
          return fr
        }),
        t.d(r, "race", function() {
          return br
        }),
        t.d(r, "range", function() {
          return jr
        }),
        t.d(r, "throwError", function() {
          return X
        }),
        t.d(r, "timer", function() {
          return _r
        }),
        t.d(r, "using", function() {
          return gr
        }),
        t.d(r, "zip", function() {
          return xr
        }),
        t.d(r, "EMPTY", function() {
          return H
        }),
        t.d(r, "NEVER", function() {
          return lr
        }),
        t.d(r, "config", function() {
          return i
        })
    },
    "./src/index.js": function(e, r, t) {
      "use strict"
      var o = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        )
      Object.defineProperty(r, "__esModule", { value: !0 })
      var s = { Protocol: !0, epics: !0 }
      Object.defineProperty(r, "epics", {
        enumerable: !0,
        get: function() {
          return c.default
        },
      }),
        (r.Protocol = void 0)
      var u = n(t("./src/protocol/index.js"))
      r.Protocol = u
      var i = t("./src/state/modules/index.js")
      Object.keys(i).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(s, e) ||
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: function() {
                return i[e]
              },
            }))
      })
      var c = o(t("./src/state/epics/index.js")),
        l = t("./src/state/selectors/index.js")
      Object.keys(l).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(s, e) ||
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: function() {
                return l[e]
              },
            }))
      })
      var d = t("./src/state/modules/async/util.js")
      Object.keys(d).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(s, e) ||
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: function() {
                return d[e]
              },
            }))
      })
    },
    "./src/protocol/client/index.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 })
      var o = t("./src/protocol/client/message-types.js")
      Object.keys(o).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(r, e, {
            enumerable: !0,
            get: function() {
              return o[e]
            },
          })
      })
      var n = t("./src/protocol/client/input.js")
      Object.keys(n).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(r, e, {
            enumerable: !0,
            get: function() {
              return n[e]
            },
          })
      })
    },
    "./src/protocol/client/input.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.inputTurnMessage = void 0)
      var o = t("./src/protocol/client/message-types.js")
      r.inputTurnMessage = e => [o.MESSAGE_TYPE_INPUT_TURN, e]
    },
    "./src/protocol/client/message-types.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.MESSAGE_TYPE_INPUT_TURN = r.MESSAGE_TYPE_SHIP_ENTER = void 0)
      r.MESSAGE_TYPE_SHIP_ENTER = 0
      r.MESSAGE_TYPE_INPUT_TURN = 1
    },
    "./src/protocol/index.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 })
      var o = { serialize: !0, deserialize: !0 }
      ;(r.serialize = function(e) {
        return JSON.stringify(e)
      }),
        (r.deserialize = function(e) {
          return JSON.parse(e)
        })
      var n = t("./src/protocol/client/index.js")
      Object.keys(n).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: function() {
                return n[e]
              },
            }))
      })
      var s = t("./src/protocol/server/index.js")
      Object.keys(s).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: function() {
                return s[e]
              },
            }))
      })
    },
    "./src/protocol/server/auth.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.authTokenInvalidMessage = void 0)
      var o = t("./src/protocol/server/message-types.js")
      r.authTokenInvalidMessage = () => [
        o.MESSAGE_TYPE_AUTH_TOKEN_INVALID,
      ]
    },
    "./src/protocol/server/index.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 })
      var o = t("./src/protocol/server/message-types.js")
      Object.keys(o).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(r, e, {
            enumerable: !0,
            get: function() {
              return o[e]
            },
          })
      })
      var n = t("./src/protocol/server/auth.js")
      Object.keys(n).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(r, e, {
            enumerable: !0,
            get: function() {
              return n[e]
            },
          })
      })
      var s = t("./src/protocol/server/ship.js")
      Object.keys(s).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(r, e, {
            enumerable: !0,
            get: function() {
              return s[e]
            },
          })
      })
      var u = t("./src/protocol/server/snapshot.js")
      Object.keys(u).forEach(function(e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(r, e, {
            enumerable: !0,
            get: function() {
              return u[e]
            },
          })
      })
    },
    "./src/protocol/server/message-types.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.MESSAGE_TYPE_SHIP_UPDATE = r.MESSAGE_TYPE_USER_UPDATE = r.MESSAGE_TYPE_SNAPSHOT = r.MESSAGE_TYPE_AUTH_TOKEN_INVALID = void 0)
      r.MESSAGE_TYPE_AUTH_TOKEN_INVALID = 1
      r.MESSAGE_TYPE_SNAPSHOT = 2
      r.MESSAGE_TYPE_USER_UPDATE = 3
      r.MESSAGE_TYPE_SHIP_UPDATE = 4
    },
    "./src/protocol/server/ship.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.shipUpdateMessage = void 0)
      var o = t("./src/protocol/server/message-types.js")
      r.shipUpdateMessage = e => [o.MESSAGE_TYPE_SHIP_UPDATE, e]
    },
    "./src/protocol/server/snapshot.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.snapshotMessage = void 0)
      var o = t("./src/protocol/server/message-types.js")
      r.snapshotMessage = (e, r) => [o.MESSAGE_TYPE_SNAPSHOT, e, r]
    },
    "./src/state/epics/index.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var n = [...o(t("./src/state/epics/loop/index.js")).default]
      r.default = n
    },
    "./src/state/epics/loop/index.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.loop = s),
        (r.default = void 0)
      var o = t("./node_modules/rxjs/_esm5/index.js"),
        n = t("./src/state/modules/index.js")
      function s(e) {
        return e
          .ofType(n.Loop.START)
          .switchMap(() => (0, o.interval)(1 / 60))
          .mapTo(n.Loop.tick)
          .takeUntil(e.ofType(n.Loop.PAUSE))
      }
      var u = [s]
      r.default = u
    },
    "./src/state/modules/async/action-creators.js": function(
      e,
      r,
      t,
    ) {
      "use strict"
    },
    "./src/state/modules/async/action-types.js": function(e, r, t) {
      "use strict"
    },
    "./src/state/modules/async/constants.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AsyncState = r.AsyncSuffix = void 0)
      r.AsyncSuffix = { PENDING: "!", FULFILLED: "+", REJECTED: "-" }
      r.AsyncState = { PENDING: 0, FULFILLED: 1, REJECTED: 2 }
    },
    "./src/state/modules/async/index.js": function(e, r, t) {
      "use strict"
      var o = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var s = t("./node_modules/@subspace/redux-module/lib/index.js"),
        u = n(t("./src/state/modules/async/action-creators.js")),
        i = o(t("./src/state/modules/async/action-types.js")),
        c = n(t("./src/state/modules/async/selectors.js")),
        l = o(t("./src/state/modules/async/reducer.js")),
        d = (0, s.createReduxModule)("Async", {
          actionTypes: i.default,
          actionCreators: u,
          reducer: l.default,
          selectors: c,
        })
      r.default = d
    },
    "./src/state/modules/async/reducer.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function(e = u, r) {
          const { type: t } = r,
            o = (0, s.getAsyncStateFromActionType)(t)
          if (null === o) return e
          const i = (0, s.trimSuffix)(t)
          return (0, n.default)({}, e, { [i]: o })
        })
      var n = o(
          t(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        s = t("./src/state/modules/async/util.js")
      const u = {}
    },
    "./src/state/modules/async/selectors.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getAsyncState = s),
        (r.isPending = function(e, r) {
          return s(e, r) === o.AsyncState.PENDING
        }),
        (r.isFulfilled = function(e, r) {
          return s(e, r) === o.AsyncState.FULFILLED
        }),
        (r.isRejected = function(e, r) {
          return s(e, r) === o.AsyncState.REJECTED
        })
      var o = t("./src/state/modules/async/constants.js"),
        n = t("./src/state/modules/async/util.js")
      function s(e, r) {
        return e[(0, n.trimSuffix)(r)]
      }
    },
    "./src/state/modules/async/util.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.toAsync = function(e) {
          return Object.values(o.AsyncSuffix).map(
            r => `${e}${String(r)}`,
          )
        }),
        (r.trimSuffix = function(e) {
          return e.slice(0, -1)
        }),
        (r.getAsyncStateFromActionType = function(e) {
          switch (e[e.length - 1]) {
            case o.AsyncSuffix.PENDING:
              return o.AsyncState.PENDING
            case o.AsyncSuffix.FULFILLED:
              return o.AsyncState.FULFILLED
            case o.AsyncSuffix.REJECTED:
              return o.AsyncState.REJECTED
            default:
              return null
          }
        })
      var o = t("./src/state/modules/async/constants.js")
    },
    "./src/state/modules/index.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "Async", {
          enumerable: !0,
          get: function() {
            return n.default
          },
        }),
        Object.defineProperty(r, "Loop", {
          enumerable: !0,
          get: function() {
            return s.default
          },
        }),
        Object.defineProperty(r, "Physics", {
          enumerable: !0,
          get: function() {
            return u.default
          },
        }),
        Object.defineProperty(r, "Ships", {
          enumerable: !0,
          get: function() {
            return i.default
          },
        }),
        Object.defineProperty(r, "Users", {
          enumerable: !0,
          get: function() {
            return c.default
          },
        })
      var n = o(t("./src/state/modules/async/index.js")),
        s = o(t("./src/state/modules/loop/index.js")),
        u = o(t("./src/state/modules/physics/index.js")),
        i = o(t("./src/state/modules/ships/index.js")),
        c = o(t("./src/state/modules/users/index.js"))
    },
    "./src/state/modules/loop/action-creators.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.start = n),
        (r.tick = s),
        (r.pause = u),
        (r.default = void 0)
      var o = t("./src/state/modules/loop/action-types.js")
      function n() {
        return { type: o.START }
      }
      function s(e) {
        return { type: o.TICK, payload: { dt: e } }
      }
      function u() {
        return { type: o.PAUSE }
      }
      var i = { start: n, tick: s, pause: u }
      r.default = i
    },
    "./src/state/modules/loop/action-types.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.PAUSE = r.TICK = r.START = void 0)
      r.START = "START"
      r.TICK = "TICK"
      r.PAUSE = "PAUSE"
      var o = { START: "START", TICK: "TICK", PAUSE: "PAUSE" }
      r.default = o
    },
    "./src/state/modules/loop/index.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var n = t("./node_modules/@subspace/redux-module/lib/index.js"),
        s = o(t("./src/state/modules/loop/action-creators.js")),
        u = o(t("./src/state/modules/loop/action-types.js")),
        i = o(t("./src/state/modules/loop/selectors.js")),
        c = o(t("./src/state/modules/loop/reducer.js")),
        l = (0, n.createReduxModule)("Loop", {
          actionTypes: u.default,
          actionCreators: s.default,
          reducer: c.default,
          selectors: i.default,
        })
      r.default = l
    },
    "./src/state/modules/loop/reducer.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function(e = u, r) {
          switch (r.type) {
            case s.START:
              return (0, n.default)({}, e, { running: !0 })
            case s.TICK:
              return (0, n.default)({}, e, { frame: e.frame + 1 })
            case s.PAUSE:
              return (0, n.default)({}, e, { running: !1 })
            default:
              return e
          }
        })
      var n = o(
          t(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        s = t("./src/state/modules/loop/action-types.js")
      const u = { frame: -1, running: !1 }
    },
    "./src/state/modules/loop/selectors.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      r.default = {}
    },
    "./src/state/modules/physics/action-creators.js": function(
      e,
      r,
      t,
    ) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.addBody = s),
        (r.rotateBody = u),
        (r.updateBody = i),
        (r.default = void 0)
      var n = o(t("./src/state/modules/physics/action-types.js"))
      function s(e) {
        return { type: n.ADD_BODY, payload: { body: e } }
      }
      function u(e, r) {
        return {
          type: n.ROTATE_BODY,
          payload: { bodyId: e, angle: r },
        }
      }
      function i(e) {
        return { type: n.UPDATE_BODY, payload: { body: e } }
      }
      var c = { addBody: s, rotateBody: u, updateBody: i }
      r.default = c
    },
    "./src/state/modules/physics/action-types.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.ROTATE_BODY = r.UPDATE_BODY = r.ADD_BODY = void 0)
      r.ADD_BODY = "ADD_BODY"
      r.UPDATE_BODY = "UPDATE_BODY"
      r.ROTATE_BODY = "ROTATE_BODY"
      var o = {
        ADD_BODY: "ADD_BODY",
        UPDATE_BODY: "UPDATE_BODY",
        ROTATE_BODY: "ROTATE_BODY",
      }
      r.default = o
    },
    "./src/state/modules/physics/index.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var n = t("./node_modules/@subspace/redux-module/lib/index.js"),
        s = o(t("./src/state/modules/physics/action-creators.js")),
        u = o(t("./src/state/modules/physics/action-types.js")),
        i = o(t("./src/state/modules/physics/selectors.js")),
        c = o(t("./src/state/modules/physics/reducer.js")),
        l = (0, n.createReduxModule)("Physics", {
          actionTypes: u.default,
          actionCreators: s.default,
          reducer: c.default,
          selectors: i.default,
        })
      r.default = l
    },
    "./src/state/modules/physics/reducer.js": function(e, r, t) {
      "use strict"
      var o = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function(e = c, r) {
          switch (r.type) {
            case u.ADD_BODY:
              return (0, s.default)({}, e, {
                byId: (0, s.default)({}, e.byId, {
                  [r.payload.body.id]: r.payload.body,
                }),
              })
            case u.UPDATE_BODY:
              return (0, s.default)({}, e, {
                byId: (0, s.default)({}, e.byId, {
                  [r.payload.body.id]: (0, s.default)(
                    {},
                    (0, i.getBody)(e, r.payload.body.id),
                    r.payload.body,
                  ),
                }),
              })
            default:
              return e
          }
        })
      var s = n(
          t(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        u = o(t("./src/state/modules/physics/action-types.js")),
        i = t("./src/state/modules/physics/selectors.js")
      const c = { byId: {} }
    },
    "./src/state/modules/physics/selectors.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.getBody = void 0)
      const o = (e, r) => e[r]
      r.getBody = o
      var n = { getBody: o }
      r.default = n
    },
    "./src/state/modules/ships/action-creators.js": function(
      e,
      r,
      t,
    ) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.addShip = s),
        (r.turnShip = u),
        (r.default = void 0)
      var n = o(t("./src/state/modules/ships/action-types.js"))
      function s(e) {
        return { type: n.ADD, payload: { ship: e } }
      }
      function u(e, r) {
        return { type: n.TURN, payload: { shipId: e, direction: r } }
      }
      var i = { addShip: s, turnShip: u }
      r.default = i
    },
    "./src/state/modules/ships/action-types.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.TURN = r.UPDATE = r.ADD = void 0)
      r.ADD = "ADD"
      r.UPDATE = "UPDATE"
      r.TURN = "TURN"
      var o = { ADD: "ADD", UPDATE: "UPDATE", TURN: "TURN" }
      r.default = o
    },
    "./src/state/modules/ships/index.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var n = t("./node_modules/@subspace/redux-module/lib/index.js"),
        s = o(t("./src/state/modules/ships/action-creators.js")),
        u = o(t("./src/state/modules/ships/action-types.js")),
        i = o(t("./src/state/modules/ships/selectors.js")),
        c = o(t("./src/state/modules/ships/reducer.js")),
        l = (0, n.createReduxModule)("Ships", {
          actionTypes: u.default,
          actionCreators: s.default,
          reducer: c.default,
          selectors: i.default,
        })
      r.default = l
    },
    "./src/state/modules/ships/reducer.js": function(e, r, t) {
      "use strict"
      var o = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function(e = c, r) {
          switch (r.type) {
            case u.ADD: {
              const { ship: t } = r.payload
              return (0, s.default)({}, e, {
                byId: (0, s.default)({}, e.byId, { [t.id]: t }),
              })
            }
            case u.UPDATE: {
              const { ship: t } = r.payload
              return (0, s.default)({}, e, {
                byId: (0, s.default)({}, e.byId, {
                  [t.id]: (0, s.default)(
                    {},
                    (0, i.getShip)(e, t.id),
                    t,
                  ),
                }),
              })
            }
            default:
              return e
          }
        })
      var s = n(
          t(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        u = o(t("./src/state/modules/ships/action-types.js")),
        i = t("./src/state/modules/ships/selectors.js")
      const c = { byId: {} }
    },
    "./src/state/modules/ships/selectors.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.getShip = void 0)
      const o = (e, r) => e.byId[r]
      r.getShip = o
      var n = { getShip: o }
      r.default = n
    },
    "./src/state/modules/users/action-creators.js": function(
      e,
      r,
      t,
    ) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.addUser = s),
        (r.updateUser = u),
        (r.default = void 0)
      var n = o(t("./src/state/modules/users/action-types.js"))
      function s(e) {
        return { type: n.ADD, payload: { user: e } }
      }
      function u(e) {
        return { type: n.UPDATE, payload: { user: e } }
      }
      var i = { addUser: s, updateUser: u }
      r.default = i
    },
    "./src/state/modules/users/action-types.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.UPDATE = r.ADD = void 0)
      r.ADD = "ADD"
      r.UPDATE = "UPDATE"
      var o = { ADD: "ADD", UPDATE: "UPDATE" }
      r.default = o
    },
    "./src/state/modules/users/index.js": function(e, r, t) {
      "use strict"
      var o = t(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var n = t("./node_modules/@subspace/redux-module/lib/index.js"),
        s = o(t("./src/state/modules/users/action-creators.js")),
        u = o(t("./src/state/modules/users/action-types.js")),
        i = o(t("./src/state/modules/users/selectors.js")),
        c = o(t("./src/state/modules/users/reducer.js")),
        l = (0, n.createReduxModule)("Users", {
          actionTypes: u.default,
          actionCreators: s.default,
          reducer: c.default,
          selectors: i.default,
        })
      r.default = l
    },
    "./src/state/modules/users/reducer.js": function(e, r, t) {
      "use strict"
      var o = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js",
        ),
        n = t(
          "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
        )
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function(e = c, r) {
          switch (r.type) {
            case u.ADD: {
              const { user: t } = r.payload,
                o = (0, s.default)({}, e.byId, { [t.id]: t })
              let n = e.byActiveShipId
              return (
                t.activeShipId &&
                  (n = (0, s.default)({}, e.byActiveShipId, {
                    [t.activeShipId]: t,
                  })),
                { byId: o, byActiveShipId: n }
              )
            }
            case u.UPDATE: {
              const { id: t } = r.payload.user
              if (!t)
                throw new Error(
                  "Attempting to update user with no id",
                )
              const o = (0, s.default)(
                  {},
                  (0, i.getUser)(e, t),
                  r.payload.user,
                ),
                n = (0, s.default)({}, e.byId, { [o.id]: o })
              let u = e.byActiveShipId
              return (
                o.activeShipId &&
                  (u = (0, s.default)({}, e.byActiveShipId, {
                    [o.activeShipId]: o,
                  })),
                { byId: n, byActiveShipId: u }
              )
            }
            default:
              return e
          }
        })
      var s = n(
          t(
            "../../node_modules/@babel/runtime/helpers/objectSpread.js",
          ),
        ),
        u = o(t("./src/state/modules/users/action-types.js")),
        i = t("./src/state/modules/users/selectors.js")
      const c = { byId: {}, byActiveShipId: {} }
    },
    "./src/state/modules/users/selectors.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = r.getUserByActiveShipId = r.getUser = r.getUsers = void 0)
      const o = e => e.byId
      r.getUsers = o
      const n = (e, r) => e.byId[r]
      r.getUser = n
      const s = (e, r) => e.byActiveShipId[r]
      r.getUserByActiveShipId = s
      var u = { getUsers: o, getUser: n, getUserByActiveShipId: s }
      r.default = u
    },
    "./src/state/selectors/index.js": function(e, r, t) {
      "use strict"
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getUserBody = r.getUserShip = r.getShipBody = void 0)
      var o = t("./src/state/modules/index.js")
      const n = (e, r) => {
        const t = o.Ships.getShip(e, r)
        return t.bodyId ? o.Physics.getBody(e, t.bodyId) : null
      }
      r.getShipBody = n
      r.getUserShip = (e, r) => {
        const { activeShipId: t } = o.Users.getUser(e, r)
        return t ? o.Ships.getShip(e, t) : null
      }
      r.getUserBody = (e, r) => {
        const { activeShipId: t } = o.Users.getUser(e, r)
        return t ? n(e, t) : null
      }
    },
  })
})
//# sourceMappingURL=index.js.map
