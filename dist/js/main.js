!function(){var o={369:function(o){o.exports=function(){$("[data-collapse]").on("click",(function(o){o.preventDefault();let t=$(this);blockId=t.data("collapse"),$(blockId).slideToggle("")}))}},409:function(o){o.exports=function(){$("#nav_toggle").on("click",(function(o){o.preventDefault(),$(this).toggleClass("active"),$("#nav").toggleClass("active")}))}},246:function(o){o.exports=function(o,t,n,e){o>=t?n.addClass(e):n.removeClass(e)}},784:function(o){o.exports=function(){$("[data-slider]").slick({infinite:!0,slidesToShow:1,slidesToScroll:1})}},558:function(o){o.exports=function(){$("[data-scroll]").on("click",(function(o){o.preventDefault();const t=$(this),n=t.data("scroll"),e=$(n).offset().top;$("#nav a").removeClass("active"),t.addClass("active"),$("html, body").animate({scrollTop:e},500)}))}}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var l=t[e]={exports:{}};return o[e](l,l.exports,n),l.exports}!function(){const o=n(246),t=n(558),e=n(409),i=n(369),l=n(784);$((function(){const n=$("#header"),s=$("#intro").innerHeight();let c=$(window).scrollTop();o(c,s,n,"fixed"),t(),e(),i(),l(),$(window).on("scroll",(function(){c=$(this).scrollTop(),o(c,s,n,"fixed")}))}))}()}();