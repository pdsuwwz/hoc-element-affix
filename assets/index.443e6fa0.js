import{c as h,a as v,N as a,r as _,o as u,b as f,w as y,d as E,e as x,H as g}from"./vendor.03c791ec.js";(function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const o=function(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,o)}})();const d={},m=function(n,s){return s&&s.length!==0?Promise.all(s.map(e=>{if((e=`${e}`)in d)return;d[e]=!0;const o=e.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const t=document.createElement("link");return t.rel=o?"stylesheet":"modulepreload",o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o?new Promise((i,c)=>{t.addEventListener("load",i),t.addEventListener("error",c)}):void 0})).then(()=>n()):n()},A=[{path:"/",name:"hoc-element-affix",component:()=>m(()=>import("./ExampleAffix.1924872c.js"),["assets/ExampleAffix.1924872c.js","assets/ExampleAffix.a87a1566.css","assets/vendor.03c791ec.js"]),meta:{title:"@hoc-element/affix"}},{path:"/:pathMatch(.*)",name:"404",component:()=>m(()=>import("./404.e72b6524.js"),["assets/404.e72b6524.js","assets/vendor.03c791ec.js"])}];var l=v({history:h(),routes:A});a.configure({showSpinner:!1}),l.beforeEach(async(n,s,e)=>{a.start(),e()}),l.afterEach(n=>{a.done()});var L=(n,s)=>{const e=n.__vccOpts||n;for(const[o,r]of s)e[o]=r;return e};const p=x(L({name:"AppMain"},[["render",function(n,s,e,o,r,t){const i=_("router-view");return u(),f(i,null,{default:y(({Component:c})=>[(u(),f(E(c)))]),_:1})}]]));p.use(l),p.use(g).mount("#app");export{L as _};
