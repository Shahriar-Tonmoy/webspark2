(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{2386:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/image-generator",function(){return a(2527)}])},9786:function(e,s,a){"use strict";var t=a(5893);a(7294),s.Z=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"reaction-section",children:(0,t.jsxs)("div",{className:"btn-grp",children:[(0,t.jsxs)("div",{className:"left-side-btn dropup",children:[(0,t.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#likeModal",className:"react-btn btn-default btn-small btn-border me-2",children:(0,t.jsx)("i",{className:"feather-thumbs-up"})}),(0,t.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#dislikeModal",className:"react-btn btn-default btn-small btn-border me-2",children:(0,t.jsx)("i",{className:"feather-thumbs-down"})}),(0,t.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#shareModal",className:"react-btn btn-default btn-small btn-border me-2",children:(0,t.jsx)("i",{className:"feather-share"})}),(0,t.jsx)("button",{type:"button",className:"react-btn btn-default btn-small btn-border dropdown-toggle me-2","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,t.jsx)("i",{className:"feather-more-vertical"})}),(0,t.jsxs)("ul",{className:"dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,t.jsx)("i",{className:"feather-copy"})," Copy"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,t.jsx)("i",{className:"feather-tag"})," Pin Chat"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,t.jsx)("i",{className:"feather-file-text"})," Rename"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item delete-item",href:"#",children:[(0,t.jsx)("i",{className:"feather-trash-2"})," Delete Chat"]})})]})]}),(0,t.jsx)("div",{className:"right-side-btn",children:(0,t.jsxs)("button",{className:"react-btn btn-default btn-small btn-border",children:[(0,t.jsx)("i",{className:"feather-repeat"}),(0,t.jsx)("span",{children:"Regenerate"})]})})]})})})},8109:function(e,s,a){"use strict";a.d(s,{Z:function(){return c}});var t=a(5893),n=a(7294),r=a(8851),l=e=>{let{RightPanelData:s}=e;return(0,t.jsx)(t.Fragment,{children:s.map((e,s)=>(0,t.jsxs)("li",{className:"history-box ".concat(e.isActive?"active":""),children:[e.title,(0,t.jsxs)("div",{className:"dropdown history-box-dropdown",children:[(0,t.jsx)("button",{type:"button",className:"more-info-icon dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,t.jsx)("i",{className:"feather-more-horizontal"})}),(0,t.jsx)("ul",{className:"dropdown-menu",children:e.list.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,t.jsx)("i",{className:"feather-".concat(e.icon)})," ",e.text]})},s))})]})]},s))})},i=a(7177),c=()=>{let{shouldCollapseRightbar:e}=(0,i.bp)(),[s,a]=(0,n.useState)({previous:!0,yesterday:!0,older:!0}),c=e=>{a(s=>({...s,[e]:!s[e]}))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"rbt-right-side-panel popup-dashboardright-section ".concat(e?"collapsed":""),children:[(0,t.jsx)("div",{className:"right-side-top",children:(0,t.jsxs)("a",{className:"btn-default bg-solid-primary","data-bs-toggle":"modal","data-bs-target":"#newchatModal",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"feather-plus-circle"})}),(0,t.jsx)("span",{children:"New Chat"})]})}),(0,t.jsxs)("div",{className:"right-side-bottom",children:[(0,t.jsxs)("div",{className:"small-search search-section mb--20",children:[(0,t.jsx)("input",{type:"search",placeholder:"Search Here..."}),(0,t.jsx)("i",{className:"feather-search"})]}),(0,t.jsxs)("div",{className:"chat-history-section",children:[(0,t.jsx)("h6",{className:"title",children:"Today"}),(0,t.jsx)("ul",{className:"chat-history-list",children:r&&r.rightPanel.map((e,s)=>(0,n.createElement)(l,{...e,key:s,RightPanelData:e.today}))})]}),(0,t.jsxs)("div",{className:"chat-history-section has-show-more ".concat(s.yesterday?"":"active"),children:[(0,t.jsx)("h6",{className:"title",children:"Yesterday"}),(0,t.jsx)("ul",{className:"chat-history-list has-show-more-inner-content",children:r&&r.rightPanel.map((e,s)=>(0,n.createElement)(l,{...e,key:s,RightPanelData:e.yesterday}))}),(0,t.jsx)("div",{className:"rbt-show-more-btn ".concat(s.yesterday?"":"active"),onClick:()=>c("yesterday"),children:"Show More"})]}),(0,t.jsxs)("div",{className:"chat-history-section has-show-more ".concat(s.previous?"":"active"),children:[(0,t.jsx)("h6",{className:"title",children:"Previous 7 days"}),(0,t.jsx)("ul",{className:"chat-history-list has-show-more-inner-content",children:r&&r.rightPanel.map((e,s)=>(0,n.createElement)(l,{...e,key:s,RightPanelData:e.previous}))}),(0,t.jsx)("div",{className:"rbt-show-more-btn ".concat(s.previous?"":"active"),onClick:()=>c("previous"),children:"Show More"})]}),(0,t.jsxs)("div",{className:"chat-history-section has-show-more ".concat(s.older?"":"active"),children:[(0,t.jsx)("h6",{className:"title",children:"November"}),(0,t.jsx)("ul",{className:"chat-history-list has-show-more-inner-content",children:r&&r.rightPanel.map((e,s)=>(0,n.createElement)(l,{...e,key:s,RightPanelData:e.older}))}),(0,t.jsx)("div",{className:"rbt-show-more-btn mb--100 ".concat(s.older?"":"active"),onClick:()=>c("older"),children:"Show More"})]})]})]})})}},4374:function(e,s,a){"use strict";var t=a(5893),n=a(9331);a(7294),s.Z=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"rbt-static-bar",children:[(0,t.jsx)(n.default,{}),(0,t.jsx)("p",{className:"b3 small-text",children:"ChatenAi can make mistakes. Consider checking important information."})]})})},2527:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(5893),n=a(7294),r=a(3709),l=a(7177),i=a(4953),c=a(345),o=a(2610),d=a(8109),h=a(4374),m=a(3153),x=a.n(m),u=a(5675),j=a.n(u),b=a(8851),N=a(9786),p=()=>((0,n.useEffect)(()=>{x()(),document.querySelectorAll(".bg-flashlight").forEach(e=>{e.onmousemove=function(s){let a=s.pageX-e.offsetLeft,t=s.pageY-e.offsetTop;e.style.setProperty("--x",a+"px"),e.style.setProperty("--y",t+"px")}})},[]),(0,t.jsx)(t.Fragment,{children:b&&b.imageGenerator.map((e,s)=>(0,t.jsxs)("div",{className:"chat-box-list pt--30",id:"chatContainer",children:[(0,t.jsx)("div",{className:"chat-box author-speech bg-flashlight",children:(0,t.jsx)("div",{className:"inner",children:(0,t.jsxs)("div",{className:"chat-section",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)(j(),{className:"w-100",width:40,height:40,src:e.author,alt:"Author"})}),(0,t.jsxs)("div",{className:"chat-content",children:[(0,t.jsx)("h6",{className:"title",children:e.title}),(0,t.jsx)("p",{children:e.desc})]})]})})}),(0,t.jsx)("div",{className:"chat-box ai-speech bg-flashlight",children:e.content.map((e,s)=>(0,t.jsxs)("div",{className:"inner top-flashlight leftside light-xl",children:[(0,t.jsxs)("div",{className:"chat-section generate-section",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)("i",{className:"feather-check-circle"})}),(0,t.jsx)("div",{className:"chat-content",children:(0,t.jsx)("h6",{className:"title color-text-off mb--0",children:e.scan})})]}),(0,t.jsxs)("div",{className:"chat-section generate-section",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)(j(),{src:e.img,width:40,height:40,alt:"Loader Images"})}),(0,t.jsx)("div",{className:"chat-content",children:(0,t.jsx)("h6",{className:"title color-text-off mb--0",children:e.text})})]}),(0,t.jsxs)("div",{className:"chat-section generate-details-section",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)(j(),{className:"w-100",src:e.aiImg,width:40,height:40,alt:"ChatenAI"})}),(0,t.jsxs)("div",{className:"chat-content",children:[(0,t.jsx)("h6",{className:"title mb--20",children:e.title}),(0,t.jsx)("div",{className:"image-caption mb--20",children:(0,t.jsx)("h5",{className:"caption-title theme-gradient",children:e.caption})}),(0,t.jsxs)("div",{className:"img-box-grp mb--20",children:[(0,t.jsxs)("div",{className:"img-box",children:[(0,t.jsx)(j(),{className:"w-100 radius",src:e.generateImg,width:1380,height:1380,alt:"Image Generation"}),(0,t.jsxs)("button",{className:"download-btn btn-default btn-small bg-solid-primary",children:[(0,t.jsx)("i",{className:"feather-download"}),(0,t.jsx)("span",{children:"Download"})]})]}),e.generateImg2?(0,t.jsxs)("div",{className:"img-box",children:[(0,t.jsx)(j(),{className:"w-100 radius",src:e.generateImg2,width:1380,height:1380,alt:"Image Generation"}),(0,t.jsxs)("button",{className:"download-btn btn-default btn-small bg-solid-primary",children:[(0,t.jsx)("i",{className:"feather-download"}),(0,t.jsx)("span",{children:"Download"})]})]}):""]}),(0,t.jsx)(N.Z,{})]})]})]},s))})]},s))})),f=a(6248),g=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{title:"Image Generator"}),(0,t.jsx)("main",{className:"page-wrapper rbt-dashboard-page",children:(0,t.jsx)(l.ZP,{children:(0,t.jsxs)("div",{className:"rbt-panel-wrapper",children:[(0,t.jsx)(i.Z,{display:""}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(o.Z,{}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(f.Z,{}),(0,t.jsx)("div",{className:"rbt-main-content",children:(0,t.jsx)("div",{className:"rbt-daynamic-page-content",children:(0,t.jsxs)("div",{className:"rbt-dashboard-content",children:[(0,t.jsx)("div",{className:"content-page",children:(0,t.jsx)(p,{})}),(0,t.jsx)(h.Z,{})]})})})]})})})]})},3153:function(e){e.exports=function(e){function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}var a={};return s.m=e,s.c=a,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},s.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},s.p="dist/",s(s.s=0)}([function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e};a(1);var n={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",selector:"[data-sal]",once:!0,disabled:!1},r=[],l=null,i=function(){document.body.classList.remove(n.disabledClassName)},c=function(){document.body.classList.add(n.disabledClassName)},o=function(e,s){e.forEach(function(e){e.intersectionRatio>=n.threshold?(e.target.classList.add(n.animateClassName),n.once&&s.unobserve(e.target)):n.once||e.target.classList.remove(n.animateClassName)})},d=function(){c(),l.disconnect(),l=null},h=function(){i(),l=new IntersectionObserver(o,{rootMargin:n.rootMargin,threshold:n.threshold}),(r=[].filter.call(document.querySelectorAll(n.selector),function(e){return n.animateClassName,!e.classList.contains(n.animateClassName)})).forEach(function(e){return l.observe(e)})};s.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;if(e!==n&&(n=t({},n,e)),!window.IntersectionObserver)throw c(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return n.disabled||"function"==typeof n.disabled&&n.disabled()?c():h(),{elements:r,disable:d,enable:h}}},function(e,s){}]).default}},function(e){e.O(0,[675,996,367,444,691,899,851,862,774,888,179],function(){return e(e.s=2386)}),_N_E=e.O()}]);
//# sourceMappingURL=image-generator-2dc2fa52439e3105.js.map