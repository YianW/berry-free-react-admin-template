"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[62],{7062:function(e,n,i){i.r(n),i.d(n,{default:function(){return f}});var t=i(7621),a=i(1889),r=i(890),s=i(3735),l=i(6827),d=i(2791),o=i(7482),c=i(4554),h=i(184);function x(e){return(0,h.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,h.jsx)(c.Z,{sx:{width:"100%",mr:1},children:(0,h.jsx)(o.Z,{variant:"determinate",...e})}),(0,h.jsx)(c.Z,{sx:{minWidth:35},children:(0,h.jsx)(r.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function m(){const[e,n]=d.useState(10);return d.useEffect((()=>{const e=setInterval((()=>{n((e=>e>=100?10:e+10))}),800);return()=>{clearInterval(e)}}),[]),(0,h.jsx)(c.Z,{sx:{width:"100%"},children:(0,h.jsx)(x,{value:e})})}var u=i(928);var f=()=>(0,h.jsx)(s.Z,{title:"Project Details",children:(0,h.jsxs)(t.Z,{sx:{overflow:"hidden"},children:[(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left"},children:(0,h.jsx)(r.Z,{variant:"h3",sx:{mb:3},children:"Minting Progess"})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left",marginBottom:5},children:(0,h.jsx)(m,{})}),(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(r.Z,{variant:"h3",children:"Mint Queue"}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left"},children:(0,h.jsx)(l.Z,{})}),(0,h.jsx)(r.Z,{variant:"h3",children:"NFT minted"}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left"},children:(0,h.jsx)(l.Z,{})})]})]})})},6827:function(e,n,i){i.d(n,{Z:function(){return j}});var t=i(2791),a=i(703),r=i(9836),s=i(3382),l=i(3994),d=i(9281),o=i(6890),c=i(3033),h=i(5855),x=i(184);const m=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:e=>e.toFixed(2)}];function u(e,n,i,t){return{name:e,code:n,population:i,size:t,density:i/t}}const f=[u("India","IN",1324171354,3287263),u("China","CN",1403500365,9596961),u("Italy","IT",60483973,301340),u("United States","US",327167434,9833520),u("Canada","CA",37602103,9984670),u("Australia","AU",25475400,7692024),u("Germany","DE",83019200,357578),u("Ireland","IE",4857e3,70273),u("Mexico","MX",126577691,1972550),u("Japan","JP",126317e3,377973),u("France","FR",67022e3,640679),u("United Kingdom","GB",67545757,242495),u("Russia","RU",146793744,17098246),u("Nigeria","NG",200962417,923768),u("Brazil","BR",210147125,8515767)];function j(){const[e,n]=t.useState(0),[i,u]=t.useState(10);return(0,x.jsxs)(a.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,x.jsx)(d.Z,{sx:{maxHeight:440},children:(0,x.jsxs)(r.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,x.jsx)(o.Z,{children:(0,x.jsx)(h.Z,{children:m.map((e=>(0,x.jsx)(l.Z,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)))})}),(0,x.jsx)(s.Z,{children:f.slice(e*i,e*i+i).map((e=>(0,x.jsx)(h.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:m.map((n=>{const i=e[n.id];return(0,x.jsx)(l.Z,{align:n.align,children:n.format&&"number"===typeof i?n.format(i):i},n.id)}))},e.code)))})]})}),(0,x.jsx)(c.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:f.length,rowsPerPage:i,page:e,onPageChange:(e,i)=>{n(i)},onRowsPerPageChange:e=>{u(+e.target.value),n(0)}})]})}}}]);
//# sourceMappingURL=62.c8ad1eb5.chunk.js.map