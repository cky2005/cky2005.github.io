// build time:Fri Aug 25 2017 11:53:32 GMT+0800 (中国标准时间)
(function(t){t(".entry").each(function(a){t(this).find('img:not([class*="no-fancybox"])').each(function(){var n=this.alt;if(n){t(this).after('<span class="caption">'+n+"</span>")}if(t(this).parent("a").length===0){t(this).wrap('<a href="'+this.src+'" title="'+n+'" class="fancybox" rel="gallery'+a+'" />')}})});var a=function(t,a,n){var i=t.width();a.imagesLoaded(function(){var a=this[0],e=a.naturalWidth,c=a.naturalHeight;n();this.animate({opacity:1},500);t.animate({height:i*c/e},500)})};t(".gallery").each(function(){var n=t(this),i=0,e=n.children(".photoset").children(),c=e.length,r=true;a(n,e.eq(0),function(){r=false});n.on("click",".prev",function(){if(!r){var t=(i-1)%c;r=true;a(n,e.eq(t),function(){e.eq(i).animate({opacity:0},500);r=false;i=t})}}).on("click",".next",function(){if(!r){var t=(i+1)%c;r=true;a(n,e.eq(t),function(){e.eq(i).animate({opacity:0},500);r=false;i=t})}})})})(jQuery);
//rebuild by neat 