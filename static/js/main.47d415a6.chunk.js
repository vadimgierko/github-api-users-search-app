(this["webpackJsonpgithub-api-users-search-app"]=this["webpackJsonpgithub-api-users-search-app"]||[]).push([[0],{24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(15),n=s.n(r),i=s(7),o=(s(22),s(23),s(24),s(2)),l=s(9),j=s(0);function b(e){return Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h3",{className:"text-center",children:e.userName})}),Object(j.jsx)("img",{className:"card-img-top",src:e.avatarSrc}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("p",{className:"text-primary",children:[Object(j.jsx)("strong",{children:"Location:"})," ",e.location]}),Object(j.jsxs)("p",{className:"text-primary",children:[Object(j.jsx)("strong",{children:"Public repositories:"})," ",e.reposNum]})]}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Bio:"})," ",e.bio]})})]})})}function d(e){var t=e.repoData,s=e.userName;if(t){var c="https://".concat(s,".github.io/").concat(t.name,"/");return Object(j.jsxs)("div",{className:"card me-n3",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("p",{className:"font-weight-bold",children:t.has_pages?Object(j.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:t.name}):Object(j.jsx)("a",{href:t.html_url,target:"_blank",rel:"noreferrer",children:t.name})})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Description:"})," ",t.description,"."]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Language:"})," ",t.language,"."]})]}),Object(j.jsxs)("div",{className:"card-footer",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Created at"})," ",t.created_at]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Last updated at"})," ",t.updated_at]})]})]})}return null}function h(e){var t=e.repo1,s=e.repo2,c=e.userName;return console.log("ReposGroup got data:"),console.log(t),console.log(s),Object(j.jsxs)("div",{className:"card-deck mb-2",style:{width:"100%"},children:[Object(j.jsx)(d,{repoData:t,userName:c}),Object(j.jsx)(d,{repoData:s,userName:c})]})}function u(e){var t=e.reposData,s=e.userName;console.log(t);for(var c=t.slice(),a=[],r=0;r<c.length;r++)0===r||r%2===0?(a.push([]),a[r/2].push(c[r])):1!==r&&r%2!==1||a[Math.floor(r/2)].push(c[r]);return console.log(a),Object(j.jsx)("div",{className:"col-md-8",children:a.map((function(e,t){return console.log(e[0]),console.log(e[1]),Object(j.jsx)(h,{repo1:e[0],repo2:e[1],userName:s})}))})}function p(){var e=Object(o.f)().userName;console.log(e);var t=Object(c.useState)(),s=Object(l.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)(),i=Object(l.a)(n,2),d=i[0],h=i[1];return Object(c.useEffect)((function(){e&&(fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)})),fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(e){console.log(e),h(e)})))}),[e]),a&&d?Object(j.jsxs)("div",{className:"row",style:{marginTop:70},children:[Object(j.jsx)(b,{userName:a.login,avatarSrc:a.avatar_url,location:a.location,reposNum:a.public_repos,bio:a.bio}),Object(j.jsx)(u,{reposData:d,userName:e})]}):null}function x(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),s=t[0],a=t[1],r=function(){a(!s)},n=Object(c.useState)(),o=Object(l.a)(n,2),b=o[0],d=o[1];return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary fixed-top",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("span",{className:"navbar-brand mb-0 h1",children:[Object(j.jsx)("i",{className:"bi bi-github me-2"}),Object(j.jsx)(i.b,{to:"/",className:"text-reset",style:{textDecoration:"none"},children:"GitHub API Users Search App"})]}),Object(j.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":!!s,"aria-label":"Toggle navigation",onClick:r,children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"".concat(s?"collapse":null," navbar-collapse "),id:"navbarColor01",children:[Object(j.jsx)("ul",{className:"navbar-nav me-auto",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/about",onClick:s?null:function(){return r()},children:"About"})})}),Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{type:"text",placeholder:"github user's name here",className:"form-control me-2",onChange:function(e){return d(e.target.value)}}),Object(j.jsx)(i.b,{to:"/".concat(b),type:"button",className:"btn btn-primary",onClick:s?null:function(){return r()},children:Object(j.jsx)("i",{className:"bi bi-search"})})]})]})]})})}function O(){return Object(j.jsxs)("div",{style:{marginTop:70},children:[Object(j.jsx)("h1",{children:"What is  GitHub API Users Searching App?"}),Object(j.jsx)("p",{children:"This SPA allows you to find & view any user's basic profile info & public repositories published on GitHub!"}),Object(j.jsx)("h3",{children:"How to use this App?"}),Object(j.jsx)("p",{children:"Input the correct GitHub User username in search field or... add it after slash to app's url (for example: https://vadimgierko.github.io/github-api-users-search-app/vadimgierko) & you will see:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"user's current bio & location"}),Object(j.jsx)("li",{children:"the number of user's open source projects (public repositories)"}),Object(j.jsx)("li",{children:"user's projects' detailes: description, language & link to project's github pages if available or source code if not ;-)"})]}),Object(j.jsx)("h3",{children:"Technologies used in this project:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"React 17 (create-react-app, hooks, functional components only)"}),Object(j.jsx)("li",{children:"React Router DOM 5.3 (dynamic routing)"}),Object(j.jsx)("li",{children:"Bootstrap 5.1"}),Object(j.jsx)("li",{children:"GitHub API"}),Object(j.jsx)("li",{children:"gh-pages deployment"})]}),Object(j.jsx)("h5",{children:"Note:"}),Object(j.jsxs)("p",{children:["This is the newest version of the app. ",Object(j.jsx)("a",{href:"https://github.com/vadimgierko/GitHub-Users-Search-App",children:"Previous version"})," was built without using create-react-app. Current version is built with create-react-app & gh-pages deployment."]})]})}function m(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/about",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/:userName",children:Object(j.jsx)(p,{})})]})})]})}n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(m,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.47d415a6.chunk.js.map