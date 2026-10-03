var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function l(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var u={},d=[],f=()=>{},p=()=>!1,m=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),h=e=>e.startsWith(`onUpdate:`),g=Object.assign,_=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},v=Object.prototype.hasOwnProperty,y=(e,t)=>v.call(e,t),b=Array.isArray,x=e=>te(e)===`[object Map]`,S=e=>te(e)===`[object Set]`,C=e=>te(e)===`[object Date]`,w=e=>typeof e==`function`,T=e=>typeof e==`string`,E=e=>typeof e==`symbol`,D=e=>typeof e==`object`&&!!e,ee=e=>(D(e)||w(e))&&w(e.then)&&w(e.catch),O=Object.prototype.toString,te=e=>O.call(e),ne=e=>te(e).slice(8,-1),re=e=>te(e)===`[object Object]`,ie=e=>T(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ae=l(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),oe=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},se=/-\w/g,ce=oe(e=>e.replace(se,e=>e.slice(1).toUpperCase())),le=/\B([A-Z])/g,ue=oe(e=>e.replace(le,`-$1`).toLowerCase()),de=oe(e=>e.charAt(0).toUpperCase()+e.slice(1)),fe=oe(e=>e?`on${de(e)}`:``),pe=(e,t)=>!Object.is(e,t),me=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},he=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ge=e=>{let t=parseFloat(e);return isNaN(t)?e:t},_e,ve=()=>_e||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ye(e){if(b(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=T(r)?Ce(r):ye(r);if(i)for(let e in i)t[e]=i[e]}return t}if(T(e)||D(e))return e}var be=/;(?![^(]*\))/g,xe=/:([^]+)/,Se=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ce(e){let t={};return e.replace(Se,e=>e.startsWith(`/*`)?``:e).split(be).forEach(e=>{if(e){let n=e.split(xe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function we(e){let t=``;if(T(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){let r=we(e[n]);r&&(t+=r+` `)}else if(D(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var Te=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Ee=l(Te);Te+``;function De(e){return!!e||e===``}function Oe(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Me(e[i],t[i],n);return r}function ke(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&Me(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function Ae(e,t,n){let r=x(e),i=x(t);if(r||i||(r=S(e),i=S(t),r||i))return r&&i?ke(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!Me(e[r],t[r],n))return!1}return String(e)===String(t)}function je(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function Me(e,t,n){if(e===t)return!0;let r=C(e),i=C(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=E(e),i=E(t),r||i?e===t:(r=b(e),i=b(t),r||i?r&&i?je(e,t,n,Oe):!1:(r=D(e),i=D(t),r||i?!r||!i?!1:je(e,t,n,Ae):String(e)===String(t))))}function Ne(e,t){return e.findIndex(e=>Me(e,t))}var Pe=e=>!!(e&&e.__v_isRef===!0),k=e=>T(e)?e:e==null?``:b(e)||D(e)&&(e.toString===O||!w(e.toString))?Pe(e)?k(e.value):JSON.stringify(e,Fe,2):String(e),Fe=(e,t)=>Pe(t)?Fe(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ie(t,r)+` =>`]=n,e),{})}:S(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ie(e))}:E(t)?Ie(t):D(t)&&!b(t)&&!re(t)?String(t):t,Ie=(e,t=``)=>E(e)?`Symbol(${e.description??t})`:e,Le,Re=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=Le;try{return Le=this,e()}finally{Le=t}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let e=Le;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ze(){return Le}var Be,Ve=new WeakSet,He=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ve.has(this)&&(Ve.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ke(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,st(this),Ye(this);let e=Be,t=rt;Be=this,rt=!0;try{return this.fn()}finally{Xe(this),Be=e,rt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$e(e);this.deps=this.depsTail=void 0,st(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ve.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ze(this)&&this.run()}get dirty(){return Ze(this)}},Ue=0,We,Ge;function Ke(e,t=!1){if(e.flags|=8,t){e.next=Ge,Ge=e;return}e.next=We,We=e}function qe(){Ue++}function Je(){if(--Ue>0)return;if(Ge){let e=Ge;for(Ge=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;We;){let t=We;for(We=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ye(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),$e(r),et(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ct)||(e.globalVersion=ct,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ze(e))))return;e.flags|=2;let t=e.dep,n=Be,r=rt;Be=e,rt=!0;try{Ye(e);let n=e.fn(e._value);(t.version===0||pe(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{Be=n,rt=r,Xe(e),e.flags&=-3}}function $e(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)$e(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function et(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function tt(e,t){e.effect instanceof He&&(e=e.effect.fn);let n=new He(e);t&&g(n,t);try{n.run()}catch(e){throw n.stop(),e}let r=n.run.bind(n);return r.effect=n,r}function nt(e){e.effect.stop()}var rt=!0,it=[];function at(){it.push(rt),rt=!1}function ot(){let e=it.pop();rt=e===void 0||e}function st(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=Be;Be=void 0;try{t()}finally{Be=e}}}var ct=0,lt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},ut=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Be||!rt||Be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Be)t=this.activeLink=new lt(Be,this),Be.deps?(t.prevDep=Be.depsTail,Be.depsTail.nextDep=t,Be.depsTail=t):Be.deps=Be.depsTail=t,dt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=Be.depsTail,t.nextDep=void 0,Be.depsTail.nextDep=t,Be.depsTail=t,Be.deps===t&&(Be.deps=e)}return t}trigger(e){this.version++,ct++,this.notify(e)}notify(e){qe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Je()}}};function dt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)dt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var ft=new WeakMap,pt=Symbol(``),mt=Symbol(``),ht=Symbol(``);function gt(e,t,n){if(rt&&Be){let t=ft.get(e);t||ft.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new ut),r.map=t,r.key=n),r.track()}}function _t(e,t,n,r,i,a){let o=ft.get(e);if(!o){ct++;return}let s=e=>{e&&e.trigger()};if(qe(),t===`clear`)o.forEach(s);else{let i=b(e),a=i&&ie(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===ht||!E(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(ht)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(pt)),x(e)&&s(o.get(mt)));break;case`delete`:i||(s(o.get(pt)),x(e)&&s(o.get(mt)));break;case`set`:x(e)&&s(o.get(pt))}}Je()}function vt(e){let t=on(e);return t===e||(gt(t,`iterate`,ht),rn(e))?t:nn(e)?tn(e)?t.map(e=>ln(cn(e))):t.map(ln):t.map(cn)}function yt(e){return gt(e=on(e),`iterate`,ht),e}function bt(e,t){return nn(e)?ln(tn(e)?cn(t):t):cn(t)}var xt={__proto__:null,[Symbol.iterator](){return St(this,Symbol.iterator,e=>bt(this,e))},concat(...e){return vt(this).concat(...e.map(e=>b(e)?vt(e):e))},entries(){return St(this,`entries`,e=>(e[1]=bt(this,e[1]),e))},every(e,t){return wt(this,`every`,e,t,void 0,arguments)},filter(e,t){return wt(this,`filter`,e,t,e=>e.map(e=>bt(this,e)),arguments)},find(e,t){return wt(this,`find`,e,t,e=>bt(this,e),arguments)},findIndex(e,t){return wt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return wt(this,`findLast`,e,t,e=>bt(this,e),arguments)},findLastIndex(e,t){return wt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return wt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Et(this,`includes`,e)},indexOf(...e){return Et(this,`indexOf`,e)},join(e){return vt(this).join(e)},lastIndexOf(...e){return Et(this,`lastIndexOf`,e)},map(e,t){return wt(this,`map`,e,t,void 0,arguments)},pop(){return Dt(this,`pop`)},push(...e){return Dt(this,`push`,e)},reduce(e,...t){return Tt(this,`reduce`,e,t)},reduceRight(e,...t){return Tt(this,`reduceRight`,e,t)},shift(){return Dt(this,`shift`)},some(e,t){return wt(this,`some`,e,t,void 0,arguments)},splice(...e){return Dt(this,`splice`,e)},toReversed(){return vt(this).toReversed()},toSorted(e){return vt(this).toSorted(e)},toSpliced(...e){return vt(this).toSpliced(...e)},unshift(...e){return Dt(this,`unshift`,e)},values(){return St(this,`values`,e=>bt(this,e))}};function St(e,t,n){let r=yt(e),i=r[t]();return r!==e&&!rn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Ct=Array.prototype;function wt(e,t,n,r,i,a){let o=yt(e),s=o!==e&&!rn(e),c=o[t];if(c!==Ct[t]){let t=c.apply(e,a);return s?cn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,bt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function Tt(e,t,n,r){let i=yt(e),a=i!==e&&!rn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=bt(e,t)),n.call(this,t,bt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?bt(e,c):c}function Et(e,t,n){let r=on(e);gt(r,`iterate`,ht);let i=r[t](...n);return(i===-1||i===!1)&&an(n[0])?(n[0]=on(n[0]),r[t](...n)):i}function Dt(e,t,n=[]){at(),qe();let r=on(e)[t].apply(e,n);return Je(),ot(),r}var Ot=l(`__proto__,__v_isRef,__isVue`),kt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(E));function At(e){E(e)||(e=String(e));let t=on(this);return gt(t,`has`,e),t.hasOwnProperty(e)}var jt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Yt:Jt:i?qt:Kt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=b(e);if(!r){let e;if(a&&(e=xt[t]))return e;if(t===`hasOwnProperty`)return At}let o=Reflect.get(e,t,un(e)?e:n);if((E(t)?kt.has(t):Ot(t))||(r||gt(e,`get`,t),i))return o;if(un(o)){let e=a&&ie(t)?o:o.value;return r&&D(e)?$t(e):e}return D(o)?r?$t(o):Zt(o):o}},Mt=class extends jt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=b(e)&&ie(t);if(!this._isShallow){let e=nn(i);if(!rn(n)&&!nn(n)&&(i=on(i),n=on(n)),!a&&un(i)&&!un(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:y(e,t),s=Reflect.set(e,t,n,un(e)?e:r);return e===on(r)&&s&&(o?pe(n,i)&&_t(e,`set`,t,n,i):_t(e,`add`,t,n)),s}deleteProperty(e,t){let n=y(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&_t(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!E(t)||!kt.has(t))&&gt(e,`has`,t),n}ownKeys(e){return gt(e,`iterate`,b(e)?`length`:pt),Reflect.ownKeys(e)}},Nt=class extends jt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Pt=new Mt,Ft=new Nt,It=new Mt(!0),Lt=e=>e,Rt=e=>Reflect.getPrototypeOf(e);function zt(e,t,n){return function(...r){let i=this.__v_raw,a=on(i),o=x(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Lt:t?ln:cn;return!t&&gt(a,`iterate`,c?mt:pt),g(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function Bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Vt(e,t){let n={get(n){let r=this.__v_raw,i=on(r),a=on(n);e||(pe(n,a)&&gt(i,`get`,n),gt(i,`get`,a));let{has:o}=Rt(i),s=t?Lt:e?ln:cn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&gt(on(t),`iterate`,pt),t.size},has(t){let n=this.__v_raw,r=on(n),i=on(t);return e||(pe(t,i)&&gt(r,`has`,t),gt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=on(a),s=t?Lt:e?ln:cn;return!e&&gt(o,`iterate`,pt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return g(n,e?{add:Bt(`add`),set:Bt(`set`),delete:Bt(`delete`),clear:Bt(`clear`)}:{add(e){let n=on(this),r=Rt(n),i=on(e),a=!t&&!rn(e)&&!nn(e)?i:e;return r.has.call(n,a)||pe(e,a)&&r.has.call(n,e)||pe(i,a)&&r.has.call(n,i)||(n.add(a),_t(n,`add`,a,a)),this},set(e,n){!t&&!rn(n)&&!nn(n)&&(n=on(n));let r=on(this),{has:i,get:a}=Rt(r),o=i.call(r,e);o||=(e=on(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?pe(n,s)&&_t(r,`set`,e,n,s):_t(r,`add`,e,n),this},delete(e){let t=on(this),{has:n,get:r}=Rt(t),i=n.call(t,e);i||=(e=on(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&_t(t,`delete`,e,void 0,a),o},clear(){let e=on(this),t=e.size!==0,n=e.clear();return t&&_t(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=zt(r,e,t)}),n}function Ht(e,t){let n=Vt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(y(n,r)&&r in t?n:t,r,i)}var Ut={get:Ht(!1,!1)},Wt={get:Ht(!1,!0)},Gt={get:Ht(!0,!1)},Kt=new WeakMap,qt=new WeakMap,Jt=new WeakMap,Yt=new WeakMap;function Xt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Zt(e){return nn(e)?e:en(e,!1,Pt,Ut,Kt)}function Qt(e){return en(e,!1,It,Wt,qt)}function $t(e){return en(e,!0,Ft,Gt,Jt)}function en(e,t,n,r,i){if(!D(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Xt(ne(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function tn(e){return nn(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function nn(e){return!!(e&&e.__v_isReadonly)}function rn(e){return!!(e&&e.__v_isShallow)}function an(e){return e?!!e.__v_raw:!1}function on(e){let t=e&&e.__v_raw;return t?on(t):e}function sn(e){return!y(e,`__v_skip`)&&Object.isExtensible(e)&&he(e,`__v_skip`,!0),e}var cn=e=>D(e)?Zt(e):e,ln=e=>D(e)?$t(e):e;function un(e){return e?e.__v_isRef===!0:!1}function A(e){return fn(e,!1)}function dn(e){return fn(e,!0)}function fn(e,t){return un(e)?e:new pn(e,t)}var pn=class{constructor(e,t){this.dep=new ut,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:on(e),this._value=t?e:cn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||rn(e)||nn(e);e=n?e:on(e),pe(e,t)&&(this._rawValue=e,this._value=n?e:cn(e),this.dep.trigger())}};function j(e){return un(e)?e.value:e}var mn={get:(e,t,n)=>t===`__v_raw`?e:j(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return un(i)&&!un(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function hn(e){return tn(e)?e:new Proxy(e,mn)}var gn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ut(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ct-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return Ke(this,!0),!0}get value(){let e=this.dep.track();return Qe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function _n(e,t,n=!1){let r,i;return w(e)?r=e:(r=e.get,i=e.set),new gn(r,i,n)}var vn={},yn=new WeakMap,bn=void 0;function xn(e,t=!1,n=bn){if(n){let t=yn.get(n);t||yn.set(n,t=[]),t.push(e)}}function Sn(e,t,n=u){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:rn(e)||i===!1||i===0?Cn(e,1):Cn(e),d,p,m,h,g=!1,v=!1;if(un(e)?(p=()=>e.value,g=rn(e)):tn(e)?(p=()=>l(e),g=!0):b(e)?(v=!0,g=e.some(e=>tn(e)||rn(e)),p=()=>e.map(e=>{if(un(e))return e.value;if(tn(e))return l(e);if(w(e))return c?c(e,2):e()})):p=w(e)?t?c?()=>c(e,2):e:()=>{if(m){at();try{m()}finally{ot()}}let t=bn;bn=d;try{return c?c(e,3,[h]):e(h)}finally{bn=t}}:f,t&&i){let e=p,t=i===!0?1/0:i;p=()=>Cn(e(),t)}let y=ze(),x=()=>{d.stop(),y&&y.active&&_(y.effects,d)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return x(),n}}let S=v?Array(e.length).fill(vn):vn,C=e=>{if(d.flags&1&&(d.dirty||e)){if(t){let n=d.run();if(e||i||g||(v?n.some((e,t)=>pe(e,S[t])):pe(n,S))){m&&m();let e=bn;bn=d;try{let e=[n,S===vn?void 0:v&&S[0]===vn?[]:S,h];S=n,c?c(t,3,e):t(...e)}finally{bn=e}}}else d.run()}};return s&&s(C),d=new He(p),d.scheduler=o?()=>o(C,!1):C,h=e=>xn(e,!1,d),m=d.onStop=()=>{let e=yn.get(d);if(e){if(c)c(e,4);else for(let t of e)t();yn.delete(d)}},t?r?C(!0):S=d.run():o?o(C.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Cn(e,t=1/0,n){if(t<=0||!D(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,un(e))Cn(e.value,t,n);else if(b(e))for(let r=0;r<e.length;r++)Cn(e[r],t,n);else if(S(e)||x(e))e.forEach(e=>{Cn(e,t,n)});else if(re(e)){for(let r in e)Cn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Cn(e[r],t,n)}return e}function wn(e,t,n,r){try{return r?e(...r):e()}catch(e){En(e,t,n)}}function Tn(e,t,n,r){if(w(e)){let i=wn(e,t,n,r);return i&&ee(i)&&i.catch(e=>{En(e,t,n)}),i}if(b(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Tn(e[a],t,n,r));return i}}function En(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||u;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){at(),wn(a,null,10,[e,i,o]),ot();return}}Dn(e,n,i,r,o)}function Dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var On=[],kn=-1,An=[],jn=null,Mn=0,Nn=Promise.resolve(),Pn=null;function Fn(e){let t=Pn||Nn;return e?t.then(this?e.bind(this):e):t}function In(e){let t=kn+1,n=On.length;for(;t<n;){let r=t+n>>>1,i=On[r],a=Hn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Ln(e){if(!(e.flags&1)){let t=Hn(e),n=On[On.length-1];!n||!(e.flags&2)&&t>=Hn(n)?On.push(e):On.splice(In(t),0,e),e.flags|=1,Rn()}}function Rn(){Pn||=Nn.then(Un)}function zn(e){if(!b(e))jn&&e.id===-1?jn.splice(Mn+1,0,e):e.flags&1||(An.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)An.push(e[t]);Rn()}function Bn(e,t,n=kn+1){for(;n<On.length;n++){let t=On[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;On.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Vn(e){if(An.length){let e=[...new Set(An)].sort((e,t)=>Hn(e)-Hn(t));if(An.length=0,jn){for(let t=0;t<e.length;t++)jn.push(e[t]);return}for(jn=e,Mn=0;Mn<jn.length;Mn++){let e=jn[Mn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}jn=null,Mn=0}}var Hn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Un(e){try{for(kn=0;kn<On.length;kn++){let e=On[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<On.length;kn++){let e=On[kn];e&&(e.flags&=-2)}kn=-1,On.length=0,Vn(e),Pn=null,(On.length||An.length)&&Un(e)}}var Wn=null,Gn=null;function Kn(e){let t=Wn;return Wn=e,Gn=e&&e.type.__scopeId||null,t}function qn(e,t=Wn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ya(-1);let i=Kn(t),a=ha.length,o;try{o=e(...n)}finally{for(let e=ha.length;e>a;e--)_a();Kn(i),r._d&&ya(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function M(e,t){if(Wn===null)return e;let n=Qa(Wn),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=u]=t[e];i&&(w(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function Jn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(at(),Tn(c,n,8,[e.el,s,e,t]),ot())}}function Yn(e,t){if(Ra){let n=Ra.provides,r=Ra.parent&&Ra.parent.provides;r===n&&(n=Ra.provides=Object.create(r)),n[e]=t}}function Xn(e,t,n=!1){let r=za();if(r||Si){let i=Si?Si._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&w(t)?t.call(r&&r.proxy):t}}var Zn=Symbol.for(`v-scx`),Qn=()=>Xn(Zn);function $n(e,t){return tr(e,null,t)}function er(e,t,n){return tr(e,t,n)}function tr(e,t,n=u){let{immediate:r,deep:i,flush:a,once:o}=n,s=g({},n),c=t&&r||!t&&a!==`post`,l;if(Ga){if(a===`sync`){let e=Qn();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=f,e.resume=f,e.pause=f,e}}let d=Ra;s.call=(e,t,n)=>Tn(e,d,t,n);let p=!1;a===`post`?s.scheduler=e=>{$i(e,d&&d.suspense)}:a!==`sync`&&(p=!0,s.scheduler=(e,t)=>{t?e():Ln(e)}),s.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,d&&(e.id=d.uid,e.i=d))};let m=Sn(e,t,s);return Ga&&(l?l.push(m):c&&m()),m}function nr(e,t,n){let r=this.proxy,i=T(e)?e.includes(`.`)?rr(r,e):()=>r[e]:e.bind(r,r),a;w(t)?a=t:(a=t.handler,n=t);let o=Ha(this),s=tr(i,a.bind(r),n);return o(),s}function rr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var ir=new WeakMap,ar=Symbol(`_vte`),or=e=>e.__isTeleport,sr=e=>e&&(e.disabled||e.disabled===``),cr=e=>e&&(e.defer||e.defer===``),lr=e=>typeof SVGElement<`u`&&e instanceof SVGElement,ur=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,dr=(e,t)=>{let n=e&&e.to;return T(n)?t?t(n):null:n},fr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=sr(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=sr(e.props),r=e.target=dr(e.props,m),a=_r(r,e,h,p);r&&(o!==`svg`&&lr(r)?o=`svg`:o!==`mathml`&&ur(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),gr(e,!1)))},S=e=>{let t=()=>{if(ir.get(e)===t){if(ir.delete(e),sr(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),gr(e,!0)}x(e)}};ir.set(e,t),$i(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),cr(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),gr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=ir.get(e);if(u){u.flags|=8,ir.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=sr(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||lr(p)?o=`svg`:(o===`mathml`||ur(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),aa(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):pr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=dr(t.props,m);e&&(t.target=e,pr(t,e,null,l,0))}else g&&pr(t,p,h,l,1);gr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=sr(f),m=a||!p,h=ir.get(e);if(h&&(h.flags|=8,ir.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:pr,hydrate:mr};function pr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!ir.has(e)&&(!d||sr(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function mr(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=dr(t.props,c),h=sr(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||_r(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||_r(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),gr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var hr=fr;function gr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function _r(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[ar]=o,e&&(r(a,e,i),r(o,e,i)),o}var vr=Symbol(`_leaveCb`);function yr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==pa){t=n;break}}return t}function br(e){if(!Or(e))return or(e.type)&&e.children?yr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&w(n.default))return n.default()}}function xr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;xr(or(n.type)&&br(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function N(e,t){return w(e)?g({name:e.name},t,{setup:e}):e}function Sr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Cr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var wr=new WeakMap;function Tr(e,t,n,r,i=!1){if(b(e)){e.forEach((e,a)=>Tr(e,t&&(b(t)?t[a]:t),n,r,i));return}if(Dr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Tr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?Qa(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,d=s.refs===u?s.refs={}:s.refs,f=s.setupState,m=on(f),h=f===u?p:e=>!Cr(d,e)&&y(m,e),g=(e,t)=>!(t&&Cr(d,t));if(l!=null&&l!==c){if(Er(t),T(l))d[l]=null,h(l)&&(f[l]=null);else if(un(l)){let e=t;g(l,e.k)&&(l.value=null),e.k&&(d[e.k]=null)}}if(w(c))wn(c,s,12,[o,d]);else{let t=T(c),r=un(c);if(t||r){let s=()=>{if(e.f){let n=t?h(c)?f[c]:d[c]:g(c)||!e.k?c.value:d[e.k];if(i)b(n)&&_(n,a);else if(b(n))n.includes(a)||n.push(a);else if(t)d[c]=[a],h(c)&&(f[c]=d[c]);else{let t=[a];g(c,e.k)&&(c.value=t),e.k&&(d[e.k]=t)}}else t?(d[c]=o,h(c)&&(f[c]=o)):r&&(g(c,e.k)&&(c.value=o),e.k&&(d[e.k]=o))};if(o){let t=()=>{s(),wr.delete(e)};t.id=-1,wr.set(e,t),$i(t,n)}else Er(e),s()}}}function Er(e){let t=wr.get(e);t&&(t.flags|=8,wr.delete(e))}ve().requestIdleCallback,ve().cancelIdleCallback;var Dr=e=>!!e.type.__asyncLoader,Or=e=>e.type.__isKeepAlive;function kr(e,t){jr(e,`a`,t)}function Ar(e,t){jr(e,`da`,t)}function jr(e,t,n=Ra){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Nr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Or(e.parent.vnode)&&Mr(r,t,n,e),e=e.parent}}function Mr(e,t,n,r){let i=Nr(t,e,r,!0);Br(()=>{_(r[t],i)},n)}function Nr(e,t,n=Ra,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{at();let i=Ha(n),a=Tn(t,n,e,r);return i(),ot(),a};return r?i.unshift(a):i.push(a),a}}var Pr=e=>(t,n=Ra)=>{(!Ga||e===`sp`)&&Nr(e,(...e)=>t(...e),n)},Fr=Pr(`bm`),Ir=Pr(`m`),Lr=Pr(`bu`),Rr=Pr(`u`),zr=Pr(`bum`),Br=Pr(`um`),Vr=Pr(`sp`),Hr=Pr(`rtg`),Ur=Pr(`rtc`);function Wr(e,t=Ra){Nr(`ec`,e,t)}var Gr=`components`;function Kr(e,t){return Yr(Gr,e,!0,t)||e}var qr=Symbol.for(`v-ndc`);function Jr(e){return T(e)?Yr(Gr,e,!1)||e:e||qr}function Yr(e,t,n=!0,r=!1){let i=Wn||Ra;if(i){let n=i.type;if(e===Gr){let e=$a(n,!1);if(e&&(e===t||e===ce(t)||e===de(ce(t))))return n}let a=Xr(i[e]||n[e],t)||Xr(i.appContext[e],t);return!a&&r?n:a}}function Xr(e,t){return e&&(e[t]||e[ce(t)]||e[de(ce(t))])}function P(e,t,n,r){let i,a=n&&n[r],o=b(e);if(o||T(e)){let n=o&&tn(e),r=!1,s=!1;n&&(r=!rn(e),s=nn(e),e=yt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?ln(cn(e[n])):cn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(D(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Zr(e,t,n,r,i,a){if(n??={},Wn.ce||Wn.parent&&Dr(Wn.parent)&&Wn.parent.ce){let e=a!=null&&n.key==null?g({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),I(),xa(F,null,[z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=ha.length;I();let c;try{let i=o&&Qr(o(n)),s=n.key||a||i&&i.key;c=xa(F,{key:(s&&!E(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=ha.length;e>s;e--)_a();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Qr(e){return e.some(e=>!Sa(e)||!(e.type===pa||e.type===F&&!Qr(e.children)))?e:null}var $r=e=>e?Wa(e)?Qa(e):$r(e.parent):null,ei=g(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>li(e),$forceUpdate:e=>e.f||=()=>{Ln(e.update)},$nextTick:e=>e.n||=Fn.bind(e.proxy),$watch:e=>nr.bind(e)}),ti=(e,t)=>e!==u&&!e.__isScriptSetup&&y(e,t),ni={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(ti(r,t))return o[t]=1,r[t];else if(i!==u&&y(i,t))return o[t]=2,i[t];else if(y(a,t))return o[t]=3,a[t];else if(n!==u&&y(n,t))return o[t]=4,n[t];else ii&&(o[t]=0)}let l=ei[t],d,f;if(l)return t===`$attrs`&&gt(e.attrs,`get`,``),l(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==u&&y(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,y(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return ti(i,t)?(i[t]=n,!0):r!==u&&y(r,t)?(r[t]=n,!0):y(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==u&&s[0]!==`$`&&y(e,s)||ti(t,s)||y(a,s)||y(r,s)||y(ei,s)||y(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?y(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function ri(e){return b(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var ii=!0;function ai(e){let t=li(e),n=e.proxy,r=e.ctx;ii=!1,t.beforeCreate&&si(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:h,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:x,unmounted:S,render:C,renderTracked:T,renderTriggered:E,errorCaptured:ee,serverPrefetch:O,expose:te,inheritAttrs:ne,components:re,directives:ie,filters:ae}=t;if(l&&oi(l,r,null),o)for(let e in o){let t=o[e];w(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);D(t)&&(e.data=Zt(t))}if(ii=!0,a)for(let e in a){let t=a[e],i=to({get:w(t)?t.bind(n,n):w(t.get)?t.get.bind(n,n):f,set:!w(t)&&w(t.set)?t.set.bind(n):f});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)ci(s[e],r,n,e);if(c){let e=w(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Yn(t,e[t])})}u&&si(u,e,`c`);function oe(e,t){b(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(oe(Fr,d),oe(Ir,p),oe(Lr,m),oe(Rr,h),oe(kr,g),oe(Ar,_),oe(Wr,ee),oe(Ur,T),oe(Hr,E),oe(zr,y),oe(Br,S),oe(Vr,O),b(te)){if(te.length){let t=e.exposed||={};te.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}C&&e.render===f&&(e.render=C),ne!=null&&(e.inheritAttrs=ne),re&&(e.components=re),ie&&(e.directives=ie),O&&Sr(e)}function oi(e,t,n=f){b(e)&&(e=mi(e));for(let n in e){let r=e[n],i;i=D(r)?`default`in r?Xn(r.from||n,r.default,!0):Xn(r.from||n):Xn(r),un(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function si(e,t,n){Tn(b(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ci(e,t,n,r){let i=r.includes(`.`)?rr(n,r):()=>n[r];if(T(e)){let n=t[e];w(n)&&er(i,n)}else if(w(e))er(i,e.bind(n));else if(D(e)){if(b(e))e.forEach(e=>ci(e,t,n,r));else{let r=w(e.handler)?e.handler.bind(n):t[e.handler];w(r)&&er(i,r,e)}}}function li(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>ui(c,e,o,!0)),ui(c,t,o)),D(t)&&a.set(t,c),c}function ui(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&ui(e,a,n,!0),i&&i.forEach(t=>ui(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=di[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var di={data:fi,props:_i,emits:_i,methods:gi,computed:gi,beforeCreate:hi,created:hi,beforeMount:hi,mounted:hi,beforeUpdate:hi,updated:hi,beforeDestroy:hi,beforeUnmount:hi,destroyed:hi,unmounted:hi,activated:hi,deactivated:hi,errorCaptured:hi,serverPrefetch:hi,components:gi,directives:gi,watch:vi,provide:fi,inject:pi};function fi(e,t){return t?e?function(){return g(w(e)?e.call(this,this):e,w(t)?t.call(this,this):t)}:t:e}function pi(e,t){return gi(mi(e),mi(t))}function mi(e){if(b(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function hi(e,t){return e?[...new Set([].concat(e,t))]:t}function gi(e,t){return e?g(Object.create(null),e,t):t}function _i(e,t){return e?b(e)&&b(t)?[...new Set([...e,...t])]:g(Object.create(null),ri(e),ri(t??{})):t}function vi(e,t){if(!e)return t;if(!t)return e;let n=g(Object.create(null),e);for(let r in t)n[r]=hi(e[r],t[r]);return n}function yi(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var bi=0;function xi(e,t){return function(n,r=null){w(n)||(n=g({},n)),r!=null&&!D(r)&&(r=null);let i=yi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:bi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:no,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&w(e.install)?(a.add(e),e.install(c,...t)):w(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||z(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Qa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(Tn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Si;Si=c;try{return e()}finally{Si=t}}};return c}}var Si=null,Ci=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${ce(t)}Modifiers`]||e[`${ue(t)}Modifiers`];function wi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||u,i=n,a=t.startsWith(`update:`),o=a&&Ci(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>T(e)?e.trim():e)),o.number&&(i=i.map(ge)));let s,c=r[s=fe(t)]||r[s=fe(ce(t))];!c&&a&&(c=r[s=fe(ue(t))]),c&&Tn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Tn(l,e,6,i)}}var Ti=new WeakMap;function Ei(e,t,n=!1){let r=n?Ti:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!w(e)){let r=e=>{let n=Ei(e,t,!0);n&&(s=!0,g(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(D(e)&&r.set(e,null),null):(b(a)?a.forEach(e=>o[e]=null):g(o,a),D(e)&&r.set(e,o),o)}function Di(e,t){return!e||!m(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),y(e,t[0].toLowerCase()+t.slice(1))||y(e,ue(t))||y(e,t))}function Oi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e,_=Kn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Aa(l.call(t,e,u,d,p,f,m)),y=s}else{let e=t;v=Aa(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:ki(s)}}catch(t){ha.length=0,En(t,e,1),v=z(pa)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(h)&&(y=Ai(y,a)),b=Oa(b,y,!1,!0))}return n.dirs&&(b=Oa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&xr(or(b.type)&&br(b)||b,n.transition),v=b,Kn(_),v}var ki=e=>{let t;for(let n in e)(n===`class`||n===`style`||m(n))&&((t||={})[n]=e[n]);return t},Ai=(e,t)=>{let n={};for(let r in e)(!h(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ji(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ni(o,r,n)&&!Di(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Mi(r,o,l):!!o;return!1}function Mi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Ni(t,e,a)&&!Di(n,a))return!0}return!1}function Ni(e,t,n){let r=e[n],i=t[n];return n===`style`&&D(r)&&D(i)?!Me(r,i):r!==i}function Pi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Fi={},Ii=()=>Object.create(Fi),Li=e=>Object.getPrototypeOf(e)===Fi;function Ri(e,t,n,r=!1){let i={},a=Ii();e.propsDefaults=Object.create(null),Bi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Qt(i):e.type.props?i:a,e.attrs=a}function zi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=on(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Di(e.emitsOptions,o))continue;let u=t[o];if(c){if(y(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=ce(o);i[t]=Vi(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Bi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!y(t,a)&&((r=ue(a))===a||!y(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Vi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!y(t,e))&&(delete a[e],l=!0)}l&&_t(e.attrs,`set`,``)}function Bi(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(ae(c))continue;let l=t[c],u;i&&y(i,u=ce(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Di(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=on(n),r=s||u;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Vi(i,t,s,r[s],e,!y(r,s))}}return o}function Vi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=y(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&w(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Ha(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ue(n))&&(r=!0))}return r}var Hi=new WeakMap;function Ui(e,t,n=!1){let r=n?Hi:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!w(e)){let r=e=>{c=!0;let[n,r]=Ui(e,t,!0);g(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return D(e)&&r.set(e,d),d;if(b(a))for(let e=0;e<a.length;e++){let t=ce(a[e]);Wi(t)&&(o[t]=u)}else if(a)for(let e in a){let t=ce(e);if(Wi(t)){let n=a[e],r=o[t]=b(n)||w(n)?{type:n}:g({},n),i=r.type,c=!1,l=!0;if(b(i))for(let e=0;e<i.length;++e){let t=i[e],n=w(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=w(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||y(r,`default`))&&s.push(t)}}let l=[o,s];return D(e)&&r.set(e,l),l}function Wi(e){return e[0]!==`$`&&!ae(e)}var Gi=e=>e===`_`||e===`_ctx`||e===`$stable`,Ki=e=>b(e)?e.map(Aa):[Aa(e)],qi=(e,t,n)=>{if(t._n)return t;let r=qn((...e)=>Ki(t(...e)),n);return r._c=!1,r},Ji=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Gi(n))continue;let i=e[n];if(w(i))t[n]=qi(n,i,r);else if(i!=null){let e=Ki(i);t[n]=()=>e}}},Yi=(e,t)=>{let n=Ki(t);e.slots.default=()=>n},Xi=(e,t,n)=>{for(let r in t)(n||!Gi(r))&&(e[r]=t[r])},Zi=(e,t,n)=>{let r=e.slots=Ii();if(e.vnode.shapeFlag&32){let e=t._;e?(Xi(r,t,n),n&&he(r,`_`,e,!0)):Ji(t,r)}else t&&Yi(e,t)},Qi=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=u;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:Xi(i,t,n):(a=!t.$stable,Ji(t,i)),o=t}else t&&(Yi(e,t),o={default:1});if(a)for(let e in i)!Gi(e)&&o[e]==null&&delete i[e]},$i=da;function ea(e){return ta(e)}function ta(e,t){let n=ve();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=f,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ca(e,t)&&(r=be(e),pe(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===d&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:f}=t;switch(l){case fa:y(e,t,n,r);break;case pa:b(e,t,n,r);break;case ma:e??x(t,n,r,o);break;case F:ne(e,t,n,r,i,a,o,s,c);break;default:f&1?w(e,t,n,r,i,a,o,s,c):f&6?re(e,t,n,r,i,a,o,s,c):(f&64||f&128)&&l.process(e,t,n,r,i,a,o,s,c,Ce)}u!=null&&i?Tr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Tr(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=o(e.type,c,m&&m.is,m),h&8?p(d,e.children):h&16&&D(e.children,d,null,i,s,na(e,c),l,u),_&&Jn(e,null,i,`created`),E(d,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!ae(e)&&a(d,e,null,m[e],c,i);`value`in m&&a(d,`value`,null,m.value,c),(f=m.onVnodeBeforeMount)&&Pa(f,i,e)}_&&Jn(e,null,i,`beforeMount`);let v=ia(s,g);v&&g.beforeEnter(d),r(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&$i(()=>{try{f&&Pa(f,i,e),v&&g.enter(d),_&&Jn(e,null,i,`mounted`)}finally{}},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ua(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ja(e[l]):Aa(e[l]);v(null,c,t,n,r,i,a,o,s)}},ee=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let m=e.props||u,h=t.props||u,g;if(n&&ra(n,!1),(g=h.onVnodeBeforeUpdate)&&Pa(g,n,t,e),f&&Jn(t,e,n,`beforeUpdate`),n&&ra(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(c,``),d?O(e.dynamicChildren,d,c,n,r,na(t,i),o):s||le(e,t,c,null,n,r,na(t,i),o,!1),l>0){if(l&16)te(c,m,h,n,i);else if(l&2&&m.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,m.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&p(c,t.children)}else!s&&d==null&&te(c,m,h,n,i);((g=h.onVnodeUpdated)||f)&&$i(()=>{g&&Pa(g,n,t,e),f&&Jn(t,e,n,`updated`)},r)},O=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===F||!Ca(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},te=(e,t,n,r,i)=>{if(t!==n){if(t!==u)for(let o in t)!ae(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(ae(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},ne=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(O(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&aa(e,t,!0)):le(e,t,n,f,a,o,c,l,u)},re=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ie(t,n,r,i,a,o,c):oe(e,t,c)},ie=(e,t,n,r,i,a,o)=>{let s=e.component=La(e,r,i);if(Or(e)&&(s.ctx.renderer=Ce),Ka(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=z(pa);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(ji(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,ce(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=sa(e);if(n){t&&(t.el=c.el,ce(e,t,o)),n.asyncDep.then(()=>{$i(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;ra(e,!1),t?(t.el=c.el,ce(e,t,o)):t=c,n&&me(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Pa(d,s,t,c),ra(e,!0);let f=Oi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&Pi(e,f.el),r&&$i(r,i),(d=t.props&&t.props.onVnodeUpdated)&&$i(()=>Pa(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Dr(t);if(ra(e,!1),l&&me(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Pa(o,d,t),ra(e,!0),s&&Te){let t=()=>{e.subTree=Oi(e),Te(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Oi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&$i(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;$i(()=>Pa(o,d,e),i)}(t.shapeFlag&256||d&&Dr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&$i(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new He(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Ln(u),ra(e,!0),l()},ce=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,zi(e,t.props,r,n),Qi(e,t.children,n),at(),Bn(e),ot()},le=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){de(l,d,n,r,i,a,o,s,c);return}if(f&256){ue(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?de(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&D(d,n,r,i,a,o,s,c))},ue=(e,t,n,r,i,a,o,s,c)=>{e||=d,t||=d;let l=e.length,u=t.length,f=Math.min(l,u),p=0;for(;p<f;p++){let r=t[p]=c?ja(t[p]):Aa(t[p]);v(e[p],r,n,null,i,a,o,s,c)}l>u?ye(e,i,a,!0,!1,f):D(t,n,r,i,a,o,s,c,f)},de=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,f=e.length-1,p=u-1;for(;l<=f&&l<=p;){let r=e[l],u=t[l]=c?ja(t[l]):Aa(t[l]);if(Ca(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=f&&l<=p;){let r=e[f],l=t[p]=c?ja(t[p]):Aa(t[p]);if(Ca(r,l))v(r,l,n,null,i,a,o,s,c);else break;f--,p--}if(l>f){if(l<=p){let e=p+1,d=e<u?t[e].el:r;for(;l<=p;)v(null,t[l]=c?ja(t[l]):Aa(t[l]),n,d,i,a,o,s,c),l++}}else if(l>p)for(;l<=f;)pe(e[l],i,a,!0),l++;else{let m=l,h=l,g=new Map;for(l=h;l<=p;l++){let e=t[l]=c?ja(t[l]):Aa(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=m;l<=f;l++){let r=e[l];if(y>=b){pe(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ca(r,t[_])){u=_;break}u===void 0?pe(r,i,a,!0):(C[u-h]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?oa(C):d;for(_=w.length-1,l=b-1;l>=0;l--){let e=h+l,d=t[e],f=t[e+1],p=e+1<u?f.el||la(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?fe(d,n,p,2):_--)}}},fe=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){fe(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,Ce);return}if(c===F){r(s,t,n);for(let e=0;e<u.length;e++)fe(u[e],t,n,a);r(e.anchor,t,n);return}if(c===ma){S(e,t,n);return}if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[vr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),$i(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[vr];s._isLeaving&&s[vr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},pe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(at(),Tr(s,null,n,e,!0),ot()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Dr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Pa(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Jn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ce,r):l&&!l.hasOnce&&(a!==F||d>0&&d&64)?ye(l,t,n,!1,!0):(a===F&&d&384||!i&&u&16)&&ye(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&$i(()=>{_&&Pa(_,t,e),h&&Jn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===F){ge(n,r);return}if(t===ma){C(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ca(c),ca(l),r&&me(r),i.stop(),a?(a.flags|=8,pe(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,pe(o,e,t,n)),s&&$i(s,t),$i(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)pe(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[ar];return n?h(n):t},xe=!1,Se=(e,t,n)=>{let r;e==null?t._vnode&&(pe(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,xe||=(xe=!0,Bn(r),Vn(),!1)},Ce={p:v,um:pe,m:fe,r:he,mt:ie,mc:D,pc:le,pbc:O,n:be,o:e},we,Te;return t&&([we,Te]=t(Ce)),{render:Se,hydrate:we,createApp:xi(Se,we)}}function na({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function ra({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ia(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function aa(e,t,n=!1){let r=e.children,i=t.children;if(b(r)&&b(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ja(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&aa(t,a)),a.type===fa&&(a.patchFlag===-1&&(a=i[e]=ja(a)),a.el=t.el),a.type===pa&&!a.el&&(a.el=t.el)}}function oa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function sa(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:sa(t)}function ca(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function la(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?la(t.subTree):null}var ua=e=>e.__isSuspense;function da(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):zn(e)}var F=Symbol.for(`v-fgt`),fa=Symbol.for(`v-txt`),pa=Symbol.for(`v-cmt`),ma=Symbol.for(`v-stc`),ha=[],ga=null;function I(e=!1){ha.push(ga=e?null:[])}function _a(){ha.pop(),ga=ha[ha.length-1]||null}var va=1;function ya(e,t=!1){va+=e,e<0&&ga&&t&&(ga.hasOnce=!0)}function ba(e){return e.dynamicChildren=va>0?ga||d:null,_a(),va>0&&ga&&ga.push(e),e}function L(e,t,n,r,i,a){return ba(R(e,t,n,r,i,a,!0))}function xa(e,t,n,r,i){return ba(z(e,t,n,r,i,!0))}function Sa(e){return e?e.__v_isVNode===!0:!1}function Ca(e,t){return e.type===t.type&&e.key===t.key}var wa=({key:e})=>e??null,Ta=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:T(e)||un(e)||w(e)?{i:Wn,r:e,k:t,f:!!n}:e);function R(e,t=null,n=null,r=0,i=null,a=e===F?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wa(t),ref:t&&Ta(t),scopeId:Gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Wn};return s?(Ma(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=T(n)?8:16),va>0&&!o&&ga&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ga.push(c),c}var z=Ea;function Ea(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===qr)&&(e=pa),Sa(e)){let r=Oa(e,t,!0);return n&&Ma(r,n),va>0&&!a&&ga&&(r.shapeFlag&6?ga[ga.indexOf(e)]=r:ga.push(r)),r.patchFlag=-2,r}if(eo(e)&&(e=e.__vccOpts),t){t=Da(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=we(e)),D(n)&&(an(n)&&!b(n)&&(n=g({},n)),t.style=ye(n))}let o=T(e)?1:ua(e)?128:or(e)?64:D(e)?4:w(e)?2:0;return R(e,t,n,r,i,o,a,!0)}function Da(e){return e?an(e)||Li(e)?g({},e):e:null}function Oa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Na(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&wa(l),ref:t&&t.ref?n&&a?b(a)?a.concat(Ta(t)):[a,Ta(t)]:Ta(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==F?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Oa(e.ssContent),ssFallback:e.ssFallback&&Oa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&xr(u,c.clone(u)),u}function ka(e=` `,t=0){return z(fa,null,e,t)}function B(e=``,t=!1){return t?(I(),xa(pa,null,e)):z(pa,null,e)}function Aa(e){return e==null||typeof e==`boolean`?z(pa):b(e)?z(F,null,e.slice()):Sa(e)?ja(e):z(fa,null,String(e))}function ja(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Oa(e)}function Ma(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(b(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ma(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Li(t)?t._ctx=Wn:r===3&&Wn&&(Wn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(w(t)){if(r&65){Ma(e,{default:t});return}t={default:t,_ctx:Wn},n=32}else t=String(t),r&64?(n=16,t=[ka(t)]):n=8;e.children=t,e.shapeFlag|=n}function Na(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=we([t.class,r.class]));else if(e===`style`)t.style=ye([t.style,r.style]);else if(m(e)){let n=t[e],i=r[e];i&&n!==i&&!(b(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!h(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Pa(e,t,n,r=null){Tn(e,t,7,[n,r])}var Fa=yi(),Ia=0;function La(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Fa,a={uid:Ia++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Re(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ui(r,i),emitsOptions:Ei(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=wi.bind(null,a),e.ce&&e.ce(a),a}var Ra=null,za=()=>Ra||Wn,Ba,Va;{let e=ve(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Ba=t(`__VUE_INSTANCE_SETTERS__`,e=>Ra=e),Va=t(`__VUE_SSR_SETTERS__`,e=>Ga=e)}var Ha=e=>{let t=Ra;return Ba(e),e.scope.on(),()=>{e.scope.off(),Ba(t)}},Ua=()=>{Ra&&Ra.scope.off(),Ba(null)};function Wa(e){return e.vnode.shapeFlag&4}var Ga=!1;function Ka(e,t=!1,n=!1){t&&Va(t);let{props:r,children:i}=e.vnode,a=Wa(e);Ri(e,r,a,t),Zi(e,i,n||t);let o=a?qa(e,t):void 0;return t&&Va(!1),o}function qa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ni);let{setup:r}=n;if(r){at();let n=e.setupContext=r.length>1?Za(e):null,i=Ha(e),a=wn(r,e,0,[e.props,n]),o=ee(a);if(ot(),i(),(o||e.sp)&&!Dr(e)&&Sr(e),o){if(a.then(Ua,Ua),t)return a.then(n=>{Va(!0);try{Ja(e,n,t)}finally{Va(!1)}}).catch(t=>{En(t,e,0)});e.asyncDep=a}else Ja(e,a,t)}else Ya(e,t)}function Ja(e,t,n){w(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:D(t)&&(e.setupState=hn(t)),Ya(e,n)}function Ya(e,t,n){let r=e.type;e.render||=r.render||f;{let t=Ha(e);at();try{ai(e)}finally{ot(),t()}}}var Xa={get(e,t){return gt(e,`get`,``),e[t]}};function Za(e){return{attrs:new Proxy(e.attrs,Xa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Qa(e){return e.exposed?e.exposeProxy||=new Proxy(hn(sn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ei)return ei[n](e)},has(e,t){return t in e||t in ei}}):e.proxy}function $a(e,t=!0){return w(e)?e.displayName||e.name:e.name||t&&e.__name}function eo(e){return w(e)&&`__vccOpts`in e}var to=(e,t)=>_n(e,t,Ga);function V(e,t,n){try{ya(-1);let r=arguments.length;return r===2?D(t)&&!b(t)?Sa(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sa(n)&&(n=[n]),z(e,t,n))}finally{ya(1)}}var no=`3.5.43`,ro=void 0,io=typeof window<`u`&&window.trustedTypes;if(io)try{ro=io.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ao=ro?e=>ro.createHTML(e):e=>e,oo=`http://www.w3.org/2000/svg`,so=`http://www.w3.org/1998/Math/MathML`,co=typeof document<`u`?document:null,lo=co&&co.createElement(`template`),uo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?co.createElementNS(oo,e):t===`mathml`?co.createElementNS(so,e):n?co.createElement(e,{is:n}):co.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>co.createTextNode(e),createComment:e=>co.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>co.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{lo.innerHTML=ao(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=lo.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},fo=Symbol(`_vtc`);function po(e,t,n){let r=e[fo];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var mo=Symbol(`_vod`),ho=Symbol(`_vsh`),go={name:`show`,beforeMount(e,{value:t},{transition:n}){e[mo]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):_o(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),_o(e,!0),r.enter(e)):r.leave(e,()=>{_o(e,!1)}):_o(e,t))},beforeUnmount(e,{value:t}){_o(e,t)}};function _o(e,t){e.style.display=t?e[mo]:`none`,e[ho]=!t}var vo=Symbol(``),yo=/(?:^|;)\s*display\s*:/;function bo(e,t,n){let r=e.style,i=T(n),a=!1;if(n&&!i){if(t){if(T(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??So(r,t,``)}else for(let e in t)n[e]??So(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?So(r,i,``):Eo(e,i,!T(t)&&t?t[i]:void 0,o)||So(r,i,o)}}else if(i){if(t!==n){let e=r[vo];e&&(n+=`;`+e),r.cssText=n,a=yo.test(n)}}else t&&e.removeAttribute(`style`);mo in e&&(e[mo]=a?r.display:``,e[ho]&&(r.display=`none`))}var xo=/\s*!important$/;function So(e,t,n){if(b(n))n.forEach(n=>So(e,t,n));else if(n??=``,t.startsWith(`--`))xo.test(n)?e.setProperty(t,n.replace(xo,``),`important`):e.setProperty(t,n);else{let r=To(e,t);xo.test(n)?e.setProperty(ue(r),n.replace(xo,``),`important`):e[r]=n}}var Co=[`Webkit`,`Moz`,`ms`],wo={};function To(e,t){let n=wo[t];if(n)return n;let r=ce(t);if(r!==`filter`&&r in e)return wo[t]=r;r=de(r);for(let n=0;n<Co.length;n++){let i=Co[n]+r;if(i in e)return wo[t]=i}return t}function Eo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&T(r)&&n===r}var Do=`http://www.w3.org/1999/xlink`;function Oo(e,t,n,r,i,a=Ee(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Do,t.slice(6,t.length)):e.setAttributeNS(Do,t,n):n==null||a&&!De(n)?e.removeAttribute(t):e.setAttribute(t,a?``:E(n)?String(n):n)}function ko(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ao(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=De(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ao(e,t,n,r){e.addEventListener(t,n,r)}function jo(e,t,n,r){e.removeEventListener(t,n,r)}var Mo=Symbol(`_vei`);function No(e,t,n,r,i=null){let a=e[Mo]||(e[Mo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Io(t);r?Ao(e,n,a[t]=Bo(r,i),s):o&&(jo(e,n,o,s),a[t]=void 0)}}var Po=/(Once|Passive|Capture)$/,Fo=/^on:?(?:Once|Passive|Capture)$/;function Io(e){let t,n;for(;(n=e.match(Po))&&!Fo.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):ue(e.slice(2)),t]}var Lo=0,Ro=Promise.resolve(),zo=()=>Lo||=(Ro.then(()=>Lo=0),Date.now());function Bo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(b(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Tn(e,t,5,a)}}else Tn(r,t,5,[e])};return n.value=e,n.attached=zo(),n}var Vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ho=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?po(e,r,o):t===`style`?bo(e,n,r):m(t)?h(t)||No(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Uo(e,t,r,o))?(ko(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Oo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Wo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!T(r)))?ko(e,ce(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Oo(e,t,r,o))};function Uo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Vo(t)&&w(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Vo(t)&&T(n)?!1:t in e}function Wo(e,t){let n=e._def.props;if(!n)return!1;let r=ce(t);return Array.isArray(n)?n.some(e=>ce(e)===r):Object.keys(n).some(e=>ce(e)===r)}var Go=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return b(t)?e=>me(t,e):t};function Ko(e){e.target.composing=!0}function qo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Jo=Symbol(`_assign`),Yo=Symbol(`_initialValue`);function Xo(e,t,n){return t&&(e=e.trim()),n&&(e=ge(e)),e}var Zo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[Yo]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[Yo]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Jo]=Go(i);let a=r||i.props&&i.props.type===`number`;Ao(e,t?`change`:`input`,t=>{t.target.composing||e[Jo](Xo(e.value,n,a))}),(n||a)&&Ao(e,`change`,()=>{e.value=Xo(e.value,n,a)}),t||(Ao(e,`compositionstart`,Ko),Ao(e,`compositionend`,qo),Ao(e,`change`,qo))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[Yo];delete e[Yo],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[Jo](Xo(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[Jo]=Go(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ge(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Qo={deep:!0,created(e,t,n){e[Jo]=Go(n),Ao(e,`change`,()=>{let t=e._modelValue,n=rs(e),r=e.checked,i=e[Jo];if(b(t)){let e=Ne(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(S(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(is(e,r))})},mounted:$o,beforeUpdate(e,t,n){e[Jo]=Go(n),$o(e,t,n)}};function $o(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(b(t))i=Ne(t,r.props.value)>-1;else if(S(t))i=t.has(r.props.value);else{if(t===n)return;i=Me(t,is(e,!0))}e.checked!==i&&(e.checked=i)}var es={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Ao(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?ge(rs(e)):rs(e)),r=e.multiple,i=r?S(e._modelValue)?new Set(t):t:t[0],a=e._pendingValue=[r,r?b(i)?t.slice():t:i];try{e[Jo](i)}finally{Fn(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[Jo]=Go(r)},mounted(e,{value:t}){ns(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Jo]=Go(n)},updated(e,{value:t}){let n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!ts(t,n[1],n[0]))&&ns(e,t)}};function ts(e,t,n){if(!n||b(e))return Me(e,t);if(S(e)){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}return!1}function ns(e,t){let n=e.multiple,r=b(t);if(!n||r||S(t)){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=rs(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):Ne(t,o)>-1}else a.selected=t.has(o)}else if(Me(rs(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function rs(e){return`_value`in e?e._value:e.value}function is(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var as=[`ctrl`,`shift`,`alt`,`meta`],os={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>as.some(n=>e[`${n}Key`]&&!t.includes(n))},ss=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=os[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},cs=g({patchProp:Ho},uo),ls;function us(){return ls||=ea(cs)}var ds=((...e)=>{let t=us().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ps(e);if(!r)return;let i=t._component;!w(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,fs(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function fs(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ps(e){return T(e)?document.querySelector(e):e}var ms=`<script setup lang="ts">
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

    ; (window as any).__geoFlow = () => engine.value
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
`,hs=`<script setup lang="ts">
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
`,gs=`<script setup lang="ts">
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
`,_s=`<script setup lang="ts">
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
`,vs=`<script setup lang="ts">
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
`,ys=`<script setup lang="ts">
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
`,bs=`<script setup lang="ts">
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
`,xs=`<script setup lang="ts">
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
`,Ss=`<script setup lang="ts">
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
`,Cs=`<script setup lang="ts">
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
`,ws=`<script setup lang="ts">\r
/**\r
 * 进阶示例 · 全局配置中心（ConfigRegistry）\r
 *\r
 * 演示：\r
 * - useConfig(category, key, default, options) 注册通用配置项（map/dock/layer/style/popup 五类）\r
 * - 配置面板按 category 分组渲染（switch / select / color），双向绑定 useConfig 返回的可写 ref\r
 * - 配置变化实时驱动引擎行为：主题切换 / 底图切换 / 控件显隐 / dock 微件显隐 / 图层可见 / 高亮色 / 引线样式\r
 * - configRegistry.listByCategory 展示已注册配置项全量（证明注册功能）\r
 */\r
import { computed, onMounted, ref, shallowRef, watch } from 'vue'\r
import { createMapEngine, useConfig, configRegistry, MapToolbar, LayerTree, Legend, type MapEngine } from 'geo-flow'\r
import { ScaleLine, Zoom } from 'ol/control'\r
import TileLayer from 'ol/layer/Tile'\r
import { stations } from '../01-basic-chain/data'\r
\r
const mapEl = ref<HTMLElement>()\r
const engine = shallowRef<MapEngine>()\r
\r
/* ---- 用 useConfig 注册配置项（隐式 register，返回可写 computed ref） ---- */\r
// map 域\r
const theme = useConfig('map', 'theme', 'dark', { type: 'select', options: ['dark', 'light'] })\r
const basemap = useConfig('map', 'basemap', 'basemap.tianditu-img', {\r
  type: 'select',\r
  options: ['basemap.tianditu-img', 'basemap.carto-light', 'basemap.osm']\r
})\r
const showScale = useConfig('map', 'showScale', true, { type: 'switch' })\r
const showZoom = useConfig('map', 'showZoom', true, { type: 'switch' })\r
// dock 域\r
const showToolbar = useConfig('dock', 'showToolbar', true, { type: 'switch' })\r
const showLayerTree = useConfig('dock', 'showLayerTree', true, { type: 'switch' })\r
const showLegend = useConfig('dock', 'showLegend', true, { type: 'switch' })\r
// layer 域\r
const sitesVisible = useConfig('layer', 'sitesVisible', true, { type: 'switch' })\r
// style 域\r
const highlightColor = useConfig('style', 'highlightColor', '#ff6b00', { type: 'color' })\r
// popup 域\r
const leaderStyle = useConfig('popup', 'leaderStyle', 'polyline', {\r
  type: 'select',\r
  options: ['straight', 'polyline', 'bezier']\r
})\r
\r
const basemapOpts = ['basemap.tianditu-img', 'basemap.carto-light', 'basemap.osm']\r
const themeOpts = [\r
  { label: 'dark', value: 'dark' },\r
  { label: 'light', value: 'light' }\r
]\r
\r
/** 已注册配置项全量（按分类），证明注册功能 */\r
const registered = computed(() => {\r
  const cats = ['map', 'dock', 'layer', 'style', 'popup'] as const\r
  return cats.map((c) => ({ category: c, entries: configRegistry.listByCategory(c) }))\r
})\r
\r
onMounted(() => {\r
  const e = createMapEngine({ target: mapEl.value! })\r
  e.baseLayer('basemap.osm')\r
  e.layer({\r
    id: 'stations',\r
    name: '监测站',\r
    zIndex: 10,\r
    provider: { type: 'raw', config: { data: stations } },\r
    style: { circle: { radius: 7, color: '#4f8cff' } },\r
    popup: { titleField: 'name', contentFields: ['name', 'level', 'risk', 'value'] },\r
    interaction: { highlight: { trigger: 'click', color: highlightColor.value }, cursor: true }\r
  })\r
  e.run('monitor', {})\r
  engine.value = e\r
  // 初始控件\r
  applyControls()\r
  document.body.classList.toggle('theme-light', theme.value === 'light')\r
})\r
\r
/* ---- 配置 → 行为绑定 ---- */\r
function applyControls() {\r
  const map = engine.value?.manager.map\r
  if (!map) return\r
  const hasScale = map.getControls().getArray().some((c) => c instanceof ScaleLine)\r
  const hasZoom = map.getControls().getArray().some((c) => c instanceof Zoom)\r
  if (showScale.value && !hasScale) map.addControl(new ScaleLine({}))\r
  if (!showScale.value && hasScale) {\r
    const c = map.getControls().getArray().find((x) => x instanceof ScaleLine)\r
    if (c) map.removeControl(c)\r
  }\r
  if (showZoom.value && !hasZoom) map.addControl(new Zoom({}))\r
  if (!showZoom.value && hasZoom) {\r
    const c = map.getControls().getArray().find((x) => x instanceof Zoom)\r
    if (c) map.removeControl(c)\r
  }\r
}\r
\r
function switchBasemap(v: string) {\r
  const map = engine.value?.manager.map\r
  if (!map) return\r
  // 移除所有 Tile 底图\r
  map.getLayers()\r
    .getArray()\r
    .filter((l) => l instanceof TileLayer)\r
    .forEach((l) => map.removeLayer(l))\r
  engine.value?.baseLayer(v)\r
}\r
\r
watch(theme, (v) => {\r
  document.body.classList.toggle('theme-light', v === 'light')\r
  document.body.classList.toggle('theme-dark', v === 'dark')\r
})\r
watch(basemap, (v) => switchBasemap(v))\r
watch([showScale, showZoom], applyControls)\r
watch(sitesVisible, (v) => {\r
  const le = (engine.value as any)?.engines?.get('stations')\r
  le?.setVisible(v)\r
})\r
watch(highlightColor, (v) => {\r
  const le = (engine.value as any)?.engines?.get('stations')\r
  le?.setInteraction({ highlight: { trigger: 'click', color: v }, cursor: true })\r
})\r
watch(leaderStyle, () => {\r
  // 引线样式作用于新打开的 popup（popupManager 默认配置）\r
  ;(engine.value as any)?.popupManager && ((engine.value as any).popupManager.defaultOptions.leaderStyle = leaderStyle.value)\r
})\r
\r
function resetAll() {\r
  ;['map', 'dock', 'layer', 'style', 'popup'].forEach((c) =>\r
    configRegistry.listByCategory(c as any).forEach((e) => configRegistry.reset(e.category, e.key))\r
  )\r
}\r
<\/script>\r
\r
<template>\r
  <div class="demo">\r
    <div class="demo__map" ref="mapEl"></div>\r
    <MapToolbar v-if="engine && showToolbar" :engine="engine" position="top-right" />\r
    <LayerTree v-if="engine && showLayerTree" :engine="engine" position="top-left" />\r
    <Legend v-if="engine && showLegend" :engine="engine" position="bottom-left" />\r
\r
    <div class="cfg-panel">\r
      <div class="cfg-panel__head">\r
        <span>全局配置中心</span>\r
        <button class="cfg-panel__reset" @click="resetAll">全部重置</button>\r
      </div>\r
\r
      <div class="cfg-group">\r
        <div class="cfg-group__title">map · 地图</div>\r
        <label class="cfg-row">\r
          <span>主题</span>\r
          <select v-model="theme">\r
            <option v-for="o in themeOpts" :key="o.value" :value="o.value">{{ o.label }}</option>\r
          </select>\r
        </label>\r
        <label class="cfg-row">\r
          <span>底图</span>\r
          <select v-model="basemap">\r
            <option v-for="o in basemapOpts" :key="o" :value="o">{{ o.replace('basemap.', '') }}</option>\r
          </select>\r
        </label>\r
        <label class="cfg-row"><span>比例尺</span><input type="checkbox" v-model="showScale" /></label>\r
        <label class="cfg-row"><span>缩放控件</span><input type="checkbox" v-model="showZoom" /></label>\r
      </div>\r
\r
      <div class="cfg-group">\r
        <div class="cfg-group__title">dock · 停靠微件</div>\r
        <label class="cfg-row"><span>MapToolbar</span><input type="checkbox" v-model="showToolbar" /></label>\r
        <label class="cfg-row"><span>LayerTree</span><input type="checkbox" v-model="showLayerTree" /></label>\r
        <label class="cfg-row"><span>Legend</span><input type="checkbox" v-model="showLegend" /></label>\r
      </div>\r
\r
      <div class="cfg-group">\r
        <div class="cfg-group__title">layer · 图层</div>\r
        <label class="cfg-row"><span>监测站可见</span><input type="checkbox" v-model="sitesVisible" /></label>\r
      </div>\r
\r
      <div class="cfg-group">\r
        <div class="cfg-group__title">style · 配图</div>\r
        <label class="cfg-row"><span>高亮色</span><input type="color" v-model="highlightColor" /></label>\r
      </div>\r
\r
      <div class="cfg-group">\r
        <div class="cfg-group__title">popup · 弹框</div>\r
        <label class="cfg-row">\r
          <span>引线样式</span>\r
          <select v-model="leaderStyle">\r
            <option value="straight">straight</option>\r
            <option value="polyline">polyline</option>\r
            <option value="bezier">bezier</option>\r
          </select>\r
        </label>\r
      </div>\r
\r
      <div class="cfg-group">\r
        <div class="cfg-group__title">已注册配置项（{{ registered.flatMap(r => r.entries).length }}）</div>\r
        <div v-for="r in registered" :key="r.category" class="cfg-reg">\r
          <span class="cfg-reg__cat">{{ r.category }}</span>\r
          <span v-for="e in r.entries" :key="e.key" class="cfg-reg__item">{{ e.key }}={{ JSON.stringify(e.value) }}</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.demo { position: relative; width: 100%; height: 100%; }\r
.demo__map { position: absolute; inset: 0; }\r
.cfg-panel {\r
  position: absolute; top: 12px; right: 12px; z-index: 50;\r
  width: 280px; max-height: calc(100% - 24px); overflow-y: auto;\r
  background: rgba(255,255,255,0.97); border: 1px solid #e2e8f0; border-radius: 10px;\r
  padding: 10px 12px; box-shadow: 0 6px 18px rgba(15,23,42,0.12); font-size: 12px;\r
}\r
.cfg-panel__head { display: flex; justify-content: space-between; align-items: center; font-weight: 600; color: #1e293b; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid #e2e8f0; }\r
.cfg-panel__reset { border: 1px solid #cbd5e1; border-radius: 4px; background: #fff; color: #475569; font-size: 11px; padding: 2px 8px; cursor: pointer; }\r
.cfg-panel__reset:hover { background: #ef4444; color: #fff; border-color: #ef4444; }\r
.cfg-group { margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px dashed #e2e8f0; }\r
.cfg-group:last-child { border-bottom: none; }\r
.cfg-group__title { font-weight: 600; color: #4f8cff; margin-bottom: 4px; font-size: 11px; text-transform: uppercase; }\r
.cfg-row { display: flex; justify-content: space-between; align-items: center; padding: 3px 0; color: #334155; }\r
.cfg-row select, .cfg-row input[type=color] { height: 24px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 11px; }\r
.cfg-row input[type=checkbox] { width: 16px; height: 16px; }\r
.cfg-reg { margin: 3px 0; font-family: ui-monospace, monospace; font-size: 10px; color: #64748b; line-height: 1.6; }\r
.cfg-reg__cat { color: #4f8cff; font-weight: 600; margin-right: 4px; }\r
.cfg-reg__item { background: #f1f5f9; border-radius: 3px; padding: 1px 4px; margin-right: 3px; }\r
</style>\r
`,Ts=`<script setup lang="ts">
/**
 * 进阶示例 · StyleEngine 全局配图
 *
 * 演示：
 * - 地图加载多个矢量图层（监测站 / 告警点 / 区域面）
 * - 右侧配图面板：图层下拉 + 模式（single/categorical/stage）+ 参数
 * - globalStyleEngine.apply({ [id]: cfg }) 批量下发 → le.setStyle 即时生效（配置即生效）
 * - 底部展示 styleEngine.toJSON() 全局样式快照
 */
import { computed, onMounted, ref, shallowRef, watch, reactive } from 'vue'
import { createMapEngine, globalStyleEngine, type MapEngine, type LayerEngine } from 'geo-flow'
import type { StyleConfigInput } from 'geo-flow'

const mapEl = ref<HTMLElement>()
const engine = shallowRef<MapEngine>()

/* ---- 三图层测试数据 ---- */
const LAYERS = [
  {
    id: 'stations', name: '监测站',
    data: { type: 'FeatureCollection' as const, features: [
      { type: 'Feature' as const, properties: { id: 'S1', name: '城东', level: 'high', risk: 0.8 }, geometry: { type: 'Point' as const, coordinates: [116.41, 39.92] } },
      { type: 'Feature' as const, properties: { id: 'S2', name: '城西', level: 'mid', risk: 0.4 }, geometry: { type: 'Point' as const, coordinates: [116.36, 39.92] } },
      { type: 'Feature' as const, properties: { id: 'S3', name: '城南', level: 'low', risk: 0.2 }, geometry: { type: 'Point' as const, coordinates: [116.38, 39.88] } }
    ]},
    geom: 'Point'
  },
  {
    id: 'alarms', name: '告警点',
    data: { type: 'FeatureCollection' as const, features: [
      { type: 'Feature' as const, properties: { id: 'A1', type: 'fire', severity: 3 }, geometry: { type: 'Point' as const, coordinates: [116.40, 39.90] } },
      { type: 'Feature' as const, properties: { id: 'A2', type: 'leak', severity: 2 }, geometry: { type: 'Point' as const, coordinates: [116.36, 39.90] } }
    ]},
    geom: 'Point'
  },
  {
    id: 'zones', name: '区域面',
    data: { type: 'FeatureCollection' as const, features: [
      { type: 'Feature' as const, properties: { id: 'Z1', name: '核心区', level: 'high' },
        geometry: { type: 'Polygon' as const, coordinates: [[[116.37,39.90],[116.40,39.90],[116.40,39.93],[116.37,39.93],[116.37,39.90]]] } },
      { type: 'Feature' as const, properties: { id: 'Z2', name: '外围区', level: 'mid' },
        geometry: { type: 'Polygon' as const, coordinates: [[[116.34,39.88],[116.37,39.88],[116.37,39.91],[116.34,39.91],[116.34,39.88]]] } }
    ]},
    geom: 'Polygon'
  }
]

/* ---- 面板状态 ---- */
const selectedLayerId = ref('stations')
const mode = ref<'single' | 'categorical' | 'stage'>('single')
const color = ref('#4f8cff')
const radius = ref(8)
const strokeWidth = ref(2)
const colorField = ref('level')
const palette = ref('semantic')
const fillOpacity = ref(0.5)

const PALETTE_OPTS = ['semantic', 'blue', 'green', 'warm']
const FIELD_OPTS = computed(() => {
  const l = LAYERS.find((x) => x.id === selectedLayerId.value)
  if (!l) return []
  const feats = (l.data as any).features
  if (!feats.length) return []
  return Array.from(new Set(Object.keys(feats[0].properties as any)))
})

/** 构造当前选中图层的样式配置 */
function buildCfg(): StyleConfigInput {
  const l = LAYERS.find((x) => x.id === selectedLayerId.value)!
  if (mode.value === 'single') {
    return l.geom === 'Point'
      ? { circle: { radius: radius.value, color: color.value }, stroke: { color: color.value, width: strokeWidth.value } }
      : { fill: { color: color.value, opacity: fillOpacity.value }, stroke: { color: color.value, width: strokeWidth.value } }
  }
  if (mode.value === 'categorical') {
    return { mode: 'categorical', colorField: colorField.value, palette: palette.value, radius: radius.value, fillOpacity: fillOpacity.value }
  }
  // stage 分阶段
  return l.geom === 'Point'
    ? { circle: { radius: radius.value, color: color.value }, stroke: { color: '#1e293b', width: strokeWidth.value }, text: { field: 'name', color: '#fff', outline: '#1e293b', offsetY: -14 } }
    : { fill: { color: color.value, opacity: fillOpacity.value }, stroke: { color: '#1e293b', width: strokeWidth.value }, text: { field: 'name', color: '#1e293b', outline: '#fff' } }
}

function layerOf(id: string): LayerEngine | undefined {
  return (engine.value as any)?.engines?.get?.(id)
}

/** 应用配置：styleEngine 批量下发 + le.setStyle 即时生效 */
function apply() {
  const e = engine.value
  if (!e) return
  const cfg = buildCfg()
  // 1. StyleEngine 全局下发（写 overrides + registerLayer builder）
  globalStyleEngine.apply({ [selectedLayerId.value]: cfg })
  // 2. LayerEngine 即时生效（清缓存 + 重渲染）
  const le = layerOf(selectedLayerId.value)
  le?.setStyle(cfg)
}

/** 批量应用到全部图层（用各自当前面板参数派生） */
function applyAll() {
  const e = engine.value
  if (!e) return
  const styles: Record<string, StyleConfigInput> = {}
  for (const l of LAYERS) {
    // 简化：每个图层用 single 模式默认色派生
    const c = { hue: (l.id.charCodeAt(0) * 37) % 360 }
    styles[l.id] = l.geom === 'Point'
      ? { circle: { radius: 8, color: \`hsl(\${c.hue},70%,55%)\` } }
      : { fill: { color: \`hsl(\${c.hue},70%,55%)\`, opacity: 0.4 }, stroke: { color: \`hsl(\${c.hue},70%,45%)\`, width: 2 } }
  }
  globalStyleEngine.apply(styles)
  LAYERS.forEach((l) => layerOf(l.id)?.setStyle(styles[l.id]))
}

const styleSnapshot = computed(() => JSON.stringify(globalStyleEngine.toJSON(), null, 2))

onMounted(() => {
  const e = createMapEngine({ target: mapEl.value! })
  e.baseLayer('basemap.osm')
  LAYERS.forEach((l) => {
    e.layer({
      id: l.id, name: l.name, zIndex: l.id === 'zones' ? 5 : 10,
      provider: { type: 'raw', config: { data: l.data } },
      style: l.geom === 'Point'
        ? { circle: { radius: 7, color: '#4f8cff' } }
        : { fill: { color: '#4f8cff', opacity: 0.3 }, stroke: { color: '#4f8cff', width: 2 } },
      popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] }
    })
    globalStyleEngine.registerLayer(l.id)
  })
  e.run('monitor', {})
  engine.value = e
  // 默认应用一次
  setTimeout(apply, 300)
})

// 参数变化即时生效
watch([mode, color, radius, strokeWidth, colorField, palette, fillOpacity, selectedLayerId], () => {
  if (engine.value) apply()
})
<\/script>

<template>
  <div class="demo">
    <div class="demo__map" ref="mapEl"></div>
    <div class="style-panel">
      <div class="style-panel__head">StyleEngine 全局配图</div>

      <div class="sp-row">
        <label>图层</label>
        <select v-model="selectedLayerId">
          <option v-for="l in LAYERS" :key="l.id" :value="l.id">{{ l.name }}（{{ l.geom }}）</option>
        </select>
      </div>

      <div class="sp-row">
        <label>模式</label>
        <div class="sp-modes">
          <button v-for="m in (['single','categorical','stage'] as const)" :key="m" :class="{ on: mode === m }" @click="mode = m">{{ m }}</button>
        </div>
      </div>

      <template v-if="mode === 'single' || mode === 'stage'">
        <div class="sp-row"><label>颜色</label><input type="color" v-model="color" /></div>
        <div class="sp-row" v-if="LAYERS.find(x=>x.id===selectedLayerId)?.geom === 'Point'"><label>半径</label><input type="range" min="3" max="20" v-model.number="radius" /><span>{{ radius }}</span></div>
        <div class="sp-row"><label>线宽</label><input type="range" min="1" max="8" v-model.number="strokeWidth" /><span>{{ strokeWidth }}</span></div>
        <div class="sp-row" v-if="LAYERS.find(x=>x.id===selectedLayerId)?.geom === 'Polygon'"><label>填充透明度</label><input type="range" min="0" max="1" step="0.1" v-model.number="fillOpacity" /><span>{{ fillOpacity.toFixed(1) }}</span></div>
      </template>

      <template v-if="mode === 'categorical'">
        <div class="sp-row"><label>分类字段</label>
          <select v-model="colorField">
            <option v-for="f in FIELD_OPTS" :key="f" :value="f">{{ f }}</option>
          </select>
        </div>
        <div class="sp-row"><label>色板</label>
          <select v-model="palette">
            <option v-for="p in PALETTE_OPTS" :key="p" :value="p">{{ p }}</option>
          </select>
        </div>
        <div class="sp-row" v-if="LAYERS.find(x=>x.id===selectedLayerId)?.geom === 'Point'"><label>半径</label><input type="range" min="3" max="20" v-model.number="radius" /><span>{{ radius }}</span></div>
        <div class="sp-row"><label>填充透明度</label><input type="range" min="0" max="1" step="0.1" v-model.number="fillOpacity" /><span>{{ fillOpacity.toFixed(1) }}</span></div>
      </template>

      <div class="sp-actions">
        <button @click="apply">应用到此图层</button>
        <button @click="applyAll">批量应用到全部</button>
      </div>

      <div class="sp-hint">配置即生效：参数变化自动调 styleEngine.apply + le.setStyle。</div>

      <details class="sp-snapshot">
        <summary>styleEngine.toJSON()</summary>
        <pre>{{ styleSnapshot }}</pre>
      </details>
    </div>
  </div>
</template>

<style scoped>
.demo { position: relative; width: 100%; height: 100%; }
.demo__map { position: absolute; inset: 0; }
.style-panel {
  position: absolute; top: 12px; right: 12px; z-index: 50;
  width: 300px; max-height: calc(100% - 24px); overflow-y: auto;
  background: rgba(255,255,255,0.97); border: 1px solid #e2e8f0; border-radius: 10px;
  padding: 10px 12px; box-shadow: 0 6px 18px rgba(15,23,42,0.12); font-size: 12px;
}
.style-panel__head { font-weight: 600; color: #1e293b; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid #e2e8f0; }
.sp-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; color: #334155; }
.sp-row label { width: 70px; color: #475569; }
.sp-row select { flex: 1; height: 24px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 11px; }
.sp-row input[type=color] { width: 40px; height: 24px; border: 1px solid #cbd5e1; border-radius: 4px; }
.sp-row input[type=range] { flex: 1; }
.sp-row span { width: 32px; text-align: right; color: #4f8cff; font-family: ui-monospace, monospace; font-size: 10px; }
.sp-modes { display: flex; gap: 4px; flex: 1; }
.sp-modes button { flex: 1; padding: 3px; border: 1px solid #cbd5e1; border-radius: 4px; background: #f8fafc; color: #475569; cursor: pointer; font-size: 10px; }
.sp-modes button.on { background: #4f8cff; color: #fff; border-color: #4f8cff; }
.sp-actions { display: flex; gap: 6px; margin: 8px 0; }
.sp-actions button { flex: 1; padding: 5px; border: 1px solid #4f8cff; border-radius: 5px; background: #4f8cff; color: #fff; cursor: pointer; font-size: 11px; }
.sp-actions button:hover { background: #2563eb; }
.sp-hint { color: #94a3b8; font-size: 10px; margin-bottom: 6px; }
.sp-snapshot { border-top: 1px dashed #e2e8f0; padding-top: 6px; }
.sp-snapshot summary { cursor: pointer; color: #475569; font-size: 11px; }
.sp-snapshot pre { background: #0f172a; color: #93c5fd; padding: 6px; border-radius: 4px; font-size: 10px; line-height: 1.4; max-height: 180px; overflow: auto; }
</style>
`,Es=`<script setup lang="ts">
/**
 * 进阶示例 · 链式配置 + 本地筛选 + 自定义组件 Popup
 * - LayerEngine 链式：setStyle().setPopup().setInteraction()
 * - filterData 三态：表达式串 / 函数 / 链式 .config().config().end()
 * - PopupHost + 自定义 Vue 组件（关闭 + 拖拽）
 */
import { h, onMounted, ref, shallowRef, markRaw } from 'vue'
import { createMapEngine, PopupHost, type MapEngine, type LayerEngine } from 'geo-flow'

const mapEl = ref<HTMLElement>()
const engine = shallowRef<MapEngine>()
const log = ref('点击地图要素 → 默认 popup（title+rows）；下方按钮验证链式 / 筛选 / 自定义组件。')

/** 自定义 Popup 组件（通过 component 字段传入） */
const CustomPopup = markRaw({
  name: 'CustomPopup',
  props: { feature: { type: Object, default: null }, engine: { type: Object, default: null } },
  emits: ['close'],
  setup(props: any, { emit }: any) {
    return () =>
      h('div', { style: 'padding:4px 6px;min-width:220px' }, [
        h('div', { style: 'font-weight:600;margin-bottom:6px;color:#1e293b' }, [
          '🛰 自定义组件 Popup · ',
          h('span', { style: 'color:#4f8cff' }, props.feature?.id ?? '')
        ]),
        h('div', { style: 'color:#475569;font-size:12px;margin-bottom:8px' }, '此卡片由业务传入的 Vue 组件渲染，可包含任意交互/图表/按钮。'),
        h('div', { style: 'display:flex;gap:8px' }, [
          h('button', {
            style: 'flex:1;padding:5px;border:1px solid #4f8cff;border-radius:4px;background:#4f8cff;color:#fff;cursor:pointer',
            onClick: () => log.value = \`自定义组件按钮被点击：站点 \${props.feature?.id}\`
          }, '触发业务'),
          h('button', {
            style: 'padding:5px 10px;border:1px solid #e2e8f0;border-radius:4px;background:#fff;color:#475569;cursor:pointer',
            onClick: () => emit('close')
          }, '关闭')
        ])
      ])
  }
})

const FEATURES = {
  type: 'FeatureCollection' as const,
  features: [
    { type: 'Feature' as const, properties: { id: 'S001', name: '城东站', level: 'high', risk: 0.82 }, geometry: { type: 'Point' as const, coordinates: [116.41, 39.92] } },
    { type: 'Feature' as const, properties: { id: 'S002', name: '城西站', level: 'mid', risk: 0.45 }, geometry: { type: 'Point' as const, coordinates: [116.36, 39.92] } },
    { type: 'Feature' as const, properties: { id: 'S003', name: '城南站', level: 'high', risk: 0.68 }, geometry: { type: 'Point' as const, coordinates: [116.38, 39.88] } },
    { type: 'Feature' as const, properties: { id: 'S004', name: '城北站', level: 'low', risk: 0.21 }, geometry: { type: 'Point' as const, coordinates: [116.38, 39.96] } },
    { type: 'Feature' as const, properties: { id: 'S005', name: '中心站', level: 'mid', risk: 0.55 }, geometry: { type: 'Point' as const, coordinates: [116.38, 39.92] } }
  ]
}

/** 取示例图层的 LayerEngine（engine.engines 为私有 Map，这里经 run 后注册的 cfg.layers 辅助取） */
function layerOf(e: MapEngine, id: string): LayerEngine | undefined {
  return (e as any).engines?.get?.(id)
}

onMounted(() => {
  const e = createMapEngine({ target: mapEl.value! })
  e.baseLayer('basemap.osm')
    .layer({
      id: 'sites',
      name: '监测站',
      zIndex: 10,
      provider: { type: 'raw', config: { data: FEATURES } },
      style: { circle: { radius: 9, color: '#4f8cff' } },
      popup: { titleField: 'name', contentFields: ['name', 'level', 'risk'] },
      interaction: { highlight: { trigger: 'click', color: '#ffd666' }, cursor: true }
    })
    .run('monitor', {})
  // 预注册筛选字段（供 UI 生成筛选器选择项；此处仅演示注册）
  const le = (e as any).engines?.get('sites') as LayerEngine | undefined
  le?.registerFilterFields([
    { name: 'level', label: '等级', values: ['low', 'mid', 'high'] },
    { name: 'risk', label: '风险值' }
  ])
  engine.value = e
})

/* ---------- 链式配置 ---------- */
function chainConfig() {
  const e = engine.value
  if (!e) return
  const layer = layerOf(e, 'sites')
  if (!layer) return
  layer
    .setStyle({ circle: { radius: 11, color: '#ef4444' }, stroke: { color: '#7f1d1d', width: 2 } })
    .setPopup({ contentFields: ['name', 'risk'] })
    .setInteraction({ highlight: { trigger: 'click', color: '#22c55e' }, cursor: true })
  log.value = '链式 setStyle().setPopup().setInteraction() 已应用：红色大圆 + 绿色高亮'
}

/* ---------- filterData 三态 ---------- */
function filterExpr() {
  const layer = engine.value ? layerOf(engine.value, 'sites') : undefined
  if (!layer) return
  // 表达式串（evalExpr，可访问 $feature / $env / $query）
  layer.filterData('$feature.level === "high"')
  log.value = 'filterData("$feature.level === high") → 仅 high 等级站点'
}

function filterFn() {
  const layer = engine.value ? layerOf(engine.value, 'sites') : undefined
  if (!layer) return
  // 匿名函数
  layer.filterData((f: any) => Number(f.get('risk')) > 0.5)
  log.value = 'filterData(f => f.get("risk") > 0.5) → risk>0.5 的站点'
}

function filterChain() {
  const layer = engine.value ? layerOf(engine.value, 'sites') : undefined
  if (!layer) return
  // 链式 .config().config().end()
  layer.filterData().config('level', 'high').config('risk', '>=', 0.6).end()
  log.value = 'filterData().config("level","high").config("risk",">=",0.6).end() → AND 组合'
}

function filterJSON() {
  const layer = engine.value ? layerOf(engine.value, 'sites') : undefined
  if (!layer) return
  // JSON 规范
  layer.filterData({ where: '$feature.risk >= 0.5 && $feature.level !== "low"' })
  log.value = 'filterData({ where: "$feature.risk>=0.5 && level!=low" })'
}

function resetFilter() {
  const layer = engine.value ? layerOf(engine.value, 'sites') : undefined
  layer?.resetFilter()
  log.value = 'resetFilter() → 恢复全量数据'
}

/* ---------- 自定义组件 Popup ---------- */
function openCustomPopup() {
  const e = engine.value
  if (!e) return
  const layer = layerOf(e, 'sites')
  if (!layer) return
  const features = (layer as any).source.getFeatures()
  if (!features.length) return
  const f = features[0]
  const coord = (f.getGeometry() as any).getCoordinates()
    // 通过 popupBridge.open 传入 component + props（PopupHost 据此渲染自定义组件）
    ; (e as any).popupBridge.open({
      title: '站点详情',
      rows: [{ label: '名称', value: f.get('name') }, { label: '风险', value: f.get('risk') }],
      coordinate: coord,
      component: CustomPopup,
      props: { feature: { id: f.get('id'), name: f.get('name'), risk: f.get('risk') } }
    })
  log.value = 'popupBridge.open({ component: CustomPopup, props }) → PopupHost 渲染自定义组件（可关闭/拖拽）'
}
<\/script>

<template>
  <div class="demo">
    <div class="demo__map" ref="mapEl"></div>
    <PopupHost v-if="engine" :engine="engine" />
    <div class="demo__panel">
      <div class="demo__group">
        <span class="demo__label">链式配置</span>
        <button @click="chainConfig">setStyle().setPopup().setInteraction()</button>
      </div>
      <div class="demo__group">
        <span class="demo__label">本地筛选 filterData</span>
        <button @click="filterExpr">表达式</button>
        <button @click="filterFn">函数</button>
        <button @click="filterChain">链式 config().end()</button>
        <button @click="filterJSON">JSON where</button>
        <button @click="resetFilter">reset</button>
      </div>
      <div class="demo__group">
        <span class="demo__label">自定义 Popup</span>
        <button @click="openCustomPopup">打开自定义组件弹框</button>
      </div>
      <div class="demo__log">{{ log }}</div>
    </div>
  </div>
</template>

<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 100%;
}

.demo__map {
  position: absolute;
  inset: 0;
}

.demo__panel {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 50;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
  width: 340px;
  font-size: 12px;
}

.demo__group {
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.demo__label {
  display: block;
  width: 100%;
  font-weight: 600;
  color: #334155;
  margin-bottom: 2px;
}

.demo__group button {
  padding: 4px 9px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  background: #f8fafc;
  color: #334155;
  cursor: pointer;
  font-size: 11px;
}

.demo__group button:hover {
  background: #4f8cff;
  color: #fff;
  border-color: #4f8cff;
}

.demo__log {
  margin-top: 6px;
  padding: 6px 8px;
  background: #0f172a;
  color: #93c5fd;
  border-radius: 5px;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  line-height: 1.5;
}
</style>
`,Ds=`<script setup lang="ts">
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
`,Os=`<script setup lang="ts">
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
`,ks=`<script setup lang="ts">
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
`,As=`<script setup lang="ts">
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
`,js=`<script setup lang="ts">
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
`,Ms=`<script setup lang="ts">
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
`,Ns=`<script setup lang="ts">
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
`,Ps=`<script setup lang="ts">
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
`,Fs=`<script setup lang="ts">
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
`,Is=`<script setup lang="ts">
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
`,Ls=`<script setup lang="ts">
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
`,Rs=`<script setup lang="ts">
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
`,zs=`<script setup lang="ts">
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
`,Bs=`<script setup lang="ts">
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
`,Vs=`<script setup lang="ts">
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
`,Hs=`<script setup lang="ts">
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
`,Us=`<script setup lang="ts">
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
`,Ws=`<script setup lang="ts">
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
`,Gs=`<script setup lang="ts">
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
`,Ks=`<script setup lang="ts">
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
`,qs=`<script setup lang="ts">
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
`,Js=`<script setup lang="ts">
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
`,Ys=`<script setup lang="ts">
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
`,Xs=`<script setup lang="ts">
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
`,Zs=e=>e.startsWith(`/`);function Qs(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function $s(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Qs(e.default)}var ec=Object.assign;function tc(e,t){let n={};for(let r in t){let i=t[r];n[r]=rc(i)?i.map(e):e(i)}return n}var nc=()=>{},rc=Array.isArray;function ic(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var ac=Symbol(``);function oc(e,t){return ec(Error(),{type:e,[ac]:!0},t)}function sc(e,t){return e instanceof Error&&ac in e&&(t==null||!!(e.type&t))}var cc=Symbol(``),lc=Symbol(``),uc=Symbol(``),dc=Symbol(``),fc=Symbol(``);function pc(e){return Xn(dc)}var mc=typeof document<`u`,hc=/#/g,gc=/&/g,_c=/\//g,vc=/=/g,yc=/\?/g,bc=/\+/g,xc=/%5B/g,Sc=/%5D/g,Cc=/%5E/g,wc=/%60/g,Tc=/%7B/g,Ec=/%7C/g,Dc=/%7D/g,Oc=/%20/g;function kc(e){return e==null?``:encodeURI(``+e).replace(Ec,`|`).replace(xc,`[`).replace(Sc,`]`)}function Ac(e){return kc(e).replace(Tc,`{`).replace(Dc,`}`).replace(Cc,`^`)}function jc(e){return kc(e).replace(bc,`%2B`).replace(Oc,`+`).replace(hc,`%23`).replace(gc,`%26`).replace(wc,"`").replace(Tc,`{`).replace(Dc,`}`).replace(Cc,`^`)}function Mc(e){return jc(e).replace(vc,`%3D`)}function Nc(e){return kc(e).replace(hc,`%23`).replace(yc,`%3F`)}function Pc(e){return Nc(e).replace(_c,`%2F`)}function Fc(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Ic=/\/$/,Lc=e=>e.replace(Ic,``);function Rc(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Kc(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Fc(o)}}function zc(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Bc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Vc(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Hc(t.matched[r],n.matched[i])&&Uc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Uc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Wc(e[n],t[n]))return!1;return!0}function Wc(e,t){return rc(e)?Gc(e,t):rc(t)?Gc(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Gc(e,t){return rc(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Kc(e,t){if(Zs(e))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var qc={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function Jc(e){if(!e){if(mc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Lc(e)}var Yc=/^[^#]+#/;function Xc(e,t){return e.replace(Yc,`#`)+t}function Zc(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Qc=()=>history.scrollRestoration===`manual`?{left:window.scrollX,top:window.scrollY}:null;function $c(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Zc(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function el(e,t){return(history.state?history.state.position-t:-1)+e}var tl=new Map;function nl(e){tl.set(e,Qc())}function rl(e){let t=tl.get(e);return tl.delete(e),t}function il(e){return typeof e==`string`||e&&typeof e==`object`}function al(e){return typeof e==`string`||typeof e==`symbol`}function ol(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(bc,` `),i=r.indexOf(`=`),a=Fc(i<0?r:r.slice(0,i)),o=i<0?null:Fc(r.slice(i+1));if(a in t){let e=t[a];rc(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function sl(e){let t=``;for(let n in e){let r=e[n];if(n=Mc(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(rc(r)?r.map(e=>e&&jc(e)):[r&&jc(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function cl(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=rc(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function ll(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ul(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(oc(4,{from:n,to:t})):e instanceof Error?c(e):il(e)?c(oc(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function dl(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(Qs(s)){let c=(s.__vccOpts||s)[t];c&&a.push(ul(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=$s(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&ul(c,n,r,o,e,i)()}))}}}return a}function fl(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Hc(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Hc(e,s))||i.push(s))}return[n,r,i]}var pl=()=>location.protocol+`//`+location.host;function ml(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Bc(n,``)}return Bc(n,e)+r+i}function hl(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=ml(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState(ec({},e.state,{scroll:Qc()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function gl(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function _l(e){let{history:t,location:n}=window,r={value:ml(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:pl()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,ec({},t.state,gl(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=ec({},i.value,t.state,{forward:e,scroll:Qc()});a(o.current,o,!0),a(e,ec({},gl(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function vl(e){e=Jc(e);let t=_l(e),n=hl(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=ec({location:``,base:e,go:r,createHref:Xc.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function yl(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),vl(e)}var bl={type:0,value:``},xl=/[a-zA-Z0-9_]/;function Sl(e){if(!e)return[[]];if(e===`/`)return[[bl]];if(!Zs(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:xl.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Cl=`[^/]+?`,wl={sensitive:!1,strict:!1,start:!0,end:!0},Tl=/[.+*?^${}()[\]/\\]/g;function El(e,t){let n=ec({},wl,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Tl,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Cl;if(u!==Cl){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(rc(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=rc(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Dl(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ol(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Dl(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(kl(r))return 1;if(kl(i))return-1}return i.length-r.length}function kl(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Al={strict:!1,end:!0,sensitive:!1};function jl(e,t,n){let r=ec(El(Sl(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ml(e,t){let n=[],r=new Map;t=ic(Al,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Pl(e);s.aliasOf=r&&r.record;let l=ic(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Pl(ec({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!Zs(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=jl(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Il(d)&&o(e.name)),Bl(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:nc}function o(e){if(al(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Rl(e,n);n.splice(t,0,e),e.record.name&&!Il(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw oc(1,{location:e});s=i.record.name,a=ec(Nl(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Nl(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw oc(1,{location:e,currentLocation:t});s=i.record.name,a=ec({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Ll(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Nl(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Pl(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Fl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Fl(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Il(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ll(e){return e.reduce((e,t)=>ec(e,t.meta),{})}function Rl(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Ol(e,t[i])<0?r=i:n=i+1}let i=zl(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function zl(e){let t=e;for(;t=t.parent;)if(Bl(t)&&Ol(e,t)===0)return t}function Bl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Vl(e){let t=Xn(uc),n=Xn(dc),r=to(()=>{let n=j(e.to);return t.resolve(n)}),i=to(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Hc.bind(null,i));if(o>-1)return o;let s=Kl(e[t-2]);return t>1&&Kl(i)===s&&a[a.length-1].path!==s?a.findIndex(Hc.bind(null,e[t-2])):o}),a=to(()=>i.value>-1&&Gl(n.params,r.value.params)),o=to(()=>i.value>-1&&i.value===n.matched.length-1&&Uc(n.params,r.value.params));function s(n={}){if(Wl(n)){let n=t[j(e.replace)?`replace`:`push`](j(e.to)).catch(nc);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:to(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Hl(e){return e.length===1?e[0]:e}var Ul=N({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Vl,setup(e,{slots:t}){let n=Zt(Vl(e)),{options:r}=Xn(uc),i=to(()=>({[ql(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[ql(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Hl(t.default(n));return e.custom?r:V(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Wl(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gl(e,t){for(let n in t){let r=t[n],i=e[n];if(rc(r)){if(!rc(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}else if(r!==i)return!1}return!0}function Kl(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var ql=(e,t,n)=>e??t??n,Jl=N({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Xn(fc),i=to(()=>e.route||r.value),a=Xn(lc,0),o=to(()=>{let e=j(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=to(()=>i.value.matched[o.value]);Yn(lc,to(()=>o.value+1)),Yn(cc,s),Yn(fc,i);let c=A();return er(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Hc(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Yl(n.default,{Component:l,route:r});let u=o.props[a],d=V(l,ec({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Yl(n.default,{Component:d,route:r})||d}}});function Yl(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Xl=Jl;function Zl(e){let t=Ml(e.routes,e),n=e.parseQuery||ol,r=e.stringifyQuery||sl,i=e.history,a=ll(),o=ll(),s=ll(),c=dn(qc),l=dn(0),u=qc;mc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let d=tc.bind(null,e=>``+e),f=tc.bind(null,Pc),p=tc.bind(null,Fc);function m(e,n){let r,i;al(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return l.value++,()=>{a(),l.value++}}function h(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),l.value++)}function g(){t.clearRoutes(),l.value++}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,a){if(l.value,typeof e==`string`){a||=e.startsWith(`/`)?qc:c.value;let r=Rc(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return ec(r,o,{params:p(o.params),redirectedFrom:void 0,href:s})}a=ec({},a||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?qc:c.value));let o;if(e.path!=null)o=ec({},e,{path:Rc(n,e.path,a.path).path});else{let t=ec({},e.params);for(let e in t)t[e]??delete t[e];o=ec({},e,{params:f(t)}),a.params=f(a.params)}let s=t.resolve(o,a),u=e.hash||``;s.params=d(p(s.params));let m=zc(r,ec({},e,{hash:Ac(u),path:s.path})),h=i.createHref(m);return ec({fullPath:m,hash:u,query:r===sl?cl(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function b(e){return typeof e==`string`?Rc(n,e,c.value.path):ec({},e)}function x(e,t){if(u!==e)return oc(8,{from:t,to:e})}function S(e){return T(e)}function C(e){return S(ec(b(e),{replace:!0}))}function w(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),ec({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function T(e,t){let n=u=y(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,l=w(n,i);if(l)return T(ec(b(l),{state:typeof l==`object`?ec({},a,l.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Vc(r,i,n)&&(f=oc(16,{to:d,from:i}),ue(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>sc(e)?sc(e,2)?e:le(e):se(e,d,i)).then(e=>{if(e){if(sc(e,2))return T(ec({replace:s},b(e.to),{state:typeof e.to==`object`?ec({},a,e.to.state):a,force:o}),t||d)}else e=te(d,i,!0,s,a);return O(d,i,e),e})}function E(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e){let t=pe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=fl(e,t);n=dl(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(ul(r,e,t))});let c=E.bind(null,e,t);return n.push(c),he(n).then(()=>{n=[];for(let r of a.list())n.push(ul(r,e,t));return n.push(c),he(n)}).then(()=>{n=dl(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(ul(r,e,t))});return n.push(c),he(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(rc(r.beforeEnter))for(let i of r.beforeEnter)n.push(ul(i,e,t));else n.push(ul(r.beforeEnter,e,t))}return n.push(c),he(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=dl(s,`beforeRouteEnter`,e,t,D),n.push(c),he(n))).then(()=>{n=[];for(let r of o.list())n.push(ul(r,e,t));return n.push(c),he(n)}).catch(e=>sc(e,8)?e:Promise.reject(e))}function O(e,t,n){s.list().forEach(r=>D(()=>r(e,t,n)))}function te(e,t,n,r,a){let o=x(e,t);if(o)return o;let s=t===qc,l=mc?history.state:{};n&&(r||s?i.replace(e.fullPath,ec({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ue(e,t,n,s),le()}let ne;function re(){ne||=i.listen((e,t,n)=>{if(!me.listening)return;let r=y(e),a=w(r,me.currentRoute.value);if(a){T(ec(a,{replace:!0,force:!0}),r).catch(nc);return}u=r;let o=c.value;mc&&n.delta&&nl(el(o.fullPath,n.delta)),ee(r,o).catch(e=>sc(e,12)?e:sc(e,2)?(T(ec(b(e.to),{force:!0}),r).then(e=>{sc(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(nc),Promise.reject()):(n.delta&&i.go(-n.delta,!1),se(e,r,o))).then(e=>{e||=te(r,o,!1),e&&(n.delta&&!sc(e,8)?i.go(-n.delta,!1):n.type===`pop`&&sc(e,20)&&i.go(-1,!1)),O(r,o,e)}).catch(nc)})}let ie=ll(),ae=ll(),oe;function se(e,t,n){le(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ce(){return oe&&c.value!==qc?Promise.resolve():new Promise((e,t)=>{ie.add([e,t])})}function le(e){return oe||(oe=!e,re(),ie.list().forEach(([t,n])=>e?n(e):t()),ie.reset()),e}function ue(t,n,r,i){let{scrollBehavior:a}=e;if(!mc||!a)return Promise.resolve();let o=!r&&rl(el(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Fn().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&$c(e)).catch(e=>t===c.value&&se(e,t,n))}let de=e=>i.go(e),fe,pe=new Set,me={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,clearRoutes:g,hasRoute:v,getRoutes:_,resolve:y,options:e,push:S,replace:C,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:ce,install(e){e.component(`RouterLink`,Ul),e.component(`RouterView`,Xl),e.config.globalProperties.$router=me,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>j(c)}),mc&&!fe&&c.value===qc&&(fe=!0,S(i.location).catch(e=>{}));let t={};for(let e in qc)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(uc,me),e.provide(dc,Qt(t)),e.provide(fc,c);let n=e.unmount;pe.add(e),e.unmount=function(){pe.delete(e),pe.size<1&&(u=qc,ne&&ne(),ne=null,c.value=qc,fe=!1,oe=!1),n()}}};function he(e){return e.reduce((e,t)=>e.then(()=>D(t)),Promise.resolve())}return me}var Ql={class:`cv__panel`},$l={class:`cv__head`},eu={class:`cv__title`},tu={class:`cv__title-main`},nu={class:`cv__title-sub`},ru={class:`cv__actions`},iu={class:`cv__body`},au={class:`cv__pre`},ou={class:`cv__no`},su={class:`cv__txt`},cu=N({__name:`CodeViewer`,props:{source:{},title:{}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=A(!1);async function a(){try{await navigator.clipboard.writeText(n.source),i.value=!0,setTimeout(()=>i.value=!1,1500)}catch{}}let o=to(()=>n.source.split(`
`));return(t,n)=>(I(),xa(hr,{to:`body`},[R(`div`,{class:`cv__mask`,onClick:n[1]||=ss(e=>r(`close`),[`self`])},[R(`aside`,Ql,[R(`header`,$l,[R(`div`,eu,[R(`span`,tu,k(e.title||`示例源码`),1),R(`span`,nu,k(o.value.length)+` 行`,1)]),R(`div`,ru,[R(`button`,{class:`cv__btn`,onClick:a},k(i.value?`已复制`:`复制`),1),R(`button`,{class:`cv__btn cv__btn--close`,onClick:n[0]||=e=>r(`close`)},`关闭`)])]),R(`div`,iu,[R(`pre`,au,[R(`code`,null,[(I(!0),L(F,null,P(o.value,(e,t)=>(I(),L(`span`,{key:t,class:`cv__ln`},[R(`span`,ou,k(t+1),1),R(`span`,su,k(e||` `),1),n[2]||=ka(`
`,-1)]))),128))])])])])])]))}}),lu=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},uu=lu(cu,[[`__scopeId`,`data-v-b341be9d`]]),du={class:`gallery`},fu={class:`gallery__top`},pu={class:`gallery__tabs`},mu=[`onClick`],hu={class:`gallery__body`},gu={class:`gallery__nav`},_u={class:`gallery__nav-head`},vu={class:`gallery__nav-title`},yu={class:`gallery__nav-count`},bu={class:`gallery__menu`},xu={class:`gallery__num`},Su={class:`gallery__label`},Cu={class:`gallery__main`},wu=N({__name:`App`,setup(e){let t=Object.assign({"./demos/01-basic-chain/BasicChainDemo.vue":ms,"./demos/02-anonymous-layer/AnonymousLayerDemo.vue":hs,"./demos/03-predefined-layer/PredefinedLayerDemo.vue":gs,"./demos/04-external-config/ExternalConfigDemo.vue":_s,"./demos/05-expression-style/ExpressionStyleDemo.vue":vs,"./demos/06-processors-all/ProcessorsAllDemo.vue":ys,"./demos/07-effects-all/EffectsAllDemo.vue":bs,"./demos/08-carousel-popup/CarouselPopupDemo.vue":xs,"./demos/09-custom-plugin/CustomPluginDemo.vue":Ss,"./demos/10-with-rete/WithReteDemo.vue":Cs,"./demos/advanced/ConfigDemo.vue":ws,"./demos/advanced/MapStyleDemo.vue":Ts,"./demos/advanced/PopupFilterDemo.vue":Es,"./demos/dock/DockLayoutDemo.vue":Ds,"./demos/effects/BreathingPlayground.vue":Os,"./demos/effects/CarouselPlayground.vue":ks,"./demos/effects/CustomEffectPlayground.vue":As,"./demos/effects/EffectPlayground.vue":js,"./demos/effects/PulsePlayground.vue":Ms,"./demos/effects/RipplePlayground.vue":Ns,"./demos/effects/WavePlayground.vue":Ps,"./demos/env/EnvInjectionDemo.vue":Fs,"./demos/layer/AppendDataDemo.vue":Is,"./demos/layer/MultiDatasetDemo.vue":Ls,"./demos/layer/RestoreDataDemo.vue":Rs,"./demos/layer/UpdateDataDemo.vue":zs,"./demos/rete/Controls.vue":Bs,"./demos/rete/CustomSocket.vue":Vs,"./demos/rete/ParamPanel.vue":Hs,"./demos/rete/ReteEditorPage.vue":Us,"./demos/style/CategoricalStyleDemo.vue":Ws,"./demos/style/ExpressionStyleDemo.vue":Gs,"./demos/style/FunctionStyleDemo.vue":Ks,"./demos/style/MultiAttrStyleDemo.vue":qs,"./demos/style/SingleStyleDemo.vue":Js,"./demos/style/StageBuilderDemo.vue":Ys,"./demos/style/StyleConfigPanel.vue":Xs}),n=[{key:`basic`,label:`基础`,items:[{num:`01`,label:`链式调用最小链路`,to:`/basic-chain`},{num:`02`,label:`匿名图层 JSON 注册`,to:`/anonymous-layer`}]},{key:`style`,label:`配图示例`,items:[{num:`2.1`,label:`单值配图`,to:`/style/single`},{num:`2.2`,label:`分类配图`,to:`/style/categorical`},{num:`2.3`,label:`表达式参数`,to:`/style/expression`},{num:`2.4`,label:`函数参数`,to:`/style/function`},{num:`2.5`,label:`多属性（icon+色+大小）`,to:`/style/multi`,hl:!0},{num:`2.6`,label:`分阶段链式 + 规则引擎`,to:`/style/stage`,hl:!0}]},{key:`effect`,label:`效果示例`,items:[{num:`3.1`,label:`涟漪 ripple`,to:`/effect/ripple`},{num:`3.2`,label:`点跳跃 pulse`,to:`/effect/pulse`},{num:`3.3`,label:`涟漪 wave`,to:`/effect/wave`},{num:`3.4`,label:`呼吸灯 breathing`,to:`/effect/breathing`},{num:`3.5`,label:`轮播 carousel`,to:`/effect/carousel`},{num:`3.6`,label:`自定义效果 glow`,to:`/effect/custom`},{num:`08`,label:`轮播 + 弹框防叠盖`,to:`/carousel-popup`,hl:!0}]},{key:`layer`,label:`基础图层`,items:[{num:`4.1`,label:`appendData 增量追加`,to:`/layer/append`},{num:`4.2`,label:`updateData 全量更新`,to:`/layer/update`},{num:`4.3`,label:`keepOriginal + restore`,to:`/layer/restore`},{num:`4.4`,label:`综合数据操作`,to:`/layer/playground`,hl:!0}]},{key:`dock`,label:`停靠布局`,items:[{num:`11`,label:`Widget 由 dock 托管（span/排序/折叠）`,to:`/dock-layout`,hl:!0}]},{key:`env`,label:`环境响应`,items:[{num:`5.1`,label:`env 注入响应式`,to:`/env-injection`,hl:!0}]},{key:`flow`,label:`可视化编排`,items:[{num:`6.1`,label:`rete v2 原生画布`,to:`/rete-editor`,hl:!0},{num:`10`,label:`rete 拖拽画布（轻量）`,to:`/with-rete`}]},{key:`advanced`,label:`进阶`,items:[{num:`03`,label:`业务图层类继承预定义`,to:`/predefined-layer`},{num:`04`,label:`外部 JSON 配置引擎`,to:`/external-config`},{num:`05`,label:`表达式三态参数`,to:`/expression-style`},{num:`06`,label:`数据处理器`,to:`/processors-all`},{num:`07`,label:`效果选择器（旧）`,to:`/effects-all`},{num:`09`,label:`自定义插件`,to:`/custom-plugin`},{num:`12`,label:`链式配置 + 本地筛选 + 自定义 Popup`,to:`/popup-filter`,hl:!0},{num:`13`,label:`全局配置中心`,to:`/config`,hl:!0},{num:`14`,label:`StyleEngine 全局配图`,to:`/map-style`,hl:!0}]}],r={"/dock-layout":`dock`,"/carousel-popup":`effect`,"/env-injection":`env`,"/rete-editor":`flow`,"/with-rete":`flow`,"/predefined-layer":`advanced`,"/external-config":`advanced`,"/expression-style":`advanced`,"/processors-all":`advanced`,"/popup-filter":`advanced`,"/config":`advanced`,"/map-style":`advanced`,"/effects-all":`advanced`,"/custom-plugin":`advanced`},i=[[`/style/`,`style`],[`/effect/`,`effect`],[`/layer/`,`layer`]];function a(e){let t=r[e];if(t)return t;let n=i.find(([t])=>e.startsWith(t));return n?n[1]:`basic`}let o=pc(),s=A(a(o.path)),c=to(()=>n.find(e=>e.key===s.value)??n[0]);er(()=>o.path,e=>{s.value=a(e)});let l=A(!1),u=to(()=>{let e=o.meta.code;return e&&t[e]||``}),d=to(()=>o.meta.title||`示例源码`);function f(){u.value&&(l.value=!0)}return(e,t)=>{let r=Kr(`RouterLink`),i=Kr(`RouterView`);return I(),L(`div`,du,[R(`header`,fu,[t[1]||=R(`div`,{class:`gallery__brand`},[R(`span`,{class:`gallery__brand-name`},`geo-flow`),R(`span`,{class:`gallery__brand-sub`},`WebGIS 示例集`)],-1),R(`nav`,pu,[(I(),L(F,null,P(n,e=>R(`button`,{key:e.key,type:`button`,class:we([`gallery__tab`,{"gallery__tab--active":e.key===s.value}]),onClick:t=>s.value=e.key},k(e.label),11,mu)),64))]),u.value?(I(),L(`button`,{key:0,type:`button`,class:`gallery__code-btn`,title:`查看当前示例的核心编码`,onClick:f},`</> 查看代码`)):B(``,!0)]),R(`div`,hu,[R(`aside`,gu,[R(`div`,_u,[R(`span`,vu,k(c.value.label),1),R(`span`,yu,k(c.value.items.length)+` 项`,1)]),R(`nav`,bu,[(I(!0),L(F,null,P(c.value.items,e=>(I(),xa(r,{key:e.to,to:e.to,class:we([`gallery__link`,{"gallery__link--hl":e.hl}])},{default:qn(()=>[R(`span`,xu,k(e.num),1),R(`span`,Su,k(e.label),1)]),_:2},1032,[`to`,`class`]))),128))]),t[2]||=R(`div`,{class:`gallery__foot`},`OpenLayers v10 · Vue 3 · @vue/reactivity`,-1)]),R(`main`,Cu,[z(i,null,{default:qn(({Component:e})=>[(I(),xa(Jr(e),{key:j(o).path}))]),_:1})])]),l.value?(I(),xa(uu,{key:0,source:u.value,title:d.value,onClose:t[0]||=e=>l.value=!1},null,8,[`source`,`title`])):B(``,!0)])}}});function Tu(e){return Symbol.keyFor(e)||String(e)}var Eu={Math,JSON,Number,String,Boolean,Array,Object,Date,isNaN,isFinite,parseFloat,parseInt},Du=!0;function Ou(e,t,n){if(!Du)throw Error(`表达式执行已被禁用（setExpressionEnabled(false)）`);let r=[...new Set([...Object.keys(Eu),...Object.keys(n)])],i=`"use strict"; return (${e});`;return Function(...r,i)}function ku(e,t={}){return Ou(e,!0,t)(...[...new Set([...Object.keys(Eu),...Object.keys(t)])].map(e=>e in Eu?Eu[e]:t[e]))}function Au(e,t={}){let n=[...new Set([...Object.keys(Eu),...Object.keys(t)])].map(e=>e in Eu?Eu[e]:t[e]);return Ou(e,!1,t)(...n)}function ju(e,t={}){if(e&&typeof e==`object`){if(typeof e.__expr__==`string`)return ku(e.__expr__,t);if(typeof e.__fn__==`string`)return Au(e.__fn__,t)}return e}var Mu=new class{byName=new Map;bySymbol=new Map;register(e){return this.byName.has(e.name)&&console.warn(`[GeoFlow] 插件已存在，被覆盖: ${e.name}`),this.byName.set(e.name,e),e.symbol&&this.bySymbol.set(e.symbol,e),e}resolve(e){if(e&&typeof e==`object`&&`kind`in e)return e;if(typeof e==`symbol`){let t=this.bySymbol.get(e);if(t)return t;let n=Symbol.keyFor(e);if(n){for(let[e,t]of this.bySymbol)if(Symbol.keyFor(e)===n)return t}throw Error(`插件未注册: ${String(e)}`)}let t=e,n=this.byName.get(t);if(n)return n;let r=Symbol.for(t),i=this.bySymbol.get(r);if(i)return i;throw Error(`插件未注册: ${t}`)}list(e){return[...this.byName.values()].filter(t=>!e||t.kind===e)}has(e){try{return this.resolve(e),!0}catch{return!1}}};function Nu(e){let t={...e,kind:`processor`};return Mu.register(t)}function Pu(e){let t={...e,kind:`effect`};return Mu.register(t)}function Fu(e){let t=Mu.resolve(e);return t.symbol?Tu(t.symbol):t.name}function Iu(e,t={}){return{ref:Fu(e),kind:`processor`,options:{...Mu.resolve(e).defaults,...t}}}function Lu(e,t={}){return{ref:Fu(e),kind:`effect`,options:{...Mu.resolve(e).defaults,...t}}}var Ru=class{state=`idle`;config;constructor(e={}){this.config=e}ready(e){return this.state=`ready`,{state:`ready`,...e}}fail(e){throw this.state=`error`,e}},zu=new class{nodeTypes=new Map;datasets=new Map;templates=new Map;stylePresets={};registerNodeType(e){return this.nodeTypes.has(e.type)&&console.warn(`[GeoFlow] 节点类型已存在，被覆盖: ${e.type}`),this.nodeTypes.set(e.type,e),e}getNodeType(e){let t=this.nodeTypes.get(e);if(!t)throw Error(`未注册的节点类型: ${e}`);return t}listNodeTypes(e){return[...this.nodeTypes.values()].filter(t=>!e||t.category===e)}registerDataset(e){return this.datasets.set(e.meta.id,e),e}getDataset(e){return this.datasets.get(e)}listDatasets(){return[...this.datasets.values()].map(e=>e.meta)}registerTemplate(e){return this.templates.set(e.id,e),e}getTemplate(e){return this.templates.get(e)}listTemplates(){return[...this.templates.values()]}};function Bu(e){return e.features?.[0]?.geometry?.type||`Mixed`}function Vu(e){let t=e.features?.[0]?.properties||{};return Object.entries(t).map(([t,n])=>{let r=typeof n==`number`?`number`:`string`,i={name:t,label:t,type:r};if(r===`string`){let n=new Set;e.features.forEach(e=>{let r=e.properties?.[t];r!=null&&r!==``&&n.add(String(r))}),i.values=[...n]}return i})}function Hu(e){return e&&e.type===`FeatureCollection`&&Array.isArray(e.features)}var Uu=class extends Ru{type=`raw`;async fetch(e){let t=ju(this.config,{$query:e.query});if(t.datasetId){let e=zu.datasets.get(String(t.datasetId));return e||this.fail(Error(`数据集未注册: ${t.datasetId}`)),this.ready({data:e.data,fields:e.meta.fields,geometryType:e.meta.geometryType})}if(t.data){let e=t.data;return this.ready({data:e,fields:t.fields||Vu(e),geometryType:t.geometryType||Bu(e)})}return this.fail(Error(`RawDataProvider 需要 config.datasetId 或 config.data`))}},Wu=class extends Ru{type=`url`;async fetch(e){let t=ju(this.config,{$query:e.query});if(!t.url)return this.fail(Error(`UrlDataProvider 需要 config.url`));let n;try{let e=await fetch(t.url);if(!e.ok)return this.fail(Error(`拉取失败 ${e.status}: ${t.url}`));n=await e.json()}catch(e){return this.fail(Error(`UrlDataProvider 请求异常: ${e?.message||e}`))}return Hu(n)?this.ready({data:n,fields:Vu(n),geometryType:Bu(n)}):this.fail(Error(`URL 返回不是合法 FeatureCollection`))}},Gu=new class{map=new Map;register(e,t){let n=typeof t==`function`?t:()=>t;return this.map.set(e,n),this}get(e){return this.map.get(e)}list(){return[...this.map.keys()]}};Gu.register(`/api/stations`,()=>zu.getDataset(`stations`)?.data),Gu.register(`/api/rivers`,()=>zu.getDataset(`rivers`)?.data),Gu.register(`/api/catchments`,()=>zu.getDataset(`catchments`)?.data);function Ku(e,t){return t?t.split(`.`).reduce((e,t)=>e==null?e:e[t],e):e}var qu=class extends Ru{type=`api`;async fetch(e){let t=ju(this.config,{$query:e.query,$params:e.params});if(!t.url)return this.fail(Error(`ApiDataProvider 需要 config.url`));let n,r=Gu.get(t.url);if(r)n=await r(t,e);else{let e=(t.method||`GET`).toUpperCase(),r=t.url,i={method:e,headers:t.headers||{}};if(t.params){let n=new URLSearchParams(t.params).toString();e===`GET`||e===`HEAD`?r+=(r.includes(`?`)?`&`:`?`)+n:(i.body=JSON.stringify(t.params),i.headers[`Content-Type`]=`application/json`)}let a=await fetch(r,i);if(!a.ok)return this.fail(Error(`接口失败 ${a.status}: ${t.url}`));n=await a.json()}let i=Ku(n,t.dataPath||``);return Hu(i)?this.ready({data:i,fields:Vu(i),geometryType:Bu(i)}):this.fail(Error(`API 返回无法解析为 FeatureCollection，请检查 config.dataPath`))}};function Ju(e){let{type:t,config:n}=e;switch(t){case`raw`:return new Uu(n);case`url`:return new Wu(n);case`api`:return new qu(n);default:throw Error(`不支持的 DataProvider 类型: ${t}`)}}var Yu={info:1,warn:2,error:3,none:4},Xu=Yu.info;function Zu(...e){Xu>Yu.warn||console.warn(...e)}var Qu={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function $u(e){let t=sd();for(let n=0,r=e.length;n<r;++n)md(t,e[n]);return t}function ed(e,t,n){return n?(n[0]=e[0]-t,n[1]=e[1]-t,n[2]=e[2]+t,n[3]=e[3]+t,n):[e[0]-t,e[1]-t,e[2]+t,e[3]+t]}function td(e,t){return t?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):e.slice()}function nd(e,t,n){let r,i;return r=t<e[0]?e[0]-t:e[2]<t?t-e[2]:0,i=n<e[1]?e[1]-n:e[3]<n?n-e[3]:0,r*r+i*i}function rd(e,t){return ad(e,t[0],t[1])}function id(e,t){return e[0]<=t[0]&&t[2]<=e[2]&&e[1]<=t[1]&&t[3]<=e[3]}function ad(e,t,n){return e[0]<=t&&t<=e[2]&&e[1]<=n&&n<=e[3]}function od(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=t[0],s=t[1],c=Qu.UNKNOWN;return o<n?c|=Qu.LEFT:o>i&&(c|=Qu.RIGHT),s<r?c|=Qu.BELOW:s>a&&(c|=Qu.ABOVE),c===Qu.UNKNOWN&&(c=Qu.INTERSECTING),c}function sd(){return[1/0,1/0,-1/0,-1/0]}function cd(e,t,n,r,i){return i?(i[0]=e,i[1]=t,i[2]=n,i[3]=r,i):[e,t,n,r]}function ld(e){return cd(1/0,1/0,-1/0,-1/0,e)}function ud(e,t){let n=e[0],r=e[1];return cd(n,r,n,r,t)}function dd(e,t,n,r,i){return hd(ld(i),e,t,n,r)}function fd(e,t){return e[0]==t[0]&&e[2]==t[2]&&e[1]==t[1]&&e[3]==t[3]}function pd(e,t){return t[0]<e[0]&&(e[0]=t[0]),t[2]>e[2]&&(e[2]=t[2]),t[1]<e[1]&&(e[1]=t[1]),t[3]>e[3]&&(e[3]=t[3]),e}function md(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function hd(e,t,n,r,i){for(;n<r;n+=i)gd(e,t[n],t[n+1]);return e}function gd(e,t,n){e[0]=Math.min(e[0],t),e[1]=Math.min(e[1],n),e[2]=Math.max(e[2],t),e[3]=Math.max(e[3],n)}function _d(e,t){let n;return n=t(yd(e)),n||(n=t(bd(e)),n)||(n=t(kd(e)),n)||(n=t(Od(e)),n)?n:!1}function vd(e){let t=0;return Md(e)||(t=Ad(e)*Td(e)),t}function yd(e){return[e[0],e[1]]}function bd(e){return[e[2],e[1]]}function xd(e){return[(e[0]+e[2])/2,(e[1]+e[3])/2]}function Sd(e,t){let n;if(t===`bottom-left`)n=yd(e);else if(t===`bottom-right`)n=bd(e);else if(t===`top-left`)n=Od(e);else if(t===`top-right`)n=kd(e);else throw Error(`Invalid corner`);return n}function Cd(e,t,n,r,i){let[a,o,s,c,l,u,d,f]=wd(e,t,n,r);return cd(Math.min(a,s,l,d),Math.min(o,c,u,f),Math.max(a,s,l,d),Math.max(o,c,u,f),i)}function wd(e,t,n,r){let i=t*r[0]/2,a=t*r[1]/2,o=Math.cos(n),s=Math.sin(n),c=i*o,l=i*s,u=a*o,d=a*s,f=e[0],p=e[1];return[f-c+d,p-l-u,f-c-d,p-l+u,f+c-d,p+l+u,f+c+d,p+l-u,f-c+d,p-l-u]}function Td(e){return e[3]-e[1]}function Ed(e,t,n){let r=n||sd();return jd(e,t)?(r[0]=e[0]>t[0]?e[0]:t[0],r[1]=e[1]>t[1]?e[1]:t[1],r[2]=e[2]<t[2]?e[2]:t[2],r[3]=e[3]<t[3]?e[3]:t[3]):ld(r),r}function Dd(e,t){if(!jd(e,t))return[e.slice()];if(id(t,e))return[];let[n,r,i,a]=e,o=Math.max(n,t[0]),s=Math.max(r,t[1]),c=Math.min(i,t[2]),l=Math.min(a,t[3]),u=[];return o>n&&u.push([n,r,o,a]),c<i&&u.push([c,r,i,a]),s>r&&u.push([o,r,c,s]),l<a&&u.push([o,l,c,a]),u}function Od(e){return[e[0],e[3]]}function kd(e){return[e[2],e[3]]}function Ad(e){return e[2]-e[0]}function jd(e,t){return e[0]<=t[2]&&e[2]>=t[0]&&e[1]<=t[3]&&e[3]>=t[1]}function Md(e){return e[2]<e[0]||e[3]<e[1]}function Nd(e,t){return t?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):e}function Pd(e,t,n){let r=!1,i=od(e,t),a=od(e,n);if(i===Qu.INTERSECTING||a===Qu.INTERSECTING)r=!0;else{let o=e[0],s=e[1],c=e[2],l=e[3],u=t[0],d=t[1],f=n[0],p=n[1],m=(p-d)/(f-u),h,g;a&Qu.ABOVE&&!(i&Qu.ABOVE)&&(h=f-(p-l)/m,r=h>=o&&h<=c),!r&&a&Qu.RIGHT&&!(i&Qu.RIGHT)&&(g=p-(f-c)*m,r=g>=s&&g<=l),!r&&a&Qu.BELOW&&!(i&Qu.BELOW)&&(h=f-(p-s)/m,r=h>=o&&h<=c),!r&&a&Qu.LEFT&&!(i&Qu.LEFT)&&(g=p-(f-o)*m,r=g>=s&&g<=l)}return r}function Fd(e,t){let n=t.getExtent(),r=xd(e);if(t.canWrapX()&&(r[0]<n[0]||r[0]>=n[2])){let t=Ad(n),i=Math.floor((r[0]-n[0])/t)*t;e[0]-=i,e[2]-=i}return e}function Id(e,t,n){if(t.canWrapX()){let r=t.getExtent();if(!isFinite(e[0])||!isFinite(e[2]))return[[r[0],e[1],r[2],e[3]]];Fd(e,t);let i=Ad(r);if(Ad(e)>i&&!n)return[[r[0],e[1],r[2],e[3]]];if(e[0]<r[0])return[[e[0]+i,e[1],r[2],e[3]],[r[0],e[1],e[2],e[3]]];if(e[2]>r[2])return[[e[0],e[1],r[2],e[3]],[r[0],e[1],e[2]-i,e[3]]]}return[e]}function Ld(e,t){let n=[e];for(let e=0,r=t.length;e<r&&n.length>0;++e){let r=[];for(let i=0,a=n.length;i<a;++i)r.push(...Dd(n[i],t[e]));n=r}return n}function Rd(e,t,n){return Math.min(Math.max(e,t),n)}function zd(e,t,n,r,i,a){let o=i-n,s=a-r;if(o!==0||s!==0){let c=((e-n)*o+(t-r)*s)/(o*o+s*s);c>1?(n=i,r=a):c>0&&(n+=o*c,r+=s*c)}return Bd(e,t,n,r)}function Bd(e,t,n,r){let i=n-e,a=r-t;return i*i+a*a}function Vd(e){let t=e.length;for(let n=0;n<t;n++){let r=n,i=Math.abs(e[n][n]);for(let a=n+1;a<t;a++){let t=Math.abs(e[a][n]);t>i&&(i=t,r=a)}if(i===0)return null;let a=e[r];e[r]=e[n],e[n]=a;for(let r=n+1;r<t;r++){let i=-e[r][n]/e[n][n];for(let a=n;a<t+1;a++)n==a?e[r][a]=0:e[r][a]+=i*e[n][a]}}let n=Array(t);for(let r=t-1;r>=0;r--){n[r]=e[r][t]/e[r][r];for(let i=r-1;i>=0;i--)e[i][t]-=e[i][r]*n[r]}return n}function Hd(e){return e*180/Math.PI}function Ud(e){return e*Math.PI/180}function Wd(e,t){let n=e%t;return n*t<0?n+t:n}function Gd(e,t,n){return e+n*(t-e)}function Kd(e,t){let n=10**t;return Math.round(e*n)/n}function qd(e,t){return Math.floor(Kd(e,t))}function Jd(e,t){return Math.ceil(Kd(e,t))}function Yd(e,t,n){if(e>=t&&e<n)return e;let r=n-t;return((e-t)%r+r)%r+t}function Xd(e,t){return e[0]+=+t[0],e[1]+=+t[1],e}function Zd(e,t){let n=!0;for(let r=e.length-1;r>=0;--r)if(e[r]!=t[r]){n=!1;break}return n}function Qd(e,t){let n=Math.cos(t),r=Math.sin(t),i=e[0]*n-e[1]*r,a=e[1]*n+e[0]*r;return e[0]=i,e[1]=a,e}function $d(e,t){return e[0]*=t,e[1]*=t,e}function ef(e,t){if(t.canWrapX()){let n=Ad(t.getExtent()),r=tf(e,t,n);r&&(e[0]-=r*n)}return e}function tf(e,t,n){let r=t.getExtent(),i=0;return t.canWrapX()&&(e[0]<r[0]||e[0]>r[2])&&(n||=Ad(r),i=Math.floor((e[0]-r[0])/n)),i}function nf(e,t,n){let r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),i=[(t[0]-e[0])/r,(t[1]-e[1])/r],a=[-i[1],i[0]],o=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),s=[(n[0]-e[0])/o,(n[1]-e[1])/o],c=r===0||o===0?0:Math.acos(Rd(s[0]*i[0]+s[1]*i[1],-1,1));return c=Math.max(c,1e-5),s[0]*a[0]+s[1]*a[1]>0?c:Math.PI*2-c}var rf={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937},af=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent===void 0?null:e.extent,this.worldExtent_=e.worldExtent===void 0?null:e.worldExtent,this.axisOrientation_=e.axisOrientation===void 0?`enu`:e.axisOrientation,this.global_=e.global!==void 0&&e.global,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||rf[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}},of=6378137,sf=Math.PI*of,cf=[-sf,-sf,sf,sf],lf=[-180,-85,180,85],uf=of*Math.log(Math.tan(Math.PI/2)),df=class extends af{constructor(e){super({code:e,units:`m`,extent:cf,global:!0,worldExtent:lf,getPointResolution:function(e,t){return e/Math.cosh(t[1]/of)}})}},ff=[new df(`EPSG:3857`),new df(`EPSG:102100`),new df(`EPSG:102113`),new df(`EPSG:900913`),new df(`http://www.opengis.net/def/crs/EPSG/0/3857`),new df(`http://www.opengis.net/gml/srs/epsg.xml#3857`)];function pf(e,t,n,r){let i=e.length;n=n>1?n:2,r??=n,t===void 0&&(t=n>2?e.slice():Array(i));for(let n=0;n<i;n+=r){t[n]=sf*e[n]/180;let r=of*Math.log(Math.tan(Math.PI*(+e[n+1]+90)/360));r>uf?r=uf:r<-uf&&(r=-uf),t[n+1]=r}return t}function mf(e,t,n,r){let i=e.length;n=n>1?n:2,r??=n,t===void 0&&(t=n>2?e.slice():Array(i));for(let n=0;n<i;n+=r)t[n]=180*e[n]/sf,t[n+1]=360*Math.atan(Math.exp(e[n+1]/of))/Math.PI-90;return t}var hf=6378137,gf=[-180,-90,180,90],_f=Math.PI*hf/180,vf=class extends af{constructor(e,t){super({code:e,units:`degrees`,extent:gf,axisOrientation:t,global:!0,metersPerUnit:_f,worldExtent:gf})}},yf=[new vf(`CRS:84`),new vf(`EPSG:4326`,`neu`),new vf(`urn:ogc:def:crs:OGC:1.3:CRS84`),new vf(`urn:ogc:def:crs:OGC:2:84`),new vf(`http://www.opengis.net/def/crs/OGC/1.3/CRS84`),new vf(`http://www.opengis.net/gml/srs/epsg.xml#4326`,`neu`),new vf(`http://www.opengis.net/def/crs/EPSG/0/4326`,`neu`)],bf={};function xf(e){return bf[e]||bf[e.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,`EPSG:$3`)]||null}function Sf(e,t){bf[e]=t}function Cf(e){for(let t in e)delete e[t]}function wf(e){let t;for(t in e)return!1;return!t}var Tf={};function Ef(e,t,n){let r=e.getCode(),i=t.getCode();r in Tf||(Tf[r]={}),Tf[r][i]=n}function Df(e,t){return e in Tf&&t in Tf[e]?Tf[e][t]:null}var Of=.9996,kf=.00669438,Af=kf*kf,jf=Af*kf,Mf=kf/.99330562,Nf=Math.sqrt(.99330562),Pf=(1-Nf)/(1+Nf),Ff=Pf*Pf,If=Ff*Pf,Lf=If*Pf,Rf=Lf*Pf,zf=1-kf/4-3*Af/64-5*jf/256,Bf=.002514607064228144,Vf=26390466021299826e-22,Hf=35*jf/3072,Uf=3/2*Pf-27/32*If+269/512*Rf,Wf=21/16*Ff-55/32*Lf,Gf=151/96*If-417/128*Rf,Kf=1097/512*Lf,qf=6378137;function Jf(e,t,n){let r=e-5e5,i=(n.north?t:t-1e7)/Of/(qf*zf),a=i+Uf*Math.sin(2*i)+Wf*Math.sin(4*i)+Gf*Math.sin(6*i)+Kf*Math.sin(8*i),o=Math.sin(a),s=o*o,c=Math.cos(a),l=o/c,u=l*l,d=u*u,f=1-kf*s,p=qf/Math.sqrt(1-kf*s),m=.99330562/f,h=Mf*c**2,g=h*h,_=r/(p*Of),v=_*_,y=v*_,b=y*_,x=b*_,S=x*_,C=a-l/m*(v/2-b/24*(5+3*u+10*h-4*g-9*Mf))+S/720*(61+90*u+298*h+45*d-252*Mf-3*g),w=(_-y/6*(1+2*u+h)+x/120*(5-2*h+28*u-3*g+8*Mf+24*d))/c;return w=Yd(w+Ud(ep(n.number)),-Math.PI,Math.PI),[Hd(w),Hd(C)]}var Yf=-80,Xf=84,Zf=-180,Qf=180;function $f(e,t,n){e=Yd(e,Zf,Qf),t<Yf?t=Yf:t>Xf&&(t=Xf);let r=Ud(t),i=Math.sin(r),a=Math.cos(r),o=i/a,s=o*o,c=s*s,l=Ud(e),u=Ud(ep(n.number)),d=qf/Math.sqrt(1-kf*i**2),f=Mf*a**2,p=a*Yd(l-u,-Math.PI,Math.PI),m=p*p,h=m*p,g=h*p,_=g*p,v=_*p,y=qf*(zf*r-Bf*Math.sin(2*r)+Vf*Math.sin(4*r)-Hf*Math.sin(6*r)),b=Of*d*(p+h/6*(1-s+f)+_/120*(5-18*s+c+72*f-58*Mf))+5e5,x=Of*(y+d*o*(m/2+g/24*(5-s+9*f+4*f**2)+v/720*(61-58*s+c+600*f-330*Mf)));return n.north||(x+=1e7),[b,x]}function ep(e){return(e-1)*6-180+3}var tp=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];function np(e){let t=0;for(let n of tp){let r=e.match(n);if(r){t=parseInt(r[1]);break}}if(!t)return null;let n=0,r=!1;return t>32700&&t<32761?n=t-32700:t>32600&&t<32661&&(r=!0,n=t-32600),n?{number:n,north:r}:null}function rp(e,t){return function(n,r,i,a){let o=n.length;i=i>1?i:2,a??=i,r||=i>2?n.slice():Array(o);for(let i=0;i<o;i+=a){let a=n[i],o=n[i+1],s=e(a,o,t);r[i]=s[0],r[i+1]=s[1]}return r}}function ip(e){return np(e)?new af({code:e,units:`m`}):null}function ap(e){let t=np(e.getCode());return t?{forward:rp($f,t),inverse:rp(Jf,t)}:null}function op(e,t,n){n||=6371008.8;let r=Ud(e[1]),i=Ud(t[1]),a=(i-r)/2,o=Ud(t[0]-e[0])/2,s=Math.sin(a)*Math.sin(a)+Math.sin(o)*Math.sin(o)*Math.cos(r)*Math.cos(i);return 2*n*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}var sp=[ap],cp=[ip],lp=!0;function up(e){lp=!(e===void 0||e)}function dp(e,t){if(t!==void 0){for(let n=0,r=e.length;n<r;++n)t[n]=e[n];t=t}else t=e.slice();return t}function fp(e){Sf(e.getCode(),e),Ef(e,e,dp)}function pp(e){e.forEach(fp)}function mp(e){if(typeof e!=`string`)return e;let t=xf(e);if(t)return t;for(let t of cp){let n=t(e);if(n)return n}return null}function hp(e,t,n,r){e=mp(e);let i,a=e.getPointResolutionFunc();if(a){if(i=a(t,n),r&&r!==e.getUnits()){let t=e.getMetersPerUnit();t&&(i=i*t/rf[r])}}else{let a=e.getUnits();if(a==`degrees`&&!r||r==`degrees`)i=t;else{let o=Sp(e,mp(`EPSG:4326`));if(!o&&a!==`degrees`)i=t*e.getMetersPerUnit();else{let e=[n[0]-t/2,n[1],n[0]+t/2,n[1],n[0],n[1]-t/2,n[0],n[1]+t/2];e=o(e,e,2),i=(op(e.slice(0,2),e.slice(2,4))+op(e.slice(4,6),e.slice(6,8)))/2}let s=r?rf[r]:e.getMetersPerUnit();s!==void 0&&(i/=s)}}return i}function gp(e){pp(e),e.forEach(function(t){e.forEach(function(e){t!==e&&Ef(t,e,dp)})})}function _p(e,t,n,r){e.forEach(function(e){t.forEach(function(t){Ef(e,t,n),Ef(t,e,r)})})}function vp(e,t){return e?typeof e==`string`?mp(e):e:mp(t)}function yp(e){return(function(t,n,r,i){let a=t.length;r=r===void 0?2:r,i??=r,n=n===void 0?Array(a):n;for(let o=0;o<a;o+=i){let a=e(t.slice(o,o+r)),s=a.length;for(let e=0,r=i;e<r;++e)n[o+e]=e>=s?t[o+e]:a[e]}return n})}function bp(e,t){return up(),Tp(e,`EPSG:4326`,t===void 0?`EPSG:3857`:t)}function xp(e,t){if(e===t)return!0;let n=e.getUnits()===t.getUnits();return(e.getCode()===t.getCode()||Sp(e,t)===dp)&&n}function Sp(e,t){let n=e.getCode(),r=t.getCode(),i=Df(n,r);if(i)return i;let a=null,o=null;for(let n of sp)a||=n(e),o||=n(t);if(!a&&!o)return null;let s=`EPSG:4326`;if(!o){let e=Df(s,r);e&&(i=Cp(a.inverse,e))}else if(a)i=Cp(a.inverse,o.forward);else{let e=Df(n,s);e&&(i=Cp(e,o.forward))}return i&&(fp(e),fp(t),Ef(e,t,i)),i}function Cp(e,t){return function(n,r,i,a){return r=e(n,r,i,a),t(r,r,i,a)}}function wp(e,t){return Sp(mp(e),mp(t))}function Tp(e,t,n){let r=wp(t,n);if(!r){let e=mp(t).getCode(),r=mp(n).getCode();throw Error(`No transform available between ${e} and ${r}`)}return r(e,void 0,e.length)}var Ep=null;function Dp(){return Ep}function Op(e,t){return e}function kp(e,t){return lp&&!Zd(e,[0,0])&&e[0]>=-180&&e[0]<=180&&e[1]>=-90&&e[1]<=90&&(lp=!1,Zu(`Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.`)),e}function Ap(e,t){return e}function jp(e,t){return e}function Mp(e,t){return e}function Np(){gp(ff),gp(yf),_p(yf,ff,pf,mf)}Np();var H={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4},Pp=typeof navigator<`u`&&navigator.userAgent!==void 0?navigator.userAgent.toLowerCase():``;Pp.includes(`safari`)&&!Pp.includes(`chrom`)&&(Pp.includes(`version/15.4`)||/cpu (os|iphone os) 15_4 like mac os x/.test(Pp));var Fp=Pp.includes(`webkit`)&&!Pp.includes(`edge`),Ip=Pp.includes(`macintosh`),Lp=typeof devicePixelRatio<`u`?devicePixelRatio:1,Rp=typeof WorkerGlobalScope<`u`&&typeof OffscreenCanvas<`u`&&self instanceof WorkerGlobalScope,zp=typeof Image<`u`&&Image.prototype.decode,Bp=(function(){let e=!1;try{let t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener(`_`,null,t),window.removeEventListener(`_`,null,t)}catch{}return e})();function Vp(e,t,n,r){let i;return i=n&&n.length?n.shift():Rp?new class extends OffscreenCanvas{style={}}(e??300,t??150):document.createElement(`canvas`),e&&(i.width=e),t&&(i.height=t),i.getContext(`2d`,r)}var Hp;function Up(){return Hp||=Vp(1,1),Hp}function Wp(e){let t=e.canvas;t.width=1,t.height=1,e.clearRect(0,0,1,1)}function Gp(e){let t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft,10)+parseInt(n.marginRight,10),t}function Kp(e){let t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop,10)+parseInt(n.marginBottom,10),t}function qp(e,t){let n=t.parentNode;n&&n.replaceChild(e,t)}function Jp(e){for(;e.lastChild;)e.lastChild.remove()}function Yp(e,t){let n=e.childNodes;for(let r=0;;++r){let i=n[r],a=t[r];if(!i&&!a)break;if(i!==a){if(!i){e.appendChild(a);continue}if(!a){e.removeChild(i),--r;continue}e.insertBefore(a,i)}}}function Xp(){return new Proxy({childNodes:[],appendChild:function(e){return this.childNodes.push(e),e},remove:function(){},removeChild:function(e){let t=this.childNodes.indexOf(e);if(t===-1)throw Error(`Node to remove was not found`);return this.childNodes.splice(t,1),e},insertBefore:function(e,t){let n=this.childNodes.indexOf(t);if(n===-1)throw Error(`Reference node not found`);return this.childNodes.splice(n,0,e),e},style:{}},{get(e,t,n){return t===`firstElementChild`?e.childNodes.length>0?e.childNodes[0]:null:Reflect.get(e,t,n)}})}function Zp(e){return typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}var Qp=[NaN,NaN,NaN,0],$p;function em(){return $p||=Vp(1,1,void 0,{willReadFrequently:!0,desynchronized:!0}),$p}var tm=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,nm=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,rm=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,im=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;function am(e,t){return e.endsWith(`%`)?Number(e.substring(0,e.length-1))/t:Number(e)}function om(e){throw Error(`failed to parse "`+e+`" as color`)}function sm(e){if(e.toLowerCase().startsWith(`rgb`)){let t=e.match(nm)||e.match(tm)||e.match(rm);if(t){let e=t[4],n=100/255;return[Rd(am(t[1],n)+.5|0,0,255),Rd(am(t[2],n)+.5|0,0,255),Rd(am(t[3],n)+.5|0,0,255),e===void 0?1:Rd(am(e,100),0,1)]}om(e)}if(e.startsWith(`#`)){if(im.test(e)){let t=e.substring(1),n=t.length<=4?1:2,r=[0,0,0,255];for(let e=0,i=t.length;e<i;e+=n){let i=parseInt(t.substring(e,e+n),16);n===1&&(i+=i<<4),r[e/n]=i}return r[3]/=255,r}om(e)}let t=em();t.fillStyle=`#abcdef`;let n=t.fillStyle;t.fillStyle=e,t.fillStyle===n&&(t.fillStyle=`#fedcba`,n=t.fillStyle,t.fillStyle=e,t.fillStyle===n&&om(e));let r=t.fillStyle;if(r.startsWith(`#`)||r.startsWith(`rgba`))return sm(r);t.clearRect(0,0,1,1),t.fillRect(0,0,1,1);let i=Array.from(t.getImageData(0,0,1,1).data);return i[3]=Kd(i[3]/255,3),i}function cm(e){return typeof e==`string`?e:xm(e)}var lm=1024,um={},dm=0;function fm(e){if(e.length===4)return e;let t=e.slice();return t[3]=1,t}function pm(e){return e>.0031308?e**(1/2.4)*269.025-14.025:e*3294.6}function mm(e){return e>.2068965?e**3:(e-4/29)*(108/841)}function hm(e){return e>10.314724?((e+14.025)/269.025)**2.4:e/3294.6}function gm(e){return e>.0088564?e**(1/3):e/(108/841)+4/29}function _m(e){let t=hm(e[0]),n=hm(e[1]),r=hm(e[2]),i=gm(t*.222488403+n*.716873169+r*.06060791),a=500*(gm(t*.452247074+n*.399439023+r*.148375274)-i),o=200*(i-gm(t*.016863605+n*.117638439+r*.865350722)),s=180/Math.PI*Math.atan2(o,a);return[116*i-16,Math.sqrt(a*a+o*o),s<0?s+360:s,e[3]]}function vm(e){let t=(e[0]+16)/116,n=e[1],r=e[2]*Math.PI/180,i=mm(t),a=mm(t+n/500*Math.cos(r)),o=mm(t-n/200*Math.sin(r)),s=pm(a*3.021973625-i*1.617392459-o*.404875592),c=pm(a*-.943766287+i*1.916279586+o*.027607165),l=pm(a*.069407491-i*.22898585+o*1.159737864);return[Rd(s+.5|0,0,255),Rd(c+.5|0,0,255),Rd(l+.5|0,0,255),e[3]]}function ym(e){if(e===`none`)return Qp;if(um.hasOwnProperty(e))return um[e];if(dm>=lm){let e=0;for(let t in um)e++&3||(delete um[t],--dm)}let t=sm(e);t.length!==4&&om(e);for(let n of t)isNaN(n)&&om(e);return um[e]=t,++dm,t}function bm(e){return Array.isArray(e)?e:ym(e)}function xm(e){let t=e[0];t!=(t|0)&&(t=t+.5|0);let n=e[1];n!=(n|0)&&(n=n+.5|0);let r=e[2];r!=(r|0)&&(r=r+.5|0);let i=e[3]===void 0?1:Math.round(e[3]*1e3)/1e3;return`rgba(`+t+`,`+n+`,`+r+`,`+i+`)`}function Sm(e,t,n,r,i){if(i){let i=n;n=function(a){return e.removeEventListener(t,n),i.call(r??this,a)}}else r&&r!==e&&(n=n.bind(r));let a={target:e,type:t,listener:n};return e.addEventListener(t,n),a}function Cm(e,t,n,r){return Sm(e,t,n,r,!0)}function wm(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),Cf(e))}var U={CHANGE:`change`,ERROR:`error`,BLUR:`blur`,CLEAR:`clear`,CONTEXTMENU:`contextmenu`,CLICK:`click`,DBLCLICK:`dblclick`,DRAGENTER:`dragenter`,DRAGOVER:`dragover`,DROP:`drop`,FOCUS:`focus`,KEYDOWN:`keydown`,KEYPRESS:`keypress`,LOAD:`load`,RESIZE:`resize`,TOUCHMOVE:`touchmove`,WHEEL:`wheel`},Tm=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}};function Em(e,t,n){let r,i;n||=Dm;let a=0,o=e.length,s=!1;for(;a<o;)r=a+(o-a>>1),i=+n(e[r],t),i<0?a=r+1:(o=r,s=!i);return s?a:~a}function Dm(e,t){return e>t?1:e<t?-1:0}function Om(e,t){return e<t?1:e>t?-1:0}function km(e,t,n){if(e[0]<=t)return 0;let r=e.length;if(t<=e[r-1])return r-1;if(typeof n==`function`){for(let i=1;i<r;++i){let r=e[i];if(r===t)return i;if(r<t)return n(t,e[i-1],r)>0?i-1:i}return r-1}if(n>0){for(let n=1;n<r;++n)if(e[n]<t)return n-1;return r-1}if(n<0){for(let n=1;n<r;++n)if(e[n]<=t)return n;return r-1}for(let n=1;n<r;++n){if(e[n]==t)return n;if(e[n]<t)return e[n-1]-t<t-e[n]?n-1:n}return r-1}function Am(e,t,n){for(;t<n;){let r=e[t];e[t]=e[n],e[n]=r,++t,--n}}function jm(e,t){let n=Array.isArray(t)?t:[t],r=n.length;for(let t=0;t<r;t++)e[e.length]=n[t]}function Mm(e,t){let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Nm(e,t,n){let r=t||Dm;return e.every(function(t,i){if(i===0)return!0;let a=r(e[i-1],t);return!(a>0||n&&a===0)})}function Pm(){return!0}function Fm(){return!1}function Im(){}function Lm(e){let t,n,r;return function(){let i=Array.prototype.slice.call(arguments);return(!n||this!==r||!Mm(i,n))&&(r=this,n=i,t=e.apply(this,arguments)),t}}function Rm(e){function t(){let t;try{t=e()}catch(e){return Promise.reject(e)}return t instanceof Promise?t:Promise.resolve(t)}return t()}var zm=class{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}},Bm=class extends Tm{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;let n=this.listeners_||={},r=n[e]||(n[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){let t=typeof e==`string`,n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(!r)return;let i=t?new zm(e):e;i.target||=this.eventTarget_||this;let a=this.dispatching_||={},o=this.pendingRemovals_||={};n in a||(a[n]=0,o[n]=0),++a[n];let s;for(let e=0,t=r.length;e<t;++e)if(s=`handleEvent`in r[e]?r[e].handleEvent(i):r[e].call(this,i),s===!1||i.propagationStopped){s=!1;break}if(--a[n]===0){let e=o[n];for(delete o[n];e--;)this.removeEventListener(n,Im);delete a[n]}return s}disposeInternal(){this.listeners_&&Cf(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){if(!this.listeners_)return;let n=this.listeners_[e];if(!n)return;let r=n.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=Im,++this.pendingRemovals_[e]):(n.splice(r,1),n.length===0&&delete this.listeners_[e]))}};function Vm(e,t,n){let r=e,i=!0,a=!1,o=!1,s=[Cm(r,U.LOAD,function(){o=!0,a||t()})];return r.src&&zp?(a=!0,r.decode().then(function(){i&&t()}).catch(function(e){i&&(o?t():n())})):s.push(Cm(r,U.ERROR,n)),function(){i=!1,s.forEach(wm)}}function Hm(e,t){return new Promise((n,r)=>{function i(){o(),n(e)}function a(){o(),r(Error(`Image load error`))}function o(){e.removeEventListener(`load`,i),e.removeEventListener(`error`,a)}e.addEventListener(`load`,i),e.addEventListener(`error`,a),t&&(e.src=t)})}function Um(e,t){return t&&(e.src=t),e.src&&zp?new Promise((t,n)=>e.decode().then(()=>t(e)).catch(r=>e.complete&&e.width?t(e):n(r))):Hm(e)}var Wm=class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(let t in this.cache_){let n=this.cache_[t];!(e++&3)&&!n.hasListener()&&(delete this.cache_[t],delete this.patternCache_[t],--this.cacheSize_)}}}get(e,t){let n=Gm(e,t);return n in this.cache_?this.cache_[n]:null}getPattern(e,t){let n=Gm(e,t);return n in this.patternCache_?this.patternCache_[n]:null}set(e,t,n,r){let i=Gm(e,t),a=i in this.cache_;this.cache_[i]=n,r&&(n.getImageState()===H.IDLE&&n.load(),n.getImageState()===H.LOADING?n.ready().then(()=>{this.patternCache_[i]=Up().createPattern(n.getImage(1),`repeat`)}):this.patternCache_[i]=Up().createPattern(n.getImage(1),`repeat`)),a||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}};function Gm(e,t){let n=t?bm(t):`null`;return e+`:`+n}var Km=new Wm,qm=null,Jm=class extends Bm{constructor(e,t,n,r,i){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=n?.crossOrigin,this.referrerPolicy_=n?.referrerPolicy,this.canvas_={},this.color_=i,this.imageState_=r===void 0?H.IDLE:r,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=t,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===H.LOADED){qm||=Vp(1,1,void 0,{willReadFrequently:!0}),qm.drawImage(this.image_,0,0);try{qm.getImageData(0,0,1,1),this.tainted_=!1}catch{qm=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(U.CHANGE)}handleImageError_(){this.imageState_=H.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=H.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}setImage(e){this.image_=e}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_){if(this.isTainted_()){let e=this.size_[0],t=this.size_[1],n=Vp(e,t);n.fillRect(0,0,e,t),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_}return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===H.IDLE){this.image_||this.initializeImage_(),this.imageState_=H.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&Um(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==H.LOADED)return;let t=this.image_,n=Vp(Math.ceil(t.width*e),Math.ceil(t.height*e)),r=n.canvas;n.scale(e,e),n.drawImage(t,0,0),n.globalCompositeOperation=`multiply`,n.fillStyle=cm(this.color_),n.fillRect(0,0,r.width/e,r.height/e),n.globalCompositeOperation=`destination-in`,n.drawImage(t,0,0),this.canvas_[e]=r}ready(){return this.ready_||=new Promise(e=>{if(this.imageState_===H.LOADED||this.imageState_===H.ERROR)e();else{let t=()=>{(this.imageState_===H.LOADED||this.imageState_===H.ERROR)&&(this.removeEventListener(U.CHANGE,t),e())};this.addEventListener(U.CHANGE,t)}}),this.ready_}};function Ym(e,t,n,r,i,a){let o=t===void 0?void 0:Km.get(t,i);return o||(o=new Jm(e,e&&`src`in e?e.src||void 0:t,n,r,i),Km.set(t,i,o,a)),a&&o&&!Km.getPattern(t,i)&&Km.set(t,i,o,a),o}function Xm(e){return e?Array.isArray(e)?xm(e):typeof e==`object`&&`src`in e?Zm(e):e:null}function Zm(e){if(!e.offset||!e.size)return Km.getPattern(e.src,e.color);let t=e.src+`:`+e.offset,n=Km.getPattern(t,e.color);if(n)return n;let r=Km.get(e.src,null);if(r.getImageState()!==H.LOADED)return null;let i=Vp(e.size[0],e.size[1]);return i.drawImage(r.getImage(1),e.offset[0],e.offset[1],e.size[0],e.size[1],0,0,e.size[0],e.size[1]),Ym(i.canvas,t,void 0,H.LOADED,e.color,!0),Km.getPattern(t,e.color)}var Qm={PROPERTYCHANGE:`propertychange`},$m=class extends Bm{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(U.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let n=e.length,r=Array(n);for(let i=0;i<n;++i)r[i]=Sm(this,e[i],t);return r}return Sm(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){let r=e.length;n=Array(r);for(let i=0;i<r;++i)n[i]=Cm(this,e[i],t)}else n=Cm(this,e,t);return t.ol_key=n,n}unInternal(e,t){let n=t.ol_key;if(n)eh(n);else if(Array.isArray(e))for(let n=0,r=e.length;n<r;++n)this.removeEventListener(e[n],t);else this.removeEventListener(e,t)}};$m.prototype.on,$m.prototype.once,$m.prototype.un;function eh(e){if(Array.isArray(e))for(let t=0,n=e.length;t<n;++t)wm(e[t]);else wm(e)}function W(){throw Error(`Unimplemented abstract method.`)}var th=0;function nh(e){return e.ol_uid||=String(++th)}var rh=class extends zm{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}},ih=class extends $m{constructor(e){super(),this.on,this.once,this.un,nh(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new rh(n,e,t)),n=Qm.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new rh(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){let r=this.values_||={};if(n)r[e]=t;else{let n=r[e];r[e]=t,n!==t&&this.notify(e,n)}}setProperties(e,t){for(let n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||={},e.values_)}unset(e,t){if(this.values_&&e in this.values_){let n=this.values_[e];delete this.values_[e],wf(this.values_)&&(this.values_=null),t||this.notify(e,n)}}},ah=`ol-hidden`,oh=`ol-selectable`,sh=`ol-unselectable`,ch=`ol-control`,lh=`ol-collapsed`,uh=new RegExp([`^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)`,`(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)`,`(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)`,`(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?`,`(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))`,`(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))`,`?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`].join(``),`i`),dh=[`style`,`variant`,`weight`,`size`,`lineHeight`,`family`],fh={normal:400,bold:700},ph=function(e){let t=e.match(uh);if(!t)return null;let n={lineHeight:`normal`,size:`1.2em`,style:`normal`,weight:`400`,variant:`normal`};for(let e=0,r=dh.length;e<r;++e){let r=t[e+1];r!==void 0&&(n[dh[e]]=typeof r==`string`?r.trim():r)}return isNaN(Number(n.weight))&&n.weight in fh&&(n.weight=fh[n.weight]),n.families=n.family.split(/,\s?/).map(e=>e.trim().replace(/^['"]|['"]$/g,``)),n},mh=`10px sans-serif`,hh=`#000`,gh=`round`,_h=[],vh=`round`,yh=`#000`,bh=`center`,xh=`middle`,Sh=[0,0,0,0],Ch=new ih,wh=null,Th,Eh={},Dh=new Set([`serif`,`sans-serif`,`monospace`,`cursive`,`fantasy`,`system-ui`,`ui-serif`,`ui-sans-serif`,`ui-monospace`,`ui-rounded`,`emoji`,`math`,`fangsong`]);function Oh(e,t,n){return`${e} ${t} 16px "${n}"`}var kh=(function(){let e,t;async function n(e){await t.ready;let n=ph(e),r=n.families[0].toLowerCase(),i=n.weight,a=[];return t.forEach(e=>{let t=e.family.replace(/^['"]|['"]$/g,``).toLowerCase(),o=fh[e.weight]||e.weight;t===r&&e.style===n.style&&o==i&&a.push(e)}),a.length!==0&&(await Promise.all(a.map(e=>e.load().then(()=>!0,()=>!1)))).some(e=>e)}async function r(){await t.ready;let i=!0,a=Ch.getProperties(),o=Object.keys(a).filter(e=>a[e]<100);for(let e=o.length-1;e>=0;--e){let t=o[e],r=a[t];r<100&&(await n(t)?(Cf(Eh),Ch.set(t,100)):(r+=10,Ch.set(t,r,!0),r<100&&(i=!1)))}e=void 0,i||(e=setTimeout(r,100))}return async function(n){t||=Rp?self.fonts:document.fonts;let i=ph(n);if(!i)return;let a=i.families,o=!1;for(let e of a){if(Dh.has(e))continue;let t=Oh(i.style,i.weight,e);Ch.get(t)===void 0&&(Ch.set(t,0,!0),o=!0)}o&&(clearTimeout(e),e=setTimeout(r,100))}})(),Ah=(function(){let e;return function(t){let n=Eh[t];if(n==null){if(Rp){let e=ph(t),r=jh(t,`Žg`);n=(isNaN(Number(e.lineHeight))?1.2:Number(e.lineHeight))*(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent)}else e||(e=document.createElement(`div`),e.innerHTML=`M`,e.style.minHeight=`0`,e.style.maxHeight=`none`,e.style.height=`auto`,e.style.padding=`0`,e.style.border=`none`,e.style.position=`absolute`,e.style.display=`block`,e.style.left=`-99999px`),e.style.font=t,document.body.appendChild(e),n=e.offsetHeight,document.body.removeChild(e);Eh[t]=n}return n}})();function jh(e,t){return wh||=Vp(1,1),e!=Th&&(wh.font=e,Th=wh.font),wh.measureText(t)}function Mh(e,t){return jh(e,t).width}function Nh(e,t,n){if(t in n)return n[t];let r=t.split(`
`).reduce((t,n)=>Math.max(t,Mh(e,n)),0);return n[t]=r,r}function Ph(e,t){let n=[],r=[],i=[],a=0,o=0,s=0,c=0;for(let l=0,u=t.length;l<=u;l+=2){let d=t[l];if(d===`
`||l===u){a=Math.max(a,o),i.push(o),o=0,s+=c,c=0;continue}let f=t[l+1]||e.font,p=Mh(f,d);n.push(p),o+=p;let m=Ah(f);r.push(m),c=Math.max(c,m)}return{width:a,height:s,widths:n,heights:r,lineWidths:i}}function Fh(e,t,n,r,i,a,o,s,c,l,u){e.save(),n!==1&&(e.globalAlpha===void 0?e.globalAlpha=e=>e.globalAlpha*=n:e.globalAlpha*=n),t&&e.transform.apply(e,t),r.contextInstructions?(e.translate(c,l),e.scale(u[0],u[1]),Ih(r,e)):u[0]<0||u[1]<0?(e.translate(c,l),e.scale(u[0],u[1]),e.drawImage(r,i,a,o,s,0,0,o,s)):e.drawImage(r,i,a,o,s,c,l,o*u[0],s*u[1]),e.restore()}function Ih(e,t){let n=e.contextInstructions;for(let e=0,r=n.length;e<r;e+=2)Array.isArray(n[e+1])?t[n[e]].apply(t,n[e+1]):t[n[e]]=n[e+1]}function Lh(e){return e[0]>0&&e[1]>0}function Rh(e,t,n){return n===void 0&&(n=[0,0]),n[0]=e[0]*t+.5|0,n[1]=e[1]*t+.5|0,n}function zh(e,t){return Array.isArray(e)?e:(t===void 0?t=[e,e]:(t[0]=e,t[1]=e),t)}var Bh=class e{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=zh(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){let t=this.getScale();return new e({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return W()}getImage(e){return W()}getHitDetectionImage(){return W()}getPixelRatio(e){return 1}getImageState(){return W()}getImageSize(){return W()}getOrigin(){return W()}getSize(){return W()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=zh(e)}listenImageChange(e){W()}load(){W()}unlistenImageChange(e){W()}ready(){return Promise.resolve()}},Vh=class e extends Bh{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0&&e.rotateWithView,rotation:e.rotation===void 0?0:e.rotation,scale:e.scale===void 0?1:e.scale,displacement:e.displacement===void 0?[0,0]:e.displacement,declutterMode:e.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=e.fill===void 0?null:e.fill,this.origin_=[0,0],this.points_=e.points,this.radius=e.radius,this.radius2_=e.radius2,this.angle_=e.angle===void 0?0:e.angle,this.stroke_=e.stroke===void 0?null:e.stroke,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?H.LOADING:H.LOADED,this.imageState_===H.LOADING&&this.ready().then(()=>this.imageState_=H.LOADED),this.render()}clone(){let t=this.getScale(),n=new e({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}getAnchor(){let e=this.size_,t=this.getDisplacement(),n=this.getScaleArray();return[e[0]/2-t[0]/n[0],e[1]/2+t[1]/n[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||=this.createHitDetectionCanvas_(this.renderOptions_),this.hitDetectionCanvas_}getImage(e){let t=this.fill_?.getKey(),n=`${e},${this.angle_},${this.radius},${this.radius2_},${this.points_},${t}`+Object.values(this.renderOptions_).join(`,`),r=Km.get(n,null)?.getImage(1);if(!r){let t=this.renderOptions_,i=Math.ceil(t.size*e),a=Vp(i,i);this.draw_(t,a,e),r=a.canvas;let o=new Jm(r,void 0,null,H.LOADED,null);Km.set(n,null,o),createImageBitmap(r).then(e=>{o.setImage(e)})}return r}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(e){this.radius!==e&&(this.radius=e,this.render())}getRadius2(){return this.radius2_}setRadius2(e){this.radius2_!==e&&(this.radius2_=e,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,t,n){if(t===0||this.points_===1/0||e!==`bevel`&&e!==`miter`)return t;let r=this.radius,i=this.radius2_===void 0?r:this.radius2_;if(r<i){let e=r;r=i,i=e}let a=this.radius2_===void 0?this.points_:this.points_*2,o=2*Math.PI/a,s=i*Math.sin(o),c=Math.sqrt(i*i-s*s),l=r-c,u=Math.sqrt(s*s+l*l),d=u/s;if(e===`miter`&&d<=n)return d*t;let f=t/2/d,p=t/2*(l/u),m=Math.sqrt((r+f)*(r+f)+p*p)-r;if(this.radius2_===void 0||e===`bevel`)return m*2;let h=r*Math.sin(o),g=Math.sqrt(r*r-h*h),_=i-g,v=Math.sqrt(h*h+_*_)/h;if(v<=n){let e=v*t/2-i-r;return 2*Math.max(m,e)}return m*2}createRenderOptions(){let e=gh,t=vh,n=0,r=null,i=0,a,o=0;this.stroke_&&(a=Xm(this.stroke_.getColor()??`#000`),o=this.stroke_.getWidth()??1,r=this.stroke_.getLineDash(),i=this.stroke_.getLineDashOffset()??0,t=this.stroke_.getLineJoin()??`round`,e=this.stroke_.getLineCap()??`round`,n=this.stroke_.getMiterLimit()??10);let s=this.calculateLineJoinSize_(t,o,n),c=Math.max(this.radius,this.radius2_||0),l=Math.ceil(2*c+s);return{strokeStyle:a,strokeWidth:o,size:l,lineCap:e,lineDash:r,lineDashOffset:i,lineJoin:t,miterLimit:n}}render(){this.renderOptions_=this.createRenderOptions();let e=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,t,n){if(t.scale(n,n),t.translate(e.size/2,e.size/2),this.createPath_(t),this.fill_){let e=this.fill_.getColor();e===null&&(e=hh),t.fillStyle=Xm(e),t.fill()}e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}createHitDetectionCanvas_(e){let t;if(this.fill_){let n=this.fill_.getColor(),r=0;typeof n==`string`&&(n=bm(n)),n===null?r=1:Array.isArray(n)&&(r=n.length===4?n[3]:1),r===0&&(t=Vp(e.size,e.size),this.drawHitDetectionCanvas_(e,t))}return t?t.canvas:this.getImage(1)}createPath_(e){let t=this.points_,n=this.radius;if(t===1/0)e.arc(0,0,n,0,2*Math.PI);else{let r=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(t*=2);let i=this.angle_-Math.PI/2,a=2*Math.PI/t;for(let o=0;o<t;o++){let t=i+o*a,s=o%2==0?n:r;e.lineTo(s*Math.cos(t),s*Math.sin(t))}e.closePath()}}drawHitDetectionCanvas_(e,t){t.translate(e.size/2,e.size/2),this.createPath_(t),t.fillStyle=hh,t.fill(),e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},Hh=class e extends Vh{constructor(e){e||={radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale===void 0?1:e.scale,rotation:e.rotation===void 0?0:e.rotation,rotateWithView:e.rotateWithView!==void 0&&e.rotateWithView,displacement:e.displacement===void 0?[0,0]:e.displacement,declutterMode:e.declutterMode})}clone(){let t=this.getScale(),n=new e({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return n.setOpacity(this.getOpacity()),n}},Uh=class e{constructor(e){e||={},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){let t=this.getColor();return new e({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(e){if(typeof e==`object`&&e&&`src`in e){let t=Ym(null,e.src,{crossOrigin:`anonymous`},void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));t.ready().then(()=>{this.patternImage_=null}),t.getImageState()===H.IDLE&&t.load(),t.getImageState()===H.LOADING&&(this.patternImage_=t)}this.color_=e}getKey(){let e=this.getColor();return e?e instanceof CanvasPattern||e instanceof CanvasGradient?nh(e):typeof e==`object`&&`src`in e?e.src+`:`+e.offset:bm(e).toString():``}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}};function Wh(e,t){if(!e)throw Error(t)}function Gh(e,t,n,r){return n!==void 0&&r!==void 0?[n/e,r/t]:n===void 0?r===void 0?1:r/t:n/e}var Kh=class e extends Bh{constructor(e){e||={};let t=e.opacity===void 0?1:e.opacity,n=e.rotation===void 0?0:e.rotation,r=e.scale===void 0?1:e.scale,i=e.rotateWithView!==void 0&&e.rotateWithView;super({opacity:t,rotation:n,scale:r,displacement:e.displacement===void 0?[0,0]:e.displacement,rotateWithView:i,declutterMode:e.declutterMode}),this.anchor_=e.anchor===void 0?[.5,.5]:e.anchor,this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin===void 0?`top-left`:e.anchorOrigin,this.anchorXUnits_=e.anchorXUnits===void 0?`fraction`:e.anchorXUnits,this.anchorYUnits_=e.anchorYUnits===void 0?`fraction`:e.anchorYUnits,this.crossOrigin_=e.crossOrigin===void 0?null:e.crossOrigin,this.referrerPolicy_=e.referrerPolicy;let a=e.img===void 0?null:e.img,o=e.src;Wh(!(o!==void 0&&a),"`image` and `src` cannot be provided at the same time"),(o===void 0||o.length===0)&&a&&(o=a.src||nh(a)),Wh(o!==void 0&&o.length>0,"A defined and non-empty `src` or `image` must be provided"),Wh(e.width===void 0&&e.height===void 0||e.scale===void 0,"`width` or `height` cannot be provided together with `scale`");let s;if(e.src===void 0?a!==void 0&&(s=`complete`in a?a.complete?a.src?H.LOADED:H.IDLE:H.LOADING:H.LOADED):s=H.IDLE,this.color_=e.color===void 0?null:bm(e.color),this.iconImage_=Ym(a,o,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},s,this.color_),this.offset_=e.offset===void 0?[0,0]:e.offset,this.offsetOrigin_=e.offsetOrigin===void 0?`top-left`:e.offsetOrigin,this.origin_=null,this.size_=e.size===void 0?null:e.size,this.initialOptions_,e.width!==void 0||e.height!==void 0){let t,n;if(e.size)[t,n]=e.size;else{let r=this.getImage(1);if(r.width&&r.height)t=r.width,n=r.height;else if(r instanceof HTMLImageElement){this.initialOptions_=e;let t=()=>{if(this.unlistenImageChange(t),!this.initialOptions_)return;let n=this.iconImage_.getSize();this.setScale(Gh(n[0],n[1],e.width,e.height))};this.listenImageChange(t);return}}t!==void 0&&this.setScale(Gh(t,n,e.width,e.height))}}clone(){let t,n,r;return this.initialOptions_?(n=this.initialOptions_.width,r=this.initialOptions_.height):(t=this.getScale(),t=Array.isArray(t)?t.slice():t),new e({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:n,height:r,size:this.size_===null?void 0:this.size_.slice(),src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;let t=this.getSize();if(this.anchorXUnits_==`fraction`||this.anchorYUnits_==`fraction`){if(!t)return null;e=this.anchor_.slice(),this.anchorXUnits_==`fraction`&&(e[0]*=t[0]),this.anchorYUnits_==`fraction`&&(e[1]*=t[1])}if(this.anchorOrigin_!=`top-left`){if(!t)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_==`top-right`||this.anchorOrigin_==`bottom-right`)&&(e[0]=-e[0]+t[0]),(this.anchorOrigin_==`bottom-left`||this.anchorOrigin_==`bottom-right`)&&(e[1]=-e[1]+t[1])}this.normalizedAnchor_=e}let t=this.getDisplacement(),n=this.getScaleArray();return[e[0]-t[0]/n[0],e[1]+t[1]/n[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(e){let t=e?bm(e):null;if(this.color_===t||this.color_&&t&&this.color_.length===t.length&&this.color_.every((e,n)=>e===t[n]))return;this.color_=t;let n=this.getSrc(),r=n===void 0?this.getHitDetectionImage():null,i=n===void 0?this.iconImage_.getImageState():H.IDLE;this.iconImage_=Ym(r,n,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},i,this.color_)}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!=`top-left`){let t=this.getSize(),n=this.iconImage_.getSize();if(!t||!n)return null;e=e.slice(),(this.offsetOrigin_==`top-right`||this.offsetOrigin_==`bottom-right`)&&(e[0]=n[0]-t[0]-e[0]),(this.offsetOrigin_==`bottom-left`||this.offsetOrigin_==`bottom-right`)&&(e[1]=n[1]-t[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(e){this.iconImage_=Ym(null,e,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},H.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==H.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){let e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==H.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(U.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(U.CHANGE,e)}ready(){return this.iconImage_.ready()}},qh=class e{constructor(e){e||={},this.color_=e.color===void 0?null:e.color,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash===void 0?null:e.lineDash,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.offset_=e.offset,this.width_=e.width}clone(){let t=this.getColor();return new e({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setOffset(e){this.offset_=e}setWidth(e){this.width_=e}},Jh=class e{constructor(e){e||={},this.geometry_=null,this.geometryFunction_=Qh,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill===void 0?null:e.fill,this.image_=e.image===void 0?null:e.image,this.renderer_=e.renderer===void 0?null:e.renderer,this.hitDetectionRenderer_=e.hitDetectionRenderer===void 0?null:e.hitDetectionRenderer,this.stroke_=e.stroke===void 0?null:e.stroke,this.text_=e.text===void 0?null:e.text,this.zIndex_=e.zIndex}clone(){let t=this.getGeometry();return t&&typeof t==`object`&&(t=t.clone()),new e({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e==`function`?this.geometryFunction_=e:typeof e==`string`?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=Qh,this.geometry_=e}setZIndex(e){this.zIndex_=e}};function Yh(e){let t;if(typeof e==`function`)t=e;else{let n;Array.isArray(e)?n=e:(Wh(typeof e.getZIndex==`function`,"Expected an `Style` or an array of `Style`"),n=[e]),t=function(){return n}}return t}var Xh=null;function Zh(e,t){if(!Xh){let e=new Uh({color:`rgba(255,255,255,0.4)`}),t=new qh({color:`#3399CC`,width:1.25});Xh=[new Jh({image:new Hh({fill:e,stroke:t,radius:5}),fill:e,stroke:t})]}return Xh}function Qh(e){return e.getGeometry()}var $h=`#333`,eg=class e{constructor(e){e||={},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.keepUpright_=e.keepUpright,this.scale_=e.scale,this.scaleArray_=zh(e.scale===void 0?1:e.scale),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill===void 0?new Uh({color:$h}):e.fill,this.maxAngle_=e.maxAngle===void 0?Math.PI/4:e.maxAngle,this.placement_=e.placement===void 0?`point`:e.placement,this.overflow_=!!e.overflow,this.stroke_=e.stroke===void 0?null:e.stroke,this.offsetX_=e.offsetX===void 0?0:e.offsetX,this.offsetY_=e.offsetY===void 0?0:e.offsetY,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){let t=this.getScale();return new e({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof Uh?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setKeepUpright(e){this.keepUpright_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=zh(e===void 0?1:e)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}},tg=[1,0,0,1,0,0];function ng(){return tg.slice(0)}function rg(e,t){let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=t[0],l=t[1],u=t[2],d=t[3],f=t[4],p=t[5];return e[0]=n*c+i*l,e[1]=r*c+a*l,e[2]=n*u+i*d,e[3]=r*u+a*d,e[4]=n*f+i*p+o,e[5]=r*f+a*p+s,e}function ig(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function ag(e,t){let n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function og(e,t,n,r,i,a,o,s){let c=Math.sin(a),l=Math.cos(a);return e[0]=r*l,e[1]=i*c,e[2]=-r*c,e[3]=i*l,e[4]=o*r*l-s*r*c+t,e[5]=o*i*c+s*i*l+n,e}function sg(e,t){let n=cg(t);Wh(n!==0,`Transformation matrix cannot be inverted`);let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-a/n,e[3]=r/n,e[4]=(a*c-o*s)/n,e[5]=-(r*c-i*s)/n,e}function cg(e){return e[0]*e[3]-e[1]*e[2]}var lg=[1e5,1e5,1e5,1e5,2,2];function ug(e){return`matrix(`+e.join(`, `)+`)`}function dg(e){return e.substring(7,e.length-1).split(`,`).map(parseFloat)}function fg(e,t){let n=dg(e),r=dg(t);for(let e=0;e<6;++e)if(Math.round((n[e]-r[e])*lg[e])!==0)return!1;return!0}function pg(e,t,n,r,i,a,o){a||=[],o||=2;let s=0;for(let c=t;c<n;c+=r){let t=e[c],n=e[c+1];a[s++]=i[0]*t+i[2]*n+i[4],a[s++]=i[1]*t+i[3]*n+i[5];for(let t=2;t<o;t++)a[s++]=e[c+t]}return a&&a.length!=s&&(a.length=s),a}function mg(e,t,n,r,i,a,o){o||=[];let s=Math.cos(i),c=Math.sin(i),l=a[0],u=a[1],d=0;for(let i=t;i<n;i+=r){let t=e[i]-l,n=e[i+1]-u;o[d++]=l+t*s-n*c,o[d++]=u+t*c+n*s;for(let t=i+2;t<i+r;++t)o[d++]=e[t]}return o&&o.length!=d&&(o.length=d),o}function hg(e,t,n,r,i,a,o,s){s||=[];let c=o[0],l=o[1],u=0;for(let o=t;o<n;o+=r){let t=e[o]-c,n=e[o+1]-l;s[u++]=c+i*t,s[u++]=l+a*n;for(let t=o+2;t<o+r;++t)s[u++]=e[t]}return s&&s.length!=u&&(s.length=u),s}function gg(e,t,n,r,i,a,o){o||=[];let s=0;for(let c=t;c<n;c+=r){o[s++]=e[c]+i,o[s++]=e[c+1]+a;for(let t=c+2;t<c+r;++t)o[s++]=e[t]}return o&&o.length!=s&&(o.length=s),o}var _g=ng(),vg=[NaN,NaN],yg=class extends ih{constructor(){super(),this.extent_=sd(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Lm((e,t,n)=>{if(!n)return this.getSimplifiedGeometry(t);let r=this.clone();return r.applyTransform(n),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return W()}closestPointXY(e,t,n,r){return W()}containsXY(e,t){return this.closestPointXY(e,t,vg,Number.MIN_VALUE)===0}getClosestPoint(e,t){return t||=[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return W()}getExtent(e){if(this.extentRevision_!=this.getRevision()){let e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&ld(e),this.extentRevision_=this.getRevision()}return Nd(this.extent_,e)}rotate(e,t){W()}scale(e,t,n){W()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return W()}getType(){return W()}applyTransform(e){W()}intersectsExtent(e){return W()}translate(e,t){W()}transform(e,t){let n=mp(e),r=n.getUnits()==`tile-pixels`?function(e,r,i){let a=n.getExtent(),o=n.getWorldExtent(),s=Td(o)/Td(a);og(_g,o[0],o[3],s,-s,0,0,0);let c=pg(e,0,e.length,i,_g,r),l=wp(n,t);return l?l(c,c,i):c}:wp(n,t);return this.applyTransform(r),this}},bg=class extends yg{constructor(){super(),this.layout=`XY`,this.stride=2,this.flatCoordinates}computeExtent(e){return dd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return W()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=Sg(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){W()}setLayout(e,t,n){let r;if(e)r=Sg(e);else{for(let e=0;e<n;++e){if(t.length===0){this.layout=`XY`,this.stride=2;return}t=t[0]}r=t.length,e=xg(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith(`XYZ`)?3:2,this.stride),this.changed())}rotate(e,t){let n=this.getFlatCoordinates();if(n){let r=this.getStride();mg(n,0,n.length,r,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||=xd(this.getExtent());let r=this.getFlatCoordinates();if(r){let i=this.getStride();hg(r,0,r.length,i,e,t,n,r),this.changed()}}translate(e,t){let n=this.getFlatCoordinates();if(n){let r=this.getStride();gg(n,0,n.length,r,e,t,n),this.changed()}}};function xg(e){let t;return e==2?t=`XY`:e==3?t=`XYZ`:e==4&&(t=`XYZM`),t}function Sg(e){let t;return e==`XY`?t=2:e==`XYZ`||e==`XYM`?t=3:e==`XYZM`&&(t=4),t}function Cg(e,t,n){let r=e.getFlatCoordinates();if(!r)return null;let i=e.getStride();return pg(r,0,r.length,i,t,n)}function wg(e,t,n,r){for(let r=0,i=n.length;r<i;++r)e[t++]=n[r];return t}function Tg(e,t,n,r){for(let i=0,a=n.length;i<a;++i){let a=n[i];for(let n=0;n<r;++n)e[t++]=a[n]}return t}function Eg(e,t,n,r,i){i||=[];let a=0;for(let o=0,s=n.length;o<s;++o){let s=Tg(e,t,n[o],r);i[a++]=s,t=s}return i.length=a,i}function Dg(e,t,n,r,i){i||=[];let a=0;for(let o=0,s=n.length;o<s;++o){let s=Eg(e,t,n[o],r,i[a]);s.length===0&&(s[0]=t),i[a++]=s,t=s[s.length-1]}return i.length=a,i}var Og=class e extends bg{constructor(e,t,n){super(),n!==void 0&&t===void 0?this.setFlatCoordinates(n,e):(t||=0,this.setCenterAndRadius(e,t,n))}clone(){let t=new e(this.flatCoordinates.slice(),void 0,this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){let i=this.flatCoordinates,a=e-i[0],o=t-i[1],s=a*a+o*o;if(s<r){if(s===0)for(let e=0;e<this.stride;++e)n[e]=i[e];else{let e=this.getRadius()/Math.sqrt(s);n[0]=i[0]+e*a,n[1]=i[1]+e*o;for(let e=2;e<this.stride;++e)n[e]=i[e]}return n.length=this.stride,s}return r}containsXY(e,t){let n=this.flatCoordinates,r=e-n[0],i=t-n[1];return r*r+i*i<=this.getRadiusSquared_()}getCenter(){return this.flatCoordinates.slice(0,this.stride)}computeExtent(e){let t=this.flatCoordinates,n=t[this.stride]-t[0];return cd(t[0]-n,t[1]-n,t[0]+n,t[1]+n,e)}getRadius(){return Math.sqrt(this.getRadiusSquared_())}getRadiusSquared_(){let e=this.flatCoordinates[this.stride]-this.flatCoordinates[0],t=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return e*e+t*t}getType(){return`Circle`}intersectsExtent(e){if(jd(e,this.getExtent())){let t=this.getCenter();return e[0]<=t[0]&&e[2]>=t[0]||e[1]<=t[1]&&e[3]>=t[1]||_d(e,this.intersectsCoordinate.bind(this))}return!1}setCenter(e){let t=this.stride,n=this.flatCoordinates[t]-this.flatCoordinates[0],r=e.slice();r[t]=r[0]+n;for(let n=1;n<t;++n)r[t+n]=e[n];this.setFlatCoordinates(this.layout,r),this.changed()}setCenterAndRadius(e,t,n){this.setLayout(n,e,0),this.flatCoordinates||=[];let r=this.flatCoordinates,i=wg(r,0,e,this.stride);r[i++]=r[0]+t;for(let e=1,t=this.stride;e<t;++e)r[i++]=r[e];r.length=i,this.changed()}getCoordinates(){return null}setCoordinates(e,t){}setRadius(e){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+e,this.changed()}rotate(e,t){let n=this.getCenter(),r=this.getStride();this.setCenter(mg(n,0,n.length,r,e,t,n)),this.changed()}};Og.prototype.transform;function kg(e,t,n,r,i,a,o,s){o??=[],s??=r;let c=e[t+r],l=e[t+r+1],u=e[n-2*r],d=e[n-2*r+1],f,p,m,h,g,_,v,y,b=0;for(let x=t;x<n;x+=r){m=f,h=p,g=void 0,_=void 0,x+r<n&&(g=e[x+r],_=e[x+r+1]),a&&x===t&&(m=u,h=d),a&&x===n-r&&(g=c,_=l),f=e[x],p=e[x+1],[v,y]=Ag(f,p,m,h,g,_,i),o[b++]=v,o[b++]=y;for(let t=2;t<s;t++)o[b++]=e[x+t]}return o.length!=b&&(o.length=b),o}function Ag(e,t,n,r,i,a,o){let s,c;n!==void 0&&r!==void 0?(s=e-n,c=t-r):i!==void 0&&a!==void 0?(s=i-e,c=a-t):(s=1,c=0);let l=Math.hypot(s,c),u=s/l,d=c/l;if(s=-d,c=u,n===void 0||r===void 0||i===void 0||a===void 0)return[e+s*o,t+c*o];let f=nf([e,t],[n,r],[i,a]);if(Math.cos(f)>.998)return[e+u*o,t+d*o];let p=Math.cos(f/2),m=Math.sin(f/2),h=m*s+p*c,g=-p*s+m*c,_=1/m*h,v=1/m*g;return[e+_*o,t+v*o]}function jg(e,t,n=!1){for(let r=0,i=e.length-2;r<i;r+=t){let i=n&&r===0?e.length-3*t:e.length-2*t;for(let n=i;n>r+t;n-=t){let i=e[r],a=e[r+1],o=e[r+t],s=e[r+t+1],c=e[n],l=e[n+1],u=e[n+t],d=e[n+t+1],f=(d-l)*(o-i)-(u-c)*(s-a);if(f===0)continue;let p=((u-c)*(a-l)-(d-l)*(i-c))/f,m=((o-i)*(a-l)-(s-a)*(i-c))/f;if(p>0&&p<1&&m>0&&m<1){let c=i+p*(o-i),l=a+p*(s-a);e[r+t]=c,e[r+t+1]=l,e.splice(r+2*t,n-r-t);break}}}return e}var Mg=class{drawCustom(e,t,n,r,i){}drawGeometry(e){}setStyle(e){}drawCircle(e,t,n){}drawFeature(e,t,n){}drawGeometryCollection(e,t,n){}drawLineString(e,t,n){}drawMultiLineString(e,t,n){}drawMultiPoint(e,t,n){}drawMultiPolygon(e,t,n){}drawPoint(e,t,n){}drawPolygon(e,t,n){}drawText(e,t,n){}setFillStrokeStyle(e,t){}setImageStyle(e,t){}setTextStyle(e,t){}},Ng=class extends Mg{constructor(e,t,n,r,i,a,o){super(),this.context_=e,this.pixelRatio_=t,this.extent_=n,this.transform_=r,this.transformRotation_=r?Kd(Math.atan2(r[1],r[0]),10):0,this.viewRotation_=i,this.squaredTolerance_=a,this.userTransform_=o,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_=``,this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=ng()}drawImages_(e,t,n,r){if(!this.image_)return;let i=pg(e,t,n,r,this.transform_,this.pixelCoordinates_),a=this.context_,o=this.tmpLocalTransform_,s=a.globalAlpha;this.imageOpacity_!=1&&(a.globalAlpha=s*this.imageOpacity_);let c=this.imageRotation_;this.transformRotation_===0&&(c-=this.viewRotation_),this.imageRotateWithView_&&(c+=this.viewRotation_);for(let e=0,t=i.length;e<t;e+=2){let t=i[e]-this.imageAnchorX_,n=i[e+1]-this.imageAnchorY_;if(c!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){let e=t+this.imageAnchorX_,r=n+this.imageAnchorY_;og(o,e,r,1,1,c,-e,-r),a.save(),a.transform.apply(a,o),a.translate(e,r),a.scale(this.imageScale_[0],this.imageScale_[1]),a.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),a.restore()}else a.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,t,n,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(a.globalAlpha=s)}drawText_(e,t,n,r){if(!this.textState_||this.text_===``)return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);let i=pg(e,t,n,r,this.transform_,this.pixelCoordinates_),a=this.context_,o=this.textRotation_;for(this.transformRotation_===0&&(o-=this.viewRotation_),this.textRotateWithView_&&(o+=this.viewRotation_);t<n;t+=r){let e=i[t]+this.textOffsetX_,n=i[t+1]+this.textOffsetY_;o!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(a.save(),a.translate(e-this.textOffsetX_,n-this.textOffsetY_),a.rotate(o),a.translate(this.textOffsetX_,this.textOffsetY_),a.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&a.strokeText(this.text_,0,0),this.textFillState_&&a.fillText(this.text_,0,0),a.restore()):(this.textStrokeState_&&a.strokeText(this.text_,e,n),this.textFillState_&&a.fillText(this.text_,e,n))}}moveToLineTo_(e,t,n,r,i,a){let o=this.context_,s=pg(e,t,n,r,this.transform_,this.pixelCoordinates_);if(Math.abs(a)>0){let e=s.length,t=i||Math.abs(s[0]-s[e-2])<1e-6&&Math.abs(s[1]-s[e-1])<1e-6;s=kg(s,0,e,2,a,t,s),jg(s,2,t)}o.moveTo(s[0],s[1]);let c=s.length;i&&(c-=2);for(let e=2;e<c;e+=2)o.lineTo(s[e],s[e+1]);return i&&o.closePath(),n}drawRings_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a)t=this.moveToLineTo_(e,t,n[a],r,!0,i);return t}drawCircle(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),jd(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let t=Cg(e,this.transform_,this.pixelCoordinates_),n=t[2]-t[0],r=t[3]-t[1],i=Math.sqrt(n*n+r*r),a=this.context_;a.beginPath(),a.arc(t[0],t[1],i,0,2*Math.PI),this.fillState_&&a.fill(),this.strokeState_&&a.stroke()}this.text_!==``&&this.drawText_(e.getCenter(),0,2,2)}}setStyle(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())}setTransform(e){this.transform_=e}drawGeometry(e){switch(e.getType()){case`Point`:this.drawPoint(e);break;case`LineString`:this.drawLineString(e);break;case`Polygon`:this.drawPolygon(e);break;case`MultiPoint`:this.drawMultiPoint(e);break;case`MultiLineString`:this.drawMultiLineString(e);break;case`MultiPolygon`:this.drawMultiPolygon(e);break;case`GeometryCollection`:this.drawGeometryCollection(e);break;case`Circle`:this.drawCircle(e)}}drawFeature(e,t){let n=t.getGeometryFunction()(e);n&&(this.setStyle(t),this.drawGeometry(n))}drawGeometryCollection(e){let t=e.getGeometriesArray();for(let e=0,n=t.length;e<n;++e)this.drawGeometry(t[e])}drawPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let t=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(t,0,t.length,n),this.text_!==``&&this.drawText_(t,0,t.length,n)}drawMultiPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let t=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(t,0,t.length,n),this.text_!==``&&this.drawText_(t,0,t.length,n)}drawLineString(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),jd(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);let t=this.context_,n=e.getFlatCoordinates();t.beginPath(),this.moveToLineTo_(n,0,n.length,e.getStride(),!1,this.strokeState_.strokeOffset),t.stroke()}if(this.text_!==``){let t=e.getFlatMidpoint();this.drawText_(t,0,2,2)}}}drawMultiLineString(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let t=e.getExtent();if(jd(this.extent_,t)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);let t=this.context_,n=e.getFlatCoordinates(),r=0,i=e.getEnds(),a=e.getStride();t.beginPath();for(let e=0,t=i.length;e<t;++e)r=this.moveToLineTo_(n,r,i[e],a,!1,this.strokeState_.strokeOffset);t.stroke()}if(this.text_!==``){let t=e.getFlatMidpoints();this.drawText_(t,0,t.length,2)}}}drawPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),jd(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let t=this.context_;t.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride(),this.strokeState_?.strokeOffset),this.fillState_&&t.fill(),this.strokeState_&&t.stroke()}if(this.text_!==``){let t=e.getFlatInteriorPoint();this.drawText_(t,0,2,2)}}}drawMultiPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),jd(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let t=this.context_,n=e.getOrientedFlatCoordinates(),r=0,i=e.getEndss(),a=e.getStride();t.beginPath();for(let e=0,t=i.length;e<t;++e){let t=i[e];r=this.drawRings_(n,r,t,a,this.strokeState_?.strokeOffset)}this.fillState_&&t.fill(),this.strokeState_&&t.stroke()}if(this.text_!==``){let t=e.getFlatInteriorPoints();this.drawText_(t,0,t.length,2)}}}setContextFillState_(e){let t=this.context_,n=this.contextFillState_;n?n.fillStyle!=e.fillStyle&&(n.fillStyle=e.fillStyle,t.fillStyle=e.fillStyle):(t.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})}setContextStrokeState_(e){let t=this.context_,n=this.contextStrokeState_;n?(n.lineCap!=e.lineCap&&(n.lineCap=e.lineCap,t.lineCap=e.lineCap),Mm(n.lineDash,e.lineDash)||t.setLineDash(n.lineDash=e.lineDash),n.lineDashOffset!=e.lineDashOffset&&(n.lineDashOffset=e.lineDashOffset,t.lineDashOffset=e.lineDashOffset),n.lineJoin!=e.lineJoin&&(n.lineJoin=e.lineJoin,t.lineJoin=e.lineJoin),n.lineWidth!=e.lineWidth&&(n.lineWidth=e.lineWidth,t.lineWidth=e.lineWidth),n.miterLimit!=e.miterLimit&&(n.miterLimit=e.miterLimit,t.miterLimit=e.miterLimit),n.strokeStyle!=e.strokeStyle&&(n.strokeStyle=e.strokeStyle,t.strokeStyle=e.strokeStyle)):(t.lineCap=e.lineCap,t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset,t.lineJoin=e.lineJoin,t.lineWidth=e.lineWidth,t.miterLimit=e.miterLimit,t.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})}setContextTextState_(e){let t=this.context_,n=this.contextTextState_,r=e.textAlign?e.textAlign:bh;n?(n.font!=e.font&&(n.font=e.font,t.font=e.font),n.textAlign!=r&&(n.textAlign=r,t.textAlign=r),n.textBaseline!=e.textBaseline&&(n.textBaseline=e.textBaseline,t.textBaseline=e.textBaseline)):(t.font=e.font,t.textAlign=r,t.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:r,textBaseline:e.textBaseline})}setFillStrokeStyle(e,t){if(!e)this.fillState_=null;else{let t=e.getColor();this.fillState_={fillStyle:Xm(t||hh)}}if(!t)this.strokeState_=null;else{let e=t.getColor(),n=t.getLineCap(),r=t.getLineDash(),i=t.getLineDashOffset(),a=t.getLineJoin(),o=t.getWidth(),s=t.getMiterLimit(),c=r||_h,l=t.getOffset();this.strokeState_={lineCap:n===void 0?gh:n,lineDash:this.pixelRatio_===1?c:c.map(e=>e*this.pixelRatio_),lineDashOffset:(i||0)*this.pixelRatio_,lineJoin:a===void 0?vh:a,lineWidth:(o===void 0?1:o)*this.pixelRatio_,miterLimit:s===void 0?10:s,strokeStyle:Xm(e||yh),strokeOffset:(l??0)*this.pixelRatio_}}}setImageStyle(e){let t;if(!e||!(t=e.getSize())){this.image_=null;return}let n=e.getPixelRatio(this.pixelRatio_),r=e.getAnchor(),i=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=r[0]*n,this.imageAnchorY_=r[1]*n,this.imageHeight_=t[1]*n,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=i[0],this.imageOriginY_=i[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation();let a=e.getScaleArray();this.imageScale_=[a[0]*this.pixelRatio_/n,a[1]*this.pixelRatio_/n],this.imageWidth_=t[0]*n}setTextStyle(e){if(!e)this.text_=``;else{let t=e.getFill();if(!t)this.textFillState_=null;else{let e=t.getColor();this.textFillState_={fillStyle:Xm(e||hh)}}let n=e.getStroke();if(!n)this.textStrokeState_=null;else{let e=n.getColor(),t=n.getLineCap(),r=n.getLineDash(),i=n.getLineDashOffset(),a=n.getLineJoin(),o=n.getWidth(),s=n.getMiterLimit();this.textStrokeState_={lineCap:t===void 0?gh:t,lineDash:r||_h,lineDashOffset:i||0,lineJoin:a===void 0?vh:a,lineWidth:o===void 0?1:o,miterLimit:s===void 0?10:s,strokeStyle:Xm(e||yh)}}let r=e.getFont(),i=e.getOffsetX(),a=e.getOffsetY(),o=e.getRotateWithView(),s=e.getRotation(),c=e.getScaleArray(),l=e.getText(),u=e.getTextAlign(),d=e.getTextBaseline();this.textState_={font:r===void 0?mh:r,textAlign:u===void 0?bh:u,textBaseline:d===void 0?xh:d},this.text_=l===void 0?``:Array.isArray(l)?l.reduce((e,t,n)=>e+=n%2?` `:t,``):l,this.textOffsetX_=i===void 0?0:this.pixelRatio_*i,this.textOffsetY_=a===void 0?0:this.pixelRatio_*a,this.textRotateWithView_=o!==void 0&&o,this.textRotation_=s===void 0?0:s,this.textScale_=[this.pixelRatio_*c[0],this.pixelRatio_*c[1]]}}},Pg=.5,Fg={Point:qg,LineString:Wg,Polygon:Yg,MultiPoint:Jg,MultiLineString:Gg,MultiPolygon:Kg,GeometryCollection:Ug,Circle:zg};function Ig(e,t){return parseInt(nh(e),10)-parseInt(nh(t),10)}function Lg(e,t){let n=Rg(e,t);return n*n}function Rg(e,t){return Pg*e/t}function zg(e,t,n,r,i){let a=n.getFill(),o=n.getStroke();if(a||o){let s=e.getBuilder(n.getZIndex(),`Circle`);s.setFillStrokeStyle(a,o),s.drawCircle(t,r,i)}let s=n.getText();if(s&&s.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s),a.drawText(t,r,i)}}function Bg(e,t,n,r,i,a,o,s){let c=[],l=n.getImage();if(l){let e=!0,t=l.getImageState();t==H.LOADED||t==H.ERROR?e=!1:t==H.IDLE&&l.load(),e&&c.push(l.ready())}let u=n.getFill();u&&u.loading()&&c.push(u.ready());let d=c.length>0;return d&&Promise.all(c).then(()=>i(null)),Vg(e,t,n,r,a,o,s),d}function Vg(e,t,n,r,i,a,o){let s=n.getGeometryFunction()(t);if(!s)return;let c=s.simplifyTransformed(r,i);if(n.getRenderer())Hg(e,c,n,t,o);else{let r=Fg[c.getType()];r(e,c,n,t,o,a)}}function Hg(e,t,n,r,i){if(t.getType()==`GeometryCollection`){let a=t.getGeometries();for(let t=0,o=a.length;t<o;++t)Hg(e,a[t],n,r,i);return}e.getBuilder(n.getZIndex(),`Default`).drawCustom(t,r,n.getRenderer(),n.getHitDetectionRenderer(),i)}function Ug(e,t,n,r,i,a){let o=t.getGeometriesArray(),s,c;for(s=0,c=o.length;s<c;++s){let t=Fg[o[s].getType()];t(e,o[s],n,r,i,a)}}function Wg(e,t,n,r,i){let a=n.getStroke();if(a){let o=e.getBuilder(n.getZIndex(),`LineString`);o.setFillStrokeStyle(null,a),o.drawLineString(t,r,i)}let o=n.getText();if(o&&o.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(o),a.drawText(t,r,i)}}function Gg(e,t,n,r,i){let a=n.getStroke();if(a){let o=e.getBuilder(n.getZIndex(),`LineString`);o.setFillStrokeStyle(null,a),o.drawMultiLineString(t,r,i)}let o=n.getText();if(o&&o.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(o),a.drawText(t,r,i)}}function Kg(e,t,n,r,i){let a=n.getFill(),o=n.getStroke();if(o||a){let s=e.getBuilder(n.getZIndex(),`Polygon`);s.setFillStrokeStyle(a,o),s.drawMultiPolygon(t,r,i)}let s=n.getText();if(s&&s.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s),a.drawText(t,r,i)}}function qg(e,t,n,r,i,a){let o=n.getImage(),s=n.getText(),c=s&&s.getText(),l=a&&o&&c?{}:void 0;if(o){if(o.getImageState()!=H.LOADED)return;let a=e.getBuilder(n.getZIndex(),`Image`);a.setImageStyle(o,l),a.drawPoint(t,r,i)}if(c){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s,l),a.drawText(t,r,i)}}function Jg(e,t,n,r,i,a){let o=n.getImage(),s=o&&o.getOpacity()!==0,c=n.getText(),l=c&&c.getText(),u=a&&s&&l?{}:void 0;if(s){if(o.getImageState()!=H.LOADED)return;let a=e.getBuilder(n.getZIndex(),`Image`);a.setImageStyle(o,u),a.drawMultiPoint(t,r,i)}if(l){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(c,u),a.drawText(t,r,i)}}function Yg(e,t,n,r,i){let a=n.getFill(),o=n.getStroke();if(a||o){let s=e.getBuilder(n.getZIndex(),`Polygon`);s.setFillStrokeStyle(a,o),s.drawPolygon(t,r,i)}let s=n.getText();if(s&&s.getText()){let a=e.getBuilder(n.getZIndex(),`Text`);a.setTextStyle(s),a.drawText(t,r,i)}}function Xg(e){if(!(e.context instanceof CanvasRenderingContext2D))throw Error(`Only works for render events from Canvas 2D layers`);let t=e.inversePixelTransform[0],n=e.inversePixelTransform[1],r=Math.sqrt(t*t+n*n),i=e.frameState,a=rg(e.inversePixelTransform.slice(),i.coordinateToPixelTransform),o=Lg(i.viewState.resolution,r),s,c=Dp();return c&&(s=Sp(c,i.viewState.projection)),new Ng(e.context,r,i.extent,a,i.viewState.rotation,o,s)}function Zg(e,t,n){let r=r=>{let i=r.frameState;if(!i)return;let a=i.time%t/t;n({event:r,frame:i,vector:Xg(r),resolution:i.viewState.resolution,t:a})!==!1&&e.map.render()};return e.layer.on(`postrender`,r),e.map.render(),()=>e.layer.un(`postrender`,r)}function Qg(e,t=1){let n=e.replace(`#`,``);return n.length===3&&(n=n.split(``).map(e=>e+e).join(``)),`rgba(${parseInt(n.slice(0,2),16)},${parseInt(n.slice(2,4),16)},${parseInt(n.slice(4,6),16)},${t})`}function $g(e,t){let n=0;for(let t=0;t<e.length;t++)n=n*31+e.charCodeAt(t)>>>0;return n%t}var e_=class e extends ih{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_=`geometry`,this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e){if(typeof e.getSimplifiedGeometry==`function`){let t=e;this.setGeometry(t)}else{let t=e;this.setProperties(t)}}}clone(){let t=new e,n=this.geometryName_;t.setGeometryName(n);let r=this.getPropertiesInternal();if(r){let e=this.getGeometry();for(let i in r)i===n&&e?t.set(i,e.clone()):t.set(i,r[i],!0)}let i=this.getStyle();return i&&t.setStyle(i),t}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&=(wm(this.geometryChangeKey_),null);let e=this.getGeometry();e&&(this.geometryChangeKey_=Sm(e,U.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?t_(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){e!==this.geometryName_&&(this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_())}};function t_(e){if(typeof e==`function`)return e;let t;return Array.isArray(e)?t=e:(Wh(typeof e.getZIndex==`function`,"Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),t=[e]),function(){return t}}function n_(e,t,n,r,i,a,o){let s=e[t],c=e[t+1],l=e[n]-s,u=e[n+1]-c,d;if(l===0&&u===0)d=t;else{let f=((i-s)*l+(a-c)*u)/(l*l+u*u);if(f>1)d=n;else if(f>0){for(let i=0;i<r;++i)o[i]=Gd(e[t+i],e[n+i],f);o.length=r;return}else d=t}for(let t=0;t<r;++t)o[t]=e[d+t];o.length=r}function r_(e,t,n,r,i){let a=e[t],o=e[t+1];for(t+=r;t<n;t+=r){let n=e[t],r=e[t+1],s=Bd(a,o,n,r);s>i&&(i=s),a=n,o=r}return i}function i_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];i=r_(e,t,o,r,i),t=o}return i}function a_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];i=i_(e,t,o,r,i),t=o[o.length-1]}return i}function o_(e,t,n,r,i,a,o,s,c,l,u){if(t==n)return l;let d,f;if(i===0){if(f=Bd(o,s,e[t],e[t+1]),f<l){for(d=0;d<r;++d)c[d]=e[t+d];return c.length=r,f}return l}u||=[NaN,NaN];let p=t+r;for(;p<n;)if(n_(e,p-r,p,r,o,s,u),f=Bd(o,s,u[0],u[1]),f<l){for(l=f,d=0;d<r;++d)c[d]=u[d];c.length=r,p+=r}else p+=r*Math.max((Math.sqrt(f)-Math.sqrt(l))/i|0,1);if(a&&(n_(e,n-r,t,r,o,s,u),f=Bd(o,s,u[0],u[1]),f<l)){for(l=f,d=0;d<r;++d)c[d]=u[d];c.length=r}return l}function s_(e,t,n,r,i,a,o,s,c,l,u){u||=[NaN,NaN];for(let d=0,f=n.length;d<f;++d){let f=n[d];l=o_(e,t,f,r,i,a,o,s,c,l,u),t=f}return l}function c_(e,t,n,r,i,a,o,s,c,l,u){u||=[NaN,NaN];for(let d=0,f=n.length;d<f;++d){let f=n[d];l=s_(e,t,f,r,i,a,o,s,c,l,u),t=f[f.length-1]}return l}function l_(e,t,n,r,i){i=i===void 0?[]:i;let a=0;for(let o=t;o<n;o+=r)i[a++]=e.slice(o,o+r);return i.length=a,i}function u_(e,t,n,r,i){i=i===void 0?[]:i;let a=0;for(let o=0,s=n.length;o<s;++o){let s=n[o];i[a++]=l_(e,t,s,r,i[a]),t=s}return i.length=a,i}function d_(e,t,n,r,i){i=i===void 0?[]:i;let a=0;for(let o=0,s=n.length;o<s;++o){let s=n[o];i[a++]=s.length===1&&s[0]===t?[]:u_(e,t,s,r,i[a]),t=s[s.length-1]}return i.length=a,i}function f_(e,t,n,r,i,a,o){let s,c,l=(n-t)/r;if(l===1)s=t;else if(l===2)s=t,c=i;else if(l!==0){let a=e[t],o=e[t+1],l=0,u=[0];for(let i=t+r;i<n;i+=r){let t=e[i],n=e[i+1];l+=Math.sqrt((t-a)*(t-a)+(n-o)*(n-o)),u.push(l),a=t,o=n}let d=i*l,f=Em(u,d);f<0?(c=(d-u[-f-2])/(u[-f-1]-u[-f-2]),s=t+(-f-2)*r):s=t+f*r}o=o>1?o:2,a||=Array(o);for(let t=0;t<o;++t)a[t]=s===void 0?NaN:c===void 0?e[s+t]:Gd(e[s+t],e[s+r+t],c);return a}function p_(e,t,n,r,i,a){if(n==t)return null;let o;if(i<e[t+r-1])return a?(o=e.slice(t,t+r),o[r-1]=i,o):null;if(e[n-1]<i)return a?(o=e.slice(n-r,n),o[r-1]=i,o):null;if(i==e[t+r-1])return e.slice(t,t+r);let s=t/r,c=n/r;for(;s<c;){let t=s+c>>1;i<e[(t+1)*r-1]?c=t:s=t+1}let l=e[s*r-1];if(i==l)return e.slice((s-1)*r,(s-1)*r+r);let u=e[(s+1)*r-1],d=(i-l)/(u-l);o=[];for(let t=0;t<r-1;++t)o.push(Gd(e[(s-1)*r+t],e[s*r+t],d));return o.push(i),o}function m_(e,t,n,r,i,a,o){if(o)return p_(e,t,n[n.length-1],r,i,a);let s;if(i<e[r-1])return a?(s=e.slice(0,r),s[r-1]=i,s):null;if(e[e.length-1]<i)return a?(s=e.slice(e.length-r),s[r-1]=i,s):null;for(let a=0,o=n.length;a<o;++a){let o=n[a];if(t!=o){if(i<e[t+r-1])return null;if(i<=e[o-1])return p_(e,t,o,r,i,!1);t=o}}return null}function h_(e,t,n,r,i){return!_d(i,function(i){return!g_(e,t,n,r,i[0],i[1])})}function g_(e,t,n,r,i,a){let o=0,s=e[n-r],c=e[n-r+1];for(;t<n;t+=r){let n=e[t],r=e[t+1];c<=a?r>a&&(n-s)*(a-c)-(i-s)*(r-c)>0&&o++:r<=a&&(n-s)*(a-c)-(i-s)*(r-c)<0&&o--,s=n,c=r}return o!==0}function __(e,t,n,r,i,a){if(n.length===0||!g_(e,t,n[0],r,i,a))return!1;for(let t=1,o=n.length;t<o;++t)if(g_(e,n[t-1],n[t],r,i,a))return!1;return!0}function v_(e,t,n,r,i,a){if(n.length===0)return!1;for(let o=0,s=n.length;o<s;++o){let s=n[o];if(__(e,t,s,r,i,a))return!0;t=s[s.length-1]}return!1}function y_(e,t,n,r,i){let a;for(t+=r;t<n;t+=r)if(a=i(e.slice(t-r,t),e.slice(t,t+r)),a)return a;return!1}function b_(e,t,n,r,i,a){return a??=hd(sd(),e,t,n,r),jd(i,a)?a[0]>=i[0]&&a[2]<=i[2]||a[1]>=i[1]&&a[3]<=i[3]||y_(e,t,n,r,function(e,t){return Pd(i,e,t)}):!1}function x_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){if(b_(e,t,n[a],r,i))return!0;t=n[a]}return!1}function S_(e,t,n,r,i){return!!(b_(e,t,n,r,i)||g_(e,t,n,r,i[0],i[1])||g_(e,t,n,r,i[0],i[3])||g_(e,t,n,r,i[2],i[1])||g_(e,t,n,r,i[2],i[3]))}function C_(e,t,n,r,i){if(!S_(e,t,n[0],r,i))return!1;if(n.length===1)return!0;for(let t=1,a=n.length;t<a;++t)if(h_(e,n[t-1],n[t],r,i)&&!b_(e,n[t-1],n[t],r,i))return!1;return!0}function w_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];if(C_(e,t,o,r,i))return!0;t=o[o.length-1]}return!1}function T_(e,t,n,r){let i=e[t],a=e[t+1],o=0;for(let s=t+r;s<n;s+=r){let t=e[s],n=e[s+1];o+=Math.sqrt((t-i)*(t-i)+(n-a)*(n-a)),i=t,a=n}return o}function E_(e,t,n,r,i,a,o){let s=(n-t)/r;if(s<3){for(;t<n;t+=r)a[o++]=e[t],a[o++]=e[t+1];return o}let c=Array(s);c[0]=1,c[s-1]=1;let l=[t,n-r],u=0;for(;l.length>0;){let n=l.pop(),a=l.pop(),o=0,s=e[a],d=e[a+1],f=e[n],p=e[n+1];for(let t=a+r;t<n;t+=r){let n=e[t],r=e[t+1],i=zd(n,r,s,d,f,p);i>o&&(u=t,o=i)}o>i&&(c[(u-t)/r]=1,a+r<u&&l.push(a,u),u+r<n&&l.push(u,n))}for(let n=0;n<s;++n)c[n]&&(a[o++]=e[t+n*r],a[o++]=e[t+n*r+1]);return o}function D_(e,t,n,r,i,a,o,s){for(let c=0,l=n.length;c<l;++c){let l=n[c];o=E_(e,t,l,r,i,a,o),s.push(o),t=l}return o}function O_(e,t){return t*Math.round(e/t)}function k_(e,t,n,r,i,a,o){if(t==n)return o;let s=O_(e[t],i),c=O_(e[t+1],i);t+=r,a[o++]=s,a[o++]=c;let l,u;do if(l=O_(e[t],i),u=O_(e[t+1],i),t+=r,t==n)return a[o++]=l,a[o++]=u,o;while(l==s&&u==c);for(;t<n;){let n=O_(e[t],i),d=O_(e[t+1],i);if(t+=r,n==l&&d==u)continue;let f=l-s,p=u-c,m=n-s,h=d-c;if(f*h==p*m&&(f<0&&m<f||f==m||f>0&&m>f)&&(p<0&&h<p||p==h||p>0&&h>p)){l=n,u=d;continue}a[o++]=l,a[o++]=u,s=l,c=u,l=n,u=d}return a[o++]=l,a[o++]=u,o}function A_(e,t,n,r,i,a,o,s){for(let c=0,l=n.length;c<l;++c){let l=n[c];o=k_(e,t,l,r,i,a,o),s.push(o),t=l}return o}function j_(e,t,n,r,i,a,o,s){for(let c=0,l=n.length;c<l;++c){let l=n[c],u=[];o=A_(e,t,l,r,i,a,o,u),s.push(u),t=l[l.length-1]}return o}var M_=class e extends bg{constructor(e,t){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendCoordinate(e){jm(this.flatCoordinates,e),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){return r<nd(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(r_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),o_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,e,t,n,r))}forEachSegment(e){return y_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinateAtM(e,t){return this.layout!=`XYM`&&this.layout!=`XYZM`?null:(t=t!==void 0&&t,p_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t))}getCoordinates(){return l_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(e,t){return f_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,this.stride)}getLength(){return T_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){let n=[];return n.length=E_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new e(n,`XY`)}getType(){return`LineString`}intersectsExtent(e){return b_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,this.getExtent())}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||=[],this.flatCoordinates.length=Tg(this.flatCoordinates,0,e,this.stride),this.changed()}},N_=class e extends bg{constructor(e,t,n){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,t);else if(t!==void 0&&n)this.setFlatCoordinates(t,e),this.ends_=n;else{let t=e,n=[],r=[];for(let e=0,i=t.length;e<i;++e){let i=t[e];jm(n,i.getFlatCoordinates()),r.push(n.length)}let i=t.length===0?this.getLayout():t[0].getLayout();this.setFlatCoordinates(i,n),this.ends_=r}}appendLineString(e){jm(this.flatCoordinates,e.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(e,t,n,r){return r<nd(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(i_(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),s_(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,e,t,n,r))}getCoordinateAtM(e,t,n){return this.layout!=`XYM`&&this.layout!=`XYZM`||this.flatCoordinates.length===0?null:(t=t!==void 0&&t,n=n!==void 0&&n,m_(this.flatCoordinates,0,this.ends_,this.stride,e,t,n))}getCoordinates(){return u_(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(e){return e<0||this.ends_.length<=e?null:new M_(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLineStrings(){let e=this.flatCoordinates,t=this.ends_,n=this.layout,r=[],i=0;for(let a=0,o=t.length;a<o;++a){let o=t[a],s=new M_(e.slice(i,o),n);r.push(s),i=o}return r}getLength(){let e=this.ends_,t=0,n=0;for(let r=0,i=e.length;r<i;++r)n+=T_(this.flatCoordinates,t,e[r],this.stride),t=e[r];return n}getFlatMidpoints(){let e=[],t=this.flatCoordinates,n=0,r=this.ends_,i=this.stride;for(let a=0,o=r.length;a<o;++a){let o=r[a];jm(e,f_(t,n,o,i,.5)),n=o}return e}getSimplifiedGeometryInternal(t){let n=[],r=[];return n.length=D_(this.flatCoordinates,0,this.ends_,this.stride,t,n,0,r),new e(n,`XY`,r)}getType(){return`MultiLineString`}intersectsExtent(e){return x_(this.flatCoordinates,0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||=[];let n=Eg(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}},P_=class e extends bg{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){let t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){let i=this.flatCoordinates,a=Bd(e,t,i[0],i[1]);if(a<r){let e=this.stride;for(let t=0;t<e;++t)n[t]=i[t];return n.length=e,a}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return ud(this.flatCoordinates,e)}getType(){return`Point`}intersectsExtent(e){return ad(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||=[],this.flatCoordinates.length=wg(this.flatCoordinates,0,e,this.stride),this.changed()}},F_=class e extends bg{constructor(e,t){super(),t&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendPoint(e){jm(this.flatCoordinates,e.getFlatCoordinates()),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(e,t,n,r){if(r<nd(this.getExtent(),e,t))return r;let i=this.flatCoordinates,a=this.stride;for(let o=0,s=i.length;o<s;o+=a){let s=Bd(e,t,i[o],i[o+1]);if(s<r){r=s;for(let e=0;e<a;++e)n[e]=i[o+e];n.length=a}}return r}getCoordinates(){return l_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(e){let t=this.flatCoordinates.length/this.stride;return e<0||t<=e?null:new P_(this.flatCoordinates.slice(e*this.stride,(e+1)*this.stride),this.layout)}getPoints(){let e=this.flatCoordinates,t=this.layout,n=this.stride,r=[];for(let i=0,a=e.length;i<a;i+=n){let a=new P_(e.slice(i,i+n),t);r.push(a)}return r}getType(){return`MultiPoint`}intersectsExtent(e){let t=this.flatCoordinates,n=this.stride;for(let r=0,i=t.length;r<i;r+=n){let n=t[r],i=t[r+1];if(ad(e,n,i))return!0}return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||=[],this.flatCoordinates.length=Tg(this.flatCoordinates,0,e,this.stride),this.changed()}};function I_(e,t,n,r){let i=0,a=e[n-r],o=e[n-r+1],s=0,c=0;for(;t<n;t+=r){let n=e[t]-a,r=e[t+1]-o;i+=c*n-s*r,s=n,c=r}return i/2}function L_(e,t,n,r){let i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a];i+=I_(e,t,o,r),t=o}return i}function R_(e,t,n,r){let i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a];i+=L_(e,t,o,r),t=o[o.length-1]}return i}var z_=class e extends bg{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new e(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,r){return r<nd(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(r_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),o_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,r))}getArea(){return I_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return l_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){let n=[];return n.length=E_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new e(n,`XY`)}getType(){return`LinearRing`}intersectsExtent(e){return b_(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||=[],this.flatCoordinates.length=Tg(this.flatCoordinates,0,e,this.stride),this.changed()}};function B_(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m=i[a+1],h=[];for(let i=0,a=n.length;i<a;++i){let a=n[i];for(u=e[a-r],f=e[a-r+1],s=t;s<a;s+=r)d=e[s],p=e[s+1],(m<=f&&p<=m||f<=m&&m<=p)&&(l=(m-f)/(p-f)*(d-u)+u,h.push(l)),u=d,f=p}let g=NaN,_=-1/0;for(h.sort(Dm),u=h[0],s=1,c=h.length;s<c;++s){d=h[s];let i=Math.abs(d-u);i>_&&(l=(u+d)/2,__(e,t,n,r,l,m)&&(g=l,_=i)),u=d}return isNaN(g)&&(g=i[a]),o?(o.push(g,m,_),o):[g,m,_]}function V_(e,t,n,r,i){let a=[];for(let o=0,s=n.length;o<s;++o){let s=n[o];a=B_(e,t,s,r,i,2*o,a),t=s[s.length-1]}return a}function H_(e,t,n,r){for(;t<n-r;){for(let i=0;i<r;++i){let a=e[t+i];e[t+i]=e[n-r+i],e[n-r+i]=a}t+=r,n-=r}}function U_(e,t,n,r){let i=0,a=e[n-r],o=e[n-r+1];for(;t<n;t+=r){let n=e[t],r=e[t+1];i+=(n-a)*(r+o),a=n,o=r}return i===0?void 0:i>0}function W_(e,t,n,r,i){i=i!==void 0&&i;for(let a=0,o=n.length;a<o;++a){let o=n[a],s=U_(e,t,o,r);if(a===0){if(i&&s||!i&&!s)return!1}else if(i&&!s||!i&&s)return!1;t=o}return!0}function G_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a];if(!W_(e,t,o,r,i))return!1;o.length&&(t=o[o.length-1])}return!0}function K_(e,t,n,r,i){i=i!==void 0&&i;for(let a=0,o=n.length;a<o;++a){let o=n[a],s=U_(e,t,o,r);(a===0?i&&s||!i&&!s:i&&!s||!i&&s)&&H_(e,t,o,r),t=o}return t}function q_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a)t=K_(e,t,n[a],r,i);return t}function J_(e,t){let n=[],r=0,i=0,a;for(let o=0,s=t.length;o<s;++o){let s=t[o],c=U_(e,r,s,2);if(a===void 0&&(a=c),c===a)n.push(t.slice(i,o+1));else{if(n.length===0)continue;n[n.length-1].push(t[i])}i=o+1,r=s}return n}var Y_=class e extends bg{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?jm(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(e,t,n,r){return r<nd(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(i_(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),s_(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return __(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return L_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e===void 0?t=this.flatCoordinates:(t=this.getOrientedFlatCoordinates().slice(),K_(t,0,this.ends_,this.stride,e)),u_(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let e=xd(this.getExtent());this.flatInteriorPoint_=B_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new P_(this.getFlatInteriorPoint(),`XYM`)}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new z_(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){let e=this.layout,t=this.flatCoordinates,n=this.ends_,r=[],i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a],s=new z_(t.slice(i,o),e);r.push(s),i=o}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let e=this.flatCoordinates;W_(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=K_(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let n=[],r=[];return n.length=A_(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),n,0,r),new e(n,`XY`,r)}getType(){return`Polygon`}intersectsExtent(e){return C_(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||=[];let n=Eg(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}};function X_(e){if(Md(e))throw Error(`Cannot create polygon from empty extent`);let t=e[0],n=e[1],r=e[2],i=e[3],a=[t,n,t,i,r,i,r,n,t,n];return new Y_(a,`XY`,[a.length])}function Z_(e,t,n,r){let i=[],a=sd();for(let o=0,s=n.length;o<s;++o){let s=n[o];a=dd(e,t,s[0],r),i.push((a[0]+a[2])/2,(a[1]+a[3])/2),t=s[s.length-1]}return i}var Q_=class e extends bg{constructor(e,t,n){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!n&&!Array.isArray(e[0])){let r=e,i=[],a=[];for(let e=0,t=r.length;e<t;++e){let t=r[e],n=i.length,o=t.getEnds();for(let e=0,t=o.length;e<t;++e)o[e]+=n;jm(i,t.getFlatCoordinates()),a.push(o)}t=r.length===0?this.getLayout():r[0].getLayout(),e=i,n=a}t!==void 0&&n?(this.setFlatCoordinates(t,e),this.endss_=n):this.setCoordinates(e,t)}appendPolygon(e){let t;if(!this.flatCoordinates)this.flatCoordinates=e.getFlatCoordinates().slice(),t=e.getEnds().slice(),this.endss_.push();else{let n=this.flatCoordinates.length;jm(this.flatCoordinates,e.getFlatCoordinates()),t=e.getEnds().slice();for(let e=0,r=t.length;e<r;++e)t[e]+=n}this.endss_.push(t),this.changed()}clone(){let t=this.endss_.length,n=Array(t);for(let e=0;e<t;++e)n[e]=this.endss_[e].slice();let r=new e(this.flatCoordinates.slice(),this.layout,n);return r.applyProperties(this),r}closestPointXY(e,t,n,r){return r<nd(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(a_(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),c_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return v_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e,t)}getArea(){return R_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(e){let t;return e===void 0?t=this.flatCoordinates:(t=this.getOrientedFlatCoordinates().slice(),q_(t,0,this.endss_,this.stride,e)),d_(t,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){let e=Z_(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=V_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new F_(this.getFlatInteriorPoints().slice(),`XYM`)}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let e=this.flatCoordinates;G_(e,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=q_(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let n=[],r=[];return n.length=j_(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),n,0,r),new e(n,`XY`,r)}getPolygon(e){if(e<0||this.endss_.length<=e)return null;let t;if(e===0)t=0;else{let n=this.endss_[e-1];t=n[n.length-1]}let n=this.endss_[e].slice(),r=n[n.length-1];if(t!==0)for(let e=0,r=n.length;e<r;++e)n[e]-=t;return new Y_(this.flatCoordinates.slice(t,r),this.layout,n)}getPolygons(){let e=this.layout,t=this.flatCoordinates,n=this.endss_,r=[],i=0;for(let a=0,o=n.length;a<o;++a){let o=n[a].slice(),s=o[o.length-1];if(i!==0)for(let e=0,t=o.length;e<t;++e)o[e]-=i;let c=new Y_(t.slice(i,s),e,o);r.push(c),i=s}return r}getType(){return`MultiPolygon`}intersectsExtent(e){return w_(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,3),this.flatCoordinates||=[];let n=Dg(this.flatCoordinates,0,e,this.stride,this.endss_);if(n.length===0)this.flatCoordinates.length=0;else{let e=n[n.length-1];this.flatCoordinates.length=e.length===0?0:e[e.length-1]}this.changed()}},$_=ng(),ev=class e{constructor(e,t,n,r,i,a){this.styleFunction,this.extent_,this.id_=a,this.type_=e,this.flatCoordinates_=t,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=n||null,this.properties_=i,this.squaredTolerance_,this.stride_=r,this.simplifiedGeometry_}get(e){return this.properties_[e]}getExtent(){return this.extent_||=this.type_===`Point`?ud(this.flatCoordinates_):dd(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){let e=xd(this.getExtent());this.flatInteriorPoints_=B_(this.flatCoordinates_,0,this.ends_,this.stride_,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){let e=J_(this.flatCoordinates_,this.ends_),t=Z_(this.flatCoordinates_,0,e,this.stride_);this.flatInteriorPoints_=V_(this.flatCoordinates_,0,e,this.stride_,t)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||=f_(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_,.5),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];let e=this.flatCoordinates_,t=0,n=this.ends_;for(let r=0,i=n.length;r<i;++r){let i=n[r],a=f_(e,t,i,this.stride_,.5);jm(this.flatMidpoints_,a),t=i}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,t){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=mp(e);let t=e.getExtent(),n=e.getWorldExtent();if(t&&n){let e=Td(n)/Td(t);og($_,n[0],n[3],e,-e,0,0,0),pg(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_,$_,this.flatCoordinates_)}}applyTransform(e){e(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new e(this.type_,this.flatCoordinates_.slice(),this.ends_?.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=Lm((t,n)=>{if(t===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),n&&this.simplifiedGeometry_.applyTransform(n);let r=this.simplifiedGeometry_.getFlatCoordinates(),i;switch(this.type_){case`LineString`:r.length=E_(r,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,t,r,0),i=[r.length];break;case`MultiLineString`:i=[],r.length=D_(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,t,r,0,i);break;case`Polygon`:i=[],r.length=A_(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(t),r,0,i)}return i&&(this.simplifiedGeometry_=new e(this.type_,r,i,this.stride_,this.properties_,this.id_)),this.squaredTolerance_=t,this.simplifiedGeometry_}),this}};ev.prototype.getFlatCoordinates=ev.prototype.getOrientedFlatCoordinates;var tv=class e extends yg{constructor(e){super(),this.geometries_=e,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(wm),this.changeEventsKeys_.length=0}listenGeometriesChange_(){let e=this.geometries_;for(let t=0,n=e.length;t<n;++t)this.changeEventsKeys_.push(Sm(e[t],U.CHANGE,this.changed,this))}clone(){let t=new e(nv(this.geometries_));return t.applyProperties(this),t}closestPointXY(e,t,n,r){if(r<nd(this.getExtent(),e,t))return r;let i=this.geometries_;for(let a=0,o=i.length;a<o;++a)r=i[a].closestPointXY(e,t,n,r);return r}containsXY(e,t){let n=this.geometries_;for(let r=0,i=n.length;r<i;++r)if(n[r].containsXY(e,t))return!0;return!1}computeExtent(e){ld(e);let t=this.geometries_;for(let n=0,r=t.length;n<r;++n)pd(e,t[n].getExtent());return e}getGeometries(){return nv(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[],t=this.geometries_;for(let n=0,r=t.length;n<r;++n)t[n].getType()===this.getType()?e=e.concat(t[n].getGeometriesArrayRecursive()):e.push(t[n]);return e}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;let n=[],r=this.geometries_,i=!1;for(let e=0,a=r.length;e<a;++e){let a=r[e],o=a.getSimplifiedGeometry(t);n.push(o),o!==a&&(i=!0)}return i?new e(n):(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getType(){return`GeometryCollection`}intersectsExtent(e){let t=this.geometries_;for(let n=0,r=t.length;n<r;++n)if(t[n].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,t){let n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].rotate(e,t);this.changed()}scale(e,t,n){n||=xd(this.getExtent());let r=this.geometries_;for(let i=0,a=r.length;i<a;++i)r[i].scale(e,t,n);this.changed()}setGeometries(e){this.setGeometriesArray(nv(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){let t=this.geometries_;for(let n=0,r=t.length;n<r;++n)t[n].applyTransform(e);this.changed()}translate(e,t){let n=this.geometries_;for(let r=0,i=n.length;r<i;++r)n[r].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}};function nv(e){return e.map(e=>e.clone())}var rv=class{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=e_,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let n=t.dataProjection?mp(t.dataProjection):this.readProjection(e);t.extent&&n&&n.getUnits()===`tile-pixels`&&(n=mp(n),n.setWorldExtent(t.extent)),t={dataProjection:n,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return W()}readFeature(e,t){return W()}readFeatures(e,t){return W()}readGeometry(e,t){return W()}readProjection(e){return W()}writeFeature(e,t){return W()}writeFeatures(e,t){return W()}writeGeometry(e,t){return W()}};function iv(e,t,n){let r=n?mp(n.featureProjection):null,i=n?mp(n.dataProjection):null,a=e;if(r&&i&&!xp(r,i)){t&&(a=e.clone());let n=t?r:i,o=t?i:r;n.getUnits()===`tile-pixels`?a.transform(n,o):a.applyTransform(wp(n,o))}if(t&&n&&n.decimals!==void 0){let t=10**n.decimals;a===e&&(a=e.clone()),a.applyTransform(function(e){for(let n=0,r=e.length;n<r;++n)e[n]=Math.round(e[n]*t)/t;return e})}return a}var av={Point:P_,LineString:M_,Polygon:Y_,MultiPoint:F_,MultiLineString:N_,MultiPolygon:Q_};function ov(e,t,n){return Array.isArray(t[0])?(G_(e,0,t,n)||(e=e.slice(),q_(e,0,t,n)),e):(W_(e,0,t,n)||(e=e.slice(),K_(e,0,t,n)),e)}function sv(e,t){let n=e.geometry;if(!n)return[];if(Array.isArray(n))return n.map(t=>sv({...e,geometry:t})).flat();let r=n.type===`MultiPolygon`?`Polygon`:n.type;if(r===`GeometryCollection`||r===`Circle`)throw Error(`Unsupported geometry type: `+r);let i=n.layout.length;return iv(new ev(r,r===`Polygon`?ov(n.flatCoordinates,n.ends,i):n.flatCoordinates,n.ends?.flat(),i,e.properties||{},e.id).enableSimplifyTransformed(),!1,t)}function cv(e,t){if(!e)return null;if(Array.isArray(e))return new tv(e.map(e=>cv(e,t)));let n=av[e.type];return iv(new n(e.flatCoordinates,e.layout||`XY`,e.ends),!1,t)}var lv=class extends rv{constructor(){super()}getType(){return`json`}readFeature(e,t){return this.readFeatureFromObject(uv(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(uv(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return W()}readFeaturesFromObject(e,t){return W()}readGeometry(e,t){return this.readGeometryFromObject(uv(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return W()}readProjection(e){return this.readProjectionFromObject(uv(e))}readProjectionFromObject(e){return W()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return W()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return W()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return W()}};function uv(e){return typeof e==`string`?JSON.parse(e)||null:e===null?null:e}var dv=class extends lv{constructor(e){e||={},super(),this.dataProjection=mp(e.dataProjection?e.dataProjection:`EPSG:4326`),e.featureProjection&&(this.defaultFeatureProjection=mp(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=[`application/geo+json`,`application/vnd.geo+json`]}readFeatureFromObject(e,t){let n=null;n=e.type===`Feature`?e:{type:`Feature`,geometry:e,properties:null};let r=fv(n.geometry,t);if(this.featureClass===ev)return sv({geometry:r,id:n.id,properties:n.properties},t);let i=this.featureClass,a=new i;return this.geometryName_?a.setGeometryName(this.geometryName_):this.extractGeometryName_&&n.geometry_name&&a.setGeometryName(n.geometry_name),a.setGeometry(cv(r,t)),`id`in n&&a.setId(n.id),n.properties&&a.setProperties(n.properties,!0),a}readFeaturesFromObject(e,t){let n=e,r=null;if(n.type===`FeatureCollection`){let n=e;r=[];let i=n.features;for(let e=0,n=i.length;e<n;++e){let n=this.readFeatureFromObject(i[e],t);n&&r.push(n)}}else r=[this.readFeatureFromObject(e,t)];return r.flat()}readGeometryFromObject(e,t){return pv(e,t)}readProjectionFromObject(e){let t=e.crs,n;if(t){if(t.type==`name`)n=mp(t.properties.name);else if(t.type===`EPSG`)n=mp(`EPSG:`+t.properties.code);else throw Error(`Unknown SRS type`)}else n=this.dataProjection;return n}writeFeatureObject(e,t){t=this.adaptOptions(t);let n={type:`Feature`,geometry:null,properties:null},r=e.getId();if(r!==void 0&&(n.id=r),!e.hasProperties())return n;let i=e.getProperties(),a=e.getGeometry();return a&&(n.geometry=xv(a,t),delete i[e.getGeometryName()]),wf(i)||(n.properties=i),n}writeFeaturesObject(e,t){t=this.adaptOptions(t);let n=[];for(let r=0,i=e.length;r<i;++r)n.push(this.writeFeatureObject(e[r],t));return{type:`FeatureCollection`,features:n}}writeGeometryObject(e,t){return xv(e,this.adaptOptions(t))}};function fv(e,t){if(!e)return null;let n;switch(e.type){case`Point`:n=hv(e);break;case`LineString`:n=gv(e);break;case`Polygon`:n=bv(e);break;case`MultiPoint`:n=vv(e);break;case`MultiLineString`:n=_v(e);break;case`MultiPolygon`:n=yv(e);break;case`GeometryCollection`:n=mv(e);break;default:throw Error(`Unsupported GeoJSON type: `+e.type)}return n}function pv(e,t){return cv(fv(e,t),t)}function mv(e,t){return e.geometries.map(function(e){return fv(e,t)})}function hv(e){let t=e.coordinates;return{type:`Point`,flatCoordinates:t,layout:xg(t.length)}}function gv(e){let t=e.coordinates,n=t.flat();return{type:`LineString`,flatCoordinates:n,ends:[n.length],layout:xg(t[0]?.length||2)}}function _v(e){let t=e.coordinates,n=t[0]?.[0]?.length||2,r=[];return{type:`MultiLineString`,flatCoordinates:r,ends:Eg(r,0,t,n),layout:xg(n)}}function vv(e){let t=e.coordinates;return{type:`MultiPoint`,flatCoordinates:t.flat(),layout:xg(t[0]?.length||2)}}function yv(e){let t=e.coordinates,n=[],r=t[0]?.[0]?.[0].length||2;return{type:`MultiPolygon`,flatCoordinates:n,ends:Dg(n,0,t,r),layout:xg(r)}}function bv(e){let t=e.coordinates,n=[],r=t[0]?.[0]?.length;return{type:`Polygon`,flatCoordinates:n,ends:Eg(n,0,t,r),layout:xg(r)}}function xv(e,t){e=iv(e,!0,t);let n=e.getType(),r;switch(n){case`Point`:r=Dv(e,t);break;case`LineString`:r=Cv(e,t);break;case`Polygon`:r=Ov(e,t);break;case`MultiPoint`:r=Tv(e,t);break;case`MultiLineString`:r=wv(e,t);break;case`MultiPolygon`:r=Ev(e,t);break;case`GeometryCollection`:r=Sv(e,t);break;case`Circle`:r={type:`GeometryCollection`,geometries:[]};break;default:throw Error(`Unsupported geometry type: `+n)}return r}function Sv(e,t){return t=Object.assign({},t),delete t.featureProjection,{type:`GeometryCollection`,geometries:e.getGeometriesArray().map(function(e){return xv(e,t)})}}function Cv(e,t){return{type:`LineString`,coordinates:e.getCoordinates()}}function wv(e,t){return{type:`MultiLineString`,coordinates:e.getCoordinates()}}function Tv(e,t){return{type:`MultiPoint`,coordinates:e.getCoordinates()}}function Ev(e,t){let n;return t&&(n=t.rightHanded),{type:`MultiPolygon`,coordinates:e.getCoordinates(n)}}function Dv(e,t){return{type:`Point`,coordinates:e.getCoordinates()}}function Ov(e,t){let n;return t&&(n=t.rightHanded),{type:`Polygon`,coordinates:e.getCoordinates(n)}}var kv=[`top-left`,`top-center`,`top-right`,`left`,`right`,`bottom-left`,`bottom-center`,`bottom-right`],Av={POSTRENDER:`postrender`,MOVESTART:`movestart`,MOVEEND:`moveend`,LOADSTART:`loadstart`,LOADEND:`loadend`},jv={ELEMENT:`element`,MAP:`map`,OFFSET:`offset`,POSITION:`position`,POSITIONING:`positioning`},Mv=class extends ih{constructor(e){super(),this.on,this.once,this.un,this.options=e,this.id=e.id,this.insertFirst=e.insertFirst===void 0||e.insertFirst,this.stopEvent=e.stopEvent===void 0||e.stopEvent,this.element=document.createElement(`div`),this.element.className=e.className===void 0?`ol-overlay-container `+oh:e.className,this.element.style.position=`absolute`,this.element.style.pointerEvents=`auto`,this.autoPan=e.autoPan===!0?{}:e.autoPan||void 0,this.rendered={transform_:``,visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(jv.ELEMENT,this.handleElementChanged),this.addChangeListener(jv.MAP,this.handleMapChanged),this.addChangeListener(jv.OFFSET,this.handleOffsetChanged),this.addChangeListener(jv.POSITION,this.handlePositionChanged),this.addChangeListener(jv.POSITIONING,this.handlePositioningChanged),e.element!==void 0&&this.setElement(e.element),this.setOffset(e.offset===void 0?[0,0]:e.offset),this.setPositioning(e.positioning||`top-left`),e.position!==void 0&&this.setPosition(e.position)}getElement(){return this.get(jv.ELEMENT)}getId(){return this.id}getMap(){return this.get(jv.MAP)||null}getOffset(){return this.get(jv.OFFSET)}getPosition(){return this.get(jv.POSITION)}getPositioning(){return this.get(jv.POSITIONING)}handleElementChanged(){Jp(this.element);let e=this.getElement();e&&this.element.appendChild(e)}handleMapChanged(){this.mapPostrenderListenerKey&&=(this.element?.remove(),wm(this.mapPostrenderListenerKey),null);let e=this.getMap();if(e){this.mapPostrenderListenerKey=Sm(e,Av.POSTRENDER,this.render,this),this.updatePixelPosition();let t=this.stopEvent?e.getOverlayContainerStopEvent():e.getOverlayContainer();this.insertFirst?t.insertBefore(this.element,t.childNodes[0]||null):t.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(e){this.set(jv.ELEMENT,e)}setMap(e){this.set(jv.MAP,e)}setOffset(e){this.set(jv.OFFSET,e)}setPosition(e){this.set(jv.POSITION,e)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(e){let t=this.getMap();if(!t||!t.getTargetElement()||!this.get(jv.POSITION))return;let n=this.getRect(t.getTargetElement(),t.getSize()),r=this.getElement(),i=this.getRect(r,[Gp(r),Kp(r)]);e||={};let a=e.margin===void 0?20:e.margin;if(!id(n,i)){let r=i[0]-n[0],o=n[2]-i[2],s=i[1]-n[1],c=n[3]-i[3],l=[0,0];if(r<0?l[0]=r-a:o<0&&(l[0]=Math.abs(o)+a),s<0?l[1]=s-a:c<0&&(l[1]=Math.abs(c)+a),l[0]!==0||l[1]!==0){let n=t.getView().getCenterInternal(),r=t.getPixelFromCoordinateInternal(n);if(!r)return;let i=[r[0]+l[0],r[1]+l[1]],a=e.animation||{};t.getView().animateInternal({center:t.getCoordinateFromPixelInternal(i),duration:a.duration,easing:a.easing})}}}getRect(e,t){let n=e.getBoundingClientRect(),r=n.left+window.pageXOffset,i=n.top+window.pageYOffset;return[r,i,r+t[0],i+t[1]]}setPositioning(e){this.set(jv.POSITIONING,e)}setVisible(e){this.rendered.visible!==e&&(this.element.style.display=e?``:`none`,this.rendered.visible=e)}updatePixelPosition(){let e=this.getMap(),t=this.getPosition();if(!e||!e.isRendered()||!t){this.setVisible(!1);return}let n=e.getPixelFromCoordinate(t),r=e.getSize();this.updateRenderedPosition(n,r)}updateRenderedPosition(e,t){let n=this.element.style,r=this.getOffset(),i=this.getPositioning();this.setVisible(!0);let a=`${e[0]+r[0]}px`,o=`${e[1]+r[1]}px`,s=`0%`,c=`0%`;i==`bottom-right`||i==`center-right`||i==`top-right`?s=`-100%`:(i==`bottom-center`||i==`center-center`||i==`top-center`)&&(s=`-50%`),i==`bottom-left`||i==`bottom-center`||i==`bottom-right`?c=`-100%`:(i==`center-left`||i==`center-center`||i==`center-right`)&&(c=`-50%`);let l=`translate(${s}, ${c}) translate(${a}, ${o})`;this.rendered.transform_!=l&&(this.rendered.transform_=l,n.transform=l)}getOptions(){return this.options}},Nv=new class{map=new Map;tokens=new Map;register(e,t,n,r){return this.map.set(e,{name:e,url:t,category:n,meta:r}),this}registerMany(e,t=``,n){return Object.entries(e).forEach(([e,r])=>{this.register(t?`${t}.${e}`:e,r,n)}),this}setToken(e,t){return this.tokens.set(e,t),this}getToken(e){return this.tokens.get(e)}resolve(e){let t=this.map.get(e);if(!t)return console.warn(`[GeoFlow] 静态资源未注册: ${e}`),e;let n=t.url;if(n.includes(`{tk}`)){let e=this.tokens.get(`tianditu`)||``;n=n.replace(`{tk}`,e)}return n}meta(e){return this.map.get(e)}list(e){return[...this.map.values()].filter(t=>!e||t.category===e)}};Nv.register(`basemap.osm`,`https://tile.openstreetmap.org/{z}/{x}/{y}.png`,`basemap`),Nv.register(`basemap.esri-imagery`,`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`,`basemap`);var Pv=(e,t=24)=>`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24">${e}</svg>`),Fv=(e,t=`!`)=>Pv(`<path d="M12 2.5 L22.5 21 L1.5 21 Z" fill="${e}" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><text x="12" y="18.5" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="PingFang SC, sans-serif">${t}</text>`);Nv.register(`icon.alarm`,Fv(`#ef4444`),`icon`),Nv.register(`icon.fault`,(e=>Pv(`<path d="M12 1.5 L22.5 12 L12 22.5 L1.5 12 Z" fill="${e}" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" fill="#fff"/>`))(`#f59e0b`),`icon`),Nv.register(`icon.warn`,Fv(`#f97316`),`icon`),Nv.register(`icon.ok`,(e=>Pv(`<circle cx="12" cy="12" r="10" fill="${e}" stroke="#fff" stroke-width="2.2"/><path d="M7.2 12.4 L10.4 15.6 L16.8 9.2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`))(`#22c55e`),`icon`),Nv.register(`icon.info`,(e=>Pv(`<rect x="2.6" y="2.6" width="18.8" height="18.8" rx="4" fill="${e}" stroke="#fff" stroke-width="2.2"/><text x="12" y="17" font-size="12" font-weight="700" fill="#fff" text-anchor="middle" font-family="PingFang SC, sans-serif">i</text>`))(`#3b82f6`),`icon`),Nv.register(`icon.sel`,(e=>Pv(`<path d="M12 1.8 L15 9.1 L22.8 9.6 L16.6 14.4 L18.6 22 L12 17.5 L5.4 22 L7.4 14.4 L1.2 9.6 L9 9.1 Z" fill="${e}" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/>`))(`#f43f5e`),`icon`);var Iv={ADD:`add`,REMOVE:`remove`},Lv={LENGTH:`length`},Rv=class extends zm{constructor(e,t,n){super(e),this.element=t,this.index=n}},zv=class extends ih{constructor(e,t){if(super(),this.on,this.once,this.un,t||={},this.unique_=!!t.unique,this.array_=e??[],this.unique_)for(let e=1,t=this.array_.length;e<t;++e)this.assertUnique_(this.array_[e],e);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){let t=this.array_;for(let n=0,r=t.length;n<r;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Lv.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw Error(`Index out of bounds: `+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new Rv(Iv.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){let t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){let t=this.array_;for(let n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;let t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Rv(Iv.REMOVE,t,e)),t}setAt(e,t){if(e>=this.getLength()){this.insertAt(e,t);return}if(e<0)throw Error(`Index out of bounds: `+e);this.unique_&&this.assertUnique_(t,e);let n=this.array_[e];this.array_[e]=t,this.dispatchEvent(new Rv(Iv.REMOVE,n,e)),this.dispatchEvent(new Rv(Iv.ADD,t,e))}updateLength_(){this.set(Lv.LENGTH,this.array_.length)}assertUnique_(e,t){let n=this.array_;for(let r=0,i=n.length;r<i;++r)if(n[r]===e&&r!==t)throw Error(`Duplicate item added to a unique collection`)}},Bv=class extends zm{constructor(e,t,n){super(e),this.map=t,this.frameState=n===void 0?null:n}},Vv=class extends Bv{constructor(e,t,n,r,i,a){super(e,t,i),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0&&r,this.activePointers=a}get pixel(){return this.pixel_||=this.map.getEventPixel(this.originalEvent),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||=this.map.getCoordinateFromPixel(this.pixel),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),`preventDefault`in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),`stopPropagation`in this.originalEvent&&this.originalEvent.stopPropagation()}},Hv={SINGLECLICK:`singleclick`,CLICK:U.CLICK,DBLCLICK:U.DBLCLICK,POINTERDRAG:`pointerdrag`,POINTERMOVE:`pointermove`,POINTERDOWN:`pointerdown`,POINTERUP:`pointerup`,POINTEROVER:`pointerover`,POINTEROUT:`pointerout`,POINTERENTER:`pointerenter`,POINTERLEAVE:`pointerleave`,POINTERCANCEL:`pointercancel`},Uv={POINTERMOVE:`pointermove`,POINTERDOWN:`pointerdown`,POINTERUP:`pointerup`,POINTEROVER:`pointerover`,POINTEROUT:`pointerout`,POINTERENTER:`pointerenter`,POINTERLEAVE:`pointerleave`,POINTERCANCEL:`pointercancel`},Wv=class extends Bm{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;let n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=Sm(n,Uv.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=Sm(n,Uv.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(U.TOUCHMOVE,this.boundHandleTouchMove_,Bp?{passive:!1}:!1)}emulateClick_(e){let t=new Vv(Hv.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_===void 0?this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let t=new Vv(Hv.SINGLECLICK,this.map_,e);this.dispatchEvent(t)},250):(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new Vv(Hv.DBLCLICK,this.map_,e),this.dispatchEvent(t))}updateActivePointers_(e){let t=e,n=t.pointerId;if(t.type==Hv.POINTERUP||t.type==Hv.POINTERCANCEL){delete this.trackedTouches_[n];for(let e in this.trackedTouches_)if(this.trackedTouches_[e].target!==t.target){delete this.trackedTouches_[e];break}}else(t.type==Hv.POINTERDOWN||t.type==Hv.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);let t=new Vv(Hv.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(wm),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);let t=new Vv(Hv.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){let e=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Sm(e,Hv.POINTERMOVE,this.handlePointerMove_,this),Sm(e,Hv.POINTERUP,this.handlePointerUp_,this),Sm(this.element_,Hv.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==e&&this.dragListenerKeys_.push(Sm(this.element_.getRootNode(),Hv.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;let t=new Vv(Hv.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;let t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Vv(Hv.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){let t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!=`boolean`||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&=(wm(this.relayedListenerKey_),null),this.element_.removeEventListener(U.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&=(wm(this.pointerdownListenerKey_),null),this.dragListenerKeys_.forEach(wm),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}},Gv={LAYERGROUP:`layergroup`,SIZE:`size`,TARGET:`target`,VIEW:`view`},G={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4},Kv=1/0,qv=class{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Cf(this.queuedElements_)}dequeue(){let e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));let r=this.keyFunction_(n);return delete this.queuedElements_[r],n}enqueue(e){Wh(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let t=this.priorityFunction_(e);return t!=1/0&&(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0)}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){let t=this.elements_,n=this.priorities_,r=t.length,i=t[e],a=n[e],o=e;for(;e<r>>1;){let i=this.getLeftChildIndex_(e),a=this.getRightChildIndex_(e),o=a<r&&n[a]<n[i]?a:i;t[e]=t[o],n[e]=n[o],e=o}t[e]=i,n[e]=a,this.siftDown_(o,e)}siftDown_(e,t){let n=this.elements_,r=this.priorities_,i=n[t],a=r[t];for(;t>e;){let e=this.getParentIndex_(t);if(r[e]>a)n[t]=n[e],r[t]=r[e],t=e;else break}n[t]=i,r[t]=a}reprioritize(){let e=this.priorityFunction_,t=this.elements_,n=this.priorities_,r=0,i=t.length,a,o,s;for(o=0;o<i;++o)a=t[o],s=e(a),s==1/0?delete this.queuedElements_[this.keyFunction_(a)]:(n[r]=s,t[r++]=a);t.length=r,n.length=r,this.heapify_()}},Jv=class extends qv{constructor(e,t){super(t=>e.apply(null,t),e=>e[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){let t=super.enqueue(e);return t&&e[0].addEventListener(U.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){let t=e.target,n=t.getState();if(n===G.LOADED||n===G.ERROR||n===G.EMPTY){n!==G.ERROR&&t.removeEventListener(U.CHANGE,this.boundHandleTileChange_);let e=t.getKey();e in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[e],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;){let e=this.dequeue()[0],t=e.getKey();e.getState()===G.IDLE&&!(t in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[t]=!0,++this.tilesLoading_,++n,e.load())}}};function Yv(e,t,n,r,i){if(!e||!(n in e.wantedTiles)||!e.wantedTiles[n][t.getKey()])return Kv;let a=e.viewState.center,o=r[0]-a[0],s=r[1]-a[1];return 65536*Math.log(i)+Math.sqrt(o*o+s*s)/i}var Xv={ANIMATING:0,INTERACTING:1},Zv={CENTER:`center`,RESOLUTION:`resolution`,ROTATION:`rotation`};function Qv(e,t,n){return(function(r,i,a,o,s){if(!r)return;if(!i&&!t)return r;let c=t?0:a[0]*i,l=t?0:a[1]*i,u=s?s[0]:0,d=s?s[1]:0,f=e[0]+c/2+u,p=e[2]-c/2+u,m=e[1]+l/2+d,h=e[3]-l/2+d;f>p&&(f=(p+f)/2,p=f),m>h&&(m=(h+m)/2,h=m);let g=Rd(r[0],f,p),_=Rd(r[1],m,h);if(o&&n&&i){let e=30*i;g+=-e*Math.log(1+Math.max(0,f-r[0])/e)+e*Math.log(1+Math.max(0,r[0]-p)/e),_+=-e*Math.log(1+Math.max(0,m-r[1])/e)+e*Math.log(1+Math.max(0,r[1]-h)/e)}return[g,_]})}function $v(e){return e}function ey(e){return e**3}function ty(e){return 1-ey(1-e)}function ny(e){return 3*e*e-2*e*e*e}function ry(e){return e}function iy(e,t,n,r){let i=Ad(t)/n[0],a=Td(t)/n[1];return r?Math.min(e,Math.max(i,a)):Math.min(e,Math.min(i,a))}function ay(e,t,n){let r=Math.min(e,t);return r*=Math.log(1+50*Math.max(0,e/t-1))/50+1,n&&(r=Math.max(r,n),r/=Math.log(1+50*Math.max(0,n/e-1))/50+1),Rd(r,n/2,t*2)}function oy(e,t,n,r){return t=t===void 0||t,(function(i,a,o,s){if(i!==void 0){let c=e[0],l=e[e.length-1],u=n?iy(c,n,o,r):c;if(s)return t?ay(i,u,l):Rd(i,l,u);let d=Math.floor(km(e,Math.min(u,i),a));return e[d]>u&&d<e.length-1?e[d+1]:e[d]}})}function sy(e,t,n,r,i,a){return r=r===void 0||r,n=n===void 0?0:n,(function(o,s,c,l){if(o!==void 0){let u=i?iy(t,i,c,a):t;if(l)return r?ay(o,u,n):Rd(o,n,u);let d=Math.ceil(Math.log(t/u)/Math.log(e)-1e-9),f=-s*.499999999+.5,p=Math.floor(Math.log(t/Math.min(u,o))/Math.log(e)+f);return Rd(t/e**+Math.max(d,p),n,u)}})}function cy(e,t,n,r,i){return n=n===void 0||n,(function(a,o,s,c){if(a!==void 0){let o=r?iy(e,r,s,i):e;return!n||!c?Rd(a,t,o):ay(a,o,t)}})}function ly(e){if(e!==void 0)return 0}function uy(e){if(e!==void 0)return e}function dy(e){let t=2*Math.PI/e;return(function(e,n){if(n)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e})}function fy(e){let t=e===void 0?Ud(5):e;return(function(e,n){return n||e===void 0?e:Math.abs(e)<=t?0:e})}var py=0,my=class extends ih{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=vp(e.projection,`EPSG:3857`),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&up(),e.center&&(e.center=kp(e.center,this.projection_)),e.extent&&(e.extent=jp(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){let t=Object.assign({},e);for(let e in Zv)delete t[e];this.setProperties(t,!0);let n=_y(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;let r=gy(e),i=n.constraint,a=vy(e);this.constraints_={center:r,resolution:i,rotation:a},this.setRotation(e.rotation===void 0?0:e.rotation),this.setCenterInternal(e.center===void 0?null:e.center),e.resolution===void 0?e.zoom!==void 0&&this.setZoom(e.zoom):this.setResolution(e.resolution)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;let n=this.getCenterInternal();if(n){let r=e||[0,0,0,0];t||=[0,0,0,0];let i=this.getResolution(),a=i/2*(r[3]-t[3]+t[1]-r[1]),o=i/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([n[0]+a,n[1]-o])}}getUpdatedOptions_(e){let t=this.getProperties();return t.resolution===void 0?t.zoom=this.getZoom():t.resolution=this.getResolution(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let t=Array(arguments.length);for(let e=0;e<t.length;++e){let n=arguments[e];n.center&&(n=Object.assign({},n),n.center=kp(n.center,this.getProjection())),n.anchor&&(n=Object.assign({},n),n.anchor=kp(n.anchor,this.getProjection())),t[e]=n}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]==`function`&&(n=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){let e=arguments[r];e.center&&this.setCenterInternal(e.center),e.zoom===void 0?e.resolution&&this.setResolution(e.resolution):this.setZoom(e.zoom),e.rotation!==void 0&&this.setRotation(e.rotation)}if(r===t){n&&hy(n,!0);return}let i=Date.now(),a=this.targetCenter_.slice(),o=this.targetResolution_,s=this.targetRotation_,c=[];for(;r<t;++r){let e=arguments[r],t={start:i,complete:!1,anchor:e.anchor,duration:e.duration===void 0?1e3:e.duration,easing:e.easing||ny,callback:n};if(e.center&&(t.sourceCenter=a,t.targetCenter=e.center.slice(),a=t.targetCenter),e.zoom===void 0?e.resolution&&(t.sourceResolution=o,t.targetResolution=e.resolution,o=t.targetResolution):(t.sourceResolution=o,t.targetResolution=this.getResolutionForZoom(e.zoom),o=t.targetResolution),e.rotation!==void 0){t.sourceRotation=s;let n=Wd(e.rotation-s+Math.PI,2*Math.PI)-Math.PI;t.targetRotation=s+n,s=t.targetRotation}yy(t)?t.complete=!0:i+=t.duration,c.push(t)}this.animations_.push(c),this.setHint(Xv.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Xv.ANIMATING]>0}getInteracting(){return this.hints_[Xv.INTERACTING]>0}cancelAnimations(){this.setHint(Xv.ANIMATING,-this.hints_[Xv.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){let n=this.animations_[t];if(n[0].callback&&hy(n[0].callback,!1),!e)for(let t=0,r=n.length;t<r;++t){let r=n[t];if(!r.complete){e=r.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let e=Date.now(),t=!1;for(let n=this.animations_.length-1;n>=0;--n){let r=this.animations_[n],i=!0;for(let n=0,a=r.length;n<a;++n){let a=r[n];if(a.complete)continue;let o=e-a.start,s=a.duration>0?o/a.duration:1;s>=1?(a.complete=!0,s=1):i=!1;let c=a.easing(s);if(a.sourceCenter){let e=a.sourceCenter[0],t=a.sourceCenter[1],n=a.targetCenter[0],r=a.targetCenter[1];this.nextCenter_=a.targetCenter;let i=e+c*(n-e),o=t+c*(r-t);this.targetCenter_=[i,o]}if(a.sourceResolution&&a.targetResolution){let e=c===1?a.targetResolution:a.sourceResolution+c*(a.targetResolution-a.sourceResolution);if(a.anchor){let t=this.getViewportSize_(this.getRotation()),n=this.constraints_.resolution(e,0,t,!0);this.targetCenter_=this.calculateCenterZoom(n,a.anchor)}this.nextResolution_=a.targetResolution,this.targetResolution_=e,this.applyTargetState_(!0)}if(a.sourceRotation!==void 0&&a.targetRotation!==void 0){let e=c===1?Wd(a.targetRotation+Math.PI,2*Math.PI)-Math.PI:a.sourceRotation+c*(a.targetRotation-a.sourceRotation);if(a.anchor){let t=this.constraints_.rotation(e,!0);this.targetCenter_=this.calculateCenterRotate(t,a.anchor)}this.nextRotation_=a.targetRotation,this.targetRotation_=e}if(this.applyTargetState_(!0),t=!0,!a.complete)break}if(i){this.animations_[n]=null,this.setHint(Xv.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let e=r[0].callback;e&&hy(e,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n,r=this.getCenterInternal();return r!==void 0&&(n=[r[0]-t[0],r[1]-t[1]],Qd(n,e-this.getRotation()),Xd(n,t)),n}calculateCenterZoom(e,t){let n,r=this.getCenterInternal(),i=this.getResolution();return r!==void 0&&i!==void 0&&(n=[t[0]-e*(t[0]-r[0])/i,t[1]-e*(t[1]-r[1])/i]),n}getViewportSize_(e){let t=this.viewportSize_;if(e){let n=t[0],r=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(r*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let e=this.getCenterInternal();return e&&Op(e,this.getProjection())}getCenterInternal(){return this.get(Zv.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get(`constrainResolution`)}getHints(e){return e===void 0?this.hints_.slice():(e[0]=this.hints_[0],e[1]=this.hints_[1],e)}calculateExtent(e){return Ap(this.calculateExtentInternal(e),this.getProjection())}calculateExtentInternal(e){e||=this.getViewportSizeMinusPadding_();let t=this.getCenterInternal();Wh(t,`The view center is not defined`);let n=this.getResolution();Wh(n!==void 0,`The view resolution is not defined`);let r=this.getRotation();return Wh(r!==void 0,`The view rotation is not defined`),Cd(t,n,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(Zv.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(jp(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t||=this.getViewportSizeMinusPadding_();let n=Ad(e)/t[0],r=Td(e)/t[1];return Math.max(n,r)}getResolutionForValueFunction(e){e||=2;let t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,r=Math.log(t/n)/Math.log(e);return(function(n){return t/e**+(n*r)})}getRotation(){return this.get(Zv.ROTATION)}getValueForResolutionFunction(e){let t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,i=Math.log(n/r)/t;return(function(e){return Math.log(n/e)/t/i})}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e),n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){let e=this.getProjection(),t=this.getResolution(),n=this.getRotation(),r=this.getCenterInternal(),i=this.padding_;if(i){let e=this.getViewportSizeMinusPadding_();r=by(r,this.getViewportSize_(),[e[0]/2+i[3],e[1]/2+i[0]],t,n)}return{center:r.slice(0),projection:e===void 0?null:e,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e,t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,r;if(this.resolutions_){let i=km(this.resolutions_,e,1);t=i,n=this.resolutions_[i],r=i==this.resolutions_.length-1?2:n/this.resolutions_[i+1]}else n=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(n/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_?.length){if(this.resolutions_.length===1)return this.resolutions_[0];let t=Rd(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/n**+Rd(e-t,0,1)}return this.maxResolution_/this.zoomFactor_**+(e-this.minZoom_)}fit(e,t){let n;if(Wh(Array.isArray(e)||typeof e.getSimplifiedGeometry==`function`,"Invalid extent or geometry provided as `geometry`"),Array.isArray(e))Wh(!Md(e),"Cannot fit empty extent provided as `geometry`"),n=X_(jp(e,this.getProjection()));else if(e.getType()===`Circle`){let t=jp(e.getExtent(),this.getProjection());n=X_(t),n.rotate(this.getRotation(),xd(t))}else{let t=Dp();n=t?e.clone().transform(t,this.getProjection()):e}this.fitInternal(n,t)}rotatedExtentForGeometry(e){let t=this.getRotation(),n=Math.cos(t),r=Math.sin(-t),i=e.getFlatCoordinates(),a=e.getStride(),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e=0,t=i.length;e<t;e+=a){let t=i[e]*n-i[e+1]*r,a=i[e]*r+i[e+1]*n;o=Math.min(o,t),s=Math.min(s,a),c=Math.max(c,t),l=Math.max(l,a)}return[o,s,c,l]}fitInternal(e,t){t||={};let n=t.size;n||=this.getViewportSizeMinusPadding_();let r=t.padding===void 0?[0,0,0,0]:t.padding,i=t.nearest!==void 0&&t.nearest,a;a=t.minResolution===void 0?t.maxZoom===void 0?0:this.getResolutionForZoom(t.maxZoom):t.minResolution;let o=this.rotatedExtentForGeometry(e),s=this.getResolutionForExtentInternal(o,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);s=isNaN(s)?a:Math.max(s,a),s=this.getConstrainedResolution(s,+!i);let c=this.getRotation(),l=Math.sin(c),u=Math.cos(c),d=xd(o);d[0]+=(r[1]-r[3])/2*s,d[1]+=(r[0]-r[2])/2*s;let f=d[0]*u-d[1]*l,p=d[1]*u+d[0]*l,m=this.getConstrainedCenter([f,p],s),h=t.callback?t.callback:Im;t.duration===void 0?(this.targetResolution_=s,this.targetCenter_=m,this.applyTargetState_(!1,!0),hy(h,!0)):this.animateInternal({resolution:s,center:m,duration:t.duration,easing:t.easing},h)}centerOn(e,t,n){this.centerOnInternal(kp(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal(by(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,r){let i,a=this.padding_;if(a&&e){let o=this.getViewportSizeMinusPadding_(-n),s=by(e,r,[o[0]/2+a[3],o[1]/2+a[0]],t,n);i=[e[0]-s[0],e[1]-s[1]]}return i}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){let t=Op(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){let t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t&&=kp(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){let n=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),i=this.constraints_.resolution(this.targetResolution_*e,0,r,n);t&&(this.targetCenter_=this.calculateCenterZoom(i,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(this.zoomFactor_**+-e,t)}adjustRotation(e,t){t&&=kp(t,this.getProjection()),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){let n=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&kp(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){let n=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,n),i=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,0,i,n),o=this.constraints_.center(this.targetCenter_,a,i,n,this.calculateCenterShift(this.targetCenter_,a,r,i));this.get(Zv.ROTATION)!==r&&this.set(Zv.ROTATION,r),this.get(Zv.RESOLUTION)!==a&&(this.set(Zv.RESOLUTION,a),this.set(`zoom`,this.getZoom(),!0)),(!o||!this.get(Zv.CENTER)||!Zd(this.get(Zv.CENTER),o))&&this.set(Zv.CENTER,o),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e===void 0?200:e;let r=t||0,i=this.constraints_.rotation(this.targetRotation_),a=this.getViewportSize_(i),o=this.constraints_.resolution(this.targetResolution_,r,a),s=this.constraints_.center(this.targetCenter_,o,a,!1,this.calculateCenterShift(this.targetCenter_,o,i,a));if(e===0&&!this.cancelAnchor_){this.targetResolution_=o,this.targetRotation_=i,this.targetCenter_=s,this.applyTargetState_();return}n||=e===0?this.cancelAnchor_:void 0,this.cancelAnchor_=void 0,(this.getResolution()!==o||this.getRotation()!==i||!this.getCenterInternal()||!Zd(this.getCenterInternal(),s))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:i,center:s,resolution:o,duration:e,easing:ty,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Xv.INTERACTING,1)}endInteraction(e,t,n){n&&=kp(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.getInteracting()&&(this.setHint(Xv.INTERACTING,-1),this.resolveConstraints(e,t,n))}getConstrainedCenter(e,t){let n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){let n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t||=0;let n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}};function hy(e,t){setTimeout(function(){e(t)},0)}function gy(e){if(e.extent!==void 0){let t=e.smoothExtentConstraint===void 0||e.smoothExtentConstraint;return Qv(e.extent,e.constrainOnlyCenter,t)}let t=vp(e.projection,`EPSG:3857`);if(e.multiWorld!==!0&&t.isGlobal()){let e=t.getExtent().slice();return e[0]=-1/0,e[2]=1/0,Qv(e,!1,!1)}return $v}function _y(e){let t,n,r,i=e.minZoom===void 0?py:e.minZoom,a=e.maxZoom===void 0?28:e.maxZoom,o=e.zoomFactor===void 0?2:e.zoomFactor,s=e.multiWorld!==void 0&&e.multiWorld,c=e.smoothResolutionConstraint===void 0||e.smoothResolutionConstraint,l=e.showFullExtent!==void 0&&e.showFullExtent,u=vp(e.projection,`EPSG:3857`),d=u.getExtent(),f=e.constrainOnlyCenter,p=e.extent;if(!s&&!p&&u.isGlobal()&&(f=!1,p=d),e.resolutions!==void 0){let o=e.resolutions;n=o[i],r=o[a]===void 0?o[o.length-1]:o[a],t=e.constrainResolution?oy(o,c,!f&&p,l):cy(n,r,c,!f&&p,l)}else{let s=(d?Math.max(Ad(d),Td(d)):360*rf.degrees/u.getMetersPerUnit())/256/2**py,m=s/2**28;n=e.maxResolution,n===void 0?n=s/o**+i:i=0,r=e.minResolution,r===void 0&&(r=e.maxZoom===void 0?m:e.maxResolution===void 0?s/o**+a:n/o**+a),a=i+Math.floor(Math.log(n/r)/Math.log(o)),r=n/o**+(a-i),t=e.constrainResolution?sy(o,n,r,c,!f&&p,l):cy(n,r,c,!f&&p,l)}return{constraint:t,maxResolution:n,minResolution:r,minZoom:i,zoomFactor:o}}function vy(e){if(e.enableRotation===void 0||e.enableRotation){let t=e.constrainRotation;return t===void 0||t===!0?fy():t===!1?uy:typeof t==`number`?dy(t):uy}return ly}function yy(e){return!(e.sourceCenter&&e.targetCenter&&!Zd(e.sourceCenter,e.targetCenter)||e.sourceResolution!==e.targetResolution||e.sourceRotation!==e.targetRotation)}function by(e,t,n,r,i){let a=Math.cos(-i),o=Math.sin(-i),s=e[0]*a-e[1]*o,c=e[1]*a+e[0]*o;return s+=(t[0]/2-n[0])*r,c+=(n[1]-t[1]/2)*r,o=-o,[s*a-c*o,c*a+s*o]}var xy=class extends ih{constructor(e){super();let t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents=`auto`),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&this.element?.remove();for(let e=0,t=this.listenerKeys.length;e<t;++e)wm(this.listenerKeys[e]);if(this.listenerKeys.length=0,this.map_=e,e){let t=this.target_??e.getOverlayContainerStopEvent();this.element&&t.appendChild(this.element),this.render!==Im&&this.listenerKeys.push(Sm(e,Av.POSTRENDER,this.render,this)),e.render()}}render(e){}setTarget(e){this.target_=typeof e==`string`?document.getElementById(e):e}},Sy=class extends xy{constructor(e){e||={},super({element:document.createElement(`div`),render:e.render,target:e.target}),this.ulElement_=document.createElement(`ul`),this.collapsed_=e.collapsed===void 0||e.collapsed,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible===void 0||e.collapsible,this.collapsible_||(this.collapsed_=!1),this.attributions_=e.attributions;let t=e.className===void 0?`ol-attribution`:e.className,n=e.tipLabel===void 0?`Attributions`:e.tipLabel,r=e.expandClassName===void 0?t+`-expand`:e.expandClassName,i=e.collapseLabel===void 0?`›`:e.collapseLabel,a=e.collapseClassName===void 0?t+`-collapse`:e.collapseClassName;typeof i==`string`?(this.collapseLabel_=document.createElement(`span`),this.collapseLabel_.textContent=i,this.collapseLabel_.className=a):this.collapseLabel_=i;let o=e.label===void 0?`i`:e.label;typeof o==`string`?(this.label_=document.createElement(`span`),this.label_.textContent=o,this.label_.className=r):this.label_=o;let s=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement(`button`),this.toggleButton_.setAttribute(`type`,`button`),this.toggleButton_.setAttribute(`aria-expanded`,String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(s),this.toggleButton_.addEventListener(U.CLICK,this.handleClick_.bind(this),!1);let c=t+` `+sh+` `+ch+(this.collapsed_&&this.collapsible_?` `+lh:``)+(this.collapsible_?``:` ol-uncollapsible`),l=this.element;l.className=c,l.appendChild(this.toggleButton_),l.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){let t=this.getMap().getAllLayers(),n=new Set(t.flatMap(t=>t.getAttributions(e)));if(this.attributions_!==void 0&&(Array.isArray(this.attributions_)?this.attributions_.forEach(e=>n.add(e)):n.add(this.attributions_)),!this.overrideCollapsible_){let e=!t.some(e=>e.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(e)}return Array.from(n)}async updateElement_(e){if(!e){this.renderedVisible_&&=(this.element.style.display=`none`,!1);return}let t=await Promise.all(this.collectSourceAttributions_(e).map(e=>Rm(()=>e))),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?``:`none`,this.renderedVisible_=n),!Mm(t,this.renderedAttributions_)){Jp(this.ulElement_);for(let e=0,n=t.length;e<n;++e){let n=document.createElement(`li`);n.innerHTML=t[e],this.ulElement_.appendChild(n)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(lh),this.collapsed_?qp(this.collapseLabel_,this.label_):qp(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute(`aria-expanded`,String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle(`ol-uncollapsible`),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,this.collapsible_&&this.collapsed_!==e&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}},Cy=class extends xy{constructor(e){e||={},super({element:document.createElement(`div`),render:e.render,target:e.target});let t=e.className===void 0?`ol-rotate`:e.className,n=e.label===void 0?`⇧`:e.label,r=e.compassClassName===void 0?`ol-compass`:e.compassClassName;this.label_=null,typeof n==`string`?(this.label_=document.createElement(`span`),this.label_.className=r,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(r));let i=e.tipLabel?e.tipLabel:`Reset rotation`,a=document.createElement(`button`);a.className=t+`-reset`,a.setAttribute(`type`,`button`),a.title=i,a.appendChild(this.label_),a.addEventListener(U.CLICK,this.handleClick_.bind(this),!1);let o=t+` `+sh+` `+ch,s=this.element;s.className=o,s.appendChild(a),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration===void 0?250:e.duration,this.autoHide_=e.autoHide===void 0||e.autoHide,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(ah)}handleClick_(e){e.preventDefault(),this.callResetNorth_===void 0?this.resetNorth_():this.callResetNorth_()}resetNorth_(){let e=this.getMap().getView();if(!e)return;let t=e.getRotation();t!==void 0&&(this.duration_>0&&t%(2*Math.PI)!=0?e.animate({rotation:0,duration:this.duration_,easing:ty}):e.setRotation(0))}render(e){let t=e.frameState;if(!t)return;let n=t.viewState.rotation;if(n!=this.rotation_){let e=`rotate(`+n+`rad)`;if(this.autoHide_){let e=this.element.classList.contains(ah);!e&&n===0?this.element.classList.add(ah):e&&n!==0&&this.element.classList.remove(ah)}this.label_.style.transform=e}this.rotation_=n}},wy=class extends xy{constructor(e){e||={},super({element:document.createElement(`div`),target:e.target});let t=e.className===void 0?`ol-zoom`:e.className,n=e.delta===void 0?1:e.delta,r=e.zoomInClassName===void 0?t+`-in`:e.zoomInClassName,i=e.zoomOutClassName===void 0?t+`-out`:e.zoomOutClassName,a=e.zoomInLabel===void 0?`+`:e.zoomInLabel,o=e.zoomOutLabel===void 0?`–`:e.zoomOutLabel,s=e.zoomInTipLabel===void 0?`Zoom in`:e.zoomInTipLabel,c=e.zoomOutTipLabel===void 0?`Zoom out`:e.zoomOutTipLabel,l=document.createElement(`button`);l.className=r,l.setAttribute(`type`,`button`),l.title=s,l.appendChild(typeof a==`string`?document.createTextNode(a):a),l.addEventListener(U.CLICK,this.handleClick_.bind(this,n),!1);let u=document.createElement(`button`);u.className=i,u.setAttribute(`type`,`button`),u.title=c,u.appendChild(typeof o==`string`?document.createTextNode(o):o),u.addEventListener(U.CLICK,this.handleClick_.bind(this,-n),!1);let d=t+` `+sh+` `+ch,f=this.element;f.className=d,f.appendChild(l),f.appendChild(u),this.duration_=e.duration===void 0?250:e.duration}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){let t=this.getMap().getView();if(!t)return;let n=t.getZoom();if(n!==void 0){let r=t.getConstrainedZoom(n+e);this.duration_>0?(t.getAnimating()&&t.cancelAnimations(),t.animate({zoom:r,duration:this.duration_,easing:ty})):t.setZoom(r)}}};function Ty(e){e||={};let t=new zv;return(e.zoom===void 0||e.zoom)&&t.push(new wy(e.zoomOptions)),(e.rotate===void 0||e.rotate)&&t.push(new Cy(e.rotateOptions)),(e.attribution===void 0||e.attribution)&&t.push(new Sy(e.attributionOptions)),t}var Ey=class{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;let e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;let r=this.points_[t+2]-this.points_[n+2];if(r<1e3/60)return!1;let i=this.points_[t]-this.points_[n],a=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(a,i),this.initialVelocity_=Math.sqrt(i*i+a*a)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},Dy={ACTIVE:`active`},Oy=class extends ih{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Dy.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(Dy.ACTIVE,e)}setMap(e){this.map_=e}};function ky(e,t,n){let r=e.getCenterInternal();if(r){let i=[r[0]+t[0],r[1]+t[1]];e.animateInternal({duration:n===void 0?250:n,easing:ry,center:e.getConstrainedCenter(i)})}}function Ay(e,t,n,r){let i=e.getZoom();if(i===void 0)return;let a=e.getConstrainedZoom(i+t),o=e.getResolutionForZoom(a);e.getAnimating()&&e.cancelAnimations(),e.animate({resolution:o,anchor:n,duration:r===void 0?250:r,easing:ty})}var jy=class extends Oy{constructor(e){super(),e||={},this.delta_=e.delta?e.delta:1,this.duration_=e.duration===void 0?250:e.duration}handleEvent(e){let t=!1;if(e.type==Hv.DBLCLICK){let n=e.originalEvent,r=e.map,i=e.coordinate,a=n.shiftKey?-this.delta_:this.delta_;Ay(r.getView(),a,i,this.duration_),n.preventDefault(),t=!0}return!t}};function My(e){let t=arguments;return function(e){let n=!0;for(let r=0,i=t.length;r<i&&(n&&=t[r](e),n);++r);return n}}var Ny=function(e){let t=e.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},Py=function(e){let t=e.map.getTargetElement(),n=t.getRootNode(),r=e.map.getOwnerDocument().activeElement;return n instanceof ShadowRoot?n.host.contains(r):t.contains(r)},Fy=function(e){let t=e.map.getTargetElement(),n=t.getRootNode();return!(n instanceof ShadowRoot?n.host:t).hasAttribute(`tabindex`)||Py(e)},Iy=Pm,Ly=function(e){let t=e.originalEvent;return`pointerId`in t&&t.button==0&&!(Fp&&Ip&&t.ctrlKey)},Ry=function(e){let t=e.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},zy=function(e){let t=e.originalEvent;return Ip?t.metaKey:t.ctrlKey},By=function(e){let t=e.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},Vy=function(e){let t=e.originalEvent,n=t.target.tagName;return n!==`INPUT`&&n!==`SELECT`&&n!==`TEXTAREA`&&!t.target.isContentEditable},Hy=function(e){let t=e.originalEvent;return`pointerId`in t&&t.pointerType==`mouse`},Uy=function(e){let t=e.originalEvent;return`pointerId`in t&&t.isPrimary&&t.button===0},Wy=class extends Oy{constructor(e){e||={},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==Hv.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==Hv.POINTERUP){let t=this.handleUpEvent(e);this.handlingDownUpSequence=t&&this.targetPointers.length>0}}else if(e.type==Hv.POINTERDOWN){let n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==Hv.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}};function Gy(e){let t=e.length,n=0,r=0;for(let i=0;i<t;i++)n+=e[i].clientX,r+=e[i].clientY;return{clientX:n/t,clientY:r/t}}var Ky=class extends Wy{constructor(e){super({stopDown:Fm}),e||={},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;let t=e.condition?e.condition:My(Ry,Uy);this.condition_=e.onFocusOnly?My(Fy,t):t,this.noKinetic_=!1}handleDragEvent(e){let t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());let n=this.targetPointers,r=t.getEventPixel(Gy(n));if(n.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){let t=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],n=e.map.getView();$d(t,n.getResolution()),Qd(t,n.getRotation()),n.adjustCenterInternal(t)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=n.length,e.originalEvent.preventDefault()}handleUpEvent(e){let t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let e=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),i=n.getCenterInternal(),a=t.getPixelFromCoordinateInternal(i),o=t.getCoordinateFromPixelInternal([a[0]-e*Math.cos(r),a[1]-e*Math.sin(r)]);n.animateInternal({center:n.getConstrainedCenter(o),duration:500,easing:ty})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){let t=e.map.getView();return this.lastCentroid=null,t.getAnimating()&&t.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}},qy=class extends Wy{constructor(e){e||={},super({stopDown:Fm}),this.condition_=e.condition?e.condition:Ny,this.lastAngle_=void 0,this.duration_=e.duration===void 0?250:e.duration}handleDragEvent(e){if(!Hy(e))return;let t=e.map,n=t.getView();if(n.getConstraints().rotation===ly)return;let r=t.getSize(),i=e.pixel,a=Math.atan2(r[1]/2-i[1],i[0]-r[0]/2);if(this.lastAngle_!==void 0){let e=a-this.lastAngle_;n.adjustRotationInternal(-e)}this.lastAngle_=a}handleUpEvent(e){return!Hy(e)||(e.map.getView().endInteraction(this.duration_),!1)}handleDownEvent(e){return Hy(e)&&Ly(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}},Jy=class extends Tm{constructor(e){super(),this.geometry_=null,this.element_=document.createElement(`div`),this.element_.style.position=`absolute`,this.element_.style.pointerEvents=`auto`,this.element_.className=`ol-box `+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let e=this.startPixel_,t=this.endPixel_,n=this.element_.style;n.left=Math.min(e[0],t[0])+`px`,n.top=Math.min(e[1],t[1])+`px`,n.width=Math.abs(t[0]-e[0])+`px`,n.height=Math.abs(t[1]-e[1])+`px`}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let e=this.element_.style;e.left=`inherit`,e.top=`inherit`,e.width=`inherit`,e.height=`inherit`}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let e=this.startPixel_,t=this.endPixel_,n=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);n[4]=n[0].slice(),this.geometry_?this.geometry_.setCoordinates([n]):this.geometry_=new Y_([n])}getGeometry(){return this.geometry_}},Yy={BOXSTART:`boxstart`,BOXDRAG:`boxdrag`,BOXEND:`boxend`,BOXCANCEL:`boxcancel`},Xy=class extends zm{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}},Zy=class extends Wy{constructor(e){super(),this.on,this.once,this.un,e??={},this.box_=new Jy(e.className||`ol-dragbox`),this.minArea_=e.minArea??64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition??Ly,this.boxEndCondition_=e.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){let r=n[0]-t[0],i=n[1]-t[1];return r*r+i*i>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.startPixel_&&(this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new Xy(Yy.BOXDRAG,e.coordinate,e)))}handleUpEvent(e){if(!this.startPixel_)return!1;let t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new Xy(t?Yy.BOXEND:Yy.BOXCANCEL,e.coordinate,e)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Xy(Yy.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}setActive(e){e||(this.box_.setMap(null),this.startPixel_&&=(this.dispatchEvent(new Xy(Yy.BOXCANCEL,this.startPixel_,null)),null)),super.setActive(e)}setMap(e){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&=(this.dispatchEvent(new Xy(Yy.BOXCANCEL,this.startPixel_,null)),null)),super.setMap(e)}},Qy=class extends Zy{constructor(e){e||={};let t=e.condition?e.condition:By;super({condition:t,className:e.className||`ol-dragzoom`,minArea:e.minArea}),this.duration_=e.duration===void 0?200:e.duration,this.out_=e.out!==void 0&&e.out}onBoxEnd(e){let t=this.getMap().getView(),n=this.getGeometry();if(this.out_){let e=t.rotatedExtentForGeometry(n),r=t.getResolutionForExtentInternal(e),i=t.getResolution()/r;n=n.clone(),n.scale(i*i)}t.fitInternal(n,{duration:this.duration_,easing:ty})}},$y={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,DOWN:`ArrowDown`},eb=class extends Oy{constructor(e){super(),e||={},this.defaultCondition_=function(e){return Ry(e)&&Vy(e)},this.condition_=e.condition===void 0?this.defaultCondition_:e.condition,this.duration_=e.duration===void 0?100:e.duration,this.pixelDelta_=e.pixelDelta===void 0?128:e.pixelDelta}handleEvent(e){let t=!1;if(e.type==U.KEYDOWN){let n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==$y.DOWN||r==$y.LEFT||r==$y.RIGHT||r==$y.UP)){let i=e.map.getView(),a=i.getResolution()*this.pixelDelta_,o=0,s=0;r==$y.DOWN?s=-a:r==$y.LEFT?o=-a:r==$y.RIGHT?o=a:s=a;let c=[o,s];Qd(c,i.getRotation()),ky(i,c,this.duration_),n.preventDefault(),t=!0}}return!t}},tb=class extends Oy{constructor(e){super(),e||={},this.condition_=e.condition?e.condition:function(e){return!zy(e)&&Vy(e)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration===void 0?100:e.duration}handleEvent(e){let t=!1;if(e.type==U.KEYDOWN||e.type==U.KEYPRESS){let n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r===`+`||r===`-`)){let i=e.map,a=r===`+`?this.delta_:-this.delta_;Ay(i.getView(),a,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}},nb=40,rb=300,ib=3,ab=class extends Oy{constructor(e){e||={},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta===void 0?1:e.maxDelta,this.duration_=e.duration===void 0?250:e.duration,this.timeout_=e.timeout===void 0?80:e.timeout,this.useAnchor_=e.useAnchor===void 0||e.useAnchor,this.constrainResolution_=e.constrainResolution!==void 0&&e.constrainResolution;let t=e.condition?e.condition:Iy;this.condition_=e.onFocusOnly?My(Fy,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(e){if(this.ctrlKeyListenerKeys_.forEach(wm),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(e),e){let t=e.getOwnerDocument();this.ctrlKeyListenerKeys_.push(Sm(t,`keydown`,e=>{e.key===`Control`&&(this.ctrlKeyPressed_=!0)}),Sm(t,`keyup`,e=>{e.key===`Control`&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let e=this.getMap();if(!e)return;let t=e.getView(),n=this.lastDelta_?this.lastDelta_>0?1:-1:0;t.endInteraction(this.constrainResolution_||t.getConstrainResolution()?100:void 0,n,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(e){if(!this.condition_(e)||e.type!==U.WHEEL)return!0;let t=e.map,n=e.originalEvent;n.preventDefault();let r=n.ctrlKey&&!this.ctrlKeyPressed_;n.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=e.pixel);let i=n.deltaY;switch(n.deltaMode){case WheelEvent.DOM_DELTA_LINE:i*=nb;break;case WheelEvent.DOM_DELTA_PAGE:i*=rb}if(i===0)return!1;this.lastDelta_=i;let a=Date.now();this.startTime_===void 0&&(this.startTime_=a),(!this.mode_||a-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(i)<4?`trackpad`:`wheel`);let o=t.getView();if(this.mode_===`trackpad`)return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(o.getAnimating()&&o.cancelAnimations(),o.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),r&&(i*=ib),o.adjustZoom(-i/this.deltaPerZoom_,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=a,!1;this.totalDelta_+=i;let s=Math.max(this.timeout_-(a-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,t),s),!1}handleWheelZoom_(e){let t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-Rd(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),Ay(t,n,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}},ob=class extends Wy{constructor(e){e||={};let t=e;t.stopDown||=Fm,super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold===void 0?.3:e.threshold,this.duration_=e.duration===void 0?250:e.duration}handleDragEvent(e){let t=0,n=this.targetPointers[0],r=this.targetPointers[1],i=Math.atan2(r.clientY-n.clientY,r.clientX-n.clientX);if(this.lastAngle_!==void 0){let e=i-this.lastAngle_;this.rotationDelta_+=e,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=e}this.lastAngle_=i;let a=e.map,o=a.getView();o.getConstraints().rotation!==ly&&(this.anchor_=a.getCoordinateFromPixelInternal(a.getEventPixel(Gy(this.targetPointers))),this.rotating_&&(a.render(),o.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}},sb=class extends Wy{constructor(e){e||={};let t=e;t.stopDown||=Fm,super(t),this.anchor_=null,this.duration_=e.duration===void 0?400:e.duration,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1,n=this.targetPointers[0],r=this.targetPointers[1],i=n.clientX-r.clientX,a=n.clientY-r.clientY,o=Math.sqrt(i*i+a*a);this.lastDistance_!==void 0&&(t=this.lastDistance_/o),this.lastDistance_=o;let s=e.map,c=s.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=s.getCoordinateFromPixelInternal(s.getEventPixel(Gy(this.targetPointers))),s.render(),c.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){let t=e.map.getView(),n=this.lastScaleDelta_>1?1:-1;return t.endInteraction(this.duration_,n),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){let t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}};function cb(e){e||={};let t=new zv,n=new Ey(-.005,.05,100);return(e.altShiftDragRotate===void 0||e.altShiftDragRotate)&&t.push(new qy),(e.doubleClickZoom===void 0||e.doubleClickZoom)&&t.push(new jy({delta:e.zoomDelta,duration:e.zoomDuration})),(e.dragPan===void 0||e.dragPan)&&t.push(new Ky({onFocusOnly:e.onFocusOnly,kinetic:n})),(e.pinchRotate===void 0||e.pinchRotate)&&t.push(new ob),(e.pinchZoom===void 0||e.pinchZoom)&&t.push(new sb({duration:e.zoomDuration})),(e.keyboard===void 0||e.keyboard)&&(t.push(new eb),t.push(new tb({delta:e.zoomDelta,duration:e.zoomDuration}))),(e.mouseWheelZoom===void 0||e.mouseWheelZoom)&&t.push(new ab({onFocusOnly:e.onFocusOnly,duration:e.zoomDuration})),(e.shiftDragZoom===void 0||e.shiftDragZoom)&&t.push(new Qy({duration:e.zoomDuration})),t}var lb={OPACITY:`opacity`,VISIBLE:`visible`,EXTENT:`extent`,Z_INDEX:`zIndex`,MAX_RESOLUTION:`maxResolution`,MIN_RESOLUTION:`minResolution`,MAX_ZOOM:`maxZoom`,MIN_ZOOM:`minZoom`,SOURCE:`source`,MAP:`map`},ub=class extends ih{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;let t=Object.assign({},e);typeof e.properties==`object`&&(delete t.properties,Object.assign(t,e.properties)),t[lb.OPACITY]=e.opacity===void 0?1:e.opacity,Wh(typeof t[lb.OPACITY]==`number`,`Layer opacity must be a number`),t[lb.VISIBLE]=e.visible===void 0||e.visible,t[lb.Z_INDEX]=e.zIndex,t[lb.MAX_RESOLUTION]=e.maxResolution===void 0?1/0:e.maxResolution,t[lb.MIN_RESOLUTION]=e.minResolution===void 0?0:e.minResolution,t[lb.MIN_ZOOM]=e.minZoom===void 0?-1/0:e.minZoom,t[lb.MAX_ZOOM]=e.maxZoom===void 0?1/0:e.maxZoom,this.className_=t.className===void 0?`ol-layer`:t.className,delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){let t=this.state_||{layer:this,managed:e===void 0||e},n=this.getZIndex();return t.opacity=Rd(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return W()}getLayerStatesArray(e){return W()}getExtent(){return this.get(lb.EXTENT)}getMaxResolution(){return this.get(lb.MAX_RESOLUTION)}getMinResolution(){return this.get(lb.MIN_RESOLUTION)}getMinZoom(){return this.get(lb.MIN_ZOOM)}getMaxZoom(){return this.get(lb.MAX_ZOOM)}getOpacity(){return this.get(lb.OPACITY)}getSourceState(){return W()}getVisible(){return this.get(lb.VISIBLE)}getZIndex(){return this.get(lb.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(lb.EXTENT,e)}setMaxResolution(e){this.set(lb.MAX_RESOLUTION,e)}setMinResolution(e){this.set(lb.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(lb.MAX_ZOOM,e)}setMinZoom(e){this.set(lb.MIN_ZOOM,e)}setOpacity(e){Wh(typeof e==`number`,`Layer opacity must be a number`),this.set(lb.OPACITY,e)}setVisible(e){this.set(lb.VISIBLE,e)}setZIndex(e){this.set(lb.Z_INDEX,e)}disposeInternal(){this.state_&&=(this.state_.layer=null,null),super.disposeInternal()}},db={ADDLAYER:`addlayer`,REMOVELAYER:`removelayer`},fb=class extends zm{constructor(e,t){super(e),this.layer=t}},pb={LAYERS:`layers`},mb=class e extends ub{constructor(e){e||={};let t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(pb.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new zv(n.slice(),{unique:!0}):Wh(typeof n.getArray==`function`,"Expected `layers` to be an array or a `Collection`"):n=new zv(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(wm),this.layersListenerKeys_.length=0;let e=this.getLayers();this.layersListenerKeys_.push(Sm(e,Iv.ADD,this.handleLayersAdd_,this),Sm(e,Iv.REMOVE,this.handleLayersRemove_,this));for(let e in this.listenerKeys_)this.listenerKeys_[e].forEach(wm);Cf(this.listenerKeys_);let t=e.getArray();for(let e=0,n=t.length;e<n;e++){let n=t[e];this.registerLayerListeners_(n),this.dispatchEvent(new fb(db.ADDLAYER,n))}this.changed()}registerLayerListeners_(t){let n=[Sm(t,Qm.PROPERTYCHANGE,this.handleLayerChange_,this),Sm(t,U.CHANGE,this.handleLayerChange_,this)];t instanceof e&&n.push(Sm(t,db.ADDLAYER,this.handleLayerGroupAdd_,this),Sm(t,db.REMOVELAYER,this.handleLayerGroupRemove_,this)),this.listenerKeys_[nh(t)]=n}handleLayerGroupAdd_(e){this.dispatchEvent(new fb(db.ADDLAYER,e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new fb(db.REMOVELAYER,e.layer))}handleLayersAdd_(e){let t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new fb(db.ADDLAYER,t)),this.changed()}handleLayersRemove_(e){let t=e.element,n=nh(t);this.listenerKeys_[n].forEach(wm),delete this.listenerKeys_[n],this.dispatchEvent(new fb(db.REMOVELAYER,t)),this.changed()}getLayers(){return this.get(pb.LAYERS)}setLayers(e){let t=this.getLayers();if(t){let e=t.getArray();for(let t=0,n=e.length;t<n;++t)this.dispatchEvent(new fb(db.REMOVELAYER,e[t]))}this.set(pb.LAYERS,e)}getLayersArray(e){return e=e===void 0?[]:e,this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){let t=e===void 0?[]:e,n=t.length;this.getLayers().forEach(function(e){e.getLayerStatesArray(t)});let r=this.getLayerState(),i=r.zIndex;!e&&r.zIndex===void 0&&(i=0);for(let e=n,a=t.length;e<a;e++){let n=t[e];n.opacity*=r.opacity,n.visible=n.visible&&r.visible,n.maxResolution=Math.min(n.maxResolution,r.maxResolution),n.minResolution=Math.max(n.minResolution,r.minResolution),n.minZoom=Math.max(n.minZoom,r.minZoom),n.maxZoom=Math.min(n.maxZoom,r.maxZoom),r.extent!==void 0&&(n.extent=n.extent===void 0?r.extent:Ed(n.extent,r.extent)),n.zIndex===void 0&&(n.zIndex=i)}return t}getSourceState(){return`ready`}},hb={PRERENDER:`prerender`,POSTRENDER:`postrender`,PRECOMPOSE:`precompose`,POSTCOMPOSE:`postcompose`,RENDERCOMPLETE:`rendercomplete`},gb=class extends ub{constructor(e){let t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(lb.SOURCE,this.handleSourcePropertyChange_);let n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e||=[],e.push(this),e}getLayerStatesArray(e){return e||=[],e.push(this.getLayerState()),e}getSource(){return this.get(lb.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let e=this.getSource();return e?e.getState():`undefined`}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!==`ready`)&&(this.sourceReady_=!0,this.dispatchEvent(`sourceready`))}handleSourcePropertyChange_(){this.sourceChangeKey_&&=(wm(this.sourceChangeKey_),null),this.sourceReady_=!1;let e=this.getSource();e&&(this.sourceChangeKey_=Sm(e,U.CHANGE,this.handleSourceChange_,this),e.getState()===`ready`&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent(`sourceready`)},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t,n=this.getMapInternal();!e&&n&&(e=n.getView()),t=e instanceof my?{viewState:e.getState(),extent:e.calculateExtent()}:e,!t.layerStatesArray&&n&&(t.layerStatesArray=n.getLayerGroup().getLayerStatesArray());let r;if(t.layerStatesArray){if(r=t.layerStatesArray.find(e=>e.layer===this),!r)return!1}else r=this.getLayerState();let i=this.getExtent();return _b(r,t.viewState)&&(!i||jd(i,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t=this.getSource()?.getAttributions();if(!t)return[];let n=t(e instanceof my?e.getViewStateAndExtent():e);return Array.isArray(n)||(n=[n]),n}render(e,t){let n=this.getRenderer();return n.prepareFrame(e)?(this.rendered=!0,n.renderFrame(e,t)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,t){}renderDeferred(e){let t=this.getRenderer();t&&t.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(lb.MAP,e)}getMapInternal(){return this.get(lb.MAP)}setMap(e){this.mapPrecomposeKey_&&=(wm(this.mapPrecomposeKey_),null),e||this.changed(),this.mapRenderKey_&&=(wm(this.mapRenderKey_),null),e&&(this.mapPrecomposeKey_=Sm(e,hb.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=Sm(this,U.CHANGE,e.render,e),this.changed())}handlePrecompose_(e){let t=e.frameState.layerStatesArray,n=this.getLayerState(!1);Wh(!t.some(e=>e.layer===n.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),t.push(n)}setSource(e){this.set(lb.SOURCE,e)}getRenderer(){return this.renderer_||=this.createRenderer(),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}};function _b(e,t){if(!e.visible)return!1;let n=t.resolution;if(n<e.minResolution||n>=e.maxResolution)return!1;let r=t.zoom;return r>e.minZoom&&r<=e.maxZoom}function vb(e,t,n=0,r=e.length-1,i=bb){for(;r>n;){if(r-n>600){let a=r-n+1,o=t-n+1,s=Math.log(a),c=.5*Math.exp(2*s/3),l=.5*Math.sqrt(s*c*(a-c)/a)*(o-a/2<0?-1:1);vb(e,t,Math.max(n,Math.floor(t-o*c/a+l)),Math.min(r,Math.floor(t+(a-o)*c/a+l)),i)}let a=e[t],o=n,s=r;for(yb(e,n,t),i(e[r],a)>0&&yb(e,n,r);o<s;){for(yb(e,o,s),o++,s--;i(e[o],a)<0;)o++;for(;i(e[s],a)>0;)s--}i(e[n],a)===0?yb(e,n,s):(s++,yb(e,s,r)),s<=t&&(n=s+1),t<=s&&(r=s-1)}}function yb(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function bb(e,t){return e<t?-1:+(e>t)}var xb=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data,n=[];if(!Nb(e,t))return n;let r=this.toBBox,i=[];for(;t;){for(let a=0;a<t.children.length;a++){let o=t.children[a],s=t.leaf?r(o):o;Nb(e,s)&&(t.leaf?n.push(o):Mb(e,s)?this._all(o,n):i.push(o))}t=i.pop()}return n}collides(e){let t=this.data;if(!Nb(e,t))return!1;let n=[];for(;t;){for(let r=0;r<t.children.length;r++){let i=t.children[r],a=t.leaf?this.toBBox(i):i;if(Nb(e,a)){if(t.leaf||Mb(e,a))return!0;n.push(i)}}t=n.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let t=0;t<e.length;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){let e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=Pb([]),this}remove(e,t){if(!e)return this;let n=this.data,r=this.toBBox(e),i=[],a=[],o,s,c;for(;n||i.length;){if(n||(n=i.pop(),s=i[i.length-1],o=a.pop(),c=!0),n.leaf){let r=Sb(e,n.children,t);if(r!==-1)return n.children.splice(r,1),i.push(n),this._condense(i),this}!c&&!n.leaf&&Mb(n,r)?(i.push(n),a.push(o),o=0,s=n,n=n.children[0]):s?(o++,n=s.children[o],c=!1):n=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=[];for(;e;)e.leaf?t.push(...e.children):n.push(...e.children),e=n.pop();return t}_build(e,t,n,r){let i=n-t+1,a=this._maxEntries,o;if(i<=a)return o=Pb(e.slice(t,n+1)),Cb(o,this.toBBox),o;r||(r=Math.ceil(Math.log(i)/Math.log(a)),a=Math.ceil(i/a**(r-1))),o=Pb([]),o.leaf=!1,o.height=r;let s=Math.ceil(i/a),c=s*Math.ceil(Math.sqrt(a));Fb(e,t,n,c,this.compareMinX);for(let i=t;i<=n;i+=c){let t=Math.min(i+c-1,n);Fb(e,i,t,s,this.compareMinY);for(let n=i;n<=t;n+=s){let i=Math.min(n+s-1,t);o.children.push(this._build(e,n,i,r-1))}}return Cb(o,this.toBBox),o}_chooseSubtree(e,t,n,r){for(;r.push(t),!(t.leaf||r.length-1===n);){let n=1/0,r=1/0,i;for(let a=0;a<t.children.length;a++){let o=t.children[a],s=Ob(o),c=Ab(e,o)-s;c<r?(r=c,n=s<n?s:n,i=o):c===r&&s<n&&(n=s,i=o)}t=i||t.children[0]}return t}_insert(e,t,n){let r=n?e:this.toBBox(e),i=[],a=this._chooseSubtree(r,this.data,t,i);for(a.children.push(e),Tb(a,r);t>=0&&i[t].children.length>this._maxEntries;)this._split(i,t),t--;this._adjustParentBBoxes(r,i,t)}_split(e,t){let n=e[t],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);let a=this._chooseSplitIndex(n,i,r),o=Pb(n.children.splice(a,n.children.length-a));o.height=n.height,o.leaf=n.leaf,Cb(n,this.toBBox),Cb(o,this.toBBox),t?e[t-1].children.push(o):this._splitRoot(n,o)}_splitRoot(e,t){this.data=Pb([e,t]),this.data.height=e.height+1,this.data.leaf=!1,Cb(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let r,i=1/0,a=1/0;for(let o=t;o<=n-t;o++){let t=wb(e,0,o,this.toBBox),s=wb(e,o,n,this.toBBox),c=jb(t,s),l=Ob(t)+Ob(s);c<i?(i=c,r=o,a=l<a?l:a):c===i&&l<a&&(a=l,r=o)}return r||n-t}_chooseSplitAxis(e,t,n){let r=e.leaf?this.compareMinX:Eb,i=e.leaf?this.compareMinY:Db;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)}_allDistMargin(e,t,n,r){e.children.sort(r);let i=this.toBBox,a=wb(e,0,t,i),o=wb(e,n-t,n,i),s=kb(a)+kb(o);for(let r=t;r<n-t;r++){let t=e.children[r];Tb(a,e.leaf?i(t):t),s+=kb(a)}for(let r=n-t-1;r>=t;r--){let t=e.children[r];Tb(o,e.leaf?i(t):t),s+=kb(o)}return s}_adjustParentBBoxes(e,t,n){for(let r=n;r>=0;r--)Tb(t[r],e)}_condense(e){for(let t=e.length-1,n;t>=0;t--)e[t].children.length===0?t>0?(n=e[t-1].children,n.splice(n.indexOf(e[t]),1)):this.clear():Cb(e[t],this.toBBox)}};function Sb(e,t,n){if(!n)return t.indexOf(e);for(let r=0;r<t.length;r++)if(n(e,t[r]))return r;return-1}function Cb(e,t){wb(e,0,e.children.length,t,e)}function wb(e,t,n,r,i){i||=Pb(null),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let a=t;a<n;a++){let t=e.children[a];Tb(i,e.leaf?r(t):t)}return i}function Tb(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function Eb(e,t){return e.minX-t.minX}function Db(e,t){return e.minY-t.minY}function Ob(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function kb(e){return e.maxX-e.minX+(e.maxY-e.minY)}function Ab(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function jb(e,t){let n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),a=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,a-r)}function Mb(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function Nb(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function Pb(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Fb(e,t,n,r,i){let a=[t,n];for(;a.length;){if(n=a.pop(),t=a.pop(),n-t<=r)continue;let o=t+Math.ceil((n-t)/r/2)*r;vb(e,o,t,n,i),a.push(t,o,o,n)}}var Ib=0,Lb=1<<Ib++,Rb=1<<Ib++,zb=1<<Ib++,Bb=1<<Ib++,Vb=1<<Ib++,Hb=1<<Ib++,Ub=2**Ib-1,Wb={[Lb]:`boolean`,[Rb]:`number`,[zb]:`string`,[Bb]:`color`,[Vb]:`number[]`,[Hb]:`size`},Gb=Object.keys(Wb).map(Number).sort(Dm);function Kb(e){return e in Wb}function qb(e){let t=[];for(let n of Gb)Jb(e,n)&&t.push(Wb[n]);return t.length===0?`untyped`:t.length<3?t.join(` or `):t.slice(0,-1).join(`, `)+`, or `+t[t.length-1]}function Jb(e,t){return(e&t)===t}function Yb(e,t){return!!(e&t)}function Xb(e,t){return e===t}var Zb=class{constructor(e,t){if(!Kb(e))throw Error(`literal expressions must have a specific type, got ${qb(e)}`);this.type=e,this.value=t}},Qb=class{constructor(e,t,...n){this.type=e,this.operator=t,this.args=n}};function $b(e){return{variables:new Map,properties:new Map,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1,inputVariables:e}}function ex(e,t,n){switch(typeof e){case`boolean`:if(Xb(t,zb))return new Zb(zb,e?`true`:`false`);if(!Jb(t,Lb))throw Error(`got a boolean, but expected ${qb(t)}`);return new Zb(Lb,e);case`number`:if(Xb(t,Hb))return new Zb(Hb,zh(e));if(Xb(t,Lb))return new Zb(Lb,!!e);if(Xb(t,zb))return new Zb(zb,e.toString());if(!Jb(t,Rb))throw Error(`got a number, but expected ${qb(t)}`);return new Zb(Rb,e);case`string`:if(Xb(t,Bb))return new Zb(Bb,ym(e));if(Xb(t,Lb))return new Zb(Lb,!!e);if(!Jb(t,zb))throw Error(`got a string, but expected ${qb(t)}`);return new Zb(zb,e)}if(!Array.isArray(e))throw Error(`expression must be an array or a primitive value`);if(e.length===0)throw Error(`empty expression`);if(typeof e[0]==`string`)return bx(e,t,n);for(let t of e)if(typeof t!=`number`)throw Error(`expected an array of numbers`);if(Xb(t,Hb)){if(e.length!==2)throw Error(`expected an array of two values for a size, got ${e.length}`);return new Zb(Hb,e)}if(Xb(t,Bb)){if(e.length===3)return new Zb(Bb,[...e,1]);if(e.length===4)return new Zb(Bb,e);throw Error(`expected an array of 3 or 4 values for a color, got ${e.length}`)}if(!Jb(t,Vb))throw Error(`got an array of numbers, but expected ${qb(t)}`);return new Zb(Vb,e)}var K={Get:`get`,Var:`var`,Concat:`concat`,GeometryType:`geometry-type`,LineMetric:`line-metric`,Any:`any`,All:`all`,Not:`!`,Resolution:`resolution`,Zoom:`zoom`,Time:`time`,Equal:`==`,NotEqual:`!=`,GreaterThan:`>`,GreaterThanOrEqualTo:`>=`,LessThan:`<`,LessThanOrEqualTo:`<=`,Multiply:`*`,Divide:`/`,Add:`+`,Subtract:`-`,Clamp:`clamp`,Mod:`%`,Pow:`^`,Abs:`abs`,Floor:`floor`,Ceil:`ceil`,Round:`round`,Sin:`sin`,Cos:`cos`,Atan:`atan`,Sqrt:`sqrt`,Match:`match`,Between:`between`,Interpolate:`interpolate`,Coalesce:`coalesce`,Case:`case`,In:`in`,Number:`number`,String:`string`,Array:`array`,Color:`color`,Id:`id`,Band:`band`,Palette:`palette`,ToString:`to-string`,Has:`has`},tx={[K.Get]:q(lx(1,1/0),nx),[K.Var]:rx(),[K.Has]:q(lx(1,1/0),nx),[K.Id]:q(ix,cx),[K.Concat]:q(lx(2,1/0),dx(zb)),[K.GeometryType]:q(ax,cx),[K.LineMetric]:q(ox,cx),[K.Resolution]:q(sx,cx),[K.Zoom]:q(sx,cx),[K.Time]:q(sx,cx),[K.Any]:q(lx(2,1/0),dx(Lb)),[K.All]:q(lx(2,1/0),dx(Lb)),[K.Not]:q(lx(1,1),dx(Lb)),[K.Equal]:q(lx(2,2),fx()),[K.NotEqual]:q(lx(2,2),fx()),[K.GreaterThan]:q(lx(2,2),dx(Rb)),[K.GreaterThanOrEqualTo]:q(lx(2,2),dx(Rb)),[K.LessThan]:q(lx(2,2),dx(Rb)),[K.LessThanOrEqualTo]:q(lx(2,2),dx(Rb)),[K.Multiply]:q(lx(2,1/0),ux),[K.Coalesce]:q(lx(2,1/0),ux),[K.Divide]:q(lx(2,2),dx(Rb)),[K.Add]:q(lx(2,1/0),dx(Rb)),[K.Subtract]:q(lx(2,2),dx(Rb)),[K.Clamp]:q(lx(3,3),dx(Rb)),[K.Mod]:q(lx(2,2),dx(Rb)),[K.Pow]:q(lx(2,2),dx(Rb)),[K.Abs]:q(lx(1,1),dx(Rb)),[K.Floor]:q(lx(1,1),dx(Rb)),[K.Ceil]:q(lx(1,1),dx(Rb)),[K.Round]:q(lx(1,1),dx(Rb)),[K.Sin]:q(lx(1,1),dx(Rb)),[K.Cos]:q(lx(1,1),dx(Rb)),[K.Atan]:q(lx(1,2),dx(Rb)),[K.Sqrt]:q(lx(1,1),dx(Rb)),[K.Match]:q(lx(4,1/0),mx,hx),[K.Between]:q(lx(3,3),dx(Rb)),[K.Interpolate]:q(lx(6,1/0),mx,gx),[K.Case]:q(lx(3,1/0),px,_x),[K.In]:q(lx(2,2),vx),[K.Number]:q(lx(1,1/0),dx(Ub)),[K.String]:q(lx(1,1/0),dx(Ub)),[K.Array]:q(lx(1,1/0),dx(Rb)),[K.Color]:q(lx(1,4),dx(Rb)),[K.Band]:q(lx(1,3),dx(Rb)),[K.Palette]:q(lx(2,2),yx),[K.ToString]:q(lx(1,1),dx(Lb|Rb|zb|Bb))};function nx(e,t,n){let r=e.length-1,i=Array(r);for(let a=0;a<r;++a){let r=e[a+1];switch(typeof r){case`number`:i[a]=new Zb(Rb,r);break;case`string`:i[a]=new Zb(zb,r);break;default:throw Error(`expected a string key or numeric array index for a get operation, got ${r}`)}a===0&&n.properties.set(String(r),t)}return i}function rx(){return function(e,t,n){let r=e[1];if(typeof r!=`string`)throw Error(`expected a string argument for var operation`);let i=t,a=n.inputVariables?.[r];if(a!==void 0){let e=ex(a,Ub,n);if(!(e instanceof Zb))throw Error(`style variables should only be literal values (no expressions!), variable name: ${r}`);let o=e.type;if(typeof a==`string`&&Yb(i,Bb)&&!Yb(i,zb)?o=Bb:Array.isArray(a)&&a.length===2&&Yb(i,Hb)&&!Yb(i,Vb)&&(o=Hb),i&=o,i===0)throw Error(`the type expected from the var operator (${qb(t)}) did not have any overlap with the type of the corresponding style variables (${qb(o)}), variable name: ${r}`)}if(n.variables.has(r)){let e=n.variables.get(r);if(i&=e,i===0)throw Error(`a new type expected from the var operator (${qb(t)}) did not have any overlap with the previous type expected for it (${qb(e)}), variable name: ${r}`)}return n.variables.set(r,i),new Qb(i,`var`,new Zb(zb,r))}}function ix(e,t,n){n.featureId=!0}function ax(e,t,n){n.geometryType=!0}function ox(e,t,n){n.mCoordinate=!0}function sx(e,t,n){n.mapState=!0}function cx(e,t,n){let r=e[0];if(e.length!==1)throw Error(`expected no arguments for ${r} operation`);return[]}function lx(e,t){return function(n,r,i){let a=n[0],o=n.length-1;if(e===t){if(o!==e)throw Error(`expected ${e} argument${e===1?``:`s`} for ${a}, got ${o}`)}else if(o<e||o>t){let n=t===1/0?`${e} or more`:`${e} to ${t}`;throw Error(`expected ${n} arguments for ${a}, got ${o}`)}}}function ux(e,t,n){let r=e.length-1,i=Array(r);for(let a=0;a<r;++a){let r=ex(e[a+1],t,n);i[a]=r}return i}function dx(e){return function(t,n,r){let i=t.length-1,a=Array(i);for(let n=0;n<i;++n){let i=ex(t[n+1],e,r);a[n]=i}return a}}function fx(){return function(e,t,n){let r=e[0],i=e.length-1,a=Array(i),o=Ub;for(let t=0;t<i;++t){let r=ex(e[t+1],o,n);o&=r.type}if(o===0)throw Error(`no common type was found among the arguments of ${r}`);for(let t=0;t<i;++t){let r=ex(e[t+1],o,n);a[t]=r}return a}}function px(e,t,n){let r=e[0],i=e.length-1;if(i%2==0)throw Error(`expected an odd number of arguments for ${r}, got ${i} instead`)}function mx(e,t,n){let r=e[0],i=e.length-1;if(i%2==1)throw Error(`expected an even number of arguments for operation ${r}, got ${i} instead`)}function hx(e,t,n){let r=e.length-1,i=ex(e[e.length-1],t,n),a=zb|Rb|Lb,o=Array(r-2);for(let t=0;t<r-2;t+=2){try{let r=ex(e[t+2],a,n);a&=r.type}catch(e){throw Error(`failed to parse argument ${t+1} of match expression: ${e.message}`)}if(a===0)throw Error(`no common type was found among the arguments of match expression`)}for(let t=0;t<r-2;t+=2){try{let r=ex(e[t+2],a,n);o[t]=r}catch(e){throw Error(`failed to parse argument ${t+1} of match expression: ${e.message}`)}try{let r=ex(e[t+3],i.type,n);o[t+1]=r}catch(e){throw Error(`failed to parse argument ${t+2} of match expression: ${e.message}`)}}return[ex(e[1],a,n),...o,i]}function gx(e,t,n){let r=e[1],i;switch(r[0]){case`linear`:i=1;break;case`exponential`:let e=r[1];if(typeof e!=`number`||e<=0)throw Error(`expected a number base for exponential interpolation, got ${JSON.stringify(e)} instead`);i=e;break;default:throw Error(`invalid interpolation type: ${JSON.stringify(r)}`)}let a=new Zb(Rb,i),o;try{o=ex(e[2],Rb,n)}catch(e){throw Error(`failed to parse argument 1 in interpolate expression: ${e.message}`)}let s=Array(e.length-3);for(let r=0;r<s.length;r+=2){try{let t=ex(e[r+3],Rb,n);s[r]=t}catch(e){throw Error(`failed to parse argument ${r+2} for interpolate expression: ${e.message}`)}try{let i=ex(e[r+4],t,n);s[r+1]=i}catch(e){throw Error(`failed to parse argument ${r+3} for interpolate expression: ${e.message}`)}}return[a,o,...s]}function _x(e,t,n){let r=ex(e[e.length-1],t,n),i=Array(e.length-1);for(let t=0;t<i.length-1;t+=2){try{let r=ex(e[t+1],Lb,n);i[t]=r}catch(e){throw Error(`failed to parse argument ${t} of case expression: ${e.message}`)}try{let a=ex(e[t+2],r.type,n);i[t+1]=a}catch(e){throw Error(`failed to parse argument ${t+1} of case expression: ${e.message}`)}}return i[i.length-1]=r,i}function vx(e,t,n){let r=e[2];if(!Array.isArray(r))throw Error(`the second argument for the "in" operator must be an array`);let i;if(r[0]===`literal`){if(r=r[1],!Array.isArray(r))throw Error(`failed to parse "in" expression: the literal operator must be followed by an array`)}else if(typeof r[0]==`string`)throw Error(`for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions`);i=typeof r[0]==`string`?zb:Rb;let a=Array(r.length);for(let e=0;e<a.length;e++)try{let t=ex(r[e],i,n);a[e]=t}catch(t){throw Error(`failed to parse haystack item ${e} for "in" expression: ${t.message}`)}return[ex(e[1],i,n),...a]}function yx(e,t,n){let r;try{r=ex(e[1],Rb,n)}catch(e){throw Error(`failed to parse first argument in palette expression: ${e.message}`)}let i=e[2];if(!Array.isArray(i))throw Error(`the second argument of palette must be an array`);let a=Array(i.length);for(let e=0;e<a.length;e++){let t;try{t=ex(i[e],Bb,n)}catch(t){throw Error(`failed to parse color at index ${e} in palette expression: ${t.message}`)}if(!(t instanceof Zb))throw Error(`the palette color at index ${e} must be a literal value`);a[e]=t}return[r,...a]}function q(...e){return function(t,n,r){let i=t[0],a;for(let i=0;i<e.length;i++){let o=e[i](t,n,r);if(i==e.length-1){if(!o)throw Error(`expected last argument validator to return the parsed args`);a=o}}return new Qb(n,i,...a)}}function bx(e,t,n){let r=e[0],i=tx[r];if(!i)throw Error(`unknown operator: ${r}`);return i(e,t,n)}function xx(e){if(!e)return``;let t=e.getType();switch(t){case`Point`:case`LineString`:case`Polygon`:return t;case`MultiPoint`:case`MultiLineString`:case`MultiPolygon`:return t.substring(5);case`Circle`:return`Polygon`;case`GeometryCollection`:return xx(e.getGeometries()[0]);default:return``}}function Sx(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:``}}function Cx(e,t,n){return wx(ex(e,t,n),n)}function wx(e,t){if(e instanceof Zb){if(e.type===Bb&&typeof e.value==`string`){let t=ym(e.value);return function(){return t}}return function(){return e.value}}let n=e.operator;switch(n){case K.Number:case K.String:case K.Coalesce:return Tx(e,t);case K.Get:case K.Var:case K.Has:return Ex(e,t);case K.Id:return e=>e.featureId;case K.GeometryType:return e=>e.geometryType;case K.Concat:{let n=e.args.map(e=>wx(e,t));return e=>``.concat(...n.map(t=>t(e).toString()))}case K.Resolution:return e=>e.resolution;case K.Any:case K.All:case K.Between:case K.In:case K.Not:return Ox(e,t);case K.Equal:case K.NotEqual:case K.LessThan:case K.LessThanOrEqualTo:case K.GreaterThan:case K.GreaterThanOrEqualTo:return Dx(e,t);case K.Multiply:case K.Divide:case K.Add:case K.Subtract:case K.Clamp:case K.Mod:case K.Pow:case K.Abs:case K.Floor:case K.Ceil:case K.Round:case K.Sin:case K.Cos:case K.Atan:case K.Sqrt:return kx(e,t);case K.Case:return Ax(e,t);case K.Match:return jx(e,t);case K.Interpolate:return Mx(e,t);case K.ToString:return Nx(e,t);default:throw Error(`Unsupported operator ${n}`)}}function Tx(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=wx(e.args[n],t);switch(n){case K.Coalesce:return e=>{for(let t=0;t<r;++t){let n=i[t](e);if(n!=null)return n}throw Error(`Expected one of the values to be non-null`)};case K.Number:case K.String:return e=>{for(let t=0;t<r;++t){let r=i[t](e);if(typeof r===n)return r}throw Error(`Expected one of the values to be a ${n}`)};default:throw Error(`Unsupported assertion operator ${n}`)}}function Ex(e,t){let n=e.args[0].value;switch(e.operator){case K.Get:return t=>{let r=e.args,i=t.properties[n];for(let e=1,t=r.length;e<t;++e){let t=r[e].value;i=i[t]}return i};case K.Var:return e=>e.variables[n];case K.Has:return t=>{let r=e.args;if(!(n in t.properties))return!1;let i=t.properties[n];for(let e=1,t=r.length;e<t;++e){let t=r[e].value;if(!i||!Object.hasOwn(i,t))return!1;i=i[t]}return!0};default:throw Error(`Unsupported accessor operator ${e.operator}`)}}function Dx(e,t){let n=e.operator,r=wx(e.args[0],t),i=wx(e.args[1],t);switch(n){case K.Equal:return e=>r(e)===i(e);case K.NotEqual:return e=>r(e)!==i(e);case K.LessThan:return e=>r(e)<i(e);case K.LessThanOrEqualTo:return e=>r(e)<=i(e);case K.GreaterThan:return e=>r(e)>i(e);case K.GreaterThanOrEqualTo:return e=>r(e)>=i(e);default:throw Error(`Unsupported comparison operator ${n}`)}}function Ox(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=wx(e.args[n],t);switch(n){case K.Any:return e=>{for(let t=0;t<r;++t)if(i[t](e))return!0;return!1};case K.All:return e=>{for(let t=0;t<r;++t)if(!i[t](e))return!1;return!0};case K.Between:return e=>{let t=i[0](e),n=i[1](e),r=i[2](e);return t>=n&&t<=r};case K.In:return e=>{let t=i[0](e);for(let n=1;n<r;++n)if(t===i[n](e))return!0;return!1};case K.Not:return e=>!i[0](e);default:throw Error(`Unsupported logical operator ${n}`)}}function kx(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=wx(e.args[n],t);switch(n){case K.Multiply:return e=>{let t=1;for(let n=0;n<r;++n)t*=i[n](e);return t};case K.Divide:return e=>i[0](e)/i[1](e);case K.Add:return e=>{let t=0;for(let n=0;n<r;++n)t+=i[n](e);return t};case K.Subtract:return e=>i[0](e)-i[1](e);case K.Clamp:return e=>{let t=i[0](e),n=i[1](e);if(t<n)return n;let r=i[2](e);return t>r?r:t};case K.Mod:return e=>i[0](e)%i[1](e);case K.Pow:return e=>i[0](e)**+i[1](e);case K.Abs:return e=>Math.abs(i[0](e));case K.Floor:return e=>Math.floor(i[0](e));case K.Ceil:return e=>Math.ceil(i[0](e));case K.Round:return e=>Math.round(i[0](e));case K.Sin:return e=>Math.sin(i[0](e));case K.Cos:return e=>Math.cos(i[0](e));case K.Atan:return r===2?e=>Math.atan2(i[0](e),i[1](e)):e=>Math.atan(i[0](e));case K.Sqrt:return e=>Math.sqrt(i[0](e));default:throw Error(`Unsupported numeric operator ${n}`)}}function Ax(e,t){let n=e.args.length,r=Array(n);for(let i=0;i<n;++i)r[i]=wx(e.args[i],t);return e=>{for(let t=0;t<n-1;t+=2)if(r[t](e))return r[t+1](e);return r[n-1](e)}}function jx(e,t){let n=e.args.length,r=Array(n);for(let i=0;i<n;++i)r[i]=wx(e.args[i],t);return e=>{let t=r[0](e);for(let i=1;i<n-1;i+=2)if(t===r[i](e))return r[i+1](e);return r[n-1](e)}}function Mx(e,t){let n=e.args.length,r=Array(n);for(let i=0;i<n;++i)r[i]=wx(e.args[i],t);return e=>{let t=r[0](e),i=r[1](e),a,o;for(let s=2;s<n;s+=2){let n=r[s](e),c=r[s+1](e),l=Array.isArray(c);if(l&&(c=fm(c)),n>=i)return s===2?c:l?Fx(t,i,a,o,n,c):Px(t,i,a,o,n,c);a=n,o=c}return o}}function Nx(e,t){let n=e.operator,r=e.args.length,i=Array(r);for(let n=0;n<r;++n)i[n]=wx(e.args[n],t);switch(n){case K.ToString:return t=>{let n=i[0](t);return e.args[0].type===Bb?xm(n):n.toString()};default:throw Error(`Unsupported convert operator ${n}`)}}function Px(e,t,n,r,i,a){let o=i-n;if(o===0)return r;let s=t-n;return r+(e===1?s/o:(e**+s-1)/(e**+o-1))*(a-r)}function Fx(e,t,n,r,i,a){if(i-n===0)return r;let o=_m(r),s=_m(a),c=s[2]-o[2];return c>180?c-=360:c<-180&&(c+=360),vm([Px(e,t,n,o[0],i,s[0]),Px(e,t,n,o[1],i,s[1]),o[2]+Px(e,t,n,0,i,c),Px(e,t,n,r[3],i,a[3])])}function Ix(e){return!0}function Lx(e,t){t??=$b();let n=Bx(e,t),r=Sx();return function(e,i){if(r.properties=e.getPropertiesInternal(),r.resolution=i,t.featureId){let t=e.getId();t===void 0?r.featureId=null:r.featureId=t}return t.geometryType&&(r.geometryType=xx(e.getGeometry())),n(r)}}function Rx(e,t){t??=$b();let n=e.length,r=Array(n);for(let i=0;i<n;++i)r[i]=Vx(e[i],t);let i=Sx(),a=Array(n);return function(e,o){if(i.properties=e.getPropertiesInternal(),i.resolution=o,t.featureId){let t=e.getId();t===void 0?i.featureId=null:i.featureId=t}t.geometryType&&(i.geometryType=xx(e.getGeometry()));let s=0;for(let e=0;e<n;++e){let t=r[e](i);t&&(a[s]=t,s+=1)}return a.length=s,a}}function zx(e,t){if(t??=$b(),!Array.isArray(e))return Rx([e],t);let n=e.length;if(`style`in e[0]){let r=Array(n);for(let t=0;t<n;++t){let n=e[t];if(!(`style`in n))throw Error(`Expected a list of rules with a style property`);r[t]=n}return Lx(r,t)}return Rx(e,t)}function Bx(e,t){let n=e.length,r=Array(n);for(let i=0;i<n;++i){let n=e[i],a=`filter`in n?Cx(n.filter,Lb,t):Ix,o;if(Array.isArray(n.style)){let e=n.style.length;o=Array(e);for(let r=0;r<e;++r)o[r]=Vx(n.style[r],t)}else o=[Vx(n.style,t)];r[i]={filter:a,styles:o}}return function(t){let i=[],a=!1;for(let o=0;o<n;++o){let n=r[o].filter;if(n(t)&&!(e[o].else&&a)){a=!0;for(let e of r[o].styles){let n=e(t);n&&i.push(n)}}}return i}}function Vx(e,t){let n=Hx(e,``,t),r=Ux(e,``,t),i=Wx(e,t),a=Gx(e,t),o=Xx(e,`z-index`,t);if(!n&&!r&&!i&&!a&&!wf(e))throw Error(`No fill, stroke, point, or text symbolizer properties in style: `+JSON.stringify(e));let s=new Jh;return function(e){let t=!0;if(n){let r=n(e);r&&(t=!1),s.setFill(r)}if(r){let n=r(e);n&&(t=!1),s.setStroke(n)}if(i){let n=i(e);n&&(t=!1),s.setText(n)}if(a){let n=a(e);n&&(t=!1),s.setImage(n)}return o&&s.setZIndex(o(e)),t?null:s}}function Hx(e,t,n){let r;if(t+`fill-pattern-src`in e)r=Qx(e,t+`fill-`,n);else{if(e[t+`fill-color`]===`none`)return e=>null;r=eS(e,t+`fill-color`,n)}if(!r)return null;let i=new Uh;return function(e){let t=r(e);return t===Qp?null:(i.setColor(t),i)}}function Ux(e,t,n){let r=Xx(e,t+`stroke-width`,n),i=eS(e,t+`stroke-color`,n);if(!r&&!i)return null;let a=Zx(e,t+`stroke-line-cap`,n),o=Zx(e,t+`stroke-line-join`,n),s=tS(e,t+`stroke-line-dash`,n),c=Xx(e,t+`stroke-line-dash-offset`,n),l=Xx(e,t+`stroke-miter-limit`,n),u=Xx(e,t+`stroke-offset`,n),d=new qh;return function(e){if(i){let t=i(e);if(t===Qp)return null;d.setColor(t)}if(r&&d.setWidth(r(e)),a){let t=a(e);if(t!==`butt`&&t!==`round`&&t!==`square`)throw Error(`Expected butt, round, or square line cap`);d.setLineCap(t)}if(o){let t=o(e);if(t!==`bevel`&&t!==`round`&&t!==`miter`)throw Error(`Expected bevel, round, or miter line join`);d.setLineJoin(t)}return s&&d.setLineDash(s(e)),c&&d.setLineDashOffset(c(e)),l&&d.setMiterLimit(l(e)),u&&d.setOffset(u(e)),d}}function Wx(e,t){let n=`text-`,r=Zx(e,`text-value`,t);if(!r)return null;let i=Hx(e,n,t),a=Hx(e,`text-background-`,t),o=Ux(e,n,t),s=Ux(e,`text-background-`,t),c=Zx(e,`text-font`,t),l=Xx(e,`text-max-angle`,t),u=Xx(e,`text-offset-x`,t),d=Xx(e,`text-offset-y`,t),f=$x(e,`text-overflow`,t),p=Zx(e,`text-placement`,t),m=Xx(e,`text-repeat`,t),h=iS(e,`text-scale`,t),g=$x(e,`text-rotate-with-view`,t),_=Xx(e,`text-rotation`,t),v=Zx(e,`text-align`,t),y=Zx(e,`text-justify`,t),b=Zx(e,`text-baseline`,t),x=$x(e,`text-keep-upright`,t),S=tS(e,`text-padding`,t),C=new eg({declutterMode:dS(e,`text-declutter-mode`)});return function(e){if(C.setText(r(e)),i&&C.setFill(i(e)),a&&C.setBackgroundFill(a(e)),o&&C.setStroke(o(e)),s&&C.setBackgroundStroke(s(e)),c&&C.setFont(c(e)),l&&C.setMaxAngle(l(e)),u&&C.setOffsetX(u(e)),d&&C.setOffsetY(d(e)),f&&C.setOverflow(f(e)),p){let t=p(e);if(t!==`point`&&t!==`line`)throw Error(`Expected point or line for text-placement`);C.setPlacement(t)}if(m&&C.setRepeat(m(e)),h&&C.setScale(h(e)),g&&C.setRotateWithView(g(e)),_&&C.setRotation(_(e)),v){let t=v(e);if(t!==`left`&&t!==`center`&&t!==`right`&&t!==`end`&&t!==`start`)throw Error(`Expected left, right, center, start, or end for text-align`);C.setTextAlign(t)}if(y){let t=y(e);if(t!==`left`&&t!==`right`&&t!==`center`)throw Error(`Expected left, right, or center for text-justify`);C.setJustify(t)}if(b){let t=b(e);if(t!==`bottom`&&t!==`top`&&t!==`middle`&&t!==`alphabetic`&&t!==`hanging`)throw Error(`Expected bottom, top, middle, alphabetic, or hanging for text-baseline`);C.setTextBaseline(t)}return S&&C.setPadding(S(e)),x&&C.setKeepUpright(x(e)),C}}function Gx(e,t){return`icon-src`in e?Kx(e,t):`shape-points`in e?qx(e,t):`circle-radius`in e?Jx(e,t):null}function Kx(e,t){let n=`icon-src`,r=pS(e[n],n),i=nS(e,`icon-anchor`,t),a=iS(e,`icon-scale`,t),o=Xx(e,`icon-opacity`,t),s=nS(e,`icon-displacement`,t),c=Xx(e,`icon-rotation`,t),l=$x(e,`icon-rotate-with-view`,t),u=cS(e,`icon-anchor-origin`),d=lS(e,`icon-anchor-x-units`),f=lS(e,`icon-anchor-y-units`),p=Yx(e,`icon-color`),m,h=null;p!==void 0&&(Array.isArray(p)&&p.length>0&&typeof p[0]==`string`?h=eS(e,`icon-color`,t):m=hS(p,`icon-color`));let g=sS(e,`icon-cross-origin`),_=uS(e,`icon-offset`),v=cS(e,`icon-offset-origin`),y=aS(e,`icon-width`),b={src:r,anchorOrigin:u,anchorXUnits:d,anchorYUnits:f,crossOrigin:g,offset:_,offsetOrigin:v,height:aS(e,`icon-height`),width:y,size:oS(e,`icon-size`),declutterMode:dS(e,`icon-declutter-mode`)},x=null;return function(e){if(x)h&&x.setColor(h(e));else{let t=h?h(e):m;x=new Kh(t===void 0?Object.assign({},b):Object.assign({},b,{color:t}))}return o&&x.setOpacity(o(e)),s&&x.setDisplacement(s(e)),c&&x.setRotation(c(e)),l&&x.setRotateWithView(l(e)),a&&x.setScale(a(e)),i&&x.setAnchor(i(e)),x}}function qx(e,t){let n=`shape-`,r=`shape-points`,i=`shape-radius`,a=mS(e[r],r);if(!(i in e))throw Error(`Expected a number for ${i}`);let o=Xx(e,i,t),s=typeof e[i]==`number`?e[i]:5,c=`shape-radius2`,l=Xx(e,c,t),u=typeof e[c]==`number`?e[c]:void 0,d=Hx(e,n,t),f=Ux(e,n,t),p=iS(e,`shape-scale`,t),m=nS(e,`shape-displacement`,t),h=Xx(e,`shape-rotation`,t),g=$x(e,`shape-rotate-with-view`,t),_=new Vh({points:a,radius:s,radius2:u,angle:aS(e,`shape-angle`),declutterMode:dS(e,`shape-declutter-mode`)});return function(e){return o&&_.setRadius(o(e)),l&&_.setRadius2(l(e)),d&&_.setFill(d(e)),f&&_.setStroke(f(e)),m&&_.setDisplacement(m(e)),h&&_.setRotation(h(e)),g&&_.setRotateWithView(g(e)),p&&_.setScale(p(e)),_}}function Jx(e,t){let n=`circle-`,r=Hx(e,n,t),i=Ux(e,n,t),a=Xx(e,`circle-radius`,t),o=iS(e,`circle-scale`,t),s=nS(e,`circle-displacement`,t),c=Xx(e,`circle-rotation`,t),l=$x(e,`circle-rotate-with-view`,t),u=new Hh({radius:5,declutterMode:dS(e,`circle-declutter-mode`)});return function(e){return a&&u.setRadius(a(e)),r&&u.setFill(r(e)),i&&u.setStroke(i(e)),s&&u.setDisplacement(s(e)),c&&u.setRotation(c(e)),l&&u.setRotateWithView(l(e)),o&&u.setScale(o(e)),u}}function Yx(e,t){if(!(t in e))return;let n=e[t];return n===void 0?void 0:n}function Xx(e,t,n){let r=Yx(e,t);if(r===void 0)return;let i=Cx(r,Rb,n);return function(e){return mS(i(e),t)}}function Zx(e,t,n){let r=Yx(e,t);if(r===void 0)return null;let i=Cx(r,zb,n);return function(e){return pS(i(e),t)}}function Qx(e,t,n){let r=Zx(e,t+`pattern-src`,n),i=rS(e,t+`pattern-offset`,n),a=rS(e,t+`pattern-size`,n),o=eS(e,t+`color`,n);return function(e){return{src:r(e),offset:i&&i(e),size:a&&a(e),color:o&&o(e)}}}function $x(e,t,n){let r=Yx(e,t);if(r===void 0)return null;let i=Cx(r,Lb,n);return function(e){let n=i(e);if(typeof n!=`boolean`)throw Error(`Expected a boolean for ${t}`);return n}}function eS(e,t,n){let r=Yx(e,t);if(r===void 0)return null;let i=Cx(r,Bb,n);return function(e){return hS(i(e),t)}}function tS(e,t,n){let r=Yx(e,t);if(r===void 0)return null;if(Array.isArray(r)&&(r.length===0||typeof r[0]!=`string`)){let e=r.map((e,r)=>{if(typeof e==`number`)return()=>e;let i=Cx(e,Rb,n);return function(e){return mS(i(e),`${t}[${r}]`)}});return function(t){let n=Array(e.length);for(let r=0;r<e.length;++r)n[r]=e[r](t);return n}}let i=Cx(r,Vb,n);return function(e){return fS(i(e),t)}}function nS(e,t,n){let r=Yx(e,t);if(r===void 0)return null;let i=Cx(r,Vb,n);return function(e){let n=fS(i(e),t);if(n.length!==2)throw Error(`Expected two numbers for ${t}`);return n}}function rS(e,t,n){let r=Yx(e,t);if(r===void 0)return null;let i=Cx(r,Vb,n);return function(e){return gS(i(e),t)}}function iS(e,t,n){let r=Yx(e,t);if(r===void 0)return null;let i=Cx(r,Vb|Rb,n);return function(e){return _S(i(e),t)}}function aS(e,t){let n=e[t];if(n!==void 0){if(typeof n!=`number`)throw Error(`Expected a number for ${t}`);return n}}function oS(e,t){let n=e[t];if(n!==void 0){if(typeof n==`number`)return zh(n);if(!Array.isArray(n)||n.length!==2||typeof n[0]!=`number`||typeof n[1]!=`number`)throw Error(`Expected a number or size array for ${t}`);return n}}function sS(e,t){let n=e[t];if(n!==void 0){if(typeof n!=`string`)throw Error(`Expected a string for ${t}`);return n}}function cS(e,t){let n=e[t];if(n!==void 0){if(n!==`bottom-left`&&n!==`bottom-right`&&n!==`top-left`&&n!==`top-right`)throw Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);return n}}function lS(e,t){let n=e[t];if(n!==void 0){if(n!==`pixels`&&n!==`fraction`)throw Error(`Expected pixels or fraction for ${t}`);return n}}function uS(e,t){let n=e[t];if(n!==void 0)return fS(n,t)}function dS(e,t){let n=e[t];if(n!==void 0){if(typeof n!=`string`)throw Error(`Expected a string for ${t}`);if(n!==`declutter`&&n!==`obstacle`&&n!==`none`)throw Error(`Expected declutter, obstacle, or none for ${t}`);return n}}function fS(e,t){if(!Array.isArray(e))throw Error(`Expected an array for ${t}`);let n=e.length;for(let r=0;r<n;++r)if(typeof e[r]!=`number`)throw Error(`Expected an array of numbers for ${t}`);return e}function pS(e,t){if(typeof e!=`string`)throw Error(`Expected a string for ${t}`);return e}function mS(e,t){if(typeof e!=`number`)throw Error(`Expected a number for ${t}`);return e}function hS(e,t){if(typeof e==`string`)return e;let n=fS(e,t),r=n.length;if(r<3||r>4)throw Error(`Expected a color with 3 or 4 values for ${t}`);return n}function gS(e,t){let n=fS(e,t);if(n.length!==2)throw Error(`Expected an array of two numbers for ${t}`);return n}function _S(e,t){return typeof e==`number`?e:gS(e,t)}var vS={RENDER_ORDER:`renderOrder`},yS=class extends gb{constructor(e){e||={};let t=Object.assign({},e);delete t.style,delete t.renderBuffer,delete t.updateWhileAnimating,delete t.updateWhileInteracting,super(t),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer===void 0?100:e.renderBuffer,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0&&e.updateWhileAnimating,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0&&e.updateWhileInteracting}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(vS.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,t){let n=this.getDeclutter();n in e.declutter||(e.declutter[n]=new xb(9)),this.getRenderer().renderDeclutter(e,t)}setRenderOrder(e){this.set(vS.RENDER_ORDER,e)}setStyle(e){this.style_=e===void 0?Zh:e;let t=bS(e);this.styleFunction_=e===null?void 0:Yh(t),this.changed()}setDeclutter(e){this.declutter_=e?String(e):void 0,this.changed()}};function bS(e){if(e===void 0)return Zh;if(!e)return null;if(typeof e==`function`||e instanceof Jh)return e;if(Array.isArray(e)&&e.length===0)return[];if(Array.isArray(e)&&e[0]instanceof Jh){let t=e.length,n=Array(t);for(let r=0;r<t;++r){let t=e[r];if(!(t instanceof Jh))throw Error(`Expected a list of style instances`);n[r]=t}return n}return zx(e)}var xS=class extends zm{constructor(e,t,n,r){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=r}},SS=class extends Tm{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){W()}calculateMatrices2D(e){let t=e.viewState,n=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;og(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),sg(r,n)}forEachFeatureAtCoordinate(e,t,n,r,i,a,o,s){let c,l=t.viewState;function u(e,t,n,r){return i.call(a,t,e?n:null,r)}let d=l.projection,f=ef(e.slice(),d),p=[[0,0]];if(d.canWrapX()&&r){let e=Ad(d.getExtent());p.push([-e,0],[e,0])}let m=t.layerStatesArray,h=m.length,g=[],_=[];for(let r=0;r<p.length;r++)for(let i=h-1;i>=0;--i){let a=m[i],d=a.layer;if(d.hasRenderer()&&_b(a,l)&&o.call(s,d)){let i=d.getRenderer(),o=d.getSource();if(i&&o){let s=o.getWrapX()?f:e,l=u.bind(null,a.managed);_[0]=s[0]+p[r][0],_[1]=s[1]+p[r][1],c=i.forEachFeatureAtCoordinate(_,t,n,l,g)}if(c)return c}}if(g.length===0)return;let v=1/g.length;return g.forEach((e,t)=>e.distanceSq+=t*v),g.sort((e,t)=>e.distanceSq-t.distanceSq),g.some(e=>c=e.callback(e.feature,e.layer,e.geometry)),c}hasFeatureAtCoordinate(e,t,n,r,i,a){return this.forEachFeatureAtCoordinate(e,t,n,r,Pm,this,i,a)!==void 0}getMap(){return this.map_}renderFrame(e){W()}scheduleExpireIconCache(e){Km.canExpireCache()&&e.postRenderFunctions.push(CS)}};function CS(e,t){Km.expire()}var wS=class extends SS{constructor(e){super(e),this.fontChangeListenerKey_=Sm(Ch,Qm.PROPERTYCHANGE,e.redrawText,e),this.element_=Rp?Xp():document.createElement(`div`);let t=this.element_.style;t.position=`absolute`,t.width=`100%`,t.height=`100%`,t.zIndex=`0`,this.element_.className=sh+` ol-layers`;let n=e.getViewport();n&&n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,t){let n=this.getMap();if(n.hasListener(e)){let r=new xS(e,void 0,t);n.dispatchEvent(r)}}disposeInternal(){wm(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&=(this.element_.style.display=`none`,!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(hb.PRECOMPOSE,e);let t=e.layerStatesArray.sort((e,t)=>e.zIndex-t.zIndex);t.some(e=>e.layer instanceof yS&&e.layer.getDeclutter())&&(e.declutter={});let n=e.viewState;this.children_.length=0;let r=this.getMap().getTargetElement(),i;Zp(r)&&(i=r.getContext(`2d`),i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,r.width,r.height));let a=[],o=i?r:null;for(let r=0,i=t.length;r<i;++r){let i=t[r];e.layerIndex=r;let s=i.layer,c=s.getSourceState();if(!_b(i,n)||c!=`ready`&&c!=`undefined`){s.unrender();continue}let l=s.render(e,o);l&&(l!==o&&(this.children_.push(l),o=l),a.push(i))}this.declutter(e,a),Yp(this.element_,this.children_);for(let e of i?this.children_:[]){let t=e.firstElementChild||e,n=e.style.backgroundColor;if(n&&(!Zp(t)||t.width>0)&&(i.fillStyle=n,i.fillRect(0,0,i.canvas.width,i.canvas.height)),!Zp(t)||t.width===0)continue;i.save();let r=e.style.opacity||t.style.opacity;i.globalAlpha=r===``?1:Number(r);let a=t.style.transform;if(a)i.transform(...dg(a));else{let e=parseFloat(t.style.width)/t.width,n=parseFloat(t.style.height)/t.height;i.transform(e,0,0,n,0,0)}i.drawImage(t,0,0),i.restore()}this.dispatchRenderEvent(hb.POSTCOMPOSE,e),this.renderedVisible_||=(this.element_.style.display=``,!0),this.scheduleExpireIconCache(e)}declutter(e,t){if(e.declutter){for(let n=t.length-1;n>=0;--n){let r=t[n],i=r.layer;i.getDeclutter()&&i.renderDeclutter(e,r)}t.forEach(t=>t.layer.renderDeferred(e))}}};function TS(e){if(e instanceof gb){e.setMapInternal(null);return}e instanceof mb&&e.getLayers().forEach(TS)}function ES(e,t){if(e instanceof gb){e.setMapInternal(t);return}if(e instanceof mb){let n=e.getLayers().getArray();for(let e=0,r=n.length;e<r;++e)ES(n[e],t)}}var DS=class extends ih{constructor(e){super(),e||={},this.on,this.once,this.un;let t=OS(e);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading===void 0?16:e.maxTilesLoading,this.pixelRatio_=e.pixelRatio===void 0?Lp:e.pixelRatio,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=ng(),this.pixelToCoordinateTransform_=ng(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,Rp||(this.viewport_=document.createElement(`div`),this.viewport_.className=`ol-viewport`+(`ontouchstart`in window?` ol-touch`:``),this.viewport_.style.position=`relative`,this.viewport_.style.overflow=`hidden`,this.viewport_.style.width=`100%`,this.viewport_.style.height=`100%`,this.overlayContainer_=document.createElement(`div`),this.overlayContainer_.style.position=`absolute`,this.overlayContainer_.style.zIndex=`0`,this.overlayContainer_.style.width=`100%`,this.overlayContainer_.style.height=`100%`,this.overlayContainer_.style.pointerEvents=`none`,this.overlayContainer_.className=`ol-overlaycontainer`,this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement(`div`),this.overlayContainerStopEvent_.style.position=`absolute`,this.overlayContainerStopEvent_.style.zIndex=`0`,this.overlayContainerStopEvent_.style.width=`100%`,this.overlayContainerStopEvent_.style.height=`100%`,this.overlayContainerStopEvent_.style.pointerEvents=`none`,this.overlayContainerStopEvent_.className=`ol-overlaycontainer-stopevent`,this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,Rp||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=t.controls||(Rp?new zv:Ty()),this.interactions=t.interactions||(Rp?new zv:cb({onFocusOnly:!0})),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Jv(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Gv.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Gv.VIEW,this.handleViewChanged_),this.addChangeListener(Gv.SIZE,this.handleSizeChanged_),this.addChangeListener(Gv.TARGET,this.handleTargetChanged_),this.setProperties(t.values);let n=this;e.view&&!(e.view instanceof my)&&e.view.then(function(e){n.setView(new my(e))}),this.controls.addEventListener(Iv.ADD,e=>{e.element.setMap(this)}),this.controls.addEventListener(Iv.REMOVE,e=>{e.element.setMap(null)}),this.interactions.addEventListener(Iv.ADD,e=>{e.element.setMap(this)}),this.interactions.addEventListener(Iv.REMOVE,e=>{e.element.setMap(null)}),this.overlays_.addEventListener(Iv.ADD,e=>{this.addOverlayInternal_(e.element)}),this.overlays_.addEventListener(Iv.REMOVE,e=>{let t=e.element.getId();t!==void 0&&delete this.overlayIdIndex_[t.toString()],e.element.setMap(null)}),this.controls.forEach(e=>{e.setMap(this)}),this.interactions.forEach(e=>{e.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){ES(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){let t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;let r=this.getCoordinateFromPixelInternal(e);n=n===void 0?{}:n;let i=n.hitTolerance===void 0?0:n.hitTolerance,a=n.layerFilter===void 0?Pm:n.layerFilter,o=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,i,o,t,null,a,null)}getFeaturesAtPixel(e,t){let n=[];return this.forEachFeatureAtPixel(e,function(e){n.push(e)},t),n}getAllLayers(){let e=[];function t(n){n.forEach(function(n){n instanceof mb?t(n.getLayers()):e.push(n)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;let n=this.getCoordinateFromPixelInternal(e);t=t===void 0?{}:t;let r=t.layerFilter===void 0?Pm:t.layerFilter,i=t.hitTolerance===void 0?0:t.hitTolerance,a=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,i,a,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){let t=this.viewport_.getBoundingClientRect(),n=this.getSize(),r=t.width/n[0],i=t.height/n[1],a=`changedTouches`in e?e.changedTouches[0]:e;return[(a.clientX-t.left)/r,(a.clientY-t.top)/i]}getTarget(){return this.get(Gv.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return Op(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){let t=this.frameState_;return t?ag(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){let t=this.overlayIdIndex_[e.toString()];return t===void 0?null:t}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Gv.LAYERGROUP)}setLayers(e){let t=this.getLayerGroup();if(e instanceof zv){t.setLayers(e);return}let n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){let n=e[t];if(!n.visible)continue;let r=n.layer.getRenderer();if(r&&!r.ready)return!0;let i=n.layer.getSource();if(i&&i.loading)return!0}return!1}getPixelFromCoordinate(e){let t=kp(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){let t=this.frameState_;return t?ag(t.coordinateToPixelTransform,e.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(e){this.pixelRatio_!==e&&(this.pixelRatio_=e,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(Gv.SIZE)}getView(){return this.get(Gv.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,r){return Yv(this.frameState_,e,t,n,r)}handleBrowserEvent(e,t){t||=e.type;let n=new Vv(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;let t=e.originalEvent,n=t.type;if(n===Uv.POINTERDOWN||n===U.WHEEL||n===U.KEYDOWN){let e=this.getOwnerDocument(),n=this.viewport_.getRootNode?this.viewport_.getRootNode():e,r=t.target,i=n instanceof ShadowRoot?n.host===r?n.host.ownerDocument:n:n===e?e.documentElement:n;if(this.overlayContainerStopEvent_.contains(r)||!i.contains(r))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){let t=this.getInteractions().getArray().slice();for(let n=t.length-1;n>=0;n--){let r=t[n];if(r.getMap()===this&&r.getActive()&&this.getTargetElement()&&(!r.handleEvent(e)||e.propagationStopped))break}}}handlePostRender(){let e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let n=this.maxTilesLoading_,r=n,i=e?e.viewHints:void 0,a=i?i[Xv.ANIMATING]||i[Xv.INTERACTING]:!1;if(a){let t=Date.now()-e.time>8;n=t?0:8,r=t?0:2}t.getTilesLoading()<n&&(a&&t.reprioritize(),t.loadMoreTiles(n,r))}e&&this.renderer_&&!e.animate&&(this.renderComplete_?(this.hasListener(hb.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(hb.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Bv(Av.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Bv(Av.LOADSTART,this,e))));let n=this.postRenderFunctions_;if(e)for(let t=0,r=n.length;t<r;++t)n[t](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let e=0,t=this.targetChangeHandlerKeys_.length;e<t;++e)wm(this.targetChangeHandlerKeys_[e]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(U.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(U.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!Zp(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let e=this.targetElement_.getRootNode();e instanceof ShadowRoot&&this.resizeObserver_.unobserve(e.host),this.setSize(void 0)}let e=this.getTarget(),t=typeof e==`string`?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&=(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),null),this.animationDelayKey_&&=(cancelAnimationFrame(this.animationDelayKey_),void 0);else{if(Zp(t)||t.appendChild(this.viewport_),this.renderer_||=new wS(this),!Zp(t)){this.mapBrowserEventHandler_=new Wv(this,this.moveTolerance_);for(let e in Hv)this.mapBrowserEventHandler_.addEventListener(Hv[e],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(U.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(U.WHEEL,this.boundHandleBrowserEvent_,Bp?{passive:!1}:!1);let e;if(this.keyboardEventTarget_)e=this.keyboardEventTarget_;else{let n=t.getRootNode();e=n instanceof ShadowRoot?n.host:t}if(this.targetChangeHandlerKeys_=[Sm(e,U.KEYDOWN,this.handleBrowserEvent,this),Sm(e,U.KEYPRESS,this.handleBrowserEvent,this)],!Zp(t)){let e=t.getRootNode();e instanceof ShadowRoot&&this.resizeObserver_.observe(e.host),this.resizeObserver_?.observe(t)}}this.updateSize()}}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&=(wm(this.viewPropertyListenerKey_),null),this.viewChangeListenerKey_&&=(wm(this.viewChangeListenerKey_),null);let e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=Sm(e,Qm.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Sm(e,U.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&=(this.layerGroupPropertyListenerKeys_.forEach(wm),null);let e=this.getLayerGroup();e&&(this.handleLayerAdd_(new fb(`addlayer`,e)),this.layerGroupPropertyListenerKeys_=[Sm(e,Qm.PROPERTYCHANGE,this.render,this),Sm(e,U.CHANGE,this.render,this),Sm(e,`addlayer`,this.handleLayerAdd_,this),Sm(e,`removelayer`,this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let e=this.frameState_.layerStatesArray;for(let t=0,n=e.length;t<n;++t){let n=e[t].layer;n.hasRenderer()&&n.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){TS(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){let t=this.getSize(),n=this.getView(),r=this.frameState_,i=null;if(t!==void 0&&Lh(t)&&n&&n.isDef()){let r=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=n.getState();if(i={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:Cd(a.center,a.resolution,a.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:r,wantedTiles:{},mapId:nh(this),renderTargets:{}},a.nextCenter&&a.nextResolution){let e=isNaN(a.nextRotation)?a.rotation:a.nextRotation;i.nextExtent=Cd(a.nextCenter,a.nextResolution,e,t)}}this.frameState_=i,this.renderer_.renderFrame(i),i&&(i.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,i.postRenderFunctions),r&&(!this.previousExtent_||!Md(this.previousExtent_)&&!fd(i.extent,this.previousExtent_))&&(this.dispatchEvent(new Bv(Av.MOVESTART,this,r)),this.previousExtent_=ld(this.previousExtent_)),this.previousExtent_&&!i.viewHints[Xv.ANIMATING]&&!i.viewHints[Xv.INTERACTING]&&!fd(i.extent,this.previousExtent_)&&(this.dispatchEvent(new Bv(Av.MOVEEND,this,i)),td(i.extent,this.previousExtent_))),this.dispatchEvent(new Bv(Av.POSTRENDER,this,i)),this.renderComplete_=(this.hasListener(Av.LOADSTART)||this.hasListener(Av.LOADEND)||this.hasListener(hb.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0)}setLayerGroup(e){let t=this.getLayerGroup();t&&this.handleLayerRemove_(new fb(`removelayer`,t)),this.set(Gv.LAYERGROUP,e)}setSize(e){this.set(Gv.SIZE,e)}setTarget(e){this.set(Gv.TARGET,e)}setView(e){if(!e||e instanceof my){this.set(Gv.VIEW,e);return}this.set(Gv.VIEW,new my);let t=this;e.then(function(e){t.setView(new my(e))})}updateSize(){let e=this.getTargetElement(),t;if(e){let n,r;if(Zp(e)){let t=e.getContext(`2d`).getTransform();n=e.width/t.a,r=e.height/t.d}else{let t=getComputedStyle(e);n=e.offsetWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)-parseFloat(t.borderRightWidth),r=e.offsetHeight-parseFloat(t.borderTopWidth)-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)-parseFloat(t.borderBottomWidth)}!isNaN(n)&&!isNaN(r)&&(t=[Math.max(0,n),Math.max(0,r)],!Lh(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&Zu(`No map visible because the map container's width or height are 0.`))}let n=this.getSize();t&&(!n||!Mm(t,n))&&(this.updateViewportSize_(t),this.setSize(t))}updateViewportSize_(e){let t=this.getView();t&&t.setViewportSize(e)}};function OS(e){let t=null;e.keyboardEventTarget!==void 0&&(t=typeof e.keyboardEventTarget==`string`?document.getElementById(e.keyboardEventTarget):e.keyboardEventTarget);let n={},r=e.layers&&typeof e.layers.getLayers==`function`?e.layers:new mb({layers:e.layers});n[Gv.LAYERGROUP]=r,n[Gv.TARGET]=e.target,n[Gv.VIEW]=e.view instanceof my?e.view:new my;let i;e.controls!==void 0&&(Array.isArray(e.controls)?i=new zv(e.controls.slice()):(Wh(typeof e.controls.getArray==`function`,"Expected `controls` to be an array or an `ol/Collection.js`"),i=e.controls));let a;e.interactions!==void 0&&(Array.isArray(e.interactions)?a=new zv(e.interactions.slice()):(Wh(typeof e.interactions.getArray==`function`,"Expected `interactions` to be an array or an `ol/Collection.js`"),a=e.interactions));let o;return e.overlays===void 0?o=new zv:Array.isArray(e.overlays)?o=new zv(e.overlays.slice()):(Wh(typeof e.overlays.getArray==`function`,"Expected `overlays` to be an array or an `ol/Collection.js`"),o=e.overlays),{controls:i,interactions:a,keyboardEventTarget:t,overlays:o,values:n}}var kS=class extends Bm{constructor(e,t,n){super(),n||={},this.tileCoord=e,this.state=t,this.key=``,this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(U.CHANGE)}release(){this.setState(G.EMPTY)}getKey(){return this.key+`/`+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==G.EMPTY){if(this.state!==G.ERROR&&this.state>e)throw Error(`Tile load sequence violation`);this.state=e,this.changed()}}load(){W()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;let r=t-n+1e3/60;return r>=this.transition_?1:ey(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}disposeInternal(){this.release(),super.disposeInternal()}};function AS(e){return e instanceof Image||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageBitmap?e:null}var jS=Error(`disposed`),MS=[256,256],NS=class extends kS{constructor(e){let t=G.IDLE;super(e.tileCoord,t,{transition:e.transition,interpolate:e.interpolate}),this.loader_=e.loader,this.data_=null,this.error_=null,this.size_=e.size||null,this.controller_=e.controller||null}getSize(){if(this.size_)return this.size_;let e=AS(this.data_);return e?[e.width,e.height]:MS}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==G.IDLE&&this.state!==G.ERROR)return;this.state=G.LOADING,this.changed();let e=this;this.loader_().then(function(t){e.data_=t,e.state=G.LOADED,e.changed()}).catch(function(t){e.error_=t,e.state=G.ERROR,e.changed()})}disposeInternal(){this.controller_&&=(this.controller_.abort(jS),null),super.disposeInternal()}},PS=class extends kS{constructor(e,t,n,r,i,a){super(e,t,a),this.crossOrigin_=r?.crossOrigin,this.referrerPolicy_=r?.referrerPolicy,this.src_=n,this.key=n,this.image_,Rp?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=i}getImage(){return this.image_}setImage(e){this.image_=e,this.state=G.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=G.ERROR,this.unlistenImage_(),this.image_=FS(),this.changed()}handleImageLoad_(){if(Rp)this.state=G.LOADED;else{let e=this.image_;this.state=e.naturalWidth&&e.naturalHeight?G.LOADED:G.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==G.ERROR&&(this.state=G.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==G.IDLE&&(this.state=G.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Vm(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&=(this.unlisten_(),null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}};function FS(){let e=Vp(1,1);return e.fillStyle=`rgba(0,0,0,0)`,e.fillRect(0,0,1,1),e.canvas}var IS=class{constructor(e,t,n,r){this.minX=e,this.maxX=t,this.minY=n,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}};function LS(e,t,n,r,i){return i===void 0?new IS(e,t,n,r):(i.minX=e,i.maxX=t,i.minY=n,i.maxY=r,i)}var RS,zS=[];function BS(e,t,n,r,i){e.beginPath(),e.moveTo(0,0),e.lineTo(t,n),e.lineTo(r,i),e.closePath(),e.save(),e.clip(),e.fillRect(0,0,Math.max(t,r)+1,Math.max(n,i)),e.restore()}function VS(e,t){return Math.abs(e[t*4]-210)>2||Math.abs(e[t*4+3]-191.25)>2}function HS(){if(RS===void 0){let e=Vp(6,6,zS);e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(210, 0, 0, 0.75)`,BS(e,4,5,4,0),BS(e,4,5,0,5);let t=e.getImageData(0,0,3,3).data;RS=VS(t,0)||VS(t,4)||VS(t,8),Wp(e),zS.push(e.canvas)}return RS}function US(e,t,n,r){let i=Tp(n,t,e),a=hp(t,r,n),o=t.getMetersPerUnit();o!==void 0&&(a*=o);let s=e.getMetersPerUnit();s!==void 0&&(a/=s);let c=e.getExtent();if(!c||rd(c,i)){let t=hp(e,a,i)/a;isFinite(t)&&t>0&&(a/=t)}return a}function WS(e,t,n,r){let i=US(e,t,xd(n),r);return(!isFinite(i)||i<=0)&&_d(n,function(n){return i=US(e,t,n,r),isFinite(i)&&i>0}),i}function GS(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=Vp(Math.round(n*e),Math.round(n*t),zS);if(d||(m.imageSmoothingEnabled=!1),c.length===0)return m.canvas;m.scale(n,n);function h(e){return Math.round(e*n)/n}m.globalCompositeOperation=`lighter`;let g=sd();c.forEach(function(e,t,n){pd(g,e.extent)});let _,v=n/r,y=(d?1:1+2**-24)/v;if(!f||c.length!==1||l!==0){if(_=Vp(Math.round(Ad(g)*v),Math.round(Td(g)*v),zS),d||(_.imageSmoothingEnabled=!1),i&&p){let e=(i[0]-g[0])*v,t=-(i[3]-g[3])*v,n=Ad(i)*v,r=Td(i)*v;_.rect(e,t,n,r),_.clip()}c.forEach(function(e,t,n){if(e.image.width>0&&e.image.height>0){if(e.clipExtent){_.save();let t=(e.clipExtent[0]-g[0])*v,n=-(e.clipExtent[3]-g[3])*v,r=Ad(e.clipExtent)*v,i=Td(e.clipExtent)*v;_.rect(d?t:Math.round(t),d?n:Math.round(n),d?r:Math.round(t+r)-Math.round(t),d?i:Math.round(n+i)-Math.round(n)),_.clip()}let t=(e.extent[0]-g[0])*v,n=-(e.extent[3]-g[3])*v,r=Ad(e.extent)*v,i=Td(e.extent)*v;_.drawImage(e.image,l,l,e.image.width-2*l,e.image.height-2*l,d?t:Math.round(t),d?n:Math.round(n),d?r:Math.round(t+r)-Math.round(t),d?i:Math.round(n+i)-Math.round(n)),e.clipExtent&&_.restore()}})}let b=Od(o);return s.getTriangles().forEach(function(e,t,n){let r=e.source,i=e.target,o=r[0][0],s=r[0][1],l=r[1][0],u=r[1][1],f=r[2][0],p=r[2][1],v=h((i[0][0]-b[0])/a),x=h(-(i[0][1]-b[1])/a),S=h((i[1][0]-b[0])/a),C=h(-(i[1][1]-b[1])/a),w=h((i[2][0]-b[0])/a),T=h(-(i[2][1]-b[1])/a),E=o,D=s;o=0,s=0,l-=E,u-=D,f-=E,p-=D;let ee=Vd([[l,u,0,0,S-v],[f,p,0,0,w-v],[0,0,l,u,C-x],[0,0,f,p,T-x]]);if(!ee)return;if(m.save(),m.beginPath(),HS()||!d){m.moveTo(S,C);let e=v-S,t=x-C;for(let n=0;n<4;n++)m.lineTo(S+h((n+1)*e/4),C+h(n*t/3)),n!=3&&m.lineTo(S+h((n+1)*e/4),C+h((n+1)*t/3));m.lineTo(w,T)}else m.moveTo(S,C),m.lineTo(v,x),m.lineTo(w,T);m.clip(),m.transform(ee[0],ee[2],ee[1],ee[3],v,x),m.translate(g[0]-E,g[3]-D);let O;if(_)O=_.canvas,m.scale(y,-y);else{let e=c[0],t=e.extent;O=e.image,m.scale(Ad(t)/O.width,-Td(t)/O.height)}m.drawImage(O,0,0),m.restore()}),_&&(Wp(_),zS.push(_.canvas)),u&&(m.save(),m.globalCompositeOperation=`source-over`,m.strokeStyle=`black`,m.lineWidth=1,s.getTriangles().forEach(function(e,t,n){let r=e.target,i=(r[0][0]-b[0])/a,o=-(r[0][1]-b[1])/a,s=(r[1][0]-b[0])/a,c=-(r[1][1]-b[1])/a,l=(r[2][0]-b[0])/a,u=-(r[2][1]-b[1])/a;m.beginPath(),m.moveTo(s,c),m.lineTo(i,o),m.lineTo(l,u),m.closePath(),m.stroke()}),m.restore()),m.canvas}var KS=10,qS=.25,JS=class{constructor(e,t,n,r,i,a,o){this.sourceProj_=e,this.targetProj_=t;let s={},c=o?yp(e=>ag(o,Tp(e,this.targetProj_,this.sourceProj_))):wp(this.targetProj_,this.sourceProj_);this.transformInv_=function(e){let t=e[0]+`/`+e[1];return s[t]||(s[t]=c(e)),s[t]},this.maxSourceExtent_=r,this.errorThresholdSquared_=i*i,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&Ad(r)>=Ad(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?Ad(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?Ad(this.targetProj_.getExtent()):null;let l=Od(n),u=kd(n),d=bd(n),f=yd(n),p=this.transformInv_(l),m=this.transformInv_(u),h=this.transformInv_(d),g=this.transformInv_(f),_=KS+(a?Math.max(0,Math.ceil(Math.log2(vd(n)/(a*a*256*256)))):0);if(this.addQuad_(l,u,d,f,p,m,h,g,_),this.wrapsXInSource_){let e=1/0;this.triangles_.forEach(function(t,n,r){e=Math.min(e,t.source[0][0],t.source[1][0],t.source[2][0])}),this.triangles_.forEach(t=>{if(Math.max(t.source[0][0],t.source[1][0],t.source[2][0])-e>this.sourceWorldWidth_/2){let n=[[t.source[0][0],t.source[0][1]],[t.source[1][0],t.source[1][1]],[t.source[2][0],t.source[2][1]]];n[0][0]-e>this.sourceWorldWidth_/2&&(n[0][0]-=this.sourceWorldWidth_),n[1][0]-e>this.sourceWorldWidth_/2&&(n[1][0]-=this.sourceWorldWidth_),n[2][0]-e>this.sourceWorldWidth_/2&&(n[2][0]-=this.sourceWorldWidth_);let r=Math.min(n[0][0],n[1][0],n[2][0]);Math.max(n[0][0],n[1][0],n[2][0])-r<this.sourceWorldWidth_/2&&(t.source=n)}})}s={}}addTriangle_(e,t,n,r,i,a){this.triangles_.push({source:[r,i,a],target:[e,t,n]})}addQuad_(e,t,n,r,i,a,o,s,c){let l=$u([i,a,o,s]),u=this.sourceWorldWidth_?Ad(l)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&u>.5&&u<1,p=!1;if(c>0&&(this.targetProj_.isGlobal()&&this.targetWorldWidth_&&(p=Ad($u([e,t,n,r]))/this.targetWorldWidth_>qS||p),!f&&this.sourceProj_.isGlobal()&&u&&(p=u>qS||p)),!p&&this.maxSourceExtent_&&isFinite(l[0])&&isFinite(l[1])&&isFinite(l[2])&&isFinite(l[3])&&!jd(l,this.maxSourceExtent_))return;let m=0;if(!p&&(!isFinite(i[0])||!isFinite(i[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(s[0])||!isFinite(s[1]))){if(c>0)p=!0;else if(m=(!isFinite(i[0])||!isFinite(i[1])?8:0)+(!isFinite(a[0])||!isFinite(a[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+ +(!isFinite(s[0])||!isFinite(s[1])),m!=1&&m!=2&&m!=4&&m!=8)return}if(c>0){if(!p){let t=[(e[0]+n[0])/2,(e[1]+n[1])/2],r=this.transformInv_(t),a;a=f?(Wd(i[0],d)+Wd(o[0],d))/2-Wd(r[0],d):(i[0]+o[0])/2-r[0];let s=(i[1]+o[1])/2-r[1];p=a*a+s*s>this.errorThresholdSquared_}if(p){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){let l=[(t[0]+n[0])/2,(t[1]+n[1])/2],u=this.transformInv_(l),d=[(r[0]+e[0])/2,(r[1]+e[1])/2],f=this.transformInv_(d);this.addQuad_(e,t,l,d,i,a,u,f,c-1),this.addQuad_(d,l,n,r,f,u,o,s,c-1)}else{let l=[(e[0]+t[0])/2,(e[1]+t[1])/2],u=this.transformInv_(l),d=[(n[0]+r[0])/2,(n[1]+r[1])/2],f=this.transformInv_(d);this.addQuad_(e,l,d,r,i,u,f,s,c-1),this.addQuad_(l,t,n,d,u,a,o,f,c-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}m&11||this.addTriangle_(e,n,r,i,o,s),m&14||this.addTriangle_(e,n,t,i,o,a),m&&(m&13||this.addTriangle_(t,r,e,a,s,i),m&7||this.addTriangle_(t,r,n,a,s,o))}calculateSourceExtent(){let e=sd();return this.triangles_.forEach(function(t,n,r){let i=t.source;md(e,i[0]),md(e,i[1]),md(e,i[2])}),e}getTriangles(){return this.triangles_}},YS=.5,XS=class extends kS{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(i,G.IDLE,d),this.renderEdges_=u!==void 0&&u,this.pixelRatio_=o,this.gutter_=s,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=a||i,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=e.canWrapX()?e.getExtent():void 0;let f=r.getTileCoordExtent(this.wrappedTileCoord_),p=this.targetTileGrid_.getExtent(),m=this.sourceTileGrid_.getExtent(),h=p?Ed(f,p):f;if(vd(h)===0){this.state=G.EMPTY;return}let g=e.getExtent();g&&(m=m?Ed(m,g):g);let _=r.getResolution(this.wrappedTileCoord_[0]),v=WS(e,n,h,_);if(!isFinite(v)||v<=0){this.state=G.EMPTY;return}let y=l===void 0?YS:l;if(this.triangulation_=new JS(e,n,h,m,v*y,_),this.triangulation_.getTriangles().length===0){this.state=G.EMPTY;return}this.sourceZ_=t.getZForResolution(v);let b=this.triangulation_.calculateSourceExtent();if(m&&(e.canWrapX()?(b[1]=Rd(b[1],m[1],m[3]),b[3]=Rd(b[3],m[1],m[3])):b=Ed(b,m)),!vd(b))this.state=G.EMPTY;else{let n=0,r=0;e.canWrapX()&&(n=Ad(g),r=Math.floor((b[0]-g[0])/n)),Id(b.slice(),e,!0).forEach(e=>{let i=t.getTileRangeForExtentAndZ(e,this.sourceZ_);for(let e=i.minX;e<=i.maxX;e++)for(let t=i.minY;t<=i.maxY;t++){let i=r*n;this.sourceTiles_.push({getTile:()=>c(this.sourceZ_,e,t,o),offset:i})}++r}),this.sourceTiles_.length===0&&(this.state=G.EMPTY)}}getImage(){return this.canvas_}reproject_(){let e=[];if(this.sourceTiles_.forEach(t=>{let n=t.tile;if(n&&n.getState()==G.LOADED){let r=this.sourceTileGrid_.getTileCoordExtent(n.tileCoord);r[0]+=t.offset,r[2]+=t.offset;let i=this.clipExtent_?.slice();i&&(i[0]+=t.offset,i[2]+=t.offset),e.push({extent:r,clipExtent:i,image:n.getImage()})}}),this.sourceTiles_.length=0,e.length===0)this.state=G.ERROR;else{let t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),r=typeof n==`number`?n:n[0],i=typeof n==`number`?n:n[1],a=this.targetTileGrid_.getResolution(t),o=this.sourceTileGrid_.getResolution(this.sourceZ_),s=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=GS(r,i,this.pixelRatio_,o,this.sourceTileGrid_.getExtent(),a,s,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=G.LOADED}this.changed()}load(){for(let e of this.sourceTiles_)e.tile=e.getTile();if(this.state==G.IDLE){this.state=G.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:t})=>{let n=t.getState();if(n==G.IDLE||n==G.LOADING){e++;let n=Sm(t,U.CHANGE,r=>{let i=t.getState();(i==G.LOADED||i==G.ERROR||i==G.EMPTY)&&(wm(n),e--,e===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(n)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:e},t,n){e.getState()==G.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(wm),this.sourcesListenerKeys_=null}release(){this.canvas_&&=(Wp(this.canvas_.getContext(`2d`)),zS.push(this.canvas_),null),this.sourceTiles_.length=0,super.release()}},ZS=class{constructor(e){this.highWaterMark=e===void 0?2048:e,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let e=this.pop();e instanceof Tm&&e.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){let n=this.entries_[e];return Wh(n!==void 0,`Tried to get a value for a key that does not exist in the cache`),n===this.newest_?n.value_:(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n,n.value_)}remove(e){let t=this.entries_[e];return Wh(t!==void 0,`Tried to get a value for a key that does not exist in the cache`),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){let e=Array(this.count_),t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){let e=Array(this.count_),t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){return this.entries_[e]?.value_}pop(){let e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){Wh(!(e in this.entries_),`Tried to set a value for a key that is used already`);let n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}};function QS(e,t,n,r){return r===void 0?[e,t,n]:(r[0]=e,r[1]=t,r[2]=n,r)}function $S(e,t,n){return e+`/`+t+`/`+n}function eC(e,t,n,r,i){return`${nh(e)},${t},${$S(n,r,i)}`}function tC(e){return nC(e[0],e[1],e[2])}function nC(e,t,n){return(t<<e)+n}function rC(e,t){let n=e[0],r=e[1],i=e[2];if(t.getMinZoom()>n||n>t.getMaxZoom())return!1;let a=t.getFullTileRange(n);return!a||a.containsXY(r,i)}var iC=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.pendingMethod_,this.context_=new Proxy(Up(),{get:(e,t)=>{if(typeof e[t]==`function`)return this.pendingMethod_=t,this.pushMethodArgs_},set:(e,t,n)=>(this.push_(t,n),!0)})}push_(...e){let t=this.instructions_,n=this.zIndex+this.offset_;t[n]||(t[n]=[]),t[n].push(...e)}pushMethodArgs_=(...e)=>{this.push_(this.pendingMethod_,e)};pushFunction(e){this.push_(e)}getContext(){return this.context_}draw(e){this.instructions_.forEach(t=>{for(let n=0,r=t.length;n<r;++n){let r=t[n];if(typeof r==`function`){r(e);continue}let i=t[++n];typeof e[r]==`function`?e[r](...i):e[r]=typeof i==`function`?i(e):i}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}},aC=5,oC=class extends $m{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.staleKeys_=[],this.maxStaleKeys=aC,this.renderedSourceKey_}getStaleKeys(){return this.staleKeys_}prependStaleKey(e){this.staleKeys_.unshift(e),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}updateStaleKeys(e){this.renderedSourceKey_?this.renderedSourceKey_!==e&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=e):this.renderedSourceKey_=e}getFeatures(e){return W()}getData(e){return null}prepareFrame(e){return W()}renderFrame(e,t){return W()}forEachFeatureAtCoordinate(e,t,n,r,i){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){let t=e.target;(t.getState()===H.LOADED||t.getState()===H.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=H.LOADED&&t!=H.ERROR&&e.addEventListener(U.CHANGE,this.boundHandleImageChange_),t==H.IDLE&&(e.load(),t=e.getState()),t==H.LOADED}renderIfReadyAndVisible(){let e=this.getLayer();e&&e.getVisible()&&e.getSourceState()===`ready`&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}},sC=[],cC=null;function lC(){cC=Vp(1,1,void 0,{willReadFrequently:!0})}var uC=class extends oC{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=ng(),this.pixelTransform=ng(),this.inversePixelTransform=ng(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(e,t,n){cC||lC(),cC.clearRect(0,0,1,1);let r;try{cC.drawImage(e,t,n,1,1,0,0,1,1),r=cC.getImageData(0,0,1,1).data}catch{return cC=null,null}return r}getBackground(e){let t=this.getLayer().getBackground();return typeof t==`function`&&(t=t(e.viewState.resolution)),t||void 0}useContainer(e,t,n,r,i){if(Zp(e)&&this.pixelTransform[1]===0&&this.pixelTransform[2]===0&&this.pixelTransform[4]===0&&this.pixelTransform[5]===0&&e.width===r&&e.height===i){let t=e,r=t.getContext(`2d`);if(r){this.container=e,this.context=r,this.containerReused=!0,n&&(r.fillStyle=n,r.fillRect(0,0,t.width,t.height));return}}let a=this.getLayer().getClassName(),o,s;if(e&&e.className===a&&(!n||e&&e.style.backgroundColor&&Mm(bm(e.style.backgroundColor),bm(n)))){let t=e.firstElementChild;Zp(t)&&(s=t.getContext(`2d`))}if(s&&fg(s.canvas.style.transform,t)?(this.container=e,this.context=s,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){o=Rp?Xp():document.createElement(`div`),o.className=a;let e=o.style;e.position=`absolute`,e.width=`100%`,e.height=`100%`,s=Vp();let t=s.canvas;o.appendChild(t),e=t.style,e.position=`absolute`,e.left=`0`,e.transformOrigin=`top left`,this.container=o,this.context=s}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){let r=Od(n),i=kd(n),a=bd(n),o=yd(n);ag(t.coordinateToPixelTransform,r),ag(t.coordinateToPixelTransform,i),ag(t.coordinateToPixelTransform,a),ag(t.coordinateToPixelTransform,o);let s=this.inversePixelTransform;ag(s,r),ag(s,i),ag(s,a),ag(s,o),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(i[0]),Math.round(i[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.clip()}prepareContainer(e,t){let n=e.extent,r=e.viewState.resolution,i=e.viewState.rotation,a=e.pixelRatio,o=Math.round(Ad(n)/r*a),s=Math.round(Td(n)/r*a);og(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/a,1/a,i,-o/2,-s/2),sg(this.inversePixelTransform,this.pixelTransform);let c=ug(this.pixelTransform),l=this.getBackground(e);if(this.useContainer(t,c,l,o,s),!this.containerReused){let e=this.context.canvas;e.width!=o||e.height!=s?(e.width=o,e.height=s):this.context.clearRect(0,0,o,s),c!==e.style.transform&&(e.style.transform=c)}}dispatchRenderEvent_(e,t,n){let r=this.getLayer();if(r.hasListener(e)){let i=new xS(e,this.inversePixelTransform,n,t);r.dispatchEvent(i)}}preRender(e,t){this.frameState=t,!t.declutter&&this.dispatchRenderEvent_(hb.PRERENDER,e,t)}postRender(e,t){t.declutter||this.dispatchRenderEvent_(hb.POSTRENDER,e,t)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new iC),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(hb.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(hb.POSTRENDER,this.context,e))}getRenderTransform(e,t,n,r,i,a,o){let s=i/2,c=a/2,l=r/t,u=-l,d=-e[0]+o,f=-e[1];return og(this.tempTransform,s,c,l,u,-n,d,f)}disposeInternal(){delete this.frameState,super.disposeInternal()}};function dC(e,t,n){if(!(n in e))return e[n]=new Set([t]),!0;let r=e[n],i=r.has(t);return i||r.add(t),!i}function fC(e,t,n){let r=e[n];return r?r.delete(t):!1}function pC(e,t){let n=e.layerStatesArray[e.layerIndex];n.extent&&(t=Ed(t,jp(n.extent,e.viewState.projection)));let r=n.layer.getRenderSource();if(!r.getWrapX()){let n=r.getTileGridForProjection(e.viewState.projection).getExtent();n&&(t=Ed(t,n))}return t}var mC=class extends uC{constructor(e,t){super(e),t||={},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceRevision_,this.tempExtent=sd(),this.tempTileRange_=new IS(0,0,0,0),this.tempTileCoord_=QS(0,0,0);let n=t.cacheSize===void 0?512:t.cacheSize;this.tileCache_=new ZS(n),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=n*.5}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||=new ZS(512),this.sourceTileCache_}getOrCreateTile(e,t,n,r){let i=this.tileCache_,a=this.getLayer().getSource(),o=eC(a,a.getKey(),e,t,n),s;if(i.containsKey(o))s=i.get(o);else{let c=r.viewState.projection,l=a.getProjection();if(s=a.getTile(e,t,n,r.pixelRatio,c,!l||xp(l,c)?void 0:this.getSourceTileCache()),!s)return null;i.set(o,s)}return s}getTile(e,t,n,r){return this.getOrCreateTile(e,t,n,r)||null}getData(e){let t=this.frameState;if(!t)return null;let n=this.getLayer(),r=ag(t.pixelToCoordinateTransform,e.slice()),i=n.getExtent();if(i&&!rd(i,r))return null;let a=t.viewState,o=n.getRenderSource(),s=o.getTileGridForProjection(a.projection),c=o.getTilePixelRatio(t.pixelRatio);for(let e=s.getZForResolution(a.resolution);e>=s.getMinZoom();--e){let n=s.getTileCoordForCoordAndZ(r,e),i=this.getTile(e,n[1],n[2],t);if(!i||i.getState()!==G.LOADED)continue;let l=s.getOrigin(e),u=zh(s.getTileSize(e)),d=s.getResolution(e),f;if(i instanceof PS||i instanceof XS)f=i.getImage();else if(i instanceof NS){if(f=AS(i.getData()),!f)continue}else continue;let p=Math.floor(c*((r[0]-l[0])/d-n[1]*u[0])),m=Math.floor(c*((l[1]-r[1])/d-n[2]*u[1])),h=Math.round(c*o.getGutterForProjection(a.projection));return this.getImageData(f,p+h,m+h)}return null}prepareFrame(e){this.renderedProjection?e.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=e.viewState.projection):this.renderedProjection=e.viewState.projection;let t=this.getLayer().getSource();if(!t)return!1;let n=t.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==n&&(this.renderedSourceRevision_=n,this.renderedSourceKey_===t.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=n,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(e,t,n,r,i){let a=e.viewState,o=this.getLayer(),s=o.getRenderSource(),c=s.getTileGridForProjection(a.projection),l=nh(s);l in e.wantedTiles||(e.wantedTiles[l]={});let u=e.wantedTiles[l],d=o.getMapInternal(),f=Math.max(n-i,c.getMinZoom(),c.getZForResolution(Math.min(o.getMaxResolution(),d?d.getView().getResolutionForZoom(Math.max(o.getMinZoom(),0)):c.getResolution(0)),s.zDirection)),p=a.rotation,m=p?wd(a.center,a.resolution,p,e.size):void 0;for(let i=n;i>=f;--i){let n=c.getTileRangeForExtentAndZ(t,i,this.tempTileRange_),a=c.getResolution(i);for(let t=n.minX;t<=n.maxX;++t)for(let o=n.minY;o<=n.maxY;++o){if(p&&!c.tileCoordIntersectsViewport([i,t,o],m))continue;let n=this.getTile(i,t,o,e);if(!n||!dC(r,n,i))continue;let s=n.getKey();if(u[s]=!0,n.getState()===G.IDLE&&!e.tileQueue.isKeyQueued(s)){let r=QS(i,t,o,this.tempTileCoord_);e.tileQueue.enqueue([n,l,c.getTileCoordCenter(r),a])}}}}findStaleTile_(e,t){let n=this.tileCache_,r=e[0],i=e[1],a=e[2],o=this.getStaleKeys();for(let e=0;e<o.length;++e){let s=eC(this.getLayer().getSource(),o[e],r,i,a);if(n.containsKey(s)){let e=n.peek(s);if(e.getState()===G.LOADED)return e.endTransition(nh(this)),dC(t,e,r),!0}}return!1}findAltTiles_(e,t,n,r){let i=e.getTileRangeForTileCoordAndZ(t,n,this.tempTileRange_);if(!i)return!1;let a=!0,o=this.tileCache_,s=this.getLayer().getRenderSource(),c=s.getKey();for(let e=i.minX;e<=i.maxX;++e)for(let t=i.minY;t<=i.maxY;++t){let i=eC(s,c,n,e,t),l=!1;if(o.containsKey(i)){let e=o.peek(i);e.getState()===G.LOADED&&(dC(r,e,n),l=!0)}l||(a=!1)}return a}renderFrame(e,t){this.renderComplete=!0;let n=e.layerStatesArray[e.layerIndex],r=e.viewState,i=r.projection,a=r.resolution,o=r.center,s=e.pixelRatio,c=this.getLayer(),l=c.getSource(),u=l.getTileGridForProjection(i),d=u.getZForResolution(a,l.zDirection),f=u.getResolution(d);this.updateStaleKeys(l.getKey());let p=e.extent,m=l.getTilePixelRatio(s);this.prepareContainer(e,t);let h=this.context.canvas.width,g=this.context.canvas.height;this.layerExtent=n.extent?jp(n.extent,i):null,this.layerExtent&&(p=Ed(p,this.layerExtent));let _=f*h/2/m,v=f*g/2/m,y=[o[0]-_,o[1]-v,o[0]+_,o[1]+v],b={};this.renderedTiles.length=0;let x=c.getPreload();if(e.nextExtent&&this.enqueueTilesForNextExtent()){let t=u.getZForResolution(r.nextResolution,l.zDirection),n=pC(e,e.nextExtent);this.enqueueTiles(e,n,t,b,x)}let S=pC(e,p);if(this.enqueueTiles(e,S,d,b,0),x>0&&setTimeout(()=>{this.enqueueTiles(e,S,d-1,b,x-1)},0),!(d in b))return this.container;let C=nh(this),w=e.time;for(let t of b[d]){let n=t.getState();if(n===G.EMPTY)continue;let r=t.tileCoord;if(n===G.LOADED&&t.getAlpha(C,w)===1){t.endTransition(C);continue}if(n!==G.ERROR&&(this.renderComplete=!1),this.findStaleTile_(r,b)){fC(b,t,d),e.animate=!0;continue}if(this.findAltTiles_(u,r,d+1,b))continue;let i=u.getMinZoom();for(let e=d-1;e>=i&&!this.findAltTiles_(u,r,e,b);--e);}let T=f/a*s/m,E=this.getRenderContext(e);og(this.tempTransform,h/2,g/2,T,T,0,-h/2,-g/2),this.layerExtent&&this.clipUnrotated(E,e,this.layerExtent),l.getInterpolate()||(E.imageSmoothingEnabled=!1),this.preRender(E,e);let D=Object.keys(b).map(Number);D.sort(Dm);let ee=[],O=[],te=[];for(let t=D.length-1;t>=0;--t){let n=D[t],r=l.getTilePixelSize(n,s,i),a=u.getResolution(n)/f,o=r[0]*a*T,c=r[1]*a*T,p=u.getTileCoordForCoordAndZ(Od(y),n),h=u.getTileCoordExtent(p),g=ag(this.tempTransform,[m*(h[0]-y[0])/f,m*(y[3]-h[3])/f]),_=m*l.getGutterForProjection(i);for(let t of b[n]){if(t.getState()!==G.LOADED)continue;let r=t.tileCoord,i=p[1]-r[1],a=Math.round(g[0]-(i-1)*o),s=p[2]-r[2],u=Math.round(g[1]-(s-1)*c),f=Math.round(g[0]-i*o),m=Math.round(g[1]-s*c),h=a-f,v=u-m,y=n===d;if(y&&t.inTransition(C)){te.push({tile:t,x:f,y:m,w:h,h:v,gutter:_}),this.renderedTiles.unshift(t),this.updateUsedTiles(e.usedTiles,l,t);continue}let b=[f,m,f+h,m+v],x=[];for(let e=0,t=ee.length;e<t;++e)n<O[e]&&jd(b,ee[e])&&x.push(ee[e]);let S;x.length>0&&(S=Ld(b,x)),ee.push(b),O.push(n),this.drawTile(t,e,f,m,h,v,_,y,S),this.renderedTiles.unshift(t),this.updateUsedTiles(e.usedTiles,l,t)}}for(let t=0,n=te.length;t<n;++t){let{tile:n,x:r,y:i,w:a,h:o,gutter:s}=te[t];this.drawTile(n,e,r,i,a,o,s,!0,void 0)}return this.renderedResolution=f,this.extentChanged=!this.renderedExtent_||!fd(this.renderedExtent_,y),this.renderedExtent_=y,this.renderedPixelRatio=s,this.postRender(this.context,e),this.layerExtent&&E.restore(),E.imageSmoothingEnabled=!0,this.renderComplete&&e.postRenderFunctions.push((e,t)=>{let n=nh(l),r=t.wantedTiles[n],i=r?Object.keys(r).length:0;this.updateCacheSize(i),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()}),this.container}updateCacheSize(e){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,e*2)}drawTile(e,t,n,r,i,a,o,s,c){let l;if(e instanceof NS){if(l=AS(e.getData()),!l)throw Error(`Rendering array data is not yet supported`)}else l=this.getTileImage(e);if(!l)return;let u=this.getRenderContext(t),d=nh(this),f=t.layerStatesArray[t.layerIndex],p=f.opacity*(s?e.getAlpha(d,t.time):1),m=p!==u.globalAlpha;m&&(u.save(),u.globalAlpha=p);let h=l.width-2*o,g=l.height-2*o;if(c){let e=h/i,t=g/a;for(let i=0,a=c.length;i<a;++i){let a=c[i],s=a[0],d=a[1],f=a[2]-a[0],p=a[3]-a[1];u.drawImage(l,o+(s-n)*e,o+(d-r)*t,f*e,p*t,s,d,f,p)}}else u.drawImage(l,o,o,h,g,n,r,i,a);m&&u.restore(),p===f.opacity?s&&e.endTransition(d):t.animate=!0}getImage(){let e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}updateUsedTiles(e,t,n){let r=nh(t);r in e||(e[r]={}),e[r][n.getKey()]=!0}},hC={PRELOAD:`preload`,USE_INTERIM_TILES_ON_ERROR:`useInterimTilesOnError`},gC=class extends gb{constructor(e){e||={};let t=Object.assign({},e),n=e.cacheSize;delete e.cacheSize,delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.cacheSize_=n,this.setPreload(e.preload===void 0?0:e.preload),this.setUseInterimTilesOnError(e.useInterimTilesOnError===void 0||e.useInterimTilesOnError)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(hC.PRELOAD)}setPreload(e){this.set(hC.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(hC.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(hC.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}},_C=class extends gC{constructor(e){super(e)}createRenderer(){return new mC(this,{cacheSize:this.getCacheSize()})}},vC=[0,0,0],yC=5,bC=class{constructor(e){let t=e.minZoom,n=e.resolutions;t===void 0&&n&&(t=n.findIndex(e=>e!==void 0)),this.minZoom=t===void 0?0:t,this.resolutions_=n,Wh(Nm(this.resolutions_,(e,t)=>t-e,!0),"`resolutions` must be sorted in descending order");let r;if(!e.origins){for(let e=0,t=this.resolutions_.length-1;e<t;++e)if(!r)r=this.resolutions_[e]/this.resolutions_[e+1];else if(this.resolutions_[e]/this.resolutions_[e+1]!==r){r=void 0;break}}this.zoomFactor_=r,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin===void 0?null:e.origin,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,Wh(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));let i=e.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=Od(i)),Wh(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,Wh(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize===void 0?this.tileSizes_?null:256:e.tileSize,Wh(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i===void 0?null:i,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.tileRanges===void 0?e.sizes===void 0?i&&this.calculateTileRanges_(i):this.fullTileRanges_=e.sizes.map((e,t)=>{let n=new IS(Math.min(0,e[0]),Math.max(e[0]-1,-1),Math.min(0,e[1]),Math.max(e[1]-1,-1));if(i){let e=this.getTileRangeForExtentAndZ(i,t);n.minX=Math.max(e.minX,n.minX),n.maxX=Math.min(e.maxX,n.maxX),n.minY=Math.max(e.minY,n.minY),n.maxY=Math.min(e.maxY,n.maxY)}return n}):this.fullTileRanges_=e.tileRanges}forEachTileCoord(e,t,n){let r=this.getTileRangeForExtentAndZ(e,t);for(let e=r.minX,i=r.maxX;e<=i;++e)for(let i=r.minY,a=r.maxY;i<=a;++i)n([t,e,i])}forEachTileCoordParentTileRange(e,t,n,r){let i,a,o,s=null,c=e[0]-1;for(this.zoomFactor_===2?(a=e[1],o=e[2]):s=this.getTileCoordExtent(e,r);c>=this.minZoom;){if(a!==void 0&&o!==void 0?(a=Math.floor(a/2),o=Math.floor(o/2),i=LS(a,a,o,o,n)):i=this.getTileRangeForExtentAndZ(s,c,n),t(c,i))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getOrigins(){return this.origins_}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){let n=e[1]*2,r=e[2]*2;return LS(n,n+1,r,r+1,t)}let r=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;let r=e[0],i=e[1],a=e[2];if(t===r)return LS(i,a,i,a,n);if(this.zoomFactor_){let e=this.zoomFactor_**+(t-r),o=Math.floor(i*e),s=Math.floor(a*e);return t<r?LS(o,o,s,s,n):LS(o,Math.floor(e*(i+1))-1,s,Math.floor(e*(a+1))-1,n)}let o=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(o,t,n)}getTileRangeForExtentAndZ(e,t,n){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,vC);let r=vC[1],i=vC[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,vC);let a=vC[1],o=vC[2];return LS(r,a,i,o,n)}getTileCoordCenter(e){let t=this.getOrigin(e[0]),n=this.getResolution(e[0]),r=zh(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*n,t[1]-(e[2]+.5)*r[1]*n]}getTileCoordExtent(e,t){let n=this.getOrigin(e[0]),r=this.getResolution(e[0]),i=zh(this.getTileSize(e[0]),this.tmpSize_),a=n[0]+e[1]*i[0]*r,o=n[1]-(e[2]+1)*i[1]*r;return cd(a,o,a+i[0]*r,o+i[1]*r,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,r,i){let a=this.getZForResolution(n),o=n/this.getResolution(a),s=this.getOrigin(a),c=zh(this.getTileSize(a),this.tmpSize_),l=o*(e-s[0])/n/c[0],u=o*(s[1]-t)/n/c[1];return r?(l=Jd(l,yC)-1,u=Jd(u,yC)-1):(l=qd(l,yC),u=qd(u,yC)),QS(a,l,u,i)}getTileCoordForXYAndZ_(e,t,n,r,i){let a=this.getOrigin(n),o=this.getResolution(n),s=zh(this.getTileSize(n),this.tmpSize_),c=(e-a[0])/o/s[0],l=(a[1]-t)/o/s[1];return r?(c=Jd(c,yC)-1,l=Jd(l,yC)-1):(c=qd(c,yC),l=qd(l,yC)),QS(n,c,l,i)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){return Rd(km(this.resolutions_,e,t||0),this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return S_(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){let t=this.resolutions_.length,n=Array(t);for(let r=this.minZoom;r<t;++r)n[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=n}};function xC(e){let t=e.getDefaultTileGrid();return t||(t=EC(e),e.setDefaultTileGrid(t)),t}function SC(e,t,n){let r=t[0],i=e.getTileCoordCenter(t),a=DC(n);if(!rd(a,i)){let t=Ad(a),n=Math.ceil((a[0]-i[0])/t);return i[0]+=t*n,e.getTileCoordForCoordAndZ(i,r)}return t}function CC(e,t,n,r){r=r===void 0?`top-left`:r;let i=TC(e,t,n);return new bC({extent:e,origin:Sd(e,r),resolutions:i,tileSize:n})}function wC(e){let t=e||{},n=t.extent||mp(`EPSG:3857`).getExtent();return new bC({extent:n,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:TC(n,t.maxZoom,t.tileSize,t.maxResolution)})}function TC(e,t,n,r){t=t===void 0?42:t,n=zh(n===void 0?256:n);let i=Td(e),a=Ad(e);r=r>0?r:Math.max(a/n[0],i/n[1]);let o=t+1,s=Array(o);for(let e=0;e<o;++e)s[e]=r/2**e;return s}function EC(e,t,n,r){return CC(DC(e),t,n,r)}function DC(e){e=mp(e);let t=e.getExtent();if(!t){let n=180*rf.degrees/e.getMetersPerUnit();t=cd(-n,-n,n,n)}return t}var OC=/\{z\}/g,kC=/\{x\}/g,AC=/\{y\}/g,jC=/\{-y\}/g;function MC(e,t,n,r,i){return e.replace(OC,t.toString()).replace(kC,n.toString()).replace(AC,r.toString()).replace(jC,function(){if(i===void 0)throw Error(`If the URL template has a {-y} placeholder, the grid extent must be known`);return(i-r).toString()})}function NC(e){let t=[],n=/\{([a-z])-([a-z])\}/.exec(e);if(n){let r=n[1].charCodeAt(0),i=n[2].charCodeAt(0),a;for(a=r;a<=i;++a)t.push(e.replace(n[0],String.fromCharCode(a)));return t}if(n=/\{(\d+)-(\d+)\}/.exec(e),n){let r=parseInt(n[2],10);for(let i=parseInt(n[1],10);i<=r;i++)t.push(e.replace(n[0],i.toString()));return t}return t.push(e),t}function PC(e,t){return(function(n,r,i){if(!n)return;let a,o=n[0];if(t){let e=t.getFullTileRange(o);e&&(a=e.getHeight()-1)}return MC(e,o,n[1],n[2],a)})}function FC(e,t){let n=e.length,r=Array(n);for(let i=0;i<n;++i)r[i]=PC(e[i],t);return IC(r)}function IC(e){return e.length===1?e[0]:(function(t,n,r){return t?e[Wd(tC(t),e.length)](t,n,r):void 0})}var LC=class extends ih{constructor(e){super(),this.projection=mp(e.projection),this.attributions_=RC(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible??!0,this.loading=!1,this.state_=e.state===void 0?`ready`:e.state,this.wrapX_=e.wrapX!==void 0&&e.wrapX,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;let t=this;this.viewPromise_=new Promise(function(e,n){t.viewResolver=e,t.viewRejector=n})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}ready(){let e=this.getState();return e===`ready`?Promise.resolve():e===`error`?Promise.reject(Error(`Source failed to load`)):new Promise((e,t)=>{let n=()=>{let r=this.getState();r===`ready`?(this.un(`change`,n),e()):r===`error`&&(this.un(`change`,n),t(Error(`Source failed to load`)))};this.on(`change`,n)})}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=RC(e),this.changed()}setState(e){this.state_=e,this.changed()}};function RC(e){return e?typeof e==`function`?e:(Array.isArray(e)||(e=[e]),t=>e):null}var zC=class extends LC{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=e.tilePixelRatio===void 0?1:e.tilePixelRatio,this.tileGrid=e.tileGrid===void 0?null:e.tileGrid,this.tileGrid&&zh(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),[256,256]),this.tmpSize=[0,0],this.key_=e.key||nh(this),this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getResolutions(e){let t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,n,r,i,a){return W()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:xC(e)}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){let r=this.getTileGridForProjection(n),i=this.getTilePixelRatio(t),a=zh(r.getTileSize(e),this.tmpSize);return i==1?a:Rh(a,i,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){let n=t===void 0?this.getProjection():t,r=t===void 0&&this.tileGrid||this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(e=SC(r,e,n)),rC(e,r)?e:null}clear(){}refresh(){this.clear(),super.refresh()}},BC=class extends zm{constructor(e,t){super(e),this.tile=t}},VC={TILELOADSTART:`tileloadstart`,TILELOADEND:`tileloadend`,TILELOADERROR:`tileloaderror`},HC=class e extends zC{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===e.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){let t=e.target,n=nh(t),r=t.getState(),i;r==G.LOADING?(this.tileLoadingKeys_[n]=!0,i=VC.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],i=r==G.ERROR?VC.TILELOADERROR:r==G.LOADED?VC.TILELOADEND:void 0),i!=null&&this.dispatchEvent(new BC(i,t))}setTileLoadFunction(e){this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,t===void 0?this.changed():this.setKey(t)}setUrl(e){let t=NC(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;let t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(FC(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}},UC=class extends HC{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:WC,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate===void 0||e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin===void 0?null:e.crossOrigin,this.referrerPolicy=e.referrerPolicy,this.tileClass=e.tileClass===void 0?PS:e.tileClass,this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(e){return this.getProjection()&&e&&!xp(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=`:disable-interpolation`),e}getTileGridForProjection(e){let t=this.getProjection();if(this.tileGrid&&(!t||xp(t,e)))return this.tileGrid;let n=nh(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=xC(e)),this.tileGridForProjection[n]}createTile_(e,t,n,r,i,a){let o=[e,t,n],s=this.getTileCoordForTileUrlFunction(o,i),c=s?this.tileUrlFunction(s,r,i):void 0,l=new this.tileClass(o,c===void 0?G.EMPTY:G.IDLE,c===void 0?``:c,{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return l.key=a,l.addEventListener(U.CHANGE,this.handleTileChange.bind(this)),l}getTile(e,t,n,r,i,a){let o=this.getProjection();if(!o||!i||xp(o,i))return this.getTileInternal(e,t,n,r,o||i);let s=[e,t,n],c=this.getKey(),l=new XS(o,this.getTileGridForProjection(o),i,this.getTileGridForProjection(i),s,this.getTileCoordForTileUrlFunction(s,i),this.getTilePixelRatio(r),this.getGutter(),(e,t,n,r)=>this.getTileInternal(e,t,n,r,o,a),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return l.key=c,l}getTileInternal(e,t,n,r,i,a){let o=this.getKey(),s=eC(this,o,e,t,n);if(a&&a.containsKey(s))return a.get(s);let c=this.createTile_(e,t,n,r,i,o);return a?.set(s,c),c}setRenderReprojectionEdges(e){this.renderReprojectionEdges_!=e&&(this.renderReprojectionEdges_=e,this.changed())}setTileGridForProjection(e,t){let n=mp(e);if(n){let e=nh(n);e in this.tileGridForProjection||(this.tileGridForProjection[e]=t)}}};function WC(e,t){if(Rp){let n=e.getCrossOrigin(),r=`same-origin`,i=`same-origin`;n===`anonymous`||n===``?(r=`cors`,i=`omit`):n===`use-credentials`&&(r=`cors`,i=`include`);let a={mode:r,credentials:i,referrerPolicy:e.getReferrerPolicy()};fetch(t,a).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.blob()}).then(e=>createImageBitmap(e)).then(t=>{let n=e.getImage();n.width=t.width,n.height=t.height,n.getContext(`2d`).drawImage(t,0,0),t.close?.(),n.dispatchEvent(new Event(`load`))}).catch(()=>{e.getImage().dispatchEvent(new Event(`error`))});return}e.getImage().src=t}var GC=class extends UC{constructor(e){e||={};let t=e.projection===void 0?`EPSG:3857`:e.projection,n=e.tileGrid===void 0?wC({extent:DC(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize}):e.tileGrid;super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,referrerPolicy:e.referrerPolicy,interpolate:e.interpolate,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX===void 0||e.wrapX,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter===void 0?0:e.gutter}getGutter(){return this.gutter_}},KC=`units`,qC=[1,2,5],JC=25.4/.28,YC=class extends xy{constructor(e){e||={};let t=document.createElement(`div`);t.style.pointerEvents=`none`,super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;let n=e.className===void 0?e.bar?`ol-scale-bar`:`ol-scale-line`:e.className;this.innerElement_=document.createElement(`div`),this.innerElement_.className=n+`-inner`,this.element.className=n+` `+sh,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth===void 0?64:e.minWidth,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_=``,this.addChangeListener(KC,this.handleUnitsChanged_),this.setUnits(e.units||`metric`),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(KC)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(KC,e)}setDpi(e){this.dpi_=e}updateElement_(){let e=this.viewState_;if(!e){this.renderedVisible_&&=(this.element.style.display=`none`,!1);return}let t=e.center,n=e.projection,r=this.getUnits(),i=r==`degrees`?`degrees`:`m`,a=hp(n,e.resolution,t,i),o=this.minWidth_*(this.dpi_||JC)/JC,s=this.maxWidth_===void 0?void 0:this.maxWidth_*(this.dpi_||JC)/JC,c=o*a,l=``;if(r==`degrees`){let e=rf.degrees;c*=e,c<e/60?(l=`″`,a*=3600):c<e?(l=`′`,a*=60):l=`°`}else if(r==`imperial`)c<.9144?(l=`in`,a/=.0254):c<1609.344?(l=`ft`,a/=.3048):(l=`mi`,a/=1609.344);else if(r==`nautical`)a/=1852,l=`NM`;else if(r==`metric`)c<1e-6?(l=`nm`,a*=1e9):c<.001?(l=`μm`,a*=1e6):c<1?(l=`mm`,a*=1e3):c<1e3?l=`m`:(l=`km`,a/=1e3);else if(r==`us`)c<.9144?(l=`in`,a*=39.37):c<1609.344?(l=`ft`,a/=.30480061):(l=`mi`,a/=1609.3472);else throw Error(`Invalid units`);let u=3*Math.floor(Math.log(o*a)/Math.log(10)),d,f,p,m=0,h,g;for(;;){p=Math.floor(u/3);let e=10**p;if(d=qC[(u%3+3)%3]*e,f=Math.round(d/a),isNaN(f)){this.element.style.display=`none`,this.renderedVisible_=!1;return}if(s!==void 0&&f>=s){d=m,f=h,p=g;break}if(f>=o)break;m=d,h=f,g=p,++u}let _=this.scaleBar_?this.createScaleBar(f,d,l):d.toFixed(p<0?-p:0)+` `+l;this.renderedHTML_!=_&&(this.innerElement_.innerHTML=_,this.renderedHTML_=_),this.renderedWidth_!=f&&(this.innerElement_.style.width=f+`px`,this.renderedWidth_=f),this.renderedVisible_||=(this.element.style.display=``,!0)}createScaleBar(e,t,n){let r=this.getScaleForResolution(),i=r<1?Math.round(1/r).toLocaleString()+` : 1`:`1 : `+Math.round(r).toLocaleString(),a=this.scaleBarSteps_,o=e/a,s=[this.createMarker(`absolute`)];for(let r=0;r<a;++r){let i=r%2==0?`ol-scale-singlebar-odd`:`ol-scale-singlebar-even`;s.push(`<div><div class="ol-scale-singlebar ${i}" style="width: ${o}px;"></div>`+this.createMarker(`relative`)+(r%2==0||a===2?this.createStepText(r,e,!1,t,n):``)+`</div>`)}return s.push(this.createStepText(a,e,!0,t,n)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+i+`</div>`:``)+s.join(``)}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e===`absolute`?3:-10}px;"></div>`}createStepText(e,t,n,r,i){let a=(e===0?0:Math.round(r/this.scaleBarSteps_*e*100)/100)+(e===0?``:` `+i),o=e===0?-3:t/this.scaleBarSteps_*-1,s=e===0?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${o}px;text-align: ${e===0?`left`:`center`};min-width: ${s}px;left: ${n?t+`px`:`unset`};">`+a+`</div>`}getScaleForResolution(){let e=hp(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,`m`),t=this.dpi_||JC;return 1e3/25.4*e*t}render(e){let t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()}},XC=bp([118.46,24.98]),ZC=class{map;constructor(e){this.map=new DS({target:e,view:new my({center:XC,zoom:9.5,minZoom:7,maxZoom:18}),controls:[]})}setTarget(e){this.map.setTarget(e)}addBaseLayer(e){let t=new _C({source:new GC({url:e.url?.startsWith(`http`)||e.url?.includes(`{`)?e.url:Nv.resolve(e.url||e.id),attributions:e.attributions,maxZoom:e.maxZoom??19}),zIndex:e.zIndex});return this.map.addLayer(t),t}removeBaseLayer(e){this.map.removeLayer(e)}addControl(e){let t,n=e.options||{};switch(e.id){case`zoom`:t=new wy(n);break;case`attribution`:t=new Sy({collapsible:!1,collapsed:!1,...n});break;case`scale`:t=new YC({units:`metric`,...n});break;case`rotate`:t=new Cy(n);break;default:console.warn(`[GeoFlow] 未知控件: ${e.id}`);return}this.map.addControl(t)}get view(){return this.map.getView()}dispose(){this.map.setTarget(void 0)}},J={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},QC=[J.FILL],$C=[J.STROKE],ew=[J.BEGIN_PATH],tw=[J.CLOSE_PATH],nw=class extends Mg{constructor(e,t,n,r){super(),this.tolerance=e,this.maxExtent=t,this.pixelRatio=r,this.maxLineWidth=0,this.resolution=n,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(e){let t=this.pixelRatio;return t==1?e:e.map(function(e){return e*t})}appendFlatPointCoordinates(e,t){let n=this.getBufferedMaxExtent(),r=this.tmpCoordinate_,i=this.coordinates,a=i.length;for(let o=0,s=e.length;o<s;o+=t)r[0]=e[o],r[1]=e[o+1],rd(n,r)&&(i[a++]=r[0],i[a++]=r[1]);return a}appendFlatLineCoordinates(e,t,n,r,i,a){let o=this.coordinates,s=o.length,c=this.getBufferedMaxExtent();a&&(t+=r);let l=e[t],u=e[t+1],d=this.tmpCoordinate_,f=!0,p,m,h;for(p=t+r;p<n;p+=r)d[0]=e[p],d[1]=e[p+1],h=od(c,d),h===m?h===Qu.INTERSECTING?(o[s++]=d[0],o[s++]=d[1],f=!1):f=!0:(f&&=(o[s++]=l,o[s++]=u,!1),o[s++]=d[0],o[s++]=d[1]),l=d[0],u=d[1],m=h;return(i&&f||p===t+r)&&(o[s++]=l,o[s++]=u),s}drawCustomCoordinates_(e,t,n,r,i){for(let a=0,o=n.length;a<o;++a){let o=n[a],s=this.appendFlatLineCoordinates(e,t,o,r,!1,!1);i.push(s),t=o}return t}drawCustom(e,t,n,r,i){this.beginGeometry(e,t,i);let a=e.getType(),o=e.getStride(),s=this.coordinates.length,c,l,u,d,f;switch(a){case`MultiPolygon`:c=e.getOrientedFlatCoordinates(),d=[];let t=e.getEndss();f=0;for(let e=0,n=t.length;e<n;++e){let n=[];f=this.drawCustomCoordinates_(c,f,t[e],o,n),d.push(n)}this.instructions.push([J.CUSTOM,s,d,e,n,d_,i]),this.hitDetectionInstructions.push([J.CUSTOM,s,d,e,r||n,d_,i]);break;case`Polygon`:case`MultiLineString`:u=[],c=a==`Polygon`?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),f=this.drawCustomCoordinates_(c,0,e.getEnds(),o,u),this.instructions.push([J.CUSTOM,s,u,e,n,u_,i]),this.hitDetectionInstructions.push([J.CUSTOM,s,u,e,r||n,u_,i]);break;case`LineString`:case`Circle`:c=e.getFlatCoordinates(),l=this.appendFlatLineCoordinates(c,0,c.length,o,!1,!1),this.instructions.push([J.CUSTOM,s,l,e,n,l_,i]),this.hitDetectionInstructions.push([J.CUSTOM,s,l,e,r||n,l_,i]);break;case`MultiPoint`:c=e.getFlatCoordinates(),l=this.appendFlatPointCoordinates(c,o),l>s&&(this.instructions.push([J.CUSTOM,s,l,e,n,l_,i]),this.hitDetectionInstructions.push([J.CUSTOM,s,l,e,r||n,l_,i]));break;case`Point`:c=e.getFlatCoordinates(),this.coordinates.push(c[0],c[1]),l=this.coordinates.length,this.instructions.push([J.CUSTOM,s,l,e,n,void 0,i]),this.hitDetectionInstructions.push([J.CUSTOM,s,l,e,r||n,void 0,i])}this.endGeometry(t)}beginGeometry(e,t,n){this.beginGeometryInstruction1_=[J.BEGIN_GEOMETRY,t,0,e,n],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[J.BEGIN_GEOMETRY,t,0,e,n],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){let e=this.hitDetectionInstructions;e.reverse();let t,n=e.length,r,i,a=-1;for(t=0;t<n;++t)r=e[t],i=r[0],i==J.END_GEOMETRY?a=t:i==J.BEGIN_GEOMETRY&&(r[2]=t,Am(this.hitDetectionInstructions,a,t),a=-1)}fillStyleToState(e,t={}){if(e){let n=e.getColor();t.fillPatternScale=n&&typeof n==`object`&&`src`in n?this.pixelRatio:1,t.fillStyle=Xm(n||`#000`)??void 0}else t.fillStyle=void 0;return t}strokeStyleToState(e,t={}){if(e){t.strokeStyle=Xm(e.getColor()||yh);let n=e.getLineCap();t.lineCap=n===void 0?gh:n;let r=e.getLineDash();t.lineDash=r?r.slice():_h,t.lineDashOffset=e.getLineDashOffset()||0;let i=e.getLineJoin();t.lineJoin=i===void 0?vh:i;let a=e.getWidth();t.lineWidth=a===void 0?1:a;let o=e.getMiterLimit();t.miterLimit=o===void 0?10:o,t.strokeOffset=e.getOffset()??0,t.lineWidth>this.maxLineWidth&&(this.maxLineWidth=t.lineWidth,this.bufferedMaxExtent_=null)}else t.strokeStyle=void 0,t.lineCap=void 0,t.lineDash=null,t.lineDashOffset=void 0,t.lineJoin=void 0,t.lineWidth=void 0,t.miterLimit=void 0,t.strokeOffset=void 0;return t}setFillStrokeStyle(e,t){let n=this.state;this.fillStyleToState(e,n),this.strokeStyleToState(t,n)}createFill(e){let t=e.fillStyle,n=[J.SET_FILL_STYLE,t];return typeof t!=`string`&&n.push(e.fillPatternScale),n}applyStroke(e){this.instructions.push(this.createStroke(e))}createStroke(e){return[J.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,e.lineDash?this.applyPixelRatio(e.lineDash):null,e.lineDashOffset*this.pixelRatio]}updateFillStyle(e,t){let n=e.fillStyle;(n!==void 0&&typeof n!=`string`||e.currentFillStyle!=n)&&(this.instructions.push(t.call(this,e)),e.currentFillStyle=n)}updateStrokeStyle(e,t){let n=e.strokeStyle,r=e.lineCap,i=e.lineDash,a=e.lineDashOffset,o=e.lineJoin,s=e.lineWidth,c=e.miterLimit,l=e.strokeOffset;(e.currentStrokeStyle!=n||e.currentLineCap!=r||i!=e.currentLineDash&&!Mm(e.currentLineDash,i)||e.currentLineDashOffset!=a||e.currentLineJoin!=o||e.currentLineWidth!=s||e.currentMiterLimit!=c||e.currentStrokeOffset!=l)&&(t.call(this,e),e.currentStrokeStyle=n,e.currentLineCap=r,e.currentLineDash=i,e.currentLineDashOffset=a,e.currentLineJoin=o,e.currentLineWidth=s,e.currentMiterLimit=c,e.currentStrokeOffset=l)}endGeometry(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;let t=[J.END_GEOMETRY,e];this.instructions.push(t),this.hitDetectionInstructions.push(t)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=td(this.maxExtent),this.maxLineWidth>0)){let e=this.resolution*(this.maxLineWidth+1)/2;ed(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}},rw=class extends nw{constructor(e,t,n,r){super(e,t,n,r),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(e,t,n){if(!this.image_||this.maxExtent&&!rd(this.maxExtent,e.getFlatCoordinates()))return;this.beginGeometry(e,t,n);let r=e.getFlatCoordinates(),i=e.getStride(),a=this.coordinates.length,o=this.appendFlatPointCoordinates(r,i);this.instructions.push([J.DRAW_IMAGE,a,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([J.DRAW_IMAGE,a,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(t)}drawMultiPoint(e,t,n){if(!this.image_)return;this.beginGeometry(e,t,n);let r=e.getFlatCoordinates(),i=[];for(let t=0,n=r.length;t<n;t+=e.getStride())(!this.maxExtent||rd(this.maxExtent,r.slice(t,t+2)))&&i.push(r[t],r[t+1]);let a=this.coordinates.length,o=this.appendFlatPointCoordinates(i,2);this.instructions.push([J.DRAW_IMAGE,a,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([J.DRAW_IMAGE,a,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(t)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(e,t){let n=e.getAnchor(),r=e.getSize(),i=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=n[0],this.anchorY_=n[1],this.hitDetectionImage_=e.getHitDetectionImage(),this.image_=e.getImage(this.pixelRatio),this.height_=r[1],this.opacity_=e.getOpacity(),this.originX_=i[0],this.originY_=i[1],this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=r[0],this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=t}},iw=class extends nw{constructor(e,t,n,r){super(e,t,n,r)}drawFlatCoordinates_(e,t,n,r,i){let a=this.coordinates.length,o=this.appendFlatLineCoordinates(e,t,n,r,!1,!1);return this.instructions.push([J.MOVE_TO_LINE_TO,a,o,i*this.pixelRatio]),this.hitDetectionInstructions.push([J.MOVE_TO_LINE_TO,a,o,i]),n}drawLineString(e,t,n){let r=this.state,i=r.strokeStyle,a=r.lineWidth,o=r.strokeOffset;if(i===void 0||a===void 0)return;this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(e,t,n),this.hitDetectionInstructions.push([J.SET_STROKE_STYLE,yh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,_h,0],ew);let s=e.getFlatCoordinates(),c=e.getStride();this.drawFlatCoordinates_(s,0,s.length,c,o),this.hitDetectionInstructions.push($C),this.endGeometry(t)}drawMultiLineString(e,t,n){let r=this.state,i=r.strokeStyle,a=r.lineWidth,o=r.strokeOffset;if(i===void 0||a===void 0)return;this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(e,t,n),this.hitDetectionInstructions.push([J.SET_STROKE_STYLE,yh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,_h,0],ew);let s=e.getEnds(),c=e.getFlatCoordinates(),l=e.getStride(),u=0;for(let e=0,t=s.length;e<t;++e)u=this.drawFlatCoordinates_(c,u,s[e],l,o);this.hitDetectionInstructions.push($C),this.endGeometry(t)}finish(){let e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push($C),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push($C),e.lastStroke=this.coordinates.length),e.lastStroke=0,super.applyStroke(e),this.instructions.push(ew)}},aw=class extends nw{constructor(e,t,n,r){super(e,t,n,r)}drawFlatCoordinatess_(e,t,n,r,i){let a=this.state,o=a.fillStyle!==void 0,s=a.strokeStyle!==void 0,c=n.length;this.instructions.push(ew),this.hitDetectionInstructions.push(ew);for(let a=0;a<c;++a){let o=n[a],c=this.coordinates.length,l=this.appendFlatLineCoordinates(e,t,o,r,!0,!s);this.instructions.push([J.MOVE_TO_LINE_TO,c,l,i*this.pixelRatio,!0]),this.hitDetectionInstructions.push([J.MOVE_TO_LINE_TO,c,l,i,!0]),s&&(this.instructions.push(tw),this.hitDetectionInstructions.push(tw)),t=o}return o&&(this.instructions.push(QC),this.hitDetectionInstructions.push(QC)),s&&(this.instructions.push($C),this.hitDetectionInstructions.push($C)),t}drawCircle(e,t,n){let r=this.state,i=r.fillStyle,a=r.strokeStyle,o=r.strokeOffset;if(i===void 0&&a===void 0||this.handleStrokeOffset_(()=>this.drawCircle(e,t,n)))return;this.setFillStrokeStyles_(),this.beginGeometry(e,t,n),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([J.SET_FILL_STYLE,hh]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([J.SET_STROKE_STYLE,yh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,_h,0]);let s=e.getFlatCoordinates(),c=e.getStride(),l=this.coordinates.length;this.appendFlatLineCoordinates(s,0,s.length,c,!1,!1);let u=[J.CIRCLE,l,o];this.instructions.push(ew,u),this.hitDetectionInstructions.push(ew,u),r.fillStyle!==void 0&&(this.instructions.push(QC),this.hitDetectionInstructions.push(QC)),r.strokeStyle!==void 0&&(this.instructions.push($C),this.hitDetectionInstructions.push($C)),this.endGeometry(t)}drawPolygon(e,t,n){let r=this.state,i=r.fillStyle,a=r.strokeStyle,o=r.strokeOffset;if(i===void 0&&a===void 0||this.handleStrokeOffset_(()=>this.drawPolygon(e,t,n)))return;this.setFillStrokeStyles_(),this.beginGeometry(e,t,n),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([J.SET_FILL_STYLE,hh]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([J.SET_STROKE_STYLE,yh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,_h,0]);let s=e.getEnds(),c=e.getOrientedFlatCoordinates(),l=e.getStride();this.drawFlatCoordinatess_(c,0,s,l,o),this.endGeometry(t)}drawMultiPolygon(e,t,n){let r=this.state,i=r.fillStyle,a=r.strokeStyle,o=r.strokeOffset;if(i===void 0&&a===void 0||this.handleStrokeOffset_(()=>this.drawMultiPolygon(e,t,n)))return;this.setFillStrokeStyles_(),this.beginGeometry(e,t,n),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([J.SET_FILL_STYLE,hh]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([J.SET_STROKE_STYLE,yh,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,_h,0]);let s=e.getEndss(),c=e.getOrientedFlatCoordinates(),l=e.getStride(),u=0;for(let e=0,t=s.length;e<t;++e)u=this.drawFlatCoordinatess_(c,u,s[e],l,o);this.endGeometry(t)}finish(){this.reverseHitDetectionInstructions(),this.state=null;let e=this.tolerance;if(e!==0){let t=this.coordinates;for(let n=0,r=t.length;n<r;++n)t[n]=O_(t[n],e)}return super.finish()}setFillStrokeStyles_(){let e=this.state;this.updateFillStyle(e,this.createFill),this.updateStrokeStyle(e,this.applyStroke)}handleStrokeOffset_(e){let t=this.state,n=t.fillStyle,r=t.strokeStyle,i=t.strokeOffset;return Math.abs(i)>0&&n!==void 0&&r!==void 0&&(t.strokeStyle=void 0,t.strokeOffset=0,e(),t.fillStyle=void 0,t.strokeStyle=r,t.strokeOffset=i,e(),t.fillStyle=n,!0)}},ow=0,sw=1;function cw(e,t,n,r,i,a,o,s){let c=o-i,l=s-a,u=0,d=1;if(c===0){if(i<e||i>n)return!1}else{let t=(e-i)/c,r=(n-i)/c;if(t>r){let e=t;t=r,r=e}if(t>u&&(u=t),r<d&&(d=r),u>d)return!1}if(l===0){if(a<t||a>r)return!1}else{let e=(t-a)/l,n=(r-a)/l;if(e>n){let t=e;e=n,n=t}if(e>u&&(u=e),n<d&&(d=n),u>d)return!1}return ow=u,sw=d,!0}function lw(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=r[3],c=[],l=[],u=!1,d,f,p=0;for(let r=0,m=t.length;r<m;++r){let m=t[r],h=e[p],g=e[p+1],_=!1;for(let t=p+n;t<m;t+=n){let n=e[t],r=e[t+1];if(cw(i,a,o,s,h,g,n,r)){let e=n-h,t=r-g,i=h+ow*e,a=g+ow*t,o=h+sw*e,s=g+sw*t;u&&_&&i===d&&a===f?c.push(o,s):(u&&l.push(c.length),c.push(i,a,o,s),u=!0),d=o,f=s,_=!0}h=n,g=r}p=m}return u&&l.push(c.length),{flatCoordinates:c,ends:l}}function uw(e,t,n,r,i){let a=[],o=n,s=0,c=t.slice(n,2);for(;s<e&&o+i<r;){let[n,r]=c.slice(-2),l=t[o+i],u=t[o+i+1],d=Math.sqrt((l-n)*(l-n)+(u-r)*(u-r));if(s+=d,s>=e){let t=(e-s+d)/d,f=Gd(n,l,t),p=Gd(r,u,t);c.push(f,p),a.push(c),c=[f,p],s==e&&(o+=i),s=0}else if(s<e)c.push(t[o+i],t[o+i+1]),o+=i;else{let e=d-s,t=Gd(n,l,e/d),f=Gd(r,u,e/d);c.push(t,f),a.push(c),c=[t,f],s=0,o+=i}}return s>0&&a.push(c),a}function dw(e,t,n,r,i){let a=n,o=n,s=0,c=0,l=n,u,d,f,p,m,h,g,_,v,y;for(d=n;d<r;d+=i){let n=t[d],r=t[d+1];m!==void 0&&(v=n-m,y=r-h,p=Math.sqrt(v*v+y*y),g!==void 0&&(c+=f,u=Math.acos((g*v+_*y)/(f*p)),u>e&&(c>s&&(s=c,a=l,o=d),c=0,l=d-i)),f=p,g=v,_=y),m=n,h=r}return c+=p,c>s?[l,d]:[a,o]}var fw={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},pw={Circle:aw,Default:nw,Image:rw,LineString:iw,Polygon:aw,Text:class extends nw{constructor(e,t,n,r){super(e,t,n,r),this.labels_=null,this.text_=``,this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textKeepUpright_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[hh]={fillStyle:hh},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_=``,this.fillKey_=``,this.strokeKey_=``,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}finish(){let e=super.finish();return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e}drawText(e,t,n){let r=this.textFillState_,i=this.textStrokeState_,a=this.textState_;if(this.text_===``||!a||!r&&!i)return;let o=this.coordinates,s=o.length,c=e.getType(),l=null,u=e.getStride();if(a.placement===`line`&&(c==`LineString`||c==`MultiLineString`||c==`Polygon`||c==`MultiPolygon`)){let r=e.getExtent();if(!jd(this.maxExtent,r))return;let i;if(l=e.getFlatCoordinates(),c==`LineString`)i=[l.length];else if(c==`MultiLineString`)i=e.getEnds();else if(c==`Polygon`)i=e.getEnds().slice(0,1);else if(c==`MultiPolygon`){let t=e.getEndss();i=[];for(let e=0,n=t.length;e<n;++e)i.push(t[e][0])}if((c==`LineString`||c==`MultiLineString`)&&!id(this.getBufferedMaxExtent(),r)){let e=lw(l,i,u,this.getBufferedMaxExtent());if(l=e.flatCoordinates,i=e.ends,u=2,i.length===0)return}this.beginGeometry(e,t,n);let d=a.repeat,f=d?void 0:a.textAlign,p=0;for(let e=0,t=i.length;e<t;++e){let t;t=d?uw(d*this.resolution,l,p,i[e],u):[l.slice(p,i[e])];for(let n=0,r=t.length;n<r;++n){let r=t[n],c=0,l=r.length;if(f==null){let e=dw(a.maxAngle,r,0,r.length,2);c=e[0],l=e[1]}for(let e=c;e<l;e+=u)o.push(r[e],r[e+1]);let d=o.length;p=i[e],this.drawChars_(s,d),s=d}}this.endGeometry(t)}else{let r=a.overflow?null:[];switch(c){case`Point`:case`MultiPoint`:l=e.getFlatCoordinates();break;case`LineString`:l=e.getFlatMidpoint();break;case`Circle`:l=e.getCenter();break;case`MultiLineString`:l=e.getFlatMidpoints(),u=2;break;case`Polygon`:l=e.getFlatInteriorPoint(),a.overflow||r.push(l[2]/this.resolution),u=3;break;case`MultiPolygon`:let t=e.getFlatInteriorPoints();l=[];for(let e=0,n=t.length;e<n;e+=3)a.overflow||r.push(t[e+2]/this.resolution),l.push(t[e],t[e+1]);if(l.length===0)return;u=2}let i=this.appendFlatPointCoordinates(l,u);if(i===s)return;if(r&&(i-s)/2!==l.length/u){let e=s/2;r=r.filter((t,n)=>{let r=o[(e+n)*2]===l[n*u]&&o[(e+n)*2+1]===l[n*u+1];return r||--e,r})}this.saveTextStates_();let d=a.backgroundFill?this.createFill(this.fillStyleToState(a.backgroundFill)):null,f=a.backgroundStroke?this.createStroke(this.strokeStyleToState(a.backgroundStroke)):null;this.beginGeometry(e,t,n);let p=a.padding;if(p!=Sh&&(a.scale[0]<0||a.scale[1]<0)){let e=a.padding[0],t=a.padding[1],n=a.padding[2],r=a.padding[3];a.scale[0]<0&&(t=-t,r=-r),a.scale[1]<0&&(e=-e,n=-n),p=[e,t,n,r]}let m=this.pixelRatio;this.instructions.push([J.DRAW_IMAGE,s,i,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterMode_,this.declutterImageWithText_,p==Sh?Sh:p.map(function(e){return e*m}),d,f,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,r]);let h=1/m,g=d?d.slice(0):null;g&&(g[1]=hh),this.hitDetectionInstructions.push([J.DRAW_IMAGE,s,i,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[h,h],NaN,this.declutterMode_,this.declutterImageWithText_,p,g,f,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?hh:this.fillKey_,this.textOffsetX_,this.textOffsetY_,r]),this.endGeometry(t)}}saveTextStates_(){let e=this.textStrokeState_,t=this.textState_,n=this.textFillState_,r=this.strokeKey_;e&&(r in this.strokeStates||(this.strokeStates[r]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));let i=this.textKey_;i in this.textStates||(this.textStates[i]={font:t.font,textAlign:t.textAlign||`center`,justify:t.justify,textBaseline:t.textBaseline||`middle`,scale:t.scale});let a=this.fillKey_;n&&(a in this.fillStates||(this.fillStates[a]={fillStyle:n.fillStyle}))}drawChars_(e,t){let n=this.textStrokeState_,r=this.textState_,i=this.strokeKey_,a=this.textKey_,o=this.fillKey_;this.saveTextStates_();let s=this.pixelRatio,c=fw[r.textBaseline],l=this.textOffsetX_*s,u=this.textOffsetY_*s,d=this.text_,f=n?n.lineWidth*Math.abs(r.scale[0])/2:0;this.instructions.push([J.DRAW_CHARS,e,t,c,r.overflow,o,r.maxAngle,s,u,i,f*s,d,a,1,this.declutterMode_,this.textKeepUpright_,l]),this.hitDetectionInstructions.push([J.DRAW_CHARS,e,t,c,r.overflow,o&&hh,r.maxAngle,s,u,i,f*s,d,a,1/s,this.declutterMode_,this.textKeepUpright_,l])}setTextStyle(e,t){let n,r,i;if(!e)this.text_=``;else{let t=e.getFill();t?(r=this.textFillState_,r||(r={},this.textFillState_=r),r.fillStyle=Xm(t.getColor()||`#000`)):(r=null,this.textFillState_=r);let a=e.getStroke();if(!a)i=null,this.textStrokeState_=i;else{i=this.textStrokeState_,i||(i={},this.textStrokeState_=i);let e=a.getLineDash(),t=a.getLineDashOffset(),n=a.getWidth(),r=a.getMiterLimit();i.lineCap=a.getLineCap()||`round`,i.lineDash=e?e.slice():_h,i.lineDashOffset=t===void 0?0:t,i.lineJoin=a.getLineJoin()||`round`,i.lineWidth=n===void 0?1:n,i.miterLimit=r===void 0?10:r,i.strokeStyle=Xm(a.getColor()||`#000`)}n=this.textState_;let o=e.getFont()||`10px sans-serif`;kh(o);let s=e.getScaleArray();n.overflow=e.getOverflow(),n.font=o,n.maxAngle=e.getMaxAngle(),n.placement=e.getPlacement(),n.textAlign=e.getTextAlign(),n.repeat=e.getRepeat(),n.justify=e.getJustify(),n.textBaseline=e.getTextBaseline()||`middle`,n.backgroundFill=e.getBackgroundFill(),n.backgroundStroke=e.getBackgroundStroke(),n.padding=e.getPadding()||Sh,n.scale=s===void 0?[1,1]:s;let c=e.getOffsetX(),l=e.getOffsetY(),u=e.getRotateWithView(),d=e.getKeepUpright(),f=e.getRotation();this.text_=e.getText()||``,this.textOffsetX_=c===void 0?0:c,this.textOffsetY_=l===void 0?0:l,this.textRotateWithView_=u!==void 0&&u,this.textKeepUpright_=d===void 0||d,this.textRotation_=f===void 0?0:f,this.strokeKey_=i?(typeof i.strokeStyle==`string`?i.strokeStyle:nh(i.strokeStyle))+i.lineCap+i.lineDashOffset+`|`+i.lineWidth+i.lineJoin+i.miterLimit+`[`+i.lineDash.join()+`]`:``,this.textKey_=n.font+n.scale+(n.textAlign||`?`)+(n.repeat||`?`)+(n.justify||`?`)+(n.textBaseline||`?`),this.fillKey_=r&&r.fillStyle?typeof r.fillStyle==`string`?r.fillStyle:`|`+nh(r.fillStyle):``}this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=t}}},mw=class{constructor(e,t,n,r){this.tolerance_=e,this.maxExtent_=t,this.pixelRatio_=r,this.resolution_=n,this.buildersByZIndex_={}}finish(){let e={};for(let t in this.buildersByZIndex_){e[t]=e[t]||{};let n=this.buildersByZIndex_[t];for(let r in n){let i=n[r].finish();e[t][r]=i}}return e}getBuilder(e,t){let n=e===void 0?`0`:e.toString(),r=this.buildersByZIndex_[n];r===void 0&&(r={},this.buildersByZIndex_[n]=r);let i=r[t];if(i===void 0){let e=pw[t];i=new e(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),r[t]=i}return i}},hw;function gw(){return hw||=new Intl.Segmenter(void 0,{granularity:`grapheme`}),hw}function _w(e,t,n,r,i,a,o,s,c,l,u,d,f=!0){let p=e[t],m=e[t+1],h=0,g=0,_=0,v=0;function y(){h=p,g=m,t+=r,p=e[t],m=e[t+1],v+=_,_=Math.sqrt((p-h)*(p-h)+(m-g)*(m-g))}do y();while(t<n-r&&v+_<a);let b=_===0?0:(a-v)/_,x=Gd(h,p,b),S=Gd(g,m,b),C=t-r,w=v,T=a+s*c(l,i,u);for(;t<n-r&&v+_<T;)y();b=_===0?0:(T-v)/_;let E=Gd(h,p,b),D=Gd(g,m,b),ee=!1;if(f){if(d){let e=[x,S,E,D];mg(e,0,4,2,d,e,e),ee=e[0]>e[2]}else ee=x>E}let O=Math.PI,te=[],ne=C+r===t;t=C,_=0,v=w,p=e[t],m=e[t+1];let re;if(ne)return y(),re=Math.atan2(m-g,p-h),ee&&(re+=re>0?-O:O),te[0]=[(E+x)/2,(D+S)/2,(T-a)/2,re,i],te;i=i.replace(/\n/g,` `);let ie=Array.from(gw().segment(i),e=>e.segment);for(let e=0,i=ie.length;e<i;){y();let d=Math.atan2(m-g,p-h);if(ee&&(d+=d>0?-O:O),re!==void 0){let e=d-re;if(e+=e>O?-2*O:e<-O?2*O:0,Math.abs(e)>o)return null}re=d;let f=e,x=0;for(;e<i;++e){let o=s*c(l,ie[ee?i-e-1:e],u);if(t+r<n&&v+_<a+x+o/2)break;x+=o}if(e===f)continue;let S=(ee?ie.slice(i-e,i-f):ie.slice(f,e)).join(``);b=_===0?0:(a+x/2-v)/_;let C=Gd(h,p,b),w=Gd(g,m,b);te.push([C,w,x/2,d,S]),a+=x}return te}var vw=sd(),yw=[],bw=[],xw=[],Sw=[];function Cw(e){return e[3].declutterBox}var ww=RegExp(`[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]`);function Tw(e,t){return t===`start`?t=ww.test(e)?`right`:`left`:t===`end`&&(t=ww.test(e)?`left`:`right`),fw[t]}function Ew(e,t,n){return n>0&&e.push(`
`,``),e.push(t,``),e}function Dw(e,t,n){return n%2==0&&(e+=t),e}var Ow=class{constructor(e,t,n,r,i){this.overlaps=n,this.pixelRatio=t,this.resolution=e,this.alignAndScaleFill_,this.instructions=r.instructions,this.coordinates=r.coordinates,this.coordinateCache_={},this.renderedTransform_=ng(),this.hitDetectionInstructions=r.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=r.fillStates||{},this.strokeStates=r.strokeStates||{},this.textStates=r.textStates||{},this.widths_={},this.labels_={},this.zIndexContext_=i?new iC:null}getZIndexContext(){return this.zIndexContext_}createLabel(e,t,n,r){let i=e+t+n+r;if(this.labels_[i])return this.labels_[i];let a=r?this.strokeStates[r]:null,o=n?this.fillStates[n]:null,s=this.textStates[t],c=this.pixelRatio,l=[s.scale[0]*c,s.scale[1]*c],u=s.justify?fw[s.justify]:Tw(Array.isArray(e)?e[0]:e,s.textAlign||`center`),d=r&&a.lineWidth?a.lineWidth:0,f=Array.isArray(e)?e:String(e).split(`
`).reduce(Ew,[]),{width:p,height:m,widths:h,heights:g,lineWidths:_}=Ph(s,f),v=p+d,y=[],b=(v+2)*l[0],x=(m+d)*l[1],S={width:b<0?Math.floor(b):Math.ceil(b),height:x<0?Math.floor(x):Math.ceil(x),contextInstructions:y};(l[0]!=1||l[1]!=1)&&y.push(`scale`,l),r&&(y.push(`strokeStyle`,a.strokeStyle),y.push(`lineWidth`,d),y.push(`lineCap`,a.lineCap),y.push(`lineJoin`,a.lineJoin),y.push(`miterLimit`,a.miterLimit),y.push(`setLineDash`,[a.lineDash]),y.push(`lineDashOffset`,a.lineDashOffset)),n&&y.push(`fillStyle`,o.fillStyle),y.push(`textBaseline`,`middle`),y.push(`textAlign`,`center`);let C=.5-u,w=u*v+C*d,T=[],E=[],D=0,ee=0,O=0,te=0,ne;for(let e=0,t=f.length;e<t;e+=2){let t=f[e];if(t===`
`){ee+=D,D=0,w=u*v+C*d,++te;continue}let i=f[e+1]||s.font;i!==ne&&(r&&T.push(`font`,i),n&&E.push(`font`,i),ne=i),D=Math.max(D,g[O]);let a=[t,w+C*h[O]+u*(h[O]-_[te]),.5*(d+D)+ee];w+=h[O],r&&T.push(`strokeText`,a),n&&E.push(`fillText`,a),++O}return Array.prototype.push.apply(y,T),Array.prototype.push.apply(y,E),this.labels_[i]=S,S}replayTextBackground_(e,t,n,r,i,a,o){e.beginPath(),e.moveTo.apply(e,t),e.lineTo.apply(e,n),e.lineTo.apply(e,r),e.lineTo.apply(e,i),e.lineTo.apply(e,t),a&&(this.alignAndScaleFill_=a[2],e.fillStyle=a[1],this.fill_(e)),o&&(this.setStrokeStyle_(e,o),e.stroke())}calculateImageOrLabelDimensions_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){o*=d[0],s*=d[1];let g=n-o,_=r-s,v=i+c>e?e-c:i,y=a+l>t?t-l:a,b=p[3]+v*d[0]+p[1],x=p[0]+y*d[1]+p[2],S=g-p[3],C=_-p[0];(m||u!==0)&&(yw[0]=S,Sw[0]=S,yw[1]=C,bw[1]=C,bw[0]=S+b,xw[0]=bw[0],xw[1]=C+x,Sw[1]=xw[1]);let w;return u===0?cd(Math.min(S,S+b),Math.min(C,C+x),Math.max(S,S+b),Math.max(C,C+x),vw):(w=og(ng(),n,r,1,1,u,-n,-r),ag(w,yw),ag(w,bw),ag(w,xw),ag(w,Sw),cd(Math.min(yw[0],bw[0],xw[0],Sw[0]),Math.min(yw[1],bw[1],xw[1],Sw[1]),Math.max(yw[0],bw[0],xw[0],Sw[0]),Math.max(yw[1],bw[1],xw[1],Sw[1]),vw)),f&&(g=Math.round(g),_=Math.round(_)),{drawImageX:g,drawImageY:_,drawImageW:v,drawImageH:y,originX:c,originY:l,declutterBox:{minX:vw[0],minY:vw[1],maxX:vw[2],maxY:vw[3],value:h},canvasTransform:w,scale:d}}replayImageOrLabel_(e,t,n,r,i,a,o){let s=!!(a||o),c=r.declutterBox,l=o?o[2]*r.scale[0]/2:0;return c.minX-l<=t[0]&&c.maxX+l>=0&&c.minY-l<=t[1]&&c.maxY+l>=0&&(s&&this.replayTextBackground_(e,yw,bw,xw,Sw,a,o),Fh(e,r.canvasTransform,i,n,r.originX,r.originY,r.drawImageW,r.drawImageH,r.drawImageX,r.drawImageY,r.scale)),!0}fill_(e){let t=this.alignAndScaleFill_;if(t){let n=ag(this.renderedTransform_,[0,0]),r=512*this.pixelRatio;e.save(),e.translate(n[0]%r,n[1]%r),t!==1&&e.scale(t,t)}e.fill(),t&&e.restore()}setStrokeStyle_(e,t){e.strokeStyle=t[1],t[1]&&(e.lineWidth=t[2],e.lineCap=t[3],e.lineJoin=t[4],e.miterLimit=t[5],e.lineDashOffset=t[7],e.setLineDash(t[6]))}drawLabelWithPointPlacement_(e,t,n,r){let i=this.textStates[t],a=this.createLabel(e,t,r,n),o=this.strokeStates[n],s=this.pixelRatio,c=Tw(Array.isArray(e)?e[0]:e,i.textAlign||`center`),l=fw[i.textBaseline||`middle`],u=o&&o.lineWidth?o.lineWidth:0;return{label:a,anchorX:c*(a.width/s-2*i.scale[0])+2*(.5-c)*u,anchorY:l*a.height/s+2*(.5-l)*u}}execute_(e,t,n,r,i,a,o,s){let c=this.zIndexContext_,l;this.pixelCoordinates_&&Mm(n,this.renderedTransform_)?l=this.pixelCoordinates_:(this.pixelCoordinates_||=[],l=pg(this.coordinates,0,this.coordinates.length,2,n,this.pixelCoordinates_),ig(this.renderedTransform_,n));let u=0,d=r.length,f=0,p,m=[],h,g,_,v,y,b,x,S,C,w,T,E,D,ee=0,O=0,te=this.coordinateCache_,ne=this.viewRotation_,re=Math.round(Math.atan2(-n[1],n[0])*0xe8d4a51000)/0xe8d4a51000,ie={context:e,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:ne},ae=this.instructions!=r||this.overlaps?0:200,oe,se,ce,le;for(;u<d;){let n=r[u];switch(n[0]){case J.BEGIN_GEOMETRY:oe=n[1],le=n[3],oe.getGeometry()?o!==void 0&&!jd(o,le.getExtent())?u=n[2]+1:++u:u=n[2],c&&(c.zIndex=n[4]);break;case J.BEGIN_PATH:ee>ae&&(this.fill_(e),ee=0),O>ae&&(e.stroke(),O=0),!ee&&!O&&(e.beginPath(),y=NaN,b=NaN),++u;break;case J.CIRCLE:f=n[1],_=n[2]??0;let r=l[f],d=l[f+1],ue=l[f+2]-_,de=l[f+3]-_,fe=ue-r,pe=de-d,me=Math.sqrt(fe*fe+pe*pe);e.moveTo(r+me,d),e.arc(r,d,me,0,2*Math.PI,!0),++u;break;case J.CLOSE_PATH:e.closePath(),++u;break;case J.CUSTOM:f=n[1],p=n[2];let he=n[3],ge=n[4],_e=n[5];ie.geometry=he,ie.feature=oe,u in te||(te[u]=[]);let ve=te[u];_e?_e(l,f,p,2,ve):(ve[0]=l[f],ve[1]=l[f+1],ve.length=2),c&&(c.zIndex=n[6]),ge(ve,ie),++u;break;case J.DRAW_IMAGE:f=n[1],p=n[2],C=n[3],h=n[4],g=n[5];let ye=n[6],be=n[7],xe=n[8],Se=n[9],Ce=n[10],we=n[11],Te=n[12],Ee=n[13];v=n[14]||`declutter`;let De=n[15];if(!C&&n.length>=20){w=n[19],T=n[20],E=n[21],D=n[22];let e=this.drawLabelWithPointPlacement_(w,T,E,D);C=e.label,n[3]=C;let t=n[23];h=(e.anchorX-t)*this.pixelRatio,n[4]=h;let r=n[24];g=(e.anchorY-r)*this.pixelRatio,n[5]=g,ye=C.height,n[6]=ye,Ee=C.width,n[13]=Ee}let Oe;n.length>25&&(Oe=n[25]);let ke,Ae,je;n.length>17?(ke=n[16],Ae=n[17],je=n[18]):(ke=Sh,Ae=null,je=null),Ce&&re?we+=ne:!Ce&&!re&&(we-=ne);let Me=0;for(;f<p;f+=2){if(Oe&&Oe[Me++]<Ee/this.pixelRatio)continue;let n=this.calculateImageOrLabelDimensions_(C.width,C.height,l[f],l[f+1],Ee,ye,h,g,xe,Se,we,Te,i,ke,!!Ae||!!je,oe),r=[e,t,C,n,be,Ae,je];if(s){let e,t,i;if(De){let n=p-f;if(!De[n]){De[n]={args:r,declutterMode:v};continue}let a=De[n];e=a.args,t=a.declutterMode,delete De[n],i=Cw(e)}let a,o;if(e&&(t!==`declutter`||!s.collides(i))&&(a=!0),(v!==`declutter`||!s.collides(n.declutterBox))&&(o=!0),t===`declutter`&&v===`declutter`){let e=a&&o;a=e,o=e}a&&(t!==`none`&&s.insert(i),this.replayImageOrLabel_.apply(this,e)),o&&(v!==`none`&&s.insert(n.declutterBox),this.replayImageOrLabel_.apply(this,r))}else this.replayImageOrLabel_.apply(this,r)}++u;break;case J.DRAW_CHARS:let Ne=n[1],Pe=n[2],k=n[3],Fe=n[4];D=n[5];let Ie=n[6],Le=n[7],Re=n[8];E=n[9];let ze=n[10];w=n[11],Array.isArray(w)&&(w=w.reduce(Dw,``)),T=n[12];let Be=[n[13],n[13]];v=n[14]||`declutter`;let Ve=n[15],He=n[16],Ue=this.textStates[T],We=Ue.font,Ge=[Ue.scale[0]*Le,Ue.scale[1]*Le],Ke;We in this.widths_?Ke=this.widths_[We]:(Ke={},this.widths_[We]=Ke);let qe=T_(l,Ne,Pe,2),Je=Math.abs(Ge[0])*Nh(We,w,Ke);if(Fe||Je<=qe){let n=this.textStates[T].textAlign,r=(qe-Je)*Tw(w,n),i=_w(l,Ne,Pe,2,w,r,Ie,Math.abs(Ge[0]),Nh,We,Ke,re?0:this.viewRotation_,Ve);drawChars:if(i){let n=[],r,a,o,c,l;if(E)for(r=0,a=i.length;r<a;++r){l=i[r],o=l[4],c=this.createLabel(o,T,``,E),h=l[2]+(Ge[0]<0?-ze:ze)-He,g=k*c.height+(.5-k)*2*ze*Ge[1]/Ge[0]-Re;let a=this.calculateImageOrLabelDimensions_(c.width,c.height,l[0],l[1],c.width,c.height,h,g,0,0,l[3],Be,!1,Sh,!1,oe);if(s&&v===`declutter`&&s.collides(a.declutterBox))break drawChars;n.push([e,t,c,a,1,null,null])}if(D)for(r=0,a=i.length;r<a;++r){l=i[r],o=l[4],c=this.createLabel(o,T,D,``),h=l[2]-He,g=k*c.height-Re;let a=this.calculateImageOrLabelDimensions_(c.width,c.height,l[0],l[1],c.width,c.height,h,g,0,0,l[3],Be,!1,Sh,!1,oe);if(s&&v===`declutter`&&s.collides(a.declutterBox))break drawChars;n.push([e,t,c,a,1,null,null])}s&&v!==`none`&&s.load(n.map(Cw));for(let e=0,t=n.length;e<t;++e)this.replayImageOrLabel_.apply(this,n[e])}}++u;break;case J.END_GEOMETRY:if(a!==void 0){oe=n[1];let e=a(oe,le,v);if(e)return e}++u;break;case J.FILL:ae?ee++:this.fill_(e),++u;break;case J.MOVE_TO_LINE_TO:f=n[1],p=n[2],_=n[3];let Ye,Xe,Ze;if(_){let e=(n[4]??!1)||Math.abs(l[f]-l[p-2])<1e-6&&Math.abs(l[f+1]-l[p-1])<1e-6;kg(l,f,p,2,_,e,m),jg(m,2,e),Ye=m,Xe=0,Ze=Ye.length}else Ye=l,Xe=f,Ze=p;se=Ye[Xe],ce=Ye[Xe+1],e.moveTo(se,ce),y=se+.5|0,b=ce+.5|0;for(let t=Xe+2;t<Ze;t+=2)se=Ye[t],ce=Ye[t+1],x=se+.5|0,S=ce+.5|0,(t==Ze-2||x!==y||S!==b)&&(e.lineTo(se,ce),y=x,b=S);++u;break;case J.SET_FILL_STYLE:this.alignAndScaleFill_=n[2],ee?(this.fill_(e),ee=0,O&&=(e.stroke(),0)):O&&n[1]&&(e.stroke(),O=0),e.fillStyle=n[1],++u;break;case J.SET_STROKE_STYLE:ee&&n[1]&&(this.fill_(e),ee=0),O&&=(e.stroke(),0),this.setStrokeStyle_(e,n),++u;break;case J.STROKE:ae?O++:e.stroke(),++u;break;default:++u}}ee&&this.fill_(e),O&&e.stroke()}execute(e,t,n,r,i,a){this.viewRotation_=r,this.execute_(e,t,n,this.instructions,i,void 0,void 0,a)}executeHitDetection(e,t,n,r,i){return this.viewRotation_=n,this.execute_(e,[e.canvas.width,e.canvas.height],t,this.hitDetectionInstructions,!0,r,i)}},kw=[`Polygon`,`Circle`,`LineString`,`Image`,`Text`,`Default`],Aw=[`Image`,`Text`],jw=kw.filter(e=>!Aw.includes(e)),Mw=!1,Nw=!1;function Pw(){let e=0,t=t=>{let n=Vp(1,1,null,{willReadFrequently:t}),r=0,i=performance.now();for(;performance.now()-i<50;++r)n.fillStyle=`rgba(255,0,${r%256},1)`,n.fillRect(0,0,1,1),n.getImageData(0,0,1,1);return e=r>e?r:e,r};Mw={[t(!0)]:!0,[t(!1)]:!1,[t(void 0)]:void 0}[e],Nw=!0}var Fw=class{constructor(e,t,n,r,i,a,o){this.maxExtent_=e,this.overlaps_=r,this.pixelRatio_=n,this.resolution_=t,this.renderBuffer_=a,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=ng(),this.renderedContext_=null,this.deferredZIndexContexts_={},this.createExecutors_(i,o)}clip(e,t){let n=this.getClipCoords(t);e.beginPath(),e.moveTo(n[0],n[1]),e.lineTo(n[2],n[3]),e.lineTo(n[4],n[5]),e.lineTo(n[6],n[7]),e.clip()}createExecutors_(e,t){for(let n in e){let r=this.executorsByZIndex_[n];r===void 0&&(r={},this.executorsByZIndex_[n]=r);let i=e[n];for(let e in i){let n=i[e];r[e]=new Ow(this.resolution_,this.pixelRatio_,this.overlaps_,n,t)}}}hasExecutors(e){for(let t in this.executorsByZIndex_){let n=this.executorsByZIndex_[t];for(let t=0,r=e.length;t<r;++t)if(e[t]in n)return!0}return!1}forEachFeatureAtCoordinate(e,t,n,r,i,a){Nw===!1&&Pw(),r=Math.round(r);let o=r*2+1,s=og(this.hitDetectionTransform_,r+.5,r+.5,1/t,-1/t,-n,-e[0],-e[1]),c=!this.hitDetectionContext_;c&&(this.hitDetectionContext_=Vp(o,o,null,{willReadFrequently:Mw}));let l=this.hitDetectionContext_;l.canvas.width!==o||l.canvas.height!==o?(l.canvas.width=o,l.canvas.height=o):c||l.clearRect(0,0,o,o);let u;this.renderBuffer_!==void 0&&(u=sd(),md(u,e),ed(u,t*(this.renderBuffer_+r),u));let d=Lw(r),f;function p(e,t,n){let s=l.getImageData(0,0,o,o).data;for(let c=0,u=d.length;c<u;c++)if(s[d[c]]>0){if(!a||n===`none`||f!==`Image`&&f!==`Text`||a.includes(e)){let n=(d[c]-3)/4,a=r-n%o,s=r-(n/o|0),l=i(e,t,a*a+s*s);if(l)return l}l.clearRect(0,0,o,o);break}}let m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(Dm);let h,g,_,v,y;for(h=m.length-1;h>=0;--h){let e=m[h].toString();for(_=this.executorsByZIndex_[e],g=kw.length-1;g>=0;--g)if(f=kw[g],v=_[f],v!==void 0&&(y=v.executeHitDetection(l,s,n,p,u),y))return y}}getClipCoords(e){let t=this.maxExtent_;if(!t)return null;let n=t[0],r=t[1],i=t[2],a=t[3],o=[n,r,n,a,i,a,i,r];return pg(o,0,8,2,e,o),o}isEmpty(){return wf(this.executorsByZIndex_)}execute(e,t,n,r,i,a,o){let s=Object.keys(this.executorsByZIndex_).map(Number);s.sort(o?Om:Dm),a||=kw;let c=kw.length;for(let l=0,u=s.length;l<u;++l){let u=s[l].toString(),d=this.executorsByZIndex_[u];for(let u=0,f=a.length;u<f;++u){let f=a[u],p=d[f];if(p!==void 0){let a=o===null?void 0:p.getZIndexContext(),u=a?a.getContext():e,d=this.maxExtent_&&f!==`Image`&&f!==`Text`;if(d&&(u.save(),this.clip(u,n)),!a||f===`Text`||f===`Image`?p.execute(u,t,n,r,i,o):a.pushFunction(e=>p.execute(e,t,n,r,i,o)),d&&u.restore(),a){a.offset();let e=s[l]*c+kw.indexOf(f);this.deferredZIndexContexts_[e]||(this.deferredZIndexContexts_[e]=[]),this.deferredZIndexContexts_[e].push(a)}}}}this.renderedContext_=e}getDeferredZIndexContexts(){return this.deferredZIndexContexts_}getRenderedContext(){return this.renderedContext_}renderDeferred(){let e=this.deferredZIndexContexts_,t=Object.keys(e).map(Number).sort(Dm);for(let n=0,r=t.length;n<r;++n)e[t[n]].forEach(e=>{e.draw(this.renderedContext_),e.clear()}),e[t[n]].length=0}},Iw={};function Lw(e){if(Iw[e]!==void 0)return Iw[e];let t=e*2+1,n=e*e,r=Array(n+1);for(let i=0;i<=e;++i)for(let a=0;a<=e;++a){let o=i*i+a*a;if(o>n)break;let s=r[o];s||(s=[],r[o]=s),s.push(((e+i)*t+(e+a))*4+3),i>0&&s.push(((e-i)*t+(e+a))*4+3),a>0&&(s.push(((e+i)*t+(e-a))*4+3),i>0&&s.push(((e-i)*t+(e-a))*4+3))}let i=[];for(let e=0,t=r.length;e<t;++e)r[e]&&i.push(...r[e]);return Iw[e]=i,i}var Rw=.5;function zw(e,t,n,r,i,a,o,s,c){let l=c?Ap(i,c):i,u=Vp(e[0]*Rw,e[1]*Rw);u.imageSmoothingEnabled=!1;let d=u.canvas,f=new Ng(u,Rw,i,null,o,s,c?Sp(Dp(),c):null),p=n.length,m=Math.floor(16777215/p),h={};for(let e=1;e<=p;++e){let t=n[e-1],i=t.getStyleFunction()||r;if(!i)continue;let o=i(t,a);if(!o)continue;Array.isArray(o)||(o=[o]);let s=(e*m).toString(16).padStart(7,`#00000`);for(let e=0,n=o.length;e<n;++e){let n=o[e],r=n.getGeometryFunction()(t);if(!r||!jd(l,r.getExtent()))continue;let i=n.clone(),a=i.getFill();a&&a.setColor(s);let c=i.getStroke();c&&(c.setColor(s),c.setLineDash(null)),i.setText(void 0);let u=n.getImage();if(u){let e=u.getImageSize();if(!e)continue;let t=Vp(e[0],e[1],void 0,{alpha:!1}),n=t.canvas;t.fillStyle=s,t.fillRect(0,0,n.width,n.height),i.setImage(new Kh({img:n,anchor:u.getAnchor(),anchorXUnits:`pixels`,anchorYUnits:`pixels`,offset:u.getOrigin(),opacity:1,size:u.getSize(),scale:u.getScale(),rotation:u.getRotation(),rotateWithView:u.getRotateWithView()}))}let d=i.getZIndex()||0,f=h[d];f||(f={},h[d]=f,f.Polygon=[],f.Circle=[],f.LineString=[],f.Point=[]);let p=r.getType();if(p===`GeometryCollection`){let e=r.getGeometriesArrayRecursive();for(let t=0,n=e.length;t<n;++t){let n=e[t];f[n.getType().replace(`Multi`,``)].push(n,i)}}else f[p.replace(`Multi`,``)].push(r,i)}}let g=Object.keys(h).map(Number).sort(Dm);for(let e=0,n=g.length;e<n;++e){let n=h[g[e]];for(let e in n){let r=n[e];for(let e=0,n=r.length;e<n;e+=2){f.setStyle(r[e+1]);for(let n=0,i=t.length;n<i;++n)f.setTransform(t[n]),f.drawGeometry(r[e])}}}return u.getImageData(0,0,d.width,d.height)}function Bw(e,t,n){let r=[];if(n){let i=Math.floor(Math.round(e[0])*Rw),a=Math.floor(Math.round(e[1])*Rw),o=(Rd(i,0,n.width-1)+Rd(a,0,n.height-1)*n.width)*4,s=n.data[o],c=n.data[o+1],l=n.data[o+2]+256*(c+256*s),u=Math.floor(16777215/t.length);l&&l%u===0&&r.push(t[l/u-1])}return r}var Vw=class extends uC{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.clipExtent_=null,this.extendX_=!1,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=sd(),this.wrappedRenderedExtent_=sd(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedPixelRatio_=1,this.renderedRenderOrder_=null,this.renderedFrameDeclutter_,this.replayGroup_=null,this.replayGroupChanged=!0,this.clipping=!0,this.targetContext_=null,this.opacity_=1}renderWorlds(e,t,n){let r=t.extent,i=t.viewState,a=i.center,o=i.resolution,s=i.projection,c=i.rotation,l=s.getExtent(),u=this.getLayer().getSource(),d=this.getLayer().getDeclutter(),f=t.pixelRatio,p=t.viewHints,m=!(p[Xv.ANIMATING]||p[Xv.INTERACTING]),h=this.context,g=Math.round(Ad(r)/o*f),_=Math.round(Td(r)/o*f),v=u.getWrapX()&&s.canWrapX(),y=v?Ad(l):null,b=v?Math.ceil((r[2]-l[2])/y)+(this.extendX_?2:1):1,x=v?Math.floor((r[0]-l[0])/y)-+!!this.extendX_:0;do{let r=this.getRenderTransform(a,o,0,f,g,_,x*y);t.declutter&&(r=r.slice(0)),e.execute(h,[h.canvas.width,h.canvas.height],r,c,m,n===void 0?kw:n?Aw:jw,n?d&&t.declutter[d]:void 0)}while(++x<b)}setDrawContext_(){this.opacity_!==1&&(this.targetContext_=this.context,this.context=Vp(this.context.canvas.width,this.context.canvas.height,sC))}resetDrawContext_(){if(this.opacity_!==1&&this.targetContext_){let e=this.targetContext_.globalAlpha;this.targetContext_.globalAlpha=this.opacity_,this.targetContext_.drawImage(this.context.canvas,0,0),this.targetContext_.globalAlpha=e,Wp(this.context),sC.push(this.context.canvas),this.context=this.targetContext_,this.targetContext_=null}}renderDeclutter(e){this.replayGroup_&&this.getLayer().getDeclutter()&&this.renderWorlds(this.replayGroup_,e,!0)}renderDeferredInternal(e){this.replayGroup_&&(this.clipExtent_&&this.clipUnrotated(this.context,e,this.clipExtent_),this.replayGroup_.renderDeferred(),this.clipExtent_&&=(this.context.restore(),null),this.resetDrawContext_())}renderFrame(e,t){let n=e.layerStatesArray[e.layerIndex];this.opacity_=n.opacity;let r=e.viewState;this.prepareContainer(e,t);let i=this.context,a=this.replayGroup_,o=a&&!a.isEmpty();if(!o&&!(this.getLayer().hasListener(hb.PRERENDER)||this.getLayer().hasListener(hb.POSTRENDER)))return this.container;this.setDrawContext_(),this.preRender(i,e);let s=r.projection;this.clipExtent_=null;let c=!1;if(o&&n.extent&&this.clipping){let t=jp(n.extent,s);o=jd(t,e.extent),o&&!id(t,e.extent)&&(e.declutter?this.clipExtent_=t:(this.clipUnrotated(i,e,t),c=!0))}return o&&this.renderWorlds(a,e,!this.getLayer().getDeclutter()&&void 0),c&&i.restore(),this.postRender(i,e),this.renderedRotation_!==r.rotation&&(this.renderedRotation_=r.rotation,this.hitDetectionImageData_=null),e.declutter||this.resetDrawContext_(),this.container}getFeatures(e){return new Promise(t=>{if(this.frameState&&!this.hitDetectionImageData_&&!this.animatingOrInteracting_){let e=this.frameState.size.slice(),t=this.renderedCenter_,n=this.renderedResolution_,r=this.renderedRotation_,i=this.renderedProjection_,a=this.wrappedRenderedExtent_,o=this.getLayer(),s=[],c=e[0]*Rw,l=e[1]*Rw;s.push(this.getRenderTransform(t,n,r,Rw,c,l,0).slice());let u=o.getSource(),d=i.getExtent();if(u.getWrapX()&&i.canWrapX()&&!id(d,a)){let e=a[0],i=Ad(d),o=0,u;for(;e<d[0];)--o,u=i*o,s.push(this.getRenderTransform(t,n,r,Rw,c,l,u).slice()),e+=i;for(o=0,e=a[2];e>d[2];)++o,u=i*o,s.push(this.getRenderTransform(t,n,r,Rw,c,l,u).slice()),e-=i}let f=Dp();this.hitDetectionImageData_=zw(e,s,this.renderedFeatures_,o.getStyleFunction(),a,n,r,Lg(n,this.renderedPixelRatio_),f?i:null)}t(Bw(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,t,n,r,i){if(!this.replayGroup_)return;let a=t.viewState.resolution,o=t.viewState.rotation,s=this.getLayer(),c={},l=function(e,t,n){let a=nh(e),o=c[a];if(!o){if(n===0)return c[a]=!0,r(e,s,t);i.push(c[a]={feature:e,layer:s,geometry:t,distanceSq:n,callback:r})}else if(o!==!0&&n<o.distanceSq){if(n===0)return c[a]=!0,i.splice(i.lastIndexOf(o),1),r(e,s,t);o.geometry=t,o.distanceSq=n}},u=this.getLayer().getDeclutter();return this.replayGroup_.forEachFeatureAtCoordinate(e,a,o,n,l,u?t.declutter?.[u]?.all().map(e=>e.value):null)}handleFontsChanged(){let e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){let t=this.getLayer(),n=t.getSource();if(!n)return!1;let r=e.viewHints[Xv.ANIMATING],i=e.viewHints[Xv.INTERACTING],a=t.getUpdateWhileAnimating(),o=t.getUpdateWhileInteracting();if(this.ready&&!a&&r||!o&&i)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;let s=e.extent,c=e.viewState,l=c.projection,u=c.resolution,d=e.pixelRatio,f=t.getRevision(),p=t.getRenderBuffer(),m=t.getRenderOrder();m===void 0&&(m=Ig);let h=c.center.slice(),g=ed(s,p*u),_=g.slice(),v=[g.slice()],y=l.getExtent(),b=n.getWrapX()&&l.canWrapX();if(this.extendX_=!1,b){let e=n.getExtent();e&&!Md(e)&&(this.extendX_=e[0]<y[0]||e[2]>y[2])}if(b&&(!id(y,e.extent)||this.extendX_)){let e=Ad(y),t=Math.max(Ad(g)/2,e),n=y[0],r=y[2];this.extendX_&&(n-=e,r+=e),g[0]=n-t,g[2]=r+t,ef(h,l);let i=Fd(v[0],l);i[0]<y[0]&&i[2]<y[2]?v.push([i[0]+e,i[1],i[2]+e,i[3]]):i[0]>y[0]&&i[2]>y[2]&&v.push([i[0]-e,i[1],i[2]-e,i[3]])}if(this.ready&&this.renderedResolution_==u&&this.renderedPixelRatio_===d&&this.renderedRevision_==f&&this.renderedRenderOrder_==m&&this.renderedFrameDeclutter_===!!e.declutter&&id(this.wrappedRenderedExtent_,g))return Mm(this.renderedExtent_,_)||(this.hitDetectionImageData_=null,this.renderedExtent_=_),this.renderedCenter_=h,this.replayGroupChanged=!1,!0;this.replayGroup_=null;let x=new mw(Rg(u,d),g,u,d),S=Dp(),C;if(S){for(let e=0,t=v.length;e<t;++e){let t=v[e],r=Ap(t,l);n.loadFeatures(r,Mp(u,l),S)}C=Sp(S,l)}else for(let e=0,t=v.length;e<t;++e)n.loadFeatures(v[e],u,l);let w=Lg(u,d),T=!0,E=(e,n)=>{let r,i=e.getStyleFunction()||t.getStyleFunction();if(i&&(r=i(e,u)),r){let t=this.renderFeature(e,w,r,x,C,this.getLayer().getDeclutter(),n);T&&=!t}},D=Ap(g,l),ee=n.getFeaturesInExtent(D);m&&ee.sort(m);for(let e=0,t=ee.length;e<t;++e)E(ee[e],e);this.renderedFeatures_=ee,this.ready=T;let O=x.finish(),te=new Fw(g,u,d,n.getOverlaps(),O,t.getRenderBuffer(),!!e.declutter);return this.renderedResolution_=u,this.renderedRevision_=f,this.renderedRenderOrder_=m,this.renderedFrameDeclutter_=!!e.declutter,this.renderedExtent_=_,this.wrappedRenderedExtent_=g,this.renderedCenter_=h,this.renderedProjection_=l,this.renderedPixelRatio_=d,this.replayGroup_=te,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,t,n,r,i,a,o){if(!n)return!1;let s=!1;if(Array.isArray(n))for(let c=0,l=n.length;c<l;++c)s=Bg(r,e,n[c],t,this.boundHandleStyleImageChange_,i,a,o)||s;else s=Bg(r,e,n,t,this.boundHandleStyleImageChange_,i,a,o);return s}},Hw=class extends yS{constructor(e){super(e)}createRenderer(){return new Vw(this)}},Uw=!1;function Ww(e,t,n,r,i,a,o){let s=new XMLHttpRequest;s.open(`GET`,typeof e==`function`?e(n,r,i):e,!0),t.getType()==`arraybuffer`&&(s.responseType=`arraybuffer`),s.withCredentials=Uw,s.onload=function(e){if(!s.status||s.status>=200&&s.status<300){let e=t.getType();try{let r;e==`text`||e==`json`?r=s.responseText:e==`xml`?r=s.responseXML||s.responseText:e==`arraybuffer`&&(r=s.response),r?a(t.readFeatures(r,{extent:n,featureProjection:i}),t.readProjection(r)):o()}catch{o()}}else o()},s.onerror=o,s.send()}function Gw(e,t){return function(n,r,i,a,o){Ww(e,t,n,r,i,(e,t)=>{this.addFeatures(e),a!==void 0&&a(e)},()=>{this.changed(),o!==void 0&&o()})}}function Kw(e,t){return[[-1/0,-1/0,1/0,1/0]]}var qw=class{constructor(e){this.rbush_=new xb(e),this.items_={}}insert(e,t){let n={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(n),this.items_[nh(t)]=n}load(e,t){let n=Array(t.length);for(let r=0,i=t.length;r<i;r++){let i=e[r],a=t[r],o={minX:i[0],minY:i[1],maxX:i[2],maxY:i[3],value:a};n[r]=o,this.items_[nh(a)]=o}this.rbush_.load(n)}remove(e){let t=nh(e),n=this.items_[t];return delete this.items_[t],this.rbush_.remove(n)!==null}update(e,t){let n=this.items_[nh(t)];fd([n.minX,n.minY,n.maxX,n.maxY],e)||(this.remove(t),this.insert(e,t))}getAll(){return this.rbush_.all().map(function(e){return e.value})}getInExtent(e){let t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(t).map(function(e){return e.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,t){return this.forEach_(this.getInExtent(e),t)}forEach_(e,t){let n;for(let r=0,i=e.length;r<i;r++)if(n=t(e[r]),n)return n;return n}isEmpty(){return wf(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){let t=this.rbush_.toJSON();return cd(t.minX,t.minY,t.maxX,t.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(let t in e.items_)this.items_[t]=e.items_[t]}},Jw={ADDFEATURE:`addfeature`,CHANGEFEATURE:`changefeature`,CLEAR:`clear`,REMOVEFEATURE:`removefeature`,FEATURESLOADSTART:`featuresloadstart`,FEATURESLOADEND:`featuresloadend`,FEATURESLOADERROR:`featuresloaderror`},Yw=class extends zm{constructor(e,t,n){super(e),this.feature=t,this.features=n}},Xw=class extends LC{constructor(e){e||={},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:`ready`,wrapX:e.wrapX===void 0||e.wrapX}),this.on,this.once,this.un,this.loader_=Im,this.format_=e.format||null,this.overlaps_=e.overlaps===void 0||e.overlaps,this.url_=e.url,e.loader===void 0?this.url_!==void 0&&(Wh(this.format_,"`format` must be set when `url` is set"),this.loader_=Gw(this.url_,this.format_)):this.loader_=e.loader,this.strategy_=e.strategy===void 0?Kw:e.strategy;let t=e.useSpatialIndex===void 0||e.useSpatialIndex;this.featuresRtree_=t?new qw:null,this.loadedExtentsRtree_=new qw,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let n,r;Array.isArray(e.features)?r=e.features:e.features&&(n=e.features,r=n.getArray()),!t&&n===void 0&&(n=new zv(r)),r!==void 0&&this.addFeaturesInternal(r),n!==void 0&&this.bindFeaturesCollection_(n)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){let t=nh(e);if(!this.addToIndex_(t,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(t,e);let n=e.getGeometry();if(n){let t=n.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(t,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new Yw(Jw.ADDFEATURE,e))}setupChangeEvents_(e,t){t instanceof ev||(this.featureChangeKeys_[e]=[Sm(t,U.CHANGE,this.handleFeatureChange_,this),Sm(t,Qm.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(e,t){let n=!0;if(t.getId()!==void 0){let e=String(t.getId());if(!(e in this.idIndex_))this.idIndex_[e]=t;else if(t instanceof ev){let r=this.idIndex_[e];r instanceof ev?Array.isArray(r)?r.push(t):this.idIndex_[e]=[r,t]:n=!1}else n=!1}return n&&(Wh(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=t),n}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){let t=[],n=[],r=[];for(let t=0,r=e.length;t<r;t++){let r=e[t],i=nh(r);this.addToIndex_(i,r)&&n.push(r)}for(let e=0,i=n.length;e<i;e++){let i=n[e],a=nh(i);this.setupChangeEvents_(a,i);let o=i.getGeometry();if(o){let e=o.getExtent();t.push(e),r.push(i)}else this.nullGeometryFeatures_[a]=i}if(this.featuresRtree_&&this.featuresRtree_.load(t,r),this.hasListener(Jw.ADDFEATURE))for(let e=0,t=n.length;e<t;e++)this.dispatchEvent(new Yw(Jw.ADDFEATURE,n[e]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener(Jw.ADDFEATURE,function(n){t||=(t=!0,e.push(n.feature),!1)}),this.addEventListener(Jw.REMOVEFEATURE,function(n){t||=(t=!0,e.remove(n.feature),!1)}),e.addEventListener(Iv.ADD,e=>{t||=(t=!0,this.addFeature(e.element),!1)}),e.addEventListener(Iv.REMOVE,e=>{t||=(t=!0,this.removeFeature(e.element),!1)}),this.featuresCollection_=e}clear(e){if(e){for(let e in this.featureChangeKeys_)this.featureChangeKeys_[e].forEach(wm);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){this.featuresRtree_.forEach(e=>{this.removeFeatureInternal(e)});for(let e in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[e])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};let t=new Yw(Jw.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){let n=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(n,function(n){let r=n.getGeometry();if(r instanceof ev||r.intersectsCoordinate(e))return t(n)})}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,function(n){let r=n.getGeometry();if(r instanceof ev||r.intersectsExtent(e)){let e=t(n);if(e)return e}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),wf(this.nullGeometryFeatures_)||jm(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){let t=[];return this.forEachFeatureAtCoordinateDirect(e,function(e){t.push(e)}),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);let n=Id(e,t);return[].concat(...n.map(e=>this.featuresRtree_.getInExtent(e)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){let n=e[0],r=e[1],i=null,a=[NaN,NaN],o=1/0,s=[-1/0,-1/0,1/0,1/0];return t||=Pm,this.featuresRtree_.forEachInExtent(s,function(e){if(t(e)){let t=e.getGeometry(),c=o;if(o=t instanceof ev?0:t.closestPointXY(n,r,a,o),o<c){i=e;let t=Math.sqrt(o);s[0]=n-t,s[1]=r-t,s[2]=n+t,s[3]=r+t}}}),i}getExtent(e){return this.featuresRtree_?.getExtent(e)??null}getFeatureById(e){let t=this.idIndex_[e.toString()];return t===void 0?null:t}getFeatureByUid(e){let t=this.uidIndex_[e];return t===void 0?null:t}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){let t=e.target,n=nh(t),r=t.getGeometry();if(!r)n in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[n]=t);else{let e=r.getExtent();n in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[n],this.featuresRtree_&&this.featuresRtree_.insert(e,t)):this.featuresRtree_&&this.featuresRtree_.update(e,t)}let i=t.getId();if(i!==void 0){let e=i.toString();this.idIndex_[e]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[e]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[n]=t;this.changed(),this.dispatchEvent(new Yw(Jw.CHANGEFEATURE,t))}hasFeature(e){let t=e.getId();if(t!==void 0){let n=this.idIndex_[String(t)];return Array.isArray(n)?n.includes(e):n===e}return nh(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&wf(this.nullGeometryFeatures_):!this.featuresCollection_||this.featuresCollection_.getLength()===0}loadFeatures(e,t,n){let r=this.loadedExtentsRtree_,i=this.strategy_(e,t,n);for(let e=0,a=i.length;e<a;++e){let a=i[e];if(!r.forEachInExtent(a,function(e){return id(e.extent,a)})){this.loading=Number(this.loading)+1,this.dispatchEvent(new Yw(Jw.FEATURESLOADSTART));let e=e=>{this.loading=Number(this.loading)-1,this.dispatchEvent(new Yw(Jw.FEATURESLOADEND,void 0,e))},i=()=>{this.changed(),this.loading=Number(this.loading)-1,this.dispatchEvent(new Yw(Jw.FEATURESLOADERROR))},o=!1,s=this.loader_.call(this,a,t,n,t=>o||e(t),()=>o||i());s instanceof Promise?(o=!0,s.then(t=>{this.addFeatures(t),e(t)}).catch(i)):this.loader_.length<4&&(this.loading=!1),r.insert(a,{extent:a.slice()})}}}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){let t=this.loadedExtentsRtree_,n=[];t.forEachInExtent(e,function(e){n.push(e)}),n.forEach(n=>{t.remove(n);let r=Dd(n.extent,e);for(let e of r)t.insert(e,{extent:e})})}removeFeatures(e){let t=!1;for(let n=0,r=e.length;n<r;++n)t=this.removeFeatureInternal(e[n])||t;t&&this.changed()}removeFeature(e){e&&this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){let t=nh(e);if(!(t in this.uidIndex_))return!1;t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e),this.featureChangeKeys_[t]?.forEach(wm),delete this.featureChangeKeys_[t];let n=e.getId();if(n!==void 0){let t=n.toString(),r=this.idIndex_[t];r===e?delete this.idIndex_[t]:Array.isArray(r)&&(r.splice(r.indexOf(e),1),r.length===1&&(this.idIndex_[t]=r[0]))}return delete this.uidIndex_[t],this.hasListener(Jw.REMOVEFEATURE)&&this.dispatchEvent(new Yw(Jw.REMOVEFEATURE,e)),!0}removeFromIdIndex_(e){for(let t in this.idIndex_)if(this.idIndex_[t]===e){delete this.idIndex_[t];break}}setLoader(e){this.loader_=e}setUrl(e){Wh(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(Gw(e,this.format_))}setOverlaps(e){this.overlaps_=e,this.changed()}};async function Zw(e=[],t,n){let r=t;for(let t of e)r=t.inline?await Au(t.inline,{utils:n.utils})(r,n,n.utils):await Mu.resolve(t.ref).process(r,t.options||{},n);return r}function Qw(e=[],t){let n=[];for(let r of e){let e=Mu.resolve(r.ref);n.push(e.attach(t,r.options||{}))}return n}function $w(e,t,n){switch(n){case`!=`:return String(e)!==String(t);case`>`:return Number(e)>Number(t);case`<`:return Number(e)<Number(t);case`>=`:return Number(e)>=Number(t);case`<=`:return Number(e)<=Number(t);case`contains`:return String(e??``).includes(String(t));default:return String(e)===String(t)}}function eT(e,t){return{$feature:typeof e?.getProperties==`function`?e.getProperties():e?.properties||{},...t||{}}}function tT(e,t,n){if(!t)return!0;if(typeof t==`function`)return!!t(e);if(typeof t==`string`)return!!ku(t,eT(e,n));let{field:r,op:i=`=`,value:a,where:o,conditions:s,logic:c=`AND`}=t;if(o)return!!ku(o,eT(e,n));if(s?.length){let t=typeof e?.getProperties==`function`?e.getProperties():e?.properties||{};return c===`OR`?s.some(e=>$w(t[e.field],e.value,e.op||`=`)):s.every(e=>$w(t[e.field],e.value,e.op||`=`))}return!r||$w(e?.get?.(r)??e?.properties?.[r],a,i)}function nT(e,t,n){return!t||typeof t==`object`&&!t.field&&!t.where&&!t.conditions?e:e.filter(e=>tT(e,t,n))}var rT=class{engine;conditions=[];baseSpec;constructor(e,t){this.engine=e,this.baseSpec=t??null}config(e,t,n){let r=n===void 0?`=`:t,i=n===void 0?t:n;return this.conditions.push({field:e,op:r,value:i}),this}where(e){return this.baseSpec&&typeof this.baseSpec==`object`&&!Array.isArray(this.baseSpec)?this.baseSpec.where=e:this.baseSpec=this.baseSpec==null?{where:e}:{where:e,conditions:this.conditions,logic:`AND`},this}end(){let e=nT(this.engine.source.getFeatures(),(this.conditions.length?{...typeof this.baseSpec==`object`&&!Array.isArray(this.baseSpec)?this.baseSpec:{},conditions:this.conditions,logic:`AND`}:this.baseSpec)??{});return this.engine.applyFilterResult(e),this.engine}cancel(){return this.engine}};function iT(e){return e==null?[]:Array.isArray(e)?e.filter(e=>e!=null):typeof e==`object`?[e]:[]}function aT(e,t,n){if(e!=null)return typeof e==`function`?e(t,n):typeof e==`string`&&e.startsWith("${")&&e.endsWith(`}`)?ku(e.slice(2,-1),n):ju(e,n)}var oT={semantic:{label:`语义色（正常/预警/超标 · 风险等级）`,colors:[`#46c97d`,`#f5a623`,`#ff5c5c`,`#9fb0c8`],semantic:{正常:`#46c97d`,预警:`#f5a623`,超标:`#ff5c5c`,低:`#46c97d`,中:`#f5a623`,高:`#ff5c5c`,Ⅰ类:`#36cbcb`,Ⅱ类:`#46c97d`,Ⅲ类:`#9ccc3c`,Ⅳ类:`#f5a623`,Ⅴ类:`#ff8a3c`,劣Ⅴ类:`#ff5c5c`}},blue:{label:`蓝色系`,colors:[`#2f6fe0`,`#4f8cff`,`#79adff`,`#a8c8ff`,`#d0e0ff`]},sunset:{label:`暖色系`,colors:[`#ff5c5c`,`#ff8a3c`,`#f5a623`,`#ffc95c`,`#ffe39c`]},purple:{label:`紫色系`,colors:[`#6b4fd6`,`#9a7bff`,`#b9a3ff`,`#d4c6ff`,`#eae3ff`]}};Object.assign(zu.stylePresets,oT),Object.entries(oT).map(([e,t])=>({label:t.label,value:e}));var sT=new class{cache=new Map;maxSize=3e4;hits=0;misses=0;keyOf(e){return`${e.ruleId}::${e.featureKey}::${e.state||`normal`}::${e.zoom??``}::${e.resolution??``}`}get(e){let t=this.keyOf(e),n=this.cache.get(t);return n===void 0?(this.misses++,null):(this.hits++,this.cache.delete(t),this.cache.set(t,n),n)}set(e,t){let n=this.keyOf(e);if(this.cache.has(n))this.cache.delete(n);else if(this.cache.size>=this.maxSize){let e=this.cache.keys().next().value;e!==void 0&&this.cache.delete(e)}this.cache.set(n,t)}has(e){return this.cache.has(this.keyOf(e))}clearByLayer(e){let t=`${e}::`;for(let e of[...this.cache.keys()])e.startsWith(t)&&this.cache.delete(e)}clear(){this.cache.clear(),this.hits=0,this.misses=0}size(){return this.cache.size}stats(){let e=this.hits+this.misses;return{size:this.cache.size,maxSize:this.maxSize,hits:this.hits,misses:this.misses,hitRate:e===0?0:this.hits/e}}setMaxSize(e){for(this.maxSize=e;this.cache.size>this.maxSize;){let e=this.cache.keys().next().value;if(e===void 0)break;this.cache.delete(e)}}},cT=new class{rules=[];addRule(e){this.rules.push(e),this.rules.sort((e,t)=>t.priority-e.priority)}addRules(e){e.forEach(e=>this.addRule(e))}clear(){this.rules=[]}match(e){for(let t of this.rules){let n=this.matchRule(t,e);if(n)return n}return null}matchRule(e,t){let n=t.feature?.properties||{},r=null;switch(e.mode){case`single`:r=e.properties||e.fallback||null;break;case`categorical`:if(e.field&&e.categories){let t=String(n[e.field]??``);r=e.categories[t]||e.fallback||null}else r=e.fallback||null;break;case`continuous`:if(e.field&&e.ranges){let t=Number(n[e.field]);if(Number.isNaN(t))r=e.fallback||null;else{let n=e.ranges.find(e=>t>=e.min&&t<=e.max);r=n&&n.style||e.fallback||null}}else r=e.fallback||null;break;case`multi-field`:if(e.conditions){let t=e.conditions.find(e=>Object.entries(e.fields).every(([e,t])=>String(n[e]??``)===String(t)));r=t&&t.style||e.fallback||null}else r=e.fallback||null;break;default:r=null}return r==null&&e.properties==null?null:{...e.properties||{},...r||{}}}};function lT(e,t,n){let r=t??{},i=n??{},a=Number(aT(e.radius,r,i)??6),o=String(aT(e.color,r,i)??`#3399cc`),s=Number(aT(e.opacity,r,i)??.85),c=String(aT(e.strokeColor,r,i)??`#ffffff`),l=Number(aT(e.strokeWidth,r,i)??1.5);return new Jh({image:new Hh({radius:a,fill:new Uh({color:Qg(o,s)}),stroke:new qh({color:c,width:l})})})}function uT(e,t,n){let r=t??{},i=n??{},a=String(aT(e.color,r,i)??`#3399cc`),o=Number(aT(e.width,r,i)??2),s=Number(aT(e.opacity,r,i)??1),c=aT(e.lineDash,r,i);return new Jh({stroke:new qh({color:Qg(a,s),width:o,lineCap:e.lineCap,lineJoin:e.lineJoin,lineDash:c})})}function dT(e,t,n){let r=t??{},i=n??{},a=String(aT(e.color,r,i)??`#3399cc`),o=Number(aT(e.opacity,r,i)??.4),s=String(aT(e.strokeColor,r,i)??a),c=Number(aT(e.strokeWidth,r,i)??1.5),l=Number(aT(e.strokeOpacity,r,i)??.9),u=aT(e.lineDash,r,i);return new Jh({fill:new Uh({color:Qg(a,o)}),stroke:new qh({color:Qg(s,l),width:c,lineDash:u})})}function fT(e,t,n){let r=t??{},i=n??{},a=aT(e.src,r,i),o=Number(aT(e.scale,r,i)??1),s=Number(aT(e.rotation,r,i)??0),c=Number(aT(e.opacity,r,i)??1);return new Jh({image:new Kh({src:a?Nv.resolve(String(a)):``,scale:o,rotation:s,opacity:c})})}function pT(e,t,n){let r=t??{},i=n??{};if(aT(e.show,r,i)===!1)return null;let a=``;if(e.text!=null)a=String(aT(e.text,r,i)??``);else if(e.field){let t=r?.get?.(e.field)??r?.properties?.[e.field];a=String(t??``)}if(!a)return null;let o=String(aT(e.font,r,i)??`500 12px PingFang SC, sans-serif`),s=String(aT(e.color,r,i)??`#333`),c=String(aT(e.outlineColor,r,i)??`#fff`),l=Number(aT(e.outlineWidth,r,i)??3),u=Number(aT(e.offsetX,r,i)??0),d=Number(aT(e.offsetY,r,i)??-12),f=Number(aT(e.rotation,r,i)??0),p=aT(e.scale,r,i),m=aT(e.background,r,i),h=e.padding?Array.isArray(e.padding)?e.padding:[e.padding,e.padding,e.padding,e.padding]:void 0;return new Jh({text:new eg({text:a,font:o,fill:new Uh({color:s}),stroke:new qh({color:c,width:l}),offsetX:u,offsetY:d,textAlign:e.align,textBaseline:e.baseline,rotation:f,scale:p==null?void 0:Number(p),backgroundFill:m?new Uh({color:String(m)}):void 0,padding:h})})}function mT(e,t){let n=String(t.get(e.colorField)??``),r=oT[e.palette]||oT.blue;return r.semantic?.[n]||r.colors[$g(n,r.colors.length)]}function hT(e,t){return function(n,r){let i=n.get(`id`),a=t.get(`selectedId`),o=t.get(`hoverId`),s=a!==void 0&&i===a,c=o!==void 0&&i===o,l=s?`selected`:c?`hover`:`normal`,u={$feature:n.getProperties(),$state:l,$selected:l===`selected`,$hover:l===`hover`,$env:e.env},d=e.getView?.()??null,f=d?d.getZoomForResolution?.(r)??d.getZoom()??0:0,p=Math.round(f),m=r<600?`lo`:`hi`,h=t.get(`layerKey`),g=h&&i!=null?{ruleId:h,featureKey:String(i),state:l,zoom:p,resolution:m}:null;if(g){let e=sT.get(g);if(e)return e}let _=t=>{let i=n.getGeometry()?.getType?.()||``,a=t??{mode:`single`};if(t?.rules?.length){let r=cT.match({feature:{properties:n.getProperties(),geometry:{type:i}},env:e.env,zoom:f,state:l});r&&(a={...t,...r})}let o=e.zoomAdapter?.adjust(f)??{},d,p=a.circle?.color??a.fill?.color??a.stroke?.color;d=o.color?String(o.color):p==null?a.color==null?a.colorField?mT(a,n):`#4f8cff`:String(aT(a.color,n,u)??`#4f8cff`):String(aT(p,n,u)??`#4f8cff`);let m=Number(o.radius??aT(a.circle?.radius??a.radius,n,u)??7),h=s||c?m+3:m,_=Number(o.width??aT(a.stroke?.width??a.width,n,u)??2),v=Number(o.fillOpacity??aT(a.fill?.opacity??a.circle?.opacity??a.fillOpacity,n,u)??.35),y=String(aT(a.circle?.strokeColor??a.stroke?.color,n,u)??(s||c?`#ffd666`:`rgba(255,255,255,0.9)`)),b=Number(aT(a.circle?.strokeWidth??a.stroke?.width,n,u)??(s||c?3:1.5)),x=aT(a.iconStage?.src??a.icon,n,u),S=aT(a.iconStage?.scale??a.iconScale,n,u),C=S==null?Math.min(Math.max(h/8,.55),2.4):Number(S),w=Number(aT(a.iconStage?.rotation??a.iconRotation,n,u)??0),T=Number(aT(a.iconStage?.opacity??a.iconOpacity,n,u)??1),E=e.highlight?.color||`#ffd666`,D=e.popup?.titleField||a.labelField||a.text?.field||`name`,ee=a.text,O=pT(ee??{field:D,font:`600 12px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:i===`Point`?-18:-10,padding:[2,4,2,4],show:s||c},n,u),te=[];if(i===`Point`||i.endsWith(`Point`))(s||c)&&te.push(new Jh({image:new Hh({radius:h+8,fill:new Uh({color:Qg(E,.35)})})})),te.push(lT({radius:h,color:d,opacity:x?.45:.85,strokeColor:y,strokeWidth:b},n,u)),x&&te.push(fT({src:String(x),scale:C,rotation:w,opacity:T},n,u)),O&&te.push(O);else if(i===`LineString`||i.includes(`Line`))s||c?(te.push(new Jh({stroke:new qh({color:Qg(E,.45),width:_+9})})),te.push(uT({color:E,width:_+2.5},n,u))):te.push(uT({color:d,width:_},n,u)),O&&te.push(O);else{if(s||c)te.push(new Jh({stroke:new qh({color:Qg(E,.55),width:12})})),te.push(dT({color:d,opacity:Math.min(v+.3,.92),strokeColor:E,strokeWidth:3.5},n,u));else if(te.push(dT({color:d,opacity:v,strokeColor:Qg(d,.9),strokeWidth:_},n,u)),!ee&&r<600){let e=pT({field:D,font:`500 11px PingFang SC, sans-serif`,color:`rgba(255,255,255,0.9)`,outlineColor:`rgba(10,18,32,0.8)`,outlineWidth:3},n,u);e&&te.push(e)}O&&(s||c)&&te.push(O)}let ne=te;return g&&sT.set(g,ne),ne},v=iT(e.style),y=v.length?v.flatMap(e=>{let t=_(e);return Array.isArray(t)?t:[t]}):[];return g&&sT.set(g,y),y}}var gT=new class{state=Zt({});register(e){this.state[e.id]={id:e.id,name:e.name,visible:e.visible!==!1,loading:!1,featureCount:0,geometryType:`Mixed`,zIndex:e.zIndex??0}}remove(e){delete this.state[e]}patch(e,t){Object.assign(this.state[e],t)}get(e){return this.state[e]}list(){return Object.values(this.state).sort((e,t)=>e.zIndex-t.zIndex)}clear(){Object.keys(this.state).forEach(e=>delete this.state[e])}},_T=[`right`,`left`,`top`,`bottom`],vT=class{pick(e){let t=e.padding??8,[n,r]=e.anchorScreen,{width:i,height:a}=e.cardSize,o=e.preferredSide?[e.preferredSide,..._T.filter(t=>t!==e.preferredSide)]:_T;for(let s of o){let o=this.trySide(s,n,r,i,a,e.viewport,t);if(o)return o}return this.compute(`right`,n,r,i,a,t)}trySide(e,t,n,r,i,a,o){let{width:s}=a,c=this.compute(e,t,n,r,i,o);switch(e){case`right`:return c.cardOffset.x+r<=s-o?c:null;case`left`:return c.cardOffset.x>=o?c:null;case`top`:return c.cardOffset.y>=o?c:null;case`bottom`:return c.cardOffset.y+i<=a.height-o?c:null}}compute(e,t,n,r,i,a){switch(e){case`right`:{let e={x:t+a,y:n-i/2};return{side:`right`,cardOffset:e,leaderEnd:[e.x,e.y+i/2]}}case`left`:{let e={x:t-r-a,y:n-i/2};return{side:`left`,cardOffset:e,leaderEnd:[e.x+r,e.y+i/2]}}case`top`:{let e={x:t-r/2,y:n-i-a};return{side:`top`,cardOffset:e,leaderEnd:[e.x+r/2,e.y+i]}}case`bottom`:{let e={x:t-r/2,y:n+a};return{side:`bottom`,cardOffset:e,leaderEnd:[e.x+r/2,e.y]}}}}};new vT;var yT=new class{anchorPicker=new vT;solve(e){let t=e.viewport,n=e.padding??8,r=new Map,i=t.width/t.height<4/3;for(let i of e.cards){if(i.locked&&i.lockedOffset){r.set(i.id,{id:i.id,side:`right`,offset:{...i.lockedOffset},leaderEnd:[i.lockedOffset.x,i.lockedOffset.y+i.size.height/2]});continue}let e={anchorScreen:i.anchorScreen,cardSize:i.size,viewport:t,padding:n},a=this.anchorPicker.pick(e);r.set(i.id,{id:i.id,side:a.side,offset:{...a.cardOffset},leaderEnd:a.leaderEnd})}return this.resolveOverlaps(r,e.cards,t,n,i),r}resolveOverlaps(e,t,n,r,i){let a=new Map(t.map(e=>[e.id,e])),o=t.length*3+6;for(let t=0;t<o;t++){let t=!1,n=[...e.keys()];for(let r=0;r<n.length;r++)for(let o=r+1;o<n.length;o++){let s=e.get(n[r]),c=e.get(n[o]),l=a.get(n[r]),u=a.get(n[o]);if(l.locked&&u.locked)continue;let d=this.rectOf(s,l),f=this.rectOf(c,u),p=Math.min(d.x2,f.x2)-Math.max(d.x1,f.x1),m=Math.min(d.y2,f.y2)-Math.max(d.y1,f.y1);if(p<=0||m<=0)continue;let h=s.side,g=h===`right`||h===`left`;if(i&&(g=!0),g){let e=d.y1<f.y1?-1:1,t=m/2+1;l.locked||(s.offset.y+=e*t),u.locked||(c.offset.y-=e*t)}else{let e=d.x1<f.x1?-1:1,t=p/2+1;l.locked||(s.offset.x+=e*t),u.locked||(c.offset.x-=e*t)}t=!0}if(!t)break}for(let[t,i]of e){let e=a.get(t),o=e.size.width,s=e.size.height;e.locked&&e.lockedOffset?i.offset={...e.lockedOffset}:(i.offset.x=Math.max(r,Math.min(i.offset.x,n.width-o-r)),i.offset.y=Math.max(r,Math.min(i.offset.y,n.height-s-r))),i.leaderEnd=this.leaderEndOf(i.side,i.offset,o,s)}}rectOf(e,t){return{x1:e.offset.x,y1:e.offset.y,x2:e.offset.x+t.size.width,y2:e.offset.y+t.size.height}}leaderEndOf(e,t,n,r){switch(e){case`right`:return[t.x,t.y+r/2];case`left`:return[t.x+n,t.y+r/2];case`top`:return[t.x+n/2,t.y+r];case`bottom`:return[t.x+n/2,t.y]}}incrementalResolve(e,t,n,r=8){return this.solve({viewport:n,cards:t,padding:r})}},bT=`http://www.w3.org/2000/svg`,xT=class{toPath(e,t){let[n,r]=e.start,[i,a]=e.end,o=i-n,s=a-r;switch(t.style){case`straight`:return`M ${n} ${r} L ${i} ${a}`;case`polyline`:{let e=.55;return Math.abs(o)>=Math.abs(s)?`M ${n} ${r} L ${n+o*e} ${a} L ${i} ${a}`:`M ${n} ${r} L ${i} ${r+s*e} L ${i} ${a}`}case`bezier`:{let e=(n+i)/2,t=(r+a)/2,c=Math.hypot(o,s)||1,l=-s/c,u=o/c,d=c*.22;return`M ${n} ${r} Q ${e+l*d} ${t+u*d} ${i} ${a}`}default:return`M ${n} ${r} L ${i} ${a}`}}drawToSvg(e,t){let n=document.createElementNS(bT,`g`);n.setAttribute(`class`,`gf-leader`);let r=t.color||`var(--geo-flow-leader-color, #666)`,i=t.width??1.5,a=document.createElementNS(bT,`path`);if(a.setAttribute(`d`,this.toPath(e,t)),a.setAttribute(`fill`,`none`),a.setAttribute(`stroke`,r),a.setAttribute(`stroke-width`,String(i)),t.dash&&a.setAttribute(`stroke-dasharray`,t.dash.join(`,`)),n.appendChild(a),t.arrow){let i=this.buildArrowSvg(e.end,e.start,r,t.arrowSize??8);n.appendChild(i)}return n}buildArrowSvg(e,t,n,r){let[i,a]=e,[o,s]=t,c=i-o,l=a-s,u=Math.hypot(c,l)||1,d=c/u,f=l/u,p=-f,m=d,h=i-d*r,g=a-f*r,_=`M ${i} ${a} L ${h+r/2*p} ${g+r/2*m} L ${h-r/2*p} ${g-r/2*m} Z`,v=document.createElementNS(bT,`path`);return v.setAttribute(`d`,_),v.setAttribute(`fill`,n),v.setAttribute(`stroke`,`none`),v}drawToCanvas(e,t,n){let[r,i]=t.start,[a,o]=t.end,s=a-r,c=o-i;switch(e.beginPath(),e.strokeStyle=n.color||`#666`,e.lineWidth=n.width??1.5,n.dash&&e.setLineDash(n.dash),n.style){case`straight`:e.moveTo(r,i),e.lineTo(a,o);break;case`polyline`:{let t=.55;e.moveTo(r,i),Math.abs(s)>=Math.abs(c)?e.lineTo(r+s*t,o):e.lineTo(a,i+c*t),e.lineTo(a,o);break}case`bezier`:{let t=(r+a)/2,n=(i+o)/2,l=Math.hypot(s,c)||1,u=-c/l,d=s/l,f=l*.22;e.moveTo(r,i),e.quadraticCurveTo(t+u*f,n+d*f,a,o);break}}e.stroke(),n.arrow&&this.drawArrowCanvas(e,t.end,t.start,n.color||`#666`,n.arrowSize??8)}drawArrowCanvas(e,t,n,r,i){let[a,o]=t,[s,c]=n,l=a-s,u=o-c,d=Math.hypot(l,u)||1,f=l/d,p=u/d,m=-p,h=f,g=a-f*i,_=o-p*i,v=g+i/2*m,y=_+i/2*h,b=g-i/2*m,x=_-i/2*h;e.beginPath(),e.moveTo(a,o),e.lineTo(v,y),e.lineTo(b,x),e.closePath(),e.fillStyle=r,e.fill()}},ST=new xT,CT={class:`gf-popup-host`,style:{"pointer-events":`none`}},wT=[`width`,`height`],TT=[`id`],ET=[`onPointerdown`],DT=[`onClick`],OT={key:1,class:`gf-popup-card__default`},kT={class:`gf-popup-card__title`},AT={class:`gf-popup-card__rows`},jT={class:`gf-popup-card__label`},MT={class:`gf-popup-card__value`},NT=lu(N({__name:`PopupHost`,props:{engine:{}},setup(e){let t=e,n=new xT,r=t.engine.popupManager,i=t.engine.manager.map,a=Zt([]),o=A(null);function s(){let e=r.list(),t=new Set(e.map(e=>e.id));for(let e=a.length-1;e>=0;e--)t.has(a[e].id)||a.splice(e,1);for(let t of e){let e=a.find(e=>e.id===t.id),n=r.getLayout(t.id);e?(e.info=t,e.layout=n):a.push({id:t.id,info:t,layout:n})}d()}function c(e,t){let n=a.find(t=>t.id===e);n&&(n.layout=t),d()}function l(){let e=i.getSize()||[0,0];r.setViewport({width:e[0],height:e[1]})}function u(){let e=new Map;for(let t of r.list())if(t.coordinate){let n=i.getPixelFromCoordinate(t.coordinate);n&&e.set(t.id,[n[0],n[1]])}else t.anchorScreen&&e.set(t.id,t.anchorScreen);r.updateAnchors(e)}function d(){let e=o.value;if(e){for(;e.firstChild;)e.removeChild(e.firstChild);for(let t of a){if(!t.layout)continue;let r=t.info.anchorScreen,i=t.layout.leaderEnd,a=n.drawToSvg({start:r,end:i},{style:t.info.leaderStyle||`polyline`,color:`var(--geo-flow-leader-color, #4f8cff)`,width:1.5});e.appendChild(a)}}}function f(e){t.engine.closePopupById(e)}let p=null,m={x:0,y:0},h={x:0,y:0};function g(e,t){let n=r.getLayout(e)||a.find(t=>t.id===e)?.layout;n&&(p=e,m={x:t.clientX,y:t.clientY},h={...n.offset},t.target.setPointerCapture(t.pointerId),t.preventDefault())}function _(e){if(!p)return;let n=e.clientX-m.x,r=e.clientY-m.y;t.engine.lockPopupPosition(p,{x:h.x+n,y:h.y+r})}function v(e){p&&e.target.releasePointerCapture?.(e.pointerId),p=null}function y(e){return!!e?.component}let b=!1,x=r.on(e=>{b||(e.type===`open`||e.type===`close`||e.type===`update`?(s(),Fn(S)):e.type===`layout`&&c(e.id,e.layout))});function S(){for(let e of a){let t=document.getElementById(`gf-popup-card-${e.id}`);if(!t)continue;let n=t.getBoundingClientRect(),i=Math.round(n.width),a=Math.round(n.height);i&&a&&(i!==e.info.size.width||a!==e.info.size.height)&&(e.info.size={width:i,height:a},r.open({...e.info,size:{width:i,height:a}}))}l(),u()}let C=()=>u(),w=()=>{l(),u()};return Ir(()=>{l(),s(),i.on(`moveend`,C),i.on(`movestart`,C),i.getViewport().addEventListener(`resize`,w),window.addEventListener(`resize`,w)}),zr(()=>{b=!0,x(),i.un(`moveend`,C),i.un(`movestart`,C),i.getViewport().removeEventListener(`resize`,w),window.removeEventListener(`resize`,w)}),(t,n)=>(I(),L(`div`,CT,[(I(),L(`svg`,{ref_key:`svgRef`,ref:o,class:`gf-popup-host__lines`,width:j(i).getSize()?.[0]||0,height:j(i).getSize()?.[1]||0},null,8,wT)),(I(!0),L(F,null,P(a,t=>(I(),L(`div`,{id:`gf-popup-card-${t.id}`,key:t.id,class:`gf-popup-card`,style:ye({left:(t.layout?.offset?.x??t.info.lockedOffset?.x??0)+`px`,top:(t.layout?.offset?.y??t.info.lockedOffset?.y??0)+`px`,pointerEvents:`auto`})},[R(`div`,{class:`gf-popup-card__handle`,onPointerdown:e=>g(t.id,e),onPointermove:_,onPointerup:v,onPointercancel:v},`⋮⋮`,40,ET),R(`button`,{class:`gf-popup-card__close`,title:`关闭`,onClick:e=>f(t.id)},`✕`,8,DT),y(t.info.content)?(I(),xa(Jr(t.info.content.component),Na({key:0,ref_for:!0},t.info.content.props||{},{feature:t.info.feature,engine:e.engine,onClose:e=>f(t.id)}),null,16,[`feature`,`engine`,`onClose`])):(I(),L(`div`,OT,[R(`div`,kT,k(t.info.content?.title||`详情`),1),R(`table`,AT,[R(`tbody`,null,[(I(!0),L(F,null,P(t.info.content?.rows||[],(e,t)=>(I(),L(`tr`,{key:t},[R(`td`,jT,k(e.label),1),R(`td`,MT,k(e.value),1)]))),128))])])]))],12,TT))),128))]))}}),[[`__scopeId`,`data-v-12b0949d`]]),PT=new class{cards=new Map;layouts=new Map;viewport={width:0,height:0};defaultOptions={leaderStyle:`polyline`,viewportPadding:8,draggable:!0};listeners=[];setViewport(e){this.viewport={...e},this.relayout()}on(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}emit(e){this.listeners.forEach(t=>t(e))}open(e,t){let n=this.cards.get(e.id);if(n){n.content=e.content,n.size=e.size,n.anchorScreen=e.anchorScreen,t&&Object.assign(n,t),this.emit({type:`update`,id:e.id,feature:e.feature}),this.relayout();return}this.cards.set(e.id,{...e,...this.defaultOptions,...t}),this.emit({type:`open`,id:e.id,feature:e.feature}),this.relayout()}close(e){let t=this.cards.get(e);t&&(this.cards.delete(e),this.layouts.delete(e),this.emit({type:`close`,id:e,feature:t.feature}),t.onClose?.(e),this.relayout())}closeByFeature(e){for(let[t,n]of this.cards)if(String(n.feature?.id??n.feature)===String(e)){this.close(t);return}}lockPosition(e,t){let n=this.cards.get(e);n&&(n.locked=!0,n.lockedOffset={...t},this.relayout())}unlockPosition(e){let t=this.cards.get(e);t&&(t.locked=!1,t.lockedOffset=void 0,this.relayout())}updateAnchors(e){for(let[t,n]of e){let e=this.cards.get(t);e&&(e.anchorScreen=n)}this.relayout()}getLayout(e){return this.layouts.get(e)}list(){return[...this.cards.values()]}clear(){this.cards.forEach((e,t)=>this.close(t)),this.listeners=[],this.layouts.clear()}relayout(){if(this.viewport.width===0||this.cards.size===0)return;let e=yT.solve({viewport:this.viewport,cards:this.list(),padding:this.defaultOptions.viewportPadding??8});for(let[t,n]of e)this.layouts.set(t,n),this.emit({type:`layout`,id:t,layout:n})}};function FT(e,t,n){let r=[];return iT(t).forEach(e=>{if(!e||e.mode!==`categorical`||!e.colorField)return;let t=n.find(t=>t.name===e.colorField)?.values||[],i=oT[e.palette]||oT.blue;t.forEach(e=>{let t=String(e),n=i.semantic?.[t]||i.colors[$g(t,i.colors.length)];r.some(e=>e.label===t&&e.color===n)||r.push({label:t,color:n})})}),r.length?{layer:e,entries:r}:null}function IT(e){return Array.isArray(e)?{type:`FeatureCollection`,features:e}:e}var LT=class{cfg;layer;source;current=null;effectCleanups=[];deps;zoomAdapter;lastCtx;paused=!1;envDisposer;restartScheduled=!1;originalPayload;filterFields=[];legend=null;owner;constructor(e,t){this.cfg=e,this.deps=t,this.manager.register(e),this.source=new Xw,this.layer=new Hw({zIndex:e.zIndex,visible:e.visible!==!1,source:this.source}),this.layer.set(`layerKey`,e.id),this.layer.setStyle(hT(this.styleHost(),this.layer)),this.filterFields=e.filterFields??[]}get manager(){return this.deps.manager||gT}updateConfig(e){return this.cfg.style!==e.style&&sT.clearByLayer(e.id),this.cfg=e,this.layer.setVisible(e.visible!==!1),e.zIndex!=null&&this.layer.setZIndex(e.zIndex),this}setStyle(e){return this.cfg.style=e,sT.clearByLayer(this.cfg.id),this.layer.setStyle(hT(this.styleHost(),this.layer)),this}setProcessors(e){return this.cfg.processors=e,this}setPopup(e){return this.cfg.popup=e,this}setInteraction(e){return this.cfg.interaction=e,this}setProvider(e){return this.cfg.provider=e,this}setEffects(e){return this.cfg.effects=e,this.reattachEffects(),this}run(e,t,n){return this.owner?.run(e,t||{},n)}styleHost(){return{fields:this.current?.fields||[],style:this.cfg.style,highlight:this.cfg.interaction?.highlight,popup:this.cfg.popup,getView:()=>this.deps.map.getView(),zoomAdapter:this.zoomAdapter,env:this.deps.env?.snapshot()}}setZoomAdapter(e){return this.zoomAdapter=e,sT.clearByLayer(this.cfg.id),this}async execute(e){this.lastCtx=e,this.manager.patch(this.cfg.id,{loading:!0,error:void 0});try{let t=await Ju(this.cfg.provider).fetch(e),n={datasetId:this.cfg.provider?.config?.datasetId,geometryType:t.geometryType||`Mixed`,features:t.data,fields:t.fields||[]};n=await Zw(this.cfg.processors,n,e),this.current=n,this.applyToMap(n),this.reattachEffects()}catch(e){throw this.manager.patch(this.cfg.id,{loading:!1,error:String(e?.message||e)}),e}}applyToMap(e){this.renderPayload(e)}renderPayload(e){let t=new dv().readFeatures(e.features,{featureProjection:`EPSG:3857`});this.source.clear(),this.source.addFeatures(t),this.layer.setStyle(hT(this.styleHost(),this.layer)),this.legend=FT(this.cfg.name,this.cfg.style,e.fields),this.manager.patch(this.cfg.id,{loading:!1,featureCount:t.length,geometryType:e.geometryType})}appendData(e,t){let n=IT(e),r=new dv().readFeatures(n,{featureProjection:`EPSG:3857`});if(t?.clear&&this.source.clear(),this.source.addFeatures(r),!this.current)this.current={features:n,fields:Vu(n),geometryType:Bu(n)};else{let e={...this.current.features,features:[...this.current.features.features,...n.features]};this.current={...this.current,features:e,fields:Vu(e)}}return this.legend=FT(this.cfg.name,this.cfg.style,this.current.fields),this.manager.patch(this.cfg.id,{featureCount:this.source.getFeatures().length}),this}updateData(e,t){let n=IT(e);t?.keepOriginal&&!this.originalPayload&&this.current&&(this.originalPayload=this.current);let r={datasetId:this.current?.datasetId,geometryType:Bu(n),features:n,fields:Vu(n)};return this.current=r,this.renderPayload(r),this}snapshotOriginal(){return this.current&&(this.originalPayload=this.current),this}restoreOriginal(){return this.originalPayload?(this.current=this.originalPayload,this.renderPayload(this.originalPayload),this):this}clearData(){return this.source.clear(),this.manager.patch(this.cfg.id,{featureCount:0}),this}registerFilterFields(e){return this.filterFields=e,this.cfg.filterFields=e,this}getFilterFields(){return this.filterFields}filterData(e){if(e!=null){let t=nT(this.source.getFeatures(),e);return this.applyFilterResult(t),this}return new rT(this)}applyFilterResult(e){this.source.clear(),this.source.addFeatures(e),this.manager.patch(this.cfg.id,{featureCount:e.length})}resetFilter(){return this.current&&this.renderPayload(this.current),this}reattachEffects(){this.effectCleanups.forEach(e=>e()),this.effectCleanups=[];let e={map:this.deps.map,layer:this.layer,source:this.source,helpers:{}};this.effectCleanups=Qw(this.cfg.effects,e)}write(e,t){this.layer.get(e)!==t&&(this.layer.set(e,t),this.layer.changed(),this.manager.patch(this.cfg.id,{[e]:t}))}setHover(e){return this.write(`hoverId`,e),this}clearHover(){return this.write(`hoverId`,void 0),this}setSelected(e){return this.write(`selectedId`,e),this}clearSelected(){return this.write(`selectedId`,void 0),this}clickFeature(e,t){this.setSelected(e.get(`id`)),this.cfg.popup&&this.openPopup(e,t)}openPopup(e,t){let n=this.cfg.popup,r=String(e.get(n.titleField||`name`)??`详情`),i=(n.contentFields.length?n.contentFields:this.current?.fields.map(e=>e.name)||[]).map(t=>({label:this.current?.fields.find(e=>e.name===t)?.label||t,value:e.get(t)??`—`}));this.deps.popupBridge.open({title:r,rows:i,coordinate:t})}locate(e){let t=this.source.getFeatures().find(t=>String(t.get(`id`))===String(e));if(!t)return null;let n=t.getGeometry();if(!n)return null;if(this.setSelected(t.get(`id`)),this.cfg.popup){let e=n.getType()===`Point`;this.openPopup(t,e?n.getCoordinates():xd(n.getExtent()))}return{extent:n.getExtent(),isPoint:n.getType()===`Point`}}setVisible(e){return this.layer.setVisible(e),this.manager.patch(this.cfg.id,{visible:e}),this}pause(){return this.paused=!0,this}resume(){return this.paused=!1,this.restart(),this}restart(){this.lastCtx&&(this.deps.env&&(this.lastCtx.env=this.deps.env.snapshot()),this.execute(this.lastCtx))}subscribeEnv(e){return this.envDisposer?.(),this.envDisposer=this.deps.env?.watchEnv(e,()=>{sT.clearByLayer(this.cfg.id),this.scheduleRestart()}),this}scheduleRestart(){this.paused||this.restartScheduled||!this.lastCtx||(this.restartScheduled=!0,queueMicrotask(()=>{this.restartScheduled=!1,this.restart()}))}getDataItems(){return this.source.getFeatures().map(e=>({layerId:this.cfg.id,layerName:this.cfg.name,id:String(e.get(`id`)),title:String(e.get(this.cfg.popup?.titleField||`name`)??e.get(`id`)),geomType:this.current?.geometryType,props:{...e.getProperties()}}))}dispose(){this.effectCleanups.forEach(e=>e()),this.effectCleanups=[],this.envDisposer?.(),this.envDisposer=void 0}};function RT(e,t){return!e||e===`none`?`none`:e===`full`?`full`:t===`left`||t===`right`?e===`column`?`column`:`none`:e===`row`?`row`:`none`}var zT=class{widgets=Zt({});collapsed=Zt({});seq=0;orders=Zt({});dock(e){let t=this.widgets[e.id];t?e.order!=null&&(this.orders[e.id]=e.order):(this.seq+=1,this.orders[e.id]=e.order??this.seq);let n=t??{},r=RT(e.span??n.span,e.position);this.widgets[e.id]={...n,...e,span:r},this.collapsed[e.id]=e.defaultCollapsed?!0:!!e.collapsed}undock(e){this.widgets[e]&&(delete this.widgets[e],delete this.collapsed[e],delete this.orders[e])}move(e,t){let n=this.widgets[e];n&&this.dock({...n,position:t})}get(e){return this.widgets[e]}setVisible(e,t){let n=this.widgets[e];n&&this.dock({...n,visible:t})}setSpan(e,t){let n=this.widgets[e];n&&this.dock({...n,span:t})}setPriority(e,t){let n=this.widgets[e];n&&this.dock({...n,priority:t})}isCollapsed(e){return!!this.collapsed[e]}toggleCollapse(e){let t=this.widgets[e];t&&t.collapsible!==!1&&(this.collapsed[e]=!this.collapsed[e])}setCollapsed(e,t){this.widgets[e]&&(this.collapsed[e]=!!t)}list(e){return this.sorted().filter(t=>t.position===e)}regionsAll(){return[...kv]}sorted(){return Object.values(this.widgets).filter(e=>e.visible!==!1).sort((e,t)=>this.sortKeyOf(t)-this.sortKeyOf(e))}sortKeyOf(e){let t=e.priority??0,n=this.orders[e.id]??0;return-t*1e9+n}runtimeState(e){let t=this.widgets[e];return t?{id:t.id,position:t.position,order:this.orders[t.id]??0,priority:t.priority??0,span:RT(t.span,t.position),visible:t.visible!==!1,collapsed:this.isCollapsed(t.id),sortKey:this.sortKeyOf(t)}:null}load(e){this.clear(),(e?.items||[]).forEach(e=>this.dock(e))}toJSON(){return{items:Object.values(this.widgets).map(e=>{let{collapsed:t,component:n,...r}=e;return r})}}clear(){[...Object.keys(this.widgets)].forEach(e=>this.undock(e)),this.seq=0}},BT=new zT,VT=class{state=Zt({});get(e){return this.state[e]}set(e,t){this.state[e]=t}has(e){return e in this.state}watchEnv(e,t){let n=!0,r=tt(()=>{for(let t of e)this.state[t];if(n){n=!1;return}t()});return()=>nt(r)}snapshot(){return{...this.state}}clear(){for(let e of Object.keys(this.state))delete this.state[e]}},HT={"basemap.esri-imagery":`Imagery © Esri`,"basemap.carto-labels":`© OpenStreetMap, © CartoDB`,"basemap.carto-light":`© OpenStreetMap, © CartoDB`,"basemap.osm":`© OpenStreetMap contributors`,"basemap.tianditu-vec":`© 天地图`,"basemap.tianditu-img":`© 天地图`,"basemap.tianditu-cva":`© 天地图`,"basemap.amap-vec":`© 高德地图`,"basemap.amap-img":`© 高德地图`},UT=class{manager;cfg;dockManager=new zT;popupManager=PT;state=Zt({ready:!1,routeName:``,popup:null,pointer:null,loadingLayerCount:0,legends:[]});engines=new Map;baseLayers=new Map;overlay=null;fitted=new Set;runToken=0;env=new VT;envCleanup=null;hooks={};constructor(e){this.manager=new ZC(e.target),this.cfg=e.cfg||{version:`2.0.0`},e.popupEl&&this.setupOverlay(e.popupEl),this.bindInteractions(),this.bindEnv(),(this.cfg.baseLayers?.length||this.cfg.controls?.length||this.cfg.layers?.length)&&this.applyMapConfig(this.cfg)}baseLayer(e,t={}){let n={id:e,url:Nv.resolve(e),attributions:HT[e],...t};return this.baseLayers.set(e,this.manager.addBaseLayer(n)),this}control(e,t){return this.manager.addControl({id:e,options:t}),this}dock(e){return this.dockManager.dock(e),this}loadDock(e){return this.dockManager.load(e),this}dockOf(e){return this.dockManager.get(e)}undock(e){return this.dockManager.undock(e),this}dockJSON(){return this.dockManager.toJSON()}layer(e){let t=new LT(e,{popupBridge:this.popupBridge,map:this.manager.map,env:this.env});return this.manager.map.addLayer(t.layer),t.owner=this,this.engines.set(e.id,t),this.cfg.layers||(this.cfg.layers=[]),this.cfg.layers.some(t=>t.id===e.id)||this.cfg.layers.push(e),t}attachLayer(e){let t=e.buildPipeline(this.manager.map,{popupBridge:this.popupBridge,env:this.env});t.owner=this,this.engines.set(e.id,t);let n=e.getConfig();return this.cfg.layers||(this.cfg.layers=[]),this.cfg.layers.some(t=>t.id===e.id)||this.cfg.layers.push(n),t}fromJSON(e){return this.cfg=e,this.applyMapConfig(e),this.loadDock(e.dock),this}toJSON(){return{...this.cfg,layers:[...this.engines.values()].map(e=>e.cfg),dock:this.dockManager.toJSON()}}applyMapConfig(e){(e.baseLayers||[]).forEach(e=>{this.baseLayers.has(e.id)||this.baseLayers.set(e.id,this.manager.addBaseLayer(e))}),(e.controls||[]).forEach(e=>this.manager.addControl(e)),(e.layers||[]).forEach(e=>{let t=this.engines.get(e.id);t?t.updateConfig(e):this.layer(e)})}setupOverlay(e){this.overlay=new Mv({element:e,positioning:`bottom-center`,offset:[0,-14],stopEvent:!1,autoPan:{animation:{duration:200}}}),this.manager.map.addOverlay(this.overlay)}popupBridge={open:e=>{this.state.popup=e,this.overlay?.setPosition(e.coordinate);let t=e.id??`popup:${e.coordinate.map(e=>e.toFixed(2)).join(`,`)}`,n=this.manager.map.getPixelFromCoordinate(e.coordinate);this.popupManager.open({id:t,feature:{id:t,coordinate:e.coordinate},coordinate:e.coordinate,anchorScreen:n?[n[0],n[1]]:[0,0],size:{width:300,height:200},content:e},{draggable:!0})},close:()=>{this.state.popup=null,this.overlay?.setPosition(void 0);let e=this.popupManager.list();e.length&&this.popupManager.close(e[e.length-1].id)}};closePopup(){this.popupBridge.close()}closePopupById(e){this.popupManager.close(e)}lockPopupPosition(e,t){this.popupManager.lockPosition(e,t)}unlockPopupPosition(e){this.popupManager.unlockPosition(e)}bindInteractions(){let e=this.manager.map;e.on(`pointermove`,t=>{let n=e.forEachFeatureAtPixel(t.pixel,(e,t)=>{let n=this.engineOf(t);return n?{engine:n,feature:e}:void 0},{hitTolerance:4});e.getViewport().style.cursor=n?`pointer`:``,this.engines.forEach(e=>{e.cfg.interaction?.highlight?.trigger===`hover`?e.setHover(n&&n.engine===e?n.feature.get(`id`):void 0):e.layer.get(`hoverId`)!==void 0&&e.clearHover()}),this.state.pointer=t.coordinate}),e.on(`singleclick`,t=>{let n=e.forEachFeatureAtPixel(t.pixel,(e,t)=>{let n=this.engineOf(t);return n?{engine:n,feature:e}:void 0},{hitTolerance:4});if(!n){this.engines.forEach(e=>e.clearSelected()),this.closePopup(),this.hooks.onFeatureClick?.(null);return}this.engines.forEach(e=>{e!==n.engine&&e.clearSelected()}),n.engine.clickFeature(n.feature,t.coordinate);let r=n.engine.cfg;this.hooks.onFeatureClick?.({layerId:r.id,layerName:r.name,featureId:String(n.feature.get(`id`)),properties:{...n.feature.getProperties()}})})}engineOf(e){for(let t of this.engines.values())if(t.layer===e)return t}bindEnv(){let e=this.manager.view,t=()=>{this.env.set(`viewZoom`,e.getZoom()??0),this.env.set(`viewCenter`,e.getCenter()??null)};e.on(`change:resolution`,t),e.on(`change:center`,t),t(),this.envCleanup=()=>{e.un(`change:resolution`,t),e.un(`change:center`,t)}}syncEngines(e){let t=new Set(e.map(e=>e.id));[...this.engines].forEach(([e,n])=>{t.has(e)||(this.manager.map.removeLayer(n.layer),n.dispose(),gT.remove(e),this.engines.delete(e))}),e.forEach(e=>{let t=this.engines.get(e.id);t?t.updateConfig(e):this.layer(e)})}async run(e,t={},n){let r=++this.runToken,i=n||this.cfg.layers||[];this.syncEngines(i);let a={runId:r,routeName:e,query:t,params:{},revision:r,utils:{},env:this.env.snapshot(),resolveAsset:e=>Nv.resolve(e)};this.state.routeName=e,this.state.loadingLayerCount=i.length,await Promise.all([...this.engines.values()].map(e=>e.execute(a).catch(e=>console.warn(`[GeoFlow] 图层执行失败:`,e)))),this.state.loadingLayerCount=0,this.state.ready=!0,this.state.legends=this.legends,this.fitRoute(e)}fitRoute(e){this.fitted.has(e)||(this.fitted.add(e),requestAnimationFrame(()=>this.fitAll(60)))}resetViewState(){this.fitted.clear(),this.engines.forEach(e=>e.clearSelected()),this.closePopup()}locate(e){for(let t of this.engines.values()){let n=t.locate(e);if(n)return this.manager.view.fit(n.extent,{duration:600,maxZoom:n.isPoint?13:void 0,padding:[60,60,60,60]}),!0}return!1}zoomIn(){let e=this.manager.view;e.animate({zoom:(e.getZoom()||9)+1,duration:200})}zoomOut(){let e=this.manager.view;e.animate({zoom:(e.getZoom()||9)-1,duration:200})}setLayerVisible(e,t){this.engines.get(e)?.setVisible(t)}setBasemap(e){this.baseLayers.forEach(e=>this.manager.removeBaseLayer(e)),this.baseLayers.clear(),this.baseLayer(e)}fitAll(e=50){let t=null;this.engines.forEach(e=>{let n=e.source.getExtent();n&&isFinite(n[0])&&(t?(t[0]=Math.min(t[0],n[0]),t[1]=Math.min(t[1],n[1]),t[2]=Math.max(t[2],n[2]),t[3]=Math.max(t[3],n[3])):t=[...n])}),t&&this.manager.view.fit(t,{duration:500,padding:[e,e,e,e]})}getDataItems(){return[...this.engines.values()].flatMap(e=>e.getDataItems())}debugState(){return[...this.engines].map(([e,t])=>({id:e,hoverId:t.layer.get(`hoverId`),selectedId:t.layer.get(`selectedId`)}))}get map(){return this.manager.map}get legends(){return[...this.engines.values()].filter(e=>e.legend).map(e=>({layerId:e.cfg.id,...e.legend}))}destroy(){this.engines.forEach(e=>e.dispose()),this.engines.clear(),this.envCleanup?.(),this.envCleanup=null,this.env.clear(),this.manager.dispose()}};function WT(e){return new UT(e)}var GT=new class{entries=Zt({});keyOf(e,t){return`${e}:${t}`}register(e,t,n,r){let i=this.keyOf(e,t);this.entries[i]={category:e,key:t,value:n,defaultValue:n,options:r}}get(e,t){return this.entries[this.keyOf(e,t)]?.value}has(e,t){return this.keyOf(e,t)in this.entries}set(e,t,n){let r=this.keyOf(e,t);this.entries[r]&&(this.entries[r].value=n)}listByCategory(e){return Object.values(this.entries).filter(t=>t.category===e)}reset(e,t){let n=this.keyOf(e,t);this.entries[n]&&(this.entries[n].value=this.entries[n].defaultValue)}},KT=class e{cfg;constructor(e){let t=iT(e)[0];this.cfg={mode:`single`,color:`#4f8cff`,radius:7,width:2,fillOpacity:.35,...t}}fill(e){return this.cfg.fill={...this.cfg.fill,...e},e.color!=null&&(this.cfg.color=e.color),e.opacity!=null&&(this.cfg.fillOpacity=e.opacity),this}stroke(e){return this.cfg.stroke={...this.cfg.stroke,...e},e.color!=null&&(this.cfg.color=e.color),e.width!=null&&(this.cfg.width=e.width),this}circle(e){return this.cfg.circle={...this.cfg.circle,...e},e.radius!=null&&(this.cfg.radius=e.radius),e.color!=null&&(this.cfg.color=e.color),e.opacity!=null&&(this.cfg.fillOpacity=e.opacity),this}icon(e){return this.cfg.iconStage={...this.cfg.iconStage,...e},e.src!=null&&(this.cfg.icon=e.src),e.scale!=null&&(this.cfg.iconScale=e.scale),e.rotation!=null&&(this.cfg.iconRotation=e.rotation),e.opacity!=null&&(this.cfg.iconOpacity=e.opacity),this}text(e){return this.cfg.text={...this.cfg.text,...e},e.field!=null&&(this.cfg.labelField=e.field),this}rule(e){return this.cfg.rules||(this.cfg.rules=[]),this.cfg.rules.push(e),this}rules(e){return this.cfg.rules||(this.cfg.rules=[]),this.cfg.rules.push(...e),this}single(e){return this.cfg.mode=`single`,this.cfg.color=e,this}categorical(e,t=`semantic`){return this.cfg.mode=`categorical`,this.cfg.colorField=e,this.cfg.palette=t,this}semantic(e){return this.categorical(e,`semantic`)}radius(e){return this.cfg.radius=e,this.cfg.circle={...this.cfg.circle,radius:e},this}width(e){return this.cfg.width=e,this.cfg.stroke={...this.cfg.stroke,width:e},this}opacity(e){return this.cfg.fillOpacity=e,this.cfg.fill={...this.cfg.fill,opacity:e},this}label(e){return this.cfg.labelField=e,this.cfg.text={...this.cfg.text,field:e},this}toJSON(){return JSON.parse(JSON.stringify(this.cfg))}static fromJSON(t){return new e(t)}};function qT(e){return new KT(e)}var JT=new class{state=Zt({theme:`dark`,layerIds:[]});builders=new Map;overrides=new Map;setTheme(e){this.state.theme=e}registerLayer(e,t){let n=t||this.builders.get(e)||new KT;return this.builders.set(e,n),this.state.layerIds.includes(e)||this.state.layerIds.push(e),n}getBuilder(e){return this.builders.get(e)}apply(e){Object.entries(e).forEach(([e,t])=>{this.overrides.set(e,t);let n=iT(t)[0];this.registerLayer(e,n?KT.fromJSON(n):void 0)})}resolve(e){return this.overrides.get(e)??this.builders.get(e)?.toJSON()}toJSON(){let e={};return this.builders.forEach((t,n)=>e[n]=t.toJSON()),e}clear(){this.builders.clear(),this.overrides.clear(),this.state.layerIds=[]}},YT=Symbol(`gf-dock-bare`),XT={"top-left":{top:`12px`,left:`12px`},"top-right":{top:`12px`,right:`12px`},"top-center":{top:`12px`,left:`50%`,transform:`translateX(-50%)`},"bottom-left":{bottom:`12px`,left:`12px`},"bottom-right":{bottom:`12px`,right:`12px`},"bottom-center":{bottom:`12px`,left:`50%`,transform:`translateX(-50%)`}},ZT=N({name:`GfBaseWidget`,props:{position:{type:String,default:`top-right`},draggable:{type:Boolean,default:!0},title:{type:String,default:``},visible:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},bare:{type:Boolean,default:void 0}},emits:[`close`],setup(e,{slots:t,emit:n}){let r=Xn(YT,!1),i=e.bare===!0||r===!0,a=A(!1),o=Zt({left:0,top:0}),s=Zt({active:!1,sx:0,sy:0,bx:0,by:0});function c(t){if(!e.draggable)return;let n=t.currentTarget,r=n.parentElement,i=(r.offsetParent||document.body).getBoundingClientRect(),c=r.getBoundingClientRect();s.active=!0,s.sx=t.clientX,s.sy=t.clientY,s.bx=c.left-i.left,s.by=c.top-i.top,a.value=!0,o.left=s.bx,o.top=s.by;try{n.setPointerCapture(t.pointerId)}catch{}t.stopPropagation()}function l(e){s.active&&(o.left=s.bx+(e.clientX-s.sx),o.top=s.by+(e.clientY-s.sy))}function u(e){if(s.active){s.active=!1;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}}return()=>{if(!e.visible)return null;if(i)return V(`div`,{class:`gf-widget gf-widget--bare`},t.default?.());let r=a.value?{left:o.left+`px`,top:o.top+`px`}:{...XT[e.position]},d=[V(`span`,{class:`gf-widget__title`},e.title)];return e.closable&&d.push(V(`button`,{class:`gf-widget__close`,type:`button`,title:`关闭`,onClick:e=>{e.stopPropagation(),n(`close`)}},`×`)),V(`div`,{class:[`gf-widget`,{"gf-widget--dragging":s.active}],style:r},[V(`div`,{class:`gf-widget__header`,style:{cursor:e.draggable?`move`:`default`,touchAction:`none`},onPointerdown:c,onPointermove:l,onPointerup:u,onPointercancel:u},d),V(`div`,{class:`gf-widget__body`},t.default?.())])}}}),QT=[{id:`basemap.osm`,label:`街道图 (OSM)`},{id:`basemap.esri-imagery`,label:`影像图 (Esri)`}],$T=N({name:`GfMapToolbar`,props:{engine:{type:Object,default:null},position:{type:String,default:`top-right`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`工具`},basemaps:{type:Array,default:()=>QT}},setup(e){let t=A(e.basemaps[0]?.id||`basemap.osm`);return()=>{let n=e.engine,r=(e,t,n)=>V(`button`,{class:`gf-tb__btn`,type:`button`,title:t,onClick:n},e),i=[r(`＋`,`放大`,()=>n?.zoomIn()),r(`－`,`缩小`,()=>n?.zoomOut()),r(`⤢`,`全图`,()=>n?.fitAll()),r(`⟲`,`复位`,()=>n?.resetViewState()),V(`select`,{class:`gf-tb__select`,value:t.value,onChange:e=>{let r=e.target.value;n?.setBasemap(r),t.value=r}},e.basemaps.map(e=>V(`option`,{key:e.id,value:e.id},e.label)))];return V(ZT,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title},{default:()=>i})}}}),eE=N({name:`GfLayerTree`,props:{engine:{type:Object,default:null},position:{type:String,default:`top-left`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`图层`}},emits:[`close`],setup(e,{emit:t}){return()=>{let n=gT.list(),r=n.length?n.map(t=>V(`li`,{key:t.id,class:`gf-lt__item`},[V(`label`,{class:`gf-lt__label`},[V(`input`,{type:`checkbox`,checked:t.visible,onChange:n=>e.engine?.setLayerVisible(t.id,n.target.checked)}),V(`span`,{class:`gf-lt__name`},t.name||t.id)]),V(`span`,{class:`gf-lt__meta`},`${t.featureCount} 个 · ${t.geometryType}`)])):V(`li`,{class:`gf-lt__empty`},`暂无图层`);return V(ZT,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title,closable:!0,onClose:()=>t(`close`)},{default:()=>[V(`ul`,{class:`gf-lt__list`},[r])]})}}}),tE=N({name:`GfLegend`,props:{engine:{type:Object,default:null},position:{type:String,default:`bottom-left`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`图例`}},emits:[`close`],setup(e,{emit:t}){let n=to(()=>{let t=e.engine;return t?t.state.legends.filter(e=>{let t=gT.get(e.layerId||e.layer);return!t||t.visible!==!1}):[]});return()=>{let r=n.value;if(!r.length)return null;let i=r.map(e=>V(`div`,{key:e.layer,class:`gf-lg__group`},[V(`div`,{class:`gf-lg__layer`},e.layer),...e.entries.map(e=>V(`div`,{key:e.label,class:`gf-lg__entry`},[V(`span`,{class:`gf-lg__swatch`,style:{background:e.color}}),V(`span`,{class:`gf-lg__text`},e.label)]))]));return V(ZT,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title,closable:!0,onClose:()=>t(`close`)},{default:()=>i})}}}),nE=N({name:`GfStatPanel`,props:{engine:{type:Object,default:null},position:{type:String,default:`bottom-right`},draggable:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},title:{type:String,default:`统计`},statField:{type:String,default:``}},emits:[`close`],setup(e,{emit:t}){let n=to(()=>{let t=gT.list().filter(e=>e.visible!==!1);if(!e.statField||!e.engine)return t.map(e=>({id:e.id,name:e.name||e.id,count:e.featureCount}));let n=e.engine.getDataItems();return t.map(t=>{let r=n.filter(e=>e.layerId===t.id).map(t=>Number(t.props?.[e.statField])).filter(e=>!Number.isNaN(e)),i=r.reduce((e,t)=>e+t,0);return{id:t.id,name:t.name||t.id,count:r.length,sum:i,avg:r.length?i/r.length:0}})});return()=>{let r=n.value;if(!r.length)return null;let i=[V(`ul`,{class:`gf-sp__list`},r.map(e=>V(`li`,{key:e.id,class:`gf-sp__item`},[V(`span`,{class:`gf-sp__name`},e.name),V(`span`,{class:`gf-sp__val`},rE(e))])))];return V(ZT,{position:e.position,draggable:e.draggable,visible:e.visible,title:e.title,closable:!0,onClose:()=>t(`close`)},{default:()=>i})}}});function rE(e){return e.sum===void 0?`${e.count} 个`:`${e.count} 个 · Σ ${e.sum.toFixed(1)} · x̄ ${e.avg.toFixed(1)}`}var iE=new Map;function aE(e,t,n){iE.set(e,{component:t,...n})}function oE(e,t){if(t)return{component:t};if(e&&iE.has(e))return iE.get(e)}var sE=!1;function cE(){sE||(sE=!0,aE(`map-toolbar`,$T,{title:`工具`}),aE(`layer-tree`,eE,{title:`图层`}),aE(`legend`,tE,{title:`图例`}),aE(`stat-panel`,nE,{title:`统计`}))}cE();var lE={"top-left":{strip:`top`,place:`start`},"top-center":{strip:`top`,place:`center`},"top-right":{strip:`top`,place:`end`},left:{strip:`left`,place:`center`},right:{strip:`right`,place:`center`},"bottom-left":{strip:`bottom`,place:`start`},"bottom-center":{strip:`bottom`,place:`center`},"bottom-right":{strip:`bottom`,place:`end`}},uE=[`top`,`left`,`right`,`bottom`];function dE(e,t){return e===`none`?!1:t===`left`||t===`right`||e===`row`||e===`full`}var fE=N({name:`GfDockContainer`,props:{manager:{type:null,default:void 0},engine:{type:Object,default:null},draggable:{type:Boolean,default:!0}},setup(e){let t=e.manager||BT;Yn(YT,!0);let n=A(null),r=null;function i(e,t){let n=document.elementFromPoint(e,t)?.closest?.(`[data-dock-strip]`);if(!n)return null;let r=n.getAttribute(`data-dock-strip`);return uE.includes(r)?r:null}function a(t,n){if(e.draggable){r={id:t,sx:n.clientX,sy:n.clientY,active:!0,moved:!1};try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.stopPropagation()}}function o(e){if(r?.active){if(!r.moved){if(Math.abs(e.clientX-r.sx)+Math.abs(e.clientY-r.sy)<4)return;r.moved=!0}n.value=i(e.clientX,e.clientY)}}function s(e){if(!r?.active)return;let a=r.moved&&i(e.clientX,e.clientY)||null;if(a){let e=t.get(r.id);e&&e.position!==a&&t.move(r.id,a)}n.value=null,r=null;try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}function c(n){let i=oE(n.type,n.component),c=RT(n.span,n.position),l=dE(c,lE[n.position].strip),u=!!t.collapsed[n.id],d={flex:l?`1 1 auto`:`0 0 auto`};c===`full`&&(d.width=`100%`),(lE[n.position].strip===`left`||lE[n.position].strip===`right`)&&(d.maxHeight=`100%`);let f=V(`div`,{class:`gf-dock__head`,style:{cursor:e.draggable?`move`:`default`},onPointerdown:e=>a(n.id,e),onPointermove:o,onPointerup:s,onPointercancel:s},[V(`span`,{class:`gf-dock__title`},n.title||n.type||n.id),n.collapsible===!1?null:V(`button`,{class:`gf-dock__toggle`,type:`button`,title:u?`展开`:`折叠`,onClick:e=>{e.stopPropagation(),t.toggleCollapse(n.id)}},u?`+`:`−`)]),p=i?V(`div`,{class:`gf-dock__body`},[V(i.component,{key:n.id,engine:e.engine,position:n.position,title:n.title,...i.props||{},...n.props||{}})]):V(`div`,{class:`gf-dock__empty`},`未注册微件：${n.type||`unknown`}`);return V(`div`,{key:n.id,class:[`gf-dock__item`,`gf-dock__item--${c}`,{"gf-dock__item--collapsed":u,"gf-dock__item--dragging":r?.moved===!0}],style:d},[f,u?null:p])}function l(e){let r=e===`top`||e===`bottom`,i=t.sorted().filter(t=>lE[t.position].strip===e).map(e=>{let t=c(e),n=lE[e.position].place;return r&&(t.props={...t.props,style:{...t.props?.style||{},...n===`end`?{marginLeft:`auto`}:{},...n===`center`?{marginLeft:`auto`,marginRight:`auto`}:{}}}),t});return V(`div`,{class:[`gf-dock__strip`,`gf-dock__strip--${e}`,{"gf-dock__strip--over":n.value===e},{"gf-dock__strip--empty":!i.length}],"data-dock-strip":e,style:{flexDirection:r?`row`:`column`}},i)}return()=>V(`div`,{class:[`gf-dock`,{"gf-dock--dragging":n.value!==null}]},uE.map(l))}});function pE(){return{manager:BT,dock:e=>BT.dock(e),load:e=>BT.load(e),snapshot:()=>BT.toJSON(),undock:e=>BT.undock(e),move:(e,t)=>BT.move(e,t),list:e=>BT.list(e),all:()=>BT.sorted(),runtimeState:e=>BT.runtimeState(e),setVisible:(e,t)=>BT.setVisible(e,t),setSpan:(e,t)=>BT.setSpan(e,t),setPriority:(e,t)=>BT.setPriority(e,t),isCollapsed:e=>BT.isCollapsed(e),toggleCollapse:e=>BT.toggleCollapse(e),setCollapsed:(e,t)=>BT.setCollapsed(e,t)}}function mE(e,t,n,r){return GT.has(e,t)||GT.register(e,t,n,r),to({get:()=>{let r=GT.get(e,t);return r===void 0?n:r},set:n=>GT.set(e,t,n)})}var hE=class{cfg;onConfigChange;constructor(e){this.cfg=e}getConfig(){return{...this.cfg}}setVisible(e){this.cfg.visible=e,this.onConfigChange?.(this.cfg)}updateConfig(e){Object.assign(this.cfg,e),this.onConfigChange?.(this.cfg)}toJson(){return{...this.cfg}}},gE=class extends hE{type=`vector`;layerEngine=null;mapRef=null;constructor(e){super(e)}attach(e){this.mapRef=e}detach(){this.layerEngine&&=(this.layerEngine.dispose(),this.mapRef?.removeLayer?.(this.layerEngine.layer),null),this.mapRef=null}buildPipeline(e,t){let n=new LT(this.cfg,{popupBridge:t.popupBridge,map:e,env:t.env});return e.addLayer(n.layer),this.layerEngine=n,this.mapRef=e,n}getLayerEngine(){return this.layerEngine}},_E=new Set([`source`,`geojson-source`,`url-source`,`api-source`,`mock-source`]),vE=new Set([`processor`,`filter`,`mapping`,`aggregate`,`buffer`,`normalize`,`pick-fields`]);function yE(e){let t=new Map(e.nodes.map(e=>[e.id,e])),n=(t,n)=>e.nodes.filter(e=>e.type===t).map(n),r=(t,n)=>e.connections.find(e=>e.target===t&&e.targetInput===n),i=n=>{let i={...n.params},a=[],o=new Set,s=r(n.id,`data`);for(;s&&!o.has(s.source);){o.add(s.source);let e=t.get(s.source);if(!e)break;if(vE.has(e.type)&&e.params?.ref)a.unshift({ref:String(e.params.ref),options:e.params.options||{}});else if(_E.has(e.type)&&e.params?.type){i.provider=e.params;break}else break;s=r(e.id,`input`)}a.length&&(i.processors=[...i.processors||[],...a]);let c=[];for(let r of e.connections){if(r.target!==n.id||r.targetInput!==`effects`)continue;let e=t.get(r.source);e&&e.params?.ref&&c.push({ref:String(e.params.ref),options:e.params.options||{}})}return c.length&&(i.effects=[...i.effects||[],...c]),i},a=e.nodes.filter(e=>e.type===`layer`).map(t=>e.connections.some(e=>e.target===t.id&&(e.targetInput===`data`||e.targetInput===`effects`))?i(t):t.params),o=n(`basemap`,e=>{let t=e.params;return{id:t.id,url:t.url||Nv.resolve(t.id)}});return{version:`2.0.0`,name:e.name,baseLayers:o,controls:n(`control`,e=>e.params),layers:a}}function bE(e,t){let n=yE(t);e.fromJSON(n);let r=(t.nodes.find(e=>e.type===`engine-run`)||t.nodes.find(e=>e.type===`map-output`||e.type===`output`))?.params?.routeName||`graph`;return e.run(r,{}),n}var xE=class{undoStack=[];redoStack=[];max;constructor(e=50){this.max=e}push(e){this.undoStack.push(e),this.undoStack.length>this.max&&this.undoStack.shift(),this.redoStack=[]}canUndo(){return this.undoStack.length>1}canRedo(){return this.redoStack.length>0}undo(){if(!this.canUndo())return null;let e=this.undoStack.pop();return this.redoStack.push(e),this.undoStack[this.undoStack.length-1]??null}redo(){if(!this.canRedo())return null;let e=this.redoStack.pop();return this.undoStack.push(e),e}current(){return this.undoStack[this.undoStack.length-1]??null}clear(){this.undoStack=[],this.redoStack=[]}},SE=`http://www.w3.org/2000/svg`;function CE(e,t,n={width:160,height:100}){let r=e.map(e=>e.x),i=e.map(e=>e.y),a=e.map(e=>e.x+e.w),o=e.map(e=>e.y+e.h),s=Math.min(...r,t.x),c=Math.min(...i,t.y),l=Math.max(...a,t.x+t.w),u=Math.max(...o,t.y+t.h),d=Math.max(1,l-s),f=Math.max(1,u-c),p=Math.min(n.width/d,n.height/f),m=(n.width-d*p)/2,h=(n.height-f*p)/2,g=(e,t)=>({x:(e-s)*p+m,y:(t-c)*p+h}),_=(e,t)=>({x:(e-m)/p+s,y:(t-h)/p+c}),v=document.createElementNS(SE,`svg`);v.setAttribute(`width`,String(n.width)),v.setAttribute(`height`,String(n.height)),v.setAttribute(`class`,`gf-minimap`),e.forEach(e=>{let t=g(e.x,e.y),n=document.createElementNS(SE,`rect`);n.setAttribute(`x`,String(t.x)),n.setAttribute(`y`,String(t.y)),n.setAttribute(`width`,String(Math.max(2,e.w*p))),n.setAttribute(`height`,String(Math.max(2,e.h*p))),n.setAttribute(`rx`,`2`),n.setAttribute(`class`,`gf-minimap__node`),v.appendChild(n)});let y=g(t.x,t.y),b=document.createElementNS(SE,`rect`);return b.setAttribute(`x`,String(y.x)),b.setAttribute(`y`,String(y.y)),b.setAttribute(`width`,String(Math.max(4,t.w*p))),b.setAttribute(`height`,String(Math.max(4,t.h*p))),b.setAttribute(`class`,`gf-minimap__viewport`),v.appendChild(b),{svg:v,toCanvas:_}}function wE(e){return{version:`2.0.0`,name:`basic-chain`,nodes:[{id:`bm`,type:`basemap`,label:`底图 OSM`,params:{id:`basemap.osm`},position:{x:40,y:40}},{id:`c1`,type:`control`,label:`版权`,params:{id:`attribution`},position:{x:40,y:160}},{id:`c2`,type:`control`,label:`比例尺`,params:{id:`scale`},position:{x:40,y:280}},{id:`l1`,type:`layer`,label:`监测站`,params:{id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:e}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}},position:{x:300,y:160}},{id:`out`,type:`map-output`,label:`地图输出`,params:{routeName:`monitor`},position:{x:600,y:160}}],connections:[]}}var TE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港监测站`,risk:.92,value:187,level:`高`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂监测站`,risk:.65,value:142,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武监测站`,risk:.38,value:96,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.43,25.02]},properties:{id:`s4`,name:`洛阳桥监测站`,risk:.55,value:118,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾监测站`,risk:.78,value:165,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港监测站`,risk:.21,value:72,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.61,25.03]},properties:{id:`s7`,name:`小岞监测站`,risk:.45,value:108,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰监测站`,risk:.88,value:178,level:`高`}}]},EE={class:`app`},DE={class:`app__stage`},OE={key:0,class:`popup__card`},kE={class:`popup__title`},AE={class:`popup__rows`},jE={class:`popup__row-label`},ME={class:`popup__row-value`},NE=N({__name:`BasicChainDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null);return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:TE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}).run(`monitor`,{}),$n(()=>{r.value=i.value?.state.popup??null}),window.__geoFlow=()=>i.value}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,EE,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 01 · 链式调用 + 内置微件`),R(`span`,{class:`app__hint`},[ka(`点击站点看详情 · 微件可拖拽 · 控制台 `),R(`code`,null,`window.__geoFlow()`)])],-1),R(`div`,DE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,OE,[R(`div`,kE,k(r.value.title),1),R(`div`,AE,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,jE,k(e.label),1),R(`span`,ME,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),PE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港监测站`,risk:.92,value:187,level:`高`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂监测站`,risk:.65,value:142,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武监测站`,risk:.38,value:96,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾监测站`,risk:.78,value:165,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港监测站`,risk:.21,value:72,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰监测站`,risk:.88,value:178,level:`高`}}]},FE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Polygon`,coordinates:[[[118.4,24.9],[118.72,24.9],[118.74,25.12],[118.4,25.14],[118.4,24.9]]]},properties:{id:`bay1`,name:`泉州湾`}}]},IE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`LineString`,coordinates:[[118.46,24.98],[118.52,24.95],[118.58,24.93],[118.61,25.03],[118.55,25.08],[118.49,25.05]]},properties:{id:`r1`,name:`巡测航线 A`}}]},LE={class:`app`},RE={class:`app__stage`},zE={class:`cfg-code`},BE={key:0,class:`popup__card`},VE={class:`popup__title`},HE={class:`popup__rows`},UE={class:`popup__row-label`},WE={class:`popup__row-value`},GE=lu(N({__name:`AnonymousLayerDemo`,setup(e){let t=[{id:`bays`,name:`海湾范围`,zIndex:10,provider:{type:`raw`,config:{data:FE}},style:{mode:`single`,color:`#1976d2`,fillOpacity:.12,width:1.5},interaction:{cursor:!0}},{id:`route`,name:`巡测航线`,zIndex:15,provider:{type:`raw`,config:{data:IE}},style:{mode:`single`,color:`#f59e0b`,width:3},interaction:{cursor:!0}},{id:`stations`,name:`监测站`,zIndex:20,provider:{type:`raw`,config:{data:PE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}],n=A(),r=A(),i=A(null),a=dn(null),o=A(!0),s=JSON.stringify(t,null,2);return Ir(()=>{a.value=WT({target:n.value,popupEl:r.value}),a.value.baseLayer(`basemap.osm`),a.value.run(`monitor`,{},t),$n(()=>{i.value=a.value?.state.popup??null}),window.__geoFlow=()=>a.value}),Br(()=>{a.value?.destroy(),a.value=null}),(e,t)=>(I(),L(`div`,LE,[t[2]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 02 · 匿名图层 JSON 注册 + 内置微件`),R(`span`,{class:`app__hint`},[ka(`图层由 JSON 注入 · 图例随图层显隐同步 · 控制台 `),R(`code`,null,`window.__geoFlow()`)])],-1),R(`div`,RE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:n},null,512),z(j($T),{engine:a.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:a.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:a.value,position:`bottom-left`},null,8,[`engine`]),z(j(nE),{engine:a.value,position:`top-right`,draggable:!0,title:`统计`},null,8,[`engine`]),o.value?(I(),xa(j(ZT),{key:0,position:`bottom-right`,title:`图层配置 JSON`,closable:``,onClose:t[0]||=e=>o.value=!1},{default:qn(()=>[R(`pre`,zE,k(j(s)),1)]),_:1})):(I(),L(`button`,{key:1,class:`cfg-reopen`,onClick:t[1]||=e=>o.value=!0},`显示图层 JSON`)),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:r},[i.value?(I(),L(`div`,BE,[R(`div`,VE,k(i.value.title),1),R(`div`,HE,[(I(!0),L(F,null,P(i.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,UE,k(e.label),1),R(`span`,WE,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-833afc16`]]),KE={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`a1`,name:`后渚港`,risk:.92,level:`高`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`a2`,name:`秀涂`,risk:.65,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`a3`,name:`崇武`,risk:.38,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`a4`,name:`惠安湾`,risk:.78,level:`中`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`a5`,name:`斗尾港`,risk:.21,level:`低`}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`a6`,name:`净峰`,risk:.88,level:`高`}}]},qE={class:`app`},JE={class:`app__stage`},YE={key:0,class:`popup__card`},XE={class:`popup__title`},ZE={class:`popup__rows`},QE={class:`popup__row-label`},$E={class:`popup__row-value`},eD=N({__name:`PredefinedLayerDemo`,setup(e){class t extends gE{id=`alarms`;constructor(){super({id:`alarms`,name:`告警站`,zIndex:10,provider:{type:`raw`,config:{data:KE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}})}}let n=A(),r=A(),i=A(null),a=dn(null);return Ir(()=>{a.value=WT({target:n.value,popupEl:r.value}),a.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a.value.attachLayer(new t),a.value.run(`alarm`,{}),$n(()=>{i.value=a.value?.state.popup??null}),window.__geoFlow=()=>a.value}),Br(()=>{a.value?.destroy(),a.value=null}),(e,t)=>(I(),L(`div`,qE,[t[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 03 · 业务图层类继承预定义`),R(`span`,{class:`app__hint`},[R(`code`,null,`class AlarmLayer extends VectorLayerBase`)])],-1),R(`div`,JE,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:n},null,512),z(j($T),{engine:a.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:a.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:a.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:r},[i.value?(I(),L(`div`,YE,[R(`div`,XE,k(i.value.title),1),R(`div`,ZE,[(I(!0),L(F,null,P(i.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,QE,k(e.label),1),R(`span`,$E,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),tD={class:`demo`},nD={class:`demo__panel`},rD={class:`demo__log`},iD=lu(N({__name:`PopupFilterDemo`,setup(e){let t=A(),n=dn(),r=A(`点击地图要素 → 默认 popup（title+rows）；下方按钮验证链式 / 筛选 / 自定义组件。`),i=sn({name:`CustomPopup`,props:{feature:{type:Object,default:null},engine:{type:Object,default:null}},emits:[`close`],setup(e,{emit:t}){return()=>V(`div`,{style:`padding:4px 6px;min-width:220px`},[V(`div`,{style:`font-weight:600;margin-bottom:6px;color:#1e293b`},[`🛰 自定义组件 Popup · `,V(`span`,{style:`color:#4f8cff`},e.feature?.id??``)]),V(`div`,{style:`color:#475569;font-size:12px;margin-bottom:8px`},`此卡片由业务传入的 Vue 组件渲染，可包含任意交互/图表/按钮。`),V(`div`,{style:`display:flex;gap:8px`},[V(`button`,{style:`flex:1;padding:5px;border:1px solid #4f8cff;border-radius:4px;background:#4f8cff;color:#fff;cursor:pointer`,onClick:()=>r.value=`自定义组件按钮被点击：站点 ${e.feature?.id}`},`触发业务`),V(`button`,{style:`padding:5px 10px;border:1px solid #e2e8f0;border-radius:4px;background:#fff;color:#475569;cursor:pointer`,onClick:()=>t(`close`)},`关闭`)])])}}),a={type:`FeatureCollection`,features:[{type:`Feature`,properties:{id:`S001`,name:`城东站`,level:`high`,risk:.82},geometry:{type:`Point`,coordinates:[116.41,39.92]}},{type:`Feature`,properties:{id:`S002`,name:`城西站`,level:`mid`,risk:.45},geometry:{type:`Point`,coordinates:[116.36,39.92]}},{type:`Feature`,properties:{id:`S003`,name:`城南站`,level:`high`,risk:.68},geometry:{type:`Point`,coordinates:[116.38,39.88]}},{type:`Feature`,properties:{id:`S004`,name:`城北站`,level:`low`,risk:.21},geometry:{type:`Point`,coordinates:[116.38,39.96]}},{type:`Feature`,properties:{id:`S005`,name:`中心站`,level:`mid`,risk:.55},geometry:{type:`Point`,coordinates:[116.38,39.92]}}]};function o(e,t){return e.engines?.get?.(t)}Ir(()=>{let e=WT({target:t.value});e.baseLayer(`basemap.osm`).layer({id:`sites`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:a}},style:{circle:{radius:9,color:`#4f8cff`}},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ffd666`},cursor:!0}}).run(`monitor`,{}),(e.engines?.get(`sites`))?.registerFilterFields([{name:`level`,label:`等级`,values:[`low`,`mid`,`high`]},{name:`risk`,label:`风险值`}]),n.value=e});function s(){let e=n.value;if(!e)return;let t=o(e,`sites`);t&&(t.setStyle({circle:{radius:11,color:`#ef4444`},stroke:{color:`#7f1d1d`,width:2}}).setPopup({contentFields:[`name`,`risk`]}).setInteraction({highlight:{trigger:`click`,color:`#22c55e`},cursor:!0}),r.value=`链式 setStyle().setPopup().setInteraction() 已应用：红色大圆 + 绿色高亮`)}function c(){let e=n.value?o(n.value,`sites`):void 0;e&&(e.filterData(`$feature.level === "high"`),r.value=`filterData("$feature.level === high") → 仅 high 等级站点`)}function l(){let e=n.value?o(n.value,`sites`):void 0;e&&(e.filterData(e=>Number(e.get(`risk`))>.5),r.value=`filterData(f => f.get("risk") > 0.5) → risk>0.5 的站点`)}function u(){let e=n.value?o(n.value,`sites`):void 0;e&&(e.filterData().config(`level`,`high`).config(`risk`,`>=`,.6).end(),r.value=`filterData().config("level","high").config("risk",">=",0.6).end() → AND 组合`)}function d(){let e=n.value?o(n.value,`sites`):void 0;e&&(e.filterData({where:`$feature.risk >= 0.5 && $feature.level !== "low"`}),r.value=`filterData({ where: "$feature.risk>=0.5 && level!=low" })`)}function f(){(n.value?o(n.value,`sites`):void 0)?.resetFilter(),r.value=`resetFilter() → 恢复全量数据`}function p(){let e=n.value;if(!e)return;let t=o(e,`sites`);if(!t)return;let a=t.source.getFeatures();if(!a.length)return;let s=a[0],c=s.getGeometry().getCoordinates();e.popupBridge.open({title:`站点详情`,rows:[{label:`名称`,value:s.get(`name`)},{label:`风险`,value:s.get(`risk`)}],coordinate:c,component:i,props:{feature:{id:s.get(`id`),name:s.get(`name`),risk:s.get(`risk`)}}}),r.value=`popupBridge.open({ component: CustomPopup, props }) → PopupHost 渲染自定义组件（可关闭/拖拽）`}return(e,i)=>(I(),L(`div`,tD,[R(`div`,{class:`demo__map`,ref_key:`mapEl`,ref:t},null,512),n.value?(I(),xa(j(NT),{key:0,engine:n.value},null,8,[`engine`])):B(``,!0),R(`div`,nD,[R(`div`,{class:`demo__group`},[i[0]||=R(`span`,{class:`demo__label`},`链式配置`,-1),R(`button`,{onClick:s},`setStyle().setPopup().setInteraction()`)]),R(`div`,{class:`demo__group`},[i[1]||=R(`span`,{class:`demo__label`},`本地筛选 filterData`,-1),R(`button`,{onClick:c},`表达式`),R(`button`,{onClick:l},`函数`),R(`button`,{onClick:u},`链式 config().end()`),R(`button`,{onClick:d},`JSON where`),R(`button`,{onClick:f},`reset`)]),R(`div`,{class:`demo__group`},[i[2]||=R(`span`,{class:`demo__label`},`自定义 Popup`,-1),R(`button`,{onClick:p},`打开自定义组件弹框`)]),R(`div`,rD,k(r.value),1)])]))}}),[[`__scopeId`,`data-v-0e39fd7b`]]),aD={class:`demo`},oD={class:`cfg-panel`},sD={class:`cfg-group`},cD={class:`cfg-row`},lD=[`value`],uD={class:`cfg-row`},dD=[`value`],fD={class:`cfg-row`},pD={class:`cfg-row`},mD={class:`cfg-group`},hD={class:`cfg-row`},gD={class:`cfg-row`},_D={class:`cfg-row`},vD={class:`cfg-group`},yD={class:`cfg-row`},bD={class:`cfg-group`},xD={class:`cfg-row`},SD={class:`cfg-group`},CD={class:`cfg-row`},wD={class:`cfg-group`},TD={class:`cfg-group__title`},ED={class:`cfg-reg__cat`},DD=lu(N({__name:`ConfigDemo`,setup(e){let t=A(),n=dn(),r=mE(`map`,`theme`,`dark`,{type:`select`,options:[`dark`,`light`]}),i=mE(`map`,`basemap`,`basemap.tianditu-img`,{type:`select`,options:[`basemap.tianditu-img`,`basemap.carto-light`,`basemap.osm`]}),a=mE(`map`,`showScale`,!0,{type:`switch`}),o=mE(`map`,`showZoom`,!0,{type:`switch`}),s=mE(`dock`,`showToolbar`,!0,{type:`switch`}),c=mE(`dock`,`showLayerTree`,!0,{type:`switch`}),l=mE(`dock`,`showLegend`,!0,{type:`switch`}),u=mE(`layer`,`sitesVisible`,!0,{type:`switch`}),d=mE(`style`,`highlightColor`,`#ff6b00`,{type:`color`}),f=mE(`popup`,`leaderStyle`,`polyline`,{type:`select`,options:[`straight`,`polyline`,`bezier`]}),p=[`basemap.tianditu-img`,`basemap.carto-light`,`basemap.osm`],m=[{label:`dark`,value:`dark`},{label:`light`,value:`light`}],h=to(()=>[`map`,`dock`,`layer`,`style`,`popup`].map(e=>({category:e,entries:GT.listByCategory(e)})));Ir(()=>{let e=WT({target:t.value});e.baseLayer(`basemap.osm`),e.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:TE}},style:{circle:{radius:7,color:`#4f8cff`}},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:d.value},cursor:!0}}),e.run(`monitor`,{}),n.value=e,g(),document.body.classList.toggle(`theme-light`,r.value===`light`)});function g(){let e=n.value?.manager.map;if(!e)return;let t=e.getControls().getArray().some(e=>e instanceof YC),r=e.getControls().getArray().some(e=>e instanceof wy);if(a.value&&!t&&e.addControl(new YC({})),!a.value&&t){let t=e.getControls().getArray().find(e=>e instanceof YC);t&&e.removeControl(t)}if(o.value&&!r&&e.addControl(new wy({})),!o.value&&r){let t=e.getControls().getArray().find(e=>e instanceof wy);t&&e.removeControl(t)}}function _(e){let t=n.value?.manager.map;t&&(t.getLayers().getArray().filter(e=>e instanceof _C).forEach(e=>t.removeLayer(e)),n.value?.baseLayer(e))}er(r,e=>{document.body.classList.toggle(`theme-light`,e===`light`),document.body.classList.toggle(`theme-dark`,e===`dark`)}),er(i,e=>_(e)),er([a,o],g),er(u,e=>{(n.value?.engines?.get(`stations`))?.setVisible(e)}),er(d,e=>{(n.value?.engines?.get(`stations`))?.setInteraction({highlight:{trigger:`click`,color:e},cursor:!0})}),er(f,()=>{n.value?.popupManager&&(n.value.popupManager.defaultOptions.leaderStyle=f.value)});function v(){[`map`,`dock`,`layer`,`style`,`popup`].forEach(e=>GT.listByCategory(e).forEach(e=>GT.reset(e.category,e.key)))}return(e,g)=>(I(),L(`div`,aD,[R(`div`,{class:`demo__map`,ref_key:`mapEl`,ref:t},null,512),n.value&&j(s)?(I(),xa(j($T),{key:0,engine:n.value,position:`top-right`},null,8,[`engine`])):B(``,!0),n.value&&j(c)?(I(),xa(j(eE),{key:1,engine:n.value,position:`top-left`},null,8,[`engine`])):B(``,!0),n.value&&j(l)?(I(),xa(j(tE),{key:2,engine:n.value,position:`bottom-left`},null,8,[`engine`])):B(``,!0),R(`div`,oD,[R(`div`,{class:`cfg-panel__head`},[g[10]||=R(`span`,null,`全局配置中心`,-1),R(`button`,{class:`cfg-panel__reset`,onClick:v},`全部重置`)]),R(`div`,sD,[g[15]||=R(`div`,{class:`cfg-group__title`},`map · 地图`,-1),R(`label`,cD,[g[11]||=R(`span`,null,`主题`,-1),M(R(`select`,{"onUpdate:modelValue":g[0]||=e=>un(r)?r.value=e:null},[(I(),L(F,null,P(m,e=>R(`option`,{key:e.value,value:e.value},k(e.label),9,lD)),64))],512),[[es,j(r)]])]),R(`label`,uD,[g[12]||=R(`span`,null,`底图`,-1),M(R(`select`,{"onUpdate:modelValue":g[1]||=e=>un(i)?i.value=e:null},[(I(),L(F,null,P(p,e=>R(`option`,{key:e,value:e},k(e.replace(`basemap.`,``)),9,dD)),64))],512),[[es,j(i)]])]),R(`label`,fD,[g[13]||=R(`span`,null,`比例尺`,-1),M(R(`input`,{type:`checkbox`,"onUpdate:modelValue":g[2]||=e=>un(a)?a.value=e:null},null,512),[[Qo,j(a)]])]),R(`label`,pD,[g[14]||=R(`span`,null,`缩放控件`,-1),M(R(`input`,{type:`checkbox`,"onUpdate:modelValue":g[3]||=e=>un(o)?o.value=e:null},null,512),[[Qo,j(o)]])])]),R(`div`,mD,[g[19]||=R(`div`,{class:`cfg-group__title`},`dock · 停靠微件`,-1),R(`label`,hD,[g[16]||=R(`span`,null,`MapToolbar`,-1),M(R(`input`,{type:`checkbox`,"onUpdate:modelValue":g[4]||=e=>un(s)?s.value=e:null},null,512),[[Qo,j(s)]])]),R(`label`,gD,[g[17]||=R(`span`,null,`LayerTree`,-1),M(R(`input`,{type:`checkbox`,"onUpdate:modelValue":g[5]||=e=>un(c)?c.value=e:null},null,512),[[Qo,j(c)]])]),R(`label`,_D,[g[18]||=R(`span`,null,`Legend`,-1),M(R(`input`,{type:`checkbox`,"onUpdate:modelValue":g[6]||=e=>un(l)?l.value=e:null},null,512),[[Qo,j(l)]])])]),R(`div`,vD,[g[21]||=R(`div`,{class:`cfg-group__title`},`layer · 图层`,-1),R(`label`,yD,[g[20]||=R(`span`,null,`监测站可见`,-1),M(R(`input`,{type:`checkbox`,"onUpdate:modelValue":g[7]||=e=>un(u)?u.value=e:null},null,512),[[Qo,j(u)]])])]),R(`div`,bD,[g[23]||=R(`div`,{class:`cfg-group__title`},`style · 配图`,-1),R(`label`,xD,[g[22]||=R(`span`,null,`高亮色`,-1),M(R(`input`,{type:`color`,"onUpdate:modelValue":g[8]||=e=>un(d)?d.value=e:null},null,512),[[Zo,j(d)]])])]),R(`div`,SD,[g[26]||=R(`div`,{class:`cfg-group__title`},`popup · 弹框`,-1),R(`label`,CD,[g[25]||=R(`span`,null,`引线样式`,-1),M(R(`select`,{"onUpdate:modelValue":g[9]||=e=>un(f)?f.value=e:null},[...g[24]||=[R(`option`,{value:`straight`},`straight`,-1),R(`option`,{value:`polyline`},`polyline`,-1),R(`option`,{value:`bezier`},`bezier`,-1)]],512),[[es,j(f)]])])]),R(`div`,wD,[R(`div`,TD,`已注册配置项（`+k(h.value.flatMap(e=>e.entries).length)+`）`,1),(I(!0),L(F,null,P(h.value,e=>(I(),L(`div`,{key:e.category,class:`cfg-reg`},[R(`span`,ED,k(e.category),1),(I(!0),L(F,null,P(e.entries,e=>(I(),L(`span`,{key:e.key,class:`cfg-reg__item`},k(e.key)+`=`+k(JSON.stringify(e.value)),1))),128))]))),128))])])]))}}),[[`__scopeId`,`data-v-c1a4460e`]]),OD={class:`demo`},kD={class:`style-panel`},AD={class:`sp-row`},jD=[`value`],MD={class:`sp-row`},ND={class:`sp-modes`},PD=[`onClick`],FD={class:`sp-row`},ID={key:0,class:`sp-row`},LD={class:`sp-row`},RD={key:1,class:`sp-row`},zD={class:`sp-row`},BD=[`value`],VD={class:`sp-row`},HD=[`value`],UD={key:0,class:`sp-row`},WD={class:`sp-row`},GD={class:`sp-snapshot`},KD=lu(N({__name:`MapStyleDemo`,setup(e){let t=A(),n=dn(),r=[{id:`stations`,name:`监测站`,data:{type:`FeatureCollection`,features:[{type:`Feature`,properties:{id:`S1`,name:`城东`,level:`high`,risk:.8},geometry:{type:`Point`,coordinates:[116.41,39.92]}},{type:`Feature`,properties:{id:`S2`,name:`城西`,level:`mid`,risk:.4},geometry:{type:`Point`,coordinates:[116.36,39.92]}},{type:`Feature`,properties:{id:`S3`,name:`城南`,level:`low`,risk:.2},geometry:{type:`Point`,coordinates:[116.38,39.88]}}]},geom:`Point`},{id:`alarms`,name:`告警点`,data:{type:`FeatureCollection`,features:[{type:`Feature`,properties:{id:`A1`,type:`fire`,severity:3},geometry:{type:`Point`,coordinates:[116.4,39.9]}},{type:`Feature`,properties:{id:`A2`,type:`leak`,severity:2},geometry:{type:`Point`,coordinates:[116.36,39.9]}}]},geom:`Point`},{id:`zones`,name:`区域面`,data:{type:`FeatureCollection`,features:[{type:`Feature`,properties:{id:`Z1`,name:`核心区`,level:`high`},geometry:{type:`Polygon`,coordinates:[[[116.37,39.9],[116.4,39.9],[116.4,39.93],[116.37,39.93],[116.37,39.9]]]}},{type:`Feature`,properties:{id:`Z2`,name:`外围区`,level:`mid`},geometry:{type:`Polygon`,coordinates:[[[116.34,39.88],[116.37,39.88],[116.37,39.91],[116.34,39.91],[116.34,39.88]]]}}]},geom:`Polygon`}],i=A(`stations`),a=A(`single`),o=A(`#4f8cff`),s=A(8),c=A(2),l=A(`level`),u=A(`semantic`),d=A(.5),f=[`semantic`,`blue`,`green`,`warm`],p=to(()=>{let e=r.find(e=>e.id===i.value);if(!e)return[];let t=e.data.features;return t.length?Array.from(new Set(Object.keys(t[0].properties))):[]});function m(){let e=r.find(e=>e.id===i.value);return a.value===`single`?e.geom===`Point`?{circle:{radius:s.value,color:o.value},stroke:{color:o.value,width:c.value}}:{fill:{color:o.value,opacity:d.value},stroke:{color:o.value,width:c.value}}:a.value===`categorical`?{mode:`categorical`,colorField:l.value,palette:u.value,radius:s.value,fillOpacity:d.value}:e.geom===`Point`?{circle:{radius:s.value,color:o.value},stroke:{color:`#1e293b`,width:c.value},text:{field:`name`,color:`#fff`,outline:`#1e293b`,offsetY:-14}}:{fill:{color:o.value,opacity:d.value},stroke:{color:`#1e293b`,width:c.value},text:{field:`name`,color:`#1e293b`,outline:`#fff`}}}function h(e){return n.value?.engines?.get?.(e)}function g(){if(!n.value)return;let e=m();JT.apply({[i.value]:e}),h(i.value)?.setStyle(e)}function _(){if(!n.value)return;let e={};for(let t of r){let n={hue:t.id.charCodeAt(0)*37%360};e[t.id]=t.geom===`Point`?{circle:{radius:8,color:`hsl(${n.hue},70%,55%)`}}:{fill:{color:`hsl(${n.hue},70%,55%)`,opacity:.4},stroke:{color:`hsl(${n.hue},70%,45%)`,width:2}}}JT.apply(e),r.forEach(t=>h(t.id)?.setStyle(e[t.id]))}let v=to(()=>JSON.stringify(JT.toJSON(),null,2));return Ir(()=>{let e=WT({target:t.value});e.baseLayer(`basemap.osm`),r.forEach(t=>{e.layer({id:t.id,name:t.name,zIndex:t.id===`zones`?5:10,provider:{type:`raw`,config:{data:t.data}},style:t.geom===`Point`?{circle:{radius:7,color:`#4f8cff`}}:{fill:{color:`#4f8cff`,opacity:.3},stroke:{color:`#4f8cff`,width:2}},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]}}),JT.registerLayer(t.id)}),e.run(`monitor`,{}),n.value=e,setTimeout(g,300)}),er([a,o,s,c,l,u,d,i],()=>{n.value&&g()}),(e,n)=>(I(),L(`div`,OD,[R(`div`,{class:`demo__map`,ref_key:`mapEl`,ref:t},null,512),R(`div`,kD,[n[20]||=R(`div`,{class:`style-panel__head`},`StyleEngine 全局配图`,-1),R(`div`,AD,[n[9]||=R(`label`,null,`图层`,-1),M(R(`select`,{"onUpdate:modelValue":n[0]||=e=>i.value=e},[(I(),L(F,null,P(r,e=>R(`option`,{key:e.id,value:e.id},k(e.name)+`（`+k(e.geom)+`）`,9,jD)),64))],512),[[es,i.value]])]),R(`div`,MD,[n[10]||=R(`label`,null,`模式`,-1),R(`div`,ND,[(I(),L(F,null,P([`single`,`categorical`,`stage`],e=>R(`button`,{key:e,class:we({on:a.value===e}),onClick:t=>a.value=e},k(e),11,PD)),64))])]),a.value===`single`||a.value===`stage`?(I(),L(F,{key:0},[R(`div`,FD,[n[11]||=R(`label`,null,`颜色`,-1),M(R(`input`,{type:`color`,"onUpdate:modelValue":n[1]||=e=>o.value=e},null,512),[[Zo,o.value]])]),r.find(e=>e.id===i.value)?.geom===`Point`?(I(),L(`div`,ID,[n[12]||=R(`label`,null,`半径`,-1),M(R(`input`,{type:`range`,min:`3`,max:`20`,"onUpdate:modelValue":n[2]||=e=>s.value=e},null,512),[[Zo,s.value,void 0,{number:!0}]]),R(`span`,null,k(s.value),1)])):B(``,!0),R(`div`,LD,[n[13]||=R(`label`,null,`线宽`,-1),M(R(`input`,{type:`range`,min:`1`,max:`8`,"onUpdate:modelValue":n[3]||=e=>c.value=e},null,512),[[Zo,c.value,void 0,{number:!0}]]),R(`span`,null,k(c.value),1)]),r.find(e=>e.id===i.value)?.geom===`Polygon`?(I(),L(`div`,RD,[n[14]||=R(`label`,null,`填充透明度`,-1),M(R(`input`,{type:`range`,min:`0`,max:`1`,step:`0.1`,"onUpdate:modelValue":n[4]||=e=>d.value=e},null,512),[[Zo,d.value,void 0,{number:!0}]]),R(`span`,null,k(d.value.toFixed(1)),1)])):B(``,!0)],64)):B(``,!0),a.value===`categorical`?(I(),L(F,{key:1},[R(`div`,zD,[n[15]||=R(`label`,null,`分类字段`,-1),M(R(`select`,{"onUpdate:modelValue":n[5]||=e=>l.value=e},[(I(!0),L(F,null,P(p.value,e=>(I(),L(`option`,{key:e,value:e},k(e),9,BD))),128))],512),[[es,l.value]])]),R(`div`,VD,[n[16]||=R(`label`,null,`色板`,-1),M(R(`select`,{"onUpdate:modelValue":n[6]||=e=>u.value=e},[(I(),L(F,null,P(f,e=>R(`option`,{key:e,value:e},k(e),9,HD)),64))],512),[[es,u.value]])]),r.find(e=>e.id===i.value)?.geom===`Point`?(I(),L(`div`,UD,[n[17]||=R(`label`,null,`半径`,-1),M(R(`input`,{type:`range`,min:`3`,max:`20`,"onUpdate:modelValue":n[7]||=e=>s.value=e},null,512),[[Zo,s.value,void 0,{number:!0}]]),R(`span`,null,k(s.value),1)])):B(``,!0),R(`div`,WD,[n[18]||=R(`label`,null,`填充透明度`,-1),M(R(`input`,{type:`range`,min:`0`,max:`1`,step:`0.1`,"onUpdate:modelValue":n[8]||=e=>d.value=e},null,512),[[Zo,d.value,void 0,{number:!0}]]),R(`span`,null,k(d.value.toFixed(1)),1)])],64)):B(``,!0),R(`div`,{class:`sp-actions`},[R(`button`,{onClick:g},`应用到此图层`),R(`button`,{onClick:_},`批量应用到全部`)]),n[21]||=R(`div`,{class:`sp-hint`},`配置即生效：参数变化自动调 styleEngine.apply + le.setStyle。`,-1),R(`details`,GD,[n[19]||=R(`summary`,null,`styleEngine.toJSON()`,-1),R(`pre`,null,k(v.value),1)])])]))}}),[[`__scopeId`,`data-v-5937e6df`]]),qD={class:`app`},JD={class:`app__stage`},YD={class:`cfg-code`},XD={key:0,class:`popup__card`},ZD={class:`popup__title`},QD={class:`popup__rows`},$D={class:`popup__row-label`},eO={class:`popup__row-value`},tO=lu(N({__name:`ExternalConfigDemo`,setup(e){let t={version:`2.0.0`,name:`external-config-demo`,baseLayers:[{id:`basemap.osm`}],controls:[{id:`attribution`},{id:`scale`}],layers:[{id:`alarms`,name:`告警站`,zIndex:10,provider:{type:`raw`,config:{data:KE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}]},n=JSON.stringify(t,null,2),r=A(!0),i=A(),a=A(),o=A(null),s=dn(null);return Ir(()=>{s.value=WT({target:i.value,popupEl:a.value}),s.value.fromJSON(t),s.value.run(`alarm`,{}),$n(()=>{o.value=s.value?.state.popup??null}),window.__geoFlow=()=>s.value}),Br(()=>{s.value?.destroy(),s.value=null}),(e,t)=>(I(),L(`div`,qD,[t[2]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 04 · 外部 JSON 配置引擎`),R(`span`,{class:`app__hint`},[R(`code`,null,`engine.fromJSON(mapConfig)`),ka(` · 底图/控件/图层全外部声明`)])],-1),R(`div`,JD,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:i},null,512),z(j($T),{engine:s.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:s.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:s.value,position:`bottom-left`},null,8,[`engine`]),r.value?(I(),xa(j(ZT),{key:0,position:`bottom-right`,title:`地图配置 JSON`,closable:``,onClose:t[0]||=e=>r.value=!1},{default:qn(()=>[R(`pre`,YD,k(j(n)),1)]),_:1})):(I(),L(`button`,{key:1,class:`cfg-reopen`,onClick:t[1]||=e=>r.value=!0},`显示配置 JSON`)),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:a},[o.value?(I(),L(`div`,XD,[R(`div`,ZD,k(o.value.title),1),R(`div`,QD,[(I(!0),L(F,null,P(o.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,$D,k(e.label),1),R(`span`,eO,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-9d2df292`]]),nO={class:`app`},rO={class:`app__stage`},iO={class:`ex-style`},aO=[`onClick`],oO={key:0,class:`popup__card`},sO={class:`popup__title`},cO={class:`popup__rows`},lO={class:`popup__row-label`},uO={class:`popup__row-value`},dO=lu(N({__name:`ExpressionStyleDemo`,setup(e){let t=[{label:`常量 radius=7`,radius:7},{label:"表达式 '${f.risk*8+4}'",radius:"${f.risk * 8 + 4}"},{label:`函数 (f)=>…`,radius:e=>e.get(`risk`)*8+4}],n=A(0),r=A(),i=A(),a=A(null),o=dn(null),s=null,c={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:TE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{o.value=WT({target:r.value,popupEl:i.value}),o.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),s=o.value.layer(c),o.value.run(`monitor`,{}),$n(()=>{a.value=o.value?.state.popup??null}),window.__geoFlow=()=>o.value});function l(e){n.value=e,s&&(s.updateConfig({...c,style:{...c.style,radius:t[e].radius}}),s.restart())}return Br(()=>{o.value?.destroy(),o.value=null}),(e,s)=>(I(),L(`div`,nO,[s[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 05 · 表达式/函数/常量三态参数`),R(`span`,{class:`app__hint`},`切换 radius 参数风格 · updateConfig + restart 热更新`)],-1),R(`div`,rO,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:r},null,512),z(j($T),{engine:o.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:o.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:o.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`radius 参数风格`},{default:qn(()=>[R(`div`,iO,[(I(),L(F,null,P(t,(e,t)=>R(`button`,{key:t,class:we([`ex-style__btn`,{"ex-style__btn--active":n.value===t}]),onClick:e=>l(t)},k(e.label),11,aO)),64))])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:i},[a.value?(I(),L(`div`,oO,[R(`div`,sO,k(a.value.title),1),R(`div`,cO,[(I(!0),L(F,null,P(a.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,lO,k(e.label),1),R(`span`,uO,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-2c67fd1d`]]),fO={class:`app`},pO={class:`app__stage`},mO={class:`proc`},hO=[`selected`],gO={class:`proc__note`},_O={key:0,class:`popup__card`},vO={class:`popup__title`},yO={class:`popup__rows`},bO={class:`popup__row-label`},xO={class:`popup__row-value`},SO=lu(N({__name:`ProcessorsAllDemo`,setup(e){let t=[{label:`无`,note:`原始 8 个监测站点`,build:()=>[]},{label:`filter（仅 高）`,note:`按 level=高 过滤，剩 2 个`,build:()=>[Iu(`filter`,{field:`level`,op:`=`,value:`高`})]},{label:`geojson（校验+扫描）`,note:`校验/标准化/字段扫描（无可见变化）`,build:()=>[Iu(`geojson`,{})]},{label:`mapping（新增 riskLabel）`,note:`字段映射：riskLabel ← level`,build:()=>[Iu(`field-map`,{mapping:{riskLabel:`level`}})]},{label:`projection（4326 no-op）`,note:`投影转换（4326→3857 由 applyToMap 承担，no-op）`,build:()=>[Iu(`projection`,{})]},{label:`simplify（点 no-op）`,note:`几何简化（点几何无简化效果）`,build:()=>[Iu(`simplify`,{tolerance:.001})]},{label:`buffer（半径 1000m）`,note:`Turf 缓冲区：点→面（8 个圆面）`,build:()=>[Iu(`buffer`,{radius:1e3})]},{label:`aggregate（按 level 分组）`,note:`聚合质心：3 个分组点 + avgRisk`,build:()=>[Iu(`aggregate`,{groupBy:`level`,stats:[{field:`risk`,as:`avgRisk`,fn:`avg`}]})]}],n=A(0),r=to(()=>t[n.value].note),i=A(),a=A(),o=A(null),s=dn(null),c=null,l={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:TE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`avgRisk`,`count`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{s.value=WT({target:i.value,popupEl:a.value}),s.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),c=s.value.layer(l),s.value.run(`monitor`,{}),$n(()=>{o.value=s.value?.state.popup??null}),window.__geoFlow=()=>s.value});function u(e){n.value=e,c&&(c.updateConfig({...l,processors:t[e].build()}),c.restart())}return Br(()=>{s.value?.destroy(),s.value=null}),(e,c)=>(I(),L(`div`,fO,[c[1]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 06 · 内置数据处理器`),R(`span`,{class:`app__hint`},`7 个 processor 逐个演示 · updateConfig + restart`)],-1),R(`div`,pO,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:i},null,512),z(j($T),{engine:s.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:s.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:s.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`数据处理器`},{default:qn(()=>[R(`div`,mO,[R(`select`,{class:`proc__select`,onChange:c[0]||=e=>u(e.target.selectedIndex)},[(I(),L(F,null,P(t,(e,t)=>R(`option`,{key:t,selected:t===n.value},k(e.label),9,hO)),64))],32),R(`div`,gO,k(r.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:a},[o.value?(I(),L(`div`,_O,[R(`div`,vO,k(o.value.title),1),R(`div`,yO,[(I(!0),L(F,null,P(o.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,bO,k(e.label),1),R(`span`,xO,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-15de89d0`]]),CO={class:`app`},wO={class:`app__stage`},TO=[`selected`],EO={key:0,class:`popup__card`},DO={class:`popup__title`},OO={class:`popup__rows`},kO={class:`popup__row-label`},AO={class:`popup__row-value`},jO=lu(N({__name:`EffectsAllDemo`,setup(e){let t=[{label:`无`,build:()=>[]},{label:`ripple（多环扩散）`,build:()=>[Lu(`ripple`,{color:`#ff5c5c`,period:3e3,rings:3,conditionField:`level`,conditionValue:`高`})]},{label:`pulse（点跳跃）`,build:()=>[Lu(`pulse`,{color:`#ffd666`,period:1200,conditionField:`level`,conditionValue:`高`})]},{label:`wave（涟漪）`,build:()=>[Lu(`wave`,{color:`#36cbcb`,period:1800,rings:3,conditionField:`level`,conditionValue:`高`})]},{label:`breathing（呼吸灯）`,build:()=>[Lu(`breathing`,{color:`#4f8cff`,period:1600,conditionField:`level`,conditionValue:`高`})]},{label:`carousel（轮流高亮）`,build:()=>[Lu(`carousel`,{interval:1500,autoStart:!0,pauseOnHover:!0,pauseOnUserInteract:!0})]}],n=A(0),r=A(),i=A(),a=A(null),o=dn(null),s=null,c={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:TE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{o.value=WT({target:r.value,popupEl:i.value}),o.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),s=o.value.layer(c),o.value.run(`monitor`,{}),$n(()=>{a.value=o.value?.state.popup??null}),window.__geoFlow=()=>o.value});function l(e){n.value=e,s&&(s.updateConfig({...c,effects:t[e].build()}),s.restart())}return Br(()=>{o.value?.destroy(),o.value=null}),(e,s)=>(I(),L(`div`,CO,[s[1]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 07 · 内置效果`),R(`span`,{class:`app__hint`},`5 个 effect 逐个演示 · updateConfig + restart 重挂载`)],-1),R(`div`,wO,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:r},null,512),z(j($T),{engine:o.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:o.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:o.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`地图效果`},{default:qn(()=>[R(`select`,{class:`efc__select`,onChange:s[0]||=e=>l(e.target.selectedIndex)},[(I(),L(F,null,P(t,(e,t)=>R(`option`,{key:t,selected:t===n.value},k(e.label),9,TO)),64))],32)]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:i},[a.value?(I(),L(`div`,EO,[R(`div`,DO,k(a.value.title),1),R(`div`,OO,[(I(!0),L(F,null,P(a.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,kO,k(e.label),1),R(`span`,AO,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-788689d8`]]),MO={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港`,type:`alarm`,level:`高`,risk:.92,value:187}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂`,type:`normal`,level:`中`,risk:.65,value:142}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武`,type:`normal`,level:`低`,risk:.38,value:96}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.43,25.02]},properties:{id:`s4`,name:`洛阳桥`,type:`normal`,level:`中`,risk:.55,value:118}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾`,type:`alarm`,level:`中`,risk:.78,value:165}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港`,type:`normal`,level:`低`,risk:.21,value:72}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.61,25.03]},properties:{id:`s7`,name:`小岞`,type:`normal`,level:`中`,risk:.45,value:108}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰`,type:`alarm`,level:`高`,risk:.88,value:178}}]},NO={class:`app`},PO={class:`app__stage`},FO={class:`pc`},IO={class:`pc__row`},LO={class:`pc__row`},RO={class:`pc__stat`},zO={class:`gf-popups`},BO={class:`gf-popups__svg`},VO=[`d`],HO=[`onMousedown`],UO={class:`gf-card__head`,"data-drag":`1`},WO=[`onClick`],GO={class:`gf-card__side`},KO=188,qO=96,JO=lu(N({__name:`CarouselPopupDemo`,setup(e){let t=A(),n=dn(null),r=A(1200),i=A(`idle`),a=A(-1),o=A(0),s=A(`bezier`),c=A([]),l=A([]);function u(e,t){switch(e){case`right`:return[t.x,t.y+qO/2];case`left`:return[t.x+KO,t.y+qO/2];case`top`:return[t.x+KO/2,t.y+qO];case`bottom`:return[t.x+KO/2,t.y];default:return[t.x,t.y+qO/2]}}function d(){let e=PT.list();o.value=e.length;let t={},n=[];for(let r of e){let e=PT.getLayout(r.id);if(!e)continue;let i=r.content?.rows??[];t[r.id]={id:r.id,title:r.content?.title??r.id,rows:i,anchor:r.anchorScreen,offset:e.offset,side:e.side,locked:!!r.locked},n.push({id:r.id,d:ST.toPath({start:r.anchorScreen,end:e.leaderEnd},{style:s.value,color:`#94a3b8`,width:1.5,arrow:!0})})}c.value=Object.values(t),l.value=n}function f(){let e=new Map;for(let t of PT.list()){let r=t.feature?.geometry;if(!r)continue;let i=n.value?.map.getPixelFromCoordinate(bp(r.coordinates));i&&e.set(t.id,[i[0],i[1]])}e.size&&PT.updateAnchors(e),d()}function p(e){let t=e.geometry?.coordinates??[],r=n.value?.map.getPixelFromCoordinate(bp(t));PT.open({id:`card-`+e.properties.id,feature:e,anchorScreen:r?[r[0],r[1]]:[0,0],size:{width:188,height:96},content:{title:String(e.properties.name??`详情`),rows:[{label:`等级`,value:String(e.properties.level??`—`)},{label:`风险`,value:Number(e.properties.risk).toFixed(2)},{label:`类型`,value:String(e.properties.type??`—`)}]}}),d()}function m(e){PT.close(e),d()}function h(){PT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),MO.features.forEach(p)}function g(){PT.list().map(e=>e.id).forEach(e=>PT.close(e)),d()}function _(){PT.list().forEach(e=>PT.unlockPosition(e.id)),d()}let v=null,y={x:0,y:0},b={x:0,y:0};function x(e,t){t.target.dataset.drag&&(t.preventDefault(),v=e.id,y={x:t.clientX,y:t.clientY},b={...e.offset},document.addEventListener(`mousemove`,S),document.addEventListener(`mouseup`,C))}function S(e){if(!v)return;let t=e.clientX-y.x,n=e.clientY-y.y,r={x:b.x+t,y:b.y+n},i=c.value.slice(),a=i.findIndex(e=>e.id===v);if(a<0)return;let o={...i[a],offset:r};i[a]=o,c.value=i;let d=l.value.slice(),f=d.findIndex(e=>e.id===v);if(f>=0){let e=u(o.side,r);d[f]={id:v,d:ST.toPath({start:o.anchor,end:e},{style:s.value,color:`#94a3b8`,width:1.5,arrow:!0})},l.value=d}}function C(){if(v){let e=c.value.find(e=>e.id===v);e&&PT.lockPosition(v,e.offset)}v=null,document.removeEventListener(`mousemove`,S),document.removeEventListener(`mouseup`,C)}function w(){let e=n.value?.engines.get(`stations`);e?.updateConfig({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:9,fillOpacity:.85},effects:[Lu(`carousel`,{interval:r.value,autoStart:!0,onEnter:p,onLeave:e=>m(`card-`+e.properties.id)})]}),e?.restart()}Ir(()=>{n.value=WT({target:t.value}),n.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),n.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:9,fillOpacity:.85},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0},effects:[Lu(`carousel`,{interval:r.value,autoStart:!0,onEnter:p,onLeave:e=>m(`card-`+e.properties.id)})]}),n.value.run(`carousel`,{});let e=(n.value.engines.get(`stations`)?.layer)?.get?.(`carouselController`);if(e){let t=setInterval(()=>{i.value=e.state,a.value=e.currentIndex},200);window.__carousel=e,window.__carouselTimer=t}PT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),PT.on(d);let o=n.value.map.getView();n.value.map.on(`pointerdrag`,E),o.on(`change:resolution`,E),n.value.map.on(`moveend`,f),n.value.map.on(`resize`,f),window.addEventListener(`resize`,D)});let T=null;function E(){T??=requestAnimationFrame(()=>{T=null,f()})}function D(){t.value&&(PT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),f())}return Br(()=>{PT.list().map(e=>e.id).forEach(e=>PT.close(e)),window.__carouselTimer&&clearInterval(window.__carouselTimer),window.removeEventListener(`resize`,D),n.value?.destroy(),n.value=null}),(e,u)=>(I(),L(`div`,NO,[u[6]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 08 · 轮播高亮 + 弹框防叠盖`),R(`span`,{class:`app__hint`},`carousel 轮流高亮并开/关弹框 · 多点同时弹框由 PopupLayoutSolver 推开 · 卡片可拖拽锁定`)],-1),R(`div`,PO,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:n.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:n.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:n.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`轮播 / 弹框控制`},{default:qn(()=>[R(`div`,FO,[R(`div`,IO,[u[2]||=R(`label`,null,`interval`,-1),M(R(`input`,{type:`range`,min:`500`,max:`4000`,step:`100`,"onUpdate:modelValue":u[0]||=e=>r.value=e},null,512),[[Zo,r.value,void 0,{number:!0}]]),R(`span`,null,k(r.value)+`ms`,1)]),R(`div`,LO,[u[4]||=R(`label`,null,`引线风格`,-1),M(R(`select`,{"onUpdate:modelValue":u[1]||=e=>s.value=e,onChange:d},[...u[3]||=[R(`option`,{value:`bezier`},`贝塞尔曲线`,-1),R(`option`,{value:`polyline`},`折线（斜出+横竖到达）`,-1),R(`option`,{value:`straight`},`直线`,-1)]],544),[[es,s.value]])]),R(`div`,RO,` 轮播：`+k(i.value)+` · 第 `+k(a.value+1)+` 站 · 活跃弹框 `+k(o.value),1),R(`div`,{class:`pc__btns`},[R(`button`,{onClick:w},`应用 interval`),R(`button`,{onClick:h},`打开全部弹框（防叠盖）`),R(`button`,{onClick:g},`关闭全部`),R(`button`,{onClick:_},`解锁/复位`)]),u[5]||=R(`div`,{class:`pc__tip`},`拖拽卡片标题栏即时跟随 · 松开 lockPosition 锁定（求解器不再覆盖） · 引线斜出+横/竖到达`,-1)])]),_:1}),R(`div`,zO,[(I(),L(`svg`,BO,[(I(!0),L(F,null,P(l.value,e=>(I(),L(`path`,{key:e.id,d:e.d},null,8,VO))),128))])),(I(!0),L(F,null,P(c.value,e=>(I(),L(`div`,{key:e.id,class:we([`gf-card`,{"gf-card--locked":e.locked}]),style:ye({transform:`translate(${e.offset.x}px, ${e.offset.y}px)`}),onMousedown:t=>x(e,t)},[R(`div`,UO,[ka(k(e.title)+` `,1),R(`button`,{class:`gf-card__x`,onClick:ss(t=>m(e.id),[`stop`])},`×`,8,WO)]),(I(!0),L(F,null,P(e.rows,(e,t)=>(I(),L(`div`,{key:t,class:`gf-card__row`},[R(`span`,null,k(e.label),1),R(`b`,null,k(e.value),1)]))),128)),R(`div`,GO,`side: `+k(e.side),1)],46,HO))),128))])])]))}}),[[`__scopeId`,`data-v-790cc86a`]]),YO={class:`app`},XO={class:`app__stage`},ZO={key:0,class:`popup__card`},QO={class:`popup__title`},$O={class:`popup__rows`},ek={class:`popup__row-label`},tk={class:`popup__row-value`},nk=lu(N({__name:`CustomPluginDemo`,setup(e){Nu({name:`alert-flag`,symbol:Symbol.for(`processor.alert-flag`),meta:{label:`告警标记`,icon:`⚠`,desc:`risk > 阈值 → alert=true`,category:`data`},defaults:{threshold:.7},process(e,t){let n=e.features.features.map(e=>({...e,properties:{...e.properties,alert:Number(e.properties?.risk)>t.threshold}}));return{...e,features:{...e.features,features:n}}}});let t=A(),n=A(),r=A(null),i=dn(null);return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:TE}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`alert`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0},processors:[Iu(`alert-flag`,{threshold:.7})]}),i.value.run(`custom`,{}),$n(()=>{r.value=i.value?.state.popup??null}),window.__geoFlow=()=>i.value}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,YO,[a[1]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 09 · 自定义插件`),R(`span`,{class:`app__hint`},[R(`code`,null,`defineProcessor`),ka(` 注册 + `),R(`code`,null,`useProcessor('alert-flag')`),ka(` 接入`)])],-1),R(`div`,XO,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`自定义 processor`},{default:qn(()=>[...a[0]||=[R(`pre`,{class:`cp-code`},`name: 'alert-flag'
default threshold: 0.7
→ popup 显示 alert 字段
（risk > 0.7 的站点 alert=true）`,-1)]]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,ZO,[R(`div`,QO,k(r.value.title),1),R(`div`,$O,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,ek,k(e.label),1),R(`span`,tk,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-cb6ff43a`]]),rk={class:`app`},ik={class:`stage`},ak={class:`mapwrap`},ok={key:0,class:`popup__card`},sk={class:`popup__title`},ck={class:`popup__rows`},lk={class:`popup__row-label`},uk={class:`popup__row-value`},dk={class:`canvas-panel`},fk={class:`palette`},pk=[`onClick`],mk=[`onPointerdown`],hk={class:`node__head`},gk={class:`node__type`},_k={class:`node__label`},vk=[`onClick`],yk={class:`node__id`},bk={class:`ops`},xk=[`disabled`],Sk=[`disabled`],Ck={class:`json-code`},wk=lu(N({__name:`WithReteDemo`,setup(e){let t=A(),n=A(),r=A(),i=A(),a=A(null),o=dn(null),s=A(``),c=A(!1),l=A(!1),u=Zt([]),d=new xE(30),f=0,p=A(null);Ir(()=>{o.value=WT({target:t.value,popupEl:n.value}),o.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),m(),$n(()=>{a.value=o.value?.state.popup??null}),window.__geoFlow=()=>o.value});function m(){let e=wE(TE);u.splice(0,u.length,...e.nodes.map(e=>({...e}))),f=e.nodes.length,g(),_(),C()}function h(){return{version:`2.0.0`,name:`rete-canvas`,nodes:u.map(e=>({...e})),connections:[]}}function g(){d.push(h()),c.value=d.canUndo(),l.value=d.canRedo()}function _(){o.value&&(bE(o.value,h()),s.value=JSON.stringify(yE(h()),null,2))}let v=[{type:`basemap`,label:`底图`,params:{id:`basemap.osm`}},{type:`control`,label:`控件`,params:{id:`attribution`}},{type:`layer`,label:`图层`,params:{id:`layer-${++f}`,name:`新图层`,provider:{type:`raw`,config:{}},style:{mode:`single`,color:`#1976d2`,radius:7}}},{type:`map-output`,label:`输出`,params:{routeName:`graph`}}];function y(e,t,n){u.push({id:`n-${++f}`,type:e,label:t,params:{...n},position:{x:40+Math.random()*200,y:40+Math.random()*200}}),g(),C()}function b(e,t){p.value=t.id;let n=e.currentTarget,i=n.offsetParent||r.value,a=i.getBoundingClientRect(),o=n.getBoundingClientRect(),s={active:!0,sx:e.clientX,sy:e.clientY,bx:o.left-a.left,by:o.top-a.top};n.setPointerCapture?.(e.pointerId);let c=e=>{s.active&&(t.position.x=Math.max(0,s.bx+(e.clientX-s.sx)),t.position.y=Math.max(0,s.by+(e.clientY-s.sy)))},l=e=>{s.active=!1,n.releasePointerCapture?.(e.pointerId),i.removeEventListener(`pointermove`,c),i.removeEventListener(`pointerup`,l),g(),C()};i.addEventListener(`pointermove`,c),i.addEventListener(`pointerup`,l)}function x(){let e=d.undo();e&&(u.splice(0,u.length,...e.nodes.map(e=>({...e}))),_(),C(),c.value=d.canUndo(),l.value=d.canRedo())}function S(){let e=d.redo();e&&(u.splice(0,u.length,...e.nodes.map(e=>({...e}))),_(),C(),c.value=d.canUndo(),l.value=d.canRedo())}function C(){if(!i.value)return;i.value.innerHTML=``;let{svg:e}=CE(u.map(e=>({id:e.id,x:e.position.x,y:e.position.y,w:130,h:48})),{x:0,y:0,w:600,h:400},{width:200,height:100});i.value.appendChild(e)}function w(e){let t=u.findIndex(t=>t.id===e);t>=0&&u.splice(t,1),g(),C()}return Br(()=>{o.value?.destroy(),o.value=null}),(e,d)=>(I(),L(`div`,rk,[d[3]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 10 · 可视化编排（rete 拖拽画布）`),R(`span`,{class:`app__hint`},`物料拖入 + 节点拖动 + 运行 runGraph + 导出 JSON 对照`)],-1),R(`div`,ik,[R(`div`,ak,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:o.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:o.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:o.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[a.value?(I(),L(`div`,ok,[R(`div`,sk,k(a.value.title),1),R(`div`,ck,[(I(!0),L(F,null,P(a.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,lk,k(e.label),1),R(`span`,uk,k(e.value),1)]))),128))])])):B(``,!0)],512)]),R(`aside`,dk,[d[0]||=R(`div`,{class:`cp__title`},`物料（点击添加）`,-1),R(`div`,fk,[(I(),L(F,null,P(v,(e,t)=>R(`button`,{key:t,class:`palette__btn`,onClick:t=>y(e.type,e.label,e.params)},`+ `+k(e.label),9,pk)),64))]),d[1]||=R(`div`,{class:`cp__title`},`画布（拖动节点）`,-1),R(`div`,{class:`canvas`,ref_key:`canvasEl`,ref:r},[(I(!0),L(F,null,P(u,e=>(I(),L(`div`,{key:e.id,class:we([`node`,{"node--sel":p.value===e.id}]),style:ye({left:e.position.x+`px`,top:e.position.y+`px`}),onPointerdown:t=>b(t,e)},[R(`div`,hk,[R(`span`,gk,k(e.type),1),R(`span`,_k,k(e.label||e.id),1),R(`button`,{class:`node__del`,onClick:ss(t=>w(e.id),[`stop`])},`×`,8,vk)]),R(`div`,yk,k(e.id),1)],46,mk))),128))],512),d[2]||=R(`div`,{class:`cp__title`},`MiniMap`,-1),R(`div`,{class:`minimap`,ref_key:`miniEl`,ref:i},null,512),R(`div`,bk,[R(`button`,{class:`ops__btn ops__btn--run`,onClick:_},`▶ 运行`),R(`button`,{class:`ops__btn`,onClick:m},`↺ 预设`),R(`button`,{class:`ops__btn`,disabled:!c.value,onClick:x},`↶ 撤销`,8,xk),R(`button`,{class:`ops__btn`,disabled:!l.value,onClick:S},`↷ 重做`,8,Sk)])]),z(j(ZT),{position:`bottom-right`,title:`导出 JSON（MapConfigJSON）`},{default:qn(()=>[R(`pre`,Ck,k(s.value),1)]),_:1})])]))}}),[[`__scopeId`,`data-v-ca91e316`]]),Tk={class:`scp`},Ek={class:`scp__seg`},Dk=[`onClick`],Ok={key:0,class:`scp__group`},kk={class:`scp__row`},Ak={class:`scp__val`},jk={class:`scp__row`},Mk={class:`scp__val`},Nk={class:`scp__row`},Pk={class:`scp__val`},Fk={key:1,class:`scp__group`},Ik={class:`scp__row`},Lk=[`value`],Rk={class:`scp__row`},zk=[`value`],Bk={class:`scp__row`},Vk={class:`scp__val`},Hk={class:`scp__row`},Uk={class:`scp__val`},Wk={key:2,class:`scp__group`},Gk={class:`scp__row`},Kk=[`value`],qk={class:`scp__row`},Jk=[`value`],Yk={class:`scp__row`},Xk=[`value`],Zk={class:`scp__row`},Qk=[`value`],$k={class:`scp__row`},eA={class:`scp__val`},tA={class:`scp__row`},nA={class:`scp__val`},rA={key:3,class:`scp__group`},iA={class:`scp__arr-head`},aA={class:`scp__arr-cnt`},oA={class:`scp__item-head`},sA={class:`scp__item-idx`},cA=[`onUpdate:modelValue`],lA=[`onClick`],uA={key:0,class:`scp__row`},dA=[`onUpdate:modelValue`],fA={class:`scp__val`},pA={class:`scp__row`},mA=[`onUpdate:modelValue`],hA=[`value`],gA={class:`scp__row`},_A=[`onUpdate:modelValue`],vA=[`value`],yA={class:`scp__row`},bA=[`onUpdate:modelValue`],xA={class:`scp__val`},SA={class:`scp__row`},CA=[`onUpdate:modelValue`],wA={class:`scp__val`},TA={class:`scp__row`},EA=[`onUpdate:modelValue`],DA={class:`scp__val`},OA=lu(N({__name:`StyleConfigPanel`,props:{initialMode:{},position:{}},emits:[`apply`],setup(e,{emit:t}){let n=e,r=t,i=A(n.initialMode??`single`),a=to(()=>n.position??`top-right`),o=Array.from(new Set(MO.features.flatMap(e=>Object.keys(e.properties)))).map(e=>({label:e,value:e})),s=[{label:`semantic`,value:`semantic`},{label:`blue`,value:`blue`},{label:`green`,value:`green`},{label:`warm`,value:`warm`}],c=A(`#1976d2`),l=A(7),u=A(.85),d=A(`level`),f=A(`semantic`),p=A(7),m=A(.85),h=A([{mode:`single`,color:`#ffd166`,colorField:`level`,palette:`semantic`,radius:16,width:1.5,fillOpacity:.9},{mode:`single`,color:`#1976d2`,colorField:`level`,palette:`semantic`,radius:8,width:2,fillOpacity:.95}]),g=A(`level`),_=A(`risk`),v=A(`type`),y=A(`semantic`),b=A(6),x=A(`#ffd166`),S={高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`},C={alarm:`icon.alarm`,fault:`icon.fault`,warn:`icon.warn`,normal:`icon.ok`,info:`icon.info`};function w(){return h.value.map(e=>({mode:e.mode,color:e.mode===`categorical`?void 0:e.color,colorField:e.mode===`categorical`?e.colorField:void 0,palette:e.mode===`categorical`?e.palette:void 0,radius:e.radius,width:e.width,fillOpacity:e.fillOpacity}))}function T(){if(i.value===`styleArray`)return w();if(i.value===`single`)return{mode:`single`,color:c.value,radius:l.value,fillOpacity:u.value};if(i.value===`category`)return{mode:`categorical`,colorField:d.value,palette:f.value,radius:p.value,fillOpacity:m.value};let e=g.value,t=_.value,n=v.value,r=x.value,a=b.value;return{mode:`categorical`,colorField:e,palette:y.value,fillOpacity:.85,color:(t,n)=>n.$state===`normal`?S[String(t.get(e))]||`#4f8cff`:r,radius:e=>a+Number(e.get(t)||0)*10,icon:(e,t)=>t.$state===`normal`?C[String(e.get(n))]||`icon.info`:`icon.sel`}}er([i,c,l,u,d,f,p,m,g,_,v,y,b,x,h],()=>r(`apply`,T()),{immediate:!0,deep:!0});function E(){h.value.push({mode:`single`,color:`#22c55e`,colorField:`level`,palette:`semantic`,radius:4,width:1,fillOpacity:.6})}function D(e){h.value.length<=1||h.value.splice(e,1)}return(e,t)=>(I(),xa(j(ZT),{position:a.value,title:`配图配置面板`},{default:qn(()=>[R(`div`,Tk,[R(`div`,Ek,[(I(),L(F,null,P([`single`,`category`,`multiCategory`,`styleArray`],e=>R(`button`,{key:e,class:we({on:i.value===e}),onClick:t=>i.value=e},k(e===`single`?`single 统一`:e===`category`?`category 单字段`:e===`multiCategory`?`multiCategory 多字段`:`styleArray 配置数组`),11,Dk)),64))]),i.value===`single`?(I(),L(`div`,Ok,[R(`div`,kk,[t[13]||=R(`label`,null,`颜色 color`,-1),M(R(`input`,{type:`color`,"onUpdate:modelValue":t[0]||=e=>c.value=e},null,512),[[Zo,c.value]]),R(`span`,Ak,k(c.value),1)]),R(`div`,jk,[t[14]||=R(`label`,null,`半径 radius`,-1),M(R(`input`,{type:`range`,min:`3`,max:`20`,step:`1`,"onUpdate:modelValue":t[1]||=e=>l.value=e},null,512),[[Zo,l.value,void 0,{number:!0}]]),R(`span`,Mk,k(l.value),1)]),R(`div`,Nk,[t[15]||=R(`label`,null,`透明度 fillOpacity`,-1),M(R(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.05`,"onUpdate:modelValue":t[2]||=e=>u.value=e},null,512),[[Zo,u.value,void 0,{number:!0}]]),R(`span`,Pk,k(u.value.toFixed(2)),1)]),t[16]||=R(`p`,{class:`scp__tip`},`所有要素同色同大小，返回单 Style。`,-1)])):B(``,!0),i.value===`category`?(I(),L(`div`,Fk,[R(`div`,Ik,[t[17]||=R(`label`,null,`分级字段`,-1),M(R(`select`,{"onUpdate:modelValue":t[3]||=e=>d.value=e},[(I(!0),L(F,null,P(j(o),e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,Lk))),128))],512),[[es,d.value]])]),R(`div`,Rk,[t[18]||=R(`label`,null,`色板 palette`,-1),M(R(`select`,{"onUpdate:modelValue":t[4]||=e=>f.value=e},[(I(),L(F,null,P(s,e=>R(`option`,{key:e.value,value:e.value},k(e.label),9,zk)),64))],512),[[es,f.value]])]),R(`div`,Bk,[t[19]||=R(`label`,null,`半径 radius`,-1),M(R(`input`,{type:`range`,min:`3`,max:`20`,step:`1`,"onUpdate:modelValue":t[5]||=e=>p.value=e},null,512),[[Zo,p.value,void 0,{number:!0}]]),R(`span`,Vk,k(p.value),1)]),R(`div`,Hk,[t[20]||=R(`label`,null,`透明度 fillOpacity`,-1),M(R(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.05`,"onUpdate:modelValue":t[6]||=e=>m.value=e},null,512),[[Zo,m.value,void 0,{number:!0}]]),R(`span`,Uk,k(m.value.toFixed(2)),1)]),t[21]||=R(`p`,{class:`scp__tip`},`按字段值分类配色（categorical + palette），返回单 Style。`,-1)])):B(``,!0),i.value===`multiCategory`?(I(),L(`div`,Wk,[R(`div`,Gk,[t[22]||=R(`label`,null,`底色字段`,-1),M(R(`select`,{"onUpdate:modelValue":t[7]||=e=>g.value=e},[(I(!0),L(F,null,P(j(o),e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,Kk))),128))],512),[[es,g.value]])]),R(`div`,qk,[t[23]||=R(`label`,null,`大小字段`,-1),M(R(`select`,{"onUpdate:modelValue":t[8]||=e=>_.value=e},[(I(!0),L(F,null,P(j(o),e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,Jk))),128))],512),[[es,_.value]])]),R(`div`,Yk,[t[24]||=R(`label`,null,`图标字段`,-1),M(R(`select`,{"onUpdate:modelValue":t[9]||=e=>v.value=e},[(I(!0),L(F,null,P(j(o),e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,Xk))),128))],512),[[es,v.value]])]),R(`div`,Zk,[t[25]||=R(`label`,null,`色板 palette`,-1),M(R(`select`,{"onUpdate:modelValue":t[10]||=e=>y.value=e},[(I(),L(F,null,P(s,e=>R(`option`,{key:e.value,value:e.value},k(e.label),9,Qk)),64))],512),[[es,y.value]])]),R(`div`,$k,[t[26]||=R(`label`,null,`基础半径`,-1),M(R(`input`,{type:`range`,min:`3`,max:`14`,step:`1`,"onUpdate:modelValue":t[11]||=e=>b.value=e},null,512),[[Zo,b.value,void 0,{number:!0}]]),R(`span`,eA,k(b.value),1)]),R(`div`,tA,[t[27]||=R(`label`,null,`高亮色`,-1),M(R(`input`,{type:`color`,"onUpdate:modelValue":t[12]||=e=>x.value=e},null,512),[[Zo,x.value]]),R(`span`,nA,k(x.value),1)]),t[28]||=R(`p`,{class:`scp__tip`},`底色←colorField · 大小←sizeField · icon←iconField，匿名函数驱动，返回 Style[]（光环→圆底→icon）。`,-1)])):B(``,!0),i.value===`styleArray`?(I(),L(`div`,rA,[R(`div`,iA,[R(`span`,aA,k(h.value.length)+` 项`,1),R(`button`,{class:`scp__add`,onClick:E},`+ 添加样式项`)]),(I(!0),L(F,null,P(h.value,(e,n)=>(I(),L(`div`,{key:n,class:`scp__item`},[R(`div`,oA,[R(`span`,sA,`项 `+k(n+1),1),M(R(`select`,{"onUpdate:modelValue":t=>e.mode=t,class:`scp__item-mode`},[...t[29]||=[R(`option`,{value:`single`},`single`,-1),R(`option`,{value:`categorical`},`categorical`,-1)]],8,cA),[[es,e.mode]]),h.value.length>1?(I(),L(`button`,{key:0,class:`scp__del`,onClick:e=>D(n)},`删除`,8,lA)):B(``,!0)]),e.mode===`single`?(I(),L(`div`,uA,[t[30]||=R(`label`,null,`颜色 color`,-1),M(R(`input`,{type:`color`,"onUpdate:modelValue":t=>e.color=t},null,8,dA),[[Zo,e.color]]),R(`span`,fA,k(e.color),1)])):(I(),L(F,{key:1},[R(`div`,pA,[t[31]||=R(`label`,null,`分级字段`,-1),M(R(`select`,{"onUpdate:modelValue":t=>e.colorField=t},[(I(!0),L(F,null,P(j(o),e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,hA))),128))],8,mA),[[es,e.colorField]])]),R(`div`,gA,[t[32]||=R(`label`,null,`色板`,-1),M(R(`select`,{"onUpdate:modelValue":t=>e.palette=t},[(I(),L(F,null,P(s,e=>R(`option`,{key:e.value,value:e.value},k(e.label),9,vA)),64))],8,_A),[[es,e.palette]])])],64)),R(`div`,yA,[t[33]||=R(`label`,null,`半径 radius`,-1),M(R(`input`,{type:`range`,min:`2`,max:`24`,step:`1`,"onUpdate:modelValue":t=>e.radius=t},null,8,bA),[[Zo,e.radius,void 0,{number:!0}]]),R(`span`,xA,k(e.radius),1)]),R(`div`,SA,[t[34]||=R(`label`,null,`线宽 width`,-1),M(R(`input`,{type:`range`,min:`0`,max:`8`,step:`0.5`,"onUpdate:modelValue":t=>e.width=t},null,8,CA),[[Zo,e.width,void 0,{number:!0}]]),R(`span`,wA,k(e.width),1)]),R(`div`,TA,[t[35]||=R(`label`,null,`透明度`,-1),M(R(`input`,{type:`range`,min:`0.1`,max:`1`,step:`0.05`,"onUpdate:modelValue":t=>e.fillOpacity=t},null,8,EA),[[Zo,e.fillOpacity,void 0,{number:!0}]]),R(`span`,DA,k(e.fillOpacity.toFixed(2)),1)])]))),128)),t[36]||=R(`p`,{class:`scp__tip`},`style 直接给配置数组（object[]）：库逐项渲染并拍平为 Style[]，后项压在前项之上。典型用法：外圈光环 + 内圈实底。`,-1)])):B(``,!0)])]),_:1},8,[`position`]))}}),[[`__scopeId`,`data-v-e5f0c6cd`]]),kA={class:`app`},AA={class:`app__stage`},jA={key:0,class:`popup__card`},MA={class:`popup__title`},NA={class:`popup__rows`},PA={class:`popup__row-label`},FA={class:`popup__row-value`},IA=N({__name:`SingleStyleDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=A({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`single`,color:`#1976d2`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}});function o(e){let t=i.value?.engines?.get(`stations`);t&&(a.value={...a.value,style:e},t.updateConfig(a.value),t.restart())}return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(a.value),i.value.run(`style-single`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,kA,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.1 · 单值配图`),R(`span`,{class:`app__hint`},`所有要素同色同大小（single） · 右侧面板可即时编辑生效`)],-1),R(`div`,AA,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),z(OA,{"initial-mode":`single`,position:`top-right`,onApply:o}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,jA,[R(`div`,MA,k(r.value.title),1),R(`div`,NA,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,PA,k(e.label),1),R(`span`,FA,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),LA={class:`app`},RA={class:`app__stage`},zA={key:0,class:`popup__card`},BA={class:`popup__title`},VA={class:`popup__rows`},HA={class:`popup__row-label`},UA={class:`popup__row-value`},WA=N({__name:`CategoricalStyleDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=A({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:7,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}});function o(e){let t=i.value?.engines?.get(`stations`);t&&(a.value={...a.value,style:e},t.updateConfig(a.value),t.restart())}return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(a.value),i.value.run(`style-categorical`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,LA,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.2 · 分类配图`),R(`span`,{class:`app__hint`},`按字段分类配色（categorical + palette） · 右侧面板可切字段/色板即时生效`)],-1),R(`div`,RA,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),z(OA,{"initial-mode":`category`,position:`top-right`,onApply:o}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,zA,[R(`div`,BA,k(r.value.title),1),R(`div`,VA,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,HA,k(e.label),1),R(`span`,UA,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),GA={class:`app`},KA={class:`app__stage`},qA={key:0,class:`popup__card`},JA={class:`popup__title`},YA={class:`popup__rows`},XA={class:`popup__row-label`},ZA={class:`popup__row-value`},QA=N({__name:`ExpressionStyleDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null);return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:"${$feature.risk * 8 + 4}",fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`style-expression`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,GA,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.3 · 表达式参数`),R(`span`,{class:`app__hint`},[R(`code`,null,"radius: '${'$'}feature.risk * 8 + 4'"),ka(` 表达式串`)])],-1),R(`div`,KA,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,qA,[R(`div`,JA,k(r.value.title),1),R(`div`,YA,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,XA,k(e.label),1),R(`span`,ZA,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),$A={class:`app`},ej={class:`app__stage`},tj={key:0,class:`popup__card`},nj={class:`popup__title`},rj={class:`popup__rows`},ij={class:`popup__row-label`},aj={class:`popup__row-value`},oj=N({__name:`FunctionStyleDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null);return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:e=>6+e.get(`risk`)*10,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`style-function`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,$A,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.4 · 函数参数`),R(`span`,{class:`app__hint`},[R(`code`,null,`radius: (f) => 6 + f.get('risk') * 10`),ka(` 匿名函数`)])],-1),R(`div`,ej,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,tj,[R(`div`,nj,k(r.value.title),1),R(`div`,rj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,ij,k(e.label),1),R(`span`,aj,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),sj={class:`app`},cj={class:`app__stage`},lj={key:0,class:`popup__card`},uj={class:`popup__title`},dj={class:`popup__rows`},fj={class:`popup__row-label`},pj={class:`popup__row-value`},mj=N({__name:`MultiAttrStyleDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=A({id:`stations`,name:`监测站（多字段配图）`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,fillOpacity:.85,color:(e,t)=>t.$state===`normal`?{高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`}[String(e.get(`level`))]||`#4f8cff`:`#ffd166`,radius:e=>6+Number(e.get(`risk`)||0)*10,icon:(e,t)=>t.$state===`normal`?{alarm:`icon.alarm`,fault:`icon.fault`,warn:`icon.warn`,normal:`icon.ok`,info:`icon.info`}[String(e.get(`type`))]||`icon.info`:`icon.sel`},popup:{titleField:`name`,contentFields:[`name`,`type`,`level`,`risk`]},interaction:{highlight:{trigger:`hover`,color:`#ffd166`},cursor:!0}});function o(e){let t=i.value?.engines?.get(`stations`);t&&(a.value={...a.value,style:e},t.updateConfig(a.value),t.restart())}return Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(a.value),i.value.run(`style-multi`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,sj,[a[0]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.5 · 多字段控制样式（最复杂）`),R(`span`,{class:`app__hint`},`底色←level · 大小←risk · icon←type · 高亮三联动 · 右侧面板可切三字段即时生效`)],-1),R(`div`,cj,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),z(OA,{"initial-mode":`multiCategory`,position:`top-right`,onApply:o}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,lj,[R(`div`,uj,k(r.value.title),1),R(`div`,dj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,fj,k(e.label),1),R(`span`,pj,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),hj={class:`app`},gj={class:`app__stage`},_j={class:`panel`},vj={class:`panel__seg`},yj=[`onClick`],bj={class:`panel__code`},xj={class:`panel__no`},Sj={class:`panel__txt`},Cj={key:0,class:`popup__card`},wj={class:`popup__title`},Tj={class:`popup__rows`},Ej={class:`popup__row-label`},Dj={class:`popup__row-value`},Oj=lu(N({__name:`StageBuilderDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=qT().fill({color:`#2563eb`,opacity:.5}).stroke({color:`#1e3a8a`,width:2}).circle({radius:9,color:`#2563eb`,opacity:.85,strokeColor:`#fff`,strokeWidth:2}).text({field:`name`,font:`600 12px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:-18}).toJSON(),o=qT().circle({radius:12,color:`#f59e0b`,opacity:.4,strokeColor:`#f59e0b`,strokeWidth:2}).icon({src:`icon.alarm`,scale:1,opacity:1}).text({field:`name`,font:`500 11px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:-20}).toJSON(),s=qT().circle({radius:7,strokeColor:`#fff`,strokeWidth:1.5}).text({field:`name`,font:`500 11px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:2,offsetY:-16,show:"${$feature.risk > 0.6}"}).rule({id:`r-level`,mode:`categorical`,priority:10,field:`level`,categories:{高:{color:`#ef4444`},中:{color:`#f59e0b`},低:{color:`#22c55e`}},fallback:{color:`#64748b`}}).rule({id:`r-risk`,mode:`continuous`,priority:5,field:`risk`,ranges:[{min:.8,max:1,style:{radius:12}},{min:.5,max:.8,style:{radius:9}},{min:0,max:.5,style:{radius:6}}]}).toJSON(),c=[qT().circle({radius:18,color:`#ffd166`,opacity:.35,strokeColor:`#ffd166`,strokeWidth:1}).toJSON(),qT().circle({radius:8,color:`#1976d2`,opacity:.95,strokeColor:`#fff`,strokeWidth:2}).icon({src:`icon.alarm`,scale:.8}).text({field:`name`,font:`600 11px PingFang SC, sans-serif`,color:`#fff`,outlineColor:`rgba(10,18,32,0.85)`,outlineWidth:3,offsetY:-20}).toJSON()],l=[{key:`stage`,label:`分阶段基础`,style:a,code:`createStyle()
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
]`}],u=A(l[0]),d=A({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:u.value.style,popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`,`value`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}});function f(e){u.value=e,d.value={...d.value,style:e.style};let t=i.value?.engines?.get(`stations`);t&&(t.updateConfig(d.value),t.restart())}Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),i.value.layer(d.value),i.value.run(`style-stage`,{}),$n(()=>{r.value=i.value?.state.popup??null})}),Br(()=>{i.value?.destroy(),i.value=null});let p=to(()=>u.value.code.split(`
`));return(e,a)=>(I(),L(`div`,hj,[a[3]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`配图 2.6 · 分阶段链式 StyleBuilder + 规则引擎`),R(`span`,{class:`app__hint`},`fill / stroke / circle / icon / text / rule 阶段化链式 · 底层走 styles 工厂`)],-1),R(`div`,gj,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-right`},null,8,[`engine`]),R(`div`,_j,[R(`div`,vj,[(I(),L(F,null,P(l,e=>R(`button`,{key:e.key,class:we({on:u.value.key===e.key}),onClick:t=>f(e)},k(e.label),11,yj)),64))]),a[1]||=R(`div`,{class:`panel__code-head`},`builder 链式代码`,-1),R(`pre`,bj,[R(`code`,null,[(I(!0),L(F,null,P(p.value,(e,t)=>(I(),L(`span`,{key:t,class:`panel__ln`},[R(`span`,xj,k(t+1),1),R(`span`,Sj,k(e||` `),1),a[0]||=ka(`
`,-1)]))),128))])]),a[2]||=R(`p`,{class:`panel__tip`},`切换方案即时生效。规则引擎方案：level 决定颜色、risk 决定半径；text.show 用表达式控制只在高风险站显示标注。`,-1)]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,Cj,[R(`div`,wj,k(r.value.title),1),R(`div`,Tj,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Ej,k(e.label),1),R(`span`,Dj,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-0e26bbed`]]),kj={class:`app`},Aj={class:`app__bar`},jj={class:`app__title`},Mj={class:`app__hint`},Nj={class:`app__stage`},Pj={class:`ep`},Fj={class:`ep__label`},Ij=[`onUpdate:modelValue`],Lj=[`min`,`max`,`step`,`onUpdate:modelValue`],Rj=[`onUpdate:modelValue`],zj=[`value`],Bj={key:3,class:`ep__val`},Vj={class:`ep__row`},Hj={key:0,class:`popup__card`},Uj={class:`popup__title`},Wj={class:`popup__rows`},Gj={class:`popup__row-label`},Kj={class:`popup__row-value`},qj=lu(N({__name:`EffectPlayground`,props:{effectName:{},title:{},hint:{},params:{},schema:{}},setup(e){let t=e,n=A(),r=A(),i=A(null),a=dn(null),o=null,s=Zt({...t.params}),c=A(`all`),l={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{a.value=WT({target:n.value,popupEl:r.value}),a.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),o=a.value.layer({...l,effects:u()}),a.value.run(`effect`,{}),$n(()=>{i.value=a.value?.state.popup??null})});function u(){let e={...s};return c.value===`risk`?e.condition=e=>e.get(`risk`)>.7:c.value===`level`&&(e.conditionField=`level`,e.conditionValue=`高`),[Lu(t.effectName,e)]}function d(){o&&(o.updateConfig({...l,effects:u()}),o.restart())}return Br(()=>{a.value?.destroy(),a.value=null}),(t,o)=>(I(),L(`div`,kj,[R(`header`,Aj,[R(`span`,jj,k(e.title),1),R(`span`,Mj,k(e.hint||`调参 + condition 函数条件 + 子集生效`),1)]),R(`div`,Nj,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:n},null,512),z(j($T),{engine:a.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:a.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:a.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:e.title+` 参数`},{default:qn(()=>[R(`div`,Pj,[(I(!0),L(F,null,P(e.schema,e=>(I(),L(`div`,{key:e.key,class:`ep__row`},[R(`label`,Fj,k(e.label),1),e.type===`color`?M((I(),L(`input`,{key:0,type:`color`,class:`ep__color`,"onUpdate:modelValue":t=>s[e.key]=t},null,8,Ij)),[[Zo,s[e.key]]]):e.type===`range`?M((I(),L(`input`,{key:1,type:`range`,class:`ep__range`,min:e.min,max:e.max,step:e.step,"onUpdate:modelValue":t=>s[e.key]=t},null,8,Lj)),[[Zo,s[e.key],void 0,{number:!0}]]):M((I(),L(`select`,{key:2,class:`ep__select`,"onUpdate:modelValue":t=>s[e.key]=t},[(I(!0),L(F,null,P(e.options,e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,zj))),128))],8,Rj)),[[es,s[e.key]]]),e.type===`range`?(I(),L(`span`,Bj,k(s[e.key]),1)):B(``,!0)]))),128)),R(`div`,Vj,[o[2]||=R(`label`,{class:`ep__label`},`条件`,-1),M(R(`select`,{class:`ep__select`,"onUpdate:modelValue":o[0]||=e=>c.value=e},[...o[1]||=[R(`option`,{value:`all`},`全部要素`,-1),R(`option`,{value:`risk`},`risk>0.7（函数）`,-1),R(`option`,{value:`level`},`level=高（字段）`,-1)]],512),[[es,c.value]])]),R(`button`,{class:`ep__btn`,onClick:d},`应用（updateConfig + restart）`)])]),_:1},8,[`title`]),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:r},[i.value?(I(),L(`div`,Hj,[R(`div`,Uj,k(i.value.title),1),R(`div`,Wj,[(I(!0),L(F,null,P(i.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,Gj,k(e.label),1),R(`span`,Kj,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-5529b20e`]]),Jj=N({__name:`RipplePlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:1e3,max:5e3,step:200},{key:`rings`,label:`环数`,type:`range`,min:1,max:6,step:1}];return(e,n)=>(I(),xa(qj,{"effect-name":`ripple`,title:`效果 3.1 · 涟漪 ripple`,params:{color:`#ff5c5c`,period:3e3,rings:3},schema:t}))}}),Yj=N({__name:`PulsePlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:600,max:2400,step:100},{key:`jumpPx`,label:`跳起`,type:`range`,min:6,max:40,step:1},{key:`pointRadius`,label:`点半径`,type:`range`,min:4,max:12,step:1}];return(e,n)=>(I(),xa(qj,{"effect-name":`pulse`,title:`效果 3.2 · 点跳跃 pulse`,params:{color:`#ffd666`,period:1200,jumpPx:18,pointRadius:7},schema:t}))}}),Xj=N({__name:`WavePlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:800,max:2400,step:200},{key:`rings`,label:`环数`,type:`range`,min:1,max:5,step:1}];return(e,n)=>(I(),xa(qj,{"effect-name":`wave`,title:`效果 3.3 · 涟漪 wave`,params:{color:`#36cbcb`,period:1800,rings:3},schema:t}))}}),Zj=N({__name:`BreathingPlayground`,setup(e){let t=[{key:`color`,label:`颜色`,type:`color`},{key:`period`,label:`周期`,type:`range`,min:800,max:3200,step:200}];return(e,n)=>(I(),xa(qj,{"effect-name":`breathing`,title:`效果 3.4 · 呼吸灯 breathing`,params:{color:`#4f8cff`,period:1600},schema:t}))}}),Qj={class:`app`},$j={class:`app__stage`},eM={class:`cp`},tM={class:`cp__row`},nM={class:`cp__row`},rM={class:`cp__state`},iM={class:`cp__btns`},aM={class:`cp__btns`},oM=[`onClick`],sM={class:`gf-popups`},cM={class:`gf-popups__svg`},lM=[`d`],uM={class:`gf-card__head`},dM=lu(N({__name:`CarouselPlayground`,setup(e){let t=A(),n=dn(null),r=null,i=A(1500),a=A(`idle`),o=A(-1),s=null,c=A(`bezier`),l=A([]),u=A([]);function d(){let e=PT.list(),t=[],n=[];for(let r of e){let e=PT.getLayout(r.id);if(!e)continue;let i=r.content?.rows??[];t.push({id:r.id,title:r.content?.title??r.id,rows:i,anchor:r.anchorScreen,offset:e.offset}),n.push({id:r.id,d:ST.toPath({start:r.anchorScreen,end:e.leaderEnd},{style:c.value,color:`#f59e0b`,width:1.8,arrow:!0})})}l.value=t,u.value=n}function f(){let e=new Map;for(let t of PT.list()){let r=t.feature?.geometry;if(!r)continue;let i=n.value?.map.getPixelFromCoordinate(bp(r.coordinates));i&&e.set(t.id,[i[0],i[1]])}e.size&&PT.updateAnchors(e),d()}function p(e){let t=e.geometry?.coordinates??[],r=n.value?.map.getPixelFromCoordinate(bp(t));PT.open({id:`card-`+e.properties.id,feature:e,anchorScreen:r?[r[0],r[1]]:[0,0],size:{width:200,height:96},content:{title:String(e.properties.name??`详情`),rows:[{label:`等级`,value:String(e.properties.level??`—`)},{label:`风险`,value:Number(e.properties.risk).toFixed(2)},{label:`类型`,value:String(e.properties.type??`—`)}]}}),d()}function m(e){PT.close(`card-`+e.properties.id),d()}let h={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};function g(){return[Lu(`carousel`,{interval:i.value,autoStart:!0,pauseOnHover:!1,pauseOnUserInteract:!1,onEnter:p,onLeave:m})]}let _=null,v=null;Ir(()=>{n.value=WT({target:t.value}),n.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),r=n.value.layer({...h,effects:g()}),n.value.run(`carousel`,{}),_=setInterval(()=>{let e=(n.value?.engines.get(`stations`)?.layer)?.get?.(`carouselController`);e&&(s=e,_&&=(clearInterval(_),null),s.state===`idle`&&s.start(),v=setInterval(()=>{a.value=s.state,o.value=s.currentIndex},200))},100),PT.setViewport({width:t.value.clientWidth,height:t.value.clientHeight}),PT.on(d);let e=n.value.map.getView();n.value.map.on(`pointerdrag`,b),e.on(`change:resolution`,b),n.value.map.on(`moveend`,f),n.value.map.on(`resize`,f)});let y=null;function b(){y??=requestAnimationFrame(()=>{y=null,f()})}function x(){r&&(r.updateConfig({...h,effects:g()}),r.restart())}function S(e){s?.[e]?.()}function C(e){s?.goto?.(e)}function w(){d()}return Br(()=>{_&&=(clearInterval(_),null),v&&=(clearInterval(v),null),PT.list().map(e=>e.id).forEach(e=>PT.close(e)),n.value?.destroy(),n.value=null}),(e,r)=>(I(),L(`div`,Qj,[r[9]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`效果 3.5 · 轮播 carousel playground`),R(`span`,{class:`app__hint`},`自动轮播高亮 + popup 跟随 + 贝塞尔引线 · interval/控制器/引线风格可调`)],-1),R(`div`,$j,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:n.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:n.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:n.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`carousel 控制`},{default:qn(()=>[R(`div`,eM,[R(`div`,tM,[r[6]||=R(`label`,null,`interval`,-1),M(R(`input`,{type:`range`,min:`500`,max:`4000`,step:`100`,"onUpdate:modelValue":r[0]||=e=>i.value=e},null,512),[[Zo,i.value,void 0,{number:!0}]]),R(`span`,null,k(i.value)+`ms`,1)]),R(`div`,nM,[r[8]||=R(`label`,null,`引线风格`,-1),M(R(`select`,{"onUpdate:modelValue":r[1]||=e=>c.value=e,onChange:w},[...r[7]||=[R(`option`,{value:`bezier`},`贝塞尔曲线`,-1),R(`option`,{value:`polyline`},`折线（斜出+横竖到达）`,-1),R(`option`,{value:`straight`},`直线`,-1)]],544),[[es,c.value]])]),R(`div`,rM,`状态：`+k(a.value)+` · 当前：`+k(o.value),1),R(`div`,iM,[R(`button`,{onClick:r[2]||=e=>S(`start`)},`start`),R(`button`,{onClick:r[3]||=e=>S(`pause`)},`pause`),R(`button`,{onClick:r[4]||=e=>S(`resume`)},`resume`),R(`button`,{onClick:r[5]||=e=>S(`stop`)},`stop`)]),R(`div`,aM,[(I(),L(F,null,P(8,e=>R(`button`,{key:e,onClick:t=>C(e-1)},`goto`+k(e),9,oM)),64))]),R(`button`,{class:`cp__apply`,onClick:x},`应用 interval（restart）`)])]),_:1}),R(`div`,sM,[(I(),L(`svg`,cM,[(I(!0),L(F,null,P(u.value,e=>(I(),L(`path`,{key:e.id,d:e.d},null,8,lM))),128))])),(I(!0),L(F,null,P(l.value,e=>(I(),L(`div`,{key:e.id,class:`gf-card`,style:ye({transform:`translate(${e.offset.x}px, ${e.offset.y}px)`})},[R(`div`,uM,k(e.title),1),(I(!0),L(F,null,P(e.rows,(e,t)=>(I(),L(`div`,{key:t,class:`gf-card__row`},[R(`span`,null,k(e.label),1),R(`b`,null,k(e.value),1)]))),128))],4))),128))])])]))}}),[[`__scopeId`,`data-v-bc26fde9`]]),fM={class:`app`},pM={class:`app__stage`},mM={class:`cp`},hM={class:`cp__row`},gM={class:`cp__row`},_M={key:0,class:`popup__card`},vM={class:`popup__title`},yM={class:`popup__rows`},bM={class:`popup__row-label`},xM={class:`popup__row-value`},SM=lu(N({__name:`CustomEffectPlayground`,setup(e){Pu({name:`glow`,symbol:Symbol.for(`effect.glow`),stage:`postrender`,meta:{label:`光晕`,icon:`✨`,desc:`自定义节律光晕环`,category:`effect`},defaults:{color:`#a855f7`,period:2e3},attach(e,t){return Zg(e,t.period,({vector:n,t:r})=>{let i=e.source.getFeatures();if(!i.length)return!1;let a=.5+.5*Math.sin(r*Math.PI*2);return i.forEach(e=>{let r=e.getGeometry().getCoordinates();n.setStyle(new Jh({fill:new Uh({color:Qg(t.color,.12+.28*a)})})),n.drawGeometry(new Og(r,280+120*a))}),!0})}});let t=A(),n=A(),r=A(null),i=dn(null),a=null,o=A(`#a855f7`),s=A(2e3),c={id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:MO}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}};Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({...c,effects:[Lu(`glow`,{color:o.value,period:s.value})]}),i.value.run(`custom-effect`,{}),$n(()=>{r.value=i.value?.state.popup??null})});function l(){a&&(a.updateConfig({...c,effects:[Lu(`glow`,{color:o.value,period:s.value})]}),a.restart())}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,fM,[a[4]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`效果 3.6 · 自定义效果 glow`),R(`span`,{class:`app__hint`},[R(`code`,null,`defineEffect`),ka(` 注册 + `),R(`code`,null,`useEffect('glow')`),ka(` 接入`)])],-1),R(`div`,pM,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`glow 参数`},{default:qn(()=>[R(`div`,mM,[R(`div`,hM,[a[2]||=R(`label`,null,`颜色`,-1),M(R(`input`,{type:`color`,"onUpdate:modelValue":a[0]||=e=>o.value=e},null,512),[[Zo,o.value]])]),R(`div`,gM,[a[3]||=R(`label`,null,`周期`,-1),M(R(`input`,{type:`range`,min:`800`,max:`4000`,step:`200`,"onUpdate:modelValue":a[1]||=e=>s.value=e},null,512),[[Zo,s.value,void 0,{number:!0}]]),R(`span`,null,k(s.value)+`ms`,1)]),R(`button`,{class:`cp__apply`,onClick:l},`应用`)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,_M,[R(`div`,vM,k(r.value.title),1),R(`div`,yM,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,bM,k(e.label),1),R(`span`,xM,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-e601a211`]]),CM={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.46,24.98]},properties:{id:`s1`,name:`后渚港`,level:`高`,risk:.92}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.52,24.95]},properties:{id:`s2`,name:`秀涂`,level:`中`,risk:.65}}]},wM={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,24.93]},properties:{id:`s3`,name:`崇武`,level:`低`,risk:.38}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.43,25.02]},properties:{id:`s4`,name:`洛阳桥`,level:`中`,risk:.55}}]},TM={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.49,25.05]},properties:{id:`s5`,name:`惠安湾`,level:`中`,risk:.78}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.55,25.08]},properties:{id:`s6`,name:`斗尾港`,level:`低`,risk:.21}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.66,24.99]},properties:{id:`s8`,name:`净峰`,level:`高`,risk:.88}}]},EM={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.5,25.1]},properties:{id:`x1`,name:`北部站A`,level:`高`,risk:.85}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.54,25.12]},properties:{id:`x2`,name:`北部站B`,level:`中`,risk:.5}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.58,25.09]},properties:{id:`x3`,name:`北部站C`,level:`低`,risk:.3}}]},DM={type:`FeatureCollection`,features:[{type:`Feature`,geometry:{type:`Point`,coordinates:[118.45,24.88]},properties:{id:`y1`,name:`南部站A`,level:`高`,risk:.9}},{type:`Feature`,geometry:{type:`Point`,coordinates:[118.6,24.86]},properties:{id:`y2`,name:`南部站B`,level:`中`,risk:.6}}]},OM=[{id:`initial`,label:`初始数据集`,data:CM},{id:`X`,label:`数据集 X（北部）`,data:EM},{id:`Y`,label:`数据集 Y（南部）`,data:DM}],kM={class:`app`},AM={class:`app__bar`},jM={class:`app__hint`},MM={class:`app__stage`},NM={class:`ld`},PM={class:`ld__count`},FM={key:0,class:`popup__card`},IM={class:`popup__title`},LM={class:`popup__rows`},RM={class:`popup__row-label`},zM={class:`popup__row-value`},BM=lu(N({__name:`AppendDataDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=null,o=to(()=>gT.get(`stations`)?.featureCount??0);Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:CM}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`append`,{}),$n(()=>{r.value=i.value?.state.popup??null})});function s(e){a?.appendData(e)}function c(){a?.clearData()}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,kM,[R(`header`,AM,[a[2]||=R(`span`,{class:`app__title`},`基础图层 4.1 · appendData 增量追加`,-1),R(`span`,jM,`按钮追加批次，不清空现有 · 当前 `+k(o.value)+` 个`,1)]),R(`div`,MM,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`appendData`},{default:qn(()=>[R(`div`,NM,[R(`button`,{class:`ld__btn`,onClick:a[0]||=e=>s(j(wM))},`追加批次 A（2 个）`),R(`button`,{class:`ld__btn`,onClick:a[1]||=e=>s(j(TM))},`追加批次 B（3 个）`),R(`button`,{class:`ld__btn ld__btn--warn`,onClick:c},`clearData 清空`),R(`div`,PM,`当前要素数：`+k(o.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,FM,[R(`div`,IM,k(r.value.title),1),R(`div`,LM,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,RM,k(e.label),1),R(`span`,zM,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-a960afcf`]]),VM={class:`app`},HM={class:`app__bar`},UM={class:`app__hint`},WM={class:`app__stage`},GM={class:`ld`},KM={class:`ld__count`},qM={key:0,class:`popup__card`},JM={class:`popup__title`},YM={class:`popup__rows`},XM={class:`popup__row-label`},ZM={class:`popup__row-value`},QM=lu(N({__name:`UpdateDataDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=null,o=to(()=>gT.get(`stations`)?.featureCount??0),s=A(`initial`);Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:CM}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`update`,{}),$n(()=>{r.value=i.value?.state.popup??null})});function c(e){let t=e===`initial`?CM:e===`X`?EM:DM;a?.updateData(t),s.value=e}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,VM,[R(`header`,HM,[a[3]||=R(`span`,{class:`app__title`},`基础图层 4.2 · updateData 全量更新`,-1),R(`span`,UM,`切换数据集 · 当前 `+k(s.value)+` / `+k(o.value)+` 个`,1)]),R(`div`,WM,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`updateData`},{default:qn(()=>[R(`div`,GM,[R(`button`,{class:we([`ld__btn`,{"ld__btn--active":s.value===`initial`}]),onClick:a[0]||=e=>c(`initial`)},`初始数据集`,2),R(`button`,{class:we([`ld__btn`,{"ld__btn--active":s.value===`X`}]),onClick:a[1]||=e=>c(`X`)},`数据集 X（北部）`,2),R(`button`,{class:we([`ld__btn`,{"ld__btn--active":s.value===`Y`}]),onClick:a[2]||=e=>c(`Y`)},`数据集 Y（南部）`,2),R(`div`,KM,`当前要素数：`+k(o.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,qM,[R(`div`,JM,k(r.value.title),1),R(`div`,YM,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,XM,k(e.label),1),R(`span`,ZM,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-66f2f7de`]]),$M={class:`app`},eN={class:`app__bar`},tN={class:`app__hint`},nN={class:`app__stage`},rN={class:`ld`},iN=[`disabled`],aN=[`disabled`],oN={class:`ld__count`},sN={key:0,class:`popup__card`},cN={class:`popup__title`},lN={class:`popup__rows`},uN={class:`popup__row-label`},dN={class:`popup__row-value`},fN=lu(N({__name:`RestoreDataDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=null,o=to(()=>gT.get(`stations`)?.featureCount??0),s=A(!0);Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:CM}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`restore`,{}),a?.snapshotOriginal(),$n(()=>{r.value=i.value?.state.popup??null})});function c(){a?.updateData(EM,{keepOriginal:!0}),s.value=!1}function l(){a?.restoreOriginal(),s.value=!0}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,$M,[R(`header`,eN,[a[0]||=R(`span`,{class:`app__title`},`基础图层 4.3 · keepOriginal + restoreOriginal`,-1),R(`span`,tN,`updateData(新,keepOriginal) → restoreOriginal 恢复初始 · `+k(o.value)+` 个`,1)]),R(`div`,nN,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`keepOriginal / restore`},{default:qn(()=>[R(`div`,rN,[R(`button`,{class:`ld__btn`,disabled:!s.value,onClick:c},`updateData(X, keepOriginal)`,8,iN),R(`button`,{class:`ld__btn ld__btn--warn`,disabled:s.value,onClick:l},`restoreOriginal`,8,aN),R(`div`,oN,`状态：`+k(s.value?`初始`:`已替换`)+` · `+k(o.value)+` 个`,1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,sN,[R(`div`,cN,k(r.value.title),1),R(`div`,lN,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,uN,k(e.label),1),R(`span`,dN,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-f9d5651f`]]),pN={class:`app`},mN={class:`app__bar`},hN={class:`app__hint`},gN={class:`app__stage`},_N={class:`ld`},vN=[`value`],yN={class:`ld__row`},bN={class:`ld__count`},xN={key:0,class:`popup__card`},SN={class:`popup__title`},CN={class:`popup__rows`},wN={class:`popup__row-label`},TN={class:`popup__row-value`},EN=lu(N({__name:`MultiDatasetDemo`,setup(e){let t=A(),n=A(),r=A(null),i=dn(null),a=null,o=to(()=>gT.get(`stations`)?.featureCount??0);Ir(()=>{i.value=WT({target:t.value,popupEl:n.value}),i.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),a=i.value.layer({id:`stations`,name:`监测站`,zIndex:10,provider:{type:`raw`,config:{data:CM}},style:{mode:`categorical`,colorField:`level`,palette:`semantic`,radius:8,fillOpacity:.85},popup:{titleField:`name`,contentFields:[`name`,`level`,`risk`]},interaction:{highlight:{trigger:`click`,color:`#ff6b00`},cursor:!0}}),i.value.run(`layer-playground`,{}),a?.snapshotOriginal(),$n(()=>{r.value=i.value?.state.popup??null})});function s(e){let t=e.target.value,n=OM.find(e=>e.id===t);n&&a?.updateData(n.data,{keepOriginal:!0})}function c(e){a?.appendData(e)}function l(){a?.restoreOriginal()}function u(){a?.clearData()}return Br(()=>{i.value?.destroy(),i.value=null}),(e,a)=>(I(),L(`div`,pN,[R(`header`,mN,[a[2]||=R(`span`,{class:`app__title`},`基础图层 4.4 · 综合数据操作`,-1),R(`span`,hN,`append / update(keepOriginal) / restore / clear 一站式 · `+k(o.value)+` 个`,1)]),R(`div`,gN,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:i.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:i.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:i.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`数据操作`},{default:qn(()=>[R(`div`,_N,[a[4]||=R(`label`,{class:`ld__lbl`},`updateData（keepOriginal）`,-1),R(`select`,{class:`ld__sel`,onChange:s},[a[3]||=R(`option`,{value:``},`— 选择数据集 —`,-1),(I(!0),L(F,null,P(j(OM),e=>(I(),L(`option`,{key:e.id,value:e.id},k(e.label),9,vN))),128))],32),a[5]||=R(`label`,{class:`ld__lbl`},`appendData`,-1),R(`div`,yN,[R(`button`,{class:`ld__btn`,onClick:a[0]||=e=>c(j(wM))},`+ 批次 A`),R(`button`,{class:`ld__btn`,onClick:a[1]||=e=>c(j(TM))},`+ 批次 B`)]),R(`div`,{class:`ld__row`},[R(`button`,{class:`ld__btn ld__btn--warn`,onClick:l},`restoreOriginal`),R(`button`,{class:`ld__btn ld__btn--warn`,onClick:u},`clearData`)]),R(`div`,bN,`当前要素数：`+k(o.value),1)])]),_:1}),R(`div`,{class:`popup`,ref_key:`popupEl`,ref:n},[r.value?(I(),L(`div`,xN,[R(`div`,SN,k(r.value.title),1),R(`div`,CN,[(I(!0),L(F,null,P(r.value.rows,e=>(I(),L(`div`,{key:e.label,class:`popup__row`},[R(`span`,wN,k(e.label),1),R(`span`,TN,k(e.value),1)]))),128))])])):B(``,!0)],512)])]))}}),[[`__scopeId`,`data-v-004a1252`]]),DN={class:`app`},ON={class:`app__stage`},kN={class:`ev`},AN={class:`ev__group`},jN={class:`ev__seg`},MN={class:`ev__group`},NN={class:`ev__group`},PN={class:`ev__seg`},FN={class:`ev__stat`},IN={class:`ev__snap`},LN=lu(N({__name:`EnvInjectionDemo`,setup(e){let t=A(),n=dn(null),r=null,i=0,a=Zt({theme:`light`,riskThreshold:0,scope:`all`}),o=A({}),s=A(0),c={高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`},l={高:`#f87171`,中:`#fbbf24`,低:`#4ade80`};function u(){n.value?.env.set(`theme`,a.theme),n.value?.env.set(`riskThreshold`,a.riskThreshold),n.value?.env.set(`scope`,a.scope),d()}function d(){o.value={...n.value?.env.snapshot()}}let f={id:`stations`,name:`监测站（env 驱动）`,zIndex:10,provider:{type:`raw`,config:{data:MO}},processors:[{inline:`(payload, ctx) => { const e = (ctx && ctx.env) || {}; const thr = Number(e.riskThreshold || 0); const scope = e.scope || "all"; const feats = payload.features.filter(f => { const r = Number(f.properties.risk); if (r < thr) return false; if (scope === "alarm" && f.properties.type !== "alarm") return false; return true; }); return { datasetId: payload.datasetId, geometryType: payload.geometryType, features: feats, fields: payload.fields }; }`}],style:{mode:`categorical`,colorField:`level`,palette:`semantic`,color:(e,t)=>(t.$env?.theme===`dark`?l:c)[String(e.get(`level`))]||`#4f8cff`,radius:(e,t)=>{let n=t.$env?.theme===`dark`?.85:1;return(6+Number(e.get(`risk`)||0)*10)*n},fillOpacity:.85}};Ir(()=>{n.value=WT({target:t.value}),n.value.baseLayer(`basemap.osm`).control(`attribution`).control(`scale`),u(),r=n.value.layer(f),n.value.run(`env-injection`,{}),r.subscribeEnv([`theme`,`riskThreshold`,`scope`]),i=window.setInterval(()=>{s.value=r?.source.getFeatures().length??0},300)});function p(e){a.theme=e,u()}function m(e){a.scope=e,u()}return Br(()=>{i&&window.clearInterval(i),n.value?.destroy(),n.value=null}),(e,r)=>(I(),L(`div`,DN,[r[11]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 外部环境注入响应式`),R(`span`,{class:`app__hint`},`engine.env 注入 → layer.subscribeEnv 重跑 → 数据/样式实时响应`)],-1),R(`div`,ON,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j($T),{engine:n.value,position:`top-right`},null,8,[`engine`]),z(j(eE),{engine:n.value,position:`top-left`},null,8,[`engine`]),z(j(tE),{engine:n.value,position:`bottom-left`},null,8,[`engine`]),z(j(ZT),{position:`bottom-right`,title:`env 注入控制`},{default:qn(()=>[R(`div`,kN,[R(`div`,AN,[r[5]||=R(`label`,null,`主题 theme`,-1),R(`div`,jN,[R(`button`,{class:we({on:a.theme===`light`}),onClick:r[0]||=e=>p(`light`)},`light`,2),R(`button`,{class:we({on:a.theme===`dark`}),onClick:r[1]||=e=>p(`dark`)},`dark`,2)])]),R(`div`,MN,[r[6]||=R(`label`,null,`风险阈值 riskThreshold`,-1),M(R(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,"onUpdate:modelValue":r[2]||=e=>a.riskThreshold=e,onInput:u},null,544),[[Zo,a.riskThreshold,void 0,{number:!0}]]),R(`span`,null,k(a.riskThreshold.toFixed(2)),1)]),R(`div`,NN,[r[7]||=R(`label`,null,`数据范围 scope`,-1),R(`div`,PN,[R(`button`,{class:we({on:a.scope===`all`}),onClick:r[3]||=e=>m(`all`)},`all`,2),R(`button`,{class:we({on:a.scope===`alarm`}),onClick:r[4]||=e=>m(`alarm`)},`alarm`,2)])]),R(`div`,FN,[r[8]||=ka(` 当前要素：`,-1),R(`b`,null,k(s.value),1),r[9]||=ka(` / 8 `,-1)]),R(`details`,IN,[r[10]||=R(`summary`,null,`env 快照`,-1),R(`pre`,null,k(JSON.stringify(o.value,null,2)),1)])])]),_:1})])]))}}),[[`__scopeId`,`data-v-660927f4`]]);function RN(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Y(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){RN(a,r,i,o,s,`next`,e)}function s(e){RN(a,r,i,o,s,`throw`,e)}o(void 0)})}}function X(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function zN(e){"@babel/helpers - typeof";return zN=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},zN(e)}function BN(e,t){if(zN(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(zN(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function VN(e){var t=BN(e,`string`);return zN(t)==`symbol`?t:t+``}function HN(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,VN(r.key),r)}}function Z(e,t,n){return t&&HN(e.prototype,t),n&&HN(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function UN(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function WN(e,t){if(t&&(zN(t)==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return UN(e)}function GN(e){return GN=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},GN(e)}function KN(e,t){return KN=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},KN(e,t)}function qN(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&KN(e,t)}function Q(e,t,n){return(t=VN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var JN=o(((e,t)=>{function n(e,t){this.v=e,this.k=t}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),YN=o(((e,t)=>{function n(e,r,i,a){var o=Object.defineProperty;try{o({},``,{})}catch{o=0}t.exports=n=function(e,t,r,i){function a(t,r){n(e,t,function(e){return this._invoke(t,r,e)})}t?o?o(e,t,{value:r,enumerable:!i,configurable:!i,writable:!i}):e[t]=r:(a(`next`,0),a(`throw`,1),a(`return`,2))},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r,i,a)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),XN=o(((e,t)=>{var n=YN();function r(){var e,i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.toStringTag||`@@toStringTag`;function c(t,r,a,o){var s=r&&r.prototype instanceof u?r:u,c=Object.create(s.prototype);return n(c,`_invoke`,function(t,n,r){var a,o,s,c=0,u=r||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,o=0,s=e,f.n=n,l}};function p(t,n){for(o=t,s=n,i=0;!d&&c&&!r&&i<u.length;i++){var r,a=u[i],p=f.p,m=a[2];t>3?(r=m===n)&&(s=a[(o=a[4])?5:(o=3,3)],a[4]=a[5]=e):a[0]<=p&&((r=t<2&&p<a[1])?(o=0,f.v=n,f.n=a[1]):p<m&&(r=t<3||a[0]>n||n>m)&&(a[4]=t,a[5]=n,f.n=m,o=0))}if(r||t>1)return l;throw d=!0,n}return function(r,u,m){if(c>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),o=u,s=m;(i=o<2?e:s)||!d;){a||(o?o<3?(o>1&&(f.n=-1),p(o,s)):f.n=s:f.v=s);try{if(c=2,a){if(o||(r=`next`),i=a[r]){if(!(i=i.call(a,s)))throw TypeError(`iterator result is not an object`);if(!i.done)return i;s=i.value,o<2&&(o=0)}else o===1&&(i=a.return)&&i.call(a),o<2&&(s=TypeError(`The iterator does not provide a '`+r+`' method`),o=1);a=e}else if((i=(d=f.n<0)?s:t.call(n,f))!==l)break}catch(t){a=e,o=1,s=t}finally{c=1}}return{value:i,done:d}}}(t,a,o),!0),c}var l={};function u(){}function d(){}function f(){}i=Object.getPrototypeOf;var p=[][o]?i(i([][o]())):(n(i={},o,function(){return this}),i),m=f.prototype=u.prototype=Object.create(p);function h(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,n(e,s,`GeneratorFunction`)),e.prototype=Object.create(m),e}return d.prototype=f,n(m,`constructor`,f),n(f,`constructor`,d),d.displayName=`GeneratorFunction`,n(f,s,`GeneratorFunction`),n(m),n(m,s,`Generator`),n(m,o,function(){return this}),n(m,`toString`,function(){return`[object Generator]`}),(t.exports=r=function(){return{w:c,m:h}},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),ZN=o(((e,t)=>{var n=JN(),r=YN();function i(e,t){function a(r,i,o,s){try{var c=e[r](i),l=c.value;return l instanceof n?t.resolve(l.v).then(function(e){a(`next`,e,o,s)},function(e){a(`throw`,e,o,s)}):t.resolve(l).then(function(e){c.value=e,o(c)},function(e){return a(`throw`,e,o,s)})}catch(e){s(e)}}var o;this.next||(r(i.prototype),r(i.prototype,typeof Symbol==`function`&&Symbol.asyncIterator||`@asyncIterator`,function(){return this})),r(this,`_invoke`,function(e,n,r){function i(){return new t(function(t,n){a(e,r,t,n)})}return o=o?o.then(i,i):i()},!0)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),QN=o(((e,t)=>{var n=XN(),r=ZN();function i(e,t,i,a,o){return new r(n().w(e,t,i,a),o||Promise)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),$N=o(((e,t)=>{var n=QN();function r(e,t,r,i,a){var o=n(e,t,r,i,a);return o.next().then(function(e){return e.done?e.value:o.next()})}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),eP=o(((e,t)=>{function n(e){var t=Object(e),n=[];for(var r in t)n.unshift(r);return function e(){for(;n.length;)if((r=n.pop())in t)return e.value=r,e.done=!1,e;return e.done=!0,e}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),tP=o(((e,t)=>{function n(e){"@babel/helpers - typeof";return t.exports=n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),nP=o(((e,t)=>{var n=tP().default;function r(e){if(e!=null){var t=e[typeof Symbol==`function`&&Symbol.iterator||`@@iterator`],r=0;if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw TypeError(n(e)+` is not iterable`)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),rP=o(((e,t)=>{var n=JN(),r=XN(),i=$N(),a=QN(),o=ZN(),s=eP(),c=nP();function l(){var e=r(),u=e.m(l),d=(Object.getPrototypeOf?Object.getPrototypeOf(u):u.__proto__).constructor;function f(e){var t=typeof e==`function`&&e.constructor;return!!t&&(t===d||(t.displayName||t.name)===`GeneratorFunction`)}var p={throw:1,return:2,break:3,continue:3};function m(e){var t,n;return function(r){t||(t={stop:function(){return n(r.a,2)},catch:function(){return r.v},abrupt:function(e,t){return n(r.a,p[e],t)},delegateYield:function(e,i,a){return t.resultName=i,n(r.d,c(e),a)},finish:function(e){return n(r.f,e)}},n=function(e,n,i){r.p=t.prev,r.n=t.next;try{return e(n,i)}finally{t.next=r.n}}),t.resultName&&(t[t.resultName]=r.v,t.resultName=void 0),t.sent=r.v,t.next=r.n;try{return e.call(this,t)}finally{r.p=t.prev,r.n=t.next}}}return(t.exports=l=function(){return{wrap:function(t,n,r,i){return e.w(m(t),n,r,i&&i.reverse())},isGeneratorFunction:f,mark:e.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:o,async:function(e,t,n,r,o){return(f(t)?a:i)(m(e),t,n,r,o)},keys:s,values:c}},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports})),$=c(o(((e,t)=>{var n=rP()();t.exports=n;try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}}))());function iP(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=aP(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function aP(e,t){if(e){if(typeof e==`string`)return oP(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oP(e,t):void 0}}function oP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function sP(){return{debug:function(e){}}}var cP=function(){function e(){X(this,e),Q(this,`pipes`,[])}return Z(e,[{key:`addPipe`,value:function(e){this.pipes.push(e)}},{key:`emit`,value:function(){var e=Y($.default.mark(function e(t){var n,r,i,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,r=iP(this.pipes),e.prev=2,r.s();case 4:if((i=r.n()).done){e.next=13;break}return a=i.value,e.next=8,a(n);case 8:if(n=e.sent,n!==void 0){e.next=11;break}return e.abrupt(`return`);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:return e.abrupt(`return`,n);case 22:case`end`:return e.stop()}},e,this,[[2,15,18,21]])}));function t(t){return e.apply(this,arguments)}return t}()}])}(),lP=function(){function e(t){X(this,e),Q(this,`signal`,new cP),this.name=t}return Z(e,[{key:`addPipe`,value:function(e){this.signal.addPipe(e)}},{key:`use`,value:function(t){if(!(t instanceof e))throw Error(`cannot use non-Scope instance`);return t.setParent(this),this.addPipe(function(e){return t.signal.emit(e)}),sP()}},{key:`setParent`,value:function(e){this.parent=e}},{key:`emit`,value:function(e){return this.signal.emit(e)}},{key:`hasParent`,value:function(){return!!this.parent}},{key:`parentScope`,value:function(e){if(!this.parent)throw Error(`cannot find parent`);if(e&&this.parent instanceof e)return this.parent;if(e)throw Error(`actual parent is not instance of type`);return this.parent}}])}();function uP(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=dP(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function dP(e,t){if(e){if(typeof e==`string`)return fP(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fP(e,t):void 0}}function fP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function pP(e,t,n){return t=GN(t),WN(e,mP()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function mP(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mP=function(){return!!e})()}var hP=function(e){function t(){var e;return X(this,t),e=pP(this,t,[`NodeEditor`]),Q(e,`nodes`,[]),Q(e,`connections`,[]),e}return qN(t,e),Z(t,[{key:`getNode`,value:function(e){return this.nodes.find(function(t){return t.id===e})}},{key:`getNodes`,value:function(){return this.nodes.slice()}},{key:`getConnections`,value:function(){return this.connections.slice()}},{key:`getConnection`,value:function(e){return this.connections.find(function(t){return t.id===e})}},{key:`addNode`,value:function(){var e=Y($.default.mark(function e(t){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.getNode(t.id)){e.next=2;break}throw Error(`node has already been added`);case 2:return e.next=4,this.emit({type:`nodecreate`,data:t});case 4:if(e.sent){e.next=6;break}return e.abrupt(`return`,!1);case 6:return this.nodes.push(t),e.next=9,this.emit({type:`nodecreated`,data:t});case 9:return e.abrupt(`return`,!0);case 10:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`addConnection`,value:function(){var e=Y($.default.mark(function e(t){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.getConnection(t.id)){e.next=2;break}throw Error(`connection has already been added`);case 2:return e.next=4,this.emit({type:`connectioncreate`,data:t});case 4:if(e.sent){e.next=6;break}return e.abrupt(`return`,!1);case 6:return this.connections.push(t),e.next=9,this.emit({type:`connectioncreated`,data:t});case 9:return e.abrupt(`return`,!0);case 10:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`removeNode`,value:function(){var e=Y($.default.mark(function e(t){var n,r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.nodes.find(function(e){return e.id===t}),n){e.next=3;break}throw Error(`cannot find node`);case 3:return e.next=5,this.emit({type:`noderemove`,data:n});case 5:if(e.sent){e.next=7;break}return e.abrupt(`return`,!1);case 7:return r=this.nodes.indexOf(n),this.nodes.splice(r,1),e.next=11,this.emit({type:`noderemoved`,data:n});case 11:return e.abrupt(`return`,!0);case 12:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`removeConnection`,value:function(){var e=Y($.default.mark(function e(t){var n,r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.connections.find(function(e){return e.id===t}),n){e.next=3;break}throw Error(`cannot find connection`);case 3:return e.next=5,this.emit({type:`connectionremove`,data:n});case 5:if(e.sent){e.next=7;break}return e.abrupt(`return`,!1);case 7:return r=this.connections.indexOf(n),this.connections.splice(r,1),e.next=11,this.emit({type:`connectionremoved`,data:n});case 11:return e.abrupt(`return`,!0);case 12:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`clear`,value:function(){var e=Y($.default.mark(function e(){var t,n,r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.emit({type:`clear`});case 2:if(e.sent){e.next=6;break}return e.next=5,this.emit({type:`clearcancelled`});case 5:return e.abrupt(`return`,!1);case 6:t=uP(this.connections.slice()),e.prev=7,t.s();case 9:if((n=t.n()).done){e.next=15;break}return r=n.value,e.next=13,this.removeConnection(r.id);case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),t.e(e.t0);case 20:return e.prev=20,t.f(),e.finish(20);case 23:i=uP(this.nodes.slice()),e.prev=24,i.s();case 26:if((a=i.n()).done){e.next=32;break}return o=a.value,e.next=30,this.removeNode(o.id);case 30:e.next=26;break;case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(24),i.e(e.t1);case 37:return e.prev=37,i.f(),e.finish(37);case 40:return e.next=42,this.emit({type:`cleared`});case 42:return e.abrupt(`return`,!0);case 43:case`end`:return e.stop()}},e,this,[[7,17,20,23],[24,34,37,40]])}));function t(){return e.apply(this,arguments)}return t}()}])}(lP),gP=globalThis.crypto;function _P(){if(`randomBytes`in gP)return gP.randomBytes(8).toString(`hex`);var e=gP.getRandomValues(new Uint8Array(8));return Array.from(e).map(function(e){return e.toString(16).padStart(2,`0`)}).join(``)}function vP(e,t,n){return t=GN(t),WN(e,yP()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function yP(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(yP=function(){return!!e})()}var bP=Z(function e(t){X(this,e),this.name=t}),xP=Z(function e(t,n,r){X(this,e),this.socket=t,this.label=n,this.multipleConnections=r,this.id=_P()}),SP=function(e){function t(e,n,r){var i;return X(this,t),i=vP(this,t,[e,n,r]),Q(i,`control`,null),Q(i,`showControl`,!0),i.socket=e,i.label=n,i.multipleConnections=r,i}return qN(t,e),Z(t,[{key:`addControl`,value:function(e){if(this.control)throw Error(`control already added for this input`);this.control=e}},{key:`removeControl`,value:function(){this.control=null}}])}(xP),CP=function(e){function t(e,n,r){return X(this,t),vP(this,t,[e,n,r!==!1])}return qN(t,e),Z(t)}(xP),wP=Z(function e(){X(this,e),this.id=_P()}),TP=Object.freeze({__proto__:null,Socket:bP,Port:xP,Input:SP,Output:CP,Control:wP,InputControl:function(e){function t(e,n){var r;return X(this,t),r=vP(this,t),r.type=e,r.options=n,r.id=_P(),r.readonly=n?.readonly??!1,n?.initial!==void 0&&(r.value=n.initial),r}return qN(t,e),Z(t,[{key:`setValue`,value:function(e){var t;this.value=e,(t=this.options)!=null&&t.change&&this.options.change(e)}}])}(wP),Node:function(){function e(t){X(this,e),Q(this,`inputs`,{}),Q(this,`outputs`,{}),Q(this,`controls`,{}),this.label=t,this.id=_P()}return Z(e,[{key:`hasInput`,value:function(e){return Object.prototype.hasOwnProperty.call(this.inputs,e)}},{key:`addInput`,value:function(e,t){if(this.hasInput(e))throw Error(`input with key '${String(e)}' already added`);Object.defineProperty(this.inputs,e,{value:t,enumerable:!0,configurable:!0})}},{key:`removeInput`,value:function(e){delete this.inputs[e]}},{key:`hasOutput`,value:function(e){return Object.prototype.hasOwnProperty.call(this.outputs,e)}},{key:`addOutput`,value:function(e,t){if(this.hasOutput(e))throw Error(`output with key '${String(e)}' already added`);Object.defineProperty(this.outputs,e,{value:t,enumerable:!0,configurable:!0})}},{key:`removeOutput`,value:function(e){delete this.outputs[e]}},{key:`hasControl`,value:function(e){return Object.prototype.hasOwnProperty.call(this.controls,e)}},{key:`addControl`,value:function(e,t){if(this.hasControl(e))throw Error(`control with key '${String(e)}' already added`);Object.defineProperty(this.controls,e,{value:t,enumerable:!0,configurable:!0})}},{key:`removeControl`,value:function(e){delete this.controls[e]}}])}(),Connection:Z(function e(t,n,r,i){if(X(this,e),this.sourceOutput=n,this.targetInput=i,!t.outputs[n])throw Error(`source node doesn't have output with a key ${String(n)}`);if(!r.inputs[i])throw Error(`target node doesn't have input with a key ${String(i)}`);this.id=_P(),this.source=t.id,this.target=r.id})});function EP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function DP(e){if(Array.isArray(e))return EP(e)}function OP(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function kP(e,t){if(e){if(typeof e==`string`)return EP(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?EP(e,t):void 0}}function AP(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jP(e){return DP(e)||OP(e)||kP(e)||AP()}var MP=function(){function e(t){X(this,e),this.reordered=t,this.holder=document.createElement(`div`),this.holder.style.transformOrigin=`0 0`}return Z(e,[{key:`getPointerFrom`,value:function(e){var t=this.holder.getBoundingClientRect(),n=t.left,r=t.top;return{x:e.clientX-n,y:e.clientY-r}}},{key:`add`,value:function(e){this.holder.appendChild(e)}},{key:`reorder`,value:function(){var e=Y($.default.mark(function e(t,n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.holder.contains(t)){e.next=2;break}throw Error(`content doesn't have 'target' for reordering`);case 2:if(n===null||this.holder.contains(n)){e.next=4;break}throw Error(`content doesn't have 'next' for reordering`);case 4:return this.holder.insertBefore(t,n),e.next=7,this.reordered(t);case 7:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`remove`,value:function(e){this.holder.contains(e)&&this.holder.removeChild(e)}}])}();function NP(e,t){var n=function(e){t.move(e)},r=function(e){window.removeEventListener(`pointermove`,n),window.removeEventListener(`pointerup`,r),window.removeEventListener(`pointercancel`,r),t.up(e)},i=function(e){window.addEventListener(`pointermove`,n),window.addEventListener(`pointerup`,r),window.addEventListener(`pointercancel`,r),t.down(e)};return e.addEventListener(`pointerdown`,i),{destroy:function(){e.removeEventListener(`pointerdown`,i),window.removeEventListener(`pointermove`,n),window.removeEventListener(`pointerup`,r),window.removeEventListener(`pointercancel`,r)}}}var PP=function(e){return e.length===0?0:Math.min.apply(Math,jP(e))},FP=function(e){return e.length===0?0:Math.max.apply(Math,jP(e))};function IP(e){var t=PP(e.map(function(e){return e.position.x})),n=PP(e.map(function(e){return e.position.y})),r=FP(e.map(function(e){return e.position.x+e.width})),i=FP(e.map(function(e){return e.position.y+e.height}));return{left:t,right:r,top:n,bottom:i,width:Math.abs(t-r),height:Math.abs(n-i),center:{x:(t+r)/2,y:(n+i)/2}}}function LP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function RP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?LP(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):LP(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var zP=function(){function e(t){var n=this;X(this,e),Q(this,`down`,function(e){n.guards.down(e)&&(e.stopPropagation(),n.pointerStart={x:e.pageX,y:e.pageY},n.startPosition=RP({},n.config.getCurrentPosition()),n.events.start(e))}),Q(this,`move`,function(e){if(n.pointerStart&&n.startPosition&&n.guards.move(e)){e.preventDefault();var t={x:e.pageX-n.pointerStart.x,y:e.pageY-n.pointerStart.y},r=n.config.getZoom(),i=n.startPosition.x+t.x/r,a=n.startPosition.y+t.y/r;n.events.translate(i,a,e)}}),Q(this,`up`,function(e){n.pointerStart&&(delete n.pointerStart,n.events.drag(e))}),this.guards=t||{down:function(e){return e.pointerType!==`mouse`||e.button===0},move:function(){return!0}}}return Z(e,[{key:`initialize`,value:function(e,t,n){this.config=t,this.events=n,e.style.touchAction=`none`,this.pointerListener=NP(e,{down:this.down,move:this.move,up:this.up})}},{key:`destroy`,value:function(){this.pointerListener.destroy()}}])}(),BP=8,VP=24,HP=1,UP=2;function WP(e,t){return t===HP?e*BP:t===UP?e*VP:e}function GP(e,t){if(e===0)return 0;var n=t/BP,r=-e*n;return Math.sign(r)*Math.min(t,Math.abs(r))}var KP=function(){function e(t){var n=this;X(this,e),Q(this,`previous`,null),Q(this,`pointers`,[]),Q(this,`wheel`,function(e){e.preventDefault();var t=GP(WP(e.deltaY,e.deltaMode),n.intensity);if(t!==0){var r=n.element.getBoundingClientRect(),i=r.left,a=r.top,o=(i-e.clientX)*t,s=(a-e.clientY)*t;n.onzoom(t,o,s,`wheel`)}}),Q(this,`down`,function(e){n.pointers.push(e)}),Q(this,`move`,function(e){if(n.pointers=n.pointers.map(function(t){return t.pointerId===e.pointerId?e:t}),n.isTranslating()){var t=n.element.getBoundingClientRect(),r=t.left,i=t.top,a=n.getTouches(),o=a.cx,s=a.cy,c=a.distance;if(n.previous!==null&&n.previous.distance>0){var l=c/n.previous.distance-1,u=(r-o)*l,d=(i-s)*l;n.onzoom(l,u-(n.previous.cx-o),d-(n.previous.cy-s),`touch`)}n.previous={cx:o,cy:s,distance:c}}}),Q(this,`contextmenu`,function(){n.pointers=[]}),Q(this,`up`,function(e){n.previous=null,n.pointers=n.pointers.filter(function(t){return t.pointerId!==e.pointerId})}),Q(this,`dblclick`,function(e){e.preventDefault();var t=n.element.getBoundingClientRect(),r=t.left,i=t.top,a=4*n.intensity,o=(r-e.clientX)*a,s=(i-e.clientY)*a;n.onzoom(a,o,s,`dblclick`)}),this.intensity=t}return Z(e,[{key:`initialize`,value:function(e,t,n){this.container=e,this.element=t,this.onzoom=n,this.container.addEventListener(`wheel`,this.wheel),this.container.addEventListener(`pointerdown`,this.down),this.container.addEventListener(`dblclick`,this.dblclick),window.addEventListener(`pointermove`,this.move),window.addEventListener(`pointerup`,this.up),window.addEventListener(`pointercancel`,this.up),window.addEventListener(`contextmenu`,this.contextmenu)}},{key:`getTouches`,value:function(){var e={touches:this.pointers},t=[e.touches[0].clientX,e.touches[0].clientY],n=t[0],r=t[1],i=[e.touches[1].clientX,e.touches[1].clientY],a=i[0],o=i[1],s=Math.sqrt((n-a)**2+(r-o)**2);return{cx:(n+a)/2,cy:(r+o)/2,distance:s}}},{key:`isTranslating`,value:function(){return this.pointers.length>=2}},{key:`destroy`,value:function(){this.container.removeEventListener(`wheel`,this.wheel),this.container.removeEventListener(`pointerdown`,this.down),this.container.removeEventListener(`dblclick`,this.dblclick),window.removeEventListener(`pointermove`,this.move),window.removeEventListener(`pointerup`,this.up),window.removeEventListener(`pointercancel`,this.up),window.removeEventListener(`contextmenu`,this.contextmenu)}}])}(),qP=function(){function e(t,n,r){var i=this;X(this,e),Q(this,`transform`,{k:1,x:0,y:0}),Q(this,`pointer`,{x:0,y:0}),Q(this,`zoomHandler`,null),Q(this,`dragHandler`,null),Q(this,`pointerdown`,function(e){i.setPointerFrom(e),i.events.pointerDown(i.pointer,e)}),Q(this,`pointermove`,function(e){i.setPointerFrom(e),i.events.pointerMove(i.pointer,e)}),Q(this,`pointerup`,function(e){i.setPointerFrom(e),i.events.pointerUp(i.pointer,e)}),Q(this,`resize`,function(e){i.events.resize(e)}),Q(this,`onTranslate`,function(e,t){var n;(n=i.zoomHandler)!=null&&n.isTranslating()||i.translate(e,t)}),Q(this,`onZoom`,function(e,t,n,r){i.zoom(i.transform.k*(1+e),t,n,r),i.update()}),this.container=t,this.events=n,this.guards=r,this.content=new MP(function(e){return i.events.reordered(e)}),this.content.holder.style.transformOrigin=`0 0`,this.setZoomHandler(new KP(.1)),this.setDragHandler(new zP),this.container.addEventListener(`pointerdown`,this.pointerdown),this.container.addEventListener(`pointermove`,this.pointermove),window.addEventListener(`pointerup`,this.pointerup),window.addEventListener(`resize`,this.resize),t.appendChild(this.content.holder),this.update()}return Z(e,[{key:`update`,value:function(){var e=this.transform,t=e.x,n=e.y,r=e.k;this.content.holder.style.transform=`translate(${t}px, ${n}px) scale(${r})`}},{key:`setDragHandler`,value:function(e){var t=this;this.dragHandler&&this.dragHandler.destroy(),this.dragHandler=e,this.dragHandler&&this.dragHandler.initialize(this.container,{getCurrentPosition:function(){return t.transform},getZoom:function(){return 1}},{start:function(){return null},translate:this.onTranslate,drag:function(){return null}})}},{key:`setZoomHandler`,value:function(e){this.zoomHandler&&this.zoomHandler.destroy(),this.zoomHandler=e,this.zoomHandler&&this.zoomHandler.initialize(this.container,this.content.holder,this.onZoom)}},{key:`setPointerFrom`,value:function(e){var t=this.content.getPointerFrom(e),n=t.x,r=t.y,i=this.transform.k;this.pointer={x:n/i,y:r/i}}},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={x:t,y:n},e.next=3,this.guards.translate({previous:this.transform,position:r});case 3:if(i=e.sent,i){e.next=6;break}return e.abrupt(`return`,!1);case 6:return this.transform.x=i.data.position.x,this.transform.y=i.data.position.y,this.update(),e.next=11,this.events.translated(i.data);case 11:return e.abrupt(`return`,!0);case 12:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`zoom`,value:function(){var e=Y($.default.mark(function e(t){var n,r,i,a,o,s,c=arguments;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&c[1]!==void 0?c[1]:0,r=c.length>2&&c[2]!==void 0?c[2]:0,i=c.length>3?c[3]:void 0,a=this.transform.k,e.next=6,this.guards.zoom({previous:this.transform,zoom:t,source:i});case 6:if(o=e.sent,o){e.next=9;break}return e.abrupt(`return`,!0);case 9:return s=(a-o.data.zoom)/(a-t||1),this.transform.k=o.data.zoom||1,this.transform.x+=n*s,this.transform.y+=r*s,this.update(),e.next=16,this.events.zoomed(o.data);case 16:return e.abrupt(`return`,!1);case 17:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`destroy`,value:function(){this.container.removeEventListener(`pointerdown`,this.pointerdown),this.container.removeEventListener(`pointermove`,this.pointermove),window.removeEventListener(`pointerup`,this.pointerup),window.removeEventListener(`resize`,this.resize),this.dragHandler&&this.dragHandler.destroy(),this.zoomHandler&&this.zoomHandler.destroy(),this.content.holder.innerHTML=``}}])}();function JP(e,t,n){return t=GN(t),WN(e,YP()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function YP(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YP=function(){return!!e})()}var XP=function(e){function t(){return X(this,t),JP(this,t,arguments)}return qN(t,e),Z(t)}(lP),ZP=Z(function e(t){X(this,e),this.element=document.createElement(`div`),this.element.style.position=`absolute`,this.element.style.left=`0`,this.element.style.top=`0`,this.element.addEventListener(`contextmenu`,function(e){t.contextmenu(e)})}),QP=function(){function e(){X(this,e),Q(this,`views`,new WeakMap),Q(this,`viewsElements`,new Map)}return Z(e,[{key:`set`,value:function(e){var t=e.element,n=e.type,r=e.payload;r!=null&&r.id&&(this.views.set(t,e),this.viewsElements.set(`${n}_${r.id}`,t))}},{key:`get`,value:function(e,t){var n=this.viewsElements.get(`${e}_${t}`);return n&&this.views.get(n)}},{key:`delete`,value:function(e){var t,n=this.views.get(e);n&&(t=n.payload)!=null&&t.id&&(this.views.delete(e),this.viewsElements.delete(`${n.type}_${n.payload.id}`))}}])}();function $P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function eF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?$P(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$P(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var tF=function(){function e(t,n,r){var i=this;X(this,e),Q(this,`translate`,function(){var e=Y($.default.mark(function e(t,n){var r,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=eF({},i.position),e.next=3,i.guards.translate({previous:r,position:{x:t,y:n}});case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt(`return`,!1);case 6:return i.position=eF({},a.data.position),i.element.style.transform=`translate(${i.position.x}px, ${i.position.y}px)`,e.next=10,i.events.translated({position:i.position,previous:r});case 10:return e.abrupt(`return`,!0);case 11:case`end`:return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),Q(this,`resize`,function(){var e=Y($.default.mark(function e(t,n){var r,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={width:t,height:n},e.next=3,i.guards.resize({size:r});case 3:if(e.sent){e.next=5;break}return e.abrupt(`return`,!1);case 5:if(a=i.element.querySelector(`*:not(span):not([fragment])`),a&&a instanceof HTMLElement){e.next=8;break}return e.abrupt(`return`,!1);case 8:return a.style.width=`${t}px`,a.style.height=`${n}px`,e.next=12,i.events.resized({size:r});case 12:return e.abrupt(`return`,!0);case 13:case`end`:return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),this.getZoom=t,this.events=n,this.guards=r,this.element=document.createElement(`div`),this.element.style.position=`absolute`,this.position={x:0,y:0},this.translate(0,0),this.element.addEventListener(`contextmenu`,function(e){i.events.contextmenu(e)}),this.dragHandler=new zP,this.dragHandler.initialize(this.element,{getCurrentPosition:function(){return i.position},getZoom:function(){return i.getZoom()}},{start:this.events.picked,translate:this.translate,drag:this.events.dragged})}return Z(e,[{key:`destroy`,value:function(){this.dragHandler.destroy()}}])}();function nF(e,t){return e.map(function(e){return{view:t.get(e.id),node:e}}).filter(function(e){return e.view}).map(function(e){var t=e.view,n=e.node,r=n.width,i=n.height;return r!==void 0&&i!==void 0?{position:t.position,width:r,height:i}:{position:t.position,width:t.element.clientWidth,height:t.element.clientHeight}})}function rF(e,t){var n=e.parentScope(hP);return IP(nF(t.map(function(e){return zN(e)===`object`?e:n.getNode(e)}),e.nodeViews))}function iF(e){var t=e;t.addPipe(function(e){if(!e||zN(e)!==`object`||!(`type`in e))return e;if(e.type===`nodepicked`){var n=t.nodeViews.get(e.data.id),r=t.area.content;n&&r.reorder(n.element,null)}if(e.type===`connectioncreated`){var i=t.connectionViews.get(e.data.id),a=t.area.content;i&&a.reorder(i.element,a.holder.firstChild)}return e})}var aF=0,oF=1;function sF(e){var t=e,n=oF,r=function(e){var n=t.nodeViews.get(e);n&&(n.element.style.zIndex=String(oF))},i=function(e){var r=t.nodeViews.get(e);r&&(n+=1,r.element.style.zIndex=String(n))},a=function(e){var n=t.connectionViews.get(e);n&&(n.element.style.zIndex=String(aF))};t.addPipe(function(e){return!e||zN(e)!==`object`||!(`type`in e)?e:(e.type===`nodecreated`&&r(e.data.id),e.type===`nodepicked`&&i(e.data.id),e.type===`connectioncreated`&&a(e.data.id),e)})}function cF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function lF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?cF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function uF(e,t){var n=t!=null&&t.scaling?t.scaling===!0?{min:.1,max:1}:t.scaling:!1,r=t!=null&&t.translation?t.translation===!0?{left:0,top:0,right:1e3,bottom:1e3}:t.translation:!1;function i(e){if(!n)throw Error(`scaling param isnt defined`);var t=typeof n==`function`?n():n,r=t.min,i=t.max;return e<r?r:e>i?i:e}function a(e){if(!r)throw Error(`translation param isnt defined`);var t=lF({},e),n=typeof r==`function`?r():r,i=n.left,a=n.top,o=n.right,s=n.bottom;return t.x<i&&(t.x=i),t.x>o&&(t.x=o),t.y<a&&(t.y=a),t.y>s&&(t.y=s),t}e.addPipe(function(t){if(!t||zN(t)!==`object`||!(`type`in t))return t;if(n&&t.type===`zoom`)return lF(lF({},t),{},{data:lF(lF({},t.data),{},{zoom:i(t.data.zoom)})});if(r&&t.type===`zoomed`){var o=a(e.area.transform);e.area.translate(o.x,o.y)}return r&&t.type===`translate`?lF(lF({},t),{},{data:lF(lF({},t.data),{},{position:a(t.data.position)})}):t})}function dF(){var e=!1;function t(t){(t.key===`Control`||t.key===`Meta`)&&(e=!0)}function n(t){(t.key===`Control`||t.key===`Meta`)&&(e=!1)}return document.addEventListener(`keydown`,t),document.addEventListener(`keyup`,n),{active:function(){return e},destroy:function(){document.removeEventListener(`keydown`,t),document.removeEventListener(`keyup`,n)}}}var fF=function(){function e(){X(this,e),Q(this,`entities`,new Map),Q(this,`pickId`,null)}return Z(e,[{key:`isSelected`,value:function(e){return this.entities.has(`${e.label}_${e.id}`)}},{key:`add`,value:function(){var e=Y($.default.mark(function e(t,n){var r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=`${t.label}_${t.id}`,n){e.next=4;break}return e.next=4,this.unselect(Array.from(this.entities.values()).filter(function(e){return e.label!==t.label||e.id!==t.id}));case 4:this.entities.set(r,t);case 5:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`remove`,value:function(){var e=Y($.default.mark(function e(t){var n,r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=`${t.label}_${t.id}`,r=this.entities.get(n),!r){e.next=6;break}return this.entities.delete(n),e.next=6,r.unselect();case 6:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`unselect`,value:function(){var e=Y($.default.mark(function e(t){var n=this;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Array.from(t).map(function(e){return n.remove(e)}));case 2:case`end`:return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`unselectAll`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.unselect(this.entities.values());case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n){var r=this;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Array.from(this.entities.values()).map(function(e){return!r.isPicked(e)&&e.translate(t,n)}));case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`pick`,value:function(e){this.pickId=`${e.label}_${e.id}`}},{key:`release`,value:function(){this.pickId=null}},{key:`isPicked`,value:function(e){return this.pickId===`${e.label}_${e.id}`}}])}();function pF(){return new fF}function mF(e,t,n){var r=null,i=e,a=function(){return r||=i.parentScope(hP)},o=0;function s(e){e.selected||(e.selected=!0,i.update(`node`,e.id))}function c(e){e.selected&&(e.selected=!1,i.update(`node`,e.id))}function l(e,t){return u.apply(this,arguments)}function u(){return u=Y($.default.mark(function e(n,r){var o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a().getNode(n),o){e.next=3;break}return e.abrupt(`return`);case 3:return e.next=5,t.add({label:`node`,id:o.id,translate:function(e,t){return Y($.default.mark(function n(){var r,a;return $.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=i.nodeViews.get(o.id),a=r?.position,!a){n.next=5;break}return n.next=5,r.translate(a.x+e,a.y+t);case 5:case`end`:return n.stop()}},n)}))()},unselect:function(){c(o)}},r);case 5:s(o);case 6:case`end`:return e.stop()}},e)})),u.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Y($.default.mark(function e(n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.remove({id:n,label:`node`});case 2:case`end`:return e.stop()}},e)})),f.apply(this,arguments)}return i.addPipe(function(){var e=Y($.default.mark(function e(r){var i,a,s,c,u,d,f,p;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&zN(r)===`object`&&`type`in r){e.next=2;break}return e.abrupt(`return`,r);case 2:if(r.type!==`nodepicked`){e.next=11;break}return i=r.data.id,a=n.accumulating.active(),t.pick({id:i,label:`node`}),o=null,e.next=9,l(i,a);case 9:e.next=33;break;case 11:if(r.type!==`nodetranslated`){e.next=20;break}if(s=r.data,c=s.id,u=s.position,d=s.previous,f=u.x-d.x,p=u.y-d.y,!t.isPicked({id:c,label:`node`})){e.next=18;break}return e.next=18,t.translate(f,p);case 18:e.next=33;break;case 20:if(r.type!==`pointerdown`){e.next=24;break}o=0,e.next=33;break;case 24:if(r.type!==`pointermove`){e.next=28;break}o!==null&&o++,e.next=33;break;case 28:if(r.type!==`pointerup`){e.next=33;break}if(!(o!==null&&o<4)){e.next=32;break}return e.next=32,t.unselectAll();case 32:o=null;case 33:return e.abrupt(`return`,r);case 34:case`end`:return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),{select:l,unselect:d}}function hF(e,t){var n=null,r=function(){return n||=e.parentScope(hP)};function i(n,i){var a=r().getNode(n);if(a){var o=a.inputs[i];if(!o)throw Error(`cannot find input`);var s=o.showControl,c=!!r().getConnections().find(function(e){return e.target===n&&e.targetInput===i});o.showControl=t?t({hasAnyConnection:c,input:o}):!c,o.showControl!==s&&e.update(`node`,a.id)}}e.addPipe(function(e){return(e.type===`connectioncreated`||e.type===`connectionremoved`)&&i(e.data.target,e.data.targetInput),e})}function gF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?gF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function vF(e,t){var n=e,r=t?.size===void 0?16:t.size,i=t?.dynamic===void 0||t.dynamic;function a(e){return Math.round(e/r)*r}n.addPipe(function(e){if(!e||zN(e)!==`object`||!(`type`in e))return e;if(i&&e.type===`nodetranslate`){var t=e.data.position,r=a(t.x),o=a(t.y);return _F(_F({},e),{},{data:_F(_F({},e.data),{},{position:{x:r,y:o}})})}if(!i&&e.type===`nodedragged`){var s=n.nodeViews.get(e.data.id);if(s){var c=s.position,l=c.x,u=c.y;s.translate(a(l),a(u))}}return e})}function yF(e,t,n){return bF.apply(this,arguments)}function bF(){return bF=Y($.default.mark(function e(t,n,r){var i,a,o,s,c,l,u,d,f,p,m,h,g;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=r||{},a=i.scale,o=a===void 0?.9:a,s=t.parentScope(hP),c=n.map(function(e){return zN(e)===`object`?e:s.getNode(e)}),l=nF(c,t.nodeViews),u=IP(l),d=[t.container.clientWidth,t.container.clientHeight],f=d[0],p=d[1],m=f/u.width,h=p/u.height,g=Math.min(h*o,m*o,1),t.area.transform.x=f/2-u.center.x*g,t.area.transform.y=p/2-u.center.y*g,e.next=12,t.area.zoom(g,0,0);case 12:case`end`:return e.stop()}},e)})),bF.apply(this,arguments)}var xF=Object.freeze({__proto__:null,getBoundingBox:rF,simpleNodesOrder:iF,zIndexNodesOrder:sF,restrictor:uF,accumulateOnCtrl:dF,selectableNodes:mF,Selector:fF,selector:pF,showInputControl:hF,snapGrid:vF,zoomAt:yF});function SF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function CF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?SF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function wF(e,t,n){return t=GN(t),WN(e,TF()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function TF(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(TF=function(){return!!e})()}var EF=function(e){function t(e){var n;return X(this,t),n=wF(this,t,[`area`]),Q(n,`nodeViews`,new Map),Q(n,`connectionViews`,new Map),Q(n,`elements`,new QP),Q(n,`onContextMenu`,function(e){n.emit({type:`contextmenu`,data:{event:e,context:`root`}})}),n.container=e,e.style.overflow=`hidden`,e.addEventListener(`contextmenu`,n.onContextMenu),n.addPipe(function(e){return!e||!(zN(e)===`object`&&`type`in e)?e:(e.type===`nodecreated`&&n.addNodeView(e.data),e.type===`noderemoved`&&n.removeNodeView(e.data.id),e.type===`connectioncreated`&&n.addConnectionView(e.data),e.type===`connectionremoved`&&n.removeConnectionView(e.data.id),e.type===`render`&&n.elements.set(e.data),e.type===`unmount`&&n.elements.delete(e.data.element),e)}),n.area=new qP(e,{zoomed:function(e){return n.emit({type:`zoomed`,data:e})},pointerDown:function(e,t){n.emit({type:`pointerdown`,data:{position:e,event:t}})},pointerMove:function(e,t){n.emit({type:`pointermove`,data:{position:e,event:t}})},pointerUp:function(e,t){n.emit({type:`pointerup`,data:{position:e,event:t}})},resize:function(e){n.emit({type:`resized`,data:{event:e}})},translated:function(e){return n.emit({type:`translated`,data:e})},reordered:function(e){return n.emit({type:`reordered`,data:{element:e}})}},{translate:function(e){return n.emit({type:`translate`,data:e})},zoom:function(e){return n.emit({type:`zoom`,data:e})}}),n}return qN(t,e),Z(t,[{key:`addNodeView`,value:function(e){var t=this,n=e.id,r=new tF(function(){return t.area.transform.k},{picked:function(){t.emit({type:`nodepicked`,data:{id:n}})},translated:function(e){return t.emit({type:`nodetranslated`,data:CF({id:n},e)})},dragged:function(){t.emit({type:`nodedragged`,data:e})},contextmenu:function(n){t.emit({type:`contextmenu`,data:{event:n,context:e}})},resized:function(n){var r=n.size;return t.emit({type:`noderesized`,data:{id:e.id,size:r}})}},{translate:function(e){return t.emit({type:`nodetranslate`,data:CF({id:n},e)})},resize:function(n){var r=n.size;return t.emit({type:`noderesize`,data:{id:e.id,size:r}})}});return this.nodeViews.set(n,r),this.area.content.add(r.element),this.emit({type:`render`,data:{element:r.element,type:`node`,payload:e}}),r}},{key:`removeNodeView`,value:function(e){var t=this.nodeViews.get(e);t&&(this.emit({type:`unmount`,data:{element:t.element}}),this.nodeViews.delete(e),this.area.content.remove(t.element))}},{key:`addConnectionView`,value:function(e){var t=this,n=new ZP({contextmenu:function(n){t.emit({type:`contextmenu`,data:{event:n,context:e}})}});return this.connectionViews.set(e.id,n),this.area.content.add(n.element),this.emit({type:`render`,data:{element:n.element,type:`connection`,payload:e}}),n}},{key:`removeConnectionView`,value:function(e){var t=this.connectionViews.get(e);t&&(this.emit({type:`unmount`,data:{element:t.element}}),this.connectionViews.delete(e),this.area.content.remove(t.element))}},{key:`update`,value:function(){var e=Y($.default.mark(function e(t,n){var r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.elements.get(t,n),!r){e.next=4;break}return e.next=4,this.emit({type:`render`,data:r});case 4:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`resize`,value:function(){var e=Y($.default.mark(function e(t,n,r){var i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.nodeViews.get(t),!i){e.next=5;break}return e.next=4,i.resize(n,r);case 4:return e.abrupt(`return`,e.sent);case 5:case`end`:return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.x,i=n.y,a=this.nodeViews.get(t),!a){e.next=6;break}return e.next=5,a.translate(r,i);case 5:return e.abrupt(`return`,e.sent);case 6:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`destroy`,value:function(){var e=this;this.container.removeEventListener(`contextmenu`,this.onContextMenu),Array.from(this.connectionViews.keys()).forEach(function(t){e.removeConnectionView(t)}),Array.from(this.nodeViews.keys()).forEach(function(t){e.removeNodeView(t)}),this.area.destroy()}}])}(XP);function DF(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=GN(e))!==null;);return e}function OF(){return OF=typeof Reflect<`u`&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=DF(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},OF.apply(null,arguments)}function kF(e){if(Array.isArray(e))return e}function AF(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function jF(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MF(e,t){return kF(e)||AF(e,t)||kP(e,t)||jF()}function NF(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function PF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?NF(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):NF(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function FF(e){var t=null,n=null;function r(e){n&&e.removeConnectionView(n),t=null,n=null}function i(e){r(e),n=`pseudo_${_P()}`}return{isMounted:function(){return!!n},mount:i,render:function(r,i,a){var o=i.x,s=i.y,c=a.side===`output`,l={x:o+(c?-3:3),y:s};if(!n)throw Error(`pseudo connection id wasn't generated`);var u=PF(c?{id:n,source:a.nodeId,sourceOutput:a.key,target:``,targetInput:``}:{id:n,target:a.nodeId,targetInput:a.key,source:``,sourceOutput:``},e??{});t||=r.addConnectionView(u).element,t&&r.emit({type:`render`,data:PF({element:t,type:`connection`,payload:u},c?{end:l}:{start:l})})},unmount:r}}function IF(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=LF(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function LF(e,t){if(e){if(typeof e==`string`)return RF(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?RF(e,t):void 0}}function RF(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function zF(e,t){var n=IF(t),r;try{for(n.s();!(r=n.n()).done;){var i=r.value,a=e.get(i);if(a)return a}}catch(e){n.e(e)}finally{n.f()}}function BF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=n.elementsFromPoint(e,t),i=r[0]?.shadowRoot;return i&&i!==n&&r.unshift.apply(r,jP(BF(e,t,i))),r}var VF=function(){function e(){X(this,e)}return Z(e,[{key:`setContext`,value:function(e){this.context=e}}])}();function HF(e,t){var n=e.side===`output`&&t.side===`input`,r=e.side===`input`&&t.side===`output`,i=MF(n?[e,t]:r?[t,e]:[],2),a=i[0],o=i[1];if(a&&o)return[a,o]}function UF(e,t){return!!HF(e,t)}function WF(e,t,n){var r=MF(HF(e,t)||[null,null],2),i=r[0],a=r[1];if(i&&a)return n.editor.addConnection({id:_P(),source:i.nodeId,sourceOutput:i.key,target:a.nodeId,targetInput:a.key}),!0}function GF(e,t){var n=t.getNode(e.nodeId);if(!n)throw Error(`cannot find node`);return(e.side===`input`?n.inputs:n.outputs)[e.key]}function KF(e,t){var n=e.nodeId,r=e.side,i=e.key;return t.getConnections().filter(function(e){if(r===`input`)return e.target===n&&e.targetInput===i;if(r===`output`)return e.source===n&&e.sourceOutput===i})}function qF(e,t){var n=e.map(function(e){return GF(e,t)?.multipleConnections?[]:KF(e,t)}).flat();return{commit:function(){Array.from(new Set(n.map(function(e){return e.id}))).forEach(function(e){t.removeConnection(e)})}}}function JF(e,t,n){return t=GN(t),WN(e,YF()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function YF(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YF=function(){return!!e})()}var XF=function(e){function t(e,n){var r;return X(this,t),r=JF(this,t),r.initial=e,r.params=n,r}return qN(t,e),Z(t,[{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.socket,this.params.canMakeConnection(this.initial,r)&&(qF([this.initial,r],n.editor).commit(),i=this.params.makeConnection(this.initial,r,n),this.drop(n,i?r:null,i));case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`drop`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.initial&&e.scope.emit({type:`connectiondrop`,data:{initial:this.initial,socket:t,created:n}}),this.context.switchTo(new QF(this.params))}}])}(VF),ZF=function(e){function t(e,n,r){var i;X(this,t),i=JF(this,t),i.connection=e,i.params=n;var a=Array.from(r.socketsCache.values()).find(function(e){return e.nodeId===i.connection.source&&e.side===`output`&&e.key===i.connection.sourceOutput});if(!a)throw Error(`cannot find output socket`);return i.outputSocket=a,i}return qN(t,e),Z(t,[{key:`init`,value:function(){var e=Y($.default.mark(function e(t){var n=this;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.scope.emit({type:`connectionpick`,data:{socket:this.outputSocket}}).then(function(e){e?(t.editor.removeConnection(n.connection.id),n.initial=n.outputSocket):n.drop(t)});case 1:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a,o,s,c;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.socket,i=t.event,this.initial&&(r.side!==`input`||this.connection.target!==r.nodeId||this.connection.targetInput!==r.key)?this.params.canMakeConnection(this.initial,r)&&(qF([this.initial,r],n.editor).commit(),a=this.params.makeConnection(this.initial,r,n),o=a?r:null,this.drop(n,o,a)):i===`down`&&this.initial&&(qF([this.initial,r],n.editor).commit(),s=this.params.makeConnection(this.initial,r,n),c=s?null:r,this.drop(n,c,s));case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`drop`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.initial&&e.scope.emit({type:`connectiondrop`,data:{initial:this.initial,socket:t,created:n}}),this.context.switchTo(new QF(this.params))}}])}(VF),QF=function(e){function t(e){var n;return X(this,t),n=JF(this,t),n.params=e,n}return qN(t,e),Z(t,[{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.socket,i=t.event,i===`down`){e.next=3;break}return e.abrupt(`return`);case 3:if(r.side!==`input`){e.next=11;break}if(a=n.editor.getConnections().find(function(e){return e.target===r.nodeId&&e.targetInput===r.key}),!a){e.next=11;break}return o=new ZF(a,this.params,n),e.next=9,o.init(n);case 9:return this.context.switchTo(o),e.abrupt(`return`);case 11:return e.next=13,n.scope.emit({type:`connectionpick`,data:{socket:r}});case 13:if(!e.sent){e.next=17;break}this.context.switchTo(new XF(r,this.params)),e.next=18;break;case 17:this.drop(n);case 18:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`drop`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this.initial&&e.scope.emit({type:`connectiondrop`,data:{initial:this.initial,socket:t,created:n}}),delete this.initial}}])}(VF),$F=function(){function e(t){X(this,e);var n=t?.canMakeConnection||UF,r=t?.makeConnection||WF;this.switchTo(new QF({canMakeConnection:n,makeConnection:r}))}return Z(e,[{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.currentState.pick(t,n);case 2:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`getPickedSocket`,value:function(){return this.currentState.initial}},{key:`switchTo`,value:function(e){e.setContext(this),this.currentState=e}},{key:`drop`,value:function(e){this.currentState.drop(e)}}])}();function eI(){return function(){return new $F}}var tI=Object.freeze({__proto__:null,classic:Object.freeze({__proto__:null,setup:eI})});function nI(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=rI(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function rI(e,t){if(e){if(typeof e==`string`)return iI(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?iI(e,t):void 0}}function iI(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function aI(e,t,n){return t=GN(t),WN(e,oI()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function oI(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(oI=function(){return!!e})()}function sI(e,t,n,r){var i=OF(GN(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var cI=function(e){function t(){var e;return X(this,t),e=aI(this,t,[`connection`]),Q(e,`presets`,[]),Q(e,`currentFlow`,null),Q(e,`preudoconnection`,FF({isPseudo:!0})),Q(e,`socketsCache`,new Map),e}return qN(t,e),Z(t,[{key:`addPreset`,value:function(e){this.presets.push(e)}},{key:`findPreset`,value:function(e){var t=nI(this.presets),n;try{for(t.s();!(n=t.n()).done;){var r=n.value,i=r(e);if(i)return i}}catch(e){t.e(e)}finally{t.f()}return null}},{key:`update`,value:function(){if(this.currentFlow){var e=this.currentFlow.getPickedSocket();e&&this.preudoconnection.render(this.areaPlugin,this.areaPlugin.area.pointer,e)}}},{key:`drop`,value:function(){var e={editor:this.editor,scope:this,socketsCache:this.socketsCache};this.currentFlow&&=(this.currentFlow.drop(e),this.preudoconnection.unmount(this.areaPlugin),null)}},{key:`pick`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r={editor:this.editor,scope:this,socketsCache:this.socketsCache},i=BF(t.clientX,t.clientY),a=zF(this.socketsCache,i),!a){e.next=13;break}if(t.preventDefault(),t.stopPropagation(),this.currentFlow=this.currentFlow||this.findPreset(a),!this.currentFlow){e.next=11;break}return e.next=10,this.currentFlow.pick({socket:a,event:n},r);case 10:this.preudoconnection.mount(this.areaPlugin);case 11:e.next=14;break;case 13:this.currentFlow&&this.currentFlow.drop(r);case 14:this.currentFlow&&!this.currentFlow.getPickedSocket()&&(this.preudoconnection.unmount(this.areaPlugin),this.currentFlow=null),this.update();case 16:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`setParent`,value:function(e){var n=this;sI(t,`setParent`,this,3)([e]),this.areaPlugin=this.parentScope(XP),this.editor=this.areaPlugin.parentScope(hP);var r=function(e){n.pick(e,`down`)};this.addPipe(function(e){if(!e||zN(e)!==`object`||!(`type`in e))return e;if(e.type===`pointermove`)n.update();else if(e.type===`pointerup`)n.pick(e.data.event,`up`);else if(e.type===`render`){if(e.data.type===`socket`){var t=e.data.element;t.addEventListener(`pointerdown`,r),n.socketsCache.set(t,e.data)}}else if(e.type===`unmount`){var i=e.data.element;i.removeEventListener(`pointerdown`,r),n.socketsCache.delete(i)}return e})}}])}(lP);function lI(e,t){var n=MF(e,2),r=n[0],i=r.x,a=r.y,o=n[1],s=o.x,c=o.y,l=Math.abs(a-c);return`M ${i} ${a} C ${i+Math.max(l/2,Math.abs(s-i))*t} ${a} ${s-Math.max(l/2,Math.abs(s-i))*t} ${c} ${s} ${c}`}function uI(e,t,n){var r=MF(e,2),i=r[0],a=i.x,o=i.y,s=r[1],c=s.x,l=s.y,u=l>o?1:-1,d=n+Math.abs(a-c)/(n/2),f=(a+c)/2,p=o-u*d,m=(l-o)*t;return`
        M ${a} ${o}
        C ${a+d} ${o}
        ${a+d} ${p-m}
        ${f} ${p}
        C ${c-d} ${p+m}
        ${c-d} ${l}
        ${c} ${l}
    `}function dI(e,t){return fI.apply(this,arguments)}function fI(){return fI=Y($.default.mark(function e(t,n){var r,i,a,o,s;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.offsetParent){e.next=5;break}return e.next=3,new Promise(function(e){return setTimeout(e,0)});case 3:e.next=0;break;case 5:if(r=t.offsetLeft,i=t.offsetTop,a=t.offsetParent,a){e.next=10;break}throw Error(`child has null offsetParent`);case 10:for(;a!==null&&a!==n;)r+=a.offsetLeft+a.clientLeft,i+=a.offsetTop+a.clientTop,a=a.offsetParent;return o=t.offsetWidth,s=t.offsetHeight,e.abrupt(`return`,{x:r+o/2,y:i+s/2});case 14:case`end`:return e.stop()}},e)})),fI.apply(this,arguments)}var pI=function(){function e(){X(this,e),Q(this,`listeners`,new Set)}return Z(e,[{key:`emit`,value:function(e){this.listeners.forEach(function(t){t(e)})}},{key:`listen`,value:function(e){var t=this;return this.listeners.add(e),function(){t.listeners.delete(e)}}}])}(),mI=function(){function e(){X(this,e),Q(this,`elements`,new Map)}return Z(e,[{key:`getPosition`,value:function(e){var t=Array.from(this.elements.values()).flat().filter(function(t){return t.side===e.side&&t.nodeId===e.nodeId&&t.key===e.key});return t.length>1&&console.warn([`Found more than one element for socket with same key and side.`,`Probably it was not unmounted correctly`].join(` `),e),t.pop()?.position??null}},{key:`add`,value:function(e){var t=this.elements.get(e.element);this.elements.set(e.element,t?[].concat(jP(t.filter(function(t){return t.nodeId!==e.nodeId||t.key!==e.key||t.side!==e.side})),[e]):[e])}},{key:`remove`,value:function(e){this.elements.delete(e)}},{key:`snapshot`,value:function(){return Array.from(this.elements.values()).flat()}}])}(),hI=function(){function e(){X(this,e),Q(this,`sockets`,new mI),Q(this,`emitter`,new pI),Q(this,`area`,null)}return Z(e,[{key:`attach`,value:function(e){var t=this;this.area||e.hasParent()&&(this.area=e.parentScope(XP),this.area.addPipe(function(){var e=Y($.default.mark(function e(n){var r,i,a,o,s,c,l,u,d,f,p;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.type!==`rendered`||n.data.type!==`socket`){e.next=8;break}return r=n.data,i=r.nodeId,a=r.key,o=r.side,s=r.element,e.next=4,t.calculatePosition(i,o,a,s);case 4:c=e.sent,c&&(t.sockets.add({nodeId:i,key:a,side:o,element:s,position:c}),t.emitter.emit({nodeId:i,key:a,side:o})),e.next=24;break;case 8:if(n.type!==`unmount`){e.next=12;break}t.sockets.remove(n.data.element),e.next=24;break;case 12:if(n.type!==`nodetranslated`){e.next=16;break}t.emitter.emit({nodeId:n.data.id}),e.next=24;break;case 16:if(n.type!==`noderesized`){e.next=23;break}return l=n.data.id,e.next=20,Promise.all(t.sockets.snapshot().filter(function(e){return e.nodeId===n.data.id&&e.side===`output`}).map(function(){var e=Y($.default.mark(function e(n){var r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.side,i=n.key,a=n.element,e.next=3,t.calculatePosition(l,r,i,a);case 3:o=e.sent,o&&(n.position=o);case 5:case`end`:return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 20:t.emitter.emit({nodeId:l}),e.next=24;break;case 23:n.type===`render`&&n.data.type===`connection`&&(u=n.data.payload,d=u.source,f=u.target,p=d||f,t.emitter.emit({nodeId:p}));case 24:return e.abrupt(`return`,n);case 25:case`end`:return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}},{key:`listen`,value:function(e,t,n,r){var i=this,a=this.emitter.listen(function(a){if(a.nodeId===e&&(!a.key||a.side===t)&&(!a.side||a.key===n)){var o=i.sockets.getPosition({side:t,nodeId:e,key:n});if(!o)return;var s=o.x,c=o.y,l=i.area?.nodeViews.get(e);l&&r({x:s+l.position.x,y:c+l.position.y})}});return this.sockets.snapshot().forEach(function(t){t.nodeId===e&&i.emitter.emit(t)}),a}}])}();function gI(e,t,n){return t=GN(t),WN(e,_I()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function _I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_I=function(){return!!e})()}var vI=function(e){function t(e){var n;return X(this,t),n=gI(this,t),n.props=e,n}return qN(t,e),Z(t,[{key:`calculatePosition`,value:function(){var e=Y($.default.mark(function e(t,n,r,i){var a,o,s;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.area?.nodeViews.get(t),o!=null&&o.element){e.next=3;break}return e.abrupt(`return`,null);case 3:return e.next=5,dI(i,o.element);case 5:if(s=e.sent,!((a=this.props)!=null&&a.offset)){e.next=8;break}return e.abrupt(`return`,this.props.offset(s,t,n,r));case 8:return e.abrupt(`return`,{x:s.x+12*(n===`input`?-1:1),y:s.y});case 9:case`end`:return e.stop()}},e,this)}));function t(t,n,r,i){return e.apply(this,arguments)}return t}()}])}(hI);function yI(e){return new vI(e)}function bI(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}function xI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function SI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?xI(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function CI(e,t,n,r,i){var a=A(sn(n)),o={render:function(){return V(t,SI(SI({},a.value),{},{seed:Math.random()}))},mounted:function(){r()},updated:function(){r()}},s=i!=null&&i.setup?i.setup(o):ds(o);return s.mount(e),{app:s,payload:a}}function wI(e,t){e.payload.value=sn(SI(SI({},e.payload.value),t))}function TI(e){e.app.unmount()}function EI(e){var t=new Map;return{get:function(e){return t.get(e)},mount:function(n,r,i,a){var o=CI(n,r,i,a,e);return t.set(n,o),o},update:function(e,t){wI(e,t)},unmount:function(e){var n=t.get(e);n&&(TI(n),t.delete(e))}}}var DI={"data-testid":`connection`},OI=[`d`];function kI(e,t,n,r,i,a){return I(),L(`svg`,DI,[R(`path`,{d:n.path},null,8,OI)])}bI(`/*! https://github.com/retejs/connection-plugin/commit/206ca0fd7fb82801ac45a0f7180ae05dff9ed901 */
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
}`);var AI=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},jI=AI({props:[`data`,`start`,`end`,`path`]},[[`render`,kI],[`__scopeId`,`data-v-fee8858e`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Connection.vue`]]);function MI(e,t,n,r,i,a){return I(),xa(Jr(n.component),{data:n.data,start:a.startPosition,end:a.endPosition,path:i.observedPath},null,8,[`data`,`start`,`end`,`path`])}var NI=AI({props:[`component`,`data`,`start`,`end`,`path`],data(){return{observedStart:{x:0,y:0},observedEnd:{x:0,y:0},observedPath:``,onDestroy:null}},computed:{startPosition(){return this.start&&`x`in this.start?this.start:this.observedStart},endPosition(){return this.end&&`x`in this.end?this.end:this.observedEnd}},watch:{startPosition(){this.fetchPath()},endPosition(){this.fetchPath()}},methods:{async fetchPath(){this.startPosition&&this.endPosition&&(this.observedPath=await this.path(this.startPosition,this.endPosition))}},created(){let e=typeof this.start==`function`&&this.start(e=>{this.observedStart=e}),t=typeof this.end==`function`&&this.end(e=>{this.observedEnd=e});this.onDestroy=()=>{e&&e(),t&&t()}},destroyed(){this.onDestroy&&this.onDestroy()}},[[`render`,MI],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/ConnectionWrapper.vue`]]),PI=[`type`,`value`,`readonly`];function FI(e,t,n,r,i,a){return I(),L(`input`,{type:n.data.type,value:n.data.value,readonly:n.data.readonly,onInput:t[0]||=(...e)=>a.change&&a.change(...e),onPointerdown:t[1]||=ss(()=>{},[`stop`])},null,40,PI)}bI(`input[data-v-a4adbbb3] {
  width: 100%;
  border-radius: 30px;
  background-color: white;
  color: black;
  padding: 2px 6px;
  border: 1px solid #999;
  font-size: 110%;
  box-sizing: border-box;
}`);var II=AI({props:[`data`],methods:{change(e){let t=this.data.type===`number`?+e.target.value:e.target.value;this.data.setValue(t)}}},[[`render`,FI],[`__scopeId`,`data-v-a4adbbb3`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Control.vue`]]);function LI(e,t,n,r,i,a){return I(),L(`div`,Na(e.$props,{ref:`element`}),null,16)}var RI=AI({props:[`data`,`emit`],mounted(){this.emit({type:`render`,data:{...this.data,element:this.$refs.element}})},beforeDestroy(){this.emit({type:`unmount`,data:{element:this.$refs.element}})},beforeUnmount(){this.emit({type:`unmount`,data:{element:this.$refs.element}})}},[[`render`,LI],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/Ref.vue`]]),zI={class:`title`,"data-testid":`title`},BI=[`data-testid`],VI={class:`output-title`,"data-testid":`output-title`},HI=[`data-testid`];function UI(e,t,n,r,i,a){let o=Kr(`Ref`);return I(),L(`div`,{class:we([`node`,{selected:n.data.selected}]),style:ye(a.nodeStyles()),"data-testid":`node`},[R(`div`,zI,k(n.data.label),1),B(` Outputs`),(I(!0),L(F,null,P(a.outputs(),([e,t])=>(I(),L(`div`,{class:`output`,key:`output`+e+n.seed,"data-testid":`output-`+e},[R(`div`,VI,k(t.label),1),z(o,{class:`output-socket`,data:{type:`socket`,side:`output`,key:e,nodeId:n.data.id,payload:t.socket},emit:n.emit,"data-testid":`output-socket`},null,8,[`data`,`emit`])],8,BI))),128)),B(` Controls`),(I(!0),L(F,null,P(a.controls(),([e,t])=>(I(),xa(o,{class:`control`,key:`control`+e+n.seed,"data-testid":`control-`+e,emit:n.emit,data:{type:`control`,payload:t}},null,8,[`data-testid`,`emit`,`data`]))),128)),B(` Inputs`),(I(!0),L(F,null,P(a.inputs(),([e,t])=>(I(),L(`div`,{class:`input`,key:`input`+e+n.seed,"data-testid":`input-`+e},[z(o,{class:`input-socket`,data:{type:`socket`,side:`input`,key:e,nodeId:n.data.id,payload:t.socket},emit:n.emit,"data-testid":`input-socket`},null,8,[`data`,`emit`]),M(R(`div`,{class:`input-title`,"data-testid":`input-title`},k(t.label),513),[[go,!t.control||!t.showControl]]),M(z(o,{class:`input-control`,emit:n.emit,data:{type:`control`,payload:t.control},"data-testid":`input-control`},null,8,[`emit`,`data`]),[[go,t.control&&t.showControl]])],8,HI))),128))],6)}bI(`.node[data-v-cc6bc301] {
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
}`);function WI(e){return e.sort((e,t)=>(e[1]&&e[1].index||0)-(t[1]&&t[1].index||0)),e}var GI=AI({props:[`data`,`emit`,`seed`],methods:{nodeStyles(){return{width:Number.isFinite(this.data.width)?`${this.data.width}px`:``,height:Number.isFinite(this.data.height)?`${this.data.height}px`:``}},inputs(){return WI(Object.entries(this.data.inputs))},controls(){return WI(Object.entries(this.data.controls))},outputs(){return WI(Object.entries(this.data.outputs))}},components:{Ref:RI}},[[`render`,UI],[`__scopeId`,`data-v-cc6bc301`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Node.vue`]]),KI=[`title`];function qI(e,t,n,r,i,a){return I(),L(`div`,{class:`socket`,title:n.data.name},null,8,KI)}bI(`.socket[data-v-4a0a4b7f] {
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
}`);var JI=AI({props:[`data`]},[[`render`,qI],[`__scopeId`,`data-v-4a0a4b7f`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/classic/components/Socket.vue`]]);function YI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function XI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?YI(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):YI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ZI(e){var t=e?.socketPositionWatcher===void 0?yI():e.socketPositionWatcher,n=e?.customize??{},r=n.node,i=n.connection,a=n.socket,o=n.control;return{attach:function(e){t.attach(e)},update:function(e,t){var n=e.data.payload,r=t.parentScope();if(!r)throw Error(`parent`);var i=r.emit.bind(r);if(e.data.type===`node`)return{data:n,emit:i};if(e.data.type===`connection`){var a=e.data,o=a.start,s=a.end;return XI(XI({data:n},o?{start:o}:{}),s?{end:s}:{})}return{data:n}},render:function(e,n){var s=n.parentScope(),c=s.emit.bind(s);if(e.data.type===`node`){var l=r?r(e.data):GI;return l&&{component:l,props:{data:e.data.payload,emit:c}}}if(e.data.type===`connection`){var u=i?i(e.data):jI,d=e.data.payload,f=d.source,p=d.target,m=d.sourceOutput,h=d.targetInput;return u&&{component:NI,props:{data:e.data.payload,component:u,start:e.data.start??function(e){return t.listen(f,`output`,m,e)},end:e.data.end??function(e){return t.listen(p,`input`,h,e)},path:function(){var e=Y($.default.mark(function e(t,r){var i,a,o,s,c;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.emit({type:`connectionpath`,data:{payload:d,points:[t,r]}});case 2:if(i=e.sent,i){e.next=5;break}return e.abrupt(`return`,``);case 5:if(a=i.data,o=a.path,s=a.points,c=.3,o||s.length===2){e.next=9;break}throw Error(`cannot render connection with a custom number of points`);case 9:if(o){e.next=11;break}return e.abrupt(`return`,d.isLoop?uI(s,c,120):lI(s,c));case 11:return e.abrupt(`return`,o);case 12:case`end`:return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()}}}if(e.data.type===`socket`){var g=e.data.payload;return{component:a?a(e.data):JI,props:{data:g}}}if(e.data.type===`control`){var _=e.data.payload;if(o){var v=o(e.data);return v&&{component:v,props:{data:_}}}return e.data.payload instanceof TP.InputControl?{component:II,props:{data:_}}:null}}}}var QI=Object.freeze({__proto__:null,setup:ZI,Connection:jI,Control:II,Node:GI,Socket:JI}),$I={class:`block`};function eL(e,t){return I(),L(`div`,$I,[Zr(e.$slots,`default`,{},void 0,!0)])}bI(`.block[data-v-e9c17765] {
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
}`);var tL=AI({},[[`render`,eL],[`__scopeId`,`data-v-e9c17765`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Block.vue`]]),nL=[`value`];function rL(e,t,n,r,i,a){return I(),L(`input`,{class:`search`,value:n.text,onInput:t[0]||=t=>e.$emit(`change`,t.target.value),"data-testid":`context-menu-search-input`},null,40,nL)}bI(`.search[data-v-3253b3e6] {
  color: white;
  padding: 1px 8px;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 16px;
  font-family: serif;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
}`);var iL=AI({props:[`text`]},[[`render`,rL],[`__scopeId`,`data-v-3253b3e6`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Search.vue`]]);function aL(e,t){return{timeout:null,cancel:function(){this.timeout&&=(window.clearTimeout(this.timeout),null)},call:function(){this.timeout=window.setTimeout(function(){t()},e)}}}var oL={key:0,class:`subitems`};function sL(e,t,n,r,i,a){let o=Kr(`Item`,!0),s=Kr(`Block`);return I(),xa(s,{class:we([`block`,{hasSubitems:n.subitems}]),"data-testid":`context-menu-item`},{default:qn(()=>[R(`div`,{class:`content`,onClick:t[1]||=ss(t=>{e.$emit(`select`,t),e.$emit(`hide`)},[`stop`]),onWheel:t[2]||=ss(()=>{},[`stop`]),onPointerover:t[3]||=e=>{i.hide.cancel(),i.visibleSubitems=!0},onPointerleave:t[4]||=e=>i.hide.call(),onPointerdown:t[5]||=ss(()=>{},[`stop`])},[Zr(e.$slots,`default`,{},void 0,!0),n.subitems&&i.visibleSubitems?(I(),L(`div`,oL,[(I(!0),L(F,null,P(n.subitems,r=>(I(),xa(o,{key:r.key,onSelect:e=>r.handler(e),delay:n.delay,onHide:t[0]||=t=>e.$emit(`hide`),subitems:r.subitems},{default:qn(()=>[ka(k(r.label),1)]),_:2},1032,[`onSelect`,`delay`,`subitems`]))),128))])):B(`v-if`,!0)],32)]),_:3},8,[`class`])}bI(`@charset "UTF-8";
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
}`);var cL=AI({name:`Item`,props:[`subitems`,`delay`],data(){return{visibleSubitems:!1,hide:aL(this.delay,this.hideSubitems)}},methods:{hideSubitems(){this.visibleSubitems=!1}},components:{Block:tL}},[[`render`,sL],[`__scopeId`,`data-v-fc3b2bca`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Item.vue`]]);function lL(e,t,n,r,i,a){let o=Kr(`Search`),s=Kr(`Block`),c=Kr(`Item`);return I(),L(`div`,{class:`menu`,onMouseover:t[2]||=e=>i.hide.cancel(),onMouseleave:t[3]||=e=>i.hide.call(),"data-testid":`context-menu`,"rete-context-menu":``},[n.searchBar?(I(),xa(s,{key:0},{default:qn(()=>[z(o,{text:i.filter,onChange:t[0]||=e=>i.filter=e},null,8,[`text`])]),_:1})):B(`v-if`,!0),(I(!0),L(F,null,P(a.getItems(),e=>(I(),xa(c,{key:e.key,onSelect:t=>e.handler(t),delay:n.delay,onHide:t[1]||=e=>n.onHide(),subitems:e.subitems},{default:qn(()=>[ka(k(e.label),1)]),_:2},1032,[`onSelect`,`delay`,`subitems`]))),128))],32)}bI(`.menu[data-v-2571168d] {
  padding: 10px;
  width: 120px;
  margin-top: -20px;
  margin-left: -60px;
}`);var uL=AI({props:[`items`,`delay`,`searchBar`,`onHide`,`seed`],data(){return{filter:``,hide:aL(this.delay,this.onHide)}},methods:{getItems(){let e=new RegExp(this.filter,`i`);return this.items.filter(t=>t.label.match(e))}},unmounted(){this.hide&&this.hide.cancel()},components:{Block:tL,Search:iL,Item:cL}},[[`render`,lL],[`__scopeId`,`data-v-2571168d`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/context-menu/components/Menu.vue`]]);function dL(e){var t=e?.delay===void 0?1e3:e.delay;return{update:function(e){if(e.data.type===`contextmenu`)return{items:e.data.items,delay:t,searchBar:e.data.searchBar,onHide:e.data.onHide}},render:function(e){if(e.data.type===`contextmenu`)return{component:uL,props:{items:e.data.items,delay:t,searchBar:e.data.searchBar,onHide:e.data.onHide}}}}}var fL=Object.freeze({__proto__:null,setup:dL});function pL(e){return`${e}px`}function mL(e,t,n,r,i,a){return I(),L(`div`,{class:`mini-node`,style:ye(a.styles),"data-testid":`minimap-node`},null,4)}bI(`.mini-node[data-v-2d96711d] {
  position: absolute;
  background: rgba(110, 136, 255, 0.8);
  border: 1px solid rgba(192, 206, 212, 0.6);
}`);var hL=AI({props:[`left`,`top`,`width`,`height`],computed:{styles(){return{left:pL(this.left),top:pL(this.top),width:pL(this.width),height:pL(this.height)}}}},[[`render`,mL],[`__scopeId`,`data-v-2d96711d`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/minimap/MiniNode.vue`]]);function gL(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?gL(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gL(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function vL(e,t){return{start:function(n){var r=_L({},t(n));function i(n){var i=_L({},t(n)),a=i.x-r.x,o=i.y-r.y;r=i,e(a,o)}function a(){window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a)}window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}}}function yL(e,t,n,r,i,a){return I(),L(`div`,{class:`mini-viewport`,onPointerdown:t[0]||=ss(e=>i.drag.start(e),[`stop`]),style:ye(a.styles),"data-testid":`minimap-viewport`},null,36)}bI(`.mini-viewport[data-v-ed5fcf61] {
  position: absolute;
  background: rgba(255, 251, 128, 0.32);
  border: 1px solid #ffe52b;
}`);var bL=AI({props:[`left`,`top`,`width`,`height`,`containerWidth`,`translate`],data(){return{drag:vL(this.onDrag,e=>({x:e.pageX,y:e.pageY}))}},methods:{scale(e){return e*this.containerWidth},invert(e){return e/this.containerWidth},onDrag(e,t){this.translate(this.invert(-e),this.invert(-t))}},computed:{styles(){return{left:pL(this.scale(this.left)),top:pL(this.scale(this.top)),width:pL(this.scale(this.width)),height:pL(this.scale(this.height))}}}},[[`render`,yL],[`__scopeId`,`data-v-ed5fcf61`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/minimap/MiniViewport.vue`]]);function xL(e,t,n,r,i,a){let o=Kr(`MiniNode`),s=Kr(`MiniViewport`);return I(),L(`div`,{class:`minimap`,ref:`container`,style:ye({width:a.px(n.size*n.ratio),height:a.px(n.size)}),onPointerdown:t[0]||=ss(()=>{},[`stop`,`prevent`]),onDblclick:t[1]||=ss(e=>a.dblclick(e),[`stop`,`prevent`]),"data-testid":`minimap`},[(I(!0),L(F,null,P(n.nodes,(e,t)=>(I(),xa(o,{key:[t,e.left].join(`_`),left:a.scale(e.left),top:a.scale(e.top),width:a.scale(e.width),height:a.scale(e.height)},null,8,[`left`,`top`,`width`,`height`]))),128)),z(s,{left:n.viewport.left,top:n.viewport.top,width:n.viewport.width,height:n.viewport.height,containerWidth:e.$refs.container&&e.$refs.container.clientWidth,translate:n.translate},null,8,[`left`,`top`,`width`,`height`,`containerWidth`,`translate`])],36)}bI(`.minimap[data-v-403730b0] {
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: rgba(229, 234, 239, 0.65);
  padding: 20px;
  overflow: hidden;
  border: 1px solid #b1b7ff;
  border-radius: 8px;
  box-sizing: border-box;
}`);var SL=AI({props:{size:Number,ratio:Number,nodes:Array,viewport:Object,translate:Function,point:Function,seed:Number},methods:{dblclick(e){if(!this.$refs.container)return;let t=this.$refs.container.getBoundingClientRect(),n=(e.clientX-t.left)/(this.size*this.ratio),r=(e.clientY-t.top)/(this.size*this.ratio);this.point(n,r)},px:pL,scale(e){return this.$refs.container?e*this.$refs.container.clientWidth:0}},components:{MiniNode:hL,MiniViewport:bL}},[[`render`,xL],[`__scopeId`,`data-v-403730b0`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/minimap/Minimap.vue`]]);function CL(e){return{update:function(t){if(t.data.type===`minimap`)return{nodes:t.data.nodes,size:e?.size??200,ratio:t.data.ratio,viewport:t.data.viewport,translate:t.data.translate,point:t.data.point}},render:function(t){if(t.data.type===`minimap`)return{component:SL,props:{nodes:t.data.nodes,size:e?.size??200,ratio:t.data.ratio,viewport:t.data.viewport,translate:t.data.translate,point:t.data.point}}}}}var wL=Object.freeze({__proto__:null,setup:CL});function TL(e,t,n,r,i,a){return I(),L(`div`,{class:we([`pin`,{selected:n.selected}]),onPointerdown:t[0]||=ss(t=>{i.drag.start(t),e.$emit(`down`)},[`stop`,`prevent`]),onContextmenu:t[1]||=ss(t=>e.$emit(`menu`),[`stop`,`prevent`]),style:ye(a.style),"data-testid":`pin`},null,38)}bI(`.pin[data-v-42b064e9] {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  background: steelblue;
  border: 2px solid white;
  border-radius: 20px;
}
.pin[data-v-42b064e9].selected[data-v-42b064e9] {
  background: #ffd92c;
}`);var EL=20,DL=AI({props:[`position`,`selected`,`getPointer`],data(){return{drag:vL(this.onDrag,this.getPointer)}},computed:{style(){let{x:e,y:t}=this.position;return{position:`absolute`,top:`${t-EL/2}px`,left:`${e-EL/2}px`}}},methods:{onDrag(e,t){this.$emit(`translate`,{dx:e,dy:t})}}},[[`render`,TL],[`__scopeId`,`data-v-42b064e9`],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/reroute/Pin.vue`]]),OL={class:`pins`};function kL(e,t,n,r,i,a){let o=Kr(`Pin`);return I(),L(`div`,OL,[(I(!0),L(F,null,P(n.pins,e=>(I(),xa(o,{key:e.id,position:e.position,selected:e.selected,getPointer:n.getPointer,onMenu:t=>n.menu(e.id),onTranslate:t=>n.translate(e.id,t.dx,t.dy),onDown:t=>n.down(e.id)},null,8,[`position`,`selected`,`getPointer`,`onMenu`,`onTranslate`,`onDown`]))),128))])}var AL=AI({props:[`pins`,`menu`,`translate`,`down`,`seed`,`getPointer`],components:{Pin:DL}},[[`render`,kL],[`__file`,`/home/runner/work/vue-plugin/vue-plugin/src/presets/reroute/Pins.vue`]]);function jL(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ML(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?jL(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jL(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function NL(e){var t=function(){return{menu:e?.contextMenu??function(){return null},translate:e?.translate??function(){return null},down:e?.pointerdown??function(){return null}}};return{update:function(e){if(e.data.type===`reroute-pins`)return ML(ML({},t()),{},{pins:e.data.data.pins})},render:function(e,n){if(e.data.type===`reroute-pins`){var r=n.parentScope(XP);return{component:AL,props:ML(ML({},t()),{},{getPointer:function(){return r.area.pointer},pins:e.data.data.pins})}}}}}var PL=Object.freeze({__proto__:null,classic:QI,contextMenu:fL,minimap:wL,reroute:Object.freeze({__proto__:null,setup:NL})});function FL(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=IL(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function IL(e,t){if(e){if(typeof e==`string`)return LL(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?LL(e,t):void 0}}function LL(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function RL(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function zL(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?RL(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):RL(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function BL(e,t,n){return t=GN(t),WN(e,VL()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function VL(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VL=function(){return!!e})()}function HL(e,t,n,r){var i=OF(GN(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var UL=function(e){function t(e){var n;return X(this,t),n=BL(this,t,[`vue-render`]),Q(n,`presets`,[]),Q(n,`owners`,new WeakMap),n.renderer=EI(e),n.addPipe(function(e){if(!e||zN(e)!==`object`||!(`type`in e))return e;if(e.type===`unmount`)n.unmount(e.data.element);else if(e.type===`render`){if(`filled`in e.data&&e.data.filled)return e;if(n.mount(e.data.element,e))return zL(zL({},e),{},{data:zL(zL({},e.data),{},{filled:!0})})}return e}),n}return qN(t,e),Z(t,[{key:`setParent`,value:function(e){var n=this;HL(t,`setParent`,this,3)([e]),this.presets.forEach(function(e){e.attach&&e.attach(n)})}},{key:`unmount`,value:function(e){this.owners.delete(e),this.renderer.unmount(e)}},{key:`mount`,value:function(e,t){var n=this,r=this.renderer.get(e),i=this.parentScope();if(r)return this.presets.forEach(function(i){if(n.owners.get(e)===i){var a=i.update(t,n);a&&n.renderer.update(r,a)}}),!0;var a=FL(this.presets),o;try{for(a.s();!(o=a.n()).done;){var s=o.value,c=s.render(t,this);if(c)return this.renderer.mount(e,c.component,c.props,function(){return i.emit({type:`rendered`,data:t.data})}),this.owners.set(e,s),!0}}catch(e){a.e(e)}finally{a.f()}}},{key:`addPreset`,value:function(e){var t=e;t.attach&&t.attach(this),this.presets.push(t)}}])}(lP);function WL(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}WL(`.inline-comment, .frame-comment {
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
}`);function GL(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function KL(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?GL(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):GL(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var qL=function(){function e(t,n,r,i){var a=this;X(this,e),Q(this,`x`,0),Q(this,`y`,0),Q(this,`width`,0),Q(this,`height`,0),Q(this,`links`,[]),Q(this,`prevPosition`,null),Q(this,`dragOrigin`,null),this.text=t,this.area=n,this.events=r,this.id=i?.id??_P(),this.element=document.createElement(`div`),this.nested=document.createElement(`div`),this.element.appendChild(this.nested),this.element.addEventListener(`contextmenu`,this.onContextMenu.bind(this)),this.dragHandler=new zP,this.dragHandler.initialize(this.nested,{getCurrentPosition:function(){return{x:a.x,y:a.y}},getZoom:function(){return 1}},{start:function(){var e;a.dragOrigin={x:a.x,y:a.y},a.prevPosition=KL({},n.area.pointer),(e=a.events)!=null&&e.pick&&a.events.pick()},translate:function(){if(a.prevPosition){var e=KL({},n.area.pointer),t=e.x-a.prevPosition.x,r=e.y-a.prevPosition.y;a.translate(t,r),a.prevPosition=e}},drag:function(){a.finishDrag()}}),this.update()}return Z(e,[{key:`linkTo`,value:function(e){this.links=e}},{key:`linkedTo`,value:function(e){return this.links.includes(e)}},{key:`onContextMenu`,value:function(e){var t;e.preventDefault(),e.stopPropagation(),(t=this.events)!=null&&t.contextMenu&&this.events.contextMenu()}},{key:`translate`,value:function(){var e=Y($.default.mark(function e(t,n,r){var i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.x+=t,this.y+=n,!((i=this.events)!=null&&i.translate)){e.next=5;break}return e.next=5,this.events.translate(t,n,r);case 5:this.update();case 6:case`end`:return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:`select`,value:function(){this.nested.classList.add(`selected`)}},{key:`unselect`,value:function(){this.nested.classList.remove(`selected`)}},{key:`update`,value:function(){this.nested.innerText=this.text,this.nested.style.transform=`translate(${this.x}px, ${this.y}px)`}},{key:`destroy`,value:function(){this.dragHandler.destroy()}},{key:`finishDrag`,value:function(){var e=Y($.default.mark(function e(){var t,n,r,i,a,o;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.prevPosition=null,r=this.dragOrigin,this.dragOrigin=null,r){e.next=6;break}return(i=this.events)==null||(a=i.drag)==null||a.call(i),e.abrupt(`return`);case 6:return o=jP(this.links),(t=this.events)!=null&&t.drag&&this.events.drag(),e.next=10,(n=this.events)?.dragged?.call(n,r,o);case 10:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function JL(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function YL(e,t){return t.left>e.left&&t.right<e.right&&t.top>e.top&&t.bottom<e.bottom}function XL(e,t,n,r){var i=typeof r==`number`?{left:r,top:r,right:r,bottom:r}:r,a=n.map(function(n){var r=t.nodeViews.get(n);if(!r)return null;var i=e.getNode(n),a=i.width,o=i.height;return{id:n,position:r.position,width:a,height:o}}).filter(function(e){return!!e});if(a.length===0)return null;var o=Math.min.apply(Math,jP(a.map(function(e){return e.position.x})))-i.left,s=Math.min.apply(Math,jP(a.map(function(e){return e.position.y})))-i.top,c=Math.max.apply(Math,jP(a.map(function(e){return e.position.x+e.width})))+i.right,l=Math.max.apply(Math,jP(a.map(function(e){return e.position.y+e.height})))+i.bottom;return{left:o,right:c,top:s,bottom:l,width:Math.abs(o-c),height:Math.abs(s-l),getCenter:function(){return[(o+c)/2,(s+l)/2]}}}function ZL(e,t,n){return t=GN(t),WN(e,QL()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function QL(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(QL=function(){return!!e})()}function $L(e,t,n,r){var i=OF(GN(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var eR=function(e){function t(e,n,r,i,a){var o;return X(this,t),o=ZL(this,t,[e,n,{contextMenu:function(){var e;i==null||(e=i.contextMenu)==null||e.call(i,UN(o))},pick:function(){var e;i==null||(e=i.pick)==null||e.call(i,UN(o))},translate:function(){var e=Y($.default.mark(function e(t,n,r){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i!=null&&i.translate)){e.next=3;break}return e.next=3,i.translate(UN(o),t,n,r);case 3:case`end`:return e.stop()}},e)}));function t(t,n,r){return e.apply(this,arguments)}return t}(),drag:function(){return 1},dragged:function(){var e=Y($.default.mark(function e(t,n){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i!=null&&i.dragged)){e.next=3;break}return e.next=3,i.dragged(UN(o),t,n);case 3:case`end`:return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},a]),Q(o,`width`,100),Q(o,`height`,100),Q(o,`links`,[]),o.editor=r,o.nested.className=`frame-comment`,o}return qN(t,e),Z(t,[{key:`getRect`,value:function(){return{left:this.x,top:this.y,right:this.x+this.width,bottom:this.y+this.height}}},{key:`contains`,value:function(e){var t=this.area.nodeViews.get(e),n=this.editor.getNode(e);return t?YL(this.getRect(),{left:t.position.x,top:t.position.y,right:t.position.x+n.width,bottom:t.position.y+n.height}):!1}},{key:`intersects`,value:function(e){var t=this.area.nodeViews.get(e),n=this.editor.getNode(e);return t?JL(this.getRect(),{left:t.position.x,top:t.position.y,right:t.position.x+n.width,bottom:t.position.y+n.height}):!1}},{key:`linkTo`,value:function(e){$L(t,`linkTo`,this,3)([e]),this.resize()}},{key:`resize`,value:function(){var e=Y($.default.mark(function e(){var t;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=XL(this.editor,this.area,this.links,{top:50,left:20,right:20,bottom:20}),!t){e.next=8;break}return this.width=t.width,this.height=t.height,e.next=6,this.translate(t.left-this.x,t.top-this.y,this.links);case 6:e.next=12;break;case 8:return this.width=100,this.height=100,e.next=12,this.translate(0,0,this.links);case 12:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`update`,value:function(){$L(t,`update`,this,3)([]),this.nested.style.width=`${this.width}px`,this.nested.style.height=`${this.height}px`}}])}(qL),tR=function(){function e(t){var n=t.limit;X(this,e),Q(this,`active`,!1),Q(this,`produced`,[]),Q(this,`reserved`,[]),n&&typeof n==`number`&&(this.limit=n)}return Z(e,[{key:`add`,value:function(e){this.active||(this.produced.push({time:Date.now(),action:e}),this.limit&&this.produced.length>this.limit&&this.produced.shift(),this.reserved=[])}},{key:`getRecent`,value:function(e){for(var t=Date.now()-e,n=[],r=this.produced.length-1;r>=0;r--){var i=this.produced[r];if(i.time<=t||i.separated)break;n.push(i)}return n}},{key:`removeRecent`,value:function(e,t){for(var n=Date.now()-t,r=this.produced.length-1;r>=0;r--){var i=this.produced[r];if(i.time<=n||i.separated)break;if(e(i))return this.produced.splice(r,1),i}}},{key:`move`,value:function(){var e=Y($.default.mark(function e(t,n,r){var i;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.pop(),i){e.next=3;break}return e.abrupt(`return`);case 3:return this.active=!0,e.next=6,i.action[r]();case 6:return n.push(i),this.active=!1,e.abrupt(`return`,i);case 9:case`end`:return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.move(this.produced,this.reserved,`undo`);case 2:return e.abrupt(`return`,e.sent);case 3:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`clear`,value:function(){this.active=!1,this.produced=[],this.reserved=[]}},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.move(this.reserved,this.produced,`redo`);case 2:return e.abrupt(`return`,e.sent);case 3:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function nR(e){var t=e.type.toLowerCase();return![`button`,`checkbox`,`radio`,`submit`,`reset`,`file`,`image`,`hidden`].includes(t)}function rR(e){for(var t=e;t;){if(t.hasAttribute(`contenteditable`)){var n=t.getAttribute(`contenteditable`)?.toLowerCase();return n===`true`||n===``}t=t.parentElement}return!1}function iR(e){var t=e.tagName.toLowerCase();return t===`input`&&e instanceof HTMLInputElement?nR(e):t===`textarea`}function aR(e){return!e||!(e instanceof Element)?!1:iR(e)||rR(e)}function oR(e){document.addEventListener(`keydown`,function(t){if((t.ctrlKey||t.metaKey)&&!aR(t.target))switch(t.code){case`KeyZ`:e.undo(),t.preventDefault();break;case`KeyY`:e.redo(),t.preventDefault()}})}var sR=Object.freeze({__proto__:null,keyboard:oR}),cR=function(){function e(t,n){X(this,e),this.editor=t,this.connection=n}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.removeConnection(this.connection.id);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.addConnection(this.connection);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),lR=function(){function e(t,n){X(this,e),this.editor=t,this.connection=n}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.addConnection(this.connection);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.removeConnection(this.connection.id);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function uR(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function dR(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?uR(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uR(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var fR=function(){function e(t,n,r){X(this,e),this.editor=t,this.area=n,this.nodeId=r}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.node=this.editor.getNode(this.nodeId),this.position=this.area.nodeViews.get(this.nodeId)?.position,e.next=4,this.editor.removeNode(this.nodeId);case 4:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.node){e.next=3;break}return e.next=3,this.editor.addNode(this.node);case 3:if(!(this.node&&this.position)){e.next=6;break}return e.next=6,this.area.translate(this.node.id,this.position);case 6:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),pR=function(){function e(t,n,r,i){X(this,e),this.editor=t,this.area=n,this.node=r,this.position=i}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.addNode(this.node);case 2:return e.next=4,this.area.translate(this.node.id,this.position);case 4:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.editor.removeNode(this.node.id);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),mR=function(){function e(t,n,r){X(this,e),this.area=t,this.nodeId=n;var i=t.nodeViews.get(n);i&&(this.prev=dR({},r),this.new=dR({},i.position))}return Z(e,[{key:`translate`,value:function(){var e=Y($.default.mark(function e(t){var n;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.area.nodeViews.get(this.nodeId),n){e.next=3;break}return e.abrupt(`return`);case 3:return e.next=5,n.translate(t.x,t.y);case 5:case`end`:return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.translate(this.prev);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.translate(this.new);case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}();function hR(e,t){var n=new Map,r=new Map,i=e.parentScope(XP),a=i.parentScope(hP),o=t.timing;a.addPipe(function(t){if(t.type===`nodecreated`){var o=t.data.id;e.add(new fR(a,i,o)),n.set(o,a.getNode(t.data.id))}if(t.type===`noderemoved`){var s=t.data.id,c=n.get(s),l=r.get(s);if(!c)throw Error(`node`);if(!l)throw Error(`position`+s);e.add(new pR(a,i,c,l)),r.delete(s),n.delete(s)}return t}),i.addPipe(function(e){if(!(`type`in e))return e;if(e.type===`nodetranslated`){var t=e.data,n=t.id,i=t.position;r.set(n,i)}return e});var s=[];i.addPipe(function(t){if(!t||zN(t)!==`object`||!(`type`in t))return t;if(t.type===`nodepicked`&&s.push(t.data.id),t.type===`nodedragged`){var n=s.indexOf(t.data.id);n>=0&&s.splice(n,1)}if(t.type===`nodetranslated`){var r=t.data,a=r.id,c=r.position,l=r.previous,u=e.getRecent(o).filter(function(e){return e.action instanceof mR}).filter(function(e){return e.action.nodeId===a});if(u.length>1)throw Error(`> 1`);u[0]?(u[0].action.new=c,u[0].time=Date.now()):e.add(new mR(i,a,l))}return t})}function gR(e){var t=new Map,n=e.parentScope().parentScope(hP);n.addPipe(function(r){if(r.type===`connectioncreated`){var i=n.getConnection(r.data.id);e.add(new cR(n,i)),t.set(r.data.id,i)}if(r.type===`connectionremoved`){var a=t.get(r.data.id);a&&e.add(new lR(n,a))}return r})}function _R(e){return{connect:function(t){hR(t,{timing:e?.timing??t.timing*2}),gR(t)}}}var vR=Object.freeze({__proto__:null,AddConnectionAction:cR,AddNodeAction:fR,DragNodeAction:mR,RemoveConnectionAction:lR,RemoveNodeAction:pR,setup:_R});function yR(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=bR(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function bR(e,t){if(e){if(typeof e==`string`)return xR(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xR(e,t):void 0}}function xR(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function SR(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function CR(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?SR(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SR(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function wR(e){return{id:e.id,text:e.text,x:e.x,y:e.y,width:e.width,height:e.height,links:jP(e.links),kind:e instanceof eR?`frame`:`inline`}}var TR=function(){function e(t,n){X(this,e),this.comment=t,this.commentId=n}return Z(e,[{key:`undo`,value:function(){var e=this.comment.comments.get(this.commentId);e&&(this.stored=wR(e),this.comment.delete(this.commentId))}},{key:`redo`,value:function(){this.stored&&this.comment.restoreComment(this.stored)}}])}(),ER=function(){function e(t,n){X(this,e),this.comment=t,this.stored=n}return Z(e,[{key:`undo`,value:function(){this.comment.restoreComment(this.stored)}},{key:`redo`,value:function(){this.comment.delete(this.stored.id)}}])}(),DR=function(){function e(t,n,r,i,a,o,s,c){X(this,e),this.comment=t,this.area=n,this.commentId=r,this.prev=CR({},i),this.new=CR({},a),this.prevLinks=jP(o),this.newLinks=jP(s),this.nodes=(c??[]).map(function(e){var t=e.id,n=e.previous,r=e.current;return{id:t,prev:CR({},n),new:CR({},r)}});var l=t.comments.get(r);l instanceof eR&&(this.prevFrame={x:i.x,y:i.y,width:l.width,height:l.height,links:jP(o)},this.newFrame={x:l.x,y:l.y,width:l.width,height:l.height,links:jP(s)})}return Z(e,[{key:`applyInline`,value:function(){var e=Y($.default.mark(function e(t,n){var r;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.comment.comments.get(this.commentId),r){e.next=3;break}return e.abrupt(`return`);case 3:return e.next=5,this.comment.translate(this.commentId,t.x-r.x,t.y-r.y);case 5:return e.next=7,this.comment.setCommentLinks(this.commentId,n);case 7:case`end`:return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`applyFrame`,value:function(){var e=Y($.default.mark(function e(t,n){var r,i,a,o,s;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.comment.setFrameState(this.commentId,t),r=yR(this.nodes),e.prev=2,r.s();case 4:if((i=r.n()).done){e.next=13;break}if(a=i.value,o=n===`prev`?a.prev:a.new,s=this.area.nodeViews.get(a.id),!s){e.next=11;break}return e.next=11,s.translate(o.x,o.y);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:case`end`:return e.stop()}},e,this,[[2,15,18,21]])}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.prevFrame){e.next=4;break}return e.next=3,this.applyFrame(this.prevFrame,`prev`);case 3:return e.abrupt(`return`);case 4:return e.next=6,this.applyInline(this.prev,this.prevLinks);case 6:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.newFrame){e.next=4;break}return e.next=3,this.applyFrame(this.newFrame,`new`);case 3:return e.abrupt(`return`);case 4:return e.next=6,this.applyInline(this.new,this.newLinks);case 6:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),OR=function(){function e(t,n,r){X(this,e),this.comment=t,this.frames=n,this.node=r}return Z(e,[{key:`undo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.comment.restoreNodeFrameMembership(CR({frames:this.frames.map(function(e){return{id:e.id,state:e.prev}})},this.node?{node:{id:this.node.id,position:this.node.prev}}:{}));case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.comment.restoreNodeFrameMembership(CR({frames:this.frames.map(function(e){return{id:e.id,state:e.next}})},this.node?{node:{id:this.node.id,position:this.node.new}}:{}));case 2:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(),kR=function(){function e(t,n,r,i){X(this,e),this.comment=t,this.commentId=n,this.previousText=r,this.newText=i}return Z(e,[{key:`undo`,value:function(){var e=this.comment.comments.get(this.commentId);e&&(e.text=this.previousText,e.update())}},{key:`redo`,value:function(){var e=this.comment.comments.get(this.commentId);e&&(e.text=this.newText,e.update())}}])}();function AR(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function jR(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?AR(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AR(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function MR(e,t){return{x:e.x,y:e.y,width:e.width,height:e.height,links:jP(t)}}function NR(e,t,n){var r=e.x-t.x,i=e.y-t.y;return e.links.map(function(e){var t=n.nodeViews.get(e);return t?{id:e,previous:{x:t.position.x-r,y:t.position.y-i},current:jR({},t.position)}:null}).filter(function(e){return!!e})}function PR(e,t,n){for(;e.removeRecent(function(e){var n=e.action;return n instanceof mR&&n.nodeId===t},n););}function FR(e,t){t.addPipe(function(n){return n.type===`commentcreated`&&e.add(new TR(t,n.data.id)),n})}function IR(e,t){t.addPipe(function(n){return n.type===`commentremoved`&&e.add(new ER(t,wR(n.data))),n})}function LR(e,t){t.addPipe(function(n){if(n.type===`commentedited`){var r=n.data,i=r.comment,a=r.previousText;e.add(new kR(t,i.id,a,i.text))}return n})}function RR(e,t,n){t.addPipe(function(r){if(r.type!==`commentdragged`)return r;var i=r.data,a=i.id,o=i.previous,s=i.prevLinks,c=t.comments.get(a);if(!c)return r;var l=jP(c.links),u=o.x!==c.x||o.y!==c.y,d=s.length!==l.length||s.some(function(e,t){return e!==l[t]});if(u||d){var f=c instanceof eR?NR(c,o,n):[];e.add(new DR(t,n,a,o,{x:c.x,y:c.y},s,l,f))}return r})}function zR(e,t,n){t.addPipe(function(r){if(r.type!==`commentmembershipchanged`)return r;var i=r.data,a=i.node,o=i.frames;a&&PR(e,a.id,n);var s=a?{id:a.id,prev:a.previous,new:a.current}:null;return e.add(new OR(t,o.map(function(e){return{id:e.id,prev:MR(e.previous,e.links.prev),next:MR(e.current,e.links.next)}}),s)),r})}function BR(e){return{connect:function(t){var n=t.parentScope(XP),r=t.timing*2;FR(t,e.comment),IR(t,e.comment),LR(t,e.comment),RR(t,e.comment,n),zR(t,e.comment,r)}}}var VR=Object.freeze({__proto__:null,classic:vR,comments:Object.freeze({__proto__:null,AddCommentAction:TR,commentSnapshot:wR,DragCommentAction:DR,EditCommentAction:kR,NodeFrameMembershipAction:OR,RemoveCommentAction:ER,setup:BR})});function HR(e,t,n){return t=GN(t),WN(e,UR()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function UR(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(UR=function(){return!!e})()}function WR(e,t,n,r){var i=OF(GN(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var GR=function(e){function t(e){var n;return X(this,t),n=HR(this,t,[`history`]),Q(n,`history`,new tR({})),Q(n,`presets`,[]),n.timing=e?.timing??200,n}return qN(t,e),Z(t,[{key:`setParent`,value:function(e){var n=this;WR(t,`setParent`,this,3)([e]),this.area=this.parentScope(XP),this.editor=this.area.parentScope(hP),this.presets.forEach(function(e){e.connect(n)}),this.editor.addPipe(function(e){return e.type===`cleared`&&n.history.clear(),e})}},{key:`addPreset`,value:function(e){this.presets.push(e),this.area&&this.editor&&e.connect(this)}},{key:`add`,value:function(e){this.history.add(e)}},{key:`getHistorySnapshot`,value:function(){return jP(this.history.produced)}},{key:`getRecent`,value:function(e){return this.history.getRecent(e)}},{key:`removeRecent`,value:function(e,t){return this.history.removeRecent(e,t??this.timing*2)}},{key:`clear`,value:function(){this.history.clear()}},{key:`separate`,value:function(){var e=this.history.produced[this.history.produced.length-1];e&&(e.separated=!0)}},{key:`undo`,value:function(){var e=Y($.default.mark(function e(){var t,n;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.history.undo();case 2:if(t=e.sent,!t){e.next=8;break}if(n=this.history.produced[this.history.produced.length-1],!(n&&!n.separated&&n.time+this.timing>t.time)){e.next=8;break}return e.next=8,this.undo();case 8:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:`redo`,value:function(){var e=Y($.default.mark(function e(){var t,n;return $.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.history.redo();case 2:if(t=e.sent,!t){e.next=8;break}if(n=this.history.reserved[this.history.reserved.length-1],!(n&&!t.separated&&t.time+this.timing>n.time)){e.next=8;break}return e.next=8,this.redo();case 8:case`end`:return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}])}(lP);function KR(e){var t=e.map(function(e){return e.left}),n=e.map(function(e){return e.left+e.width}),r=e.map(function(e){return e.top}),i=e.map(function(e){return e.top+e.height}),a=Math.min.apply(Math,jP(t)),o=Math.max.apply(Math,jP(n)),s=Math.min.apply(Math,jP(r)),c=Math.max.apply(Math,jP(i));return{left:a,right:o,top:s,bottom:c,width:o-a,height:c-s}}function qR(e,t,n){var r=KR(e),i=Math.max(t,Math.max(r.width,r.height*n));return{origin:{x:(i-r.width)/2-r.left,y:(i/n-r.height)/2-r.top},scale:function(e){return e/i},invert:function(e){return e*i}}}function JR(e,t,n){return t=GN(t),WN(e,YR()?Reflect.construct(t,n||[],GN(e).constructor):t.apply(e,n))}function YR(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YR=function(){return!!e})()}function XR(e,t,n,r){var i=OF(GN(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var ZR=function(e){function t(e){var n;return X(this,t),n=JR(this,t,[`minimap`]),n.props=e,n.ratio=n.props?.ratio??1,n.minDistance=n.props?.minDistance??2e3,n.boundViewport=!!n.props?.boundViewport,n}return qN(t,e),Z(t,[{key:`setParent`,value:function(e){var n=this;XR(t,`setParent`,this,3)([e]),this.area=this.parentScope(EF),this.editor=this.area.parentScope(hP),this.element=document.createElement(`div`),this.area.container.appendChild(this.element),this.addPipe(function(e){return`type`in e&&(e.type===`render`&&e.data.type===`node`||e.type===`nodetranslated`||e.type===`nodecreated`||e.type===`noderemoved`||e.type===`translated`||e.type===`resized`||e.type===`noderesized`||e.type===`zoomed`)&&n.render(),e})}},{key:`getNodesRect`,value:function(){var e=this;return this.editor.getNodes().map(function(t){var n=e.area.nodeViews.get(t.id);return n?{width:t.width,height:t.height,left:n.position.x,top:n.position.y}:null}).filter(Boolean)}},{key:`render`,value:function(){var e=this,t=this.parentScope(),n=this.getNodesRect(),r=this.area.area.transform,i=this.area.container,a=i.clientWidth,o=i.clientHeight,s=this.minDistance,c=this.ratio,l={left:-r.x/r.k,top:-r.y/r.k,width:a/r.k,height:o/r.k},u=qR(this.boundViewport?[].concat(jP(n),[l]):n,s,c),d=u.origin,f=u.scale,p=u.invert;t.emit({type:`render`,data:{type:`minimap`,element:this.element,ratio:c,start:function(){return r},nodes:n.map(function(e){return{left:f(e.left+d.x),top:f(e.top+d.y),width:f(e.width),height:f(e.height)}}),viewport:{left:f(l.left+d.x),top:f(l.top+d.y),width:f(l.width),height:f(l.height)},translate:function(t,n){var i=r.x,a=r.y,o=r.k;e.area.area.translate(i+p(t)*o,a+p(n)*o)},point:function(t,n){var i={x:(d.x-p(t))*r.k,y:(d.y-p(n))*r.k},s={x:i.x+a/2,y:i.y+o/2};e.area.area.translate(s.x,s.y)}}})}}])}(lP),QR=N({__name:`CustomSocket`,props:{data:{}},setup(e){let t=e.data?.payload?.color||`#64748b`;return(e,n)=>(I(),L(`div`,{class:`socket`,style:ye({background:j(t)})},null,4))}}),$R=class extends TP.Socket{type;color;constructor(e,t){super(e),this.type=e,this.color=t}},ez={FEATURE:new $R(`feature`,`#34d399`),EFFECT:new $R(`effect`,`#f472b6`),LAYER:new $R(`layer`,`#fbbf24`),CONTROL:new $R(`control`,`#94a3b8`),ENV:new $R(`env`,`#a78bfa`),VOID:new $R(`void`,`#a78bfa`)},tz=e=>ez[e],nz=Array.from(new Set(MO.features.flatMap(e=>Object.keys(e.properties)))).map(e=>({label:e,value:e})),rz=[{label:`监测站 stations`,value:`stations`},{label:`仅告警 alarm`,value:`alarm`},{label:`风险 risk`,value:`risk`}],iz=[{label:`semantic`,value:`semantic`},{label:`blue`,value:`blue`},{label:`green`,value:`green`},{label:`warm`,value:`warm`}],az=[{label:`（无）`,value:``},{label:`告警三角`,value:`icon.alarm`},{label:`故障菱形`,value:`icon.fault`},{label:`正常圆+勾`,value:`icon.ok`},{label:`信息方+i`,value:`icon.info`},{label:`高亮星形`,value:`icon.sel`}],oz=[{label:`高`,value:`高`},{label:`中`,value:`中`},{label:`低`,value:`低`}],sz=[{label:`≥`,value:`>=`},{label:`≤`,value:`<=`},{label:`=`,value:`==`}],cz=[{label:`count`,value:`count`},{label:`sum`,value:`sum`},{label:`avg`,value:`avg`}],lz=[{label:`OSM`,value:`basemap.osm`},{label:`Esri 影像`,value:`basemap.esri-imagery`},{label:`Carto 浅色`,value:`basemap.carto-light`},{label:`天地图矢量`,value:`basemap.tianditu-vec`},{label:`高德矢量`,value:`basemap.amap-vec`}],uz=[{label:`比例尺 scale`,value:`scale`},{label:`归属 attribution`,value:`attribution`},{label:`缩放 zoom`,value:`zoom`}],dz=[{label:`graph`,value:`graph`},{label:`rete-route`,value:`rete-route`}],fz={"geojson-source":[{key:`dataset`,label:`数据集`,type:`select`,default:`stations`,options:rz}],"url-source":[{key:`dataset`,label:`数据集`,type:`select`,default:`risk`,options:rz}],"api-source":[{key:`dataset`,label:`数据集`,type:`select`,default:`alarm`,options:rz}],"mock-source":[{key:`count`,label:`数量`,type:`range`,default:8,min:1,max:8,step:1}],filter:[{key:`field`,label:`字段`,type:`select`,default:`risk`,options:nz},{key:`op`,label:`运算`,type:`select`,default:`>=`,options:sz},{key:`value`,label:`阈值`,type:`range`,default:.5,min:0,max:1,step:.05}],mapping:[{key:`from`,label:`源字段`,type:`select`,default:`level`,options:nz},{key:`to`,label:`目标值`,type:`select`,default:`高`,options:oz}],aggregate:[{key:`op`,label:`聚合`,type:`select`,default:`count`,options:cz},{key:`groupBy`,label:`分组`,type:`select`,default:`level`,options:nz}],buffer:[{key:`distance`,label:`距离`,type:`range`,default:800,min:100,max:5e3,step:100}],normalize:[{key:`scale`,label:`缩放`,type:`range`,default:1,min:.1,max:3,step:.1}],"pick-fields":[{key:`field`,label:`字段`,type:`select`,default:`name`,options:nz}],ripple:[{key:`color`,label:`颜色`,type:`color`,default:`#3b82f6`},{key:`period`,label:`周期`,type:`range`,default:1200,min:400,max:3e3,step:100},{key:`rings`,label:`环数`,type:`range`,default:4,min:2,max:8,step:1}],pulse:[{key:`color`,label:`颜色`,type:`color`,default:`#ef4444`},{key:`period`,label:`周期`,type:`range`,default:1e3,min:400,max:3e3,step:100},{key:`jumpPx`,label:`跳跃`,type:`range`,default:8,min:2,max:20,step:1}],wave:[{key:`color`,label:`颜色`,type:`color`,default:`#22c55e`},{key:`period`,label:`周期`,type:`range`,default:1400,min:400,max:3e3,step:100}],breathing:[{key:`color`,label:`颜色`,type:`color`,default:`#f59e0b`},{key:`period`,label:`周期`,type:`range`,default:1600,min:400,max:3e3,step:100}],carousel:[{key:`interval`,label:`间隔`,type:`range`,default:1500,min:500,max:4e3,step:100},{key:`autoStart`,label:`自动开始`,type:`toggle`,default:!0}],layer:[{key:`id`,label:`图层ID`,type:`text`,default:`stations`},{key:`name`,label:`名称`,type:`text`,default:`监测站`},{key:`description`,label:`描述`,type:`text`,default:``},{key:`colorField`,label:`配色字段`,type:`select`,default:`level`,options:nz},{key:`palette`,label:`色板`,type:`select`,default:`semantic`,options:iz},{key:`radius`,label:`半径`,type:`range`,default:9,min:4,max:20,step:1},{key:`icon`,label:`图标`,type:`select`,default:``,options:az},{key:`envAware`,label:`env联动`,type:`toggle`,default:!1}],output:[{key:`route`,label:`路由`,type:`select`,default:`graph`,options:dz}],"engine-run":[{key:`route`,label:`路由`,type:`select`,default:`graph`,options:dz}],basemap:[{key:`asset`,label:`底图`,type:`select`,default:`basemap.osm`,options:lz}],control:[{key:`id`,label:`控件`,type:`select`,default:`scale`,options:uz}],"env-context":[{key:`theme`,label:`主题`,type:`select`,default:`light`,options:[{label:`light`,value:`light`},{label:`dark`,value:`dark`}]},{key:`riskThreshold`,label:`风险阈值`,type:`range`,default:0,min:0,max:1,step:.05},{key:`scope`,label:`范围`,type:`select`,default:`all`,options:[{label:`all`,value:`all`},{label:`alarm`,value:`alarm`}]}],"map-init":[],"subrule-output":[]};function pz(e){return e===`alarm`?{...MO,features:MO.features.filter(e=>e.properties.type===`alarm`)}:e===`risk`?{...MO,features:MO.features.filter(e=>Number(e.properties.risk)>=.6)}:MO}function mz(e,t){let n=new TP.Node(hz(e)),r={};function i(e,t,r,i=!1){n.addInput(e,new TP.Input(tz(t),r,i))}function a(e,t,r,i=!0){n.addOutput(e,new TP.Output(tz(t),r,i))}switch(e){case`geojson-source`:case`url-source`:case`api-source`:case`mock-source`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`FEATURE`,`data`);break;case`filter`:case`mapping`:case`aggregate`:case`buffer`:case`normalize`:case`pick-fields`:i(`input`,`FEATURE`,`data`),a(`output`,`FEATURE`,`data`);break;case`ripple`:case`pulse`:case`wave`:case`breathing`:case`carousel`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`EFFECT`,`effect`);break;case`layer`:i(`data`,`FEATURE`,`data`),i(`effects`,`EFFECT`,`effects`,!0),a(`layer`,`LAYER`,`layer`);break;case`subrule-output`:i(`layer`,`LAYER`,`layer`),a(`output`,`LAYER`,`layer`);break;case`output`:i(`layer`,`LAYER`,`layer`),a(`output`,`CONTROL`,`done`);break;case`basemap`:case`control`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`CONTROL`,`done`);break;case`env-context`:i(`trigger`,`CONTROL`,`trigger`),a(`output`,`ENV`,`env`);break;case`map-init`:a(`output`,`CONTROL`,`trigger`);break;case`engine-run`:i(`control`,`CONTROL`,`trigger`),i(`layer`,`LAYER`,`layer`)}let o=fz[e]||[];for(let e of o)r[e.key]=e.default;return t.set(n.id,r),n.__gfType=e,n}function hz(e){return{"geojson-source":`数据源 · GeoJSON`,"url-source":`数据源 · URL`,"api-source":`数据源 · API`,"mock-source":`数据源 · Mock`,filter:`处理器 · filter`,mapping:`处理器 · mapping`,aggregate:`处理器 · aggregate`,buffer:`处理器 · buffer`,normalize:`处理器 · normalize`,"pick-fields":`处理器 · pick-fields`,ripple:`效果 · ripple`,pulse:`效果 · pulse`,wave:`效果 · wave`,breathing:`效果 · breathing`,carousel:`效果 · carousel`,layer:`图层子规则`,output:`地图输出`,basemap:`底图`,control:`控件`,"map-init":`开始 · 地图初始化`,"engine-run":`结束 · engine run`,"subrule-output":`子规则输出`,"env-context":`环境上下文`}[e]||e}function gz(e){return{"geojson-source":`GeoJSON 内联数据源，输出 FeatureCollection`,"url-source":`URL 远程 GeoJSON 数据源`,"api-source":`API 动态数据源（演示用告警子集）`,"mock-source":`Mock 随机点数据源`,filter:`按字段条件过滤要素`,mapping:`字段值映射改写`,aggregate:`按字段聚合统计`,buffer:`缓冲区分析`,normalize:`属性归一化`,"pick-fields":`只保留指定字段`,ripple:`涟漪扩散效果`,pulse:`点跳跃脉冲效果`,wave:`波浪扩散效果`,breathing:`呼吸灯效果`,carousel:`轮播高亮 + popup 跟随`,layer:`图层子规则（数据→处理器→样式→效果）`,output:`地图输出节点，触发 run(route)`,basemap:`底图资源`,control:`OL 控件（scale/attribution/zoom）`,"map-init":`流水线开始节点，输出 trigger 流`,"engine-run":`流水线结束节点，触发 engine.run(route)`,"subrule-output":`子规则产物输出，可串接下游`,"env-context":`外部环境变量（theme/riskThreshold/scope）注入`}[e]||``}var _z=[{group:`数据源`,items:[{type:`geojson-source`,label:`GeoJSON`},{type:`url-source`,label:`URL`},{type:`api-source`,label:`API`},{type:`mock-source`,label:`Mock`}]},{group:`处理器`,items:[{type:`filter`,label:`filter`},{type:`mapping`,label:`mapping`},{type:`aggregate`,label:`aggregate`},{type:`buffer`,label:`buffer`},{type:`normalize`,label:`normalize`},{type:`pick-fields`,label:`pick-fields`}]},{group:`效果`,items:[{type:`ripple`,label:`ripple`},{type:`pulse`,label:`pulse`},{type:`wave`,label:`wave`},{type:`breathing`,label:`breathing`},{type:`carousel`,label:`carousel`}]},{group:`图层 / 输出 / 底图控件`,items:[{type:`layer`,label:`图层子规则`},{type:`output`,label:`地图输出`},{type:`basemap`,label:`底图`},{type:`control`,label:`控件`}]},{group:`流程边界 / 环境上下文`,items:[{type:`map-init`,label:`开始`},{type:`engine-run`,label:`结束`},{type:`subrule-output`,label:`子规则输出`},{type:`env-context`,label:`环境上下文`}]}];function vz(e,t){switch(e){case`basemap`:return{id:String(t.asset||`basemap.osm`),url:``};case`control`:return{id:String(t.id||`scale`),options:{}};case`geojson-source`:case`url-source`:case`api-source`:case`mock-source`:return{type:`raw`,config:{data:pz(String(t.dataset||`stations`))}};case`filter`:return{ref:`filter`,options:{field:t.field,op:t.op,value:t.value}};case`mapping`:return{ref:`mapping`,options:{from:t.from,to:t.to}};case`aggregate`:return{ref:`aggregate`,options:{op:t.op,groupBy:t.groupBy}};case`buffer`:return{ref:`buffer`,options:{distance:t.distance}};case`normalize`:return{ref:`normalize`,options:{scale:t.scale}};case`pick-fields`:return{ref:`pick-fields`,options:{fields:[t.field]}};case`ripple`:return{ref:`ripple`,options:{color:t.color,period:t.period,rings:t.rings}};case`pulse`:return{ref:`pulse`,options:{color:t.color,period:t.period,jumpPx:t.jumpPx}};case`wave`:return{ref:`wave`,options:{color:t.color,period:t.period}};case`breathing`:return{ref:`breathing`,options:{color:t.color,period:t.period}};case`carousel`:return{ref:`carousel`,options:{interval:t.interval,autoStart:t.autoStart}};case`output`:return{routeName:String(t.route||`graph`)};case`engine-run`:return{routeName:String(t.route||`graph`)};case`map-init`:case`subrule-output`:return{};case`env-context`:return{theme:t.theme,riskThreshold:t.riskThreshold,scope:t.scope};case`layer`:{let e=String(t.colorField||`level`),n=String(t.palette||`semantic`),r=Number(t.radius??9),i=t.envAware===!0,a=String(t.description||``),o=i?{mode:`categorical`,colorField:e,palette:n,fillOpacity:.85,radius:r,color:(t,n)=>{let r={高:`#ef4444`,中:`#f59e0b`,低:`#22c55e`},i={高:`#f87171`,中:`#fbbf24`,低:`#4ade80`},a=String(t.get(e));return n.$env?.theme===`dark`?i[a]||`#4f8cff`:r[a]||`#4f8cff`},radius:(e,t)=>(6+Number(e.get(`risk`)||0)*10)*(t.$env?.theme===`dark`?.85:1),icon:t.icon?String(t.icon):void 0}:{mode:`categorical`,colorField:e,palette:n,fillOpacity:.85,radius:r,icon:t.icon||void 0};return{id:String(t.id||`layer`),name:String(t.name||`图层`),description:a,zIndex:10,style:o,effects:[],processors:i?[{inline:`(payload, ctx) => { const e = (ctx && ctx.env) || {}; const thr = Number(e.riskThreshold || 0); const scope = e.scope || "all"; const feats = payload.features.filter(f => { const r = Number(f.properties.risk); if (r < thr) return false; if (scope === "alarm" && f.properties.type !== "alarm") return false; return true; }); return { datasetId: payload.datasetId, geometryType: payload.geometryType, features: feats, fields: payload.fields }; }`}]:[]}}default:return{}}}var yz=[{label:`完整主规则链（开始/结束/子规则输出）`,graph:{version:`2.0.0`,name:`basic-chain-with-bounds`,nodes:[{id:`n1`,type:`map-init`,label:`开始 · 地图初始化`,params:{},position:{x:40,y:40}},{id:`n2`,type:`engine-run`,label:`结束 · engine run`,params:{},position:{x:980,y:40}},{id:`n3`,type:`geojson-source`,label:`数据源 · GeoJSON`,params:{},position:{x:40,y:180}},{id:`n4`,type:`filter`,label:`处理器 · filter`,params:{},position:{x:280,y:180}},{id:`n5`,type:`layer`,label:`图层子规则`,params:{},position:{x:520,y:180}},{id:`n6`,type:`subrule-output`,label:`子规则输出`,params:{},position:{x:780,y:180}},{id:`n7`,type:`basemap`,label:`底图`,params:{},position:{x:40,y:340}},{id:`n8`,type:`control`,label:`控件`,params:{},position:{x:220,y:340}},{id:`n9`,type:`ripple`,label:`效果 · ripple`,params:{},position:{x:520,y:340}},{id:`n10`,type:`env-context`,label:`环境上下文`,params:{},position:{x:40,y:480}}],connections:[{id:`c1`,source:`n1`,sourceOutput:`output`,target:`n2`,targetInput:`control`},{id:`c2`,source:`n3`,sourceOutput:`output`,target:`n4`,targetInput:`input`},{id:`c3`,source:`n4`,sourceOutput:`output`,target:`n5`,targetInput:`data`},{id:`c4`,source:`n5`,sourceOutput:`layer`,target:`n6`,targetInput:`layer`},{id:`c5`,source:`n6`,sourceOutput:`output`,target:`n2`,targetInput:`layer`},{id:`c6`,source:`n9`,sourceOutput:`output`,target:`n5`,targetInput:`effects`},{id:`c7`,source:`n1`,sourceOutput:`output`,target:`n10`,targetInput:`trigger`}]}},{label:`告警子规则（alarm + pulse）`,graph:{version:`2.0.0`,name:`alarm-subrule`,nodes:[{id:`n1`,type:`map-init`,label:`开始`,params:{},position:{x:40,y:40}},{id:`n2`,type:`engine-run`,label:`engine run`,params:{},position:{x:820,y:40}},{id:`n3`,type:`api-source`,label:`数据源 · API(告警)`,params:{},position:{x:40,y:180}},{id:`n4`,type:`layer`,label:`告警图层`,params:{},position:{x:320,y:180}},{id:`n5`,type:`subrule-output`,label:`子规则输出`,params:{},position:{x:600,y:180}},{id:`n6`,type:`basemap`,label:`底图`,params:{},position:{x:40,y:340}},{id:`n7`,type:`pulse`,label:`效果 · pulse`,params:{},position:{x:320,y:340}},{id:`n8`,type:`control`,label:`控件`,params:{},position:{x:220,y:340}}],connections:[{id:`c1`,source:`n1`,sourceOutput:`output`,target:`n2`,targetInput:`control`},{id:`c2`,source:`n3`,sourceOutput:`output`,target:`n4`,targetInput:`data`},{id:`c3`,source:`n4`,sourceOutput:`layer`,target:`n5`,targetInput:`layer`},{id:`c4`,source:`n5`,sourceOutput:`output`,target:`n2`,targetInput:`layer`},{id:`c5`,source:`n7`,sourceOutput:`output`,target:`n4`,targetInput:`effects`}]}}],bz={key:0,class:`pp`},xz={class:`pp__head`},Sz={class:`pp__type`},Cz={class:`pp__id`},wz={class:`pp__desc`},Tz={class:`pp__fields`},Ez=[`value`,`onChange`],Dz=[`value`],Oz=[`min`,`max`,`step`,`value`,`onInput`],kz=[`value`,`onInput`],Az=[`value`,`onInput`],jz=[`checked`,`onChange`],Mz={key:5,class:`pp__val`},Nz={key:6,class:`pp__val`},Pz={key:0,class:`pp__empty`},Fz={key:1,class:`pp pp--empty`},Iz=lu(N({__name:`ParamPanel`,props:{selectedId:{},selectedType:{},paramsMap:{}},emits:[`applied`],setup(e,{emit:t}){let n=e,r=t,i=A({});er(()=>[n.selectedId,n.selectedType],()=>{if(!n.selectedId||!n.selectedType){i.value={};return}let e=n.paramsMap.get(n.selectedId)||{};i.value={...e}},{immediate:!0});let a=to(()=>n.selectedType&&fz[n.selectedType]||[]),o=to(()=>n.selectedType?gz(n.selectedType):``),s=to(()=>n.selectedType?hz(n.selectedType):``);function c(e,t){if(i.value={...i.value,[e]:t},n.selectedId){let r=n.paramsMap.get(n.selectedId)||{};n.paramsMap.set(n.selectedId,{...r,[e]:t})}r(`applied`)}return(t,n)=>e.selectedId&&e.selectedType?(I(),L(`div`,bz,[R(`div`,xz,[R(`span`,Sz,k(s.value),1),R(`span`,Cz,`#`+k(e.selectedId.slice(0,6)),1)]),R(`p`,wz,k(o.value),1),R(`div`,Tz,[(I(!0),L(F,null,P(a.value,e=>(I(),L(`div`,{key:e.key,class:`pp__row`},[R(`label`,null,k(e.label),1),e.type===`select`?(I(),L(`select`,{key:0,value:i.value[e.key],onChange:t=>c(e.key,t.target.value)},[(I(!0),L(F,null,P(e.options,e=>(I(),L(`option`,{key:e.value,value:e.value},k(e.label),9,Dz))),128))],40,Ez)):e.type===`range`?(I(),L(`input`,{key:1,type:`range`,min:e.min,max:e.max,step:e.step,value:i.value[e.key],onInput:t=>c(e.key,Number(t.target.value))},null,40,Oz)):e.type===`color`?(I(),L(`input`,{key:2,type:`color`,value:i.value[e.key],onInput:t=>c(e.key,t.target.value)},null,40,kz)):e.type===`text`?(I(),L(`input`,{key:3,type:`text`,value:i.value[e.key],onInput:t=>c(e.key,t.target.value)},null,40,Az)):e.type===`toggle`?(I(),L(`input`,{key:4,type:`checkbox`,checked:!!i.value[e.key],onChange:t=>c(e.key,t.target.checked)},null,40,jz)):B(``,!0),e.type===`range`?(I(),L(`span`,Mz,k(i.value[e.key]),1)):e.type===`toggle`?(I(),L(`span`,Nz,k(i.value[e.key]?`on`:`off`),1)):B(``,!0)]))),128)),a.value.length?B(``,!0):(I(),L(`p`,Pz,`该节点无可配参数（流程边界/透传节点）`))]),n[0]||=R(`p`,{class:`pp__tip`},`改参数后点上方「▶ 运行」生效`,-1)])):(I(),L(`div`,Fz,[...n[1]||=[R(`p`,null,`点选画布节点 → 在此配置参数`,-1)]]))}}),[[`__scopeId`,`data-v-7a3fd89d`]]),Lz={class:`re`},Rz={class:`re__bar`},zz={class:`re__preset`},Bz=[`value`],Vz={class:`re__body`},Hz={class:`re__canvas-wrap`},Uz={class:`re__palette`},Wz={class:`re__group-label`},Gz=[`onClick`],Kz={class:`re__side`},qz={class:`re__env`},Jz={class:`re__env-row`},Yz={class:`re__seg`},Xz={class:`re__env-row`},Zz={class:`re__env-row`},Qz={class:`re__seg`},$z={class:`re__log`},eB={class:`re__tpl`},tB={class:`re__tpl-input`},nB={key:0,class:`re__tpl-empty`},rB={class:`re__tpl-name`},iB=[`onClick`],aB=[`onClick`],oB={class:`re__json`},sB=`gf-rete-templates`,cB=lu(N({__name:`ReteEditorPage`,setup(e){let t=A(),n=A(),r=dn(null),i=A(``),a=A(``),o=A({theme:`light`,riskThreshold:0,scope:`all`}),s=A(null),c=A(null),l=A(0),u=new Map,d=new Map,f=null,p=null,m=null;async function h(e,t=0,n=0){let r=mz(e,u);return d.set(r.id,e),await f.addNode(r),p.translate(r.id,{x:t,y:n}),r}async function g(e){if(!f||!p)return;for(let e of[...f.getNodes()])try{await f.removeNode(e.id)}catch{}u.clear(),d.clear();let t=new Map;for(let n of e.nodes){let e=mz(n.type,u);d.set(e.id,n.type),e.__gfType=n.type,n.label&&(e.label=n.label),await f.addNode(e),p.translate(e.id,n.position),t.set(n.id,e)}for(let n of e.connections){let e=t.get(n.source),r=t.get(n.target);if(e&&r)try{await f.addConnection(new TP.Connection(e,n.sourceOutput,r,n.targetInput))}catch{}}setTimeout(()=>xF.zoomAt(p,f.getNodes()),60)}async function _(){await g(yz[l.value].graph),E()}let v=A(y());function y(){try{let e=localStorage.getItem(sB);return e?JSON.parse(e):[]}catch{return[]}}function b(){localStorage.setItem(sB,JSON.stringify(v.value))}function x(e){let t=f.getNodes();if(!t.length)return;let n=t.map(e=>p.nodeViews.get(e.id)?.position||{x:0,y:0}),r=Math.min(...n.map(e=>e.x)),i=Math.min(...n.map(e=>e.y)),a=new Map(t.map((e,t)=>[e.id,t])),o=t.map((e,t)=>({type:d.get(e.id)||e.__gfType||`comment`,dx:Math.round(n[t].x-r),dy:Math.round(n[t].y-i)})),s=f.getConnections().map(e=>({s:a.get(e.source)??-1,sOut:e.sourceOutput,t:a.get(e.target)??-1,tIn:e.targetInput})).filter(e=>e.s>=0&&e.t>=0);v.value.push({name:e,nodes:o,conns:s}),b()}async function S(e,t=40,n=80){let r=[];for(let i of e.nodes){let e=await h(i.type,t+i.dx,n+i.dy);r.push(e)}for(let t of e.conns){let e=r[t.s],n=r[t.t];e&&n&&await f.addConnection(new TP.Connection(e,t.sOut,n,t.tIn))}setTimeout(()=>xF.zoomAt(p,f.getNodes()),60)}function C(e){v.value.splice(e,1),b()}let w=A(``);function T(){return{version:`2.0.0`,name:`rete-editor`,nodes:f.getNodes().map(e=>{let t=e.__gfType||d.get(e.id)||`comment`,n=u.get(e.id)||{},r=p.nodeViews.get(e.id);return{id:e.id,type:t,label:e.label,params:vz(t,n),position:{x:r?.position?.x||0,y:r?.position?.y||0}}}),connections:f.getConnections().map(e=>({id:e.id,source:e.source,sourceOutput:e.sourceOutput,target:e.target,targetInput:e.targetInput}))}}function E(){if(!r.value)return;let e=T();r.value.env.set(`theme`,o.value.theme),r.value.env.set(`riskThreshold`,o.value.riskThreshold),r.value.env.set(`scope`,o.value.scope);let t=e.nodes.filter(e=>e.type===`env-context`);t.forEach(e=>{e.params.theme!=null&&r.value.env.set(`theme`,e.params.theme),e.params.riskThreshold!=null&&r.value.env.set(`riskThreshold`,e.params.riskThreshold),e.params.scope!=null&&r.value.env.set(`scope`,e.params.scope)});let n=yE(e);i.value=JSON.stringify(n,null,2),r.value.fromJSON(n);let s=(e.nodes.find(e=>e.type===`engine-run`)||e.nodes.find(e=>e.type===`output`||e.type===`map-output`))?.params?.routeName||`graph`;r.value.run(s,{}),a.value=`运行 route=${s} · 图层 ${n.layers?.length||0} · 底图 ${n.baseLayers?.length||0} · env节点 ${t.length}`}function D(){m?.undo?.()}function ee(){m?.redo?.()}function O(e){o.value.theme=e}function te(e){o.value.scope=e}function ne(){if(!f||!p)return;let e=f.getNodes().find(e=>p.nodeViews.get(e.id)?.selected);e?(s.value=e.id,c.value=d.get(e.id)||e.__gfType||null):(s.value=null,c.value=null)}let re=null;async function ie(){if(!t.value)return;f=new hP,p=new EF(t.value);let e=new UL;e.addPreset(PL.classic.setup({customize:{socket(){return QR}}})),e.addPreset(PL.minimap.setup({size:160}));let n=new cI;n.addPreset(tI.classic.setup()),m=new GR,m.addPreset(VR.classic.setup());let r=new ZR;f.use(p),p.use(e),p.use(n),f.use(m),p.use(r),xF.simpleNodesOrder(p),xF.selectableNodes(p,xF.selector(),{accumulating:xF.accumulateOnCtrl()}),sR.keyboard(m),await g(yz[0].graph)}return Ir(async()=>{await ie(),r.value=WT({target:n.value}),r.value.env.set(`theme`,o.value.theme),r.value.env.set(`riskThreshold`,o.value.riskThreshold),r.value.env.set(`scope`,o.value.scope),E(),re=setInterval(ne,200)}),Br(()=>{re&&=(clearInterval(re),null);try{f?.getNodes?.().forEach(e=>f.removeNode(e.id))}catch{}r.value?.destroy(),f=null,p=null,m=null}),(e,r)=>(I(),L(`div`,Lz,[R(`header`,Rz,[r[9]||=R(`span`,{class:`re__title`},`geo-flow · rete v2 原生画布（UE/Blender 深色）`,-1),r[10]||=R(`span`,{class:`re__hint`},`typed sockets 契约 · 子规则流水线 · 下拉/滑块控件 · env 注入`,-1),r[11]||=R(`span`,{class:`re__bar-spacer`},null,-1),R(`div`,zz,[r[8]||=R(`label`,null,`预置示例`,-1),M(R(`select`,{"onUpdate:modelValue":r[0]||=e=>l.value=e,onChange:_},[(I(!0),L(F,null,P(j(yz),(e,t)=>(I(),L(`option`,{key:t,value:t},k(e.label),9,Bz))),128))],544),[[es,l.value,void 0,{number:!0}]])])]),R(`div`,Vz,[R(`section`,Hz,[R(`div`,Uz,[(I(!0),L(F,null,P(j(_z),e=>(I(),L(`div`,{key:e.group,class:`re__group`},[R(`span`,Wz,k(e.group),1),(I(!0),L(F,null,P(e.items,e=>(I(),L(`button`,{key:e.type,onClick:t=>h(e.type,40+Math.random()*400,80+Math.random()*300)},k(e.label),9,Gz))),128))]))),128)),r[12]||=R(`span`,{class:`re__sep`},null,-1),R(`button`,{onClick:D},`undo`),R(`button`,{onClick:ee},`redo`),R(`button`,{class:`re__run`,onClick:E},`▶ 运行`)]),R(`div`,{class:`re__canvas`,ref_key:`reteEl`,ref:t},null,512)]),R(`section`,Kz,[z(Iz,{"selected-id":s.value,"selected-type":c.value,"params-map":j(u)},null,8,[`selected-id`,`selected-type`,`params-map`]),R(`div`,{class:`re__map`,ref_key:`mapEl`,ref:n},null,512),R(`div`,qz,[r[17]||=R(`div`,{class:`re__env-title`},`外部环境变量注入（engine.env）`,-1),R(`div`,Jz,[r[13]||=R(`label`,null,`theme`,-1),R(`div`,Yz,[R(`button`,{class:we({on:o.value.theme===`light`}),onClick:r[1]||=e=>O(`light`)},`light`,2),R(`button`,{class:we({on:o.value.theme===`dark`}),onClick:r[2]||=e=>O(`dark`)},`dark`,2)])]),R(`div`,Xz,[r[14]||=R(`label`,null,`riskThreshold`,-1),M(R(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,"onUpdate:modelValue":r[3]||=e=>o.value.riskThreshold=e},null,512),[[Zo,o.value.riskThreshold,void 0,{number:!0}]]),R(`span`,null,k(o.value.riskThreshold.toFixed(2)),1)]),R(`div`,Zz,[r[15]||=R(`label`,null,`scope`,-1),R(`div`,Qz,[R(`button`,{class:we({on:o.value.scope===`all`}),onClick:r[4]||=e=>te(`all`)},`all`,2),R(`button`,{class:we({on:o.value.scope===`alarm`}),onClick:r[5]||=e=>te(`alarm`)},`alarm`,2)])]),R(`button`,{class:`re__apply`,onClick:E},`应用 env 并重跑`),R(`div`,$z,k(a.value),1),R(`div`,eB,[r[16]||=R(`div`,{class:`re__env-title`},`子规则模板（localStorage）`,-1),R(`div`,tB,[M(R(`input`,{"onUpdate:modelValue":r[6]||=e=>w.value=e,placeholder:`模板名`},null,512),[[Zo,w.value]]),R(`button`,{onClick:r[7]||=e=>{x(w.value||`模板`+(v.value.length+1)),w.value=``}},`存当前图`)]),v.value.length?B(``,!0):(I(),L(`div`,nB,`暂无模板，先存一个`)),(I(!0),L(F,null,P(v.value,(e,t)=>(I(),L(`div`,{key:t,class:`re__tpl-item`},[R(`span`,rB,[ka(k(e.name)+` `,1),R(`em`,null,`(`+k(e.nodes.length)+` 节点)`,1)]),R(`button`,{onClick:t=>S(e)},`展开`,8,iB),R(`button`,{class:`re__tpl-del`,onClick:e=>C(t)},`删`,8,aB)]))),128))])]),R(`details`,oB,[r[18]||=R(`summary`,null,`导出 MapConfigJSON（graphToMapConfig）`,-1),R(`pre`,null,k(i.value),1)])])])]))}}),[[`__scopeId`,`data-v-6443d1f4`]]),lB={class:`app`},uB={class:`app__stage`},dB={class:`app__mapbox`},fB={class:`dk__side`},pB={class:`dk__row`},mB=[`value`],hB={class:`dk__stats`},gB={class:`dk__row`},_B=[`value`],vB=[`value`],yB={class:`dk__row`},bB=[`value`],xB=[`value`],SB={class:`dk__row`},CB=[`value`],wB={class:`dk__row dk__row--check`},TB=[`checked`],EB=[`checked`],DB={class:`dk__list`},OB={class:`dk__li-title`},kB={class:`dk__li-meta`},AB={class:`dk__json`},jB=lu(N({__name:`DockLayoutDemo`,setup(e){aE(`note-panel`,N({name:`NotePanel`,props:{engine:{type:Object,default:null},text:{type:String,default:`说明`}},setup(e){let t=to(()=>e.engine?.engines?.size??0);return()=>[V(`div`,{class:`dk__note-title`},e.text),V(`div`,{class:`dk__note-line`},`由 registerWidget 注册，dock 只按 type 解析`),V(`div`,{class:`dk__note-line`},`当前引擎图层数：`+t.value)]}}),{title:`业务说明`});let t=A(),n=dn(null),r=pE(),i=[`top-left`,`top-center`,`top-right`,`left`,`right`,`bottom-left`,`bottom-center`,`bottom-right`],a=[`none`,`row`,`column`,`full`],o=[{id:`toolbar`,type:`map-toolbar`,title:`地图工具`,position:`top-right`,priority:5},{id:`note`,type:`note-panel`,title:`顶部通栏`,position:`top-center`,span:`row`,priority:4},{id:`tree`,type:`layer-tree`,title:`图层树`,position:`top-left`,priority:3,collapsible:!0},{id:`leftbar`,type:`note-panel`,title:`左侧整条`,position:`left`,span:`column`,priority:2},{id:`legend`,type:`legend`,title:`图例`,position:`bottom-left`,priority:1},{id:`stat`,type:`stat-panel`,title:`统计`,position:`bottom-right`,priority:0,collapsible:!0,defaultCollapsed:!0}],s=A(`tree`),c=A(0);function l(e){let t=r.manager.get(s.value);t&&(r.dock({...t,...e}),n.value?.loadDock(r.snapshot()),c.value+=1)}let u=to(()=>(c.value,r.manager.get(s.value))),d=to(()=>(c.value,r.manager.sorted().map(e=>({id:e.id,title:e.title||e.type,position:e.position,span:e.span||`none`,priority:e.priority??0,order:r.manager.runtimeState(e.id)?.order??0,visible:e.visible!==!1})))),f=to(()=>(c.value,JSON.stringify(r.snapshot(),null,2)));function p(){let e=`w-`+Date.now().toString(36);r.dock({id:e,type:`note-panel`,title:`新微件 `+e.slice(3),position:`bottom-center`,priority:0}),s.value=e,c.value+=1}function m(e){let t=r.manager.get(e);t&&(r.setVisible(e,t.visible===!1),c.value+=1)}function h(e){r.toggleCollapse(e),c.value+=1}function g(){r.clear(),o.forEach(e=>r.dock(e)),c.value+=1}return Ir(()=>{n.value=WT({target:t.value}),n.value.baseLayer(`basemap.osm`),n.value.run(`dock-demo`,{}),n.value.dockManager.clear(),o.forEach(e=>n.value.dockManager.dock(e)),r.load(n.value.dockJSON()),c.value+=1}),Br(()=>{n.value?.destroy(),n.value=null}),(e,o)=>(I(),L(`div`,lB,[o[14]||=R(`header`,{class:`app__bar`},[R(`span`,{class:`app__title`},`geo-flow · 示例 11 · Dock 停靠布局`),R(`span`,{class:`app__hint`},`Widget 是 dock 的管理对象 · 跨行/跨列 · priority 排序 · 隐藏/折叠 · 跨区拖放`)],-1),R(`div`,uB,[R(`div`,dB,[R(`div`,{class:`app__map`,ref_key:`mapEl`,ref:t},null,512),z(j(fE),{engine:n.value,manager:j(r).manager},null,8,[`engine`,`manager`])]),R(`div`,fB,[o[11]||=R(`div`,{class:`dk__side-head`},`停靠面板（Widget）`,-1),R(`div`,pB,[o[6]||=R(`label`,null,`选中微件`,-1),M(R(`select`,{"onUpdate:modelValue":o[0]||=e=>s.value=e},[(I(!0),L(F,null,P(d.value,e=>(I(),L(`option`,{key:e.id,value:e.id},k(e.title)+`（`+k(e.position)+`） `,9,mB))),128))],512),[[es,s.value]])]),R(`div`,hB,` priority `+k(u.value?.priority??0)+` · order `+k(u.value?j(r).runtimeState(u.value.id)?.order:0)+` · span `+k(u.value?.span??`none`)+` · `+k(u.value?.visible===!1?`hidden`:`visible`),1),R(`div`,gB,[o[7]||=R(`label`,null,`position`,-1),R(`select`,{value:u.value?.position,onChange:o[1]||=e=>l({position:e.target.value})},[(I(),L(F,null,P(i,e=>R(`option`,{key:e,value:e},k(e),9,vB)),64))],40,_B)]),R(`div`,yB,[o[8]||=R(`label`,null,`span`,-1),R(`select`,{value:u.value?.span??`none`,onChange:o[2]||=e=>l({span:e.target.value})},[(I(),L(F,null,P(a,e=>R(`option`,{key:e,value:e},k(e),9,xB)),64))],40,bB)]),R(`div`,SB,[R(`label`,null,`priority `+k(u.value?.priority??0),1),R(`input`,{type:`range`,min:`0`,max:`9`,value:u.value?.priority??0,onInput:o[3]||=e=>l({priority:Number(e.target.value)})},null,40,CB)]),R(`div`,wB,[R(`label`,null,[R(`input`,{type:`checkbox`,checked:u.value?.visible!==!1,onChange:o[4]||=e=>m(s.value)},null,40,TB),o[9]||=ka(` visible`,-1)]),R(`label`,null,[R(`input`,{type:`checkbox`,checked:!!j(r).isCollapsed(s.value),onChange:o[5]||=e=>h(s.value)},null,40,EB),o[10]||=ka(` collapsed`,-1)])]),R(`div`,{class:`dk__btns`},[R(`button`,{type:`button`,onClick:p},`+ 新增微件`),R(`button`,{type:`button`,onClick:g},`复位布局`)]),o[12]||=R(`div`,{class:`dk__side-head dk__side-head--sub`},`排序（priority ↓ → 添加序 ↑）`,-1),R(`ul`,DB,[(I(!0),L(F,null,P(d.value,e=>(I(),L(`li`,{key:e.id,class:we({"dk__list--off":!e.visible})},[R(`span`,OB,k(e.title),1),R(`span`,kB,k(e.position)+` / `+k(e.span)+` / p`+k(e.priority)+` / #`+k(e.order),1)],2))),128))]),o[13]||=R(`div`,{class:`dk__side-head dk__side-head--sub`},`dock 声明式序列化`,-1),R(`pre`,AB,k(f.value),1)])])]))}}),[[`__scopeId`,`data-v-1d1c6783`]]),MB=Zl({history:yl(),routes:[{path:`/`,redirect:`/basic-chain`},{path:`/basic-chain`,name:`basic-chain`,component:NE,meta:{title:`示例 01 · 链式调用最小链路`,code:`./demos/01-basic-chain/BasicChainDemo.vue`}},{path:`/anonymous-layer`,name:`anonymous-layer`,component:GE,meta:{title:`示例 02 · 匿名图层 JSON 注册`,code:`./demos/02-anonymous-layer/AnonymousLayerDemo.vue`}},{path:`/predefined-layer`,name:`predefined-layer`,component:eD,meta:{title:`示例 03 · 业务图层类继承预定义`,code:`./demos/03-predefined-layer/PredefinedLayerDemo.vue`}},{path:`/external-config`,name:`external-config`,component:tO,meta:{title:`示例 04 · 外部 JSON 配置引擎`,code:`./demos/04-external-config/ExternalConfigDemo.vue`}},{path:`/expression-style`,name:`expression-style`,component:dO,meta:{title:`示例 05 · 表达式三态参数`,code:`./demos/05-expression-style/ExpressionStyleDemo.vue`}},{path:`/processors-all`,name:`processors-all`,component:SO,meta:{title:`示例 06 · 内置数据处理器`,code:`./demos/06-processors-all/ProcessorsAllDemo.vue`}},{path:`/effects-all`,name:`effects-all`,component:jO,meta:{title:`示例 07 · 内置效果`,code:`./demos/07-effects-all/EffectsAllDemo.vue`}},{path:`/carousel-popup`,name:`carousel-popup`,component:JO,meta:{title:`示例 08 · 轮播 + Popup 联动`,code:`./demos/08-carousel-popup/CarouselPopupDemo.vue`}},{path:`/custom-plugin`,name:`custom-plugin`,component:nk,meta:{title:`示例 09 · 自定义插件`,code:`./demos/09-custom-plugin/CustomPluginDemo.vue`}},{path:`/with-rete`,name:`with-rete`,component:wk,meta:{title:`示例 10 · 可视化编排（rete 桥接）`}},{path:`/style/single`,name:`style-single`,component:IA,meta:{title:`配图 2.1 · 单值`,code:`./demos/style/SingleStyleDemo.vue`}},{path:`/style/categorical`,name:`style-categorical`,component:WA,meta:{title:`配图 2.2 · 分类`,code:`./demos/style/CategoricalStyleDemo.vue`}},{path:`/style/expression`,name:`style-expression`,component:QA,meta:{title:`配图 2.3 · 表达式`,code:`./demos/style/ExpressionStyleDemo.vue`}},{path:`/style/function`,name:`style-function`,component:oj,meta:{title:`配图 2.4 · 函数`,code:`./demos/style/FunctionStyleDemo.vue`}},{path:`/style/multi`,name:`style-multi`,component:mj,meta:{title:`配图 2.5 · 多属性`,code:`./demos/style/MultiAttrStyleDemo.vue`}},{path:`/style/stage`,name:`style-stage`,component:Oj,meta:{title:`配图 2.6 · 分阶段链式 + 规则引擎`,code:`./demos/style/StageBuilderDemo.vue`}},{path:`/effect/ripple`,name:`effect-ripple`,component:Jj,meta:{title:`效果 3.1 · ripple`,code:`./demos/effects/RipplePlayground.vue`}},{path:`/effect/pulse`,name:`effect-pulse`,component:Yj,meta:{title:`效果 3.2 · pulse`,code:`./demos/effects/PulsePlayground.vue`}},{path:`/effect/wave`,name:`effect-wave`,component:Xj,meta:{title:`效果 3.3 · wave`,code:`./demos/effects/WavePlayground.vue`}},{path:`/effect/breathing`,name:`effect-breathing`,component:Zj,meta:{title:`效果 3.4 · breathing`,code:`./demos/effects/BreathingPlayground.vue`}},{path:`/effect/carousel`,name:`effect-carousel`,component:dM,meta:{title:`效果 3.5 · carousel`,code:`./demos/effects/CarouselPlayground.vue`}},{path:`/effect/custom`,name:`effect-custom`,component:SM,meta:{title:`效果 3.6 · 自定义效果`,code:`./demos/effects/CustomEffectPlayground.vue`}},{path:`/layer/append`,name:`layer-append`,component:BM,meta:{title:`基础图层 4.1 · appendData`,code:`./demos/layer/AppendDataDemo.vue`}},{path:`/layer/update`,name:`layer-update`,component:QM,meta:{title:`基础图层 4.2 · updateData`,code:`./demos/layer/UpdateDataDemo.vue`}},{path:`/layer/restore`,name:`layer-restore`,component:fN,meta:{title:`基础图层 4.3 · keepOriginal+restore`,code:`./demos/layer/RestoreDataDemo.vue`}},{path:`/layer/playground`,name:`layer-playground`,component:EN,meta:{title:`基础图层 4.4 · 综合数据操作`,code:`./demos/layer/MultiDatasetDemo.vue`}},{path:`/env-injection`,name:`env-injection`,component:LN,meta:{title:`环境响应 · env 注入响应式`,code:`./demos/env/EnvInjectionDemo.vue`}},{path:`/rete-editor`,name:`rete-editor`,component:cB,meta:{title:`可视化编排 · rete v2 原生画布`}},{path:`/dock-layout`,name:`dock-layout`,component:jB,meta:{title:`停靠布局 · Widget 由 dock 托管`,code:`./demos/dock/DockLayoutDemo.vue`}},{path:`/popup-filter`,name:`popup-filter`,component:iD,meta:{title:`进阶 · 链式配置 + 本地筛选 + 自定义 Popup`,code:`./demos/advanced/PopupFilterDemo.vue`}},{path:`/config`,name:`config`,component:DD,meta:{title:`进阶 · 全局配置中心`,code:`./demos/advanced/ConfigDemo.vue`}},{path:`/map-style`,name:`map-style`,component:KD,meta:{title:`进阶 · StyleEngine 全局配图`,code:`./demos/advanced/MapStyleDemo.vue`}}]});ds(wu).use(MB).mount(`#app`);