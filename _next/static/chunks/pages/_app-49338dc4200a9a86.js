(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7997:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(959);let a=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=(0,r.createContext)(void 0),i={setTheme(e){},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i},m=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=u,defaultTheme:m=n?"system":"light",attribute:d="data-theme",value:$,children:g,nonce:b})=>{let[w,p]=(0,r.useState)(()=>f(i,m)),[S,E]=(0,r.useState)(()=>f(i)),T=$?Object.values($):c,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let l=$?$[r]:r,o=t?v():null,i=document.documentElement;if("class"===d?(i.classList.remove(...T),l&&i.classList.add(l)):l?i.setAttribute(d,l):i.removeAttribute(d),s){let c=a.includes(m)?m:null,u=a.includes(r)?r:c;i.style.colorScheme=u}null==o||o()},[]),k=(0,r.useCallback)(e=>{p(e);try{localStorage.setItem(i,e)}catch(t){}},[e]),_=(0,r.useCallback)(t=>{let r=y(t);E(r),"system"===w&&n&&!e&&C("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&k(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),(0,r.useEffect)(()=>{C(null!=e?e:w)},[e,w]);let x=(0,r.useMemo)(()=>({theme:w,setTheme:k,forcedTheme:e,resolvedTheme:"system"===w?S:w,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[w,k,e,S,n,c]);return r.createElement(o.Provider,{value:x},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:m,attribute:d,value:$,children:g,attrs:T,nonce:b}),g)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:u})=>{let d="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?a.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let l=c?c[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return o&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},y=e?`!function(){${h}${v(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${d?"":"else{"+v(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(r){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},5856:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6117)}])},6117:function(e,t,n){"use strict";n.r(t);var r=n(1527);n(8105);var a=n(7997);t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.f,{children:(0,r.jsx)(t,{...n})})})}},8105:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(5856),t(3225)}),_N_E=e.O()}]);