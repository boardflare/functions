var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,i,u,l,s,d,f,p,c,h,v,b,m,g,y,j,w,S,P={572:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(254),t.e(530)]).then((()=>()=>t(116))),"./extension":()=>Promise.all([t.e(254),t.e(530)]).then((()=>()=>t(116))),"./style":()=>Promise.all([t.e(254),t.e(215)]).then((()=>()=>t(747)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},E={};function k(e){var r=E[e];if(void 0!==r)return r.exports;var t=E[e]={id:e,exports:{}};return P[e].call(t.exports,t,t.exports,k),t.exports}k.m=P,k.c=E,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{215:"2837f1718aac9074a6ab",254:"8cae1765026eb331001d",460:"ab00393e0dfc5c2d73ef",513:"16be2308ac74045cae1f",530:"57aa316a035c27ee890c"}[e]+".js?v="+{215:"2837f1718aac9074a6ab",254:"8cae1765026eb331001d",460:"ab00393e0dfc5c2d73ef",513:"16be2308ac74045cae1f",530:"57aa316a035c27ee890c"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="spreadsheet-editor:",k.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var f=(r,a)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="spreadsheet-editor",u=(e,r,t,a)=>{var n=o[e]=o[e]||{},u=n[r];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[r]={get:t,from:i,eager:!!a})},l=[];return"default"===t&&(u("jspreadsheet-ce","4.13.4",(()=>k.e(513).then((()=>()=>k(513))))),u("papaparse","5.4.1",(()=>k.e(460).then((()=>()=>k(460))))),u("spreadsheet-editor","0.7.2",(()=>Promise.all([k.e(254),k.e(530)]).then((()=>()=>k(116)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(u=e[o]))[0]?"-":(a>0?".":"")+(a=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,u=1,l=!0;;u++,i++){var s,d,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!l||("u"==f?u>a&&!n:""==f!=n);if("u"==d){if(!l||"u"!=f)return!1}else if(l)if(f==d)if(u<=a){if(s!=e[u])return!1}else{if(n?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(n||u<=a)return!1;l=!1,u--}else{if(u<=a||d<f!=n)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?o(h,r):!c())}return!!c()},i=(e,r)=>{var t=k.S[e];if(!t||!k.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},s=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",d=(e,r,t,a)=>{var n=l(e,t);return o(a,n)||c(s(e,t,n,a)),v(e[t][n])},f=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},p=(e,r,t,a)=>{var o=e[t];return"No satisfying version ("+n(a)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},h=(e,r,t,a)=>{c(p(e,r,t,a))},v=e=>(e.loaded=1,e.get()),m=(b=e=>function(r,t,a,n){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,a,n)):e(r,k.S[r],t,a,n)})(((e,r,t,a)=>(i(e,t),v(f(r,t,a)||h(r,e,t,a)||u(r,t))))),g=b(((e,r,t,a)=>(i(e,t),d(r,0,t,a)))),y=b(((e,r,t,a,n)=>{var o=r&&k.o(r,t)&&f(r,t,a);return o?v(o):n()})),j={},w={29:()=>g("default","react",[1,18,2,0]),85:()=>g("default","@jupyterlab/application",[1,4,2,4]),281:()=>g("default","@jupyterlab/coreutils",[1,6,2,4]),316:()=>g("default","@jupyterlab/ui-components",[1,4,2,4]),383:()=>g("default","@jupyterlab/documentsearch",[1,4,2,4]),416:()=>g("default","@jupyterlab/filebrowser",[1,4,2,4]),480:()=>y("default","papaparse",[1,5,4,1],(()=>k.e(460).then((()=>()=>k(460))))),586:()=>g("default","@jupyterlab/apputils",[1,4,3,4]),615:()=>g("default","@jupyterlab/launcher",[1,4,2,4]),652:()=>g("default","@jupyterlab/mainmenu",[1,4,2,4]),655:()=>g("default","@jupyterlab/statusbar",[1,4,2,4]),768:()=>m("default","@jupyterlab/docregistry",[1,4,2,4]),806:()=>y("default","jspreadsheet-ce",[1,4,13,4],(()=>k.e(513).then((()=>()=>k(513))))),882:()=>g("default","@lumino/widgets",[1,2,3,1,,"alpha",0]),901:()=>g("default","@lumino/signaling",[1,2,0,0]),930:()=>g("default","@lumino/coreutils",[1,2,0,0]),996:()=>g("default","@jupyterlab/translation",[1,4,2,4])},S={530:[29,85,281,316,383,416,480,586,615,652,655,768,806,882,901,930,996]},k.f.consumes=(e,r)=>{k.o(S,e)&&S[e].forEach((e=>{if(k.o(j,e))return r.push(j[e]);var t=r=>{j[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}},a=r=>{delete j[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var n=w[e]();n.then?r.push(j[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{k.b=document.baseURI||self.location.href;var e={556:0};k.f.j=(r,t)=>{var a=k.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,u]=t,l=0;if(o.some((r=>0!==e[r]))){for(a in i)k.o(i,a)&&(k.m[a]=i[a]);u&&u(k)}for(r&&r(t);l<o.length;l++)n=o[l],k.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkspreadsheet_editor=self.webpackChunkspreadsheet_editor||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),k.nc=void 0;var x=k(572);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["spreadsheet-editor"]=x})();