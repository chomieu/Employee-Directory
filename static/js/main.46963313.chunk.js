(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(12),r=s.n(c),o=s(0);function l(){return Object(o.jsxs)("div",{className:"jumbotron text-center m-0",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("p",{className:"lead",children:'Click on "Name" to toggle sort or use the search box to narrow your results.'})]})}var i=s(13),d=s(14),h=s(15),j=s(18),m=s(17);var u=function(e){return Object(o.jsx)("form",{className:"d-flex justify-content-center bg-light p-3",children:Object(o.jsx)("input",{className:"form-control w-50",id:"search",name:"search",placeholder:"Search Employee",value:e.search,onChange:e.handleInputChange})})};function p(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Image"}),Object(o.jsx)("th",{scope:"col",onClick:e.reverseEmployees,children:"Name"}),Object(o.jsx)("th",{scope:"col",children:"Phone"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"DOB"})]})}function b(e){return Object(o.jsxs)("tr",{scope:"row",children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.data.picture.thumbnail})}),Object(o.jsxs)("td",{className:"align-middle",children:[e.data.name.first," ",e.data.name.last]}),Object(o.jsx)("td",{className:"align-middle",children:e.data.phone}),Object(o.jsx)("td",{className:"align-middle",children:e.data.email}),Object(o.jsx)("td",{className:"align-middle",children:e.data.dob.date.toString().substring(0,10)})]})}var O=s(16),x=s.n(O),f={getRandom:function(){return x.a.get("https://randomuser.me/api/?results=20&nat=us")}},y=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[]},e.handleInputChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(i.a)({},n,a))},e.getEmployees=function(){f.getRandom().then((function(t){e.setState({employees:t.data.results}),e.sortEmployees()})).catch((function(e){console.log(e)}))},e.sortEmployees=function(){var t=e.state.employees.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?-1:1}));e.setState({employees:t})},e.reverseEmployees=function(){var t=e.state.employees.reverse();e.setState({employees:t})},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(u,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsx)(p,{reverseEmployees:this.reverseEmployees})}),Object(o.jsx)("tbody",{children:this.state.employees.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last).toLowerCase().includes(e.state.search.toLowerCase())})).map((function(t){return Object(o.jsx)(b,{data:t},e.state.employees.indexOf(t))}))})]})]})}}]),s}(n.Component);var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(y,{})]})};s(42);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.46963313.chunk.js.map