(this["webpackJsonpgithub-api-users-search-app"]=this["webpackJsonpgithub-api-users-search-app"]||[]).push([[0],{24:function(e,s,t){},31:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),r=t(15),n=t.n(r),i=t(7),o=(t(22),t(23),t(24),t(2)),l=t(9),j=t(0);function b(e){return Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h3",{className:"text-center",children:e.userName})}),Object(j.jsx)("img",{className:"card-img-top",src:e.avatarSrc}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("p",{className:"text-primary",children:[Object(j.jsx)("strong",{children:"Location:"})," ",e.location]}),Object(j.jsxs)("p",{className:"text-primary",children:[Object(j.jsx)("strong",{children:"Public repositories:"})," ",e.reposNum]})]}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Bio:"})," ",e.bio]})})]})})}function h(e){var s=e.repoData,t=e.userName;if(s){var c="https://".concat(t,".github.io/").concat(s.name,"/");return Object(j.jsxs)("div",{className:"card me-n3",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("p",{className:"font-weight-bold",children:s.has_pages?Object(j.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:s.name}):Object(j.jsx)("a",{href:s.html_url,target:"_blank",rel:"noreferrer",children:s.name})})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Description:"})," ",s.description,"."]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Language:"})," ",s.language,"."]})]}),Object(j.jsxs)("div",{className:"card-footer",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Created at"})," ",s.created_at]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Last updated at"})," ",s.updated_at]})]})]})}return null}function u(e){var s=e.repo1,t=e.repo2,c=e.userName;return console.log("ReposGroup got data:"),console.log(s),console.log(t),Object(j.jsxs)("div",{className:"card-deck mb-2",style:{width:"100%"},children:[Object(j.jsx)(h,{repoData:s,userName:c}),Object(j.jsx)(h,{repoData:t,userName:c})]})}function d(e){var s=e.reposData,t=e.userName;console.log(s);for(var c=s.slice(),a=[],r=0;r<c.length;r++)0===r||r%2===0?(a.push([]),a[r/2].push(c[r])):1!==r&&r%2!==1||a[Math.floor(r/2)].push(c[r]);return console.log(a),Object(j.jsx)("div",{className:"col-md-8",children:a.map((function(e,s){return console.log(e[0]),console.log(e[1]),Object(j.jsx)(u,{repo1:e[0],repo2:e[1],userName:t})}))})}function p(){var e=Object(o.f)().userName;console.log(e);var s=Object(c.useState)(),t=Object(l.a)(s,2),a=t[0],r=t[1],n=Object(c.useState)(),i=Object(l.a)(n,2),h=i[0],u=i[1];return Object(c.useEffect)((function(){e&&(fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)})),fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})))}),[e]),a&&h?Object(j.jsxs)("div",{className:"row",style:{marginTop:70},children:[Object(j.jsx)(b,{userName:a.login,avatarSrc:a.avatar_url,location:a.location,reposNum:a.public_repos,bio:a.bio}),Object(j.jsx)(d,{reposData:h,userName:e})]}):null}function x(){var e=Object(c.useState)(!0),s=Object(l.a)(e,2),t=s[0],a=s[1],r=function(){a(!t)},n=Object(c.useState)(),o=Object(l.a)(n,2),b=o[0],h=o[1];return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary fixed-top",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("span",{className:"navbar-brand mb-0 h1",children:[Object(j.jsx)("i",{className:"bi bi-github me-2"}),Object(j.jsx)(i.b,{to:"/",className:"text-reset",style:{textDecoration:"none"},children:"GitHub API Users Search App"})]}),Object(j.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":!!t,"aria-label":"Toggle navigation",onClick:r,children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"".concat(t?"collapse":null," navbar-collapse "),id:"navbarColor01",children:[Object(j.jsx)("ul",{className:"navbar-nav me-auto",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/github-api-users-search-app/about",onClick:t?null:function(){return r()},children:"About"})})}),Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{type:"text",placeholder:"github user's name here",className:"form-control me-2",onChange:function(e){return h(e.target.value)}}),Object(j.jsx)(i.b,{to:"/github-api-users-search-app/".concat(b),type:"button",className:"btn btn-primary",onClick:t?null:function(){return r()},children:Object(j.jsx)("i",{className:"bi bi-search"})})]})]})]})})}function O(){return Object(j.jsxs)("div",{style:{marginTop:70},children:[Object(j.jsx)("h1",{children:"What is  GitHub API Users Searching App?"}),Object(j.jsx)("p",{children:"This SPA allows you to find & view any user's basic profile info & public repositories published on GitHub!"}),Object(j.jsx)("h3",{children:"How to use this App?"}),Object(j.jsx)("p",{children:"Input the correct GitHub User username in search field or... add it after slash to app's url (for example: https://vadimgierko.github.io/github-api-users-search-app/vadimgierko) & you will see:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"user's current bio & location"}),Object(j.jsx)("li",{children:"the number of user's open source projects (public repositories)"}),Object(j.jsx)("li",{children:"user's projects' detailes: description, language & link to project's github pages if available or source code if not ;-)"})]}),Object(j.jsx)("h3",{children:"Technologies used in this project:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"React 17 (create-react-app, hooks, functional components only)"}),Object(j.jsx)("li",{children:"React Router DOM 5.3 (dynamic routing)"}),Object(j.jsx)("li",{children:"Bootstrap 5.1"}),Object(j.jsx)("li",{children:"GitHub API"}),Object(j.jsx)("li",{children:"gh-pages deployment"})]}),Object(j.jsx)("h5",{children:"Note:"}),Object(j.jsxs)("p",{children:["This is the newest version of the app. ",Object(j.jsx)("a",{href:"https://github.com/vadimgierko/GitHub-Users-Search-App",children:"Previous version"})," was built without using create-react-app. Current version is built with create-react-app & gh-pages deployment."]})]})}function m(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/github-api-users-search-app/",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/github-api-users-search-app/about",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/github-api-users-search-app/:userName",children:Object(j.jsx)(p,{})})]})})]})}n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(m,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8817611d.chunk.js.map