(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,n,t){e.exports={section:"home_section__3F7bc",menu:"home_menu__2WBNR",searchInput:"home_searchInput__25zy3",searchButton:"home_searchButton__17vn2",filters:"home_filters__3YVId",select:"home_select__1PqDp",label:"home_label__1jNaC",loader:"home_loader__3tGGZ"}},17:function(e,n,t){e.exports={pagination:"pagination_pagination__3rxv3",nav:"pagination_nav__uRcfo",pageItem:"pagination_pageItem__1WBHX",active:"pagination_active__3sC6L",cards:"pagination_cards__2wFUk"}},18:function(e,n,t){e.exports={section:"detail_section__2q2xv",data:"detail_data__13fw_",title:"detail_title__2q6_Q",detail:"detail_detail__1CzQ9",img:"detail_img__3lxmP",loader:"detail_loader__38VQk"}},19:function(e,n,t){e.exports={header:"nav_header__2t3lK",logo:"nav_logo__n9V_n",img:"nav_img__xr1H2",title:"nav_title__25auu"}},20:function(e,n,t){e.exports={footer:"footer_footer__f648g",imgContainer:"footer_imgContainer__tYS23",img:"footer_img__1uRU9"}},25:function(e,n,t){e.exports={container:"dog_container__1hamv",img:"dog_img__1XM2T",information:"dog_information__2_svo"}},28:function(e,n,t){e.exports={container:"landingPage_container__NvUX2",button:"landingPage_button__1pSMW"}},42:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(23),i=t.n(r),c=(t(42),t(6)),o=t(28),l=t.n(o),s=t.p+"static/media/video.59892ec9.mp4",d=t(12),j=t(0);var u,m=function(){return Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,children:Object(j.jsx)("source",{src:s,type:"video/mp4"})}),Object(j.jsx)(d.b,{to:"/henry-dogs/home",className:l.a.button,children:"HENRY DOGS"})]})},b=t(16),h=t(7),v="GET_DOGS_ALL",g="GET_DOGS",O="GET_DOG_DETAIL",p="CLEAN_DETAIL",x="GET_TEMPERAMENTS",f="FILTER_ORIGIN",_="FILTER_TEMPERAMENT",y="ORDER",w="SET_CURRENT_PAGE",N="https://henry-dogs-api-kdug.onrender.com",I=function(){return function(e){fetch("".concat(N,"/dogs")).then((function(e){return e.json()})).then((function(n){e({type:v,payload:n})})).catch((function(){alert("No pudo cargarse las razas de perros. Intentelo nuevamente por favor.")}))}},k=function(){return function(e){fetch("".concat(N,"/temperaments")).then((function(e){return e.json()})).then((function(n){e({type:x,payload:n})})).catch((function(){alert("No pudo cargarse los temperamentos. Intentelo nuevamente por favor.")}))}},L=function(e){return{type:w,payload:e}},E=t(14),C=t(25),A=t.n(C),D=function(e){var n=e.name,t=e.temperament,a=e.image,r=e.weight;return Object(j.jsxs)("div",{className:A.a.container,children:[Object(j.jsx)("img",{src:a,alt:"",className:A.a.img}),Object(j.jsxs)("div",{className:A.a.information,children:[Object(j.jsx)("h2",{children:n}),Object(j.jsxs)("div",{children:[r," Kg"]}),Object(j.jsx)("div",{children:t})]})]})},H=t(17),T=t.n(H),R=function(e){var n=e.dogs,t=Object(h.b)(),r=Object(h.c)((function(e){return e.currentPage})),i=Object(a.useState)(8),c=Object(b.a)(i,1)[0],o=Math.ceil(n.length/c),l=Object(E.a)(Array(o)).map((function(e,n){return n+1})),s=r*c,u=s-c,m=n.slice(u,s);m.length||t(L(1));return Object(j.jsxs)("div",{className:T.a.pagination,children:[Object(j.jsxs)("nav",{className:T.a.nav,children:[Object(j.jsx)("button",{className:T.a.pageItem,onClick:function(){1!==r&&t(L(r-1))},children:"\u2bc7"}),l.map((function(e){return Object(j.jsx)("button",{className:"".concat(T.a.pageItem," ").concat(r===e?T.a.active:""),onClick:function(){return t(L(e))},children:e},e)})),Object(j.jsx)("button",{className:T.a.pageItem,onClick:function(){r!==o&&t(L(r+1))},children:"\u2bc8"})]}),Object(j.jsx)("div",{className:T.a.cards,children:m.map((function(e,n){return Object(j.jsx)(d.b,{to:"/henry-dogs/dog/".concat(e.id),children:Object(j.jsx)(D,{name:e.name,temperament:e.temperament,weight:e.weight,image:e.image})},e.id)}))})]})},W=t(4),S=t(5),P=S.a.div(u||(u=Object(W.a)(["\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100px;\n  height: 100px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 15px solid transparent;\n  border-top-color: var(--dark-brown);\n  border-bottom-color: var(--dark-brown);\n  animation: spinner 0.8s ease infinite;\n\n  @keyframes spinner {\n    to {\n      transform: rotate(180deg);\n    }\n  }\n"]))),z=t(10),G=t.n(z);var U,F=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.dogsAll})),t=Object(h.c)((function(e){return e.dogs})),r=Object(h.c)((function(e){return e.temperaments})),i=Object(a.useState)(""),c=Object(b.a)(i,2),o=c[0],l=c[1];Object(a.useEffect)((function(){n.length||e(I()),r.length||e(k())}),[]);var s=function(n){if(!n)return alert("Ingrese un raza de perro por favor.");e(function(e){return function(n){fetch("".concat(N,"/dogs?name=").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:g,payload:e})})).catch((function(){alert("No hay raza de perro que contengan ese nombre.")}))}}(o))};return Object(j.jsxs)("section",{className:G.a.section,children:[Object(j.jsxs)("div",{className:G.a.menu,children:[Object(j.jsxs)("div",{className:G.a.searchBar,children:[Object(j.jsx)("input",{className:G.a.searchInput,type:"search",value:o,onChange:function(e){return l(e.target.value)},onFocus:function(){return l("")}}),Object(j.jsx)("button",{className:G.a.searchButton,onClick:function(){return s(o)},children:"BUSCAR"})]}),Object(j.jsxs)("div",{className:G.a.filters,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:G.a.label,children:"Origen:"}),Object(j.jsxs)("select",{name:"origin",className:G.a.select,onChange:function(n){return e((t=n.target.value,function(e){fetch("".concat(N,"/dogs?origin=").concat(t)).then((function(e){return e.json()})).then((function(n){if(!n.length)return alert("No existe ninguna raza creada.");e({type:f,payload:n})})).catch((function(){alert("No pudo cargarse el origen de los datos. Intentelo nuevamente por favor.")}))}));var t},children:[Object(j.jsx)("option",{value:"all",children:"Todos"}),Object(j.jsx)("option",{value:"api",children:"Internet"}),Object(j.jsx)("option",{value:"db",children:"Creados"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:G.a.label,children:"Temperamento:"}),Object(j.jsxs)("select",{name:"temperament",className:G.a.select,onChange:function(n){return e((t=n.target.value,{type:_,payload:t}));var t},children:[Object(j.jsx)("option",{value:"all",children:"Todos"}),";",r.map((function(e,n){return Object(j.jsx)("option",{value:e.name,children:e.name},n)}))]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:G.a.label,children:"Orden:"}),Object(j.jsxs)("select",{name:"order",className:G.a.select,onChange:function(n){return e((t=n.target.value,{type:y,payload:t}));var t},children:[Object(j.jsx)("option",{value:"all",children:"Todos"}),Object(j.jsx)("option",{value:"AaZ",children:"Raza: de la A a la Z"}),Object(j.jsx)("option",{value:"ZaA",children:"Raza: de la Z a la A"}),Object(j.jsx)("option",{value:"min-a+",children:"Peso m\xedn: de (-) a (+)"}),Object(j.jsx)("option",{value:"min+a-",children:"Peso m\xedn: de (+) a (-)"}),Object(j.jsx)("option",{value:"max-a+",children:"Peso m\xe1x: de (-) a (+)"}),Object(j.jsx)("option",{value:"max+a-",children:"Peso m\xe1x: de (+) a (-)"})]})]})]})]}),t.length?Object(j.jsx)(R,{dogs:t}):Object(j.jsx)("div",{className:G.a.loader,children:Object(j.jsx)(P,{})})]})},M=t(19),Z=t.n(M),B=t.p+"static/media/dog.6ba0669f.png",X=Object(S.a)(d.c)(U||(U=Object(W.a)(["\n  display: inline-flex; /* Para que funcione justify-content */\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  background-color: #b17c54;\n  color: white;\n  height: 50px;\n  width: 270px;\n\n  &:hover {\n    font-weight: 600;\n    color: white;\n    background-color: #ffe021;\n    box-shadow: 0 0 10px #ffe021, 0 0 40px;\n  }\n\n  &.active {\n    color: #6a3605;\n    background-color: #fff8e7;\n    pointer-events: none;\n  }\n"])));var V,q,Y,J,K,Q,$,ee,ne,te,ae=function(){return Object(j.jsxs)("header",{className:Z.a.header,children:[Object(j.jsx)(d.c,{to:"/henry-dogs/home",children:Object(j.jsxs)("div",{className:Z.a.logo,children:[Object(j.jsx)("img",{className:Z.a.img,src:B,alt:"dog icon"}),Object(j.jsx)("h1",{className:Z.a.title,children:"HENRY DOGS"})]})}),Object(j.jsxs)("nav",{className:Z.a.nav,children:[Object(j.jsx)(X,{to:"/henry-dogs/home",children:"INICIO"}),Object(j.jsx)(X,{to:"/henry-dogs/form",children:"AGREGAR"})]})]})},re=t(2),ie=S.a.div(V||(V=Object(W.a)([""]))),ce=S.a.input(q||(q=Object(W.a)(["\n  width: 100%;\n  padding: 0.3rem;\n  font-size: 1rem;\n  color: var(--dark-brown);\n  border: 1px solid var(--dark-brown);\n  ::placeholder {\n    color: var(--medium-brown);\n  }\n  :hover {\n    cursor: text;\n  }\n  :focus {\n    border: 2px solid var(--dark-brown);\n  }\n"]))),oe=S.a.button(Y||(Y=Object(W.a)(["\n  font-weight: bold;\n  font-size: 0.9rem;\n  cursor: pointer;\n  color: white;\n  background-color: var(--dark-brown);\n  &[disabled] {\n    pointer-events: none;\n    cursor: default;\n    background-color: lightgrey;\n  }\n  &:active {\n    cursor: pointer;\n    background-color: #ffe021;\n    box-shadow: 0 0 10px #ffe021, 0 0 40px;\n  }\n"]))),le=S.a.div(J||(J=Object(W.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),se=S.a.div(K||(K=Object(W.a)(["\n  margin-top: 0.7rem;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),de=S.a.div(Q||(Q=Object(W.a)(["\n  width: 84%;\n"]))),je=S.a.div($||($=Object(W.a)(["\n  width: 16%;\n  text-align: right;\n"]))),ue=Object(S.a)(oe)(ee||(ee=Object(W.a)(["\n  padding: 0.3rem 0.9rem;\n"])));function me(e){var n=e.formData,t=e.setFormData,r=e.temperaments,i=Object(a.useRef)(null),c=function(e){if(e.preventDefault(),!n.temperaments.hasOwnProperty("error")){var a=n.temperaments.value,c=i.current.value;if(0!==c.length&&!a.some((function(e){return e.name===c}))){var o=r.find((function(e){return e.name===c}));void 0!==o&&(t(Object(re.a)(Object(re.a)({},n),{},{temperaments:{value:[].concat(Object(E.a)(a),[{id:o.id,name:o.name}]),valid:!0}})),i.current.value="")}}};return Object(j.jsxs)(ie,{children:[Object(j.jsxs)(le,{children:[Object(j.jsxs)(de,{children:[Object(j.jsx)(ce,{name:"dogInput",list:"temperamentsList",ref:i,onKeyDown:function(e){return function(e){if("Enter"===e.key)return e.preventDefault(),void c(e)}(e)}}),Object(j.jsx)("datalist",{id:"temperamentsList",children:r.map((function(e){return Object(j.jsx)("option",{value:e.name},e.id)}))})]}),Object(j.jsx)(je,{children:Object(j.jsx)(ue,{type:"button",onClick:c,children:"+"})})]}),Object(j.jsx)(se,{children:n.temperaments.value.map((function(e){return Object(j.jsx)(ve,{temperament:e,formData:n,setFormData:t},e.id)}))})]})}var be=S.a.div(ne||(ne=Object(W.a)(["\n  background-color: white;\n  color: var(--dark-brown);\n  display: inline-block;\n  padding: 0.3rem;\n  margin: 0.2rem;\n"]))),he=Object(S.a)(oe)(te||(te=Object(W.a)(["\n  background-color: var(--dark-brown);\n  padding: 0.1rem;\n  margin-left: 0.3rem;\n"])));function ve(e){var n=e.temperament,t=e.formData,a=e.setFormData;return Object(j.jsxs)(be,{children:[n.name,Object(j.jsx)(he,{onClick:function(){return e=n.id,void a(Object(re.a)(Object(re.a)({},t),{},{temperaments:{value:t.temperaments.value.filter((function(n){return n.id!==e})),valid:0===t.temperaments.value.length}}));var e},children:"X"})]})}var ge,Oe,pe,xe,fe,_e,ye,we,Ne,Ie,ke,Le=function(e,n,t){var a=e.target.name,r=e.target.value;if("name"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{name:{value:r,error:"Ingrese un nombre de raza.",valid:!1}}));if(!/^[a-zA-Z]+$/.test(r))return void t(Object(re.a)(Object(re.a)({},n),{},{name:{value:r,error:"Ingrese un nombre v\xe1lido.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{name:{value:r,valid:!0}}))}if("minHeight"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{minHeight:{value:r,error:"Ingrese una altura m\xednima.",valid:!1}}));if(isNaN(r))return void t(Object(re.a)(Object(re.a)({},n),{},{minHeight:{value:r,error:"Ingrese un n\xfamero.",valid:!1}}));if(r<=10)return void t(Object(re.a)(Object(re.a)({},n),{},{minHeight:{value:r,error:"Ingrese una altura mayor a 10cm.",valid:!1}}));if(r>=100)return void t(Object(re.a)(Object(re.a)({},n),{},{minHeight:{value:r,error:"Ingrese una altura menor a 100cm.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{minHeight:{value:r,valid:!0}}))}if("maxHeight"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{maxHeight:{value:r,error:"Ingrese una altura m\xe1xima.",valid:!1}}));if(isNaN(r))return void t(Object(re.a)(Object(re.a)({},n),{},{maxHeight:{value:r,error:"Ingrese un n\xfamero.",valid:!1}}));if(r<=10)return void t(Object(re.a)(Object(re.a)({},n),{},{maxHeight:{value:r,error:"Ingrese una altura mayor a 10cm.",valid:!1}}));if(r>=100)return void t(Object(re.a)(Object(re.a)({},n),{},{maxHeight:{value:r,error:"Ingrese una altura menor a 100cm.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{maxHeight:{value:r,valid:!0}}))}if("minWeigth"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{minWeigth:{value:r,error:"Ingrese un peso m\xednimo.",valid:!1}}));if(isNaN(r))return void t(Object(re.a)(Object(re.a)({},n),{},{minWeigth:{value:r,error:"Ingrese un n\xfamero.",valid:!1}}));if(r<=1)return void t(Object(re.a)(Object(re.a)({},n),{},{minWeigth:{value:r,error:"Ingrese un peso mayor a 1kg.",valid:!1}}));if(r>=100)return void t(Object(re.a)(Object(re.a)({},n),{},{minWeigth:{value:r,error:"Ingrese un peso menor a 100kg.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{minWeigth:{value:r,valid:!0}}))}if("maxWeigth"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{maxWeigth:{value:r,error:"Ingrese un peso m\xe1ximo.",valid:!1}}));if(isNaN(r))return void t(Object(re.a)(Object(re.a)({},n),{},{maxWeigth:{value:r,error:"Ingrese un n\xfamero.",valid:!1}}));if(r<=1)return void t(Object(re.a)(Object(re.a)({},n),{},{maxWeigth:{value:r,error:"Ingrese un peso mayor a 1kg.",valid:!1}}));if(r>=100)return void t(Object(re.a)(Object(re.a)({},n),{},{maxWeigth:{value:r,error:"Ingrese un peso menor a 100kg.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{maxWeigth:{value:r,valid:!0}}))}if("minLive"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{minLive:{value:r,valid:!0}}));if(isNaN(r))return void t(Object(re.a)(Object(re.a)({},n),{},{minLive:{value:r,error:"Ingrese un n\xfamero.",valid:!1}}));if(r<=5)return void t(Object(re.a)(Object(re.a)({},n),{},{minLive:{value:r,error:"Ingrese una cantidad mayor a 5 a\xf1os.",valid:!1}}));if(r>=30)return void t(Object(re.a)(Object(re.a)({},n),{},{minLive:{value:r,error:"Ingrese una cantidad menor 30 a\xf1os.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{minLive:{value:r,valid:!0}}))}if("maxLive"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{maxLive:{value:r,valid:!0}}));if(isNaN(r))return void t(Object(re.a)(Object(re.a)({},n),{},{maxLive:{value:r,error:"Ingrese un n\xfamero.",valid:!1}}));if(r<=5)return void t(Object(re.a)(Object(re.a)({},n),{},{maxLive:{value:r,error:"Ingrese una cantidad mayor a 5 a\xf1os.",valid:!1}}));if(r>=30)return void t(Object(re.a)(Object(re.a)({},n),{},{maxLive:{value:r,error:"Ingrese una cantidad menor a 30 a\xf1os.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{maxLive:{value:r,valid:!0}}))}if("image"===a){if(0===r.length)return void t(Object(re.a)(Object(re.a)({},n),{},{image:{value:r,valid:!0}}));if(!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(r))return void t(Object(re.a)(Object(re.a)({},n),{},{image:{value:r,error:"Ingrese una URL v\xe1lida.",valid:!1}}));t(Object(re.a)(Object(re.a)({},n),{},{image:{value:r,valid:!0}}))}},Ee=S.a.section(ge||(ge=Object(W.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  min-height: 70vh;\n  padding: 20px;\n  background-color: var(--light-brown);\n"]))),Ce=S.a.form(Oe||(Oe=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 550px;\n  max-width: 550px;\n  padding: 1.2rem 1.2rem 1.2rem 1.2rem;\n  border: 1px solid var(--dark-brown);\n  box-shadow: 3px 3px var(--medium-brown);\n  color: var(--dark-brown);\n"]))),Ae=S.a.h2(pe||(pe=Object(W.a)([""]))),De=S.a.h5(xe||(xe=Object(W.a)(["\n  margin-bottom: 1rem;\n"]))),He=S.a.h4(fe||(fe=Object(W.a)(["\n  margin: 1rem;\n"]))),Te=S.a.div(_e||(_e=Object(W.a)(["\n  text-align: center;\n  padding-top: 1.2rem;\n"]))),Re=S.a.div(ye||(ye=Object(W.a)(["\n  margin-top: 0.2em;\n  width: 100%;\n"]))),We=S.a.div(we||(we=Object(W.a)(["\n  display: flex;\n  align-items: end;\n"]))),Se=S.a.button(Ne||(Ne=Object(W.a)(["\n  all: unset;\n  height: 40px;\n  width: 110px;\n  cursor: pointer;\n  color: white;\n  background-color: var(--dark-brown);\n  &[disabled] {\n    pointer-events: none;\n    cursor: default;\n    background-color: lightgrey;\n  }\n  &:active {\n    cursor: pointer;\n    background-color: #ffe021;\n    box-shadow: 0 0 10px #ffe021, 0 0 40px;\n  }\n"]))),Pe=S.a.input(Ie||(Ie=Object(W.a)(["\n  width: 100%;\n  padding: 0.3rem;\n  font-size: 1rem;\n  color: var(--dark-brown);\n  border: 1px solid var(--dark-brown);\n  ::placeholder {\n    color: var(--dark-brown);\n  }\n  :hover {\n    cursor: text;\n  }\n  :focus {\n    border-color: #ffe021;\n    outline: 2px solid #ffe021;\n  }\n"]))),ze=S.a.div(ke||(ke=Object(W.a)(["\n  visibility: ",";\n  font-size: 0.7rem;\n  color: red;\n  margin-bottom: 0.2rem;\n"])),(function(e){return e.visibility?"visible":"hidden"}));function Ge(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.temperaments})),t=Object(a.useState)(!0),r=Object(b.a)(t,2),i=r[0],c=r[1],o=Object(a.useState)(!1),l=Object(b.a)(o,2),s=l[0],d=l[1],u={minHeight:{value:"",valid:!1},name:{value:"",valid:!1},maxHeight:{value:"",valid:!1},minWeigth:{value:"",valid:!1},maxWeigth:{value:"",valid:!1},minLive:{value:"",valid:!0},maxLive:{value:"",valid:!0},image:{value:"",valid:!0},temperaments:{value:[],valid:!1}},m=Object(a.useState)(u),v=Object(b.a)(m,2),g=v[0],O=v[1];Object(a.useEffect)((function(){n.length||e(k())}),[]),Object(a.useEffect)((function(){if(s){for(var e in g)if(g[e].hasOwnProperty("error")||!1===g[e].valid)return void c(!0);c(!1)}}),[g]);return Object(j.jsx)(Ee,{children:Object(j.jsxs)(Ce,{onChange:function(){return d(!0)},onSubmit:function(n){n.preventDefault();var t={name:g.name.value,height:"".concat(g.minHeight.value," - ").concat(g.maxHeight.value),weight:"".concat(g.minWeigth.value," - ").concat(g.maxWeigth.value),life_span:"".concat(g.minLive.value," - ").concat(g.maxLive.value),image:g.image.value,temperaments:g.temperaments.value.map((function(e){return e.name}))};fetch("".concat(N,"/dog"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e(I()),alert("La raza de perro ".concat(g.name.value," se agreg\xf3 con \xe9xito.")),O(u)})).catch((function(){alert("No pudo cargarse la raza de perro. Intentelo nuevamente por favor.")}))},children:[Object(j.jsx)(Ae,{children:"NUEVA RAZA"}),Object(j.jsx)(De,{children:"Rellena todos los campos"}),Object(j.jsx)(We,{children:Object(j.jsxs)(Re,{children:[g.name.error?Object(j.jsx)(ze,{visibility:"true",children:g.name.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"name",placeholder:"Nombre de la raza",value:g.name.value,onChange:function(e){return Le(e,g,O)}})]})}),Object(j.jsxs)(We,{children:[Object(j.jsxs)(Re,{children:[g.minHeight.error?Object(j.jsx)(ze,{visibility:"true",children:g.minHeight.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"minHeight",placeholder:"Altura m\xednima en cm",value:g.minHeight.value,onChange:function(e){return Le(e,g,O)}})]}),"-",Object(j.jsxs)(Re,{children:[g.maxHeight.error?Object(j.jsx)(ze,{visibility:"true",children:g.maxHeight.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"maxHeight",placeholder:"Altura m\xe1xima en cm",value:g.maxHeight.value,onChange:function(e){return Le(e,g,O)}})]})]}),Object(j.jsxs)(We,{children:[Object(j.jsxs)(Re,{children:[g.minWeigth.error?Object(j.jsx)(ze,{visibility:"true",children:g.minWeigth.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"minWeigth",placeholder:"Peso m\xednimo en kg",value:g.minWeigth.value,onChange:function(e){return Le(e,g,O)}})]}),"- ",Object(j.jsxs)(Re,{children:[g.maxWeigth.error?Object(j.jsx)(ze,{visibility:"true",children:g.maxWeigth.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"maxWeigth",placeholder:"Peso m\xe1ximo en kg",value:g.maxWeigth.value,onChange:function(e){return Le(e,g,O)}})]})]}),Object(j.jsxs)(We,{children:[Object(j.jsxs)(Re,{children:[g.minLive.error?Object(j.jsx)(ze,{visibility:"true",children:g.minLive.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"minLive",placeholder:"A\xf1os de vida m\xednimo",value:g.minLive.value,onChange:function(e){return Le(e,g,O)}})]}),"-",Object(j.jsxs)(Re,{children:[g.maxLive.error?Object(j.jsx)(ze,{visibility:"true",children:g.maxLive.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Pe,{type:"text",name:"maxLive",placeholder:"A\xf1os de vida m\xe1ximo",value:g.maxLive.value,onChange:function(e){return Le(e,g,O)}})]})]}),g.image.error?Object(j.jsx)(ze,{visibility:"true",children:g.image.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(Re,{children:Object(j.jsx)(Pe,{type:"url",name:"image",placeholder:"URL de la imagen",value:g.image.value,onChange:function(e){return Le(e,g,O)}})}),Object(j.jsx)(He,{children:"Temperamentos:"}),g.temperaments.error?Object(j.jsx)(ze,{visibility:"true",children:g.temperaments.error}):Object(j.jsx)(ze,{children:"hidden"}),Object(j.jsx)(me,{temperaments:n,formData:g,setFormData:O}),Object(j.jsx)(Te,{children:Object(j.jsx)(Se,{type:"submit",disabled:i,children:"Agregar"})})]})})}var Ue=function(){var e=Object(c.f)().id,n=Object(h.b)(),t=Object(h.c)((function(e){return e.dogDetail}));return Object(a.useEffect)((function(){return n(function(e){return function(n){fetch("".concat(N,"/dogs/").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:O,payload:e})})).catch((function(){alert("No hay perros con ese ID.")}))}}(e)),function(){n({type:p})}}),[e]),t},Fe=t(18),Me=t.n(Fe),Ze=function(){var e=Ue();return null!==e&&void 0!==e&&e.name?Object(j.jsxs)("section",{className:Me.a.section,children:[Object(j.jsxs)("div",{className:Me.a.data,children:[Object(j.jsx)("div",{className:Me.a.title,children:Object(j.jsx)("h1",{children:e.name})}),Object(j.jsxs)("div",{className:Me.a.detail,children:[Object(j.jsxs)("h2",{children:["CODE: ",e.id]}),Object(j.jsxs)("h2",{children:["HEIGHT: ",e.height," cm"]}),Object(j.jsxs)("h2",{children:["WEIGHT: ",e.weight," kg"]}),Object(j.jsxs)("h2",{children:["LIFE SPAN: ",e.life_span]}),Object(j.jsxs)("h2",{children:["TEMPERAMENTS: ",e.temperaments,"."]})]})]}),Object(j.jsx)("img",{src:e.image,alt:"",className:Me.a.img})]}):Object(j.jsx)("section",{className:Me.a.loader,children:Object(j.jsx)(P,{})})},Be=t(20),Xe=t.n(Be),Ve=t.p+"static/media/email.3e044a1f.svg",qe=t.p+"static/media/github.22861d02.svg",Ye=t.p+"static/media/linkedin.2943a06e.svg",Je=function(e){return Object(j.jsxs)("footer",{className:Xe.a.footer,children:[Object(j.jsx)("p",{children:"\xa9 2023 HENRY DOGS by Ulises Nahuel Dante Chambi"}),Object(j.jsxs)("div",{className:Xe.a.imgContainer,children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/ulises-chambi/",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{src:Ye,alt:"linkedin",className:Xe.a.img})}),Object(j.jsx)("a",{href:"https://github.com/uliseschambi",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{src:qe,alt:"github",className:Xe.a.img})}),Object(j.jsx)("a",{href:"mailto:uliseschambi@gmail.com",children:Object(j.jsx)("img",{src:Ve,alt:"email",className:Xe.a.img})})]})]})};var Ke=function(){return"/henry-dogs/"===Object(c.e)().pathname?Object(j.jsx)(c.a,{path:"/henry-dogs/",children:Object(j.jsx)(m,{})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ae,{}),Object(j.jsx)(c.a,{exact:!0,path:"/henry-dogs/home",children:Object(j.jsx)(F,{})}),Object(j.jsx)(c.a,{exact:!0,path:"/henry-dogs/form",children:Object(j.jsx)(Ge,{})}),Object(j.jsx)(c.a,{exact:!0,path:"/henry-dogs/dog/:id",children:Object(j.jsx)(Ze,{})}),Object(j.jsx)(Je,{})]})},Qe=t(26),$e={dogsAll:[],dogs:[],dogDetail:{},temperaments:[],currentPage:1},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:return Object(re.a)(Object(re.a)({},e),{},{dogsAll:n.payload,dogs:n.payload});case g:return Object(re.a)(Object(re.a)({},e),{},{dogs:n.payload});case O:return Object(re.a)(Object(re.a)({},e),{},{dogDetail:n.payload});case p:return Object(re.a)(Object(re.a)({},e),{},{dogDetail:{}});case x:return Object(re.a)(Object(re.a)({},e),{},{temperaments:n.payload});case w:return Object(re.a)(Object(re.a)({},e),{},{currentPage:n.payload});case f:return Object(re.a)(Object(re.a)({},e),{},{dogs:n.payload});case _:return Object(re.a)(Object(re.a)({},e),{},{dogs:"all"===n.payload?e.dogsAll:e.dogsAll.filter((function(e){var t;return null===(t=e.temperament)||void 0===t?void 0:t.toUpperCase().includes(n.payload.toUpperCase())}))});case y:return Object(re.a)(Object(re.a)({},e),{},{dogs:"AaZ"===n.payload?Object(E.a)(e.dogs).sort((function(e,n){return e.name.toLowerCase()<n.name.toLowerCase()?-1:e.name.toLowerCase()>n.name.toLowerCase()?1:0})):"ZaA"===n.payload?Object(E.a)(e.dogs).sort((function(e,n){return e.name.toLowerCase()<n.name.toLowerCase()?-1:e.name.toLowerCase()>n.name.toLowerCase()?1:0})).reverse():"min-a+"===n.payload?Object(E.a)(e.dogs).sort((function(e,n){return~~e.weight.split("-")[0].trim()-~~n.weight.split("-")[0].trim()})):"min+a-"===n.payload?Object(E.a)(e.dogs).sort((function(e,n){return~~e.weight.split("-")[0].trim()-~~n.weight.split("-")[0].trim()})).reverse():"max-a+"===n.payload?Object(E.a)(e.dogs).sort((function(e,n){var t=e.weight.split("-")[1]||e.weight.split("-")[0],a=n.weight.split("-")[1]||n.weight.split("-")[0];return~~t.trim()-~~a.trim()})):"max+a-"===n.payload?Object(E.a)(e.dogs).sort((function(e,n){var t=e.weight.split("-")[1]||e.weight.split("-")[0],a=n.weight.split("-")[1]||n.weight.split("-")[0];return~~t.trim()-~~a.trim()})).reverse():e.dogsAll});default:return Object(re.a)({},e)}},nn=t(37),tn=Object(Qe.c)(en,Object(Qe.b)(Object(Qe.a)(nn.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(j.jsx)(h.a,{store:tn,children:Object(j.jsx)(d.a,{children:Object(j.jsx)(Ke,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.97750c1d.chunk.js.map