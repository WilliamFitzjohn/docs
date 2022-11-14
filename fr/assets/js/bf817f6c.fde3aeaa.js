"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[2865],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>m});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(s),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return s?n.createElement(f,a(a({ref:t},d),{},{components:s})):n.createElement(f,a({ref:t},d))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=s.length,a=new Array(o);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=s[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}c.displayName="MDXCreateElement"},8891:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=s(7462),r=(s(7294),s(3905));const o={slug:"the-roadmap-to-reproducibility",title:"La feuille de route vers la reproductibilit\xe9",authors:"Kassy",tags:["reproducibility","data","values"]},a=void 0,i={permalink:"/docs/fr/blog/the-roadmap-to-reproducibility",source:"@site/i18n/fr/docusaurus-plugin-content-blog/the-road-to-reproducibility.md",title:"La feuille de route vers la reproductibilit\xe9",description:"Image d'en-t\xeate",date:"2022-11-14T17:21:54.000Z",formattedDate:"14 novembre 2022",tags:[{label:"reproducibility",permalink:"/docs/fr/blog/tags/reproducibility"},{label:"data",permalink:"/docs/fr/blog/tags/data"},{label:"values",permalink:"/docs/fr/blog/tags/values"}],readingTime:6.955,hasTruncateMarker:!1,authors:[{name:"Kassy Raymond",title:"Doctorant @ UoG",url:"https://github.com/kassyray",imageURL:"https://github.com/kassyray.png",key:"Kassy"}],frontMatter:{slug:"the-roadmap-to-reproducibility",title:"La feuille de route vers la reproductibilit\xe9",authors:"Kassy",tags:["reproducibility","data","values"]},nextItem:{title:"Bilan printanier du troupeau informatique GBADs",permalink:"/docs/fr/blog/spring-GBADs-informatics-herd-round-up"}},l={authorsImageUrls:[void 0]},u=[{value:"La \xab\xa0crise de la reproductibilit\xe9\xa0\xbb",id:"la-crise-de-la-reproductibilit\xe9",level:2},{value:"S&#39;engager sur la voie de la reproductibilit\xe9",id:"sengager-sur-la-voie-de-la-reproductibilit\xe9",level:2},{value:"Arr\xeat\xa01\xa0: Personnes et processus",id:"arr\xeat1-personnes-et-processus",level:3},{value:"Stop 2 : Acquisition et ingestion de donn\xe9es",id:"stop-2--acquisition-et-ingestion-de-donn\xe9es",level:3},{value:"Arr\xeat\xa04\xa0: Coder",id:"arr\xeat4-coder",level:3}],d={toc:u};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/2JEVnaV.png",alt:"Image d'en-t\xeate"}),"\n",(0,r.kt)("em",{parentName:"p"},"Figure 1 : Feuille de route vers la reproductibilit\xe9")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xab L'int\xe9r\xeat de la science, la fa\xe7on dont nous savons quelque chose, n'est pas que je fasse confiance \xe0 Isaac Newton parce que je pense qu'il \xe9tait un type formidable. Le tout est que je peux le faire moi-m\xeame\u2026 Montrez-moi les donn\xe9es, montrez-moi le processus, montrez-moi la m\xe9thode, puis si je veux, je peux les reproduire. \xbb"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/"},"Brian Nosek")," - Washington Post",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-91905d"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-91905d",className:"footnote-ref"},"1"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"La science reproductible n\xe9cessite des m\xe9thodes bien document\xe9es, un code et la mise \xe0 disposition de donn\xe9es. Cela signifie assurer la transparence de ce que vous faites tout au long du processus scientifique pour favoriser la confiance dans le processus et les r\xe9sultats et permettre aux autres de tirer parti des travaux ant\xe9rieurs. Il n'y a pas de place pour le sceptique scientifique lorsque votre recherche est reproductible."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Les donn\xe9es utilis\xe9es par les GBAD proviennent de nombreuses sources diff\xe9rentes et sont utilis\xe9es dans des mod\xe8les qui produisent ensuite davantage d'ensembles de donn\xe9es et qui servent d'entr\xe9es \xe0 d'autres mod\xe8les. Cette guirlande de donn\xe9es-mod\xe8le-donn\xe9es-mod\xe8le-donn\xe9es ne se limite pas au travail d'un seul scientifique\xa0; nous avons des collaborateurs travaillant partout dans le monde. Il est crucial que les donn\xe9es sous-jacentes soient disponibles et que toutes nos m\xe9thodes soient reproductibles afin que nous puissions nous appuyer sur le travail de chacun et permettre aux autres d'utiliser nos estimations en toute confiance."),(0,r.kt)("br",null),(0,r.kt)("p",null,'Dans le but de rendre tous nos processus reproductibles et transparents, GBADs s\'engage dans la "Roadmap to Reproductibility". Dans cet article de blog, nous vous invitons \xe0 parcourir avec nous le chemin de la reproductibilit\xe9. Bouclez vos ceintures de s\xe9curit\xe9 pendant que nous \xe9vitons les flammes ardentes de la \xab\xa0crise de la reproductibilit\xe9\xa0\xbb avant de nous diriger vers notre destination finale, la \xab\xa0Data Utopia\xa0\xbb\xa0!'),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"la-crise-de-la-reproductibilit\xe9"},"La \xab\xa0crise de la reproductibilit\xe9\xa0\xbb"),(0,r.kt)("p",null,'En 2016, une enqu\xeate aupr\xe8s de 1 576 chercheurs de Nature a r\xe9v\xe9l\xe9 qu\'il y avait une "crise de reproductibilit\xe9" dans la communaut\xe9 scientifique',(0,r.kt)("sup",{parentName:"p",id:"fnref-2-91905d"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-91905d",className:"footnote-ref"},"2")),". Parmi les participants \"plus de 70% des chercheurs ont essay\xe9 et \xe9chou\xe9 \xe0 reproduire l'exp\xe9rience d'un autre scientifique et plus de la moiti\xe9 n'ont pas r\xe9ussi \xe0 reproduire leurs propres exp\xe9riences\". De nombreux facteurs contribuent \xe0 la recherche non reproductible (figure 2), o\xf9 la pression \xe0 publier et les rapports s\xe9lectifs \xe9taient parmi les plus appr\xe9ci\xe9s. Cependant, les donn\xe9es brutes non disponibles et les m\xe9thodes ou codes non disponibles ont \xe9galement \xe9t\xe9 consid\xe9r\xe9s comme des contributeurs \xe9lev\xe9s. Alors que la pression pour publier n\xe9cessite un changement de culture dans la recherche, les donn\xe9es brutes et les m\xe9thodes ou le code indisponibles sont des probl\xe8mes que nous pouvons r\xe9soudre."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/dcnJkJR.jpg",alt:"Figure 2"}),"\nFigure 2 : Facteurs qui contribuent \xe0 une recherche non reproductible. Chiffre obtenu de Baker, 2016",(0,r.kt)("sup",{parentName:"p",id:"fnref-2-91905d"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-91905d",className:"footnote-ref"},"2")),"."),(0,r.kt)("h2",{id:"sengager-sur-la-voie-de-la-reproductibilit\xe9"},"S'engager sur la voie de la reproductibilit\xe9"),(0,r.kt)("h3",{id:"arr\xeat1-personnes-et-processus"},"Arr\xeat\xa01\xa0: Personnes et processus"),(0,r.kt)("p",null,"La disponibilit\xe9 du code et des donn\xe9es est importante pour la reproductibilit\xe9, mais il y a des personnes derri\xe8re le code et les donn\xe9es qui travaillent sur des processus pour le rendre reproductible."),(0,r.kt)("br",null),(0,r.kt)("p",null,"\xc0 ce titre, nous avons \xe9tabli des processus et des bonnes pratiques pour l'utilisation des donn\xe9es dans les GBAD, qui sont communiqu\xe9s dans le ",(0,r.kt)("a",{parentName:"p",href:"http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro"},"Manuel de gouvernance des donn\xe9es"),", et sur notre ",(0,r.kt)("a",{parentName:"p",href:"http://gbadskedoc.org"},"Site de documentation"),". Ces processus impliquent ce qui suit :"),(0,r.kt)("br",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Documentation des modifications apport\xe9es aux donn\xe9es et aux pratiques de nettoyage des donn\xe9es"),(0,r.kt)("li",{parentName:"ol"},"Documentation des normes de m\xe9tadonn\xe9es utilis\xe9es pour fournir des informations sur les donn\xe9es"),(0,r.kt)("li",{parentName:"ol"},"O\xf9 et comment les donn\xe9es et les m\xe9tadonn\xe9es sont stock\xe9es et comment elles sont diffus\xe9es"),(0,r.kt)("li",{parentName:"ol"},"Meilleures pratiques pour documenter le code dans les r\xe9f\xe9rentiels GitHub")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Nous comptons \xe9galement sur les gens pour se conformer aux processus que nous avons \xe9tablis. \xc9tant donn\xe9 que certaines des donn\xe9es utilis\xe9es par les GBAD ne contiennent pas de m\xe9tadonn\xe9es, nous comptons sur la mise en place d'un point de contact pour la source de donn\xe9es afin de nous assurer que nous pouvons obtenir un contexte sur la mani\xe8re dont les donn\xe9es ont \xe9t\xe9 collect\xe9es, comment elles peuvent \xeatre utilis\xe9es, par qui, et \xe0 quelles fins et quelles cat\xe9gories de donn\xe9es repr\xe9sentent."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"stop-2--acquisition-et-ingestion-de-donn\xe9es"},"Stop 2 : Acquisition et ingestion de donn\xe9es"),(0,r.kt)("p",null,"Pour acqu\xe9rir des donn\xe9es, nous identifions les donn\xe9es pertinentes pour l'estimation des mod\xe8les. Par exemple, la population de b\xe9tail par pays et par esp\xe8ce et les poids vifs sont des donn\xe9es d'entr\xe9e pour les calculs de la biomasse."),(0,r.kt)("br",null),(0,r.kt)("p",null,"La fa\xe7on dont nous acqu\xe9rons les donn\xe9es d\xe9pend du format dans lequel elles sont disponibles. Les donn\xe9es ont \xe9t\xe9 acquises et ing\xe9r\xe9es de 3 mani\xe8res principales\xa0:"),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lorsque les donn\xe9es sont disponibles via des interfaces de programmation d'applications (API), les donn\xe9es sont acquises directement \xe0 partir de la source, \xe9tant transform\xe9es avant d'\xeatre mises \xe0 disposition via l'API des GBAD\xa0;"),(0,r.kt)("li",{parentName:"ul"},"Lorsque les donn\xe9es sont disponibles par t\xe9l\xe9chargement direct, les donn\xe9es sont t\xe9l\xe9charg\xe9es et format\xe9es dans des tables de base de donn\xe9es avant d'\xeatre mises \xe0 disposition via l'API des GBAD, et\xa0;"),(0,r.kt)("li",{parentName:"ul"},"Lorsque les donn\xe9es sont disponibles dans des tableaux PDF, les scripts de grattage Web r\xe9cup\xe8rent les donn\xe9es des tableaux et les rendent disponibles via des fichiers csv avant d'\xeatre format\xe9s dans des tableaux de base de donn\xe9es et mis \xe0 disposition via l'API des GBAD.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Chacun de ces processus est document\xe9. La lign\xe9e des donn\xe9es est trac\xe9e dans une base de donn\xe9es graphique pour nous assurer que nous pouvons retracer toute modification des donn\xe9es et rendre nos processus transparents et reproductibles."),(0,r.kt)("br",null),(0,r.kt)("p",null,"###\xa0\xc9tape\xa03\xa0: Qualit\xe9 des donn\xe9es"),(0,r.kt)("p",null,"Nous v\xe9rifions la qualit\xe9 de chaque source de donn\xe9es acquise par les GBAD. Parfois, il y a des erreurs internes dans l'agr\xe9gation des cat\xe9gorisations o\xf9 les sous-cat\xe9gories ne s'additionnent pas pour former une \xab super-cat\xe9gorie \xbb. Par exemple, si la volaille est divis\xe9e en volaille de basse-cour et volaille commerciale, ces cat\xe9gories devraient s'additionner pour donner la \xab volaille \xbb. Dans d'autres cas, il peut y avoir une augmentation soudaine du nombre d'animaux dans un pays. Dans ce cas, nous devons enqu\xeater en comparant la valeur \xe0 d'autres sources de donn\xe9es."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Tous les contr\xf4les de qualit\xe9 et les modifications correspondantes sont enregistr\xe9s. Une fois les donn\xe9es \xab nettoy\xe9es \xbb, la version \xab nettoy\xe9e \xbb est fournie via l'API et les tableaux de bord des GBAD. De cette fa\xe7on, il y a coh\xe9rence dans les \xe9valuations de qualit\xe9 et chaque collaborateur ne le fait pas de mani\xe8re ind\xe9pendante. Cela garantit la coh\xe9rence des r\xe9sultats et am\xe9liore la reproductibilit\xe9 des estimations et des donn\xe9es des GBAD collectivement."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"arr\xeat4-coder"},"Arr\xeat\xa04\xa0: Coder"),(0,r.kt)("p",null,"Le code utilis\xe9 pour acqu\xe9rir et ing\xe9rer des donn\xe9es, nettoyer des donn\xe9es et cr\xe9er des mod\xe8les est disponible via les r\xe9f\xe9rentiels GitHub des GBAD. Le code est bien document\xe9 et il y a des informations sur la fa\xe7on d'ex\xe9cuter le code, quels jeux de donn\xe9es ont \xe9t\xe9 utilis\xe9s et qui a \xe9t\xe9 impliqu\xe9 dans le d\xe9veloppement."),(0,r.kt)("br",null),(0,r.kt)("p",null,"###\xa0Destination finale\xa0: l'utopie des donn\xe9es"),(0,r.kt)("p",null,"Dans l'utopie des donn\xe9es, les donn\xe9es peuvent \xeatre harmonis\xe9es et r\xe9utilis\xe9es pour des mod\xe8les ou des objectifs ult\xe9rieurs. L'id\xe9e ici est que tous les membres des GBAD utilisent les m\xeames donn\xe9es et ne dupliquent pas les efforts de nettoyage, d'ingestion ou d'acquisition des donn\xe9es. En rendant les donn\xe9es et la m\xe9thodologie de nettoyage reproductibles, les donn\xe9es sous-jacentes sont coh\xe9rentes et pr\xeates \xe0 l'emploi. Dans notre Utopia, les donn\xe9es sont visualis\xe9es et disponibles via des tableaux de bord et sont accessibles via l'API. Les tableaux de bord comportent \xe9galement un onglet de m\xe9tadonn\xe9es o\xf9 la m\xe9thodologie, le code et les informations de provenance sont fournies pour garantir que tous les membres peuvent acc\xe9der au code et aux donn\xe9es brutes qui sont affich\xe9s et disponibles dans les tableaux de bord."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Remarque : Nous reconnaissons le fait que toutes les donn\xe9es ne peuvent pas \xeatre mises \xe0 disposition. Bien que nous travaillions actuellement avec des donn\xe9es gouvernementales ouvertes, nous pr\xe9voyons la gouvernance contr\xf4l\xe9e des donn\xe9es priv\xe9es et sensibles, qui ne seront pas disponibles ouvertement sous forme brute sans l'autorisation du d\xe9tenteur des donn\xe9es conform\xe9ment aux accords et licences de donn\xe9es.")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"R\xe9f\xe9rences:"),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1-91905d"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-91905d",className:"footnote-ref"},"1")),"\xa0: Achenbach, J. (2021, 27\xa0octobre). De nombreuses \xe9tudes scientifiques ne peuvent pas \xeatre reproduites. c'est un probl\xe8me. Le Washington Post. Extrait le 19 juin 2022 de ","[https://www.washingtonpost.com/news/talking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100- les r\xe9sultats exp\xe9rimentaux ne r\xe9ussissent que 36 fois/]","(",(0,r.kt)("a",{parentName:"p",href:"https://www.washingtonpost.com/news/talking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-"},"https://www.washingtonpost.com/news/talking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-")," reproduire-100-r\xe9sultats-exp\xe9rimentaux-r\xe9ussit-seulement-36-fois/)"),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-2-91905d"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-91905d",className:"footnote-ref"},"2"))," : Baker, M. (2016). 1 500 scientifiques l\xe8vent le voile sur la reproductibilit\xe9. Nature, 533(7604)."))}p.isMDXComponent=!0}}]);