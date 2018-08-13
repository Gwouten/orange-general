!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("Siema", [], t)
      : "object" == typeof exports
        ? (exports.Siema = t())
        : (e.Siema = t());
})("undefined" != typeof self ? self : this, function() {
  return (function(e) {
    function t(r) {
      if (i[r]) return i[r].exports;
      var n = (i[r] = { i: r, l: !1, exports: {} });
      return e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    var i = {};
    return (
      (t.m = e),
      (t.c = i),
      (t.d = function(e, i, r) {
        t.o(e, i) ||
          Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
      }),
      (t.n = function(e) {
        var i =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(i, "a", i), i;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function(e, t, i) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        s = (function() {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, i, r) {
            return i && e(t.prototype, i), r && e(t, r), t;
          };
        })(),
        l = (function() {
          function e(t) {
            var i = this;
            if (
              (r(this, e),
              (this.config = e.mergeSettings(t)),
              (this.selector =
                "string" == typeof this.config.selector
                  ? document.querySelector(this.config.selector)
                  : this.config.selector),
              null === this.selector)
            )
              throw new Error("Something wrong with your selector 😭");
            this.resolveSlidesNumber(),
              (this.selectorWidth = this.selector.offsetWidth),
              (this.innerElements = [].slice.call(this.selector.children)),
              (this.currentSlide = this.config.loop
                ? this.config.startIndex % this.innerElements.length
                : Math.max(
                    0,
                    Math.min(
                      this.config.startIndex,
                      this.innerElements.length - this.perPage
                    )
                  )),
              (this.transformProperty = e.webkitOrNot()),
              [
                "resizeHandler",
                "touchstartHandler",
                "touchendHandler",
                "touchmoveHandler",
                "mousedownHandler",
                "mouseupHandler",
                "mouseleaveHandler",
                "mousemoveHandler",
                "clickHandler"
              ].forEach(function(e) {
                i[e] = i[e].bind(i);
              }),
              this.init();
          }
          return (
            s(
              e,
              [
                {
                  key: "attachEvents",
                  value: function() {
                    window.addEventListener("resize", this.resizeHandler),
                      this.config.draggable &&
                        ((this.pointerDown = !1),
                        (this.drag = {
                          startX: 0,
                          endX: 0,
                          startY: 0,
                          letItGo: null,
                          preventClick: !1
                        }),
                        this.selector.addEventListener(
                          "touchstart",
                          this.touchstartHandler
                        ),
                        this.selector.addEventListener(
                          "touchend",
                          this.touchendHandler
                        ),
                        this.selector.addEventListener(
                          "touchmove",
                          this.touchmoveHandler
                        ),
                        this.selector.addEventListener(
                          "mousedown",
                          this.mousedownHandler
                        ),
                        this.selector.addEventListener(
                          "mouseup",
                          this.mouseupHandler
                        ),
                        this.selector.addEventListener(
                          "mouseleave",
                          this.mouseleaveHandler
                        ),
                        this.selector.addEventListener(
                          "mousemove",
                          this.mousemoveHandler
                        ),
                        this.selector.addEventListener(
                          "click",
                          this.clickHandler
                        ));
                  }
                },
                {
                  key: "detachEvents",
                  value: function() {
                    window.removeEventListener("resize", this.resizeHandler),
                      this.selector.removeEventListener(
                        "touchstart",
                        this.touchstartHandler
                      ),
                      this.selector.removeEventListener(
                        "touchend",
                        this.touchendHandler
                      ),
                      this.selector.removeEventListener(
                        "touchmove",
                        this.touchmoveHandler
                      ),
                      this.selector.removeEventListener(
                        "mousedown",
                        this.mousedownHandler
                      ),
                      this.selector.removeEventListener(
                        "mouseup",
                        this.mouseupHandler
                      ),
                      this.selector.removeEventListener(
                        "mouseleave",
                        this.mouseleaveHandler
                      ),
                      this.selector.removeEventListener(
                        "mousemove",
                        this.mousemoveHandler
                      ),
                      this.selector.removeEventListener(
                        "click",
                        this.clickHandler
                      );
                  }
                },
                {
                  key: "init",
                  value: function() {
                    this.attachEvents(),
                      (this.selector.style.overflow = "hidden"),
                      (this.selector.style.direction = this.config.rtl
                        ? "rtl"
                        : "ltr"),
                      this.buildSliderFrame(),
                      this.config.onInit.call(this);
                  }
                },
                {
                  key: "buildSliderFrame",
                  value: function() {
                    var e = this.selectorWidth / this.perPage,
                      t = this.config.loop
                        ? this.innerElements.length + 2 * this.perPage
                        : this.innerElements.length;
                    (this.sliderFrame = document.createElement("div")),
                      (this.sliderFrame.style.width = e * t + "px"),
                      this.enableTransition(),
                      this.config.draggable &&
                        (this.selector.style.cursor = "-webkit-grab");
                    var i = document.createDocumentFragment();
                    if (this.config.loop)
                      for (
                        var r = this.innerElements.length - this.perPage;
                        r < this.innerElements.length;
                        r++
                      ) {
                        var n = this.buildSliderFrameItem(
                          this.innerElements[r].cloneNode(!0)
                        );
                        i.appendChild(n);
                      }
                    for (var s = 0; s < this.innerElements.length; s++) {
                      var l = this.buildSliderFrameItem(this.innerElements[s]);
                      i.appendChild(l);
                    }
                    if (this.config.loop)
                      for (var o = 0; o < this.perPage; o++) {
                        var a = this.buildSliderFrameItem(
                          this.innerElements[o].cloneNode(!0)
                        );
                        i.appendChild(a);
                      }
                    this.sliderFrame.appendChild(i),
                      (this.selector.innerHTML = ""),
                      this.selector.appendChild(this.sliderFrame),
                      this.slideToCurrent();
                  }
                },
                {
                  key: "buildSliderFrameItem",
                  value: function(e) {
                    var t = document.createElement("div");
                    return (
                      (t.style.cssFloat = this.config.rtl ? "right" : "left"),
                      (t.style.float = this.config.rtl ? "right" : "left"),
                      (t.style.width =
                        (this.config.loop
                          ? 100 / (this.innerElements.length + 2 * this.perPage)
                          : 100 / this.innerElements.length) + "%"),
                      t.appendChild(e),
                      t
                    );
                  }
                },
                {
                  key: "resolveSlidesNumber",
                  value: function() {
                    if ("number" == typeof this.config.perPage)
                      this.perPage = this.config.perPage;
                    else if ("object" === n(this.config.perPage)) {
                      this.perPage = 1;
                      for (var e in this.config.perPage)
                        window.innerWidth >= e &&
                          (this.perPage = this.config.perPage[e]);
                    }
                  }
                },
                {
                  key: "prev",
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      t = arguments[1];
                    if (!(this.innerElements.length <= this.perPage)) {
                      var i = this.currentSlide;
                      if (this.config.loop) {
                        if (this.currentSlide - e < 0) {
                          this.disableTransition();
                          var r = this.currentSlide + this.innerElements.length,
                            n = this.perPage,
                            s = r + n,
                            l =
                              (this.config.rtl ? 1 : -1) *
                              s *
                              (this.selectorWidth / this.perPage),
                            o = this.config.draggable
                              ? this.drag.endX - this.drag.startX
                              : 0;
                          (this.sliderFrame.style[this.transformProperty] =
                            "translate3d(" + (l + o) + "px, 0, 0)"),
                            (this.currentSlide = r - e);
                        } else this.currentSlide = this.currentSlide - e;
                      } else
                        this.currentSlide = Math.max(this.currentSlide - e, 0);
                      i !== this.currentSlide &&
                        (this.slideToCurrent(this.config.loop),
                        this.config.onChange.call(this),
                        t && t.call(this));
                    }
                  }
                },
                {
                  key: "next",
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      t = arguments[1];
                    if (!(this.innerElements.length <= this.perPage)) {
                      var i = this.currentSlide;
                      if (this.config.loop) {
                        if (
                          this.currentSlide + e >
                          this.innerElements.length - this.perPage
                        ) {
                          this.disableTransition();
                          var r = this.currentSlide - this.innerElements.length,
                            n = this.perPage,
                            s = r + n,
                            l =
                              (this.config.rtl ? 1 : -1) *
                              s *
                              (this.selectorWidth / this.perPage),
                            o = this.config.draggable
                              ? this.drag.endX - this.drag.startX
                              : 0;
                          (this.sliderFrame.style[this.transformProperty] =
                            "translate3d(" + (l + o) + "px, 0, 0)"),
                            (this.currentSlide = r + e);
                        } else this.currentSlide = this.currentSlide + e;
                      } else
                        this.currentSlide = Math.min(
                          this.currentSlide + e,
                          this.innerElements.length - this.perPage
                        );
                      i !== this.currentSlide &&
                        (this.slideToCurrent(this.config.loop),
                        this.config.onChange.call(this),
                        t && t.call(this));
                    }
                  }
                },
                {
                  key: "disableTransition",
                  value: function() {
                    (this.sliderFrame.style.webkitTransition =
                      "all 0ms " + this.config.easing),
                      (this.sliderFrame.style.transition =
                        "all 0ms " + this.config.easing);
                  }
                },
                {
                  key: "enableTransition",
                  value: function() {
                    (this.sliderFrame.style.webkitTransition =
                      "all " +
                      this.config.duration +
                      "ms " +
                      this.config.easing),
                      (this.sliderFrame.style.transition =
                        "all " +
                        this.config.duration +
                        "ms " +
                        this.config.easing);
                  }
                },
                {
                  key: "goTo",
                  value: function(e, t) {
                    if (!(this.innerElements.length <= this.perPage)) {
                      var i = this.currentSlide;
                      (this.currentSlide = this.config.loop
                        ? e % this.innerElements.length
                        : Math.min(
                            Math.max(e, 0),
                            this.innerElements.length - this.perPage
                          )),
                        i !== this.currentSlide &&
                          (this.slideToCurrent(),
                          this.config.onChange.call(this),
                          t && t.call(this));
                    }
                  }
                },
                {
                  key: "slideToCurrent",
                  value: function(e) {
                    var t = this,
                      i = this.config.loop
                        ? this.currentSlide + this.perPage
                        : this.currentSlide,
                      r =
                        (this.config.rtl ? 1 : -1) *
                        i *
                        (this.selectorWidth / this.perPage);
                    e
                      ? requestAnimationFrame(function() {
                          requestAnimationFrame(function() {
                            t.enableTransition(),
                              (t.sliderFrame.style[t.transformProperty] =
                                "translate3d(" + r + "px, 0, 0)");
                          });
                        })
                      : (this.sliderFrame.style[this.transformProperty] =
                          "translate3d(" + r + "px, 0, 0)");
                  }
                },
                {
                  key: "updateAfterDrag",
                  value: function() {
                    var e =
                        (this.config.rtl ? -1 : 1) *
                        (this.drag.endX - this.drag.startX),
                      t = Math.abs(e),
                      i = this.config.multipleDrag
                        ? Math.ceil(t / (this.selectorWidth / this.perPage))
                        : 1,
                      r = e > 0 && this.currentSlide - i < 0,
                      n =
                        e < 0 &&
                        this.currentSlide + i >
                          this.innerElements.length - this.perPage;
                    e > 0 &&
                    t > this.config.threshold &&
                    this.innerElements.length > this.perPage
                      ? this.prev(i)
                      : e < 0 &&
                        t > this.config.threshold &&
                        this.innerElements.length > this.perPage &&
                        this.next(i),
                      this.slideToCurrent(r || n);
                  }
                },
                {
                  key: "resizeHandler",
                  value: function() {
                    this.resolveSlidesNumber(),
                      this.currentSlide + this.perPage >
                        this.innerElements.length &&
                        (this.currentSlide =
                          this.innerElements.length <= this.perPage
                            ? 0
                            : this.innerElements.length - this.perPage),
                      (this.selectorWidth = this.selector.offsetWidth),
                      this.buildSliderFrame();
                  }
                },
                {
                  key: "clearDrag",
                  value: function() {
                    this.drag = {
                      startX: 0,
                      endX: 0,
                      startY: 0,
                      letItGo: null,
                      preventClick: this.drag.preventClick
                    };
                  }
                },
                {
                  key: "touchstartHandler",
                  value: function(e) {
                    -1 !==
                      ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(
                        e.target.nodeName
                      ) ||
                      (e.stopPropagation(),
                      (this.pointerDown = !0),
                      (this.drag.startX = e.touches[0].pageX),
                      (this.drag.startY = e.touches[0].pageY));
                  }
                },
                {
                  key: "touchendHandler",
                  value: function(e) {
                    e.stopPropagation(),
                      (this.pointerDown = !1),
                      this.enableTransition(),
                      this.drag.endX && this.updateAfterDrag(),
                      this.clearDrag();
                  }
                },
                {
                  key: "touchmoveHandler",
                  value: function(e) {
                    if (
                      (e.stopPropagation(),
                      null === this.drag.letItGo &&
                        (this.drag.letItGo =
                          Math.abs(this.drag.startY - e.touches[0].pageY) <
                          Math.abs(this.drag.startX - e.touches[0].pageX)),
                      this.pointerDown && this.drag.letItGo)
                    ) {
                      e.preventDefault(),
                        (this.drag.endX = e.touches[0].pageX),
                        (this.sliderFrame.style.webkitTransition =
                          "all 0ms " + this.config.easing),
                        (this.sliderFrame.style.transition =
                          "all 0ms " + this.config.easing);
                      var t = this.config.loop
                          ? this.currentSlide + this.perPage
                          : this.currentSlide,
                        i = t * (this.selectorWidth / this.perPage),
                        r = this.drag.endX - this.drag.startX,
                        n = this.config.rtl ? i + r : i - r;
                      this.sliderFrame.style[this.transformProperty] =
                        "translate3d(" +
                        (this.config.rtl ? 1 : -1) * n +
                        "px, 0, 0)";
                    }
                  }
                },
                {
                  key: "mousedownHandler",
                  value: function(e) {
                    -1 !==
                      ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(
                        e.target.nodeName
                      ) ||
                      (e.preventDefault(),
                      e.stopPropagation(),
                      (this.pointerDown = !0),
                      (this.drag.startX = e.pageX));
                  }
                },
                {
                  key: "mouseupHandler",
                  value: function(e) {
                    e.stopPropagation(),
                      (this.pointerDown = !1),
                      (this.selector.style.cursor = "-webkit-grab"),
                      this.enableTransition(),
                      this.drag.endX && this.updateAfterDrag(),
                      this.clearDrag();
                  }
                },
                {
                  key: "mousemoveHandler",
                  value: function(e) {
                    if ((e.preventDefault(), this.pointerDown)) {
                      "A" === e.target.nodeName &&
                        (this.drag.preventClick = !0),
                        (this.drag.endX = e.pageX),
                        (this.selector.style.cursor = "-webkit-grabbing"),
                        (this.sliderFrame.style.webkitTransition =
                          "all 0ms " + this.config.easing),
                        (this.sliderFrame.style.transition =
                          "all 0ms " + this.config.easing);
                      var t = this.config.loop
                          ? this.currentSlide + this.perPage
                          : this.currentSlide,
                        i = t * (this.selectorWidth / this.perPage),
                        r = this.drag.endX - this.drag.startX,
                        n = this.config.rtl ? i + r : i - r;
                      this.sliderFrame.style[this.transformProperty] =
                        "translate3d(" +
                        (this.config.rtl ? 1 : -1) * n +
                        "px, 0, 0)";
                    }
                  }
                },
                {
                  key: "mouseleaveHandler",
                  value: function(e) {
                    this.pointerDown &&
                      ((this.pointerDown = !1),
                      (this.selector.style.cursor = "-webkit-grab"),
                      (this.drag.endX = e.pageX),
                      (this.drag.preventClick = !1),
                      this.enableTransition(),
                      this.updateAfterDrag(),
                      this.clearDrag());
                  }
                },
                {
                  key: "clickHandler",
                  value: function(e) {
                    this.drag.preventClick && e.preventDefault(),
                      (this.drag.preventClick = !1);
                  }
                },
                {
                  key: "remove",
                  value: function(e, t) {
                    if (e < 0 || e >= this.innerElements.length)
                      throw new Error("Item to remove doesn't exist 😭");
                    var i = e < this.currentSlide,
                      r = this.currentSlide + this.perPage - 1 === e;
                    (i || r) && this.currentSlide--,
                      this.innerElements.splice(e, 1),
                      this.buildSliderFrame(),
                      t && t.call(this);
                  }
                },
                {
                  key: "insert",
                  value: function(e, t, i) {
                    if (t < 0 || t > this.innerElements.length + 1)
                      throw new Error("Unable to inset it at this index 😭");
                    if (-1 !== this.innerElements.indexOf(e))
                      throw new Error(
                        "The same item in a carousel? Really? Nope 😭"
                      );
                    var r =
                      t <= this.currentSlide > 0 && this.innerElements.length;
                    (this.currentSlide = r
                      ? this.currentSlide + 1
                      : this.currentSlide),
                      this.innerElements.splice(t, 0, e),
                      this.buildSliderFrame(),
                      i && i.call(this);
                  }
                },
                {
                  key: "prepend",
                  value: function(e, t) {
                    this.insert(e, 0), t && t.call(this);
                  }
                },
                {
                  key: "append",
                  value: function(e, t) {
                    this.insert(e, this.innerElements.length + 1),
                      t && t.call(this);
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t = arguments[1];
                    if (
                      (this.detachEvents(),
                      (this.selector.style.cursor = "auto"),
                      e)
                    ) {
                      for (
                        var i = document.createDocumentFragment(), r = 0;
                        r < this.innerElements.length;
                        r++
                      )
                        i.appendChild(this.innerElements[r]);
                      (this.selector.innerHTML = ""),
                        this.selector.appendChild(i),
                        this.selector.removeAttribute("style");
                    }
                    t && t.call(this);
                  }
                }
              ],
              [
                {
                  key: "mergeSettings",
                  value: function(e) {
                    var t = {
                        selector: ".siema",
                        duration: 200,
                        easing: "ease-out",
                        perPage: 1,
                        startIndex: 0,
                        draggable: !0,
                        multipleDrag: !0,
                        threshold: 20,
                        loop: !1,
                        rtl: !1,
                        onInit: function() {},
                        onChange: function() {}
                      },
                      i = e;
                    for (var r in i) t[r] = i[r];
                    return t;
                  }
                },
                {
                  key: "webkitOrNot",
                  value: function() {
                    return "string" ==
                      typeof document.documentElement.style.transform
                      ? "transform"
                      : "WebkitTransform";
                  }
                }
              ]
            ),
            e
          );
        })();
      (t.default = l), (e.exports = t.default);
    }
  ]);
});

