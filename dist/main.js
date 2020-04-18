!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1),t(17)},function(n,e,t){var o=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});n.exports=a},function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var r=n[i],l=e.base?r[0]+e.base:r[0],c=t[l]||0,p="".concat(l," ").concat(c);t[l]=c+1;var u=s(p),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:p,updater:h(d,e),references:1}),o.push(p)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var p,u=(p=[],function(n,e){return p[n]=e,p.filter(Boolean).join("\n")});function d(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function f(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,b=0;function h(n,e){var t,o,i;if(e.singleton){var r=b++;t=g||(g=c(e)),o=d.bind(null,t,r,!1),i=d.bind(null,t,r,!0)}else t=c(e),o=f.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=s(t[o]);a[i].references--}for(var r=l(n,e),c=0;c<t.length;c++){var p=s(t[c]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}t=r}}}},function(n,e,t){var o=t(4),i=t(5),r=t(6),a=t(7),s=t(8),l=t(9),c=t(10),p=t(11),u=t(12),d=t(13),f=t(14),g=t(15),b=t(16);e=o(!1);var h=i(r),x=i(a),m=i(s),_=i(l),v=i(c),y=i(p),w=i(u),k=i(d),z=i(f),S=i(g),j=i(b);e.push([n.i,".central {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.central__content {\n  display: flex;\n  min-height: 740px;\n}\n.intro {\n  width: 800px;\n  height: 740px;\n  background: url("+h+") no-repeat center;\n  background-size: contain;\n  position: relative;\n}\n.intro__asterisk {\n  text-align: center;\n  font-size: 172px;\n  color: #de1f1f;\n  cursor: pointer;\n  position: relative;\n  top: 220px;\n  left: 30px;\n}\n.intro__asterisk:hover {\n  color: #df4e4e;\n}\n.intro__asterisk:active {\n  color: #af3636;\n}\n.intro__motto {\n  font-size: 18px;\n  position: absolute;\n  bottom: 0;\n}\n.greeting {\n  position: relative;\n  width: 780px;\n  height: 740px;\n  transition: background-image 1s ease-in-out;\n  background: url("+x+") no-repeat center;\n  background-size: contain;\n}\n.greeting__asterisk {\n  font-size: 80px;\n  color: #de1f1f;\n  text-align: center;\n}\n.greeting__logo {\n  text-align: center;\n}\n.greeting__challenge {\n  margin: 0 auto;\n  text-align: center;\n}\n.greeting__challenge h3 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 30px;\n}\n.greeting__challenge p {\n  font-family: 'Roboto', sans-serif;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 34px;\n}\n.greeting__continue {\n  position: absolute;\n  right: -20px;\n  top: 300px;\n  cursor: pointer;\n}\n.rules {\n  padding-top: 100px;\n  text-align: center;\n}\n.rules__title {\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 30px;\n}\n.rules__description {\n  font-family: 'Roboto', sans-serif;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 34px;\n}\n.rules__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.rules__input {\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;\n  font-size: 22px;\n  line-height: 30px;\n  height: 50px;\n  text-align: center;\n  border-radius: 5px;\n  border: 2px transparent;\n  border-style: solid;\n}\n.rules__input:hover {\n  border-color: #e2a0a1;\n}\n.rules__input:focus {\n  border-color: #d74040;\n}\n.rules__button {\n  margin-top: 50px;\n  width: 90px;\n  height: 90px;\n  cursor: pointer;\n  display: block;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  line-height: 60px;\n  color: #ffffff;\n  background-color: #df4e4e;\n  border-width: 0;\n  border-radius: 45px;\n}\n.rules__button:enabled:hover {\n  background-color: #ff6969;\n}\n.rules__button:active {\n  background-color: #af3636;\n}\n.rules__button:disabled {\n  background-color: #c6a5a5;\n}\n.header {\n  height: 100px;\n}\n.header__back {\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding-top: 20px;\n}\n.social-link {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  margin: 0 2px;\n  font-size: 0;\n  vertical-align: top;\n  text-decoration: none;\n  background: transparent url("+m+") no-repeat center;\n}\n.social-link--academy {\n  width: 120px;\n  height: 40px;\n  background-position: -108px -10px;\n}\n.social-link--tw {\n  background-position: -59px -59px;\n}\n.social-link--ins {\n  background-position: -10px -59px;\n}\n.social-link--fb {\n  background-position: -59px -10px;\n}\n.social-link--vk {\n  background-position: -10px -10px;\n}\n.footer {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 50px;\n}\n.footer__made-in {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 12px;\n}\n.footer__link {\n  font-family: 'Roboto', sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 12px;\n}\n.footer__link:hover {\n  color: #df4e4e;\n}\n.footer__link:active {\n  color: #af3636;\n}\n.game {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.game__timer {\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 30px;\n  font-size: 60px;\n  position: absolute;\n  margin-top: 0;\n  top: 25px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.game__lives {\n  position: absolute;\n  top: 20px;\n  right: 0;\n}\n.game__task {\n  font-size: 22px;\n  line-height: 35px;\n}\n.game__content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n.game__option {\n  position: relative;\n  border: 10px solid transparent;\n  width: 468px;\n  height: 458px;\n  font-size: 0;\n  text-align: center;\n  vertical-align: middle;\n}\n.game__answer input {\n  position: absolute;\n  left: -99999px;\n}\n.game__answer input + span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 70px;\n  background: rgba(0, 0, 0, 0.5) no-repeat center;\n  font-size: 0;\n}\n.game__answer input + span:hover {\n  background-color: #000000;\n}\n.game__answer input:checked + span {\n  background-color: #df4e4e;\n}\n.game__answer {\n  position: absolute;\n  width: 78px;\n  height: 78px;\n  bottom: 30px;\n}\n.game__answer--photo {\n  left: 30px;\n}\n.game__answer--photo input + span {\n  background-image: url("+_+");\n}\n.game__answer--paint {\n  right: 30px;\n}\n.game__answer--paint input + span {\n  background-image: url("+v+');\n}\n.game__content--wide .game__option {\n  width: 705px;\n  height: 455px;\n}\n.game__content--wide .game__answer {\n  top: 208px;\n}\n.game__content--wide .game__answer--photo {\n  left: -100px;\n}\n.game__content--wide .game__answer--paint {\n  right: -100px;\n}\n.game__content--triple .game__option {\n  cursor: pointer;\n  width: 304px;\n  height: 455px;\n}\n.game__content--triple .game__option:hover {\n  border-color: #df4e4e;\n}\n.game__content--triple .game__option:active::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(223, 78, 78, 0.4);\n}\n.stats {\n  padding: 0;\n  list-style: none;\n  font-size: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.stats__result {\n  display: inline-block;\n  vertical-align: bottom;\n  overflow: hidden;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n}\n.stats__result--unknown {\n  background: url('+y+") no-repeat center;\n}\n.stats__result--wrong {\n  background: url("+w+") no-repeat center;\n}\n.stats__result--correct {\n  background: url("+k+") no-repeat center;\n}\n.stats__result--slow {\n  background: url("+z+") no-repeat center;\n}\n.stats__result--fast {\n  position: relative;\n  background: url("+k+') no-repeat center;\n}\n.stats__result--fast::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  background: url('+S+") no-repeat center;\n}\n.stats__result--heart {\n  background: url("+j+") no-repeat center;\n}\n.result {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.result__table {\n  width: 670px;\n  margin-bottom: 40px;\n}\n.result__table td {\n  border: 10px solid transparent;\n}\n.result__table .stats {\n  justify-content: flex-end;\n}\n.result__number {\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 30px;\n  font-size: 22px;\n}\n.result__extra {\n  min-width: 50px;\n  text-align: right;\n}\n.result__total {\n  min-width: 40px;\n  text-align: right;\n  text-transform: uppercase;\n}\n.result__total--final {\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 30px;\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #a8c8c4 linear-gradient(to bottom left, #ccdeeb, #84b39e) no-repeat;\n  font-family: 'Roboto', sans-serif;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 34px;\n  color: #00222d;\n  min-height: 100%;\n}\na {\n  color: #00222d;\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var a,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"36f8aa1f06f43d5158e9154c2d5a76f8.png"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"24a47c6f7e84ff25cdad967b6753eb63.png"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"6ac047a6775d7080c9513a23042ad9f8.png"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"04a88789aae3a5ab593f315892427e10.png"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"98b084a2ad92ecde5628d1073b5fde1c.png"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"c47f5279e9ec64db2c35ea90aea6121a.svg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"c408c702e34bb4d38cb2d90739b51558.svg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"a9be9f7df31946320d26200669f6101e.svg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"8493dc525fee457b549522dbe31ac2e9.svg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"bdd29196539b0cb52f1d24711ed5eacf.svg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"fa6dbf21a1432d951cafec61bae74cab.svg"},function(n,e){const t=document.querySelector(".central"),o=document.getElementById("greeting"),i=document.getElementById("rules"),r=document.getElementById("game-1"),a=document.getElementById("game-2"),s=document.getElementById("game-3"),l=document.getElementById("stats");o&&console.log(o),displayArray=[t,o,i,r,a,s,l],console.log(displayArray);var c=document.querySelectorAll(".arrows__btn");console.log(c);var p=displayArray;slidesLength=p.length;var u=[].slice.call(p);u=u.reverse();for(var d=function(n){39===n.keyCode&&(next=n.target,prev=next.previousElementSibling,nextSlide=u[f+1],slide=u[f],(f+=1)===slidesLength-1&&document.removeEventListener("keydown",d)),37===n.keyCode&&(f-=1,prev=n.target,next=prev.nextElementSibling,prevSlide=u[f+1],slide=u[f],slidesLength,0===f&&(prev.disabled=!0)),t.innerHTML=p[f].innerHTML},f=0,g=0;g<c.length;g++)c[g].addEventListener("click",(function(n){target=n.target,target.classList.contains("next")&&(next=n.target,prev=next.previousElementSibling,nextSlide=u[f+1],slide=u[f],(f+=1)>0&&(prev.disabled=!1),f===slidesLength-1&&(next.disabled=!0)),target.classList.contains("prev")&&(f-=1,prev=n.target,next=prev.nextElementSibling,prevSlide=u[f+1],slide=u[f],f===slidesLength-2&&(next.disabled=!1),0===f&&(prev.disabled=!0)),console.log(p[f]),t.innerHTML=p[f].innerHTML}));document.addEventListener("keydown",d)}]);