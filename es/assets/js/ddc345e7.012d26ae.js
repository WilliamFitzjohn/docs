"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[1450],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>m});var s=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,s,n=function(e,a){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=s.createContext({}),d=function(e){var a=s.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},l=function(e){var a=d(e.components);return s.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},p=s.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return o?s.createElement(g,t(t({ref:a},l),{},{components:o})):s.createElement(g,t({ref:a},l))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,t=new Array(r);t[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,t[1]=i;for(var d=2;d<r;d++)t[d]=o[d];return s.createElement.apply(null,t)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1390:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=o(7462),n=(o(7294),o(3905));const r={sidebar_position:4},t="Licencias de Datos, Privacidad y Seguridad",i={unversionedId:"Data-Governance-Handbook-for-GBADs/dataOwnership",id:"Data-Governance-Handbook-for-GBADs/dataOwnership",title:"Licencias de Datos, Privacidad y Seguridad",description:"Datos en un espectro",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/dataOwnership.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataOwnership",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/dataOwnership",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Est\xe1ndares de datos t\xe9cnicos",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/techdatastds"},next:{title:"Mecanismos para el intercambio de datos",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/mechanisms"}},c={},d=[{value:"Datos en un espectro",id:"datos-en-un-espectro",level:2},{value:"Categor\xedas en el espectro de datos",id:"categor\xedas-en-el-espectro-de-datos",level:2},{value:"Informaci\xf3n de identificaci\xf3n personal (PII)",id:"informaci\xf3n-de-identificaci\xf3n-personal-pii",level:3},{value:"Licencia",id:"licencia",level:2},{value:"Usos de la licencia",id:"usos-de-la-licencia",level:3},{value:"Selecci\xf3n de licencia",id:"selecci\xf3n-de-licencia",level:3}],l={toc:d};function u(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"licencias-de-datos-privacidad-y-seguridad"},"Licencias de Datos, Privacidad y Seguridad"),(0,n.kt)("h2",{id:"datos-en-un-espectro"},"Datos en un espectro"),(0,n.kt)("p",null,"GBADs difunde y en algunos casos almacena datos que tienen diversas restricciones de acceso, uso y reutilizaci\xf3n. No todos los datos pueden estar abiertos, y la privacidad de los datos no es tan simple como tener datos abiertos o privados. Para fomentar el intercambio, es importante que los contribuyentes de datos tengan la opci\xf3n de seleccionar c\xf3mo les gustar\xeda que se usaran sus datos, para qu\xe9 quieren que se usen y qui\xe9n les gustar\xeda que los usaran. Los acuerdos de licencia de datos aseguran que el uso de datos no se confunda e informan a nuestro sistema sobre qui\xe9n puede ver, descargar o usar datos."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{margen}"},'**\xa1Incluso los datos que se definen como "Abiertos" necesitan una licencia!** Cuando usa datos abiertos, a\xfan necesita determinar c\xf3mo atribuir (o citar) correctamente el conjunto de datos. Adem\xe1s, los datos se pueden considerar abiertos, pero a\xfan pueden tener restricciones sobre para qu\xe9 se pueden usar. Por ejemplo, algunas licencias de datos abiertos restringen el uso de datos con fines comerciales.\n')),(0,n.kt)("p",null,"El ",(0,n.kt)("a",{parentName:"p",href:"https://theodi.org/about-the-odi/"},"Instituto de Datos Abiertos")," comunica esta idea colocando los datos en un espectro de datos cerrados a abiertos."),(0,n.kt)("h2",{id:"categor\xedas-en-el-espectro-de-datos"},"Categor\xedas en el espectro de datos"),(0,n.kt)("p",null,"Usamos el espectro para generar cuatro categor\xedas de licencias de datos discretos:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datos abiertos"),': "Abierto significa que cualquiera puede acceder, usar, modificar y compartir libremente para cualquier prop\xf3sito (sujeto, como m\xe1ximo, a requisitos que preservan la procedencia y la apertura)".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datos de acceso p\xfablico"),": Los datos est\xe1n protegidos por un acuerdo de licencia que limita el uso y la difusi\xf3n de los datos y/o los modelos para los que se pueden utilizar los datos. Esto podr\xeda incluir la forma en que se pueden utilizar los datos y para qu\xe9 fines, los requisitos de atribuci\xf3n, etc."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datos de acceso basados \u200b\u200ben grupos"),": se requiere autenticaci\xf3n para acceder a los datos. Al igual que los datos de acceso p\xfablico, los datos tambi\xe9n est\xe1n protegidos por un acuerdo de licencia que limita el uso y la difusi\xf3n de los datos y/o los modelos para los que se pueden utilizar."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datos de acceso nominal y datos de acceso interno"),": Se requerir\xe1 un contrato especial para articular las restricciones de uso, atribuci\xf3n y acceso a los datos. Esto ser\xe1 asignado expl\xedcitamente por un contrato y/o NDA, que requerir\xe1 contacto directo con el equipo legal de GBAD. Agrupamos estos dos, porque ambos necesitar\xe1n un contrato de datos y requerir\xe1n acceso con nombre (y autenticado) para su uso."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"Decisi\xf3n necesaria","Decisi\xf3n":!0,necesaria:!0},"- \xbfC\xf3mo se autenticar\xe1n los usuarios?\n- \xbfC\xf3mo se autenticar\xe1n los grupos de usuarios?\n- \xbfQu\xe9 licencia usaremos para los modelos generados por GBAD y las salidas de datos generadas por los modelos?\n")),(0,n.kt)("h3",{id:"informaci\xf3n-de-identificaci\xf3n-personal-pii"},"Informaci\xf3n de identificaci\xf3n personal (PII)"),(0,n.kt)("p",null,"La informaci\xf3n de identificaci\xf3n personal (PII) es cualquier informaci\xf3n que se puede utilizar para identificar a una persona, residencia o granja. Esto podr\xeda incluir nombres, direcciones de correo electr\xf3nico, geolocalizaci\xf3n o registros veterinarios, por ejemplo. Independientemente del tipo de PII, los datos que contengan deben gestionarse con cuidado."),(0,n.kt)("p",null,"La PII debe estar protegida y segura, con requisitos de acceso restringido. Dependiendo del caso de uso, los datos pueden transformarse para proteger la PII. Por ejemplo, las geolocalizaciones pueden moverse hacia arriba en granularidad espacial y los datos pueden proporcionarse en regiones o zonas o por pa\xeds. Las direcciones de correo electr\xf3nico, los n\xfameros de tel\xe9fono y los nombres de las granjas pueden cifrarse en la ingesta y eliminarse de las tablas de datos."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{admonici\xf3n}",metastring:"Infraestructura de almacenamiento seguro de datos",Infraestructura:!0,de:!0,almacenamiento:!0,seguro:!0,datos:!0},":clase: consejo\nDado que GBADs Knowledge Engine es un servicio en la nube, todos los datos que incluyan PII se almacenar\xe1n en un dep\xf3sito seguro, como el dep\xf3sito [Amazon S3](https://aws.amazon.com/s3/).\n")),(0,n.kt)("h2",{id:"licencia"},"Licencia"),(0,n.kt)("p",null,"Las licencias informan qui\xe9n puede acceder a los datos, c\xf3mo se pueden utilizar los datos, qui\xe9n puede utilizarlos y con qu\xe9 fines y c\xf3mo atribuir correctamente los datos."),(0,n.kt)("h3",{id:"usos-de-la-licencia"},"Usos de la licencia"),(0,n.kt)("p",null,"Las licencias tienen 3 utilidades para GBADs, cada una de las cuales est\xe1 informada por los principios CARE:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{tabbed}",metastring:"1. Proteger a los contribuyentes de datos","1.":!0,Proteger:!0,a:!0,los:!0,contribuyentes:!0,de:!0,datos:!0},"**Cada vez que se aporten datos a GBAD, los titulares de datos deber\xe1n seleccionar una licencia para sus datos.**\n\nEste es un mecanismo de intercambio de CARE porque las licencias permiten a los contribuyentes de datos tener la autoridad para controlar sus datos a lo largo de su ciclo de vida y con licencias que dictan las restricciones de uso de los datos, los datos se pueden usar para el beneficio colectivo del titular de los datos individualmente, o el grupo que representa el titular de los datos.\n\nLas licencias disponibles p\xfablicamente se vincular\xe1n en los metadatos, y la informaci\xf3n de citaci\xf3n/atribuci\xf3n se difundir\xe1 junto con el conjunto de datos.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{tabbed}",metastring:"2. Informar a los usuarios de datos","2.":!0,Informar:!0,a:!0,los:!0,usuarios:!0,de:!0,datos:!0},"Cada conjunto de datos tendr\xe1 una licencia y la informaci\xf3n de licencias y citas estar\xe1 disponible en los metadatos del conjunto de datos. Por tanto, los usuarios de los datos ser\xe1n informados de c\xf3mo pueden hacer uso de los datos a los que acceden y la atribuci\xf3n que deben hacer.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{tabbed}",metastring:"3. Informar vista del sistema","3.":!0,Informar:!0,vista:!0,del:!0,sistema:!0},"Los datos abiertos y p\xfablicos estar\xe1n disponibles para cualquier usuario que ingrese al sitio, pero los datos de acceso grupales o con nombre necesitar\xe1n autenticaci\xf3n y, por lo tanto, ser\xe1n inaccesibles de manera predeterminada.\n\nEn otras palabras, la vista de GBADs Knowledge Engine ser\xe1 informada por el acuerdo de licencia. En algunos casos, esto puede significar que incluso los metadatos no se mostrar\xe1n a usuarios no autorizados. En otros casos, los metadatos descriptivos pueden estar disponibles y los usuarios pueden solicitar acceso. Lo que el p\xfablico o ciertos usuarios y grupos pueden ver se regir\xe1 por las elecciones del usuario de datos.\n")),(0,n.kt)("h3",{id:"selecci\xf3n-de-licencia"},"Selecci\xf3n de licencia"),(0,n.kt)("p",null,"Los titulares de datos que contribuyen con datos abiertos o de acceso p\xfablico deben elegir un acuerdo de licencia para sus datos. Hay un conjunto de acuerdos de licencia de datos entre los que pueden elegir los titulares de datos. \xc9stos incluyen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Licencias Creative Commons. La ",(0,n.kt)("a",{parentName:"li",href:"https://creativecommons.org/choose/"},"herramienta de selecci\xf3n de licencias de Creative Commons")," permite a las personas seleccionar las funciones de uso, adaptaci\xf3n y uso compartido, y proporciona una licencia que refleja estas preferencias."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/"},"Licencias Open Data Commons")," incluida la ",(0,n.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/odbl/"},"Open Data Commons Open Database License (ODbl)"),", la ",(0,n.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/by/"},"Open Licencia de atribuci\xf3n de Data Commons")," y ",(0,n.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/pddl/"},"Licencia y dedicaci\xf3n de dominio p\xfablico de Open Data Commons (PDDL)"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{Advertencia}",metastring:"Licencias legibles por m\xe1quina",Licencias:!0,legibles:!0,por:!0,"m\xe1quina":!0},"GBADs est\xe1 explorando c\xf3mo hacer que las licencias sean legibles por m\xe1quina, de modo que los datos que fluyen a trav\xe9s del motor de conocimiento y se almacenan en los repositorios de GBADs puedan ser m\xe1s JUSTOS. Adem\xe1s, usamos restricciones de privacidad de datos para informar las vistas del sistema para diferentes usuarios para ayudar a proteger los requisitos de uso establecidos por los contribuyentes de datos.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"Decisi\xf3n necesaria","Decisi\xf3n":!0,necesaria:!0},"Los GBAD deben determinar si los contribuyentes de datos pueden cambiar la licencia de sus datos despu\xe9s de enviarlos y, de ser as\xed, c\xf3mo comunicarse con las personas que pueden haber descargado los datos en cuesti\xf3n. Adem\xe1s, los GBAD deben decidir c\xf3mo afecta la retracci\xf3n de datos a los modelos preexistentes.\n")))}u.isMDXComponent=!0}}]);