(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/logo.03714909.svg"},21:function(e,t,n){e.exports=n(40)},26:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(26),n(5)),i=n(6),m=n(8),s=n(7),d=n(9),u=n(43),p=n(45),h=n(44),E=n(2),f=n(42),b=n(17),g=n.n(b),O=(n(27),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement("header",{className:"header"},a.createElement("nav",{className:"navigation"},a.createElement(f.a,{className:"te-logo",to:"/"},a.createElement("img",{src:g.a,alt:"logo"})),a.createElement("ul",{className:"horizontal-menu"},a.createElement("li",{className:"horizontal-item"},a.createElement(f.a,{to:"/product/5a1ad987b301420bbce8e976"},"Example product #1")),a.createElement("li",{className:"horizontal-item"},a.createElement(f.a,{to:"/product/5c6d719d3b777f0001dffd36"},"Example product #2")),a.createElement("li",{className:"horizontal-item"},a.createElement("a",{className:"link",href:"https://developers.tipser.com",target:"_blank",rel:"noopener noreferrer"},"Tipser Developers")),a.createElement("li",{className:"horizontal-item"},a.createElement("a",{className:"link",href:"https://tipser.github.io/docs/#tipser-elements",target:"_blank",rel:"noopener noreferrer"},"Tipser Elements documentation")),a.createElement("li",{className:"horizontal-item"},a.createElement("a",{className:"link",href:"https://github.com/Tipser/tipser-elements-react-bootstrap",target:"_blank",rel:"noopener noreferrer"},"GitHub repo of this page"))),a.createElement(E.CartIcon,null)))}}]),t}(a.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement("main",null,a.createElement(E.TipserElement,{id:"2OeW1Ab8lKNcUq6dVUh79"}),a.createElement(E.TipserProduct,{productId:"5ba2334a781baa0001ccdffc"}),a.createElement("div",{style:{width:"980px",margin:"0 auto",border:"1px solid pink"}},a.createElement("h3",null,"Container width 980px"),a.createElement(E.TipserProduct,{productId:"5aafd24f9d25801d54d41132"})),a.createElement("div",{style:{width:"767px",margin:"0 auto",border:"1px solid pink"}},a.createElement("h3",null,"Container width 767px"),a.createElement(E.TipserProduct,{productId:"5aafd24f9d25801d54d41132"})),a.createElement("div",{style:{width:"400px",margin:"0 auto",border:"1px solid pink"}},a.createElement("h3",null,"Container width 400px"),a.createElement(E.TipserProduct,{productId:"5aafd24f9d25801d54d41132"})),a.createElement(E.TipserElement,{id:"1larHZb8TeMQiqmi4W8CIS"}),a.createElement(E.CollectionComponent,{collectionId:"5beaaa0653e83f0001e18577"}),a.createElement(E.CollectionComponent,{collectionId:"5bec3f0e8d1736000154335a"}),a.createElement(E.CollectionComponent,{collectionId:"594a228e8aa0ce56d8aaad06"}),a.createElement(E.ShopComponent,null)),a.createElement("footer",null,a.createElement("span",{className:"footer-text"},"This is the footer")))}}]),t}(a.Component),v=n(18),C=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.productId,t=this.props.similarProductsFetch;return a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement("main",null,a.createElement(E.TipserProduct,{productId:e})),a.createElement("h2",null,"Similar products"),t.fulfilled&&a.createElement("div",null,a.createElement(E.CollectionComponent,{products:t.value})))}}]),t}(a.Component),y=Object(v.connect)(function(e){return{similarProductsFetch:"https://t3-prod-api.tipser.com/v3/products/".concat(e.match.params.productId,"/similar?onlyAvailable=true")}})(C),w=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,"The page is not found")}}]),t}(a.Component),k=(n(38),n(11)),I=Object(k.a)({basename:"/tipser-elements-react-bootstrap"}),T={lang:"en",primaryColor:"red",useDefaultErrorHandler:!0,eventsHandlers:{onError:function(e){console.log(e)},onAddToCart:function(e){var t=e.cartSize,n=e.product;console.log("Hurray, you have added item to cart. ",n),console.log("Your cart size is now. ",t)}}},x=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{history:I},r.a.createElement(E.TipserElementsProvider,{posId:"5075d7715c3d090a90585e87",config:T},r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/product/:productId",component:y}),r.a.createElement(h.a,{path:"/",component:j}),r.a.createElement(h.a,{component:w}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.5aba16bd.chunk.js.map