(this["webpackJsonpauth-system-react"]=this["webpackJsonpauth-system-react"]||[]).push([[0],{27:function(e,a,t){e.exports=t(42)},32:function(e,a,t){},33:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(25),o=t.n(s),c=(t(32),t(6)),l=t(7),i=t(8),m=t(9),p=(t(33),t(10)),u=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Este es el home.")}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return console.log("Hola2"),r.a.createElement("div",null,"Error 404 Not Found Page.")}}]),t}(n.Component),h=t(1),v=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(u,null)),r.a.createElement(h.a,{path:"*"},r.a.createElement(b,null)))),d=t(19);t(38);d.initializeApp({apiKey:"AIzaSyBVdLFVxFB59Ee-oYAar4IM-JB1ETJuBjo",authDomain:"auth-system-react.firebaseapp.com",databaseURL:"https://auth-system-react.firebaseio.com",projectId:"auth-system-react",storageBucket:"auth-system-react.appspot.com",messagingSenderId:"346641420723",appId:"1:346641420723:web:516d4f8678479e181bbbc6"});var E=d,g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props||"hola",a=e.appname,t=e.user;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},a),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/tasks"},"Tasks")))),r.a.createElement("span",{className:"my-2 my-lg-0"},"Bienvenido: ",t.name))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).componentDidMount=function(){var a="";e.state.db.collection("app").get().then((function(t){t.forEach((function(t){a=t.data().name,e.setState({appname:a})}))})),console.log(a)},e.state={appname:"loading...",db:E.firestore()},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.appname;return r.a.createElement(p.a,null,r.a.createElement(g,{appname:e,user:{name:"Kliver"}}),r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",integrity:"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.4.1.slim.min.js",integrity:"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",integrity:"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",integrity:"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",crossOrigin:"anonymous"}),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),v))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0fbeded1.chunk.js.map