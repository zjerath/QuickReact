function gy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _y(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ap={exports:{}},ll={},Dp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),vy=Symbol.for("react.portal"),yy=Symbol.for("react.fragment"),wy=Symbol.for("react.strict_mode"),Ey=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Sy=Symbol.for("react.context"),Iy=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),Ty=Symbol.for("react.memo"),Ny=Symbol.for("react.lazy"),th=Symbol.iterator;function Py(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Lp={};function $r(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||bp}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fp(){}Fp.prototype=$r.prototype;function ec(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||bp}var tc=ec.prototype=new Fp;tc.constructor=ec;Mp(tc,$r.prototype);tc.isPureReactComponent=!0;var nh=Array.isArray,Up=Object.prototype.hasOwnProperty,nc={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function zp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Up.call(e,r)&&!jp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ls,type:t,key:s,ref:o,props:i,_owner:nc.current}}function Ry(t,e){return{$$typeof:ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ls}function xy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rh=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xy(""+t.key):e.toString(36)}function qs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ls:case vy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$l(o,0):r,nh(i)?(n="",t!=null&&(n=t.replace(rh,"$&/")+"/"),qs(i,e,n,"",function(u){return u})):i!=null&&(rc(i)&&(i=Ry(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+$l(s,l);o+=qs(s,e,n,a,i)}else if(a=Py(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+$l(s,l++),o+=qs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(t,e,n){if(t==null)return t;var r=[],i=0;return qs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},Gs={transition:null},Ay={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Gs,ReactCurrentOwner:nc};z.Children={map:Is,forEach:function(t,e,n){Is(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Is(t,function(){e++}),e},toArray:function(t){return Is(t,function(e){return e})||[]},only:function(t){if(!rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=$r;z.Fragment=yy;z.Profiler=Ey;z.PureComponent=ec;z.StrictMode=wy;z.Suspense=ky;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Up.call(e,a)&&!jp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ls,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Sy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cy,_context:t},t.Consumer=t};z.createElement=zp;z.createFactory=function(t){var e=zp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Iy,render:t}};z.isValidElement=rc;z.lazy=function(t){return{$$typeof:Ny,_payload:{_status:-1,_result:t},_init:Oy}};z.memo=function(t,e){return{$$typeof:Ty,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Gs.transition;Gs.transition={};try{t()}finally{Gs.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Oe.current.useCallback(t,e)};z.useContext=function(t){return Oe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};z.useEffect=function(t,e){return Oe.current.useEffect(t,e)};z.useId=function(){return Oe.current.useId()};z.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Oe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};z.useRef=function(t){return Oe.current.useRef(t)};z.useState=function(t){return Oe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Oe.current.useTransition()};z.version="18.2.0";Dp.exports=z;var P=Dp.exports;const Wp=_y(P),Dy=gy({__proto__:null,default:Wp},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=P,My=Symbol.for("react.element"),Ly=Symbol.for("react.fragment"),Fy=Object.prototype.hasOwnProperty,Uy=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jy={key:!0,ref:!0,__self:!0,__source:!0};function Bp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fy.call(e,r)&&!jy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:My,type:t,key:s,ref:o,props:i,_owner:Uy.current}}ll.Fragment=Ly;ll.jsx=Bp;ll.jsxs=Bp;Ap.exports=ll;var E=Ap.exports,Aa={},Vp={exports:{}},He={},$p={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,b){var M=x.length;x.push(b);e:for(;0<M;){var ie=M-1>>>1,ce=x[ie];if(0<i(ce,b))x[ie]=b,x[M]=ce,M=ie;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var b=x[0],M=x.pop();if(M!==b){x[0]=M;e:for(var ie=0,ce=x.length,Cs=ce>>>1;ie<Cs;){var Sn=2*(ie+1)-1,Vl=x[Sn],In=Sn+1,Ss=x[In];if(0>i(Vl,M))In<ce&&0>i(Ss,Vl)?(x[ie]=Ss,x[In]=M,ie=In):(x[ie]=Vl,x[Sn]=M,ie=Sn);else if(In<ce&&0>i(Ss,M))x[ie]=Ss,x[In]=M,ie=In;else break e}}return b}function i(x,b){var M=x.sortIndex-b.sortIndex;return M!==0?M:x.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,m=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=x)r(u),b.sortIndex=b.expirationTime,e(a,b);else break;b=n(u)}}function y(x){if(v=!1,g(x),!_)if(n(a)!==null)_=!0,Wl(T);else{var b=n(u);b!==null&&Bl(y,b.startTime-x)}}function T(x,b){_=!1,v&&(v=!1,p(N),N=-1),m=!0;var M=h;try{for(g(b),d=n(a);d!==null&&(!(d.expirationTime>b)||x&&!Ne());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var ce=ie(d.expirationTime<=b);b=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(b)}else r(a);d=n(a)}if(d!==null)var Cs=!0;else{var Sn=n(u);Sn!==null&&Bl(y,Sn.startTime-b),Cs=!1}return Cs}finally{d=null,h=M,m=!1}}var I=!1,S=null,N=-1,j=5,D=-1;function Ne(){return!(t.unstable_now()-D<j)}function nr(){if(S!==null){var x=t.unstable_now();D=x;var b=!0;try{b=S(!0,x)}finally{b?Cn():(I=!1,S=null)}}else I=!1}var Cn;if(typeof f=="function")Cn=function(){f(nr)};else if(typeof MessageChannel<"u"){var eh=new MessageChannel,my=eh.port2;eh.port1.onmessage=nr,Cn=function(){my.postMessage(null)}}else Cn=function(){w(nr,0)};function Wl(x){S=x,I||(I=!0,Cn())}function Bl(x,b){N=w(function(){x(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Wl(T))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var M=h;h=b;try{return x()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,b){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var M=h;h=x;try{return b()}finally{h=M}},t.unstable_scheduleCallback=function(x,b,M){var ie=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ie+M:ie):M=ie,x){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,x={id:c++,callback:b,priorityLevel:x,startTime:M,expirationTime:ce,sortIndex:-1},M>ie?(x.sortIndex=M,e(u,x),n(a)===null&&x===n(u)&&(v?(p(N),N=-1):v=!0,Bl(y,M-ie))):(x.sortIndex=ce,e(a,x),_||m||(_=!0,Wl(T))),x},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(x){var b=h;return function(){var M=h;h=b;try{return x.apply(this,arguments)}finally{h=M}}}})(Hp);$p.exports=Hp;var zy=$p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=P,$e=zy;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gp=new Set,Oi={};function Jn(t,e){xr(t,e),xr(t+"Capture",e)}function xr(t,e){for(Oi[t]=e,t=0;t<e.length;t++)Gp.add(e[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Da=Object.prototype.hasOwnProperty,Wy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},sh={};function By(t){return Da.call(sh,t)?!0:Da.call(ih,t)?!1:Wy.test(t)?sh[t]=!0:(ih[t]=!0,!1)}function Vy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $y(t,e,n,r){if(e===null||typeof e>"u"||Vy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function sc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ic,sc);we[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ic,sc);we[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ic,sc);we[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function oc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($y(e,n,i,r)&&(n=null),r||i===null?By(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),sr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),oh=Symbol.iterator;function ti(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Hl;function fi(t){if(Hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+t}var ql=!1;function Gl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fi(t):""}function Hy(t){switch(t.tag){case 5:return fi(t.type);case 16:return fi("Lazy");case 13:return fi("Suspense");case 19:return fi("SuspenseList");case 0:case 2:case 15:return t=Gl(t.type,!1),t;case 11:return t=Gl(t.type.render,!1),t;case 1:return t=Gl(t.type,!0),t;default:return""}}function Fa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case or:return"Fragment";case sr:return"Portal";case ba:return"Profiler";case lc:return"StrictMode";case Ma:return"Suspense";case La:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qp:return(t.displayName||"Context")+".Consumer";case Kp:return(t._context.displayName||"Context")+".Provider";case ac:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uc:return e=t.displayName||null,e!==null?e:Fa(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return Fa(t(e))}catch{}}return null}function qy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(e);case 8:return e===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gy(t){var e=Xp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ts(t){t._valueTracker||(t._valueTracker=Gy(t))}function Jp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ua(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&oc(t,"checked",e,!1)}function ja(t,e){Zp(t,e);var n=fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?za(t,e.type,n):e.hasOwnProperty("defaultValue")&&za(t,e.type,fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function za(t,e,n){(e!=="number"||ao(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pi=Array.isArray;function vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(pi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fn(n)}}function em(t,e){var n=fn(e.value),r=fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ns,nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ns.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ky=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(t){Ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_i[e]=_i[t]})});function rm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_i.hasOwnProperty(t)&&_i[t]?(""+e).trim():e+"px"}function im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Qy=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(t,e){if(e){if(Qy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function $a(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qa=null,yr=null,wr=null;function dh(t){if(t=cs(t)){if(typeof qa!="function")throw Error(C(280));var e=t.stateNode;e&&(e=hl(e),qa(t.stateNode,t.type,e))}}function sm(t){yr?wr?wr.push(t):wr=[t]:yr=t}function om(){if(yr){var t=yr,e=wr;if(wr=yr=null,dh(t),e)for(t=0;t<e.length;t++)dh(e[t])}}function lm(t,e){return t(e)}function am(){}var Kl=!1;function um(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return lm(t,e,n)}finally{Kl=!1,(yr!==null||wr!==null)&&(am(),om())}}function Di(t,e){var n=t.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Ga=!1;if(Ot)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Ga=!1}function Yy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vi=!1,uo=null,co=!1,Ka=null,Xy={onError:function(t){vi=!0,uo=t}};function Jy(t,e,n,r,i,s,o,l,a){vi=!1,uo=null,Yy.apply(Xy,arguments)}function Zy(t,e,n,r,i,s,o,l,a){if(Jy.apply(this,arguments),vi){if(vi){var u=uo;vi=!1,uo=null}else throw Error(C(198));co||(co=!0,Ka=u)}}function Zn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hh(t){if(Zn(t)!==t)throw Error(C(188))}function e0(t){var e=t.alternate;if(!e){if(e=Zn(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hh(i),t;if(s===r)return hh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function dm(t){return t=e0(t),t!==null?hm(t):null}function hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hm(t);if(e!==null)return e;t=t.sibling}return null}var fm=$e.unstable_scheduleCallback,fh=$e.unstable_cancelCallback,t0=$e.unstable_shouldYield,n0=$e.unstable_requestPaint,se=$e.unstable_now,r0=$e.unstable_getCurrentPriorityLevel,dc=$e.unstable_ImmediatePriority,pm=$e.unstable_UserBlockingPriority,ho=$e.unstable_NormalPriority,i0=$e.unstable_LowPriority,mm=$e.unstable_IdlePriority,al=null,mt=null;function s0(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:a0,o0=Math.log,l0=Math.LN2;function a0(t){return t>>>=0,t===0?32:31-(o0(t)/l0|0)|0}var Ps=64,Rs=4194304;function mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=mi(l):(s&=o,s!==0&&(r=mi(s)))}else o=n&~i,o!==0?r=mi(o):s!==0&&(r=mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function u0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=u0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Qa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gm(){var t=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function as(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function d0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function _m(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vm,fc,ym,wm,Em,Ya=!1,xs=[],Zt=null,en=null,tn=null,bi=new Map,Mi=new Map,Ht=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(e.pointerId)}}function ri(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cs(e),e!==null&&fc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function f0(t,e,n,r,i){switch(e){case"focusin":return Zt=ri(Zt,t,e,n,r,i),!0;case"dragenter":return en=ri(en,t,e,n,r,i),!0;case"mouseover":return tn=ri(tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bi.set(s,ri(bi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mi.set(s,ri(Mi.get(s)||null,t,e,n,r,i)),!0}return!1}function Cm(t){var e=Rn(t.target);if(e!==null){var n=Zn(e);if(n!==null){if(e=n.tag,e===13){if(e=cm(n),e!==null){t.blockedOn=e,Em(t.priority,function(){ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return e=cs(n),e!==null&&fc(e),t.blockedOn=n,!1;e.shift()}return!0}function mh(t,e,n){Ks(t)&&n.delete(e)}function p0(){Ya=!1,Zt!==null&&Ks(Zt)&&(Zt=null),en!==null&&Ks(en)&&(en=null),tn!==null&&Ks(tn)&&(tn=null),bi.forEach(mh),Mi.forEach(mh)}function ii(t,e){t.blockedOn===e&&(t.blockedOn=null,Ya||(Ya=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,p0)))}function Li(t){function e(i){return ii(i,t)}if(0<xs.length){ii(xs[0],t);for(var n=1;n<xs.length;n++){var r=xs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zt!==null&&ii(Zt,t),en!==null&&ii(en,t),tn!==null&&ii(tn,t),bi.forEach(e),Mi.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&Ht.shift()}var Er=Ut.ReactCurrentBatchConfig,po=!0;function m0(t,e,n,r){var i=V,s=Er.transition;Er.transition=null;try{V=1,pc(t,e,n,r)}finally{V=i,Er.transition=s}}function g0(t,e,n,r){var i=V,s=Er.transition;Er.transition=null;try{V=4,pc(t,e,n,r)}finally{V=i,Er.transition=s}}function pc(t,e,n,r){if(po){var i=Xa(t,e,n,r);if(i===null)sa(t,e,r,mo,n),ph(t,r);else if(f0(i,t,e,n,r))r.stopPropagation();else if(ph(t,r),e&4&&-1<h0.indexOf(t)){for(;i!==null;){var s=cs(i);if(s!==null&&vm(s),s=Xa(t,e,n,r),s===null&&sa(t,e,r,mo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sa(t,e,r,null,n)}}var mo=null;function Xa(t,e,n,r){if(mo=null,t=cc(r),t=Rn(t),t!==null)if(e=Zn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mo=t,null}function Sm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r0()){case dc:return 1;case pm:return 4;case ho:case i0:return 16;case mm:return 536870912;default:return 16}default:return 16}}var Yt=null,mc=null,Qs=null;function Im(){if(Qs)return Qs;var t,e=mc,n=e.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qs=i.slice(t,1<r?1-r:void 0)}function Ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Os(){return!0}function gh(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Os:gh,this.isPropagationStopped=gh,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),e}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=qe(Hr),us=ee({},Hr,{view:0,detail:0}),_0=qe(us),Yl,Xl,si,ul=ee({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(Yl=t.screenX-si.screenX,Xl=t.screenY-si.screenY):Xl=Yl=0,si=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),_h=qe(ul),v0=ee({},ul,{dataTransfer:0}),y0=qe(v0),w0=ee({},us,{relatedTarget:0}),Jl=qe(w0),E0=ee({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=qe(E0),S0=ee({},Hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I0=qe(S0),k0=ee({},Hr,{data:0}),vh=qe(k0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P0[t])?!!e[t]:!1}function _c(){return R0}var x0=ee({},us,{key:function(t){if(t.key){var e=T0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O0=qe(x0),A0=ee({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=qe(A0),D0=ee({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),b0=qe(D0),M0=ee({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=qe(M0),F0=ee({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=qe(F0),j0=[9,13,27,32],vc=Ot&&"CompositionEvent"in window,yi=null;Ot&&"documentMode"in document&&(yi=document.documentMode);var z0=Ot&&"TextEvent"in window&&!yi,km=Ot&&(!vc||yi&&8<yi&&11>=yi),wh=String.fromCharCode(32),Eh=!1;function Tm(t,e){switch(t){case"keyup":return j0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function W0(t,e){switch(t){case"compositionend":return Nm(e);case"keypress":return e.which!==32?null:(Eh=!0,wh);case"textInput":return t=e.data,t===wh&&Eh?null:t;default:return null}}function B0(t,e){if(lr)return t==="compositionend"||!vc&&Tm(t,e)?(t=Im(),Qs=mc=Yt=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return km&&e.locale!=="ko"?null:e.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V0[t.type]:e==="textarea"}function Pm(t,e,n,r){sm(r),e=go(e,"onChange"),0<e.length&&(n=new gc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wi=null,Fi=null;function $0(t){jm(t,0)}function cl(t){var e=cr(t);if(Jp(e))return t}function H0(t,e){if(t==="change")return e}var Rm=!1;if(Ot){var Zl;if(Ot){var ea="oninput"in document;if(!ea){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),ea=typeof Sh.oninput=="function"}Zl=ea}else Zl=!1;Rm=Zl&&(!document.documentMode||9<document.documentMode)}function Ih(){wi&&(wi.detachEvent("onpropertychange",xm),Fi=wi=null)}function xm(t){if(t.propertyName==="value"&&cl(Fi)){var e=[];Pm(e,Fi,t,cc(t)),um($0,e)}}function q0(t,e,n){t==="focusin"?(Ih(),wi=e,Fi=n,wi.attachEvent("onpropertychange",xm)):t==="focusout"&&Ih()}function G0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Fi)}function K0(t,e){if(t==="click")return cl(e)}function Q0(t,e){if(t==="input"||t==="change")return cl(e)}function Y0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:Y0;function Ui(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Da.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Th(t,e){var n=kh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function Om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Am(){for(var t=window,e=ao();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ao(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X0(t){var e=Am(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Th(n,s);var o=Th(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J0=Ot&&"documentMode"in document&&11>=document.documentMode,ar=null,Ja=null,Ei=null,Za=!1;function Nh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||ar==null||ar!==ao(r)||(r=ar,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ei&&Ui(Ei,r)||(Ei=r,r=go(Ja,"onSelect"),0<r.length&&(e=new gc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ar)))}function As(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ur={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},ta={},Dm={};Ot&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function dl(t){if(ta[t])return ta[t];if(!ur[t])return t;var e=ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dm)return ta[t]=e[n];return t}var bm=dl("animationend"),Mm=dl("animationiteration"),Lm=dl("animationstart"),Fm=dl("transitionend"),Um=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(t,e){Um.set(t,e),Jn(e,[t])}for(var na=0;na<Ph.length;na++){var ra=Ph[na],Z0=ra.toLowerCase(),ew=ra[0].toUpperCase()+ra.slice(1);_n(Z0,"on"+ew)}_n(bm,"onAnimationEnd");_n(Mm,"onAnimationIteration");_n(Lm,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Fm,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tw=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function Rh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zy(r,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,u),s=a}}}if(co)throw t=Ka,co=!1,Ka=null,t}function Q(t,e){var n=e[iu];n===void 0&&(n=e[iu]=new Set);var r=t+"__bubble";n.has(r)||(zm(e,t,2,!1),n.add(r))}function ia(t,e,n){var r=0;e&&(r|=4),zm(n,t,r,e)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function ji(t){if(!t[Ds]){t[Ds]=!0,Gp.forEach(function(n){n!=="selectionchange"&&(tw.has(n)||ia(n,!1,t),ia(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ds]||(e[Ds]=!0,ia("selectionchange",!1,e))}}function zm(t,e,n,r){switch(Sm(e)){case 1:var i=m0;break;case 4:i=g0;break;default:i=pc}n=i.bind(null,e,n,t),i=void 0,!Ga||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Rn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}um(function(){var u=s,c=cc(n),d=[];e:{var h=Um.get(t);if(h!==void 0){var m=gc,_=t;switch(t){case"keypress":if(Ys(n)===0)break e;case"keydown":case"keyup":m=O0;break;case"focusin":_="focus",m=Jl;break;case"focusout":_="blur",m=Jl;break;case"beforeblur":case"afterblur":m=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=b0;break;case bm:case Mm:case Lm:m=C0;break;case Fm:m=L0;break;case"scroll":m=_0;break;case"wheel":m=U0;break;case"copy":case"cut":case"paste":m=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=yh}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,p!==null&&(y=Di(f,p),y!=null&&v.push(zi(f,y,g)))),w)break;f=f.return}0<v.length&&(h=new m(h,_,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ha&&(_=n.relatedTarget||n.fromElement)&&(Rn(_)||_[At]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Rn(_):null,_!==null&&(w=Zn(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(v=_h,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=yh,y="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?h:cr(m),g=_==null?h:cr(_),h=new v(y,f+"leave",m,n,c),h.target=w,h.relatedTarget=g,y=null,Rn(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=g,v.relatedTarget=w,y=v),w=y,m&&_)t:{for(v=m,p=_,f=0,g=v;g;g=rr(g))f++;for(g=0,y=p;y;y=rr(y))g++;for(;0<f-g;)v=rr(v),f--;for(;0<g-f;)p=rr(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=rr(v),p=rr(p)}v=null}else v=null;m!==null&&xh(d,h,m,v,!1),_!==null&&w!==null&&xh(d,w,_,v,!0)}}e:{if(h=u?cr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=H0;else if(Ch(h))if(Rm)T=Q0;else{T=G0;var I=q0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=K0);if(T&&(T=T(t,u))){Pm(d,T,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&za(h,"number",h.value)}switch(I=u?cr(u):window,t){case"focusin":(Ch(I)||I.contentEditable==="true")&&(ar=I,Ja=u,Ei=null);break;case"focusout":Ei=Ja=ar=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,Nh(d,n,c);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":Nh(d,n,c)}var S;if(vc)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else lr?Tm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(km&&n.locale!=="ko"&&(lr||N!=="onCompositionStart"?N==="onCompositionEnd"&&lr&&(S=Im()):(Yt=c,mc="value"in Yt?Yt.value:Yt.textContent,lr=!0)),I=go(u,N),0<I.length&&(N=new vh(N,t,null,n,c),d.push({event:N,listeners:I}),S?N.data=S:(S=Nm(n),S!==null&&(N.data=S)))),(S=z0?W0(t,n):B0(t,n))&&(u=go(u,"onBeforeInput"),0<u.length&&(c=new vh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}jm(d,e)})}function zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function go(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Di(t,n),s!=null&&r.unshift(zi(t,s,i)),s=Di(t,e),s!=null&&r.push(zi(t,s,i))),t=t.return}return r}function rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Di(n,s),a!=null&&o.unshift(zi(n,a,l))):i||(a=Di(n,s),a!=null&&o.push(zi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nw=/\r\n?/g,rw=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(nw,`
`).replace(rw,"")}function bs(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(C(425))}function _o(){}var eu=null,tu=null;function nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,iw=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(ow)}:ru;function ow(t){setTimeout(function(){throw t})}function oa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Li(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qr=Math.random().toString(36).slice(2),pt="__reactFiber$"+qr,Wi="__reactProps$"+qr,At="__reactContainer$"+qr,iu="__reactEvents$"+qr,lw="__reactListeners$"+qr,aw="__reactHandles$"+qr;function Rn(t){var e=t[pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dh(t);t!==null;){if(n=t[pt])return n;t=Dh(t)}return e}t=n,n=t.parentNode}return null}function cs(t){return t=t[pt]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function hl(t){return t[Wi]||null}var su=[],dr=-1;function vn(t){return{current:t}}function Y(t){0>dr||(t.current=su[dr],su[dr]=null,dr--)}function K(t,e){dr++,su[dr]=t.current,t.current=e}var pn={},ke=vn(pn),Fe=vn(!1),zn=pn;function Or(t,e){var n=t.type.contextTypes;if(!n)return pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function vo(){Y(Fe),Y(ke)}function bh(t,e,n){if(ke.current!==pn)throw Error(C(168));K(ke,e),K(Fe,n)}function Wm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,qy(t)||"Unknown",i));return ee({},n,r)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pn,zn=ke.current,K(ke,t),K(Fe,Fe.current),!0}function Mh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Wm(t,e,zn),r.__reactInternalMemoizedMergedChildContext=t,Y(Fe),Y(ke),K(ke,t)):Y(Fe),K(Fe,n)}var Ct=null,fl=!1,la=!1;function Bm(t){Ct===null?Ct=[t]:Ct.push(t)}function uw(t){fl=!0,Bm(t)}function yn(){if(!la&&Ct!==null){la=!0;var t=0,e=V;try{var n=Ct;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ct=null,fl=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(t+1)),fm(dc,yn),i}finally{V=e,la=!1}}return null}var hr=[],fr=0,wo=null,Eo=0,Ge=[],Ke=0,Wn=null,It=1,kt="";function kn(t,e){hr[fr++]=Eo,hr[fr++]=wo,wo=t,Eo=e}function Vm(t,e,n){Ge[Ke++]=It,Ge[Ke++]=kt,Ge[Ke++]=Wn,Wn=t;var r=It;t=kt;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-at(e)+i|n<<i|r,kt=s+t}else It=1<<s|n<<i|r,kt=t}function wc(t){t.return!==null&&(kn(t,1),Vm(t,1,0))}function Ec(t){for(;t===wo;)wo=hr[--fr],hr[fr]=null,Eo=hr[--fr],hr[fr]=null;for(;t===Wn;)Wn=Ge[--Ke],Ge[Ke]=null,kt=Ge[--Ke],Ge[Ke]=null,It=Ge[--Ke],Ge[Ke]=null}var Ve=null,Be=null,X=!1,st=null;function $m(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,Be=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wn!==null?{id:It,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,Be=null,!0):!1;default:return!1}}function ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lu(t){if(X){var e=Be;if(e){var n=e;if(!Lh(t,e)){if(ou(t))throw Error(C(418));e=nn(n.nextSibling);var r=Ve;e&&Lh(t,e)?$m(r,n):(t.flags=t.flags&-4097|2,X=!1,Ve=t)}}else{if(ou(t))throw Error(C(418));t.flags=t.flags&-4097|2,X=!1,Ve=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function Ms(t){if(t!==Ve)return!1;if(!X)return Fh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nu(t.type,t.memoizedProps)),e&&(e=Be)){if(ou(t))throw Hm(),Error(C(418));for(;e;)$m(t,e),e=nn(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=Ve?nn(t.stateNode.nextSibling):null;return!0}function Hm(){for(var t=Be;t;)t=nn(t.nextSibling)}function Ar(){Be=Ve=null,X=!1}function Cc(t){st===null?st=[t]:st.push(t)}var cw=Ut.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Co=vn(null),So=null,pr=null,Sc=null;function Ic(){Sc=pr=So=null}function kc(t){var e=Co.current;Y(Co),t._currentValue=e}function au(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cr(t,e){So=t,Sc=pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(be=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:e,next:null},pr===null){if(So===null)throw Error(C(308));pr=t,So.dependencies={lanes:0,firstContext:t}}else pr=pr.next=t;return e}var xn=null;function Tc(t){xn===null?xn=[t]:xn.push(t)}function qm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,Tc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function Xs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}function Uh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Io(t,e,n,r){var i=t.updateQueue;Vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ee({},d,h);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vn|=o,t.lanes=o,t.memoizedState=d}}function jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Km=new qp.Component().refs;function uu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pl={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=on(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(ut(e,t,i,r),Xs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=on(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(ut(e,t,i,r),Xs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=on(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=rn(t,i,r),e!==null&&(ut(e,t,r,n),Xs(e,t,r))}};function zh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ui(n,r)||!Ui(i,s):!0}function Qm(t,e,n){var r=!1,i=pn,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Ue(e)?zn:ke.current,r=e.contextTypes,s=(r=r!=null)?Or(t,i):pn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pl.enqueueReplaceState(e,e.state,null)}function cu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Km,Nc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Ue(e)?zn:ke.current,i.context=Or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pl.enqueueReplaceState(i,i.state,null),Io(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Km&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ls(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bh(t){var e=t._init;return e(t._payload)}function Ym(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=ln(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,y){return f===null||f.tag!==6?(f=pa(g,p.mode,y),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,y){var T=g.type;return T===or?c(p,f,g.props.children,y,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&Bh(T)===f.type)?(y=i(f,g.props),y.ref=oi(p,f,g),y.return=p,y):(y=ro(g.type,g.key,g.props,null,p.mode,y),y.ref=oi(p,f,g),y.return=p,y)}function u(p,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ma(g,p.mode,y),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,y,T){return f===null||f.tag!==7?(f=Fn(g,p.mode,y,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pa(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ks:return g=ro(f.type,f.key,f.props,null,p.mode,g),g.ref=oi(p,null,f),g.return=p,g;case sr:return f=ma(f,p.mode,g),f.return=p,f;case Bt:var y=f._init;return d(p,y(f._payload),g)}if(pi(f)||ti(f))return f=Fn(f,p.mode,g,null),f.return=p,f;Ls(p,f)}return null}function h(p,f,g,y){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(p,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ks:return g.key===T?a(p,f,g,y):null;case sr:return g.key===T?u(p,f,g,y):null;case Bt:return T=g._init,h(p,f,T(g._payload),y)}if(pi(g)||ti(g))return T!==null?null:c(p,f,g,y,null);Ls(p,g)}return null}function m(p,f,g,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(g)||null,l(f,p,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ks:return p=p.get(y.key===null?g:y.key)||null,a(f,p,y,T);case sr:return p=p.get(y.key===null?g:y.key)||null,u(f,p,y,T);case Bt:var I=y._init;return m(p,f,g,I(y._payload),T)}if(pi(y)||ti(y))return p=p.get(g)||null,c(f,p,y,T,null);Ls(f,y)}return null}function _(p,f,g,y){for(var T=null,I=null,S=f,N=f=0,j=null;S!==null&&N<g.length;N++){S.index>N?(j=S,S=null):j=S.sibling;var D=h(p,S,g[N],y);if(D===null){S===null&&(S=j);break}t&&S&&D.alternate===null&&e(p,S),f=s(D,f,N),I===null?T=D:I.sibling=D,I=D,S=j}if(N===g.length)return n(p,S),X&&kn(p,N),T;if(S===null){for(;N<g.length;N++)S=d(p,g[N],y),S!==null&&(f=s(S,f,N),I===null?T=S:I.sibling=S,I=S);return X&&kn(p,N),T}for(S=r(p,S);N<g.length;N++)j=m(S,p,N,g[N],y),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?N:j.key),f=s(j,f,N),I===null?T=j:I.sibling=j,I=j);return t&&S.forEach(function(Ne){return e(p,Ne)}),X&&kn(p,N),T}function v(p,f,g,y){var T=ti(g);if(typeof T!="function")throw Error(C(150));if(g=T.call(g),g==null)throw Error(C(151));for(var I=T=null,S=f,N=f=0,j=null,D=g.next();S!==null&&!D.done;N++,D=g.next()){S.index>N?(j=S,S=null):j=S.sibling;var Ne=h(p,S,D.value,y);if(Ne===null){S===null&&(S=j);break}t&&S&&Ne.alternate===null&&e(p,S),f=s(Ne,f,N),I===null?T=Ne:I.sibling=Ne,I=Ne,S=j}if(D.done)return n(p,S),X&&kn(p,N),T;if(S===null){for(;!D.done;N++,D=g.next())D=d(p,D.value,y),D!==null&&(f=s(D,f,N),I===null?T=D:I.sibling=D,I=D);return X&&kn(p,N),T}for(S=r(p,S);!D.done;N++,D=g.next())D=m(S,p,N,D.value,y),D!==null&&(t&&D.alternate!==null&&S.delete(D.key===null?N:D.key),f=s(D,f,N),I===null?T=D:I.sibling=D,I=D);return t&&S.forEach(function(nr){return e(p,nr)}),X&&kn(p,N),T}function w(p,f,g,y){if(typeof g=="object"&&g!==null&&g.type===or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ks:e:{for(var T=g.key,I=f;I!==null;){if(I.key===T){if(T=g.type,T===or){if(I.tag===7){n(p,I.sibling),f=i(I,g.props.children),f.return=p,p=f;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&Bh(T)===I.type){n(p,I.sibling),f=i(I,g.props),f.ref=oi(p,I,g),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}g.type===or?(f=Fn(g.props.children,p.mode,y,g.key),f.return=p,p=f):(y=ro(g.type,g.key,g.props,null,p.mode,y),y.ref=oi(p,f,g),y.return=p,p=y)}return o(p);case sr:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ma(g,p.mode,y),f.return=p,p=f}return o(p);case Bt:return I=g._init,w(p,f,I(g._payload),y)}if(pi(g))return _(p,f,g,y);if(ti(g))return v(p,f,g,y);Ls(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=pa(g,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return w}var Dr=Ym(!0),Xm=Ym(!1),ds={},gt=vn(ds),Bi=vn(ds),Vi=vn(ds);function On(t){if(t===ds)throw Error(C(174));return t}function Pc(t,e){switch(K(Vi,e),K(Bi,t),K(gt,ds),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ba(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ba(e,t)}Y(gt),K(gt,e)}function br(){Y(gt),Y(Bi),Y(Vi)}function Jm(t){On(Vi.current);var e=On(gt.current),n=Ba(e,t.type);e!==n&&(K(Bi,t),K(gt,n))}function Rc(t){Bi.current===t&&(Y(gt),Y(Bi))}var J=vn(0);function ko(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var aa=[];function xc(){for(var t=0;t<aa.length;t++)aa[t]._workInProgressVersionPrimary=null;aa.length=0}var Js=Ut.ReactCurrentDispatcher,ua=Ut.ReactCurrentBatchConfig,Bn=0,Z=null,ae=null,he=null,To=!1,Ci=!1,$i=0,dw=0;function Ce(){throw Error(C(321))}function Oc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function Ac(t,e,n,r,i,s){if(Bn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Js.current=t===null||t.memoizedState===null?mw:gw,t=n(r,i),Ci){s=0;do{if(Ci=!1,$i=0,25<=s)throw Error(C(301));s+=1,he=ae=null,e.updateQueue=null,Js.current=_w,t=n(r,i)}while(Ci)}if(Js.current=No,e=ae!==null&&ae.next!==null,Bn=0,he=ae=Z=null,To=!1,e)throw Error(C(300));return t}function Dc(){var t=$i!==0;return $i=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function Ze(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,ae=t;else{if(t===null)throw Error(C(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function Hi(t,e){return typeof e=="function"?e(t):e}function ca(t){var e=Ze(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Bn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=c,Vn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,dt(r,e.memoizedState)||(be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Vn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function da(t){var e=Ze(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zm(){}function eg(t,e){var n=Z,r=Ze(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,be=!0),r=r.queue,bc(rg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,qi(9,ng.bind(null,n,r,i,e),void 0,null),me===null)throw Error(C(349));Bn&30||tg(n,e,i)}return i}function tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ng(t,e,n,r){e.value=n,e.getSnapshot=r,ig(e)&&sg(t)}function rg(t,e,n){return n(function(){ig(e)&&sg(t)})}function ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function sg(t){var e=Dt(t,1);e!==null&&ut(e,t,1,-1)}function Vh(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},e.queue=t,t=t.dispatch=pw.bind(null,Z,t),[e.memoizedState,t]}function qi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function og(){return Ze().memoizedState}function Zs(t,e,n,r){var i=ft();Z.flags|=t,i.memoizedState=qi(1|e,n,void 0,r===void 0?null:r)}function ml(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Oc(r,o.deps)){i.memoizedState=qi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=qi(1|e,n,s,r)}function $h(t,e){return Zs(8390656,8,t,e)}function bc(t,e){return ml(2048,8,t,e)}function lg(t,e){return ml(4,2,t,e)}function ag(t,e){return ml(4,4,t,e)}function ug(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cg(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,ug.bind(null,e,t),n)}function Mc(){}function dg(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hg(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fg(t,e,n){return Bn&21?(dt(n,e)||(n=gm(),Z.lanes|=n,Vn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,be=!0),t.memoizedState=n)}function hw(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=ua.transition;ua.transition={};try{t(!1),e()}finally{V=n,ua.transition=r}}function pg(){return Ze().memoizedState}function fw(t,e,n){var r=on(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mg(t))gg(e,n);else if(n=qm(t,e,n,r),n!==null){var i=xe();ut(n,t,r,i),_g(n,e,r)}}function pw(t,e,n){var r=on(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mg(t))gg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var a=e.interleaved;a===null?(i.next=i,Tc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=qm(t,e,i,r),n!==null&&(i=xe(),ut(n,t,r,i),_g(n,e,r))}}function mg(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function gg(t,e){Ci=To=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _g(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}var No={readContext:Je,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},mw={readContext:Je,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zs(4194308,4,ug.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zs(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:Mc,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=hw.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ft();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),me===null)throw Error(C(349));Bn&30||tg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$h(rg.bind(null,r,s,t),[t]),r.flags|=2048,qi(9,ng.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=me.identifierPrefix;if(X){var n=kt,r=It;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$i++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gw={readContext:Je,useCallback:dg,useContext:Je,useEffect:bc,useImperativeHandle:cg,useInsertionEffect:lg,useLayoutEffect:ag,useMemo:hg,useReducer:ca,useRef:og,useState:function(){return ca(Hi)},useDebugValue:Mc,useDeferredValue:function(t){var e=Ze();return fg(e,ae.memoizedState,t)},useTransition:function(){var t=ca(Hi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Zm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1},_w={readContext:Je,useCallback:dg,useContext:Je,useEffect:bc,useImperativeHandle:cg,useInsertionEffect:lg,useLayoutEffect:ag,useMemo:hg,useReducer:da,useRef:og,useState:function(){return da(Hi)},useDebugValue:Mc,useDeferredValue:function(t){var e=Ze();return ae===null?e.memoizedState=t:fg(e,ae.memoizedState,t)},useTransition:function(){var t=da(Hi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Zm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1};function Mr(t,e){try{var n="",r=e;do n+=Hy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ha(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vw=typeof WeakMap=="function"?WeakMap:Map;function vg(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ro||(Ro=!0,Eu=r),du(t,e)},n}function yg(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){du(t,e),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Aw.bind(null,t,e,n),e.then(t,t))}function qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,rn(n,e,1))),n.lanes|=1),t)}var yw=Ut.ReactCurrentOwner,be=!1;function Pe(t,e,n,r){e.child=t===null?Xm(e,null,n,r):Dr(e,t.child,n,r)}function Kh(t,e,n,r,i){n=n.render;var s=e.ref;return Cr(e,i),r=Ac(t,e,n,r,s,i),n=Dc(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&n&&wc(e),e.flags|=1,Pe(t,e,r,i),e.child)}function Qh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wg(t,e,s,r,i)):(t=ro(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ui(s,r)&&t.ref===e.ref)if(be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(be=!0);else return e.lanes=t.lanes,bt(t,e,i)}return hu(t,e,n,r,i)}function Eg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(gr,We),We|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(gr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(gr,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(gr,We),We|=r;return Pe(t,e,i,n),e.child}function Cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hu(t,e,n,r,i){var s=Ue(n)?zn:ke.current;return s=Or(e,s),Cr(e,i),n=Ac(t,e,n,r,s,i),r=Dc(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&r&&wc(e),e.flags|=1,Pe(t,e,n,i),e.child)}function Yh(t,e,n,r,i){if(Ue(n)){var s=!0;yo(e)}else s=!1;if(Cr(e,i),e.stateNode===null)eo(t,e),Qm(e,n,r),cu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Ue(n)?zn:ke.current,u=Or(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Wh(e,o,r,u),Vt=!1;var h=e.memoizedState;o.state=h,Io(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||Vt?(typeof c=="function"&&(uu(e,n,c,r),a=e.memoizedState),(l=Vt||zh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=Ue(n)?zn:ke.current,a=Or(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Wh(e,o,r,a),Vt=!1,h=e.memoizedState,o.state=h,Io(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||Fe.current||Vt?(typeof m=="function"&&(uu(e,n,m,r),_=e.memoizedState),(u=Vt||zh(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return fu(t,e,n,r,s,i)}function fu(t,e,n,r,i,s){Cg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mh(e,n,!1),bt(t,e,s);r=e.stateNode,yw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Dr(e,t.child,null,s),e.child=Dr(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&Mh(e,n,!0),e.child}function Sg(t){var e=t.stateNode;e.pendingContext?bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bh(t,e.context,!1),Pc(t,e.containerInfo)}function Xh(t,e,n,r,i){return Ar(),Cc(i),e.flags|=256,Pe(t,e,n,r),e.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ig(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(J,i&1),t===null)return lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vl(o,r,0,null),t=Fn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mu(n),e.memoizedState=pu,t):Lc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ww(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ln(l,s):(s=Fn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pu,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lc(t,e){return e=vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fs(t,e,n,r){return r!==null&&Cc(r),Dr(e,t.child,null,n),t=Lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ww(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ha(Error(C(422))),Fs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vl({mode:"visible",children:r.children},i,0,null),s=Fn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Dr(e,t.child,null,o),e.child.memoizedState=mu(o),e.memoizedState=pu,s);if(!(e.mode&1))return Fs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=ha(s,r,void 0),Fs(t,e,o,r)}if(l=(o&t.childLanes)!==0,be||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),ut(r,t,i,-1))}return Bc(),r=ha(Error(C(421))),Fs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=nn(i.nextSibling),Ve=e,X=!0,st=null,t!==null&&(Ge[Ke++]=It,Ge[Ke++]=kt,Ge[Ke++]=Wn,It=t.id,kt=t.overflow,Wn=e),e=Lc(e,r.children),e.flags|=4096,e)}function Jh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),au(t.return,e,n)}function fa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,n,e);else if(t.tag===19)Jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ko(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ko(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fa(e,!0,n,null,s);break;case"together":fa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ew(t,e,n){switch(e.tag){case 3:Sg(e),Ar();break;case 5:Jm(e);break;case 1:Ue(e.type)&&yo(e);break;case 4:Pc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?Ig(t,e,n):(K(J,J.current&1),t=bt(t,e,n),t!==null?t.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,Eg(t,e,n)}return bt(t,e,n)}var Tg,gu,Ng,Pg;Tg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gu=function(){};Ng=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(gt.current);var s=null;switch(n){case"input":i=Ua(t,i),r=Ua(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Wa(t,i),r=Wa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_o)}Va(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pg=function(t,e,n,r){n!==r&&(e.flags|=4)};function li(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cw(t,e,n){var r=e.pendingProps;switch(Ec(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return Ue(e.type)&&vo(),Se(e),null;case 3:return r=e.stateNode,br(),Y(Fe),Y(ke),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ms(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(Iu(st),st=null))),gu(t,e),Se(e),null;case 5:Rc(e);var i=On(Vi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Se(e),null}if(t=On(gt.current),Ms(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pt]=e,r[Wi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<gi.length;i++)Q(gi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":lh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":uh(r,s),Q("invalid",r)}Va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&bs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bs(r.textContent,l,t),i=["children",""+l]):Oi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ts(r),ah(r,s,!0);break;case"textarea":Ts(r),ch(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_o)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pt]=e,t[Wi]=r,Tg(t,e,!1,!1),e.stateNode=t;e:{switch(o=$a(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<gi.length;i++)Q(gi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":lh(t,r),i=Ua(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",t);break;case"textarea":uh(t,r),i=Wa(t,r),Q("invalid",t);break;default:i=r}Va(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?im(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ai(t,a):typeof a=="number"&&Ai(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&oc(t,s,a,o))}switch(n){case"input":Ts(t),ah(t,r,!1);break;case"textarea":Ts(t),ch(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)Pg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=On(Vi.current),On(gt.current),Ms(e)){if(r=e.stateNode,n=e.memoizedProps,r[pt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:bs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=e,e.stateNode=r}return Se(e),null;case 13:if(Y(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Be!==null&&e.mode&1&&!(e.flags&128))Hm(),Ar(),e.flags|=98560,s=!1;else if(s=Ms(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[pt]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else st!==null&&(Iu(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ue===0&&(ue=3):Bc())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return br(),gu(t,e),t===null&&ji(e.stateNode.containerInfo),Se(e),null;case 10:return kc(e.type._context),Se(e),null;case 17:return Ue(e.type)&&vo(),Se(e),null;case 19:if(Y(J),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)li(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ko(t),o!==null){for(e.flags|=128,li(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Lr&&(e.flags|=128,r=!0,li(s,!1),e.lanes=4194304)}else{if(!r)if(t=ko(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Se(e),null}else 2*se()-s.renderingStartTime>Lr&&n!==1073741824&&(e.flags|=128,r=!0,li(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=J.current,K(J,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return Wc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?We&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function Sw(t,e){switch(Ec(e),e.tag){case 1:return Ue(e.type)&&vo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return br(),Y(Fe),Y(ke),xc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rc(e),null;case 13:if(Y(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(J),null;case 4:return br(),null;case 10:return kc(e.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var Us=!1,Ie=!1,Iw=typeof WeakSet=="function"?WeakSet:Set,R=null;function mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function _u(t,e,n){try{n()}catch(r){te(t,e,r)}}var Zh=!1;function kw(t,e){if(eu=po,t=Am(),yc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:t,selectionRange:n},po=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:nt(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){te(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=Zh,Zh=!1,_}function Si(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_u(e,n,s)}i=i.next}while(i!==r)}}function gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pt],delete e[Wi],delete e[iu],delete e[lw],delete e[aw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xg(t){return t.tag===5||t.tag===3||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_o));else if(r!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}function wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}var ge=null,it=!1;function zt(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Ie||mr(n,e);case 6:var r=ge,i=it;ge=null,zt(t,e,n),ge=r,it=i,ge!==null&&(it?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(it?(t=ge,n=n.stateNode,t.nodeType===8?oa(t.parentNode,n):t.nodeType===1&&oa(t,n),Li(t)):oa(ge,n.stateNode));break;case 4:r=ge,i=it,ge=n.stateNode.containerInfo,it=!0,zt(t,e,n),ge=r,it=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_u(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!Ie&&(mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,zt(t,e,n),Ie=r):zt(t,e,n);break;default:zt(t,e,n)}}function tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Iw),e.forEach(function(r){var i=bw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,it=!1;break e;case 3:ge=l.stateNode.containerInfo,it=!0;break e;case 4:ge=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(ge===null)throw Error(C(160));Og(s,o,i),ge=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ag(e,t),e=e.sibling}function Ag(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),ht(t),r&4){try{Si(3,t,t.return),gl(3,t)}catch(v){te(t,t.return,v)}try{Si(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:tt(e,t),ht(t),r&512&&n!==null&&mr(n,n.return);break;case 5:if(tt(e,t),ht(t),r&512&&n!==null&&mr(n,n.return),t.flags&32){var i=t.stateNode;try{Ai(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zp(i,s),$a(l,o);var u=$a(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?im(i,d):c==="dangerouslySetInnerHTML"?nm(i,d):c==="children"?Ai(i,d):oc(i,c,d,u)}switch(l){case"input":ja(i,s);break;case"textarea":em(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?vr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?vr(i,!!s.multiple,s.defaultValue,!0):vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wi]=s}catch(v){te(t,t.return,v)}}break;case 6:if(tt(e,t),ht(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(tt(e,t),ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:tt(e,t),ht(t);break;case 13:tt(e,t),ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jc=se())),r&4&&tf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||c,tt(e,t),Ie=u):tt(e,t),ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(d=R=c;R!==null;){switch(h=R,m=h.child,h.tag){case 0:case 11:case 14:case 15:Si(4,h,h.return);break;case 1:mr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:mr(h,h.return);break;case 22:if(h.memoizedState!==null){rf(d);continue}}m!==null?(m.return=h,R=m):rf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=rm("display",o))}catch(v){te(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){te(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tt(e,t),ht(t),r&4&&tf(t);break;case 21:break;default:tt(e,t),ht(t)}}function ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ai(i,""),r.flags&=-33);var s=ef(t);wu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ef(t);yu(t,l,o);break;default:throw Error(C(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tw(t,e,n){R=t,Dg(t)}function Dg(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Us;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Us;var u=Ie;if(Us=o,(Ie=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?sf(i):a!==null?(a.return=o,R=a):sf(i);for(;s!==null;)R=s,Dg(s),s=s.sibling;R=i,Us=l,Ie=u}nf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):nf(t)}}function nf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Li(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ie||e.flags&512&&vu(e)}catch(h){te(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function rf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function sf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{vu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{vu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var Nw=Math.ceil,Po=Ut.ReactCurrentDispatcher,Fc=Ut.ReactCurrentOwner,Xe=Ut.ReactCurrentBatchConfig,W=0,me=null,oe=null,ye=0,We=0,gr=vn(0),ue=0,Gi=null,Vn=0,_l=0,Uc=0,Ii=null,De=null,jc=0,Lr=1/0,Et=null,Ro=!1,Eu=null,sn=null,js=!1,Xt=null,xo=0,ki=0,Cu=null,to=-1,no=0;function xe(){return W&6?se():to!==-1?to:to=se()}function on(t){return t.mode&1?W&2&&ye!==0?ye&-ye:cw.transition!==null?(no===0&&(no=gm()),no):(t=V,t!==0||(t=window.event,t=t===void 0?16:Sm(t.type)),t):1}function ut(t,e,n,r){if(50<ki)throw ki=0,Cu=null,Error(C(185));as(t,n,r),(!(W&2)||t!==me)&&(t===me&&(!(W&2)&&(_l|=n),ue===4&&qt(t,ye)),je(t,r),n===1&&W===0&&!(e.mode&1)&&(Lr=se()+500,fl&&yn()))}function je(t,e){var n=t.callbackNode;c0(t,e);var r=fo(t,t===me?ye:0);if(r===0)n!==null&&fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fh(n),e===1)t.tag===0?uw(of.bind(null,t)):Bm(of.bind(null,t)),sw(function(){!(W&6)&&yn()}),n=null;else{switch(_m(r)){case 1:n=dc;break;case 4:n=pm;break;case 16:n=ho;break;case 536870912:n=mm;break;default:n=ho}n=Wg(n,bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bg(t,e){if(to=-1,no=0,W&6)throw Error(C(327));var n=t.callbackNode;if(Sr()&&t.callbackNode!==n)return null;var r=fo(t,t===me?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oo(t,r);else{e=r;var i=W;W|=2;var s=Lg();(me!==t||ye!==e)&&(Et=null,Lr=se()+500,Ln(t,e));do try{xw();break}catch(l){Mg(t,l)}while(1);Ic(),Po.current=s,W=i,oe!==null?e=0:(me=null,ye=0,e=ue)}if(e!==0){if(e===2&&(i=Qa(t),i!==0&&(r=i,e=Su(t,i))),e===1)throw n=Gi,Ln(t,0),qt(t,r),je(t,se()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pw(i)&&(e=Oo(t,r),e===2&&(s=Qa(t),s!==0&&(r=s,e=Su(t,s))),e===1))throw n=Gi,Ln(t,0),qt(t,r),je(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Tn(t,De,Et);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=jc+500-se(),10<e)){if(fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ru(Tn.bind(null,t,De,Et),e);break}Tn(t,De,Et);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nw(r/1960))-r,10<r){t.timeoutHandle=ru(Tn.bind(null,t,De,Et),r);break}Tn(t,De,Et);break;case 5:Tn(t,De,Et);break;default:throw Error(C(329))}}}return je(t,se()),t.callbackNode===n?bg.bind(null,t):null}function Su(t,e){var n=Ii;return t.current.memoizedState.isDehydrated&&(Ln(t,e).flags|=256),t=Oo(t,e),t!==2&&(e=De,De=n,e!==null&&Iu(e)),t}function Iu(t){De===null?De=t:De.push.apply(De,t)}function Pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~Uc,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function of(t){if(W&6)throw Error(C(327));Sr();var e=fo(t,0);if(!(e&1))return je(t,se()),null;var n=Oo(t,e);if(t.tag!==0&&n===2){var r=Qa(t);r!==0&&(e=r,n=Su(t,r))}if(n===1)throw n=Gi,Ln(t,0),qt(t,e),je(t,se()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tn(t,De,Et),je(t,se()),null}function zc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Lr=se()+500,fl&&yn())}}function $n(t){Xt!==null&&Xt.tag===0&&!(W&6)&&Sr();var e=W;W|=1;var n=Xe.transition,r=V;try{if(Xe.transition=null,V=1,t)return t()}finally{V=r,Xe.transition=n,W=e,!(W&6)&&yn()}}function Wc(){We=gr.current,Y(gr)}function Ln(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iw(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:br(),Y(Fe),Y(ke),xc();break;case 5:Rc(r);break;case 4:br();break;case 13:Y(J);break;case 19:Y(J);break;case 10:kc(r.type._context);break;case 22:case 23:Wc()}n=n.return}if(me=t,oe=t=ln(t.current,null),ye=We=e,ue=0,Gi=null,Uc=_l=Vn=0,De=Ii=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function Mg(t,e){do{var n=oe;try{if(Ic(),Js.current=No,To){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(Bn=0,he=ae=Z=null,Ci=!1,$i=0,Fc.current=null,n===null||n.return===null){ue=1,Gi=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=qh(o);if(m!==null){m.flags&=-257,Gh(m,o,l,s,e),m.mode&1&&Hh(s,u,e),e=m,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Hh(s,u,e),Bc();break e}a=Error(C(426))}}else if(X&&l.mode&1){var w=qh(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Gh(w,o,l,s,e),Cc(Mr(a,l));break e}}s=a=Mr(a,l),ue!==4&&(ue=2),Ii===null?Ii=[s]:Ii.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=vg(s,a,e);Uh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sn===null||!sn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yg(s,l,e);Uh(s,y);break e}}s=s.return}while(s!==null)}Ug(n)}catch(T){e=T,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Lg(){var t=Po.current;return Po.current=No,t===null?No:t}function Bc(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(Vn&268435455)&&!(_l&268435455)||qt(me,ye)}function Oo(t,e){var n=W;W|=2;var r=Lg();(me!==t||ye!==e)&&(Et=null,Ln(t,e));do try{Rw();break}catch(i){Mg(t,i)}while(1);if(Ic(),W=n,Po.current=r,oe!==null)throw Error(C(261));return me=null,ye=0,ue}function Rw(){for(;oe!==null;)Fg(oe)}function xw(){for(;oe!==null&&!t0();)Fg(oe)}function Fg(t){var e=zg(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Ug(t):oe=e,Fc.current=null}function Ug(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sw(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,oe=null;return}}else if(n=Cw(n,e,We),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ue===0&&(ue=5)}function Tn(t,e,n){var r=V,i=Xe.transition;try{Xe.transition=null,V=1,Ow(t,e,n,r)}finally{Xe.transition=i,V=r}return null}function Ow(t,e,n,r){do Sr();while(Xt!==null);if(W&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d0(t,s),t===me&&(oe=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||js||(js=!0,Wg(ho,function(){return Sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=V;V=1;var l=W;W|=4,Fc.current=null,kw(t,n),Ag(n,t),X0(tu),po=!!eu,tu=eu=null,t.current=n,Tw(n),n0(),W=l,V=o,Xe.transition=s}else t.current=n;if(js&&(js=!1,Xt=t,xo=i),s=t.pendingLanes,s===0&&(sn=null),s0(n.stateNode),je(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,t=Eu,Eu=null,t;return xo&1&&t.tag!==0&&Sr(),s=t.pendingLanes,s&1?t===Cu?ki++:(ki=0,Cu=t):ki=0,yn(),null}function Sr(){if(Xt!==null){var t=_m(xo),e=Xe.transition,n=V;try{if(Xe.transition=null,V=16>t?16:t,Xt===null)var r=!1;else{if(t=Xt,Xt=null,xo=0,W&6)throw Error(C(331));var i=W;for(W|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Si(8,c,s)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var h=c.sibling,m=c.return;if(Rg(c),c===u){R=null;break}if(h!==null){h.return=m,R=h;break}R=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Si(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gl(9,l)}}catch(T){te(l,l.return,T)}if(l===o){R=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,R=y;break e}R=l.return}}if(W=i,yn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(al,t)}catch{}r=!0}return r}finally{V=n,Xe.transition=e}}return!1}function lf(t,e,n){e=Mr(n,e),e=vg(t,e,1),t=rn(t,e,1),e=xe(),t!==null&&(as(t,1,e),je(t,e))}function te(t,e,n){if(t.tag===3)lf(t,t,n);else for(;e!==null;){if(e.tag===3){lf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=Mr(n,t),t=yg(e,t,1),e=rn(e,t,1),t=xe(),e!==null&&(as(e,1,t),je(e,t));break}}e=e.return}}function Aw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>se()-jc?Ln(t,0):Uc|=n),je(t,e)}function jg(t,e){e===0&&(t.mode&1?(e=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):e=1);var n=xe();t=Dt(t,e),t!==null&&(as(t,e,n),je(t,n))}function Dw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jg(t,n)}function bw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),jg(t,n)}var zg;zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return be=!1,Ew(t,e,n);be=!!(t.flags&131072)}else be=!1,X&&e.flags&1048576&&Vm(e,Eo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eo(t,e),t=e.pendingProps;var i=Or(e,ke.current);Cr(e,n),i=Ac(null,e,r,t,i,n);var s=Dc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,yo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nc(e),i.updater=pl,e.stateNode=i,i._reactInternals=e,cu(e,r,t,n),e=fu(null,e,r,!0,s,n)):(e.tag=0,X&&s&&wc(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lw(r),t=nt(r,t),i){case 0:e=hu(null,e,r,t,n);break e;case 1:e=Yh(null,e,r,t,n);break e;case 11:e=Kh(null,e,r,t,n);break e;case 14:e=Qh(null,e,r,nt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),hu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Yh(t,e,r,i,n);case 3:e:{if(Sg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gm(t,e),Io(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mr(Error(C(423)),e),e=Xh(t,e,r,n,i);break e}else if(r!==i){i=Mr(Error(C(424)),e),e=Xh(t,e,r,n,i);break e}else for(Be=nn(e.stateNode.containerInfo.firstChild),Ve=e,X=!0,st=null,n=Xm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){e=bt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return Jm(e),t===null&&lu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nu(r,i)?o=null:s!==null&&nu(r,s)&&(e.flags|=32),Cg(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&lu(e),null;case 13:return Ig(t,e,n);case 4:return Pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Dr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Kh(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(Co,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!Fe.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),au(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),au(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cr(e,n),i=Je(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),Qh(t,e,r,i,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),eo(t,e),e.tag=1,Ue(r)?(t=!0,yo(e)):t=!1,Cr(e,n),Qm(e,r,i),cu(e,r,i,n),fu(null,e,r,!0,t,n);case 19:return kg(t,e,n);case 22:return Eg(t,e,n)}throw Error(C(156,e.tag))};function Wg(t,e){return fm(t,e)}function Mw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new Mw(t,e,n,r)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lw(t){if(typeof t=="function")return Vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ac)return 11;if(t===uc)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ro(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case or:return Fn(n.children,i,s,e);case lc:o=8,i|=8;break;case ba:return t=Qe(12,n,e,i|2),t.elementType=ba,t.lanes=s,t;case Ma:return t=Qe(13,n,e,i),t.elementType=Ma,t.lanes=s,t;case La:return t=Qe(19,n,e,i),t.elementType=La,t.lanes=s,t;case Yp:return vl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kp:o=10;break e;case Qp:o=9;break e;case ac:o=11;break e;case uc:o=14;break e;case Bt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function vl(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Yp,t.lanes=n,t.stateNode={isHidden:!1},t}function pa(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function ma(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $c(t,e,n,r,i,s,o,l,a){return t=new Fw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(s),t}function Uw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bg(t){if(!t)return pn;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ue(n))return Wm(t,n,e)}return e}function Vg(t,e,n,r,i,s,o,l,a){return t=$c(n,r,!0,t,i,s,o,l,a),t.context=Bg(null),n=t.current,r=xe(),i=on(n),s=Rt(r,i),s.callback=e??null,rn(n,s,i),t.current.lanes=i,as(t,i,r),je(t,r),t}function yl(t,e,n,r){var i=e.current,s=xe(),o=on(i);return n=Bg(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rn(i,e,o),t!==null&&(ut(t,i,o,s),Xs(t,i,o)),o}function Ao(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function af(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hc(t,e){af(t,e),(t=t.alternate)&&af(t,e)}function jw(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function qc(t){this._internalRoot=t}wl.prototype.render=qc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));yl(t,e,null,null)};wl.prototype.unmount=qc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$n(function(){yl(null,t,null,null)}),e[At]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&Cm(t)}};function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uf(){}function zw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ao(o);s.call(u)}}var o=Vg(e,r,t,0,null,!1,!1,"",uf);return t._reactRootContainer=o,t[At]=o.current,ji(t.nodeType===8?t.parentNode:t),$n(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ao(a);l.call(u)}}var a=$c(t,0,!1,null,null,!1,!1,"",uf);return t._reactRootContainer=a,t[At]=a.current,ji(t.nodeType===8?t.parentNode:t),$n(function(){yl(e,a,n,r)}),a}function Cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ao(o);l.call(a)}}yl(e,o,t,i)}else o=zw(n,e,t,i,r);return Ao(o)}vm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mi(e.pendingLanes);n!==0&&(hc(e,n|1),je(e,se()),!(W&6)&&(Lr=se()+500,yn()))}break;case 13:$n(function(){var r=Dt(t,1);if(r!==null){var i=xe();ut(r,t,1,i)}}),Hc(t,1)}};fc=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=xe();ut(e,t,134217728,n)}Hc(t,134217728)}};ym=function(t){if(t.tag===13){var e=on(t),n=Dt(t,e);if(n!==null){var r=xe();ut(n,t,e,r)}Hc(t,e)}};wm=function(){return V};Em=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};qa=function(t,e,n){switch(e){case"input":if(ja(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hl(r);if(!i)throw Error(C(90));Jp(r),ja(r,i)}}}break;case"textarea":em(t,n);break;case"select":e=n.value,e!=null&&vr(t,!!n.multiple,e,!1)}};lm=zc;am=$n;var Ww={usingClientEntryPoint:!1,Events:[cs,cr,hl,sm,om,zc]},ai={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Bw={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dm(t),t===null?null:t.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{al=zs.inject(Bw),mt=zs}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ww;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(e))throw Error(C(200));return Uw(t,e,null,n)};He.createRoot=function(t,e){if(!Gc(t))throw Error(C(299));var n=!1,r="",i=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$c(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,ji(t.nodeType===8?t.parentNode:t),new qc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=dm(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return $n(t)};He.hydrate=function(t,e,n){if(!El(e))throw Error(C(200));return Cl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Gc(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$g;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vg(e,null,t,1,n??null,i,!1,s,o),t[At]=e.current,ji(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wl(e)};He.render=function(t,e,n){if(!El(e))throw Error(C(200));return Cl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!El(t))throw Error(C(40));return t._reactRootContainer?($n(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};He.unstable_batchedUpdates=zc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!El(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Cl(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function Hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg)}catch(t){console.error(t)}}Hg(),Vp.exports=He;var Vw=Vp.exports,cf=Vw;Aa.createRoot=cf.createRoot,Aa.hydrateRoot=cf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw Gr(e)},Gr=function(t){return new Error("Firebase Database ("+qg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$w=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$w(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new Hw;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kg=function(t){const e=Gg(t);return Kc.encodeByteArray(e,!0)},Do=function(t){return Kg(t).replace(/\./g,"")},bo=function(t){try{return Kc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){return Qg(void 0,t)}function Qg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gw(n)||(t[n]=Qg(t[n],e[n]));return t}function Gw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=()=>Kw().__FIREBASE_DEFAULTS__,Yw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bo(t[1]);return e&&JSON.parse(e)},Qc=()=>{try{return Qw()||Yw()||Xw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yg=t=>{var e,n;return(n=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jw=t=>{const e=Yg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xg=()=>{var t;return(t=Qc())===null||t===void 0?void 0:t.config},Jg=t=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function eE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tE(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function e_(){return qg.NODE_ADMIN===!0}function nE(){try{return typeof indexedDB=="object"}catch{return!1}}function rE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function sE(t,e){return t.replace(oE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ki(bo(s[0])||""),n=Ki(bo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},lE=function(t){const e=t_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aE=function(t){const e=t_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ku(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(df(s)&&df(o)){if(!Lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function df(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function cE(t,e){const n=new dE(t,e);return n.subscribe.bind(n)}class dE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}function Xc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gE(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mE(t){return t===Nn?void 0:t}function gE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const vE={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},yE=$.INFO,wE={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},EE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=yE,this._logHandler=EE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const CE=(t,e)=>e.some(n=>t instanceof n);let hf,ff;function SE(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IE(){return ff||(ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n_=new WeakMap,Tu=new WeakMap,r_=new WeakMap,_a=new WeakMap,Zc=new WeakMap;function kE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n_.set(n,t)}).catch(()=>{}),Zc.set(e,t),e}function TE(t){if(Tu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tu.set(t,e)}let Nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NE(t){Nu=t(Nu)}function PE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(va(this),e,...n);return r_.set(r,e.sort?e.sort():[e]),an(r)}:IE().includes(t)?function(...e){return t.apply(va(this),e),an(n_.get(this))}:function(...e){return an(t.apply(va(this),e))}}function RE(t){return typeof t=="function"?PE(t):(t instanceof IDBTransaction&&TE(t),CE(t,SE())?new Proxy(t,Nu):t)}function an(t){if(t instanceof IDBRequest)return kE(t);if(_a.has(t))return _a.get(t);const e=RE(t);return e!==t&&(_a.set(t,e),Zc.set(e,t)),e}const va=t=>Zc.get(t);function xE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=an(o);return r&&o.addEventListener("upgradeneeded",a=>{r(an(o.result),a.oldVersion,a.newVersion,an(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const OE=["get","getKey","getAll","getAllKeys","count"],AE=["put","add","delete","clear"],ya=new Map;function pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ya.set(e,s),s}NE(t=>({...t,get:(e,n,r)=>pf(e,n)||t.get(e,n,r),has:(e,n)=>!!pf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",mf="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Jc("@firebase/app"),ME="@firebase/app-compat",LE="@firebase/analytics-compat",FE="@firebase/analytics",UE="@firebase/app-check-compat",jE="@firebase/app-check",zE="@firebase/auth",WE="@firebase/auth-compat",BE="@firebase/database",VE="@firebase/database-compat",$E="@firebase/functions",HE="@firebase/functions-compat",qE="@firebase/installations",GE="@firebase/installations-compat",KE="@firebase/messaging",QE="@firebase/messaging-compat",YE="@firebase/performance",XE="@firebase/performance-compat",JE="@firebase/remote-config",ZE="@firebase/remote-config-compat",eC="@firebase/storage",tC="@firebase/storage-compat",nC="@firebase/firestore",rC="@firebase/firestore-compat",iC="firebase",sC="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="[DEFAULT]",oC={[Pu]:"fire-core",[ME]:"fire-core-compat",[FE]:"fire-analytics",[LE]:"fire-analytics-compat",[jE]:"fire-app-check",[UE]:"fire-app-check-compat",[zE]:"fire-auth",[WE]:"fire-auth-compat",[BE]:"fire-rtdb",[VE]:"fire-rtdb-compat",[$E]:"fire-fn",[HE]:"fire-fn-compat",[qE]:"fire-iid",[GE]:"fire-iid-compat",[KE]:"fire-fcm",[QE]:"fire-fcm-compat",[YE]:"fire-perf",[XE]:"fire-perf-compat",[JE]:"fire-rc",[ZE]:"fire-rc-compat",[eC]:"fire-gcs",[tC]:"fire-gcs-compat",[nC]:"fire-fst",[rC]:"fire-fst-compat","fire-js":"fire-js",[iC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map,xu=new Map;function lC(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(xu.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;xu.set(e,t);for(const n of Fo.values())lC(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new hs("app","Firebase",aC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=sC;function i_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ru,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=Xg()),!n)throw un.create("no-options");const s=Fo.get(i);if(s){if(Lo(n,s.options)&&Lo(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new _E(i);for(const a of xu.values())o.addComponent(a);const l=new uC(n,r,o);return Fo.set(i,l),l}function s_(t=Ru){const e=Fo.get(t);if(!e&&t===Ru&&Xg())return i_();if(!e)throw un.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=oC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}Ur(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="firebase-heartbeat-database",dC=1,Qi="firebase-heartbeat-store";let wa=null;function o_(){return wa||(wa=xE(cC,dC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qi)}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),wa}async function hC(t){try{return await(await o_()).transaction(Qi).objectStore(Qi).get(l_(t))}catch(e){if(e instanceof wn)qn.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function gf(t,e){try{const r=(await o_()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,l_(t)),await r.done}catch(n){if(n instanceof wn)qn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function l_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=1024,pC=30*24*60*60*1e3;class mC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_f();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=pC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_f(),{heartbeatsToSend:n,unsentEntries:r}=gC(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _f(){return new Date().toISOString().substring(0,10)}function gC(t,e=fC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vf(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){Ur(new Hn("platform-logger",e=>new DE(e),"PRIVATE")),Ur(new Hn("heartbeat",e=>new mC(e),"PRIVATE")),cn(Pu,mf,t),cn(Pu,mf,"esm2017"),cn("fire-js","")}vC("");var yC="firebase",wC="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(yC,wC,"app");const yf="@firebase/database",wf="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a_="";function EC(t){a_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ki(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CC(e)}}catch{}return new SC},An=u_("localStorage"),Ou=u_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Jc("@firebase/database"),IC=function(){let t=1;return function(){return t++}}(),c_=function(t){const e=fE(t),n=new uE;n.update(e);const r=n.digest();return Kc.encodeByteArray(r)},fs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fs.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Un=null,Ef=!0;const kC=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ir.logLevel=$.VERBOSE,Un=Ir.log.bind(Ir),e&&Ou.set("logging_enabled",!0)):typeof t=="function"?Un=t:(Un=null,Ou.remove("logging_enabled"))},_e=function(...t){if(Ef===!0&&(Ef=!1,Un===null&&Ou.get("logging_enabled")===!0&&kC(!0)),Un){const e=fs.apply(null,t);Un(e)}},ps=function(t){return function(...e){_e(t,...e)}},Au=function(...t){const e="FIREBASE INTERNAL ERROR: "+fs(...t);Ir.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${fs(...t)}`;throw Ir.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+fs(...t);Ir.warn(e)},TC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},td=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jr="[MIN_NAME]",Gn="[MAX_NAME]",er=function(t,e){if(t===e)return 0;if(t===jr||e===Gn)return-1;if(e===jr||t===Gn)return 1;{const n=Cf(t),r=Cf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PC=function(t,e){return t===e?0:t<e?-1:1},ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},nd=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=nd(t[e[r]]);return n+="}",n},d_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ee(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const h_=function(t){k(!td(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},RC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const AC=new RegExp("^-?(0*)\\d{1,10}$"),DC=-2147483648,bC=2147483647,Cf=function(t){if(AC.test(t)){const e=Number(t);if(e>=DC&&e<=bC)return e}return null},Yr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},MC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class kr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="5",f_="v",p_="s",m_="r",g_="f",__=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,v_="ls",y_="p",Du="ac",w_="websocket",E_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=An.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&An.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function S_(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===w_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===E_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UC(t)&&(n.ns=t.namespace);const i=[];return Ee(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={},Ca={};function id(t){const e=t.toString();return Ea[e]||(Ea[e]=new jC),Ea[e]}function zC(t,e){const n=t.toString();return Ca[n]||(Ca[n]=e()),Ca[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Yr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="start",BC="close",VC="pLPCommand",$C="pRTLPCB",I_="id",k_="pw",T_="ser",HC="cb",qC="seg",GC="ts",KC="d",QC="dframe",N_=1870,P_=30,YC=N_-P_,XC=25e3,JC=3e4;class _r{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ps(e),this.stats_=id(n),this.urlFn=a=>(this.appCheckToken&&(a[Du]=this.appCheckToken),S_(n,E_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JC)),NC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sf)this.id=l,this.password=a;else if(o===BC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sf]="t",r[T_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[HC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[f_]=rd,this.transportSessionId&&(r[p_]=this.transportSessionId),this.lastSessionId&&(r[v_]=this.lastSessionId),this.applicationId&&(r[y_]=this.applicationId),this.appCheckToken&&(r[Du]=this.appCheckToken),typeof location<"u"&&location.hostname&&__.test(location.hostname)&&(r[m_]=g_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RC()&&!xC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Kg(n),i=d_(r,YC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QC]="t",r[I_]=e,r[k_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IC(),window[VC+this.uniqueCallbackIdentifier]=e,window[$C+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_e("frame writing exception"),l.stack&&_e(l.stack),_e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_e("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[I_]=this.myID,e[k_]=this.myPW,e[T_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+P_+r.length<=N_;){const o=this.pendingSegs.shift();r=r+"&"+qC+i+"="+o.seg+"&"+GC+i+"="+o.ts+"&"+KC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(XC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=16384,eS=45e3;let Uo=null;typeof MozWebSocket<"u"?Uo=MozWebSocket:typeof WebSocket<"u"&&(Uo=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ps(this.connId),this.stats_=id(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[f_]=rd,typeof location<"u"&&location.hostname&&__.test(location.hostname)&&(o[m_]=g_),n&&(o[p_]=n),r&&(o[v_]=r),i&&(o[Du]=i),s&&(o[y_]=s),S_(e,w_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,An.set("previous_websocket_failure",!0);try{let r;e_(),this.mySock=new Uo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uo!==null&&!ot.forceDisallow_}static previouslyFailed(){return An.isInMemoryStorage||An.get("previous_websocket_failure")===!0}markConnectionHealthy(){An.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ki(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=d_(n,ZC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_r,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of Yi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=6e4,nS=5e3,rS=10*1024,iS=100*1024,Sa="t",If="d",sS="s",kf="r",oS="e",Tf="o",Nf="a",Pf="n",Rf="p",lS="h";class aS{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ps("c:"+this.id+":"),this.transportManager_=new Yi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sa in e){const n=e[Sa];n===Nf?this.upgradeIfSecondaryHealthy_():n===kf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ui("t",e),r=ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ui("t",e),r=ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ui(Sa,e);if(If in e){const r=e[If];if(n===lS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sS?this.onConnectionShutdown_(r):n===kf?this.onReset_(r):n===oS?Au("Server Error: "+r):n===Tf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(An.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends x_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jo}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=32,Of=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new H("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function od(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function O_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Me(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cS(t,e){const n=Xi(t,0),r=Xi(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=er(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ld(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class dS{constructor(e,n){this.errorPrefix_=n,this.parts_=Xi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Il(this.parts_[r]);A_(this)}}function hS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Il(e),A_(t)}function fS(t){const e=t.parts_.pop();t.byteLength_-=Il(e),t.parts_.length>0&&(t.byteLength_-=1)}function A_(t){if(t.byteLength_>Of)throw new Error(t.errorPrefix_+"has a key path longer than "+Of+" bytes ("+t.byteLength_+").");if(t.parts_.length>xf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xf+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends x_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ad}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=1e3,pS=60*5*1e3,Af=30*1e3,mS=1.3,gS=3e4,_S="server_kill",Df=3;class xt extends R_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=pS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!e_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Sl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const r=Fr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Af)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Au("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gS&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?_e("getToken() completed but was canceled"):(_e("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new aS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{ze(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(_S)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ze(d),a())}}}interrupt(e){_e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ku(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>nd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){_e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Df&&(this.reconnectDelay_=Af,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Df&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+a_.replace(/\./g,"-")]=1,Yc()?e["framework.cordova"]=1:Zg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jo.getInstance().currentlyOnline();return ku(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(jr,e),i=new L(jr,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class D_ extends kl{static get __EMPTY_NODE(){return Ws}static set __EMPTY_NODE(e){Ws=e}compare(e,n){return er(e.name,n.name)}isDefinedOn(e){throw Gr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Gn,Ws)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Ws)}toString(){return".key"}}const Tr=new D_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class vS{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new vS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t,e){return er(t.name,e.name)}function ud(t,e){return er(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;function wS(t){bu=t}const b_=function(t){return typeof t=="number"?"number:"+h_(t):"string:"+t},M_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else k(t===bu||t.isEmpty(),"priority of unexpected type.");k(t===bu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),M_(this.priorityNode_)}static set __childrenNodeConstructor(e){bf=e}static get __childrenNodeConstructor(){return bf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+b_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=h_(this.value_):e+=this.value_,this.lazyHash_=c_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L_,F_;function ES(t){L_=t}function CS(t){F_=t}class SS extends kl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?er(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Gn,new de("[PRIORITY-POST]",F_))}makePost(e,n){const r=L_(e);return new L(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new SS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=Math.log(2);class kS{constructor(e){const n=s=>parseInt(Math.log(s)/IS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new fe(h,d.node,fe.BLACK,null,null);{const m=parseInt(c/2,10)+a,_=i(a,m),v=i(m+1,u);return d=t[m],h=n?n(d):d,new fe(h,d.node,fe.BLACK,_,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,v){const w=d-_,p=d;d-=_;const f=i(w+1,p),g=t[w],y=n?n(g):g;m(new fe(y,g.node,v,null,f))},m=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(_+1));v?h(w,fe.BLACK):(h(w,fe.BLACK),h(w,fe.RED))}return c},o=new kS(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;const ir={};class Tt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(ir&&re,"ChildrenNode.ts has not been loaded"),Ia=Ia||new Tt({".priority":ir},{".priority":re}),Ia}get(e){const n=Fr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Tr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=zo(r,e.getCompare()):l=ir;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Tt(c,u)}addToIndexes(e,n){const r=Mo(this.indexes_,(i,s)=>{const o=Fr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===ir)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),zo(l,o.getCompare())}else return ir;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Tt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Mo(this.indexes_,i=>{if(i===ir)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Tt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&M_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return di||(di=new O(new Le(ud),null,Tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||di}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?di:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?di:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{k(F(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+b_(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":c_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ms?-1:0}withIndex(e){if(e===Tr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Tr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Tr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TS extends O{constructor(){super(new Le(ud),O.EMPTY_NODE,Tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ms=new TS;Object.defineProperties(L,{MIN:{value:new L(jr,O.EMPTY_NODE)},MAX:{value:new L(Gn,ms)}});D_.__EMPTY_NODE=O.EMPTY_NODE;de.__childrenNodeConstructor=O;wS(ms);CS(ms);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=!0;function ve(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ve(e))}if(!(t instanceof Array)&&NS){const n=[];let r=!1;if(Ee(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=zo(n,yS,o=>o.name,ud);if(r){const o=zo(n,re.getCompare());return new O(s,ve(e),new Tt({".priority":o},{".priority":re}))}else return new O(s,ve(e),Tt.Default)}else{let n=O.EMPTY_NODE;return Ee(t,(r,i)=>{if(wt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}ES(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS extends kl{constructor(e){super(),this.indexPath_=e,k(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?er(e.name,n.name):s}makePost(e,n){const r=ve(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ms);return new L(Gn,e)}toString(){return Xi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS extends kl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?er(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=ve(e);return new L(n,r)}toString(){return".value"}}const xS=new RS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){return{type:"value",snapshotNode:t}}function zr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ji(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(zr(n,r)):o.trackChildChange(Zi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ji(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Zi(i,s,o))}else r.trackChildChange(zr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.indexedFilter_=new cd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=es.getStartPost_(e),this.endPost_=es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Zi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ji(n,d));const v=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(zr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ji(u.name,u.node)),s.trackChildChange(zr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new dd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DS(t){return t.loadsAllData()?new cd(t.getIndex()):t.hasLimit()?new AS(t):new es(t)}function Mf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===xS?n="$value":t.index_===Tr?n="$key":(k(t.index_ instanceof PS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Lf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends R_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ps("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Wo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Mf(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Fr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Wo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Mf(e._queryParams),r=e._path.toString(),i=new Sl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Kr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ki(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(){return{value:null,children:new Map}}function j_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Bo());const i=t.children.get(r);e=G(e),j_(i,e,n)}}function Mu(t,e,n){t.value!==null?n(e,t.value):MS(t,(r,i)=>{const s=new H(e.toString()+"/"+r);Mu(i,s,n)})}function MS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ee(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=10*1e3,FS=30*1e3,US=5*60*1e3;class jS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LS(e);const r=Ff+(FS-Ff)*Math.random();Ti(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ee(e,(i,s)=>{s>0&&wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*US))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lt.ACK_USER_WRITE,this.source=hd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Vo(B(),n,this.revert)}}else return k(F(this.path)===e,"operationForChild called for unrelated child."),new Vo(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.source=e,this.path=n,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ts(this.source,B()):new ts(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lt.OVERWRITE}operationForChild(e){return U(this.path)?new Kn(this.source,B(),this.snap.getImmediateChild(e)):new Kn(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Kn(this.source,B(),n.value):new Wr(this.source,B(),n)}else return k(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wr(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(OS(o.childName,o.snapshotNode))}),hi(t,i,"child_removed",e,r,n),hi(t,i,"child_added",e,r,n),hi(t,i,"child_moved",s,r,n),hi(t,i,"child_changed",e,r,n),hi(t,i,"value",e,r,n),i}function hi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>VS(t,l,a)),o.forEach(l=>{const a=BS(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function BS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VS(t,e,n){if(e.childName==null||n.childName==null)throw Gr("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){return{eventCache:t,serverCache:e}}function Ni(t,e,n,r){return Tl(new Qn(e,n,r),t.serverCache)}function z_(t,e,n,r){return Tl(t.eventCache,new Qn(e,n,r))}function Lu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;const $S=()=>(ka||(ka=new Le(PC)),ka);class q{constructor(e,n=$S()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Ee(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ne(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=F(e),s=(this.children.get(r)||new q(null)).set(G(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new q(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ne(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new q(null))}}function Pi(t,e,n){if(U(e))return new ct(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function Fu(t,e,n){let r=t;return Ee(n,(i,s)=>{r=Pi(r,ne(e,i),s)}),r}function Uf(t,e){if(U(e))return ct.empty();{const n=t.writeTree_.setTree(e,new q(null));return new ct(n)}}function Uu(t,e){return tr(t,e)!=null}function tr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function jf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function dn(t,e){if(U(e))return t;{const n=tr(t,e);return n!=null?new ct(new q(n)):new ct(t.writeTree_.subtree(e))}}function ju(t){return t.writeTree_.isEmpty()}function Br(t,e){return W_(B(),t.writeTree_,e)}function W_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=W_(ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){return H_(e,t)}function HS(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Pi(t.visibleWrites,e,n)),t.lastWriteId=r}function qS(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Fu(t.visibleWrites,e,n),t.lastWriteId=r}function GS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function KS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&QS(l,r.path)?i=!1:Ye(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return YS(t),!0;if(r.snap)t.visibleWrites=Uf(t.visibleWrites,r.path);else{const l=r.children;Ee(l,a=>{t.visibleWrites=Uf(t.visibleWrites,ne(r.path,a))})}return!0}else return!1}function QS(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ne(t.path,n),e))return!0;return!1}function YS(t){t.visibleWrites=B_(t.allWrites,XS,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XS(t){return t.visible}function B_(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ye(n,o)?(l=Me(n,o),r=Pi(r,l,s.snap)):Ye(o,n)&&(l=Me(o,n),r=Pi(r,B(),s.snap.getChild(l)));else if(s.children){if(Ye(n,o))l=Me(n,o),r=Fu(r,l,s.children);else if(Ye(o,n))if(l=Me(o,n),U(l))r=Fu(r,B(),s.children);else{const a=Fr(s.children,F(l));if(a){const u=a.getChild(G(l));r=Pi(r,B(),u)}}}else throw Gr("WriteRecord should have .snap or .children")}}return r}function V_(t,e,n,r,i){if(!r&&!i){const s=tr(t.visibleWrites,e);if(s!=null)return s;{const o=dn(t.visibleWrites,e);if(ju(o))return n;if(n==null&&!Uu(o,B()))return null;{const l=n||O.EMPTY_NODE;return Br(o,l)}}}else{const s=dn(t.visibleWrites,e);if(!i&&ju(s))return n;if(!i&&n==null&&!Uu(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ye(u.path,e)||Ye(e,u.path))},l=B_(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Br(l,a)}}}function JS(t,e,n){let r=O.EMPTY_NODE;const i=tr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=dn(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Br(dn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),jf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=dn(t.visibleWrites,e);return jf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ZS(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ne(e,n);if(Uu(t.visibleWrites,s))return null;{const o=dn(t.visibleWrites,s);return ju(o)?i.getChild(n):Br(o,i.getChild(n))}}function eI(t,e,n,r){const i=ne(e,n),s=tr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=dn(t.visibleWrites,i);return Br(o,r.getNode().getImmediateChild(n))}else return null}function tI(t,e){return tr(t.visibleWrites,e)}function nI(t,e,n,r,i,s,o){let l;const a=dn(t.visibleWrites,e),u=tr(a,B());if(u!=null)l=u;else if(n!=null)l=Br(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function rI(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function $o(t,e,n,r){return V_(t.writeTree,t.treePath,e,n,r)}function gd(t,e){return JS(t.writeTree,t.treePath,e)}function zf(t,e,n,r){return ZS(t.writeTree,t.treePath,e,n,r)}function Ho(t,e){return tI(t.writeTree,ne(t.treePath,e))}function iI(t,e,n,r,i,s){return nI(t.writeTree,t.treePath,e,n,r,i,s)}function _d(t,e,n){return eI(t.writeTree,t.treePath,e,n)}function $_(t,e){return H_(ne(t.treePath,e),t.writeTree)}function H_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Zi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ji(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,zr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Zi(r,e.snapshotNode,i.oldSnap));else throw Gr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const q_=new oI;class vd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _d(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yn(this.viewCache_),s=iI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){return{filter:t}}function aI(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uI(t,e,n,r,i){const s=new sI;let o,l;if(n.type===lt.OVERWRITE){const u=n;u.source.fromUser?o=zu(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=qo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===lt.MERGE){const u=n;u.source.fromUser?o=dI(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Wu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===lt.ACK_USER_WRITE){const u=n;u.revert?o=pI(t,e,u.path,r,i,s):o=hI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===lt.LISTEN_COMPLETE)o=fI(t,e,n.path,r,s);else throw Gr("Unknown operation type: "+n.type);const a=s.getChanges();return cI(e,o,a),{viewCache:o,changes:a}}function cI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Lu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(U_(Lu(e)))}}function G_(t,e,n,r,i,s){const o=e.eventCache;if(Ho(r,n)!=null)return e;{let l,a;if(U(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Yn(e),c=u instanceof O?u:O.EMPTY_NODE,d=gd(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=$o(r,Yn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){k(mn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=zf(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=G(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=zf(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=_d(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ni(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function qo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=F(n);if(!a.isCompleteForPath(n)&&mn(n)>1)return e;const _=G(n),w=a.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=c.updatePriority(a.getNode(),w):u=c.updateChild(a.getNode(),m,w,_,q_,null)}const d=z_(e,u,a.isFullyInitialized()||U(n),c.filtersNodes()),h=new vd(i,d,s);return G_(t,d,n,i,h,l)}function zu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new vd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ni(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ni(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),m=l.getNode().getImmediateChild(d);let _;if(U(h))_=r;else{const v=c.getCompleteChild(d);v!=null?od(h)===".priority"&&v.getChild(O_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=O.EMPTY_NODE}if(m.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=Ni(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Wf(t,e){return t.eventCache.isCompleteForChild(e)}function dI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ne(n,a);Wf(e,F(c))&&(l=zu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ne(n,a);Wf(e,F(c))||(l=zu(t,l,c,u,i,s,o))}),l}function Bf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Bf(t,m,h);a=qo(t,a,new H(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),v=Bf(t,_,h);a=qo(t,a,new H(d),v,i,s,o,l)}}),a}function hI(t,e,n,r,i,s,o){if(Ho(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return qo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Tr,(c,d)=>{u=u.set(new H(c),d)}),Wu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((c,d)=>{const h=ne(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Wu(t,e,n,u,i,s,l,o)}}function fI(t,e,n,r,i){const s=e.serverCache,o=z_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return G_(t,o,n,r,q_,i)}function pI(t,e,n,r,i,s){let o;if(Ho(r,n)!=null)return e;{const l=new vd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=$o(r,Yn(e));else{const d=e.serverCache.getNode();k(d instanceof O,"serverChildren would be complete if leaf node"),c=gd(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=F(n);let d=_d(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,G(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$o(r,Yn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ho(r,B())!=null,Ni(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new cd(r.getIndex()),s=DS(r);this.processor_=lI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Qn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Qn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Tl(d,c),this.eventGenerator_=new zS(this.query_)}get query(){return this.query_}}function gI(t){return t.viewCache_.serverCache.getNode()}function _I(t,e){const n=Yn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Vf(t){return t.eventRegistrations_.length===0}function vI(t,e){t.eventRegistrations_.push(e)}function $f(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Hf(t,e,n,r){e.type===lt.MERGE&&e.source.queryId!==null&&(k(Yn(t.viewCache_),"We should always have a full cache before handling merges"),k(Lu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=uI(t.processor_,i,e,n,r);return aI(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,K_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(zr(s,o))}),n.isFullyInitialized()&&r.push(U_(n.getNode())),K_(t,r,n.getNode(),e)}function K_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return WS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;class wI{constructor(){this.views=new Map}}function EI(t){k(!Go,"__referenceConstructor has already been defined"),Go=t}function CI(){return k(Go,"Reference.ts has not been loaded"),Go}function SI(t){return t.views.size===0}function yd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Hf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Hf(o,e,n,r));return s}}function II(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=$o(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=gd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Tl(new Qn(l,a,!1),new Qn(r,i,!1));return new mI(e,u)}return o}function kI(t,e,n,r,i,s){const o=II(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vI(o,n),yI(o,n)}function TI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=gn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat($f(u,n,r)),Vf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat($f(a,n,r)),Vf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!gn(t)&&s.push(new(CI())(e._repo,e._path)),{removed:s,events:o}}function Q_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Nr(t,e){let n=null;for(const r of t.views.values())n=n||_I(r,e);return n}function Y_(t,e){if(e._queryParams.loadsAllData())return Nl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function X_(t,e){return Y_(t,e)!=null}function gn(t){return Nl(t)!=null}function Nl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;function NI(t){k(!Ko,"__referenceConstructor has already been defined"),Ko=t}function PI(){return k(Ko,"Reference.ts has not been loaded"),Ko}let RI=1;class qf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=rI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xI(t,e,n,r,i){return HS(t.pendingWriteTree_,e,n,r,i),i?Xr(t,new Kn(hd(),e,n)):[]}function OI(t,e,n,r){qS(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Xr(t,new Wr(hd(),e,i))}function Dn(t,e,n=!1){const r=GS(t.pendingWriteTree_,e);if(KS(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Ee(r.children,o=>{s=s.set(new H(o),!0)}),Xr(t,new Vo(r.path,s,n))}else return[]}function Pl(t,e,n){return Xr(t,new Kn(fd(),e,n))}function AI(t,e,n){const r=q.fromObject(n);return Xr(t,new Wr(fd(),e,r))}function DI(t,e){return Xr(t,new ts(fd(),e))}function bI(t,e,n){const r=wd(t,n);if(r){const i=Ed(r),s=i.path,o=i.queryId,l=Me(s,e),a=new ts(pd(o),l);return Cd(t,s,a)}else return[]}function Bu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||X_(o,e))){const a=TI(o,e,n,r);SI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>gn(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=FI(h);for(let _=0;_<m.length;++_){const v=m[_],w=v.query,p=tv(t,v);t.listenProvider_.startListening(Ri(w),Qo(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ri(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(Rl(h));t.listenProvider_.stopListening(Ri(h),m)}))}UI(t,u)}return l}function MI(t,e,n,r){const i=wd(t,r);if(i!=null){const s=Ed(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Kn(pd(l),a,n);return Cd(t,o,u)}else return[]}function LI(t,e,n,r){const i=wd(t,r);if(i){const s=Ed(i),o=s.path,l=s.queryId,a=Me(o,e),u=q.fromObject(n),c=new Wr(pd(l),a,u);return Cd(t,o,c)}else return[]}function Gf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Me(h,i);s=s||Nr(m,_),o=o||gn(m)});let l=t.syncPointTree_.get(i);l?(o=o||gn(l),s=s||Nr(l,B())):(l=new wI,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const v=Nr(_,B());v&&(s=s.updateImmediateChild(m,v))}));const u=X_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Rl(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=jI();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=md(t.pendingWriteTree_,i);let d=kI(l,e,n,c,s,a);if(!u&&!o&&!r){const h=Y_(l,e);d=d.concat(zI(t,e,h))}return d}function J_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Nr(l,a);if(u)return u});return V_(i,e,s,n,!0)}function Xr(t,e){return Z_(e,t.syncPointTree_,null,md(t.pendingWriteTree_,B()))}function Z_(t,e,n,r){if(U(t.path))return ev(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Nr(i,B()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=$_(r,o);s=s.concat(Z_(l,a,u,c))}return i&&(s=s.concat(yd(i,t,r,n))),s}}function ev(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Nr(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=$_(r,o),c=t.operationForChild(o);c&&(s=s.concat(ev(c,l,a,u)))}),i&&(s=s.concat(yd(i,t,r,n))),s}function tv(t,e){const n=e.query,r=Qo(t,n);return{hashFn:()=>(gI(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bI(t,n._path,r):DI(t,n._path);{const s=OC(i,n);return Bu(t,n,null,s)}}}}function Qo(t,e){const n=Rl(e);return t.queryToTagMap.get(n)}function Rl(t){return t._path.toString()+"$"+t._queryIdentifier}function wd(t,e){return t.tagToQueryMap.get(e)}function Ed(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Cd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=md(t.pendingWriteTree_,e);return yd(r,n,i,null)}function FI(t){return t.fold((e,n,r)=>{if(n&&gn(n))return[Nl(n)];{let i=[];return n&&(i=Q_(n)),Ee(r,(s,o)=>{i=i.concat(o)}),i}})}function Ri(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PI())(t._repo,t._path):t}function UI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Rl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function jI(){return RI++}function zI(t,e,n){const r=e._path,i=Qo(t,e),s=tv(t,n),o=t.listenProvider_.startListening(Ri(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!U(u)&&c&&gn(c))return[Nl(c).query];{let h=[];return c&&(h=h.concat(Q_(c).map(m=>m.query))),Ee(d,(m,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Ri(c),Qo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sd(n)}node(){return this.node_}}class Id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new Id(this.syncTree_,n)}node(){return J_(this.syncTree_,this.path_)}}const WI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return VI(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},VI=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},nv=function(t,e,n,r){return kd(e,new Id(n,t),r)},$I=function(t,e,n){return kd(t,new Sd(e),n)};function kd(t,e,n){const r=t.getPriority().val(),i=Kf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Kf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(re,(l,a)=>{const u=kd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Nd(t,e){let n=e instanceof H?e:new H(e),r=t,i=F(n);for(;i!==null;){const s=Fr(r.node.children,i)||{children:{},childCount:0};r=new Td(i,r,s),n=G(n),i=F(n)}return r}function Jr(t){return t.node.value}function rv(t,e){t.node.value=e,Vu(t)}function iv(t){return t.node.childCount>0}function HI(t){return Jr(t)===void 0&&!iv(t)}function xl(t,e){Ee(t.node.children,(n,r)=>{e(new Td(n,t,r))})}function sv(t,e,n,r){n&&!r&&e(t),xl(t,i=>{sv(i,e,!0,r)}),n&&r&&e(t)}function qI(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function gs(t){return new H(t.parent===null?t.name:gs(t.parent)+"/"+t.name)}function Vu(t){t.parent!==null&&GI(t.parent,t.name,t)}function GI(t,e,n){const r=HI(n),i=wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=/[\[\].#$\/\u0000-\u001F\u007F]/,QI=/[\[\].#$\u0000-\u001F\u007F]/,Ta=10*1024*1024,Pd=function(t){return typeof t=="string"&&t.length!==0&&!KI.test(t)},ov=function(t){return typeof t=="string"&&t.length!==0&&!QI.test(t)},YI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ov(t)},XI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!td(t)||t&&typeof t=="object"&&wt(t,".sv")},Rd=function(t,e,n){const r=n instanceof H?new dS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(r)+" with contents = "+e.toString());if(td(e))throw new Error(t+"contains "+e.toString()+" "+Pn(r));if(typeof e=="string"&&e.length>Ta/3&&Il(e)>Ta)throw new Error(t+"contains a string greater than "+Ta+" utf8 bytes "+Pn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ee(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Pd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hS(r,o),Rd(t,l,r),fS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},JI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Xi(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Pd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ye(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ZI=function(t,e,n,r){if(r&&e===void 0)return;const i=Xc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ee(e,(o,l)=>{const a=new H(o);if(Rd(i,l,ne(n,a)),od(a)===".priority"&&!XI(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),JI(i,s)},lv=function(t,e,n,r){if(!(r&&n===void 0)&&!ov(n))throw new Error(Xc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ek=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lv(t,e,n,r)},tk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YI(n))throw new Error(Xc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ld(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function av(t,e,n){xd(t,n),uv(t,r=>ld(r,e))}function Lt(t,e,n){xd(t,n),uv(t,r=>Ye(r,e)||Ye(e,r))}function uv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(rk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Un&&_e("event: "+n.toString()),Yr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="repo_interrupt",sk=25;class ok{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bo(),this.transactionQueueTree_=new Td,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lk(t,e,n){if(t.stats_=id(t.repoInfo_),t.forceRestClient_||MC())t.server_=new Wo(t.repoInfo_,(r,i,s,o)=>{Qf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{Qf(t,r,i,s,o)},r=>{Yf(t,r)},r=>{uk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zC(t.repoInfo_,()=>new jS(t.stats_,t.server_)),t.infoData_=new bS,t.infoSyncTree_=new qf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Pl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ad(t,"connected",!1),t.serverSyncTree_=new qf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ak(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Od(t){return WI({timestamp:ak(t)})}function Qf(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Mo(n,u=>ve(u));o=LI(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=MI(t.serverSyncTree_,s,a,i)}else if(r){const a=Mo(n,u=>ve(u));o=AI(t.serverSyncTree_,s,a)}else{const a=ve(n);o=Pl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ns(t,s)),Lt(t.eventQueue_,l,o)}function Yf(t,e){Ad(t,"connected",e),e===!1&&dk(t)}function uk(t,e){Ee(e,(n,r)=>{Ad(t,n,r)})}function Ad(t,e,n){const r=new H("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Pl(t.infoSyncTree_,r,i);Lt(t.eventQueue_,r,s)}function cv(t){return t.nextWriteId_++}function ck(t,e,n,r){Dd(t,"update",{path:e.toString(),value:n});let i=!0;const s=Od(t),o={};if(Ee(n,(l,a)=>{i=!1,o[l]=nv(ne(e,l),ve(a),t.serverSyncTree_,s)}),i)_e("update() called with empty data.  Don't do anything."),Jf(t,r,"ok",void 0);else{const l=cv(t),a=OI(t.serverSyncTree_,e,o,l);xd(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ze("update at "+e+" failed: "+u);const h=Dn(t.serverSyncTree_,l,!d),m=h.length>0?ns(t,e):e;Lt(t.eventQueue_,m,h),Jf(t,r,u,c)}),Ee(n,u=>{const c=mv(t,ne(e,u));ns(t,c)}),Lt(t.eventQueue_,e,[])}}function dk(t){Dd(t,"onDisconnectEvents");const e=Od(t),n=Bo();Mu(t.onDisconnect_,B(),(i,s)=>{const o=nv(i,s,t.serverSyncTree_,e);j_(n,i,o)});let r=[];Mu(n,B(),(i,s)=>{r=r.concat(Pl(t.serverSyncTree_,i,s));const o=mv(t,i);ns(t,o)}),t.onDisconnect_=Bo(),Lt(t.eventQueue_,B(),r)}function hk(t,e,n){let r;F(e._path)===".info"?r=Gf(t.infoSyncTree_,e,n):r=Gf(t.serverSyncTree_,e,n),av(t.eventQueue_,e._path,r)}function Xf(t,e,n){let r;F(e._path)===".info"?r=Bu(t.infoSyncTree_,e,n):r=Bu(t.serverSyncTree_,e,n),av(t.eventQueue_,e._path,r)}function fk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ik)}function Dd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_e(n,...e)}function Jf(t,e,n,r){e&&Yr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dv(t,e,n){return J_(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function bd(t,e=t.transactionQueueTree_){if(e||Ol(t,e),Jr(e)){const n=fv(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pk(t,gs(e),n)}else iv(e)&&xl(e,n=>{bd(t,n)})}function pk(t,e,n){const r=n.map(u=>u.currentWriteId),i=dv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Me(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Dd(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Dn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ol(t,Nd(t.transactionQueueTree_,e)),bd(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Yr(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ns(t,e)}},o)}function ns(t,e){const n=hv(t,e),r=gs(n),i=fv(t,n);return mk(t,i,r),r}function mk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=sk)c=!0,d="maxretry",i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=dv(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Rd("transaction failed: Data returned ",m,a.path);let _=ve(m);typeof m=="object"&&m!=null&&wt(m,".priority")||(_=_.updatePriority(h.getPriority()));const w=a.currentWriteId,p=Od(t),f=$I(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=cv(t),o.splice(o.indexOf(w),1),i=i.concat(xI(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Dn(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ol(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Yr(r[l]);bd(t,t.transactionQueueTree_)}function hv(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Jr(r)===void 0;)r=Nd(r,n),e=G(e),n=F(e);return r}function fv(t,e){const n=[];return pv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function pv(t,e,n){const r=Jr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xl(e,i=>{pv(t,i,n)})}function Ol(t,e){const n=Jr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,rv(e,n.length>0?n:void 0)}xl(e,r=>{Ol(t,r)})}function mv(t,e){const n=gs(hv(t,e)),r=Nd(t.transactionQueueTree_,e);return qI(r,i=>{Na(t,i)}),Na(t,r),sv(r,i=>{Na(t,i)}),n}function Na(t,e){const n=Jr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?rv(e,void 0):n.length=s+1,Lt(t.eventQueue_,gs(e),i);for(let o=0;o<r.length;o++)Yr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _k(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zf=function(t,e){const n=vk(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new C_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},vk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=gk(t.substring(c,d)));const h=_k(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class _v{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:od(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=Lf(this._queryParams),n=nd(e);return n==="{}"?"default":n}get _queryObject(){return Lf(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Md))return!1;const n=this._repo===e._repo,r=ld(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uS(this._path)}}class jt extends Md{constructor(e,n){super(e,n,new dd,!1)}get parent(){const e=O_(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=Yo(this.ref,e);return new rs(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new rs(i,Yo(this.ref,r),re)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vv(t,e){return t=et(t),t._checkNotDeleted("ref"),e!==void 0?Yo(t._root,e):t._root}function Yo(t,e){return t=et(t),F(t._path)===null?ek("child","path",e,!1):lv("child","path",e,!1),new jt(t._repo,ne(t._path,e))}function wk(t,e){ZI("update",e,t._path,!1);const n=new Sl;return ck(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ld{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new gv("value",this,new rs(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _v(this,e,n):null}matches(e){return e instanceof Ld?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _v(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=Yo(new jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new gv(e.type,this,new rs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ek(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{Xf(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new yk(n,s||void 0),l=e==="value"?new Ld(o):new Fd(e,o);return hk(t._repo,t,l),()=>Xf(t._repo,t,l)}function Ck(t,e,n,r){return Ek(t,"value",e,n,r)}EI(jt);NI(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="FIREBASE_DATABASE_EMULATOR_HOST",$u={};let Ik=!1;function kk(t,e,n,r){t.repoInfo_=new C_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Tk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_e("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Sk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Zf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new kr(kr.OWNER):new FC(t.name,t.options,e);tk("Invalid Firebase Database URL",o),U(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Pk(l,t,c,new LC(t.name,n));return new Rk(d,t)}function Nk(t,e){const n=$u[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fk(t),delete n[t.key]}function Pk(t,e,n,r){let i=$u[e.name];i||(i={},$u[e.name]=i);let s=i[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ok(t,Ik,n,r),i[t.toURLString()]=s,s}class Rk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function xk(t=s_(),e){const n=ed(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jw("database");r&&Ok(n,...r)}return n}function Ok(t,e,n,r={}){t=et(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new kr(kr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Zw(r.mockUserToken,t.app.options.projectId);s=new kr(o)}kk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t){EC(Qr),Ur(new Hn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Tk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cn(yf,wf,t),cn(yf,wf,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ak();function Ud(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dk=yv,wv=new hs("auth","Firebase",yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Jc("@firebase/auth");function bk(t,...e){Xo.logLevel<=$.WARN&&Xo.warn(`Auth (${Qr}): ${t}`,...e)}function io(t,...e){Xo.logLevel<=$.ERROR&&Xo.error(`Auth (${Qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw jd(t,...e)}function _t(t,...e){return jd(t,...e)}function Ev(t,e,n){const r=Object.assign(Object.assign({},Dk()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function Mk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yt(t,"argument-error"),Ev(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wv.create(t,...e)}function A(t,e,...n){if(!t)throw jd(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw io(e),new Error(e)}function Ft(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lk(){return ep()==="http:"||ep()==="https:"}function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lk()||eE()||"connection"in navigator)?navigator.onLine:!0}function Uk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Yc()||Zg()}get(){return Fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=new _s(3e4,6e4);function Sv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,r,i={}){return Iv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Kr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Cv.fetch()(kv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Iv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jk),e);try{const i=new Bk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Vs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Vs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ev(t,c,u);yt(t,c)}}catch(i){if(i instanceof wn)throw i;yt(t,"network-request-failed",{message:String(i)})}}async function Wk(t,e,n,r,i={}){const s=await vs(t,e,n,r,i);return"mfaPendingCredential"in s&&yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zd(t.config,i):`${t.config.apiScheme}://${i}`}class Bk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function $k(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hk(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Wd(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xi(Pa(i.auth_time)),issuedAtTime:xi(Pa(i.iat)),expirationTime:xi(Pa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pa(t){return Number(t)*1e3}function Wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const i=bo(n);return i?JSON.parse(i):(io("Failed to decode base64 JWT payload"),null)}catch(i){return io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qk(t){const e=Wd(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&Gk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await is(t,$k(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xk(s.providerUserInfo):[],l=Yk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Tv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Qk(t){const e=et(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xk(t){return t.map(e=>{var{providerId:n}=e,r=Ud(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){const n=await Iv(t,{},async()=>{const r=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hk(this,e)}reload(){return Qk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await is(this,Vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:y,isAnonymous:T,providerData:I,stsTokenManager:S}=n;A(g&&S,e,"internal-error");const N=ss.fromJSON(this.name,S);A(typeof g=="string",e,"internal-error"),Wt(d,e.name),Wt(h,e.name),A(typeof y=="boolean",e,"internal-error"),A(typeof T=="boolean",e,"internal-error"),Wt(m,e.name),Wt(_,e.name),Wt(v,e.name),Wt(w,e.name),Wt(p,e.name),Wt(f,e.name);const j=new jn({uid:g,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:T,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(j.providerData=I.map(D=>Object.assign({},D))),w&&(j._redirectEventId=w),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function Pt(t){Ft(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nv.type="NONE";const np=Nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t,e,n){return`firebase:${t}:${e}:${n}`}class Pr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=so(this.userKey,i.apiKey,s),this.fullPersistenceKey=so("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pr(Pt(np),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pt(np);const o=so(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=jn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Pr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Av(e))return"Blackberry";if(Dv(e))return"Webos";if(Bd(e))return"Safari";if((e.includes("chrome/")||Rv(e))&&!e.includes("edge/"))return"Chrome";if(Ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pv(t=Te()){return/firefox\//i.test(t)}function Bd(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rv(t=Te()){return/crios\//i.test(t)}function xv(t=Te()){return/iemobile/i.test(t)}function Ov(t=Te()){return/android/i.test(t)}function Av(t=Te()){return/blackberry/i.test(t)}function Dv(t=Te()){return/webos/i.test(t)}function Al(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zk(t=Te()){var e;return Al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e1(){return tE()&&document.documentMode===10}function bv(t=Te()){return Al(t)||Ov(t)||Dv(t)||Av(t)||/windows phone/i.test(t)||xv(t)}function t1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e=[]){let n;switch(t){case"Browser":n=rp(Te());break;case"Worker":n=`${rp(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e={}){return vs(t,"GET","/v2/passwordPolicy",Sv(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=6;class s1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:i1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.beforeStateQueue=new n1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r1(this),n=new s1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dl(t){return et(t)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=cE(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function a1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",l1().appendChild(r)})}function u1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t,e){const n=ed(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lo(s,e??{}))return i;yt(i,"already-initialized")}return n.initialize({options:e})}function d1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function h1(t,e,n){const r=Dl(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Lv(e),{host:o,port:l}=f1(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||p1()}function Lv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function f1(t){const e=Lv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sp(o)}}}function sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t,e){return Wk(t,"POST","/v1/accounts:signInWithIdp",Sv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="http://localhost";class Xn extends Fv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ud(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rr(e,n)}buildRequest(){const e={requestUri:m1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ys{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ys{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ys{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=op(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=op(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function op(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zo(e,n,r,i)}}function Uv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,s,e,r):s})}async function g1(t,e,n=!1){const r=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await is(t,Uv(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Wd(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(t,e,n=!1){const r="signIn",i=await Uv(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function y1(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function w1(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function E1(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function C1(t){return et(t).signOut()}const el="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){const t=Te();return Bd(t)||Al(t)}const I1=1e3,k1=10;class zv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S1()&&t1(),this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);e1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,k1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zv.type="LOCAL";const T1=zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wv.type="SESSION";const Bv=Wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await N1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=$d("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function R1(t){vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function x1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A1(){return Vv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="firebaseLocalStorageDb",D1=1,tl="firebaseLocalStorage",Hv="fbase_key";class ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ml(t,e){return t.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function b1(){const t=indexedDB.deleteDatabase($v);return new ws(t).toPromise()}function qu(){const t=indexedDB.open($v,D1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tl,{keyPath:Hv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tl)?e(r):(r.close(),await b1(),e(await qu()))})})}async function lp(t,e,n){const r=Ml(t,!0).put({[Hv]:e,value:n});return new ws(r).toPromise()}async function M1(t,e){const n=Ml(t,!1).get(e),r=await new ws(n).toPromise();return r===void 0?null:r.value}function ap(t,e){const n=Ml(t,!0).delete(e);return new ws(n).toPromise()}const L1=800,F1=3;class qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(A1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await x1(),!this.activeServiceWorker)return;this.sender=new P1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await lp(e,el,"1"),await ap(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ml(i,!1).getAll();return new ws(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qv.type="LOCAL";const U1=qv;new _s(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t,e){return e?Pt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends Fv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j1(t){return v1(t.auth,new Hd(t),t.bypassAuthState)}function z1(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),_1(n,new Hd(t),t.bypassAuthState)}async function W1(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),g1(n,new Hd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j1;case"linkViaPopup":case"linkViaRedirect":return W1;case"reauthViaPopup":case"reauthViaRedirect":return z1;default:yt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=new _s(2e3,1e4);async function V1(t,e,n){const r=Dl(t);Mk(t,e,Vd);const i=Gv(r,n);return new bn(r,"signInViaPopup",e,i).executeNotNull()}class bn extends Kv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B1.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="pendingRedirect",oo=new Map;class H1 extends Kv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oo.get(this.auth._key());if(!e){try{const r=await q1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oo.set(this.auth._key(),e)}return this.bypassAuthState||oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q1(t,e){const n=Q1(e),r=K1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function G1(t,e){oo.set(t._key(),e)}function K1(t){return Pt(t._redirectPersistence)}function Q1(t){return so($1,t.config.apiKey,t.name)}async function Y1(t,e,n=!1){const r=Dl(t),i=Gv(r,e),o=await new H1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=10*60*1e3;class J1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nT=/^https?/;async function rT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eT(t);for(const n of e)try{if(iT(n))return}catch{}yt(t,"unauthorized-domain")}function iT(t){const e=Hu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nT.test(n))return!1;if(tT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new _s(3e4,6e4);function cp(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oT(t){return new Promise((e,n)=>{var r,i,s;function o(){cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cp(),n(_t(t,"network-request-failed"))},timeout:sT.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)o();else{const l=u1("iframefcb");return vt()[l]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},a1(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw lo=null,e})}let lo=null;function lT(t){return lo=lo||oT(t),lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new _s(5e3,15e3),uT="__/auth/iframe",cT="emulator/auth/iframe",dT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zd(e,cT):`https://${t.config.authDomain}/${uT}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=hT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Kr(r).slice(1)}`}async function pT(t){const e=await lT(t),n=vt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:fT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),l=vt().setTimeout(()=>{s(o)},aT.get());function a(){vt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gT=500,_T=600,vT="_blank",yT="http://localhost";class dp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wT(t,e,n,r=gT,i=_T){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},mT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(l=Rv(u)?vT:n),Pv(u)&&(e=e||yT,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Zk(u)&&l!=="_self")return ET(e||"",l),new dp(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new dp(d)}function ET(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="__/auth/handler",ST="emulator/auth/handler",IT=encodeURIComponent("fac");async function hp(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof Vd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ku(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ys){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${IT}=${encodeURIComponent(a)}`:"";return`${kT(t)}?${Kr(l).slice(1)}${u}`}function kT({config:t}){return t.emulator?zd(t,ST):`https://${t.authDomain}/${CT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="webStorageSupport";class TT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bv,this._completeRedirectFn=Y1,this._overrideRedirectResult=G1}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hp(e,n,r,Hu(),i);return wT(e,o,$d())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hp(e,n,r,Hu(),i);return R1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pT(e),r=new J1(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ra,{type:Ra},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ra];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bv()||Bd()||Al()}}const NT=TT;var fp="@firebase/auth",pp="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xT(t){Ur(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(t)},u=new o1(r,i,s,a);return d1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new Hn("auth-internal",e=>{const n=Dl(e.getProvider("auth").getImmediate());return(r=>new PT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(fp,pp,RT(t)),cn(fp,pp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=5*60,AT=Jg("authIdTokenMaxAge")||OT;let mp=null;const DT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AT)return;const i=n==null?void 0:n.token;mp!==i&&(mp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qd(t=s_()){const e=ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=c1(t,{popupRedirectResolver:NT,persistence:[U1,T1,Bv]}),r=Jg("authTokenSyncURL");if(r){const s=DT(r);w1(n,s,()=>s(n.currentUser)),y1(n,o=>s(o))}const i=Yg("auth");return i&&h1(n,`http://${i}`),n}xT("Browser");const bT={apiKey:"AIzaSyAobHLEHQ8qhbJQR1NAoatnIUUn-8hk7BI",authDomain:"quickreact-ea95e.firebaseapp.com",databaseURL:"https://quickreact-ea95e-default-rtdb.firebaseio.com",projectId:"quickreact-ea95e",storageBucket:"quickreact-ea95e.appspot.com",messagingSenderId:"531452138536",appId:"1:531452138536:web:bdf5fdef9e3063ea97911d",measurementId:"G-SVH1LP2G5H"},Ll=i_(bT),Gu=xk(Ll),MT=t=>{const[e,n]=P.useState(),[r,i]=P.useState(null);return P.useEffect(()=>Ck(vv(Gu,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},gp=t=>{const e=Date.now(),n=(t==null?void 0:t.message)||`Updated: ${new Date(e).toLocaleString()}`;return{timestamp:e,error:t,message:n}},LT=t=>{const[e,n]=P.useState();return[P.useCallback(i=>{wk(vv(Gu,t),i).then(()=>n(gp())).catch(s=>n(gp(s)))},[Gu,t]),e]},FT=()=>{V1(qd(Ll),new St)},UT=()=>C1(qd(Ll)),Yv=()=>{const[t,e]=P.useState();return P.useEffect(()=>E1(qd(Ll),e),[]),[t]},jT=()=>E.jsx("button",{className:"my-2 mx-5 btn text-white signinbutton",style:{border:"1px solid white",borderRadius:"2rem"},onClick:FT,children:"Sign in"}),zT=()=>E.jsx("button",{className:"my-2 mx-5 btn text-white",style:{border:"1px solid white",borderRadius:"2rem"},onClick:UT,children:"Sign out"}),WT=()=>{const[t]=Yv();return t?E.jsx(zT,{}):E.jsx(jT,{})},BT=({title:t})=>E.jsxs("div",{className:"d-flex justify-content-between bg-dark",style:{height:"5rem",background:"linear-gradient(#3cacb6, #8ccead)",alignItems:"center"},children:[E.jsx("h2",{className:"p-3 mx-5 text-center text-white",children:t}),E.jsx(WT,{})]}),VT=({selectedTerm:t,setSelectedTerm:e})=>E.jsx("div",{className:"text-center",children:E.jsxs("div",{className:"btn-group",children:[E.jsx("input",{type:"radio",className:"btn-check",id:"Fall",autoComplete:"off",checked:t=="Fall",onChange:()=>e("Fall")}),E.jsx("label",{className:"btn btn-outline-secondary",style:{border:t=="Fall"?"none":"",background:t=="Fall"?"linear-gradient(#3cacb6, #8ccead)":"white"},htmlFor:"Fall",children:"Fall"}),E.jsx("input",{type:"radio",className:"btn-check",id:"Winter",autoComplete:"off",checked:t=="Winter",onChange:()=>e("Winter")}),E.jsx("label",{className:"btn btn-outline-secondary",style:{border:t=="Winter"?"none":"",background:t=="Winter"?"linear-gradient(#3cacb6, #8ccead)":"white"},htmlFor:"Winter",children:"Winter"}),E.jsx("input",{type:"radio",className:"btn-check",id:"Spring",autoComplete:"off",checked:t=="Spring",onChange:()=>e("Spring")}),E.jsx("label",{className:"btn btn-outline-secondary",style:{border:t=="Spring"?"none":"",background:t=="Spring"?"linear-gradient(#3cacb6, #8ccead)":"white"},htmlFor:"Spring",children:"Spring"})]})});/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},os.apply(this,arguments)}var Jt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jt||(Jt={}));const _p="popstate";function $T(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ku("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nl(i)}return qT(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HT(){return Math.random().toString(36).substr(2,8)}function vp(t,e){return{usr:t.state,key:t.key,idx:e}}function Ku(t,e,n,r){return n===void 0&&(n=null),os({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zr(e):e,{state:n,key:e&&e.key||r||HT()})}function nl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jt.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(os({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Jt.Pop;let w=c(),p=w==null?null:w-u;u=w,a&&a({action:l,location:v.location,delta:p})}function h(w,p){l=Jt.Push;let f=Ku(v.location,w,p);n&&n(f,w),u=c()+1;let g=vp(f,u),y=v.createHref(f);try{o.pushState(g,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function m(w,p){l=Jt.Replace;let f=Ku(v.location,w,p);n&&n(f,w),u=c();let g=vp(f,u),y=v.createHref(f);o.replaceState(g,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:nl(w);return le(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(_p,d),a=w,()=>{i.removeEventListener(_p,d),a=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(w){return o.go(w)}};return v}var yp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yp||(yp={}));function GT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zr(e):e,i=Kd(r.pathname||"/",n);if(i==null)return null;let s=Xv(t);KT(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=rN(s[l],oN(i));return o}function Xv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(le(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=hn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:tN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Jv(s.path))i(s,o,a)}),e}function Jv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Jv(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function KT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const QT=/^:\w+$/,YT=3,XT=2,JT=1,ZT=10,eN=-2,wp=t=>t==="*";function tN(t,e){let n=t.split("/"),r=n.length;return n.some(wp)&&(r+=eN),e&&(r+=XT),n.filter(i=>!wp(i)).reduce((i,s)=>i+(QT.test(s)?YT:s===""?JT:ZT),r)}function nN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=iN({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:hn([i,c.pathname]),pathnameBase:cN(hn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=hn([i,c.pathnameBase]))}return s}function iN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=lN(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function sN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function oN(t){try{return decodeURI(t)}catch(e){return Gd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lN(t,e){try{return decodeURIComponent(t)}catch(n){return Gd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Kd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function aN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zr(t):t;return{pathname:n?n.startsWith("/")?n:uN(n,e):e,search:dN(r),hash:hN(i)}}function uN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ey(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zr(t):(i=os({},t),le(!i.pathname||!i.pathname.includes("?"),xa("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),xa("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),xa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=aN(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const hn=t=>t.join("/").replace(/\/\/+/g,"/"),cN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ty=["post","put","patch","delete"];new Set(ty);const pN=["get",...ty];new Set(pN);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rl.apply(this,arguments)}const Qd=P.createContext(null),mN=P.createContext(null),ei=P.createContext(null),Fl=P.createContext(null),En=P.createContext({outlet:null,matches:[],isDataRoute:!1}),ny=P.createContext(null);function gN(t,e){let{relative:n}=e===void 0?{}:e;Es()||le(!1);let{basename:r,navigator:i}=P.useContext(ei),{hash:s,pathname:o,search:l}=sy(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:hn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Es(){return P.useContext(Fl)!=null}function Ul(){return Es()||le(!1),P.useContext(Fl).location}function ry(t){P.useContext(ei).static||P.useLayoutEffect(t)}function iy(){let{isDataRoute:t}=P.useContext(En);return t?xN():_N()}function _N(){Es()||le(!1);let t=P.useContext(Qd),{basename:e,navigator:n}=P.useContext(ei),{matches:r}=P.useContext(En),{pathname:i}=Ul(),s=JSON.stringify(Zv(r).map(a=>a.pathnameBase)),o=P.useRef(!1);return ry(()=>{o.current=!0}),P.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=ey(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:hn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function vN(){let{matches:t}=P.useContext(En),e=t[t.length-1];return e?e.params:{}}function sy(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(En),{pathname:i}=Ul(),s=JSON.stringify(Zv(r).map(o=>o.pathnameBase));return P.useMemo(()=>ey(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function yN(t,e){return wN(t,e)}function wN(t,e,n){Es()||le(!1);let{navigator:r}=P.useContext(ei),{matches:i}=P.useContext(En),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Ul(),u;if(e){var c;let v=typeof e=="string"?Zr(e):e;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||le(!1),u=v}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",m=GT(t,{pathname:h}),_=kN(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:hn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?P.createElement(Fl.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Jt.Pop}},_):_}function EN(){let t=RN(),e=fN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}const CN=P.createElement(EN,null);class SN extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(En.Provider,{value:this.props.routeContext},P.createElement(ny.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IN(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Qd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(En.Provider,{value:e},r)}function kN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||le(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||CN);let h=e.concat(s.slice(0,u+1)),m=()=>{let _;return c?_=d:a.route.Component?_=P.createElement(a.route.Component,null):a.route.element?_=a.route.element:_=l,P.createElement(IN,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:_})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?P.createElement(SN,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var oy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(oy||{}),il=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(il||{});function TN(t){let e=P.useContext(Qd);return e||le(!1),e}function NN(t){let e=P.useContext(mN);return e||le(!1),e}function PN(t){let e=P.useContext(En);return e||le(!1),e}function ly(t){let e=PN(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function RN(){var t;let e=P.useContext(ny),n=NN(il.UseRouteError),r=ly(il.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function xN(){let{router:t}=TN(oy.UseNavigateStable),e=ly(il.UseNavigateStable),n=P.useRef(!1);return ry(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,rl({fromRouteId:e},s)))},[t,e])}function Qu(t){le(!1)}function ON(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jt.Pop,navigator:s,static:o=!1}=t;Es()&&le(!1);let l=e.replace(/^\/*/,"/"),a=P.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Zr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,_=P.useMemo(()=>{let v=Kd(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:m},navigationType:i}},[l,u,c,d,h,m,i]);return _==null?null:P.createElement(ei.Provider,{value:a},P.createElement(Fl.Provider,{children:n,value:_}))}function AN(t){let{children:e,location:n}=t;return yN(Yu(e),n)}new Promise(()=>{});function Yu(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Yu(r.props.children,s));return}r.type!==Qu&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xu.apply(this,arguments)}function DN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MN(t,e){return t.button===0&&(!e||e==="_self")&&!bN(t)}const LN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],FN="startTransition",Ep=Dy[FN];function UN(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=$T({window:i,v5Compat:!0}));let o=s.current,[l,a]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(d=>{u&&Ep?Ep(()=>a(d)):a(d)},[a,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.createElement(ON,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}const jN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ay=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=DN(e,LN),{basename:h}=P.useContext(ei),m,_=!1;if(typeof u=="string"&&zN.test(u)&&(m=u,jN))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),y=Kd(g.pathname,h);g.origin===f.origin&&y!=null?u=y+g.search+g.hash:_=!0}catch{}let v=gN(u,{relative:i}),w=WN(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return P.createElement("a",Xu({},d,{href:m||v,onClick:_||s?r:p,ref:n,target:a}))});var Cp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Cp||(Cp={}));var Sp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sp||(Sp={}));function WN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=iy(),a=Ul(),u=sy(t,{relative:o});return P.useCallback(c=>{if(MN(c,n)){c.preventDefault();let d=r!==void 0?r:nl(a)===nl(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const BN=({course:t,selected:e,toggleSelected:n,hasConflict:r})=>E.jsxs("div",{className:`card m-1 p-2 ${e.includes(t)?"border-success border-opacity-75 border-3":""} ${r?"border-danger border-opacity-75 border-3":""}`,children:[E.jsxs("div",{className:"card-body",children:[E.jsxs("div",{className:"d-flex",children:[E.jsxs("h5",{className:"card-title",children:[t.term," CS ",t.number]}),E.jsx(ay,{to:{pathname:`/courseform/${t.term}|${t.number}|${t.title}|${t.meets}`,state:{course:t}},children:E.jsx("i",{className:"bi bi-pencil-square text-secondary mx-2"})})]}),E.jsx("p",{className:"card-text text-secondary",children:t.title})]}),E.jsxs("div",{className:"card-footer bg-white",children:[E.jsx("p",{className:"card-text",children:t.meets}),r?E.jsx("button",{className:"btn",disabled:!0,children:E.jsxs("div",{className:"d-flex",children:[E.jsx("i",{className:"bi bi-plus-circle mr-1 "}),E.jsx("p",{className:"mb-0 mx-1",children:"Add"})]})}):E.jsx("button",{className:`btn opacity-75 ${e.includes(t)?"btn-danger":"btn-success"}`,onClick:()=>n(t),children:e.includes(t)?E.jsxs("div",{className:"d-flex",children:[E.jsx("i",{className:"bi bi-trash3 mx-1"}),E.jsx("p",{className:"mb-0 mx-1",children:"Remove"})]}):E.jsxs("div",{className:"d-flex",children:[E.jsx("i",{className:"bi bi-plus-circle mr-1 "}),E.jsx("p",{className:"mb-0 mx-1",children:"Add"})]})})]})]});function VN(t,e){const n=t.meets.split(" ")[0],r=e.meets.split(" ")[0];for(const i of n)if(r.includes(i))return!0;return!1}function $N(t,e){const[n,r]=t.meets.split(" ")[1].split("-").map(o=>{const[l,a]=o.split(":");return l*60+a}),[i,s]=e.meets.split(" ")[1].split("-").map(o=>{const[l,a]=o.split(":");return l*60+a});return n>=i&&n<s||r>i&r<=s}function HN(t,e){return t.term==e.term?!!(VN(t,e)&&$N(t,e)):!1}function qN(t,e){let n=!1;for(const r of e){if(r==t)return!1;HN(r,t)&&(n=!0)}return n}const GN=({courses:t,term:e,selected:n,toggleSelected:r})=>E.jsx("div",{className:"course-list p-3 justify-content-md-center",children:Object.entries(t).filter(([i,s])=>s.term==e).map(([i,s])=>{const o=qN(s,n);return E.jsx(BN,{course:s,selected:n,toggleSelected:r,hasConflict:o},i)})});const KN=({children:t,open:e,close:n,selectedTerm:r})=>E.jsxs("div",{children:[e&&E.jsx("div",{className:"modal-overlay",onClick:n}),E.jsx("div",{className:`${e?"modal-show":"modal"}`,tabIndex:"-1",role:"dialog",onClick:i=>{i.target===i.currentTarget&&n()},children:E.jsx("div",{className:"modal-dialog inner",role:"document",children:E.jsxs("div",{className:"modal-content",children:[E.jsxs("div",{className:"modal-header",children:[E.jsxs("h4",{className:"mx-2 my-2 pb-2",children:[r," 2018-19 Course Plan"]}),E.jsx("button",{type:"button",className:"btn-close mx-3","aria-label":"Close",onClick:n})]}),E.jsx("div",{className:"modal-body overflow-scroll",children:t})]})})})]}),QN=({selected:t,term:e})=>E.jsx("div",{className:"h-100",children:t.length===0?E.jsxs("div",{className:"text-center mb-5",children:[E.jsx("h5",{children:"No courses selected"}),E.jsx("p",{children:"To select a course, click on the course card."})]}):t.filter(n=>n.term==e).map(n=>E.jsxs("div",{className:"mx-2 d-flex",children:[E.jsx("i",{className:"bi bi-person-fill-check"}),E.jsxs("p",{className:"mx-1",children:["CS ",n.number,": ",n.title," - ",n.meets]})]},n.id))}),YN=({courses:t})=>{const[e,n]=P.useState("Fall"),[r,i]=P.useState([]),[s,o]=P.useState(!1),l=c=>i(r.includes(c)?r.filter(d=>d!==c):[...r,c]),a=()=>o(!0),u=()=>o(!1);return E.jsxs("div",{children:[E.jsx(KN,{open:s,close:u,selectedTerm:e,children:E.jsx(QN,{term:e,selected:r})}),E.jsxs("div",{className:"d-flex justify-content-center mt-4",children:[E.jsx(VT,{selectedTerm:e,setSelectedTerm:n}),E.jsx("button",{style:{background:"linear-gradient(#3cacb6, #8ccead)"},className:"btn text-white mx-3",onClick:a,children:"Course Plan"})]}),E.jsx(GN,{courses:t,term:e,selected:r,toggleSelected:l})]})},XN=(t=null,e={})=>{const[n,r]=P.useState(()=>({values:e}));return[n,s=>{const{id:o,value:l}=s.target,a=t?t(o,l):"",u={...n.values,[o]:l},c={...n.errors,[o]:a},d=Object.values(c).some(h=>h!=="");r(d?{values:u,errors:c}:{values:u})}]},JN=(t,e)=>{switch(t){case"term":return/^(Fall|Winter|Spring)$/.test(e)?"":"must be Fall, Winter, or Spring";case"number":return/^(\d{1,3}(-\d{1,3})?)$/.test(e)&&parseInt(e)>=100&&parseInt(e)<=500?"":"must be a number between 100 and 500";case"title":return/^[A-Za-z\s.,?!&()-:;']{2,}$/.test(e)?"":"must be at least two characters";case"meets":return/^$|^\w{1,4}(?:\s\d{1,2}:\d{2}-\d{1,2}:\d{2})+$/.test(e)?"":"must contain days and start-end, e.g., MWF 12:00-13:20";default:return""}},$s=({name:t,text:e,state:n,change:r})=>{var s,o;const i=(s=n.errors)==null?void 0:s[t];return E.jsxs("div",{className:"mb-3",children:[E.jsx("label",{htmlFor:t,className:"form-label",children:e}),E.jsx("input",{className:`form-control ${i?"is-invalid":""}`,id:t,name:t,onChange:r,defaultValue:(o=n.values)==null?void 0:o[t]}),E.jsx("div",{className:"invalid-feedback",children:i})]})},ZN=({message:t})=>E.jsxs("div",{className:"d-flex",children:[E.jsx(ay,{to:"/",children:E.jsx("button",{type:"button",className:"btn btn-outline-danger",children:"Cancel"})}),E.jsx("button",{type:"submit",className:"btn btn-primary mx-4",children:"Submit"}),E.jsx("span",{className:"p-2",children:t})]}),eP=()=>{const{courseId:t}=vN(),[e,n,r,i]=t.split("|"),s=e[0].concat(String(n)),[o,l]=LT(`/courses/${s}`),a=iy(),[u,c]=XN(JN,{term:e,number:n,title:r,meets:i}),d=h=>{h.preventDefault(),u.errors||(o(u.values),a("/"))};return E.jsx("div",{className:"d-flex justify-content-center align-items-center p-5",style:{height:"89vh"},children:E.jsx("div",{style:{background:"linear-gradient(#3cacb6, #8ccead)",padding:"10px",borderRadius:"10px",width:"60%"},children:E.jsxs("form",{onSubmit:d,className:"p-4 bg-white",style:{borderRadius:"5px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[E.jsx("h3",{children:"Edit Course Info"}),E.jsx($s,{name:"term",text:"Course Term",state:u,change:c}),E.jsx($s,{name:"number",text:"Course Number",state:u,change:c}),E.jsx($s,{name:"title",text:"Course Title",state:u,change:c}),E.jsx($s,{name:"meets",text:"Meeting Time(s)",state:u,change:c}),E.jsx(ZN,{message:l==null?void 0:l.message})]})})})},tP=()=>E.jsx("div",{className:"text-white 100vh",style:{background:"linear-gradient(#8ccead, #3cacb6)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",height:"93vh"},children:E.jsxs("div",{children:[E.jsx("h1",{style:{fontWeight:"700",fontSize:"5rem"},children:"ClassMaster"}),E.jsx("p",{style:{fontSize:"1.5rem"},children:"Course Scheduling Made Easier"})]})});class jl{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Yd=typeof window>"u"||"Deno"in window;function rt(){}function nP(t,e){return typeof t=="function"?t(e):t}function rP(t){return typeof t=="number"&&t>=0&&t!==1/0}function iP(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Hs(t,e,n){return zl(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function $t(t,e,n){return zl(t)?[{...e,queryKey:t},n]:[t||{},e]}function Ip(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:l}=t;if(zl(o)){if(r){if(e.queryHash!==Xd(o,e.options))return!1}else if(!sl(e.queryKey,o))return!1}if(n!=="all"){const a=e.isActive();if(n==="active"&&!a||n==="inactive"&&a)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i<"u"&&i!==e.state.fetchStatus||s&&!s(e))}function kp(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:s}=t;if(zl(s)){if(!e.options.mutationKey)return!1;if(n){if(Mn(e.options.mutationKey)!==Mn(s))return!1}else if(!sl(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Xd(t,e){return((e==null?void 0:e.queryKeyHashFn)||Mn)(t)}function Mn(t){return JSON.stringify(t,(e,n)=>Ju(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function sl(t,e){return uy(t,e)}function uy(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!uy(t[n],e[n])):!1}function cy(t,e){if(t===e)return t;const n=Tp(t)&&Tp(e);if(n||Ju(t)&&Ju(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{};let l=0;for(let a=0;a<s;a++){const u=n?a:i[a];o[u]=cy(t[u],e[u]),o[u]===t[u]&&l++}return r===s&&l===r?t:o}return e}function Tp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Ju(t){if(!Np(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!Np(n)||!n.hasOwnProperty("isPrototypeOf"))}function Np(t){return Object.prototype.toString.call(t)==="[object Object]"}function zl(t){return Array.isArray(t)}function dy(t){return new Promise(e=>{setTimeout(e,t)})}function Pp(t){dy(0).then(t)}function sP(){if(typeof AbortController=="function")return new AbortController}function oP(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?cy(t,e):e}class lP extends jl{constructor(){super(),this.setup=e=>{if(!Yd&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const Zu=new lP,Rp=["online","offline"];class aP extends jl{constructor(){super(),this.setup=e=>{if(!Yd&&window.addEventListener){const n=()=>e();return Rp.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Rp.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const ol=new aP;function uP(t){return Math.min(1e3*2**t,3e4)}function Jd(t){return(t??"online")==="online"?ol.isOnline():!0}class hy{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function Oa(t){return t instanceof hy}function fy(t){let e=!1,n=0,r=!1,i,s,o;const l=new Promise((w,p)=>{s=w,o=p}),a=w=>{r||(m(new hy(w)),t.abort==null||t.abort())},u=()=>{e=!0},c=()=>{e=!1},d=()=>!Zu.isFocused()||t.networkMode!=="always"&&!ol.isOnline(),h=w=>{r||(r=!0,t.onSuccess==null||t.onSuccess(w),i==null||i(),s(w))},m=w=>{r||(r=!0,t.onError==null||t.onError(w),i==null||i(),o(w))},_=()=>new Promise(w=>{i=p=>{const f=r||!d();return f&&w(p),f},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),v=()=>{if(r)return;let w;try{w=t.fn()}catch(p){w=Promise.reject(p)}Promise.resolve(w).then(h).catch(p=>{var f,g;if(r)return;const y=(f=t.retry)!=null?f:3,T=(g=t.retryDelay)!=null?g:uP,I=typeof T=="function"?T(n,p):T,S=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,p);if(e||!S){m(p);return}n++,t.onFail==null||t.onFail(n,p),dy(I).then(()=>{if(d())return _()}).then(()=>{e?m(p):v()})})};return Jd(t.networkMode)?v():_().then(v),{promise:l,cancel:a,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:u,continueRetry:c}}const Zd=console;function cP(){let t=[],e=0,n=c=>{c()},r=c=>{c()};const i=c=>{let d;e++;try{d=c()}finally{e--,e||l()}return d},s=c=>{e?t.push(c):Pp(()=>{n(c)})},o=c=>(...d)=>{s(()=>{c(...d)})},l=()=>{const c=t;t=[],c.length&&Pp(()=>{r(()=>{c.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:o,schedule:s,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Re=cP();class py{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),rP(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Yd?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class dP extends py{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||Zd,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||hP(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=oP(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(rt).catch(rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!iP(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var s;return(s=this.retryer)==null||s.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const m=this.observers.find(_=>_.options.queryFn);m&&this.setOptions(m.options)}const o=sP(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},a=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};a(l);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};if(a(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta})}const h=m=>{if(Oa(m)&&m.silent||this.dispatch({type:"error",error:m}),!Oa(m)){var _,v,w,p;(_=(v=this.cache.config).onError)==null||_.call(v,m,this),(w=(p=this.cache.config).onSettled)==null||w.call(p,this.state.data,m,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=fy({fn:c.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:m=>{var _,v,w,p;if(typeof m>"u"){h(new Error(this.queryHash+" data is undefined"));return}this.setData(m),(_=(v=this.cache.config).onSuccess)==null||_.call(v,m,this),(w=(p=this.cache.config).onSettled)==null||w.call(p,m,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(m,_)=>{this.dispatch({type:"failed",failureCount:m,error:_})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,s;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Jd(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return Oa(o)&&o.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Re.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function hP(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class fP extends jl{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const s=n.queryKey,o=(i=n.queryHash)!=null?i:Xd(s,n);let l=this.get(o);return l||(l=new dP({cache:this,logger:e.getLogger(),queryKey:s,queryHash:o,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Re.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=$t(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Ip(r,i))}findAll(e,n){const[r]=$t(e,n);return Object.keys(r).length>0?this.queries.filter(i=>Ip(r,i)):this.queries}notify(e){Re.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Re.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Re.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class pP extends py{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||Zd,this.observers=[],this.state=e.state||mP(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var S;return this.retryer=fy({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(N,j)=>{this.dispatch({type:"failed",failureCount:N,error:j})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(S=this.options.retry)!=null?S:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,s,o,l,a,u,c;if(!n){var d,h,m,_;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(h=this.mutationCache.config).onMutate)==null?void 0:d.call(h,this.state.variables,this));const N=await((m=(_=this.options).onMutate)==null?void 0:m.call(_,this.state.variables));N!==this.state.context&&this.dispatch({type:"loading",context:N,variables:this.state.variables})}const S=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,S,this.state.variables,this.state.context,this)),await((s=(o=this.options).onSuccess)==null?void 0:s.call(o,S,this.state.variables,this.state.context)),await((l=(a=this.mutationCache.config).onSettled)==null?void 0:l.call(a,S,null,this.state.variables,this.state.context,this)),await((u=(c=this.options).onSettled)==null?void 0:u.call(c,S,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:S}),S}catch(S){try{var v,w,p,f,g,y,T,I;throw await((v=(w=this.mutationCache.config).onError)==null?void 0:v.call(w,S,this.state.variables,this.state.context,this)),await((p=(f=this.options).onError)==null?void 0:p.call(f,S,this.state.variables,this.state.context)),await((g=(y=this.mutationCache.config).onSettled)==null?void 0:g.call(y,void 0,S,this.state.variables,this.state.context,this)),await((T=(I=this.options).onSettled)==null?void 0:T.call(I,void 0,S,this.state.variables,this.state.context)),S}finally{this.dispatch({type:"error",error:S})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Jd(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Re.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function mP(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class gP extends jl{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new pP({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Re.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>kp(e,n))}findAll(e){return this.mutations.filter(n=>kp(e,n))}notify(e){Re.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Re.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(rt)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function _P(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,s,o;const l=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,a=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=a==null?void 0:a.pageParam,c=(a==null?void 0:a.direction)==="forward",d=(a==null?void 0:a.direction)==="backward",h=((s=t.state.data)==null?void 0:s.pages)||[],m=((o=t.state.data)==null?void 0:o.pageParams)||[];let _=m,v=!1;const w=I=>{Object.defineProperty(I,"signal",{enumerable:!0,get:()=>{var S;if((S=t.signal)!=null&&S.aborted)v=!0;else{var N;(N=t.signal)==null||N.addEventListener("abort",()=>{v=!0})}return t.signal}})},p=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),f=(I,S,N,j)=>(_=j?[S,..._]:[..._,S],j?[N,...I]:[...I,N]),g=(I,S,N,j)=>{if(v)return Promise.reject("Cancelled");if(typeof N>"u"&&!S&&I.length)return Promise.resolve(I);const D={queryKey:t.queryKey,pageParam:N,meta:t.options.meta};w(D);const Ne=p(D);return Promise.resolve(Ne).then(Cn=>f(I,N,Cn,j))};let y;if(!h.length)y=g([]);else if(c){const I=typeof u<"u",S=I?u:xp(t.options,h);y=g(h,I,S)}else if(d){const I=typeof u<"u",S=I?u:vP(t.options,h);y=g(h,I,S,!0)}else{_=[];const I=typeof t.options.getNextPageParam>"u";y=(l&&h[0]?l(h[0],0,h):!0)?g([],I,m[0]):Promise.resolve(f([],m[0],h[0]));for(let N=1;N<h.length;N++)y=y.then(j=>{if(l&&h[N]?l(h[N],N,h):!0){const Ne=I?m[N]:xp(t.options,j);return g(j,I,Ne)}return Promise.resolve(f(j,m[N],h[N]))})}return y.then(I=>({pages:I,pageParams:_}))}}}}function xp(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function vP(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class yP{constructor(e={}){this.queryCache=e.queryCache||new fP,this.mutationCache=e.mutationCache||new gP,this.logger=e.logger||Zd,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=Zu.subscribe(()=>{Zu.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=ol.subscribe(()=>{ol.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=$t(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=Hs(e,n,r),s=this.getQueryData(i.queryKey);return s?Promise.resolve(s):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),s=i==null?void 0:i.state.data,o=nP(n,s);if(typeof o>"u")return;const l=Hs(e),a=this.defaultQueryOptions(l);return this.queryCache.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,n,r){return Re.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=$t(e,n),i=this.queryCache;Re.batch(()=>{i.findAll(r).forEach(s=>{i.remove(s)})})}resetQueries(e,n,r){const[i,s]=$t(e,n,r),o=this.queryCache,l={type:"active",...i};return Re.batch(()=>(o.findAll(i).forEach(a=>{a.reset()}),this.refetchQueries(l,s)))}cancelQueries(e,n,r){const[i,s={}]=$t(e,n,r);typeof s.revert>"u"&&(s.revert=!0);const o=Re.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(s)));return Promise.all(o).then(rt).catch(rt)}invalidateQueries(e,n,r){const[i,s]=$t(e,n,r);return Re.batch(()=>{var o,l;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const a={...i,type:(o=(l=i.refetchType)!=null?l:i.type)!=null?o:"active"};return this.refetchQueries(a,s)})}refetchQueries(e,n,r){const[i,s]=$t(e,n,r),o=Re.batch(()=>this.queryCache.findAll(i).filter(a=>!a.isDisabled()).map(a=>{var u;return a.fetch(void 0,{...s,cancelRefetch:(u=s==null?void 0:s.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(o).then(rt);return s!=null&&s.throwOnError||(l=l.catch(rt)),l}fetchQuery(e,n,r){const i=Hs(e,n,r),s=this.defaultQueryOptions(i);typeof s.retry>"u"&&(s.retry=!1);const o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(rt).catch(rt)}fetchInfiniteQuery(e,n,r){const i=Hs(e,n,r);return i.behavior=_P(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(rt).catch(rt)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Mn(e)===Mn(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>sl(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Mn(e)===Mn(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>sl(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Xd(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}const Op=P.createContext(void 0),wP=P.createContext(!1);function EP(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Op),window.ReactQueryClientContext):Op)}const CP=({client:t,children:e,context:n,contextSharing:r=!1})=>{P.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=EP(n,r);return P.createElement(wP.Provider,{value:!n&&r},P.createElement(i.Provider,{value:t},e))},SP=()=>{const[t,e]=MT("/"),[n]=Yv();return e?E.jsxs("h1",{children:["Error loading user data: ",`${e}`]}):t?E.jsxs("div",{children:[E.jsx(BT,{title:n?t.title:""}),E.jsx(UN,{children:E.jsxs(AN,{children:[E.jsx(Qu,{path:"/",element:n?E.jsx(YN,{courses:t.courses}):E.jsx(tP,{})}),E.jsx(Qu,{path:"courseform/:courseId",element:E.jsx(eP,{})})]})})]}):E.jsx("h1",{children:"Loading user data..."})},IP=new yP,kP=()=>E.jsx(CP,{client:IP,children:E.jsx("div",{className:"bg-light",children:E.jsx(SP,{})})}),TP=Aa.createRoot(document.getElementById("root"));TP.render(E.jsx(Wp.StrictMode,{children:E.jsx(kP,{})}));
