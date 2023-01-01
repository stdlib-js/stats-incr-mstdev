// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(f,m){var o,l,d,a,h,j,p,u;if(!e(f))throw new TypeError(n("0eS8T",f));if(l=new i(f),p=f-1,a=0,u=-1,j=0,arguments.length>1){if(!r(m))throw new TypeError(n("0eSA8",m));return h=m,b}return h=0,v;function v(e){var r,i;if(0===arguments.length)return 0===j?null:1===j?t(a)?NaN:0:s(j<f?a/(j-1):a/p);if(u=(u+1)%f,t(e))j=f,a=NaN;else{if(j<f)return l[u]=e,a+=(o=e-h)*(e-(h+=o/(j+=1))),1===j?0:s(a/(j-1));if(1===j)return a=0;if(t(l[u])){for(j=1,h=e,a=0,r=0;r<f;r++)if(r!==u){if(i=l[r],t(i)){j=f,a=NaN;break}a+=(o=i-h)*(i-(h+=o/(j+=1)))}}else!1===t(a)&&(d=l[u],a+=(o=e-d)*(d-h+(e-(h+=o/f))))}return l[u]=e,s(a/p)}function b(e){var r;if(0===arguments.length)return 0===j?null:s(j<f?a/j:a/f);if(u=(u+1)%f,t(e))j=f,a=NaN;else{if(j<f)return l[u]=e,s((a+=(o=e-h)*o)/(j+=1));if(t(l[u])){for(a=0,r=0;r<f;r++)if(r!==u){if(t(l[r])){j=f,a=NaN;break}o=l[r]-h,a+=o*o}}else!1===t(a)&&(d=l[u],a+=(e-d)*(e-h+d-h))}return l[u]=e,s(a/f)}}export{f as default};
//# sourceMappingURL=index.mjs.map
