// build time:Sat Nov 18 2017 01:20:20 GMT+0800 (中国标准时间)
!function(e,t,n,i){var o=n(e),a=n(t),r=n.fancybox=function(){r.open.apply(this,arguments)},s=null,l=t.createTouch!==i,c=function(e){return e&&e.hasOwnProperty&&e instanceof n},d=function(e){return e&&"string"===n.type(e)},p=function(e){return d(e)&&0<e.indexOf("%")},h=function(e,t){var n=parseInt(e,10)||0;return t&&p(e)&&(n*=r.getViewport()[t]/100),Math.ceil(n)},f=function(e,t){return h(e,t)+"px"};n.extend(r,{version:"2.1.1",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!l,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(n.isPlainObject(t)||(t={}),!1!==r.close(!0)))return n.isArray(e)||(e=c(e)?n(e).get():[e]),n.each(e,function(o,a){var s,l,p,h,f,u={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),c(a)?(u={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,u,a.metadata())):u=a),s=t.href||u.href||(d(a)?a:null),l=t.title!==i?t.title:u.title||"",h=(p=t.content||u.content)?"html":t.type||u.type,!h&&u.isDom&&(h=a.data("fancybox-type"),h||(h=(h=a.prop("class").match(/fancybox\.(\w+)/))?h[1]:null)),d(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":d(a)&&(h="html",p=a)),"ajax"===h&&(f=s.split(/\s+/,2),s=f.shift(),f=f.shift())),p||("inline"===h?s?p=n(d(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):u.isDom&&(p=a):"html"===h?p=s:!h&&!s&&u.isDom&&(h="inline",p=a)),n.extend(u,{href:s,type:h,content:p,title:l,selector:f}),e[o]=u}),r.opts=n.extend(!0,{},r.defaults,t),t.keys!==i&&(r.opts.keys=!!t.keys&&n.extend({},r.defaults.keys,t.keys)),r.group=e,r._start(r.opts.index)},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0).trigger("onReset").remove(),r.current||r.trigger("afterClose"),r.coming=null)},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isOpen&&!0!==e?(r.isOpen=r.isOpened=!1,r.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),"fixed"===r.wrap.css("position")&&r.wrap.css(r._getPosition(!0)),r.transitions[r.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut()))},play:function(e){var t=function(){clearTimeout(r.player.timer)},i=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),n("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")};!0===e||!r.player.isActive&&!1!==e?r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":i,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),i(),r.trigger("onPlayStart")):o()},next:function(e){var t=r.current;t&&(d(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(d(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=r.current;o&&(e=h(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n;r.isOpen&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,r.wrap.stop(!0,!0).animate(n,200)):r.wrap.css(n))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(s),s=null),r.isOpen&&!s&&((n||l)&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),s=setTimeout(function(){var n=r.current;n&&(r.wrap.removeClass("fancybox-tmp"),"scroll"!==t&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),s=null)},l?500:n?20:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===n.type(e)?e:!r.current.fitToView,r.update())},hideLoading:function(){a.unbind("keypress.fb"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),a.bind("keypress.fb",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),e=n('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current&&r.current.locked||!1,n={x:o.scrollLeft(),y:o.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=l&&e.innerWidth?e.innerWidth:o.width(),n.h=l&&e.innerHeight?e.innerHeight:o.height()),n},unbindEvents:function(){r.wrap&&c(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(t.autoResize?" resize.fb":"")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),(e=t.keys)&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;!o.ctrlKey&&!o.altKey&&!o.shiftKey&&!o.metaKey&&(!s||!s.type&&!n(s).is("[contenteditable]"))&&n.each(e,function(e,s){return 1<t.group.length&&s[a]!==i?(r[e](s[a]),o.preventDefault(),!1):-1<n.inArray(a,s)?(r[e](),o.preventDefault(),!1):void 0})}),n.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var s=n(e.target||null),l=!1;s.length&&!l&&!s.is(".fancybox-skin")&&!s.is(".fancybox-wrap");)l=s[0]&&!(s[0].style.overflow&&"hidden"===s[0].style.overflow)&&(s[0].clientWidth&&s[0].scrollWidth>s[0].clientWidth||s[0].clientHeight&&s[0].scrollHeight>s[0].clientHeight),s=n(s).parent();0!==i&&!l&&1<r.group.length&&!t.canShrink&&(0<a||0<o?r.prev(0<a?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||r.coming||r.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),!1===i)return!1;"onCancel"===e&&!r.isOpened&&(r.isActive=!1),o.helpers&&n.each(o.helpers,function(t,i){i&&r.helpers[t]&&n.isFunction(r.helpers[t][e])&&(i=n.extend(!0,{},r.helpers[t].defaults,i),r.helpers[t][e](i,o))}),n.event.trigger(e+".fb")}},isImage:function(e){return d(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return d(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o={},e=h(e);if(t=r.group[e]||null,!t)return!1;if(o=n.extend(!0,{},r.opts,t),t=o.margin,i=o.padding,"number"===n.type(t)&&(o.margin=[t,t,t,t]),"number"===n.type(i)&&(o.padding=[i,i,i,i]),o.modal&&n.extend(!0,o,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),o.autoSize&&(o.autoWidth=o.autoHeight=!0),"auto"===o.width&&(o.autoWidth=!0),"auto"===o.height&&(o.autoHeight=!0),o.group=r.group,o.index=e,r.coming=o,!1===r.trigger("beforeLoad"))r.coming=null;else{if(i=o.type,t=o.href,!i)return r.coming=null,!(!r.current||!r.router||"jumpto"===r.router)&&(r.current.index=e,r[r.router](r.direction));if(r.isActive=!0,"image"!==i&&"swf"!==i||(o.autoHeight=o.autoWidth=!1,o.scrolling="visible"),"image"===i&&(o.aspectRatio=!0),"iframe"===i&&l&&(o.scrolling="scroll"),o.wrap=n(o.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+o.wrapCSS).appendTo(o.parent||"body"),n.extend(o,{skin:n(".fancybox-skin",o.wrap),outer:n(".fancybox-outer",o.wrap),inner:n(".fancybox-inner",o.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){o.skin.css("padding"+t,f(o.padding[e]))}),r.trigger("onReady"),"inline"===i||"html"===i){if(!o.content||!o.content.length)return r._error("content")}else if(!t)return r._error("href");"image"===i?r._loadImage():"ajax"===i?r._loadAjax():"iframe"===i?r._loadIframe():r._afterLoad()}},_error:function(e){n.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,(e.complete===i||!e.complete)&&r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){n(this).data("ready",1),l||n(this).bind("load.fb",r.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,n=r.group,i=r.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;t<=a;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,s=r.coming,l=r.current;if(r.hideLoading(),s&&!1!==r.isActive)if(!1===r.trigger("afterLoad",s,l))s.wrap.stop(!0).trigger("onReset").remove(),r.coming=null;else{switch(l&&(r.trigger("beforeChange",l),l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(),"fixed"===l.wrap.css("position")&&l.wrap.css(r._getPosition(!0))),r.unbindEvents(),e=s.content,t=s.type,i=s.scrolling,n.extend(r,{wrap:s.wrap,skin:s.skin,outer:s.outer,inner:s.inner,current:s,previous:l}),o=s.href,t){case"inline":case"ajax":case"html":s.selector?e=n("<div>").html(e).find(s.selector):c(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),s.wrap.bind("onReset",function(){n(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=s.tpl.image.replace("{href}",o);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+o+'"></param>',a="",n.each(s.swf,function(t,n){e+='<param name="'+t+'" value="'+n+'"></param>',a+=" "+t+'="'+n+'"'}),e+='<embed src="'+o+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"></embed></object>"}(!c(e)||!e.parent().is(s.inner))&&s.inner.append(e),r.trigger("beforeShow"),s.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i),r._setDimension(),s.wrap.removeClass("fancybox-tmp"),s.pos=n.extend({},s.dim,r._getPosition(!0)),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?l.prevMethod&&r.transitions[l.prevMethod]():n(".fancybox-wrap").not(s.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?s.nextMethod:s.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,i,o,a,s,l,c,d,u=r.getViewport(),g=0,m=!1,y=!1,m=r.wrap,w=r.skin,b=r.inner,x=r.current,y=x.width,v=x.height,k=x.minWidth,C=x.minHeight,O=x.maxWidth,W=x.maxHeight,_=x.scrolling,S=x.scrollOutside?x.scrollbarWidth:0,P=x.margin,E=P[1]+P[3],T=P[0]+P[2];if(m.add(w).add(b).width("auto").height("auto"),P=w.outerWidth(!0)-w.width(),e=w.outerHeight(!0)-w.height(),t=E+P,i=T+e,o=p(y)?(u.w-t)*h(y)/100:y,a=p(v)?(u.h-i)*h(v)/100:v,"iframe"===x.type){if(d=x.content,x.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(b.width(o).height(9999),s=d.contents().find("body"),S&&s.css("overflow-x","hidden"),a=s.height())}catch(j){}}else(x.autoWidth||x.autoHeight)&&(b.addClass("fancybox-tmp"),x.autoWidth||b.width(o),x.autoHeight||b.height(a),x.autoWidth&&(o=b.width()),x.autoHeight&&(a=b.height()),b.removeClass("fancybox-tmp"));if(y=h(o),v=h(a),c=o/a,k=h(p(k)?h(k,"w")-t:k),O=h(p(O)?h(O,"w")-t:O),C=h(p(C)?h(C,"h")-i:C),W=h(p(W)?h(W,"h")-i:W),s=O,l=W,E=u.w-E,T=u.h-T,x.aspectRatio?(y>O&&(y=O,v=y/c),v>W&&(v=W,y=v*c),y<k&&(y=k,v=y/c),v<C&&(v=C,y=v*c)):(y=Math.max(k,Math.min(y,O)),v=Math.max(C,Math.min(v,W))),x.fitToView)if(O=Math.min(u.w-t,O),W=Math.min(u.h-i,W),b.width(h(y)).height(h(v)),m.width(h(y+P)),u=m.width(),t=m.height(),x.aspectRatio)for(;(u>E||t>T)&&y>k&&v>C&&!(19<g++);)v=Math.max(C,Math.min(W,v-10)),y=v*c,y<k&&(y=k,v=y/c),y>O&&(y=O,v=y/c),b.width(h(y)).height(h(v)),m.width(h(y+P)),u=m.width(),t=m.height();else y=Math.max(k,Math.min(y,y-(u-E))),v=Math.max(C,Math.min(v,v-(t-T)));S&&"auto"===_&&v<a&&y+P+S<E&&(y+=S),b.width(h(y)).height(h(v)),m.width(h(y+P)),u=m.width(),t=m.height(),m=(u>E||t>T)&&y>k&&v>C,y=x.aspectRatio?y<s&&v<l&&y<o&&v<a:(y<s||v<l)&&(y<o||v<a),n.extend(x,{dim:{width:f(u),height:f(t)},origWidth:o,origHeight:a,canShrink:m,canExpand:y,wPadding:P,hPadding:e,wrapSpace:t-w.outerHeight(!0),skinSpace:w.height()-v}),!d&&x.autoHeight&&v>C&&v<W&&!y&&b.height("auto")},_getPosition:function(e){var t=r.current,n=r.getViewport(),i=t.margin,o=r.wrap.width()+i[1]+i[3],a=r.wrap.height()+i[0]+i[2],i={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?i.position="fixed":t.locked||(i.top+=n.y,i.left+=n.x),i.top=f(Math.max(i.top,i.top+(n.h-a)*t.topRatio)),i.left=f(Math.max(i.left,i.left+(n.w-o)*t.leftRatio)),i},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.addClass("fancybox-opened").css("overflow","visible"),r.reposition(),(e.closeClick||e.nextClick)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){n(t.target).is("a")||n(t.target).parent().is("a")||r[e.closeClick?"close":"next"]()}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",r.close),e.arrows&&1<r.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&n(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(){var e=r.current;n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),n.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,n=e.orig,i={},o=50,a=50,s=e.hPadding,l=e.wPadding,d=r.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),c(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=d.y+(d.h-a)*e.topRatio,i.left=d.x+(d.w-o)*e.leftRatio),e.locked&&(i.top-=d.y,i.left-=d.x),i={top:f(i.top-s*e.topRatio),left:f(i.left-l*e.leftRatio),width:f(o+l),height:f(a+s)}},step:function(e,t){var n,i,o=t.prop;i=r.current;var a=i.wrapSpace,s=i.skinSpace;"width"!==o&&"height"!==o||(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(n=1-n),i="width"===o?i.wPadding:i.hPadding,i=e-i,r.skin[o](h("width"===o?i:i-a*n)),r.inner[o](h("width"===o?i:i-a*n-s*n)))},zoomIn:function(){var e=r.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),r.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=r.direction;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=f(h(i[e])-200),o[e]="+=200px"):(i[e]=f(h(i[e])+200),o[e]="-=200px")),"none"===n?r._afterZoomIn():r.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,i={opacity:.1},o=r.direction;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"=200px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},r.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!0},overlay:null,update:function(){var e,i="100%";this.overlay.width(i).height("100%"),n.browser.msie?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(i=a.width())):a.width()>o.width()&&(i=a.width()),this.overlay.width(i).height(a.height())},onReady:function(e,i){n(".fancybox-overlay").stop(!0,!0),this.overlay||n.extend(this,{overlay:n('<div class="fancybox-overlay"></div>').appendTo(i.parent||"body"),margin:(a.height()>o.height()||"scroll"===n("body").css("overflow-y"))&&n("body").css("margin-right"),el:n(t.all&&!t.querySelector?"html":"body")}),i.fixed&&!l&&(this.overlay.addClass("fancybox-overlay-fixed"),i.autoCenter&&e.locked&&(i.locked=this.overlay.append(i.wrap))),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i=this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);e.closeClick&&i.bind("click.fb",function(e){n(e.target).hasClass("fancybox-overlay")&&r.close()}),t.fixed&&!l?t.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&n("body").css("margin-right",h(this.margin)+t.scrollbarWidth)):this.update(),i.show()},onUpdate:function(e,t){(!t.fixed||l)&&this.update()},afterClose:function(e){var t=this,e=e.speedOut||0;t.overlay&&!r.isActive&&t.overlay.fadeOut(e||0,function(){n("body").css("margin-right",t.margin),t.el.removeClass("fancybox-lock"),t.overlay.remove(),t.overlay=null})}},r.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=r.current,i=t.title,o=e.type;if(n.isFunction(i)&&(i=i.call(t.element,t)),d(i)&&""!==n.trim(i)){switch(t=n('<div class="fancybox-title fancybox-title-'+o+'-wrap">'+i+"</div>"),o){case"inside":o=r.skin;break;case"outside":o=r.wrap;break;case"over":o=r.inner;break;default:o=r.skin,t.appendTo("body"),n.browser.msie&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(h(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](o)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",s=function(a){var s,l,c=n(this).blur(),d=t;!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&!c.is(".fancybox-wrap")&&(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+s+'="'+l+'"]'),d=c.index(this)),e.index=d,!1!==r.open(c,e)&&a.preventDefault())},e=e||{};return t=e.index||0,o&&!1!==e.live?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):i.unbind("click.fb-start").bind("click.fb-start",s),this},a.ready(function(){if(n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t}),n.support.fixedPosition===i){var e=n.support,t=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),o=20===t[0].offsetTop||15===t[0].offsetTop;t.remove(),e.fixedPosition=o}n.extend(r.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})}(window,document,jQuery);
//rebuild by neat 