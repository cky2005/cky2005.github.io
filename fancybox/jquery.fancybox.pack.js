// build time:Tue Oct 17 2017 14:40:24 GMT+0800 (中国标准时间)
(function(e,t,n,i){var o=n(e),a=n(t),r=n.fancybox=function(){r.open.apply(this,arguments)},s=null,l=t.createTouch!==i,c=function(e){return e&&e.hasOwnProperty&&e instanceof n},d=function(e){return e&&"string"===n.type(e)},p=function(e){return d(e)&&0<e.indexOf("%")},f=function(e,t){var n=parseInt(e,10)||0;t&&p(e)&&(n*=r.getViewport()[t]/100);return Math.ceil(n)},h=function(e,t){return f(e,t)+"px"};n.extend(r,{version:"2.1.1",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!l,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(n.isPlainObject(t)||(t={}),!1!==r.close(!0)))return n.isArray(e)||(e=c(e)?n(e).get():[e]),n.each(e,function(o,a){var s={},l,p,f,h,u;"object"===n.type(a)&&(a.nodeType&&(a=n(a)),c(a)?(s={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,s,a.metadata())):s=a);l=t.href||s.href||(d(a)?a:null);p=t.title!==i?t.title:s.title||"";h=(f=t.content||s.content)?"html":t.type||s.type;!h&&s.isDom&&(h=a.data("fancybox-type"),h||(h=(h=a.prop("class").match(/fancybox\.(\w+)/))?h[1]:null));d(l)&&(h||(r.isImage(l)?h="image":r.isSWF(l)?h="swf":"#"===l.charAt(0)?h="inline":d(a)&&(h="html",f=a)),"ajax"===h&&(u=l.split(/\s+/,2),l=u.shift(),u=u.shift()));f||("inline"===h?l?f=n(d(l)?l.replace(/.*(?=#[^\s]+$)/,""):l):s.isDom&&(f=a):"html"===h?f=l:!h&&(!l&&s.isDom)&&(h="inline",f=a));n.extend(s,{href:l,type:h,content:f,title:p,selector:u});e[o]=s}),r.opts=n.extend(!0,{},r.defaults,t),t.keys!==i&&(r.opts.keys=t.keys?n.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0).trigger("onReset").remove(),r.current||r.trigger("afterClose"),r.coming=null)},close:function(e){r.cancel();!1!==r.trigger("beforeClose")&&(r.unbindEvents(),!r.isOpen||!0===e?(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut()):(r.isOpen=r.isOpened=!1,r.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),"fixed"===r.wrap.css("position")&&r.wrap.css(r._getPosition(!0)),r.transitions[r.current.closeMethod]()))},play:function(e){var t=function(){clearTimeout(r.player.timer)},i=function(){t();r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t();n("body").unbind(".player");r.player.isActive=!1;r.trigger("onPlayEnd")};if(!0===e||!r.player.isActive&&!1!==e){if(r.current&&(r.current.loop||r.current.index<r.group.length-1))r.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":i,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),i(),r.trigger("onPlayStart")}else o()},next:function(e){var t=r.current;t&&(d(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(d(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=r.current;o&&(e=f(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n;r.isOpen&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,r.wrap.stop(!0,!0).animate(n,200)):r.wrap.css(n))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(s),s=null);if(r.isOpen&&!s){if(n||l)r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate");s=setTimeout(function(){var n=r.current;n&&(r.wrap.removeClass("fancybox-tmp"),"scroll"!==t&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),s=null)},l?500:n?20:300)}},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===n.type(e)?e:!r.current.fitToView,r.update())},hideLoading:function(){a.unbind("keypress.fb");n("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading();a.bind("keypress.fb",function(e){if(27===(e.which||e.keyCode))e.preventDefault(),r.cancel()});e=n('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body");r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current&&r.current.locked||!1,n={x:o.scrollLeft(),y:o.scrollTop()};t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=l&&e.innerWidth?e.innerWidth:o.width(),n.h=l&&e.innerHeight?e.innerHeight:o.height());return n},unbindEvents:function(){r.wrap&&c(r.wrap)&&r.wrap.unbind(".fb");a.unbind(".fb");o.unbind(".fb")},bindEvents:function(){var e=r.current,t;e&&(o.bind("orientationchange.fb"+(e.autoResize?" resize.fb":"")+(e.autoCenter&&!e.locked?" scroll.fb":""),r.update),(t=e.keys)&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;!o.ctrlKey&&(!o.altKey&&!o.shiftKey&&!o.metaKey&&(!s||!s.type&&!n(s).is("[contenteditable]")))&&n.each(t,function(t,s){if(1<e.group.length&&s[a]!==i)return r[t](s[a]),o.preventDefault(),!1;if(-1<n.inArray(a,s))return r[t](),o.preventDefault(),!1})}),n.fn.mousewheel&&e.mouseWheel&&r.wrap.bind("mousewheel.fb",function(t,i,o,a){for(var s=n(t.target||null),l=!1;s.length&&!l&&!s.is(".fancybox-skin")&&!s.is(".fancybox-wrap");)l=s[0]&&!(s[0].style.overflow&&"hidden"===s[0].style.overflow)&&(s[0].clientWidth&&s[0].scrollWidth>s[0].clientWidth||s[0].clientHeight&&s[0].scrollHeight>s[0].clientHeight),s=n(s).parent();if(0!==i&&!l&&1<r.group.length&&!e.canShrink){if(0<a||0<o)r.prev(0<a?"down":"left");else if(0>a||0>o)r.next(0>a?"up":"right");t.preventDefault()}}))},trigger:function(e,t){var i,o=t||r.coming||r.current;if(o){n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1)));if(!1===i)return!1;"onCancel"===e&&!r.isOpened&&(r.isActive=!1);o.helpers&&n.each(o.helpers,function(t,i){i&&(r.helpers[t]&&n.isFunction(r.helpers[t][e]))&&(i=n.extend(!0,{},r.helpers[t].defaults,i),r.helpers[t][e](i,o))});n.event.trigger(e+".fb")}},isImage:function(e){return d(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return d(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t={},i,o,e=f(e);i=r.group[e]||null;if(!i)return!1;t=n.extend(!0,{},r.opts,i);i=t.margin;o=t.padding;"number"===n.type(i)&&(t.margin=[i,i,i,i]);"number"===n.type(o)&&(t.padding=[o,o,o,o]);t.modal&&n.extend(!0,t,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});t.autoSize&&(t.autoWidth=t.autoHeight=!0);"auto"===t.width&&(t.autoWidth=!0);"auto"===t.height&&(t.autoHeight=!0);t.group=r.group;t.index=e;r.coming=t;if(!1===r.trigger("beforeLoad"))r.coming=null;else{o=t.type;i=t.href;if(!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;r.isActive=!0;if("image"===o||"swf"===o)t.autoHeight=t.autoWidth=!1,t.scrolling="visible";"image"===o&&(t.aspectRatio=!0);"iframe"===o&&l&&(t.scrolling="scroll");t.wrap=n(t.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body");n.extend(t,{skin:n(".fancybox-skin",t.wrap),outer:n(".fancybox-outer",t.wrap),inner:n(".fancybox-inner",t.wrap)});n.each(["Top","Right","Bottom","Left"],function(e,n){t.skin.css("padding"+n,h(t.padding[e]))});r.trigger("onReady");if("inline"===o||"html"===o){if(!t.content||!t.content.length)return r._error("content")}else if(!i)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()}},_error:function(e){n.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error});r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null;r.coming.width=this.width;r.coming.height=this.height;r._afterLoad()};e.onerror=function(){this.onload=this.onerror=null;r._error("image")};e.src=r.coming.href;(e.complete===i||!e.complete)&&r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading();r.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}});e.iframe.preload&&(r.showLoading(),t.one("load",function(){n(this).data("ready",1);l||n(this).bind("load.fb",r.update);n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();r._afterLoad()}));e.content=t.appendTo(e.inner);e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e=r.group,t=r.current,n=e.length,i=t.preload?Math.min(t.preload,n-1):0,o,a;for(a=1;a<=i;a+=1)o=e[(t.index+a)%n],"image"===o.type&&o.href&&((new Image).src=o.href)},_afterLoad:function(){var e=r.coming,t=r.current,i,o,a,s,l;r.hideLoading();if(e&&!1!==r.isActive)if(!1===r.trigger("afterLoad",e,t))e.wrap.stop(!0).trigger("onReset").remove(),r.coming=null;else{t&&(r.trigger("beforeChange",t),t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(),"fixed"===t.wrap.css("position")&&t.wrap.css(r._getPosition(!0)));r.unbindEvents();i=e.content;o=e.type;a=e.scrolling;n.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:t});s=e.href;switch(o){case"inline":case"ajax":case"html":e.selector?i=n("<div>").html(i).find(e.selector):c(i)&&(i.data("fancybox-placeholder")||i.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(i).hide()),i=i.show().detach(),e.wrap.bind("onReset",function(){n(this).find(i).length&&i.hide().replaceAll(i.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":i=e.tpl.image.replace("{href}",s);break;case"swf":i='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+s+'"></param>',l="",n.each(e.swf,function(e,t){i+='<param name="'+e+'" value="'+t+'"></param>';l+=" "+e+'="'+t+'"'}),i+='<embed src="'+s+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}(!c(i)||!i.parent().is(e.inner))&&e.inner.append(i);r.trigger("beforeShow");e.inner.css("overflow","yes"===a?"scroll":"no"===a?"hidden":a);r._setDimension();e.wrap.removeClass("fancybox-tmp");e.pos=n.extend({},e.dim,r._getPosition(!0));r.isOpen=!1;r.coming=null;r.bindEvents();if(r.isOpened){if(t.prevMethod)r.transitions[t.prevMethod]()}else n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove();r.transitions[r.isOpened?e.nextMethod:e.openMethod]();r._preloadImages()}},_setDimension:function(){var e=r.getViewport(),t=0,i=!1,o=!1,i=r.wrap,a=r.skin,s=r.inner,l=r.current,o=l.width,c=l.height,d=l.minWidth,u=l.minHeight,g=l.maxWidth,m=l.maxHeight,y=l.scrolling,w=l.scrollOutside?l.scrollbarWidth:0,b=l.margin,x=b[1]+b[3],v=b[0]+b[2],k,C,O,W,_,S,P,E,T;i.add(a).add(s).width("auto").height("auto");b=a.outerWidth(!0)-a.width();k=a.outerHeight(!0)-a.height();C=x+b;O=v+k;W=p(o)?(e.w-C)*f(o)/100:o;_=p(c)?(e.h-O)*f(c)/100:c;if("iframe"===l.type){if(T=l.content,l.autoHeight&&1===T.data("ready"))try{T[0].contentWindow.document.location&&(s.width(W).height(9999),S=T.contents().find("body"),w&&S.css("overflow-x","hidden"),_=S.height())}catch(j){}}else if(l.autoWidth||l.autoHeight)s.addClass("fancybox-tmp"),l.autoWidth||s.width(W),l.autoHeight||s.height(_),l.autoWidth&&(W=s.width()),l.autoHeight&&(_=s.height()),s.removeClass("fancybox-tmp");o=f(W);c=f(_);E=W/_;d=f(p(d)?f(d,"w")-C:d);g=f(p(g)?f(g,"w")-C:g);u=f(p(u)?f(u,"h")-O:u);m=f(p(m)?f(m,"h")-O:m);S=g;P=m;x=e.w-x;v=e.h-v;l.aspectRatio?(o>g&&(o=g,c=o/E),c>m&&(c=m,o=c*E),o<d&&(o=d,c=o/E),c<u&&(c=u,o=c*E)):(o=Math.max(d,Math.min(o,g)),c=Math.max(u,Math.min(c,m)));if(l.fitToView)if(g=Math.min(e.w-C,g),m=Math.min(e.h-O,m),s.width(f(o)).height(f(c)),i.width(f(o+b)),e=i.width(),C=i.height(),l.aspectRatio)for(;(e>x||C>v)&&(o>d&&c>u)&&!(19<t++);)c=Math.max(u,Math.min(m,c-10)),o=c*E,o<d&&(o=d,c=o/E),o>g&&(o=g,c=o/E),s.width(f(o)).height(f(c)),i.width(f(o+b)),e=i.width(),C=i.height();else o=Math.max(d,Math.min(o,o-(e-x))),c=Math.max(u,Math.min(c,c-(C-v)));w&&("auto"===y&&c<_&&o+b+w<x)&&(o+=w);s.width(f(o)).height(f(c));i.width(f(o+b));e=i.width();C=i.height();i=(e>x||C>v)&&o>d&&c>u;o=l.aspectRatio?o<S&&c<P&&o<W&&c<_:(o<S||c<P)&&(o<W||c<_);n.extend(l,{dim:{width:h(e),height:h(C)},origWidth:W,origHeight:_,canShrink:i,canExpand:o,wPadding:b,hPadding:k,wrapSpace:C-a.outerHeight(!0),skinSpace:a.height()-c});!T&&(l.autoHeight&&c>u&&c<m&&!o)&&s.height("auto")},_getPosition:function(e){var t=r.current,n=r.getViewport(),i=t.margin,o=r.wrap.width()+i[1]+i[3],a=r.wrap.height()+i[0]+i[2],i={position:"absolute",top:i[0],left:i[3]};t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?i.position="fixed":t.locked||(i.top+=n.y,i.left+=n.x);i.top=h(Math.max(i.top,i.top+(n.h-a)*t.topRatio));i.left=h(Math.max(i.left,i.left+(n.w-o)*t.leftRatio));return i},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.addClass("fancybox-opened").css("overflow","visible"),r.reposition(),(e.closeClick||e.nextClick)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){if(!n(t.target).is("a")&&!n(t.target).parent().is("a"))r[e.closeClick?"close":"next"]()}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",r.close),e.arrows&&1<r.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&n(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),!e.loop&&e.index===e.group.length-1?r.play(!1):r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()))},_afterZoomOut:function(){var e=r.current;n(".fancybox-wrap").stop(!0).trigger("onReset").remove();n.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});r.trigger("afterClose",e)}});r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,n=e.orig,i={},o=50,a=50,s=e.hPadding,l=e.wPadding,d=r.getViewport();!n&&(e.isDom&&t.is(":visible"))&&(n=t.find("img:first"),n.length||(n=t));c(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=d.y+(d.h-a)*e.topRatio,i.left=d.x+(d.w-o)*e.leftRatio);e.locked&&(i.top-=d.y,i.left-=d.x);return i={top:h(i.top-s*e.topRatio),left:h(i.left-l*e.leftRatio),width:h(o+l),height:h(a+s)}},step:function(e,t){var n,i,o=t.prop;i=r.current;var a=i.wrapSpace,s=i.skinSpace;if("width"===o||"height"===o)n=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(n=1-n),i="width"===o?i.wPadding:i.hPadding,i=e-i,r.skin[o](f("width"===o?i:i-a*n)),r.inner[o](f("width"===o?i:i-a*n-s*n))},zoomIn:function(){var e=r.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position;o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1);r.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1));r.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e=r.current,t=e.nextEffect,n=e.pos,i={opacity:1},o=r.direction,a;n.opacity=.1;"elastic"===t&&(a="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(n[a]=h(f(n[a])-200),i[a]="+=200px"):(n[a]=h(f(n[a])+200),i[a]="-=200px"));"none"===t?r._afterZoomIn():r.wrap.css(n).animate(i,{duration:e.nextSpeed,easing:e.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,i={opacity:.1},o=r.direction;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"=200px");e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}};r.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!0},overlay:null,update:function(){var e="100%",i;this.overlay.width(e).height("100%");n.browser.msie?(i=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>i&&(e=a.width())):a.width()>o.width()&&(e=a.width());this.overlay.width(e).height(a.height())},onReady:function(e,i){n(".fancybox-overlay").stop(!0,!0);this.overlay||n.extend(this,{overlay:n('<div class="fancybox-overlay"></div>').appendTo(i.parent||"body"),margin:a.height()>o.height()||"scroll"===n("body").css("overflow-y")?n("body").css("margin-right"):!1,el:t.all&&!t.querySelector?n("html"):n("body")});i.fixed&&!l&&(this.overlay.addClass("fancybox-overlay-fixed"),i.autoCenter&&e.locked&&(i.locked=this.overlay.append(i.wrap)));!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i=this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);e.closeClick&&i.bind("click.fb",function(e){n(e.target).hasClass("fancybox-overlay")&&r.close()});t.fixed&&!l?t.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&n("body").css("margin-right",f(this.margin)+t.scrollbarWidth)):this.update();i.show()},onUpdate:function(e,t){(!t.fixed||l)&&this.update()},afterClose:function(e){var t=this,e=e.speedOut||0;t.overlay&&!r.isActive&&t.overlay.fadeOut(e||0,function(){n("body").css("margin-right",t.margin);t.el.removeClass("fancybox-lock");t.overlay.remove();t.overlay=null})}};r.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=r.current,i=t.title,o=e.type;n.isFunction(i)&&(i=i.call(t.element,t));if(d(i)&&""!==n.trim(i)){t=n('<div class="fancybox-title fancybox-title-'+o+'-wrap">'+i+"</div>");switch(o){case"inside":o=r.skin;break;case"outside":o=r.wrap;break;case"over":o=r.inner;break;default:o=r.skin,t.appendTo("body"),n.browser.msie&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](o)}}};n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",s=function(a){var s=n(this).blur(),l=t,c,d;!a.ctrlKey&&(!a.altKey&&!a.shiftKey&&!a.metaKey)&&!s.is(".fancybox-wrap")&&(c=e.groupAttr||"data-fancybox-group",d=s.attr(c),d||(c="rel",d=s.get(0)[c]),d&&(""!==d&&"nofollow"!==d)&&(s=o.length?n(o):i,s=s.filter("["+c+'="'+d+'"]'),l=s.index(this)),e.index=l,!1!==r.open(s,e)&&a.preventDefault())},e=e||{};t=e.index||0;!o||!1===e.live?i.unbind("click.fb-start").bind("click.fb-start",s):a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s);return this};a.ready(function(){n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();e.remove();return t});if(n.support.fixedPosition===i){var e=n.support,t=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),o=20===t[0].offsetTop||15===t[0].offsetTop;t.remove();e.fixedPosition=o}n.extend(r.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})})(window,document,jQuery);
//rebuild by neat 