"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[7687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,b=p["".concat(s,".").concat(h)]||p[h]||c[h]||n;return r?o.createElement(b,i(i({ref:t},d),{},{components:r})):o.createElement(b,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={id:"tableau-de-bordTutorielsIntro",title:"Introduction aux didacticiels du tableau de bord GBADs",sidebar_position:1},i=void 0,l={unversionedId:"GBADs-Dashboard-Tutorials/tableau-de-bordTutorielsIntro",id:"GBADs-Dashboard-Tutorials/tableau-de-bordTutorielsIntro",title:"Introduction aux didacticiels du tableau de bord GBADs",description:"Buts d'apprentissage",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/GBADs-Dashboard-Tutorials/GBADs-Dashboard-Tutorials-Intro.md",sourceDirName:"GBADs-Dashboard-Tutorials",slug:"/GBADs-Dashboard-Tutorials/tableau-de-bordTutorielsIntro",permalink:"/fr/docs/GBADs-Dashboard-Tutorials/tableau-de-bordTutorielsIntro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tableau-de-bordTutorielsIntro",title:"Introduction aux didacticiels du tableau de bord GBADs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bibliographie",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/bibliography"},next:{title:"Dashboard Tutorial Part 1",permalink:"/fr/docs/GBADs-Dashboard-Tutorials/Dashboard-Tutorial-Part-1"}},s={},u=[{value:"Buts d&#39;apprentissage",id:"buts-dapprentissage",level:2},{value:"Conditions pr\xe9alables",id:"conditions-pr\xe9alables",level:2},{value:"Ressources",id:"ressources",level:2},{value:"Programmation",id:"programmation",level:3},{value:"Concevoir",id:"concevoir",level:2},{value:"Configuration de l&#39;environnement",id:"configuration-de-lenvironnement",level:2},{value:"Jupyter",id:"jupyter",level:3},{value:"Pourquoi Dash",id:"pourquoi-dash",level:2},{value:"Partie 1 - Composants Dash, rappels",id:"partie-1---composants-dash-rappels",level:2},{value:"Partie 2 - Personnalisation, Mod\xe8le PPS",id:"partie-2---personnalisation-mod\xe8le-pps",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"buts-dapprentissage"},"Buts d'apprentissage"),(0,a.kt)("p",null,"\xc0 la fin de ces didacticiels, vous aurez appris \xe0 cr\xe9er un tableau de bord \xe0 l'aide des composants Plotly Dash dans Python 3. Vous aurez \xe9galement appris la conception de tableaux de bord."),(0,a.kt)("h2",{id:"conditions-pr\xe9alables"},"Conditions pr\xe9alables"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Une connaissance de base de la programmation en Python\xa03 est utile, mais l'installation et la configuration de l'environnement Python\xa03 sont expliqu\xe9es ci-dessous."),(0,a.kt)("li",null,"La connaissance du langage HTML est utile car Dash utilise \xe9galement des composants HTML courants."),(0,a.kt)("li",null,"La connaissance de CSS est utile car les composants Dash peuvent \xeatre stylis\xe9s avec CSS.")),(0,a.kt)("h2",{id:"ressources"},"Ressources"),(0,a.kt)("p",null,"Consultez ces ressources pour vous aider \xe0 d\xe9velopper votre tableau de bord."),(0,a.kt)("h3",{id:"programmation"},"Programmation"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.python.org/about/gettingstarted/"},"D\xe9marrer avec Python")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.w3schools.com/python/"},"Tutoriels Python")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.w3schools.com/html/"},"Tutoriels HTML")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.w3schools.com/css/"},"Tutoriels CSS")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://dash.plotly.com/"},"Documentation Dash officielle"))),(0,a.kt)("h2",{id:"concevoir"},"Concevoir"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://www.figma.com/"},"Outil de conception d'interface Figma")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://medium.muz.li/10-rules-of-dashboard-design-f1a4123028a2"},"Conception du tableau de bord")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://dash.gallery/Portal/"},"Autres tableaux de bord Dash"))),(0,a.kt)("h2",{id:"configuration-de-lenvironnement"},"Configuration de l'environnement"),(0,a.kt)("p",null,"###Python 3"),(0,a.kt)("a",{href:"https://realpython.com/installing-python/"},"Suivez ce guide pour installer Python 3 sur votre machine"),(0,a.kt)("h3",{id:"jupyter"},"Jupyter"),(0,a.kt)("a",{href:"https://realpython.com/installing-python/"},"Suivez ce guide pour installer Python 3 sur votre machine"),(0,a.kt)("h2",{id:"pourquoi-dash"},"Pourquoi Dash"),(0,a.kt)("p",null,"Dash est relativement simple \xe0 utiliser et \xe0 apprendre. Il fonctionne \xe9galement bien avec d'autres modules python. Il offre \xe9galement plus de flexibilit\xe9 que d'autres biblioth\xe8ques de tableaux de bord similaires."),(0,a.kt)("h2",{id:"partie-1---composants-dash-rappels"},"Partie 1 - Composants Dash, rappels"),(0,a.kt)("h2",{id:"partie-2---personnalisation-mod\xe8le-pps"},"Partie 2 - Personnalisation, Mod\xe8le PPS"))}c.isMDXComponent=!0}}]);