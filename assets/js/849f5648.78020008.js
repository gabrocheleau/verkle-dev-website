"use strict";(self.webpackChunkverkle_dev=self.webpackChunkverkle_dev||[]).push([[861],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=i(t),N=s,h=k["".concat(l,".").concat(N)]||k[N]||c[N]||r;return t?n.createElement(h,m(m({ref:a},o),{},{components:t})):n.createElement(h,m({ref:a},o))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=k;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4054:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const r={},m="Why Verkle Trees",p={unversionedId:"why_verkle_trees",id:"why_verkle_trees",title:"Why Verkle Trees",description:"Verkle trees are Merkle trees 2.0",source:"@site/docs/01-why_verkle_trees.md",sourceDirName:".",slug:"/why_verkle_trees",permalink:"/docs/why_verkle_trees",draft:!1,editUrl:"https://github.com/ethereum/verkle-dev-website/blob/master/docs/01-why_verkle_trees.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"On Merkle Trees",permalink:"/docs/concepts/merkle_trees"}},l={},i=[{value:"Comparison with Merkle trees",id:"comparison-with-merkle-trees",level:2}],o={toc:i};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"why-verkle-trees"},"Why Verkle Trees"),(0,s.kt)("p",null,"Verkle trees are Merkle trees 2.0"),(0,s.kt)("p",null,"They enable us to store, retrieve and verify data from the blockchain with an order of magnitude improvement in proof sizes. This empowers everyday users with low-cost hardware to participate as validators for the ever-growing Ethereum blockchain, without compromising the security and speed of the entire network."),(0,s.kt)("p",null,"Currently Ethereum depends on the Merkle tree, as do many blockchains and software systems (including Bitcoin and Git). As part of scaling Ethereum to support exponential growth in users and validators, Merkle trees will be upgraded to Verkle trees within the Ethereum protocol in the near future."),(0,s.kt)("h2",{id:"comparison-with-merkle-trees"},"Comparison with Merkle trees"),(0,s.kt)("br",null),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Merkle tree"),(0,s.kt)("th",{parentName:"tr",align:null},"Verkle tree"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Year first published"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://link.springer.com/content/pdf/10.1007/0-387-34805-0_21.pdf"}," 1979 ")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://math.mit.edu/research/highschool/primes/materials/2018/Kuszmaul.pdf"}," 2018 "))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Cryptography requirements"),(0,s.kt)("td",{parentName:"tr",align:null},"Collision-resistant hash function"),(0,s.kt)("td",{parentName:"tr",align:null},"Pedersen commitments ",(0,s.kt)("br",null)," Elliptic group operations")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Proof size",(0,s.kt)("sup",null,"1, 2")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061")),(0,s.kt)("mi",{parentName:"msub"},"d")),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(d \\log_d n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.242em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4559em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2441em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," ",(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," is the branching factor of the merkle tree, it is 2 in a simple binary merkle tree and 16 in the hexary Merkle patricia tree used currently in Ethereum. ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of leaf nodes. "),(0,s.kt)("li",{parentName:"ol"},"Kuszmaul's paper on verkle trees states ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061")),(0,s.kt)("mi",{parentName:"msub"},"d")),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\log_d n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.242em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4559em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2441em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," as the space complexity for verkle tree proofs, however we can compress it to O(1) by using ",(0,s.kt)("a",{parentName:"li",href:"https://dankradfeist.de/ethereum/2021/06/18/pcs-multiproofs.html"},"clever mathematical constructs"),".")))}c.isMDXComponent=!0}}]);