/**
 * Simple, lightweight, usable local autocomplete library for modern browsers
 * Because there weren’t enough autocomplete scripts in the world? Because I’m completely insane and have NIH syndrome? Probably both. :P
 * @author Lea Verou http://leaverou.github.io/awesomplete
 * MIT license
 */

(function () {

var _ = function (input, o) {
	var me = this;
    
    // Keep track of number of instances for unique IDs
    Awesomplete.count = (Awesomplete.count || 0) + 1;
    this.count = Awesomplete.count;

	// Setup

	this.isOpened = false;

	this.input = $(input);
	this.input.setAttribute("autocomplete", "off");
	this.input.setAttribute("aria-owns", "awesomplete_list_" + this.count);
	this.input.setAttribute("role", "combobox");

	o = o || {};

	configure(this, {
		minChars: 2,
		maxItems: 10,
		autoFirst: false,
		data: _.DATA,
		filter: _.FILTER_CONTAINS,
		sort: o.sort === false ? false : _.SORT_BYLENGTH,
		item: _.ITEM,
		replace: _.REPLACE
	}, o);

	this.index = -1;

	// Create necessary elements

	this.container = $.create("div", {
		className: "awesomplete",
		around: input
	});

	this.ul = $.create("ul", {
		hidden: "hidden",
        role: "listbox",
        id: "awesomplete_list_" + this.count,
		inside: this.container
	});

	this.status = $.create("span", {
		className: "visually-hidden",
		role: "status",
		"aria-live": "assertive",
        "aria-atomic": true,
        inside: this.container,
        textContent: this.minChars != 0 ? ("Type " + this.minChars + " or more characters for results.") : "Begin typing for results."
	});

	// Bind events

	this._events = {
		input: {
			"input": this.evaluate.bind(this),
			"blur": this.close.bind(this, { reason: "blur" }),
			"keydown": function(evt) {
				var c = evt.keyCode;

				// If the dropdown `ul` is in view, then act on keydown for the following keys:
				// Enter / Esc / Up / Down
				if(me.opened) {
					if (c === 13 && me.selected) { // Enter
						evt.preventDefault();
						me.select();
					}
					else if (c === 27) { // Esc
						me.close({ reason: "esc" });
					}
					else if (c === 38 || c === 40) { // Down/Up arrow
						evt.preventDefault();
						me[c === 38? "previous" : "next"]();
					}
				}
			}
		},
		form: {
			"submit": this.close.bind(this, { reason: "submit" })
		},
		ul: {
			// Prevent the default mousedowm, which ensures the input is not blurred.
			// The actual selection will happen on click. This also ensures dragging the
			// cursor away from the list item will cancel the selection
			"mousedown": function(evt) {
				evt.preventDefault();
			},
			// The click event is fired even if the corresponding mousedown event has called preventDefault
			"click": function(evt) {
				var li = evt.target;

				if (li !== this) {

					while (li && !/li/i.test(li.nodeName)) {
						li = li.parentNode;
					}

					if (li && evt.button === 0) {  // Only select on left click
						evt.preventDefault();
						me.select(li, evt.target);
					}
				}
			}
		}
	};

	$.bind(this.input, this._events.input);
	$.bind(this.input.form, this._events.form);
	$.bind(this.ul, this._events.ul);

	if (this.input.hasAttribute("list")) {
		this.list = "#" + this.input.getAttribute("list");
		this.input.removeAttribute("list");
	}
	else {
		this.list = this.input.getAttribute("data-list") || o.list || [];
	}

	_.all.push(this);
};

_.prototype = {
	set list(list) {
		if (Array.isArray(list)) {
			this._list = list;
		}
		else if (typeof list === "string" && list.indexOf(",") > -1) {
				this._list = list.split(/\s*,\s*/);
		}
		else { // Element or CSS selector
			list = $(list);

			if (list && list.children) {
				var items = [];
				slice.apply(list.children).forEach(function (el) {
					if (!el.disabled) {
						var text = el.textContent.trim();
						var value = el.value || text;
						var label = el.label || text;
						if (value !== "") {
							items.push({ label: label, value: value });
						}
					}
				});
				this._list = items;
			}
		}

		if (document.activeElement === this.input) {
			this.evaluate();
		}
	},

	get selected() {
		return this.index > -1;
	},

	get opened() {
		return this.isOpened;
	},

	close: function (o) {
		if (!this.opened) {
			return;
		}

		this.ul.setAttribute("hidden", "");
		this.isOpened = false;
		this.index = -1;
    
		this.status.setAttribute("hidden", "");

		$.fire(this.input, "awesomplete-close", o || {});
	},

	open: function () {
		this.ul.removeAttribute("hidden");
		this.isOpened = true;
        
		this.status.removeAttribute("hidden");

		if (this.autoFirst && this.index === -1) {
			this.goto(0);
		}

		$.fire(this.input, "awesomplete-open");
	},

	destroy: function() {
		//remove events from the input and its form
		$.unbind(this.input, this._events.input);
		$.unbind(this.input.form, this._events.form);

		//move the input out of the awesomplete container and remove the container and its children
		var parentNode = this.container.parentNode;

		parentNode.insertBefore(this.input, this.container);
		parentNode.removeChild(this.container);

		//remove autocomplete and aria-autocomplete attributes
		this.input.removeAttribute("autocomplete");
		this.input.removeAttribute("aria-autocomplete");

		//remove this awesomeplete instance from the global array of instances
		var indexOfAwesomplete = _.all.indexOf(this);

		if (indexOfAwesomplete !== -1) {
			_.all.splice(indexOfAwesomplete, 1);
		}
	},

	next: function () {
		var count = this.ul.children.length;
		this.goto(this.index < count - 1 ? this.index + 1 : (count ? 0 : -1) );
	},

	previous: function () {
		var count = this.ul.children.length;
		var pos = this.index - 1;

		this.goto(this.selected && pos !== -1 ? pos : count - 1);
	},

	// Should not be used, highlights specific item without any checks!
	goto: function (i) {
		var lis = this.ul.children;

		if (this.selected) {
			lis[this.index].setAttribute("aria-selected", "false");
		}

		this.index = i;

		if (i > -1 && lis.length > 0) {
			lis[i].setAttribute("aria-selected", "true");
            
			this.status.textContent = lis[i].textContent + ", list item " + (i + 1) + " of " + lis.length;
            
            this.input.setAttribute("aria-activedescendant", this.ul.id + "_item_" + this.index);

			// scroll to highlighted element in case parent's height is fixed
			this.ul.scrollTop = lis[i].offsetTop - this.ul.clientHeight + lis[i].clientHeight;

			$.fire(this.input, "awesomplete-highlight", {
				text: this.suggestions[this.index]
			});
		}
	},

	select: function (selected, origin) {
		if (selected) {
			this.index = $.siblingIndex(selected);
		} else {
			selected = this.ul.children[this.index];
		}

		if (selected) {
			var suggestion = this.suggestions[this.index];

			var allowed = $.fire(this.input, "awesomplete-select", {
				text: suggestion,
				origin: origin || selected
			});

			if (allowed) {
				this.replace(suggestion);
				this.close({ reason: "select" });
				$.fire(this.input, "awesomplete-selectcomplete", {
					text: suggestion
				});
			}
		}
	},

	evaluate: function() {
		var me = this;
		var value = this.input.value;

		if (value.length >= this.minChars && this._list && this._list.length > 0) {
			this.index = -1;
			// Populate list with options that match
			this.ul.innerHTML = "";

			this.suggestions = this._list
				.map(function(item) {
					return new Suggestion(me.data(item, value));
				})
				.filter(function(item) {
					return me.filter(item, value);
				});

			if (this.sort !== false) {
				this.suggestions = this.suggestions.sort(this.sort);
			}

			this.suggestions = this.suggestions.slice(0, this.maxItems);

			this.suggestions.forEach(function(text, index) {
					me.ul.appendChild(me.item(text, value, index));
				});

			if (this.ul.children.length === 0) {
                
                this.status.textContent = "No results found";
                
				this.close({ reason: "nomatches" });
        
			} else {
				this.open();
        
                this.status.textContent = this.ul.children.length + " results found";
			}
		}
		else {
			this.close({ reason: "nomatches" });
            
                this.status.textContent = "No results found";
		}
	}
};

// Static methods/properties

_.all = [];

_.FILTER_CONTAINS = function (text, input) {
	return RegExp($.regExpEscape(input.trim()), "i").test(text);
};

_.FILTER_STARTSWITH = function (text, input) {
	return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
};

_.SORT_BYLENGTH = function (a, b) {
	if (a.length !== b.length) {
		return a.length - b.length;
	}

	return a < b? -1 : 1;
};

_.ITEM = function (text, input, item_id) {
	var html = input.trim() === "" ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");
	return $.create("li", {
		innerHTML: html,
		"aria-selected": "false",
        "id": "awesomplete_list_" + this.count + "_item_" + item_id
	});
};

_.REPLACE = function (text) {
	this.input.value = text.value;
};

_.DATA = function (item/*, input*/) { return item; };

// Private functions

function Suggestion(data) {
	var o = Array.isArray(data)
	  ? { label: data[0], value: data[1] }
	  : typeof data === "object" && "label" in data && "value" in data ? data : { label: data, value: data };

	this.label = o.label || o.value;
	this.value = o.value;
}
Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
	get: function() { return this.label.length; }
});
Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
	return "" + this.label;
};

