"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[3583],{3905:(e,n,s)=>{s.d(n,{Zo:()=>l,kt:()=>m});var t=s(7294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function u(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var a=t.createContext({}),d=function(e){var n=t.useContext(a),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},l=function(e){var n=d(e.components);return t.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var s=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(s),m=o,f=p["".concat(a,".").concat(m)]||p[m]||c[m]||r;return s?t.createElement(f,i(i({ref:n},l),{},{components:s})):t.createElement(f,i({ref:n},l))}));function m(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=s.length,i=new Array(r);i[0]=p;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var d=2;d<r;d++)i[d]=s[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}p.displayName="MDXCreateElement"},9857:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var t=s(7462),o=(s(7294),s(3905));const r={sidebar_position:7},i="Guide du contributeur de donn\xe9es",u={unversionedId:"Data-Governance-Handbook-for-GBADs/dataContributors",id:"Data-Governance-Handbook-for-GBADs/dataContributors",title:"Guide du contributeur de donn\xe9es",description:"Le guide du contributeur de donn\xe9es fournit des informations sur la mani\xe8re dont vous pouvez saisir des donn\xe9es dans notre syst\xe8me \xe0 l'aide de nos formulaires de donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/dataContributors.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataContributors",permalink:"/docs/fr/docs/Data-Governance-Handbook-for-GBADs/dataContributors",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Audits et revues des donn\xe9es et de la gestion des donn\xe9es",permalink:"/docs/fr/docs/Data-Governance-Handbook-for-GBADs/dataAudits"},next:{title:"Guide de l'utilisateur des donn\xe9es",permalink:"/docs/fr/docs/Data-Governance-Handbook-for-GBADs/dataUsers"}},a={},d=[{value:"Questions sur vos donn\xe9es pour g\xe9n\xe9rer des m\xe9tadonn\xe9es",id:"questions-sur-vos-donn\xe9es-pour-g\xe9n\xe9rer-des-m\xe9tadonn\xe9es",level:2}],l={toc:d};function c(e){let{components:n,...s}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guide-du-contributeur-de-donn\xe9es"},"Guide du contributeur de donn\xe9es"),(0,o.kt)("p",null,"Le guide du contributeur de donn\xe9es fournit des informations sur la mani\xe8re dont vous pouvez saisir des donn\xe9es dans notre syst\xe8me \xe0 l'aide de nos formulaires de donn\xe9es."),(0,o.kt)("p",null,"GBADs vise \xe0 rendre les donn\xe9es FAIR, et cela commence par s'assurer que nous avons une production de m\xe9tadonn\xe9es rigoureuse et que la provenance des ressources de donn\xe9es est bien document\xe9e. Ainsi, lorsque vous fournissez des donn\xe9es, il est important que nous collections des informations \xe0 ce sujet qui permettent la r\xe9utilisation et l'interop\xe9rabilit\xe9 des ressources de donn\xe9es qui sont fournies."),(0,o.kt)("p",null,"##\xa0Pourquoi la production de m\xe9tadonn\xe9es est-elle importante\xa0?"),(0,o.kt)("p",null,"La production de m\xe9tadonn\xe9es est importante car elle permet la r\xe9utilisation des donn\xe9es. Les m\xe9tadonn\xe9es peuvent \xeatre consid\xe9r\xe9es comme le \xab\xa0guide de l'utilisateur\xa0\xbb de vos donn\xe9es\xa0; elles doivent vous dire tout ce que vous devez savoir pour d\xe9terminer si les donn\xe9es conviennent \xe0 votre analyse et comment elles ont \xe9t\xe9 cr\xe9\xe9es. Parfois, nous nous retrouvons dans des situations o\xf9 nous rencontrons des donn\xe9es et n'avons aucune id\xe9e de l'origine des donn\xe9es, des m\xe9thodes exp\xe9rimentales utilis\xe9es pour la collecte des donn\xe9es ou des mod\xe8les qui ont cr\xe9\xe9 les donn\xe9es. Encore plus troublant, c'est lorsque les unit\xe9s de mesure ne sont pas fournies ou que les en-t\xeates de colonne sont ambigus. Les m\xe9tadonn\xe9es sont la solution \xe0 ce probl\xe8me. Ainsi, lorsque vous saisissez vos donn\xe9es dans le syst\xe8me GBADs ou que vous fournissez des informations API \xe0 partir d'une autre source, nous vous demanderons de remplir un formulaire qui g\xe9n\xe9rera automatiquement des m\xe9tadonn\xe9es afin que vous (et d'autres) puissiez r\xe9utiliser les donn\xe9es et cr\xe9er des informations pr\xe9cises, des mod\xe8les et les d\xe9cisions fond\xe9es sur les donn\xe9es. La production de m\xe9tadonn\xe9es granulaires conduit finalement \xe0 des donn\xe9es de meilleure qualit\xe9."),(0,o.kt)("h2",{id:"questions-sur-vos-donn\xe9es-pour-g\xe9n\xe9rer-des-m\xe9tadonn\xe9es"},"Questions sur vos donn\xe9es pour g\xe9n\xe9rer des m\xe9tadonn\xe9es"),(0,o.kt)("p",null,"Selon le type de donn\xe9es que vous saisissez, les questions peuvent varier l\xe9g\xe8rement. Par exemple, si vous saisissez des donn\xe9es \xe0 partir d'une sortie de mod\xe8le, nous aurons besoin de conna\xeetre des informations diff\xe9rentes que si vous saisissez des donn\xe9es \xe0 partir d'enqu\xeates aupr\xe8s des m\xe9nages. Au fur et \xe0 mesure que nous en apprendrons davantage sur les sources de donn\xe9es que les GBAD vont n\xe9gocier et les donn\xe9es que nos utilisateurs utilisent, notre production de m\xe9tadonn\xe9es \xe9voluera."),(0,o.kt)("p",null,"Nous adaptons les Lignes directrices pour la communication d'estimations pr\xe9cises et transparentes sur la sant\xe9 (lignes directrices GATHER) pour la production pr\xe9liminaire de m\xe9tadonn\xe9es."),(0,o.kt)("p",null,"Voici les questions pour chaque ensemble de donn\xe9es qui entre dans le syst\xe8me GBADs\xa0:\nVeuillez noter que ces questions ont \xe9t\xe9 adapt\xe9es des directives GATHER et, dans certains cas, sont identiques \xe0 GATHER."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"D\xe9finir le ou les indicateurs, les populations (entit\xe9s g\xe9ographiques, esp\xe8ces animales) et la ou les p\xe9riodes pour lesquelles les estimations ont \xe9t\xe9 faites."),(0,o.kt)("li",{parentName:"ol"},"\xc9num\xe9rez les sources de financement du travail."),(0,o.kt)("li",{parentName:"ol"},"D\xe9crivez comment les donn\xe9es ont \xe9t\xe9 identifi\xe9es et consult\xe9es."),(0,o.kt)("li",{parentName:"ol"},"Sp\xe9cifiez les crit\xe8res d'inclusion/exclusion. Identifiez toutes les exclusions ad hoc."),(0,o.kt)("li",{parentName:"ol"},"Fournissez des informations sur toutes les sources de donn\xe9es incluses et leurs principales caract\xe9ristiques. Pour chaque source de donn\xe9es utilis\xe9e, indiquez les informations de r\xe9f\xe9rence ou le nom du contact/l'institution, la population repr\xe9sent\xe9e, la m\xe9thode de collecte des donn\xe9es, l'ann\xe9e ou les ann\xe9es de collecte des donn\xe9es, le sexe et la tranche d'\xe2ge, les crit\xe8res de diagnostic ou la m\xe9thode de mesure et la taille de l'\xe9chantillon, selon le cas."),(0,o.kt)("li",{parentName:"ol"},"Identifiez et d\xe9crivez toutes les cat\xe9gories de donn\xe9es d'entr\xe9e qui ont des biais potentiellement importants (par exemple, sur la base des caract\xe9ristiques \xe9num\xe9r\xe9es \xe0 l'\xe9l\xe9ment 5)."),(0,o.kt)("li",{parentName:"ol"},"D\xe9crivez et indiquez les sources de toute autre entr\xe9e de donn\xe9es."),(0,o.kt)("li",{parentName:"ol"},"Fournissez toutes les entr\xe9es de donn\xe9es dans un format de fichier \xe0 partir duquel les donn\xe9es peuvent \xeatre extraites efficacement (par exemple, une feuille de calcul plut\xf4t qu'un appel PDF ou API qui a \xe9t\xe9 utilis\xe9 pour extraire les donn\xe9es). Pour toutes les entr\xe9es de donn\xe9es qui ne peuvent pas \xeatre partag\xe9es pour des raisons \xe9thiques ou l\xe9gales, telles que la propri\xe9t\xe9 d'un tiers, fournissez un nom de contact ou le nom de l'institution qui conserve le droit sur les donn\xe9es.")),(0,o.kt)("p",null,"Si les donn\xe9es ont \xe9t\xe9 organis\xe9es \xe0 l'aide d'un mod\xe8le, d'une analyse de donn\xe9es ou si les donn\xe9es ont \xe9t\xe9 nettoy\xe9es, nous vous demandons \xe9galement de r\xe9pondre aux questions suivantes\xa0:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fournissez une description d\xe9taill\xe9e de toutes les \xe9tapes de l'analyse, y compris les formules math\xe9matiques. Cette description doit couvrir, selon le cas, le nettoyage des donn\xe9es, le pr\xe9traitement des donn\xe9es, les ajustements des donn\xe9es et la pond\xe9ration des sources de donn\xe9es, et le(s) mod\xe8le(s) math\xe9matique(s) ou statistique(s). Un r\xe9f\xe9rentiel GitHub avec le code appropri\xe9 est \xe9galement requis."),(0,o.kt)("li",{parentName:"ol"},"Fournir les r\xe9sultats d'une \xe9valuation des performances du mod\xe8le, le cas \xe9ch\xe9ant, ainsi que les r\xe9sultats de toute analyse de sensibilit\xe9 pertinente."),(0,o.kt)("li",{parentName:"ol"},"D\xe9crire les m\xe9thodes de calcul de l'incertitude des estimations. Indiquez quelles sources d'incertitude ont \xe9t\xe9, et n'ont pas \xe9t\xe9, prises en compte dans l'analyse de l'incertitude.")),(0,o.kt)("p",null,"Chacune de ces questions sera pr\xe9sent\xe9e dans un formulaire sur le portail de donn\xe9es GBADs, o\xf9 vous remplissez chacun des champs en fonction des questions."),(0,o.kt)("p",null,"Nous comprenons que certains contributeurs de donn\xe9es auront d\xe9j\xe0 produit leurs propres m\xe9tadonn\xe9es. Dans ces cas, nous encourageons les individus \xe0 utiliser leurs m\xe9tadonn\xe9es pour remplir les champs fournis."))}c.isMDXComponent=!0}}]);