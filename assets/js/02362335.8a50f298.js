"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[7429],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=a(7462),r=(a(7294),a(3905));const n={slug:"the-roadmap-to-reproducibility",title:"The Roadmap to Reproducibility",authors:"Kassy",tags:["reproducibility","data","values"]},i=void 0,s={permalink:"/docs/blog/the-roadmap-to-reproducibility",source:"@site/blog/the-road-to-reproducibility.md",title:"The Roadmap to Reproducibility",description:"Header Image",date:"2022-11-14T17:21:54.000Z",formattedDate:"November 14, 2022",tags:[{label:"reproducibility",permalink:"/docs/blog/tags/reproducibility"},{label:"data",permalink:"/docs/blog/tags/data"},{label:"values",permalink:"/docs/blog/tags/values"}],readingTime:5.855,hasTruncateMarker:!1,authors:[{name:"Kassy Raymond",title:"PhD Student @ UoG",url:"https://github.com/kassyray",imageURL:"https://github.com/kassyray.png",key:"Kassy"}],frontMatter:{slug:"the-roadmap-to-reproducibility",title:"The Roadmap to Reproducibility",authors:"Kassy",tags:["reproducibility","data","values"]},nextItem:{title:"Spring GBADs Informatics Herd Round-Up",permalink:"/docs/blog/spring-GBADs-informatics-herd-round-up"}},l={authorsImageUrls:[void 0]},d=[{value:"The \u201cReproducibility Crisis\u201d",id:"the-reproducibility-crisis",level:2},{value:"Embarking on the Road to Reproducibility",id:"embarking-on-the-road-to-reproducibility",level:2},{value:"Stop 1: People and processes",id:"stop-1-people-and-processes",level:3},{value:"Stop 2: Acquisition and ingestion of data",id:"stop-2-acquisition-and-ingestion-of-data",level:3},{value:"Stop 3: Data quality",id:"stop-3-data-quality",level:3},{value:"Stop 4: Code",id:"stop-4-code",level:3},{value:"Final Destination: Data Utopia",id:"final-destination-data-utopia",level:3}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/2JEVnaV.png",alt:"Header Image"}),"\n",(0,r.kt)("em",{parentName:"p"},"Figure 1: The Roadmap to Reproducibility")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u201cThe whole point of science, the way we know something, is not that I trust Isaac Newton because I think he was a great guy. The whole point is that I can do it myself \u2026 Show me the data, show me the process, show me the method, and then if I want to, I can reproduce it.\u201d")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/"},"Brian Nosek")," - Washington Post",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-082c34"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-082c34",className:"footnote-ref"},"1")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Reproducible science requires well-documented methods, code, and making data available. It means providing transparency in what you are doing through the whole scientific process to foster trust in the process and outcomes and allowing others to leverage past work. There is no place for the scientific skeptic when your research is reproducible. "),(0,r.kt)("br",null),(0,r.kt)("p",null,"The data that GBADs is using comes from many different sources and is used in models that then produce more datasets, and that act as inputs to other models. This daisy-chain of data-model-data-model-data is not confined to the work of a single scientist; we have collaborators working all over the globe. It is crucial that the underlying data is available, and all our methods are reproducible so we can build upon each other\u2019s work and allow others to use our estimates confidently.  "),(0,r.kt)("br",null),(0,r.kt)("p",null,"With the aim of making all our processes reproducible and transparent, GBADs is embarking on the \u201cRoadmap to Reproducibility\u201d. In this blog post we invite you to travel along the road to reproducibility with us. Buckle up your seat belts as we avoid the fiery blazes of the \u201cReproducibility Crisis\u201d before heading to our final destination, the \u201cData Utopia\u201d! "),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"the-reproducibility-crisis"},"The \u201cReproducibility Crisis\u201d"),(0,r.kt)("p",null,'In 2016, a survey of 1,576 researchers from Nature revealed that there is a "crisis of reproducibility" in the scientific community',(0,r.kt)("sup",{parentName:"p",id:"fnref-2-082c34"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-082c34",className:"footnote-ref"},"2")),'. Of the participants "more than 70% of researchers have tried and failed to reproduce another scientists\u2019 experiment and more than half have failed to reproduce their own experiments." Many factors contribute to irreproducible research (Figure 2), where pressure to publish and selective reporting were among the most highly rated. However, unavailable raw data and unavailable methods or code were also rated as high contributors. While pressure to publish requires a culture shift in research, unavailable raw data and methods or code are problems we can solve. '),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/dcnJkJR.jpg",alt:"Figure 2"}),"\nFigure 2: Factors that contribute to irreproducible research. Figure obtained from Baker, 2016",(0,r.kt)("sup",{parentName:"p",id:"fnref-2-082c34"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-082c34",className:"footnote-ref"},"2")),". "),(0,r.kt)("h2",{id:"embarking-on-the-road-to-reproducibility"},"Embarking on the Road to Reproducibility"),(0,r.kt)("h3",{id:"stop-1-people-and-processes"},"Stop 1: People and processes"),(0,r.kt)("p",null,"Code and data availability are important for reproducibility, however there are people behind the code and data working on processes to make it reproducible.  "),(0,r.kt)("br",null),(0,r.kt)("p",null,"As such, we have established processes and best practices for the use of data in GBADs, which are communicated in the ",(0,r.kt)("a",{parentName:"p",href:"http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro"},"Data Governance Handbook"),", and on our ",(0,r.kt)("a",{parentName:"p",href:"http://gbadskedoc.org"},"Documentation Site"),". These processes involve the following: "),(0,r.kt)("br",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Documentation of changes to data and data cleaning practices"),(0,r.kt)("li",{parentName:"ol"},"Documentation of metadata standards used to provide information about the data"),(0,r.kt)("li",{parentName:"ol"},"Where and how data and metadata are stored, and how they are disseminated"),(0,r.kt)("li",{parentName:"ol"},"Best practices for documenting code in GitHub repositories ")),(0,r.kt)("br",null),(0,r.kt)("p",null,"We also rely on people to comply to the processes we have established. Since some of the data that is used by GBADs does not have metadata, we rely on the establishment of a contact point for the data source to ensure that we can get context on how data were collected, how it can be used, by whom, and for which purposes, and what categories in the data represent. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"stop-2-acquisition-and-ingestion-of-data"},"Stop 2: Acquisition and ingestion of data"),(0,r.kt)("p",null,"To acquire data, we identify data that is relevant to the estimation of models. For example, livestock population by country and species and live weights are inputs to biomass calculations. "),(0,r.kt)("br",null),(0,r.kt)("p",null,"The way we acquire data depends on the format that it is available. There are 3 main ways data has been acquired and ingested: "),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When data is available via Application Programming Interfaces (APIs), the data is acquired directly from the source, being transformed before made available via the GBADs\u2019 API;"),(0,r.kt)("li",{parentName:"ul"},"When data is available via direct download, the data is downloaded and formatted in database tables before being made available via the GBADs\u2019 API, and;"),(0,r.kt)("li",{parentName:"ul"},"When data is available in PDF tables, web scraping scripts scrape data from tables and make it available via csv files before being formatted in database tables and made available via the GBADs\u2019 API.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Each of these processes are documented. The lineage of the data is traced in a Graph Database to ensure that we can trace any changes to the data and make our processes transparent and reproducible. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"stop-3-data-quality"},"Stop 3: Data quality"),(0,r.kt)("p",null,"We quality-check each data source that is acquired by GBADs. Sometimes there are internal errors in the aggregation of categorizations where sub-categories do not add up to a \u201csuper-category\u201d. For instance, if poultry is split up into backyard and commercial poultry, these categories should add up to \u201cpoultry\u201d. In other cases, there may be a sudden spike in the number of animals in a country. In this case, we need to investigate by comparing the value to other data sources. "),(0,r.kt)("br",null),(0,r.kt)("p",null,"All quality-checking and respective changes are recorded. Once data has been \u201ccleaned\u201d, the \u201ccleaned\u201d version is provided via the GBADs\u2019 API and dashboards. This way, there is consistency in quality assessments and each collaborator isn\u2019t doing this independently. This ensures consistency in outputs and improves reproducibility of GBADs\u2019 estimates and data collectively. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"stop-4-code"},"Stop 4: Code"),(0,r.kt)("p",null,"Code that is used to acquire and ingest data, clean data, and create models is available via the GBADs\u2019 GitHub repositories. The code is well documented and there is information about how to run the code, which datasets were used, and who was involved in development. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"final-destination-data-utopia"},"Final Destination: Data Utopia"),(0,r.kt)("p",null,"In the Data Utopia, data can be harmonized and re-used for subsequent models or purposes. The idea here is that all members of GBADs are using the same data and not duplicating data cleaning, ingestion, or acquisition efforts. By making the data and methodology for cleaning reproducible, the underlying data is consistent and ready-to-use. In our Utopia, data is visualized and available via dashboards and can be accessed through the API. The dashboards also feature a metadata tab where the methodology, code, and provenance information are provided to ensure all members can access the code and raw data that are displayed and available in the dashboards. "),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: We acknowledge the fact that not all data can be made available. While we are currently working with Open Governmental Data, we anticipate the controlled governance of private and sensitive data, which will not be openly available in raw form without permission from the data holder according to data agreements and licenses.")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"References:"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-082c34"},"Achenbach, J. (2021, October 27). Many scientific studies can't be replicated. that's a problem. The Washington Post. Retrieved June 19, 2022, from ",(0,r.kt)("a",{parentName:"li",href:"https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/"},"https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1-082c34",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2-082c34"},"Baker, M. (2016). 1,500 scientists lift the lid on reproducibility. Nature, 533(7604).",(0,r.kt)("a",{parentName:"li",href:"#fnref-2-082c34",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);