function configure(instance, properties, o) {
	for (var i in properties) {
		var initial = properties[i],
		    attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

		if (typeof initial === "number") {
			instance[i] = parseInt(attrValue);
		}
		else if (initial === false) { // Boolean options must be false by default anyway
			instance[i] = attrValue !== null;
		}
		else if (initial instanceof Function) {
			instance[i] = null;
		}
		else {
			instance[i] = attrValue;
		}

		if (!instance[i] && instance[i] !== 0) {
			instance[i] = (i in o)? o[i] : initial;
		}
	}
}

// Helpers

var slice = Array.prototype.slice;

function $(expr, con) {
	return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
}

function $$(expr, con) {
	return slice.call((con || document).querySelectorAll(expr));
}

$.create = function(tag, o) {
	var element = document.createElement(tag);

	for (var i in o) {
		var val = o[i];

		if (i === "inside") {
			$(val).appendChild(element);
		}
		else if (i === "around") {
			var ref = $(val);
			ref.parentNode.insertBefore(element, ref);
			element.appendChild(ref);
		}
		else if (i in element) {
			element[i] = val;
		}
		else {
			element.setAttribute(i, val);
		}
	}

	return element;
};

$.bind = function(element, o) {
	if (element) {
		for (var event in o) {
			var callback = o[event];

			event.split(/\s+/).forEach(function (event) {
				element.addEventListener(event, callback);
			});
		}
	}
};

