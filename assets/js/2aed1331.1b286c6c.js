"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[8700],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},714:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"Data-Governance-Handbook-for-GBADs/intro",id:"Data-Governance-Handbook-for-GBADs/intro",title:"Introduction",description:"Overview of GBADs",source:"@site/docs/Data-Governance-Handbook-for-GBADs/intro.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/intro",permalink:"/docs/Data-Governance-Handbook-for-GBADs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/Welcome"},next:{title:"Data Principles and Governance",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataSharing"}},d={},l=[{value:"Overview of GBADs",id:"overview-of-gbads",level:2},{value:"The role of data in GBADs",id:"the-role-of-data-in-gbads",level:3},{value:"Data Governance and GBADs",id:"data-governance-and-gbads",level:2},{value:"Navigating the Data Governance Handbook",id:"navigating-the-data-governance-handbook",level:2}],c={toc:l};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"overview-of-gbads"},"Overview of GBADs"),(0,r.kt)("p",null,"The goal of the ",(0,r.kt)("a",{parentName:"p",href:"https://animalhealthmetrics.org/"},"Global Burden of Animal Diseases (GBADs)")," is to minimize the economic and health burden of animal disease by collecting, assessing and curating private and open data resources through a knowledge engine. "),(0,r.kt)("h3",{id:"the-role-of-data-in-gbads"},"The role of data in GBADs"),(0,r.kt)("p",null,"Data inspires decision making through models (as supplied by GBADs and others) which improve societal outcomes from livestock and aquaculture, positively impact Sustainable Development Goals (SDGs) and improve outcomes for livestock producers. ",(0,r.kt)("strong",{parentName:"p"},"The overarching goal of GBADs is to improve methods to estimate the health and economic burden of animal disease, and human disease due to animal disease.")," GBADs will collect, access, standardize and curate the plethora of available open and private data resources and will make these resources available through a knowledge engine. By making data related to the health and economics of animals available through one engine, data will be better used and compared, ultimately leading to better decisions and outcomes in both private and public sectors."),(0,r.kt)("p",null,"The GBADs data knowledge engine will be rooted in a standardized and well defined data governance and provenance strategy, allowing GBADs to act as a trusted data \u201cbroker\u201d for all data artifacts moving through our system. \u201cBrokering\u201d data artifacts means that we will not own (or in many cases, store) data artifacts that are disseminated through the system but  will provide data that have been standardized and \u2018FAIRified\u2019 using our documented methods. The GBADs data governance and provenance strategy will ensure that data are standard, guarded against misuse and provide the ability to critically evaluate the quality and trust of data.  Specifically, this will include regimented metadata standards including controlled vocabularies, ontologies and structures that we will use as the backbone of our data engine. Adapting standardized metadata will allow data and metadata to be queried, practices to be audited, and provide an understanding of when data sources can be combined. Our emphasis on detailed metadata and data quality will highlight the need for detailed provenance for all data brokered by our system. "),(0,r.kt)("h2",{id:"data-governance-and-gbads"},"Data Governance and GBADs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{epigraph}"},'"If you want to go quickly, go alone. If you want to go far, go together."\n\n-- African Proverb\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{margin}"},"[Jonathan Rushton](https://orcid.org/0000-0001-5450-4202), the director of GBADs, often starts team meetings with the quote above, reminding the GBADs themes that it is important to continue to work together to make impact. \n")),(0,r.kt)("p",null,"This proverb can be extended to the idea of big data. There are countless sources of open and private data, and even when these sources are from the same discipline, we often see differences in how data are structured, reported, described and disseminated. Combining data from different sources requires collaboration, transparency and teamwork. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{margin}"},"**FAIR**, as you will read, stands for Findable, Accessible, Interoperable and Reusable. We throw an 'S' after FAIR (**FAIRS**) for Security. \n\nThese are the data sharing principles that we strive for at GBADs! \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Go together with data",Go:!0,together:!0,with:!0,data:!0},"It is impossible to combine data if everyone is individually working on their datasets without thinking about how they will communicate, share and reuse their data. By using standards and structuring data to support FAIR principles, we can start to work together and build a **data culture** in GBADs. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The GBADs Data Governance Handbook describes how to manage, describe, and communicate about the data that flows through the GBADs knowledge engine. It documents the guidelines, standard practices and procedures related to the GBADs data governance strategy.")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Please Note:",Please:!0,"Note:":!0},':class: tip \n\nThis is a "living document"! As the GBADs Informatics theme learns more about the data governance and the GBADs data needs, we will update and adjust this book accordingly. \n')),(0,r.kt)("h2",{id:"navigating-the-data-governance-handbook"},"Navigating the Data Governance Handbook"),(0,r.kt)("p",null,"Getting you started"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{panels}"},"\nFor information about our data sharing principles: \n[Data Sharing Principles](#dataSharing)\n---\n\nLearn more about our knowledge engine here: \n\n---\nTo understand our data standards, and information about metadata: \n[Data Standards](#techdatastds)\n\n---\nLearn how to use our Application Programming Interface (API) here: \n[Data User Guide](#dataUsers)\n\n---\nLearn more about 'tidy data' (organizing your spreadsheets in a way that supports FAIR principles) here: \n[Organizing Data in Spreadsheets](#dataBestPractices)\n\n")),(0,r.kt)("p",null,"This document is organized to reflect the main components of data governance from the GBADs perspective: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What is data governance from a GBADs perspective? This includes an overview of what data governance and provenance is, our data sharing principles and why data governance is pivotal in the overall GBADs perspective."),(0,r.kt)("li",{parentName:"ol"},"Metadata standards and best practices we plan to adopt. "),(0,r.kt)("li",{parentName:"ol"},"Data privacy and security"),(0,r.kt)("li",{parentName:"ol"},"Data management including an overview of the system and how metadata storage, APIs and other data storage works "),(0,r.kt)("li",{parentName:"ol"},"Data usage guide "),(0,r.kt)("li",{parentName:"ol"},"Data contributor guide")))}u.isMDXComponent=!0}}]);