// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=l):t[e]=a.value),y="get"in a,p="set"in a,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),p&&i&&i.call(t,e,a.set),t};function l(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",_=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[v],i=v,e=null!=(o=t)&&s.call(o,i);try{t[v]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[v]=r:delete t[v],n}:function(t){return b.call(t)},d=Number,m=d.prototype.toString,h=p();function g(t){return"object"==typeof t&&(t instanceof d||(h?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function N(t){return c(t)||g(t)}l(N,"isPrimitive",c),l(N,"isObject",g);var j=Number.POSITIVE_INFINITY,w=d.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<j&&t>w&&O(e=t)===e;var e}function T(t){return c(t)&&S(t)}function A(t){return g(t)&&S(t.valueOf())}function F(t){return T(t)||A(t)}function I(t){return T(t)&&t>0}function E(t){return A(t)&&t.valueOf()>0}function P(t){return I(t)||E(t)}function k(t){return t!=t}l(F,"isPrimitive",T),l(F,"isObject",A),l(P,"isPrimitive",I),l(P,"isObject",E);var V=Math.sqrt,x="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,C="function"==typeof Float64Array?Float64Array:void 0,H=function(){var t,e,r;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,NaN]),r=e,t=(x&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?C:function(){throw new Error("not implemented")};function J(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e){var r,n,o,i,u,f,a,l;if(!I(t))throw new TypeError(J("1J78B,Hs",t));if(n=new H(t),a=t-1,i=0,l=-1,f=0,arguments.length>1){if(!c(e))throw new TypeError(J("1J79X,Hv",e));return u=e,p}return u=0,y;function y(e){var c,y;if(0===arguments.length)return 0===f?null:1===f?k(i)?NaN:0:V(f<t?i/(f-1):i/a);if(l=(l+1)%t,k(e))f=t,i=NaN;else{if(f<t)return n[l]=e,i+=(r=e-u)*(e-(u+=r/(f+=1))),1===f?0:V(i/(f-1));if(1===f)return i=0;if(k(n[l])){for(f=1,u=e,i=0,c=0;c<t;c++)if(c!==l){if(k(y=n[c])){f=t,i=NaN;break}i+=(r=y-u)*(y-(u+=r/(f+=1)))}}else!1===k(i)&&(o=n[l],i+=(r=e-o)*(o-u+(e-(u+=r/t))))}return n[l]=e,V(i/a)}function p(e){var a;if(0===arguments.length)return 0===f?null:V(f<t?i/f:i/t);if(l=(l+1)%t,k(e))f=t,i=NaN;else{if(f<t)return n[l]=e,V((i+=(r=e-u)*r)/(f+=1));if(k(n[l])){for(i=0,a=0;a<t;a++)if(a!==l){if(k(n[a])){f=t,i=NaN;break}r=n[a]-u,i+=r*r}}else!1===k(i)&&(o=n[l],i+=(e-o)*(e-u+o-u))}return n[l]=e,V(i/t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmstdev=e();
//# sourceMappingURL=browser.js.map