$.unbind = function(element, o) {
	if (element) {
		for (var event in o) {
			var callback = o[event];

			event.split(/\s+/).forEach(function(event) {
				element.removeEventListener(event, callback);
			});
		}
	}
};

$.fire = function(target, type, properties) {
	var evt = document.createEvent("HTMLEvents");

	evt.initEvent(type, true, true );

	for (var j in properties) {
		evt[j] = properties[j];
	}

	return target.dispatchEvent(evt);
};

$.regExpEscape = function (s) {
	return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
};

$.siblingIndex = function (el) {
	/* eslint-disable no-cond-assign */
	for (var i = 0; el = el.previousElementSibling; i++);
	return i;
};

// Initialization

function init() {
	$$("input.awesomplete").forEach(function (input) {
		new _(input);
	});
}

// Make sure to export Awesomplete on self when in a browser
if (typeof self !== "undefined") {
	self.Awesomplete = _;
}

// Are we in a browser? Check for Document constructor
if (typeof Document !== "undefined") {
	// DOM already loaded?
	if (document.readyState !== "loading") {
		init();
	}
	else {
		// Wait for it
		document.addEventListener("DOMContentLoaded", init);
	}
}

_.$ = $;
_.$$ = $$;

// Expose Awesomplete as a CJS module
if (typeof module === "object" && module.exports) {
	module.exports = _;
}

