// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmstdev=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,x=y;var V=E,S=function(r){var e,t,n;if(null==r)return x.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[T]=t:delete r[T],n},k=b()?S:V,A=Number,N=A.prototype.toString;var F=k,I=A,M=function(r){try{return N.call(r),!0}catch(r){return!1}},R=b();var $=function(r){return"object"==typeof r&&(r instanceof I||(R?M(r):"[object Number]"===F(r)))},C=h,B=$;var G=d,L=function(r){return C(r)||B(r)},Z=$;G(L,"isPrimitive",h),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=A.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},q=X,D=z,H=Y;var J=function(r){return r<q&&r>D&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=d,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>0},vr=fr.isObject;var pr=function(r){return vr(r)&&r.valueOf()>0},gr=lr,dr=pr;var hr=d,mr=function(r){return gr(r)||dr(r)},br=pr;hr(mr,"isPrimitive",lr),hr(mr,"isObject",br);var yr=mr;var wr=function(r){return r!=r},Er=Math.sqrt,jr=k,Pr="function"==typeof Float64Array;var _r="function"==typeof Float64Array?Float64Array:null,Or=function(r){return Pr&&r instanceof Float64Array||"[object Float64Array]"===jr(r)},Tr=_r;var xr="function"==typeof Float64Array?Float64Array:void 0,Vr=function(){throw new Error("not implemented")},Sr=function(){var r,e;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,NaN]),r=Or(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?xr:Vr;var kr=function(r){return"string"==typeof r},Ar=String.prototype.valueOf;var Nr=k,Fr=function(r){try{return Ar.call(r),!0}catch(r){return!1}},Ir=b();var Mr=function(r){return"object"==typeof r&&(r instanceof String||(Ir?Fr(r):"[object String]"===Nr(r)))},Rr=kr,$r=Mr;var Cr=d,Br=function(r){return Rr(r)||$r(r)},Gr=Mr;Cr(Br,"isPrimitive",kr),Cr(Br,"isObject",Gr);var Lr=Br,Zr=Y;var Wr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Zr(r.length)&&r.length>=0&&r.length<=9007199254740991},Xr=W.isPrimitive,zr=wr;var Ur=function(r){return Xr(r)&&zr(r)},Yr=W.isObject,qr=wr;var Dr=function(r){return Yr(r)&&qr(r.valueOf())},Hr=Ur,Jr=Dr;var Kr=d,Qr=function(r){return Hr(r)||Jr(r)},re=Dr;Kr(Qr,"isPrimitive",Ur),Kr(Qr,"isObject",re);var ee=Wr,te=fr.isPrimitive,ne=Lr.isPrimitive,ie=Qr.isPrimitive;var ae=function(r,e,t){var n,i,a;if(!ee(r)&&!ne(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!te(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ne(r)){if(!ne(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ie(e)){for(a=i;a<n;a++)if(ie(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},oe=ae,ue=Lr.isPrimitive;var ce=function(r){if(!ue(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},fe=Lr.isPrimitive;var se=function(r){if(!fe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},le=ce,ve=se,pe=Lr.isPrimitive;var ge=function(r){return pe(r)&&r===ve(r)&&r!==le(r)},de=X,he=z;var me=function(r){return r==r&&r>he&&r<de},be=fr.isPrimitive;var ye=function(r){return be(r)&&r>=0},we=fr.isObject;var Ee=function(r){return we(r)&&r.valueOf()>=0},je=ye,Pe=Ee;var _e=d,Oe=function(r){return je(r)||Pe(r)},Te=Ee;_e(Oe,"isPrimitive",ye),_e(Oe,"isObject",Te);var xe=Oe.isPrimitive,Ve=Lr.isPrimitive;var Se=function(r,e){var t,n;if(!Ve(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!xe(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ke=fr.isPrimitive,Ae=Lr.isPrimitive;var Ne=function(r,e,t){var n,i;if(!Ae(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ke(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Fe=Se,Ie=Ne;var Me=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ie(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Fe("0",i):Fe("0",i)+r,n&&(r="-"+r)),r},Re=ge,$e=se,Ce=ce,Be=me,Ge=W.isPrimitive,Le=Me;var Ze=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Be(n)){if(!Ge(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Le(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Le(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Re(r.specifier)?$e(t):Ce(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},We=Lr.isPrimitive,Xe=/[-\/\\^$*+?.()|[\]{}]/g;var ze=function(r){var e,t;if(!We(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Xe,"\\$&"):(e=(e=r.substring(1,t)).replace(Xe,"\\$&"),r=r[0]+e+r.substring(t))},Ue=/./;var Ye=function(r){return"boolean"==typeof r},qe=Boolean.prototype.toString;var De=k,He=function(r){try{return qe.call(r),!0}catch(r){return!1}},Je=b();var Ke=function(r){return"object"==typeof r&&(r instanceof Boolean||(Je?He(r):"[object Boolean]"===De(r)))},Qe=Ye,rt=Ke;var et=d,tt=function(r){return Qe(r)||rt(r)},nt=Ke;et(tt,"isPrimitive",Ye),et(tt,"isObject",nt);var it=tt;var at=function(){return new Function("return this;")()},ot="object"==typeof self?self:null,ut="object"==typeof window?window:null,ct="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ft="object"==typeof ct?ct:null;module.exports=ft;var st=it.isPrimitive,lt=at,vt=ot,pt=ut,gt=r(Object.freeze({__proto__:null}));var dt=function(r){if(arguments.length){if(!st(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return lt()}if(vt)return vt;if(pt)return pt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")},ht=dt(),mt=ht.document&&ht.document.childNodes,bt=Int8Array,yt=Ue,wt=mt,Et=bt;var jt=function(){return"function"==typeof yt||"object"==typeof Et||"function"==typeof wt};var Pt=function(){return/^\s*function\s*([^(]*)/i},_t=Pt;d(_t,"REGEXP",Pt());var Ot=_t,Tt=k;var xt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Tt(r)};var Vt=function(r){return null!==r&&"object"==typeof r};d(Vt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!xt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vt));var St=Vt;var kt=k,At=Ot.REGEXP,Nt=function(r){return St(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Ft=function(r){var e,t,n;if(("Object"===(t=kt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=At.exec(n.toString()))return e[1]}return Nt(r)?"Buffer":t},It=Ft;var Mt=Ft;var Rt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?It(r).toLowerCase():e},$t=function(r){return Mt(r).toLowerCase()},Ct=jt()?$t:Rt;var Bt=function(r){return"function"===Ct(r)},Gt=RegExp.prototype.exec;var Lt=k,Zt=function(r){try{return Gt.call(r),!0}catch(r){return!1}},Wt=b();var Xt=ze,zt=Bt,Ut=Lr.isPrimitive,Yt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Wt?Zt(r):"[object RegExp]"===Lt(r)))};var qt=ge,Dt=se,Ht=ce,Jt=function(r,e,t){if(!Ut(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Ut(e))e=Xt(e),e=new RegExp(e,"g");else if(!Yt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Ut(t)&&!zt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Kt=me,Qt=W.isPrimitive,rn=function(r){return Math.abs(r)},en=/e\+(\d)$/,tn=/e-(\d)$/,nn=/^(\d+)$/,an=/^(\d+)e/,on=/\.0$/,un=/\.0*e/,cn=/(\..*[^0])0*e/;var fn=function(r){var e,t,n=parseFloat(r.arg);if(!Kt(n)){if(!Qt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":rn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Jt(t,cn,"$1e"),t=Jt(t,un,"e"),t=Jt(t,on,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Jt(t,en,"e+0$1"),t=Jt(t,tn,"e-0$1"),r.alternate&&(t=Jt(t,nn,"$1."),t=Jt(t,an,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=qt(r.specifier)?Dt(t):Ht(t)},sn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var ln=Se;var vn=Lr.isPrimitive,pn=oe,gn=wr,dn=Ze,hn=fn,mn=function(r){var e,t,n,i,a;for(e=0,n=[],a=sn.exec(r);a;)(t=r.slice(e,sn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=sn.lastIndex,a=sn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},bn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ln(" ",n):ln(" ",n)+r},yn=Me,wn=String.fromCharCode;var En=function(r){var e,t,n,i,a,o,u,c,f;if(!vn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=mn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],vn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!pn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,gn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,gn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=dn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!gn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=gn(a)?String(n.arg):wn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=hn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=yn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=bn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},jn=yr.isPrimitive,Pn=W.isPrimitive,_n=wr,On=Er,Tn=Sr,xn=En;var Vn=function(r,e){var t,n,i,a,o,u,c,f;if(!jn(r))throw new TypeError(xn("invalid argument. Must provide a positive integer. Value: `%s`.",r));if(n=new Tn(r),c=r-1,a=0,f=-1,u=0,arguments.length>1){if(!Pn(e))throw new TypeError(xn("invalid argument. Must provide a number. Value: `%s`.",e));return o=e,l}return o=0,s;function s(e){var s,l;if(0===arguments.length)return 0===u?null:1===u?_n(a)?NaN:0:On(u<r?a/(u-1):a/c);if(f=(f+1)%r,_n(e))u=r,a=NaN;else{if(u<r)return n[f]=e,a+=(t=e-o)*(e-(o+=t/(u+=1))),1===u?0:On(a/(u-1));if(1===u)return a=0;if(_n(n[f])){for(u=1,o=e,a=0,s=0;s<r;s++)if(s!==f){if(l=n[s],_n(l)){u=r,a=NaN;break}a+=(t=l-o)*(l-(o+=t/(u+=1)))}}else!1===_n(a)&&(i=n[f],a+=(t=e-i)*(i-o+(e-(o+=t/r))))}return n[f]=e,On(a/c)}function l(e){var c;if(0===arguments.length)return 0===u?null:On(u<r?a/u:a/r);if(f=(f+1)%r,_n(e))u=r,a=NaN;else{if(u<r)return n[f]=e,On((a+=(t=e-o)*t)/(u+=1));if(_n(n[f])){for(a=0,c=0;c<r;c++)if(c!==f){if(_n(n[c])){u=r,a=NaN;break}t=n[c]-o,a+=t*t}}else!1===_n(a)&&(i=n[f],a+=(e-i)*(e-o+i-o))}return n[f]=e,On(a/r)}};return Vn}));
//# sourceMappingURL=bundle.js.map
