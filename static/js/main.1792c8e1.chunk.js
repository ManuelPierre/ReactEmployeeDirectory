(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){},51:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(0),c=n.n(s),a=n(18),i=n.n(a),o=(n(31),n(9)),d=n.n(o),l=n(19),j=n(20),u=n(21),h=n(24),b=n(23),f=n(22),O=n.n(f),p=function(){return O.a.get("https://randomuser.me/api/?results=30&nat=us")},x=(n(50),n(51),n(60)),m=n(61),v=n(62),g=n(59);var U=function(e){return Object(r.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Picture"}),Object(r.jsx)("th",{children:"First Name"}),Object(r.jsx)("th",{children:"Last Name"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Gender"}),Object(r.jsx)("th",{children:"Phone"})]})}),Object(r.jsx)("tbody",{children:e.randomUsers.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+1}),Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:e.picture.thumbnail})}),Object(r.jsx)("td",{children:e.name.first}),Object(r.jsx)("td",{children:e.name.last}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.gender}),Object(r.jsx)("td",{children:e.phone})]},t)}))})]})},y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={randomUsers:[],filteredUsers:[]},e.getRandomUsers=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:n=t.sent,console.log(n.data.results),e.setState({randomUsers:n.data.results,filteredUsers:n.data.results}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.warn(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.handleSearch=function(t){console.log(t.target.value);var n=t.target.value;e.setState({filteredUsers:e.state.randomUsers.filter((function(e){return e.name.first.includes(n)}))})},e.sortByAsc=function(t){console.log("clicked!");var n=e.state.filteredUsers;n.sort((function(e,t){var n=e.name.first.toUpperCase(),r=t.name.first.toUpperCase();return n<r?-1:n>r?1:0})),e.setState({filteredUsers:n})},e.sortByDesc=function(t){console.log("clicked!");var n=e.state.filteredUsers;n.sort((function(e,t){var n=e.name.first.toUpperCase(),r=t.name.first.toUpperCase();return n>r?-1:n<r?1:0})),e.setState({filteredUsers:n})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getRandomUsers()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(x.a,{className:"mb-3",children:[Object(r.jsx)(m.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(t){return e.handleSearch(t)}}),Object(r.jsx)(x.a.Append,{children:Object(r.jsx)(v.a,{variant:"outline-secondary",children:"Search"})})]}),"Sort:",Object(r.jsx)(v.a,{variant:"outline-secondary",onClick:function(t){return e.sortByAsc(t)},children:"asc"}),Object(r.jsx)(v.a,{variant:"outline-secondary",onClick:function(t){return e.sortByDesc(t)},children:"desc"}),Object(r.jsx)(U,{randomUsers:this.state.filteredUsers})]})}}]),n}(c.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(57);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),C()}},[[58,1,2]]]);
//# sourceMappingURL=main.1792c8e1.chunk.js.map