return _;

}());

class RotateSlogan {
  constructor(phrases = [], container, timing) {
    (this.phrases = phrases),
      (this.container = document.querySelector(`#${container}`)),
      (this.timing = timing),
      (this.interval = (timing / 3) * 2),
      (this.cycles = 0),
      (this.numberPhrases = this.phrases.length - 1);
  }
  createPhrases() {
    if (this.container) {
      const phraseEl = document.createElement("span");

      phraseEl.style.animationDuration = `${this.timing}ms`;
      phraseEl.innerHTML = this.phrases[this.cycles];
      phraseEl.classList.add("slogan__header__word");
      this.container.appendChild(phraseEl);

      this.cycles === this.numberPhrases ? (this.cycles = 0) : this.cycles++;

      setTimeout(() => this.container.removeChild(phraseEl), this.timing);
    }
  }
  rotatePhrases() {
    this.createPhrases();
    setInterval(() => {
      this.createPhrases();
    }, this.interval);
  }
}

// Animated scrolling
const scrollTo = function(to, duration) {
  const element = document.scrollingElement /*|| document.documentElement*/,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function() {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
};

// Scroll to theme section
const setThemeLinks = function() {
  const themesLinks = Array.prototype.slice.call(
    document.querySelectorAll(".carousel--themes a")
  );
  if (themesLinks !== null) {
    themesLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        let headerHeight = -160;
        if (windowWidth < 975) {
          headerHeight = 100;
        }
        const id = e.target.href.split("#")[1];
        const target = document.querySelector(`#${id}`);
        const dist =
          target.offsetTop - target.scrollTop + target.clientTop - headerHeight;
        scrollTo(dist, 1000);
      });
    });
  }
};

