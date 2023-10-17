import{S as K,i as W,s as Q,C as L,w as x,D as w,y as T,z as R,A as M,E as ie,F as oe,G as $,g as I,d as S,B as F,H as U,I as fe,J as G,K as Y,L as q,M as y,N as Ce,a as j,k as V,e as ge,c as H,l as O,m as C,h as B,n as D,b as P,O as E,v as se,f as le,q as Ee,r as De,P as ne,o as Ne}from"../chunks/index.759e29a4.js";import{f as re,c as de,B as ue,g as Ve,a as je,d as ce,b as _e}from"../chunks/fetch-npm-browserify.a89ed368.js";const ae={spacing:{xs:10,sm:12,md:16,lg:20,xl:24},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400}};function Oe(n,t){if(!n)return[];const e=Object.keys(n).filter(s=>s!=="base").map(s=>[re.size({size:s,sizes:t.breakpoints}),n[s]]);return e.sort((s,l)=>s[0]-l[0]),e}const He=de((n,{height:t,width:e,fixed:s,position:l,hiddenBreakpoint:f,zIndex:r,section:i,hidden:o})=>{const u=typeof e=="object"&&e!==null?Oe(e,ae).reduce((p,[m,_])=>(p[`@media (min-width: ${m+1}px)`]={width:_,minWidth:_},p),{}):null;return{root:{darkMode:{backgroundColor:n.fn.themeColor("dark",7),[i==="navbar"?"borderRight":"borderLeft"]:`1px solid ${n.fn.themeColor("dark",5)}`},fontFamily:"$standard",...l,top:(l==null?void 0:l.top)||"var(--svelteui-header-height)",zIndex:r,height:t||"calc(100vh - var(--svelteui-header-height, 0px) - var(--svelteui-footer-height, 0px))",width:(e==null?void 0:e.base)||"100%",position:s?"fixed":"static",boxSizing:"border-box",display:"flex",flexDirection:"column",backgroundColor:"white",[i==="navbar"?"borderRight":"borderLeft"]:`1px solid ${n.fn.themeColor("gray",2)}`,...u,[`@media (max-width: ${n.fn.size({size:f,sizes:ae.breakpoints})}px)`]:o?{display:"none"}:{}}}});function Le(n){let t;const e=n[16].default,s=G(e,n,n[18],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&262144)&&Y(s,e,l,l[18],t?y(e,l[18],f,null):q(l[18]),null)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Ae(n){let t,e,s;const l=[{use:n[1]},{root:n[4]==="navbar"?"nav":"aside"},{class:n[7](n[2],n[6].root,n[5]({css:n[3]}))},n[8]];function f(i){n[17](i)}let r={$$slots:{default:[Le]},$$scope:{ctx:n}};for(let i=0;i<l.length;i+=1)r=L(r,l[i]);return n[0]!==void 0&&(r.element=n[0]),t=new ue({props:r}),x.push(()=>w(t,"element",f)),{c(){T(t.$$.fragment)},l(i){R(t.$$.fragment,i)},m(i,o){M(t,i,o),s=!0},p(i,[o]){const u=o&510?ie(l,[o&2&&{use:i[1]},o&16&&{root:i[4]==="navbar"?"nav":"aside"},o&236&&{class:i[7](i[2],i[6].root,i[5]({css:i[3]}))},o&256&&oe(i[8])]):{};o&262144&&(u.$$scope={dirty:o,ctx:i}),!e&&o&1&&(e=!0,u.element=i[0],$(()=>e=!1)),t.$set(u)},i(i){s||(I(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){F(t,i)}}}function Pe(n,t,e){let s,l,f;const r=["use","element","class","override","width","height","fixed","position","hiddenBreakpoint","hidden","zIndex","section"];let i=U(t,r),{$$slots:o={},$$scope:u}=t,{use:p=[],element:m=void 0,class:_="",override:v={},width:g=void 0,height:h=void 0,fixed:c=!1,position:d={},hiddenBreakpoint:a="md",hidden:b=!1,zIndex:A=100,section:z}=t;const ee=Oe(g,ae).reduce((k,[X,J])=>(k[`@media (min-width: ${X+1}px)`]={[`--svelteui-${z}-width`]:`${J}px`},k),{});Ve({":root":{[`--svelteui-${z}-width`]:g!=null&&g.base?`${g.base}px`:"0px",...ee}})();function te(k){m=k,e(0,m)}return n.$$set=k=>{t=L(L({},t),fe(k)),e(8,i=U(t,r)),"use"in k&&e(1,p=k.use),"element"in k&&e(0,m=k.element),"class"in k&&e(2,_=k.class),"override"in k&&e(3,v=k.override),"width"in k&&e(9,g=k.width),"height"in k&&e(10,h=k.height),"fixed"in k&&e(11,c=k.fixed),"position"in k&&e(12,d=k.position),"hiddenBreakpoint"in k&&e(13,a=k.hiddenBreakpoint),"hidden"in k&&e(14,b=k.hidden),"zIndex"in k&&e(15,A=k.zIndex),"section"in k&&e(4,z=k.section),"$$scope"in k&&e(18,u=k.$$scope)},n.$$.update=()=>{n.$$.dirty&65040&&e(7,{cx:s,classes:l,getStyles:f}=He({fixed:c,height:h,hiddenBreakpoint:a,position:d,width:g,zIndex:A,section:z,hidden:b},{name:"HorizontalSection"}),s,(e(6,l),e(11,c),e(10,h),e(13,a),e(12,d),e(9,g),e(15,A),e(4,z),e(14,b)),(e(5,f),e(11,c),e(10,h),e(13,a),e(12,d),e(9,g),e(15,A),e(4,z),e(14,b)))},[m,p,_,v,z,f,l,s,i,g,h,c,d,a,b,A,o,te,u]}class Te extends K{constructor(t){super(),W(this,t,Pe,Ae,Q,{use:1,element:0,class:2,override:3,width:9,height:10,fixed:11,position:12,hiddenBreakpoint:13,hidden:14,zIndex:15,section:4})}}const Re=Te;function Me(n){let t;const e=n[12].default,s=G(e,n,n[14],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&16384)&&Y(s,e,l,l[14],t?y(e,l[14],f,null):q(l[14]),null)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Fe(n){let t,e,s;const l=[{section:"navbar"},{class:n[2]},{use:n[1]},{override:n[3]},{width:n[4]},{height:n[5]},{fixed:n[6]},{position:n[7]},{hiddenBreakpoint:n[8]},{hidden:n[9]},{zIndex:n[10]},n[11]];function f(i){n[13](i)}let r={$$slots:{default:[Me]},$$scope:{ctx:n}};for(let i=0;i<l.length;i+=1)r=L(r,l[i]);return n[0]!==void 0&&(r.element=n[0]),t=new Re({props:r}),x.push(()=>w(t,"element",f)),{c(){T(t.$$.fragment)},l(i){R(t.$$.fragment,i)},m(i,o){M(t,i,o),s=!0},p(i,[o]){const u=o&4094?ie(l,[l[0],o&4&&{class:i[2]},o&2&&{use:i[1]},o&8&&{override:i[3]},o&16&&{width:i[4]},o&32&&{height:i[5]},o&64&&{fixed:i[6]},o&128&&{position:i[7]},o&256&&{hiddenBreakpoint:i[8]},o&512&&{hidden:i[9]},o&1024&&{zIndex:i[10]},o&2048&&oe(i[11])]):{};o&16384&&(u.$$scope={dirty:o,ctx:i}),!e&&o&1&&(e=!0,u.element=i[0],$(()=>e=!1)),t.$set(u)},i(i){s||(I(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){F(t,i)}}}function Ge(n,t,e){const s=["use","element","class","override","width","height","fixed","position","hiddenBreakpoint","hidden","zIndex"];let l=U(t,s),{$$slots:f={},$$scope:r}=t,{use:i=[],element:o=void 0,class:u="",override:p={},width:m=void 0,height:_=void 0,fixed:v=!1,position:g={top:0,left:0},hiddenBreakpoint:h="md",hidden:c=!1,zIndex:d=100}=t;function a(b){o=b,e(0,o)}return n.$$set=b=>{t=L(L({},t),fe(b)),e(11,l=U(t,s)),"use"in b&&e(1,i=b.use),"element"in b&&e(0,o=b.element),"class"in b&&e(2,u=b.class),"override"in b&&e(3,p=b.override),"width"in b&&e(4,m=b.width),"height"in b&&e(5,_=b.height),"fixed"in b&&e(6,v=b.fixed),"position"in b&&e(7,g=b.position),"hiddenBreakpoint"in b&&e(8,h=b.hiddenBreakpoint),"hidden"in b&&e(9,c=b.hidden),"zIndex"in b&&e(10,d=b.zIndex),"$$scope"in b&&e(14,r=b.$$scope)},[o,i,u,p,m,_,v,g,h,c,d,l,f,a,r]}class Ye extends K{constructor(t){super(),W(this,t,Ge,Fe,Q,{use:1,element:0,class:2,override:3,width:4,height:5,fixed:6,position:7,hiddenBreakpoint:8,hidden:9,zIndex:10})}}const qe=Ye,ye=de((n,{height:t,borderPosition:e,fixed:s,position:l,zIndex:f})=>({root:{[`${n.dark} &`]:{backgroundColor:n.fn.themeColor("dark",7),borderBottom:e==="bottom"?`1px solid ${n.fn.themeColor("dark",5)}`:void 0,borderTop:e==="top"?`1px solid ${n.fn.themeColor("dark",5)}`:void 0},...l,zIndex:f,height:t,fontFamily:"$standard",maxHeight:t,position:s?"fixed":"static",boxSizing:"border-box",backgroundColor:"white",borderBottom:e==="bottom"?`1px solid ${n.fn.themeColor("gray",2)}`:void 0,borderTop:e==="top"?`1px solid ${n.fn.themeColor("gray",2)}`:void 0}}));function Ue(n){let t;const e=n[13].default,s=G(e,n,n[15],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&32768)&&Y(s,e,l,l[15],t?y(e,l[15],f,null):q(l[15]),null)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Je(n){let t,e,s;const l=[{use:n[1]},{root:n[4]==="header"?"nav":"footer"},{class:n[7](n[2],n[6].root,n[5]({css:n[3]}))},n[8]];function f(i){n[14](i)}let r={$$slots:{default:[Ue]},$$scope:{ctx:n}};for(let i=0;i<l.length;i+=1)r=L(r,l[i]);return n[0]!==void 0&&(r.element=n[0]),t=new ue({props:r}),x.push(()=>w(t,"element",f)),{c(){T(t.$$.fragment)},l(i){R(t.$$.fragment,i)},m(i,o){M(t,i,o),s=!0},p(i,[o]){const u=o&510?ie(l,[o&2&&{use:i[1]},o&16&&{root:i[4]==="header"?"nav":"footer"},o&236&&{class:i[7](i[2],i[6].root,i[5]({css:i[3]}))},o&256&&oe(i[8])]):{};o&32768&&(u.$$scope={dirty:o,ctx:i}),!e&&o&1&&(e=!0,u.element=i[0],$(()=>e=!1)),t.$set(u)},i(i){s||(I(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){F(t,i)}}}function Ke(n,t,e){let s,l,f;const r=["use","element","class","override","height","fixed","position","zIndex","section"];let i=U(t,r),{$$slots:o={},$$scope:u}=t,{use:p=[],element:m=void 0,class:_="",override:v={},height:g=void 0,fixed:h=!1,position:c={},zIndex:d=100,section:a}=t;Ve({":root":{[`--svelteui-${a}-height`]:`${g}px`}})();function A(z){m=z,e(0,m)}return n.$$set=z=>{t=L(L({},t),fe(z)),e(8,i=U(t,r)),"use"in z&&e(1,p=z.use),"element"in z&&e(0,m=z.element),"class"in z&&e(2,_=z.class),"override"in z&&e(3,v=z.override),"height"in z&&e(9,g=z.height),"fixed"in z&&e(10,h=z.fixed),"position"in z&&e(11,c=z.position),"zIndex"in z&&e(12,d=z.zIndex),"section"in z&&e(4,a=z.section),"$$scope"in z&&e(15,u=z.$$scope)},n.$$.update=()=>{n.$$.dirty&7696&&e(7,{cx:s,classes:l,getStyles:f}=ye({borderPosition:a==="header"?"bottom":"top",fixed:h,height:g,position:c,zIndex:d},{name:"VerticalSection"}),s,(e(6,l),e(4,a),e(10,h),e(9,g),e(11,c),e(12,d)),(e(5,f),e(4,a),e(10,h),e(9,g),e(11,c),e(12,d)))},[m,p,_,v,a,f,l,s,i,g,h,c,d,o,A,u]}class We extends K{constructor(t){super(),W(this,t,Ke,Je,Q,{use:1,element:0,class:2,override:3,height:9,fixed:10,position:11,zIndex:12,section:4})}}const Qe=We;function Xe(n){let t;const e=n[9].default,s=G(e,n,n[11],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&2048)&&Y(s,e,l,l[11],t?y(e,l[11],f,null):q(l[11]),null)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Ze(n){let t,e,s;const l=[{section:"header"},{class:n[2]},{use:n[1]},{override:n[3]},{height:n[4]},{fixed:n[5]},{position:n[6]},{zIndex:n[7]},n[8]];function f(i){n[10](i)}let r={$$slots:{default:[Xe]},$$scope:{ctx:n}};for(let i=0;i<l.length;i+=1)r=L(r,l[i]);return n[0]!==void 0&&(r.element=n[0]),t=new Qe({props:r}),x.push(()=>w(t,"element",f)),{c(){T(t.$$.fragment)},l(i){R(t.$$.fragment,i)},m(i,o){M(t,i,o),s=!0},p(i,[o]){const u=o&510?ie(l,[l[0],o&4&&{class:i[2]},o&2&&{use:i[1]},o&8&&{override:i[3]},o&16&&{height:i[4]},o&32&&{fixed:i[5]},o&64&&{position:i[6]},o&128&&{zIndex:i[7]},o&256&&oe(i[8])]):{};o&2048&&(u.$$scope={dirty:o,ctx:i}),!e&&o&1&&(e=!0,u.element=i[0],$(()=>e=!1)),t.$set(u)},i(i){s||(I(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){F(t,i)}}}function xe(n,t,e){const s=["use","element","class","override","height","fixed","position","zIndex"];let l=U(t,s),{$$slots:f={},$$scope:r}=t,{use:i=[],element:o=void 0,class:u="",override:p={},height:m=void 0,fixed:_=!1,position:v={top:0,left:0,right:0},zIndex:g=100}=t;function h(c){o=c,e(0,o)}return n.$$set=c=>{t=L(L({},t),fe(c)),e(8,l=U(t,s)),"use"in c&&e(1,i=c.use),"element"in c&&e(0,o=c.element),"class"in c&&e(2,u=c.class),"override"in c&&e(3,p=c.override),"height"in c&&e(4,m=c.height),"fixed"in c&&e(5,_=c.fixed),"position"in c&&e(6,v=c.position),"zIndex"in c&&e(7,g=c.zIndex),"$$scope"in c&&e(11,r=c.$$scope)},[o,i,u,p,m,_,v,g,l,f,h,r]}class we extends K{constructor(t){super(),W(this,t,xe,Ze,Q,{use:1,element:0,class:2,override:3,height:4,fixed:5,position:6,zIndex:7})}}const $e=we;function et(n,t){const e=re.size({size:n.padding,sizes:t.spacing}),s=n.navbarOffsetBreakpoint?re.size({size:n.navbarOffsetBreakpoint,sizes:t.breakpoints}):null,l=n.asideOffsetBreakpoint?re.size({size:n.asideOffsetBreakpoint,sizes:t.breakpoints}):null;return n.fixed?{minHeight:"100vh",paddingTop:`calc(var(--svelteui-header-height, 0px) + ${e}px)`,paddingBottom:`calc(var(--svelteui-footer-height, 0px) + ${e}px)`,paddingLeft:`calc(var(--svelteui-navbar-width, 0px) + ${e}px)`,paddingRight:`calc(var(--svelteui-aside-width, 0px) + ${e}px)`,[`@media (max-width: ${s}px)`]:{paddingLeft:e},[`@media (max-width: ${l}px)`]:{paddingRight:e}}:{padding:e}}const tt=de((n,t)=>({root:{boxSizing:"border-box"},body:{display:"flex",boxSizing:"border-box"},main:{flex:1,width:"100vw",boxSizing:"border-box",...et(t,ae)}}));function st(n){let t;const e=n[6].default,s=G(e,n,n[8],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&256)&&Y(s,e,l,l[8],t?y(e,l[8],f,null):q(l[8]),null)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function lt(n){let t,e,s;const l=[{class:n[2]},{css:{...n[3]}},{use:n[1]},n[4]];function f(i){n[7](i)}let r={$$slots:{default:[st]},$$scope:{ctx:n}};for(let i=0;i<l.length;i+=1)r=L(r,l[i]);return n[0]!==void 0&&(r.element=n[0]),t=new ue({props:r}),x.push(()=>w(t,"element",f)),{c(){T(t.$$.fragment)},l(i){R(t.$$.fragment,i)},m(i,o){M(t,i,o),s=!0},p(i,[o]){const u=o&30?ie(l,[o&4&&{class:i[2]},o&8&&{css:{...i[3]}},o&2&&{use:i[1]},o&16&&oe(i[4])]):{};o&256&&(u.$$scope={dirty:o,ctx:i}),!e&&o&1&&(e=!0,u.element=i[0],$(()=>e=!1)),t.$set(u)},i(i){s||(I(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){F(t,i)}}}function nt(n,t,e){const s=["use","element","class","override","value"];let l=U(t,s),{$$slots:f={},$$scope:r}=t,{use:i=[],element:o=void 0,class:u="",override:p={},value:m}=t;function _(v){o=v,e(0,o)}return n.$$set=v=>{t=L(L({},t),fe(v)),e(4,l=U(t,s)),"use"in v&&e(1,i=v.use),"element"in v&&e(0,o=v.element),"class"in v&&e(2,u=v.class),"override"in v&&e(3,p=v.override),"value"in v&&e(5,m=v.value),"$$scope"in v&&e(8,r=v.$$scope)},[o,i,u,p,l,m,f,_,r]}class it extends K{constructor(t){super(),W(this,t,nt,lt,Q,{use:1,element:0,class:2,override:3,value:5})}}const ot=it,ft=n=>({}),be=n=>({}),rt=n=>({}),ve=n=>({}),at=n=>({}),ke=n=>({}),ut=n=>({}),pe=n=>({});function ze(n){let t;const e=n[12].header,s=G(e,n,n[14],pe);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&16384)&&Y(s,e,l,l[14],t?y(e,l[14],f,ut):q(l[14]),pe)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Ie(n){let t;const e=n[12].navbar,s=G(e,n,n[14],ke);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&16384)&&Y(s,e,l,l[14],t?y(e,l[14],f,at):q(l[14]),ke)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Be(n){let t;const e=n[12].aside,s=G(e,n,n[14],ve);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&16384)&&Y(s,e,l,l[14],t?y(e,l[14],f,rt):q(l[14]),ve)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function Se(n){let t;const e=n[12].footer,s=G(e,n,n[14],be);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,f){s&&s.m(l,f),t=!0},p(l,f){s&&s.p&&(!t||f&16384)&&Y(s,e,l,l[14],t?y(e,l[14],f,ft):q(l[14]),be)},i(l){t||(I(s,l),t=!0)},o(l){S(s,l),t=!1},d(l){s&&s.d(l)}}}function ct(n){let t,e,s,l,f,r,i,o,u,p,m=n[7].header&&ze(n),_=n[7].navbar&&Ie(n);const v=n[12].default,g=G(v,n,n[14],null);let h=n[7].aside&&Be(n),c=n[7].footer&&Se(n);return{c(){m&&m.c(),t=j(),e=V("div"),_&&_.c(),s=j(),l=V("main"),g&&g.c(),r=j(),h&&h.c(),o=j(),c&&c.c(),u=ge(),this.h()},l(d){m&&m.l(d),t=H(d),e=O(d,"DIV",{class:!0});var a=C(e);_&&_.l(a),s=H(a),l=O(a,"MAIN",{class:!0});var b=C(l);g&&g.l(b),b.forEach(B),r=H(a),h&&h.l(a),a.forEach(B),o=H(d),c&&c.l(d),u=ge(),this.h()},h(){D(l,"class",f=n[5].main),D(e,"class",i=n[5].body)},m(d,a){m&&m.m(d,a),P(d,t,a),P(d,e,a),_&&_.m(e,null),E(e,s),E(e,l),g&&g.m(l,null),E(e,r),h&&h.m(e,null),P(d,o,a),c&&c.m(d,a),P(d,u,a),p=!0},p(d,a){d[7].header?m?(m.p(d,a),a&128&&I(m,1)):(m=ze(d),m.c(),I(m,1),m.m(t.parentNode,t)):m&&(se(),S(m,1,1,()=>{m=null}),le()),d[7].navbar?_?(_.p(d,a),a&128&&I(_,1)):(_=Ie(d),_.c(),I(_,1),_.m(e,s)):_&&(se(),S(_,1,1,()=>{_=null}),le()),g&&g.p&&(!p||a&16384)&&Y(g,v,d,d[14],p?y(v,d[14],a,null):q(d[14]),null),(!p||a&32&&f!==(f=d[5].main))&&D(l,"class",f),d[7].aside?h?(h.p(d,a),a&128&&I(h,1)):(h=Be(d),h.c(),I(h,1),h.m(e,null)):h&&(se(),S(h,1,1,()=>{h=null}),le()),(!p||a&32&&i!==(i=d[5].body))&&D(e,"class",i),d[7].footer?c?(c.p(d,a),a&128&&I(c,1)):(c=Se(d),c.c(),I(c,1),c.m(u.parentNode,u)):c&&(se(),S(c,1,1,()=>{c=null}),le())},i(d){p||(I(m),I(_),I(g,d),I(h),I(c),p=!0)},o(d){S(m),S(_),S(g,d),S(h),S(c),p=!1},d(d){m&&m.d(d),d&&B(t),d&&B(e),_&&_.d(),g&&g.d(d),h&&h.d(),d&&B(o),c&&c.d(d),d&&B(u)}}}function dt(n){let t,e;return t=new ue({props:{$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){T(t.$$.fragment)},l(s){R(t.$$.fragment,s)},m(s,l){M(t,s,l),e=!0},p(s,l){const f={};l&16544&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){e||(I(t.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),e=!1},d(s){F(t,s)}}}function mt(n){let t,e,s;function l(r){n[13](r)}let f={use:n[1],value:{fixed:n[4],zIndex:n[3]},class:n[6](n[2],n[5].root),$$slots:{default:[dt]},$$scope:{ctx:n}};return n[0]!==void 0&&(f.element=n[0]),t=new ot({props:f}),x.push(()=>w(t,"element",l)),{c(){T(t.$$.fragment)},l(r){R(t.$$.fragment,r)},m(r,i){M(t,r,i),s=!0},p(r,[i]){const o={};i&2&&(o.use=r[1]),i&24&&(o.value={fixed:r[4],zIndex:r[3]}),i&100&&(o.class=r[6](r[2],r[5].root)),i&16544&&(o.$$scope={dirty:i,ctx:r}),!e&&i&1&&(e=!0,o.element=r[0],$(()=>e=!1)),t.$set(o)},i(r){s||(I(t.$$.fragment,r),s=!0)},o(r){S(t.$$.fragment,r),s=!1},d(r){F(t,r)}}}function ht(n,t,e){let s,l,{$$slots:f={},$$scope:r}=t;const i=Ce(f);let{use:o=[],element:u=void 0,class:p="",override:m={},zIndex:_=100,fixed:v=!1,padding:g="md",navbarOffsetBreakpoint:h=void 0,asideOffsetBreakpoint:c=void 0}=t;function d(a){u=a,e(0,u)}return n.$$set=a=>{"use"in a&&e(1,o=a.use),"element"in a&&e(0,u=a.element),"class"in a&&e(2,p=a.class),"override"in a&&e(8,m=a.override),"zIndex"in a&&e(3,_=a.zIndex),"fixed"in a&&e(4,v=a.fixed),"padding"in a&&e(9,g=a.padding),"navbarOffsetBreakpoint"in a&&e(10,h=a.navbarOffsetBreakpoint),"asideOffsetBreakpoint"in a&&e(11,c=a.asideOffsetBreakpoint),"$$scope"in a&&e(14,r=a.$$scope)},n.$$.update=()=>{n.$$.dirty&3856&&e(6,{cx:s,classes:l}=tt({padding:g,fixed:v,navbarOffsetBreakpoint:h,asideOffsetBreakpoint:c},{override:m,name:"AppShell"}),s,(e(5,l),e(9,g),e(4,v),e(10,h),e(11,c),e(8,m)))},[u,o,p,_,v,l,s,i,m,g,h,c,f,d,r]}class gt extends K{constructor(t){super(),W(this,t,ht,mt,Q,{use:1,element:0,class:2,override:8,zIndex:3,fixed:4,padding:9,navbarOffsetBreakpoint:10,asideOffsetBreakpoint:11})}}const _t=gt;function bt(n){let t,e,s,l,f,r,i,o,u,p,m,_,v,g,h,c,d,a,b,A,z,ee,Z,te,k;return{c(){t=V("body"),e=V("div"),s=V("h1"),l=Ee("loading your friend..."),f=j(),r=V("div"),i=V("div"),o=j(),u=V("div"),p=j(),m=V("div"),_=j(),v=V("div"),g=j(),h=V("div"),c=j(),d=V("div"),a=j(),b=V("div"),A=j(),z=V("div"),ee=j(),Z=V("div"),te=j(),k=V("div"),this.h()},l(X){t=O(X,"BODY",{class:!0});var J=C(t);e=O(J,"DIV",{class:!0});var me=C(e);s=O(me,"H1",{class:!0});var he=C(s);l=De(he,"loading your friend..."),he.forEach(B),me.forEach(B),f=H(J),r=O(J,"DIV",{class:!0});var N=C(r);i=O(N,"DIV",{class:!0}),C(i).forEach(B),o=H(N),u=O(N,"DIV",{class:!0}),C(u).forEach(B),p=H(N),m=O(N,"DIV",{class:!0}),C(m).forEach(B),_=H(N),v=O(N,"DIV",{class:!0}),C(v).forEach(B),g=H(N),h=O(N,"DIV",{class:!0}),C(h).forEach(B),c=H(N),d=O(N,"DIV",{class:!0}),C(d).forEach(B),a=H(N),b=O(N,"DIV",{class:!0}),C(b).forEach(B),A=H(N),z=O(N,"DIV",{class:!0}),C(z).forEach(B),ee=H(N),Z=O(N,"DIV",{class:!0}),C(Z).forEach(B),te=H(N),k=O(N,"DIV",{class:!0}),C(k).forEach(B),N.forEach(B),J.forEach(B),this.h()},h(){D(s,"class","svelte-1l7pb09"),D(e,"class","text svelte-1l7pb09"),D(i,"class","wave svelte-1l7pb09"),D(u,"class","wave svelte-1l7pb09"),D(m,"class","wave svelte-1l7pb09"),D(v,"class","wave svelte-1l7pb09"),D(h,"class","wave svelte-1l7pb09"),D(d,"class","wave svelte-1l7pb09"),D(b,"class","wave svelte-1l7pb09"),D(z,"class","wave svelte-1l7pb09"),D(Z,"class","wave svelte-1l7pb09"),D(k,"class","wave svelte-1l7pb09"),D(r,"class","center svelte-1l7pb09"),D(t,"class","svelte-1l7pb09")},m(X,J){P(X,t,J),E(t,e),E(e,s),E(s,l),E(t,f),E(t,r),E(r,i),E(r,o),E(r,u),E(r,p),E(r,m),E(r,_),E(r,v),E(r,g),E(r,h),E(r,c),E(r,d),E(r,a),E(r,b),E(r,A),E(r,z),E(r,ee),E(r,Z),E(r,te),E(r,k)},p:ne,i:ne,o:ne,d(X){X&&B(t)}}}class vt extends K{constructor(t){super(),W(this,t,null,bt,Q,{})}}async function kt(){let n={friendname:"",age:"",gender:"",picture:"",location:"",profession:"",key_skill:""},t="https://randomuser.me/api/";async function e(){return fetch(t,{method:"GET"}).then(f=>f.json()).then(f=>{n.friendname=`${f.results[0].name.first} ${f.results[0].name.last}`;let r=f.results[0].dob.age;n.age=r>60?r-40:r,n.gender=f.results[0].gender,n.picture=f.results[0].picture.large}).catch(f=>{console.error("fetchInfo1() failed: ",f)})}let s="https://random-data-api.com/api/v2/users?size=1&is_json=true";async function l(){return fetch(s,{method:"GET"}).then(f=>f.json()).then(f=>{n.location=f.address.city,n.profession=f.employment.title,n.key_skill=f.employment.key_skill}).catch(f=>{console.error("fetchInfo2() failed: ",f)})}return await e(),await l(),je.update(f=>n),ce.update(f=>!0),n}function pt(n){let t,e;return t=new _t({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){T(t.$$.fragment)},l(s){R(t.$$.fragment,s)},m(s,l){M(t,s,l),e=!0},p(s,l){const f={};l&8&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){e||(I(t.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),e=!1},d(s){F(t,s)}}}function zt(n){let t,e,s;return e=new vt({}),{c(){t=V("div"),T(e.$$.fragment),this.h()},l(l){t=O(l,"DIV",{class:!0});var f=C(t);R(e.$$.fragment,f),f.forEach(B),this.h()},h(){D(t,"class","loadscreen animate__animated animate__fadeOut svelte-15ygy08")},m(l,f){P(l,t,f),M(e,t,null),s=!0},p:ne,i(l){s||(I(e.$$.fragment,l),s=!0)},o(l){S(e.$$.fragment,l),s=!1},d(l){l&&B(t),F(e)}}}function It(n){let t,e,s,l,f;return{c(){t=V("div"),e=V("h1"),s=Ee("Temp友"),l=j(),f=V("div"),this.h()},l(r){t=O(r,"DIV",{class:!0});var i=C(t);e=O(i,"H1",{class:!0});var o=C(e);s=De(o,"Temp友"),o.forEach(B),l=H(i),f=O(i,"DIV",{class:!0}),C(f).forEach(B),i.forEach(B),this.h()},h(){D(e,"class","header__text svelte-15ygy08"),D(f,"class","header__underline svelte-15ygy08"),D(t,"class","header__text-box svelte-15ygy08")},m(r,i){P(r,t,i),E(t,e),E(e,s),E(t,l),E(t,f)},p:ne,d(r){r&&B(t)}}}function Bt(n){let t,e,s;return e=new $e({props:{height:"8vh",slot:"header",$$slots:{default:[It]},$$scope:{ctx:n}}}),{c(){t=V("div"),T(e.$$.fragment),this.h()},l(l){t=O(l,"DIV",{class:!0});var f=C(t);R(e.$$.fragment,f),f.forEach(B),this.h()},h(){D(t,"class","header svelte-15ygy08")},m(l,f){P(l,t,f),M(e,t,null),s=!0},p(l,f){const r={};f&8&&(r.$$scope={dirty:f,ctx:l}),e.$set(r)},i(l){s||(I(e.$$.fragment,l),s=!0)},o(l){S(e.$$.fragment,l),s=!1},d(l){l&&B(t),F(e)}}}function St(n){let t,e,s,l;t=new qe({props:{class:"navbar",$$slots:{default:[Bt]},$$scope:{ctx:n}}});const f=n[2].default,r=G(f,n,n[3],null);return{c(){T(t.$$.fragment),e=j(),s=V("div"),r&&r.c(),this.h()},l(i){R(t.$$.fragment,i),e=H(i),s=O(i,"DIV",{class:!0});var o=C(s);r&&r.l(o),o.forEach(B),this.h()},h(){D(s,"class","app svelte-15ygy08")},m(i,o){M(t,i,o),P(i,e,o),P(i,s,o),r&&r.m(s,null),l=!0},p(i,o){const u={};o&8&&(u.$$scope={dirty:o,ctx:i}),t.$set(u),r&&r.p&&(!l||o&8)&&Y(r,f,i,i[3],l?y(f,i[3],o,null):q(i[3]),null)},i(i){l||(I(t.$$.fragment,i),I(r,i),l=!0)},o(i){S(t.$$.fragment,i),S(r,i),l=!1},d(i){F(t,i),i&&B(e),i&&B(s),r&&r.d(i)}}}function Et(n){let t,e,s,l;const f=[zt,pt],r=[];function i(o,u){return!o[1]&&o[0]?0:1}return e=i(n),s=r[e]=f[e](n),{c(){t=V("body"),s.c(),this.h()},l(o){t=O(o,"BODY",{class:!0});var u=C(t);s.l(u),u.forEach(B),this.h()},h(){D(t,"class","svelte-15ygy08")},m(o,u){P(o,t,u),r[e].m(t,null),l=!0},p(o,[u]){let p=e;e=i(o),e===p?r[e].p(o,u):(se(),S(r[p],1,1,()=>{r[p]=null}),le(),s=r[e],s?s.p(o,u):(s=r[e]=f[e](o),s.c()),I(s,1),s.m(t,null))},i(o){l||(I(s),l=!0)},o(o){S(s),l=!1},d(o){o&&B(t),r[e].d()}}}function Dt(n,t,e){let{$$slots:s={},$$scope:l}=t,f=!1;ce.subscribe(o=>e(0,f=o)),_e.subscribe(o=>o?"":ce.update(u=>!0));async function r(){const o=await kt();_e.set(`
			Assume the role of [${o.friendname}], a ${o.age}-year-old ${o.profession} 
			from ${o.location}. You're friendly, flirty, but not overly talkative. Don't break character!
		`)}Ne(r);let i=!1;return setTimeout(function(){e(1,i=!0)},2e3),n.$$set=o=>{"$$scope"in o&&e(3,l=o.$$scope)},[f,i,s,l]}class Ct extends K{constructor(t){super(),W(this,t,Dt,Et,Q,{})}}export{Ct as component};
