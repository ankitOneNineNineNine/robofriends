(this.webpackJsonprobojs=this.webpackJsonprobojs||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n(3),s=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13),n(14);var a=n(4),i=n(5),h=n(7),l=n(6),b=function(e){var t=e.name,n=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsxs)("p",{children:[" ",n," "]})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(b,{name:t[n].name,id:t[n].id,email:t[n].email},n)}));return Object(r.jsx)("div",{children:n})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=(n(15),function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"80vh"},children:e.children})}),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.title="RoboFriends - Ankit Pradhan",fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:" RoboFriends "}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(u,{children:Object(r.jsx)(d,{robots:o})})]}):Object(r.jsx)("h1",{children:"LOADING "})}}]),n}(o.Component);s.a.render(Object(r.jsx)(m,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7f3ce5b1.chunk.js.map