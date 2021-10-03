"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},426:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1,id:"intro"},l="Introduction",d={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Welcome to modrinth developer docs!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro"},sidebar:"tutorialSidebar",next:{title:"Modpack API",permalink:"/docs/tutorials/api_modpacks"}},c=[{value:"Getting a working testing environment",id:"getting-a-working-testing-environment",children:[]},{value:"Your first interesting request",id:"your-first-interesting-request",children:[{value:"Method",id:"method",children:[]},{value:"Base URL",id:"base-url",children:[]},{value:"Projects",id:"projects",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Welcome to modrinth developer docs!"),(0,i.kt)("p",null,"This tutorial will explain the basics of the Modrinth API."),(0,i.kt)("h2",{id:"getting-a-working-testing-environment"},"Getting a working testing environment"),(0,i.kt)("p",null,"This documentation doesn't provide (yet!) a way to easily test every single command.\nIn order to facilitate testing here is, in no particular order, a list of some great API testing tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postman.com/downloads/"},"Postman")," the reference, but is not open source, and now asks for login too frequently."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://insomnia.rest/"},"Insomnia")," another reference, this time opensource, and doesn't ask for your credentials."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reqbin.com/"},"ReqBIN")," online REST testing tool.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This site doesn't make use of them, everything is presented in code blocks."))),(0,i.kt)("p",null,"Once you have installed a client, you can test that it works on modrinth by making a ",(0,i.kt)("strong",{parentName:"p"},"GET")," request to the following address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'GET https://staging-api.modrinth.com/\n{\n  "name": "modrinth-labrinth",\n  "version": "0.2.0",\n  "documentation": "https://docs.modrinth.com",\n  "about": "Welcome traveler!"\n}\n')),(0,i.kt)("p",null,"If you did get nearly the same thing than what's appearing above, then it's that you can access modrinth !"),(0,i.kt)("h2",{id:"your-first-interesting-request"},"Your first interesting request"),(0,i.kt)("p",null,"Let's start by getting more information about a minecraft mod, let's say, ",(0,i.kt)("a",{parentName:"p",href:"https://modrinth.com/mod/gravestones"},"Gravestones"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://staging.modrinth.com/mod/monke"},"Monke Mod")," if you live on the edge."),(0,i.kt)("p",null,"You can get information about that mod by doing the following request:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't worry, we'll explain everything after you have made the request"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'GET https://staging-api.modrinth.com/v2/project/monke\n{\n  "id": "tsi4hUoN",\n  "slug": "monke",\n  "project_type": "mod",\n  "team": "9gqVrerM",\n  "title": "Monke Mod",\n  "description": "A mod about finding monkes in Minecraft!",\n  "body": "MONKEEEEEEEEEEEEEEEEEEEEEEEEE\\n\\n**monkey**",\n  "body_url": null,\n  "published": "2021-07-20T02:31:50.191272Z",\n  "updated": "2021-07-20T02:31:49.914234Z",\n  "status": "approved",\n  ...\n}\n')),(0,i.kt)("p",null,"First of all, good job!\nAfter that, let's talk a little bit more about the how and why of this request:"),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("p",null,"As many of you may already know, the HTTP specification has action words, and as expected, we do use them.\nIn application, we will always say what word to use, and in the majority of cases when querying data, you will use ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("p",null,"But you can learn more about them ",(0,i.kt)("a",{parentName:"p",href:"/docs/details/methods"},"here")),(0,i.kt)("h3",{id:"base-url"},"Base URL"),(0,i.kt)("p",null,"The base URL is the source of all the requests made for this instance and version.\nHere is the format we use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://{branch}-api.modrinth.com/{version}/\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Branch is the branch (edition) of modrinth you are in. We currently only have ",(0,i.kt)("inlineCode",{parentName:"li"},"staging")," and nothing. If there is no branch (we're on the live servers), the path is the following: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.modrinth.com/...")),(0,i.kt)("li",{parentName:"ul"},"Version is the version you are using of the api. You can learn more about how modrinth is using versions ",(0,i.kt)("a",{parentName:"li",href:"/docs/details/versioning"},"here"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The v1 is the only exception to this rule, as it was the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.modrinth.com/api/v1/")),(0,i.kt)("p",{parentName:"div"},"Note the part between the version and the domain :P"))),(0,i.kt)("h3",{id:"projects"},"Projects"),(0,i.kt)("p",null,"In modrinth, projects are really any entity that modrinth provides (currently only modpacks and mods)."),(0,i.kt)("p",null,"It has an unique id, usually gibberish, like for example ",(0,i.kt)("inlineCode",{parentName:"p"},"tsi4hUoN"),", and another characteristic, the ",(0,i.kt)("strong",{parentName:"p"},"slug"),"."),(0,i.kt)("p",null,"A slug is a chosen unique ID, that is used in the website navigation and in the API, interchangeably with the unique ID."),(0,i.kt)("p",null,"In our example, this would be ",(0,i.kt)("inlineCode",{parentName:"p"},"monke"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While unique IDs are constant, slugs can change at any moment!"),(0,i.kt)("p",{parentName:"div"},"If you store something in the long term, it is recommended to use the unique ID."))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"You did it!\nI hope you do understand more about how the modrinth API works in general, and you are now prepared to combat the rest of the tutorials :)"))}p.isMDXComponent=!0}}]);