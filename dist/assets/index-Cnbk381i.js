const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ListPage-Cd4YgTHN.js","assets/InitiativeCard-DUuhR77l.js","assets/trash-2-ecdLvAih.js","assets/chevron-down-DLe3kLhS.js","assets/search-6eOGtIiP.js","assets/eye-CqZZp3Ul.js","assets/pen--X7Ne0vp.js","assets/ChatPage-DJ_ulUg8.js","assets/sparkles-ncTTP-_h.js","assets/send-BgHvHsSi.js","assets/StatsPage-CDsALl7D.js","assets/html2canvas.esm-QH1iLAAe.js","assets/user-check-Bm6h9ebF.js","assets/download-BEQmE4qg.js","assets/chevron-up-dEQqW73_.js","assets/circle-check-tcBlT_VA.js","assets/BubblePage-D1XJOZlG.js","assets/TreeMapPage-WiSE0-AK.js","assets/ReferencePage-CPgh-zeH.js","assets/triangle-alert-DV9bGVwy.js","assets/cloud-upload-C64ZRYNx.js","assets/ResearchPage-BEwELMIP.js","assets/RegisterPage-Dh3Lv2_O.js","assets/wand-sparkles-DIR2bTfp.js","assets/phone-BRXHby1B.js","assets/ApprovalPage-BPs2f98a.js","assets/shield-alert-B76B8asA.js","assets/BatchImportModal-tPc-Yt-a.js","assets/SecurityAuditModal-DEMx4oGp.js"])))=>i.map(i=>d[i]);
var nx=Object.defineProperty;var ix=(r,e,t)=>e in r?nx(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var mg=(r,e,t)=>ix(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var RL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function xL(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var a=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,a.get?a:{enumerable:!0,get:function(){return r[i]}})}),t}var pg={exports:{}},Xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T;function rx(){if(_T)return Xu;_T=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:r,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Xu.Fragment=e,Xu.jsx=t,Xu.jsxs=t,Xu}var vT;function sx(){return vT||(vT=1,pg.exports=rx()),pg.exports}var A=sx(),gg={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET;function ax(){if(ET)return Se;ET=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.iterator;function D(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,Z={};function se(V,W,re){this.props=V,this.context=W,this.refs=Z,this.updater=re||F}se.prototype.isReactComponent={},se.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},se.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ce(){}ce.prototype=se.prototype;function ae(V,W,re){this.props=V,this.context=W,this.refs=Z,this.updater=re||F}var ge=ae.prototype=new ce;ge.constructor=ae,$(ge,se.prototype),ge.isPureReactComponent=!0;var Ae=Array.isArray;function X(){}var R={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function x(V,W,re){var me=re.ref;return{$$typeof:r,type:V,key:W,ref:me!==void 0?me:null,props:re}}function O(V,W){return x(V.type,W,V.props)}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function L(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(re){return W[re]})}var N=/\/+/g;function Bt(V,W){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):W.toString(36)}function en(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(X,X):(V.status="pending",V.then(function(W){V.status==="pending"&&(V.status="fulfilled",V.value=W)},function(W){V.status==="pending"&&(V.status="rejected",V.reason=W)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function Y(V,W,re,me,Ie){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var Be=!1;if(V===null)Be=!0;else switch(ke){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(V.$$typeof){case r:case e:Be=!0;break;case v:return Be=V._init,Y(Be(V._payload),W,re,me,Ie)}}if(Be)return Ie=Ie(V),Be=me===""?"."+Bt(V,0):me,Ae(Ie)?(re="",Be!=null&&(re=Be.replace(N,"$&/")+"/"),Y(Ie,W,re,"",function(Si){return Si})):Ie!=null&&(P(Ie)&&(Ie=O(Ie,re+(Ie.key==null||V&&V.key===Ie.key?"":(""+Ie.key).replace(N,"$&/")+"/")+Be)),W.push(Ie)),1;Be=0;var tn=me===""?".":me+":";if(Ae(V))for(var gt=0;gt<V.length;gt++)me=V[gt],ke=tn+Bt(me,gt),Be+=Y(me,W,re,ke,Ie);else if(gt=D(V),typeof gt=="function")for(V=gt.call(V),gt=0;!(me=V.next()).done;)me=me.value,ke=tn+Bt(me,gt++),Be+=Y(me,W,re,ke,Ie);else if(ke==="object"){if(typeof V.then=="function")return Y(en(V),W,re,me,Ie);throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Be}function le(V,W,re){if(V==null)return V;var me=[],Ie=0;return Y(V,me,"","",function(ke){return W.call(re,ke,Ie++)}),me}function Te(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(re){(V._status===0||V._status===-1)&&(V._status=1,V._result=re)},function(re){(V._status===0||V._status===-1)&&(V._status=2,V._result=re)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Ge=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},Xe={map:le,forEach:function(V,W,re){le(V,function(){W.apply(this,arguments)},re)},count:function(V){var W=0;return le(V,function(){W++}),W},toArray:function(V){return le(V,function(W){return W})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return Se.Activity=T,Se.Children=Xe,Se.Component=se,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=ae,Se.StrictMode=i,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Se.__COMPILER_RUNTIME={__proto__:null,c:function(V){return R.H.useMemoCache(V)}},Se.cache=function(V){return function(){return V.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(V,W,re){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var me=$({},V.props),Ie=V.key;if(W!=null)for(ke in W.key!==void 0&&(Ie=""+W.key),W)!S.call(W,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&W.ref===void 0||(me[ke]=W[ke]);var ke=arguments.length-2;if(ke===1)me.children=re;else if(1<ke){for(var Be=Array(ke),tn=0;tn<ke;tn++)Be[tn]=arguments[tn+2];me.children=Be}return x(V.type,Ie,me)},Se.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:l,_context:V},V},Se.createElement=function(V,W,re){var me,Ie={},ke=null;if(W!=null)for(me in W.key!==void 0&&(ke=""+W.key),W)S.call(W,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Ie[me]=W[me]);var Be=arguments.length-2;if(Be===1)Ie.children=re;else if(1<Be){for(var tn=Array(Be),gt=0;gt<Be;gt++)tn[gt]=arguments[gt+2];Ie.children=tn}if(V&&V.defaultProps)for(me in Be=V.defaultProps,Be)Ie[me]===void 0&&(Ie[me]=Be[me]);return x(V,ke,Ie)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:f,render:V}},Se.isValidElement=P,Se.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Te}},Se.memo=function(V,W){return{$$typeof:g,type:V,compare:W===void 0?null:W}},Se.startTransition=function(V){var W=R.T,re={};R.T=re;try{var me=V(),Ie=R.S;Ie!==null&&Ie(re,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(X,Ge)}catch(ke){Ge(ke)}finally{W!==null&&re.types!==null&&(W.types=re.types),R.T=W}},Se.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Se.use=function(V){return R.H.use(V)},Se.useActionState=function(V,W,re){return R.H.useActionState(V,W,re)},Se.useCallback=function(V,W){return R.H.useCallback(V,W)},Se.useContext=function(V){return R.H.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V,W){return R.H.useDeferredValue(V,W)},Se.useEffect=function(V,W){return R.H.useEffect(V,W)},Se.useEffectEvent=function(V){return R.H.useEffectEvent(V)},Se.useId=function(){return R.H.useId()},Se.useImperativeHandle=function(V,W,re){return R.H.useImperativeHandle(V,W,re)},Se.useInsertionEffect=function(V,W){return R.H.useInsertionEffect(V,W)},Se.useLayoutEffect=function(V,W){return R.H.useLayoutEffect(V,W)},Se.useMemo=function(V,W){return R.H.useMemo(V,W)},Se.useOptimistic=function(V,W){return R.H.useOptimistic(V,W)},Se.useReducer=function(V,W,re){return R.H.useReducer(V,W,re)},Se.useRef=function(V){return R.H.useRef(V)},Se.useState=function(V){return R.H.useState(V)},Se.useSyncExternalStore=function(V,W,re){return R.H.useSyncExternalStore(V,W,re)},Se.useTransition=function(){return R.H.useTransition()},Se.version="19.2.4",Se}var TT;function Ey(){return TT||(TT=1,gg.exports=ax()),gg.exports}var pe=Ey();const ox=Rw(pe);var yg={exports:{}},Wu={},_g={exports:{}},vg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bT;function lx(){return bT||(bT=1,(function(r){function e(Y,le){var Te=Y.length;Y.push(le);e:for(;0<Te;){var Ge=Te-1>>>1,Xe=Y[Ge];if(0<a(Xe,le))Y[Ge]=le,Y[Te]=Xe,Te=Ge;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var le=Y[0],Te=Y.pop();if(Te!==le){Y[0]=Te;e:for(var Ge=0,Xe=Y.length,V=Xe>>>1;Ge<V;){var W=2*(Ge+1)-1,re=Y[W],me=W+1,Ie=Y[me];if(0>a(re,Te))me<Xe&&0>a(Ie,re)?(Y[Ge]=Ie,Y[me]=Te,Ge=me):(Y[Ge]=re,Y[W]=Te,Ge=W);else if(me<Xe&&0>a(Ie,Te))Y[Ge]=Ie,Y[me]=Te,Ge=me;else break e}}return le}function a(Y,le){var Te=Y.sortIndex-le.sortIndex;return Te!==0?Te:Y.id-le.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,T=null,w=3,D=!1,F=!1,$=!1,Z=!1,se=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function ge(Y){for(var le=t(g);le!==null;){if(le.callback===null)i(g);else if(le.startTime<=Y)i(g),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(g)}}function Ae(Y){if($=!1,ge(Y),!F)if(t(p)!==null)F=!0,X||(X=!0,L());else{var le=t(g);le!==null&&en(Ae,le.startTime-Y)}}var X=!1,R=-1,S=5,x=-1;function O(){return Z?!0:!(r.unstable_now()-x<S)}function P(){if(Z=!1,X){var Y=r.unstable_now();x=Y;var le=!0;try{e:{F=!1,$&&($=!1,ce(R),R=-1),D=!0;var Te=w;try{t:{for(ge(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&O());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,w=T.priorityLevel;var Xe=Ge(T.expirationTime<=Y);if(Y=r.unstable_now(),typeof Xe=="function"){T.callback=Xe,ge(Y),le=!0;break t}T===t(p)&&i(p),ge(Y)}else i(p);T=t(p)}if(T!==null)le=!0;else{var V=t(g);V!==null&&en(Ae,V.startTime-Y),le=!1}}break e}finally{T=null,w=Te,D=!1}le=void 0}}finally{le?L():X=!1}}}var L;if(typeof ae=="function")L=function(){ae(P)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Bt=N.port2;N.port1.onmessage=P,L=function(){Bt.postMessage(null)}}else L=function(){se(P,0)};function en(Y,le){R=se(function(){Y(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var le=3;break;default:le=w}var Te=w;w=le;try{return Y()}finally{w=Te}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var Te=w;w=Y;try{return le()}finally{w=Te}},r.unstable_scheduleCallback=function(Y,le,Te){var Ge=r.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Ge+Te:Ge):Te=Ge,Y){case 1:var Xe=-1;break;case 2:Xe=250;break;case 5:Xe=1073741823;break;case 4:Xe=1e4;break;default:Xe=5e3}return Xe=Te+Xe,Y={id:v++,callback:le,priorityLevel:Y,startTime:Te,expirationTime:Xe,sortIndex:-1},Te>Ge?(Y.sortIndex=Te,e(g,Y),t(p)===null&&Y===t(g)&&($?(ce(R),R=-1):$=!0,en(Ae,Te-Ge))):(Y.sortIndex=Xe,e(p,Y),F||D||(F=!0,X||(X=!0,L()))),Y},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Y){var le=w;return function(){var Te=w;w=le;try{return Y.apply(this,arguments)}finally{w=Te}}}})(vg)),vg}var wT;function ux(){return wT||(wT=1,_g.exports=lx()),_g.exports}var Eg={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function cx(){if(IT)return gn;IT=1;var r=Ey();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,gn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},gn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},gn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},gn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},gn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:D}):v==="script"&&i.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},gn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},gn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},gn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=f(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},gn.requestFormReset=function(p){i.d.r(p)},gn.unstable_batchedUpdates=function(p,g){return p(g)},gn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},gn.useFormStatus=function(){return c.H.useHostTransitionStatus()},gn.version="19.2.4",gn}var AT;function hx(){if(AT)return Eg.exports;AT=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Eg.exports=cx(),Eg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST;function dx(){if(ST)return Wu;ST=1;var r=ux(),e=Ey(),t=hx();function i(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function f(n){if(n.tag===31){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(i(188))}function g(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(i(188));return s!==n?null:n}for(var o=n,u=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),n;if(m===u)return p(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=m;else{for(var _=!1,b=d.child;b;){if(b===o){_=!0,o=d,u=m;break}if(b===u){_=!0,u=d,o=m;break}b=b.sibling}if(!_){for(b=m.child;b;){if(b===o){_=!0,o=m,u=d;break}if(b===u){_=!0,u=m,o=d;break}b=b.sibling}if(!_)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:s}function v(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=v(n),s!==null)return s;n=n.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function Bt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $:return"Fragment";case se:return"Profiler";case Z:return"StrictMode";case Ae:return"Suspense";case X:return"SuspenseList";case x:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case F:return"Portal";case ae:return n.displayName||"Context";case ce:return(n._context.displayName||"Context")+".Consumer";case ge:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case R:return s=n.displayName||null,s!==null?s:Bt(n.type)||"Memo";case S:s=n._payload,n=n._init;try{return Bt(n(s))}catch{}}return null}var en=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Ge=[],Xe=-1;function V(n){return{current:n}}function W(n){0>Xe||(n.current=Ge[Xe],Ge[Xe]=null,Xe--)}function re(n,s){Xe++,Ge[Xe]=n.current,n.current=s}var me=V(null),Ie=V(null),ke=V(null),Be=V(null);function tn(n,s){switch(re(ke,s),re(Ie,n),re(me,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?BE(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=BE(s),n=qE(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(me),re(me,n)}function gt(){W(me),W(Ie),W(ke)}function Si(n){n.memoizedState!==null&&re(Be,n);var s=me.current,o=qE(s,n.type);s!==o&&(re(Ie,n),re(me,o))}function Zi(n){Ie.current===n&&(W(me),W(Ie)),Be.current===n&&(W(Be),Ku._currentValue=Te)}var ia,fo;function gi(n){if(ia===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ia=s&&s[1]||"",fo=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+n+fo}var ra=!1;function mo(n,s){if(!n||ra)return"";ra=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(G){var q=G}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(G){q=G}n.call(ee.prototype)}}else{try{throw Error()}catch(G){q=G}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(G){if(G&&q&&typeof G.stack=="string")return[G.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),_=m[0],b=m[1];if(_&&b){var C=_.split(`
`),j=b.split(`
`);for(d=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;if(u===C.length||d===j.length)for(u=C.length-1,d=j.length-1;1<=u&&0<=d&&C[u]!==j[d];)d--;for(;1<=u&&0<=d;u--,d--)if(C[u]!==j[d]){if(u!==1||d!==1)do if(u--,d--,0>d||C[u]!==j[d]){var Q=`
`+C[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=d);break}}}finally{ra=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?gi(o):""}function hm(n,s){switch(n.tag){case 26:case 27:case 5:return gi(n.type);case 16:return gi("Lazy");case 13:return n.child!==s&&s!==null?gi("Suspense Fallback"):gi("Suspense");case 19:return gi("SuspenseList");case 0:case 15:return mo(n.type,!1);case 11:return mo(n.type.render,!1);case 1:return mo(n.type,!0);case 31:return gi("Activity");default:return""}}function mh(n){try{var s="",o=null;do s+=hm(n,o),o=n,n=n.return;while(n);return s}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var po=Object.prototype.hasOwnProperty,sa=r.unstable_scheduleCallback,go=r.unstable_cancelCallback,dm=r.unstable_shouldYield,$l=r.unstable_requestPaint,nn=r.unstable_now,ph=r.unstable_getCurrentPriorityLevel,qt=r.unstable_ImmediatePriority,Kt=r.unstable_UserBlockingPriority,er=r.unstable_NormalPriority,gh=r.unstable_LowPriority,Xl=r.unstable_IdlePriority,fm=r.log,aa=r.unstable_setDisableYieldValue,jr=null,mn=null;function ti(n){if(typeof fm=="function"&&aa(n),mn&&typeof mn.setStrictMode=="function")try{mn.setStrictMode(jr,n)}catch{}}var vn=Math.clz32?Math.clz32:yh,mm=Math.log,Wl=Math.LN2;function yh(n){return n>>>=0,n===0?32:31-(mm(n)/Wl|0)|0}var oa=256,Ri=262144,Br=4194304;function yi(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ni(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,m=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var b=u&134217727;return b!==0?(u=b&~m,u!==0?d=yi(u):(_&=b,_!==0?d=yi(_):o||(o=b&~n,o!==0&&(d=yi(o))))):(b=u&~m,b!==0?d=yi(b):_!==0?d=yi(_):o||(o=u&~n,o!==0&&(d=yi(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function qr(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function yo(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jl(){var n=Br;return Br<<=1,(Br&62914560)===0&&(Br=4194304),n}function tr(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Fr(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function rn(n,s,o,u,d,m){var _=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var b=n.entanglements,C=n.expirationTimes,j=n.hiddenUpdates;for(o=_&~o;0<o;){var Q=31-vn(o),ee=1<<Q;b[Q]=0,C[Q]=-1;var q=j[Q];if(q!==null)for(j[Q]=null,Q=0;Q<q.length;Q++){var G=q[Q];G!==null&&(G.lane&=-536870913)}o&=~ee}u!==0&&Zl(n,u,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(_&~s))}function Zl(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-vn(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function Gr(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-vn(o),d=1<<u;d&s|n[u]&s&&(n[u]|=s),o&=~d}}function Hr(n,s){var o=s&-s;return o=(o&42)!==0?1:eu(o),(o&(n.suspendedLanes|s))!==0?0:o}function eu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function tu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function nr(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:hT(n.type))}function _h(n,s){var o=le.p;try{return le.p=n,s()}finally{le.p=o}}var xi=Math.random().toString(36).slice(2),vt="__reactFiber$"+xi,sn="__reactProps$"+xi,Ci="__reactContainer$"+xi,Kr="__reactEvents$"+xi,Ni="__reactListeners$"+xi,vh="__reactHandles$"+xi,nu="__reactResources$"+xi,ir="__reactMarker$"+xi;function la(n){delete n[vt],delete n[sn],delete n[Kr],delete n[Ni],delete n[vh]}function rr(n){var s=n[vt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Ci]||o[vt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=$E(n);n!==null;){if(o=n[vt])return o;n=$E(n)}return s}n=o,o=n.parentNode}return null}function sr(n){if(n=n[vt]||n[Ci]){var s=n.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return n}return null}function ua(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(i(33))}function _i(n){var s=n[nu];return s||(s=n[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function xt(n){n[ir]=!0}var _o=new Set,Qr={};function En(n,s){Di(n,s),Di(n+"Capture",s)}function Di(n,s){for(Qr[n]=s,n=0;n<s.length;n++)_o.add(s[n])}var pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iu={},ru={};function Eh(n){return po.call(ru,n)?!0:po.call(iu,n)?!1:pm.test(n)?ru[n]=!0:(iu[n]=!0,!1)}function Yr(n,s,o){if(Eh(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function $r(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function ii(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}function Tn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Th(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function gm(n,s,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,s);if(!n.hasOwnProperty(s)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,m=u.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(_){o=""+_,m.call(this,_)}}),Object.defineProperty(n,s,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function vo(n){if(!n._valueTracker){var s=Th(n)?"checked":"value";n._valueTracker=gm(n,s,""+n[s])}}function su(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=Th(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Eo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ar=/[\n"\\]/g;function Et(n){return n.replace(ar,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Xr(n,s,o,u,d,m,_,b){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),s!=null?_==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+Tn(s)):n.value!==""+Tn(s)&&(n.value=""+Tn(s)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),s!=null?To(n,_,Tn(s)):o!=null?To(n,_,Tn(o)):u!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+Tn(b):n.removeAttribute("name")}function ca(n,s,o,u,d,m,_,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){vo(n);return}o=o!=null?""+Tn(o):"",s=s!=null?""+Tn(s):o,b||s===n.value||(n.value=s),n.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=b?n.checked:!!u,n.defaultChecked=!!u,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_),vo(n)}function To(n,s,o){s==="number"&&Eo(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function He(n,s,o,u){if(n=n.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=s.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Tn(o),s=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function ha(n,s,o){if(s!=null&&(s=""+Tn(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+Tn(o):""}function Wr(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(en(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Tn(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),vo(n)}function ri(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var ym=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function au(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||ym.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function bh(n,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&au(n,d,u)}else for(var m in s)s.hasOwnProperty(m)&&au(n,m,s[m])}function ou(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ki(n){return vm.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Qt(){}var bo=null;function wo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var or=null,Fn=null;function wh(n){var s=sr(n);if(s&&(n=s.stateNode)){var o=n[sn]||null;e:switch(n=s.stateNode,s.type){case"input":if(Xr(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var d=u[sn]||null;if(!d)throw Error(i(90));Xr(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&su(u)}break e;case"textarea":ha(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&He(n,!!o.multiple,s,!1)}}}var lu=!1;function Ih(n,s,o){if(lu)return n(s,o);lu=!0;try{var u=n(s);return u}finally{if(lu=!1,(or!==null||Fn!==null)&&(Ed(),or&&(s=or,n=Fn,Fn=or=null,wh(s),n)))for(s=0;s<n.length;s++)wh(n[s])}}function Dn(n,s){var o=n.stateNode;if(o===null)return null;var u=o[sn]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(vi)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{uu=!1}var Gn=null,Io=null,Vi=null;function Jr(){if(Vi)return Vi;var n,s=Io,o=s.length,u,d="value"in Gn?Gn.value:Gn.textContent,m=d.length;for(n=0;n<o&&s[n]===d[n];n++);var _=o-n;for(u=1;u<=_&&s[o-u]===d[m-u];u++);return Vi=d.slice(n,1<u?1-u:void 0)}function da(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Zr(){return!0}function ot(){return!1}function pn(n){function s(o,u,d,m,_){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(o=n[b],this[b]=o?o(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zr:ot,this.isPropagationStopped=ot,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),s}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=pn(lr),es=T({},lr,{view:0,detail:0}),Ah=pn(es),ts,Ao,bn,ma=T({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bn&&(bn&&n.type==="mousemove"?(ts=n.screenX-bn.screenX,Ao=n.screenY-bn.screenY):Ao=ts=0,bn=n),ts)},movementY:function(n){return"movementY"in n?n.movementY:Ao}}),Sh=pn(ma),pa=T({},ma,{dataTransfer:0}),Rh=pn(pa),cu=T({},es,{relatedTarget:0}),ns=pn(cu),xh=T({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),So=pn(xh),Em=T({},lr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ch=pn(Em),ga=T({},lr,{data:0}),hu=pn(ga),Nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},du={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dh(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=fu[n])?!!s[n]:!1}function is(){return Dh}var kh=T({},es,{key:function(n){if(n.key){var s=Nh[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?du[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Oh=pn(kh),ur=T({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=pn(ur),Vh=T({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Ph=pn(Vh),Mh=T({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ro=pn(Mh),wn=T({},ma,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=pn(wn),Uh=T({},lr,{newState:0,oldState:0}),rs=pn(Uh),h=[9,13,27,32],y=vi&&"CompositionEvent"in window,E=null;vi&&"documentMode"in document&&(E=document.documentMode);var I=vi&&"TextEvent"in window&&!E,U=vi&&(!y||E&&8<E&&11>=E),K=" ",oe=!1;function We(n,s){switch(n){case"keyup":return h.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vt(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Oe=!1;function Yt(n,s){switch(n){case"compositionend":return Vt(s);case"keypress":return s.which!==32?null:(oe=!0,K);case"textInput":return n=s.data,n===K&&oe?null:n;default:return null}}function $t(n,s){if(Oe)return n==="compositionend"||!y&&We(n,s)?(n=Jr(),Vi=Io=Gn=null,Oe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return U&&s.locale!=="ko"?null:s.data;default:return null}}var ss={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kn(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!ss[n.type]:s==="textarea"}function ya(n,s,o,u){or?Fn?Fn.push(u):Fn=[u]:or=u,s=Rd(s,"onChange"),0<s.length&&(o=new fa("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var cr=null,pu=null;function C1(n){PE(n,0)}function zh(n){var s=ua(n);if(su(s))return n}function ev(n,s){if(n==="change")return s}var tv=!1;if(vi){var Tm;if(vi){var bm="oninput"in document;if(!bm){var nv=document.createElement("div");nv.setAttribute("oninput","return;"),bm=typeof nv.oninput=="function"}Tm=bm}else Tm=!1;tv=Tm&&(!document.documentMode||9<document.documentMode)}function iv(){cr&&(cr.detachEvent("onpropertychange",rv),pu=cr=null)}function rv(n){if(n.propertyName==="value"&&zh(pu)){var s=[];ya(s,pu,n,wo(n)),Ih(C1,s)}}function N1(n,s,o){n==="focusin"?(iv(),cr=s,pu=o,cr.attachEvent("onpropertychange",rv)):n==="focusout"&&iv()}function D1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zh(pu)}function k1(n,s){if(n==="click")return zh(s)}function O1(n,s){if(n==="input"||n==="change")return zh(s)}function V1(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Hn=typeof Object.is=="function"?Object.is:V1;function gu(n,s){if(Hn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!po.call(s,d)||!Hn(n[d],s[d]))return!1}return!0}function sv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function av(n,s){var o=sv(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=sv(o)}}function ov(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?ov(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function lv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Eo(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Eo(n.document)}return s}function wm(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var P1=vi&&"documentMode"in document&&11>=document.documentMode,xo=null,Im=null,yu=null,Am=!1;function uv(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Am||xo==null||xo!==Eo(u)||(u=xo,"selectionStart"in u&&wm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),yu&&gu(yu,u)||(yu=u,u=Rd(Im,"onSelect"),0<u.length&&(s=new fa("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=xo)))}function _a(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Co={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Sm={},cv={};vi&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function va(n){if(Sm[n])return Sm[n];if(!Co[n])return n;var s=Co[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in cv)return Sm[n]=s[o];return n}var hv=va("animationend"),dv=va("animationiteration"),fv=va("animationstart"),M1=va("transitionrun"),L1=va("transitionstart"),U1=va("transitioncancel"),mv=va("transitionend"),pv=new Map,Rm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rm.push("scrollEnd");function Ei(n,s){pv.set(n,s),En(s,[n])}var jh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},si=[],No=0,xm=0;function Bh(){for(var n=No,s=xm=No=0;s<n;){var o=si[s];si[s++]=null;var u=si[s];si[s++]=null;var d=si[s];si[s++]=null;var m=si[s];if(si[s++]=null,u!==null&&d!==null){var _=u.pending;_===null?d.next=d:(d.next=_.next,_.next=d),u.pending=d}m!==0&&gv(o,d,m)}}function qh(n,s,o,u){si[No++]=n,si[No++]=s,si[No++]=o,si[No++]=u,xm|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Cm(n,s,o,u){return qh(n,s,o,u),Fh(n)}function Ea(n,s){return qh(n,null,null,s),Fh(n)}function gv(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&s!==null&&(d=31-vn(o),n=m.hiddenUpdates,u=n[d],u===null?n[d]=[s]:u.push(s),s.lane=o|536870912),m):null}function Fh(n){if(50<zu)throw zu=0,Up=null,Error(i(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Do={};function z1(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,s,o,u){return new z1(n,s,o,u)}function Nm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hr(n,s){var o=n.alternate;return o===null?(o=Kn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Gh(n,s,o,u,d,m){var _=0;if(u=n,typeof n=="function")Nm(n)&&(_=1);else if(typeof n=="string")_=GR(n,o,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case x:return n=Kn(31,o,s,d),n.elementType=x,n.lanes=m,n;case $:return Ta(o.children,d,m,s);case Z:_=8,d|=24;break;case se:return n=Kn(12,o,s,d|2),n.elementType=se,n.lanes=m,n;case Ae:return n=Kn(13,o,s,d),n.elementType=Ae,n.lanes=m,n;case X:return n=Kn(19,o,s,d),n.elementType=X,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ae:_=10;break e;case ce:_=9;break e;case ge:_=11;break e;case R:_=14;break e;case S:_=16,u=null;break e}_=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return s=Kn(_,o,s,d),s.elementType=n,s.type=u,s.lanes=m,s}function Ta(n,s,o,u){return n=Kn(7,n,u,s),n.lanes=o,n}function Dm(n,s,o){return n=Kn(6,n,null,s),n.lanes=o,n}function _v(n){var s=Kn(18,null,null,0);return s.stateNode=n,s}function km(n,s,o){return s=Kn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var vv=new WeakMap;function ai(n,s){if(typeof n=="object"&&n!==null){var o=vv.get(n);return o!==void 0?o:(s={value:n,source:s,stack:mh(s)},vv.set(n,s),s)}return{value:n,source:s,stack:mh(s)}}var ko=[],Oo=0,Hh=null,_u=0,oi=[],li=0,as=null,Pi=1,Mi="";function dr(n,s){ko[Oo++]=_u,ko[Oo++]=Hh,Hh=n,_u=s}function Ev(n,s,o){oi[li++]=Pi,oi[li++]=Mi,oi[li++]=as,as=n;var u=Pi;n=Mi;var d=32-vn(u)-1;u&=~(1<<d),o+=1;var m=32-vn(s)+d;if(30<m){var _=d-d%5;m=(u&(1<<_)-1).toString(32),u>>=_,d-=_,Pi=1<<32-vn(s)+d|o<<d|u,Mi=m+n}else Pi=1<<m|o<<d|u,Mi=n}function Om(n){n.return!==null&&(dr(n,1),Ev(n,1,0))}function Vm(n){for(;n===Hh;)Hh=ko[--Oo],ko[Oo]=null,_u=ko[--Oo],ko[Oo]=null;for(;n===as;)as=oi[--li],oi[li]=null,Mi=oi[--li],oi[li]=null,Pi=oi[--li],oi[li]=null}function Tv(n,s){oi[li++]=Pi,oi[li++]=Mi,oi[li++]=as,Pi=s.id,Mi=s.overflow,as=n}var an=null,lt=null,qe=!1,os=null,ui=!1,Pm=Error(i(519));function ls(n){var s=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vu(ai(s,n)),Pm}function bv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[vt]=n,s[sn]=u,o){case"dialog":Pe("cancel",s),Pe("close",s);break;case"iframe":case"object":case"embed":Pe("load",s);break;case"video":case"audio":for(o=0;o<Bu.length;o++)Pe(Bu[o],s);break;case"source":Pe("error",s);break;case"img":case"image":case"link":Pe("error",s),Pe("load",s);break;case"details":Pe("toggle",s);break;case"input":Pe("invalid",s),ca(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Pe("invalid",s);break;case"textarea":Pe("invalid",s),Wr(s,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||zE(s.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",s),Pe("toggle",s)),u.onScroll!=null&&Pe("scroll",s),u.onScrollEnd!=null&&Pe("scrollend",s),u.onClick!=null&&(s.onclick=Qt),s=!0):s=!1,s||ls(n,!0)}function wv(n){for(an=n.return;an;)switch(an.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:an=an.return}}function Vo(n){if(n!==an)return!1;if(!qe)return wv(n),qe=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Zp(n.type,n.memoizedProps)),o=!o),o&&lt&&ls(n),wv(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));lt=YE(n)}else if(s===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));lt=YE(n)}else s===27?(s=lt,bs(n.type)?(n=rg,rg=null,lt=n):lt=s):lt=an?hi(n.stateNode.nextSibling):null;return!0}function ba(){lt=an=null,qe=!1}function Mm(){var n=os;return n!==null&&(Mn===null?Mn=n:Mn.push.apply(Mn,n),os=null),n}function vu(n){os===null?os=[n]:os.push(n)}var Lm=V(null),wa=null,fr=null;function us(n,s,o){re(Lm,s._currentValue),s._currentValue=o}function mr(n){n._currentValue=Lm.current,W(Lm)}function Um(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function zm(n,s,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var _=d.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=d;for(var C=0;C<s.length;C++)if(b.context===s[C]){m.lanes|=o,b=m.alternate,b!==null&&(b.lanes|=o),Um(m.return,o,n),u||(_=null);break e}m=b.next}}else if(d.tag===18){if(_=d.return,_===null)throw Error(i(341));_.lanes|=o,m=_.alternate,m!==null&&(m.lanes|=o),Um(_,o,n),_=null}else _=d.child;if(_!==null)_.return=d;else for(_=d;_!==null;){if(_===n){_=null;break}if(d=_.sibling,d!==null){d.return=_.return,_=d;break}_=_.return}d=_}}function Po(n,s,o,u){n=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var _=d.alternate;if(_===null)throw Error(i(387));if(_=_.memoizedProps,_!==null){var b=d.type;Hn(d.pendingProps.value,_.value)||(n!==null?n.push(b):n=[b])}}else if(d===Be.current){if(_=d.alternate,_===null)throw Error(i(387));_.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Ku):n=[Ku])}d=d.return}n!==null&&zm(s,n,o,u),s.flags|=262144}function Kh(n){for(n=n.firstContext;n!==null;){if(!Hn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ia(n){wa=n,fr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function on(n){return Iv(wa,n)}function Qh(n,s){return wa===null&&Ia(n),Iv(n,s)}function Iv(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},fr===null){if(n===null)throw Error(i(308));fr=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else fr=fr.next=s;return o}var j1=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},B1=r.unstable_scheduleCallback,q1=r.unstable_NormalPriority,Pt={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jm(){return{controller:new j1,data:new Map,refCount:0}}function Eu(n){n.refCount--,n.refCount===0&&B1(q1,function(){n.controller.abort()})}var Tu=null,Bm=0,Mo=0,Lo=null;function F1(n,s){if(Tu===null){var o=Tu=[];Bm=0,Mo=Gp(),Lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Bm++,s.then(Av,Av),s}function Av(){if(--Bm===0&&Tu!==null){Lo!==null&&(Lo.status="fulfilled");var n=Tu;Tu=null,Mo=0,Lo=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function G1(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var Sv=Y.S;Y.S=function(n,s){uE=nn(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&F1(n,s),Sv!==null&&Sv(n,s)};var Aa=V(null);function qm(){var n=Aa.current;return n!==null?n:st.pooledCache}function Yh(n,s){s===null?re(Aa,Aa.current):re(Aa,s.pool)}function Rv(){var n=qm();return n===null?null:{parent:Pt._currentValue,pool:n}}var Uo=Error(i(460)),Fm=Error(i(474)),$h=Error(i(542)),Xh={then:function(){}};function xv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Cv(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Qt,Qt),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Dv(n),n;default:if(typeof s.status=="string")s.then(Qt,Qt);else{if(n=st,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Dv(n),n}throw Ra=s,Uo}}function Sa(n){try{var s=n._init;return s(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ra=o,Uo):o}}var Ra=null;function Nv(){if(Ra===null)throw Error(i(459));var n=Ra;return Ra=null,n}function Dv(n){if(n===Uo||n===$h)throw Error(i(483))}var zo=null,bu=0;function Wh(n){var s=bu;return bu+=1,zo===null&&(zo=[]),Cv(zo,n,s)}function wu(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Jh(n,s){throw s.$$typeof===w?Error(i(525)):(n=Object.prototype.toString.call(s),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function kv(n){function s(M,k){if(n){var z=M.deletions;z===null?(M.deletions=[k],M.flags|=16):z.push(k)}}function o(M,k){if(!n)return null;for(;k!==null;)s(M,k),k=k.sibling;return null}function u(M){for(var k=new Map;M!==null;)M.key!==null?k.set(M.key,M):k.set(M.index,M),M=M.sibling;return k}function d(M,k){return M=hr(M,k),M.index=0,M.sibling=null,M}function m(M,k,z){return M.index=z,n?(z=M.alternate,z!==null?(z=z.index,z<k?(M.flags|=67108866,k):z):(M.flags|=67108866,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function b(M,k,z,J){return k===null||k.tag!==6?(k=Dm(z,M.mode,J),k.return=M,k):(k=d(k,z),k.return=M,k)}function C(M,k,z,J){var Ee=z.type;return Ee===$?Q(M,k,z.props.children,J,z.key):k!==null&&(k.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===S&&Sa(Ee)===k.type)?(k=d(k,z.props),wu(k,z),k.return=M,k):(k=Gh(z.type,z.key,z.props,null,M.mode,J),wu(k,z),k.return=M,k)}function j(M,k,z,J){return k===null||k.tag!==4||k.stateNode.containerInfo!==z.containerInfo||k.stateNode.implementation!==z.implementation?(k=km(z,M.mode,J),k.return=M,k):(k=d(k,z.children||[]),k.return=M,k)}function Q(M,k,z,J,Ee){return k===null||k.tag!==7?(k=Ta(z,M.mode,J,Ee),k.return=M,k):(k=d(k,z),k.return=M,k)}function ee(M,k,z){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Dm(""+k,M.mode,z),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case D:return z=Gh(k.type,k.key,k.props,null,M.mode,z),wu(z,k),z.return=M,z;case F:return k=km(k,M.mode,z),k.return=M,k;case S:return k=Sa(k),ee(M,k,z)}if(en(k)||L(k))return k=Ta(k,M.mode,z,null),k.return=M,k;if(typeof k.then=="function")return ee(M,Wh(k),z);if(k.$$typeof===ae)return ee(M,Qh(M,k),z);Jh(M,k)}return null}function q(M,k,z,J){var Ee=k!==null?k.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return Ee!==null?null:b(M,k,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return z.key===Ee?C(M,k,z,J):null;case F:return z.key===Ee?j(M,k,z,J):null;case S:return z=Sa(z),q(M,k,z,J)}if(en(z)||L(z))return Ee!==null?null:Q(M,k,z,J,null);if(typeof z.then=="function")return q(M,k,Wh(z),J);if(z.$$typeof===ae)return q(M,k,Qh(M,z),J);Jh(M,z)}return null}function G(M,k,z,J,Ee){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return M=M.get(z)||null,b(k,M,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return M=M.get(J.key===null?z:J.key)||null,C(k,M,J,Ee);case F:return M=M.get(J.key===null?z:J.key)||null,j(k,M,J,Ee);case S:return J=Sa(J),G(M,k,z,J,Ee)}if(en(J)||L(J))return M=M.get(z)||null,Q(k,M,J,Ee,null);if(typeof J.then=="function")return G(M,k,z,Wh(J),Ee);if(J.$$typeof===ae)return G(M,k,z,Qh(k,J),Ee);Jh(k,J)}return null}function fe(M,k,z,J){for(var Ee=null,Ke=null,_e=k,De=k=0,Ue=null;_e!==null&&De<z.length;De++){_e.index>De?(Ue=_e,_e=null):Ue=_e.sibling;var Qe=q(M,_e,z[De],J);if(Qe===null){_e===null&&(_e=Ue);break}n&&_e&&Qe.alternate===null&&s(M,_e),k=m(Qe,k,De),Ke===null?Ee=Qe:Ke.sibling=Qe,Ke=Qe,_e=Ue}if(De===z.length)return o(M,_e),qe&&dr(M,De),Ee;if(_e===null){for(;De<z.length;De++)_e=ee(M,z[De],J),_e!==null&&(k=m(_e,k,De),Ke===null?Ee=_e:Ke.sibling=_e,Ke=_e);return qe&&dr(M,De),Ee}for(_e=u(_e);De<z.length;De++)Ue=G(_e,M,De,z[De],J),Ue!==null&&(n&&Ue.alternate!==null&&_e.delete(Ue.key===null?De:Ue.key),k=m(Ue,k,De),Ke===null?Ee=Ue:Ke.sibling=Ue,Ke=Ue);return n&&_e.forEach(function(Rs){return s(M,Rs)}),qe&&dr(M,De),Ee}function we(M,k,z,J){if(z==null)throw Error(i(151));for(var Ee=null,Ke=null,_e=k,De=k=0,Ue=null,Qe=z.next();_e!==null&&!Qe.done;De++,Qe=z.next()){_e.index>De?(Ue=_e,_e=null):Ue=_e.sibling;var Rs=q(M,_e,Qe.value,J);if(Rs===null){_e===null&&(_e=Ue);break}n&&_e&&Rs.alternate===null&&s(M,_e),k=m(Rs,k,De),Ke===null?Ee=Rs:Ke.sibling=Rs,Ke=Rs,_e=Ue}if(Qe.done)return o(M,_e),qe&&dr(M,De),Ee;if(_e===null){for(;!Qe.done;De++,Qe=z.next())Qe=ee(M,Qe.value,J),Qe!==null&&(k=m(Qe,k,De),Ke===null?Ee=Qe:Ke.sibling=Qe,Ke=Qe);return qe&&dr(M,De),Ee}for(_e=u(_e);!Qe.done;De++,Qe=z.next())Qe=G(_e,M,De,Qe.value,J),Qe!==null&&(n&&Qe.alternate!==null&&_e.delete(Qe.key===null?De:Qe.key),k=m(Qe,k,De),Ke===null?Ee=Qe:Ke.sibling=Qe,Ke=Qe);return n&&_e.forEach(function(tx){return s(M,tx)}),qe&&dr(M,De),Ee}function it(M,k,z,J){if(typeof z=="object"&&z!==null&&z.type===$&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case D:e:{for(var Ee=z.key;k!==null;){if(k.key===Ee){if(Ee=z.type,Ee===$){if(k.tag===7){o(M,k.sibling),J=d(k,z.props.children),J.return=M,M=J;break e}}else if(k.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===S&&Sa(Ee)===k.type){o(M,k.sibling),J=d(k,z.props),wu(J,z),J.return=M,M=J;break e}o(M,k);break}else s(M,k);k=k.sibling}z.type===$?(J=Ta(z.props.children,M.mode,J,z.key),J.return=M,M=J):(J=Gh(z.type,z.key,z.props,null,M.mode,J),wu(J,z),J.return=M,M=J)}return _(M);case F:e:{for(Ee=z.key;k!==null;){if(k.key===Ee)if(k.tag===4&&k.stateNode.containerInfo===z.containerInfo&&k.stateNode.implementation===z.implementation){o(M,k.sibling),J=d(k,z.children||[]),J.return=M,M=J;break e}else{o(M,k);break}else s(M,k);k=k.sibling}J=km(z,M.mode,J),J.return=M,M=J}return _(M);case S:return z=Sa(z),it(M,k,z,J)}if(en(z))return fe(M,k,z,J);if(L(z)){if(Ee=L(z),typeof Ee!="function")throw Error(i(150));return z=Ee.call(z),we(M,k,z,J)}if(typeof z.then=="function")return it(M,k,Wh(z),J);if(z.$$typeof===ae)return it(M,k,Qh(M,z),J);Jh(M,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,k!==null&&k.tag===6?(o(M,k.sibling),J=d(k,z),J.return=M,M=J):(o(M,k),J=Dm(z,M.mode,J),J.return=M,M=J),_(M)):o(M,k)}return function(M,k,z,J){try{bu=0;var Ee=it(M,k,z,J);return zo=null,Ee}catch(_e){if(_e===Uo||_e===$h)throw _e;var Ke=Kn(29,_e,null,M.mode);return Ke.lanes=J,Ke.return=M,Ke}finally{}}}var xa=kv(!0),Ov=kv(!1),cs=!1;function Gm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function hs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ds(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=Fh(n),gv(n,null,o),s}return qh(n,u,s,o),Fh(n)}function Iu(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Gr(n,o)}}function Km(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var _={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=_:m=m.next=_,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Qm=!1;function Au(){if(Qm){var n=Lo;if(n!==null)throw n}}function Su(n,s,o,u){Qm=!1;var d=n.updateQueue;cs=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var C=b,j=C.next;C.next=null,_===null?m=j:_.next=j,_=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,b=Q.lastBaseUpdate,b!==_&&(b===null?Q.firstBaseUpdate=j:b.next=j,Q.lastBaseUpdate=C))}if(m!==null){var ee=d.baseState;_=0,Q=j=C=null,b=m;do{var q=b.lane&-536870913,G=q!==b.lane;if(G?(Le&q)===q:(u&q)===q){q!==0&&q===Mo&&(Qm=!0),Q!==null&&(Q=Q.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var fe=n,we=b;q=s;var it=o;switch(we.tag){case 1:if(fe=we.payload,typeof fe=="function"){ee=fe.call(it,ee,q);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=we.payload,q=typeof fe=="function"?fe.call(it,ee,q):fe,q==null)break e;ee=T({},ee,q);break e;case 2:cs=!0}}q=b.callback,q!==null&&(n.flags|=64,G&&(n.flags|=8192),G=d.callbacks,G===null?d.callbacks=[q]:G.push(q))}else G={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Q===null?(j=Q=G,C=ee):Q=Q.next=G,_|=q;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;G=b,b=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);Q===null&&(C=ee),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,m===null&&(d.shared.lanes=0),ys|=_,n.lanes=_,n.memoizedState=ee}}function Vv(n,s){if(typeof n!="function")throw Error(i(191,n));n.call(s)}function Pv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Vv(o[n],s)}var jo=V(null),Zh=V(0);function Mv(n,s){n=wr,re(Zh,n),re(jo,s),wr=n|s.baseLanes}function Ym(){re(Zh,wr),re(jo,jo.current)}function $m(){wr=Zh.current,W(jo),W(Zh)}var Qn=V(null),ci=null;function fs(n){var s=n.alternate;re(Ct,Ct.current&1),re(Qn,n),ci===null&&(s===null||jo.current!==null||s.memoizedState!==null)&&(ci=n)}function Xm(n){re(Ct,Ct.current),re(Qn,n),ci===null&&(ci=n)}function Lv(n){n.tag===22?(re(Ct,Ct.current),re(Qn,n),ci===null&&(ci=n)):ms()}function ms(){re(Ct,Ct.current),re(Qn,Qn.current)}function Yn(n){W(Qn),ci===n&&(ci=null),W(Ct)}var Ct=V(0);function ed(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||ng(o)||ig(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pr=0,Ce=null,tt=null,Mt=null,td=!1,Bo=!1,Ca=!1,nd=0,Ru=0,qo=null,H1=0;function Tt(){throw Error(i(321))}function Wm(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!Hn(n[o],s[o]))return!1;return!0}function Jm(n,s,o,u,d,m){return pr=m,Ce=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=n===null||n.memoizedState===null?E0:fp,Ca=!1,m=o(u,d),Ca=!1,Bo&&(m=zv(s,o,u,d)),Uv(n),m}function Uv(n){Y.H=Nu;var s=tt!==null&&tt.next!==null;if(pr=0,Mt=tt=Ce=null,td=!1,Ru=0,qo=null,s)throw Error(i(300));n===null||Lt||(n=n.dependencies,n!==null&&Kh(n)&&(Lt=!0))}function zv(n,s,o,u){Ce=n;var d=0;do{if(Bo&&(qo=null),Ru=0,Bo=!1,25<=d)throw Error(i(301));if(d+=1,Mt=tt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=T0,m=s(o,u)}while(Bo);return m}function K1(){var n=Y.H,s=n.useState()[0];return s=typeof s.then=="function"?xu(s):s,n=n.useState()[0],(tt!==null?tt.memoizedState:null)!==n&&(Ce.flags|=1024),s}function Zm(){var n=nd!==0;return nd=0,n}function ep(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function tp(n){if(td){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}td=!1}pr=0,Mt=tt=Ce=null,Bo=!1,Ru=nd=0,qo=null}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?Ce.memoizedState=Mt=n:Mt=Mt.next=n,Mt}function Nt(){if(tt===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=tt.next;var s=Mt===null?Ce.memoizedState:Mt.next;if(s!==null)Mt=s,tt=n;else{if(n===null)throw Ce.alternate===null?Error(i(467)):Error(i(310));tt=n,n={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Mt===null?Ce.memoizedState=Mt=n:Mt=Mt.next=n}return Mt}function id(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xu(n){var s=Ru;return Ru+=1,qo===null&&(qo=[]),n=Cv(qo,n,s),s=Ce,(Mt===null?s.memoizedState:Mt.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?E0:fp),n}function rd(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return xu(n);if(n.$$typeof===ae)return on(n)}throw Error(i(438,String(n)))}function np(n){var s=null,o=Ce.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=id(),Ce.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=O;return s.index++,o}function gr(n,s){return typeof s=="function"?s(n):s}function sd(n){var s=Nt();return ip(s,tt,n)}function ip(n,s,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,m=u.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}s.baseQueue=d=m,u.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{s=d.next;var b=_=null,C=null,j=s,Q=!1;do{var ee=j.lane&-536870913;if(ee!==j.lane?(Le&ee)===ee:(pr&ee)===ee){var q=j.revertLane;if(q===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),ee===Mo&&(Q=!0);else if((pr&q)===q){j=j.next,q===Mo&&(Q=!0);continue}else ee={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},C===null?(b=C=ee,_=m):C=C.next=ee,Ce.lanes|=q,ys|=q;ee=j.action,Ca&&o(m,ee),m=j.hasEagerState?j.eagerState:o(m,ee)}else q={lane:ee,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},C===null?(b=C=q,_=m):C=C.next=q,Ce.lanes|=ee,ys|=ee;j=j.next}while(j!==null&&j!==s);if(C===null?_=m:C.next=b,!Hn(m,n.memoizedState)&&(Lt=!0,Q&&(o=Lo,o!==null)))throw o;n.memoizedState=m,n.baseState=_,n.baseQueue=C,u.lastRenderedState=m}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function rp(n){var s=Nt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);Hn(m,s.memoizedState)||(Lt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function jv(n,s,o){var u=Ce,d=Nt(),m=qe;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var _=!Hn((tt||d).memoizedState,o);if(_&&(d.memoizedState=o,Lt=!0),d=d.queue,op(Fv.bind(null,u,d,n),[n]),d.getSnapshot!==s||_||Mt!==null&&Mt.memoizedState.tag&1){if(u.flags|=2048,Fo(9,{destroy:void 0},qv.bind(null,u,d,o,s),null),st===null)throw Error(i(349));m||(pr&127)!==0||Bv(u,s,o)}return o}function Bv(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ce.updateQueue,s===null?(s=id(),Ce.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function qv(n,s,o,u){s.value=o,s.getSnapshot=u,Gv(s)&&Hv(n)}function Fv(n,s,o){return o(function(){Gv(s)&&Hv(n)})}function Gv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!Hn(n,o)}catch{return!0}}function Hv(n){var s=Ea(n,2);s!==null&&Ln(s,n,2)}function sp(n){var s=In();if(typeof n=="function"){var o=n;if(n=o(),Ca){ti(!0);try{o()}finally{ti(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:n},s}function Kv(n,s,o,u){return n.baseState=o,ip(n,tt,typeof u=="function"?u:gr)}function Q1(n,s,o,u,d){if(ld(n))throw Error(i(485));if(n=s.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){m.listeners.push(_)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,Qv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function Qv(n,s){var o=s.action,u=s.payload,d=n.state;if(s.isTransition){var m=Y.T,_={};Y.T=_;try{var b=o(d,u),C=Y.S;C!==null&&C(_,b),Yv(n,s,b)}catch(j){ap(n,s,j)}finally{m!==null&&_.types!==null&&(m.types=_.types),Y.T=m}}else try{m=o(d,u),Yv(n,s,m)}catch(j){ap(n,s,j)}}function Yv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){$v(n,s,u)},function(u){return ap(n,s,u)}):$v(n,s,o)}function $v(n,s,o){s.status="fulfilled",s.value=o,Xv(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,Qv(n,o)))}function ap(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Xv(s),s=s.next;while(s!==u)}n.action=null}function Xv(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Wv(n,s){return s}function Jv(n,s){if(qe){var o=st.formState;if(o!==null){e:{var u=Ce;if(qe){if(lt){t:{for(var d=lt,m=ui;d.nodeType!==8;){if(!m){d=null;break t}if(d=hi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){lt=hi(d.nextSibling),u=d.data==="F!";break e}}ls(u)}u=!1}u&&(s=o[0])}}return o=In(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wv,lastRenderedState:s},o.queue=u,o=y0.bind(null,Ce,u),u.dispatch=o,u=sp(!1),m=dp.bind(null,Ce,!1,u.queue),u=In(),d={state:s,dispatch:null,action:n,pending:null},u.queue=d,o=Q1.bind(null,Ce,d,m,o),d.dispatch=o,u.memoizedState=n,[s,o,!1]}function Zv(n){var s=Nt();return e0(s,tt,n)}function e0(n,s,o){if(s=ip(n,s,Wv)[0],n=sd(gr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=xu(s)}catch(_){throw _===Uo?$h:_}else u=s;s=Nt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Ce.flags|=2048,Fo(9,{destroy:void 0},Y1.bind(null,d,o),null)),[u,m,n]}function Y1(n,s){n.action=s}function t0(n){var s=Nt(),o=tt;if(o!==null)return e0(s,o,n);Nt(),s=s.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Fo(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ce.updateQueue,s===null&&(s=id(),Ce.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function n0(){return Nt().memoizedState}function ad(n,s,o,u){var d=In();Ce.flags|=n,d.memoizedState=Fo(1|s,{destroy:void 0},o,u===void 0?null:u)}function od(n,s,o,u){var d=Nt();u=u===void 0?null:u;var m=d.memoizedState.inst;tt!==null&&u!==null&&Wm(u,tt.memoizedState.deps)?d.memoizedState=Fo(s,m,o,u):(Ce.flags|=n,d.memoizedState=Fo(1|s,m,o,u))}function i0(n,s){ad(8390656,8,n,s)}function op(n,s){od(2048,8,n,s)}function $1(n){Ce.flags|=4;var s=Ce.updateQueue;if(s===null)s=id(),Ce.updateQueue=s,s.events=[n];else{var o=s.events;o===null?s.events=[n]:o.push(n)}}function r0(n){var s=Nt().memoizedState;return $1({ref:s,nextImpl:n}),function(){if(($e&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}function s0(n,s){return od(4,2,n,s)}function a0(n,s){return od(4,4,n,s)}function o0(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function l0(n,s,o){o=o!=null?o.concat([n]):null,od(4,4,o0.bind(null,s,n),o)}function lp(){}function u0(n,s){var o=Nt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Wm(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function c0(n,s){var o=Nt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Wm(s,u[1]))return u[0];if(u=n(),Ca){ti(!0);try{n()}finally{ti(!1)}}return o.memoizedState=[u,s],u}function up(n,s,o){return o===void 0||(pr&1073741824)!==0&&(Le&261930)===0?n.memoizedState=s:(n.memoizedState=o,n=hE(),Ce.lanes|=n,ys|=n,o)}function h0(n,s,o,u){return Hn(o,s)?o:jo.current!==null?(n=up(n,o,u),Hn(n,s)||(Lt=!0),n):(pr&42)===0||(pr&1073741824)!==0&&(Le&261930)===0?(Lt=!0,n.memoizedState=o):(n=hE(),Ce.lanes|=n,ys|=n,s)}function d0(n,s,o,u,d){var m=le.p;le.p=m!==0&&8>m?m:8;var _=Y.T,b={};Y.T=b,dp(n,!1,s,o);try{var C=d(),j=Y.S;if(j!==null&&j(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=G1(C,u);Cu(n,s,Q,Wn(n))}else Cu(n,s,u,Wn(n))}catch(ee){Cu(n,s,{then:function(){},status:"rejected",reason:ee},Wn())}finally{le.p=m,_!==null&&b.types!==null&&(_.types=b.types),Y.T=_}}function X1(){}function cp(n,s,o,u){if(n.tag!==5)throw Error(i(476));var d=f0(n).queue;d0(n,d,s,Te,o===null?X1:function(){return m0(n),o(u)})}function f0(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:Te},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function m0(n){var s=f0(n);s.next===null&&(s=n.alternate.memoizedState),Cu(n,s.next.queue,{},Wn())}function hp(){return on(Ku)}function p0(){return Nt().memoizedState}function g0(){return Nt().memoizedState}function W1(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=Wn();n=hs(o);var u=ds(s,n,o);u!==null&&(Ln(u,s,o),Iu(u,s,o)),s={cache:jm()},n.payload=s;return}s=s.return}}function J1(n,s,o){var u=Wn();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ld(n)?_0(s,o):(o=Cm(n,s,o,u),o!==null&&(Ln(o,n,u),v0(o,s,u)))}function y0(n,s,o){var u=Wn();Cu(n,s,o,u)}function Cu(n,s,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(ld(n))_0(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var _=s.lastRenderedState,b=m(_,o);if(d.hasEagerState=!0,d.eagerState=b,Hn(b,_))return qh(n,s,d,0),st===null&&Bh(),!1}catch{}finally{}if(o=Cm(n,s,d,u),o!==null)return Ln(o,n,u),v0(o,s,u),!0}return!1}function dp(n,s,o,u){if(u={lane:2,revertLane:Gp(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},ld(n)){if(s)throw Error(i(479))}else s=Cm(n,o,u,2),s!==null&&Ln(s,n,2)}function ld(n){var s=n.alternate;return n===Ce||s!==null&&s===Ce}function _0(n,s){Bo=td=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function v0(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Gr(n,o)}}var Nu={readContext:on,use:rd,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt};Nu.useEffectEvent=Tt;var E0={readContext:on,use:rd,useCallback:function(n,s){return In().memoizedState=[n,s===void 0?null:s],n},useContext:on,useEffect:i0,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,ad(4194308,4,o0.bind(null,s,n),o)},useLayoutEffect:function(n,s){return ad(4194308,4,n,s)},useInsertionEffect:function(n,s){ad(4,2,n,s)},useMemo:function(n,s){var o=In();s=s===void 0?null:s;var u=n();if(Ca){ti(!0);try{n()}finally{ti(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=In();if(o!==void 0){var d=o(s);if(Ca){ti(!0);try{o(s)}finally{ti(!1)}}}else d=s;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=J1.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var s=In();return n={current:n},s.memoizedState=n},useState:function(n){n=sp(n);var s=n.queue,o=y0.bind(null,Ce,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:lp,useDeferredValue:function(n,s){var o=In();return up(o,n,s)},useTransition:function(){var n=sp(!1);return n=d0.bind(null,Ce,n.queue,!0,!1),In().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ce,d=In();if(qe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),st===null)throw Error(i(349));(Le&127)!==0||Bv(u,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,i0(Fv.bind(null,u,m,n),[n]),u.flags|=2048,Fo(9,{destroy:void 0},qv.bind(null,u,m,o,s),null),o},useId:function(){var n=In(),s=st.identifierPrefix;if(qe){var o=Mi,u=Pi;o=(u&~(1<<32-vn(u)-1)).toString(32)+o,s="_"+s+"R_"+o,o=nd++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=H1++,s="_"+s+"r_"+o.toString(32)+"_";return n.memoizedState=s},useHostTransitionStatus:hp,useFormState:Jv,useActionState:Jv,useOptimistic:function(n){var s=In();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=dp.bind(null,Ce,!0,o),o.dispatch=s,[n,s]},useMemoCache:np,useCacheRefresh:function(){return In().memoizedState=W1.bind(null,Ce)},useEffectEvent:function(n){var s=In(),o={impl:n};return s.memoizedState=o,function(){if(($e&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},fp={readContext:on,use:rd,useCallback:u0,useContext:on,useEffect:op,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:a0,useMemo:c0,useReducer:sd,useRef:n0,useState:function(){return sd(gr)},useDebugValue:lp,useDeferredValue:function(n,s){var o=Nt();return h0(o,tt.memoizedState,n,s)},useTransition:function(){var n=sd(gr)[0],s=Nt().memoizedState;return[typeof n=="boolean"?n:xu(n),s]},useSyncExternalStore:jv,useId:p0,useHostTransitionStatus:hp,useFormState:Zv,useActionState:Zv,useOptimistic:function(n,s){var o=Nt();return Kv(o,tt,n,s)},useMemoCache:np,useCacheRefresh:g0};fp.useEffectEvent=r0;var T0={readContext:on,use:rd,useCallback:u0,useContext:on,useEffect:op,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:a0,useMemo:c0,useReducer:rp,useRef:n0,useState:function(){return rp(gr)},useDebugValue:lp,useDeferredValue:function(n,s){var o=Nt();return tt===null?up(o,n,s):h0(o,tt.memoizedState,n,s)},useTransition:function(){var n=rp(gr)[0],s=Nt().memoizedState;return[typeof n=="boolean"?n:xu(n),s]},useSyncExternalStore:jv,useId:p0,useHostTransitionStatus:hp,useFormState:t0,useActionState:t0,useOptimistic:function(n,s){var o=Nt();return tt!==null?Kv(o,tt,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:np,useCacheRefresh:g0};T0.useEffectEvent=r0;function mp(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:T({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var pp={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Wn(),d=hs(u);d.payload=s,o!=null&&(d.callback=o),s=ds(n,d,u),s!==null&&(Ln(s,n,u),Iu(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Wn(),d=hs(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=ds(n,d,u),s!==null&&(Ln(s,n,u),Iu(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Wn(),u=hs(o);u.tag=2,s!=null&&(u.callback=s),s=ds(n,u,o),s!==null&&(Ln(s,n,o),Iu(s,n,o))}};function b0(n,s,o,u,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,_):s.prototype&&s.prototype.isPureReactComponent?!gu(o,u)||!gu(d,m):!0}function w0(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&pp.enqueueReplaceState(s,s.state,null)}function Na(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=T({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}function I0(n){jh(n)}function A0(n){console.error(n)}function S0(n){jh(n)}function ud(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function R0(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function gp(n,s,o){return o=hs(o),o.tag=3,o.payload={element:null},o.callback=function(){ud(n,s)},o}function x0(n){return n=hs(n),n.tag=3,n}function C0(n,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;n.payload=function(){return d(m)},n.callback=function(){R0(s,o,u)}}var _=o.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){R0(s,o,u),typeof d!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var b=u.stack;this.componentDidCatch(u.value,{componentStack:b!==null?b:""})})}function Z1(n,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Po(s,o,d,!0),o=Qn.current,o!==null){switch(o.tag){case 31:case 13:return ci===null?Td():o.alternate===null&&bt===0&&(bt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Xh?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Bp(n,u,d)),!1;case 22:return o.flags|=65536,u===Xh?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Bp(n,u,d)),!1}throw Error(i(435,o.tag))}return Bp(n,u,d),Td(),!1}if(qe)return s=Qn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Pm&&(n=Error(i(422),{cause:u}),vu(ai(n,o)))):(u!==Pm&&(s=Error(i(423),{cause:u}),vu(ai(s,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=ai(u,o),d=gp(n.stateNode,u,d),Km(n,d),bt!==4&&(bt=2)),!1;var m=Error(i(520),{cause:u});if(m=ai(m,o),Uu===null?Uu=[m]:Uu.push(m),bt!==4&&(bt=2),s===null)return!0;u=ai(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=gp(o.stateNode,u,n),Km(o,n),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_s===null||!_s.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=x0(d),C0(d,n,o,u),Km(o,d),!1}o=o.return}while(o!==null);return!1}var yp=Error(i(461)),Lt=!1;function ln(n,s,o,u){s.child=n===null?Ov(s,null,o,u):xa(s,n.child,o,u)}function N0(n,s,o,u,d){o=o.render;var m=s.ref;if("ref"in u){var _={};for(var b in u)b!=="ref"&&(_[b]=u[b])}else _=u;return Ia(s),u=Jm(n,s,o,_,m,d),b=Zm(),n!==null&&!Lt?(ep(n,s,d),yr(n,s,d)):(qe&&b&&Om(s),s.flags|=1,ln(n,s,u,d),s.child)}function D0(n,s,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Nm(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,k0(n,s,m,u,d)):(n=Gh(o.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!Ap(n,d)){var _=m.memoizedProps;if(o=o.compare,o=o!==null?o:gu,o(_,u)&&n.ref===s.ref)return yr(n,s,d)}return s.flags|=1,n=hr(m,u),n.ref=s.ref,n.return=s,s.child=n}function k0(n,s,o,u,d){if(n!==null){var m=n.memoizedProps;if(gu(m,u)&&n.ref===s.ref)if(Lt=!1,s.pendingProps=u=m,Ap(n,d))(n.flags&131072)!==0&&(Lt=!0);else return s.lanes=n.lanes,yr(n,s,d)}return _p(n,s,o,u,d)}function O0(n,s,o,u){var d=u.children,m=n!==null?n.memoizedState:null;if(n===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(u=s.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~m}else u=0,s.child=null;return V0(n,s,m,o,u)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Yh(s,m!==null?m.cachePool:null),m!==null?Mv(s,m):Ym(),Lv(s);else return u=s.lanes=536870912,V0(n,s,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Yh(s,m.cachePool),Mv(s,m),ms(),s.memoizedState=null):(n!==null&&Yh(s,null),Ym(),ms());return ln(n,s,d,o),s.child}function Du(n,s){return n!==null&&n.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function V0(n,s,o,u,d){var m=qm();return m=m===null?null:{parent:Pt._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},n!==null&&Yh(s,null),Ym(),Lv(s),n!==null&&Po(n,s,u,!0),s.childLanes=d,null}function cd(n,s){return s=dd({mode:s.mode,children:s.children},n.mode),s.ref=n.ref,n.child=s,s.return=n,s}function P0(n,s,o){return xa(s,n.child,null,o),n=cd(s,s.pendingProps),n.flags|=2,Yn(s),s.memoizedState=null,n}function eR(n,s,o){var u=s.pendingProps,d=(s.flags&128)!==0;if(s.flags&=-129,n===null){if(qe){if(u.mode==="hidden")return n=cd(s,u),s.lanes=536870912,Du(null,n);if(Xm(s),(n=lt)?(n=QE(n,ui),n=n!==null&&n.data==="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:as!==null?{id:Pi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},o=_v(n),o.return=s,s.child=o,an=s,lt=null)):n=null,n===null)throw ls(s);return s.lanes=536870912,null}return cd(s,u)}var m=n.memoizedState;if(m!==null){var _=m.dehydrated;if(Xm(s),d)if(s.flags&256)s.flags&=-257,s=P0(n,s,o);else if(s.memoizedState!==null)s.child=n.child,s.flags|=128,s=null;else throw Error(i(558));else if(Lt||Po(n,s,o,!1),d=(o&n.childLanes)!==0,Lt||d){if(u=st,u!==null&&(_=Hr(u,o),_!==0&&_!==m.retryLane))throw m.retryLane=_,Ea(n,_),Ln(u,n,_),yp;Td(),s=P0(n,s,o)}else n=m.treeContext,lt=hi(_.nextSibling),an=s,qe=!0,os=null,ui=!1,n!==null&&Tv(s,n),s=cd(s,u),s.flags|=4096;return s}return n=hr(n.child,{mode:u.mode,children:u.children}),n.ref=s.ref,s.child=n,n.return=s,n}function hd(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function _p(n,s,o,u,d){return Ia(s),o=Jm(n,s,o,u,void 0,d),u=Zm(),n!==null&&!Lt?(ep(n,s,d),yr(n,s,d)):(qe&&u&&Om(s),s.flags|=1,ln(n,s,o,d),s.child)}function M0(n,s,o,u,d,m){return Ia(s),s.updateQueue=null,o=zv(s,u,o,d),Uv(n),u=Zm(),n!==null&&!Lt?(ep(n,s,m),yr(n,s,m)):(qe&&u&&Om(s),s.flags|=1,ln(n,s,o,m),s.child)}function L0(n,s,o,u,d){if(Ia(s),s.stateNode===null){var m=Do,_=o.contextType;typeof _=="object"&&_!==null&&(m=on(_)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=pp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Gm(s),_=o.contextType,m.context=typeof _=="object"&&_!==null?on(_):Do,m.state=s.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(mp(s,o,_,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(_=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),_!==m.state&&pp.enqueueReplaceState(m,m.state,null),Su(s,u,m,d),Au(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){m=s.stateNode;var b=s.memoizedProps,C=Na(o,b);m.props=C;var j=m.context,Q=o.contextType;_=Do,typeof Q=="object"&&Q!==null&&(_=on(Q));var ee=o.getDerivedStateFromProps;Q=typeof ee=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||j!==_)&&w0(s,m,u,_),cs=!1;var q=s.memoizedState;m.state=q,Su(s,u,m,d),Au(),j=s.memoizedState,b||q!==j||cs?(typeof ee=="function"&&(mp(s,o,ee,u),j=s.memoizedState),(C=cs||b0(s,o,C,u,q,j,_))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=j),m.props=u,m.state=j,m.context=_,u=C):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Hm(n,s),_=s.memoizedProps,Q=Na(o,_),m.props=Q,ee=s.pendingProps,q=m.context,j=o.contextType,C=Do,typeof j=="object"&&j!==null&&(C=on(j)),b=o.getDerivedStateFromProps,(j=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==ee||q!==C)&&w0(s,m,u,C),cs=!1,q=s.memoizedState,m.state=q,Su(s,u,m,d),Au();var G=s.memoizedState;_!==ee||q!==G||cs||n!==null&&n.dependencies!==null&&Kh(n.dependencies)?(typeof b=="function"&&(mp(s,o,b,u),G=s.memoizedState),(Q=cs||b0(s,o,Q,u,q,G,C)||n!==null&&n.dependencies!==null&&Kh(n.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,G,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,G,C)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=G),m.props=u,m.state=G,m.context=C,u=Q):(typeof m.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),u=!1)}return m=u,hd(n,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,n!==null&&u?(s.child=xa(s,n.child,null,d),s.child=xa(s,null,o,d)):ln(n,s,o,d),s.memoizedState=m.state,n=s.child):n=yr(n,s,d),n}function U0(n,s,o,u){return ba(),s.flags|=256,ln(n,s,o,u),s.child}var vp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ep(n){return{baseLanes:n,cachePool:Rv()}}function Tp(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Xn),n}function z0(n,s,o){var u=s.pendingProps,d=!1,m=(s.flags&128)!==0,_;if((_=m)||(_=n!==null&&n.memoizedState===null?!1:(Ct.current&2)!==0),_&&(d=!0,s.flags&=-129),_=(s.flags&32)!==0,s.flags&=-33,n===null){if(qe){if(d?fs(s):ms(),(n=lt)?(n=QE(n,ui),n=n!==null&&n.data!=="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:as!==null?{id:Pi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},o=_v(n),o.return=s,s.child=o,an=s,lt=null)):n=null,n===null)throw ls(s);return ig(n)?s.lanes=32:s.lanes=536870912,null}var b=u.children;return u=u.fallback,d?(ms(),d=s.mode,b=dd({mode:"hidden",children:b},d),u=Ta(u,d,o,null),b.return=s,u.return=s,b.sibling=u,s.child=b,u=s.child,u.memoizedState=Ep(o),u.childLanes=Tp(n,_,o),s.memoizedState=vp,Du(null,u)):(fs(s),bp(s,b))}var C=n.memoizedState;if(C!==null&&(b=C.dehydrated,b!==null)){if(m)s.flags&256?(fs(s),s.flags&=-257,s=wp(n,s,o)):s.memoizedState!==null?(ms(),s.child=n.child,s.flags|=128,s=null):(ms(),b=u.fallback,d=s.mode,u=dd({mode:"visible",children:u.children},d),b=Ta(b,d,o,null),b.flags|=2,u.return=s,b.return=s,u.sibling=b,s.child=u,xa(s,n.child,null,o),u=s.child,u.memoizedState=Ep(o),u.childLanes=Tp(n,_,o),s.memoizedState=vp,s=Du(null,u));else if(fs(s),ig(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var j=_.dgst;_=j,u=Error(i(419)),u.stack="",u.digest=_,vu({value:u,source:null,stack:null}),s=wp(n,s,o)}else if(Lt||Po(n,s,o,!1),_=(o&n.childLanes)!==0,Lt||_){if(_=st,_!==null&&(u=Hr(_,o),u!==0&&u!==C.retryLane))throw C.retryLane=u,Ea(n,u),Ln(_,n,u),yp;ng(b)||Td(),s=wp(n,s,o)}else ng(b)?(s.flags|=192,s.child=n.child,s=null):(n=C.treeContext,lt=hi(b.nextSibling),an=s,qe=!0,os=null,ui=!1,n!==null&&Tv(s,n),s=bp(s,u.children),s.flags|=4096);return s}return d?(ms(),b=u.fallback,d=s.mode,C=n.child,j=C.sibling,u=hr(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,j!==null?b=hr(j,b):(b=Ta(b,d,o,null),b.flags|=2),b.return=s,u.return=s,u.sibling=b,s.child=u,Du(null,u),u=s.child,b=n.child.memoizedState,b===null?b=Ep(o):(d=b.cachePool,d!==null?(C=Pt._currentValue,d=d.parent!==C?{parent:C,pool:C}:d):d=Rv(),b={baseLanes:b.baseLanes|o,cachePool:d}),u.memoizedState=b,u.childLanes=Tp(n,_,o),s.memoizedState=vp,Du(n.child,u)):(fs(s),o=n.child,n=o.sibling,o=hr(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(_=s.deletions,_===null?(s.deletions=[n],s.flags|=16):_.push(n)),s.child=o,s.memoizedState=null,o)}function bp(n,s){return s=dd({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function dd(n,s){return n=Kn(22,n,null,s),n.lanes=0,n}function wp(n,s,o){return xa(s,n.child,null,o),n=bp(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function j0(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Um(n.return,s,o)}function Ip(n,s,o,u,d,m){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=o,_.tailMode=d,_.treeForkCount=m)}function B0(n,s,o){var u=s.pendingProps,d=u.revealOrder,m=u.tail;u=u.children;var _=Ct.current,b=(_&2)!==0;if(b?(_=_&1|2,s.flags|=128):_&=1,re(Ct,_),ln(n,s,u,o),u=qe?_u:0,!b&&n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&j0(n,o,s);else if(n.tag===19)j0(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"forwards":for(o=s.child,d=null;o!==null;)n=o.alternate,n!==null&&ed(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),Ip(s,!1,d,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&ed(n)===null){s.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Ip(s,!0,o,null,m,u);break;case"together":Ip(s,!1,null,null,void 0,u);break;default:s.memoizedState=null}return s.child}function yr(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),ys|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Po(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(i(153));if(s.child!==null){for(n=s.child,o=hr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function Ap(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Kh(n)))}function tR(n,s,o){switch(s.tag){case 3:tn(s,s.stateNode.containerInfo),us(s,Pt,n.memoizedState.cache),ba();break;case 27:case 5:Si(s);break;case 4:tn(s,s.stateNode.containerInfo);break;case 10:us(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Xm(s),null;break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(fs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?z0(n,s,o):(fs(s),n=yr(n,s,o),n!==null?n.sibling:null);fs(s);break;case 19:var d=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Po(n,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return B0(n,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),re(Ct,Ct.current),u)break;return null;case 22:return s.lanes=0,O0(n,s,o,s.pendingProps);case 24:us(s,Pt,n.memoizedState.cache)}return yr(n,s,o)}function q0(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Lt=!0;else{if(!Ap(n,o)&&(s.flags&128)===0)return Lt=!1,tR(n,s,o);Lt=(n.flags&131072)!==0}else Lt=!1,qe&&(s.flags&1048576)!==0&&Ev(s,_u,s.index);switch(s.lanes=0,s.tag){case 16:e:{var u=s.pendingProps;if(n=Sa(s.elementType),s.type=n,typeof n=="function")Nm(n)?(u=Na(n,u),s.tag=1,s=L0(null,s,n,u,o)):(s.tag=0,s=_p(null,s,n,u,o));else{if(n!=null){var d=n.$$typeof;if(d===ge){s.tag=11,s=N0(null,s,n,u,o);break e}else if(d===R){s.tag=14,s=D0(null,s,n,u,o);break e}}throw s=Bt(n)||n,Error(i(306,s,""))}}return s;case 0:return _p(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=Na(u,s.pendingProps),L0(n,s,u,d,o);case 3:e:{if(tn(s,s.stateNode.containerInfo),n===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;d=m.element,Hm(n,s),Su(s,u,null,o);var _=s.memoizedState;if(u=_.cache,us(s,Pt,u),u!==m.cache&&zm(s,[Pt],o,!0),Au(),u=_.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:_.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=U0(n,s,u,o);break e}else if(u!==d){d=ai(Error(i(424)),s),vu(d),s=U0(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(lt=hi(n.firstChild),an=s,qe=!0,os=null,ui=!0,o=Ov(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ba(),u===d){s=yr(n,s,o);break e}ln(n,s,u,o)}s=s.child}return s;case 26:return hd(n,s),n===null?(o=ZE(s.type,null,s.pendingProps,null))?s.memoizedState=o:qe||(o=s.type,n=s.pendingProps,u=xd(ke.current).createElement(o),u[vt]=s,u[sn]=n,un(u,o,n),xt(u),s.stateNode=u):s.memoizedState=ZE(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return Si(s),n===null&&qe&&(u=s.stateNode=XE(s.type,s.pendingProps,ke.current),an=s,ui=!0,d=lt,bs(s.type)?(rg=d,lt=hi(u.firstChild)):lt=d),ln(n,s,s.pendingProps.children,o),hd(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&qe&&((d=u=lt)&&(u=DR(u,s.type,s.pendingProps,ui),u!==null?(s.stateNode=u,an=s,lt=hi(u.firstChild),ui=!1,d=!0):d=!1),d||ls(s)),Si(s),d=s.type,m=s.pendingProps,_=n!==null?n.memoizedProps:null,u=m.children,Zp(d,m)?u=null:_!==null&&Zp(d,_)&&(s.flags|=32),s.memoizedState!==null&&(d=Jm(n,s,K1,null,null,o),Ku._currentValue=d),hd(n,s),ln(n,s,u,o),s.child;case 6:return n===null&&qe&&((n=o=lt)&&(o=kR(o,s.pendingProps,ui),o!==null?(s.stateNode=o,an=s,lt=null,n=!0):n=!1),n||ls(s)),null;case 13:return z0(n,s,o);case 4:return tn(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=xa(s,null,u,o):ln(n,s,u,o),s.child;case 11:return N0(n,s,s.type,s.pendingProps,o);case 7:return ln(n,s,s.pendingProps,o),s.child;case 8:return ln(n,s,s.pendingProps.children,o),s.child;case 12:return ln(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,us(s,s.type,u.value),ln(n,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Ia(s),d=on(d),u=u(d),s.flags|=1,ln(n,s,u,o),s.child;case 14:return D0(n,s,s.type,s.pendingProps,o);case 15:return k0(n,s,s.type,s.pendingProps,o);case 19:return B0(n,s,o);case 31:return eR(n,s,o);case 22:return O0(n,s,o,s.pendingProps);case 24:return Ia(s),u=on(Pt),n===null?(d=qm(),d===null&&(d=st,m=jm(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:u,cache:d},Gm(s),us(s,Pt,d)):((n.lanes&o)!==0&&(Hm(n,s),Su(s,null,null,o),Au()),d=n.memoizedState,m=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),us(s,Pt,u)):(u=m.cache,us(s,Pt,u),u!==d.cache&&zm(s,[Pt],o,!0))),ln(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function _r(n){n.flags|=4}function Sp(n,s,o,u,d){if((s=(n.mode&32)!==0)&&(s=!1),s){if(n.flags|=16777216,(d&335544128)===d)if(n.stateNode.complete)n.flags|=8192;else if(pE())n.flags|=8192;else throw Ra=Xh,Fm}else n.flags&=-16777217}function F0(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!rT(s))if(pE())n.flags|=8192;else throw Ra=Xh,Fm}function fd(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Jl():536870912,n.lanes|=s,Qo|=s)}function ku(n,s){if(!qe)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function nR(n,s,o){var u=s.pendingProps;switch(Vm(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),mr(Pt),gt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Vo(s)?_r(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mm())),ut(s),null;case 26:var d=s.type,m=s.memoizedState;return n===null?(_r(s),m!==null?(ut(s),F0(s,m)):(ut(s),Sp(s,d,null,u,o))):m?m!==n.memoizedState?(_r(s),ut(s),F0(s,m)):(ut(s),s.flags&=-16777217):(n=n.memoizedProps,n!==u&&_r(s),ut(s),Sp(s,d,n,u,o)),null;case 27:if(Zi(s),o=ke.current,d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&_r(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ut(s),null}n=me.current,Vo(s)?bv(s):(n=XE(d,u,o),s.stateNode=n,_r(s))}return ut(s),null;case 5:if(Zi(s),d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&_r(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ut(s),null}if(m=me.current,Vo(s))bv(s);else{var _=xd(ke.current);switch(m){case 1:m=_.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=_.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=_.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=_.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=_.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?_.createElement("select",{is:u.is}):_.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?_.createElement(d,{is:u.is}):_.createElement(d)}}m[vt]=s,m[sn]=u;e:for(_=s.child;_!==null;){if(_.tag===5||_.tag===6)m.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===s)break e;for(;_.sibling===null;){if(_.return===null||_.return===s)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}s.stateNode=m;e:switch(un(m,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&_r(s)}}return ut(s),Sp(s,s.type,n===null?null:n.memoizedProps,s.pendingProps,o),null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&_r(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(n=ke.current,Vo(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,d=an,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[vt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||zE(n.nodeValue,o)),n||ls(s,!0)}else n=xd(n).createTextNode(u),n[vt]=s,s.stateNode=n}return ut(s),null;case 31:if(o=s.memoizedState,n===null||n.memoizedState!==null){if(u=Vo(s),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[vt]=s}else ba(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),n=!1}else o=Mm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return s.flags&256?(Yn(s),s):(Yn(s),null);if((s.flags&128)!==0)throw Error(i(558))}return ut(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Vo(s),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[vt]=s}else ba(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),d=!1}else d=Mm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Yn(s),s):(Yn(s),null)}return Yn(s),(s.flags&128)!==0?(s.lanes=o,s):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)),o!==n&&o&&(s.child.flags|=8192),fd(s,s.updateQueue),ut(s),null);case 4:return gt(),n===null&&Yp(s.stateNode.containerInfo),ut(s),null;case 10:return mr(s.type),ut(s),null;case 19:if(W(Ct),u=s.memoizedState,u===null)return ut(s),null;if(d=(s.flags&128)!==0,m=u.rendering,m===null)if(d)ku(u,!1);else{if(bt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(m=ed(n),m!==null){for(s.flags|=128,ku(u,!1),n=m.updateQueue,s.updateQueue=n,fd(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)yv(o,n),o=o.sibling;return re(Ct,Ct.current&1|2),qe&&dr(s,u.treeForkCount),s.child}n=n.sibling}u.tail!==null&&nn()>_d&&(s.flags|=128,d=!0,ku(u,!1),s.lanes=4194304)}else{if(!d)if(n=ed(m),n!==null){if(s.flags|=128,d=!0,n=n.updateQueue,s.updateQueue=n,fd(s,n),ku(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!qe)return ut(s),null}else 2*nn()-u.renderingStartTime>_d&&o!==536870912&&(s.flags|=128,d=!0,ku(u,!1),s.lanes=4194304);u.isBackwards?(m.sibling=s.child,s.child=m):(n=u.last,n!==null?n.sibling=m:s.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=nn(),n.sibling=null,o=Ct.current,re(Ct,d?o&1|2:o&1),qe&&dr(s,u.treeForkCount),n):(ut(s),null);case 22:case 23:return Yn(s),$m(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&fd(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&W(Aa),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),mr(Pt),ut(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function iR(n,s){switch(Vm(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return mr(Pt),gt(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Zi(s),null;case 31:if(s.memoizedState!==null){if(Yn(s),s.alternate===null)throw Error(i(340));ba()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 13:if(Yn(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(i(340));ba()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return W(Ct),null;case 4:return gt(),null;case 10:return mr(s.type),null;case 22:case 23:return Yn(s),$m(),n!==null&&W(Aa),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return mr(Pt),null;case 25:return null;default:return null}}function G0(n,s){switch(Vm(s),s.tag){case 3:mr(Pt),gt();break;case 26:case 27:case 5:Zi(s);break;case 4:gt();break;case 31:s.memoizedState!==null&&Yn(s);break;case 13:Yn(s);break;case 19:W(Ct);break;case 10:mr(s.type);break;case 22:case 23:Yn(s),$m(),n!==null&&W(Aa);break;case 24:mr(Pt)}}function Ou(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var m=o.create,_=o.inst;u=m(),_.destroy=u}o=o.next}while(o!==d)}}catch(b){Ze(s,s.return,b)}}function ps(n,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&n)===n){var _=u.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,d=s;var C=o,j=b;try{j()}catch(Q){Ze(d,C,Q)}}}u=u.next}while(u!==m)}}catch(Q){Ze(s,s.return,Q)}}function H0(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Pv(s,o)}catch(u){Ze(n,n.return,u)}}}function K0(n,s,o){o.props=Na(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Ze(n,s,u)}}function Vu(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){Ze(n,s,d)}}function Li(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Ze(n,s,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Ze(n,s,d)}else o.current=null}function Q0(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Ze(n,n.return,d)}}function Rp(n,s,o){try{var u=n.stateNode;AR(u,n.type,o,s),u[sn]=s}catch(d){Ze(n,n.return,d)}}function Y0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&bs(n.type)||n.tag===4}function xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Y0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&bs(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cp(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Qt));else if(u!==4&&(u===27&&bs(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(Cp(n,s,o),n=n.sibling;n!==null;)Cp(n,s,o),n=n.sibling}function md(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&bs(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(md(n,s,o),n=n.sibling;n!==null;)md(n,s,o),n=n.sibling}function $0(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);un(s,u,o),s[vt]=n,s[sn]=o}catch(m){Ze(n,n.return,m)}}var vr=!1,Ut=!1,Np=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function rR(n,s){if(n=n.containerInfo,Wp=Pd,n=lv(n),wm(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var _=0,b=-1,C=-1,j=0,Q=0,ee=n,q=null;t:for(;;){for(var G;ee!==o||d!==0&&ee.nodeType!==3||(b=_+d),ee!==m||u!==0&&ee.nodeType!==3||(C=_+u),ee.nodeType===3&&(_+=ee.nodeValue.length),(G=ee.firstChild)!==null;)q=ee,ee=G;for(;;){if(ee===n)break t;if(q===o&&++j===d&&(b=_),q===m&&++Q===u&&(C=_),(G=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=G}o=b===-1||C===-1?null:{start:b,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jp={focusedElem:n,selectionRange:o},Pd=!1,Xt=s;Xt!==null;)if(s=Xt,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Xt=n;else for(;Xt!==null;){switch(s=Xt,m=s.alternate,n=s.flags,s.tag){case 0:if((n&4)!==0&&(n=s.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)d=n[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var fe=Na(o.type,d);n=u.getSnapshotBeforeUpdate(fe,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(we){Ze(o,o.return,we)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)tg(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":tg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=s.sibling,n!==null){n.return=s.return,Xt=n;break}Xt=s.return}}function W0(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Tr(n,o),u&4&&Ou(5,o);break;case 1:if(Tr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(_){Ze(o,o.return,_)}else{var d=Na(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(d,s,n.__reactInternalSnapshotBeforeUpdate)}catch(_){Ze(o,o.return,_)}}u&64&&H0(o),u&512&&Vu(o,o.return);break;case 3:if(Tr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Pv(n,s)}catch(_){Ze(o,o.return,_)}}break;case 27:s===null&&u&4&&$0(o);case 26:case 5:Tr(n,o),s===null&&u&4&&Q0(o),u&512&&Vu(o,o.return);break;case 12:Tr(n,o);break;case 31:Tr(n,o),u&4&&eE(n,o);break;case 13:Tr(n,o),u&4&&tE(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=fR.bind(null,o),OR(n,o))));break;case 22:if(u=o.memoizedState!==null||vr,!u){s=s!==null&&s.memoizedState!==null||Ut,d=vr;var m=Ut;vr=u,(Ut=s)&&!m?br(n,o,(o.subtreeFlags&8772)!==0):Tr(n,o),vr=d,Ut=m}break;case 30:break;default:Tr(n,o)}}function J0(n){var s=n.alternate;s!==null&&(n.alternate=null,J0(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&la(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ht=null,On=!1;function Er(n,s,o){for(o=o.child;o!==null;)Z0(n,s,o),o=o.sibling}function Z0(n,s,o){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(jr,o)}catch{}switch(o.tag){case 26:Ut||Li(o,s),Er(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ut||Li(o,s);var u=ht,d=On;bs(o.type)&&(ht=o.stateNode,On=!1),Er(n,s,o),Fu(o.stateNode),ht=u,On=d;break;case 5:Ut||Li(o,s);case 6:if(u=ht,d=On,ht=null,Er(n,s,o),ht=u,On=d,ht!==null)if(On)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(o.stateNode)}catch(m){Ze(o,s,m)}else try{ht.removeChild(o.stateNode)}catch(m){Ze(o,s,m)}break;case 18:ht!==null&&(On?(n=ht,HE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),tl(n)):HE(ht,o.stateNode));break;case 4:u=ht,d=On,ht=o.stateNode.containerInfo,On=!0,Er(n,s,o),ht=u,On=d;break;case 0:case 11:case 14:case 15:ps(2,o,s),Ut||ps(4,o,s),Er(n,s,o);break;case 1:Ut||(Li(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&K0(o,s,u)),Er(n,s,o);break;case 21:Er(n,s,o);break;case 22:Ut=(u=Ut)||o.memoizedState!==null,Er(n,s,o),Ut=u;break;default:Er(n,s,o)}}function eE(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{tl(n)}catch(o){Ze(s,s.return,o)}}}function tE(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{tl(n)}catch(o){Ze(s,s.return,o)}}function sR(n){switch(n.tag){case 31:case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new X0),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new X0),s;default:throw Error(i(435,n.tag))}}function pd(n,s){var o=sR(n);s.forEach(function(u){if(!o.has(u)){o.add(u);var d=mR.bind(null,n,u);u.then(d,d)}})}function Vn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=n,_=s,b=_;e:for(;b!==null;){switch(b.tag){case 27:if(bs(b.type)){ht=b.stateNode,On=!1;break e}break;case 5:ht=b.stateNode,On=!1;break e;case 3:case 4:ht=b.stateNode.containerInfo,On=!0;break e}b=b.return}if(ht===null)throw Error(i(160));Z0(m,_,d),ht=null,On=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)nE(s,n),s=s.sibling}var Ti=null;function nE(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Vn(s,n),Pn(n),u&4&&(ps(3,n,n.return),Ou(3,n),ps(5,n,n.return));break;case 1:Vn(s,n),Pn(n),u&512&&(Ut||o===null||Li(o,o.return)),u&64&&vr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Ti;if(Vn(s,n),Pn(n),u&512&&(Ut||o===null||Li(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[ir]||m[vt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),un(m,u,o),m[vt]=n,xt(m),u=m;break e;case"link":var _=nT("link","href",d).get(u+(o.href||""));if(_){for(var b=0;b<_.length;b++)if(m=_[b],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){_.splice(b,1);break t}}m=d.createElement(u),un(m,u,o),d.head.appendChild(m);break;case"meta":if(_=nT("meta","content",d).get(u+(o.content||""))){for(b=0;b<_.length;b++)if(m=_[b],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){_.splice(b,1);break t}}m=d.createElement(u),un(m,u,o),d.head.appendChild(m);break;default:throw Error(i(468,u))}m[vt]=n,xt(m),u=m}n.stateNode=u}else iT(d,n.type,n.stateNode);else n.stateNode=tT(d,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?iT(d,n.type,n.stateNode):tT(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Rp(n,n.memoizedProps,o.memoizedProps)}break;case 27:Vn(s,n),Pn(n),u&512&&(Ut||o===null||Li(o,o.return)),o!==null&&u&4&&Rp(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Vn(s,n),Pn(n),u&512&&(Ut||o===null||Li(o,o.return)),n.flags&32){d=n.stateNode;try{ri(d,"")}catch(fe){Ze(n,n.return,fe)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,Rp(n,d,o!==null?o.memoizedProps:d)),u&1024&&(Np=!0);break;case 6:if(Vn(s,n),Pn(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(fe){Ze(n,n.return,fe)}}break;case 3:if(Dd=null,d=Ti,Ti=Cd(s.containerInfo),Vn(s,n),Ti=d,Pn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tl(s.containerInfo)}catch(fe){Ze(n,n.return,fe)}Np&&(Np=!1,iE(n));break;case 4:u=Ti,Ti=Cd(n.stateNode.containerInfo),Vn(s,n),Pn(n),Ti=u;break;case 12:Vn(s,n),Pn(n);break;case 31:Vn(s,n),Pn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,pd(n,u)));break;case 13:Vn(s,n),Pn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yd=nn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,pd(n,u)));break;case 22:d=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,j=vr,Q=Ut;if(vr=j||d,Ut=Q||C,Vn(s,n),Ut=Q,vr=j,Pn(n),u&8192)e:for(s=n.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||C||vr||Ut||Da(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){C=o=s;try{if(m=C.stateNode,d)_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=C.stateNode;var ee=C.memoizedProps.style,q=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(fe){Ze(C,C.return,fe)}}}else if(s.tag===6){if(o===null){C=s;try{C.stateNode.nodeValue=d?"":C.memoizedProps}catch(fe){Ze(C,C.return,fe)}}}else if(s.tag===18){if(o===null){C=s;try{var G=C.stateNode;d?KE(G,!0):KE(C.stateNode,!1)}catch(fe){Ze(C,C.return,fe)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,pd(n,o))));break;case 19:Vn(s,n),Pn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,pd(n,u)));break;case 30:break;case 21:break;default:Vn(s,n),Pn(n)}}function Pn(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(Y0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=xp(n);md(n,m,d);break;case 5:var _=o.stateNode;o.flags&32&&(ri(_,""),o.flags&=-33);var b=xp(n);md(n,b,_);break;case 3:case 4:var C=o.stateNode.containerInfo,j=xp(n);Cp(n,j,C);break;default:throw Error(i(161))}}catch(Q){Ze(n,n.return,Q)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function iE(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;iE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Tr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)W0(n,s.alternate,s),s=s.sibling}function Da(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:ps(4,s,s.return),Da(s);break;case 1:Li(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&K0(s,s.return,o),Da(s);break;case 27:Fu(s.stateNode);case 26:case 5:Li(s,s.return),Da(s);break;case 22:s.memoizedState===null&&Da(s);break;case 30:Da(s);break;default:Da(s)}n=n.sibling}}function br(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=n,m=s,_=m.flags;switch(m.tag){case 0:case 11:case 15:br(d,m,o),Ou(4,m);break;case 1:if(br(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(j){Ze(u,u.return,j)}if(u=m,d=u.updateQueue,d!==null){var b=u.stateNode;try{var C=d.shared.hiddenCallbacks;if(C!==null)for(d.shared.hiddenCallbacks=null,d=0;d<C.length;d++)Vv(C[d],b)}catch(j){Ze(u,u.return,j)}}o&&_&64&&H0(m),Vu(m,m.return);break;case 27:$0(m);case 26:case 5:br(d,m,o),o&&u===null&&_&4&&Q0(m),Vu(m,m.return);break;case 12:br(d,m,o);break;case 31:br(d,m,o),o&&_&4&&eE(d,m);break;case 13:br(d,m,o),o&&_&4&&tE(d,m);break;case 22:m.memoizedState===null&&br(d,m,o),Vu(m,m.return);break;case 30:break;default:br(d,m,o)}s=s.sibling}}function Dp(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Eu(o))}function kp(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Eu(n))}function bi(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)rE(n,s,o,u),s=s.sibling}function rE(n,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:bi(n,s,o,u),d&2048&&Ou(9,s);break;case 1:bi(n,s,o,u);break;case 3:bi(n,s,o,u),d&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Eu(n)));break;case 12:if(d&2048){bi(n,s,o,u),n=s.stateNode;try{var m=s.memoizedProps,_=m.id,b=m.onPostCommit;typeof b=="function"&&b(_,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){Ze(s,s.return,C)}}else bi(n,s,o,u);break;case 31:bi(n,s,o,u);break;case 13:bi(n,s,o,u);break;case 23:break;case 22:m=s.stateNode,_=s.alternate,s.memoizedState!==null?m._visibility&2?bi(n,s,o,u):Pu(n,s):m._visibility&2?bi(n,s,o,u):(m._visibility|=2,Go(n,s,o,u,(s.subtreeFlags&10256)!==0||!1)),d&2048&&Dp(_,s);break;case 24:bi(n,s,o,u),d&2048&&kp(s.alternate,s);break;default:bi(n,s,o,u)}}function Go(n,s,o,u,d){for(d=d&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=n,_=s,b=o,C=u,j=_.flags;switch(_.tag){case 0:case 11:case 15:Go(m,_,b,C,d),Ou(8,_);break;case 23:break;case 22:var Q=_.stateNode;_.memoizedState!==null?Q._visibility&2?Go(m,_,b,C,d):Pu(m,_):(Q._visibility|=2,Go(m,_,b,C,d)),d&&j&2048&&Dp(_.alternate,_);break;case 24:Go(m,_,b,C,d),d&&j&2048&&kp(_.alternate,_);break;default:Go(m,_,b,C,d)}s=s.sibling}}function Pu(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,d=u.flags;switch(u.tag){case 22:Pu(o,u),d&2048&&Dp(u.alternate,u);break;case 24:Pu(o,u),d&2048&&kp(u.alternate,u);break;default:Pu(o,u)}s=s.sibling}}var Mu=8192;function Ho(n,s,o){if(n.subtreeFlags&Mu)for(n=n.child;n!==null;)sE(n,s,o),n=n.sibling}function sE(n,s,o){switch(n.tag){case 26:Ho(n,s,o),n.flags&Mu&&n.memoizedState!==null&&HR(o,Ti,n.memoizedState,n.memoizedProps);break;case 5:Ho(n,s,o);break;case 3:case 4:var u=Ti;Ti=Cd(n.stateNode.containerInfo),Ho(n,s,o),Ti=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=Mu,Mu=16777216,Ho(n,s,o),Mu=u):Ho(n,s,o));break;default:Ho(n,s,o)}}function aE(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Lu(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Xt=u,lE(u,n)}aE(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)oE(n),n=n.sibling}function oE(n){switch(n.tag){case 0:case 11:case 15:Lu(n),n.flags&2048&&ps(9,n,n.return);break;case 3:Lu(n);break;case 12:Lu(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,gd(n)):Lu(n);break;default:Lu(n)}}function gd(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Xt=u,lE(u,n)}aE(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:ps(8,s,s.return),gd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gd(s));break;default:gd(s)}n=n.sibling}}function lE(n,s){for(;Xt!==null;){var o=Xt;switch(o.tag){case 0:case 11:case 15:ps(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Eu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Xt=u;else e:for(o=n;Xt!==null;){u=Xt;var d=u.sibling,m=u.return;if(J0(u),u===o){Xt=null;break e}if(d!==null){d.return=m,Xt=d;break e}Xt=m}}}var aR={getCacheForType:function(n){var s=on(Pt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o},cacheSignal:function(){return on(Pt).controller.signal}},oR=typeof WeakMap=="function"?WeakMap:Map,$e=0,st=null,Ve=null,Le=0,Je=0,$n=null,gs=!1,Ko=!1,Op=!1,wr=0,bt=0,ys=0,ka=0,Vp=0,Xn=0,Qo=0,Uu=null,Mn=null,Pp=!1,yd=0,uE=0,_d=1/0,vd=null,_s=null,Ft=0,vs=null,Yo=null,Ir=0,Mp=0,Lp=null,cE=null,zu=0,Up=null;function Wn(){return($e&2)!==0&&Le!==0?Le&-Le:Y.T!==null?Gp():nr()}function hE(){if(Xn===0)if((Le&536870912)===0||qe){var n=Ri;Ri<<=1,(Ri&3932160)===0&&(Ri=262144),Xn=n}else Xn=536870912;return n=Qn.current,n!==null&&(n.flags|=32),Xn}function Ln(n,s,o){(n===st&&(Je===2||Je===9)||n.cancelPendingCommit!==null)&&($o(n,0),Es(n,Le,Xn,!1)),Fr(n,o),(($e&2)===0||n!==st)&&(n===st&&(($e&2)===0&&(ka|=o),bt===4&&Es(n,Le,Xn,!1)),Ui(n))}function dE(n,s,o){if(($e&6)!==0)throw Error(i(327));var u=!o&&(s&127)===0&&(s&n.expiredLanes)===0||qr(n,s),d=u?cR(n,s):jp(n,s,!0),m=u;do{if(d===0){Ko&&!u&&Es(n,s,0,!1);break}else{if(o=n.current.alternate,m&&!lR(o)){d=jp(n,s,!1),m=!1;continue}if(d===2){if(m=s,n.errorRecoveryDisabledLanes&m)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){s=_;e:{var b=n;d=Uu;var C=b.current.memoizedState.isDehydrated;if(C&&($o(b,_).flags|=256),_=jp(b,_,!1),_!==2){if(Op&&!C){b.errorRecoveryDisabledLanes|=m,ka|=m,d=4;break e}m=Mn,Mn=d,m!==null&&(Mn===null?Mn=m:Mn.push.apply(Mn,m))}d=_}if(m=!1,d!==2)continue}}if(d===1){$o(n,0),Es(n,s,0,!0);break}e:{switch(u=n,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Es(u,s,Xn,!gs);break e;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=yd+300-nn(),10<d)){if(Es(u,s,Xn,!gs),ni(u,0,!0)!==0)break e;Ir=s,u.timeoutHandle=FE(fE.bind(null,u,o,Mn,vd,Pp,s,Xn,ka,Qo,gs,m,"Throttled",-0,0),d);break e}fE(u,o,Mn,vd,Pp,s,Xn,ka,Qo,gs,m,null,-0,0)}}break}while(!0);Ui(n)}function fE(n,s,o,u,d,m,_,b,C,j,Q,ee,q,G){if(n.timeoutHandle=-1,ee=s.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},sE(s,m,ee);var fe=(m&62914560)===m?yd-nn():(m&4194048)===m?uE-nn():0;if(fe=KR(ee,fe),fe!==null){Ir=m,n.cancelPendingCommit=fe(TE.bind(null,n,s,m,o,u,d,_,b,C,Q,ee,null,q,G)),Es(n,m,_,!j);return}}TE(n,s,m,o,u,d,_,b,C)}function lR(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Hn(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Es(n,s,o,u){s&=~Vp,s&=~ka,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var d=s;0<d;){var m=31-vn(d),_=1<<m;u[m]=-1,d&=~_}o!==0&&Zl(n,o,s)}function Ed(){return($e&6)===0?(ju(0),!1):!0}function zp(){if(Ve!==null){if(Je===0)var n=Ve.return;else n=Ve,fr=wa=null,tp(n),zo=null,bu=0,n=Ve;for(;n!==null;)G0(n.alternate,n),n=n.return;Ve=null}}function $o(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,xR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Ir=0,zp(),st=n,Ve=o=hr(n.current,null),Le=s,Je=0,$n=null,gs=!1,Ko=qr(n,s),Op=!1,Qo=Xn=Vp=ka=ys=bt=0,Mn=Uu=null,Pp=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var d=31-vn(u),m=1<<d;s|=n[d],u&=~m}return wr=s,Bh(),o}function mE(n,s){Ce=null,Y.H=Nu,s===Uo||s===$h?(s=Nv(),Je=3):s===Fm?(s=Nv(),Je=4):Je=s===yp?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,$n=s,Ve===null&&(bt=1,ud(n,ai(s,n.current)))}function pE(){var n=Qn.current;return n===null?!0:(Le&4194048)===Le?ci===null:(Le&62914560)===Le||(Le&536870912)!==0?n===ci:!1}function gE(){var n=Y.H;return Y.H=Nu,n===null?Nu:n}function yE(){var n=Y.A;return Y.A=aR,n}function Td(){bt=4,gs||(Le&4194048)!==Le&&Qn.current!==null||(Ko=!0),(ys&134217727)===0&&(ka&134217727)===0||st===null||Es(st,Le,Xn,!1)}function jp(n,s,o){var u=$e;$e|=2;var d=gE(),m=yE();(st!==n||Le!==s)&&(vd=null,$o(n,s)),s=!1;var _=bt;e:do try{if(Je!==0&&Ve!==null){var b=Ve,C=$n;switch(Je){case 8:zp(),_=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(s=!0);var j=Je;if(Je=0,$n=null,Xo(n,b,C,j),o&&Ko){_=0;break e}break;default:j=Je,Je=0,$n=null,Xo(n,b,C,j)}}uR(),_=bt;break}catch(Q){mE(n,Q)}while(!0);return s&&n.shellSuspendCounter++,fr=wa=null,$e=u,Y.H=d,Y.A=m,Ve===null&&(st=null,Le=0,Bh()),_}function uR(){for(;Ve!==null;)_E(Ve)}function cR(n,s){var o=$e;$e|=2;var u=gE(),d=yE();st!==n||Le!==s?(vd=null,_d=nn()+500,$o(n,s)):Ko=qr(n,s);e:do try{if(Je!==0&&Ve!==null){s=Ve;var m=$n;t:switch(Je){case 1:Je=0,$n=null,Xo(n,s,m,1);break;case 2:case 9:if(xv(m)){Je=0,$n=null,vE(s);break}s=function(){Je!==2&&Je!==9||st!==n||(Je=7),Ui(n)},m.then(s,s);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:xv(m)?(Je=0,$n=null,vE(s)):(Je=0,$n=null,Xo(n,s,m,7));break;case 5:var _=null;switch(Ve.tag){case 26:_=Ve.memoizedState;case 5:case 27:var b=Ve;if(_?rT(_):b.stateNode.complete){Je=0,$n=null;var C=b.sibling;if(C!==null)Ve=C;else{var j=b.return;j!==null?(Ve=j,bd(j)):Ve=null}break t}}Je=0,$n=null,Xo(n,s,m,5);break;case 6:Je=0,$n=null,Xo(n,s,m,6);break;case 8:zp(),bt=6;break e;default:throw Error(i(462))}}hR();break}catch(Q){mE(n,Q)}while(!0);return fr=wa=null,Y.H=u,Y.A=d,$e=o,Ve!==null?0:(st=null,Le=0,Bh(),bt)}function hR(){for(;Ve!==null&&!dm();)_E(Ve)}function _E(n){var s=q0(n.alternate,n,wr);n.memoizedProps=n.pendingProps,s===null?bd(n):Ve=s}function vE(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=M0(o,s,s.pendingProps,s.type,void 0,Le);break;case 11:s=M0(o,s,s.pendingProps,s.type.render,s.ref,Le);break;case 5:tp(s);default:G0(o,s),s=Ve=yv(s,wr),s=q0(o,s,wr)}n.memoizedProps=n.pendingProps,s===null?bd(n):Ve=s}function Xo(n,s,o,u){fr=wa=null,tp(s),zo=null,bu=0;var d=s.return;try{if(Z1(n,d,s,o,Le)){bt=1,ud(n,ai(o,n.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;bt=1,ud(n,ai(o,n.current)),Ve=null;return}s.flags&32768?(qe||u===1?n=!0:Ko||(Le&536870912)!==0?n=!1:(gs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Qn.current,u!==null&&u.tag===13&&(u.flags|=16384))),EE(s,n)):bd(s)}function bd(n){var s=n;do{if((s.flags&32768)!==0){EE(s,gs);return}n=s.return;var o=nR(s.alternate,s,wr);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=n}while(s!==null);bt===0&&(bt=5)}function EE(n,s){do{var o=iR(n.alternate,n);if(o!==null){o.flags&=32767,Ve=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ve=n;return}Ve=n=o}while(n!==null);bt=6,Ve=null}function TE(n,s,o,u,d,m,_,b,C){n.cancelPendingCommit=null;do wd();while(Ft!==0);if(($e&6)!==0)throw Error(i(327));if(s!==null){if(s===n.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=xm,rn(n,o,m,_,b,C),n===st&&(Ve=st=null,Le=0),Yo=s,vs=n,Ir=o,Mp=m,Lp=d,cE=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,pR(er,function(){return SE(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,d=le.p,le.p=2,_=$e,$e|=4;try{rR(n,s,o)}finally{$e=_,le.p=d,Y.T=u}}Ft=1,bE(),wE(),IE()}}function bE(){if(Ft===1){Ft=0;var n=vs,s=Yo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=le.p;le.p=2;var d=$e;$e|=4;try{nE(s,n);var m=Jp,_=lv(n.containerInfo),b=m.focusedElem,C=m.selectionRange;if(_!==b&&b&&b.ownerDocument&&ov(b.ownerDocument.documentElement,b)){if(C!==null&&wm(b)){var j=C.start,Q=C.end;if(Q===void 0&&(Q=j),"selectionStart"in b)b.selectionStart=j,b.selectionEnd=Math.min(Q,b.value.length);else{var ee=b.ownerDocument||document,q=ee&&ee.defaultView||window;if(q.getSelection){var G=q.getSelection(),fe=b.textContent.length,we=Math.min(C.start,fe),it=C.end===void 0?we:Math.min(C.end,fe);!G.extend&&we>it&&(_=it,it=we,we=_);var M=av(b,we),k=av(b,it);if(M&&k&&(G.rangeCount!==1||G.anchorNode!==M.node||G.anchorOffset!==M.offset||G.focusNode!==k.node||G.focusOffset!==k.offset)){var z=ee.createRange();z.setStart(M.node,M.offset),G.removeAllRanges(),we>it?(G.addRange(z),G.extend(k.node,k.offset)):(z.setEnd(k.node,k.offset),G.addRange(z))}}}}for(ee=[],G=b;G=G.parentNode;)G.nodeType===1&&ee.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ee.length;b++){var J=ee[b];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Pd=!!Wp,Jp=Wp=null}finally{$e=d,le.p=u,Y.T=o}}n.current=s,Ft=2}}function wE(){if(Ft===2){Ft=0;var n=vs,s=Yo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=le.p;le.p=2;var d=$e;$e|=4;try{W0(n,s.alternate,s)}finally{$e=d,le.p=u,Y.T=o}}Ft=3}}function IE(){if(Ft===4||Ft===3){Ft=0,$l();var n=vs,s=Yo,o=Ir,u=cE;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Ft=5:(Ft=0,Yo=vs=null,AE(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(_s=null),tu(o),s=s.stateNode,mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(jr,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Y.T,d=le.p,le.p=2,Y.T=null;try{for(var m=n.onRecoverableError,_=0;_<u.length;_++){var b=u[_];m(b.value,{componentStack:b.stack})}}finally{Y.T=s,le.p=d}}(Ir&3)!==0&&wd(),Ui(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===Up?zu++:(zu=0,Up=n):zu=0,ju(0)}}function AE(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Eu(s)))}function wd(){return bE(),wE(),IE(),SE()}function SE(){if(Ft!==5)return!1;var n=vs,s=Mp;Mp=0;var o=tu(Ir),u=Y.T,d=le.p;try{le.p=32>o?32:o,Y.T=null,o=Lp,Lp=null;var m=vs,_=Ir;if(Ft=0,Yo=vs=null,Ir=0,($e&6)!==0)throw Error(i(331));var b=$e;if($e|=4,oE(m.current),rE(m,m.current,_,o),$e=b,ju(0,!1),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(jr,m)}catch{}return!0}finally{le.p=d,Y.T=u,AE(n,s)}}function RE(n,s,o){s=ai(o,s),s=gp(n.stateNode,s,2),n=ds(n,s,2),n!==null&&(Fr(n,2),Ui(n))}function Ze(n,s,o){if(n.tag===3)RE(n,n,o);else for(;s!==null;){if(s.tag===3){RE(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_s===null||!_s.has(u))){n=ai(o,n),o=x0(2),u=ds(s,o,2),u!==null&&(C0(o,u,s,n),Fr(u,2),Ui(u));break}}s=s.return}}function Bp(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new oR;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(Op=!0,d.add(o),n=dR.bind(null,n,s,o),s.then(n,n))}function dR(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,st===n&&(Le&o)===o&&(bt===4||bt===3&&(Le&62914560)===Le&&300>nn()-yd?($e&2)===0&&$o(n,0):Vp|=o,Qo===Le&&(Qo=0)),Ui(n)}function xE(n,s){s===0&&(s=Jl()),n=Ea(n,s),n!==null&&(Fr(n,s),Ui(n))}function fR(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),xE(n,o)}function mR(n,s){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),xE(n,o)}function pR(n,s){return sa(n,s)}var Id=null,Wo=null,qp=!1,Ad=!1,Fp=!1,Ts=0;function Ui(n){n!==Wo&&n.next===null&&(Wo===null?Id=Wo=n:Wo=Wo.next=n),Ad=!0,qp||(qp=!0,yR())}function ju(n,s){if(!Fp&&Ad){Fp=!0;do for(var o=!1,u=Id;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var _=u.suspendedLanes,b=u.pingedLanes;m=(1<<31-vn(42|n)+1)-1,m&=d&~(_&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,kE(u,m))}else m=Le,m=ni(u,u===st?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||qr(u,m)||(o=!0,kE(u,m));u=u.next}while(o);Fp=!1}}function gR(){CE()}function CE(){Ad=qp=!1;var n=0;Ts!==0&&RR()&&(n=Ts);for(var s=nn(),o=null,u=Id;u!==null;){var d=u.next,m=NE(u,s);m===0?(u.next=null,o===null?Id=d:o.next=d,d===null&&(Wo=o)):(o=u,(n!==0||(m&3)!==0)&&(Ad=!0)),u=d}Ft!==0&&Ft!==5||ju(n),Ts!==0&&(Ts=0)}function NE(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var _=31-vn(m),b=1<<_,C=d[_];C===-1?((b&o)===0||(b&u)!==0)&&(d[_]=yo(b,s)):C<=s&&(n.expiredLanes|=b),m&=~b}if(s=st,o=Le,o=ni(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Je===2||Je===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&go(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||qr(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&go(u),tu(o)){case 2:case 8:o=Kt;break;case 32:o=er;break;case 268435456:o=Xl;break;default:o=er}return u=DE.bind(null,n),o=sa(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&go(u),n.callbackPriority=2,n.callbackNode=null,2}function DE(n,s){if(Ft!==0&&Ft!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(wd()&&n.callbackNode!==o)return null;var u=Le;return u=ni(n,n===st?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(dE(n,u,s),NE(n,nn()),n.callbackNode!=null&&n.callbackNode===o?DE.bind(null,n):null)}function kE(n,s){if(wd())return null;dE(n,s,!0)}function yR(){CR(function(){($e&6)!==0?sa(qt,gR):CE()})}function Gp(){if(Ts===0){var n=Mo;n===0&&(n=oa,oa<<=1,(oa&261888)===0&&(oa=256)),Ts=n}return Ts}function OE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ki(""+n)}function VE(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function _R(n,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var m=OE((d[sn]||null).action),_=u.submitter;_&&(s=(s=_[sn]||null)?OE(s.formAction):_.getAttribute("formAction"),s!==null&&(m=s,_=null));var b=new fa("action","action",null,u,d);n.push({event:b,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ts!==0){var C=_?VE(d,_):new FormData(d);cp(o,{pending:!0,data:C,method:d.method,action:m},null,C)}}else typeof m=="function"&&(b.preventDefault(),C=_?VE(d,_):new FormData(d),cp(o,{pending:!0,data:C,method:d.method,action:m},m,C))},currentTarget:d}]})}}for(var Hp=0;Hp<Rm.length;Hp++){var Kp=Rm[Hp],vR=Kp.toLowerCase(),ER=Kp[0].toUpperCase()+Kp.slice(1);Ei(vR,"on"+ER)}Ei(hv,"onAnimationEnd"),Ei(dv,"onAnimationIteration"),Ei(fv,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(M1,"onTransitionRun"),Ei(L1,"onTransitionStart"),Ei(U1,"onTransitionCancel"),Ei(mv,"onTransitionEnd"),Di("onMouseEnter",["mouseout","mouseover"]),Di("onMouseLeave",["mouseout","mouseover"]),Di("onPointerEnter",["pointerout","pointerover"]),Di("onPointerLeave",["pointerout","pointerover"]),En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bu));function PE(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var _=u.length-1;0<=_;_--){var b=u[_],C=b.instance,j=b.currentTarget;if(b=b.listener,C!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=j;try{m(d)}catch(Q){jh(Q)}d.currentTarget=null,m=C}else for(_=0;_<u.length;_++){if(b=u[_],C=b.instance,j=b.currentTarget,b=b.listener,C!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=j;try{m(d)}catch(Q){jh(Q)}d.currentTarget=null,m=C}}}}function Pe(n,s){var o=s[Kr];o===void 0&&(o=s[Kr]=new Set);var u=n+"__bubble";o.has(u)||(ME(s,n,2,!1),o.add(u))}function Qp(n,s,o){var u=0;s&&(u|=4),ME(o,n,u,s)}var Sd="_reactListening"+Math.random().toString(36).slice(2);function Yp(n){if(!n[Sd]){n[Sd]=!0,_o.forEach(function(o){o!=="selectionchange"&&(TR.has(o)||Qp(o,!1,n),Qp(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Sd]||(s[Sd]=!0,Qp("selectionchange",!1,s))}}function ME(n,s,o,u){switch(hT(s)){case 2:var d=$R;break;case 8:d=XR;break;default:d=ug}o=d.bind(null,s,o,n),d=void 0,!uu||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,o,{capture:!0,passive:d}):n.addEventListener(s,o,!0):d!==void 0?n.addEventListener(s,o,{passive:d}):n.addEventListener(s,o,!1)}function $p(n,s,o,u,d){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var b=u.stateNode.containerInfo;if(b===d)break;if(_===4)for(_=u.return;_!==null;){var C=_.tag;if((C===3||C===4)&&_.stateNode.containerInfo===d)return;_=_.return}for(;b!==null;){if(_=rr(b),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){u=m=_;continue e}b=b.parentNode}}u=u.return}Ih(function(){var j=m,Q=wo(o),ee=[];e:{var q=pv.get(n);if(q!==void 0){var G=fa,fe=n;switch(n){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":G=Oh;break;case"focusin":fe="focus",G=ns;break;case"focusout":fe="blur",G=ns;break;case"beforeblur":case"afterblur":G=ns;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Ph;break;case hv:case dv:case fv:G=So;break;case mv:G=Ro;break;case"scroll":case"scrollend":G=Ah;break;case"wheel":G=Lh;break;case"copy":case"cut":case"paste":G=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=mu;break;case"toggle":case"beforetoggle":G=rs}var we=(s&4)!==0,it=!we&&(n==="scroll"||n==="scrollend"),M=we?q!==null?q+"Capture":null:q;we=[];for(var k=j,z;k!==null;){var J=k;if(z=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||z===null||M===null||(J=Dn(k,M),J!=null&&we.push(qu(k,J,z))),it)break;k=k.return}0<we.length&&(q=new G(q,fe,null,o,Q),ee.push({event:q,listeners:we}))}}if((s&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",q&&o!==bo&&(fe=o.relatedTarget||o.fromElement)&&(rr(fe)||fe[Ci]))break e;if((G||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,G?(fe=o.relatedTarget||o.toElement,G=j,fe=fe?rr(fe):null,fe!==null&&(it=l(fe),we=fe.tag,fe!==it||we!==5&&we!==27&&we!==6)&&(fe=null)):(G=null,fe=j),G!==fe)){if(we=Sh,J="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(we=mu,J="onPointerLeave",M="onPointerEnter",k="pointer"),it=G==null?q:ua(G),z=fe==null?q:ua(fe),q=new we(J,k+"leave",G,o,Q),q.target=it,q.relatedTarget=z,J=null,rr(Q)===j&&(we=new we(M,k+"enter",fe,o,Q),we.target=z,we.relatedTarget=it,J=we),it=J,G&&fe)t:{for(we=bR,M=G,k=fe,z=0,J=M;J;J=we(J))z++;J=0;for(var Ee=k;Ee;Ee=we(Ee))J++;for(;0<z-J;)M=we(M),z--;for(;0<J-z;)k=we(k),J--;for(;z--;){if(M===k||k!==null&&M===k.alternate){we=M;break t}M=we(M),k=we(k)}we=null}else we=null;G!==null&&LE(ee,q,G,we,!1),fe!==null&&it!==null&&LE(ee,it,fe,we,!0)}}e:{if(q=j?ua(j):window,G=q.nodeName&&q.nodeName.toLowerCase(),G==="select"||G==="input"&&q.type==="file")var Ke=ev;else if(kn(q))if(tv)Ke=O1;else{Ke=D1;var _e=N1}else G=q.nodeName,!G||G.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&ou(j.elementType)&&(Ke=ev):Ke=k1;if(Ke&&(Ke=Ke(n,j))){ya(ee,Ke,o,Q);break e}_e&&_e(n,q,j),n==="focusout"&&j&&q.type==="number"&&j.memoizedProps.value!=null&&To(q,"number",q.value)}switch(_e=j?ua(j):window,n){case"focusin":(kn(_e)||_e.contentEditable==="true")&&(xo=_e,Im=j,yu=null);break;case"focusout":yu=Im=xo=null;break;case"mousedown":Am=!0;break;case"contextmenu":case"mouseup":case"dragend":Am=!1,uv(ee,o,Q);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":uv(ee,o,Q)}var De;if(y)e:{switch(n){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else Oe?We(n,o)&&(Ue="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ue="onCompositionStart");Ue&&(U&&o.locale!=="ko"&&(Oe||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&Oe&&(De=Jr()):(Gn=Q,Io="value"in Gn?Gn.value:Gn.textContent,Oe=!0)),_e=Rd(j,Ue),0<_e.length&&(Ue=new hu(Ue,n,null,o,Q),ee.push({event:Ue,listeners:_e}),De?Ue.data=De:(De=Vt(o),De!==null&&(Ue.data=De)))),(De=I?Yt(n,o):$t(n,o))&&(Ue=Rd(j,"onBeforeInput"),0<Ue.length&&(_e=new hu("onBeforeInput","beforeinput",null,o,Q),ee.push({event:_e,listeners:Ue}),_e.data=De)),_R(ee,n,j,o,Q)}PE(ee,s)})}function qu(n,s,o){return{instance:n,listener:s,currentTarget:o}}function Rd(n,s){for(var o=s+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Dn(n,o),d!=null&&u.unshift(qu(n,d,m)),d=Dn(n,s),d!=null&&u.push(qu(n,d,m))),n.tag===3)return u;n=n.return}return[]}function bR(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function LE(n,s,o,u,d){for(var m=s._reactName,_=[];o!==null&&o!==u;){var b=o,C=b.alternate,j=b.stateNode;if(b=b.tag,C!==null&&C===u)break;b!==5&&b!==26&&b!==27||j===null||(C=j,d?(j=Dn(o,m),j!=null&&_.unshift(qu(o,j,C))):d||(j=Dn(o,m),j!=null&&_.push(qu(o,j,C)))),o=o.return}_.length!==0&&n.push({event:s,listeners:_})}var wR=/\r\n?/g,IR=/\u0000|\uFFFD/g;function UE(n){return(typeof n=="string"?n:""+n).replace(wR,`
`).replace(IR,"")}function zE(n,s){return s=UE(s),UE(n)===s}function nt(n,s,o,u,d,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||ri(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&ri(n,""+u);break;case"className":$r(n,"class",u);break;case"tabIndex":$r(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":$r(n,o,u);break;case"style":bh(n,u,m);break;case"data":if(s!=="object"){$r(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=ki(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&nt(n,s,"name",d.name,d,null),nt(n,s,"formEncType",d.formEncType,d,null),nt(n,s,"formMethod",d.formMethod,d,null),nt(n,s,"formTarget",d.formTarget,d,null)):(nt(n,s,"encType",d.encType,d,null),nt(n,s,"method",d.method,d,null),nt(n,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=ki(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Qt);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=ki(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Pe("beforetoggle",n),Pe("toggle",n),Yr(n,"popover",u);break;case"xlinkActuate":ii(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":ii(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":ii(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":ii(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":ii(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":ii(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":ii(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":ii(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":ii(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Yr(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=_m.get(o)||o,Yr(n,o,u))}}function Xp(n,s,o,u,d,m){switch(o){case"style":bh(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?ri(n,u):(typeof u=="number"||typeof u=="bigint")&&ri(n,""+u);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qr.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=n[sn]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(s,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Yr(n,o,u)}}}function un(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",n),Pe("load",n);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var _=o[m];if(_!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:nt(n,s,m,_,o,null)}}d&&nt(n,s,"srcSet",o.srcSet,o,null),u&&nt(n,s,"src",o.src,o,null);return;case"input":Pe("invalid",n);var b=m=_=d=null,C=null,j=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":d=Q;break;case"type":_=Q;break;case"checked":C=Q;break;case"defaultChecked":j=Q;break;case"value":m=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,s));break;default:nt(n,s,u,Q,o,null)}}ca(n,m,b,C,j,_,d,!1);return;case"select":Pe("invalid",n),u=_=m=null;for(d in o)if(o.hasOwnProperty(d)&&(b=o[d],b!=null))switch(d){case"value":m=b;break;case"defaultValue":_=b;break;case"multiple":u=b;default:nt(n,s,d,b,o,null)}s=m,o=_,n.multiple=!!u,s!=null?He(n,!!u,s,!1):o!=null&&He(n,!!u,o,!0);return;case"textarea":Pe("invalid",n),m=d=u=null;for(_ in o)if(o.hasOwnProperty(_)&&(b=o[_],b!=null))switch(_){case"value":u=b;break;case"defaultValue":d=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:nt(n,s,_,b,o,null)}Wr(n,u,d,m);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(n,s,C,u,o,null)}return;case"dialog":Pe("beforetoggle",n),Pe("toggle",n),Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":Pe("load",n);break;case"video":case"audio":for(u=0;u<Bu.length;u++)Pe(Bu[u],n);break;case"image":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"embed":case"source":case"link":Pe("error",n),Pe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(u=o[j],u!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:nt(n,s,j,u,o,null)}return;default:if(ou(s)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Xp(n,s,Q,u,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(u=o[b],u!=null&&nt(n,s,b,u,o,null))}function AR(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,_=null,b=null,C=null,j=null,Q=null;for(G in o){var ee=o[G];if(o.hasOwnProperty(G)&&ee!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":C=ee;default:u.hasOwnProperty(G)||nt(n,s,G,null,u,ee)}}for(var q in u){var G=u[q];if(ee=o[q],u.hasOwnProperty(q)&&(G!=null||ee!=null))switch(q){case"type":m=G;break;case"name":d=G;break;case"checked":j=G;break;case"defaultChecked":Q=G;break;case"value":_=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,s));break;default:G!==ee&&nt(n,s,q,G,u,ee)}}Xr(n,_,b,C,j,Q,m,d);return;case"select":G=_=b=q=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":G=C;default:u.hasOwnProperty(m)||nt(n,s,m,null,u,C)}for(d in u)if(m=u[d],C=o[d],u.hasOwnProperty(d)&&(m!=null||C!=null))switch(d){case"value":q=m;break;case"defaultValue":b=m;break;case"multiple":_=m;default:m!==C&&nt(n,s,d,m,u,C)}s=b,o=_,u=G,q!=null?He(n,!!o,q,!1):!!u!=!!o&&(s!=null?He(n,!!o,s,!0):He(n,!!o,o?[]:"",!1));return;case"textarea":G=q=null;for(b in o)if(d=o[b],o.hasOwnProperty(b)&&d!=null&&!u.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:nt(n,s,b,null,u,d)}for(_ in u)if(d=u[_],m=o[_],u.hasOwnProperty(_)&&(d!=null||m!=null))switch(_){case"value":q=d;break;case"defaultValue":G=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&nt(n,s,_,d,u,m)}ha(n,q,G);return;case"option":for(var fe in o)if(q=o[fe],o.hasOwnProperty(fe)&&q!=null&&!u.hasOwnProperty(fe))switch(fe){case"selected":n.selected=!1;break;default:nt(n,s,fe,null,u,q)}for(C in u)if(q=u[C],G=o[C],u.hasOwnProperty(C)&&q!==G&&(q!=null||G!=null))switch(C){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:nt(n,s,C,q,u,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)q=o[we],o.hasOwnProperty(we)&&q!=null&&!u.hasOwnProperty(we)&&nt(n,s,we,null,u,q);for(j in u)if(q=u[j],G=o[j],u.hasOwnProperty(j)&&q!==G&&(q!=null||G!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,s));break;default:nt(n,s,j,q,u,G)}return;default:if(ou(s)){for(var it in o)q=o[it],o.hasOwnProperty(it)&&q!==void 0&&!u.hasOwnProperty(it)&&Xp(n,s,it,void 0,u,q);for(Q in u)q=u[Q],G=o[Q],!u.hasOwnProperty(Q)||q===G||q===void 0&&G===void 0||Xp(n,s,Q,q,u,G);return}}for(var M in o)q=o[M],o.hasOwnProperty(M)&&q!=null&&!u.hasOwnProperty(M)&&nt(n,s,M,null,u,q);for(ee in u)q=u[ee],G=o[ee],!u.hasOwnProperty(ee)||q===G||q==null&&G==null||nt(n,s,ee,q,u,G)}function jE(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SR(){if(typeof performance.getEntriesByType=="function"){for(var n=0,s=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],m=d.transferSize,_=d.initiatorType,b=d.duration;if(m&&b&&jE(_)){for(_=0,b=d.responseEnd,u+=1;u<o.length;u++){var C=o[u],j=C.startTime;if(j>b)break;var Q=C.transferSize,ee=C.initiatorType;Q&&jE(ee)&&(C=C.responseEnd,_+=Q*(C<b?1:(b-j)/(C-j)))}if(--u,s+=8*(m+_)/(d.duration/1e3),n++,10<n)break}}if(0<n)return s/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wp=null,Jp=null;function xd(n){return n.nodeType===9?n:n.ownerDocument}function BE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qE(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Zp(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var eg=null;function RR(){var n=window.event;return n&&n.type==="popstate"?n===eg?!1:(eg=n,!0):(eg=null,!1)}var FE=typeof setTimeout=="function"?setTimeout:void 0,xR=typeof clearTimeout=="function"?clearTimeout:void 0,GE=typeof Promise=="function"?Promise:void 0,CR=typeof queueMicrotask=="function"?queueMicrotask:typeof GE<"u"?function(n){return GE.resolve(null).then(n).catch(NR)}:FE;function NR(n){setTimeout(function(){throw n})}function bs(n){return n==="head"}function HE(n,s){var o=s,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(d),tl(s);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Fu(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,Fu(o);for(var m=o.firstChild;m;){var _=m.nextSibling,b=m.nodeName;m[ir]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=_}}else o==="body"&&Fu(n.ownerDocument.body);o=d}while(o);tl(s)}function KE(n,s){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function tg(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":tg(o),la(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function DR(n,s,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[ir])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=hi(n.nextSibling),n===null)break}return null}function kR(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=hi(n.nextSibling),n===null))return null;return n}function QE(n,s){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=hi(n.nextSibling),n===null))return null;return n}function ng(n){return n.data==="$?"||n.data==="$~"}function ig(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function OR(n,s){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=s;else if(n.data!=="$?"||o.readyState!=="loading")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function hi(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return n}var rg=null;function YE(n){n=n.nextSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(s===0)return hi(n.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}n=n.nextSibling}return null}function $E(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return n;s--}else o!=="/$"&&o!=="/&"||s++}n=n.previousSibling}return null}function XE(n,s,o){switch(s=xd(o),n){case"html":if(n=s.documentElement,!n)throw Error(i(452));return n;case"head":if(n=s.head,!n)throw Error(i(453));return n;case"body":if(n=s.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Fu(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);la(n)}var di=new Map,WE=new Set;function Cd(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ar=le.d;le.d={f:VR,r:PR,D:MR,C:LR,L:UR,m:zR,X:BR,S:jR,M:qR};function VR(){var n=Ar.f(),s=Ed();return n||s}function PR(n){var s=sr(n);s!==null&&s.tag===5&&s.type==="form"?m0(s):Ar.r(n)}var Jo=typeof document>"u"?null:document;function JE(n,s,o){var u=Jo;if(u&&typeof s=="string"&&s){var d=Et(s);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),WE.has(d)||(WE.add(d),n={rel:n,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),un(s,"link",n),xt(s),u.head.appendChild(s)))}}function MR(n){Ar.D(n),JE("dns-prefetch",n,null)}function LR(n,s){Ar.C(n,s),JE("preconnect",n,s)}function UR(n,s,o){Ar.L(n,s,o);var u=Jo;if(u&&n&&s){var d='link[rel="preload"][as="'+Et(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Et(o.imageSizes)+'"]')):d+='[href="'+Et(n)+'"]';var m=d;switch(s){case"style":m=Zo(n);break;case"script":m=el(n)}di.has(m)||(n=T({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),di.set(m,n),u.querySelector(d)!==null||s==="style"&&u.querySelector(Gu(m))||s==="script"&&u.querySelector(Hu(m))||(s=u.createElement("link"),un(s,"link",n),xt(s),u.head.appendChild(s)))}}function zR(n,s){Ar.m(n,s);var o=Jo;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=el(n)}if(!di.has(m)&&(n=T({rel:"modulepreload",href:n},s),di.set(m,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Hu(m)))return}u=o.createElement("link"),un(u,"link",n),xt(u),o.head.appendChild(u)}}}function jR(n,s,o){Ar.S(n,s,o);var u=Jo;if(u&&n){var d=_i(u).hoistableStyles,m=Zo(n);s=s||"default";var _=d.get(m);if(!_){var b={loading:0,preload:null};if(_=u.querySelector(Gu(m)))b.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":s},o),(o=di.get(m))&&sg(n,o);var C=_=u.createElement("link");xt(C),un(C,"link",n),C._p=new Promise(function(j,Q){C.onload=j,C.onerror=Q}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Nd(_,s,u)}_={type:"stylesheet",instance:_,count:1,state:b},d.set(m,_)}}}function BR(n,s){Ar.X(n,s);var o=Jo;if(o&&n){var u=_i(o).hoistableScripts,d=el(n),m=u.get(d);m||(m=o.querySelector(Hu(d)),m||(n=T({src:n,async:!0},s),(s=di.get(d))&&ag(n,s),m=o.createElement("script"),xt(m),un(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function qR(n,s){Ar.M(n,s);var o=Jo;if(o&&n){var u=_i(o).hoistableScripts,d=el(n),m=u.get(d);m||(m=o.querySelector(Hu(d)),m||(n=T({src:n,async:!0,type:"module"},s),(s=di.get(d))&&ag(n,s),m=o.createElement("script"),xt(m),un(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function ZE(n,s,o,u){var d=(d=ke.current)?Cd(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Zo(o.href),o=_i(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Zo(o.href);var m=_i(d).hoistableStyles,_=m.get(n);if(_||(d=d.ownerDocument||d,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,_),(m=d.querySelector(Gu(n)))&&!m._p&&(_.instance=m,_.state.loading=5),di.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},di.set(n,o),m||FR(d,n,o,_.state))),s&&u===null)throw Error(i(528,""));return _}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=el(o),o=_i(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Zo(n){return'href="'+Et(n)+'"'}function Gu(n){return'link[rel="stylesheet"]['+n+"]"}function eT(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function FR(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),un(s,"link",o),xt(s),n.head.appendChild(s))}function el(n){return'[src="'+Et(n)+'"]'}function Hu(n){return"script[async]"+n}function tT(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return s.instance=u,xt(u),u;var d=T({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),xt(u),un(u,"style",d),Nd(u,o.precedence,n),s.instance=u;case"stylesheet":d=Zo(o.href);var m=n.querySelector(Gu(d));if(m)return s.state.loading|=4,s.instance=m,xt(m),m;u=eT(o),(d=di.get(d))&&sg(u,d),m=(n.ownerDocument||n).createElement("link"),xt(m);var _=m;return _._p=new Promise(function(b,C){_.onload=b,_.onerror=C}),un(m,"link",u),s.state.loading|=4,Nd(m,o.precedence,n),s.instance=m;case"script":return m=el(o.src),(d=n.querySelector(Hu(m)))?(s.instance=d,xt(d),d):(u=o,(d=di.get(m))&&(u=T({},o),ag(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),xt(d),un(d,"link",u),n.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Nd(u,o.precedence,n));return s.instance}function Nd(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,_=0;_<u.length;_++){var b=u[_];if(b.dataset.precedence===s)m=b;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function sg(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function ag(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var Dd=null;function nT(n,s,o){if(Dd===null){var u=new Map,d=Dd=new Map;d.set(o,u)}else d=Dd,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[ir]||m[vt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var _=m.getAttribute(s)||"";_=n+_;var b=u.get(_);b?b.push(m):u.set(_,[m])}}return u}function iT(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function GR(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function rT(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function HR(n,s,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=Zo(u.href),m=s.querySelector(Gu(d));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(n.count++,n=kd.bind(n),s.then(n,n)),o.state.loading|=4,o.instance=m,xt(m);return}m=s.ownerDocument||s,u=eT(u),(d=di.get(d))&&sg(u,d),m=m.createElement("link"),xt(m);var _=m;_._p=new Promise(function(b,C){_.onload=b,_.onerror=C}),un(m,"link",u),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=kd.bind(n),s.addEventListener("load",o),s.addEventListener("error",o))}}var og=0;function KR(n,s){return n.stylesheets&&n.count===0&&Vd(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&Vd(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+s);0<n.imgBytes&&og===0&&(og=62500*SR());var d=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Vd(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>og?50:800)+s);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function kd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Od=null;function Vd(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Od=new Map,s.forEach(QR,n),Od=null,kd.call(n))}function QR(n,s){if(!(s.state.loading&4)){var o=Od.get(n);if(o)var u=o.get(null);else{o=new Map,Od.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var _=d[m];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(o.set(_.dataset.precedence,_),u=_)}u&&o.set(null,u)}d=s.instance,_=d.getAttribute("data-precedence"),m=o.get(_)||u,m===u&&o.set(null,d),o.set(_,d),this.count++,u=kd.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),s.state.loading|=4}}var Ku={$$typeof:ae,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function YR(n,s,o,u,d,m,_,b,C){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tr(0),this.hiddenUpdates=tr(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function sT(n,s,o,u,d,m,_,b,C,j,Q,ee){return n=new YR(n,s,o,_,C,j,Q,ee,b),s=1,m===!0&&(s|=24),m=Kn(3,null,null,s),n.current=m,m.stateNode=n,s=jm(),s.refCount++,n.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Gm(m),n}function aT(n){return n?(n=Do,n):Do}function oT(n,s,o,u,d,m){d=aT(d),u.context===null?u.context=d:u.pendingContext=d,u=hs(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ds(n,u,s),o!==null&&(Ln(o,n,s),Iu(o,n,s))}function lT(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function lg(n,s){lT(n,s),(n=n.alternate)&&lT(n,s)}function uT(n){if(n.tag===13||n.tag===31){var s=Ea(n,67108864);s!==null&&Ln(s,n,67108864),lg(n,67108864)}}function cT(n){if(n.tag===13||n.tag===31){var s=Wn();s=eu(s);var o=Ea(n,s);o!==null&&Ln(o,n,s),lg(n,s)}}var Pd=!0;function $R(n,s,o,u){var d=Y.T;Y.T=null;var m=le.p;try{le.p=2,ug(n,s,o,u)}finally{le.p=m,Y.T=d}}function XR(n,s,o,u){var d=Y.T;Y.T=null;var m=le.p;try{le.p=8,ug(n,s,o,u)}finally{le.p=m,Y.T=d}}function ug(n,s,o,u){if(Pd){var d=cg(u);if(d===null)$p(n,s,u,Md,o),dT(n,u);else if(JR(d,n,s,o,u))u.stopPropagation();else if(dT(n,u),s&4&&-1<WR.indexOf(n)){for(;d!==null;){var m=sr(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var _=yi(m.pendingLanes);if(_!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var C=1<<31-vn(_);b.entanglements[1]|=C,_&=~C}Ui(m),($e&6)===0&&(_d=nn()+500,ju(0))}}break;case 31:case 13:b=Ea(m,2),b!==null&&Ln(b,m,2),Ed(),lg(m,2)}if(m=cg(u),m===null&&$p(n,s,u,Md,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else $p(n,s,u,null,o)}}function cg(n){return n=wo(n),hg(n)}var Md=null;function hg(n){if(Md=null,n=rr(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===31){if(n=f(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return Md=n,null}function hT(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ph()){case qt:return 2;case Kt:return 8;case er:case gh:return 32;case Xl:return 268435456;default:return 32}default:return 32}}var dg=!1,ws=null,Is=null,As=null,Qu=new Map,Yu=new Map,Ss=[],WR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dT(n,s){switch(n){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":Qu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yu.delete(s.pointerId)}}function $u(n,s,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},s!==null&&(s=sr(s),s!==null&&uT(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function JR(n,s,o,u,d){switch(s){case"focusin":return ws=$u(ws,n,s,o,u,d),!0;case"dragenter":return Is=$u(Is,n,s,o,u,d),!0;case"mouseover":return As=$u(As,n,s,o,u,d),!0;case"pointerover":var m=d.pointerId;return Qu.set(m,$u(Qu.get(m)||null,n,s,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Yu.set(m,$u(Yu.get(m)||null,n,s,o,u,d)),!0}return!1}function fT(n){var s=rr(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,_h(n.priority,function(){cT(o)});return}}else if(s===31){if(s=f(o),s!==null){n.blockedOn=s,_h(n.priority,function(){cT(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ld(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=cg(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);bo=u,o.target.dispatchEvent(u),bo=null}else return s=sr(o),s!==null&&uT(s),n.blockedOn=o,!1;s.shift()}return!0}function mT(n,s,o){Ld(n)&&o.delete(s)}function ZR(){dg=!1,ws!==null&&Ld(ws)&&(ws=null),Is!==null&&Ld(Is)&&(Is=null),As!==null&&Ld(As)&&(As=null),Qu.forEach(mT),Yu.forEach(mT)}function Ud(n,s){n.blockedOn===s&&(n.blockedOn=null,dg||(dg=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ZR)))}var zd=null;function pT(n){zd!==n&&(zd=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zd===n&&(zd=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],d=n[s+2];if(typeof u!="function"){if(hg(u||o)===null)continue;break}var m=sr(o);m!==null&&(n.splice(s,3),s-=3,cp(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function tl(n){function s(C){return Ud(C,n)}ws!==null&&Ud(ws,n),Is!==null&&Ud(Is,n),As!==null&&Ud(As,n),Qu.forEach(s),Yu.forEach(s);for(var o=0;o<Ss.length;o++){var u=Ss[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Ss.length&&(o=Ss[0],o.blockedOn===null);)fT(o),o.blockedOn===null&&Ss.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],_=d[sn]||null;if(typeof m=="function")_||pT(o);else if(_){var b=null;if(m&&m.hasAttribute("formAction")){if(d=m,_=m[sn]||null)b=_.formAction;else if(hg(d)!==null)continue}else b=_.action;typeof b=="function"?o[u+1]=b:(o.splice(u,3),u-=3),pT(o)}}}function gT(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(_){return d=_})},focusReset:"manual",scroll:"manual"})}function s(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),d!==null&&(d(),d=null)}}}function fg(n){this._internalRoot=n}jd.prototype.render=fg.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Wn();oT(o,u,n,s,null,null)},jd.prototype.unmount=fg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;oT(n.current,2,null,n,null,null),Ed(),s[Ci]=null}};function jd(n){this._internalRoot=n}jd.prototype.unstable_scheduleHydration=function(n){if(n){var s=nr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Ss.length&&s!==0&&s<Ss[o].priority;o++);Ss.splice(o,0,n),o===0&&fT(n)}};var yT=e.version;if(yT!=="19.2.4")throw Error(i(527,yT,"19.2.4"));le.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=g(s),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var ex={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bd.isDisabled&&Bd.supportsFiber)try{jr=Bd.inject(ex),mn=Bd}catch{}}return Wu.createRoot=function(n,s){if(!a(n))throw Error(i(299));var o=!1,u="",d=I0,m=A0,_=S0;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError)),s=sT(n,1,!1,null,null,o,u,null,d,m,_,gT),n[Ci]=s.current,Yp(n),new fg(s)},Wu.hydrateRoot=function(n,s,o){if(!a(n))throw Error(i(299));var u=!1,d="",m=I0,_=A0,b=S0,C=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(_=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.formState!==void 0&&(C=o.formState)),s=sT(n,1,!0,s,o??null,u,d,C,m,_,b,gT),s.context=aT(null),o=s.current,u=Wn(),u=eu(u),d=hs(u),d.callback=null,ds(o,d,u),o=u,s.current.lanes=o,Fr(s,o),Ui(s),n[Ci]=s.current,Yp(n),new jd(s)},Wu.version="19.2.4",Wu}var RT;function fx(){if(RT)return yg.exports;RT=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yg.exports=dx(),yg.exports}var mx=fx();const px=Rw(mx),gx="modulepreload",yx=function(r){return"/"+r},xT={},Ai=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=c(t.map(g=>{if(g=yx(g),g in xT)return;xT[g]=!0;const v=g.endsWith(".css"),T=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const w=document.createElement("link");if(w.rel=v?"stylesheet":gx,v||(w.as="script"),w.crossOrigin="",w.href=g,p&&w.setAttribute("nonce",p),document.head.appendChild(w),v)return new Promise((D,F)=>{w.addEventListener("load",D),w.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var CT={};/**
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
 */const xw=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let a=r.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},_x=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const a=r[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=r[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=r[t++],c=r[t++],f=r[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],c=r[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Cw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<r.length;a+=3){const l=r[a],c=a+1<r.length,f=c?r[a+1]:0,p=a+2<r.length,g=p?r[a+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let w=(f&15)<<2|g>>6,D=g&63;p||(D=64,c||(w=64)),i.push(t[v],t[T],t[w],t[D])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(xw(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_x(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<r.length;){const l=t[r.charAt(a++)],f=a<r.length?t[r.charAt(a)]:0;++a;const g=a<r.length?t[r.charAt(a)]:64;++a;const T=a<r.length?t[r.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new vx;const w=l<<2|f>>4;if(i.push(w),g!==64){const D=f<<4&240|g>>2;if(i.push(D),T!==64){const F=g<<6&192|T;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ex=function(r){const e=xw(r);return Cw.encodeByteArray(e,!0)},lf=function(r){return Ex(r).replace(/\./g,"")},Nw=function(r){try{return Cw.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function uf(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tx(t)||(r[t]=uf(r[t],e[t]));return r}function Tx(r){return r!=="__proto__"}/**
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
 */function Dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bx=()=>Dw().__FIREBASE_DEFAULTS__,wx=()=>{if(typeof process>"u"||typeof CT>"u")return;const r=CT.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ix=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Nw(r[1]);return e&&JSON.parse(e)},Ty=()=>{try{return bx()||wx()||Ix()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},kw=()=>{var r;return(r=Ty())===null||r===void 0?void 0:r.config},Ax=r=>{var e;return(e=Ty())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Sx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Rx(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[lf(JSON.stringify(t)),lf(JSON.stringify(c)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function by(){var r;const e=(r=Ty())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cx(){return typeof window<"u"||Ow()}function Ow(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Nx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pw(){const r=_t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Mw(){return!by()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wc(){try{return typeof indexedDB=="object"}catch{return!1}}function Dx(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const kx="FirebaseError";class Rn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=kx,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Ox(l,i):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Rn(a,f,i)}}function Ox(r,e){return r.replace(Vx,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const Vx=/\{\$([^}]+)}/g;/**
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
 */function NT(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Px(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ic(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=r[a],c=e[a];if(DT(l)&&DT(c)){if(!Ic(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function DT(r){return r!==null&&typeof r=="object"}/**
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
 */function Ml(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function dl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function oc(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Lw(r,e){const t=new Mx(r,e);return t.subscribe.bind(t)}class Mx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Lx(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=Tg),a.error===void 0&&(a.error=Tg),a.complete===void 0&&(a.complete=Tg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lx(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Tg(){}/**
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
 */function be(r){return r&&r._delegate?r._delegate:r}class Yi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Va="[DEFAULT]";/**
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
 */class Ux{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Sx;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jx(e))try{this.getOrInitializeService({instanceIdentifier:Va})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Va){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Va){return this.instances.has(e)}getOptions(e=Va){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zx(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Va){return this.component?this.component.multipleInstances?e:Va:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zx(r){return r===Va?void 0:r}function jx(r){return r.instantiationMode==="EAGER"}/**
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
 */class Uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ux(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Iy=[];var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const zw={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Bx=Me.INFO,qx={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Fx=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),a=qx[e];if(a)console[a](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nf{constructor(e){this.name=e,this._logLevel=Bx,this._logHandler=Fx,this._userLogHandler=null,Iy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}function Gx(r){Iy.forEach(e=>{e.setLogLevel(r)})}function Hx(r,e){for(const t of Iy){let i=null;e&&e.level&&(i=zw[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");l>=(i??a.logLevel)&&r({level:Me[l].toLowerCase(),message:f,args:c,type:a.name})}}}const Kx=(r,e)=>e.some(t=>r instanceof t);let kT,OT;function Qx(){return kT||(kT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yx(){return OT||(OT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jw=new WeakMap,Ug=new WeakMap,Bw=new WeakMap,bg=new WeakMap,Ay=new WeakMap;function $x(r){const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(Ms(r.result)),a()},c=()=>{i(r.error),a()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&jw.set(t,r)}).catch(()=>{}),Ay.set(e,r),e}function Xx(r){if(Ug.has(r))return;const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});Ug.set(r,e)}let zg={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ug.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Bw.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ms(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Wx(r){zg=r(zg)}function Jx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(wg(this),e,...t);return Bw.set(i,e.sort?e.sort():[e]),Ms(i)}:Yx().includes(r)?function(...e){return r.apply(wg(this),e),Ms(jw.get(this))}:function(...e){return Ms(r.apply(wg(this),e))}}function Zx(r){return typeof r=="function"?Jx(r):(r instanceof IDBTransaction&&Xx(r),Kx(r,Qx())?new Proxy(r,zg):r)}function Ms(r){if(r instanceof IDBRequest)return $x(r);if(bg.has(r))return bg.get(r);const e=Zx(r);return e!==r&&(bg.set(r,e),Ay.set(e,r)),e}const wg=r=>Ay.get(r);function eC(r,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(r,e),f=Ms(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ms(c.result),p.oldVersion,p.newVersion,Ms(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const tC=["get","getKey","getAll","getAllKeys","count"],nC=["put","add","delete","clear"],Ig=new Map;function VT(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ig.get(e))return Ig.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=nC.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||tC.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return Ig.set(e,l),l}Wx(r=>({...r,get:(e,t,i)=>VT(e,t)||r.get(e,t,i),has:(e,t)=>!!VT(e,t)||r.has(e,t)}));/**
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
 */class iC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rC(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function rC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cf="@firebase/app",jg="0.10.13";/**
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
 */const Dr=new Nf("@firebase/app"),sC="@firebase/app-compat",aC="@firebase/analytics-compat",oC="@firebase/analytics",lC="@firebase/app-check-compat",uC="@firebase/app-check",cC="@firebase/auth",hC="@firebase/auth-compat",dC="@firebase/database",fC="@firebase/data-connect",mC="@firebase/database-compat",pC="@firebase/functions",gC="@firebase/functions-compat",yC="@firebase/installations",_C="@firebase/installations-compat",vC="@firebase/messaging",EC="@firebase/messaging-compat",TC="@firebase/performance",bC="@firebase/performance-compat",wC="@firebase/remote-config",IC="@firebase/remote-config-compat",AC="@firebase/storage",SC="@firebase/storage-compat",RC="@firebase/firestore",xC="@firebase/vertexai-preview",CC="@firebase/firestore-compat",NC="firebase",DC="10.14.1";/**
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
 */const zs="[DEFAULT]",kC={[cf]:"fire-core",[sC]:"fire-core-compat",[oC]:"fire-analytics",[aC]:"fire-analytics-compat",[uC]:"fire-app-check",[lC]:"fire-app-check-compat",[cC]:"fire-auth",[hC]:"fire-auth-compat",[dC]:"fire-rtdb",[fC]:"fire-data-connect",[mC]:"fire-rtdb-compat",[pC]:"fire-fn",[gC]:"fire-fn-compat",[yC]:"fire-iid",[_C]:"fire-iid-compat",[vC]:"fire-fcm",[EC]:"fire-fcm-compat",[TC]:"fire-perf",[bC]:"fire-perf-compat",[wC]:"fire-rc",[IC]:"fire-rc-compat",[AC]:"fire-gcs",[SC]:"fire-gcs-compat",[RC]:"fire-fst",[CC]:"fire-fst-compat",[xC]:"fire-vertex","fire-js":"fire-js",[NC]:"fire-js-all"};/**
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
 */const js=new Map,vl=new Map,El=new Map;function Ac(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function qw(r,e){r.container.addOrOverwriteComponent(e)}function Bs(r){const e=r.name;if(El.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,r);for(const t of js.values())Ac(t,r);for(const t of vl.values())Ac(t,r);return!0}function Fw(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function OC(r,e,t=zs){Fw(r,e).clearInstance(t)}function Gw(r){return r.options!==void 0}function wt(r){return r.settings!==void 0}function VC(){El.clear()}/**
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
 */const PC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new so("app","Firebase",PC);/**
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
 */let Hw=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}};/**
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
 */class MC extends Hw{constructor(e,t,i,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,c={name:i,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:l},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,wi(cf,jg,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ry(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw mi.create("server-app-deleted")}}/**
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
 */const Xs=DC;function Sy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zs,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw mi.create("bad-app-name",{appName:String(a)});if(t||(t=kw()),!t)throw mi.create("no-options");const l=js.get(a);if(l){if(Ic(t,l.options)&&Ic(i,l.config))return l;throw mi.create("duplicate-app",{appName:a})}const c=new Uw(a);for(const p of El.values())c.addComponent(p);const f=new Hw(t,i,c);return js.set(a,f),f}function LC(r,e){if(Cx()&&!Ow())throw mi.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Gw(r)?t=r.options:t=r;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const a=g=>[...g].reduce((v,T)=>Math.imul(31,v)+T.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw mi.create("finalization-registry-not-supported",{});const l=""+a(JSON.stringify(i)),c=vl.get(l);if(c)return c.incRefCount(e.releaseOnDeref),c;const f=new Uw(l);for(const g of El.values())f.addComponent(g);const p=new MC(t,e,l,f);return vl.set(l,p),p}function UC(r=zs){const e=js.get(r);if(!e&&r===zs&&kw())return Sy();if(!e)throw mi.create("no-app",{appName:r});return e}function zC(){return Array.from(js.values())}async function Ry(r){let e=!1;const t=r.name;js.has(t)?(e=!0,js.delete(t)):vl.has(t)&&r.decRefCount()<=0&&(vl.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(i=>i.delete())),r.isDeleted=!0)}function wi(r,e,t){var i;let a=(i=kC[r])!==null&&i!==void 0?i:r;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(f.join(" "));return}Bs(new Yi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function Kw(r,e){if(r!==null&&typeof r!="function")throw mi.create("invalid-log-argument");Hx(r,e)}function Qw(r){Gx(r)}/**
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
 */const jC="firebase-heartbeat-database",BC=1,Sc="firebase-heartbeat-store";let Ag=null;function Yw(){return Ag||(Ag=eC(jC,BC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Sc)}catch(t){console.warn(t)}}}}).catch(r=>{throw mi.create("idb-open",{originalErrorMessage:r.message})})),Ag}async function qC(r){try{const t=(await Yw()).transaction(Sc),i=await t.objectStore(Sc).get($w(r));return await t.done,i}catch(e){if(e instanceof Rn)Dr.warn(e.message);else{const t=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function PT(r,e){try{const i=(await Yw()).transaction(Sc,"readwrite");await i.objectStore(Sc).put(e,$w(r)),await i.done}catch(t){if(t instanceof Rn)Dr.warn(t.message);else{const i=mi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(i.message)}}}function $w(r){return`${r.name}!${r.options.appId}`}/**
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
 */const FC=1024,GC=720*60*60*1e3;class HC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QC(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=MT();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=GC}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=MT(),{heartbeatsToSend:i,unsentEntries:a}=KC(this._heartbeatsCache.heartbeats),l=lf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Dr.warn(t),""}}}function MT(){return new Date().toISOString().substring(0,10)}function KC(r,e=FC){const t=[];let i=r.slice();for(const a of r){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),LT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),LT(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class QC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?Dx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return PT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return PT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function LT(r){return lf(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function YC(r){Bs(new Yi("platform-logger",e=>new iC(e),"PRIVATE")),Bs(new Yi("heartbeat",e=>new HC(e),"PRIVATE")),wi(cf,jg,r),wi(cf,jg,"esm2017"),wi("fire-js","")}YC("");const $C=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Rn,SDK_VERSION:Xs,_DEFAULT_ENTRY_NAME:zs,_addComponent:Ac,_addOrOverwriteComponent:qw,_apps:js,_clearComponents:VC,_components:El,_getProvider:Fw,_isFirebaseApp:Gw,_isFirebaseServerApp:wt,_registerComponent:Bs,_removeServiceInstance:OC,_serverApps:vl,deleteApp:Ry,getApp:UC,getApps:zC,initializeApp:Sy,initializeServerApp:LC,onLog:Kw,registerVersion:wi,setLogLevel:Qw},Symbol.toStringTag,{value:"Module"}));/**
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
 */class XC{constructor(e,t){this._delegate=e,this.firebase=t,Ac(e,new Yi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ry(this._delegate)))}_getService(e,t=zs){var i;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((i=a.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=zs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ac(this._delegate,e)}_addOrOverwriteComponent(e){qw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const WC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},UT=new so("app-compat","Firebase",WC);/**
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
 */function JC(r){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:wi,setLogLevel:Qw,onLog:Kw,apps:null,SDK_VERSION:Xs,INTERNAL:{registerComponent:f,removeApp:i,useAsService:p,modularAPIs:$C}};t.default=t,Object.defineProperty(t,"apps",{get:c});function i(g){delete e[g]}function a(g){if(g=g||zs,!NT(e,g))throw UT.create("no-app",{appName:g});return e[g]}a.App=r;function l(g,v={}){const T=Sy(g,v);if(NT(e,T.name))return e[T.name];const w=new r(T,t);return e[T.name]=w,w}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const v=g.name,T=v.replace("-compat","");if(Bs(g)&&g.type==="PUBLIC"){const w=(D=a())=>{if(typeof D[T]!="function")throw UT.create("invalid-app-argument",{appName:v});return D[T]()};g.serviceProps!==void 0&&uf(w,g.serviceProps),t[T]=w,r.prototype[T]=function(...D){return this._getService.bind(this,v).apply(this,g.multipleInstances?D:[])}}return g.type==="PUBLIC"?t[T]:null}function p(g,v){return v==="serverAuth"?null:v}return t}/**
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
 */function Xw(){const r=JC(XC);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:Xw,extendNamespace:e,createSubscribe:Lw,ErrorFactory:so,deepExtend:uf});function e(t){uf(r,t)}return r}const ZC=Xw();/**
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
 */const zT=new Nf("@firebase/app-compat"),e2="@firebase/app-compat",t2="0.2.43";/**
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
 */function n2(r){wi(e2,t2,r)}/**
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
 */try{const r=Dw();if(r.firebase!==void 0){zT.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&zT.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Ls=ZC;n2();var i2="firebase",r2="10.14.1";/**
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
 */Ls.registerVersion(i2,r2,"app-compat");function xy(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(r);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(r,i[a])&&(t[i[a]]=r[i[a]]);return t}const Ju={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},nl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function s2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Ww(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a2=s2,o2=Ww,Jw=new so("auth","Firebase",Ww());/**
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
 */const hf=new Nf("@firebase/auth");function l2(r,...e){hf.logLevel<=Me.WARN&&hf.warn(`Auth (${Xs}): ${r}`,...e)}function $d(r,...e){hf.logLevel<=Me.ERROR&&hf.error(`Auth (${Xs}): ${r}`,...e)}/**
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
 */function fn(r,...e){throw Ny(r,...e)}function Gt(r,...e){return Ny(r,...e)}function Cy(r,e,t){const i=Object.assign(Object.assign({},o2()),{[e]:t});return new so("auth","Firebase",i).create(e,{appName:r.name})}function Zt(r){return Cy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ll(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&fn(r,"argument-error"),Cy(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ny(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return Jw.create(r,...e)}function ie(r,e,...t){if(!r)throw Ny(e,...t)}function Fi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw $d(e),new Error(e)}function Ii(r,e){r||Fi(e)}/**
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
 */function Rc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Dy(){return jT()==="http:"||jT()==="https:"}function jT(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function u2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dy()||Vw()||"connection"in navigator)?navigator.onLine:!0}function c2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Qc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ii(t>e,"Short delay should be less than long delay!"),this.isMobile=xx()||wy()}get(){return u2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ky(r,e){Ii(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Zw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const h2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const d2=new Qc(3e4,6e4);function St(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Rt(r,e,t,i,a={}){return eI(r,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=Ml(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},l);return Nx()||(g.referrerPolicy="no-referrer"),Zw.fetch()(tI(r,r.config.apiHost,t,f),g)})}async function eI(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},h2),e);try{const a=new m2(r),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw lc(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw lc(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw lc(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw lc(r,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Cy(r,v,g);fn(r,v)}}catch(a){if(a instanceof Rn)throw a;fn(r,"network-request-failed",{message:String(a)})}}async function Pr(r,e,t,i,a={}){const l=await Rt(r,e,t,i,a);return"mfaPendingCredential"in l&&fn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function tI(r,e,t,i){const a=`${e}${t}?${i}`;return r.config.emulator?ky(r.config,a):`${r.config.apiScheme}://${a}`}function f2(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class m2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Gt(this.auth,"network-request-failed")),d2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lc(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Gt(r,e,i);return a.customData._tokenResponse=t,a}/**
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
 */function BT(r){return r!==void 0&&r.getResponse!==void 0}function qT(r){return r!==void 0&&r.enterprise!==void 0}class p2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return f2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function g2(r){return(await Rt(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function y2(r,e){return Rt(r,"GET","/v2/recaptchaConfig",St(r,e))}/**
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
 */async function _2(r,e){return Rt(r,"POST","/v1/accounts:delete",e)}async function v2(r,e){return Rt(r,"POST","/v1/accounts:update",e)}async function nI(r,e){return Rt(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function mc(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E2(r,e=!1){const t=be(r),i=await t.getIdToken(e),a=Df(i);ie(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:mc(Sg(a.auth_time)),issuedAtTime:mc(Sg(a.iat)),expirationTime:mc(Sg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Sg(r){return Number(r)*1e3}function Df(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return $d("JWT malformed, contained fewer than 3 sections"),null;try{const a=Nw(t);return a?JSON.parse(a):($d("Failed to decode base64 JWT payload"),null)}catch(a){return $d("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function FT(r){const e=Df(r);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kr(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Rn&&T2(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function T2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class b2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mc(this.lastLoginAt),this.creationTime=mc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xc(r){var e;const t=r.auth,i=await r.getIdToken(),a=await kr(r,nI(t,{idToken:i}));ie(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?iI(l.providerUserInfo):[],f=I2(r.providerData,c),p=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Bg(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,T)}async function w2(r){const e=be(r);await xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I2(r,e){return[...r.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function iI(r){return r.map(e=>{var{providerId:t}=e,i=xy(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function A2(r,e){const t=await eI(r,{},async()=>{const i=Ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=r.config,c=tI(r,a,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Zw.fetch()(c,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function S2(r,e){return Rt(r,"POST","/v2/accounts:revokeToken",St(r,e))}/**
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
 */class fl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=FT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await A2(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new fl;return i&&(ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(ie(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fl,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
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
 */function xs(r,e){ie(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=xy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Bg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await kr(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return E2(this,e)}reload(){return w2(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await xc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await kr(this,_2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,c,f,p,g,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,Z=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,se=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ce=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ae,emailVerified:ge,isAnonymous:Ae,providerData:X,stsTokenManager:R}=t;ie(ae&&R,e,"internal-error");const S=fl.fromJSON(this.name,R);ie(typeof ae=="string",e,"internal-error"),xs(T,e.name),xs(w,e.name),ie(typeof ge=="boolean",e,"internal-error"),ie(typeof Ae=="boolean",e,"internal-error"),xs(D,e.name),xs(F,e.name),xs($,e.name),xs(Z,e.name),xs(se,e.name),xs(ce,e.name);const x=new Sr({uid:ae,auth:e,email:w,emailVerified:ge,displayName:T,isAnonymous:Ae,photoURL:F,phoneNumber:D,tenantId:$,stsTokenManager:S,createdAt:se,lastLoginAt:ce});return X&&Array.isArray(X)&&(x.providerData=X.map(O=>Object.assign({},O))),Z&&(x._redirectEventId=Z),x}static async _fromIdTokenResponse(e,t,i=!1){const a=new fl;a.updateFromServerResponse(t);const l=new Sr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await xc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?iI(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new fl;f.updateFromIdToken(i);const p=new Sr({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Bg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const GT=new Map;function Zn(r){Ii(r instanceof Function,"Expected a class definition");let e=GT.get(r);return e?(Ii(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,GT.set(r,e),e)}/**
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
 */class rI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rI.type="NONE";const Tl=rI;/**
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
 */function Ga(r,e,t){return`firebase:${r}:${e}:${t}`}class ml{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Ga(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ga("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ml(Zn(Tl),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Zn(Tl);const c=Ga(i,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){const T=Sr._fromJSON(e,v);g!==l&&(f=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new ml(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new ml(l,e,i))}}/**
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
 */function HT(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uI(e))return"Blackberry";if(cI(e))return"Webos";if(aI(e))return"Safari";if((e.includes("chrome/")||oI(e))&&!e.includes("edge/"))return"Chrome";if(Yc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sI(r=_t()){return/firefox\//i.test(r)}function aI(r=_t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oI(r=_t()){return/crios\//i.test(r)}function lI(r=_t()){return/iemobile/i.test(r)}function Yc(r=_t()){return/android/i.test(r)}function uI(r=_t()){return/blackberry/i.test(r)}function cI(r=_t()){return/webos/i.test(r)}function $c(r=_t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function R2(r=_t()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function x2(r=_t()){var e;return $c(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function C2(){return Pw()&&document.documentMode===10}function hI(r=_t()){return $c(r)||Yc(r)||cI(r)||uI(r)||/windows phone/i.test(r)||lI(r)}/**
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
 */function dI(r,e=[]){let t;switch(r){case"Browser":t=HT(_t());break;case"Worker":t=`${HT(_t())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xs}/${i}`}/**
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
 */class N2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function D2(r,e={}){return Rt(r,"GET","/v2/passwordPolicy",St(r,e))}/**
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
 */const k2=6;class O2{constructor(e){var t,i,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:k2,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class V2{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new KT(this),this.idTokenSubscription=new KT(this),this.beforeStateQueue=new N2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zn(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await ml.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nI(this,{idToken:e}),i=await Sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Zt(this));const t=e?be(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await D2(this),t=new O2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await S2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await ml.create(this,[Zn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&l2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function It(r){return be(r)}class KT{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lw(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P2(r){Xc=r}function Oy(r){return Xc.loadJS(r)}function M2(){return Xc.recaptchaV2Script}function L2(){return Xc.recaptchaEnterpriseScript}function U2(){return Xc.gapiScript}function fI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const z2="recaptcha-enterprise",j2="NO_RECAPTCHA";class B2{constructor(e){this.type=z2,this.auth=It(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{y2(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new p2(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,c,f){const p=window.grecaptcha;qT(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(j2)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&qT(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=L2();p.length!==0&&(p+=f),Oy(p).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function QT(r,e,t,i=!1){const a=new B2(r);let l;try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Cc(r,e,t,i){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await QT(r,e,t,t==="getOobCode");return i(r,l)}else return i(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await QT(r,e,t,t==="getOobCode");return i(r,c)}else return Promise.reject(l)})}function q2(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Zn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function F2(r,e,t){const i=It(r);ie(i._canInitEmulator,i,"emulator-config-failed"),ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=mI(e),{host:c,port:f}=G2(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||H2()}function mI(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function G2(r){const e=mI(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:YT(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:YT(c)}}}function YT(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function H2(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ul{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fi("not implemented")}_getIdTokenResponse(e){return Fi("not implemented")}_linkToIdToken(e,t){return Fi("not implemented")}_getReauthenticationResolver(e){return Fi("not implemented")}}/**
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
 */async function pI(r,e){return Rt(r,"POST","/v1/accounts:resetPassword",St(r,e))}async function K2(r,e){return Rt(r,"POST","/v1/accounts:update",e)}async function Q2(r,e){return Rt(r,"POST","/v1/accounts:signUp",e)}async function Y2(r,e){return Rt(r,"POST","/v1/accounts:update",St(r,e))}/**
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
 */async function $2(r,e){return Pr(r,"POST","/v1/accounts:signInWithPassword",St(r,e))}async function kf(r,e){return Rt(r,"POST","/v1/accounts:sendOobCode",St(r,e))}async function X2(r,e){return kf(r,e)}async function W2(r,e){return kf(r,e)}async function J2(r,e){return kf(r,e)}async function Z2(r,e){return kf(r,e)}/**
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
 */async function eN(r,e){return Pr(r,"POST","/v1/accounts:signInWithEmailLink",St(r,e))}async function tN(r,e){return Pr(r,"POST","/v1/accounts:signInWithEmailLink",St(r,e))}/**
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
 */class Nc extends Ul{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Nc(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Nc(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cc(e,t,"signInWithPassword",$2);case"emailLink":return eN(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cc(e,i,"signUpPassword",Q2);case"emailLink":return tN(e,{idToken:t,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cr(r,e){return Pr(r,"POST","/v1/accounts:signInWithIdp",St(r,e))}/**
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
 */const nN="http://localhost";class $i extends Ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=xy(t,["providerId","signInMethod"]);if(!i||!a)return null;const c=new $i(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Cr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Cr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cr(e,t)}buildRequest(){const e={requestUri:nN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ml(t)}return e}}/**
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
 */async function iN(r,e){return Rt(r,"POST","/v1/accounts:sendVerificationCode",St(r,e))}async function rN(r,e){return Pr(r,"POST","/v1/accounts:signInWithPhoneNumber",St(r,e))}async function sN(r,e){const t=await Pr(r,"POST","/v1/accounts:signInWithPhoneNumber",St(r,e));if(t.temporaryProof)throw lc(r,"account-exists-with-different-credential",t);return t}const aN={USER_NOT_FOUND:"user-not-found"};async function oN(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Pr(r,"POST","/v1/accounts:signInWithPhoneNumber",St(r,t),aN)}/**
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
 */class Ha extends Ul{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ha({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ha({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rN(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return sN(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return oN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new Ha({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
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
 */function lN(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uN(r){const e=dl(oc(r)).link,t=e?dl(oc(e)).deep_link_id:null,i=dl(oc(r)).deep_link_id;return(i?dl(oc(i)).link:null)||i||t||e||r}class Of{constructor(e){var t,i,a,l,c,f;const p=dl(oc(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=lN((a=p.mode)!==null&&a!==void 0?a:null);ie(g&&v&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=uN(e);try{return new Of(t)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,t){return Nc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Of.parseLink(t);return ie(i,"argument-error"),Nc._fromEmailAndCode(e,i.code,i.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zl extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pl extends zl{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ie("providerId"in t&&"signInMethod"in t,"argument-error"),$i._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ie(e.idToken||e.accessToken,"argument-error"),$i._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!i&&!a&&!t&&!l||!f)return null;try{return new pl(f)._credential({idToken:t,accessToken:i,nonce:c,pendingToken:l})}catch{return null}}}/**
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
 */class zi extends zl{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zi.credential(e.oauthAccessToken)}catch{return null}}}zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";zi.PROVIDER_ID="facebook.com";/**
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
 */class ji extends zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $i._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ji.credential(t,i)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
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
 */class Bi extends zl{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch{return null}}}Bi.GITHUB_SIGN_IN_METHOD="github.com";Bi.PROVIDER_ID="github.com";/**
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
 */const cN="http://localhost";class bl extends Ul{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Cr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Cr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,pendingToken:l}=t;return!i||!a||!l||i!==a?null:new bl(i,l)}static _create(e,t){return new bl(e,t)}buildRequest(){return{requestUri:cN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const hN="saml.";class df extends Mr{constructor(e){ie(e.startsWith(hN),"argument-error"),super(e)}static credentialFromResult(e){return df.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return df.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bl.fromJSON(e);return ie(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return bl._create(i,t)}catch{return null}}}/**
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
 */class qi extends zl{constructor(){super("twitter.com")}static credential(e,t){return $i._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return qi.credential(t,i)}catch{return null}}}qi.TWITTER_SIGN_IN_METHOD="twitter.com";qi.PROVIDER_ID="twitter.com";/**
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
 */async function gI(r,e){return Pr(r,"POST","/v1/accounts:signUp",St(r,e))}/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await Sr._fromIdTokenResponse(e,i,a),c=$T(i);return new pi({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=$T(i);return new pi({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function $T(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function dN(r){var e;if(wt(r.app))return Promise.reject(Zt(r));const t=It(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new pi({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await gI(t,{returnSecureToken:!0}),a=await pi._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(a.user),a}/**
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
 */class ff extends Rn{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,ff.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new ff(e,t,i,a)}}function yI(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ff._fromErrorAndOperation(r,l,e,i):l})}/**
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
 */function _I(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function fN(r,e){const t=be(r);await Vf(!0,t,e);const{providerUserInfo:i}=await v2(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=_I(i||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Vy(r,e,t=!1){const i=await kr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return pi._forOperation(r,"link",i)}async function Vf(r,e,t){await xc(e);const i=_I(e.providerData),a=r===!1?"provider-already-linked":"no-such-provider";ie(i.has(t)===r,e.auth,a)}/**
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
 */async function vI(r,e,t=!1){const{auth:i}=r;if(wt(i.app))return Promise.reject(Zt(i));const a="reauthenticate";try{const l=await kr(r,yI(i,a,e,r),t);ie(l.idToken,i,"internal-error");const c=Df(l.idToken);ie(c,i,"internal-error");const{sub:f}=c;return ie(r.uid===f,i,"user-mismatch"),pi._forOperation(r,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&fn(i,"user-mismatch"),l}}/**
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
 */async function EI(r,e,t=!1){if(wt(r.app))return Promise.reject(Zt(r));const i="signIn",a=await yI(r,i,e),l=await pi._fromIdTokenResponse(r,i,a);return t||await r._updateCurrentUser(l.user),l}async function Pf(r,e){return EI(It(r),e)}async function TI(r,e){const t=be(r);return await Vf(!1,t,e.providerId),Vy(t,e)}async function bI(r,e){return vI(be(r),e)}/**
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
 */async function mN(r,e){return Pr(r,"POST","/v1/accounts:signInWithCustomToken",St(r,e))}/**
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
 */async function pN(r,e){if(wt(r.app))return Promise.reject(Zt(r));const t=It(r),i=await mN(t,{token:e,returnSecureToken:!0}),a=await pi._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(a.user),a}/**
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
 */class Wc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Py._fromServerResponse(e,t):"totpInfo"in t?My._fromServerResponse(e,t):fn(e,"internal-error")}}class Py extends Wc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Py(t)}}class My extends Wc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new My(t)}}/**
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
 */function Mf(r,e,t){var i;ie(((i=t.url)===null||i===void 0?void 0:i.length)>0,r,"invalid-continue-uri"),ie(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ie(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ie(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Ly(r){const e=It(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gN(r,e,t){const i=It(r),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Mf(i,a,t),await Cc(i,a,"getOobCode",W2)}async function yN(r,e,t){await pI(be(r),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ly(r),i})}async function _N(r,e){await Y2(be(r),{oobCode:e})}async function wI(r,e){const t=be(r),i=await pI(t,{oobCode:e}),a=i.requestType;switch(ie(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ie(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ie(i.mfaInfo,t,"internal-error");default:ie(i.email,t,"internal-error")}let l=null;return i.mfaInfo&&(l=Wc._fromServerResponse(It(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:l},operation:a}}async function vN(r,e){const{data:t}=await wI(be(r),e);return t.email}async function EN(r,e,t){if(wt(r.app))return Promise.reject(Zt(r));const i=It(r),c=await Cc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gI).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Ly(r),p}),f=await pi._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function TN(r,e,t){return wt(r.app)?Promise.reject(Zt(r)):Pf(be(r),Ws.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ly(r),i})}/**
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
 */async function bN(r,e,t){const i=It(r),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){ie(f.handleCodeInApp,i,"argument-error"),f&&Mf(i,c,f)}l(a,t),await Cc(i,a,"getOobCode",J2)}function wN(r,e){const t=Of.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function IN(r,e,t){if(wt(r.app))return Promise.reject(Zt(r));const i=be(r),a=Ws.credentialWithLink(e,t||Rc());return ie(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pf(i,a)}/**
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
 */async function AN(r,e){return Rt(r,"POST","/v1/accounts:createAuthUri",St(r,e))}/**
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
 */async function SN(r,e){const t=Dy()?Rc():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:a}=await AN(be(r),i);return a||[]}async function RN(r,e){const t=be(r),a={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Mf(t.auth,a,e);const{email:l}=await X2(t.auth,a);l!==r.email&&await r.reload()}async function xN(r,e,t){const i=be(r),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Mf(i.auth,l,t);const{email:c}=await Z2(i.auth,l);c!==r.email&&await r.reload()}/**
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
 */async function CN(r,e){return Rt(r,"POST","/v1/accounts:update",e)}/**
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
 */async function NN(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=be(r),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await kr(i,CN(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const f=i.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function DN(r,e){const t=be(r);return wt(t.auth.app)?Promise.reject(Zt(t.auth)):II(t,e,null)}function kN(r,e){return II(be(r),null,e)}async function II(r,e,t){const{auth:i}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await kr(r,K2(i,l));await r._updateTokensIfNecessary(c,!0)}/**
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
 */function ON(r){var e,t;if(!r)return null;const{providerId:i}=r,a=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},l=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(r!=null&&r.idToken)){const c=(t=(e=Df(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new gl(l,f)}}if(!i)return null;switch(i){case"facebook.com":return new VN(l,a);case"github.com":return new PN(l,a);case"google.com":return new MN(l,a);case"twitter.com":return new LN(l,a,r.screenName||null);case"custom":case"anonymous":return new gl(l,null);default:return new gl(l,i,a)}}class gl{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class AI extends gl{constructor(e,t,i,a){super(e,t,i),this.username=a}}class VN extends gl{constructor(e,t){super(e,"facebook.com",t)}}class PN extends AI{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class MN extends gl{constructor(e,t){super(e,"google.com",t)}}class LN extends AI{constructor(e,t,i){super(e,"twitter.com",t,i)}}function UN(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ON(t)}/**
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
 */class Ba{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new Ba("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ba("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ba._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return Ba._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Uy{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=It(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Wc._fromServerResponse(i,f));ie(a.mfaPendingCredential,i,"internal-error");const c=Ba._fromMfaPendingCredential(a.mfaPendingCredential);return new Uy(c,l,async f=>{const p=await f._process(i,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const v=await pi._fromIdTokenResponse(i,t.operationType,g);return await i._updateCurrentUser(v.user),v;case"reauthenticate":return ie(t.user,i,"internal-error"),pi._forOperation(t.user,t.operationType,g);default:fn(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function zN(r,e){var t;const i=be(r),a=e;return ie(e.customData.operationType,i,"argument-error"),ie((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Uy._fromError(i,a)}/**
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
 */function jN(r,e){return Rt(r,"POST","/v2/accounts/mfaEnrollment:start",St(r,e))}function BN(r,e){return Rt(r,"POST","/v2/accounts/mfaEnrollment:finalize",St(r,e))}function qN(r,e){return Rt(r,"POST","/v2/accounts/mfaEnrollment:withdraw",St(r,e))}class zy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Wc._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new zy(e)}async getSession(){return Ba._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,a=await this.getSession(),l=await kr(this.user,i._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const a=await kr(this.user,qN(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const Rg=new WeakMap;function FN(r){const e=be(r);return Rg.has(e)||Rg.set(e,zy._fromUser(e)),Rg.get(e)}const mf="__sak";/**
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
 */class SI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GN=1e3,HN=10;class RI extends SI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);C2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,HN):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}RI.type="LOCAL";const jy=RI;/**
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
 */class xI extends SI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xI.type="SESSION";const Qa=xI;/**
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
 */function KN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Lf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),p=await KN(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lf.receivers=[];/**
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
 */function Jc(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class QN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const g=Jc("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(w.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function jt(){return window}function YN(r){jt().location.href=r}/**
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
 */function By(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function $N(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function WN(){return By()?self:null}/**
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
 */const CI="firebaseLocalStorageDb",JN=1,pf="firebaseLocalStorage",NI="fbase_key";class Zc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uf(r,e){return r.transaction([pf],e?"readwrite":"readonly").objectStore(pf)}function ZN(){const r=indexedDB.deleteDatabase(CI);return new Zc(r).toPromise()}function qg(){const r=indexedDB.open(CI,JN);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(pf,{keyPath:NI})}catch(a){t(a)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(pf)?e(i):(i.close(),await ZN(),e(await qg()))})})}async function XT(r,e,t){const i=Uf(r,!0).put({[NI]:e,value:t});return new Zc(i).toPromise()}async function eD(r,e){const t=Uf(r,!1).get(e),i=await new Zc(t).toPromise();return i===void 0?null:i.value}function WT(r,e){const t=Uf(r,!0).delete(e);return new Zc(t).toPromise()}const tD=800,nD=3;class DI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>nD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lf._getInstance(WN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new QN(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qg();return await XT(e,mf,"1"),await WT(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>XT(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>eD(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>WT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Uf(a,!1).getAll();return new Zc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DI.type="LOCAL";const Dc=DI;/**
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
 */function iD(r,e){return Rt(r,"POST","/v2/accounts/mfaSignIn:start",St(r,e))}function rD(r,e){return Rt(r,"POST","/v2/accounts/mfaSignIn:finalize",St(r,e))}/**
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
 */const sD=500,aD=6e4,qd=1e12;class oD{constructor(e){this.auth=e,this.counter=qd,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new lD(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||qd;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||qd;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||qd;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class lD{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ie(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=uD(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},aD)},sD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function uD(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<r;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const xg=fI("rcb"),cD=new Qc(3e4,6e4);class hD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=jt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ie(dD(t),e,"argument-error"),this.shouldResolveImmediately(t)&&BT(jt().grecaptcha)?Promise.resolve(jt().grecaptcha):new Promise((i,a)=>{const l=jt().setTimeout(()=>{a(Gt(e,"network-request-failed"))},cD.get());jt()[xg]=()=>{jt().clearTimeout(l),delete jt()[xg];const f=jt().grecaptcha;if(!f||!BT(f)){a(Gt(e,"internal-error"));return}const p=f.render;f.render=(g,v)=>{const T=p(g,v);return this.counter++,T},this.hostLanguage=t,i(f)};const c=`${M2()}?${Ml({onload:xg,render:"explicit",hl:t})}`;Oy(c).catch(()=>{clearTimeout(l),a(Gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=jt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dD(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class fD{async load(e){return new oD(e)}clearedOneInstance(){}}/**
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
 */const kI="recaptcha",mD={theme:"light",type:"image"};let pD=class{constructor(e,t,i=Object.assign({},mD)){this.parameters=i,this.type=kI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=It(e),this.isInvisible=this.parameters.size==="invisible",ie(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ie(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new fD:new hD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ie(!this.parameters.sitekey,this.auth,"argument-error"),ie(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ie(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=jt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){ie(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ie(Dy()&&!By(),this.auth,"internal-error"),await gD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await g2(this.auth);ie(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ie(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function gD(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class qy{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ha._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function yD(r,e,t){if(wt(r.app))return Promise.reject(Zt(r));const i=It(r),a=await zf(i,e,be(t));return new qy(a,l=>Pf(i,l))}async function _D(r,e,t){const i=be(r);await Vf(!1,i,"phone");const a=await zf(i.auth,e,be(t));return new qy(a,l=>TI(i,l))}async function vD(r,e,t){const i=be(r);if(wt(i.auth.app))return Promise.reject(Zt(i.auth));const a=await zf(i.auth,e,be(t));return new qy(a,l=>bI(i,l))}async function zf(r,e,t){var i;const a=await t.verify();try{ie(typeof a=="string",r,"argument-error"),ie(t.type===kI,r,"argument-error");let l;if(typeof e=="string"?l={phoneNumber:e}:l=e,"session"in l){const c=l.session;if("phoneNumber"in l)return ie(c.type==="enroll",r,"internal-error"),(await jN(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:l.phoneNumber,recaptchaToken:a}})).phoneSessionInfo.sessionInfo;{ie(c.type==="signin",r,"internal-error");const f=((i=l.multiFactorHint)===null||i===void 0?void 0:i.uid)||l.multiFactorUid;return ie(f,r,"missing-multi-factor-info"),(await iD(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:c}=await iN(r,{phoneNumber:l.phoneNumber,recaptchaToken:a});return c}}finally{t._reset()}}async function ED(r,e){const t=be(r);if(wt(t.auth.app))return Promise.reject(Zt(t.auth));await Vy(t,e)}/**
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
 */let Ya=class Xd{constructor(e){this.providerId=Xd.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return zf(this.auth,e,be(t))}static credential(e,t){return Ha._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Xd.credentialFromTaggedObject(t)}static credentialFromError(e){return Xd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Ha._fromTokenResponse(t,i):null}};Ya.PROVIDER_ID="phone";Ya.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ao(r,e){return e?Zn(e):(ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Fy extends Ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TD(r){return EI(r.auth,new Fy(r),r.bypassAuthState)}function bD(r){const{auth:e,user:t}=r;return ie(t,e,"internal-error"),vI(t,new Fy(r),r.bypassAuthState)}async function wD(r){const{auth:e,user:t}=r;return ie(t,e,"internal-error"),Vy(t,new Fy(r),r.bypassAuthState)}/**
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
 */class OI{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TD;case"linkViaPopup":case"linkViaRedirect":return wD;case"reauthViaPopup":case"reauthViaRedirect":return bD;default:fn(this.auth,"internal-error")}}resolve(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ID=new Qc(2e3,1e4);async function AD(r,e,t){if(wt(r.app))return Promise.reject(Gt(r,"operation-not-supported-in-this-environment"));const i=It(r);Ll(r,e,Mr);const a=ao(i,t);return new Rr(i,"signInViaPopup",e,a).executeNotNull()}async function SD(r,e,t){const i=be(r);if(wt(i.auth.app))return Promise.reject(Gt(i.auth,"operation-not-supported-in-this-environment"));Ll(i.auth,e,Mr);const a=ao(i.auth,t);return new Rr(i.auth,"reauthViaPopup",e,a,i).executeNotNull()}async function RD(r,e,t){const i=be(r);Ll(i.auth,e,Mr);const a=ao(i.auth,t);return new Rr(i.auth,"linkViaPopup",e,a,i).executeNotNull()}class Rr extends OI{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Ii(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ID.get())};e()}}Rr.currentPopupAction=null;/**
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
 */const xD="pendingRedirect",pc=new Map;class CD extends OI{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=pc.get(this.auth._key());if(!e){try{const i=await ND(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}pc.set(this.auth._key(),e)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ND(r,e){const t=PI(e),i=VI(r);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}async function Gy(r,e){return VI(r)._set(PI(e),"true")}function DD(){pc.clear()}function Hy(r,e){pc.set(r._key(),e)}function VI(r){return Zn(r._redirectPersistence)}function PI(r){return Ga(xD,r.config.apiKey,r.name)}/**
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
 */function kD(r,e,t){return OD(r,e,t)}async function OD(r,e,t){if(wt(r.app))return Promise.reject(Zt(r));const i=It(r);Ll(r,e,Mr),await i._initializationPromise;const a=ao(i,t);return await Gy(a,i),a._openRedirect(i,e,"signInViaRedirect")}function VD(r,e,t){return PD(r,e,t)}async function PD(r,e,t){const i=be(r);if(Ll(i.auth,e,Mr),wt(i.auth.app))return Promise.reject(Zt(i.auth));await i.auth._initializationPromise;const a=ao(i.auth,t);await Gy(a,i.auth);const l=await MI(i);return a._openRedirect(i.auth,e,"reauthViaRedirect",l)}function MD(r,e,t){return LD(r,e,t)}async function LD(r,e,t){const i=be(r);Ll(i.auth,e,Mr),await i.auth._initializationPromise;const a=ao(i.auth,t);await Vf(!1,i,e.providerId),await Gy(a,i.auth);const l=await MI(i);return a._openRedirect(i.auth,e,"linkViaRedirect",l)}async function UD(r,e){return await It(r)._initializationPromise,jf(r,e,!1)}async function jf(r,e,t=!1){if(wt(r.app))return Promise.reject(Zt(r));const i=It(r),a=ao(i,e),c=await new CD(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}async function MI(r){const e=Jc(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const zD=600*1e3;class LI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!UI(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Gt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zD&&this.cachedEventUids.clear(),this.cachedEventUids.has(JT(e))}saveEventToCache(e){this.cachedEventUids.add(JT(e)),this.lastProcessedEventTime=Date.now()}}function JT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function UI({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UI(r);default:return!1}}/**
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
 */async function zI(r,e={}){return Rt(r,"GET","/v1/projects",e)}/**
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
 */const BD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qD=/^https?/;async function FD(r){if(r.config.emulator)return;const{authorizedDomains:e}=await zI(r);for(const t of e)try{if(GD(t))return}catch{}fn(r,"unauthorized-domain")}function GD(r){const e=Rc(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!qD.test(t))return!1;if(BD.test(r))return i===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const HD=new Qc(3e4,6e4);function ZT(){const r=jt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function KD(r){return new Promise((e,t)=>{var i,a,l;function c(){ZT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ZT(),t(Gt(r,"network-request-failed"))},timeout:HD.get()})}if(!((a=(i=jt().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=jt().gapi)===null||l===void 0)&&l.load)c();else{const f=fI("iframefcb");return jt()[f]=()=>{gapi.load?c():t(Gt(r,"network-request-failed"))},Oy(`${U2()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Wd=null,e})}let Wd=null;function QD(r){return Wd=Wd||KD(r),Wd}/**
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
 */const YD=new Qc(5e3,15e3),$D="__/auth/iframe",XD="emulator/auth/iframe",WD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZD(r){const e=r.config;ie(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ky(e,XD):`https://${r.config.authDomain}/${$D}`,i={apiKey:e.apiKey,appName:r.name,v:Xs},a=JD.get(r.config.apiHost);a&&(i.eid=a);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ml(i).slice(1)}`}async function ek(r){const e=await QD(r),t=jt().gapi;return ie(t,r,"internal-error"),e.open({where:document.body,url:ZD(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WD,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=Gt(r,"network-request-failed"),f=jt().setTimeout(()=>{l(c)},YD.get());function p(){jt().clearTimeout(f),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nk=500,ik=600,rk="_blank",sk="http://localhost";class eb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ak(r,e,t,i=nk,a=ik){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},tk),{width:i.toString(),height:a.toString(),top:l,left:c}),g=_t().toLowerCase();t&&(f=oI(g)?rk:t),sI(g)&&(e=e||sk,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[D,F])=>`${w}${D}=${F},`,"");if(x2(g)&&f!=="_self")return ok(e||"",f),new eb(null);const T=window.open(e||"",f,v);ie(T,r,"popup-blocked");try{T.focus()}catch{}return new eb(T)}function ok(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const lk="__/auth/handler",uk="emulator/auth/handler",ck=encodeURIComponent("fac");async function Fg(r,e,t,i,a,l){ie(r.config.authDomain,r,"auth-domain-config-required"),ie(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Xs,eventId:a};if(e instanceof Mr){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Px(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(l||{}))c[v]=T}if(e instanceof zl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${ck}=${encodeURIComponent(p)}`:"";return`${hk(r)}?${Ml(f).slice(1)}${g}`}function hk({config:r}){return r.emulator?ky(r,uk):`https://${r.authDomain}/${lk}`}/**
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
 */const Cg="webStorageSupport";class dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qa,this._completeRedirectFn=jf,this._overrideRedirectResult=Hy}async _openPopup(e,t,i,a){var l;Ii((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Fg(e,t,i,Rc(),a);return ak(e,c,Jc())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await Fg(e,t,i,Rc(),a);return YN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ii(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ek(e),i=new LI(e);return t.register("authEvent",a=>(ie(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cg,{type:Cg},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Cg];c!==void 0&&t(!!c),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hI()||aI()||$c()}}const fk=dk;class mk{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Fi("unexpected MultiFactorSessionType")}}}class Ky extends mk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ky(e)}_finalizeEnroll(e,t,i){return BN(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rD(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jI{constructor(){}static assertion(e){return Ky._fromCredential(e)}}jI.FACTOR_ID="phone";var tb="@firebase/auth",nb="1.7.9";/**
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
 */class pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yk(r){Bs(new Yi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dI(r)},g=new V2(i,a,l,p);return q2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Bs(new Yi("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(i=>new pk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wi(tb,nb,gk(r)),wi(tb,nb,"esm2017")}/**
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
 */const _k=300;Ax("authIdTokenMaxAge");function vk(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}P2({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=a=>{const l=Gt("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",vk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yk("Browser");/**
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
 */function $a(){return window}/**
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
 */const Ek=2e3;async function Tk(r,e,t){var i;const{BuildInfo:a}=$a();Ii(e.sessionId,"AuthEvent did not contain a session ID");const l=await Sk(e.sessionId),c={};return $c()?c.ibi=a.packageName:Yc()?c.apn=a.packageName:fn(r,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,Fg(r,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,c)}async function bk(r){const{BuildInfo:e}=$a(),t={};$c()?t.iosBundleId=e.packageName:Yc()?t.androidPackageName=e.packageName:fn(r,"operation-not-supported-in-this-environment"),await zI(r,t)}function wk(r){const{cordova:e}=$a();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let a=null;i?e.plugins.browsertab.openUrl(r):a=e.InAppBrowser.open(r,R2()?"_blank":"_system","location=yes"),t(a)})})}async function Ik(r,e,t){const{cordova:i}=$a();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function p(){var T;l();const w=(T=i.plugins.browsertab)===null||T===void 0?void 0:T.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c(Gt(r,"redirect-cancelled-by-user"))},Ek))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Yc()&&document.addEventListener("visibilitychange",v,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),f&&window.clearTimeout(f)}})}finally{a()}}function Ak(r){var e,t,i,a,l,c,f,p,g,v;const T=$a();ie(typeof((e=T==null?void 0:T.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ie(typeof((t=T==null?void 0:T.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ie(typeof((l=(a=(i=T==null?void 0:T.cordova)===null||i===void 0?void 0:i.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ie(typeof((p=(f=(c=T==null?void 0:T.cordova)===null||c===void 0?void 0:c.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ie(typeof((v=(g=T==null?void 0:T.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||v===void 0?void 0:v.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Sk(r){const e=Rk(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function Rk(r){if(Ii(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let i=0;i<r.length;i++)t[i]=r.charCodeAt(i);return t}/**
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
 */const xk=20;class Ck extends LI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Nk(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Ok(),postBody:null,tenantId:r.tenantId,error:Gt(r,"no-auth-event")}}function Dk(r,e){return Gg()._set(Hg(r),e)}async function ib(r){const e=await Gg()._get(Hg(r));return e&&await Gg()._remove(Hg(r)),e}function kk(r,e){var t,i;const a=Pk(e);if(a.includes("/__/auth/callback")){const l=Jd(a),c=l.firebaseError?Vk(decodeURIComponent(l.firebaseError)):null,f=(i=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],p=f?Gt(f):null;return p?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:a,postBody:null}}return null}function Ok(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<xk;t++){const i=Math.floor(Math.random()*e.length);r.push(e.charAt(i))}return r.join("")}function Gg(){return Zn(jy)}function Hg(r){return Ga("authEvent",r.config.apiKey,r.name)}function Vk(r){try{return JSON.parse(r)}catch{return null}}function Pk(r){const e=Jd(r),t=e.link?decodeURIComponent(e.link):void 0,i=Jd(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Jd(a).link||a||i||t||r}function Jd(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return dl(t.join("?"))}/**
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
 */const Mk=500;class Lk{constructor(){this._redirectPersistence=Qa,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=jf,this._overrideRedirectResult=Hy}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new Ck(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){fn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,a){Ak(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),DD(),await this._originValidation(e);const c=Nk(e,i,a);await Dk(e,c);const f=await Tk(e,c,t),p=await wk(f);return Ik(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bk(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:a,BuildInfo:l}=$a(),c=setTimeout(async()=>{await ib(e),t.onEvent(rb())},Mk),f=async v=>{clearTimeout(c);const T=await ib(e);let w=null;T&&(v!=null&&v.url)&&(w=kk(T,v.url)),t.onEvent(w||rb())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,f);const p=a,g=`${l.packageName.toLowerCase()}://`;$a().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&f({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const Uk=Lk;function rb(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Gt("no-auth-event")}}/**
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
 */function zk(r,e){It(r)._logFramework(e)}var jk="@firebase/auth-compat",Bk="0.5.14";/**
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
 */const qk=1e3;function gc(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function Fk(){return gc()==="http:"||gc()==="https:"}function BI(r=_t()){return!!((gc()==="file:"||gc()==="ionic:"||gc()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function Gk(){return wy()||by()}function Hk(){return Pw()&&(document==null?void 0:document.documentMode)===11}function Kk(r=_t()){return/Edge\/\d+/.test(r)}function Qk(r=_t()){return Hk()||Kk(r)}function qI(){try{const r=self.localStorage,e=Jc();if(r)return r.setItem(e,"1"),r.removeItem(e),Qk()?wc():!0}catch{return Qy()&&wc()}return!1}function Qy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ng(){return(Fk()||Vw()||BI())&&!Gk()&&qI()&&!Qy()}function FI(){return BI()&&typeof document<"u"}async function Yk(){return FI()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},qk);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function $k(){return typeof window<"u"?window:null}/**
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
 */const Jn={LOCAL:"local",NONE:"none",SESSION:"session"},Zu=ie,GI="persistence";function Xk(r,e){if(Zu(Object.values(Jn).includes(e),r,"invalid-persistence-type"),wy()){Zu(e!==Jn.SESSION,r,"unsupported-persistence-type");return}if(by()){Zu(e===Jn.NONE,r,"unsupported-persistence-type");return}if(Qy()){Zu(e===Jn.NONE||e===Jn.LOCAL&&wc(),r,"unsupported-persistence-type");return}Zu(e===Jn.NONE||qI(),r,"unsupported-persistence-type")}async function Kg(r){await r._initializationPromise;const e=HI(),t=Ga(GI,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function Wk(r,e){const t=HI();if(!t)return[];const i=Ga(GI,r,e);switch(t.getItem(i)){case Jn.NONE:return[Tl];case Jn.LOCAL:return[Dc,Qa];case Jn.SESSION:return[Qa];default:return[]}}function HI(){var r;try{return((r=$k())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
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
 */const Jk=ie;class Vs{constructor(){this.browserResolver=Zn(fk),this.cordovaResolver=Zn(Uk),this.underlyingResolver=null,this._redirectPersistence=Qa,this._completeRedirectFn=jf,this._overrideRedirectResult=Hy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,a)}async _openRedirect(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return FI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Jk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Yk();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function KI(r){return r.unwrap()}function Zk(r){return r.wrapped()}/**
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
 */function eO(r){return QI(r)}function tO(r,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new nO(r,zN(r,e))}else if(i){const a=QI(e),l=e;a&&(l.credential=a,l.tenantId=i.tenantId||void 0,l.email=i.email||void 0,l.phoneNumber=i.phoneNumber||void 0)}}function QI(r){const{_tokenResponse:e}=r instanceof Rn?r.customData:r;if(!e)return null;if(!(r instanceof Rn)&&"temporaryProof"in e&&"phoneNumber"in e)return Ya.credentialFromResult(r);const t=e.providerId;if(!t||t===Ju.PASSWORD)return null;let i;switch(t){case Ju.GOOGLE:i=ji;break;case Ju.FACEBOOK:i=zi;break;case Ju.GITHUB:i=Bi;break;case Ju.TWITTER:i=qi;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:p}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?bl._create(t,f):$i._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new pl(t).credential({idToken:a,accessToken:l,rawNonce:p})}return r instanceof Rn?i.credentialFromError(r):i.credentialFromResult(r)}function Un(r,e){return e.catch(t=>{throw t instanceof Rn&&tO(r,t),t}).then(t=>{const i=t.operationType,a=t.user;return{operationType:i,credential:eO(t),additionalUserInfo:UN(t),user:Bf.getOrCreate(a)}})}async function Qg(r,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Un(r,t.confirm(i))}}class nO{constructor(e,t){this.resolver=t,this.auth=Zk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Un(KI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Bf=class uc{constructor(e){this._delegate=e,this.multiFactor=FN(e)}static getOrCreate(e){return uc.USER_MAP.has(e)||uc.USER_MAP.set(e,new uc(e)),uc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Un(this.auth,TI(this._delegate,e))}async linkWithPhoneNumber(e,t){return Qg(this.auth,_D(this._delegate,e,t))}async linkWithPopup(e){return Un(this.auth,RD(this._delegate,e,Vs))}async linkWithRedirect(e){return await Kg(It(this.auth)),MD(this._delegate,e,Vs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Un(this.auth,bI(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Qg(this.auth,vD(this._delegate,e,t))}reauthenticateWithPopup(e){return Un(this.auth,SD(this._delegate,e,Vs))}async reauthenticateWithRedirect(e){return await Kg(It(this.auth)),VD(this._delegate,e,Vs)}sendEmailVerification(e){return RN(this._delegate,e)}async unlink(e){return await fN(this._delegate,e),this}updateEmail(e){return DN(this._delegate,e)}updatePassword(e){return kN(this._delegate,e)}updatePhoneNumber(e){return ED(this._delegate,e)}updateProfile(e){return NN(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return xN(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Bf.USER_MAP=new WeakMap;/**
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
 */const ec=ie;class Yg{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;ec(i,"invalid-api-key",{appName:e.name}),ec(i,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Vs:void 0;this._delegate=t.initialize({options:{persistence:iO(i,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(a2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Bf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){F2(this._delegate,e,t)}applyActionCode(e){return _N(this._delegate,e)}checkActionCode(e){return wI(this._delegate,e)}confirmPasswordReset(e,t){return yN(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Un(this._delegate,EN(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return SN(this._delegate,e)}isSignInWithEmailLink(e){return wN(this._delegate,e)}async getRedirectResult(){ec(Ng(),this._delegate,"operation-not-supported-in-this-environment");const e=await UD(this._delegate,Vs);return e?Un(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){zk(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:a,error:l,complete:c}=sb(e,t,i);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,i){const{next:a,error:l,complete:c}=sb(e,t,i);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return bN(this._delegate,e,t)}sendPasswordResetEmail(e,t){return gN(this._delegate,e,t||void 0)}async setPersistence(e){Xk(this._delegate,e);let t;switch(e){case Jn.SESSION:t=Qa;break;case Jn.LOCAL:t=await Zn(Dc)._isAvailable()?Dc:jy;break;case Jn.NONE:t=Tl;break;default:return fn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Un(this._delegate,dN(this._delegate))}signInWithCredential(e){return Un(this._delegate,Pf(this._delegate,e))}signInWithCustomToken(e){return Un(this._delegate,pN(this._delegate,e))}signInWithEmailAndPassword(e,t){return Un(this._delegate,TN(this._delegate,e,t))}signInWithEmailLink(e,t){return Un(this._delegate,IN(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Qg(this._delegate,yD(this._delegate,e,t))}async signInWithPopup(e){return ec(Ng(),this._delegate,"operation-not-supported-in-this-environment"),Un(this._delegate,AD(this._delegate,e,Vs))}async signInWithRedirect(e){return ec(Ng(),this._delegate,"operation-not-supported-in-this-environment"),await Kg(this._delegate),kD(this._delegate,e,Vs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return vN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Yg.Persistence=Jn;function sb(r,e,t){let i=r;typeof r!="function"&&({next:i,error:e,complete:t}=r);const a=i;return{next:c=>a(c&&Bf.getOrCreate(c)),error:e,complete:t}}function iO(r,e){const t=Wk(r,e);if(typeof self<"u"&&!t.includes(Dc)&&t.push(Dc),typeof window<"u")for(const i of[jy,Qa])t.includes(i)||t.push(i);return t.includes(Tl)||t.push(Tl),t}/**
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
 */class Yy{constructor(){this.providerId="phone",this._delegate=new Ya(KI(Ls.auth()))}static credential(e,t){return Ya.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Yy.PHONE_SIGN_IN_METHOD=Ya.PHONE_SIGN_IN_METHOD;Yy.PROVIDER_ID=Ya.PROVIDER_ID;/**
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
 */const rO=ie;class sO{constructor(e,t,i=Ls.app()){var a;rO((a=i.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new pD(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const aO="auth-compat";function oO(r){r.INTERNAL.registerComponent(new Yi(aO,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Yg(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:nl.EMAIL_SIGNIN,PASSWORD_RESET:nl.PASSWORD_RESET,RECOVER_EMAIL:nl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:nl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:nl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:nl.VERIFY_EMAIL}},EmailAuthProvider:Ws,FacebookAuthProvider:zi,GithubAuthProvider:Bi,GoogleAuthProvider:ji,OAuthProvider:pl,SAMLAuthProvider:df,PhoneAuthProvider:Yy,PhoneMultiFactorGenerator:jI,RecaptchaVerifier:sO,TwitterAuthProvider:qi,Auth:Yg,AuthCredential:Ul,Error:Rn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(jk,Bk)}oO(Ls);var ab=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ka,YI;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,S){function x(){}x.prototype=S.prototype,R.D=S.prototype,R.prototype=new x,R.prototype.constructor=R,R.C=function(O,P,L){for(var N=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)N[Bt-2]=arguments[Bt];return S.prototype[P].apply(O,N)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,S,x){x||(x=0);var O=Array(16);if(typeof S=="string")for(var P=0;16>P;++P)O[P]=S.charCodeAt(x++)|S.charCodeAt(x++)<<8|S.charCodeAt(x++)<<16|S.charCodeAt(x++)<<24;else for(P=0;16>P;++P)O[P]=S[x++]|S[x++]<<8|S[x++]<<16|S[x++]<<24;S=R.g[0],x=R.g[1],P=R.g[2];var L=R.g[3],N=S+(L^x&(P^L))+O[0]+3614090360&4294967295;S=x+(N<<7&4294967295|N>>>25),N=L+(P^S&(x^P))+O[1]+3905402710&4294967295,L=S+(N<<12&4294967295|N>>>20),N=P+(x^L&(S^x))+O[2]+606105819&4294967295,P=L+(N<<17&4294967295|N>>>15),N=x+(S^P&(L^S))+O[3]+3250441966&4294967295,x=P+(N<<22&4294967295|N>>>10),N=S+(L^x&(P^L))+O[4]+4118548399&4294967295,S=x+(N<<7&4294967295|N>>>25),N=L+(P^S&(x^P))+O[5]+1200080426&4294967295,L=S+(N<<12&4294967295|N>>>20),N=P+(x^L&(S^x))+O[6]+2821735955&4294967295,P=L+(N<<17&4294967295|N>>>15),N=x+(S^P&(L^S))+O[7]+4249261313&4294967295,x=P+(N<<22&4294967295|N>>>10),N=S+(L^x&(P^L))+O[8]+1770035416&4294967295,S=x+(N<<7&4294967295|N>>>25),N=L+(P^S&(x^P))+O[9]+2336552879&4294967295,L=S+(N<<12&4294967295|N>>>20),N=P+(x^L&(S^x))+O[10]+4294925233&4294967295,P=L+(N<<17&4294967295|N>>>15),N=x+(S^P&(L^S))+O[11]+2304563134&4294967295,x=P+(N<<22&4294967295|N>>>10),N=S+(L^x&(P^L))+O[12]+1804603682&4294967295,S=x+(N<<7&4294967295|N>>>25),N=L+(P^S&(x^P))+O[13]+4254626195&4294967295,L=S+(N<<12&4294967295|N>>>20),N=P+(x^L&(S^x))+O[14]+2792965006&4294967295,P=L+(N<<17&4294967295|N>>>15),N=x+(S^P&(L^S))+O[15]+1236535329&4294967295,x=P+(N<<22&4294967295|N>>>10),N=S+(P^L&(x^P))+O[1]+4129170786&4294967295,S=x+(N<<5&4294967295|N>>>27),N=L+(x^P&(S^x))+O[6]+3225465664&4294967295,L=S+(N<<9&4294967295|N>>>23),N=P+(S^x&(L^S))+O[11]+643717713&4294967295,P=L+(N<<14&4294967295|N>>>18),N=x+(L^S&(P^L))+O[0]+3921069994&4294967295,x=P+(N<<20&4294967295|N>>>12),N=S+(P^L&(x^P))+O[5]+3593408605&4294967295,S=x+(N<<5&4294967295|N>>>27),N=L+(x^P&(S^x))+O[10]+38016083&4294967295,L=S+(N<<9&4294967295|N>>>23),N=P+(S^x&(L^S))+O[15]+3634488961&4294967295,P=L+(N<<14&4294967295|N>>>18),N=x+(L^S&(P^L))+O[4]+3889429448&4294967295,x=P+(N<<20&4294967295|N>>>12),N=S+(P^L&(x^P))+O[9]+568446438&4294967295,S=x+(N<<5&4294967295|N>>>27),N=L+(x^P&(S^x))+O[14]+3275163606&4294967295,L=S+(N<<9&4294967295|N>>>23),N=P+(S^x&(L^S))+O[3]+4107603335&4294967295,P=L+(N<<14&4294967295|N>>>18),N=x+(L^S&(P^L))+O[8]+1163531501&4294967295,x=P+(N<<20&4294967295|N>>>12),N=S+(P^L&(x^P))+O[13]+2850285829&4294967295,S=x+(N<<5&4294967295|N>>>27),N=L+(x^P&(S^x))+O[2]+4243563512&4294967295,L=S+(N<<9&4294967295|N>>>23),N=P+(S^x&(L^S))+O[7]+1735328473&4294967295,P=L+(N<<14&4294967295|N>>>18),N=x+(L^S&(P^L))+O[12]+2368359562&4294967295,x=P+(N<<20&4294967295|N>>>12),N=S+(x^P^L)+O[5]+4294588738&4294967295,S=x+(N<<4&4294967295|N>>>28),N=L+(S^x^P)+O[8]+2272392833&4294967295,L=S+(N<<11&4294967295|N>>>21),N=P+(L^S^x)+O[11]+1839030562&4294967295,P=L+(N<<16&4294967295|N>>>16),N=x+(P^L^S)+O[14]+4259657740&4294967295,x=P+(N<<23&4294967295|N>>>9),N=S+(x^P^L)+O[1]+2763975236&4294967295,S=x+(N<<4&4294967295|N>>>28),N=L+(S^x^P)+O[4]+1272893353&4294967295,L=S+(N<<11&4294967295|N>>>21),N=P+(L^S^x)+O[7]+4139469664&4294967295,P=L+(N<<16&4294967295|N>>>16),N=x+(P^L^S)+O[10]+3200236656&4294967295,x=P+(N<<23&4294967295|N>>>9),N=S+(x^P^L)+O[13]+681279174&4294967295,S=x+(N<<4&4294967295|N>>>28),N=L+(S^x^P)+O[0]+3936430074&4294967295,L=S+(N<<11&4294967295|N>>>21),N=P+(L^S^x)+O[3]+3572445317&4294967295,P=L+(N<<16&4294967295|N>>>16),N=x+(P^L^S)+O[6]+76029189&4294967295,x=P+(N<<23&4294967295|N>>>9),N=S+(x^P^L)+O[9]+3654602809&4294967295,S=x+(N<<4&4294967295|N>>>28),N=L+(S^x^P)+O[12]+3873151461&4294967295,L=S+(N<<11&4294967295|N>>>21),N=P+(L^S^x)+O[15]+530742520&4294967295,P=L+(N<<16&4294967295|N>>>16),N=x+(P^L^S)+O[2]+3299628645&4294967295,x=P+(N<<23&4294967295|N>>>9),N=S+(P^(x|~L))+O[0]+4096336452&4294967295,S=x+(N<<6&4294967295|N>>>26),N=L+(x^(S|~P))+O[7]+1126891415&4294967295,L=S+(N<<10&4294967295|N>>>22),N=P+(S^(L|~x))+O[14]+2878612391&4294967295,P=L+(N<<15&4294967295|N>>>17),N=x+(L^(P|~S))+O[5]+4237533241&4294967295,x=P+(N<<21&4294967295|N>>>11),N=S+(P^(x|~L))+O[12]+1700485571&4294967295,S=x+(N<<6&4294967295|N>>>26),N=L+(x^(S|~P))+O[3]+2399980690&4294967295,L=S+(N<<10&4294967295|N>>>22),N=P+(S^(L|~x))+O[10]+4293915773&4294967295,P=L+(N<<15&4294967295|N>>>17),N=x+(L^(P|~S))+O[1]+2240044497&4294967295,x=P+(N<<21&4294967295|N>>>11),N=S+(P^(x|~L))+O[8]+1873313359&4294967295,S=x+(N<<6&4294967295|N>>>26),N=L+(x^(S|~P))+O[15]+4264355552&4294967295,L=S+(N<<10&4294967295|N>>>22),N=P+(S^(L|~x))+O[6]+2734768916&4294967295,P=L+(N<<15&4294967295|N>>>17),N=x+(L^(P|~S))+O[13]+1309151649&4294967295,x=P+(N<<21&4294967295|N>>>11),N=S+(P^(x|~L))+O[4]+4149444226&4294967295,S=x+(N<<6&4294967295|N>>>26),N=L+(x^(S|~P))+O[11]+3174756917&4294967295,L=S+(N<<10&4294967295|N>>>22),N=P+(S^(L|~x))+O[2]+718787259&4294967295,P=L+(N<<15&4294967295|N>>>17),N=x+(L^(P|~S))+O[9]+3951481745&4294967295,R.g[0]=R.g[0]+S&4294967295,R.g[1]=R.g[1]+(P+(N<<21&4294967295|N>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+L&4294967295}i.prototype.u=function(R,S){S===void 0&&(S=R.length);for(var x=S-this.blockSize,O=this.B,P=this.h,L=0;L<S;){if(P==0)for(;L<=x;)a(this,R,L),L+=this.blockSize;if(typeof R=="string"){for(;L<S;)if(O[P++]=R.charCodeAt(L++),P==this.blockSize){a(this,O),P=0;break}}else for(;L<S;)if(O[P++]=R[L++],P==this.blockSize){a(this,O),P=0;break}}this.h=P,this.o+=S},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var S=1;S<R.length-8;++S)R[S]=0;var x=8*this.o;for(S=R.length-8;S<R.length;++S)R[S]=x&255,x/=256;for(this.u(R),R=Array(16),S=x=0;4>S;++S)for(var O=0;32>O;O+=8)R[x++]=this.g[S]>>>O&255;return R};function l(R,S){var x=f;return Object.prototype.hasOwnProperty.call(x,R)?x[R]:x[R]=S(R)}function c(R,S){this.h=S;for(var x=[],O=!0,P=R.length-1;0<=P;P--){var L=R[P]|0;O&&L==S||(x[P]=L,O=!1)}this.g=x}var f={};function p(R){return-128<=R&&128>R?l(R,function(S){return new c([S|0],0>S?-1:0)}):new c([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return T;if(0>R)return Z(g(-R));for(var S=[],x=1,O=0;R>=x;O++)S[O]=R/x|0,x*=4294967296;return new c(S,0)}function v(R,S){if(R.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(R.charAt(0)=="-")return Z(v(R.substring(1),S));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(S,8)),O=T,P=0;P<R.length;P+=8){var L=Math.min(8,R.length-P),N=parseInt(R.substring(P,P+L),S);8>L?(L=g(Math.pow(S,L)),O=O.j(L).add(g(N))):(O=O.j(x),O=O.add(g(N)))}return O}var T=p(0),w=p(1),D=p(16777216);r=c.prototype,r.m=function(){if($(this))return-Z(this).m();for(var R=0,S=1,x=0;x<this.g.length;x++){var O=this.i(x);R+=(0<=O?O:4294967296+O)*S,S*=4294967296}return R},r.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(F(this))return"0";if($(this))return"-"+Z(this).toString(R);for(var S=g(Math.pow(R,6)),x=this,O="";;){var P=ge(x,S).g;x=se(x,P.j(S));var L=((0<x.g.length?x.g[0]:x.h)>>>0).toString(R);if(x=P,F(x))return L+O;for(;6>L.length;)L="0"+L;O=L+O}},r.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function F(R){if(R.h!=0)return!1;for(var S=0;S<R.g.length;S++)if(R.g[S]!=0)return!1;return!0}function $(R){return R.h==-1}r.l=function(R){return R=se(this,R),$(R)?-1:F(R)?0:1};function Z(R){for(var S=R.g.length,x=[],O=0;O<S;O++)x[O]=~R.g[O];return new c(x,~R.h).add(w)}r.abs=function(){return $(this)?Z(this):this},r.add=function(R){for(var S=Math.max(this.g.length,R.g.length),x=[],O=0,P=0;P<=S;P++){var L=O+(this.i(P)&65535)+(R.i(P)&65535),N=(L>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);O=N>>>16,L&=65535,N&=65535,x[P]=N<<16|L}return new c(x,x[x.length-1]&-2147483648?-1:0)};function se(R,S){return R.add(Z(S))}r.j=function(R){if(F(this)||F(R))return T;if($(this))return $(R)?Z(this).j(Z(R)):Z(Z(this).j(R));if($(R))return Z(this.j(Z(R)));if(0>this.l(D)&&0>R.l(D))return g(this.m()*R.m());for(var S=this.g.length+R.g.length,x=[],O=0;O<2*S;O++)x[O]=0;for(O=0;O<this.g.length;O++)for(var P=0;P<R.g.length;P++){var L=this.i(O)>>>16,N=this.i(O)&65535,Bt=R.i(P)>>>16,en=R.i(P)&65535;x[2*O+2*P]+=N*en,ce(x,2*O+2*P),x[2*O+2*P+1]+=L*en,ce(x,2*O+2*P+1),x[2*O+2*P+1]+=N*Bt,ce(x,2*O+2*P+1),x[2*O+2*P+2]+=L*Bt,ce(x,2*O+2*P+2)}for(O=0;O<S;O++)x[O]=x[2*O+1]<<16|x[2*O];for(O=S;O<2*S;O++)x[O]=0;return new c(x,0)};function ce(R,S){for(;(R[S]&65535)!=R[S];)R[S+1]+=R[S]>>>16,R[S]&=65535,S++}function ae(R,S){this.g=R,this.h=S}function ge(R,S){if(F(S))throw Error("division by zero");if(F(R))return new ae(T,T);if($(R))return S=ge(Z(R),S),new ae(Z(S.g),Z(S.h));if($(S))return S=ge(R,Z(S)),new ae(Z(S.g),S.h);if(30<R.g.length){if($(R)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var x=w,O=S;0>=O.l(R);)x=Ae(x),O=Ae(O);var P=X(x,1),L=X(O,1);for(O=X(O,2),x=X(x,2);!F(O);){var N=L.add(O);0>=N.l(R)&&(P=P.add(x),L=N),O=X(O,1),x=X(x,1)}return S=se(R,P.j(S)),new ae(P,S)}for(P=T;0<=R.l(S);){for(x=Math.max(1,Math.floor(R.m()/S.m())),O=Math.ceil(Math.log(x)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),L=g(x),N=L.j(S);$(N)||0<N.l(R);)x-=O,L=g(x),N=L.j(S);F(L)&&(L=w),P=P.add(L),R=se(R,N)}return new ae(P,R)}r.A=function(R){return ge(this,R).h},r.and=function(R){for(var S=Math.max(this.g.length,R.g.length),x=[],O=0;O<S;O++)x[O]=this.i(O)&R.i(O);return new c(x,this.h&R.h)},r.or=function(R){for(var S=Math.max(this.g.length,R.g.length),x=[],O=0;O<S;O++)x[O]=this.i(O)|R.i(O);return new c(x,this.h|R.h)},r.xor=function(R){for(var S=Math.max(this.g.length,R.g.length),x=[],O=0;O<S;O++)x[O]=this.i(O)^R.i(O);return new c(x,this.h^R.h)};function Ae(R){for(var S=R.g.length+1,x=[],O=0;O<S;O++)x[O]=R.i(O)<<1|R.i(O-1)>>>31;return new c(x,R.h)}function X(R,S){var x=S>>5;S%=32;for(var O=R.g.length-x,P=[],L=0;L<O;L++)P[L]=0<S?R.i(L+x)>>>S|R.i(L+x+1)<<32-S:R.i(L+x);return new c(P,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,YI=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Ka=c}).apply(typeof ab<"u"?ab:typeof self<"u"?self:typeof window<"u"?window:{});var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $I,cc,XI,Zd,$g,WI,JI,ZI;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fd=="object"&&Fd];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,y){if(y)e:{var E=i;h=h.split(".");for(var I=0;I<h.length-1;I++){var U=h[I];if(!(U in E))break e;E=E[U]}h=h[h.length-1],I=E[h],y=y(I),y!=I&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var E=0,I=!1,U={next:function(){if(!I&&E<h.length){var K=E++;return{value:y(K,h[K]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,E){return h.call.apply(h.bind,arguments)}function T(h,y,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),h.apply(y,U)}}return function(){return h.apply(y,arguments)}}function w(h,y,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function D(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function F(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,U,K){for(var oe=Array(arguments.length-2),We=2;We<arguments.length;We++)oe[We-2]=arguments[We];return y.prototype[U].apply(I,oe)}}function $(h){const y=h.length;if(0<y){const E=Array(y);for(let I=0;I<y;I++)E[I]=h[I];return E}return[]}function Z(h,y){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const U=h.length||0,K=I.length||0;h.length=U+K;for(let oe=0;oe<K;oe++)h[U+oe]=I[oe]}else h.push(I)}}class se{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ce(h){return/^[\s\xa0]*$/.test(h)}function ae(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function ge(h){return ge[" "](h),h}ge[" "]=function(){};var Ae=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function X(h,y,E){for(const I in h)y.call(E,h[I],I,h)}function R(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function S(h){const y={};for(const E in h)y[E]=h[E];return y}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(h,y){let E,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(E in I)h[E]=I[E];for(let K=0;K<x.length;K++)E=x[K],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function P(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function L(h){f.setTimeout(()=>{throw h},0)}function N(){var h=Ge;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Bt{constructor(){this.h=this.g=null}add(y,E){const I=en.get();I.set(y,E),this.h?this.h.next=I:this.g=I,this.h=I}}var en=new se(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Te=!1,Ge=new Bt,Xe=()=>{const h=f.Promise.resolve(void 0);le=()=>{h.then(V)}};var V=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){L(E)}var y=en;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}Te=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var me=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};f.addEventListener("test",E,y),f.removeEventListener("test",E,y)}catch{}return h})();function Ie(h,y){if(re.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(Ae){e:{try{ge(y.nodeName);var U=!0;break e}catch{}U=!1}U||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ke[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ie.aa.h.call(this)}}F(Ie,re);var ke={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),tn=0;function gt(h,y,E,I,U){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!I,this.ha=U,this.key=++tn,this.da=this.fa=!1}function Si(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Zi(h){this.src=h,this.g={},this.h=0}Zi.prototype.add=function(h,y,E,I,U){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var oe=fo(h,y,I,U);return-1<oe?(y=h[oe],E||(y.fa=!1)):(y=new gt(y,this.src,K,!!I,U),y.fa=E,h.push(y)),y};function ia(h,y){var E=y.type;if(E in h.g){var I=h.g[E],U=Array.prototype.indexOf.call(I,y,void 0),K;(K=0<=U)&&Array.prototype.splice.call(I,U,1),K&&(Si(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function fo(h,y,E,I){for(var U=0;U<h.length;++U){var K=h[U];if(!K.da&&K.listener==y&&K.capture==!!E&&K.ha==I)return U}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),ra={};function mo(h,y,E,I,U){if(Array.isArray(y)){for(var K=0;K<y.length;K++)mo(h,y[K],E,I,U);return null}return E=ph(E),h&&h[Be]?h.K(y,E,g(I)?!!I.capture:!1,U):hm(h,y,E,!1,I,U)}function hm(h,y,E,I,U,K){if(!y)throw Error("Invalid event type");var oe=g(U)?!!U.capture:!!U,We=$l(h);if(We||(h[gi]=We=new Zi(h)),E=We.add(y,E,I,oe,K),E.proxy)return E;if(I=mh(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)me||(U=oe),U===void 0&&(U=!1),h.addEventListener(y.toString(),I,U);else if(h.attachEvent)h.attachEvent(go(y.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function mh(){function h(E){return y.call(h.src,h.listener,E)}const y=dm;return h}function po(h,y,E,I,U){if(Array.isArray(y))for(var K=0;K<y.length;K++)po(h,y[K],E,I,U);else I=g(I)?!!I.capture:!!I,E=ph(E),h&&h[Be]?(h=h.i,y=String(y).toString(),y in h.g&&(K=h.g[y],E=fo(K,E,I,U),-1<E&&(Si(K[E]),Array.prototype.splice.call(K,E,1),K.length==0&&(delete h.g[y],h.h--)))):h&&(h=$l(h))&&(y=h.g[y.toString()],h=-1,y&&(h=fo(y,E,I,U)),(E=-1<h?y[h]:null)&&sa(E))}function sa(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[Be])ia(y.i,h);else{var E=h.type,I=h.proxy;y.removeEventListener?y.removeEventListener(E,I,h.capture):y.detachEvent?y.detachEvent(go(E),I):y.addListener&&y.removeListener&&y.removeListener(I),(E=$l(y))?(ia(E,h),E.h==0&&(E.src=null,y[gi]=null)):Si(h)}}}function go(h){return h in ra?ra[h]:ra[h]="on"+h}function dm(h,y){if(h.da)h=!0;else{y=new Ie(y,this);var E=h.listener,I=h.ha||h.src;h.fa&&sa(h),h=E.call(I,y)}return h}function $l(h){return h=h[gi],h instanceof Zi?h:null}var nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ph(h){return typeof h=="function"?h:(h[nn]||(h[nn]=function(y){return h.handleEvent(y)}),h[nn])}function qt(){W.call(this),this.i=new Zi(this),this.M=this,this.F=null}F(qt,W),qt.prototype[Be]=!0,qt.prototype.removeEventListener=function(h,y,E,I){po(this,h,y,E,I)};function Kt(h,y){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=y.type||y,typeof y=="string")y=new re(y,h);else if(y instanceof re)y.target=y.target||h;else{var U=y;y=new re(I,h),O(y,U)}if(U=!0,E)for(var K=E.length-1;0<=K;K--){var oe=y.g=E[K];U=er(oe,I,!0,y)&&U}if(oe=y.g=h,U=er(oe,I,!0,y)&&U,U=er(oe,I,!1,y)&&U,E)for(K=0;K<E.length;K++)oe=y.g=E[K],U=er(oe,I,!1,y)&&U}qt.prototype.N=function(){if(qt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],I=0;I<E.length;I++)Si(E[I]);delete h.g[y],h.h--}}this.F=null},qt.prototype.K=function(h,y,E,I){return this.i.add(String(h),y,!1,E,I)},qt.prototype.L=function(h,y,E,I){return this.i.add(String(h),y,!0,E,I)};function er(h,y,E,I){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var U=!0,K=0;K<y.length;++K){var oe=y[K];if(oe&&!oe.da&&oe.capture==E){var We=oe.listener,Vt=oe.ha||oe.src;oe.fa&&ia(h.i,oe),U=We.call(Vt,I)!==!1&&U}}return U&&!I.defaultPrevented}function gh(h,y,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:f.setTimeout(h,y||0)}function Xl(h){h.g=gh(()=>{h.g=null,h.i&&(h.i=!1,Xl(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class fm extends W{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Xl(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aa(h){W.call(this),this.h=h,this.g={}}F(aa,W);var jr=[];function mn(h){X(h.g,function(y,E){this.g.hasOwnProperty(E)&&sa(y)},h),h.g={}}aa.prototype.N=function(){aa.aa.N.call(this),mn(this)},aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=f.JSON.stringify,vn=f.JSON.parse,mm=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Wl(){}Wl.prototype.h=null;function yh(h){return h.h||(h.h=h.i())}function oa(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){re.call(this,"d")}F(Br,re);function yi(){re.call(this,"c")}F(yi,re);var ni={},qr=null;function yo(){return qr=qr||new qt}ni.La="serverreachability";function Jl(h){re.call(this,ni.La,h)}F(Jl,re);function tr(h){const y=yo();Kt(y,new Jl(y))}ni.STAT_EVENT="statevent";function Fr(h,y){re.call(this,ni.STAT_EVENT,h),this.stat=y}F(Fr,re);function rn(h){const y=yo();Kt(y,new Fr(y,h))}ni.Ma="timingevent";function Zl(h,y){re.call(this,ni.Ma,h),this.size=y}F(Zl,re);function Gr(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},y)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function eu(h,y,E,I,U,K){h.info(function(){if(h.g)if(K)for(var oe="",We=K.split("&"),Vt=0;Vt<We.length;Vt++){var Oe=We[Vt].split("=");if(1<Oe.length){var Yt=Oe[0];Oe=Oe[1];var $t=Yt.split("_");oe=2<=$t.length&&$t[1]=="type"?oe+(Yt+"="+Oe+"&"):oe+(Yt+"=redacted&")}}else oe=null;else oe=K;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+y+`
`+E+`
`+oe})}function tu(h,y,E,I,U,K,oe){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+y+`
`+E+`
`+K+" "+oe})}function nr(h,y,E,I){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+xi(h,E)+(I?" "+I:"")})}function _h(h,y){h.info(function(){return"TIMEOUT: "+y})}Hr.prototype.info=function(){};function xi(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var oe=1;oe<U.length;oe++)U[oe]=""}}}}return ti(E)}catch{return y}}var vt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ci;function Kr(){}F(Kr,Wl),Kr.prototype.g=function(){return new XMLHttpRequest},Kr.prototype.i=function(){return{}},Ci=new Kr;function Ni(h,y,E,I){this.j=h,this.i=y,this.l=E,this.R=I||1,this.U=new aa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var nu={},ir={};function la(h,y,E){h.L=1,h.v=ha(Et(y)),h.m=E,h.P=!0,rr(h,null)}function rr(h,y){h.F=Date.now(),_i(h),h.A=Et(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),or(E.i,"t",I),h.C=0,E=h.j.J,h.h=new vh,h.g=Ph(h.j,E?y:null,!h.m),0<h.O&&(h.M=new fm(w(h.Y,h,h.g),h.O)),y=h.U,E=h.g,I=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(jr[0]=U.toString()),U=jr);for(var K=0;K<U.length;K++){var oe=mo(E,U[K],I||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=h.H?S(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),tr(),eu(h.i,h.u,h.A,h.l,h.R,h.m)}Ni.prototype.ca=function(h){h=h.target;const y=this.M;y&&bn(h)==3?y.j():this.Y(h)},Ni.prototype.Y=function(h){try{if(h==this.g)e:{const $t=bn(this.g);var y=this.g.Ba();const ss=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||$t!=4||y==7||(y==8||0>=ss?tr(3):tr(2)),_o(this);var E=this.g.Z();this.X=E;t:if(sr(this)){var I=ma(this.g);h="";var U=I.length,K=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Qr(this);var oe="";break t}this.h.i=new f.TextDecoder}for(y=0;y<U;y++)this.h.h=!0,h+=this.h.i.decode(I[y],{stream:!(K&&y==U-1)});I.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=E==200,tu(this.i,this.u,this.A,this.l,this.R,$t,E),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Vt=this.g;if((We=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(We)){var Oe=We;break t}}Oe=null}if(E=Oe)nr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Di(this,E);else{this.o=!1,this.s=3,rn(12),En(this),Qr(this);break e}}if(this.P){E=!0;let kn;for(;!this.J&&this.C<oe.length;)if(kn=ua(this,oe),kn==ir){$t==4&&(this.s=4,rn(14),E=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==nu){this.s=4,rn(15),nr(this.i,this.l,oe,"[Invalid Chunk]"),E=!1;break}else nr(this.i,this.l,kn,null),Di(this,kn);if(sr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||oe.length!=0||this.h.h||(this.s=1,rn(16),E=!1),this.o=this.o&&E,!E)nr(this.i,this.l,oe,"[Invalid Chunked Response]"),En(this),Qr(this);else if(0<oe.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),fu(Yt),Yt.M=!0,rn(11))}}else nr(this.i,this.l,oe,null),Di(this,oe);$t==4&&En(this),this.o&&!this.J&&($t==4?kh(this.j,this):(this.o=!1,_i(this)))}else Sh(this.g),E==400&&0<oe.indexOf("Unknown SID")?(this.s=3,rn(12)):(this.s=0,rn(13)),En(this),Qr(this)}}}catch{}finally{}};function sr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function ua(h,y){var E=h.C,I=y.indexOf(`
`,E);return I==-1?ir:(E=Number(y.substring(E,I)),isNaN(E)?nu:(I+=1,I+E>y.length?ir:(y=y.slice(I,I+E),h.C=I+E,y)))}Ni.prototype.cancel=function(){this.J=!0,En(this)};function _i(h){h.S=Date.now()+h.I,xt(h,h.I)}function xt(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Gr(w(h.ba,h),y)}function _o(h){h.B&&(f.clearTimeout(h.B),h.B=null)}Ni.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(_h(this.i,this.A),this.L!=2&&(tr(),rn(17)),En(this),this.s=2,Qr(this)):xt(this,this.S-h)};function Qr(h){h.j.G==0||h.J||kh(h.j,h)}function En(h){_o(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,mn(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Di(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Yr(E.h,h))){if(!h.K&&Yr(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(y)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)is(E),ns(E);else break e;du(E),rn(18)}}else E.za=U[1],0<E.za-E.T&&37500>U[2]&&E.F&&E.v==0&&!E.C&&(E.C=Gr(w(E.Za,E),6e3));if(1>=Eh(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else ur(E,11)}else if((h.K||E.g==h)&&is(E),!ce(y))for(U=E.Da.g.parse(y),y=0;y<U.length;y++){let Oe=U[y];if(E.T=Oe[0],Oe=Oe[1],E.G==2)if(Oe[0]=="c"){E.K=Oe[1],E.ia=Oe[2];const Yt=Oe[3];Yt!=null&&(E.la=Yt,E.j.info("VER="+E.la));const $t=Oe[4];$t!=null&&(E.Aa=$t,E.j.info("SVER="+E.Aa));const ss=Oe[5];ss!=null&&typeof ss=="number"&&0<ss&&(I=1.5*ss,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const kn=h.g;if(kn){const ya=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ya){var K=I.h;K.g||ya.indexOf("spdy")==-1&&ya.indexOf("quic")==-1&&ya.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&($r(K,K.h),K.h=null))}if(I.D){const cr=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;cr&&(I.ya=cr,He(I.I,I.D,cr))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var oe=h;if(I.qa=Vh(I,I.J?I.ia:null,I.W),oe.K){ii(I.h,oe);var We=oe,Vt=I.L;Vt&&(We.I=Vt),We.B&&(_o(We),_i(We)),I.g=oe}else Nh(I);0<E.i.length&&So(E)}else Oe[0]!="stop"&&Oe[0]!="close"||ur(E,7);else E.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?ur(E,7):cu(E):Oe[0]!="noop"&&E.l&&E.l.ta(Oe),E.v=0)}}tr(4)}catch{}}var pm=class{constructor(h,y){this.g=h,this.map=y}};function iu(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ru(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Eh(h){return h.h?1:h.g?h.g.size:0}function Yr(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function $r(h,y){h.g?h.g.add(y):h.h=y}function ii(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}iu.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Tn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return $(h.i)}function Th(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,I=0;I<E;I++)y.push(h[I]);return y}y=[],E=0;for(I in h)y[E++]=h[I];return y}function gm(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const I in h)y[E++]=I;return y}}}function vo(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=gm(h),I=Th(h),U=I.length,K=0;K<U;K++)y.call(void 0,I[K],E&&E[K],h)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eo(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),U=null;if(0<=I){var K=h[E].substring(0,I);U=h[E].substring(I+1)}else K=h[E];y(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function ar(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof ar){this.h=h.h,Xr(this,h.j),this.o=h.o,this.g=h.g,ca(this,h.s),this.l=h.l;var y=h.i,E=new ki;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),To(this,E),this.m=h.m}else h&&(y=String(h).match(su))?(this.h=!1,Xr(this,y[1]||"",!0),this.o=Wr(y[2]||""),this.g=Wr(y[3]||"",!0),ca(this,y[4]),this.l=Wr(y[5]||"",!0),To(this,y[6]||"",!0),this.m=Wr(y[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}ar.prototype.toString=function(){var h=[],y=this.j;y&&h.push(ri(y,au,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(ri(y,au,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ri(E,E.charAt(0)=="/"?ou:bh,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ri(E,vm)),h.join("")};function Et(h){return new ar(h)}function Xr(h,y,E){h.j=E?Wr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function ca(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function To(h,y,E){y instanceof ki?(h.i=y,wh(h.i,h.h)):(E||(y=ri(y,_m)),h.i=new ki(y,h.h))}function He(h,y,E){h.i.set(y,E)}function ha(h){return He(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Wr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ri(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,ym),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ym(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var au=/[#\/\?@]/g,bh=/[#\?:]/g,ou=/[#\?]/g,_m=/[#\?@]/g,vm=/#/g;function ki(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Qt(h){h.g||(h.g=new Map,h.h=0,h.i&&Eo(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}r=ki.prototype,r.add=function(h,y){Qt(this),this.i=null,h=Fn(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function bo(h,y){Qt(h),y=Fn(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function wo(h,y){return Qt(h),y=Fn(h,y),h.g.has(y)}r.forEach=function(h,y){Qt(this),this.g.forEach(function(E,I){E.forEach(function(U){h.call(y,U,I,this)},this)},this)},r.na=function(){Qt(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let I=0;I<y.length;I++){const U=h[I];for(let K=0;K<U.length;K++)E.push(y[I])}return E},r.V=function(h){Qt(this);let y=[];if(typeof h=="string")wo(this,h)&&(y=y.concat(this.g.get(Fn(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},r.set=function(h,y){return Qt(this),this.i=null,h=Fn(this,h),wo(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},r.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function or(h,y,E){bo(h,y),0<E.length&&(h.i=null,h.g.set(Fn(h,y),$(E)),h.h+=E.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var I=y[E];const K=encodeURIComponent(String(I)),oe=this.V(I);for(I=0;I<oe.length;I++){var U=K;oe[I]!==""&&(U+="="+encodeURIComponent(String(oe[I]))),h.push(U)}}return this.i=h.join("&")};function Fn(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function wh(h,y){y&&!h.j&&(Qt(h),h.i=null,h.g.forEach(function(E,I){var U=I.toLowerCase();I!=U&&(bo(this,I),or(this,U,E))},h)),h.j=y}function lu(h,y){const E=new Hr;if(f.Image){const I=new Image;I.onload=D(Dn,E,"TestLoadImage: loaded",!0,y,I),I.onerror=D(Dn,E,"TestLoadImage: error",!1,y,I),I.onabort=D(Dn,E,"TestLoadImage: abort",!1,y,I),I.ontimeout=D(Dn,E,"TestLoadImage: timeout",!1,y,I),f.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else y(!1)}function Ih(h,y){const E=new Hr,I=new AbortController,U=setTimeout(()=>{I.abort(),Dn(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:I.signal}).then(K=>{clearTimeout(U),K.ok?Dn(E,"TestPingServer: ok",!0,y):Dn(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),Dn(E,"TestPingServer: error",!1,y)})}function Dn(h,y,E,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(E)}catch{}}function vi(){this.g=new mm}function uu(h,y,E){const I=E||"";try{vo(h,function(U,K){let oe=U;g(U)&&(oe=ti(U)),y.push(I+K+"="+encodeURIComponent(oe))})}catch(U){throw y.push(I+"type="+encodeURIComponent("_badmap")),U}}function Oi(h){this.l=h.Ub||null,this.j=h.eb||!1}F(Oi,Wl),Oi.prototype.g=function(){return new Gn(this.l,this.j)},Oi.prototype.i=(function(h){return function(){return h}})({});function Gn(h,y){qt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Gn,qt),r=Gn.prototype,r.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,Jr(this)},r.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||f).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},r.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Io(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Io(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}r.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Vi(this):Jr(this),this.readyState==3&&Io(this)}},r.Ra=function(h){this.g&&(this.response=this.responseText=h,Vi(this))},r.Qa=function(h){this.g&&(this.response=h,Vi(this))},r.ga=function(){this.g&&Vi(this)};function Vi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Jr(h)}r.setRequestHeader=function(h,y){this.u.append(h,y)},r.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function Jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function da(h){let y="";return X(h,function(E,I){y+=I,y+=":",y+=E,y+=`\r
`}),y}function Zr(h,y,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=da(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):He(h,y,E))}function ot(h){qt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(ot,qt);var pn=/^https?$/i,lr=["POST","PUT"];r=ot.prototype,r.Ha=function(h){this.J=h},r.ea=function(h,y,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ci.g(),this.v=this.o?yh(this.o):yh(Ci),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(K){fa(this,K);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)E.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const K of I.keys())E.set(K,I.get(K));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),U=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(lr,y,void 0))||I||U||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,oe]of E)this.g.setRequestHeader(K,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ao(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){fa(this,K)}};function fa(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,es(h),ts(h)}function es(h){h.A||(h.A=!0,Kt(h,"complete"),Kt(h,"error"))}r.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Kt(this,"complete"),Kt(this,"abort"),ts(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ts(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ah(this):this.bb())},r.bb=function(){Ah(this)};function Ah(h){if(h.h&&typeof c<"u"&&(!h.v[1]||bn(h)!=4||h.Z()!=2)){if(h.u&&bn(h)==4)gh(h.Ea,0,h);else if(Kt(h,"readystatechange"),bn(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var I;if(I=oe===0){var U=String(h.D).match(su)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),I=!pn.test(U?U.toLowerCase():"")}E=I}if(E)Kt(h,"complete"),Kt(h,"success");else{h.m=6;try{var K=2<bn(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",es(h)}}finally{ts(h)}}}}function ts(h,y){if(h.g){Ao(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Kt(h,"ready");try{E.onreadystatechange=I}catch{}}}function Ao(h){h.I&&(f.clearTimeout(h.I),h.I=null)}r.isActive=function(){return!!this.g};function bn(h){return h.g?h.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),vn(y)}};function ma(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Sh(h){const y={};h=(h.g&&2<=bn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(ce(h[I]))continue;var E=P(h[I]);const U=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=y[U]||[];y[U]=K,K.push(E)}R(y,function(I){return I.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pa(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function Rh(h){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pa("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pa("baseRetryDelayMs",5e3,h),this.cb=pa("retryDelaySeedMs",1e4,h),this.Wa=pa("forwardChannelMaxRetries",2,h),this.wa=pa("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new iu(h&&h.concurrentRequestLimit),this.Da=new vi,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Rh.prototype,r.la=8,r.G=1,r.connect=function(h,y,E,I){rn(0),this.W=h,this.H=y||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Vh(this,null,this.W),So(this)};function cu(h){if(xh(h),h.G==3){var y=h.U++,E=Et(h.I);if(He(E,"SID",h.K),He(E,"RID",y),He(E,"TYPE","terminate"),ga(h,E),y=new Ni(h,h.j,y),y.L=2,y.v=ha(Et(E)),E=!1,f.navigator&&f.navigator.sendBeacon)try{E=f.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&f.Image&&(new Image().src=y.v,E=!0),E||(y.g=Ph(y.j,null),y.g.ea(y.v)),y.F=Date.now(),_i(y)}mu(h)}function ns(h){h.g&&(fu(h),h.g.cancel(),h.g=null)}function xh(h){ns(h),h.u&&(f.clearTimeout(h.u),h.u=null),is(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function So(h){if(!ru(h.h)&&!h.s){h.s=!0;var y=h.Ga;le||Xe(),Te||(le(),Te=!0),Ge.add(y,h),h.B=0}}function Em(h,y){return Eh(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Gr(w(h.Ga,h,y),Oh(h,h.B)),h.B++,!0)}r.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new Ni(this,this.j,h);let K=this.o;if(this.S&&(K?(K=S(K),O(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(y+=I,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=hu(this,U,y),E=Et(this.I),He(E,"RID",h),He(E,"CVER",22),this.D&&He(E,"X-HTTP-Session-Id",this.D),ga(this,E),K&&(this.O?y="headers="+encodeURIComponent(String(da(K)))+"&"+y:this.m&&Zr(E,this.m,K)),$r(this.h,U),this.Ua&&He(E,"TYPE","init"),this.P?(He(E,"$req",y),He(E,"SID","null"),U.T=!0,la(U,E,null)):la(U,E,y),this.G=2}}else this.G==3&&(h?Ch(this,h):this.i.length==0||ru(this.h)||Ch(this))};function Ch(h,y){var E;y?E=y.l:E=h.U++;const I=Et(h.I);He(I,"SID",h.K),He(I,"RID",E),He(I,"AID",h.T),ga(h,I),h.m&&h.o&&Zr(I,h.m,h.o),E=new Ni(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=hu(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),$r(h.h,E),la(E,I,y)}function ga(h,y){h.H&&X(h.H,function(E,I){He(y,I,E)}),h.l&&vo({},function(E,I){He(y,I,E)})}function hu(h,y,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var U=h.i;let K=-1;for(;;){const oe=["count="+E];K==-1?0<E?(K=U[0].g,oe.push("ofs="+K)):K=0:oe.push("ofs="+K);let We=!0;for(let Vt=0;Vt<E;Vt++){let Oe=U[Vt].g;const Yt=U[Vt].map;if(Oe-=K,0>Oe)K=Math.max(0,U[Vt].g-100),We=!1;else try{uu(Yt,oe,"req"+Oe+"_")}catch{I&&I(Yt)}}if(We){I=oe.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,I}function Nh(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;le||Xe(),Te||(le(),Te=!0),Ge.add(y,h),h.v=0}}function du(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Gr(w(h.Fa,h),Oh(h,h.v)),h.v++,!0)}r.Fa=function(){if(this.u=null,Dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Gr(w(this.ab,this),h)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rn(10),ns(this),Dh(this))};function fu(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function Dh(h){h.g=new Ni(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Et(h.qa);He(y,"RID","rpc"),He(y,"SID",h.K),He(y,"AID",h.T),He(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&He(y,"TO",h.ja),He(y,"TYPE","xmlhttp"),ga(h,y),h.m&&h.o&&Zr(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=ha(Et(y)),E.m=null,E.P=!0,rr(E,h)}r.Za=function(){this.C!=null&&(this.C=null,ns(this),du(this),rn(19))};function is(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function kh(h,y){var E=null;if(h.g==y){is(h),fu(h),h.g=null;var I=2}else if(Yr(h.h,y))E=y.D,ii(h.h,y),I=1;else return;if(h.G!=0){if(y.o)if(I==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var U=h.B;I=yo(),Kt(I,new Zl(I,E)),So(h)}else Nh(h);else if(U=y.s,U==3||U==0&&0<y.X||!(I==1&&Em(h,y)||I==2&&du(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),U){case 1:ur(h,5);break;case 4:ur(h,10);break;case 3:ur(h,6);break;default:ur(h,2)}}}function Oh(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function ur(h,y){if(h.j.info("Error code "+y),y==2){var E=w(h.fb,h),I=h.Xa;const U=!I;I=new ar(I||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Xr(I,"https"),ha(I),U?lu(I.toString(),E):Ih(I.toString(),E)}else rn(2);h.G=0,h.l&&h.l.sa(y),mu(h),xh(h)}r.fb=function(h){h?(this.j.info("Successfully pinged google.com"),rn(2)):(this.j.info("Failed to ping google.com"),rn(1))};function mu(h){if(h.G=0,h.ka=[],h.l){const y=Tn(h.h);(y.length!=0||h.i.length!=0)&&(Z(h.ka,y),Z(h.ka,h.i),h.h.i.length=0,$(h.i),h.i.length=0),h.l.ra()}}function Vh(h,y,E){var I=E instanceof ar?Et(E):new ar(E);if(I.g!="")y&&(I.g=y+"."+I.g),ca(I,I.s);else{var U=f.location;I=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;var K=new ar(null);I&&Xr(K,I),y&&(K.g=y),U&&ca(K,U),E&&(K.l=E),I=K}return E=h.D,y=h.ya,E&&y&&He(I,E,y),He(I,"VER",h.la),ga(h,I),I}function Ph(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new ot(new Oi({eb:E})):new ot(h.pa),y.Ha(h.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mh(){}r=Mh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ro(){}Ro.prototype.g=function(h,y){return new wn(h,y)};function wn(h,y){qt.call(this),this.g=new Rh(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!ce(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ce(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new rs(this)}F(wn,qt),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){cu(this.g)},wn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=ti(h),h=E);y.i.push(new pm(y.Ya++,h)),y.G==3&&So(y)},wn.prototype.N=function(){this.g.l=null,delete this.j,cu(this.g),delete this.g,wn.aa.N.call(this)};function Lh(h){Br.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}F(Lh,Br);function Uh(){yi.call(this),this.status=1}F(Uh,yi);function rs(h){this.g=h}F(rs,Mh),rs.prototype.ua=function(){Kt(this.g,"a")},rs.prototype.ta=function(h){Kt(this.g,new Lh(h))},rs.prototype.sa=function(h){Kt(this.g,new Uh)},rs.prototype.ra=function(){Kt(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,ZI=function(){return new Ro},JI=function(){return yo()},WI=ni,$g={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vt.NO_ERROR=0,vt.TIMEOUT=8,vt.HTTP_ERROR=6,Zd=vt,sn.COMPLETE="complete",XI=sn,oa.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",qt.prototype.listen=qt.prototype.K,cc=oa,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,$I=ot}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});const ob="@firebase/firestore";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let jl="10.14.0";/**
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
 */const qs=new Nf("@firebase/firestore");function ol(){return qs.logLevel}function lO(r){qs.setLogLevel(r)}function ne(r,...e){if(qs.logLevel<=Me.DEBUG){const t=e.map($y);qs.debug(`Firestore (${jl}): ${r}`,...t)}}function Dt(r,...e){if(qs.logLevel<=Me.ERROR){const t=e.map($y);qs.error(`Firestore (${jl}): ${r}`,...t)}}function Xi(r,...e){if(qs.logLevel<=Me.WARN){const t=e.map($y);qs.warn(`Firestore (${jl}): ${r}`,...t)}}function $y(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function de(r="Unexpected state"){const e=`FIRESTORE (${jl}) INTERNAL ASSERTION FAILED: `+r;throw Dt(e),new Error(e)}function ye(r,e){r||de()}function uO(r,e){r||de()}function he(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class eA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jt.UNAUTHENTICATED)))}shutdown(){}}class hO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class dO{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new dn,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new dn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string"),new eA(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Jt(e)}}class fO{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mO{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new fO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ye(this.o===void 0);const i=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const a=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ye(typeof t.token=="string"),this.R=t.token,new pO(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class tA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const a=yO(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%e.length))}return i}}function Re(r,e){return r<e?-1:r>e?1:0}function wl(r,e,t){return r.length===e.length&&r.every(((i,a)=>t(i,e[a])))}function nA(r){return r+"\0"}/**
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
 */class pt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new pt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new pt(0,0))}static max(){return new ve(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kc{constructor(e,t,i){t===void 0?t=0:t>e.length&&de(),i===void 0?i=e.length-t:i>e.length-t&&de(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return kc.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kc?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=e.get(a),c=t.get(a);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ze extends kc{construct(e,t,i){return new ze(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((a=>a.length>0)))}return new ze(t)}static emptyPath(){return new ze([])}}const _O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends kc{construct(e,t,i){return new ft(e,t,i)}static isValidIdentifier(e){return _O.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(i+=f,a++):(l(),a++)}if(l(),c)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(t)}static emptyPath(){return new ft([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(ze.fromString(e))}static fromName(e){return new ue(ze.fromString(e).popFirst(5))}static empty(){return new ue(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new ze(e.slice()))}}/**
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
 */class gf{constructor(e,t,i,a){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=a}}function Xg(r){return r.fields.find((e=>e.kind===2))}function Pa(r){return r.fields.filter((e=>e.kind!==2))}gf.UNKNOWN_ID=-1;class ef{constructor(e,t){this.fieldPath=e,this.kind=t}}class Oc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Oc(0,ei.min())}}function iA(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,a=ve.fromTimestamp(i===1e9?new pt(t+1,0):new pt(t,i));return new ei(a,ue.empty(),e)}function rA(r){return new ei(r.readTime,r.key,-1)}class ei{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ei(ve.min(),ue.empty(),-1)}static max(){return new ei(ve.max(),ue.empty(),-1)}}function Xy(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
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
 */const sA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Js(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==sA)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,i)=>{t(e)}))}static reject(e){return new B(((t,i)=>{i(e)}))}static waitFor(e){return new B(((t,i)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(p=>i(p)))})),c=!0,l===a&&t()}))}static or(e){let t=B.resolve(!1);for(const i of e)t=t.next((a=>a?B.resolve(a):i()));return t}static forEach(e,t){const i=[];return e.forEach(((a,l)=>{i.push(t.call(this,a,l))})),this.waitFor(i)}static mapArray(e,t){return new B(((i,a)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++f,f===l&&i(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new B(((i,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):i()};l()}))}}/**
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
 */class qf{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new dn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new yc(e,t.error)):this.V.resolve()},this.transaction.onerror=i=>{const a=Wy(i.target.error);this.V.reject(new yc(e,a))}}static open(e,t,i,a){try{return new qf(t,e.transaction(a,i))}catch(l){throw new yc(t,l)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(ne("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new EO(t)}}class Ki{constructor(e,t,i){this.name=e,this.version=t,this.p=i,Ki.S(_t())===12.2&&Dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ne("SimpleDb","Removing database:",e),Ma(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!wc())return!1;if(Ki.v())return!0;const e=_t(),t=Ki.S(e),i=0<t&&t<10,a=oA(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||l)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}async M(e){return this.db||(ne("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,i)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{i(new yc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?i(new te(H.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?i(new te(H.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):i(new yc(e,c))},a.onupgradeneeded=l=>{ne("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.p.O(c,a.transaction,l.oldVersion,this.version).next((()=>{ne("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.M(e);const f=qf.open(this.db,e,l?"readonly":"readwrite",i),p=a(f).next((g=>(f.g(),g))).catch((g=>(f.abort(g),B.reject(g)))).toPromise();return p.catch((()=>{})),await f.m,p}catch(f){const p=f,g=p.name!=="FirebaseError"&&c<3;if(ne("SimpleDb","Transaction failed with error:",p.message,"Retrying:",g),this.close(),!g)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function oA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class vO{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ma(this.B.delete())}}class yc extends te{constructor(e,t){super(H.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Zs(r){return r.name==="IndexedDbTransactionError"}class EO{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(ne("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(ne("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Ma(i)}add(e){return ne("SimpleDb","ADD",this.store.name,e,e),Ma(this.store.add(e))}get(e){return Ma(this.store.get(e)).next((t=>(t===void 0&&(t=null),ne("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ne("SimpleDb","DELETE",this.store.name,e),Ma(this.store.delete(e))}count(){return ne("SimpleDb","COUNT",this.store.name),Ma(this.store.count())}U(e,t){const i=this.options(e,t),a=i.index?this.store.index(i.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(i.range);return new B(((c,f)=>{l.onerror=p=>{f(p.target.error)},l.onsuccess=p=>{c(p.target.result)}}))}{const l=this.cursor(i),c=[];return this.W(l,((f,p)=>{c.push(p)})).next((()=>c))}}G(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new B(((a,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}j(e,t){ne("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,t);i.H=!1;const a=this.cursor(i);return this.W(a,((l,c,f)=>f.delete()))}J(e,t){let i;t?i=e:(i={},t=e);const a=this.cursor(i);return this.W(a,t)}Y(e){const t=this.cursor({});return new B(((i,a)=>{t.onerror=l=>{const c=Wy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():i()})):i()}}))}W(e,t){const i=[];return new B(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const p=new vO(f),g=t(f.primaryKey,f.value,p);if(g instanceof B){const v=g.catch((T=>(p.done(),B.reject(T))));i.push(v)}p.isDone?a():p.K===null?f.continue():f.continue(p.K)}})).next((()=>B.waitFor(i)))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.H?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ma(r){return new B(((e,t)=>{r.onsuccess=i=>{const a=i.target.result;e(a)},r.onerror=i=>{const a=Wy(i.target.error);t(a)}}))}let lb=!1;function Wy(r){const e=Ki.S(_t());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const i=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lb||(lb=!0,setTimeout((()=>{throw i}),0)),i}}return r}class TO{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){ne("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ne("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Zs(t)?ne("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Js(t)}await this.X(6e4)}))}}class bO{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.te(t,e)))}te(e,t){const i=new Set;let a=t,l=!0;return B.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!i.has(c))return ne("IndexBackfiller",`Processing collection: ${c}`),this.ne(e,c,a).next((f=>{a-=f,i.add(c)}));l=!1})))).next((()=>t-a))}ne(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,i).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this.re(a,l))).next((f=>(ne("IndexBackfiller",`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}re(e,t){let i=e;return t.changes.forEach(((a,l)=>{const c=rA(l);Xy(c,i)>0&&(i=c)})),new ei(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jn.oe=-1;function eh(r){return r==null}function Vc(r){return r===0&&1/r==-1/0}function lA(r){return typeof r=="number"&&Number.isInteger(r)&&!Vc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function xn(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ub(e)),e=wO(r.get(t),e);return ub(e)}function wO(r,e){let t=e;const i=r.length;for(let a=0;a<i;a++){const l=r.charAt(a);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function ub(r){return r+""}function Gi(r){const e=r.length;if(ye(e>=2),e===2)return ye(r.charAt(0)===""&&r.charAt(1)===""),ze.emptyPath();const t=e-2,i=[];let a="";for(let l=0;l<e;){const c=r.indexOf("",l);switch((c<0||c>t)&&de(),r.charAt(c+1)){case"":const f=r.substring(l,c);let p;a.length===0?p=f:(a+=f,p=a,a=""),i.push(p);break;case"":a+=r.substring(l,c),a+="\0";break;case"":a+=r.substring(l,c+1);break;default:de()}l=c+2}return new ze(i)}/**
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
 */const cb=["userId","batchId"];/**
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
 */function tf(r,e){return[r,xn(e)]}function uA(r,e,t){return[r,xn(e),t]}const IO={},AO=["prefixPath","collectionGroup","readTime","documentId"],SO=["prefixPath","collectionGroup","documentId"],RO=["collectionGroup","readTime","prefixPath","documentId"],xO=["canonicalId","targetId"],CO=["targetId","path"],NO=["path","targetId"],DO=["collectionId","parent"],kO=["indexId","uid"],OO=["uid","sequenceNumber"],VO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],PO=["indexId","uid","orderedDocumentKey"],MO=["userId","collectionPath","documentId"],LO=["userId","collectionPath","largestBatchId"],UO=["userId","collectionGroup","largestBatchId"],cA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zO=[...cA,"documentOverlays"],hA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dA=hA,Jy=[...dA,"indexConfiguration","indexState","indexEntries"],jO=Jy,BO=[...Jy,"globals"];/**
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
 */class Wg extends aA{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ht(r,e){const t=he(r);return Ki.F(t._e,e)}/**
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
 */function hb(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function oo(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function fA(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class at{constructor(e,t){this.comparator=e,this.root=t||cn.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,cn.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gd(this.root,e,this.comparator,!0)}}class Gd{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class cn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??cn.RED,this.left=a??cn.EMPTY,this.right=l??cn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new cn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return cn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return cn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}cn.EMPTY=null,cn.RED=!0,cn.BLACK=!1;cn.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,t,i,a,l){return this}insert(e,t,i){return new cn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new db(this.data.getIterator())}getIteratorFrom(e){return new db(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class db{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function il(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Bn{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new rt(ft.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wl(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class mA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function qO(){return typeof atob<"u"}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new mA("Invalid base64 string: "+l):l}})(e);return new At(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const FO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(r){if(ye(!!r),typeof r=="string"){let e=0;const t=FO.exec(r);if(ye(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(r.seconds),nanos:dt(r.nanos)}}function dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Fs(r){return typeof r=="string"?At.fromBase64String(r):At.fromUint8Array(r)}/**
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
 */function Ff(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zy(r){const e=r.mapValue.fields.__previous_value__;return Ff(e)?Zy(e):e}function Pc(r){const e=Or(r.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class GO{constructor(e,t,i,a,l,c,f,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g}}class Gs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ps={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},nf={nullValue:"NULL_VALUE"};function Xa(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ff(r)?4:pA(r)?9007199254740991:Gf(r)?10:11:de()}function Wi(r,e){if(r===e)return!0;const t=Xa(r);if(t!==Xa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Pc(r).isEqual(Pc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Or(a.timestampValue),f=Or(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(a,l){return Fs(a.bytesValue).isEqual(Fs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(a,l){return dt(a.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(r,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return dt(a.integerValue)===dt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=dt(a.doubleValue),f=dt(l.doubleValue);return c===f?Vc(c)===Vc(f):isNaN(c)&&isNaN(f)}return!1})(r,e);case 9:return wl(r.arrayValue.values||[],e.arrayValue.values||[],Wi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(hb(c)!==hb(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!Wi(c[p],f[p])))return!1;return!0})(r,e);default:return de()}}function Mc(r,e){return(r.values||[]).find((t=>Wi(t,e)))!==void 0}function Hs(r,e){if(r===e)return 0;const t=Xa(r),i=Xa(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=dt(l.integerValue||l.doubleValue),p=dt(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(r,e);case 3:return fb(r.timestampValue,e.timestampValue);case 4:return fb(Pc(r),Pc(e));case 5:return Re(r.stringValue,e.stringValue);case 6:return(function(l,c){const f=Fs(l),p=Fs(c);return f.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let g=0;g<f.length&&g<p.length;g++){const v=Re(f[g],p[g]);if(v!==0)return v}return Re(f.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Re(dt(l.latitude),dt(c.latitude));return f!==0?f:Re(dt(l.longitude),dt(c.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return mb(r.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,p,g,v;const T=l.fields||{},w=c.fields||{},D=(f=T.value)===null||f===void 0?void 0:f.arrayValue,F=(p=w.value)===null||p===void 0?void 0:p.arrayValue,$=Re(((g=D==null?void 0:D.values)===null||g===void 0?void 0:g.length)||0,((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0);return $!==0?$:mb(D,F)})(r.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Ps.mapValue&&c===Ps.mapValue)return 0;if(l===Ps.mapValue)return 1;if(c===Ps.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const w=Re(p[T],v[T]);if(w!==0)return w;const D=Hs(f[p[T]],g[v[T]]);if(D!==0)return D}return Re(p.length,v.length)})(r.mapValue,e.mapValue);default:throw de()}}function fb(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Or(r),i=Or(e),a=Re(t.seconds,i.seconds);return a!==0?a:Re(t.nanos,i.nanos)}function mb(r,e){const t=r.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Hs(t[a],i[a]);if(l)return l}return Re(t.length,i.length)}function Il(r){return Jg(r)}function Jg(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Or(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Fs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ue.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=Jg(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Jg(t.fields[c])}`;return a+"}"})(r.mapValue):de()}function Wa(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Zg(r){return!!r&&"integerValue"in r}function Lc(r){return!!r&&"arrayValue"in r}function pb(r){return!!r&&"nullValue"in r}function gb(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function rf(r){return!!r&&"mapValue"in r}function Gf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function _c(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return oo(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=_c(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_c(r.arrayValue.values[t]);return e}return Object.assign({},r)}function pA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const gA={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function HO(r){return"nullValue"in r?nf:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Wa(Gs.empty(),ue.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Gf(r)?gA:{mapValue:{}}:de()}function KO(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Wa(Gs.empty(),ue.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?gA:"mapValue"in r?Gf(r)?{mapValue:{}}:Ps:de()}function yb(r,e){const t=Hs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function _b(r,e){const t=Hs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_c(t)}setAll(e){let t=ft.emptyPath(),i={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=f.popLast()}c?i[f.lastSegment()]=_c(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){oo(t,((a,l)=>e[a]=l));for(const a of i)delete e[a]}clone(){return new hn(_c(this.value))}}function yA(r){const e=[];return oo(r.fields,((t,i)=>{const a=new ft([t]);if(rf(i)){const l=yA(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Bn(e)}/**
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
 */class ct{constructor(e,t,i,a,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ct(e,0,ve.min(),ve.min(),ve.min(),hn.empty(),0)}static newFoundDocument(e,t,i,a){return new ct(e,1,t,ve.min(),i,a,0)}static newNoDocument(e,t){return new ct(e,2,t,ve.min(),ve.min(),hn.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,ve.min(),ve.min(),hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ks{constructor(e,t){this.position=e,this.inclusive=t}}function vb(r,e,t){let i=0;for(let a=0;a<r.position.length;a++){const l=e[a],c=r.position[a];if(l.field.isKeyField()?i=ue.comparator(ue.fromName(c.referenceValue),t.key):i=Hs(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Eb(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Wi(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Uc{constructor(e,t="asc"){this.field=e,this.dir=t}}function QO(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class _A{}class je extends _A{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new YO(e,t,i):t==="array-contains"?new WO(e,i):t==="in"?new IA(e,i):t==="not-in"?new JO(e,i):t==="array-contains-any"?new ZO(e,i):new je(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new $O(e,i):new XO(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Hs(t,this.value)):t!==null&&Xa(this.value)===Xa(t)&&this.matchesComparison(Hs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends _A{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new et(e,t)}matches(e){return Al(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Al(r){return r.op==="and"}function ey(r){return r.op==="or"}function e_(r){return vA(r)&&Al(r)}function vA(r){for(const e of r.filters)if(e instanceof et)return!1;return!0}function ty(r){if(r instanceof je)return r.field.canonicalString()+r.op.toString()+Il(r.value);if(e_(r))return r.filters.map((e=>ty(e))).join(",");{const e=r.filters.map((t=>ty(t))).join(",");return`${r.op}(${e})`}}function EA(r,e){return r instanceof je?(function(i,a){return a instanceof je&&i.op===a.op&&i.field.isEqual(a.field)&&Wi(i.value,a.value)})(r,e):r instanceof et?(function(i,a){return a instanceof et&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce(((l,c,f)=>l&&EA(c,a.filters[f])),!0):!1})(r,e):void de()}function TA(r,e){const t=r.filters.concat(e);return et.create(t,r.op)}function bA(r){return r instanceof je?(function(t){return`${t.field.canonicalString()} ${t.op} ${Il(t.value)}`})(r):r instanceof et?(function(t){return t.op.toString()+" {"+t.getFilters().map(bA).join(" ,")+"}"})(r):"Filter"}class YO extends je{constructor(e,t,i){super(e,t,i),this.key=ue.fromName(i.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class $O extends je{constructor(e,t){super(e,"in",t),this.keys=wA("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class XO extends je{constructor(e,t){super(e,"not-in",t),this.keys=wA("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wA(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>ue.fromName(i.referenceValue)))}class WO extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lc(t)&&Mc(t.arrayValue,this.value)}}class IA extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mc(this.value.arrayValue,t)}}class JO extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Mc(this.value.arrayValue,t)}}class ZO extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Mc(this.value.arrayValue,i)))}}/**
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
 */class eV{constructor(e,t=null,i=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.ue=null}}function ny(r,e=null,t=[],i=[],a=null,l=null,c=null){return new eV(r,e,t,i,a,l,c)}function Ja(r){const e=he(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>ty(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),eh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Il(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Il(i))).join(",")),e.ue=t}return e.ue}function th(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!QO(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!EA(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Eb(r.startAt,e.startAt)&&Eb(r.endAt,e.endAt)}function yf(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function _f(r,e){return r.filters.filter((t=>t instanceof je&&t.field.isEqual(e)))}function Tb(r,e,t){let i=nf,a=!0;for(const l of _f(r,e)){let c=nf,f=!0;switch(l.op){case"<":case"<=":c=HO(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=nf}yb({value:i,inclusive:a},{value:c,inclusive:f})<0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];yb({value:i,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}function bb(r,e,t){let i=Ps,a=!0;for(const l of _f(r,e)){let c=Ps,f=!0;switch(l.op){case">=":case">":c=KO(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=Ps}_b({value:i,inclusive:a},{value:c,inclusive:f})>0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];_b({value:i,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}/**
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
 */class Lr{constructor(e,t=null,i=[],a=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AA(r,e,t,i,a,l,c,f){return new Lr(r,e,t,i,a,l,c,f)}function Bl(r){return new Lr(r)}function wb(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function t_(r){return r.collectionGroup!==null}function yl(r){const e=he(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new rt(ft.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Uc(l,i))})),t.has(ft.keyField().canonicalString())||e.ce.push(new Uc(ft.keyField(),i))}return e.ce}function Cn(r){const e=he(r);return e.le||(e.le=tV(e,yl(r))),e.le}function tV(r,e){if(r.limitType==="F")return ny(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new Uc(a.field,l)}));const t=r.endAt?new Ks(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Ks(r.startAt.position,r.startAt.inclusive):null;return ny(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function iy(r,e){const t=r.filters.concat([e]);return new Lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function vf(r,e,t){return new Lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function nh(r,e){return th(Cn(r),Cn(e))&&r.limitType===e.limitType}function SA(r){return`${Ja(Cn(r))}|lt:${r.limitType}`}function ll(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((a=>bA(a))).join(", ")}]`),eh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>Il(a))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>Il(a))).join(",")),`Target(${i})`})(Cn(r))}; limitType=${r.limitType})`}function ih(r,e){return e.isFoundDocument()&&(function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ue.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,a){for(const l of yl(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0})(r,e)&&(function(i,a){return!(i.startAt&&!(function(c,f,p){const g=vb(c,f,p);return c.inclusive?g<=0:g<0})(i.startAt,yl(i),a)||i.endAt&&!(function(c,f,p){const g=vb(c,f,p);return c.inclusive?g>=0:g>0})(i.endAt,yl(i),a))})(r,e)}function RA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xA(r){return(e,t)=>{let i=!1;for(const a of yl(r)){const l=nV(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function nV(r,e,t){const i=r.field.isKeyField()?ue.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),g=f.data.field(l);return p!==null&&g!==null?Hs(p,g):de()})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return de()}}/**
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
 */class ea{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){oo(this.inner,((t,i)=>{for(const[a,l]of i)e(a,l)}))}isEmpty(){return fA(this.inner)}size(){return this.innerSize}}/**
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
 */const iV=new at(ue.comparator);function qn(){return iV}const CA=new at(ue.comparator);function hc(...r){let e=CA;for(const t of r)e=e.insert(t.key,t);return e}function NA(r){let e=CA;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Hi(){return vc()}function DA(){return vc()}function vc(){return new ea((r=>r.toString()),((r,e)=>r.isEqual(e)))}const rV=new at(ue.comparator),sV=new rt(ue.comparator);function Ne(...r){let e=sV;for(const t of r)e=e.add(t);return e}const aV=new rt(Re);function n_(){return aV}/**
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
 */function i_(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vc(e)?"-0":e}}function kA(r){return{integerValue:""+r}}function OA(r,e){return lA(e)?kA(e):i_(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Hf{constructor(){this._=void 0}}function oV(r,e,t){return r instanceof Sl?(function(a,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Ff(l)&&(l=Zy(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}})(t,e):r instanceof Za?PA(r,e):r instanceof eo?MA(r,e):(function(a,l){const c=VA(a,l),f=Ib(c)+Ib(a.Pe);return Zg(c)&&Zg(a.Pe)?kA(f):i_(a.serializer,f)})(r,e)}function lV(r,e,t){return r instanceof Za?PA(r,e):r instanceof eo?MA(r,e):t}function VA(r,e){return r instanceof Rl?(function(i){return Zg(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Sl extends Hf{}class Za extends Hf{constructor(e){super(),this.elements=e}}function PA(r,e){const t=LA(e);for(const i of r.elements)t.some((a=>Wi(a,i)))||t.push(i);return{arrayValue:{values:t}}}class eo extends Hf{constructor(e){super(),this.elements=e}}function MA(r,e){let t=LA(e);for(const i of r.elements)t=t.filter((a=>!Wi(a,i)));return{arrayValue:{values:t}}}class Rl extends Hf{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ib(r){return dt(r.integerValue||r.doubleValue)}function LA(r){return Lc(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class rh{constructor(e,t){this.field=e,this.transform=t}}function uV(r,e){return r.field.isEqual(e.field)&&(function(i,a){return i instanceof Za&&a instanceof Za||i instanceof eo&&a instanceof eo?wl(i.elements,a.elements,Wi):i instanceof Rl&&a instanceof Rl?Wi(i.Pe,a.Pe):i instanceof Sl&&a instanceof Sl})(r.transform,e.transform)}class cV{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sf(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Kf{}function UA(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Fl(r.key,mt.none()):new ql(r.key,r.data,mt.none());{const t=r.data,i=hn.empty();let a=new rt(ft.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Ur(r.key,i,new Bn(a.toArray()),mt.none())}}function hV(r,e,t){r instanceof ql?(function(a,l,c){const f=a.value.clone(),p=Sb(a.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Ur?(function(a,l,c){if(!sf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Sb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(zA(a)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(r,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ec(r,e,t,i){return r instanceof ql?(function(l,c,f,p){if(!sf(l.precondition,c))return f;const g=l.value.clone(),v=Rb(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ur?(function(l,c,f,p){if(!sf(l.precondition,c))return f;const g=Rb(l.fieldTransforms,p,c),v=c.data;return v.setAll(zA(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,c,f){return sf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(r,e,t)}function dV(r,e){let t=null;for(const i of r.fieldTransforms){const a=e.data.field(i.field),l=VA(i.transform,a||null);l!=null&&(t===null&&(t=hn.empty()),t.set(i.field,l))}return t||null}function Ab(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&wl(i,a,((l,c)=>uV(l,c)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ql extends Kf{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ur extends Kf{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function zA(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function Sb(r,e,t){const i=new Map;ye(r.length===t.length);for(let a=0;a<t.length;a++){const l=r[a],c=l.transform,f=e.data.field(l.field);i.set(l.field,lV(c,f,t[a]))}return i}function Rb(r,e,t){const i=new Map;for(const a of r){const l=a.transform,c=t.data.field(a.field);i.set(a.field,oV(l,c,e))}return i}class Fl extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r_ extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s_{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&hV(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ec(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ec(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=DA();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const p=UA(c,f);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(ve.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&wl(this.mutations,e.mutations,((t,i)=>Ab(t,i)))&&wl(this.baseMutations,e.baseMutations,((t,i)=>Ab(t,i)))}}class a_{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){ye(e.mutations.length===i.length);let a=(function(){return rV})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new a_(e,t,i,a)}}/**
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
 */class o_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class fV{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var zt,Fe;function jA(r){switch(r){default:return de();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function BA(r){if(r===void 0)return Dt("GRPC error has no .code"),H.UNKNOWN;switch(r){case zt.OK:return H.OK;case zt.CANCELLED:return H.CANCELLED;case zt.UNKNOWN:return H.UNKNOWN;case zt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case zt.INTERNAL:return H.INTERNAL;case zt.UNAVAILABLE:return H.UNAVAILABLE;case zt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case zt.NOT_FOUND:return H.NOT_FOUND;case zt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case zt.ABORTED:return H.ABORTED;case zt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case zt.DATA_LOSS:return H.DATA_LOSS;default:return de()}}(Fe=zt||(zt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qA(){return new TextEncoder}/**
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
 */const mV=new Ka([4294967295,4294967295],0);function xb(r){const e=qA().encode(r),t=new YI;return t.update(e),new Uint8Array(t.digest())}function Cb(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ka([t,i],0),new Ka([a,l],0)]}class l_{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new dc(`Invalid padding: ${t}`);if(i<0)throw new dc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new dc(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new dc(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ka.fromNumber(this.Ie)}Ee(e,t,i){let a=e.add(t.multiply(Ka.fromNumber(i)));return a.compare(mV)===1&&(a=new Ka([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=xb(e),[i,a]=Cb(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,a,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new l_(l,a,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.Ie===0)return;const t=xb(e),[i,a]=Cb(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,a,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class dc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sh{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,ah.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new sh(ve.min(),a,new at(Re),qn(),Ne())}}class ah{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ah(i,t,Ne(),Ne(),Ne())}}/**
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
 */class af{constructor(e,t,i,a){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=a}}class FA{constructor(e,t){this.targetId=e,this.me=t}}class GA{constructor(e,t,i=At.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class Nb{constructor(){this.fe=0,this.ge=kb(),this.pe=At.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:de()}})),new ah(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=kb()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pV{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=Db(),this.Qe=new at(Re)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:de()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((i,a)=>{this.ze(a)&&t(a)}))}He(e){const t=e.targetId,i=e.me.count,a=this.Je(t);if(a){const l=a.target;if(yf(l))if(i===0){const c=new ue(l.path);this.Ue(t,c,ct.newNoDocument(c,ve.min()))}else ye(i===1);else{const c=this.Ye(t);if(c!==i){const f=this.Ze(e),p=f?this.Xe(f,e,c):1;if(p!==0){this.je(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,g)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Fs(i).toUint8Array()}catch(p){if(p instanceof mA)return Xi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new l_(c,a,l)}catch(p){return Xi(p instanceof dc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Ie===0?null:f}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let a=0;return i.forEach((l=>{const c=this.Le.tt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),a++)})),a}rt(e){const t=new Map;this.Be.forEach(((l,c)=>{const f=this.Je(c);if(f){if(l.current&&yf(f.target)){const p=new ue(f.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,ct.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}}));let i=Ne();this.qe.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const g=this.Je(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ke.forEach(((l,c)=>c.setReadTime(e)));const a=new sh(e,t,this.Qe,this.ke,i);return this.ke=qn(),this.qe=Db(),this.Qe=new at(Re),a}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const a=this.Ge(e);this.it(e,t)?a.Fe(t,1):a.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nb,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new rt(Re),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nb),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Db(){return new at(ue.comparator)}function kb(){return new at(ue.comparator)}const gV={asc:"ASCENDING",desc:"DESCENDING"},yV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_V={and:"AND",or:"OR"};class vV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ry(r,e){return r.useProto3Json||eh(e)?e:{value:e}}function xl(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function EV(r,e){return xl(r,e.toTimestamp())}function kt(r){return ye(!!r),ve.fromTimestamp((function(t){const i=Or(t);return new pt(i.seconds,i.nanos)})(r))}function u_(r,e){return sy(r,e).canonicalString()}function sy(r,e){const t=(function(a){return new ze(["projects",a.projectId,"databases",a.database])})(r).child("documents");return e===void 0?t:t.child(e)}function KA(r){const e=ze.fromString(r);return ye(nS(e)),e}function zc(r,e){return u_(r.databaseId,e.path)}function Qi(r,e){const t=KA(e);if(t.get(1)!==r.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ue($A(t))}function QA(r,e){return u_(r.databaseId,e)}function YA(r){const e=KA(r);return e.length===4?ze.emptyPath():$A(e)}function ay(r){return new ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $A(r){return ye(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ob(r,e,t){return{name:zc(r,e),fields:t.value.mapValue.fields}}function XA(r,e,t){const i=Qi(r,e.name),a=kt(e.updateTime),l=e.createTime?kt(e.createTime):ve.min(),c=new hn({mapValue:{fields:e.fields}}),f=ct.newFoundDocument(i,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function TV(r,e){return"found"in e?(function(i,a){ye(!!a.found),a.found.name,a.found.updateTime;const l=Qi(i,a.found.name),c=kt(a.found.updateTime),f=a.found.createTime?kt(a.found.createTime):ve.min(),p=new hn({mapValue:{fields:a.found.fields}});return ct.newFoundDocument(l,c,f,p)})(r,e):"missing"in e?(function(i,a){ye(!!a.missing),ye(!!a.readTime);const l=Qi(i,a.missing),c=kt(a.readTime);return ct.newNoDocument(l,c)})(r,e):de()}function bV(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:de()})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(ye(v===void 0||typeof v=="string"),At.fromBase64String(v||"")):(ye(v===void 0||v instanceof Buffer||v instanceof Uint8Array),At.fromUint8Array(v||new Uint8Array))})(r,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const v=g.code===void 0?H.UNKNOWN:BA(g.code);return new te(v,g.message||"")})(c);t=new GA(i,a,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=Qi(r,i.document.name),l=kt(i.document.updateTime),c=i.document.createTime?kt(i.document.createTime):ve.min(),f=new hn({mapValue:{fields:i.document.fields}}),p=ct.newFoundDocument(a,l,c,f),g=i.targetIds||[],v=i.removedTargetIds||[];t=new af(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=Qi(r,i.document),l=i.readTime?kt(i.readTime):ve.min(),c=ct.newNoDocument(a,l),f=i.removedTargetIds||[];t=new af([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=Qi(r,i.document),l=i.removedTargetIds||[];t=new af([],l,a,null)}else{if(!("filter"in e))return de();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new fV(a,l),f=i.targetId;t=new FA(f,c)}}return t}function jc(r,e){let t;if(e instanceof ql)t={update:Ob(r,e.key,e.value)};else if(e instanceof Fl)t={delete:zc(r,e.key)};else if(e instanceof Ur)t={update:Ob(r,e.key,e.data),updateMask:xV(e.fieldMask)};else{if(!(e instanceof r_))return de();t={verify:zc(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Sl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Za)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof eo)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Rl)return{fieldPath:c.field.canonicalString(),increment:f.Pe};throw de()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:EV(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:de()})(r,e.precondition)),t}function oy(r,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?mt.updateTime(kt(l.updateTime)):l.exists!==void 0?mt.exists(l.exists):mt.none()})(e.currentDocument):mt.none(),i=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let p=null;if("setToServerValue"in f)ye(f.setToServerValue==="REQUEST_TIME"),p=new Sl;else if("appendMissingElements"in f){const v=f.appendMissingElements.values||[];p=new Za(v)}else if("removeAllFromArray"in f){const v=f.removeAllFromArray.values||[];p=new eo(v)}else"increment"in f?p=new Rl(c,f.increment):de();const g=ft.fromServerFormat(f.fieldPath);return new rh(g,p)})(r,a))):[];if(e.update){e.update.name;const a=Qi(r,e.update.name),l=new hn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(p){const g=p.fieldPaths||[];return new Bn(g.map((v=>ft.fromServerFormat(v))))})(e.updateMask);return new Ur(a,l,c,t,i)}return new ql(a,l,t,i)}if(e.delete){const a=Qi(r,e.delete);return new Fl(a,t)}if(e.verify){const a=Qi(r,e.verify);return new r_(a,t)}return de()}function wV(r,e){return r&&r.length>0?(ye(e!==void 0),r.map((t=>(function(a,l){let c=a.updateTime?kt(a.updateTime):kt(l);return c.isEqual(ve.min())&&(c=kt(l)),new cV(c,a.transformResults||[])})(t,e)))):[]}function WA(r,e){return{documents:[QA(r,e.path)]}}function JA(r,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=QA(r,a);const l=(function(g){if(g.length!==0)return tS(et.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(w){return{field:ul(w.field),direction:AV(w.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=ry(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{_t:t,parent:a}}function ZA(r){let e=YA(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){ye(i===1);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const w=eS(T);return w instanceof et&&e_(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((w=>(function(F){return new Uc(cl(F.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(F.direction))})(w)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let w;return w=typeof T=="object"?T.value:T,eh(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(T){const w=!!T.before,D=T.values||[];return new Ks(D,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,D=T.values||[];return new Ks(D,w)})(t.endAt)),AA(e,a,c,l,f,"F",p,g)}function IV(r,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function eS(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=cl(t.unaryFilter.field);return je.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=cl(t.unaryFilter.field);return je.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=cl(t.unaryFilter.field);return je.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=cl(t.unaryFilter.field);return je.create(c,"!=",{nullValue:"NULL_VALUE"});default:return de()}})(r):r.fieldFilter!==void 0?(function(t){return je.create(cl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return et.create(t.compositeFilter.filters.map((i=>eS(i))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return de()}})(t.compositeFilter.op))})(r):de()}function AV(r){return gV[r]}function SV(r){return yV[r]}function RV(r){return _V[r]}function ul(r){return{fieldPath:r.canonicalString()}}function cl(r){return ft.fromServerFormat(r.fieldPath)}function tS(r){return r instanceof je?(function(t){if(t.op==="=="){if(gb(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NAN"}};if(pb(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gb(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NOT_NAN"}};if(pb(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ul(t.field),op:SV(t.op),value:t.value}}})(r):r instanceof et?(function(t){const i=t.getFilters().map((a=>tS(a)));return i.length===1?i[0]:{compositeFilter:{op:RV(t.op),filters:i}}})(r):de()}function xV(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nS(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class xr{constructor(e,t,i,a,l=ve.min(),c=ve.min(),f=At.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iS{constructor(e){this.ct=e}}function CV(r,e){let t;if(e.document)t=XA(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=ue.fromSegments(e.noDocument.path),a=no(e.noDocument.readTime);t=ct.newNoDocument(i,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return de();{const i=ue.fromSegments(e.unknownDocument.path),a=no(e.unknownDocument.version);t=ct.newUnknownDocument(i,a)}}return e.readTime&&t.setReadTime((function(a){const l=new pt(a[0],a[1]);return ve.fromTimestamp(l)})(e.readTime)),t}function Vb(r,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ef(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=(function(l,c){return{name:zc(l,c.key),fields:c.data.value.mapValue.fields,updateTime:xl(l,c.version.toTimestamp()),createTime:xl(l,c.createTime.toTimestamp())}})(r.ct,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:to(e.version)};else{if(!e.isUnknownDocument())return de();i.unknownDocument={path:t.path.toArray(),version:to(e.version)}}return i}function Ef(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function to(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function no(r){const e=new pt(r.seconds,r.nanoseconds);return ve.fromTimestamp(e)}function La(r,e){const t=(e.baseMutations||[]).map((l=>oy(r.ct,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const i=e.mutations.map((l=>oy(r.ct,l))),a=pt.fromMillis(e.localWriteTimeMs);return new s_(e.batchId,a,t,i)}function fc(r){const e=no(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?no(r.lastLimboFreeSnapshotVersion):ve.min();let i;return i=(function(l){return l.documents!==void 0})(r.query)?(function(l){return ye(l.documents.length===1),Cn(Bl(YA(l.documents[0])))})(r.query):(function(l){return Cn(ZA(l))})(r.query),new xr(i,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,At.fromBase64String(r.resumeToken))}function rS(r,e){const t=to(e.snapshotVersion),i=to(e.lastLimboFreeSnapshotVersion);let a;a=yf(e.target)?WA(r.ct,e.target):JA(r.ct,e.target)._t;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ja(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:a}}function c_(r){const e=ZA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vf(e,e.limit,"L"):e}function Dg(r,e){return new o_(e.largestBatchId,oy(r.ct,e.overlayMutation))}function Pb(r,e){const t=e.path.lastSegment();return[r,xn(e.path.popLast()),t]}function Mb(r,e,t,i){return{indexId:r,uid:e,sequenceNumber:t,readTime:to(i.readTime),documentKey:xn(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
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
 */class NV{getBundleMetadata(e,t){return Lb(e).get(t).next((i=>{if(i)return(function(l){return{id:l.bundleId,createTime:no(l.createTime),version:l.version}})(i)}))}saveBundleMetadata(e,t){return Lb(e).put((function(a){return{bundleId:a.id,createTime:to(kt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return Ub(e).get(t).next((i=>{if(i)return(function(l){return{name:l.name,query:c_(l.bundledQuery),readTime:no(l.readTime)}})(i)}))}saveNamedQuery(e,t){return Ub(e).put((function(a){return{name:a.name,readTime:to(kt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function Lb(r){return Ht(r,"bundles")}function Ub(r){return Ht(r,"namedQueries")}/**
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
 */class Qf{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const i=t.uid||"";return new Qf(e,i)}getOverlay(e,t){return tc(e).get(Pb(this.userId,t)).next((i=>i?Dg(this.serializer,i):null))}getOverlays(e,t){const i=Hi();return B.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){const a=[];return i.forEach(((l,c)=>{const f=new o_(t,c);a.push(this.ht(e,f))})),B.waitFor(a)}removeOverlaysForBatchId(e,t,i){const a=new Set;t.forEach((c=>a.add(xn(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,i],[this.userId,c,i+1],!1,!0);l.push(tc(e).j("collectionPathOverlayIndex",f))})),B.waitFor(l)}getOverlaysForCollection(e,t,i){const a=Hi(),l=xn(t),c=IDBKeyRange.bound([this.userId,l,i],[this.userId,l,Number.POSITIVE_INFINITY],!0);return tc(e).U("collectionPathOverlayIndex",c).next((f=>{for(const p of f){const g=Dg(this.serializer,p);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,i,a){const l=Hi();let c;const f=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tc(e).J({index:"collectionGroupOverlayIndex",range:f},((p,g,v)=>{const T=Dg(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):v.done()})).next((()=>l))}ht(e,t){return tc(e).put((function(a,l,c){const[f,p,g]=Pb(l,c.mutation.key);return{userId:l,collectionPath:p,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:jc(a.ct,c.mutation)}})(this.serializer,this.userId,t))}}function tc(r){return Ht(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class DV{Pt(e){return Ht(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next((t=>{const i=t==null?void 0:t.value;return i?At.fromUint8Array(i):At.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ua{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(dt(e.integerValue));else if("doubleValue"in e){const i=dt(e.doubleValue);isNaN(i)?this.dt(t,13):(this.dt(t,15),Vc(i)?t.At(0):t.At(i))}else if("timestampValue"in e){let i=e.timestampValue;this.dt(t,20),typeof i=="string"&&(i=Or(i)),t.Rt(`${i.seconds||""}`),t.At(i.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Fs(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.dt(t,45),t.At(i.latitude||0),t.At(i.longitude||0)}else"mapValue"in e?pA(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Gf(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):de()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const i=e.fields||{};this.dt(t,55);for(const a of Object.keys(i))this.Vt(a,t),this.Tt(i[a],t)}wt(e,t){var i,a;const l=e.fields||{};this.dt(t,53);const c="value",f=((a=(i=l[c].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.length)||0;this.dt(t,15),t.At(dt(f)),this.Vt(c,t),this.Tt(l[c],t)}bt(e,t){const i=e.values||[];this.dt(t,50);for(const a of i)this.Tt(a,t)}yt(e,t){this.dt(t,37),ue.fromName(e).path.forEach((i=>{this.dt(t,60),this.Dt(i,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}Ua.vt=new Ua;function kV(r){if(r===0)return 8;let e=0;return r>>4==0&&(e+=4,r<<=4),r>>6==0&&(e+=2,r<<=2),r>>7==0&&(e+=1),e}function zb(r){const e=64-(function(i){let a=0;for(let l=0;l<8;++l){const c=kV(255&i[l]);if(a+=c,c!==8)break}return a})(r);return Math.ceil(e/8)}class OV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Ft(i.value),i=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Ot(i.value),i=t.next();this.Nt()}Lt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Ft(i);else if(i<2048)this.Ft(960|i>>>6),this.Ft(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i);else{const a=t.codePointAt(0);this.Ft(240|a>>>18),this.Ft(128|63&a>>>12),this.Ft(128|63&a>>>6),this.Ft(128|63&a)}}this.Mt()}Bt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Ot(i);else if(i<2048)this.Ot(960|i>>>6),this.Ot(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i);else{const a=t.codePointAt(0);this.Ot(240|a>>>18),this.Ot(128|63&a>>>12),this.Ot(128|63&a>>>6),this.Ot(128|63&a)}}this.Nt()}kt(e){const t=this.qt(e),i=zb(t);this.Qt(1+i),this.buffer[this.position++]=255&i;for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Kt(e){const t=this.qt(e),i=zb(t);this.Qt(1+i),this.buffer[this.position++]=~(255&i);for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),i=(128&t[0])!=0;t[0]^=i?255:128;for(let a=1;a<t.length;++a)t[a]^=i?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const a=new Uint8Array(i);a.set(this.buffer),this.buffer=a}}class VV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class PV{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class nc{constructor(){this.jt=new OV,this.Ht=new VV(this.jt),this.Jt=new PV(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class za{constructor(e,t,i,a){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=a}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new za(this.indexId,this.documentKey,this.arrayValue,i)}}function Cs(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=jb(r.arrayValue,e.arrayValue),t!==0?t:(t=jb(r.directionalValue,e.directionalValue),t!==0?t:ue.comparator(r.documentKey,e.documentKey)))}function jb(r,e){for(let t=0;t<r.length&&t<e.length;++t){const i=r[t]-e[t];if(i!==0)return i}return r.length-e.length}/**
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
 */class Bb{constructor(e){this.Xt=new rt(((t,i)=>ft.comparator(t.field,i.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const i=t;i.isInequality()?this.Xt=this.Xt.add(i):this.tn.push(i)}}get nn(){return this.Xt.size>1}rn(e){if(ye(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Xg(e);if(t!==void 0&&!this.sn(t))return!1;const i=Pa(e);let a=new Set,l=0,c=0;for(;l<i.length&&this.sn(i[l]);++l)a=a.add(i[l].fieldPath.canonicalString());if(l===i.length)return!0;if(this.Xt.size>0){const f=this.Xt.getIterator().getNext();if(!a.has(f.field.canonicalString())){const p=i[l];if(!this.on(f,p)||!this._n(this.en[c++],p))return!1}++l}for(;l<i.length;++l){const f=i[l];if(c>=this.en.length||!this._n(this.en[c++],f))return!1}return!0}an(){if(this.nn)return null;let e=new rt(ft.comparator);const t=[];for(const i of this.tn)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new ef(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new ef(i.field,0))}for(const i of this.en)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new ef(i.field,i.dir==="asc"?0:1)));return new gf(gf.UNKNOWN_ID,this.collectionId,t,Oc.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function sS(r){var e,t;if(ye(r instanceof je||r instanceof et),r instanceof je){if(r instanceof IA){const a=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((l=>je.create(r.field,"==",l))))||[];return et.create(a,"or")}return r}const i=r.filters.map((a=>sS(a)));return et.create(i,r.op)}function MV(r){if(r.getFilters().length===0)return[];const e=cy(sS(r));return ye(aS(e)),ly(e)||uy(e)?[e]:e.getFilters()}function ly(r){return r instanceof je}function uy(r){return r instanceof et&&e_(r)}function aS(r){return ly(r)||uy(r)||(function(t){if(t instanceof et&&ey(t)){for(const i of t.getFilters())if(!ly(i)&&!uy(i))return!1;return!0}return!1})(r)}function cy(r){if(ye(r instanceof je||r instanceof et),r instanceof je)return r;if(r.filters.length===1)return cy(r.filters[0]);const e=r.filters.map((i=>cy(i)));let t=et.create(e,r.op);return t=Tf(t),aS(t)?t:(ye(t instanceof et),ye(Al(t)),ye(t.filters.length>1),t.filters.reduce(((i,a)=>h_(i,a))))}function h_(r,e){let t;return ye(r instanceof je||r instanceof et),ye(e instanceof je||e instanceof et),t=r instanceof je?e instanceof je?(function(a,l){return et.create([a,l],"and")})(r,e):qb(r,e):e instanceof je?qb(e,r):(function(a,l){if(ye(a.filters.length>0&&l.filters.length>0),Al(a)&&Al(l))return TA(a,l.getFilters());const c=ey(a)?a:l,f=ey(a)?l:a,p=c.filters.map((g=>h_(g,f)));return et.create(p,"or")})(r,e),Tf(t)}function qb(r,e){if(Al(e))return TA(e,r.getFilters());{const t=e.filters.map((i=>h_(r,i)));return et.create(t,"or")}}function Tf(r){if(ye(r instanceof je||r instanceof et),r instanceof je)return r;const e=r.getFilters();if(e.length===1)return Tf(e[0]);if(vA(r))return r;const t=e.map((a=>Tf(a))),i=[];return t.forEach((a=>{a instanceof je?i.push(a):a instanceof et&&(a.op===r.op?i.push(...a.filters):i.push(a))})),i.length===1?i[0]:et.create(i,r.op)}/**
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
 */class LV{constructor(){this.un=new d_}addToCollectionParentIndex(e,t){return this.un.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(ei.min())}updateCollectionGroup(e,t,i){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class d_{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new rt(ze.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new rt(ze.comparator)).toArray()}}/**
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
 */const Hd=new Uint8Array(0);class UV{constructor(e,t){this.databaseId=t,this.cn=new d_,this.ln=new ea((i=>Ja(i)),((i,a)=>th(i,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const i=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.cn.add(t)}));const l={collectionId:i,parent:xn(a)};return Fb(e).put(l)}return B.resolve()}getCollectionParents(e,t){const i=[],a=IDBKeyRange.bound([t,""],[nA(t),""],!1,!0);return Fb(e).U(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;i.push(Gi(c.parent))}return i}))}addFieldIndex(e,t){const i=ic(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((p=>[p.fieldPath.canonicalString(),p.kind]))}})(t);delete a.indexId;const l=i.add(a);if(t.indexState){const c=sl(e);return l.next((f=>{c.put(Mb(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const i=ic(e),a=sl(e),l=rl(e);return i.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=ic(e),i=rl(e),a=sl(e);return t.j().next((()=>i.j())).next((()=>a.j()))}createTargetIndexes(e,t){return B.forEach(this.hn(t),(i=>this.getIndexType(e,i).next((a=>{if(a===0||a===1){const l=new Bb(i).an();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const i=rl(e);let a=!0;const l=new Map;return B.forEach(this.hn(t),(c=>this.Pn(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=Ne();const f=[];return B.forEach(l,((p,g)=>{ne("IndexedDbIndexManager",`Using index ${(function(ae){return`id=${ae.indexId}|cg=${ae.collectionGroup}|f=${ae.fields.map((ge=>`${ge.fieldPath}:${ge.kind}`)).join(",")}`})(p)} to execute ${Ja(t)}`);const v=(function(ae,ge){const Ae=Xg(ge);if(Ae===void 0)return null;for(const X of _f(ae,Ae.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null})(g,p),T=(function(ae,ge){const Ae=new Map;for(const X of Pa(ge))for(const R of _f(ae,X.fieldPath))switch(R.op){case"==":case"in":Ae.set(X.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return Ae.set(X.fieldPath.canonicalString(),R.value),Array.from(Ae.values())}return null})(g,p),w=(function(ae,ge){const Ae=[];let X=!0;for(const R of Pa(ge)){const S=R.kind===0?Tb(ae,R.fieldPath,ae.startAt):bb(ae,R.fieldPath,ae.startAt);Ae.push(S.value),X&&(X=S.inclusive)}return new Ks(Ae,X)})(g,p),D=(function(ae,ge){const Ae=[];let X=!0;for(const R of Pa(ge)){const S=R.kind===0?bb(ae,R.fieldPath,ae.endAt):Tb(ae,R.fieldPath,ae.endAt);Ae.push(S.value),X&&(X=S.inclusive)}return new Ks(Ae,X)})(g,p),F=this.In(p,g,w),$=this.In(p,g,D),Z=this.Tn(p,g,T),se=this.En(p.indexId,v,F,w.inclusive,$,D.inclusive,Z);return B.forEach(se,(ce=>i.G(ce,t.limit).next((ae=>{ae.forEach((ge=>{const Ae=ue.fromSegments(ge.documentKey);c.has(Ae)||(c=c.add(Ae),f.push(Ae))}))}))))})).next((()=>f))}return B.resolve(null)}))}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=MV(et.create(e.filters,"and")).map((i=>ny(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt))),this.ln.set(e,t),t)}En(e,t,i,a,l,c,f){const p=(t!=null?t.length:1)*Math.max(i.length,l.length),g=p/(t!=null?t.length:1),v=[];for(let T=0;T<p;++T){const w=t?this.dn(t[T/g]):Hd,D=this.An(e,w,i[T%g],a),F=this.Rn(e,w,l[T%g],c),$=f.map((Z=>this.An(e,w,Z,!0)));v.push(...this.createRange(D,F,$))}return v}An(e,t,i,a){const l=new za(e,ue.empty(),t,i);return a?l:l.Zt()}Rn(e,t,i,a){const l=new za(e,ue.empty(),t,i);return a?l.Zt():l}Pn(e,t){const i=new Bb(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)i.rn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let i=2;const a=this.hn(t);return B.forEach(a,(l=>this.Pn(e,l).next((c=>{c?i!==0&&c.fields.length<(function(p){let g=new rt(ft.comparator),v=!1;for(const T of p.filters)for(const w of T.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?v=!0:g=g.add(w.field));for(const T of p.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(v?1:0)})(l)&&(i=1):i=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&i===2?1:i))}Vn(e,t){const i=new nc;for(const a of Pa(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=i.Yt(a.kind);Ua.vt.It(l,c)}return i.zt()}dn(e){const t=new nc;return Ua.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const i=new nc;return Ua.vt.It(Wa(this.databaseId,t),i.Yt((function(l){const c=Pa(l);return c.length===0?0:c[c.length-1].kind})(e))),i.zt()}Tn(e,t,i){if(i===null)return[];let a=[];a.push(new nc);let l=0;for(const c of Pa(e)){const f=i[l++];for(const p of a)if(this.fn(t,c.fieldPath)&&Lc(f))a=this.gn(a,c,f);else{const g=p.Yt(c.kind);Ua.vt.It(f,g)}}return this.pn(a)}In(e,t,i){return this.Tn(e,t,i.position)}pn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].zt();return t}gn(e,t,i){const a=[...e],l=[];for(const c of i.arrayValue.values||[])for(const f of a){const p=new nc;p.seed(f.zt()),Ua.vt.It(c,p.Yt(t.kind)),l.push(p)}return l}fn(e,t){return!!e.filters.find((i=>i instanceof je&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in")))}getFieldIndexes(e,t){const i=ic(e),a=sl(e);return(t?i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):i.U()).next((l=>{const c=[];return B.forEach(l,(f=>a.get([f.indexId,this.uid]).next((p=>{c.push((function(v,T){const w=T?new Oc(T.sequenceNumber,new ei(no(T.readTime),new ue(Gi(T.documentKey)),T.largestBatchId)):Oc.empty(),D=v.fields.map((([F,$])=>new ef(ft.fromServerFormat(F),$)));return new gf(v.indexId,v.collectionGroup,D,w)})(f,p))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((i,a)=>{const l=i.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Re(i.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,i){const a=ic(e),l=sl(e);return this.yn(e).next((c=>a.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((f=>B.forEach(f,(p=>l.put(Mb(p.indexId,this.uid,c,i))))))))}updateIndexEntries(e,t){const i=new Map;return B.forEach(t,((a,l)=>{const c=i.get(a.collectionGroup);return(c?B.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(i.set(a.collectionGroup,f),B.forEach(f,(p=>this.wn(e,a,p).next((g=>{const v=this.Sn(l,p);return g.isEqual(v)?B.resolve():this.bn(e,l,p,g,v)})))))))}))}Dn(e,t,i,a){return rl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.mn(i,t.key),documentKey:t.key.path.toArray()})}vn(e,t,i,a){return rl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.mn(i,t.key),t.key.path.toArray()])}wn(e,t,i){const a=rl(e);let l=new rt(Cs);return a.J({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.mn(i,t)])},((c,f)=>{l=l.add(new za(i.indexId,t,f.arrayValue,f.directionalValue))})).next((()=>l))}Sn(e,t){let i=new rt(Cs);const a=this.Vn(t,e);if(a==null)return i;const l=Xg(t);if(l!=null){const c=e.data.field(l.fieldPath);if(Lc(c))for(const f of c.arrayValue.values||[])i=i.add(new za(t.indexId,e.key,this.dn(f),a))}else i=i.add(new za(t.indexId,e.key,Hd,a));return i}bn(e,t,i,a,l){ne("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const c=[];return(function(p,g,v,T,w){const D=p.getIterator(),F=g.getIterator();let $=il(D),Z=il(F);for(;$||Z;){let se=!1,ce=!1;if($&&Z){const ae=v($,Z);ae<0?ce=!0:ae>0&&(se=!0)}else $!=null?ce=!0:se=!0;se?(T(Z),Z=il(F)):ce?(w($),$=il(D)):($=il(D),Z=il(F))}})(a,l,Cs,(f=>{c.push(this.Dn(e,t,i,f))}),(f=>{c.push(this.vn(e,t,i,f))})),B.waitFor(c)}yn(e){let t=1;return sl(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((i,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,i){i=i.sort(((c,f)=>Cs(c,f))).filter(((c,f,p)=>!f||Cs(c,p[f-1])!==0));const a=[];a.push(e);for(const c of i){const f=Cs(c,e),p=Cs(c,t);if(f===0)a[0]=e.Zt();else if(f>0&&p<0)a.push(c),a.push(c.Zt());else if(p>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Cn(a[c],a[c+1]))return[];const f=[a[c].indexId,this.uid,a[c].arrayValue,a[c].directionalValue,Hd,[]],p=[a[c+1].indexId,this.uid,a[c+1].arrayValue,a[c+1].directionalValue,Hd,[]];l.push(IDBKeyRange.bound(f,p))}return l}Cn(e,t){return Cs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Gb)}getMinOffset(e,t){return B.mapArray(this.hn(t),(i=>this.Pn(e,i).next((a=>a||de())))).next(Gb)}}function Fb(r){return Ht(r,"collectionParents")}function rl(r){return Ht(r,"indexEntries")}function ic(r){return Ht(r,"indexConfiguration")}function sl(r){return Ht(r,"indexState")}function Gb(r){ye(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<r.length;i++){const a=r[i].indexState.offset;Xy(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ei(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Hb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zn{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new zn(e,zn.DEFAULT_COLLECTION_PERCENTILE,zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function oS(r,e,t){const i=r.store("mutations"),a=r.store("documentMutations"),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const p=i.J({range:c},((v,T,w)=>(f++,w.delete())));l.push(p.next((()=>{ye(f===1)})));const g=[];for(const v of t.mutations){const T=uA(e,v.key.path,t.batchId);l.push(a.delete(T)),g.push(v.key)}return B.waitFor(l).next((()=>g))}function bf(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw de();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */zn.DEFAULT_COLLECTION_PERCENTILE=10,zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zn.DEFAULT=new zn(41943040,zn.DEFAULT_COLLECTION_PERCENTILE,zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zn.DISABLED=new zn(-1,0,0);class Yf{constructor(e,t,i,a){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=a,this.Fn={}}static lt(e,t,i,a){ye(e.uid!=="");const l=e.isAuthenticated()?e.uid:"";return new Yf(l,t,i,a)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ns(e).J({index:"userMutationsIndex",range:i},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,i,a){const l=hl(e),c=Ns(e);return c.add({}).next((f=>{ye(typeof f=="number");const p=new s_(f,t,i,a),g=(function(D,F,$){const Z=$.baseMutations.map((ce=>jc(D.ct,ce))),se=$.mutations.map((ce=>jc(D.ct,ce)));return{userId:F,batchId:$.batchId,localWriteTimeMs:$.localWriteTime.toMillis(),baseMutations:Z,mutations:se}})(this.serializer,this.userId,p),v=[];let T=new rt(((w,D)=>Re(w.canonicalString(),D.canonicalString())));for(const w of a){const D=uA(this.userId,w.key.path,f);T=T.add(w.key.path.popLast()),v.push(c.put(g)),v.push(l.put(D,IO))}return T.forEach((w=>{v.push(this.indexManager.addToCollectionParentIndex(e,w))})),e.addOnCommittedListener((()=>{this.Fn[f]=p.keys()})),B.waitFor(v).next((()=>p))}))}lookupMutationBatch(e,t){return Ns(e).get(t).next((i=>i?(ye(i.userId===this.userId),La(this.serializer,i)):null))}Mn(e,t){return this.Fn[t]?B.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next((i=>{if(i){const a=i.keys();return this.Fn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=IDBKeyRange.lowerBound([this.userId,i]);let l=null;return Ns(e).J({index:"userMutationsIndex",range:a},((c,f,p)=>{f.userId===this.userId&&(ye(f.batchId>=i),l=La(this.serializer,f)),p.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Ns(e).J({index:"userMutationsIndex",range:t,reverse:!0},((a,l,c)=>{i=l.batchId,c.done()})).next((()=>i))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ns(e).U("userMutationsIndex",t).next((i=>i.map((a=>La(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=tf(this.userId,t.path),a=IDBKeyRange.lowerBound(i),l=[];return hl(e).J({range:a},((c,f,p)=>{const[g,v,T]=c,w=Gi(v);if(g===this.userId&&t.path.isEqual(w))return Ns(e).get(T).next((D=>{if(!D)throw de();ye(D.userId===this.userId),l.push(La(this.serializer,D))}));p.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new rt(Re);const a=[];return t.forEach((l=>{const c=tf(this.userId,l.path),f=IDBKeyRange.lowerBound(c),p=hl(e).J({range:f},((g,v,T)=>{const[w,D,F]=g,$=Gi(D);w===this.userId&&l.path.isEqual($)?i=i.add(F):T.done()}));a.push(p)})),B.waitFor(a).next((()=>this.xn(e,i)))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1,l=tf(this.userId,i),c=IDBKeyRange.lowerBound(l);let f=new rt(Re);return hl(e).J({range:c},((p,g,v)=>{const[T,w,D]=p,F=Gi(w);T===this.userId&&i.isPrefixOf(F)?F.length===a&&(f=f.add(D)):v.done()})).next((()=>this.xn(e,f)))}xn(e,t){const i=[],a=[];return t.forEach((l=>{a.push(Ns(e).get(l).next((c=>{if(c===null)throw de();ye(c.userId===this.userId),i.push(La(this.serializer,c))})))})),B.waitFor(a).next((()=>i))}removeMutationBatch(e,t){return oS(e._e,this.userId,t).next((i=>(e.addOnCommittedListener((()=>{this.On(t.batchId)})),B.forEach(i,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return B.resolve();const i=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return hl(e).J({range:i},((l,c,f)=>{if(l[0]===this.userId){const p=Gi(l[1]);a.push(p)}else f.done()})).next((()=>{ye(a.length===0)}))}))}containsKey(e,t){return lS(e,this.userId,t)}Nn(e){return uS(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function lS(r,e,t){const i=tf(e,t.path),a=i[1],l=IDBKeyRange.lowerBound(i);let c=!1;return hl(r).J({range:l,H:!0},((f,p,g)=>{const[v,T,w]=f;v===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Ns(r){return Ht(r,"mutations")}function hl(r){return Ht(r,"documentMutations")}function uS(r){return Ht(r,"mutationQueues")}/**
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
 */class io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new io(0)}static kn(){return new io(-1)}}/**
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
 */class zV{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next((t=>{const i=new io(t.highestTargetId);return t.highestTargetId=i.next(),this.Qn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.qn(e).next((t=>ve.fromTimestamp(new pt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.qn(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,i){return this.qn(e).next((a=>(a.highestListenSequenceNumber=t,i&&(a.lastRemoteSnapshotVersion=i.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Qn(e,a))))}addTargetData(e,t){return this.Kn(e,t).next((()=>this.qn(e).next((i=>(i.targetCount+=1,this.$n(t,i),this.Qn(e,i))))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>al(e).delete(t.targetId))).next((()=>this.qn(e))).next((i=>(ye(i.targetCount>0),i.targetCount-=1,this.Qn(e,i))))}removeTargets(e,t,i){let a=0;const l=[];return al(e).J(((c,f)=>{const p=fc(f);p.sequenceNumber<=t&&i.get(p.targetId)===null&&(a++,l.push(this.removeTargetData(e,p)))})).next((()=>B.waitFor(l))).next((()=>a))}forEachTarget(e,t){return al(e).J(((i,a)=>{const l=fc(a);t(l)}))}qn(e){return Kb(e).get("targetGlobalKey").next((t=>(ye(t!==null),t)))}Qn(e,t){return Kb(e).put("targetGlobalKey",t)}Kn(e,t){return al(e).put(rS(this.serializer,t))}$n(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.qn(e).next((t=>t.targetCount))}getTargetData(e,t){const i=Ja(t),a=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let l=null;return al(e).J({range:a,index:"queryTargetsIndex"},((c,f,p)=>{const g=fc(f);th(t,g.target)&&(l=g,p.done())})).next((()=>l))}addMatchingKeys(e,t,i){const a=[],l=ks(e);return t.forEach((c=>{const f=xn(c.path);a.push(l.put({targetId:i,path:f})),a.push(this.referenceDelegate.addReference(e,i,c))})),B.waitFor(a)}removeMatchingKeys(e,t,i){const a=ks(e);return B.forEach(t,(l=>{const c=xn(l.path);return B.waitFor([a.delete([i,c]),this.referenceDelegate.removeReference(e,i,l)])}))}removeMatchingKeysForTargetId(e,t){const i=ks(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(a)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),a=ks(e);let l=Ne();return a.J({range:i,H:!0},((c,f,p)=>{const g=Gi(c[1]),v=new ue(g);l=l.add(v)})).next((()=>l))}containsKey(e,t){const i=xn(t.path),a=IDBKeyRange.bound([i],[nA(i)],!1,!0);let l=0;return ks(e).J({index:"documentTargetsIndex",H:!0,range:a},(([c,f],p,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}ot(e,t){return al(e).get(t).next((i=>i?fc(i):null))}}function al(r){return Ht(r,"targets")}function Kb(r){return Ht(r,"targetGlobal")}function ks(r){return Ht(r,"targetDocuments")}/**
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
 */function Qb([r,e],[t,i]){const a=Re(r,t);return a===0?Re(e,i):a}class jV{constructor(e){this.Un=e,this.buffer=new rt(Qb),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Qb(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BV{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zs(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Js(t)}await this.Hn(3e5)}))}}class qV{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(jn.oe);const i=new jV(t);return this.Jn.forEachTarget(e,(a=>i.zn(a.sequenceNumber))).next((()=>this.Jn.Zn(e,(a=>i.zn(a))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Jn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Hb)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hb):this.Xn(e,t)))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let i,a,l,c,f,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(g=Date.now(),ol()<=Me.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function FV(r,e){return new qV(r,e)}/**
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
 */class GV{constructor(e,t){this.db=e,this.garbageCollector=FV(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next((i=>t.next((a=>i+a))))}er(e){let t=0;return this.Zn(e,(i=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,((i,a)=>t(a)))}addReference(e,t,i){return Kd(e,i)}removeReference(e,t,i){return Kd(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return Kd(e,t)}nr(e,t){return(function(a,l){let c=!1;return uS(a).Y((f=>lS(a,f,l).next((p=>(p&&(c=!0),B.resolve(!p)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.tr(e,((c,f)=>{if(f<=t){const p=this.nr(e,c).next((g=>{if(!g)return l++,i.getEntry(e,c).next((()=>(i.removeEntry(c,ve.min()),ks(e).delete((function(T){return[0,xn(T.path)]})(c)))))}));a.push(p)}})).next((()=>B.waitFor(a))).next((()=>i.apply(e))).next((()=>l))}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return Kd(e,t)}tr(e,t){const i=ks(e);let a,l=jn.oe;return i.J({index:"documentTargetsIndex"},(([c,f],{path:p,sequenceNumber:g})=>{c===0?(l!==jn.oe&&t(new ue(Gi(a)),l),l=g,a=p):l=jn.oe})).next((()=>{l!==jn.oe&&t(new ue(Gi(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kd(r,e){return ks(r).put((function(i,a){return{targetId:0,path:xn(i.path),sequenceNumber:a}})(e,r.currentSequenceNumber))}/**
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
 */class cS{constructor(){this.changes=new ea((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?B.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return Oa(e).put(i)}removeEntry(e,t,i){return Oa(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],Ef(c),f[f.length-1]]})(t,i))}updateMetadata(e,t){return this.getMetadata(e).next((i=>(i.byteSize+=t,this.rr(e,i))))}getEntry(e,t){let i=ct.newInvalidDocument(t);return Oa(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(rc(t))},((a,l)=>{i=this.ir(t,l)})).next((()=>i))}sr(e,t){let i={size:0,document:ct.newInvalidDocument(t)};return Oa(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(rc(t))},((a,l)=>{i={document:this.ir(t,l),size:bf(l)}})).next((()=>i))}getEntries(e,t){let i=qn();return this._r(e,t,((a,l)=>{const c=this.ir(a,l);i=i.insert(a,c)})).next((()=>i))}ar(e,t){let i=qn(),a=new at(ue.comparator);return this._r(e,t,((l,c)=>{const f=this.ir(l,c);i=i.insert(l,f),a=a.insert(l,bf(c))})).next((()=>({documents:i,ur:a})))}_r(e,t,i){if(t.isEmpty())return B.resolve();let a=new rt(Xb);t.forEach((p=>a=a.add(p)));const l=IDBKeyRange.bound(rc(a.first()),rc(a.last())),c=a.getIterator();let f=c.getNext();return Oa(e).J({index:"documentKeyIndex",range:l},((p,g,v)=>{const T=ue.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&Xb(f,T)<0;)i(f,null),f=c.getNext();f&&f.isEqual(T)&&(i(f,g),f=c.hasNext()?c.getNext():null),f?v.$(rc(f)):v.done()})).next((()=>{for(;f;)i(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,i,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),Ef(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],p=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Oa(e).U(IDBKeyRange.bound(f,p,!0)).next((g=>{l==null||l.incrementDocumentReadCount(g.length);let v=qn();for(const T of g){const w=this.ir(ue.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);w.isFoundDocument()&&(ih(t,w)||a.has(w.key))&&(v=v.insert(w.key,w))}return v}))}getAllFromCollectionGroup(e,t,i,a){let l=qn();const c=$b(t,i),f=$b(t,ei.max());return Oa(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(c,f,!0)},((p,g,v)=>{const T=this.ir(ue.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&v.done()})).next((()=>l))}newChangeBuffer(e){return new KV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Yb(e).get("remoteDocumentGlobalKey").next((t=>(ye(!!t),t)))}rr(e,t){return Yb(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const i=CV(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(ve.min())))return i}return ct.newInvalidDocument(e)}}function hS(r){return new HV(r)}class KV extends cS{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new ea((i=>i.toString()),((i,a)=>i.isEqual(a)))}applyChanges(e){const t=[];let i=0,a=new rt(((l,c)=>Re(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.lr.get(l);if(t.push(this.cr.removeEntry(e,l,f.readTime)),c.isValidDocument()){const p=Vb(this.cr.serializer,c);a=a.add(l.path.popLast());const g=bf(p);i+=g-f.size,t.push(this.cr.addEntry(e,l,p))}else if(i-=f.size,this.trackRemovals){const p=Vb(this.cr.serializer,c.convertToNoDocument(ve.min()));t.push(this.cr.addEntry(e,l,p))}})),a.forEach((l=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.cr.updateMetadata(e,i)),B.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next((i=>(this.lr.set(t,{size:i.size,readTime:i.document.readTime}),i.document)))}getAllFromCache(e,t){return this.cr.ar(e,t).next((({documents:i,ur:a})=>(a.forEach(((l,c)=>{this.lr.set(l,{size:c,readTime:i.get(l).readTime})})),i)))}}function Yb(r){return Ht(r,"remoteDocumentGlobal")}function Oa(r){return Ht(r,"remoteDocumentsV14")}function rc(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $b(r,e){const t=e.documentKey.path.toArray();return[r,Ef(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Xb(r,e){const t=r.path.toArray(),i=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<i.length-2;++l)if(a=Re(t[l],i[l]),a)return a;return a=Re(t.length,i.length),a||(a=Re(t[t.length-2],i[i.length-2]),a||Re(t[t.length-1],i[i.length-1]))}/**
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
 *//**
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
 */class QV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class dS{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(i=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(i!==null&&Ec(i.mutation,a,Bn.empty(),pt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const a=Hi();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,i).next((l=>{let c=hc();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Hi();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const a=[];return i.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,a){let l=qn();const c=vc(),f=(function(){return vc()})();return t.forEach(((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Ur)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Ec(v.mutation,g,v.mutation.getFieldMask(),pt.now())):c.set(g.key,Bn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>{var T;return f.set(g,new QV(v,(T=c.get(g))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=vc();let a=new at(((c,f)=>c-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=i.get(p)||Bn.empty();v=f.applyToLocalView(g,v),i.set(p,v);const T=(a.get(f.batchId)||Ne()).add(p);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,v=p.value,T=DA();v.forEach((w=>{if(!l.has(w)){const D=UA(t.get(w),i.get(w));D!==null&&T.set(w,D),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return B.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,a){return(function(c){return ue.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):t_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):B.resolve(Hi());let f=-1,p=l;return c.next((g=>B.forEach(g,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?B.resolve():this.remoteDocumentCache.getEntry(e,v).next((w=>{p=p.insert(v,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ne()))).next((v=>({batchId:f,changes:NA(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((i=>{let a=hc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=hc();return this.indexManager.getCollectionParents(e,l).next((f=>B.forEach(f,(p=>{const g=(function(T,w){return new Lr(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next((v=>{v.forEach(((T,w)=>{c=c.insert(T,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,ct.newInvalidDocument(v)))}));let f=hc();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Ec(v.mutation,g,Bn.empty(),pt.now()),ih(t,g)&&(f=f.insert(p,g))})),f}))}}/**
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
 */class YV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return B.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:kt(a.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(a){return{name:a.name,query:c_(a.bundledQuery),readTime:kt(a.readTime)}})(t)),B.resolve()}}/**
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
 */class $V{constructor(){this.overlays=new at(ue.comparator),this.Ir=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Hi();return B.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((a,l)=>{this.ht(e,t,l)})),B.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Ir.get(i);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.Ir.delete(i)),B.resolve()}getOverlaysForCollection(e,t,i){const a=Hi(),l=t.length+1,c=new ue(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return B.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new at(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Hi(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=Hi(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>f.set(g,v))),!(f.size()>=a)););return B.resolve(f)}ht(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.Ir.get(a.largestBatchId).delete(i.key);this.Ir.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new o_(t,i));let l=this.Ir.get(t);l===void 0&&(l=Ne(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class XV{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class f_{constructor(){this.Tr=new rt(Wt.Er),this.dr=new rt(Wt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new Wt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Vr(new Wt(e,t))}mr(e,t){e.forEach((i=>this.removeReference(i,t)))}gr(e){const t=new ue(new ze([])),i=new Wt(t,e),a=new Wt(t,e+1),l=[];return this.dr.forEachInRange([i,a],(c=>{this.Vr(c),l.push(c.key)})),l}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ue(new ze([])),i=new Wt(t,e),a=new Wt(t,e+1);let l=Ne();return this.dr.forEachInRange([i,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Wt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Wt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ue.comparator(e.key,t.key)||Re(e.wr,t.wr)}static Ar(e,t){return Re(e.wr,t.wr)||ue.comparator(e.key,t.key)}}/**
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
 */class WV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new rt(Wt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new s_(l,t,i,a);this.mutationQueue.push(c);for(const f of a)this.br=this.br.add(new Wt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return B.resolve(c)}lookupMutationBatch(e,t){return B.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.vr(i),l=a<0?0:a;return B.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Wt(t,0),a=new Wt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,a],(c=>{const f=this.Dr(c.wr);l.push(f)})),B.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new rt(Re);return t.forEach((a=>{const l=new Wt(a,0),c=new Wt(a,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],(f=>{i=i.add(f.wr)}))})),B.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;ue.isDocumentKey(l)||(l=l.child(""));const c=new Wt(new ue(l),0);let f=new rt(Re);return this.br.forEachWhile((p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.wr)),!0)}),c),B.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach((i=>{const a=this.Dr(i);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){ye(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return B.forEach(t.mutations,(a=>{const l=new Wt(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.br=i}))}On(e){}containsKey(e,t){const i=new Wt(t,0),a=this.br.firstAfterOrEqual(i);return B.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class JV{constructor(e){this.Mr=e,this.docs=(function(){return new at(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return B.resolve(i?i.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let i=qn();return t.forEach((a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():ct.newInvalidDocument(a))})),B.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=qn();const c=t.path,f=new ue(c.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Xy(rA(v),i)<=0||(a.has(v.key)||ih(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return B.resolve(l)}getAllFromCollectionGroup(e,t,i,a){de()}Or(e,t){return B.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new ZV(this)}getSize(e){return B.resolve(this.size)}}class ZV extends cS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,a)=>{a.isValidDocument()?t.push(this.cr.addEntry(e,a)):this.cr.removeEntry(i)})),B.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class eP{constructor(e){this.persistence=e,this.Nr=new ea((t=>Ja(t)),th),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new f_,this.targetCount=0,this.kr=io.Bn()}forEachTarget(e,t){return this.Nr.forEach(((i,a)=>t(a))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),B.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new io(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Kn(t),B.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.Nr.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),B.waitFor(l).next((()=>a))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return B.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),B.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),B.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return B.resolve(i)}containsKey(e,t){return B.resolve(this.Br.containsKey(t))}}/**
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
 */class fS{constructor(e,t){this.qr={},this.overlays={},this.Qr=new jn(0),this.Kr=!1,this.Kr=!0,this.$r=new XV,this.referenceDelegate=e(this),this.Ur=new eP(this),this.indexManager=new LV,this.remoteDocumentCache=(function(a){return new JV(a)})((i=>this.referenceDelegate.Wr(i))),this.serializer=new iS(t),this.Gr=new YV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $V,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new WV(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){ne("MemoryPersistence","Starting transaction:",e);const a=new tP(this.Qr.next());return this.referenceDelegate.zr(),i(a).next((l=>this.referenceDelegate.jr(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Hr(e,t){return B.or(Object.values(this.qr).map((i=>()=>i.containsKey(e,t))))}}class tP extends aA{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Jr=new f_,this.Yr=null}static Zr(e){return new $f(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),B.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),B.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((a=>this.Xr.add(a.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.Xr.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,(i=>{const a=ue.fromPath(i);return this.ei(e,a).next((l=>{l||t.removeEntry(a,ve.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return B.or([()=>B.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class nP{constructor(e){this.serializer=e}O(e,t,i,a){const l=new qf("createOrUpgrade",t);i<1&&a>=1&&((function(p){p.createObjectStore("owner")})(e),(function(p){p.createObjectStore("mutationQueues",{keyPath:"userId"}),p.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cb,{unique:!0}),p.createObjectStore("documentMutations")})(e),Wb(e),(function(p){p.createObjectStore("remoteDocuments")})(e));let c=B.resolve();return i<3&&a>=3&&(i!==0&&((function(p){p.deleteObjectStore("targetDocuments"),p.deleteObjectStore("targets"),p.deleteObjectStore("targetGlobal")})(e),Wb(e)),c=c.next((()=>(function(p){const g=p.store("targetGlobal"),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ve.min().toTimestamp(),targetCount:0};return g.put("targetGlobalKey",v)})(l)))),i<4&&a>=4&&(i!==0&&(c=c.next((()=>(function(p,g){return g.store("mutations").U().next((v=>{p.deleteObjectStore("mutations"),p.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cb,{unique:!0});const T=g.store("mutations"),w=v.map((D=>T.put(D)));return B.waitFor(w)}))})(e,l)))),c=c.next((()=>{(function(p){p.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)}))),i<5&&a>=5&&(c=c.next((()=>this.ni(l)))),i<6&&a>=6&&(c=c.next((()=>((function(p){p.createObjectStore("remoteDocumentGlobal")})(e),this.ri(l))))),i<7&&a>=7&&(c=c.next((()=>this.ii(l)))),i<8&&a>=8&&(c=c.next((()=>this.si(e,l)))),i<9&&a>=9&&(c=c.next((()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)}))),i<10&&a>=10&&(c=c.next((()=>this.oi(l)))),i<11&&a>=11&&(c=c.next((()=>{(function(p){p.createObjectStore("bundles",{keyPath:"bundleId"})})(e),(function(p){p.createObjectStore("namedQueries",{keyPath:"name"})})(e)}))),i<12&&a>=12&&(c=c.next((()=>{(function(p){const g=p.createObjectStore("documentOverlays",{keyPath:MO});g.createIndex("collectionPathOverlayIndex",LO,{unique:!1}),g.createIndex("collectionGroupOverlayIndex",UO,{unique:!1})})(e)}))),i<13&&a>=13&&(c=c.next((()=>(function(p){const g=p.createObjectStore("remoteDocumentsV14",{keyPath:AO});g.createIndex("documentKeyIndex",SO),g.createIndex("collectionGroupIndex",RO)})(e))).next((()=>this._i(e,l))).next((()=>e.deleteObjectStore("remoteDocuments")))),i<14&&a>=14&&(c=c.next((()=>this.ai(e,l)))),i<15&&a>=15&&(c=c.next((()=>(function(p){p.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),p.createObjectStore("indexState",{keyPath:kO}).createIndex("sequenceNumberIndex",OO,{unique:!1}),p.createObjectStore("indexEntries",{keyPath:VO}).createIndex("documentKeyIndex",PO,{unique:!1})})(e)))),i<16&&a>=16&&(c=c.next((()=>{t.objectStore("indexState").clear()})).next((()=>{t.objectStore("indexEntries").clear()}))),i<17&&a>=17&&(c=c.next((()=>{(function(p){p.createObjectStore("globals",{keyPath:"name"})})(e)}))),c}ri(e){let t=0;return e.store("remoteDocuments").J(((i,a)=>{t+=bf(a)})).next((()=>{const i={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)}))}ni(e){const t=e.store("mutationQueues"),i=e.store("mutations");return t.U().next((a=>B.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,-1],[l.userId,l.lastAcknowledgedBatchId]);return i.U("userMutationsIndex",c).next((f=>B.forEach(f,(p=>{ye(p.userId===l.userId);const g=La(this.serializer,p);return oS(e,l.userId,g).next((()=>{}))}))))}))))}ii(e){const t=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((a=>{const l=[];return i.J(((c,f)=>{const p=new ze(c),g=(function(T){return[0,xn(T)]})(p);l.push(t.get(g).next((v=>v?B.resolve():(T=>t.put({targetId:0,path:xn(T),sequenceNumber:a.highestListenSequenceNumber}))(p))))})).next((()=>B.waitFor(l)))}))}si(e,t){e.createObjectStore("collectionParents",{keyPath:DO});const i=t.store("collectionParents"),a=new d_,l=c=>{if(a.add(c)){const f=c.lastSegment(),p=c.popLast();return i.put({collectionId:f,parent:xn(p)})}};return t.store("remoteDocuments").J({H:!0},((c,f)=>{const p=new ze(c);return l(p.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([c,f,p],g)=>{const v=Gi(f);return l(v.popLast())}))))}oi(e){const t=e.store("targets");return t.J(((i,a)=>{const l=fc(a),c=rS(this.serializer,l);return t.put(c)}))}_i(e,t){const i=t.store("remoteDocuments"),a=[];return i.J(((l,c)=>{const f=t.store("remoteDocumentsV14"),p=(function(T){return T.document?new ue(ze.fromString(T.document.name).popFirst(5)):T.noDocument?ue.fromSegments(T.noDocument.path):T.unknownDocument?ue.fromSegments(T.unknownDocument.path):de()})(c).path.toArray(),g={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>B.waitFor(a)))}ai(e,t){const i=t.store("mutations"),a=hS(this.serializer),l=new fS($f.Zr,this.serializer.ct);return i.U().next((c=>{const f=new Map;return c.forEach((p=>{var g;let v=(g=f.get(p.userId))!==null&&g!==void 0?g:Ne();La(this.serializer,p).keys().forEach((T=>v=v.add(T))),f.set(p.userId,v)})),B.forEach(f,((p,g)=>{const v=new Jt(g),T=Qf.lt(this.serializer,v),w=l.getIndexManager(v),D=Yf.lt(v,this.serializer,w,l.referenceDelegate);return new dS(a,D,T,w).recalculateAndSaveOverlaysForDocumentKeys(new Wg(t,jn.oe),p).next()}))}))}}function Wb(r){r.createObjectStore("targetDocuments",{keyPath:CO}).createIndex("documentTargetsIndex",NO,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",xO,{unique:!0}),r.createObjectStore("targetGlobal")}const kg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class m_{constructor(e,t,i,a,l,c,f,p,g,v,T=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.ui=l,this.window=c,this.document=f,this.ci=g,this.li=v,this.hi=T,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=w=>Promise.resolve(),!m_.D())throw new te(H.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new GV(this,a),this.Ai=t+"main",this.serializer=new iS(p),this.Ri=new Ki(this.Ai,this.hi,new nP(this.serializer)),this.$r=new DV,this.Ur=new zV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hS(this.serializer),this.Gr=new NV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,v===!1&&Dt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(H.FAILED_PRECONDITION,kg);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Ur.getHighestSequenceNumber(e)))})).then((e=>{this.Qr=new jn(e,this.ci)})).then((()=>{this.Kr=!0})).catch((e=>(this.Ri&&this.Ri.close(),Promise.reject(e))))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Qd(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.wi(e).next((t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))))}))})).next((()=>this.Si(e))).next((t=>this.isPrimary&&!t?this.bi(e).next((()=>!1)):!!t&&this.Di(e).next((()=>!0)))))).catch((e=>{if(Zs(e))return ne("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ne("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ui.enqueueRetryable((()=>this.di(e))),this.isPrimary=e}))}wi(e){return sc(e).get("owner").next((t=>B.resolve(this.vi(t))))}Ci(e){return Qd(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const i=Ht(t,"clientMetadata");return i.U().next((a=>{const l=this.xi(a,18e5),c=a.filter((f=>l.indexOf(f)===-1));return B.forEach(c,(f=>i.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.Fi())).then((()=>this.pi()))))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?B.resolve(!0):sc(e).get("owner").next((t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new te(H.FAILED_PRECONDITION,kg);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qd(e).U().next((i=>this.xi(i,5e3).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&ne("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Wg(e,jn.oe);return this.bi(t).next((()=>this.Ci(t)))})),this.Ri.close(),this.qi()}xi(e,t){return e.filter((i=>this.Mi(i.updateTimeMs,t)&&!this.Ni(i.clientId)))}Qi(){return this.runTransaction("getActiveClients","readonly",(e=>Qd(e).U().next((t=>this.xi(t,18e5).map((i=>i.clientId))))))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Yf.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new UV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Qf.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,i){ne("IndexedDbPersistence","Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(p){return p===17?BO:p===16?jO:p===15?Jy:p===14?dA:p===13?hA:p===12?zO:p===11?cA:void de()})(this.hi);let c;return this.Ri.runTransaction(e,a,l,(f=>(c=new Wg(f,this.Qr?this.Qr.next():jn.oe),t==="readwrite-primary"?this.wi(c).next((p=>!!p||this.Si(c))).next((p=>{if(!p)throw Dt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))),new te(H.FAILED_PRECONDITION,sA);return i(c)})).next((p=>this.Di(c).next((()=>p)))):this.Ki(c).next((()=>i(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}Ki(e){return sc(e).get("owner").next((t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(H.FAILED_PRECONDITION,kg)}))}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sc(e).put("owner",t)}static D(){return Ki.D()}bi(e){const t=sc(e);return t.get("owner").next((i=>this.vi(i)?(ne("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):B.resolve()))}Mi(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(Dt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.mi())))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Mw()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const i=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return ne("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Dt("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Dt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sc(r){return Ht(r,"owner")}function Qd(r){return Ht(r,"clientMetadata")}function p_(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class g_{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=a}static Wi(e,t){let i=Ne(),a=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new g_(e,t.fromCache,i,a)}}/**
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
 */class iP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return Mw()?8:oA(_t())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.Yi(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.Zi(e,t,a,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new iP;return this.Xi(e,t,c).next((f=>{if(l.result=f,this.zi)return this.es(e,t,c,f.size)}))})).next((()=>l.result))}es(e,t,i,a){return i.documentReadCount<this.ji?(ol()<=Me.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ll(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(ol()<=Me.DEBUG&&ne("QueryEngine","Query:",ll(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.Hi*a?(ol()<=Me.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ll(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(t))):B.resolve())}Yi(e,t){if(wb(t))return B.resolve(null);let i=Cn(t);return this.indexManager.getIndexType(e,i).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=vf(t,null,"F"),i=Cn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ne(...l);return this.Ji.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const g=this.ts(t,f);return this.ns(t,g,c,p.readTime)?this.Yi(e,vf(t,null,"F")):this.rs(e,g,t,p)}))))})))))}Zi(e,t,i,a){return wb(t)||a.isEqual(ve.min())?B.resolve(null):this.Ji.getDocuments(e,i).next((l=>{const c=this.ts(t,l);return this.ns(t,c,i,a)?B.resolve(null):(ol()<=Me.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ll(t)),this.rs(e,c,t,iA(a,-1)).next((f=>f)))}))}ts(e,t){let i=new rt(xA(e));return t.forEach(((a,l)=>{ih(e,l)&&(i=i.add(l))})),i}ns(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Xi(e,t,i){return ol()<=Me.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ll(t)),this.Ji.getDocumentsMatchingQuery(e,t,ei.min(),i)}rs(e,t,i,a){return this.Ji.getDocumentsMatchingQuery(e,i,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */class rP{constructor(e,t,i,a){this.persistence=e,this.ss=t,this.serializer=a,this.os=new at(Re),this._s=new ea((l=>Ja(l)),th),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function pS(r,e,t,i){return new rP(r,e,t,i)}async function gS(r,e){const t=he(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next((l=>(a=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=Ne();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next((g=>({hs:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function sP(r,e){const t=he(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const a=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,v){const T=g.batch,w=T.keys();let D=B.resolve();return w.forEach((F=>{D=D.next((()=>v.getEntry(p,F))).next(($=>{const Z=g.docVersions.get(F);ye(Z!==null),$.version.compareTo(Z)<0&&(T.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),v.addEntry($)))}))})),D.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=Ne();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,a)))}))}function yS(r){const e=he(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function aP(r,e){const t=he(r),i=e.snapshotVersion;let a=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});a=t.os;const f=[];e.targetChanges.forEach(((v,T)=>{const w=a.get(T);if(!w)return;f.push(t.Ur.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Ur.addMatchingKeys(l,v.addedDocuments,T))));let D=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(At.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,i)),a=a.insert(T,D),(function($,Z,se){return $.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0})(w,D,v)&&f.push(t.Ur.updateTargetData(l,D))}));let p=qn(),g=Ne();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(_S(l,c,e.documentUpdates).next((v=>{p=v.Ps,g=v.Is}))),!i.isEqual(ve.min())){const v=t.Ur.getLastRemoteSnapshotVersion(l).next((T=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return B.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.os=a,l)))}function _S(r,e,t){let i=Ne(),a=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let c=qn();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(ve.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):ne("LocalStore","Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{Ps:c,Is:a}}))}function oP(r,e){const t=he(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Cl(r,e){const t=he(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let a;return t.Ur.getTargetData(i,e).next((l=>l?(a=l,B.resolve(a)):t.Ur.allocateTargetId(i).next((c=>(a=new xr(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,a).next((()=>a)))))))})).then((i=>{const a=t.os.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i}))}async function Nl(r,e,t){const i=he(r),a=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Zs(c))throw c;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(a.target)}function wf(r,e,t){const i=he(r);let a=ve.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=he(p),w=T._s.get(v);return w!==void 0?B.resolve(T.os.get(w)):T.Ur.getTargetData(g,v)})(i,c,Cn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.ss.getDocumentsMatchingQuery(c,e,t?a:ve.min(),t?l:Ne()))).next((f=>(TS(i,RA(e),f),{documents:f,Ts:l})))))}function vS(r,e){const t=he(r),i=he(t.Ur),a=t.os.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>i.ot(l,e).next((c=>c?c.target:null))))}function ES(r,e){const t=he(r),i=t.us.get(e)||ve.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.cs.getAllFromCollectionGroup(a,e,iA(i,-1),Number.MAX_SAFE_INTEGER))).then((a=>(TS(t,e,a),a)))}function TS(r,e,t){let i=r.us.get(e)||ve.min();t.forEach(((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.us.set(e,i)}async function lP(r,e,t,i){const a=he(r);let l=Ne(),c=qn();for(const g of t){const v=e.Es(g.metadata.name);g.document&&(l=l.add(v));const T=e.ds(g);T.setReadTime(e.As(g.metadata.readTime)),c=c.insert(v,T)}const f=a.cs.newChangeBuffer({trackRemovals:!0}),p=await Cl(a,(function(v){return Cn(Bl(ze.fromString(`__bundle__/docs/${v}`)))})(i));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>_S(g,f,c).next((v=>(f.apply(g),v))).next((v=>a.Ur.removeMatchingKeysForTargetId(g,p.targetId).next((()=>a.Ur.addMatchingKeys(g,l,p.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,v.Ps,v.Is))).next((()=>v.Ps))))))}async function uP(r,e,t=Ne()){const i=await Cl(r,Cn(c_(e.bundledQuery))),a=he(r);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=kt(e.readTime);if(i.snapshotVersion.compareTo(c)>=0)return a.Gr.saveNamedQuery(l,e);const f=i.withResumeToken(At.EMPTY_BYTE_STRING,c);return a.os=a.os.insert(f.targetId,f),a.Ur.updateTargetData(l,f).next((()=>a.Ur.removeMatchingKeysForTargetId(l,i.targetId))).next((()=>a.Ur.addMatchingKeys(l,t,i.targetId))).next((()=>a.Gr.saveNamedQuery(l,e)))}))}function Jb(r,e){return`firestore_clients_${r}_${e}`}function Zb(r,e,t){let i=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function Og(r,e){return`firestore_targets_${r}_${e}`}class If{constructor(e,t,i,a){this.user=e,this.batchId=t,this.state=i,this.error=a}static Rs(e,t,i){const a=JSON.parse(i);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new te(a.error.code,a.error.message))),c?new If(e,t,a.state,l):(Dt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${i}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Tc{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static Rs(e,t){const i=JSON.parse(t);let a,l=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(a=new te(i.error.code,i.error.message))),l?new Tc(e,i.state,a):(Dt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Af{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const i=JSON.parse(t);let a=typeof i=="object"&&i.activeTargetIds instanceof Array,l=n_();for(let c=0;a&&c<i.activeTargetIds.length;++c)a=lA(i.activeTargetIds[c]),l=l.add(i.activeTargetIds[c]);return a?new Af(e,l):(Dt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class y_{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new y_(t.clientId,t.onlineState):(Dt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hy{constructor(){this.activeTargetIds=n_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vg{constructor(e,t,i,a,l){this.window=e,this.ui=t,this.persistenceKey=i,this.ps=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new at(Re),this.started=!1,this.bs=[];const c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.Ds=Jb(this.persistenceKey,this.ps),this.vs=(function(p){return`firestore_sequence_number_${p}`})(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new hy),this.Cs=new RegExp(`^firestore_clients_${c}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${c}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${c}_(\\d+)$`),this.xs=(function(p){return`firestore_online_state_${p}`})(this.persistenceKey),this.Os=(function(p){return`firestore_bundle_loaded_v2_${p}`})(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const i of e){if(i===this.ps)continue;const a=this.getItem(Jb(this.persistenceKey,i));if(a){const l=Af.Rs(i,a);l&&(this.Ss=this.Ss.insert(l.clientId,l))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const i=this.Ls(t);i&&this.Bs(i)}for(const i of this.bs)this.ws(i);this.bs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach(((i,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,i){this.qs(e,t,i),this.Qs(e)}addLocalQueryTarget(e,t=!0){let i="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(Og(this.persistenceKey,e));if(a){const l=Tc.Rs(e,a);l&&(i=l.state)}}return t&&this.Ks.fs(e),this.Ns(),i}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Og(this.persistenceKey,e))}updateQueryState(e,t,i){this.$s(e,t,i)}handleUserChange(e,t,i){t.forEach((a=>{this.Qs(a)})),this.currentUser=e,i.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ne("SharedClientState","READ",e,t),t}setItem(e,t){ne("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ne("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(ne("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const i=this.Gs(t.key);return this.zs(i,null)}{const i=this.js(t.key,t.newValue);if(i)return this.zs(i.clientId,i)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const i=this.Hs(t.key,t.newValue);if(i)return this.Js(i)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const i=this.Ys(t.key,t.newValue);if(i)return this.Zs(i)}}else if(t.key===this.xs){if(t.newValue!==null){const i=this.Ls(t.newValue);if(i)return this.Bs(i)}}else if(t.key===this.vs){const i=(function(l){let c=jn.oe;if(l!=null)try{const f=JSON.parse(l);ye(typeof f=="number"),c=f}catch(f){Dt("SharedClientState","Failed to read sequence number from WebStorage",f)}return c})(t.newValue);i!==jn.oe&&this.sequenceNumberHandler(i)}else if(t.key===this.Os){const i=this.Xs(t.newValue);await Promise.all(i.map((a=>this.syncEngine.eo(a))))}}}else this.bs.push(t)}))}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,i){const a=new If(this.currentUser,e,t,i),l=Zb(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Vs())}Qs(e){const t=Zb(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,i){const a=Og(this.persistenceKey,e),l=new Tc(e,t,i);this.setItem(a,l.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const i=this.Gs(e);return Af.Rs(i,t)}Hs(e,t){const i=this.Fs.exec(e),a=Number(i[1]),l=i[2]!==void 0?i[2]:null;return If.Rs(new Jt(l),a,t)}Ys(e,t){const i=this.Ms.exec(e),a=Number(i[1]);return Tc.Rs(a,t)}Ls(e){return y_.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);ne("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const i=t?this.Ss.insert(e,t):this.Ss.remove(e),a=this.ks(this.Ss),l=this.ks(i),c=[],f=[];return l.forEach((p=>{a.has(p)||c.push(p)})),a.forEach((p=>{l.has(p)||f.push(p)})),this.syncEngine.io(c,f).then((()=>{this.Ss=i}))}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=n_();return e.forEach(((i,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class bS{constructor(){this.so=new hy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cP{_o(e){}shutdown(){}}/**
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
 */class ew{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yd=null;function Pg(){return Yd===null?Yd=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yd++,"0x"+Yd.toString(16)}/**
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
 */const hP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const yn="WebChannelConnection";class fP extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${a}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${l}`}get Fo(){return!1}Mo(t,i,a,l,c){const f=Pg(),p=this.xo(t,i.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${f}:`,p,a);const g={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(g,l,c),this.No(t,p,g,a).then((v=>(ne("RestConnection",`Received RPC '${t}' ${f}: `,v),v)),(v=>{throw Xi("RestConnection",`RPC '${t}' ${f} failed with error: `,v,"url: ",p,"request:",a),v}))}Lo(t,i,a,l,c,f){return this.Mo(t,i,a,l,c)}Oo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jl})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),a&&a.headers.forEach(((l,c)=>t[c]=l))}xo(t,i){const a=hP[t];return`${this.Do}/v1/${i}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,a){const l=Pg();return new Promise(((c,f)=>{const p=new $I;p.setWithCredentials(!0),p.listenOnce(XI.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Zd.NO_ERROR:const v=p.getResponseJson();ne(yn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case Zd.TIMEOUT:ne(yn,`RPC '${e}' ${l} timed out`),f(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case Zd.HTTP_ERROR:const T=p.getStatus();if(ne(yn,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const D=w==null?void 0:w.error;if(D&&D.status&&D.message){const F=(function(Z){const se=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(se)>=0?se:H.UNKNOWN})(D.status);f(new te(F,D.message))}else f(new te(H.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new te(H.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{ne(yn,`RPC '${e}' ${l} completed.`)}}));const g=JSON.stringify(a);ne(yn,`RPC '${e}' ${l} sending request:`,a),p.send(t,"POST",g,i,15)}))}Bo(e,t,i){const a=Pg(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=ZI(),f=JI(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ne(yn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);let w=!1,D=!1;const F=new dP({Io:Z=>{D?ne(yn,`Not sending because RPC '${e}' stream ${a} is closed:`,Z):(w||(ne(yn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),ne(yn,`RPC '${e}' stream ${a} sending:`,Z),T.send(Z))},To:()=>T.close()}),$=(Z,se,ce)=>{Z.listen(se,(ae=>{try{ce(ae)}catch(ge){setTimeout((()=>{throw ge}),0)}}))};return $(T,cc.EventType.OPEN,(()=>{D||(ne(yn,`RPC '${e}' stream ${a} transport opened.`),F.yo())})),$(T,cc.EventType.CLOSE,(()=>{D||(D=!0,ne(yn,`RPC '${e}' stream ${a} transport closed`),F.So())})),$(T,cc.EventType.ERROR,(Z=>{D||(D=!0,Xi(yn,`RPC '${e}' stream ${a} transport errored:`,Z),F.So(new te(H.UNAVAILABLE,"The operation could not be completed")))})),$(T,cc.EventType.MESSAGE,(Z=>{var se;if(!D){const ce=Z.data[0];ye(!!ce);const ae=ce,ge=ae.error||((se=ae[0])===null||se===void 0?void 0:se.error);if(ge){ne(yn,`RPC '${e}' stream ${a} received error:`,ge);const Ae=ge.status;let X=(function(x){const O=zt[x];if(O!==void 0)return BA(O)})(Ae),R=ge.message;X===void 0&&(X=H.INTERNAL,R="Unknown error status: "+Ae+" with message "+ge.message),D=!0,F.So(new te(X,R)),T.close()}else ne(yn,`RPC '${e}' stream ${a} received:`,ce),F.bo(ce)}})),$(f,WI.STAT_EVENT,(Z=>{Z.stat===$g.PROXY?ne(yn,`RPC '${e}' stream ${a} detected buffering proxy`):Z.stat===$g.NOPROXY&&ne(yn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{F.wo()}),0),F}}/**
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
 *//**
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
 */function wS(){return typeof window<"u"?window:null}function of(){return typeof document<"u"?document:null}/**
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
 */function oh(r){return new vV(r,!0)}/**
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
 */class __{constructor(e,t,i=1e3,a=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=a,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),a=Math.max(0,t-i);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,a,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class IS{constructor(e,t,i,a,l,c,f,p){this.ui=e,this.Ho=i,this.Jo=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new __(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,a])=>{this.Yo===t&&this.P_(i,a)}),(i=>{e((()=>{const a=new te(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(a)}))}))}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{i((()=>this.listener.Eo()))})),this.stream.Ro((()=>{i((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((a=>{i((()=>this.I_(a)))})),this.stream.onMessage((a=>{i((()=>++this.e_==1?this.E_(a):this.onNext(a)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mP extends IS{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=bV(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ve.min():c.readTime?kt(c.readTime):ve.min()})(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=ay(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=yf(p)?{documents:WA(l,p)}:{query:JA(l,p)._t},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=HA(l,c.resumeToken);const g=ry(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ve.min())>0){f.readTime=xl(l,c.snapshotVersion.toTimestamp());const g=ry(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const i=IV(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=ay(this.serializer),t.removeTarget=e,this.a_(t)}}class pP extends IS{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=wV(e.writeResults,e.commitTime),i=kt(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=ay(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>jc(this.serializer,i)))};this.a_(t)}}/**
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
 */class gP extends class{}{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.y_=!1}w_(){if(this.y_)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Mo(e,sy(t,i),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(H.UNKNOWN,l.toString())}))}Lo(e,t,i,a,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Lo(e,sy(t,i),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new te(H.UNKNOWN,c.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class yP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Dt(t),this.D_=!1):ne("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _P{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o((c=>{i.enqueueAndForget((async()=>{ta(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await(async function(p){const g=he(p);g.L_.add(4),await Gl(g),g.q_.set("Unknown"),g.L_.delete(4),await lh(g)})(this))}))})),this.q_=new yP(i,a)}}async function lh(r){if(ta(r))for(const e of r.B_)await e(!0)}async function Gl(r){for(const e of r.B_)await e(!1)}function Xf(r,e){const t=he(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),T_(t)?E_(t):Kl(t).r_()&&v_(t,e))}function Dl(r,e){const t=he(r),i=Kl(t);t.N_.delete(e),i.r_()&&AS(t,e),t.N_.size===0&&(i.r_()?i.o_():ta(t)&&t.q_.set("Unknown"))}function v_(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Kl(r).A_(e)}function AS(r,e){r.Q_.xe(e),Kl(r).R_(e)}function E_(r){r.Q_=new pV({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Kl(r).start(),r.q_.v_()}function T_(r){return ta(r)&&!Kl(r).n_()&&r.N_.size>0}function ta(r){return he(r).L_.size===0}function SS(r){r.Q_=void 0}async function vP(r){r.q_.set("Online")}async function EP(r){r.N_.forEach(((e,t)=>{v_(r,e)}))}async function TP(r,e){SS(r),T_(r)?(r.q_.M_(e),E_(r)):r.q_.set("Unknown")}async function bP(r,e,t){if(r.q_.set("Online"),e instanceof GA&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.N_.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.N_.delete(f),a.Q_.removeTarget(f))})(r,e)}catch(i){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Sf(r,i)}else if(e instanceof af?r.Q_.Ke(e):e instanceof FA?r.Q_.He(e):r.Q_.We(e),!t.isEqual(ve.min()))try{const i=await yS(r.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Q_.rt(c);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.N_.get(g);v&&l.N_.set(g,v.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,g)=>{const v=l.N_.get(p);if(!v)return;l.N_.set(p,v.withResumeToken(At.EMPTY_BYTE_STRING,v.snapshotVersion)),AS(l,p);const T=new xr(v.target,p,g,v.sequenceNumber);v_(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){ne("RemoteStore","Failed to raise snapshot:",i),await Sf(r,i)}}async function Sf(r,e,t){if(!Zs(e))throw e;r.L_.add(1),await Gl(r),r.q_.set("Offline"),t||(t=()=>yS(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await lh(r)}))}function RS(r,e){return e().catch((t=>Sf(r,t,e)))}async function Hl(r){const e=he(r),t=Qs(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wP(e);)try{const a=await oP(e.localStore,i);if(a===null){e.O_.length===0&&t.o_();break}i=a.batchId,IP(e,a)}catch(a){await Sf(e,a)}xS(e)&&CS(e)}function wP(r){return ta(r)&&r.O_.length<10}function IP(r,e){r.O_.push(e);const t=Qs(r);t.r_()&&t.V_&&t.m_(e.mutations)}function xS(r){return ta(r)&&!Qs(r).n_()&&r.O_.length>0}function CS(r){Qs(r).start()}async function AP(r){Qs(r).p_()}async function SP(r){const e=Qs(r);for(const t of r.O_)e.m_(t.mutations)}async function RP(r,e,t){const i=r.O_.shift(),a=a_.from(i,e,t);await RS(r,(()=>r.remoteSyncer.applySuccessfulWrite(a))),await Hl(r)}async function xP(r,e){e&&Qs(r).V_&&await(async function(i,a){if((function(c){return jA(c)&&c!==H.ABORTED})(a.code)){const l=i.O_.shift();Qs(i).s_(),await RS(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Hl(i)}})(r,e),xS(r)&&CS(r)}async function tw(r,e){const t=he(r);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const i=ta(t);t.L_.add(3),await Gl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await lh(t)}async function dy(r,e){const t=he(r);e?(t.L_.delete(2),await lh(t)):e||(t.L_.add(2),await Gl(t),t.q_.set("Unknown"))}function Kl(r){return r.K_||(r.K_=(function(t,i,a){const l=he(t);return l.w_(),new mP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Eo:vP.bind(null,r),Ro:EP.bind(null,r),mo:TP.bind(null,r),d_:bP.bind(null,r)}),r.B_.push((async e=>{e?(r.K_.s_(),T_(r)?E_(r):r.q_.set("Unknown")):(await r.K_.stop(),SS(r))}))),r.K_}function Qs(r){return r.U_||(r.U_=(function(t,i,a){const l=he(t);return l.w_(),new pP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AP.bind(null,r),mo:xP.bind(null,r),f_:SP.bind(null,r),g_:RP.bind(null,r)}),r.B_.push((async e=>{e?(r.U_.s_(),await Hl(r)):(await r.U_.stop(),r.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))}))),r.U_}/**
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
 */class b_{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,f=new b_(e,t,c,a,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ql(r,e){if(Dt("AsyncQueue",`${e}: ${r}`),Zs(r))return new te(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class _l{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ue.comparator(t.key,i.key):(t,i)=>ue.comparator(t.key,i.key),this.keyedMap=hc(),this.sortedSet=new at(this.comparator)}static emptySet(e){return new _l(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _l)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new _l;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class nw{constructor(){this.W_=new at(ue.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):de():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class kl{constructor(e,t,i,a,l,c,f,p,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new kl(e,t,_l.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
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
 */class CP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class NP{constructor(){this.queries=iw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const a=he(t),l=a.queries;a.queries=iw(),l.forEach(((c,f)=>{for(const p of f.j_)p.onError(i)}))})(this,new te(H.ABORTED,"Firestore shutting down"))}}function iw(){return new ea((r=>SA(r)),nh)}async function w_(r,e){const t=he(r);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.H_()&&e.J_()&&(i=2):(l=new CP,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(a,!0);break;case 1:l.z_=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=Ql(c,`Initialization of query '${ll(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&A_(t)}async function I_(r,e){const t=he(r),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?a=e.J_()?0:1:!l.H_()&&e.J_()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function DP(r,e){const t=he(r);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.j_)f.X_(a)&&(i=!0);c.z_=a}}i&&A_(t)}function kP(r,e,t){const i=he(r),a=i.queries.get(e);if(a)for(const l of a.j_)l.onError(t);i.queries.delete(e)}function A_(r){r.Y_.forEach((e=>{e.next()}))}var fy,rw;(rw=fy||(fy={})).ea="default",rw.Cache="cache";class S_{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new kl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fy.Cache}}/**
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
 */class OP{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class sw{constructor(e){this.serializer=e}Es(e){return Qi(this.serializer,e)}ds(e){return e.metadata.exists?XA(this.serializer,e.document,!1):ct.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return kt(e)}}class VP{constructor(e,t,i){this.ca=e,this.localStore=t,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=NS(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const i=ze.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,i=new sw(this.serializer);for(const a of e)if(a.metadata.queries){const l=i.Es(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Ne()).add(l);t.set(c,f)}}return t}async complete(){const e=await lP(this.localStore,new sw(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const i of this.queries)await uP(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function NS(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class DS{constructor(e){this.key=e}}class kS{constructor(e){this.key=e}}class OS{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ne(),this.mutatedKeys=Ne(),this.Aa=xA(e),this.Ra=new _l(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new nw,a=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const w=a.get(v),D=ih(this.query,T)?T:null,F=!!w&&this.mutatedKeys.has(w.key),$=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let Z=!1;w&&D?w.data.isEqual(D.data)?F!==$&&(i.track({type:3,doc:D}),Z=!0):this.ga(w,D)||(i.track({type:2,doc:D}),Z=!0,(p&&this.Aa(D,p)>0||g&&this.Aa(D,g)<0)&&(f=!0)):!w&&D?(i.track({type:0,doc:D}),Z=!0):w&&!D&&(i.track({type:1,doc:w}),Z=!0,(p||g)&&(f=!0)),Z&&(D?(c=c.add(D),l=$?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ra:c,fa:i,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort(((v,T)=>(function(D,F){const $=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return $(D)-$(F)})(v.type,T.type)||this.Aa(v.doc,T.doc))),this.pa(i),a=a!=null&&a;const f=t&&!a?this.ya():[],p=this.da.size===0&&this.current&&!a?1:0,g=p!==this.Ea;return this.Ea=p,c.length!==0||g?{snapshot:new kl(this.query,e.Ra,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new nw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ne(),this.Ra.forEach((i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))}));const t=[];return e.forEach((i=>{this.da.has(i)||t.push(new kS(i))})),this.da.forEach((i=>{e.has(i)||t.push(new DS(i))})),t}ba(e){this.Ta=e.Ts,this.da=Ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return kl.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class MP{constructor(e){this.key=e,this.va=!1}}class LP{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new ea((f=>SA(f)),nh),this.Ma=new Map,this.xa=new Set,this.Oa=new at(ue.comparator),this.Na=new Map,this.La=new f_,this.Ba={},this.ka=new Map,this.qa=io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UP(r,e,t=!0){const i=Wf(r);let a;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Da()):a=await VS(i,e,t,!0),a}async function zP(r,e){const t=Wf(r);await VS(t,e,!0,!1)}async function VS(r,e,t,i){const a=await Cl(r.localStore,Cn(e)),l=a.targetId,c=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await R_(r,e,l,c==="current",a.resumeToken)),r.isPrimaryClient&&t&&Xf(r.remoteStore,a),f}async function R_(r,e,t,i,a){r.Ka=(T,w,D)=>(async function($,Z,se,ce){let ae=Z.view.ma(se);ae.ns&&(ae=await wf($.localStore,Z.query,!1).then((({documents:R})=>Z.view.ma(R,ae))));const ge=ce&&ce.targetChanges.get(Z.targetId),Ae=ce&&ce.targetMismatches.get(Z.targetId)!=null,X=Z.view.applyChanges(ae,$.isPrimaryClient,ge,Ae);return my($,Z.targetId,X.wa),X.snapshot})(r,T,w,D);const l=await wf(r.localStore,e,!0),c=new OS(e,l.Ts),f=c.ma(l.documents),p=ah.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",a),g=c.applyChanges(f,r.isPrimaryClient,p);my(r,t,g.wa);const v=new PP(e,t,c);return r.Fa.set(e,v),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),g.snapshot}async function jP(r,e,t){const i=he(r),a=i.Fa.get(e),l=i.Ma.get(a.targetId);if(l.length>1)return i.Ma.set(a.targetId,l.filter((c=>!nh(c,e)))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await Nl(i.localStore,a.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(a.targetId),t&&Dl(i.remoteStore,a.targetId),Ol(i,a.targetId)})).catch(Js)):(Ol(i,a.targetId),await Nl(i.localStore,a.targetId,!0))}async function BP(r,e){const t=he(r),i=t.Fa.get(e),a=t.Ma.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Dl(t.remoteStore,i.targetId))}async function qP(r,e,t){const i=D_(r);try{const a=await(function(c,f){const p=he(c),g=pt.now(),v=f.reduce(((D,F)=>D.add(F.key)),Ne());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let F=qn(),$=Ne();return p.cs.getEntries(D,v).next((Z=>{F=Z,F.forEach(((se,ce)=>{ce.isValidDocument()||($=$.add(se))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,F))).next((Z=>{T=Z;const se=[];for(const ce of f){const ae=dV(ce,T.get(ce.key).overlayedDocument);ae!=null&&se.push(new Ur(ce.key,ae,yA(ae.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,se,f)})).next((Z=>{w=Z;const se=Z.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(D,Z.batchId,se)}))})).then((()=>({batchId:w.batchId,changes:NA(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),(function(c,f,p){let g=c.Ba[c.currentUser.toKey()];g||(g=new at(Re)),g=g.insert(f,p),c.Ba[c.currentUser.toKey()]=g})(i,a.batchId,t),await zr(i,a.changes),await Hl(i.remoteStore)}catch(a){const l=Ql(a,"Failed to persist write");t.reject(l)}}async function PS(r,e){const t=he(r);try{const i=await aP(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Na.get(l);c&&(ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.va=!0:a.modifiedDocuments.size>0?ye(c.va):a.removedDocuments.size>0&&(ye(c.va),c.va=!1))})),await zr(t,i,e)}catch(i){await Js(i)}}function aw(r,e,t){const i=he(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.Fa.forEach(((l,c)=>{const f=c.view.Z_(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const p=he(c);p.onlineState=f;let g=!1;p.queries.forEach(((v,T)=>{for(const w of T.j_)w.Z_(f)&&(g=!0)})),g&&A_(p)})(i.eventManager,e),a.length&&i.Ca.d_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function FP(r,e,t){const i=he(r);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Na.get(e),l=a&&a.key;if(l){let c=new at(ue.comparator);c=c.insert(l,ct.newNoDocument(l,ve.min()));const f=Ne().add(l),p=new sh(ve.min(),new Map,new at(Re),c,f);await PS(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),N_(i)}else await Nl(i.localStore,e,!1).then((()=>Ol(i,e,t))).catch(Js)}async function GP(r,e){const t=he(r),i=e.batch.batchId;try{const a=await sP(t.localStore,e);C_(t,i,null),x_(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await zr(t,a)}catch(a){await Js(a)}}async function HP(r,e,t){const i=he(r);try{const a=await(function(c,f){const p=he(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,f).next((T=>(ye(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(i.localStore,e);C_(i,e,t),x_(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await zr(i,a)}catch(a){await Js(a)}}async function KP(r,e){const t=he(r);ta(t.remoteStore)||ne("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await(function(c){const f=he(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(p=>f.mutationQueue.getHighestUnacknowledgedBatchId(p)))})(t.localStore);if(i===-1)return void e.resolve();const a=t.ka.get(i)||[];a.push(e),t.ka.set(i,a)}catch(i){const a=Ql(i,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function x_(r,e){(r.ka.get(e)||[]).forEach((t=>{t.resolve()})),r.ka.delete(e)}function C_(r,e,t){const i=he(r);let a=i.Ba[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Ba[i.currentUser.toKey()]=a}}function Ol(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Ma.get(e))r.Fa.delete(i),t&&r.Ca.$a(i,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach((i=>{r.La.containsKey(i)||MS(r,i)}))}function MS(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Dl(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),N_(r))}function my(r,e,t){for(const i of t)i instanceof DS?(r.La.addReference(i.key,e),QP(r,i)):i instanceof kS?(ne("SyncEngine","Document no longer in limbo: "+i.key),r.La.removeReference(i.key,e),r.La.containsKey(i.key)||MS(r,i.key)):de()}function QP(r,e){const t=e.key,i=t.path.canonicalString();r.Oa.get(t)||r.xa.has(i)||(ne("SyncEngine","New document in limbo: "+t),r.xa.add(i),N_(r))}function N_(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new ue(ze.fromString(e)),i=r.qa.next();r.Na.set(i,new MP(t)),r.Oa=r.Oa.insert(t,i),Xf(r.remoteStore,new xr(Cn(Bl(t.path)),i,"TargetPurposeLimboResolution",jn.oe))}}async function zr(r,e,t){const i=he(r),a=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach(((f,p)=>{c.push(i.Ka(p,e,t).then((g=>{var v;if((g||t)&&i.isPrimaryClient){const T=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=g_.Wi(p.targetId,g);l.push(T)}})))})),await Promise.all(c),i.Ca.d_(a),await(async function(p,g){const v=he(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>B.forEach(g,(w=>B.forEach(w.$i,(D=>v.persistence.referenceDelegate.addReference(T,w.targetId,D))).next((()=>B.forEach(w.Ui,(D=>v.persistence.referenceDelegate.removeReference(T,w.targetId,D)))))))))}catch(T){if(!Zs(T))throw T;ne("LocalStore","Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const D=v.os.get(w),F=D.snapshotVersion,$=D.withLastLimboFreeSnapshotVersion(F);v.os=v.os.insert(w,$)}}})(i.localStore,l))}async function YP(r,e){const t=he(r);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const i=await gS(t.localStore,e);t.currentUser=e,(function(l,c){l.ka.forEach((f=>{f.forEach((p=>{p.reject(new te(H.CANCELLED,c))}))})),l.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await zr(t,i.hs)}}function $P(r,e){const t=he(r),i=t.Na.get(e);if(i&&i.va)return Ne().add(i.key);{let a=Ne();const l=t.Ma.get(e);if(!l)return a;for(const c of l){const f=t.Fa.get(c);a=a.unionWith(f.view.Va)}return a}}async function XP(r,e){const t=he(r),i=await wf(t.localStore,e.query,!0),a=e.view.ba(i);return t.isPrimaryClient&&my(t,e.targetId,a.wa),a}async function WP(r,e){const t=he(r);return ES(t.localStore,e).then((i=>zr(t,i)))}async function JP(r,e,t,i){const a=he(r),l=await(function(f,p){const g=he(f),v=he(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>v.Mn(T,p).next((w=>w?g.localDocuments.getDocuments(T,w):B.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await Hl(a.remoteStore):t==="acknowledged"||t==="rejected"?(C_(a,e,i||null),x_(a,e),(function(f,p){he(he(f).mutationQueue).On(p)})(a.localStore,e)):de(),await zr(a,l)):ne("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ZP(r,e){const t=he(r);if(Wf(t),D_(t),e===!0&&t.Qa!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),a=await ow(t,i.toArray());t.Qa=!0,await dy(t.remoteStore,!0);for(const l of a)Xf(t.remoteStore,l)}else if(e===!1&&t.Qa!==!1){const i=[];let a=Promise.resolve();t.Ma.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?i.push(c):a=a.then((()=>(Ol(t,c),Nl(t.localStore,c,!0)))),Dl(t.remoteStore,c)})),await a,await ow(t,i),(function(c){const f=he(c);f.Na.forEach(((p,g)=>{Dl(f.remoteStore,g)})),f.La.pr(),f.Na=new Map,f.Oa=new at(ue.comparator)})(t),t.Qa=!1,await dy(t.remoteStore,!1)}}async function ow(r,e,t){const i=he(r),a=[],l=[];for(const c of e){let f;const p=i.Ma.get(c);if(p&&p.length!==0){f=await Cl(i.localStore,Cn(p[0]));for(const g of p){const v=i.Fa.get(g),T=await XP(i,v);T.snapshot&&l.push(T.snapshot)}}else{const g=await vS(i.localStore,c);f=await Cl(i.localStore,g),await R_(i,LS(g),c,!1,f.resumeToken)}a.push(f)}return i.Ca.d_(l),a}function LS(r){return AA(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function eM(r){return(function(t){return he(he(t).persistence).Qi()})(he(r).localStore)}async function tM(r,e,t,i){const a=he(r);if(a.Qa)return void ne("SyncEngine","Ignoring unexpected query state notification.");const l=a.Ma.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await ES(a.localStore,RA(l[0])),f=sh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",At.EMPTY_BYTE_STRING);await zr(a,c,f);break}case"rejected":await Nl(a.localStore,e,!0),Ol(a,e,i);break;default:de()}}async function nM(r,e,t){const i=Wf(r);if(i.Qa){for(const a of e){if(i.Ma.has(a)&&i.sharedClientState.isActiveQueryTarget(a)){ne("SyncEngine","Adding an already active target "+a);continue}const l=await vS(i.localStore,a),c=await Cl(i.localStore,l);await R_(i,LS(l),c.targetId,!1,c.resumeToken),Xf(i.remoteStore,c)}for(const a of t)i.Ma.has(a)&&await Nl(i.localStore,a,!1).then((()=>{Dl(i.remoteStore,a),Ol(i,a)})).catch(Js)}}function Wf(r){const e=he(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=PS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FP.bind(null,e),e.Ca.d_=DP.bind(null,e.eventManager),e.Ca.$a=kP.bind(null,e.eventManager),e}function D_(r){const e=he(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}function iM(r,e,t){const i=he(r);(async function(l,c,f){try{const p=await c.getMetadata();if(await(function(D,F){const $=he(D),Z=kt(F.createTime);return $.persistence.runTransaction("hasNewerBundle","readonly",(se=>$.Gr.getBundleMetadata(se,F.id))).then((se=>!!se&&se.createTime.compareTo(Z)>=0))})(l.localStore,p))return await c.close(),f._completeWith((function(D){return{taskState:"Success",documentsLoaded:D.totalDocuments,bytesLoaded:D.totalBytes,totalDocuments:D.totalDocuments,totalBytes:D.totalBytes}})(p)),Promise.resolve(new Set);f._updateProgress(NS(p));const g=new VP(p,l.localStore,c.serializer);let v=await c.Ua();for(;v;){const w=await g.la(v);w&&f._updateProgress(w),v=await c.Ua()}const T=await g.complete();return await zr(l,T.Ia,void 0),await(function(D,F){const $=he(D);return $.persistence.runTransaction("Save bundle","readwrite",(Z=>$.Gr.saveBundleMetadata(Z,F)))})(l.localStore,p),f._completeWith(T.progress),Promise.resolve(T.Pa)}catch(p){return Xi("SyncEngine",`Loading bundle failed with ${p}`),f._failWith(p),Promise.resolve(new Set)}})(i,e,t).then((a=>{i.sharedClientState.notifyBundleLoaded(a)}))}class Bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return pS(this.persistence,new mS,e.initialUser,this.serializer)}Ga(e){return new fS($f.Zr,this.serializer)}Wa(e){return new bS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bc.provider={build:()=>new Bc};class US extends Bc{constructor(e,t,i){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await D_(this.Ja.syncEngine),await Hl(this.Ja.remoteStore),await this.persistence.yi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}za(e){return pS(this.persistence,new mS,e.initialUser,this.serializer)}ja(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new BV(i,e.asyncQueue,t)}Ha(e,t){const i=new bO(t,this.persistence);return new TO(e.asyncQueue,i)}Ga(e){const t=p_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?zn.withCacheSize(this.cacheSizeBytes):zn.DEFAULT;return new m_(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,wS(),of(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new bS}}class rM extends US{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Vg&&(this.sharedClientState.syncEngine={no:JP.bind(null,t),ro:tM.bind(null,t),io:nM.bind(null,t),Qi:eM.bind(null,t),eo:WP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi((async i=>{await ZP(this.Ja.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())}))}Wa(e){const t=wS();if(!Vg.D(t))throw new te(H.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=p_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Vg(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class qc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>aw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=YP.bind(null,this.syncEngine),await dy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new NP})()}createDatastore(e){const t=oh(e.databaseInfo.databaseId),i=(function(l){return new fP(l)})(e.databaseInfo);return(function(l,c,f,p){return new gP(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,a,l,c,f){return new _P(i,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>aw(this.syncEngine,t,0)),(function(){return ew.D()?new ew:new cP})())}createSyncEngine(e,t){return(function(a,l,c,f,p,g,v){const T=new LP(a,l,c,f,p,g);return v&&(T.Qa=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=he(a);ne("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Gl(l),l.k_.shutdown(),l.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qc.provider={build:()=>new qc};function lw(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const i={value:r.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Jf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class sM{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new dn,this.buffer=new Uint8Array,this.eu=(function(){return new TextDecoder("utf-8")})(),this.tu().then((i=>{i&&i.ua()?this.metadata.resolve(i.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.aa)}`))}),(i=>this.metadata.reject(i)))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),i=Number(t);isNaN(i)&&this.ru(`length string (${t}) is not valid number`);const a=await this.iu(i);return new OP(JSON.parse(a),e.length+i)}su(){return this.buffer.findIndex((e=>e===123))}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class aM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=he(a),f={documents:l.map((T=>zc(c.serializer,T)))},p=await c.Lo("BatchGetDocuments",c.serializer.databaseId,ze.emptyPath(),f,l.length),g=new Map;p.forEach((T=>{const w=TV(c.serializer,T);g.set(w.key.toString(),w)}));const v=[];return l.forEach((T=>{const w=g.get(T.toString());ye(!!w),v.push(w)})),v})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Fl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const a=ue.fromPath(i);this.mutations.push(new r_(a,this.precondition(a)))})),await(async function(i,a){const l=he(i),c={writes:a.map((f=>jc(l.serializer,f)))};await l.Mo("Commit",l.serializer.databaseId,ze.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw de();t=ve.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new te(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ve.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ve.min()))throw new te(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class oM{constructor(e,t,i,a,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=a,this.deferred=l,this._u=i.maxAttempts,this.t_=new __(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go((async()=>{const e=new aM(this.datastore),t=this.cu(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((a=>{this.lu(a)}))))})).catch((i=>{this.lu(i)}))}))}cu(e){try{const t=this.updateFunction(e);return!eh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget((()=>(this.uu(),Promise.resolve())))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!jA(t)}return!1}}/**
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
 */class lM{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=Jt.UNAUTHENTICATED,this.clientId=tA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ne("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ne("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ql(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Mg(r,e){r.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async a=>{i.isEqual(a)||(await gS(e.localStore,a),i=a)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function uw(r,e){r.asyncQueue.verifyOperationInProgress();const t=await k_(r);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>tw(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,a)=>tw(e.remoteStore,a))),r._onlineComponents=e}async function k_(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mg(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===H.FAILED_PRECONDITION||a.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;Xi("Error using user provided cache. Falling back to memory cache: "+t),await Mg(r,new Bc)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Mg(r,new Bc);return r._offlineComponents}async function Zf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await uw(r,r._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await uw(r,new qc))),r._onlineComponents}function zS(r){return k_(r).then((e=>e.persistence))}function O_(r){return k_(r).then((e=>e.localStore))}function jS(r){return Zf(r).then((e=>e.remoteStore))}function V_(r){return Zf(r).then((e=>e.syncEngine))}function uM(r){return Zf(r).then((e=>e.datastore))}async function Vl(r){const e=await Zf(r),t=e.eventManager;return t.onListen=UP.bind(null,e.syncEngine),t.onUnlisten=jP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BP.bind(null,e.syncEngine),t}function cM(r){return r.asyncQueue.enqueue((async()=>{const e=await zS(r),t=await jS(r);return e.setNetworkEnabled(!0),(function(a){const l=he(a);return l.L_.delete(0),lh(l)})(t)}))}function hM(r){return r.asyncQueue.enqueue((async()=>{const e=await zS(r),t=await jS(r);return e.setNetworkEnabled(!1),(async function(a){const l=he(a);l.L_.add(0),await Gl(l),l.q_.set("Offline")})(t)}))}function dM(r,e){const t=new dn;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,v){const T=he(g);return T.persistence.runTransaction("read document","readonly",(w=>T.localDocuments.getDocument(w,v)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new te(H.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const p=Ql(f,`Failed to get document '${l} from cache`);c.reject(p)}})(await O_(r),e,t))),t.promise}function BS(r,e,t={}){const i=new dn;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Jf({next:w=>{v.Za(),c.enqueueAndForget((()=>I_(l,T)));const D=w.docs.has(f);!D&&w.fromCache?g.reject(new te(H.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&p&&p.source==="server"?g.reject(new te(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new S_(Bl(f.path),v,{includeMetadataChanges:!0,_a:!0});return w_(l,T)})(await Vl(r),r.asyncQueue,e,t,i))),i.promise}function fM(r,e){const t=new dn;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await wf(a,l,!0),p=new OS(l,f.Ts),g=p.ma(f.documents),v=p.applyChanges(g,!1);c.resolve(v.snapshot)}catch(f){const p=Ql(f,`Failed to execute query '${l} against cache`);c.reject(p)}})(await O_(r),e,t))),t.promise}function qS(r,e,t={}){const i=new dn;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Jf({next:w=>{v.Za(),c.enqueueAndForget((()=>I_(l,T))),w.fromCache&&p.source==="server"?g.reject(new te(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new S_(f,v,{includeMetadataChanges:!0,_a:!0});return w_(l,T)})(await Vl(r),r.asyncQueue,e,t,i))),i.promise}function mM(r,e){const t=new Jf(e);return r.asyncQueue.enqueueAndForget((async()=>(function(a,l){he(a).Y_.add(l),l.next()})(await Vl(r),t))),()=>{t.Za(),r.asyncQueue.enqueueAndForget((async()=>(function(a,l){he(a).Y_.delete(l)})(await Vl(r),t)))}}function pM(r,e,t,i){const a=(function(c,f){let p;return p=typeof c=="string"?qA().encode(c):c,(function(v,T){return new sM(v,T)})((function(v,T){if(v instanceof Uint8Array)return lw(v,T);if(v instanceof ArrayBuffer)return lw(new Uint8Array(v),T);if(v instanceof ReadableStream)return v.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(p),f)})(t,oh(e));r.asyncQueue.enqueueAndForget((async()=>{iM(await V_(r),a,i)}))}function gM(r,e){return r.asyncQueue.enqueue((async()=>(function(i,a){const l=he(i);return l.persistence.runTransaction("Get named query","readonly",(c=>l.Gr.getNamedQuery(c,a)))})(await O_(r),e)))}/**
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
 */function FS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const cw=new Map;/**
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
 */function P_(r,e,t){if(!t)throw new te(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function GS(r,e,t,i){if(e===!0&&i===!0)throw new te(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function hw(r){if(!ue.isDocumentKey(r))throw new te(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function dw(r){if(ue.isDocumentKey(r))throw new te(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function em(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":de()}function Ye(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=em(r);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function HS(r,e){if(e<=0)throw new te(H.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */class fw{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FS((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,a){return i.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uh{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fw(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new cO;switch(i.type){case"firstParty":return new mO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=cw.get(t);i&&(ne("ComponentProvider","Removing Datastore"),cw.delete(t),i.terminate())})(this),Promise.resolve()}}function yM(r,e,t,i={}){var a;const l=(r=Ye(r,uh))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=Jt.MOCK_USER;else{f=Rx(i.mockUserToken,(a=r._app)===null||a===void 0?void 0:a.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Jt(g)}r._authCredentials=new hO(new eA(f,p))}}/**
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
 */let Nn=class KS{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new KS(this.firestore,e,this._query)}},yt=class QS{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new QS(this.firestore,e,this._key)}},Us=class YS extends Nn{constructor(e,t,i){super(e,t,Bl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new ue(e))}withConverter(e){return new YS(this.firestore,e,this._path)}};function $S(r,e,...t){if(r=be(r),P_("collection","path",e),r instanceof uh){const i=ze.fromString(e,...t);return dw(i),new Us(r,null,i)}{if(!(r instanceof yt||r instanceof Us))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(ze.fromString(e,...t));return dw(i),new Us(r.firestore,null,i)}}function _M(r,e){if(r=Ye(r,uh),P_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nn(r,null,(function(i){return new Lr(ze.emptyPath(),i)})(e))}function Rf(r,e,...t){if(r=be(r),arguments.length===1&&(e=tA.newId()),P_("doc","path",e),r instanceof uh){const i=ze.fromString(e,...t);return hw(i),new yt(r,null,new ue(i))}{if(!(r instanceof yt||r instanceof Us))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(ze.fromString(e,...t));return hw(i),new yt(r.firestore,r instanceof Us?r.converter:null,new ue(i))}}function XS(r,e){return r=be(r),e=be(e),(r instanceof yt||r instanceof Us)&&(e instanceof yt||e instanceof Us)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function WS(r,e){return r=be(r),e=be(e),r instanceof Nn&&e instanceof Nn&&r.firestore===e.firestore&&nh(r._query,e._query)&&r.converter===e.converter}/**
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
 */class mw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new __(this,"async_queue_retry"),this.Vu=()=>{const i=of();i&&ne("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=of();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=of();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new dn;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zs(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((i=>{this.Eu=i,this.du=!1;const a=(function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f})(i);throw Dt("INTERNAL UNHANDLED ERROR: ",a),i})).then((i=>(this.du=!1,i))))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const a=b_.createAndSchedule(this,e,t,i,(l=>this.yu(l)));return this.Tu.push(a),a}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function py(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1})(r,["next","error","complete"])}class vM{constructor(){this._progressObserver={},this._taskCompletionResolver=new dn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const EM=-1;let Ot=class extends uh{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new mw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mw(e),this._firestoreClient=void 0,await e}}};function _n(r){if(r._terminated)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||JS(r),r._firestoreClient}function JS(r){var e,t,i;const a=r._freezeSettings(),l=(function(f,p,g,v){return new GO(f,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,FS(v.experimentalLongPollingOptions),v.useFetchStreams)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,a);r._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),r._firestoreClient=new lM(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(r._componentsProvider))}function TM(r,e){Xi("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return ZS(r,qc.provider,{build:i=>new US(i,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function bM(r){Xi("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();ZS(r,qc.provider,{build:t=>new rM(t,e.cacheSizeBytes)})}function ZS(r,e,t){if((r=Ye(r,Ot))._firestoreClient||r._terminated)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new te(H.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},JS(r)}function wM(r){if(r._initialized&&!r._terminated)throw new te(H.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new dn;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(i){if(!Ki.D())return Promise.resolve();const a=i+"main";await Ki.delete(a)})(p_(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function IM(r){return(function(t){const i=new dn;return t.asyncQueue.enqueueAndForget((async()=>KP(await V_(t),i))),i.promise})(_n(r=Ye(r,Ot)))}function AM(r){return cM(_n(r=Ye(r,Ot)))}function SM(r){return hM(_n(r=Ye(r,Ot)))}function RM(r,e){const t=_n(r=Ye(r,Ot)),i=new vM;return pM(t,r._databaseId,e,i),i}function xM(r,e){return gM(_n(r=Ye(r,Ot)),e).then((t=>t?new Nn(r,null,t.query):null))}/**
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
 */class Ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ji(At.fromBase64String(e))}catch(t){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ji(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Ys=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let lo=class{constructor(e){this._methodName=e}};/**
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
 */class tm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class M_{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0})(this._values,e._values)}}/**
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
 */const CM=/^__.*__$/;class NM{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new ql(e,this.data,t,this.fieldTransforms)}}class e1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function t1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class nm{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Fu({path:i,xu:!1});return a.Ou(e),a}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Fu({path:i,xu:!1});return a.vu(),a}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xf(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(t1(this.Cu)&&CM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class DM{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||oh(e)}Qu(e,t,i,a=!1){return new nm({Cu:e,methodName:t,qu:i,path:ft.emptyPath(),xu:!1,ku:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uo(r){const e=r._freezeSettings(),t=oh(r._databaseId);return new DM(r._databaseId,!!e.ignoreUndefinedProperties,t)}function im(r,e,t,i,a,l={}){const c=r.Qu(l.merge||l.mergeFields?2:0,e,t,a);F_("Data must be an object, but it was:",c,i);const f=r1(i,c);let p,g;if(l.merge)p=new Bn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=gy(e,T,t);if(!c.contains(w))throw new te(H.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);a1(v,w)||v.push(w)}p=new Bn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new NM(new hn(f),p,g)}class ch extends lo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}function n1(r,e,t){return new nm({Cu:3,qu:e.settings.qu,methodName:r._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class L_ extends lo{_toFieldTransform(e){return new rh(e.path,new Sl)}isEqual(e){return e instanceof L_}}class U_ extends lo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=n1(this,e,!0),i=this.Ku.map((l=>co(l,t))),a=new Za(i);return new rh(e.path,a)}isEqual(e){return e instanceof U_&&Ic(this.Ku,e.Ku)}}class z_ extends lo{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=n1(this,e,!0),i=this.Ku.map((l=>co(l,t))),a=new eo(i);return new rh(e.path,a)}isEqual(e){return e instanceof z_&&Ic(this.Ku,e.Ku)}}class j_ extends lo{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Rl(e.serializer,OA(e.serializer,this.$u));return new rh(e.path,t)}isEqual(e){return e instanceof j_&&this.$u===e.$u}}function B_(r,e,t,i){const a=r.Qu(1,e,t);F_("Data must be an object, but it was:",a,i);const l=[],c=hn.empty();oo(i,((p,g)=>{const v=G_(e,p,t);g=be(g);const T=a.Nu(v);if(g instanceof ch)l.push(v);else{const w=co(g,T);w!=null&&(l.push(v),c.set(v,w))}}));const f=new Bn(l);return new e1(c,f,a.fieldTransforms)}function q_(r,e,t,i,a,l){const c=r.Qu(1,e,t),f=[gy(e,i,t)],p=[a];if(l.length%2!=0)throw new te(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)f.push(gy(e,l[w])),p.push(l[w+1]);const g=[],v=hn.empty();for(let w=f.length-1;w>=0;--w)if(!a1(g,f[w])){const D=f[w];let F=p[w];F=be(F);const $=c.Nu(D);if(F instanceof ch)g.push(D);else{const Z=co(F,$);Z!=null&&(g.push(D),v.set(D,Z))}}const T=new Bn(g);return new e1(v,T,c.fieldTransforms)}function i1(r,e,t,i=!1){return co(t,r.Qu(i?4:3,e))}function co(r,e){if(s1(r=be(r)))return F_("Unsupported field value:",e,r),r1(r,e);if(r instanceof lo)return(function(i,a){if(!t1(a.Cu))throw a.Bu(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(i,a){const l=[];let c=0;for(const f of i){let p=co(f,a.Lu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(r,e)}return(function(i,a){if((i=be(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return OA(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=pt.fromDate(i);return{timestampValue:xl(a.serializer,l)}}if(i instanceof pt){const l=new pt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xl(a.serializer,l)}}if(i instanceof tm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ji)return{bytesValue:HA(a.serializer,i._byteString)};if(i instanceof yt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:u_(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof M_)return(function(c,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map((p=>{if(typeof p!="number")throw f.Bu("VectorValues must only contain numeric values.");return i_(f.serializer,p)}))}}}}}})(i,a);throw a.Bu(`Unsupported field value: ${em(i)}`)})(r,e)}function r1(r,e){const t={};return fA(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oo(r,((i,a)=>{const l=co(a,e.Mu(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function s1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pt||r instanceof tm||r instanceof Ji||r instanceof yt||r instanceof lo||r instanceof M_)}function F_(r,e,t){if(!s1(t)||!(function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)})(t)){const i=em(t);throw i==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+i)}}function gy(r,e,t){if((e=be(e))instanceof Ys)return e._internalPath;if(typeof e=="string")return G_(r,e);throw xf("Field path arguments must be of type string or ",r,!1,void 0,t)}const kM=new RegExp("[~\\*/\\[\\]]");function G_(r,e,t){if(e.search(kM)>=0)throw xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Ys(...e.split("."))._internalPath}catch{throw xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function xf(r,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new te(H.INVALID_ARGUMENT,f+r+p)}function a1(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class Fc{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OM extends Fc{data(){return super.data()}}function rm(r,e){return typeof e=="string"?G_(r,e):e instanceof Ys?e._internalPath:e._delegate._internalPath}/**
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
 */function o1(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H_{}class hh extends H_{}function Ds(r,e,...t){let i=[];e instanceof H_&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof K_)).length,f=l.filter((p=>p instanceof sm)).length;if(c>1||c>0&&f>0)throw new te(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const a of i)r=a._apply(r);return r}class sm extends hh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new sm(e,t,i)}_apply(e){const t=this._parse(e);return u1(e._query,t),new Nn(e.firestore,e.converter,iy(e._query,t))}_parse(e){const t=uo(e.firestore);return(function(l,c,f,p,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new te(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){gw(T,v);const D=[];for(const F of T)D.push(pw(p,l,F));w={arrayValue:{values:D}}}else w=pw(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||gw(T,v),w=i1(f,c,T,v==="in"||v==="not-in");return je.create(g,v,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function VM(r,e,t){const i=e,a=rm("where",r);return sm._create(a,i,t)}class K_ extends H_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new K_(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const p of f)u1(c,p),c=iy(c,p)})(e._query,t),new Nn(e.firestore,e.converter,iy(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Q_ extends hh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Q_(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new te(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Uc(l,c)})(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Lr(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function PM(r,e="asc"){const t=e,i=rm("orderBy",r);return Q_._create(i,t)}class am extends hh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new am(e,t,i)}_apply(e){return new Nn(e.firestore,e.converter,vf(e._query,this._limit,this._limitType))}}function MM(r){return HS("limit",r),am._create("limit",r,"F")}function LM(r){return HS("limitToLast",r),am._create("limitToLast",r,"L")}class om extends hh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new om(e,t,i)}_apply(e){const t=l1(e,this.type,this._docOrFields,this._inclusive);return new Nn(e.firestore,e.converter,(function(a,l){return new Lr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function UM(...r){return om._create("startAt",r,!0)}function zM(...r){return om._create("startAfter",r,!1)}class lm extends hh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new lm(e,t,i)}_apply(e){const t=l1(e,this.type,this._docOrFields,this._inclusive);return new Nn(e.firestore,e.converter,(function(a,l){return new Lr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function jM(...r){return lm._create("endBefore",r,!1)}function BM(...r){return lm._create("endAt",r,!0)}function l1(r,e,t,i){if(t[0]=be(t[0]),t[0]instanceof Fc)return(function(l,c,f,p,g){if(!p)throw new te(H.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const v=[];for(const T of yl(l))if(T.field.isKeyField())v.push(Wa(c,p.key));else{const w=p.data.field(T.field);if(Ff(w))throw new te(H.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const D=T.field.canonicalString();throw new te(H.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${D}' (used as the orderBy) does not exist.`)}v.push(w)}return new Ks(v,g)})(r._query,r.firestore._databaseId,e,t[0]._document,i);{const a=uo(r.firestore);return(function(c,f,p,g,v,T){const w=c.explicitOrderBy;if(v.length>w.length)throw new te(H.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const D=[];for(let F=0;F<v.length;F++){const $=v[F];if(w[F].field.isKeyField()){if(typeof $!="string")throw new te(H.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof $}`);if(!t_(c)&&$.indexOf("/")!==-1)throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${$}' contains a slash.`);const Z=c.path.child(ze.fromString($));if(!ue.isDocumentKey(Z))throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${Z}' is not because it contains an odd number of segments.`);const se=new ue(Z);D.push(Wa(f,se))}else{const Z=i1(p,g,$);D.push(Z)}}return new Ks(D,T)})(r._query,r.firestore._databaseId,a,e,t,i)}}function pw(r,e,t){if(typeof(t=be(t))=="string"){if(t==="")throw new te(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t_(e)&&t.indexOf("/")!==-1)throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ze.fromString(t));if(!ue.isDocumentKey(i))throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Wa(r,new ue(i))}if(t instanceof yt)return Wa(r,t._key);throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${em(t)}.`)}function gw(r,e){if(!Array.isArray(r)||r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function u1(r,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Y_{convertValue(e,t="none"){switch(Xa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return oo(e,((a,l)=>{i[a]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map((c=>dt(c.doubleValue)));return new M_(l)}convertGeoPoint(e){return new tm(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Zy(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Pc(e));default:return null}}convertTimestamp(e){const t=Or(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ze.fromString(e);ye(nS(i));const a=new Gs(i.get(1),i.get(3)),l=new ue(i.popFirst(5));return a.isEqual(t)||Dt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function um(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class qM extends Y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}/**
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
 */class qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Vr=class extends Fc{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(rm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},bc=class extends Vr{data(e={}){return super.data(e)}},$s=class{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new qa(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new bc(this._firestore,this._userDataWriter,i.key,i,new qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const p=new bc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new qa(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new bc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new qa(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:FM(f.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function FM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}function c1(r,e){return r instanceof Vr&&e instanceof Vr?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof $s&&e instanceof $s&&r._firestore===e._firestore&&WS(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function GM(r){r=Ye(r,yt);const e=Ye(r.firestore,Ot);return BS(_n(e),r._key).then((t=>$_(e,r,t)))}class ho extends Y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function HM(r){r=Ye(r,yt);const e=Ye(r.firestore,Ot),t=_n(e),i=new ho(e);return dM(t,r._key).then((a=>new Vr(e,i,r._key,a,new qa(a!==null&&a.hasLocalMutations,!0),r.converter)))}function KM(r){r=Ye(r,yt);const e=Ye(r.firestore,Ot);return BS(_n(e),r._key,{source:"server"}).then((t=>$_(e,r,t)))}function QM(r){r=Ye(r,Nn);const e=Ye(r.firestore,Ot),t=_n(e),i=new ho(e);return o1(r._query),qS(t,r._query).then((a=>new $s(e,i,r,a)))}function YM(r){r=Ye(r,Nn);const e=Ye(r.firestore,Ot),t=_n(e),i=new ho(e);return fM(t,r._query).then((a=>new $s(e,i,r,a)))}function $M(r){r=Ye(r,Nn);const e=Ye(r.firestore,Ot),t=_n(e),i=new ho(e);return qS(t,r._query,{source:"server"}).then((a=>new $s(e,i,r,a)))}function yw(r,e,t){r=Ye(r,yt);const i=Ye(r.firestore,Ot),a=um(r.converter,e,t);return dh(i,[im(uo(i),"setDoc",r._key,a,r.converter!==null,t).toMutation(r._key,mt.none())])}function _w(r,e,t,...i){r=Ye(r,yt);const a=Ye(r.firestore,Ot),l=uo(a);let c;return c=typeof(e=be(e))=="string"||e instanceof Ys?q_(l,"updateDoc",r._key,e,t,i):B_(l,"updateDoc",r._key,e),dh(a,[c.toMutation(r._key,mt.exists(!0))])}function XM(r){return dh(Ye(r.firestore,Ot),[new Fl(r._key,mt.none())])}function WM(r,e){const t=Ye(r.firestore,Ot),i=Rf(r),a=um(r.converter,e);return dh(t,[im(uo(r.firestore),"addDoc",i._key,a,r.converter!==null,{}).toMutation(i._key,mt.exists(!1))]).then((()=>i))}function h1(r,...e){var t,i,a;r=be(r);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||py(e[c])||(l=e[c],c++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(py(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let p,g,v;if(r instanceof yt)g=Ye(r.firestore,Ot),v=Bl(r._key.path),p={next:T=>{e[c]&&e[c]($_(g,r,T))},error:e[c+1],complete:e[c+2]};else{const T=Ye(r,Nn);g=Ye(T.firestore,Ot),v=T._query;const w=new ho(g);p={next:D=>{e[c]&&e[c](new $s(g,w,T,D))},error:e[c+1],complete:e[c+2]},o1(r._query)}return(function(w,D,F,$){const Z=new Jf($),se=new S_(D,Z,F);return w.asyncQueue.enqueueAndForget((async()=>w_(await Vl(w),se))),()=>{Z.Za(),w.asyncQueue.enqueueAndForget((async()=>I_(await Vl(w),se)))}})(_n(g),v,f,p)}function JM(r,e){return mM(_n(r=Ye(r,Ot)),py(e)?e:{next:e})}function dh(r,e){return(function(i,a){const l=new dn;return i.asyncQueue.enqueueAndForget((async()=>qP(await V_(i),a,l))),l.promise})(_n(r),e)}function $_(r,e,t){const i=t.docs.get(e._key),a=new ho(r);return new Vr(r,a,e._key,i,new qa(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const ZM={maxAttempts:5};/**
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
 */let e4=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uo(e)}set(e,t,i){this._verifyNotCommitted();const a=Os(e,this._firestore),l=um(a.converter,t,i),c=im(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,i);return this._mutations.push(c.toMutation(a._key,mt.none())),this}update(e,t,i,...a){this._verifyNotCommitted();const l=Os(e,this._firestore);let c;return c=typeof(t=be(t))=="string"||t instanceof Ys?q_(this._dataReader,"WriteBatch.update",l._key,t,i,a):B_(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Os(e,this._firestore);return this._mutations=this._mutations.concat(new Fl(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Os(r,e){if((r=be(r)).firestore!==e)throw new te(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 *//**
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
 */let t4=class extends class{constructor(t,i){this._firestore=t,this._transaction=i,this._dataReader=uo(t)}get(t){const i=Os(t,this._firestore),a=new qM(this._firestore);return this._transaction.lookup([i._key]).then((l=>{if(!l||l.length!==1)return de();const c=l[0];if(c.isFoundDocument())return new Fc(this._firestore,a,c.key,c,i.converter);if(c.isNoDocument())return new Fc(this._firestore,a,i._key,null,i.converter);throw de()}))}set(t,i,a){const l=Os(t,this._firestore),c=um(l.converter,i,a),f=im(this._dataReader,"Transaction.set",l._key,c,l.converter!==null,a);return this._transaction.set(l._key,f),this}update(t,i,a,...l){const c=Os(t,this._firestore);let f;return f=typeof(i=be(i))=="string"||i instanceof Ys?q_(this._dataReader,"Transaction.update",c._key,i,a,l):B_(this._dataReader,"Transaction.update",c._key,i),this._transaction.update(c._key,f),this}delete(t){const i=Os(t,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Os(e,this._firestore),i=new ho(this._firestore);return super.get(e).then((a=>new Vr(this._firestore,i,t._key,a._document,new qa(!1,!1),t.converter)))}};function n4(r,e,t){r=Ye(r,Ot);const i=Object.assign(Object.assign({},ZM),t);return(function(l){if(l.maxAttempts<1)throw new te(H.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i),(function(l,c,f){const p=new dn;return l.asyncQueue.enqueueAndForget((async()=>{const g=await uM(l);new oM(l.asyncQueue,g,f,c,p).au()})),p.promise})(_n(r),(a=>e(new t4(r,a))),i)}/**
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
 */function i4(){return new ch("deleteField")}function r4(){return new L_("serverTimestamp")}function s4(...r){return new U_("arrayUnion",r)}function a4(...r){return new z_("arrayRemove",r)}function o4(r){return new j_("increment",r)}(function(e,t=!0){(function(a){jl=a})(Xs),Bs(new Yi("firestore",((i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Ot(new dO(i.getProvider("auth-internal")),new gO(i.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(g.options.projectId,v)})(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),wi(ob,"4.7.3",e),wi(ob,"4.7.3","esm2017")})();const l4="@firebase/firestore-compat",u4="0.3.38";/**
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
 */function X_(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function vw(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function Ew(){if(!qO())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Gc{constructor(e){this._delegate=e}static fromBase64String(e){return Ew(),new Gc(Ji.fromBase64String(e))}static fromUint8Array(e){return vw(),new Gc(Ji.fromUint8Array(e))}toBase64(){return Ew(),this._delegate.toBase64()}toUint8Array(){return vw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function yy(r){return c4(r,["next","error","complete"])}function c4(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
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
 */class h4{enableIndexedDbPersistence(e,t){return TM(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return bM(e._delegate)}clearIndexedDbPersistence(e){return wM(e._delegate)}}class d1{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Gs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Xi("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){yM(this._delegate,e,t,i)}enableNetwork(){return AM(this._delegate)}disableNetwork(){return SM(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,GS("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return IM(this._delegate)}onSnapshotsInSync(e){return JM(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Pl(this,$S(this._delegate,e))}catch(t){throw Sn(t,"collection()","Firestore.collection()")}}doc(e){try{return new fi(this,Rf(this._delegate,e))}catch(t){throw Sn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new An(this,_M(this._delegate,e))}catch(t){throw Sn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return n4(this._delegate,t=>e(new f1(this,t)))}batch(){return _n(this._delegate),new m1(new e4(this._delegate,e=>dh(this._delegate,e)))}loadBundle(e){return RM(this._delegate,e)}namedQuery(e){return xM(this._delegate,e).then(t=>t?new An(this,t):null)}}class cm extends Y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gc(new Ji(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return fi.forKey(t,this.firestore,null)}}function d4(r){lO(r)}class f1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new cm(e)}get(e){const t=Fa(e);return this._delegate.get(t).then(i=>new Hc(this._firestore,new Vr(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const a=Fa(e);return i?(X_("Transaction.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=Fa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=Fa(e);return this._delegate.delete(t),this}}class m1{constructor(e){this._delegate=e}set(e,t,i){const a=Fa(e);return i?(X_("WriteBatch.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=Fa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=Fa(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ro{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new bc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Kc(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=ro.INSTANCES;let a=i.get(e);a||(a=new WeakMap,i.set(e,a));let l=a.get(t);return l||(l=new ro(e,new cm(e),t),a.set(t,l)),l}}ro.INSTANCES=new WeakMap;class fi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cm(e)}static forPath(e,t,i){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new fi(t,new yt(t._delegate,i,new ue(e)))}static forKey(e,t,i){return new fi(t,new yt(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new Pl(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Pl(this.firestore,$S(this._delegate,e))}catch(t){throw Sn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=be(e),e instanceof yt?XS(this._delegate,e):!1}set(e,t){t=X_("DocumentReference.set",t);try{return t?yw(this._delegate,e,t):yw(this._delegate,e)}catch(i){throw Sn(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?_w(this._delegate,e):_w(this._delegate,e,t,...i)}catch(a){throw Sn(a,"updateDoc()","DocumentReference.update()")}}delete(){return XM(this._delegate)}onSnapshot(...e){const t=p1(e),i=g1(e,a=>new Hc(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return h1(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=HM(this._delegate):(e==null?void 0:e.source)==="server"?t=KM(this._delegate):t=GM(this._delegate),t.then(i=>new Hc(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new fi(this.firestore,e?this._delegate.withConverter(ro.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Sn(r,e,t){return r.message=r.message.replace(e,t),r}function p1(r){for(const e of r)if(typeof e=="object"&&!yy(e))return e;return{}}function g1(r,e){var t,i;let a;return yy(r[0])?a=r[0]:yy(r[1])?a=r[1]:typeof r[0]=="function"?a={next:r[0],error:r[1],complete:r[2]}:a={next:r[1],error:r[2],complete:r[3]},{next:l=>{a.next&&a.next(e(l))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(i=a.complete)===null||i===void 0?void 0:i.bind(a)}}class Hc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new fi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return c1(this._delegate,e._delegate)}}class Kc extends Hc{data(e){const t=this._delegate.data(e);return this._delegate._converter||uO(t!==void 0),t}}class An{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cm(e)}where(e,t,i){try{return new An(this.firestore,Ds(this._delegate,VM(e,t,i)))}catch(a){throw Sn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new An(this.firestore,Ds(this._delegate,PM(e,t)))}catch(i){throw Sn(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new An(this.firestore,Ds(this._delegate,MM(e)))}catch(t){throw Sn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new An(this.firestore,Ds(this._delegate,LM(e)))}catch(t){throw Sn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new An(this.firestore,Ds(this._delegate,UM(...e)))}catch(t){throw Sn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new An(this.firestore,Ds(this._delegate,zM(...e)))}catch(t){throw Sn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new An(this.firestore,Ds(this._delegate,jM(...e)))}catch(t){throw Sn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new An(this.firestore,Ds(this._delegate,BM(...e)))}catch(t){throw Sn(t,"endAt()","Query.endAt()")}}isEqual(e){return WS(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=YM(this._delegate):(e==null?void 0:e.source)==="server"?t=$M(this._delegate):t=QM(this._delegate),t.then(i=>new _y(this.firestore,new $s(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=p1(e),i=g1(e,a=>new _y(this.firestore,new $s(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return h1(this._delegate,t,i)}withConverter(e){return new An(this.firestore,e?this._delegate.withConverter(ro.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class f4{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Kc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class _y{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new An(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Kc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new f4(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new Kc(this._firestore,i))})}isEqual(e){return c1(this._delegate,e._delegate)}}class Pl extends An{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new fi(this.firestore,e):null}doc(e){try{return e===void 0?new fi(this.firestore,Rf(this._delegate)):new fi(this.firestore,Rf(this._delegate,e))}catch(t){throw Sn(t,"doc()","CollectionReference.doc()")}}add(e){return WM(this._delegate,e).then(t=>new fi(this.firestore,t))}isEqual(e){return XS(this._delegate,e._delegate)}withConverter(e){return new Pl(this.firestore,e?this._delegate.withConverter(ro.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fa(r){return Ye(r,yt)}/**
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
 */class W_{constructor(...e){this._delegate=new Ys(...e)}static documentId(){return new W_(ft.keyField().canonicalString())}isEqual(e){return e=be(e),e instanceof Ys?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ja{constructor(e){this._delegate=e}static serverTimestamp(){const e=r4();return e._methodName="FieldValue.serverTimestamp",new ja(e)}static delete(){const e=i4();return e._methodName="FieldValue.delete",new ja(e)}static arrayUnion(...e){const t=s4(...e);return t._methodName="FieldValue.arrayUnion",new ja(t)}static arrayRemove(...e){const t=a4(...e);return t._methodName="FieldValue.arrayRemove",new ja(t)}static increment(e){const t=o4(e);return t._methodName="FieldValue.increment",new ja(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const m4={Firestore:d1,GeoPoint:tm,Timestamp:pt,Blob:Gc,Transaction:f1,WriteBatch:m1,DocumentReference:fi,DocumentSnapshot:Hc,Query:An,QueryDocumentSnapshot:Kc,QuerySnapshot:_y,CollectionReference:Pl,FieldPath:W_,FieldValue:ja,setLogLevel:d4,CACHE_SIZE_UNLIMITED:EM};function p4(r,e){r.INTERNAL.registerComponent(new Yi("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(i,a)},"PUBLIC").setServiceProps(Object.assign({},m4)))}/**
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
 */function g4(r){p4(r,(e,t)=>new d1(e,t,new h4)),r.registerVersion(l4,u4)}g4(Ls);const y4={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},y1=Ls.apps.length?Ls.app():Ls.initializeApp(y4),Nr=y1.firestore(),J_=y1.auth(),_1=()=>{const[r,e]=pe.useState([]),[t,i]=pe.useState(!0),[a,l]=pe.useState(null);return pe.useEffect(()=>Nr.collection("initiatives").orderBy("year","desc").onSnapshot(f=>{const p=f.docs.map(g=>({...g.data(),id:g.id}));e(p),i(!1)},f=>{console.error(f),l("Lỗi kết nối dữ liệu."),i(!1)}),[]),{initiatives:r,loading:t,error:a}};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v1=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=pe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:a="",children:l,iconNode:c,...f},p)=>pe.createElement("svg",{ref:p,...v4,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:v1("lucide",a),...f},[...c.map(([g,v])=>pe.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(r,e)=>{const t=pe.forwardRef(({className:i,...a},l)=>pe.createElement(E4,{ref:l,iconNode:e,className:v1(`lucide-${_4(r)}`,i),...a}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=xe("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=xe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=xe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=xe("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=xe("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=xe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=xe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=xe("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=xe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=xe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=xe("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=xe("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=xe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=xe("FilePenLine",[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=xe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=xe("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=xe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=xe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=xe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=xe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=xe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=xe("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=xe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=xe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=xe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=xe("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=xe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=xe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=xe("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=xe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=xe("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=xe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=xe("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=xe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=xe("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=xe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=xe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=xe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=xe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=xe("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),W4={red:{primary:"bg-orange-600",hover:"hover:bg-orange-700",text:"text-orange-600",border:"border-orange-200",gradient:"from-orange-500 to-red-600",accent:"bg-orange-50",shadow:"shadow-orange-600/20"},blue:{primary:"bg-blue-600",hover:"hover:bg-blue-700",text:"text-blue-600",border:"border-blue-200",gradient:"from-blue-500 to-indigo-600",accent:"bg-blue-50",shadow:"shadow-blue-600/20"},emerald:{primary:"bg-emerald-600",hover:"hover:bg-emerald-700",text:"text-emerald-600",border:"border-emerald-200",gradient:"from-emerald-500 to-teal-600",accent:"bg-emerald-50",shadow:"shadow-emerald-600/20"},indigo:{primary:"bg-indigo-600",hover:"hover:bg-indigo-700",text:"text-indigo-600",border:"border-indigo-200",gradient:"from-indigo-500 to-purple-600",accent:"bg-indigo-50",shadow:"shadow-indigo-600/20"}},J4={HLH:1,NPSC:2,NPC:3,EVN:4},A1=pe.createContext(void 0),Z4=({children:r})=>{const[e,t]=pe.useState(null),[i,a]=pe.useState(null),[l,c]=pe.useState("list"),[f,p]=pe.useState("red"),[g,v]=pe.useState(()=>localStorage.getItem("theme")==="dark"),[T,w]=pe.useState("Company"),[D,F]=pe.useState(J4);pe.useEffect(()=>J_.onAuthStateChanged(async ce=>{if(console.log("Auth State Changed:",ce==null?void 0:ce.email),t(ce),ce)try{const ae=await Nr.collection("users").doc(ce.uid).get();if(ae.exists)a(ae.data());else{const ge={uid:ce.uid,email:ce.email||"",role:"user"};a(ge)}}catch(ae){console.error("Error loading user profile:",ae),a({uid:ce.uid,email:ce.email||"",role:"user"})}else a(null)}),[]),pe.useEffect(()=>{localStorage.setItem("theme",g?"dark":"light"),document.documentElement.classList.toggle("dark",g)},[g]),pe.useEffect(()=>{(async()=>{var ce,ae;try{const ge=await Nr.collection("settings").doc("global_config").get();ge.exists&&((ce=ge.data())!=null&&ce.pointConfig)&&F((ae=ge.data())==null?void 0:ae.pointConfig)}catch(ge){console.error("Error fetching point config:",ge)}})()},[]);const $=async se=>{try{return await Nr.collection("settings").doc("global_config").set({pointConfig:se},{merge:!0}),F(se),!0}catch(ce){return console.error("Error saving point config:",ce),alert("Lỗi khi lưu cấu hình: "+ce.message),!1}},Z={user:e,userProfile:i,activeTab:l,setActiveTab:c,theme:f,setTheme:p,activeTheme:W4[f],isDarkMode:g,setIsDarkMode:v,currentScope:T,setCurrentScope:w,pointConfig:D,setPointConfig:F,savePointConfig:$};return A.jsx(A1.Provider,{value:Z,children:r})},Yl=()=>{const r=pe.useContext(A1);if(!r)throw new Error("useApp must be used within AppProvider");return r},eL=["red","blue","emerald","indigo"],tL=({activeTab:r,setActiveTab:e,isDarkMode:t,setIsDarkMode:i,activeTheme:a,setTheme:l,user:c,onLogout:f,onLogin:p,onAdd:g,onBatch:v,onSecurity:T,currentScope:w,setCurrentScope:D})=>{var Z;const{userProfile:F}=Yl(),$=se=>A.jsxs("button",{onClick:()=>e(se.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${r===se.id?`${a.primary} text-white shadow-lg`:"text-slate-400 hover:bg-slate-800 hover:text-white"}`,children:[A.jsx(se.icon,{size:16})," ",se.label]},se.id);return A.jsxs("aside",{className:"w-full lg:w-72 bg-slate-950 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-5 z-[60] shadow-2xl border-r border-slate-900",children:[A.jsx("div",{className:"flex items-center justify-between mb-6 px-2",children:A.jsxs("div",{onClick:c?void 0:p,className:"flex items-center gap-3 group cursor-pointer",children:[A.jsx("div",{className:`bg-gradient-to-br ${a.gradient} p-2.5 rounded-xl shadow-lg shadow-orange-600/20`,children:A.jsx(w4,{size:24})}),A.jsxs("div",{children:[A.jsx("h1",{className:"font-extrabold text-xl tracking-tighter",children:"NPC-Innovation"}),A.jsx("p",{className:"text-[9px] text-slate-500 font-bold uppercase tracking-widest",children:"Trung tâm đổi mới"})]})]})}),A.jsxs("div",{className:"mb-6 bg-slate-900 p-1.5 rounded-2xl flex border border-slate-800 relative",children:[A.jsxs("button",{onClick:()=>D("Company"),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all z-10 ${w==="Company"?"bg-white text-slate-900 shadow-md":"text-slate-500 hover:text-slate-300"}`,children:[A.jsx(Z_,{size:12})," Nội bộ"]}),A.jsxs("button",{onClick:()=>D("NPC"),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all z-10 ${w==="NPC"?"bg-indigo-500 text-white shadow-md":"text-slate-500 hover:text-slate-300"}`,children:[A.jsx(k4,{size:12})," Toàn NPC"]})]}),c&&A.jsxs("div",{className:"mb-8 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:`w-9 h-9 rounded-xl ${a.primary} flex items-center justify-center font-black text-white text-sm shadow-md`,children:(Z=c.email)==null?void 0:Z.charAt(0).toUpperCase()}),A.jsxs("div",{className:"flex-1 overflow-hidden",children:[A.jsx("p",{className:"text-[10px] font-black truncate text-slate-200",children:c.email}),A.jsx("p",{className:"text-[8px] font-bold text-slate-500 uppercase",children:(F==null?void 0:F.role)==="admin"?"Administrator":"Member"})]}),A.jsx("button",{onClick:f,className:"p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors",children:A.jsx(B4,{size:14})})]}),A.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between",children:[A.jsx("div",{className:"flex gap-2",children:eL.map(se=>A.jsx("button",{onClick:()=>l(se),className:`w-3.5 h-3.5 rounded-full border border-white/10 transition-transform hover:scale-125 ${se==="red"?"bg-orange-600":se==="blue"?"bg-blue-600":se==="emerald"?"bg-emerald-600":"bg-indigo-600"}`},se))}),A.jsx("button",{onClick:()=>i(!t),className:"p-2 text-slate-500 hover:text-white transition-colors",children:t?A.jsx(Y4,{size:14}):A.jsx(F4,{size:14})})]})]}),A.jsxs("nav",{className:"flex-1 space-y-6 overflow-y-auto custom-scrollbar pr-1",children:[A.jsx("div",{className:"space-y-3",children:A.jsx("div",{className:"p-2 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 shadow-inner",children:$({id:"register",label:"Đăng ký SK",icon:N4})})}),c&&A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"flex items-center gap-2 px-2",children:[A.jsx(ww,{size:12,className:"text-emerald-500"}),A.jsx("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Kiểm duyệt"})]}),A.jsx("div",{className:"p-2 rounded-2xl bg-emerald-900/10 border border-emerald-900/30 space-y-1",children:$({id:"approvals",label:"Duyệt bài",icon:ww})})]}),A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"flex items-center gap-2 px-2",children:[A.jsx(Aw,{size:12,className:"text-orange-500"}),A.jsx("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Quản lý KHCN"})]}),A.jsx("div",{className:"p-2 rounded-2xl bg-slate-900/40 border border-slate-800/60 shadow-inner",children:$({id:"research",label:"Nghiên cứu KHCN",icon:Aw})})]}),A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"flex items-center gap-2 px-2",children:[A.jsx($4,{size:12,className:w==="NPC"?"text-indigo-500":"text-amber-500"}),A.jsx("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:w==="NPC"?"Hệ thống Toàn NPC":"Hệ thống Nội bộ"})]}),A.jsx("div",{className:"p-2 rounded-2xl bg-slate-900/40 border border-slate-800/60 shadow-inner space-y-1",children:[{id:"list",label:"Danh mục",icon:M4},{id:"bubble",label:"Bản đồ bóng",icon:C4},{id:"treemap",label:"Bản đồ nhiệt",icon:L4},{id:"stats",label:"Thống kê",icon:A4},{id:"references",label:"Tài liệu hồ sơ",icon:T4},{id:"chat",label:"Trợ lý AI",icon:b4}].filter(se=>w==="NPC"?se.id!=="bubble":!0).map($)})]})]}),A.jsxs("div",{className:"mt-auto pt-6 border-t border-slate-900 space-y-3",children:[c&&A.jsxs(A.Fragment,{children:[A.jsxs("button",{onClick:g,className:"w-full flex items-center justify-center gap-2 bg-white text-slate-900 py-3.5 rounded-xl font-black text-xs hover:bg-slate-100 shadow-xl transition-all active:scale-95 uppercase tracking-widest",children:[A.jsx(H4,{size:16})," Thêm hồ sơ mới"]}),A.jsxs("button",{onClick:v,className:`w-full flex items-center justify-center gap-2 ${a.primary} text-white py-3.5 rounded-xl font-black text-xs shadow-xl transition-all active:scale-95 uppercase tracking-widest`,children:[A.jsx(D4,{size:16})," Nhập PDF (AI)"]})]}),A.jsxs("button",{onClick:T,className:"w-full flex items-center justify-center gap-2 bg-slate-900 text-slate-500 py-3 rounded-xl font-bold text-[10px] hover:text-emerald-500 hover:bg-slate-800 transition-all uppercase tracking-widest border border-slate-800",children:[A.jsx(vy,{size:14})," Bảo mật & Quyền riêng tư"]})]})]})};class S1 extends pe.Component{constructor(){super(...arguments);mg(this,"state",{hasError:!1,error:null});mg(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),window.location.reload()})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,i){console.error("Uncaught error:",t,i)}render(){return this.state.hasError?A.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans",children:A.jsxs("div",{className:"max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-slate-100 animate-slide",children:[A.jsx("div",{className:"w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8",children:A.jsx(x4,{size:48})}),A.jsx("h2",{className:"text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase",children:"Đã có lỗi xảy ra"}),A.jsx("p",{className:"text-slate-500 font-medium mb-10 leading-relaxed",children:"Hệ thống gặp sự cố không mong muốn. Vui lòng thử làm mới trang hoặc liên hệ quản trị viên nếu sự cố tiếp diễn."}),A.jsxs("div",{className:"space-y-4",children:[A.jsxs("button",{onClick:this.handleReset,className:"w-full py-5 bg-orange-600 text-white rounded-2xl font-black shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3 hover:bg-orange-700 transition-all uppercase tracking-widest text-xs",children:[A.jsx(K4,{size:18})," Làm mới ứng dụng"]}),A.jsxs("button",{onClick:()=>window.location.href="/",className:"w-full py-5 bg-slate-100 text-slate-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-200 transition-all uppercase tracking-widest text-xs",children:[A.jsx(O4,{size:18})," Quay lại trang chủ"]})]})]})}):this.props.children}}const R1=pe.createContext(void 0),nL=({children:r})=>{const[e,t]=pe.useState(!1),[i,a]=pe.useState(!1),[l,c]=pe.useState(!1),[f,p]=pe.useState(null),[g,v]=pe.useState(null),[T,w]=pe.useState(null),D={isLoginOpen:e,openLogin:()=>t(!0),closeLogin:()=>t(!1),isBatchOpen:i,openBatch:()=>a(!0),closeBatch:()=>a(!1),isSecurityOpen:l,openSecurity:()=>c(!0),closeSecurity:()=>c(!1),editingInitiative:f,openEditInitiative:F=>p(F||{title:"",authors:[],year:new Date().getFullYear(),level:["HLH"],content:"",unit:[],field:[],driveLink:"",attachmentUrls:[],imageUrls:[],approvalDocUrls:[],isScalable:!1}),closeEditInitiative:()=>p(null),viewingInitiative:g,openViewInitiative:F=>v(F),closeViewInitiative:()=>v(null),editingProject:T,openEditProject:F=>w(F||{title:"",year:new Date().getFullYear(),authors:[],mainMembers:[],experts:[],budget:0,progress:0,settlementStatus:"chua_thanh_toan",status:"dang_thuc_hien",level:"NPSC",content:"",attachmentUrl:""}),closeEditProject:()=>w(null)};return A.jsx(R1.Provider,{value:D,children:r})},fh=()=>{const r=pe.useContext(R1);if(!r)throw new Error("useModal must be used within ModalProvider");return r},iL=()=>{const{isLoginOpen:r,closeLogin:e}=fh(),{activeTheme:t}=Yl(),[i,a]=pe.useState(""),[l,c]=pe.useState(""),[f,p]=pe.useState(""),[g,v]=pe.useState(!1);if(!r)return null;const T=async w=>{w.preventDefault(),p(""),v(!0);try{await J_.signInWithEmailAndPassword(i,l),v(!1),e()}catch(D){console.error("Login Error:",D),v(!1),p("Email hoặc mật khẩu không đúng.")}};return A.jsx("div",{className:"fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in",children:A.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-md p-10 text-center space-y-8 animate-slide",children:[A.jsx("div",{className:`mx-auto ${t.primary} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-xl mb-4`,children:g?A.jsx(T1,{className:"animate-spin",size:36}):A.jsx(j4,{size:36})}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-2xl font-black uppercase tracking-tighter dark:text-white",children:"Đăng nhập Hệ thống"}),A.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1",children:"Sử dụng tài khoản Admin của đơn vị"})]}),A.jsxs("form",{onSubmit:T,className:"space-y-5 text-left",children:[A.jsxs("div",{className:"relative",children:[A.jsx(q4,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:20}),A.jsx("input",{type:"email",placeholder:"Email",required:!0,className:"w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/10",value:i,onChange:w=>a(w.target.value)})]}),A.jsxs("div",{className:"relative",children:[A.jsx(z4,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-400",size:20}),A.jsx("input",{type:"password",placeholder:"Mật khẩu",required:!0,className:"w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/10",value:l,onChange:w=>c(w.target.value)})]}),f&&A.jsx("p",{className:"text-[11px] font-black text-rose-500 text-center bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl",children:f}),A.jsx("button",{disabled:g,className:`w-full py-5 ${t.primary} text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:brightness-110 transition-all disabled:opacity-50`,children:g?"Đang xác thực...":"Đăng nhập"})]}),A.jsx("button",{onClick:e,className:"text-[10px] font-bold text-slate-300 uppercase hover:text-orange-500 transition-colors",children:"Đóng"})]})})},Sw=6e4,rL=20;let ac=[];const sL=()=>{const r=Date.now();if(ac=ac.filter(e=>r-e<Sw),ac.length>=rL)throw new Error(`Hệ thống đang bận. Vui lòng thử lại sau ${Math.ceil((Sw-(r-ac[0]))/1e3)} giây.`);ac.push(r)},na=async(r,e)=>{sL();try{const t=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:r,payload:e})});if(!t.ok){const i=await t.json().catch(()=>({}));throw new Error(i.error||`Lỗi máy chủ (${t.status})`)}return await t.json()}catch(t){throw console.error("AI API Call Error:",t),t}},aL=async r=>await na("generateEmbedding",{text:r}),FL=(r,e)=>{if(!r||!e||r.length!==e.length)return 0;let t=0,i=0,a=0;for(let l=0;l<r.length;l++)t+=r[l]*e[l],i+=r[l]*r[l],a+=e[l]*e[l];return t/(Math.sqrt(i)*Math.sqrt(a))},GL=async(r,e="application/pdf")=>await na("extractInitiativesFromPDF",{base64Data:r,mimeType:e}),HL=async(r,e)=>{const t=e.map(i=>{var a;return{id:i.id,title:i.title,content:(a=i.content)==null?void 0:a.substring(0,100)}});return await na("checkSimilarityBatch",{newItems:r,catalog:t})},KL=async(r,e=!1)=>{const t=new Date,i=`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`;return await na("autoFillRegisterForm",{data:r,isText:e,currentDateStr:i})},QL=async(r,e)=>{const t=e.map(i=>({id:i.id,title:i.title,content:i.content?i.content.substring(0,300):""}));return await na("checkApprovalSimilarity",{newItem:r,catalog:t})},YL=async(r,e)=>{const t=e.map(i=>({id:i.id,title:i.title,content:i.content?i.content.substring(0,200):"",scope:i.scope||"Company"}));return await na("checkPublicSimilarity",{draft:r,catalog:t})},$L=async r=>{try{return await na("validateInitiativeCompliance",{data:r})}catch{return{overallStatus:"warning",score:0,items:[],missingSections:["Lỗi kết nối AI, không thể thẩm định."],suggestion:"Vui lòng thử lại sau."}}},XL=async(r,e)=>await na("chatAssistant",{context:r,input:e}),oL={HLH:"bg-slate-500",NPSC:"bg-red-600",NPC:"bg-orange-600",EVN:"bg-rose-700"},lL=["Thiết bị điện","Thí nghiệm điện","Tư vấn","CNTT","Giải pháp","Hành chính"],uL=()=>{var Ae;const{editingInitiative:r,closeEditInitiative:e}=fh(),{activeTheme:t,currentScope:i}=Yl(),{initiatives:a}=_1(),[l,c]=pe.useState(null),[f,p]=pe.useState(""),[g,v]=pe.useState(""),[T,w]=pe.useState(!1),[D,F]=pe.useState(!1);pe.useEffect(()=>{r&&(c({...r,unit:Array.isArray(r.unit)?r.unit:r.unit?[r.unit]:[],field:Array.isArray(r.field)?r.field:r.field?[r.field]:[],level:r.level||["HLH"],scope:r.scope||i}),p(Array.isArray(r.authors)?r.authors.join(", "):r.authors||""))},[r,i]);const $=pe.useMemo(()=>{const X=new Set;return a.forEach(R=>{(Array.isArray(R.unit)?R.unit:R.unit?[R.unit]:[]).forEach(x=>{x&&typeof x=="string"&&X.add(x.trim())})}),Array.from(X).sort()},[a]);if(!r||!l)return null;const Z=async()=>{if(!l.title)return alert("Vui lòng nhập tên sáng kiến.");F(!0);try{const X={...l,authors:f.split(",").map(S=>S.trim()).filter(S=>S!==""),unit:(l.unit||[]).map(S=>S.trim()).filter(S=>S!==""),field:(l.field||[]).filter(S=>S)};let R=null;try{const S=`${X.title} ${X.content||""}`;R=await aL(S)}catch(S){console.warn(`Could not generate vector for ${X.title}`,S)}R&&(X.embedding_field=R),X.id?await Nr.collection("initiatives").doc(X.id).update(X):(X.createdAt=Date.now(),await Nr.collection("initiatives").add(X)),e()}catch(X){alert("Lỗi khi lưu sáng kiến."),console.error(X)}finally{F(!1)}},se=X=>{const R=X.trim();R&&(c(S=>{const x=S.unit||[];return x.includes(R)?S:{...S,unit:[...x,R]}}),v(""),w(!1))},ce=X=>{c(R=>({...R,unit:R.unit.filter(S=>S!==X)}))},ae=X=>{c(R=>{const S=R.level||[],x=S.includes(X)?S.filter(O=>O!==X):[...S,X];return{...R,level:x}})},ge=X=>{c(R=>{const S=R.field||[],x=S.includes(X)?S.filter(O=>O!==X):[...S,X];return{...R,field:x}})};return A.jsx("div",{className:"fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in",children:A.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-3xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden border-4 border-white dark:border-slate-800",children:[A.jsxs("div",{className:"p-8 border-b dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsxs("h3",{className:"text-2xl font-black uppercase tracking-tighter flex items-center gap-3 dark:text-white",children:[A.jsx(U4,{className:t.text})," Thông tin sáng kiến"]}),A.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-black uppercase ${l.scope==="NPC"?"bg-indigo-100 text-indigo-600":"bg-slate-100 text-slate-500"}`,children:l.scope==="NPC"?"Toàn NPC":"Nội bộ"})]}),A.jsx("button",{onClick:e,className:"p-4 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm text-slate-400",children:A.jsx(Cf,{size:28})})]}),A.jsxs("div",{className:"p-8 lg:p-12 overflow-y-auto flex-1 space-y-8 custom-scrollbar",children:[A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Tên sáng kiến"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20",value:l.title,onChange:X=>c({...l,title:X.target.value})})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch",children:[A.jsxs("div",{className:"md:col-span-4 space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Năm công nhận"}),A.jsx("input",{type:"number",className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20",value:l.year,onChange:X=>c({...l,year:parseInt(X.target.value)})})]}),A.jsxs("div",{className:"md:col-span-8 flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 h-full",children:[A.jsx("div",{className:`p-2.5 rounded-full ${l.isScalable?"bg-emerald-500 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-400"} transition-colors`,children:A.jsx(w1,{size:18})}),A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-xs font-black uppercase text-slate-900 dark:text-white cursor-pointer select-none",htmlFor:"scalable-check",children:"Khả năng nhân rộng"}),A.jsx("p",{className:"text-[9px] text-slate-500 dark:text-slate-400",children:"Đánh dấu nếu có thể áp dụng rộng rãi."})]}),A.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[A.jsx("input",{type:"checkbox",id:"scalable-check",className:"sr-only peer",checked:l.isScalable||!1,onChange:X=>c({...l,isScalable:X.target.checked})}),A.jsx("div",{className:"w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"})]})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Lĩnh vực"}),A.jsx("div",{className:"flex flex-wrap gap-2",children:Array.from(new Set([...lL,...l.field||[]])).map(X=>{var S;const R=(S=l.field)==null?void 0:S.includes(X);return A.jsxs("button",{onClick:()=>ge(X),className:`px-3 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-1.5 ${R?`${t.primary} text-white shadow-md`:"bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700"}`,children:[X," ",R&&A.jsx(bw,{size:12})]},X)})})]}),A.jsxs("div",{className:"space-y-2",children:[A.jsxs("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1",children:[A.jsx(E1,{size:10})," Các cấp công nhận"]}),A.jsx("div",{className:"flex flex-wrap gap-2",children:["HLH","NPSC","NPC","EVN"].map(X=>{var S;const R=(S=l.level)==null?void 0:S.includes(X);return A.jsxs("button",{onClick:()=>ae(X),className:`px-6 py-3 rounded-2xl font-black text-xs uppercase border-2 transition-all flex items-center gap-2 ${R?`${oL[X]} text-white border-transparent shadow-md transform scale-105`:"bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-orange-200"}`,children:[R&&A.jsx(bw,{size:14,strokeWidth:4}),X]},X)})})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsxs("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1",children:[A.jsx(I1,{size:10})," Tác giả"]}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20",value:f,onChange:X=>p(X.target.value),placeholder:"Nguyễn Văn A, Trần Thị B..."})]}),A.jsxs("div",{className:"space-y-2 relative",children:[A.jsxs("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1",children:[A.jsx(Z_,{size:10})," Đơn vị áp dụng"]}),A.jsxs("div",{className:"min-h-[60px] w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-orange-500/20 transition-shadow",children:[(Ae=l.unit)==null?void 0:Ae.map((X,R)=>A.jsxs("div",{className:`${t.primary} text-white px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 animate-in fade-in zoom-in`,children:[A.jsx("span",{children:X}),A.jsx("button",{onClick:()=>ce(X),className:"hover:text-red-200",children:A.jsx(Cf,{size:12})})]},R)),A.jsx("input",{className:"flex-1 bg-transparent border-none outline-none font-bold text-sm min-w-[150px] py-1 dark:text-white",placeholder:l.unit&&l.unit.length>0?"Thêm đơn vị...":"Nhập tên đơn vị...",value:g,onChange:X=>{v(X.target.value),w(!0)},onFocus:()=>w(!0),onKeyDown:X=>{X.key==="Enter"&&(X.preventDefault(),se(g)),X.key==="Backspace"&&!g&&l.unit&&l.unit.length>0&&ce(l.unit[l.unit.length-1])}})]}),T&&g&&A.jsx("div",{className:"absolute z-50 left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl max-h-48 overflow-y-auto custom-scrollbar",children:$.filter(X=>{var R;return X.toLowerCase().includes(g.toLowerCase())&&!((R=l.unit)!=null&&R.includes(X))}).map((X,R)=>A.jsx("button",{onClick:()=>se(X),className:"w-full text-left px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 transition-colors",children:X},R))}),T&&A.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>w(!1)})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Nội dung tóm tắt"}),A.jsx("textarea",{rows:6,className:"w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] font-bold resize-none dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20",value:l.content,onChange:X=>c({...l,content:X.target.value})})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Link Drive (Nếu có)"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20",value:l.driveLink||"",onChange:X=>c({...l,driveLink:X.target.value}),placeholder:"https://drive.google.com/..."})]})]}),A.jsxs("div",{className:"p-8 border-t dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900",children:[A.jsx("button",{onClick:e,className:"flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all",children:"Hủy bỏ"}),A.jsxs("button",{onClick:Z,disabled:D,className:`flex-[2] py-4 ${t.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px] flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50`,children:[D?A.jsx(T1,{className:"animate-spin",size:18}):A.jsx(b1,{size:18}),D?"Đang tạo Vector & Lưu...":"Lưu thông tin"]})]})]})})},cL={HLH:"bg-slate-500",NPSC:"bg-red-600",NPC:"bg-orange-600",EVN:"bg-rose-700"},hL=()=>{var f,p;const{viewingInitiative:r,closeViewInitiative:e}=fh(),{activeTheme:t}=Yl(),[i,a]=pe.useState(-1);if(!r)return null;const l=(g,v)=>{g.stopPropagation(),a(T=>T<v-1?T+1:T)},c=g=>{g.stopPropagation(),a(v=>v>0?v-1:v)};return A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"fixed inset-0 z-[1050] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in",children:A.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-4 border-white dark:border-slate-800",children:[A.jsxs("div",{className:"p-8 border-b dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50",children:[A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx("div",{className:`${t.primary} p-4 rounded-2xl text-white shadow-lg`,children:A.jsx(P4,{size:24})}),A.jsx("h3",{className:"text-2xl font-black uppercase tracking-tighter dark:text-white",children:"Chi tiết sáng kiến"})]}),A.jsx("button",{onClick:e,className:"p-4 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm text-slate-400",children:A.jsx(Cf,{size:28})})]}),A.jsxs("div",{className:"flex-1 overflow-y-auto p-8 lg:p-12 space-y-8 custom-scrollbar",children:[A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex flex-wrap gap-2",children:[A.jsxs("span",{className:"flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest",children:[A.jsx(I4,{size:14})," Năm ",r.year]}),(f=r.level)==null?void 0:f.map(g=>A.jsxs("span",{className:`flex items-center gap-2 ${cL[g]||"bg-slate-500"} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest`,children:[A.jsx(E1,{size:14})," ",g]},g)),r.scope==="NPC"&&A.jsxs("span",{className:"flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest",children:[A.jsx(vy,{size:14})," Hệ thống NPC"]}),r.isScalable&&A.jsxs("span",{className:"flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest animate-pulse",children:[A.jsx(w1,{size:14})," Nhân rộng"]}),Array.isArray(r.field)?r.field.map(g=>A.jsxs("span",{className:"flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest",children:[A.jsx(Tw,{size:14})," ",g]},g)):r.field&&A.jsxs("span",{className:"flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest",children:[A.jsx(Tw,{size:14})," ",r.field]})]}),A.jsx("h1",{className:"text-3xl font-black text-slate-900 dark:text-white uppercase leading-tight tracking-tight",children:r.title})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800",children:[A.jsx("div",{className:"space-y-4",children:A.jsxs("div",{className:"space-y-1",children:[A.jsxs("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[A.jsx(I1,{size:12})," Tác giả"]}),A.jsx("p",{className:"text-base font-bold text-slate-800 dark:text-white",children:Array.isArray(r.authors)?r.authors.join(", "):r.authors})]})}),A.jsx("div",{className:"space-y-4",children:A.jsxs("div",{className:"space-y-1",children:[A.jsxs("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[A.jsx(Z_,{size:12})," Đơn vị áp dụng"]}),A.jsx("p",{className:"text-base font-bold text-slate-800 dark:text-white",children:Array.isArray(r.unit)?r.unit.join(", "):r.unit})]})})]}),r.approvalDocUrls&&r.approvalDocUrls.length>0&&A.jsxs("div",{className:"p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-[2rem] border border-amber-200 dark:border-amber-800 space-y-4 shadow-sm",children:[A.jsxs("h4",{className:"flex items-center gap-2 text-xs font-black uppercase text-amber-600 dark:text-amber-500 tracking-widest",children:[A.jsx(Q4,{size:16})," Hồ sơ pháp lý / Phê duyệt"]}),A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:r.approvalDocUrls.map((g,v)=>A.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-5 py-4 bg-white dark:bg-slate-900 border border-amber-100 dark:border-amber-800 rounded-2xl hover:border-amber-300 transition-all group shadow-sm",children:[A.jsx(vy,{size:20,className:"text-amber-500 group-hover:scale-110 transition-transform"}),A.jsxs("span",{className:"text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-600",children:["Quyết định / Chứng nhận ",v+1]}),A.jsx(Lg,{size:14,className:"ml-auto text-slate-300 group-hover:text-amber-400"})]},v))})]}),A.jsxs("div",{className:"space-y-4",children:[A.jsxs("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b dark:border-slate-800 pb-2",children:[A.jsx(Iw,{size:14})," Nội dung giải pháp"]}),A.jsx("div",{className:"text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap",children:r.content})]}),r.imageUrls&&r.imageUrls.length>0&&A.jsxs("div",{className:"space-y-4",children:[A.jsxs("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b dark:border-slate-800 pb-2",children:[A.jsx(V4,{size:14})," Hình ảnh minh họa"]}),A.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:r.imageUrls.map((g,v)=>A.jsxs("div",{className:"aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:scale-105 transition-transform relative group",onClick:()=>a(v),children:[A.jsx("img",{src:g,alt:`Minh họa ${v+1}`,className:"w-full h-full object-cover"}),A.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center",children:A.jsx(X4,{className:"text-white opacity-0 group-hover:opacity-100 transition-opacity",size:24})})]},v))})]}),(r.attachmentUrls&&r.attachmentUrls.length>0||r.driveLink)&&A.jsxs("div",{className:"space-y-4",children:[A.jsxs("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b dark:border-slate-800 pb-2",children:[A.jsx(G4,{size:14})," Tài liệu thuyết minh"]}),A.jsxs("div",{className:"flex flex-wrap gap-3",children:[(p=r.attachmentUrls)==null?void 0:p.map((g,v)=>A.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group",children:[A.jsx(Iw,{size:18,className:"text-slate-400 group-hover:text-blue-500"}),A.jsxs("span",{className:"text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600",children:["Tài liệu ",v+1]}),A.jsx(Lg,{size:12,className:"text-slate-300 group-hover:text-blue-400"})]},v)),r.driveLink&&A.jsxs("a",{href:r.driveLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-5 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl hover:bg-blue-100 transition-all",children:[A.jsx(Lg,{size:18,className:"text-blue-500"}),A.jsx("span",{className:"text-xs font-bold text-blue-600",children:"Link Drive gốc"})]})]})]})]})]})}),i>=0&&r.imageUrls&&r.imageUrls.length>0&&A.jsxs("div",{className:"fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300",onClick:()=>a(-1),children:[A.jsx("button",{className:"absolute top-6 right-6 p-3 bg-white/10 text-white hover:bg-white/20 hover:text-red-400 rounded-full transition-all z-50",onClick:()=>a(-1),children:A.jsx(Cf,{size:32,strokeWidth:2.5})}),i>0&&A.jsx("button",{className:"absolute left-4 lg:left-10 p-4 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all z-50",onClick:g=>c(g),children:A.jsx(S4,{size:40})}),A.jsxs("div",{className:"relative max-w-full max-h-full flex flex-col items-center",children:[A.jsx("img",{src:r.imageUrls[i],alt:`Full Preview ${i+1}`,className:"max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-90 duration-300",onClick:g=>g.stopPropagation()}),A.jsxs("p",{className:"mt-4 text-white/70 font-bold uppercase tracking-widest text-sm",children:[i+1," / ",r.imageUrls.length]})]}),i<r.imageUrls.length-1&&A.jsx("button",{className:"absolute right-4 lg:right-10 p-4 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all z-50",onClick:g=>l(g,r.imageUrls.length),children:A.jsx(R4,{size:40})})]})]})},dL=()=>{const{editingProject:r,closeEditProject:e}=fh(),{activeTheme:t}=Yl(),[i,a]=pe.useState(null),[l,c]=pe.useState(""),[f,p]=pe.useState(""),[g,v]=pe.useState("");if(pe.useEffect(()=>{var w,D,F;r&&(a(r),c(((w=r.authors)==null?void 0:w.join(", "))||""),p(((D=r.mainMembers)==null?void 0:D.join(", "))||""),v(((F=r.experts)==null?void 0:F.join(", "))||""))},[r]),!r||!i)return null;const T=async()=>{if(!i.title)return alert("Vui lòng nhập tên đề tài.");const w={...i,authors:l.split(",").map(D=>D.trim()).filter(D=>D!==""),mainMembers:f.split(",").map(D=>D.trim()).filter(D=>D!==""),experts:g.split(",").map(D=>D.trim()).filter(D=>D!=="")};try{w.id?await Nr.collection("research_projects").doc(w.id).update(w):await Nr.collection("research_projects").add(w),e()}catch{alert("Lỗi khi lưu đề tài.")}};return A.jsx("div",{className:"fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in",children:A.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-3xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden border-4 border-white dark:border-slate-800",children:[A.jsxs("div",{className:"p-8 lg:p-12 overflow-y-auto flex-1 space-y-6 custom-scrollbar",children:[A.jsx("h3",{className:"text-2xl font-black uppercase dark:text-white",children:"Thông tin đề tài"}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Tên đề tài"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:i.title,onChange:w=>a({...i,title:w.target.value})})]}),A.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Năm"}),A.jsx("input",{type:"number",className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:i.year,onChange:w=>a({...i,year:parseInt(w.target.value)})})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Kinh phí"}),A.jsx("input",{type:"number",className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:i.budget,onChange:w=>a({...i,budget:parseInt(w.target.value)})})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Nhóm tác giả"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:l,onChange:w=>c(w.target.value)})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Thành viên chính"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:f,onChange:w=>p(w.target.value)})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Chuyên gia"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:g,onChange:w=>v(w.target.value)})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Nội dung tóm tắt"}),A.jsx("textarea",{rows:5,className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none",value:i.content,onChange:w=>a({...i,content:w.target.value})})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-[9px] font-black uppercase text-slate-400 ml-2",children:"Link Drive tài liệu đính kèm (Quyết định, Hợp đồng...)"}),A.jsx("input",{className:"w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20",value:i.driveLink||"",onChange:w=>a({...i,driveLink:w.target.value}),placeholder:"https://drive.google.com/..."})]})]}),A.jsxs("div",{className:"p-8 border-t dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900",children:[A.jsx("button",{onClick:e,className:"flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all",children:"Hủy bỏ"}),A.jsxs("button",{onClick:T,className:`flex-[2] py-4 ${t.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px] flex items-center justify-center gap-2 hover:brightness-110 transition-all`,children:[A.jsx(b1,{size:18})," Lưu hồ sơ đề tài"]})]})]})})},fL=pe.lazy(()=>Ai(()=>import("./ListPage-Cd4YgTHN.js").then(r=>r.L),__vite__mapDeps([0,1,2,3,4,5,6]))),mL=pe.lazy(()=>Ai(()=>import("./ChatPage-DJ_ulUg8.js"),__vite__mapDeps([7,8,9]))),pL=pe.lazy(()=>Ai(()=>import("./StatsPage-CDsALl7D.js"),__vite__mapDeps([10,11,12,13,14,3,15]))),gL=pe.lazy(()=>Ai(()=>import("./BubblePage-D1XJOZlG.js"),__vite__mapDeps([16,1,2]))),yL=pe.lazy(()=>Ai(()=>import("./TreeMapPage-WiSE0-AK.js"),__vite__mapDeps([17,1,2]))),_L=pe.lazy(()=>Ai(()=>import("./ReferencePage-CPgh-zeH.js"),__vite__mapDeps([18,4,19,2,13,20]))),vL=pe.lazy(()=>Ai(()=>import("./ResearchPage-BEwELMIP.js"),__vite__mapDeps([21,4,15,6,2,12,5]))),EL=pe.lazy(()=>Ai(()=>import("./RegisterPage-Dh3Lv2_O.js"),__vite__mapDeps([22,15,8,23,20,19,24,5,9]))),TL=pe.lazy(()=>Ai(()=>import("./ApprovalPage-BPs2f98a.js"),__vite__mapDeps([25,19,14,15,24,26,23,2]))),bL=pe.lazy(()=>Ai(()=>import("./BatchImportModal-tPc-Yt-a.js"),__vite__mapDeps([27,23,19,20,8,15,26]))),wL=pe.lazy(()=>Ai(()=>import("./SecurityAuditModal-DEMx4oGp.js"),__vite__mapDeps([28,15,19]))),IL=()=>{const{activeTab:r,setActiveTab:e,theme:t,setTheme:i,activeTheme:a,isDarkMode:l,setIsDarkMode:c,user:f,currentScope:p,setCurrentScope:g,pointConfig:v,savePointConfig:T}=Yl(),{isBatchOpen:w,closeBatch:D,openBatch:F,isSecurityOpen:$,closeSecurity:Z,openSecurity:se,openLogin:ce,openEditInitiative:ae,openViewInitiative:ge,openEditProject:Ae}=fh(),{initiatives:X}=_1(),R=pe.useMemo(()=>X.filter(x=>(x.scope||"Company")===p),[X,p]),S=pe.useCallback(async x=>{if(confirm("Xác nhận xóa sáng kiến này?"))try{await Nr.collection("initiatives").doc(x).delete()}catch(O){console.error("Delete error:",O),alert("Lỗi khi xóa. Bạn có thể không có quyền thực hiện thao tác này.")}},[]);return A.jsx(S1,{children:A.jsxs("div",{className:"min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300",children:[A.jsx(tL,{activeTab:r,setActiveTab:e,isDarkMode:l,setIsDarkMode:c,activeTheme:a,setTheme:i,user:f,onLogout:()=>J_.signOut(),onLogin:ce,onAdd:()=>r==="research"?Ae():ae(),onBatch:F,onSecurity:se,currentScope:p,setCurrentScope:g}),A.jsx("main",{className:"flex-1 p-4 lg:p-10 overflow-y-auto",children:A.jsx(pe.Suspense,{fallback:A.jsx("div",{className:"flex items-center justify-center h-64",children:A.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"})}),children:A.jsxs("div",{className:"animate-slide",children:[r==="register"&&A.jsx(EL,{activeTheme:a}),r==="approvals"&&A.jsx(TL,{activeTheme:a}),r==="list"&&A.jsx(fL,{initiatives:R,activeTheme:a,user:f,onView:ge,onEdit:ae,onDelete:S}),r==="stats"&&A.jsx(pL,{initiatives:R,activeTheme:a,onViewItem:ge,pointConfig:v,onUpdatePointConfig:T,user:f}),r==="chat"&&A.jsx(mL,{initiatives:R,activeTheme:a}),r==="references"&&A.jsx(_L,{activeTheme:a,user:f}),r==="research"&&A.jsx(vL,{activeTheme:a,user:f,onEdit:Ae,onAdd:Ae}),r==="bubble"&&A.jsx(gL,{initiatives:R,activeTheme:a,user:f,onView:ge,onEdit:ae,onDelete:S}),r==="treemap"&&A.jsx(yL,{initiatives:R,activeTheme:a,user:f,onView:ge,onEdit:ae,onDelete:S})]})})}),A.jsx(iL,{}),A.jsxs(pe.Suspense,{fallback:null,children:[A.jsx(bL,{isOpen:w,onClose:D,activeTheme:a}),A.jsx(wL,{isOpen:$,onClose:Z,activeTheme:a,user:f})]}),A.jsx(uL,{}),A.jsx(hL,{}),A.jsx(dL,{})]})})};window.addEventListener("unhandledrejection",r=>{console.error("Unhandled Rejection:",r.reason)});const x1=document.getElementById("root");if(!x1)throw new Error("Could not find root element to mount to");const AL=px.createRoot(x1);AL.render(A.jsx(ox.StrictMode,{children:A.jsx(S1,{children:A.jsx(Z4,{children:A.jsx(nL,{children:A.jsx(IL,{})})})})}));export{E1 as A,Z_ as B,bw as C,X4 as D,Lg as E,Iw as F,k4 as G,QL as H,P4 as I,GL as J,HL as K,L4 as L,Aw as M,H4 as P,vy as S,w1 as T,I1 as U,Cf as X,$4 as Z,Ai as _,Tw as a,RL as b,xe as c,Rw as d,T1 as e,I4 as f,xL as g,U4 as h,b4 as i,A as j,w4 as k,aL as l,FL as m,XL as n,S4 as o,R4 as p,A4 as q,pe as r,b1 as s,Nr as t,z4 as u,J_ as v,fh as w,KL as x,YL as y,$L as z};
