(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{79:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(14),r=a.n(n),s=(a(79),a(13)),o=a(33),l=(a(90),a(59),a(62)),j=a(121),d=a(126),b=a(127),h=a(67),m=a(128),u=a(141),x=a(129),O=a(140),p=a(130),g=a(139),f=a(138),v=a(131),y=a(125),N=a(3),w=Object(j.a)((function(e){return{tutorial:{paddingTop:e.spacing(6)},step:{paddingTop:e.spacing(2)},image:{maxWidth:"100%"}}})),k=function(e){var t=e.type,a=w();return Object(N.jsxs)("div",{className:a.tutorial,children:[Object(N.jsx)(h.a,{variant:"h5",children:Object(N.jsxs)("b",{children:["\u5982\u4f55\u53d6\u5f97"," ","discord"===t?"Discord webhook url":"Line notify token"," ?"]})}),"discord"===t?Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'1. \u9ede\u9078 "\u6587\u5b57\u983b\u9053" \u65c1\u7684 "\u7de8\u8f2f\u983b\u9053" \u6309\u9215'}),Object(N.jsx)("img",{src:"https://i.imgur.com/Owc3iPH.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'2. \u9032\u5165 "\u6574\u5408" \u9801\u9762'}),Object(N.jsx)("img",{src:"https://i.imgur.com/lkhlYcB.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'\uff13. \u9078\u64c7 "\u5efa\u7acbWebhook"'}),'*\u5982\u679c\u5df2\u7d93\u6709\u8a72\u983b\u9053\u5df2\u7d93\u6709Webhook\uff0c\u8acb\u9078\u64c7 "\u67e5\u770bWebhook" -',"> ",'"\u65b0Webhook"',Object(N.jsx)("img",{src:"https://i.imgur.com/c7DHmRr.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'4. \u9ede\u9078 "\u8907\u88fdWebhook\u7db2\u5740"'}),Object(N.jsx)("img",{src:"https://i.imgur.com/1mKbwQL.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:"5. \u7e7c\u7e8c\u5b8c\u6210\u4e0a\u65b9\u7684\u8868\u683c\u5c31\u5927\u529f\u66f4\u6210\u4e86!"}),Object(N.jsx)("br",{})]}):Object(N.jsxs)("div",{children:[Object(N.jsxs)(h.a,{variant:"h6",className:a.step,children:["1. \u524d\u5f80 Line Notify \u8a2d\u5b9a\u9801\u9762\u4e26\u767b\u5165",Object(N.jsx)("br",{}),Object(N.jsx)(y.a,{children:"https://notify-bot.line.me/my/"})]}),"*\u9996\u6b21\u767b\u5165\u6703\u9700\u8981\u5728Line\u8f38\u5165\u9a57\u8b49\u78bc",Object(N.jsx)("img",{src:"https://i.imgur.com/5Wl97MC.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'2. \u9ede\u9078 "\u767c\u884c\u6b0a\u6756"'}),Object(N.jsx)("img",{src:"https://i.imgur.com/CRRgOEL.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'3. \u5b8c\u6210\u8a2d\u5b9a\u5f8c\u9ede\u9078 "\u767c\u884c"'}),"*\u6b0a\u6756\u540d\u7a31\u5efa\u8b70\u586b\u5beb ",Object(N.jsx)("b",{children:"CLHS-nowotify"}),"\uff0c\u65b9\u4fbf\u65e5\u5f8c\u8fa8\u8b58",Object(N.jsx)("img",{src:"https://i.imgur.com/3Gd1Eer.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:"4. \u9ede\u9078\u8907\u88fd"}),Object(N.jsx)("img",{src:"https://i.imgur.com/7GGhfjm.png",alt:"",className:a.image}),Object(N.jsx)(h.a,{variant:"h6",className:a.step,children:'5. \u7e7c\u7e8c\u5b8c\u6210\u4e0a\u65b9\u7684\u8868\u683c\u5f8c\uff0c\u4f9d\u7167\u6307\u793a\u5c07 "LINE Notify" \u5e33\u865f\u52a0\u5165\u7fa4\u7d44\u5c31\u5b8c\u6210\u8a2d\u5b9a\u4e86!'}),Object(N.jsx)("img",{src:"https://i.imgur.com/CDYEWJ5.png",alt:"",className:a.image})]})]})},C=Object(j.a)((function(e){return{formOuter:{paddingTop:e.spacing(8)},form:{width:"100%",marginTop:e.spacing(3)}}})),S=function(e){var t=e.setToggle,a=e.clearAllValues,i=e._name,n=e._type,r=e._data,o=e._id,l=Object(c.useContext)(ie),j=Object(c.useState)(i||""),y=Object(s.a)(j,2),w=y[0],S=y[1],W=Object(c.useState)(n||"discord"),L=Object(s.a)(W,2),D=L[0],A=L[1],T=Object(c.useState)(r||""),_=Object(s.a)(T,2),B=_[0],F=_[1],H=function(){S(""),A("discord"),F(""),t((function(e){return!e})),a()},P=C();return Object(N.jsxs)(d.a,{maxWidth:"sm",children:[Object(N.jsx)(b.a,{}),Object(N.jsxs)("div",{className:P.formOuter,children:[Object(N.jsx)(h.a,{variant:"h4",children:Object(N.jsx)("b",{children:"\u65b0\u589e nowotify"})}),Object(N.jsx)("form",{className:P.form,noValidate:!0,children:Object(N.jsxs)(m.a,{container:!0,spacing:2,children:[Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)(x.a,{component:"legend",children:"\u901a\u77e5\u5e73\u53f0"}),Object(N.jsxs)(O.a,{value:D,onChange:function(e){return A(e.target.value)},children:[Object(N.jsx)(p.a,{value:"discord",control:Object(N.jsx)(g.a,{}),label:"Discord"}),Object(N.jsx)(p.a,{value:"line",control:Object(N.jsx)(g.a,{}),label:"Line"})]})]})}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{variant:"outlined",fullWidth:!0,label:"\u7fa4\u7d44\u540d\u7a31",value:w,onChange:function(e){return S(e.target.value)}})}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{variant:"outlined",fullWidth:!0,label:"discord"===D?"Discord Webhook url":"Line Notify token",value:B,onChange:function(e){return F(e.target.value)}})}),Object(N.jsx)(m.a,{item:!0,xs:6,children:Object(N.jsx)(v.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:H,children:"\u53d6\u6d88"})}),Object(N.jsx)(m.a,{item:!0,xs:6,children:Object(N.jsx)(v.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:!w.length||!B.length,onClick:function(){w.length&&B.length&&(!function(e){var t=e.name,a=e.data,c=e.type,i=e.uid,n=e.id;n.length?ae.collection("links").doc(n).update({name:t,type:c,data:a,uid:i}):ae.collection("links").add({name:t,type:c,data:a,uid:i})}({name:w,type:D,data:B,uid:l.uid,id:o}),H())},children:o.length?"\u66f4\u65b0 !":"\u65b0\u589e !"})})]})}),Object(N.jsx)(k,{type:D})]})]})},W=a(132),L=a(68),D=a(133),A=a(134),T=Object(j.a)({card:{display:"flex"},cardDetails:{flex:1,textAlign:"center",height:"100%",width:"100%"},cardButton:{height:"100%",width:"100%"}}),_=function(e){var t=e.setToggle,a=T();return Object(N.jsx)(i.a.Fragment,{children:Object(N.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(W.a,{className:a.card,children:Object(N.jsx)("div",{className:a.cardDetails,children:Object(N.jsx)(L.a,{className:a.cardButton,onClick:function(){return t((function(e){return!e}))},children:Object(N.jsx)(D.a,{component:"div",children:Object(N.jsx)(A.a,{children:Object(N.jsx)(h.a,{component:"h2",variant:"h4",children:"\u65b0\u589e nowotify"})})})})})})})})},B=a(42),F=a.n(B),H=a(53),P=function(){var e=Object(H.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new o.a.auth.GoogleAuthProvider,e.next=3,ce.signInWithRedirect(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(H.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.signOut();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=a(135),I=a(142),z=Object(j.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},avatar:{marginLeft:e.spacing(1)}}})),R=function(){var e=Object(c.useContext)(ie),t=z();return Object(N.jsx)(i.a.Fragment,{children:Object(N.jsxs)(E.a,{className:t.toolbar,children:[Object(N.jsx)(h.a,{component:"h2",variant:"h4",color:"inherit",noWrap:!0,className:t.toolbarTitle,children:"CLHS nowotify"}),Object(N.jsx)(v.a,{variant:"contained",size:"small",onClick:V,children:"Sign out"}),Object(N.jsx)(I.a,{alt:e.displayName||"",src:e.photoURL||"",className:t.avatar})]})})},G=a(136),J=Object(j.a)({card:{display:"flex"},cardDetails:{flex:1}}),M=function(e){var t=e.link,a=e.setToggle,c=e.setAllValues,n=J();return Object(N.jsx)(i.a.Fragment,{children:Object(N.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(W.a,{className:n.card,children:Object(N.jsxs)("div",{className:n.cardDetails,children:[Object(N.jsxs)(A.a,{children:[Object(N.jsx)(h.a,{component:"h2",variant:"h5",children:t.name}),Object(N.jsx)(h.a,{variant:"subtitle1",color:"textSecondary",children:"discord"===t.type?"Discord webhook":"Line notify"})]}),Object(N.jsxs)(G.a,{children:[Object(N.jsx)(v.a,{variant:"contained",size:"medium",color:"primary",onClick:function(){c(t.name,t.type,t.data,t.id),a(!0)},children:"Edit"}),Object(N.jsx)(v.a,{variant:"contained",size:"medium",color:"secondary",onClick:function(){var e;window.confirm("\u78ba\u8a8d\u522a\u9664")&&(e=t.id,ae.collection("links").doc(e).delete())},children:"Delete"})]})]})})})})},K=a(15),Y=a(92),Q=Object(j.a)((function(e){return{mainFeaturedPost:{marginTop:e.spacing(3),position:"relative",color:e.palette.common.white,marginBottom:e.spacing(3),backgroundImage:"url(https://i.imgur.com/VJCh79a.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.7)"},mainFeaturedPostContent:Object(K.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}})),U=function(e){var t=e.with_login,a=Q();return Object(N.jsx)(i.a.Fragment,{children:Object(N.jsxs)(Y.a,{className:a.mainFeaturedPost,children:[Object(N.jsx)("div",{className:a.overlay}),Object(N.jsx)(m.a,{container:!0,children:Object(N.jsx)(m.a,{item:!0,md:6,children:Object(N.jsxs)("div",{className:a.mainFeaturedPostContent,children:[Object(N.jsx)(h.a,{variant:"h5",color:"inherit",paragraph:!0,children:"\u4f7f\u7528 Discord / Line \u53ca\u6642\u63a5\u6536\u58e2\u4e2d\u5b98\u7db2\u516c\u544a"}),Object(N.jsx)(h.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:Object(N.jsx)("b",{children:"CLHS nowotify"})}),t&&Object(N.jsx)(v.a,{variant:"contained",onClick:P,size:"large",children:"\u4f7f\u7528Google\u5e33\u865f\u767b\u5165\u8a2d\u5b9a\u9801\u9762"})]})})})]})})},q=Object(j.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160},image_outer:{display:"flex",flexDirection:"column",justifyContent:"center"},image:{maxWidth:"100%"}}),X=function(){var e=q();return Object(N.jsx)("div",{children:Object(N.jsxs)(d.a,{maxWidth:"lg",children:[Object(N.jsx)(U,{with_login:!0}),Object(N.jsx)(h.a,{component:"h2",variant:"h4",color:"textPrimary",children:"\u87a2\u5e55\u622a\u5716"}),Object(N.jsxs)(m.a,{container:!0,spacing:4,children:[Object(N.jsx)(m.a,{item:!0,xs:12,md:6,className:e.image_outer,children:Object(N.jsx)(D.a,{component:"div",children:Object(N.jsx)("img",{src:"https://i.imgur.com/po8mLk0.png",alt:"",className:e.image})})}),Object(N.jsx)(m.a,{item:!0,xs:12,md:6,className:e.image_outer,children:Object(N.jsx)(D.a,{component:"div",children:Object(N.jsx)("img",{src:"https://i.imgur.com/Y6nEr9j.png",alt:"",className:e.image})})})]}),Object(N.jsx)(h.a,{component:"h2",variant:"h4",color:"textPrimary",children:"\u539f\u59cb\u78bc"}),Object(N.jsxs)(m.a,{container:!0,spacing:4,children:[Object(N.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(D.a,{component:"a",href:"https://github.com/BWsix/CLHS-nowotify",children:Object(N.jsx)(W.a,{className:e.card,children:Object(N.jsx)("div",{className:e.cardDetails,children:Object(N.jsxs)(A.a,{children:[Object(N.jsx)(h.a,{component:"h2",variant:"h5",children:"source code - client side"}),Object(N.jsx)(h.a,{variant:"subtitle1",color:"textSecondary",children:"typescript-react + material-ui"}),Object(N.jsx)(h.a,{variant:"subtitle1",paragraph:!0,children:"\u6975\u5ea6\u9700\u8981\u5e6b\u52a9\uff0c\u6211\u7684\u7f8e\u611f\u5c11\u7684\u6709\u9ede\u53ef\u6190"}),Object(N.jsx)(h.a,{variant:"subtitle1",color:"secondary",children:"\u524d\u5f80github(CLHS-nowotify)"})]})})})})}),Object(N.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(D.a,{component:"a",href:"https://github.com/BWsix/CLHS-nowotify-server",children:Object(N.jsx)(W.a,{className:e.card,children:Object(N.jsx)("div",{className:e.cardDetails,children:Object(N.jsxs)(A.a,{children:[Object(N.jsx)(h.a,{component:"h2",variant:"h5",children:"source code - server side"}),Object(N.jsx)(h.a,{variant:"subtitle1",color:"textSecondary",children:"python + firebase"}),Object(N.jsx)(h.a,{variant:"subtitle1",paragraph:!0,children:"\u96d6\u7136\u5f8c\u7aef\u6709\u597d\u4e00\u4e9b\uff0c\u4f46\u9084\u662f\u9700\u8981\u5e6b\u52a9"}),Object(N.jsx)(h.a,{variant:"subtitle1",color:"secondary",children:"\u524d\u5f80github(CLHS-nowotify-server)"})]})})})})})]})]})})},Z=a(54),$=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)("discord"),r=Object(s.a)(n,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(s.a)(j,2),b=d[0],h=d[1],m=Object(c.useState)(""),u=Object(s.a)(m,2),x=u[0],O=u[1];return{name:a,type:o,data:b,id:x,setAllValues:function(e,t,a,c){i(e),l(t),h(a),O(c)},clearAllValues:function(){i(""),l("discord"),h(""),O("")}}}(),o=r.name,l=r.type,j=r.data,d=r.id,h=r.setAllValues,u=r.clearAllValues,x=function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),i=a[0],n=a[1];return Object(c.useEffect)((function(){return ae.collection("links").where("uid","==",e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(Z.a)(Object(Z.a)({},e.data()),{},{id:e.id}))})),n(t)}))}),[]),i}(Object(c.useContext)(ie).uid);return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(b.a,{}),a?Object(N.jsx)(S,{setToggle:n,clearAllValues:u,_name:o,_type:l,_data:j,_id:d}):Object(N.jsxs)(m.a,{container:!0,spacing:4,children:[x.map((function(e){return Object(N.jsx)(M,{link:e,setAllValues:h,setToggle:n},e.id)})),Object(N.jsx)(_,{setToggle:n})]})]})},ee=a(65),te=a(137);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyAxwr8SWBKi76W6OnDt6D18bL5HCezkILM",authDomain:"clhs-nowotify.firebaseapp.com",projectId:"clhs-nowotify",storageBucket:"clhs-nowotify.appspot.com",messagingSenderId:"444119791112",appId:"1:444119791112:web:6d03dd86b7af65018643bd"});var ae=o.a.firestore(),ce=o.a.auth(),ie=i.a.createContext({}),ne=function(){var e=Object(l.a)(ce),t=Object(s.a)(e,3),a=t[0],c=t[1];if(t[2])return Object(N.jsx)(N.Fragment,{children:"error"});if(c)return Object(N.jsx)(N.Fragment,{children:"loading"});var i=Object(ee.a)({palette:{type:"dark"}});return Object(N.jsx)(te.a,{theme:i,children:a?Object(N.jsx)(ie.Provider,{value:a,children:Object(N.jsxs)(d.a,{maxWidth:"lg",children:[Object(N.jsx)(R,{}),Object(N.jsx)(U,{}),Object(N.jsx)($,{})]})}):Object(N.jsx)(X,{})})};r.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(ne,{})}),document.getElementById("root"))}},[[89,1,2]]]);