// Siema slider
function siema(
  element,
  autoplay = true,
  draggable = true,
  interval = 5000,
  smallCount = 2,
  medCount = 3,
  largeCount = 4
) {
  const sliderContainer = document.querySelector(`.${element}`);
  let sliderButtons = [];

  function setActiveButton() {
    if (sliderButtons.length) {
      const activeClass = "carousel--pagination__button--fill";
      const slide = this.currentSlide;

      document.querySelector(`.${activeClass}`).classList.remove(activeClass);
      sliderButtons[slide].classList.add(activeClass);
    }
  }

  if (sliderContainer !== null) {
    const slider = new Siema({
      selector: `.${element}`,
      duration: 1000,
      easing: "ease-in-out",
      perPage: {
        600: smallCount,
        900: medCount,
        1200: largeCount
      },
      loop: true,
      draggable,
      onChange: setActiveButton
    });

    if (!sliderContainer.classList.contains("carousel--pagination")) {
      // Create next/prev buttons
      Siema.prototype.createButtons = function(element) {
        const nextButton = document.createElement("button");
        nextButton.classList.add("btn");
        nextButton.classList.add("btn--carousel");
        nextButton.classList.add("carousel__next");
        nextButton.classList.add(`${element}__next`);
        sliderContainer.appendChild(nextButton);

        const prevButton = document.createElement("button");
        prevButton.classList.add("btn");
        prevButton.classList.add("btn--carousel");
        prevButton.classList.add("carousel__prev");
        prevButton.classList.add(`${element}__prev`);
        sliderContainer.appendChild(prevButton);

        // callback to bind functionality to buttons
        slider.bindButtons(element);
      };

      // Make buttons work
      Siema.prototype.bindButtons = function(element) {
        const carouselPrev = document.querySelector(`.${element}__prev`);
        const carouselNext = document.querySelector(`.${element}__next`);

        carouselPrev.addEventListener("click", () => slider.prev());
        carouselNext.addEventListener("click", () => slider.next());
      };

      slider.createButtons(element);
      window.addEventListener("resize", () => {
        slider.createButtons();
      });
    } else {
      // setup pagination buttons
      Siema.prototype.addPagination = function() {
        const innerElements = Array.prototype.slice.call(this.innerElements);
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("carousel--pagination__buttons");
        sliderContainer.appendChild(buttonContainer);

        innerElements.forEach((innerElement, i) => {
          const pageButton = document.createElement("button");
          pageButton.classList.add("carousel--pagination__button");
          pageButton.addEventListener("click", () => this.goTo(i));
          sliderButtons.push(pageButton);
          buttonContainer.appendChild(pageButton);
          if (i === 0) {
            pageButton.classList.add("carousel--pagination__button--fill");
          }
        });
      };

      slider.addPagination();
    }

    if (autoplay) {
      let autoSlide = setInterval(function() {
        slider.next();
      }, interval);

      sliderContainer.addEventListener("mouseenter", () =>
        clearInterval(autoSlide)
      );
      sliderContainer.addEventListener(
        "mouseleave",
        () =>
          (autoSlide = setInterval(function() {
            slider.next();
          }, interval))
      );
    }
  }
}

