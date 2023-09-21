"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3870],{63976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(25773),o=(a(27378),a(35318)),s=a(92975);const i={title:"Release Notes - Podman Desktop 0.15",description:"Podman Desktop 0.15 has been released!",slug:"podman-desktop-release-0.15",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-0.15.webp"},l=void 0,p={permalink:"/blog/podman-desktop-release-0.15",source:"@site/blog/2023-05-02-release-0.15.md",title:"Release Notes - Podman Desktop 0.15",description:"Podman Desktop 0.15 has been released!",date:"2023-05-02T00:00:00.000Z",formattedDate:"May 2, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kind",permalink:"/blog/tags/kind"}],readingTime:3.685,hasTruncateMarker:!0,authors:[{name:"Tim deBoer",title:"Architect",url:"https://github.com/deboer-tim",imageURL:"https://github.com/deboer-tim.png",key:"deboer"}],frontMatter:{title:"Release Notes - Podman Desktop 0.15",description:"Podman Desktop 0.15 has been released!",slug:"podman-desktop-release-0.15",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-0.15.webp"},prevItem:{title:"Release Notes - Podman Desktop 1.0",permalink:"/blog/podman-desktop-release-1.0"},nextItem:{title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",permalink:"/blog/running-a-local-kubernetes-cluster-with-podman-desktop"}},r={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Update to Podman v4.5.O",id:"update-to-podman-v45o",level:3},{value:"Kind Ingress",id:"kind-ingress",level:3},{value:"Podliness: Ability to Choose External Ports when Podifying Containers",id:"podliness-ability-to-choose-external-ports-when-podifying-containers",level:3},{value:"Cleanliness: New Navigation Bar, Dialogs, and Palette",id:"cleanliness-new-navigation-bar-dialogs-and-palette",level:3},{value:"New Navgation Bar",id:"new-navgation-bar",level:4},{value:"Updated Dialogs",id:"updated-dialogs",level:4},{value:"Colors",id:"colors",level:4},{value:"Other UI and UX Improvements",id:"other-ui-and-ux-improvements",level:3},{value:"Markdown Support for Extensions",id:"markdown-support-for-extensions",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Final notes",id:"final-notes",level:2}],m={toc:d};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podman Desktop 0.15 - Cleanliness is next to Podliness!"),(0,o.kt)("p",null,"It has only been two weeks since our last release, but we really wanted to complete a few scenarios,\nfix a few bugs, and show off several design updates and UI improvements that we have been working on."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman Version"),": Podman 4.5 now included in Windows and Mac installers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kind Ingress"),": Creating an ingress to expose services outside the Kind cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podliness"),": Ability to choose external ports when podifying containers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cleanliness"),": New navigation bar, dialog, and palette update."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UX and UI Improvements"),": Markdown support for extensions.")),(0,o.kt)("p",null,"Podman Desktop 0.15 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podman-desktop-0-15-hero",src:a(61827).Z,width:"1920",height:"1432"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"update-to-podman-v45o"},"Update to Podman v4.5.O"),(0,o.kt)("p",null,"Podman Desktop 0.15 embeds ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/releases/tag/v4.5.0"},"Podman 4.5.0")," in\nWindows and macOS installers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2115"},"#2115"),"."),(0,o.kt)("h3",{id:"kind-ingress"},"Kind Ingress"),(0,o.kt)("p",null,"Wait a minute, didn't we enable this last release? Well yes, last time we did add support for installing\nthe Contour ingress controller on Kind ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1675"},"#1675"),",\nbut you still couldn't access your containers without the corresponding ingress."),(0,o.kt)("p",null,"This release adds a simple checkbox you can use when deploying to Kind to create an ingress and\nmake your service accessible ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/1322"},"#1322"),"."),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/232894496-cbaea036-a14c-46c6-bfa3-bacca629a161.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"podliness-ability-to-choose-external-ports-when-podifying-containers"},"Podliness: Ability to Choose External Ports when Podifying Containers"),(0,o.kt)("p",null,"When you create a pod from of a set of containers (Podifying!), you probably don't want to expose every\nsingle port from every container to the world. With an updated panel you can now see which ports each container\nexposes, pick which should remain visible outside the pod, and which are for internal use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2232"},"#2232"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/234527674-ed14f52c-8f66-445f-8038-c8135bb61136.gif",alt:"Podify page"})),(0,o.kt)("h3",{id:"cleanliness-new-navigation-bar-dialogs-and-palette"},"Cleanliness: New Navigation Bar, Dialogs, and Palette"),(0,o.kt)("p",null,"It was time to catch up on some design ideas and do some UI cleanup!"),(0,o.kt)("h4",{id:"new-navgation-bar"},"New Navgation Bar"),(0,o.kt)("p",null,"The navigation bar is now always fixed on the left size, without labels. This opens up more space\nfor the content on each page, and is easier to jump in and out of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings"),".\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2167"},"#2167")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigation bar",src:a(39245).Z,width:"252",height:"606"})),(0,o.kt)("h4",{id:"updated-dialogs"},"Updated Dialogs"),(0,o.kt)("p",null,"We wanted messages and dialog boxes to feel a bit more integrated, so we have a new message box\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/1808"},"#1808")," and use it for all dialogs opened by\nextensions, pruning containers/pods/images/volumes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2138"},"#2138"),",\nand updating Podman Desktop itself ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2249"},"#2249"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dialog",src:a(11507).Z,width:"1114",height:"454"})),(0,o.kt)("h4",{id:"colors"},"Colors"),(0,o.kt)("p",null,"We spent some time tweaking colors and closing on our final palette\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2199"},"#2199"),", updating the colors in the terminal & detail page\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2222"},"#2222"),", tweaking the navigation and main page colors\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2223"},"#2223"),",\nand improving the look of forms ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2156"},"#2156"),"."),(0,o.kt)("p",null,"We're not done yet, but hopefully you will notice a more polished, consistent, good-looking application!"),(0,o.kt)("h3",{id:"other-ui-and-ux-improvements"},"Other UI and UX Improvements"),(0,o.kt)("h4",{id:"markdown-support-for-extensions"},"Markdown Support for Extensions"),(0,o.kt)("p",null,"We added a new component to display markdown ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2219"},"#2219")," and\nenabled it in preferences ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2253"},"#2253"),", and\nprovider properties/creation pages ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2152"},"#2152"),".\nWe can now embed links and other formatting in preferences, and extensions can use them in many places, for example:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Markdown",src:a(81313).Z,width:"1620",height:"264"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"other-notable-enhancements"},"Other Notable Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We know which ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page is used the most often, so now it's the default: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2105"},"#2105"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extensions can now use the Tasks API to let long running tasks continue in the background ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2019"},"#2019")," and the existing withProgress API also uses the task manager now\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2187"},"#2187"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/695993/233560830-85cfa685-5dcd-4efa-9fae-730a8a9eef3b.gif",alt:"Task API"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Images are now sorted by age ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2311"},"#2311"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When you start/stop a container or pod, the button is now animated instead of having an separate spinner\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues/2101"},"#2101"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences")," page now has a search bar ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2128"},"#2128"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Search preferences",src:a(26657).Z,width:"1162",height:"394"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Help page has been updated ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/issues/431"},"#431"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Updated Help",src:a(11227).Z,width:"1386",height:"1222"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notable-bug-fixes"},"Notable Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There was no way to see log or outcome if you leave the Kind cluster creation page ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/issues/2079"},"#2079"),"."),(0,o.kt)("li",{parentName:"ul"},"Kind image load doesn't show a notification ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/issues/2225"},"#2225"),"."),(0,o.kt)("li",{parentName:"ul"},"Fix odd selection in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Extensions")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/issues/2130"},"#2130"),"."),(0,o.kt)("li",{parentName:"ul"},"Menus are now cleaned up properly when extensions are stopped ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2188"},"#2188"),"."),(0,o.kt)("li",{parentName:"ul"},"Kind clusters are now cleaned up when Podman machine is stopped ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2306"},"#2306"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"final-notes"},"Final notes"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.15.0"},"here"),"."),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}h.isMDXComponent=!0},11507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dialog-a7641617566984fb155ab6060378c0e7.png"},11227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/help-61063667146d82cf967c0905ee7fc9b3.png"},81313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/markdown-62e7791bc0cf89938d344d6bdacfb3a0.png"},39245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/navigation-a8912eb003f2c50ed0436cc5cb07be77.png"},61827:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/podman-desktop-release-0.15-89cd5f136ad85c15bc5b4d16a919140a.webp"},26657:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prefs-8b7886c5b18178c010e3d4033f25fe5c.png"}}]);