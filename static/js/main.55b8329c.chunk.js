(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(25),r=n.n(c),i=n(10),o=n(2),j=n(13),l=n.n(j),d=n(26),m=n(27),u=n(28),h=n(32),b=n(31),v=n(29),O=n.n(v),x=n(1);var p=function(e){e.id;var t=e.year,n=e.title,s=e.summary,a=e.poster,c=e.genres;return Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsx)("img",{src:a,alt:n,title:n}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("h3",{className:"movie__title",children:n}),Object(x.jsx)("h5",{className:"movie__year",children:t}),Object(x.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(x.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(x.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})},_=(n(57),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(x.jsx)("section",{className:"container",children:t?Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(x.jsx)("div",{className:"movies",children:n.map((function(e){return Object(x.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));n(58);var f=function(){return Object(x.jsxs)("div",{className:"about__container",children:[Object(x.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(x.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};n(59);var g=function(){return Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(i.b,{to:"/",children:"Home"}),Object(x.jsx)(i.b,{to:"/about",children:"About"})]})};n(65);var y=function(){return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(g,{}),Object(x.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(x.jsx)(o.a,{path:"/home",children:Object(x.jsx)("h3",{children:"Home"})}),Object(x.jsx)(o.a,{path:"/home/introduction",children:Object(x.jsx)("h3",{children:"introduction"})}),Object(x.jsx)(o.a,{path:"/about",component:f})]})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.55b8329c.chunk.js.map