"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6608],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,w=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(w,r(r({ref:t},d),{},{components:n})):o.createElement(w,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(25773),a=(n(27378),n(35318));const i={sidebar_position:4,title:"Installing with Scoop",description:"Installing Podman Desktop on Windows with Scoop",tags:["podman-desktop","installing","windows","scoop"],keywords:["podman desktop","containers","podman","installing","installation","windows","scoop"]},r="Installing Podman Desktop with Scoop package manager for Windows",s={unversionedId:"installation/windows-install/installing-podman-desktop-with-scoop",id:"installation/windows-install/installing-podman-desktop-with-scoop",title:"Installing with Scoop",description:"Installing Podman Desktop on Windows with Scoop",source:"@site/docs/installation/windows-install/installing-podman-desktop-with-scoop.md",sourceDirName:"installation/windows-install",slug:"/installation/windows-install/installing-podman-desktop-with-scoop",permalink:"/docs/installation/windows-install/installing-podman-desktop-with-scoop",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/installation/windows-install/installing-podman-desktop-with-scoop.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"scoop",permalink:"/docs/tags/scoop"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Installing with Scoop",description:"Installing Podman Desktop on Windows with Scoop",tags:["podman-desktop","installing","windows","scoop"],keywords:["podman desktop","containers","podman","installing","installation","windows","scoop"]},sidebar:"mySidebar",previous:{title:"Installing with Chocolatey",permalink:"/docs/installation/windows-install/installing-podman-desktop-with-chocolatey"},next:{title:"Installing in a restricted environment",permalink:"/docs/installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Next steps",id:"next-steps",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-podman-desktop-with-scoop-package-manager-for-windows"},"Installing Podman Desktop with Scoop package manager for Windows"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ScoopInstaller/Install#readme"},"Scoop package manager"))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the commands from the command line or from PowerShell:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add extras\nscoop install podman-desktop\n")))),(0,a.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://scoop.sh/#/apps?q=podman-desktop&s=0&d=1&o=true"},"Podman Desktop Scoop package"))),(0,a.kt)("h4",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding"},"Onboarding"))))}c.isMDXComponent=!0}}]);