(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(14),s=a.n(o),i=(a(153),a(10)),r=(a.p,a(154),a(20)),l=a.n(r),j=a(140),d=a(330),b=a(327),g=(a(132),a(13)),u=a(2),O=Object(b.a)({container:{backgroundColor:"#FFFFFA",padding:"2%"}}),m=function(){console.log("getData running");var e=Object(g.f)().location.state,t="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+e+"&apikey=DWK7LDWIV19Q5J86",a=[],c=[],o=Object(n.useState)(),s=Object(i.a)(o,2),r=s[0],b=s[1],m=Object(n.useState)(),h=Object(i.a)(m,2),x=h[0],p=h[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),w=(f[0],f[1]),F=O();Object(n.useEffect)((function(){console.log("get prices running"),l.a.get(t).then((function(e){var t=e.data["Time Series (Daily)"];if(null!=t){Object.keys(t).forEach((function(e){var n=t[e.toString()]["4. close"];a.push(n)}));var n=Object.keys(t);c.push(n)}b(a.reverse()),p(c[0].reverse()),w(!0)}))}),[]);var C={labels:x,datasets:[{label:e.toUpperCase(),data:r,fill:!0,background:"#4D9DE0",backgroundColor:"rgba(38, 196, 133, 0.7)",borderColor:"#26C485"}]};return Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{className:F.container,elevation:6,children:Object(u.jsx)(j.a,{data:C,options:{scales:{yAxes:[{ticks:{beginAtZero:!1}}]},maintainAspectRatio:!1},height:350})})})},h=a(334),x=a(332),p=a(42),v=a(333),f=Object(b.a)({title:{fontSize:15,textAlign:"left"},card:{width:"90%",margin:"2% auto 0 auto"},cardContainer:{width:"100%",padding:"2%",minHeight:"653px",overflow:"auto",maxHeight:"600px",backgroundColor:"#FFFFFA"},cardChild:{marginTop:"1%"},news:{marginTop:"2%"}}),w=function(){var e=Object(g.f)().location.state,t=[],a=Object(n.useState)(),c=Object(i.a)(a,2),o=c[0],s=c[1],r=[];Object(n.useEffect)((function(){l.a.get("https://www.alphavantage.co/query?function=OVERVIEW&symbol="+e+"&apikey=DWK7LDWIV19Q5J86").then((function(e){if(e){var t=e.data.Name;if(console.log(t),t&&t.length>0)for(var a=0;a<t.length;a++)if(" "===t[a]){var n=t.substring(0,t.indexOf(" "));""!=n&&r.push(n)}else{var c=t.substring(0,t.indexOf(","));""!=c&&r.push(c)}console.log(r)}else console.log("no response from alpha vantage")})).then((function(e){l.a.get("https://content.guardianapis.com/search?section=business&q="+r[0]+"&api-key=fbd25144-951c-40ac-8dfa-63fdd9a1eb06").then((function(e){console.log(r);for(var a=e.data.response.results,n=0;n<a.length;n++)t.push(a[n].webTitle);s(t)}))}))}),[]);var j=f();return o?Object(u.jsx)("div",{children:Object(u.jsxs)(d.a,{className:j.cardContainer,overflow:"auto",elevation:6,children:[Object(u.jsx)(x.a,{className:j.title,title:"Headlines"}),Object(u.jsx)(v.a,{}),o.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{className:j.cardChild,elevation:0,children:Object(u.jsx)(h.a,{children:Object(u.jsx)(p.a,{className:j.title,children:e})})}),Object(u.jsx)(v.a,{})]})}))]})}):Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"no title"})})},F=Object(b.a)({root:{fontFamily:"Roboto",marginTop:"1%",color:"#333333"},container:{textAlign:"left",marginTop:"4%",color:"#333333"},line:{borderColor:"white"},card:{backgroundColor:"#FFFFFA"}}),C=function(){Object(g.f)().location.state;var e="https://financialmodelingprep.com/api/v3/financial-growth/IBM?limit=20&apikey=055644b754df26be01f9083226a98784",t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){console.log("finance news"),l.a.get(e).then((function(e){var t=e.data;o(t[0]),console.log(e)}))}),[]);var s=F();return c?Object(u.jsx)("div",{className:s.container,children:Object(u.jsxs)(d.a,{className:s.card,elevation:6,children:[Object(u.jsx)(x.a,{title:"Financial Growth"}),Object(u.jsx)(v.a,{}),Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(p.a,{className:s.root,children:[" Asset Growth: ",c.assetGrowth]}),Object(u.jsxs)(p.a,{className:s.root,children:["Debt Growth: ",c.debtGrowth]}),Object(u.jsxs)(p.a,{className:s.root,children:["Divident Per Share Growth: ",c.dividendsperShareGrowth]}),Object(u.jsxs)(p.a,{className:s.root,children:["EPS Growth: ",c.epsgrowth]})]})]})}):(console.log(e),Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"loading finance data"})}))},N=a(345),k=a(293),y=Object(n.createContext)(!1),A=Object(n.createContext)(""),S=Object(b.a)({input:{width:"60%"},button:{marginTop:"2%"},title:{marginBottom:"5%",marginTop:"10%"}}),T=function(){var e=Object(n.useContext)(A),t=e.loginUsername,a=(e.setLoginUsername,Object(n.useContext)(y)),c=a.loggedIn,o=(a.setLoggedIn,S()),s=Object(g.f)(),r=s.location.state;console.log(r);var l=Object(n.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1];return console.log("log in status homepage: "+c),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:o.title,children:[Object(u.jsx)(p.a,{variant:"h2",children:"StockLiner"}),t?Object(u.jsx)("div",{children:Object(u.jsxs)(p.a,{variant:"subtitle",children:["Welcome, ",t]})}):Object(u.jsx)("p",{})]}),Object(u.jsx)("form",{children:Object(u.jsx)(N.a,{onChange:function(e){b(e.target.value),console.log(e.target.value)},className:o.input,id:"ticker",label:"TSLA, IBM, AAPL..."})}),Object(u.jsx)(k.a,{onClick:function(){var e=d;d&&s.push("/results",e)},className:o.button,variant:"contained",color:"primary",children:"Search"})]})},D=function(){var e=Object(g.f)().location.state.toUpperCase(),t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1],s=[];console.log(e);var r=0;return 0===r?(console.log("link is null"),l.a.get("https://api.polygon.io/v1/meta/symbols/"+e+"/company?&apiKey=u0O5gF44EyZmm6nMXjtB6IUzGJW_4qFB").then((function(e){var t=e.data.name,a="//logo.clearbit.com/"+t.substr(0,t.indexOf(" "))+".com";s.push(a),o(s),console.log(s),console.log("function running"),r=1}))):console.log("link is not null"),Object(u.jsx)("img",{src:c,height:40})},L=(Object(b.a)({cardContainer:{backgroundColor:"#FFFFFA",padding:"2%",marginBottom:"4%",height:"370px",overflow:"auto"},text:{textAlign:"justify"},title:{textAlign:"left"}}),a(338)),I=a(139),B=a(336),E=a(337),U=a(143),P=Object(I.a)({palette:{background:{default:"#FFFFFA"}}}),R=Object(b.a)({accordion:{width:"50%"},data:{marginBottom:"30%"},divider:{marginBottom:"2%",marginTop:"0.5%"},title:{marginTop:"0.5%",textAlign:"left"},logo:{marginTop:"0.5%",marginRight:"1%"},username:{width:"20%",textAlign:"left",fontWeight:"bold",marginBottom:"-5%"},content:{width:"80%",marginLeft:"2%",textAlign:"left",marginBottom:"-5%"},row:{textAlign:"left",width:"90%",margin:"auto"},chatCard:{paddingTop:"1%",paddingBottom:"1%",paddingRight:"1.5%",paddingLeft:"1.5%"},inputDiv:{marginBottom:"1%",maringTop:"15%"},button:{height:"40px"},chatDiv:{marginTop:"5%"},paperDiv:{marginBottom:"3%",padding:"2%"},titleDiv:{marginBottom:"3%"},commentCard:{marginTop:"3%",backgroundColor:"#FFFFFA"},textPanel:{maxHeight:"359px",minHeight:"359px",overflowY:"scroll"},postDiv:{marginBottom:"1%",marginTop:"1%"}}),G=function(){var e=Object(n.useContext)(A),t=e.loginUsername;e.setLoginUsername;console.log("LOGIN USERNAME:"+t);var a=Object(g.f)().location.state.toUpperCase(),c=Object(n.useContext)(y),o=c.loggedIn,s=(c.setLoggedIn,R()),r=Object(n.useState)(""),j=Object(i.a)(r,2),b=(j[0],j[1],Object(n.useState)("")),O=Object(i.a)(b,2),h=(O[0],O[1],Object(n.useState)("")),f=Object(i.a)(h,2),F=(f[0],f[1],Object(n.useState)([])),S=Object(i.a)(F,2),T=S[0],I=S[1],G=[],W=document.getElementById("messageDiv");Object(n.useEffect)((function(){W&&W.scrollIntoView(!1),a.length>0&&(console.log("SEARCHVALUE "+a),console.log("checking comments"),l.a.get("https://stockliner.herokuapp.com/comment_sections/"+a).then((function(e){var t=e.data;G.push(t),I(t)})),T.map((function(e){return Object(u.jsx)("p",{children:e})})))}),[]);return Object(u.jsxs)(B.a,{theme:P,children:[Object(u.jsx)(E.a,{}),Object(u.jsxs)(L.a,{container:!0,spacing:2,justify:"center",children:[Object(u.jsx)(L.a,{className:s.title,item:!0,xs:11,md:6,lg:5,children:Object(u.jsxs)(p.a,{variant:"h3",className:s.title,children:[Object(u.jsx)(D,{}),a]})}),Object(u.jsx)(L.a,{item:!0,className:s.title,xs:11,md:6,lg:5})]}),Object(u.jsx)(v.a,{className:s.divider}),Object(u.jsxs)(L.a,{container:!0,spacing:2,justify:"center",children:[Object(u.jsxs)(L.a,{item:!0,xs:11,md:6,lg:5,className:s.gridChat,children:[Object(u.jsx)(m,{className:s.accordion}),Object(u.jsxs)(d.a,{elevation:6,className:s.commentCard,children:[Object(u.jsx)(x.a,{align:"left",title:a+"'s Comments"}),Object(u.jsx)(v.a,{className:s.titleDiv}),Object(u.jsx)("div",{className:s.textPanel,id:"messageDiv",children:T?Object.keys(T).map((function(e){return Object(u.jsx)("div",{className:s.row,children:Object(u.jsxs)(U.a,{variant:"outlined",className:s.paperDiv,children:[Object(u.jsxs)(p.a,{className:s.username,variant:"body",children:[T[e].username,": "]}),Object(u.jsx)(p.a,{className:s.content,variant:"body",children:T[e].content})]})})})):Object(u.jsx)("p",{children:"no comments"})}),Object(u.jsx)(v.a,{className:s.postDiv}),o?Object(u.jsxs)("div",{className:s.titleDiv,children:[Object(u.jsx)(N.a,{variant:"outlined",label:"Comment",size:"small",id:"commentPost"}),Object(u.jsx)(k.a,{variant:"outlined",className:s.button,onClick:function(){var e=document.getElementById("commentPost").value;console.log(e),t.length>0?l.a.post("https://stockliner.herokuapp.com/add_comment",{stock_name:a,username:t,content:e}).then((function(e){l.a.get("https://stockliner.herokuapp.com/comment_sections/"+a).then((function(t){var a=e.data;I(a),console.log(T),window.location.reload()})),console.log(e)})):alert("YOU ARE NOT LOGGED IN")},children:"Post"})]}):Object(u.jsxs)("div",{className:s.postDiv,children:[Object(u.jsx)(N.a,{variant:"outlined",disabled:!0,label:"Login required",size:"small"}),Object(u.jsx)(k.a,{variant:"outlined",className:s.button,disabled:!0,children:"Post"})]})]})]}),Object(u.jsxs)(L.a,{item:!0,xs:11,md:6,lg:5,children:[Object(u.jsx)(w,{}),Object(u.jsx)(C,{})]})]}),Object(u.jsx)(L.a,{spacing:2,justify:"left"}),Object(u.jsx)("div",{})]})},W=(Object(I.a)({palette:{background:{default:"#FFFFFA"}}}),Object(b.a)({card:{width:"300px",margin:"auto",backgroundColor:"#FFFFFA"},div:{marginTop:"10%"},title:{marginTop:"3%"},button:{marginTop:"3%"},password:{marginBottom:"5%"}})),H=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),r=s[0],j=s[1],b=Object(g.f)(),O=W();return Object(u.jsxs)("div",{className:O.div,children:[Object(u.jsx)("form",{children:Object(u.jsxs)(d.a,{className:O.card,elevation:6,children:[Object(u.jsx)(x.a,{title:"Sign up",className:O.title}),Object(u.jsx)(v.a,{}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(N.a,{id:"username",label:"Username",onChange:function(e){c(e.target.value),console.log(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)(N.a,{id:"password",label:"Password",onChange:function(e){j(e.target.value)},className:O.password})}),Object(u.jsx)(k.a,{variant:"contained",color:"primary",onClick:function(){console.log(a,r),l.a.post("https://stockliner.herokuapp.com/signup",{username:a,password:r}).then((function(e){console.log(e),console.log("test")})),b.push("/"),alert("Succesfully signed up!")},className:O.button,children:"Sign up"})]})]})}),Object(u.jsx)("br",{})]})},_=(Object(I.a)({palette:{background:{default:"#FFFFFA"}}}),Object(b.a)({card:{width:"300px",margin:"auto",backgroundColor:"#FFFFFA"},div:{marginTop:"10%"},title:{marginTop:"3%"},button:{marginTop:"3%"},password:{marginBottom:"5%"}})),M=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),r=s[0],j=s[1],b=Object(n.useState)(!1),O=Object(i.a)(b,2),m=(O[0],O[1]),p=Object(n.useContext)(A),f=(p.loginUsername,p.setLoginUsername),w=Object(n.useContext)(y),F=w.loggedIn,C=w.setLoggedIn,S=Object(g.f)(),T=_();return Object(u.jsx)("div",{className:T.div,children:Object(u.jsx)("form",{children:Object(u.jsxs)(d.a,{className:T.card,elevation:6,children:[Object(u.jsx)(x.a,{title:"Log in",className:T.title}),Object(u.jsx)(v.a,{}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(N.a,{id:"usernameReg",label:"Username",onChange:function(e){c(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)(N.a,{id:"passwordReg",label:"Password",onChange:function(e){j(e.target.value)},className:T.password})}),Object(u.jsx)(k.a,{variant:"contained",color:"primary",onClick:function(){f(a),l.a.post("https://stockliner.herokuapp.com/login",{username:a,password:r}).then((function(e){if(e.data.length>0){m(!0),C(!0),f(a),console.log("logged in");var t=F;S.push("/",t),console.log("login state login page: "+F)}else alert("Please check your username/password."),console.log(e)}))},className:T.button,children:"Log in"})]})]})})})},V=a(342),q=a(343),J=a(339),z=a(346),K=a(335),Y=a(340),Q=a(341),Z=a(138),X=a.n(Z),$=a(23),ee=Object(b.a)({sidebar:{width:250},menu:{background:"#2B2D42"}}),te=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=ee();Object(g.f)();return Object(u.jsxs)("div",{children:[Object(u.jsx)(J.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return c(!0)},children:Object(u.jsx)(X.a,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(z.a,{classes:{paper:o.menu},anchor:"left",open:a,onClose:function(){return c(!1)},onOpen:function(){},children:Object(u.jsx)("div",{className:o.sidebar,children:Object(u.jsxs)(K.a,{children:[Object(u.jsx)($.b,{to:"/",children:Object(u.jsx)(Y.a,{button:!0,children:Object(u.jsx)(Q.a,{primary:Object(u.jsx)(p.a,{type:"body2",style:{color:"white"},children:"Home"})})})}),Object(u.jsx)($.b,{to:"/registration",children:Object(u.jsx)(Y.a,{button:!0,children:Object(u.jsx)(Q.a,{primary:Object(u.jsx)(p.a,{type:"body2",style:{color:"white"},children:"Register"})})})}),Object(u.jsx)($.b,{to:"/login",children:Object(u.jsx)(Y.a,{button:!0,children:Object(u.jsx)(Q.a,{primary:Object(u.jsx)(p.a,{type:"body2",style:{color:"white"},children:"Login"})})})})]})})})})]})},ae=a(344),ne=Object(b.a)({root:{backgroundColor:"#2B2D42"},button:{backgroundColor:"#26C485",textDecoration:"none",borderRadius:"5px",marginTop:"4%"},buttonText:{color:"white"},signoutButton:{backgroundColor:"#f04c41",textDecoration:"none",borderRadius:"5px",marginTop:"4%",color:"white"}}),ce=function(){var e=Object(n.useContext)(A),t=(e.loginUsername,e.setLoginUsername,Object(n.useContext)(y)),a=t.loggedIn,c=t.setLoggedIn;console.log(a+"WWWWAWAAAAAA");var o=Object(g.f)().location.state;console.log(o);var s=ne();console.log("log in status navbar: "+a);return Object(u.jsx)("div",{children:Object(u.jsx)(V.a,{position:"static",className:s.root,children:Object(u.jsx)(q.a,{children:Object(u.jsxs)(L.a,{justify:"space-between",container:!0,spacing:24,children:[Object(u.jsx)(L.a,{item:!0,children:Object(u.jsx)(te,{})}),Object(u.jsx)(L.a,{item:!0,children:Object(u.jsx)("div",{children:a?Object(u.jsx)("div",{children:Object(u.jsx)(k.a,{variant:"contained",className:s.signoutButton,onClick:function(){c(!1),window.location.reload()},children:"Sign out"})}):Object(u.jsx)("div",{children:Object(u.jsxs)(ae.a,{color:"primary",variant:"contained",children:[Object(u.jsx)($.b,{to:"/login",className:s.button,children:Object(u.jsx)(k.a,{className:s.buttonText,children:"Log in"})}),Object(u.jsx)($.b,{to:"/registration",className:s.button,children:Object(u.jsx)(k.a,{className:s.buttonText,children:"Register"})})]})})})})]})})})})},oe=Object(b.a)({container:{width:"60%",marginRight:"3%",marginTop:"3%",float:"right"},graph:{minHeight:"200px",alignItems:"stretch"},root:{flexGrow:"1"},uicontainer:{margin:"auto"},bottomBox:{float:"left"}});var se=function(){oe();var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),r=s[0],l=s[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)($.a,{children:Object(u.jsx)(g.c,{children:Object(u.jsx)(y.Provider,{value:{loggedIn:a,setLoggedIn:c},children:Object(u.jsxs)(A.Provider,{value:{loginUsername:r,setLoginUsername:l},children:[Object(u.jsx)(g.a,{exact:"randomstringfornavbar",component:ce}),Object(u.jsx)(g.a,{exact:!0,path:"/",component:T}),Object(u.jsx)(g.a,{path:"/results",component:G}),Object(u.jsx)(g.a,{exact:!0,path:"/registration",component:H}),Object(u.jsx)(g.a,{exact:!0,path:"/login",component:M})]})})})})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,349)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(se,{})}),document.getElementById("root")),ie()}},[[291,1,2]]]);
//# sourceMappingURL=main.b38c73b4.chunk.js.map