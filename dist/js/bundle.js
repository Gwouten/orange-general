"use strict";function siema(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:4,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,a=document.querySelector("."+e),c=[];if(window.innerWidth<=600&&a.childElementCount<s||window.innerWidth<=900&&a.childElementCount<r||window.innerWidth>900&&a.childElementCount<o)return a.classList.add("portrait-gallery--no-slider"),void a.classList.remove("carousel");if(null!==a){var u=new Siema({selector:"."+e,duration:1e3,easing:"ease-in-out",perPage:{0:s,600:r,900:o},startIndex:l,loop:!0,draggable:n,onChange:function(){if(c.length){var e="carousel--pagination__button--fill",t=this.currentSlide;document.querySelector("."+e).classList.remove(e),c[t].classList.add(e)}}});if(a.classList.contains("carousel--pagination")?(Siema.prototype.addPagination=function(){var e=this,t=Array.prototype.slice.call(this.innerElements),n=document.createElement("div");n.classList.add("carousel--pagination__buttons"),a.parentElement.appendChild(n),t.forEach(function(t,i){var s=document.createElement("button");s.classList.add("carousel--pagination__button"),s.addEventListener("click",function(){return e.goTo(i)}),c.push(s),n.appendChild(s),0===i&&s.classList.add("carousel--pagination__button--fill")})},u.addPagination()):(Siema.prototype.createButtons=function(e){var t=document.createElement("button");t.classList.add("btn"),t.classList.add("btn--carousel"),t.classList.add("carousel__next"),t.classList.add(e+"__next"),a.parentElement.appendChild(t);var n=document.createElement("button");n.classList.add("btn"),n.classList.add("btn--carousel"),n.classList.add("carousel__prev"),n.classList.add(e+"__prev"),a.parentElement.appendChild(n),u.bindButtons(e)},Siema.prototype.bindButtons=function(e){var t=document.querySelector("."+e+"__prev"),n=document.querySelector("."+e+"__next");t.addEventListener("click",function(){return u.prev()}),n.addEventListener("click",function(){return u.next()})},u.createButtons(e)),t){var d=setInterval(function(){u.next()},i);a.addEventListener("mouseenter",function(){return clearInterval(d)}),a.addEventListener("mouseleave",function(){return d=setInterval(function(){u.next()},i)})}}}function getCookie(e){-1===decodeURIComponent(document.cookie).split("; ").indexOf("cdh-accepted=true")&&document.querySelector(".privacy").classList.add("slideInFromBottom")}function setCookie(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var s="expires="+i.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function i(e,t){return(void 0===e?"undefined":_typeof(e))===t}function s(e,t){return!!~(""+e).indexOf(t)}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return function(){return e.apply(t,arguments)}}function a(e,t,n){var s;for(var r in e)if(e[r]in t)return!1===n?e[r]:(s=t[e[r]],i(s,"function")?l(s,n||t):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n,i){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var r=e.console;null!==s?i&&(s=s.getPropertyValue(i)):r&&r[r.error?"error":"log"].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else s=!n&&t.currentStyle&&t.currentStyle[i];return s}function d(){var e=t.body;return e||(e=r(w?"svg":"body"),e.fake=!0),e}function h(e,n,i,s){var o,l,a,c,u="modernizr",h=r("div"),f=d();if(parseInt(i,10))for(;i--;)(a=r("div")).id=s?s[i]:u+(i+1),h.appendChild(a);return o=r("style"),o.type="text/css",o.id="s"+u,(f.fake?f:h).appendChild(o),f.appendChild(h),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),h.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",c=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),l=n(h,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=c,S.offsetHeight):h.parentNode.removeChild(h),!!l}function f(t,i){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];s--;)r.push("("+c(t[s])+":"+i+")");return r=r.join(" or "),h("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return n}function p(e,t,l,a){function c(){d&&(delete T.style,delete T.modElem)}if(a=!i(a,"undefined")&&a,!i(l,"undefined")){var u=f(e,l);if(!i(u,"undefined"))return u}for(var d,h,p,m,g,v=["modernizr","tspan","samp"];!T.style&&v.length;)d=!0,T.modElem=r(v.shift()),T.style=T.modElem.style;for(p=e.length,h=0;p>h;h++)if(m=e[h],g=T.style[m],s(m,"-")&&(m=o(m)),T.style[m]!==n){if(a||i(l,"undefined"))return c(),"pfx"!=t||m;try{T.style[m]=l}catch(e){}if(T.style[m]!=g)return c(),"pfx"!=t||m}return c(),!1}function m(e,t,n,s,r){var o=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+x.join(o+" ")+o).split(" ");return i(t,"string")||i(t,"undefined")?p(l,t,s,r):(l=(e+" "+C.join(o+" ")+o).split(" "),a(l,t,n))}function g(e,t,i){return m(e,n,n,t,i)}var v=[],y=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},E=function(){};E.prototype=b,E=new E;var S=t.documentElement,w="svg"===S.nodeName.toLowerCase(),_="Moz O ms Webkit",x=b._config.usePrefixes?_.split(" "):[];b._cssomPrefixes=x;var C=b._config.usePrefixes?_.toLowerCase().split(" "):[];b._domPrefixes=C;var L={elem:r("modernizr")};E._q.push(function(){delete L.elem});var T={style:L.elem.style};E._q.unshift(function(){delete T.style}),b.testAllProps=m,b.testAllProps=g,E.addTest("cssgridlegacy",g("grid-columns","10px",!0)),E.addTest("cssgrid",g("grid-template-rows","none",!0)),function(){var e,t,n,s,r,o;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],(t=y[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)1===(o=e[r].split(".")).length?E[o[0]]=s:(!E[o[0]]||E[o[0]]instanceof Boolean||(E[o[0]]=new Boolean(E[o[0]])),E[o[0]][o[1]]=s),v.push((s?"":"no-")+o.join("-"))}}(),function(e){var t=S.className,n=E._config.classPrefix||"";if(w&&(t=t.baseVal),E._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}E._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?S.className.baseVal=t:S.className=t)}(v),delete b.addTest,delete b.addAsyncTest;for(var k=0;k<E._q.length;k++)E._q[k]();e.Modernizr=E}(window,document),function(e,t){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?exports.Siema=t():e.Siema=t()}("undefined"!=typeof self?self:void 0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){var n=this;if(i(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){n[e]=n[e].bind(n)}),this.init()}return r(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var n=document.createDocumentFragment();if(this.config.loop)for(var i=this.innerElements.length-this.perPage;i<this.innerElements.length;i++){var s=this.buildSliderFrameItem(this.innerElements[i].cloneNode(!0));n.appendChild(s)}for(var r=0;r<this.innerElements.length;r++){var o=this.buildSliderFrameItem(this.innerElements[r]);n.appendChild(o)}if(this.config.loop)for(var l=0;l<this.perPage;l++){var a=this.buildSliderFrameItem(this.innerElements[l].cloneNode(!0));n.appendChild(a)}this.sliderFrame.appendChild(n),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===s(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;if(this.config.loop)if(this.currentSlide-e<0){this.disableTransition();var i=this.currentSlide+this.innerElements.length,s=i+this.perPage,r=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(r+o)+"px, 0, 0)",this.currentSlide=i-e}else this.currentSlide=this.currentSlide-e;else this.currentSlide=Math.max(this.currentSlide-e,0);n!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;if(this.config.loop)if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var i=this.currentSlide-this.innerElements.length,s=i+this.perPage,r=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(r+o)+"px, 0, 0)",this.currentSlide=i+e}else this.currentSlide=this.currentSlide+e;else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);n!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,n=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=(this.config.rtl?1:-1)*n*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+i+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+i+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),n=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,i=e>0&&this.currentSlide-n<0,s=e<0&&this.currentSlide+n>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent(i||s)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),n=this.drag.endX-this.drag.startX,i=this.config.rtl?t+n:t-n;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*i+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),n=this.drag.endX-this.drag.startX,i=this.config.rtl?t+n:t-n;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*i+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var n=e<this.currentSlide,i=this.currentSlide+this.perPage-1===e;(n||i)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,n){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var i=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=i?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),n&&n.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var n=document.createDocumentFragment(),i=0;i<this.innerElements.length;i++)n.appendChild(this.innerElements[i]);this.selector.innerHTML="",this.selector.appendChild(n),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},n=e;for(var i in n)t[i]=n[i];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])}),function(){function e(e){var t=Array.isArray(e)?{label:e[0],value:e[1]}:"object"===(void 0===e?"undefined":_typeof(e))&&"label"in e&&"value"in e?e:{label:e,value:e};this.label=t.label||t.value,this.value=t.value}function t(e,t,n){for(var i in t){var s=t[i],r=e.input.getAttribute("data-"+i.toLowerCase());"number"==typeof s?e[i]=parseInt(r):!1===s?e[i]=null!==r:s instanceof Function?e[i]=null:e[i]=r,e[i]||0===e[i]||(e[i]=i in n?n[i]:s)}}function n(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function i(e,t){return o.call((t||document).querySelectorAll(e))}function s(){i("input.awesomplete").forEach(function(e){new r(e)})}var r=function e(i,s){var r=this;Awesomplete.count=(Awesomplete.count||0)+1,this.count=Awesomplete.count,this.isOpened=!1,this.input=n(i),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-owns","awesomplete_list_"+this.count),this.input.setAttribute("role","combobox"),s=s||{},t(this,{minChars:2,maxItems:10,autoFirst:!1,data:e.DATA,filter:e.FILTER_CONTAINS,sort:!1!==s.sort&&e.SORT_BYLENGTH,item:e.ITEM,replace:e.REPLACE},s),this.index=-1,this.container=n.create("div",{className:"awesomplete",around:i}),this.ul=n.create("ul",{hidden:"hidden",role:"listbox",id:"awesomplete_list_"+this.count,inside:this.container}),this.status=n.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-atomic":!0,inside:this.container,textContent:0!=this.minChars?"Type "+this.minChars+" or more characters for results.":"Begin typing for results."}),this._events={input:{input:this.evaluate.bind(this),blur:this.close.bind(this,{reason:"blur"}),keydown:function(e){var t=e.keyCode;r.opened&&(13===t&&r.selected?(e.preventDefault(),r.select()):27===t?r.close({reason:"esc"}):38!==t&&40!==t||(e.preventDefault(),r[38===t?"previous":"next"]()))}},form:{submit:this.close.bind(this,{reason:"submit"})},ul:{mousedown:function(e){e.preventDefault()},click:function(e){var t=e.target;if(t!==this){for(;t&&!/li/i.test(t.nodeName);)t=t.parentNode;t&&0===e.button&&(e.preventDefault(),r.select(t,e.target))}}}},n.bind(this.input,this._events.input),n.bind(this.input.form,this._events.form),n.bind(this.ul,this._events.ul),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||s.list||[],e.all.push(this)};r.prototype={set list(e){if(Array.isArray(e))this._list=e;else if("string"==typeof e&&e.indexOf(",")>-1)this._list=e.split(/\s*,\s*/);else if((e=n(e))&&e.children){var t=[];o.apply(e.children).forEach(function(e){if(!e.disabled){var n=e.textContent.trim(),i=e.value||n,s=e.label||n;""!==i&&t.push({label:s,value:i})}}),this._list=t}document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return this.isOpened},close:function(e){this.opened&&(this.ul.setAttribute("hidden",""),this.isOpened=!1,this.index=-1,this.status.setAttribute("hidden",""),n.fire(this.input,"awesomplete-close",e||{}))},open:function(){this.ul.removeAttribute("hidden"),this.isOpened=!0,this.status.removeAttribute("hidden"),this.autoFirst&&-1===this.index&&this.goto(0),n.fire(this.input,"awesomplete-open")},destroy:function(){n.unbind(this.input,this._events.input),n.unbind(this.input.form,this._events.form);var e=this.container.parentNode;e.insertBefore(this.input,this.container),e.removeChild(this.container),this.input.removeAttribute("autocomplete"),this.input.removeAttribute("aria-autocomplete");var t=r.all.indexOf(this);-1!==t&&r.all.splice(t,1)},next:function(){var e=this.ul.children.length;this.goto(this.index<e-1?this.index+1:e?0:-1)},previous:function(){var e=this.ul.children.length,t=this.index-1;this.goto(this.selected&&-1!==t?t:e-1)},goto:function(e){var t=this.ul.children;this.selected&&t[this.index].setAttribute("aria-selected","false"),this.index=e,e>-1&&t.length>0&&(t[e].setAttribute("aria-selected","true"),this.status.textContent=t[e].textContent+", list item "+(e+1)+" of "+t.length,this.input.setAttribute("aria-activedescendant",this.ul.id+"_item_"+this.index),this.ul.scrollTop=t[e].offsetTop-this.ul.clientHeight+t[e].clientHeight,n.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(e,t){if(e?this.index=n.siblingIndex(e):e=this.ul.children[this.index],e){var i=this.suggestions[this.index];n.fire(this.input,"awesomplete-select",{text:i,origin:t||e})&&(this.replace(i),this.close({reason:"select"}),n.fire(this.input,"awesomplete-selectcomplete",{text:i}))}},evaluate:function(){var t=this,n=this.input.value;n.length>=this.minChars&&this._list&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(i){return new e(t.data(i,n))}).filter(function(e){return t.filter(e,n)}),!1!==this.sort&&(this.suggestions=this.suggestions.sort(this.sort)),this.suggestions=this.suggestions.slice(0,this.maxItems),this.suggestions.forEach(function(e,i){t.ul.appendChild(t.item(e,n,i))}),0===this.ul.children.length?(this.status.textContent="No results found",this.close({reason:"nomatches"})):(this.open(),this.status.textContent=this.ul.children.length+" results found")):(this.close({reason:"nomatches"}),this.status.textContent="No results found")}},r.all=[],r.FILTER_CONTAINS=function(e,t){return RegExp(n.regExpEscape(t.trim()),"i").test(e)},r.FILTER_STARTSWITH=function(e,t){return RegExp("^"+n.regExpEscape(t.trim()),"i").test(e)},r.SORT_BYLENGTH=function(e,t){return e.length!==t.length?e.length-t.length:e<t?-1:1},r.ITEM=function(e,t,i){var s=""===t.trim()?e:e.replace(RegExp(n.regExpEscape(t.trim()),"gi"),"<mark>$&</mark>");return n.create("li",{innerHTML:s,"aria-selected":"false",id:"awesomplete_list_"+this.count+"_item_"+i})},r.REPLACE=function(e){this.input.value=e.value},r.DATA=function(e){return e},Object.defineProperty(e.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),e.prototype.toString=e.prototype.valueOf=function(){return""+this.label};var o=Array.prototype.slice;n.create=function(e,t){var i=document.createElement(e);for(var s in t){var r=t[s];if("inside"===s)n(r).appendChild(i);else if("around"===s){var o=n(r);o.parentNode.insertBefore(i,o),i.appendChild(o)}else s in i?i[s]=r:i.setAttribute(s,r)}return i},n.bind=function(e,t){if(e)for(var n in t){var i=t[n];n.split(/\s+/).forEach(function(t){e.addEventListener(t,i)})}},n.unbind=function(e,t){if(e)for(var n in t){var i=t[n];n.split(/\s+/).forEach(function(t){e.removeEventListener(t,i)})}},n.fire=function(e,t,n){var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!0);for(var s in n)i[s]=n[s];return e.dispatchEvent(i)},n.regExpEscape=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},n.siblingIndex=function(e){for(var t=0;e=e.previousElementSibling;t++);return t},"undefined"!=typeof self&&(self.Awesomplete=r),"undefined"!=typeof Document&&("loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s)),r.$=n,r.$$=i,"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=r)}();var scrollTo=function(e,t){var n=document.scrollingElement,i=n.scrollTop,s=e-i,r=+new Date,o=function(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};!function l(){var a=+new Date-r;n.scrollTop=parseInt(o(a,i,s,t)),a<t?requestAnimationFrame(l):n.scrollTop=e}()},setThemeLinks=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".carousel--themes a"));null!==e&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=-160;windowWidth<975&&(t=100);var n=e.target.href.split("#")[1],i=document.querySelector("#"+n),s=i.offsetTop-i.scrollTop+i.clientTop-t;scrollTo(s,1e3)})})},scrollToTop=function(e){window.addEventListener("scroll",function(){var t=!1;clearTimeout(t),t=setTimeout(function(){var t=window.scrollY;t<200?e.classList.remove("to-top__link--visible"):t>=200&&e.classList.add("to-top__link--visible")},250)})},setActiveItem=function(e,t,n){e.forEach(function(e){e.innerText.toLowerCase().indexOf(t.toLowerCase().trim())>-1&&e.classList.add(n+"--active")})},setCurrentPageIndicator=function(){var e=document.querySelector("body").dataset.current.split(","),t=Array.prototype.slice.call(document.querySelectorAll(".header__interior-links__item"));if(setActiveItem(t,e[0],"header__interior-links__item"),document.querySelector(".subnav")){var n=Array.prototype.slice.call(document.querySelectorAll(".subnav__item"));setActiveItem(n,e[1],"subnav__item")}},cleanUrls=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".table a"));null!==e&&e.forEach(function(e){e.innerText=e.innerText.replace(/(http)s?\:\/\//gi,"").replace(/\?.*/gi,"").replace(/\/$/gi,"")})},detectImageOrientation=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".two-col-skew__skewed--image > img"));0!==e.length&&e.forEach(function(e){var t=e.naturalWidth;e.naturalHeight>t&&e.classList.add("align-top")})},toggleEngagementsProvinces=function(){var e=document.querySelector(".engagement"),t=Array.prototype.slice.call(document.querySelectorAll(".section-communales__ordered-list__item--province"));if(null!==e){var n=function(t){t.classList.add(t.classList[0]+"--close"),t.addEventListener("animationend",function(){e.removeChild(t)})};t.forEach(function(t,i){t.addEventListener("click",function(){var t=document.querySelector(".engagement__active");null!==t&&t.classList.remove("engagement__active");var s=document.querySelector("#engagement"+(i+1));s.classList.add("engagement__active");var r=document.createElement("div");e.appendChild(r),r.classList.add("engagement__background");var o=function(e){return e.offsetTop-e.offsetHeight/2+"px"},l=function(e){return 10+e.offsetLeft+e.offsetWidth/2+"px"},a=document.createElement("button");e.appendChild(a),a.classList.add("engagement__close-btn"),a.innerText="X",a.style.top=o(s),a.style.left=l(s),window.addEventListener("resize",function(){a.style.top=o(s),a.style.left=l(s)}),e.addEventListener("click",function(e){(e.target.id===s.id||e.target.parentNode.id===s.id||e.target.classList.contains("engagement__background")||e.target.classList.contains("engagement__close-btn"))&&(s.classList.remove("engagement__active"),n(r),n(a))})})})}},setImgCover=function(){Array.prototype.slice.call(document.querySelectorAll(".two-col-skew__skewed--image img")).forEach(function(e){if(window.innerWidth>975){var t=e.parentNode,n=t.clientWidth/e.width;e.height*n<t.clientHeight?(e.style.height="100%",e.style.width="auto"):(e.style.height="auto",e.style.width="110%")}else e.style.cssText=""})},getClasses=function(){var e=document.querySelector("body"),t=[];Array.prototype.slice.call(e.querySelectorAll("*")).map(function(e){if(!t.includes(e.classList.value)&&e.classList.value.length,!0)return e.classList.value}).filter(function(e){return e.length})};getClasses(),window.addEventListener("click",getClasses);var setActuaFilterBarItems=function(){document.querySelector(".actua-filter")&&["economy","mobility","family","health","housing","justice","culture","energy"].forEach(function(e){(document.querySelectorAll(".newsfeed > [data-tag~="+e+"]").length||document.querySelectorAll(".communique > [data-tag~="+e+"]").length||document.querySelectorAll(".video-list [data-tag~="+e+"]").length)&&document.querySelector(".actua-filter > [data-tag~="+e+"]").classList.add("actua-filter__btn--present")})};getCookie("cname"),document.querySelector(".privacy__btn").addEventListener("click",function(){setCookie("cdh-accepted",!0,365),document.querySelector(".privacy").classList.remove("slideInFromBottom")}),setCurrentPageIndicator();var toTopElement=document.querySelector(".to-top__link");scrollToTop(toTopElement),toTopElement.addEventListener("click",function(e){e.preventDefault(),scrollTo(0,1e3)}),setThemeLinks();var inputCandidatesElement=document.querySelector(".input__text");if(null!==inputCandidatesElement){inputCandidatesElement.addEventListener("awesomplete-select",function(e){var t=document.querySelector("form");inputCandidatesElement.value=e.text.value,t.submit()});var candidates=function(e){new Awesomplete(inputCandidatesElement,{list:e,minChars:2,maxItems:30,autoFirst:!0})};if(!window.location.href.indexOf("http://localhost:3000/")>-1&&!window.location.href.indexOf("192.168.30.24:3000/")>-1){var request=new XMLHttpRequest;request.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.responseText.toString().split("|");candidates(e)}},request.open("GET","https:"===window.location.protocol?"https://dev2.lescommunales2018.be/generate_all.php":"http://dev2.lescommunales2018.be/generate_all.php",!0),request.send()}else candidates(["data","Wouter"])}cleanUrls(),toggleEngagementsProvinces(),window.addEventListener("load",setImgCover),setActuaFilterBarItems();