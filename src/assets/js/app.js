// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-container').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav-container').removeClass('active').addClass('inactive');
        $('.project-nav').removeClass('active').addClass('inactive');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.nav-container').removeClass('inactive').addClass('active');
            $('.project-nav').removeClass('inactive').addClass('active');
        }
    }
    
    lastScrollTop = st;
}


// Parallax Images
var $layer_0 = $('.layer-0'),
    $layer_1 = $('.layer-1'),
    $layer_2 = $('.layer-2'),
    $x_axis  = $('#x-axis'),
    $y_axis  = $('#y-axis'),
    $container = $('.image-effect'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove.parallax', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;
  
  TweenMax.to(
    $x_axis, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + (left * -1) + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $y_axis, 
    1, 
    { 
      css: { 
        transform: 'translateY(' + (top * -1) + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_2, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 40 + 'px) translateY(' + top / 100 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 20 + 'px) translateY(' + top / 100 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_0,
    10,
    {
      css: {
        transform: 'rotate(' + left / 250 + 'deg)'
      },
      ease: Expo.easeOut,
      overwrite: 'none'
    }
  )
});


/*
//Project Header Image Effect
!function(e){var t={strength:25,scale:1.05,animationSpeed:"100ms",contain:true,wrapContent:false};e.fn.interactive_bg=function(n){return this.each(function(){var r=e.extend({},t,n),i=e(this),s=i.outerHeight(),o=i.outerWidth(),u=r.strength/s,a=r.strength/o,f="ontouchstart"in document.documentElement;if(r.contain==true){i.css({overflow:"hidden"})}if(r.wrapContent==false){i.prepend("<div class='ibg-bg'></div>")}else{i.wrapInner("<div class='ibg-bg'></div>")}if(i.data("ibg-bg")!==undefined){i.find("> .ibg-bg").css({background:"url('"+i.data("ibg-bg")+"') no-repeat center center","background-size":"cover"})}i.find("> .ibg-bg").css({width:o,height:s});if(f||screen.width<=699){window.addEventListener("devicemotion",l,false);function l(e){var t=Math.round(event.accelerationIncludingGravity.x*10)/10,n=Math.round(event.accelerationIncludingGravity.y*10)/10,s=-(t/10)*r.strength,o=-(n/10)*r.strength,u=-(s*2),a=-(o*2);i.find("> .ibg-bg").css({"-webkit-transform":"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")","-moz-transform":"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")","-o-transform":"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")",transform:"matrix("+r.scale+",0,0,"+r.scale+","+u+","+a+")"})}}else{i.mouseenter(function(e){if(r.scale!=1)i.addClass("ibg-entering");i.find("> .ibg-bg").css({"-webkit-transform":"matrix("+r.scale+",0,0,"+r.scale+",0,0)","-moz-transform":"matrix("+r.scale+",0,0,"+r.scale+",0,0)","-o-transform":"matrix("+r.scale+",0,0,"+r.scale+",0,0)",transform:"matrix("+r.scale+",0,0,"+r.scale+",0,0)","-webkit-transition":"-webkit-transform "+r.animationSpeed+" linear","-moz-transition":"-moz-transform "+r.animationSpeed+" linear","-o-transition":"-o-transform "+r.animationSpeed+" linear",transition:"transform "+r.animationSpeed+" linear"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){i.removeClass("ibg-entering")})}).mousemove(function(e){if(!i.hasClass("ibg-entering")&&!i.hasClass("exiting")){var t=e.pageX||e.clientX,n=e.pageY||e.clientY,t=t-i.offset().left-o/2,n=n-i.offset().top-s/2,f=a*t*-1,l=u*n*-1;i.find("> .ibg-bg").css({"-webkit-transform":"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")","-moz-transform":"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")","-o-transform":"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")",transform:"matrix("+r.scale+",0,0,"+r.scale+","+f+","+l+")","-webkit-transition":"none","-moz-transition":"none","-o-transition":"none",transition:"none"})}}).mouseleave(function(e){if(r.scale!=1)i.addClass("ibg-exiting");i.addClass("ibg-exiting").find("> .ibg-bg").css({"-webkit-transform":"matrix(1,0,0,1,0,0)","-moz-transform":"matrix(1,0,0,1,0,0)","-o-transform":"matrix(1,0,0,1,0,0)",transform:"matrix(1,0,0,1,0,0)","-webkit-transition":"-webkit-transform "+r.animationSpeed+" linear","-moz-transition":"-moz-transform "+r.animationSpeed+" linear","-o-transition":"-o-transform "+r.animationSpeed+" linear",transition:"transform "+r.animationSpeed+" linear"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){i.removeClass("ibg-exiting")})})}})}}(window.jQuery)

$(".bg").interactive_bg({
   strength: 25,
   scale: 1.05,
   animationSpeed: "100ms",
   contain: true,
   wrapContent: false
 });
//End Project Header Image Effect
*/



$(document).foundation();
