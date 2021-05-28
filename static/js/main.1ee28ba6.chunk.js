(this["webpackJsonppath-finder"]=this["webpackJsonppath-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,a,s=n(16),o=n(2),i=n.n(o),c=n(14),u=n.n(c),l=n(0),d=n.n(l),f=n(5),h=n(4),p=n(10),b=n(3),v=n(7),w=n(8),g=function(){function e(t,n){Object(v.a)(this,e),this.x=t,this.y=n}return Object(w.a)(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}],[{key:"random",value:function(t,n,r,a){return new e(Math.floor(t+Math.random()*(r-t)),Math.floor(n+Math.random()*(a-n)))}}]),e}(),m=function(){function e(t,n){Object(v.a)(this,e),this.numCols=t,this.numRows=n,this.walls=new Set}return Object(w.a)(e,[{key:"toggleWall",value:function(t){if(!this.isWithinBounds(t))throw new Error("Out of bounds: ".concat(t.toString()));var n=new e(this.numCols,this.numRows);return n.walls=new Set(Object(f.a)(this.walls)),n.isWall(t)?n.walls.delete(t.toString()):n.walls.add(t.toString()),n}},{key:"isWall",value:function(e){return this.walls.has(e.toString())}},{key:"getNeighbours",value:function(e){for(var t=[],n=0,r=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}];n<r.length;n++){var a=r[n],s=a.dx,o=a.dy,i=e.add(new g(s,o));this.isWithinBounds(i)&&(this.isWall(i)||t.push(i))}return t}},{key:"isWithinBounds",value:function(e){return e.x>=0&&e.y>=0&&e.x<this.numCols&&e.y<this.numRows}}]),e}(),j=function(e){for(var t=[];e.prev;)t.unshift(e.pos),e=e.prev;return t},S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(v.a)(this,e),this.items=t}return Object(w.a)(e,[{key:"enqueue",value:function(){var e;(e=this.items).push.apply(e,arguments)}},{key:"dequeue",value:function(){if(this.isEmpty())throw new Error("Cannot dequeue empty queue");return this.items.shift()}},{key:"isEmpty",value:function(){return 0===this.size}},{key:"size",get:function(){return this.items.length}}]),e}(),x={name:"Breadth-first search",start:d.a.mark((function(e){var t,n,r,a,s,o,i,c,u,l;return d.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:t=e.map,n=e.start,r=e.target,a=new Set([n.toString()]),s=new S([{pos:n}]);case 3:if(s.isEmpty()){d.next=11;break}return o=s.dequeue(),d.next=7,{current:o,visited:a,found:o.pos.equals(r)};case 7:i=Object(h.a)(t.getNeighbours(o.pos));try{for(i.s();!(c=i.n()).done;)u=c.value,l=u.toString(),a.has(l)||(a.add(l),s.enqueue({pos:u,prev:o}))}catch(f){i.e(f)}finally{i.f()}d.next=3;break;case 11:case"end":return d.stop()}}),n)})),rewind:j};!function(e){e[e.Forward=0]="Forward",e[e.Backward=1]="Backward"}(r||(r={}));var y,O={name:"Bidirectional BFS",start:d.a.mark((function(e){var t,n,s,o,i,c,u,l,p,b,v,w,g,m,j,x;return d.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:t=e.map,n=e.start,s=e.target,a=[],o=new Set([n.toString()]),i=new Set([s.toString()]),c=new S([{searchNode:{pos:n},direction:r.Forward},{searchNode:{pos:s},direction:r.Backward}]);case 5:if(c.isEmpty()){d.next=14;break}return u=c.dequeue(),l=u.searchNode,p=u.direction,b=p===r.Forward&&i.has(l.pos.toString())||p===r.Backward&&o.has(l.pos.toString()),d.next=10,{current:l,visited:new Set([].concat(Object(f.a)(o),Object(f.a)(i))),found:b};case 10:v=Object(h.a)(t.getNeighbours(l.pos));try{for(v.s();!(w=v.n()).done;)g=w.value,m=g.toString(),j=!1,p===r.Forward?o.has(m)||(o.add(m),j=!0):i.has(m)||(i.add(m),j=!0),j&&(x={searchNode:{pos:g,prev:l},direction:p},a.push(x),c.enqueue(x))}catch(y){v.e(y)}finally{v.f()}d.next=5;break;case 14:case"end":return d.stop()}}),n)})),rewind:function(e){var t=a.filter((function(t){var n=t.searchNode;return e.pos.equals(n.pos)})).sort((function(e){return e.direction===r.Forward?-1:1}));return[].concat(Object(f.a)(j(t[0].searchNode)),Object(f.a)(j(t[1].searchNode).reverse()))}},k=n(15),C=n.n(k),M=function(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},q={name:"Greedy best-first search",start:d.a.mark((function(e,t){var n,r,a,s,o,i,c,u,l,f;return d.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:n=e.map,r=e.start,a=e.target,s=t?t.visited:new Set([r.toString()]),o=new C.a({comparator:function(e,t){return M(e.pos,a)-M(t.pos,a)},initialValues:[t?t.current:{pos:r}]});case 3:if(!(o.length>0)){d.next=11;break}return i=o.dequeue(),d.next=7,{current:i,visited:s,found:i.pos.equals(a)};case 7:c=Object(h.a)(n.getNeighbours(i.pos));try{for(c.s();!(u=c.n()).done;)l=u.value,f=l.toString(),s.has(f)||(s.add(f),o.queue({pos:l,prev:i}))}catch(p){c.e(p)}finally{c.f()}d.next=3;break;case 11:case"end":return d.stop()}}),r)})),rewind:j},N=d.a.mark((function e(t,n,r){var a,s,o,i;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,{current:t,visited:n,found:t.pos.equals(r.target)};case 2:a=Object(h.a)(r.map.getNeighbours(t.pos)),c.prev=3,a.s();case 5:if((s=a.n()).done){c.next=13;break}if(o=s.value,i=o.toString(),n.has(i)){c.next=11;break}return n.add(i),c.delegateYield(e({pos:o,prev:t},n,r),"t0",11);case 11:c.next=5;break;case 13:c.next=18;break;case 15:c.prev=15,c.t1=c.catch(3),a.e(c.t1);case 18:return c.prev=18,a.f(),c.finish(18);case 21:case"end":return c.stop()}}),e,null,[[3,15,18,21]])})),W={"breadth-first-search":x,"bidirectional-bfs":O,"greedy-best-first-search":q,"depth-first-search":{name:"Depth-first search",start:d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(N({pos:t.start},new Set([t.start.toString()]),t),"t0",1);case 1:case"end":return e.stop()}}),e)})),rewind:j}},R=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=n(1),E=function(e){return Object(B.jsxs)("div",{className:"Controls",children:[Object(B.jsx)("button",{onClick:e.isRunning?e.onStopClick:e.onStartClick,children:e.isRunning?"Stop":"Start"}),Object(B.jsx)("button",{onClick:e.onClearClick,disabled:e.isRunning,children:"Clear"}),Object(B.jsx)("button",{onClick:e.onGenerateClick,disabled:e.isRunning,children:"Generate"}),Object(B.jsx)("select",{onChange:e.onMethodSelect,value:e.selectedMethod,children:Object.entries(W).map((function(e){var t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(B.jsx)("option",{value:n,children:r.name},n)}))})]})},F=function(e){for(var t=[],n=0;n<e.numRows;++n)for(var r=function(r){var a=new g(r,n);t.push(Object(B.jsx)("div",{className:e.getSquareClassName(a),onMouseUp:function(){return e.onMouseUp(a)},onMouseDown:function(){return e.onMouseDown(a)},onMouseEnter:function(){return e.onMouseEnter(a)}},a.toString()))},a=0;a<e.numCols;++a)r(a);return Object(B.jsx)("div",{className:"PathMap",style:e.style,children:t})};!function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.Target=2]="Target"}(y||(y={}));var P=function(e,t){return new m(e,t)},T=function(e,t){return new g(Math.floor(e/4)-1,Math.floor(t/2)-1)},z=function(e,t){return new g(e-Math.floor(e/4),Math.floor(t/2)-1)},D=function(){return new Set},G=function(){return new Set},I=function(e){var t=e.mapSize,n=t.cols,r=t.rows,a=e.mapStyle,s=Object(o.useState)(P(n,r)),i=Object(b.a)(s,2),c=i[0],u=i[1],l=Object(o.useState)(T(n,r)),v=Object(b.a)(l,2),w=v[0],m=v[1],j=Object(o.useState)(z(n,r)),S=Object(b.a)(j,2),x=S[0],O=S[1],k=Object(o.useState)(D()),C=Object(b.a)(k,2),M=C[0],q=C[1],N=Object(o.useState)(G()),I=Object(b.a)(N,2),V=I[0],U=I[1],J=Object(o.useState)({}),Y=Object(b.a)(J,2),H=Y[0],A=Y[1],K=Object(o.useState)("greedy-best-first-search"),L=Object(b.a)(K,2),Q=L[0],X=L[1],Z=Object(o.useState)(y.None),$=Object(b.a)(Z,2),_=$[0],ee=$[1],te=Object(o.useState)(!1),ne=Object(b.a)(te,2),re=ne[0],ae=ne[1],se=Object(o.useRef)(!1),oe=function(){return se.current},ie=function(e){se.current=e},ce=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,r,a,s,o,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(!0),t=void 0,n=G(),U(n),r=Object(h.a)(W[Q].start({map:c,start:w,target:x},H.state)),e.prev=5,r.s();case 7:if((a=r.n()).done){e.next=38;break}if(s=a.value,oe()){e.next=12;break}return t=s,e.abrupt("break",38);case 12:if(q(new Set(Object(f.a)(s.visited))),!s.found){e.next=34;break}o=Object(h.a)(W[Q].rewind(s.current)),e.prev=15,o.s();case 17:if((i=o.n()).done){e.next=24;break}return u=i.value,U(new Set(Object(f.a)(n.add(u.toString())))),e.next=22,R(5);case 22:e.next=17;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(15),o.e(e.t0);case 29:return e.prev=29,o.f(),e.finish(29);case 32:return A({}),e.abrupt("break",38);case 34:return e.next=36,R(10);case 36:e.next=7;break;case 38:e.next=43;break;case 40:e.prev=40,e.t1=e.catch(5),r.e(e.t1);case 43:return e.prev=43,r.f(),e.finish(43);case 46:ie(!1),A({state:t});case 48:case"end":return e.stop()}}),e,null,[[5,40,43,46],[15,26,29,32]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){u(P(n,r)),m(T(n,r)),O(z(n,r)),q(D()),U(G()),ie(!1),A({})};return Object(B.jsxs)("div",{className:"PathFinder".concat(oe()?" is-running":""),children:[Object(B.jsx)(E,{isRunning:oe(),onStartClick:ce,onStopClick:function(){ie(!1)},onClearClick:ue,onGenerateClick:function(){ue();var e=g.random(0,0,n/3,r/3),t=g.random(2*n/3,2*r/3,n,r);m(e),O(t);for(var a=P(n,r),s=0;s<r;++s)for(var o=0;o<n;++o){var i=new g(o,s);e.equals(i)||t.equals(i)||Math.random()<.25&&(a=a.toggleWall(i),u(a))}},onMethodSelect:function(e){X(e.target.value)},selectedMethod:Q}),Object(B.jsx)(F,{numRows:r,numCols:n,style:a,getSquareClassName:function(e){return c.isWall(e)?"wall":w.equals(e)?"start":x.equals(e)?"target":V.has(e.toString())?"solution":M.has(e.toString())?"visited":""},onMouseUp:function(){ee(y.None),ae(!1)},onMouseDown:function(e){return e.equals(w)?ee(y.Start):e.equals(x)?ee(y.Target):(ae(!0),void u(c.toggleWall(e)))},onMouseEnter:function(e){if(_!==y.None&&!c.isWall(e))return _===y.Start?m(e):O(e);!re||e.equals(w)||e.equals(x)||u(c.toggleWall(e))}})]})};n(25);u.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(I,Object(s.a)({},function(){var e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-left")),t=parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height")),n=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--map-square-width")),r=Math.floor((window.innerWidth-2*e)/n),a=Math.floor((window.innerHeight-2*t-e)/n);return{mapSize:{cols:r,rows:a},mapStyle:{gridTemplateColumns:"repeat(".concat(r,", ").concat(n,"px)"),gridTemplateRows:"repeat(".concat(a,", ").concat(n,"px)")}}}()))}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1ee28ba6.chunk.js.map