(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888], {
    8702: function (e) {
      /*!
       * Bootstrap v5.3.2 (https://getbootstrap.com/)
       * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       */
      e.exports = function () {
        "use strict";
        let e = new Map,
          t = {
            set(t, i, n) {
              e.has(t) || e.set(t, new Map);
              let s = e.get(t);
              s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
            },
            get: (t, i) => e.has(t) && e.get(t).get(i) || null,
            remove(t, i) {
              if (!e.has(t)) return;
              let n = e.get(t);
              n.delete(i), 0 === n.size && e.delete(t)
            }
          },
          i = "transitionend",
          n = e => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), e),
          s = e => {
            e.dispatchEvent(new Event(i))
          },
          r = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
          o = e => r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(n(e)) : null,
          a = e => {
            if (!r(e) || 0 === e.getClientRects().length) return !1;
            let t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
              i = e.closest("details:not([open])");
            if (!i) return t;
            if (i !== e) {
              let t = e.closest("summary");
              if (t && t.parentNode !== i || null === t) return !1
            }
            return t
          },
          l = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
          c = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              let t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c(e.parentNode) : null
          },
          h = () => {},
          d = e => {
            e.offsetHeight
          },
          u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
          f = [],
          p = () => "rtl" === document.documentElement.dir,
          m = e => {
            var t;
            t = () => {
              let t = u();
              if (t) {
                let i = e.NAME,
                  n = t.fn[i];
                t.fn[i] = e.jQueryInterface, t.fn[i].Constructor = e, t.fn[i].noConflict = () => (t.fn[i] = n, e.jQueryInterface)
              }
            }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
              for (let e of f) e()
            }), f.push(t)) : t()
          },
          g = (e, t = [], i = e) => "function" == typeof e ? e(...t) : i,
          _ = (e, t, n = !0) => {
            if (!n) return void g(e);
            let r = (e => {
                if (!e) return 0;
                let {
                  transitionDuration: t,
                  transitionDelay: i
                } = window.getComputedStyle(e), n = Number.parseFloat(t), s = Number.parseFloat(i);
                return n || s ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0
              })(t) + 5,
              o = !1,
              a = ({
                target: n
              }) => {
                n === t && (o = !0, t.removeEventListener(i, a), g(e))
              };
            t.addEventListener(i, a), setTimeout(() => {
              o || s(t)
            }, r)
          },
          b = (e, t, i, n) => {
            let s = e.length,
              r = e.indexOf(t);
            return -1 === r ? !i && n ? e[s - 1] : e[0] : (r += i ? 1 : -1, n && (r = (r + s) % s), e[Math.max(0, Math.min(r, s - 1))])
          },
          v = /[^.]*(?=\..*)\.|.*/,
          y = /\..*/,
          w = /::\d+$/,
          E = {},
          A = 1,
          C = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
          },
          T = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function O(e, t) {
          return t && `${t}::${A++}` || e.uidEvent || A++
        }

        function x(e) {
          let t = O(e);
          return e.uidEvent = t, E[t] = E[t] || {}, E[t]
        }

        function k(e, t, i = null) {
          return Object.values(e).find(e => e.callable === t && e.delegationSelector === i)
        }

        function L(e, t, i) {
          let n = "string" == typeof t,
            s = $(e);
          return T.has(s) || (s = e), [n, n ? i : t || i, s]
        }

        function S(e, t, i, n, s) {
          var r, o, a;
          if ("string" != typeof t || !e) return;
          let [l, c, h] = L(t, i, n);
          t in C && (r = c, c = function (e) {
            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return r.call(this, e)
          });
          let d = x(e),
            u = d[h] || (d[h] = {}),
            f = k(u, c, l ? i : null);
          if (f) return void(f.oneOff = f.oneOff && s);
          let p = O(c, t.replace(v, "")),
            m = l ? (o = c, function t(n) {
              let s = e.querySelectorAll(i);
              for (let {
                  target: r
                } = n; r && r !== this; r = r.parentNode)
                for (let a of s)
                  if (a === r) return I(n, {
                    delegateTarget: r
                  }), t.oneOff && N.off(e, n.type, i, o), o.apply(r, [n])
            }) : (a = c, function t(i) {
              return I(i, {
                delegateTarget: e
              }), t.oneOff && N.off(e, i.type, a), a.apply(e, [i])
            });
          m.delegationSelector = l ? i : null, m.callable = c, m.oneOff = s, m.uidEvent = p, u[p] = m, e.addEventListener(h, m, l)
        }

        function D(e, t, i, n, s) {
          let r = k(t[i], n, s);
          r && (e.removeEventListener(i, r, !!s), delete t[i][r.uidEvent])
        }

        function $(e) {
          return C[e = e.replace(y, "")] || e
        }
        let N = {
          on(e, t, i, n) {
            S(e, t, i, n, !1)
          },
          one(e, t, i, n) {
            S(e, t, i, n, !0)
          },
          off(e, t, i, n) {
            if ("string" != typeof t || !e) return;
            let [s, r, o] = L(t, i, n), a = o !== t, l = x(e), c = l[o] || {}, h = t.startsWith(".");
            if (void 0 === r) {
              if (h)
                for (let i of Object.keys(l)) ! function (e, t, i, n) {
                  for (let [s, r] of Object.entries(t[i] || {})) s.includes(n) && D(e, t, i, r.callable, r.delegationSelector)
                }(e, l, i, t.slice(1));
              for (let [i, n] of Object.entries(c)) {
                let s = i.replace(w, "");
                a && !t.includes(s) || D(e, l, o, n.callable, n.delegationSelector)
              }
            } else {
              if (!Object.keys(c).length) return;
              D(e, l, o, r, s ? i : null)
            }
          },
          trigger(e, t, i) {
            if ("string" != typeof t || !e) return null;
            let n = u(),
              s = null,
              r = !0,
              o = !0,
              a = !1;
            t !== $(t) && n && (s = n.Event(t, i), n(e).trigger(s), r = !s.isPropagationStopped(), o = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            let l = I(new Event(t, {
              bubbles: r,
              cancelable: !0
            }), i);
            return a && l.preventDefault(), o && e.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
          }
        };

        function I(e, t = {}) {
          for (let [i, n] of Object.entries(t)) try {
            e[i] = n
          } catch (t) {
            Object.defineProperty(e, i, {
              configurable: !0,
              get: () => n
            })
          }
          return e
        }

        function P(e) {
          if ("true" === e) return !0;
          if ("false" === e) return !1;
          if (e === Number(e).toString()) return Number(e);
          if ("" === e || "null" === e) return null;
          if ("string" != typeof e) return e;
          try {
            return JSON.parse(decodeURIComponent(e))
          } catch (t) {
            return e
          }
        }

        function j(e) {
          return e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
        }
        let M = {
          setDataAttribute(e, t, i) {
            e.setAttribute(`data-bs-${j(t)}`, i)
          },
          removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${j(t)}`)
          },
          getDataAttributes(e) {
            if (!e) return {};
            let t = {};
            for (let i of Object.keys(e.dataset).filter(e => e.startsWith("bs") && !e.startsWith("bsConfig"))) {
              let n = i.replace(/^bs/, "");
              t[n = n.charAt(0).toLowerCase() + n.slice(1, n.length)] = P(e.dataset[i])
            }
            return t
          },
          getDataAttribute: (e, t) => P(e.getAttribute(`data-bs-${j(t)}`))
        };
        class F {
          static get Default() {
            return {}
          }
          static get DefaultType() {
            return {}
          }
          static get NAME() {
            throw Error('You have to implement the static method "NAME", for each component!')
          }
          _getConfig(e) {
            return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
          }
          _configAfterMerge(e) {
            return e
          }
          _mergeConfigObj(e, t) {
            let i = r(t) ? M.getDataAttribute(t, "config") : {};
            return {
              ...this.constructor.Default,
              ..."object" == typeof i ? i : {},
              ...r(t) ? M.getDataAttributes(t) : {},
              ..."object" == typeof e ? e : {}
            }
          }
          _typeCheckConfig(e, t = this.constructor.DefaultType) {
            for (let [i, n] of Object.entries(t)) {
              let t = e[i],
                s = r(t) ? "element" : null == t ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(n).test(s)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${n}".`)
            }
          }
        }
        class H extends F {
          constructor(e, i) {
            super(), (e = o(e)) && (this._element = e, this._config = this._getConfig(i), t.set(this._element, this.constructor.DATA_KEY, this))
          }
          dispose() {
            for (let e of (t.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[e] = null
          }
          _queueCallback(e, t, i = !0) {
            _(e, t, i)
          }
          _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
          }
          static getInstance(e) {
            return t.get(o(e), this.DATA_KEY)
          }
          static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
          }
          static get VERSION() {
            return "5.3.2"
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
          }
          static eventName(e) {
            return `${e}${this.EVENT_KEY}`
          }
        }
        let W = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
              let i = e.getAttribute("href");
              if (!i || !i.includes("#") && !i.startsWith(".")) return null;
              i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), t = i && "#" !== i ? n(i.trim()) : null
            }
            return t
          },
          R = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter(e => e.matches(t)),
            parents(e, t) {
              let i = [],
                n = e.parentNode.closest(t);
              for (; n;) i.push(n), n = n.parentNode.closest(t);
              return i
            },
            prev(e, t) {
              let i = e.previousElementSibling;
              for (; i;) {
                if (i.matches(t)) return [i];
                i = i.previousElementSibling
              }
              return []
            },
            next(e, t) {
              let i = e.nextElementSibling;
              for (; i;) {
                if (i.matches(t)) return [i];
                i = i.nextElementSibling
              }
              return []
            },
            focusableChildren(e) {
              let t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e => `${e}:not([tabindex^="-"])`).join(",");
              return this.find(t, e).filter(e => !l(e) && a(e))
            },
            getSelectorFromElement(e) {
              let t = W(e);
              return t && R.findOne(t) ? t : null
            },
            getElementFromSelector(e) {
              let t = W(e);
              return t ? R.findOne(t) : null
            },
            getMultipleElementsFromSelector(e) {
              let t = W(e);
              return t ? R.find(t) : []
            }
          },
          z = (e, t = "hide") => {
            let i = `click.dismiss${e.EVENT_KEY}`,
              n = e.NAME;
            N.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
              if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
              let s = R.getElementFromSelector(this) || this.closest(`.${n}`);
              e.getOrCreateInstance(s)[t]()
            })
          },
          B = ".bs.alert",
          q = `close${B}`,
          V = `closed${B}`;
        class K extends H {
          static get NAME() {
            return "alert"
          }
          close() {
            if (N.trigger(this._element, q).defaultPrevented) return;
            this._element.classList.remove("show");
            let e = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, e)
          }
          _destroyElement() {
            this._element.remove(), N.trigger(this._element, V), this.dispose()
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = K.getOrCreateInstance(this);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                t[e](this)
              }
            })
          }
        }
        z(K, "close"), m(K);
        let X = '[data-bs-toggle="button"]';
        class Q extends H {
          static get NAME() {
            return "button"
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = Q.getOrCreateInstance(this);
              "toggle" === e && t[e]()
            })
          }
        }
        N.on(document, "click.bs.button.data-api", X, e => {
          e.preventDefault();
          let t = e.target.closest(X);
          Q.getOrCreateInstance(t).toggle()
        }), m(Q);
        let Y = ".bs.swipe",
          U = `touchstart${Y}`,
          G = `touchmove${Y}`,
          J = `touchend${Y}`,
          Z = `pointerdown${Y}`,
          ee = `pointerup${Y}`,
          et = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
          },
          ei = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
          };
        class en extends F {
          constructor(e, t) {
            super(), this._element = e, e && en.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents())
          }
          static get Default() {
            return et
          }
          static get DefaultType() {
            return ei
          }
          static get NAME() {
            return "swipe"
          }
          dispose() {
            N.off(this._element, Y)
          }
          _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
          }
          _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
          }
          _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
          }
          _handleSwipe() {
            let e = Math.abs(this._deltaX);
            if (e <= 40) return;
            let t = e / this._deltaX;
            this._deltaX = 0, t && g(t > 0 ? this._config.rightCallback : this._config.leftCallback)
          }
          _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, Z, e => this._start(e)), N.on(this._element, ee, e => this._end(e)), this._element.classList.add("pointer-event")) : (N.on(this._element, U, e => this._start(e)), N.on(this._element, G, e => this._move(e)), N.on(this._element, J, e => this._end(e)))
          }
          _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
          }
          static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
          }
        }
        let es = ".bs.carousel",
          er = ".data-api",
          eo = "next",
          ea = "prev",
          el = "left",
          ec = "right",
          eh = `slide${es}`,
          ed = `slid${es}`,
          eu = `keydown${es}`,
          ef = `mouseenter${es}`,
          ep = `mouseleave${es}`,
          em = `dragstart${es}`,
          eg = `load${es}${er}`,
          e_ = `click${es}${er}`,
          eb = "carousel",
          ev = "active",
          ey = ".active",
          ew = ".carousel-item",
          eE = ey + ew,
          eA = {
            ArrowLeft: ec,
            ArrowRight: el
          },
          eC = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
          },
          eT = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
          };
        class eO extends H {
          constructor(e, t) {
            super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === eb && this.cycle()
          }
          static get Default() {
            return eC
          }
          static get DefaultType() {
            return eT
          }
          static get NAME() {
            return "carousel"
          }
          next() {
            this._slide(eo)
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
          }
          prev() {
            this._slide(ea)
          }
          pause() {
            this._isSliding && s(this._element), this._clearInterval()
          }
          cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
          }
          _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ed, () => this.cycle()) : this.cycle())
          }
          to(e) {
            let t = this._getItems();
            if (e > t.length - 1 || e < 0) return;
            if (this._isSliding) return void N.one(this._element, ed, () => this.to(e));
            let i = this._getItemIndex(this._getActive());
            i !== e && this._slide(e > i ? eo : ea, t[e])
          }
          dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
          }
          _configAfterMerge(e) {
            return e.defaultInterval = e.interval, e
          }
          _addEventListeners() {
            this._config.keyboard && N.on(this._element, eu, e => this._keydown(e)), "hover" === this._config.pause && (N.on(this._element, ef, () => this.pause()), N.on(this._element, ep, () => this._maybeEnableCycle())), this._config.touch && en.isSupported() && this._addTouchEventListeners()
          }
          _addTouchEventListeners() {
            for (let e of R.find(".carousel-item img", this._element)) N.on(e, em, e => e.preventDefault());
            this._swipeHelper = new en(this._element, {
              leftCallback: () => this._slide(this._directionToOrder(el)),
              rightCallback: () => this._slide(this._directionToOrder(ec)),
              endCallback: () => {
                "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
              }
            })
          }
          _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            let t = eA[e.key];
            t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
          }
          _getItemIndex(e) {
            return this._getItems().indexOf(e)
          }
          _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement) return;
            let t = R.findOne(ey, this._indicatorsElement);
            t.classList.remove(ev), t.removeAttribute("aria-current");
            let i = R.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            i && (i.classList.add(ev), i.setAttribute("aria-current", "true"))
          }
          _updateInterval() {
            let e = this._activeElement || this._getActive();
            if (!e) return;
            let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
          }
          _slide(e, t = null) {
            if (this._isSliding) return;
            let i = this._getActive(),
              n = e === eo,
              s = t || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            let r = this._getItemIndex(s),
              o = t => N.trigger(this._element, t, {
                relatedTarget: s,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(i),
                to: r
              });
            if (o(eh).defaultPrevented || !i || !s) return;
            let a = !!this._interval;
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = s;
            let l = n ? "carousel-item-start" : "carousel-item-end",
              c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(() => {
              s.classList.remove(l, c), s.classList.add(ev), i.classList.remove(ev, c, l), this._isSliding = !1, o(ed)
            }, i, this._isAnimated()), a && this.cycle()
          }
          _isAnimated() {
            return this._element.classList.contains("slide")
          }
          _getActive() {
            return R.findOne(eE, this._element)
          }
          _getItems() {
            return R.find(ew, this._element)
          }
          _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
          }
          _directionToOrder(e) {
            return p() ? e === el ? ea : eo : e === el ? eo : ea
          }
          _orderToDirection(e) {
            return p() ? e === ea ? el : ec : e === ea ? ec : el
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = eO.getOrCreateInstance(this, e);
              if ("number" != typeof e) {
                if ("string" == typeof e) {
                  if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                  t[e]()
                }
              } else t.to(e)
            })
          }
        }
        N.on(document, e_, "[data-bs-slide], [data-bs-slide-to]", function (e) {
          let t = R.getElementFromSelector(this);
          if (!t || !t.classList.contains(eb)) return;
          e.preventDefault();
          let i = eO.getOrCreateInstance(t),
            n = this.getAttribute("data-bs-slide-to");
          return n ? i.to(n) : "next" === M.getDataAttribute(this, "slide") ? i.next() : i.prev(), void i._maybeEnableCycle()
        }), N.on(window, eg, () => {
          for (let e of R.find('[data-bs-ride="carousel"]')) eO.getOrCreateInstance(e)
        }), m(eO);
        let ex = ".bs.collapse",
          ek = `show${ex}`,
          eL = `shown${ex}`,
          eS = `hide${ex}`,
          eD = `hidden${ex}`,
          e$ = `click${ex}.data-api`,
          eN = "show",
          eI = "collapse",
          eP = "collapsing",
          ej = `:scope .${eI} .${eI}`,
          eM = '[data-bs-toggle="collapse"]',
          eF = {
            parent: null,
            toggle: !0
          },
          eH = {
            parent: "(null|element)",
            toggle: "boolean"
          };
        class eW extends H {
          constructor(e, t) {
            for (let i of (super(e, t), this._isTransitioning = !1, this._triggerArray = [], R.find(eM))) {
              let e = R.getSelectorFromElement(i),
                t = R.find(e).filter(e => e === this._element);
              null !== e && t.length && this._triggerArray.push(i)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
          }
          static get Default() {
            return eF
          }
          static get DefaultType() {
            return eH
          }
          static get NAME() {
            return "collapse"
          }
          toggle() {
            this._isShown() ? this.hide() : this.show()
          }
          show() {
            if (this._isTransitioning || this._isShown()) return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e => e !== this._element).map(e => eW.getOrCreateInstance(e, {
                toggle: !1
              }))), e.length && e[0]._isTransitioning || N.trigger(this._element, ek).defaultPrevented) return;
            for (let t of e) t.hide();
            let t = this._getDimension();
            this._element.classList.remove(eI), this._element.classList.add(eP), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            let i = `scroll${t[0].toUpperCase()+t.slice(1)}`;
            this._queueCallback(() => {
              this._isTransitioning = !1, this._element.classList.remove(eP), this._element.classList.add(eI, eN), this._element.style[t] = "", N.trigger(this._element, eL)
            }, this._element, !0), this._element.style[t] = `${this._element[i]}px`
          }
          hide() {
            if (this._isTransitioning || !this._isShown() || N.trigger(this._element, eS).defaultPrevented) return;
            let e = this._getDimension();
            for (let t of (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, d(this._element), this._element.classList.add(eP), this._element.classList.remove(eI, eN), this._triggerArray)) {
              let e = R.getElementFromSelector(t);
              e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => {
              this._isTransitioning = !1, this._element.classList.remove(eP), this._element.classList.add(eI), N.trigger(this._element, eD)
            }, this._element, !0)
          }
          _isShown(e = this._element) {
            return e.classList.contains(eN)
          }
          _configAfterMerge(e) {
            return e.toggle = !!e.toggle, e.parent = o(e.parent), e
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
          }
          _initializeChildren() {
            if (this._config.parent)
              for (let e of this._getFirstLevelChildren(eM)) {
                let t = R.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
              }
          }
          _getFirstLevelChildren(e) {
            let t = R.find(ej, this._config.parent);
            return R.find(e, this._config.parent).filter(e => !t.includes(e))
          }
          _addAriaAndCollapsedClass(e, t) {
            if (e.length)
              for (let i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t)
          }
          static jQueryInterface(e) {
            let t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each(function () {
              let i = eW.getOrCreateInstance(this, t);
              if ("string" == typeof e) {
                if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                i[e]()
              }
            })
          }
        }
        N.on(document, e$, eM, function (e) {
          for (let t of (("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault(), R.getMultipleElementsFromSelector(this))) eW.getOrCreateInstance(t, {
            toggle: !1
          }).toggle()
        }), m(eW);
        var eR = "bottom",
          ez = "right",
          eB = "left",
          eq = "auto",
          eV = ["top", eR, ez, eB],
          eK = "start",
          eX = "clippingParents",
          eQ = "viewport",
          eY = "popper",
          eU = "reference",
          eG = eV.reduce(function (e, t) {
            return e.concat([t + "-" + eK, t + "-end"])
          }, []),
          eJ = [].concat(eV, [eq]).reduce(function (e, t) {
            return e.concat([t, t + "-" + eK, t + "-end"])
          }, []),
          eZ = "beforeRead",
          e0 = "read",
          e1 = "afterRead",
          e2 = "beforeMain",
          e3 = "main",
          e8 = "afterMain",
          e5 = "beforeWrite",
          e7 = "write",
          e9 = "afterWrite",
          e6 = [eZ, e0, e1, e2, e3, e8, e5, e7, e9];

        function e4(e) {
          return e ? (e.nodeName || "").toLowerCase() : null
        }

        function te(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
          }
          return e
        }

        function tt(e) {
          return e instanceof te(e).Element || e instanceof Element
        }

        function ti(e) {
          return e instanceof te(e).HTMLElement || e instanceof HTMLElement
        }

        function tn(e) {
          return "undefined" != typeof ShadowRoot && (e instanceof te(e).ShadowRoot || e instanceof ShadowRoot)
        }
        let ts = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var i = t.styles[e] || {},
                n = t.attributes[e] || {},
                s = t.elements[e];
              ti(s) && e4(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
              }))
            })
          },
          effect: function (e) {
            var t = e.state,
              i = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0"
                },
                arrow: {
                  position: "absolute"
                },
                reference: {}
              };
            return Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
              function () {
                Object.keys(t.elements).forEach(function (e) {
                  var n = t.elements[e],
                    s = t.attributes[e] || {},
                    r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function (e, t) {
                      return e[t] = "", e
                    }, {});
                  ti(n) && e4(n) && (Object.assign(n.style, r), Object.keys(s).forEach(function (e) {
                    n.removeAttribute(e)
                  }))
                })
              }
          },
          requires: ["computeStyles"]
        };

        function tr(e) {
          return e.split("-")[0]
        }
        var to = Math.max,
          ta = Math.min,
          tl = Math.round;

        function tc() {
          var e = navigator.userAgentData;
          return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function (e) {
            return e.brand + "/" + e.version
          }).join(" ") : navigator.userAgent
        }

        function th() {
          return !/^((?!chrome|android).)*safari/i.test(tc())
        }

        function td(e, t, i) {
          void 0 === t && (t = !1), void 0 === i && (i = !1);
          var n = e.getBoundingClientRect(),
            s = 1,
            r = 1;
          t && ti(e) && (s = e.offsetWidth > 0 && tl(n.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && tl(n.height) / e.offsetHeight || 1);
          var o = (tt(e) ? te(e) : window).visualViewport,
            a = !th() && i,
            l = (n.left + (a && o ? o.offsetLeft : 0)) / s,
            c = (n.top + (a && o ? o.offsetTop : 0)) / r,
            h = n.width / s,
            d = n.height / r;
          return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
          }
        }

        function tu(e) {
          var t = td(e),
            i = e.offsetWidth,
            n = e.offsetHeight;
          return 1 >= Math.abs(t.width - i) && (i = t.width), 1 >= Math.abs(t.height - n) && (n = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: i,
            height: n
          }
        }

        function tf(e, t) {
          var i = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (i && tn(i)) {
            var n = t;
            do {
              if (n && e.isSameNode(n)) return !0;
              n = n.parentNode || n.host
            } while (n)
          }
          return !1
        }

        function tp(e) {
          return te(e).getComputedStyle(e)
        }

        function tm(e) {
          return ((tt(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }

        function tg(e) {
          return "html" === e4(e) ? e : e.assignedSlot || e.parentNode || (tn(e) ? e.host : null) || tm(e)
        }

        function t_(e) {
          return ti(e) && "fixed" !== tp(e).position ? e.offsetParent : null
        }

        function tb(e) {
          for (var t = te(e), i = t_(e); i && ["table", "td", "th"].indexOf(e4(i)) >= 0 && "static" === tp(i).position;) i = t_(i);
          return i && ("html" === e4(i) || "body" === e4(i) && "static" === tp(i).position) ? t : i || function (e) {
            var t = /firefox/i.test(tc());
            if (/Trident/i.test(tc()) && ti(e) && "fixed" === tp(e).position) return null;
            var i = tg(e);
            for (tn(i) && (i = i.host); ti(i) && 0 > ["html", "body"].indexOf(e4(i));) {
              var n = tp(i);
              if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) return i;
              i = i.parentNode
            }
            return null
          }(e) || t
        }

        function tv(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }

        function ty(e, t, i) {
          return to(e, ta(t, i))
        }

        function tw(e) {
          return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }, e)
        }

        function tE(e, t) {
          return t.reduce(function (t, i) {
            return t[i] = e, t
          }, {})
        }
        let tA = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t, i = e.state,
              n = e.name,
              s = e.options,
              r = i.elements.arrow,
              o = i.modifiersData.popperOffsets,
              a = tr(i.placement),
              l = tv(a),
              c = [eB, ez].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
              var h, d = tw("number" != typeof (h = "function" == typeof (h = s.padding) ? h(Object.assign({}, i.rects, {
                  placement: i.placement
                })) : h) ? h : tE(h, eV)),
                u = tu(r),
                f = "y" === l ? "top" : eB,
                p = "y" === l ? eR : ez,
                m = i.rects.reference[c] + i.rects.reference[l] - o[l] - i.rects.popper[c],
                g = o[l] - i.rects.reference[l],
                _ = tb(r),
                b = _ ? "y" === l ? _.clientHeight || 0 : _.clientWidth || 0 : 0,
                v = d[f],
                y = b - u[c] - d[p],
                w = b / 2 - u[c] / 2 + (m / 2 - g / 2),
                E = ty(v, w, y);
              i.modifiersData[n] = ((t = {})[l] = E, t.centerOffset = E - w, t)
            }
          },
          effect: function (e) {
            var t = e.state,
              i = e.options.element,
              n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = t.elements.popper.querySelector(n))) && tf(t.elements.popper, n) && (t.elements.arrow = n)
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"]
        };

        function tC(e) {
          return e.split("-")[1]
        }
        var tT = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };

        function tO(e) {
          var t, i = e.popper,
            n = e.popperRect,
            s = e.placement,
            r = e.variation,
            o = e.offsets,
            a = e.position,
            l = e.gpuAcceleration,
            c = e.adaptive,
            h = e.roundOffsets,
            d = e.isFixed,
            u = o.x,
            f = void 0 === u ? 0 : u,
            p = o.y,
            m = void 0 === p ? 0 : p,
            g = "function" == typeof h ? h({
              x: f,
              y: m
            }) : {
              x: f,
              y: m
            };
          f = g.x, m = g.y;
          var _ = o.hasOwnProperty("x"),
            b = o.hasOwnProperty("y"),
            v = eB,
            y = "top",
            w = window;
          if (c) {
            var E = tb(i),
              A = "clientHeight",
              C = "clientWidth";
            E === te(i) && "static" !== tp(E = tm(i)).position && "absolute" === a && (A = "scrollHeight", C = "scrollWidth"), ("top" === s || (s === eB || s === ez) && "end" === r) && (y = eR, m -= (d && E === w && w.visualViewport ? w.visualViewport.height : E[A]) - n.height, m *= l ? 1 : -1), s !== eB && ("top" !== s && s !== eR || "end" !== r) || (v = ez, f -= (d && E === w && w.visualViewport ? w.visualViewport.width : E[C]) - n.width, f *= l ? 1 : -1)
          }
          var T, O, x, k, L, S, D = Object.assign({
              position: a
            }, c && tT),
            $ = !0 === h ? (T = {
              x: f,
              y: m
            }, O = te(i), x = T.x, k = T.y, {
              x: tl(x * (L = O.devicePixelRatio || 1)) / L || 0,
              y: tl(k * L) / L || 0
            }) : {
              x: f,
              y: m
            };
          return f = $.x, m = $.y, l ? Object.assign({}, D, ((S = {})[y] = b ? "0" : "", S[v] = _ ? "0" : "", S.transform = 1 >= (w.devicePixelRatio || 1) ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", S)) : Object.assign({}, D, ((t = {})[y] = b ? m + "px" : "", t[v] = _ ? f + "px" : "", t.transform = "", t))
        }
        let tx = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              n = i.gpuAcceleration,
              s = i.adaptive,
              r = i.roundOffsets,
              o = void 0 === r || r,
              a = {
                placement: tr(t.placement),
                variation: tC(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: void 0 === n || n,
                isFixed: "fixed" === t.options.strategy
              };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, tO(Object.assign({}, a, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: void 0 === s || s,
              roundOffsets: o
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, tO(Object.assign({}, a, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: o
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement
            })
          },
          data: {}
        };
        var tk = {
          passive: !0
        };
        let tL = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              i = e.instance,
              n = e.options,
              s = n.scroll,
              r = void 0 === s || s,
              o = n.resize,
              a = void 0 === o || o,
              l = te(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return r && c.forEach(function (e) {
                e.addEventListener("scroll", i.update, tk)
              }), a && l.addEventListener("resize", i.update, tk),
              function () {
                r && c.forEach(function (e) {
                  e.removeEventListener("scroll", i.update, tk)
                }), a && l.removeEventListener("resize", i.update, tk)
              }
          },
          data: {}
        };
        var tS = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

        function tD(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return tS[e]
          })
        }
        var t$ = {
          start: "end",
          end: "start"
        };

        function tN(e) {
          return e.replace(/start|end/g, function (e) {
            return t$[e]
          })
        }

        function tI(e) {
          var t = te(e);
          return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
          }
        }

        function tP(e) {
          return td(tm(e)).left + tI(e).scrollLeft
        }

        function tj(e) {
          var t = tp(e),
            i = t.overflow,
            n = t.overflowX,
            s = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(i + s + n)
        }

        function tM(e, t) {
          void 0 === t && (t = []);
          var i, n = function e(t) {
              return ["html", "body", "#document"].indexOf(e4(t)) >= 0 ? t.ownerDocument.body : ti(t) && tj(t) ? t : e(tg(t))
            }(e),
            s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
            r = te(n),
            o = s ? [r].concat(r.visualViewport || [], tj(n) ? n : []) : n,
            a = t.concat(o);
          return s ? a : a.concat(tM(tg(o)))
        }

        function tF(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
          })
        }

        function tH(e, t, i) {
          var n, s, r, o, a, l, c, h, d, u;
          return t === eQ ? tF(function (e, t) {
            var i = te(e),
              n = tm(e),
              s = i.visualViewport,
              r = n.clientWidth,
              o = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              r = s.width, o = s.height;
              var c = th();
              (c || !c && "fixed" === t) && (a = s.offsetLeft, l = s.offsetTop)
            }
            return {
              width: r,
              height: o,
              x: a + tP(e),
              y: l
            }
          }(e, i)) : tt(t) ? ((n = td(t, !1, "fixed" === i)).top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n) : tF((s = tm(e), o = tm(s), a = tI(s), l = null == (r = s.ownerDocument) ? void 0 : r.body, c = to(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), h = to(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), d = -a.scrollLeft + tP(s), u = -a.scrollTop, "rtl" === tp(l || o).direction && (d += to(o.clientWidth, l ? l.clientWidth : 0) - c), {
            width: c,
            height: h,
            x: d,
            y: u
          }))
        }

        function tW(e) {
          var t, i = e.reference,
            n = e.element,
            s = e.placement,
            r = s ? tr(s) : null,
            o = s ? tC(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
          switch (r) {
            case "top":
              t = {
                x: a,
                y: i.y - n.height
              };
              break;
            case eR:
              t = {
                x: a,
                y: i.y + i.height
              };
              break;
            case ez:
              t = {
                x: i.x + i.width,
                y: l
              };
              break;
            case eB:
              t = {
                x: i.x - n.width,
                y: l
              };
              break;
            default:
              t = {
                x: i.x,
                y: i.y
              }
          }
          var c = r ? tv(r) : null;
          if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (o) {
              case eK:
                t[c] = t[c] - (i[h] / 2 - n[h] / 2);
                break;
              case "end":
                t[c] = t[c] + (i[h] / 2 - n[h] / 2)
            }
          }
          return t
        }

        function tR(e, t) {
          void 0 === t && (t = {});
          var i, n, s, r, o, a, l = t,
            c = l.placement,
            h = void 0 === c ? e.placement : c,
            d = l.strategy,
            u = void 0 === d ? e.strategy : d,
            f = l.boundary,
            p = void 0 === f ? eX : f,
            m = l.rootBoundary,
            g = l.elementContext,
            _ = void 0 === g ? eY : g,
            b = l.altBoundary,
            v = l.padding,
            y = void 0 === v ? 0 : v,
            w = tw("number" != typeof y ? y : tE(y, eV)),
            E = _ === eY ? eU : eY,
            A = e.rects.popper,
            C = e.elements[void 0 !== b && b ? E : _],
            T = (i = tt(C) ? C : C.contextElement || tm(e.elements.popper), o = (r = [].concat("clippingParents" === p ? (n = tM(tg(i)), tt(s = ["absolute", "fixed"].indexOf(tp(i).position) >= 0 && ti(i) ? tb(i) : i) ? n.filter(function (e) {
              return tt(e) && tf(e, s) && "body" !== e4(e)
            }) : []) : [].concat(p), [void 0 === m ? eQ : m]))[0], (a = r.reduce(function (e, t) {
              var n = tH(i, t, u);
              return e.top = to(n.top, e.top), e.right = ta(n.right, e.right), e.bottom = ta(n.bottom, e.bottom), e.left = to(n.left, e.left), e
            }, tH(i, o, u))).width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a),
            O = td(e.elements.reference),
            x = tW({
              reference: O,
              element: A,
              strategy: "absolute",
              placement: h
            }),
            k = tF(Object.assign({}, A, x)),
            L = _ === eY ? k : O,
            S = {
              top: T.top - L.top + w.top,
              bottom: L.bottom - T.bottom + w.bottom,
              left: T.left - L.left + w.left,
              right: L.right - T.right + w.right
            },
            D = e.modifiersData.offset;
          if (_ === eY && D) {
            var $ = D[h];
            Object.keys(S).forEach(function (e) {
              var t = [ez, eR].indexOf(e) >= 0 ? 1 : -1,
                i = ["top", eR].indexOf(e) >= 0 ? "y" : "x";
              S[e] += $[i] * t
            })
          }
          return S
        }
        let tz = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              n = e.name;
            if (!t.modifiersData[n]._skip) {
              for (var s = i.mainAxis, r = void 0 === s || s, o = i.altAxis, a = void 0 === o || o, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = t.options.placement, _ = tr(g), b = l || (_ !== g && p ? function (e) {
                  if (tr(e) === eq) return [];
                  var t = tD(e);
                  return [tN(e), t, tN(t)]
                }(g) : [tD(g)]), v = [g].concat(b).reduce(function (e, i) {
                  var n, s, r, o, a, l, u, f, g, _, b, v;
                  return e.concat(tr(i) === eq ? (s = (n = {
                    placement: i,
                    boundary: h,
                    rootBoundary: d,
                    padding: c,
                    flipVariations: p,
                    allowedAutoPlacements: m
                  }).placement, r = n.boundary, o = n.rootBoundary, a = n.padding, l = n.flipVariations, f = void 0 === (u = n.allowedAutoPlacements) ? eJ : u, 0 === (b = (_ = (g = tC(s)) ? l ? eG : eG.filter(function (e) {
                    return tC(e) === g
                  }) : eV).filter(function (e) {
                    return f.indexOf(e) >= 0
                  })).length && (b = _), Object.keys(v = b.reduce(function (e, i) {
                    return e[i] = tR(t, {
                      placement: i,
                      boundary: r,
                      rootBoundary: o,
                      padding: a
                    })[tr(i)], e
                  }, {})).sort(function (e, t) {
                    return v[e] - v[t]
                  })) : i)
                }, []), y = t.rects.reference, w = t.rects.popper, E = new Map, A = !0, C = v[0], T = 0; T < v.length; T++) {
                var O = v[T],
                  x = tr(O),
                  k = tC(O) === eK,
                  L = ["top", eR].indexOf(x) >= 0,
                  S = L ? "width" : "height",
                  D = tR(t, {
                    placement: O,
                    boundary: h,
                    rootBoundary: d,
                    altBoundary: u,
                    padding: c
                  }),
                  $ = L ? k ? ez : eB : k ? eR : "top";
                y[S] > w[S] && ($ = tD($));
                var N = tD($),
                  I = [];
                if (r && I.push(D[x] <= 0), a && I.push(D[$] <= 0, D[N] <= 0), I.every(function (e) {
                    return e
                  })) {
                  C = O, A = !1;
                  break
                }
                E.set(O, I)
              }
              if (A)
                for (var P = function (e) {
                    var t = v.find(function (t) {
                      var i = E.get(t);
                      if (i) return i.slice(0, e).every(function (e) {
                        return e
                      })
                    });
                    if (t) return C = t, "break"
                  }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--);
              t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0)
            }
          },
          requiresIfExists: ["offset"],
          data: {
            _skip: !1
          }
        };

        function tB(e, t, i) {
          return void 0 === i && (i = {
            x: 0,
            y: 0
          }), {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x
          }
        }

        function tq(e) {
          return ["top", ez, eR, eB].some(function (t) {
            return e[t] >= 0
          })
        }
        let tV = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                i = e.name,
                n = t.rects.reference,
                s = t.rects.popper,
                r = t.modifiersData.preventOverflow,
                o = tR(t, {
                  elementContext: "reference"
                }),
                a = tR(t, {
                  altBoundary: !0
                }),
                l = tB(o, n),
                c = tB(a, s, r),
                h = tq(l),
                d = tq(c);
              t.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
              }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
              })
            }
          },
          tK = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
              var t = e.state,
                i = e.options,
                n = e.name,
                s = i.offset,
                r = void 0 === s ? [0, 0] : s,
                o = eJ.reduce(function (e, i) {
                  var n, s, o, a, l, c;
                  return e[i] = (n = t.rects, o = [eB, "top"].indexOf(s = tr(i)) >= 0 ? -1 : 1, l = (a = "function" == typeof r ? r(Object.assign({}, n, {
                    placement: i
                  })) : r)[0], c = a[1], l = l || 0, c = (c || 0) * o, [eB, ez].indexOf(s) >= 0 ? {
                    x: c,
                    y: l
                  } : {
                    x: l,
                    y: c
                  }), e
                }, {}),
                a = o[t.placement],
                l = a.x,
                c = a.y;
              null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = o
            }
          },
          tX = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                i = e.name;
              t.modifiersData[i] = tW({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
              })
            },
            data: {}
          },
          tQ = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                i = e.options,
                n = e.name,
                s = i.mainAxis,
                r = i.altAxis,
                o = i.boundary,
                a = i.rootBoundary,
                l = i.altBoundary,
                c = i.padding,
                h = i.tether,
                d = void 0 === h || h,
                u = i.tetherOffset,
                f = void 0 === u ? 0 : u,
                p = tR(t, {
                  boundary: o,
                  rootBoundary: a,
                  padding: c,
                  altBoundary: l
                }),
                m = tr(t.placement),
                g = tC(t.placement),
                _ = !g,
                b = tv(m),
                v = "x" === b ? "y" : "x",
                y = t.modifiersData.popperOffsets,
                w = t.rects.reference,
                E = t.rects.popper,
                A = "function" == typeof f ? f(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : f,
                C = "number" == typeof A ? {
                  mainAxis: A,
                  altAxis: A
                } : Object.assign({
                  mainAxis: 0,
                  altAxis: 0
                }, A),
                T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                O = {
                  x: 0,
                  y: 0
                };
              if (y) {
                if (void 0 === s || s) {
                  var x, k = "y" === b ? "top" : eB,
                    L = "y" === b ? eR : ez,
                    S = "y" === b ? "height" : "width",
                    D = y[b],
                    $ = D + p[k],
                    N = D - p[L],
                    I = d ? -E[S] / 2 : 0,
                    P = g === eK ? w[S] : E[S],
                    j = g === eK ? -E[S] : -w[S],
                    M = t.elements.arrow,
                    F = d && M ? tu(M) : {
                      width: 0,
                      height: 0
                    },
                    H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    },
                    W = H[k],
                    R = H[L],
                    z = ty(0, w[S], F[S]),
                    B = _ ? w[S] / 2 - I - z - W - C.mainAxis : P - z - W - C.mainAxis,
                    q = _ ? -w[S] / 2 + I + z + R + C.mainAxis : j + z + R + C.mainAxis,
                    V = t.elements.arrow && tb(t.elements.arrow),
                    K = V ? "y" === b ? V.clientTop || 0 : V.clientLeft || 0 : 0,
                    X = null != (x = null == T ? void 0 : T[b]) ? x : 0,
                    Q = ty(d ? ta($, D + B - X - K) : $, D, d ? to(N, D + q - X) : N);
                  y[b] = Q, O[b] = Q - D
                }
                if (void 0 !== r && r) {
                  var Y, U, G = "x" === b ? "top" : eB,
                    J = "x" === b ? eR : ez,
                    Z = y[v],
                    ee = "y" === v ? "height" : "width",
                    et = Z + p[G],
                    ei = Z - p[J],
                    en = -1 !== ["top", eB].indexOf(m),
                    es = null != (U = null == T ? void 0 : T[v]) ? U : 0,
                    er = en ? et : Z - w[ee] - E[ee] - es + C.altAxis,
                    eo = en ? Z + w[ee] + E[ee] - es - C.altAxis : ei,
                    ea = d && en ? (Y = ty(er, Z, eo)) > eo ? eo : Y : ty(d ? er : et, Z, d ? eo : ei);
                  y[v] = ea, O[v] = ea - Z
                }
                t.modifiersData[n] = O
              }
            },
            requiresIfExists: ["offset"]
          };
        var tY = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
        };

        function tU() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
          })
        }

        function tG(e) {
          void 0 === e && (e = {});
          var t = e,
            i = t.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = t.defaultOptions,
            r = void 0 === s ? tY : s;
          return function (e, t, i) {
            void 0 === i && (i = r);
            var s, o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, tY, r),
                modifiersData: {},
                elements: {
                  reference: e,
                  popper: t
                },
                attributes: {},
                styles: {}
              },
              a = [],
              l = !1,
              c = {
                state: o,
                setOptions: function (i) {
                  var s = "function" == typeof i ? i(o.options) : i;
                  h(), o.options = Object.assign({}, r, o.options, s), o.scrollParents = {
                    reference: tt(e) ? tM(e) : e.contextElement ? tM(e.contextElement) : [],
                    popper: tM(t)
                  };
                  var l, d, u, f, p, m = (l = Object.keys(p = [].concat(n, o.options.modifiers).reduce(function (e, t) {
                    var i = e[t.name];
                    return e[t.name] = i ? Object.assign({}, i, t, {
                      options: Object.assign({}, i.options, t.options),
                      data: Object.assign({}, i.data, t.data)
                    }) : t, e
                  }, {})).map(function (e) {
                    return p[e]
                  }), d = new Map, u = new Set, f = [], l.forEach(function (e) {
                    d.set(e.name, e)
                  }), l.forEach(function (e) {
                    u.has(e.name) || function e(t) {
                      u.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                        if (!u.has(t)) {
                          var i = d.get(t);
                          i && e(i)
                        }
                      }), f.push(t)
                    }(e)
                  }), e6.reduce(function (e, t) {
                    return e.concat(f.filter(function (e) {
                      return e.phase === t
                    }))
                  }, []));
                  return o.orderedModifiers = m.filter(function (e) {
                    return e.enabled
                  }), o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var s = n({
                        state: o,
                        name: t,
                        instance: c,
                        options: void 0 === i ? {} : i
                      });
                      a.push(s || function () {})
                    }
                  }), c.update()
                },
                forceUpdate: function () {
                  if (!l) {
                    var e = o.elements,
                      t = e.reference,
                      i = e.popper;
                    if (tU(t, i)) {
                      o.rects = {
                        reference: (n = tb(i), s = "fixed" === o.options.strategy, d = ti(n), u = ti(n) && (a = tl((r = n.getBoundingClientRect()).width) / n.offsetWidth || 1, h = tl(r.height) / n.offsetHeight || 1, 1 !== a || 1 !== h), f = tm(n), p = td(t, u, s), m = {
                          scrollLeft: 0,
                          scrollTop: 0
                        }, g = {
                          x: 0,
                          y: 0
                        }, (d || !d && !s) && (("body" !== e4(n) || tj(f)) && (m = n !== te(n) && ti(n) ? {
                          scrollLeft: n.scrollLeft,
                          scrollTop: n.scrollTop
                        } : tI(n)), ti(n) ? ((g = td(n, !0)).x += n.clientLeft, g.y += n.clientTop) : f && (g.x = tP(f))), {
                          x: p.left + m.scrollLeft - g.x,
                          y: p.top + m.scrollTop - g.y,
                          width: p.width,
                          height: p.height
                        }),
                        popper: tu(i)
                      }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach(function (e) {
                        return o.modifiersData[e.name] = Object.assign({}, e.data)
                      });
                      for (var n, s, r, a, h, d, u, f, p, m, g, _ = 0; _ < o.orderedModifiers.length; _++)
                        if (!0 !== o.reset) {
                          var b = o.orderedModifiers[_],
                            v = b.fn,
                            y = b.options,
                            w = void 0 === y ? {} : y,
                            E = b.name;
                          "function" == typeof v && (o = v({
                            state: o,
                            options: w,
                            name: E,
                            instance: c
                          }) || o)
                        } else o.reset = !1, _ = -1
                    }
                  }
                },
                update: function () {
                  return s || (s = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      s = void 0, e(new Promise(function (e) {
                        c.forceUpdate(), e(o)
                      }))
                    })
                  })), s
                },
                destroy: function () {
                  h(), l = !0
                }
              };
            if (!tU(e, t)) return c;

            function h() {
              a.forEach(function (e) {
                return e()
              }), a = []
            }
            return c.setOptions(i).then(function (e) {
              !l && i.onFirstUpdate && i.onFirstUpdate(e)
            }), c
          }
        }
        var tJ = tG(),
          tZ = tG({
            defaultModifiers: [tL, tX, tx, ts]
          }),
          t0 = tG({
            defaultModifiers: [tL, tX, tx, ts, tK, tz, tQ, tA, tV]
          });
        let t1 = Object.freeze(Object.defineProperty({
            __proto__: null,
            afterMain: e8,
            afterRead: e1,
            afterWrite: e9,
            applyStyles: ts,
            arrow: tA,
            auto: eq,
            basePlacements: eV,
            beforeMain: e2,
            beforeRead: eZ,
            beforeWrite: e5,
            bottom: eR,
            clippingParents: eX,
            computeStyles: tx,
            createPopper: t0,
            createPopperBase: tJ,
            createPopperLite: tZ,
            detectOverflow: tR,
            end: "end",
            eventListeners: tL,
            flip: tz,
            hide: tV,
            left: eB,
            main: e3,
            modifierPhases: e6,
            offset: tK,
            placements: eJ,
            popper: eY,
            popperGenerator: tG,
            popperOffsets: tX,
            preventOverflow: tQ,
            read: e0,
            reference: eU,
            right: ez,
            start: eK,
            top: "top",
            variationPlacements: eG,
            viewport: eQ,
            write: e7
          }, Symbol.toStringTag, {
            value: "Module"
          })),
          t2 = "dropdown",
          t3 = ".bs.dropdown",
          t8 = ".data-api",
          t5 = "ArrowDown",
          t7 = `hide${t3}`,
          t9 = `hidden${t3}`,
          t6 = `show${t3}`,
          t4 = `shown${t3}`,
          ie = `click${t3}${t8}`,
          it = `keydown${t3}${t8}`,
          ii = `keyup${t3}${t8}`,
          is = "show",
          ir = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
          io = `${ir}.${is}`,
          ia = ".dropdown-menu",
          il = p() ? "top-end" : "top-start",
          ic = p() ? "top-start" : "top-end",
          ih = p() ? "bottom-end" : "bottom-start",
          id = p() ? "bottom-start" : "bottom-end",
          iu = p() ? "left-start" : "right-start",
          ip = p() ? "right-start" : "left-start",
          im = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
          },
          ig = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
          };
        class i_ extends H {
          constructor(e, t) {
            super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, ia)[0] || R.prev(this._element, ia)[0] || R.findOne(ia, this._parent), this._inNavbar = this._detectNavbar()
          }
          static get Default() {
            return im
          }
          static get DefaultType() {
            return ig
          }
          static get NAME() {
            return t2
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show()
          }
          show() {
            if (l(this._element) || this._isShown()) return;
            let e = {
              relatedTarget: this._element
            };
            if (!N.trigger(this._element, t6, e).defaultPrevented) {
              if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                for (let e of [].concat(...document.body.children)) N.on(e, "mouseover", h);
              this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(is), this._element.classList.add(is), N.trigger(this._element, t4, e)
            }
          }
          hide() {
            if (l(this._element) || !this._isShown()) return;
            let e = {
              relatedTarget: this._element
            };
            this._completeHide(e)
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose()
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
          }
          _completeHide(e) {
            if (!N.trigger(this._element, t7, e).defaultPrevented) {
              if ("ontouchstart" in document.documentElement)
                for (let e of [].concat(...document.body.children)) N.off(e, "mouseover", h);
              this._popper && this._popper.destroy(), this._menu.classList.remove(is), this._element.classList.remove(is), this._element.setAttribute("aria-expanded", "false"), M.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, t9, e)
            }
          }
          _getConfig(e) {
            if ("object" == typeof (e = super._getConfig(e)).reference && !r(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw TypeError(`${t2.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
          }
          _createPopper() {
            if (void 0 === t1) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : r(this._config.reference) ? e = o(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            let t = this._getPopperConfig();
            this._popper = t0(e, this._menu, t)
          }
          _isShown() {
            return this._menu.classList.contains(is)
          }
          _getPlacement() {
            let e = this._parent;
            if (e.classList.contains("dropend")) return iu;
            if (e.classList.contains("dropstart")) return ip;
            if (e.classList.contains("dropup-center")) return "top";
            if (e.classList.contains("dropdown-center")) return "bottom";
            let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? ic : il : t ? id : ih
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar")
          }
          _getOffset() {
            let {
              offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e
          }
          _getPopperConfig() {
            let e = {
              placement: this._getPlacement(),
              modifiers: [{
                name: "preventOverflow",
                options: {
                  boundary: this._config.boundary
                }
              }, {
                name: "offset",
                options: {
                  offset: this._getOffset()
                }
              }]
            };
            return (this._inNavbar || "static" === this._config.display) && (M.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
              name: "applyStyles",
              enabled: !1
            }]), {
              ...e,
              ...g(this._config.popperConfig, [e])
            }
          }
          _selectMenuItem({
            key: e,
            target: t
          }) {
            let i = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e => a(e));
            i.length && b(i, t, e === t5, !i.includes(t)).focus()
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = i_.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e]()
              }
            })
          }
          static clearMenus(e) {
            if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
              for (let t of R.find(io)) {
                let i = i_.getInstance(t);
                if (!i || !1 === i._config.autoClose) continue;
                let n = e.composedPath(),
                  s = n.includes(i._menu);
                if (n.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s || i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                let r = {
                  relatedTarget: i._element
                };
                "click" === e.type && (r.clickEvent = e), i._completeHide(r)
              }
          }
          static dataApiKeydownHandler(e) {
            let t = /input|textarea/i.test(e.target.tagName),
              i = "Escape" === e.key,
              n = ["ArrowUp", t5].includes(e.key);
            if (!n && !i || t && !i) return;
            e.preventDefault();
            let s = this.matches(ir) ? this : R.prev(this, ir)[0] || R.next(this, ir)[0] || R.findOne(ir, e.delegateTarget.parentNode),
              r = i_.getOrCreateInstance(s);
            if (n) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
            r._isShown() && (e.stopPropagation(), r.hide(), s.focus())
          }
        }
        N.on(document, it, ir, i_.dataApiKeydownHandler), N.on(document, it, ia, i_.dataApiKeydownHandler), N.on(document, ie, i_.clearMenus), N.on(document, ii, i_.clearMenus), N.on(document, ie, ir, function (e) {
          e.preventDefault(), i_.getOrCreateInstance(this).toggle()
        }), m(i_);
        let ib = "backdrop",
          iv = "show",
          iy = `mousedown.bs.${ib}`,
          iw = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
          },
          iE = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
          };
        class iA extends F {
          constructor(e) {
            super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
          }
          static get Default() {
            return iw
          }
          static get DefaultType() {
            return iE
          }
          static get NAME() {
            return ib
          }
          show(e) {
            if (!this._config.isVisible) return void g(e);
            this._append();
            let t = this._getElement();
            this._config.isAnimated && d(t), t.classList.add(iv), this._emulateAnimation(() => {
              g(e)
            })
          }
          hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(iv), this._emulateAnimation(() => {
              this.dispose(), g(e)
            })) : g(e)
          }
          dispose() {
            this._isAppended && (N.off(this._element, iy), this._element.remove(), this._isAppended = !1)
          }
          _getElement() {
            if (!this._element) {
              let e = document.createElement("div");
              e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
          }
          _configAfterMerge(e) {
            return e.rootElement = o(e.rootElement), e
          }
          _append() {
            if (this._isAppended) return;
            let e = this._getElement();
            this._config.rootElement.append(e), N.on(e, iy, () => {
              g(this._config.clickCallback)
            }), this._isAppended = !0
          }
          _emulateAnimation(e) {
            _(e, this._getElement(), this._config.isAnimated)
          }
        }
        let iC = ".bs.focustrap",
          iT = `focusin${iC}`,
          iO = `keydown.tab${iC}`,
          ix = "backward",
          ik = {
            autofocus: !0,
            trapElement: null
          },
          iL = {
            autofocus: "boolean",
            trapElement: "element"
          };
        class iS extends F {
          constructor(e) {
            super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
          }
          static get Default() {
            return ik
          }
          static get DefaultType() {
            return iL
          }
          static get NAME() {
            return "focustrap"
          }
          activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, iC), N.on(document, iT, e => this._handleFocusin(e)), N.on(document, iO, e => this._handleKeydown(e)), this._isActive = !0)
          }
          deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, iC))
          }
          _handleFocusin(e) {
            let {
              trapElement: t
            } = this._config;
            if (e.target === document || e.target === t || t.contains(e.target)) return;
            let i = R.focusableChildren(t);
            0 === i.length ? t.focus() : this._lastTabNavDirection === ix ? i[i.length - 1].focus() : i[0].focus()
          }
          _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? ix : "forward")
          }
        }
        let iD = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          i$ = ".sticky-top",
          iN = "padding-right",
          iI = "margin-right";
        class iP {
          constructor() {
            this._element = document.body
          }
          getWidth() {
            let e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
          }
          hide() {
            let e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, iN, t => t + e), this._setElementAttributes(iD, iN, t => t + e), this._setElementAttributes(i$, iI, t => t - e)
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, iN), this._resetElementAttributes(iD, iN), this._resetElementAttributes(i$, iI)
          }
          isOverflowing() {
            return this.getWidth() > 0
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
          }
          _setElementAttributes(e, t, i) {
            let n = this.getWidth();
            this._applyManipulationCallback(e, e => {
              if (e !== this._element && window.innerWidth > e.clientWidth + n) return;
              this._saveInitialAttribute(e, t);
              let s = window.getComputedStyle(e).getPropertyValue(t);
              e.style.setProperty(t, `${i(Number.parseFloat(s))}px`)
            })
          }
          _saveInitialAttribute(e, t) {
            let i = e.style.getPropertyValue(t);
            i && M.setDataAttribute(e, t, i)
          }
          _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, e => {
              let i = M.getDataAttribute(e, t);
              null !== i ? (M.removeDataAttribute(e, t), e.style.setProperty(t, i)) : e.style.removeProperty(t)
            })
          }
          _applyManipulationCallback(e, t) {
            if (r(e)) t(e);
            else
              for (let i of R.find(e, this._element)) t(i)
          }
        }
        let ij = ".bs.modal",
          iM = `hide${ij}`,
          iF = `hidePrevented${ij}`,
          iH = `hidden${ij}`,
          iW = `show${ij}`,
          iR = `shown${ij}`,
          iz = `resize${ij}`,
          iB = `click.dismiss${ij}`,
          iq = `mousedown.dismiss${ij}`,
          iV = `keydown.dismiss${ij}`,
          iK = `click${ij}.data-api`,
          iX = "modal-open",
          iQ = "show",
          iY = "modal-static",
          iU = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
          },
          iG = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
          };
        class iJ extends H {
          constructor(e, t) {
            super(e, t), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new iP, this._addEventListeners()
          }
          static get Default() {
            return iU
          }
          static get DefaultType() {
            return iG
          }
          static get NAME() {
            return "modal"
          }
          toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
          }
          show(e) {
            this._isShown || this._isTransitioning || N.trigger(this._element, iW, {
              relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(iX), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)))
          }
          hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, iM).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(iQ), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())))
          }
          dispose() {
            N.off(window, ij), N.off(this._dialog, ij), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
          }
          handleUpdate() {
            this._adjustDialog()
          }
          _initializeBackDrop() {
            return new iA({
              isVisible: !!this._config.backdrop,
              isAnimated: this._isAnimated()
            })
          }
          _initializeFocusTrap() {
            return new iS({
              trapElement: this._element
            })
          }
          _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            let t = R.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0), d(this._element), this._element.classList.add(iQ), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, iR, {
                relatedTarget: e
              })
            }, this._dialog, this._isAnimated())
          }
          _addEventListeners() {
            N.on(this._element, iV, e => {
              "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            }), N.on(window, iz, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog()
            }), N.on(this._element, iq, e => {
              N.one(this._element, iB, t => {
                this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
              })
            })
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
              document.body.classList.remove(iX), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, iH)
            })
          }
          _isAnimated() {
            return this._element.classList.contains("fade")
          }
          _triggerBackdropTransition() {
            if (N.trigger(this._element, iF).defaultPrevented) return;
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
              t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(iY) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(iY), this._queueCallback(() => {
              this._element.classList.remove(iY), this._queueCallback(() => {
                this._element.style.overflowY = t
              }, this._dialog)
            }, this._dialog), this._element.focus())
          }
          _adjustDialog() {
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
              t = this._scrollBar.getWidth(),
              i = t > 0;
            if (i && !e) {
              let e = p() ? "paddingLeft" : "paddingRight";
              this._element.style[e] = `${t}px`
            }
            if (!i && e) {
              let e = p() ? "paddingRight" : "paddingLeft";
              this._element.style[e] = `${t}px`
            }
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }
          static jQueryInterface(e, t) {
            return this.each(function () {
              let i = iJ.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                i[e](t)
              }
            })
          }
        }
        N.on(document, iK, '[data-bs-toggle="modal"]', function (e) {
          let t = R.getElementFromSelector(this);
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(), N.one(t, iW, e => {
            e.defaultPrevented || N.one(t, iH, () => {
              a(this) && this.focus()
            })
          });
          let i = R.findOne(".modal.show");
          i && iJ.getInstance(i).hide(), iJ.getOrCreateInstance(t).toggle(this)
        }), z(iJ), m(iJ);
        let iZ = ".bs.offcanvas",
          i0 = ".data-api",
          i1 = `load${iZ}${i0}`,
          i2 = "show",
          i3 = "showing",
          i8 = "hiding",
          i5 = ".offcanvas.show",
          i7 = `show${iZ}`,
          i9 = `shown${iZ}`,
          i6 = `hide${iZ}`,
          i4 = `hidePrevented${iZ}`,
          ne = `hidden${iZ}`,
          nt = `resize${iZ}`,
          ni = `click${iZ}${i0}`,
          nn = `keydown.dismiss${iZ}`,
          ns = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
          },
          nr = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
          };
        class no extends H {
          constructor(e, t) {
            super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
          }
          static get Default() {
            return ns
          }
          static get DefaultType() {
            return nr
          }
          static get NAME() {
            return "offcanvas"
          }
          toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
          }
          show(e) {
            this._isShown || N.trigger(this._element, i7, {
              relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new iP).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(i3), this._queueCallback(() => {
              this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(i2), this._element.classList.remove(i3), N.trigger(this._element, i9, {
                relatedTarget: e
              })
            }, this._element, !0))
          }
          hide() {
            this._isShown && (N.trigger(this._element, i6).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(i8), this._backdrop.hide(), this._queueCallback(() => {
              this._element.classList.remove(i2, i8), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new iP).reset(), N.trigger(this._element, ne)
            }, this._element, !0)))
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
          }
          _initializeBackDrop() {
            let e = !!this._config.backdrop;
            return new iA({
              className: "offcanvas-backdrop",
              isVisible: e,
              isAnimated: !0,
              rootElement: this._element.parentNode,
              clickCallback: e ? () => {
                "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, i4)
              } : null
            })
          }
          _initializeFocusTrap() {
            return new iS({
              trapElement: this._element
            })
          }
          _addEventListeners() {
            N.on(this._element, nn, e => {
              "Escape" === e.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, i4))
            })
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = no.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                t[e](this)
              }
            })
          }
        }
        N.on(document, ni, '[data-bs-toggle="offcanvas"]', function (e) {
          let t = R.getElementFromSelector(this);
          if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this)) return;
          N.one(t, ne, () => {
            a(this) && this.focus()
          });
          let i = R.findOne(i5);
          i && i !== t && no.getInstance(i).hide(), no.getOrCreateInstance(t).toggle(this)
        }), N.on(window, i1, () => {
          for (let e of R.find(i5)) no.getOrCreateInstance(e).show()
        }), N.on(window, nt, () => {
          for (let e of R.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && no.getOrCreateInstance(e).hide()
        }), z(no), m(no);
        let na = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
          },
          nl = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          nc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
          nh = (e, t) => {
            let i = e.nodeName.toLowerCase();
            return t.includes(i) ? !nl.has(i) || !!nc.test(e.nodeValue) : t.filter(e => e instanceof RegExp).some(e => e.test(i))
          },
          nd = {
            allowList: na,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
          },
          nu = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
          },
          nf = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
          };
        class np extends F {
          constructor(e) {
            super(), this._config = this._getConfig(e)
          }
          static get Default() {
            return nd
          }
          static get DefaultType() {
            return nu
          }
          static get NAME() {
            return "TemplateFactory"
          }
          getContent() {
            return Object.values(this._config.content).map(e => this._resolvePossibleFunction(e)).filter(Boolean)
          }
          hasContent() {
            return this.getContent().length > 0
          }
          changeContent(e) {
            return this._checkContent(e), this._config.content = {
              ...this._config.content,
              ...e
            }, this
          }
          toHtml() {
            let e = document.createElement("div");
            for (let [t, i] of(e.innerHTML = this._maybeSanitize(this._config.template), Object.entries(this._config.content))) this._setContent(e, i, t);
            let t = e.children[0],
              i = this._resolvePossibleFunction(this._config.extraClass);
            return i && t.classList.add(...i.split(" ")), t
          }
          _typeCheckConfig(e) {
            super._typeCheckConfig(e), this._checkContent(e.content)
          }
          _checkContent(e) {
            for (let [t, i] of Object.entries(e)) super._typeCheckConfig({
              selector: t,
              entry: i
            }, nf)
          }
          _setContent(e, t, i) {
            let n = R.findOne(i, e);
            n && ((t = this._resolvePossibleFunction(t)) ? r(t) ? this._putElementInTemplate(o(t), n) : this._config.html ? n.innerHTML = this._maybeSanitize(t) : n.textContent = t : n.remove())
          }
          _maybeSanitize(e) {
            return this._config.sanitize ? function (e, t, i) {
              if (!e.length) return e;
              if (i && "function" == typeof i) return i(e);
              let n = (new window.DOMParser).parseFromString(e, "text/html");
              for (let e of [].concat(...n.body.querySelectorAll("*"))) {
                let i = e.nodeName.toLowerCase();
                if (!Object.keys(t).includes(i)) {
                  e.remove();
                  continue
                }
                let n = [].concat(...e.attributes),
                  s = [].concat(t["*"] || [], t[i] || []);
                for (let t of n) nh(t, s) || e.removeAttribute(t.nodeName)
              }
              return n.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
          }
          _resolvePossibleFunction(e) {
            return g(e, [this])
          }
          _putElementInTemplate(e, t) {
            if (this._config.html) return t.innerHTML = "", void t.append(e);
            t.textContent = e.textContent
          }
        }
        let nm = new Set(["sanitize", "allowList", "sanitizeFn"]),
          ng = "fade",
          n_ = "show",
          nb = ".modal",
          nv = "hide.bs.modal",
          ny = "hover",
          nw = "focus",
          nE = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left"
          },
          nA = {
            allowList: na,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
          },
          nC = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
          };
        class nT extends H {
          constructor(e, t) {
            if (void 0 === t1) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
          }
          static get Default() {
            return nA
          }
          static get DefaultType() {
            return nC
          }
          static get NAME() {
            return "tooltip"
          }
          enable() {
            this._isEnabled = !0
          }
          disable() {
            this._isEnabled = !1
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled
          }
          toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
          }
          dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(nb), nv, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
          }
          show() {
            if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            let e = N.trigger(this._element, this.constructor.eventName("show")),
              t = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !t) return;
            this._disposePopper();
            let i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            let {
              container: n
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(n_), "ontouchstart" in document.documentElement)
              for (let e of [].concat(...document.body.children)) N.on(e, "mouseover", h);
            this._queueCallback(() => {
              N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }, this.tip, this._isAnimated())
          }
          hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
              if (this._getTipElement().classList.remove(n_), "ontouchstart" in document.documentElement)
                for (let e of [].concat(...document.body.children)) N.off(e, "mouseover", h);
              this._activeTrigger.click = !1, this._activeTrigger[nw] = !1, this._activeTrigger[ny] = !1, this._isHovered = null, this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")))
              }, this.tip, this._isAnimated())
            }
          }
          update() {
            this._popper && this._popper.update()
          }
          _isWithContent() {
            return !!this._getTitle()
          }
          _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
          }
          _createTipElement(e) {
            let t = this._getTemplateFactory(e).toHtml();
            if (!t) return null;
            t.classList.remove(ng, n_), t.classList.add(`bs-${this.constructor.NAME}-auto`);
            let i = (e => {
              do e += Math.floor(1e6 * Math.random()); while (document.getElementById(e));
              return e
            })(this.constructor.NAME).toString();
            return t.setAttribute("id", i), this._isAnimated() && t.classList.add(ng), t
          }
          setContent(e) {
            this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
          }
          _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new np({
              ...this._config,
              content: e,
              extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
          }
          _getContentForTemplate() {
            return {
              ".tooltip-inner": this._getTitle()
            }
          }
          _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
          }
          _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
          }
          _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ng)
          }
          _isShown() {
            return this.tip && this.tip.classList.contains(n_)
          }
          _createPopper(e) {
            let t = nE[g(this._config.placement, [this, e, this._element]).toUpperCase()];
            return t0(this._element, e, this._getPopperConfig(t))
          }
          _getOffset() {
            let {
              offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e
          }
          _resolvePossibleFunction(e) {
            return g(e, [this._element])
          }
          _getPopperConfig(e) {
            let t = {
              placement: e,
              modifiers: [{
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements
                }
              }, {
                name: "offset",
                options: {
                  offset: this._getOffset()
                }
              }, {
                name: "preventOverflow",
                options: {
                  boundary: this._config.boundary
                }
              }, {
                name: "arrow",
                options: {
                  element: `.${this.constructor.NAME}-arrow`
                }
              }, {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: e => {
                  this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                }
              }]
            };
            return {
              ...t,
              ...g(this._config.popperConfig, [t])
            }
          }
          _setListeners() {
            for (let e of this._config.trigger.split(" "))
              if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, e => {
                this._initializeOnDelegatedTarget(e).toggle()
              });
              else if ("manual" !== e) {
              let t = e === ny ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                i = e === ny ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              N.on(this._element, t, this._config.selector, e => {
                let t = this._initializeOnDelegatedTarget(e);
                t._activeTrigger["focusin" === e.type ? nw : ny] = !0, t._enter()
              }), N.on(this._element, i, this._config.selector, e => {
                let t = this._initializeOnDelegatedTarget(e);
                t._activeTrigger["focusout" === e.type ? nw : ny] = t._element.contains(e.relatedTarget), t._leave()
              })
            }
            this._hideModalHandler = () => {
              this._element && this.hide()
            }, N.on(this._element.closest(nb), nv, this._hideModalHandler)
          }
          _fixTitle() {
            let e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
          }
          _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
              this._isHovered && this.show()
            }, this._config.delay.show))
          }
          _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
              this._isHovered || this.hide()
            }, this._config.delay.hide))
          }
          _setTimeout(e, t) {
            clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
          }
          _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
          }
          _getConfig(e) {
            let t = M.getDataAttributes(this._element);
            for (let e of Object.keys(t)) nm.has(e) && delete t[e];
            return e = {
              ...t,
              ..."object" == typeof e && e ? e : {}
            }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
          }
          _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : o(e.container), "number" == typeof e.delay && (e.delay = {
              show: e.delay,
              hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
          }
          _getDelegateConfig() {
            let e = {};
            for (let [t, i] of Object.entries(this._config)) this.constructor.Default[t] !== i && (e[t] = i);
            return e.selector = !1, e.trigger = "manual", e
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = nT.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e]()
              }
            })
          }
        }
        m(nT);
        let nO = {
            ...nT.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
          },
          nx = {
            ...nT.DefaultType,
            content: "(null|string|element|function)"
          };
        class nk extends nT {
          static get Default() {
            return nO
          }
          static get DefaultType() {
            return nx
          }
          static get NAME() {
            return "popover"
          }
          _isWithContent() {
            return this._getTitle() || this._getContent()
          }
          _getContentForTemplate() {
            return {
              ".popover-header": this._getTitle(),
              ".popover-body": this._getContent()
            }
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content)
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = nk.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e]()
              }
            })
          }
        }
        m(nk);
        let nL = ".bs.scrollspy",
          nS = `activate${nL}`,
          nD = `click${nL}`,
          n$ = `load${nL}.data-api`,
          nN = "active",
          nI = "[href]",
          nP = ".nav-link",
          nj = `${nP}, .nav-item > ${nP}, .list-group-item`,
          nM = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [.1, .5, 1]
          },
          nF = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
          };
        class nH extends H {
          constructor(e, t) {
            super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0
            }, this.refresh()
          }
          static get Default() {
            return nM
          }
          static get DefaultType() {
            return nF
          }
          static get NAME() {
            return "scrollspy"
          }
          refresh() {
            for (let e of (this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(), this._observableSections.values())) this._observer.observe(e)
          }
          dispose() {
            this._observer.disconnect(), super.dispose()
          }
          _configAfterMerge(e) {
            return e.target = o(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(e => Number.parseFloat(e))), e
          }
          _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, nD), N.on(this._config.target, nD, nI, e => {
              let t = this._observableSections.get(e.target.hash);
              if (t) {
                e.preventDefault();
                let i = this._rootElement || window,
                  n = t.offsetTop - this._element.offsetTop;
                if (i.scrollTo) return void i.scrollTo({
                  top: n,
                  behavior: "smooth"
                });
                i.scrollTop = n
              }
            }))
          }
          _getNewObserver() {
            let e = {
              root: this._rootElement,
              threshold: this._config.threshold,
              rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver(e => this._observerCallback(e), e)
          }
          _observerCallback(e) {
            let t = e => this._targetLinks.get(`#${e.target.id}`),
              i = e => {
                this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
              },
              n = (this._rootElement || document.documentElement).scrollTop,
              s = n >= this._previousScrollData.parentScrollTop;
            for (let r of (this._previousScrollData.parentScrollTop = n, e)) {
              if (!r.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(t(r));
                continue
              }
              let e = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s && e) {
                if (i(r), !n) return
              } else s || e || i(r)
            }
          }
          _initializeTargetsAndObservables() {
            for (let e of (this._targetLinks = new Map, this._observableSections = new Map, R.find(nI, this._config.target))) {
              if (!e.hash || l(e)) continue;
              let t = R.findOne(decodeURI(e.hash), this._element);
              a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
            }
          }
          _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(nN), this._activateParents(e), N.trigger(this._element, nS, {
              relatedTarget: e
            }))
          }
          _activateParents(e) {
            if (e.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(nN);
            else
              for (let t of R.parents(e, ".nav, .list-group"))
                for (let e of R.prev(t, nj)) e.classList.add(nN)
          }
          _clearActiveClass(e) {
            for (let t of (e.classList.remove(nN), R.find(`${nI}.${nN}`, e))) t.classList.remove(nN)
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = nH.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                t[e]()
              }
            })
          }
        }
        N.on(window, n$, () => {
          for (let e of R.find('[data-bs-spy="scroll"]')) nH.getOrCreateInstance(e)
        }), m(nH);
        let nW = ".bs.tab",
          nR = `hide${nW}`,
          nz = `hidden${nW}`,
          nB = `show${nW}`,
          nq = `shown${nW}`,
          nV = `click${nW}`,
          nK = `keydown${nW}`,
          nX = `load${nW}`,
          nQ = "ArrowRight",
          nY = "ArrowDown",
          nU = "Home",
          nG = "active",
          nJ = "fade",
          nZ = "show",
          n0 = ".dropdown-toggle",
          n1 = `:not(${n0})`,
          n2 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          n3 = `.nav-link${n1}, .list-group-item${n1}, [role="tab"]${n1}, ${n2}`,
          n8 = `.${nG}[data-bs-toggle="tab"], .${nG}[data-bs-toggle="pill"], .${nG}[data-bs-toggle="list"]`;
        class n5 extends H {
          constructor(e) {
            super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, nK, e => this._keydown(e)))
          }
          static get NAME() {
            return "tab"
          }
          show() {
            let e = this._element;
            if (this._elemIsActive(e)) return;
            let t = this._getActiveElem(),
              i = t ? N.trigger(t, nR, {
                relatedTarget: e
              }) : null;
            N.trigger(e, nB, {
              relatedTarget: t
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
          }
          _activate(e, t) {
            e && (e.classList.add(nG), this._activate(R.getElementFromSelector(e)), this._queueCallback(() => {
              "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), N.trigger(e, nq, {
                relatedTarget: t
              })) : e.classList.add(nZ)
            }, e, e.classList.contains(nJ)))
          }
          _deactivate(e, t) {
            e && (e.classList.remove(nG), e.blur(), this._deactivate(R.getElementFromSelector(e)), this._queueCallback(() => {
              "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), N.trigger(e, nz, {
                relatedTarget: t
              })) : e.classList.remove(nZ)
            }, e, e.classList.contains(nJ)))
          }
          _keydown(e) {
            let t;
            if (!["ArrowLeft", nQ, "ArrowUp", nY, nU, "End"].includes(e.key)) return;
            e.stopPropagation(), e.preventDefault();
            let i = this._getChildren().filter(e => !l(e));
            if ([nU, "End"].includes(e.key)) t = i[e.key === nU ? 0 : i.length - 1];
            else {
              let n = [nQ, nY].includes(e.key);
              t = b(i, e.target, n, !0)
            }
            t && (t.focus({
              preventScroll: !0
            }), n5.getOrCreateInstance(t).show())
          }
          _getChildren() {
            return R.find(n3, this._parent)
          }
          _getActiveElem() {
            return this._getChildren().find(e => this._elemIsActive(e)) || null
          }
          _setInitialAttributes(e, t) {
            for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"), t)) this._setInitialAttributesOnChild(i)
          }
          _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            let t = this._elemIsActive(e),
              i = this._getOuterElement(e);
            e.setAttribute("aria-selected", t), i !== e && this._setAttributeIfNotExists(i, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
          }
          _setInitialAttributesOnTargetPanel(e) {
            let t = R.getElementFromSelector(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`))
          }
          _toggleDropDown(e, t) {
            let i = this._getOuterElement(e);
            if (!i.classList.contains("dropdown")) return;
            let n = (e, n) => {
              let s = R.findOne(e, i);
              s && s.classList.toggle(n, t)
            };
            n(n0, nG), n(".dropdown-menu", nZ), i.setAttribute("aria-expanded", t)
          }
          _setAttributeIfNotExists(e, t, i) {
            e.hasAttribute(t) || e.setAttribute(t, i)
          }
          _elemIsActive(e) {
            return e.classList.contains(nG)
          }
          _getInnerElement(e) {
            return e.matches(n3) ? e : R.findOne(n3, e)
          }
          _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = n5.getOrCreateInstance(this);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                t[e]()
              }
            })
          }
        }
        N.on(document, nV, n2, function (e) {
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this) || n5.getOrCreateInstance(this).show()
        }), N.on(window, nX, () => {
          for (let e of R.find(n8)) n5.getOrCreateInstance(e)
        }), m(n5);
        let n7 = ".bs.toast",
          n9 = `mouseover${n7}`,
          n6 = `mouseout${n7}`,
          n4 = `focusin${n7}`,
          se = `focusout${n7}`,
          st = `hide${n7}`,
          si = `hidden${n7}`,
          sn = `show${n7}`,
          ss = `shown${n7}`,
          sr = "hide",
          so = "show",
          sa = "showing",
          sl = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
          },
          sc = {
            animation: !0,
            autohide: !0,
            delay: 5e3
          };
        class sh extends H {
          constructor(e, t) {
            super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
          }
          static get Default() {
            return sc
          }
          static get DefaultType() {
            return sl
          }
          static get NAME() {
            return "toast"
          }
          show() {
            N.trigger(this._element, sn).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(sr), d(this._element), this._element.classList.add(so, sa), this._queueCallback(() => {
              this._element.classList.remove(sa), N.trigger(this._element, ss), this._maybeScheduleHide()
            }, this._element, this._config.animation))
          }
          hide() {
            this.isShown() && (N.trigger(this._element, st).defaultPrevented || (this._element.classList.add(sa), this._queueCallback(() => {
              this._element.classList.add(sr), this._element.classList.remove(sa, so), N.trigger(this._element, si)
            }, this._element, this._config.animation)))
          }
          dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(so), super.dispose()
          }
          isShown() {
            return this._element.classList.contains(so)
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide()
            }, this._config.delay)))
          }
          _onInteraction(e, t) {
            switch (e.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = t;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            let i = e.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
          }
          _setListeners() {
            N.on(this._element, n9, e => this._onInteraction(e, !0)), N.on(this._element, n6, e => this._onInteraction(e, !1)), N.on(this._element, n4, e => this._onInteraction(e, !0)), N.on(this._element, se, e => this._onInteraction(e, !1))
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = sh.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e](this)
              }
            })
          }
        }
        return z(sh), m(sh), {
          Alert: K,
          Button: Q,
          Carousel: eO,
          Collapse: eW,
          Dropdown: i_,
          Modal: iJ,
          Offcanvas: no,
          Popover: nk,
          ScrollSpy: nH,
          Tab: n5,
          Toast: sh,
          Tooltip: nT
        }
      }()
    },
    1118: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
        return i(767)
      }])
    },
    767: function (e, t, i) {
      "use strict";
      i.r(t), i.d(t, {
        default: function () {
          return a
        }
      });
      var n = i(5893),
        s = i(1163),
        r = i(7294);
      i(6760), i(7338), i(589), i(245), i(5389), i(5889), i(4402), i(5218);
      var o = () => (0, n.jsx)(n.Fragment, {
        children: (0, n.jsx)("div", {
          className: "preloader",
          children: (0, n.jsxs)("div", {
            className: "loader",
            children: [(0, n.jsx)("div", {
              className: "circle"
            }), (0, n.jsx)("div", {
              className: "circle"
            }), (0, n.jsx)("div", {
              className: "circle"
            }), (0, n.jsx)("div", {
              className: "circle"
            }), (0, n.jsx)("div", {
              className: "circle"
            })]
          })
        })
      });

      function a(e) {
        let {
          Component: t,
          pageProps: a
        } = e, [l, c] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
          i(8702);
          let e = e => e !== s.Router.asPath && c(!0),
            t = () => c(!1);
          return s.Router.events.on("routeChangeStart", e), s.Router.events.on("routeChangeComplete", t), s.Router.events.on("routeChangeError", t), () => {
            s.Router.events.off("routeChangeStart", e), s.Router.events.off("routeChangeComplete", t), s.Router.events.off("routeChangeError", t)
          }
        }, []), (0, n.jsx)(n.Fragment, {
          children: l ? (0, n.jsx)(o, {}) : (0, n.jsx)(t, {
            ...a
          })
        })
      }
    },
    4402: function () {},
    245: function () {},
    5889: function () {},
    5389: function () {},
    6760: function () {},
    589: function () {},
    7338: function () {},
    5218: function () {},
    1163: function (e, t, i) {
      e.exports = i(2937)
    }
  },
  function (e) {
    var t = function (t) {
      return e(e.s = t)
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(2937)
    }), _N_E = e.O()
  }
]);
//# sourceMappingURL=_app-61989ce8426b8f7a.js.map