function va(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=va(jp);function Vu(t){return!!t||t===""}function wa(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?zp(s):wa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(Re(t))return t}}const Hp=/;(?![^(]*\))/g,Kp=/:(.+)/;function zp(t){const e={};return t.split(Hp).forEach(n=>{if(n){const s=n.split(Kp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ea(t){let e="";if(xe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Ea(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const MT=t=>xe(t)?t:t==null?"":G(t)||Re(t)&&(t.toString===Ku||!Y(t.toString))?JSON.stringify(t,ju,2):String(t),ju=(t,e)=>e&&e.__v_isRef?ju(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:qu(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!G(e)&&!zu(e)?String(e):e,he={},jn=[],yt=()=>{},Gp=()=>!1,Wp=/^on[^a-z]/,wi=t=>Wp.test(t),_a=t=>t.startsWith("onUpdate:"),Ke=Object.assign,ba=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xp=Object.prototype.hasOwnProperty,ne=(t,e)=>Xp.call(t,e),G=Array.isArray,qn=t=>Ei(t)==="[object Map]",qu=t=>Ei(t)==="[object Set]",Y=t=>typeof t=="function",xe=t=>typeof t=="string",Ta=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Hu=t=>Re(t)&&Y(t.then)&&Y(t.catch),Ku=Object.prototype.toString,Ei=t=>Ku.call(t),Yp=t=>Ei(t).slice(8,-1),zu=t=>Ei(t)==="[object Object]",Ca=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_i=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qp=/-(\w)/g,Gn=_i(t=>t.replace(Qp,(e,n)=>n?n.toUpperCase():"")),Jp=/\B([A-Z])/g,cs=_i(t=>t.replace(Jp,"-$1").toLowerCase()),Gu=_i(t=>t.charAt(0).toUpperCase()+t.slice(1)),eo=_i(t=>t?`on${Gu(t)}`:""),Vs=(t,e)=>!Object.is(t,e),Ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},To=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wc;const Zp=()=>Wc||(Wc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Rt;class Wu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Rt&&(this.parent=Rt,this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Rt=this,e()}finally{Rt=this.parent}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function eg(t){return new Wu(t)}function tg(t,e=Rt){e&&e.active&&e.effects.push(t)}const Sa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xu=t=>(t.w&Yt)>0,Yu=t=>(t.n&Yt)>0,ng=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yt},sg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Xu(r)&&!Yu(r)?r.delete(t):e[n++]=r,r.w&=~Yt,r.n&=~Yt}e.length=n}},Co=new WeakMap;let Ss=0,Yt=1;const So=30;let Ct;const dn=Symbol(""),Io=Symbol("");class Ia{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tg(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=Kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,Kt=!0,Yt=1<<++Ss,Ss<=So?ng(this):Xc(this),this.fn()}finally{Ss<=So&&sg(this),Yt=1<<--Ss,Ct=this.parent,Kt=n,this.parent=void 0}}stop(){this.active&&(Xc(this),this.onStop&&this.onStop(),this.active=!1)}}function Xc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kt=!0;const Qu=[];function ls(){Qu.push(Kt),Kt=!1}function us(){const t=Qu.pop();Kt=t===void 0?!0:t}function ct(t,e,n){if(Kt&&Ct){let s=Co.get(t);s||Co.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Sa()),Ju(r)}}function Ju(t,e){let n=!1;Ss<=So?Yu(t)||(t.n|=Yt,n=!Xu(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Pt(t,e,n,s,r,i){const o=Co.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Ca(n)&&a.push(o.get("length")):(a.push(o.get(dn)),qn(t)&&a.push(o.get(Io)));break;case"delete":G(t)||(a.push(o.get(dn)),qn(t)&&a.push(o.get(Io)));break;case"set":qn(t)&&a.push(o.get(dn));break}if(a.length===1)a[0]&&Ao(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ao(Sa(c))}}function Ao(t,e){for(const n of G(t)?t:[...t])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const rg=va("__proto__,__v_isRef,__isVue"),Zu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ta)),ig=Aa(),og=Aa(!1,!0),ag=Aa(!0),Yc=cg();function cg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let i=0,o=this.length;i<o;i++)ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ls();const s=se(this)[e].apply(this,n);return us(),s}}),t}function Aa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Cg:rh:e?sh:nh).get(s))return s;const o=G(s);if(!t&&o&&ne(Yc,r))return Reflect.get(Yc,r,i);const a=Reflect.get(s,r,i);return(Ta(r)?Zu.has(r):rg(r))||(t||ct(s,"get",r),e)?a:Me(a)?!o||!Ca(r)?a.value:a:Re(a)?t?ih(a):ar(a):a}}const lg=eh(),ug=eh(!0);function eh(t=!1){return function(n,s,r,i){let o=n[s];if(js(o)&&Me(o)&&!Me(r))return!1;if(!t&&!js(r)&&(oh(r)||(r=se(r),o=se(o)),!G(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=G(n)&&Ca(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===se(i)&&(a?Vs(r,o)&&Pt(n,"set",s,r):Pt(n,"add",s,r)),c}}function hg(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Pt(t,"delete",e,void 0),s}function fg(t,e){const n=Reflect.has(t,e);return(!Ta(e)||!Zu.has(e))&&ct(t,"has",e),n}function dg(t){return ct(t,"iterate",G(t)?"length":dn),Reflect.ownKeys(t)}const th={get:ig,set:lg,deleteProperty:hg,has:fg,ownKeys:dg},pg={get:ag,set(t,e){return!0},deleteProperty(t,e){return!0}},gg=Ke({},th,{get:og,set:ug}),Ra=t=>t,bi=t=>Reflect.getPrototypeOf(t);function Sr(t,e,n=!1,s=!1){t=t.__v_raw;const r=se(t),i=se(e);e!==i&&!n&&ct(r,"get",e),!n&&ct(r,"get",i);const{has:o}=bi(r),a=s?Ra:n?Da:qs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ir(t,e=!1){const n=this.__v_raw,s=se(n),r=se(t);return t!==r&&!e&&ct(s,"has",t),!e&&ct(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Ar(t,e=!1){return t=t.__v_raw,!e&&ct(se(t),"iterate",dn),Reflect.get(t,"size",t)}function Qc(t){t=se(t);const e=se(this);return bi(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function Jc(t,e){e=se(e);const n=se(this),{has:s,get:r}=bi(n);let i=s.call(n,t);i||(t=se(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Vs(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function Zc(t){const e=se(this),{has:n,get:s}=bi(e);let r=n.call(e,t);r||(t=se(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Pt(e,"delete",t,void 0),i}function el(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function Rr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=se(o),c=e?Ra:t?Da:qs;return!t&&ct(a,"iterate",dn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function kr(t,e,n){return function(...s){const r=this.__v_raw,i=se(r),o=qn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ra:e?Da:qs;return!e&&ct(i,"iterate",c?Io:dn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function mg(){const t={get(i){return Sr(this,i)},get size(){return Ar(this)},has:Ir,add:Qc,set:Jc,delete:Zc,clear:el,forEach:Rr(!1,!1)},e={get(i){return Sr(this,i,!1,!0)},get size(){return Ar(this)},has:Ir,add:Qc,set:Jc,delete:Zc,clear:el,forEach:Rr(!1,!0)},n={get(i){return Sr(this,i,!0)},get size(){return Ar(this,!0)},has(i){return Ir.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Rr(!0,!1)},s={get(i){return Sr(this,i,!0,!0)},get size(){return Ar(this,!0)},has(i){return Ir.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=kr(i,!1,!1),n[i]=kr(i,!0,!1),e[i]=kr(i,!1,!0),s[i]=kr(i,!0,!0)}),[t,n,e,s]}const[yg,vg,wg,Eg]=mg();function ka(t,e){const n=e?t?Eg:wg:t?vg:yg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const _g={get:ka(!1,!1)},bg={get:ka(!1,!0)},Tg={get:ka(!0,!1)},nh=new WeakMap,sh=new WeakMap,rh=new WeakMap,Cg=new WeakMap;function Sg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ig(t){return t.__v_skip||!Object.isExtensible(t)?0:Sg(Yp(t))}function ar(t){return js(t)?t:xa(t,!1,th,_g,nh)}function Ag(t){return xa(t,!1,gg,bg,sh)}function ih(t){return xa(t,!0,pg,Tg,rh)}function xa(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ig(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Hn(t){return js(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function oh(t){return!!(t&&t.__v_isShallow)}function ah(t){return Hn(t)||js(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function Na(t){return Wr(t,"__v_skip",!0),t}const qs=t=>Re(t)?ar(t):t,Da=t=>Re(t)?ih(t):t;function ch(t){Kt&&Ct&&(t=se(t),Ju(t.dep||(t.dep=Sa())))}function lh(t,e){t=se(t),t.dep&&Ao(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function uh(t){return hh(t,!1)}function Rg(t){return hh(t,!0)}function hh(t,e){return Me(t)?t:new kg(t,e)}class kg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:qs(e)}get value(){return ch(this),this._value}set value(e){e=this.__v_isShallow?e:se(e),Vs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:qs(e),lh(this))}}function xs(t){return Me(t)?t.value:t}const xg={get:(t,e,n)=>xs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function fh(t){return Hn(t)?t:new Proxy(t,xg)}class Ng{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ia(e,()=>{this._dirty||(this._dirty=!0,lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=se(this);return ch(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Dg(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=yt):(s=t.get,r=t.set),new Ng(s,r,i||!r,n)}Promise.resolve();function zt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ti(i,e,n)}return r}function dt(t,e,n,s){if(Y(t)){const i=zt(t,e,n,s);return i&&Hu(i)&&i.catch(o=>{Ti(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(dt(t[i],e,n,s));return r}function Ti(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){zt(c,null,10,[t,o,a]);return}}Pg(t,n,r,s)}function Pg(t,e,n,s=!0){console.error(t)}let Xr=!1,Ro=!1;const it=[];let kt=0;const Ns=[];let Is=null,Ln=0;const Ds=[];let Vt=null,Fn=0;const dh=Promise.resolve();let Pa=null,ko=null;function ph(t){const e=Pa||dh;return t?e.then(this?t.bind(this):t):e}function Og(t){let e=kt+1,n=it.length;for(;e<n;){const s=e+n>>>1;Hs(it[s])<t?e=s+1:n=s}return e}function gh(t){(!it.length||!it.includes(t,Xr&&t.allowRecurse?kt+1:kt))&&t!==ko&&(t.id==null?it.push(t):it.splice(Og(t.id),0,t),mh())}function mh(){!Xr&&!Ro&&(Ro=!0,Pa=dh.then(wh))}function Mg(t){const e=it.indexOf(t);e>kt&&it.splice(e,1)}function yh(t,e,n,s){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),mh()}function Lg(t){yh(t,Is,Ns,Ln)}function Fg(t){yh(t,Vt,Ds,Fn)}function Oa(t,e=null){if(Ns.length){for(ko=e,Is=[...new Set(Ns)],Ns.length=0,Ln=0;Ln<Is.length;Ln++)Is[Ln]();Is=null,Ln=0,ko=null,Oa(t,e)}}function vh(t){if(Ds.length){const e=[...new Set(Ds)];if(Ds.length=0,Vt){Vt.push(...e);return}for(Vt=e,Vt.sort((n,s)=>Hs(n)-Hs(s)),Fn=0;Fn<Vt.length;Fn++)Vt[Fn]();Vt=null,Fn=0}}const Hs=t=>t.id==null?1/0:t.id;function wh(t){Ro=!1,Xr=!0,Oa(t),it.sort((n,s)=>Hs(n)-Hs(s));const e=yt;try{for(kt=0;kt<it.length;kt++){const n=it[kt];n&&n.active!==!1&&zt(n,null,14)}}finally{kt=0,it.length=0,vh(),Xr=!1,Pa=null,(it.length||Ns.length||Ds.length)&&wh(t)}}function Ug(t,e,...n){const s=t.vnode.props||he;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||he;d?r=n.map(g=>g.trim()):h&&(r=n.map(To))}let a,c=s[a=eo(e)]||s[a=eo(Gn(e))];!c&&i&&(c=s[a=eo(cs(e))]),c&&dt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(l,t,6,r)}}function Eh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=Eh(l,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Ke(o,i),s.set(t,o),o)}function Ma(t,e){return!t||!wi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,cs(e))||ne(t,e))}let mt=null,Ci=null;function Yr(t){const e=mt;return mt=t,Ci=t&&t.type.__scopeId||null,e}function LT(t){Ci=t}function FT(){Ci=null}function Bg(t,e=mt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ul(-1);const i=Yr(e),o=t(...r);return Yr(i),s._d&&ul(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function to(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:S}=t;let T,x;const P=Yr(t);try{if(n.shapeFlag&4){const U=r||s;T=bt(u.call(U,U,h,i,g,d,y)),x=c}else{const U=e;T=bt(U.length>1?U(i,{attrs:c,slots:a,emit:l}):U(i,null)),x=e.props?c:$g(c)}}catch(U){Ps.length=0,Ti(U,t,1),T=ft(Qt)}let q=T;if(x&&S!==!1){const U=Object.keys(x),{shapeFlag:oe}=q;U.length&&oe&7&&(o&&U.some(_a)&&(x=Vg(x,o)),q=Wn(q,x))}return n.dirs&&(q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),T=q,Yr(P),T}const $g=t=>{let e;for(const n in t)(n==="class"||n==="style"||wi(n))&&((e||(e={}))[n]=t[n]);return e},Vg=(t,e)=>{const n={};for(const s in t)(!_a(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jg(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?tl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ma(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?tl(s,o,l):!0:!!o;return!1}function tl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function qg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hg=t=>t.__isSuspense;function Kg(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Fg(t)}function Br(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Gt(t,e,n=!1){const s=Oe||mt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const nl={};function $r(t,e,n){return _h(t,e,n)}function _h(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=he){const a=Oe;let c,l=!1,u=!1;if(Me(t)?(c=()=>t.value,l=oh(t)):Hn(t)?(c=()=>t,s=!0):G(t)?(u=!0,l=t.some(Hn),c=()=>t.map(x=>{if(Me(x))return x.value;if(Hn(x))return un(x);if(Y(x))return zt(x,a,2)})):Y(t)?e?c=()=>zt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),dt(t,a,3,[d])}:c=yt,e&&s){const x=c;c=()=>un(x())}let h,d=x=>{h=T.onStop=()=>{zt(x,a,4)}};if(Ks)return d=yt,e?n&&dt(e,a,3,[c(),u?[]:void 0,d]):c(),yt;let g=u?[]:nl;const y=()=>{if(!!T.active)if(e){const x=T.run();(s||l||(u?x.some((P,q)=>Vs(P,g[q])):Vs(x,g)))&&(h&&h(),dt(e,a,3,[x,g===nl?void 0:g,d]),g=x)}else T.run()};y.allowRecurse=!!e;let S;r==="sync"?S=y:r==="post"?S=()=>Ze(y,a&&a.suspense):S=()=>{!a||a.isMounted?Lg(y):y()};const T=new Ia(c,S);return e?n?y():g=T.run():r==="post"?Ze(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&ba(a.scope.effects,T)}}function zg(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?bh(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Oe;Xn(this);const a=_h(r,i.bind(s),n);return o?Xn(o):gn(),a}function bh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function un(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))un(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)un(t[n],e);else if(qu(t)||qn(t))t.forEach(n=>{un(n,e)});else if(zu(t))for(const n in t)un(t[n],e);return t}function Gg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ah(()=>{t.isMounted=!0}),Rh(()=>{t.isUnmounting=!0}),t}const ht=[Function,Array],Wg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},setup(t,{slots:e}){const n=Pm(),s=Gg();let r;return()=>{const i=e.default&&Ch(e.default(),!0);if(!i||!i.length)return;const o=se(t),{mode:a}=o,c=i[0];if(s.isLeaving)return no(c);const l=sl(c);if(!l)return no(c);const u=xo(l,o,s,n);No(l,u);const h=n.subTree,d=h&&sl(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const S=y();r===void 0?r=S:S!==r&&(r=S,g=!0)}if(d&&d.type!==Qt&&(!cn(l,d)||g)){const S=xo(d,o,s,n);if(No(d,S),a==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},no(c);a==="in-out"&&l.type!==Qt&&(S.delayLeave=(T,x,P)=>{const q=Th(s,d);q[String(d.key)]=d,T._leaveCb=()=>{x(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return c}}},Xg=Wg;function Th(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function xo(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:S,onAppear:T,onAfterAppear:x,onAppearCancelled:P}=e,q=String(t.key),U=Th(n,t),oe=(J,_e)=>{J&&dt(J,s,9,_e)},Ee={mode:i,persisted:o,beforeEnter(J){let _e=a;if(!n.isMounted)if(r)_e=S||a;else return;J._leaveCb&&J._leaveCb(!0);const be=U[q];be&&cn(t,be)&&be.el._leaveCb&&be.el._leaveCb(),oe(_e,[J])},enter(J){let _e=c,be=l,Je=u;if(!n.isMounted)if(r)_e=T||c,be=x||l,Je=P||u;else return;let Ve=!1;const ze=J._enterCb=Ft=>{Ve||(Ve=!0,Ft?oe(Je,[J]):oe(be,[J]),Ee.delayedLeave&&Ee.delayedLeave(),J._enterCb=void 0)};_e?(_e(J,ze),_e.length<=1&&ze()):ze()},leave(J,_e){const be=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return _e();oe(h,[J]);let Je=!1;const Ve=J._leaveCb=ze=>{Je||(Je=!0,_e(),ze?oe(y,[J]):oe(g,[J]),J._leaveCb=void 0,U[be]===t&&delete U[be])};U[be]=t,d?(d(J,Ve),d.length<=1&&Ve()):Ve()},clone(J){return xo(J,e,n,s)}};return Ee}function no(t){if(Si(t))return t=Wn(t),t.children=null,t}function sl(t){return Si(t)?t.children?t.children[0]:void 0:t}function No(t,e){t.shapeFlag&6&&t.component?No(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ch(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===_t?(i.patchFlag&128&&s++,n=n.concat(Ch(i.children,e))):(e||i.type!==Qt)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Sh(t){return Y(t)?{setup:t,name:t.name}:t}const Do=t=>!!t.type.__asyncLoader,Si=t=>t.type.__isKeepAlive;function Yg(t,e){Ih(t,"a",e)}function Qg(t,e){Ih(t,"da",e)}function Ih(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ii(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Si(r.parent.vnode)&&Jg(s,e,n,r),r=r.parent}}function Jg(t,e,n,s){const r=Ii(e,t,s,!0);kh(()=>{ba(s[e],r)},n)}function Ii(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ls(),Xn(n);const a=dt(e,n,t,o);return gn(),us(),a});return s?r.unshift(i):r.push(i),i}}const Lt=t=>(e,n=Oe)=>(!Ks||t==="sp")&&Ii(t,e,n),Zg=Lt("bm"),Ah=Lt("m"),em=Lt("bu"),tm=Lt("u"),Rh=Lt("bum"),kh=Lt("um"),nm=Lt("sp"),sm=Lt("rtg"),rm=Lt("rtc");function im(t,e=Oe){Ii("ec",t,e)}let Po=!0;function om(t){const e=Nh(t),n=t.proxy,s=t.ctx;Po=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:S,deactivated:T,beforeDestroy:x,beforeUnmount:P,destroyed:q,unmounted:U,render:oe,renderTracked:Ee,renderTriggered:J,errorCaptured:_e,serverPrefetch:be,expose:Je,inheritAttrs:Ve,components:ze,directives:Ft,filters:xn}=e;if(l&&am(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const ae=o[fe];Y(ae)&&(s[fe]=ae.bind(n))}if(r){const fe=r.call(n,n);Re(fe)&&(t.data=ar(fe))}if(Po=!0,i)for(const fe in i){const ae=i[fe],st=Y(ae)?ae.bind(n,n):Y(ae.get)?ae.get.bind(n,n):yt,Dn=!Y(ae)&&Y(ae.set)?ae.set.bind(n):yt,At=Tt({get:st,set:Dn});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>At.value,set:vt=>At.value=vt})}if(a)for(const fe in a)xh(a[fe],s,n,fe);if(c){const fe=Y(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ae=>{Br(ae,fe[ae])})}u&&rl(u,t,"c");function Ae(fe,ae){G(ae)?ae.forEach(st=>fe(st.bind(n))):ae&&fe(ae.bind(n))}if(Ae(Zg,h),Ae(Ah,d),Ae(em,g),Ae(tm,y),Ae(Yg,S),Ae(Qg,T),Ae(im,_e),Ae(rm,Ee),Ae(sm,J),Ae(Rh,P),Ae(kh,U),Ae(nm,be),G(Je))if(Je.length){const fe=t.exposed||(t.exposed={});Je.forEach(ae=>{Object.defineProperty(fe,ae,{get:()=>n[ae],set:st=>n[ae]=st})})}else t.exposed||(t.exposed={});oe&&t.render===yt&&(t.render=oe),Ve!=null&&(t.inheritAttrs=Ve),ze&&(t.components=ze),Ft&&(t.directives=Ft)}function am(t,e,n=yt,s=!1){G(t)&&(t=Oo(t));for(const r in t){const i=t[r];let o;Re(i)?"default"in i?o=Gt(i.from||r,i.default,!0):o=Gt(i.from||r):o=Gt(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function rl(t,e,n){dt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xh(t,e,n,s){const r=s.includes(".")?bh(n,s):()=>n[s];if(xe(t)){const i=e[t];Y(i)&&$r(r,i)}else if(Y(t))$r(r,t.bind(n));else if(Re(t))if(G(t))t.forEach(i=>xh(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&$r(r,i,t)}}function Nh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Qr(c,l,o,!0)),Qr(c,e,o)),i.set(e,c),c}function Qr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Qr(t,i,n,!0),r&&r.forEach(o=>Qr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=cm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cm={data:il,props:on,emits:on,methods:on,computed:on,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:on,directives:on,watch:um,provide:il,inject:lm};function il(t,e){return e?t?function(){return Ke(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function lm(t,e){return on(Oo(t),Oo(e))}function Oo(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function on(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function um(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function hm(t,e,n,s=!1){const r={},i={};Wr(i,Ai,1),t.propsDefaults=Object.create(null),Dh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ag(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function fm(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=se(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const g=e[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=Gn(d);r[y]=Mo(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Dh(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=cs(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Mo(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h)&&!0)&&(delete i[h],l=!0)}l&&Pt(t,"set","$attrs")}function Dh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fr(c))continue;const l=e[c];let u;r&&ne(r,u=Gn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ma(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=se(n),l=a||he;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Mo(r,c,h,l[h],t,!ne(l,h))}}return o}function Mo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Xn(r),s=l[n]=c.call(null,e),gn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===cs(n))&&(s=!0))}return s}function Ph(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=Ph(h,e,!0);Ke(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,jn),jn;if(G(i))for(let u=0;u<i.length;u++){const h=Gn(i[u]);ol(h)&&(o[h]=he)}else if(i)for(const u in i){const h=Gn(u);if(ol(h)){const d=i[u],g=o[h]=G(d)||Y(d)?{type:d}:d;if(g){const y=ll(Boolean,g.type),S=ll(String,g.type);g[0]=y>-1,g[1]=S<0||y<S,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function ol(t){return t[0]!=="$"}function al(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function cl(t,e){return al(t)===al(e)}function ll(t,e){return G(e)?e.findIndex(n=>cl(n,t)):Y(e)&&cl(e,t)?0:-1}const Oh=t=>t[0]==="_"||t==="$stable",La=t=>G(t)?t.map(bt):[bt(t)],dm=(t,e,n)=>{const s=Bg((...r)=>La(e(...r)),n);return s._c=!1,s},Mh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Oh(r))continue;const i=t[r];if(Y(i))e[r]=dm(r,i,s);else if(i!=null){const o=La(i);e[r]=()=>o}}},Lh=(t,e)=>{const n=La(e);t.slots.default=()=>n},pm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),Wr(e,"_",n)):Mh(e,t.slots={})}else t.slots={},e&&Lh(t,e);Wr(t.slots,Ai,1)},gm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Mh(e,r)),o=e}else e&&(Lh(t,e),o={default:1});if(i)for(const a in r)!Oh(a)&&!(a in o)&&delete r[a]};function UT(t,e){const n=mt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=he]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&un(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function sn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ls(),dt(c,n,8,[t.el,a,t,e]),us())}}function Fh(){return{app:null,config:{isNativeTag:Gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mm=0;function ym(t,e){return function(s,r=null){r!=null&&!Re(r)&&(r=null);const i=Fh(),o=new Set;let a=!1;const c=i.app={_uid:mm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Bm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ft(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ba(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Lo(t,e,n,s,r=!1){if(G(t)){t.forEach((d,g)=>Lo(d,e&&(G(e)?e[g]:e),n,s,r));return}if(Do(s)&&!r)return;const i=s.shapeFlag&4?Ba(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),Y(c))zt(c,a,12,[o,u]);else{const d=xe(c),g=Me(c);if(d||g){const y=()=>{if(t.f){const S=d?u[c]:c.value;r?G(S)&&ba(S,i):G(S)?S.includes(i)||S.push(i):d?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ne(h,c)&&(h[c]=o)):Me(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ze(y,n)):y()}}}const Ze=Kg;function vm(t){return wm(t)}function wm(t,e){const n=Zp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=yt,cloneNode:y,insertStaticContent:S}=t,T=(f,p,m,E=null,w=null,I=null,N=!1,C=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!cn(f,p)&&(E=F(f),ut(f,w,I,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:_,ref:B,shapeFlag:O}=p;switch(_){case Fa:x(f,p,m,E);break;case Qt:P(f,p,m,E);break;case Vr:f==null&&q(p,m,E,N);break;case _t:Ft(f,p,m,E,w,I,N,C,R);break;default:O&1?Ee(f,p,m,E,w,I,N,C,R):O&6?xn(f,p,m,E,w,I,N,C,R):(O&64||O&128)&&_.process(f,p,m,E,w,I,N,C,R,de)}B!=null&&w&&Lo(B,f&&f.ref,I,p||f,!p)},x=(f,p,m,E)=>{if(f==null)s(p.el=a(p.children),m,E);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},P=(f,p,m,E)=>{f==null?s(p.el=c(p.children||""),m,E):p.el=f.el},q=(f,p,m,E)=>{[f.el,f.anchor]=S(f.children,p,m,E,f.el,f.anchor)},U=({el:f,anchor:p},m,E)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,E),f=w;s(p,m,E)},oe=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},Ee=(f,p,m,E,w,I,N,C,R)=>{N=N||p.type==="svg",f==null?J(p,m,E,w,I,N,C,R):Je(f,p,w,I,N,C,R)},J=(f,p,m,E,w,I,N,C)=>{let R,_;const{type:B,props:O,shapeFlag:$,transition:K,patchFlag:te,dirs:ye}=f;if(f.el&&y!==void 0&&te===-1)R=f.el=y(f.el);else{if(R=f.el=o(f.type,I,O&&O.is,O),$&8?u(R,f.children):$&16&&be(f.children,R,null,E,w,I&&B!=="foreignObject",N,C),ye&&sn(f,null,E,"created"),O){for(const ge in O)ge!=="value"&&!Fr(ge)&&i(R,ge,null,O[ge],I,f.children,E,w,k);"value"in O&&i(R,"value",null,O.value),(_=O.onVnodeBeforeMount)&&Et(_,E,f)}_e(R,f,f.scopeId,N,E)}ye&&sn(f,null,E,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;le&&K.beforeEnter(R),s(R,p,m),((_=O&&O.onVnodeMounted)||le||ye)&&Ze(()=>{_&&Et(_,E,f),le&&K.enter(R),ye&&sn(f,null,E,"mounted")},w)},_e=(f,p,m,E,w)=>{if(m&&g(f,m),E)for(let I=0;I<E.length;I++)g(f,E[I]);if(w){let I=w.subTree;if(p===I){const N=w.vnode;_e(f,N,N.scopeId,N.slotScopeIds,w.parent)}}},be=(f,p,m,E,w,I,N,C,R=0)=>{for(let _=R;_<f.length;_++){const B=f[_]=C?jt(f[_]):bt(f[_]);T(null,B,p,m,E,w,I,N,C)}},Je=(f,p,m,E,w,I,N)=>{const C=p.el=f.el;let{patchFlag:R,dynamicChildren:_,dirs:B}=p;R|=f.patchFlag&16;const O=f.props||he,$=p.props||he;let K;m&&rn(m,!1),(K=$.onVnodeBeforeUpdate)&&Et(K,m,p,f),B&&sn(p,f,m,"beforeUpdate"),m&&rn(m,!0);const te=w&&p.type!=="foreignObject";if(_?Ve(f.dynamicChildren,_,C,m,E,te,I):N||st(f,p,C,null,m,E,te,I,!1),R>0){if(R&16)ze(C,p,O,$,m,E,w);else if(R&2&&O.class!==$.class&&i(C,"class",null,$.class,w),R&4&&i(C,"style",O.style,$.style,w),R&8){const ye=p.dynamicProps;for(let le=0;le<ye.length;le++){const ge=ye[le],pt=O[ge],Pn=$[ge];(Pn!==pt||ge==="value")&&i(C,ge,pt,Pn,w,f.children,m,E,k)}}R&1&&f.children!==p.children&&u(C,p.children)}else!N&&_==null&&ze(C,p,O,$,m,E,w);((K=$.onVnodeUpdated)||B)&&Ze(()=>{K&&Et(K,m,p,f),B&&sn(p,f,m,"updated")},E)},Ve=(f,p,m,E,w,I,N)=>{for(let C=0;C<p.length;C++){const R=f[C],_=p[C],B=R.el&&(R.type===_t||!cn(R,_)||R.shapeFlag&70)?h(R.el):m;T(R,_,B,null,E,w,I,N,!0)}},ze=(f,p,m,E,w,I,N)=>{if(m!==E){for(const C in E){if(Fr(C))continue;const R=E[C],_=m[C];R!==_&&C!=="value"&&i(f,C,_,R,N,p.children,w,I,k)}if(m!==he)for(const C in m)!Fr(C)&&!(C in E)&&i(f,C,m[C],null,N,p.children,w,I,k);"value"in E&&i(f,"value",m.value,E.value)}},Ft=(f,p,m,E,w,I,N,C,R)=>{const _=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:$,slotScopeIds:K}=p;K&&(C=C?C.concat(K):K),f==null?(s(_,m,E),s(B,m,E),be(p.children,m,B,w,I,N,C,R)):O>0&&O&64&&$&&f.dynamicChildren?(Ve(f.dynamicChildren,$,m,w,I,N,C),(p.key!=null||w&&p===w.subTree)&&Uh(f,p,!0)):st(f,p,m,B,w,I,N,C,R)},xn=(f,p,m,E,w,I,N,C,R)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?w.ctx.activate(p,m,E,N,R):Nn(p,m,E,w,I,N,R):Ae(f,p,R)},Nn=(f,p,m,E,w,I,N)=>{const C=f.component=Dm(f,E,w);if(Si(f)&&(C.ctx.renderer=de),Om(C),C.asyncDep){if(w&&w.registerDep(C,fe),!f.el){const R=C.subTree=ft(Qt);P(null,R,p,m)}return}fe(C,f,p,m,w,I,N)},Ae=(f,p,m)=>{const E=p.component=f.component;if(jg(f,p,m))if(E.asyncDep&&!E.asyncResolved){ae(E,p,m);return}else E.next=p,Mg(E.update),E.update();else p.component=f.component,p.el=f.el,E.vnode=p},fe=(f,p,m,E,w,I,N)=>{const C=()=>{if(f.isMounted){let{next:B,bu:O,u:$,parent:K,vnode:te}=f,ye=B,le;rn(f,!1),B?(B.el=te.el,ae(f,B,N)):B=te,O&&Ur(O),(le=B.props&&B.props.onVnodeBeforeUpdate)&&Et(le,K,B,te),rn(f,!0);const ge=to(f),pt=f.subTree;f.subTree=ge,T(pt,ge,h(pt.el),F(pt),f,w,I),B.el=ge.el,ye===null&&qg(f,ge.el),$&&Ze($,w),(le=B.props&&B.props.onVnodeUpdated)&&Ze(()=>Et(le,K,B,te),w)}else{let B;const{el:O,props:$}=p,{bm:K,m:te,parent:ye}=f,le=Do(p);if(rn(f,!1),K&&Ur(K),!le&&(B=$&&$.onVnodeBeforeMount)&&Et(B,ye,p),rn(f,!0),O&&X){const ge=()=>{f.subTree=to(f),X(O,f.subTree,f,w,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ge()):ge()}else{const ge=f.subTree=to(f);T(null,ge,m,E,f,w,I),p.el=ge.el}if(te&&Ze(te,w),!le&&(B=$&&$.onVnodeMounted)){const ge=p;Ze(()=>Et(B,ye,ge),w)}p.shapeFlag&256&&f.a&&Ze(f.a,w),f.isMounted=!0,p=m=E=null}},R=f.effect=new Ia(C,()=>gh(f.update),f.scope),_=f.update=R.run.bind(R);_.id=f.uid,rn(f,!0),_()},ae=(f,p,m)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,fm(f,p.props,E,m),gm(f,p.children,m),ls(),Oa(void 0,f.update),us()},st=(f,p,m,E,w,I,N,C,R=!1)=>{const _=f&&f.children,B=f?f.shapeFlag:0,O=p.children,{patchFlag:$,shapeFlag:K}=p;if($>0){if($&128){At(_,O,m,E,w,I,N,C,R);return}else if($&256){Dn(_,O,m,E,w,I,N,C,R);return}}K&8?(B&16&&k(_,w,I),O!==_&&u(m,O)):B&16?K&16?At(_,O,m,E,w,I,N,C,R):k(_,w,I,!0):(B&8&&u(m,""),K&16&&be(O,m,E,w,I,N,C,R))},Dn=(f,p,m,E,w,I,N,C,R)=>{f=f||jn,p=p||jn;const _=f.length,B=p.length,O=Math.min(_,B);let $;for($=0;$<O;$++){const K=p[$]=R?jt(p[$]):bt(p[$]);T(f[$],K,m,null,w,I,N,C,R)}_>B?k(f,w,I,!0,!1,O):be(p,m,E,w,I,N,C,R,O)},At=(f,p,m,E,w,I,N,C,R)=>{let _=0;const B=p.length;let O=f.length-1,$=B-1;for(;_<=O&&_<=$;){const K=f[_],te=p[_]=R?jt(p[_]):bt(p[_]);if(cn(K,te))T(K,te,m,null,w,I,N,C,R);else break;_++}for(;_<=O&&_<=$;){const K=f[O],te=p[$]=R?jt(p[$]):bt(p[$]);if(cn(K,te))T(K,te,m,null,w,I,N,C,R);else break;O--,$--}if(_>O){if(_<=$){const K=$+1,te=K<B?p[K].el:E;for(;_<=$;)T(null,p[_]=R?jt(p[_]):bt(p[_]),m,te,w,I,N,C,R),_++}}else if(_>$)for(;_<=O;)ut(f[_],w,I,!0),_++;else{const K=_,te=_,ye=new Map;for(_=te;_<=$;_++){const rt=p[_]=R?jt(p[_]):bt(p[_]);rt.key!=null&&ye.set(rt.key,_)}let le,ge=0;const pt=$-te+1;let Pn=!1,Kc=0;const Es=new Array(pt);for(_=0;_<pt;_++)Es[_]=0;for(_=K;_<=O;_++){const rt=f[_];if(ge>=pt){ut(rt,w,I,!0);continue}let wt;if(rt.key!=null)wt=ye.get(rt.key);else for(le=te;le<=$;le++)if(Es[le-te]===0&&cn(rt,p[le])){wt=le;break}wt===void 0?ut(rt,w,I,!0):(Es[wt-te]=_+1,wt>=Kc?Kc=wt:Pn=!0,T(rt,p[wt],m,null,w,I,N,C,R),ge++)}const zc=Pn?Em(Es):jn;for(le=zc.length-1,_=pt-1;_>=0;_--){const rt=te+_,wt=p[rt],Gc=rt+1<B?p[rt+1].el:E;Es[_]===0?T(null,wt,m,Gc,w,I,N,C,R):Pn&&(le<0||_!==zc[le]?vt(wt,m,Gc,2):le--)}}},vt=(f,p,m,E,w=null)=>{const{el:I,type:N,transition:C,children:R,shapeFlag:_}=f;if(_&6){vt(f.component.subTree,p,m,E);return}if(_&128){f.suspense.move(p,m,E);return}if(_&64){N.move(f,p,m,de);return}if(N===_t){s(I,p,m);for(let O=0;O<R.length;O++)vt(R[O],p,m,E);s(f.anchor,p,m);return}if(N===Vr){U(f,p,m);return}if(E!==2&&_&1&&C)if(E===0)C.beforeEnter(I),s(I,p,m),Ze(()=>C.enter(I),w);else{const{leave:O,delayLeave:$,afterLeave:K}=C,te=()=>s(I,p,m),ye=()=>{O(I,()=>{te(),K&&K()})};$?$(I,te,ye):ye()}else s(I,p,m)},ut=(f,p,m,E=!1,w=!1)=>{const{type:I,props:N,ref:C,children:R,dynamicChildren:_,shapeFlag:B,patchFlag:O,dirs:$}=f;if(C!=null&&Lo(C,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const K=B&1&&$,te=!Do(f);let ye;if(te&&(ye=N&&N.onVnodeBeforeUnmount)&&Et(ye,p,f),B&6)M(f.component,m,E);else{if(B&128){f.suspense.unmount(m,E);return}K&&sn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,w,de,E):_&&(I!==_t||O>0&&O&64)?k(_,p,m,!1,!0):(I===_t&&O&384||!w&&B&16)&&k(R,p,m),E&&Zi(f)}(te&&(ye=N&&N.onVnodeUnmounted)||K)&&Ze(()=>{ye&&Et(ye,p,f),K&&sn(f,null,p,"unmounted")},m)},Zi=f=>{const{type:p,el:m,anchor:E,transition:w}=f;if(p===_t){v(m,E);return}if(p===Vr){oe(f);return}const I=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:C}=w,R=()=>N(m,I);C?C(f.el,I,R):R()}else I()},v=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},M=(f,p,m)=>{const{bum:E,scope:w,update:I,subTree:N,um:C}=f;E&&Ur(E),w.stop(),I&&(I.active=!1,ut(N,f,p,m)),C&&Ze(C,p),Ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(f,p,m,E=!1,w=!1,I=0)=>{for(let N=I;N<f.length;N++)ut(f[N],p,m,E,w)},F=f=>f.shapeFlag&6?F(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ce=(f,p,m)=>{f==null?p._vnode&&ut(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),vh(),p._vnode=f},de={p:T,um:ut,m:vt,r:Zi,mt:Nn,mc:be,pc:st,pbc:Ve,n:F,o:t};let Z,X;return e&&([Z,X]=e(de)),{render:ce,hydrate:Z,createApp:ym(ce,Z)}}function rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Uh(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=jt(r[i]),a.el=o.el),n||Uh(o,a))}}function Em(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const _m=t=>t.__isTeleport,bm=Symbol(),_t=Symbol(void 0),Fa=Symbol(void 0),Qt=Symbol(void 0),Vr=Symbol(void 0),Ps=[];let pn=null;function BT(t=!1){Ps.push(pn=t?null:[])}function Tm(){Ps.pop(),pn=Ps[Ps.length-1]||null}let Jr=1;function ul(t){Jr+=t}function Cm(t){return t.dynamicChildren=Jr>0?pn||jn:null,Tm(),Jr>0&&pn&&pn.push(t),t}function $T(t,e,n,s,r,i){return Cm($h(t,e,n,s,r,i,!0))}function Fo(t){return t?t.__v_isVNode===!0:!1}function cn(t,e){return t.type===e.type&&t.key===e.key}const Ai="__vInternal",Bh=({key:t})=>t!=null?t:null,jr=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Me(t)||Y(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function $h(t,e=null,n=null,s=0,r=null,i=t===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bh(e),ref:e&&jr(e),scopeId:Ci,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ua(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),Jr>0&&!o&&pn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&pn.push(c),c}const ft=Sm;function Sm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===bm)&&(t=Qt),Fo(t)){const a=Wn(t,e,!0);return n&&Ua(a,n),a}if(Um(t)&&(t=t.__vccOpts),e){e=Im(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=Ea(a)),Re(c)&&(ah(c)&&!G(c)&&(c=Ke({},c)),e.style=wa(c))}const o=xe(t)?1:Hg(t)?128:_m(t)?64:Re(t)?4:Y(t)?2:0;return $h(t,e,n,s,r,o,i,!0)}function Im(t){return t?ah(t)||Ai in t?Ke({},t):t:null}function Wn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Rm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bh(a),ref:e&&e.ref?n&&r?G(r)?r.concat(jr(e)):[r,jr(e)]:jr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function Am(t=" ",e=0){return ft(Fa,null,t,e)}function VT(t,e){const n=ft(Vr,null,t);return n.staticCount=e,n}function bt(t){return t==null||typeof t=="boolean"?ft(Qt):G(t)?ft(_t,null,t.slice()):typeof t=="object"?jt(t):ft(Fa,null,String(t))}function jt(t){return t.el===null||t.memo?t:Wn(t)}function Ua(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ua(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ai in e)?e._ctx=mt:r===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),s&64?(n=16,e=[Am(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ea([e.class,s.class]));else if(r==="style")e.style=wa([e.style,s.style]);else if(wi(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Et(t,e,n,s=null){dt(t,e,7,[n,s])}function jT(t,e,n,s){let r;const i=n&&n[s];if(G(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Uo=t=>t?Vh(t)?Ba(t)||t.proxy:Uo(t.parent):null,Zr=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uo(t.parent),$root:t=>Uo(t.root),$emit:t=>t.emit,$options:t=>Nh(t),$forceUpdate:t=>()=>gh(t.update),$nextTick:t=>ph.bind(t.proxy),$watch:t=>zg.bind(t)}),km={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==he&&ne(s,e))return o[e]=1,s[e];if(r!==he&&ne(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==he&&ne(n,e))return o[e]=4,n[e];Po&&(o[e]=0)}}const u=Zr[e];let h,d;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==he&&ne(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==he&&ne(r,e)?(r[e]=n,!0):s!==he&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ne(t,o)||e!==he&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(Zr,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},xm=Fh();let Nm=0;function Dm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||xm,i={uid:Nm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(s,r),emitsOptions:Eh(s,r),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ug.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const Pm=()=>Oe||mt,Xn=t=>{Oe=t,t.scope.on()},gn=()=>{Oe&&Oe.scope.off(),Oe=null};function Vh(t){return t.vnode.shapeFlag&4}let Ks=!1;function Om(t,e=!1){Ks=e;const{props:n,children:s}=t.vnode,r=Vh(t);hm(t,n,r,e),pm(t,s);const i=r?Mm(t,e):void 0;return Ks=!1,i}function Mm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Na(new Proxy(t.ctx,km));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Fm(t):null;Xn(t),ls();const i=zt(s,t,0,[t.props,r]);if(us(),gn(),Hu(i)){if(i.then(gn,gn),e)return i.then(o=>{hl(t,o,e)}).catch(o=>{Ti(o,t,0)});t.asyncDep=i}else hl(t,i,e)}else jh(t,e)}function hl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=fh(e)),jh(t,n)}let fl;function jh(t,e,n){const s=t.type;if(!t.render){if(!e&&fl&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ke(Ke({isCustomElement:i,delimiters:a},o),c);s.render=fl(r,l)}}t.render=s.render||yt}Xn(t),ls(),om(t),us(),gn()}function Lm(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function Fm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Lm(t))},slots:t.slots,emit:t.emit,expose:e}}function Ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fh(Na(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zr)return Zr[n](t)}}))}function Um(t){return Y(t)&&"__vccOpts"in t}const Tt=(t,e)=>Dg(t,e,Ks);function qh(t,e,n){const s=arguments.length;return s===2?Re(e)&&!G(e)?Fo(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fo(n)&&(n=[n]),ft(t,e,n))}const Bm="3.2.31",$m="http://www.w3.org/2000/svg",ln=typeof document!="undefined"?document:null,dl=ln&&ln.createElement("template"),Vm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ln.createElementNS($m,t):ln.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{dl.innerHTML=s?`<svg>${t}</svg>`:t;const a=dl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qm(t,e,n){const s=t.style,r=xe(n);if(n&&!r){for(const i in n)Bo(s,i,n[i]);if(e&&!xe(e))for(const i in e)n[i]==null&&Bo(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const pl=/\s*!important$/;function Bo(t,e,n){if(G(n))n.forEach(s=>Bo(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Hm(t,e);pl.test(n)?t.setProperty(cs(s),n.replace(pl,""),"important"):t[s]=n}}const gl=["Webkit","Moz","ms"],so={};function Hm(t,e){const n=so[e];if(n)return n;let s=Gn(e);if(s!=="filter"&&s in t)return so[e]=s;s=Gu(s);for(let r=0;r<gl.length;r++){const i=gl[r]+s;if(i in t)return so[e]=i}return e}const ml="http://www.w3.org/1999/xlink";function Km(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ml,e.slice(6,e.length)):t.setAttributeNS(ml,e,n);else{const i=qp(e);n==null||i&&!Vu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Vu(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ei=Date.now,Hh=!1;if(typeof window!="undefined"){ei()>document.createEvent("Event").timeStamp&&(ei=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Hh=!!(t&&Number(t[1])<=53)}let $o=0;const Gm=Promise.resolve(),Wm=()=>{$o=0},Xm=()=>$o||(Gm.then(Wm),$o=ei());function Un(t,e,n,s){t.addEventListener(e,n,s)}function Ym(t,e,n,s){t.removeEventListener(e,n,s)}function Qm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Jm(e);if(s){const l=i[e]=Zm(s,r);Un(t,a,l,c)}else o&&(Ym(t,a,o,c),i[e]=void 0)}}const yl=/(?:Once|Passive|Capture)$/;function Jm(t){let e;if(yl.test(t)){e={};let n;for(;n=t.match(yl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[cs(t.slice(2)),e]}function Zm(t,e){const n=s=>{const r=s.timeStamp||ei();(Hh||r>=n.attached-1)&&dt(ey(s,n.value),e,5,[s])};return n.value=t,n.attached=Xm(),n}function ey(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const vl=/^on[a-z]/,ty=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?jm(t,s,r):e==="style"?qm(t,n,s):wi(e)?_a(e)||Qm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ny(t,e,s,r))?zm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Km(t,e,s,r))};function ny(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vl.test(e)&&xe(n)?!1:e in t}const sy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xg.props;const wl=t=>{const e=t.props["onUpdate:modelValue"];return G(e)?n=>Ur(e,n):e};function ry(t){t.target.composing=!0}function El(t){const e=t.target;e.composing&&(e.composing=!1,iy(e,"input"))}function iy(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const qT={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=wl(r);const i=s||r.props&&r.props.type==="number";Un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=To(a)),t._assign(a)}),n&&Un(t,"change",()=>{t.value=t.value.trim()}),e||(Un(t,"compositionstart",ry),Un(t,"compositionend",El),Un(t,"change",El))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=wl(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&To(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},HT={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):_s(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),_s(t,!0),s.enter(t)):s.leave(t,()=>{_s(t,!1)}):_s(t,e))},beforeUnmount(t,{value:e}){_s(t,e)}};function _s(t,e){t.style.display=e?t._vod:"none"}const oy=Ke({patchProp:ty},Vm);let _l;function ay(){return _l||(_l=vm(oy))}const KT=(...t)=>{const e=ay().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cy(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function cy(t){return xe(t)?document.querySelector(t):t}var ly=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const uy=Symbol();var bl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bl||(bl={}));function zT(){const t=eg(!0),e=t.run(()=>uh({}));let n=[],s=[];const r=Na({install(i){r._a=i,i.provide(uy,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!ly?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kh=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",hs=t=>Kh?Symbol(t):"_vr_"+t,hy=hs("rvlm"),Tl=hs("rvd"),$a=hs("r"),zh=hs("rl"),Vo=hs("rvl"),Bn=typeof window!="undefined";function fy(t){return t.__esModule||Kh&&t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function ro(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Os=()=>{},dy=/\/$/,py=t=>t.replace(dy,"");function io(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=vy(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function gy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function my(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Yn(e.matched[s],n.matched[r])&&Gh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yy(t[n],e[n]))return!1;return!0}function yy(t,e){return Array.isArray(t)?Sl(t,e):Array.isArray(e)?Sl(e,t):t===e}function Sl(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var zs;(function(t){t.pop="pop",t.push="push"})(zs||(zs={}));var Ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ms||(Ms={}));function wy(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),py(t)}const Ey=/^[^#]+#/;function _y(t,e){return t.replace(Ey,"#")+e}function by(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ri=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ty(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=by(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Il(t,e){return(history.state?history.state.position-e:-1)+t}const jo=new Map;function Cy(t,e){jo.set(t,e)}function Sy(t){const e=jo.get(t);return jo.delete(t),e}let Iy=()=>location.protocol+"//"+location.host;function Wh(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Cl(c,"")}return Cl(n,t)+s+r}function Ay(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Wh(t,location),y=n.value,S=e.value;let T=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}T=S?d.position-S.position:0}else s(g);r.forEach(x=>{x(n.value,y,{delta:T,type:zs.pop,direction:T?T>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ue({},d.state,{scroll:Ri()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Al(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ri():null}}function Ry(t){const{history:e,location:n}=window,s={value:Wh(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Iy()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ue({},e.state,Al(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ue({},r.value,e.state,{forward:c,scroll:Ri()});i(u.current,u,!0);const h=ue({},Al(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function GT(t){t=wy(t);const e=Ry(t),n=Ay(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ue({location:"",base:t,go:s,createHref:_y.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ky(t){return typeof t=="string"||t&&typeof t=="object"}function Xh(t){return typeof t=="string"||typeof t=="symbol"}const Bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yh=hs("nf");var Rl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rl||(Rl={}));function Qn(t,e){return ue(new Error,{type:t,[Yh]:!0},e)}function $t(t,e){return t instanceof Error&&Yh in t&&(e==null||!!(t.type&e))}const kl="[^/]+?",xy={sensitive:!1,strict:!1,start:!0,end:!0},Ny=/[.+*?^${}()[\]/\\]/g;function Dy(t,e){const n=ue({},xy,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Ny,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:S,optional:T,regexp:x}=d;i.push({name:y,repeatable:S,optional:T});const P=x||kl;if(P!==kl){g+=10;try{new RegExp(`(${P})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+U.message)}}let q=S?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(q=T&&l.length<2?`(?:/${q})`:"/"+q),T&&(q+="?"),r+=q,g+=20,T&&(g+=-8),S&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:S,optional:T}=g,x=y in l?l[y]:"";if(Array.isArray(x)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(x)?x.join("/"):x;if(!P)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Py(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Oy(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Py(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const My={type:0,value:""},Ly=/[a-zA-Z0-9_]/;function Fy(t){if(!t)return[[]];if(t==="/")return[[My]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Ly.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Uy(t,e,n){const s=Dy(Fy(t.path),n),r=ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function By(t,e){const n=[],s=new Map;e=Nl({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,y=Vy(u);y.aliasOf=d&&d.record;const S=Nl(e,u),T=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of q)T.push(ue({},y,{components:d?d.record.components:y.components,path:U,aliasOf:d?d.record:y}))}let x,P;for(const q of T){const{path:U}=q;if(h&&U[0]!=="/"){const oe=h.record.path,Ee=oe[oe.length-1]==="/"?"":"/";q.path=h.record.path+(U&&Ee+U)}if(x=Uy(q,h,S),d?d.alias.push(x):(P=P||x,P!==x&&P.alias.push(x),g&&u.name&&!xl(x)&&o(u.name)),"children"in y){const oe=y.children;for(let Ee=0;Ee<oe.length;Ee++)i(oe[Ee],x,d&&d.children[Ee])}d=d||x,c(x)}return P?()=>{o(P)}:Os}function o(u){if(Xh(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Oy(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xl(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,S;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Qn(1,{location:u});S=d.record.name,g=ue($y(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(P=>P.re.test(y)),d&&(g=d.parse(y),S=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Qn(1,{location:u,currentLocation:h});S=d.record.name,g=ue({},h.params,u.params),y=d.stringify(g)}const T=[];let x=d;for(;x;)T.unshift(x.record),x=x.parent;return{name:S,path:y,params:g,matched:T,meta:qy(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function $y(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Vy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function jy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function xl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qy(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function Nl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qh(t,e){return e.children.some(n=>n===t||Qh(t,n))}const Jh=/#/g,Hy=/&/g,Ky=/\//g,zy=/=/g,Gy=/\?/g,Zh=/\+/g,Wy=/%5B/g,Xy=/%5D/g,ef=/%5E/g,Yy=/%60/g,tf=/%7B/g,Qy=/%7C/g,nf=/%7D/g,Jy=/%20/g;function Va(t){return encodeURI(""+t).replace(Qy,"|").replace(Wy,"[").replace(Xy,"]")}function Zy(t){return Va(t).replace(tf,"{").replace(nf,"}").replace(ef,"^")}function qo(t){return Va(t).replace(Zh,"%2B").replace(Jy,"+").replace(Jh,"%23").replace(Hy,"%26").replace(Yy,"`").replace(tf,"{").replace(nf,"}").replace(ef,"^")}function ev(t){return qo(t).replace(zy,"%3D")}function tv(t){return Va(t).replace(Jh,"%23").replace(Gy,"%3F")}function nv(t){return t==null?"":tv(t).replace(Ky,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Zh," "),o=i.indexOf("="),a=ti(o<0?i:i.slice(0,o)),c=o<0?null:ti(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Dl(t){let e="";for(let n in t){const s=t[n];if(n=ev(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&qo(i)):[s&&qo(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function bs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Qn(4,{from:n,to:e})):h instanceof Error?a(h):ky(h)?a(Qn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function oo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(iv(a)){const l=(a.__vccOpts||a)[e];l&&r.push(qt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fy(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qt(d,n,s,i,o)()}))}}return r}function iv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pl(t){const e=Gt($a),n=Gt(zh),s=Tt(()=>e.resolve(xs(t.to))),r=Tt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Yn.bind(null,u));if(d>-1)return d;const g=Ol(c[l-2]);return l>1&&Ol(u)===g&&h[h.length-1].path!==g?h.findIndex(Yn.bind(null,c[l-2])):d}),i=Tt(()=>r.value>-1&&lv(n.params,s.value.params)),o=Tt(()=>r.value>-1&&r.value===n.matched.length-1&&Gh(n.params,s.value.params));function a(c={}){return cv(c)?e[xs(t.replace)?"replace":"push"](xs(t.to)).catch(Os):Promise.resolve()}return{route:s,href:Tt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const ov=Sh({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pl,setup(t,{slots:e}){const n=ar(Pl(t)),{options:s}=Gt($a),r=Tt(()=>({[Ml(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ml(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:qh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),av=ov;function cv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lv(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ol(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ml=(t,e,n)=>t!=null?t:e!=null?e:n,uv=Sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Gt(Vo),r=Tt(()=>t.route||s.value),i=Gt(Tl,0),o=Tt(()=>r.value.matched[i]);Br(Tl,i+1),Br(hy,o),Br(Vo,r);const a=uh();return $r(()=>[a.value,o.value,t.name],([c,l,u],[h,d,g])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!Yn(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Ll(n.default,{Component:u,route:c});const d=l.props[t.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,S=qh(u,ue({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Ll(n.default,{Component:S,route:c})||S}}});function Ll(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hv=uv;function WT(t){const e=By(t.routes,t),n=t.parseQuery||sv,s=t.stringifyQuery||Dl,r=t.history,i=bs(),o=bs(),a=bs(),c=Rg(Bt);let l=Bt;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ro.bind(null,v=>""+v),h=ro.bind(null,nv),d=ro.bind(null,ti);function g(v,M){let k,F;return Xh(v)?(k=e.getRecordMatcher(v),F=M):F=v,e.addRoute(F,k)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function S(){return e.getRoutes().map(v=>v.record)}function T(v){return!!e.getRecordMatcher(v)}function x(v,M){if(M=ue({},M||c.value),typeof v=="string"){const X=io(n,v,M.path),f=e.resolve({path:X.path},M),p=r.createHref(X.fullPath);return ue(X,f,{params:d(f.params),hash:ti(X.hash),redirectedFrom:void 0,href:p})}let k;if("path"in v)k=ue({},v,{path:io(n,v.path,M.path).path});else{const X=ue({},v.params);for(const f in X)X[f]==null&&delete X[f];k=ue({},v,{params:h(v.params)}),M.params=h(M.params)}const F=e.resolve(k,M),ce=v.hash||"";F.params=u(d(F.params));const de=gy(s,ue({},v,{hash:Zy(ce),path:F.path})),Z=r.createHref(de);return ue({fullPath:de,hash:ce,query:s===Dl?rv(v.query):v.query||{}},F,{redirectedFrom:void 0,href:Z})}function P(v){return typeof v=="string"?io(n,v,c.value.path):ue({},v)}function q(v,M){if(l!==v)return Qn(8,{from:M,to:v})}function U(v){return J(v)}function oe(v){return U(ue(P(v),{replace:!0}))}function Ee(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:k}=M;let F=typeof k=="function"?k(v):k;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),ue({query:v.query,hash:v.hash,params:v.params},F)}}function J(v,M){const k=l=x(v),F=c.value,ce=v.state,de=v.force,Z=v.replace===!0,X=Ee(k);if(X)return J(ue(P(X),{state:ce,force:de,replace:Z}),M||k);const f=k;f.redirectedFrom=M;let p;return!de&&my(s,F,k)&&(p=Qn(16,{to:f,from:F}),Dn(F,F,!0,!1)),(p?Promise.resolve(p):be(f,F)).catch(m=>$t(m)?$t(m,2)?m:st(m):fe(m,f,F)).then(m=>{if(m){if($t(m,2))return J(ue(P(m.to),{state:ce,force:de,replace:Z}),M||f)}else m=Ve(f,F,!0,Z,ce);return Je(f,F,m),m})}function _e(v,M){const k=q(v,M);return k?Promise.reject(k):Promise.resolve()}function be(v,M){let k;const[F,ce,de]=fv(v,M);k=oo(F.reverse(),"beforeRouteLeave",v,M);for(const X of F)X.leaveGuards.forEach(f=>{k.push(qt(f,v,M))});const Z=_e.bind(null,v,M);return k.push(Z),On(k).then(()=>{k=[];for(const X of i.list())k.push(qt(X,v,M));return k.push(Z),On(k)}).then(()=>{k=oo(ce,"beforeRouteUpdate",v,M);for(const X of ce)X.updateGuards.forEach(f=>{k.push(qt(f,v,M))});return k.push(Z),On(k)}).then(()=>{k=[];for(const X of v.matched)if(X.beforeEnter&&!M.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const f of X.beforeEnter)k.push(qt(f,v,M));else k.push(qt(X.beforeEnter,v,M));return k.push(Z),On(k)}).then(()=>(v.matched.forEach(X=>X.enterCallbacks={}),k=oo(de,"beforeRouteEnter",v,M),k.push(Z),On(k))).then(()=>{k=[];for(const X of o.list())k.push(qt(X,v,M));return k.push(Z),On(k)}).catch(X=>$t(X,8)?X:Promise.reject(X))}function Je(v,M,k){for(const F of a.list())F(v,M,k)}function Ve(v,M,k,F,ce){const de=q(v,M);if(de)return de;const Z=M===Bt,X=Bn?history.state:{};k&&(F||Z?r.replace(v.fullPath,ue({scroll:Z&&X&&X.scroll},ce)):r.push(v.fullPath,ce)),c.value=v,Dn(v,M,k,Z),st()}let ze;function Ft(){ze=r.listen((v,M,k)=>{const F=x(v),ce=Ee(F);if(ce){J(ue(ce,{replace:!0}),F).catch(Os);return}l=F;const de=c.value;Bn&&Cy(Il(de.fullPath,k.delta),Ri()),be(F,de).catch(Z=>$t(Z,12)?Z:$t(Z,2)?(J(Z.to,F).then(X=>{$t(X,20)&&!k.delta&&k.type===zs.pop&&r.go(-1,!1)}).catch(Os),Promise.reject()):(k.delta&&r.go(-k.delta,!1),fe(Z,F,de))).then(Z=>{Z=Z||Ve(F,de,!1),Z&&(k.delta?r.go(-k.delta,!1):k.type===zs.pop&&$t(Z,20)&&r.go(-1,!1)),Je(F,de,Z)}).catch(Os)})}let xn=bs(),Nn=bs(),Ae;function fe(v,M,k){st(v);const F=Nn.list();return F.length?F.forEach(ce=>ce(v,M,k)):console.error(v),Promise.reject(v)}function ae(){return Ae&&c.value!==Bt?Promise.resolve():new Promise((v,M)=>{xn.add([v,M])})}function st(v){return Ae||(Ae=!v,Ft(),xn.list().forEach(([M,k])=>v?k(v):M()),xn.reset()),v}function Dn(v,M,k,F){const{scrollBehavior:ce}=t;if(!Bn||!ce)return Promise.resolve();const de=!k&&Sy(Il(v.fullPath,0))||(F||!k)&&history.state&&history.state.scroll||null;return ph().then(()=>ce(v,M,de)).then(Z=>Z&&Ty(Z)).catch(Z=>fe(Z,v,M))}const At=v=>r.go(v);let vt;const ut=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:T,getRoutes:S,resolve:x,options:t,push:U,replace:oe,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Nn.add,isReady:ae,install(v){const M=this;v.component("RouterLink",av),v.component("RouterView",hv),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>xs(c)}),Bn&&!vt&&c.value===Bt&&(vt=!0,U(r.location).catch(ce=>{}));const k={};for(const ce in Bt)k[ce]=Tt(()=>c.value[ce]);v.provide($a,M),v.provide(zh,ar(k)),v.provide(Vo,c);const F=v.unmount;ut.add(v),v.unmount=function(){ut.delete(v),ut.size<1&&(l=Bt,ze&&ze(),c.value=Bt,vt=!1,Ae=!1),F()}}}}function On(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function fv(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Yn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Yn(l,c))||r.push(c))}return[n,s,r]}/**
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
 */const sf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gv=function(t){const e=sf(t);return pv.encodeByteArray(e,!0)},rf=function(t){return gv(t).replace(/\./g,"")};/**
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
 */class mv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ki(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ki())}function vv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ev(){return ki().indexOf("Electron/")>=0}function _v(){const t=ki();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bv(){return ki().indexOf("MSAppHost/")>=0}function Tv(){return typeof indexedDB=="object"}function Cv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sv="FirebaseError";class cr extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Sv,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,of.prototype.create)}}class of{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Iv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new cr(r,a,s)}}function Iv(t,e){return t.replace(Av,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Av=/\{\$([^}]+)}/g;function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Fl(i)&&Fl(o)){if(!Ho(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Fl(t){return t!==null&&typeof t=="object"}/**
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
 */function Ot(t){return t&&t._delegate?t._delegate:t}/**
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
 */function As(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class Ul{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new af(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new cf(this._db.createObjectStore(e,n))}close(){this._db.close()}}class af{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new cf(this._transaction.objectStore(e))}}class cf{constructor(e){this._store=e}index(e){return new Bl(this._store.index(e))}createIndex(e,n,s){return new Bl(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return As(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return As(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return As(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return As(e,"Error clearing IndexedDB object store")}}class Bl{constructor(e){this._index=e}get(e){const n=this._index.get(e);return As(n,"Error reading from IndexedDB")}}function Rv(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new Ul(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Ul(i.result),o.oldVersion,o.newVersion,new af(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class Jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const an="[DEFAULT]";/**
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
 */class kv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nv(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xv(t){return t===an?void 0:t}function Nv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Dv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Pv={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Ov=re.INFO,Mv={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Lv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Mv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lf{constructor(e){this.name=e,this._logLevel=Ov,this._logHandler=Lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}/**
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
 */class Fv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Uv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ko="@firebase/app",$l="0.7.20";/**
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
 */const ja=new lf("@firebase/app"),Bv="@firebase/app-compat",$v="@firebase/analytics-compat",Vv="@firebase/analytics",jv="@firebase/app-check-compat",qv="@firebase/app-check",Hv="@firebase/auth",Kv="@firebase/auth-compat",zv="@firebase/database",Gv="@firebase/database-compat",Wv="@firebase/functions",Xv="@firebase/functions-compat",Yv="@firebase/installations",Qv="@firebase/installations-compat",Jv="@firebase/messaging",Zv="@firebase/messaging-compat",ew="@firebase/performance",tw="@firebase/performance-compat",nw="@firebase/remote-config",sw="@firebase/remote-config-compat",rw="@firebase/storage",iw="@firebase/storage-compat",ow="@firebase/firestore",aw="@firebase/firestore-compat",cw="firebase",lw="9.6.10";/**
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
 */const uf="[DEFAULT]",uw={[Ko]:"fire-core",[Bv]:"fire-core-compat",[Vv]:"fire-analytics",[$v]:"fire-analytics-compat",[qv]:"fire-app-check",[jv]:"fire-app-check-compat",[Hv]:"fire-auth",[Kv]:"fire-auth-compat",[zv]:"fire-rtdb",[Gv]:"fire-rtdb-compat",[Wv]:"fire-fn",[Xv]:"fire-fn-compat",[Yv]:"fire-iid",[Qv]:"fire-iid-compat",[Jv]:"fire-fcm",[Zv]:"fire-fcm-compat",[ew]:"fire-perf",[tw]:"fire-perf-compat",[nw]:"fire-rc",[sw]:"fire-rc-compat",[rw]:"fire-gcs",[iw]:"fire-gcs-compat",[ow]:"fire-fst",[aw]:"fire-fst-compat","fire-js":"fire-js",[cw]:"fire-js-all"};/**
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
 */const ni=new Map,zo=new Map;function hw(t,e){try{t.container.addComponent(e)}catch(n){ja.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(zo.has(e))return ja.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,t);for(const n of ni.values())hw(n,t);return!0}function hf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},wn=new of("app","Firebase",fw);/**
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
 */class dw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const ff=lw;function XT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:uf,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw wn.create("bad-app-name",{appName:String(s)});const r=ni.get(s);if(r){if(Ho(t,r.options)&&Ho(n,r.config))return r;throw wn.create("duplicate-app",{appName:s})}const i=new Dv(s);for(const a of zo.values())i.addComponent(a);const o=new dw(t,n,i);return ni.set(s,o),o}function df(t=uf){const e=ni.get(t);if(!e)throw wn.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let r=(s=uw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ja.warn(a.join(" "));return}Gs(new Jn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const pw="firebase-heartbeat-database",gw=1,Ws="firebase-heartbeat-store";let ao=null;function pf(){return ao||(ao=Rv(pw,gw,(t,e)=>{switch(e){case 0:t.createObjectStore(Ws)}}).catch(t=>{throw wn.create("storage-open",{originalErrorMessage:t.message})})),ao}async function mw(t){try{return(await pf()).transaction(Ws).objectStore(Ws).get(gf(t))}catch(e){throw wn.create("storage-get",{originalErrorMessage:e.message})}}async function Vl(t,e){try{const s=(await pf()).transaction(Ws,"readwrite");return await s.objectStore(Ws).put(e,gf(t)),s.complete}catch(n){throw wn.create("storage-set",{originalErrorMessage:n.message})}}function gf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yw=1024,vw=30*24*60*60*1e3;class ww{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _w(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=vw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jl(),{heartbeatsToSend:n,unsentEntries:s}=Ew(this._heartbeatsCache.heartbeats),r=rf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jl(){return new Date().toISOString().substring(0,10)}function Ew(t,e=yw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ql(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _w{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tv()?Cv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ql(t){return rf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bw(t){Gs(new Jn("platform-logger",e=>new Fv(e),"PRIVATE")),Gs(new Jn("heartbeat",e=>new ww(e),"PRIVATE")),Wt(Ko,$l,t),Wt(Ko,$l,"esm2017"),Wt("fire-js","")}bw("");var Tw="firebase",Cw="9.6.10";/**
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
 */Wt(Tw,Cw,"app");var Sw=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,qa=qa||{},H=Sw||self;function si(){}function Go(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Iw(t){return Object.prototype.hasOwnProperty.call(t,co)&&t[co]||(t[co]=++Aw)}var co="closure_uid_"+(1e9*Math.random()>>>0),Aw=0;function Rw(t,e,n){return t.call.apply(t.bind,arguments)}function kw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=Rw:Le=kw,Le.apply(null,arguments)}function xr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function tn(){this.s=this.s,this.o=this.o}var xw=0,Nw={};tn.prototype.s=!1;tn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),xw!=0)){var t=Iw(this);delete Nw[t]}};tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},yf=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Dw(t){e:{var e=TE;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Hl(t){return Array.prototype.concat.apply([],arguments)}function Ha(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ri(t){return/^[\s\xa0]*$/.test(t)}var Kl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function lo(t,e){return t<e?-1:t>e?1:0}var Ye;e:{var zl=H.navigator;if(zl){var Gl=zl.userAgent;if(Gl){Ye=Gl;break e}}Ye=""}function Ka(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vf(t){const e={};for(const n in t)e[n]=t[n];return e}var Wl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Wl.length;i++)n=Wl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function za(t){return za[" "](t),t}za[" "]=si;function Pw(t){var e=Lw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ow=Xe(Ye,"Opera"),Zn=Xe(Ye,"Trident")||Xe(Ye,"MSIE"),Ef=Xe(Ye,"Edge"),Wo=Ef||Zn,_f=Xe(Ye,"Gecko")&&!(Xe(Ye.toLowerCase(),"webkit")&&!Xe(Ye,"Edge"))&&!(Xe(Ye,"Trident")||Xe(Ye,"MSIE"))&&!Xe(Ye,"Edge"),Mw=Xe(Ye.toLowerCase(),"webkit")&&!Xe(Ye,"Edge");function bf(){var t=H.document;return t?t.documentMode:void 0}var ii;e:{var uo="",ho=function(){var t=Ye;if(_f)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ef)return/Edge\/([\d\.]+)/.exec(t);if(Zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Mw)return/WebKit\/(\S+)/.exec(t);if(Ow)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ho&&(uo=ho?ho[1]:""),Zn){var fo=bf();if(fo!=null&&fo>parseFloat(uo)){ii=String(fo);break e}}ii=uo}var Lw={};function Fw(){return Pw(function(){let t=0;const e=Kl(String(ii)).split("."),n=Kl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=lo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||lo(r[2].length==0,i[2].length==0)||lo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Xo;if(H.document&&Zn){var Xl=bf();Xo=Xl||parseInt(ii,10)||void 0}else Xo=void 0;var Uw=Xo,Bw=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",si,e),H.removeEventListener("test",si,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function Xs(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_f){e:{try{za(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$w[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xs.Z.h.call(this)}}$e(Xs,qe);var $w={2:"touch",3:"pen",4:"mouse"};Xs.prototype.h=function(){Xs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ur="closure_listenable_"+(1e6*Math.random()|0),Vw=0;function jw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++Vw,this.ca=this.fa=!1}function xi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ni(t){this.src=t,this.g={},this.h=0}Ni.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Qo(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new jw(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Yo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=mf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Ga="closure_lm_"+(1e6*Math.random()|0),po={};function Tf(t,e,n,s,r){if(s&&s.once)return Sf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tf(t,e[i],n,s,r);return null}return n=Ya(n),t&&t[ur]?t.N(e,n,lr(s)?!!s.capture:!!s,r):Cf(t,e,n,!1,s,r)}function Cf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=lr(r)?!!r.capture:!!r,a=Xa(t);if(a||(t[Ga]=a=new Ni(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=qw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Bw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Af(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qw(){function t(n){return e.call(t.src,t.listener,n)}var e=Hw;return t}function Sf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sf(t,e[i],n,s,r);return null}return n=Ya(n),t&&t[ur]?t.O(e,n,lr(s)?!!s.capture:!!s,r):Cf(t,e,n,!0,s,r)}function If(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)If(t,e[i],n,s,r);else s=lr(s)?!!s.capture:!!s,n=Ya(n),t&&t[ur]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qo(i,n,s,r),-1<n&&(xi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qo(e,n,s,r)),(n=-1<t?e[t]:null)&&Wa(n))}function Wa(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ur])Yo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Af(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xa(e))?(Yo(n,t),n.h==0&&(n.src=null,e[Ga]=null)):xi(t)}}}function Af(t){return t in po?po[t]:po[t]="on"+t}function Hw(t,e){if(t.ca)t=!0;else{e=new Xs(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Wa(t),t=n.call(s,e)}return t}function Xa(t){return t=t[Ga],t instanceof Ni?t:null}var go="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ya(t){return typeof t=="function"?t:(t[go]||(t[go]=function(e){return t.handleEvent(e)}),t[go])}function Ne(){tn.call(this),this.i=new Ni(this),this.P=this,this.I=null}$e(Ne,tn);Ne.prototype[ur]=!0;Ne.prototype.removeEventListener=function(t,e,n,s){If(this,t,e,n,s)};function Fe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(s,t),wf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Nr(o,s,!0,e)&&r}if(o=e.g=t,r=Nr(o,s,!0,e)&&r,r=Nr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Nr(o,s,!1,e)&&r}Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xi(n[s]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ne.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Nr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Yo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Qa=H.JSON.stringify;function Kw(){var t=kf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zw{constructor(){this.h=this.g=null}add(e,n){const s=Rf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Rf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Gw,t=>t.reset());class Gw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ww(t){H.setTimeout(()=>{throw t},0)}function Ja(t,e){Jo||Xw(),Zo||(Jo(),Zo=!0),kf.add(t,e)}var Jo;function Xw(){var t=H.Promise.resolve(void 0);Jo=function(){t.then(Yw)}}var Zo=!1,kf=new zw;function Yw(){for(var t;t=Kw();){try{t.h.call(t.g)}catch(n){Ww(n)}var e=Rf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zo=!1}function Di(t,e){Ne.call(this),this.h=t||1,this.g=e||H,this.j=Le(this.kb,this),this.l=Date.now()}$e(Di,Ne);D=Di.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Fe(this,"tick"),this.da&&(Za(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Za(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){Di.Z.M.call(this),Za(this),delete this.g};function ec(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function xf(t){t.g=ec(()=>{t.g=null,t.i&&(t.i=!1,xf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Qw extends tn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xf(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ys(t){tn.call(this),this.h=t,this.g={}}$e(Ys,tn);var Yl=[];function Nf(t,e,n,s){Array.isArray(n)||(n&&(Yl[0]=n.toString()),n=Yl);for(var r=0;r<n.length;r++){var i=Tf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Df(t){Ka(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wa(e)},t),t.g={}}Ys.prototype.M=function(){Ys.Z.M.call(this),Df(this)};Ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pi(){this.g=!0}Pi.prototype.Aa=function(){this.g=!1};function Jw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Zw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function $n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tE(t,n)+(s?" "+s:"")})}function eE(t,e){t.info(function(){return"TIMEOUT: "+e})}Pi.prototype.info=function(){};function tE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Qa(n)}catch{return e}}var Rn={},Ql=null;function Oi(){return Ql=Ql||new Ne}Rn.Ma="serverreachability";function Pf(t){qe.call(this,Rn.Ma,t)}$e(Pf,qe);function Qs(t){const e=Oi();Fe(e,new Pf(e,t))}Rn.STAT_EVENT="statevent";function Of(t,e){qe.call(this,Rn.STAT_EVENT,t),this.stat=e}$e(Of,qe);function Qe(t){const e=Oi();Fe(e,new Of(e,t))}Rn.Na="timingevent";function Mf(t,e){qe.call(this,Rn.Na,t),this.size=e}$e(Mf,qe);function hr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Mi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Lf={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function tc(){}tc.prototype.h=null;function Jl(t){return t.h||(t.h=t.i())}function Ff(){}var fr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function nc(){qe.call(this,"d")}$e(nc,qe);function sc(){qe.call(this,"c")}$e(sc,qe);var ea;function Li(){}$e(Li,tc);Li.prototype.g=function(){return new XMLHttpRequest};Li.prototype.i=function(){return{}};ea=new Li;function dr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ys(this),this.P=nE,t=Wo?125:void 0,this.W=new Di(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Uf}function Uf(){this.i=null,this.g="",this.h=!1}var nE=45e3,ta={},oi={};D=dr.prototype;D.setTimeout=function(t){this.P=t};function na(t,e,n){t.K=1,t.v=Ui(Mt(e)),t.s=n,t.U=!0,Bf(t,null)}function Bf(t,e){t.F=Date.now(),pr(t),t.A=Mt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),zf(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Uf,t.g=fd(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Qw(Le(t.Ia,t,t.g),t.O)),Nf(t.V,t.g,"readystatechange",t.gb),e=t.H?vf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qs(1),Jw(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&xt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Wo||this.g&&(this.h.h||this.g.ga()||nu(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Qs(3):Qs(2)),Fi(this);var n=this.g.ba();this.N=n;t:if($f(this)){var s=nu(this.g);t="";var r=s.length,i=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){hn(this),Ls(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Zw(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ri(a)){var l=a;break t}}l=null}if(n=l)$n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sa(this,n);else{this.i=!1,this.o=3,Qe(12),hn(this),Ls(this);break e}}this.U?(Vf(this,u,o),Wo&&this.i&&u==3&&(Nf(this.V,this.W,"tick",this.fb),this.W.start())):($n(this.j,this.m,o,null),sa(this,o)),u==4&&hn(this),this.i&&!this.I&&(u==4?cd(this.l,this):(this.i=!1,pr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),hn(this),Ls(this)}}}catch{}finally{}};function $f(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Vf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=sE(t,n),r==oi){e==4&&(t.o=4,Qe(14),s=!1),$n(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ta){t.o=4,Qe(15),$n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else $n(t.j,t.m,r,null),sa(t,r);$f(t)&&r!=oi&&r!=ta&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fc(e),e.L=!0,Qe(11))):($n(t.j,t.m,n,"[Invalid Chunked Response]"),hn(t),Ls(t))}D.fb=function(){if(this.g){var t=xt(this.g),e=this.g.ga();this.C<e.length&&(Fi(this),Vf(this,t,e),this.i&&t!=4&&pr(this))}};function sE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?oi:(n=Number(e.substring(n,s)),isNaN(n)?ta:(s+=1,s+n>e.length?oi:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,hn(this)};function pr(t){t.Y=Date.now()+t.P,jf(t,t.P)}function jf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hr(Le(t.eb,t),e)}function Fi(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eE(this.j,this.A),this.K!=2&&(Qs(3),Qe(17)),hn(this),this.o=2,Ls(this)):jf(this,this.Y-t)};function Ls(t){t.l.G==0||t.I||cd(t.l,t)}function hn(t){Fi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Za(t.W),Df(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ra(n.i,t))){if(n.I=t.N,!t.J&&ra(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ui(n),Vi(n);else break e;hc(n),Qe(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=hr(Le(n.ab,n),6e3));if(1>=Xf(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else fn(n,11)}else if((t.J||n.g==t)&&ui(n),!ri(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Xe(y,"spdy")||Xe(y,"quic")||Xe(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(oc(i,i.h),i.h=null))}if(s.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.sa=S,ve(s.F,s.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=hd(s,s.H?s.la:null,s.W),o.J){Yf(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Fi(a),pr(a)),s.g=o}else od(s);0<n.l.length&&ji(n)}else l[0]!="stop"&&l[0]!="close"||fn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?fn(n,7):uc(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Qs(4)}catch{}}function rE(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Go(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function rc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Go(t)||typeof t=="string")yf(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Go(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=rE(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function fs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof fs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}D=fs.prototype;D.R=function(){ic(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return ic(this),this.g.concat()};function ic(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];En(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],En(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}D.get=function(t,e){return En(this.h,t)?this.h[t]:e};D.set=function(t,e){En(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function En(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var qf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function iE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function _n(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof _n){this.g=e!==void 0?e:t.g,ai(this,t.j),this.s=t.s,ci(this,t.i),li(this,t.m),this.l=t.l,e=t.h;var n=new Js;n.i=e.i,e.g&&(n.g=new fs(e.g),n.h=e.h),Zl(this,n),this.o=t.o}else t&&(n=String(t).match(qf))?(this.g=!!e,ai(this,n[1]||"",!0),this.s=Fs(n[2]||""),ci(this,n[3]||"",!0),li(this,n[4]),this.l=Fs(n[5]||"",!0),Zl(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.g=!!e,this.h=new Js(null,this.g))}_n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,eu,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,eu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?uE:lE,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,fE)),t.join("")};function Mt(t){return new _n(t)}function ai(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ci(t,e,n){t.i=n?Fs(e,!0):e}function li(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zl(t,e,n){e instanceof Js?(t.h=e,dE(t.h,t.g)):(n||(e=Rs(e,hE)),t.h=new Js(e,t.g))}function ve(t,e,n){t.h.set(e,n)}function Ui(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oE(t){return t instanceof _n?Mt(t):new _n(t,void 0)}function aE(t,e,n,s){var r=new _n(null,void 0);return t&&ai(r,t),e&&ci(r,e),n&&li(r,n),s&&(r.l=s),r}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var eu=/[#\/\?@]/g,lE=/[#\?:]/g,uE=/[#\?]/g,hE=/[#\?@]/g,fE=/#/g;function Js(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nn(t){t.g||(t.g=new fs,t.h=0,t.i&&iE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Js.prototype;D.add=function(t,e){nn(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hf(t,e){nn(t),e=ds(t,e),En(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,En(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ic(t)))}function Kf(t,e){return nn(t),e=ds(t,e),En(t.g.h,e)}D.forEach=function(t,e){nn(this),this.g.forEach(function(n,s){yf(n,function(r){t.call(e,r,s,this)},this)},this)};D.T=function(){nn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};D.R=function(t){nn(this);var e=[];if(typeof t=="string")Kf(this,t)&&(e=Hl(e,this.g.get(ds(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Hl(e,t[n])}return e};D.set=function(t,e){return nn(this),this.i=null,t=ds(this,t),Kf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function zf(t,e,n){Hf(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),Ha(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dE(t,e){e&&!t.j&&(nn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Hf(this,s),zf(this,r,n))},t)),t.j=e}var pE=class{constructor(t,e){this.h=t,this.g=e}};function Gf(t){this.l=t||gE,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gE=10;function Wf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xf(t){return t.h?1:t.g?t.g.size:0}function ra(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oc(t,e){t.g?t.g.add(e):t.h=e}function Yf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ha(t.i)}function ac(){}ac.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};ac.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function mE(){this.g=new ac}function yE(t,e,n){const s=n||"";try{rc(t,function(r,i){let o=r;lr(r)&&(o=Qa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function vE(t,e){const n=new Pi;if(H.Image){const s=new Image;s.onload=xr(Dr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xr(Dr,n,s,"TestLoadImage: error",!1,e),s.onabort=xr(Dr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xr(Dr,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Dr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gr(t){this.l=t.$b||null,this.j=t.ib||!1}$e(gr,tc);gr.prototype.g=function(){return new Bi(this.l,this.j)};gr.prototype.i=function(t){return function(){return t}}({});function Bi(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Bi,Ne);var cc=0;D=Bi.prototype;D.open=function(t,e){if(this.readyState!=cc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=cc};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jf(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Jf(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mr(this):Zs(this),this.readyState==3&&Jf(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,mr(this))};D.Ta=function(t){this.g&&(this.response=t,mr(this))};D.ha=function(){this.g&&mr(this)};function mr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wE=H.JSON.parse;function Ie(t){Ne.call(this),this.headers=new fs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zf,this.K=this.L=!1}$e(Ie,Ne);var Zf="",EE=/^https?$/i,_E=["POST","PUT"];D=Ie.prototype;D.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ea.g(),this.C=this.u?Jl(this.u):Jl(ea),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){tu(this,i);return}t=n||"";const r=new fs(this.headers);s&&rc(s,function(i,o){r.set(o,i)}),s=Dw(r.T()),n=H.FormData&&t instanceof H.FormData,!(0<=mf(_E,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{nd(this),0<this.B&&((this.K=bE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=ec(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){tu(this,i)}};function bE(t){return Zn&&Fw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function TE(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof qa!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function tu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ed(t),$i(t)}function ed(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),$i(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$i(this,!0)),Ie.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?td(this):this.cb())};D.cb=function(){td(this)};function td(t){if(t.h&&typeof qa!="undefined"&&(!t.C[1]||xt(t)!=4||t.ba()!=2)){if(t.v&&xt(t)==4)ec(t.Fa,0,t);else if(Fe(t,"readystatechange"),xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(qf)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!EE.test(r?r.toLowerCase():"")}n=s}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ed(t)}}finally{$i(t)}}}}function $i(t,e){if(t.g){nd(t);const n=t.g,s=t.C[0]?si:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function nd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function xt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wE(e)}};function nu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Zf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function CE(t){let e="";return Ka(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function lc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=CE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sd(t){this.za=0,this.l=[],this.h=new Pi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ts("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ts("baseRetryDelayMs",5e3,t),this.$a=Ts("retryDelaySeedMs",1e4,t),this.Ya=Ts("forwardChannelMaxRetries",2,t),this.ra=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Gf(t&&t.concurrentRequestLimit),this.Ca=new mE,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=sd.prototype;D.ma=8;D.G=1;function uc(t){if(rd(t),t.G==3){var e=t.V++,n=Mt(t.F);ve(n,"SID",t.J),ve(n,"RID",e),ve(n,"TYPE","terminate"),yr(t,n),e=new dr(t,t.h,e,void 0),e.K=2,e.v=Ui(Mt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=fd(e.l,null),e.g.ea(e.v)),e.F=Date.now(),pr(e)}ud(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Vi(t){t.g&&(fc(t),t.g.cancel(),t.g=null)}function rd(t){Vi(t),t.u&&(H.clearTimeout(t.u),t.u=null),ui(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function mo(t,e){t.l.push(new pE(t.Za++,e)),t.G==3&&ji(t)}function ji(t){Wf(t.i)||t.m||(t.m=!0,Ja(t.Ha,t),t.C=0)}function SE(t,e){return Xf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=hr(Le(t.Ha,t,e),ld(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new dr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=vf(i),wf(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=id(this,r,e),n=Mt(this.F),ve(n,"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),yr(this,n),this.o&&i&&lc(n,this.o,i),oc(this.i,r),this.Ra&&ve(n,"TYPE","init"),this.ja?(ve(n,"$req",e),ve(n,"SID","null"),r.$=!0,na(r,n,null)):na(r,n,e),this.G=2}}else this.G==3&&(t?su(this,t):this.l.length==0||Wf(this.i)||su(this))};function su(t,e){var n;e?n=e.m:n=t.V++;const s=Mt(t.F);ve(s,"SID",t.J),ve(s,"RID",n),ve(s,"AID",t.U),yr(t,s),t.o&&t.s&&lc(s,t.o,t.s),n=new dr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=id(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),oc(t.i,n),na(n,s,e)}function yr(t,e){t.j&&rc({},function(n,s){ve(e,s,n)})}function id(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Le(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{yE(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function od(t){t.g||t.u||(t.Y=1,Ja(t.Ga,t),t.A=0)}function hc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=hr(Le(t.Ga,t),ld(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,ad(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=hr(Le(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Qe(10),Vi(this),ad(this))};function fc(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function ad(t){t.g=new dr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Mt(t.oa);ve(e,"RID","rpc"),ve(e,"SID",t.J),ve(e,"CI",t.N?"0":"1"),ve(e,"AID",t.U),yr(t,e),ve(e,"TYPE","xmlhttp"),t.o&&t.s&&lc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ui(Mt(e)),n.s=null,n.U=!0,Bf(n,t)}D.ab=function(){this.v!=null&&(this.v=null,Vi(this),hc(this),Qe(19))};function ui(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function cd(t,e){var n=null;if(t.g==e){ui(t),fc(t),t.g=null;var s=2}else if(ra(t.i,e))n=e.D,Yf(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Oi(),Fe(s,new Mf(s,n,e,r)),ji(t)}else od(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&SE(t,e)||s==2&&hc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:fn(t,5);break;case 4:fn(t,10);break;case 3:fn(t,6);break;default:fn(t,2)}}}function ld(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function fn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Le(t.jb,t);n||(n=new _n("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||ai(n,"https"),Ui(n)),vE(n.toString(),s)}else Qe(2);t.G=0,t.j&&t.j.va(e),ud(t),rd(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Qe(2)):(this.h.info("Failed to ping google.com"),Qe(1))};function ud(t){t.G=0,t.I=-1,t.j&&((Qf(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ha(t.l),t.l.length=0),t.j.ua())}function hd(t,e,n){let s=oE(n);if(s.i!="")e&&ci(s,e+"."+s.i),li(s,s.m);else{const r=H.location;s=aE(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Ka(t.aa,function(r,i){ve(s,i,r)}),e=t.D,n=t.sa,e&&n&&ve(s,e,n),ve(s,"VER",t.ma),yr(t,s),s}function fd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ie(new gr({ib:!0})):new Ie(t.qa),e.L=t.H,e}function dd(){}D=dd.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function hi(){if(Zn&&!(10<=Number(Uw)))throw Error("Environmental error: no available transport.")}hi.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){Ne.call(this),this.g=new sd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ri(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ri(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}$e(lt,Ne);lt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ja(Le(t.hb,t,e))),Qe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=hd(t,null,t.W),ji(t)};lt.prototype.close=function(){uc(this.g)};lt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,mo(this.g,e)}else this.v?(e={},e.__data__=Qa(t),mo(this.g,e)):mo(this.g,t)};lt.prototype.M=function(){this.g.j=null,delete this.j,uc(this.g),delete this.g,lt.Z.M.call(this)};function pd(t){nc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(pd,nc);function gd(){sc.call(this),this.status=1}$e(gd,sc);function ps(t){this.g=t}$e(ps,dd);ps.prototype.xa=function(){Fe(this.g,"a")};ps.prototype.wa=function(t){Fe(this.g,new pd(t))};ps.prototype.va=function(t){Fe(this.g,new gd(t))};ps.prototype.ua=function(){Fe(this.g,"b")};hi.prototype.createWebChannel=hi.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Mi.NO_ERROR=0;Mi.TIMEOUT=8;Mi.HTTP_ERROR=6;Lf.COMPLETE="complete";Ff.EventType=fr;fr.OPEN="a";fr.CLOSE="b";fr.ERROR="c";fr.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.La;Ie.prototype.getLastErrorCode=Ie.prototype.Da;Ie.prototype.getStatus=Ie.prototype.ba;Ie.prototype.getResponseJson=Ie.prototype.Qa;Ie.prototype.getResponseText=Ie.prototype.ga;Ie.prototype.send=Ie.prototype.ea;var IE=function(){return new hi},AE=function(){return Oi()},yo=Mi,RE=Lf,kE=Rn,ru={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},xE=gr,Pr=Ff,NE=Ie;const iu="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let gs="9.6.10";/**
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
 */const bn=new lf("@firebase/firestore");function ou(){return bn.logLevel}function L(t,...e){if(bn.logLevel<=re.DEBUG){const n=e.map(dc);bn.debug(`Firestore (${gs}): ${t}`,...n)}}function Jt(t,...e){if(bn.logLevel<=re.ERROR){const n=e.map(dc);bn.error(`Firestore (${gs}): ${t}`,...n)}}function au(t,...e){if(bn.logLevel<=re.WARN){const n=e.map(dc);bn.warn(`Firestore (${gs}): ${t}`,...n)}}function dc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Jt(e),new Error(e)}function pe(t,e){t||z()}function W(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class OE{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new DE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new et(e)}}class ME{constructor(e,n,s){this.type="FirstParty",this.user=et.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class LE{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new ME(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UE{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.p=n.token,new FE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function BE(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */pc.A=-1;class md{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=BE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new He(0,0))}static max(){return new Q(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function cu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class er{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends er{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const $E=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends er{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return $E.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class ia{constructor(e){this.fields=e,e.sort(tt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const VE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(t){if(pe(!!t),typeof t=="string"){let e=0;const n=VE.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
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
 */function vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wd(t){const e=t.mapValue.fields.__previous_value__;return vd(e)?wd(e):e}function tr(t){const e=Zt(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class jE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ns{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ys(t){return t==null}function fi(t){return t===0&&1/t==-1/0}function qE(t){return typeof t=="number"&&Number.isInteger(t)&&!fi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(we.fromString(e))}static fromName(e){return new V(we.fromString(e).popFirst(5))}static empty(){return new V(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new we(e.slice()))}}function Tn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vd(t)?4:HE(t)?9:10:z()}function It(t,e){if(t===e)return!0;const n=Tn(t);if(n!==Tn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tr(t).isEqual(tr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Zt(s.timestampValue),o=Zt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ts(s.bytesValue).isEqual(ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Se(s.geoPointValue.latitude)===Se(r.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Se(s.integerValue)===Se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Se(s.doubleValue),o=Se(r.doubleValue);return i===o?fi(i)===fi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],It);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(cu(i)!==cu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!It(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function nr(t,e){return(t.values||[]).find(n=>It(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=Tn(t),s=Tn(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Se(r.integerValue||r.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lu(t.timestampValue,e.timestampValue);case 4:return lu(tr(t),tr(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ts(r),a=ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ie(o[c],a[c]);if(l!==0)return l}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(Se(r.latitude),Se(i.latitude));return o!==0?o:ie(Se(r.longitude),Se(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ss(o[c],a[c]);if(l)return l}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ie(a[u],l[u]);if(h!==0)return h;const d=ss(o[a[u]],c[l[u]]);if(d!==0)return d}return ie(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function lu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Zt(t),s=Zt(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function Kn(t){return oa(t)}function oa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Zt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=oa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${oa(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function aa(t){return!!t&&"integerValue"in t}function gc(t){return!!t&&"arrayValue"in t}function uu(t){return!!t&&"nullValue"in t}function hu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qr(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Us(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!qr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Us(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());qr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];qr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ms(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new gt(Us(this.value))}}function Ed(t){const e=[];return ms(t.fields,(n,s)=>{const r=new tt([n]);if(qr(s)){const i=Ed(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ia(e)}/**
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
 */class je{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new je(e,0,Q.min(),Q.min(),gt.empty(),0)}static newFoundDocument(e,n,s){return new je(e,1,n,Q.min(),s,0)}static newNoDocument(e,n){return new je(e,2,n,Q.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,Q.min(),gt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function KE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new rs(r,V.empty(),e)}function zE(t){return new rs(t.readTime,t.key,-1)}class rs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new rs(Q.min(),V.empty(),-1)}static max(){return new rs(Q.max(),V.empty(),-1)}}function GE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */class WE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function fu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new WE(t,e,n,s,r,i,o)}function mc(t){const e=W(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Kn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ys(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Kn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Kn(s)).join(",")),e.P=n}return e.P}function XE(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Kn(s.value)}`;var s}).join(", ")}]`),ys(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Kn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Kn(n)).join(",")),`Target(${e})`}function yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!s0(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!It(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pu(t.startAt,e.startAt)&&pu(t.endAt,e.endAt)}function ca(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class nt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new YE(e,n,s):n==="array-contains"?new ZE(e,s):n==="in"?new e0(e,s):n==="not-in"?new t0(e,s):n==="array-contains-any"?new n0(e,s):new nt(e,n,s)}static V(e,n,s){return n==="in"?new QE(e,s):new JE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ss(n,this.value)):n!==null&&Tn(this.value)===Tn(n)&&this.v(ss(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class YE extends nt{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.v(n)}}class QE extends nt{constructor(e,n){super(e,"in",n),this.keys=_d("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JE extends nt{constructor(e,n){super(e,"not-in",n),this.keys=_d("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _d(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class ZE extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gc(n)&&nr(n.arrayValue,this.value)}}class e0 extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nr(this.value.arrayValue,n)}}class t0 extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nr(this.value.arrayValue,n)}}class n0 extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>nr(this.value.arrayValue,s))}}class di{constructor(e,n){this.position=e,this.inclusive=n}}class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function s0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function du(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=ss(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function pu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!It(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function r0(t,e,n,s,r,i,o,a){return new qi(t,e,n,s,r,i,o,a)}function vc(t){return new qi(t)}function Hr(t){return!ys(t.limit)&&t.limitType==="F"}function pi(t){return!ys(t.limit)&&t.limitType==="L"}function i0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function o0(t){for(const e of t.filters)if(e.S())return e.field;return null}function a0(t){return t.collectionGroup!==null}function sr(t){const e=W(t);if(e.D===null){e.D=[];const n=o0(e),s=i0(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Bs(n)),e.D.push(new Bs(tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Bs(tt.keyField(),i))}}}return e.D}function Cn(t){const e=W(t);if(!e.C)if(e.limitType==="F")e.C=fu(e.path,e.collectionGroup,sr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of sr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Bs(i.field,o))}const s=e.endAt?new di(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new di(e.startAt.position,!e.startAt.inclusive):null;e.C=fu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function c0(t,e,n){return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hi(t,e){return yc(Cn(t),Cn(e))&&t.limitType===e.limitType}function bd(t){return`${mc(Cn(t))}|lt:${t.limitType}`}function la(t){return`Query(target=${XE(Cn(t))}; limitType=${t.limitType})`}function wc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=du(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,sr(n),s)||n.endAt&&!function(r,i,o){const a=du(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,sr(n),s))}(t,e)}function l0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Td(t){return(e,n)=>{let s=!1;for(const r of sr(t)){const i=u0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function u0(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ss(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
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
 */function Cd(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fi(e)?"-0":e}}function Sd(t){return{integerValue:""+t}}function h0(t,e){return qE(e)?Sd(e):Cd(t,e)}/**
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
 */class Ki{constructor(){this._=void 0}}function f0(t,e,n){return t instanceof rr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ir?Ad(t,e):t instanceof or?Rd(t,e):function(s,r){const i=Id(s,r),o=gu(i)+gu(s.k);return aa(i)&&aa(s.k)?Sd(o):Cd(s.M,o)}(t,e)}function d0(t,e,n){return t instanceof ir?Ad(t,e):t instanceof or?Rd(t,e):n}function Id(t,e){return t instanceof gi?aa(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class rr extends Ki{}class ir extends Ki{constructor(e){super(),this.elements=e}}function Ad(t,e){const n=kd(e);for(const s of t.elements)n.some(r=>It(r,s))||n.push(s);return{arrayValue:{values:n}}}class or extends Ki{constructor(e){super(),this.elements=e}}function Rd(t,e){let n=kd(e);for(const s of t.elements)n=n.filter(r=>!It(r,s));return{arrayValue:{values:n}}}class gi extends Ki{constructor(e,n){super(),this.M=e,this.k=n}}function gu(t){return Se(t.integerValue||t.doubleValue)}function kd(t){return gc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class p0{constructor(e,n){this.field=e,this.transform=n}}function g0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ir&&s instanceof ir||n instanceof or&&s instanceof or?es(n.elements,s.elements,It):n instanceof gi&&s instanceof gi?It(n.k,s.k):n instanceof rr&&s instanceof rr}(t.transform,e.transform)}class m0{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zi{}function y0(t,e,n){t instanceof Gi?function(s,r,i){const o=s.value.clone(),a=vu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,r,i){if(!Kr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=vu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(xd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n){t instanceof Gi?function(s,r,i){if(!Kr(s.precondition,r))return;const o=s.value.clone(),a=wu(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(yu(r),o).setHasLocalMutations()}(t,e,n):t instanceof vr?function(s,r,i){if(!Kr(s.precondition,r))return;const o=wu(s.fieldTransforms,i,r),a=r.data;a.setAll(xd(s)),a.setAll(o),r.convertToFoundDocument(yu(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Kr(s.precondition,r)&&r.convertToNoDocument(Q.min())}(t,e)}function v0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Id(s.transform,r||null);i!=null&&(n==null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function mu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&es(n,s,(r,i)=>g0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function yu(t){return t.isFoundDocument()?t.version:Q.min()}class Gi extends zi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class vr extends zi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function xd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function vu(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,d0(o,a,n[r]))}return s}function wu(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,f0(i,o,e))}return s}class w0 extends zi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class E0 extends zi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class _0{constructor(e){this.count=e}}/**
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
 */var Ce,ee;function b0(t){switch(t){default:return z();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Nd(t){if(t===void 0)return Jt("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ce.OK:return b.OK;case Ce.CANCELLED:return b.CANCELLED;case Ce.UNKNOWN:return b.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return b.INTERNAL;case Ce.UNAVAILABLE:return b.UNAVAILABLE;case Ce.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ce.NOT_FOUND:return b.NOT_FOUND;case Ce.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ce.ABORTED:return b.ABORTED;case Ce.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ce.DATA_LOSS:return b.DATA_LOSS;default:return z()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return yd(this.inner)}size(){return this.innerSize}}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Pe.RED,this.left=r!=null?r:Pe.EMPTY,this.right=i!=null?i:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Pe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eu(this.data.getIterator())}getIteratorFrom(e){return new Eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const T0=new De(V.comparator);function Sn(){return T0}const C0=new De(V.comparator);function ha(){return C0}function vo(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const S0=new De(V.comparator),I0=new Ue(V.comparator);function me(...t){let e=I0;for(const n of t)e=e.add(n);return e}const A0=new Ue(ie);function Dd(){return A0}/**
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
 */class Wi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,wr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Wi(Q.min(),s,Dd(),Sn(),me())}}class wr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new wr(Be.EMPTY_BYTE_STRING,n,me(),me(),me())}}/**
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
 */class zr{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Pd{constructor(e,n){this.targetId=e,this.$=n}}class Od{constructor(e,n,s=Be.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _u{constructor(){this.B=0,this.L=Tu(),this.U=Be.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=me(),n=me(),s=me();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new wr(this.U,this.q,e,n,s)}J(){this.G=!1,this.L=Tu()}Y(e,n){this.G=!0,this.L=this.L.insert(e,n)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class R0{constructor(e){this.nt=e,this.st=new Map,this.it=Sn(),this.rt=bu(),this.ot=new Ue(ie)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(ca(i))if(s===0){const o=new V(i.path);this.ct(n,o,je.newNoDocument(o,Q.min()))}else pe(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ca(a.target)){const c=new V(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,je.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=me();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Wi(e,n,this.ot,this.it,s);return this.it=Sn(),this.rt=bu(),this.ot=new Ue(ie),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new _u,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ue(ie),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new _u),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function bu(){return new De(V.comparator)}function Tu(){return new De(V.comparator)}/**
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
 */const k0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class N0{constructor(e,n){this.databaseId=e,this.N=n}}function mi(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Md(t,e){return t.N?e.toBase64():e.toUint8Array()}function D0(t,e){return mi(t,e.toTimestamp())}function Dt(t){return pe(!!t),Q.fromTimestamp(function(e){const n=Zt(e);return new He(n.seconds,n.nanos)}(t))}function Ec(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ld(t){const e=we.fromString(t);return pe(Bd(e)),e}function fa(t,e){return Ec(t.databaseId,e.path)}function wo(t,e){const n=Ld(e);if(n.get(1)!==t.databaseId.projectId)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(Fd(n))}function da(t,e){return Ec(t.databaseId,e)}function P0(t){const e=Ld(t);return e.length===4?we.emptyPath():Fd(e)}function pa(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fd(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cu(t,e,n){return{name:fa(t,e),fields:n.value.mapValue.fields}}function O0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(pe(l===void 0||typeof l=="string"),Be.fromBase64String(l||"")):(pe(l===void 0||l instanceof Uint8Array),Be.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:Nd(c.code);return new j(l,c.message||"")}(o);n=new Od(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wo(t,s.document.name),i=Dt(s.document.updateTime),o=new gt({mapValue:{fields:s.document.fields}}),a=je.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new zr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wo(t,s.document),i=s.readTime?Dt(s.readTime):Q.min(),o=je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new zr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wo(t,s.document),i=s.removedTargetIds||[];n=new zr([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new _0(r),o=s.targetId;n=new Pd(o,i)}}return n}function M0(t,e){let n;if(e instanceof Gi)n={update:Cu(t,e.key,e.value)};else if(e instanceof w0)n={delete:fa(t,e.key)};else if(e instanceof vr)n={update:Cu(t,e.key,e.data),updateMask:K0(e.fieldMask)};else{if(!(e instanceof E0))return z();n={verify:fa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof rr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ir)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof or)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gi)return{fieldPath:i.field.canonicalString(),increment:o.k};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:D0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function L0(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Dt(s.updateTime):Dt(r);return i.isEqual(Q.min())&&(i=Dt(r)),new m0(i,s.transformResults||[])}(n,e))):[]}function F0(t,e){return{documents:[da(t,e.path)]}}function U0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=da(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=da(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(hu(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NAN"}};if(uu(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(hu(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NOT_NAN"}};if(uu(h.value))return{unaryFilter:{field:Mn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(h.field),op:j0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Mn(u.field),direction:V0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||ys(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function B0(t){let e=P0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Ud(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Bs(Vn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ys(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new di(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new di(d,h)}(n.endAt)),r0(e,r,o,i,a,"F",c,l)}function $0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ud(t){return t?t.unaryFilter!==void 0?[H0(t)]:t.fieldFilter!==void 0?[q0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ud(e)).reduce((e,n)=>e.concat(n)):z():[]}function V0(t){return k0[t]}function j0(t){return x0[t]}function Mn(t){return{fieldPath:t.canonicalString()}}function Vn(t){return tt.fromServerFormat(t.fieldPath)}function q0(t){return nt.create(Vn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function H0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Vn(t.unaryFilter.field);return nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Vn(t.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vn(t.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Vn(t.unaryFilter.field);return nt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function K0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const z0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Er(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class W0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&y0(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&ua(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&ua(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,s)=>mu(n,s))&&es(this.baseMutations,e.baseMutations,(n,s)=>mu(n,s))}}class _c{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pe(e.mutations.length===s.length);let r=S0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new _c(e,n,s,r)}}/**
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
 */class X0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yn{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Y0{constructor(e){this.Jt=e}}function Q0(t){const e=B0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?c0(e,e.limit,"L"):e}/**
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
 */class J0{constructor(){this.qe=new Z0}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getFieldIndex(e,n){return A.resolve(null)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Z0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ue(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ue(we.comparator)).toArray()}}/**
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
 */class is{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new is(0)}static gn(){return new is(-1)}}/**
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
 */async function _r(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==z0)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class e_{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class t_{constructor(e,n,s){this.fs=e,this.$s=n,this.indexManager=s}Bs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Ls(e,n,s))}Ls(e,n,s){return this.fs.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Us(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}qs(e,n){return this.fs.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Us(n,s))}Ks(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Qs(e,n.path):a0(n)?this.js(e,n,s):this.Ws(e,n,s)}Qs(e,n){return this.Bs(e,new V(n)).next(s=>{let r=ha();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}js(e,n,s){const r=n.collectionGroup;let i=ha();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new qi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Ws(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Ws(e,n,s){let r;return this.fs.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.$s.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=je.newInvalidDocument(c),r=r.insert(c,l)),ua(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{wc(n,o)||(r=r.remove(i))}),r))}}/**
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
 */class bc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.zs=s,this.Hs=r}static Js(e,n){let s=me(),r=me();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new bc(e,n.fromCache,s,r)}}/**
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
 */class n_{Ys(e){this.Xs=e}Ks(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(Q.min())?this.Zs(e,n):this.Xs.qs(e,r).next(i=>{const o=this.ti(n,i);return(Hr(n)||pi(n))&&this.ei(n.limitType,o,r,s)?this.Zs(e,n):(ou()<=re.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),la(n)),this.Xs.Ks(e,n,KE(s,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,n){let s=new Ue(Td(e));return n.forEach((r,i)=>{wc(e,i)&&(s=s.add(i))}),s}ei(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,n){return ou()<=re.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",la(n)),this.Xs.Ks(e,n,rs.min())}}/**
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
 */class s_{constructor(e,n,s,r){this.persistence=e,this.ni=n,this.M=r,this.si=new De(ie),this.ii=new vs(i=>mc(i),yc),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(s)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new t_(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function r_(t,e,n,s){return new s_(t,e,n,s)}async function $d(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.$s.getAllMutationBatches(s).next(i=>(r=i,n.ui(e),n.$s.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=me();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.ai.qs(s,c).next(l=>({ci:l,removedBatchIds:o,addedBatchIds:a}))})})}function i_(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const S=c.docVersions.get(g);pe(S!==null),y.version.compareTo(S)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.$s.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.$s.performConsistencyCheck(s)).next(()=>n.ai.qs(s,r))})}function Vd(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ls.getLastRemoteSnapshotVersion(n))}function o_(t,e){const n=W(t),s=e.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.ls.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ls.addMatchingKeys(i,l.addedDocuments,u)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?d=d.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(u,d),function(g,y,S){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(h,d,l)&&a.push(n.ls.updateTargetData(i,d))});let c=Sn();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(a_(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(Q.min())){const l=n.ls.getLastRemoteSnapshotVersion(i).next(u=>n.ls.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.ai.Gs(i,c)).next(()=>c)}).then(i=>(n.si=r,i))}function a_(t,e,n){let s=me();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=Sn();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(Q.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):L("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function c_(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(s,e)))}function l_(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ls.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.ls.allocateTargetId(s).next(o=>(r=new yn(e,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.si.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(e,s.targetId)),s})}async function ga(t,e,n){const s=W(t),r=s.si.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Er(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.si=s.si.remove(e),s.ii.delete(r.target)}function Su(t,e,n){const s=W(t);let r=Q.min(),i=me();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=W(a),h=u.ii.get(l);return h!==void 0?A.resolve(u.si.get(h)):u.ls.getTargetData(c,l)}(s,o,Cn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ni.Ks(o,e,n?r:Q.min(),n?i:me())).next(a=>(u_(s,l0(e),a),{documents:a,hi:i})))}function u_(t,e,n){let s=Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ri.set(e,s)}/**
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
 */class h_{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return A.resolve(this._i.get(n))}saveBundleMetadata(e,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:Dt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(s){return{name:s.name,query:Q0(s.bundledQuery),readTime:Dt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class f_{constructor(){this.overlays=new De(V.comparator),this.mi=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.mi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=vo(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=vo(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vo(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.mi.get(r.largestBatchId).delete(s.key);this.mi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new X0(n,s));let i=this.mi.get(n);i===void 0&&(i=me(),this.mi.set(n,i)),this.mi.set(n,i.add(s.key))}}/**
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
 */class Tc{constructor(){this.gi=new Ue(ke.yi),this.pi=new Ue(ke.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const s=new ke(e,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ei(new ke(e,n))}Ai(e,n){e.forEach(s=>this.removeReference(s,n))}Ri(e){const n=new V(new we([])),s=new ke(n,e),r=new ke(n,e+1),i=[];return this.pi.forEachInRange([s,r],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new V(new we([])),s=new ke(n,e),r=new ke(n,e+1);let i=me();return this.pi.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ke(e,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return V.comparator(e.key,n.key)||ie(e.Vi,n.Vi)}static Ii(e,n){return ie(e.Vi,n.Vi)||V.comparator(e.key,n.key)}}/**
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
 */class d_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new Ue(ke.yi)}checkEmpty(e){return A.resolve(this.$s.length===0)}addMutationBatch(e,n,s,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new W0(i,n,s,r);this.$s.push(o);for(const a of r)this.Si=this.Si.add(new ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ci(s),i=r<0?0:r;return A.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return A.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ke(n,0),r=new ke(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([s,r],o=>{const a=this.Di(o.Vi);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ue(ie);return n.forEach(r=>{const i=new ke(r,0),o=new ke(r,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{s=s.add(a.Vi)})}),A.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new ke(new V(i),0);let a=new Ue(ie);return this.Si.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Vi)),!0)},o),A.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(s=>{const r=this.Di(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return A.forEach(n.mutations,r=>{const i=new ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=s})}dn(e){}containsKey(e,n){const s=new ke(n,0),r=this.Si.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.$s.length,A.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
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
 */class p_{constructor(e){this.ki=e,this.docs=new De(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=Sn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():je.newInvalidDocument(r))}),A.resolve(s)}getAllFromCollection(e,n,s){let r=Sn();const i=new V(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||GE(zE(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,r){z()}Mi(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new g_(this)}getSize(e){return A.resolve(this.size)}}class g_ extends e_{constructor(e){super(),this.qn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.qn.addEntry(e,r)):this.qn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.qn.getEntry(e,n)}getAllFromCache(e,n){return this.qn.getEntries(e,n)}}/**
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
 */class m_{constructor(e){this.persistence=e,this.Oi=new vs(n=>mc(n),yc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Tc,this.targetCount=0,this.Bi=is.mn()}forEachTarget(e,n){return this.Oi.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),A.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.In(n),A.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Oi.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.$i.Ti(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.$i.Ai(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.$i.Ri(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.$i.Pi(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.$i.containsKey(n))}}/**
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
 */class y_{constructor(e,n){this.Li={},this.overlays={},this.ts=new pc(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new m_(this),this.indexManager=new J0,this.fs=function(s){return new p_(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new Y0(n),this.ds=new h_(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new f_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Li[e.toKey()];return s||(s=new d_(n,this.referenceDelegate),this.Li[e.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new v_(this.ts.next());return this.referenceDelegate.qi(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ki(e,n){return A.or(Object.values(this.Li).map(s=>()=>s.containsKey(e,n)))}}class v_ extends G0{constructor(e){super(),this.currentSequenceNumber=e}}class Cc{constructor(e){this.persistence=e,this.Qi=new Tc,this.ji=null}static Wi(e){return new Cc(e)}get zi(){if(this.ji)return this.ji;throw z()}addReference(e,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(r=>this.zi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qi(){this.ji=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.zi,s=>{const r=V.fromPath(s);return this.Hi(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(e){return 0}Hi(e,n){return A.or([()=>A.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ki(e,n)])}}class Iu{constructor(){this.activeTargetIds=Dd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w_{constructor(){this.Fr=new Iu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Iu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E_{Br(e){}shutdown(){}}/**
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
 */class Au{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const __={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class b_{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class T_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);L("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.ao(e,o,a,s).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw au("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}co(e,n,s,r,i){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=__[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,s,r){return new Promise((i,o)=>{const a=new NE;a.listenOnce(RE.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yo.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),i(l);break;case yo.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new j(b.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(y)>=0?y:b.UNKNOWN}(h.status);o(new j(d,h.message))}else o(new j(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(b.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=IE(),o=AE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new xE({})),this.uo(a.initMessageHeaders,n,s),yv()||wv()||Ev()||_v()||bv()||vv()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");L("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new b_({jr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",y),l.send(y))},Wr:()=>l.close()}),g=(y,S,T)=>{y.listen(S,x=>{try{T(x)}catch(P){setTimeout(()=>{throw P},0)}})};return g(l,Pr.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(l,Pr.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.eo())}),g(l,Pr.EventType.ERROR,y=>{h||(h=!0,au("Connection","WebChannel transport errored:",y),d.eo(new j(b.UNAVAILABLE,"The operation could not be completed")))}),g(l,Pr.EventType.MESSAGE,y=>{var S;if(!h){const T=y.data[0];pe(!!T);const x=T,P=x.error||((S=x[0])===null||S===void 0?void 0:S.error);if(P){L("Connection","WebChannel received error:",P);const q=P.status;let U=function(Ee){const J=Ce[Ee];if(J!==void 0)return Nd(J)}(q),oe=P.message;U===void 0&&(U=b.INTERNAL,oe="Unknown error status: "+q+" with message "+P.message),h=!0,d.eo(new j(U,oe)),l.close()}else L("Connection","WebChannel received:",T),d.no(T)}}),g(o,kE.STAT_EVENT,y=>{y.stat===ru.PROXY?L("Connection","Detected buffering proxy"):y.stat===ru.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Eo(){return typeof document!="undefined"?document:null}/**
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
 */function Xi(t){return new N0(t,!0)}class jd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Jn=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class qd{constructor(e,n,s,r,i,o,a,c){this.Jn=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new jd(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new j(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Go(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.Jn.enqueueAndForget(()=>this.Po===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C_ extends qd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=O0(this.M,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?Dt(i.readTime):Q.min()}(e);return this.listener.Ko(n,s)}Qo(e){const n={};n.database=pa(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=ca(a)?{documents:F0(r,a)}:{query:U0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Md(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=mi(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=$0(this.M,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=pa(this.M),n.removeTarget=e,this.Oo(n)}}class S_ extends qd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=L0(e.writeResults,e.commitTime),s=Dt(e.commitTime);return this.listener.Jo(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=pa(this.M),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>M0(this.M,s))};this.Oo(n)}}/**
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
 */class I_ extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(b.UNKNOWN,r.toString())})}co(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(b.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class A_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Jt(n),this.su=!1):L("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class R_{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{kn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=W(a);c.lu.add(4),await br(c),c._u.set("Unknown"),c.lu.delete(4),await Yi(c)}(this))})}),this._u=new A_(s,r)}}async function Yi(t){if(kn(t))for(const e of t.fu)await e(!0)}async function br(t){for(const e of t.fu)await e(!1)}function Hd(t,e){const n=W(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ac(n)?Ic(n):ws(n).Co()&&Sc(n,e))}function Kd(t,e){const n=W(t),s=ws(n);n.hu.delete(e),s.Co()&&zd(n,e),n.hu.size===0&&(s.Co()?s.ko():kn(n)&&n._u.set("Unknown"))}function Sc(t,e){t.wu.Z(e.targetId),ws(t).Qo(e)}function zd(t,e){t.wu.Z(e),ws(t).jo(e)}function Ic(t){t.wu=new R0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),ws(t).start(),t._u.iu()}function Ac(t){return kn(t)&&!ws(t).Do()&&t.hu.size>0}function kn(t){return W(t).lu.size===0}function Gd(t){t.wu=void 0}async function k_(t){t.hu.forEach((e,n)=>{Sc(t,e)})}async function x_(t,e){Gd(t),Ac(t)?(t._u.uu(e),Ic(t)):t._u.set("Unknown")}async function N_(t,e,n){if(t._u.set("Online"),e instanceof Od&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yi(t,s)}else if(e instanceof zr?t.wu.ut(e):e instanceof Pd?t.wu._t(e):t.wu.ht(e),!n.isEqual(Q.min()))try{const s=await Vd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),zd(r,a);const l=new yn(c.target,a,1,c.sequenceNumber);Sc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await yi(t,s)}}async function yi(t,e,n){if(!Er(e))throw e;t.lu.add(1),await br(t),t._u.set("Offline"),n||(n=()=>Vd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Yi(t)})}function Wd(t,e){return e().catch(n=>yi(t,n,e))}async function Qi(t){const e=W(t),n=en(e);let s=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;D_(e);)try{const r=await c_(e.localStore,s);if(r===null){e.cu.length===0&&n.ko();break}s=r.batchId,P_(e,r)}catch(r){await yi(e,r)}Xd(e)&&Yd(e)}function D_(t){return kn(t)&&t.cu.length<10}function P_(t,e){t.cu.push(e);const n=en(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Xd(t){return kn(t)&&!en(t).Do()&&t.cu.length>0}function Yd(t){en(t).start()}async function O_(t){en(t).Xo()}async function M_(t){const e=en(t);for(const n of t.cu)e.Ho(n.mutations)}async function L_(t,e,n){const s=t.cu.shift(),r=_c.from(s,e,n);await Wd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Qi(t)}async function F_(t,e){e&&en(t).zo&&await async function(n,s){if(r=s.code,b0(r)&&r!==b.ABORTED){const i=n.cu.shift();en(n).No(),await Wd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qi(n)}var r}(t,e),Xd(t)&&Yd(t)}async function Ru(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=kn(n);n.lu.add(3),await br(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Yi(n)}async function U_(t,e){const n=W(t);e?(n.lu.delete(2),await Yi(n)):e||(n.lu.add(2),await br(n),n._u.set("Unknown"))}function ws(t){return t.mu||(t.mu=function(e,n,s){const r=W(e);return r.tu(),new C_(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:k_.bind(null,t),Jr:x_.bind(null,t),Ko:N_.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ac(t)?Ic(t):t._u.set("Unknown")):(await t.mu.stop(),Gd(t))})),t.mu}function en(t){return t.gu||(t.gu=function(e,n,s){const r=W(e);return r.tu(),new S_(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:O_.bind(null,t),Jr:F_.bind(null,t),Yo:M_.bind(null,t),Jo:L_.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Qi(t)):(await t.gu.stop(),t.cu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))})),t.gu}/**
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
 */class Rc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Rc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kc(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),Er(t))return new j(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=ha(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new zn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new zn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ku{constructor(){this.yu=new De(V.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):z():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class os{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new os(e,n,zn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class B_{constructor(){this.Iu=void 0,this.listeners=[]}}class $_{constructor(){this.queries=new vs(e=>bd(e),Hi),this.onlineState="Unknown",this.Tu=new Set}}async function Qd(t,e){const n=W(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new B_),r)try{i.Iu=await n.onListen(s)}catch(o){const a=kc(o,`Initialization of query '${la(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&xc(n)}async function Jd(t,e){const n=W(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function V_(t,e){const n=W(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&xc(n)}function j_(t,e,n){const s=W(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function xc(t){t.Tu.forEach(e=>{e.next()})}class Zd{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new os(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),n=!0):this.vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class ep{constructor(e){this.key=e}}class tp{constructor(e){this.key=e}}class q_{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=me(),this.mutatedKeys=me(),this.Lu=Td(e),this.Uu=new zn(this.Lu)}get qu(){return this.Fu}Gu(e,n){const s=n?n.Ku:new ku,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Hr(this.query)&&r.size===this.query.limit?r.last():null,l=pi(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=wc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;d&&g?d.data.isEqual(g.data)?y!==S&&(s.track({type:3,doc:g}),T=!0):this.Qu(d,g)||(s.track({type:2,doc:g}),T=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),T=!0):d&&!g&&(s.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(g?(o=o.add(g),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Hr(this.query)||pi(this.query))for(;o.size>this.query.limit;){const u=Hr(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Ku:s,ei:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((l,u)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new os(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new ku,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=me(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new tp(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new ep(s))}),n}Ju(e){this.Fu=e.hi,this.Bu=me();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Yu(){return os.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class H_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class K_{constructor(e){this.key=e,this.Xu=!1}}class z_{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new vs(a=>bd(a),Hi),this.ea=new Map,this.na=new Set,this.sa=new De(V.comparator),this.ia=new Map,this.ra=new Tc,this.oa={},this.ua=new Map,this.aa=is.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function G_(t,e){const n=sb(t);let s,r;const i=n.ta.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await l_(n.localStore,Cn(e));n.isPrimaryClient&&Hd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await W_(n,e,s,a==="current")}return r}async function W_(t,e,n,s){t.ha=(u,h,d)=>async function(g,y,S,T){let x=y.view.Gu(S);x.ei&&(x=await Su(g.localStore,y.query,!1).then(({documents:U})=>y.view.Gu(U,x)));const P=T&&T.targetChanges.get(y.targetId),q=y.view.applyChanges(x,g.isPrimaryClient,P);return Nu(g,y.targetId,q.zu),q.snapshot}(t,u,h,d);const r=await Su(t.localStore,e,!0),i=new q_(e,r.hi),o=i.Gu(r.documents),a=wr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Nu(t,n,c.zu);const l=new H_(e,n,i);return t.ta.set(e,l),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),c.snapshot}async function X_(t,e){const n=W(t),s=n.ta.get(e),r=n.ea.get(s.targetId);if(r.length>1)return n.ea.set(s.targetId,r.filter(i=>!Hi(i,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ga(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kd(n.remoteStore,s.targetId),ma(n,s.targetId)}).catch(_r)):(ma(n,s.targetId),await ga(n.localStore,s.targetId,!0))}async function Y_(t,e,n){const s=rb(t);try{const r=await function(i,o){const a=W(i),c=He.now(),l=o.reduce((h,d)=>h.add(d.key),me());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ai.qs(h,l).next(d=>{u=d;const g=[];for(const y of o){const S=v0(y,u.get(y.key));S!=null&&g.push(new vr(y.key,S,Ed(S.value.mapValue),mn.exists(!0)))}return a.$s.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oa[i.currentUser.toKey()];c||(c=new De(ie)),c=c.insert(o,a),i.oa[i.currentUser.toKey()]=c}(s,r.batchId,n),await Tr(s,r.changes),await Qi(s.remoteStore)}catch(r){const i=kc(r,"Failed to persist write");n.reject(i)}}async function np(t,e){const n=W(t);try{const s=await o_(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ia.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?pe(o.Xu):r.removedDocuments.size>0&&(pe(o.Xu),o.Xu=!1))}),await Tr(n,s,e)}catch(s){await _r(s)}}function xu(t,e,n){const s=W(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=W(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&xc(a)}(s.eventManager,e),r.length&&s.Zu.Ko(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Q_(t,e,n){const s=W(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ia.get(e),i=r&&r.key;if(i){let o=new De(V.comparator);o=o.insert(i,je.newNoDocument(i,Q.min()));const a=me().add(i),c=new Wi(Q.min(),new Map,new Ue(ie),o,a);await np(s,c),s.sa=s.sa.remove(i),s.ia.delete(e),Nc(s)}else await ga(s.localStore,e,!1).then(()=>ma(s,e,n)).catch(_r)}async function J_(t,e){const n=W(t),s=e.batch.batchId;try{const r=await i_(n.localStore,e);rp(n,s,null),sp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Tr(n,r)}catch(r){await _r(r)}}async function Z_(t,e,n){const s=W(t);try{const r=await function(i,o){const a=W(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.$s.lookupMutationBatch(c,o).next(u=>(pe(u!==null),l=u.keys(),a.$s.removeMutationBatch(c,u))).next(()=>a.$s.performConsistencyCheck(c)).next(()=>a.ai.qs(c,l))})}(s.localStore,e);rp(s,e,n),sp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Tr(s,r)}catch(r){await _r(r)}}function sp(t,e){(t.ua.get(e)||[]).forEach(n=>{n.resolve()}),t.ua.delete(e)}function rp(t,e,n){const s=W(t);let r=s.oa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oa[s.currentUser.toKey()]=r}}function ma(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ea.get(e))t.ta.delete(s),n&&t.Zu.la(s,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(s=>{t.ra.containsKey(s)||ip(t,s)})}function ip(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);n!==null&&(Kd(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Nc(t))}function Nu(t,e,n){for(const s of n)s instanceof ep?(t.ra.addReference(s.key,e),eb(t,s)):s instanceof tp?(L("SyncEngine","Document no longer in limbo: "+s.key),t.ra.removeReference(s.key,e),t.ra.containsKey(s.key)||ip(t,s.key)):z()}function eb(t,e){const n=e.key,s=n.path.canonicalString();t.sa.get(n)||t.na.has(s)||(L("SyncEngine","New document in limbo: "+n),t.na.add(s),Nc(t))}function Nc(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new V(we.fromString(e)),s=t.aa.next();t.ia.set(s,new K_(n)),t.sa=t.sa.insert(n,s),Hd(t.remoteStore,new yn(Cn(vc(n.path)),s,2,pc.A))}}async function Tr(t,e,n){const s=W(t),r=[],i=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,c)=>{o.push(s.ha(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=bc.Js(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Ko(r),await async function(a,c){const l=W(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.zs,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.Hs,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Er(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.si.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.si=l.si.insert(h,y)}}}(s.localStore,i))}async function tb(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await $d(n.localStore,e);n.currentUser=e,function(r,i){r.ua.forEach(o=>{o.forEach(a=>{a.reject(new j(b.CANCELLED,i))})}),r.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Tr(n,s.ci)}}function nb(t,e){const n=W(t),s=n.ia.get(e);if(s&&s.Xu)return me().add(s.key);{let r=me();const i=n.ea.get(e);if(!i)return r;for(const o of i){const a=n.ta.get(o);r=r.unionWith(a.view.qu)}return r}}function sb(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=np.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q_.bind(null,e),e.Zu.Ko=V_.bind(null,e.eventManager),e.Zu.la=j_.bind(null,e.eventManager),e}function rb(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z_.bind(null,e),e}class ib{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Xi(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return r_(this.persistence,new n_,e.initialUser,this.M)}_a(e){return new y_(Cc.Wi,this.M)}da(e){return new w_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ob{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tb.bind(null,this.syncEngine),await U_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $_}createDatastore(e){const n=Xi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new T_(r));var r;return function(i,o,a,c){return new I_(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>xu(this.syncEngine,a,0),o=Au.vt()?new Au:new E_,new R_(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new z_(s,r,i,o,a,c);return l&&(u.ca=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);L("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await br(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class op{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ab{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=md.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=kc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cb(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await $d(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ub(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ru(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ru(e.remoteStore,i)),t.onlineComponents=e}async function ub(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await cb(t,new ib)),t.offlineComponents}async function ap(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await lb(t,new ob)),t.onlineComponents}function hb(t){return ap(t).then(e=>e.syncEngine)}async function cp(t){const e=await ap(t),n=e.eventManager;return n.onListen=G_.bind(null,e.syncEngine),n.onUnlisten=X_.bind(null,e.syncEngine),n}function fb(t,e,n={}){const s=new Nt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new op({next:h=>{i.enqueueAndForget(()=>Jd(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new j(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new j(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zd(vc(o.path),l,{includeMetadataChanges:!0,Du:!0});return Qd(r,u)}(await cp(t),t.asyncQueue,e,n,s)),s.promise}function db(t,e,n={}){const s=new Nt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new op({next:h=>{i.enqueueAndForget(()=>Jd(r,u)),h.fromCache&&a.source==="server"?c.reject(new j(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zd(o,l,{includeMetadataChanges:!0,Du:!0});return Qd(r,u)}(await cp(t),t.asyncQueue,e,n,s)),s.promise}const Du=new Map;/**
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
 */function lp(t,e,n){if(!n)throw new j(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pb(t,e,n,s){if(e===!0&&s===!0)throw new j(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pu(t){if(!V.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(V.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dc(t);throw new j(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Mu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Pc{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1,e instanceof ns?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new j(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(r.options.projectId)}(e))}get app(){if(!this._app)throw new j(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PE;switch(n.type){case"gapi":const s=n.client;return pe(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new LE(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(L("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class at{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Ji{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class Xt extends Ji{constructor(e,n,s){super(e,n,vc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new V(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function YT(t,e,...n){if(t=Ot(t),lp("collection","path",e),t instanceof Pc){const s=we.fromString(e,...n);return Ou(s),new Xt(t,null,s)}{if(!(t instanceof at||t instanceof Xt))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Ou(s),new Xt(t.firestore,null,s)}}function gb(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=md.R()),lp("doc","path",e),t instanceof Pc){const s=we.fromString(e,...n);return Pu(s),new at(t,null,new V(s))}{if(!(t instanceof at||t instanceof Xt))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Pu(s),new at(t.firestore,t instanceof Xt?t.converter:null,new V(s))}}/**
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
 */class mb{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new jd(this,"async_queue_retry"),this.Ua=()=>{const n=Eo();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const n=Eo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new Nt;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!Er(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const n=this.Na.then(()=>(this.$a=!0,e().catch(s=>{this.Fa=s,this.$a=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Jt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(e,n,s){this.qa(),this.La.indexOf(e)>-1&&(n=0);const r=Rc.createAndSchedule(this,e,n,s,i=>this.Qa(i));return this.Oa.push(r),r}qa(){this.Fa&&z()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const n of this.Oa)if(n.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const n=this.Oa.indexOf(e);this.Oa.splice(n,1)}}class Cr extends Pc{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new mb,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||up(this),this._firestoreClient.terminate()}}function QT(t=df()){return hf(t,"firestore").getImmediate()}function Oc(t){return t._firestoreClient||up(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function up(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new jE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ab(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Mc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(Be.fromBase64String(e))}catch(n){throw new j(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lc{constructor(e){this._methodName=e}}/**
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
 */class Fc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const yb=/^__.*__$/;class vb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}function hp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Uc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new Uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.ec(e),r}nc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.Ja(),r}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return vi(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(hp(this.Ya)&&yb.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class wb{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Xi(e)}uc(e,n,s,r=!1){return new Uc({Ya:e,methodName:n,oc:s,path:tt.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function fp(t){const e=t._freezeSettings(),n=Xi(t._databaseId);return new wb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dp(t,e,n,s,r,i={}){const o=t.uc(i.merge||i.mergeFields?2:0,e,n,r);yp("Data must be an object, but it was:",o,s);const a=gp(s,o);let c,l;if(i.merge)c=new ia(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Eb(e,h,n);if(!o.contains(d))throw new j(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bb(u,d)||u.push(d)}c=new ia(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new vb(new gt(a),c,l)}class Bc extends Lc{_toFieldTransform(e){return new p0(e.path,new rr)}isEqual(e){return e instanceof Bc}}function pp(t,e){if(mp(t=Ot(t)))return yp("Unsupported field value:",e,t),gp(t,e);if(t instanceof Lc)return function(n,s){if(!hp(s.Ya))throw s.ic(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ic(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=pp(o,s.sc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return h0(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=He.fromDate(n);return{timestampValue:mi(s.M,r)}}if(n instanceof He){const r=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mi(s.M,r)}}if(n instanceof Fc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof as)return{bytesValue:Md(s.M,n._byteString)};if(n instanceof at){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ec(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ic(`Unsupported field value: ${Dc(n)}`)}(t,e)}function gp(t,e){const n={};return yd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(s,r)=>{const i=pp(r,e.Za(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function mp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Fc||t instanceof as||t instanceof at||t instanceof Lc)}function yp(t,e,n){if(!mp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Dc(n);throw s==="an object"?e.ic(t+" a custom object"):e.ic(t+" "+s)}}function Eb(t,e,n){if((e=Ot(e))instanceof Mc)return e._internalPath;if(typeof e=="string")return vp(t,e);throw vi("Field path arguments must be of type string or ",t,!1,void 0,n)}const _b=new RegExp("[~\\*/\\[\\]]");function vp(t,e,n){if(e.search(_b)>=0)throw vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mc(...e.split("."))._internalPath}catch{throw vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(b.INVALID_ARGUMENT,a+t+c)}function bb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tb extends wp{data(){return super.data()}}function Ep(t,e){return typeof e=="string"?vp(t,e):e instanceof Mc?e._internalPath:e._delegate._internalPath}/**
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
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _p extends wp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ep("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Gr extends _p{data(e={}){return super.data(e)}}class Cb{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ks(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Gr(this._firestore,this._userDataWriter,s.key,s,new ks(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Gr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ks(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Gr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ks(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Sb(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Sb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function Ib(t){if(pi(t)&&t.explicitOrderBy.length===0)throw new j(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Ab{convertValue(e,n="none"){switch(Tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return ms(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Fc(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=wd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(tr(e));default:return null}}convertTimestamp(e){const n=Zt(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);pe(Bd(s));const r=new ns(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||Jt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */function JT(t){t=In(t,at);const e=In(t.firestore,Cr);return fb(Oc(e),t._key).then(n=>Rb(e,t,n))}class Tp extends Ab{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function ZT(t){t=In(t,Ji);const e=In(t.firestore,Cr),n=Oc(e),s=new Tp(e);return Ib(t._query),db(n,t._query).then(r=>new Cb(e,s,t,r))}function eC(t,e,n){t=In(t,at);const s=In(t.firestore,Cr),r=bp(t.converter,e,n);return Cp(s,[dp(fp(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,mn.none())])}function tC(t,e){const n=In(t.firestore,Cr),s=gb(t),r=bp(t.converter,e);return Cp(n,[dp(fp(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,mn.exists(!1))]).then(()=>s)}function Cp(t,e){return function(n,s){const r=new Nt;return n.asyncQueue.enqueueAndForget(async()=>Y_(await hb(n),s,r)),r.promise}(Oc(t),e)}function Rb(t,e,n){const s=n.docs.get(e._key),r=new Tp(t);return new _p(t,r,e._key,s,new ks(n.hasPendingWrites,n.fromCache),e.converter)}function nC(){return new Bc("serverTimestamp")}(function(t,e=!0){(function(n){gs=n})(ff),Gs(new Jn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Cr(r,new OE(n.getProvider("auth-internal")),new UE(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Wt(iu,"3.4.7",t),Wt(iu,"3.4.7","esm2017")})();/**
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
 */const Sp="firebasestorage.googleapis.com",Ip="storageBucket",kb=2*60*1e3,xb=10*60*1e3;/**
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
 */class Te extends cr{constructor(e,n){super(_o(e),`Firebase Storage: ${n} (${_o(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}_codeEquals(e){return _o(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _o(t){return"storage/"+t}function $c(){const t="An unknown error occurred, please check the error payload for server response.";return new Te("unknown",t)}function Nb(t){return new Te("object-not-found","Object '"+t+"' does not exist.")}function Db(t){return new Te("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te("unauthenticated",t)}function Ob(){return new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Mb(t){return new Te("unauthorized","User does not have permission to access '"+t+"'.")}function Lb(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Fb(){return new Te("canceled","User canceled the upload/download.")}function Ub(t){return new Te("invalid-url","Invalid URL '"+t+"'.")}function Bb(t){return new Te("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function $b(){return new Te("no-default-bucket","No default bucket found. Did you set the '"+Ip+"' property when initializing the app?")}function Vb(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function jb(){return new Te("no-download-url","The given file does not have any download URLs.")}function ya(t){return new Te("invalid-argument",t)}function Ap(){return new Te("app-deleted","The Firebase app was deleted.")}function qb(t){return new Te("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $s(t,e){return new Te("invalid-format","String does not match format '"+t+"': "+e)}function Cs(t){throw new Te("internal-error","Internal error: "+t)}/**
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
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(s.path==="")return s;throw Bb(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(U){U.path_=decodeURIComponent(U.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),y={bucket:1,path:3},S=n===Sp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",x=new RegExp(`^https?://${S}/${r}/${T}`,"i"),q=[{regex:a,indices:c,postModify:i},{regex:g,indices:y,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let U=0;U<q.length;U++){const oe=q[U],Ee=oe.regex.exec(e);if(Ee){const J=Ee[oe.indices.bucket];let _e=Ee[oe.indices.path];_e||(_e=""),s=new ot(J,_e),oe.postModify(s);break}}if(s==null)throw Ub(e);return s}}class Hb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Kb(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...T){l||(l=!0,e.apply(null,T))}function h(T){r=setTimeout(()=>{r=null,t(g,c())},T)}function d(){i&&clearTimeout(i)}function g(T,...x){if(l){d();return}if(T){d(),u.call(null,T,...x);return}if(c()||o){d(),u.call(null,T,...x);return}s<64&&(s*=2);let q;a===1?(a=2,q=0):q=(s+Math.random())*1e3,h(q)}let y=!1;function S(T){y||(y=!0,d(),!l&&(r!==null?(T||(a=2),clearTimeout(r),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function zb(t){t(!1)}/**
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
 */function Gb(t){return t!==void 0}function Wb(t){return typeof t=="object"&&!Array.isArray(t)}function Vc(t){return typeof t=="string"||t instanceof String}function Lu(t){return jc()&&t instanceof Blob}function jc(){return typeof Blob!="undefined"}function Fu(t,e,n,s){if(s<e)throw ya(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ya(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function qc(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Rp(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var vn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vn||(vn={}));/**
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
 */class Xb{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Mr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===vn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===vn.ABORT;s(!1,new Mr(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Mr(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Gb(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=$c();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Ap():Fb();o(c)}else{const c=Lb();o(c)}};this.canceled_?n(!1,new Mr(!1,null,!0)):this.backoffId_=Kb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Mr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Yb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Qb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Jb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Zb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eT(t,e,n,s,r,i){const o=Rp(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Jb(c,e),Yb(c,n),Qb(c,i),Zb(c,s),new Xb(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function tT(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function nT(...t){const e=tT();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(jc())return new Blob(t);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function sT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function rT(t){return atob(t)}/**
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
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bo{constructor(e,n){this.data=e,this.contentType=n||null}}function iT(t,e){switch(t){case St.RAW:return new bo(kp(e));case St.BASE64:case St.BASE64URL:return new bo(xp(t,e));case St.DATA_URL:return new bo(aT(e),cT(e))}throw $c()}function kp(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function oT(t){let e;try{e=decodeURIComponent(t)}catch{throw $s(St.DATA_URL,"Malformed data URL.")}return kp(e)}function xp(t,e){switch(t){case St.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw $s(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw $s(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rT(e)}catch{throw $s(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Np{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $s(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=lT(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function aT(t){const e=new Np(t);return e.base64?xp(St.BASE64,e.rest):oT(e.rest)}function cT(t){return new Np(t).contentType}function lT(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ht{constructor(e,n){let s=0,r="";Lu(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Lu(this.data_)){const s=this.data_,r=sT(s,e,n);return r===null?null:new Ht(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Ht(s,!0)}}static getBlob(...e){if(jc()){const n=e.map(s=>s instanceof Ht?s.data_:s);return new Ht(nT.apply(null,n))}else{const n=e.map(o=>Vc(o)?iT(St.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Ht(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Dp(t){let e;try{e=JSON.parse(t)}catch{return null}return Wb(e)?e:null}/**
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
 */function uT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hT(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Pp(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function fT(t,e){return e}class Ge{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||fT}}let Lr=null;function dT(t){return!Vc(t)||t.length<2?t:Pp(t)}function Op(){if(Lr)return Lr;const t=[];t.push(new Ge("bucket")),t.push(new Ge("generation")),t.push(new Ge("metageneration")),t.push(new Ge("name","fullPath",!0));function e(i,o){return dT(o)}const n=new Ge("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ge("size");return r.xform=s,t.push(r),t.push(new Ge("timeCreated")),t.push(new Ge("updated")),t.push(new Ge("md5Hash",null,!0)),t.push(new Ge("cacheControl",null,!0)),t.push(new Ge("contentDisposition",null,!0)),t.push(new Ge("contentEncoding",null,!0)),t.push(new Ge("contentLanguage",null,!0)),t.push(new Ge("contentType",null,!0)),t.push(new Ge("metadata","customMetadata",!0)),Lr=t,Lr}function pT(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new ot(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function gT(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return pT(s,t),s}function Mp(t,e,n){const s=Dp(e);return s===null?null:gT(t,s,n)}function mT(t,e,n,s){const r=Dp(e);if(r===null||!Vc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=qc(d,n,s),y=Rp({alt:"media",token:l});return g+y})[0]}function yT(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Lp{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Fp(t){if(!t)throw $c()}function vT(t,e){function n(s,r){const i=Mp(t,r,e);return Fp(i!==null),i}return n}function wT(t,e){function n(s,r){const i=Mp(t,r,e);return Fp(i!==null),mT(i,r,t.host,t._protocol)}return n}function Up(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ob():r=Pb():n.getStatus()===402?r=Db(t.bucket):n.getStatus()===403?r=Mb(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function ET(t){const e=Up(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Nb(t.path)),i.serverResponse=r.serverResponse,i}return n}function _T(t,e,n){const s=e.fullServerUrl(),r=qc(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Lp(r,i,wT(t,n),o);return a.errorHandler=ET(e),a}function bT(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TT(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=bT(null,e)),s}function CT(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let q="";for(let U=0;U<2;U++)q=q+Math.random().toString().slice(2);return q}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=TT(e,s,r),u=yT(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=Ht.getBlob(h,s,d);if(g===null)throw Vb();const y={name:l.fullPath},S=qc(i,t.host,t._protocol),T="POST",x=t.maxUploadRetryTime,P=new Lp(S,T,vT(t,n),x);return P.urlParams=y,P.headers=o,P.body=g.uploadData(),P.errorHandler=Up(e),P}class ST{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Cs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IT extends ST{initXhr(){this.xhr_.responseType="text"}}function Bp(){return new IT}/**
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
 */class An{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new An(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Pp(this._location.path)}get storage(){return this._service}get parent(){const e=uT(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new An(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qb(e)}}function AT(t,e,n){t._throwIfRoot("uploadBytes");const s=CT(t.storage,t._location,Op(),new Ht(e,!0),n);return t.storage.makeRequestWithTokens(s,Bp).then(r=>({metadata:r,ref:t}))}function RT(t){t._throwIfRoot("getDownloadURL");const e=_T(t.storage,t._location,Op());return t.storage.makeRequestWithTokens(e,Bp).then(n=>{if(n===null)throw jb();return n})}function kT(t,e){const n=hT(t._location.path,e),s=new ot(t._location.bucket,n);return new An(t.storage,s)}/**
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
 */function xT(t){return/^[A-Za-z]+:\/\//.test(t)}function NT(t,e){return new An(t,e)}function $p(t,e){if(t instanceof Hc){const n=t;if(n._bucket==null)throw $b();const s=new An(n,n._bucket);return e!=null?$p(s,e):s}else return e!==void 0?kT(t,e):t}function DT(t,e){if(e&&xT(e)){if(t instanceof Hc)return NT(t,e);throw ya("To use ref(service, url), the first argument must be a Storage instance.")}else return $p(t,e)}function Uu(t,e){const n=e==null?void 0:e[Ip];return n==null?null:ot.makeFromBucketSpec(n,t)}class Hc{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Sp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kb,this._maxUploadRetryTime=xb,this._requests=new Set,r!=null?this._bucket=ot.makeFromBucketSpec(r,this._host):this._bucket=Uu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=Uu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new An(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new Hb(Ap());{const i=eT(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Bu="@firebase/storage",$u="0.9.4";/**
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
 */const Vp="storage";function sC(t,e,n){return t=Ot(t),AT(t,e,n)}function rC(t){return t=Ot(t),RT(t)}function iC(t,e){return t=Ot(t),DT(t,e)}function oC(t=df(),e){return t=Ot(t),hf(t,Vp).getImmediate({identifier:e})}function PT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Hc(n,s,r,e,ff)}function OT(){Gs(new Jn(Vp,PT,"PUBLIC").setMultipleInstances(!0)),Wt(Bu,$u,""),Wt(Bu,$u,"esm2017")}OT();export{LT as A,FT as B,Am as C,Br as D,WT as E,_t as F,GT as G,KT as H,zT as I,QT as P,hv as R,JT as Y,ft as a,Tt as b,$T as c,jT as d,XT as e,iC as f,oC as g,sC as h,Gt as i,rC as j,gb as k,ZT as l,eC as m,tC as n,BT as o,nC as p,Ah as q,uh as r,$h as s,MT as t,xs as u,VT as v,YT as w,UT as x,HT as y,qT as z};
