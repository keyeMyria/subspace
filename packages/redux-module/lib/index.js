!(function(e, o) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = o())
    : "function" == typeof define && define.amd
      ? define([], o)
      : "object" == typeof exports
        ? (exports.ReduxModule = o())
        : (e.ReduxModule = o())
})(global, function() {
  return (function(e) {
    var o = {}
    function r(s) {
      if (o[s]) return o[s].exports
      var n = (o[s] = { i: s, l: !1, exports: {} })
      return (
        e[s].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
      )
    }
    return (
      (r.m = e),
      (r.c = o),
      (r.d = function(e, o, s) {
        r.o(e, o) ||
          Object.defineProperty(e, o, { enumerable: !0, get: s })
      }),
      (r.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", { value: !0 })
      }),
      (r.t = function(e, o) {
        if ((1 & o && (e = r(e)), 8 & o)) return e
        if (4 & o && "object" == typeof e && e && e.__esModule)
          return e
        var s = Object.create(null)
        if (
          (r.r(s),
          Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & o && "string" != typeof e)
        )
          for (var n in e)
            r.d(
              s,
              n,
              function(o) {
                return e[o]
              }.bind(null, n),
            )
        return s
      }),
      (r.n = function(e) {
        var o =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return r.d(o, "a", o), o
      }),
      (r.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
      }),
      (r.p = ""),
      r((r.s = "./src/index.js"))
    )
  })({
    "../../node_modules/@babel/runtime/core-js/object/define-property.js": function(
      e,
      o,
      r,
    ) {
      e.exports = r(
        "../../node_modules/core-js/library/fn/object/define-property.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js": function(
      e,
      o,
      r,
    ) {
      e.exports = r(
        "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js": function(
      e,
      o,
      r,
    ) {
      e.exports = r(
        "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js",
      )
    },
    "../../node_modules/@babel/runtime/core-js/object/keys.js": function(
      e,
      o,
      r,
    ) {
      e.exports = r(
        "../../node_modules/core-js/library/fn/object/keys.js",
      )
    },
    "../../node_modules/@babel/runtime/helpers/defineProperty.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/@babel/runtime/core-js/object/define-property.js",
      )
      e.exports = function(e, o, r) {
        return (
          o in e
            ? s(e, o, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = r),
          e
        )
      }
    },
    "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(
      e,
      o,
    ) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    "../../node_modules/@babel/runtime/helpers/objectSpread.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js",
        ),
        n = r(
          "../../node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js",
        ),
        t = r(
          "../../node_modules/@babel/runtime/core-js/object/keys.js",
        ),
        u = r(
          "../../node_modules/@babel/runtime/helpers/defineProperty.js",
        )
      e.exports = function(e) {
        for (var o = 1; o < arguments.length; o++) {
          var r = null != arguments[o] ? arguments[o] : {},
            l = t(r)
          "function" == typeof n &&
            (l = l.concat(
              n(r).filter(function(e) {
                return s(r, e).enumerable
              }),
            )),
            l.forEach(function(o) {
              u(e, o, r[o])
            })
        }
        return e
      }
    },
    "../../node_modules/core-js/library/fn/object/define-property.js": function(
      e,
      o,
      r,
    ) {
      r(
        "../../node_modules/core-js/library/modules/es6.object.define-property.js",
      )
      var s = r("../../node_modules/core-js/library/modules/_core.js")
        .Object
      e.exports = function(e, o, r) {
        return s.defineProperty(e, o, r)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js": function(
      e,
      o,
      r,
    ) {
      r(
        "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
      )
      var s = r("../../node_modules/core-js/library/modules/_core.js")
        .Object
      e.exports = function(e, o) {
        return s.getOwnPropertyDescriptor(e, o)
      }
    },
    "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js": function(
      e,
      o,
      r,
    ) {
      r("../../node_modules/core-js/library/modules/es6.symbol.js"),
        (e.exports = r(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.getOwnPropertySymbols)
    },
    "../../node_modules/core-js/library/fn/object/keys.js": function(
      e,
      o,
      r,
    ) {
      r(
        "../../node_modules/core-js/library/modules/es6.object.keys.js",
      ),
        (e.exports = r(
          "../../node_modules/core-js/library/modules/_core.js",
        ).Object.keys)
    },
    "../../node_modules/core-js/library/modules/_a-function.js": function(
      e,
      o,
    ) {
      e.exports = function(e) {
        if ("function" != typeof e)
          throw TypeError(e + " is not a function!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_an-object.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      e.exports = function(e) {
        if (!s(e)) throw TypeError(e + " is not an object!")
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_array-includes.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_to-length.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_to-absolute-index.js",
        )
      e.exports = function(e) {
        return function(o, r, u) {
          var l,
            d = s(o),
            i = n(d.length),
            c = t(u, i)
          if (e && r != r) {
            for (; i > c; ) if ((l = d[c++]) != l) return !0
          } else
            for (; i > c; c++)
              if ((e || c in d) && d[c] === r) return e || c || 0
          return !e && -1
        }
      }
    },
    "../../node_modules/core-js/library/modules/_cof.js": function(
      e,
      o,
    ) {
      var r = {}.toString
      e.exports = function(e) {
        return r.call(e).slice(8, -1)
      }
    },
    "../../node_modules/core-js/library/modules/_core.js": function(
      e,
      o,
    ) {
      var r = (e.exports = { version: "2.5.5" })
      "number" == typeof __e && (__e = r)
    },
    "../../node_modules/core-js/library/modules/_ctx.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/core-js/library/modules/_a-function.js",
      )
      e.exports = function(e, o, r) {
        if ((s(e), void 0 === o)) return e
        switch (r) {
          case 1:
            return function(r) {
              return e.call(o, r)
            }
          case 2:
            return function(r, s) {
              return e.call(o, r, s)
            }
          case 3:
            return function(r, s, n) {
              return e.call(o, r, s, n)
            }
        }
        return function() {
          return e.apply(o, arguments)
        }
      }
    },
    "../../node_modules/core-js/library/modules/_defined.js": function(
      e,
      o,
    ) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    "../../node_modules/core-js/library/modules/_descriptors.js": function(
      e,
      o,
      r,
    ) {
      e.exports = !r(
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
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        n = r("../../node_modules/core-js/library/modules/_global.js")
          .document,
        t = s(n) && s(n.createElement)
      e.exports = function(e) {
        return t ? n.createElement(e) : {}
      }
    },
    "../../node_modules/core-js/library/modules/_enum-bug-keys.js": function(
      e,
      o,
    ) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ",",
      )
    },
    "../../node_modules/core-js/library/modules/_enum-keys.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_object-gops.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        )
      e.exports = function(e) {
        var o = s(e),
          r = n.f
        if (r)
          for (var u, l = r(e), d = t.f, i = 0; l.length > i; )
            d.call(e, (u = l[i++])) && o.push(u)
        return o
      }
    },
    "../../node_modules/core-js/library/modules/_export.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = r("../../node_modules/core-js/library/modules/_core.js"),
        t = r("../../node_modules/core-js/library/modules/_ctx.js"),
        u = r("../../node_modules/core-js/library/modules/_hide.js"),
        l = r("../../node_modules/core-js/library/modules/_has.js"),
        d = function(e, o, r) {
          var i,
            c,
            j,
            a = e & d.F,
            m = e & d.G,
            b = e & d.S,
            _ = e & d.P,
            f = e & d.B,
            y = e & d.W,
            p = m ? n : n[o] || (n[o] = {}),
            v = p.prototype,
            h = m ? s : b ? s[o] : (s[o] || {}).prototype
          for (i in (m && (r = o), r))
            ((c = !a && h && void 0 !== h[i]) && l(p, i)) ||
              ((j = c ? h[i] : r[i]),
              (p[i] =
                m && "function" != typeof h[i]
                  ? r[i]
                  : f && c
                    ? t(j, s)
                    : y && h[i] == j
                      ? (function(e) {
                          var o = function(o, r, s) {
                            if (this instanceof e) {
                              switch (arguments.length) {
                                case 0:
                                  return new e()
                                case 1:
                                  return new e(o)
                                case 2:
                                  return new e(o, r)
                              }
                              return new e(o, r, s)
                            }
                            return e.apply(this, arguments)
                          }
                          return (o.prototype = e.prototype), o
                        })(j)
                      : _ && "function" == typeof j
                        ? t(Function.call, j)
                        : j),
              _ &&
                (((p.virtual || (p.virtual = {}))[i] = j),
                e & d.R && v && !v[i] && u(v, i, j)))
        }
      ;(d.F = 1),
        (d.G = 2),
        (d.S = 4),
        (d.P = 8),
        (d.B = 16),
        (d.W = 32),
        (d.U = 64),
        (d.R = 128),
        (e.exports = d)
    },
    "../../node_modules/core-js/library/modules/_fails.js": function(
      e,
      o,
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
      o,
    ) {
      var r = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")())
      "number" == typeof __g && (__g = r)
    },
    "../../node_modules/core-js/library/modules/_has.js": function(
      e,
      o,
    ) {
      var r = {}.hasOwnProperty
      e.exports = function(e, o) {
        return r.call(e, o)
      }
    },
    "../../node_modules/core-js/library/modules/_hide.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        )
      e.exports = r(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? function(e, o, r) {
            return s.f(e, o, n(1, r))
          }
        : function(e, o, r) {
            return (e[o] = r), e
          }
    },
    "../../node_modules/core-js/library/modules/_html.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/core-js/library/modules/_global.js",
      ).document
      e.exports = s && s.documentElement
    },
    "../../node_modules/core-js/library/modules/_ie8-dom-define.js": function(
      e,
      o,
      r,
    ) {
      e.exports =
        !r(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ) &&
        !r("../../node_modules/core-js/library/modules/_fails.js")(
          function() {
            return (
              7 !=
              Object.defineProperty(
                r(
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
      o,
      r,
    ) {
      var s = r("../../node_modules/core-js/library/modules/_cof.js")
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return "String" == s(e) ? e.split("") : Object(e)
          }
    },
    "../../node_modules/core-js/library/modules/_is-array.js": function(
      e,
      o,
      r,
    ) {
      var s = r("../../node_modules/core-js/library/modules/_cof.js")
      e.exports =
        Array.isArray ||
        function(e) {
          return "Array" == s(e)
        }
    },
    "../../node_modules/core-js/library/modules/_is-object.js": function(
      e,
      o,
    ) {
      e.exports = function(e) {
        return "object" == typeof e
          ? null !== e
          : "function" == typeof e
      }
    },
    "../../node_modules/core-js/library/modules/_library.js": function(
      e,
      o,
    ) {
      e.exports = !0
    },
    "../../node_modules/core-js/library/modules/_meta.js": function(
      e,
      o,
      r,
    ) {
      var s = r("../../node_modules/core-js/library/modules/_uid.js")(
          "meta",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        t = r("../../node_modules/core-js/library/modules/_has.js"),
        u = r(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        l = 0,
        d =
          Object.isExtensible ||
          function() {
            return !0
          },
        i = !r(
          "../../node_modules/core-js/library/modules/_fails.js",
        )(function() {
          return d(Object.preventExtensions({}))
        }),
        c = function(e) {
          u(e, s, { value: { i: "O" + ++l, w: {} } })
        },
        j = (e.exports = {
          KEY: s,
          NEED: !1,
          fastKey: function(e, o) {
            if (!n(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e
            if (!t(e, s)) {
              if (!d(e)) return "F"
              if (!o) return "E"
              c(e)
            }
            return e[s].i
          },
          getWeak: function(e, o) {
            if (!t(e, s)) {
              if (!d(e)) return !0
              if (!o) return !1
              c(e)
            }
            return e[s].w
          },
          onFreeze: function(e) {
            return i && j.NEED && d(e) && !t(e, s) && c(e), e
          },
        })
    },
    "../../node_modules/core-js/library/modules/_object-create.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_object-dps.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ),
        u = r(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO"),
        l = function() {},
        d = function() {
          var e,
            o = r(
              "../../node_modules/core-js/library/modules/_dom-create.js",
            )("iframe"),
            s = t.length
          for (
            o.style.display = "none",
              r(
                "../../node_modules/core-js/library/modules/_html.js",
              ).appendChild(o),
              o.src = "javascript:",
              (e = o.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              d = e.F;
            s--;

          )
            delete d.prototype[t[s]]
          return d()
        }
      e.exports =
        Object.create ||
        function(e, o) {
          var r
          return (
            null !== e
              ? ((l.prototype = s(e)),
                (r = new l()),
                (l.prototype = null),
                (r[u] = e))
              : (r = d()),
            void 0 === o ? r : n(r, o)
          )
        }
    },
    "../../node_modules/core-js/library/modules/_object-dp.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        u = Object.defineProperty
      o.f = r(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperty
        : function(e, o, r) {
            if ((s(e), (o = t(o, !0)), s(r), n))
              try {
                return u(e, o, r)
              } catch (e) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported!")
            return "value" in r && (e[o] = r.value), e
          }
    },
    "../../node_modules/core-js/library/modules/_object-dps.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        )
      e.exports = r(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? Object.defineProperties
        : function(e, o) {
            n(e)
            for (var r, u = t(o), l = u.length, d = 0; l > d; )
              s.f(e, (r = u[d++]), o[r])
            return e
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopd.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        u = r(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        l = r("../../node_modules/core-js/library/modules/_has.js"),
        d = r(
          "../../node_modules/core-js/library/modules/_ie8-dom-define.js",
        ),
        i = Object.getOwnPropertyDescriptor
      o.f = r(
        "../../node_modules/core-js/library/modules/_descriptors.js",
      )
        ? i
        : function(e, o) {
            if (((e = t(e)), (o = u(o, !0)), d))
              try {
                return i(e, o)
              } catch (e) {}
            if (l(e, o)) return n(!s.f.call(e, o), e[o])
          }
    },
    "../../node_modules/core-js/library/modules/_object-gopn-ext.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f,
        t = {}.toString,
        u =
          "object" == typeof window &&
          window &&
          Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : []
      e.exports.f = function(e) {
        return u && "[object Window]" == t.call(e)
          ? (function(e) {
              try {
                return n(e)
              } catch (e) {
                return u.slice()
              }
            })(e)
          : n(s(e))
      }
    },
    "../../node_modules/core-js/library/modules/_object-gopn.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        ).concat("length", "prototype")
      o.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return s(e, n)
        }
    },
    "../../node_modules/core-js/library/modules/_object-gops.js": function(
      e,
      o,
    ) {
      o.f = Object.getOwnPropertySymbols
    },
    "../../node_modules/core-js/library/modules/_object-keys-internal.js": function(
      e,
      o,
      r,
    ) {
      var s = r("../../node_modules/core-js/library/modules/_has.js"),
        n = r(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        t = r(
          "../../node_modules/core-js/library/modules/_array-includes.js",
        )(!1),
        u = r(
          "../../node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO")
      e.exports = function(e, o) {
        var r,
          l = n(e),
          d = 0,
          i = []
        for (r in l) r != u && s(l, r) && i.push(r)
        for (; o.length > d; )
          s(l, (r = o[d++])) && (~t(i, r) || i.push(r))
        return i
      }
    },
    "../../node_modules/core-js/library/modules/_object-keys.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-keys-internal.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_enum-bug-keys.js",
        )
      e.exports =
        Object.keys ||
        function(e) {
          return s(e, n)
        }
    },
    "../../node_modules/core-js/library/modules/_object-pie.js": function(
      e,
      o,
    ) {
      o.f = {}.propertyIsEnumerable
    },
    "../../node_modules/core-js/library/modules/_object-sap.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        n = r("../../node_modules/core-js/library/modules/_core.js"),
        t = r("../../node_modules/core-js/library/modules/_fails.js")
      e.exports = function(e, o) {
        var r = (n.Object || {})[e] || Object[e],
          u = {}
        ;(u[e] = o(r)),
          s(
            s.S +
              s.F *
                t(function() {
                  r(1)
                }),
            "Object",
            u,
          )
      }
    },
    "../../node_modules/core-js/library/modules/_property-desc.js": function(
      e,
      o,
    ) {
      e.exports = function(e, o) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: o,
        }
      }
    },
    "../../node_modules/core-js/library/modules/_redefine.js": function(
      e,
      o,
      r,
    ) {
      e.exports = r(
        "../../node_modules/core-js/library/modules/_hide.js",
      )
    },
    "../../node_modules/core-js/library/modules/_set-to-string-tag.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f,
        n = r("../../node_modules/core-js/library/modules/_has.js"),
        t = r("../../node_modules/core-js/library/modules/_wks.js")(
          "toStringTag",
        )
      e.exports = function(e, o, r) {
        e &&
          !n((e = r ? e : e.prototype), t) &&
          s(e, t, { configurable: !0, value: o })
      }
    },
    "../../node_modules/core-js/library/modules/_shared-key.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("keys"),
        n = r("../../node_modules/core-js/library/modules/_uid.js")
      e.exports = function(e) {
        return s[e] || (s[e] = n(e))
      }
    },
    "../../node_modules/core-js/library/modules/_shared.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = s["__core-js_shared__"] || (s["__core-js_shared__"] = {})
      e.exports = function(e) {
        return n[e] || (n[e] = {})
      }
    },
    "../../node_modules/core-js/library/modules/_to-absolute-index.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        n = Math.max,
        t = Math.min
      e.exports = function(e, o) {
        return (e = s(e)) < 0 ? n(e + o, 0) : t(e, o)
      }
    },
    "../../node_modules/core-js/library/modules/_to-integer.js": function(
      e,
      o,
    ) {
      var r = Math.ceil,
        s = Math.floor
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? s : r)(e)
      }
    },
    "../../node_modules/core-js/library/modules/_to-iobject.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_iobject.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_defined.js",
        )
      e.exports = function(e) {
        return s(n(e))
      }
    },
    "../../node_modules/core-js/library/modules/_to-length.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_to-integer.js",
        ),
        n = Math.min
      e.exports = function(e) {
        return e > 0 ? n(s(e), 9007199254740991) : 0
      }
    },
    "../../node_modules/core-js/library/modules/_to-object.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/core-js/library/modules/_defined.js",
      )
      e.exports = function(e) {
        return Object(s(e))
      }
    },
    "../../node_modules/core-js/library/modules/_to-primitive.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/core-js/library/modules/_is-object.js",
      )
      e.exports = function(e, o) {
        if (!s(e)) return e
        var r, n
        if (
          o &&
          "function" == typeof (r = e.toString) &&
          !s((n = r.call(e)))
        )
          return n
        if (
          "function" == typeof (r = e.valueOf) &&
          !s((n = r.call(e)))
        )
          return n
        if (
          !o &&
          "function" == typeof (r = e.toString) &&
          !s((n = r.call(e)))
        )
          return n
        throw TypeError("Can't convert object to primitive value")
      }
    },
    "../../node_modules/core-js/library/modules/_uid.js": function(
      e,
      o,
    ) {
      var r = 0,
        s = Math.random()
      e.exports = function(e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++r + s).toString(36),
        )
      }
    },
    "../../node_modules/core-js/library/modules/_wks-define.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = r("../../node_modules/core-js/library/modules/_core.js"),
        t = r(
          "../../node_modules/core-js/library/modules/_library.js",
        ),
        u = r(
          "../../node_modules/core-js/library/modules/_wks-ext.js",
        ),
        l = r(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ).f
      e.exports = function(e) {
        var o = n.Symbol || (n.Symbol = t ? {} : s.Symbol || {})
        "_" == e.charAt(0) || e in o || l(o, e, { value: u.f(e) })
      }
    },
    "../../node_modules/core-js/library/modules/_wks-ext.js": function(
      e,
      o,
      r,
    ) {
      o.f = r("../../node_modules/core-js/library/modules/_wks.js")
    },
    "../../node_modules/core-js/library/modules/_wks.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_shared.js",
        )("wks"),
        n = r("../../node_modules/core-js/library/modules/_uid.js"),
        t = r("../../node_modules/core-js/library/modules/_global.js")
          .Symbol,
        u = "function" == typeof t
      ;(e.exports = function(e) {
        return (
          s[e] || (s[e] = (u && t[e]) || (u ? t : n)("Symbol." + e))
        )
      }).store = s
    },
    "../../node_modules/core-js/library/modules/es6.object.define-property.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
        "../../node_modules/core-js/library/modules/_export.js",
      )
      s(
        s.S +
          s.F *
            !r(
              "../../node_modules/core-js/library/modules/_descriptors.js",
            ),
        "Object",
        {
          defineProperty: r(
            "../../node_modules/core-js/library/modules/_object-dp.js",
          ).f,
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ).f
      r("../../node_modules/core-js/library/modules/_object-sap.js")(
        "getOwnPropertyDescriptor",
        function() {
          return function(e, o) {
            return n(s(e), o)
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.object.keys.js": function(
      e,
      o,
      r,
    ) {
      var s = r(
          "../../node_modules/core-js/library/modules/_to-object.js",
        ),
        n = r(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        )
      r("../../node_modules/core-js/library/modules/_object-sap.js")(
        "keys",
        function() {
          return function(e) {
            return n(s(e))
          }
        },
      )
    },
    "../../node_modules/core-js/library/modules/es6.symbol.js": function(
      e,
      o,
      r,
    ) {
      "use strict"
      var s = r(
          "../../node_modules/core-js/library/modules/_global.js",
        ),
        n = r("../../node_modules/core-js/library/modules/_has.js"),
        t = r(
          "../../node_modules/core-js/library/modules/_descriptors.js",
        ),
        u = r(
          "../../node_modules/core-js/library/modules/_export.js",
        ),
        l = r(
          "../../node_modules/core-js/library/modules/_redefine.js",
        ),
        d = r("../../node_modules/core-js/library/modules/_meta.js")
          .KEY,
        i = r("../../node_modules/core-js/library/modules/_fails.js"),
        c = r(
          "../../node_modules/core-js/library/modules/_shared.js",
        ),
        j = r(
          "../../node_modules/core-js/library/modules/_set-to-string-tag.js",
        ),
        a = r("../../node_modules/core-js/library/modules/_uid.js"),
        m = r("../../node_modules/core-js/library/modules/_wks.js"),
        b = r(
          "../../node_modules/core-js/library/modules/_wks-ext.js",
        ),
        _ = r(
          "../../node_modules/core-js/library/modules/_wks-define.js",
        ),
        f = r(
          "../../node_modules/core-js/library/modules/_enum-keys.js",
        ),
        y = r(
          "../../node_modules/core-js/library/modules/_is-array.js",
        ),
        p = r(
          "../../node_modules/core-js/library/modules/_an-object.js",
        ),
        v = r(
          "../../node_modules/core-js/library/modules/_is-object.js",
        ),
        h = r(
          "../../node_modules/core-js/library/modules/_to-iobject.js",
        ),
        g = r(
          "../../node_modules/core-js/library/modules/_to-primitive.js",
        ),
        x = r(
          "../../node_modules/core-js/library/modules/_property-desc.js",
        ),
        w = r(
          "../../node_modules/core-js/library/modules/_object-create.js",
        ),
        O = r(
          "../../node_modules/core-js/library/modules/_object-gopn-ext.js",
        ),
        S = r(
          "../../node_modules/core-js/library/modules/_object-gopd.js",
        ),
        k = r(
          "../../node_modules/core-js/library/modules/_object-dp.js",
        ),
        P = r(
          "../../node_modules/core-js/library/modules/_object-keys.js",
        ),
        E = S.f,
        M = k.f,
        F = O.f,
        T = s.Symbol,
        N = s.JSON,
        R = N && N.stringify,
        D = m("_hidden"),
        I = m("toPrimitive"),
        C = {}.propertyIsEnumerable,
        W = c("symbol-registry"),
        A = c("symbols"),
        $ = c("op-symbols"),
        J = Object.prototype,
        G = "function" == typeof T,
        K = s.QObject,
        q = !K || !K.prototype || !K.prototype.findChild,
        z =
          t &&
          i(function() {
            return (
              7 !=
              w(
                M({}, "a", {
                  get: function() {
                    return M(this, "a", { value: 7 }).a
                  },
                }),
              ).a
            )
          })
            ? function(e, o, r) {
                var s = E(J, o)
                s && delete J[o],
                  M(e, o, r),
                  s && e !== J && M(J, o, s)
              }
            : M,
        B = function(e) {
          var o = (A[e] = w(T.prototype))
          return (o._k = e), o
        },
        Y =
          G && "symbol" == typeof T.iterator
            ? function(e) {
                return "symbol" == typeof e
              }
            : function(e) {
                return e instanceof T
              },
        L = function(e, o, r) {
          return (
            e === J && L($, o, r),
            p(e),
            (o = g(o, !0)),
            p(r),
            n(A, o)
              ? (r.enumerable
                  ? (n(e, D) && e[D][o] && (e[D][o] = !1),
                    (r = w(r, { enumerable: x(0, !1) })))
                  : (n(e, D) || M(e, D, x(1, {})), (e[D][o] = !0)),
                z(e, o, r))
              : M(e, o, r)
          )
        },
        Q = function(e, o) {
          p(e)
          for (var r, s = f((o = h(o))), n = 0, t = s.length; t > n; )
            L(e, (r = s[n++]), o[r])
          return e
        },
        U = function(e) {
          var o = C.call(this, (e = g(e, !0)))
          return (
            !(this === J && n(A, e) && !n($, e)) &&
            (!(
              o ||
              !n(this, e) ||
              !n(A, e) ||
              (n(this, D) && this[D][e])
            ) ||
              o)
          )
        },
        H = function(e, o) {
          if (
            ((e = h(e)),
            (o = g(o, !0)),
            e !== J || !n(A, o) || n($, o))
          ) {
            var r = E(e, o)
            return (
              !r ||
                !n(A, o) ||
                (n(e, D) && e[D][o]) ||
                (r.enumerable = !0),
              r
            )
          }
        },
        V = function(e) {
          for (var o, r = F(h(e)), s = [], t = 0; r.length > t; )
            n(A, (o = r[t++])) || o == D || o == d || s.push(o)
          return s
        },
        X = function(e) {
          for (
            var o, r = e === J, s = F(r ? $ : h(e)), t = [], u = 0;
            s.length > u;

          )
            !n(A, (o = s[u++])) || (r && !n(J, o)) || t.push(A[o])
          return t
        }
      G ||
        (l(
          (T = function() {
            if (this instanceof T)
              throw TypeError("Symbol is not a constructor!")
            var e = a(arguments.length > 0 ? arguments[0] : void 0),
              o = function(r) {
                this === J && o.call($, r),
                  n(this, D) && n(this[D], e) && (this[D][e] = !1),
                  z(this, e, x(1, r))
              }
            return (
              t && q && z(J, e, { configurable: !0, set: o }), B(e)
            )
          }).prototype,
          "toString",
          function() {
            return this._k
          },
        ),
        (S.f = H),
        (k.f = L),
        (r(
          "../../node_modules/core-js/library/modules/_object-gopn.js",
        ).f = O.f = V),
        (r(
          "../../node_modules/core-js/library/modules/_object-pie.js",
        ).f = U),
        (r(
          "../../node_modules/core-js/library/modules/_object-gops.js",
        ).f = X),
        t &&
          !r(
            "../../node_modules/core-js/library/modules/_library.js",
          ) &&
          l(J, "propertyIsEnumerable", U, !0),
        (b.f = function(e) {
          return B(m(e))
        })),
        u(u.G + u.W + u.F * !G, { Symbol: T })
      for (
        var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ",",
          ),
          ee = 0;
        Z.length > ee;

      )
        m(Z[ee++])
      for (var oe = P(m.store), re = 0; oe.length > re; ) _(oe[re++])
      u(u.S + u.F * !G, "Symbol", {
        for: function(e) {
          return n(W, (e += "")) ? W[e] : (W[e] = T(e))
        },
        keyFor: function(e) {
          if (!Y(e)) throw TypeError(e + " is not a symbol!")
          for (var o in W) if (W[o] === e) return o
        },
        useSetter: function() {
          q = !0
        },
        useSimple: function() {
          q = !1
        },
      }),
        u(u.S + u.F * !G, "Object", {
          create: function(e, o) {
            return void 0 === o ? w(e) : Q(w(e), o)
          },
          defineProperty: L,
          defineProperties: Q,
          getOwnPropertyDescriptor: H,
          getOwnPropertyNames: V,
          getOwnPropertySymbols: X,
        }),
        N &&
          u(
            u.S +
              u.F *
                (!G ||
                  i(function() {
                    var e = T()
                    return (
                      "[null]" != R([e]) ||
                      "{}" != R({ a: e }) ||
                      "{}" != R(Object(e))
                    )
                  })),
            "JSON",
            {
              stringify: function(e) {
                for (var o, r, s = [e], n = 1; arguments.length > n; )
                  s.push(arguments[n++])
                if (((r = o = s[1]), (v(o) || void 0 !== e) && !Y(e)))
                  return (
                    y(o) ||
                      (o = function(e, o) {
                        if (
                          ("function" == typeof r &&
                            (o = r.call(this, e, o)),
                          !Y(o))
                        )
                          return o
                      }),
                    (s[1] = o),
                    R.apply(N, s)
                  )
              },
            },
          ),
        T.prototype[I] ||
          r("../../node_modules/core-js/library/modules/_hide.js")(
            T.prototype,
            I,
            T.prototype.valueOf,
          ),
        j(T, "Symbol"),
        j(Math, "Math", !0),
        j(s.JSON, "JSON", !0)
    },
    "./src/index.js": function(e, o, r) {
      "use strict"
      var s = r(
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js",
      )
      Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.createReduxModule = function(e, o) {
          const r = t(o.actionTypes, (o, [r, s]) =>
              (0, n.default)({}, o, { [r]: `${e}/${s}` }),
            ),
            s = t(o.actionCreators, (o, [r, s]) => {
              return (0, n.default)({}, o, {
                [r]: (...o) => {
                  const r = s(...o)
                  return (0, n.default)({}, r, {
                    type: `${e}/${r.type}`,
                  })
                },
              })
            }),
            u = t(o.selectors, (o, [r, s]) => {
              return (0, n.default)({}, o, {
                [r]: (o, ...r) => s(o[e], ...r),
              })
            })
          return (0, n.default)(
            {
              reducer: function(r, s) {
                return o.reducer(
                  r,
                  (0, n.default)({}, s, {
                    type: s.type.replace(`${e}/`, ""),
                  }),
                )
              },
            },
            r,
            s,
            u,
          )
        }),
        (o.composeReduxModules = function(e, o) {
          return (0, n.default)({}, e, o, {
            reducer: (r, s) => o.reducer(e.reducer(r, s), s),
          })
        }),
        (o.extractReducers = function(e) {
          const o = {}
          for (const [r, s] of Object.entries(e))
            "object" == typeof s && null !== s && (o[r] = s.reducer)
          return o
        })
      var n = s(
        r(
          "../../node_modules/@babel/runtime/helpers/objectSpread.js",
        ),
      )
      function t(e, o) {
        return Object.entries(e).reduce(o, {})
      }
    },
  })
})
//# sourceMappingURL=index.js.map
