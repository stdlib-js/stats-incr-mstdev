// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,b,"$1e"),i=f.call(i,y,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,p,"e+0$1"),i=f.call(i,g,"e-0$1"),r.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):s.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,i,a,o,l,s,u,f,p,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,u=0;u<r.length;u++)if(i=r[u],"string"==typeof i)l+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,S(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=i.arg||"",s+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,i,n;for(t=[],n=0,i=j.exec(r);i;)(e=r.slice(n,j.lastIndex-i[0].length)).length&&t.push(e),t.push(x(i)),n=j.lastIndex,i=j.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var T=Object.prototype,A=T.toString,O=T.__defineGetter__,V=T.__defineSetter__,P=T.__lookupGetter__,$=T.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(r,e)||$.call(r,e)?(i=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function R(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var J=W()?function(r){var e,t,i,n,a;if(null==r)return L.call(r);t=r[X],a=X,e=null!=(n=r)&&M.call(n,a);try{r[X]=void 0}catch(e){return L.call(r)}return i=L.call(r),e?r[X]=t:delete r[X],i}:function(r){return L.call(r)},Y=Number,q=Y.prototype.toString;var z=W();function B(r){return"object"==typeof r&&(r instanceof Y||(z?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function D(r){return G(r)||B(r)}R(D,"isPrimitive",G),R(D,"isObject",B);var H=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<H&&r>K&&Q(e=r)===e;var e}function er(r){return G(r)&&rr(r)}function tr(r){return B(r)&&rr(r.valueOf())}function ir(r){return er(r)||tr(r)}function nr(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return nr(r)||ar(r)}function cr(r){return r!=r}R(ir,"isPrimitive",er),R(ir,"isObject",tr),R(or,"isPrimitive",nr),R(or,"isObject",ar);var lr=Math.sqrt,sr="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr="function"==typeof Float64Array?Float64Array:void 0;var pr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};function gr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function dr(r,e){var t,i,n,a,o,c,l,s;if(!nr(r))throw new TypeError(gr("1J78B",r));if(i=new pr(r),l=r-1,a=0,s=-1,c=0,arguments.length>1){if(!G(e))throw new TypeError(gr("1J79X",e));return o=e,function(e){var l;if(0===arguments.length)return 0===c?null:lr(c<r?a/c:a/r);if(s=(s+1)%r,cr(e))c=r,a=NaN;else{if(c<r)return i[s]=e,lr((a+=(t=e-o)*t)/(c+=1));if(cr(i[s])){for(a=0,l=0;l<r;l++)if(l!==s){if(cr(i[l])){c=r,a=NaN;break}t=i[l]-o,a+=t*t}}else!1===cr(a)&&(n=i[s],a+=(e-n)*(e-o+n-o))}return i[s]=e,lr(a/r)}}return o=0,function(e){var u,f;if(0===arguments.length)return 0===c?null:1===c?cr(a)?NaN:0:lr(c<r?a/(c-1):a/l);if(s=(s+1)%r,cr(e))c=r,a=NaN;else{if(c<r)return i[s]=e,a+=(t=e-o)*(e-(o+=t/(c+=1))),1===c?0:lr(a/(c-1));if(1===c)return a=0;if(cr(i[s])){for(c=1,o=e,a=0,u=0;u<r;u++)if(u!==s){if(cr(f=i[u])){c=r,a=NaN;break}a+=(t=f-o)*(f-(o+=t/(c+=1)))}}else!1===cr(a)&&(n=i[s],a+=(t=e-n)*(n-o+(e-(o+=t/r))))}return i[s]=e,lr(a/l)}}export{dr as default};
//# sourceMappingURL=mod.js.map
