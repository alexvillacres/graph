(function (st) {
  typeof define == "function" && define.amd ? define(st) : st();
})(function () {
  "use strict";
  function st(u) {
    if (u === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }
    return u;
  }
  function yi(u, t) {
    u.prototype = Object.create(t.prototype),
      u.prototype.constructor = u,
      u.__proto__ = t;
  } /*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
  */

  var tt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Yt = { duration: .5, overwrite: !1, delay: 0 },
    De,
    G,
    R,
    at = 1e8,
    M = 1 / at,
    Ae = Math.PI * 2,
    zr = Ae / 4,
    Fr = 0,
    xi = Math.sqrt,
    Lr = Math.cos,
    Ir = Math.sin,
    V = function (t) {
      return typeof t == "string";
    },
    L = function (t) {
      return typeof t == "function";
    },
    gt = function (t) {
      return typeof t == "number";
    },
    Re = function (t) {
      return typeof t > "u";
    },
    _t = function (t) {
      return typeof t == "object";
    },
    H = function (t) {
      return t !== !1;
    },
    Ee = function () {
      return typeof window < "u";
    },
    pe = function (t) {
      return L(t) || V(t);
    },
    vi = typeof ArrayBuffer == "function" && ArrayBuffer.isView ||
      function () {},
    W = Array.isArray,
    ze = /(?:-?\.?\d|\.)+/gi,
    Ti = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    qt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Fe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    bi = /[+-]=-?[.\d]+/,
    wi = /[^,'"\[\]\s]+/gi,
    Br = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    z,
    lt,
    Le,
    Ie,
    et = {},
    me = {},
    Pi,
    Si = function (t) {
      return (me = Dt(t, et)) && Z;
    },
    Be = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()",
      );
    },
    Jt = function (t, e) {
      return !e && console.warn(t);
    },
    Oi = function (t, e) {
      return t && (et[t] = e) && me && (me[t] = e) || et;
    },
    te = function () {
      return 0;
    },
    Nr = { suppressEvents: !0, isStart: !0, kill: !1 },
    ge = { suppressEvents: !0, kill: !1 },
    Vr = { suppressEvents: !0 },
    Ne = {},
    Tt = [],
    Ve = {},
    ki,
    it = {},
    Ue = {},
    Ci = 30,
    ye = [],
    Ye = "",
    qe = function (t) {
      var e = t[0], i, r;
      if (_t(e) || L(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
        for (r = ye.length; r-- && !ye[r].targetTest(e););
        i = ye[r];
      }
      for (r = t.length; r--;) {
        t[r] && (t[r]._gsap || (t[r]._gsap = new rr(t[r], i))) ||
          t.splice(r, 1);
      }
      return t;
    },
    Mt = function (t) {
      return t._gsap || qe(ft(t))[0]._gsap;
    },
    Mi = function (t, e, i) {
      return (i = t[e]) && L(i)
        ? t[e]()
        : Re(i) && t.getAttribute && t.getAttribute(e) || i;
    },
    K = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    I = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    U = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Xt = function (t, e) {
      var i = e.charAt(0), r = parseFloat(e.substr(2));
      return t = parseFloat(t),
        i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
    },
    Ur = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
      return r < i;
    },
    xe = function () {
      var t = Tt.length, e = Tt.slice(0), i, r;
      for (Ve = {}, Tt.length = 0, i = 0; i < t; i++) {
        r = e[i],
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
      }
    },
    Di = function (t, e, i, r) {
      Tt.length && !G && xe(),
        t.render(e, i, G && e < 0 && (t._initted || t._startAt)),
        Tt.length && !G && xe();
    },
    Ai = function (t) {
      var e = parseFloat(t);
      return (e || e === 0) && (t + "").match(wi).length < 2
        ? e
        : V(t)
        ? t.trim()
        : t;
    },
    Ri = function (t) {
      return t;
    },
    ot = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    Yr = function (t) {
      return function (e, i) {
        for (var r in i) {
          r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
        }
      };
    },
    Dt = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    Ei = function u(t, e) {
      for (var i in e) {
        i !== "__proto__" && i !== "constructor" && i !== "prototype" &&
          (t[i] = _t(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
      }
      return t;
    },
    ve = function (t, e) {
      var i = {}, r;
      for (r in t) r in e || (i[r] = t[r]);
      return i;
    },
    ee = function (t) {
      var e = t.parent || z, i = t.keyframes ? Yr(W(t.keyframes)) : ot;
      if (H(t.inherit)) {
        for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
      }
      return t;
    },
    qr = function (t, e) {
      for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
      return i < 0;
    },
    zi = function (t, e, i, r, n) {
      var s = t[r], a;
      if (n) { for (a = e[n]; s && s[n] > a;) s = s._prev; }
      return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e),
        e._next ? e._next._prev = e : t[r] = e,
        e._prev = s,
        e.parent = e._dp = t,
        e;
    },
    Te = function (t, e, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = e._prev, s = e._next;
      n ? n._next = s : t[i] === e && (t[i] = s),
        s ? s._prev = n : t[r] === e && (t[r] = n),
        e._next = e._prev = e.parent = null;
    },
    bt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove &&
      t.parent.remove(t), t._act = 0;
    },
    At = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0)) {
        for (var i = t; i;) i._dirty = 1, i = i.parent;
      }
      return t;
    },
    Xr = function (t) {
      for (var e = t.parent; e && e.parent;) {
        e._dirty = 1, e.totalDuration(), e = e.parent;
      }
      return t;
    },
    Xe = function (t, e, i, r) {
      return t._startAt &&
        (G
          ? t._startAt.revert(ge)
          : t.vars.immediateRender && !t.vars.autoRevert ||
            t._startAt.render(e, !0, r));
    },
    Gr = function u(t) {
      return !t || t._ts && u(t.parent);
    },
    Fi = function (t) {
      return t._repeat ? Gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    },
    Gt = function (t, e) {
      var i = Math.floor(t /= e);
      return t && i === t ? i - 1 : i;
    },
    be = function (t, e) {
      return (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    },
    we = function (t) {
      return t._end = U(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || M) || 0),
      );
    },
    Pe = function (t, e) {
      var i = t._dp;
      return i && i.smoothChildTiming && t._ts &&
        (t._start = U(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
        ),
          we(t),
          i._dirty || At(i, t)),
        t;
    },
    Li = function (t, e) {
      var i;
      if (
        (e._time || !e._dur && e._initted ||
          e._start < t._time && (e._dur || !e.add)) &&
        (i = be(t.rawTime(), e),
          (!e._dur || re(0, e.totalDuration(), i) - e._tTime > M) &&
          e.render(i, !0)),
          At(t, e)._dp && t._initted && t._time >= t._dur && t._ts
      ) {
        if (t._dur < t.duration()) {
          for (i = t; i._dp;) {
            i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
          }
        }
        t._zTime = -M;
      }
    },
    ct = function (t, e, i, r) {
      return e.parent && bt(e),
        e._start = U(
          (gt(i) ? i : i || t !== z ? ut(t, i, e) : t._time) + e._delay,
        ),
        e._end = U(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
        ),
        zi(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Ge(e) || (t._recent = e),
        r || Li(t, e),
        t._ts < 0 && Pe(t, t._tTime),
        t;
    },
    Ii = function (t, e) {
      return (et.ScrollTrigger || Be("scrollTrigger", e)) &&
        et.ScrollTrigger.create(e, t);
    },
    Bi = function (t, e, i, r, n) {
      if (ti(t, e, n), !t._initted) return 1;
      if (
        !i && t._pt && !G &&
        (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) &&
        ki !== nt.frame
      ) return Tt.push(t), t._lazy = [n, r], 1;
    },
    Wr = function u(t) {
      var e = t.parent;
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
    },
    Ge = function (t) {
      var e = t.data;
      return e === "isFromStart" || e === "isStart";
    },
    jr = function (t, e, i, r) {
      var n = t.ratio,
        s = e < 0 ||
            !e &&
              (!t._start && Wr(t) && !(!t._initted && Ge(t)) ||
                (t._ts < 0 || t._dp._ts < 0) && !Ge(t))
          ? 0
          : 1,
        a = t._rDelay,
        o = 0,
        f,
        h,
        l;
      if (
        a && t._repeat &&
        (o = re(0, t._tDur, e),
          h = Gt(o, a),
          t._yoyo && h & 1 && (s = 1 - s),
          h !== Gt(t._tTime, a) &&
          (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())),
          s !== n || G || r || t._zTime === M || !e && t._zTime
      ) {
        if (!t._initted && Bi(t, e, r, i, o)) return;
        for (
          l = t._zTime,
            t._zTime = e || (i ? M : 0),
            i || (i = e && !l),
            t.ratio = s,
            t._from && (s = 1 - s),
            t._time = 0,
            t._tTime = o,
            f = t._pt;
          f;
        ) f.r(s, f.d), f = f._next;
        e < 0 && Xe(t, e, i, !0),
          t._onUpdate && !i && rt(t, "onUpdate"),
          o && t._repeat && !i && t.parent && rt(t, "onRepeat"),
          (e >= t._tDur || e < 0) && t.ratio === s &&
          (s && bt(t, 1),
            !i && !G &&
            (rt(t, s ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    $r = function (t, e, i) {
      var r;
      if (i > e) {
        for (r = t._first; r && r._start <= i;) {
          if (r.data === "isPause" && r._start > e) return r;
          r = r._next;
        }
      } else {for (r = t._last; r && r._start >= i;) {
          if (r.data === "isPause" && r._start < e) return r;
          r = r._prev;
        }}
    },
    Wt = function (t, e, i, r) {
      var n = t._repeat, s = U(e) || 0, a = t._tTime / t._tDur;
      return a && !r && (t._time *= s / t._dur),
        t._dur = s,
        t._tDur = n ? n < 0 ? 1e10 : U(s * (n + 1) + t._rDelay * n) : s,
        a > 0 && !r && Pe(t, t._tTime = t._tDur * a),
        t.parent && we(t),
        i || At(t.parent, t),
        t;
    },
    Ni = function (t) {
      return t instanceof $ ? At(t) : Wt(t, t._dur);
    },
    Hr = { _start: 0, endTime: te, totalDuration: te },
    ut = function u(t, e, i) {
      var r = t.labels,
        n = t._recent || Hr,
        s = t.duration() >= at ? n.endTime(!1) : t._dur,
        a,
        o,
        f;
      return V(e) && (isNaN(e) || e in r)
        ? (o = e.charAt(0),
          f = e.substr(-1) === "%",
          a = e.indexOf("="),
          o === "<" || o === ">"
            ? (a >= 0 && (e = e.replace(/=/, "")),
              (o === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (f ? (a < 0 ? n : i).totalDuration() / 100 : 1))
            : a < 0
            ? (e in r || (r[e] = s), r[e])
            : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
              f && i && (o = o / 100 * (W(i) ? i[0] : i).totalDuration()),
              a > 1 ? u(t, e.substr(0, a - 1), i) + o : s + o))
        : e == null
        ? s
        : +e;
    },
    ie = function (t, e, i) {
      var r = gt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
      if (r && (s.duration = e[1]), s.parent = i, t) {
        for (a = s, o = i; o && !("immediateRender" in a);) {
          a = o.vars.defaults || {}, o = H(o.vars.inherit) && o.parent;
        }
        s.immediateRender = H(a.immediateRender),
          t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
      }
      return new B(e[0], s, e[n + 1]);
    },
    wt = function (t, e) {
      return t || t === 0 ? e(t) : e;
    },
    re = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    j = function (t, e) {
      return !V(t) || !(e = Br.exec(t)) ? "" : e[1];
    },
    Kr = function (t, e, i) {
      return wt(i, function (r) {
        return re(t, e, r);
      });
    },
    We = [].slice,
    Vi = function (t, e) {
      return t && _t(t) && "length" in t &&
        (!e && !t.length || t.length - 1 in t && _t(t[0])) && !t.nodeType &&
        t !== lt;
    },
    Qr = function (t, e, i) {
      return i === void 0 && (i = []),
        t.forEach(function (r) {
          var n;
          return V(r) && !e || Vi(r, 1)
            ? (n = i).push.apply(n, ft(r))
            : i.push(r);
        }) || i;
    },
    ft = function (t, e, i) {
      return R && !e && R.selector
        ? R.selector(t)
        : V(t) && !i && (Le || !$t())
        ? We.call((e || Ie).querySelectorAll(t), 0)
        : W(t)
        ? Qr(t, i)
        : Vi(t)
        ? We.call(t, 0)
        : t
        ? [t]
        : [];
    },
    je = function (t) {
      return t = ft(t)[0] || Jt("Invalid scope") || {}, function (e) {
        var i = t.current || t.nativeElement || t;
        return ft(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? Jt("Invalid scope") || Ie.createElement("div")
            : t,
        );
      };
    },
    Ui = function (t) {
      return t.sort(function () {
        return .5 - Math.random();
      });
    },
    Yi = function (t) {
      if (L(t)) return t;
      var e = _t(t) ? t : { each: t },
        i = Rt(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        a = r > 0 && r < 1,
        o = isNaN(r) || a,
        f = e.axis,
        h = r,
        l = r;
      return V(r)
        ? h = l = { center: .5, edges: .5, end: 1 }[r] || 0
        : !a && o && (h = r[0], l = r[1]),
        function (c, d, p) {
          var _ = (p || e).length, m = s[_], y, x, v, T, g, w, P, S, b;
          if (!m) {
            if (b = e.grid === "auto" ? 0 : (e.grid || [1, at])[1], !b) {
              for (
                P = -at;
                P < (P = p[b++].getBoundingClientRect().left) && b < _;
              );
              b < _ && b--;
            }
            for (
              m = s[_] = [],
                y = o ? Math.min(b, _) * h - .5 : r % b,
                x = b === at ? 0 : o ? _ * l / b - .5 : r / b | 0,
                P = 0,
                S = at,
                w = 0;
              w < _;
              w++
            ) {
              v = w % b - y,
                T = x - (w / b | 0),
                m[w] = g = f ? Math.abs(f === "y" ? T : v) : xi(v * v + T * T),
                g > P && (P = g),
                g < S && (S = g);
            }
            r === "random" && Ui(m),
              m.max = P - S,
              m.min = S,
              m.v =
                _ =
                  (parseFloat(e.amount) || parseFloat(e.each) * (b > _
                        ? _ - 1
                        : f
                        ? f === "y" ? _ / b : b
                        : Math.max(b, _ / b)) ||
                    0) * (r === "edges" ? -1 : 1),
              m.b = _ < 0 ? n - _ : n,
              m.u = j(e.amount || e.each) || 0,
              i = i && _ < 0 ? tr(i) : i;
          }
          return _ = (m[c] - m.min) / m.max || 0,
            U(m.b + (i ? i(_) : _) * m.v) + m.u;
        };
    },
    $e = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var r = U(Math.round(parseFloat(i) / t) * t * e);
        return (r - r % 1) / e + (gt(i) ? 0 : j(i));
      };
    },
    qi = function (t, e) {
      var i = W(t), r, n;
      return !i && _t(t) &&
        (r = i = t.radius || at,
          t.values
            ? (t = ft(t.values), (n = !gt(t[0])) && (r *= r))
            : t = $e(t.increment)),
        wt(
          e,
          i
            ? L(t)
              ? function (s) {
                return n = t(s), Math.abs(n - s) <= r ? n : s;
              }
              : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    o = parseFloat(n ? s.y : 0),
                    f = at,
                    h = 0,
                    l = t.length,
                    c,
                    d;
                  l--;
                ) {
                  n
                    ? (c = t[l].x - a, d = t[l].y - o, c = c * c + d * d)
                    : c = Math.abs(t[l] - a), c < f && (f = c, h = l);
                }
                return h = !r || f <= r ? t[h] : s,
                  n || h === s || gt(s) ? h : h + j(s);
              }
            : $e(t),
        );
    },
    Xi = function (t, e, i, r) {
      return wt(W(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
        return W(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) &&
          (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
          Math.floor(
              Math.round(
                (t - i / 2 + Math.random() * (e - t + i * .99)) / i,
              ) * i * r,
            ) / r;
      });
    },
    Zr = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
        e[i] = arguments[i];
      }
      return function (r) {
        return e.reduce(function (n, s) {
          return s(n);
        }, r);
      };
    },
    Jr = function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || j(i));
      };
    },
    tn = function (t, e, i) {
      return Wi(t, e, 0, 1, i);
    },
    Gi = function (t, e, i) {
      return wt(i, function (r) {
        return t[~~e(r)];
      });
    },
    en = function u(t, e, i) {
      var r = e - t;
      return W(t) ? Gi(t, u(0, t.length), e) : wt(i, function (n) {
        return (r + (n - t) % r) % r + t;
      });
    },
    rn = function u(t, e, i) {
      var r = e - t, n = r * 2;
      return W(t) ? Gi(t, u(0, t.length - 1), e) : wt(i, function (s) {
        return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
      });
    },
    ne = function (t) {
      for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e));) {
        s = t.indexOf(")", r),
          a = t.charAt(r + 7) === "[",
          n = t.substr(r + 7, s - r - 7).match(a ? wi : ze),
          i += t.substr(e, r - e) +
            Xi(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
          e = s + 1;
      }
      return i + t.substr(e, t.length - e);
    },
    Wi = function (t, e, i, r, n) {
      var s = e - t, a = r - i;
      return wt(n, function (o) {
        return i + ((o - t) / s * a || 0);
      });
    },
    nn = function u(t, e, i, r) {
      var n = isNaN(t + e) ? 0 : function (d) {
        return (1 - d) * t + d * e;
      };
      if (!n) {
        var s = V(t), a = {}, o, f, h, l, c;
        if (i === !0 && (r = 1) && (i = null), s) t = { p: t }, e = { p: e };
        else if (W(t) && !W(e)) {
          for (h = [], l = t.length, c = l - 2, f = 1; f < l; f++) {
            h.push(u(t[f - 1], t[f]));
          }
          l--,
            n = function (p) {
              p *= l;
              var _ = Math.min(c, ~~p);
              return h[_](p - _);
            },
            i = e;
        } else r || (t = Dt(W(t) ? [] : {}, t));
        if (!h) {
          for (o in e) Ze.call(a, t, o, "get", e[o]);
          n = function (p) {
            return ri(p, a) || (s ? t.p : t);
          };
        }
      }
      return wt(i, n);
    },
    ji = function (t, e, i) {
      var r = t.labels, n = at, s, a, o;
      for (s in r) {
        a = r[s] - e,
          a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
      }
      return o;
    },
    rt = function (t, e, i) {
      var r = t.vars, n = r[e], s = R, a = t._ctx, o, f, h;
      if (n) {
        return o = r[e + "Params"],
          f = r.callbackScope || t,
          i && Tt.length && xe(),
          a && (R = a),
          h = o ? n.apply(f, o) : n.call(f),
          R = s,
          h;
      }
    },
    se = function (t) {
      return bt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!G),
        t.progress() < 1 && rt(t, "onInterrupt"),
        t;
    },
    jt,
    $i = [],
    Hi = function (t) {
      if (t) {
        if (t = !t.name && t.default || t, Ee() || t.headless) {
          var e = t.name,
            i = L(t),
            r = e && !i && t.init
              ? function () {
                this._props = [];
              }
              : t,
            n = {
              init: te,
              render: ri,
              add: Ze,
              kill: vn,
              modifier: xn,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: ii,
              aliases: {},
              register: 0,
            };
          if ($t(), t !== r) {
            if (it[e]) return;
            ot(r, ot(ve(t, n), s)),
              Dt(r.prototype, Dt(n, ve(t, s))),
              it[r.prop = e] = r,
              t.targetTest && (ye.push(r), Ne[e] = 1),
              e = (e === "css"
                ? "CSS"
                : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }
          Oi(e, r), t.register && t.register(Z, r, Q);
        } else $i.push(t);
      }
    },
    C = 255,
    ae = {
      aqua: [0, C, C],
      lime: [0, C, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, C],
      navy: [0, 0, 128],
      white: [C, C, C],
      olive: [128, 128, 0],
      yellow: [C, C, 0],
      orange: [C, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [C, 0, 0],
      pink: [C, 192, 203],
      cyan: [0, C, C],
      transparent: [C, C, C, 0],
    },
    He = function (t, e, i) {
      return t += t < 0 ? 1 : t > 1 ? -1 : 0,
        (t * 6 < 1
                ? e + (i - e) * t * 6
                : t < .5
                ? i
                : t * 3 < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) * C + .5 | 0;
    },
    Ki = function (t, e, i) {
      var r = t ? gt(t) ? [t >> 16, t >> 8 & C, t & C] : 0 : ae.black,
        n,
        s,
        a,
        o,
        f,
        h,
        l,
        c,
        d,
        p;
      if (!r) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ae[t]) {
          r = ae[t];
        } else if (t.charAt(0) === "#") {
          if (
            t.length < 6 &&
            (n = t.charAt(1),
              s = t.charAt(2),
              a = t.charAt(3),
              t = "#" + n + n + s + s + a + a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
              t.length === 9
          ) {
            return r = parseInt(t.substr(1, 6), 16),
              [r >> 16, r >> 8 & C, r & C, parseInt(t.substr(7), 16) / 255];
          }
          t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & C, t & C];
        } else if (t.substr(0, 3) === "hsl") {
          if (r = p = t.match(ze), !e) {
            o = +r[0] % 360 / 360,
              f = +r[1] / 100,
              h = +r[2] / 100,
              s = h <= .5 ? h * (f + 1) : h + f - h * f,
              n = h * 2 - s,
              r.length > 3 && (r[3] *= 1),
              r[0] = He(o + 1 / 3, n, s),
              r[1] = He(o, n, s),
              r[2] = He(o - 1 / 3, n, s);
          } else if (~t.indexOf("=")) {
            return r = t.match(Ti), i && r.length < 4 && (r[3] = 1), r;
          }
        } else r = t.match(ze) || ae.transparent;
        r = r.map(Number);
      }
      return e && !p &&
        (n = r[0] / C,
          s = r[1] / C,
          a = r[2] / C,
          l = Math.max(n, s, a),
          c = Math.min(n, s, a),
          h = (l + c) / 2,
          l === c
            ? o = f = 0
            : (d = l - c,
              f = h > .5 ? d / (2 - l - c) : d / (l + c),
              o = l === n
                ? (s - a) / d + (s < a ? 6 : 0)
                : l === s
                ? (a - n) / d + 2
                : (n - s) / d + 4,
              o *= 60),
          r[0] = ~~(o + .5),
          r[1] = ~~(f * 100 + .5),
          r[2] = ~~(h * 100 + .5)),
        i && r.length < 4 && (r[3] = 1),
        r;
    },
    Qi = function (t) {
      var e = [], i = [], r = -1;
      return t.split(Pt).forEach(function (n) {
        var s = n.match(qt) || [];
        e.push.apply(e, s), i.push(r += s.length + 1);
      }),
        e.c = i,
        e;
    },
    Zi = function (t, e, i) {
      var r = "",
        n = (t + r).match(Pt),
        s = e ? "hsla(" : "rgba(",
        a = 0,
        o,
        f,
        h,
        l;
      if (!n) return t;
      if (
        n = n.map(function (c) {
          return (c = Ki(c, e, 1)) &&
            s + (e
                ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3]
                : c.join(",")) +
              ")";
        }), i && (h = Qi(t), o = i.c, o.join(r) !== h.c.join(r))
      ) {
        for (f = t.replace(Pt, "1").split(qt), l = f.length - 1; a < l; a++) {
          r += f[a] +
            (~o.indexOf(a)
              ? n.shift() || s + "0,0,0,0)"
              : (h.length ? h : n.length ? n : i).shift());
        }
      }
      if (!f) {
        for (f = t.split(Pt), l = f.length - 1; a < l; a++) r += f[a] + n[a];
      }
      return r + f[l];
    },
    Pt = function () {
      var u =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in ae) u += "|" + t + "\\b";
      return new RegExp(u + ")", "gi");
    }(),
    sn = /hsl[a]?\(/,
    Ji = function (t) {
      var e = t.join(" "), i;
      if (Pt.lastIndex = 0, Pt.test(e)) {
        return i = sn.test(e),
          t[1] = Zi(t[1], i),
          t[0] = Zi(t[0], i, Qi(t[1])),
          !0;
      }
    },
    oe,
    nt = function () {
      var u = Date.now,
        t = 500,
        e = 33,
        i = u(),
        r = i,
        n = 1e3 / 240,
        s = n,
        a = [],
        o,
        f,
        h,
        l,
        c,
        d,
        p = function _(m) {
          var y = u() - r, x = m === !0, v, T, g, w;
          if (
            (y > t || y < 0) && (i += y - e),
              r += y,
              g = r - i,
              v = g - s,
              (v > 0 || x) &&
              (w = ++l.frame,
                c = g - l.time * 1e3,
                l.time = g = g / 1e3,
                s += v + (v >= n ? 4 : n - v),
                T = 1),
              x || (o = f(_)),
              T
          ) { for (d = 0; d < a.length; d++) a[d](g, c, w, m); }
        };
      return l = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (m) {
          return c / (1e3 / (m || 60));
        },
        wake: function () {
          Pi &&
            (!Le && Ee() &&
              (lt = Le = window,
                Ie = lt.document || {},
                et.gsap = Z,
                (lt.gsapVersions || (lt.gsapVersions = [])).push(Z.version),
                Si(me || lt.GreenSockGlobals || !lt.gsap && lt || {}),
                $i.forEach(Hi)),
              h = typeof requestAnimationFrame < "u" && requestAnimationFrame,
              o && l.sleep(),
              f = h || function (m) {
                return setTimeout(m, s - l.time * 1e3 + 1 | 0);
              },
              oe = 1,
              p(2));
        },
        sleep: function () {
          (h ? cancelAnimationFrame : clearTimeout)(o), oe = 0, f = te;
        },
        lagSmoothing: function (m, y) {
          t = m || 1 / 0, e = Math.min(y || 33, t);
        },
        fps: function (m) {
          n = 1e3 / (m || 240), s = l.time * 1e3 + n;
        },
        add: function (m, y, x) {
          var v = y
            ? function (T, g, w, P) {
              m(T, g, w, P), l.remove(v);
            }
            : m;
          return l.remove(m), a[x ? "unshift" : "push"](v), $t(), v;
        },
        remove: function (m, y) {
          ~(y = a.indexOf(m)) && a.splice(y, 1) && d >= y && d--;
        },
        _listeners: a,
      },
        l;
    }(),
    $t = function () {
      return !oe && nt.wake();
    },
    O = {},
    an = /^[\d.\-M][\d.\-,\s]/,
    on = /["']/g,
    un = function (t) {
      for (
        var e = {},
          i = t.substr(1, t.length - 3).split(":"),
          r = i[0],
          n = 1,
          s = i.length,
          a,
          o,
          f;
        n < s;
        n++
      ) {
        o = i[n],
          a = n !== s - 1 ? o.lastIndexOf(",") : o.length,
          f = o.substr(0, a),
          e[r] = isNaN(f) ? f.replace(on, "").trim() : +f,
          r = o.substr(a + 1).trim();
      }
      return e;
    },
    fn = function (t) {
      var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
      return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
    },
    hn = function (t) {
      var e = (t + "").split("("), i = O[e[0]];
      return i && e.length > 1 && i.config
        ? i.config.apply(
          null,
          ~t.indexOf("{") ? [un(e[1])] : fn(t).split(",").map(Ai),
        )
        : O._CE && an.test(t)
        ? O._CE("", t)
        : i;
    },
    tr = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    er = function u(t, e) {
      for (var i = t._first, r; i;) {
        i instanceof $
          ? u(i, e)
          : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e &&
            (i.timeline
              ? u(i.timeline, e)
              : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)),
          i = i._next;
      }
    },
    Rt = function (t, e) {
      return t && (L(t) ? t : O[t] || hn(t)) || e;
    },
    Et = function (t, e, i, r) {
      i === void 0 && (i = function (o) {
        return 1 - e(1 - o);
      }),
        r === void 0 && (r = function (o) {
          return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
        });
      var n = { easeIn: e, easeOut: i, easeInOut: r }, s;
      return K(t, function (a) {
        O[a] = et[a] = n, O[s = a.toLowerCase()] = i;
        for (var o in n) {
          O[
            s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")
          ] = O[a + "." + o] = n[o];
        }
      }),
        n;
    },
    ir = function (t) {
      return function (e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2;
      };
    },
    Ke = function u(t, e, i) {
      var r = e >= 1 ? e : 1,
        n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
        s = n / Ae * (Math.asin(1 / r) || 0),
        a = function (h) {
          return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Ir((h - s) * n) + 1;
        },
        o = t === "out" ? a : t === "in"
          ? function (f) {
            return 1 - a(1 - f);
          }
          : ir(a);
      return n = Ae / n,
        o.config = function (f, h) {
          return u(t, f, h);
        },
        o;
    },
    Qe = function u(t, e) {
      e === void 0 && (e = 1.70158);
      var i = function (s) {
          return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
        },
        r = t === "out" ? i : t === "in"
          ? function (n) {
            return 1 - i(1 - n);
          }
          : ir(i);
      return r.config = function (n) {
        return u(t, n);
      },
        r;
    };
  K("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, t) {
    var e = t < 5 ? t + 1 : t;
    Et(
      u + ",Power" + (e - 1),
      t
        ? function (i) {
          return Math.pow(i, e);
        }
        : function (i) {
          return i;
        },
      function (i) {
        return 1 - Math.pow(1 - i, e);
      },
      function (i) {
        return i < .5
          ? Math.pow(i * 2, e) / 2
          : 1 - Math.pow((1 - i) * 2, e) / 2;
      },
    );
  }),
    O.Linear.easeNone = O.none = O.Linear.easeIn,
    Et("Elastic", Ke("in"), Ke("out"), Ke()),
    function (u, t) {
      var e = 1 / t,
        i = 2 * e,
        r = 2.5 * e,
        n = function (a) {
          return a < e
            ? u * a * a
            : a < i
            ? u * Math.pow(a - 1.5 / t, 2) + .75
            : a < r
            ? u * (a -= 2.25 / t) * a + .9375
            : u * Math.pow(a - 2.625 / t, 2) + .984375;
        };
      Et("Bounce", function (s) {
        return 1 - n(1 - s);
      }, n);
    }(7.5625, 2.75),
    Et("Expo", function (u) {
      return u ? Math.pow(2, 10 * (u - 1)) : 0;
    }),
    Et("Circ", function (u) {
      return -(xi(1 - u * u) - 1);
    }),
    Et("Sine", function (u) {
      return u === 1 ? 1 : -Lr(u * zr) + 1;
    }),
    Et("Back", Qe("in"), Qe("out"), Qe()),
    O.SteppedEase = O.steps = et.SteppedEase = {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - M;
        return function (a) {
          return ((r * re(0, s, a) | 0) + n) * i;
        };
      },
    },
    Yt.ease = O["quad.out"],
    K(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (u) {
        return Ye += u + "," + u + "Params,";
      },
    );
  var rr = function (t, e) {
      this.id = Fr++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : Mi,
        this.set = e ? e.getSetter : ii;
    },
    ue = function () {
      function u(e) {
        this.vars = e,
          this._delay = +e.delay || 0,
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          (this._rDelay = e.repeatDelay || 0,
            this._yoyo = !!e.yoyo || !!e.yoyoEase),
          this._ts = 1,
          Wt(this, +e.duration, 1, 1),
          this.data = e.data,
          R && (this._ctx = R, R.data.push(this)),
          oe || nt.wake();
      }
      var t = u.prototype;
      return t.delay = function (i) {
        return i || i === 0
          ? (this.parent && this.parent.smoothChildTiming &&
            this.startTime(this._start + i - this._delay),
            this._delay = i,
            this)
          : this._delay;
      },
        t.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
            )
            : this.totalDuration() && this._dur;
        },
        t.totalDuration = function (i) {
          return arguments.length
            ? (this._dirty = 0,
              Wt(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1),
              ))
            : this._tDur;
        },
        t.totalTime = function (i, r) {
          if ($t(), !arguments.length) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              Pe(this, i), !n._dp || n.parent || Li(n, this);
              n && n.parent;
            ) {
              n.parent._time !== n._start + (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0), n = n.parent;
            }
            !this.parent && this._dp.autoRemoveChildren &&
              (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 ||
                !this._tDur && !i) &&
              ct(this._dp, this, this._start - this._delay);
          }
          return (this._tTime !== i || !this._dur && !r ||
            this._initted && Math.abs(this._zTime) === M ||
            !i && !this._initted && (this.add || this._ptLookup)) &&
            (this._ts || (this._pTime = i), Di(this, i, r)),
            this;
        },
        t.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
              Math.min(this.totalDuration(), i + Fi(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
              r,
            )
            : this._time;
        },
        t.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
            ? 1
            : 0;
        },
        t.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
              this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Fi(this),
              r,
            )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        },
        t.iteration = function (i, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * n, r)
            : this._repeat
            ? Gt(this._tTime, n) + 1
            : 1;
        },
        t.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -M ? 0 : this._rts;
          if (this._rts === i) return this;
          var n = this.parent && this._ts
            ? be(this.parent._time, this)
            : this._tTime;
          return this._rts = +i || 0,
            this._ts = this._ps || i === -M ? 0 : this._rts,
            this.totalTime(re(-Math.abs(this._delay), this._tDur, n), r !== !1),
            we(this),
            Xr(this);
        },
        t.paused = function (i) {
          return arguments.length
            ? (this._ps !== i && (this._ps = i,
              i
                ? (this._pTime = this._tTime ||
                  Math.max(-this._delay, this.rawTime()),
                  this._ts = this._act = 0)
                : ($t(),
                  this._ts = this._rts,
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== M &&
                      (this._tTime -= M),
                  ))),
              this)
            : this._ps;
        },
        t.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) &&
              ct(r, this, i - this._delay),
              this;
          }
          return this._start;
        },
        t.endTime = function (i) {
          return this._start +
            (H(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1);
        },
        t.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
                (!this._ts ||
                  this._repeat && this._time && this.totalProgress() < 1)
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? be(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        },
        t.revert = function (i) {
          i === void 0 && (i = Vr);
          var r = G;
          return G = i,
            (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
              this.totalTime(-.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            G = r,
            this;
        },
        t.globalTime = function (i) {
          for (var r = this, n = arguments.length ? i : r.rawTime(); r;) {
            n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
          }
          return !this.parent && this._sat ? this._sat.globalTime(i) : n;
        },
        t.repeat = function (i) {
          return arguments.length
            ? (this._repeat = i === 1 / 0 ? -2 : i, Ni(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        },
        t.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return this._rDelay = i, Ni(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        },
        t.yoyo = function (i) {
          return arguments.length ? (this._yoyo = i, this) : this._yoyo;
        },
        t.seek = function (i, r) {
          return this.totalTime(ut(this, i), H(r));
        },
        t.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, H(r));
        },
        t.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        },
        t.reverse = function (i, r) {
          return i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1);
        },
        t.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        },
        t.resume = function () {
          return this.paused(!1);
        },
        t.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -M : 0)),
              this)
            : this._rts < 0;
        },
        t.invalidate = function () {
          return this._initted = this._act = 0, this._zTime = -M, this;
        },
        t.isActive = function () {
          var i = this.parent || this._dp, r = this._start, n;
          return !!(!i ||
            this._ts && this._initted && i.isActive() &&
              (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - M);
        },
        t.eventCallback = function (i, r, n) {
          var s = this.vars;
          return arguments.length > 1
            ? (r
              ? (s[i] = r,
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete s[i],
              this)
            : s[i];
        },
        t.then = function (i) {
          var r = this;
          return new Promise(function (n) {
            var s = L(i) ? i : Ri,
              a = function () {
                var f = r.then;
                r.then = null,
                  L(s) && (s = s(r)) && (s.then || s === r) && (r.then = f),
                  n(s),
                  r.then = f;
              };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 ||
              !r._tTime && r._ts < 0
              ? a()
              : r._prom = a;
          });
        },
        t.kill = function () {
          se(this);
        },
        u;
    }();
  ot(ue.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -M,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var $ = function (u) {
    yi(t, u);
    function t(i, r) {
      var n;
      return i === void 0 && (i = {}),
        n = u.call(this, i) || this,
        n.labels = {},
        n.smoothChildTiming = !!i.smoothChildTiming,
        n.autoRemoveChildren = !!i.autoRemoveChildren,
        n._sort = H(i.sortChildren),
        z && ct(i.parent || z, st(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Ii(st(n), i.scrollTrigger),
        n;
    }
    var e = t.prototype;
    return e.to = function (r, n, s) {
      return ie(0, arguments, this), this;
    },
      e.from = function (r, n, s) {
        return ie(1, arguments, this), this;
      },
      e.fromTo = function (r, n, s, a) {
        return ie(2, arguments, this), this;
      },
      e.set = function (r, n, s) {
        return n.duration = 0,
          n.parent = this,
          ee(n).repeatDelay || (n.repeat = 0),
          n.immediateRender = !!n.immediateRender,
          new B(r, n, ut(this, s), 1),
          this;
      },
      e.call = function (r, n, s) {
        return ct(this, B.delayedCall(0, r, n), s);
      },
      e.staggerTo = function (r, n, s, a, o, f, h) {
        return s.duration = n,
          s.stagger = s.stagger || a,
          s.onComplete = f,
          s.onCompleteParams = h,
          s.parent = this,
          new B(r, s, ut(this, o)),
          this;
      },
      e.staggerFrom = function (r, n, s, a, o, f, h) {
        return s.runBackwards = 1,
          ee(s).immediateRender = H(s.immediateRender),
          this.staggerTo(r, n, s, a, o, f, h);
      },
      e.staggerFromTo = function (r, n, s, a, o, f, h, l) {
        return a.startAt = s,
          ee(a).immediateRender = H(a.immediateRender),
          this.staggerTo(r, n, a, o, f, h, l);
      },
      e.render = function (r, n, s) {
        var a = this._time,
          o = this._dirty ? this.totalDuration() : this._tDur,
          f = this._dur,
          h = r <= 0 ? 0 : U(r),
          l = this._zTime < 0 != r < 0 && (this._initted || !f),
          c,
          d,
          p,
          _,
          m,
          y,
          x,
          v,
          T,
          g,
          w,
          P;
        if (
          this !== z && h > o && r >= 0 && (h = o), h !== this._tTime || s || l
        ) {
          if (
            a !== this._time && f && (h += this._time - a, r += this._time - a),
              c = h,
              T = this._start,
              v = this._ts,
              y = !v,
              l && (f || (a = this._zTime), (r || !n) && (this._zTime = r)),
              this._repeat
          ) {
            if (
              w = this._yoyo, m = f + this._rDelay, this._repeat < -1 && r < 0
            ) return this.totalTime(m * 100 + r, n, s);
            if (
              c = U(h % m),
                h === o
                  ? (_ = this._repeat, c = f)
                  : (_ = ~~(h / m),
                    _ && _ === h / m && (c = f, _--),
                    c > f && (c = f)),
                g = Gt(this._tTime, m),
                !a && this._tTime && g !== _ &&
                this._tTime - g * m - this._dur <= 0 && (g = _),
                w && _ & 1 && (c = f - c, P = 1),
                _ !== g && !this._lock
            ) {
              var S = w && g & 1, b = S === (w && _ & 1);
              if (
                _ < g && (S = !S),
                  a = S ? 0 : h % f ? f : h,
                  this._lock = 1,
                  this.render(a || (P ? 0 : U(_ * m)), n, !f)._lock = 0,
                  this._tTime = h,
                  !n && this.parent && rt(this, "onRepeat"),
                  this.vars.repeatRefresh && !P &&
                  (this.invalidate()._lock = 1),
                  a && a !== this._time || y !== !this._ts ||
                  this.vars.onRepeat && !this.parent && !this._act
              ) return this;
              if (
                f = this._dur,
                  o = this._tDur,
                  b &&
                  (this._lock = 2,
                    a = S ? f : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !P && this.invalidate()),
                  this._lock = 0,
                  !this._ts && !y
              ) return this;
              er(this, P);
            }
          }
          if (
            this._hasPause && !this._forcing && this._lock < 2 &&
            (x = $r(this, U(a), U(c)), x && (h -= c - (c = x._start))),
              this._tTime = h,
              this._time = c,
              this._act = !v,
              this._initted ||
              (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = r,
                a = 0),
              !a && c && !n && !_ && (rt(this, "onStart"), this._tTime !== h)
          ) return this;
          if (c >= a && r >= 0) {
            for (d = this._first; d;) {
              if (p = d._next, (d._act || c >= d._start) && d._ts && x !== d) {
                if (d.parent !== this) return this.render(r, n, s);
                if (
                  d.render(
                    d._ts > 0
                      ? (c - d._start) * d._ts
                      : (d._dirty ? d.totalDuration() : d._tDur) +
                        (c - d._start) * d._ts,
                    n,
                    s,
                  ), c !== this._time || !this._ts && !y
                ) {
                  x = 0, p && (h += this._zTime = -M);
                  break;
                }
              }
              d = p;
            }
          } else {
            d = this._last;
            for (var k = r < 0 ? r : c; d;) {
              if (p = d._prev, (d._act || k <= d._end) && d._ts && x !== d) {
                if (d.parent !== this) return this.render(r, n, s);
                if (
                  d.render(
                    d._ts > 0
                      ? (k - d._start) * d._ts
                      : (d._dirty ? d.totalDuration() : d._tDur) +
                        (k - d._start) * d._ts,
                    n,
                    s || G && (d._initted || d._startAt),
                  ), c !== this._time || !this._ts && !y
                ) {
                  x = 0, p && (h += this._zTime = k ? -M : M);
                  break;
                }
              }
              d = p;
            }
          }
          if (
            x && !n &&
            (this.pause(),
              x.render(c >= a ? 0 : -M)._zTime = c >= a ? 1 : -1,
              this._ts)
          ) return this._start = T, we(this), this.render(r, n, s);
          this._onUpdate && !n && rt(this, "onUpdate", !0),
            (h === o && this._tTime >= this.totalDuration() || !h && a) &&
            (T === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !f) && (h === o && this._ts > 0 || !h && this._ts < 0) &&
                bt(this, 1),
                !n && !(r < 0 && !a) && (h || a || !o) &&
                (rt(
                  this,
                  h === o && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                  this._prom && !(h < o && this.timeScale() > 0) &&
                  this._prom())));
        }
        return this;
      },
      e.add = function (r, n) {
        var s = this;
        if (gt(n) || (n = ut(this, n, r)), !(r instanceof ue)) {
          if (W(r)) {
            return r.forEach(function (a) {
              return s.add(a, n);
            }),
              this;
          }
          if (V(r)) return this.addLabel(r, n);
          if (L(r)) r = B.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ct(this, r, n) : this;
      },
      e.getChildren = function (r, n, s, a) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = -at);
        for (var o = [], f = this._first; f;) {
          f._start >= a &&
          (f instanceof B
            ? n && o.push(f)
            : (s && o.push(f), r && o.push.apply(o, f.getChildren(!0, n, s)))),
            f = f._next;
        }
        return o;
      },
      e.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;) {
          if (n[s].vars.id === r) return n[s];
        }
      },
      e.remove = function (r) {
        return V(r)
          ? this.removeLabel(r)
          : L(r)
          ? this.killTweensOf(r)
          : (Te(this, r),
            r === this._recent && (this._recent = this._last),
            At(this));
      },
      e.totalTime = function (r, n) {
        return arguments.length
          ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = U(
              nt.time - (this._ts > 0
                ? r / this._ts
                : (this.totalDuration() - r) / -this._ts),
            )),
            u.prototype.totalTime.call(this, r, n),
            this._forcing = 0,
            this)
          : this._tTime;
      },
      e.addLabel = function (r, n) {
        return this.labels[r] = ut(this, n), this;
      },
      e.removeLabel = function (r) {
        return delete this.labels[r], this;
      },
      e.addPause = function (r, n, s) {
        var a = B.delayedCall(0, n || te, s);
        return a.data = "isPause", this._hasPause = 1, ct(this, a, ut(this, r));
      },
      e.removePause = function (r) {
        var n = this._first;
        for (r = ut(this, r); n;) {
          n._start === r && n.data === "isPause" && bt(n), n = n._next;
        }
      },
      e.killTweensOf = function (r, n, s) {
        for (var a = this.getTweensOf(r, s), o = a.length; o--;) {
          St !== a[o] && a[o].kill(r, n);
        }
        return this;
      },
      e.getTweensOf = function (r, n) {
        for (var s = [], a = ft(r), o = this._first, f = gt(n), h; o;) {
          o instanceof B
            ? Ur(o._targets, a) && (f
              ? (!St || o._initted && o._ts) && o.globalTime(0) <= n &&
                o.globalTime(o.totalDuration()) > n
              : !n || o.isActive()) &&
              s.push(o)
            : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h),
            o = o._next;
        }
        return s;
      },
      e.tweenTo = function (r, n) {
        n = n || {};
        var s = this,
          a = ut(s, r),
          o = n,
          f = o.startAt,
          h = o.onStart,
          l = o.onStartParams,
          c = o.immediateRender,
          d,
          p = B.to(
            s,
            ot({
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration: n.duration ||
                Math.abs(
                  (a - (f && "time" in f ? f.time : s._time)) / s.timeScale(),
                ) || M,
              onStart: function () {
                if (s.pause(), !d) {
                  var m = n.duration ||
                    Math.abs(
                      (a - (f && "time" in f ? f.time : s._time)) /
                        s.timeScale(),
                    );
                  p._dur !== m && Wt(p, m, 0, 1).render(p._time, !0, !0), d = 1;
                }
                h && h.apply(p, l || []);
              },
            }, n),
          );
        return c ? p.render(0) : p;
      },
      e.tweenFromTo = function (r, n, s) {
        return this.tweenTo(n, ot({ startAt: { time: ut(this, r) } }, s));
      },
      e.recent = function () {
        return this._recent;
      },
      e.nextLabel = function (r) {
        return r === void 0 && (r = this._time), ji(this, ut(this, r));
      },
      e.previousLabel = function (r) {
        return r === void 0 && (r = this._time), ji(this, ut(this, r), 1);
      },
      e.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + M);
      },
      e.shiftChildren = function (r, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, o = this.labels, f; a;) {
          a._start >= s && (a._start += r, a._end += r), a = a._next;
        }
        if (n) { for (f in o) o[f] >= s && (o[f] += r); }
        return At(this);
      },
      e.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(r), n = n._next;
        return u.prototype.invalidate.call(this, r);
      },
      e.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          At(this);
      },
      e.totalDuration = function (r) {
        var n = 0, s = this, a = s._last, o = at, f, h, l;
        if (arguments.length) {
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -r : r),
          );
        }
        if (s._dirty) {
          for (l = s.parent; a;) {
            f = a._prev,
              a._dirty && a.totalDuration(),
              h = a._start,
              h > o && s._sort && a._ts && !s._lock
                ? (s._lock = 1, ct(s, a, h - a._delay, 1)._lock = 0)
                : o = h,
              h < 0 && a._ts &&
              (n -= h,
                (!l && !s._dp || l && l.smoothChildTiming) &&
                (s._start += h / s._ts, s._time -= h, s._tTime -= h),
                s.shiftChildren(-h, !1, -1 / 0),
                o = 0),
              a._end > n && a._ts && (n = a._end),
              a = f;
          }
          Wt(s, s === z && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
        }
        return s._tDur;
      },
      t.updateRoot = function (r) {
        if (z._ts && (Di(z, be(r, z)), ki = nt.frame), nt.frame >= Ci) {
          Ci += tt.autoSleep || 120;
          var n = z._first;
          if ((!n || !n._ts) && tt.autoSleep && nt._listeners.length < 2) {
            for (; n && !n._ts;) n = n._next;
            n || nt.sleep();
          }
        }
      },
      t;
  }(ue);
  ot($.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var _n = function (t, e, i, r, n, s, a) {
      var o = new Q(this._pt, t, e, 0, 1, fr, null, n),
        f = 0,
        h = 0,
        l,
        c,
        d,
        p,
        _,
        m,
        y,
        x;
      for (
        o.b = i,
          o.e = r,
          i += "",
          r += "",
          (y = ~r.indexOf("random(")) && (r = ne(r)),
          s && (x = [i, r], s(x, t, e), i = x[0], r = x[1]),
          c = i.match(Fe) || [];
        l = Fe.exec(r);
      ) {
        p = l[0],
          _ = r.substring(f, l.index),
          d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1),
          p !== c[h++] &&
          (m = parseFloat(c[h - 1]) || 0,
            o._pt = {
              _next: o._pt,
              p: _ || h === 1 ? _ : ",",
              s: m,
              c: p.charAt(1) === "=" ? Xt(m, p) - m : parseFloat(p) - m,
              m: d && d < 4 ? Math.round : 0,
            },
            f = Fe.lastIndex);
      }
      return o.c = f < r.length ? r.substring(f, r.length) : "",
        o.fp = a,
        (bi.test(r) || y) && (o.e = 0),
        this._pt = o,
        o;
    },
    Ze = function (t, e, i, r, n, s, a, o, f, h) {
      L(r) && (r = r(n || 0, t, s));
      var l = t[e],
        c = i !== "get" ? i : L(l)
          ? f
            ? t[
              e.indexOf("set") || !L(t["get" + e.substr(3)])
                ? e
                : "get" + e.substr(3)
            ](f)
            : t[e]()
          : l,
        d = L(l) ? f ? mn : or : ei,
        p;
      if (
        V(r) &&
        (~r.indexOf("random(") && (r = ne(r)),
          r.charAt(1) === "=" &&
          (p = Xt(c, r) + (j(c) || 0), (p || p === 0) && (r = p))),
          !h || c !== r || Je
      ) {
        return !isNaN(c * r) && r !== ""
          ? (p = new Q(
            this._pt,
            t,
            e,
            +c || 0,
            r - (c || 0),
            typeof l == "boolean" ? yn : ur,
            0,
            d,
          ),
            f && (p.fp = f),
            a && p.modifier(a, this, t),
            this._pt = p)
          : (!l && !(e in t) && Be(e, r),
            _n.call(this, t, e, c, r, d, o || tt.stringFilter, f));
      }
    },
    ln = function (t, e, i, r, n) {
      if (
        L(t) && (t = fe(t, n, e, i, r)),
          !_t(t) || t.style && t.nodeType || W(t) || vi(t)
      ) return V(t) ? fe(t, n, e, i, r) : t;
      var s = {}, a;
      for (a in t) s[a] = fe(t[a], n, e, i, r);
      return s;
    },
    nr = function (t, e, i, r, n, s) {
      var a, o, f, h;
      if (
        it[t] &&
        (a = new it[t]()).init(
            n,
            a.rawVars ? e[t] : ln(e[t], r, n, s, i),
            i,
            r,
            s,
          ) !== !1 &&
        (i._pt = o = new Q(i._pt, n, t, 0, 1, a.render, a, 0, a.priority),
          i !== jt)
      ) {
        for (
          f = i._ptLookup[i._targets.indexOf(n)], h = a._props.length;
          h--;
        ) f[a._props[h]] = o;
      }
      return a;
    },
    St,
    Je,
    ti = function u(t, e, i) {
      var r = t.vars,
        n = r.ease,
        s = r.startAt,
        a = r.immediateRender,
        o = r.lazy,
        f = r.onUpdate,
        h = r.runBackwards,
        l = r.yoyoEase,
        c = r.keyframes,
        d = r.autoRevert,
        p = t._dur,
        _ = t._startAt,
        m = t._targets,
        y = t.parent,
        x = y && y.data === "nested" ? y.vars.targets : m,
        v = t._overwrite === "auto" && !De,
        T = t.timeline,
        g,
        w,
        P,
        S,
        b,
        k,
        E,
        D,
        A,
        X,
        Y,
        N,
        q;
      if (
        T && (!c || !n) && (n = "none"),
          t._ease = Rt(n, Yt.ease),
          t._yEase = l ? tr(Rt(l === !0 ? n : l, Yt.ease)) : 0,
          l && t._yoyo && !t._repeat &&
          (l = t._yEase, t._yEase = t._ease, t._ease = l),
          t._from = !T && !!r.runBackwards,
          !T || c && !r.stagger
      ) {
        if (
          D = m[0] ? Mt(m[0]).harness : 0,
            N = D && r[D.prop],
            g = ve(r, Ne),
            _ && (_._zTime < 0 && _.progress(1),
              e < 0 && h && a && !d
                ? _.render(-1, !0)
                : _.revert(h && p ? ge : Nr),
              _._lazy = 0),
            s
        ) {
          if (
            bt(
              t._startAt = B.set(
                m,
                ot({
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: !_ && H(o),
                  startAt: null,
                  delay: 0,
                  onUpdate: f && function () {
                    return rt(t, "onUpdate");
                  },
                  stagger: 0,
                }, s),
              ),
            ),
              t._startAt._dp = 0,
              t._startAt._sat = t,
              e < 0 && (G || !a && !d) && t._startAt.revert(ge),
              a && p && e <= 0 && i <= 0
          ) {
            e && (t._zTime = e);
            return;
          }
        } else if (h && p && !_) {
          if (
            e && (a = !1),
              P = ot({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !_ && H(o),
                immediateRender: a,
                stagger: 0,
                parent: y,
              }, g),
              N && (P[D.prop] = N),
              bt(t._startAt = B.set(m, P)),
              t._startAt._dp = 0,
              t._startAt._sat = t,
              e < 0 && (G ? t._startAt.revert(ge) : t._startAt.render(-1, !0)),
              t._zTime = e,
              !a
          ) u(t._startAt, M, M);
          else if (!e) return;
        }
        for (
          t._pt = t._ptCache = 0, o = p && H(o) || o && !p, w = 0;
          w < m.length;
          w++
        ) {
          if (
            b = m[w],
              E = b._gsap || qe(m)[w]._gsap,
              t._ptLookup[w] = X = {},
              Ve[E.id] && Tt.length && xe(),
              Y = x === m ? w : x.indexOf(b),
              D && (A = new D()).init(b, N || g, t, Y, x) !== !1 &&
              (t._pt = S = new Q(
                t._pt,
                b,
                A.name,
                0,
                1,
                A.render,
                A,
                0,
                A.priority,
              ),
                A._props.forEach(function (ht) {
                  X[ht] = S;
                }),
                A.priority && (k = 1)),
              !D || N
          ) {
            for (P in g) {
              it[P] && (A = nr(P, g, t, Y, b, x))
                ? A.priority && (k = 1)
                : X[P] = S = Ze.call(
                  t,
                  b,
                  P,
                  "get",
                  g[P],
                  Y,
                  x,
                  0,
                  r.stringFilter,
                );
            }
          }
          t._op && t._op[w] && t.kill(b, t._op[w]),
            v && t._pt &&
            (St = t,
              z.killTweensOf(b, X, t.globalTime(e)),
              q = !t.parent,
              St = 0),
            t._pt && o && (Ve[E.id] = 1);
        }
        k && hr(t), t._onInit && t._onInit(t);
      }
      t._onUpdate = f,
        t._initted = (!t._op || t._pt) && !q,
        c && e <= 0 && T.render(at, !0, !0);
    },
    cn = function (t, e, i, r, n, s, a, o) {
      var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, l, c, d;
      if (!f) {
        for (
          f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
          d--;
        ) {
          if (h = c[d][e], h && h.d && h.d._pt) {
            for (h = h.d._pt; h && h.p !== e && h.fp !== e;) h = h._next;
          }
          if (!h) {
            return Je = 1,
              t.vars[e] = "+=0",
              ti(t, a),
              Je = 0,
              o ? Jt(e + " not eligible for reset") : 1;
          }
          f.push(h);
        }
      }
      for (d = f.length; d--;) {
        l = f[d],
          h = l._pt || l,
          h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c,
          h.c = i - h.s,
          l.e && (l.e = I(i) + j(l.e)),
          l.b && (l.b = h.s + j(l.b));
      }
    },
    dn = function (t, e) {
      var i = t[0] ? Mt(t[0]).harness : 0, r = i && i.aliases, n, s, a, o;
      if (!r) return e;
      n = Dt({}, e);
      for (s in r) {
        if (s in n) {
          for (o = r[s].split(","), a = o.length; a--;) n[o[a]] = n[s];
        }
      }
      return n;
    },
    pn = function (t, e, i, r) {
      var n = e.ease || r || "power1.inOut", s, a;
      if (W(e)) {
        a = i[t] || (i[t] = []),
          e.forEach(function (o, f) {
            return a.push({ t: f / (e.length - 1) * 100, v: o, e: n });
          });
      } else {for (s in e) {
          a = i[s] || (i[s] = []),
            s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n });
        }}
    },
    fe = function (t, e, i, r, n) {
      return L(t)
        ? t.call(e, i, r, n)
        : V(t) && ~t.indexOf("random(")
        ? ne(t)
        : t;
    },
    sr = Ye + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    ar = {};
  K(sr + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
    return ar[u] = 1;
  });
  var B = function (u) {
    yi(t, u);
    function t(i, r, n, s) {
      var a;
      typeof r == "number" && (n.duration = r, r = n, n = null),
        a = u.call(this, s ? r : ee(r)) || this;
      var o = a.vars,
        f = o.duration,
        h = o.delay,
        l = o.immediateRender,
        c = o.stagger,
        d = o.overwrite,
        p = o.keyframes,
        _ = o.defaults,
        m = o.scrollTrigger,
        y = o.yoyoEase,
        x = r.parent || z,
        v = (W(i) || vi(i) ? gt(i[0]) : "length" in r) ? [i] : ft(i),
        T,
        g,
        w,
        P,
        S,
        b,
        k,
        E;
      if (
        a._targets = v.length ? qe(v) : Jt(
          "GSAP target " + i + " not found. https://gsap.com",
          !tt.nullTargetWarn,
        ) || [],
          a._ptLookup = [],
          a._overwrite = d,
          p || c || pe(f) || pe(h)
      ) {
        if (
          r = a.vars,
            T = a.timeline = new $({
              data: "nested",
              defaults: _ || {},
              targets: x && x.data === "nested" ? x.vars.targets : v,
            }),
            T.kill(),
            T.parent = T._dp = st(a),
            T._start = 0,
            c || pe(f) || pe(h)
        ) {
          if (P = v.length, k = c && Yi(c), _t(c)) {
            for (S in c) ~sr.indexOf(S) && (E || (E = {}), E[S] = c[S]);
          }
          for (g = 0; g < P; g++) {
            w = ve(r, ar),
              w.stagger = 0,
              y && (w.yoyoEase = y),
              E && Dt(w, E),
              b = v[g],
              w.duration = +fe(f, st(a), g, b, v),
              w.delay = (+fe(h, st(a), g, b, v) || 0) - a._delay,
              !c && P === 1 && w.delay &&
              (a._delay = h = w.delay, a._start += h, w.delay = 0),
              T.to(b, w, k ? k(g, b, v) : 0),
              T._ease = O.none;
          }
          T.duration() ? f = h = 0 : a.timeline = 0;
        } else if (p) {
          ee(ot(T.vars.defaults, { ease: "none" })),
            T._ease = Rt(p.ease || r.ease || "none");
          var D = 0, A, X, Y;
          if (W(p)) {
            p.forEach(function (N) {
              return T.to(v, N, ">");
            }), T.duration();
          } else {
            w = {};
            for (S in p) {
              S === "ease" || S === "easeEach" || pn(S, p[S], w, p.easeEach);
            }
            for (S in w) {
              for (
                A = w[S].sort(function (N, q) {
                  return N.t - q.t;
                }),
                  D = 0,
                  g = 0;
                g < A.length;
                g++
              ) {
                X = A[g],
                  Y = {
                    ease: X.e,
                    duration: (X.t - (g ? A[g - 1].t : 0)) / 100 * f,
                  },
                  Y[S] = X.v,
                  T.to(v, Y, D),
                  D += Y.duration;
              }
            }
            T.duration() < f && T.to({}, { duration: f - T.duration() });
          }
        }
        f || a.duration(f = T.duration());
      } else a.timeline = 0;
      return d === !0 && !De && (St = st(a), z.killTweensOf(v), St = 0),
        ct(x, st(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (l ||
          !f && !p && a._start === U(x._time) && H(l) && Gr(st(a)) &&
            x.data !== "nested") &&
        (a._tTime = -M, a.render(Math.max(0, -h) || 0)),
        m && Ii(st(a), m),
        a;
    }
    var e = t.prototype;
    return e.render = function (r, n, s) {
      var a = this._time,
        o = this._tDur,
        f = this._dur,
        h = r < 0,
        l = r > o - M && !h ? o : r < M ? 0 : r,
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        T;
      if (!f) jr(this, r, n, s);
      else if (
        l !== this._tTime || !r || s || !this._initted && this._tTime ||
        this._startAt && this._zTime < 0 !== h
      ) {
        if (c = l, v = this.timeline, this._repeat) {
          if (_ = f + this._rDelay, this._repeat < -1 && h) {
            return this.totalTime(_ * 100 + r, n, s);
          }
          if (
            c = U(l % _),
              l === o
                ? (p = this._repeat, c = f)
                : (p = ~~(l / _),
                  p && p === U(l / _) && (c = f, p--),
                  c > f && (c = f)),
              y = this._yoyo && p & 1,
              y && (T = this._yEase, c = f - c),
              m = Gt(this._tTime, _),
              c === a && !s && this._initted && p === m
          ) return this._tTime = l, this;
          p !== m &&
            (v && this._yEase && er(v, y),
              this.vars.repeatRefresh && !y && !this._lock &&
              this._time !== _ && this._initted &&
              (this._lock = s = 1,
                this.render(U(_ * p), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Bi(this, h ? r : c, s, n, l)) return this._tTime = 0, this;
          if (a !== this._time && !(s && this.vars.repeatRefresh && p !== m)) {
            return this;
          }
          if (f !== this._dur) return this.render(r, n, s);
        }
        if (
          this._tTime = l,
            this._time = c,
            !this._act && this._ts && (this._act = 1, this._lazy = 0),
            this.ratio = x = (T || this._ease)(c / f),
            this._from && (this.ratio = x = 1 - x),
            c && !a && !n && !p && (rt(this, "onStart"), this._tTime !== l)
        ) return this;
        for (d = this._pt; d;) d.r(x, d.d), d = d._next;
        v && v.render(r < 0 ? r : v._dur * v._ease(c / this._dur), n, s) ||
        this._startAt && (this._zTime = r),
          this._onUpdate && !n &&
          (h && Xe(this, r, n, s), rt(this, "onUpdate")),
          this._repeat && p !== m && this.vars.onRepeat && !n && this.parent &&
          rt(this, "onRepeat"),
          (l === this._tDur || !l) && this._tTime === l &&
          (h && !this._onUpdate && Xe(this, r, !0, !0),
            (r || !f) &&
            (l === this._tDur && this._ts > 0 || !l && this._ts < 0) &&
            bt(this, 1),
            !n && !(h && !a) && (l || a || y) &&
            (rt(this, l === o ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(l < o && this.timeScale() > 0) && this._prom()));
      }
      return this;
    },
      e.targets = function () {
        return this._targets;
      },
      e.invalidate = function (r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
          this._pt =
            this._op =
            this._onUpdate =
            this._lazy =
            this.ratio =
              0,
          this._ptLookup = [],
          this.timeline && this.timeline.invalidate(r),
          u.prototype.invalidate.call(this, r);
      },
      e.resetTo = function (r, n, s, a, o) {
        oe || nt.wake(), this._ts || this.play();
        var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          h;
        return this._initted || ti(this, f),
          h = this._ease(f / this._dur),
          cn(this, r, n, s, a, h, f, o)
            ? this.resetTo(r, n, s, a, 1)
            : (Pe(this, 0),
              this.parent ||
              zi(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
              this.render(0));
      },
      e.kill = function (r, n) {
        if (n === void 0 && (n = "all"), !r && (!n || n === "all")) {
          return this._lazy = this._pt = 0, this.parent ? se(this) : this;
        }
        if (this.timeline) {
          var s = this.timeline.totalDuration();
          return this.timeline.killTweensOf(
            r,
            n,
            St && St.vars.overwrite !== !0,
          )._first || se(this),
            this.parent && s !== this.timeline.totalDuration() &&
            Wt(this, this._dur * this.timeline._tDur / s, 0, 1),
            this;
        }
        var a = this._targets,
          o = r ? ft(r) : a,
          f = this._ptLookup,
          h = this._pt,
          l,
          c,
          d,
          p,
          _,
          m,
          y;
        if ((!n || n === "all") && qr(a, o)) {
          return n === "all" && (this._pt = 0), se(this);
        }
        for (
          l = this._op = this._op || [],
            n !== "all" && (V(n) && (_ = {},
              K(n, function (x) {
                return _[x] = 1;
              }),
              n = _),
              n = dn(a, n)),
            y = a.length;
          y--;
        ) {
          if (~o.indexOf(a[y])) {
            c = f[y],
              n === "all"
                ? (l[y] = n, p = c, d = {})
                : (d = l[y] = l[y] || {}, p = n);
            for (_ in p) {
              m = c && c[_],
                m &&
                ((!("kill" in m.d) || m.d.kill(_) === !0) && Te(this, m, "_pt"),
                  delete c[_]),
                d !== "all" && (d[_] = 1);
            }
          }
        }
        return this._initted && !this._pt && h && se(this), this;
      },
      t.to = function (r, n) {
        return new t(r, n, arguments[2]);
      },
      t.from = function (r, n) {
        return ie(1, arguments);
      },
      t.delayedCall = function (r, n, s, a) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: a,
        });
      },
      t.fromTo = function (r, n, s) {
        return ie(2, arguments);
      },
      t.set = function (r, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
      },
      t.killTweensOf = function (r, n, s) {
        return z.killTweensOf(r, n, s);
      },
      t;
  }(ue);
  ot(B.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    K("staggerTo,staggerFrom,staggerFromTo", function (u) {
      B[u] = function () {
        var t = new $(), e = We.call(arguments, 0);
        return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
      };
    });
  var ei = function (t, e, i) {
      return t[e] = i;
    },
    or = function (t, e, i) {
      return t[e](i);
    },
    mn = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    gn = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    ii = function (t, e) {
      return L(t[e]) ? or : Re(t[e]) && t.setAttribute ? gn : ei;
    },
    ur = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
    },
    yn = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    fr = function (t, e) {
      var i = e._pt, r = "";
      if (!t && e.b) r = e.b;
      else if (t === 1 && e.e) r = e.e;
      else {
        for (; i;) {
          r = i.p + (i.m
            ? i.m(i.s + i.c * t)
            : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
            r, i = i._next;
        }
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    ri = function (t, e) {
      for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
    },
    xn = function (t, e, i, r) {
      for (var n = this._pt, s; n;) {
        s = n._next, n.p === r && n.modifier(t, e, i), n = s;
      }
    },
    vn = function (t) {
      for (var e = this._pt, i, r; e;) {
        r = e._next,
          e.p === t && !e.op || e.op === t
            ? Te(this, e, "_pt")
            : e.dep || (i = 1),
          e = r;
      }
      return !i;
    },
    Tn = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    hr = function (t) {
      for (var e = t._pt, i, r, n, s; e;) {
        for (i = e._next, r = n; r && r.pr > e.pr;) r = r._next;
        (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e,
          (e._next = r) ? r._prev = e : s = e,
          e = i;
      }
      t._pt = n;
    },
    Q = function () {
      function u(e, i, r, n, s, a, o, f, h) {
        this.t = i,
          this.s = n,
          this.c = s,
          this.p = r,
          this.r = a || ur,
          this.d = o || this,
          this.set = f || ei,
          this.pr = h || 0,
          this._next = e,
          e && (e._prev = this);
      }
      var t = u.prototype;
      return t.modifier = function (i, r, n) {
        this.mSet = this.mSet || this.set,
          this.set = Tn,
          this.m = i,
          this.mt = n,
          this.tween = r;
      },
        u;
    }();
  K(
    Ye +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (u) {
      return Ne[u] = 1;
    },
  ),
    et.TweenMax = et.TweenLite = B,
    et.TimelineLite = et.TimelineMax = $,
    z = new $({
      sortChildren: !1,
      defaults: Yt,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    }),
    tt.stringFilter = Ji;
  var zt = [],
    Se = {},
    bn = [],
    _r = 0,
    wn = 0,
    ni = function (t) {
      return (Se[t] || bn).map(function (e) {
        return e();
      });
    },
    si = function () {
      var t = Date.now(), e = [];
      t - _r > 2 && (ni("matchMediaInit"),
        zt.forEach(function (i) {
          var r = i.queries, n = i.conditions, s, a, o, f;
          for (a in r) {
            s = lt.matchMedia(r[a]).matches,
              s && (o = 1),
              s !== n[a] && (n[a] = s, f = 1);
          }
          f && (i.revert(), o && e.push(i));
        }),
        ni("matchMediaRevert"),
        e.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        _r = t,
        ni("matchMedia"));
    },
    lr = function () {
      function u(e, i) {
        this.selector = i && je(i),
          this.data = [],
          this._r = [],
          this.isReverted = !1,
          this.id = wn++,
          e && this.add(e);
      }
      var t = u.prototype;
      return t.add = function (i, r, n) {
        L(i) && (n = r, r = i, i = L);
        var s = this,
          a = function () {
            var f = R, h = s.selector, l;
            return f && f !== s && f.data.push(s),
              n && (s.selector = je(n)),
              R = s,
              l = r.apply(s, arguments),
              L(l) && s._r.push(l),
              R = f,
              s.selector = h,
              s.isReverted = !1,
              l;
          };
        return s.last = a,
          i === L
            ? a(s, function (o) {
              return s.add(null, o);
            })
            : i
            ? s[i] = a
            : a;
      },
        t.ignore = function (i) {
          var r = R;
          R = null, i(this), R = r;
        },
        t.getTweens = function () {
          var i = [];
          return this.data.forEach(function (r) {
            return r instanceof u
              ? i.push.apply(i, r.getTweens())
              : r instanceof B && !(r.parent && r.parent.data === "nested") &&
                i.push(r);
          }),
            i;
        },
        t.clear = function () {
          this._r.length = this.data.length = 0;
        },
        t.kill = function (i, r) {
          var n = this;
          if (
            i
              ? function () {
                for (var a = n.getTweens(), o = n.data.length, f; o--;) {
                  f = n.data[o],
                    f.data === "isFlip" &&
                    (f.revert(),
                      f.getChildren(!0, !0, !1).forEach(function (h) {
                        return a.splice(a.indexOf(h), 1);
                      }));
                }
                for (
                  a.map(function (h) {
                    return {
                      g: h._dur || h._delay ||
                          h._sat && !h._sat.vars.immediateRender
                        ? h.globalTime(0)
                        : -1 / 0,
                      t: h,
                    };
                  }).sort(function (h, l) {
                    return l.g - h.g || -1 / 0;
                  }).forEach(function (h) {
                    return h.t.revert(i);
                  }), o = n.data.length;
                  o--;
                ) {
                  f = n.data[o],
                    f instanceof $
                      ? f.data !== "nested" &&
                        (f.scrollTrigger && f.scrollTrigger.revert(), f.kill())
                      : !(f instanceof B) && f.revert && f.revert(i);
                }
                n._r.forEach(function (h) {
                  return h(i, n);
                }), n.isReverted = !0;
              }()
              : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
              this.clear(),
              r
          ) {
            for (var s = zt.length; s--;) {
              zt[s].id === this.id && zt.splice(s, 1);
            }
          }
        },
        t.revert = function (i) {
          this.kill(i || {});
        },
        u;
    }(),
    Pn = function () {
      function u(e) {
        this.contexts = [], this.scope = e, R && R.data.push(this);
      }
      var t = u.prototype;
      return t.add = function (i, r, n) {
        _t(i) || (i = { matches: i });
        var s = new lr(0, n || this.scope), a = s.conditions = {}, o, f, h;
        R && !s.selector && (s.selector = R.selector),
          this.contexts.push(s),
          r = s.add("onMatch", r),
          s.queries = i;
        for (f in i) {
          f === "all" ? h = 1 : (o = lt.matchMedia(i[f]),
            o &&
            (zt.indexOf(s) < 0 && zt.push(s),
              (a[f] = o.matches) && (h = 1),
              o.addListener
                ? o.addListener(si)
                : o.addEventListener("change", si)));
        }
        return h && r(s, function (l) {
          return s.add(null, l);
        }),
          this;
      },
        t.revert = function (i) {
          this.kill(i || {});
        },
        t.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        },
        u;
    }(),
    Oe = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
          e[i] = arguments[i];
        }
        e.forEach(function (r) {
          return Hi(r);
        });
      },
      timeline: function (t) {
        return new $(t);
      },
      getTweensOf: function (t, e) {
        return z.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, r) {
        V(t) && (t = ft(t)[0]);
        var n = Mt(t || {}).get, s = i ? Ri : Ai;
        return i === "native" && (i = ""),
          t &&
          (e ? s((it[e] && it[e].get || n)(t, e, i, r)) : function (a, o, f) {
            return s((it[a] && it[a].get || n)(t, a, o, f));
          });
      },
      quickSetter: function (t, e, i) {
        if (t = ft(t), t.length > 1) {
          var r = t.map(function (h) {
              return Z.quickSetter(h, e, i);
            }),
            n = r.length;
          return function (h) {
            for (var l = n; l--;) r[l](h);
          };
        }
        t = t[0] || {};
        var s = it[e],
          a = Mt(t),
          o = a.harness && (a.harness.aliases || {})[e] || e,
          f = s
            ? function (h) {
              var l = new s();
              jt._pt = 0,
                l.init(t, i ? h + i : h, jt, 0, [t]),
                l.render(1, l),
                jt._pt && ri(1, jt);
            }
            : a.set(t, o);
        return s ? f : function (h) {
          return f(t, o, i ? h + i : h, a, 1);
        };
      },
      quickTo: function (t, e, i) {
        var r,
          n = Z.to(t, Dt((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})),
          s = function (o, f, h) {
            return n.resetTo(e, o, f, h);
          };
        return s.tween = n, s;
      },
      isTweening: function (t) {
        return z.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Rt(t.ease, Yt.ease)), Ei(Yt, t || {});
      },
      config: function (t) {
        return Ei(tt, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          r = t.plugins,
          n = t.defaults,
          s = t.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return a && !it[a] && !et[a] &&
            Jt(e + " effect requires " + a + " plugin.");
        }),
          Ue[e] = function (a, o, f) {
            return i(ft(a), ot(o || {}, n), f);
          },
          s && ($.prototype[e] = function (a, o, f) {
            return this.add(Ue[e](a, _t(o) ? o : (f = o) && {}, this), f);
          });
      },
      registerEase: function (t, e) {
        O[t] = Rt(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Rt(t, e) : O;
      },
      getById: function (t) {
        return z.getById(t);
      },
      exportRoot: function (t, e) {
        t === void 0 && (t = {});
        var i = new $(t), r, n;
        for (
          i.smoothChildTiming = H(t.smoothChildTiming),
            z.remove(i),
            i._dp = 0,
            i._time = i._tTime = z._time,
            r = z._first;
          r;
        ) {
          n = r._next,
            (e ||
              !(!r._dur && r instanceof B &&
                r.vars.onComplete === r._targets[0])) &&
            ct(i, r, r._start - r._delay),
            r = n;
        }
        return ct(z, i, 0), i;
      },
      context: function (t, e) {
        return t ? new lr(t, e) : R;
      },
      matchMedia: function (t) {
        return new Pn(t);
      },
      matchMediaRefresh: function () {
        return zt.forEach(function (t) {
          var e = t.conditions, i, r;
          for (r in e) e[r] && (e[r] = !1, i = 1);
          i && t.revert();
        }) || si();
      },
      addEventListener: function (t, e) {
        var i = Se[t] || (Se[t] = []);
        ~i.indexOf(e) || i.push(e);
      },
      removeEventListener: function (t, e) {
        var i = Se[t], r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: en,
        wrapYoyo: rn,
        distribute: Yi,
        random: Xi,
        snap: qi,
        normalize: tn,
        getUnit: j,
        clamp: Kr,
        splitColor: Ki,
        toArray: ft,
        selector: je,
        mapRange: Wi,
        pipe: Zr,
        unitize: Jr,
        interpolate: nn,
        shuffle: Ui,
      },
      install: Si,
      effects: Ue,
      ticker: nt,
      updateRoot: $.updateRoot,
      plugins: it,
      globalTimeline: z,
      core: {
        PropTween: Q,
        globals: Oi,
        Tween: B,
        Timeline: $,
        Animation: ue,
        getCache: Mt,
        _removeLinkedListItem: Te,
        reverting: function () {
          return G;
        },
        context: function (t) {
          return t && R && (R.data.push(t), t._ctx = R), R;
        },
        suppressOverwrites: function (t) {
          return De = t;
        },
      },
    };
  K("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
    return Oe[u] = B[u];
  }),
    nt.add($.updateRoot),
    jt = Oe.to({}, { duration: 0 });
  var Sn = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) {
        i = i._next;
      }
      return i;
    },
    On = function (t, e) {
      var i = t._targets, r, n, s;
      for (r in e) {
        for (n = i.length; n--;) {
          s = t._ptLookup[n][r],
            s && (s = s.d) &&
            (s._pt && (s = Sn(s, r)),
              s && s.modifier && s.modifier(e[r], t, i[n], r));
        }
      }
    },
    ai = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (r, n, s) {
          s._onInit = function (a) {
            var o, f;
            if (
              V(n) && (o = {},
                K(n, function (h) {
                  return o[h] = 1;
                }),
                n = o), e
            ) {
              o = {};
              for (f in n) o[f] = e(n[f]);
              n = o;
            }
            On(a, n);
          };
        },
      };
    },
    Z = Oe.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a, o;
          this.tween = i;
          for (s in e) {
            o = t.getAttribute(s) || "",
              a = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s,
              ),
              a.op = s,
              a.b = o,
              this._props.push(s);
          }
        },
        render: function (t, e) {
          for (var i = e._pt; i;) {
            G ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
          }
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--;) {
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
          }
        },
      },
      ai("roundProps", $e),
      ai("modifiers"),
      ai("snap", qi),
    ) || Oe;
  B.version = $.version = Z.version = "3.12.5",
    Pi = 1,
    Ee() && $t(),
    O.Power0,
    O.Power1,
    O.Power2,
    O.Power3,
    O.Power4,
    O.Linear,
    O.Quad,
    O.Cubic,
    O.Quart,
    O.Quint,
    O.Strong,
    O.Elastic,
    O.Back,
    O.SteppedEase,
    O.Bounce,
    O.Sine,
    O.Expo,
    O.Circ; /*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
  */

  var cr,
    Ot,
    Ht,
    oi,
    Ft,
    dr,
    ui,
    kn = function () {
      return typeof window < "u";
    },
    yt = {},
    Lt = 180 / Math.PI,
    Kt = Math.PI / 180,
    Qt = Math.atan2,
    pr = 1e8,
    fi = /([A-Z])/g,
    Cn = /(left|right|width|margin|padding|x)/i,
    Mn = /[\s,\(]\S/,
    dt = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    hi = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    Dn = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e,
      );
    },
    An = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e,
      );
    },
    Rn = function (t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e);
    },
    mr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    gr = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
    },
    En = function (t, e, i) {
      return t.style[e] = i;
    },
    zn = function (t, e, i) {
      return t.style.setProperty(e, i);
    },
    Fn = function (t, e, i) {
      return t._gsap[e] = i;
    },
    Ln = function (t, e, i) {
      return t._gsap.scaleX = t._gsap.scaleY = i;
    },
    In = function (t, e, i, r, n) {
      var s = t._gsap;
      s.scaleX = s.scaleY = i, s.renderTransform(n, s);
    },
    Bn = function (t, e, i, r, n) {
      var s = t._gsap;
      s[e] = i, s.renderTransform(n, s);
    },
    F = "transform",
    J = F + "Origin",
    Nn = function u(t, e) {
      var i = this, r = this.target, n = r.style, s = r._gsap;
      if (t in yt && n) {
        if (this.tfm = this.tfm || {}, t !== "transform") {
          t = dt[t] || t,
            ~t.indexOf(",")
              ? t.split(",").forEach(function (a) {
                return i.tfm[a] = xt(r, a);
              })
              : this.tfm[t] = s.x ? s[t] : xt(r, t),
            t === J && (this.tfm.zOrigin = s.zOrigin);
        } else {return dt.transform.split(",").forEach(function (a) {
            return u.call(i, a, e);
          });}
        if (this.props.indexOf(F) >= 0) {
          return;
        }
        s.svg &&
        (this.svgo = r.getAttribute("data-svg-origin"),
          this.props.push(J, e, "")), t = F;
      }
      (n || e) && this.props.push(t, e, n[t]);
    },
    yr = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
    },
    Vn = function () {
      var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
      for (n = 0; n < t.length; n += 3) {
        t[n + 1]
          ? e[t[n]] = t[n + 2]
          : t[n + 2]
          ? i[t[n]] = t[n + 2]
          : i.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(fi, "-$1").toLowerCase(),
          );
      }
      if (this.tfm) {
        for (s in this.tfm) {
          r[s] = this.tfm[s];
        }
        r.svg &&
        (r.renderTransform(),
          e.setAttribute("data-svg-origin", this.svgo || "")),
          n = ui(),
          (!n || !n.isStart) && !i[F] &&
          (yr(i),
            r.zOrigin && i[J] &&
            (i[J] += " " + r.zOrigin + "px",
              r.zOrigin = 0,
              r.renderTransform()),
            r.uncache = 1);
      }
    },
    xr = function (t, e) {
      var i = { target: t, props: [], revert: Vn, save: Nn };
      return t._gsap || Z.core.getCache(t),
        e && e.split(",").forEach(function (r) {
          return i.save(r);
        }),
        i;
    },
    vr,
    _i = function (t, e) {
      var i = Ot.createElementNS
        ? Ot.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t,
        )
        : Ot.createElement(t);
      return i && i.style ? i : Ot.createElement(t);
    },
    pt = function u(t, e, i) {
      var r = getComputedStyle(t);
      return r[e] || r.getPropertyValue(e.replace(fi, "-$1").toLowerCase()) ||
        r.getPropertyValue(e) || !i && u(t, Zt(e) || e, 1) || "";
    },
    Tr = "O,Moz,ms,Ms,Webkit".split(","),
    Zt = function (t, e, i) {
      var r = e || Ft, n = r.style, s = 5;
      if (t in n && !i) {
        return t;
      }
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        s-- && !(Tr[s] + t in n);
      );
      return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Tr[s] : "") + t;
    },
    li = function () {
      kn() && window.document &&
        (cr = window,
          Ot = cr.document,
          Ht = Ot.documentElement,
          Ft = _i("div") || { style: {} },
          _i("div"),
          F = Zt(F),
          J = F + "Origin",
          Ft.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0",
          vr = !!Zt("perspective"),
          ui = Z.core.reverting,
          oi = 1);
    },
    ci = function u(t) {
      var e = _i(
          "svg",
          this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") ||
            "http://www.w3.org/2000/svg",
        ),
        i = this.parentNode,
        r = this.nextSibling,
        n = this.style.cssText,
        s;
      if (
        Ht.appendChild(e), e.appendChild(this), this.style.display = "block", t
      ) {
        try {
          s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = u;
        } catch {
        }
      } else this._gsapBBox && (s = this._gsapBBox());
      return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        Ht.removeChild(e),
        this.style.cssText = n,
        s;
    },
    br = function (t, e) {
      for (var i = e.length; i--;) {
        if (t.hasAttribute(e[i])) {
          return t.getAttribute(e[i]);
        }
      }
    },
    wr = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch {
        e = ci.call(t, !0);
      }
      return e && (e.width || e.height) || t.getBBox === ci ||
        (e = ci.call(t, !0)),
        e && !e.width && !e.x && !e.y
          ? {
            x: +br(t, ["x", "cx", "x1"]) || 0,
            y: +br(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
          : e;
    },
    Pr = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && wr(t));
    },
    It = function (t, e) {
      if (e) {
        var i = t.style, r;
        e in yt && e !== J && (e = F),
          i.removeProperty
            ? (r = e.substr(0, 2),
              (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
              i.removeProperty(
                r === "--" ? e : e.replace(fi, "-$1").toLowerCase(),
              ))
            : i.removeAttribute(e);
      }
    },
    kt = function (t, e, i, r, n, s) {
      var a = new Q(t._pt, e, i, 0, 1, s ? gr : mr);
      return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
    },
    Sr = { deg: 1, rad: 1, turn: 1 },
    Un = { grid: 1, flex: 1 },
    Ct = function u(t, e, i, r) {
      var n = parseFloat(i) || 0,
        s = (i + "").trim().substr((n + "").length) || "px",
        a = Ft.style,
        o = Cn.test(e),
        f = t.tagName.toLowerCase() === "svg",
        h = (f ? "client" : "offset") + (o ? "Width" : "Height"),
        l = 100,
        c = r === "px",
        d = r === "%",
        p,
        _,
        m,
        y;
      if (r === s || !n || Sr[r] || Sr[s]) return n;
      if (
        s !== "px" && !c && (n = u(t, e, i, "px")),
          y = t.getCTM && Pr(t),
          (d || s === "%") && (yt[e] || ~e.indexOf("adius"))
      ) {
        return p = y ? t.getBBox()[o ? "width" : "height"] : t[h],
          I(d ? n / p * l : n / 100 * p);
      }
      if (
        a[o ? "width" : "height"] = l + (c ? s : r),
          _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !f
            ? t
            : t.parentNode,
          y && (_ = (t.ownerSVGElement || {}).parentNode),
          (!_ || _ === Ot || !_.appendChild) && (_ = Ot.body),
          m = _._gsap,
          m && d && m.width && o && m.time === nt.time && !m.uncache
      ) return I(n / m.width * l);
      if (d && (e === "height" || e === "width")) {
        var x = t.style[e];
        t.style[e] = l + r, p = t[h], x ? t.style[e] = x : It(t, e);
      } else {(d || s === "%") && !Un[pt(_, "display")] &&
          (a.position = pt(t, "position")),
          _ === t && (a.position = "static"),
          _.appendChild(Ft),
          p = Ft[h],
          _.removeChild(Ft),
          a.position = "absolute";}
      return o && d && (m = Mt(_), m.time = nt.time, m.width = _[h]),
        I(c ? p * n / l : p && n ? l / p * n : 0);
    },
    xt = function (t, e, i, r) {
      var n;
      return oi || li(),
        e in dt && e !== "transform" &&
        (e = dt[e], ~e.indexOf(",") && (e = e.split(",")[0])),
        yt[e] && e !== "transform"
          ? (n = _e(t, r),
            n = e !== "transformOrigin"
              ? n[e]
              : n.svg
              ? n.origin
              : Ce(pt(t, J)) + " " + n.zOrigin + "px")
          : (n = t.style[e],
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n = ke[e] && ke[e](t, e, i) || pt(t, e) || Mi(t, e) ||
              (e === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? Ct(t, e, n, i) + i : n;
    },
    Yn = function (t, e, i, r) {
      if (!i || i === "none") {
        var n = Zt(e, t, 1), s = n && pt(t, n, 1);
        s && s !== i
          ? (e = n, i = s)
          : e === "borderColor" && (i = pt(t, "borderTopColor"));
      }
      var a = new Q(this._pt, t.style, e, 0, 1, fr),
        o = 0,
        f = 0,
        h,
        l,
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        T,
        g;
      if (
        a.b = i,
          a.e = r,
          i += "",
          r += "",
          r === "auto" &&
          (_ = t.style[e],
            t.style[e] = r,
            r = pt(t, e) || r,
            _ ? t.style[e] = _ : It(t, e)),
          h = [i, r],
          Ji(h),
          i = h[0],
          r = h[1],
          c = i.match(qt) || [],
          g = r.match(qt) || [],
          g.length
      ) {
        for (; l = qt.exec(r);) {
          m = l[0],
            x = r.substring(o, l.index),
            p
              ? p = (p + 1) % 5
              : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") &&
                (p = 1),
            m !== (_ = c[f++] || "") &&
            (d = parseFloat(_) || 0,
              T = _.substr((d + "").length),
              m.charAt(1) === "=" && (m = Xt(d, m) + T),
              y = parseFloat(m),
              v = m.substr((y + "").length),
              o = qt.lastIndex - v.length,
              v ||
              (v = v || tt.units[e] || T, o === r.length && (r += v, a.e += v)),
              T !== v && (d = Ct(t, e, _, v) || 0),
              a._pt = {
                _next: a._pt,
                p: x || f === 1 ? x : ",",
                s: d,
                c: y - d,
                m: p && p < 4 || e === "zIndex" ? Math.round : 0,
              });
        }
        a.c = o < r.length ? r.substring(o, r.length) : "";
      } else a.r = e === "display" && r === "none" ? gr : mr;
      return bi.test(r) && (a.e = 0), this._pt = a, a;
    },
    Or = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    qn = function (t) {
      var e = t.split(" "), i = e[0], r = e[1] || "50%";
      return (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        (t = i, i = r, r = t),
        e[0] = Or[i] || i,
        e[1] = Or[r] || r,
        e.join(" ");
    },
    Xn = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o, f;
        if (n === "all" || n === !0) r.cssText = "", o = 1;
        else {for (n = n.split(","), f = n.length; --f > -1;) {
            a = n[f],
              yt[a] && (o = 1, a = a === "transformOrigin" ? J : F),
              It(i, a);
          }}
        o &&
          (It(i, F),
            s &&
            (s.svg && i.removeAttribute("transform"),
              _e(i, 1),
              s.uncache = 1,
              yr(r)));
      }
    },
    ke = {
      clearProps: function (t, e, i, r, n) {
        if (n.data !== "isFromStart") {
          var s = t._pt = new Q(t._pt, e, i, 0, 0, Xn);
          return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
        }
      },
    },
    he = [1, 0, 0, 1, 0, 0],
    kr = {},
    Cr = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Mr = function (t) {
      var e = pt(t, F);
      return Cr(e) ? he : e.substr(7).match(Ti).map(I);
    },
    di = function (t, e) {
      var i = t._gsap || Mt(t), r = t.style, n = Mr(t), s, a, o, f;
      return i.svg && t.getAttribute("transform")
        ? (o = t.transform.baseVal.consolidate().matrix,
          n = [o.a, o.b, o.c, o.d, o.e, o.f],
          n.join(",") === "1,0,0,1,0,0" ? he : n)
        : (n === he && !t.offsetParent && t !== Ht && !i.svg &&
          (o = r.display,
            r.display = "block",
            s = t.parentNode,
            (!s || !t.offsetParent) &&
            (f = 1, a = t.nextElementSibling, Ht.appendChild(t)),
            n = Mr(t),
            o ? r.display = o : It(t, "display"),
            f &&
            (a
              ? s.insertBefore(t, a)
              : s
              ? s.appendChild(t)
              : Ht.removeChild(t))),
          e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    pi = function (t, e, i, r, n, s) {
      var a = t._gsap,
        o = n || di(t, !0),
        f = a.xOrigin || 0,
        h = a.yOrigin || 0,
        l = a.xOffset || 0,
        c = a.yOffset || 0,
        d = o[0],
        p = o[1],
        _ = o[2],
        m = o[3],
        y = o[4],
        x = o[5],
        v = e.split(" "),
        T = parseFloat(v[0]) || 0,
        g = parseFloat(v[1]) || 0,
        w,
        P,
        S,
        b;
      i
        ? o !== he && (P = d * m - p * _) &&
          (S = T * (m / P) + g * (-_ / P) + (_ * x - m * y) / P,
            b = T * (-p / P) + g * (d / P) - (d * x - p * y) / P,
            T = S,
            g = b)
        : (w = wr(t),
          T = w.x + (~v[0].indexOf("%") ? T / 100 * w.width : T),
          g = w.y + (~(v[1] || v[0]).indexOf("%") ? g / 100 * w.height : g)),
        r || r !== !1 && a.smooth
          ? (y = T - f,
            x = g - h,
            a.xOffset = l + (y * d + x * _) - y,
            a.yOffset = c + (y * p + x * m) - x)
          : a.xOffset = a.yOffset = 0,
        a.xOrigin = T,
        a.yOrigin = g,
        a.smooth = !!r,
        a.origin = e,
        a.originIsAbsolute = !!i,
        t.style[J] = "0px 0px",
        s &&
        (kt(s, a, "xOrigin", f, T),
          kt(s, a, "yOrigin", h, g),
          kt(s, a, "xOffset", l, a.xOffset),
          kt(s, a, "yOffset", c, a.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + g);
    },
    _e = function (t, e) {
      var i = t._gsap || new rr(t);
      if ("x" in i && !e && !i.uncache) return i;
      var r = t.style,
        n = i.scaleX < 0,
        s = "px",
        a = "deg",
        o = getComputedStyle(t),
        f = pt(t, J) || "0",
        h,
        l,
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        T,
        g,
        w,
        P,
        S,
        b,
        k,
        E,
        D,
        A,
        X,
        Y,
        N,
        q,
        ht,
        Me,
        ce,
        de,
        Vt,
        Er,
        vt,
        Ut;
      return h =
        l =
        c =
        _ =
        m =
        y =
        x =
        v =
        T =
          0,
        d = p = 1,
        i.svg = !!(t.getCTM && Pr(t)),
        o.translate &&
        ((o.translate !== "none" || o.scale !== "none" ||
          o.rotate !== "none") && (r[F] = (o.translate !== "none"
            ? "translate3d(" +
              (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
            : "") +
            (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") +
            (o.scale !== "none"
              ? "scale(" + o.scale.split(" ").join(",") + ") "
              : "") +
            (o[F] !== "none" ? o[F] : "")),
          r.scale = r.rotate = r.translate = "none"),
        P = di(t, i.svg),
        i.svg &&
        (i.uncache
          ? (ht = t.getBBox(),
            f = i.xOrigin - ht.x + "px " + (i.yOrigin - ht.y) + "px",
            q = "")
          : q = !e && t.getAttribute("data-svg-origin"),
          pi(t, q || f, !!q || i.originIsAbsolute, i.smooth !== !1, P)),
        g = i.xOrigin || 0,
        w = i.yOrigin || 0,
        P !== he &&
        (E = P[0],
          D = P[1],
          A = P[2],
          X = P[3],
          h = Y = P[4],
          l = N = P[5],
          P.length === 6
            ? (d = Math.sqrt(E * E + D * D),
              p = Math.sqrt(X * X + A * A),
              _ = E || D ? Qt(D, E) * Lt : 0,
              x = A || X ? Qt(A, X) * Lt + _ : 0,
              x && (p *= Math.abs(Math.cos(x * Kt))),
              i.svg && (h -= g - (g * E + w * A), l -= w - (g * D + w * X)))
            : (Ut = P[6],
              Er = P[7],
              ce = P[8],
              de = P[9],
              Vt = P[10],
              vt = P[11],
              h = P[12],
              l = P[13],
              c = P[14],
              S = Qt(Ut, Vt),
              m = S * Lt,
              S &&
              (b = Math.cos(-S),
                k = Math.sin(-S),
                q = Y * b + ce * k,
                ht = N * b + de * k,
                Me = Ut * b + Vt * k,
                ce = Y * -k + ce * b,
                de = N * -k + de * b,
                Vt = Ut * -k + Vt * b,
                vt = Er * -k + vt * b,
                Y = q,
                N = ht,
                Ut = Me),
              S = Qt(-A, Vt),
              y = S * Lt,
              S &&
              (b = Math.cos(-S),
                k = Math.sin(-S),
                q = E * b - ce * k,
                ht = D * b - de * k,
                Me = A * b - Vt * k,
                vt = X * k + vt * b,
                E = q,
                D = ht,
                A = Me),
              S = Qt(D, E),
              _ = S * Lt,
              S &&
              (b = Math.cos(S),
                k = Math.sin(S),
                q = E * b + D * k,
                ht = Y * b + N * k,
                D = D * b - E * k,
                N = N * b - Y * k,
                E = q,
                Y = ht),
              m && Math.abs(m) + Math.abs(_) > 359.9 &&
              (m = _ = 0, y = 180 - y),
              d = I(Math.sqrt(E * E + D * D + A * A)),
              p = I(Math.sqrt(N * N + Ut * Ut)),
              S = Qt(Y, N),
              x = Math.abs(S) > 2e-4 ? S * Lt : 0,
              T = vt ? 1 / (vt < 0 ? -vt : vt) : 0),
          i.svg &&
          (q = t.getAttribute("transform"),
            i.forceCSS = t.setAttribute("transform", "") || !Cr(pt(t, F)),
            q && t.setAttribute("transform", q))),
        Math.abs(x) > 90 && Math.abs(x) < 270 &&
        (n
          ? (d *= -1, x += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180)
          : (p *= -1, x += x <= 0 ? 180 : -180)),
        e = e || i.uncache,
        i.x = h -
          ((i.xPercent = h &&
              (!e && i.xPercent ||
                (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
            ? t.offsetWidth * i.xPercent / 100
            : 0) +
          s,
        i.y = l -
          ((i.yPercent = l &&
              (!e && i.yPercent ||
                (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0)))
            ? t.offsetHeight * i.yPercent / 100
            : 0) +
          s,
        i.z = c + s,
        i.scaleX = I(d),
        i.scaleY = I(p),
        i.rotation = I(_) + a,
        i.rotationX = I(m) + a,
        i.rotationY = I(y) + a,
        i.skewX = x + a,
        i.skewY = v + a,
        i.transformPerspective = T + s,
        (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) &&
        (r[J] = Ce(f)),
        i.xOffset = i.yOffset = 0,
        i.force3D = tt.force3D,
        i.renderTransform = i.svg ? Wn : vr ? Dr : Gn,
        i.uncache = 0,
        i;
    },
    Ce = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    mi = function (t, e, i) {
      var r = j(e);
      return I(parseFloat(e) + parseFloat(Ct(t, "x", i + "px", r))) + r;
    },
    Gn = function (t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Dr(t, e);
    },
    Bt = "0deg",
    le = "0px",
    Nt = ") ",
    Dr = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        a = i.y,
        o = i.z,
        f = i.rotation,
        h = i.rotationY,
        l = i.rotationX,
        c = i.skewX,
        d = i.skewY,
        p = i.scaleX,
        _ = i.scaleY,
        m = i.transformPerspective,
        y = i.force3D,
        x = i.target,
        v = i.zOrigin,
        T = "",
        g = y === "auto" && t && t !== 1 || y === !0;
      if (v && (l !== Bt || h !== Bt)) {
        var w = parseFloat(h) * Kt, P = Math.sin(w), S = Math.cos(w), b;
        w = parseFloat(l) * Kt,
          b = Math.cos(w),
          s = mi(x, s, P * b * -v),
          a = mi(x, a, -Math.sin(w) * -v),
          o = mi(x, o, S * b * -v + v);
      }
      m !== le && (T += "perspective(" + m + Nt),
        (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
        (g || s !== le || a !== le || o !== le) &&
        (T += o !== le || g
          ? "translate3d(" + s + ", " + a + ", " + o + ") "
          : "translate(" + s + ", " + a + Nt),
        f !== Bt && (T += "rotate(" + f + Nt),
        h !== Bt && (T += "rotateY(" + h + Nt),
        l !== Bt && (T += "rotateX(" + l + Nt),
        (c !== Bt || d !== Bt) && (T += "skew(" + c + ", " + d + Nt),
        (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Nt),
        x.style[F] = T || "translate(0, 0)";
    },
    Wn = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        a = i.y,
        o = i.rotation,
        f = i.skewX,
        h = i.skewY,
        l = i.scaleX,
        c = i.scaleY,
        d = i.target,
        p = i.xOrigin,
        _ = i.yOrigin,
        m = i.xOffset,
        y = i.yOffset,
        x = i.forceCSS,
        v = parseFloat(s),
        T = parseFloat(a),
        g,
        w,
        P,
        S,
        b;
      o = parseFloat(o),
        f = parseFloat(f),
        h = parseFloat(h),
        h && (h = parseFloat(h), f += h, o += h),
        o || f
          ? (o *= Kt,
            f *= Kt,
            g = Math.cos(o) * l,
            w = Math.sin(o) * l,
            P = Math.sin(o - f) * -c,
            S = Math.cos(o - f) * c,
            f &&
            (h *= Kt,
              b = Math.tan(f - h),
              b = Math.sqrt(1 + b * b),
              P *= b,
              S *= b,
              h && (b = Math.tan(h), b = Math.sqrt(1 + b * b), g *= b, w *= b)),
            g = I(g),
            w = I(w),
            P = I(P),
            S = I(S))
          : (g = l, S = c, w = P = 0),
        (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) &&
        (v = Ct(d, "x", s, "px"), T = Ct(d, "y", a, "px")),
        (p || _ || m || y) &&
        (v = I(v + p - (p * g + _ * P) + m),
          T = I(T + _ - (p * w + _ * S) + y)),
        (r || n) &&
        (b = d.getBBox(),
          v = I(v + r / 100 * b.width),
          T = I(T + n / 100 * b.height)),
        b = "matrix(" + g + "," + w + "," + P + "," + S + "," + v + "," + T +
          ")",
        d.setAttribute("transform", b),
        x && (d.style[F] = b);
    },
    jn = function (t, e, i, r, n) {
      var s = 360,
        a = V(n),
        o = parseFloat(n) * (a && ~n.indexOf("rad") ? Lt : 1),
        f = o - r,
        h = r + f + "deg",
        l,
        c;
      return a &&
        (l = n.split("_")[1],
          l === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)),
          l === "cw" && f < 0
            ? f = (f + s * pr) % s - ~~(f / s) * s
            : l === "ccw" && f > 0 && (f = (f - s * pr) % s - ~~(f / s) * s)),
        t._pt = c = new Q(t._pt, e, i, r, f, Dn),
        c.e = h,
        c.u = "deg",
        t._props.push(i),
        c;
    },
    Ar = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    $n = function (t, e, i) {
      var r = Ar({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        s = i.style,
        a,
        o,
        f,
        h,
        l,
        c,
        d,
        p;
      r.svg
        ? (f = i.getAttribute("transform"),
          i.setAttribute("transform", ""),
          s[F] = e,
          a = _e(i, 1),
          It(i, F),
          i.setAttribute("transform", f))
        : (f = getComputedStyle(i)[F], s[F] = e, a = _e(i, 1), s[F] = f);
      for (o in yt) {
        f = r[o],
          h = a[o],
          f !== h && n.indexOf(o) < 0 &&
          (d = j(f),
            p = j(h),
            l = d !== p ? Ct(i, o, f, p) : parseFloat(f),
            c = parseFloat(h),
            t._pt = new Q(t._pt, a, o, l, c - l, hi),
            t._pt.u = p || 0,
            t._props.push(o));
      }
      Ar(a, r);
    };
  K("padding,margin,Width,Radius", function (u, t) {
    var e = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(
        function (a) {
          return t < 2 ? u + a : "border" + a + u;
        },
      );
    ke[t > 1 ? "border" + u : u] = function (a, o, f, h, l) {
      var c, d;
      if (arguments.length < 4) {
        return c = s.map(function (p) {
          return xt(a, p, f);
        }),
          d = c.join(" "),
          d.split(c[0]).length === 5 ? c[0] : d;
      }
      c = (h + "").split(" "),
        d = {},
        s.forEach(function (p, _) {
          return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0];
        }),
        a.init(o, d, l);
    };
  });
  var Rr = {
    name: "css",
    register: li,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, r, n) {
      var s = this._props,
        a = t.style,
        o = i.vars.startAt,
        f,
        h,
        l,
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        T,
        g,
        w,
        P,
        S;
      oi || li(),
        this.styles = this.styles || xr(t),
        S = this.styles.props,
        this.tween = i;
      for (_ in e) {
        if (
          _ !== "autoRound" && (h = e[_], !(it[_] && nr(_, e, i, r, t, n)))
        ) {
          if (
            d = typeof h,
              p = ke[_],
              d === "function" && (h = h.call(i, r, t, n), d = typeof h),
              d === "string" && ~h.indexOf("random(") && (h = ne(h)),
              p
          ) p(this, t, _, h, i) && (P = 1);
          else if (_.substr(0, 2) === "--") {
            f = (getComputedStyle(t).getPropertyValue(_) + "").trim(),
              h += "",
              Pt.lastIndex = 0,
              Pt.test(f) || (m = j(f), y = j(h)),
              y ? m !== y && (f = Ct(t, _, f, y) + y) : m && (h += m),
              this.add(a, "setProperty", f, h, r, n, 0, 0, _),
              s.push(_),
              S.push(_, 0, a[_]);
          } else if (d !== "undefined") {
            if (
              o && _ in o
                ? (f = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_],
                  V(f) && ~f.indexOf("random(") && (f = ne(f)),
                  j(f + "") || f === "auto" ||
                  (f += tt.units[_] || j(xt(t, _)) || ""),
                  (f + "").charAt(1) === "=" && (f = xt(t, _)))
                : f = xt(t, _),
                c = parseFloat(f),
                x = d === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                x && (h = h.substr(2)),
                l = parseFloat(h),
                _ in dt &&
                (_ === "autoAlpha" &&
                  (c === 1 && xt(t, "visibility") === "hidden" && l && (c = 0),
                    S.push("visibility", 0, a.visibility),
                    kt(
                      this,
                      a,
                      "visibility",
                      c ? "inherit" : "hidden",
                      l ? "inherit" : "hidden",
                      !l,
                    )),
                  _ !== "scale" && _ !== "transform" &&
                  (_ = dt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))),
                v = _ in yt,
                v
            ) {
              if (
                this.styles.save(_),
                  T || (g = t._gsap,
                    g.renderTransform && !e.parseTransform ||
                    _e(t, e.parseTransform),
                    w = e.smoothOrigin !== !1 && g.smooth,
                    T = this._pt = new Q(
                      this._pt,
                      a,
                      F,
                      0,
                      1,
                      g.renderTransform,
                      g,
                      0,
                      -1,
                    ),
                    T.dep = 1),
                  _ === "scale"
              ) {
                this._pt = new Q(
                  this._pt,
                  g,
                  "scaleY",
                  g.scaleY,
                  (x ? Xt(g.scaleY, x + l) : l) - g.scaleY || 0,
                  hi,
                ),
                  this._pt.u = 0,
                  s.push("scaleY", _),
                  _ += "X";
              } else if (_ === "transformOrigin") {
                S.push(J, 0, a[J]),
                  h = qn(h),
                  g.svg
                    ? pi(t, h, 0, w, 0, this)
                    : (y = parseFloat(h.split(" ")[2]) || 0,
                      y !== g.zOrigin && kt(this, g, "zOrigin", g.zOrigin, y),
                      kt(this, a, _, Ce(f), Ce(h)));
                continue;
              } else if (_ === "svgOrigin") {
                pi(t, h, 1, w, 0, this);
                continue;
              } else if (_ in kr) {
                jn(this, g, _, c, x ? Xt(c, x + h) : h);
                continue;
              } else if (_ === "smoothOrigin") {
                kt(this, g, "smooth", g.smooth, h);
                continue;
              } else if (_ === "force3D") {
                g[_] = h;
                continue;
              } else if (_ === "transform") {
                $n(this, h, t);
                continue;
              }
            } else _ in a || (_ = Zt(_) || _);
            if (
              v || (l || l === 0) && (c || c === 0) && !Mn.test(h) && _ in a
            ) {
              m = (f + "").substr((c + "").length),
                l || (l = 0),
                y = j(h) || (_ in tt.units ? tt.units[_] : m),
                m !== y && (c = Ct(t, _, f, y)),
                this._pt = new Q(
                  this._pt,
                  v ? g : a,
                  _,
                  c,
                  (x ? Xt(c, x + l) : l) - c,
                  !v && (y === "px" || _ === "zIndex") && e.autoRound !== !1
                    ? Rn
                    : hi,
                ),
                this._pt.u = y || 0,
                m !== y && y !== "%" && (this._pt.b = f, this._pt.r = An);
            } else if (_ in a) Yn.call(this, t, _, f, x ? x + h : h);
            else if (_ in t) this.add(t, _, f || t[_], x ? x + h : h, r, n);
            else if (_ !== "parseTransform") {
              Be(_, h);
              continue;
            }
            v || (_ in a ? S.push(_, 0, a[_]) : S.push(_, 1, f || t[_])),
              s.push(_);
          }
        }
      }
      P && hr(this);
    },
    render: function (t, e) {
      if (e.tween._time || !ui()) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
      } else e.styles.revert();
    },
    get: xt,
    aliases: dt,
    getSetter: function (t, e, i) {
      var r = dt[e];
      return r && r.indexOf(",") < 0 && (e = r),
        e in yt && e !== J && (t._gsap.x || xt(t, "x"))
          ? i && dr === i
            ? e === "scale" ? Ln : Fn
            : (dr = i || {}) && (e === "scale" ? In : Bn)
          : t.style && !Re(t.style[e])
          ? En
          : ~e.indexOf("-")
          ? zn
          : ii(t, e);
    },
    core: { _removeProperty: It, _getMatrix: di },
  };
  Z.utils.checkPrefix = Zt,
    Z.core.getStyleSaver = xr,
    function (u, t, e, i) {
      var r = K(u + "," + t + "," + e, function (n) {
        yt[n] = 1;
      });
      K(t, function (n) {
        tt.units[n] = "deg", kr[n] = 1;
      }),
        dt[r[13]] = u + "," + t,
        K(i, function (n) {
          var s = n.split(":");
          dt[s[1]] = r[s[0]];
        });
    }(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    ),
    K(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (u) {
        tt.units[u] = "px";
      },
    ),
    Z.registerPlugin(Rr);
  var mt = Z.registerPlugin(Rr) || Z;
  mt.core.Tween;
  function Hn(u) {
    return u.getBoundingClientRect().height;
  }
  function Kn() {
    const u = document.querySelector(".conversation_track"),
      t = u.querySelector(".conversation_messages"),
      e = Array.from(t.querySelectorAll(".conversation_message")),
      i = document.querySelector(".conversation_pause");
    let r = 0, n, s = !1, a = !1;
    function o() {
      if (s) return;
      s = !0;
      const h = e[r], l = Hn(h);
      mt.to(t, {
        y: `-=${l}`,
        duration: .2,
        ease: "ease-in-out",
        onComplete: () => {
          r = (r + 1) % e.length,
            s = !1,
            r === 0 && mt.set(t, { y: 0 }),
            a || f();
        },
      });
    }
    function f(h = 3) {
      n && clearTimeout(n),
        a || (n = setTimeout(() => {
          o();
        }, h * 1e3));
    }
    u.addEventListener("mouseenter", () => {
      a = !0, i.classList.add("active"), n && clearTimeout(n);
    }),
      u.addEventListener("mouseleave", () => {
        a = !1, i.classList.remove("active"), s || f();
      }),
      f(.8);
  }
  function gi(u, t, e, i, r) {
    e.forEach((n, s) => {
      mt.set(n, { attr: { offset: i[s] } });
    }),
      mt.set(t, { opacity: 0 }),
      mt.timeline({ repeat: -1, ease: "expo.in" }),
      u.to(t, { opacity: 1, duration: .5, ease: "power1.inOut" }).to(t, {
        opacity: 0,
        duration: .5,
        ease: "power1.inOut",
      }).to(e[0], { attr: { offset: r[0] }, delay: .2, duration: 3 }, 0).to(
        e[1],
        { attr: { offset: r[1] }, delay: .2, duration: 3 },
        0,
      ).to(e[2], { attr: { offset: r[2] }, delay: .2, duration: 3 }, 0).to(
        e[3],
        { attr: { offset: r[3] }, delay: .2, duration: 3 },
        0,
      );
  }
  globalThis.Webflow || (globalThis.Webflow = []),
    globalThis.Webflow.push(() => {
      Kn();
      const u = mt.timeline({ repeat: -1 }), t = mt.timeline();
      gi(
        t,
        "#linear-circle",
        ["#linear-stop1", "#linear-stop2", "#linear-stop3", "#linear-stop4"],
        ["-90%", "-50%", "-20%", "0%"],
        ["120%", "170%", "180%", "200%"],
      );
      const e = mt.timeline();
      gi(
        e,
        "#github-circle",
        ["#github-stop1", "#github-stop2", "#github-stop3", "#github-stop4"],
        ["-100%", "-60%", "-40%", "0%"],
        ["110%", "150%", "180%", "200%"],
      );
      const i = mt.timeline();
      gi(
        i,
        "#jira-circle",
        ["#jira-stop1", "#jira-stop2", "#jira-stop3", "#jira-stop4"],
        ["-100%", "-60%", "-40%", "0%"],
        ["110%", "150%", "180%", "200%"],
      ),
        u.add(t, 0),
        u.add(e, "-=1"),
        u.add(i, "-=1");
    });
});
