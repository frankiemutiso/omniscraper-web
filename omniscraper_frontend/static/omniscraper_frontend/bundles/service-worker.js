if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const l={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return l;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"219-78853970286932d673c4.js",revision:null},{url:"351-a93efc0774e23d2a951c.js",revision:null},{url:"624-e4a362f2ab930f2072ab.js",revision:null},{url:"830-3726a0eb11ff2546dfc2.js",revision:null},{url:"main.d477bc5ca0f43433991a.js",revision:null},{url:"main.ef4d552c.css",revision:null},{url:"runtime.2f3c236f026ca0fa06e4.js",revision:null},{url:"vendors.6e56f63482cbee6eb3ea.js",revision:null},{url:"vendors.6e56f63482cbee6eb3ea.js.LICENSE.txt",revision:"ea88211925d18270e09b4691b32a2900"}],{})}));
