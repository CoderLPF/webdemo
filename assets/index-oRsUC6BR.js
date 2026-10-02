var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function l(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var u={},d=[],f=()=>{},p=()=>!1,m=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),h=e=>e.startsWith(`onUpdate:`),g=Object.assign,_=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},v=Object.prototype.hasOwnProperty,y=(e,t)=>v.call(e,t),b=Array.isArray,x=e=>k(e)===`[object Map]`,S=e=>k(e)===`[object Set]`,C=e=>k(e)===`[object Date]`,w=e=>typeof e==`function`,T=e=>typeof e==`string`,E=e=>typeof e==`symbol`,D=e=>typeof e==`object`&&!!e,ee=e=>(D(e)||w(e))&&w(e.then)&&w(e.catch),O=Object.prototype.toString,k=e=>O.call(e),te=e=>k(e).slice(8,-1),ne=e=>k(e)===`[object Object]`,re=e=>T(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ie=l(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ae=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},oe=/-\w/g,se=ae(e=>e.replace(oe,e=>e.slice(1).toUpperCase())),ce=/\B([A-Z])/g,le=ae(e=>e.replace(ce,`-$1`).toLowerCase()),ue=ae(e=>e.charAt(0).toUpperCase()+e.slice(1)),de=ae(e=>e?`on${ue(e)}`:``),fe=(e,t)=>!Object.is(e,t),pe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},me=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},he=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ge,_e=()=>ge||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ve(e){if(b(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=T(r)?Se(r):ve(r);if(i)for(let e in i)t[e]=i[e]}return t}if(T(e)||D(e))return e}var ye=/;(?![^(]*\))/g,be=/:([^]+)/,xe=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Se(e){let t={};return e.replace(xe,e=>e.startsWith(`/*`)?``:e).split(ye).forEach(e=>{if(e){let n=e.split(be);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ce(e){let t=``;if(T(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){let r=Ce(e[n]);r&&(t+=r+` `)}else if(D(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var we=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Te=l(we);we+``;function Ee(e){return!!e||e===``}function De(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=je(e[i],t[i],n);return r}function Oe(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&je(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function ke(e,t,n){let r=x(e),i=x(t);if(r||i||(r=S(e),i=S(t),r||i))return r&&i?Oe(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!je(e[r],t[r],n))return!1}return String(e)===String(t)}function Ae(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function je(e,t,n){if(e===t)return!0;let r=C(e),i=C(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=E(e),i=E(t),r||i?e===t:(r=b(e),i=b(t),r||i?r&&i?Ae(e,t,n,De):!1:(r=D(e),i=D(t),r||i?!r||!i?!1:Ae(e,t,n,ke):String(e)===String(t))))}function Me(e,t){return e.findIndex(e=>je(e,t))}var Ne=e=>!!(e&&e.__v_isRef===!0),A=e=>T(e)?e:e==null?``:b(e)||D(e)&&(e.toString===O||!w(e.toString))?Ne(e)?A(e.value):JSON.stringify(e,Pe,2):String(e),Pe=(e,t)=>Ne(t)?Pe(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Fe(t,r)+` =>`]=n,e),{})}:S(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Fe(e))}:E(t)?Fe(t):D(t)&&!b(t)&&!ne(t)?String(t):t,Fe=(e,t=``)=>E(e)?`Symbol(${e.description??t})`:e,Ie,Le=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=Ie;try{return Ie=this,e()}finally{Ie=t}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let e=Ie;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Re(){return Ie}var ze,Be=new WeakSet,Ve=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Be.has(this)&&(Be.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ge(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ot(this),Je(this);let e=ze,t=nt;ze=this,nt=!0;try{return this.fn()}finally{Ye(this),ze=e,nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qe(e);this.deps=this.depsTail=void 0,ot(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Be.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xe(this)&&this.run()}get dirty(){return Xe(this)}},He=0,Ue,We;function Ge(e,t=!1){if(e.flags|=8,t){e.next=We,We=e;return}e.next=Ue,Ue=e}function Ke(){He++}function qe(){if(--He>0)return;if(We){let e=We;for(We=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ue;){let t=Ue;for(Ue=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Je(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ye(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Qe(r),$e(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Xe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ze(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ze(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===st)||(e.globalVersion=st,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Xe(e))))return;e.flags|=2;let t=e.dep,n=ze,r=nt;ze=e,nt=!0;try{Je(e);let n=e.fn(e._value);(t.version===0||fe(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{ze=n,nt=r,Ye(e),e.flags&=-3}}function Qe(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Qe(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $e(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function et(e,t){e.effect instanceof Ve&&(e=e.effect.fn);let n=new Ve(e);t&&g(n,t);try{n.run()}catch(e){throw n.stop(),e}let r=n.run.bind(n);return r.effect=n,r}function tt(e){e.effect.stop()}var nt=!0,rt=[];function it(){rt.push(nt),nt=!1}function at(){let e=rt.pop();nt=e===void 0||e}function ot(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=ze;ze=void 0;try{t()}finally{ze=e}}}var st=0,ct=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},lt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ze||!nt||ze===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ze)t=this.activeLink=new ct(ze,this),ze.deps?(t.prevDep=ze.depsTail,ze.depsTail.nextDep=t,ze.depsTail=t):ze.deps=ze.depsTail=t,ut(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=ze.depsTail,t.nextDep=void 0,ze.depsTail.nextDep=t,ze.depsTail=t,ze.deps===t&&(ze.deps=e)}return t}trigger(e){this.version++,st++,this.notify(e)}notify(e){Ke();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{qe()}}};function ut(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)ut(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var dt=new WeakMap,ft=Symbol(``),pt=Symbol(``),mt=Symbol(``);function ht(e,t,n){if(nt&&ze){let t=dt.get(e);t||dt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new lt),r.map=t,r.key=n),r.track()}}function gt(e,t,n,r,i,a){let o=dt.get(e);if(!o){st++;return}let s=e=>{e&&e.trigger()};if(Ke(),t===`clear`)o.forEach(s);else{let i=b(e),a=i&&re(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===mt||!E(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(mt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(ft)),x(e)&&s(o.get(pt)));break;case`delete`:i||(s(o.get(ft)),x(e)&&s(o.get(pt)));break;case`set`:x(e)&&s(o.get(ft))}}qe()}function _t(e){let t=an(e);return t===e||(ht(t,`iterate`,mt),nn(e))?t:tn(e)?en(e)?t.map(e=>cn(sn(e))):t.map(cn):t.map(sn)}function vt(e){return ht(e=an(e),`iterate`,mt),e}function yt(e,t){return tn(e)?cn(en(e)?sn(t):t):sn(t)}var bt={__proto__:null,[Symbol.iterator](){return xt(this,Symbol.iterator,e=>yt(this,e))},concat(...e){return _t(this).concat(...e.map(e=>b(e)?_t(e):e))},entries(){return xt(this,`entries`,e=>(e[1]=yt(this,e[1]),e))},every(e,t){return Ct(this,`every`,e,t,void 0,arguments)},filter(e,t){return Ct(this,`filter`,e,t,e=>e.map(e=>yt(this,e)),arguments)},find(e,t){return Ct(this,`find`,e,t,e=>yt(this,e),arguments)},findIndex(e,t){return Ct(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Ct(this,`findLast`,e,t,e=>yt(this,e),arguments)},findLastIndex(e,t){return Ct(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Ct(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Tt(this,`includes`,e)},indexOf(...e){return Tt(this,`indexOf`,e)},join(e){return _t(this).join(e)},lastIndexOf(...e){return Tt(this,`lastIndexOf`,e)},map(e,t){return Ct(this,`map`,e,t,void 0,arguments)},pop(){return Et(this,`pop`)},push(...e){return Et(this,`push`,e)},reduce(e,...t){return wt(this,`reduce`,e,t)},reduceRight(e,...t){return wt(this,`reduceRight`,e,t)},shift(){return Et(this,`shift`)},some(e,t){return Ct(this,`some`,e,t,void 0,arguments)},splice(...e){return Et(this,`splice`,e)},toReversed(){return _t(this).toReversed()},toSorted(e){return _t(this).toSorted(e)},toSpliced(...e){return _t(this).toSpliced(...e)},unshift(...e){return Et(this,`unshift`,e)},values(){return xt(this,`values`,e=>yt(this,e))}};function xt(e,t,n){let r=vt(e),i=r[t]();return r!==e&&!nn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var St=Array.prototype;function Ct(e,t,n,r,i,a){let o=vt(e),s=o!==e&&!nn(e),c=o[t];if(c!==St[t]){let t=c.apply(e,a);return s?sn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,yt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function wt(e,t,n,r){let i=vt(e),a=i!==e&&!nn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=yt(e,t)),n.call(this,t,yt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?yt(e,c):c}function Tt(e,t,n){let r=an(e);ht(r,`iterate`,mt);let i=r[t](...n);return(i===-1||i===!1)&&rn(n[0])?(n[0]=an(n[0]),r[t](...n)):i}function Et(e,t,n=[]){it(),Ke();let r=an(e)[t].apply(e,n);return qe(),at(),r}var Dt=l(`__proto__,__v_isRef,__isVue`),Ot=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(E));function kt(e){E(e)||(e=String(e));let t=an(this);return ht(t,`has`,e),t.hasOwnProperty(e)}var At=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Jt:qt:i?Kt:Gt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=b(e);if(!r){let e;if(a&&(e=bt[t]))return e;if(t===`hasOwnProperty`)return kt}let o=Reflect.get(e,t,ln(e)?e:n);if((E(t)?Ot.has(t):Dt(t))||(r||ht(e,`get`,t),i))return o;if(ln(o)){let e=a&&re(t)?o:o.value;return r&&D(e)?Qt(e):e}return D(o)?r?Qt(o):Xt(o):o}},jt=class extends At{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=b(e)&&re(t);if(!this._isShallow){let e=tn(i);if(!nn(n)&&!tn(n)&&(i=an(i),n=an(n)),!a&&ln(i)&&!ln(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:y(e,t),s=Reflect.set(e,t,n,ln(e)?e:r);return e===an(r)&&s&&(o?fe(n,i)&&gt(e,`set`,t,n,i):gt(e,`add`,t,n)),s}deleteProperty(e,t){let n=y(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&gt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!E(t)||!Ot.has(t))&&ht(e,`has`,t),n}ownKeys(e){return ht(e,`iterate`,b(e)?`length`:ft),Reflect.ownKeys(e)}},Mt=class extends At{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Nt=new jt,Pt=new Mt,Ft=new jt(!0),It=e=>e,Lt=e=>Reflect.getPrototypeOf(e);function Rt(e,t,n){return function(...r){let i=this.__v_raw,a=an(i),o=x(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?It:t?cn:sn;return!t&&ht(a,`iterate`,c?pt:ft),g(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function zt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Bt(e,t){let n={get(n){let r=this.__v_raw,i=an(r),a=an(n);e||(fe(n,a)&&ht(i,`get`,n),ht(i,`get`,a));let{has:o}=Lt(i),s=t?It:e?cn:sn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&ht(an(t),`iterate`,ft),t.size},has(t){let n=this.__v_raw,r=an(n),i=an(t);return e||(fe(t,i)&&ht(r,`has`,t),ht(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=an(a),s=t?It:e?cn:sn;return!e&&ht(o,`iterate`,ft),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return g(n,e?{add:zt(`add`),set:zt(`set`),delete:zt(`delete`),clear:zt(`clear`)}:{add(e){let n=an(this),r=Lt(n),i=an(e),a=!t&&!nn(e)&&!tn(e)?i:e;return r.has.call(n,a)||fe(e,a)&&r.has.call(n,e)||fe(i,a)&&r.has.call(n,i)||(n.add(a),gt(n,`add`,a,a)),this},set(e,n){!t&&!nn(n)&&!tn(n)&&(n=an(n));let r=an(this),{has:i,get:a}=Lt(r),o=i.call(r,e);o||=(e=an(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?fe(n,s)&&gt(r,`set`,e,n,s):gt(r,`add`,e,n),this},delete(e){let t=an(this),{has:n,get:r}=Lt(t),i=n.call(t,e);i||=(e=an(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&gt(t,`delete`,e,void 0,a),o},clear(){let e=an(this),t=e.size!==0,n=e.clear();return t&&gt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Rt(r,e,t)}),n}function Vt(e,t){let n=Bt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(y(n,r)&&r in t?n:t,r,i)}var Ht={get:Vt(!1,!1)},Ut={get:Vt(!1,!0)},Wt={get:Vt(!0,!1)},Gt=new WeakMap,Kt=new WeakMap,qt=new WeakMap,Jt=new WeakMap;function Yt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Xt(e){return tn(e)?e:$t(e,!1,Nt,Ht,Gt)}function Zt(e){return $t(e,!1,Ft,Ut,Kt)}function Qt(e){return $t(e,!0,Pt,Wt,qt)}function $t(e,t,n,r,i){if(!D(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Yt(te(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function en(e){return tn(e)?en(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function nn(e){return!!(e&&e.__v_isShallow)}function rn(e){return e?!!e.__v_raw:!1}function an(e){let t=e&&e.__v_raw;return t?an(t):e}function on(e){return!y(e,`__v_skip`)&&Object.isExtensible(e)&&me(e,`__v_skip`,!0),e}var sn=e=>D(e)?Xt(e):e,cn=e=>D(e)?Qt(e):e;function ln(e){return e?e.__v_isRef===!0:!1}function j(e){return dn(e,!1)}function un(e){return dn(e,!0)}function dn(e,t){return ln(e)?e:new fn(e,t)}var fn=class{constructor(e,t){this.dep=new lt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:an(e),this._value=t?e:sn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||nn(e)||tn(e);e=n?e:an(e),fe(e,t)&&(this._rawValue=e,this._value=n?e:sn(e),this.dep.trigger())}};function M(e){return ln(e)?e.value:e}var pn={get:(e,t,n)=>t===`__v_raw`?e:M(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return ln(i)&&!ln(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function mn(e){return en(e)?e:new Proxy(e,pn)}var hn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=st-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return Ge(this,!0),!0}get value(){let e=this.dep.track();return Ze(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function gn(e,t,n=!1){let r,i;return w(e)?r=e:(r=e.get,i=e.set),new hn(r,i,n)}var _n={},vn=new WeakMap,yn=void 0;function bn(e,t=!1,n=yn){if(n){let t=vn.get(n);t||vn.set(n,t=[]),t.push(e)}}function xn(e,t,n=u){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:nn(e)||i===!1||i===0?Sn(e,1):Sn(e),d,p,m,h,g=!1,v=!1;if(ln(e)?(p=()=>e.value,g=nn(e)):en(e)?(p=()=>l(e),g=!0):b(e)?(v=!0,g=e.some(e=>en(e)||nn(e)),p=()=>e.map(e=>{if(ln(e))return e.value;if(en(e))return l(e);if(w(e))return c?c(e,2):e()})):p=w(e)?t?c?()=>c(e,2):e:()=>{if(m){it();try{m()}finally{at()}}let t=yn;yn=d;try{return c?c(e,3,[h]):e(h)}finally{yn=t}}:f,t&&i){let e=p,t=i===!0?1/0:i;p=()=>Sn(e(),t)}let y=Re(),x=()=>{d.stop(),y&&y.active&&_(y.effects,d)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return x(),n}}let S=v?Array(e.length).fill(_n):_n,C=e=>{if(d.flags&1&&(d.dirty||e)){if(t){let n=d.run();if(e||i||g||(v?n.some((e,t)=>fe(e,S[t])):fe(n,S))){m&&m();let e=yn;yn=d;try{let e=[n,S===_n?void 0:v&&S[0]===_n?[]:S,h];S=n,c?c(t,3,e):t(...e)}finally{yn=e}}}else d.run()}};return s&&s(C),d=new Ve(p),d.scheduler=o?()=>o(C,!1):C,h=e=>bn(e,!1,d),m=d.onStop=()=>{let e=vn.get(d);if(e){if(c)c(e,4);else for(let t of e)t();vn.delete(d)}},t?r?C(!0):S=d.run():o?o(C.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Sn(e,t=1/0,n){if(t<=0||!D(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ln(e))Sn(e.value,t,n);else if(b(e))for(let r=0;r<e.length;r++)Sn(e[r],t,n);else if(S(e)||x(e))e.forEach(e=>{Sn(e,t,n)});else if(ne(e)){for(let r in e)Sn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Sn(e[r],t,n)}return e}function Cn(e,t,n,r){try{return r?e(...r):e()}catch(e){Tn(e,t,n)}}function wn(e,t,n,r){if(w(e)){let i=Cn(e,t,n,r);return i&&ee(i)&&i.catch(e=>{Tn(e,t,n)}),i}if(b(e)){let i=[];for(let a=0;a<e.length;a++)i.push(wn(e[a],t,n,r));return i}}function Tn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||u;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){it(),Cn(a,null,10,[e,i,o]),at();return}}En(e,n,i,r,o)}function En(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Dn=[],On=-1,kn=[],An=null,jn=0,Mn=Promise.resolve(),Nn=null;function Pn(e){let t=Nn||Mn;return e?t.then(this?e.bind(this):e):t}function Fn(e){let t=On+1,n=Dn.length;for(;t<n;){let r=t+n>>>1,i=Dn[r],a=Vn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function In(e){if(!(e.flags&1)){let t=Vn(e),n=Dn[Dn.length-1];!n||!(e.flags&2)&&t>=Vn(n)?Dn.push(e):Dn.splice(Fn(t),0,e),e.flags|=1,Ln()}}function Ln(){Nn||=Mn.then(Hn)}function Rn(e){if(!b(e))An&&e.id===-1?An.splice(jn+1,0,e):e.flags&1||(kn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)kn.push(e[t]);Ln()}function zn(e,t,n=On+1){for(;n<Dn.length;n++){let t=Dn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;Dn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Bn(e){if(kn.length){let e=[...new Set(kn)].sort((e,t)=>Vn(e)-Vn(t));if(kn.length=0,An){for(let t=0;t<e.length;t++)An.push(e[t]);return}for(An=e,jn=0;jn<An.length;jn++){let e=An[jn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}An=null,jn=0}}var Vn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Hn(e){try{for(On=0;On<Dn.length;On++){let e=Dn[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Dn.length;On++){let e=Dn[On];e&&(e.flags&=-2)}On=-1,Dn.length=0,Bn(e),Nn=null,(Dn.length||kn.length)&&Hn(e)}}var Un=null,Wn=null;function Gn(e){let t=Un;return Un=e,Wn=e&&e.type.__scopeId||null,t}function Kn(e,t=Un,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ya(-1);let i=Gn(t),a=ha.length,o;try{o=e(...n)}finally{for(let e=ha.length;e>a;e--)_a();Gn(i),r._d&&ya(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qn(e,t){if(Un===null)return e;let n=$a(Un),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=u]=t[e];i&&(w(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function Jn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(it(),wn(c,n,8,[e.el,s,e,t]),at())}}function Yn(e,t){if(za){let n=za.provides,r=za.parent&&za.parent.provides;r===n&&(n=za.provides=Object.create(r)),n[e]=t}}function Xn(e,t,n=!1){let r=Ba();if(r||Si){let i=Si?Si._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&w(t)?t.call(r&&r.proxy):t}}var Zn=Symbol.for(`v-scx`),Qn=()=>Xn(Zn);function $n(e,t){return tr(e,null,t)}function er(e,t,n){return tr(e,t,n)}function tr(e,t,n=u){let{immediate:r,deep:i,flush:a,once:o}=n,s=g({},n),c=t&&r||!t&&a!==`post`,l;if(Ka){if(a===`sync`){let e=Qn();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=f,e.resume=f,e.pause=f,e}}let d=za;s.call=(e,t,n)=>wn(e,d,t,n);let p=!1;a===`post`?s.scheduler=e=>{$i(e,d&&d.suspense)}:a!==`sync`&&(p=!0,s.scheduler=(e,t)=>{t?e():In(e)}),s.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,d&&(e.id=d.uid,e.i=d))};let m=xn(e,t,s);return Ka&&(l?l.push(m):c&&m()),m}function nr(e,t,n){let r=this.proxy,i=T(e)?e.includes(`.`)?rr(r,e):()=>r[e]:e.bind(r,r),a;w(t)?a=t:(a=t.handler,n=t);let o=Ua(this),s=tr(i,a.bind(r),n);return o(),s}function rr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var ir=new WeakMap,ar=Symbol(`_vte`),or=e=>e.__isTeleport,sr=e=>e&&(e.disabled||e.disabled===``),cr=e=>e&&(e.defer||e.defer===``),lr=e=>typeof SVGElement<`u`&&e instanceof SVGElement,ur=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,dr=(e,t)=>{let n=e&&e.to;return T(n)?t?t(n):null:n},fr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=sr(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=sr(e.props),r=e.target=dr(e.props,m),a=_r(r,e,h,p);r&&(o!==`svg`&&lr(r)?o=`svg`:o!==`mathml`&&ur(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),gr(e,!1)))},S=e=>{let t=()=>{if(ir.get(e)===t){if(ir.delete(e),sr(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),gr(e,!0)}x(e)}};ir.set(e,t),$i(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),cr(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),gr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=ir.get(e);if(u){u.flags|=8,ir.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=sr(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||lr(p)?o=`svg`:(o===`mathml`||ur(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),aa(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):pr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=dr(t.props,m);e&&(t.target=e,pr(t,e,null,l,0))}else g&&pr(t,p,h,l,1);gr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=sr(f),m=a||!p,h=ir.get(e);if(h&&(h.flags|=8,ir.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:pr,hydrate:mr};function pr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!ir.has(e)&&(!d||sr(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function mr(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=dr(t.props,c),h=sr(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||_r(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||_r(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),gr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var hr=fr;function gr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function _r(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[ar]=o,e&&(r(a,e,i),r(o,e,i)),o}var vr=Symbol(`_leaveCb`);function yr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==pa){t=n;break}}return t}function br(e){if(!Or(e))return or(e.type)&&e.children?yr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&w(n.default))return n.default()}}function xr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;xr(or(n.type)&&br(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function N(e,t){return w(e)?g({name:e.name},t,{setup:e}):e}function Sr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Cr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var wr=new WeakMap;function Tr(e,t,n,r,i=!1){if(b(e)){e.forEach((e,a)=>Tr(e,t&&(b(t)?t[a]:t),n,r,i));return}if(Dr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Tr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?$a(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,d=s.refs===u?s.refs={}:s.refs,f=s.setupState,m=an(f),h=f===u?p:e=>!Cr(d,e)&&y(m,e),g=(e,t)=>!(t&&Cr(d,t));if(l!=null&&l!==c){if(Er(t),T(l))d[l]=null,h(l)&&(f[l]=null);else if(ln(l)){let e=t;g(l,e.k)&&(l.value=null),e.k&&(d[e.k]=null)}}if(w(c))Cn(c,s,12,[o,d]);else{let t=T(c),r=ln(c);if(t||r){let s=()=>{if(e.f){let n=t?h(c)?f[c]:d[c]:g(c)||!e.k?c.value:d[e.k];if(i)b(n)&&_(n,a);else if(b(n))n.includes(a)||n.push(a);else if(t)d[c]=[a],h(c)&&(f[c]=d[c]);else{let t=[a];g(c,e.k)&&(c.value=t),e.k&&(d[e.k]=t)}}else t?(d[c]=o,h(c)&&(f[c]=o)):r&&(g(c,e.k)&&(c.value=o),e.k&&(d[e.k]=o))};if(o){let t=()=>{s(),wr.delete(e)};t.id=-1,wr.set(e,t),$i(t,n)}else Er(e),s()}}}function Er(e){let t=wr.get(e);t&&(t.flags|=8,wr.delete(e))}_e().requestIdleCallback,_e().cancelIdleCallback;var Dr=e=>!!e.type.__asyncLoader,Or=e=>e.type.__isKeepAlive;function kr(e,t){jr(e,`a`,t)}function Ar(e,t){jr(e,`da`,t)}function jr(e,t,n=za){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Nr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Or(e.parent.vnode)&&Mr(r,t,n,e),e=e.parent}}function Mr(e,t,n,r){let i=Nr(t,e,r,!0);Br(()=>{_(r[t],i)},n)}function Nr(e,t,n=za,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{it();let i=Ua(n),a=wn(t,n,e,r);return i(),at(),a};return r?i.unshift(a):i.push(a),a}}var Pr=e=>(t,n=za)=>{(!Ka||e===`sp`)&&Nr(e,(...e)=>t(...e),n)},Fr=Pr(`bm`),Ir=Pr(`m`),Lr=Pr(`bu`),Rr=Pr(`u`),zr=Pr(`bum`),Br=Pr(`um`),Vr=Pr(`sp`),Hr=Pr(`rtg`),Ur=Pr(`rtc`);function Wr(e,t=za){Nr(`ec`,e,t)}var Gr=`components`;function Kr(e,t){return Yr(Gr,e,!0,t)||e}var qr=Symbol.for(`v-ndc`);function Jr(e){return T(e)?Yr(Gr,e,!1)||e:e||qr}function Yr(e,t,n=!0,r=!1){let i=Un||za;if(i){let n=i.type;if(e===Gr){let e=eo(n,!1);if(e&&(e===t||e===se(t)||e===ue(se(t))))return n}let a=Xr(i[e]||n[e],t)||Xr(i.appContext[e],t);return!a&&r?n:a}}function Xr(e,t){return e&&(e[t]||e[se(t)]||e[ue(se(t))])}function P(e,t,n,r){let i,a=n&&n[r],o=b(e);if(o||T(e)){let n=o&&en(e),r=!1,s=!1;n&&(r=!nn(e),s=tn(e),e=vt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?cn(sn(e[n])):sn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(D(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Zr(e,t,n,r,i,a){if(n??={},Un.ce||Un.parent&&Dr(Un.parent)&&Un.parent.ce){let e=a!=null&&n.key==null?g({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),I(),xa(F,null,[z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=ha.length;I();let c;try{let i=o&&Qr(o(n)),s=n.key||a||i&&i.key;c=xa(F,{key:(s&&!E(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=ha.length;e>s;e--)_a();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Qr(e){return e.some(e=>!Sa(e)||!(e.type===pa||e.type===F&&!Qr(e.children)))?e:null}var $r=e=>e?Ga(e)?$a(e):$r(e.parent):null,ei=g(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>li(e),$forceUpdate:e=>e.f||=()=>{In(e.update)},$nextTick:e=>e.n||=Pn.bind(e.proxy),$watch:e=>nr.bind(e)}),ti=(e,t)=>e!==u&&!e.__isScriptSetup&&y(e,t),ni={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(ti(r,t))return o[t]=1,r[t];else if(i!==u&&y(i,t))return o[t]=2,i[t];else if(y(a,t))return o[t]=3,a[t];else if(n!==u&&y(n,t))return o[t]=4,n[t];else ii&&(o[t]=0)}let l=ei[t],d,f;if(l)return t===`$attrs`&&ht(e.attrs,`get`,``),l(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==u&&y(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,y(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return ti(i,t)?(i[t]=n,!0):r!==u&&y(r,t)?(r[t]=n,!0):y(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==u&&s[0]!==`$`&&y(e,s)||ti(t,s)||y(a,s)||y(r,s)||y(ei,s)||y(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?y(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function ri(e){return b(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var ii=!0;function ai(e){let t=li(e),n=e.proxy,r=e.ctx;ii=!1,t.beforeCreate&&si(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:h,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:x,unmounted:S,render:C,renderTracked:T,renderTriggered:E,errorCaptured:ee,serverPrefetch:O,expose:k,inheritAttrs:te,components:ne,directives:re,filters:ie}=t;if(l&&oi(l,r,null),o)for(let e in o){let t=o[e];w(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);D(t)&&(e.data=Xt(t))}if(ii=!0,a)for(let e in a){let t=a[e],i=no({get:w(t)?t.bind(n,n):w(t.get)?t.get.bind(n,n):f,set:!w(t)&&w(t.set)?t.set.bind(n):f});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)ci(s[e],r,n,e);if(c){let e=w(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Yn(t,e[t])})}u&&si(u,e,`c`);function ae(e,t){b(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(ae(Fr,d),ae(Ir,p),ae(Lr,m),ae(Rr,h),ae(kr,g),ae(Ar,_),ae(Wr,ee),ae(Ur,T),ae(Hr,E),ae(zr,y),ae(Br,S),ae(Vr,O),b(k)){if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}C&&e.render===f&&(e.render=C),te!=null&&(e.inheritAttrs=te),ne&&(e.components=ne),re&&(e.directives=re),O&&Sr(e)}function oi(e,t,n=f){b(e)&&(e=mi(e));for(let n in e){let r=e[n],i;i=D(r)?`default`in r?Xn(r.from||n,r.default,!0):Xn(r.from||n):Xn(r),ln(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function si(e,t,n){wn(b(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ci(e,t,n,r){let i=r.includes(`.`)?rr(n,r):()=>n[r];if(T(e)){let n=t[e];w(n)&&er(i,n)}else if(w(e))er(i,e.bind(n));else if(D(e)){if(b(e))e.forEach(e=>ci(e,t,n,r));else{let r=w(e.handler)?e.handler.bind(n):t[e.handler];w(r)&&er(i,r,e)}}}function li(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>ui(c,e,o,!0)),ui(c,t,o)),D(t)&&a.set(t,c),c}function ui(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&ui(e,a,n,!0),i&&i.forEach(t=>ui(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=di[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var di={data:fi,props:_i,emits:_i,methods:gi,computed:gi,beforeCreate:hi,created:hi,beforeMount:hi,mounted:hi,beforeUpdate:hi,updated:hi,beforeDestroy:hi,beforeUnmount:hi,destroyed:hi,unmounted:hi,activated:hi,deactivated:hi,errorCaptured:hi,serverPrefetch:hi,components:gi,directives:gi,watch:vi,provide:fi,inject:pi};function fi(e,t){return t?e?function(){return g(w(e)?e.call(this,this):e,w(t)?t.call(this,this):t)}:t:e}function pi(e,t){return gi(mi(e),mi(t))}function mi(e){if(b(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function hi(e,t){return e?[...new Set([].concat(e,t))]:t}function gi(e,t){return e?g(Object.create(null),e,t):t}function _i(e,t){return e?b(e)&&b(t)?[...new Set([...e,...t])]:g(Object.create(null),ri(e),ri(t??{})):t}function vi(e,t){if(!e)return t;if(!t)return e;let n=g(Object.create(null),e);for(let r in t)n[r]=hi(e[r],t[r]);return n}function yi(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var bi=0;function xi(e,t){return function(n,r=null){w(n)||(n=g({},n)),r!=null&&!D(r)&&(r=null);let i=yi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:bi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ro,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&w(e.install)?(a.add(e),e.install(c,...t)):w(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||z(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,$a(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(wn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Si;Si=c;try{return e()}finally{Si=t}}};return c}}var Si=null,Ci=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${se(t)}Modifiers`]||e[`${le(t)}Modifiers`];function wi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||u,i=n,a=t.startsWith(`update:`),o=a&&Ci(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>T(e)?e.trim():e)),o.number&&(i=i.map(he)));let s,c=r[s=de(t)]||r[s=de(se(t))];!c&&a&&(c=r[s=de(le(t))]),c&&wn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,wn(l,e,6,i)}}var Ti=new WeakMap;function Ei(e,t,n=!1){let r=n?Ti:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!w(e)){let r=e=>{let n=Ei(e,t,!0);n&&(s=!0,g(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(D(e)&&r.set(e,null),null):(b(a)?a.forEach(e=>o[e]=null):g(o,a),D(e)&&r.set(e,o),o)}function Di(e,t){return!e||!m(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),y(e,t[0].toLowerCase()+t.slice(1))||y(e,le(t))||y(e,t))}function Oi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e,_=Gn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ja(l.call(t,e,u,d,p,f,m)),y=s}else{let e=t;v=ja(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:ki(s)}}catch(t){ha.length=0,Tn(t,e,1),v=z(pa)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(h)&&(y=Ai(y,a)),b=Oa(b,y,!1,!0))}return n.dirs&&(b=Oa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&xr(or(b.type)&&br(b)||b,n.transition),v=b,Gn(_),v}var ki=e=>{let t;for(let n in e)(n===`class`||n===`style`||m(n))&&((t||={})[n]=e[n]);return t},Ai=(e,t)=>{let n={};for(let r in e)(!h(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ji(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ni(o,r,n)&&!Di(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Mi(r,o,l):!!o;return!1}function Mi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Ni(t,e,a)&&!Di(n,a))return!0}return!1}function Ni(e,t,n){let r=e[n],i=t[n];return n===`style`&&D(r)&&D(i)?!je(r,i):r!==i}function Pi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Fi={},Ii=()=>Object.create(Fi),Li=e=>Object.getPrototypeOf(e)===Fi;function Ri(e,t,n,r=!1){let i={},a=Ii();e.propsDefaults=Object.create(null),Bi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Zt(i):e.type.props?i:a,e.attrs=a}function zi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=an(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Di(e.emitsOptions,o))continue;let u=t[o];if(c){if(y(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=se(o);i[t]=Vi(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Bi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!y(t,a)&&((r=le(a))===a||!y(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Vi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!y(t,e))&&(delete a[e],l=!0)}l&&gt(e.attrs,`set`,``)}function Bi(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(ie(c))continue;let l=t[c],u;i&&y(i,u=se(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Di(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=an(n),r=s||u;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Vi(i,t,s,r[s],e,!y(r,s))}}return o}function Vi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=y(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&w(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Ua(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===le(n))&&(r=!0))}return r}var Hi=new WeakMap;function Ui(e,t,n=!1){let r=n?Hi:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!w(e)){let r=e=>{c=!0;let[n,r]=Ui(e,t,!0);g(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return D(e)&&r.set(e,d),d;if(b(a))for(let e=0;e<a.length;e++){let t=se(a[e]);Wi(t)&&(o[t]=u)}else if(a)for(let e in a){let t=se(e);if(Wi(t)){let n=a[e],r=o[t]=b(n)||w(n)?{type:n}:g({},n),i=r.type,c=!1,l=!0;if(b(i))for(let e=0;e<i.length;++e){let t=i[e],n=w(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=w(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||y(r,`default`))&&s.push(t)}}let l=[o,s];return D(e)&&r.set(e,l),l}function Wi(e){return e[0]!==`$`&&!ie(e)}var Gi=e=>e===`_`||e===`_ctx`||e===`$stable`,Ki=e=>b(e)?e.map(ja):[ja(e)],qi=(e,t,n)=>{if(t._n)return t;let r=Kn((...e)=>Ki(t(...e)),n);return r._c=!1,r},Ji=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Gi(n))continue;let i=e[n];if(w(i))t[n]=qi(n,i,r);else if(i!=null){let e=Ki(i);t[n]=()=>e}}},Yi=(e,t)=>{let n=Ki(t);e.slots.default=()=>n},Xi=(e,t,n)=>{for(let r in t)(n||!Gi(r))&&(e[r]=t[r])},Zi=(e,t,n)=>{let r=e.slots=Ii();if(e.vnode.shapeFlag&32){let e=t._;e?(Xi(r,t,n),n&&me(r,`_`,e,!0)):Ji(t,r)}else t&&Yi(e,t)},Qi=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=u;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:Xi(i,t,n):(a=!t.$stable,Ji(t,i)),o=t}else t&&(Yi(e,t),o={default:1});if(a)for(let e in i)!Gi(e)&&o[e]==null&&delete i[e]},$i=da;function ea(e){return ta(e)}function ta(e,t){let n=_e();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=f,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ca(e,t)&&(r=ye(e),fe(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===d&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:f}=t;switch(l){case fa:y(e,t,n,r);break;case pa:b(e,t,n,r);break;case ma:e??x(t,n,r,o);break;case F:te(e,t,n,r,i,a,o,s,c);break;default:f&1?w(e,t,n,r,i,a,o,s,c):f&6?ne(e,t,n,r,i,a,o,s,c):(f&64||f&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?Tr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Tr(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=o(e.type,c,m&&m.is,m),h&8?p(d,e.children):h&16&&D(e.children,d,null,i,s,na(e,c),l,u),_&&Jn(e,null,i,`created`),E(d,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!ie(e)&&a(d,e,null,m[e],c,i);`value`in m&&a(d,`value`,null,m.value,c),(f=m.onVnodeBeforeMount)&&Fa(f,i,e)}_&&Jn(e,null,i,`beforeMount`);let v=ia(s,g);v&&g.beforeEnter(d),r(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&$i(()=>{try{f&&Fa(f,i,e),v&&g.enter(d),_&&Jn(e,null,i,`mounted`)}finally{}},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ua(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ma(e[l]):ja(e[l]);v(null,c,t,n,r,i,a,o,s)}},ee=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let m=e.props||u,h=t.props||u,g;if(n&&ra(n,!1),(g=h.onVnodeBeforeUpdate)&&Fa(g,n,t,e),f&&Jn(t,e,n,`beforeUpdate`),n&&ra(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(c,``),d?O(e.dynamicChildren,d,c,n,r,na(t,i),o):s||ce(e,t,c,null,n,r,na(t,i),o,!1),l>0){if(l&16)k(c,m,h,n,i);else if(l&2&&m.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,m.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&p(c,t.children)}else!s&&d==null&&k(c,m,h,n,i);((g=h.onVnodeUpdated)||f)&&$i(()=>{g&&Fa(g,n,t,e),f&&Jn(t,e,n,`updated`)},r)},O=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===F||!Ca(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},k=(e,t,n,r,i)=>{if(t!==n){if(t!==u)for(let o in t)!ie(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(ie(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},te=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(O(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&aa(e,t,!0)):ce(e,t,n,f,a,o,c,l,u)},ne=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):re(t,n,r,i,a,o,c):ae(e,t,c)},re=(e,t,n,r,i,a,o)=>{let s=e.component=Ra(e,r,i);if(Or(e)&&(s.ctx.renderer=Se),qa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,oe,o),!e.el){let r=s.subTree=z(pa);b(null,r,t,n),e.placeholder=r.el}}else oe(s,e,t,n,i,a,o)},ae=(e,t,n)=>{let r=t.component=e.component;if(ji(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,se(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},oe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=sa(e);if(n){t&&(t.el=c.el,se(e,t,o)),n.asyncDep.then(()=>{$i(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;ra(e,!1),t?(t.el=c.el,se(e,t,o)):t=c,n&&pe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Fa(d,s,t,c),ra(e,!0);let f=Oi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&Pi(e,f.el),r&&$i(r,i),(d=t.props&&t.props.onVnodeUpdated)&&$i(()=>Fa(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Dr(t);if(ra(e,!1),l&&pe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Fa(o,d,t),ra(e,!0),s&&we){let t=()=>{e.subTree=Oi(e),we(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Oi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&$i(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;$i(()=>Fa(o,d,e),i)}(t.shapeFlag&256||d&&Dr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&$i(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ve(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>In(u),ra(e,!0),l()},se=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,zi(e,t.props,r,n),Qi(e,t.children,n),it(),zn(e),at()},ce=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ue(l,d,n,r,i,a,o,s,c);return}if(f&256){le(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?ue(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&D(d,n,r,i,a,o,s,c))},le=(e,t,n,r,i,a,o,s,c)=>{e||=d,t||=d;let l=e.length,u=t.length,f=Math.min(l,u),p=0;for(;p<f;p++){let r=t[p]=c?Ma(t[p]):ja(t[p]);v(e[p],r,n,null,i,a,o,s,c)}l>u?ve(e,i,a,!0,!1,f):D(t,n,r,i,a,o,s,c,f)},ue=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,f=e.length-1,p=u-1;for(;l<=f&&l<=p;){let r=e[l],u=t[l]=c?Ma(t[l]):ja(t[l]);if(Ca(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=f&&l<=p;){let r=e[f],l=t[p]=c?Ma(t[p]):ja(t[p]);if(Ca(r,l))v(r,l,n,null,i,a,o,s,c);else break;f--,p--}if(l>f){if(l<=p){let e=p+1,d=e<u?t[e].el:r;for(;l<=p;)v(null,t[l]=c?Ma(t[l]):ja(t[l]),n,d,i,a,o,s,c),l++}}else if(l>p)for(;l<=f;)fe(e[l],i,a,!0),l++;else{let m=l,h=l,g=new Map;for(l=h;l<=p;l++){let e=t[l]=c?Ma(t[l]):ja(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=m;l<=f;l++){let r=e[l];if(y>=b){fe(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ca(r,t[_])){u=_;break}u===void 0?fe(r,i,a,!0):(C[u-h]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?oa(C):d;for(_=w.length-1,l=b-1;l>=0;l--){let e=h+l,d=t[e],f=t[e+1],p=e+1<u?f.el||la(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?de(d,n,p,2):_--)}}},de=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){de(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,Se);return}if(c===F){r(s,t,n);for(let e=0;e<u.length;e++)de(u[e],t,n,a);r(e.anchor,t,n);return}if(c===ma){S(e,t,n);return}if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[vr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),$i(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[vr];s._isLeaving&&s[vr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},fe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(it(),Tr(s,null,n,e,!0),at()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Dr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Fa(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Jn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==F||d>0&&d&64)?ve(l,t,n,!1,!0):(a===F&&d&384||!i&&u&16)&&ve(c,t,n),r&&me(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&$i(()=>{_&&Fa(_,t,e),h&&Jn(e,null,t,`unmounted`),v&&(e.el=null)},n)},me=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===F){he(n,r);return}if(t===ma){C(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ca(c),ca(l),r&&pe(r),i.stop(),a?(a.flags|=8,fe(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,fe(o,e,t,n)),s&&$i(s,t),$i(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)fe(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[ar];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(fe(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,zn(r),Bn(),!1)},Se={p:v,um:fe,m:de,r:me,mt:re,mc:D,pc:ce,pbc:O,n:ye,o:e},Ce,we;return t&&([Ce,we]=t(Se)),{render:xe,hydrate:Ce,createApp:xi(xe,Ce)}}function na({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function ra({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ia(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function aa(e,t,n=!1){let r=e.children,i=t.children;if(b(r)&&b(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ma(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&aa(t,a)),a.type===fa&&(a.patchFlag===-1&&(a=i[e]=Ma(a)),a.el=t.el),a.type===pa&&!a.el&&(a.el=t.el)}}function oa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function sa(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:sa(t)}function ca(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function la(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?la(t.subTree):null}var ua=e=>e.__isSuspense;function da(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Rn(e)}var F=Symbol.for(`v-fgt`),fa=Symbol.for(`v-txt`),pa=Symbol.for(`v-cmt`),ma=Symbol.for(`v-stc`),ha=[],ga=null;function I(e=!1){ha.push(ga=e?null:[])}function _a(){ha.pop(),ga=ha[ha.length-1]||null}var va=1;function ya(e,t=!1){va+=e,e<0&&ga&&t&&(ga.hasOnce=!0)}function ba(e){return e.dynamicChildren=va>0?ga||d:null,_a(),va>0&&ga&&ga.push(e),e}function L(e,t,n,r,i,a){return ba(R(e,t,n,r,i,a,!0))}function xa(e,t,n,r,i){return ba(z(e,t,n,r,i,!0))}function Sa(e){return e?e.__v_isVNode===!0:!1}function Ca(e,t){return e.type===t.type&&e.key===t.key}var wa=({key:e})=>e??null,Ta=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:T(e)||ln(e)||w(e)?{i:Un,r:e,k:t,f:!!n}:e);function R(e,t=null,n=null,r=0,i=null,a=e===F?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wa(t),ref:t&&Ta(t),scopeId:Wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Un};return s?(Na(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=T(n)?8:16),va>0&&!o&&ga&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ga.push(c),c}var z=Ea;function Ea(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===qr)&&(e=pa),Sa(e)){let r=Oa(e,t,!0);return n&&Na(r,n),va>0&&!a&&ga&&(r.shapeFlag&6?ga[ga.indexOf(e)]=r:ga.push(r)),r.patchFlag=-2,r}if(to(e)&&(e=e.__vccOpts),t){t=Da(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=Ce(e)),D(n)&&(rn(n)&&!b(n)&&(n=g({},n)),t.style=ve(n))}let o=T(e)?1:ua(e)?128:or(e)?64:D(e)?4:w(e)?2:0;return R(e,t,n,r,i,o,a,!0)}function Da(e){return e?rn(e)||Li(e)?g({},e):e:null}function Oa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Pa(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&wa(l),ref:t&&t.ref?n&&a?b(a)?a.concat(Ta(t)):[a,Ta(t)]:Ta(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==F?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Oa(e.ssContent),ssFallback:e.ssFallback&&Oa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&xr(u,c.clone(u)),u}function ka(e=` `,t=0){return z(fa,null,e,t)}function Aa(e=``,t=!1){return t?(I(),xa(pa,null,e)):z(pa,null,e)}function ja(e){return e==null||typeof e==`boolean`?z(pa):b(e)?z(F,null,e.slice()):Sa(e)?Ma(e):z(fa,null,String(e))}function Ma(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Oa(e)}function Na(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(b(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Na(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Li(t)?t._ctx=Un:r===3&&Un&&(Un.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(w(t)){if(r&65){Na(e,{default:t});return}t={default:t,_ctx:Un},n=32}else t=String(t),r&64?(n=16,t=[ka(t)]):n=8;e.children=t,e.shapeFlag|=n}function Pa(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=Ce([t.class,r.class]));else if(e===`style`)t.style=ve([t.style,r.style]);else if(m(e)){let n=t[e],i=r[e];i&&n!==i&&!(b(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!h(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Fa(e,t,n,r=null){wn(e,t,7,[n,r])}var Ia=yi(),La=0;function Ra(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Ia,a={uid:La++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Le(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ui(r,i),emitsOptions:Ei(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=wi.bind(null,a),e.ce&&e.ce(a),a}var za=null,Ba=()=>za||Un,Va,Ha;{let e=_e(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Va=t(`__VUE_INSTANCE_SETTERS__`,e=>za=e),Ha=t(`__VUE_SSR_SETTERS__`,e=>Ka=e)}var Ua=e=>{let t=za;return Va(e),e.scope.on(),()=>{e.scope.off(),Va(t)}},Wa=()=>{za&&za.scope.off(),Va(null)};function Ga(e){return e.vnode.shapeFlag&4}var Ka=!1;function qa(e,t=!1,n=!1){t&&Ha(t);let{props:r,children:i}=e.vnode,a=Ga(e);Ri(e,r,a,t),Zi(e,i,n||t);let o=a?Ja(e,t):void 0;return t&&Ha(!1),o}function Ja(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ni);let{setup:r}=n;if(r){it();let n=e.setupContext=r.length>1?Qa(e):null,i=Ua(e),a=Cn(r,e,0,[e.props,n]),o=ee(a);if(at(),i(),(o||e.sp)&&!Dr(e)&&Sr(e),o){if(a.then(Wa,Wa),t)return a.then(n=>{Ha(!0);try{Ya(e,n,t)}finally{Ha(!1)}}).catch(t=>{Tn(t,e,0)});e.asyncDep=a}else Ya(e,a,t)}else Xa(e,t)}function Ya(e,t,n){w(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:D(t)&&(e.setupState=mn(t)),Xa(e,n)}function Xa(e,t,n){let r=e.type;e.render||=r.render||f;{let t=Ua(e);it();try{ai(e)}finally{at(),t()}}}var Za={get(e,t){return ht(e,`get`,``),e[t]}};function Qa(e){return{attrs:new Proxy(e.attrs,Za),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function $a(e){return e.exposed?e.exposeProxy||=new Proxy(mn(on(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ei)return ei[n](e)},has(e,t){return t in e||t in ei}}):e.proxy}function eo(e,t=!0){return w(e)?e.displayName||e.name:e.name||t&&e.__name}function to(e){return w(e)&&`__vccOpts`in e}var no=(e,t)=>gn(e,t,Ka);function B(e,t,n){try{ya(-1);let r=arguments.length;return r===2?D(t)&&!b(t)?Sa(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sa(n)&&(n=[n]),z(e,t,n))}finally{ya(1)}}var ro=`3.5.43`,io=void 0,ao=typeof window<`u`&&window.trustedTypes;if(ao)try{io=ao.createPolicy(`vue`,{createHTML:e=>e})}catch{}var oo=io?e=>io.createHTML(e):e=>e,so=`http://www.w3.org/2000/svg`,co=`http://www.w3.org/1998/Math/MathML`,lo=typeof document<`u`?document:null,uo=lo&&lo.createElement(`template`),fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?lo.createElementNS(so,e):t===`mathml`?lo.createElementNS(co,e):n?lo.createElement(e,{is:n}):lo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>lo.createTextNode(e),createComment:e=>lo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{uo.innerHTML=oo(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=uo.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},po=Symbol(`_vtc`);function mo(e,t,n){let r=e[po];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ho=Symbol(`_vod`),go=Symbol(`_vsh`),_o={name:`show`,beforeMount(e,{value:t},{transition:n}){e[ho]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):vo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),vo(e,!0),r.enter(e)):r.leave(e,()=>{vo(e,!1)}):vo(e,t))},beforeUnmount(e,{value:t}){vo(e,t)}};function vo(e,t){e.style.display=t?e[ho]:`none`,e[go]=!t}var yo=Symbol(``),bo=/(?:^|;)\s*display\s*:/;function xo(e,t,n){let r=e.style,i=T(n),a=!1;if(n&&!i){if(t){if(T(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Co(r,t,``)}else for(let e in t)n[e]??Co(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Co(r,i,``):Do(e,i,!T(t)&&t?t[i]:void 0,o)||Co(r,i,o)}}else if(i){if(t!==n){let e=r[yo];e&&(n+=`;`+e),r.cssText=n,a=bo.test(n)}}else t&&e.removeAttribute(`style`);ho in e&&(e[ho]=a?r.display:``,e[go]&&(r.display=`none`))}var So=/\s*!important$/;function Co(e,t,n){if(b(n))n.forEach(n=>Co(e,t,n));else if(n??=``,t.startsWith(`--`))So.test(n)?e.setProperty(t,n.replace(So,``),`important`):e.setProperty(t,n);else{let r=Eo(e,t);So.test(n)?e.setProperty(le(r),n.replace(So,``),`important`):e[r]=n}}var wo=[`Webkit`,`Moz`,`ms`],To={};function Eo(e,t){let n=To[t];if(n)return n;let r=se(t);if(r!==`filter`&&r in e)return To[t]=r;r=ue(r);for(let n=0;n<wo.length;n++){let i=wo[n]+r;if(i in e)return To[t]=i}return t}function Do(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&T(r)&&n===r}var Oo=`http://www.w3.org/1999/xlink`;function ko(e,t,n,r,i,a=Te(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Oo,t.slice(6,t.length)):e.setAttributeNS(Oo,t,n):n==null||a&&!Ee(n)?e.removeAttribute(t):e.setAttribute(t,a?``:E(n)?String(n):n)}function Ao(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?oo(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Ee(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function jo(e,t,n,r){e.addEventListener(t,n,r)}function Mo(e,t,n,r){e.removeEventListener(t,n,r)}var No=Symbol(`_vei`);function Po(e,t,n,r,i=null){let a=e[No]||(e[No]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Lo(t);r?jo(e,n,a[t]=Vo(r,i),s):o&&(Mo(e,n,o,s),a[t]=void 0)}}var Fo=/(Once|Passive|Capture)$/,Io=/^on:?(?:Once|Passive|Capture)$/;function Lo(e){let t,n;for(;(n=e.match(Fo))&&!Io.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):le(e.slice(2)),t]}var Ro=0,zo=Promise.resolve(),Bo=()=>Ro||=(zo.then(()=>Ro=0),Date.now());function Vo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(b(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&wn(e,t,5,a)}}else wn(r,t,5,[e])};return n.value=e,n.attached=Bo(),n}var Ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Uo=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?mo(e,r,o):t===`style`?xo(e,n,r):m(t)?h(t)||Po(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Wo(e,t,r,o))?(Ao(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&ko(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Go(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!T(r)))?Ao(e,se(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),ko(e,t,r,o))};function Wo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Ho(t)&&w(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Ho(t)&&T(n)?!1:t in e}function Go(e,t){let n=e._def.props;if(!n)return!1;let r=se(t);return Array.isArray(n)?n.some(e=>se(e)===r):Object.keys(n).some(e=>se(e)===r)}var Ko=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return b(t)?e=>pe(t,e):t};function qo(e){e.target.composing=!0}function Jo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Yo=Symbol(`_assign`),Xo=Symbol(`_initialValue`);function Zo(e,t,n){return t&&(e=e.trim()),n&&(e=he(e)),e}var Qo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[Xo]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[Xo]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Yo]=Ko(i);let a=r||i.props&&i.props.type===`number`;jo(e,t?`change`:`input`,t=>{t.target.composing||e[Yo](Zo(e.value,n,a))}),(n||a)&&jo(e,`change`,()=>{e.value=Zo(e.value,n,a)}),t||(jo(e,`compositionstart`,qo),jo(e,`compositionend`,Jo),jo(e,`change`,Jo))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[Xo];delete e[Xo],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[Yo](Zo(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[Yo]=Ko(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?he(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},$o={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,jo(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?he(ns(e)):ns(e)),r=e.multiple,i=r?S(e._modelValue)?new Set(t):t:t[0],a=e._pendingValue=[r,r?b(i)?t.slice():t:i];try{e[Yo](i)}finally{Pn(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[Yo]=Ko(r)},mounted(e,{value:t}){ts(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Yo]=Ko(n)},updated(e,{value:t}){let n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!es(t,n[1],n[0]))&&ts(e,t)}};function es(e,t,n){if(!n||b(e))return je(e,t);if(S(e)){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}return!1}function ts(e,t){let n=e.multiple,r=b(t);if(!n||r||S(t)){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=ns(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):Me(t,o)>-1}else a.selected=t.has(o)}else if(je(ns(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ns(e){return`_value`in e?e._value:e.value}var rs=[`ctrl`,`shift`,`alt`,`meta`],is={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>rs.some(n=>e[`${n}Key`]&&!t.includes(n))},as=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=is[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},os=g({patchProp:Uo},fo),ss;function cs(){return ss||=ea(os)}var ls=((...e)=>{let t=cs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ds(e);if(!r)return;let i=t._component;!w(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,us(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function us(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ds(e){return T(e)?document.querySelector(e):e}var fs=`<script setup lang="ts">
/**
 * 示例 01-basic-chain（spec §11.5）。
 *
 * 演示点：链式调用最小链路 + 直接挂载内置微件（MapToolbar / LayerTree / Legend）。
 * 内置微件自带默认 UI、默认位置、可拖拽（默认开）；图例与图层树自动同步。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  MapToolbar,
  LayerTree,
  Legend,
  type MapEngine,
  type PopupData
} from 'geo-flow'
import { stations } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

onMounted(() => {
  engine.value = createMapEngine({
    target: mapEl.value!,
    popupEl: popupEl.value!
  })

  engine.value
    .baseLayer('basemap.osm')
    .control('attribution')
    .control('scale')
    .layer({
      id: 'stations',
      name: '监测站',
      zIndex: 10,
      provider: { type: 'raw', config: { data: stations } },
      style: {
        mode: 'categorical',
        colorField: 'level',
        palette: 'semantic',
        radius: 7,
        fillOpacity: 0.85
      },
      popup: { titleField: 'name', contentFields: ['name', 'level', 'risk', 'value'] },
      interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
    })
    .run('monitor', {})

  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })

  ;(window as any).__geoFlow = () => engine.value
})

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 01 · 链式调用 + 内置微件</span>
      <span class="app__hint">点击站点看详情 · 微件可拖拽 · 控制台 <code>window.__geoFlow()</code></span>
    </header>

    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>

      <!-- 内置微件：默认 UI + 默认位置 + 可拖拽 -->
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />

      <!-- Popup（OL Overlay 挂载点，由模板渲染内容） -->
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,ps=`<script setup lang="ts">
/**
 * 示例 02-anonymous-layer（spec §11.5）。
 *
 * 演示点：匿名图层 JSON 注册（layers 直接注入 engine.run）+ 内置微件挂载。
 * 点/面/线多几何同图；右下角用 BaseWidget 外壳承载自定义「图层配置 JSON」面板，
 * 同样可拖拽，演示内置外壳可承载任意自定义内容。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  MapToolbar,
  LayerTree,
  Legend,
  StatPanel,
  BaseWidget,
  type MapEngine,
  type PopupData,
  type LayerConfigJSON
} from 'geo-flow'
import { stations, bays, route } from './data'

/* —— 匿名图层 JSON：纯声明，直接喂给 engine.run —— */
const layerConfigs: LayerConfigJSON[] = [
  {
    id: 'bays',
    name: '海湾范围',
    zIndex: 10,
    provider: { type: 'raw', config: { data: bays } },
    style: { mode: 'single', color: '#1976d2', fillOpacity: 0.12, width: 1.5 },
    interaction: { cursor: true }
  },
  {
    id: 'route',
    name: '巡测航线',
    zIndex: 15,
    provider: { type: 'raw', config: { data: route } },
    style: { mode: 'single', color: '#f59e0b', width: 3 },
    interaction: { cursor: true }
  },
  {
    id: 'stations',
    name: '监测站',
    zIndex: 20,
    provider: { type: 'raw', config: { data: stations } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 7, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk', 'value'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  }
]

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
const showConfig = ref(true)

const configText = JSON.stringify(layerConfigs, null, 2)

onMounted(() => {
  engine.value = createMapEngine({
    target: mapEl.value!,
    popupEl: popupEl.value!
  })

  engine.value
    .baseLayer('basemap.osm')
    // .control('attribution')
    // .control('scale')

  // 匿名图层注入：把 JSON 配置数组直接交给 run
  engine.value.run('monitor', {}, layerConfigs)

  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })

  ;(window as any).__geoFlow = () => engine.value
})

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 02 · 匿名图层 JSON 注册 + 内置微件</span>
      <span class="app__hint">图层由 JSON 注入 · 图例随图层显隐同步 · 控制台 <code>window.__geoFlow()</code></span>
    </header>

    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>

      <!-- 内置微件 -->
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <StatPanel :engine="engine" position="top-right" :draggable="true" title="统计" />

      <!-- 自定义内容承载于 BaseWidget 外壳：同样可拖拽 -->
      <BaseWidget
        v-if="showConfig"
        position="bottom-right"
        title="图层配置 JSON"
        closable
        @close="showConfig = false"
      >
        <pre class="cfg-code">{{ configText }}</pre>
      </BaseWidget>
      <button v-else class="cfg-reopen" @click="showConfig = true">显示图层 JSON</button>

      <!-- Popup -->
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cfg-code {
  margin: 0;
  max-height: 40vh;
  overflow: auto;
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 10.5px;
  line-height: 1.45;
  color: #334155;
  white-space: pre;
  min-width: 240px;
}
.cfg-reopen {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 20;
  border: 1px solid #e2e8f0;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.96);
  color: #334155;
  font-size: 12px;
  padding: 6px 10px;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.18);
}
.cfg-reopen:hover { border-color: #93c5fd; color: #1976d2; }
</style>
`,ms=`<script setup lang="ts">
/**
 * 示例 03-predefined-layer（spec §11.5）。
 *
 * 覆盖能力点：业务图层类继承预定义 —— \`class AlarmLayer extends VectorLayerBase\`，
 * 子类内置流水线（buildPipeline）在 MapEngine.attachLayer 中组装并注册。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  VectorLayerBase,
  MapToolbar,
  LayerTree,
  Legend,
  type MapEngine,
  type PopupData,
  type LayerConfigJSON
} from 'geo-flow'
import { alarms } from './data'

/**
 * 告警图层：继承 VectorLayerBase，构造时声明 cfg（含 processors / style / popup / interaction）。
 * 内置流水线由 buildPipeline（基类）组装，业务子类只负责声明配置。
 */
class AlarmLayer extends VectorLayerBase {
  readonly id = 'alarms'
  constructor() {
    super({
      id: 'alarms',
      name: '告警站',
      zIndex: 10,
      provider: { type: 'raw', config: { data: alarms } },
      style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
      popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
      interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
    } as LayerConfigJSON)
  }
}

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')

  // 业务图层子类实例：attachLayer 调 buildPipeline 组装流水线 + 注册
  engine.value.attachLayer(new AlarmLayer())

  engine.value.run('alarm', {})

  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })
  ;(window as any).__geoFlow = () => engine.value
})

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 03 · 业务图层类继承预定义</span>
      <span class="app__hint"><code>class AlarmLayer extends VectorLayerBase</code></span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,hs=`<script setup lang="ts">
/**
 * 示例 04-external-config（spec §11.5）。
 *
 * 覆盖能力点：主组件外部配置引擎 —— 业务 Vue 组件只负责把一份 MapConfigJSON
 * 喂给 engine.fromJSON，图层 / 底图 / 控件完全外部声明（声明式 JSON）。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  type MapEngine,
  type PopupData,
  type MapConfigJSON
} from 'geo-flow'
import { alarms } from '../03-predefined-layer/data'

/** 完全外部声明的地图配置 JSON（可来自后端 / 文件 / 可视化编排导出） */
const mapConfig: MapConfigJSON = {
  version: '2.0.0',
  name: 'external-config-demo',
  baseLayers: [{ id: 'basemap.osm' }],
  controls: [{ id: 'attribution' }, { id: 'scale' }],
  layers: [
    {
      id: 'alarms',
      name: '告警站',
      zIndex: 10,
      provider: { type: 'raw', config: { data: alarms } },
      style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
      popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
      interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
    }
  ]
}
const configText = JSON.stringify(mapConfig, null, 2)
const showConfig = ref(true)

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  // 外部 JSON 一次性注入：底图 + 控件 + 图层
  engine.value.fromJSON(mapConfig)
  engine.value.run('alarm', {})
  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })
  ;(window as any).__geoFlow = () => engine.value
})

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 04 · 外部 JSON 配置引擎</span>
      <span class="app__hint"><code>engine.fromJSON(mapConfig)</code> · 底图/控件/图层全外部声明</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget v-if="showConfig" position="bottom-right" title="地图配置 JSON" closable @close="showConfig = false">
        <pre class="cfg-code">{{ configText }}</pre>
      </BaseWidget>
      <button v-else class="cfg-reopen" @click="showConfig = true">显示配置 JSON</button>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cfg-code { margin: 0; max-height: 40vh; overflow: auto; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 10.5px; line-height: 1.45; color: #334155; white-space: pre; min-width: 240px; }
.cfg-reopen { position: absolute; bottom: 12px; right: 12px; z-index: 20; border: 1px solid #e2e8f0; border-radius: 7px; background: rgba(255,255,255,0.96); color: #334155; font-size: 12px; padding: 6px 10px; cursor: pointer; box-shadow: 0 4px 18px rgba(15,23,42,0.18); }
</style>
`,gs=`<script setup lang="ts">
/**
 * 示例 05-expression-style（spec §11.5）。
 *
 * 覆盖能力点：链式 / 匿名函数 / 表达式 三种参数风格对比演示。
 * 同一图层，通过下拉切换 radius 参数形态：
 *   - 常量：\`radius: 7\`
 *   - 表达式：\`radius: '\${f.risk * 8 + 4}'\`（白名单 $feature 求值）
 *   - 函数：\`radius: (f) => f.get('risk') * 8 + 4\`（闭包，10k 热路径）
 * 常量 = 均匀大小；表达式/函数 = 按 risk 大小变化（命中 StyleCacheManager 复用）。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  type MapEngine,
  type PopupData,
  type LayerConfigJSON,
  type LayerEngine
} from 'geo-flow'
import { stations } from '../01-basic-chain/data'

type RadiusStyle = { label: string; radius: any }
const RADIUS_STYLES: RadiusStyle[] = [
  { label: '常量 radius=7', radius: 7 },
  { label: "表达式 '\${f.risk*8+4}'", radius: '\${f.risk * 8 + 4}' },
  { label: '函数 (f)=>…', radius: (f: any) => f.get('risk') * 8 + 4 }
]
const current = ref(0)

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null

const baseCfg: LayerConfigJSON = {
  id: 'stations',
  name: '监测站',
  zIndex: 10,
  provider: { type: 'raw', config: { data: stations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 7, fillOpacity: 0.85 },
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer(baseCfg)
  engine.value.run('monitor', {})
  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })
  ;(window as any).__geoFlow = () => engine.value
})

function switchStyle(i: number) {
  current.value = i
  if (!layerEngine) return
  layerEngine.updateConfig({
    ...baseCfg,
    style: { ...baseCfg.style!, radius: RADIUS_STYLES[i].radius }
  })
  layerEngine.restart()
}

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 05 · 表达式/函数/常量三态参数</span>
      <span class="app__hint">切换 radius 参数风格 · updateConfig + restart 热更新</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="radius 参数风格">
        <div class="ex-style">
          <button
            v-for="(s, i) in RADIUS_STYLES"
            :key="i"
            class="ex-style__btn"
            :class="{ 'ex-style__btn--active': current === i }"
            @click="switchStyle(i)"
          >{{ s.label }}</button>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ex-style { display: flex; flex-direction: column; gap: 6px; min-width: 200px; }
.ex-style__btn { border: 1px solid #e2e8f0; border-radius: 7px; background: #fff; color: #334155; font-size: 12px; padding: 6px 8px; cursor: pointer; text-align: left; font-family: 'SFMono-Regular', Consolas, monospace; }
.ex-style__btn:hover { border-color: #93c5fd; color: #1976d2; }
.ex-style__btn--active { border-color: #1976d2; color: #1976d2; background: #eef4fb; }
</style>
`,_s=`<script setup lang="ts">
/**
 * 示例 06-processors-all（spec §11.5）。
 *
 * 覆盖能力点：逐个演示 7 个内置 processor（filter / geojson / mapping / projection /
 * simplify / buffer / aggregate）。下拉选择某 processor，updateConfig + restart 热更新，
 * 面板显示当前要素数（部分 processor 有可见变化：filter 减少 / buffer 点→面 / aggregate 分组质心）。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, computed } from 'vue'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  useProcessor,
  type MapEngine,
  type PopupData,
  type LayerConfigJSON,
  type LayerEngine
} from 'geo-flow'
import { stations } from '../01-basic-chain/data'

interface ProcOpt { label: string; build: () => any[] }
const PROCESSORS: (ProcOpt & { note: string })[] = [
  { label: '无', note: '原始 8 个监测站点', build: () => [] },
  { label: 'filter（仅 高）', note: '按 level=高 过滤，剩 2 个', build: () => [useProcessor('filter', { field: 'level', op: '=', value: '高' })] },
  { label: 'geojson（校验+扫描）', note: '校验/标准化/字段扫描（无可见变化）', build: () => [useProcessor('geojson', {})] },
  { label: 'mapping（新增 riskLabel）', note: '字段映射：riskLabel ← level', build: () => [useProcessor('field-map', { mapping: { riskLabel: 'level' } })] },
  { label: 'projection（4326 no-op）', note: '投影转换（4326→3857 由 applyToMap 承担，no-op）', build: () => [useProcessor('projection', {})] },
  { label: 'simplify（点 no-op）', note: '几何简化（点几何无简化效果）', build: () => [useProcessor('simplify', { tolerance: 0.001 })] },
  { label: 'buffer（半径 1000m）', note: 'Turf 缓冲区：点→面（8 个圆面）', build: () => [useProcessor('buffer', { radius: 1000 })] },
  { label: 'aggregate（按 level 分组）', note: '聚合质心：3 个分组点 + avgRisk', build: () => [useProcessor('aggregate', { groupBy: 'level', stats: [{ field: 'risk', as: 'avgRisk', fn: 'avg' }] })] }
]
const current = ref(0)
const note = computed(() => PROCESSORS[current.value].note)

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null

const baseCfg: LayerConfigJSON = {
  id: 'stations',
  name: '监测站',
  zIndex: 10,
  provider: { type: 'raw', config: { data: stations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 7, fillOpacity: 0.85 },
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk', 'avgRisk', 'count'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer(baseCfg)
  engine.value.run('monitor', {})
  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })
  ;(window as any).__geoFlow = () => engine.value
})

function switchProc(i: number) {
  current.value = i
  if (!layerEngine) return
  layerEngine.updateConfig({ ...baseCfg, processors: PROCESSORS[i].build() })
  layerEngine.restart()
}

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 06 · 内置数据处理器</span>
      <span class="app__hint">7 个 processor 逐个演示 · updateConfig + restart</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="数据处理器">
        <div class="proc">
          <select class="proc__select" @change="switchProc(($event.target as HTMLSelectElement).selectedIndex)">
            <option v-for="(p, i) in PROCESSORS" :key="i" :selected="i === current">{{ p.label }}</option>
          </select>
          <div class="proc__note">{{ note }}</div>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proc { display: flex; flex-direction: column; gap: 6px; min-width: 210px; }
.proc__select { height: 30px; border: 1px solid #e2e8f0; border-radius: 7px; background: #fff; color: #334155; font-size: 12px; padding: 0 6px; cursor: pointer; }
.proc__note { font-size: 11px; color: #64748b; line-height: 1.5; }
</style>
`,vs=`<script setup lang="ts">
/**
 * 示例 07-effects-all（spec §11.5）。
 *
 * 覆盖能力点：逐个演示 5 个内置 effect（ripple / pulse / wave / breathing / carousel）。
 * 下拉选择某 effect，updateConfig({effects}) + restart 热重挂载；前 4 个作用于 level=高 的站点，
 * carousel 轮流高亮全部站点。控制器经 layer.get('carouselController') 取用。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  useEffect,
  type MapEngine,
  type PopupData,
  type LayerConfigJSON,
  type LayerEngine
} from 'geo-flow'
import { stations } from '../01-basic-chain/data'

interface EffectOpt { label: string; build: () => any[] }
const EFFECTS: EffectOpt[] = [
  { label: '无', build: () => [] },
  { label: 'ripple（多环扩散）', build: () => [useEffect('ripple', { color: '#ff5c5c', period: 3000, rings: 3, conditionField: 'level', conditionValue: '高' })] },
  { label: 'pulse（点跳跃）', build: () => [useEffect('pulse', { color: '#ffd666', period: 1200, conditionField: 'level', conditionValue: '高' })] },
  { label: 'wave（涟漪）', build: () => [useEffect('wave', { color: '#36cbcb', period: 1800, rings: 3, conditionField: 'level', conditionValue: '高' })] },
  { label: 'breathing（呼吸灯）', build: () => [useEffect('breathing', { color: '#4f8cff', period: 1600, conditionField: 'level', conditionValue: '高' })] },
  { label: 'carousel（轮流高亮）', build: () => [useEffect('carousel', { interval: 1500, autoStart: true, pauseOnHover: true, pauseOnUserInteract: true })] }
]
const current = ref(0)

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null

const baseCfg: LayerConfigJSON = {
  id: 'stations',
  name: '监测站',
  zIndex: 10,
  provider: { type: 'raw', config: { data: stations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer(baseCfg)
  engine.value.run('monitor', {})
  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })
  ;(window as any).__geoFlow = () => engine.value
})

function switchEffect(i: number) {
  current.value = i
  if (!layerEngine) return
  layerEngine.updateConfig({ ...baseCfg, effects: EFFECTS[i].build() })
  layerEngine.restart()
}

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 07 · 内置效果</span>
      <span class="app__hint">5 个 effect 逐个演示 · updateConfig + restart 重挂载</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="地图效果">
        <select class="efc__select" @change="switchEffect(($event.target as HTMLSelectElement).selectedIndex)">
          <option v-for="(e, i) in EFFECTS" :key="i" :selected="i === current">{{ e.label }}</option>
        </select>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.efc__select { height: 30px; border: 1px solid #e2e8f0; border-radius: 7px; background: #fff; color: #334155; font-size: 12px; padding: 0 6px; cursor: pointer; min-width: 180px; }
</style>
`,ys=`<script setup lang="ts">
/**
 * 示例 08-carousel-popup（spec §11.5）· 轮播高亮 + 弹框防叠盖联动。
 *
 * 两件事同时演示：
 * ① 轮播（carousel）：useCarouselEffect 轮流把要素置为高亮（layer.set('selectedId')），
 *    onEnter 开弹框 / onLeave 关弹框，控制器经 layer.get('carouselController') 取用。
 * ② 弹框防叠盖（spec §8.3.3/§8.3.4/§8.3.2）：
 *    PopupManager 全局登记多张卡 → PopupLayoutSolver 求解落位（重叠最小位移推开）
 *    → AnchorPicker 选侧 → LeaderLineDrawer 画引线；卡片可拖拽（lockPosition 锁定不被推开）。
 *
 * 注意：本示例**不走** MapEngine.popupBridge（单例弹框，永远只有一张卡 → 无叠盖可解），
 * 直接驱动 popupManager + leaderLineDrawer，让防叠盖算法真正跑起来并可见。
 */
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { fromLonLat } from 'ol/proj'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  useEffect,
  popupManager,
  leaderLineDrawer,
  type MapEngine
} from 'geo-flow'
import { styledStations } from '../style/data'

const mapEl = ref<HTMLDivElement>()
const engine = shallowRef<MapEngine | null>(null)

const interval = ref(1200)
const carouselState = ref('idle')
const currentIndex = ref(-1)
const openCount = ref(0)
/** 引线风格（bezier/polyline/straight），面板可切换即时重绘 */
const leaderStyle = ref<'bezier' | 'polyline' | 'straight'>('bezier')

interface CardVM {
  id: string
  title: string
  rows: { label: string; value: any }[]
  anchor: [number, number]
  offset: { x: number; y: number }
  side: string
  locked: boolean
}

const cardList = ref<CardVM[]>([])
const pathList = ref<{ id: string; d: string }[]>([])

/** 卡片宽高（与 openCard size 一致；leaderEnd 拖拽时本地派生用） */
const CW = 188
const CH = 96

/** 由 side + offset + size 派生引线终点（卡片锚边中点），拖拽中本地重算 path 用 */
function leaderEndOf(side: string, off: { x: number; y: number }): [number, number] {
  switch (side) {
    case 'right': return [off.x, off.y + CH / 2]
    case 'left': return [off.x + CW, off.y + CH / 2]
    case 'top': return [off.x + CW / 2, off.y + CH]
    case 'bottom': return [off.x + CW / 2, off.y]
    default: return [off.x, off.y + CH / 2]
  }
}

/** 从 PopupManager 拉取活跃卡 + 布局结果，刷新视图 */
function refresh() {
  const list = popupManager.list()
  openCount.value = list.length
  const vm: Record<string, CardVM> = {}
  const paths: { id: string; d: string }[] = []
  for (const c of list) {
    const layout = popupManager.getLayout(c.id)
    if (!layout) continue
    const rows: { label: string; value: any }[] = c.content?.rows ?? []
    vm[c.id] = {
      id: c.id,
      title: c.content?.title ?? c.id,
      rows,
      anchor: c.anchorScreen,
      offset: layout.offset,
      side: layout.side,
      locked: !!c.locked
    }
    paths.push({
      id: c.id,
      d: leaderLineDrawer.toPath(
        { start: c.anchorScreen, end: layout.leaderEnd },
        { style: leaderStyle.value, color: '#94a3b8', width: 1.5, arrow: true }
      )
    })
  }
  cardList.value = Object.values(vm)
  pathList.value = paths
}

/** 视图变化：重算所有卡片锚点屏幕坐标（保留 locked） */
function syncAnchors() {
  const anchors = new Map<string, [number, number]>()
  for (const c of popupManager.list()) {
    const g = c.feature?.geometry
    if (!g) continue
    // feature 是 GeoJSON，coordinates 为 4326 → 转 3857 再求像素
    const px = engine.value?.map.getPixelFromCoordinate(fromLonLat(g.coordinates))
    if (px) anchors.set(c.id, [px[0], px[1]])
  }
  if (anchors.size) popupManager.updateAnchors(anchors)
  refresh()
}

function openCard(f: any) {
  // f 是标准 GeoJSON Feature（useCarouselEffect.toGeoJSONFeature 或 styledStations），
  // geometry.coordinates 为 4326 [lng,lat]；OL getPixelFromCoordinate 需 3857 → fromLonLat 转换。
  const coord = f.geometry?.coordinates ?? []
  const px = engine.value?.map.getPixelFromCoordinate(fromLonLat(coord))
  popupManager.open({
    id: 'card-' + f.properties.id,
    feature: f,
    anchorScreen: px ? [px[0], px[1]] : [0, 0],
    size: { width: 188, height: 96 },
    content: {
      title: String(f.properties.name ?? '详情'),
      rows: [
        { label: '等级', value: String(f.properties.level ?? '—') },
        { label: '风险', value: Number(f.properties.risk).toFixed(2) },
        { label: '类型', value: String(f.properties.type ?? '—') }
      ]
    }
  })
  refresh()
}

function closeCard(id: string) {
  popupManager.close(id)
  refresh()
}

function openAll() {
  popupManager.setViewport({ width: mapEl.value!.clientWidth, height: mapEl.value!.clientHeight })
  styledStations.features.forEach(openCard)
}

function closeAll() {
  popupManager.list().map((c) => c.id).forEach((id) => popupManager.close(id))
  refresh()
}

function unlockAll() {
  popupManager.list().forEach((c) => popupManager.unlockPosition(c.id))
  refresh()
}

/* ---------------- 拖拽移动（本地即时跟随，松开 lockPosition 固化到 solver） ---------------- */
let dragId: string | null = null
let dragFrom = { x: 0, y: 0 }
let dragBaseOffset = { x: 0, y: 0 }

function startDrag(c: CardVM, e: MouseEvent) {
  if (!(e.target as HTMLElement).dataset.drag) return
  e.preventDefault()
  dragId = c.id
  dragFrom = { x: e.clientX, y: e.clientY }
  dragBaseOffset = { ...c.offset }
  document.addEventListener('mousemove', onDragMove)
  document.addEventListener('mouseup', endDrag)
}
function onDragMove(e: MouseEvent) {
  if (!dragId) return
  const dx = e.clientX - dragFrom.x
  const dy = e.clientY - dragFrom.y
  const newOff = { x: dragBaseOffset.x + dx, y: dragBaseOffset.y + dy }
  // 本地即时更新该卡 offset（transform 立即跟随，不依赖 solver relayout）
  const list = cardList.value.slice()
  const i = list.findIndex((c) => c.id === dragId)
  if (i < 0) return
  const card = { ...list[i], offset: newOff }
  list[i] = card
  cardList.value = list
  // 引线 path 同步重算（leaderEnd 由 side + newOff 本地派生）
  const paths = pathList.value.slice()
  const pi = paths.findIndex((p) => p.id === dragId)
  if (pi >= 0) {
    const end = leaderEndOf(card.side, newOff)
    paths[pi] = {
      id: dragId,
      d: leaderLineDrawer.toPath(
        { start: card.anchor, end },
        { style: leaderStyle.value, color: '#94a3b8', width: 1.5, arrow: true }
      )
    }
    pathList.value = paths
  }
}
function endDrag() {
  if (dragId) {
    // 松开：把最终位置固化到 solver（lockPosition 锁定，后续 relayout 不再覆盖该卡）
    const c = cardList.value.find((x) => x.id === dragId)
    if (c) popupManager.lockPosition(dragId, c.offset)
  }
  dragId = null
  document.removeEventListener('mousemove', onDragMove)
  document.removeEventListener('mouseup', endDrag)
}

function applyInterval() {
  const le = (engine.value as any)?.engines.get('stations')
  le?.updateConfig({
    id: 'stations',
    name: '监测站',
    zIndex: 10,
    provider: { type: 'raw', config: { data: styledStations } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 9, fillOpacity: 0.85 },
    effects: [
      useEffect('carousel', {
        interval: interval.value,
        autoStart: true,
        onEnter: openCard,
        onLeave: (f: any) => closeCard('card-' + f.properties.id)
      })
    ]
  })
  le?.restart()
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value! }) // 不传 popupEl：弹框完全由 popupManager 布局
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')

  engine.value.layer({
    id: 'stations',
    name: '监测站',
    zIndex: 10,
    provider: { type: 'raw', config: { data: styledStations } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 9, fillOpacity: 0.85 },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true },
    effects: [
      useEffect('carousel', {
        interval: interval.value,
        autoStart: true,
        // 轮播驱动弹框：进入开卡 / 离开关卡
        onEnter: openCard,
        onLeave: (f: any) => closeCard('card-' + f.properties.id)
      })
    ]
  })
  engine.value.run('carousel', {})

  // 暴露控制器，便于控制台调 start/pause/resume/stop/goto
  const layer = (engine.value as any).engines.get('stations')?.layer
  const controller = layer?.get?.('carouselController')
  if (controller) {
    const t = setInterval(() => {
      carouselState.value = controller.state
      currentIndex.value = controller.currentIndex
    }, 200)
    ;(window as any).__carousel = controller
    ;(window as any).__carouselTimer = t
  }

  // popupManager 生命周期 → 刷新视图
  popupManager.setViewport({ width: mapEl.value!.clientWidth, height: mapEl.value!.clientHeight })
  popupManager.on(refresh)
  // 缩放/平移过程中实时跟随（rAF 节流避免过频）；moveend 做最终精确
  const view = engine.value.map.getView()
  engine.value.map.on('pointerdrag', scheduleSync)
  view.on('change:resolution', scheduleSync)
  engine.value.map.on('moveend', syncAnchors)
  engine.value.map.on('resize', syncAnchors)
  window.addEventListener('resize', onWinResize)
})

/** rAF 节流：缩放/拖拽过程中每帧最多重算一次锚点 + 重排 + 重绘引线 */
let syncRaf: number | null = null
function scheduleSync() {
  if (syncRaf != null) return
  syncRaf = requestAnimationFrame(() => {
    syncRaf = null
    syncAnchors()
  })
}

function onWinResize() {
  if (!mapEl.value) return
  popupManager.setViewport({ width: mapEl.value.clientWidth, height: mapEl.value.clientHeight })
  syncAnchors()
}

onUnmounted(() => {
  popupManager.list().map((c) => c.id).forEach((id) => popupManager.close(id))
  ;(window as any).__carouselTimer && clearInterval((window as any).__carouselTimer)
  window.removeEventListener('resize', onWinResize)
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 08 · 轮播高亮 + 弹框防叠盖</span>
      <span class="app__hint">carousel 轮流高亮并开/关弹框 · 多点同时弹框由 PopupLayoutSolver 推开 · 卡片可拖拽锁定</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />

      <BaseWidget position="bottom-right" title="轮播 / 弹框控制">
        <div class="pc">
          <div class="pc__row">
            <label>interval</label>
            <input type="range" min="500" max="4000" step="100" v-model.number="interval" />
            <span>{{ interval }}ms</span>
          </div>
          <div class="pc__row">
            <label>引线风格</label>
            <select v-model="leaderStyle" @change="refresh">
              <option value="bezier">贝塞尔曲线</option>
              <option value="polyline">折线（斜出+横竖到达）</option>
              <option value="straight">直线</option>
            </select>
          </div>
          <div class="pc__stat">
            轮播：{{ carouselState }} · 第 {{ currentIndex + 1 }} 站 · 活跃弹框 {{ openCount }}
          </div>
          <div class="pc__btns">
            <button @click="applyInterval">应用 interval</button>
            <button @click="openAll">打开全部弹框（防叠盖）</button>
            <button @click="closeAll">关闭全部</button>
            <button @click="unlockAll">解锁/复位</button>
          </div>
          <div class="pc__tip">拖拽卡片标题栏即时跟随 · 松开 lockPosition 锁定（求解器不再覆盖） · 引线斜出+横/竖到达</div>
        </div>
      </BaseWidget>

      <!-- 弹框层：SVG 引线 + 绝对定位卡片，位置由 PopupLayoutSolver 给出 -->
      <div class="gf-popups">
        <svg class="gf-popups__svg"><path v-for="p in pathList" :key="p.id" :d="p.d" /></svg>
        <div
          v-for="c in cardList"
          :key="c.id"
          class="gf-card"
          :class="{ 'gf-card--locked': c.locked }"
          :style="{ transform: \`translate(\${c.offset.x}px, \${c.offset.y}px)\` }"
          @mousedown="startDrag(c, $event)"
        >
          <div class="gf-card__head" data-drag="1">
            {{ c.title }}
            <button class="gf-card__x" @click.stop="closeCard(c.id)">×</button>
          </div>
          <div v-for="(r, i) in c.rows" :key="i" class="gf-card__row">
            <span>{{ r.label }}</span><b>{{ r.value }}</b>
          </div>
          <div class="gf-card__side">side: {{ c.side }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pc {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 280px;
}
.pc__row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #64748b;
}
.pc__row input {
  flex: 1;
}
.pc__row select {
  flex: 1;
  height: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 11px;
}
.pc__stat {
  font-size: 11px;
  color: #334155;
}
.pc__btns {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.pc__btns button {
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background: #fff;
  color: #334155;
  font-size: 11px;
  padding: 4px 7px;
  cursor: pointer;
}
.pc__btns button:hover {
  border-color: #93c5fd;
  color: #1976d2;
}
.pc__tip {
  font-size: 10px;
  color: #94a3b8;
  line-height: 1.5;
}
.gf-popups {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.gf-popups__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.gf-popups__svg path {
  fill: none;
  stroke: #94a3b8;
  stroke-width: 1.5;
}
.gf-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 188px;
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);
  font-size: 11px;
  color: #334155;
  pointer-events: auto;
}
.gf-card--locked {
  border-color: #f59e0b;
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.22), 0 8px 24px rgba(15, 23, 42, 0.18);
}
.gf-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  background: #f1f5f9;
  border-radius: 7px 7px 0 0;
  cursor: move;
  font-weight: 600;
  color: #0f172a;
}
.gf-card__x {
  border: none;
  background: transparent;
  cursor: pointer;
  color: #64748b;
  font-size: 13px;
  line-height: 1;
}
.gf-card__row {
  display: flex;
  justify-content: space-between;
  padding: 3px 9px;
  line-height: 1.6;
}
.gf-card__row span {
  color: #64748b;
}
.gf-card__side {
  padding: 0 9px 6px;
  color: #94a3b8;
  font-size: 10px;
}
</style>
`,bs=`<script setup lang="ts">
/**
 * 示例 09-custom-plugin（spec §11.5）。
 *
 * 覆盖能力点：从零写一个自定义 IProcessor，注册到 PluginManager 并在业务中应用。
 * 自定义 processor \`alert-flag\`：按 risk 阈值给每个要素打 alert 标记（risk > threshold → true），
 * 注册后经 useProcessor('alert-flag', {threshold}) 接入流水线，popup 中展示 alert 字段。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  defineProcessor,
  useProcessor,
  type MapEngine,
  type PopupData,
  type LayerConfigJSON,
  type DataPayload
} from 'geo-flow'
import { stations } from '../01-basic-chain/data'

/**
 * 自定义 processor：告警标记。
 * defineProcessor 注册到 pluginHost（全局），返回 plugin 实例。
 */
defineProcessor({
  name: 'alert-flag',
  symbol: Symbol.for('processor.alert-flag'),
  meta: { label: '告警标记', icon: '⚠', desc: 'risk > 阈值 → alert=true', category: 'data' },
  defaults: { threshold: 0.7 },
  process(input: DataPayload, options: { threshold: number }) {
    const features = input.features.features.map((f: any) => ({
      ...f,
      properties: { ...f.properties, alert: Number(f.properties?.risk) > options.threshold }
    }))
    return { ...input, features: { ...input.features, features } }
  }
})

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')

  engine.value.layer({
    id: 'stations',
    name: '监测站',
    zIndex: 10,
    provider: { type: 'raw', config: { data: stations } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk', 'alert'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true },
    // 自定义 processor 接入流水线
    processors: [useProcessor('alert-flag', { threshold: 0.7 })]
  } as LayerConfigJSON)
  engine.value.run('custom', {})

  watchEffect(() => {
    popup.value = engine.value?.state.popup ?? null
  })
  ;(window as any).__geoFlow = () => engine.value
})

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 09 · 自定义插件</span>
      <span class="app__hint"><code>defineProcessor</code> 注册 + <code>useProcessor('alert-flag')</code> 接入</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="自定义 processor">
        <pre class="cp-code">name: 'alert-flag'
default threshold: 0.7
→ popup 显示 alert 字段
（risk &gt; 0.7 的站点 alert=true）</pre>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cp-code { margin: 0; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 10.5px; line-height: 1.5; color: #334155; white-space: pre; min-width: 200px; }
</style>
`,xs=`<script setup lang="ts">
/**
 * 示例 10-with-rete · 真拖拽画布（spec §11.5 / §9）。
 *
 * 基于 bridge 数据模型（ReteGraphJSON）的可视化编排画布：
 * - 物料栏点击/拖入节点（底图/控件/图层/输出）到画布；
 * - 画布节点可拖动定位（pointer 事件）；
 * - 「运行」→ runGraph(engine, graph) 产出地图（GraphToEngine 桥接）；
 * - 「导出 JSON」→ graphToMapConfig 与编码模式对照；
 * - 撤销/重做（HistoryStack）+ MiniMap（renderMiniMap）—— §9.2 缺失插件自实现复用。
 *
 * 注：节点渲染为自绘卡片；rete v2 节点 Vue 组件（VueRenderPlugin）可替换本渲染层，bridge/数据模型不变。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, reactive, computed } from 'vue'
import {
  createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend,
  runGraph, graphToMapConfig, buildBasicChainGraph, renderMiniMap, HistoryStack,
  type ReteGraphJSON, type ReteNodeJSON, type MapEngine, type PopupData
} from 'geo-flow'
import { stations } from '../01-basic-chain/data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const canvasEl = ref<HTMLDivElement>()
const miniEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
const exportedJson = ref('')
const canUndo = ref(false)
const canRedo = ref(false)

// 画布节点（reactive，拖动更新 position）
const nodes = reactive<ReteNodeJSON[]>([])
const history = new HistoryStack<ReteGraphJSON>(30)
let nodeSeq = 0

const selectedId = ref<string | null>(null)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  // 加载预设图（等价示例 01）+ 运行
  loadPreset()
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
  ;(window as any).__geoFlow = () => engine.value
})

/** 加载预设图（basicChain 等价示例 01） */
function loadPreset() {
  const g = buildBasicChainGraph(stations)
  nodes.splice(0, nodes.length, ...g.nodes.map((n) => ({ ...n })))
  nodeSeq = g.nodes.length
  pushHistory()
  runAndExport()
  drawMini()
}

/** 当前画布图 */
function currentGraph(): ReteGraphJSON {
  return { version: '2.0.0', name: 'rete-canvas', nodes: nodes.map((n) => ({ ...n })), connections: [] }
}

function pushHistory() {
  history.push(currentGraph())
  canUndo.value = history.canUndo()
  canRedo.value = history.canRedo()
}

function runAndExport() {
  if (!engine.value) return
  runGraph(engine.value, currentGraph())
  exportedJson.value = JSON.stringify(graphToMapConfig(currentGraph()), null, 2)
}

/** 物料添加节点 */
const PALETTE = [
  { type: 'basemap', label: '底图', params: { id: 'basemap.osm' } },
  { type: 'control', label: '控件', params: { id: 'attribution' } },
  { type: 'layer', label: '图层', params: { id: \`layer-\${++nodeSeq}\`, name: '新图层', provider: { type: 'raw', config: {} }, style: { mode: 'single', color: '#1976d2', radius: 7 } } },
  { type: 'map-output', label: '输出', params: { routeName: 'graph' } }
] as const

function addNode(type: string, label: string, params: Record<string, any>) {
  nodes.push({
    id: \`n-\${++nodeSeq}\`,
    type: type as ReteNodeJSON['type'],
    label,
    params: { ...params },
    position: { x: 40 + Math.random() * 200, y: 40 + Math.random() * 200 }
  })
  pushHistory()
  drawMini()
}

/** 节点拖动 */
function onNodePointerDown(e: PointerEvent, n: ReteNodeJSON) {
  selectedId.value = n.id
  const card = e.currentTarget as HTMLElement
  const parent = (card.offsetParent as HTMLElement) || canvasEl.value!
  const pr = parent.getBoundingClientRect()
  const cr = card.getBoundingClientRect()
  const drag = { active: true, sx: e.clientX, sy: e.clientY, bx: cr.left - pr.left, by: cr.top - pr.top }
  ;(card as any).setPointerCapture?.(e.pointerId)
  const move = (ev: PointerEvent) => {
    if (!drag.active) return
    n.position.x = Math.max(0, drag.bx + (ev.clientX - drag.sx))
    n.position.y = Math.max(0, drag.by + (ev.clientY - drag.sy))
  }
  const up = (ev: PointerEvent) => {
    drag.active = false
    ;(card as any).releasePointerCapture?.(ev.pointerId)
    parent.removeEventListener('pointermove', move)
    parent.removeEventListener('pointerup', up)
    pushHistory()
    drawMini()
  }
  parent.addEventListener('pointermove', move)
  parent.addEventListener('pointerup', up)
}

function undo() {
  const prev = history.undo()
  if (prev) { nodes.splice(0, nodes.length, ...prev.nodes.map((n) => ({ ...n }))); runAndExport(); drawMini(); canUndo.value = history.canUndo(); canRedo.value = history.canRedo() }
}
function redo() {
  const next = history.redo()
  if (next) { nodes.splice(0, nodes.length, ...next.nodes.map((n) => ({ ...n }))); runAndExport(); drawMini(); canUndo.value = history.canUndo(); canRedo.value = history.canRedo() }
}

function drawMini() {
  if (!miniEl.value) return
  miniEl.value.innerHTML = ''
  const bboxes = nodes.map((n) => ({ id: n.id, x: n.position.x, y: n.position.y, w: 130, h: 48 }))
  const { svg } = renderMiniMap(bboxes, { x: 0, y: 0, w: 600, h: 400 }, { width: 200, height: 100 })
  miniEl.value.appendChild(svg)
}

function removeNode(id: string) {
  const i = nodes.findIndex((n) => n.id === id)
  if (i >= 0) nodes.splice(i, 1)
  pushHistory(); drawMini()
}

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 10 · 可视化编排（rete 拖拽画布）</span>
      <span class="app__hint">物料拖入 + 节点拖动 + 运行 runGraph + 导出 JSON 对照</span>
    </header>
    <div class="stage">
      <div class="mapwrap">
        <div class="app__map" ref="mapEl"></div>
        <MapToolbar :engine="engine" position="top-right" />
        <LayerTree :engine="engine" position="top-left" />
        <Legend :engine="engine" position="bottom-left" />
        <div class="popup" ref="popupEl">
          <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
        </div>
      </div>
      <aside class="canvas-panel">
        <div class="cp__title">物料（点击添加）</div>
        <div class="palette">
          <button v-for="(p, i) in PALETTE" :key="i" class="palette__btn" @click="addNode(p.type, p.label, p.params as any)">+ {{ p.label }}</button>
        </div>
        <div class="cp__title">画布（拖动节点）</div>
        <div class="canvas" ref="canvasEl">
          <div
            v-for="n in nodes"
            :key="n.id"
            class="node"
            :class="{ 'node--sel': selectedId === n.id }"
            :style="{ left: n.position.x + 'px', top: n.position.y + 'px' }"
            @pointerdown="onNodePointerDown($event, n)"
          >
            <div class="node__head">
              <span class="node__type">{{ n.type }}</span>
              <span class="node__label">{{ n.label || n.id }}</span>
              <button class="node__del" @click.stop="removeNode(n.id)">×</button>
            </div>
            <div class="node__id">{{ n.id }}</div>
          </div>
        </div>
        <div class="cp__title">MiniMap</div>
        <div class="minimap" ref="miniEl"></div>
        <div class="ops">
          <button class="ops__btn ops__btn--run" @click="runAndExport">▶ 运行</button>
          <button class="ops__btn" @click="loadPreset">↺ 预设</button>
          <button class="ops__btn" :disabled="!canUndo" @click="undo">↶ 撤销</button>
          <button class="ops__btn" :disabled="!canRedo" @click="redo">↷ 重做</button>
        </div>
      </aside>
      <BaseWidget position="bottom-right" title="导出 JSON（MapConfigJSON）">
        <pre class="json-code">{{ exportedJson }}</pre>
      </BaseWidget>
    </div>
  </div>
</template>

<style scoped>
.stage { position: relative; flex: 1; min-height: 0; display: flex; }
.mapwrap { position: relative; flex: 1; min-width: 0; }
.app__map { position: absolute; inset: 0; }
.canvas-panel { width: 340px; flex: none; background: #fff; border-left: 1px solid #e2e8f0; padding: 10px; overflow: auto; box-shadow: -2px 0 8px rgba(15,23,42,0.08); }
.cp__title { font-size: 12px; font-weight: 600; color: #334155; margin: 6px 0; padding-bottom: 4px; border-bottom: 1px solid #e2e8f0; }
.cp__title:first-child { margin-top: 0; }
.palette { display: flex; gap: 6px; flex-wrap: wrap; }
.palette__btn { border: 1px solid #e2e8f0; border-radius: 6px; background: #f8fafc; color: #334155; font-size: 11px; padding: 5px 8px; cursor: pointer; }
.palette__btn:hover { border-color: #93c5fd; color: #1976d2; }
.canvas { position: relative; height: 240px; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; touch-action: none; }
.node { position: absolute; width: 130px; background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; box-shadow: 0 2px 8px rgba(15,23,42,0.12); user-select: none; cursor: move; touch-action: none; }
.node--sel { border-color: #1976d2; box-shadow: 0 0 0 2px rgba(25,118,210,0.2); }
.node__head { display: flex; align-items: center; gap: 4px; padding: 4px 6px; background: #1f2937; color: #fff; border-radius: 7px 7px 0 0; font-size: 10px; }
.node__type { background: #3b82f6; padding: 1px 4px; border-radius: 3px; font-weight: 600; }
.node__label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.node__del { border: none; background: transparent; color: #94a3b8; cursor: pointer; font-size: 13px; line-height: 1; }
.node__del:hover { color: #fff; }
.node__id { padding: 4px 6px; font-size: 9px; color: #64748b; font-family: monospace; }
.minimap { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 4px; display: flex; justify-content: center; }
.ops { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
.ops__btn { border: 1px solid #e2e8f0; border-radius: 7px; background: #fff; color: #334155; font-size: 12px; padding: 7px; cursor: pointer; }
.ops__btn:hover:not(:disabled) { border-color: #93c5fd; color: #1976d2; }
.ops__btn--run { background: #1976d2; color: #fff; border-color: #1976d2; grid-column: 1 / -1; }
.ops__btn--run:hover { background: #1565c0; }
.ops__btn:disabled { opacity: 0.4; cursor: not-allowed; }
.json-code { margin: 0; max-height: 30vh; overflow: auto; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 10px; line-height: 1.4; color: #334155; white-space: pre; min-width: 280px; }
</style>
`,Ss=`<script setup lang="ts">
/**
 * 示例 11 · Dock 停靠布局（Widget 作为 dock 的管理对象）。
 *
 * 演示点：
 * - dock 容器托管微件：位置由 DockManager 掌管，微件不再自己绝对定位；
 * - 四条边带（上/下横贯整行、左/右纵贯整列）+ span 跨行跨列（row / column / full）；
 * - 按 priority（大者在前）+ dock() 调用顺序（添加顺序）自动排序；
 * - visible 隐藏移出布局流，collapsed 折叠只留标题 chip；
 * - 把手拖放跨区重定位；右侧面板可改任一微件的 position/span/priority/visible/collapsed；
 * - 声明式：MapConfigJSON.dock → engine.fromJSON 自动装配，dockJSON() 导出。
 */
import { computed, defineComponent, h, onMounted, onUnmounted, ref, shallowRef, type PropType } from 'vue'
import {
  createMapEngine,
  DockContainer,
  registerWidget,
  useDock,
  type MapEngine,
  type DockPosition,
  type DockSpan,
  type DockWidget
} from 'geo-flow'
import { stations } from '../style/data'

/* ---------------- 自定义业务微件（走 registerWidget，dock 只认 type） ---------------- */
const NotePanel = defineComponent({
  name: 'NotePanel',
  props: {
    engine: { type: Object as PropType<MapEngine | null>, default: null },
    text: { type: String, default: '说明' }
  },
  setup(props) {
    const layerCount = computed(() => {
      const e = props.engine as unknown as { engines?: Map<string, unknown> } | null
      return e?.engines?.size ?? 0
    })
    return () => [
      h('div', { class: 'dk__note-title' }, props.text),
      h('div', { class: 'dk__note-line' }, '由 registerWidget 注册，dock 只按 type 解析'),
      h('div', { class: 'dk__note-line' }, '当前引擎图层数：' + layerCount.value)
    ]
  }
})
registerWidget('note-panel', NotePanel, { title: '业务说明' })

const mapEl = ref<HTMLDivElement>()
const engine = shallowRef<MapEngine | null>(null)
const dock = useDock()

/** 内置微件类型 + 自定义类型（下拉候选） */
const WIDGET_TYPES: Array<{ value: string; label: string }> = [
  { value: 'layer-tree', label: 'layer-tree · 图层树' },
  { value: 'legend', label: 'legend · 图例' },
  { value: 'stat-panel', label: 'stat-panel · 统计' },
  { value: 'map-toolbar', label: 'map-toolbar · 工具条' },
  { value: 'note-panel', label: 'note-panel · 业务说明' }
]
const POSITIONS: DockPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'left',
  'right',
  'bottom-left',
  'bottom-center',
  'bottom-right'
]
const SPANS: DockSpan[] = ['none', 'row', 'column', 'full']

/** 初始布局（= 声明式 dock 的最小形态） */
const INITIAL: DockWidget[] = [
  { id: 'toolbar', type: 'map-toolbar', title: '地图工具', position: 'top-right', priority: 5 },
  { id: 'note', type: 'note-panel', title: '顶部通栏', position: 'top-center', span: 'row', priority: 4 },
  { id: 'tree', type: 'layer-tree', title: '图层树', position: 'top-left', priority: 3, collapsible: true },
  { id: 'leftbar', type: 'note-panel', title: '左侧整条', position: 'left', span: 'column', priority: 2 },
  { id: 'legend', type: 'legend', title: '图例', position: 'bottom-left', priority: 1 },
  { id: 'stat', type: 'stat-panel', title: '统计', position: 'bottom-right', priority: 0, collapsible: true, defaultCollapsed: true }
]

/* ---------------- 面板操作 ---------------- */
const selected = ref('tree')
/** 触发响应式刷新（dock 内部为 reactive，这里只做列表重算的入口） */
const version = ref(0)

function apply(patch: Partial<DockWidget>) {
  const cur = dock.manager.get(selected.value)
  if (!cur) return
  dock.dock({ ...cur, ...patch })
  // 引擎侧同步（声明式回写），保证 engine.dockJSON() 与宿主 UI 永远同源
  engine.value?.loadDock(dock.snapshot())
  version.value += 1
}

const cur = computed(() => {
  version.value
  return dock.manager.get(selected.value)
})

/** 排序后的微件列表（priority 大者在前，同级按添加顺序） */
const ordered = computed(() => {
  version.value
  return dock.manager.sorted().map((w) => ({
    id: w.id,
    title: w.title || w.type,
    position: w.position,
    span: w.span || 'none',
    priority: w.priority ?? 0,
    order: dock.manager.runtimeState(w.id)?.order ?? 0,
    visible: w.visible !== false
  }))
})

const jsonText = computed(() => {
  version.value
  return JSON.stringify(dock.snapshot(), null, 2)
})

function addWidget() {
  const id = 'w-' + Date.now().toString(36)
  dock.dock({ id, type: 'note-panel', title: '新微件 ' + id.slice(3), position: 'bottom-center', priority: 0 })
  selected.value = id
  version.value += 1
}

function toggleVisible(id: string) {
  const w = dock.manager.get(id)
  if (!w) return
  dock.setVisible(id, w.visible === false)
  version.value += 1
}

function toggleCollapse(id: string) {
  dock.toggleCollapse(id)
  version.value += 1
}

function resetDock() {
  dock.clear()
  INITIAL.forEach((w) => dock.dock(w))
  version.value += 1
}

/* ---------------- 引擎生命周期 ---------------- */
onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value! })
  engine.value.baseLayer('basemap.osm')
  engine.value.run('dock-demo', {})

  // 声明式等价物：engine.dock(...) / engine.fromJSON({ ..., dock }) 也能装配。
  // 引擎侧装配后走 dockJSON() → 单例，保证「引擎 dock」与「宿主 UI」同源。
  engine.value.dockManager.clear()
  INITIAL.forEach((w) => engine.value!.dockManager.dock(w))
  dock.load(engine.value.dockJSON())

  version.value += 1
})

onUnmounted(() => {
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 示例 11 · Dock 停靠布局</span>
      <span class="app__hint">Widget 是 dock 的管理对象 · 跨行/跨列 · priority 排序 · 隐藏/折叠 · 跨区拖放</span>
    </header>

    <div class="app__stage">
      <!-- 地图区（dock 只覆盖这里，与右侧配置面板互不侵占） -->
      <div class="app__mapbox">
        <div class="app__map" ref="mapEl"></div>

        <!-- dock 容器：四条边带（上/下整行、左/右整列），中间留给地图 -->
        <DockContainer :engine="engine" :manager="dock.manager" />
      </div>

      <div class="dk__side">
        <div class="dk__side-head">停靠面板（Widget）</div>

        <div class="dk__row">
          <label>选中微件</label>
          <select v-model="selected">
            <option v-for="o in ordered" :key="o.id" :value="o.id">
              {{ o.title }}（{{ o.position }}）
            </option>
          </select>
        </div>
        <div class="dk__stats">
          priority {{ cur?.priority ?? 0 }} · order {{ cur ? dock.runtimeState(cur.id)?.order : 0 }} · span
          {{ cur?.span ?? 'none' }} · {{ cur?.visible === false ? 'hidden' : 'visible' }}
        </div>

        <div class="dk__row">
          <label>position</label>
          <select :value="cur?.position" @change="apply({ position: ($event.target as HTMLSelectElement).value as DockPosition })">
            <option v-for="p in POSITIONS" :key="p" :value="p">{{ p }}</option>
          </select>
        </div>
        <div class="dk__row">
          <label>span</label>
          <select :value="cur?.span ?? 'none'" @change="apply({ span: ($event.target as HTMLSelectElement).value as DockSpan })">
            <option v-for="s in SPANS" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>
        <div class="dk__row">
          <label>priority {{ cur?.priority ?? 0 }}</label>
          <input
            type="range"
            min="0"
            max="9"
            :value="cur?.priority ?? 0"
            @input="apply({ priority: Number(($event.target as HTMLInputElement).value) })"
          />
        </div>
        <div class="dk__row dk__row--check">
          <label><input type="checkbox" :checked="cur?.visible !== false" @change="toggleVisible(selected)" /> visible</label>
          <label><input type="checkbox" :checked="!!dock.isCollapsed(selected)" @change="toggleCollapse(selected)" /> collapsed</label>
        </div>

        <div class="dk__btns">
          <button type="button" @click="addWidget">+ 新增微件</button>
          <button type="button" @click="resetDock">复位布局</button>
        </div>

        <div class="dk__side-head dk__side-head--sub">排序（priority ↓ → 添加序 ↑）</div>
        <ul class="dk__list">
          <li v-for="o in ordered" :key="o.id" :class="{ 'dk__list--off': !o.visible }">
            <span class="dk__li-title">{{ o.title }}</span>
            <span class="dk__li-meta">{{ o.position }} / {{ o.span }} / p{{ o.priority }} / #{{ o.order }}</span>
          </li>
        </ul>

        <div class="dk__side-head dk__side-head--sub">dock 声明式序列化</div>
        <pre class="dk__json">{{ jsonText }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app__stage {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
}
.app__mapbox {
  position: relative;
  flex: 1;
  min-width: 0;
  height: 100%;
}
.app__map {
  width: 100%;
  height: 100%;
}
.dk__side {
  position: relative;
  /* 层级高于 dock 容器（gf-dock = 30），保证配置面板不被停靠面板压住 */
  z-index: 40;
  width: 250px;
  flex: none;
  border-left: 1px solid #e2e8f0;
  background: #fff;
  padding: 10px 12px;
  overflow: auto;
  font-size: 12px;
}
.dk__side-head {
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}
.dk__side-head--sub {
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px solid #e2e8f0;
}
.dk__row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}
.dk__row label {
  color: #64748b;
  width: 62px;
  flex: none;
}
.dk__row select {
  flex: 1;
  min-width: 0;
  height: 26px;
}
.dk__row--check label {
  width: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #334155;
  margin-right: 10px;
}
.dk__stats {
  color: #64748b;
  margin-bottom: 8px;
  line-height: 1.5;
}
.dk__btns {
  display: flex;
  gap: 6px;
  margin: 8px 0 0;
}
.dk__btns button {
  flex: 1;
  height: 26px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  color: #334155;
}
.dk__btns button:hover {
  color: #1976d2;
  border-color: #93c5fd;
}
.dk__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.dk__list li {
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  border-bottom: 1px dashed #eef2f7;
}
.dk__list li.dk__list--off {
  opacity: 0.45;
  text-decoration: line-through;
}
.dk__li-title {
  color: #0f172a;
}
.dk__li-meta {
  color: #94a3b8;
  font-size: 11px;
}
.dk__json {
  margin: 0;
  max-height: 260px;
  overflow: auto;
  font-size: 10.5px;
  line-height: 1.45;
  color: #334155;
  background: #f8fafc;
  border-radius: 6px;
  padding: 6px 8px;
}
/* dock 内容（自定义微件 + 裸模式外壳） */
:deep(.gf-widget--bare) {
  min-width: 120px;
}
:deep(.dk__note-title) {
  color: #0f172a;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
}
:deep(.dk__note-line) {
  color: #64748b;
  font-size: 11px;
  line-height: 1.5;
}
</style>
`,Cs=`<script setup lang="ts">
/** 效果 3.4 · 呼吸灯 breathing playground。 */
import EffectPlayground from './EffectPlayground.vue'
const schema = [
  { key: 'color', label: '颜色', type: 'color' as const },
  { key: 'period', label: '周期', type: 'range' as const, min: 800, max: 3200, step: 200 }
]
<\/script>
<template>
  <EffectPlayground effect-name="breathing" title="效果 3.4 · 呼吸灯 breathing" :params="{ color: '#4f8cff', period: 1600 }" :schema="schema" />
</template>
`,ws=`<script setup lang="ts">
/**
 * 效果 3.5 · 轮播 carousel playground。
 *
 * 自动轮播高亮 + popup 跟随当前要素 + 贝塞尔引线链接 popup：
 * - carousel useCarouselEffect 轮流把要素置 selected（layer.set('selectedId')，map-styles 自动响应高亮态）
 * - onEnter 回调 → popupManager.open 单卡 + leaderLineDrawer 画引线（风格可选 bezier/polyline/straight）
 * - onLeave 回调 → popupManager.close 关闭上一帧
 * - interval 滑块 + 控制器 start/pause/resume/stop/goto
 */
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { fromLonLat } from 'ol/proj'
import {
  createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend, useEffect,
  popupManager, leaderLineDrawer,
  type MapEngine, type LayerConfigJSON, type LayerEngine
} from 'geo-flow'
import { styledStations } from '../style/data'

const mapEl = ref<HTMLDivElement>()
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const interval = ref(1500)
const state = ref('idle')
const idx = ref(-1)
let controller: any = null

/** 引线风格（贝塞尔默认） */
const leaderStyle = ref<'bezier' | 'polyline' | 'straight'>('bezier')

interface CardVM {
  id: string
  title: string
  rows: { label: string; value: any }[]
  anchor: [number, number]
  offset: { x: number; y: number }
}
const cardList = ref<CardVM[]>([])
const pathList = ref<{ id: string; d: string }[]>([])

/** 从 popupManager 拉取活跃卡 + 布局结果，刷新视图（含引线 path） */
function refresh() {
  const list = popupManager.list()
  const vm: CardVM[] = []
  const paths: { id: string; d: string }[] = []
  for (const c of list) {
    const layout = popupManager.getLayout(c.id)
    if (!layout) continue
    const rows: { label: string; value: any }[] = c.content?.rows ?? []
    vm.push({
      id: c.id,
      title: c.content?.title ?? c.id,
      rows,
      anchor: c.anchorScreen,
      offset: layout.offset
    })
    paths.push({
      id: c.id,
      d: leaderLineDrawer.toPath(
        { start: c.anchorScreen, end: layout.leaderEnd },
        { style: leaderStyle.value, color: '#f59e0b', width: 1.8, arrow: true }
      )
    })
  }
  cardList.value = vm
  pathList.value = paths
}

/** 视图变化：重算锚点屏幕坐标 */
function syncAnchors() {
  const anchors = new Map<string, [number, number]>()
  for (const c of popupManager.list()) {
    const g = c.feature?.geometry
    if (!g) continue
    const px = engine.value?.map.getPixelFromCoordinate(fromLonLat(g.coordinates))
    if (px) anchors.set(c.id, [px[0], px[1]])
  }
  if (anchors.size) popupManager.updateAnchors(anchors)
  refresh()
}

function openCard(f: any) {
  // f 是 GeoJSON Feature（useCarouselEffect.toGeoJSONFeature，coordinates 4326）→ fromLonLat 转 3857
  const coord = f.geometry?.coordinates ?? []
  const px = engine.value?.map.getPixelFromCoordinate(fromLonLat(coord))
  popupManager.open({
    id: 'card-' + f.properties.id,
    feature: f,
    anchorScreen: px ? [px[0], px[1]] : [0, 0],
    size: { width: 200, height: 96 },
    content: {
      title: String(f.properties.name ?? '详情'),
      rows: [
        { label: '等级', value: String(f.properties.level ?? '—') },
        { label: '风险', value: Number(f.properties.risk).toFixed(2) },
        { label: '类型', value: String(f.properties.type ?? '—') }
      ]
    }
  })
  refresh()
}

function closeCard(f: any) {
  popupManager.close('card-' + f.properties.id)
  refresh()
}

const baseCfg: LayerConfigJSON = {
  id: 'stations', name: '监测站', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
}

function buildEffects() {
  return [useEffect('carousel', {
    interval: interval.value,
    autoStart: true,
    pauseOnHover: false, // playground 场景不暂停，便于看轮播效果
    pauseOnUserInteract: false, // fit 动画/拖拽不暂停轮播，避免被 view change:resolution 阻塞 tick
    onEnter: openCard,
    onLeave: closeCard
  })]
}

let probeTimer: ReturnType<typeof setInterval> | null = null
let stateTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value! }) // 不传 popupEl：弹框由 popupManager 布局
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({ ...baseCfg, effects: buildEffects() })
  engine.value.run('carousel', {})

  // controller 在 execute（async fetch+addFeatures+reattachEffects）完成后才挂到 layer；
  // 同步拿会 undefined（attach 还没跑）→ 面板按钮失效 + state/idx 不更新。延迟轮询拿。
  probeTimer = setInterval(() => {
    const layer = (engine.value as any)?.engines.get('stations')?.layer
    const c = layer?.get?.('carouselController')
    if (c) {
      controller = c
      if (probeTimer) { clearInterval(probeTimer); probeTimer = null }
      // 兜底：若 autoStart 没触发（极端时序），显式 start
      if (controller.state === 'idle') controller.start()
      stateTimer = setInterval(() => {
        state.value = controller.state
        idx.value = controller.currentIndex
      }, 200)
    }
  }, 100)

  popupManager.setViewport({ width: mapEl.value!.clientWidth, height: mapEl.value!.clientHeight })
  popupManager.on(refresh)
  // 缩放/平移过程中实时跟随（rAF 节流）；moveend 做最终精确
  const view = engine.value.map.getView()
  engine.value.map.on('pointerdrag', scheduleSync)
  view.on('change:resolution', scheduleSync)
  engine.value.map.on('moveend', syncAnchors)
  engine.value.map.on('resize', syncAnchors)
})

/** rAF 节流：缩放/拖拽过程中每帧最多重算一次锚点 + 重排 + 重绘引线 */
let syncRaf: number | null = null
function scheduleSync() {
  if (syncRaf != null) return
  syncRaf = requestAnimationFrame(() => {
    syncRaf = null
    syncAnchors()
  })
}

function applyInterval() {
  if (!layerEngine) return
  layerEngine.updateConfig({ ...baseCfg, effects: buildEffects() })
  layerEngine.restart()
}
function ctrl(fn: 'start' | 'pause' | 'resume' | 'stop') { controller?.[fn]?.() }
function goto(i: number) { controller?.goto?.(i) }
/** 引线风格变化时即时重绘引线（不需重跑 carousel） */
function onLeaderChange() { refresh() }

onUnmounted(() => {
  if (probeTimer) { clearInterval(probeTimer); probeTimer = null }
  if (stateTimer) { clearInterval(stateTimer); stateTimer = null }
  popupManager.list().map((c) => c.id).forEach((id) => popupManager.close(id))
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">效果 3.5 · 轮播 carousel playground</span>
      <span class="app__hint">自动轮播高亮 + popup 跟随 + 贝塞尔引线 · interval/控制器/引线风格可调</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="carousel 控制">
        <div class="cp">
          <div class="cp__row">
            <label>interval</label>
            <input type="range" min="500" max="4000" step="100" v-model.number="interval" />
            <span>{{ interval }}ms</span>
          </div>
          <div class="cp__row">
            <label>引线风格</label>
            <select v-model="leaderStyle" @change="onLeaderChange">
              <option value="bezier">贝塞尔曲线</option>
              <option value="polyline">折线（斜出+横竖到达）</option>
              <option value="straight">直线</option>
            </select>
          </div>
          <div class="cp__state">状态：{{ state }} · 当前：{{ idx }}</div>
          <div class="cp__btns">
            <button @click="ctrl('start')">start</button>
            <button @click="ctrl('pause')">pause</button>
            <button @click="ctrl('resume')">resume</button>
            <button @click="ctrl('stop')">stop</button>
          </div>
          <div class="cp__btns">
            <button v-for="i in 8" :key="i" @click="goto(i - 1)">goto{{ i }}</button>
          </div>
          <button class="cp__apply" @click="applyInterval">应用 interval（restart）</button>
        </div>
      </BaseWidget>

      <!-- 弹框层：SVG 引线 + 绝对定位卡片（位置由 PopupLayoutSolver 给出） -->
      <div class="gf-popups">
        <svg class="gf-popups__svg">
          <path v-for="p in pathList" :key="p.id" :d="p.d" />
        </svg>
        <div v-for="c in cardList" :key="c.id" class="gf-card" :style="{ transform: \`translate(\${c.offset.x}px, \${c.offset.y}px)\` }">
          <div class="gf-card__head">{{ c.title }}</div>
          <div v-for="(r, i) in c.rows" :key="i" class="gf-card__row">
            <span>{{ r.label }}</span><b>{{ r.value }}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cp { display: flex; flex-direction: column; gap: 8px; min-width: 220px; }
.cp__row { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #64748b; }
.cp__row input[type='range'] { flex: 1; }
.cp__row select { flex: 1; height: 24px; border: 1px solid #e2e8f0; border-radius: 4px; font-size: 11px; }
.cp__state { font-size: 11px; color: #334155; }
.cp__btns { display: flex; gap: 4px; flex-wrap: wrap; }
.cp__btns button { border: 1px solid #e2e8f0; border-radius: 5px; background: #fff; color: #334155; font-size: 11px; padding: 4px 8px; cursor: pointer; }
.cp__btns button:hover { border-color: #93c5fd; color: #1976d2; }
.cp__apply { border: 1px solid #1976d2; border-radius: 6px; background: #1976d2; color: #fff; font-size: 12px; padding: 6px; cursor: pointer; }

.gf-popups { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.gf-popups__svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.gf-popups__svg path { fill: none; stroke: #f59e0b; stroke-width: 1.8; }
.gf-card {
  position: absolute; top: 0; left: 0; width: 200px;
  background: rgba(255, 255, 255, 0.97); border: 1px solid #f59e0b;
  border-radius: 8px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);
  font-size: 11px; color: #334155; pointer-events: auto;
}
.gf-card__head {
  padding: 6px 10px; background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #fff; border-radius: 7px 7px 0 0; font-weight: 600;
}
.gf-card__row { display: flex; justify-content: space-between; padding: 3px 10px; line-height: 1.6; }
.gf-card__row span { color: #64748b; }
</style>
`,Ts=`<script setup lang="ts">
/**
 * 效果 3.6 · 自定义效果 playground。
 * 用 defineEffect 从零定义一个 'glow' 效果（节律光晕环），注册后经 useEffect 接入，
 * 颜色 / 周期可调。演示自定义 effect 扩展能力。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import { Style, Fill } from 'ol/style'
import Circle from 'ol/geom/Circle'
import {
  createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend,
  defineEffect, useEffect, frameLoop, hexToRgba,
  type MapEngine, type PopupData, type LayerConfigJSON, type LayerEngine
} from 'geo-flow'
import { styledStations } from '../style/data'

// 自定义 glow 效果：节律光晕环（defineEffect 注册到 pluginHost，全局可用）
defineEffect({
  name: 'glow',
  symbol: Symbol.for('effect.glow'),
  stage: 'postrender',
  meta: { label: '光晕', icon: '✨', desc: '自定义节律光晕环', category: 'effect' },
  defaults: { color: '#a855f7', period: 2000 },
  attach(env: any, options: any) {
    return frameLoop(env, options.period, ({ vector, t }: any) => {
      const feats = env.source.getFeatures()
      if (!feats.length) return false
      const b = 0.5 + 0.5 * Math.sin(t * Math.PI * 2)
      feats.forEach((f: any) => {
        const coord = f.getGeometry().getCoordinates()
        vector.setStyle(new Style({ fill: new Fill({ color: hexToRgba(options.color, 0.12 + 0.28 * b) }) }))
        vector.drawGeometry(new Circle(coord, 280 + 120 * b))
      })
      return true
    })
  }
})

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const color = ref('#a855f7')
const period = ref(2000)

const baseCfg: LayerConfigJSON = {
  id: 'stations', name: '监测站', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({ ...baseCfg, effects: [useEffect('glow', { color: color.value, period: period.value })] })
  engine.value.run('custom-effect', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})

function apply() {
  if (!layerEngine) return
  layerEngine.updateConfig({ ...baseCfg, effects: [useEffect('glow', { color: color.value, period: period.value })] })
  layerEngine.restart()
}

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>

<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">效果 3.6 · 自定义效果 glow</span><span class="app__hint"><code>defineEffect</code> 注册 + <code>useEffect('glow')</code> 接入</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="glow 参数">
        <div class="cp">
          <div class="cp__row"><label>颜色</label><input type="color" v-model="color" /></div>
          <div class="cp__row"><label>周期</label><input type="range" min="800" max="4000" step="200" v-model.number="period" /><span>{{ period }}ms</span></div>
          <button class="cp__apply" @click="apply">应用</button>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cp { display: flex; flex-direction: column; gap: 8px; min-width: 200px; }
.cp__row { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #64748b; }
.cp__row input[type=range] { flex: 1; }
.cp__apply { border: 1px solid #1976d2; border-radius: 6px; background: #1976d2; color: #fff; font-size: 12px; padding: 6px; cursor: pointer; }
</style>
`,Es=`<script setup lang="ts">
/**
 * 效果 playground 通用壳（spec §11.5 效果示例）。
 * 参数可调（color/period/rings/...）+ condition 三态（全部 / risk>0.7 函数 / level=高 字段）+ 子集生效。
 * 子示例传 effectName + params + schema 复用本壳。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, reactive } from 'vue'
import {
  createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend, useEffect,
  type MapEngine, type PopupData, type LayerConfigJSON, type LayerEngine
} from 'geo-flow'
import { styledStations } from '../style/data'

const props = defineProps<{
  effectName: string
  title: string
  hint?: string
  params: Record<string, any>
  schema: Array<{
    key: string
    label: string
    type: 'color' | 'range' | 'select'
    min?: number
    max?: number
    step?: number
    options?: { label: string; value: any }[]
  }>
}>()

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const values = reactive({ ...props.params })
const conditionMode = ref<'all' | 'risk' | 'level'>('all')

const baseCfg: LayerConfigJSON = {
  id: 'stations', name: '监测站', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({ ...baseCfg, effects: buildEffects() })
  engine.value.run('effect', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})

function buildEffects() {
  const opts: any = { ...values }
  if (conditionMode.value === 'risk') opts.condition = (f: any) => f.get('risk') > 0.7
  else if (conditionMode.value === 'level') { opts.conditionField = 'level'; opts.conditionValue = '高' }
  return [useEffect(props.effectName, opts)]
}

function apply() {
  if (!layerEngine) return
  layerEngine.updateConfig({ ...baseCfg, effects: buildEffects() })
  layerEngine.restart()
}

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">{{ title }}</span>
      <span class="app__hint">{{ hint || '调参 + condition 函数条件 + 子集生效' }}</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" :title="title + ' 参数'">
        <div class="ep">
          <div v-for="f in schema" :key="f.key" class="ep__row">
            <label class="ep__label">{{ f.label }}</label>
            <input v-if="f.type === 'color'" type="color" class="ep__color" v-model="values[f.key]" />
            <input v-else-if="f.type === 'range'" type="range" class="ep__range" :min="f.min" :max="f.max" :step="f.step" v-model.number="values[f.key]" />
            <select v-else class="ep__select" v-model="values[f.key]">
              <option v-for="o in f.options" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
            <span v-if="f.type === 'range'" class="ep__val">{{ values[f.key] }}</span>
          </div>
          <div class="ep__row">
            <label class="ep__label">条件</label>
            <select class="ep__select" v-model="conditionMode">
              <option value="all">全部要素</option>
              <option value="risk">risk&gt;0.7（函数）</option>
              <option value="level">level=高（字段）</option>
            </select>
          </div>
          <button class="ep__btn" @click="apply">应用（updateConfig + restart）</button>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ep { display: flex; flex-direction: column; gap: 7px; min-width: 210px; }
.ep__row { display: flex; align-items: center; gap: 8px; }
.ep__label { font-size: 11px; color: #64748b; min-width: 56px; }
.ep__color { width: 34px; height: 24px; border: 1px solid #e2e8f0; border-radius: 4px; background: none; cursor: pointer; }
.ep__range { flex: 1; cursor: pointer; }
.ep__select { flex: 1; height: 26px; border: 1px solid #e2e8f0; border-radius: 5px; font-size: 11px; }
.ep__val { font-size: 11px; color: #334155; min-width: 34px; text-align: right; }
.ep__btn { margin-top: 4px; border: 1px solid #1976d2; border-radius: 6px; background: #1976d2; color: #fff; font-size: 12px; padding: 6px; cursor: pointer; }
.ep__btn:hover { background: #1565c0; }
</style>
`,Ds=`<script setup lang="ts">
/** 效果 3.2 · 点跳跃 pulse playground。 */
import EffectPlayground from './EffectPlayground.vue'
const schema = [
  { key: 'color', label: '颜色', type: 'color' as const },
  { key: 'period', label: '周期', type: 'range' as const, min: 600, max: 2400, step: 100 },
  { key: 'jumpPx', label: '跳起', type: 'range' as const, min: 6, max: 40, step: 1 },
  { key: 'pointRadius', label: '点半径', type: 'range' as const, min: 4, max: 12, step: 1 }
]
<\/script>
<template>
  <EffectPlayground effect-name="pulse" title="效果 3.2 · 点跳跃 pulse" :params="{ color: '#ffd666', period: 1200, jumpPx: 18, pointRadius: 7 }" :schema="schema" />
</template>
`,Os=`<script setup lang="ts">
/** 效果 3.1 · 涟漪 ripple playground。 */
import EffectPlayground from './EffectPlayground.vue'
const schema = [
  { key: 'color', label: '颜色', type: 'color' as const },
  { key: 'period', label: '周期', type: 'range' as const, min: 1000, max: 5000, step: 200 },
  { key: 'rings', label: '环数', type: 'range' as const, min: 1, max: 6, step: 1 }
]
<\/script>
<template>
  <EffectPlayground effect-name="ripple" title="效果 3.1 · 涟漪 ripple" :params="{ color: '#ff5c5c', period: 3000, rings: 3 }" :schema="schema" />
</template>
`,ks=`<script setup lang="ts">
/** 效果 3.3 · 涟漪 wave playground。 */
import EffectPlayground from './EffectPlayground.vue'
const schema = [
  { key: 'color', label: '颜色', type: 'color' as const },
  { key: 'period', label: '周期', type: 'range' as const, min: 800, max: 2400, step: 200 },
  { key: 'rings', label: '环数', type: 'range' as const, min: 1, max: 5, step: 1 }
]
<\/script>
<template>
  <EffectPlayground effect-name="wave" title="效果 3.3 · 涟漪 wave" :params="{ color: '#36cbcb', period: 1800, rings: 3 }" :schema="schema" />
</template>
`,As=`<script setup lang="ts">
/**
 * 示例 · 外部环境注入与响应式更新（spec §2.3 / §8.1）。
 *
 * engine.env 是响应式上下文容器；layer.subscribeEnv(keys) 订阅后，任一 key 变化即
 * microtask 去抖重跑流水线（数据获取 → 处理器 → 样式 → 效果）。
 *
 * 本示例注入三个变量并实时驱动：
 * - theme ('light'|'dark')    → 样式配色切换（style.color 函数读 $env.theme）
 * - riskThreshold (0..1)      → 数据过滤阈值（inline processor 读 ctx.env.riskThreshold）
 * - scope ('all'|'alarm')     → 数据范围（inline processor 读 ctx.env.scope）
 *
 * 切换任一变量 → 地图要素数量 / 颜色 / 大小立即响应；env 快照面板实时显示当前值。
 */
import { onMounted, onUnmounted, reactive, ref, shallowRef } from 'vue'
import {
  createMapEngine,
  BaseWidget,
  MapToolbar,
  LayerTree,
  Legend,
  type MapEngine,
  type LayerEngine,
  type LayerConfigJSON
} from 'geo-flow'
import { styledStations } from '../style/data'

const mapEl = ref<HTMLDivElement>()
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
let pollTimer = 0

const env = reactive<{ theme: 'light' | 'dark'; riskThreshold: number; scope: 'all' | 'alarm' }>({
  theme: 'light',
  riskThreshold: 0,
  scope: 'all'
})
const snapshot = ref<Record<string, any>>({})
const featureCount = ref(0)

/** 浅色 / 暗色 双套配色（level → 圆底色） */
const LIGHT: Record<string, string> = { 高: '#ef4444', 中: '#f59e0b', 低: '#22c55e' }
const DARK: Record<string, string> = { 高: '#f87171', 中: '#fbbf24', 低: '#4ade80' }

/** env 注入：写 engine.env，订阅已建立 → 自动重跑 */
function pushEnv() {
  engine.value?.env.set('theme', env.theme)
  engine.value?.env.set('riskThreshold', env.riskThreshold)
  engine.value?.env.set('scope', env.scope)
  refreshSnapshot()
}

function refreshSnapshot() {
  snapshot.value = { ...engine.value?.env.snapshot() }
}

const cfg: LayerConfigJSON = {
  id: 'stations',
  name: '监测站（env 驱动）',
  zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  // inline processor：按 env.riskThreshold 与 env.scope 过滤要素
  processors: [
    {
      inline:
        '(payload, ctx) => { const e = (ctx && ctx.env) || {}; const thr = Number(e.riskThreshold || 0); const scope = e.scope || "all"; const feats = payload.features.filter(f => { const r = Number(f.properties.risk); if (r < thr) return false; if (scope === "alarm" && f.properties.type !== "alarm") return false; return true; }); return { datasetId: payload.datasetId, geometryType: payload.geometryType, features: feats, fields: payload.fields }; }'
    }
  ],
  style: {
    mode: 'categorical',
    colorField: 'level',
    palette: 'semantic',
    // 样式函数读 $env：主题切换配色 + 大小按 risk × 主题系数
    color: (f: any, ctx: any) => {
      const palette = ctx.$env?.theme === 'dark' ? DARK : LIGHT
      return palette[String(f.get('level'))] || '#4f8cff'
    },
    radius: (f: any, ctx: any) => {
      const factor = ctx.$env?.theme === 'dark' ? 0.85 : 1.0
      return (6 + Number(f.get('risk') || 0) * 10) * factor
    },
    fillOpacity: 0.85
  }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')

  // 注入初始 env
  pushEnv()

  layerEngine = engine.value.layer(cfg)
  engine.value.run('env-injection', {})
  // 订阅：env 任一变化 → 重跑（重跑前库内会清该层样式缓存）
  layerEngine.subscribeEnv(['theme', 'riskThreshold', 'scope'])

  // 监听要素数量变化
  pollTimer = window.setInterval(() => {
    featureCount.value = layerEngine?.source.getFeatures().length ?? 0
  }, 300)
})

function setTheme(t: 'light' | 'dark') {
  env.theme = t
  pushEnv()
}
function setScope(s: 'all' | 'alarm') {
  env.scope = s
  pushEnv()
}

onUnmounted(() => {
  if (pollTimer) window.clearInterval(pollTimer)
  engine.value?.destroy()
  engine.value = null
})
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">geo-flow · 外部环境注入响应式</span>
      <span class="app__hint">engine.env 注入 → layer.subscribeEnv 重跑 → 数据/样式实时响应</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />

      <BaseWidget position="bottom-right" title="env 注入控制">
        <div class="ev">
          <div class="ev__group">
            <label>主题 theme</label>
            <div class="ev__seg">
              <button :class="{ on: env.theme === 'light' }" @click="setTheme('light')">light</button>
              <button :class="{ on: env.theme === 'dark' }" @click="setTheme('dark')">dark</button>
            </div>
          </div>
          <div class="ev__group">
            <label>风险阈值 riskThreshold</label>
            <input type="range" min="0" max="1" step="0.05" v-model.number="env.riskThreshold" @input="pushEnv" />
            <span>{{ env.riskThreshold.toFixed(2) }}</span>
          </div>
          <div class="ev__group">
            <label>数据范围 scope</label>
            <div class="ev__seg">
              <button :class="{ on: env.scope === 'all' }" @click="setScope('all')">all</button>
              <button :class="{ on: env.scope === 'alarm' }" @click="setScope('alarm')">alarm</button>
            </div>
          </div>
          <div class="ev__stat">
            当前要素：<b>{{ featureCount }}</b> / 8
          </div>
          <details class="ev__snap">
            <summary>env 快照</summary>
            <pre>{{ JSON.stringify(snapshot, null, 2) }}</pre>
          </details>
        </div>
      </BaseWidget>
    </div>
  </div>
</template>

<style scoped>
.ev {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 280px;
}
.ev__group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ev__group label {
  font-size: 11px;
  color: #1976d2;
  font-weight: 600;
}
.ev__group input[type='range'] {
  width: 100%;
}
.ev__group span {
  font-size: 11px;
  color: #64748b;
}
.ev__seg {
  display: flex;
  gap: 4px;
}
.ev__seg button {
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background: #fff;
  color: #334155;
  font-size: 11px;
  padding: 5px;
  cursor: pointer;
}
.ev__seg button.on {
  border-color: #1976d2;
  background: #1976d2;
  color: #fff;
}
.ev__stat {
  font-size: 12px;
  color: #334155;
}
.ev__stat b {
  color: #ef4444;
  font-size: 14px;
}
.ev__snap {
  font-size: 10px;
  color: #94a3b8;
}
.ev__snap pre {
  margin: 4px 0 0;
  background: #f8fafc;
  padding: 6px;
  border-radius: 4px;
  font-size: 10px;
  color: #475569;
  max-height: 120px;
  overflow: auto;
}
</style>
`,js=`<script setup lang="ts">
/** 基础图层 4.1 · appendData 增量追加（按钮追加批次，不清空）。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, computed } from 'vue'
import { createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend, layerManager, type MapEngine, type PopupData, type LayerEngine } from 'geo-flow'
import { initial, batchA, batchB } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const count = computed(() => layerManager.get('stations')?.featureCount ?? 0)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({
    id: 'stations', name: '监测站', zIndex: 10,
    provider: { type: 'raw', config: { data: initial } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  })
  engine.value.run('append', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})

function append(data: any) { layerEngine?.appendData(data) }
function clear() { layerEngine?.clearData() }

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>
<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">基础图层 4.1 · appendData 增量追加</span><span class="app__hint">按钮追加批次，不清空现有 · 当前 {{ count }} 个</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="appendData">
        <div class="ld">
          <button class="ld__btn" @click="append(batchA)">追加批次 A（2 个）</button>
          <button class="ld__btn" @click="append(batchB)">追加批次 B（3 个）</button>
          <button class="ld__btn ld__btn--warn" @click="clear">clearData 清空</button>
          <div class="ld__count">当前要素数：{{ count }}</div>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ld { display: flex; flex-direction: column; gap: 6px; min-width: 180px; }
.ld__btn { border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; color: #334155; font-size: 12px; padding: 6px; cursor: pointer; }
.ld__btn:hover { border-color: #93c5fd; color: #1976d2; }
.ld__btn--warn { color: #dc2626; border-color: #fecaca; }
.ld__count { font-size: 11px; color: #64748b; margin-top: 4px; }
</style>
`,Ms=`<script setup lang="ts">
/** 基础图层 4.4 · 综合数据操作 playground（append/update/restore/clear 一站式）。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, computed } from 'vue'
import { createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend, layerManager, type MapEngine, type PopupData, type LayerEngine } from 'geo-flow'
import { initial, batchA, batchB, datasets } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const count = computed(() => layerManager.get('stations')?.featureCount ?? 0)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({
    id: 'stations', name: '监测站', zIndex: 10,
    provider: { type: 'raw', config: { data: initial } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  })
  engine.value.run('layer-playground', {})
  layerEngine?.snapshotOriginal()
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})

function onSelect(e: Event) {
  const id = (e.target as HTMLSelectElement).value
  const ds = datasets.find((d) => d.id === id)
  if (ds) layerEngine?.updateData(ds.data, { keepOriginal: true })
}
function append(data: any) { layerEngine?.appendData(data) }
function restore() { layerEngine?.restoreOriginal() }
function clear() { layerEngine?.clearData() }

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>
<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">基础图层 4.4 · 综合数据操作</span><span class="app__hint">append / update(keepOriginal) / restore / clear 一站式 · {{ count }} 个</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="数据操作">
        <div class="ld">
          <label class="ld__lbl">updateData（keepOriginal）</label>
          <select class="ld__sel" @change="onSelect">
            <option value="">— 选择数据集 —</option>
            <option v-for="d in datasets" :key="d.id" :value="d.id">{{ d.label }}</option>
          </select>
          <label class="ld__lbl">appendData</label>
          <div class="ld__row">
            <button class="ld__btn" @click="append(batchA)">+ 批次 A</button>
            <button class="ld__btn" @click="append(batchB)">+ 批次 B</button>
          </div>
          <div class="ld__row">
            <button class="ld__btn ld__btn--warn" @click="restore">restoreOriginal</button>
            <button class="ld__btn ld__btn--warn" @click="clear">clearData</button>
          </div>
          <div class="ld__count">当前要素数：{{ count }}</div>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ld { display: flex; flex-direction: column; gap: 6px; min-width: 200px; }
.ld__lbl { font-size: 11px; color: #64748b; }
.ld__sel { height: 28px; border: 1px solid #e2e8f0; border-radius: 5px; font-size: 12px; }
.ld__row { display: flex; gap: 6px; }
.ld__btn { flex: 1; border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; color: #334155; font-size: 11px; padding: 6px; cursor: pointer; }
.ld__btn:hover { border-color: #93c5fd; color: #1976d2; }
.ld__btn--warn { color: #dc2626; border-color: #fecaca; }
.ld__count { font-size: 11px; color: #64748b; margin-top: 4px; }
</style>
`,Ns=`<script setup lang="ts">
/** 基础图层 4.3 · keepOriginal + restoreOriginal（全量更新后恢复初始）。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, computed } from 'vue'
import { createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend, layerManager, type MapEngine, type PopupData, type LayerEngine } from 'geo-flow'
import { initial, datasetX } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const count = computed(() => layerManager.get('stations')?.featureCount ?? 0)
const isRestored = ref(true)

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({
    id: 'stations', name: '监测站', zIndex: 10,
    provider: { type: 'raw', config: { data: initial } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  })
  engine.value.run('restore', {})
  // 首次 snapshotOriginal 存初始
  layerEngine?.snapshotOriginal()
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})

function replaceWithKeep() {
  layerEngine?.updateData(datasetX, { keepOriginal: true })
  isRestored.value = false
}
function restore() {
  layerEngine?.restoreOriginal()
  isRestored.value = true
}

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>
<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">基础图层 4.3 · keepOriginal + restoreOriginal</span><span class="app__hint">updateData(新,keepOriginal) → restoreOriginal 恢复初始 · {{ count }} 个</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="keepOriginal / restore">
        <div class="ld">
          <button class="ld__btn" :disabled="!isRestored" @click="replaceWithKeep">updateData(X, keepOriginal)</button>
          <button class="ld__btn ld__btn--warn" :disabled="isRestored" @click="restore">restoreOriginal</button>
          <div class="ld__count">状态：{{ isRestored ? '初始' : '已替换' }} · {{ count }} 个</div>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ld { display: flex; flex-direction: column; gap: 6px; min-width: 200px; }
.ld__btn { border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; color: #334155; font-size: 12px; padding: 6px; cursor: pointer; }
.ld__btn:hover:not(:disabled) { border-color: #93c5fd; color: #1976d2; }
.ld__btn--warn { color: #dc2626; border-color: #fecaca; }
.ld__btn:disabled { opacity: 0.4; cursor: not-allowed; }
.ld__count { font-size: 11px; color: #64748b; margin-top: 4px; }
</style>
`,Ps=`<script setup lang="ts">
/** 基础图层 4.2 · updateData 全量更新（切换数据集）。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect, computed } from 'vue'
import { createMapEngine, BaseWidget, MapToolbar, LayerTree, Legend, layerManager, type MapEngine, type PopupData, type LayerEngine } from 'geo-flow'
import { initial, datasetX, datasetY } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
let layerEngine: LayerEngine | null = null
const count = computed(() => layerManager.get('stations')?.featureCount ?? 0)
const current = ref('initial')

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  layerEngine = engine.value.layer({
    id: 'stations', name: '监测站', zIndex: 10,
    provider: { type: 'raw', config: { data: initial } },
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 8, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  })
  engine.value.run('update', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})

function switchTo(id: 'initial' | 'X' | 'Y') {
  const data = id === 'initial' ? initial : id === 'X' ? datasetX : datasetY
  layerEngine?.updateData(data)
  current.value = id
}

onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>
<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">基础图层 4.2 · updateData 全量更新</span><span class="app__hint">切换数据集 · 当前 {{ current }} / {{ count }} 个</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <BaseWidget position="bottom-right" title="updateData">
        <div class="ld">
          <button class="ld__btn" :class="{'ld__btn--active': current==='initial'}" @click="switchTo('initial')">初始数据集</button>
          <button class="ld__btn" :class="{'ld__btn--active': current==='X'}" @click="switchTo('X')">数据集 X（北部）</button>
          <button class="ld__btn" :class="{'ld__btn--active': current==='Y'}" @click="switchTo('Y')">数据集 Y（南部）</button>
          <div class="ld__count">当前要素数：{{ count }}</div>
        </div>
      </BaseWidget>
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ld { display: flex; flex-direction: column; gap: 6px; min-width: 180px; }
.ld__btn { border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; color: #334155; font-size: 12px; padding: 6px; cursor: pointer; }
.ld__btn:hover { border-color: #93c5fd; color: #1976d2; }
.ld__btn--active { border-color: #1976d2; color: #1976d2; background: #eef4fb; }
.ld__count { font-size: 11px; color: #64748b; margin-top: 4px; }
</style>
`,Fs=`<script setup lang="ts">
/**
 * 自定义控件渲染（单一组件，按 payload 实例类型分发）。
 * 接收 data = 控件实例（SelectControl/SliderControl/ToggleControl/ColorControl）。
 * 本地镜像 value，变更时回写 data.value 并触发 data.change。
 */
import { ref, watch } from 'vue'
import { SelectControl, SliderControl, ToggleControl, ColorControl } from './controls'

const props = defineProps<{ data: any }>()
const ctrl = props.data
const val = ref<any>(ctrl?.value)
watch(
  () => ctrl?.value,
  (v) => (val.value = v)
)

function emit(v: any) {
  val.value = v
  if (ctrl) ctrl.value = v
  ctrl?.change?.(v)
}
<\/script>

<template>
  <div class="gf-control" v-if="ctrl">
    <label>{{ ctrl.key }}</label>

    <select v-if="ctrl instanceof SelectControl" v-model="val" @change="emit(val)">
      <option v-for="o in ctrl.options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>

    <template v-else-if="ctrl instanceof SliderControl">
      <input
        type="range"
        :min="ctrl.min"
        :max="ctrl.max"
        :step="ctrl.step"
        v-model.number="val"
        @input="emit(val)"
      />
      <span class="gf-val">{{ Number(val).toFixed(2) }}</span>
    </template>

    <template v-else-if="ctrl instanceof ToggleControl">
      <input type="checkbox" v-model="val" @change="emit(val)" />
      <span class="gf-val">{{ val ? 'on' : 'off' }}</span>
    </template>

    <template v-else-if="ctrl instanceof ColorControl">
      <input type="color" v-model="val" @input="emit(val)" />
      <span class="gf-val">{{ String(val) }}</span>
    </template>
  </div>
</template>
`,Is=`<script setup lang="ts">
/**
 * 自定义 socket 渲染：按 typed socket 颜色着色端口色点。
 * rete-vue-plugin classic preset 的 socket render signal payload = TypedSocket 实例。
 */
const props = defineProps<{ data: any }>()
const color = (() => {
  const p = props.data?.payload
  return p?.color || '#64748b'
})()
<\/script>

<template>
  <div class="socket" :style="{ background: color }"></div>
</template>
`,Ls=`<script setup lang="ts">
/**
 * 通用参数面板（用户需求：节点只显示卡片+概述，参数全部走此面板）。
 *
 * 选中画布节点 → 据节点 type 的 NODE_SCHEMAS 渲染控件（select/range/color/toggle/text），
 * 变更回写 paramsMap（serialize 时 buildNodeParams 据此产 MapConfigJSON 片段）。
 */
import { ref, computed, watch } from 'vue'
import { NODE_SCHEMAS, descOf, labelOf, type Field, type ParamsMap } from './nodes'

const props = defineProps<{
  selectedId: string | null
  selectedType: string | null
  paramsMap: ParamsMap
}>()
const emit = defineEmits<{ applied: [] }>()

const values = ref<Record<string, any>>({})

watch(
  () => [props.selectedId, props.selectedType],
  () => {
    if (!props.selectedId || !props.selectedType) {
      values.value = {}
      return
    }
    const p = props.paramsMap.get(props.selectedId) || {}
    values.value = { ...p }
  },
  { immediate: true }
)

const schema = computed<Field[]>(() =>
  props.selectedType ? NODE_SCHEMAS[props.selectedType] || [] : []
)
const desc = computed(() => (props.selectedType ? descOf(props.selectedType) : ''))
const label = computed(() => (props.selectedType ? labelOf(props.selectedType) : ''))

function onField(key: string, v: any) {
  values.value = { ...values.value, [key]: v }
  if (props.selectedId) {
    const cur = props.paramsMap.get(props.selectedId) || {}
    props.paramsMap.set(props.selectedId, { ...cur, [key]: v })
  }
  emit('applied')
}
<\/script>

<template>
  <div class="pp" v-if="selectedId && selectedType">
    <div class="pp__head">
      <span class="pp__type">{{ label }}</span>
      <span class="pp__id">#{{ selectedId.slice(0, 6) }}</span>
    </div>
    <p class="pp__desc">{{ desc }}</p>
    <div class="pp__fields">
      <div v-for="f in schema" :key="f.key" class="pp__row">
        <label>{{ f.label }}</label>
        <select
          v-if="f.type === 'select'"
          :value="values[f.key]"
          @change="onField(f.key, ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="o in f.options" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
        <input
          v-else-if="f.type === 'range'"
          type="range"
          :min="f.min"
          :max="f.max"
          :step="f.step"
          :value="values[f.key]"
          @input="onField(f.key, Number(($event.target as HTMLInputElement).value))"
        />
        <input
          v-else-if="f.type === 'color'"
          type="color"
          :value="values[f.key]"
          @input="onField(f.key, ($event.target as HTMLInputElement).value)"
        />
        <input
          v-else-if="f.type === 'text'"
          type="text"
          :value="values[f.key]"
          @input="onField(f.key, ($event.target as HTMLInputElement).value)"
        />
        <input
          v-else-if="f.type === 'toggle'"
          type="checkbox"
          :checked="!!values[f.key]"
          @change="onField(f.key, ($event.target as HTMLInputElement).checked)"
        />
        <span v-if="f.type === 'range'" class="pp__val">{{ values[f.key] }}</span>
        <span v-else-if="f.type === 'toggle'" class="pp__val">{{ values[f.key] ? 'on' : 'off' }}</span>
      </div>
      <p v-if="!schema.length" class="pp__empty">该节点无可配参数（流程边界/透传节点）</p>
    </div>
    <p class="pp__tip">改参数后点上方「▶ 运行」生效</p>
  </div>
  <div class="pp pp--empty" v-else>
    <p>点选画布节点 → 在此配置参数</p>
  </div>
</template>

<style scoped>
.pp {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px;
  background: #0f1217;
  border-bottom: 1px solid #1f2937;
  max-height: 42vh;
  overflow-y: auto;
}
.pp--empty {
  color: #64748b;
  font-size: 11px;
  text-align: center;
  padding: 14px;
}
.pp__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.pp__type {
  font-size: 12px;
  font-weight: 600;
  color: #93c5fd;
}
.pp__id {
  font-size: 10px;
  color: #64748b;
  font-variant-numeric: tabular-nums;
}
.pp__desc {
  margin: 0;
  font-size: 11px;
  color: #94a3b8;
  line-height: 1.5;
}
.pp__fields {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pp__row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #94a3b8;
}
.pp__row label {
  width: 72px;
  flex: none;
}
.pp__row select,
.pp__row input[type='text'] {
  flex: 1;
  min-width: 0;
  height: 22px;
  background: #1b1f26;
  border: 1px solid #2a323c;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 11px;
  padding: 0 6px;
}
.pp__row input[type='range'] {
  flex: 1;
  min-width: 0;
  accent-color: #60a5fa;
}
.pp__row input[type='color'] {
  width: 30px;
  height: 20px;
  border: 1px solid #2a323c;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  padding: 0;
}
.pp__row input[type='checkbox'] {
  accent-color: #60a5fa;
}
.pp__val {
  width: 34px;
  flex: none;
  text-align: right;
  color: #64748b;
  font-size: 10px;
  font-variant-numeric: tabular-nums;
}
.pp__empty {
  margin: 4px 0;
  font-size: 11px;
  color: #64748b;
}
.pp__tip {
  margin: 4px 0 0;
  font-size: 10px;
  color: #475569;
}
</style>
`,Rs=`<script setup lang="ts">
/**
 * 示例 6.1 · rete v2 原生画布（独立页 · UE/Blender 深色风）。
 *
 * 修复要点（rete v2 各包零 CSS → 节点塌缩 + socket 位置算不出 + 连线 path 退化不可见）：
 * - theme.css：容器网格底色 + 节点深色卡片 + 端口色点 + 连线 stroke + minimap
 * - typed sockets（FEATURE/EFFECT/LAYER/CONTROL/VOID）：异类端口不可连，端口色点提示契约
 * - 自定义控件（Select/Slider/Toggle/Color）：下拉/滑块/开关/色盘，减少文本输入
 * - ~18 节点按 5 类分组（数据源/处理器/效果/图层/输出底图控件）
 * - 子规则流水线嵌入主规则：source→processor*→layer→output；effect→layer.effects
 *   graphToMapConfig 回溯连边收集 processors/effects，layer 即子规则
 * - env 注入：env 面板写 engine.env，layer style.color/radius 为 env 感知闭包
 */
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { NodeEditor, ClassicPreset } from 'rete'
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { VuePlugin, Presets as VuePresets } from 'rete-vue-plugin'
import { HistoryPlugin, Presets as HistoryPresets, HistoryExtensions } from 'rete-history-plugin'
import { MinimapPlugin } from 'rete-minimap-plugin'

import CustomSocket from './CustomSocket.vue'
import { createNode, buildNodeParams, PALETTE, type ParamsMap } from './nodes'
import { PRESET_GRAPHS } from './presets'
import ParamPanel from './ParamPanel.vue'
import './theme.css'

import {
  createMapEngine,
  graphToMapConfig,
  type MapEngine,
  type ReteGraphJSON
} from 'geo-flow'

const reteEl = ref<HTMLDivElement>()
const mapEl = ref<HTMLDivElement>()
const engine = shallowRef<MapEngine | null>(null)
const jsonOut = ref('')
const runLog = ref('')
const env = ref({ theme: 'light' as 'light' | 'dark', riskThreshold: 0, scope: 'all' as 'all' | 'alarm' })
/** 选中节点（ParamPanel 据此显示参数） */
const selectedNodeId = ref<string | null>(null)
const selectedType = ref<string | null>(null)
/** 当前预置示例索引（顶部下拉切换） */
const presetIdx = ref(0)

const paramsMap: ParamsMap = new Map()
const gfType = new Map<string, string>()

let editor: any = null
let area: any = null
let history: any = null

async function addNode(type: string, x = 0, y = 0) {
  const node = createNode(type, paramsMap)
  gfType.set(node.id, type)
  await editor.addNode(node)
  area.translate(node.id, { x, y })
  return node
}

/**
 * 从声明式 ReteGraphJSON 重建画布（清空当前 → 按 preset 重建节点 + 连边）。
 * preset 节点 params 留空 {}，由 createNode(type) 按默认控件值填充 paramsMap；
 * serialize 时 buildNodeParams(type, paramsMap) 重建完整 MapConfigJSON 片段。
 */
async function loadGraph(g: ReteGraphJSON) {
  if (!editor || !area) return
  // 清空当前画布
  for (const n of [...editor.getNodes()]) {
    try {
      await editor.removeNode(n.id)
    } catch {
      /* noop */
    }
  }
  paramsMap.clear()
  gfType.clear()

  const created = new Map<string, any>()
  for (const nd of g.nodes) {
    const node = createNode(nd.type, paramsMap)
    gfType.set(node.id, nd.type)
    ;(node as any).__gfType = nd.type
    if (nd.label) node.label = nd.label
    await editor.addNode(node)
    area.translate(node.id, nd.position)
    created.set(nd.id, node)
  }
  for (const c of g.connections) {
    const s = created.get(c.source)
    const t = created.get(c.target)
    if (s && t) {
      try {
        await editor.addConnection(new ClassicPreset.Connection(s, c.sourceOutput, t, c.targetInput))
      } catch {
        /* 端口类型不匹配等忽略 */
      }
    }
  }
  setTimeout(() => AreaExtensions.zoomAt(area, editor.getNodes()), 60)
}

/** 切换预置示例：加载 preset + 重跑 */
async function switchPreset() {
  await loadGraph(PRESET_GRAPHS[presetIdx.value].graph)
  runGraph()
}

/** 模板节点结构（用户需求：子规则可存成模板节点） */
interface TemplateNode { type: string; dx: number; dy: number }
interface TemplateConn { s: number; sOut: string; t: number; tIn: string }
interface Template { name: string; nodes: TemplateNode[]; conns: TemplateConn[] }

const LS_KEY = 'gf-rete-templates'
const templates = ref<Template[]>(loadTemplates())

function loadTemplates(): Template[] {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? (JSON.parse(raw) as Template[]) : []
  } catch {
    return []
  }
}
function persistTemplates() {
  localStorage.setItem(LS_KEY, JSON.stringify(templates.value))
}

/** 把当前画布图存为模板（节点位置相对第一个节点归一化，连边用节点索引） */
function saveTemplate(name: string) {
  const ns = editor.getNodes()
  if (!ns.length) return
  const positions = ns.map((n: any) => area.nodeViews.get(n.id)?.position || { x: 0, y: 0 })
  const ox = Math.min(...positions.map((p: any) => p.x))
  const oy = Math.min(...positions.map((p: any) => p.y))
  const id2idx = new Map(ns.map((n: any, i: number) => [n.id, i]))
  const tnodes: TemplateNode[] = ns.map((n: any, i: number) => ({
    type: gfType.get(n.id) || (n as any).__gfType || 'comment',
    dx: Math.round(positions[i].x - ox),
    dy: Math.round(positions[i].y - oy)
  }))
  const tconns: TemplateConn[] = editor.getConnections().map((c: any) => ({
    s: id2idx.get(c.source) ?? -1,
    sOut: c.sourceOutput,
    t: id2idx.get(c.target) ?? -1,
    tIn: c.targetInput
  })).filter((c) => c.s >= 0 && c.t >= 0)
  templates.value.push({ name, nodes: tnodes, conns: tconns })
  persistTemplates()
}

/** 展开模板到画布（在指定原点重建节点 + 连边，节点 id 重新生成） */
async function loadTemplate(t: Template, ox = 40, oy = 80) {
  const created: any[] = []
  for (const tn of t.nodes) {
    const node = await addNode(tn.type, ox + tn.dx, oy + tn.dy)
    created.push(node)
  }
  for (const c of t.conns) {
    const s = created[c.s]
    const tg = created[c.t]
    if (s && tg) {
      await editor.addConnection(new ClassicPreset.Connection(s, c.sOut, tg, c.tIn))
    }
  }
  setTimeout(() => AreaExtensions.zoomAt(area, editor.getNodes()), 60)
}

function deleteTemplate(i: number) {
  templates.value.splice(i, 1)
  persistTemplates()
}

const newTplName = ref('')

function serialize(): ReteGraphJSON {
  const nodes = editor.getNodes().map((n: any) => {
    const type = (n as any).__gfType || gfType.get(n.id) || 'comment'
    const p = paramsMap.get(n.id) || {}
    const view = area.nodeViews.get(n.id)
    return {
      id: n.id,
      type,
      label: n.label,
      params: buildNodeParams(type, p),
      position: { x: view?.position?.x || 0, y: view?.position?.y || 0 }
    }
  })
  const connections = editor.getConnections().map((c: any) => ({
    id: c.id,
    source: c.source,
    sourceOutput: c.sourceOutput,
    target: c.target,
    targetInput: c.targetInput
  }))
  return { version: '2.0.0', name: 'rete-editor', nodes, connections }
}

function runGraph() {
  if (!engine.value) return
  const graph = serialize()
  // env 面板手动值（兜底）
  engine.value.env.set('theme', env.value.theme)
  engine.value.env.set('riskThreshold', env.value.riskThreshold)
  engine.value.env.set('scope', env.value.scope)
  // env-context 节点声明值（覆盖 env 面板，图内声明优先）
  const envNodes = graph.nodes.filter((n) => n.type === 'env-context')
  envNodes.forEach((n) => {
    if (n.params.theme != null) engine.value!.env.set('theme', n.params.theme)
    if (n.params.riskThreshold != null) engine.value!.env.set('riskThreshold', n.params.riskThreshold)
    if (n.params.scope != null) engine.value!.env.set('scope', n.params.scope)
  })
  const cfg = graphToMapConfig(graph)
  jsonOut.value = JSON.stringify(cfg, null, 2)
  engine.value.fromJSON(cfg)
  const out =
    graph.nodes.find((n) => n.type === 'engine-run') ||
    graph.nodes.find((n) => n.type === 'output' || n.type === 'map-output')
  const route = (out?.params?.routeName as string) || 'graph'
  engine.value.run(route, {})
  runLog.value = \`运行 route=\${route} · 图层 \${cfg.layers?.length || 0} · 底图 \${cfg.baseLayers?.length || 0} · env节点 \${envNodes.length}\`
}

function undo() {
  history?.undo?.()
}
function redo() {
  history?.redo?.()
}
function setTheme(t: 'light' | 'dark') {
  env.value.theme = t
}
function setScope(s: 'all' | 'alarm') {
  env.value.scope = s
}

/** 轮询选中节点（rete v2 selectableNodes → area.nodeViews.get(id).selected） */
function probeSelect() {
  if (!editor || !area) return
  const nodes = editor.getNodes()
  const sel = nodes.find((n: any) => area.nodeViews.get(n.id)?.selected)
  if (sel) {
    selectedNodeId.value = sel.id
    selectedType.value = gfType.get(sel.id) || (sel as any).__gfType || null
  } else {
    selectedNodeId.value = null
    selectedType.value = null
  }
}
let selectTimer: ReturnType<typeof setInterval> | null = null

async function initRete() {
  if (!reteEl.value) return
  editor = new NodeEditor()
  area = new AreaPlugin(reteEl.value)
  const render = new VuePlugin()
  render.addPreset(
    VuePresets.classic.setup({
      customize: {
        socket() {
          return CustomSocket
        }
      }
    })
  )
  render.addPreset(VuePresets.minimap.setup({ size: 160 }))

  const connection = new ConnectionPlugin()
  connection.addPreset(ConnectionPresets.classic.setup())

  history = new HistoryPlugin()
  history.addPreset(HistoryPresets.classic.setup())

  const minimap = new MinimapPlugin()

  editor.use(area)
  area.use(render)
  area.use(connection)
  editor.use(history)
  area.use(minimap)

  AreaExtensions.simpleNodesOrder(area)
  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl()
  })
  HistoryExtensions.keyboard(history)

  // 加载预置示例 0（声明式 ReteGraphJSON，节点/连边/位置全在 presets.ts）
  await loadGraph(PRESET_GRAPHS[0].graph)
}

onMounted(async () => {
  await initRete()
  engine.value = createMapEngine({ target: mapEl.value! })
  engine.value.env.set('theme', env.value.theme)
  engine.value.env.set('riskThreshold', env.value.riskThreshold)
  engine.value.env.set('scope', env.value.scope)
  runGraph()
  // 选中节点轮询（驱动 ParamPanel 显示）
  selectTimer = setInterval(probeSelect, 200)
})

onUnmounted(() => {
  if (selectTimer) { clearInterval(selectTimer); selectTimer = null }
  try {
    editor?.getNodes?.().forEach((n: any) => editor.removeNode(n.id))
  } catch {
    /* noop */
  }
  engine.value?.destroy()
  editor = null
  area = null
  history = null
})
<\/script>

<template>
  <div class="re">
    <header class="re__bar">
      <span class="re__title">geo-flow · rete v2 原生画布（UE/Blender 深色）</span>
      <span class="re__hint">typed sockets 契约 · 子规则流水线 · 下拉/滑块控件 · env 注入</span>
      <span class="re__bar-spacer" />
      <div class="re__preset">
        <label>预置示例</label>
        <select v-model.number="presetIdx" @change="switchPreset">
          <option v-for="(p, i) in PRESET_GRAPHS" :key="i" :value="i">{{ p.label }}</option>
        </select>
      </div>
    </header>
    <div class="re__body">
      <section class="re__canvas-wrap">
        <div class="re__palette">
          <div v-for="g in PALETTE" :key="g.group" class="re__group">
            <span class="re__group-label">{{ g.group }}</span>
            <button
              v-for="it in g.items"
              :key="it.type"
              @click="addNode(it.type, 40 + Math.random() * 400, 80 + Math.random() * 300)"
            >
              {{ it.label }}
            </button>
          </div>
          <span class="re__sep" />
          <button @click="undo">undo</button>
          <button @click="redo">redo</button>
          <button class="re__run" @click="runGraph">▶ 运行</button>
        </div>
        <div class="re__canvas" ref="reteEl"></div>
      </section>

      <section class="re__side">
        <ParamPanel
          :selected-id="selectedNodeId"
          :selected-type="selectedType"
          :params-map="paramsMap"
        />
        <div class="re__map" ref="mapEl"></div>
        <div class="re__env">
          <div class="re__env-title">外部环境变量注入（engine.env）</div>
          <div class="re__env-row">
            <label>theme</label>
            <div class="re__seg">
              <button :class="{ on: env.theme === 'light' }" @click="setTheme('light')">light</button>
              <button :class="{ on: env.theme === 'dark' }" @click="setTheme('dark')">dark</button>
            </div>
          </div>
          <div class="re__env-row">
            <label>riskThreshold</label>
            <input type="range" min="0" max="1" step="0.05" v-model.number="env.riskThreshold" />
            <span>{{ env.riskThreshold.toFixed(2) }}</span>
          </div>
          <div class="re__env-row">
            <label>scope</label>
            <div class="re__seg">
              <button :class="{ on: env.scope === 'all' }" @click="setScope('all')">all</button>
              <button :class="{ on: env.scope === 'alarm' }" @click="setScope('alarm')">alarm</button>
            </div>
          </div>
          <button class="re__apply" @click="runGraph">应用 env 并重跑</button>
          <div class="re__log">{{ runLog }}</div>

          <!-- 子规则模板节点：存当前图为模板 / 展开模板 / 删除 -->
          <div class="re__tpl">
            <div class="re__env-title">子规则模板（localStorage）</div>
            <div class="re__tpl-input">
              <input v-model="newTplName" placeholder="模板名" />
              <button @click="saveTemplate(newTplName || '模板' + (templates.length + 1)); newTplName = ''">存当前图</button>
            </div>
            <div v-if="!templates.length" class="re__tpl-empty">暂无模板，先存一个</div>
            <div v-for="(t, i) in templates" :key="i" class="re__tpl-item">
              <span class="re__tpl-name">{{ t.name }} <em>({{ t.nodes.length }} 节点)</em></span>
              <button @click="loadTemplate(t)">展开</button>
              <button class="re__tpl-del" @click="deleteTemplate(i)">删</button>
            </div>
          </div>
        </div>
        <details class="re__json">
          <summary>导出 MapConfigJSON（graphToMapConfig）</summary>
          <pre>{{ jsonOut }}</pre>
        </details>
      </section>
    </div>
  </div>
</template>

<style scoped>
.re {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.re__bar {
  background: #0f172a;
  color: #fff;
  padding: 8px 14px;
  font-size: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
}
.re__title {
  font-weight: 600;
}
.re__hint {
  color: #94a3b8;
}
.re__bar-spacer {
  flex: 1;
}
.re__preset {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #94a3b8;
}
.re__preset select {
  background: #1b1f26;
  border: 1px solid #2a323c;
  border-radius: 5px;
  color: #e2e8f0;
  font-size: 11px;
  padding: 3px 8px;
  cursor: pointer;
}
.re__preset select:hover {
  border-color: #60a5fa;
}
.re__body {
  flex: 1;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  min-height: 0;
}
.re__canvas-wrap {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #1f2937;
}
.re__palette {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 6px 10px;
  background: #111418;
  border-bottom: 1px solid #1f2937;
  flex-wrap: wrap;
}
.re__group {
  display: flex;
  align-items: center;
  gap: 4px;
}
.re__group-label {
  font-size: 10px;
  color: #64748b;
  margin-right: 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.re__palette button {
  border: 1px solid #2a323c;
  background: #1b1f26;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 11px;
  color: #cbd5e1;
  cursor: pointer;
}
.re__palette button:hover {
  border-color: #60a5fa;
  color: #93c5fd;
}
.re__run {
  background: #2563eb !important;
  color: #fff !important;
  border-color: #2563eb !important;
  font-weight: 600;
}
.re__sep {
  width: 1px;
  height: 16px;
  background: #2a323c;
  margin: 0 4px;
}
.re__canvas {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #1b1d22;
}
.re__side {
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: #111418;
}
.re__map {
  flex: 1;
  min-height: 240px;
  background: #e5e7eb;
}
.re__env {
  background: #111418;
  border-top: 1px solid #1f2937;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.re__env-title {
  font-size: 12px;
  font-weight: 600;
  color: #93c5fd;
}
.re__env-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #94a3b8;
}
.re__env-row label {
  width: 92px;
}
.re__env-row input {
  flex: 1;
  accent-color: #60a5fa;
}
.re__seg {
  display: flex;
  gap: 4px;
}
.re__seg button {
  border: 1px solid #2a323c;
  background: #1b1f26;
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 11px;
  cursor: pointer;
  color: #cbd5e1;
}
.re__seg button.on {
  border-color: #60a5fa;
  background: #2563eb;
  color: #fff;
}
.re__apply {
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #fff;
  border-radius: 6px;
  padding: 6px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
}
.re__log {
  font-size: 11px;
  color: #64748b;
}
.re__tpl {
  border-top: 1px solid #1f2937;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.re__tpl-input {
  display: flex;
  gap: 4px;
}
.re__tpl-input input {
  flex: 1;
  min-width: 0;
  background: #0f1217;
  border: 1px solid #2a323c;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 11px;
  padding: 3px 6px;
}
.re__tpl-empty {
  font-size: 10px;
  color: #64748b;
}
.re__tpl-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #cbd5e1;
}
.re__tpl-name {
  flex: 1;
  min-width: 0;
}
.re__tpl-name em {
  color: #64748b;
  font-style: normal;
  font-size: 10px;
}
.re__tpl-item button {
  border: 1px solid #2a323c;
  background: #1b1f26;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  color: #cbd5e1;
  cursor: pointer;
}
.re__tpl-item button:hover {
  border-color: #60a5fa;
  color: #93c5fd;
}
.re__tpl-del:hover {
  border-color: #ef4444 !important;
  color: #fca5a5 !important;
}
.re__json {
  border-top: 1px solid #1f2937;
  padding: 6px 12px;
  max-height: 180px;
  overflow: auto;
}
.re__json summary {
  font-size: 11px;
  color: #93c5fd;
  cursor: pointer;
}
.re__json pre {
  margin: 6px 0 0;
  font-size: 10px;
  color: #94a3b8;
  background: #0f1217;
  padding: 6px;
  border-radius: 4px;
  overflow: auto;
}
</style>
`,zs=`<script setup lang="ts">
/** 配图示例 2.2 · 分类配图：按字段分类配色（categorical + palette），支持配置面板即时生效。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import { createMapEngine, MapToolbar, LayerTree, Legend, type MapEngine, type PopupData } from 'geo-flow'
import StyleConfigPanel, { type StyleCfg } from './StyleConfigPanel.vue'
import { styledStations } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

const layerCfg = ref<any>({
  id: 'stations', name: '监测站', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: 7, fillOpacity: 0.85 },
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
})

function applyStyle(cfg: StyleCfg) {
  const le = (engine.value as any)?.engines?.get('stations')
  if (!le) return
  layerCfg.value = { ...layerCfg.value, style: cfg }
  le.updateConfig(layerCfg.value)
  le.restart()
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  engine.value.layer(layerCfg.value)
  engine.value.run('style-categorical', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})
onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">配图 2.2 · 分类配图</span>
      <span class="app__hint">按字段分类配色（categorical + palette） · 右侧面板可切字段/色板即时生效</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-left" />
      <LayerTree :engine="engine" position="bottom-left" />
      <Legend :engine="engine" position="bottom-right" />
      <StyleConfigPanel initial-mode="category" position="top-right" @apply="applyStyle" />
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,Bs=`<script setup lang="ts">
/** 配图示例 2.3 · 表达式参数：radius 走 '\${$feature.risk*8+4}' 表达式串（白名单 $feature 求值）。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import { createMapEngine, MapToolbar, LayerTree, Legend, type MapEngine, type PopupData } from 'geo-flow'
import { styledStations } from './data'
const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  engine.value.layer({
    id: 'stations', name: '监测站', zIndex: 10,
    provider: { type: 'raw', config: { data: styledStations } },
    // 分类配色 + 表达式 radius（按 risk 大小变化）
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: '\${$feature.risk * 8 + 4}', fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  })
  engine.value.run('style-expression', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})
onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>
<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">配图 2.3 · 表达式参数</span><span class="app__hint"><code>radius: '\${'$'}feature.risk * 8 + 4'</code> 表达式串</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>
`,Vs=`<script setup lang="ts">
/** 配图示例 2.4 · 函数参数：radius 走 (f)=>6+f.get('risk')*10 匿名函数（10k 热路径，闭包直算）。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import { createMapEngine, MapToolbar, LayerTree, Legend, type MapEngine, type PopupData } from 'geo-flow'
import { styledStations } from './data'
const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)
onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  engine.value.layer({
    id: 'stations', name: '监测站', zIndex: 10,
    provider: { type: 'raw', config: { data: styledStations } },
    // 分类配色 + 函数 radius（按 risk 大小变化，闭包直算）
    style: { mode: 'categorical', colorField: 'level', palette: 'semantic', radius: (f: any) => 6 + f.get('risk') * 10, fillOpacity: 0.85 },
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
    interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
  })
  engine.value.run('style-function', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})
onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>
<template>
  <div class="app">
    <header class="app__bar"><span class="app__title">配图 2.4 · 函数参数</span><span class="app__hint"><code>radius: (f) =&gt; 6 + f.get('risk') * 10</code> 匿名函数</span></header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-right" />
      <LayerTree :engine="engine" position="top-left" />
      <Legend :engine="engine" position="bottom-left" />
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card"><div class="popup__title">{{ popup.title }}</div><div class="popup__rows"><div v-for="row in popup.rows" :key="row.label" class="popup__row"><span class="popup__row-label">{{ row.label }}</span><span class="popup__row-value">{{ row.value }}</span></div></div></div>
      </div>
    </div>
  </div>
</template>
`,Hs=`<script setup lang="ts">
/**
 * 配图示例 2.5 · 多字段控制样式（最复杂）：
 *
 * 一个点要素同时被「多个属性字段」驱动，且**高亮态同样多字段联动**：
 * - 圆形底色 color  ← colorField（默认 level）
 * - 圆点大小 radius ← sizeField（默认 risk）
 * - 图标 icon      ← iconField（默认 type）
 * - 返回 Style[] 组合（光环 → 圆底 → icon），icon 叠在圆底之上不被遮住
 *
 * 现以共享 StyleConfigPanel 的 multiCategory 模式驱动，三字段可在面板即时切换并生效。
 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import { createMapEngine, MapToolbar, LayerTree, Legend, type MapEngine, type PopupData } from 'geo-flow'
import StyleConfigPanel, { type StyleCfg } from './StyleConfigPanel.vue'
import { styledStations } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

const layerCfg = ref<any>({
  id: 'stations', name: '监测站（多字段配图）', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  // 初始 style 即 multiCategory 形态（与 StyleConfigPanel.build 的 multiCategory 分支一致）
  style: {
    mode: 'categorical',
    colorField: 'level',
    palette: 'semantic',
    fillOpacity: 0.85,
    color: (f: any, ctx: any) =>
      ctx.$state === 'normal'
        ? ({ 高: '#ef4444', 中: '#f59e0b', 低: '#22c55e' } as Record<string, string>)[String(f.get('level'))] || '#4f8cff'
        : '#ffd166',
    radius: (f: any) => 6 + Number(f.get('risk') || 0) * 10,
    icon: (f: any, ctx: any) =>
      ctx.$state === 'normal'
        ? ({ alarm: 'icon.alarm', fault: 'icon.fault', warn: 'icon.warn', normal: 'icon.ok', info: 'icon.info' } as Record<string, string>)[String(f.get('type'))] || 'icon.info'
        : 'icon.sel'
  },
  popup: { titleField: 'name', contentFields: ['name', 'type', 'level', 'risk'] },
  interaction: { highlight: { trigger: 'hover', color: '#ffd166' }, cursor: true }
})

function applyStyle(cfg: StyleCfg) {
  const le = (engine.value as any)?.engines?.get('stations')
  if (!le) return
  layerCfg.value = { ...layerCfg.value, style: cfg }
  le.updateConfig(layerCfg.value)
  le.restart()
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  engine.value.layer(layerCfg.value)
  engine.value.run('style-multi', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})
onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">配图 2.5 · 多字段控制样式（最复杂）</span>
      <span class="app__hint">底色←level · 大小←risk · icon←type · 高亮三联动 · 右侧面板可切三字段即时生效</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-left" />
      <LayerTree :engine="engine" position="bottom-left" />
      <Legend :engine="engine" position="bottom-right" />
      <StyleConfigPanel initial-mode="multiCategory" position="top-right" @apply="applyStyle" />
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,Us=`<script setup lang="ts">
/** 配图示例 2.1 · 单值配图：所有要素同色同大小，支持配置面板即时生效。 */
import { onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import { createMapEngine, MapToolbar, LayerTree, Legend, type MapEngine, type PopupData } from 'geo-flow'
import StyleConfigPanel, { type StyleCfg } from './StyleConfigPanel.vue'
import { styledStations } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

/** 当前图层配置（applyStyle 时整体替换为新对象，触发 updateConfig 引用比较清缓存） */
const layerCfg = ref<any>({
  id: 'stations', name: '监测站', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  style: { mode: 'single', color: '#1976d2', radius: 7, fillOpacity: 0.85 },
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
})

function applyStyle(cfg: StyleCfg) {
  const le = (engine.value as any)?.engines?.get('stations')
  if (!le) return
  layerCfg.value = { ...layerCfg.value, style: cfg }
  le.updateConfig(layerCfg.value)
  le.restart()
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  engine.value.layer(layerCfg.value)
  engine.value.run('style-single', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})
onUnmounted(() => { engine.value?.destroy(); engine.value = null })
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">配图 2.1 · 单值配图</span>
      <span class="app__hint">所有要素同色同大小（single） · 右侧面板可即时编辑生效</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-left" />
      <LayerTree :engine="engine" position="bottom-left" />
      <Legend :engine="engine" position="bottom-right" />
      <StyleConfigPanel initial-mode="single" position="top-right" @apply="applyStyle" />
      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,Ws=`<script setup lang="ts">
/**
 * 配图示例 2.6 · 分阶段链式 StyleBuilder + 规则引擎 + 工厂。
 *
 * 展示 createStyle() 的阶段化链式用法（fill / stroke / circle / icon / text / rule），
 * 以及 StyleRuleEngine（categorical / continuous 规则命中覆盖属性），
 * 底层走 styles/ 工厂（Point/Icon/Text）构造 ol.style.Style。
 *
 * 右侧面板切换 4 个预设方案，每个方案展示对应的 builder 链式代码片段（只读）。
 */
import { computed, onMounted, onUnmounted, ref, shallowRef, watchEffect } from 'vue'
import {
  createMapEngine,
  createStyle,
  MapToolbar,
  LayerTree,
  Legend,
  type MapEngine,
  type PopupData,
  type StyleConfigInput
} from 'geo-flow'
import { styledStations } from './data'

const mapEl = ref<HTMLDivElement>()
const popupEl = ref<HTMLDivElement>()
const popup = ref<PopupData | null>(null)
const engine = shallowRef<MapEngine | null>(null)

/* ---------------- 4 个预设方案：builder 链式产出 StyleConfigInput ---------------- */

/** 方案 1：分阶段基础（fill + stroke + circle + text） */
const preset1 = createStyle()
  .fill({ color: '#2563eb', opacity: 0.5 })
  .stroke({ color: '#1e3a8a', width: 2 })
  .circle({ radius: 9, color: '#2563eb', opacity: 0.85, strokeColor: '#fff', strokeWidth: 2 })
  .text({ field: 'name', font: '600 12px PingFang SC, sans-serif', color: '#fff', outlineColor: 'rgba(10,18,32,0.85)', outlineWidth: 3, offsetY: -18 })
  .toJSON()

/** 方案 2：icon + text 叠放（circle 底 + icon + text 标注） */
const preset2 = createStyle()
  .circle({ radius: 12, color: '#f59e0b', opacity: 0.4, strokeColor: '#f59e0b', strokeWidth: 2 })
  .icon({ src: 'icon.alarm', scale: 1.0, opacity: 1 })
  .text({ field: 'name', font: '500 11px PingFang SC, sans-serif', color: '#fff', outlineColor: 'rgba(10,18,32,0.85)', outlineWidth: 3, offsetY: -20 })
  .toJSON()

/** 方案 3：规则引擎（categorical 按 level 配色 + continuous 按 risk 调大小） */
const preset3 = createStyle()
  .circle({ radius: 7, strokeColor: '#fff', strokeWidth: 1.5 })
  .text({ field: 'name', font: '500 11px PingFang SC, sans-serif', color: '#fff', outlineColor: 'rgba(10,18,32,0.85)', outlineWidth: 2, offsetY: -16, show: '\${$feature.risk > 0.6}' })
  .rule({
    id: 'r-level',
    mode: 'categorical',
    priority: 10,
    field: 'level',
    categories: {
      高: { color: '#ef4444' },
      中: { color: '#f59e0b' },
      低: { color: '#22c55e' }
    },
    fallback: { color: '#64748b' }
  })
  .rule({
    id: 'r-risk',
    mode: 'continuous',
    priority: 5,
    field: 'risk',
    ranges: [
      { min: 0.8, max: 1.0, style: { radius: 12 } },
      { min: 0.5, max: 0.8, style: { radius: 9 } },
      { min: 0, max: 0.5, style: { radius: 6 } }
    ]
  })
  .toJSON()

/** 方案 4：配置数组（外圈光环 + 内圈实底 + icon + text） */
const preset4: StyleConfigInput = [
  createStyle()
    .circle({ radius: 18, color: '#ffd166', opacity: 0.35, strokeColor: '#ffd166', strokeWidth: 1 })
    .toJSON(),
  createStyle()
    .circle({ radius: 8, color: '#1976d2', opacity: 0.95, strokeColor: '#fff', strokeWidth: 2 })
    .icon({ src: 'icon.alarm', scale: 0.8 })
    .text({ field: 'name', font: '600 11px PingFang SC, sans-serif', color: '#fff', outlineColor: 'rgba(10,18,32,0.85)', outlineWidth: 3, offsetY: -20 })
    .toJSON()
]

interface Preset { key: string; label: string; style: StyleConfigInput; code: string }
const presets: Preset[] = [
  {
    key: 'stage',
    label: '分阶段基础',
    style: preset1,
    code: \`createStyle()
  .fill({ color: '#2563eb', opacity: 0.5 })
  .stroke({ color: '#1e3a8a', width: 2 })
  .circle({ radius: 9, color: '#2563eb',
    strokeColor: '#fff', strokeWidth: 2 })
  .text({ field: 'name', color: '#fff',
    offsetY: -18 })
  .toJSON()\`
  },
  {
    key: 'icon',
    label: 'icon + text 叠放',
    style: preset2,
    code: \`createStyle()
  .circle({ radius: 12, color: '#f59e0b', opacity: 0.4 })
  .icon({ src: 'icon.alarm', scale: 1.0 })
  .text({ field: 'name', offsetY: -20 })
  .toJSON()\`
  },
  {
    key: 'rule',
    label: '规则引擎（level+risk）',
    style: preset3,
    code: \`createStyle()
  .circle({ radius: 7, strokeColor: '#fff' })
  .text({ field: 'name',
    show: '\\\${$feature.risk > 0.6}' })
  .rule({
    id: 'r-level', mode: 'categorical',
    priority: 10, field: 'level',
    categories: {
      高: { color: '#ef4444' },
      中: { color: '#f59e0b' },
      低: { color: '#22c55e' }
    }
  })
  .rule({
    id: 'r-risk', mode: 'continuous',
    priority: 5, field: 'risk',
    ranges: [
      { min: 0.8, max: 1.0, style: { radius: 12 } },
      { min: 0.5, max: 0.8, style: { radius: 9 } },
      { min: 0, max: 0.5, style: { radius: 6 } }
    ]
  })
  .toJSON()\`
  },
  {
    key: 'array',
    label: '配置数组（外圈+内圈+icon+text）',
    style: preset4,
    code: \`// StyleConfigInput = StyleConfigJSON[]
[
  createStyle()
    .circle({ radius: 18, color: '#ffd166',
      opacity: 0.35 })
    .toJSON(),
  createStyle()
    .circle({ radius: 8, color: '#1976d2' })
    .icon({ src: 'icon.alarm', scale: 0.8 })
    .text({ field: 'name' })
    .toJSON()
]\`
  }
]

const activePreset = ref<Preset>(presets[0])
const layerCfg = ref<any>({
  id: 'stations', name: '监测站', zIndex: 10,
  provider: { type: 'raw', config: { data: styledStations } },
  style: activePreset.value.style,
  popup: { titleField: 'name', contentFields: ['name', 'level', 'risk', 'value'] },
  interaction: { highlight: { trigger: 'click', color: '#ff6b00' }, cursor: true }
})

function selectPreset(p: Preset) {
  activePreset.value = p
  layerCfg.value = { ...layerCfg.value, style: p.style }
  const le = (engine.value as any)?.engines?.get('stations')
  if (le) {
    le.updateConfig(layerCfg.value)
    le.restart()
  }
}

onMounted(() => {
  engine.value = createMapEngine({ target: mapEl.value!, popupEl: popupEl.value! })
  engine.value.baseLayer('basemap.osm').control('attribution').control('scale')
  engine.value.layer(layerCfg.value)
  engine.value.run('style-stage', {})
  watchEffect(() => { popup.value = engine.value?.state.popup ?? null })
})
onUnmounted(() => { engine.value?.destroy(); engine.value = null })

const codeLines = computed(() => activePreset.value.code.split('\\n'))
<\/script>

<template>
  <div class="app">
    <header class="app__bar">
      <span class="app__title">配图 2.6 · 分阶段链式 StyleBuilder + 规则引擎</span>
      <span class="app__hint">fill / stroke / circle / icon / text / rule 阶段化链式 · 底层走 styles 工厂</span>
    </header>
    <div class="app__stage">
      <div class="app__map" ref="mapEl"></div>
      <MapToolbar :engine="engine" position="top-left" />
      <LayerTree :engine="engine" position="bottom-left" />
      <Legend :engine="engine" position="bottom-right" />

      <!-- 方案选择 + 代码片段 -->
      <div class="panel">
        <div class="panel__seg">
          <button
            v-for="p in presets"
            :key="p.key"
            :class="{ on: activePreset.key === p.key }"
            @click="selectPreset(p)"
          >{{ p.label }}</button>
        </div>
        <div class="panel__code-head">builder 链式代码</div>
        <pre class="panel__code"><code><span v-for="(ln, i) in codeLines" :key="i" class="panel__ln"><span class="panel__no">{{ i + 1 }}</span><span class="panel__txt">{{ ln || ' ' }}</span>
</span></code></pre>
        <p class="panel__tip">切换方案即时生效。规则引擎方案：level 决定颜色、risk 决定半径；text.show 用表达式控制只在高风险站显示标注。</p>
      </div>

      <div class="popup" ref="popupEl">
        <div v-if="popup" class="popup__card">
          <div class="popup__title">{{ popup.title }}</div>
          <div class="popup__rows">
            <div v-for="row in popup.rows" :key="row.label" class="popup__row">
              <span class="popup__row-label">{{ row.label }}</span>
              <span class="popup__row-value">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app { display: flex; flex-direction: column; height: 100%; }
.app__bar {
  flex: none; height: 44px; display: flex; align-items: center; gap: 12px;
  padding: 0 14px; background: #0f172a; color: #e2e8f0;
}
.app__title { font-size: 13px; font-weight: 600; }
.app__hint { font-size: 11px; color: #94a3b8; }
.app__stage { flex: 1; min-height: 0; position: relative; }
.app__map { position: absolute; inset: 0; }
.panel {
  position: absolute; top: 12px; right: 12px; width: 360px;
  background: rgba(15, 23, 42, 0.92); color: #e2e8f0;
  border-radius: 8px; padding: 10px 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  backdrop-filter: blur(6px);
  max-height: 80vh; overflow-y: auto;
}
.panel__seg { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 8px; }
.panel__seg button {
  flex: 1; min-width: 80px; border: 1px solid #334155;
  background: #1e293b; color: #cbd5e1; border-radius: 4px;
  padding: 5px 6px; font-size: 11px; cursor: pointer;
}
.panel__seg button.on { border-color: #60a5fa; background: rgba(96,165,250,0.2); color: #fff; }
.panel__code-head { font-size: 11px; color: #94a3b8; margin: 6px 0 4px; }
.panel__code {
  margin: 0; background: #0b1220; border: 1px solid #1e293b;
  border-radius: 5px; padding: 8px 0; max-height: 320px; overflow: auto;
  font-family: 'JetBrains Mono', 'Consolas', monospace; font-size: 11px; line-height: 1.55;
}
.panel__ln { display: block; }
.panel__no {
  display: inline-block; width: 32px; text-align: right; padding-right: 10px;
  color: #475569; user-select: none; border-right: 1px solid #1e293b; margin-right: 10px;
}
.panel__txt { white-space: pre; color: #e2e8f0; }
.panel__tip { margin: 8px 0 0; font-size: 10px; color: #94a3b8; line-height: 1.5; }
.popup { position: absolute; inset: 0; pointer-events: none; }
.popup__card {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  min-width: 180px; background: #fff; border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2); padding: 8px 12px; pointer-events: auto;
}
.popup__title { font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 6px; }
.popup__row { display: flex; justify-content: space-between; font-size: 11px; color: #475569; }
.popup__row-label { color: #94a3b8; }
</style>
`,Gs=`<script setup lang="ts">
/**
 * 配图示例共享配置面板（spec §11.5）。
 *
 * 三种模式可即时切换并生效（emit apply → demo 调 LayerEngine.updateConfig + restart）：
 * - single        统一样式（同色同大小），返回单 Style
 * - category      单字段分级 / 区间分段（colorField + palette），返回单 Style
 * - multiCategory 多字段综合定义：底色←colorField / 大小←sizeField / icon←iconField，
 *                 每个属性走匿名函数，返回 Style[]（光环→圆底→icon）
 * - styleArray   配置数组形态：style 直接给 StyleConfigJSON[]，库逐项渲染并拍平为 Style[]
 *                （可增删项数，直观验证「N 个配置 → N 个 Style」）
 *
 * 设计原则：与库能力对齐，不扩展库；面板只产 StyleConfigJSON，库的 resolveStyle 已支持
 * 常量/表达式/匿名函数三种形态，故面板控件全用"下拉/滑块/色盘"即可覆盖三模式。
 */
import { computed, ref, watch } from 'vue'
import { BaseWidget } from 'geo-flow'
import { styledStations } from './data'

type Mode = 'single' | 'category' | 'multiCategory' | 'styleArray'

/** 配置数组中的单项编辑态（与 StyleConfigJSON 对齐，简化的可编辑子集） */
interface StyleItem {
  mode: 'single' | 'categorical'
  color: string
  colorField: string
  palette: string
  radius: number
  width: number
  fillOpacity: number
}

/** 配图配置（与库 StyleConfigJSON 形态一致；含函数时非合法 JSON，运行时由 resolveStyle 消费） */
export type StyleCfg = Record<string, any>

const props = defineProps<{
  /** 初始模式（按示例入口不同） */
  initialMode?: Mode
  /** 面板浮层位置 */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}>()
const emit = defineEmits<{ apply: [cfg: StyleCfg] }>()

const mode = ref<Mode>(props.initialMode ?? 'single')
const position = computed(() => props.position ?? 'top-right')

/** 数据字段选项（从 styledStations 派生） */
const FIELDS = Array.from(
  new Set(styledStations.features.flatMap((f) => Object.keys(f.properties as Record<string, any>)))
)
const FIELD_OPTS = FIELDS.map((k) => ({ label: k, value: k }))
const PALETTE_OPTS = [
  { label: 'semantic', value: 'semantic' },
  { label: 'blue', value: 'blue' },
  { label: 'green', value: 'green' },
  { label: 'warm', value: 'warm' }
]

/* ---- single 模式参数 ---- */
const sColor = ref('#1976d2')
const sRadius = ref(7)
const sFill = ref(0.85)

/* ---- category 模式参数 ---- */
const cField = ref('level')
const cPalette = ref('semantic')
const cRadius = ref(7)
const cFill = ref(0.85)

/* ---- styleArray 模式参数（配置数组，逐项 → Style[]） ---- */
const aItems = ref<StyleItem[]>([
  { mode: 'single', color: '#ffd166', colorField: 'level', palette: 'semantic', radius: 16, width: 1.5, fillOpacity: 0.9 },
  { mode: 'single', color: '#1976d2', colorField: 'level', palette: 'semantic', radius: 8, width: 2, fillOpacity: 0.95 }
])

/* ---- multiCategory 模式参数 ---- */
const mColorField = ref('level')
const mSizeField = ref('risk')
const mIconField = ref('type')
const mPalette = ref('semantic')
const mBaseRadius = ref(6)
const mHlColor = ref('#ffd166')

/** 多字段驱动查找表（与 MultiAttrStyleDemo 内置一致） */
const LEVEL_COLOR: Record<string, string> = { 高: '#ef4444', 中: '#f59e0b', 低: '#22c55e' }
const TYPE_ICON: Record<string, string> = {
  alarm: 'icon.alarm',
  fault: 'icon.fault',
  warn: 'icon.warn',
  normal: 'icon.ok',
  info: 'icon.info'
}

/** styleArray：配置数组 → 每项独立成图，渲染顺序 = 数组顺序（后项压在前项之上） */
function buildArray(): StyleItem[] {
  return aItems.value.map((i) => ({
    mode: i.mode,
    color: i.mode === 'categorical' ? undefined : i.color,
    colorField: i.mode === 'categorical' ? i.colorField : undefined,
    palette: i.mode === 'categorical' ? i.palette : undefined,
    radius: i.radius,
    width: i.width,
    fillOpacity: i.fillOpacity
  })) as StyleCfg
}

/** 由当前模式 + 参数构造 StyleCfg（multiCategory 时各属性均为匿名函数，返回 Style[]） */
function build(): StyleCfg {
  if (mode.value === 'styleArray') return buildArray()
  if (mode.value === 'single') {
    return {
      mode: 'single',
      color: sColor.value,
      radius: sRadius.value,
      fillOpacity: sFill.value
    }
  }
  if (mode.value === 'category') {
    return {
      mode: 'categorical',
      colorField: cField.value,
      palette: cPalette.value,
      radius: cRadius.value,
      fillOpacity: cFill.value
    }
  }
  // multiCategory：底色←colorField / 大小←sizeField / icon←iconField，高亮态三联动
  const cf = mColorField.value
  const sf = mSizeField.value
  const ifield = mIconField.value
  const hl = mHlColor.value
  const base = mBaseRadius.value
  return {
    mode: 'categorical',
    colorField: cf,
    palette: mPalette.value,
    fillOpacity: 0.85,
    // ① 底色由 colorField 驱动；高亮态换高亮金色
    color: (f: any, ctx: any) =>
      ctx.$state === 'normal' ? LEVEL_COLOR[String(f.get(cf))] || '#4f8cff' : hl,
    // ② 大小由 sizeField 驱动：base + sizeField*10
    radius: (f: any) => base + Number(f.get(sf) || 0) * 10,
    // ③ icon 由 iconField 驱动；高亮态换星形（库渲染序：光环→圆底→icon，icon 不被遮盖）
    icon: (f: any, ctx: any) =>
      ctx.$state === 'normal' ? TYPE_ICON[String(f.get(ifield))] || 'icon.info' : 'icon.sel'
  }
}

watch(
  [
    mode, sColor, sRadius, sFill,
    cField, cPalette, cRadius, cFill,
    mColorField, mSizeField, mIconField, mPalette, mBaseRadius, mHlColor,
    aItems
  ],
  () => emit('apply', build()),
  { immediate: true, deep: true }
)

/* ---- styleArray 列表增删 ---- */
function addItem() {
  aItems.value.push({ mode: 'single', color: '#22c55e', colorField: 'level', palette: 'semantic', radius: 4, width: 1, fillOpacity: 0.6 })
}
function removeItem(i: number) {
  if (aItems.value.length <= 1) return
  aItems.value.splice(i, 1)
}
<\/script>

<template>
  <BaseWidget :position="position" title="配图配置面板">
    <div class="scp">
      <!-- 模式切换 -->
      <div class="scp__seg">
      <button
          v-for="m in (['single','category','multiCategory','styleArray'] as Mode[])"
          :key="m"
          :class="{ on: mode === m }"
          @click="mode = m"
      >{{ m === 'single' ? 'single 统一' : m === 'category' ? 'category 单字段' : m === 'multiCategory' ? 'multiCategory 多字段' : 'styleArray 配置数组' }}</button>
      </div>

      <!-- single -->
      <div v-if="mode === 'single'" class="scp__group">
        <div class="scp__row">
          <label>颜色 color</label>
          <input type="color" v-model="sColor" />
          <span class="scp__val">{{ sColor }}</span>
        </div>
        <div class="scp__row">
          <label>半径 radius</label>
          <input type="range" min="3" max="20" step="1" v-model.number="sRadius" />
          <span class="scp__val">{{ sRadius }}</span>
        </div>
        <div class="scp__row">
          <label>透明度 fillOpacity</label>
          <input type="range" min="0.1" max="1" step="0.05" v-model.number="sFill" />
          <span class="scp__val">{{ sFill.toFixed(2) }}</span>
        </div>
        <p class="scp__tip">所有要素同色同大小，返回单 Style。</p>
      </div>

      <!-- category -->
      <div v-if="mode === 'category'" class="scp__group">
        <div class="scp__row">
          <label>分级字段</label>
          <select v-model="cField">
            <option v-for="f in FIELD_OPTS" :key="f.value" :value="f.value">{{ f.label }}</option>
          </select>
        </div>
        <div class="scp__row">
          <label>色板 palette</label>
          <select v-model="cPalette">
            <option v-for="p in PALETTE_OPTS" :key="p.value" :value="p.value">{{ p.label }}</option>
          </select>
        </div>
        <div class="scp__row">
          <label>半径 radius</label>
          <input type="range" min="3" max="20" step="1" v-model.number="cRadius" />
          <span class="scp__val">{{ cRadius }}</span>
        </div>
        <div class="scp__row">
          <label>透明度 fillOpacity</label>
          <input type="range" min="0.1" max="1" step="0.05" v-model.number="cFill" />
          <span class="scp__val">{{ cFill.toFixed(2) }}</span>
        </div>
        <p class="scp__tip">按字段值分类配色（categorical + palette），返回单 Style。</p>
      </div>

      <!-- multiCategory -->
      <div v-if="mode === 'multiCategory'" class="scp__group">
        <div class="scp__row">
          <label>底色字段</label>
          <select v-model="mColorField">
            <option v-for="f in FIELD_OPTS" :key="f.value" :value="f.value">{{ f.label }}</option>
          </select>
        </div>
        <div class="scp__row">
          <label>大小字段</label>
          <select v-model="mSizeField">
            <option v-for="f in FIELD_OPTS" :key="f.value" :value="f.value">{{ f.label }}</option>
          </select>
        </div>
        <div class="scp__row">
          <label>图标字段</label>
          <select v-model="mIconField">
            <option v-for="f in FIELD_OPTS" :key="f.value" :value="f.value">{{ f.label }}</option>
          </select>
        </div>
        <div class="scp__row">
          <label>色板 palette</label>
          <select v-model="mPalette">
            <option v-for="p in PALETTE_OPTS" :key="p.value" :value="p.value">{{ p.label }}</option>
          </select>
        </div>
        <div class="scp__row">
          <label>基础半径</label>
          <input type="range" min="3" max="14" step="1" v-model.number="mBaseRadius" />
          <span class="scp__val">{{ mBaseRadius }}</span>
        </div>
        <div class="scp__row">
          <label>高亮色</label>
          <input type="color" v-model="mHlColor" />
          <span class="scp__val">{{ mHlColor }}</span>
        </div>
        <p class="scp__tip">底色←colorField · 大小←sizeField · icon←iconField，匿名函数驱动，返回 Style[]（光环→圆底→icon）。</p>
      </div>

      <!-- styleArray：配置数组形态（object[] → Style[]） -->
      <div v-if="mode === 'styleArray'" class="scp__group">
        <div class="scp__arr-head">
          <span class="scp__arr-cnt">{{ aItems.length }} 项</span>
          <button class="scp__add" @click="addItem">+ 添加样式项</button>
        </div>
        <div v-for="(it, i) in aItems" :key="i" class="scp__item">
          <div class="scp__item-head">
            <span class="scp__item-idx">项 {{ i + 1 }}</span>
            <select v-model="it.mode" class="scp__item-mode">
              <option value="single">single</option>
              <option value="categorical">categorical</option>
            </select>
            <button v-if="aItems.length > 1" class="scp__del" @click="removeItem(i)">删除</button>
          </div>
          <div v-if="it.mode === 'single'" class="scp__row">
            <label>颜色 color</label>
            <input type="color" v-model="it.color" />
            <span class="scp__val">{{ it.color }}</span>
          </div>
          <template v-else>
            <div class="scp__row">
              <label>分级字段</label>
              <select v-model="it.colorField">
                <option v-for="f in FIELD_OPTS" :key="f.value" :value="f.value">{{ f.label }}</option>
              </select>
            </div>
            <div class="scp__row">
              <label>色板</label>
              <select v-model="it.palette">
                <option v-for="p in PALETTE_OPTS" :key="p.value" :value="p.value">{{ p.label }}</option>
              </select>
            </div>
          </template>
          <div class="scp__row">
            <label>半径 radius</label>
            <input type="range" min="2" max="24" step="1" v-model.number="it.radius" />
            <span class="scp__val">{{ it.radius }}</span>
          </div>
          <div class="scp__row">
            <label>线宽 width</label>
            <input type="range" min="0" max="8" step="0.5" v-model.number="it.width" />
            <span class="scp__val">{{ it.width }}</span>
          </div>
          <div class="scp__row">
            <label>透明度</label>
            <input type="range" min="0.1" max="1" step="0.05" v-model.number="it.fillOpacity" />
            <span class="scp__val">{{ it.fillOpacity.toFixed(2) }}</span>
          </div>
        </div>
        <p class="scp__tip">style 直接给配置数组（object[]）：库逐项渲染并拍平为 Style[]，后项压在前项之上。典型用法：外圈光环 + 内圈实底。</p>
      </div>
    </div>
  </BaseWidget>
</template>

<style scoped>
.scp {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 280px;
  max-height: 70vh;
  overflow-y: auto;
}
.scp__seg {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.scp__seg button {
  flex: 1;
  min-width: 90px;
  border: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 5px;
  padding: 5px 6px;
  font-size: 11px;
  color: #475569;
  cursor: pointer;
}
.scp__seg button.on {
  border-color: #2563eb;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
}
.scp__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.scp__row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #475569;
}
.scp__row label {
  width: 84px;
  flex: none;
}
.scp__row select,
.scp__row input[type='color'] {
  flex: 1;
  min-width: 0;
  height: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 11px;
  background: #fff;
}
.scp__row input[type='range'] {
  flex: 1;
  min-width: 0;
  accent-color: #2563eb;
}
.scp__val {
  width: 38px;
  flex: none;
  text-align: right;
  color: #64748b;
  font-variant-numeric: tabular-nums;
}
.scp__tip {
  margin: 4px 0 0;
  font-size: 10px;
  color: #94a3b8;
  line-height: 1.5;
}
.scp__arr-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
}
.scp__arr-cnt {
  font-size: 11px;
  color: #64748b;
}
.scp__add {
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #fff;
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 11px;
  cursor: pointer;
}
.scp__item {
  border: 1px dashed #cbd5e1;
  border-radius: 5px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.scp__item-head {
  display: flex;
  align-items: center;
  gap: 6px;
}
.scp__item-idx {
  font-size: 11px;
  font-weight: 600;
  color: #2563eb;
}
.scp__item-mode {
  flex: 1;
  height: 22px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 11px;
  background: #fff;
}
.scp__del {
  border: 1px solid #ef4444;
  background: #fff;
  color: #ef4444;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
}
</style>
`,Ks=e=>e.startsWith(`/`);function qs(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Js(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&qs(e.default)}var Ys=Object.assign;function Xs(e,t){let n={};for(let r in t){let i=t[r];n[r]=Qs(i)?i.map(e):e(i)}return n}var Zs=()=>{},Qs=Array.isArray;function $s(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var ec=Symbol(``);function tc(e,t){return Ys(Error(),{type:e,[ec]:!0},t)}function nc(e,t){return e instanceof Error&&ec in e&&(t==null||!!(e.type&t))}var rc=Symbol(``),ic=Symbol(``),ac=Symbol(``),oc=Symbol(``),sc=Symbol(``);function cc(e){return Xn(oc)}var lc=typeof document<`u`,uc=/#/g,dc=/&/g,fc=/\//g,pc=/=/g,mc=/\?/g,hc=/\+/g,gc=/%5B/g,_c=/%5D/g,vc=/%5E/g,yc=/%60/g,bc=/%7B/g,xc=/%7C/g,Sc=/%7D/g,Cc=/%20/g;function wc(e){return e==null?``:encodeURI(``+e).replace(xc,`|`).replace(gc,`[`).replace(_c,`]`)}function Tc(e){return wc(e).replace(bc,`{`).replace(Sc,`}`).replace(vc,`^`)}function Ec(e){return wc(e).replace(hc,`%2B`).replace(Cc,`+`).replace(uc,`%23`).replace(dc,`%26`).replace(yc,"`").replace(bc,`{`).replace(Sc,`}`).replace(vc,`^`)}function Dc(e){return Ec(e).replace(pc,`%3D`)}function Oc(e){return wc(e).replace(uc,`%23`).replace(mc,`%3F`)}function kc(e){return Oc(e).replace(fc,`%2F`)}function Ac(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var jc=/\/$/,Mc=e=>e.replace(jc,``);function Nc(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Vc(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Ac(o)}}function Pc(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Fc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ic(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Lc(t.matched[r],n.matched[i])&&Rc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Lc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!zc(e[n],t[n]))return!1;return!0}function zc(e,t){return Qs(e)?Bc(e,t):Qs(t)?Bc(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Bc(e,t){return Qs(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Vc(e,t){if(Ks(e))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Hc={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function Uc(e){if(!e){if(lc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Mc(e)}var Wc=/^[^#]+#/;function Gc(e,t){return e.replace(Wc,`#`)+t}function Kc(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var qc=()=>history.scrollRestoration===`manual`?{left:window.scrollX,top:window.scrollY}:null;function Jc(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Kc(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Yc(e,t){return(history.state?history.state.position-t:-1)+e}var Xc=new Map;function Zc(e){Xc.set(e,qc())}function Qc(e){let t=Xc.get(e);return Xc.delete(e),t}function $c(e){return typeof e==`string`||e&&typeof e==`object`}function el(e){return typeof e==`string`||typeof e==`symbol`}function tl(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(hc,` `),i=r.indexOf(`=`),a=Ac(i<0?r:r.slice(0,i)),o=i<0?null:Ac(r.slice(i+1));if(a in t){let e=t[a];Qs(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function nl(e){let t=``;for(let n in e){let r=e[n];if(n=Dc(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Qs(r)?r.map(e=>e&&Ec(e)):[r&&Ec(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function rl(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Qs(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function il(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function al(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(tc(4,{from:n,to:t})):e instanceof Error?c(e):$c(e)?c(tc(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function ol(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(qs(s)){let c=(s.__vccOpts||s)[t];c&&a.push(al(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Js(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&al(c,n,r,o,e,i)()}))}}}return a}function sl(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Lc(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Lc(e,s))||i.push(s))}return[n,r,i]}var cl=()=>location.protocol+`//`+location.host;function ll(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Fc(n,``)}return Fc(n,e)+r+i}function ul(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=ll(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState(Ys({},e.state,{scroll:qc()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function dl(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function fl(e){let{history:t,location:n}=window,r={value:ll(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:cl()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Ys({},t.state,dl(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Ys({},i.value,t.state,{forward:e,scroll:qc()});a(o.current,o,!0),a(e,Ys({},dl(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function pl(e){e=Uc(e);let t=fl(e),n=ul(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Ys({location:``,base:e,go:r,createHref:Gc.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ml(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),pl(e)}var hl={type:0,value:``},gl=/[a-zA-Z0-9_]/;function _l(e){if(!e)return[[]];if(e===`/`)return[[hl]];if(!Ks(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:gl.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var vl=`[^/]+?`,yl={sensitive:!1,strict:!1,start:!0,end:!0},bl=/[.+*?^${}()[\]/\\]/g;function xl(e,t){let n=Ys({},yl,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(bl,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||vl;if(u!==vl){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Qs(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Qs(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Sl(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Cl(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Sl(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(wl(r))return 1;if(wl(i))return-1}return i.length-r.length}function wl(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Tl={strict:!1,end:!0,sensitive:!1};function El(e,t,n){let r=Ys(xl(_l(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Dl(e,t){let n=[],r=new Map;t=$s(Tl,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=kl(e);s.aliasOf=r&&r.record;let l=$s(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(kl(Ys({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!Ks(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=El(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!jl(d)&&o(e.name)),Fl(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Zs}function o(e){if(el(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Nl(e,n);n.splice(t,0,e),e.record.name&&!jl(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw tc(1,{location:e});s=i.record.name,a=Ys(Ol(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Ol(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw tc(1,{location:e,currentLocation:t});s=i.record.name,a=Ys({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Ml(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Ol(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function kl(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Al(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Al(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function jl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ml(e){return e.reduce((e,t)=>Ys(e,t.meta),{})}function Nl(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Cl(e,t[i])<0?r=i:n=i+1}let i=Pl(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Pl(e){let t=e;for(;t=t.parent;)if(Fl(t)&&Cl(e,t)===0)return t}function Fl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Il(e){let t=Xn(ac),n=Xn(oc),r=no(()=>{let n=M(e.to);return t.resolve(n)}),i=no(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Lc.bind(null,i));if(o>-1)return o;let s=Vl(e[t-2]);return t>1&&Vl(i)===s&&a[a.length-1].path!==s?a.findIndex(Lc.bind(null,e[t-2])):o}),a=no(()=>i.value>-1&&Bl(n.params,r.value.params)),o=no(()=>i.value>-1&&i.value===n.matched.length-1&&Rc(n.params,r.value.params));function s(n={}){if(zl(n)){let n=t[M(e.replace)?`replace`:`push`](M(e.to)).catch(Zs);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:no(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Ll(e){return e.length===1?e[0]:e}var Rl=N({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Il,setup(e,{slots:t}){let n=Xt(Il(e)),{options:r}=Xn(ac),i=no(()=>({[Hl(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Hl(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Ll(t.default(n));return e.custom?r:B(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function zl(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bl(e,t){for(let n in t){let r=t[n],i=e[n];if(Qs(r)){if(!Qs(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}else if(r!==i)return!1}return!0}function Vl(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Hl=(e,t,n)=>e??t??n,Ul=N({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Xn(sc),i=no(()=>e.route||r.value),a=Xn(ic,0),o=no(()=>{let e=M(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=no(()=>i.value.matched[o.value]);Yn(ic,no(()=>o.value+1)),Yn(rc,s),Yn(sc,i);let c=j();return er(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Lc(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Wl(n.default,{Component:l,route:r});let u=o.props[a],d=B(l,Ys({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Wl(n.default,{Component:d,route:r})||d}}});function Wl(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Gl=Ul;function Kl(e){let t=Dl(e.routes,e),n=e.parseQuery||tl,r=e.stringifyQuery||nl,i=e.history,a=il(),o=il(),s=il(),c=un(Hc),l=un(0),u=Hc;lc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let d=Xs.bind(null,e=>``+e),f=Xs.bind(null,kc),p=Xs.bind(null,Ac);function m(e,n){let r,i;el(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return l.value++,()=>{a(),l.value++}}function h(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),l.value++)}function g(){t.clearRoutes(),l.value++}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,a){if(l.value,typeof e==`string`){a||=e.startsWith(`/`)?Hc:c.value;let r=Nc(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Ys(r,o,{params:p(o.params),redirectedFrom:void 0,href:s})}a=Ys({},a||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?Hc:c.value));let o;if(e.path!=null)o=Ys({},e,{path:Nc(n,e.path,a.path).path});else{let t=Ys({},e.params);for(let e in t)t[e]??delete t[e];o=Ys({},e,{params:f(t)}),a.params=f(a.params)}let s=t.resolve(o,a),u=e.hash||``;s.params=d(p(s.params));let m=Pc(r,Ys({},e,{hash:Tc(u),path:s.path})),h=i.createHref(m);return Ys({fullPath:m,hash:u,query:r===nl?rl(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function b(e){return typeof e==`string`?Nc(n,e,c.value.path):Ys({},e)}function x(e,t){if(u!==e)return tc(8,{from:t,to:e})}function S(e){return T(e)}function C(e){return S(Ys(b(e),{replace:!0}))}function w(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),Ys({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function T(e,t){let n=u=y(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,l=w(n,i);if(l)return T(Ys(b(l),{state:typeof l==`object`?Ys({},a,l.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ic(r,i,n)&&(f=tc(16,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>nc(e)?nc(e,2)?e:ce(e):oe(e,d,i)).then(e=>{if(e){if(nc(e,2))return T(Ys({replace:s},b(e.to),{state:typeof e.to==`object`?Ys({},a,e.to.state):a,force:o}),t||d)}else e=k(d,i,!0,s,a);return O(d,i,e),e})}function E(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=sl(e,t);n=ol(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(al(r,e,t))});let c=E.bind(null,e,t);return n.push(c),me(n).then(()=>{n=[];for(let r of a.list())n.push(al(r,e,t));return n.push(c),me(n)}).then(()=>{n=ol(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(al(r,e,t))});return n.push(c),me(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Qs(r.beforeEnter))for(let i of r.beforeEnter)n.push(al(i,e,t));else n.push(al(r.beforeEnter,e,t))}return n.push(c),me(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ol(s,`beforeRouteEnter`,e,t,D),n.push(c),me(n))).then(()=>{n=[];for(let r of o.list())n.push(al(r,e,t));return n.push(c),me(n)}).catch(e=>nc(e,8)?e:Promise.reject(e))}function O(e,t,n){s.list().forEach(r=>D(()=>r(e,t,n)))}function k(e,t,n,r,a){let o=x(e,t);if(o)return o;let s=t===Hc,l=lc?history.state:{};n&&(r||s?i.replace(e.fullPath,Ys({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let te;function ne(){te||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=y(e),a=w(r,pe.currentRoute.value);if(a){T(Ys(a,{replace:!0,force:!0}),r).catch(Zs);return}u=r;let o=c.value;lc&&n.delta&&Zc(Yc(o.fullPath,n.delta)),ee(r,o).catch(e=>nc(e,12)?e:nc(e,2)?(T(Ys(b(e.to),{force:!0}),r).then(e=>{nc(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Zs),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=k(r,o,!1),e&&(n.delta&&!nc(e,8)?i.go(-n.delta,!1):n.type===`pop`&&nc(e,20)&&i.go(-1,!1)),O(r,o,e)}).catch(Zs)})}let re=il(),ie=il(),ae;function oe(e,t,n){ce(e);let r=ie.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function se(){return ae&&c.value!==Hc?Promise.resolve():new Promise((e,t)=>{re.add([e,t])})}function ce(e){return ae||(ae=!e,ne(),re.list().forEach(([t,n])=>e?n(e):t()),re.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!lc||!a)return Promise.resolve();let o=!r&&Qc(Yc(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Pn().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&Jc(e)).catch(e=>t===c.value&&oe(e,t,n))}let ue=e=>i.go(e),de,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,clearRoutes:g,hasRoute:v,getRoutes:_,resolve:y,options:e,push:S,replace:C,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ie.add,isReady:se,install(e){e.component(`RouterLink`,Rl),e.component(`RouterView`,Gl),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>M(c)}),lc&&!de&&c.value===Hc&&(de=!0,S(i.location).catch(e=>{}));let t={};for(let e in Hc)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(ac,pe),e.provide(oc,Zt(t)),e.provide(sc,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(u=Hc,te&&te(),te=null,c.value=Hc,de=!1,ae=!1),n()}}};function me(e){return e.reduce((e,t)=>e.then(()=>D(t)),Promise.resolve())}return pe}var ql={class:`cv__panel`},Jl={class:`cv__head`},Yl={class:`cv__title`},Xl={class:`cv__title-main`},Zl={class:`cv__title-sub`},Ql={class:`cv__actions`},$l={class:`cv__body`},eu={class:`cv__pre`},tu={class:`cv__no`},nu={class:`cv__txt`},ru=N({__name:`CodeViewer`,props:{source:{},title:{}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=j(!1);async function a(){try{await navigator.clipboard.writeText(n.source),i.value=!0,setTimeout(()=>i.value=!1,1500)}catch{}}let o=no(()=>n.source.split(`
`));return(t,n)=>(I(),xa(hr,{to:`body`},[R(`div`,{class:`cv__mask`,onClick:n[1]||=as(e=>r(`close`),[`self`])},[R(`aside`,ql,[R(`header`,Jl,[R(`div`,Yl,[R(`span`,Xl,A(e.title||`示例源码`),1),R(`span`,Zl,A(o.value.length)+` 行`,1)]),R(`div`,Ql,[R(`button`,{class:`cv__btn`,onClick:a},A(i.value?`已复制`:`复制`),1),R(`button`,{class:`cv__btn cv__btn--close`,onClick:n[0]||=e=>r(`close`)},`关闭`)])]),R(`div`,$l,[R(`pre`,eu,[R(`code`,null,[(I(!0),L(F,null,P(o.value,(e,t)=>(I(),L(`span`,{key:t,class:`cv__ln`},[R(`span`,tu,A(t+1),1),R(`span`,nu,A(e||` `),1),n[2]||=ka(`
`,-1)]))),128))])])])])])]))}}),iu=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},au=iu(ru,[[`__scopeId`,`data-v-b341be9d`]]),ou={class:`gallery`},su={class:`gallery__top`},cu={class:`gallery__tabs`},lu=[`onClick`],uu={class:`gallery__body`},du={class:`gallery__nav`},fu={class:`gallery__nav-head`},pu={class:`gallery__nav-title`},mu={class:`gallery__nav-count`},hu={class:`gallery__menu`},gu={class:`gallery__num`},_u={class:`gallery__label`},vu={class:`gallery__main`},yu=N({__name:`App`,setup(e){let t=Object.assign({"./demos/01-basic-chain/BasicChainDemo.vue":fs,"./demos/02-anonymous-layer/AnonymousLayerDemo.vue":ps,"./demos/03-predefined-layer/PredefinedLayerDemo.vue":ms,"./demos/04-external-config/ExternalConfigDemo.vue":hs,"./demos/05-expression-style/ExpressionStyleDemo.vue":gs,"./demos/06-processors-all/ProcessorsAllDemo.vue":_s,"./demos/07-effects-all/EffectsAllDemo.vue":vs,"./demos/08-carousel-popup/CarouselPopupDemo.vue":ys,"./demos/09-custom-plugin/CustomPluginDemo.vue":bs,"./demos/10-with-rete/WithReteDemo.vue":xs,"./demos/dock/DockLayoutDemo.vue":Ss,"./demos/effects/BreathingPlayground.vue":Cs,"./demos/effects/CarouselPlayground.vue":ws,"./demos/effects/CustomEffectPlayground.vue":Ts,"./demos/effects/EffectPlayground.vue":Es,"./demos/effects/PulsePlayground.vue":Ds,"./demos/effects/RipplePlayground.vue":Os,"./demos/effects/WavePlayground.vue":ks,"./demos/env/EnvInjectionDemo.vue":As,"./demos/layer/AppendDataDemo.vue":js,"./demos/layer/MultiDatasetDemo.vue":Ms,"./demos/layer/RestoreDataDemo.vue":Ns,"./demos/layer/UpdateDataDemo.vue":Ps,"./demos/rete/Controls.vue":Fs,"./demos/rete/CustomSocket.vue":Is,"./demos/rete/ParamPanel.vue":Ls,"./demos/rete/ReteEditorPage.vue":Rs,"./demos/style/CategoricalStyleDemo.vue":zs,"./demos/style/ExpressionStyleDemo.vue":Bs,"./demos/style/FunctionStyleDemo.vue":Vs,"./demos/style/MultiAttrStyleDemo.vue":Hs,"./demos/style/SingleStyleDemo.vue":Us,"./demos/style/StageBuilderDemo.vue":Ws,"./demos/style/StyleConfigPanel.vue":Gs}),n=[{key:`basic`,label:`基础`,items:[{num:`01`,label:`链式调用最小链路`,to:`/basic-chain`},{num:`02`,label:`匿名图层 JSON 注册`,to:`/anonymous-layer`}]},{key:`style`,label:`配图示例`,items:[{num:`2.1`,label:`单值配图`,to:`/style/single`},{num:`2.2`,label:`分类配图`,to:`/style/categorical`},{num:`2.3`,label:`表达式参数`,to:`/style/expression`},{num:`2.4`,label:`函数参数`,to:`/style/function`},{num:`2.5`,label:`多属性（icon+色+大小）`,to:`/style/multi`,hl:!0},{num:`2.6`,label:`分阶段链式 + 规则引擎`,to:`/style/stage`,hl:!0}]},{key:`effect`,label:`效果示例`,items:[{num:`3.1`,label:`涟漪 ripple`,to:`/effect/ripple`},{num:`3.2`,label:`点跳跃 pulse`,to:`/effect/pulse`},{num:`3.3`,label:`涟漪 wave`,to:`/effect/wave`},{num:`3.4`,label:`呼吸灯 breathing`,to:`/effect/breathing`},{num:`3.5`,label:`轮播 carousel`,to:`/effect/carousel`},{num:`3.6`,label:`自定义效果 glow`,to:`/effect/custom`},{num:`08`,label:`轮播 + 弹框防叠盖`,to:`/carousel-popup`,hl:!0}]},{key:`layer`,label:`基础图层`,items:[{num:`4.1`,label:`appendData 增量追加`,to:`/layer/append`},{num:`4.2`,label:`updateData 全量更新`,to:`/layer/update`},{num:`4.3`,label:`keepOriginal + restore`,to:`/layer/restore`},{num:`4.4`,label:`综合数据操作`,to:`/layer/playground`,hl:!0}]},{key:`dock`,label:`停靠布局`,items:[{num:`11`,label:`Widget 由 dock 托管（span/排序/折叠）`,to:`/dock-layout`,hl:!0}]},{key:`env`,label:`环境响应`,items:[{num:`5.1`,label:`env 注入响应式`,to:`/env-injection`,hl:!0}]},{key:`flow`,label:`可视化编排`,items:[{num:`6.1`,label:`rete v2 原生画布`,to:`/rete-editor`,hl:!0},{num:`10`,label:`rete 拖拽画布（轻量）`,to:`/with-rete`}]},{key:`advanced`,label:`进阶`,items:[{num:`03`,label:`业务图层类继承预定义`,to:`/predefined-layer`},{num:`04`,label:`外部 JSON 配置引擎`,to:`/external-config`},{num:`05`,label:`表达式三态参数`,to:`/expression-style`},{num:`06`,label:`数据处理器`,to:`/processors-all`},{num:`07`,label:`效果选择器（旧）`,to:`/effects-all`},{num:`09`,label:`自定义插件`,to:`/custom-plugin`}]}],r={"/dock-layout":`dock`,"/carousel-popup":`effect`,"/env-injection":`env`,"/rete-editor":`flow`,"/with-rete":`flow`,"/predefined-layer":`advanced`,"/external-config":`advanced`,"/expression-style":`advanced`,"/processors-all":`advanced`,"/effects-all":`advanced`,"/custom-plugin":`advanced`},i=[[`/style/`,`style`],[`/effect/`,`effect`],[`/layer/`,`layer`]];function a(e){let t=r[e];if(t)return t;let n=i.find(([t])=>e.startsWith(t));return n?n[1]:`basic`}let o=cc(),s=j(a(o.path)),c=no(()=>n.find(e=>e.key===s.value)??n[0]);er(()=>o.path,e=>{s.value=a(e)});let l=j(!1),u=no(()=>{let e=o.meta.code;return e&&t[e]||``}),d=no(()=>o.meta.title||`示例源码`);function f(){u.value&&(l.value=!0)}return(e,t)=>{let r=Kr(`RouterLink`),i=Kr(`RouterView`);return I(),L(`div`,ou,[R(`header`,su,[t[1]||=R(`div`,{class:`gallery__brand`},[R(`span`,{class:`gallery__brand-name`},`geo-flow`),R(`span`,{class:`gallery__brand-sub`},`WebGIS 示例集`)],-1),R(`nav`,cu,[(I(),L(F,null,P(n,e=>R(`button`,{key:e.key,type:`button`,class:Ce([`gallery__tab`,{"gallery__tab--active":e.key===s.value}]),onClick:t=>s.value=e.key},A(e.label),11,lu)),64))]),u.value?(I(),L(`button`,{key:0,type:`button`,class:`gallery__code-btn`,title:`查看当前示例的核心编码`,onClick:f},`</> 查看代码`)):Aa(``,!0)]),R(`div`,uu,[R(`aside`,du,[R(`div`,fu,[R(`span`,pu,A(c.value.label),1),R(`span`,mu,A(c.value.items.length)+` 项`,1)]),R(`nav`,hu,[(I(!0),L(F,null,P(c.value.items,e=>(I(),xa(r,{key:e.to,to:e.to,class:Ce([`gallery__link`,{"gallery__link--hl":e.hl}])},{default:Kn(()=>[R(`span`,gu,A(e.num),1),R(`span`,_u,A(e.label),1)]),_:2},1032,[`to`,`class`]))),128))]),t[2]||=R(`div`,{class:`gallery__foot`},`OpenLayers v10 · Vue 3 · @vue/reactivity`,-1)]),R(`main`,vu,[z(i,null,{default:Kn(({Component:e})=>[(I(),xa(Jr(e),{key:M(o).path}))]),_:1})])]),l.value?(I(),xa(au,{key:0,source:u.value,title:d.value,onClose:t[0]||=e=>l.value=!1},null,8,[`source`,`title`])):Aa(``,!0)])}}});function bu(e){return Symbol.keyFor(e)||String(e)}var xu={Math,JSON,Number,String,Boolean,Array,Object,Date,isNaN,isFinite,parseFloat,parseInt},Su=!0;function Cu(e,t,n){if(!Su)throw Error(`表达式执行已被禁用（setExpressionEnabled(false)）`);let r=[...new Set([...Object.keys(xu),...Object.keys(n)])],i=`"use strict"; return (${e});`;return Function(...r,i)}function wu(e,t={}){return Cu(e,!0,t)(...[...new Set([...Object.keys(xu),...Object.keys(t)])].map(e=>e in xu?xu[e]:t[e]))}function Tu(e,t={}){let n=[...new Set([...Object.keys(xu),...Object.keys(t)])].map(e=>e in xu?xu[e]:t[e]);return Cu(e,!1,t)(...n)}function Eu(e,t={}){if(e&&typeof e==`object`){if(typeof e.__expr__==`string`)return wu(e.__expr__,t);if(typeof e.__fn__==`string`)return Tu(e.__fn__,t)}return e}var Du=new class{byName=new Map;bySymbol=new Map;register(e){return this.byName.has(e.name)&&console.warn(`[GeoFlow] 插件已存在，被覆盖: ${e.name}`),this.byName.set(e.name,e),e.symbol&&this.bySymbol.set(e.symbol,e),e}resolve(e){if(e&&typeof e==`object`&&`kind`in e)return e;if(typeof e==`symbol`){let t=this.bySymbol.get(e);if(t)return t;let n=Symbol.keyFor(e);if(n){for(let[e,t]of this.bySymbol)if(Symbol.keyFor(e)===n)return t}throw Error(`插件未注册: ${String(e)}`)}let t=e,n=this.byName.get(t);if(n)return n;let r=Symbol.for(t),i=this.bySymbol.get(r);if(i)return i;throw Error(`插件未注册: ${t}`)}list(e){return[...this.byName.values()].filter(t=>!e||t.kind===e)}has(e){try{return this.resolve(e),!0}catch{return!1}}};function Ou(e){let t={...e,kind:`processor`};return Du.register(t)}function ku(e){let t={...e,kind:`effect`};return Du.register(t)}function Au(e){let t=Du.resolve(e);return t.symbol?bu(t.symbol):t.name}function ju(e,t={}){return{ref:Au(e),kind:`processor`,options:{...Du.resolve(e).defaults,...t}}}function Mu(e,t={}){return{ref:Au(e),kind:`effect`,options:{...Du.resolve(e).defaults,...t}}}var Nu=class{state=`idle`;config;constructor(e={}){this.config=e}ready(e){return this.state=`ready`,{state:`ready`,...e}}fail(e){throw this.state=`error`,e}},Pu=new class{nodeTypes=new Map;datasets=new Map;templates=new Map;stylePresets={};registerNodeType(e){return this.nodeTypes.has(e.type)&&console.warn(`[GeoFlow] 节点类型已存在，被覆盖: ${e.type}`),this.nodeTypes.set(e.type,e),e}getNodeType(e){let t=this.nodeTypes.get(e);if(!t)throw Error(`未注册的节点类型: ${e}`);return t}listNodeTypes(e){return[...this.nodeTypes.values()].filter(t=>!e||t.category===e)}registerDataset(e){return this.datasets.set(e.meta.id,e),e}getDataset(e){return this.datasets.get(e)}listDatasets(){return[...this.datasets.values()].map(e=>e.meta)}registerTemplate(e){return this.templates.set(e.id,e),e}getTemplate(e){return this.templates.get(e)}listTemplates(){return[...this.templates.values()]}};function Fu(e){return e.features?.[0]?.geometry?.type||`Mixed`}function Iu(e){let t=e.features?.[0]?.properties||{};return Object.entries(t).map(([t,n])=>{let r=typeof n==`number`?`number`:`string`,i={name:t,label:t,type:r};if(r===`string`){let n=new Set;e.features.forEach(e=>{let r=e.properties?.[t];r!=null&&r!==``&&n.add(String(r))}),i.values=[...n]}return i})}function Lu(e){return e&&e.type===`FeatureCollection`&&Array.isArray(e.features)}var Ru=class extends Nu{type=`raw`;async fetch(e){let t=Eu(this.config,{$query:e.query});if(t.datasetId){let e=Pu.datasets.get(String(t.datasetId));return e||this.fail(Error(`数据集未注册: ${t.datasetId}`)),this.ready({data:e.data,fields:e.meta.fields,geometryType:e.meta.geometryType})}if(t.data){let e=t.data;return this.ready({data:e,fields:t.fields||Iu(e),geometryType:t.geometryType||Fu(e)})}return this.fail(Error(`RawDataProvider 需要 config.datasetId 或 config.data`))}},zu=class extends Nu{type=`url`;async fetch(e){let t=Eu(this.config,{$query:e.query});if(!t.url)return this.fail(Error(`UrlDataProvider 需要 config.url`));let n;try{let e=await fetch(t.url);if(!e.ok)return this.fail(Error(`拉取失败 ${e.status}: ${t.url}`));n=await e.json()}catch(e){return this.fail(Error(`UrlDataProvider 请求异常: ${e?.message||e}`))}return Lu(n)?this.ready({data:n,fields:Iu(n),geometryType:Fu(n)}):this.fail(Error(`URL 返回不是合法 FeatureCollection`))}},Bu=new class{map=new Map;register(e,t){let n=typeof t==`function`?t:()=>t;return this.map.set(e,n),this}get(e){return this.map.get(e)}list(){return[...this.map.keys()]}};Bu.register(`/api/stations`,()=>Pu.getDataset(`stations`)?.data),Bu.register(`/api/rivers`,()=>Pu.getDataset(`rivers`)?.data),Bu.register(`/api/catchments`,()=>Pu.getDataset(`catchments`)?.data);function Vu(e,t){return t?t.split(`.`).reduce((e,t)=>e==null?e:e[t],e):e}var Hu=class extends Nu{type=`api`;async fetch(e){let t=Eu(this.config,{$query:e.query,$params:e.params});if(!t.url)return this.fail(Error(`ApiDataProvider 需要 config.url`));let n,r=Bu.get(t.url);if(r)n=await r(t,e);else{let e=(t.method||`GET`).toUpperCase(),r=t.url,i={method:e,headers:t.headers||{}};if(t.params){let n=new URLSearchParams(t.params).toString();e===`GET`||e===`HEAD`?r+=(r.includes(`?`)?`&`:`?`)+n:(i.body=JSON.stringify(t.params),i.headers[`Content-Type`]=`application/json`)}let a=await fetch(r,i);if(!a.ok)return this.fail(Error(`接口失败 ${a.status}: ${t.url}`));n=await a.json()}let i=Vu(n,t.dataPath||``);return Lu(i)?this.ready({data:i,fields:Iu(i),geometryType:Fu(i)}):this.fail(Error(`API 返回无法解析为 FeatureCollection，请检查 config.dataPath`))}};function Uu(e){let{type:t,config:n}=e;switch(t){case`raw`:return new Ru(n);case`url`:return new zu(n);case`api`:return new Hu(n);default:throw Error(`不支持的 DataProvider 类型: ${t}`)}}var Wu={info:1,warn:2,error:3,none:4},Gu=Wu.info;function Ku(...e){Gu>Wu.warn||console.warn(...e)}var qu={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Ju(e){let t=nd();for(let n=0,r=e.length;n<r;++n)ld(t,e[n]);return t}function Yu(e,t,n){return n?(n[0]=e[0]-t,n[1]=e[1]-t,n[2]=e[2]+t,n[3]=e[3]+t,n):[e[0]-t,e[1]-t,e[2]+t,e[3]+t]}function Xu(e,t){return t?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):e.slice()}function Zu(e,t,n){let r,i;return r=t<e[0]?e[0]-t:e[2]<t?t-e[2]:0,i=n<e[1]?e[1]-n:e[3]<n?n-e[3]:0,r*r+i*i}function Qu(e,t){return ed(e,t[0],t[1])}function $u(e,t){return e[0]<=t[0]&&t[2]<=e[2]&&e[1]<=t[1]&&t[3]<=e[3]}function ed(e,t,n){return e[0]<=t&&t<=e[2]&&e[1]<=n&&n<=e[3]}function td(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=t[0],s=t[1],c=qu.UNKNOWN;return o<n?c|=qu.LEFT:o>i&&(c|=qu.RIGHT),s<r?c|=qu.BELOW:s>a&&(c|=qu.ABOVE),c===qu.UNKNOWN&&(c=qu.INTERSECTING),c}function nd(){return[1/0,1/0,-1/0,-1/0]}function rd(e,t,n,r,i){return i?(i[0]=e,i[1]=t,i[2]=n,i[3]=r,i):[e,t,n,r]}function id(e){return rd(1/0,1/0,-1/0,-1/0,e)}function ad(e,t){let n=e[0],r=e[1];return rd(n,r,n,r,t)}function od(e,t,n,r,i){return ud(id(i),e,t,n,r)}function sd(e,t){return e[0]==t[0]&&e[2]==t[2]&&e[1]==t[1]&&e[3]==t[3]}function cd(e,t){return t[0]<e[0]&&(e[0]=t[0]),t[2]>e[2]&&(e[2]=t[2]),t[1]<e[1]&&(e[1]=t[1]),t[3]>e[3]&&(e[3]=t[3]),e}function ld(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function ud(e,t,n,r,i){for(;n<r;n+=i)dd(e,t[n],t[n+1]);return e}function dd(e,t,n){e[0]=Math.min(e[0],t),e[1]=Math.min(e[1],n),e[2]=Math.max(e[2],t),e[3]=Math.max(e[3],n)}function fd(e,t){let n;return n=t(md(e)),n||(n=t(hd(e)),n)||(n=t(wd(e)),n)||(n=t(Cd(e)),n)?n:!1}function pd(e){let t=0;return Dd(e)||(t=Td(e)*bd(e)),t}function md(e){return[e[0],e[1]]}function hd(e){return[e[2],e[1]]}function gd(e){return[(e[0]+e[2])/2,(e[1]+e[3])/2]}function _d(e,t){let n;if(t===`bottom-left`)n=md(e);else if(t===`bottom-right`)n=hd(e);else if(t===`top-left`)n=Cd(e);else if(t===`top-right`)n=wd(e);else throw Error(`Invalid corner`);return n}function vd(e,t,n,r,i){let[a,o,s,c,l,u,d,f]=yd(e,t,n,r);return rd(Math.min(a,s,l,d),Math.min(o,c,u,f),Math.max(a,s,l,d),Math.max(o,c,u,f),i)}function yd(e,t,n,r){let i=t*r[0]/2,a=t*r[1]/2,o=Math.cos(n),s=Math.sin(n),c=i*o,l=i*s,u=a*o,d=a*s,f=e[0],p=e[1];return[f-c+d,p-l-u,f-c-d,p-l+u,f+c-d,p+l+u,f+c+d,p+l-u,f-c+d,p-l-u]}function bd(e){return e[3]-e[1]}function xd(e,t,n){let r=n||nd();return Ed(e,t)?(r[0]=e[0]>t[0]?e[0]:t[0],r[1]=e[1]>t[1]?e[1]:t[1],r[2]=e[2]<t[2]?e[2]:t[2],r[3]=e[3]<t[3]?e[3]:t[3]):id(r),r}function Sd(e,t){if(!Ed(e,t))return[e.slice()];if($u(t,e))return[];let[n,r,i,a]=e,o=Math.max(n,t[0]),s=Math.max(r,t[1]),c=Math.min(i,t[2]),l=Math.min(a,t[3]),u=[];return o>n&&u.push([n,r,o,a]),c<i&&u.push([c,r,i,a]),s>r&&u.push([o,r,c,s]),l<a&&u.push([o,l,c,a]),u}function Cd(e){return[e[0],e[3]]}function wd(e){return[e[2],e[3]]}function Td(e){return e[2]-e[0]}function Ed(e,t){return e[0]<=t[2]&&e[2]>=t[0]&&e[1]<=t[3]&&e[3]>=t[1]}function Dd(e){return e[2]<e[0]||e[3]<e[1]}function Od(e,t){return t?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):e}function kd(e,t,n){let r=!1,i=td(e,t),a=td(e,n);if(i===qu.INTERSECTING||a===qu.INTERSECTING)r=!0;else{let o=e[0],s=e[1],c=e[2],l=e[3],u=t[0],d=t[1],f=n[0],p=n[1],m=(p-d)/(f-u),h,g;a&qu.ABOVE&&!(i&qu.ABOVE)&&(h=f-(p-l)/m,r=h>=o&&h<=c),!r&&a&qu.RIGHT&&!(i&qu.RIGHT)&&(g=p-(f-c)*m,r=g>=s&&g<=l),!r&&a&qu.BELOW&&!(i&qu.BELOW)&&(h=f-(p-s)/m,r=h>=o&&h<=c),!r&&a&qu.LEFT&&!(i&qu.LEFT)&&(g=p-(f-o)*m,r=g>=s&&g<=l)}return r}function Ad(e,t){let n=t.getExtent(),r=gd(e);if(t.canWrapX()&&(r[0]<n[0]||r[0]>=n[2])){let t=Td(n),i=Math.floor((r[0]-n[0])/t)*t;e[0]-=i,e[2]-=i}return e}function jd(e,t,n){if(t.canWrapX()){let r=t.getExtent();if(!isFinite(e[0])||!isFinite(e[2]))return[[r[0],e[1],r[2],e[3]]];Ad(e,t);let i=Td(r);if(Td(e)>i&&!n)return[[r[0],e[1],r[2],e[3]]];if(e[0]<r[0])return[[e[0]+i,e[1],r[2],e[3]],[r[0],e[1],e[2],e[3]]];if(e[2]>r[2])return[[e[0],e[1],r[2],e[3]],[r[0],e[1],e[2]-i,e[3]]]}return[e]}function Md(e,t){let n=[e];for(let e=0,r=t.length;e<r&&n.length>0;++e){let r=[];for(let i=0,a=n.length;i<a;++i)r.push(...Sd(n[i],t[e]));n=r}return n}function Nd(e,t,n){return Math.min(Math.max(e,t),n)}function Pd(e,t,n,r,i,a){let o=i-n,s=a-r;if(o!==0||s!==0){let c=((e-n)*o+(t-r)*s)/(o*o+s*s);c>1?(n=i,r=a):c>0&&(n+=o*c,r+=s*c)}return Fd(e,t,n,r)}function Fd(e,t,n,r){let i=n-e,a=r-t;return i*i+a*a}function Id(e){let t=e.length;for(let n=0;n<t;n++){let r=n,i=Math.abs(e[n][n]);for(let a=n+1;a<t;a++){let t=Math.abs(e[a][n]);t>i&&(i=t,r=a)}if(i===0)return null;let a=e[r];e[r]=e[n],e[n]=a;for(let r=n+1;r<t;r++){let i=-e[r][n]/e[n][n];for(let a=n;a<t+1;a++)n==a?e[r][a]=0:e[r][a]+=i*e[n][a]}}let n=Array(t);for(let r=t-1;r>=0;r--){n[r]=e[r][t]/e[r][r];for(let i=r-1;i>=0;i--)e[i][t]-=e[i][r]*n[r]}return n}function Ld(e){return e*180/Math.PI}function Rd(e){return e*Math.PI/180}function zd(e,t){let n=e%t;return n*t<0?n+t:n}function Bd(e,t,n){return e+n*(t-e)}function Vd(e,t){let n=10**t;return Math.round(e*n)/n}function Hd(e,t){return Math.floor(Vd(e,t))}function Ud(e,t){return Math.ceil(Vd(e,t))}function Wd(e,t,n){if(e>=t&&e<n)return e;let r=n-t;return((e-t)%r+r)%r+t}function Gd(e,t){return e[0]+=+t[0],e[1]+=+t[1],e}function Kd(e,t){let n=!0;for(let r=e.length-1;r>=0;--r)if(e[r]!=t[r]){n=!1;break}return n}function qd(e,t){let n=Math.cos(t),r=Math.sin(t),i=e[0]*n-e[1]*r,a=e[1]*n+e[0]*r;return e[0]=i,e[1]=a,e}function Jd(e,t){return e[0]*=t,e[1]*=t,e}function Yd(e,t){if(t.canWrapX()){let n=Td(t.getExtent()),r=Xd(e,t,n);r&&(e[0]-=r*n)}return e}function Xd(e,t,n){let r=t.getExtent(),i=0;return t.canWrapX()&&(e[0]<r[0]||e[0]>r[2])&&(n||=Td(r),i=Math.floor((e[0]-r[0])/n)),i}function Zd(e,t,n){let r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),i=[(t[0]-e[0])/r,(t[1]-e[1])/r],a=[-i[1],i[0]],o=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),s=[(n[0]-e[0])/o,(n[1]-e[1])/o],c=r===0||o===0?0:Math.acos(Nd(s[0]*i[0]+s[1]*i[1],-1,1));return c=Math.max(c,1e-5),s[0]*a[0]+s[1]*a[1]>0?c:Math.PI*2-c}var Qd={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937},$d=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent===void 0?null:e.extent,this.worldExtent_=e.worldExtent===void 0?null:e.worldExtent,this.axisOrientation_=e.axisOrientation===void 0?`enu`:e.axisOrientation,this.global_=e.global!==void 0&&e.global,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||Qd[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}},ef=6378137,tf=Math.PI*ef,nf=[-tf,-tf,tf,tf],rf=[-180,-85,180,85],af=ef*Math.log(Math.tan(Math.PI/2)),of=class extends $d{constructor(e){super({code:e,units:`m`,extent:nf,global:!0,worldExtent:rf,getPointResolution:function(e,t){return e/Math.cosh(t[1]/ef)}})}},sf=[new of(`EPSG:3857`),new of(`EPSG:102100`),new of(`EPSG:102113`),new of(`EPSG:900913`),new of(`http://www.opengis.net/def/crs/EPSG/0/3857`),new of(`http://www.opengis.net/gml/srs/epsg.xml#3857`)];function cf(e,t,n,r){let i=e.length;n=n>1?n:2,r??=n,t===void 0&&(t=n>2?e.slice():Array(i));for(let n=0;n<i;n+=r){t[n]=tf*e[n]/180;let r=ef*Math.log(Math.tan(Math.PI*(+e[n+1]+90)/360));r>af?r=af:r<-af&&(r=-af),t[n+1]=r}return t}function lf(e,t,n,r){let i=e.length;n=n>1?n:2,r??=n,t===void 0&&(t=n>2?e.slice():Array(i));for(let n=0;n<i;n+=r)t[n]=180*e[n]/tf,t[n+1]=360*Math.atan(Math.exp(e[n+1]/ef))/Math.PI-90;return t}var uf=6378137,df=[-180,-90,180,90],ff=Math.PI*uf/180,pf=class extends $d{constructor(e,t){super({code:e,units:`degrees`,extent:df,axisOrientation:t,global:!0,metersPerUnit:ff,worldExtent:df})}},mf=[new pf(`CRS:84`),new pf(`EPSG:4326`,`neu`),new pf(`urn:ogc:def:crs:OGC:1.3:CRS84`),new pf(`urn:ogc:def:crs:OGC:2:84`),new pf(`http://www.opengis.net/def/crs/OGC/1.3/CRS84`),new pf(`http://www.opengis.net/gml/srs/epsg.xml#4326`,`neu`),new pf(`http://www.opengis.net/def/crs/EPSG/0/4326`,`neu`)],hf={};function gf(e){return hf[e]||hf[e.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,`EPSG:$3`)]||null}function _f(e,t){hf[e]=t}function vf(e){for(let t in e)delete e[t]}function yf(e){let t;for(t in e)return!1;return!t}var bf={};function xf(e,t,n){let r=e.getCode(),i=t.getCode();r in bf||(bf[r]={}),bf[r][i]=n}function Sf(e,t){return e in bf&&t in bf[e]?bf[e][t]:null}var Cf=.9996,wf=.00669438,Tf=wf*wf,Ef=Tf*wf,Df=wf/.99330562,Of=Math.sqrt(.99330562),kf=(1-Of)/(1+Of),Af=kf*kf,jf=Af*kf,Mf=jf*kf,Nf=Mf*kf,Pf=1-wf/4-3*Tf/64-5*Ef/256,Ff=.002514607064228144,If=26390466021299826e-22,Lf=35*Ef/3072,Rf=3/2*kf-27/32*jf+269/512*Nf,zf=21/16*Af-55/32*Mf,Bf=151/96*jf-417/128*Nf,Vf=1097/512*Mf,Hf=6378137;function Uf(e,t,n){let r=e-5e5,i=(n.north?t:t-1e7)/Cf/(Hf*Pf),a=i+Rf*Math.sin(2*i)+zf*Math.sin(4*i)+Bf*Math.sin(6*i)+Vf*Math.sin(8*i),o=Math.sin(a),s=o*o,c=Math.cos(a),l=o/c,u=l*l,d=u*u,f=1-wf*s,p=Hf/Math.sqrt(1-wf*s),m=.99330562/f,h=Df*c**2,g=h*h,_=r/(p*Cf),v=_*_,y=v*_,b=y*_,x=b*_,S=x*_,C=a-l/m*(v/2-b/24*(5+3*u+10*h-4*g-9*Df))+S/720*(61+90*u+298*h+45*d-252*Df-3*g),w=(_-y/6*(1+2*u+h)+x/120*(5-2*h+28*u-3*g+8*Df+24*d))/c;return w=Wd(w+Rd(Yf(n.number)),-Math.PI,Math.PI),[Ld(w),Ld(C)]}var Wf=-80,Gf=84,Kf=-180,qf=180;function Jf(e,t,n){e=Wd(e,Kf,qf),t<Wf?t=Wf:t>Gf&&(t=Gf);let r=Rd(t),i=Math.sin(r),a=Math.cos(r),o=i/a,s=o*o,c=s*s,l=Rd(e),u=Rd(Yf(n.number)),d=Hf/Math.sqrt(1-wf*i**2),f=Df*a**2,p=a*Wd(l-u,-Math.PI,Math.PI),m=p*p,h=m*p,g=h*p,_=g*p,v=_*p,y=Hf*(Pf*r-Ff*Math.sin(2*r)+If*Math.sin(4*r)-Lf*Math.sin(6*r)),b=Cf*d*(p+h/6*(1-s+f)+_/120*(5-18*s+c+72*f-58*Df))+5e5,x=Cf*(y+d*o*(m/2+g/24*(5-s+9*f+4*f**2)+v/720*(61-58*s+c+600*f-330*Df)));return n.north||(x+=1e7),[b,x]}function Yf(e){return(e-1)*6-180+3}var Xf=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];function Zf(e){let t=0;for(let n of Xf){let r=e.match(n);if(r){t=parseInt(r[1]);break}}if(!t)return null;let n=0,r=!1;return t>32700&&t<32761?n=t-32700:t>32600&&t<32661&&(r=!0,n=t-32600),n?{number:n,north:r}:null}function Qf(e,t){return function(n,r,i,a){let o=n.length;i=i>1?i:2,a??=i,r||=i>2?n.slice():Array(o);for(let i=0;i<o;i+=a){let a=n[i],o=n[i+1],s=e(a,o,t);r[i]=s[0],r[i+1]=s[1]}return r}}function $f(e){return Zf(e)?new $d({code:e,units:`m`}):null}function ep(e){let t=Zf(e.getCode());return t?{forward:Qf(Jf,t),inverse:Qf(Uf,t)}:null}function tp(e,t,n){n||=6371008.8;let r=Rd(e[1]),i=Rd(t[1]),a=(i-r)/2,o=Rd(t[0]-e[0])/2,s=Math.sin(a)*Math.sin(a)+Math.sin(o)*Math.sin(o)*Math.cos(r)*Math.cos(i);return 2*n*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}var np=[ep],rp=[$f],ip=!0;function ap(e){ip=!(e===void 0||e)}function op(e,t){if(t!==void 0){for(let n=0,r=e.length;n<r;++n)t[n]=e[n];t=t}else t=e.slice();return t}function sp(e){_f(e.getCode(),e),xf(e,e,op)}function cp(e){e.forEach(sp)}function lp(e){if(typeof e!=`string`)return e;let t=gf(e);if(t)return t;for(let t of rp){let n=t(e);if(n)return n}return null}function up(e,t,n,r){e=lp(e);let i,a=e.getPointResolutionFunc();if(a){if(i=a(t,n),r&&r!==e.getUnits()){let t=e.getMetersPerUnit();t&&(i=i*t/Qd[r])}}else{let a=e.getUnits();if(a==`degrees`&&!r||r==`degrees`)i=t;else{let o=_p(e,lp(`EPSG:4326`));if(!o&&a!==`degrees`)i=t*e.getMetersPerUnit();else{let e=[n[0]-t/2,n[1],n[0]+t/2,n[1],n[0],n[1]-t/2,n[0],n[1]+t/2];e=o(e,e,2),i=(tp(e.slice(0,2),e.slice(2,4))+tp(e.slice(4,6),e.slice(6,8)))/2}let s=r?Qd[r]:e.getMetersPerUnit();s!==void 0&&(i/=s)}}return i}function dp(e){cp(e),e.forEach(function(t){e.forEach(function(e){t!==e&&xf(t,e,op)})})}function fp(e,t,n,r){e.forEach(function(e){t.forEach(function(t){xf(e,t,n),xf(t,e,r)})})}function pp(e,t){return e?typeof e==`string`?lp(e):e:lp(t)}function mp(e){return(function(t,n,r,i){let a=t.length;r=r===void 0?2:r,i??=r,n=n===void 0?Array(a):n;for(let o=0;o<a;o+=i){let a=e(t.slice(o,o+r)),s=a.length;for(let e=0,r=i;e<r;++e)n[o+e]=e>=s?t[o+e]:a[e]}return n})}function hp(e,t){return ap(),bp(e,`EPSG:4326`,t===void 0?`EPSG:3857`:t)}function gp(e,t){if(e===t)return!0;let n=e.getUnits()===t.getUnits();return(e.getCode()===t.getCode()||_p(e,t)===op)&&n}function _p(e,t){let n=e.getCode(),r=t.getCode(),i=Sf(n,r);if(i)return i;let a=null,o=null;for(let n of np)a||=n(e),o||=n(t);if(!a&&!o)return null;let s=`EPSG:4326`;if(!o){let e=Sf(s,r);e&&(i=vp(a.inverse,e))}else if(a)i=vp(a.inverse,o.forward);else{let e=Sf(n,s);e&&(i=vp(e,o.forward))}return i&&(sp(e),sp(t),xf(e,t,i)),i}function vp(e,t){return function(n,r,i,a){return r=e(n,r,i,a),t(r,r,i,a)}}function yp(e,t){return _p(lp(e),lp(t))}function bp(e,t,n){let r=yp(t,n);if(!r){let e=lp(t).getCode(),r=lp(n).getCode();throw Error(`No transform available between ${e} and ${r}`)}return r(e,void 0,e.length)}var xp=null;function Sp(){return xp}function Cp(e,t){return e}function wp(e,t){return ip&&!Kd(e,[0,0])&&e[0]>=-180&&e[0]<=180&&e[1]>=-90&&e[1]<=90&&(ip=!1,Ku(`Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.`)),e}function Tp(e,t){return e}function Ep(e,t){return e}function Dp(e,t){return e}function Op(){dp(sf),dp(mf),fp(mf,sf,cf,lf)}Op();var V={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4},kp=typeof navigator<`u`&&navigator.userAgent!==void 0?navigator.userAgent.toLowerCase():``;kp.includes(`safari`)&&!kp.includes(`chrom`)&&(kp.includes(`version/15.4`)||/cpu (os|iphone os) 15_4 like mac os x/.test(kp));var Ap=kp.includes(`webkit`)&&!kp.includes(`edge`),jp=kp.includes(`macintosh`),Mp=typeof devicePixelRatio<`u`?devicePixelRatio:1,Np=typeof WorkerGlobalScope<`u`&&typeof OffscreenCanvas<`u`&&self instanceof WorkerGlobalScope,Pp=typeof Image<`u`&&Image.prototype.decode,Fp=(function(){let e=!1;try{let t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener(`_`,null,t),window.removeEventListener(`_`,null,t)}catch{}return e})();function Ip(e,t,n,r){let i;return i=n&&n.length?n.shift():Np?new class extends OffscreenCanvas{style={}}(e??300,t??150):document.createElement(`canvas`),e&&(i.width=e),t&&(i.height=t),i.getContext(`2d`,r)}var Lp;function Rp(){return Lp||=Ip(1,1),Lp}function zp(e){let t=e.canvas;t.width=1,t.height=1,e.clearRect(0,0,1,1)}function Bp(e){let t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft,10)+parseInt(n.marginRight,10),t}function Vp(e){let t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop,10)+parseInt(n.marginBottom,10),t}function Hp(e,t){let n=t.parentNode;n&&n.replaceChild(e,t)}function Up(e){for(;e.lastChild;)e.lastChild.remove()}function Wp(e,t){let n=e.childNodes;for(let r=0;;++r){let i=n[r],a=t[r];if(!i&&!a)break;if(i!==a){if(!i){e.appendChild(a);continue}if(!a){e.removeChild(i),--r;continue}e.insertBefore(a,i)}}}function Gp(){return new Proxy({childNodes:[],appendChild:function(e){return this.childNodes.push(e),e},remove:function(){},removeChild:function(e){let t=this.childNodes.indexOf(e);if(t===-1)throw Error(`Node to remove was not found`);return this.childNodes.splice(t,1),e},insertBefore:function(e,t){let n=this.childNodes.indexOf(t);if(n===-1)throw Error(`Reference node not found`);return this.childNodes.splice(n,0,e),e},style:{}},{get(e,t,n){return t===`firstElementChild`?e.childNodes.length>0?e.childNodes[0]:null:Reflect.get(e,t,n)}})}function Kp(e){return typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}var qp=[NaN,NaN,NaN,0],Jp;function Yp(){return Jp||=Ip(1,1,void 0,{willReadFrequently:!0,desynchronized:!0}),Jp}var Xp=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,Zp=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,Qp=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,$p=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;function em(e,t){return e.endsWith(`%`)?Number(e.substring(0,e.length-1))/t:Number(e)}function tm(e){throw Error(`failed to parse "`+e+`" as color`)}function nm(e){if(e.toLowerCase().startsWith(`rgb`)){let t=e.match(Zp)||e.match(Xp)||e.match(Qp);if(t){let e=t[4],n=100/255;return[Nd(em(t[1],n)+.5|0,0,255),Nd(em(t[2],n)+.5|0,0,255),Nd(em(t[3],n)+.5|0,0,255),e===void 0?1:Nd(em(e,100),0,1)]}tm(e)}if(e.startsWith(`#`)){if($p.test(e)){let t=e.substring(1),n=t.length<=4?1:2,r=[0,0,0,255];for(let e=0,i=t.length;e<i;e+=n){let i=parseInt(t.substring(e,e+n),16);n===1&&(i+=i<<4),r[e/n]=i}return r[3]/=255,r}tm(e)}let t=Yp();t.fillStyle=`#abcdef`;let n=t.fillStyle;t.fillStyle=e,t.fillStyle===n&&(t.fillStyle=`#fedcba`,n=t.fillStyle,t.fillStyle=e,t.fillStyle===n&&tm(e));let r=t.fillStyle;if(r.startsWith(`#`)||r.startsWith(`rgba`))return nm(r);t.clearRect(0,0,1,1),t.fillRect(0,0,1,1);let i=Array.from(t.getImageData(0,0,1,1).data);return i[3]=Vd(i[3]/255,3),i}function rm(e){return typeof e==`string`?e:gm(e)}var im=1024,am={},om=0;function sm(e){if(e.length===4)return e;let t=e.slice();return t[3]=1,t}function cm(e){return e>.0031308?e**(1/2.4)*269.025-14.025:e*3294.6}function lm(e){return e>.2068965?e**3:(e-4/29)*(108/841)}function um(e){return e>10.314724?((e+14.025)/269.025)**2.4:e/3294.6}function dm(e){return e>.0088564?e**(1/3):e/(108/841)+4/29}function fm(e){let t=um(e[0]),n=um(e[1]),r=um(e[2]),i=dm(t*.222488403+n*.716873169+r*.06060791),a=500*(dm(t*.452247074+n*.399439023+r*.148375274)-i),o=200*(i-dm(t*.016863605+n*.117638439+r*.865350722)),s=180/Math.PI*Math.atan2(o,a);return[116*i-16,Math.sqrt(a*a+o*o),s<0?s+360:s,e[3]]}function pm(e){let t=(e[0]+16)/116,n=e[1],r=e[2]*Math.PI/180,i=lm(t),a=lm(t+n/500*Math.cos(r)),o=lm(t-n/200*Math.sin(r)),s=cm(a*3.021973625-i*1.617392459-o*.404875592),c=cm(a*-.943766287+i*1.916279586+o*.027607165),l=cm(a*.069407491-i*.22898585+o*1.159737864);return[Nd(s+.5|0,0,255),Nd(c+.5|0,0,255),Nd(l+.5|0,0,255),e[3]]}function mm(e){if(e===`none`)return qp;if(am.hasOwnProperty(e))return am[e];if(om>=im){let e=0;for(let t in am)e++&3||(delete am[t],--om)}let t=nm(e);t.length!==4&&tm(e);for(let n of t)isNaN(n)&&tm(e);return am[e]=t,++om,t}function hm(e){return Array.isArray(e)?e:mm(e)}function gm(e){let t=e[0];t!=(t|0)&&(t=t+.5|0);let n=e[1];n!=(n|0)&&(n=n+.5|0);let r=e[2];r!=(r|0)&&(r=r+.5|0);let i=e[3]===void 0?1:Math.round(e[3]*1e3)/1e3;return`rgba(`+t+`,`+n+`,`+r+`,`+i+`)`}function _m(e,t,n,r,i){if(i){let i=n;n=function(a){return e.removeEventListener(t,n),i.call(r??this,a)}}else r&&r!==e&&(n=n.bind(r));let a={target:e,type:t,listener:n};return e.addEventListener(t,n),a}function vm(e,t,n,r){return _m(e,t,n,r,!0)}function ym(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),vf(e))}var H={CHANGE:`change`,ERROR:`error`,BLUR:`blur`,CLEAR:`clear`,CONTEXTMENU:`contextmenu`,CLICK:`click`,DBLCLICK:`dblclick`,DRAGENTER:`dragenter`,DRAGOVER:`dragover`,DROP:`drop`,FOCUS:`focus`,KEYDOWN:`keydown`,KEYPRESS:`keypress`,LOAD:`load`,RESIZE:`resize`,TOUCHMOVE:`touchmove`,WHEEL:`wheel`},bm=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}};function xm(e,t,n){let r,i;n||=Sm;let a=0,o=e.length,s=!1;for(;a<o;)r=a+(o-a>>1),i=+n(e[r],t),i<0?a=r+1:(o=r,s=!i);return s?a:~a}function Sm(e,t){return e>t?1:e<t?-1:0}function Cm(e,t){return e<t?1:e>t?-1:0}function wm(e,t,n){if(e[0]<=t)return 0;let r=e.length;if(t<=e[r-1])return r-1;if(typeof n==`function`){for(let i=1;i<r;++i){let r=e[i];if(r===t)return i;if(r<t)return n(t,e[i-1],r)>0?i-1:i}return r-1}if(n>0){for(let n=1;n<r;++n)if(e[n]<t)return n-1;return r-1}if(n<0){for(let n=1;n<r;++n)if(e[n]<=t)return n;return r-1}for(let n=1;n<r;++n){if(e[n]==t)return n;if(e[n]<t)return e[n-1]-t<t-e[n]?n-1:n}return r-1}function Tm(e,t,n){for(;t<n;){let r=e[t];e[t]=e[n],e[n]=r,++t,--n}}function Em(e,t){let n=Array.isArray(t)?t:[t],r=n.length;for(let t=0;t<r;t++)e[e.length]=n[t]}function Dm(e,t){let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Om(e,t,n){let r=t||Sm;return e.every(function(t,i){if(i===0)return!0;let a=r(e[i-1],t);return!(a>0||n&&a===0)})}function km(){return!0}function Am(){return!1}function jm(){}function Mm(e){let t,n,r;return function(){let i=Array.prototype.slice.call(arguments);return(!n||this!==r||!Dm(i,n))&&(r=this,n=i,t=e.apply(this,arguments)),t}}function Nm(e){function t(){let t;try{t=e()}catch(e){return Promise.reject(e)}return t instanceof Promise?t:Promise.resolve(t)}return t()}var Pm=class{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}},Fm=class extends bm{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;let n=this.listeners_||={},r=n[e]||(n[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){let t=typeof e==`string`,n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(!r)return;let i=t?new Pm(e):e;i.target||=this.eventTarget_||this;let a=this.dispatching_||={},o=this.pendingRemovals_||={};n in a||(a[n]=0,o[n]=0),++a[n];let s;for(let e=0,t=r.length;e<t;++e)if(s=`handleEvent`in r[e]?r[e].handleEvent(i):r[e].call(this,i),s===!1||i.propagationStopped){s=!1;break}if(--a[n]===0){let e=o[n];for(delete o[n];e--;)this.removeEventListener(n,jm);delete a[n]}return s}disposeInternal(){this.listeners_&&vf(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){if(!this.listeners_)return;let n=this.listeners_[e];if(!n)return;let r=n.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=jm,++this.pendingRemovals_[e]):(n.splice(r,1),n.length===0&&delete this.listeners_[e]))}};function Im(e,t,n){let r=e,i=!0,a=!1,o=!1,s=[vm(r,H.LOAD,function(){o=!0,a||t()})];return r.src&&Pp?(a=!0,r.decode().then(function(){i&&t()}).catch(function(e){i&&(o?t():n())})):s.push(vm(r,H.ERROR,n)),function(){i=!1,s.forEach(ym)}}function Lm(e,t){return new Promise((n,r)=>{function i(){o(),n(e)}function a(){o(),r(Error(`Image load error`))}function o(){e.removeEventListener(`load`,i),e.removeEventListener(`error`,a)}e.addEventListener(`load`,i),e.addEventListener(`error`,a),t&&(e.src=t)})}function Rm(e,t){return t&&(e.src=t),e.src&&Pp?new Promise((t,n)=>e.decode().then(()=>t(e)).catch(r=>e.complete&&e.width?t(e):n(r))):Lm(e)}var zm=class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(let t in this.cache_){let n=this.cache_[t];!(e++&3)&&!n.hasListener()&&(delete this.cache_[t],delete this.patternCache_[t],--this.cacheSize_)}}}get(e,t){let n=Bm(e,t);return n in this.cache_?this.cache_[n]:null}getPattern(e,t){let n=Bm(e,t);return n in this.patternCache_?this.patternCache_[n]:null}set(e,t,n,r){let i=Bm(e,t),a=i in this.cache_;this.cache_[i]=n,r&&(n.getImageState()===V.IDLE&&n.load(),n.getImageState()===V.LOADING?n.ready().then(()=>{this.patternCache_[i]=Rp().createPattern(n.getImage(1),`repeat`)}):this.patternCache_[i]=Rp().createPattern(n.getImage(1),`repeat`)),a||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}};function Bm(e,t){let n=t?hm(t):`null`;return e+`:`+n}var Vm=new zm,Hm=null,Um=class extends Fm{constructor(e,t,n,r,i){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=n?.crossOrigin,this.referrerPolicy_=n?.referrerPolicy,this.canvas_={},this.color_=i,this.imageState_=r===void 0?V.IDLE:r,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=t,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===V.LOADED){Hm||=Ip(1,1,void 0,{willReadFrequently:!0}),Hm.drawImage(this.image_,0,0);try{Hm.getImageData(0,0,1,1),this.tainted_=!1}catch{Hm=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(H.CHANGE)}handleImageError_(){this.imageState_=V.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=V.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}setImage(e){this.image_=e}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_){if(this.isTainted_()){let e=this.size_[0],t=this.size_[1],n=Ip(e,t);n.fillRect(0,0,e,t),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_}return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===V.IDLE){this.image_||this.initializeImage_(),this.imageState_=V.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&Rm(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==V.LOADED)return;let t=this.image_,n=Ip(Math.ceil(t.width*e),Math.ceil(t.height*e)),r=n.canvas;n.scale(e,e),n.drawImage(t,0,0),n.globalCompositeOperation=`multiply`,n.fillStyle=rm(this.color_),n.fillRect(0,0,r.width/e,r.height/e),n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0),this.canvas_[e]=r}ready(){return this.ready_||=new Promise(e=>{if(this.imageState_===V.LOADED||this.imageState_===V.ERROR)e();else{let t=()=>{(this.imageState_===V.LOADED||this.imageState_===V.ERROR)&&(this.removeEventListener(H.CHANGE,t),e())};this.addEventListener(H.CHANGE,t)}}),this.ready_}};function Wm(e,t,n,r,i,a){let o=t===void 0?void 0:Vm.get(t,i);return o||(o=new Um(e,e&&`src`in e?e.src||void 0:t,n,r,i),Vm.set(t,i,o,a)),a&&o&&!Vm.getPattern(t,i)&&Vm.set(t,i,o,a),o}function Gm(e){return e?Array.isArray(e)?gm(e):typeof e==`object`&&`src`in e?Km(e):e:null}function Km(e){if(!e.offset||!e.size)return Vm.getPattern(e.src,e.color);let t=e.src+`:`+e.offset,n=Vm.getPattern(t,e.color);if(n)return n;let r=Vm.get(e.src,null);if(r.getImageState()!==V.LOADED)return null;let i=Ip(e.size[0],e.size[1]);return i.drawImage(r.getImage(1),e.offset[0],e.offset[1],e.size[0],e.size[1],0,0,e.size[0],e.size[1]),Wm(i.canvas,t,void 0,V.LOADED,e.color,!0),Vm.getPattern(t,e.color)}var qm={PROPERTYCHANGE:`propertychange`},Jm=class extends Fm{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(H.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let n=e.length,r=Array(n);for(let i=0;i<n;++i)r[i]=_m(this,e[i],t);return r}return _m(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){let r=e.length;n=Array(r);for(let i=0;i<r;++i)n[i]=vm(this,e[i],t)}else n=vm(this,e,t);return t.ol_key=n,n}unInternal(e,t){let n=t.ol_key;if(n)Ym(n);else if(Array.isArray(e))for(let n=0,r=e.length;n<r;++n)this.removeEventListener(e[n],t);else this.removeEventListener(e,t)}};Jm.prototype.on,Jm.prototype.once,Jm.prototype.un;function Ym(e){if(Array.isArray(e))for(let t=0,n=e.length;t<n;++t)ym(e[t]);else ym(e)}function U(){throw Error(`Unimplemented abstract method.`)}var Xm=0;function Zm(e){return e.ol_uid||=String(++Xm)}var Qm=class extends Pm{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}},$m=class extends Jm{constructor(e){super(),this.on,this.once,this.un,Zm(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new Qm(n,e,t)),n=qm.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new Qm(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){let r=this.values_||={};if(n)r[e]=t;else{let n=r[e];r[e]=t,n!==t&&this.notify(e,n)}}setProperties(e,t){for(let n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||={},e.values_)}unset(e,t){if(this.values_&&e in this.values_){let n=this.values_[e];delete this.values_[e],yf(this.values_)&&(this.values_=null),t||this.notify(e,n)}}},eh=`ol-hidden`,th=`ol-selectable`,nh=`ol-unselectable`,rh=`ol-control`,ih=`ol-collapsed`,ah=new RegExp([`^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)`,`(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)`,`(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)`,`(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?`,`(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))`,`(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))`,`?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`].join(``),`i`),oh=[`style`,`variant`,`weight`,`size`,`lineHeight`,`family`],sh={normal:400,bold:700},ch=function(e){let t=e.match(ah);if(!t)return null;let n={lineHeight:`normal`,size:`1.2em`,style:`normal`,weight:`400`,variant:`normal`};for(let e=0,r=oh.length;e<r;++e){let r=t[e+1];r!==void 0&&(n[oh[e]]=typeof r==`string`?r.trim():r)}return isNaN(Number(n.weight))&&n.weight in sh&&(n.weight=sh[n.weight]),n.families=n.family.split(/,\s?/).map(e=>e.trim().replace(/^['"]|['"]$/g,``)),n},lh=`10px sans-serif`,uh=`#000`,dh=`round`,fh=[],ph=`round`,mh=`#000`,hh=`center`,gh=`middle`,_h=[0,0,0,0],vh=new $m,yh=null,bh,xh={},Sh=new Set([`serif`,`sans-serif`,`monospace`,`cursive`,`fantasy`,`system-ui`,`ui-serif`,`ui-sans-serif`,`ui-monospace`,`ui-rounded`,`emoji`,`math`,`fangsong`]);function Ch(e,t,n){return`${e} ${t} 16px "${n}"`}var wh=(function(){let e,t;async function n(e){await t.ready;let n=ch(e),r=n.families[0].toLowerCase(),i=n.weight,a=[];return t.forEach(e=>{let t=e.family.replace(/^['"]|['"]$/g,``).toLowerCase(),o=sh[e.weight]||e.weight;t===r&&e.style===n.style&&o==i&&a.push(e)}),a.length!==0&&(await Promise.all(a.map(e=>e.load().then(()=>!0,()=>!1)))).some(e=>e)}async function r(){await t.ready;let i=!0,a=vh.getProperties(),o=Object.keys(a).filter(e=>a[e]<100);for(let e=o.length-1;e>=0;--e){let t=o[e],r=a[t];r<100&&(await n(t)?(vf(xh),vh.set(t,100)):(r+=10,vh.set(t,r,!0),r<100&&(i=!1)))}e=void 0,i||(e=setTimeout(r,100))}return async function(n){t||=Np?self.fonts:document.fonts;let i=ch(n);if(!i)return;let a=i.families,o=!1;for(let e of a){if(Sh.has(e))continue;let t=Ch(i.style,i.weight,e);vh.get(t)===void 0&&(vh.set(t,0,!0),o=!0)}o&&(clearTimeout(e),e=setTimeout(r,100))}})(),Th=(function(){let e;return function(t){let n=xh[t];if(n==null){if(Np){let e=ch(t),r=Eh(t,`Žg`);n=(isNaN(Number(e.lineHeight))?1.2:Number(e.lineHeight))*(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent)}else e||(e=document.createElement(`div`),e.innerHTML=`M`,e.style.minHeight=`0`,e.style.maxHeight=`none`,e.style.height=`auto`,e.style.padding=`0`,e.style.border=`none`,e.style.position=`absolute`,e.style.display=`block`,e.style.left=`-99999px`),e.style.font=t,document.body.appendChild(e),n=e.offsetHeight,document.body.removeChild(e);xh[t]=n}return n}})();function Eh(e,t){return yh||=Ip(1,1),e!=bh&&(yh.font=e,bh=yh.font),yh.measureText(t)}function Dh(e,t){return Eh(e,t).width}function Oh(e,t,n){if(t in n)return n[t];let r=t.split(`
`).reduce((t,n)=>Math.max(t,Dh(e,n)),0);return n[t]=r,r}function kh(e,t){let n=[],r=[],i=[],a=0,o=0,s=0,c=0;for(let l=0,u=t.length;l<=u;l+=2){let d=t[l];if(d===`
`||l===u){a=Math.max(a,o),i.push(o),o=0,s+=c,c=0;continue}let f=t[l+1]||e.font,p=Dh(f,d);n.push(p),o+=p;let m=Th(f);r.push(m),c=Math.max(c,m)}return{width:a,height:s,widths:n,heights:r,lineWidths:i}}function Ah(e,t,n,r,i,a,o,s,c,l,u){e.save(),n!==1&&(e.globalAlpha===void 0?e.globalAlpha=e=>e.globalAlpha*=n:e.globalAlpha*=n),t&&e.transform.apply(e,t),r.contextInstructions?(e.translate(c,l),e.scale(u[0],u[1]),jh(r,e)):u[0]<0||u[1]<0?(e.translate(c,l),e.scale(u[0],u[1]),e.drawImage(r,i,a,o,s,0,0,o,s)):e.drawImage(r,i,a,o,s,c,l,o*u[0],s*u[1]),e.restore()}function jh(e,t){let n=e.contextInstructions;for(let e=0,r=n.length;e<r;e+=2)Array.isArray(n[e+1])?t[n[e]].apply(t,n[e+1]):t[n[e]]=n[e+1]}function Mh(e){return e[0]>0&&e[1]>0}function Nh(e,t,n){return n===void 0&&(n=[0,0]),n[0]=e[0]*t+.5|0,n[1]=e[1]*t+.5|0,n}function Ph(e,t){return Array.isArray(e)?e:(t===void 0?t=[e,e]:(t[0]=e,t[1]=e),t)}var Fh=class e{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=Ph(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){let t=this.getScale();return new e({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return U()}getImage(e){return U()}getHitDetectionImage(){return U()}getPixelRatio(e){return 1}getImageState(){return U()}getImageSize(){return U()}getOrigin(){return U()}getSize(){return U()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=Ph(e)}listenImageChange(e){U()}load(){U()}unlistenImageChange(e){U()}ready(){return Promise.resolve()}},Ih=class e extends Fh{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0&&e.rotateWithView,rotation:e.rotation===void 0?0:e.rotation,scale:e.scale===void 0?1:e.scale,displacement:e.displacement===void 0?[0,0]:e.displacement,declutterMode:e.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=e.fill===void 0?null:e.fill,this.origin_=[0,0],this.points_=e.points,this.radius=e.radius,this.radius2_=e.radius2,this.angle_=e.angle===void 0?0:e.angle,this.stroke_=e.stroke===void 0?null:e.stroke,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?V.LOADING:V.LOADED,this.imageState_===V.LOADING&&this.ready().then(()=>this.imageState_=V.LOADED),this.render()}clone(){let t=this.getScale(),n=new e({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}getAnchor(){let e=this.size_,t=this.getDisplacement(),n=this.getScaleArray();return[e[0]/2-t[0]/n[0],e[1]/2+t[1]/n[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||=this.createHitDetectionCanvas_(this.renderOptions_),this.hitDetectionCanvas_}getImage(e){let t=this.fill_?.getKey(),n=`${e},${this.angle_},${this.radius},${this.radius2_},${this.points_},${t}`+Object.values(this.renderOptions_).join(`,`),r=Vm.get(n,null)?.getImage(1);if(!r){let t=this.renderOptions_,i=Math.ceil(t.size*e),a=Ip(i,i);this.draw_(t,a,e),r=a.canvas;let o=new Um(r,void 0,null,V.LOADED,null);Vm.set(n,null,o),createImageBitmap(r).then(e=>{o.setImage(e)})}return r}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(e){this.radius!==e&&(this.radius=e,this.render())}getRadius2(){return this.radius2_}setRadius2(e){this.radius2_!==e&&(this.radius2_=e,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,t,n){if(t===0||this.points_===1/0||e!==`bevel`&&e!==`miter`)return t;let r=this.radius,i=this.radius2_===void 0?r:this.radius2_;if(r<i){let e=r;r=i,i=e}let a=this.radius2_===void 0?this.points_:this.points_*2,o=2*Math.PI/a,s=i*Math.sin(o),c=Math.sqrt(i*i-s*s),l=r-c,u=Math.sqrt(s*s+l*l),d=u/s;if(e===`miter`&&d<=n)return d*t;let f=t/2/d,p=t/2*(l/u),m=Math.sqrt((r+f)*(r+f)+p*p)-r;if(this.radius2_===void 0||e===`bevel`)return m*2;let h=r*Math.sin(o),g=Math.sqrt(r*r-h*h),_=i-g,v=Math.sqrt(h*h+_*_)/h;if(v<=n){let e=v*t/2-i-r;return 2*Math.max(m,e)}return m*2}createRenderOptions(){let e=dh,t=ph,n=0,r=null,i=0,a,o=0;this.stroke_&&(a=Gm(this.stroke_.getColor()??`#000`),o=this.stroke_.getWidth()??1,r=this.stroke_.getLineDash(),i=this.stroke_.getLineDashOffset()??0,t=this.stroke_.getLineJoin()??`round`,e=this.stroke_.getLineCap()??`round`,n=this.stroke_.getMiterLimit()??10);let s=this.calculateLineJoinSize_(t,o,n),c=Math.max(this.radius,this.radius2_||0),l=Math.ceil(2*c+s);return{strokeStyle:a,strokeWidth:o,size:l,lineCap:e,lineDash:r,lineDashOffset:i,lineJoin:t,miterLimit:n}}render(){this.renderOptions_=this.createRenderOptions();let e=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,t,n){if(t.scale(n,n),t.translate(e.size/2,e.size/2),this.createPath_(t),this.fill_){let e=this.fill_.getColor();e===null&&(e=uh),t.fillStyle=Gm(e),t.fill()}e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}createHitDetectionCanvas_(e){let t;if(this.fill_){let n=this.fill_.getColor(),r=0;typeof n==`string`&&(n=hm(n)),n===null?r=1:Array.isArray(n)&&(r=n.length===4?n[3]:1),r===0&&(t=Ip(e.size,e.size),this.drawHitDetectionCanvas_(e,t))}return t?t.canvas:this.getImage(1)}createPath_(e){let t=this.points_,n=this.radius;if(t===1/0)e.arc(0,0,n,0,2*Math.PI);else{let r=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(t*=2);let i=this.angle_-Math.PI/2,a=2*Math.PI/t;for(let o=0;o<t;o++){let t=i+o*a,s=o%2==0?n:r;e.lineTo(s*Math.cos(t),s*Math.sin(t))}e.closePath()}}drawHitDetectionCanvas_(e,t){t.translate(e.size/2,e.size/2),this.createPath_(t),t.fillStyle=uh,t.fill(),e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},Lh=class e extends Ih{constructor(e){e||={radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale===void 0?1:e.scale,rotation:e.rotation===void 0?0:e.rotation,rotateWithView:e.rotateWithView!==void 0&&e.rotateWithView,displacement:e.displacement===void 0?[0,0]:e.displacement,declutterMode:e.declutterMode})}clone(){let t=this.getScale(),n=new e({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}},Rh=class e{constructor(e){e||={},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){let t=this.getColor();return new e({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(e){if(typeof e==`object`&&e&&`src`in e){let t=Wm(null,e.src,{crossOrigin:`anonymous`},void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));t.ready().then(()=>{this.patternImage_=null}),t.getImageState()===V.IDLE&&t.load(),t.getImageState()===V.LOADING&&(this.patternImage_=t)}this.color_=e}getKey(){let e=this.getColor();return e?e instanceof CanvasPattern||e instanceof CanvasGradient?Zm(e):typeof e==`object`&&`src`in e?e.src+`:`+e.offset:hm(e).toString():``}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}};function zh(e,t){if(!e)throw Error(t)}function Bh(e,t,n,r){return n!==void 0&&r!==void 0?[n/e,r/t]:n===void 0?r===void 0?1:r/t:n/e}var Vh=class e extends Fh{constructor(e){e||={};let t=e.opacity===void 0?1:e.opacity,n=e.rotation===void 0?0:e.rotation,r=e.scale===void 0?1:e.scale,i=e.rotateWithView!==void 0&&e.rotateWithView;super({opacity:t,rotation:n,scale:r,displacement:e.displacement===void 0?[0,0]:e.displacement,rotateWithView:i,declutterMode:e.declutterMode}),this.anchor_=e.anchor===void 0?[.5,.5]:e.anchor,this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin===void 0?`top-left`:e.anchorOrigin,this.anchorXUnits_=e.anchorXUnits===void 0?`fraction`:e.anchorXUnits,this.anchorYUnits_=e.anchorYUnits===void 0?`fraction`:e.anchorYUnits,this.crossOrigin_=e.crossOrigin===void 0?null:e.crossOrigin,this.referrerPolicy_=e.referrerPolicy;let a=e.img===void 0?null:e.img,o=e.src;zh(!(o!==void 0&&a),"`image` and `src` cannot be provided at the same time"),(o===void 0||o.length===0)&&a&&(o=a.src||Zm(a)),zh(o!==void 0&&o.length>0,"A defined and non-empty `src` or `image` must be provided"),zh(e.width===void 0&&e.height===void 0||e.scale===void 0,"`width` or `height` cannot be provided together with `scale`");let s;if(e.src===void 0?a!==void 0&&(s=`complete`in a?a.complete?a.src?V.LOADED:V.IDLE:V.LOADING:V.LOADED):s=V.IDLE,this.color_=e.color===void 0?null:hm(e.color),this.iconImage_=Wm(a,o,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},s,this.color_),this.offset_=e.offset===void 0?[0,0]:e.offset,this.offsetOrigin_=e.offsetOrigin===void 0?`top-left`:e.offsetOrigin,this.origin_=null,this.size_=e.size===void 0?null:e.size,this.initialOptions_,e.width!==void 0||e.height!==void 0){let t,n;if(e.size)[t,n]=e.size;else{let r=this.getImage(1);if(r.width&&r.height)t=r.width,n=r.height;else if(r instanceof HTMLImageElement){this.initialOptions_=e;let t=()=>{if(this.unlistenImageChange(t),!this.initialOptions_)return;let n=this.iconImage_.getSize();this.setScale(Bh(n[0],n[1],e.width,e.height))};this.listenImageChange(t);return}}t!==void 0&&this.setScale(Bh(t,n,e.width,e.height))}}clone(){let t,n,r;return this.initialOptions_?(n=this.initialOptions_.width,r=this.initialOptions_.height):(t=this.getScale(),t=Array.isArray(t)?t.slice():t),new e({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:n,height:r,size:this.size_===null?void 0:this.size_.slice(),src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;let t=this.getSize();if(this.anchorXUnits_==`fraction`||this.anchorYUnits_==`fraction`){if(!t)return null;e=this.anchor_.slice(),this.anchorXUnits_==`fraction`&&(e[0]*=t[0]),this.anchorYUnits_==`fraction`&&(e[1]*=t[1])}if(this.anchorOrigin_!=`top-left`){if(!t)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_==`top-right`||this.anchorOrigin_==`bottom-right`)&&(e[0]=-e[0]+t[0]),(this.anchorOrigin_==`bottom-left`||this.anchorOrigin_==`bottom-right`)&&(e[1]=-e[1]+t[1])}this.normalizedAnchor_=e}let t=this.getDisplacement(),n=this.getScaleArray();return[e[0]-t[0]/n[0],e[1]+t[1]/n[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(e){let t=e?hm(e):null;if(this.color_===t||this.color_&&t&&this.color_.length===t.length&&this.color_.every((e,n)=>e===t[n]))return;this.color_=t;let n=this.getSrc(),r=n===void 0?this.getHitDetectionImage():null,i=n===void 0?this.iconImage_.getImageState():V.IDLE;this.iconImage_=Wm(r,n,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},i,this.color_)}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!=`top-left`){let t=this.getSize(),n=this.iconImage_.getSize();if(!t||!n)return null;e=e.slice(),(this.offsetOrigin_==`top-right`||this.offsetOrigin_==`bottom-right`)&&(e[0]=n[0]-t[0]-e[0]),(this.offsetOrigin_==`bottom-left`||this.offsetOrigin_==`bottom-right`)&&(e[1]=n[1]-t[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(e){this.iconImage_=Wm(null,e,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},V.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==V.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){let e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==V.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(H.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(H.CHANGE,e)}ready(){return this.iconImage_.ready()}},Hh=class e{constructor(e){e||={},this.color_=e.color===void 0?null:e.color,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash===void 0?null:e.lineDash,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.offset_=e.offset,this.width_=e.width}clone(){let t=this.getColor();return new e({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setOffset(e){this.offset_=e}setWidth(e){this.width_=e}},Uh=class e{constructor(e){e||={},this.geometry_=null,this.geometryFunction_=qh,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill===void 0?null:e.fill,this.image_=e.image===void 0?null:e.image,this.renderer_=e.renderer===void 0?null:e.renderer,this.hitDetectionRenderer_=e.hitDetectionRenderer===void 0?null:e.hitDetectionRenderer,this.stroke_=e.stroke===void 0?null:e.stroke,this.text_=e.text===void 0?null:e.text,this.zIndex_=e.zIndex}clone(){let t=this.getGeometry();return t&&typeof t==`object`&&(t=t.clone()),new e({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e==`function`?this.geometryFunction_=e:typeof e==`string`?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=qh,this.geometry_=e}setZIndex(e){this.zIndex_=e}};function Wh(e){let t;if(typeof e==`function`)t=e;else{let n;Array.isArray(e)?n=e:(zh(typeof e.getZIndex==`function`,"Expected an `Style` or an array of `Style`"),n=[e]),t=function(){return n}}return t}var Gh=null;function Kh(e,t){if(!Gh){let e=new Rh({color:`rgba(255,255,255,0.4)`}),t=new Hh({color:`#3399CC`,width:1.25});Gh=[new Uh({image:new Lh({fill:e,stroke:t,radius:5}),fill:e,stroke:t})]}return Gh}function qh(e){return e.getGeometry()}var Jh=`#333`,Yh=class e{constructor(e){e||={},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.keepUpright_=e.keepUpright,this.scale_=e.scale,this.scaleArray_=Ph(e.scale===void 0?1:e.scale),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill===void 0?new Rh({color:Jh}):e.fill,this.maxAngle_=e.maxAngle===void 0?Math.PI/4:e.maxAngle,this.placement_=e.placement===void 0?`point`:e.placement,this.overflow_=!!e.overflow,this.stroke_=e.stroke===void 0?null:e.stroke,this.offsetX_=e.offsetX===void 0?0:e.offsetX,this.offsetY_=e.offsetY===void 0?0:e.offsetY,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){let t=this.getScale();return new e({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof Rh?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setKeepUpright(e){this.keepUpright_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=Ph(e===void 0?1:e)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}},Xh=[1,0,0,1,0,0];function Zh(){return Xh.slice(0)}function Qh(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=t[0],l=t[1],u=t[2],d=t[3],f=t[4],p=t[5];return e[0]=n*c+i*l,e[1]=r*c+a*l,e[2]=n*u+i*d,e[3]=r*u+a*d,e[4]=n*f+i*p+o,e[5]=r*f+a*p+s,e}function $h(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function eg(e,t){let n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function tg(e,t,n,r,i,a,o,s){let c=Math.sin(a),l=Math.cos(a);return e[0]=r*l,e[1]=i*c,e[2]=-r*c,e[3]=i*l,e[4]=o*r*l-s*r*c+t,e[5]=o*i*c+s*i*l+n,e}function ng(e,t){let n=rg(t);zh(n!==0,`Transformation matrix cannot be inverted`);let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-a/n,e[3]=r/n,e[4]=(a*c-o*s)/n,e[5]=-(r*c-i*s)/n,e}function rg(e){return e[0]*e[3]-e[1]*e[2]}var ig=[1e5,1e5,1e5,1e5,2,2];function ag(e){return`matrix(`+e.join(`, `)+`)`}function og(e){return e.substring(7,e.length-1).split(`,`).map(parseFloat)}function sg(e,t){let n=og(e),r=og(t);for(let e=0;e<6;++e)if(Math.round((n[e]-r[e])*ig[e])!==0)return!1;return!0}function cg(e,t,n,r,i,a,o){a||=[],o||=2;let s=0;for(let c=t;c<n;c+=r){let t=e[c],n=e[c+1];a[s++]=i[0]*t+i[2]*n+i[4],a[s++]=i[1]*t+i[3]*n+i[5];for(let t=2;t<o;t++)a[s++]=e[c+t]}return a&&a.length!=s&&(a.length=s),a}function lg(e,t,n,r,i,a,o){o||=[];let s=Math.cos(i),c=Math.sin(i),l=a[0],u=a[1],d=0;for(let i=t;i<n;i+=r){let t=e[i]-l,n=e[i+1]-u;o[d++]=l+t*s-n*c,o[d++]=u+t*c+n*s;for(let t=i+2;t<i+r;++t)o[d++]=e[t]}return o&&o.length!=d&&(o.length=d),o}function ug(e,t,n,r,i,a,o,s){s||=[];let c=o[0],l=o[1],u=0;for(let o=t;o<n;o+=r){let t=e[o]-c,n=e[o+1]-l;s[u++]=c+i*t,s[u++]=l+a*n;for(let t=o+2;t<o+r;++t)s[u++]=e[t]}return s&&s.length!=u&&(s.length=u),s}function dg(e,t,n,r,i,a,o){o||=[];let s=0;for(let c=t;c<n;c+=r){o[s++]=e[c]+i,o[s++]=e[c+1]+a;for(let t=c+2;t<c+r;++t)o[s++]=e[t]}return o&&o.length!=s&&(o.length=s),o}var fg=Zh(),pg=[NaN,NaN],mg=class extends $m{constructor(){super(),this.extent_=nd(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Mm((e,t,n)=>{if(!n)return this.getSimplifiedGeometry(t);let r=this.clone();return r.applyTransform(n),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return U()}closestPointXY(e,t,n,r){return U()}containsXY(e,t){return this.closestPointXY(e,t,pg,Number.MIN_VALUE)===0}getClosestPoint(e,t){return t||=[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return U()}getExtent(e){if(this.extentRevision_!=this.getRevision()){let e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&id(e),this.extentRevision_=this.getRevision()}return Od(this.extent_,e)}rotate(e,t){U()}scale(e,t,n){U()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return U()}getType(){return U()}applyTransform(e){U()}intersectsExtent(e){return U()}translate(e,t){U()}transform(e,t){let n=lp(e),r=n.getUnits()==`tile-pixels`?function(e,r,i){let a=n.getExtent(),o=n.getWorldExtent(),s=bd(o)/bd(a);tg(fg,o[0],o[3],s,-s,0,0,0);let c=cg(e,0,e.length,i,fg,r),l=yp(n,t);return l?l(c,c,i):c}:yp(n,t);return this.applyTransform(r),this}},hg=class extends mg{constructor(){super(),this.layout=`XY`,this.stride=2,this.flatCoordinates}computeExtent(e){return od(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return U()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=_g(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){U()}setLayout(e,t,n){let r;if(e)r=_g(e);else{for(let e=0;e<n;++e){if(t.length===0){this.layout=`XY`,this.stride=2;return}t=t[0]}r=t.length,e=gg(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith(`XYZ`)?3:2,this.stride),this.changed())}rotate(e,t){let n=this.getFlatCoordinates();if(n){let r=this.getStride();lg(n,0,n.length,r,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||=gd(this.getExtent());let r=this.getFlatCoordinates();if(r){let i=this.getStride();ug(r,0,r.length,i,e,t,n,r),this.changed()}}translate(e,t){let n=this.getFlatCoordinates();if(n){let r=this.getStride();dg(n,0,n.length,r,e,t,n),this.changed()}}};function gg(e){let t;return e==2?t=`XY`:e==3?t=`XYZ`:e==4&&(t=`XYZM`),t}function _g(e){let t;return e==`XY`?t=2:e==`XYZ`||e==`XYM`?t=3:e==`XYZM`&&(t=4),t}function vg(e,t,n){let r=e.getFlatCoordinates();if(!r)return null;let i=e.getStride();return cg(r,0,r.length,i,t,n)}function yg(e,t,n,r){for(let r=0,i=n.length;r<i;++r)e[t++]=n[r];return t}function bg(e,t,n,r){for(let i=0,a=n.length;i<a;++i){let a=n[i];for(let n=0;n<r;++n)e[t++]=a[n]}return t}function xg(e,t,n,r,i){i||=[];let a=0;for(let o=0,s=n.length;o<s;++o){let s=bg(e,t,n[o],r);i[a++]=s,t=s}return i.length=a,i}function Sg(e,t,n,r,i){i||=[];let a=0;for(let o=0,s=n.length;o<s;++o){let s=xg(e,t,n[o],r,i[a]);s.length===0&&(s[0]=t),i[a++]=s,t=s[s.length-1]}return i.length=a,i}var Cg=class e extends hg{constructor(e,t,n){super(),n!==void 0&&t===void 0?this.setFlatCoordinates(n,e):(t||=0,this.setCenterAndRadius(e,t,n))}clone(){let t=new e(this.flatCoordinates.slice(),void 0,this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){let i=this.flatCoordinates,a=e-i[0],o=t-i[1],s=a*a+o*o;if(s<r){if(s===0)for(let e=0;e<this.stride;++e)n[e]=i[e];else{let e=this.getRadius()/Math.sqrt(s);n[0]=i[0]+e*a,n[1]=i[1]+e*o;for(let e=2;e<this.stride;++e)n[e]=i[e]}return n.length=this.stride,s}return r}containsXY(e,t){let n=this.flatCoordinates,r=e-n[0],i=t-n[1];return r*r+i*i<=this.getRadiusSquared_()}getCenter(){return this.flatCoordinates.slice(0,this.stride)}computeExtent(e){let t=this.flatCoordinates,n=t[this.stride]-t[0];return rd(t[0]-n,t[1]-n,t[0]+n,t[1]+n,e)}getRadius(){return Math.sqrt(this.getRadiusSquared_())}getRadiusSquared_(){let e=this.flatCoordinates[this.stride]-this.flatCoordinates[0],t=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return e*e+t*t}getType(){return`Circle`}intersectsExtent(e){if(Ed(e,this.getExtent())){let t=this.getCenter();return e[0]<=t[0]&&e[2]>=t[0]||e[1]<=t[1]&&e[3]>=t[1]||fd(e,this.intersectsCoordinate.bind(this))}return!1}setCenter(e){let t=this.stride,n=this.flatCoordinates[t]-this.flatCoordinates[0],r=e.slice();r[t]=r[0]+n;for(let n=1;n<t;++n)r[t+n]=e[n];this.setFlatCoordinates(this.layout,r),this.changed()}setCenterAndRadius(e,t,n){this.setLayout(n,e,0),this.flatCoordinates||=[];let r=this.flatCoordinates,i=yg(r,0,e,this.stride);r[i++]=r[0]+t;for(let e=1,t=this.stride;e<t;++e)r[i++]=r[e];r.length=i,this.changed()}getCoordinates(){return null}setCoordinates(e,t){}setRadius(e){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+e,this.changed()}rotate(e,t){let n=this.getCenter(),r=this.getStride();this.setCenter(lg(n,0,n.length,r,e,t,n)),this.changed()}};Cg.prototype.transform;function wg(e,t,n,r,i,a,o,s){o??=[],s??=r;let c=e[t+r],l=e[t+r+1],u=e[n-2*r],d=e[n-2*r+1],f,p,m,h,g,_,v,y,b=0;for(let x=t;x<n;x+=r){m=f,h=p,g=void 0,_=void 0,x+r<n&&(g=e[x+r],_=e[x+r+1]),a&&x===t&&(m=u,h=d),a&&x===n-r&&(g=c,_=l),f=e[x],p=e[x+1],[v,y]=Tg(f,p,m,h,g,_,i),o[b++]=v,o[b++]=y;for(let t=2;t<s;t++)o[b++]=e[x+t]}return o.length!=b&&(o.length=b),o}function Tg(e,t,n,r,i,a,o){let s,c;n!==void 0&&r!==void 0?(s=e-n,c=t-r):i!==void 0&&a!==void 0?(s=i-e,c=a-t):(s=1,c=0);let l=Math.hypot(s,c),u=s/l,d=c/l;if(s=-d,c=u,n===void 0||r===void 0||i===void 0||a===void 0)return[e+s*o,t+c*o];let f=Zd([e,t],[n,r],[i,a]);if(Math.cos(f)>.998)return[e+u*o,t+d*o];let p=Math.cos(f/2),m=Math.sin(f/2),h=m*s+p*c,g=-p*s+m*c,_=1/m*h,v=1/m*g;return[e+_*o,t+v*o]}function Eg(e,t,n=!1){for(let r=0,i=e.length-2;r<i;r+=t){let i=n&&r===0?e.length-3*t:e.length-2*t;for(let n=i;n>r+t;n-=t){let i=e[r],a=e[r+1],o=e[r+t],s=e[r+t+1],c=e[n],l=e[n+1],u=e[n+t],d=e[n+t+1],f=(d-l)*(o-i)-(u-c)*(s-a);if(f===0)continue;let p=((u-c)*(a-l)-(d-l)*(i-c))/f,m=((o-i)*(a-l)-(s-a)*(i-c))/f;if(p>0&&p<1&&m>0&&m<1){let c=i+p*(o-i),l=a+p*(s-a);e[r+t]=c,e[r+t+1]=l,e.splice(r+2*t,n-r-t);break}}}return e}var Dg=class{drawCustom(e,t,n,r,i){}drawGeometry(e){}setStyle(e){}drawCircle(e,t,n){}drawFeature(e,t,n){}drawGeometryCollection(e,t,n){}drawLineString(e,t,n){}drawMultiLineString(e,t,n){}drawMultiPoint(e,t,n){}drawMultiPolygon(e,t,n){}drawPoint(e,t,n){}drawPolygon(e,t,n){}drawText(e,t,n){}setFillStrokeStyle(e,t){}setImageStyle(e,t){}setTextStyle(e,t){}},Og=class extends Dg{constructor(e,t,n,r,i,a,o){super(),this.context_=e,this.pixelRatio_=t,this.extent_=n,this.transform_=r,this.transformRotation_=r?Vd(Math.atan2(r[1],r[0]),10):0,this.viewRotation_=i,this.squaredTolerance_=a,this.userTransform_=o,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_=``,this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=Zh()}drawImages_(e,t,n,r){if(!this.image_)return;let i=cg(e,t,n,r,this.transform_,this.pixelCoordinates_),a=this.context_,o=this.tmpLocalTransform_,s=a.globalAlpha;this.imageOpacity_!=1&&(a.globalAlpha=s*this.imageOpacity_);let c=this.imageRotation_;this.transformRotation_===0&&(c-=this.viewRotation_),this.imageRotateWithView_&&(c+=this.viewRotation_);for(let e=0,t=i.length;e<t;e+=2){let t=i[e]-this.imageAnchorX_,n=i[e+1]-this.imageAnchorY_;if(c!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){let e=t+this.imageAnchorX_,r=n+this.imageAnchorY_;tg(o,e,r,1,1,c,-e,-r),a.save(),a.transform.apply(a,o),a.translate(e,r),a.scale(this.imageScale_[0],this.imageScale_[1]),a.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),a.restore()}else a.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,t,n,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(a.globalAlpha=s)}drawText_(e,t,n,r){if(!this.textState_||this.text_===``)return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);let i=cg(e,t,n,r,this.transform_,this.pixelCoordinates_),a=this.context_,o=this.textRotation_;for(this.transformRotation_===0&&(o-=this.viewRotation_),this.textRotateWithView_&&(o+=this.viewRotation_);t<n;t+=r){let e=i[t]+this.textOffsetX_,n=i[t+1]+this.textOffsetY_;o!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(a.save(),a.translate(e-this.textOffsetX_,n-this.textOffsetY_),a.rotate(o),a.translate(this.textOffsetX_,this.textOffsetY_),a.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&a.strokeText(this.text_,0,0),this.textFillState_&&a.fillText(this.text_,0,0),a.restore()):(this.textStrokeState_&&a.strokeText(this.text_,e,n),this.textFillState_&&a.fillText(this.text_,e,n))}}moveToLineTo_(e,t,n,r,i,a){let o=this.context_,s=cg(e,t,n,r,this.transform_,this.pixelCoordinates_);if(Math.abs(a)>0){let e=s.length,t=i||Math.abs(s[0]-s[e-2])<1e-6&&Math.abs(s[1]-s[e-1])<1e-6;s=wg(s,0,e,2,a,t,s),Eg(s,2,t)}o.moveTo(s[0],s[1]);let c=s.length;i&&(c-=2);for(let e=2;e<c;e+=2)o.lineTo(s[e],s[e+1]);return i&&o.closePath(),n}drawRings_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a)t=this.moveToLineTo_(e,t,n[a],r,!0,i);return t}drawCircle(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Ed(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let t=vg(e,this.transform_,this.pixelCoordinates_),n=t[2]-t[0],r=t[3]-t[1],i=Math.sqrt(n*n+r*r),a=this.context_;a.beginPath(),a.arc(t[0],t[1],i,0,2*Math.PI),this.fillState_&&a.fill(),this.strokeState_&&a.stroke()}this.text_!==``&&this.drawText_(e.getCenter(),0,2,2)}}setStyle(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())}setTransform(e){this.transform_=e}drawGeometry(e){switch(e.getType()){case`Point`:this.drawPoint(e);break;case`LineString`:this.drawLineString(e);break;case`Polygon`:this.drawPolygon(e);break;case`MultiPoint`:this.drawMultiPoint(e);break;case`MultiLineString`:this.drawMultiLineString(e);break;case`MultiPolygon`:this.drawMultiPolygon(e);break;case`GeometryCollection`:this.drawGeometryCollection(e);break;case`Circle`:this.drawCircle(e)}}drawFeature(e,t){let n=t.getGeometryFunction()(e);n&&(this.setStyle(t),this.drawGeometry(n))}drawGeometryCollection(e){let t=e.getGeometriesArray();for(let e=0,n=t.length;e<n;++e)this.drawGeometry(t[e])}drawPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let t=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(t,0,t.length,n),this.text_!==``&&this.drawText_(t,0,t.length,n)}drawMultiPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let t=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(t,0,t.length,n),this.text_!==``&&this.drawText_(t,0,t.length,n)}drawLineString(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Ed(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);let t=this.context_,n=e.getFlatCoordinates();t.beginPath(),this.moveToLineTo_(n,0,n.length,e.getStride(),!1,this.strokeState_.strokeOffset),t.stroke()}if(this.text_!==``){let t=e.getFlatMidpoint();this.drawText_(t,0,2,2)}}}drawMultiLineString(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let t=e.getExtent();if(Ed(this.extent_,t)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);let t=this.context_,n=e.getFlatCoordinates(),r=0,i=e.getEnds(),a=e.getStride();t.beginPath();for(let e=0,t=i.length;e<t;++e)r=this.moveToLineTo_(n,r,i[e],a,!1,this.strokeState_.strokeOffset);t.stroke()}if(this.text_!==``){let t=e.getFlatMidpoints();this.drawText_(t,0,t.length,2)}}}drawPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Ed(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let t=this.context_;t.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride(),this.strokeState_?.strokeOffset),this.fillState_&&t.fill(),this.strokeState_&&t.stroke()}if(this.text_!==``){let t=e.getFlatInteriorPoint();this.drawText_(t,0,2,2)}}}drawMultiPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Ed(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let t=this.context_,n=e.getOrientedFlatCoordinates(),r=0,i=e.getEndss(),a=e.getStride();t.beginPath();for(let e=0,t=i.length;e<t;++e){let t=i[e];r=this.drawRings_(n,r,t,a,this.strokeState_?.strokeOffset)}this.fillState_&&t.fill(),this.strokeState_&&t.stroke()}if(this.text_!==``){let t=e.getFlatInteriorPoints();this.drawText_(t,0,t.length,2)}}}setContextFillState_(e){let t=this.context_,n=this.contextFillState_;n?n.fillStyle!=e.fillStyle&&(n.fillStyle=e.fillStyle,t.fillStyle=e.fillStyle):(t.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})}setContextStrokeState_(e){let t=this.context_,n=this.contextStrokeState_;n?(n.lineCap!=e.lineCap&&(n.lineCap=e.lineCap,t.lineCap=e.lineCap),Dm(n.lineDash,e.lineDash)||t.setLineDash(n.lineDash=e.lineDash),n.lineDashOffset!=e.lineDashOffset&&(n.lineDashOffset=e.lineDashOffset,t.lineDashOffset=e.lineDashOffset),n.lineJoin!=e.lineJoin&&(n.lineJoin=e.lineJoin,t.lineJoin=e.lineJoin),n.lineWidth!=e.lineWidth&&(n.lineWidth=e.lineWidth,t.lineWidth=e.lineWidth),n.miterLimit!=e.miterLimit&&(n.miterLimit=e.miterLimit,t.miterLimit=e.miterLimit),n.strokeStyle!=e.strokeStyle&&(n.strokeStyle=e.strokeStyle,t.strokeStyle=e.strokeStyle)):(t.lineCap=e.lineCap,t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset,t.lineJoin=e.lineJoin,t.lineWidth=e.lineWidth,t.miterLimit=e.miterLimit,t.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})}setContextTextState_(e){let t=this.context_,n=this.contextTextState_,r=e.textAlign?e.textAlign:hh;n?(n.font!=e.font&&(n.font=e.font,t.font=e.font),n.textAlign!=r&&(n.textAlign=r,t.textAlign=r),n.textBaseline!=e.textBaseline&&(n.textBaseline=e.textBaseline,t.textBaseline=e.textBaseline)):(t.font=e.font,t.textAlign=r,t.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:r,textBaseline:e.textBaseline})}setFillStrokeStyle(e,t){if(!e)this.fillState_=null;else{let t=e.getColor();this.fillState_={fillStyle:Gm(t||uh)}}if(!t)this.strokeState_=null;else{let e=t.getColor(),n=t.getLineCap(),r=t.getLineDash(),i=t.getLineDashOffset(),a=t.getLineJoin(),o=t.getWidth(),s=t.getMiterLimit(),c=r||fh,l=t.getOffset();this.strokeState_={lineCap:n===void 0?dh:n,lineDash:this.pixelRatio_===1?c:c.map(e=>e*this.pixelRatio_),lineDashOffset:(i||0)*this.pixelRatio_,lineJoin:a===void 0?ph:a,lineWidth:(o===void 0?1:o)*this.pixelRatio_,miterLimit:s===void 0?10:s,strokeStyle:Gm(e||mh),strokeOffset:(l??0)*this.pixelRatio_}}}setImageStyle(e){let t;if(!e||!(t=e.getSize())){this.image_=null;return}let n=e.getPixelRatio(this.pixelRatio_),r=e.getAnchor(),i=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=r[0]*n,this.imageAnchorY_=r[1]*n,this.imageHeight_=t[1]*n,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=i[0],this.imageOriginY_=i[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation();let a=e.getScaleArray();this.imageScale_=[a[0]*this.pixelRatio_/n,a[1]*this.pixelRatio_/n],this.imageWidth_=t[0]*n}setTextStyle(e){if(!e)this.text_=``;else{let t=e.getFill();if(!t)this.textFillState_=null;else{let e=t.getColor();this.textFillState_={fillStyle:Gm(e||uh)}}let n=e.getStroke();if(!n)this.textStrokeState_=null;else{let e=n.getColor(),t=n.getLineCap(),r=n.getLineDash(),i=n.getLineDashOffset(),a=n.getLineJoin(),o=n.getWidth(),s=n.getMiterLimit();this.textStrokeState_={lineCap:t===void 0?dh:t,lineDash:r||fh,lineDashOffset:i||0,lineJoin:a===void 0?ph:a,lineWidth:o===void 0?1:o,miterLimit:s===void 0?10:s,strokeStyle:Gm(e||mh)}}let r=e.getFont(),i=e.getOffsetX(),a=e.getOffsetY(),o=e.getRotateWithView(),s=e.getRotation(),c=e.getScaleArray(),l=e.getText(),u=e.getTextAlign(),d=e.getTextBaseline();this.textState_={font:r===void 0?lh:r,textAlign:u===void 0?hh:u,textBaseline:d===void 0?gh:d},this.text_=l===void 0?``:Array.isArray(l)?l.reduce((e,t,n)=>e+=n%2?` `:t,``):l,this.textOffsetX_=i===void 0?0:this.pixelRatio_*i,this.textOffsetY_=a===void 0?0:this.pixelRatio_*a,this.textRotateWithView_=o!==void 0&&o,this.textRotation_=s===void 0?0:s,this.textScale_=[this.pixelRatio_*c[0],this.pixelRatio_*c[1]]}}},kg=.5,Ag={Point:Hg,LineString:zg,Polygon:Wg,MultiPoint:Ug,MultiLineString:Bg,MultiPolygon:Vg,GeometryCollection:Rg,Circle:Pg};function jg(e,t){return parseInt(Zm(e),10)-parseInt(Zm(t),10)}function Mg(e,t){let n=Ng(e,t);return n*n}function Ng(e,t){return kg*e/t}function Pg(e,t,n,r,i){let a=n.getFill(),o=n.getStroke();if(a||o){let s=e.getBuilder(n.getZIndex(),`Circle`);s.setFillStrokeStyle(a,o),s.drawCircle(t,r,i)}let s=n.getText();if(s&&s.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s),a.drawText(t,r,i)}}function Fg(e,t,n,r,i,a,o,s){let c=[],l=n.getImage();if(l){let e=!0,t=l.getImageState();t==V.LOADED||t==V.ERROR?e=!1:t==V.IDLE&&l.load(),e&&c.push(l.ready())}let u=n.getFill();u&&u.loading()&&c.push(u.ready());let d=c.length>0;return d&&Promise.all(c).then(()=>i(null)),Ig(e,t,n,r,a,o,s),d}function Ig(e,t,n,r,i,a,o){let s=n.getGeometryFunction()(t);if(!s)return;let c=s.simplifyTransformed(r,i);if(n.getRenderer())Lg(e,c,n,t,o);else{let r=Ag[c.getType()];r(e,c,n,t,o,a)}}function Lg(e,t,n,r,i){if(t.getType()==`GeometryCollection`){let a=t.getGeometries();for(let t=0,o=a.length;t<o;++t)Lg(e,a[t],n,r,i);return}e.getBuilder(n.getZIndex(),`Default`).drawCustom(t,r,n.getRenderer(),n.getHitDetectionRenderer(),i)}function Rg(e,t,n,r,i,a){let o=t.getGeometriesArray(),s,c;for(s=0,c=o.length;s<c;++s){let t=Ag[o[s].getType()];t(e,o[s],n,r,i,a)}}function zg(e,t,n,r,i){let a=n.getStroke();if(a){let o=e.getBuilder(n.getZIndex(),`LineString`);o.setFillStrokeStyle(null,a),o.drawLineString(t,r,i)}let o=n.getText();if(o&&o.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(o),a.drawText(t,r,i)}}function Bg(e,t,n,r,i){let a=n.getStroke();if(a){let o=e.getBuilder(n.getZIndex(),`LineString`);o.setFillStrokeStyle(null,a),o.drawMultiLineString(t,r,i)}let o=n.getText();if(o&&o.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(o),a.drawText(t,r,i)}}function Vg(e,t,n,r,i){let a=n.getFill(),o=n.getStroke();if(o||a){let s=e.getBuilder(n.getZIndex(),`Polygon`);s.setFillStrokeStyle(a,o),s.drawMultiPolygon(t,r,i)}let s=n.getText();if(s&&s.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s),a.drawText(t,r,i)}}function Hg(e,t,n,r,i,a){let o=n.getImage(),s=n.getText(),c=s&&s.getText(),l=a&&o&&c?{}:void 0;if(o){if(o.getImageState()!=V.LOADED)return;let a=e.getBuilder(n.getZIndex(),`Image`);a.setImageStyle(o,l),a.drawPoint(t,r,i)}if(c){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s,l),a.drawText(t,r,i)}}function Ug(e,t,n,r,i,a){let o=n.getImage(),s=o&&o.getOpacity()!==0,c=n.getText(),l=c&&c.getText(),u=a&&s&&l?{}:void 0;if(s){if(o.getImageState()!=V.LOADED)return;let a=e.getBuilder(n.getZIndex(),`Image`);a.setImageStyle(o,u),a.drawMultiPoint(t,r,i)}if(l){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(c,u),a.drawText(t,r,i)}}function Wg(e,t,n,r,i){let a=n.getFill(),o=n.getStroke();if(a||o){let s=e.getBuilder(n.getZIndex(),`Polygon`);s.setFillStrokeStyle(a,o),s.drawPolygon(t,r,i)}let s=n.getText();if(s&&s.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s),a.drawText(t,r,i)}}function Gg(e){if(!(e.context instanceof CanvasRenderingContext2D))throw Error(`Only works for render events from Canvas 2D layers`);let t=e.inversePixelTransform[0],n=e.inversePixelTransform[1],r=Math.sqrt(t*t+n*n),i=e.frameState,a=Qh(e.inversePixelTransform.slice(),i.coordinateToPixelTransform),o=Mg(i.viewState.resolution,r),s,c=Sp();return c&&(s=_p(c,i.viewState.projection)),new Og(e.context,r,i.extent,a,i.viewState.rotation,o,s)}function Kg(e,t,n){let r=r=>{let i=r.frameState;if(!i)return;let a=i.time%t/t;n({event:r,frame:i,vector:Gg(r),resolution:i.viewState.resolution,t:a})!==!1&&e.map.render()};return e.layer.on(`postrender`,r),e.map.render(),()=>e.layer.un(`postrender`,r)}function qg(e,t=1){let n=e.replace(`#`,``);return n.length===3&&(n=n.split(``).map(e=>e+e).join(``)),`rgba(${parseInt(n.slice(0,2),16)},${parseInt(n.slice(2,4),16)},${parseInt(n.slice(4,6),16)},${t})`}function Jg(e,t){let n=0;for(let t=0;t<e.length;t++)n=n*31+e.charCodeAt(t)>>>0;return n%t}var Yg=class e extends $m{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_=`geometry`,this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e){if(typeof e.getSimplifiedGeometry==`function`){let t=e;this.setGeometry(t)}else{let t=e;this.setProperties(t)}}}clone(){let t=new e,n=this.geometryName_;t.setGeometryName(n);let r=this.getPropertiesInternal();if(r){let e=this.getGeometry();for(let i in r)i===n&&e?t.set(i,e.clone()):t.set(i,r[i],!0)}let i=this.getStyle();return i&&t.setStyle(i),t}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&=(ym(this.geometryChangeKey_),null);let e=this.getGeometry();e&&(this.geometryChangeKey_=_m(e,H.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?Xg(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){e!==this.geometryName_&&(this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_())}};function Xg(e){if(typeof e==`function`)return e;let t;return Array.isArray(e)?t=e:(zh(typeof e.getZIndex==`function`,"Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),t=[e]),function(){return t}}function Zg(e,t,n,r,i,a,o){let s=e[t],c=e[t+1],l=e[n]-s,u=e[n+1]-c,d;if(l===0&&u===0)d=t;else{let f=((i-s)*l+(a-c)*u)/(l*l+u*u);if(f>1)d=n;else if(f>0){for(let i=0;i<r;++i)o[i]=Bd(e[t+i],e[n+i],f);o.length=r;return}else d=t}for(let t=0;t<r;++t)o[t]=e[d+t];o.length=r}function Qg(e,t,n,r,i){let a=e[t],o=e[t+1];for(t+=r;t<n;t+=r){let n=e[t],r=e[t+1],s=Fd(a,o,n,r);s>i&&(i=s),a=n,o=r}return i}function $g(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];i=Qg(e,t,o,r,i),t=o}return i}function e_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];i=$g(e,t,o,r,i),t=o[o.length-1]}return i}function t_(e,t,n,r,i,a,o,s,c,l,u){if(t==n)return l;let d,f;if(i===0){if(f=Fd(o,s,e[t],e[t+1]),f<l){for(d=0;d<r;++d)c[d]=e[t+d];return c.length=r,f}return l}u||=[NaN,NaN];let p=t+r;for(;p<n;)if(Zg(e,p-r,p,r,o,s,u),f=Fd(o,s,u[0],u[1]),f<l){for(l=f,d=0;d<r;++d)c[d]=u[d];c.length=r,p+=r}else p+=r*Math.max((Math.sqrt(f)-Math.sqrt(l))/i|0,1);if(a&&(Zg(e,n-r,t,r,o,s,u),f=Fd(o,s,u[0],u[1]),f<l)){for(l=f,d=0;d<r;++d)c[d]=u[d];c.length=r}return l}function n_(e,t,n,r,i,a,o,s,c,l,u){u||=[NaN,NaN];for(let d=0,f=n.length;d<f;++d){let f=n[d];l=t_(e,t,f,r,i,a,o,s,c,l,u),t=f}return l}function r_(e,t,n,r,i,a,o,s,c,l,u){u||=[NaN,NaN];for(let d=0,f=n.length;d<f;++d){let f=n[d];l=n_(e,t,f,r,i,a,o,s,c,l,u),t=f[f.length-1]}return l}function i_(e,t,n,r,i){i=i===void 0?[]:i;let a=0;for(let o=t;o<n;o+=r)i[a++]=e.slice(o,o+r);return i.length=a,i}function a_(e,t,n,r,i){i=i===void 0?[]:i;let a=0;for(let o=0,s=n.length;o<s;++o){let s=n[o];i[a++]=i_(e,t,s,r,i[a]),t=s}return i.length=a,i}function o_(e,t,n,r,i){i=i===void 0?[]:i;let a=0;for(let o=0,s=n.length;o<s;++o){let s=n[o];i[a++]=s.length===1&&s[0]===t?[]:a_(e,t,s,r,i[a]),t=s[s.length-1]}return i.length=a,i}function s_(e,t,n,r,i,a,o){let s,c,l=(n-t)/r;if(l===1)s=t;else if(l===2)s=t,c=i;else if(l!==0){let a=e[t],o=e[t+1],l=0,u=[0];for(let i=t+r;i<n;i+=r){let t=e[i],n=e[i+1];l+=Math.sqrt((t-a)*(t-a)+(n-o)*(n-o)),u.push(l),a=t,o=n}let d=i*l,f=xm(u,d);f<0?(c=(d-u[-f-2])/(u[-f-1]-u[-f-2]),s=t+(-f-2)*r):s=t+f*r}o=o>1?o:2,a||=Array(o);for(let t=0;t<o;++t)a[t]=s===void 0?NaN:c===void 0?e[s+t]:Bd(e[s+t],e[s+r+t],c);return a}function c_(e,t,n,r,i,a){if(n==t)return null;let o;if(i<e[t+r-1])return a?(o=e.slice(t,t+r),o[r-1]=i,o):null;if(e[n-1]<i)return a?(o=e.slice(n-r,n),o[r-1]=i,o):null;if(i==e[t+r-1])return e.slice(t,t+r);let s=t/r,c=n/r;for(;s<c;){let t=s+c>>1;i<e[(t+1)*r-1]?c=t:s=t+1}let l=e[s*r-1];if(i==l)return e.slice((s-1)*r,(s-1)*r+r);let u=e[(s+1)*r-1],d=(i-l)/(u-l);o=[];for(let t=0;t<r-1;++t)o.push(Bd(e[(s-1)*r+t],e[s*r+t],d));return o.push(i),o}function l_(e,t,n,r,i,a,o){if(o)return c_(e,t,n[n.length-1],r,i,a);let s;if(i<e[r-1])return a?(s=e.slice(0,r),s[r-1]=i,s):null;if(e[e.length-1]<i)return a?(s=e.slice(e.length-r),s[r-1]=i,s):null;for(let a=0,o=n.length;a<o;++a){let o=n[a];if(t!=o){if(i<e[t+r-1])return null;if(i<=e[o-1])return c_(e,t,o,r,i,!1);t=o}}return null}function u_(e,t,n,r,i){return!fd(i,function(i){return!d_(e,t,n,r,i[0],i[1])})}function d_(e,t,n,r,i,a){let o=0,s=e[n-r],c=e[n-r+1];for(;t<n;t+=r){let n=e[t],r=e[t+1];c<=a?r>a&&(n-s)*(a-c)-(i-s)*(r-c)>0&&o++:r<=a&&(n-s)*(a-c)-(i-s)*(r-c)<0&&o--,s=n,c=r}return o!==0}function f_(e,t,n,r,i,a){if(n.length===0||!d_(e,t,n[0],r,i,a))return!1;for(let t=1,o=n.length;t<o;++t)if(d_(e,n[t-1],n[t],r,i,a))return!1;return!0}function p_(e,t,n,r,i,a){if(n.length===0)return!1;for(let o=0,s=n.length;o<s;++o){let s=n[o];if(f_(e,t,s,r,i,a))return!0;t=s[s.length-1]}return!1}function m_(e,t,n,r,i){let a;for(t+=r;t<n;t+=r)if(a=i(e.slice(t-r,t),e.slice(t,t+r)),a)return a;return!1}function h_(e,t,n,r,i,a){return a??=ud(nd(),e,t,n,r),Ed(i,a)?a[0]>=i[0]&&a[2]<=i[2]||a[1]>=i[1]&&a[3]<=i[3]||m_(e,t,n,r,function(e,t){return kd(i,e,t)}):!1}function g_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){if(h_(e,t,n[a],r,i))return!0;t=n[a]}return!1}function __(e,t,n,r,i){return!!(h_(e,t,n,r,i)||d_(e,t,n,r,i[0],i[1])||d_(e,t,n,r,i[0],i[3])||d_(e,t,n,r,i[2],i[1])||d_(e,t,n,r,i[2],i[3]))}function v_(e,t,n,r,i){if(!__(e,t,n[0],r,i))return!1;if(n.length===1)return!0;for(let t=1,a=n.length;t<a;++t)if(u_(e,n[t-1],n[t],r,i)&&!h_(e,n[t-1],n[t],r,i))return!1;return!0}function y_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];if(v_(e,t,o,r,i))return!0;t=o[o.length-1]}return!1}function b_(e,t,n,r){let i=e[t],a=e[t+1],o=0;for(let s=t+r;s<n;s+=r){let t=e[s],n=e[s+1];o+=Math.sqrt((t-i)*(t-i)+(n-a)*(n-a)),i=t,a=n}return o}function x_(e,t,n,r,i,a,o){let s=(n-t)/r;if(s<3){for(;t<n;t+=r)a[o++]=e[t],a[o++]=e[t+1];return o}let c=Array(s);c[0]=1,c[s-1]=1;let l=[t,n-r],u=0;for(;l.length>0;){let n=l.pop(),a=l.pop(),o=0,s=e[a],d=e[a+1],f=e[n],p=e[n+1];for(let t=a+r;t<n;t+=r){let n=e[t],r=e[t+1],i=Pd(n,r,s,d,f,p);i>o&&(u=t,o=i)}o>i&&(c[(u-t)/r]=1,a+r<u&&l.push(a,u),u+r<n&&l.push(u,n))}for(let n=0;n<s;++n)c[n]&&(a[o++]=e[t+n*r],a[o++]=e[t+n*r+1]);return o}function S_(e,t,n,r,i,a,o,s){for(let c=0,l=n.length;c<l;++c){let l=n[c];o=x_(e,t,l,r,i,a,o),s.push(o),t=l}return o}function C_(e,t){return t*Math.round(e/t)}function w_(e,t,n,r,i,a,o){if(t==n)return o;let s=C_(e[t],i),c=C_(e[t+1],i);t+=r,a[o++]=s,a[o++]=c;let l,u;do if(l=C_(e[t],i),u=C_(e[t+1],i),t+=r,t==n)return a[o++]=l,a[o++]=u,o;while(l==s&&u==c);for(;t<n;){let n=C_(e[t],i),d=C_(e[t+1],i);if(t+=r,n==l&&d==u)continue;let f=l-s,p=u-c,m=n-s,h=d-c;if(f*h==p*m&&(f<0&&m<f||f==m||f>0&&m>f)&&(p<0&&h<p||p==h||p>0&&h>p)){l=n,u=d;continue}a[o++]=l,a[o++]=u,s=l,c=u,l=n,u=d}return a[o++]=l,a[o++]=u,o}function T_(e,t,n,r,i,a,o,s){for(let c=0,l=n.length;c<l;++c){let l=n[c];o=w_(e,t,l,r,i,a,o),s.push(o),t=l}return o}function E_(e,t,n,r,i,a,o,s){for(let c=0,l=n.length;c<l;++c){let l=n[c],u=[];o=T_(e,t,l,r,i,a,o,u),s.push(u),t=l[l.length-1]}return o}var D_=class e extends hg{constructor(e,t){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendCoordinate(e){Em(this.flatCoordinates,e),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){return r<Zu(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Qg(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),t_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,e,t,n,r))}forEachSegment(e){return m_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinateAtM(e,t){return this.layout!=`XYM`&&this.layout!=`XYZM`?null:(t=t!==void 0&&t,c_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t))}getCoordinates(){return i_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(e,t){return s_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,this.stride)}getLength(){return b_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){let n=[];return n.length=x_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new e(n,`XY`)}getType(){return`LineString`}intersectsExtent(e){return h_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,this.getExtent())}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||=[],this.flatCoordinates.length=bg(this.flatCoordinates,0,e,this.stride),this.changed()}},O_=class e extends hg{constructor(e,t,n){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,t);else if(t!==void 0&&n)this.setFlatCoordinates(t,e),this.ends_=n;else{let t=e,n=[],r=[];for(let e=0,i=t.length;e<i;++e){let i=t[e];Em(n,i.getFlatCoordinates()),r.push(n.length)}let i=t.length===0?this.getLayout():t[0].getLayout();this.setFlatCoordinates(i,n),this.ends_=r}}appendLineString(e){Em(this.flatCoordinates,e.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(e,t,n,r){return r<Zu(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt($g(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),n_(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,e,t,n,r))}getCoordinateAtM(e,t,n){return this.layout!=`XYM`&&this.layout!=`XYZM`||this.flatCoordinates.length===0?null:(t=t!==void 0&&t,n=n!==void 0&&n,l_(this.flatCoordinates,0,this.ends_,this.stride,e,t,n))}getCoordinates(){return a_(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(e){return e<0||this.ends_.length<=e?null:new D_(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLineStrings(){let e=this.flatCoordinates,t=this.ends_,n=this.layout,r=[],i=0;for(let a=0,o=t.length;a<o;++a){let o=t[a],s=new D_(e.slice(i,o),n);r.push(s),i=o}return r}getLength(){let e=this.ends_,t=0,n=0;for(let r=0,i=e.length;r<i;++r)n+=b_(this.flatCoordinates,t,e[r],this.stride),t=e[r];return n}getFlatMidpoints(){let e=[],t=this.flatCoordinates,n=0,r=this.ends_,i=this.stride;for(let a=0,o=r.length;a<o;++a){let o=r[a];Em(e,s_(t,n,o,i,.5)),n=o}return e}getSimplifiedGeometryInternal(t){let n=[],r=[];return n.length=S_(this.flatCoordinates,0,this.ends_,this.stride,t,n,0,r),new e(n,`XY`,r)}getType(){return`MultiLineString`}intersectsExtent(e){return g_(this.flatCoordinates,0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||=[];let n=xg(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}},k_=class e extends hg{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){let t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){let i=this.flatCoordinates,a=Fd(e,t,i[0],i[1]);if(a<r){let e=this.stride;for(let t=0;t<e;++t)n[t]=i[t];return n.length=e,a}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return ad(this.flatCoordinates,e)}getType(){return`Point`}intersectsExtent(e){return ed(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||=[],this.flatCoordinates.length=yg(this.flatCoordinates,0,e,this.stride),this.changed()}},A_=class e extends hg{constructor(e,t){super(),t&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendPoint(e){Em(this.flatCoordinates,e.getFlatCoordinates()),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){if(r<Zu(this.getExtent(),e,t))return r;let i=this.flatCoordinates,a=this.stride;for(let o=0,s=i.length;o<s;o+=a){let s=Fd(e,t,i[o],i[o+1]);if(s<r){r=s;for(let e=0;e<a;++e)n[e]=i[o+e];n.length=a}}return r}getCoordinates(){return i_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(e){let t=this.flatCoordinates.length/this.stride;return e<0||t<=e?null:new k_(this.flatCoordinates.slice(e*this.stride,(e+1)*this.stride),this.layout)}getPoints(){let e=this.flatCoordinates,t=this.layout,n=this.stride,r=[];for(let i=0,a=e.length;i<a;i+=n){let a=new k_(e.slice(i,i+n),t);r.push(a)}return r}getType(){return`MultiPoint`}intersectsExtent(e){let t=this.flatCoordinates,n=this.stride;for(let r=0,i=t.length;r<i;r+=n){let n=t[r],i=t[r+1];if(ed(e,n,i))return!0}return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||=[],this.flatCoordinates.length=bg(this.flatCoordinates,0,e,this.stride),this.changed()}};function j_(e,t,n,r){let i=0,a=e[n-r],o=e[n-r+1],s=0,c=0;for(;t<n;t+=r){let n=e[t]-a,r=e[t+1]-o;i+=c*n-s*r,s=n,c=r}return i/2}function M_(e,t,n,r){let i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a];i+=j_(e,t,o,r),t=o}return i}function N_(e,t,n,r){let i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a];i+=M_(e,t,o,r),t=o[o.length-1]}return i}var P_=class e extends hg{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new e(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,r){return r<Zu(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Qg(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),t_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,r))}getArea(){return j_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return i_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){let n=[];return n.length=x_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new e(n,`XY`)}getType(){return`LinearRing`}intersectsExtent(e){return h_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||=[],this.flatCoordinates.length=bg(this.flatCoordinates,0,e,this.stride),this.changed()}};function F_(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m=i[a+1],h=[];for(let i=0,a=n.length;i<a;++i){let a=n[i];for(u=e[a-r],f=e[a-r+1],s=t;s<a;s+=r)d=e[s],p=e[s+1],(m<=f&&p<=m||f<=m&&m<=p)&&(l=(m-f)/(p-f)*(d-u)+u,h.push(l)),u=d,f=p}let g=NaN,_=-1/0;for(h.sort(Sm),u=h[0],s=1,c=h.length;s<c;++s){d=h[s];let i=Math.abs(d-u);i>_&&(l=(u+d)/2,f_(e,t,n,r,l,m)&&(g=l,_=i)),u=d}return isNaN(g)&&(g=i[a]),o?(o.push(g,m,_),o):[g,m,_]}function I_(e,t,n,r,i){let a=[];for(let o=0,s=n.length;o<s;++o){let s=n[o];a=F_(e,t,s,r,i,2*o,a),t=s[s.length-1]}return a}function L_(e,t,n,r){for(;t<n-r;){for(let i=0;i<r;++i){let a=e[t+i];e[t+i]=e[n-r+i],e[n-r+i]=a}t+=r,n-=r}}function R_(e,t,n,r){let i=0,a=e[n-r],o=e[n-r+1];for(;t<n;t+=r){let n=e[t],r=e[t+1];i+=(n-a)*(r+o),a=n,o=r}return i===0?void 0:i>0}function z_(e,t,n,r,i){i=i!==void 0&&i;for(let a=0,o=n.length;a<o;++a){let o=n[a],s=R_(e,t,o,r);if(a===0){if(i&&s||!i&&!s)return!1}else if(i&&!s||!i&&s)return!1;t=o}return!0}function B_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];if(!z_(e,t,o,r,i))return!1;o.length&&(t=o[o.length-1])}return!0}function V_(e,t,n,r,i){i=i!==void 0&&i;for(let a=0,o=n.length;a<o;++a){let o=n[a],s=R_(e,t,o,r);(a===0?i&&s||!i&&!s:i&&!s||!i&&s)&&L_(e,t,o,r),t=o}return t}function H_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a)t=V_(e,t,n[a],r,i);return t}function U_(e,t){let n=[],r=0,i=0,a;for(let o=0,s=t.length;o<s;++o){let s=t[o],c=R_(e,r,s,2);if(a===void 0&&(a=c),c===a)n.push(t.slice(i,o+1));else{if(n.length===0)continue;n[n.length-1].push(t[i])}i=o+1,r=s}return n}var W_=class e extends hg{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?Em(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(e,t,n,r){return r<Zu(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt($g(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),n_(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return f_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return M_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e===void 0?t=this.flatCoordinates:(t=this.getOrientedFlatCoordinates().slice(),V_(t,0,this.ends_,this.stride,e)),a_(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let e=gd(this.getExtent());this.flatInteriorPoint_=F_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new k_(this.getFlatInteriorPoint(),`XYM`)}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new P_(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){let e=this.layout,t=this.flatCoordinates,n=this.ends_,r=[],i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a],s=new P_(t.slice(i,o),e);r.push(s),i=o}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let e=this.flatCoordinates;z_(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=V_(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let n=[],r=[];return n.length=T_(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),n,0,r),new e(n,`XY`,r)}getType(){return`Polygon`}intersectsExtent(e){return v_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||=[];let n=xg(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}};function G_(e){if(Dd(e))throw Error(`Cannot create polygon from empty extent`);let t=e[0],n=e[1],r=e[2],i=e[3],a=[t,n,t,i,r,i,r,n,t,n];return new W_(a,`XY`,[a.length])}function K_(e,t,n,r){let i=[],a=nd();for(let o=0,s=n.length;o<s;++o){let s=n[o];a=od(e,t,s[0],r),i.push((a[0]+a[2])/2,(a[1]+a[3])/2),t=s[s.length-1]}return i}var q_=class e extends hg{constructor(e,t,n){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!n&&!Array.isArray(e[0])){let r=e,i=[],a=[];for(let e=0,t=r.length;e<t;++e){let t=r[e],n=i.length,o=t.getEnds();for(let e=0,t=o.length;e<t;++e)o[e]+=n;Em(i,t.getFlatCoordinates()),a.push(o)}t=r.length===0?this.getLayout():r[0].getLayout(),e=i,n=a}t!==void 0&&n?(this.setFlatCoordinates(t,e),this.endss_=n):this.setCoordinates(e,t)}appendPolygon(e){let t;if(!this.flatCoordinates)this.flatCoordinates=e.getFlatCoordinates().slice(),t=e.getEnds().slice(),this.endss_.push();else{let n=this.flatCoordinates.length;Em(this.flatCoordinates,e.getFlatCoordinates()),t=e.getEnds().slice();for(let e=0,r=t.length;e<r;++e)t[e]+=n}this.endss_.push(t),this.changed()}clone(){let t=this.endss_.length,n=Array(t);for(let e=0;e<t;++e)n[e]=this.endss_[e].slice();let r=new e(this.flatCoordinates.slice(),this.layout,n);return r.applyProperties(this),r}closestPointXY(e,t,n,r){return r<Zu(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(e_(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),r_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return p_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e,t)}getArea(){return N_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(e){let t;return e===void 0?t=this.flatCoordinates:(t=this.getOrientedFlatCoordinates().slice(),H_(t,0,this.endss_,this.stride,e)),o_(t,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){let e=K_(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=I_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new A_(this.getFlatInteriorPoints().slice(),`XYM`)}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let e=this.flatCoordinates;B_(e,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=H_(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let n=[],r=[];return n.length=E_(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),n,0,r),new e(n,`XY`,r)}getPolygon(e){if(e<0||this.endss_.length<=e)return null;let t;if(e===0)t=0;else{let n=this.endss_[e-1];t=n[n.length-1]}let n=this.endss_[e].slice(),r=n[n.length-1];if(t!==0)for(let e=0,r=n.length;e<r;++e)n[e]-=t;return new W_(this.flatCoordinates.slice(t,r),this.layout,n)}getPolygons(){let e=this.layout,t=this.flatCoordinates,n=this.endss_,r=[],i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a].slice(),s=o[o.length-1];if(i!==0)for(let e=0,t=o.length;e<t;++e)o[e]-=i;let c=new W_(t.slice(i,s),e,o);r.push(c),i=s}return r}getType(){return`MultiPolygon`}intersectsExtent(e){return y_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,3),this.flatCoordinates||=[];let n=Sg(this.flatCoordinates,0,e,this.stride,this.endss_);if(n.length===0)this.flatCoordinates.length=0;else{let e=n[n.length-1];this.flatCoordinates.length=e.length===0?0:e[e.length-1]}this.changed()}},J_=Zh(),Y_=class e{constructor(e,t,n,r,i,a){this.styleFunction,this.extent_,this.id_=a,this.type_=e,this.flatCoordinates_=t,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=n||null,this.properties_=i,this.squaredTolerance_,this.stride_=r,this.simplifiedGeometry_}get(e){return this.properties_[e]}getExtent(){return this.extent_||=this.type_===`Point`?ad(this.flatCoordinates_):od(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){let e=gd(this.getExtent());this.flatInteriorPoints_=F_(this.flatCoordinates_,0,this.ends_,this.stride_,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){let e=U_(this.flatCoordinates_,this.ends_),t=K_(this.flatCoordinates_,0,e,this.stride_);this.flatInteriorPoints_=I_(this.flatCoordinates_,0,e,this.stride_,t)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||=s_(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_,.5),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];let e=this.flatCoordinates_,t=0,n=this.ends_;for(let r=0,i=n.length;r<i;++r){let i=n[r],a=s_(e,t,i,this.stride_,.5);Em(this.flatMidpoints_,a),t=i}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,t){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=lp(e);let t=e.getExtent(),n=e.getWorldExtent();if(t&&n){let e=bd(n)/bd(t);tg(J_,n[0],n[3],e,-e,0,0,0),cg(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_,J_,this.flatCoordinates_)}}applyTransform(e){e(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new e(this.type_,this.flatCoordinates_.slice(),this.ends_?.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=Mm((t,n)=>{if(t===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),n&&this.simplifiedGeometry_.applyTransform(n);let r=this.simplifiedGeometry_.getFlatCoordinates(),i;switch(this.type_){case`LineString`:r.length=x_(r,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,t,r,0),i=[r.length];break;case`MultiLineString`:i=[],r.length=S_(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,t,r,0,i);break;case`Polygon`:i=[],r.length=T_(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(t),r,0,i)}return i&&(this.simplifiedGeometry_=new e(this.type_,r,i,this.stride_,this.properties_,this.id_)),this.squaredTolerance_=t,this.simplifiedGeometry_}),this}};Y_.prototype.getFlatCoordinates=Y_.prototype.getOrientedFlatCoordinates;var X_=class e extends mg{constructor(e){super(),this.geometries_=e,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(ym),this.changeEventsKeys_.length=0}listenGeometriesChange_(){let e=this.geometries_;for(let t=0,n=e.length;t<n;++t)this.changeEventsKeys_.push(_m(e[t],H.CHANGE,this.changed,this))}clone(){let t=new e(Z_(this.geometries_));return t.applyProperties(this),t}closestPointXY(e,t,n,r){if(r<Zu(this.getExtent(),e,t))return r;let i=this.geometries_;for(let a=0,o=i.length;a<o;++a)r=i[a].closestPointXY(e,t,n,r);return r}containsXY(e,t){let n=this.geometries_;for(let r=0,i=n.length;r<i;++r)if(n[r].containsXY(e,t))return!0;return!1}computeExtent(e){id(e);let t=this.geometries_;for(let n=0,r=t.length;n<r;++n)cd(e,t[n].getExtent());return e}getGeometries(){return Z_(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[],t=this.geometries_;for(let n=0,r=t.length;n<r;++n)t[n].getType()===this.getType()?e=e.concat(t[n].getGeometriesArrayRecursive()):e.push(t[n]);return e}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;let n=[],r=this.geometries_,i=!1;for(let e=0,a=r.length;e<a;++e){let a=r[e],o=a.getSimplifiedGeometry(t);n.push(o),o!==a&&(i=!0)}return i?new e(n):(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getType(){return`GeometryCollection`}intersectsExtent(e){let t=this.geometries_;for(let n=0,r=t.length;n<r;++n)if(t[n].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,t){let n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].rotate(e,t);this.changed()}scale(e,t,n){n||=gd(this.getExtent());let r=this.geometries_;for(let i=0,a=r.length;i<a;++i)r[i].scale(e,t,n);this.changed()}setGeometries(e){this.setGeometriesArray(Z_(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){let t=this.geometries_;for(let n=0,r=t.length;n<r;++n)t[n].applyTransform(e);this.changed()}translate(e,t){let n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}};function Z_(e){return e.map(e=>e.clone())}var Q_=class{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=Yg,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let n=t.dataProjection?lp(t.dataProjection):this.readProjection(e);t.extent&&n&&n.getUnits()===`tile-pixels`&&(n=lp(n),n.setWorldExtent(t.extent)),t={dataProjection:n,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return U()}readFeature(e,t){return U()}readFeatures(e,t){return U()}readGeometry(e,t){return U()}readProjection(e){return U()}writeFeature(e,t){return U()}writeFeatures(e,t){return U()}writeGeometry(e,t){return U()}};function $_(e,t,n){let r=n?lp(n.featureProjection):null,i=n?lp(n.dataProjection):null,a=e;if(r&&i&&!gp(r,i)){t&&(a=e.clone());let n=t?r:i,o=t?i:r;n.getUnits()===`tile-pixels`?a.transform(n,o):a.applyTransform(yp(n,o))}if(t&&n&&n.decimals!==void 0){let t=10**n.decimals;a===e&&(a=e.clone()),a.applyTransform(function(e){for(let n=0,r=e.length;n<r;++n)e[n]=Math.round(e[n]*t)/t;return e})}return a}var ev={Point:k_,LineString:D_,Polygon:W_,MultiPoint:A_,MultiLineString:O_,MultiPolygon:q_};function tv(e,t,n){return Array.isArray(t[0])?(B_(e,0,t,n)||(e=e.slice(),H_(e,0,t,n)),e):(z_(e,0,t,n)||(e=e.slice(),V_(e,0,t,n)),e)}function nv(e,t){let n=e.geometry;if(!n)return[];if(Array.isArray(n))return n.map(t=>nv({...e,geometry:t})).flat();let r=n.type===`MultiPolygon`?`Polygon`:n.type;if(r===`GeometryCollection`||r===`Circle`)throw Error(`Unsupported geometry type: `+r);let i=n.layout.length;return $_(new Y_(r,r===`Polygon`?tv(n.flatCoordinates,n.ends,i):n.flatCoordinates,n.ends?.flat(),i,e.properties||{},e.id).enableSimplifyTransformed(),!1,t)}function rv(e,t){if(!e)return null;if(Array.isArray(e))return new X_(e.map(e=>rv(e,t)));let n=ev[e.type];return $_(new n(e.flatCoordinates,e.layout||`XY`,e.ends),!1,t)}var iv=class extends Q_{constructor(){super()}getType(){return`json`}readFeature(e,t){return this.readFeatureFromObject(av(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(av(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return U()}readFeaturesFromObject(e,t){return U()}readGeometry(e,t){return this.readGeometryFromObject(av(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return U()}readProjection(e){return this.readProjectionFromObject(av(e))}readProjectionFromObject(e){return U()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return U()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return U()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return U()}};function av(e){return typeof e==`string`?JSON.parse(e)||null:e===null?null:e}var ov=class extends iv{constructor(e){e||={},super(),this.dataProjection=lp(e.dataProjection?e.dataProjection:`EPSG:4326`),e.featureProjection&&(this.defaultFeatureProjection=lp(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=[`application/geo+json`,`application/vnd.geo+json`]}readFeatureFromObject(e,t){let n=null;n=e.type===`Feature`?e:{type:`Feature`,geometry:e,properties:null};let r=sv(n.geometry,t);if(this.featureClass===Y_)return nv({geometry:r,id:n.id,properties:n.properties},t);let i=this.featureClass,a=new i;return this.geometryName_?a.setGeometryName(this.geometryName_):this.extractGeometryName_&&n.geometry_name&&a.setGeometryName(n.geometry_name),a.setGeometry(rv(r,t)),`id`in n&&a.setId(n.id),n.properties&&a.setProperties(n.properties,!0),a}readFeaturesFromObject(e,t){let n=e,r=null;if(n.type===`FeatureCollection`){let n=e;r=[];let i=n.features;for(let e=0,n=i.length;e<n;++e){let n=this.readFeatureFromObject(i[e],t);n&&r.push(n)}}else r=[this.readFeatureFromObject(e,t)];return r.flat()}readGeometryFromObject(e,t){return cv(e,t)}readProjectionFromObject(e){let t=e.crs,n;if(t){if(t.type==`name`)n=lp(t.properties.name);else if(t.type===`EPSG`)n=lp(`EPSG:`+t.properties.code);else throw Error(`Unknown SRS type`)}else n=this.dataProjection;return n}writeFeatureObject(e,t){t=this.adaptOptions(t);let n={type:`Feature`,geometry:null,properties:null},r=e.getId();if(r!==void 0&&(n.id=r),!e.hasProperties())return n;let i=e.getProperties(),a=e.getGeometry();return a&&(n.geometry=gv(a,t),delete i[e.getGeometryName()]),yf(i)||(n.properties=i),n}writeFeaturesObject(e,t){t=this.adaptOptions(t);let n=[];for(let r=0,i=e.length;r<i;++r)n.push(this.writeFeatureObject(e[r],t));return{type:`FeatureCollection`,features:n}}writeGeometryObject(e,t){return gv(e,this.adaptOptions(t))}};function sv(e,t){if(!e)return null;let n;switch(e.type){case`Point`:n=uv(e);break;case`LineString`:n=dv(e);break;case`Polygon`:n=hv(e);break;case`MultiPoint`:n=pv(e);break;case`MultiLineString`:n=fv(e);break;case`MultiPolygon`:n=mv(e);break;case`GeometryCollection`:n=lv(e);break;default:throw Error(`Unsupported GeoJSON type: `+e.type)}return n}function cv(e,t){return rv(sv(e,t),t)}function lv(e,t){return e.geometries.map(function(e){return sv(e,t)})}function uv(e){let t=e.coordinates;return{type:`Point`,flatCoordinates:t,layout:gg(t.length)}}function dv(e){let t=e.coordinates,n=t.flat();return{type:`LineString`,flatCoordinates:n,ends:[n.length],layout:gg(t[0]?.length||2)}}function fv(e){let t=e.coordinates,n=t[0]?.[0]?.length||2,r=[];return{type:`MultiLineString`,flatCoordinates:r,ends:xg(r,0,t,n),layout:gg(n)}}function pv(e){let t=e.coordinates;return{type:`MultiPoint`,flatCoordinates:t.flat(),layout:gg(t[0]?.length||2)}}function mv(e){let t=e.coordinates,n=[],r=t[0]?.[0]?.[0].length||2;return{type:`MultiPolygon`,flatCoordinates:n,ends:Sg(n,0,t,r),layout:gg(r)}}function hv(e){let t=e.coordinates,n=[],r=t[0]?.[0]?.length;return{type:`Polygon`,flatCoordinates:n,ends:xg(n,0,t,r),layout:gg(r)}}function gv(e,t){e=$_(e,!0,t);let n=e.getType(),r;switch(n){case`Point`:r=Sv(e,t);break;case`LineString`:r=vv(e,t);break;case`Polygon`:r=Cv(e,t);break;case`MultiPoint`:r=bv(e,t);break;case`MultiLineString`:r=yv(e,t);break;case`MultiPolygon`:r=xv(e,t);break;case`GeometryCollection`:r=_v(e,t);break;case`Circle`:r={type:`GeometryCollection`,geometries:[]};break;default:throw Error(`Unsupported geometry type: `+n)}return r}function _v(e,t){return t=Object.assign({},t),delete t.featureProjection,{type:`GeometryCollection`,geometries:e.getGeometriesArray().map(function(e){return gv(e,t)})}}function vv(e,t){return{type:`LineString`,coordinates:e.getCoordinates()}}function yv(e,t){return{type:`MultiLineString`,coordinates:e.getCoordinates()}}function bv(e,t){return{type:`MultiPoint`,coordinates:e.getCoordinates()}}function xv(e,t){let n;return t&&(n=t.rightHanded),{type:`MultiPolygon`,coordinates:e.getCoordinates(n)}}function Sv(e,t){return{type:`Point`,coordinates:e.getCoordinates()}}function Cv(e,t){let n;return t&&(n=t.rightHanded),{type:`Polygon`,coordinates:e.getCoordinates(n)}}var wv=[`top-left`,`top-center`,`top-right`,`left`,`right`,`bottom-left`,`bottom-center`,`bottom-right`],Tv=new class{map=new Map;tokens=new Map;register(e,t,n,r){return this.map.set(e,{name:e,url:t,category:n,meta:r}),this}registerMany(e,t=``,n){return Object.entries(e).forEach(([e,r])=>{this.register(t?`${t}.${e}`:e,r,n)}),this}setToken(e,t){return this.tokens.set(e,t),this}getToken(e){return this.tokens.get(e)}resolve(e){let t=this.map.get(e);if(!t)return console.warn(`[GeoFlow] 静态资源未注册: ${e}`),e;let n=t.url;if(n.includes(`{tk}`)){let e=this.tokens.get(`tianditu`)||``;n=n.replace(`{tk}`,e)}return n}meta(e){return this.map.get(e)}list(e){return[...this.map.values()].filter(t=>!e||t.category===e)}};Tv.register(`basemap.osm`,`https://tile.openstreetmap.org/{z}/{x}/{y}.png`,`basemap`),Tv.register(`basemap.esri-imagery`,`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`,`basemap`),Tv.register(`basemap.carto-light`,`https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`,`basemap`),Tv.register(`basemap.carto-labels`,`https://{a-d}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png`,`basemap`),Tv.register(`basemap.tianditu-vec`,`https://t{a-d}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={tk}`,`basemap`),Tv.register(`basemap.tianditu-img`,`https://t{a-d}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk={tk}`,`basemap`),Tv.register(`basemap.tianditu-cva`,`https://t{a-d}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk={tk}`,`basemap`),Tv.register(`basemap.amap-vec`,`https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`,`basemap`),Tv.register(`basemap.amap-img`,`https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}`,`basemap`);var Ev=(e,t=24)=>`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24">${e}</svg>`),Dv=(e,t=`!`)=>Ev(`<path d="M12 2.5 L22.5 21 L1.5 21 Z" fill="${e}" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><text x="12" y="18.5" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="PingFang SC, sans-serif">${t}</text>`);Tv.register(`icon.alarm`,Dv(`#ef4444`),`icon`),Tv.register(`icon.fault`,(e=>Ev(`<path d="M12 1.5 L22.5 12 L12 22.5 L1.5 12 Z" fill="${e}" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" fill="#fff"/>`))(`#f59e0b`),`icon`),Tv.register(`icon.warn`,Dv(`#f97316`),`icon`),Tv.register(`icon.ok`,(e=>Ev(`<circle cx="12" cy="12" r="10" fill="${e}" stroke="#fff" stroke-width="2.2"/><path d="M7.2 12.4 L10.4 15.6 L16.8 9.2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`))(`#22c55e`),`icon`),Tv.register(`icon.info`,(e=>Ev(`<rect x="2.6" y="2.6" width="18.8" height="18.8" rx="4" fill="${e}" stroke="#fff" stroke-width="2.2"/><text x="12" y="17" font-size="12" font-weight="700" fill="#fff" text-anchor="middle" font-family="PingFang SC, sans-serif">i</text>`))(`#3b82f6`),`icon`),Tv.register(`icon.sel`,(e=>Ev(`<path d="M12 1.8 L15 9.1 L22.8 9.6 L16.6 14.4 L18.6 22 L12 17.5 L5.4 22 L7.4 14.4 L1.2 9.6 L9 9.1 Z" fill="${e}" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/>`))(`#f43f5e`),`icon`);var Ov={POSTRENDER:`postrender`,MOVESTART:`movestart`,MOVEEND:`moveend`,LOADSTART:`loadstart`,LOADEND:`loadend`},kv={ELEMENT:`element`,MAP:`map`,OFFSET:`offset`,POSITION:`position`,POSITIONING:`positioning`},Av=class extends $m{constructor(e){super(),this.on,this.once,this.un,this.options=e,this.id=e.id,this.insertFirst=e.insertFirst===void 0||e.insertFirst,this.stopEvent=e.stopEvent===void 0||e.stopEvent,this.element=document.createElement(`div`),this.element.className=e.className===void 0?`ol-overlay-container `+th:e.className,this.element.style.position=`absolute`,this.element.style.pointerEvents=`auto`,this.autoPan=e.autoPan===!0?{}:e.autoPan||void 0,this.rendered={transform_:``,visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(kv.ELEMENT,this.handleElementChanged),this.addChangeListener(kv.MAP,this.handleMapChanged),this.addChangeListener(kv.OFFSET,this.handleOffsetChanged),this.addChangeListener(kv.POSITION,this.handlePositionChanged),this.addChangeListener(kv.POSITIONING,this.handlePositioningChanged),e.element!==void 0&&this.setElement(e.element),this.setOffset(e.offset===void 0?[0,0]:e.offset),this.setPositioning(e.positioning||`top-left`),e.position!==void 0&&this.setPosition(e.position)}getElement(){return this.get(kv.ELEMENT)}getId(){return this.id}getMap(){return this.get(kv.MAP)||null}getOffset(){return this.get(kv.OFFSET)}getPosition(){return this.get(kv.POSITION)}getPositioning(){return this.get(kv.POSITIONING)}handleElementChanged(){Up(this.element);let e=this.getElement();e&&this.element.appendChild(e)}handleMapChanged(){this.mapPostrenderListenerKey&&=(this.element?.remove(),ym(this.mapPostrenderListenerKey),null);let e=this.getMap();if(e){this.mapPostrenderListenerKey=_m(e,Ov.POSTRENDER,this.render,this),this.updatePixelPosition();let t=this.stopEvent?e.getOverlayContainerStopEvent():e.getOverlayContainer();this.insertFirst?t.insertBefore(this.element,t.childNodes[0]||null):t.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(e){this.set(kv.ELEMENT,e)}setMap(e){this.set(kv.MAP,e)}setOffset(e){this.set(kv.OFFSET,e)}setPosition(e){this.set(kv.POSITION,e)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(e){let t=this.getMap();if(!t||!t.getTargetElement()||!this.get(kv.POSITION))return;let n=this.getRect(t.getTargetElement(),t.getSize()),r=this.getElement(),i=this.getRect(r,[Bp(r),Vp(r)]);e||={};let a=e.margin===void 0?20:e.margin;if(!$u(n,i)){let r=i[0]-n[0],o=n[2]-i[2],s=i[1]-n[1],c=n[3]-i[3],l=[0,0];if(r<0?l[0]=r-a:o<0&&(l[0]=Math.abs(o)+a),s<0?l[1]=s-a:c<0&&(l[1]=Math.abs(c)+a),l[0]!==0||l[1]!==0){let n=t.getView().getCenterInternal(),r=t.getPixelFromCoordinateInternal(n);if(!r)return;let i=[r[0]+l[0],r[1]+l[1]],a=e.animation||{};t.getView().animateInternal({center:t.getCoordinateFromPixelInternal(i),duration:a.duration,easing:a.easing})}}}getRect(e,t){let n=e.getBoundingClientRect(),r=n.left+window.pageXOffset,i=n.top+window.pageYOffset;return[r,i,r+t[0],i+t[1]]}setPositioning(e){this.set(kv.POSITIONING,e)}setVisible(e){this.rendered.visible!==e&&(this.element.style.display=e?``:`none`,this.rendered.visible=e)}updatePixelPosition(){let e=this.getMap(),t=this.getPosition();if(!e||!e.isRendered()||!t){this.setVisible(!1);return}let n=e.getPixelFromCoordinate(t),r=e.getSize();this.updateRenderedPosition(n,r)}updateRenderedPosition(e,t){let n=this.element.style,r=this.getOffset(),i=this.getPositioning();this.setVisible(!0);let a=`${e[0]+r[0]}px`,o=`${e[1]+r[1]}px`,s=`0%`,c=`0%`;i==`bottom-right`||i==`center-right`||i==`top-right`?s=`-100%`:(i==`bottom-center`||i==`center-center`||i==`top-center`)&&(s=`-50%`),i==`bottom-left`||i==`bottom-center`||i==`bottom-right`?c=`-100%`:(i==`center-left`||i==`center-center`||i==`center-right`)&&(c=`-50%`);let l=`translate(${s}, ${c}) translate(${a}, ${o})`;this.rendered.transform_!=l&&(this.rendered.transform_=l,n.transform=l)}getOptions(){return this.options}},jv={ADD:`add`,REMOVE:`remove`},Mv={LENGTH:`length`},Nv=class extends Pm{constructor(e,t,n){super(e),this.element=t,this.index=n}},Pv=class extends $m{constructor(e,t){if(super(),this.on,this.once,this.un,t||={},this.unique_=!!t.unique,this.array_=e??[],this.unique_)for(let e=1,t=this.array_.length;e<t;++e)this.assertUnique_(this.array_[e],e);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){let t=this.array_;for(let n=0,r=t.length;n<r;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Mv.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw Error(`Index out of bounds: `+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new Nv(jv.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){let t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){let t=this.array_;for(let n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;let t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Nv(jv.REMOVE,t,e)),t}setAt(e,t){if(e>=this.getLength()){this.insertAt(e,t);return}if(e<0)throw Error(`Index out of bounds: `+e);this.unique_&&this.assertUnique_(t,e);let n=this.array_[e];this.array_[e]=t,this.dispatchEvent(new Nv(jv.REMOVE,n,e)),this.dispatchEvent(new Nv(jv.ADD,t,e))}updateLength_(){this.set(Mv.LENGTH,this.array_.length)}assertUnique_(e,t){let n=this.array_;for(let r=0,i=n.length;r<i;++r)if(n[r]===e&&r!==t)throw Error(`Duplicate item added to a unique collection`)}},Fv=class extends Pm{constructor(e,t,n){super(e),this.map=t,this.frameState=n===void 0?null:n}},Iv=class extends Fv{constructor(e,t,n,r,i,a){super(e,t,i),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0&&r,this.activePointers=a}get pixel(){return this.pixel_||=this.map.getEventPixel(this.originalEvent),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||=this.map.getCoordinateFromPixel(this.pixel),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),`preventDefault`in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),`stopPropagation`in this.originalEvent&&this.originalEvent.stopPropagation()}},Lv={SINGLECLICK:`singleclick`,CLICK:H.CLICK,DBLCLICK:H.DBLCLICK,POINTERDRAG:`pointerdrag`,POINTERMOVE:`pointermove`,POINTERDOWN:`pointerdown`,POINTERUP:`pointerup`,POINTEROVER:`pointerover`,POINTEROUT:`pointerout`,POINTERENTER:`pointerenter`,POINTERLEAVE:`pointerleave`,POINTERCANCEL:`pointercancel`},Rv={POINTERMOVE:`pointermove`,POINTERDOWN:`pointerdown`,POINTERUP:`pointerup`,POINTEROVER:`pointerover`,POINTEROUT:`pointerout`,POINTERENTER:`pointerenter`,POINTERLEAVE:`pointerleave`,POINTERCANCEL:`pointercancel`},zv=class extends Fm{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;let n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=_m(n,Rv.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=_m(n,Rv.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(H.TOUCHMOVE,this.boundHandleTouchMove_,Fp?{passive:!1}:!1)}emulateClick_(e){let t=new Iv(Lv.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_===void 0?this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let t=new Iv(Lv.SINGLECLICK,this.map_,e);this.dispatchEvent(t)},250):(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new Iv(Lv.DBLCLICK,this.map_,e),this.dispatchEvent(t))}updateActivePointers_(e){let t=e,n=t.pointerId;if(t.type==Lv.POINTERUP||t.type==Lv.POINTERCANCEL){delete this.trackedTouches_[n];for(let e in this.trackedTouches_)if(this.trackedTouches_[e].target!==t.target){delete this.trackedTouches_[e];break}}else(t.type==Lv.POINTERDOWN||t.type==Lv.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);let t=new Iv(Lv.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(ym),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);let t=new Iv(Lv.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){let e=this.map_.getOwnerDocument();this.dragListenerKeys_.push(_m(e,Lv.POINTERMOVE,this.handlePointerMove_,this),_m(e,Lv.POINTERUP,this.handlePointerUp_,this),_m(this.element_,Lv.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==e&&this.dragListenerKeys_.push(_m(this.element_.getRootNode(),Lv.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;let t=new Iv(Lv.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;let t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Iv(Lv.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){let t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!=`boolean`||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&=(ym(this.relayedListenerKey_),null),this.element_.removeEventListener(H.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&=(ym(this.pointerdownListenerKey_),null),this.dragListenerKeys_.forEach(ym),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}},Bv={LAYERGROUP:`layergroup`,SIZE:`size`,TARGET:`target`,VIEW:`view`},W={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4},Vv=1/0,Hv=class{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,vf(this.queuedElements_)}dequeue(){let e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));let r=this.keyFunction_(n);return delete this.queuedElements_[r],n}enqueue(e){zh(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let t=this.priorityFunction_(e);return t!=1/0&&(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0)}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){let t=this.elements_,n=this.priorities_,r=t.length,i=t[e],a=n[e],o=e;for(;e<r>>1;){let i=this.getLeftChildIndex_(e),a=this.getRightChildIndex_(e),o=a<r&&n[a]<n[i]?a:i;t[e]=t[o],n[e]=n[o],e=o}t[e]=i,n[e]=a,this.siftDown_(o,e)}siftDown_(e,t){let n=this.elements_,r=this.priorities_,i=n[t],a=r[t];for(;t>e;){let e=this.getParentIndex_(t);if(r[e]>a)n[t]=n[e],r[t]=r[e],t=e;else break}n[t]=i,r[t]=a}reprioritize(){let e=this.priorityFunction_,t=this.elements_,n=this.priorities_,r=0,i=t.length,a,o,s;for(o=0;o<i;++o)a=t[o],s=e(a),s==1/0?delete this.queuedElements_[this.keyFunction_(a)]:(n[r]=s,t[r++]=a);t.length=r,n.length=r,this.heapify_()}},Uv=class extends Hv{constructor(e,t){super(t=>e.apply(null,t),e=>e[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){let t=super.enqueue(e);return t&&e[0].addEventListener(H.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){let t=e.target,n=t.getState();if(n===W.LOADED||n===W.ERROR||n===W.EMPTY){n!==W.ERROR&&t.removeEventListener(H.CHANGE,this.boundHandleTileChange_);let e=t.getKey();e in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[e],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;){let e=this.dequeue()[0],t=e.getKey();e.getState()===W.IDLE&&!(t in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[t]=!0,++this.tilesLoading_,++n,e.load())}}};function Wv(e,t,n,r,i){if(!e||!(n in e.wantedTiles)||!e.wantedTiles[n][t.getKey()])return Vv;let a=e.viewState.center,o=r[0]-a[0],s=r[1]-a[1];return 65536*Math.log(i)+Math.sqrt(o*o+s*s)/i}var Gv={ANIMATING:0,INTERACTING:1},Kv={CENTER:`center`,RESOLUTION:`resolution`,ROTATION:`rotation`};function qv(e,t,n){return(function(r,i,a,o,s){if(!r)return;if(!i&&!t)return r;let c=t?0:a[0]*i,l=t?0:a[1]*i,u=s?s[0]:0,d=s?s[1]:0,f=e[0]+c/2+u,p=e[2]-c/2+u,m=e[1]+l/2+d,h=e[3]-l/2+d;f>p&&(f=(p+f)/2,p=f),m>h&&(m=(h+m)/2,h=m);let g=Nd(r[0],f,p),_=Nd(r[1],m,h);if(o&&n&&i){let e=30*i;g+=-e*Math.log(1+Math.max(0,f-r[0])/e)+e*Math.log(1+Math.max(0,r[0]-p)/e),_+=-e*Math.log(1+Math.max(0,m-r[1])/e)+e*Math.log(1+Math.max(0,r[1]-h)/e)}return[g,_]})}function Jv(e){return e}function Yv(e){return e**3}function Xv(e){return 1-Yv(1-e)}function Zv(e){return 3*e*e-2*e*e*e}function Qv(e){return e}function $v(e,t,n,r){let i=Td(t)/n[0],a=bd(t)/n[1];return r?Math.min(e,Math.max(i,a)):Math.min(e,Math.min(i,a))}function ey(e,t,n){let r=Math.min(e,t);return r*=Math.log(1+50*Math.max(0,e/t-1))/50+1,n&&(r=Math.max(r,n),r/=Math.log(1+50*Math.max(0,n/e-1))/50+1),Nd(r,n/2,t*2)}function ty(e,t,n,r){return t=t===void 0||t,(function(i,a,o,s){if(i!==void 0){let c=e[0],l=e[e.length-1],u=n?$v(c,n,o,r):c;if(s)return t?ey(i,u,l):Nd(i,l,u);let d=Math.floor(wm(e,Math.min(u,i),a));return e[d]>u&&d<e.length-1?e[d+1]:e[d]}})}function ny(e,t,n,r,i,a){return r=r===void 0||r,n=n===void 0?0:n,(function(o,s,c,l){if(o!==void 0){let u=i?$v(t,i,c,a):t;if(l)return r?ey(o,u,n):Nd(o,n,u);let d=Math.ceil(Math.log(t/u)/Math.log(e)-1e-9),f=-s*.499999999+.5,p=Math.floor(Math.log(t/Math.min(u,o))/Math.log(e)+f);return Nd(t/e**+Math.max(d,p),n,u)}})}function ry(e,t,n,r,i){return n=n===void 0||n,(function(a,o,s,c){if(a!==void 0){let o=r?$v(e,r,s,i):e;return!n||!c?Nd(a,t,o):ey(a,o,t)}})}function iy(e){if(e!==void 0)return 0}function ay(e){if(e!==void 0)return e}function oy(e){let t=2*Math.PI/e;return(function(e,n){if(n)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e})}function sy(e){let t=e===void 0?Rd(5):e;return(function(e,n){return n||e===void 0?e:Math.abs(e)<=t?0:e})}var cy=0,ly=class extends $m{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=pp(e.projection,`EPSG:3857`),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&ap(),e.center&&(e.center=wp(e.center,this.projection_)),e.extent&&(e.extent=Ep(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){let t=Object.assign({},e);for(let e in Kv)delete t[e];this.setProperties(t,!0);let n=fy(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;let r=dy(e),i=n.constraint,a=py(e);this.constraints_={center:r,resolution:i,rotation:a},this.setRotation(e.rotation===void 0?0:e.rotation),this.setCenterInternal(e.center===void 0?null:e.center),e.resolution===void 0?e.zoom!==void 0&&this.setZoom(e.zoom):this.setResolution(e.resolution)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;let n=this.getCenterInternal();if(n){let r=e||[0,0,0,0];t||=[0,0,0,0];let i=this.getResolution(),a=i/2*(r[3]-t[3]+t[1]-r[1]),o=i/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([n[0]+a,n[1]-o])}}getUpdatedOptions_(e){let t=this.getProperties();return t.resolution===void 0?t.zoom=this.getZoom():t.resolution=this.getResolution(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let t=Array(arguments.length);for(let e=0;e<t.length;++e){let n=arguments[e];n.center&&(n=Object.assign({},n),n.center=wp(n.center,this.getProjection())),n.anchor&&(n=Object.assign({},n),n.anchor=wp(n.anchor,this.getProjection())),t[e]=n}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]==`function`&&(n=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){let e=arguments[r];e.center&&this.setCenterInternal(e.center),e.zoom===void 0?e.resolution&&this.setResolution(e.resolution):this.setZoom(e.zoom),e.rotation!==void 0&&this.setRotation(e.rotation)}if(r===t){n&&uy(n,!0);return}let i=Date.now(),a=this.targetCenter_.slice(),o=this.targetResolution_,s=this.targetRotation_,c=[];for(;r<t;++r){let e=arguments[r],t={start:i,complete:!1,anchor:e.anchor,duration:e.duration===void 0?1e3:e.duration,easing:e.easing||Zv,callback:n};if(e.center&&(t.sourceCenter=a,t.targetCenter=e.center.slice(),a=t.targetCenter),e.zoom===void 0?e.resolution&&(t.sourceResolution=o,t.targetResolution=e.resolution,o=t.targetResolution):(t.sourceResolution=o,t.targetResolution=this.getResolutionForZoom(e.zoom),o=t.targetResolution),e.rotation!==void 0){t.sourceRotation=s;let n=zd(e.rotation-s+Math.PI,2*Math.PI)-Math.PI;t.targetRotation=s+n,s=t.targetRotation}my(t)?t.complete=!0:i+=t.duration,c.push(t)}this.animations_.push(c),this.setHint(Gv.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Gv.ANIMATING]>0}getInteracting(){return this.hints_[Gv.INTERACTING]>0}cancelAnimations(){this.setHint(Gv.ANIMATING,-this.hints_[Gv.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){let n=this.animations_[t];if(n[0].callback&&uy(n[0].callback,!1),!e)for(let t=0,r=n.length;t<r;++t){let r=n[t];if(!r.complete){e=r.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let e=Date.now(),t=!1;for(let n=this.animations_.length-1;n>=0;--n){let r=this.animations_[n],i=!0;for(let n=0,a=r.length;n<a;++n){let a=r[n];if(a.complete)continue;let o=e-a.start,s=a.duration>0?o/a.duration:1;s>=1?(a.complete=!0,s=1):i=!1;let c=a.easing(s);if(a.sourceCenter){let e=a.sourceCenter[0],t=a.sourceCenter[1],n=a.targetCenter[0],r=a.targetCenter[1];this.nextCenter_=a.targetCenter;let i=e+c*(n-e),o=t+c*(r-t);this.targetCenter_=[i,o]}if(a.sourceResolution&&a.targetResolution){let e=c===1?a.targetResolution:a.sourceResolution+c*(a.targetResolution-a.sourceResolution);if(a.anchor){let t=this.getViewportSize_(this.getRotation()),n=this.constraints_.resolution(e,0,t,!0);this.targetCenter_=this.calculateCenterZoom(n,a.anchor)}this.nextResolution_=a.targetResolution,this.targetResolution_=e,this.applyTargetState_(!0)}if(a.sourceRotation!==void 0&&a.targetRotation!==void 0){let e=c===1?zd(a.targetRotation+Math.PI,2*Math.PI)-Math.PI:a.sourceRotation+c*(a.targetRotation-a.sourceRotation);if(a.anchor){let t=this.constraints_.rotation(e,!0);this.targetCenter_=this.calculateCenterRotate(t,a.anchor)}this.nextRotation_=a.targetRotation,this.targetRotation_=e}if(this.applyTargetState_(!0),t=!0,!a.complete)break}if(i){this.animations_[n]=null,this.setHint(Gv.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let e=r[0].callback;e&&uy(e,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n,r=this.getCenterInternal();return r!==void 0&&(n=[r[0]-t[0],r[1]-t[1]],qd(n,e-this.getRotation()),Gd(n,t)),n}calculateCenterZoom(e,t){let n,r=this.getCenterInternal(),i=this.getResolution();return r!==void 0&&i!==void 0&&(n=[t[0]-e*(t[0]-r[0])/i,t[1]-e*(t[1]-r[1])/i]),n}getViewportSize_(e){let t=this.viewportSize_;if(e){let n=t[0],r=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(r*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let e=this.getCenterInternal();return e&&Cp(e,this.getProjection())}getCenterInternal(){return this.get(Kv.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get(`constrainResolution`)}getHints(e){return e===void 0?this.hints_.slice():(e[0]=this.hints_[0],e[1]=this.hints_[1],e)}calculateExtent(e){return Tp(this.calculateExtentInternal(e),this.getProjection())}calculateExtentInternal(e){e||=this.getViewportSizeMinusPadding_();let t=this.getCenterInternal();zh(t,`The view center is not defined`);let n=this.getResolution();zh(n!==void 0,`The view resolution is not defined`);let r=this.getRotation();return zh(r!==void 0,`The view rotation is not defined`),vd(t,n,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(Kv.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Ep(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t||=this.getViewportSizeMinusPadding_();let n=Td(e)/t[0],r=bd(e)/t[1];return Math.max(n,r)}getResolutionForValueFunction(e){e||=2;let t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,r=Math.log(t/n)/Math.log(e);return(function(n){return t/e**+(n*r)})}getRotation(){return this.get(Kv.ROTATION)}getValueForResolutionFunction(e){let t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,i=Math.log(n/r)/t;return(function(e){return Math.log(n/e)/t/i})}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e),n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){let e=this.getProjection(),t=this.getResolution(),n=this.getRotation(),r=this.getCenterInternal(),i=this.padding_;if(i){let e=this.getViewportSizeMinusPadding_();r=hy(r,this.getViewportSize_(),[e[0]/2+i[3],e[1]/2+i[0]],t,n)}return{center:r.slice(0),projection:e===void 0?null:e,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e,t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,r;if(this.resolutions_){let i=wm(this.resolutions_,e,1);t=i,n=this.resolutions_[i],r=i==this.resolutions_.length-1?2:n/this.resolutions_[i+1]}else n=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(n/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_?.length){if(this.resolutions_.length===1)return this.resolutions_[0];let t=Nd(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/n**+Nd(e-t,0,1)}return this.maxResolution_/this.zoomFactor_**+(e-this.minZoom_)}fit(e,t){let n;if(zh(Array.isArray(e)||typeof e.getSimplifiedGeometry==`function`,"Invalid extent or geometry provided as `geometry`"),Array.isArray(e))zh(!Dd(e),"Cannot fit empty extent provided as `geometry`"),n=G_(Ep(e,this.getProjection()));else if(e.getType()===`Circle`){let t=Ep(e.getExtent(),this.getProjection());n=G_(t),n.rotate(this.getRotation(),gd(t))}else{let t=Sp();n=t?e.clone().transform(t,this.getProjection()):e}this.fitInternal(n,t)}rotatedExtentForGeometry(e){let t=this.getRotation(),n=Math.cos(t),r=Math.sin(-t),i=e.getFlatCoordinates(),a=e.getStride(),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e=0,t=i.length;e<t;e+=a){let t=i[e]*n-i[e+1]*r,a=i[e]*r+i[e+1]*n;o=Math.min(o,t),s=Math.min(s,a),c=Math.max(c,t),l=Math.max(l,a)}return[o,s,c,l]}fitInternal(e,t){t||={};let n=t.size;n||=this.getViewportSizeMinusPadding_();let r=t.padding===void 0?[0,0,0,0]:t.padding,i=t.nearest!==void 0&&t.nearest,a;a=t.minResolution===void 0?t.maxZoom===void 0?0:this.getResolutionForZoom(t.maxZoom):t.minResolution;let o=this.rotatedExtentForGeometry(e),s=this.getResolutionForExtentInternal(o,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);s=isNaN(s)?a:Math.max(s,a),s=this.getConstrainedResolution(s,+!i);let c=this.getRotation(),l=Math.sin(c),u=Math.cos(c),d=gd(o);d[0]+=(r[1]-r[3])/2*s,d[1]+=(r[0]-r[2])/2*s;let f=d[0]*u-d[1]*l,p=d[1]*u+d[0]*l,m=this.getConstrainedCenter([f,p],s),h=t.callback?t.callback:jm;t.duration===void 0?(this.targetResolution_=s,this.targetCenter_=m,this.applyTargetState_(!1,!0),uy(h,!0)):this.animateInternal({resolution:s,center:m,duration:t.duration,easing:t.easing},h)}centerOn(e,t,n){this.centerOnInternal(wp(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal(hy(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,r){let i,a=this.padding_;if(a&&e){let o=this.getViewportSizeMinusPadding_(-n),s=hy(e,r,[o[0]/2+a[3],o[1]/2+a[0]],t,n);i=[e[0]-s[0],e[1]-s[1]]}return i}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){let t=Cp(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){let t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t&&=wp(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){let n=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),i=this.constraints_.resolution(this.targetResolution_*e,0,r,n);t&&(this.targetCenter_=this.calculateCenterZoom(i,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(this.zoomFactor_**+-e,t)}adjustRotation(e,t){t&&=wp(t,this.getProjection()),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){let n=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&wp(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){let n=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,n),i=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,0,i,n),o=this.constraints_.center(this.targetCenter_,a,i,n,this.calculateCenterShift(this.targetCenter_,a,r,i));this.get(Kv.ROTATION)!==r&&this.set(Kv.ROTATION,r),this.get(Kv.RESOLUTION)!==a&&(this.set(Kv.RESOLUTION,a),this.set(`zoom`,this.getZoom(),!0)),(!o||!this.get(Kv.CENTER)||!Kd(this.get(Kv.CENTER),o))&&this.set(Kv.CENTER,o),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e===void 0?200:e;let r=t||0,i=this.constraints_.rotation(this.targetRotation_),a=this.getViewportSize_(i),o=this.constraints_.resolution(this.targetResolution_,r,a),s=this.constraints_.center(this.targetCenter_,o,a,!1,this.calculateCenterShift(this.targetCenter_,o,i,a));if(e===0&&!this.cancelAnchor_){this.targetResolution_=o,this.targetRotation_=i,this.targetCenter_=s,this.applyTargetState_();return}n||=e===0?this.cancelAnchor_:void 0,this.cancelAnchor_=void 0,(this.getResolution()!==o||this.getRotation()!==i||!this.getCenterInternal()||!Kd(this.getCenterInternal(),s))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:i,center:s,resolution:o,duration:e,easing:Xv,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Gv.INTERACTING,1)}endInteraction(e,t,n){n&&=wp(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.getInteracting()&&(this.setHint(Gv.INTERACTING,-1),this.resolveConstraints(e,t,n))}getConstrainedCenter(e,t){let n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){let n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t||=0;let n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}};function uy(e,t){setTimeout(function(){e(t)},0)}function dy(e){if(e.extent!==void 0){let t=e.smoothExtentConstraint===void 0||e.smoothExtentConstraint;return qv(e.extent,e.constrainOnlyCenter,t)}let t=pp(e.projection,`EPSG:3857`);if(e.multiWorld!==!0&&t.isGlobal()){let e=t.getExtent().slice();return e[0]=-1/0,e[2]=1/0,qv(e,!1,!1)}return Jv}function fy(e){let t,n,r,i=e.minZoom===void 0?cy:e.minZoom,a=e.maxZoom===void 0?28:e.maxZoom,o=e.zoomFactor===void 0?2:e.zoomFactor,s=e.multiWorld!==void 0&&e.multiWorld,c=e.smoothResolutionConstraint===void 0||e.smoothResolutionConstraint,l=e.showFullExtent!==void 0&&e.showFullExtent,u=pp(e.projection,`EPSG:3857`),d=u.getExtent(),f=e.constrainOnlyCenter,p=e.extent;if(!s&&!p&&u.isGlobal()&&(f=!1,p=d),e.resolutions!==void 0){let o=e.resolutions;n=o[i],r=o[a]===void 0?o[o.length-1]:o[a],t=e.constrainResolution?ty(o,c,!f&&p,l):ry(n,r,c,!f&&p,l)}else{let s=(d?Math.max(Td(d),bd(d)):360*Qd.degrees/u.getMetersPerUnit())/256/2**cy,m=s/2**28;n=e.maxResolution,n===void 0?n=s/o**+i:i=0,r=e.minResolution,r===void 0&&(r=e.maxZoom===void 0?m:e.maxResolution===void 0?s/o**+a:n/o**+a),a=i+Math.floor(Math.log(n/r)/Math.log(o)),r=n/o**+(a-i),t=e.constrainResolution?ny(o,n,r,c,!f&&p,l):ry(n,r,c,!f&&p,l)}return{constraint:t,maxResolution:n,minResolution:r,minZoom:i,zoomFactor:o}}function py(e){if(e.enableRotation===void 0||e.enableRotation){let t=e.constrainRotation;return t===void 0||t===!0?sy():t===!1?ay:typeof t==`number`?oy(t):ay}return iy}function my(e){return!(e.sourceCenter&&e.targetCenter&&!Kd(e.sourceCenter,e.targetCenter)||e.sourceResolution!==e.targetResolution||e.sourceRotation!==e.targetRotation)}function hy(e,t,n,r,i){let a=Math.cos(-i),o=Math.sin(-i),s=e[0]*a-e[1]*o,c=e[1]*a+e[0]*o;return s+=(t[0]/2-n[0])*r,c+=(n[1]-t[1]/2)*r,o=-o,[s*a-c*o,c*a+s*o]}var gy=class extends $m{constructor(e){super();let t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents=`auto`),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&this.element?.remove();for(let e=0,t=this.listenerKeys.length;e<t;++e)ym(this.listenerKeys[e]);if(this.listenerKeys.length=0,this.map_=e,e){let t=this.target_??e.getOverlayContainerStopEvent();this.element&&t.appendChild(this.element),this.render!==jm&&this.listenerKeys.push(_m(e,Ov.POSTRENDER,this.render,this)),e.render()}}render(e){}setTarget(e){this.target_=typeof e==`string`?document.getElementById(e):e}},_y=class extends gy{constructor(e){e||={},super({element:document.createElement(`div`),render:e.render,target:e.target}),this.ulElement_=document.createElement(`ul`),this.collapsed_=e.collapsed===void 0||e.collapsed,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible===void 0||e.collapsible,this.collapsible_||(this.collapsed_=!1),this.attributions_=e.attributions;let t=e.className===void 0?`ol-attribution`:e.className,n=e.tipLabel===void 0?`Attributions`:e.tipLabel,r=e.expandClassName===void 0?t+`-expand`:e.expandClassName,i=e.collapseLabel===void 0?`›`:e.collapseLabel,a=e.collapseClassName===void 0?t+`-collapse`:e.collapseClassName;typeof i==`string`?(this.collapseLabel_=document.createElement(`span`),this.collapseLabel_.textContent=i,this.collapseLabel_.className=a):this.collapseLabel_=i;let o=e.label===void 0?`i`:e.label;typeof o==`string`?(this.label_=document.createElement(`span`),this.label_.textContent=o,this.label_.className=r):this.label_=o;let s=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement(`button`),this.toggleButton_.setAttribute(`type`,`button`),this.toggleButton_.setAttribute(`aria-expanded`,String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(s),this.toggleButton_.addEventListener(H.CLICK,this.handleClick_.bind(this),!1);let c=t+` `+nh+` `+rh+(this.collapsed_&&this.collapsible_?` `+ih:``)+(this.collapsible_?``:` ol-uncollapsible`),l=this.element;l.className=c,l.appendChild(this.toggleButton_),l.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){let t=this.getMap().getAllLayers(),n=new Set(t.flatMap(t=>t.getAttributions(e)));if(this.attributions_!==void 0&&(Array.isArray(this.attributions_)?this.attributions_.forEach(e=>n.add(e)):n.add(this.attributions_)),!this.overrideCollapsible_){let e=!t.some(e=>e.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(e)}return Array.from(n)}async updateElement_(e){if(!e){this.renderedVisible_&&=(this.element.style.display=`none`,!1);return}let t=await Promise.all(this.collectSourceAttributions_(e).map(e=>Nm(()=>e))),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?``:`none`,this.renderedVisible_=n),!Dm(t,this.renderedAttributions_)){Up(this.ulElement_);for(let e=0,n=t.length;e<n;++e){let n=document.createElement(`li`);n.innerHTML=t[e],this.ulElement_.appendChild(n)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(ih),this.collapsed_?Hp(this.collapseLabel_,this.label_):Hp(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute(`aria-expanded`,String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle(`ol-uncollapsible`),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,this.collapsible_&&this.collapsed_!==e&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}},vy=class extends gy{constructor(e){e||={},super({element:document.createElement(`div`),render:e.render,target:e.target});let t=e.className===void 0?`ol-rotate`:e.className,n=e.label===void 0?`⇧`:e.label,r=e.compassClassName===void 0?`ol-compass`:e.compassClassName;this.label_=null,typeof n==`string`?(this.label_=document.createElement(`span`),this.label_.className=r,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(r));let i=e.tipLabel?e.tipLabel:`Reset rotation`,a=document.createElement(`button`);a.className=t+`-reset`,a.setAttribute(`type`,`button`),a.title=i,a.appendChild(this.label_),a.addEventListener(H.CLICK,this.handleClick_.bind(this),!1);let o=t+` `+nh+` `+rh,s=this.element;s.className=o,s.appendChild(a),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration===void 0?250:e.duration,this.autoHide_=e.autoHide===void 0||e.autoHide,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(eh)}handleClick_(e){e.preventDefault(),this.callResetNorth_===void 0?this.resetNorth_():this.callResetNorth_()}resetNorth_(){let e=this.getMap().getView();if(!e)return;let t=e.getRotation();t!==void 0&&(this.duration_>0&&t%(2*Math.PI)!=0?e.animate({rotation:0,duration:this.duration_,easing:Xv}):e.setRotation(0))}render(e){let t=e.frameState;if(!t)return;let n=t.viewState.rotation;if(n!=this.rotation_){let e=`rotate(`+n+`rad)`;if(this.autoHide_){let e=this.element.classList.contains(eh);!e&&n===0?this.element.classList.add(eh):e&&n!==0&&this.element.classList.remove(eh)}this.label_.style.transform=e}this.rotation_=n}},yy=class extends gy{constructor(e){e||={},super({element:document.createElement(`div`),target:e.target});let t=e.className===void 0?`ol-zoom`:e.className,n=e.delta===void 0?1:e.delta,r=e.zoomInClassName===void 0?t+`-in`:e.zoomInClassName,i=e.zoomOutClassName===void 0?t+`-out`:e.zoomOutClassName,a=e.zoomInLabel===void 0?`+`:e.zoomInLabel,o=e.zoomOutLabel===void 0?`–`:e.zoomOutLabel,s=e.zoomInTipLabel===void 0?`Zoom in`:e.zoomInTipLabel,c=e.zoomOutTipLabel===void 0?`Zoom out`:e.zoomOutTipLabel,l=document.createElement(`button`);l.className=r,l.setAttribute(`type`,`button`),l.title=s,l.appendChild(typeof a==`string`?document.createTextNode(a):a),l.addEventListener(H.CLICK,this.handleClick_.bind(this,n),!1);let u=document.createElement(`button`);u.className=i,u.setAttribute(`type`,`button`),u.title=c,u.appendChild(typeof o==`string`?document.createTextNode(o):o),u.addEventListener(H.CLICK,this.handleClick_.bind(this,-n),!1);let d=t+` `+nh+` `+rh,f=this.element;f.className=d,f.appendChild(l),f.appendChild(u),this.duration_=e.duration===void 0?250:e.duration}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){let t=this.getMap().getView();if(!t)return;let n=t.getZoom();if(n!==void 0){let r=t.getConstrainedZoom(n+e);this.duration_>0?(t.getAnimating()&&t.cancelAnimations(),t.animate({zoom:r,duration:this.duration_,easing:Xv})):t.setZoom(r)}}};function by(e){e||={};let t=new Pv;return(e.zoom===void 0||e.zoom)&&t.push(new yy(e.zoomOptions)),(e.rotate===void 0||e.rotate)&&t.push(new vy(e.rotateOptions)),(e.attribution===void 0||e.attribution)&&t.push(new _y(e.attributionOptions)),t}var xy=class{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;let e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;let r=this.points_[t+2]-this.points_[n+2];if(r<1e3/60)return!1;let i=this.points_[t]-this.points_[n],a=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(a,i),this.initialVelocity_=Math.sqrt(i*i+a*a)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},Sy={ACTIVE:`active`},Cy=class extends $m{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Sy.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(Sy.ACTIVE,e)}setMap(e){this.map_=e}};function wy(e,t,n){let r=e.getCenterInternal();if(r){let i=[r[0]+t[0],r[1]+t[1]];e.animateInternal({duration:n===void 0?250:n,easing:Qv,center:e.getConstrainedCenter(i)})}}function Ty(e,t,n,r){let i=e.getZoom();if(i===void 0)return;let a=e.getConstrainedZoom(i+t),o=e.getResolutionForZoom(a);e.getAnimating()&&e.cancelAnimations(),e.animate({resolution:o,anchor:n,duration:r===void 0?250:r,easing:Xv})}var Ey=class extends Cy{constructor(e){super(),e||={},this.delta_=e.delta?e.delta:1,this.duration_=e.duration===void 0?250:e.duration}handleEvent(e){let t=!1;if(e.type==Lv.DBLCLICK){let n=e.originalEvent,r=e.map,i=e.coordinate,a=n.shiftKey?-this.delta_:this.delta_;Ty(r.getView(),a,i,this.duration_),n.preventDefault(),t=!0}return!t}};function Dy(e){let t=arguments;return function(e){let n=!0;for(let r=0,i=t.length;r<i&&(n&&=t[r](e),n);++r);return n}}var Oy=function(e){let t=e.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},ky=function(e){let t=e.map.getTargetElement(),n=t.getRootNode(),r=e.map.getOwnerDocument().activeElement;return n instanceof ShadowRoot?n.host.contains(r):t.contains(r)},Ay=function(e){let t=e.map.getTargetElement(),n=t.getRootNode();return!(n instanceof ShadowRoot?n.host:t).hasAttribute(`tabindex`)||ky(e)},jy=km,My=function(e){let t=e.originalEvent;return`pointerId`in t&&t.button==0&&!(Ap&&jp&&t.ctrlKey)},Ny=function(e){let t=e.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},Py=function(e){let t=e.originalEvent;return jp?t.metaKey:t.ctrlKey},Fy=function(e){let t=e.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},Iy=function(e){let t=e.originalEvent,n=t.target.tagName;return n!==`INPUT`&&n!==`SELECT`&&n!==`TEXTAREA`&&!t.target.isContentEditable},Ly=function(e){let t=e.originalEvent;return`pointerId`in t&&t.pointerType==`mouse`},Ry=function(e){let t=e.originalEvent;return`pointerId`in t&&t.isPrimary&&t.button===0},zy=class extends Cy{constructor(e){e||={},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==Lv.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==Lv.POINTERUP){let t=this.handleUpEvent(e);this.handlingDownUpSequence=t&&this.targetPointers.length>0}}else if(e.type==Lv.POINTERDOWN){let n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==Lv.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}};function By(e){let t=e.length,n=0,r=0;for(let i=0;i<t;i++)n+=e[i].clientX,r+=e[i].clientY;return{clientX:n/t,clientY:r/t}}var Vy=class extends zy{constructor(e){super({stopDown:Am}),e||={},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;let t=e.condition?e.condition:Dy(Ny,Ry);this.condition_=e.onFocusOnly?Dy(Ay,t):t,this.noKinetic_=!1}handleDragEvent(e){let t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());let n=this.targetPointers,r=t.getEventPixel(By(n));if(n.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){let t=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],n=e.map.getView();Jd(t,n.getResolution()),qd(t,n.getRotation()),n.adjustCenterInternal(t)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=n.length,e.originalEvent.preventDefault()}handleUpEvent(e){let t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let e=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),i=n.getCenterInternal(),a=t.getPixelFromCoordinateInternal(i),o=t.getCoordinateFromPixelInternal([a[0]-e*Math.cos(r),a[1]-e*Math.sin(r)]);n.animateInternal({center:n.getConstrainedCenter(o),duration:500,easing:Xv})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){let t=e.map.getView();return this.lastCentroid=null,t.getAnimating()&&t.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}},Hy=class extends zy{constructor(e){e||={},super({stopDown:Am}),this.condition_=e.condition?e.condition:Oy,this.lastAngle_=void 0,this.duration_=e.duration===void 0?250:e.duration}handleDragEvent(e){if(!Ly(e))return;let t=e.map,n=t.getView();if(n.getConstraints().rotation===iy)return;let r=t.getSize(),i=e.pixel,a=Math.atan2(r[1]/2-i[1],i[0]-r[0]/2);if(this.lastAngle_!==void 0){let e=a-this.lastAngle_;n.adjustRotationInternal(-e)}this.lastAngle_=a}handleUpEvent(e){return!Ly(e)||(e.map.getView().endInteraction(this.duration_),!1)}handleDownEvent(e){return Ly(e)&&My(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}},Uy=class extends bm{constructor(e){super(),this.geometry_=null,this.element_=document.createElement(`div`),this.element_.style.position=`absolute`,this.element_.style.pointerEvents=`auto`,this.element_.className=`ol-box `+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let e=this.startPixel_,t=this.endPixel_,n=this.element_.style;n.left=Math.min(e[0],t[0])+`px`,n.top=Math.min(e[1],t[1])+`px`,n.width=Math.abs(t[0]-e[0])+`px`,n.height=Math.abs(t[1]-e[1])+`px`}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let e=this.element_.style;e.left=`inherit`,e.top=`inherit`,e.width=`inherit`,e.height=`inherit`}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let e=this.startPixel_,t=this.endPixel_,n=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);n[4]=n[0].slice(),this.geometry_?this.geometry_.setCoordinates([n]):this.geometry_=new W_([n])}getGeometry(){return this.geometry_}},Wy={BOXSTART:`boxstart`,BOXDRAG:`boxdrag`,BOXEND:`boxend`,BOXCANCEL:`boxcancel`},Gy=class extends Pm{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}},Ky=class extends zy{constructor(e){super(),this.on,this.once,this.un,e??={},this.box_=new Uy(e.className||`ol-dragbox`),this.minArea_=e.minArea??64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition??My,this.boxEndCondition_=e.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){let r=n[0]-t[0],i=n[1]-t[1];return r*r+i*i>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.startPixel_&&(this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new Gy(Wy.BOXDRAG,e.coordinate,e)))}handleUpEvent(e){if(!this.startPixel_)return!1;let t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new Gy(t?Wy.BOXEND:Wy.BOXCANCEL,e.coordinate,e)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Gy(Wy.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}setActive(e){e||(this.box_.setMap(null),this.startPixel_&&=(this.dispatchEvent(new Gy(Wy.BOXCANCEL,this.startPixel_,null)),null)),super.setActive(e)}setMap(e){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&=(this.dispatchEvent(new Gy(Wy.BOXCANCEL,this.startPixel_,null)),null)),super.setMap(e)}},qy=class extends Ky{constructor(e){e||={};let t=e.condition?e.condition:Fy;super({condition:t,className:e.className||`ol-dragzoom`,minArea:e.minArea}),this.duration_=e.duration===void 0?200:e.duration,this.out_=e.out!==void 0&&e.out}onBoxEnd(e){let t=this.getMap().getView(),n=this.getGeometry();if(this.out_){let e=t.rotatedExtentForGeometry(n),r=t.getResolutionForExtentInternal(e),i=t.getResolution()/r;n=n.clone(),n.scale(i*i)}t.fitInternal(n,{duration:this.duration_,easing:Xv})}},Jy={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,DOWN:`ArrowDown`},Yy=class extends Cy{constructor(e){super(),e||={},this.defaultCondition_=function(e){return Ny(e)&&Iy(e)},this.condition_=e.condition===void 0?this.defaultCondition_:e.condition,this.duration_=e.duration===void 0?100:e.duration,this.pixelDelta_=e.pixelDelta===void 0?128:e.pixelDelta}handleEvent(e){let t=!1;if(e.type==H.KEYDOWN){let n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==Jy.DOWN||r==Jy.LEFT||r==Jy.RIGHT||r==Jy.UP)){let i=e.map.getView(),a=i.getResolution()*this.pixelDelta_,o=0,s=0;r==Jy.DOWN?s=-a:r==Jy.LEFT?o=-a:r==Jy.RIGHT?o=a:s=a;let c=[o,s];qd(c,i.getRotation()),wy(i,c,this.duration_),n.preventDefault(),t=!0}}return!t}},Xy=class extends Cy{constructor(e){super(),e||={},this.condition_=e.condition?e.condition:function(e){return!Py(e)&&Iy(e)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration===void 0?100:e.duration}handleEvent(e){let t=!1;if(e.type==H.KEYDOWN||e.type==H.KEYPRESS){let n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r===`+`||r===`-`)){let i=e.map,a=r===`+`?this.delta_:-this.delta_;Ty(i.getView(),a,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}},Zy=40,Qy=300,$y=3,eb=class extends Cy{constructor(e){e||={},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta===void 0?1:e.maxDelta,this.duration_=e.duration===void 0?250:e.duration,this.timeout_=e.timeout===void 0?80:e.timeout,this.useAnchor_=e.useAnchor===void 0||e.useAnchor,this.constrainResolution_=e.constrainResolution!==void 0&&e.constrainResolution;let t=e.condition?e.condition:jy;this.condition_=e.onFocusOnly?Dy(Ay,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(e){if(this.ctrlKeyListenerKeys_.forEach(ym),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(e),e){let t=e.getOwnerDocument();this.ctrlKeyListenerKeys_.push(_m(t,`keydown`,e=>{e.key===`Control`&&(this.ctrlKeyPressed_=!0)}),_m(t,`keyup`,e=>{e.key===`Control`&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let e=this.getMap();if(!e)return;let t=e.getView(),n=this.lastDelta_?this.lastDelta_>0?1:-1:0;t.endInteraction(this.constrainResolution_||t.getConstrainResolution()?100:void 0,n,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(e){if(!this.condition_(e)||e.type!==H.WHEEL)return!0;let t=e.map,n=e.originalEvent;n.preventDefault();let r=n.ctrlKey&&!this.ctrlKeyPressed_;n.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=e.pixel);let i=n.deltaY;switch(n.deltaMode){case WheelEvent.DOM_DELTA_LINE:i*=Zy;break;case WheelEvent.DOM_DELTA_PAGE:i*=Qy}if(i===0)return!1;this.lastDelta_=i;let a=Date.now();this.startTime_===void 0&&(this.startTime_=a),(!this.mode_||a-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(i)<4?`trackpad`:`wheel`);let o=t.getView();if(this.mode_===`trackpad`)return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(o.getAnimating()&&o.cancelAnimations(),o.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),r&&(i*=$y),o.adjustZoom(-i/this.deltaPerZoom_,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=a,!1;this.totalDelta_+=i;let s=Math.max(this.timeout_-(a-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,t),s),!1}handleWheelZoom_(e){let t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-Nd(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),Ty(t,n,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}},tb=class extends zy{constructor(e){e||={};let t=e;t.stopDown||=Am,super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold===void 0?.3:e.threshold,this.duration_=e.duration===void 0?250:e.duration}handleDragEvent(e){let t=0,n=this.targetPointers[0],r=this.targetPointers[1],i=Math.atan2(r.clientY-n.clientY,r.clientX-n.clientX);if(this.lastAngle_!==void 0){let e=i-this.lastAngle_;this.rotationDelta_+=e,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=e}this.lastAngle_=i;let a=e.map,o=a.getView();o.getConstraints().rotation!==iy&&(this.anchor_=a.getCoordinateFromPixelInternal(a.getEventPixel(By(this.targetPointers))),this.rotating_&&(a.render(),o.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}},nb=class extends zy{constructor(e){e||={};let t=e;t.stopDown||=Am,super(t),this.anchor_=null,this.duration_=e.duration===void 0?400:e.duration,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1,n=this.targetPointers[0],r=this.targetPointers[1],i=n.clientX-r.clientX,a=n.clientY-r.clientY,o=Math.sqrt(i*i+a*a);this.lastDistance_!==void 0&&(t=this.lastDistance_/o),this.lastDistance_=o;let s=e.map,c=s.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=s.getCoordinateFromPixelInternal(s.getEventPixel(By(this.targetPointers))),s.render(),c.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){let t=e.map.getView(),n=this.lastScaleDelta_>1?1:-1;return t.endInteraction(this.duration_,n),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}};function rb(e){e||={};let t=new Pv,n=new xy(-.005,.05,100);return(e.altShiftDragRotate===void 0||e.altShiftDragRotate)&&t.push(new Hy),(e.doubleClickZoom===void 0||e.doubleClickZoom)&&t.push(new Ey({delta:e.zoomDelta,duration:e.zoomDuration})),(e.dragPan===void 0||e.dragPan)&&t.push(new Vy({onFocusOnly:e.onFocusOnly,kinetic:n})),(e.pinchRotate===void 0||e.pinchRotate)&&t.push(new tb),(e.pinchZoom===void 0||e.pinchZoom)&&t.push(new nb({duration:e.zoomDuration})),(e.keyboard===void 0||e.keyboard)&&(t.push(new Yy),t.push(new Xy({delta:e.zoomDelta,duration:e.zoomDuration}))),(e.mouseWheelZoom===void 0||e.mouseWheelZoom)&&t.push(new eb({onFocusOnly:e.onFocusOnly,duration:e.zoomDuration})),(e.shiftDragZoom===void 0||e.shiftDragZoom)&&t.push(new qy({duration:e.zoomDuration})),t}var ib={OPACITY:`opacity`,VISIBLE:`visible`,EXTENT:`extent`,Z_INDEX:`zIndex`,MAX_RESOLUTION:`maxResolution`,MIN_RESOLUTION:`minResolution`,MAX_ZOOM:`maxZoom`,MIN_ZOOM:`minZoom`,SOURCE:`source`,MAP:`map`},ab=class extends $m{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;let t=Object.assign({},e);typeof e.properties==`object`&&(delete t.properties,Object.assign(t,e.properties)),t[ib.OPACITY]=e.opacity===void 0?1:e.opacity,zh(typeof t[ib.OPACITY]==`number`,`Layer opacity must be a number`),t[ib.VISIBLE]=e.visible===void 0||e.visible,t[ib.Z_INDEX]=e.zIndex,t[ib.MAX_RESOLUTION]=e.maxResolution===void 0?1/0:e.maxResolution,t[ib.MIN_RESOLUTION]=e.minResolution===void 0?0:e.minResolution,t[ib.MIN_ZOOM]=e.minZoom===void 0?-1/0:e.minZoom,t[ib.MAX_ZOOM]=e.maxZoom===void 0?1/0:e.maxZoom,this.className_=t.className===void 0?`ol-layer`:t.className,delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){let t=this.state_||{layer:this,managed:e===void 0||e},n=this.getZIndex();return t.opacity=Nd(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return U()}getLayerStatesArray(e){return U()}getExtent(){return this.get(ib.EXTENT)}getMaxResolution(){return this.get(ib.MAX_RESOLUTION)}getMinResolution(){return this.get(ib.MIN_RESOLUTION)}getMinZoom(){return this.get(ib.MIN_ZOOM)}getMaxZoom(){return this.get(ib.MAX_ZOOM)}getOpacity(){return this.get(ib.OPACITY)}getSourceState(){return U()}getVisible(){return this.get(ib.VISIBLE)}getZIndex(){return this.get(ib.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(ib.EXTENT,e)}setMaxResolution(e){this.set(ib.MAX_RESOLUTION,e)}setMinResolution(e){this.set(ib.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(ib.MAX_ZOOM,e)}setMinZoom(e){this.set(ib.MIN_ZOOM,e)}setOpacity(e){zh(typeof e==`number`,`Layer opacity must be a number`),this.set(ib.OPACITY,e)}setVisible(e){this.set(ib.VISIBLE,e)}setZIndex(e){this.set(ib.Z_INDEX,e)}disposeInternal(){this.state_&&=(this.state_.layer=null,null),super.disposeInternal()}},ob={ADDLAYER:`addlayer`,REMOVELAYER:`removelayer`},sb=class extends Pm{constructor(e,t){super(e),this.layer=t}},cb={LAYERS:`layers`},lb=class e extends ab{constructor(e){e||={};let t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(cb.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new Pv(n.slice(),{unique:!0}):zh(typeof n.getArray==`function`,"Expected `layers` to be an array or a `Collection`"):n=new Pv(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(ym),this.layersListenerKeys_.length=0;let e=this.getLayers();this.layersListenerKeys_.push(_m(e,jv.ADD,this.handleLayersAdd_,this),_m(e,jv.REMOVE,this.handleLayersRemove_,this));for(let e in this.listenerKeys_)this.listenerKeys_[e].forEach(ym);vf(this.listenerKeys_);let t=e.getArray();for(let e=0,n=t.length;e<n;e++){let n=t[e];this.registerLayerListeners_(n),this.dispatchEvent(new sb(ob.ADDLAYER,n))}this.changed()}registerLayerListeners_(t){let n=[_m(t,qm.PROPERTYCHANGE,this.handleLayerChange_,this),_m(t,H.CHANGE,this.handleLayerChange_,this)];t instanceof e&&n.push(_m(t,ob.ADDLAYER,this.handleLayerGroupAdd_,this),_m(t,ob.REMOVELAYER,this.handleLayerGroupRemove_,this)),this.listenerKeys_[Zm(t)]=n}handleLayerGroupAdd_(e){this.dispatchEvent(new sb(ob.ADDLAYER,e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new sb(ob.REMOVELAYER,e.layer))}handleLayersAdd_(e){let t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new sb(ob.ADDLAYER,t)),this.changed()}handleLayersRemove_(e){let t=e.element,n=Zm(t);this.listenerKeys_[n].forEach(ym),delete this.listenerKeys_[n],this.dispatchEvent(new sb(ob.REMOVELAYER,t)),this.changed()}getLayers(){return this.get(cb.LAYERS)}setLayers(e){let t=this.getLayers();if(t){let e=t.getArray();for(let t=0,n=e.length;t<n;++t)this.dispatchEvent(new sb(ob.REMOVELAYER,e[t]))}this.set(cb.LAYERS,e)}getLayersArray(e){return e=e===void 0?[]:e,this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){let t=e===void 0?[]:e,n=t.length;this.getLayers().forEach(function(e){e.getLayerStatesArray(t)});let r=this.getLayerState(),i=r.zIndex;!e&&r.zIndex===void 0&&(i=0);for(let e=n,a=t.length;e<a;e++){let n=t[e];n.opacity*=r.opacity,n.visible=n.visible&&r.visible,n.maxResolution=Math.min(n.maxResolution,r.maxResolution),n.minResolution=Math.max(n.minResolution,r.minResolution),n.minZoom=Math.max(n.minZoom,r.minZoom),n.maxZoom=Math.min(n.maxZoom,r.maxZoom),r.extent!==void 0&&(n.extent=n.extent===void 0?r.extent:xd(n.extent,r.extent)),n.zIndex===void 0&&(n.zIndex=i)}return t}getSourceState(){return`ready`}},ub={PRERENDER:`prerender`,POSTRENDER:`postrender`,PRECOMPOSE:`precompose`,POSTCOMPOSE:`postcompose`,RENDERCOMPLETE:`rendercomplete`},db=class extends ab{constructor(e){let t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(ib.SOURCE,this.handleSourcePropertyChange_);let n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e||=[],e.push(this),e}getLayerStatesArray(e){return e||=[],e.push(this.getLayerState()),e}getSource(){return this.get(ib.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let e=this.getSource();return e?e.getState():`undefined`}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!==`ready`)&&(this.sourceReady_=!0,this.dispatchEvent(`sourceready`))}handleSourcePropertyChange_(){this.sourceChangeKey_&&=(ym(this.sourceChangeKey_),null),this.sourceReady_=!1;let e=this.getSource();e&&(this.sourceChangeKey_=_m(e,H.CHANGE,this.handleSourceChange_,this),e.getState()===`ready`&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent(`sourceready`)},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t,n=this.getMapInternal();!e&&n&&(e=n.getView()),t=e instanceof ly?{viewState:e.getState(),extent:e.calculateExtent()}:e,!t.layerStatesArray&&n&&(t.layerStatesArray=n.getLayerGroup().getLayerStatesArray());let r;if(t.layerStatesArray){if(r=t.layerStatesArray.find(e=>e.layer===this),!r)return!1}else r=this.getLayerState();let i=this.getExtent();return fb(r,t.viewState)&&(!i||Ed(i,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t=this.getSource()?.getAttributions();if(!t)return[];let n=t(e instanceof ly?e.getViewStateAndExtent():e);return Array.isArray(n)||(n=[n]),n}render(e,t){let n=this.getRenderer();return n.prepareFrame(e)?(this.rendered=!0,n.renderFrame(e,t)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,t){}renderDeferred(e){let t=this.getRenderer();t&&t.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(ib.MAP,e)}getMapInternal(){return this.get(ib.MAP)}setMap(e){this.mapPrecomposeKey_&&=(ym(this.mapPrecomposeKey_),null),e||this.changed(),this.mapRenderKey_&&=(ym(this.mapRenderKey_),null),e&&(this.mapPrecomposeKey_=_m(e,ub.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=_m(this,H.CHANGE,e.render,e),this.changed())}handlePrecompose_(e){let t=e.frameState.layerStatesArray,n=this.getLayerState(!1);zh(!t.some(e=>e.layer===n.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),t.push(n)}setSource(e){this.set(ib.SOURCE,e)}getRenderer(){return this.renderer_||=this.createRenderer(),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}};function fb(e,t){if(!e.visible)return!1;let n=t.resolution;if(n<e.minResolution||n>=e.maxResolution)return!1;let r=t.zoom;return r>e.minZoom&&r<=e.maxZoom}function pb(e,t,n=0,r=e.length-1,i=hb){for(;r>n;){if(r-n>600){let a=r-n+1,o=t-n+1,s=Math.log(a),c=.5*Math.exp(2*s/3),l=.5*Math.sqrt(s*c*(a-c)/a)*(o-a/2<0?-1:1);pb(e,t,Math.max(n,Math.floor(t-o*c/a+l)),Math.min(r,Math.floor(t+(a-o)*c/a+l)),i)}let a=e[t],o=n,s=r;for(mb(e,n,t),i(e[r],a)>0&&mb(e,n,r);o<s;){for(mb(e,o,s),o++,s--;i(e[o],a)<0;)o++;for(;i(e[s],a)>0;)s--}i(e[n],a)===0?mb(e,n,s):(s++,mb(e,s,r)),s<=t&&(n=s+1),t<=s&&(r=s-1)}}function mb(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function hb(e,t){return e<t?-1:+(e>t)}var gb=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data,n=[];if(!Ob(e,t))return n;let r=this.toBBox,i=[];for(;t;){for(let a=0;a<t.children.length;a++){let o=t.children[a],s=t.leaf?r(o):o;Ob(e,s)&&(t.leaf?n.push(o):Db(e,s)?this._all(o,n):i.push(o))}t=i.pop()}return n}collides(e){let t=this.data;if(!Ob(e,t))return!1;let n=[];for(;t;){for(let r=0;r<t.children.length;r++){let i=t.children[r],a=t.leaf?this.toBBox(i):i;if(Ob(e,a)){if(t.leaf||Db(e,a))return!0;n.push(i)}}t=n.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let t=0;t<e.length;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){let e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=kb([]),this}remove(e,t){if(!e)return this;let n=this.data,r=this.toBBox(e),i=[],a=[],o,s,c;for(;n||i.length;){if(n||(n=i.pop(),s=i[i.length-1],o=a.pop(),c=!0),n.leaf){let r=_b(e,n.children,t);if(r!==-1)return n.children.splice(r,1),i.push(n),this._condense(i),this}!c&&!n.leaf&&Db(n,r)?(i.push(n),a.push(o),o=0,s=n,n=n.children[0]):s?(o++,n=s.children[o],c=!1):n=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=[];for(;e;)e.leaf?t.push(...e.children):n.push(...e.children),e=n.pop();return t}_build(e,t,n,r){let i=n-t+1,a=this._maxEntries,o;if(i<=a)return o=kb(e.slice(t,n+1)),vb(o,this.toBBox),o;r||(r=Math.ceil(Math.log(i)/Math.log(a)),a=Math.ceil(i/a**(r-1))),o=kb([]),o.leaf=!1,o.height=r;let s=Math.ceil(i/a),c=s*Math.ceil(Math.sqrt(a));Ab(e,t,n,c,this.compareMinX);for(let i=t;i<=n;i+=c){let t=Math.min(i+c-1,n);Ab(e,i,t,s,this.compareMinY);for(let n=i;n<=t;n+=s){let i=Math.min(n+s-1,t);o.children.push(this._build(e,n,i,r-1))}}return vb(o,this.toBBox),o}_chooseSubtree(e,t,n,r){for(;r.push(t),!(t.leaf||r.length-1===n);){let n=1/0,r=1/0,i;for(let a=0;a<t.children.length;a++){let o=t.children[a],s=Cb(o),c=Tb(e,o)-s;c<r?(r=c,n=s<n?s:n,i=o):c===r&&s<n&&(n=s,i=o)}t=i||t.children[0]}return t}_insert(e,t,n){let r=n?e:this.toBBox(e),i=[],a=this._chooseSubtree(r,this.data,t,i);for(a.children.push(e),bb(a,r);t>=0&&i[t].children.length>this._maxEntries;)this._split(i,t),t--;this._adjustParentBBoxes(r,i,t)}_split(e,t){let n=e[t],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);let a=this._chooseSplitIndex(n,i,r),o=kb(n.children.splice(a,n.children.length-a));o.height=n.height,o.leaf=n.leaf,vb(n,this.toBBox),vb(o,this.toBBox),t?e[t-1].children.push(o):this._splitRoot(n,o)}_splitRoot(e,t){this.data=kb([e,t]),this.data.height=e.height+1,this.data.leaf=!1,vb(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let r,i=1/0,a=1/0;for(let o=t;o<=n-t;o++){let t=yb(e,0,o,this.toBBox),s=yb(e,o,n,this.toBBox),c=Eb(t,s),l=Cb(t)+Cb(s);c<i?(i=c,r=o,a=l<a?l:a):c===i&&l<a&&(a=l,r=o)}return r||n-t}_chooseSplitAxis(e,t,n){let r=e.leaf?this.compareMinX:xb,i=e.leaf?this.compareMinY:Sb;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)}_allDistMargin(e,t,n,r){e.children.sort(r);let i=this.toBBox,a=yb(e,0,t,i),o=yb(e,n-t,n,i),s=wb(a)+wb(o);for(let r=t;r<n-t;r++){let t=e.children[r];bb(a,e.leaf?i(t):t),s+=wb(a)}for(let r=n-t-1;r>=t;r--){let t=e.children[r];bb(o,e.leaf?i(t):t),s+=wb(o)}return s}_adjustParentBBoxes(e,t,n){for(let r=n;r>=0;r--)bb(t[r],e)}_condense(e){for(let t=e.length-1,n;t>=0;t--)e[t].children.length===0?t>0?(n=e[t-1].children,n.splice(n.indexOf(e[t]),1)):this.clear():vb(e[t],this.toBBox)}};function _b(e,t,n){if(!n)return t.indexOf(e);for(let r=0;r<t.length;r++)if(n(e,t[r]))return r;return-1}function vb(e,t){yb(e,0,e.children.length,t,e)}function yb(e,t,n,r,i){i||=kb(null),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let a=t;a<n;a++){let t=e.children[a];bb(i,e.leaf?r(t):t)}return i}function bb(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function xb(e,t){return e.minX-t.minX}function Sb(e,t){return e.minY-t.minY}function Cb(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function wb(e){return e.maxX-e.minX+(e.maxY-e.minY)}function Tb(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function Eb(e,t){let n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),a=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,a-r)}function Db(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function Ob(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function kb(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Ab(e,t,n,r,i){let a=[t,n];for(;a.length;){if(n=a.pop(),t=a.pop(),n-t<=r)continue;let o=t+Math.ceil((n-t)/r/2)*r;pb(e,o,t,n,i),a.push(t,o,o,n)}}var jb=0,Mb=1<<jb++,Nb=1<<jb++,Pb=1<<jb++,Fb=1<<jb++,Ib=1<<jb++,Lb=1<<jb++,Rb=2**jb-1,zb={[Mb]:`boolean`,[Nb]:`number`,[Pb]:`string`,[Fb]:`color`,[Ib]:`number[]`,[Lb]:`size`},Bb=Object.keys(zb).map(Number).sort(Sm);function Vb(e){return e in zb}function Hb(e){let t=[];for(let n of Bb)Ub(e,n)&&t.push(zb[n]);return t.length===0?`untyped`:t.length<3?t.join(` or `):t.slice(0,-1).join(`, `)+`, or `+t[t.length-1]}function Ub(e,t){return(e&t)===t}function Wb(e,t){return!!(e&t)}function Gb(e,t){return e===t}var Kb=class{constructor(e,t){if(!Vb(e))throw Error(`literal expressions must have a specific type, got ${Hb(e)}`);this.type=e,this.value=t}},qb=class{constructor(e,t,...n){this.type=e,this.operator=t,this.args=n}};function Jb(e){return{variables:new Map,properties:new Map,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1,inputVariables:e}}function Yb(e,t,n){switch(typeof e){case`boolean`:if(Gb(t,Pb))return new Kb(Pb,e?`true`:`false`);if(!Ub(t,Mb))throw Error(`got a boolean, but expected ${Hb(t)}`);return new Kb(Mb,e);case`number`:if(Gb(t,Lb))return new Kb(Lb,Ph(e));if(Gb(t,Mb))return new Kb(Mb,!!e);if(Gb(t,Pb))return new Kb(Pb,e.toString());if(!Ub(t,Nb))throw Error(`got a number, but expected ${Hb(t)}`);return new Kb(Nb,e);case`string`:if(Gb(t,Fb))return new Kb(Fb,mm(e));if(Gb(t,Mb))return new Kb(Mb,!!e);if(!Ub(t,Pb))throw Error(`got a string, but expected ${Hb(t)}`);return new Kb(Pb,e)}if(!Array.isArray(e))throw Error(`expression must be an array or a primitive value`);if(e.length===0)throw Error(`empty expression`);if(typeof e[0]==`string`)return hx(e,t,n);for(let t of e)if(typeof t!=`number`)throw Error(`expected an array of numbers`);if(Gb(t,Lb)){if(e.length!==2)throw Error(`expected an array of two values for a size, got ${e.length}`);return new Kb(Lb,e)}if(Gb(t,Fb)){if(e.length===3)return new Kb(Fb,[...e,1]);if(e.length===4)return new Kb(Fb,e);throw Error(`expected an array of 3 or 4 values for a color, got ${e.length}`)}if(!Ub(t,Ib))throw Error(`got an array of numbers, but expected ${Hb(t)}`);return new Kb(Ib,e)}var G={Get:`get`,Var:`var`,Concat:`concat`,GeometryType:`geometry-type`,LineMetric:`line-metric`,Any:`any`,All:`all`,Not:`!`,Resolution:`resolution`,Zoom:`zoom`,Time:`time`,Equal:`==`,NotEqual:`!=`,GreaterThan:`>`,GreaterThanOrEqualTo:`>=`,LessThan:`<`,LessThanOrEqualTo:`<=`,Multiply:`*`,Divide:`/`,Add:`+`,Subtract:`-`,Clamp:`clamp`,Mod:`%`,Pow:`^`,Abs:`abs`,Floor:`floor`,Ceil:`ceil`,Round:`round`,Sin:`sin`,Cos:`cos`,Atan:`atan`,Sqrt:`sqrt`,Match:`match`,Between:`between`,Interpolate:`interpolate`,Coalesce:`coalesce`,Case:`case`,In:`in`,Number:`number`,String:`string`,Array:`array`,Color:`color`,Id:`id`,Band:`band`,Palette:`palette`,ToString:`to-string`,Has:`has`},Xb={[G.Get]:K(ix(1,1/0),Zb),[G.Var]:Qb(),[G.Has]:K(ix(1,1/0),Zb),[G.Id]:K($b,rx),[G.Concat]:K(ix(2,1/0),ox(Pb)),[G.GeometryType]:K(ex,rx),[G.LineMetric]:K(tx,rx),[G.Resolution]:K(nx,rx),[G.Zoom]:K(nx,rx),[G.Time]:K(nx,rx),[G.Any]:K(ix(2,1/0),ox(Mb)),[G.All]:K(ix(2,1/0),ox(Mb)),[G.Not]:K(ix(1,1),ox(Mb)),[G.Equal]:K(ix(2,2),sx()),[G.NotEqual]:K(ix(2,2),sx()),[G.GreaterThan]:K(ix(2,2),ox(Nb)),[G.GreaterThanOrEqualTo]:K(ix(2,2),ox(Nb)),[G.LessThan]:K(ix(2,2),ox(Nb)),[G.LessThanOrEqualTo]:K(ix(2,2),ox(Nb)),[G.Multiply]:K(ix(2,1/0),ax),[G.Coalesce]:K(ix(2,1/0),ax),[G.Divide]:K(ix(2,2),ox(Nb)),[G.Add]:K(ix(2,1/0),ox(Nb)),[G.Subtract]:K(ix(2,2),ox(Nb)),[G.Clamp]:K(ix(3,3),ox(Nb)),[G.Mod]:K(ix(2,2),ox(Nb)),[G.Pow]:K(ix(2,2),ox(Nb)),[G.Abs]:K(ix(1,1),ox(Nb)),[G.Floor]:K(ix(1,1),ox(Nb)),[G.Ceil]:K(ix(1,1),ox(Nb)),[G.Round]:K(ix(1,1),ox(Nb)),[G.Sin]:K(ix(1,1),ox(Nb)),[G.Cos]:K(ix(1,1),ox(Nb)),[G.Atan]:K(ix(1,2),ox(Nb)),[G.Sqrt]:K(ix(1,1),ox(Nb)),[G.Match]:K(ix(4,1/0),lx,ux),[G.Between]:K(ix(3,3),ox(Nb)),[G.Interpolate]:K(ix(6,1/0),lx,dx),[G.Case]:K(ix(3,1/0),cx,fx),[G.In]:K(ix(2,2),px),[G.Number]:K(ix(1,1/0),ox(Rb)),[G.String]:K(ix(1,1/0),ox(Rb)),[G.Array]:K(ix(1,1/0),ox(Nb)),[G.Color]:K(ix(1,4),ox(Nb)),[G.Band]:K(ix(1,3),ox(Nb)),[G.Palette]:K(ix(2,2),mx),[G.ToString]:K(ix(1,1),ox(Mb|Nb|Pb|Fb))};function Zb(e,t,n){let r=e.length-1,i=Array(r);for(let a=0;a<r;++a){let r=e[a+1];switch(typeof r){case`number`:i[a]=new Kb(Nb,r);break;case`string`:i[a]=new Kb(Pb,r);break;default:throw Error(`expected a string key or numeric array index for a get operation, got ${r}`)}a===0&&n.properties.set(String(r),t)}return i}function Qb(){return function(e,t,n){let r=e[1];if(typeof r!=`string`)throw Error(`expected a string argument for var operation`);let i=t,a=n.inputVariables?.[r];if(a!==void 0){let e=Yb(a,Rb,n);if(!(e instanceof Kb))throw Error(`style variables should only be literal values (no expressions!), variable name: ${r}`);let o=e.type;if(typeof a==`string`&&Wb(i,Fb)&&!Wb(i,Pb)?o=Fb:Array.isArray(a)&&a.length===2&&Wb(i,Lb)&&!Wb(i,Ib)&&(o=Lb),i&=o,i===0)throw Error(`the type expected from the var operator (${Hb(t)}) did not have any overlap with the type of the corresponding style variables (${Hb(o)}), variable name: ${r}`)}if(n.variables.has(r)){let e=n.variables.get(r);if(i&=e,i===0)throw Error(`a new type expected from the var operator (${Hb(t)}) did not have any overlap with the previous type expected for it (${Hb(e)}), variable name: ${r}`)}return n.variables.set(r,i),new qb(i,`var`,new Kb(Pb,r))}}function $b(e,t,n){n.featureId=!0}function ex(e,t,n){n.geometryType=!0}function tx(e,t,n){n.mCoordinate=!0}function nx(e,t,n){n.mapState=!0}function rx(e,t,n){let r=e[0];if(e.length!==1)throw Error(`expected no arguments for ${r} operation`);return[]}function ix(e,t){return function(n,r,i){let a=n[0],o=n.length-1;if(e===t){if(o!==e)throw Error(`expected ${e} argument${e===1?``:`s`} for ${a}, got ${o}`)}else if(o<e||o>t){let n=t===1/0?`${e} or more`:`${e} to ${t}`;throw Error(`expected ${n} arguments for ${a}, got ${o}`)}}}function ax(e,t,n){let r=e.length-1,i=Array(r);for(let a=0;a<r;++a){let r=Yb(e[a+1],t,n);i[a]=r}return i}function ox(e){return function(t,n,r){let i=t.length-1,a=Array(i);for(let n=0;n<i;++n){let i=Yb(t[n+1],e,r);a[n]=i}return a}}function sx(){return function(e,t,n){let r=e[0],i=e.length-1,a=Array(i),o=Rb;for(let t=0;t<i;++t){let r=Yb(e[t+1],o,n);o&=r.type}if(o===0)throw Error(`no common type was found among the arguments of ${r}`);for(let t=0;t<i;++t){let r=Yb(e[t+1],o,n);a[t]=r}return a}}function cx(e,t,n){let r=e[0],i=e.length-1;if(i%2==0)throw Error(`expected an odd number of arguments for ${r}, got ${i} instead`)}function lx(e,t,n){let r=e[0],i=e.length-1;if(i%2==1)throw Error(`expected an even number of arguments for operation ${r}, got ${i} instead`)}function ux(e,t,n){let r=e.length-1,i=Yb(e[e.length-1],t,n),a=Pb|Nb|Mb,o=Array(r-2);for(let t=0;t<r-2;t+=2){try{let r=Yb(e[t+2],a,n);a&=r.type}catch(e){throw Error(`failed to parse argument ${t+1} of match expression: ${e.message}`)}if(a===0)throw Error(`no common type was found among the arguments of match expression`)}for(let t=0;t<r-2;t+=2){try{let r=Yb(e[t+2],a,n);o[t]=r}catch(e){throw Error(`failed to parse argument ${t+1} of match expression: ${e.message}`)}try{let r=Yb(e[t+3],i.type,n);o[t+1]=r}catch(e){throw Error(`failed to parse argument ${t+2} of match expression: ${e.message}`)}}return[Yb(e[1],a,n),...o,i]}function dx(e,t,n){let r=e[1],i;switch(r[0]){case`linear`:i=1;break;case`exponential`:let e=r[1];if(typeof e!=`number`||e<=0)throw Error(`expected a number base for exponential interpolation, got ${JSON.stringify(e)} instead`);i=e;break;default:throw Error(`invalid interpolation type: ${JSON.stringify(r)}`)}let a=new Kb(Nb,i),o;try{o=Yb(e[2],Nb,n)}catch(e){throw Error(`failed to parse argument 1 in interpolate expression: ${e.message}`)}let s=Array(e.length-3);for(let r=0;r<s.length;r+=2){try{let t=Yb(e[r+3],Nb,n);s[r]=t}catch(e){throw Error(`failed to parse argument ${r+2} for interpolate expression: ${e.message}`)}try{let i=Yb(e[r+4],t,n);s[r+1]=i}catch(e){throw Error(`failed to parse argument ${r+3} for interpolate expression: ${e.message}`)}}return[a,o,...s]}function fx(e,t,n){let r=Yb(e[e.length-1],t,n),i=Array(e.length-1);for(let t=0;t<i.length-1;t+=2){try{let r=Yb(e[t+1],Mb,n);i[t]=r}catch(e){throw Error(`failed to parse argument ${t} of case expression: ${e.message}`)}try{let a=Yb(e[t+2],r.type,n);i[t+1]=a}catch(e){throw Error(`failed to parse argument ${t+1} of case expression: ${e.message}`)}}return i[i.length-1]=r,i}function px(e,t,n){let r=e[2];if(!Array.isArray(r))throw Error(`the second argument for the "in" operator must be an array`);let i;if(r[0]===`literal`){if(r=r[1],!Array.isArray(r))throw Error(`failed to parse "in" expression: the literal operator must be followed by an array`)}else if(typeof r[0]==`string`)throw Error(`for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions`);i=typeof r[0]==`string`?Pb:Nb;let a=Array(r.length);for(let e=0;e<a.length;e++)try{let t=Yb(r[e],i,n);a[e]=t}catch(t){throw Error(`failed to parse haystack item ${e} for "in" expression: ${t.message}`)}return[Yb(e[1],i,n),...a]}function mx(e,t,n){let r;try{r=Yb(e[1],Nb,n)}catch(e){throw Error(`failed to parse first argument in palette expression: ${e.message}`)}let i=e[2];if(!Array.isArray(i))throw Error(`the second argument of palette must be an array`);let a=Array(i.length);for(let e=0;e<a.length;e++){let t;try{t=Yb(i[e],Fb,n)}catch(t){throw Error(`failed to parse color at index ${e} in palette expression: ${t.message}`)}if(!(t instanceof Kb))throw Error(`the palette color at index ${e} must be a literal value`);a[e]=t}return[r,...a]}function K(...e){return function(t,n,r){let i=t[0],a;for(let i=0;i<e.length;i++){let o=e[i](t,n,r);if(i==e.length-1){if(!o)throw Error(`expected last argument validator to return the parsed args`);a=o}}return new qb(n,i,...a)}}function hx(e,t,n){let r=e[0],i=Xb[r];if(!i)throw Error(`unknown operator: ${r}`);return i(e,t,n)}function gx(e){if(!e)return``;let t=e.getType();switch(t){case`Point`:case`LineString`:case`Polygon`:return t;case`MultiPoint`:case`MultiLineString`:case`MultiPolygon`:return t.substring(5);case`Circle`:return`Polygon`;case`GeometryCollection`:return gx(e.getGeometries()[0]);default:return``}}function _x(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:``}}function vx(e,t,n){return yx(Yb(e,t,n),n)}function yx(e,t){if(e instanceof Kb){if(e.type===Fb&&typeof e.value==`string`){let t=mm(e.value);return function(){return t}}return function(){return e.value}}let n=e.operator;switch(n){case G.Number:case G.String:case G.Coalesce:return bx(e,t);case G.Get:case G.Var:case G.Has:return xx(e,t);case G.Id:return e=>e.featureId;case G.GeometryType:return e=>e.geometryType;case G.Concat:{let n=e.args.map(e=>yx(e,t));return e=>``.concat(...n.map(t=>t(e).toString()))}case G.Resolution:return e=>e.resolution;case G.Any:case G.All:case G.Between:case G.In:case G.Not:return Cx(e,t);case G.Equal:case G.NotEqual:case G.LessThan:case G.LessThanOrEqualTo:case G.GreaterThan:case G.GreaterThanOrEqualTo:return Sx(e,t);case G.Multiply:case G.Divide:case G.Add:case G.Subtract:case G.Clamp:case G.Mod:case G.Pow:case G.Abs:case G.Floor:case G.Ceil:case G.Round:case G.Sin:case G.Cos:case G.Atan:case G.Sqrt:return wx(e,t);case G.Case:return Tx(e,t);case G.Match:return Ex(e,t);case G.Interpolate:return Dx(e,t);case G.ToString:return Ox(e,t);default:throw Error(`Unsupported operator ${n}`)}}function bx(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=yx(e.args[n],t);switch(n){case G.Coalesce:return e=>{for(let t=0;t<r;++t){let n=i[t](e);if(n!=null)return n}throw Error(`Expected one of the values to be non-null`)};case G.Number:case G.String:return e=>{for(let t=0;t<r;++t){let r=i[t](e);if(typeof r===n)return r}throw Error(`Expected one of the values to be a ${n}`)};default:throw Error(`Unsupported assertion operator ${n}`)}}function xx(e,t){let n=e.args[0].value;switch(e.operator){case G.Get:return t=>{let r=e.args,i=t.properties[n];for(let e=1,t=r.length;e<t;++e){let t=r[e].value;i=i[t]}return i};case G.Var:return e=>e.variables[n];case G.Has:return t=>{let r=e.args;if(!(n in t.properties))return!1;let i=t.properties[n];for(let e=1,t=r.length;e<t;++e){let t=r[e].value;if(!i||!Object.hasOwn(i,t))return!1;i=i[t]}return!0};default:throw Error(`Unsupported accessor operator ${e.operator}`)}}function Sx(e,t){let n=e.operator,r=yx(e.args[0],t),i=yx(e.args[1],t);switch(n){case G.Equal:return e=>r(e)===i(e);case G.NotEqual:return e=>r(e)!==i(e);case G.LessThan:return e=>r(e)<i(e);case G.LessThanOrEqualTo:return e=>r(e)<=i(e);case G.GreaterThan:return e=>r(e)>i(e);case G.GreaterThanOrEqualTo:return e=>r(e)>=i(e);default:throw Error(`Unsupported comparison operator ${n}`)}}function Cx(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=yx(e.args[n],t);switch(n){case G.Any:return e=>{for(let t=0;t<r;++t)if(i[t](e))return!0;return!1};case G.All:return e=>{for(let t=0;t<r;++t)if(!i[t](e))return!1;return!0};case G.Between:return e=>{let t=i[0](e),n=i[1](e),r=i[2](e);return t>=n&&t<=r};case G.In:return e=>{let t=i[0](e);for(let n=1;n<r;++n)if(t===i[n](e))return!0;return!1};case G.Not:return e=>!i[0](e);default:throw Error(`Unsupported logical operator ${n}`)}}function wx(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=yx(e.args[n],t);switch(n){case G.Multiply:return e=>{let t=1;for(let n=0;n<r;++n)t*=i[n](e);return t};case G.Divide:return e=>i[0](e)/i[1](e);case G.Add:return e=>{let t=0;for(let n=0;n<r;++n)t+=i[n](e);return t};case G.Subtract:return e=>i[0](e)-i[1](e);case G.Clamp:return e=>{let t=i[0](e),n=i[1](e);if(t<n)return n;let r=i[2](e);return t>r?r:t};case G.Mod:return e=>i[0](e)%i[1](e);case G.Pow:return e=>i[0](e)**+i[1](e);case G.Abs:return e=>Math.abs(i[0](e));case G.Floor:return e=>Math.floor(i[0](e));case G.Ceil:return e=>Math.ceil(i[0](e));case G.Round:return e=>Math.round(i[0](e));case G.Sin:return e=>Math.sin(i[0](e));case G.Cos:return e=>Math.cos(i[0](e));case G.Atan:return r===2?e=>Math.atan2(i[0](e),i[1](e)):e=>Math.atan(i[0](e));case G.Sqrt:return e=>Math.sqrt(i[0](e));default:throw Error(`Unsupported numeric operator ${n}`)}}function Tx(e,t){let n=e.args.length,r=Array(n);for(let i=0;i<n;++i)r[i]=yx(e.args[i],t);return e=>{for(let t=0;t<n-1;t+=2)if(r[t](e))return r[t+1](e);return r[n-1](e)}}function Ex(e,t){let n=e.args.length,r=Array(n);for(let i=0;i<n;++i)r[i]=yx(e.args[i],t);return e=>{let t=r[0](e);for(let i=1;i<n-1;i+=2)if(t===r[i](e))return r[i+1](e);return r[n-1](e)}}function Dx(e,t){let n=e.args.length,r=Array(n);for(let i=0;i<n;++i)r[i]=yx(e.args[i],t);return e=>{let t=r[0](e),i=r[1](e),a,o;for(let s=2;s<n;s+=2){let n=r[s](e),c=r[s+1](e),l=Array.isArray(c);if(l&&(c=sm(c)),n>=i)return s===2?c:l?Ax(t,i,a,o,n,c):kx(t,i,a,o,n,c);a=n,o=c}return o}}function Ox(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=yx(e.args[n],t);switch(n){case G.ToString:return t=>{let n=i[0](t);return e.args[0].type===Fb?gm(n):n.toString()};default:throw Error(`Unsupported convert operator ${n}`)}}function kx(e,t,n,r,i,a){let o=i-n;if(o===0)return r;let s=t-n;return r+(e===1?s/o:(e**+s-1)/(e**+o-1))*(a-r)}function Ax(e,t,n,r,i,a){if(i-n===0)return r;let o=fm(r),s=fm(a),c=s[2]-o[2];return c>180?c-=360:c<-180&&(c+=360),pm([kx(e,t,n,o[0],i,s[0]),kx(e,t,n,o[1],i,s[1]),o[2]+kx(e,t,n,0,i,c),kx(e,t,n,r[3],i,a[3])])}function jx(e){return!0}function Mx(e,t){t??=Jb();let n=Fx(e,t),r=_x();return function(e,i){if(r.properties=e.getPropertiesInternal(),r.resolution=i,t.featureId){let t=e.getId();t===void 0?r.featureId=null:r.featureId=t}return t.geometryType&&(r.geometryType=gx(e.getGeometry())),n(r)}}function Nx(e,t){t??=Jb();let n=e.length,r=Array(n);for(let i=0;i<n;++i)r[i]=Ix(e[i],t);let i=_x(),a=Array(n);return function(e,o){if(i.properties=e.getPropertiesInternal(),i.resolution=o,t.featureId){let t=e.getId();t===void 0?i.featureId=null:i.featureId=t}t.geometryType&&(i.geometryType=gx(e.getGeometry()));let s=0;for(let e=0;e<n;++e){let t=r[e](i);t&&(a[s]=t,s+=1)}return a.length=s,a}}function Px(e,t){if(t??=Jb(),!Array.isArray(e))return Nx([e],t);let n=e.length;if(`style`in e[0]){let r=Array(n);for(let t=0;t<n;++t){let n=e[t];if(!(`style`in n))throw Error(`Expected a list of rules with a style property`);r[t]=n}return Mx(r,t)}return Nx(e,t)}function Fx(e,t){let n=e.length,r=Array(n);for(let i=0;i<n;++i){let n=e[i],a=`filter`in n?vx(n.filter,Mb,t):jx,o;if(Array.isArray(n.style)){let e=n.style.length;o=Array(e);for(let r=0;r<e;++r)o[r]=Ix(n.style[r],t)}else o=[Ix(n.style,t)];r[i]={filter:a,styles:o}}return function(t){let i=[],a=!1;for(let o=0;o<n;++o){let n=r[o].filter;if(n(t)&&!(e[o].else&&a)){a=!0;for(let e of r[o].styles){let n=e(t);n&&i.push(n)}}}return i}}function Ix(e,t){let n=Lx(e,``,t),r=Rx(e,``,t),i=zx(e,t),a=Bx(e,t),o=Gx(e,`z-index`,t);if(!n&&!r&&!i&&!a&&!yf(e))throw Error(`No fill, stroke, point, or text symbolizer properties in style: `+JSON.stringify(e));let s=new Uh;return function(e){let t=!0;if(n){let r=n(e);r&&(t=!1),s.setFill(r)}if(r){let n=r(e);n&&(t=!1),s.setStroke(n)}if(i){let n=i(e);n&&(t=!1),s.setText(n)}if(a){let n=a(e);n&&(t=!1),s.setImage(n)}return o&&s.setZIndex(o(e)),t?null:s}}function Lx(e,t,n){let r;if(t+`fill-pattern-src`in e)r=qx(e,t+`fill-`,n);else{if(e[t+`fill-color`]===`none`)return e=>null;r=Yx(e,t+`fill-color`,n)}if(!r)return null;let i=new Rh;return function(e){let t=r(e);return t===qp?null:(i.setColor(t),i)}}function Rx(e,t,n){let r=Gx(e,t+`stroke-width`,n),i=Yx(e,t+`stroke-color`,n);if(!r&&!i)return null;let a=Kx(e,t+`stroke-line-cap`,n),o=Kx(e,t+`stroke-line-join`,n),s=Xx(e,t+`stroke-line-dash`,n),c=Gx(e,t+`stroke-line-dash-offset`,n),l=Gx(e,t+`stroke-miter-limit`,n),u=Gx(e,t+`stroke-offset`,n),d=new Hh;return function(e){if(i){let t=i(e);if(t===qp)return null;d.setColor(t)}if(r&&d.setWidth(r(e)),a){let t=a(e);if(t!==`butt`&&t!==`round`&&t!==`square`)throw Error(`Expected butt, round, or square line cap`);d.setLineCap(t)}if(o){let t=o(e);if(t!==`bevel`&&t!==`round`&&t!==`miter`)throw Error(`Expected bevel, round, or miter line join`);d.setLineJoin(t)}return s&&d.setLineDash(s(e)),c&&d.setLineDashOffset(c(e)),l&&d.setMiterLimit(l(e)),u&&d.setOffset(u(e)),d}}function zx(e,t){let n=`text-`,r=Kx(e,`text-value`,t);if(!r)return null;let i=Lx(e,n,t),a=Lx(e,`text-background-`,t),o=Rx(e,n,t),s=Rx(e,`text-background-`,t),c=Kx(e,`text-font`,t),l=Gx(e,`text-max-angle`,t),u=Gx(e,`text-offset-x`,t),d=Gx(e,`text-offset-y`,t),f=Jx(e,`text-overflow`,t),p=Kx(e,`text-placement`,t),m=Gx(e,`text-repeat`,t),h=$x(e,`text-scale`,t),g=Jx(e,`text-rotate-with-view`,t),_=Gx(e,`text-rotation`,t),v=Kx(e,`text-align`,t),y=Kx(e,`text-justify`,t),b=Kx(e,`text-baseline`,t),x=Jx(e,`text-keep-upright`,t),S=Xx(e,`text-padding`,t),C=new Yh({declutterMode:oS(e,`text-declutter-mode`)});return function(e){if(C.setText(r(e)),i&&C.setFill(i(e)),a&&C.setBackgroundFill(a(e)),o&&C.setStroke(o(e)),s&&C.setBackgroundStroke(s(e)),c&&C.setFont(c(e)),l&&C.setMaxAngle(l(e)),u&&C.setOffsetX(u(e)),d&&C.setOffsetY(d(e)),f&&C.setOverflow(f(e)),p){let t=p(e);if(t!==`point`&&t!==`line`)throw Error(`Expected point or line for text-placement`);C.setPlacement(t)}if(m&&C.setRepeat(m(e)),h&&C.setScale(h(e)),g&&C.setRotateWithView(g(e)),_&&C.setRotation(_(e)),v){let t=v(e);if(t!==`left`&&t!==`center`&&t!==`right`&&t!==`end`&&t!==`start`)throw Error(`Expected left, right, center, start, or end for text-align`);C.setTextAlign(t)}if(y){let t=y(e);if(t!==`left`&&t!==`right`&&t!==`center`)throw Error(`Expected left, right, or center for text-justify`);C.setJustify(t)}if(b){let t=b(e);if(t!==`bottom`&&t!==`top`&&t!==`middle`&&t!==`alphabetic`&&t!==`hanging`)throw Error(`Expected bottom, top, middle, alphabetic, or hanging for text-baseline`);C.setTextBaseline(t)}return S&&C.setPadding(S(e)),x&&C.setKeepUpright(x(e)),C}}function Bx(e,t){return`icon-src`in e?Vx(e,t):`shape-points`in e?Hx(e,t):`circle-radius`in e?Ux(e,t):null}function Vx(e,t){let n=`icon-src`,r=cS(e[n],n),i=Zx(e,`icon-anchor`,t),a=$x(e,`icon-scale`,t),o=Gx(e,`icon-opacity`,t),s=Zx(e,`icon-displacement`,t),c=Gx(e,`icon-rotation`,t),l=Jx(e,`icon-rotate-with-view`,t),u=rS(e,`icon-anchor-origin`),d=iS(e,`icon-anchor-x-units`),f=iS(e,`icon-anchor-y-units`),p=Wx(e,`icon-color`),m,h=null;p!==void 0&&(Array.isArray(p)&&p.length>0&&typeof p[0]==`string`?h=Yx(e,`icon-color`,t):m=uS(p,`icon-color`));let g=nS(e,`icon-cross-origin`),_=aS(e,`icon-offset`),v=rS(e,`icon-offset-origin`),y=eS(e,`icon-width`),b={src:r,anchorOrigin:u,anchorXUnits:d,anchorYUnits:f,crossOrigin:g,offset:_,offsetOrigin:v,height:eS(e,`icon-height`),width:y,size:tS(e,`icon-size`),declutterMode:oS(e,`icon-declutter-mode`)},x=null;return function(e){if(x)h&&x.setColor(h(e));else{let t=h?h(e):m;x=new Vh(t===void 0?Object.assign({},b):Object.assign({},b,{color:t}))}return o&&x.setOpacity(o(e)),s&&x.setDisplacement(s(e)),c&&x.setRotation(c(e)),l&&x.setRotateWithView(l(e)),a&&x.setScale(a(e)),i&&x.setAnchor(i(e)),x}}function Hx(e,t){let n=`shape-`,r=`shape-points`,i=`shape-radius`,a=lS(e[r],r);if(!(i in e))throw Error(`Expected a number for ${i}`);let o=Gx(e,i,t),s=typeof e[i]==`number`?e[i]:5,c=`shape-radius2`,l=Gx(e,c,t),u=typeof e[c]==`number`?e[c]:void 0,d=Lx(e,n,t),f=Rx(e,n,t),p=$x(e,`shape-scale`,t),m=Zx(e,`shape-displacement`,t),h=Gx(e,`shape-rotation`,t),g=Jx(e,`shape-rotate-with-view`,t),_=new Ih({points:a,radius:s,radius2:u,angle:eS(e,`shape-angle`),declutterMode:oS(e,`shape-declutter-mode`)});return function(e){return o&&_.setRadius(o(e)),l&&_.setRadius2(l(e)),d&&_.setFill(d(e)),f&&_.setStroke(f(e)),m&&_.setDisplacement(m(e)),h&&_.setRotation(h(e)),g&&_.setRotateWithView(g(e)),p&&_.setScale(p(e)),_}}function Ux(e,t){let n=`circle-`,r=Lx(e,n,t),i=Rx(e,n,t),a=Gx(e,`circle-radius`,t),o=$x(e,`circle-scale`,t),s=Zx(e,`circle-displacement`,t),c=Gx(e,`circle-rotation`,t),l=Jx(e,`circle-rotate-with-view`,t),u=new Lh({radius:5,declutterMode:oS(e,`circle-declutter-mode`)});return function(e){return a&&u.setRadius(a(e)),r&&u.setFill(r(e)),i&&u.setStroke(i(e)),s&&u.setDisplacement(s(e)),c&&u.setRotation(c(e)),l&&u.setRotateWithView(l(e)),o&&u.setScale(o(e)),u}}function Wx(e,t){if(!(t in e))return;let n=e[t];return n===void 0?void 0:n}function Gx(e,t,n){let r=Wx(e,t);if(r===void 0)return;let i=vx(r,Nb,n);return function(e){return lS(i(e),t)}}function Kx(e,t,n){let r=Wx(e,t);if(r===void 0)return null;let i=vx(r,Pb,n);return function(e){return cS(i(e),t)}}function qx(e,t,n){let r=Kx(e,t+`pattern-src`,n),i=Qx(e,t+`pattern-offset`,n),a=Qx(e,t+`pattern-size`,n),o=Yx(e,t+`color`,n);return function(e){return{src:r(e),offset:i&&i(e),size:a&&a(e),color:o&&o(e)}}}function Jx(e,t,n){let r=Wx(e,t);if(r===void 0)return null;let i=vx(r,Mb,n);return function(e){let n=i(e);if(typeof n!=`boolean`)throw Error(`Expected a boolean for ${t}`);return n}}function Yx(e,t,n){let r=Wx(e,t);if(r===void 0)return null;let i=vx(r,Fb,n);return function(e){return uS(i(e),t)}}function Xx(e,t,n){let r=Wx(e,t);if(r===void 0)return null;if(Array.isArray(r)&&(r.length===0||typeof r[0]!=`string`)){let e=r.map((e,r)=>{if(typeof e==`number`)return()=>e;let i=vx(e,Nb,n);return function(e){return lS(i(e),`${t}[${r}]`)}});return function(t){let n=Array(e.length);for(let r=0;r<e.length;++r)n[r]=e[r](t);return n}}let i=vx(r,Ib,n);return function(e){return sS(i(e),t)}}function Zx(e,t,n){let r=Wx(e,t);if(r===void 0)return null;let i=vx(r,Ib,n);return function(e){let n=sS(i(e),t);if(n.length!==2)throw Error(`Expected two numbers for ${t}`);return n}}function Qx(e,t,n){let r=Wx(e,t);if(r===void 0)return null;let i=vx(r,Ib,n);return function(e){return dS(i(e),t)}}function $x(e,t,n){let r=Wx(e,t);if(r===void 0)return null;let i=vx(r,Ib|Nb,n);return function(e){return fS(i(e),t)}}function eS(e,t){let n=e[t];if(n!==void 0){if(typeof n!=`number`)throw Error(`Expected a number for ${t}`);return n}}function tS(e,t){let n=e[t];if(n!==void 0){if(typeof n==`number`)return Ph(n);if(!Array.isArray(n)||n.length!==2||typeof n[0]!=`number`||typeof n[1]!=`number`)throw Error(`Expected a number or size array for ${t}`);return n}}function nS(e,t){let n=e[t];if(n!==void 0){if(typeof n!=`string`)throw Error(`Expected a string for ${t}`);return n}}function rS(e,t){let n=e[t];if(n!==void 0){if(n!==`bottom-left`&&n!==`bottom-right`&&n!==`top-left`&&n!==`top-right`)throw Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);return n}}function iS(e,t){let n=e[t];if(n!==void 0){if(n!==`pixels`&&n!==`fraction`)throw Error(`Expected pixels or fraction for ${t}`);return n}}function aS(e,t){let n=e[t];if(n!==void 0)return sS(n,t)}function oS(e,t){let n=e[t];if(n!==void 0){if(typeof n!=`string`)throw Error(`Expected a string for ${t}`);if(n!==`declutter`&&n!==`obstacle`&&n!==`none`)throw Error(`Expected declutter, obstacle, or none for ${t}`);return n}}function sS(e,t){if(!Array.isArray(e))throw Error(`Expected an array for ${t}`);let n=e.length;for(let r=0;r<n;++r)if(typeof e[r]!=`number`)throw Error(`Expected an array of numbers for ${t}`);return e}function cS(e,t){if(typeof e!=`string`)throw Error(`Expected a string for ${t}`);return e}function lS(e,t){if(typeof e!=`number`)throw Error(`Expected a number for ${t}`);return e}function uS(e,t){if(typeof e==`string`)return e;let n=sS(e,t),r=n.length;if(r<3||r>4)throw Error(`Expected a color with 3 or 4 values for ${t}`);return n}function dS(e,t){let n=sS(e,t);if(n.length!==2)throw Error(`Expected an array of two numbers for ${t}`);return n}function fS(e,t){return typeof e==`number`?e:dS(e,t)}var pS={RENDER_ORDER:`renderOrder`},mS=class extends db{constructor(e){e||={};let t=Object.assign({},e);delete t.style,delete t.renderBuffer,delete t.updateWhileAnimating,delete t.updateWhileInteracting,super(t),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer===void 0?100:e.renderBuffer,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0&&e.updateWhileAnimating,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0&&e.updateWhileInteracting}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(pS.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,t){let n=this.getDeclutter();n in e.declutter||(e.declutter[n]=new gb(9)),this.getRenderer().renderDeclutter(e,t)}setRenderOrder(e){this.set(pS.RENDER_ORDER,e)}setStyle(e){this.style_=e===void 0?Kh:e;let t=hS(e);this.styleFunction_=e===null?void 0:Wh(t),this.changed()}setDeclutter(e){this.declutter_=e?String(e):void 0,this.changed()}};function hS(e){if(e===void 0)return Kh;if(!e)return null;if(typeof e==`function`||e instanceof Uh)return e;if(Array.isArray(e)&&e.length===0)return[];if(Array.isArray(e)&&e[0]instanceof Uh){let t=e.length,n=Array(t);for(let r=0;r<t;++r){let t=e[r];if(!(t instanceof Uh))throw Error(`Expected a list of style instances`);n[r]=t}return n}return Px(e)}var gS=class extends Pm{constructor(e,t,n,r){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=r}},_S=class extends bm{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){U()}calculateMatrices2D(e){let t=e.viewState,n=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;tg(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),ng(r,n)}forEachFeatureAtCoordinate(e,t,n,r,i,a,o,s){let c,l=t.viewState;function u(e,t,n,r){return i.call(a,t,e?n:null,r)}let d=l.projection,f=Yd(e.slice(),d),p=[[0,0]];if(d.canWrapX()&&r){let e=Td(d.getExtent());p.push([-e,0],[e,0])}let m=t.layerStatesArray,h=m.length,g=[],_=[];for(let r=0;r<p.length;r++)for(let i=h-1;i>=0;--i){let a=m[i],d=a.layer;if(d.hasRenderer()&&fb(a,l)&&o.call(s,d)){let i=d.getRenderer(),o=d.getSource();if(i&&o){let s=o.getWrapX()?f:e,l=u.bind(null,a.managed);_[0]=s[0]+p[r][0],_[1]=s[1]+p[r][1],c=i.forEachFeatureAtCoordinate(_,t,n,l,g)}if(c)return c}}if(g.length===0)return;let v=1/g.length;return g.forEach((e,t)=>e.distanceSq+=t*v),g.sort((e,t)=>e.distanceSq-t.distanceSq),g.some(e=>c=e.callback(e.feature,e.layer,e.geometry)),c}hasFeatureAtCoordinate(e,t,n,r,i,a){return this.forEachFeatureAtCoordinate(e,t,n,r,km,this,i,a)!==void 0}getMap(){return this.map_}renderFrame(e){U()}scheduleExpireIconCache(e){Vm.canExpireCache()&&e.postRenderFunctions.push(vS)}};function vS(e,t){Vm.expire()}var yS=class extends _S{constructor(e){super(e),this.fontChangeListenerKey_=_m(vh,qm.PROPERTYCHANGE,e.redrawText,e),this.element_=Np?Gp():document.createElement(`div`);let t=this.element_.style;t.position=`absolute`,t.width=`100%`,t.height=`100%`,t.zIndex=`0`,this.element_.className=nh+` ol-layers`;let n=e.getViewport();n&&n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,t){let n=this.getMap();if(n.hasListener(e)){let r=new gS(e,void 0,t);n.dispatchEvent(r)}}disposeInternal(){ym(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&=(this.element_.style.display=`none`,!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(ub.PRECOMPOSE,e);let t=e.layerStatesArray.sort((e,t)=>e.zIndex-t.zIndex);t.some(e=>e.layer instanceof mS&&e.layer.getDeclutter())&&(e.declutter={});let n=e.viewState;this.children_.length=0;let r=this.getMap().getTargetElement(),i;Kp(r)&&(i=r.getContext(`2d`),i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,r.width,r.height));let a=[],o=i?r:null;for(let r=0,i=t.length;r<i;++r){let i=t[r];e.layerIndex=r;let s=i.layer,c=s.getSourceState();if(!fb(i,n)||c!=`ready`&&c!=`undefined`){s.unrender();continue}let l=s.render(e,o);l&&(l!==o&&(this.children_.push(l),o=l),a.push(i))}this.declutter(e,a),Wp(this.element_,this.children_);for(let e of i?this.children_:[]){let t=e.firstElementChild||e,n=e.style.backgroundColor;if(n&&(!Kp(t)||t.width>0)&&(i.fillStyle=n,i.fillRect(0,0,i.canvas.width,i.canvas.height)),!Kp(t)||t.width===0)continue;i.save();let r=e.style.opacity||t.style.opacity;i.globalAlpha=r===``?1:Number(r);let a=t.style.transform;if(a)i.transform(...og(a));else{let e=parseFloat(t.style.width)/t.width,n=parseFloat(t.style.height)/t.height;i.transform(e,0,0,n,0,0)}i.drawImage(t,0,0),i.restore()}this.dispatchRenderEvent(ub.POSTCOMPOSE,e),this.renderedVisible_||=(this.element_.style.display=``,!0),this.scheduleExpireIconCache(e)}declutter(e,t){if(e.declutter){for(let n=t.length-1;n>=0;--n){let r=t[n],i=r.layer;i.getDeclutter()&&i.renderDeclutter(e,r)}t.forEach(t=>t.layer.renderDeferred(e))}}};function bS(e){if(e instanceof db){e.setMapInternal(null);return}e instanceof lb&&e.getLayers().forEach(bS)}function xS(e,t){if(e instanceof db){e.setMapInternal(t);return}if(e instanceof lb){let n=e.getLayers().getArray();for(let e=0,r=n.length;e<r;++e)xS(n[e],t)}}var SS=class extends $m{constructor(e){super(),e||={},this.on,this.once,this.un;let t=CS(e);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading===void 0?16:e.maxTilesLoading,this.pixelRatio_=e.pixelRatio===void 0?Mp:e.pixelRatio,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=Zh(),this.pixelToCoordinateTransform_=Zh(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,Np||(this.viewport_=document.createElement(`div`),this.viewport_.className=`ol-viewport`+(`ontouchstart`in window?` ol-touch`:``),this.viewport_.style.position=`relative`,this.viewport_.style.overflow=`hidden`,this.viewport_.style.width=`100%`,this.viewport_.style.height=`100%`,this.overlayContainer_=document.createElement(`div`),this.overlayContainer_.style.position=`absolute`,this.overlayContainer_.style.zIndex=`0`,this.overlayContainer_.style.width=`100%`,this.overlayContainer_.style.height=`100%`,this.overlayContainer_.style.pointerEvents=`none`,this.overlayContainer_.className=`ol-overlaycontainer`,this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement(`div`),this.overlayContainerStopEvent_.style.position=`absolute`,this.overlayContainerStopEvent_.style.zIndex=`0`,this.overlayContainerStopEvent_.style.width=`100%`,this.overlayContainerStopEvent_.style.height=`100%`,this.overlayContainerStopEvent_.style.pointerEvents=`none`,this.overlayContainerStopEvent_.className=`ol-overlaycontainer-stopevent`,this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,Np||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=t.controls||(Np?new Pv:by()),this.interactions=t.interactions||(Np?new Pv:rb({onFocusOnly:!0})),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Uv(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Bv.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Bv.VIEW,this.handleViewChanged_),this.addChangeListener(Bv.SIZE,this.handleSizeChanged_),this.addChangeListener(Bv.TARGET,this.handleTargetChanged_),this.setProperties(t.values);let n=this;e.view&&!(e.view instanceof ly)&&e.view.then(function(e){n.setView(new ly(e))}),this.controls.addEventListener(jv.ADD,e=>{e.element.setMap(this)}),this.controls.addEventListener(jv.REMOVE,e=>{e.element.setMap(null)}),this.interactions.addEventListener(jv.ADD,e=>{e.element.setMap(this)}),this.interactions.addEventListener(jv.REMOVE,e=>{e.element.setMap(null)}),this.overlays_.addEventListener(jv.ADD,e=>{this.addOverlayInternal_(e.element)}),this.overlays_.addEventListener(jv.REMOVE,e=>{let t=e.element.getId();t!==void 0&&delete this.overlayIdIndex_[t.toString()],e.element.setMap(null)}),this.controls.forEach(e=>{e.setMap(this)}),this.interactions.forEach(e=>{e.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){xS(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){let t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;let r=this.getCoordinateFromPixelInternal(e);n=n===void 0?{}:n;let i=n.hitTolerance===void 0?0:n.hitTolerance,a=n.layerFilter===void 0?km:n.layerFilter,o=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,i,o,t,null,a,null)}getFeaturesAtPixel(e,t){let n=[];return this.forEachFeatureAtPixel(e,function(e){n.push(e)},t),n}getAllLayers(){let e=[];function t(n){n.forEach(function(n){n instanceof lb?t(n.getLayers()):e.push(n)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;let n=this.getCoordinateFromPixelInternal(e);t=t===void 0?{}:t;let r=t.layerFilter===void 0?km:t.layerFilter,i=t.hitTolerance===void 0?0:t.hitTolerance,a=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,i,a,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){let t=this.viewport_.getBoundingClientRect(),n=this.getSize(),r=t.width/n[0],i=t.height/n[1],a=`changedTouches`in e?e.changedTouches[0]:e;return[(a.clientX-t.left)/r,(a.clientY-t.top)/i]}getTarget(){return this.get(Bv.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return Cp(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){let t=this.frameState_;return t?eg(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){let t=this.overlayIdIndex_[e.toString()];return t===void 0?null:t}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Bv.LAYERGROUP)}setLayers(e){let t=this.getLayerGroup();if(e instanceof Pv){t.setLayers(e);return}let n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){let n=e[t];if(!n.visible)continue;let r=n.layer.getRenderer();if(r&&!r.ready)return!0;let i=n.layer.getSource();if(i&&i.loading)return!0}return!1}getPixelFromCoordinate(e){let t=wp(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){let t=this.frameState_;return t?eg(t.coordinateToPixelTransform,e.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(e){this.pixelRatio_!==e&&(this.pixelRatio_=e,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(Bv.SIZE)}getView(){return this.get(Bv.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,r){return Wv(this.frameState_,e,t,n,r)}handleBrowserEvent(e,t){t||=e.type;let n=new Iv(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;let t=e.originalEvent,n=t.type;if(n===Rv.POINTERDOWN||n===H.WHEEL||n===H.KEYDOWN){let e=this.getOwnerDocument(),n=this.viewport_.getRootNode?this.viewport_.getRootNode():e,r=t.target,i=n instanceof ShadowRoot?n.host===r?n.host.ownerDocument:n:n===e?e.documentElement:n;if(this.overlayContainerStopEvent_.contains(r)||!i.contains(r))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){let t=this.getInteractions().getArray().slice();for(let n=t.length-1;n>=0;n--){let r=t[n];if(r.getMap()===this&&r.getActive()&&this.getTargetElement()&&(!r.handleEvent(e)||e.propagationStopped))break}}}handlePostRender(){let e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let n=this.maxTilesLoading_,r=n,i=e?e.viewHints:void 0,a=i?i[Gv.ANIMATING]||i[Gv.INTERACTING]:!1;if(a){let t=Date.now()-e.time>8;n=t?0:8,r=t?0:2}t.getTilesLoading()<n&&(a&&t.reprioritize(),t.loadMoreTiles(n,r))}e&&this.renderer_&&!e.animate&&(this.renderComplete_?(this.hasListener(ub.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(ub.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Fv(Ov.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Fv(Ov.LOADSTART,this,e))));let n=this.postRenderFunctions_;if(e)for(let t=0,r=n.length;t<r;++t)n[t](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let e=0,t=this.targetChangeHandlerKeys_.length;e<t;++e)ym(this.targetChangeHandlerKeys_[e]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(H.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(H.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!Kp(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let e=this.targetElement_.getRootNode();e instanceof ShadowRoot&&this.resizeObserver_.unobserve(e.host),this.setSize(void 0)}let e=this.getTarget(),t=typeof e==`string`?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&=(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),null),this.animationDelayKey_&&=(cancelAnimationFrame(this.animationDelayKey_),void 0);else{if(Kp(t)||t.appendChild(this.viewport_),this.renderer_||=new yS(this),!Kp(t)){this.mapBrowserEventHandler_=new zv(this,this.moveTolerance_);for(let e in Lv)this.mapBrowserEventHandler_.addEventListener(Lv[e],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(H.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(H.WHEEL,this.boundHandleBrowserEvent_,Fp?{passive:!1}:!1);let e;if(this.keyboardEventTarget_)e=this.keyboardEventTarget_;else{let n=t.getRootNode();e=n instanceof ShadowRoot?n.host:t}if(this.targetChangeHandlerKeys_=[_m(e,H.KEYDOWN,this.handleBrowserEvent,this),_m(e,H.KEYPRESS,this.handleBrowserEvent,this)],!Kp(t)){let e=t.getRootNode();e instanceof ShadowRoot&&this.resizeObserver_.observe(e.host),this.resizeObserver_?.observe(t)}}this.updateSize()}}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&=(ym(this.viewPropertyListenerKey_),null),this.viewChangeListenerKey_&&=(ym(this.viewChangeListenerKey_),null);let e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=_m(e,qm.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=_m(e,H.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&=(this.layerGroupPropertyListenerKeys_.forEach(ym),null);let e=this.getLayerGroup();e&&(this.handleLayerAdd_(new sb(`addlayer`,e)),this.layerGroupPropertyListenerKeys_=[_m(e,qm.PROPERTYCHANGE,this.render,this),_m(e,H.CHANGE,this.render,this),_m(e,`addlayer`,this.handleLayerAdd_,this),_m(e,`removelayer`,this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let e=this.frameState_.layerStatesArray;for(let t=0,n=e.length;t<n;++t){let n=e[t].layer;n.hasRenderer()&&n.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){bS(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){let t=this.getSize(),n=this.getView(),r=this.frameState_,i=null;if(t!==void 0&&Mh(t)&&n&&n.isDef()){let r=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=n.getState();if(i={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:vd(a.center,a.resolution,a.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:r,wantedTiles:{},mapId:Zm(this),renderTargets:{}},a.nextCenter&&a.nextResolution){let e=isNaN(a.nextRotation)?a.rotation:a.nextRotation;i.nextExtent=vd(a.nextCenter,a.nextResolution,e,t)}}this.frameState_=i,this.renderer_.renderFrame(i),i&&(i.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,i.postRenderFunctions),r&&(!this.previousExtent_||!Dd(this.previousExtent_)&&!sd(i.extent,this.previousExtent_))&&(this.dispatchEvent(new Fv(Ov.MOVESTART,this,r)),this.previousExtent_=id(this.previousExtent_)),this.previousExtent_&&!i.viewHints[Gv.ANIMATING]&&!i.viewHints[Gv.INTERACTING]&&!sd(i.extent,this.previousExtent_)&&(this.dispatchEvent(new Fv(Ov.MOVEEND,this,i)),Xu(i.extent,this.previousExtent_))),this.dispatchEvent(new Fv(Ov.POSTRENDER,this,i)),this.renderComplete_=(this.hasListener(Ov.LOADSTART)||this.hasListener(Ov.LOADEND)||this.hasListener(ub.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0)}setLayerGroup(e){let t=this.getLayerGroup();t&&this.handleLayerRemove_(new sb(`removelayer`,t)),this.set(Bv.LAYERGROUP,e)}setSize(e){this.set(Bv.SIZE,e)}setTarget(e){this.set(Bv.TARGET,e)}setView(e){if(!e||e instanceof ly){this.set(Bv.VIEW,e);return}this.set(Bv.VIEW,new ly);let t=this;e.then(function(e){t.setView(new ly(e))})}updateSize(){let e=this.getTargetElement(),t;if(e){let n,r;if(Kp(e)){let t=e.getContext(`2d`).getTransform();n=e.width/t.a,r=e.height/t.d}else{let t=getComputedStyle(e);n=e.offsetWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)-parseFloat(t.borderRightWidth),r=e.offsetHeight-parseFloat(t.borderTopWidth)-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)-parseFloat(t.borderBottomWidth)}!isNaN(n)&&!isNaN(r)&&(t=[Math.max(0,n),Math.max(0,r)],!Mh(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&Ku(`No map visible because the map container's width or height are 0.`))}let n=this.getSize();t&&(!n||!Dm(t,n))&&(this.updateViewportSize_(t),this.setSize(t))}updateViewportSize_(e){let t=this.getView();t&&t.setViewportSize(e)}};function CS(e){let t=null;e.keyboardEventTarget!==void 0&&(t=typeof e.keyboardEventTarget==`string`?document.getElementById(e.keyboardEventTarget):e.keyboardEventTarget);let n={},r=e.layers&&typeof e.layers.getLayers==`function`?e.layers:new lb({layers:e.layers});n[Bv.LAYERGROUP]=r,n[Bv.TARGET]=e.target,n[Bv.VIEW]=e.view instanceof ly?e.view:new ly;let i;e.controls!==void 0&&(Array.isArray(e.controls)?i=new Pv(e.controls.slice()):(zh(typeof e.controls.getArray==`function`,"Expected `controls` to be an array or an `ol/Collection.js`"),i=e.controls));let a;e.interactions!==void 0&&(Array.isArray(e.interactions)?a=new Pv(e.interactions.slice()):(zh(typeof e.interactions.getArray==`function`,"Expected `interactions` to be an array or an `ol/Collection.js`"),a=e.interactions));let o;return e.overlays===void 0?o=new Pv:Array.isArray(e.overlays)?o=new Pv(e.overlays.slice()):(zh(typeof e.overlays.getArray==`function`,"Expected `overlays` to be an array or an `ol/Collection.js`"),o=e.overlays),{controls:i,interactions:a,keyboardEventTarget:t,overlays:o,values:n}}var wS=class extends Fm{constructor(e,t,n){super(),n||={},this.tileCoord=e,this.state=t,this.key=``,this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(H.CHANGE)}release(){this.setState(W.EMPTY)}getKey(){return this.key+`/`+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==W.EMPTY){if(this.state!==W.ERROR&&this.state>e)throw Error(`Tile load sequence violation`);this.state=e,this.changed()}}load(){U()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;let r=t-n+1e3/60;return r>=this.transition_?1:Yv(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}disposeInternal(){this.release(),super.disposeInternal()}};function TS(e){return e instanceof Image||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageBitmap?e:null}var ES=Error(`disposed`),DS=[256,256],OS=class extends wS{constructor(e){let t=W.IDLE;super(e.tileCoord,t,{transition:e.transition,interpolate:e.interpolate}),this.loader_=e.loader,this.data_=null,this.error_=null,this.size_=e.size||null,this.controller_=e.controller||null}getSize(){if(this.size_)return this.size_;let e=TS(this.data_);return e?[e.width,e.height]:DS}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==W.IDLE&&this.state!==W.ERROR)return;this.state=W.LOADING,this.changed();let e=this;this.loader_().then(function(t){e.data_=t,e.state=W.LOADED,e.changed()}).catch(function(t){e.error_=t,e.state=W.ERROR,e.changed()})}disposeInternal(){this.controller_&&=(this.controller_.abort(ES),null),super.disposeInternal()}},kS=class extends wS{constructor(e,t,n,r,i,a){super(e,t,a),this.crossOrigin_=r?.crossOrigin,this.referrerPolicy_=r?.referrerPolicy,this.src_=n,this.key=n,this.image_,Np?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=i}getImage(){return this.image_}setImage(e){this.image_=e,this.state=W.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=W.ERROR,this.unlistenImage_(),this.image_=AS(),this.changed()}handleImageLoad_(){if(Np)this.state=W.LOADED;else{let e=this.image_;this.state=e.naturalWidth&&e.naturalHeight?W.LOADED:W.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==W.ERROR&&(this.state=W.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==W.IDLE&&(this.state=W.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Im(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&=(this.unlisten_(),null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}};function AS(){let e=Ip(1,1);return e.fillStyle=`rgba(0,0,0,0)`,e.fillRect(0,0,1,1),e.canvas}var jS=class{constructor(e,t,n,r){this.minX=e,this.maxX=t,this.minY=n,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}};function MS(e,t,n,r,i){return i===void 0?new jS(e,t,n,r):(i.minX=e,i.maxX=t,i.minY=n,i.maxY=r,i)}var NS,PS=[];function FS(e,t,n,r,i){e.beginPath(),e.moveTo(0,0),e.lineTo(t,n),e.lineTo(r,i),e.closePath(),e.save(),e.clip(),e.fillRect(0,0,Math.max(t,r)+1,Math.max(n,i)),e.restore()}function IS(e,t){return Math.abs(e[t*4]-210)>2||Math.abs(e[t*4+3]-191.25)>2}function LS(){if(NS===void 0){let e=Ip(6,6,PS);e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(210, 0, 0, 0.75)`,FS(e,4,5,4,0),FS(e,4,5,0,5);let t=e.getImageData(0,0,3,3).data;NS=IS(t,0)||IS(t,4)||IS(t,8),zp(e),PS.push(e.canvas)}return NS}function RS(e,t,n,r){let i=bp(n,t,e),a=up(t,r,n),o=t.getMetersPerUnit();o!==void 0&&(a*=o);let s=e.getMetersPerUnit();s!==void 0&&(a/=s);let c=e.getExtent();if(!c||Qu(c,i)){let t=up(e,a,i)/a;isFinite(t)&&t>0&&(a/=t)}return a}function zS(e,t,n,r){let i=RS(e,t,gd(n),r);return(!isFinite(i)||i<=0)&&fd(n,function(n){return i=RS(e,t,n,r),isFinite(i)&&i>0}),i}function BS(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=Ip(Math.round(n*e),Math.round(n*t),PS);if(d||(m.imageSmoothingEnabled=!1),c.length===0)return m.canvas;m.scale(n,n);function h(e){return Math.round(e*n)/n}m.globalCompositeOperation=`lighter`;let g=nd();c.forEach(function(e,t,n){cd(g,e.extent)});let _,v=n/r,y=(d?1:1+2**-24)/v;if(!f||c.length!==1||l!==0){if(_=Ip(Math.round(Td(g)*v),Math.round(bd(g)*v),PS),d||(_.imageSmoothingEnabled=!1),i&&p){let e=(i[0]-g[0])*v,t=-(i[3]-g[3])*v,n=Td(i)*v,r=bd(i)*v;_.rect(e,t,n,r),_.clip()}c.forEach(function(e,t,n){if(e.image.width>0&&e.image.height>0){if(e.clipExtent){_.save();let t=(e.clipExtent[0]-g[0])*v,n=-(e.clipExtent[3]-g[3])*v,r=Td(e.clipExtent)*v,i=bd(e.clipExtent)*v;_.rect(d?t:Math.round(t),d?n:Math.round(n),d?r:Math.round(t+r)-Math.round(t),d?i:Math.round(n+i)-Math.round(n)),_.clip()}let t=(e.extent[0]-g[0])*v,n=-(e.extent[3]-g[3])*v,r=Td(e.extent)*v,i=bd(e.extent)*v;_.drawImage(e.image,l,l,e.image.width-2*l,e.image.height-2*l,d?t:Math.round(t),d?n:Math.round(n),d?r:Math.round(t+r)-Math.round(t),d?i:Math.round(n+i)-Math.round(n)),e.clipExtent&&_.restore()}})}let b=Cd(o);return s.getTriangles().forEach(function(e,t,n){let r=e.source,i=e.target,o=r[0][0],s=r[0][1],l=r[1][0],u=r[1][1],f=r[2][0],p=r[2][1],v=h((i[0][0]-b[0])/a),x=h(-(i[0][1]-b[1])/a),S=h((i[1][0]-b[0])/a),C=h(-(i[1][1]-b[1])/a),w=h((i[2][0]-b[0])/a),T=h(-(i[2][1]-b[1])/a),E=o,D=s;o=0,s=0,l-=E,u-=D,f-=E,p-=D;let ee=Id([[l,u,0,0,S-v],[f,p,0,0,w-v],[0,0,l,u,C-x],[0,0,f,p,T-x]]);if(!ee)return;if(m.save(),m.beginPath(),LS()||!d){m.moveTo(S,C);let e=v-S,t=x-C;for(let n=0;n<4;n++)m.lineTo(S+h((n+1)*e/4),C+h(n*t/3)),n!=3&&m.lineTo(S+h((n+1)*e/4),C+h((n+1)*t/3));m.lineTo(w,T)}else m.moveTo(S,C),m.lineTo(v,x),m.lineTo(w,T);m.clip(),m.transform(ee[0],ee[2],ee[1],ee[3],v,x),m.translate(g[0]-E,g[3]-D);let O;if(_)O=_.canvas,m.scale(y,-y);else{let e=c[0],t=e.extent;O=e.image,m.scale(Td(t)/O.width,-bd(t)/O.height)}m.drawImage(O,0,0),m.restore()}),_&&(zp(_),PS.push(_.canvas)),u&&(m.save(),m.globalCompositeOperation=`source-over`,m.strokeStyle=`black`,m.lineWidth=1,s.getTriangles().forEach(function(e,t,n){let r=e.target,i=(r[0][0]-b[0])/a,o=-(r[0][1]-b[1])/a,s=(r[1][0]-b[0])/a,c=-(r[1][1]-b[1])/a,l=(r[2][0]-b[0])/a,u=-(r[2][1]-b[1])/a;m.beginPath(),m.moveTo(s,c),m.lineTo(i,o),m.lineTo(l,u),m.closePath(),m.stroke()}),m.restore()),m.canvas}var VS=10,HS=.25,US=class{constructor(e,t,n,r,i,a,o){this.sourceProj_=e,this.targetProj_=t;let s={},c=o?mp(e=>eg(o,bp(e,this.targetProj_,this.sourceProj_))):yp(this.targetProj_,this.sourceProj_);this.transformInv_=function(e){let t=e[0]+`/`+e[1];return s[t]||(s[t]=c(e)),s[t]},this.maxSourceExtent_=r,this.errorThresholdSquared_=i*i,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&Td(r)>=Td(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?Td(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?Td(this.targetProj_.getExtent()):null;let l=Cd(n),u=wd(n),d=hd(n),f=md(n),p=this.transformInv_(l),m=this.transformInv_(u),h=this.transformInv_(d),g=this.transformInv_(f),_=VS+(a?Math.max(0,Math.ceil(Math.log2(pd(n)/(a*a*256*256)))):0);if(this.addQuad_(l,u,d,f,p,m,h,g,_),this.wrapsXInSource_){let e=1/0;this.triangles_.forEach(function(t,n,r){e=Math.min(e,t.source[0][0],t.source[1][0],t.source[2][0])}),this.triangles_.forEach(t=>{if(Math.max(t.source[0][0],t.source[1][0],t.source[2][0])-e>this.sourceWorldWidth_/2){let n=[[t.source[0][0],t.source[0][1]],[t.source[1][0],t.source[1][1]],[t.source[2][0],t.source[2][1]]];n[0][0]-e>this.sourceWorldWidth_/2&&(n[0][0]-=this.sourceWorldWidth_),n[1][0]-e>this.sourceWorldWidth_/2&&(n[1][0]-=this.sourceWorldWidth_),n[2][0]-e>this.sourceWorldWidth_/2&&(n[2][0]-=this.sourceWorldWidth_);let r=Math.min(n[0][0],n[1][0],n[2][0]);Math.max(n[0][0],n[1][0],n[2][0])-r<this.sourceWorldWidth_/2&&(t.source=n)}})}s={}}addTriangle_(e,t,n,r,i,a){this.triangles_.push({source:[r,i,a],target:[e,t,n]})}addQuad_(e,t,n,r,i,a,o,s,c){let l=Ju([i,a,o,s]),u=this.sourceWorldWidth_?Td(l)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&u>.5&&u<1,p=!1;if(c>0&&(this.targetProj_.isGlobal()&&this.targetWorldWidth_&&(p=Td(Ju([e,t,n,r]))/this.targetWorldWidth_>HS||p),!f&&this.sourceProj_.isGlobal()&&u&&(p=u>HS||p)),!p&&this.maxSourceExtent_&&isFinite(l[0])&&isFinite(l[1])&&isFinite(l[2])&&isFinite(l[3])&&!Ed(l,this.maxSourceExtent_))return;let m=0;if(!p&&(!isFinite(i[0])||!isFinite(i[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(s[0])||!isFinite(s[1]))){if(c>0)p=!0;else if(m=(!isFinite(i[0])||!isFinite(i[1])?8:0)+(!isFinite(a[0])||!isFinite(a[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+ +(!isFinite(s[0])||!isFinite(s[1])),m!=1&&m!=2&&m!=4&&m!=8)return}if(c>0){if(!p){let t=[(e[0]+n[0])/2,(e[1]+n[1])/2],r=this.transformInv_(t),a;a=f?(zd(i[0],d)+zd(o[0],d))/2-zd(r[0],d):(i[0]+o[0])/2-r[0];let s=(i[1]+o[1])/2-r[1];p=a*a+s*s>this.errorThresholdSquared_}if(p){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){let l=[(t[0]+n[0])/2,(t[1]+n[1])/2],u=this.transformInv_(l),d=[(r[0]+e[0])/2,(r[1]+e[1])/2],f=this.transformInv_(d);this.addQuad_(e,t,l,d,i,a,u,f,c-1),this.addQuad_(d,l,n,r,f,u,o,s,c-1)}else{let l=[(e[0]+t[0])/2,(e[1]+t[1])/2],u=this.transformInv_(l),d=[(n[0]+r[0])/2,(n[1]+r[1])/2],f=this.transformInv_(d);this.addQuad_(e,l,d,r,i,u,f,s,c-1),this.addQuad_(l,t,n,d,u,a,o,f,c-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}m&11||this.addTriangle_(e,n,r,i,o,s),m&14||this.addTriangle_(e,n,t,i,o,a),m&&(m&13||this.addTriangle_(t,r,e,a,s,i),m&7||this.addTriangle_(t,r,n,a,s,o))}calculateSourceExtent(){let e=nd();return this.triangles_.forEach(function(t,n,r){let i=t.source;ld(e,i[0]),ld(e,i[1]),ld(e,i[2])}),e}getTriangles(){return this.triangles_}},WS=.5,GS=class extends wS{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(i,W.IDLE,d),this.renderEdges_=u!==void 0&&u,this.pixelRatio_=o,this.gutter_=s,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=a||i,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=e.canWrapX()?e.getExtent():void 0;let f=r.getTileCoordExtent(this.wrappedTileCoord_),p=this.targetTileGrid_.getExtent(),m=this.sourceTileGrid_.getExtent(),h=p?xd(f,p):f;if(pd(h)===0){this.state=W.EMPTY;return}let g=e.getExtent();g&&(m=m?xd(m,g):g);let _=r.getResolution(this.wrappedTileCoord_[0]),v=zS(e,n,h,_);if(!isFinite(v)||v<=0){this.state=W.EMPTY;return}let y=l===void 0?WS:l;if(this.triangulation_=new US(e,n,h,m,v*y,_),this.triangulation_.getTriangles().length===0){this.state=W.EMPTY;return}this.sourceZ_=t.getZForResolution(v);let b=this.triangulation_.calculateSourceExtent();if(m&&(e.canWrapX()?(b[1]=Nd(b[1],m[1],m[3]),b[3]=Nd(b[3],m[1],m[3])):b=xd(b,m)),!pd(b))this.state=W.EMPTY;else{let n=0,r=0;e.canWrapX()&&(n=Td(g),r=Math.floor((b[0]-g[0])/n)),jd(b.slice(),e,!0).forEach(e=>{let i=t.getTileRangeForExtentAndZ(e,this.sourceZ_);for(let e=i.minX;e<=i.maxX;e++)for(let t=i.minY;t<=i.maxY;t++){let i=r*n;this.sourceTiles_.push({getTile:()=>c(this.sourceZ_,e,t,o),offset:i})}++r}),this.sourceTiles_.length===0&&(this.state=W.EMPTY)}}getImage(){return this.canvas_}reproject_(){let e=[];if(this.sourceTiles_.forEach(t=>{let n=t.tile;if(n&&n.getState()==W.LOADED){let r=this.sourceTileGrid_.getTileCoordExtent(n.tileCoord);r[0]+=t.offset,r[2]+=t.offset;let i=this.clipExtent_?.slice();i&&(i[0]+=t.offset,i[2]+=t.offset),e.push({extent:r,clipExtent:i,image:n.getImage()})}}),this.sourceTiles_.length=0,e.length===0)this.state=W.ERROR;else{let t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),r=typeof n==`number`?n:n[0],i=typeof n==`number`?n:n[1],a=this.targetTileGrid_.getResolution(t),o=this.sourceTileGrid_.getResolution(this.sourceZ_),s=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=BS(r,i,this.pixelRatio_,o,this.sourceTileGrid_.getExtent(),a,s,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=W.LOADED}this.changed()}load(){for(let e of this.sourceTiles_)e.tile=e.getTile();if(this.state==W.IDLE){this.state=W.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:t})=>{let n=t.getState();if(n==W.IDLE||n==W.LOADING){e++;let n=_m(t,H.CHANGE,r=>{let i=t.getState();(i==W.LOADED||i==W.ERROR||i==W.EMPTY)&&(ym(n),e--,e===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(n)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:e},t,n){e.getState()==W.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(ym),this.sourcesListenerKeys_=null}release(){this.canvas_&&=(zp(this.canvas_.getContext(`2d`)),PS.push(this.canvas_),null),this.sourceTiles_.length=0,super.release()}},KS=class{constructor(e){this.highWaterMark=e===void 0?2048:e,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let e=this.pop();e instanceof bm&&e.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){let n=this.entries_[e];return zh(n!==void 0,`Tried to get a value for a key that does not exist in the cache`),n===this.newest_?n.value_:(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n,n.value_)}remove(e){let t=this.entries_[e];return zh(t!==void 0,`Tried to get a value for a key that does not exist in the cache`),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){let e=Array(this.count_),t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){let e=Array(this.count_),t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){return this.entries_[e]?.value_}pop(){let e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){zh(!(e in this.entries_),`Tried to set a value for a key that is used already`);let n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}};function qS(e,t,n,r){return r===void 0?[e,t,n]:(r[0]=e,r[1]=t,r[2]=n,r)}function JS(e,t,n){return e+`/`+t+`/`+n}function YS(e,t,n,r,i){return`${Zm(e)},${t},${JS(n,r,i)}`}function XS(e){return ZS(e[0],e[1],e[2])}function ZS(e,t,n){return(t<<e)+n}function QS(e,t){let n=e[0],r=e[1],i=e[2];if(t.getMinZoom()>n||n>t.getMaxZoom())return!1;let a=t.getFullTileRange(n);return!a||a.containsXY(r,i)}var $S=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.pendingMethod_,this.context_=new Proxy(Rp(),{get:(e,t)=>{if(typeof e[t]==`function`)return this.pendingMethod_=t,this.pushMethodArgs_},set:(e,t,n)=>(this.push_(t,n),!0)})}push_(...e){let t=this.instructions_,n=this.zIndex+this.offset_;t[n]||(t[n]=[]),t[n].push(...e)}pushMethodArgs_=(...e)=>{this.push_(this.pendingMethod_,e)};pushFunction(e){this.push_(e)}getContext(){return this.context_}draw(e){this.instructions_.forEach(t=>{for(let n=0,r=t.length;n<r;++n){let r=t[n];if(typeof r==`function`){r(e);continue}let i=t[++n];typeof e[r]==`function`?e[r](...i):e[r]=typeof i==`function`?i(e):i}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}},eC=5,tC=class extends Jm{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.staleKeys_=[],this.maxStaleKeys=eC,this.renderedSourceKey_}getStaleKeys(){return this.staleKeys_}prependStaleKey(e){this.staleKeys_.unshift(e),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}updateStaleKeys(e){this.renderedSourceKey_?this.renderedSourceKey_!==e&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=e):this.renderedSourceKey_=e}getFeatures(e){return U()}getData(e){return null}prepareFrame(e){return U()}renderFrame(e,t){return U()}forEachFeatureAtCoordinate(e,t,n,r,i){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){let t=e.target;(t.getState()===V.LOADED||t.getState()===V.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=V.LOADED&&t!=V.ERROR&&e.addEventListener(H.CHANGE,this.boundHandleImageChange_),t==V.IDLE&&(e.load(),t=e.getState()),t==V.LOADED}renderIfReadyAndVisible(){let e=this.getLayer();e&&e.getVisible()&&e.getSourceState()===`ready`&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}},nC=[],rC=null;function iC(){rC=Ip(1,1,void 0,{willReadFrequently:!0})}var aC=class extends tC{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=Zh(),this.pixelTransform=Zh(),this.inversePixelTransform=Zh(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(e,t,n){rC||iC(),rC.clearRect(0,0,1,1);let r;try{rC.drawImage(e,t,n,1,1,0,0,1,1),r=rC.getImageData(0,0,1,1).data}catch{return rC=null,null}return r}getBackground(e){let t=this.getLayer().getBackground();return typeof t==`function`&&(t=t(e.viewState.resolution)),t||void 0}useContainer(e,t,n,r,i){if(Kp(e)&&this.pixelTransform[1]===0&&this.pixelTransform[2]===0&&this.pixelTransform[4]===0&&this.pixelTransform[5]===0&&e.width===r&&e.height===i){let t=e,r=t.getContext(`2d`);if(r){this.container=e,this.context=r,this.containerReused=!0,n&&(r.fillStyle=n,r.fillRect(0,0,t.width,t.height));return}}let a=this.getLayer().getClassName(),o,s;if(e&&e.className===a&&(!n||e&&e.style.backgroundColor&&Dm(hm(e.style.backgroundColor),hm(n)))){let t=e.firstElementChild;Kp(t)&&(s=t.getContext(`2d`))}if(s&&sg(s.canvas.style.transform,t)?(this.container=e,this.context=s,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){o=Np?Gp():document.createElement(`div`),o.className=a;let e=o.style;e.position=`absolute`,e.width=`100%`,e.height=`100%`,s=Ip();let t=s.canvas;o.appendChild(t),e=t.style,e.position=`absolute`,e.left=`0`,e.transformOrigin=`top left`,this.container=o,this.context=s}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){let r=Cd(n),i=wd(n),a=hd(n),o=md(n);eg(t.coordinateToPixelTransform,r),eg(t.coordinateToPixelTransform,i),eg(t.coordinateToPixelTransform,a),eg(t.coordinateToPixelTransform,o);let s=this.inversePixelTransform;eg(s,r),eg(s,i),eg(s,a),eg(s,o),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(i[0]),Math.round(i[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.clip()}prepareContainer(e,t){let n=e.extent,r=e.viewState.resolution,i=e.viewState.rotation,a=e.pixelRatio,o=Math.round(Td(n)/r*a),s=Math.round(bd(n)/r*a);tg(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/a,1/a,i,-o/2,-s/2),ng(this.inversePixelTransform,this.pixelTransform);let c=ag(this.pixelTransform),l=this.getBackground(e);if(this.useContainer(t,c,l,o,s),!this.containerReused){let e=this.context.canvas;e.width!=o||e.height!=s?(e.width=o,e.height=s):this.context.clearRect(0,0,o,s),c!==e.style.transform&&(e.style.transform=c)}}dispatchRenderEvent_(e,t,n){let r=this.getLayer();if(r.hasListener(e)){let i=new gS(e,this.inversePixelTransform,n,t);r.dispatchEvent(i)}}preRender(e,t){this.frameState=t,!t.declutter&&this.dispatchRenderEvent_(ub.PRERENDER,e,t)}postRender(e,t){t.declutter||this.dispatchRenderEvent_(ub.POSTRENDER,e,t)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new $S),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(ub.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(ub.POSTRENDER,this.context,e))}getRenderTransform(e,t,n,r,i,a,o){let s=i/2,c=a/2,l=r/t,u=-l,d=-e[0]+o,f=-e[1];return tg(this.tempTransform,s,c,l,u,-n,d,f)}disposeInternal(){delete this.frameState,super.disposeInternal()}};function oC(e,t,n){if(!(n in e))return e[n]=new Set([t]),!0;let r=e[n],i=r.has(t);return i||r.add(t),!i}function sC(e,t,n){let r=e[n];return r?r.delete(t):!1}function cC(e,t){let n=e.layerStatesArray[e.layerIndex];n.extent&&(t=xd(t,Ep(n.extent,e.viewState.projection)));let r=n.layer.getRenderSource();if(!r.getWrapX()){let n=r.getTileGridForProjection(e.viewState.projection).getExtent();n&&(t=xd(t,n))}return t}var lC=class extends aC{constructor(e,t){super(e),t||={},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceRevision_,this.tempExtent=nd(),this.tempTileRange_=new jS(0,0,0,0),this.tempTileCoord_=qS(0,0,0);let n=t.cacheSize===void 0?512:t.cacheSize;this.tileCache_=new KS(n),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=n*.5}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||=new KS(512),this.sourceTileCache_}getOrCreateTile(e,t,n,r){let i=this.tileCache_,a=this.getLayer().getSource(),o=YS(a,a.getKey(),e,t,n),s;if(i.containsKey(o))s=i.get(o);else{let c=r.viewState.projection,l=a.getProjection();if(s=a.getTile(e,t,n,r.pixelRatio,c,!l||gp(l,c)?void 0:this.getSourceTileCache()),!s)return null;i.set(o,s)}return s}getTile(e,t,n,r){return this.getOrCreateTile(e,t,n,r)||null}getData(e){let t=this.frameState;if(!t)return null;let n=this.getLayer(),r=eg(t.pixelToCoordinateTransform,e.slice()),i=n.getExtent();if(i&&!Qu(i,r))return null;let a=t.viewState,o=n.getRenderSource(),s=o.getTileGridForProjection(a.projection),c=o.getTilePixelRatio(t.pixelRatio);for(let e=s.getZForResolution(a.resolution);e>=s.getMinZoom();--e){let n=s.getTileCoordForCoordAndZ(r,e),i=this.getTile(e,n[1],n[2],t);if(!i||i.getState()!==W.LOADED)continue;let l=s.getOrigin(e),u=Ph(s.getTileSize(e)),d=s.getResolution(e),f;if(i instanceof kS||i instanceof GS)f=i.getImage();else if(i instanceof OS){if(f=TS(i.getData()),!f)continue}else continue;let p=Math.floor(c*((r[0]-l[0])/d-n[1]*u[0])),m=Math.floor(c*((l[1]-r[1])/d-n[2]*u[1])),h=Math.round(c*o.getGutterForProjection(a.projection));return this.getImageData(f,p+h,m+h)}return null}prepareFrame(e){this.renderedProjection?e.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=e.viewState.projection):this.renderedProjection=e.viewState.projection;let t=this.getLayer().getSource();if(!t)return!1;let n=t.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==n&&(this.renderedSourceRevision_=n,this.renderedSourceKey_===t.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=n,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(e,t,n,r,i){let a=e.viewState,o=this.getLayer(),s=o.getRenderSource(),c=s.getTileGridForProjection(a.projection),l=Zm(s);l in e.wantedTiles||(e.wantedTiles[l]={});let u=e.wantedTiles[l],d=o.getMapInternal(),f=Math.max(n-i,c.getMinZoom(),c.getZForResolution(Math.min(o.getMaxResolution(),d?d.getView().getResolutionForZoom(Math.max(o.getMinZoom(),0)):c.getResolution(0)),s.zDirection)),p=a.rotation,m=p?yd(a.center,a.resolution,p,e.size):void 0;for(let i=n;i>=f;--i){let n=c.getTileRangeForExtentAndZ(t,i,this.tempTileRange_),a=c.getResolution(i);for(let t=n.minX;t<=n.maxX;++t)for(let o=n.minY;o<=n.maxY;++o){if(p&&!c.tileCoordIntersectsViewport([i,t,o],m))continue;let n=this.getTile(i,t,o,e);if(!n||!oC(r,n,i))continue;let s=n.getKey();if(u[s]=!0,n.getState()===W.IDLE&&!e.tileQueue.isKeyQueued(s)){let r=qS(i,t,o,this.tempTileCoord_);e.tileQueue.enqueue([n,l,c.getTileCoordCenter(r),a])}}}}findStaleTile_(e,t){let n=this.tileCache_,r=e[0],i=e[1],a=e[2],o=this.getStaleKeys();for(let e=0;e<o.length;++e){let s=YS(this.getLayer().getSource(),o[e],r,i,a);if(n.containsKey(s)){let e=n.peek(s);if(e.getState()===W.LOADED)return e.endTransition(Zm(this)),oC(t,e,r),!0}}return!1}findAltTiles_(e,t,n,r){let i=e.getTileRangeForTileCoordAndZ(t,n,this.tempTileRange_);if(!i)return!1;let a=!0,o=this.tileCache_,s=this.getLayer().getRenderSource(),c=s.getKey();for(let e=i.minX;e<=i.maxX;++e)for(let t=i.minY;t<=i.maxY;++t){let i=YS(s,c,n,e,t),l=!1;if(o.containsKey(i)){let e=o.peek(i);e.getState()===W.LOADED&&(oC(r,e,n),l=!0)}l||(a=!1)}return a}renderFrame(e,t){this.renderComplete=!0;let n=e.layerStatesArray[e.layerIndex],r=e.viewState,i=r.projection,a=r.resolution,o=r.center,s=e.pixelRatio,c=this.getLayer(),l=c.getSource(),u=l.getTileGridForProjection(i),d=u.getZForResolution(a,l.zDirection),f=u.getResolution(d);this.updateStaleKeys(l.getKey());let p=e.extent,m=l.getTilePixelRatio(s);this.prepareContainer(e,t);let h=this.context.canvas.width,g=this.context.canvas.height;this.layerExtent=n.extent?Ep(n.extent,i):null,this.layerExtent&&(p=xd(p,this.layerExtent));let _=f*h/2/m,v=f*g/2/m,y=[o[0]-_,o[1]-v,o[0]+_,o[1]+v],b={};this.renderedTiles.length=0;let x=c.getPreload();if(e.nextExtent&&this.enqueueTilesForNextExtent()){let t=u.getZForResolution(r.nextResolution,l.zDirection),n=cC(e,e.nextExtent);this.enqueueTiles(e,n,t,b,x)}let S=cC(e,p);if(this.enqueueTiles(e,S,d,b,0),x>0&&setTimeout(()=>{this.enqueueTiles(e,S,d-1,b,x-1)},0),!(d in b))return this.container;let C=Zm(this),w=e.time;for(let t of b[d]){let n=t.getState();if(n===W.EMPTY)continue;let r=t.tileCoord;if(n===W.LOADED&&t.getAlpha(C,w)===1){t.endTransition(C);continue}if(n!==W.ERROR&&(this.renderComplete=!1),this.findStaleTile_(r,b)){sC(b,t,d),e.animate=!0;continue}if(this.findAltTiles_(u,r,d+1,b))continue;let i=u.getMinZoom();for(let e=d-1;e>=i&&!this.findAltTiles_(u,r,e,b);--e);}let T=f/a*s/m,E=this.getRenderContext(e);tg(this.tempTransform,h/2,g/2,T,T,0,-h/2,-g/2),this.layerExtent&&this.clipUnrotated(E,e,this.layerExtent),l.getInterpolate()||(E.imageSmoothingEnabled=!1),this.preRender(E,e);let D=Object.keys(b).map(Number);D.sort(Sm);let ee=[],O=[],k=[];for(let t=D.length-1;t>=0;--t){let n=D[t],r=l.getTilePixelSize(n,s,i),a=u.getResolution(n)/f,o=r[0]*a*T,c=r[1]*a*T,p=u.getTileCoordForCoordAndZ(Cd(y),n),h=u.getTileCoordExtent(p),g=eg(this.tempTransform,[m*(h[0]-y[0])/f,m*(y[3]-h[3])/f]),_=m*l.getGutterForProjection(i);for(let t of b[n]){if(t.getState()!==W.LOADED)continue;let r=t.tileCoord,i=p[1]-r[1],a=Math.round(g[0]-(i-1)*o),s=p[2]-r[2],u=Math.round(g[1]-(s-1)*c),f=Math.round(g[0]-i*o),m=Math.round(g[1]-s*c),h=a-f,v=u-m,y=n===d;if(y&&t.inTransition(C)){k.push({tile:t,x:f,y:m,w:h,h:v,gutter:_}),this.renderedTiles.unshift(t),this.updateUsedTiles(e.usedTiles,l,t);continue}let b=[f,m,f+h,m+v],x=[];for(let e=0,t=ee.length;e<t;++e)n<O[e]&&Ed(b,ee[e])&&x.push(ee[e]);let S;x.length>0&&(S=Md(b,x)),ee.push(b),O.push(n),this.drawTile(t,e,f,m,h,v,_,y,S),this.renderedTiles.unshift(t),this.updateUsedTiles(e.usedTiles,l,t)}}for(let t=0,n=k.length;t<n;++t){let{tile:n,x:r,y:i,w:a,h:o,gutter:s}=k[t];this.drawTile(n,e,r,i,a,o,s,!0,void 0)}return this.renderedResolution=f,this.extentChanged=!this.renderedExtent_||!sd(this.renderedExtent_,y),this.renderedExtent_=y,this.renderedPixelRatio=s,this.postRender(this.context,e),this.layerExtent&&E.restore(),E.imageSmoothingEnabled=!0,this.renderComplete&&e.postRenderFunctions.push((e,t)=>{let n=Zm(l),r=t.wantedTiles[n],i=r?Object.keys(r).length:0;this.updateCacheSize(i),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()}),this.container}updateCacheSize(e){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,e*2)}drawTile(e,t,n,r,i,a,o,s,c){let l;if(e instanceof OS){if(l=TS(e.getData()),!l)throw Error(`Rendering array data is not yet supported`)}else l=this.getTileImage(e);if(!l)return;let u=this.getRenderContext(t),d=Zm(this),f=t.layerStatesArray[t.layerIndex],p=f.opacity*(s?e.getAlpha(d,t.time):1),m=p!==u.globalAlpha;m&&(u.save(),u.globalAlpha=p);let h=l.width-2*o,g=l.height-2*o;if(c){let e=h/i,t=g/a;for(let i=0,a=c.length;i<a;++i){let a=c[i],s=a[0],d=a[1],f=a[2]-a[0],p=a[3]-a[1];u.drawImage(l,o+(s-n)*e,o+(d-r)*t,f*e,p*t,s,d,f,p)}}else u.drawImage(l,o,o,h,g,n,r,i,a);m&&u.restore(),p===f.opacity?s&&e.endTransition(d):t.animate=!0}getImage(){let e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}updateUsedTiles(e,t,n){let r=Zm(t);r in e||(e[r]={}),e[r][n.getKey()]=!0}},uC={PRELOAD:`preload`,USE_INTERIM_TILES_ON_ERROR:`useInterimTilesOnError`},dC=class extends db{constructor(e){e||={};let t=Object.assign({},e),n=e.cacheSize;delete e.cacheSize,delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.cacheSize_=n,this.setPreload(e.preload===void 0?0:e.preload),this.setUseInterimTilesOnError(e.useInterimTilesOnError===void 0||e.useInterimTilesOnError)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(uC.PRELOAD)}setPreload(e){this.set(uC.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(uC.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(uC.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}},fC=class extends dC{constructor(e){super(e)}createRenderer(){return new lC(this,{cacheSize:this.getCacheSize()})}},pC=[0,0,0],mC=5,hC=class{constructor(e){let t=e.minZoom,n=e.resolutions;t===void 0&&n&&(t=n.findIndex(e=>e!==void 0)),this.minZoom=t===void 0?0:t,this.resolutions_=n,zh(Om(this.resolutions_,(e,t)=>t-e,!0),"`resolutions` must be sorted in descending order");let r;if(!e.origins){for(let e=0,t=this.resolutions_.length-1;e<t;++e)if(!r)r=this.resolutions_[e]/this.resolutions_[e+1];else if(this.resolutions_[e]/this.resolutions_[e+1]!==r){r=void 0;break}}this.zoomFactor_=r,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin===void 0?null:e.origin,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,zh(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));let i=e.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=Cd(i)),zh(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,zh(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize===void 0?this.tileSizes_?null:256:e.tileSize,zh(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i===void 0?null:i,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.tileRanges===void 0?e.sizes===void 0?i&&this.calculateTileRanges_(i):this.fullTileRanges_=e.sizes.map((e,t)=>{let n=new jS(Math.min(0,e[0]),Math.max(e[0]-1,-1),Math.min(0,e[1]),Math.max(e[1]-1,-1));if(i){let e=this.getTileRangeForExtentAndZ(i,t);n.minX=Math.max(e.minX,n.minX),n.maxX=Math.min(e.maxX,n.maxX),n.minY=Math.max(e.minY,n.minY),n.maxY=Math.min(e.maxY,n.maxY)}return n}):this.fullTileRanges_=e.tileRanges}forEachTileCoord(e,t,n){let r=this.getTileRangeForExtentAndZ(e,t);for(let e=r.minX,i=r.maxX;e<=i;++e)for(let i=r.minY,a=r.maxY;i<=a;++i)n([t,e,i])}forEachTileCoordParentTileRange(e,t,n,r){let i,a,o,s=null,c=e[0]-1;for(this.zoomFactor_===2?(a=e[1],o=e[2]):s=this.getTileCoordExtent(e,r);c>=this.minZoom;){if(a!==void 0&&o!==void 0?(a=Math.floor(a/2),o=Math.floor(o/2),i=MS(a,a,o,o,n)):i=this.getTileRangeForExtentAndZ(s,c,n),t(c,i))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getOrigins(){return this.origins_}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){let n=e[1]*2,r=e[2]*2;return MS(n,n+1,r,r+1,t)}let r=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;let r=e[0],i=e[1],a=e[2];if(t===r)return MS(i,a,i,a,n);if(this.zoomFactor_){let e=this.zoomFactor_**+(t-r),o=Math.floor(i*e),s=Math.floor(a*e);return t<r?MS(o,o,s,s,n):MS(o,Math.floor(e*(i+1))-1,s,Math.floor(e*(a+1))-1,n)}let o=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(o,t,n)}getTileRangeForExtentAndZ(e,t,n){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,pC);let r=pC[1],i=pC[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,pC);let a=pC[1],o=pC[2];return MS(r,a,i,o,n)}getTileCoordCenter(e){let t=this.getOrigin(e[0]),n=this.getResolution(e[0]),r=Ph(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*n,t[1]-(e[2]+.5)*r[1]*n]}getTileCoordExtent(e,t){let n=this.getOrigin(e[0]),r=this.getResolution(e[0]),i=Ph(this.getTileSize(e[0]),this.tmpSize_),a=n[0]+e[1]*i[0]*r,o=n[1]-(e[2]+1)*i[1]*r;return rd(a,o,a+i[0]*r,o+i[1]*r,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,r,i){let a=this.getZForResolution(n),o=n/this.getResolution(a),s=this.getOrigin(a),c=Ph(this.getTileSize(a),this.tmpSize_),l=o*(e-s[0])/n/c[0],u=o*(s[1]-t)/n/c[1];return r?(l=Ud(l,mC)-1,u=Ud(u,mC)-1):(l=Hd(l,mC),u=Hd(u,mC)),qS(a,l,u,i)}getTileCoordForXYAndZ_(e,t,n,r,i){let a=this.getOrigin(n),o=this.getResolution(n),s=Ph(this.getTileSize(n),this.tmpSize_),c=(e-a[0])/o/s[0],l=(a[1]-t)/o/s[1];return r?(c=Ud(c,mC)-1,l=Ud(l,mC)-1):(c=Hd(c,mC),l=Hd(l,mC)),qS(n,c,l,i)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){return Nd(wm(this.resolutions_,e,t||0),this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return __(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){let t=this.resolutions_.length,n=Array(t);for(let r=this.minZoom;r<t;++r)n[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=n}};function gC(e){let t=e.getDefaultTileGrid();return t||(t=xC(e),e.setDefaultTileGrid(t)),t}function _C(e,t,n){let r=t[0],i=e.getTileCoordCenter(t),a=SC(n);if(!Qu(a,i)){let t=Td(a),n=Math.ceil((a[0]-i[0])/t);return i[0]+=t*n,e.getTileCoordForCoordAndZ(i,r)}return t}function vC(e,t,n,r){r=r===void 0?`top-left`:r;let i=bC(e,t,n);return new hC({extent:e,origin:_d(e,r),resolutions:i,tileSize:n})}function yC(e){let t=e||{},n=t.extent||lp(`EPSG:3857`).getExtent();return new hC({extent:n,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:bC(n,t.maxZoom,t.tileSize,t.maxResolution)})}function bC(e,t,n,r){t=t===void 0?42:t,n=Ph(n===void 0?256:n);let i=bd(e),a=Td(e);r=r>0?r:Math.max(a/n[0],i/n[1]);let o=t+1,s=Array(o);for(let e=0;e<o;++e)s[e]=r/2**e;return s}function xC(e,t,n,r){return vC(SC(e),t,n,r)}function SC(e){e=lp(e);let t=e.getExtent();if(!t){let n=180*Qd.degrees/e.getMetersPerUnit();t=rd(-n,-n,n,n)}return t}var CC=/\{z\}/g,wC=/\{x\}/g,TC=/\{y\}/g,EC=/\{-y\}/g;function DC(e,t,n,r,i){return e.replace(CC,t.toString()).replace(wC,n.toString()).replace(TC,r.toString()).replace(EC,function(){if(i===void 0)throw Error(`If the URL template has a {-y} placeholder, the grid extent must be known`);return(i-r).toString()})}function OC(e){let t=[],n=/\{([a-z])-([a-z])\}/.exec(e);if(n){let r=n[1].charCodeAt(0),i=n[2].charCodeAt(0),a;for(a=r;a<=i;++a)t.push(e.replace(n[0],String.fromCharCode(a)));return t}if(n=/\{(\d+)-(\d+)\}/.exec(e),n){let r=parseInt(n[2],10);for(let i=parseInt(n[1],10);i<=r;i++)t.push(e.replace(n[0],i.toString()));return t}return t.push(e),t}function kC(e,t){return(function(n,r,i){if(!n)return;let a,o=n[0];if(t){let e=t.getFullTileRange(o);e&&(a=e.getHeight()-1)}return DC(e,o,n[1],n[2],a)})}function AC(e,t){let n=e.length,r=Array(n);for(let i=0;i<n;++i)r[i]=kC(e[i],t);return jC(r)}function jC(e){return e.length===1?e[0]:(function(t,n,r){return t?e[zd(XS(t),e.length)](t,n,r):void 0})}var MC=class extends $m{constructor(e){super(),this.projection=lp(e.projection),this.attributions_=NC(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible??!0,this.loading=!1,this.state_=e.state===void 0?`ready`:e.state,this.wrapX_=e.wrapX!==void 0&&e.wrapX,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;let t=this;this.viewPromise_=new Promise(function(e,n){t.viewResolver=e,t.viewRejector=n})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}ready(){let e=this.getState();return e===`ready`?Promise.resolve():e===`error`?Promise.reject(Error(`Source failed to load`)):new Promise((e,t)=>{let n=()=>{let r=this.getState();r===`ready`?(this.un(`change`,n),e()):r===`error`&&(this.un(`change`,n),t(Error(`Source failed to load`)))};this.on(`change`,n)})}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=NC(e),this.changed()}setState(e){this.state_=e,this.changed()}};function NC(e){return e?typeof e==`function`?e:(Array.isArray(e)||(e=[e]),t=>e):null}var PC=class extends MC{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=e.tilePixelRatio===void 0?1:e.tilePixelRatio,this.tileGrid=e.tileGrid===void 0?null:e.tileGrid,this.tileGrid&&Ph(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),[256,256]),this.tmpSize=[0,0],this.key_=e.key||Zm(this),this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getResolutions(e){let t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,n,r,i,a){return U()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:gC(e)}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){let r=this.getTileGridForProjection(n),i=this.getTilePixelRatio(t),a=Ph(r.getTileSize(e),this.tmpSize);return i==1?a:Nh(a,i,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){let n=t===void 0?this.getProjection():t,r=t===void 0&&this.tileGrid||this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(e=_C(r,e,n)),QS(e,r)?e:null}clear(){}refresh(){this.clear(),super.refresh()}},FC=class extends Pm{constructor(e,t){super(e),this.tile=t}},IC={TILELOADSTART:`tileloadstart`,TILELOADEND:`tileloadend`,TILELOADERROR:`tileloaderror`},LC=class e extends PC{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===e.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){let t=e.target,n=Zm(t),r=t.getState(),i;r==W.LOADING?(this.tileLoadingKeys_[n]=!0,i=IC.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],i=r==W.ERROR?IC.TILELOADERROR:r==W.LOADED?IC.TILELOADEND:void 0),i!=null&&this.dispatchEvent(new FC(i,t))}setTileLoadFunction(e){this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,t===void 0?this.changed():this.setKey(t)}setUrl(e){let t=OC(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;let t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(AC(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}},RC=class extends LC{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:zC,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate===void 0||e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin===void 0?null:e.crossOrigin,this.referrerPolicy=e.referrerPolicy,this.tileClass=e.tileClass===void 0?kS:e.tileClass,this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(e){return this.getProjection()&&e&&!gp(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=`:disable-interpolation`),e}getTileGridForProjection(e){let t=this.getProjection();if(this.tileGrid&&(!t||gp(t,e)))return this.tileGrid;let n=Zm(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=gC(e)),this.tileGridForProjection[n]}createTile_(e,t,n,r,i,a){let o=[e,t,n],s=this.getTileCoordForTileUrlFunction(o,i),c=s?this.tileUrlFunction(s,r,i):void 0,l=new this.tileClass(o,c===void 0?W.EMPTY:W.IDLE,c===void 0?``:c,{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return l.key=a,l.addEventListener(H.CHANGE,this.handleTileChange.bind(this)),l}getTile(e,t,n,r,i,a){let o=this.getProjection();if(!o||!i||gp(o,i))return this.getTileInternal(e,t,n,r,o||i);let s=[e,t,n],c=this.getKey(),l=new GS(o,this.getTileGridForProjection(o),i,this.getTileGridForProjection(i),s,this.getTileCoordForTileUrlFunction(s,i),this.getTilePixelRatio(r),this.getGutter(),(e,t,n,r)=>this.getTileInternal(e,t,n,r,o,a),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return l.key=c,l}getTileInternal(e,t,n,r,i,a){let o=this.getKey(),s=YS(this,o,e,t,n);if(a&&a.containsKey(s))return a.get(s);let c=this.createTile_(e,t,n,r,i,o);return a?.set(s,c),c}setRenderReprojectionEdges(e){this.renderReprojectionEdges_!=e&&(this.renderReprojectionEdges_=e,this.changed())}setTileGridForProjection(e,t){let n=lp(e);if(n){let e=Zm(n);e in this.tileGridForProjection||(this.tileGridForProjection[e]=t)}}};function zC(e,t){if(Np){let n=e.getCrossOrigin(),r=`same-origin`,i=`same-origin`;n===`anonymous`||n===``?(r=`cors`,i=`omit`):n===`use-credentials`&&(r=`cors`,i=`include`);let a={mode:r,credentials:i,referrerPolicy:e.getReferrerPolicy()};fetch(t,a).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.blob()}).then(e=>createImageBitmap(e)).then(t=>{let n=e.getImage();n.width=t.width,n.height=t.height,n.getContext(`2d`).drawImage(t,0,0),t.close?.(),n.dispatchEvent(new Event(`load`))}).catch(()=>{e.getImage().dispatchEvent(new Event(`error`))});return}e.getImage().src=t}var BC=class extends RC{constructor(e){e||={};let t=e.projection===void 0?`EPSG:3857`:e.projection,n=e.tileGrid===void 0?yC({extent:SC(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize}):e.tileGrid;super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,referrerPolicy:e.referrerPolicy,interpolate:e.interpolate,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX===void 0||e.wrapX,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter===void 0?0:e.gutter}getGutter(){return this.gutter_}},VC=`units`,HC=[1,2,5],UC=25.4/.28,WC=class extends gy{constructor(e){e||={};let t=document.createElement(`div`);t.style.pointerEvents=`none`,super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;let n=e.className===void 0?e.bar?`ol-scale-bar`:`ol-scale-line`:e.className;this.innerElement_=document.createElement(`div`),this.innerElement_.className=n+`-inner`,this.element.className=n+` `+nh,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth===void 0?64:e.minWidth,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_=``,this.addChangeListener(VC,this.handleUnitsChanged_),this.setUnits(e.units||`metric`),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(VC)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(VC,e)}setDpi(e){this.dpi_=e}updateElement_(){let e=this.viewState_;if(!e){this.renderedVisible_&&=(this.element.style.display=`none`,!1);return}let t=e.center,n=e.projection,r=this.getUnits(),i=r==`degrees`?`degrees`:`m`,a=up(n,e.resolution,t,i),o=this.minWidth_*(this.dpi_||UC)/UC,s=this.maxWidth_===void 0?void 0:this.maxWidth_*(this.dpi_||UC)/UC,c=o*a,l=``;if(r==`degrees`){let e=Qd.degrees;c*=e,c<e/60?(l=`″`,a*=3600):c<e?(l=`′`,a*=60):l=`°`}else if(r==`imperial`)c<.9144?(l=`in`,a/=.0254):c<1609.344?(l=`ft`,a/=.3048):(l=`mi`,a/=1609.344);else if(r==`nautical`)a/=1852,l=`NM`;else if(r==`metric`)c<1e-6?(l=`nm`,a*=1e9):c<.001?(l=`μm`,a*=1e6):c<1?(l=`mm`,a*=1e3):c<1e3?l=`m`:(l=`km`,a/=1e3);else if(r==`us`)c<.9144?(l=`in`,a*=39.37):c<1609.344?(l=`ft`,a/=.30480061):(l=`mi`,a/=1609.3472);else throw Error(`Invalid units`);let u=3*Math.floor(Math.log(o*a)/Math.log(10)),d,f,p,m=0,h,g;for(;;){p=Math.floor(u/3);let e=10**p;if(d=HC[(u%3+3)%3]*e,f=Math.round(d/a),isNaN(f)){this.element.style.display=`none`,this.renderedVisible_=!1;return}if(s!==void 0&&f>=s){d=m,f=h,p=g;break}if(f>=o)break;m=d,h=f,g=p,++u}let _=this.scaleBar_?this.createScaleBar(f,d,l):d.toFixed(p<0?-p:0)+` `+l;this.renderedHTML_!=_&&(this.innerElement_.innerHTML=_,this.renderedHTML_=_),this.renderedWidth_!=f&&(this.innerElement_.style.width=f+`px`,this.renderedWidth_=f),this.renderedVisible_||=(this.element.style.display=``,!0)}createScaleBar(e,t,n){let r=this.getScaleForResolution(),i=r<1?Math.round(1/r).toLocaleString()+` : 1`:`1 : `+Math.round(r).toLocaleString(),a=this.scaleBarSteps_,o=e/a,s=[this.createMarker(`absolute`)];for(let r=0;r<a;++r){let i=r%2==0?`ol-scale-singlebar-odd`:`ol-scale-singlebar-even`;s.push(`<div><div class="ol-scale-singlebar ${i}" style="width: ${o}px;"></div>`+this.createMarker(`relative`)+(r%2==0||a===2?this.createStepText(r,e,!1,t,n):``)+`</div>`)}return s.push(this.createStepText(a,e,!0,t,n)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+i+`</div>`:``)+s.join(``)}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e===`absolute`?3:-10}px;"></div>`}createStepText(e,t,n,r,i){let a=(e===0?0:Math.round(r/this.scaleBarSteps_*e*100)/100)+(e===0?``:` `+i),o=e===0?-3:t/this.scaleBarSteps_*-1,s=e===0?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${o}px;text-align: ${e===0?`left`:`center`};min-width: ${s}px;left: ${n?t+`px`:`unset`};">`+a+`</div>`}getScaleForResolution(){let e=up(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,`m`),t=this.dpi_||UC;return 1e3/25.4*e*t}render(e){let t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()}},GC=hp([118.46,24.98]),KC=class{map;constructor(e){this.map=new SS({target:e,view:new ly({center:GC,zoom:9.5,minZoom:7,maxZoom:18}),controls:[]})}setTarget(e){this.map.setTarget(e)}addBaseLayer(e){let t=new fC({source:new BC({url:e.url?.startsWith(`http`)||e.url?.includes(`{`)?e.url:Tv.resolve(e.url||e.id),attributions:e.attributions,maxZoom:e.maxZoom??19}),zIndex:e.zIndex});return this.map.addLayer(t),t}removeBaseLayer(e){this.map.removeLayer(e)}addControl(e){let t,n=e.options||{};switch(e.id){case`zoom`:t=new yy(n);break;case`attribution`:t=new _y({collapsible:!1,collapsed:!1,...n});break;case`scale`:t=new WC({units:`metric`,...n});break;case`rotate`:t=new vy(n);break;default:console.warn(`[GeoFlow] 未知控件: ${e.id}`);return}this.map.addControl(t)}get view(){return this.map.getView()}dispose(){this.map.setTarget(void 0)}},q={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},qC=[q.FILL],JC=[q.STROKE],YC=[q.BEGIN_PATH],XC=[q.CLOSE_PATH],ZC=class extends Dg{constructor(e,t,n,r){super(),this.tolerance=e,this.maxExtent=t,this.pixelRatio=r,this.maxLineWidth=0,this.resolution=n,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(e){let t=this.pixelRatio;return t==1?e:e.map(function(e){return e*t})}appendFlatPointCoordinates(e,t){let n=this.getBufferedMaxExtent(),r=this.tmpCoordinate_,i=this.coordinates,a=i.length;for(let o=0,s=e.length;o<s;o+=t)r[0]=e[o],r[1]=e[o+1],Qu(n,r)&&(i[a++]=r[0],i[a++]=r[1]);return a}appendFlatLineCoordinates(e,t,n,r,i,a){let o=this.coordinates,s=o.length,c=this.getBufferedMaxExtent();a&&(t+=r);let l=e[t],u=e[t+1],d=this.tmpCoordinate_,f=!0,p,m,h;for(p=t+r;p<n;p+=r)d[0]=e[p],d[1]=e[p+1],h=td(c,d),h===m?h===qu.INTERSECTING?(o[s++]=d[0],o[s++]=d[1],f=!1):f=!0:(f&&=(o[s++]=l,o[s++]=u,!1),o[s++]=d[0],o[s++]=d[1]),l=d[0],u=d[1],m=h;return(i&&f||p===t+r)&&(o[s++]=l,o[s++]=u),s}drawCustomCoordinates_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a],s=this.appendFlatLineCoordinates(e,t,o,r,!1,!1);i.push(s),t=o}return t}drawCustom(e,t,n,r,i){this.beginGeometry(e,t,i);let a=e.getType(),o=e.getStride(),s=this.coordinates.length,c,l,u,d,f;switch(a){case`MultiPolygon`:c=e.getOrientedFlatCoordinates(),d=[];let t=e.getEndss();f=0;for(let e=0,n=t.length;e<n;++e){let n=[];f=this.drawCustomCoordinates_(c,f,t[e],o,n),d.push(n)}this.instructions.push([q.CUSTOM,s,d,e,n,o_,i]),this.hitDetectionInstructions.push([q.CUSTOM,s,d,e,r||n,o_,i]);break;case`Polygon`:case`MultiLineString`:u=[],c=a==`Polygon`?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),f=this.drawCustomCoordinates_(c,0,e.getEnds(),o,u),this.instructions.push([q.CUSTOM,s,u,e,n,a_,i]),this.hitDetectionInstructions.push([q.CUSTOM,s,u,e,r||n,a_,i]);break;case`LineString`:case`Circle`:c=e.getFlatCoordinates(),l=this.appendFlatLineCoordinates(c,0,c.length,o,!1,!1),this.instructions.push([q.CUSTOM,s,l,e,n,i_,i]),this.hitDetectionInstructions.push([q.CUSTOM,s,l,e,r||n,i_,i]);break;case`MultiPoint`:c=e.getFlatCoordinates(),l=this.appendFlatPointCoordinates(c,o),l>s&&(this.instructions.push([q.CUSTOM,s,l,e,n,i_,i]),this.hitDetectionInstructions.push([q.CUSTOM,s,l,e,r||n,i_,i]));break;case`Point`:c=e.getFlatCoordinates(),this.coordinates.push(c[0],c[1]),l=this.coordinates.length,this.instructions.push([q.CUSTOM,s,l,e,n,void 0,i]),this.hitDetectionInstructions.push([q.CUSTOM,s,l,e,r||n,void 0,i])}this.endGeometry(t)}beginGeometry(e,t,n){this.beginGeometryInstruction1_=[q.BEGIN_GEOMETRY,t,0,e,n],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[q.BEGIN_GEOMETRY,t,0,e,n],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){let e=this.hitDetectionInstructions;e.reverse();let t,n=e.length,r,i,a=-1;for(t=0;t<n;++t)r=e[t],i=r[0],i==q.END_GEOMETRY?a=t:i==q.BEGIN_GEOMETRY&&(r[2]=t,Tm(this.hitDetectionInstructions,a,t),a=-1)}fillStyleToState(e,t={}){if(e){let n=e.getColor();t.fillPatternScale=n&&typeof n==`object`&&`src`in n?this.pixelRatio:1,t.fillStyle=Gm(n||`#000`)??void 0}else t.fillStyle=void 0;return t}strokeStyleToState(e,t={}){if(e){t.strokeStyle=Gm(e.getColor()||mh);let n=e.getLineCap();t.lineCap=n===void 0?dh:n;let r=e.getLineDash();t.lineDash=r?r.slice():fh,t.lineDashOffset=e.getLineDashOffset()||0;let i=e.getLineJoin();t.lineJoin=i===void 0?ph:i;let a=e.getWidth();t.lineWidth=a===void 0?1:a;let o=e.getMiterLimit();t.miterLimit=o===void 0?10:o,t.strokeOffset=e.getOffset()??0,t.lineWidth>this.maxLineWidth&&(this.maxLineWidth=t.lineWidth,this.bufferedMaxExtent_=null)}else t.strokeStyle=void 0,t.lineCap=void 0,t.lineDash=null,t.lineDashOffset=void 0,t.lineJoin=void 0,t.lineWidth=void 0,t.miterLimit=void 0,t.strokeOffset=void 0;return t}setFillStrokeStyle(e,t){let n=this.state;this.fillStyleToState(e,n),this.strokeStyleToState(t,n)}createFill(e){let t=e.fillStyle,n=[q.SET_FILL_STYLE,t];return typeof t!=`string`&&n.push(e.fillPatternScale),n}applyStroke(e){this.instructions.push(this.createStroke(e))}createStroke(e){return[q.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,e.lineDash?this.applyPixelRatio(e.lineDash):null,e.lineDashOffset*this.pixelRatio]}updateFillStyle(e,t){let n=e.fillStyle;(n!==void 0&&typeof n!=`string`||e.currentFillStyle!=n)&&(this.instructions.push(t.call(this,e)),e.currentFillStyle=n)}updateStrokeStyle(e,t){let n=e.strokeStyle,r=e.lineCap,i=e.lineDash,a=e.lineDashOffset,o=e.lineJoin,s=e.lineWidth,c=e.miterLimit,l=e.strokeOffset;(e.currentStrokeStyle!=n||e.currentLineCap!=r||i!=e.currentLineDash&&!Dm(e.currentLineDash,i)||e.currentLineDashOffset!=a||e.currentLineJoin!=o||e.currentLineWidth!=s||e.currentMiterLimit!=c||e.currentStrokeOffset!=l)&&(t.call(this,e),e.currentStrokeStyle=n,e.currentLineCap=r,e.currentLineDash=i,e.currentLineDashOffset=a,e.currentLineJoin=o,e.currentLineWidth=s,e.currentMiterLimit=c,e.currentStrokeOffset=l)}endGeometry(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;let t=[q.END_GEOMETRY,e];this.instructions.push(t),this.hitDetectionInstructions.push(t)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=Xu(this.maxExtent),this.maxLineWidth>0)){let e=this.resolution*(this.maxLineWidth+1)/2;Yu(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}},QC=class extends ZC{constructor(e,t,n,r){super(e,t,n,r),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(e,t,n){if(!this.image_||this.maxExtent&&!Qu(this.maxExtent,e.getFlatCoordinates()))return;this.beginGeometry(e,t,n);let r=e.getFlatCoordinates(),i=e.getStride(),a=this.coordinates.length,o=this.appendFlatPointCoordinates(r,i);this.instructions.push([q.DRAW_IMAGE,a,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([q.DRAW_IMAGE,a,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(t)}drawMultiPoint(e,t,n){if(!this.image_)return;this.beginGeometry(e,t,n);let r=e.getFlatCoordinates(),i=[];for(let t=0,n=r.length;t<n;t+=e.getStride())(!this.maxExtent||Qu(this.maxExtent,r.slice(t,t+2)))&&i.push(r[t],r[t+1]);let a=this.coordinates.length,o=this.appendFlatPointCoordinates(i,2);this.instructions.push([q.DRAW_IMAGE,a,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([q.DRAW_IMAGE,a,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(t)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(e,t){let n=e.getAnchor(),r=e.getSize(),i=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=n[0],this.anchorY_=n[1],this.hitDetectionImage_=e.getHitDetectionImage(),this.image_=e.getImage(this.pixelRatio),this.height_=r[1],this.opacity_=e.getOpacity(),this.originX_=i[0],this.originY_=i[1],this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=r[0],this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=t}},$C=class extends ZC{constructor(e,t,n,r){super(e,t,n,r)}drawFlatCoordinates_(e,t,n,r,i){let a=this.coordinates.length,o=this.appendFlatLineCoordinates(e,t,n,r,!1,!1);return this.instructions.push([q.MOVE_TO_LINE_TO,a,o,i*this.pixelRatio]),this.hitDetectionInstructions.push([q.MOVE_TO_LINE_TO,a,o,i]),n}drawLineString(e,t,n){let r=this.state,i=r.strokeStyle,a=r.lineWidth,o=r.strokeOffset;if(i===void 0||a===void 0)return;this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(e,t,n),this.hitDetectionInstructions.push([q.SET_STROKE_STYLE,mh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,fh,0],YC);let s=e.getFlatCoordinates(),c=e.getStride();this.drawFlatCoordinates_(s,0,s.length,c,o),this.hitDetectionInstructions.push(JC),this.endGeometry(t)}drawMultiLineString(e,t,n){let r=this.state,i=r.strokeStyle,a=r.lineWidth,o=r.strokeOffset;if(i===void 0||a===void 0)return;this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(e,t,n),this.hitDetectionInstructions.push([q.SET_STROKE_STYLE,mh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,fh,0],YC);let s=e.getEnds(),c=e.getFlatCoordinates(),l=e.getStride(),u=0;for(let e=0,t=s.length;e<t;++e)u=this.drawFlatCoordinates_(c,u,s[e],l,o);this.hitDetectionInstructions.push(JC),this.endGeometry(t)}finish(){let e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(JC),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(JC),e.lastStroke=this.coordinates.length),e.lastStroke=0,super.applyStroke(e),this.instructions.push(YC)}},ew=class extends ZC{constructor(e,t,n,r){super(e,t,n,r)}drawFlatCoordinatess_(e,t,n,r,i){let a=this.state,o=a.fillStyle!==void 0,s=a.strokeStyle!==void 0,c=n.length;this.instructions.push(YC),this.hitDetectionInstructions.push(YC);for(let a=0;a<c;++a){let o=n[a],c=this.coordinates.length,l=this.appendFlatLineCoordinates(e,t,o,r,!0,!s);this.instructions.push([q.MOVE_TO_LINE_TO,c,l,i*this.pixelRatio,!0]),this.hitDetectionInstructions.push([q.MOVE_TO_LINE_TO,c,l,i,!0]),s&&(this.instructions.push(XC),this.hitDetectionInstructions.push(XC)),t=o}return o&&(this.instructions.push(qC),this.hitDetectionInstructions.push(qC)),s&&(this.instructions.push(JC),this.hitDetectionInstructions.push(JC)),t}drawCircle(e,t,n){let r=this.state,i=r.fillStyle,a=r.strokeStyle,o=r.strokeOffset;if(i===void 0&&a===void 0||this.handleStrokeOffset_(()=>this.drawCircle(e,t,n)))return;this.setFillStrokeStyles_(),this.beginGeometry(e,t,n),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([q.SET_FILL_STYLE,uh]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([q.SET_STROKE_STYLE,mh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,fh,0]);let s=e.getFlatCoordinates(),c=e.getStride(),l=this.coordinates.length;this.appendFlatLineCoordinates(s,0,s.length,c,!1,!1);let u=[q.CIRCLE,l,o];this.instructions.push(YC,u),this.hitDetectionInstructions.push(YC,u),r.fillStyle!==void 0&&(this.instructions.push(qC),this.hitDetectionInstructions.push(qC)),r.strokeStyle!==void 0&&(this.instructions.push(JC),this.hitDetectionInstructions.push(JC)),this.endGeometry(t)}drawPolygon(e,t,n){let r=this.state,i=r.fillStyle,a=r.strokeStyle,o=r.strokeOffset;if(i===void 0&&a===void 0||this.handleStrokeOffset_(()=>this.drawPolygon(e,t,n)))return;this.setFillStrokeStyles_(),this.beginGeometry(e,t,n),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([q.SET_FILL_STYLE,uh]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([q.SET_STROKE_STYLE,mh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,fh,0]);let s=e.getEnds(),c=e.getOrientedFlatCoordinates(),l=e.getStride();this.drawFlatCoordinatess_(c,0,s,l,o),this.endGeometry(t)}drawMultiPolygon(e,t,n){let r=this.state,i=r.fillStyle,a=r.strokeStyle,o=r.strokeOffset;if(i===void 0&&a===void 0||this.handleStrokeOffset_(()=>this.drawMultiPolygon(e,t,n)))return;this.setFillStrokeStyles_(),this.beginGeometry(e,t,n),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([q.SET_FILL_STYLE,uh]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([q.SET_STROKE_STYLE,mh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,fh,0]);let s=e.getEndss(),c=e.getOrientedFlatCoordinates(),l=e.getStride(),u=0;for(let e=0,t=s.length;e<t;++e)u=this.drawFlatCoordinatess_(c,u,s[e],l,o);this.endGeometry(t)}finish(){this.reverseHitDetectionInstructions(),this.state=null;let e=this.tolerance;if(e!==0){let t=this.coordinates;for(let n=0,r=t.length;n<r;++n)t[n]=C_(t[n],e)}return super.finish()}setFillStrokeStyles_(){let e=this.state;this.updateFillStyle(e,this.createFill),this.updateStrokeStyle(e,this.applyStroke)}handleStrokeOffset_(e){let t=this.state,n=t.fillStyle,r=t.strokeStyle,i=t.strokeOffset;return Math.abs(i)>0&&n!==void 0&&r!==void 0&&(t.strokeStyle=void 0,t.strokeOffset=0,e(),t.fillStyle=void 0,t.strokeStyle=r,t.strokeOffset=i,e(),t.fillStyle=n,!0)}},tw=0,nw=1;function rw(e,t,n,r,i,a,o,s){let c=o-i,l=s-a,u=0,d=1;if(c===0){if(i<e||i>n)return!1}else{let t=(e-i)/c,r=(n-i)/c;if(t>r){let e=t;t=r,r=e}if(t>u&&(u=t),r<d&&(d=r),u>d)return!1}if(l===0){if(a<t||a>r)return!1}else{let e=(t-a)/l,n=(r-a)/l;if(e>n){let t=e;e=n,n=t}if(e>u&&(u=e),n<d&&(d=n),u>d)return!1}return tw=u,nw=d,!0}function iw(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=r[3],c=[],l=[],u=!1,d,f,p=0;for(let r=0,m=t.length;r<m;++r){let m=t[r],h=e[p],g=e[p+1],_=!1;for(let t=p+n;t<m;t+=n){let n=e[t],r=e[t+1];if(rw(i,a,o,s,h,g,n,r)){let e=n-h,t=r-g,i=h+tw*e,a=g+tw*t,o=h+nw*e,s=g+nw*t;u&&_&&i===d&&a===f?c.push(o,s):(u&&l.push(c.length),c.push(i,a,o,s),u=!0),d=o,f=s,_=!0}h=n,g=r}p=m}return u&&l.push(c.length),{flatCoordinates:c,ends:l}}function aw(e,t,n,r,i){let a=[],o=n,s=0,c=t.slice(n,2);for(;s<e&&o+i<r;){let[n,r]=c.slice(-2),l=t[o+i],u=t[o+i+1],d=Math.sqrt((l-n)*(l-n)+(u-r)*(u-r));if(s+=d,s>=e){let t=(e-s+d)/d,f=Bd(n,l,t),p=Bd(r,u,t);c.push(f,p),a.push(c),c=[f,p],s==e&&(o+=i),s=0}else if(s<e)c.push(t[o+i],t[o+i+1]),o+=i;else{let e=d-s,t=Bd(n,l,e/d),f=Bd(r,u,e/d);c.push(t,f),a.push(c),c=[t,f],s=0,o+=i}}return s>0&&a.push(c),a}function ow(e,t,n,r,i){let a=n,o=n,s=0,c=0,l=n,u,d,f,p,m,h,g,_,v,y;for(d=n;d<r;d+=i){let n=t[d],r=t[d+1];m!==void 0&&(v=n-m,y=r-h,p=Math.sqrt(v*v+y*y),g!==void 0&&(c+=f,u=Math.acos((g*v+_*y)/(f*p)),u>e&&(c>s&&(s=c,a=l,o=d),c=0,l=d-i)),f=p,g=v,_=y),m=n,h=r}return c+=p,c>s?[l,d]:[a,o]}var sw={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},cw={Circle:ew,Default:ZC,Image:QC,LineString:$C,Polygon:ew,Text:class extends ZC{constructor(e,t,n,r){super(e,t,n,r),this.labels_=null,this.text_=``,this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textKeepUpright_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[uh]={fillStyle:uh},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_=``,this.fillKey_=``,this.strokeKey_=``,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}finish(){let e=super.finish();return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e}drawText(e,t,n){let r=this.textFillState_,i=this.textStrokeState_,a=this.textState_;if(this.text_===``||!a||!r&&!i)return;let o=this.coordinates,s=o.length,c=e.getType(),l=null,u=e.getStride();if(a.placement===`line`&&(c==`LineString`||c==`MultiLineString`||c==`Polygon`||c==`MultiPolygon`)){let r=e.getExtent();if(!Ed(this.maxExtent,r))return;let i;if(l=e.getFlatCoordinates(),c==`LineString`)i=[l.length];else if(c==`MultiLineString`)i=e.getEnds();else if(c==`Polygon`)i=e.getEnds().slice(0,1);else if(c==`MultiPolygon`){let t=e.getEndss();i=[];for(let e=0,n=t.length;e<n;++e)i.push(t[e][0])}if((c==`LineString`||c==`MultiLineString`)&&!$u(this.getBufferedMaxExtent(),r)){let e=iw(l,i,u,this.getBufferedMaxExtent());if(l=e.flatCoordinates,i=e.ends,u=2,i.length===0)return}this.beginGeometry(e,t,n);let d=a.repeat,f=d?void 0:a.textAlign,p=0;for(let e=0,t=i.length;e<t;++e){let t;t=d?aw(d*this.resolution,l,p,i[e],u):[l.slice(p,i[e])];for(let n=0,r=t.length;n<r;++n){let r=t[n],c=0,l=r.length;if(f==null){let e=ow(a.maxAngle,r,0,r.length,2);c=e[0],l=e[1]}for(let e=c;e<l;e+=u)o.push(r[e],r[e+1]);let d=o.length;p=i[e],this.drawChars_(s,d),s=d}}this.endGeometry(t)}else{let r=a.overflow?null:[];switch(c){case`Point`:case`MultiPoint`:l=e.getFlatCoordinates();break;case`LineString`:l=e.getFlatMidpoint();break;case`Circle`:l=e.getCenter();break;case`MultiLineString`:l=e.getFlatMidpoints(),u=2;break;case`Polygon`:l=e.getFlatInteriorPoint(),a.overflow||r.push(l[2]/this.resolution),u=3;break;case`MultiPolygon`:let t=e.getFlatInteriorPoints();l=[];for(let e=0,n=t.length;e<n;e+=3)a.overflow||r.push(t[e+2]/this.resolution),l.push(t[e],t[e+1]);if(l.length===0)return;u=2}let i=this.appendFlatPointCoordinates(l,u);if(i===s)return;if(r&&(i-s)/2!==l.length/u){let e=s/2;r=r.filter((t,n)=>{let r=o[(e+n)*2]===l[n*u]&&o[(e+n)*2+1]===l[n*u+1];return r||--e,r})}this.saveTextStates_();let d=a.backgroundFill?this.createFill(this.fillStyleToState(a.backgroundFill)):null,f=a.backgroundStroke?this.createStroke(this.strokeStyleToState(a.backgroundStroke)):null;this.beginGeometry(e,t,n);let p=a.padding;if(p!=_h&&(a.scale[0]<0||a.scale[1]<0)){let e=a.padding[0],t=a.padding[1],n=a.padding[2],r=a.padding[3];a.scale[0]<0&&(t=-t,r=-r),a.scale[1]<0&&(e=-e,n=-n),p=[e,t,n,r]}let m=this.pixelRatio;this.instructions.push([q.DRAW_IMAGE,s,i,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterMode_,this.declutterImageWithText_,p==_h?_h:p.map(function(e){return e*m}),d,f,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,r]);let h=1/m,g=d?d.slice(0):null;g&&(g[1]=uh),this.hitDetectionInstructions.push([q.DRAW_IMAGE,s,i,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[h,h],NaN,this.declutterMode_,this.declutterImageWithText_,p,g,f,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?uh:this.fillKey_,this.textOffsetX_,this.textOffsetY_,r]),this.endGeometry(t)}}saveTextStates_(){let e=this.textStrokeState_,t=this.textState_,n=this.textFillState_,r=this.strokeKey_;e&&(r in this.strokeStates||(this.strokeStates[r]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));let i=this.textKey_;i in this.textStates||(this.textStates[i]={font:t.font,textAlign:t.textAlign||`center`,justify:t.justify,textBaseline:t.textBaseline||`middle`,scale:t.scale});let a=this.fillKey_;n&&(a in this.fillStates||(this.fillStates[a]={fillStyle:n.fillStyle}))}drawChars_(e,t){let n=this.textStrokeState_,r=this.textState_,i=this.strokeKey_,a=this.textKey_,o=this.fillKey_;this.saveTextStates_();let s=this.pixelRatio,c=sw[r.textBaseline],l=this.textOffsetX_*s,u=this.textOffsetY_*s,d=this.text_,f=n?n.lineWidth*Math.abs(r.scale[0])/2:0;this.instructions.push([q.DRAW_CHARS,e,t,c,r.overflow,o,r.maxAngle,s,u,i,f*s,d,a,1,this.declutterMode_,this.textKeepUpright_,l]),this.hitDetectionInstructions.push([q.DRAW_CHARS,e,t,c,r.overflow,o&&uh,r.maxAngle,s,u,i,f*s,d,a,1/s,this.declutterMode_,this.textKeepUpright_,l])}setTextStyle(e,t){let n,r,i;if(!e)this.text_=``;else{let t=e.getFill();t?(r=this.textFillState_,r||(r={},this.textFillState_=r),r.fillStyle=Gm(t.getColor()||`#000`)):(r=null,this.textFillState_=r);let a=e.getStroke();if(!a)i=null,this.textStrokeState_=i;else{i=this.textStrokeState_,i||(i={},this.textStrokeState_=i);let e=a.getLineDash(),t=a.getLineDashOffset(),n=a.getWidth(),r=a.getMiterLimit();i.lineCap=a.getLineCap()||`round`,i.lineDash=e?e.slice():fh,i.lineDashOffset=t===void 0?0:t,i.lineJoin=a.getLineJoin()||`round`,i.lineWidth=n===void 0?1:n,i.miterLimit=r===void 0?10:r,i.strokeStyle=Gm(a.getColor()||`#000`)}n=this.textState_;let o=e.getFont()||`10px sans-serif`;wh(o);let s=e.getScaleArray();n.overflow=e.getOverflow(),n.font=o,n.maxAngle=e.getMaxAngle(),n.placement=e.getPlacement(),n.textAlign=e.getTextAlign(),n.repeat=e.getRepeat(),n.justify=e.getJustify(),n.textBaseline=e.getTextBaseline()||`middle`,n.backgroundFill=e.getBackgroundFill(),n.backgroundStroke=e.getBackgroundStroke(),n.padding=e.getPadding()||_h,n.scale=s===void 0?[1,1]:s;let c=e.getOffsetX(),l=e.getOffsetY(),u=e.getRotateWithView(),d=e.getKeepUpright(),f=e.getRotation();this.text_=e.getText()||``,this.textOffsetX_=c===void 0?0:c,this.textOffsetY_=l===void 0?0:l,this.textRotateWithView_=u!==void 0&&u,this.textKeepUpright_=d===void 0||d,this.textRotation_=f===void 0?0:f,this.strokeKey_=i?(typeof i.strokeStyle==`string`?i.strokeStyle:Zm(i.strokeStyle))+i.lineCap+i.lineDashOffset+`|`+i.lineWidth+i.lineJoin+i.miterLimit+`[`+i.lineDash.join()+`]`:``,this.textKey_=n.font+n.scale+(n.textAlign||`?`)+(n.repeat||`?`)+(n.justify||`?`)+(n.textBaseline||`?`),this.fillKey_=r&&r.fillStyle?typeof r.fillStyle==`string`?r.fillStyle:`|`+Zm(r.fillStyle):``}this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=t}}},lw=class{constructor(e,t,n,r){this.tolerance_=e,this.maxExtent_=t,this.pixelRatio_=r,this.resolution_=n,this.buildersByZIndex_={}}finish(){let e={};for(let t in this.buildersByZIndex_){e[t]=e[t]||{};let n=this.buildersByZIndex_[t];for(let r in n){let i=n[r].finish();e[t][r]=i}}return e}getBuilder(e,t){let n=e===void 0?`0`:e.toString(),r=this.buildersByZIndex_[n];r===void 0&&(r={},this.buildersByZIndex_[n]=r);let i=r[t];if(i===void 0){let e=cw[t];i=new e(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),r[t]=i}return i}},uw;function dw(){return uw||=new Intl.Segmenter(void 0,{granularity:`grapheme`}),uw}function fw(e,t,n,r,i,a,o,s,c,l,u,d,f=!0){let p=e[t],m=e[t+1],h=0,g=0,_=0,v=0;function y(){h=p,g=m,t+=r,p=e[t],m=e[t+1],v+=_,_=Math.sqrt((p-h)*(p-h)+(m-g)*(m-g))}do y();while(t<n-r&&v+_<a);let b=_===0?0:(a-v)/_,x=Bd(h,p,b),S=Bd(g,m,b),C=t-r,w=v,T=a+s*c(l,i,u);for(;t<n-r&&v+_<T;)y();b=_===0?0:(T-v)/_;let E=Bd(h,p,b),D=Bd(g,m,b),ee=!1;if(f){if(d){let e=[x,S,E,D];lg(e,0,4,2,d,e,e),ee=e[0]>e[2]}else ee=x>E}let O=Math.PI,k=[],te=C+r===t;t=C,_=0,v=w,p=e[t],m=e[t+1];let ne;if(te)return y(),ne=Math.atan2(m-g,p-h),ee&&(ne+=ne>0?-O:O),k[0]=[(E+x)/2,(D+S)/2,(T-a)/2,ne,i],k;i=i.replace(/\n/g,` `);let re=Array.from(dw().segment(i),e=>e.segment);for(let e=0,i=re.length;e<i;){y();let d=Math.atan2(m-g,p-h);if(ee&&(d+=d>0?-O:O),ne!==void 0){let e=d-ne;if(e+=e>O?-2*O:e<-O?2*O:0,Math.abs(e)>o)return null}ne=d;let f=e,x=0;for(;e<i;++e){let o=s*c(l,re[ee?i-e-1:e],u);if(t+r<n&&v+_<a+x+o/2)break;x+=o}if(e===f)continue;let S=(ee?re.slice(i-e,i-f):re.slice(f,e)).join(``);b=_===0?0:(a+x/2-v)/_;let C=Bd(h,p,b),w=Bd(g,m,b);k.push([C,w,x/2,d,S]),a+=x}return k}var pw=nd(),mw=[],hw=[],gw=[],_w=[];function vw(e){return e[3].declutterBox}var yw=RegExp(`[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]`);function bw(e,t){return t===`start`?t=yw.test(e)?`right`:`left`:t===`end`&&(t=yw.test(e)?`left`:`right`),sw[t]}function xw(e,t,n){return n>0&&e.push(`
`,``),e.push(t,``),e}function Sw(e,t,n){return n%2==0&&(e+=t),e}var Cw=class{constructor(e,t,n,r,i){this.overlaps=n,this.pixelRatio=t,this.resolution=e,this.alignAndScaleFill_,this.instructions=r.instructions,this.coordinates=r.coordinates,this.coordinateCache_={},this.renderedTransform_=Zh(),this.hitDetectionInstructions=r.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=r.fillStates||{},this.strokeStates=r.strokeStates||{},this.textStates=r.textStates||{},this.widths_={},this.labels_={},this.zIndexContext_=i?new $S:null}getZIndexContext(){return this.zIndexContext_}createLabel(e,t,n,r){let i=e+t+n+r;if(this.labels_[i])return this.labels_[i];let a=r?this.strokeStates[r]:null,o=n?this.fillStates[n]:null,s=this.textStates[t],c=this.pixelRatio,l=[s.scale[0]*c,s.scale[1]*c],u=s.justify?sw[s.justify]:bw(Array.isArray(e)?e[0]:e,s.textAlign||`center`),d=r&&a.lineWidth?a.lineWidth:0,f=Array.isArray(e)?e:String(e).split(`
`).reduce(xw,[]),{width:p,height:m,widths:h,heights:g,lineWidths:_}=kh(s,f),v=p+d,y=[],b=(v+2)*l[0],x=(m+d)*l[1],S={width:b<0?Math.floor(b):Math.ceil(b),height:x<0?Math.floor(x):Math.ceil(x),contextInstructions:y};(l[0]!=1||l[1]!=1)&&y.push(`scale`,l),r&&(y.push(`strokeStyle`,a.strokeStyle),y.push(`lineWidth`,d),y.push(`lineCap`,a.lineCap),y.push(`lineJoin`,a.lineJoin),y.push(`miterLimit`,a.miterLimit),y.push(`setLineDash`,[a.lineDash]),y.push(`lineDashOffset`,a.lineDashOffset)),n&&y.push(`fillStyle`,o.fillStyle),y.push(`textBaseline`,`middle`),y.push(`textAlign`,`center`);let C=.5-u,w=u*v+C*d,T=[],E=[],D=0,ee=0,O=0,k=0,te;for(let e=0,t=f.length;e<t;e+=2){let t=f[e];if(t===`
`){ee+=D,D=0,w=u*v+C*d,++k;continue}let i=f[e+1]||s.font;i!==te&&(r&&T.push(`font`,i),n&&E.push(`font`,i),te=i),D=Math.max(D,g[O]);let a=[t,w+C*h[O]+u*(h[O]-_[k]),.5*(d+D)+ee];w+=h[O],r&&T.push(`strokeText`,a),n&&E.push(`fillText`,a),++O}return Array.prototype.push.apply(y,T),Array.prototype.push.apply(y,E),this.labels_[i]=S,S}replayTextBackground_(e,t,n,r,i,a,o){e.beginPath(),e.moveTo.apply(e,t),e.lineTo.apply(e,n),e.lineTo.apply(e,r),e.lineTo.apply(e,i),e.lineTo.apply(e,t),a&&(this.alignAndScaleFill_=a[2],e.fillStyle=a[1],this.fill_(e)),o&&(this.setStrokeStyle_(e,o),e.stroke())}calculateImageOrLabelDimensions_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){o*=d[0],s*=d[1];let g=n-o,_=r-s,v=i+c>e?e-c:i,y=a+l>t?t-l:a,b=p[3]+v*d[0]+p[1],x=p[0]+y*d[1]+p[2],S=g-p[3],C=_-p[0];(m||u!==0)&&(mw[0]=S,_w[0]=S,mw[1]=C,hw[1]=C,hw[0]=S+b,gw[0]=hw[0],gw[1]=C+x,_w[1]=gw[1]);let w;return u===0?rd(Math.min(S,S+b),Math.min(C,C+x),Math.max(S,S+b),Math.max(C,C+x),pw):(w=tg(Zh(),n,r,1,1,u,-n,-r),eg(w,mw),eg(w,hw),eg(w,gw),eg(w,_w),rd(Math.min(mw[0],hw[0],gw[0],_w[0]),Math.min(mw[1],hw[1],gw[1],_w[1]),Math.max(mw[0],hw[0],gw[0],_w[0]),Math.max(mw[1],hw[1],gw[1],_w[1]),pw)),f&&(g=Math.round(g),_=Math.round(_)),{drawImageX:g,drawImageY:_,drawImageW:v,drawImageH:y,originX:c,originY:l,declutterBox:{minX:pw[0],minY:pw[1],maxX:pw[2],maxY:pw[3],value:h},canvasTransform:w,scale:d}}replayImageOrLabel_(e,t,n,r,i,a,o){let s=!!(a||o),c=r.declutterBox,l=o?o[2]*r.scale[0]/2:0;return c.minX-l<=t[0]&&c.maxX+l>=0&&c.minY-l<=t[1]&&c.maxY+l>=0&&(s&&this.replayTextBackground_(e,mw,hw,gw,_w,a,o),Ah(e,r.canvasTransform,i,n,r.originX,r.originY,r.drawImageW,r.drawImageH,r.drawImageX,r.drawImageY,r.scale)),!0}fill_(e){let t=this.alignAndScaleFill_;if(t){let n=eg(this.renderedTransform_,[0,0]),r=512*this.pixelRatio;e.save(),e.translate(n[0]%r,n[1]%r),t!==1&&e.scale(t,t)}e.fill(),t&&e.restore()}setStrokeStyle_(e,t){e.strokeStyle=t[1],t[1]&&(e.lineWidth=t[2],e.lineCap=t[3],e.lineJoin=t[4],e.miterLimit=t[5],e.lineDashOffset=t[7],e.setLineDash(t[6]))}drawLabelWithPointPlacement_(e,t,n,r){let i=this.textStates[t],a=this.createLabel(e,t,r,n),o=this.strokeStates[n],s=this.pixelRatio,c=bw(Array.isArray(e)?e[0]:e,i.textAlign||`center`),l=sw[i.textBaseline||`middle`],u=o&&o.lineWidth?o.lineWidth:0;return{label:a,anchorX:c*(a.width/s-2*i.scale[0])+2*(.5-c)*u,anchorY:l*a.height/s+2*(.5-l)*u}}execute_(e,t,n,r,i,a,o,s){let c=this.zIndexContext_,l;this.pixelCoordinates_&&Dm(n,this.renderedTransform_)?l=this.pixelCoordinates_:(this.pixelCoordinates_||=[],l=cg(this.coordinates,0,this.coordinates.length,2,n,this.pixelCoordinates_),$h(this.renderedTransform_,n));let u=0,d=r.length,f=0,p,m=[],h,g,_,v,y,b,x,S,C,w,T,E,D,ee=0,O=0,k=this.coordinateCache_,te=this.viewRotation_,ne=Math.round(Math.atan2(-n[1],n[0])*0xe8d4a51000)/0xe8d4a51000,re={context:e,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:te},ie=this.instructions!=r||this.overlaps?0:200,ae,oe,se,ce;for(;u<d;){let n=r[u];switch(n[0]){case q.BEGIN_GEOMETRY:ae=n[1],ce=n[3],ae.getGeometry()?o!==void 0&&!Ed(o,ce.getExtent())?u=n[2]+1:++u:u=n[2],c&&(c.zIndex=n[4]);break;case q.BEGIN_PATH:ee>ie&&(this.fill_(e),ee=0),O>ie&&(e.stroke(),O=0),!ee&&!O&&(e.beginPath(),y=NaN,b=NaN),++u;break;case q.CIRCLE:f=n[1],_=n[2]??0;let r=l[f],d=l[f+1],le=l[f+2]-_,ue=l[f+3]-_,de=le-r,fe=ue-d,pe=Math.sqrt(de*de+fe*fe);e.moveTo(r+pe,d),e.arc(r,d,pe,0,2*Math.PI,!0),++u;break;case q.CLOSE_PATH:e.closePath(),++u;break;case q.CUSTOM:f=n[1],p=n[2];let me=n[3],he=n[4],ge=n[5];re.geometry=me,re.feature=ae,u in k||(k[u]=[]);let _e=k[u];ge?ge(l,f,p,2,_e):(_e[0]=l[f],_e[1]=l[f+1],_e.length=2),c&&(c.zIndex=n[6]),he(_e,re),++u;break;case q.DRAW_IMAGE:f=n[1],p=n[2],C=n[3],h=n[4],g=n[5];let ve=n[6],ye=n[7],be=n[8],xe=n[9],Se=n[10],Ce=n[11],we=n[12],Te=n[13];v=n[14]||`declutter`;let Ee=n[15];if(!C&&n.length>=20){w=n[19],T=n[20],E=n[21],D=n[22];let e=this.drawLabelWithPointPlacement_(w,T,E,D);C=e.label,n[3]=C;let t=n[23];h=(e.anchorX-t)*this.pixelRatio,n[4]=h;let r=n[24];g=(e.anchorY-r)*this.pixelRatio,n[5]=g,ve=C.height,n[6]=ve,Te=C.width,n[13]=Te}let De;n.length>25&&(De=n[25]);let Oe,ke,Ae;n.length>17?(Oe=n[16],ke=n[17],Ae=n[18]):(Oe=_h,ke=null,Ae=null),Se&&ne?Ce+=te:!Se&&!ne&&(Ce-=te);let je=0;for(;f<p;f+=2){if(De&&De[je++]<Te/this.pixelRatio)continue;let n=this.calculateImageOrLabelDimensions_(C.width,C.height,l[f],l[f+1],Te,ve,h,g,be,xe,Ce,we,i,Oe,!!ke||!!Ae,ae),r=[e,t,C,n,ye,ke,Ae];if(s){let e,t,i;if(Ee){let n=p-f;if(!Ee[n]){Ee[n]={args:r,declutterMode:v};continue}let a=Ee[n];e=a.args,t=a.declutterMode,delete Ee[n],i=vw(e)}let a,o;if(e&&(t!==`declutter`||!s.collides(i))&&(a=!0),(v!==`declutter`||!s.collides(n.declutterBox))&&(o=!0),t===`declutter`&&v===`declutter`){let e=a&&o;a=e,o=e}a&&(t!==`none`&&s.insert(i),this.replayImageOrLabel_.apply(this,e)),o&&(v!==`none`&&s.insert(n.declutterBox),this.replayImageOrLabel_.apply(this,r))}else this.replayImageOrLabel_.apply(this,r)}++u;break;case q.DRAW_CHARS:let Me=n[1],Ne=n[2],A=n[3],Pe=n[4];D=n[5];let Fe=n[6],Ie=n[7],Le=n[8];E=n[9];let Re=n[10];w=n[11],Array.isArray(w)&&(w=w.reduce(Sw,``)),T=n[12];let ze=[n[13],n[13]];v=n[14]||`declutter`;let Be=n[15],Ve=n[16],He=this.textStates[T],Ue=He.font,We=[He.scale[0]*Ie,He.scale[1]*Ie],Ge;Ue in this.widths_?Ge=this.widths_[Ue]:(Ge={},this.widths_[Ue]=Ge);let Ke=b_(l,Me,Ne,2),qe=Math.abs(We[0])*Oh(Ue,w,Ge);if(Pe||qe<=Ke){let n=this.textStates[T].textAlign,r=(Ke-qe)*bw(w,n),i=fw(l,Me,Ne,2,w,r,Fe,Math.abs(We[0]),Oh,Ue,Ge,ne?0:this.viewRotation_,Be);drawChars:if(i){let n=[],r,a,o,c,l;if(E)for(r=0,a=i.length;r<a;++r){l=i[r],o=l[4],c=this.createLabel(o,T,``,E),h=l[2]+(We[0]<0?-Re:Re)-Ve,g=A*c.height+(.5-A)*2*Re*We[1]/We[0]-Le;let a=this.calculateImageOrLabelDimensions_(c.width,c.height,l[0],l[1],c.width,c.height,h,g,0,0,l[3],ze,!1,_h,!1,ae);if(s&&v===`declutter`&&s.collides(a.declutterBox))break drawChars;n.push([e,t,c,a,1,null,null])}if(D)for(r=0,a=i.length;r<a;++r){l=i[r],o=l[4],c=this.createLabel(o,T,D,``),h=l[2]-Ve,g=A*c.height-Le;let a=this.calculateImageOrLabelDimensions_(c.width,c.height,l[0],l[1],c.width,c.height,h,g,0,0,l[3],ze,!1,_h,!1,ae);if(s&&v===`declutter`&&s.collides(a.declutterBox))break drawChars;n.push([e,t,c,a,1,null,null])}s&&v!==`none`&&s.load(n.map(vw));for(let e=0,t=n.length;e<t;++e)this.replayImageOrLabel_.apply(this,n[e])}}++u;break;case q.END_GEOMETRY:if(a!==void 0){ae=n[1];let e=a(ae,ce,v);if(e)return e}++u;break;case q.FILL:ie?ee++:this.fill_(e),++u;break;case q.MOVE_TO_LINE_TO:f=n[1],p=n[2],_=n[3];let Je,Ye,Xe;if(_){let e=(n[4]??!1)||Math.abs(l[f]-l[p-2])<1e-6&&Math.abs(l[f+1]-l[p-1])<1e-6;wg(l,f,p,2,_,e,m),Eg(m,2,e),Je=m,Ye=0,Xe=Je.length}else Je=l,Ye=f,Xe=p;oe=Je[Ye],se=Je[Ye+1],e.moveTo(oe,se),y=oe+.5|0,b=se+.5|0;for(let t=Ye+2;t<Xe;t+=2)oe=Je[t],se=Je[t+1],x=oe+.5|0,S=se+.5|0,(t==Xe-2||x!==y||S!==b)&&(e.lineTo(oe,se),y=x,b=S);++u;break;case q.SET_FILL_STYLE:this.alignAndScaleFill_=n[2],ee?(this.fill_(e),ee=0,O&&=(e.stroke(),0)):O&&n[1]&&(e.stroke(),O=0),e.fillStyle=n[1],++u;break;case q.SET_STROKE_STYLE:ee&&n[1]&&(this.fill_(e),ee=0),O&&=(e.stroke(),0),this.setStrokeStyle_(e,n),++u;break;case q.STROKE:ie?O++:e.stroke(),++u;break;default:++u}}ee&&this.fill_(e),O&&e.stroke()}execute(e,t,n,r,i,a){this.viewRotation_=r,this.execute_(e,t,n,this.instructions,i,void 0,void 0,a)}executeHitDetection(e,t,n,r,i){return this.viewRotation_=n,this.execute_(e,[e.canvas.width,e.canvas.height],t,this.hitDetectionInstructions,!0,r,i)}},ww=[`Polygon`,`Circle`,`LineString`,`Image`,`Text`,`Default`],Tw=[`Image`,`Text`],Ew=ww.filter(e=>!Tw.includes(e)),Dw=!1,Ow=!1;function kw(){let e=0,t=t=>{let n=Ip(1,1,null,{willReadFrequently:t}),r=0,i=performance.now();for(;performance.now()-i<50;++r)n.fillStyle=`rgba(255,0,${r%256},1)`,n.fillRect(0,0,1,1),n.getImageData(0,0,1,1);return e=r>e?r:e,r};Dw={[t(!0)]:!0,[t(!1)]:!1,[t(void 0)]:void 0}[e],Ow=!0}var Aw=class{constructor(e,t,n,r,i,a,o){this.maxExtent_=e,this.overlaps_=r,this.pixelRatio_=n,this.resolution_=t,this.renderBuffer_=a,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=Zh(),this.renderedContext_=null,this.deferredZIndexContexts_={},this.createExecutors_(i,o)}clip(e,t){let n=this.getClipCoords(t);e.beginPath(),e.moveTo(n[0],n[1]),e.lineTo(n[2],n[3]),e.lineTo(n[4],n[5]),e.lineTo(n[6],n[7]),e.clip()}createExecutors_(e,t){for(let n in e){let r=this.executorsByZIndex_[n];r===void 0&&(r={},this.executorsByZIndex_[n]=r);let i=e[n];for(let e in i){let n=i[e];r[e]=new Cw(this.resolution_,this.pixelRatio_,this.overlaps_,n,t)}}}hasExecutors(e){for(let t in this.executorsByZIndex_){let n=this.executorsByZIndex_[t];for(let t=0,r=e.length;t<r;++t)if(e[t]in n)return!0}return!1}forEachFeatureAtCoordinate(e,t,n,r,i,a){Ow===!1&&kw(),r=Math.round(r);let o=r*2+1,s=tg(this.hitDetectionTransform_,r+.5,r+.5,1/t,-1/t,-n,-e[0],-e[1]),c=!this.hitDetectionContext_;c&&(this.hitDetectionContext_=Ip(o,o,null,{willReadFrequently:Dw}));let l=this.hitDetectionContext_;l.canvas.width!==o||l.canvas.height!==o?(l.canvas.width=o,l.canvas.height=o):c||l.clearRect(0,0,o,o);let u;this.renderBuffer_!==void 0&&(u=nd(),ld(u,e),Yu(u,t*(this.renderBuffer_+r),u));let d=Mw(r),f;function p(e,t,n){let s=l.getImageData(0,0,o,o).data;for(let c=0,u=d.length;c<u;c++)if(s[d[c]]>0){if(!a||n===`none`||f!==`Image`&&f!==`Text`||a.includes(e)){let n=(d[c]-3)/4,a=r-n%o,s=r-(n/o|0),l=i(e,t,a*a+s*s);if(l)return l}l.clearRect(0,0,o,o);break}}let m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(Sm);let h,g,_,v,y;for(h=m.length-1;h>=0;--h){let e=m[h].toString();for(_=this.executorsByZIndex_[e],g=ww.length-1;g>=0;--g)if(f=ww[g],v=_[f],v!==void 0&&(y=v.executeHitDetection(l,s,n,p,u),y))return y}}getClipCoords(e){let t=this.maxExtent_;if(!t)return null;let n=t[0],r=t[1],i=t[2],a=t[3],o=[n,r,n,a,i,a,i,r];return cg(o,0,8,2,e,o),o}isEmpty(){return yf(this.executorsByZIndex_)}execute(e,t,n,r,i,a,o){let s=Object.keys(this.executorsByZIndex_).map(Number);s.sort(o?Cm:Sm),a||=ww;let c=ww.length;for(let l=0,u=s.length;l<u;++l){let u=s[l].toString(),d=this.executorsByZIndex_[u];for(let u=0,f=a.length;u<f;++u){let f=a[u],p=d[f];if(p!==void 0){let a=o===null?void 0:p.getZIndexContext(),u=a?a.getContext():e,d=this.maxExtent_&&f!==`Image`&&f!==`Text`;if(d&&(u.save(),this.clip(u,n)),!a||f===`Text`||f===`Image`?p.execute(u,t,n,r,i,o):a.pushFunction(e=>p.execute(e,t,n,r,i,o)),d&&u.restore(),a){a.offset();let e=s[l]*c+ww.indexOf(f);this.deferredZIndexContexts_[e]||(this.deferredZIndexContexts_[e]=[]),this.deferredZIndexContexts_[e].push(a)}}}}this.renderedContext_=e}getDeferredZIndexContexts(){return this.deferredZIndexContexts_}getRenderedContext(){return this.renderedContext_}renderDeferred(){let e=this.deferredZIndexContexts_,t=Object.keys(e).map(Number).sort(Sm);for(let n=0,r=t.length;n<r;++n)e[t[n]].forEach(e=>{e.draw(this.renderedContext_),e.clear()}),e[t[n]].length=0}},jw={};function Mw(e){if(jw[e]!==void 0)return jw[e];let t=e*2+1,n=e*e,r=Array(n+1);for(let i=0;i<=e;++i)for(let a=0;a<=e;++a){let o=i*i+a*a;if(o>n)break;let s=r[o];s||(s=[],r[o]=s),s.push(((e+i)*t+(e+a))*4+3),i>0&&s.push(((e-i)*t+(e+a))*4+3),a>0&&(s.push(((e+i)*t+(e-a))*4+3),i>0&&s.push(((e-i)*t+(e-a))*4+3))}let i=[];for(let e=0,t=r.length;e<t;++e)r[e]&&i.push(...r[e]);return jw[e]=i,i}var Nw=.5;function Pw(e,t,n,r,i,a,o,s,c){let l=c?Tp(i,c):i,u=Ip(e[0]*Nw,e[1]*Nw);u.imageSmoothingEnabled=!1;let d=u.canvas,f=new Og(u,Nw,i,null,o,s,c?_p(Sp(),c):null),p=n.length,m=Math.floor(16777215/p),h={};for(let e=1;e<=p;++e){let t=n[e-1],i=t.getStyleFunction()||r;if(!i)continue;let o=i(t,a);if(!o)continue;Array.isArray(o)||(o=[o]);let s=(e*m).toString(16).padStart(7,`#00000`);for(let e=0,n=o.length;e<n;++e){let n=o[e],r=n.getGeometryFunction()(t);if(!r||!Ed(l,r.getExtent()))continue;let i=n.clone(),a=i.getFill();a&&a.setColor(s);let c=i.getStroke();c&&(c.setColor(s),c.setLineDash(null)),i.setText(void 0);let u=n.getImage();if(u){let e=u.getImageSize();if(!e)continue;let t=Ip(e[0],e[1],void 0,{alpha:!1}),n=t.canvas;t.fillStyle=s,t.fillRect(0,0,n.width,n.height),i.setImage(new Vh({img:n,anchor:u.getAnchor(),anchorXUnits:`pixels`,anchorYUnits:`pixels`,offset:u.getOrigin(),opacity:1,size:u.getSize(),scale:u.getScale(),rotation:u.getRotation(),rotateWithView:u.getRotateWithView()}))}let d=i.getZIndex()||0,f=h[d];f||(f={},h[d]=f,f.Polygon=[],f.Circle=[],f.LineString=[],f.Point=[]);let p=r.getType();if(p===`GeometryCollection`){let e=r.getGeometriesArrayRecursive();for(let t=0,n=e.length;t<n;++t){let n=e[t];f[n.getType().replace(`Multi`,``)].push(n,i)}}else f[p.replace(`Multi`,``)].push(r,i)}}let g=Object.keys(h).map(Number).sort(Sm);for(let e=0,n=g.length;e<n;++e){let n=h[g[e]];for(let e in n){let r=n[e];for(let e=0,n=r.length;e<n;e+=2){f.setStyle(r[e+1]);for(let n=0,i=t.length;n<i;++n)f.setTransform(t[n]),f.drawGeometry(r[e])}}}return u.getImageData(0,0,d.width,d.height)}function Fw(e,t,n){let r=[];if(n){let i=Math.floor(Math.round(e[0])*Nw),a=Math.floor(Math.round(e[1])*Nw),o=(Nd(i,0,n.width-1)+Nd(a,0,n.height-1)*n.width)*4,s=n.data[o],c=n.data[o+1],l=n.data[o+2]+256*(c+256*s),u=Math.floor(16777215/t.length);l&&l%u===0&&r.push(t[l/u-1])}return r}var Iw=class extends aC{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.clipExtent_=null,this.extendX_=!1,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=nd(),this.wrappedRenderedExtent_=nd(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedPixelRatio_=1,this.renderedRenderOrder_=null,this.renderedFrameDeclutter_,this.replayGroup_=null,this.replayGroupChanged=!0,this.clipping=!0,this.targetContext_=null,this.opacity_=1}renderWorlds(e,t,n){let r=t.extent,i=t.viewState,a=i.center,o=i.resolution,s=i.projection,c=i.rotation,l=s.getExtent(),u=this.getLayer().getSource(),d=this.getLayer().getDeclutter(),f=t.pixelRatio,p=t.viewHints,m=!(p[Gv.ANIMATING]||p[Gv.INTERACTING]),h=this.context,g=Math.round(Td(r)/o*f),_=Math.round(bd(r)/o*f),v=u.getWrapX()&&s.canWrapX(),y=v?Td(l):null,b=v?Math.ceil((r[2]-l[2])/y)+(this.extendX_?2:1):1,x=v?Math.floor((r[0]-l[0])/y)-+!!this.extendX_:0;do{let r=this.getRenderTransform(a,o,0,f,g,_,x*y);t.declutter&&(r=r.slice(0)),e.execute(h,[h.canvas.width,h.canvas.height],r,c,m,n===void 0?ww:n?Tw:Ew,n?d&&t.declutter[d]:void 0)}while(++x<b)}setDrawContext_(){this.opacity_!==1&&(this.targetContext_=this.context,this.context=Ip(this.context.canvas.width,this.context.canvas.height,nC))}resetDrawContext_(){if(this.opacity_!==1&&this.targetContext_){let e=this.targetContext_.globalAlpha;this.targetContext_.globalAlpha=this.opacity_,this.targetContext_.drawImage(this.context.canvas,0,0),this.targetContext_.globalAlpha=e,zp(this.context),nC.push(this.context.canvas),this.context=this.targetContext_,this.targetContext_=null}}renderDeclutter(e){this.replayGroup_&&this.getLayer().getDeclutter()&&this.renderWorlds(this.replayGroup_,e,!0)}renderDeferredInternal(e){this.replayGroup_&&(this.clipExtent_&&this.clipUnrotated(this.context,e,this.clipExtent_),this.replayGroup_.renderDeferred(),this.clipExtent_&&=(this.context.restore(),null),this.resetDrawContext_())}renderFrame(e,t){let n=e.layerStatesArray[e.layerIndex];this.opacity_=n.opacity;let r=e.viewState;this.prepareContainer(e,t);let i=this.context,a=this.replayGroup_,o=a&&!a.isEmpty();if(!o&&!(this.getLayer().hasListener(ub.PRERENDER)||this.getLayer().hasListener(ub.POSTRENDER)))return this.container;this.setDrawContext_(),this.preRender(i,e);let s=r.projection;this.clipExtent_=null;let c=!1;if(o&&n.extent&&this.clipping){let t=Ep(n.extent,s);o=Ed(t,e.extent),o&&!$u(t,e.extent)&&(e.declutter?this.clipExtent_=t:(this.clipUnrotated(i,e,t),c=!0))}return o&&this.renderWorlds(a,e,!this.getLayer().getDeclutter()&&void 0),c&&i.restore(),this.postRender(i,e),this.renderedRotation_!==r.rotation&&(this.renderedRotation_=r.rotation,this.hitDetectionImageData_=null),e.declutter||this.resetDrawContext_(),this.container}getFeatures(e){return new Promise(t=>{if(this.frameState&&!this.hitDetectionImageData_&&!this.animatingOrInteracting_){let e=this.frameState.size.slice(),t=this.renderedCenter_,n=this.renderedResolution_,r=this.renderedRotation_,i=this.renderedProjection_,a=this.wrappedRenderedExtent_,o=this.getLayer(),s=[],c=e[0]*Nw,l=e[1]*Nw;s.push(this.getRenderTransform(t,n,r,Nw,c,l,0).slice());let u=o.getSource(),d=i.getExtent();if(u.getWrapX()&&i.canWrapX()&&!$u(d,a)){let e=a[0],i=Td(d),o=0,u;for(;e<d[0];)--o,u=i*o,s.push(this.getRenderTransform(t,n,r,Nw,c,l,u).slice()),e+=i;for(o=0,e=a[2];e>d[2];)++o,u=i*o,s.push(this.getRenderTransform(t,n,r,Nw,c,l,u).slice()),e-=i}let f=Sp();this.hitDetectionImageData_=Pw(e,s,this.renderedFeatures_,o.getStyleFunction(),a,n,r,Mg(n,this.renderedPixelRatio_),f?i:null)}t(Fw(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,t,n,r,i){if(!this.replayGroup_)return;let a=t.viewState.resolution,o=t.viewState.rotation,s=this.getLayer(),c={},l=function(e,t,n){let a=Zm(e),o=c[a];if(!o){if(n===0)return c[a]=!0,r(e,s,t);i.push(c[a]={feature:e,layer:s,geometry:t,distanceSq:n,callback:r})}else if(o!==!0&&n<o.distanceSq){if(n===0)return c[a]=!0,i.splice(i.lastIndexOf(o),1),r(e,s,t);o.geometry=t,o.distanceSq=n}},u=this.getLayer().getDeclutter();return this.replayGroup_.forEachFeatureAtCoordinate(e,a,o,n,l,u?t.declutter?.[u]?.all().map(e=>e.value):null)}handleFontsChanged(){let e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){let t=this.getLayer(),n=t.getSource();if(!n)return!1;let r=e.viewHints[Gv.ANIMATING],i=e.viewHints[Gv.INTERACTING],a=t.getUpdateWhileAnimating(),o=t.getUpdateWhileInteracting();if(this.ready&&!a&&r||!o&&i)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;let s=e.extent,c=e.viewState,l=c.projection,u=c.resolution,d=e.pixelRatio,f=t.getRevision(),p=t.getRenderBuffer(),m=t.getRenderOrder();m===void 0&&(m=jg);let h=c.center.slice(),g=Yu(s,p*u),_=g.slice(),v=[g.slice()],y=l.getExtent(),b=n.getWrapX()&&l.canWrapX();if(this.extendX_=!1,b){let e=n.getExtent();e&&!Dd(e)&&(this.extendX_=e[0]<y[0]||e[2]>y[2])}if(b&&(!$u(y,e.extent)||this.extendX_)){let e=Td(y),t=Math.max(Td(g)/2,e),n=y[0],r=y[2];this.extendX_&&(n-=e,r+=e),g[0]=n-t,g[2]=r+t,Yd(h,l);let i=Ad(v[0],l);i[0]<y[0]&&i[2]<y[2]?v.push([i[0]+e,i[1],i[2]+e,i[3]]):i[0]>y[0]&&i[2]>y[2]&&v.push([i[0]-e,i[1],i[2]-e,i[3]])}if(this.ready&&this.renderedResolution_==u&&this.renderedPixelRatio_===d&&this.renderedRevision_==f&&this.renderedRenderOrder_==m&&this.renderedFrameDeclutter_===!!e.declutter&&$u(this.wrappedRenderedExtent_,g))return Dm(this.renderedExtent_,_)||(this.hitDetectionImageData_=null,this.renderedExtent_=_),this.renderedCenter_=h,this.replayGroupChanged=!1,!0;this.replayGroup_=null;let x=new lw(Ng(u,d),g,u,d),S=Sp(),C;if(S){for(let e=0,t=v.length;e<t;++e){let t=v[e],r=Tp(t,l);n.loadFeatures(r,Dp(u,l),S)}C=_p(S,l)}else for(let e=0,t=v.length;e<t;++e)n.loadFeatures(v[e],u,l);let w=Mg(u,d),T=!0,E=(e,n)=>{let r,i=e.getStyleFunction()||t.getStyleFunction();if(i&&(r=i(e,u)),r){let t=this.renderFeature(e,w,r,x,C,this.getLayer().getDeclutter(),n);T&&=!t}},D=Tp(g,l),ee=n.getFeaturesInExtent(D);m&&ee.sort(m);for(let e=0,t=ee.length;e<t;++e)E(ee[e],e);this.renderedFeatures_=ee,this.ready=T;let O=x.finish(),k=new Aw(g,u,d,n.getOverlaps(),O,t.getRenderBuffer(),!!e.declutter);return this.renderedResolution_=u,this.renderedRevision_=f,this.renderedRenderOrder_=m,this.renderedFrameDeclutter_=!!e.declutter,this.renderedExtent_=_,this.wrappedRenderedExtent_=g,this.renderedCenter_=h,this.renderedProjection_=l,this.renderedPixelRatio_=d,this.replayGroup_=k,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,t,n,r,i,a,o){if(!n)return!1;let s=!1;if(Array.isArray(n))for(let c=0,l=n.length;c<l;++c)s=Fg(r,e,n[c],t,this.boundHandleStyleImageChange_,i,a,o)||s;else s=Fg(r,e,n,t,this.boundHandleStyleImageChange_,i,a,o);return s}},Lw=class extends mS{constructor(e){super(e)}createRenderer(){return new Iw(this)}},Rw=!1;function zw(e,t,n,r,i,a,o){let s=new XMLHttpRequest;s.open(`GET`,typeof e==`function`?e(n,r,i):e,!0),t.getType()==`arraybuffer`&&(s.responseType=`arraybuffer`),s.withCredentials=Rw,s.onload=function(e){if(!s.status||s.status>=200&&s.status<300){let e=t.getType();try{let r;e==`text`||e==`json`?r=s.responseText:e==`xml`?r=s.responseXML||s.responseText:e==`arraybuffer`&&(r=s.response),r?a(t.readFeatures(r,{extent:n,featureProjection:i}),t.readProjection(r)):o()}catch{o()}}else o()},s.onerror=o,s.send()}function Bw(e,t){return function(n,r,i,a,o){zw(e,t,n,r,i,(e,t)=>{this.addFeatures(e),a!==void 0&&a(e)},()=>{this.changed(),o!==void 0&&o()})}}function Vw(e,t){return[[-1/0,-1/0,1/0,1/0]]}var Hw=class{constructor(e){this.rbush_=new gb(e),this.items_={}}insert(e,t){let n={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(n),this.items_[Zm(t)]=n}load(e,t){let n=Array(t.length);for(let r=0,i=t.length;r<i;r++){let i=e[r],a=t[r],o={minX:i[0],minY:i[1],maxX:i[2],maxY:i[3],value:a};n[r]=o,this.items_[Zm(a)]=o}this.rbush_.load(n)}remove(e){let t=Zm(e),n=this.items_[t];return delete this.items_[t],this.rbush_.remove(n)!==null}update(e,t){let n=this.items_[Zm(t)];sd([n.minX,n.minY,n.maxX,n.maxY],e)||(this.remove(t),this.insert(e,t))}getAll(){return this.rbush_.all().map(function(e){return e.value})}getInExtent(e){let t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(t).map(function(e){return e.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,t){return this.forEach_(this.getInExtent(e),t)}forEach_(e,t){let n;for(let r=0,i=e.length;r<i;r++)if(n=t(e[r]),n)return n;return n}isEmpty(){return yf(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){let t=this.rbush_.toJSON();return rd(t.minX,t.minY,t.maxX,t.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(let t in e.items_)this.items_[t]=e.items_[t]}},Uw={ADDFEATURE:`addfeature`,CHANGEFEATURE:`changefeature`,CLEAR:`clear`,REMOVEFEATURE:`removefeature`,FEATURESLOADSTART:`featuresloadstart`,FEATURESLOADEND:`featuresloadend`,FEATURESLOADERROR:`featuresloaderror`},Ww=class extends Pm{constructor(e,t,n){super(e),this.feature=t,this.features=n}},Gw=class extends MC{constructor(e){e||={},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:`ready`,wrapX:e.wrapX===void 0||e.wrapX}),this.on,this.once,this.un,this.loader_=jm,this.format_=e.format||null,this.overlaps_=e.overlaps===void 0||e.overlaps,this.url_=e.url,e.loader===void 0?this.url_!==void 0&&(zh(this.format_,"`format` must be set when `url` is set"),this.loader_=Bw(this.url_,this.format_)):this.loader_=e.loader,this.strategy_=e.strategy===void 0?Vw:e.strategy;let t=e.useSpatialIndex===void 0||e.useSpatialIndex;this.featuresRtree_=t?new Hw:null,this.loadedExtentsRtree_=new Hw,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let n,r;Array.isArray(e.features)?r=e.features:e.features&&(n=e.features,r=n.getArray()),!t&&n===void 0&&(n=new Pv(r)),r!==void 0&&this.addFeaturesInternal(r),n!==void 0&&this.bindFeaturesCollection_(n)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){let t=Zm(e);if(!this.addToIndex_(t,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(t,e);let n=e.getGeometry();if(n){let t=n.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(t,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new Ww(Uw.ADDFEATURE,e))}setupChangeEvents_(e,t){t instanceof Y_||(this.featureChangeKeys_[e]=[_m(t,H.CHANGE,this.handleFeatureChange_,this),_m(t,qm.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(e,t){let n=!0;if(t.getId()!==void 0){let e=String(t.getId());if(!(e in this.idIndex_))this.idIndex_[e]=t;else if(t instanceof Y_){let r=this.idIndex_[e];r instanceof Y_?Array.isArray(r)?r.push(t):this.idIndex_[e]=[r,t]:n=!1}else n=!1}return n&&(zh(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=t),n}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){let t=[],n=[],r=[];for(let t=0,r=e.length;t<r;t++){let r=e[t],i=Zm(r);this.addToIndex_(i,r)&&n.push(r)}for(let e=0,i=n.length;e<i;e++){let i=n[e],a=Zm(i);this.setupChangeEvents_(a,i);let o=i.getGeometry();if(o){let e=o.getExtent();t.push(e),r.push(i)}else this.nullGeometryFeatures_[a]=i}if(this.featuresRtree_&&this.featuresRtree_.load(t,r),this.hasListener(Uw.ADDFEATURE))for(let e=0,t=n.length;e<t;e++)this.dispatchEvent(new Ww(Uw.ADDFEATURE,n[e]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener(Uw.ADDFEATURE,function(n){t||=(t=!0,e.push(n.feature),!1)}),this.addEventListener(Uw.REMOVEFEATURE,function(n){t||=(t=!0,e.remove(n.feature),!1)}),e.addEventListener(jv.ADD,e=>{t||=(t=!0,this.addFeature(e.element),!1)}),e.addEventListener(jv.REMOVE,e=>{t||=(t=!0,this.removeFeature(e.element),!1)}),this.featuresCollection_=e}clear(e){if(e){for(let e in this.featureChangeKeys_)this.featureChangeKeys_[e].forEach(ym);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){this.featuresRtree_.forEach(e=>{this.removeFeatureInternal(e)});for(let e in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[e])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};let t=new Ww(Uw.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){let n=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(n,function(n){let r=n.getGeometry();if(r instanceof Y_||r.intersectsCoordinate(e))return t(n)})}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,function(n){let r=n.getGeometry();if(r instanceof Y_||r.intersectsExtent(e)){let e=t(n);if(e)return e}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),yf(this.nullGeometryFeatures_)||Em(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){let t=[];return this.forEachFeatureAtCoordinateDirect(e,function(e){t.push(e)}),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);let n=jd(e,t);return[].concat(...n.map(e=>this.featuresRtree_.getInExtent(e)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){let n=e[0],r=e[1],i=null,a=[NaN,NaN],o=1/0,s=[-1/0,-1/0,1/0,1/0];return t||=km,this.featuresRtree_.forEachInExtent(s,function(e){if(t(e)){let t=e.getGeometry(),c=o;if(o=t instanceof Y_?0:t.closestPointXY(n,r,a,o),o<c){i=e;let t=Math.sqrt(o);s[0]=n-t,s[1]=r-t,s[2]=n+t,s[3]=r+t}}}),i}getExtent(e){return this.featuresRtree_?.getExtent(e)??null}getFeatureById(e){let t=this.idIndex_[e.toString()];return t===void 0?null:t}getFeatureByUid(e){let t=this.uidIndex_[e];return t===void 0?null:t}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){let t=e.target,n=Zm(t),r=t.getGeometry();if(!r)n in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[n]=t);else{let e=r.getExtent();n in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[n],this.featuresRtree_&&this.featuresRtree_.insert(e,t)):this.featuresRtree_&&this.featuresRtree_.update(e,t)}let i=t.getId();if(i!==void 0){let e=i.toString();this.idIndex_[e]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[e]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[n]=t;this.changed(),this.dispatchEvent(new Ww(Uw.CHANGEFEATURE,t))}hasFeature(e){let t=e.getId();if(t!==void 0){let n=this.idIndex_[String(t)];return Array.isArray(n)?n.includes(e):n===e}return Zm(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&yf(this.nullGeometryFeatures_):!this.featuresCollection_||this.featuresCollection_.getLength()===0}loadFeatures(e,t,n){let r=this.loadedExtentsRtree_,i=this.strategy_(e,t,n);for(let e=0,a=i.length;e<a;++e){let a=i[e];if(!r.forEachInExtent(a,function(e){return $u(e.extent,a)})){this.loading=Number(this.loading)+1,this.dispatchEvent(new Ww(Uw.FEATURESLOADSTART));let e=e=>{this.loading=Number(this.loading)-1,this.dispatchEvent(new Ww(Uw.FEATURESLOADEND,void 0,e))},i=()=>{this.changed(),this.loading=Number(this.loading)-1,this.dispatchEvent(new Ww(Uw.FEATURESLOADERROR))},o=!1,s=this.loader_.call(this,a,t,n,t=>o||e(t),()=>o||i());s instanceof Promise?(o=!0,s.then(t=>{this.addFeatures(t),e(t)}).catch(i)):this.loader_.length<4&&(this.loading=!1),r.insert(a,{extent:a.slice()})}}}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){let t=this.loadedExtentsRtree_,n=[];t.forEachInExtent(e,function(e){n.push(e)}),n.forEach(n=>{t.remove(n);let r=Sd(n.extent,e);for(let e of r)t.insert(e,{extent:e})})}removeFeatures(e){let t=!1;for(let n=0,r=e.length;n<r;++n)t=this.removeFeatureInternal(e[n])||t;t&&this.changed()}removeFeature(e){e&&this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){let t=Zm(e);if(!(t in this.uidIndex_))return!1;t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e),this.featureChangeKeys_[t]?.forEach(ym),delete this.featureChangeKeys_[t];let n=e.getId();if(n!==void 0){let t=n.toString(),r=this.idIndex_[t];r===e?delete this.idIndex_[t]:Array.isArray(r)&&(r.splice(r.indexOf(e),1),r.length===1&&(this.idIndex_[t]=r[0]))}return delete this.uidIndex_[t],this.hasListener(Uw.REMOVEFEATURE)&&this.dispatchEvent(new Ww(Uw.REMOVEFEATURE,e)),!0}removeFromIdIndex_(e){for(let t in this.idIndex_)if(this.idIndex_[t]===e){delete this.idIndex_[t];break}}setLoader(e){this.loader_=e}setUrl(e){zh(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(Bw(e,this.format_))}setOverlaps(e){this.overlaps_=e,this.changed()}};async function Kw(e=[],t,n){let r=t;for(let t of e)r=t.inline?await Tu(t.inline,{utils:n.utils})(r,n,n.utils):await Du.resolve(t.ref).process(r,t.options||{},n);return r}function qw(e=[],t){let n=[];for(let r of e){let e=Du.resolve(r.ref);n.push(e.attach(t,r.options||{}))}return n}function Jw(e){return e==null?[]:Array.isArray(e)?e.filter(e=>e!=null):typeof e==`object`?[e]:[]}function J(e,t,n){if(e!=null)return typeof e==`function`?e(t,n):typeof e==`string`&&e.startsWith("${")&&e.endsWith(`}`)?wu(e.slice(2,-1),n):Eu(e,n)}var Yw={semantic:{label:`语义色（正常/预警/超标 · 风险等级）`,colors:[`#46c97d`,`#f5a623`,`#ff5c5c`,`#9fb0c8`],semantic:{正常:`#46c97d`,预警:`#f5a623`,超标:`#ff5c5c`,低:`#46c97d`,中:`#f5a623`,高:`#ff5c5c`,Ⅰ类:`#36cbcb`,Ⅱ类:`#46c97d`,Ⅲ类:`#9ccc3c`,Ⅳ类:`#f5a623`,Ⅴ类:`#ff8a3c`,劣Ⅴ类:`#ff5c5c`}},blue:{label:`蓝色系`,colors:[`#2f6fe0`,`#4f8cff`,`#79adff`,`#a8c8ff`,`#d0e0ff`]},sunset:{label:`暖色系`,colors:[`#ff5c5c`,`#ff8a3c`,`#f5a623`,`#ffc95c`,`#ffe39c`]},purple:{label:`紫色系`,colors:[`#6b4fd6`,`#9a7bff`,`#b9a3ff`,`#d4c6ff`,`#eae3ff`]}};Object.assign(Pu.stylePresets,Yw),Object.entries(Yw).map(([e,t])=>({label:t.label,value:e}));var Xw=new class{cache=new Map;maxSize=3e4;hits=0;misses=0;keyOf(e){return`${e.ruleId}::${e.featureKey}::${e.state||`normal`}::${e.zoom??``}::${e.resolution??``}`}get(e){let t=this.keyOf(e),n=this.cache.get(t);return n===void 0?(this.misses++,null):(this.hits++,this.cache.delete(t),this.cache.set(t,n),n)}set(e,t){let n=this.keyOf(e);if(this.cache.has(n))this.cache.delete(n);else if(this.cache.size>=this.maxSize){let e=this.cache.keys().next().value;e!==void 0&&this.cache.delete(e)}this.cache.set(n,t)}has(e){return this.cache.has(this.keyOf(e))}clearByLayer(e){let t=`${e}::`;for(let e of[...this.cache.keys()])e.startsWith(t)&&this.cache.delete(e)}clear(){this.cache.clear(),this.hits=0,this.misses=0}size(){return this.cache.size}stats(){let e=this.hits+this.misses;return{size:this.cache.size,maxSize:this.maxSize,hits:this.hits,misses:this.misses,hitRate:e===0?0:this.hits/e}}setMaxSize(e){for(this.maxSize=e;this.cache.size>this.maxSize;){let e=this.cache.keys().next().value;if(e===void 0)break;this.cache.delete(e)}}},Zw=new class{rules=[];addRule(e){this.rules.push(e),this.rules.sort((e,t)=>t.priority-e.priority)}addRules(e){e.forEach(e=>this.addRule(e))}clear(){this.rules=[]}match(e){for(let t of this.rules){let n=this.matchRule(t,e);if(n)return n}return null}matchRule(e,t){let n=t.feature?.properties||{},r=null;switch(e.mode){case`single`:r=e.properties||e.fallback||null;break;case`categorical`:if(e.field&&e.categories){let t=String(n[e.field]??``);r=e.categories[t]||e.fallback||null}else r=e.fallback||null;break;case`continuous`:if(e.field&&e.ranges){let t=Number(n[e.field]);if(Number.isNaN(t))r=e.fallback||null;else{let n=e.ranges.find(e=>t>=e.min&&t<=e.max);r=n&&n.style||e.fallback||null}}else r=e.fallback||null;break;case`multi-field`:if(e.conditions){let t=e.conditions.find(e=>Object.entries(e.fields).every(([e,t])=>String(n[e]??``)===String(t)));r=t&&t.style||e.fallback||null}else r=e.fallback||null;break;default:r=null}return r==null&&e.properties==null?null:{...e.properties||{},...r||{}}}};function Qw(e,t,n){let r=t??{},i=n??{},a=Number(J(e.radius,r,i)??6),o=String(J(e.color,r,i)??`#3399cc`),s=Number(J(e.opacity,r,i)??.85),c=String(J(e.strokeColor,r,i)??`#ffffff`),l=Number(J(e.strokeWidth,r,i)??1.5);return new Uh({image:new Lh({radius:a,fill:new Rh({color:qg(o,s)}),stroke:new Hh({color:c,width:l})})})}function $w(e,t,n){let r=t??{},i=n??{},a=String(J(e.color,r,i)??`#3399cc`),o=Number(J(e.width,r,i)??2),s=Number(J(e.opacity,r,i)??1),c=J(e.lineDash,r,i);return new Uh({stroke:new Hh({color:qg(a,s),width:o,lineCap:e.lineCap,lineJoin:e.lineJoin,lineDash:c})})}function eT(e,t,n){let r=t??{},i=n??{},a=String(J(e.color,r,i)??`#3399cc`),o=Number(J(e.opacity,r,i)??.4),s=String(J(e.strokeColor,r,i)??a),c=Number(J(e.strokeWidth,r,i)??1.5),l=Number(J(e.strokeOpacity,r,i)??.9),u=J(e.lineDash,r,i);return new Uh({fill:new Rh({color:qg(a,o)}),stroke:new Hh({color:qg(s,l),width:c,lineDash:u})})}function tT(e,t,n){let r=t??{},i=n??{},a=J(e.src,r,i),o=Number(J(e.scale,r,i)??1),s=Number(J(e.rotation,r,i)??0),c=Number(J(e.opacity,r,i)??1);return new Uh({image:new Vh({src:a?Tv.resolve(String(a)):``,scale:o,rotation:s,opacity:c})})}function nT(e,t,n){let r=t??{},i=n??{};if(J(e.show,r,i)===!1)return null;let a=``;if(e.text!=null)a=String(J(e.text,r,i)??``);else if(e.field){let t=r?.get?.(e.field)??r?.properties?.[e.field];a=String(t??``)}if(!a)return null;let o=String(J(e.font,r,i)??`500 12px PingFang SC, sans-serif`),s=String(J(e.color,r,i)??`#333`),c=String(J(e.outlineColor,r,i)??`#fff`),l=Number(J(e.outlineWidth,r,i)??3),u=Number(J(e.offsetX,r,i)??0),d=Number(J(e.offsetY,r,i)??-12),f=Number(J(e.rotation,r,i)??0),p=J(e.scale,r,i),m=J(e.background,r,i),h=e.padding?Array.isArray(e.padding)?e.padding:[e.padding,e.padding,e.padding,e.padding]:void 0;return new Uh({text:new Yh({text:a,font:o,fill:new Rh({color:s}),stroke:new Hh({color:c,width:l}),offsetX:u,offsetY:d,textAlign:e.align,textBaseline:e.baseline,rotation:f,scale:p==null?void 0:Number(p),backgroundFill:m?new Rh({color:String(m)}):void 0,padding:h})})}function rT(e,t){let n=String(t.get(e.colorField)??``),r=Yw[e.palette]||Yw.blue;return r.semantic?.[n]||r.colors[Jg(n,r.colors.length)]}function iT(e,t){return function(n,r){let i=n.get(`id`),a=t.get(`selectedId`),o=t.get(`hoverId`),s=a!==void 0&&i===a,c=o!==void 0&&i===o,l=s?`selected`:c?`hover`:`normal`,u={$feature:n.getProperties(),$state:l,$selected:l===`selected`,$hover:l===`hover`,$env:e.env},d=e.getView?.()??null,f=d?d.getZoomForResolution?.(r)??d.getZoom()??0:0,p=Math.round(f),m=r<600?`lo`:`hi`,h=t.get(`layerKey`),g=h&&i!=null?{ruleId:h,featureKey:String(i),state:l,zoom:p,resolution:m}:null;if(g){let e=Xw.get(g);if(e)return e}let _=t=>{let i=n.getGeometry()?.getType?.()||``,a=t??{mode:`single`};if(t?.rules?.length){let r=Zw.match({feature:{properties:n.getProperties(),geometry:{type:i}},env:e.env,zoom:f,state:l});r&&(a={...t,...r})}let o=e.zoomAdapter?.adjust(f)??{},d,p=a.circle?.color??a.fill?.color??a.stroke?.color;d=o.color?String(o.color):p==null?a.color==null?a.colorField?rT(a,n):`#4f8cff`:String(J(a.color,n,u)??`#4f8cff`):String(J(p,n,u)??`#4f8cff`);let m=Number(o.radius??J(a.circle?.radius??a.radius,n,u)??7),h=s||c?m+3:m,_=Number(o.width??J(a.stroke?.width??a.width,n,u)??2),v=Number(o.fillOpacity??J(a.fill?.opacity??a.circle?.opacity??a.fillOpacity,n,u)??.35),y=String(J(a.circle?.strokeColor??a.stroke?.color,n,u)??(s||c?`#ffd666`:`rgba(255,255,255,0.9)`)),b=Number(J(a.circle?.strokeWidth??a.stroke?.width,n,u)??(s||c?3:1.5)),x=J(a.iconStage?.src??a.icon,n,u),S=J(a.iconStage?.scale??a.iconScale,n,u),C=S==null?Math.min(Math.max(h/8,.55),2.4):Number(S),w=Number(J(a.iconStage?.rotation??a.iconRotation,n,u)??0),T=Number(J(a.iconStage?.opacity??a.iconOpacity,n,u)??1),E=e.highlight?.color||`#ffd666`,D=e.popup?.titleField||a.labelField||a.text?.field||`name`,ee=a.text,O=nT(ee??{field:D,font:`600 12px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:i===`Point`?-18:-10,padding:[2,4,2,4],show:s||c},n,u),k=[];if(i===`Point`||i.endsWith(`Point`))(s||c)&&k.push(new Uh({image:new Lh({radius:h+8,fill:new Rh({color:qg(E,.35)})})})),k.push(Qw({radius:h,color:d,opacity:x?.45:.85,strokeColor:y,strokeWidth:b},n,u)),x&&k.push(tT({src:String(x),scale:C,rotation:w,opacity:T},n,u)),O&&k.push(O);else if(i===`LineString`||i.includes(`Line`))s||c?(k.push(new Uh({stroke:new Hh({color:qg(E,.45),width:_+9})})),k.push($w({color:E,width:_+2.5},n,u))):k.push($w({color:d,width:_},n,u)),O&&k.push(O);else{if(s||c)k.push(new Uh({stroke:new Hh({color:qg(E,.55),width:12})})),k.push(eT({color:d,opacity:Math.min(v+.3,.92),strokeColor:E,strokeWidth:3.5},n,u));else if(k.push(eT({color:d,opacity:v,strokeColor:qg(d,.9),strokeWidth:_},n,u)),!ee&&r<600){let e=nT({field:D,font:`500 11px PingFang SC, sans-serif`,color:`rgba(255,255,255,0.9)`,outlineColor:`rgba(10,18,32,0.8)`,outlineWidth:3},n,u);e&&k.push(e)}O&&(s||c)&&k.push(O)}let te=k;return g&&Xw.set(g,te),te},v=Jw(e.style),y=v.length?v.flatMap(e=>{let t=_(e);return Array.isArray(t)?t:[t]}):[];return g&&Xw.set(g,y),y}}var aT=new class{state=Xt({});register(e){this.state[e.id]={id:e.id,name:e.name,visible:e.visible!==!1,loading:!1,featureCount:0,geometryType:`Mixed`,zIndex:e.zIndex??0}}remove(e){delete this.state[e]}patch(e,t){Object.assign(this.state[e],t)}get(e){return this.state[e]}list(){return Object.values(this.state).sort((e,t)=>e.zIndex-t.zIndex)}clear(){Object.keys(this.state).forEach(e=>delete this.state[e])}},oT=[`right`,`left`,`top`,`bottom`],sT=class{pick(e){let t=e.padding??8,[n,r]=e.anchorScreen,{width:i,height:a}=e.cardSize,o=e.preferredSide?[e.preferredSide,...oT.filter(t=>t!==e.preferredSide)]:oT;for(let s of o){let o=this.trySide(s,n,r,i,a,e.viewport,t);if(o)return o}return this.compute(`right`,n,r,i,a,t)}trySide(e,t,n,r,i,a,o){let{width:s}=a,c=this.compute(e,t,n,r,i,o);switch(e){case`right`:return c.cardOffset.x+r<=s-o?c:null;case`left`:return c.cardOffset.x>=o?c:null;case`top`:return c.cardOffset.y>=o?c:null;case`bottom`:return c.cardOffset.y+i<=a.height-o?c:null}}compute(e,t,n,r,i,a){switch(e){case`right`:{let e={x:t+a,y:n-i/2};return{side:`right`,cardOffset:e,leaderEnd:[e.x,e.y+i/2]}}case`left`:{let e={x:t-r-a,y:n-i/2};return{side:`left`,cardOffset:e,leaderEnd:[e.x+r,e.y+i/2]}}case`top`:{let e={x:t-r/2,y:n-i-a};return{side:`top`,cardOffset:e,leaderEnd:[e.x+r/2,e.y+i]}}case`bottom`:{let e={x:t-r/2,y:n+a};return{side:`bottom`,cardOffset:e,leaderEnd:[e.x+r/2,e.y]}}}}};new sT;var cT=new class{anchorPicker=new sT;solve(e){let t=e.viewport,n=e.padding??8,r=new Map,i=t.width/t.height<4/3;for(let i of e.cards){if(i.locked&&i.lockedOffset){r.set(i.id,{id:i.id,side:`right`,offset:{...i.lockedOffset},leaderEnd:[i.lockedOffset.x,i.lockedOffset.y+i.size.height/2]});continue}let e={anchorScreen:i.anchorScreen,cardSize:i.size,viewport:t,padding:n},a=this.anchorPicker.pick(e);r.set(i.id,{id:i.id,side:a.side,offset:{...a.cardOffset},leaderEnd:a.leaderEnd})}return this.resolveOverlaps(r,e.cards,t,n,i),r}resolveOverlaps(e,t,n,r,i){let a=new Map(t.map(e=>[e.id,e])),o=t.length*3+6;for(let t=0;t<o;t++){let t=!1,n=[...e.keys()];for(let r=0;r<n.length;r++)for(let o=r+1;o<n.length;o++){let s=e.get(n[r]),c=e.get(n[o]),l=a.get(n[r]),u=a.get(n[o]);if(l.locked&&u.locked)continue;let d=this.rectOf(s,l),f=this.rectOf(c,u),p=Math.min(d.x2,f.x2)-Math.max(d.x1,f.x1),m=Math.min(d.y2,f.y2)-Math.max(d.y1,f.y1);if(p<=0||m<=0)continue;let h=s.side,g=h===`right`||h===`left`;if(i&&(g=!0),g){let e=d.y1<f.y1?-1:1,t=m/2+1;l.locked||(s.offset.y+=e*t),u.locked||(c.offset.y-=e*t)}else{let e=d.x1<f.x1?-1:1,t=p/2+1;l.locked||(s.offset.x+=e*t),u.locked||(c.offset.x-=e*t)}t=!0}if(!t)break}for(let[t,i]of e){let e=a.get(t),o=e.size.width,s=e.size.height;e.locked&&e.lockedOffset?i.offset={...e.lockedOffset}:(i.offset.x=Math.max(r,Math.min(i.offset.x,n.width-o-r)),i.offset.y=Math.max(r,Math.min(i.offset.y,n.height-s-r))),i.leaderEnd=this.leaderEndOf(i.side,i.offset,o,s)}}rectOf(e,t){return{x1:e.offset.x,y1:e.offset.y,x2:e.offset.x+t.size.width,y2:e.offset.y+t.size.height}}leaderEndOf(e,t,n,r){switch(e){case`right`:return[t.x,t.y+r/2];case`left`:return[t.x+n,t.y+r/2];case`top`:return[t.x+n/2,t.y+r];case`bottom`:return[t.x+n/2,t.y]}}incrementalResolve(e,t,n,r=8){return this.solve({viewport:n,cards:t,padding:r})}},lT=`http://www.w3.org/2000/svg`,uT=new class{toPath(e,t){let[n,r]=e.start,[i,a]=e.end,o=i-n,s=a-r;switch(t.style){case`straight`:return`M ${n} ${r} L ${i} ${a}`;case`polyline`:{let e=.55;return Math.abs(o)>=Math.abs(s)?`M ${n} ${r} L ${n+o*e} ${a} L ${i} ${a}`:`M ${n} ${r} L ${i} ${r+s*e} L ${i} ${a}`}case`bezier`:{let e=(n+i)/2,t=(r+a)/2,c=Math.hypot(o,s)||1,l=-s/c,u=o/c,d=c*.22;return`M ${n} ${r} Q ${e+l*d} ${t+u*d} ${i} ${a}`}default:return`M ${n} ${r} L ${i} ${a}`}}drawToSvg(e,t){let n=document.createElementNS(lT,`g`);n.setAttribute(`class`,`gf-leader`);let r=t.color||`var(--geo-flow-leader-color, #666)`,i=t.width??1.5,a=document.createElementNS(lT,`path`);if(a.setAttribute(`d`,this.toPath(e,t)),a.setAttribute(`fill`,`none`),a.setAttribute(`stroke`,r),a.setAttribute(`stroke-width`,String(i)),t.dash&&a.setAttribute(`stroke-dasharray`,t.dash.join(`,`)),n.appendChild(a),t.arrow){let i=this.buildArrowSvg(e.end,e.start,r,t.arrowSize??8);n.appendChild(i)}return n}buildArrowSvg(e,t,n,r){let[i,a]=e,[o,s]=t,c=i-o,l=a-s,u=Math.hypot(c,l)||1,d=c/u,f=l/u,p=-f,m=d,h=i-d*r,g=a-f*r,_=`M ${i} ${a} L ${h+r/2*p} ${g+r/2*m} L ${h-r/2*p} ${g-r/2*m} Z`,v=document.createElementNS(lT,`path`);return v.setAttribute(`d`,_),v.setAttribute(`fill`,n),v.setAttribute(`stroke`,`none`),v}drawToCanvas(e,t,n){let[r,i]=t.start,[a,o]=t.end,s=a-r,c=o-i;switch(e.beginPath(),e.strokeStyle=n.color||`#666`,e.lineWidth=n.width??1.5,n.dash&&e.setLineDash(n.dash),n.style){case`straight`:e.moveTo(r,i),e.lineTo(a,o);break;case`polyline`:{let t=.55;e.moveTo(r,i),Math.abs(s)>=Math.abs(c)?e.lineTo(r+s*t,o):e.lineTo(a,i+c*t),e.lineTo(a,o);break}case`bezier`:{let t=(r+a)/2,n=(i+o)/2,l=Math.hypot(s,c)||1,u=-c/l,d=s/l,f=l*.22;e.moveTo(r,i),e.quadraticCurveTo(t+u*f,n+d*f,a,o);break}}e.stroke(),n.arrow&&this.drawArrowCanvas(e,t.end,t.start,n.color||`#666`,n.arrowSize??8)}drawArrowCanvas(e,t,n,r,i){let[a,o]=t,[s,c]=n,l=a-s,u=o-c,d=Math.hypot(l,u)||1,f=l/d,p=u/d,m=-p,h=f,g=a-f*i,_=o-p*i,v=g+i/2*m,y=_+i/2*h,b=g-i/2*m,x=_-i/2*h;e.beginPath(),e.moveTo(a,o),e.lineTo(v,y),e.lineTo(b,x),e.closePath(),e.fillStyle=r,e.fill()}},dT=new class{cards=new Map;layouts=new Map;viewport={width:0,height:0};defaultOptions={leaderStyle:`polyline`,viewportPadding:8,draggable:!0};listeners=[];setViewport(e){this.viewport={...e},this.relayout()}on(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}emit(e){this.listeners.forEach(t=>t(e))}open(e,t){let n=this.cards.get(e.id);if(n){n.content=e.content,n.size=e.size,n.anchorScreen=e.anchorScreen,t&&Object.assign(n,t),this.emit({type:`update`,id:e.id,feature:e.feature}),this.relayout();return}this.cards.set(e.id,{...e,...this.defaultOptions,...t}),this.emit({type:`open`,id:e.id,feature:e.feature}),this.relayout()}close(e){let t=this.cards.get(e);t&&(this.cards.delete(e),this.layouts.delete(e),this.emit({type:`close`,id:e,feature:t.feature}),t.onClose?.(e),this.relayout())}closeByFeature(e){for(let[t,n]of this.cards)if(String(n.feature?.id??n.feature)===String(e)){this.close(t);return}}lockPosition(e,t){let n=this.cards.get(e);n&&(n.locked=!0,n.lockedOffset={...t},this.relayout())}unlockPosition(e){let t=this.cards.get(e);t&&(t.locked=!1,t.lockedOffset=void 0,this.relayout())}updateAnchors(e){for(let[t,n]of e){let e=this.cards.get(t);e&&(e.anchorScreen=n)}this.relayout()}getLayout(e){return this.layouts.get(e)}list(){return[...this.cards.values()]}clear(){this.cards.forEach((e,t)=>this.close(t)),this.listeners=[],this.layouts.clear()}relayout(){if(this.viewport.width===0||this.cards.size===0)return;let e=cT.solve({viewport:this.viewport,cards:this.list(),padding:this.defaultOptions.viewportPadding??8});for(let[t,n]of e)this.layouts.set(t,n),this.emit({type:`layout`,id:t,layout:n})}};function fT(e,t,n){let r=[];return Jw(t).forEach(e=>{if(!e||e.mode!==`categorical`||!e.colorField)return;let t=n.find(t=>t.name===e.colorField)?.values||[],i=Yw[e.palette]||Yw.blue;t.forEach(e=>{let t=String(e),n=i.semantic?.[t]||i.colors[Jg(t,i.colors.length)];r.some(e=>e.label===t&&e.color===n)||r.push({label:t,color:n})})}),r.length?{layer:e,entries:r}:null}function pT(e){return Array.isArray(e)?{type:`FeatureCollection`,features:e}:e}var mT=class{cfg;layer;source;current=null;effectCleanups=[];deps;zoomAdapter;lastCtx;paused=!1;envDisposer;restartScheduled=!1;originalPayload;legend=null;owner;constructor(e,t){this.cfg=e,this.deps=t,this.manager.register(e),this.source=new Gw,this.layer=new Lw({zIndex:e.zIndex,visible:e.visible!==!1,source:this.source}),this.layer.set(`layerKey`,e.id),this.layer.setStyle(iT(this.styleHost(),this.layer))}get manager(){return this.deps.manager||aT}updateConfig(e){this.cfg.style!==e.style&&Xw.clearByLayer(e.id),this.cfg=e,this.layer.setVisible(e.visible!==!1),e.zIndex!=null&&this.layer.setZIndex(e.zIndex)}run(e,t,n){return this.owner?.run(e,t||{},n)}styleHost(){return{fields:this.current?.fields||[],style:this.cfg.style,highlight:this.cfg.interaction?.highlight,popup:this.cfg.popup,getView:()=>this.deps.map.getView(),zoomAdapter:this.zoomAdapter,env:this.deps.env?.snapshot()}}setZoomAdapter(e){this.zoomAdapter=e,Xw.clearByLayer(this.cfg.id)}async execute(e){this.lastCtx=e,this.manager.patch(this.cfg.id,{loading:!0,error:void 0});try{let t=await Uu(this.cfg.provider).fetch(e),n={datasetId:this.cfg.provider?.config?.datasetId,geometryType:t.geometryType||`Mixed`,features:t.data,fields:t.fields||[]};n=await Kw(this.cfg.processors,n,e),this.current=n,this.applyToMap(n),this.reattachEffects()}catch(e){throw this.manager.patch(this.cfg.id,{loading:!1,error:String(e?.message||e)}),e}}applyToMap(e){this.renderPayload(e)}renderPayload(e){let t=new ov().readFeatures(e.features,{featureProjection:`EPSG:3857`});this.source.clear(),this.source.addFeatures(t),this.layer.setStyle(iT(this.styleHost(),this.layer)),this.legend=fT(this.cfg.name,this.cfg.style,e.fields),this.manager.patch(this.cfg.id,{loading:!1,featureCount:t.length,geometryType:e.geometryType})}appendData(e,t){let n=pT(e),r=new ov().readFeatures(n,{featureProjection:`EPSG:3857`});if(t?.clear&&this.source.clear(),this.source.addFeatures(r),!this.current)this.current={features:n,fields:Iu(n),geometryType:Fu(n)};else{let e={...this.current.features,features:[...this.current.features.features,...n.features]};this.current={...this.current,features:e,fields:Iu(e)}}this.legend=fT(this.cfg.name,this.cfg.style,this.current.fields),this.manager.patch(this.cfg.id,{featureCount:this.source.getFeatures().length})}updateData(e,t){let n=pT(e);t?.keepOriginal&&!this.originalPayload&&this.current&&(this.originalPayload=this.current);let r={datasetId:this.current?.datasetId,geometryType:Fu(n),features:n,fields:Iu(n)};this.current=r,this.renderPayload(r)}snapshotOriginal(){this.current&&(this.originalPayload=this.current)}restoreOriginal(){this.originalPayload&&(this.current=this.originalPayload,this.renderPayload(this.originalPayload))}clearData(){this.source.clear(),this.manager.patch(this.cfg.id,{featureCount:0})}reattachEffects(){this.effectCleanups.forEach(e=>e()),this.effectCleanups=[];let e={map:this.deps.map,layer:this.layer,source:this.source,helpers:{}};this.effectCleanups=qw(this.cfg.effects,e)}write(e,t){this.layer.get(e)!==t&&(this.layer.set(e,t),this.layer.changed(),this.manager.patch(this.cfg.id,{[e]:t}))}setHover(e){this.write(`hoverId`,e)}clearHover(){this.write(`hoverId`,void 0)}setSelected(e){this.write(`selectedId`,e)}clearSelected(){this.write(`selectedId`,void 0)}clickFeature(e,t){this.setSelected(e.get(`id`)),this.cfg.popup&&this.openPopup(e,t)}openPopup(e,t){let n=this.cfg.popup,r=String(e.get(n.titleField||`name`)??`详情`),i=(n.contentFields.length?n.contentFields:this.current?.fields.map(e=>e.name)||[]).map(t=>({label:this.current?.fields.find(e=>e.name===t)?.label||t,value:e.get(t)??`—`}));this.deps.popupBridge.open({title:r,rows:i,coordinate:t})}locate(e){let t=this.source.getFeatures().find(t=>String(t.get(`id`))===String(e));if(!t)return null;let n=t.getGeometry();if(!n)return null;if(this.setSelected(t.get(`id`)),this.cfg.popup){let e=n.getType()===`Point`;this.openPopup(t,e?n.getCoordinates():gd(n.getExtent()))}return{extent:n.getExtent(),isPoint:n.getType()===`Point`}}setVisible(e){this.layer.setVisible(e),this.manager.patch(this.cfg.id,{visible:e})}pause(){this.paused=!0}resume(){this.paused=!1,this.restart()}restart(){this.lastCtx&&(this.deps.env&&(this.lastCtx.env=this.deps.env.snapshot()),this.execute(this.lastCtx))}subscribeEnv(e){return this.envDisposer?.(),this.envDisposer=this.deps.env?.watchEnv(e,()=>{Xw.clearByLayer(this.cfg.id),this.scheduleRestart()}),this}scheduleRestart(){this.paused||this.restartScheduled||!this.lastCtx||(this.restartScheduled=!0,queueMicrotask(()=>{this.restartScheduled=!1,this.restart()}))}getDataItems(){return this.source.getFeatures().map(e=>({layerId:this.cfg.id,layerName:this.cfg.name,id:String(e.get(`id`)),title:String(e.get(this.cfg.popup?.titleField||`name`)??e.get(`id`)),geomType:this.current?.geometryType,props:{...e.getProperties()}}))}dispose(){this.effectCleanups.forEach(e=>e()),this.effectCleanups=[],this.envDisposer?.(),this.envDisposer=void 0}};function hT(e,t){return!e||e===`none`?`none`:e===`full`?`full`:t===`left`||t===`right`?e===`column`?`column`:`none`:e===`row`?`row`:`none`}var gT=class{widgets=Xt({});collapsed=Xt({});seq=0;orders=Xt({});dock(e){let t=this.widgets[e.id];t?e.order!=null&&(this.orders[e.id]=e.order):(this.seq+=1,this.orders[e.id]=e.order??this.seq);let n=t??{},r=hT(e.span??n.span,e.position);this.widgets[e.id]={...n,...e,span:r},this.collapsed[e.id]=e.defaultCollapsed?!0:!!e.collapsed}undock(e){this.widgets[e]&&(delete this.widgets[e],delete this.collapsed[e],delete this.orders[e])}move(e,t){let n=this.widgets[e];n&&this.dock({...n,position:t})}get(e){return this.widgets[e]}setVisible(e,t){let n=this.widgets[e];n&&this.dock({...n,visible:t})}setSpan(e,t){let n=this.widgets[e];n&&this.dock({...n,span:t})}setPriority(e,t){let n=this.widgets[e];n&&this.dock({...n,priority:t})}isCollapsed(e){return!!this.collapsed[e]}toggleCollapse(e){let t=this.widgets[e];t&&t.collapsible!==!1&&(this.collapsed[e]=!this.collapsed[e])}setCollapsed(e,t){this.widgets[e]&&(this.collapsed[e]=!!t)}list(e){return this.sorted().filter(t=>t.position===e)}regionsAll(){return[...wv]}sorted(){return Object.values(this.widgets).filter(e=>e.visible!==!1).sort((e,t)=>this.sortKeyOf(t)-this.sortKeyOf(e))}sortKeyOf(e){let t=e.priority??0,n=this.orders[e.id]??0;return-t*1e9+n}runtimeState(e){let t=this.widgets[e];return t?{id:t.id,position:t.position,order:this.orders[t.id]??0,priority:t.priority??0,span:hT(t.span,t.position),visible:t.visible!==!1,collapsed:this.isCollapsed(t.id),sortKey:this.sortKeyOf(t)}:null}load(e){this.clear(),(e?.items||[]).forEach(e=>this.dock(e))}toJSON(){return{items:Object.values(this.widgets).map(e=>{let{collapsed:t,component:n,...r}=e;return r})}}clear(){[...Object.keys(this.widgets)].forEach(e=>this.undock(e)),this.seq=0}},_T=new gT,vT=class{state=Xt({});get(e){return this.state[e]}set(e,t){this.state[e]=t}has(e){return e in this.state}watchEnv(e,t){let n=!0,r=et(()=>{for(let t of e)this.state[t];if(n){n=!1;return}t()});return()=>tt(r)}snapshot(){return{...this.state}}clear(){for(let e of Object.keys(this.state))delete this.state[e]}},yT={"basemap.esri-imagery":`Imagery © Esri`,"basemap.carto-labels":`© OpenStreetMap, © CartoDB`,"basemap.carto-light":`© OpenStreetMap, © CartoDB`,"basemap.osm":`© OpenStreetMap contributors`,"basemap.tianditu-vec":`© 天地图`,"basemap.tianditu-img":`© 天地图`,"basemap.tianditu-cva":`© 天地图`,"basemap.amap-vec":`© 高德地图`,"basemap.amap-img":`© 高德地图`},bT=class{manager;cfg;dockManager=new gT;state=Xt({ready:!1,routeName:``,popup:null,pointer:null,loadingLayerCount:0,legends:[]});engines=new Map;baseLayers=new Map;overlay=null;fitted=new Set;runToken=0;env=new vT;envCleanup=null;hooks={};constructor(e){this.manager=new KC(e.target),this.cfg=e.cfg||{version:`2.0.0`},e.popupEl&&this.setupOverlay(e.popupEl),this.bindInteractions(),this.bindEnv(),(this.cfg.baseLayers?.length||this.cfg.controls?.length||this.cfg.layers?.length)&&this.applyMapConfig(this.cfg)}baseLayer(e,t={}){let n={id:e,url:Tv.resolve(e),attributions:yT[e],...t};return this.baseLayers.set(e,this.manager.addBaseLayer(n)),this}control(e,t){return this.manager.addControl({id:e,options:t}),this}dock(e){return this.dockManager.dock(e),this}loadDock(e){return this.dockManager.load(e),this}dockOf(e){return this.dockManager.get(e)}undock(e){return this.dockManager.undock(e),this}dockJSON(){return this.dockManager.toJSON()}layer(e){let t=new mT(e,{popupBridge:this.popupBridge,map:this.manager.map,env:this.env});return this.manager.map.addLayer(t.layer),t.owner=this,this.engines.set(e.id,t),this.cfg.layers||(this.cfg.layers=[]),this.cfg.layers.some(t=>t.id===e.id)||this.cfg.layers.push(e),t}attachLayer(e){let t=e.buildPipeline(this.manager.map,{popupBridge:this.popupBridge,env:this.env});t.owner=this,this.engines.set(e.id,t);let n=e.getConfig();return this.cfg.layers||(this.cfg.layers=[]),this.cfg.layers.some(t=>t.id===e.id)||this.cfg.layers.push(n),t}fromJSON(e){return this.cfg=e,this.applyMapConfig(e),this.loadDock(e.dock),this}toJSON(){return{...this.cfg,layers:[...this.engines.values()].map(e=>e.cfg),dock:this.dockManager.toJSON()}}applyMapConfig(e){(e.baseLayers||[]).forEach(e=>{this.baseLayers.has(e.id)||this.baseLayers.set(e.id,this.manager.addBaseLayer(e))}),(e.controls||[]).forEach(e=>this.manager.addControl(e)),(e.layers||[]).forEach(e=>{let t=this.engines.get(e.id);t?t.updateConfig(e):this.layer(e)})}setupOverlay(e){this.overlay=new Av({element:e,positioning:`bottom-center`,offset:[0,-14],stopEvent:!1,autoPan:{animation:{duration:200}}}),this.manager.map.addOverlay(this.overlay)}popupBridge={open:e=>{this.state.popup=e,this.overlay?.setPosition(e.coordinate)},close:()=>{this.state.popup=null,this.overlay?.setPosition(void 0)}};closePopup(){this.popupBridge.close()}bindInteractions(){let e=this.manager.map;e.on(`pointermove`,t=>{let n=e.forEachFeatureAtPixel(t.pixel,(e,t)=>{let n=this.engineOf(t);return n?{engine:n,feature:e}:void 0},{hitTolerance:4});e.getViewport().style.cursor=n?`pointer`:``,this.engines.forEach(e=>{e.cfg.interaction?.highlight?.trigger===`hover`?e.setHover(n&&n.engine===e?n.feature.get(`id`):void 0):e.layer.get(`hoverId`)!==void 0&&e.clearHover()}),this.state.pointer=t.coordinate}),e.on(`singleclick`,t=>{let n=e.forEachFeatureAtPixel(t.pixel,(e,t)=>{let n=this.engineOf(t);return n?{engine:n,feature:e}:void 0},{hitTolerance:4});if(!n){this.engines.forEach(e=>e.clearSelected()),this.closePopup(),this.hooks.onFeatureClick?.(null);return}this.engines.forEach(e=>{e!==n.engine&&e.clearSelected()}),n.engine.clickFeature(n.feature,t.coordinate);let r=n.engine.cfg;this.hooks.onFeatureClick?.({layerId:r.id,layerName:r.name,featureId:String(n.feature.get(`id`)),properties:{...n.feature.getProperties()}})})}engineOf(e){for(let t of this.engines.values())if(t.layer===e)return t}bindEnv(){let e=this.manager.view,t=()=>{this.env.set(`viewZoom`,e.getZoom()??0),this.env.set(`viewCenter`,e.getCenter()??null)};e.on(`change:resolution`,t),e.on(`change:center`,t),t(),this.envCleanup=()=>{e.un(`change:resolution`,t),e.un(`change:center`,t)}}syncEngines(e){let t=new Set(e.map(e=>e.id));[...this.engines].forEach(([e,n])=>{t.has(e)||(this.manager.map.removeLayer(n.layer),n.dispose(),aT.remove(e),this.engines.delete(e))}),e.forEach(e=>{let t=this.engines.get(e.id);t?t.updateConfig(e):this.layer(e)})}async run(e,t={},n){let r=++this.runToken,i=n||this.cfg.layers||[];this.syncEngines(i);let a={runId:r,routeName:e,query:t,params:{},revision:r,utils:{},env:this.env.snapshot(),resolveAsset:e=>Tv.resolve(e)};this.state.routeName=e,this.state.loadingLayerCount=i.length,await Promise.all([...this.engines.values()].map(e=>e.execute(a).catch(e=>console.warn(`[GeoFlow] 图层执行失败:`,e)))),this.state.loadingLayerCount=0,this.state.ready=!0,this.state.legends=this.legends,this.fitRoute(e)}fitRoute(e){this.fitted.has(e)||(this.fitted.add(e),requestAnimationFrame(()=>this.fitAll(60)))}resetViewState(){this.fitted.clear(),this.engines.forEach(e=>e.clearSelected()),this.closePopup()}locate(e){for(let t of this.engines.values()){let n=t.locate(e);if(n)return this.manager.view.fit(n.extent,{duration:600,maxZoom:n.isPoint?13:void 0,padding:[60,60,60,60]}),!0}return!1}zoomIn(){let e=this.manager.view;e.animate({zoom:(e.getZoom()||9)+1,duration:200})}zoomOut(){let e=this.manager.view;e.animate({zoom:(e.getZoom()||9)-1,duration:200})}setLayerVisible(e,t){this.engines.get(e)?.setVisible(t)}setBasemap(e){this.baseLayers.forEach(e=>this.manager.removeBaseLayer(e)),this.baseLayers.clear(),this.baseLayer(e)}fitAll(e=50){let t=null;this.engines.forEach(e=>{let n=e.source.getExtent();n&&isFinite(n[0])&&(t?(t[0]=Math.min(t[0],n[0]),t[1]=Math.min(t[1],n[1]),t[2]=Math.max(t[2],n[2]),t[3]=Math.max(t[3],n[3])):t=[...n])}),t&&this.manager.view.fit(t,{duration:500,padding:[e,e,e,e]})}getDataItems(){return[...this.engines.values()].flatMap(e=>e.getDataItems())}debugState(){return[...this.engines].map(([e,t])=>({id:e,hoverId:t.layer.get(`hoverId`),selectedId:t.layer.get(`selectedId`)}))}get map(){return this.manager.map}get legends(){return[...this.engines.values()].filter(e=>e.legend).map(e=>({layerId:e.cfg.id,...e.legend}))}destroy(){this.engines.forEach(e=>e.dispose()),this.engines.clear(),this.envCleanup?.(),this.envCleanup=null,this.env.clear(),this.manager.dispose()}};function xT(e){return new bT(e)}var ST=class e{cfg;constructor(e){let t=Jw(e)[0];this.cfg={mode:`single`,color:`#4f8cff`,radius:7,width:2,fillOpacity:.35,...t}}fill(e){return this.cfg.fill={...this.cfg.fill,...e},e.color!=null&&(this.cfg.color=e.color),e.opacity!=null&&(this.cfg.fillOpacity=e.opacity),this}stroke(e){return this.cfg.stroke={...this.cfg.stroke,...e},e.color!=null&&(this.cfg.color=e.color),e.width!=null&&(this.cfg.width=e.width),this}circle(e){return this.cfg.circle={...this.cfg.circle,...e},e.radius!=null&&(this.cfg.radius=e.radius),e.color!=null&&(this.cfg.color=e.color),e.opacity!=null&&(this.cfg.fillOpacity=e.opacity),this}icon(e){return this.cfg.iconStage={...this.cfg.iconStage,...e},e.src!=null&&(this.cfg.icon=e.src),e.scale!=null&&(this.cfg.iconScale=e.scale),e.rotation!=null&&(this.cfg.iconRotation=e.rotation),e.opacity!=null&&(this.cfg.iconOpacity=e.opacity),this}text(e){return this.cfg.text={...this.cfg.text,...e},e.field!=null&&(this.cfg.labelField=e.field),this}rule(e){return this.cfg.rules||(this.cfg.rules=[]),this.cfg.rules.push(e),this}rules(e){return this.cfg.rules||(this.cfg.rules=[]),this.cfg.rules.push(...e),this}single(e){return this.cfg.mode=`single`,this.cfg.color=e,this}categorical(e,t=`semantic`){return this.cfg.mode=`categorical`,this.cfg.colorField=e,this.cfg.palette=t,this}semantic(e){return this.categorical(e,`semantic`)}radius(e){return this.cfg.radius=e,this.cfg.circle={...this.cfg.circle,radius:e},this}width(e){return this.cfg.width=e,this.cfg.stroke={...this.cfg.stroke,width:e},this}opacity(e){return this.cfg.fillOpacity=e,this.cfg.fill={...this.cfg.fill,opacity:e},this}label(e){return this.cfg.labelField=e,this.cfg.text={...this.cfg.text,field:e},this}toJSON(){return JSON.parse(JSON.stringify(this.cfg))}static fromJSON(t){return new e(t)}};function CT(e){return new ST(e)}var wT=Symbol(`gf-dock-bare`),TT={"top-left":{top:`12px`,left:`12px`},"top-right":{top:`12px`,right:`12px`},"top-center":{top:`12px`,left:`50%`,transform:`translateX(-50%)`},"bottom-left":{bottom:`12px`,left:`12px`},"bottom-right":{bottom:`12px`,right:`12px`},"bottom-center":{bottom:`12px`,left:`50%`,transform:`translateX(-50%)`}},ET=N({name:`GfBaseWidget`,props:{position:{type:String,default:`top-right`},draggable:{type:Boolean,default:!0},title:{type:String,default:``},visible:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},bare:{type:Boolean,default:void 0}},emits:[`close`],setup(e,{slots:t,emit:n}){let r=Xn(wT,!1),i=e.bare===!0||r===!0,a=j(!1),o=Xt({left:0,top:0}),s=Xt({active:!1,sx:0,sy:0,bx:0,by:0});function c(t){if(!e.draggable)return;let n=t.currentTarget,r=n.parentElement,i=(r.offsetParent||document.body).getBoundingClientRect(),c=r.getBoundingClientRect();s.active=!0,s.sx=t.clientX,s.sy=t.clientY,s.bx=c.left-i.left,s.by=c.top-i.top,a.value=!0,o.left=s.bx,o.top=s.by;try{n.setPointerCapture(t.pointerId)}catch{}t.stopPropagation()}function l(e){s.active&&(o.left=s.bx+(e.clientX-s.sx),o.top=s.by+(e.clientY-s.sy))}function u(e){if(s.active){s.active=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}}return()=>{if(!e.visible)return null;if(i)return B(`div`,{class:`gf-widget gf-widget--bare`},t.default?.());let r=a.value?{left:o.left+`px`,top:o.top+`px`}:{...TT[e.position]},d=[B(`span`,{class:`gf-widget__title`},e.title)];return e.closable&&d.push(B(`button`,{class:`gf-widget__close`,type:`button`,title:`关闭`,onClick:e=>{e.stopPropagation(),n(`close`)}},`×`)),B(`div`,{class:[`gf-widget`,{"gf-widget--dragging":s.active}],style:r},[B(`div`,{class:`gf-widget__header`,style:{cursor:e.draggable?`move`:`default`,touchAction:`none`},onPointerdown:c,onPointermove:l,onPointerup:u,onPointercancel:u},d),B(`div`,{class:`gf-widget__body`},t.default?.())])}}}),DT=[{id:`basemap.osm`,label:`街道图 (OSM)`},{id:`basemap.esri-imagery`,label:`影像图 (Esri)`},{id:`basemap.carto-light`,label:`浅色 (Carto)`},{id:`basemap.carto-labels`,label:`暗色标注 (Carto)`},{id:`basemap.tianditu-vec`,label:`矢量 (天地图)`},{id:`basemap.tianditu-img`,label:`影像 (天地图)`},{id:`basemap.amap-vec`,label:`街道 (高德)`},{id:`basemap.amap-img`,label:`影像 (高德)`}],OT=N({name:`GfMapToolbar`,props:{engine:{type:Object,default:null},position:{type:String,default:`top-right`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`工具`},basemaps:{type:Array,default:()=>DT}},setup(e){let t=j(e.basemaps[0]?.id||`basemap.osm`);return()=>{let n=e.engine,r=(e,t,n)=>B(`button`,{class:`gf-tb__btn`,type:`button`,title:t,onClick:n},e),i=[r(`＋`,`放大`,()=>n?.zoomIn()),r(`－`,`缩小`,()=>n?.zoomOut()),r(`⤢`,`全图`,()=>n?.fitAll()),r(`⟲`,`复位`,()=>n?.resetViewState()),B(`select`,{class:`gf-tb__select`,value:t.value,onChange:e=>{let r=e.target.value;n?.setBasemap(r),t.value=r}},e.basemaps.map(e=>B(`option`,{key:e.id,value:e.id},e.label)))];return B(ET,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title},{default:()=>i})}}}),kT=N({name:`GfLayerTree`,props:{engine:{type:Object,default:null},position:{type:String,default:`top-left`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`图层`}},emits:[`close`],setup(e,{emit:t}){return()=>{let n=aT.list(),r=n.length?n.map(t=>B(`li`,{key:t.id,class:`gf-lt__item`},[B(`label`,{class:`gf-lt__label`},[B(`input`,{type:`checkbox`,checked:t.visible,onChange:n=>e.engine?.setLayerVisible(t.id,n.target.checked)}),B(`span`,{class:`gf-lt__name`},t.name||t.id)]),B(`span`,{class:`gf-lt__meta`},`${t.featureCount} 个 · ${t.geometryType}`)])):B(`li`,{class:`gf-lt__empty`},`暂无图层`);return B(ET,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title,closable:!0,onClose:()=>t(`close`)},{default:()=>[B(`ul`,{class:`gf-lt__list`},[r])]})}}}),AT=N({name:`GfLegend`,props:{engine:{type:Object,default:null},position:{type:String,default:`bottom-left`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`图例`}},emits:[`close`],setup(e,{emit:t}){let n=no(()=>{let t=e.engine;return t?t.state.legends.filter(e=>{let t=aT.get(e.layerId||e.layer);return!t||t.visible!==!1}):[]});return()=>{let r=n.value;if(!r.length)return null;let i=r.map(e=>B(`div`,{key:e.layer,class:`gf-lg__group`},[B(`div`,{class:`gf-lg__layer`},e.layer),...e.entries.map(e=>B(`div`,{key:e.label,class:`gf-lg__entry`},[B(`span`,{class:`gf-lg__swatch`,style:{background:e.color}}),B(`span`,{class:`gf-lg__text`},e.label)]))]));return B(ET,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title,closable:!0,onClose:()=>t(`close`)},{default:()=>i})}}}),jT=N({name:`GfStatPanel`,props:{engine:{type:Object,default:null},position:{type:String,default:`bottom-right`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`统计`},statField:{type:String,default:``}},emits:[`close`],setup(e,{emit:t}){let n=no(()=>{let t=aT.list().filter(e=>e.visible!==!1);if(!e.statField||!e.engine)return t.map(e=>({id:e.id,name:e.name||e.id,count:e.featureCount}));let n=e.engine.getDataItems();return t.map(t=>{let r=n.filter(e=>e.layerId===t.id).map(t=>Number(t.props?.[e.statField])).filter(e=>!Number.isNaN(e)),i=r.reduce((e,t)=>e+t,0);return{id:t.id,name:t.name||t.id,count:r.length,sum:i,avg:r.length?i/r.length:0}})});return()=>{let r=n.value;if(!r.length)return null;let i=[B(`ul`,{class:`gf-sp__list`},r.map(e=>B(`li`,{key:e.id,class:`gf-sp__item`},[B(`span`,{class:`gf-sp__name`},e.name),B(`span`,{class:`gf-sp__val`},MT(e))])))];return B(ET,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title,closable:!0,onClose:()=>t(`close`)},{default:()=>i})}}});function MT(e){return e.sum===void 0?`${e.count} 个`:`${e.count} 个 · Σ ${e.sum.toFixed(1)} · x̄ ${e.avg.toFixed(1)}`}var NT=new Map;function PT(e,t,n){NT.set(e,{component:t,...n})}function FT(e,t){if(t)return{component:t};if(e&&NT.has(e))return NT.get(e)}var IT=!1;function LT(){IT||(IT=!0,PT(`map-toolbar`,OT,{title:`工具`}),PT(`layer-tree`,kT,{title:`图层`}),PT(`legend`,AT,{title:`图例`}),PT(`stat-panel`,jT,{title:`统计`}))}LT();var RT={"top-left":{strip:`top`,place:`start`},"top-center":{strip:`top`,place:`center`},"top-right":{strip:`top`,place:`end`},left:{strip:`left`,place:`center`},right:{strip:`right`,place:`center`},"bottom-left":{strip:`bottom`,place:`start`},"bottom-center":{strip:`bottom`,place:`center`},"bottom-right":{strip:`bottom`,place:`end`}},zT=[`top`,`left`,`right`,`bottom`];function BT(e,t){return e===`none`?!1:t===`left`||t===`right`||e===`row`||e===`full`}var VT=N({name:`GfDockContainer`,props:{manager:{type:null,default:void 0},engine:{type:Object,default:null},draggable:{type:Boolean,default:!0}},setup(e){let t=e.manager||_T;Yn(wT,!0);let n=j(null),r=null;function i(e,t){let n=document.elementFromPoint(e,t)?.closest?.(`[data-dock-strip]`);if(!n)return null;let r=n.getAttribute(`data-dock-strip`);return zT.includes(r)?r:null}function a(t,n){if(e.draggable){r={id:t,sx:n.clientX,sy:n.clientY,active:!0,moved:!1};try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.stopPropagation()}}function o(e){if(r?.active){if(!r.moved){if(Math.abs(e.clientX-r.sx)+Math.abs(e.clientY-r.sy)<4)return;r.moved=!0}n.value=i(e.clientX,e.clientY)}}function s(e){if(!r?.active)return;let a=r.moved&&i(e.clientX,e.clientY)||null;if(a){let e=t.get(r.id);e&&e.position!==a&&t.move(r.id,a)}n.value=null,r=null;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}function c(n){let i=FT(n.type,n.component),c=hT(n.span,n.position),l=BT(c,RT[n.position].strip),u=!!t.collapsed[n.id],d={flex:l?`1 1 auto`:`0 0 auto`};c===`full`&&(d.width=`100%`),(RT[n.position].strip===`left`||RT[n.position].strip===`right`)&&(d.maxHeight=`100%`);let f=B(`div`,{class:`gf-dock__head`,style:{cursor:e.draggable?`move`:`default`},onPointerdown:e=>a(n.id,e),onPointermove:o,onPointerup:s,onPointercancel:s},[B(`span`,{class:`gf-dock__title`},n.title||n.type||n.id),n.collapsible===!1?null:B(`button`,{class:`gf-dock__toggle`,type:`button`,title:u?`展开`:`折叠`,onClick:e=>{e.stopPropagation(),t.toggleCollapse(n.id)}},u?`+`:`−`)]),p=i?B(`div`,{class:`gf-dock__body`},[B(i.component,{key:n.id,engine:e.engine,position:n.position,title:n.title,...i.props||{},...n.props||{}})]):B(`div`,{class:`gf-dock__empty`},`未注册微件：${n.type||`unknown`}`);return B(`div`,{key:n.id,class:[`gf-dock__item`,`gf-dock__item--${c}`,{"gf-dock__item--collapsed":u,"gf-dock__item--dragging":r?.moved===!0}],style:d},[f,u?null:p])}function l(e){let r=e===`top`||e===`bottom`,i=t.sorted().filter(t=>RT[t.position].strip===e).map(e=>{let t=c(e),n=RT[e.position].place;return r&&(t.props={...t.props,style:{...t.props?.style||{},...n===`end`?{marginLeft:`auto`}:{},...n===`center`?{marginLeft:`auto`,marginRight:`auto`}:{}}}),t});return B(`div`,{class:[`gf-dock__strip`,`gf-dock__strip--${e}`,{"gf-dock__strip--over":n.value===e},{"gf-dock__strip--empty":!i.length}],"data-dock-strip":e,style:{flexDirection:r?`row`:`column`}},i)}return()=>B(`div`,{class:[`gf-dock`,{"gf-dock--dragging":n.value!==null}]},zT.map(l))}});function HT(){return{manager:_T,dock:e=>_T.dock(e),load:e=>_T.load(e),snapshot:()=>_T.toJSON(),undock:e=>_T.undock(e),move:(e,t)=>_T.move(e,t),list:e=>_T.list(e),all:()=>_T.sorted(),runtimeState:e=>_T.runtimeState(e),setVisible:(e,t)=>_T.setVisible(e,t),setSpan:(e,t)=>_T.setSpan(e,t),setPriority:(e,t)=>_T.setPriority(e,t),isCollapsed:e=>_T.isCollapsed(e),toggleCollapse:e=>_T.toggleCollapse(e),setCollapsed:(e,t)=>_T.setCollapsed(e,t)}}var UT=class{cfg;onConfigChange;constructor(e){this.cfg=e}getConfig(){return{...this.cfg}}setVisible(e){this.cfg.visible=e,this.onConfigChange?.(this.cfg)}updateConfig(e){Object.assign(this.cfg,e),this.onConfigChange?.(this.cfg)}toJson(){return{...this.cfg}}},WT=class extends UT{type=`vector`;layerEngine=null;mapRef=null;constructor(e){super(e)}attach(e){this.mapRef=e}detach(){this.layerEngine&&=(this.layerEngine.dispose(),this.mapRef?.removeLayer?.(this.layerEngine.layer),null),this.mapRef=null}buildPipeline(e,t){let n=new mT(this.cfg,{popupBridge:t.popupBridge,map:e,env:t.env});return e.addLayer(n.layer),this.layerEngine=n,this.mapRef=e,n}getLayerEngine(){return this.layerEngine}},GT=new Set([`source`,`geojson-source`,`url-source`,`api-source`,`mock-source`]),KT=new Set([`processor`,`filter`,`mapping`,`aggregate`,`buffer`,`normalize`,`pick-fields`]);function qT(e){let t=new Map(e.nodes.map(e=>[e.id,e])),n=(t,n)=>e.nodes.filter(e=>e.type===t).map(n),r=(t,n)=>e.connections.find(e=>e.target===t&&e.targetInput===n),i=n=>{let i={...n.params},a=[],o=new Set,s=r(n.id,`data`);for(;s&&!o.has(s.source);){o.add(s.source);let e=t.get(s.source);if(!e)break;if(KT.has(e.type)&&e.params?.ref)a.unshift({ref:String(e.params.ref),options:e.params.options||{}});else if(GT.has(e.type)&&e.params?.type){i.provider=e.params;break}else break;s=r(e.id,`input`)}a.length&&(i.processors=[...i.processors||[],...a]);let c=[];for(let r of e.connections){if(r.target!==n.id||r.targetInput!==`effects`)continue;let e=t.get(r.source);e&&e.params?.ref&&c.push({ref:String(e.params.ref),options:e.params.options||{}})}return c.length&&(i.effects=[...i.effects||[],...c]),i},a=e.nodes.filter(e=>e.type===`layer`).map(t=>e.connections.some(e=>e.target===t.id&&(e.targetInput===`data`||e.targetInput===`effects`))?i(t):t.params),o=n(`basemap`,e=>{let t=e.params;return{id:t.id,url:t.url||Tv.resolve(t.id)}});return{version:`2.0.0`,name:e.name,baseLayers:o,controls:n(`control`,e=>e.params),layers:a}}function JT(e,t){let n=qT(t);e.fromJSON(n);let r=(t.nodes.find(e=>e.type===`engine-run`)||t.nodes.find(e=>e.type===`map-output`||e.type===`output`))?.params?.routeName||`graph`;return e.run(r,{}),n}var YT=class{undoStack=[];redoStack=[];max;constructor(e=50){this.max=e}push(e){this.undoStack.push(e),this.undoStack.length>this.max&&this.undoStack.shift(),this.redoStack=[]}canUndo(){return this.undoStack.length>1}canRedo(){return this.redoStack.length>0}undo(){if(!this.canUndo())return null;let e=this.undoStack.pop();return this.redoStack.push(e),this.undoStack[this.undoStack.length-1]??null}redo(){if(!this.canRedo())return null;let e=this.redoStack.pop();return this.undoStack.push(e),e}current(){return this.undoStack[this.undoStack.length-1]??null}clear(){this.undoStack=[],this.redoStack=[]}},XT=`http://www.w3.org/2000/svg`;function ZT(e,t,n={width:160,height:100}){let r=e.map(e=>e.x),i=e.map(e=>e.y),a=e.map(e=>e.x+e.w),o=e.map(e=>e.y+e.h),s=Math.min(...r,t.x),c=Math.min(...i,t.y),l=Math.max(...a,t.x+t.w),u=Math.max(...o,t.y+t.h),d=Math.max(1,l-s),f=Math.max(1,u-c),p=Math.min(n.width/d,n.height/f),m=(n.width-d*p)/2,h=(n.height-f*p)/2,g=(e,t)=>({x:(e-s)*p+m,y:(t-c)*p+h}),_=(e,t)=>({x:(e-m)/p+s,y:(t-h)/p+c}),v=document.createElementNS(XT,`svg`);v.setAttribute(`width`,String(n.width)),v.setAttribute(`height`,String(n.height)),v.setAttribute(`class`,`gf-minimap`),e.forEach(e=>{let t=g(e.x,e.y),n=document.createElementNS(XT,`rect`);n.setAttribute(`x`,String(t.x)),n.setAttribute(`y`,String(t.y)),n.setAttribute(`width`,String(Math.max(2,e.w*p))),n.setAttribute(`height`,String(Math.max(2,e.h*p))),n.setAttribute(`rx`,`2`),n.setAttribute(`class`,`gf-minimap__node`),v.appendChild(n)});let y=g(t.x,t.y),b=document.createElementNS(XT,`rect`);return b.setAttribute(`x`,String(y.x)),b.setAttribute(`y`,String(y.y)),b.setAttribute(`width`,String(Math.max(4,t.w*p))),b.setAttribute(`height`,String(Math.max(4,t.h*p))),b.setAttribute(`class`,`gf-minimap__viewport`),v.appendChild(b),{svg:v,toCanvas:_}}function QT(e){return{version:`2.0.0`,name:`basic-chain`,nodes:[{id:`bm`,type:`basemap`,label:`底图 OSM`,params:{id:`basemap.osm`},position:{x:40,y:40}},{id:`c1`,type:`control`,label:`版权`,params:{id:`attribution`},position:{x:40,y:160}},{id:`c2`,type:`control`,label:`比例尺`,params:{id:`scale`},position:{x:40,y:280}},{id:`l1`,type:`layer`,label:`监测站`,params:{id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:e}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}},position:{x:300,y:160}},{id:`out`,type:`map-output`,label:`地图输出`,params:{routeName:`monitor`},position:{x:600,y:160}}],connections:[]}}var $T={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港监测站`,risk:.92,value:187,level:`高`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂监测站`,risk:.65,value:142,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武监测站`,risk:.38,value:96,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.43,25.02]},properties:{id:`s4`,name:`洛阳桥监测站`,risk:.55,value:118,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾监测站`,risk:.78,value:165,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港监测站`,risk:.21,value:72,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.61,25.03]},properties:{id:`s7`,name:`小岞监测站`,risk:.45,value:108,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰监测站`,risk:.88,value:178,level:`高`}}]},eE={class:`app`},tE={class:`app__stage`},nE={key:0,class:`popup__card`},rE={class:`popup__title`},iE={class:`popup__rows`},aE={class:`popup__row-label`},oE={class:`popup__row-value`},sE=N({__name:`BasicChainDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null);return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`).layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:$T}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}).run(`monitor`,{}),$n(()=>{r.value=i.value?.state.popup??null}),window.__geoFlow=()=>i.value}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,eE,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 01 · 链式调用 + 内置微件`),R(`span`,{class:`app__hint`},[ka(`点击站点看详情 · 微件可拖拽 · 控制台 `),R(`code`,null,`window.__geoFlow()`)])],-1),R(`div`,tE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,nE,[R(`div`,rE,A(r.value.title),1),R(`div`,iE,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,aE,A(e.label),1),R(`span`,oE,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),cE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港监测站`,risk:.92,value:187,level:`高`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂监测站`,risk:.65,value:142,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武监测站`,risk:.38,value:96,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾监测站`,risk:.78,value:165,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港监测站`,risk:.21,value:72,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰监测站`,risk:.88,value:178,level:`高`}}]},lE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Polygon`,coordinates:[[[118.4,24.9],[118.72,24.9],[118.74,25.12],[118.4,25.14],[118.4,24.9]]]},properties:{id:`bay1`,name:`泉州湾`}}]},uE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`LineString`,coordinates:[[118.46,24.98],[118.52,24.95],[118.58,24.93],[118.61,25.03],[118.55,25.08],[118.49,25.05]]},properties:{id:`r1`,name:`巡测航线 A`}}]},dE={class:`app`},fE={class:`app__stage`},pE={class:`cfg-code`},mE={key:0,class:`popup__card`},hE={class:`popup__title`},gE={class:`popup__rows`},_E={class:`popup__row-label`},vE={class:`popup__row-value`},yE=iu(N({__name:`AnonymousLayerDemo`,setup(e){let t=[{id:`bays`,name:`海湾范围`,zIndex:10,provider:{type:`raw`,config:{data:lE}},style:{mode:`single`,color:`#1976d2`,fillOpacity:.12,width:1.5},interaction:{cursor:!0}},{id:`route`,name:`巡测航线`,zIndex:15,provider:{type:`raw`,config:{data:uE}},style:{mode:`single`,color:`#f59e0b`,width:3},interaction:{cursor:!0}},{id:`stations`,name:`监测站`,zIndex:20,provider:{type:`raw`,config:{data:cE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}],n=j(),r=j(),i=j(null),a=un(null),o=j(!0),s=JSON.stringify(t,null,2);return Ir(()=>{a.value=xT({target:n.value,popupEl:r.value}),a.value.baseLayer(`basemap.osm`),a.value.run(`monitor`,{},t),$n(()=>{i.value=a.value?.state.popup??null}),window.__geoFlow=()=>a.value}),Br(()=>{a.value?.destroy(),a.value=null}),(e,t)=>(I(),L(`div`,dE,[t[2]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 02 · 匿名图层 JSON 注册 + 内置微件`),R(`span`,{class:`app__hint`},[ka(`图层由 JSON 注入 · 图例随图层显隐同步 · 控制台 `),R(`code`,null,`window.__geoFlow()`)])],-1),R(`div`,fE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:n},null,512),z(M(OT),{engine:a.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:a.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:a.value,position:`bottom-left`},null,8,[`engine`]),z(M(jT),{engine:a.value,position:`top-right`,draggable:!0,title:`统计`},null,8,[`engine`]),o.value?(I(),xa(M(ET),{key:0,position:`bottom-right`,title:`图层配置 JSON`,closable:``,onClose:t[0]||=e=>o.value=!1},{default:Kn(()=>[R(`pre`,pE,A(M(s)),1)]),_:1})):(I(),L(`button`,{key:1,class:`cfg-reopen`,onClick:t[1]||=e=>o.value=!0},`显示图层 JSON`)),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:r},[i.value?(I(),L(`div`,mE,[R(`div`,hE,A(i.value.title),1),R(`div`,gE,[(I(!0),L(F,null,P(i.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,_E,A(e.label),1),R(`span`,vE,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-833afc16`]]),bE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`a1`,name:`后渚港`,risk:.92,level:`高`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`a2`,name:`秀涂`,risk:.65,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`a3`,name:`崇武`,risk:.38,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`a4`,name:`惠安湾`,risk:.78,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`a5`,name:`斗尾港`,risk:.21,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`a6`,name:`净峰`,risk:.88,level:`高`}}]},xE={class:`app`},SE={class:`app__stage`},CE={key:0,class:`popup__card`},wE={class:`popup__title`},TE={class:`popup__rows`},EE={class:`popup__row-label`},DE={class:`popup__row-value`},OE=N({__name:`PredefinedLayerDemo`,setup(e){class t extends WT{id=`alarms`;constructor(){super({id:`alarms`,name:`告警站`,zIndex:10,provider:{type:`raw`,config:{data:bE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}})}}let n=j(),r=j(),i=j(null),a=un(null);return Ir(()=>{a.value=xT({target:n.value,popupEl:r.value}),a.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a.value.attachLayer(new t),a.value.run(`alarm`,{}),$n(()=>{i.value=a.value?.state.popup??null}),window.__geoFlow=()=>a.value}),Br(()=>{a.value?.destroy(),a.value=null}),(e,t)=>(I(),L(`div`,xE,[t[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 03 · 业务图层类继承预定义`),R(`span`,{class:`app__hint`},[R(`code`,null,`class AlarmLayer extends VectorLayerBase`)])],-1),R(`div`,SE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:n},null,512),z(M(OT),{engine:a.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:a.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:a.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:r},[i.value?(I(),L(`div`,CE,[R(`div`,wE,A(i.value.title),1),R(`div`,TE,[(I(!0),L(F,null,P(i.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,EE,A(e.label),1),R(`span`,DE,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),kE={class:`app`},AE={class:`app__stage`},jE={class:`cfg-code`},ME={key:0,class:`popup__card`},NE={class:`popup__title`},PE={class:`popup__rows`},FE={class:`popup__row-label`},IE={class:`popup__row-value`},LE=iu(N({__name:`ExternalConfigDemo`,setup(e){let t={version:`2.0.0`,name:`external-config-demo`,baseLayers:[{id:`basemap.osm`}],controls:[{id:`attribution`},{id:`scale`}],layers:[{id:`alarms`,name:`告警站`,zIndex:10,provider:{type:`raw`,config:{data:bE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}]},n=JSON.stringify(t,null,2),r=j(!0),i=j(),a=j(),o=j(null),s=un(null);return Ir(()=>{s.value=xT({target:i.value,popupEl:a.value}),s.value.fromJSON(t),s.value.run(`alarm`,{}),$n(()=>{o.value=s.value?.state.popup??null}),window.__geoFlow=()=>s.value}),Br(()=>{s.value?.destroy(),s.value=null}),(e,t)=>(I(),L(`div`,kE,[t[2]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 04 · 外部 JSON 配置引擎`),R(`span`,{class:`app__hint`},[R(`code`,null,`engine.fromJSON(mapConfig)`),ka(` · 底图/控件/图层全外部声明`)])],-1),R(`div`,AE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:i},null,512),z(M(OT),{engine:s.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:s.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:s.value,position:`bottom-left`},null,8,[`engine`]),r.value?(I(),xa(M(ET),{key:0,position:`bottom-right`,title:`地图配置 JSON`,closable:``,onClose:t[0]||=e=>r.value=!1},{default:Kn(()=>[R(`pre`,jE,A(M(n)),1)]),_:1})):(I(),L(`button`,{key:1,class:`cfg-reopen`,onClick:t[1]||=e=>r.value=!0},`显示配置 JSON`)),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:a},[o.value?(I(),L(`div`,ME,[R(`div`,NE,A(o.value.title),1),R(`div`,PE,[(I(!0),L(F,null,P(o.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,FE,A(e.label),1),R(`span`,IE,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-9d2df292`]]),RE={class:`app`},zE={class:`app__stage`},BE={class:`ex-style`},VE=[`onClick`],HE={key:0,class:`popup__card`},UE={class:`popup__title`},WE={class:`popup__rows`},GE={class:`popup__row-label`},KE={class:`popup__row-value`},qE=iu(N({__name:`ExpressionStyleDemo`,setup(e){let t=[{label:`常量 radius=7`,radius:7},{label:"表达式 '${f.risk*8+4}'",radius:"${f.risk * 8 + 4}"},{label:`函数 (f)=>…`,radius:e=>e.get(`risk`)*8+4}],n=j(0),r=j(),i=j(),a=j(null),o=un(null),s=null,c={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:$T}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{o.value=xT({target:r.value,popupEl:i.value}),o.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),s=o.value.layer(c),o.value.run(`monitor`,{}),$n(()=>{a.value=o.value?.state.popup??null}),window.__geoFlow=()=>o.value});function l(e){n.value=e,s&&(s.updateConfig({...c,style:{...c.style,radius:t[e].radius}}),s.restart())}return Br(()=>{o.value?.destroy(),o.value=null}),(e,s)=>(I(),L(`div`,RE,[s[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 05 · 表达式/函数/常量三态参数`),R(`span`,{class:`app__hint`},`切换 radius 参数风格 · updateConfig + restart 热更新`)],-1),R(`div`,zE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:r},null,512),z(M(OT),{engine:o.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:o.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:o.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`radius 参数风格`},{default:Kn(()=>[R(`div`,BE,[(I(),L(F,null,P(t,(e,t)=>R(`button`,{key:t,class:Ce([`ex-style__btn`,{"ex-style__btn--active":n.value===t}]),onClick:e=>l(t)},A(e.label),11,VE)),64))])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:i},[a.value?(I(),L(`div`,HE,[R(`div`,UE,A(a.value.title),1),R(`div`,WE,[(I(!0),L(F,null,P(a.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,GE,A(e.label),1),R(`span`,KE,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-2c67fd1d`]]),JE={class:`app`},YE={class:`app__stage`},XE={class:`proc`},ZE=[`selected`],QE={class:`proc__note`},$E={key:0,class:`popup__card`},eD={class:`popup__title`},tD={class:`popup__rows`},nD={class:`popup__row-label`},rD={class:`popup__row-value`},iD=iu(N({__name:`ProcessorsAllDemo`,setup(e){let t=[{label:`无`,note:`原始 8 个监测站点`,build:()=>[]},{label:`filter（仅 高）`,note:`按 level=高 过滤，剩 2 个`,build:()=>[ju(`filter`,{field:`level`,op:`=`,value:`高`})]},{label:`geojson（校验+扫描）`,note:`校验/标准化/字段扫描（无可见变化）`,build:()=>[ju(`geojson`,{})]},{label:`mapping（新增 riskLabel）`,note:`字段映射：riskLabel ← level`,build:()=>[ju(`field-map`,{mapping:{riskLabel:`level`}})]},{label:`projection（4326 no-op）`,note:`投影转换（4326→3857 由 applyToMap 承担，no-op）`,build:()=>[ju(`projection`,{})]},{label:`simplify（点 no-op）`,note:`几何简化（点几何无简化效果）`,build:()=>[ju(`simplify`,{tolerance:.001})]},{label:`buffer（半径 1000m）`,note:`Turf 缓冲区：点→面（8 个圆面）`,build:()=>[ju(`buffer`,{radius:1e3})]},{label:`aggregate（按 level 分组）`,note:`聚合质心：3 个分组点 + avgRisk`,build:()=>[ju(`aggregate`,{groupBy:`level`,stats:[{field:`risk`,as:`avgRisk`,fn:`avg`}]})]}],n=j(0),r=no(()=>t[n.value].note),i=j(),a=j(),o=j(null),s=un(null),c=null,l={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:$T}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`avgRisk`,`count`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{s.value=xT({target:i.value,popupEl:a.value}),s.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),c=s.value.layer(l),s.value.run(`monitor`,{}),$n(()=>{o.value=s.value?.state.popup??null}),window.__geoFlow=()=>s.value});function u(e){n.value=e,c&&(c.updateConfig({...l,processors:t[e].build()}),c.restart())}return Br(()=>{s.value?.destroy(),s.value=null}),(e,c)=>(I(),L(`div`,JE,[c[1]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 06 · 内置数据处理器`),R(`span`,{class:`app__hint`},`7 个 processor 逐个演示 · updateConfig + restart`)],-1),R(`div`,YE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:i},null,512),z(M(OT),{engine:s.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:s.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:s.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`数据处理器`},{default:Kn(()=>[R(`div`,XE,[R(`select`,{class:`proc__select`,onChange:c[0]||=e=>u(e.target.selectedIndex)},[(I(),L(F,null,P(t,(e,t)=>R(`option`,{key:t,selected:t===n.value},A(e.label),9,ZE)),64))],32),R(`div`,QE,A(r.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:a},[o.value?(I(),L(`div`,$E,[R(`div`,eD,A(o.value.title),1),R(`div`,tD,[(I(!0),L(F,null,P(o.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,nD,A(e.label),1),R(`span`,rD,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-15de89d0`]]),aD={class:`app`},oD={class:`app__stage`},sD=[`selected`],cD={key:0,class:`popup__card`},lD={class:`popup__title`},uD={class:`popup__rows`},dD={class:`popup__row-label`},fD={class:`popup__row-value`},pD=iu(N({__name:`EffectsAllDemo`,setup(e){let t=[{label:`无`,build:()=>[]},{label:`ripple（多环扩散）`,build:()=>[Mu(`ripple`,{color:`#ff5c5c`,period:3e3,rings:3,conditionField:`level`,conditionValue:`高`})]},{label:`pulse（点跳跃）`,build:()=>[Mu(`pulse`,{color:`#ffd666`,period:1200,conditionField:`level`,conditionValue:`高`})]},{label:`wave（涟漪）`,build:()=>[Mu(`wave`,{color:`#36cbcb`,period:1800,rings:3,conditionField:`level`,conditionValue:`高`})]},{label:`breathing（呼吸灯）`,build:()=>[Mu(`breathing`,{color:`#4f8cff`,period:1600,conditionField:`level`,conditionValue:`高`})]},{label:`carousel（轮流高亮）`,build:()=>[Mu(`carousel`,{interval:1500,autoStart:!0,pauseOnHover:!0,pauseOnUserInteract:!0})]}],n=j(0),r=j(),i=j(),a=j(null),o=un(null),s=null,c={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:$T}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{o.value=xT({target:r.value,popupEl:i.value}),o.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),s=o.value.layer(c),o.value.run(`monitor`,{}),$n(()=>{a.value=o.value?.state.popup??null}),window.__geoFlow=()=>o.value});function l(e){n.value=e,s&&(s.updateConfig({...c,effects:t[e].build()}),s.restart())}return Br(()=>{o.value?.destroy(),o.value=null}),(e,s)=>(I(),L(`div`,aD,[s[1]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 07 · 内置效果`),R(`span`,{class:`app__hint`},`5 个 effect 逐个演示 · updateConfig + restart 重挂载`)],-1),R(`div`,oD,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:r},null,512),z(M(OT),{engine:o.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:o.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:o.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`地图效果`},{default:Kn(()=>[R(`select`,{class:`efc__select`,onChange:s[0]||=e=>l(e.target.selectedIndex)},[(I(),L(F,null,P(t,(e,t)=>R(`option`,{key:t,selected:t===n.value},A(e.label),9,sD)),64))],32)]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:i},[a.value?(I(),L(`div`,cD,[R(`div`,lD,A(a.value.title),1),R(`div`,uD,[(I(!0),L(F,null,P(a.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,dD,A(e.label),1),R(`span`,fD,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-788689d8`]]),mD={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港`,type:`alarm`,level:`高`,risk:.92,value:187}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂`,type:`normal`,level:`中`,risk:.65,value:142}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武`,type:`normal`,level:`低`,risk:.38,value:96}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.43,25.02]},properties:{id:`s4`,name:`洛阳桥`,type:`normal`,level:`中`,risk:.55,value:118}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾`,type:`alarm`,level:`中`,risk:.78,value:165}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港`,type:`normal`,level:`低`,risk:.21,value:72}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.61,25.03]},properties:{id:`s7`,name:`小岞`,type:`normal`,level:`中`,risk:.45,value:108}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰`,type:`alarm`,level:`高`,risk:.88,value:178}}]},hD={class:`app`},gD={class:`app__stage`},_D={class:`pc`},vD={class:`pc__row`},yD={class:`pc__row`},bD={class:`pc__stat`},xD={class:`gf-popups`},SD={class:`gf-popups__svg`},CD=[`d`],wD=[`onMousedown`],TD={class:`gf-card__head`,"data-drag":`1`},ED=[`onClick`],DD={class:`gf-card__side`},OD=188,kD=96,AD=iu(N({__name:`CarouselPopupDemo`,setup(e){let t=j(),n=un(null),r=j(1200),i=j(`idle`),a=j(-1),o=j(0),s=j(`bezier`),c=j([]),l=j([]);function u(e,t){switch(e){case`right`:return[t.x,t.y+kD/2];case`left`:return[t.x+OD,t.y+kD/2];case`top`:return[t.x+OD/2,t.y+kD];case`bottom`:return[t.x+OD/2,t.y];default:return[t.x,t.y+kD/2]}}function d(){let e=dT.list();o.value=e.length;let t={},n=[];for(let r of e){let e=dT.getLayout(r.id);if(!e)continue;let i=r.content?.rows??[];t[r.id]={id:r.id,title:r.content?.title??r.id,rows:i,anchor:r.anchorScreen,offset:e.offset,side:e.side,locked:!!r.locked},n.push({id:r.id,d:uT.toPath({start:r.anchorScreen,end:e.leaderEnd},{style:s.value,color:`#94a3b8`,width:1.5,arrow:!0})})}c.value=Object.values(t),l.value=n}function f(){let e=new Map;for(let t of dT.list()){let r=t.feature?.geometry;if(!r)continue;let i=n.value?.map.getPixelFromCoordinate(hp(r.coordinates));i&&e.set(t.id,[i[0],i[1]])}e.size&&dT.updateAnchors(e),d()}function p(e){let t=e.geometry?.coordinates??[],r=n.value?.map.getPixelFromCoordinate(hp(t));dT.open({id:`card-`+e.properties.id,feature:e,anchorScreen:r?[r[0],r[1]]:[0,0],size:{width:188,height:96},content:{title:String(e.properties.name??`详情`),rows:[{label:`等级`,value:String(e.properties.level??`—`)},{label:`风险`,value:Number(e.properties.risk).toFixed(2)},{label:`类型`,value:String(e.properties.type??`—`)}]}}),d()}function m(e){dT.close(e),d()}function h(){dT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),mD.features.forEach(p)}function g(){dT.list().map(e=>e.id).forEach(e=>dT.close(e)),d()}function _(){dT.list().forEach(e=>dT.unlockPosition(e.id)),d()}let v=null,y={x:0,y:0},b={x:0,y:0};function x(e,t){t.target.dataset.drag&&(t.preventDefault(),v=e.id,y={x:t.clientX,y:t.clientY},b={...e.offset},document.addEventListener(`mousemove`,S),document.addEventListener(`mouseup`,C))}function S(e){if(!v)return;let t=e.clientX-y.x,n=e.clientY-y.y,r={x:b.x+t,y:b.y+n},i=c.value.slice(),a=i.findIndex(e=>e.id===v);if(a<0)return;let o={...i[a],offset:r};i[a]=o,c.value=i;let d=l.value.slice(),f=d.findIndex(e=>e.id===v);if(f>=0){let e=u(o.side,r);d[f]={id:v,d:uT.toPath({start:o.anchor,end:e},{style:s.value,color:`#94a3b8`,width:1.5,arrow:!0})},l.value=d}}function C(){if(v){let e=c.value.find(e=>e.id===v);e&&dT.lockPosition(v,e.offset)}v=null,document.removeEventListener(`mousemove`,S),document.removeEventListener(`mouseup`,C)}function w(){let e=n.value?.engines.get(`stations`);e?.updateConfig({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:9,fillOpacity:.85},effects:[Mu(`carousel`,{interval:r.value,autoStart:!0,onEnter:p,onLeave:e=>m(`card-`+e.properties.id)})]}),e?.restart()}Ir(()=>{n.value=xT({target:t.value}),n.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),n.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:9,fillOpacity:.85},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0},effects:[Mu(`carousel`,{interval:r.value,autoStart:!0,onEnter:p,onLeave:e=>m(`card-`+e.properties.id)})]}),n.value.run(`carousel`,{});let e=(n.value.engines.get(`stations`)?.layer)?.get?.(`carouselController`);if(e){let t=setInterval(()=>{i.value=e.state,a.value=e.currentIndex},200);window.__carousel=e,window.__carouselTimer=t}dT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),dT.on(d);let o=n.value.map.getView();n.value.map.on(`pointerdrag`,E),o.on(`change:resolution`,E),n.value.map.on(`moveend`,f),n.value.map.on(`resize`,f),window.addEventListener(`resize`,D)});let T=null;function E(){T??=requestAnimationFrame(()=>{T=null,f()})}function D(){t.value&&(dT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),f())}return Br(()=>{dT.list().map(e=>e.id).forEach(e=>dT.close(e)),window.__carouselTimer&&clearInterval(window.__carouselTimer),window.removeEventListener(`resize`,D),n.value?.destroy(),n.value=null}),(e,u)=>(I(),L(`div`,hD,[u[6]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 08 · 轮播高亮 + 弹框防叠盖`),R(`span`,{class:`app__hint`},`carousel 轮流高亮并开/关弹框 · 多点同时弹框由 PopupLayoutSolver 推开 · 卡片可拖拽锁定`)],-1),R(`div`,gD,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:n.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:n.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:n.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`轮播 / 弹框控制`},{default:Kn(()=>[R(`div`,_D,[R(`div`,vD,[u[2]||=R(`label`,null,`interval`,-1),qn(R(`input`,{type:`range`,min:`500`,max:`4000`,step:`100`,"onUpdate:modelValue":u[0]||=e=>r.value=e},null,512),[[Qo,r.value,void 0,{number:!0}]]),R(`span`,null,A(r.value)+`ms`,1)]),R(`div`,yD,[u[4]||=R(`label`,null,`引线风格`,-1),qn(R(`select`,{"onUpdate:modelValue":u[1]||=e=>s.value=e,onChange:d},[...u[3]||=[R(`option`,{value:`bezier`},`贝塞尔曲线`,-1),R(`option`,{value:`polyline`},`折线（斜出+横竖到达）`,-1),R(`option`,{value:`straight`},`直线`,-1)]],544),[[$o,s.value]])]),R(`div`,bD,` 轮播：`+A(i.value)+` · 第 `+A(a.value+1)+` 站 · 活跃弹框 `+A(o.value),1),R(`div`,{class:`pc__btns`},[R(`button`,{onClick:w},`应用 interval`),R(`button`,{onClick:h},`打开全部弹框（防叠盖）`),R(`button`,{onClick:g},`关闭全部`),R(`button`,{onClick:_},`解锁/复位`)]),u[5]||=R(`div`,{class:`pc__tip`},`拖拽卡片标题栏即时跟随 · 松开 lockPosition 锁定（求解器不再覆盖） · 引线斜出+横/竖到达`,-1)])]),_:1}),R(`div`,xD,[(I(),L(`svg`,SD,[(I(!0),L(F,null,P(l.value,e=>(I(),L(`path`,{key:e.id,d:e.d},null,8,CD))),128))])),(I(!0),L(F,null,P(c.value,e=>(I(),L(`div`,{key:e.id,class:Ce([`gf-card`,{"gf-card--locked":e.locked}]),style:ve({transform:`translate(${e.offset.x}px, ${e.offset.y}px)`}),onMousedown:t=>x(e,t)},[R(`div`,TD,[ka(A(e.title)+` `,1),R(`button`,{class:`gf-card__x`,onClick:as(t=>m(e.id),[`stop`])},`×`,8,ED)]),(I(!0),L(F,null,P(e.rows,(e,t)=>(I(),L(`div`,{key:t,class:`gf-card__row`},[R(`span`,null,A(e.label),1),R(`b`,null,A(e.value),1)]))),128)),R(`div`,DD,`side: `+A(e.side),1)],46,wD))),128))])])]))}}),[[`__scopeId`,`data-v-790cc86a`]]),jD={class:`app`},MD={class:`app__stage`},ND={key:0,class:`popup__card`},PD={class:`popup__title`},FD={class:`popup__rows`},ID={class:`popup__row-label`},LD={class:`popup__row-value`},RD=iu(N({__name:`CustomPluginDemo`,setup(e){Ou({name:`alert-flag`,symbol:Symbol.for(`processor.alert-flag`),meta:{label:`告警标记`,icon:`⚠`,desc:`risk > 阈值 → alert=true`,category:`data`},defaults:{threshold:.7},process(e,t){let n=e.features.features.map(e=>({...e,properties:{...e.properties,alert:Number(e.properties?.risk)>t.threshold}}));return{...e,features:{...e.features,features:n}}}});let t=j(),n=j(),r=j(null),i=un(null);return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:$T}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`alert`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0},processors:[ju(`alert-flag`,{threshold:.7})]}),i.value.run(`custom`,{}),$n(()=>{r.value=i.value?.state.popup??null}),window.__geoFlow=()=>i.value}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,jD,[a[1]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 09 · 自定义插件`),R(`span`,{class:`app__hint`},[R(`code`,null,`defineProcessor`),ka(` 注册 + `),R(`code`,null,`useProcessor('alert-flag')`),ka(` 接入`)])],-1),R(`div`,MD,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`自定义 processor`},{default:Kn(()=>[...a[0]||=[R(`pre`,{class:`cp-code`},`name: 'alert-flag'
default threshold: 0.7
→ popup 显示 alert 字段
（risk > 0.7 的站点 alert=true）`,-1)]]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,ND,[R(`div`,PD,A(r.value.title),1),R(`div`,FD,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,ID,A(e.label),1),R(`span`,LD,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-cb6ff43a`]]),zD={class:`app`},BD={class:`stage`},VD={class:`mapwrap`},HD={key:0,class:`popup__card`},UD={class:`popup__title`},WD={class:`popup__rows`},GD={class:`popup__row-label`},KD={class:`popup__row-value`},qD={class:`canvas-panel`},JD={class:`palette`},YD=[`onClick`],XD=[`onPointerdown`],ZD={class:`node__head`},QD={class:`node__type`},$D={class:`node__label`},eO=[`onClick`],tO={class:`node__id`},nO={class:`ops`},rO=[`disabled`],iO=[`disabled`],aO={class:`json-code`},oO=iu(N({__name:`WithReteDemo`,setup(e){let t=j(),n=j(),r=j(),i=j(),a=j(null),o=un(null),s=j(``),c=j(!1),l=j(!1),u=Xt([]),d=new YT(30),f=0,p=j(null);Ir(()=>{o.value=xT({target:t.value,popupEl:n.value}),o.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),m(),$n(()=>{a.value=o.value?.state.popup??null}),window.__geoFlow=()=>o.value});function m(){let e=QT($T);u.splice(0,u.length,...e.nodes.map(e=>({...e}))),f=e.nodes.length,g(),_(),C()}function h(){return{version:`2.0.0`,name:`rete-canvas`,nodes:u.map(e=>({...e})),connections:[]}}function g(){d.push(h()),c.value=d.canUndo(),l.value=d.canRedo()}function _(){o.value&&(JT(o.value,h()),s.value=JSON.stringify(qT(h()),null,2))}let v=[{type:`basemap`,label:`底图`,params:{id:`basemap.osm`}},{type:`control`,label:`控件`,params:{id:`attribution`}},{type:`layer`,label:`图层`,params:{id:`layer-${++f}`,name:`新图层`,provider:{type:`raw`,config:{}},style:{mode:`single`,color:`#1976d2`,radius:7}}},{type:`map-output`,label:`输出`,params:{routeName:`graph`}}];function y(e,t,n){u.push({id:`n-${++f}`,type:e,label:t,params:{...n},position:{x:40+Math.random()*200,y:40+Math.random()*200}}),g(),C()}function b(e,t){p.value=t.id;let n=e.currentTarget,i=n.offsetParent||r.value,a=i.getBoundingClientRect(),o=n.getBoundingClientRect(),s={active:!0,sx:e.clientX,sy:e.clientY,bx:o.left-a.left,by:o.top-a.top};n.setPointerCapture?.(e.pointerId);let c=e=>{s.active&&(t.position.x=Math.max(0,s.bx+(e.clientX-s.sx)),t.position.y=Math.max(0,s.by+(e.clientY-s.sy)))},l=e=>{s.active=!1,n.releasePointerCapture?.(e.pointerId),i.removeEventListener(`pointermove`,c),i.removeEventListener(`pointerup`,l),g(),C()};i.addEventListener(`pointermove`,c),i.addEventListener(`pointerup`,l)}function x(){let e=d.undo();e&&(u.splice(0,u.length,...e.nodes.map(e=>({...e}))),_(),C(),c.value=d.canUndo(),l.value=d.canRedo())}function S(){let e=d.redo();e&&(u.splice(0,u.length,...e.nodes.map(e=>({...e}))),_(),C(),c.value=d.canUndo(),l.value=d.canRedo())}function C(){if(!i.value)return;i.value.innerHTML=``;let{svg:e}=ZT(u.map(e=>({id:e.id,x:e.position.x,y:e.position.y,w:130,h:48})),{x:0,y:0,w:600,h:400},{width:200,height:100});i.value.appendChild(e)}function w(e){let t=u.findIndex(t=>t.id===e);t>=0&&u.splice(t,1),g(),C()}return Br(()=>{o.value?.destroy(),o.value=null}),(e,d)=>(I(),L(`div`,zD,[d[3]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 10 · 可视化编排（rete 拖拽画布）`),R(`span`,{class:`app__hint`},`物料拖入 + 节点拖动 + 运行 runGraph + 导出 JSON 对照`)],-1),R(`div`,BD,[R(`div`,VD,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:o.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:o.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:o.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[a.value?(I(),L(`div`,HD,[R(`div`,UD,A(a.value.title),1),R(`div`,WD,[(I(!0),L(F,null,P(a.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,GD,A(e.label),1),R(`span`,KD,A(e.value),1)]))),128))])])):Aa(``,!0)],512)]),R(`aside`,qD,[d[0]||=R(`div`,{class:`cp__title`},`物料（点击添加）`,-1),R(`div`,JD,[(I(),L(F,null,P(v,(e,t)=>R(`button`,{key:t,class:`palette__btn`,onClick:t=>y(e.type,e.label,e.params)},`+ `+A(e.label),9,YD)),64))]),d[1]||=R(`div`,{class:`cp__title`},`画布（拖动节点）`,-1),R(`div`,{class:`canvas`,ref_key:`canvasEl`,ref:r},[(I(!0),L(F,null,P(u,e=>(I(),L(`div`,{key:e.id,class:Ce([`node`,{"node--sel":p.value===e.id}]),style:ve({left:e.position.x+`px`,top:e.position.y+`px`}),onPointerdown:t=>b(t,e)},[R(`div`,ZD,[R(`span`,QD,A(e.type),1),R(`span`,$D,A(e.label||e.id),1),R(`button`,{class:`node__del`,onClick:as(t=>w(e.id),[`stop`])},`×`,8,eO)]),R(`div`,tO,A(e.id),1)],46,XD))),128))],512),d[2]||=R(`div`,{class:`cp__title`},`MiniMap`,-1),R(`div`,{class:`minimap`,ref_key:`miniEl`,ref:i},null,512),R(`div`,nO,[R(`button`,{class:`ops__btn ops__btn--run`,onClick:_},`▶ 运行`),R(`button`,{class:`ops__btn`,onClick:m},`↺ 预设`),R(`button`,{class:`ops__btn`,disabled:!c.value,onClick:x},`↶ 撤销`,8,rO),R(`button`,{class:`ops__btn`,disabled:!l.value,onClick:S},`↷ 重做`,8,iO)])]),z(M(ET),{position:`bottom-right`,title:`导出 JSON（MapConfigJSON）`},{default:Kn(()=>[R(`pre`,aO,A(s.value),1)]),_:1})])]))}}),[[`__scopeId`,`data-v-ca91e316`]]),sO={class:`scp`},cO={class:`scp__seg`},lO=[`onClick`],uO={key:0,class:`scp__group`},dO={class:`scp__row`},fO={class:`scp__val`},pO={class:`scp__row`},mO={class:`scp__val`},hO={class:`scp__row`},gO={class:`scp__val`},_O={key:1,class:`scp__group`},vO={class:`scp__row`},yO=[`value`],bO={class:`scp__row`},xO=[`value`],SO={class:`scp__row`},CO={class:`scp__val`},wO={class:`scp__row`},TO={class:`scp__val`},EO={key:2,class:`scp__group`},DO={class:`scp__row`},OO=[`value`],kO={class:`scp__row`},AO=[`value`],jO={class:`scp__row`},MO=[`value`],NO={class:`scp__row`},PO=[`value`],FO={class:`scp__row`},IO={class:`scp__val`},LO={class:`scp__row`},RO={class:`scp__val`},zO={key:3,class:`scp__group`},BO={class:`scp__arr-head`},VO={class:`scp__arr-cnt`},HO={class:`scp__item-head`},UO={class:`scp__item-idx`},WO=[`onUpdate:modelValue`],GO=[`onClick`],KO={key:0,class:`scp__row`},qO=[`onUpdate:modelValue`],JO={class:`scp__val`},YO={class:`scp__row`},XO=[`onUpdate:modelValue`],ZO=[`value`],QO={class:`scp__row`},$O=[`onUpdate:modelValue`],ek=[`value`],tk={class:`scp__row`},nk=[`onUpdate:modelValue`],rk={class:`scp__val`},ik={class:`scp__row`},ak=[`onUpdate:modelValue`],ok={class:`scp__val`},sk={class:`scp__row`},ck=[`onUpdate:modelValue`],lk={class:`scp__val`},uk=iu(N({__name:`StyleConfigPanel`,props:{initialMode:{},position:{}},emits:[`apply`],setup(e,{emit:t}){let n=e,r=t,i=j(n.initialMode??`single`),a=no(()=>n.position??`top-right`),o=Array.from(new Set(mD.features.flatMap(e=>Object.keys(e.properties)))).map(e=>({label:e,value:e})),s=[{label:`semantic`,value:`semantic`},{label:`blue`,value:`blue`},{label:`green`,value:`green`},{label:`warm`,value:`warm`}],c=j(`#1976d2`),l=j(7),u=j(.85),d=j(`level`),f=j(`semantic`),p=j(7),m=j(.85),h=j([{mode:`single`,color:`#ffd166`,colorField:`level`,palette:`semantic`,radius:16,width:1.5,fillOpacity:.9},{mode:`single`,color:`#1976d2`,colorField:`level`,palette:`semantic`,radius:8,width:2,fillOpacity:.95}]),g=j(`level`),_=j(`risk`),v=j(`type`),y=j(`semantic`),b=j(6),x=j(`#ffd166`),S={高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`},C={alarm:`icon.alarm`,fault:`icon.fault`,warn:`icon.warn`,normal:`icon.ok`,info:`icon.info`};function w(){return h.value.map(e=>({mode:e.mode,color:e.mode===`categorical`?void 0:e.color,colorField:e.mode===`categorical`?e.colorField:void 0,palette:e.mode===`categorical`?e.palette:void 0,radius:e.radius,width:e.width,fillOpacity:e.fillOpacity}))}function T(){if(i.value===`styleArray`)return w();if(i.value===`single`)return{mode:`single`,color:c.value,radius:l.value,fillOpacity:u.value};if(i.value===`category`)return{mode:`categorical`,colorField:d.value,palette:f.value,radius:p.value,fillOpacity:m.value};let e=g.value,t=_.value,n=v.value,r=x.value,a=b.value;return{mode:`categorical`,colorField:e,palette:y.value,fillOpacity:.85,color:(t,n)=>n.$state===`normal`?S[String(t.get(e))]||`#4f8cff`:r,radius:e=>a+Number(e.get(t)||0)*10,icon:(e,t)=>t.$state===`normal`?C[String(e.get(n))]||`icon.info`:`icon.sel`}}er([i,c,l,u,d,f,p,m,g,_,v,y,b,x,h],()=>r(`apply`,T()),{immediate:!0,deep:!0});function E(){h.value.push({mode:`single`,color:`#22c55e`,colorField:`level`,palette:`semantic`,radius:4,width:1,fillOpacity:.6})}function D(e){h.value.length<=1||h.value.splice(e,1)}return(e,t)=>(I(),xa(M(ET),{position:a.value,title:`配图配置面板`},{default:Kn(()=>[R(`div`,sO,[R(`div`,cO,[(I(),L(F,null,P([`single`,`category`,`multiCategory`,`styleArray`],e=>R(`button`,{key:e,class:Ce({on:i.value===e}),onClick:t=>i.value=e},A(e===`single`?`single 统一`:e===`category`?`category 单字段`:e===`multiCategory`?`multiCategory 多字段`:`styleArray 配置数组`),11,lO)),64))]),i.value===`single`?(I(),L(`div`,uO,[R(`div`,dO,[t[13]||=R(`label`,null,`颜色 color`,-1),qn(R(`input`,{type:`color`,"onUpdate:modelValue":t[0]||=e=>c.value=e},null,512),[[Qo,c.value]]),R(`span`,fO,A(c.value),1)]),R(`div`,pO,[t[14]||=R(`label`,null,`半径 radius`,-1),qn(R(`input`,{type:`range`,min:`3`,max:`20`,step:`1`,"onUpdate:modelValue":t[1]||=e=>l.value=e},null,512),[[Qo,l.value,void 0,{number:!0}]]),R(`span`,mO,A(l.value),1)]),R(`div`,hO,[t[15]||=R(`label`,null,`透明度 fillOpacity`,-1),qn(R(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.05`,"onUpdate:modelValue":t[2]||=e=>u.value=e},null,512),[[Qo,u.value,void 0,{number:!0}]]),R(`span`,gO,A(u.value.toFixed(2)),1)]),t[16]||=R(`p`,{class:`scp__tip`},`所有要素同色同大小，返回单 Style。`,-1)])):Aa(``,!0),i.value===`category`?(I(),L(`div`,_O,[R(`div`,vO,[t[17]||=R(`label`,null,`分级字段`,-1),qn(R(`select`,{"onUpdate:modelValue":t[3]||=e=>d.value=e},[(I(!0),L(F,null,P(M(o),e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,yO))),128))],512),[[$o,d.value]])]),R(`div`,bO,[t[18]||=R(`label`,null,`色板 palette`,-1),qn(R(`select`,{"onUpdate:modelValue":t[4]||=e=>f.value=e},[(I(),L(F,null,P(s,e=>R(`option`,{key:e.value,value:e.value},A(e.label),9,xO)),64))],512),[[$o,f.value]])]),R(`div`,SO,[t[19]||=R(`label`,null,`半径 radius`,-1),qn(R(`input`,{type:`range`,min:`3`,max:`20`,step:`1`,"onUpdate:modelValue":t[5]||=e=>p.value=e},null,512),[[Qo,p.value,void 0,{number:!0}]]),R(`span`,CO,A(p.value),1)]),R(`div`,wO,[t[20]||=R(`label`,null,`透明度 fillOpacity`,-1),qn(R(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.05`,"onUpdate:modelValue":t[6]||=e=>m.value=e},null,512),[[Qo,m.value,void 0,{number:!0}]]),R(`span`,TO,A(m.value.toFixed(2)),1)]),t[21]||=R(`p`,{class:`scp__tip`},`按字段值分类配色（categorical + palette），返回单 Style。`,-1)])):Aa(``,!0),i.value===`multiCategory`?(I(),L(`div`,EO,[R(`div`,DO,[t[22]||=R(`label`,null,`底色字段`,-1),qn(R(`select`,{"onUpdate:modelValue":t[7]||=e=>g.value=e},[(I(!0),L(F,null,P(M(o),e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,OO))),128))],512),[[$o,g.value]])]),R(`div`,kO,[t[23]||=R(`label`,null,`大小字段`,-1),qn(R(`select`,{"onUpdate:modelValue":t[8]||=e=>_.value=e},[(I(!0),L(F,null,P(M(o),e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,AO))),128))],512),[[$o,_.value]])]),R(`div`,jO,[t[24]||=R(`label`,null,`图标字段`,-1),qn(R(`select`,{"onUpdate:modelValue":t[9]||=e=>v.value=e},[(I(!0),L(F,null,P(M(o),e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,MO))),128))],512),[[$o,v.value]])]),R(`div`,NO,[t[25]||=R(`label`,null,`色板 palette`,-1),qn(R(`select`,{"onUpdate:modelValue":t[10]||=e=>y.value=e},[(I(),L(F,null,P(s,e=>R(`option`,{key:e.value,value:e.value},A(e.label),9,PO)),64))],512),[[$o,y.value]])]),R(`div`,FO,[t[26]||=R(`label`,null,`基础半径`,-1),qn(R(`input`,{type:`range`,min:`3`,max:`14`,step:`1`,"onUpdate:modelValue":t[11]||=e=>b.value=e},null,512),[[Qo,b.value,void 0,{number:!0}]]),R(`span`,IO,A(b.value),1)]),R(`div`,LO,[t[27]||=R(`label`,null,`高亮色`,-1),qn(R(`input`,{type:`color`,"onUpdate:modelValue":t[12]||=e=>x.value=e},null,512),[[Qo,x.value]]),R(`span`,RO,A(x.value),1)]),t[28]||=R(`p`,{class:`scp__tip`},`底色←colorField · 大小←sizeField · icon←iconField，匿名函数驱动，返回 Style[]（光环→圆底→icon）。`,-1)])):Aa(``,!0),i.value===`styleArray`?(I(),L(`div`,zO,[R(`div`,BO,[R(`span`,VO,A(h.value.length)+` 项`,1),R(`button`,{class:`scp__add`,onClick:E},`+ 添加样式项`)]),(I(!0),L(F,null,P(h.value,(e,n)=>(I(),L(`div`,{key:n,class:`scp__item`},[R(`div`,HO,[R(`span`,UO,`项 `+A(n+1),1),qn(R(`select`,{"onUpdate:modelValue":t=>e.mode=t,class:`scp__item-mode`},[...t[29]||=[R(`option`,{value:`single`},`single`,-1),R(`option`,{value:`categorical`},`categorical`,-1)]],8,WO),[[$o,e.mode]]),h.value.length>1?(I(),L(`button`,{key:0,class:`scp__del`,onClick:e=>D(n)},`删除`,8,GO)):Aa(``,!0)]),e.mode===`single`?(I(),L(`div`,KO,[t[30]||=R(`label`,null,`颜色 color`,-1),qn(R(`input`,{type:`color`,"onUpdate:modelValue":t=>e.color=t},null,8,qO),[[Qo,e.color]]),R(`span`,JO,A(e.color),1)])):(I(),L(F,{key:1},[R(`div`,YO,[t[31]||=R(`label`,null,`分级字段`,-1),qn(R(`select`,{"onUpdate:modelValue":t=>e.colorField=t},[(I(!0),L(F,null,P(M(o),e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,ZO))),128))],8,XO),[[$o,e.colorField]])]),R(`div`,QO,[t[32]||=R(`label`,null,`色板`,-1),qn(R(`select`,{"onUpdate:modelValue":t=>e.palette=t},[(I(),L(F,null,P(s,e=>R(`option`,{key:e.value,value:e.value},A(e.label),9,ek)),64))],8,$O),[[$o,e.palette]])])],64)),R(`div`,tk,[t[33]||=R(`label`,null,`半径 radius`,-1),qn(R(`input`,{type:`range`,min:`2`,max:`24`,step:`1`,"onUpdate:modelValue":t=>e.radius=t},null,8,nk),[[Qo,e.radius,void 0,{number:!0}]]),R(`span`,rk,A(e.radius),1)]),R(`div`,ik,[t[34]||=R(`label`,null,`线宽 width`,-1),qn(R(`input`,{type:`range`,min:`0`,max:`8`,step:`0.5`,"onUpdate:modelValue":t=>e.width=t},null,8,ak),[[Qo,e.width,void 0,{number:!0}]]),R(`span`,ok,A(e.width),1)]),R(`div`,sk,[t[35]||=R(`label`,null,`透明度`,-1),qn(R(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.05`,"onUpdate:modelValue":t=>e.fillOpacity=t},null,8,ck),[[Qo,e.fillOpacity,void 0,{number:!0}]]),R(`span`,lk,A(e.fillOpacity.toFixed(2)),1)])]))),128)),t[36]||=R(`p`,{class:`scp__tip`},`style 直接给配置数组（object[]）：库逐项渲染并拍平为 Style[]，后项压在前项之上。典型用法：外圈光环 + 内圈实底。`,-1)])):Aa(``,!0)])]),_:1},8,[`position`]))}}),[[`__scopeId`,`data-v-e5f0c6cd`]]),dk={class:`app`},fk={class:`app__stage`},pk={key:0,class:`popup__card`},mk={class:`popup__title`},hk={class:`popup__rows`},gk={class:`popup__row-label`},_k={class:`popup__row-value`},vk=N({__name:`SingleStyleDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=j({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`single`,color:`#1976d2`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}});function o(e){let t=i.value?.engines?.get(`stations`);t&&(a.value={...a.value,style:e},t.updateConfig(a.value),t.restart())}return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(a.value),i.value.run(`style-single`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,dk,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.1 · 单值配图`),R(`span`,{class:`app__hint`},`所有要素同色同大小（single） · 右侧面板可即时编辑生效`)],-1),R(`div`,fk,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),z(uk,{"initial-mode":`single`,position:`top-right`,onApply:o}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,pk,[R(`div`,mk,A(r.value.title),1),R(`div`,hk,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,gk,A(e.label),1),R(`span`,_k,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),yk={class:`app`},bk={class:`app__stage`},xk={key:0,class:`popup__card`},Sk={class:`popup__title`},Ck={class:`popup__rows`},wk={class:`popup__row-label`},Tk={class:`popup__row-value`},Ek=N({__name:`CategoricalStyleDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=j({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}});function o(e){let t=i.value?.engines?.get(`stations`);t&&(a.value={...a.value,style:e},t.updateConfig(a.value),t.restart())}return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(a.value),i.value.run(`style-categorical`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,yk,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.2 · 分类配图`),R(`span`,{class:`app__hint`},`按字段分类配色（categorical + palette） · 右侧面板可切字段/色板即时生效`)],-1),R(`div`,bk,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),z(uk,{"initial-mode":`category`,position:`top-right`,onApply:o}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,xk,[R(`div`,Sk,A(r.value.title),1),R(`div`,Ck,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,wk,A(e.label),1),R(`span`,Tk,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),Dk={class:`app`},Ok={class:`app__stage`},kk={key:0,class:`popup__card`},Ak={class:`popup__title`},jk={class:`popup__rows`},Mk={class:`popup__row-label`},Nk={class:`popup__row-value`},Pk=N({__name:`ExpressionStyleDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null);return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:"${$feature.risk * 8 + 4}",fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`style-expression`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,Dk,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.3 · 表达式参数`),R(`span`,{class:`app__hint`},[R(`code`,null,"radius: '${'$'}feature.risk * 8 + 4'"),ka(` 表达式串`)])],-1),R(`div`,Ok,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,kk,[R(`div`,Ak,A(r.value.title),1),R(`div`,jk,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Mk,A(e.label),1),R(`span`,Nk,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),Fk={class:`app`},Ik={class:`app__stage`},Lk={key:0,class:`popup__card`},Rk={class:`popup__title`},zk={class:`popup__rows`},Bk={class:`popup__row-label`},Vk={class:`popup__row-value`},Hk=N({__name:`FunctionStyleDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null);return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:e=>6+e.get(`risk`)*10,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`style-function`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,Fk,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.4 · 函数参数`),R(`span`,{class:`app__hint`},[R(`code`,null,`radius: (f) => 6 + f.get('risk') * 10`),ka(` 匿名函数`)])],-1),R(`div`,Ik,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,Lk,[R(`div`,Rk,A(r.value.title),1),R(`div`,zk,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Bk,A(e.label),1),R(`span`,Vk,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),Uk={class:`app`},Wk={class:`app__stage`},Gk={key:0,class:`popup__card`},Kk={class:`popup__title`},qk={class:`popup__rows`},Jk={class:`popup__row-label`},Yk={class:`popup__row-value`},Xk=N({__name:`MultiAttrStyleDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=j({id:`stations`,name:`监测站（多字段配图）`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,fillOpacity:.85,color:(e,t)=>t.$state===`normal`?{高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`}[String(e.get(`level`))]||`#4f8cff`:`#ffd166`,radius:e=>6+Number(e.get(`risk`)||0)*10,icon:(e,t)=>t.$state===`normal`?{alarm:`icon.alarm`,fault:`icon.fault`,warn:`icon.warn`,normal:`icon.ok`,info:`icon.info`}[String(e.get(`type`))]||`icon.info`:`icon.sel`},popup:{titleField:`name`,contentFields:[`name`,`type`,`level`,`risk`]},interaction:{highlight:{trigger:`hover`,color:`#ffd166`},cursor:!0}});function o(e){let t=i.value?.engines?.get(`stations`);t&&(a.value={...a.value,style:e},t.updateConfig(a.value),t.restart())}return Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(a.value),i.value.run(`style-multi`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,Uk,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.5 · 多字段控制样式（最复杂）`),R(`span`,{class:`app__hint`},`底色←level · 大小←risk · icon←type · 高亮三联动 · 右侧面板可切三字段即时生效`)],-1),R(`div`,Wk,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),z(uk,{"initial-mode":`multiCategory`,position:`top-right`,onApply:o}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,Gk,[R(`div`,Kk,A(r.value.title),1),R(`div`,qk,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Jk,A(e.label),1),R(`span`,Yk,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),Zk={class:`app`},Qk={class:`app__stage`},$k={class:`panel`},eA={class:`panel__seg`},tA=[`onClick`],nA={class:`panel__code`},rA={class:`panel__no`},iA={class:`panel__txt`},aA={key:0,class:`popup__card`},oA={class:`popup__title`},sA={class:`popup__rows`},cA={class:`popup__row-label`},lA={class:`popup__row-value`},uA=iu(N({__name:`StageBuilderDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=CT().fill({color:`#2563eb`,opacity:.5}).stroke({color:`#1e3a8a`,width:2}).circle({radius:9,color:`#2563eb`,opacity:.85,strokeColor:`#fff`,strokeWidth:2}).text({field:`name`,font:`600 12px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:-18}).toJSON(),o=CT().circle({radius:12,color:`#f59e0b`,opacity:.4,strokeColor:`#f59e0b`,strokeWidth:2}).icon({src:`icon.alarm`,scale:1,opacity:1}).text({field:`name`,font:`500 11px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:-20}).toJSON(),s=CT().circle({radius:7,strokeColor:`#fff`,strokeWidth:1.5}).text({field:`name`,font:`500 11px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:2,offsetY:-16,show:"${$feature.risk > 0.6}"}).rule({id:`r-level`,mode:`categorical`,priority:10,field:`level`,categories:{高:{color:`#ef4444`},中:{color:`#f59e0b`},低:{color:`#22c55e`}},fallback:{color:`#64748b`}}).rule({id:`r-risk`,mode:`continuous`,priority:5,field:`risk`,ranges:[{min:.8,max:1,style:{radius:12}},{min:.5,max:.8,style:{radius:9}},{min:0,max:.5,style:{radius:6}}]}).toJSON(),c=[CT().circle({radius:18,color:`#ffd166`,opacity:.35,strokeColor:`#ffd166`,strokeWidth:1}).toJSON(),CT().circle({radius:8,color:`#1976d2`,opacity:.95,strokeColor:`#fff`,strokeWidth:2}).icon({src:`icon.alarm`,scale:.8}).text({field:`name`,font:`600 11px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:-20}).toJSON()],l=[{key:`stage`,label:`分阶段基础`,style:a,code:`createStyle()
  .fill({ color: '#2563eb', opacity: 0.5 })
  .stroke({ color: '#1e3a8a', width: 2 })
  .circle({ radius: 9, color: '#2563eb',
    strokeColor: '#fff', strokeWidth: 2 })
  .text({ field: 'name', color: '#fff',
    offsetY: -18 })
  .toJSON()`},{key:`icon`,label:`icon + text 叠放`,style:o,code:`createStyle()
  .circle({ radius: 12, color: '#f59e0b', opacity: 0.4 })
  .icon({ src: 'icon.alarm', scale: 1.0 })
  .text({ field: 'name', offsetY: -20 })
  .toJSON()`},{key:`rule`,label:`规则引擎（level+risk）`,style:s,code:`createStyle()
  .circle({ radius: 7, strokeColor: '#fff' })
  .text({ field: 'name',
    show: '\${$feature.risk > 0.6}' })
  .rule({
    id: 'r-level', mode: 'categorical',
    priority: 10, field: 'level',
    categories: {
      高: { color: '#ef4444' },
      中: { color: '#f59e0b' },
      低: { color: '#22c55e' }
    }
  })
  .rule({
    id: 'r-risk', mode: 'continuous',
    priority: 5, field: 'risk',
    ranges: [
      { min: 0.8, max: 1.0, style: { radius: 12 } },
      { min: 0.5, max: 0.8, style: { radius: 9 } },
      { min: 0, max: 0.5, style: { radius: 6 } }
    ]
  })
  .toJSON()`},{key:`array`,label:`配置数组（外圈+内圈+icon+text）`,style:c,code:`// StyleConfigInput = StyleConfigJSON[]
[
  createStyle()
    .circle({ radius: 18, color: '#ffd166',
      opacity: 0.35 })
    .toJSON(),
  createStyle()
    .circle({ radius: 8, color: '#1976d2' })
    .icon({ src: 'icon.alarm', scale: 0.8 })
    .text({ field: 'name' })
    .toJSON()
]`}],u=j(l[0]),d=j({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:u.value.style,popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}});function f(e){u.value=e,d.value={...d.value,style:e.style};let t=i.value?.engines?.get(`stations`);t&&(t.updateConfig(d.value),t.restart())}Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(d.value),i.value.run(`style-stage`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null});let p=no(()=>u.value.code.split(`
`));return(e,a)=>(I(),L(`div`,Zk,[a[3]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.6 · 分阶段链式 StyleBuilder + 规则引擎`),R(`span`,{class:`app__hint`},`fill / stroke / circle / icon / text / rule 阶段化链式 · 底层走 styles 工厂`)],-1),R(`div`,Qk,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),R(`div`,$k,[R(`div`,eA,[(I(),L(F,null,P(l,e=>R(`button`,{key:e.key,class:Ce({on:u.value.key===e.key}),onClick:t=>f(e)},A(e.label),11,tA)),64))]),a[1]||=R(`div`,{class:`panel__code-head`},`builder 链式代码`,-1),R(`pre`,nA,[R(`code`,null,[(I(!0),L(F,null,P(p.value,(e,t)=>(I(),L(`span`,{key:t,class:`panel__ln`},[R(`span`,rA,A(t+1),1),R(`span`,iA,A(e||` `),1),a[0]||=ka(`
`,-1)]))),128))])]),a[2]||=R(`p`,{class:`panel__tip`},`切换方案即时生效。规则引擎方案：level 决定颜色、risk 决定半径；text.show 用表达式控制只在高风险站显示标注。`,-1)]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,aA,[R(`div`,oA,A(r.value.title),1),R(`div`,sA,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,cA,A(e.label),1),R(`span`,lA,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-0e26bbed`]]),dA={class:`app`},fA={class:`app__bar`},pA={class:`app__title`},mA={class:`app__hint`},hA={class:`app__stage`},gA={class:`ep`},_A={class:`ep__label`},vA=[`onUpdate:modelValue`],yA=[`min`,`max`,`step`,`onUpdate:modelValue`],bA=[`onUpdate:modelValue`],xA=[`value`],SA={key:3,class:`ep__val`},CA={class:`ep__row`},wA={key:0,class:`popup__card`},TA={class:`popup__title`},EA={class:`popup__rows`},DA={class:`popup__row-label`},OA={class:`popup__row-value`},kA=iu(N({__name:`EffectPlayground`,props:{effectName:{},title:{},hint:{},params:{},schema:{}},setup(e){let t=e,n=j(),r=j(),i=j(null),a=un(null),o=null,s=Xt({...t.params}),c=j(`all`),l={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{a.value=xT({target:n.value,popupEl:r.value}),a.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),o=a.value.layer({...l,effects:u()}),a.value.run(`effect`,{}),$n(()=>{i.value=a.value?.state.popup??null})});function u(){let e={...s};return c.value===`risk`?e.condition=e=>e.get(`risk`)>.7:c.value===`level`&&(e.conditionField=`level`,e.conditionValue=`高`),[Mu(t.effectName,e)]}function d(){o&&(o.updateConfig({...l,effects:u()}),o.restart())}return Br(()=>{a.value?.destroy(),a.value=null}),(t,o)=>(I(),L(`div`,dA,[R(`header`,fA,[R(`span`,pA,A(e.title),1),R(`span`,mA,A(e.hint||`调参 + condition 函数条件 + 子集生效`),1)]),R(`div`,hA,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:n},null,512),z(M(OT),{engine:a.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:a.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:a.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:e.title+` 参数`},{default:Kn(()=>[R(`div`,gA,[(I(!0),L(F,null,P(e.schema,e=>(I(),L(`div`,{key:e.key,class:`ep__row`},[R(`label`,_A,A(e.label),1),e.type===`color`?qn((I(),L(`input`,{key:0,type:`color`,class:`ep__color`,"onUpdate:modelValue":t=>s[e.key]=t},null,8,vA)),[[Qo,s[e.key]]]):e.type===`range`?qn((I(),L(`input`,{key:1,type:`range`,class:`ep__range`,min:e.min,max:e.max,step:e.step,"onUpdate:modelValue":t=>s[e.key]=t},null,8,yA)),[[Qo,s[e.key],void 0,{number:!0}]]):qn((I(),L(`select`,{key:2,class:`ep__select`,"onUpdate:modelValue":t=>s[e.key]=t},[(I(!0),L(F,null,P(e.options,e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,xA))),128))],8,bA)),[[$o,s[e.key]]]),e.type===`range`?(I(),L(`span`,SA,A(s[e.key]),1)):Aa(``,!0)]))),128)),R(`div`,CA,[o[2]||=R(`label`,{class:`ep__label`},`条件`,-1),qn(R(`select`,{class:`ep__select`,"onUpdate:modelValue":o[0]||=e=>c.value=e},[...o[1]||=[R(`option`,{value:`all`},`全部要素`,-1),R(`option`,{value:`risk`},`risk>0.7（函数）`,-1),R(`option`,{value:`level`},`level=高（字段）`,-1)]],512),[[$o,c.value]])]),R(`button`,{class:`ep__btn`,onClick:d},`应用（updateConfig + restart）`)])]),_:1},8,[`title`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:r},[i.value?(I(),L(`div`,wA,[R(`div`,TA,A(i.value.title),1),R(`div`,EA,[(I(!0),L(F,null,P(i.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,DA,A(e.label),1),R(`span`,OA,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-5529b20e`]]),AA=N({__name:`RipplePlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:1e3,max:5e3,step:200},{key:`rings`,label:`环数`,type:`range`,min:1,max:6,step:1}];return(e,n)=>(I(),xa(kA,{"effect-name":`ripple`,title:`效果 3.1 · 涟漪 ripple`,params:{color:`#ff5c5c`,period:3e3,rings:3},schema:t}))}}),jA=N({__name:`PulsePlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:600,max:2400,step:100},{key:`jumpPx`,label:`跳起`,type:`range`,min:6,max:40,step:1},{key:`pointRadius`,label:`点半径`,type:`range`,min:4,max:12,step:1}];return(e,n)=>(I(),xa(kA,{"effect-name":`pulse`,title:`效果 3.2 · 点跳跃 pulse`,params:{color:`#ffd666`,period:1200,jumpPx:18,pointRadius:7},schema:t}))}}),MA=N({__name:`WavePlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:800,max:2400,step:200},{key:`rings`,label:`环数`,type:`range`,min:1,max:5,step:1}];return(e,n)=>(I(),xa(kA,{"effect-name":`wave`,title:`效果 3.3 · 涟漪 wave`,params:{color:`#36cbcb`,period:1800,rings:3},schema:t}))}}),NA=N({__name:`BreathingPlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:800,max:3200,step:200}];return(e,n)=>(I(),xa(kA,{"effect-name":`breathing`,title:`效果 3.4 · 呼吸灯 breathing`,params:{color:`#4f8cff`,period:1600},schema:t}))}}),PA={class:`app`},FA={class:`app__stage`},IA={class:`cp`},LA={class:`cp__row`},RA={class:`cp__row`},zA={class:`cp__state`},BA={class:`cp__btns`},VA={class:`cp__btns`},HA=[`onClick`],UA={class:`gf-popups`},WA={class:`gf-popups__svg`},GA=[`d`],KA={class:`gf-card__head`},qA=iu(N({__name:`CarouselPlayground`,setup(e){let t=j(),n=un(null),r=null,i=j(1500),a=j(`idle`),o=j(-1),s=null,c=j(`bezier`),l=j([]),u=j([]);function d(){let e=dT.list(),t=[],n=[];for(let r of e){let e=dT.getLayout(r.id);if(!e)continue;let i=r.content?.rows??[];t.push({id:r.id,title:r.content?.title??r.id,rows:i,anchor:r.anchorScreen,offset:e.offset}),n.push({id:r.id,d:uT.toPath({start:r.anchorScreen,end:e.leaderEnd},{style:c.value,color:`#f59e0b`,width:1.8,arrow:!0})})}l.value=t,u.value=n}function f(){let e=new Map;for(let t of dT.list()){let r=t.feature?.geometry;if(!r)continue;let i=n.value?.map.getPixelFromCoordinate(hp(r.coordinates));i&&e.set(t.id,[i[0],i[1]])}e.size&&dT.updateAnchors(e),d()}function p(e){let t=e.geometry?.coordinates??[],r=n.value?.map.getPixelFromCoordinate(hp(t));dT.open({id:`card-`+e.properties.id,feature:e,anchorScreen:r?[r[0],r[1]]:[0,0],size:{width:200,height:96},content:{title:String(e.properties.name??`详情`),rows:[{label:`等级`,value:String(e.properties.level??`—`)},{label:`风险`,value:Number(e.properties.risk).toFixed(2)},{label:`类型`,value:String(e.properties.type??`—`)}]}}),d()}function m(e){dT.close(`card-`+e.properties.id),d()}let h={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};function g(){return[Mu(`carousel`,{interval:i.value,autoStart:!0,pauseOnHover:!1,pauseOnUserInteract:!1,onEnter:p,onLeave:m})]}let _=null,v=null;Ir(()=>{n.value=xT({target:t.value}),n.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),r=n.value.layer({...h,effects:g()}),n.value.run(`carousel`,{}),_=setInterval(()=>{let e=(n.value?.engines.get(`stations`)?.layer)?.get?.(`carouselController`);e&&(s=e,_&&=(clearInterval(_),null),s.state===`idle`&&s.start(),v=setInterval(()=>{a.value=s.state,o.value=s.currentIndex},200))},100),dT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),dT.on(d);let e=n.value.map.getView();n.value.map.on(`pointerdrag`,b),e.on(`change:resolution`,b),n.value.map.on(`moveend`,f),n.value.map.on(`resize`,f)});let y=null;function b(){y??=requestAnimationFrame(()=>{y=null,f()})}function x(){r&&(r.updateConfig({...h,effects:g()}),r.restart())}function S(e){s?.[e]?.()}function C(e){s?.goto?.(e)}function w(){d()}return Br(()=>{_&&=(clearInterval(_),null),v&&=(clearInterval(v),null),dT.list().map(e=>e.id).forEach(e=>dT.close(e)),n.value?.destroy(),n.value=null}),(e,r)=>(I(),L(`div`,PA,[r[9]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`效果 3.5 · 轮播 carousel playground`),R(`span`,{class:`app__hint`},`自动轮播高亮 + popup 跟随 + 贝塞尔引线 · interval/控制器/引线风格可调`)],-1),R(`div`,FA,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:n.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:n.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:n.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`carousel 控制`},{default:Kn(()=>[R(`div`,IA,[R(`div`,LA,[r[6]||=R(`label`,null,`interval`,-1),qn(R(`input`,{type:`range`,min:`500`,max:`4000`,step:`100`,"onUpdate:modelValue":r[0]||=e=>i.value=e},null,512),[[Qo,i.value,void 0,{number:!0}]]),R(`span`,null,A(i.value)+`ms`,1)]),R(`div`,RA,[r[8]||=R(`label`,null,`引线风格`,-1),qn(R(`select`,{"onUpdate:modelValue":r[1]||=e=>c.value=e,onChange:w},[...r[7]||=[R(`option`,{value:`bezier`},`贝塞尔曲线`,-1),R(`option`,{value:`polyline`},`折线（斜出+横竖到达）`,-1),R(`option`,{value:`straight`},`直线`,-1)]],544),[[$o,c.value]])]),R(`div`,zA,`状态：`+A(a.value)+` · 当前：`+A(o.value),1),R(`div`,BA,[R(`button`,{onClick:r[2]||=e=>S(`start`)},`start`),R(`button`,{onClick:r[3]||=e=>S(`pause`)},`pause`),R(`button`,{onClick:r[4]||=e=>S(`resume`)},`resume`),R(`button`,{onClick:r[5]||=e=>S(`stop`)},`stop`)]),R(`div`,VA,[(I(),L(F,null,P(8,e=>R(`button`,{key:e,onClick:t=>C(e-1)},`goto`+A(e),9,HA)),64))]),R(`button`,{class:`cp__apply`,onClick:x},`应用 interval（restart）`)])]),_:1}),R(`div`,UA,[(I(),L(`svg`,WA,[(I(!0),L(F,null,P(u.value,e=>(I(),L(`path`,{key:e.id,d:e.d},null,8,GA))),128))])),(I(!0),L(F,null,P(l.value,e=>(I(),L(`div`,{key:e.id,class:`gf-card`,style:ve({transform:`translate(${e.offset.x}px, ${e.offset.y}px)`})},[R(`div`,KA,A(e.title),1),(I(!0),L(F,null,P(e.rows,(e,t)=>(I(),L(`div`,{key:t,class:`gf-card__row`},[R(`span`,null,A(e.label),1),R(`b`,null,A(e.value),1)]))),128))],4))),128))])])]))}}),[[`__scopeId`,`data-v-bc26fde9`]]),JA={class:`app`},YA={class:`app__stage`},XA={class:`cp`},ZA={class:`cp__row`},QA={class:`cp__row`},$A={key:0,class:`popup__card`},ej={class:`popup__title`},tj={class:`popup__rows`},nj={class:`popup__row-label`},rj={class:`popup__row-value`},ij=iu(N({__name:`CustomEffectPlayground`,setup(e){ku({name:`glow`,symbol:Symbol.for(`effect.glow`),stage:`postrender`,meta:{label:`光晕`,icon:`✨`,desc:`自定义节律光晕环`,category:`effect`},defaults:{color:`#a855f7`,period:2e3},attach(e,t){return Kg(e,t.period,({vector:n,t:r})=>{let i=e.source.getFeatures();if(!i.length)return!1;let a=.5+.5*Math.sin(r*Math.PI*2);return i.forEach(e=>{let r=e.getGeometry().getCoordinates();n.setStyle(new Uh({fill:new Rh({color:qg(t.color,.12+.28*a)})})),n.drawGeometry(new Cg(r,280+120*a))}),!0})}});let t=j(),n=j(),r=j(null),i=un(null),a=null,o=j(`#a855f7`),s=j(2e3),c={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:mD}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({...c,effects:[Mu(`glow`,{color:o.value,period:s.value})]}),i.value.run(`custom-effect`,{}),$n(()=>{r.value=i.value?.state.popup??null})});function l(){a&&(a.updateConfig({...c,effects:[Mu(`glow`,{color:o.value,period:s.value})]}),a.restart())}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,JA,[a[4]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`效果 3.6 · 自定义效果 glow`),R(`span`,{class:`app__hint`},[R(`code`,null,`defineEffect`),ka(` 注册 + `),R(`code`,null,`useEffect('glow')`),ka(` 接入`)])],-1),R(`div`,YA,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`glow 参数`},{default:Kn(()=>[R(`div`,XA,[R(`div`,ZA,[a[2]||=R(`label`,null,`颜色`,-1),qn(R(`input`,{type:`color`,"onUpdate:modelValue":a[0]||=e=>o.value=e},null,512),[[Qo,o.value]])]),R(`div`,QA,[a[3]||=R(`label`,null,`周期`,-1),qn(R(`input`,{type:`range`,min:`800`,max:`4000`,step:`200`,"onUpdate:modelValue":a[1]||=e=>s.value=e},null,512),[[Qo,s.value,void 0,{number:!0}]]),R(`span`,null,A(s.value)+`ms`,1)]),R(`button`,{class:`cp__apply`,onClick:l},`应用`)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,$A,[R(`div`,ej,A(r.value.title),1),R(`div`,tj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,nj,A(e.label),1),R(`span`,rj,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-e601a211`]]),aj={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港`,level:`高`,risk:.92}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂`,level:`中`,risk:.65}}]},oj={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武`,level:`低`,risk:.38}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.43,25.02]},properties:{id:`s4`,name:`洛阳桥`,level:`中`,risk:.55}}]},sj={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾`,level:`中`,risk:.78}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港`,level:`低`,risk:.21}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰`,level:`高`,risk:.88}}]},cj={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.5,25.1]},properties:{id:`x1`,name:`北部站A`,level:`高`,risk:.85}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.54,25.12]},properties:{id:`x2`,name:`北部站B`,level:`中`,risk:.5}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,25.09]},properties:{id:`x3`,name:`北部站C`,level:`低`,risk:.3}}]},lj={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.45,24.88]},properties:{id:`y1`,name:`南部站A`,level:`高`,risk:.9}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.6,24.86]},properties:{id:`y2`,name:`南部站B`,level:`中`,risk:.6}}]},uj=[{id:`initial`,label:`初始数据集`,data:aj},{id:`X`,label:`数据集 X（北部）`,data:cj},{id:`Y`,label:`数据集 Y（南部）`,data:lj}],dj={class:`app`},fj={class:`app__bar`},pj={class:`app__hint`},mj={class:`app__stage`},hj={class:`ld`},gj={class:`ld__count`},_j={key:0,class:`popup__card`},vj={class:`popup__title`},yj={class:`popup__rows`},bj={class:`popup__row-label`},xj={class:`popup__row-value`},Sj=iu(N({__name:`AppendDataDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=null,o=no(()=>aT.get(`stations`)?.featureCount??0);Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:aj}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`append`,{}),$n(()=>{r.value=i.value?.state.popup??null})});function s(e){a?.appendData(e)}function c(){a?.clearData()}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,dj,[R(`header`,fj,[a[2]||=R(`span`,{class:`app__title`},`基础图层 4.1 · appendData 增量追加`,-1),R(`span`,pj,`按钮追加批次，不清空现有 · 当前 `+A(o.value)+` 个`,1)]),R(`div`,mj,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`appendData`},{default:Kn(()=>[R(`div`,hj,[R(`button`,{class:`ld__btn`,onClick:a[0]||=e=>s(M(oj))},`追加批次 A（2 个）`),R(`button`,{class:`ld__btn`,onClick:a[1]||=e=>s(M(sj))},`追加批次 B（3 个）`),R(`button`,{class:`ld__btn ld__btn--warn`,onClick:c},`clearData 清空`),R(`div`,gj,`当前要素数：`+A(o.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,_j,[R(`div`,vj,A(r.value.title),1),R(`div`,yj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,bj,A(e.label),1),R(`span`,xj,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-a960afcf`]]),Cj={class:`app`},wj={class:`app__bar`},Tj={class:`app__hint`},Ej={class:`app__stage`},Dj={class:`ld`},Oj={class:`ld__count`},kj={key:0,class:`popup__card`},Aj={class:`popup__title`},jj={class:`popup__rows`},Mj={class:`popup__row-label`},Nj={class:`popup__row-value`},Pj=iu(N({__name:`UpdateDataDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=null,o=no(()=>aT.get(`stations`)?.featureCount??0),s=j(`initial`);Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:aj}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`update`,{}),$n(()=>{r.value=i.value?.state.popup??null})});function c(e){let t=e===`initial`?aj:e===`X`?cj:lj;a?.updateData(t),s.value=e}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,Cj,[R(`header`,wj,[a[3]||=R(`span`,{class:`app__title`},`基础图层 4.2 · updateData 全量更新`,-1),R(`span`,Tj,`切换数据集 · 当前 `+A(s.value)+` / `+A(o.value)+` 个`,1)]),R(`div`,Ej,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`updateData`},{default:Kn(()=>[R(`div`,Dj,[R(`button`,{class:Ce([`ld__btn`,{"ld__btn--active":s.value===`initial`}]),onClick:a[0]||=e=>c(`initial`)},`初始数据集`,2),R(`button`,{class:Ce([`ld__btn`,{"ld__btn--active":s.value===`X`}]),onClick:a[1]||=e=>c(`X`)},`数据集 X（北部）`,2),R(`button`,{class:Ce([`ld__btn`,{"ld__btn--active":s.value===`Y`}]),onClick:a[2]||=e=>c(`Y`)},`数据集 Y（南部）`,2),R(`div`,Oj,`当前要素数：`+A(o.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,kj,[R(`div`,Aj,A(r.value.title),1),R(`div`,jj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Mj,A(e.label),1),R(`span`,Nj,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-66f2f7de`]]),Fj={class:`app`},Ij={class:`app__bar`},Lj={class:`app__hint`},Rj={class:`app__stage`},zj={class:`ld`},Bj=[`disabled`],Vj=[`disabled`],Hj={class:`ld__count`},Uj={key:0,class:`popup__card`},Wj={class:`popup__title`},Gj={class:`popup__rows`},Kj={class:`popup__row-label`},qj={class:`popup__row-value`},Jj=iu(N({__name:`RestoreDataDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=null,o=no(()=>aT.get(`stations`)?.featureCount??0),s=j(!0);Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:aj}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`restore`,{}),a?.snapshotOriginal(),$n(()=>{r.value=i.value?.state.popup??null})});function c(){a?.updateData(cj,{keepOriginal:!0}),s.value=!1}function l(){a?.restoreOriginal(),s.value=!0}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,Fj,[R(`header`,Ij,[a[0]||=R(`span`,{class:`app__title`},`基础图层 4.3 · keepOriginal + restoreOriginal`,-1),R(`span`,Lj,`updateData(新,keepOriginal) → restoreOriginal 恢复初始 · `+A(o.value)+` 个`,1)]),R(`div`,Rj,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`keepOriginal / restore`},{default:Kn(()=>[R(`div`,zj,[R(`button`,{class:`ld__btn`,disabled:!s.value,onClick:c},`updateData(X, keepOriginal)`,8,Bj),R(`button`,{class:`ld__btn ld__btn--warn`,disabled:s.value,onClick:l},`restoreOriginal`,8,Vj),R(`div`,Hj,`状态：`+A(s.value?`初始`:`已替换`)+` · `+A(o.value)+` 个`,1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,Uj,[R(`div`,Wj,A(r.value.title),1),R(`div`,Gj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Kj,A(e.label),1),R(`span`,qj,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-f9d5651f`]]),Yj={class:`app`},Xj={class:`app__bar`},Zj={class:`app__hint`},Qj={class:`app__stage`},$j={class:`ld`},eM=[`value`],tM={class:`ld__row`},nM={class:`ld__count`},rM={key:0,class:`popup__card`},iM={class:`popup__title`},aM={class:`popup__rows`},oM={class:`popup__row-label`},sM={class:`popup__row-value`},cM=iu(N({__name:`MultiDatasetDemo`,setup(e){let t=j(),n=j(),r=j(null),i=un(null),a=null,o=no(()=>aT.get(`stations`)?.featureCount??0);Ir(()=>{i.value=xT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:aj}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`layer-playground`,{}),a?.snapshotOriginal(),$n(()=>{r.value=i.value?.state.popup??null})});function s(e){let t=e.target.value,n=uj.find(e=>e.id===t);n&&a?.updateData(n.data,{keepOriginal:!0})}function c(e){a?.appendData(e)}function l(){a?.restoreOriginal()}function u(){a?.clearData()}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,Yj,[R(`header`,Xj,[a[2]||=R(`span`,{class:`app__title`},`基础图层 4.4 · 综合数据操作`,-1),R(`span`,Zj,`append / update(keepOriginal) / restore / clear 一站式 · `+A(o.value)+` 个`,1)]),R(`div`,Qj,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`数据操作`},{default:Kn(()=>[R(`div`,$j,[a[4]||=R(`label`,{class:`ld__lbl`},`updateData（keepOriginal）`,-1),R(`select`,{class:`ld__sel`,onChange:s},[a[3]||=R(`option`,{value:``},`— 选择数据集 —`,-1),(I(!0),L(F,null,P(M(uj),e=>(I(),L(`option`,{key:e.id,value:e.id},A(e.label),9,eM))),128))],32),a[5]||=R(`label`,{class:`ld__lbl`},`appendData`,-1),R(`div`,tM,[R(`button`,{class:`ld__btn`,onClick:a[0]||=e=>c(M(oj))},`+ 批次 A`),R(`button`,{class:`ld__btn`,onClick:a[1]||=e=>c(M(sj))},`+ 批次 B`)]),R(`div`,{class:`ld__row`},[R(`button`,{class:`ld__btn ld__btn--warn`,onClick:l},`restoreOriginal`),R(`button`,{class:`ld__btn ld__btn--warn`,onClick:u},`clearData`)]),R(`div`,nM,`当前要素数：`+A(o.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,rM,[R(`div`,iM,A(r.value.title),1),R(`div`,aM,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,oM,A(e.label),1),R(`span`,sM,A(e.value),1)]))),128))])])):Aa(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-004a1252`]]),lM={class:`app`},uM={class:`app__stage`},dM={class:`ev`},fM={class:`ev__group`},pM={class:`ev__seg`},mM={class:`ev__group`},hM={class:`ev__group`},gM={class:`ev__seg`},_M={class:`ev__stat`},vM={class:`ev__snap`},yM=iu(N({__name:`EnvInjectionDemo`,setup(e){let t=j(),n=un(null),r=null,i=0,a=Xt({theme:`light`,riskThreshold:0,scope:`all`}),o=j({}),s=j(0),c={高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`},l={高:`#f87171`,中:`#fbbf24`,低:`#4ade80`};function u(){n.value?.env.set(`theme`,a.theme),n.value?.env.set(`riskThreshold`,a.riskThreshold),n.value?.env.set(`scope`,a.scope),d()}function d(){o.value={...n.value?.env.snapshot()}}let f={id:`stations`,name:`监测站（env 驱动）`,zIndex:10,provider:{type:`raw`,config:{data:mD}},processors:[{inline:`(payload, ctx) => { const e = (ctx && ctx.env) || {}; const thr = Number(e.riskThreshold || 0); const scope = e.scope || "all"; const feats = payload.features.filter(f => { const r = Number(f.properties.risk); if (r < thr) return false; if (scope === "alarm" && f.properties.type !== "alarm") return false; return true; }); return { datasetId: payload.datasetId, geometryType: payload.geometryType, features: feats, fields: payload.fields }; }`}],style:{mode:`categorical`,colorField:`level`,palette:`semantic`,color:(e,t)=>(t.$env?.theme===`dark`?l:c)[String(e.get(`level`))]||`#4f8cff`,radius:(e,t)=>{let n=t.$env?.theme===`dark`?.85:1;return(6+Number(e.get(`risk`)||0)*10)*n},fillOpacity:.85}};Ir(()=>{n.value=xT({target:t.value}),n.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),u(),r=n.value.layer(f),n.value.run(`env-injection`,{}),r.subscribeEnv([`theme`,`riskThreshold`,`scope`]),i=window.setInterval(()=>{s.value=r?.source.getFeatures().length??0},300)});function p(e){a.theme=e,u()}function m(e){a.scope=e,u()}return Br(()=>{i&&window.clearInterval(i),n.value?.destroy(),n.value=null}),(e,r)=>(I(),L(`div`,lM,[r[11]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 外部环境注入响应式`),R(`span`,{class:`app__hint`},`engine.env 注入 → layer.subscribeEnv 重跑 → 数据/样式实时响应`)],-1),R(`div`,uM,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(OT),{engine:n.value,position:`top-right`},null,8,[`engine`]),z(M(kT),{engine:n.value,position:`top-left`},null,8,[`engine`]),z(M(AT),{engine:n.value,position:`bottom-left`},null,8,[`engine`]),z(M(ET),{position:`bottom-right`,title:`env 注入控制`},{default:Kn(()=>[R(`div`,dM,[R(`div`,fM,[r[5]||=R(`label`,null,`主题 theme`,-1),R(`div`,pM,[R(`button`,{class:Ce({on:a.theme===`light`}),onClick:r[0]||=e=>p(`light`)},`light`,2),R(`button`,{class:Ce({on:a.theme===`dark`}),onClick:r[1]||=e=>p(`dark`)},`dark`,2)])]),R(`div`,mM,[r[6]||=R(`label`,null,`风险阈值 riskThreshold`,-1),qn(R(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,"onUpdate:modelValue":r[2]||=e=>a.riskThreshold=e,onInput:u},null,544),[[Qo,a.riskThreshold,void 0,{number:!0}]]),R(`span`,null,A(a.riskThreshold.toFixed(2)),1)]),R(`div`,hM,[r[7]||=R(`label`,null,`数据范围 scope`,-1),R(`div`,gM,[R(`button`,{class:Ce({on:a.scope===`all`}),onClick:r[3]||=e=>m(`all`)},`all`,2),R(`button`,{class:Ce({on:a.scope===`alarm`}),onClick:r[4]||=e=>m(`alarm`)},`alarm`,2)])]),R(`div`,_M,[r[8]||=ka(` 当前要素：`,-1),R(`b`,null,A(s.value),1),r[9]||=ka(` / 8 `,-1)]),R(`details`,vM,[r[10]||=R(`summary`,null,`env 快照`,-1),R(`pre`,null,A(JSON.stringify(o.value,null,2)),1)])])]),_:1})])]))}}),[[`__scopeId`,`data-v-660927f4`]]);function bM(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Y(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){bM(a,r,i,o,s,`next`,e)}function s(e){bM(a,r,i,o,s,`throw`,e)}o(void 0)})}}function X(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function xM(e){"@babel/helpers - typeof";return xM=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},xM(e)}function SM(e,t){if(xM(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(xM(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function CM(e){var t=SM(e,`string`);return xM(t)==`symbol`?t:t+``}function wM(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,CM(r.key),r)}}function Z(e,t,n){return t&&wM(e.prototype,t),n&&wM(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function TM(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function EM(e,t){if(t&&(xM(t)==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return TM(e)}function DM(e){return DM=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},DM(e)}function OM(e,t){return OM=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},OM(e,t)}function kM(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&OM(e,t)}function Q(e,t,n){return(t=CM(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var AM=o(((e,t)=>{function n(e,t){this.v=e,this.k=t}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),jM=o(((e,t)=>{function n(e,r,i,a){var o=Object.defineProperty;try{o({},``,{})}catch{o=0}t.exports=n=function(e,t,r,i){function a(t,r){n(e,t,function(e){return this._invoke(t,r,e)})}t?o?o(e,t,{value:r,enumerable:!i,configurable:!i,writable:!i}):e[t]=r:(a(`next`,0),a(`throw`,1),a(`return`,2))},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r,i,a)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),MM=o(((e,t)=>{var n=jM();function r(){var e,i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.toStringTag||`@@toStringTag`;function c(t,r,a,o){var s=r&&r.prototype instanceof u?r:u,c=Object.create(s.prototype);return n(c,`_invoke`,function(t,n,r){var a,o,s,c=0,u=r||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,o=0,s=e,f.n=n,l}};function p(t,n){for(o=t,s=n,i=0;!d&&c&&!r&&i<u.length;i++){var r,a=u[i],p=f.p,m=a[2];t>3?(r=m===n)&&(s=a[(o=a[4])?5:(o=3,3)],a[4]=a[5]=e):a[0]<=p&&((r=t<2&&p<a[1])?(o=0,f.v=n,f.n=a[1]):p<m&&(r=t<3||a[0]>n||n>m)&&(a[4]=t,a[5]=n,f.n=m,o=0))}if(r||t>1)return l;throw d=!0,n}return function(r,u,m){if(c>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),o=u,s=m;(i=o<2?e:s)||!d;){a||(o?o<3?(o>1&&(f.n=-1),p(o,s)):f.n=s:f.v=s);try{if(c=2,a){if(o||(r=`next`),i=a[r]){if(!(i=i.call(a,s)))throw TypeError(`iterator result is not an object`);if(!i.done)return i;s=i.value,o<2&&(o=0)}else o===1&&(i=a.return)&&i.call(a),o<2&&(s=TypeError(`The iterator does not provide a '`+r+`' method`),o=1);a=e}else if((i=(d=f.n<0)?s:t.call(n,f))!==l)break}catch(t){a=e,o=1,s=t}finally{c=1}}return{value:i,done:d}}}(t,a,o),!0),c}var l={};function u(){}function d(){}function f(){}i=Object.getPrototypeOf;var p=[][o]?i(i([][o]())):(n(i={},o,function(){return this}),i),m=f.prototype=u.prototype=Object.create(p);function h(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,n(e,s,`GeneratorFunction`)),e.prototype=Object.create(m),e}return d.prototype=f,n(m,`constructor`,f),n(f,`constructor`,d),d.displayName=`GeneratorFunction`,n(f,s,`GeneratorFunction`),n(m),n(m,s,`Generator`),n(m,o,function(){return this}),n(m,`toString`,function(){return`[object Generator]`}),(t.exports=r=function(){return{w:c,m:h}},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),NM=o(((e,t)=>{var n=AM(),r=jM();function i(e,t){function a(r,i,o,s){try{var c=e[r](i),l=c.value;return l instanceof n?t.resolve(l.v).then(function(e){a(`next`,e,o,s)},function(e){a(`throw`,e,o,s)}):t.resolve(l).then(function(e){c.value=e,o(c)},function(e){return a(`throw`,e,o,s)})}catch(e){s(e)}}var o;this.next||(r(i.prototype),r(i.prototype,typeof Symbol==`function`&&Symbol.asyncIterator||`@asyncIterator`,function(){return this})),r(this,`_invoke`,function(e,n,r){function i(){return new t(function(t,n){a(e,r,t,n)})}return o=o?o.then(i,i):i()},!0)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),PM=o(((e,t)=>{var n=MM(),r=NM();function i(e,t,i,a,o){return new r(n().w(e,t,i,a),o||Promise)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),FM=o(((e,t)=>{var n=PM();function r(e,t,r,i,a){var o=n(e,t,r,i,a);return o.next().then(function(e){return e.done?e.value:o.next()})}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),IM=o(((e,t)=>{function n(e){var t=Object(e),n=[];for(var r in t)n.unshift(r);return function e(){for(;n.length;)if((r=n.pop())in t)return e.value=r,e.done=!1,e;return e.done=!0,e}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),LM=o(((e,t)=>{function n(e){"@babel/helpers - typeof";return t.exports=n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),RM=o(((e,t)=>{var n=LM().default;function r(e){if(e!=null){var t=e[typeof Symbol==`function`&&Symbol.iterator||`@@iterator`],r=0;if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw TypeError(n(e)+` is not iterable`)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),zM=o(((e,t)=>{var n=AM(),r=MM(),i=FM(),a=PM(),o=NM(),s=IM(),c=RM();function l(){var e=r(),u=e.m(l),d=(Object.getPrototypeOf?Object.getPrototypeOf(u):u.__proto__).constructor;function f(e){var t=typeof e==`function`&&e.constructor;return!!t&&(t===d||(t.displayName||t.name)===`GeneratorFunction`)}var p={throw:1,return:2,break:3,continue:3};function m(e){var t,n;return function(r){t||(t={stop:function(){return n(r.a,2)},catch:function(){return r.v},abrupt:function(e,t){return n(r.a,p[e],t)},delegateYield:function(e,i,a){return t.resultName=i,n(r.d,c(e),a)},finish:function(e){return n(r.f,e)}},n=function(e,n,i){r.p=t.prev,r.n=t.next;try{return e(n,i)}finally{t.next=r.n}}),t.resultName&&(t[t.resultName]=r.v,t.resultName=void 0),t.sent=r.v,t.next=r.n;try{return e.call(this,t)}finally{r.p=t.prev,r.n=t.next}}}return(t.exports=l=function(){return{wrap:function(t,n,r,i){return e.w(m(t),n,r,i&&i.reverse())},isGeneratorFunction:f,mark:e.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:o,async:function(e,t,n,r,o){return(f(t)?a:i)(m(e),t,n,r,o)},keys:s,values:c}},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports})),$=c(o(((e,t)=>{var n=zM()();t.exports=n;try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}}))());function BM(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=VM(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function VM(e,t){if(e){if(typeof e==`string`)return HM(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?HM(e,t):void 0}}function HM(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function UM(){return{debug:function(e){}}}var WM=function(){function e(){X(this,e),Q(this,`pipes`,[])}return Z(e,[{key:`addPipe`,value:function(e){this.pipes.push(e)}},{key:`emit`,value:function(){var e=Y($.default.mark(function e(t){var n,r,i,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,r=BM(this.pipes),e.prev=2,r.s();case 4:if((i=r.n()).done){e.next=13;break}return a=i.value,e.next=8,a(n);case 8:if(n=e.sent,n!==void 0){e.next=11;break}return e.abrupt(`return`);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:return e.abrupt(`return`,n);case 22:case`end`:return e.stop()}},e,this,[[2,15,18,21]])}));function t(t){return e.apply(this,arguments)}return t}()}])}(),GM=function(){function e(t){X(this,e),Q(this,`signal`,new WM),this.name=t}return Z(e,[{key:`addPipe`,value:function(e){this.signal.addPipe(e)}},{key:`use`,value:function(t){if(!(t instanceof e))throw Error(`cannot use non-Scope instance`);return t.setParent(this),this.addPipe(function(e){return t.signal.emit(e)}),UM()}},{key:`setParent`,value:function(e){this.parent=e}},{key:`emit`,value:function(e){return this.signal.emit(e)}},{key:`hasParent`,value:function(){return!!this.parent}},{key:`parentScope`,value:function(e){if(!this.parent)throw Error(`cannot find parent`);if(e&&this.parent instanceof e)return this.parent;if(e)throw Error(`actual parent is not instance of type`);return this.parent}}])}();function KM(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=qM(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function qM(e,t){if(e){if(typeof e==`string`)return JM(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?JM(e,t):void 0}}function JM(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function YM(e,t,n){return t=DM(t),EM(e,XM()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function XM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XM=function(){return!!e})()}var ZM=function(e){function t(){var e;return X(this,t),e=YM(this,t,[`NodeEditor`]),Q(e,`nodes`,[]),Q(e,`connections`,[]),e}return kM(t,e),Z(t,[{key:`getNode`,value:function(e){return this.nodes.find(function(t){return t.id===e})}},{key:`getNodes`,value:function(){return this.nodes.slice()}},{key:`getConnections`,value:function(){return this.connections.slice()}},{key:`getConnection`,value:function(e){return this.connections.find(function(t){return t.id===e})}},{key:`addNode`,value:function(){var e=Y($.default.mark(function e(t){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.getNode(t.id)){e.next=2;break}throw Error(`node has already been added`);case 2:return e.next=4,this.emit({type:`nodecreate`,data:t});case 4:if(e.sent){e.next=6;break}return e.abrupt(`return`,!1);case 6:return this.nodes.push(t),e.next=9,this.emit({type:`nodecreated`,data:t});case 9:return e.abrupt(`return`,!0);case 10:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`addConnection`,value:function(){var e=Y($.default.mark(function e(t){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.getConnection(t.id)){e.next=2;break}throw Error(`connection has already been added`);case 2:return e.next=4,this.emit({type:`connectioncreate`,data:t});case 4:if(e.sent){e.next=6;break}return e.abrupt(`return`,!1);case 6:return this.connections.push(t),e.next=9,this.emit({type:`connectioncreated`,data:t});case 9:return e.abrupt(`return`,!0);case 10:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`removeNode`,value:function(){var e=Y($.default.mark(function e(t){var n,r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.nodes.find(function(e){return e.id===t}),n){e.next=3;break}throw Error(`cannot find node`);case 3:return e.next=5,this.emit({type:`noderemove`,data:n});case 5:if(e.sent){e.next=7;break}return e.abrupt(`return`,!1);case 7:return r=this.nodes.indexOf(n),this.nodes.splice(r,1),e.next=11,this.emit({type:`noderemoved`,data:n});case 11:return e.abrupt(`return`,!0);case 12:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`removeConnection`,value:function(){var e=Y($.default.mark(function e(t){var n,r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.connections.find(function(e){return e.id===t}),n){e.next=3;break}throw Error(`cannot find connection`);case 3:return e.next=5,this.emit({type:`connectionremove`,data:n});case 5:if(e.sent){e.next=7;break}return e.abrupt(`return`,!1);case 7:return r=this.connections.indexOf(n),this.connections.splice(r,1),e.next=11,this.emit({type:`connectionremoved`,data:n});case 11:return e.abrupt(`return`,!0);case 12:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`clear`,value:function(){var e=Y($.default.mark(function e(){var t,n,r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.emit({type:`clear`});case 2:if(e.sent){e.next=6;break}return e.next=5,this.emit({type:`clearcancelled`});case 5:return e.abrupt(`return`,!1);case 6:t=KM(this.connections.slice()),e.prev=7,t.s();case 9:if((n=t.n()).done){e.next=15;break}return r=n.value,e.next=13,this.removeConnection(r.id);case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),t.e(e.t0);case 20:return e.prev=20,t.f(),e.finish(20);case 23:i=KM(this.nodes.slice()),e.prev=24,i.s();case 26:if((a=i.n()).done){e.next=32;break}return o=a.value,e.next=30,this.removeNode(o.id);case 30:e.next=26;break;case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(24),i.e(e.t1);case 37:return e.prev=37,i.f(),e.finish(37);case 40:return e.next=42,this.emit({type:`cleared`});case 42:return e.abrupt(`return`,!0);case 43:case`end`:return e.stop()}},e,this,[[7,17,20,23],[24,34,37,40]])}));function t(){return e.apply(this,arguments)}return t}()}])}(GM),QM=globalThis.crypto;function $M(){if(`randomBytes`in QM)return QM.randomBytes(8).toString(`hex`);var e=QM.getRandomValues(new Uint8Array(8));return Array.from(e).map(function(e){return e.toString(16).padStart(2,`0`)}).join(``)}function eN(e,t,n){return t=DM(t),EM(e,tN()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function tN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tN=function(){return!!e})()}var nN=Z(function e(t){X(this,e),this.name=t}),rN=Z(function e(t,n,r){X(this,e),this.socket=t,this.label=n,this.multipleConnections=r,this.id=$M()}),iN=function(e){function t(e,n,r){var i;return X(this,t),i=eN(this,t,[e,n,r]),Q(i,`control`,null),Q(i,`showControl`,!0),i.socket=e,i.label=n,i.multipleConnections=r,i}return kM(t,e),Z(t,[{key:`addControl`,value:function(e){if(this.control)throw Error(`control already added for this input`);this.control=e}},{key:`removeControl`,value:function(){this.control=null}}])}(rN),aN=function(e){function t(e,n,r){return X(this,t),eN(this,t,[e,n,r!==!1])}return kM(t,e),Z(t)}(rN),oN=Z(function e(){X(this,e),this.id=$M()}),sN=Object.freeze({__proto__:null,Socket:nN,Port:rN,Input:iN,Output:aN,Control:oN,InputControl:function(e){function t(e,n){var r;return X(this,t),r=eN(this,t),r.type=e,r.options=n,r.id=$M(),r.readonly=n?.readonly??!1,n?.initial!==void 0&&(r.value=n.initial),r}return kM(t,e),Z(t,[{key:`setValue`,value:function(e){var t;this.value=e,(t=this.options)!=null&&t.change&&this.options.change(e)}}])}(oN),Node:function(){function e(t){X(this,e),Q(this,`inputs`,{}),Q(this,`outputs`,{}),Q(this,`controls`,{}),this.label=t,this.id=$M()}return Z(e,[{key:`hasInput`,value:function(e){return Object.prototype.hasOwnProperty.call(this.inputs,e)}},{key:`addInput`,value:function(e,t){if(this.hasInput(e))throw Error(`input with key '${String(e)}' already added`);Object.defineProperty(this.inputs,e,{value:t,enumerable:!0,configurable:!0})}},{key:`removeInput`,value:function(e){delete this.inputs[e]}},{key:`hasOutput`,value:function(e){return Object.prototype.hasOwnProperty.call(this.outputs,e)}},{key:`addOutput`,value:function(e,t){if(this.hasOutput(e))throw Error(`output with key '${String(e)}' already added`);Object.defineProperty(this.outputs,e,{value:t,enumerable:!0,configurable:!0})}},{key:`removeOutput`,value:function(e){delete this.outputs[e]}},{key:`hasControl`,value:function(e){return Object.prototype.hasOwnProperty.call(this.controls,e)}},{key:`addControl`,value:function(e,t){if(this.hasControl(e))throw Error(`control with key '${String(e)}' already added`);Object.defineProperty(this.controls,e,{value:t,enumerable:!0,configurable:!0})}},{key:`removeControl`,value:function(e){delete this.controls[e]}}])}(),Connection:Z(function e(t,n,r,i){if(X(this,e),this.sourceOutput=n,this.targetInput=i,!t.outputs[n])throw Error(`source node doesn't have output with a key ${String(n)}`);if(!r.inputs[i])throw Error(`target node doesn't have input with a key ${String(i)}`);this.id=$M(),this.source=t.id,this.target=r.id})});function cN(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function lN(e){if(Array.isArray(e))return cN(e)}function uN(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function dN(e,t){if(e){if(typeof e==`string`)return cN(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cN(e,t):void 0}}function fN(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pN(e){return lN(e)||uN(e)||dN(e)||fN()}var mN=function(){function e(t){X(this,e),this.reordered=t,this.holder=document.createElement(`div`),this.holder.style.transformOrigin=`0 0`}return Z(e,[{key:`getPointerFrom`,value:function(e){var t=this.holder.getBoundingClientRect(),n=t.left,r=t.top;return{x:e.clientX-n,y:e.clientY-r}}},{key:`add`,value:function(e){this.holder.appendChild(e)}},{key:`reorder`,value:function(){var e=Y($.default.mark(function e(t,n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.holder.contains(t)){e.next=2;break}throw Error(`content doesn't have 'target' for reordering`);case 2:if(n===null||this.holder.contains(n)){e.next=4;break}throw Error(`content doesn't have 'next' for reordering`);case 4:return this.holder.insertBefore(t,n),e.next=7,this.reordered(t);case 7:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`remove`,value:function(e){this.holder.contains(e)&&this.holder.removeChild(e)}}])}();function hN(e,t){var n=function(e){t.move(e)},r=function(e){window.removeEventListener(`pointermove`,n),window.removeEventListener(`pointerup`,r),window.removeEventListener(`pointercancel`,r),t.up(e)},i=function(e){window.addEventListener(`pointermove`,n),window.addEventListener(`pointerup`,r),window.addEventListener(`pointercancel`,r),t.down(e)};return e.addEventListener(`pointerdown`,i),{destroy:function(){e.removeEventListener(`pointerdown`,i),window.removeEventListener(`pointermove`,n),window.removeEventListener(`pointerup`,r),window.removeEventListener(`pointercancel`,r)}}}var gN=function(e){return e.length===0?0:Math.min.apply(Math,pN(e))},_N=function(e){return e.length===0?0:Math.max.apply(Math,pN(e))};function vN(e){var t=gN(e.map(function(e){return e.position.x})),n=gN(e.map(function(e){return e.position.y})),r=_N(e.map(function(e){return e.position.x+e.width})),i=_N(e.map(function(e){return e.position.y+e.height}));return{left:t,right:r,top:n,bottom:i,width:Math.abs(t-r),height:Math.abs(n-i),center:{x:(t+r)/2,y:(n+i)/2}}}function yN(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function bN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?yN(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yN(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var xN=function(){function e(t){var n=this;X(this,e),Q(this,`down`,function(e){n.guards.down(e)&&(e.stopPropagation(),n.pointerStart={x:e.pageX,y:e.pageY},n.startPosition=bN({},n.config.getCurrentPosition()),n.events.start(e))}),Q(this,`move`,function(e){if(n.pointerStart&&n.startPosition&&n.guards.move(e)){e.preventDefault();var t={x:e.pageX-n.pointerStart.x,y:e.pageY-n.pointerStart.y},r=n.config.getZoom(),i=n.startPosition.x+t.x/r,a=n.startPosition.y+t.y/r;n.events.translate(i,a,e)}}),Q(this,`up`,function(e){n.pointerStart&&(delete n.pointerStart,n.events.drag(e))}),this.guards=t||{down:function(e){return e.pointerType!==`mouse`||e.button===0},move:function(){return!0}}}return Z(e,[{key:`initialize`,value:function(e,t,n){this.config=t,this.events=n,e.style.touchAction=`none`,this.pointerListener=hN(e,{down:this.down,move:this.move,up:this.up})}},{key:`destroy`,value:function(){this.pointerListener.destroy()}}])}(),SN=8,CN=24,wN=1,TN=2;function EN(e,t){return t===wN?e*SN:t===TN?e*CN:e}function DN(e,t){if(e===0)return 0;var n=t/SN,r=-e*n;return Math.sign(r)*Math.min(t,Math.abs(r))}var ON=function(){function e(t){var n=this;X(this,e),Q(this,`previous`,null),Q(this,`pointers`,[]),Q(this,`wheel`,function(e){e.preventDefault();var t=DN(EN(e.deltaY,e.deltaMode),n.intensity);if(t!==0){var r=n.element.getBoundingClientRect(),i=r.left,a=r.top,o=(i-e.clientX)*t,s=(a-e.clientY)*t;n.onzoom(t,o,s,`wheel`)}}),Q(this,`down`,function(e){n.pointers.push(e)}),Q(this,`move`,function(e){if(n.pointers=n.pointers.map(function(t){return t.pointerId===e.pointerId?e:t}),n.isTranslating()){var t=n.element.getBoundingClientRect(),r=t.left,i=t.top,a=n.getTouches(),o=a.cx,s=a.cy,c=a.distance;if(n.previous!==null&&n.previous.distance>0){var l=c/n.previous.distance-1,u=(r-o)*l,d=(i-s)*l;n.onzoom(l,u-(n.previous.cx-o),d-(n.previous.cy-s),`touch`)}n.previous={cx:o,cy:s,distance:c}}}),Q(this,`contextmenu`,function(){n.pointers=[]}),Q(this,`up`,function(e){n.previous=null,n.pointers=n.pointers.filter(function(t){return t.pointerId!==e.pointerId})}),Q(this,`dblclick`,function(e){e.preventDefault();var t=n.element.getBoundingClientRect(),r=t.left,i=t.top,a=4*n.intensity,o=(r-e.clientX)*a,s=(i-e.clientY)*a;n.onzoom(a,o,s,`dblclick`)}),this.intensity=t}return Z(e,[{key:`initialize`,value:function(e,t,n){this.container=e,this.element=t,this.onzoom=n,this.container.addEventListener(`wheel`,this.wheel),this.container.addEventListener(`pointerdown`,this.down),this.container.addEventListener(`dblclick`,this.dblclick),window.addEventListener(`pointermove`,this.move),window.addEventListener(`pointerup`,this.up),window.addEventListener(`pointercancel`,this.up),window.addEventListener(`contextmenu`,this.contextmenu)}},{key:`getTouches`,value:function(){var e={touches:this.pointers},t=[e.touches[0].clientX,e.touches[0].clientY],n=t[0],r=t[1],i=[e.touches[1].clientX,e.touches[1].clientY],a=i[0],o=i[1],s=Math.sqrt((n-a)**2+(r-o)**2);return{cx:(n+a)/2,cy:(r+o)/2,distance:s}}},{key:`isTranslating`,value:function(){return this.pointers.length>=2}},{key:`destroy`,value:function(){this.container.removeEventListener(`wheel`,this.wheel),this.container.removeEventListener(`pointerdown`,this.down),this.container.removeEventListener(`dblclick`,this.dblclick),window.removeEventListener(`pointermove`,this.move),window.removeEventListener(`pointerup`,this.up),window.removeEventListener(`pointercancel`,this.up),window.removeEventListener(`contextmenu`,this.contextmenu)}}])}(),kN=function(){function e(t,n,r){var i=this;X(this,e),Q(this,`transform`,{k:1,x:0,y:0}),Q(this,`pointer`,{x:0,y:0}),Q(this,`zoomHandler`,null),Q(this,`dragHandler`,null),Q(this,`pointerdown`,function(e){i.setPointerFrom(e),i.events.pointerDown(i.pointer,e)}),Q(this,`pointermove`,function(e){i.setPointerFrom(e),i.events.pointerMove(i.pointer,e)}),Q(this,`pointerup`,function(e){i.setPointerFrom(e),i.events.pointerUp(i.pointer,e)}),Q(this,`resize`,function(e){i.events.resize(e)}),Q(this,`onTranslate`,function(e,t){var n;(n=i.zoomHandler)!=null&&n.isTranslating()||i.translate(e,t)}),Q(this,`onZoom`,function(e,t,n,r){i.zoom(i.transform.k*(1+e),t,n,r),i.update()}),this.container=t,this.events=n,this.guards=r,this.content=new mN(function(e){return i.events.reordered(e)}),this.content.holder.style.transformOrigin=`0 0`,this.setZoomHandler(new ON(.1)),this.setDragHandler(new xN),this.container.addEventListener(`pointerdown`,this.pointerdown),this.container.addEventListener(`pointermove`,this.pointermove),window.addEventListener(`pointerup`,this.pointerup),window.addEventListener(`resize`,this.resize),t.appendChild(this.content.holder),this.update()}return Z(e,[{key:`update`,value:function(){var e=this.transform,t=e.x,n=e.y,r=e.k;this.content.holder.style.transform=`translate(${t}px, ${n}px) scale(${r})`}},{key:`setDragHandler`,value:function(e){var t=this;this.dragHandler&&this.dragHandler.destroy(),this.dragHandler=e,this.dragHandler&&this.dragHandler.initialize(this.container,{getCurrentPosition:function(){return t.transform},getZoom:function(){return 1}},{start:function(){return null},translate:this.onTranslate,drag:function(){return null}})}},{key:`setZoomHandler`,value:function(e){this.zoomHandler&&this.zoomHandler.destroy(),this.zoomHandler=e,this.zoomHandler&&this.zoomHandler.initialize(this.container,this.content.holder,this.onZoom)}},{key:`setPointerFrom`,value:function(e){var t=this.content.getPointerFrom(e),n=t.x,r=t.y,i=this.transform.k;this.pointer={x:n/i,y:r/i}}},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={x:t,y:n},e.next=3,this.guards.translate({previous:this.transform,position:r});case 3:if(i=e.sent,i){e.next=6;break}return e.abrupt(`return`,!1);case 6:return this.transform.x=i.data.position.x,this.transform.y=i.data.position.y,this.update(),e.next=11,this.events.translated(i.data);case 11:return e.abrupt(`return`,!0);case 12:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`zoom`,value:function(){var e=Y($.default.mark(function e(t){var n,r,i,a,o,s,c=arguments;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&c[1]!==void 0?c[1]:0,r=c.length>2&&c[2]!==void 0?c[2]:0,i=c.length>3?c[3]:void 0,a=this.transform.k,e.next=6,this.guards.zoom({previous:this.transform,zoom:t,source:i});case 6:if(o=e.sent,o){e.next=9;break}return e.abrupt(`return`,!0);case 9:return s=(a-o.data.zoom)/(a-t||1),this.transform.k=o.data.zoom||1,this.transform.x+=n*s,this.transform.y+=r*s,this.update(),e.next=16,this.events.zoomed(o.data);case 16:return e.abrupt(`return`,!1);case 17:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`destroy`,value:function(){this.container.removeEventListener(`pointerdown`,this.pointerdown),this.container.removeEventListener(`pointermove`,this.pointermove),window.removeEventListener(`pointerup`,this.pointerup),window.removeEventListener(`resize`,this.resize),this.dragHandler&&this.dragHandler.destroy(),this.zoomHandler&&this.zoomHandler.destroy(),this.content.holder.innerHTML=``}}])}();function AN(e,t,n){return t=DM(t),EM(e,jN()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function jN(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jN=function(){return!!e})()}var MN=function(e){function t(){return X(this,t),AN(this,t,arguments)}return kM(t,e),Z(t)}(GM),NN=Z(function e(t){X(this,e),this.element=document.createElement(`div`),this.element.style.position=`absolute`,this.element.style.left=`0`,this.element.style.top=`0`,this.element.addEventListener(`contextmenu`,function(e){t.contextmenu(e)})}),PN=function(){function e(){X(this,e),Q(this,`views`,new WeakMap),Q(this,`viewsElements`,new Map)}return Z(e,[{key:`set`,value:function(e){var t=e.element,n=e.type,r=e.payload;r!=null&&r.id&&(this.views.set(t,e),this.viewsElements.set(`${n}_${r.id}`,t))}},{key:`get`,value:function(e,t){var n=this.viewsElements.get(`${e}_${t}`);return n&&this.views.get(n)}},{key:`delete`,value:function(e){var t,n=this.views.get(e);n&&(t=n.payload)!=null&&t.id&&(this.views.delete(e),this.viewsElements.delete(`${n.type}_${n.payload.id}`))}}])}();function FN(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function IN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?FN(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):FN(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var LN=function(){function e(t,n,r){var i=this;X(this,e),Q(this,`translate`,function(){var e=Y($.default.mark(function e(t,n){var r,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=IN({},i.position),e.next=3,i.guards.translate({previous:r,position:{x:t,y:n}});case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt(`return`,!1);case 6:return i.position=IN({},a.data.position),i.element.style.transform=`translate(${i.position.x}px, ${i.position.y}px)`,e.next=10,i.events.translated({position:i.position,previous:r});case 10:return e.abrupt(`return`,!0);case 11:case`end`:return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),Q(this,`resize`,function(){var e=Y($.default.mark(function e(t,n){var r,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={width:t,height:n},e.next=3,i.guards.resize({size:r});case 3:if(e.sent){e.next=5;break}return e.abrupt(`return`,!1);case 5:if(a=i.element.querySelector(`*:not(span):not([fragment])`),a&&a instanceof HTMLElement){e.next=8;break}return e.abrupt(`return`,!1);case 8:return a.style.width=`${t}px`,a.style.height=`${n}px`,e.next=12,i.events.resized({size:r});case 12:return e.abrupt(`return`,!0);case 13:case`end`:return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),this.getZoom=t,this.events=n,this.guards=r,this.element=document.createElement(`div`),this.element.style.position=`absolute`,this.position={x:0,y:0},this.translate(0,0),this.element.addEventListener(`contextmenu`,function(e){i.events.contextmenu(e)}),this.dragHandler=new xN,this.dragHandler.initialize(this.element,{getCurrentPosition:function(){return i.position},getZoom:function(){return i.getZoom()}},{start:this.events.picked,translate:this.translate,drag:this.events.dragged})}return Z(e,[{key:`destroy`,value:function(){this.dragHandler.destroy()}}])}();function RN(e,t){return e.map(function(e){return{view:t.get(e.id),node:e}}).filter(function(e){return e.view}).map(function(e){var t=e.view,n=e.node,r=n.width,i=n.height;return r!==void 0&&i!==void 0?{position:t.position,width:r,height:i}:{position:t.position,width:t.element.clientWidth,height:t.element.clientHeight}})}function zN(e,t){var n=e.parentScope(ZM);return vN(RN(t.map(function(e){return xM(e)===`object`?e:n.getNode(e)}),e.nodeViews))}function BN(e){var t=e;t.addPipe(function(e){if(!e||xM(e)!==`object`||!(`type`in e))return e;if(e.type===`nodepicked`){var n=t.nodeViews.get(e.data.id),r=t.area.content;n&&r.reorder(n.element,null)}if(e.type===`connectioncreated`){var i=t.connectionViews.get(e.data.id),a=t.area.content;i&&a.reorder(i.element,a.holder.firstChild)}return e})}var VN=0,HN=1;function UN(e){var t=e,n=HN,r=function(e){var n=t.nodeViews.get(e);n&&(n.element.style.zIndex=String(HN))},i=function(e){var r=t.nodeViews.get(e);r&&(n+=1,r.element.style.zIndex=String(n))},a=function(e){var n=t.connectionViews.get(e);n&&(n.element.style.zIndex=String(VN))};t.addPipe(function(e){return!e||xM(e)!==`object`||!(`type`in e)?e:(e.type===`nodecreated`&&r(e.data.id),e.type===`nodepicked`&&i(e.data.id),e.type===`connectioncreated`&&a(e.data.id),e)})}function WN(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function GN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?WN(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WN(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function KN(e,t){var n=t!=null&&t.scaling?t.scaling===!0?{min:.1,max:1}:t.scaling:!1,r=t!=null&&t.translation?t.translation===!0?{left:0,top:0,right:1e3,bottom:1e3}:t.translation:!1;function i(e){if(!n)throw Error(`scaling param isnt defined`);var t=typeof n==`function`?n():n,r=t.min,i=t.max;return e<r?r:e>i?i:e}function a(e){if(!r)throw Error(`translation param isnt defined`);var t=GN({},e),n=typeof r==`function`?r():r,i=n.left,a=n.top,o=n.right,s=n.bottom;return t.x<i&&(t.x=i),t.x>o&&(t.x=o),t.y<a&&(t.y=a),t.y>s&&(t.y=s),t}e.addPipe(function(t){if(!t||xM(t)!==`object`||!(`type`in t))return t;if(n&&t.type===`zoom`)return GN(GN({},t),{},{data:GN(GN({},t.data),{},{zoom:i(t.data.zoom)})});if(r&&t.type===`zoomed`){var o=a(e.area.transform);e.area.translate(o.x,o.y)}return r&&t.type===`translate`?GN(GN({},t),{},{data:GN(GN({},t.data),{},{position:a(t.data.position)})}):t})}function qN(){var e=!1;function t(t){(t.key===`Control`||t.key===`Meta`)&&(e=!0)}function n(t){(t.key===`Control`||t.key===`Meta`)&&(e=!1)}return document.addEventListener(`keydown`,t),document.addEventListener(`keyup`,n),{active:function(){return e},destroy:function(){document.removeEventListener(`keydown`,t),document.removeEventListener(`keyup`,n)}}}var JN=function(){function e(){X(this,e),Q(this,`entities`,new Map),Q(this,`pickId`,null)}return Z(e,[{key:`isSelected`,value:function(e){return this.entities.has(`${e.label}_${e.id}`)}},{key:`add`,value:function(){var e=Y($.default.mark(function e(t,n){var r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=`${t.label}_${t.id}`,n){e.next=4;break}return e.next=4,this.unselect(Array.from(this.entities.values()).filter(function(e){return e.label!==t.label||e.id!==t.id}));case 4:this.entities.set(r,t);case 5:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`remove`,value:function(){var e=Y($.default.mark(function e(t){var n,r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=`${t.label}_${t.id}`,r=this.entities.get(n),!r){e.next=6;break}return this.entities.delete(n),e.next=6,r.unselect();case 6:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`unselect`,value:function(){var e=Y($.default.mark(function e(t){var n=this;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Array.from(t).map(function(e){return n.remove(e)}));case 2:case`end`:return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`unselectAll`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.unselect(this.entities.values());case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n){var r=this;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Array.from(this.entities.values()).map(function(e){return!r.isPicked(e)&&e.translate(t,n)}));case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`pick`,value:function(e){this.pickId=`${e.label}_${e.id}`}},{key:`release`,value:function(){this.pickId=null}},{key:`isPicked`,value:function(e){return this.pickId===`${e.label}_${e.id}`}}])}();function YN(){return new JN}function XN(e,t,n){var r=null,i=e,a=function(){return r||=i.parentScope(ZM)},o=0;function s(e){e.selected||(e.selected=!0,i.update(`node`,e.id))}function c(e){e.selected&&(e.selected=!1,i.update(`node`,e.id))}function l(e,t){return u.apply(this,arguments)}function u(){return u=Y($.default.mark(function e(n,r){var o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a().getNode(n),o){e.next=3;break}return e.abrupt(`return`);case 3:return e.next=5,t.add({label:`node`,id:o.id,translate:function(e,t){return Y($.default.mark(function n(){var r,a;return $.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=i.nodeViews.get(o.id),a=r?.position,!a){n.next=5;break}return n.next=5,r.translate(a.x+e,a.y+t);case 5:case`end`:return n.stop()}},n)}))()},unselect:function(){c(o)}},r);case 5:s(o);case 6:case`end`:return e.stop()}},e)})),u.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Y($.default.mark(function e(n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.remove({id:n,label:`node`});case 2:case`end`:return e.stop()}},e)})),f.apply(this,arguments)}return i.addPipe(function(){var e=Y($.default.mark(function e(r){var i,a,s,c,u,d,f,p;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&xM(r)===`object`&&`type`in r){e.next=2;break}return e.abrupt(`return`,r);case 2:if(r.type!==`nodepicked`){e.next=11;break}return i=r.data.id,a=n.accumulating.active(),t.pick({id:i,label:`node`}),o=null,e.next=9,l(i,a);case 9:e.next=33;break;case 11:if(r.type!==`nodetranslated`){e.next=20;break}if(s=r.data,c=s.id,u=s.position,d=s.previous,f=u.x-d.x,p=u.y-d.y,!t.isPicked({id:c,label:`node`})){e.next=18;break}return e.next=18,t.translate(f,p);case 18:e.next=33;break;case 20:if(r.type!==`pointerdown`){e.next=24;break}o=0,e.next=33;break;case 24:if(r.type!==`pointermove`){e.next=28;break}o!==null&&o++,e.next=33;break;case 28:if(r.type!==`pointerup`){e.next=33;break}if(!(o!==null&&o<4)){e.next=32;break}return e.next=32,t.unselectAll();case 32:o=null;case 33:return e.abrupt(`return`,r);case 34:case`end`:return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),{select:l,unselect:d}}function ZN(e,t){var n=null,r=function(){return n||=e.parentScope(ZM)};function i(n,i){var a=r().getNode(n);if(a){var o=a.inputs[i];if(!o)throw Error(`cannot find input`);var s=o.showControl,c=!!r().getConnections().find(function(e){return e.target===n&&e.targetInput===i});o.showControl=t?t({hasAnyConnection:c,input:o}):!c,o.showControl!==s&&e.update(`node`,a.id)}}e.addPipe(function(e){return(e.type===`connectioncreated`||e.type===`connectionremoved`)&&i(e.data.target,e.data.targetInput),e})}function QN(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?QN(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):QN(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eP(e,t){var n=e,r=t?.size===void 0?16:t.size,i=t?.dynamic===void 0||t.dynamic;function a(e){return Math.round(e/r)*r}n.addPipe(function(e){if(!e||xM(e)!==`object`||!(`type`in e))return e;if(i&&e.type===`nodetranslate`){var t=e.data.position,r=a(t.x),o=a(t.y);return $N($N({},e),{},{data:$N($N({},e.data),{},{position:{x:r,y:o}})})}if(!i&&e.type===`nodedragged`){var s=n.nodeViews.get(e.data.id);if(s){var c=s.position,l=c.x,u=c.y;s.translate(a(l),a(u))}}return e})}function tP(e,t,n){return nP.apply(this,arguments)}function nP(){return nP=Y($.default.mark(function e(t,n,r){var i,a,o,s,c,l,u,d,f,p,m,h,g;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=r||{},a=i.scale,o=a===void 0?.9:a,s=t.parentScope(ZM),c=n.map(function(e){return xM(e)===`object`?e:s.getNode(e)}),l=RN(c,t.nodeViews),u=vN(l),d=[t.container.clientWidth,t.container.clientHeight],f=d[0],p=d[1],m=f/u.width,h=p/u.height,g=Math.min(h*o,m*o,1),t.area.transform.x=f/2-u.center.x*g,t.area.transform.y=p/2-u.center.y*g,e.next=12,t.area.zoom(g,0,0);case 12:case`end`:return e.stop()}},e)})),nP.apply(this,arguments)}var rP=Object.freeze({__proto__:null,getBoundingBox:zN,simpleNodesOrder:BN,zIndexNodesOrder:UN,restrictor:KN,accumulateOnCtrl:qN,selectableNodes:XN,Selector:JN,selector:YN,showInputControl:ZN,snapGrid:eP,zoomAt:tP});function iP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function aP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?iP(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iP(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oP(e,t,n){return t=DM(t),EM(e,sP()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function sP(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sP=function(){return!!e})()}var cP=function(e){function t(e){var n;return X(this,t),n=oP(this,t,[`area`]),Q(n,`nodeViews`,new Map),Q(n,`connectionViews`,new Map),Q(n,`elements`,new PN),Q(n,`onContextMenu`,function(e){n.emit({type:`contextmenu`,data:{event:e,context:`root`}})}),n.container=e,e.style.overflow=`hidden`,e.addEventListener(`contextmenu`,n.onContextMenu),n.addPipe(function(e){return!e||!(xM(e)===`object`&&`type`in e)?e:(e.type===`nodecreated`&&n.addNodeView(e.data),e.type===`noderemoved`&&n.removeNodeView(e.data.id),e.type===`connectioncreated`&&n.addConnectionView(e.data),e.type===`connectionremoved`&&n.removeConnectionView(e.data.id),e.type===`render`&&n.elements.set(e.data),e.type===`unmount`&&n.elements.delete(e.data.element),e)}),n.area=new kN(e,{zoomed:function(e){return n.emit({type:`zoomed`,data:e})},pointerDown:function(e,t){n.emit({type:`pointerdown`,data:{position:e,event:t}})},pointerMove:function(e,t){n.emit({type:`pointermove`,data:{position:e,event:t}})},pointerUp:function(e,t){n.emit({type:`pointerup`,data:{position:e,event:t}})},resize:function(e){n.emit({type:`resized`,data:{event:e}})},translated:function(e){return n.emit({type:`translated`,data:e})},reordered:function(e){return n.emit({type:`reordered`,data:{element:e}})}},{translate:function(e){return n.emit({type:`translate`,data:e})},zoom:function(e){return n.emit({type:`zoom`,data:e})}}),n}return kM(t,e),Z(t,[{key:`addNodeView`,value:function(e){var t=this,n=e.id,r=new LN(function(){return t.area.transform.k},{picked:function(){t.emit({type:`nodepicked`,data:{id:n}})},translated:function(e){return t.emit({type:`nodetranslated`,data:aP({id:n},e)})},dragged:function(){t.emit({type:`nodedragged`,data:e})},contextmenu:function(n){t.emit({type:`contextmenu`,data:{event:n,context:e}})},resized:function(n){var r=n.size;return t.emit({type:`noderesized`,data:{id:e.id,size:r}})}},{translate:function(e){return t.emit({type:`nodetranslate`,data:aP({id:n},e)})},resize:function(n){var r=n.size;return t.emit({type:`noderesize`,data:{id:e.id,size:r}})}});return this.nodeViews.set(n,r),this.area.content.add(r.element),this.emit({type:`render`,data:{element:r.element,type:`node`,payload:e}}),r}},{key:`removeNodeView`,value:function(e){var t=this.nodeViews.get(e);t&&(this.emit({type:`unmount`,data:{element:t.element}}),this.nodeViews.delete(e),this.area.content.remove(t.element))}},{key:`addConnectionView`,value:function(e){var t=this,n=new NN({contextmenu:function(n){t.emit({type:`contextmenu`,data:{event:n,context:e}})}});return this.connectionViews.set(e.id,n),this.area.content.add(n.element),this.emit({type:`render`,data:{element:n.element,type:`connection`,payload:e}}),n}},{key:`removeConnectionView`,value:function(e){var t=this.connectionViews.get(e);t&&(this.emit({type:`unmount`,data:{element:t.element}}),this.connectionViews.delete(e),this.area.content.remove(t.element))}},{key:`update`,value:function(){var e=Y($.default.mark(function e(t,n){var r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.elements.get(t,n),!r){e.next=4;break}return e.next=4,this.emit({type:`render`,data:r});case 4:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`resize`,value:function(){var e=Y($.default.mark(function e(t,n,r){var i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.nodeViews.get(t),!i){e.next=5;break}return e.next=4,i.resize(n,r);case 4:return e.abrupt(`return`,e.sent);case 5:case`end`:return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.x,i=n.y,a=this.nodeViews.get(t),!a){e.next=6;break}return e.next=5,a.translate(r,i);case 5:return e.abrupt(`return`,e.sent);case 6:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`destroy`,value:function(){var e=this;this.container.removeEventListener(`contextmenu`,this.onContextMenu),Array.from(this.connectionViews.keys()).forEach(function(t){e.removeConnectionView(t)}),Array.from(this.nodeViews.keys()).forEach(function(t){e.removeNodeView(t)}),this.area.destroy()}}])}(MN);function lP(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=DM(e))!==null;);return e}function uP(){return uP=typeof Reflect<`u`&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=lP(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},uP.apply(null,arguments)}function dP(e){if(Array.isArray(e))return e}function fP(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function pP(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mP(e,t){return dP(e)||fP(e,t)||dN(e,t)||pP()}function hP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function gP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?hP(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hP(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _P(e){var t=null,n=null;function r(e){n&&e.removeConnectionView(n),t=null,n=null}function i(e){r(e),n=`pseudo_${$M()}`}return{isMounted:function(){return!!n},mount:i,render:function(r,i,a){var o=i.x,s=i.y,c=a.side===`output`,l={x:o+(c?-3:3),y:s};if(!n)throw Error(`pseudo connection id wasn't generated`);var u=gP(c?{id:n,source:a.nodeId,sourceOutput:a.key,target:``,targetInput:``}:{id:n,target:a.nodeId,targetInput:a.key,source:``,sourceOutput:``},e??{});t||=r.addConnectionView(u).element,t&&r.emit({type:`render`,data:gP({element:t,type:`connection`,payload:u},c?{end:l}:{start:l})})},unmount:r}}function vP(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=yP(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function yP(e,t){if(e){if(typeof e==`string`)return bP(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?bP(e,t):void 0}}function bP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function xP(e,t){var n=vP(t),r;try{for(n.s();!(r=n.n()).done;){var i=r.value,a=e.get(i);if(a)return a}}catch(e){n.e(e)}finally{n.f()}}function SP(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=n.elementsFromPoint(e,t),i=r[0]?.shadowRoot;return i&&i!==n&&r.unshift.apply(r,pN(SP(e,t,i))),r}var CP=function(){function e(){X(this,e)}return Z(e,[{key:`setContext`,value:function(e){this.context=e}}])}();function wP(e,t){var n=e.side===`output`&&t.side===`input`,r=e.side===`input`&&t.side===`output`,i=mP(n?[e,t]:r?[t,e]:[],2),a=i[0],o=i[1];if(a&&o)return[a,o]}function TP(e,t){return!!wP(e,t)}function EP(e,t,n){var r=mP(wP(e,t)||[null,null],2),i=r[0],a=r[1];if(i&&a)return n.editor.addConnection({id:$M(),source:i.nodeId,sourceOutput:i.key,target:a.nodeId,targetInput:a.key}),!0}function DP(e,t){var n=t.getNode(e.nodeId);if(!n)throw Error(`cannot find node`);return(e.side===`input`?n.inputs:n.outputs)[e.key]}function OP(e,t){var n=e.nodeId,r=e.side,i=e.key;return t.getConnections().filter(function(e){if(r===`input`)return e.target===n&&e.targetInput===i;if(r===`output`)return e.source===n&&e.sourceOutput===i})}function kP(e,t){var n=e.map(function(e){return DP(e,t)?.multipleConnections?[]:OP(e,t)}).flat();return{commit:function(){Array.from(new Set(n.map(function(e){return e.id}))).forEach(function(e){t.removeConnection(e)})}}}function AP(e,t,n){return t=DM(t),EM(e,jP()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function jP(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jP=function(){return!!e})()}var MP=function(e){function t(e,n){var r;return X(this,t),r=AP(this,t),r.initial=e,r.params=n,r}return kM(t,e),Z(t,[{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.socket,this.params.canMakeConnection(this.initial,r)&&(kP([this.initial,r],n.editor).commit(),i=this.params.makeConnection(this.initial,r,n),this.drop(n,i?r:null,i));case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`drop`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.initial&&e.scope.emit({type:`connectiondrop`,data:{initial:this.initial,socket:t,created:n}}),this.context.switchTo(new PP(this.params))}}])}(CP),NP=function(e){function t(e,n,r){var i;X(this,t),i=AP(this,t),i.connection=e,i.params=n;var a=Array.from(r.socketsCache.values()).find(function(e){return e.nodeId===i.connection.source&&e.side===`output`&&e.key===i.connection.sourceOutput});if(!a)throw Error(`cannot find output socket`);return i.outputSocket=a,i}return kM(t,e),Z(t,[{key:`init`,value:function(){var e=Y($.default.mark(function e(t){var n=this;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.scope.emit({type:`connectionpick`,data:{socket:this.outputSocket}}).then(function(e){e?(t.editor.removeConnection(n.connection.id),n.initial=n.outputSocket):n.drop(t)});case 1:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a,o,s,c;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.socket,i=t.event,this.initial&&(r.side!==`input`||this.connection.target!==r.nodeId||this.connection.targetInput!==r.key)?this.params.canMakeConnection(this.initial,r)&&(kP([this.initial,r],n.editor).commit(),a=this.params.makeConnection(this.initial,r,n),o=a?r:null,this.drop(n,o,a)):i===`down`&&this.initial&&(kP([this.initial,r],n.editor).commit(),s=this.params.makeConnection(this.initial,r,n),c=s?null:r,this.drop(n,c,s));case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`drop`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.initial&&e.scope.emit({type:`connectiondrop`,data:{initial:this.initial,socket:t,created:n}}),this.context.switchTo(new PP(this.params))}}])}(CP),PP=function(e){function t(e){var n;return X(this,t),n=AP(this,t),n.params=e,n}return kM(t,e),Z(t,[{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.socket,i=t.event,i===`down`){e.next=3;break}return e.abrupt(`return`);case 3:if(r.side!==`input`){e.next=11;break}if(a=n.editor.getConnections().find(function(e){return e.target===r.nodeId&&e.targetInput===r.key}),!a){e.next=11;break}return o=new NP(a,this.params,n),e.next=9,o.init(n);case 9:return this.context.switchTo(o),e.abrupt(`return`);case 11:return e.next=13,n.scope.emit({type:`connectionpick`,data:{socket:r}});case 13:if(!e.sent){e.next=17;break}this.context.switchTo(new MP(r,this.params)),e.next=18;break;case 17:this.drop(n);case 18:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`drop`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.initial&&e.scope.emit({type:`connectiondrop`,data:{initial:this.initial,socket:t,created:n}}),delete this.initial}}])}(CP),FP=function(){function e(t){X(this,e);var n=t?.canMakeConnection||TP,r=t?.makeConnection||EP;this.switchTo(new PP({canMakeConnection:n,makeConnection:r}))}return Z(e,[{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.currentState.pick(t,n);case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`getPickedSocket`,value:function(){return this.currentState.initial}},{key:`switchTo`,value:function(e){e.setContext(this),this.currentState=e}},{key:`drop`,value:function(e){this.currentState.drop(e)}}])}();function IP(){return function(){return new FP}}var LP=Object.freeze({__proto__:null,classic:Object.freeze({__proto__:null,setup:IP})});function RP(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=zP(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function zP(e,t){if(e){if(typeof e==`string`)return BP(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?BP(e,t):void 0}}function BP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function VP(e,t,n){return t=DM(t),EM(e,HP()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function HP(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(HP=function(){return!!e})()}function UP(e,t,n,r){var i=uP(DM(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var WP=function(e){function t(){var e;return X(this,t),e=VP(this,t,[`connection`]),Q(e,`presets`,[]),Q(e,`currentFlow`,null),Q(e,`preudoconnection`,_P({isPseudo:!0})),Q(e,`socketsCache`,new Map),e}return kM(t,e),Z(t,[{key:`addPreset`,value:function(e){this.presets.push(e)}},{key:`findPreset`,value:function(e){var t=RP(this.presets),n;try{for(t.s();!(n=t.n()).done;){var r=n.value,i=r(e);if(i)return i}}catch(e){t.e(e)}finally{t.f()}return null}},{key:`update`,value:function(){if(this.currentFlow){var e=this.currentFlow.getPickedSocket();e&&this.preudoconnection.render(this.areaPlugin,this.areaPlugin.area.pointer,e)}}},{key:`drop`,value:function(){var e={editor:this.editor,scope:this,socketsCache:this.socketsCache};this.currentFlow&&=(this.currentFlow.drop(e),this.preudoconnection.unmount(this.areaPlugin),null)}},{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r={editor:this.editor,scope:this,socketsCache:this.socketsCache},i=SP(t.clientX,t.clientY),a=xP(this.socketsCache,i),!a){e.next=13;break}if(t.preventDefault(),t.stopPropagation(),this.currentFlow=this.currentFlow||this.findPreset(a),!this.currentFlow){e.next=11;break}return e.next=10,this.currentFlow.pick({socket:a,event:n},r);case 10:this.preudoconnection.mount(this.areaPlugin);case 11:e.next=14;break;case 13:this.currentFlow&&this.currentFlow.drop(r);case 14:this.currentFlow&&!this.currentFlow.getPickedSocket()&&(this.preudoconnection.unmount(this.areaPlugin),this.currentFlow=null),this.update();case 16:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`setParent`,value:function(e){var n=this;UP(t,`setParent`,this,3)([e]),this.areaPlugin=this.parentScope(MN),this.editor=this.areaPlugin.parentScope(ZM);var r=function(e){n.pick(e,`down`)};this.addPipe(function(e){if(!e||xM(e)!==`object`||!(`type`in e))return e;if(e.type===`pointermove`)n.update();else if(e.type===`pointerup`)n.pick(e.data.event,`up`);else if(e.type===`render`){if(e.data.type===`socket`){var t=e.data.element;t.addEventListener(`pointerdown`,r),n.socketsCache.set(t,e.data)}}else if(e.type===`unmount`){var i=e.data.element;i.removeEventListener(`pointerdown`,r),n.socketsCache.delete(i)}return e})}}])}(GM);function GP(e,t){var n=mP(e,2),r=n[0],i=r.x,a=r.y,o=n[1],s=o.x,c=o.y,l=Math.abs(a-c);return`M ${i} ${a} C ${i+Math.max(l/2,Math.abs(s-i))*t} ${a} ${s-Math.max(l/2,Math.abs(s-i))*t} ${c} ${s} ${c}`}function KP(e,t,n){var r=mP(e,2),i=r[0],a=i.x,o=i.y,s=r[1],c=s.x,l=s.y,u=l>o?1:-1,d=n+Math.abs(a-c)/(n/2),f=(a+c)/2,p=o-u*d,m=(l-o)*t;return`
        M ${a} ${o}
        C ${a+d} ${o}
        ${a+d} ${p-m}
        ${f} ${p}
        C ${c-d} ${p+m}
        ${c-d} ${l}
        ${c} ${l}
    `}function qP(e,t){return JP.apply(this,arguments)}function JP(){return JP=Y($.default.mark(function e(t,n){var r,i,a,o,s;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.offsetParent){e.next=5;break}return e.next=3,new Promise(function(e){return setTimeout(e,0)});case 3:e.next=0;break;case 5:if(r=t.offsetLeft,i=t.offsetTop,a=t.offsetParent,a){e.next=10;break}throw Error(`child has null offsetParent`);case 10:for(;a!==null&&a!==n;)r+=a.offsetLeft+a.clientLeft,i+=a.offsetTop+a.clientTop,a=a.offsetParent;return o=t.offsetWidth,s=t.offsetHeight,e.abrupt(`return`,{x:r+o/2,y:i+s/2});case 14:case`end`:return e.stop()}},e)})),JP.apply(this,arguments)}var YP=function(){function e(){X(this,e),Q(this,`listeners`,new Set)}return Z(e,[{key:`emit`,value:function(e){this.listeners.forEach(function(t){t(e)})}},{key:`listen`,value:function(e){var t=this;return this.listeners.add(e),function(){t.listeners.delete(e)}}}])}(),XP=function(){function e(){X(this,e),Q(this,`elements`,new Map)}return Z(e,[{key:`getPosition`,value:function(e){var t=Array.from(this.elements.values()).flat().filter(function(t){return t.side===e.side&&t.nodeId===e.nodeId&&t.key===e.key});return t.length>1&&console.warn([`Found more than one element for socket with same key and side.`,`Probably it was not unmounted correctly`].join(` `),e),t.pop()?.position??null}},{key:`add`,value:function(e){var t=this.elements.get(e.element);this.elements.set(e.element,t?[].concat(pN(t.filter(function(t){return t.nodeId!==e.nodeId||t.key!==e.key||t.side!==e.side})),[e]):[e])}},{key:`remove`,value:function(e){this.elements.delete(e)}},{key:`snapshot`,value:function(){return Array.from(this.elements.values()).flat()}}])}(),ZP=function(){function e(){X(this,e),Q(this,`sockets`,new XP),Q(this,`emitter`,new YP),Q(this,`area`,null)}return Z(e,[{key:`attach`,value:function(e){var t=this;this.area||e.hasParent()&&(this.area=e.parentScope(MN),this.area.addPipe(function(){var e=Y($.default.mark(function e(n){var r,i,a,o,s,c,l,u,d,f,p;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.type!==`rendered`||n.data.type!==`socket`){e.next=8;break}return r=n.data,i=r.nodeId,a=r.key,o=r.side,s=r.element,e.next=4,t.calculatePosition(i,o,a,s);case 4:c=e.sent,c&&(t.sockets.add({nodeId:i,key:a,side:o,element:s,position:c}),t.emitter.emit({nodeId:i,key:a,side:o})),e.next=24;break;case 8:if(n.type!==`unmount`){e.next=12;break}t.sockets.remove(n.data.element),e.next=24;break;case 12:if(n.type!==`nodetranslated`){e.next=16;break}t.emitter.emit({nodeId:n.data.id}),e.next=24;break;case 16:if(n.type!==`noderesized`){e.next=23;break}return l=n.data.id,e.next=20,Promise.all(t.sockets.snapshot().filter(function(e){return e.nodeId===n.data.id&&e.side===`output`}).map(function(){var e=Y($.default.mark(function e(n){var r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.side,i=n.key,a=n.element,e.next=3,t.calculatePosition(l,r,i,a);case 3:o=e.sent,o&&(n.position=o);case 5:case`end`:return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 20:t.emitter.emit({nodeId:l}),e.next=24;break;case 23:n.type===`render`&&n.data.type===`connection`&&(u=n.data.payload,d=u.source,f=u.target,p=d||f,t.emitter.emit({nodeId:p}));case 24:return e.abrupt(`return`,n);case 25:case`end`:return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}},{key:`listen`,value:function(e,t,n,r){var i=this,a=this.emitter.listen(function(a){if(a.nodeId===e&&(!a.key||a.side===t)&&(!a.side||a.key===n)){var o=i.sockets.getPosition({side:t,nodeId:e,key:n});if(!o)return;var s=o.x,c=o.y,l=i.area?.nodeViews.get(e);l&&r({x:s+l.position.x,y:c+l.position.y})}});return this.sockets.snapshot().forEach(function(t){t.nodeId===e&&i.emitter.emit(t)}),a}}])}();function QP(e,t,n){return t=DM(t),EM(e,$P()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function $P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($P=function(){return!!e})()}var eF=function(e){function t(e){var n;return X(this,t),n=QP(this,t),n.props=e,n}return kM(t,e),Z(t,[{key:`calculatePosition`,value:function(){var e=Y($.default.mark(function e(t,n,r,i){var a,o,s;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.area?.nodeViews.get(t),o!=null&&o.element){e.next=3;break}return e.abrupt(`return`,null);case 3:return e.next=5,qP(i,o.element);case 5:if(s=e.sent,!((a=this.props)!=null&&a.offset)){e.next=8;break}return e.abrupt(`return`,this.props.offset(s,t,n,r));case 8:return e.abrupt(`return`,{x:s.x+12*(n===`input`?-1:1),y:s.y});case 9:case`end`:return e.stop()}},e,this)}));function t(t,n,r,i){return e.apply(this,arguments)}return t}()}])}(ZP);function tF(e){return new eF(e)}function nF(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}function rF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function iF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function aF(e,t,n,r,i){var a=j(on(n)),o={render:function(){return B(t,iF(iF({},a.value),{},{seed:Math.random()}))},mounted:function(){r()},updated:function(){r()}},s=i!=null&&i.setup?i.setup(o):ls(o);return s.mount(e),{app:s,payload:a}}function oF(e,t){e.payload.value=on(iF(iF({},e.payload.value),t))}function sF(e){e.app.unmount()}function cF(e){var t=new Map;return{get:function(e){return t.get(e)},mount:function(n,r,i,a){var o=aF(n,r,i,a,e);return t.set(n,o),o},update:function(e,t){oF(e,t)},unmount:function(e){var n=t.get(e);n&&(sF(n),t.delete(e))}}}var lF={"data-testid":`connection`},uF=[`d`];function dF(e,t,n,r,i,a){return I(),L(`svg`,lF,[R(`path`,{d:n.path},null,8,uF)])}nF(`/*! https://github.com/retejs/connection-plugin/commit/206ca0fd7fb82801ac45a0f7180ae05dff9ed901 */
svg[data-v-fee8858e] {
  overflow: visible !important;
  position: absolute;
  pointer-events: none;
  width: 9999px;
  height: 9999px;
}
svg[data-v-fee8858e] path[data-v-fee8858e] {
  fill: none;
  stroke-width: 5px;
  stroke: steelblue;
  pointer-events: auto;
}`);var fF=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},pF=fF({props:[`data`,`start`,`end`,`path`]},[[`render`,dF],[`__scopeId`,`data-v-fee8858e`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Connection.vue`]]);function mF(e,t,n,r,i,a){return I(),xa(Jr(n.component),{data:n.data,start:a.startPosition,end:a.endPosition,path:i.observedPath},null,8,[`data`,`start`,`end`,`path`])}var hF=fF({props:[`component`,`data`,`start`,`end`,`path`],data(){return{observedStart:{x:0,y:0},observedEnd:{x:0,y:0},observedPath:``,onDestroy:null}},computed:{startPosition(){return this.start&&`x`in this.start?this.start:this.observedStart},endPosition(){return this.end&&`x`in this.end?this.end:this.observedEnd}},watch:{startPosition(){this.fetchPath()},endPosition(){this.fetchPath()}},methods:{async fetchPath(){this.startPosition&&this.endPosition&&(this.observedPath=await this.path(this.startPosition,this.endPosition))}},created(){let e=typeof this.start==`function`&&this.start(e=>{this.observedStart=e}),t=typeof this.end==`function`&&this.end(e=>{this.observedEnd=e});this.onDestroy=()=>{e&&e(),t&&t()}},destroyed(){this.onDestroy&&this.onDestroy()}},[[`render`,mF],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/ConnectionWrapper.vue`]]),gF=[`type`,`value`,`readonly`];function _F(e,t,n,r,i,a){return I(),L(`input`,{type:n.data.type,value:n.data.value,readonly:n.data.readonly,onInput:t[0]||=(...e)=>a.change&&a.change(...e),onPointerdown:t[1]||=as(()=>{},[`stop`])},null,40,gF)}nF(`input[data-v-a4adbbb3] {
  width: 100%;
  border-radius: 30px;
  background-color: white;
  color: black;
  padding: 2px 6px;
  border: 1px solid #999;
  font-size: 110%;
  box-sizing: border-box;
}`);var vF=fF({props:[`data`],methods:{change(e){let t=this.data.type===`number`?+e.target.value:e.target.value;this.data.setValue(t)}}},[[`render`,_F],[`__scopeId`,`data-v-a4adbbb3`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Control.vue`]]);function yF(e,t,n,r,i,a){return I(),L(`div`,Pa(e.$props,{ref:`element`}),null,16)}var bF=fF({props:[`data`,`emit`],mounted(){this.emit({type:`render`,data:{...this.data,element:this.$refs.element}})},beforeDestroy(){this.emit({type:`unmount`,data:{element:this.$refs.element}})},beforeUnmount(){this.emit({type:`unmount`,data:{element:this.$refs.element}})}},[[`render`,yF],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/Ref.vue`]]),xF={class:`title`,"data-testid":`title`},SF=[`data-testid`],CF={class:`output-title`,"data-testid":`output-title`},wF=[`data-testid`];function TF(e,t,n,r,i,a){let o=Kr(`Ref`);return I(),L(`div`,{class:Ce([`node`,{selected:n.data.selected}]),style:ve(a.nodeStyles()),"data-testid":`node`},[R(`div`,xF,A(n.data.label),1),Aa(` Outputs`),(I(!0),L(F,null,P(a.outputs(),([e,t])=>(I(),L(`div`,{class:`output`,key:`output`+e+n.seed,"data-testid":`output-`+e},[R(`div`,CF,A(t.label),1),z(o,{class:`output-socket`,data:{type:`socket`,side:`output`,key:e,nodeId:n.data.id,payload:t.socket},emit:n.emit,"data-testid":`output-socket`},null,8,[`data`,`emit`])],8,SF))),128)),Aa(` Controls`),(I(!0),L(F,null,P(a.controls(),([e,t])=>(I(),xa(o,{class:`control`,key:`control`+e+n.seed,"data-testid":`control-`+e,emit:n.emit,data:{type:`control`,payload:t}},null,8,[`data-testid`,`emit`,`data`]))),128)),Aa(` Inputs`),(I(!0),L(F,null,P(a.inputs(),([e,t])=>(I(),L(`div`,{class:`input`,key:`input`+e+n.seed,"data-testid":`input-`+e},[z(o,{class:`input-socket`,data:{type:`socket`,side:`input`,key:e,nodeId:n.data.id,payload:t.socket},emit:n.emit,"data-testid":`input-socket`},null,8,[`data`,`emit`]),qn(R(`div`,{class:`input-title`,"data-testid":`input-title`},A(t.label),513),[[_o,!t.control||!t.showControl]]),qn(z(o,{class:`input-control`,emit:n.emit,data:{type:`control`,payload:t.control},"data-testid":`input-control`},null,8,[`emit`,`data`]),[[_o,t.control&&t.showControl]])],8,wF))),128))],6)}nF(`.node[data-v-cc6bc301] {
  background: rgba(110, 136, 255, 0.8);
  border: 2px solid #4e58bf;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  width: 180px;
  height: auto;
  padding-bottom: 6px;
  position: relative;
  user-select: none;
  line-height: initial;
  font-family: Arial;
}
.node[data-v-cc6bc301][data-v-cc6bc301]:hover {
  background: rgba(130, 153, 255, 0.8);
}
.node[data-v-cc6bc301].selected[data-v-cc6bc301] {
  background: #ffd92c;
  border-color: #e3c000;
}
.node[data-v-cc6bc301] .title[data-v-cc6bc301] {
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  padding: 8px;
}
.node[data-v-cc6bc301] .output[data-v-cc6bc301] {
  text-align: right;
}
.node[data-v-cc6bc301] .input[data-v-cc6bc301] {
  text-align: left;
}
.node[data-v-cc6bc301] .output-socket[data-v-cc6bc301] {
  text-align: right;
  margin-right: -18px;
  display: inline-block;
}
.node[data-v-cc6bc301] .input-socket[data-v-cc6bc301] {
  text-align: left;
  margin-left: -18px;
  display: inline-block;
}
.node[data-v-cc6bc301] .input-title[data-v-cc6bc301],
.node[data-v-cc6bc301] .output-title[data-v-cc6bc301] {
  vertical-align: middle;
  color: white;
  display: inline-block;
  font-family: sans-serif;
  font-size: 14px;
  margin: 6px;
  line-height: 24px;
}
.node[data-v-cc6bc301] .input-control[data-v-cc6bc301] {
  z-index: 1;
  width: calc(100% - 36px);
  vertical-align: middle;
  display: inline-block;
}
.node[data-v-cc6bc301] .control[data-v-cc6bc301] {
  padding: 6px 18px;
}`);function EF(e){return e.sort((e,t)=>(e[1]&&e[1].index||0)-(t[1]&&t[1].index||0)),e}var DF=fF({props:[`data`,`emit`,`seed`],methods:{nodeStyles(){return{width:Number.isFinite(this.data.width)?`${this.data.width}px`:``,height:Number.isFinite(this.data.height)?`${this.data.height}px`:``}},inputs(){return EF(Object.entries(this.data.inputs))},controls(){return EF(Object.entries(this.data.controls))},outputs(){return EF(Object.entries(this.data.outputs))}},components:{Ref:bF}},[[`render`,TF],[`__scopeId`,`data-v-cc6bc301`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Node.vue`]]),OF=[`title`];function kF(e,t,n,r,i,a){return I(),L(`div`,{class:`socket`,title:n.data.name},null,8,OF)}nF(`.socket[data-v-4a0a4b7f] {
  display: inline-block;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  margin: 6px;
  vertical-align: middle;
  background: #96b38a;
  z-index: 2;
  box-sizing: border-box;
}
.socket[data-v-4a0a4b7f][data-v-4a0a4b7f]:hover {
  border-width: 4px;
}
.socket[data-v-4a0a4b7f].multiple[data-v-4a0a4b7f] {
  border-color: yellow;
}
.socket[data-v-4a0a4b7f].output[data-v-4a0a4b7f] {
  margin-right: -12px;
}
.socket[data-v-4a0a4b7f].input[data-v-4a0a4b7f] {
  margin-left: -12px;
}`);var AF=fF({props:[`data`]},[[`render`,kF],[`__scopeId`,`data-v-4a0a4b7f`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Socket.vue`]]);function jF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function MF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?jF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function NF(e){var t=e?.socketPositionWatcher===void 0?tF():e.socketPositionWatcher,n=e?.customize??{},r=n.node,i=n.connection,a=n.socket,o=n.control;return{attach:function(e){t.attach(e)},update:function(e,t){var n=e.data.payload,r=t.parentScope();if(!r)throw Error(`parent`);var i=r.emit.bind(r);if(e.data.type===`node`)return{data:n,emit:i};if(e.data.type===`connection`){var a=e.data,o=a.start,s=a.end;return MF(MF({data:n},o?{start:o}:{}),s?{end:s}:{})}return{data:n}},render:function(e,n){var s=n.parentScope(),c=s.emit.bind(s);if(e.data.type===`node`){var l=r?r(e.data):DF;return l&&{component:l,props:{data:e.data.payload,emit:c}}}if(e.data.type===`connection`){var u=i?i(e.data):pF,d=e.data.payload,f=d.source,p=d.target,m=d.sourceOutput,h=d.targetInput;return u&&{component:hF,props:{data:e.data.payload,component:u,start:e.data.start??function(e){return t.listen(f,`output`,m,e)},end:e.data.end??function(e){return t.listen(p,`input`,h,e)},path:function(){var e=Y($.default.mark(function e(t,r){var i,a,o,s,c;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.emit({type:`connectionpath`,data:{payload:d,points:[t,r]}});case 2:if(i=e.sent,i){e.next=5;break}return e.abrupt(`return`,``);case 5:if(a=i.data,o=a.path,s=a.points,c=.3,o||s.length===2){e.next=9;break}throw Error(`cannot render connection with a custom number of points`);case 9:if(o){e.next=11;break}return e.abrupt(`return`,d.isLoop?KP(s,c,120):GP(s,c));case 11:return e.abrupt(`return`,o);case 12:case`end`:return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()}}}if(e.data.type===`socket`){var g=e.data.payload;return{component:a?a(e.data):AF,props:{data:g}}}if(e.data.type===`control`){var _=e.data.payload;if(o){var v=o(e.data);return v&&{component:v,props:{data:_}}}return e.data.payload instanceof sN.InputControl?{component:vF,props:{data:_}}:null}}}}var PF=Object.freeze({__proto__:null,setup:NF,Connection:pF,Control:vF,Node:DF,Socket:AF}),FF={class:`block`};function IF(e,t){return I(),L(`div`,FF,[Zr(e.$slots,`default`,{},void 0,!0)])}nF(`.block[data-v-e9c17765] {
  color: #fff;
  padding: 4px;
  border-bottom: 1px solid rgba(69, 103, 255, 0.8);
  background-color: rgba(110, 136, 255, 0.8);
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  position: relative;
}
.block[data-v-e9c17765][data-v-e9c17765]:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.block[data-v-e9c17765][data-v-e9c17765]:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.block[data-v-e9c17765][data-v-e9c17765]:hover {
  background-color: rgba(130, 153, 255, 0.8);
}`);var LF=fF({},[[`render`,IF],[`__scopeId`,`data-v-e9c17765`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Block.vue`]]),RF=[`value`];function zF(e,t,n,r,i,a){return I(),L(`input`,{class:`search`,value:n.text,onInput:t[0]||=t=>e.$emit(`change`,t.target.value),"data-testid":`context-menu-search-input`},null,40,RF)}nF(`.search[data-v-3253b3e6] {
  color: white;
  padding: 1px 8px;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 16px;
  font-family: serif;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
}`);var BF=fF({props:[`text`]},[[`render`,zF],[`__scopeId`,`data-v-3253b3e6`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Search.vue`]]);function VF(e,t){return{timeout:null,cancel:function(){this.timeout&&=(window.clearTimeout(this.timeout),null)},call:function(){this.timeout=window.setTimeout(function(){t()},e)}}}var HF={key:0,class:`subitems`};function UF(e,t,n,r,i,a){let o=Kr(`Item`,!0),s=Kr(`Block`);return I(),xa(s,{class:Ce([`block`,{hasSubitems:n.subitems}]),"data-testid":`context-menu-item`},{default:Kn(()=>[R(`div`,{class:`content`,onClick:t[1]||=as(t=>{e.$emit(`select`,t),e.$emit(`hide`)},[`stop`]),onWheel:t[2]||=as(()=>{},[`stop`]),onPointerover:t[3]||=e=>{i.hide.cancel(),i.visibleSubitems=!0},onPointerleave:t[4]||=e=>i.hide.call(),onPointerdown:t[5]||=as(()=>{},[`stop`])},[Zr(e.$slots,`default`,{},void 0,!0),n.subitems&&i.visibleSubitems?(I(),L(`div`,HF,[(I(!0),L(F,null,P(n.subitems,r=>(I(),xa(o,{key:r.key,onSelect:e=>r.handler(e),delay:n.delay,onHide:t[0]||=t=>e.$emit(`hide`),subitems:r.subitems},{default:Kn(()=>[ka(A(r.label),1)]),_:2},1032,[`onSelect`,`delay`,`subitems`]))),128))])):Aa(`v-if`,!0)],32)]),_:3},8,[`class`])}nF(`@charset "UTF-8";
.block[data-v-fc3b2bca] {
  padding: 0;
}

.content[data-v-fc3b2bca] {
  padding: 4px;
}

.hasSubitems[data-v-fc3b2bca][data-v-fc3b2bca]:after {
  content: "►";
  position: absolute;
  opacity: 0.6;
  right: 5px;
  top: 5px;
}

.subitems[data-v-fc3b2bca] {
  position: absolute;
  top: 0;
  left: 100%;
  width: 120px;
}`);var WF=fF({name:`Item`,props:[`subitems`,`delay`],data(){return{visibleSubitems:!1,hide:VF(this.delay,this.hideSubitems)}},methods:{hideSubitems(){this.visibleSubitems=!1}},components:{Block:LF}},[[`render`,UF],[`__scopeId`,`data-v-fc3b2bca`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Item.vue`]]);function GF(e,t,n,r,i,a){let o=Kr(`Search`),s=Kr(`Block`),c=Kr(`Item`);return I(),L(`div`,{class:`menu`,onMouseover:t[2]||=e=>i.hide.cancel(),onMouseleave:t[3]||=e=>i.hide.call(),"data-testid":`context-menu`,"rete-context-menu":``},[n.searchBar?(I(),xa(s,{key:0},{default:Kn(()=>[z(o,{text:i.filter,onChange:t[0]||=e=>i.filter=e},null,8,[`text`])]),_:1})):Aa(`v-if`,!0),(I(!0),L(F,null,P(a.getItems(),e=>(I(),xa(c,{key:e.key,onSelect:t=>e.handler(t),delay:n.delay,onHide:t[1]||=e=>n.onHide(),subitems:e.subitems},{default:Kn(()=>[ka(A(e.label),1)]),_:2},1032,[`onSelect`,`delay`,`subitems`]))),128))],32)}nF(`.menu[data-v-2571168d] {
  padding: 10px;
  width: 120px;
  margin-top: -20px;
  margin-left: -60px;
}`);var KF=fF({props:[`items`,`delay`,`searchBar`,`onHide`,`seed`],data(){return{filter:``,hide:VF(this.delay,this.onHide)}},methods:{getItems(){let e=new RegExp(this.filter,`i`);return this.items.filter(t=>t.label.match(e))}},unmounted(){this.hide&&this.hide.cancel()},components:{Block:LF,Search:BF,Item:WF}},[[`render`,GF],[`__scopeId`,`data-v-2571168d`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Menu.vue`]]);function qF(e){var t=e?.delay===void 0?1e3:e.delay;return{update:function(e){if(e.data.type===`contextmenu`)return{items:e.data.items,delay:t,searchBar:e.data.searchBar,onHide:e.data.onHide}},render:function(e){if(e.data.type===`contextmenu`)return{component:KF,props:{items:e.data.items,delay:t,searchBar:e.data.searchBar,onHide:e.data.onHide}}}}}var JF=Object.freeze({__proto__:null,setup:qF});function YF(e){return`${e}px`}function XF(e,t,n,r,i,a){return I(),L(`div`,{class:`mini-node`,style:ve(a.styles),"data-testid":`minimap-node`},null,4)}nF(`.mini-node[data-v-2d96711d] {
  position: absolute;
  background: rgba(110, 136, 255, 0.8);
  border: 1px solid rgba(192, 206, 212, 0.6);
}`);var ZF=fF({props:[`left`,`top`,`width`,`height`],computed:{styles(){return{left:YF(this.left),top:YF(this.top),width:YF(this.width),height:YF(this.height)}}}},[[`render`,XF],[`__scopeId`,`data-v-2d96711d`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/minimap/MiniNode.vue`]]);function QF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?QF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):QF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eI(e,t){return{start:function(n){var r=$F({},t(n));function i(n){var i=$F({},t(n)),a=i.x-r.x,o=i.y-r.y;r=i,e(a,o)}function a(){window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a)}window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}}}function tI(e,t,n,r,i,a){return I(),L(`div`,{class:`mini-viewport`,onPointerdown:t[0]||=as(e=>i.drag.start(e),[`stop`]),style:ve(a.styles),"data-testid":`minimap-viewport`},null,36)}nF(`.mini-viewport[data-v-ed5fcf61] {
  position: absolute;
  background: rgba(255, 251, 128, 0.32);
  border: 1px solid #ffe52b;
}`);var nI=fF({props:[`left`,`top`,`width`,`height`,`containerWidth`,`translate`],data(){return{drag:eI(this.onDrag,e=>({x:e.pageX,y:e.pageY}))}},methods:{scale(e){return e*this.containerWidth},invert(e){return e/this.containerWidth},onDrag(e,t){this.translate(this.invert(-e),this.invert(-t))}},computed:{styles(){return{left:YF(this.scale(this.left)),top:YF(this.scale(this.top)),width:YF(this.scale(this.width)),height:YF(this.scale(this.height))}}}},[[`render`,tI],[`__scopeId`,`data-v-ed5fcf61`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/minimap/MiniViewport.vue`]]);function rI(e,t,n,r,i,a){let o=Kr(`MiniNode`),s=Kr(`MiniViewport`);return I(),L(`div`,{class:`minimap`,ref:`container`,style:ve({width:a.px(n.size*n.ratio),height:a.px(n.size)}),onPointerdown:t[0]||=as(()=>{},[`stop`,`prevent`]),onDblclick:t[1]||=as(e=>a.dblclick(e),[`stop`,`prevent`]),"data-testid":`minimap`},[(I(!0),L(F,null,P(n.nodes,(e,t)=>(I(),xa(o,{key:[t,e.left].join(`_`),left:a.scale(e.left),top:a.scale(e.top),width:a.scale(e.width),height:a.scale(e.height)},null,8,[`left`,`top`,`width`,`height`]))),128)),z(s,{left:n.viewport.left,top:n.viewport.top,width:n.viewport.width,height:n.viewport.height,containerWidth:e.$refs.container&&e.$refs.container.clientWidth,translate:n.translate},null,8,[`left`,`top`,`width`,`height`,`containerWidth`,`translate`])],36)}nF(`.minimap[data-v-403730b0] {
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: rgba(229, 234, 239, 0.65);
  padding: 20px;
  overflow: hidden;
  border: 1px solid #b1b7ff;
  border-radius: 8px;
  box-sizing: border-box;
}`);var iI=fF({props:{size:Number,ratio:Number,nodes:Array,viewport:Object,translate:Function,point:Function,seed:Number},methods:{dblclick(e){if(!this.$refs.container)return;let t=this.$refs.container.getBoundingClientRect(),n=(e.clientX-t.left)/(this.size*this.ratio),r=(e.clientY-t.top)/(this.size*this.ratio);this.point(n,r)},px:YF,scale(e){return this.$refs.container?e*this.$refs.container.clientWidth:0}},components:{MiniNode:ZF,MiniViewport:nI}},[[`render`,rI],[`__scopeId`,`data-v-403730b0`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/minimap/Minimap.vue`]]);function aI(e){return{update:function(t){if(t.data.type===`minimap`)return{nodes:t.data.nodes,size:e?.size??200,ratio:t.data.ratio,viewport:t.data.viewport,translate:t.data.translate,point:t.data.point}},render:function(t){if(t.data.type===`minimap`)return{component:iI,props:{nodes:t.data.nodes,size:e?.size??200,ratio:t.data.ratio,viewport:t.data.viewport,translate:t.data.translate,point:t.data.point}}}}}var oI=Object.freeze({__proto__:null,setup:aI});function sI(e,t,n,r,i,a){return I(),L(`div`,{class:Ce([`pin`,{selected:n.selected}]),onPointerdown:t[0]||=as(t=>{i.drag.start(t),e.$emit(`down`)},[`stop`,`prevent`]),onContextmenu:t[1]||=as(t=>e.$emit(`menu`),[`stop`,`prevent`]),style:ve(a.style),"data-testid":`pin`},null,38)}nF(`.pin[data-v-42b064e9] {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  background: steelblue;
  border: 2px solid white;
  border-radius: 20px;
}
.pin[data-v-42b064e9].selected[data-v-42b064e9] {
  background: #ffd92c;
}`);var cI=20,lI=fF({props:[`position`,`selected`,`getPointer`],data(){return{drag:eI(this.onDrag,this.getPointer)}},computed:{style(){let{x:e,y:t}=this.position;return{position:`absolute`,top:`${t-cI/2}px`,left:`${e-cI/2}px`}}},methods:{onDrag(e,t){this.$emit(`translate`,{dx:e,dy:t})}}},[[`render`,sI],[`__scopeId`,`data-v-42b064e9`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/reroute/Pin.vue`]]),uI={class:`pins`};function dI(e,t,n,r,i,a){let o=Kr(`Pin`);return I(),L(`div`,uI,[(I(!0),L(F,null,P(n.pins,e=>(I(),xa(o,{key:e.id,position:e.position,selected:e.selected,getPointer:n.getPointer,onMenu:t=>n.menu(e.id),onTranslate:t=>n.translate(e.id,t.dx,t.dy),onDown:t=>n.down(e.id)},null,8,[`position`,`selected`,`getPointer`,`onMenu`,`onTranslate`,`onDown`]))),128))])}var fI=fF({props:[`pins`,`menu`,`translate`,`down`,`seed`,`getPointer`],components:{Pin:lI}},[[`render`,dI],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/reroute/Pins.vue`]]);function pI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function mI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pI(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function hI(e){var t=function(){return{menu:e?.contextMenu??function(){return null},translate:e?.translate??function(){return null},down:e?.pointerdown??function(){return null}}};return{update:function(e){if(e.data.type===`reroute-pins`)return mI(mI({},t()),{},{pins:e.data.data.pins})},render:function(e,n){if(e.data.type===`reroute-pins`){var r=n.parentScope(MN);return{component:fI,props:mI(mI({},t()),{},{getPointer:function(){return r.area.pointer},pins:e.data.data.pins})}}}}}var gI=Object.freeze({__proto__:null,classic:PF,contextMenu:JF,minimap:oI,reroute:Object.freeze({__proto__:null,setup:hI})});function _I(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=vI(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function vI(e,t){if(e){if(typeof e==`string`)return yI(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yI(e,t):void 0}}function yI(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function bI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function xI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?bI(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function SI(e,t,n){return t=DM(t),EM(e,CI()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function CI(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CI=function(){return!!e})()}function wI(e,t,n,r){var i=uP(DM(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var TI=function(e){function t(e){var n;return X(this,t),n=SI(this,t,[`vue-render`]),Q(n,`presets`,[]),Q(n,`owners`,new WeakMap),n.renderer=cF(e),n.addPipe(function(e){if(!e||xM(e)!==`object`||!(`type`in e))return e;if(e.type===`unmount`)n.unmount(e.data.element);else if(e.type===`render`){if(`filled`in e.data&&e.data.filled)return e;if(n.mount(e.data.element,e))return xI(xI({},e),{},{data:xI(xI({},e.data),{},{filled:!0})})}return e}),n}return kM(t,e),Z(t,[{key:`setParent`,value:function(e){var n=this;wI(t,`setParent`,this,3)([e]),this.presets.forEach(function(e){e.attach&&e.attach(n)})}},{key:`unmount`,value:function(e){this.owners.delete(e),this.renderer.unmount(e)}},{key:`mount`,value:function(e,t){var n=this,r=this.renderer.get(e),i=this.parentScope();if(r)return this.presets.forEach(function(i){if(n.owners.get(e)===i){var a=i.update(t,n);a&&n.renderer.update(r,a)}}),!0;var a=_I(this.presets),o;try{for(a.s();!(o=a.n()).done;){var s=o.value,c=s.render(t,this);if(c)return this.renderer.mount(e,c.component,c.props,function(){return i.emit({type:`rendered`,data:t.data})}),this.owners.set(e,s),!0}}catch(e){a.e(e)}finally{a.f()}}},{key:`addPreset`,value:function(e){var t=e;t.attach&&t.attach(this),this.presets.push(t)}}])}(GM);function EI(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}EI(`.inline-comment, .frame-comment {
  color: black;
  padding: 12px;
  font-size: 140%;
  color: white;
  position: absolute;
  cursor: move;
  border-radius: 16px;
  box-sizing: border-box;
}
.inline-comment.selected, .frame-comment.selected {
  outline: none;
  border-color: #ffd92c;
}

.inline-comment {
  z-index: 4;
  background: #aec4ff;
  border: 3px solid #aec4ff;
  white-space: nowrap;
}

.frame-comment {
  z-index: -10;
  background: rgba(15, 80, 255, 0.2);
  border: 6px solid transparent;
}`);function DI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function OI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?DI(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):DI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var kI=function(){function e(t,n,r,i){var a=this;X(this,e),Q(this,`x`,0),Q(this,`y`,0),Q(this,`width`,0),Q(this,`height`,0),Q(this,`links`,[]),Q(this,`prevPosition`,null),Q(this,`dragOrigin`,null),this.text=t,this.area=n,this.events=r,this.id=i?.id??$M(),this.element=document.createElement(`div`),this.nested=document.createElement(`div`),this.element.appendChild(this.nested),this.element.addEventListener(`contextmenu`,this.onContextMenu.bind(this)),this.dragHandler=new xN,this.dragHandler.initialize(this.nested,{getCurrentPosition:function(){return{x:a.x,y:a.y}},getZoom:function(){return 1}},{start:function(){var e;a.dragOrigin={x:a.x,y:a.y},a.prevPosition=OI({},n.area.pointer),(e=a.events)!=null&&e.pick&&a.events.pick()},translate:function(){if(a.prevPosition){var e=OI({},n.area.pointer),t=e.x-a.prevPosition.x,r=e.y-a.prevPosition.y;a.translate(t,r),a.prevPosition=e}},drag:function(){a.finishDrag()}}),this.update()}return Z(e,[{key:`linkTo`,value:function(e){this.links=e}},{key:`linkedTo`,value:function(e){return this.links.includes(e)}},{key:`onContextMenu`,value:function(e){var t;e.preventDefault(),e.stopPropagation(),(t=this.events)!=null&&t.contextMenu&&this.events.contextMenu()}},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n,r){var i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.x+=t,this.y+=n,!((i=this.events)!=null&&i.translate)){e.next=5;break}return e.next=5,this.events.translate(t,n,r);case 5:this.update();case 6:case`end`:return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:`select`,value:function(){this.nested.classList.add(`selected`)}},{key:`unselect`,value:function(){this.nested.classList.remove(`selected`)}},{key:`update`,value:function(){this.nested.innerText=this.text,this.nested.style.transform=`translate(${this.x}px, ${this.y}px)`}},{key:`destroy`,value:function(){this.dragHandler.destroy()}},{key:`finishDrag`,value:function(){var e=Y($.default.mark(function e(){var t,n,r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.prevPosition=null,r=this.dragOrigin,this.dragOrigin=null,r){e.next=6;break}return(i=this.events)==null||(a=i.drag)==null||a.call(i),e.abrupt(`return`);case 6:return o=pN(this.links),(t=this.events)!=null&&t.drag&&this.events.drag(),e.next=10,(n=this.events)?.dragged?.call(n,r,o);case 10:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function AI(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function jI(e,t){return t.left>e.left&&t.right<e.right&&t.top>e.top&&t.bottom<e.bottom}function MI(e,t,n,r){var i=typeof r==`number`?{left:r,top:r,right:r,bottom:r}:r,a=n.map(function(n){var r=t.nodeViews.get(n);if(!r)return null;var i=e.getNode(n),a=i.width,o=i.height;return{id:n,position:r.position,width:a,height:o}}).filter(function(e){return!!e});if(a.length===0)return null;var o=Math.min.apply(Math,pN(a.map(function(e){return e.position.x})))-i.left,s=Math.min.apply(Math,pN(a.map(function(e){return e.position.y})))-i.top,c=Math.max.apply(Math,pN(a.map(function(e){return e.position.x+e.width})))+i.right,l=Math.max.apply(Math,pN(a.map(function(e){return e.position.y+e.height})))+i.bottom;return{left:o,right:c,top:s,bottom:l,width:Math.abs(o-c),height:Math.abs(s-l),getCenter:function(){return[(o+c)/2,(s+l)/2]}}}function NI(e,t,n){return t=DM(t),EM(e,PI()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function PI(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PI=function(){return!!e})()}function FI(e,t,n,r){var i=uP(DM(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var II=function(e){function t(e,n,r,i,a){var o;return X(this,t),o=NI(this,t,[e,n,{contextMenu:function(){var e;i==null||(e=i.contextMenu)==null||e.call(i,TM(o))},pick:function(){var e;i==null||(e=i.pick)==null||e.call(i,TM(o))},translate:function(){var e=Y($.default.mark(function e(t,n,r){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i!=null&&i.translate)){e.next=3;break}return e.next=3,i.translate(TM(o),t,n,r);case 3:case`end`:return e.stop()}},e)}));function t(t,n,r){return e.apply(this,arguments)}return t}(),drag:function(){return 1},dragged:function(){var e=Y($.default.mark(function e(t,n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i!=null&&i.dragged)){e.next=3;break}return e.next=3,i.dragged(TM(o),t,n);case 3:case`end`:return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},a]),Q(o,`width`,100),Q(o,`height`,100),Q(o,`links`,[]),o.editor=r,o.nested.className=`frame-comment`,o}return kM(t,e),Z(t,[{key:`getRect`,value:function(){return{left:this.x,top:this.y,right:this.x+this.width,bottom:this.y+this.height}}},{key:`contains`,value:function(e){var t=this.area.nodeViews.get(e),n=this.editor.getNode(e);return t?jI(this.getRect(),{left:t.position.x,top:t.position.y,right:t.position.x+n.width,bottom:t.position.y+n.height}):!1}},{key:`intersects`,value:function(e){var t=this.area.nodeViews.get(e),n=this.editor.getNode(e);return t?AI(this.getRect(),{left:t.position.x,top:t.position.y,right:t.position.x+n.width,bottom:t.position.y+n.height}):!1}},{key:`linkTo`,value:function(e){FI(t,`linkTo`,this,3)([e]),this.resize()}},{key:`resize`,value:function(){var e=Y($.default.mark(function e(){var t;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=MI(this.editor,this.area,this.links,{top:50,left:20,right:20,bottom:20}),!t){e.next=8;break}return this.width=t.width,this.height=t.height,e.next=6,this.translate(t.left-this.x,t.top-this.y,this.links);case 6:e.next=12;break;case 8:return this.width=100,this.height=100,e.next=12,this.translate(0,0,this.links);case 12:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`update`,value:function(){FI(t,`update`,this,3)([]),this.nested.style.width=`${this.width}px`,this.nested.style.height=`${this.height}px`}}])}(kI),LI=function(){function e(t){var n=t.limit;X(this,e),Q(this,`active`,!1),Q(this,`produced`,[]),Q(this,`reserved`,[]),n&&typeof n==`number`&&(this.limit=n)}return Z(e,[{key:`add`,value:function(e){this.active||(this.produced.push({time:Date.now(),action:e}),this.limit&&this.produced.length>this.limit&&this.produced.shift(),this.reserved=[])}},{key:`getRecent`,value:function(e){for(var t=Date.now()-e,n=[],r=this.produced.length-1;r>=0;r--){var i=this.produced[r];if(i.time<=t||i.separated)break;n.push(i)}return n}},{key:`removeRecent`,value:function(e,t){for(var n=Date.now()-t,r=this.produced.length-1;r>=0;r--){var i=this.produced[r];if(i.time<=n||i.separated)break;if(e(i))return this.produced.splice(r,1),i}}},{key:`move`,value:function(){var e=Y($.default.mark(function e(t,n,r){var i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.pop(),i){e.next=3;break}return e.abrupt(`return`);case 3:return this.active=!0,e.next=6,i.action[r]();case 6:return n.push(i),this.active=!1,e.abrupt(`return`,i);case 9:case`end`:return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.move(this.produced,this.reserved,`undo`);case 2:return e.abrupt(`return`,e.sent);case 3:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`clear`,value:function(){this.active=!1,this.produced=[],this.reserved=[]}},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.move(this.reserved,this.produced,`redo`);case 2:return e.abrupt(`return`,e.sent);case 3:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function RI(e){var t=e.type.toLowerCase();return![`button`,`checkbox`,`radio`,`submit`,`reset`,`file`,`image`,`hidden`].includes(t)}function zI(e){for(var t=e;t;){if(t.hasAttribute(`contenteditable`)){var n=t.getAttribute(`contenteditable`)?.toLowerCase();return n===`true`||n===``}t=t.parentElement}return!1}function BI(e){var t=e.tagName.toLowerCase();return t===`input`&&e instanceof HTMLInputElement?RI(e):t===`textarea`}function VI(e){return!e||!(e instanceof Element)?!1:BI(e)||zI(e)}function HI(e){document.addEventListener(`keydown`,function(t){if((t.ctrlKey||t.metaKey)&&!VI(t.target))switch(t.code){case`KeyZ`:e.undo(),t.preventDefault();break;case`KeyY`:e.redo(),t.preventDefault()}})}var UI=Object.freeze({__proto__:null,keyboard:HI}),WI=function(){function e(t,n){X(this,e),this.editor=t,this.connection=n}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.removeConnection(this.connection.id);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.addConnection(this.connection);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),GI=function(){function e(t,n){X(this,e),this.editor=t,this.connection=n}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.addConnection(this.connection);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.removeConnection(this.connection.id);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function KI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?KI(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):KI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var JI=function(){function e(t,n,r){X(this,e),this.editor=t,this.area=n,this.nodeId=r}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.node=this.editor.getNode(this.nodeId),this.position=this.area.nodeViews.get(this.nodeId)?.position,e.next=4,this.editor.removeNode(this.nodeId);case 4:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.node){e.next=3;break}return e.next=3,this.editor.addNode(this.node);case 3:if(!(this.node&&this.position)){e.next=6;break}return e.next=6,this.area.translate(this.node.id,this.position);case 6:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),YI=function(){function e(t,n,r,i){X(this,e),this.editor=t,this.area=n,this.node=r,this.position=i}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.addNode(this.node);case 2:return e.next=4,this.area.translate(this.node.id,this.position);case 4:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.removeNode(this.node.id);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),XI=function(){function e(t,n,r){X(this,e),this.area=t,this.nodeId=n;var i=t.nodeViews.get(n);i&&(this.prev=qI({},r),this.new=qI({},i.position))}return Z(e,[{key:`translate`,value:function(){var e=Y($.default.mark(function e(t){var n;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.area.nodeViews.get(this.nodeId),n){e.next=3;break}return e.abrupt(`return`);case 3:return e.next=5,n.translate(t.x,t.y);case 5:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.translate(this.prev);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.translate(this.new);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function ZI(e,t){var n=new Map,r=new Map,i=e.parentScope(MN),a=i.parentScope(ZM),o=t.timing;a.addPipe(function(t){if(t.type===`nodecreated`){var o=t.data.id;e.add(new JI(a,i,o)),n.set(o,a.getNode(t.data.id))}if(t.type===`noderemoved`){var s=t.data.id,c=n.get(s),l=r.get(s);if(!c)throw Error(`node`);if(!l)throw Error(`position`+s);e.add(new YI(a,i,c,l)),r.delete(s),n.delete(s)}return t}),i.addPipe(function(e){if(!(`type`in e))return e;if(e.type===`nodetranslated`){var t=e.data,n=t.id,i=t.position;r.set(n,i)}return e});var s=[];i.addPipe(function(t){if(!t||xM(t)!==`object`||!(`type`in t))return t;if(t.type===`nodepicked`&&s.push(t.data.id),t.type===`nodedragged`){var n=s.indexOf(t.data.id);n>=0&&s.splice(n,1)}if(t.type===`nodetranslated`){var r=t.data,a=r.id,c=r.position,l=r.previous,u=e.getRecent(o).filter(function(e){return e.action instanceof XI}).filter(function(e){return e.action.nodeId===a});if(u.length>1)throw Error(`> 1`);u[0]?(u[0].action.new=c,u[0].time=Date.now()):e.add(new XI(i,a,l))}return t})}function QI(e){var t=new Map,n=e.parentScope().parentScope(ZM);n.addPipe(function(r){if(r.type===`connectioncreated`){var i=n.getConnection(r.data.id);e.add(new WI(n,i)),t.set(r.data.id,i)}if(r.type===`connectionremoved`){var a=t.get(r.data.id);a&&e.add(new GI(n,a))}return r})}function $I(e){return{connect:function(t){ZI(t,{timing:e?.timing??t.timing*2}),QI(t)}}}var eL=Object.freeze({__proto__:null,AddConnectionAction:WI,AddNodeAction:JI,DragNodeAction:XI,RemoveConnectionAction:GI,RemoveNodeAction:YI,setup:$I});function tL(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=nL(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function nL(e,t){if(e){if(typeof e==`string`)return rL(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rL(e,t):void 0}}function rL(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function iL(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function aL(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?iL(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iL(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oL(e){return{id:e.id,text:e.text,x:e.x,y:e.y,width:e.width,height:e.height,links:pN(e.links),kind:e instanceof II?`frame`:`inline`}}var sL=function(){function e(t,n){X(this,e),this.comment=t,this.commentId=n}return Z(e,[{key:`undo`,value:function(){var e=this.comment.comments.get(this.commentId);e&&(this.stored=oL(e),this.comment.delete(this.commentId))}},{key:`redo`,value:function(){this.stored&&this.comment.restoreComment(this.stored)}}])}(),cL=function(){function e(t,n){X(this,e),this.comment=t,this.stored=n}return Z(e,[{key:`undo`,value:function(){this.comment.restoreComment(this.stored)}},{key:`redo`,value:function(){this.comment.delete(this.stored.id)}}])}(),lL=function(){function e(t,n,r,i,a,o,s,c){X(this,e),this.comment=t,this.area=n,this.commentId=r,this.prev=aL({},i),this.new=aL({},a),this.prevLinks=pN(o),this.newLinks=pN(s),this.nodes=(c??[]).map(function(e){var t=e.id,n=e.previous,r=e.current;return{id:t,prev:aL({},n),new:aL({},r)}});var l=t.comments.get(r);l instanceof II&&(this.prevFrame={x:i.x,y:i.y,width:l.width,height:l.height,links:pN(o)},this.newFrame={x:l.x,y:l.y,width:l.width,height:l.height,links:pN(s)})}return Z(e,[{key:`applyInline`,value:function(){var e=Y($.default.mark(function e(t,n){var r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.comment.comments.get(this.commentId),r){e.next=3;break}return e.abrupt(`return`);case 3:return e.next=5,this.comment.translate(this.commentId,t.x-r.x,t.y-r.y);case 5:return e.next=7,this.comment.setCommentLinks(this.commentId,n);case 7:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`applyFrame`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a,o,s;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.comment.setFrameState(this.commentId,t),r=tL(this.nodes),e.prev=2,r.s();case 4:if((i=r.n()).done){e.next=13;break}if(a=i.value,o=n===`prev`?a.prev:a.new,s=this.area.nodeViews.get(a.id),!s){e.next=11;break}return e.next=11,s.translate(o.x,o.y);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:case`end`:return e.stop()}},e,this,[[2,15,18,21]])}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.prevFrame){e.next=4;break}return e.next=3,this.applyFrame(this.prevFrame,`prev`);case 3:return e.abrupt(`return`);case 4:return e.next=6,this.applyInline(this.prev,this.prevLinks);case 6:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.newFrame){e.next=4;break}return e.next=3,this.applyFrame(this.newFrame,`new`);case 3:return e.abrupt(`return`);case 4:return e.next=6,this.applyInline(this.new,this.newLinks);case 6:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),uL=function(){function e(t,n,r){X(this,e),this.comment=t,this.frames=n,this.node=r}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.comment.restoreNodeFrameMembership(aL({frames:this.frames.map(function(e){return{id:e.id,state:e.prev}})},this.node?{node:{id:this.node.id,position:this.node.prev}}:{}));case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.comment.restoreNodeFrameMembership(aL({frames:this.frames.map(function(e){return{id:e.id,state:e.next}})},this.node?{node:{id:this.node.id,position:this.node.new}}:{}));case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),dL=function(){function e(t,n,r,i){X(this,e),this.comment=t,this.commentId=n,this.previousText=r,this.newText=i}return Z(e,[{key:`undo`,value:function(){var e=this.comment.comments.get(this.commentId);e&&(e.text=this.previousText,e.update())}},{key:`redo`,value:function(){var e=this.comment.comments.get(this.commentId);e&&(e.text=this.newText,e.update())}}])}();function fL(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pL(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fL(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fL(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mL(e,t){return{x:e.x,y:e.y,width:e.width,height:e.height,links:pN(t)}}function hL(e,t,n){var r=e.x-t.x,i=e.y-t.y;return e.links.map(function(e){var t=n.nodeViews.get(e);return t?{id:e,previous:{x:t.position.x-r,y:t.position.y-i},current:pL({},t.position)}:null}).filter(function(e){return!!e})}function gL(e,t,n){for(;e.removeRecent(function(e){var n=e.action;return n instanceof XI&&n.nodeId===t},n););}function _L(e,t){t.addPipe(function(n){return n.type===`commentcreated`&&e.add(new sL(t,n.data.id)),n})}function vL(e,t){t.addPipe(function(n){return n.type===`commentremoved`&&e.add(new cL(t,oL(n.data))),n})}function yL(e,t){t.addPipe(function(n){if(n.type===`commentedited`){var r=n.data,i=r.comment,a=r.previousText;e.add(new dL(t,i.id,a,i.text))}return n})}function bL(e,t,n){t.addPipe(function(r){if(r.type!==`commentdragged`)return r;var i=r.data,a=i.id,o=i.previous,s=i.prevLinks,c=t.comments.get(a);if(!c)return r;var l=pN(c.links),u=o.x!==c.x||o.y!==c.y,d=s.length!==l.length||s.some(function(e,t){return e!==l[t]});if(u||d){var f=c instanceof II?hL(c,o,n):[];e.add(new lL(t,n,a,o,{x:c.x,y:c.y},s,l,f))}return r})}function xL(e,t,n){t.addPipe(function(r){if(r.type!==`commentmembershipchanged`)return r;var i=r.data,a=i.node,o=i.frames;a&&gL(e,a.id,n);var s=a?{id:a.id,prev:a.previous,new:a.current}:null;return e.add(new uL(t,o.map(function(e){return{id:e.id,prev:mL(e.previous,e.links.prev),next:mL(e.current,e.links.next)}}),s)),r})}function SL(e){return{connect:function(t){var n=t.parentScope(MN),r=t.timing*2;_L(t,e.comment),vL(t,e.comment),yL(t,e.comment),bL(t,e.comment,n),xL(t,e.comment,r)}}}var CL=Object.freeze({__proto__:null,classic:eL,comments:Object.freeze({__proto__:null,AddCommentAction:sL,commentSnapshot:oL,DragCommentAction:lL,EditCommentAction:dL,NodeFrameMembershipAction:uL,RemoveCommentAction:cL,setup:SL})});function wL(e,t,n){return t=DM(t),EM(e,TL()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function TL(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(TL=function(){return!!e})()}function EL(e,t,n,r){var i=uP(DM(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var DL=function(e){function t(e){var n;return X(this,t),n=wL(this,t,[`history`]),Q(n,`history`,new LI({})),Q(n,`presets`,[]),n.timing=e?.timing??200,n}return kM(t,e),Z(t,[{key:`setParent`,value:function(e){var n=this;EL(t,`setParent`,this,3)([e]),this.area=this.parentScope(MN),this.editor=this.area.parentScope(ZM),this.presets.forEach(function(e){e.connect(n)}),this.editor.addPipe(function(e){return e.type===`cleared`&&n.history.clear(),e})}},{key:`addPreset`,value:function(e){this.presets.push(e),this.area&&this.editor&&e.connect(this)}},{key:`add`,value:function(e){this.history.add(e)}},{key:`getHistorySnapshot`,value:function(){return pN(this.history.produced)}},{key:`getRecent`,value:function(e){return this.history.getRecent(e)}},{key:`removeRecent`,value:function(e,t){return this.history.removeRecent(e,t??this.timing*2)}},{key:`clear`,value:function(){this.history.clear()}},{key:`separate`,value:function(){var e=this.history.produced[this.history.produced.length-1];e&&(e.separated=!0)}},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){var t,n;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.history.undo();case 2:if(t=e.sent,!t){e.next=8;break}if(n=this.history.produced[this.history.produced.length-1],!(n&&!n.separated&&n.time+this.timing>t.time)){e.next=8;break}return e.next=8,this.undo();case 8:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){var t,n;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.history.redo();case 2:if(t=e.sent,!t){e.next=8;break}if(n=this.history.reserved[this.history.reserved.length-1],!(n&&!t.separated&&t.time+this.timing>n.time)){e.next=8;break}return e.next=8,this.redo();case 8:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(GM);function OL(e){var t=e.map(function(e){return e.left}),n=e.map(function(e){return e.left+e.width}),r=e.map(function(e){return e.top}),i=e.map(function(e){return e.top+e.height}),a=Math.min.apply(Math,pN(t)),o=Math.max.apply(Math,pN(n)),s=Math.min.apply(Math,pN(r)),c=Math.max.apply(Math,pN(i));return{left:a,right:o,top:s,bottom:c,width:o-a,height:c-s}}function kL(e,t,n){var r=OL(e),i=Math.max(t,Math.max(r.width,r.height*n));return{origin:{x:(i-r.width)/2-r.left,y:(i/n-r.height)/2-r.top},scale:function(e){return e/i},invert:function(e){return e*i}}}function AL(e,t,n){return t=DM(t),EM(e,jL()?Reflect.construct(t,n||[],DM(e).constructor):t.apply(e,n))}function jL(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jL=function(){return!!e})()}function ML(e,t,n,r){var i=uP(DM(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var NL=function(e){function t(e){var n;return X(this,t),n=AL(this,t,[`minimap`]),n.props=e,n.ratio=n.props?.ratio??1,n.minDistance=n.props?.minDistance??2e3,n.boundViewport=!!n.props?.boundViewport,n}return kM(t,e),Z(t,[{key:`setParent`,value:function(e){var n=this;ML(t,`setParent`,this,3)([e]),this.area=this.parentScope(cP),this.editor=this.area.parentScope(ZM),this.element=document.createElement(`div`),this.area.container.appendChild(this.element),this.addPipe(function(e){return`type`in e&&(e.type===`render`&&e.data.type===`node`||e.type===`nodetranslated`||e.type===`nodecreated`||e.type===`noderemoved`||e.type===`translated`||e.type===`resized`||e.type===`noderesized`||e.type===`zoomed`)&&n.render(),e})}},{key:`getNodesRect`,value:function(){var e=this;return this.editor.getNodes().map(function(t){var n=e.area.nodeViews.get(t.id);return n?{width:t.width,height:t.height,left:n.position.x,top:n.position.y}:null}).filter(Boolean)}},{key:`render`,value:function(){var e=this,t=this.parentScope(),n=this.getNodesRect(),r=this.area.area.transform,i=this.area.container,a=i.clientWidth,o=i.clientHeight,s=this.minDistance,c=this.ratio,l={left:-r.x/r.k,top:-r.y/r.k,width:a/r.k,height:o/r.k},u=kL(this.boundViewport?[].concat(pN(n),[l]):n,s,c),d=u.origin,f=u.scale,p=u.invert;t.emit({type:`render`,data:{type:`minimap`,element:this.element,ratio:c,start:function(){return r},nodes:n.map(function(e){return{left:f(e.left+d.x),top:f(e.top+d.y),width:f(e.width),height:f(e.height)}}),viewport:{left:f(l.left+d.x),top:f(l.top+d.y),width:f(l.width),height:f(l.height)},translate:function(t,n){var i=r.x,a=r.y,o=r.k;e.area.area.translate(i+p(t)*o,a+p(n)*o)},point:function(t,n){var i={x:(d.x-p(t))*r.k,y:(d.y-p(n))*r.k},s={x:i.x+a/2,y:i.y+o/2};e.area.area.translate(s.x,s.y)}}})}}])}(GM),PL=N({__name:`CustomSocket`,props:{data:{}},setup(e){let t=e.data?.payload?.color||`#64748b`;return(e,n)=>(I(),L(`div`,{class:`socket`,style:ve({background:M(t)})},null,4))}}),FL=class extends sN.Socket{type;color;constructor(e,t){super(e),this.type=e,this.color=t}},IL={FEATURE:new FL(`feature`,`#34d399`),EFFECT:new FL(`effect`,`#f472b6`),LAYER:new FL(`layer`,`#fbbf24`),CONTROL:new FL(`control`,`#94a3b8`),ENV:new FL(`env`,`#a78bfa`),VOID:new FL(`void`,`#a78bfa`)},LL=e=>IL[e],RL=Array.from(new Set(mD.features.flatMap(e=>Object.keys(e.properties)))).map(e=>({label:e,value:e})),zL=[{label:`监测站 stations`,value:`stations`},{label:`仅告警 alarm`,value:`alarm`},{label:`风险 risk`,value:`risk`}],BL=[{label:`semantic`,value:`semantic`},{label:`blue`,value:`blue`},{label:`green`,value:`green`},{label:`warm`,value:`warm`}],VL=[{label:`（无）`,value:``},{label:`告警三角`,value:`icon.alarm`},{label:`故障菱形`,value:`icon.fault`},{label:`正常圆+勾`,value:`icon.ok`},{label:`信息方+i`,value:`icon.info`},{label:`高亮星形`,value:`icon.sel`}],HL=[{label:`高`,value:`高`},{label:`中`,value:`中`},{label:`低`,value:`低`}],UL=[{label:`≥`,value:`>=`},{label:`≤`,value:`<=`},{label:`=`,value:`==`}],WL=[{label:`count`,value:`count`},{label:`sum`,value:`sum`},{label:`avg`,value:`avg`}],GL=[{label:`OSM`,value:`basemap.osm`},{label:`Esri 影像`,value:`basemap.esri-imagery`},{label:`Carto 浅色`,value:`basemap.carto-light`},{label:`天地图矢量`,value:`basemap.tianditu-vec`},{label:`高德矢量`,value:`basemap.amap-vec`}],KL=[{label:`比例尺 scale`,value:`scale`},{label:`归属 attribution`,value:`attribution`},{label:`缩放 zoom`,value:`zoom`}],qL=[{label:`graph`,value:`graph`},{label:`rete-route`,value:`rete-route`}],JL={"geojson-source":[{key:`dataset`,label:`数据集`,type:`select`,default:`stations`,options:zL}],"url-source":[{key:`dataset`,label:`数据集`,type:`select`,default:`risk`,options:zL}],"api-source":[{key:`dataset`,label:`数据集`,type:`select`,default:`alarm`,options:zL}],"mock-source":[{key:`count`,label:`数量`,type:`range`,default:8,min:1,max:8,step:1}],filter:[{key:`field`,label:`字段`,type:`select`,default:`risk`,options:RL},{key:`op`,label:`运算`,type:`select`,default:`>=`,options:UL},{key:`value`,label:`阈值`,type:`range`,default:.5,min:0,max:1,step:.05}],mapping:[{key:`from`,label:`源字段`,type:`select`,default:`level`,options:RL},{key:`to`,label:`目标值`,type:`select`,default:`高`,options:HL}],aggregate:[{key:`op`,label:`聚合`,type:`select`,default:`count`,options:WL},{key:`groupBy`,label:`分组`,type:`select`,default:`level`,options:RL}],buffer:[{key:`distance`,label:`距离`,type:`range`,default:800,min:100,max:5e3,step:100}],normalize:[{key:`scale`,label:`缩放`,type:`range`,default:1,min:.1,max:3,step:.1}],"pick-fields":[{key:`field`,label:`字段`,type:`select`,default:`name`,options:RL}],ripple:[{key:`color`,label:`颜色`,type:`color`,default:`#3b82f6`},{key:`period`,label:`周期`,type:`range`,default:1200,min:400,max:3e3,step:100},{key:`rings`,label:`环数`,type:`range`,default:4,min:2,max:8,step:1}],pulse:[{key:`color`,label:`颜色`,type:`color`,default:`#ef4444`},{key:`period`,label:`周期`,type:`range`,default:1e3,min:400,max:3e3,step:100},{key:`jumpPx`,label:`跳跃`,type:`range`,default:8,min:2,max:20,step:1}],wave:[{key:`color`,label:`颜色`,type:`color`,default:`#22c55e`},{key:`period`,label:`周期`,type:`range`,default:1400,min:400,max:3e3,step:100}],breathing:[{key:`color`,label:`颜色`,type:`color`,default:`#f59e0b`},{key:`period`,label:`周期`,type:`range`,default:1600,min:400,max:3e3,step:100}],carousel:[{key:`interval`,label:`间隔`,type:`range`,default:1500,min:500,max:4e3,step:100},{key:`autoStart`,label:`自动开始`,type:`toggle`,default:!0}],layer:[{key:`id`,label:`图层ID`,type:`text`,default:`stations`},{key:`name`,label:`名称`,type:`text`,default:`监测站`},{key:`description`,label:`描述`,type:`text`,default:``},{key:`colorField`,label:`配色字段`,type:`select`,default:`level`,options:RL},{key:`palette`,label:`色板`,type:`select`,default:`semantic`,options:BL},{key:`radius`,label:`半径`,type:`range`,default:9,min:4,max:20,step:1},{key:`icon`,label:`图标`,type:`select`,default:``,options:VL},{key:`envAware`,label:`env联动`,type:`toggle`,default:!1}],output:[{key:`route`,label:`路由`,type:`select`,default:`graph`,options:qL}],"engine-run":[{key:`route`,label:`路由`,type:`select`,default:`graph`,options:qL}],basemap:[{key:`asset`,label:`底图`,type:`select`,default:`basemap.osm`,options:GL}],control:[{key:`id`,label:`控件`,type:`select`,default:`scale`,options:KL}],"env-context":[{key:`theme`,label:`主题`,type:`select`,default:`light`,options:[{label:`light`,value:`light`},{label:`dark`,value:`dark`}]},{key:`riskThreshold`,label:`风险阈值`,type:`range`,default:0,min:0,max:1,step:.05},{key:`scope`,label:`范围`,type:`select`,default:`all`,options:[{label:`all`,value:`all`},{label:`alarm`,value:`alarm`}]}],"map-init":[],"subrule-output":[]};function YL(e){return e===`alarm`?{...mD,features:mD.features.filter(e=>e.properties.type===`alarm`)}:e===`risk`?{...mD,features:mD.features.filter(e=>Number(e.properties.risk)>=.6)}:mD}function XL(e,t){let n=new sN.Node(ZL(e)),r={};function i(e,t,r,i=!1){n.addInput(e,new sN.Input(LL(t),r,i))}function a(e,t,r,i=!0){n.addOutput(e,new sN.Output(LL(t),r,i))}switch(e){case`geojson-source`:case`url-source`:case`api-source`:case`mock-source`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`FEATURE`,`data`);break;case`filter`:case`mapping`:case`aggregate`:case`buffer`:case`normalize`:case`pick-fields`:i(`input`,`FEATURE`,`data`),a(`output`,`FEATURE`,`data`);break;case`ripple`:case`pulse`:case`wave`:case`breathing`:case`carousel`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`EFFECT`,`effect`);break;case`layer`:i(`data`,`FEATURE`,`data`),i(`effects`,`EFFECT`,`effects`,!0),a(`layer`,`LAYER`,`layer`);break;case`subrule-output`:i(`layer`,`LAYER`,`layer`),a(`output`,`LAYER`,`layer`);break;case`output`:i(`layer`,`LAYER`,`layer`),a(`output`,`CONTROL`,`done`);break;case`basemap`:case`control`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`CONTROL`,`done`);break;case`env-context`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`ENV`,`env`);break;case`map-init`:a(`output`,`CONTROL`,`trigger`);break;case`engine-run`:i(`control`,`CONTROL`,`trigger`),i(`layer`,`LAYER`,`layer`)}let o=JL[e]||[];for(let e of o)r[e.key]=e.default;return t.set(n.id,r),n.__gfType=e,n}function ZL(e){return{"geojson-source":`数据源 · GeoJSON`,"url-source":`数据源 · URL`,"api-source":`数据源 · API`,"mock-source":`数据源 · Mock`,filter:`处理器 · filter`,mapping:`处理器 · mapping`,aggregate:`处理器 · aggregate`,buffer:`处理器 · buffer`,normalize:`处理器 · normalize`,"pick-fields":`处理器 · pick-fields`,ripple:`效果 · ripple`,pulse:`效果 · pulse`,wave:`效果 · wave`,breathing:`效果 · breathing`,carousel:`效果 · carousel`,layer:`图层子规则`,output:`地图输出`,basemap:`底图`,control:`控件`,"map-init":`开始 · 地图初始化`,"engine-run":`结束 · engine run`,"subrule-output":`子规则输出`,"env-context":`环境上下文`}[e]||e}function QL(e){return{"geojson-source":`GeoJSON 内联数据源，输出 FeatureCollection`,"url-source":`URL 远程 GeoJSON 数据源`,"api-source":`API 动态数据源（演示用告警子集）`,"mock-source":`Mock 随机点数据源`,filter:`按字段条件过滤要素`,mapping:`字段值映射改写`,aggregate:`按字段聚合统计`,buffer:`缓冲区分析`,normalize:`属性归一化`,"pick-fields":`只保留指定字段`,ripple:`涟漪扩散效果`,pulse:`点跳跃脉冲效果`,wave:`波浪扩散效果`,breathing:`呼吸灯效果`,carousel:`轮播高亮 + popup 跟随`,layer:`图层子规则（数据→处理器→样式→效果）`,output:`地图输出节点，触发 run(route)`,basemap:`底图资源`,control:`OL 控件（scale/attribution/zoom）`,"map-init":`流水线开始节点，输出 trigger 流`,"engine-run":`流水线结束节点，触发 engine.run(route)`,"subrule-output":`子规则产物输出，可串接下游`,"env-context":`外部环境变量（theme/riskThreshold/scope）注入`}[e]||``}var $L=[{group:`数据源`,items:[{type:`geojson-source`,label:`GeoJSON`},{type:`url-source`,label:`URL`},{type:`api-source`,label:`API`},{type:`mock-source`,label:`Mock`}]},{group:`处理器`,items:[{type:`filter`,label:`filter`},{type:`mapping`,label:`mapping`},{type:`aggregate`,label:`aggregate`},{type:`buffer`,label:`buffer`},{type:`normalize`,label:`normalize`},{type:`pick-fields`,label:`pick-fields`}]},{group:`效果`,items:[{type:`ripple`,label:`ripple`},{type:`pulse`,label:`pulse`},{type:`wave`,label:`wave`},{type:`breathing`,label:`breathing`},{type:`carousel`,label:`carousel`}]},{group:`图层 / 输出 / 底图控件`,items:[{type:`layer`,label:`图层子规则`},{type:`output`,label:`地图输出`},{type:`basemap`,label:`底图`},{type:`control`,label:`控件`}]},{group:`流程边界 / 环境上下文`,items:[{type:`map-init`,label:`开始`},{type:`engine-run`,label:`结束`},{type:`subrule-output`,label:`子规则输出`},{type:`env-context`,label:`环境上下文`}]}];function eR(e,t){switch(e){case`basemap`:return{id:String(t.asset||`basemap.osm`),url:``};case`control`:return{id:String(t.id||`scale`),options:{}};case`geojson-source`:case`url-source`:case`api-source`:case`mock-source`:return{type:`raw`,config:{data:YL(String(t.dataset||`stations`))}};case`filter`:return{ref:`filter`,options:{field:t.field,op:t.op,value:t.value}};case`mapping`:return{ref:`mapping`,options:{from:t.from,to:t.to}};case`aggregate`:return{ref:`aggregate`,options:{op:t.op,groupBy:t.groupBy}};case`buffer`:return{ref:`buffer`,options:{distance:t.distance}};case`normalize`:return{ref:`normalize`,options:{scale:t.scale}};case`pick-fields`:return{ref:`pick-fields`,options:{fields:[t.field]}};case`ripple`:return{ref:`ripple`,options:{color:t.color,period:t.period,rings:t.rings}};case`pulse`:return{ref:`pulse`,options:{color:t.color,period:t.period,jumpPx:t.jumpPx}};case`wave`:return{ref:`wave`,options:{color:t.color,period:t.period}};case`breathing`:return{ref:`breathing`,options:{color:t.color,period:t.period}};case`carousel`:return{ref:`carousel`,options:{interval:t.interval,autoStart:t.autoStart}};case`output`:return{routeName:String(t.route||`graph`)};case`engine-run`:return{routeName:String(t.route||`graph`)};case`map-init`:case`subrule-output`:return{};case`env-context`:return{theme:t.theme,riskThreshold:t.riskThreshold,scope:t.scope};case`layer`:{let e=String(t.colorField||`level`),n=String(t.palette||`semantic`),r=Number(t.radius??9),i=t.envAware===!0,a=String(t.description||``),o=i?{mode:`categorical`,colorField:e,palette:n,fillOpacity:.85,radius:r,color:(t,n)=>{let r={高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`},i={高:`#f87171`,中:`#fbbf24`,低:`#4ade80`},a=String(t.get(e));return n.$env?.theme===`dark`?i[a]||`#4f8cff`:r[a]||`#4f8cff`},radius:(e,t)=>(6+Number(e.get(`risk`)||0)*10)*(t.$env?.theme===`dark`?.85:1),icon:t.icon?String(t.icon):void 0}:{mode:`categorical`,colorField:e,palette:n,fillOpacity:.85,radius:r,icon:t.icon||void 0};return{id:String(t.id||`layer`),name:String(t.name||`图层`),description:a,zIndex:10,style:o,effects:[],processors:i?[{inline:`(payload, ctx) => { const e = (ctx && ctx.env) || {}; const thr = Number(e.riskThreshold || 0); const scope = e.scope || "all"; const feats = payload.features.filter(f => { const r = Number(f.properties.risk); if (r < thr) return false; if (scope === "alarm" && f.properties.type !== "alarm") return false; return true; }); return { datasetId: payload.datasetId, geometryType: payload.geometryType, features: feats, fields: payload.fields }; }`}]:[]}}default:return{}}}var tR=[{label:`完整主规则链（开始/结束/子规则输出）`,graph:{version:`2.0.0`,name:`basic-chain-with-bounds`,nodes:[{id:`n1`,type:`map-init`,label:`开始 · 地图初始化`,params:{},position:{x:40,y:40}},{id:`n2`,type:`engine-run`,label:`结束 · engine run`,params:{},position:{x:980,y:40}},{id:`n3`,type:`geojson-source`,label:`数据源 · GeoJSON`,params:{},position:{x:40,y:180}},{id:`n4`,type:`filter`,label:`处理器 · filter`,params:{},position:{x:280,y:180}},{id:`n5`,type:`layer`,label:`图层子规则`,params:{},position:{x:520,y:180}},{id:`n6`,type:`subrule-output`,label:`子规则输出`,params:{},position:{x:780,y:180}},{id:`n7`,type:`basemap`,label:`底图`,params:{},position:{x:40,y:340}},{id:`n8`,type:`control`,label:`控件`,params:{},position:{x:220,y:340}},{id:`n9`,type:`ripple`,label:`效果 · ripple`,params:{},position:{x:520,y:340}},{id:`n10`,type:`env-context`,label:`环境上下文`,params:{},position:{x:40,y:480}}],connections:[{id:`c1`,source:`n1`,sourceOutput:`output`,target:`n2`,targetInput:`control`},{id:`c2`,source:`n3`,sourceOutput:`output`,target:`n4`,targetInput:`input`},{id:`c3`,source:`n4`,sourceOutput:`output`,target:`n5`,targetInput:`data`},{id:`c4`,source:`n5`,sourceOutput:`layer`,target:`n6`,targetInput:`layer`},{id:`c5`,source:`n6`,sourceOutput:`output`,target:`n2`,targetInput:`layer`},{id:`c6`,source:`n9`,sourceOutput:`output`,target:`n5`,targetInput:`effects`},{id:`c7`,source:`n1`,sourceOutput:`output`,target:`n10`,targetInput:`trigger`}]}},{label:`告警子规则（alarm + pulse）`,graph:{version:`2.0.0`,name:`alarm-subrule`,nodes:[{id:`n1`,type:`map-init`,label:`开始`,params:{},position:{x:40,y:40}},{id:`n2`,type:`engine-run`,label:`engine run`,params:{},position:{x:820,y:40}},{id:`n3`,type:`api-source`,label:`数据源 · API(告警)`,params:{},position:{x:40,y:180}},{id:`n4`,type:`layer`,label:`告警图层`,params:{},position:{x:320,y:180}},{id:`n5`,type:`subrule-output`,label:`子规则输出`,params:{},position:{x:600,y:180}},{id:`n6`,type:`basemap`,label:`底图`,params:{},position:{x:40,y:340}},{id:`n7`,type:`pulse`,label:`效果 · pulse`,params:{},position:{x:320,y:340}},{id:`n8`,type:`control`,label:`控件`,params:{},position:{x:220,y:340}}],connections:[{id:`c1`,source:`n1`,sourceOutput:`output`,target:`n2`,targetInput:`control`},{id:`c2`,source:`n3`,sourceOutput:`output`,target:`n4`,targetInput:`data`},{id:`c3`,source:`n4`,sourceOutput:`layer`,target:`n5`,targetInput:`layer`},{id:`c4`,source:`n5`,sourceOutput:`output`,target:`n2`,targetInput:`layer`},{id:`c5`,source:`n7`,sourceOutput:`output`,target:`n4`,targetInput:`effects`}]}}],nR={key:0,class:`pp`},rR={class:`pp__head`},iR={class:`pp__type`},aR={class:`pp__id`},oR={class:`pp__desc`},sR={class:`pp__fields`},cR=[`value`,`onChange`],lR=[`value`],uR=[`min`,`max`,`step`,`value`,`onInput`],dR=[`value`,`onInput`],fR=[`value`,`onInput`],pR=[`checked`,`onChange`],mR={key:5,class:`pp__val`},hR={key:6,class:`pp__val`},gR={key:0,class:`pp__empty`},_R={key:1,class:`pp pp--empty`},vR=iu(N({__name:`ParamPanel`,props:{selectedId:{},selectedType:{},paramsMap:{}},emits:[`applied`],setup(e,{emit:t}){let n=e,r=t,i=j({});er(()=>[n.selectedId,n.selectedType],()=>{if(!n.selectedId||!n.selectedType){i.value={};return}let e=n.paramsMap.get(n.selectedId)||{};i.value={...e}},{immediate:!0});let a=no(()=>n.selectedType&&JL[n.selectedType]||[]),o=no(()=>n.selectedType?QL(n.selectedType):``),s=no(()=>n.selectedType?ZL(n.selectedType):``);function c(e,t){if(i.value={...i.value,[e]:t},n.selectedId){let r=n.paramsMap.get(n.selectedId)||{};n.paramsMap.set(n.selectedId,{...r,[e]:t})}r(`applied`)}return(t,n)=>e.selectedId&&e.selectedType?(I(),L(`div`,nR,[R(`div`,rR,[R(`span`,iR,A(s.value),1),R(`span`,aR,`#`+A(e.selectedId.slice(0,6)),1)]),R(`p`,oR,A(o.value),1),R(`div`,sR,[(I(!0),L(F,null,P(a.value,e=>(I(),L(`div`,{key:e.key,class:`pp__row`},[R(`label`,null,A(e.label),1),e.type===`select`?(I(),L(`select`,{key:0,value:i.value[e.key],onChange:t=>c(e.key,t.target.value)},[(I(!0),L(F,null,P(e.options,e=>(I(),L(`option`,{key:e.value,value:e.value},A(e.label),9,lR))),128))],40,cR)):e.type===`range`?(I(),L(`input`,{key:1,type:`range`,min:e.min,max:e.max,step:e.step,value:i.value[e.key],onInput:t=>c(e.key,Number(t.target.value))},null,40,uR)):e.type===`color`?(I(),L(`input`,{key:2,type:`color`,value:i.value[e.key],onInput:t=>c(e.key,t.target.value)},null,40,dR)):e.type===`text`?(I(),L(`input`,{key:3,type:`text`,value:i.value[e.key],onInput:t=>c(e.key,t.target.value)},null,40,fR)):e.type===`toggle`?(I(),L(`input`,{key:4,type:`checkbox`,checked:!!i.value[e.key],onChange:t=>c(e.key,t.target.checked)},null,40,pR)):Aa(``,!0),e.type===`range`?(I(),L(`span`,mR,A(i.value[e.key]),1)):e.type===`toggle`?(I(),L(`span`,hR,A(i.value[e.key]?`on`:`off`),1)):Aa(``,!0)]))),128)),a.value.length?Aa(``,!0):(I(),L(`p`,gR,`该节点无可配参数（流程边界/透传节点）`))]),n[0]||=R(`p`,{class:`pp__tip`},`改参数后点上方「▶ 运行」生效`,-1)])):(I(),L(`div`,_R,[...n[1]||=[R(`p`,null,`点选画布节点 → 在此配置参数`,-1)]]))}}),[[`__scopeId`,`data-v-7a3fd89d`]]),yR={class:`re`},bR={class:`re__bar`},xR={class:`re__preset`},SR=[`value`],CR={class:`re__body`},wR={class:`re__canvas-wrap`},TR={class:`re__palette`},ER={class:`re__group-label`},DR=[`onClick`],OR={class:`re__side`},kR={class:`re__env`},AR={class:`re__env-row`},jR={class:`re__seg`},MR={class:`re__env-row`},NR={class:`re__env-row`},PR={class:`re__seg`},FR={class:`re__log`},IR={class:`re__tpl`},LR={class:`re__tpl-input`},RR={key:0,class:`re__tpl-empty`},zR={class:`re__tpl-name`},BR=[`onClick`],VR=[`onClick`],HR={class:`re__json`},UR=`gf-rete-templates`,WR=iu(N({__name:`ReteEditorPage`,setup(e){let t=j(),n=j(),r=un(null),i=j(``),a=j(``),o=j({theme:`light`,riskThreshold:0,scope:`all`}),s=j(null),c=j(null),l=j(0),u=new Map,d=new Map,f=null,p=null,m=null;async function h(e,t=0,n=0){let r=XL(e,u);return d.set(r.id,e),await f.addNode(r),p.translate(r.id,{x:t,y:n}),r}async function g(e){if(!f||!p)return;for(let e of[...f.getNodes()])try{await f.removeNode(e.id)}catch{}u.clear(),d.clear();let t=new Map;for(let n of e.nodes){let e=XL(n.type,u);d.set(e.id,n.type),e.__gfType=n.type,n.label&&(e.label=n.label),await f.addNode(e),p.translate(e.id,n.position),t.set(n.id,e)}for(let n of e.connections){let e=t.get(n.source),r=t.get(n.target);if(e&&r)try{await f.addConnection(new sN.Connection(e,n.sourceOutput,r,n.targetInput))}catch{}}setTimeout(()=>rP.zoomAt(p,f.getNodes()),60)}async function _(){await g(tR[l.value].graph),E()}let v=j(y());function y(){try{let e=localStorage.getItem(UR);return e?JSON.parse(e):[]}catch{return[]}}function b(){localStorage.setItem(UR,JSON.stringify(v.value))}function x(e){let t=f.getNodes();if(!t.length)return;let n=t.map(e=>p.nodeViews.get(e.id)?.position||{x:0,y:0}),r=Math.min(...n.map(e=>e.x)),i=Math.min(...n.map(e=>e.y)),a=new Map(t.map((e,t)=>[e.id,t])),o=t.map((e,t)=>({type:d.get(e.id)||e.__gfType||`comment`,dx:Math.round(n[t].x-r),dy:Math.round(n[t].y-i)})),s=f.getConnections().map(e=>({s:a.get(e.source)??-1,sOut:e.sourceOutput,t:a.get(e.target)??-1,tIn:e.targetInput})).filter(e=>e.s>=0&&e.t>=0);v.value.push({name:e,nodes:o,conns:s}),b()}async function S(e,t=40,n=80){let r=[];for(let i of e.nodes){let e=await h(i.type,t+i.dx,n+i.dy);r.push(e)}for(let t of e.conns){let e=r[t.s],n=r[t.t];e&&n&&await f.addConnection(new sN.Connection(e,t.sOut,n,t.tIn))}setTimeout(()=>rP.zoomAt(p,f.getNodes()),60)}function C(e){v.value.splice(e,1),b()}let w=j(``);function T(){return{version:`2.0.0`,name:`rete-editor`,nodes:f.getNodes().map(e=>{let t=e.__gfType||d.get(e.id)||`comment`,n=u.get(e.id)||{},r=p.nodeViews.get(e.id);return{id:e.id,type:t,label:e.label,params:eR(t,n),position:{x:r?.position?.x||0,y:r?.position?.y||0}}}),connections:f.getConnections().map(e=>({id:e.id,source:e.source,sourceOutput:e.sourceOutput,target:e.target,targetInput:e.targetInput}))}}function E(){if(!r.value)return;let e=T();r.value.env.set(`theme`,o.value.theme),r.value.env.set(`riskThreshold`,o.value.riskThreshold),r.value.env.set(`scope`,o.value.scope);let t=e.nodes.filter(e=>e.type===`env-context`);t.forEach(e=>{e.params.theme!=null&&r.value.env.set(`theme`,e.params.theme),e.params.riskThreshold!=null&&r.value.env.set(`riskThreshold`,e.params.riskThreshold),e.params.scope!=null&&r.value.env.set(`scope`,e.params.scope)});let n=qT(e);i.value=JSON.stringify(n,null,2),r.value.fromJSON(n);let s=(e.nodes.find(e=>e.type===`engine-run`)||e.nodes.find(e=>e.type===`output`||e.type===`map-output`))?.params?.routeName||`graph`;r.value.run(s,{}),a.value=`运行 route=${s} · 图层 ${n.layers?.length||0} · 底图 ${n.baseLayers?.length||0} · env节点 ${t.length}`}function D(){m?.undo?.()}function ee(){m?.redo?.()}function O(e){o.value.theme=e}function k(e){o.value.scope=e}function te(){if(!f||!p)return;let e=f.getNodes().find(e=>p.nodeViews.get(e.id)?.selected);e?(s.value=e.id,c.value=d.get(e.id)||e.__gfType||null):(s.value=null,c.value=null)}let ne=null;async function re(){if(!t.value)return;f=new ZM,p=new cP(t.value);let e=new TI;e.addPreset(gI.classic.setup({customize:{socket(){return PL}}})),e.addPreset(gI.minimap.setup({size:160}));let n=new WP;n.addPreset(LP.classic.setup()),m=new DL,m.addPreset(CL.classic.setup());let r=new NL;f.use(p),p.use(e),p.use(n),f.use(m),p.use(r),rP.simpleNodesOrder(p),rP.selectableNodes(p,rP.selector(),{accumulating:rP.accumulateOnCtrl()}),UI.keyboard(m),await g(tR[0].graph)}return Ir(async()=>{await re(),r.value=xT({target:n.value}),r.value.env.set(`theme`,o.value.theme),r.value.env.set(`riskThreshold`,o.value.riskThreshold),r.value.env.set(`scope`,o.value.scope),E(),ne=setInterval(te,200)}),Br(()=>{ne&&=(clearInterval(ne),null);try{f?.getNodes?.().forEach(e=>f.removeNode(e.id))}catch{}r.value?.destroy(),f=null,p=null,m=null}),(e,r)=>(I(),L(`div`,yR,[R(`header`,bR,[r[9]||=R(`span`,{class:`re__title`},`geo-flow · rete v2 原生画布（UE/Blender 深色）`,-1),r[10]||=R(`span`,{class:`re__hint`},`typed sockets 契约 · 子规则流水线 · 下拉/滑块控件 · env 注入`,-1),r[11]||=R(`span`,{class:`re__bar-spacer`},null,-1),R(`div`,xR,[r[8]||=R(`label`,null,`预置示例`,-1),qn(R(`select`,{"onUpdate:modelValue":r[0]||=e=>l.value=e,onChange:_},[(I(!0),L(F,null,P(M(tR),(e,t)=>(I(),L(`option`,{key:t,value:t},A(e.label),9,SR))),128))],544),[[$o,l.value,void 0,{number:!0}]])])]),R(`div`,CR,[R(`section`,wR,[R(`div`,TR,[(I(!0),L(F,null,P(M($L),e=>(I(),L(`div`,{key:e.group,class:`re__group`},[R(`span`,ER,A(e.group),1),(I(!0),L(F,null,P(e.items,e=>(I(),L(`button`,{key:e.type,onClick:t=>h(e.type,40+Math.random()*400,80+Math.random()*300)},A(e.label),9,DR))),128))]))),128)),r[12]||=R(`span`,{class:`re__sep`},null,-1),R(`button`,{onClick:D},`undo`),R(`button`,{onClick:ee},`redo`),R(`button`,{class:`re__run`,onClick:E},`▶ 运行`)]),R(`div`,{class:`re__canvas`,ref_key:`reteEl`,ref:t},null,512)]),R(`section`,OR,[z(vR,{"selected-id":s.value,"selected-type":c.value,"params-map":M(u)},null,8,[`selected-id`,`selected-type`,`params-map`]),R(`div`,{class:`re__map`,ref_key:`mapEl`,ref:n},null,512),R(`div`,kR,[r[17]||=R(`div`,{class:`re__env-title`},`外部环境变量注入（engine.env）`,-1),R(`div`,AR,[r[13]||=R(`label`,null,`theme`,-1),R(`div`,jR,[R(`button`,{class:Ce({on:o.value.theme===`light`}),onClick:r[1]||=e=>O(`light`)},`light`,2),R(`button`,{class:Ce({on:o.value.theme===`dark`}),onClick:r[2]||=e=>O(`dark`)},`dark`,2)])]),R(`div`,MR,[r[14]||=R(`label`,null,`riskThreshold`,-1),qn(R(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,"onUpdate:modelValue":r[3]||=e=>o.value.riskThreshold=e},null,512),[[Qo,o.value.riskThreshold,void 0,{number:!0}]]),R(`span`,null,A(o.value.riskThreshold.toFixed(2)),1)]),R(`div`,NR,[r[15]||=R(`label`,null,`scope`,-1),R(`div`,PR,[R(`button`,{class:Ce({on:o.value.scope===`all`}),onClick:r[4]||=e=>k(`all`)},`all`,2),R(`button`,{class:Ce({on:o.value.scope===`alarm`}),onClick:r[5]||=e=>k(`alarm`)},`alarm`,2)])]),R(`button`,{class:`re__apply`,onClick:E},`应用 env 并重跑`),R(`div`,FR,A(a.value),1),R(`div`,IR,[r[16]||=R(`div`,{class:`re__env-title`},`子规则模板（localStorage）`,-1),R(`div`,LR,[qn(R(`input`,{"onUpdate:modelValue":r[6]||=e=>w.value=e,placeholder:`模板名`},null,512),[[Qo,w.value]]),R(`button`,{onClick:r[7]||=e=>{x(w.value||`模板`+(v.value.length+1)),w.value=``}},`存当前图`)]),v.value.length?Aa(``,!0):(I(),L(`div`,RR,`暂无模板，先存一个`)),(I(!0),L(F,null,P(v.value,(e,t)=>(I(),L(`div`,{key:t,class:`re__tpl-item`},[R(`span`,zR,[ka(A(e.name)+` `,1),R(`em`,null,`(`+A(e.nodes.length)+` 节点)`,1)]),R(`button`,{onClick:t=>S(e)},`展开`,8,BR),R(`button`,{class:`re__tpl-del`,onClick:e=>C(t)},`删`,8,VR)]))),128))])]),R(`details`,HR,[r[18]||=R(`summary`,null,`导出 MapConfigJSON（graphToMapConfig）`,-1),R(`pre`,null,A(i.value),1)])])])]))}}),[[`__scopeId`,`data-v-6443d1f4`]]),GR={class:`app`},KR={class:`app__stage`},qR={class:`app__mapbox`},JR={class:`dk__side`},YR={class:`dk__row`},XR=[`value`],ZR={class:`dk__stats`},QR={class:`dk__row`},$R=[`value`],ez=[`value`],tz={class:`dk__row`},nz=[`value`],rz=[`value`],iz={class:`dk__row`},az=[`value`],oz={class:`dk__row dk__row--check`},sz=[`checked`],cz=[`checked`],lz={class:`dk__list`},uz={class:`dk__li-title`},dz={class:`dk__li-meta`},fz={class:`dk__json`},pz=iu(N({__name:`DockLayoutDemo`,setup(e){PT(`note-panel`,N({name:`NotePanel`,props:{engine:{type:Object,default:null},text:{type:String,default:`说明`}},setup(e){let t=no(()=>e.engine?.engines?.size??0);return()=>[B(`div`,{class:`dk__note-title`},e.text),B(`div`,{class:`dk__note-line`},`由 registerWidget 注册，dock 只按 type 解析`),B(`div`,{class:`dk__note-line`},`当前引擎图层数：`+t.value)]}}),{title:`业务说明`});let t=j(),n=un(null),r=HT(),i=[`top-left`,`top-center`,`top-right`,`left`,`right`,`bottom-left`,`bottom-center`,`bottom-right`],a=[`none`,`row`,`column`,`full`],o=[{id:`toolbar`,type:`map-toolbar`,title:`地图工具`,position:`top-right`,priority:5},{id:`note`,type:`note-panel`,title:`顶部通栏`,position:`top-center`,span:`row`,priority:4},{id:`tree`,type:`layer-tree`,title:`图层树`,position:`top-left`,priority:3,collapsible:!0},{id:`leftbar`,type:`note-panel`,title:`左侧整条`,position:`left`,span:`column`,priority:2},{id:`legend`,type:`legend`,title:`图例`,position:`bottom-left`,priority:1},{id:`stat`,type:`stat-panel`,title:`统计`,position:`bottom-right`,priority:0,collapsible:!0,defaultCollapsed:!0}],s=j(`tree`),c=j(0);function l(e){let t=r.manager.get(s.value);t&&(r.dock({...t,...e}),n.value?.loadDock(r.snapshot()),c.value+=1)}let u=no(()=>(c.value,r.manager.get(s.value))),d=no(()=>(c.value,r.manager.sorted().map(e=>({id:e.id,title:e.title||e.type,position:e.position,span:e.span||`none`,priority:e.priority??0,order:r.manager.runtimeState(e.id)?.order??0,visible:e.visible!==!1})))),f=no(()=>(c.value,JSON.stringify(r.snapshot(),null,2)));function p(){let e=`w-`+Date.now().toString(36);r.dock({id:e,type:`note-panel`,title:`新微件 `+e.slice(3),position:`bottom-center`,priority:0}),s.value=e,c.value+=1}function m(e){let t=r.manager.get(e);t&&(r.setVisible(e,t.visible===!1),c.value+=1)}function h(e){r.toggleCollapse(e),c.value+=1}function g(){r.clear(),o.forEach(e=>r.dock(e)),c.value+=1}return Ir(()=>{n.value=xT({target:t.value}),n.value.baseLayer(`basemap.osm`),n.value.run(`dock-demo`,{}),n.value.dockManager.clear(),o.forEach(e=>n.value.dockManager.dock(e)),r.load(n.value.dockJSON()),c.value+=1}),Br(()=>{n.value?.destroy(),n.value=null}),(e,o)=>(I(),L(`div`,GR,[o[14]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 11 · Dock 停靠布局`),R(`span`,{class:`app__hint`},`Widget 是 dock 的管理对象 · 跨行/跨列 · priority 排序 · 隐藏/折叠 · 跨区拖放`)],-1),R(`div`,KR,[R(`div`,qR,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(M(VT),{engine:n.value,manager:M(r).manager},null,8,[`engine`,`manager`])]),R(`div`,JR,[o[11]||=R(`div`,{class:`dk__side-head`},`停靠面板（Widget）`,-1),R(`div`,YR,[o[6]||=R(`label`,null,`选中微件`,-1),qn(R(`select`,{"onUpdate:modelValue":o[0]||=e=>s.value=e},[(I(!0),L(F,null,P(d.value,e=>(I(),L(`option`,{key:e.id,value:e.id},A(e.title)+`（`+A(e.position)+`） `,9,XR))),128))],512),[[$o,s.value]])]),R(`div`,ZR,` priority `+A(u.value?.priority??0)+` · order `+A(u.value?M(r).runtimeState(u.value.id)?.order:0)+` · span `+A(u.value?.span??`none`)+` · `+A(u.value?.visible===!1?`hidden`:`visible`),1),R(`div`,QR,[o[7]||=R(`label`,null,`position`,-1),R(`select`,{value:u.value?.position,onChange:o[1]||=e=>l({position:e.target.value})},[(I(),L(F,null,P(i,e=>R(`option`,{key:e,value:e},A(e),9,ez)),64))],40,$R)]),R(`div`,tz,[o[8]||=R(`label`,null,`span`,-1),R(`select`,{value:u.value?.span??`none`,onChange:o[2]||=e=>l({span:e.target.value})},[(I(),L(F,null,P(a,e=>R(`option`,{key:e,value:e},A(e),9,rz)),64))],40,nz)]),R(`div`,iz,[R(`label`,null,`priority `+A(u.value?.priority??0),1),R(`input`,{type:`range`,min:`0`,max:`9`,value:u.value?.priority??0,onInput:o[3]||=e=>l({priority:Number(e.target.value)})},null,40,az)]),R(`div`,oz,[R(`label`,null,[R(`input`,{type:`checkbox`,checked:u.value?.visible!==!1,onChange:o[4]||=e=>m(s.value)},null,40,sz),o[9]||=ka(` visible`,-1)]),R(`label`,null,[R(`input`,{type:`checkbox`,checked:!!M(r).isCollapsed(s.value),onChange:o[5]||=e=>h(s.value)},null,40,cz),o[10]||=ka(` collapsed`,-1)])]),R(`div`,{class:`dk__btns`},[R(`button`,{type:`button`,onClick:p},`+ 新增微件`),R(`button`,{type:`button`,onClick:g},`复位布局`)]),o[12]||=R(`div`,{class:`dk__side-head dk__side-head--sub`},`排序（priority ↓ → 添加序 ↑）`,-1),R(`ul`,lz,[(I(!0),L(F,null,P(d.value,e=>(I(),L(`li`,{key:e.id,class:Ce({"dk__list--off":!e.visible})},[R(`span`,uz,A(e.title),1),R(`span`,dz,A(e.position)+` / `+A(e.span)+` / p`+A(e.priority)+` / #`+A(e.order),1)],2))),128))]),o[13]||=R(`div`,{class:`dk__side-head dk__side-head--sub`},`dock 声明式序列化`,-1),R(`pre`,fz,A(f.value),1)])])]))}}),[[`__scopeId`,`data-v-1d1c6783`]]),mz=Kl({history:ml(),routes:[{path:`/`,redirect:`/basic-chain`},{path:`/basic-chain`,name:`basic-chain`,component:sE,meta:{title:`示例 01 · 链式调用最小链路`,code:`./demos/01-basic-chain/BasicChainDemo.vue`}},{path:`/anonymous-layer`,name:`anonymous-layer`,component:yE,meta:{title:`示例 02 · 匿名图层 JSON 注册`,code:`./demos/02-anonymous-layer/AnonymousLayerDemo.vue`}},{path:`/predefined-layer`,name:`predefined-layer`,component:OE,meta:{title:`示例 03 · 业务图层类继承预定义`,code:`./demos/03-predefined-layer/PredefinedLayerDemo.vue`}},{path:`/external-config`,name:`external-config`,component:LE,meta:{title:`示例 04 · 外部 JSON 配置引擎`,code:`./demos/04-external-config/ExternalConfigDemo.vue`}},{path:`/expression-style`,name:`expression-style`,component:qE,meta:{title:`示例 05 · 表达式三态参数`,code:`./demos/05-expression-style/ExpressionStyleDemo.vue`}},{path:`/processors-all`,name:`processors-all`,component:iD,meta:{title:`示例 06 · 内置数据处理器`,code:`./demos/06-processors-all/ProcessorsAllDemo.vue`}},{path:`/effects-all`,name:`effects-all`,component:pD,meta:{title:`示例 07 · 内置效果`,code:`./demos/07-effects-all/EffectsAllDemo.vue`}},{path:`/carousel-popup`,name:`carousel-popup`,component:AD,meta:{title:`示例 08 · 轮播 + Popup 联动`,code:`./demos/08-carousel-popup/CarouselPopupDemo.vue`}},{path:`/custom-plugin`,name:`custom-plugin`,component:RD,meta:{title:`示例 09 · 自定义插件`,code:`./demos/09-custom-plugin/CustomPluginDemo.vue`}},{path:`/with-rete`,name:`with-rete`,component:oO,meta:{title:`示例 10 · 可视化编排（rete 桥接）`}},{path:`/style/single`,name:`style-single`,component:vk,meta:{title:`配图 2.1 · 单值`,code:`./demos/style/SingleStyleDemo.vue`}},{path:`/style/categorical`,name:`style-categorical`,component:Ek,meta:{title:`配图 2.2 · 分类`,code:`./demos/style/CategoricalStyleDemo.vue`}},{path:`/style/expression`,name:`style-expression`,component:Pk,meta:{title:`配图 2.3 · 表达式`,code:`./demos/style/ExpressionStyleDemo.vue`}},{path:`/style/function`,name:`style-function`,component:Hk,meta:{title:`配图 2.4 · 函数`,code:`./demos/style/FunctionStyleDemo.vue`}},{path:`/style/multi`,name:`style-multi`,component:Xk,meta:{title:`配图 2.5 · 多属性`,code:`./demos/style/MultiAttrStyleDemo.vue`}},{path:`/style/stage`,name:`style-stage`,component:uA,meta:{title:`配图 2.6 · 分阶段链式 + 规则引擎`,code:`./demos/style/StageBuilderDemo.vue`}},{path:`/effect/ripple`,name:`effect-ripple`,component:AA,meta:{title:`效果 3.1 · ripple`,code:`./demos/effects/RipplePlayground.vue`}},{path:`/effect/pulse`,name:`effect-pulse`,component:jA,meta:{title:`效果 3.2 · pulse`,code:`./demos/effects/PulsePlayground.vue`}},{path:`/effect/wave`,name:`effect-wave`,component:MA,meta:{title:`效果 3.3 · wave`,code:`./demos/effects/WavePlayground.vue`}},{path:`/effect/breathing`,name:`effect-breathing`,component:NA,meta:{title:`效果 3.4 · breathing`,code:`./demos/effects/BreathingPlayground.vue`}},{path:`/effect/carousel`,name:`effect-carousel`,component:qA,meta:{title:`效果 3.5 · carousel`,code:`./demos/effects/CarouselPlayground.vue`}},{path:`/effect/custom`,name:`effect-custom`,component:ij,meta:{title:`效果 3.6 · 自定义效果`,code:`./demos/effects/CustomEffectPlayground.vue`}},{path:`/layer/append`,name:`layer-append`,component:Sj,meta:{title:`基础图层 4.1 · appendData`,code:`./demos/layer/AppendDataDemo.vue`}},{path:`/layer/update`,name:`layer-update`,component:Pj,meta:{title:`基础图层 4.2 · updateData`,code:`./demos/layer/UpdateDataDemo.vue`}},{path:`/layer/restore`,name:`layer-restore`,component:Jj,meta:{title:`基础图层 4.3 · keepOriginal+restore`,code:`./demos/layer/RestoreDataDemo.vue`}},{path:`/layer/playground`,name:`layer-playground`,component:cM,meta:{title:`基础图层 4.4 · 综合数据操作`,code:`./demos/layer/MultiDatasetDemo.vue`}},{path:`/env-injection`,name:`env-injection`,component:yM,meta:{title:`环境响应 · env 注入响应式`,code:`./demos/env/EnvInjectionDemo.vue`}},{path:`/rete-editor`,name:`rete-editor`,component:WR,meta:{title:`可视化编排 · rete v2 原生画布`}},{path:`/dock-layout`,name:`dock-layout`,component:pz,meta:{title:`停靠布局 · Widget 由 dock 托管`,code:`./demos/dock/DockLayoutDemo.vue`}}]});ls(yu).use(mz).mount(`#app`);