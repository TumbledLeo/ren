/*! PhotoSwipe - v4.0.7 - 2015-03-18
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(4.4>i&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;4>n;n++){c=m[n];for(var o=0;3>o;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.5},maxSpreadZoom:2,scaleMode:"fit",modal:!0,alwaysFadeIn:!1};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb=function(){return{x:0,y:0}},nb=mb(),ob=mb(),pb=mb(),qb={},rb=0,sb=mb(),tb=0,ub=!0,vb=[],wb={},xb=function(a,b){e.extend(f,b.publicMethods),vb.push(a)},yb=function(a){var b=$c();return a>b-1?a-b:0>a?b+a:a},zb={},Ab=function(a,b){return zb[a]||(zb[a]=[]),zb[a].push(b)},Bb=function(a){var b=zb[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Cb=function(){return(new Date).getTime()},Db=function(a){jb=a,f.bg.style.opacity=a*i.bgOpacity},Eb=function(a,b,c,d){a[F]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Fb=function(){eb&&Eb(eb,pb.x,pb.y,s)},Gb=function(a){a.container&&Eb(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel)},Hb=function(a,b){b[F]=u+a+"px, 0px"+v},Ib=function(a,b){if(!i.loop&&b){var c=m+(sb.x*rb-a)/sb.x,d=Math.round(a-rc.x);(0>c&&d>0||c>=$c()-1&&0>d)&&(a=rc.x+d*i.mainScrollEndFriction)}rc.x=a,Hb(a,n)},Jb=function(a,b){var c=sc[a]-y[a];return ob[a]+nb[a]+c-c*(b/t)},Kb=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Lb=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Mb=null,Nb=function(){Mb&&(e.unbind(document,"mousemove",Nb),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Bb("mouseUsed")),Mb=setTimeout(function(){Mb=null},100)},Ob=function(){e.bind(document,"keydown",f),O.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Nb),e.bind(window,"resize scroll",f),Bb("bindEvents")},Pb=function(){e.unbind(window,"resize",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Nb),O.transform&&e.unbind(f.scrollWrap,"click",f),V&&e.unbind(window,p,f),Bb("unbindEvents")},Qb=function(a,b){var c=gd(f.currItem,qb,a);return b&&(db=c),c},Rb=function(a){return a||(a=f.currItem),a.initialZoomLevel},Sb=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Tb=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=Jb(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Ub=function(){if(F){var b=O.perspective&&!H;return u="translate"+(b?"3d(":"("),void(v=O.perspective?", 0px)":")")}F="left",e.addClass(a,"pswp--ie"),Hb=function(a,b){b.left=a+"px"},Gb=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Fb=function(){if(eb){var a=eb,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=pb.x+"px",a.top=pb.y+"px"}}},Vb=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Wb=function(a){a&&(Y||X||fb||T)&&(a.preventDefault(),a.stopPropagation())},Xb=function(){f.setScrollOffset(0,e.getScrollY())},Yb={},Zb=0,$b=function(a){Yb[a]&&(Yb[a].raf&&J(Yb[a].raf),Zb--,delete Yb[a])},_b=function(a){Yb[a]&&$b(a),Yb[a]||(Zb++,Yb[a]={})},ac=function(){for(var a in Yb)Yb.hasOwnProperty(a)&&$b(a)},bc=function(a,b,c,d,e,f,g){var h,i=Cb();_b(a);var j=function(){if(Yb[a]){if(h=Cb()-i,h>=d)return $b(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),Yb[a].raf=I(j)}};j()},cc={shout:Bb,listen:Ab,viewportSize:qb,options:i,isMainScrollAnimating:function(){return fb},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return ab},setScrollOffset:function(a,b){y.x=a,N=y.y=b},applyZoomPan:function(a,b,c){pb.x=b,pb.y=c,s=a,Fb()},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),K=a.className,j=!0,O=e.detectFeatures(),I=O.raf,J=O.caf,F=O.transform,M=O.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=z=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],z[0].el.style.display=z[2].el.style.display="none",Ub(),r={resize:f.updateSize,scroll:Xb,keydown:Vb,click:Wb};var d=O.isOldIOSPhone||O.isOldAndroid||O.isMobileOpera;for(O.animationName&&O.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<vb.length;c++)f["init"+vb[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Bb("firstUpdate"),m=m||i.index||0,(isNaN(m)||0>m||m>=$c())&&(m=0),f.currItem=Zc(m),(O.isOldIOSPhone||O.isOldAndroid)&&(ub=!1),i.modal&&(a.setAttribute("aria-hidden","false"),ub?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===N&&(Bb("initialLayout"),N=L=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=H?"pswp--touch":"pswp--notouch",l+=O.animationName?" pswp--css_animation":"",l+=O.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,tb=null,c=0;h>c;c++)Hb((c+o)*sb.x,z[c].el.style);M||e.bind(f.scrollWrap,q,f),Ab("initialZoomInEnd",function(){f.setContent(z[0],m-1),f.setContent(z[2],m+1),z[0].el.style.display=z[2].el.style.display="block",i.focus&&a.focus(),Ob()}),f.setContent(z[1],m),f.updateCurrItem(),Bb("afterInit"),ub||(w=setInterval(function(){Zb||V||ab||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Bb("close"),Pb(),ad(f.currItem,null,!0,f.destroy))},destroy:function(){Bb("destroy"),Vc&&clearTimeout(Vc),i.modal&&(a.setAttribute("aria-hidden","true"),a.className=K),w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),xc(),ac(),zb=null},panTo:function(a,b,c){c||(a>db.min.x?a=db.min.x:a<db.max.x&&(a=db.max.x),b>db.min.y?b=db.min.y:b<db.max.y&&(b=db.max.y)),pb.x=a,pb.y=b,Fb()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=yb(a);var b=a-m;tb=b,m=a,f.currItem=Zc(m),rb-=b,Ib(sb.x*rb),ac(),fb=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Bb("beforeChange",0),z[1].el.children.length){var b=z[1].el.children[0];eb=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else eb=null;db=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,pb.x=db.center.x,pb.y=db.center.y,a&&Bb("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;h>a;a++)z[a].item&&(z[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==tb){var b,c=Math.abs(tb);if(!(a&&2>c)){f.currItem=Zc(m),Bb("beforeChange",tb),c>=h&&(o+=tb+(tb>0?-h:h),c=h);for(var d=0;c>d;d++)tb>0?(b=z.shift(),z[h-1]=b,o++,Hb((o+2)*sb.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=z.pop(),z.unshift(b),o--,Hb(o*sb.x,b.el.style),f.setContent(b,m+c-d-1-1));if(eb&&1===Math.abs(tb)){var e=Zc(A);e.initialZoomLevel!==s&&(gd(e,qb),Gb(e))}tb=0,f.updateCurrZoomItem(),A=m,Bb("afterChange")}}},updateSize:function(b){if(!ub){var c=e.getScrollY();if(N!==c&&(a.style.top=c+"px",N=c),!b&&wb.x===window.innerWidth&&wb.y===window.innerHeight)return;wb.x=window.innerWidth,wb.y=window.innerHeight,a.style.height=wb.y+"px"}if(qb.x=f.scrollWrap.clientWidth,qb.y=f.scrollWrap.clientHeight,y={x:0,y:N},sb.x=qb.x+Math.round(qb.x*i.spacing),sb.y=qb.y,Ib(sb.x*rb),Bb("beforeResize"),void 0!==o){for(var d,g,j,k=0;h>k;k++)d=z[k],Hb((k+o)*sb.x,d.el.style),j=m+k-1,i.loop&&$c()>2&&(j=yb(j)),g=Zc(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===d.index&&j>=0&&f.setContent(d,j),g&&g.container&&(gd(g,qb),Gb(g));x=!1}t=s=f.currItem.initialZoomLevel,db=f.currItem.bounds,db&&(pb.x=db.center.x,pb.y=db.center.y,Fb()),Bb("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,sc.x=Math.abs(b.x)-pb.x,sc.y=Math.abs(b.y)-pb.y,Kb(ob,pb));var g=Qb(a,!1),h={};Tb("x",g,h,a),Tb("y",g,h,a);var i=s,j={x:pb.x,y:pb.y};Lb(h);var k=function(b){1===b?(s=a,pb.x=h.x,pb.y=h.y):(s=(a-i)*b+i,pb.x=(h.x-j.x)*b+j.x,pb.y=(h.y-j.y)*b+j.y),f&&f(b),Fb()};c?bc("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},dc=30,ec=10,fc={},gc={},hc={},ic={},jc={},kc=[],lc={},mc=[],nc={},oc=0,pc=mb(),qc=0,rc=mb(),sc=mb(),tc=mb(),uc=function(a,b){return a.x===b.x&&a.y===b.y},vc=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},wc=function(a,b){return nc.x=Math.abs(a.x-b.x),nc.y=Math.abs(a.y-b.y),Math.sqrt(nc.x*nc.x+nc.y*nc.y)},xc=function(){Z&&(J(Z),Z=null)},yc=function(){V&&(Z=I(yc),Oc())},zc=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Ac=function(a,b){return a?a.className&&a.className.indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Ac(a.parentNode,b):!1},Bc={},Cc=function(a,b){return Bc.prevent=!Ac(a.target,i.isClickableElement),Bb("preventDragEvent",a,b,Bc),Bc.prevent},Dc=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Ec=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Fc=function(a,b,c){if(a-Q>50){var d=mc.length>2?mc.shift():{};d.x=b,d.y=c,mc.push(d),Q=a}},Gc=function(){var a=pb.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(qb.y/2))},Hc={},Ic={},Jc=[],Kc=function(a){for(;Jc.length>0;)Jc.pop();return G?(lb=0,kc.forEach(function(a){0===lb?Jc[0]=a:1===lb&&(Jc[1]=a),lb++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Jc[0]=Dc(a.touches[0],Hc),a.touches.length>1&&(Jc[1]=Dc(a.touches[1],Ic))):(Hc.x=a.pageX,Hc.y=a.pageY,Hc.id="",Jc[0]=Hc),Jc},Lc=function(a,b){var c,d,e,g,h=0,j=pb[a]+b[a],k=b[a]>0,l=rc.x+b.x,m=rc.x-lc.x;return c=j>db.min[a]||j<db.max[a]?i.panEndFriction:1,j=pb[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(eb?"h"!==gb||"x"!==a||X||(k?(j>db.min[a]&&(c=i.panEndFriction,h=db.min[a]-j,d=db.min[a]-ob[a]),(0>=d||0>m)&&$c()>1?(g=l,0>m&&l>lc.x&&(g=lc.x)):db.min.x!==db.max.x&&(e=j)):(j<db.max[a]&&(c=i.panEndFriction,h=j-db.max[a],d=ob[a]-db.max[a]),(0>=d||m>0)&&$c()>1?(g=l,m>0&&l<lc.x&&(g=lc.x)):db.min.x!==db.max.x&&(e=j))):g=l,"x"!==a)?void(fb||$||s>f.currItem.fitRatio&&(pb[a]+=b[a]*c)):(void 0!==g&&(Ib(g,!0),$=g===lc.x?!1:!0),db.min.x!==db.max.x&&(void 0!==e?pb.x=e:$||(pb.x+=b.x*c)),void 0!==g)},Mc=function(a){if(!("mousedown"===a.type&&a.button>0)){if(Yc)return void a.preventDefault();if(!U||"mousedown"!==a.type){if(Cc(a,!0)&&a.preventDefault(),Bb("pointerDown"),G){var b=e.arraySearch(kc,a.pointerId,"id");0>b&&(b=kc.length),kc[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Kc(a),d=c.length;_=null,ac(),V&&1!==d||(V=hb=!0,e.bind(window,p,f),S=kb=ib=T=$=Y=W=X=!1,gb=null,Bb("firstTouchStart",c),Kb(ob,pb),nb.x=nb.y=0,Kb(ic,c[0]),Kb(jc,ic),lc.x=sb.x*rb,mc=[{x:ic.x,y:ic.y}],Q=P=Cb(),Qb(s,!0),xc(),yc()),!ab&&d>1&&!fb&&!$&&(t=s,X=!1,ab=W=!0,nb.y=nb.x=0,Kb(ob,pb),Kb(fc,c[0]),Kb(gc,c[1]),Ec(fc,gc,tc),sc.x=Math.abs(tc.x)-pb.x,sc.y=Math.abs(tc.y)-pb.y,bb=cb=wc(fc,gc))}}},Nc=function(a){if(a.preventDefault(),G){var b=e.arraySearch(kc,a.pointerId,"id");if(b>-1){var c=kc[b];c.x=a.pageX,c.y=a.pageY}}if(V){var d=Kc(a);if(gb||Y||ab)_=d;else{var f=Math.abs(d[0].x-ic.x)-Math.abs(d[0].y-ic.y);Math.abs(f)>=ec&&(gb=f>0?"h":"v",_=d)}}},Oc=function(){if(_){var a=_.length;if(0!==a)if(Kb(fc,_[0]),hc.x=fc.x-ic.x,hc.y=fc.y-ic.y,ab&&a>1){if(ic.x=fc.x,ic.y=fc.y,!hc.x&&!hc.y&&uc(_[1],gc))return;Kb(gc,_[1]),X||(X=!0,Bb("zoomGestureStarted"));var b=wc(fc,gc),c=Tc(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(kb=!0);var d=1,e=Rb(),g=Sb();if(e>c)if(i.pinchToClose&&!kb&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Db(j),Bb("onPinchClose",j),ib=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);0>d&&(d=0),bb=b,Ec(fc,gc,pc),nb.x+=pc.x-tc.x,nb.y+=pc.y-tc.y,Kb(tc,pc),pb.x=Jb("x",c),pb.y=Jb("y",c),S=c>s,s=c,Fb()}else{if(!gb)return;if(hb&&(hb=!1,Math.abs(hc.x)>=ec&&(hc.x-=_[0].x-jc.x),Math.abs(hc.y)>=ec&&(hc.y-=_[0].y-jc.y)),ic.x=fc.x,ic.y=fc.y,0===hc.x&&0===hc.y)return;if("v"===gb&&i.closeOnVerticalDrag&&!zc()){nb.y+=hc.y,pb.y+=hc.y;var k=Gc();return T=!0,Bb("onVerticalDrag",k),Db(k),void Fb()}Fc(Cb(),fc.x,fc.y),Y=!0,db=f.currItem.bounds;var l=Lc("x",hc);l||(Lc("y",hc),Lb(pb),Fb())}}},Pc=function(a){if(O.isOldAndroid){if(U&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}Bb("pointerUp"),Cc(a,!1)&&a.preventDefault();var b;if(G){var c=e.arraySearch(kc,a.pointerId,"id");if(c>-1)if(b=kc.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Kc(a),i=h.length;if("mouseup"===a.type&&(i=0),2===i)return _=null,!0;1===i&&Kb(jc,h[0]),0!==i||gb||fb||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Bb("touchRelease",a,b));var j=-1;if(0===i&&(V=!1,e.unbind(window,p,f),xc(),ab?j=0:-1!==qc&&(j=Cb()-qc)),qc=1===i?Cb():-1,g=-1!==j&&150>j?"zoom":"swipe",ab&&2>i&&(ab=!1,1===i&&(g="zoomPointerUp"),Bb("zoomGestureEnded")),_=null,Y||X||fb||T)if(ac(),R||(R=Qc()),R.calculateSwipeSpeed("x"),T){var k=Gc();if(.6>k)f.close();else{var l=pb.y,m=jb;bc("verticalDrag",0,1,300,e.easing.cubic.out,function(a){pb.y=(f.currItem.initialPosition.y-l)*a+l,Db((1-m)*a+m),Fb()}),Bb("onVerticalDrag",1)}}else{if(($||fb)&&0===i){var n=Sc(g,R);if(n)return;g="zoomPointerUp"}if(!fb)return"swipe"!==g?void Uc():void(!$&&s>f.currItem.fitRatio&&Rc(R))}},Qc=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){mc.length>1?(a=Cb()-Q+50,b=mc[mc.length-2][d]):(a=Cb()-P,b=jc[d]),c.lastFlickOffset[d]=ic[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickSpeed[d]=c.lastFlickDist[d]>20?c.lastFlickOffset[d]/a:0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(pb[a]>db.min[a]?c.backAnimDestination[a]=db.min[a]:pb[a]<db.max[a]&&(c.backAnimDestination[a]=db.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,bc("bounceZoomPan"+a,pb[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){pb[a]=b,Fb()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,pb[a]+=c.distanceOffset[a])},panAnimLoop:function(){return Yb.zoomPan&&(Yb.zoomPan.raf=I(c.panAnimLoop),c.now=Cb(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Fb(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05)?(pb.x=Math.round(pb.x),pb.y=Math.round(pb.y),Fb(),void $b("zoomPan")):void 0}};return c},Rc=function(a){return a.calculateSwipeSpeed("y"),db=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(_b("zoomPan"),a.lastNow=Cb(),void a.panAnimLoop())},Sc=function(a,b){var c;fb||(oc=m);var d;if("swipe"===a){var g=ic.x-jc.x,h=b.lastFlickDist.x<10;g>dc&&(h||b.lastFlickOffset.x>20)?d=-1:-dc>g&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,0>m?(m=i.loop?$c()-1:0,j=!0):m>=$c()&&(m=i.loop?0:$c()-1,j=!0),(!j||i.loop)&&(tb+=d,rb-=d,c=!0));var k,l=sb.x*rb,n=Math.abs(l-rc.x);return c||l>rc.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,oc===m&&(c=!1),fb=!0,Bb("mainScrollAnimStart"),bc("mainScroll",rc.x,l,k,e.easing.cubic.out,Ib,function(){ac(),fb=!1,oc=-1,(c||oc!==m)&&f.updateCurrItem(),Bb("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Tc=function(a){return 1/cb*a*t},Uc=function(){var a=s,b=Rb(),c=Sb();b>s?a=b:s>c&&(a=c);var d,g=1,h=jb;return ib&&!S&&!kb&&b>s?(f.close(),!0):(ib&&(d=function(a){Db((g-h)*a+h)}),f.zoomTo(a,0,300,e.easing.cubic.out,d),!0)};xb("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){B=a+b,C=a+c,D=a+d,E=e?a+e:""};G=O.pointerEvent,G&&O.touch&&(O.touch=!1),G?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):O.touch?(a("touch","start","move","end","cancel"),H=!0):a("mouse","down","move","up"),p=C+" "+D+" "+E,q=B,G&&!H&&(H=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=H,r[B]=Mc,r[C]=Nc,r[D]=Pc,E&&(r[E]=r[D]),O.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[B],r.mousemove=r[C],r.mouseup=r[D]),H||(i.allowPanToNext=!1)}}});var Vc,Wc,Xc,Yc,Zc,$c,_c,ad=function(b,c,d,g){Vc&&clearTimeout(Vc),Yc=!0,Xc=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){$b("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Db(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Bb("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),Yc=!1};if(!j||!h||void 0===h.x){var n=function(){Bb("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,Kb(pb,b.initialPosition),Fb(),a.style.opacity=d?0:1,Db(1),k()};return void n()}var o=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,pb.x=h.x,pb.y=h.y-L,f[g?"template":"bg"].style.opacity=.001,Fb()),_b("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Vc=setTimeout(function(){if(Bb("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:pb.x,y:pb.y},l=s,m=jb,n=function(b){1===b?(s=f,pb.x=h.x,pb.y=h.y-N):(s=(f-l)*b+l,pb.x=(h.x-i.x)*b+i.x,pb.y=(h.y-N-i.y)*b+i.y),Fb(),g?a.style.opacity=1-b:Db(m-b*m)};c?bc("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Vc=setTimeout(k,j+20))}else s=b.initialZoomLevel,Kb(pb,b.initialPosition),Fb(),Db(1),g?a.style.opacity=1:Db(1),Vc=setTimeout(k,j+20)},d?25:90)};o()},bd={},cd=[],dd={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Wc.length}},ed=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},fd=function(a,b,c){var d=a.bounds;d.center.x=Math.round((bd.x-b)/2),d.center.y=Math.round((bd.y-c)/2)+a.vGap.top,d.max.x=b>bd.x?Math.round(bd.x-b):d.center.x,d.max.y=c>bd.y?Math.round(bd.y-c)+a.vGap.top:d.center.y,d.min.x=b>bd.x?0:d.center.x,d.min.y=c>bd.y?a.vGap.top:d.center.y},gd=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Bb("parseVerticalMargin",a)),bd.x=b.x,bd.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=bd.x/a.w,f=bd.y/a.h;a.fitRatio=f>e?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=ed())}if(!c)return;return fd(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=ed(),a.initialPosition=a.bounds.center,a.bounds},hd=function(a,b,c,d,e,g){if(!b.loadError){var h,j=f.isDragging()&&!f.isZooming(),k=a===m||f.isMainScrollAnimating()||j;!e&&(H||i.alwaysFadeIn)&&k&&(h=!0),d&&(h&&(d.style.opacity=0),b.imageAppended=!0,kd(d,b.w,b.h),c.appendChild(d),h&&setTimeout(function(){d.style.opacity=1,g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500)},50))}},id=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},jd=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0):void 0},kd=function(a,b,c){a.style.width=b+"px",a.style.height=c+"px"},ld=function(){if(cd.length){for(var a,b=0;b<cd.length;b++)a=cd[b],a.holder.index===a.index&&hd(a.index,a.item,a.baseDiv,a.img);cd=[]}};xb("Controller",{publicMethods:{lazyLoadItem:function(a){a=yb(a);var b=Zc(a);!b||b.loaded||b.loading||(Bb("gettingData",a,b),b.src&&id(b))},initController:function(){e.extend(i,dd,!0),f.items=Wc=c,Zc=f.getItemAt,$c=i.getNumItemsFn,_c=i.loop,$c()<3&&(i.loop=!1),Ab("beforeChange",function(a){var b,c=i.preload,d=null===a?!0:a>0,e=Math.min(c[0],$c()),g=Math.min(c[1],$c());for(b=1;(d?g:e)>=b;b++)f.lazyLoadItem(m+b);for(b=1;(d?e:g)>=b;b++)f.lazyLoadItem(m-b)}),Ab("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ab("mainScrollAnimComplete",ld),Ab("initialZoomInEnd",ld),Ab("destroy",function(){for(var a,b=0;b<Wc.length;b++)a=Wc[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);cd=null})},getItemAt:function(a){return a>=0&&void 0!==Wc[a]?Wc[a]:!1},allowProgressiveImg:function(){return i.forceProgressiveLoading||!H||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=yb(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Bb("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),jd(g),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.webkitBackfaceVisibility="hidden",d.style.opacity=1,d.src=g.src,kd(d,g.w,g.h),hd(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(c.img&&(c.img.style.webkitBackfaceVisibility="hidden"),a&&a.index===b){if(jd(c,!0))return c.loadComplete=c.img=null,gd(c,qb),Gb(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!Yc&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):O.transform&&(fb||Yc)?cd.push({item:c,baseDiv:h,img:c.img,index:b,holder:a}):hd(b,c,h,c.img,fb||Yc)}c.loadComplete=null,c.img=null,Bb("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),kd(l,g.w,g.h),h.appendChild(l),g.placeholder=l}g.loading||id(g),f.allowProgressiveImg()&&(!Xc&&O.transform?cd.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):hd(b,g,h,g.img,!0,!0))}gd(g,qb),Xc||b!==m?Gb(g):(eb=h.style,ad(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var md,nd={},od=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};xb("Tap",{publicMethods:{initTap:function(){Ab("firstTouchStart",f.onTapStart),Ab("touchRelease",f.onTapRelease),Ab("destroy",function(){nd={},md=null})},onTapStart:function(a){a.length>1&&(clearTimeout(md),md=null)},onTapRelease:function(a,b){if(b&&!Y&&!W&&!Zb){var c=b;if(md&&(clearTimeout(md),md=null,vc(c,nd)))return void Bb("doubleTap",c);if("mouse"===b.type)return void od(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void od(a,b);Kb(nd,c),md=setTimeout(function(){od(a,b),md=null},300)}}}});var pd;xb("DesktopZoom",{publicMethods:{initDesktopZoom:function(){M||(H?Ab("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){pd={};var c="wheel mousewheel DOMMouseScroll";Ab("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ab("unbindEvents",function(){pd&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),1>s?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ab("resize",g),Ab("afterChange",g),Ab("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ab("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.closeOnScroll?F&&Math.abs(a.deltaY)>2&&(l=!0,f.close()):a.preventDefault(),!0;if(a.preventDefault(),a.stopPropagation(),pd.x=0,"deltaX"in a)1===a.deltaMode?(pd.x=18*a.deltaX,pd.y=18*a.deltaY):(pd.x=a.deltaX,pd.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(pd.x=-.16*a.wheelDeltaX),pd.y=a.wheelDeltaY?-.16*a.wheelDeltaY:-.16*a.wheelDelta;else{if(!("detail"in a))return;pd.y=a.detail}Qb(s,!0),f.panTo(pb.x-pd.x,pb.y-pd.y)},toggleDesktopZoom:function(b){b=b||{x:qb.x/2,y:qb.y/2+N};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd={history:!0,galleryUID:1},Dd=function(){return Ad.hash.substring(1)},Ed=function(){qd&&clearTimeout(qd),sd&&clearTimeout(sd)},Fd=function(){var a=Dd(),b={};if(a.length<5)return b;for(var c=a.split("&"),d=0;d<c.length;d++)if(c[d]){var e=c[d].split("=");e.length<2||(b[e[0]]=e[1])}return b.pid=parseInt(b.pid,10)-1,b.pid<0&&(b.pid=0),b},Gd=function(){if(sd&&clearTimeout(sd),Zb||V)return void(sd=setTimeout(Gd,500));td?clearTimeout(rd):td=!0;var a=wd+"&gid="+i.galleryUID+"&pid="+(m+1);xd||-1===Ad.hash.indexOf(a)&&(zd=!0);var b=Ad.href.split("#")[0]+"#"+a;Bd?"#"+a!==window.location.hash&&history[xd?"replaceState":"pushState"]("",document.title,b):xd?Ad.replace(b):Ad.hash=a,xd=!0,rd=setTimeout(function(){td=!1},60)};xb("History",{publicMethods:{initHistory:function(){if(e.extend(i,Cd,!0),i.history){Ad=window.location,zd=!1,yd=!1,xd=!1,wd=Dd(),Bd="pushState"in history,wd.indexOf("gid=")>-1&&(wd=wd.split("&gid=")[0],wd=wd.split("?gid=")[0]),Ab("afterChange",f.updateURL),Ab("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){vd=!0,yd||(zd?history.back():wd?Ad.hash=wd:Bd?history.pushState("",document.title,Ad.pathname+Ad.search):Ad.hash=""),Ed()};Ab("unbindEvents",function(){l&&a()}),Ab("destroy",function(){vd||a()}),Ab("firstUpdate",function(){m=Fd().pid});var b=wd.indexOf("pid=");b>-1&&(wd=wd.substring(0,b),"&"===wd.slice(-1)&&(wd=wd.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Dd()===wd?(yd=!0,void f.close()):void(td||(ud=!0,f.goTo(Fd().pid),ud=!1))},updateURL:function(){Ed(),ud||(xd?qd=setTimeout(Gd,800):Gd())}}}),e.extend(f,cc)};return a});