// Scroll to top animation
const scrollToTop = function(el) {
  window.addEventListener("scroll", () => {
    let timeout = false;
    const delay = 250;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const fromTop = window.scrollY;
      if (fromTop < 200) {
        el.classList.remove("to-top__link--visible");
      } else if (fromTop >= 200) {
        el.classList.add("to-top__link--visible");
      }
    }, delay);
  });
};

// helper function for setCurrentPageIndicator
const setActiveItem = (array, tag, newClass) => {
  array.forEach(item => {
    if (item.innerText.toLowerCase().indexOf(tag.toLowerCase().trim()) > -1) {
      item.classList.add(`${newClass}--active`);
    }
  });
};

// Indicate current page in navigation
const setCurrentPageIndicator = () => {
  const pageTags = document.querySelector("body").dataset.current.split(",");
  const interiorLinks = Array.prototype.slice.call(
    document.querySelectorAll(".header__interior-links__item")
  );

  // mark current active page in interion links menu
  setActiveItem(interiorLinks, pageTags[0], "header__interior-links__item");

  // mark current active item in subnav menu
  if (document.querySelector(".subnav")) {
    const subnavItems = Array.prototype.slice.call(
      document.querySelectorAll(".subnav__item")
    );
    setActiveItem(subnavItems, pageTags[1], "subnav__item");
  }
};

