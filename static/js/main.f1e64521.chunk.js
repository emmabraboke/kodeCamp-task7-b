(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,a,s){},41:function(e,a,s){"use strict";s.r(a);var c=s(1),t=s.n(c),n=s(21),l=s.n(n),i=(s(29),s(16)),r=s(2),d=s(3),j=(s(30),s(42)),o=s(43),b=s(44),m=s(45),h=s.p+"static/media/plusCircle.0e3e08a0.svg",p=s(5),x=s(4),O=s(0),u=function(){var e="/component/Space",a="/component/Allcharacter",s="/component/Planet",c=Object(x.f)().location.pathname;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(p.b,{to:"/component/Space",className:"text-decoration-none",children:Object(O.jsx)("h1",{className:"mb-2",style:{fontWeight:"900",fontSize:"48px"},children:"Spacious"})})," "]}),Object(O.jsx)("div",{className:"d-inline-block me-2 mb-1 p-2 ",children:Object(O.jsxs)(p.b,{to:"/component/Planet",className:"text-decoration-none fw-bold",children:[" ",Object(O.jsx)("p",{className:"d-inline p-2",style:{background:c==s||c==e?"rgba(18, 28, 51, 0.05)":null,opacity:c!=s&&c!=e?.6:null,borderRadius:"8px"},children:"PLANETS"})," "]})}),Object(O.jsx)("div",{className:"d-inline-block mb-1 p-2",children:Object(O.jsxs)(p.b,{to:"/component/Allcharacter",className:"text-decoration-none ",children:[" ",Object(O.jsx)("p",{className:"d-inline p-2 fw-bold",style:{background:c==a?"rgba(18, 28, 51, 0.05)":null,opacity:c!==a?.6:null,borderRadius:"8px"},children:"CHARACTER"})," "]})}),c==a?Object(O.jsx)("div",{className:"float-end d-inline-block mb-1",children:Object(O.jsx)("div",{className:"d-inline",children:Object(O.jsxs)("select",{className:"border-0 d-inline p-2 fw-bold mb-0",style:{outline:"none",borderRadius:"6px",color:"",backgroundColor:"#EAEAEB"},children:[Object(O.jsx)("option",{children:"All PLANETS"}),Object(O.jsx)("option",{value:"1",children:"One"}),Object(O.jsx)("option",{value:"2",children:"Two"}),Object(O.jsx)("option",{value:"3",children:"Three"})]})})}):null]})})},g=(s(40),s.p+"static/media/cancel.4f097d65.svg"),f=s.p+"static/media/plus.284ac3d6.svg",y=s.p+"static/media/character6.839b5ded.png",N=s.p+"static/media/character3.a7f4a59a.png",v=s.p+"static/media/character16.68426aac.png",C=s.p+"static/media/character5.2316ee86.png",w=s.p+"static/media/character13.323d7c56.png",A=s.p+"static/media/character11.436dd33b.png",F=function(e){var a=e.handleRemovePlanet,s=e.borders,t=Object(c.useState)([{name:"Darlene Roberson",friends:"23 friends",image:v,id:1},{name:"Kathryn Murphy",friends:"23 friends",image:w,id:2},{name:"Jenny Wilson",friends:"23 friends",image:N,id:3},{name:"Ariene McCoy",friends:"23 friends",image:C,id:5},{name:"Darrell Steward",friends:"23 friends",image:A,id:6},{name:"Bessie Cooper",friends:"23 friends",image:y,id:7}]),n=Object(d.a)(t,2),l=n[0];n[1];return Object(O.jsx)("div",{className:"sidebar h-100",children:Object(O.jsx)("div",{className:" h-100 ",style:{borderRadius:"30px",overflow:"hidden"},children:Object(O.jsx)(m.a,{className:"h-100 pt-2",style:{border:"none"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(m.a.Img,{className:"",variant:"",src:""}),Object(O.jsx)("div",{className:"d-flex justify-content-end",children:Object(O.jsx)("img",{src:g,onClick:function(){return a(!1)},style:{width:"32px",height:"32px",backgroundColor:"#F2F2F2",borderRadius:"8px",padding:"5px"}})}),Object(O.jsx)(m.a.Title,{}),Object(O.jsx)(m.a.Body,{children:Object(O.jsxs)(m.a.Text,{children:[Object(O.jsx)("h3",{className:"mb-2 mt-3",style:{fontWeight:"800"},children:s.locations}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("small",{children:"Planet Alpha is a place to be if you like everything related to planets. I know it's a bit meta but come and see by your self "})]})}),Object(O.jsxs)("div",{className:"my-3",children:[Object(O.jsx)("h6",{children:Object(O.jsx)("small",{children:"Population"})}),Object(O.jsx)("p",{className:"fw-bold",children:Object(O.jsx)("small",{children:"256"})})]}),Object(O.jsx)("div",{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("h5",{style:{opacity:"0.6",fontWeight:"600"},children:Object(O.jsx)("small",{children:"CHARACTER"})})}),Object(O.jsx)(b.a,{className:"d-flex justify-content-end",children:Object(O.jsxs)(p.b,{to:"/component/CharacterForm",children:["  ",Object(O.jsx)("img",{src:f,style:{width:"32px",height:"32px",backgroundColor:"#F2F2F2",borderRadius:"8px",padding:"5px"}})," "]})})]})}),Object(O.jsx)("div",{className:"pt-4",children:Object(O.jsx)(o.a,{children:l.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{md:3,className:"mb-2",children:Object(O.jsx)("div",{className:"h-100 mb-3",children:Object(O.jsx)("img",{src:e.image,className:"img-fluid h-100",style:{borderRadius:"8px"}})})}),Object(O.jsx)(b.a,{col:!0,md:9,className:"mb-2",children:Object(O.jsxs)("div",{className:"my-auto",children:[Object(O.jsx)("h6",{className:"fw-bold",children:Object(O.jsx)("small",{children:e.name})}),Object(O.jsx)("p",{style:{opacity:.6},children:Object(O.jsxs)("small",{children:[e.friends," "]})})]})})]})}))})})]})})]})})})})},R=function(e){var a=e.planets,s=e.handleRemovePlanet,c=e.removePlanet,t=e.borders;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(b.a,{className:"",md:c?6:12,lg:c?8:12,children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(u,{}),c?Object(O.jsxs)(O.Fragment,{children:[" ",a.map((function(e){return Object(O.jsx)(b.a,{className:"mb-4 d-none d-md-block",md:6,lg:c?4:3,children:Object(O.jsx)("div",{className:"sidebar h-100",onClick:function(a){return s(!0,e.id,e.name)},style:{borderRadius:"30px",overflow:"hidden",border:e.id===t.id?" 2px solid #121C33":null},children:Object(O.jsxs)(m.a,{className:"fluid mr-0 pr-0 h-100",style:{border:"none"},children:[Object(O.jsx)(m.a.Img,{className:"planet w-100",variant:"",src:e.image,alt:"no image",style:{border:"none"}}),Object(O.jsx)(m.a.Body,{className:"card-body",children:Object(O.jsx)(m.a.Text,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)("p",{className:"fw-bold",children:e.name}),Object(O.jsx)("p",{className:"",style:{opacity:"0.6"},children:Object(O.jsx)("small",{children:e.pop})})]}),e.id==a.length?Object(O.jsx)(b.a,{className:"d-flex justify-content-end",children:Object(O.jsxs)(p.b,{to:"/component/PlanetForm",children:[" ",Object(O.jsx)("img",{src:h,style:{width:"56px",height:"56px",size:"32px"}})," "]})}):""]})})})]})},e.id)})}))]}):Object(O.jsxs)(O.Fragment,{children:[" ",a.map((function(e){return Object(O.jsx)(b.a,{className:"mb-4 ",md:6,lg:c?4:3,children:Object(O.jsx)("div",{className:"sidebar h-100",onClick:function(a){return s(!0,e.id,e.name)},style:{borderRadius:"30px",overflow:"hidden",border:e.id===t.id?" 2px solid #121C33":null},children:Object(O.jsxs)(m.a,{className:"fluid mr-0 pr-0 h-100",style:{border:"none"},children:[Object(O.jsx)(m.a.Img,{className:"planet w-100",variant:"",src:e.image,alt:"no image",style:{border:"none"}}),Object(O.jsx)(m.a.Body,{className:"card-body",children:Object(O.jsx)(m.a.Text,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)("p",{className:"fw-bold",children:e.name}),Object(O.jsx)("p",{className:"",style:{opacity:"0.6"},children:Object(O.jsx)("small",{children:e.pop})})]}),e.id==a.length?Object(O.jsx)(b.a,{className:"d-flex justify-content-end",children:Object(O.jsxs)(p.b,{to:"/component/PlanetForm",children:[" ",Object(O.jsx)("img",{src:h,style:{width:"56px",height:"56px",size:"32px"}})," "]})}):""]})})})]})},e.id)})}))]})]})}),Object(O.jsx)(b.a,{md:6,sm:12,lg:4,children:c?Object(O.jsx)(F,{borders:t,handleRemovePlanet:s}):null})]})})},P=s.p+"static/media/planetLoader.7e184522.svg",k=s(46),S=function(e){e.change,e.handleChange;return Object(O.jsx)(j.a,{className:"",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(u,{}),Object(O.jsxs)("div",{className:"text-center pt-5",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:P,alt:"Space Image"})}),Object(O.jsx)("div",{children:Object(O.jsx)("h5",{className:"my-4 fw-bold",children:"Space doesn't have to be empty"})}),Object(O.jsx)(p.b,{to:"/component/PlanetForm",children:Object(O.jsxs)(k.a,{className:"border-0 fw-bold ",style:{backgroundColor:"#121C33"},children:[" ",Object(O.jsx)("small",{children:"CREATE PLANET"})]})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(j.a,{className:!0,children:Object(O.jsx)("div",{className:"d-flex justify-content-end align-content-end",children:Object(O.jsx)(p.b,{to:"/component/PlanetForm",children:Object(O.jsx)("img",{src:h,style:{width:"56px",height:"56px",size:"32px",position:"absolute",top:"80%",left:"80%"}})})})})})]})})},T=function(e){var a=e.friends,s=e.handleRemoveCharacter,c=e.cborders;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"h-100  sidebar",style:{borderRadius:"30px",overflow:"hidden"},children:Object(O.jsx)(m.a,{className:"h-100 pt-2",style:{border:"none"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(m.a.Img,{className:"",variant:"",src:""}),Object(O.jsx)("div",{className:"d-flex justify-content-end",children:Object(O.jsx)("img",{src:g,onClick:function(){return s(!1)},style:{width:"32px",height:"32px",backgroundColor:"#F2F2F2",borderRadius:"8px",padding:"5px"}})}),Object(O.jsx)(m.a.Title,{}),Object(O.jsx)(m.a.Body,{children:Object(O.jsxs)(m.a.Text,{children:[Object(O.jsx)("h3",{className:"mt-3 mb-2 fw-bold",style:{fontWeight:800},children:c.person}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:Object(O.jsx)("small",{children:c.description})})}),Object(O.jsx)("div",{className:"mt-3",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("small",{children:[Object(O.jsx)("p",{children:"Planet"}),Object(O.jsx)("p",{className:"fw-bold",children:"Alpha"})]})})}),Object(O.jsx)(b.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("small",{children:[Object(O.jsx)("p",{children:"Friends"}),Object(O.jsx)("p",{className:"fw-bold",children:"23"})]})})})]})}),Object(O.jsxs)("div",{className:"py-3",children:[Object(O.jsx)("div",{className:"py-2",children:Object(O.jsx)(o.a,{children:Object(O.jsx)(b.a,{md:12,children:Object(O.jsx)("h6",{className:"fw-bold mb-3",style:{opacity:.6},children:"FRIENDS"})})})}),Object(O.jsx)(o.a,{children:a.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{md:3,className:"mb-2",children:Object(O.jsx)("div",{className:"h-100 mb-3",children:Object(O.jsx)("img",{src:e.image,className:"img-fluid h-100",style:{borderRadius:"8px"}})})}),Object(O.jsx)(b.a,{col:!0,md:9,className:"my-auto",children:Object(O.jsxs)("div",{className:"my-auto",children:[Object(O.jsx)("h6",{className:"fw-bold",children:Object(O.jsx)("small",{children:e.name})}),Object(O.jsx)("p",{style:{opacity:.6},children:Object(O.jsx)("small",{children:e.body})})]})})]})}))})]})]})})]})})})})},E=function(e){var a=e.characters,s=e.friends,c=e.handleRemoveCharacter,t=e.removecharacter,n=e.cborders;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(b.a,{md:t?7:12,lg:t?8:12,children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(u,{}),t?Object(O.jsx)(O.Fragment,{children:a.map((function(e){return Object(O.jsx)(b.a,{className:"mb-4 d-none d-md-block ",md:6,lg:t?4:3,children:Object(O.jsx)("div",{className:"h-100 sidebar",style:{borderRadius:"30px",overflow:"hidden",border:e.id===n.id?"2px solid #121C33":"none"},children:Object(O.jsxs)(m.a,{onClick:function(){return c(!0,e.id,e.description,e.name)},className:"fluid mr-0 pr-0 h-100",children:[Object(O.jsx)(m.a.Img,{className:"planet border-0 w-100",alt:"no image",variant:"",src:e.image}),Object(O.jsx)(m.a.Body,{className:"card-body",children:Object(O.jsx)(m.a.Text,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(b.a,{className:"mt-1",children:[Object(O.jsx)("p",{className:"fw-bold",children:Object(O.jsx)("small",{children:e.name})}),Object(O.jsx)("p",{style:{opacity:"0.6"},children:Object(O.jsx)("small",{children:e.friends})})]}),e.id==a.length?Object(O.jsx)(b.a,{className:"d-flex justify-content-end align-content-start",children:Object(O.jsxs)(p.b,{to:"/component/CharacterForm",children:[" ",Object(O.jsx)("img",{src:h,style:{width:"56px",height:"56px",size:"32px"}})]})}):""]})})})]})})})}))}):Object(O.jsx)(O.Fragment,{children:a.map((function(e){return Object(O.jsx)(b.a,{className:"mb-4",md:6,lg:4,children:Object(O.jsx)("div",{className:"sidebar h-100",style:{borderRadius:"30px",overflow:"hidden",border:e.id===n.id?"2px solid #121C33":"none"},children:Object(O.jsxs)(m.a,{onClick:function(){return c(!0,e.id,e.description,e.name)},className:"fluid mr-0  pr-0 h-100",children:[Object(O.jsx)(m.a.Img,{className:"planet border-0 w-100",alt:"no image",variant:"",src:e.image}),Object(O.jsx)(m.a.Body,{className:"card-body",children:Object(O.jsx)(m.a.Text,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(b.a,{className:"mt-1",children:[Object(O.jsx)("p",{className:"fw-bold",children:Object(O.jsx)("small",{children:e.name})}),Object(O.jsx)("p",{style:{opacity:"0.6"},children:Object(O.jsx)("small",{children:e.friends})})]}),e.id==a.length?Object(O.jsx)(b.a,{className:"d-flex justify-content-end align-content-start",children:Object(O.jsxs)(p.b,{to:"/component/CharacterForm",children:[" ",Object(O.jsx)("img",{src:h,style:{width:"56px",height:"56px",size:"32px"}})]})}):""]})})})]})})})}))})]})}),Object(O.jsx)(b.a,{md:5,sm:12,lg:4,children:t?Object(O.jsx)(T,{friends:s,cborders:n,handleRemoveCharacter:c}):null})]})})},B=function(e){var a=e.newPlanet,s=e.submit,t=Object(c.useState)(""),n=Object(d.a)(t,2),l=n[0],i=n[1],r=Object(c.useState)(""),h=Object(d.a)(r,2),x=h[0],u=h[1],f=Object(c.useState)(""),y=Object(d.a)(f,2),N=y[0],v=y[1];return Object(O.jsx)(o.a,{className:"d-flex justify-content-center",children:Object(O.jsx)(b.a,{md:8,lg:6,sm:12,children:Object(O.jsx)("div",{className:"my-4 ",style:{borderRadius:"35px",overflow:"hidden"},children:Object(O.jsx)(m.a,{className:"py-4 px-3 border-0",children:Object(O.jsx)(j.a,{children:Object(O.jsxs)("form",{onReset:function(){i(""),u(""),v("")},onSubmit:function(e){return a({image:l,name:x,pop:N},e)},children:[Object(O.jsx)("div",{className:"d-flex justify-content-end",children:Object(O.jsxs)(p.b,{to:"/component/Planet",children:[" ",Object(O.jsx)("img",{src:g,style:{width:"32px",height:"32px",backgroundColor:"#F2F2F2",borderRadius:"8px",padding:"5px"}})," "]})}),Object(O.jsx)("h3",{style:{fontWeight:900},children:"Planet"}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("label",{className:"w-100",children:[Object(O.jsx)("p",{className:"fw-bold p-2",children:Object(O.jsx)("small",{children:"Image"})}),Object(O.jsx)("input",{type:"text",value:l,onChange:function(e){return i(e.target.value)},className:"w-100 border-0 p-2",style:{backgroundColor:"#F5F5F5",borderRadius:"8px",outline:"none"}}),Object(O.jsx)("p",{className:"fw-bold",style:{opacity:.6},children:Object(O.jsx)("small",{children:"Paste the URL of JPG or PNG of max 20kb"})})]})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("label",{className:"w-100",children:[Object(O.jsx)("p",{className:"fw-bold ",children:Object(O.jsx)("small",{children:"Name"})}),Object(O.jsx)("input",{type:"text",value:x,onChange:function(e){return u(e.target.value)},className:"w-100 border-0 p-2",style:{backgroundColor:"#F5F5F5",borderRadius:"8px",outline:"none"}})]})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("label",{className:"w-100",children:[Object(O.jsx)("p",{className:"fw-bold ",children:Object(O.jsx)("small",{children:"Description"})}),Object(O.jsx)("textarea",{name:"",id:"",rows:"4",value:N,onChange:function(e){return v(e.target.value)},className:"w-100 border-0 p-2",style:{backgroundColor:"#F5F5F5",borderRadius:"8px",outline:"none",resize:"none"}})]})}),Object(O.jsx)("div",{className:"mb-3 fw-bold",children:s?Object(O.jsx)("p",{className:"text-danger",style:{opacity:.6},children:Object(O.jsx)("small",{children:"Bummer! we can't create this planet right now. Probably a black hie. Try again later please"})}):""}),Object(O.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(O.jsx)(k.a,{className:"border-0 me-2",type:"reset",style:{backgroundColor:"#121C330D",color:"#121C33",borderRadius:"8px"},children:" CANCEL"}),Object(O.jsx)(k.a,{className:"border-0 ",type:"submit",style:{backgroundColor:"#121C33",borderRadius:"8px"},children:" CREATE PLANET"})]})]})})})})})})},I=s.p+"static/media/character1.b8cf9c50.png",L=s.p+"static/media/character2.6859fefd.png",J=s.p+"static/media/character4.1fd020f5.png",W=s.p+"static/media/character7.fadfa678.png",H=s.p+"static/media/character8.341f1453.png",z=s.p+"static/media/character10.f6fdbe59.png",D=s.p+"static/media/character14.e769e338.png",G=s.p+"static/media/character9.d1414f7c.png",M=function(e){var a=e.handleNewCharacter,s=Object(c.useState)(""),t=Object(d.a)(s,2),n=t[0],l=t[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),h=r[0],x=r[1],u=Object(c.useState)(""),f=Object(d.a)(u,2),y=f[0],N=f[1],v=function(){l(""),x(""),N("")};return Object(O.jsx)(o.a,{className:"d-flex justify-content-center",children:Object(O.jsx)(b.a,{md:8,lg:6,sm:12,children:Object(O.jsx)("div",{className:"my-4 ",style:{borderRadius:"35px",overflow:"hidden"},children:Object(O.jsx)(m.a,{className:"py-4 px-3 border-0",children:Object(O.jsx)(j.a,{children:Object(O.jsxs)("form",{onSubmit:function(e){return a({image:n,name:h,friends:y},e)},children:[Object(O.jsx)("div",{className:"d-flex justify-content-end",children:Object(O.jsxs)(p.b,{to:"/component/Allcharacter",children:[" ",Object(O.jsx)("img",{src:g,style:{width:"32px",height:"32px",backgroundColor:"#F2F2F2",borderRadius:"8px",padding:"5px"}})," "]})}),Object(O.jsx)("h3",{className:"mb-3",style:{fontWeight:800},children:"CHARACTER"}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("label",{className:"w-100",children:[Object(O.jsx)("p",{className:"fw-bold mb-1",children:Object(O.jsx)("small",{children:"Image"})}),Object(O.jsx)("input",{type:"text",value:n,onChange:function(e){return l(e.target.value)},className:"w-100 border-0 p-2",style:{backgroundColor:"#F5F5F5",borderRadius:"10px",outline:"none"}}),Object(O.jsxs)("p",{style:{opacity:.6},children:[" ",Object(O.jsx)("small",{children:"Paste the URL of JPG or PNG of max 20kb "})]})]})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("label",{className:"w-100",children:[Object(O.jsxs)("p",{className:"fw-bold mb-1",children:[" ",Object(O.jsx)("small",{children:"Name "})]}),Object(O.jsx)("input",{type:"text",value:h,onChange:function(e){return x(e.target.value)},className:"w-100 border-0 p-2",style:{backgroundColor:"#F5F5F5",borderRadius:"10px",outline:"none"}})]})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("label",{className:"w-100",children:[Object(O.jsxs)("p",{className:"fw-bold mb-1",children:[" ",Object(O.jsx)("small",{children:"Description"})]}),Object(O.jsx)("textarea",{value:y,onChange:function(e){return N(e.target.value)},rows:"4",className:"w-100 border-0 p-2",style:{backgroundColor:"#F5F5F5",borderRadius:"10px",outline:"none",resize:"none"}})]})}),Object(O.jsxs)("label",{className:"w-100 mb-3",children:[Object(O.jsxs)("p",{className:"fw-bold mb-1",children:[" ",Object(O.jsx)("small",{children:"Friends"})]}),Object(O.jsxs)("div",{className:"mb-2 py-1",style:{backgroundColor:"#F5F5F5",borderRadius:"8px"},children:[Object(O.jsxs)("div",{className:"d-inline py-2 ps-2",children:[Object(O.jsx)("img",{src:L,style:{height:"30px",width:"30px",borderRadius:"5px"},className:"img-fluid d-inline"}),Object(O.jsx)("small",{className:"d-inline ms-2",children:"James Cooper"}),Object(O.jsx)("img",{src:g,className:"d-inline",style:{width:"24px",height:"24px",padding:"5px"}})]}),Object(O.jsx)("div",{className:"d-inline-block float-end",children:Object(O.jsxs)("select",{className:" border-0 w-100 d-inline-block",style:{backgroundColor:"#F5F5F5",borderRadius:"8px",outline:"none"},children:[Object(O.jsx)("option",{}),Object(O.jsx)("option",{})]})})]})]}),Object(O.jsxs)("div",{className:"d-flex justify-content-end mb-3",children:[Object(O.jsx)(k.a,{onClick:function(e){return v},className:"border-0 me-2",type:"submit",style:{backgroundColor:"#121C330D",color:"#121C33",borderRadius:"8px",outline:"none"},children:" CANCEL"}),Object(O.jsx)(k.a,{onClick:v,className:"border-0",type:"submit",style:{backgroundColor:"#121C33",borderRadius:"8px",outline:"none"},children:" CREATE CHARACTER"})]})]})})})})})})},K=function(){return Object(O.jsx)(j.a,{className:"h-100",children:Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h1",{style:{fontWeight:900,fontSize:"48px"},children:"Spacious"}),Object(O.jsx)("div",{className:" d-flex justify-content-center align-content-lg-end ",children:Object(O.jsx)("div",{className:"border-0 border-white",style:{borderRadius:"39px",overflow:"hidden",position:"absolute",top:"35%"},children:Object(O.jsx)(m.a,{className:"border-0 py-5",children:Object(O.jsx)(m.a.Img,{src:P,alt:"Space Image"})})})})]})})},U=s.p+"static/media/planet1.384a5457.svg",q=s.p+"static/media/planet2.83ed008c.svg",Q=(s.p,s.p+"static/media/planet4.dcf17b9a.svg"),V=s.p+"static/media/planet5.92952d74.svg",X=s.p+"static/media/planet6.66e9910c.svg",Y=s.p+"static/media/planet7.2f74e7f8.svg",Z=s.p+"static/media/planet8.48c0a610.svg",$=s.p+"static/media/planet9.c5b1f749.svg",_=s.p+"static/media/character12.93868536.png",ee=s.p+"static/media/character15.6290ce78.png";var ae=function(){var e=[{name:"Planet Alpha",pop:"pop: 256",id:1,image:$},{name:"Planet Alpha",pop:"pop: 256",id:2,image:Z},{name:"Planet Alpha",pop:"pop: 256",id:3,image:Y},{name:"Planet Alpha",pop:"pop: 256",id:4,image:X},{name:"Planet Alpha",pop:"pop: 256",id:5,image:V},{name:"Planet Alpha",pop:"pop: 256",id:6,image:U},{name:"Planet Alpha",pop:"pop: 256",id:7,image:q},{name:"Planet Alpha",pop:"pop: 256",id:8,image:q},{name:"Planet Alpha",pop:"pop: 256",id:9,image:q},{name:"Planet Alpha",pop:"256",id:10,image:Q},{name:"Planet Alpha",pop:"256",id:11,image:Y},{name:"Planet Alpha",pop:"256",id:12,image:V}],a=[{name:"Planet Alpha",pop:"pop: 256",id:1,image:$},{name:"Planet Alpha",pop:"pop: 256",id:2,image:Z},{name:"Planet Alpha",pop:"pop: 256",id:3,image:Y},{name:"Planet Alpha",pop:"pop: 256",id:4,image:X},{name:"Planet Alpha",pop:"pop: 256",id:5,image:V},{name:"Planet Alpha",pop:"pop: 256",id:6,image:U},{name:"Planet Alpha",pop:"pop: 256",id:7,image:q},{name:"Planet Alpha",pop:"pop: 256",id:8,image:Q},{name:"Planet Alpha",pop:"pop: 256",id:9,image:$}],s=Object(c.useState)(e),t=Object(d.a)(s,2),n=t[0],l=t[1],o=Object(c.useState)(!1),b=Object(d.a)(o,2),m=b[0],h=b[1],u=Object(c.useState)({id:"4",location:"Alpha"}),g=Object(d.a)(u,2),f=g[0],N=g[1],w=Object(c.useState)({id:"3",person:"Jane Cooper",description:"Jane is really nice person. She's been living on planet Alpha for the last 10 years."}),A=Object(d.a)(w,2),F=A[0],P=A[1],k=Object(c.useState)(!1),T=Object(d.a)(k,2),ae=T[0],se=T[1],ce=function(s){s?s&&l(a):l(e)},te=Object(c.useState)(!1),ne=Object(d.a)(te,2),le=ne[0],ie=ne[1],re=Object(c.useState)([{name:"Brookyln Simmons",id:1,image:W,friends:"23 friends",description:"Brooklyn is really nice person. She's been living on planet Alpha for the last 10 years."},{name:"Camero Williamson",id:2,image:ee,friends:"23 friends",description:"Camero is really nice person. He's been living on planet Alpha for the last 10 years."},{name:"Leslie Alexander",id:3,image:L,friends:"23 friends",description:"Leslie is really nice person. She's been living on planet Alpha for the last 5 years."},{name:"Kristin Waston",id:4,image:H,friends:"23 friends",description:"Kristin is really nice person. She's been living on planet Alpha for the last 10 years."},{name:"Jenny Wilson",id:5,image:C,friends:"23 friends",description:"Jenny is really nice person. She's been living on planet Alpha for the last 5 years."},{name:"Marvin Mckinney",id:6,image:_,friends:"23 friends",description:"Marvin is really nice person. He's been living on planet Alpha for the last 30 years."},{name:"Jerome Bell",id:7,image:y,friends:"23 friends",description:"Jerome is really nice person. He's been living on planet Alpha for the last 15 years."},{name:"Guy Hawkins",id:8,image:J,friends:"23 friends",description:"Guy is really nice person. He's been living on planet Alpha for the last 20 years."},{name:"Robert Fox",id:9,image:z,friends:"23 friends",description:"Robert is really nice person. She's been living on planet Alpha for the last 10 years."}]),de=Object(d.a)(re,2),je=de[0],oe=de[1],be=Object(c.useState)([{name:"Elene Pena",body:"Amer minim non deserunt ullmco e",image:G,id:1},{name:"Brookly Simmons",body:"Amer minim non deserunt ullmco e",image:v,id:2},{name:"Kriston Waston",body:"Amer minim non deserunt ullmco e",image:J,id:3},{name:"Cody Fisher",body:"Amer minim non deserunt ullmco e",image:I,id:4},{name:"courtney Henry",body:"Amer minim non deserunt ullmco e",image:D,id:5},{name:"Annette Black",body:"Amer minim non deserunt ullmco e",image:C,id:6}]),me=Object(d.a)(be,2),he=me[0],pe=(me[1],Object(c.useState)(!1)),xe=Object(d.a)(pe,2),Oe=xe[0],ue=xe[1];Object(c.useEffect)((function(){ue(!1),setTimeout((function(){return ue(!0)}),900)}),[]);var ge=Object(c.useState)(!1),fe=Object(d.a)(ge,2);return fe[0],fe[1],Object(O.jsx)(j.a,{className:"my-5",children:Oe?Object(O.jsx)(p.a,{children:Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.a,{exact:!0,path:"/component/Planet",children:Object(O.jsx)(R,{borders:f,planets:n,handleRemovePlanet:function(e,a,s){h(e),N({id:a,locations:s}),ce(e)},removePlanet:m})}),Object(O.jsx)(x.a,{exact:!0,path:"/component/Allcharacter",children:Object(O.jsx)(E,{cborders:F,characters:je,handleRemoveCharacter:function(e,a,s,c){se(e),P({id:a,description:s,person:c})},removecharacter:ae,friends:he})}),Object(O.jsx)(x.a,{exact:!0,path:"/component/PlanetForm",children:Object(O.jsx)(B,{submit:le,newPlanet:function(e,a){if(a.preventDefault(),""===e.image&&""===e.name&&""===e.pop?ie(!0):ie(!1),""!==e.image||""!==e.name||""!==e.pop){var s=n.length+1,c=Object(r.a)(Object(r.a)({},e),{},{id:s});l([].concat(Object(i.a)(n),[c]))}else l(Object(i.a)(n))}})}),Object(O.jsx)(x.a,{exact:!0,path:"/component/CharacterForm",children:Object(O.jsx)(M,{handleNewCharacter:function(e,a){var s=je.length+1,c=Object(r.a)(Object(r.a)({},e),{},{id:s});oe([].concat(Object(i.a)(je),[c]))}})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(S,{})})]})}):Object(O.jsx)(K,{})})},se=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(a){var s=a.getCLS,c=a.getFID,t=a.getFCP,n=a.getLCP,l=a.getTTFB;s(e),c(e),t(e),n(e),l(e)}))};l.a.render(Object(O.jsx)(t.a.StrictMode,{children:Object(O.jsx)(ae,{})}),document.getElementById("root")),se()}},[[41,1,2]]]);
//# sourceMappingURL=main.f1e64521.chunk.js.map