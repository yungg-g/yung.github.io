$(document).ready(function(){
  $(window).scroll(function() {  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('section');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
    
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
          
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    }); 
    if($('body').hasClass('color-lavender') == true){
        $("#header").addClass('lavender');
    }else{
        $("#header").removeClass('lavender');
    };
    
  }).scroll();

  //슬라이드
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