// clean candidat page urls
const cleanUrls = () => {
  const candidatUrls = Array.prototype.slice.call(
    document.querySelectorAll(".table a")
  );
  if (candidatUrls !== null) {
    candidatUrls.forEach(link => {
      link.innerText = link.innerText
        .replace(/(http)s?\:\/\//gi, "")
        .replace(/\?.*/gi, "")
        .replace(/\/$/gi, "");
    });
  }
};

// Detect portrait or landscape images
const detectImageOrientation = () => {
  const images = Array.prototype.slice.call(
    document.querySelectorAll(".two-col-skew__skewed--image > img")
  );
  if (images.length !== 0) {
    images.forEach(image => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;
      if (height > width) {
        image.classList.add("align-top");
      }
    });
  }
};

// Show Popups
const toggleEngagementsProvinces = () => {
  const engagementContainer = document.querySelector(".engagement");
  const engagementButtons = Array.prototype.slice.call(
    document.querySelectorAll(
      ".section-communales__ordered-list__item--province"
    )
  );
  if (engagementContainer !== null) {
    // Remove child element with fade-out animation
    const removeChild = element => {
      element.classList.add(`${element.classList[0]}--close`);
      element.addEventListener("animationend", () => {
        engagementContainer.removeChild(element);
      });
    };

    engagementButtons.forEach((engagement, index) => {
      engagement.addEventListener("click", () => {
        // Remove currently visible block
        const activeEngagement = document.querySelector(".engagement__active");
        if (activeEngagement !== null) {
          activeEngagement.classList.remove("engagement__active");
        }

        // Add class to show corresponding block
        const currentEngagement = document.querySelector(
          `#engagement${index + 1}`
        );
        currentEngagement.classList.add("engagement__active");

        // Add background and close button on open and remove it when closing
        // - Background
        const background = document.createElement("div");
        engagementContainer.appendChild(background);
        background.classList.add("engagement__background");

        // - Close button
        const setY = element =>
          `${element.offsetTop - element.offsetHeight / 2}px`;
        const setX = element =>
          `${10 + element.offsetLeft + element.offsetWidth / 2}px`;
        const closeButton = document.createElement("button");
        engagementContainer.appendChild(closeButton);
        closeButton.classList.add("engagement__close-btn");
        closeButton.innerText = "X";
        closeButton.style.top = setY(currentEngagement);
        closeButton.style.left = setX(currentEngagement);

        window.addEventListener("resize", () => {
          closeButton.style.top = setY(currentEngagement);
          closeButton.style.left = setX(currentEngagement);
        });

        engagementContainer.addEventListener("click", e => {
          if (
            e.target.id === currentEngagement.id ||
            e.target.parentNode.id === currentEngagement.id ||
            e.target.classList.contains("engagement__background") ||
            e.target.classList.contains("engagement__close-btn")
          ) {
            currentEngagement.classList.remove("engagement__active");

            // Remove background
            removeChild(background);

            // Remove close button
            removeChild(closeButton);
          }
        });
      });
    });
  }
};

// if not yet visited, add class 'slideInFromBottom'
function getCookie(cname) {
  // var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split("; ");
  if (ca.indexOf("cdh-accepted=true") === -1) {
    document.querySelector(".privacy").classList.add("slideInFromBottom");
  } else {
    return;
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

getCookie("cname");

// Set cookie
document.querySelector(".privacy__btn").addEventListener("click", function() {
  setCookie("cdh-accepted", true, 365);
  document.querySelector(".privacy").classList.remove("slideInFromBottom");
});

("use strict");

// Set current page indicator in navigation menu
setCurrentPageIndicator();

// Rotate slogan
const phrases = ["des communes", "des provinces"];
const headline = new RotateSlogan(phrases, "rw", 6000);

headline.rotatePhrases();
// End rotate slogan

// To top button
const toTopElement = document.querySelector(".to-top__link");
scrollToTop(toTopElement);

// Scroll to top animation
toTopElement.addEventListener("click", function(e) {
  e.preventDefault();
  scrollTo(0, 1000);
});

// Scroll to theme section
setThemeLinks();

// Awesomplete - for autocompleting form fields
const inputCandidatesElement = document.querySelector(".input__text");

if (inputCandidatesElement !== null) {
  inputCandidatesElement.addEventListener("awesomplete-select", function(e) {
    const form = document.querySelector("form");
    inputCandidatesElement.value = e.text.value;
    form.submit();
  });

  const candidates = list => {
    new Awesomplete(inputCandidatesElement, {
      list,
      minChars: 2,
      maxItems: 30,
      autoFirst: true
    });
  };

  if (
    !window.location.href.indexOf("http://localhost:3000/") > -1 &&
    !window.location.href.indexOf("192.168.30.24:3000/") > -1
  ) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Clean up responseText
        const res = this.responseText.toString();
        const data = res.split("|");

        candidates(data);
      }
    };
    request.open(
      "GET",
      window.location.protocol === "https:"
        ? "https://dev2.lescommunales2018.be/generate_all.php" // for production, replace 'dev2' with 'www"
        : "http://dev2.lescommunales2018.be/generate_all.php", // for production, replace 'dev2' with 'www"
      true
    );
    request.send();
  } else {
    candidates(["data", "Wouter"]);
    // generateListUrl(inputCandidatesElement);
  }
}

// End awesomplete

// Clean url's in candidate table
cleanUrls();

// Show related engagement on Province page
toggleEngagementsProvinces();
