(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/logo.03714909.svg"},29:function(e,t,n){e.exports=n(50)},34:function(e,t,n){},35:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),o=(n(34),n(5)),i=n(6),m=n(8),s=n(7),u=n(9),d=n(11),p=n(1),h=n(13),E=n(25),b=n.n(E),f=(n(35),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement("header",{className:"header"},a.createElement("nav",{className:"navigation"},a.createElement(h.a,{className:"te-logo",to:"/"},a.createElement("img",{src:b.a,alt:"logo"})),a.createElement("ul",{className:"horizontal-menu"},a.createElement("li",{className:"horizontal-item"},a.createElement(h.a,{to:"/product/5a1ad987b301420bbce8e976"},"Example product #1")),a.createElement("li",{className:"horizontal-item"},a.createElement(h.a,{to:"/product/5a2876ea8aa0cd7044f34e3c"},"Example product #2")),a.createElement("li",{className:"horizontal-item"},a.createElement("a",{className:"link",href:"https://developers.tipser.com",target:"_blank",rel:"noopener noreferrer"},"Tipser Developers")),a.createElement("li",{className:"horizontal-item"},a.createElement("a",{className:"link",href:"https://tipser.github.io/docs/#tipser-elements",target:"_blank",rel:"noopener noreferrer"},"Tipser Elements documentation")),a.createElement("li",{className:"horizontal-item"},a.createElement("a",{className:"link",href:"https://github.com/Tipser/tipser-elements-react-bootstrap",target:"_blank",rel:"noopener noreferrer"},"GitHub repo of this page")),a.createElement("li",{className:"horizontal-item"},a.createElement(h.a,{to:"/page/5rFWEeeSaoTMASvLiZHnJ2"},"Dynamic inventory gallery"))),a.createElement(p.Cart,null)))}}]),t}(a.Component)),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement("main",null,a.createElement("h2",null,"Inserting an elment from Contentful taking the content Id as the prop."),a.createElement("h3",null,"This example renders a page, consisting of other components"),a.createElement(p.TipserElement,{id:"2OeW1Ab8lKNcUq6dVUh79"}),a.createElement("h2",null,"Inserting a product using the productId as prop"),a.createElement("br",null),a.createElement("h3",null,"Full width product view"),a.createElement(p.Product,{productId:"5ba2334a781baa0001ccdffc"}),a.createElement("div",{style:{width:"980px",margin:"0 auto",border:"1px dashed lightgray"}},a.createElement("h3",null,"Container width 980px"),a.createElement(p.Product,{productId:"5aafd24f9d25801d54d41132"})),a.createElement("div",{style:{width:"767px",margin:"0 auto",border:"1px dashed lightgray"}},a.createElement("h3",null,"Container width 767px"),a.createElement(p.Product,{productId:"5aafd24f9d25801d54d41132"})),a.createElement("div",{style:{width:"400px",margin:"0 auto",border:"1px dashed lightgray"}},a.createElement("h3",null,"Container width 400px"),a.createElement(p.Product,{productId:"5aafd24f9d25801d54d41132"})),a.createElement("h2",null,"Inserting an elment from Contentful taking the content Id as the prop."),a.createElement("h3",null,"This example renders a page, consisting of other components"),a.createElement(p.TipserElement,{id:"1larHZb8TeMQiqmi4W8CIS"}),a.createElement("h2",null,"Inserting a collection using the collectiontId as prop"),a.createElement(p.Collection,{collectionId:"5beaaa0653e83f0001e18577"}),a.createElement("h2",null,"Inserting a collection using the collectiontId as prop"),a.createElement(p.Collection,{collectionId:"5bec3f0e8d1736000154335a"}),a.createElement("h2",null,"Inserting a collection using the collectiontId as prop"),a.createElement(p.Collection,{collectionId:"594a228e8aa0ce56d8aaad06"}),a.createElement("h2",null,"Inserting Store element"),a.createElement(p.Store,null)),a.createElement("footer",null,a.createElement("div",{className:"footer-text"},"This is the footer")))}}]),t}(a.Component),v=n(28),O=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.productId;this.props.similarProductsFetch;return a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement("main",null,a.createElement("div",{className:"container"},a.createElement("h4",null,"Product"),a.createElement(p.Product,{productId:e}),a.createElement("h4",null,"Product card"),a.createElement(p.Product,{productId:e,renderer:"card"}),a.createElement("h4",null,"Product card compact"),a.createElement(p.Product,{productId:e,viewMode:"compact"}))))}}]),t}(a.Component),j=Object(v.connect)(function(e){return{similarProductsFetch:"https://t3-prod-api.tipser.com/v3/products/".concat(e.match.params.productId,"/similar?onlyAvailable=true")}})(O),I=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,"The page is not found")}}]),t}(a.Component),y=(n(48),n(3)),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.pageId;return a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement("main",null,a.createElement("div",{className:"container"},a.createElement(p.Page,{id:e}))))}}]),t}(a.Component),k=(n(49),Object(y.b)({basename:"/tipser-elements-react-bootstrap"})),C={lang:"en",env:"dev",primaryColor:"red",useDefaultErrorHandler:!0,eventsHandlers:{onError:function(e){console.log(e)},onAddToCart:function(e){var t=e.cartSize,n=e.product;console.log("Hurray, you have added item to cart. ",n),console.log("Your cart size is now. ",t)}}},N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.b,{history:k},r.a.createElement(p.TipserElementsProvider,{posId:"59e86b79b8f3f60a94ecd26a",config:C,sentryEnv:"frontend_dev"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/product/:productId",component:j}),r.a.createElement(d.a,{path:"/page/:pageId",component:w}),r.a.createElement(d.a,{path:"/",component:g}),r.a.createElement(d.a,{component:I}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.edfa3045.chunk.js.map