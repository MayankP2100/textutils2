(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(17),l=a.n(o),c=(a(28),a(3)),s=(a(30),a(9));function i(e){var t=Object(n.useState)(!0),a=Object(c.a)(t,2),o=a[0],l=a[1];return r.a.createElement("nav",{className:"navbar p-1",style:e.setTheme},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"navbar-brand fw-semibold fs-2",style:e.setTheme},e.brand),r.a.createElement("form",{className:"me-auto fw-semibold"},r.a.createElement(s.b,{className:"navbar-brand",to:"/",style:e.setTheme},"Home"),r.a.createElement(s.b,{className:"navbar-brand",to:"/about",style:e.setTheme},e.about)),r.a.createElement("div",{className:"form-check form-switch form-check-reverse"},r.a.createElement("input",{className:"form-check-input my-2",type:"checkbox",id:"flexSwitchCheckReverse",onChange:function(){!1===o?(l(!0),e.sendDataToParent(o)):!0===o&&(l(!1),e.sendDataToParent(o))}}),r.a.createElement("label",{className:"form-check-label fw-semibold fs-5",htmlFor:"flexSwitchCheckReverse"},"Toggle Theme"))))}var m=a(5),u=a.n(m),b=a(18),d=a.n(b);function f(e){var t=Object(n.useState)("Hello, I'm a text."),a=Object(c.a)(t,2),o=a[0],l=a[1],s=d()(o),i=o.length;return r.a.createElement("div",{className:"container my-4",style:e.setThemeBody},r.a.createElement("h1",{className:"my-3"},"Enter text here to analyze"),r.a.createElement("div",{className:"form-floating"},r.a.createElement("textarea",{className:"form-control fs-4",id:"floatingTextarea2",style:e.setThemeTextarea,value:o,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"container btn-group-vertical my-4",role:"group","aria-label":"Vertical button group"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic outlined example"},r.a.createElement("button",{type:"button",className:"btn btn-primary p-3 fw-semibold fs-5 text-start",style:e.setUpperButtonTheme,onClick:function(){var e=o.toUpperCase();l(e)}},"Convert to UPPERCASE"),r.a.createElement("button",{type:"button",className:"btn btn-primary p-3 fw-semibold fs-5 text-center",style:e.setUpperButtonTheme,onClick:function(){var e=o.toLowerCase();l(e)}},"Convert to lowercase"),r.a.createElement("button",{type:"button",className:"btn btn-primary p-3 fw-semibold fs-5 text-end",style:e.setUpperButtonTheme,onClick:function(){l("")}},"Clear Text")),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic outlined example"},r.a.createElement("button",{type:"button",className:"btn btn-success p-3 fw-semibold fs-5 text-start",style:e.setLowerButtonTheme,onClick:function(){var e=o;e=e.replace(/\s+/g," "),l(e)}},"Remove Extra Spaces"),r.a.createElement("button",{type:"button",className:"btn btn-success p-3 fw-semibold fs-5 text-center",style:e.setLowerButtonTheme,onClick:function(){var e=o.repeat(2);l(e)}},"Repeat Text"),r.a.createElement("button",{type:"button",className:"btn btn-success p-3 fw-semibold fs-5 text-end",style:e.setLowerButtonTheme,onClick:function(){var e=o;navigator.clipboard.writeText(e)}},"Copy Text"))),r.a.createElement("hr",{className:"my-1 border-3"}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Text Summary"),r.a.createElement("pre",{className:"fs-5"},"Words: ",s," | Characters: ",i,r.a.createElement("br",null),"Minutes to read: ",.008*s),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",{className:"fs-4",style:{textAlign:"justify"}},o.length>0?o:"Enter something in the textbox above.")))}function h(e){return r.a.createElement("div",{className:"container my-4"},r.a.createElement("h1",{className:"fw-semibold text-center"},"About Me"),r.a.createElement("div",{class:"card container p-2",style:e.setCardTheme},r.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/74498800",class:"card-img-top",alt:"Github Avatar"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},"Dev - Mayank Pal"),r.a.createElement("p",{class:"card-text fw-light"},"He/Him")),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item",style:e.setCardInfoTheme},"Some of my public projects are on my"," ",r.a.createElement("a",{className:"link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover",href:"https://github.com/MayankP2100"},"github"),"."),r.a.createElement("li",{class:"list-group-item",style:e.setCardInfoTheme},"How to reach me: ",r.a.createElement("br",null)," Discord: may.balls | Instagram:"," ",r.a.createElement("a",{className:"link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover",href:"https://www.instagram.com/mayank._.2100/"},"mayank._.2100")),r.a.createElement("br",null))))}var p=a(0);var g=function(){var e,t,a,o,l,m,b,d,g=Object(n.useState)(!1),E=Object(c.a)(g,2),v=E[0],y=E[1],k={brand:u.a.string.isRequired,about:u.a.string.isRequired,setTheme:u.a.object.isRequired,sendDataToParent:u.a.func.isRequired},T={setThemeBody:u.a.object.isRequired,setThemeTextarea:u.a.object.isRequired,setUpperButtonTheme:u.a.object.isRequired,setLowerButtonTheme:u.a.object.isRequired},C={setCardTheme:u.a.object.isRequired,setCardInfoTheme:u.a.object.isRequired};return!0===v?(e={backgroundColor:"#3e3e42",color:"#fff"},t={backgroundColor:"#333333",color:"#fff"},a={height:"200px",backgroundColor:"#555555",color:"#D3D3D3"},o={backgroundColor:"#3e3e42",color:"#fff",height:"100vh",width:"100vw"},b={backgroundColor:"#343434",color:"#D3D3D3"},d={backgroundColor:"#343434",color:"#D3D3D3"},l={backgroundColor:"#636262",color:"#fff",width:"fit-content"},m={backgroundColor:"#636262",color:"#fff",width:"fit-content"}):!1===v&&(e={backgroundColor:"#B8CFFB",color:"#000000"},t={backgroundColor:"#8AB0F9",color:"#000000"},a={height:"200px",backgroundColor:"#E9FBFA",color:"#000000"},o={backgroundColor:"#B8CFFB",color:"#000000",height:"100vh",width:"100vw"},b={backgroundColor:"blue",color:"white"},d={backgroundColor:"green",color:"white"},l={backgroundColor:"#ecf4fe",color:"#000000",width:"fit-content"},m={backgroundColor:"#ecf4fe",color:"#000000",width:"fit-content"}),k.setTheme=t,k.sendDataToParent=function(e){y(e),console.log(v)},k.brand="TextUtils2",k.about="About",T.setThemeBody=e,T.setThemeTextarea=a,T.setUpperButtonTheme=b,T.setLowerButtonTheme=d,C.setCardTheme=l,C.setCardInfoTheme=m,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("div",{style:o},r.a.createElement(i,k),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",element:r.a.createElement(f,T)}),r.a.createElement(p.a,{path:"/about",element:r.a.createElement(h,C)})))))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null))),E()}},[[19,3,2]]]);
//# sourceMappingURL=main.b7d8b2df.chunk.js.map